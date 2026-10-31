<h1 id="budibase-api">Budibase API v3.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The public API for Budibase apps and its services.

Base URLs:

* <a href="https://budibase.app/api/public/v1">https://budibase.app/api/public/v1</a> - Budibase Cloud API

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **x-budibase-api-key**, in: header. Your individual API key, this will provide access based on the configured RBAC settings of your user.

<h1 id="budibase-api-applications">applications</h1>

## Create an application

<a id="opIdappCreate"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/applications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}' \
  -d '{
    "name": "string",
    "url": "string"
  }'
```

`POST /applications`

<aside class="warning">
This operation is deprecated
</aside>

> Body parameter

```json
{
  "name": "string",
  "url": "string"
}
```

<h3 id="create-an-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|
|body|body|[application](#schemaapplication)|true|none|
|» name|body|string|true|The name of the app.|
|» url|body|string|false|The URL by which the app is accessed, this must be URL encoded.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "app_metadata",
    "appId": "app_dev_957b12f943d348faa61db7e18e088d0f",
    "version": "1.0.58-alpha.0",
    "name": "App name",
    "url": "/url",
    "tenantId": "default",
    "updatedAt": "2022-02-22T13:00:54.035Z",
    "createdAt": "2022-02-11T18:02:26.961Z",
    "status": "development"
  }
}
```

<h3 id="create-an-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the created application.|[applicationOutput](#schemaapplicationoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Retrieve an application

<a id="opIdappGetById"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/applications/%7B%7BappId%7D%7D \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}"
```

`GET /applications/{appId}`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="retrieve-an-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The ID of the app which this request is targeting.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "app_metadata",
    "appId": "app_dev_957b12f943d348faa61db7e18e088d0f",
    "version": "1.0.58-alpha.0",
    "name": "App name",
    "url": "/url",
    "tenantId": "default",
    "updatedAt": "2022-02-22T13:00:54.035Z",
    "createdAt": "2022-02-11T18:02:26.961Z",
    "status": "development"
  }
}
```

<h3 id="retrieve-an-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the retrieved application.|[applicationOutput](#schemaapplicationoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update an application

<a id="opIdappUpdate"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/applications/%7B%7BappId%7D%7D \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -d '{
    "name": "string",
    "url": "string"
  }'
```

`PUT /applications/{appId}`

<aside class="warning">
This operation is deprecated
</aside>

> Body parameter

```json
{
  "name": "string",
  "url": "string"
}
```

<h3 id="update-an-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The ID of the app which this request is targeting.|
|body|body|[application](#schemaapplication)|true|none|
|» name|body|string|true|The name of the app.|
|» url|body|string|false|The URL by which the app is accessed, this must be URL encoded.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "app_metadata",
    "appId": "app_dev_957b12f943d348faa61db7e18e088d0f",
    "version": "1.0.58-alpha.0",
    "name": "App name",
    "url": "/url",
    "tenantId": "default",
    "updatedAt": "2022-02-22T13:00:54.035Z",
    "createdAt": "2022-02-11T18:02:26.961Z",
    "status": "development"
  }
}
```

<h3 id="update-an-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated application.|[applicationOutput](#schemaapplicationoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete an application

<a id="opIdappDestroy"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/applications/%7B%7BappId%7D%7D \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}"
```

`DELETE /applications/{appId}`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="delete-an-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The ID of the app which this request is targeting.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "app_metadata",
    "appId": "app_dev_957b12f943d348faa61db7e18e088d0f",
    "version": "1.0.58-alpha.0",
    "name": "App name",
    "url": "/url",
    "tenantId": "default",
    "updatedAt": "2022-02-22T13:00:54.035Z",
    "createdAt": "2022-02-11T18:02:26.961Z",
    "status": "development"
  }
}
```

<h3 id="delete-an-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the deleted application.|[applicationOutput](#schemaapplicationoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Unpublish an application

<a id="opIdappUnpublish"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/applications/%7B%7BappId%7D%7D/unpublish \
  -X POST \
  -H "x-budibase-api-key: ${API_KEY}"
```

`POST /applications/{appId}/unpublish`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="unpublish-an-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The ID of the app which this request is targeting.|

<h3 id="unpublish-an-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The app was published successfully.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Publish an application

<a id="opIdappPublish"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/applications/%7B%7BappId%7D%7D/publish \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}"
```

`POST /applications/{appId}/publish`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="publish-an-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The ID of the app which this request is targeting.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "ef12381f934b4f129675cdbb76eff3c2",
    "status": "SUCCESS",
    "appUrl": "/app-url"
  }
}
```

<h3 id="publish-an-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the deployment object.|[deploymentOutput](#schemadeploymentoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Import an app to an existing app 🔒

<a id="opIdappImport"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/applications/%7B%7BappId%7D%7D/import \
  -X POST \
  -H "x-budibase-api-key: ${API_KEY}" \
  -F 'encryptedPassword=string' \
  -F 'appExport=@/path/to/file'
```

`POST /applications/{appId}/import`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is only available on a business or enterprise license.

> Body parameter

```yaml
encryptedPassword: string
appExport: string
```

<h3 id="import-an-app-to-an-existing-app--parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The ID of the app which this request is targeting.|
|body|body|object|false|none|
|» encryptedPassword|body|string|false|Password for the export if it is encrypted.|
|» appExport|body|string(binary)|true|The app export to import.|

<h3 id="import-an-app-to-an-existing-app--responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Application has been updated.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Export an app 🔒

<a id="opIdappExport"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/applications/%7B%7BappId%7D%7D/export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -d '{
    "encryptPassword": "string",
    "excludeRows": true
  }'
```

`POST /applications/{appId}/export`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is only available on a business or enterprise license.

> Body parameter

```json
{
  "encryptPassword": "string",
  "excludeRows": true
}
```

<h3 id="export-an-app--parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The ID of the app which this request is targeting.|
|body|body|[appExport](#schemaappexport)|false|none|
|» encryptPassword|body|string|true|An optional password used to encrypt the export.|
|» excludeRows|body|boolean|true|Set whether the internal table rows should be excluded from the export.|

<h3 id="export-an-app--responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A gzip tarball containing the app export, encrypted if password provided.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Search for applications

<a id="opIdappSearch"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/applications/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`POST /applications/search`

<aside class="warning">
This operation is deprecated
</aside>

Based on application properties (currently only name) search for applications.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="search-for-applications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[nameSearch](#schemanamesearch)|true|none|
|» name|body|string|true|The name to be used when searching - this will be used in a case insensitive starts with match.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "_id": "app_metadata",
      "appId": "app_dev_957b12f943d348faa61db7e18e088d0f",
      "version": "1.0.58-alpha.0",
      "name": "App name",
      "url": "/url",
      "tenantId": "default",
      "updatedAt": "2022-02-22T13:00:54.035Z",
      "createdAt": "2022-02-11T18:02:26.961Z",
      "status": "development"
    }
  ]
}
```

<h3 id="search-for-applications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the applications that were found based on the search parameters.|[applicationSearch](#schemaapplicationsearch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="budibase-api-metrics">metrics</h1>

## Retrieve Budibase tenant metrics

<a id="opIdmetricsGet"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/metrics \
  -H "x-budibase-api-key: ${API_KEY}"
```

`GET /metrics`

Output metrics in OpenMetrics format compatible with Prometheus

> Example responses

> 200 Response

```text
# HELP budibase_os_uptime Time in seconds that the host operating system has been up.
# TYPE budibase_os_uptime counter
budibase_os_uptime 54958
# HELP budibase_os_free_mem Bytes of memory free for usage on the host operating system.
# TYPE budibase_os_free_mem gauge
budibase_os_free_mem 804507648
# HELP budibase_os_total_mem Total bytes of memory on the host operating system.
# TYPE budibase_os_total_mem gauge
budibase_os_total_mem 16742404096
# HELP budibase_os_used_mem Total bytes of memory in use on the host operating system.
# TYPE budibase_os_used_mem gauge
budibase_os_used_mem 15937896448
# HELP budibase_os_load1 Host operating system load average.
# TYPE budibase_os_load1 gauge
budibase_os_load1 1.91
# HELP budibase_os_load5 Host operating system load average.
# TYPE budibase_os_load5 gauge
budibase_os_load5 1.75
# HELP budibase_os_load15 Host operating system load average.
# TYPE budibase_os_load15 gauge
budibase_os_load15 1.56
# HELP budibase_tenant_user_count The number of users created.
# TYPE budibase_tenant_user_count gauge
budibase_tenant_user_count 1
# HELP budibase_tenant_app_count The number of apps created by a user.
# TYPE budibase_tenant_app_count gauge
budibase_tenant_app_count 2
# HELP budibase_tenant_production_app_count The number of apps a user has published.
# TYPE budibase_tenant_production_app_count gauge
budibase_tenant_production_app_count 1
# HELP budibase_tenant_dev_app_count The number of apps a user has unpublished in development.
# TYPE budibase_tenant_dev_app_count gauge
budibase_tenant_dev_app_count 1
# HELP budibase_tenant_db_count The number of couchdb databases including global tables such as _users.
# TYPE budibase_tenant_db_count gauge
budibase_tenant_db_count 3
# HELP budibase_quota_usage_apps The number of apps created.
# TYPE budibase_quota_usage_apps gauge
budibase_quota_usage_apps 1
# HELP budibase_quota_limit_apps The limit on the number of apps that can be created.
# TYPE budibase_quota_limit_apps gauge
budibase_quota_limit_apps 9007199254740991
# HELP budibase_quota_usage_rows The number of database rows used from the quota.
# TYPE budibase_quota_usage_rows gauge
budibase_quota_usage_rows 0
# HELP budibase_quota_limit_rows The limit on the number of rows that can be created.
# TYPE budibase_quota_limit_rows gauge
budibase_quota_limit_rows 9007199254740991
# HELP budibase_quota_usage_plugins The number of plugins in use.
# TYPE budibase_quota_usage_plugins gauge
budibase_quota_usage_plugins 0
# HELP budibase_quota_limit_plugins The limit on the number of plugins that can be created.
# TYPE budibase_quota_limit_plugins gauge
budibase_quota_limit_plugins 9007199254740991
# HELP budibase_quota_usage_user_groups The number of user groups created.
# TYPE budibase_quota_usage_user_groups gauge
budibase_quota_usage_user_groups 0
# HELP budibase_quota_limit_user_groups The limit on the number of user groups that can be created.
# TYPE budibase_quota_limit_user_groups gauge
budibase_quota_limit_user_groups 9007199254740991
# HELP budibase_quota_usage_queries The number of queries used in the current month.
# TYPE budibase_quota_usage_queries gauge
budibase_quota_usage_queries 0
# HELP budibase_quota_limit_queries The limit on the number of queries for the current month.
# TYPE budibase_quota_limit_queries gauge
budibase_quota_limit_queries 9007199254740991
# HELP budibase_quota_usage_automations The number of automations used in the current month.
# TYPE budibase_quota_usage_automations gauge
budibase_quota_usage_automations 0
# HELP budibase_quota_limit_automations The limit on the number of automations that can be created.
# TYPE budibase_quota_limit_automations gauge
budibase_quota_limit_automations 9007199254740991

```

<h3 id="retrieve-budibase-tenant-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns tenant metrics.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="budibase-api-queries">queries</h1>

## Execute a query

<a id="opIdqueryExecute"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/queries/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}' \
  -d '{
    "parameters": {
      "property1": null,
      "property2": null
    },
    "pagination": {
      "page": "string",
      "limit": 0
    }
  }'
```

`POST /queries/{queryId}`

Queries which have been created within a Budibase app can be executed using this,

> Body parameter

```json
{
  "parameters": {
    "property1": null,
    "property2": null
  },
  "pagination": {
    "page": "string",
    "limit": 0
  }
}
```

<h3 id="execute-a-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queryId|path|string|true|The ID of the query which this request is targeting.|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|
|body|body|[executeQuery](#schemaexecutequery)|true|none|
|» parameters|body|object|false|This contains the required parameters for the query, this depends on query type, setup and bindings.|
|» » **additionalProperties**|body|object|false|Key value properties of any type, depending on the query output schema.|
|» pagination|body|object|false|For supported query types (currently on REST) pagination can be performed using these properties.|
|» » page|body|string|false|The page which has been returned from a previous query.|
|» » limit|body|number|false|The number of rows to return per page.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "value": "<html lang='en-GB'></html>"
    }
  ],
  "pagination": {
    "cursor": "2"
  },
  "raw": "<html lang='en-GB'></html>",
  "headers": {
    "content-type": "text/html; charset=ISO-8859-1"
  }
}
```

<h3 id="execute-a-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the result of the query execution.|[executeQueryOutput](#schemaexecutequeryoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Search for queries

<a id="opIdquerySearch"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/queries/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}' \
  -d '{
    "name": "string"
  }'
```

`POST /queries/search`

Based on query properties (currently only name) search for queries.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="search-for-queries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|
|body|body|[nameSearch](#schemanamesearch)|true|none|
|» name|body|string|true|The name to be used when searching - this will be used in a case insensitive starts with match.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "_id": "query_datasource_plus_4d8be0c506b9465daf4bf84d890fdab6_454854487c574d45bc4029b1e153219e",
      "datasourceId": "datasource_plus_4d8be0c506b9465daf4bf84d890fdab6",
      "parameters": [],
      "fields": {
        "sql": "select * from persons"
      },
      "queryVerb": "read",
      "name": "Help",
      "schema": {
        "personid": {
          "name": "personid",
          "type": "string"
        },
        "lastname": {
          "name": "lastname",
          "type": "string"
        },
        "firstname": {
          "name": "firstname",
          "type": "string"
        },
        "address": {
          "name": "address",
          "type": "string"
        },
        "city": {
          "name": "city",
          "type": "string"
        }
      },
      "transformer": "return data",
      "readable": true
    }
  ]
}
```

<h3 id="search-for-queries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the queries found based on the search parameters.|[querySearch](#schemaquerysearch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="budibase-api-roles">roles</h1>

## Assign a role to a list of users

<a id="opIdroleAssign"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/roles/assign \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -d '{
    "appBuilder": {
      "appId": "string"
    },
    "builder": true,
    "admin": true,
    "role": {
      "roleId": "string",
      "appId": "string"
    },
    "userIds": [
      "string"
    ]
  }'
```

`POST /roles/assign`

This is a business/enterprise only endpoint

> Body parameter

```json
{
  "appBuilder": {
    "appId": "string"
  },
  "builder": true,
  "admin": true,
  "role": {
    "roleId": "string",
    "appId": "string"
  },
  "userIds": [
    "string"
  ]
}
```

<h3 id="assign-a-role-to-a-list-of-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[rolesAssign](#schemarolesassign)|true|none|
|» appBuilder|body|object|false|Allow setting users to builders per app.|
|» » appId|body|string|true|The app that the users should have app builder privileges granted for.|
|» builder|body|boolean|false|Add/remove global builder permissions from the list of users.|
|» admin|body|boolean|false|Add/remove global admin permissions from the list of users.|
|» role|body|object|false|Add/remove a per-app role, such as BASIC, ADMIN etc.|
|» » roleId|body|string|true|The role ID, such as BASIC, ADMIN or a custom role ID.|
|» » appId|body|string|true|The app that the role relates to.|
|» userIds|body|[string]|true|The user IDs to be updated to add/remove the specified roles.|

> Example responses

> 200 Response

```json
{
  "data": {
    "userIds": [
      "string"
    ]
  }
}
```

<h3 id="assign-a-role-to-a-list-of-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of updated user IDs|[rolesOutput](#schemarolesoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Un-assign a role from a list of users

<a id="opIdroleUnAssign"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/roles/unassign \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -d '{
    "appBuilder": {
      "appId": "string"
    },
    "builder": true,
    "admin": true,
    "role": {
      "roleId": "string",
      "appId": "string"
    },
    "userIds": [
      "string"
    ]
  }'
```

`POST /roles/unassign`

This is a business/enterprise only endpoint

> Body parameter

```json
{
  "appBuilder": {
    "appId": "string"
  },
  "builder": true,
  "admin": true,
  "role": {
    "roleId": "string",
    "appId": "string"
  },
  "userIds": [
    "string"
  ]
}
```

<h3 id="un-assign-a-role-from-a-list-of-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[rolesUnAssign](#schemarolesunassign)|true|none|
|» appBuilder|body|object|false|Allow setting users to builders per app.|
|» » appId|body|string|true|The app that the users should have app builder privileges granted for.|
|» builder|body|boolean|false|Add/remove global builder permissions from the list of users.|
|» admin|body|boolean|false|Add/remove global admin permissions from the list of users.|
|» role|body|object|false|Add/remove a per-app role, such as BASIC, ADMIN etc.|
|» » roleId|body|string|true|The role ID, such as BASIC, ADMIN or a custom role ID.|
|» » appId|body|string|true|The app that the role relates to.|
|» userIds|body|[string]|true|The user IDs to be updated to add/remove the specified roles.|

> Example responses

> 200 Response

```json
{
  "data": {
    "userIds": [
      "string"
    ]
  }
}
```

<h3 id="un-assign-a-role-from-a-list-of-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of updated user IDs|[rolesOutput](#schemarolesoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="budibase-api-rows">rows</h1>

## Create a row

<a id="opIdrowCreate"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/tables/string/rows \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}' \
  -d '{
    "_id": "ro_ta_5b1649e42a5b41dea4ef7742a36a7a70_e6dc7e38cf1343b2b56760265201cda4",
    "type": "row",
    "tableId": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
    "name": "Mike",
    "age": 30,
    "relationship": [
      "ro_ta_..."
    ]
  }'
```

`POST /tables/{tableId}/rows`

Creates a row within the specified table.

> Body parameter

```json
{
  "_id": "ro_ta_5b1649e42a5b41dea4ef7742a36a7a70_e6dc7e38cf1343b2b56760265201cda4",
  "type": "row",
  "tableId": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
  "name": "Mike",
  "age": 30,
  "relationship": [
    "ro_ta_..."
  ]
}
```

<h3 id="create-a-row-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tableId|path|string|true|The ID of the table which this request is targeting.|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|
|body|body|[row](#schemarow)|true|none|
|» **additionalProperties**|body|object|false|Key value properties of any type, depending on the table schema.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "ro_ta_5b1649e42a5b41dea4ef7742a36a7a70_e6dc7e38cf1343b2b56760265201cda4",
    "type": "row",
    "tableId": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
    "name": "Mike",
    "age": 30,
    "relationship": [
      {
        "primaryDisplay": "Joe",
        "_id": "ro_ta_..."
      }
    ]
  }
}
```

<h3 id="create-a-row-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the created row, including the ID which has been generated for it. This can be found in the Budibase portal, viewed under the developer information.|[rowOutput](#schemarowoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Retrieve a row

<a id="opIdrowGetById"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/tables/string/rows/string \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}'
```

`GET /tables/{tableId}/rows/{rowId}`

This gets a single row, it will be enriched with the full related rows, rather than the squashed "primaryDisplay" format returned by the search endpoint.

<h3 id="retrieve-a-row-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tableId|path|string|true|The ID of the table which this request is targeting.|
|rowId|path|string|true|The ID of the row which this request is targeting.|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "ro_ta_5b1649e42a5b41dea4ef7742a36a7a70_e6dc7e38cf1343b2b56760265201cda4",
    "name": "eg",
    "tableId": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
    "type": "row",
    "relationship": [
      {
        "_id": "ro_ta_users_us_8f3d717147d74d759d8cef5b6712062f",
        "name": "Joe",
        "tableId": "ta_users",
        "internal": [
          {
            "_id": "ro_ta_5b1649e42a5b41dea4ef7742a36a7a70_e6dc7e38cf1343b2b56760265201cda4",
            "primaryDisplay": "eg"
          }
        ]
      }
    ]
  }
}
```

<h3 id="retrieve-a-row-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the retrieved row.|[rowOutput](#schemarowoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update a row

<a id="opIdrowUpdate"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/tables/string/rows/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}' \
  -d '{
    "_id": "ro_ta_5b1649e42a5b41dea4ef7742a36a7a70_e6dc7e38cf1343b2b56760265201cda4",
    "type": "row",
    "tableId": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
    "name": "Mike",
    "age": 30,
    "relationship": [
      "ro_ta_..."
    ]
  }'
```

`PUT /tables/{tableId}/rows/{rowId}`

Updates a row within the specified table.

> Body parameter

```json
{
  "_id": "ro_ta_5b1649e42a5b41dea4ef7742a36a7a70_e6dc7e38cf1343b2b56760265201cda4",
  "type": "row",
  "tableId": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
  "name": "Mike",
  "age": 30,
  "relationship": [
    "ro_ta_..."
  ]
}
```

<h3 id="update-a-row-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tableId|path|string|true|The ID of the table which this request is targeting.|
|rowId|path|string|true|The ID of the row which this request is targeting.|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|
|body|body|[row](#schemarow)|true|none|
|» **additionalProperties**|body|object|false|Key value properties of any type, depending on the table schema.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "ro_ta_5b1649e42a5b41dea4ef7742a36a7a70_e6dc7e38cf1343b2b56760265201cda4",
    "type": "row",
    "tableId": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
    "name": "Mike",
    "age": 30,
    "relationship": [
      {
        "primaryDisplay": "Joe",
        "_id": "ro_ta_..."
      }
    ]
  }
}
```

<h3 id="update-a-row-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the created row, including the ID which has been generated for it.|[rowOutput](#schemarowoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a row

<a id="opIdrowDestroy"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/tables/string/rows/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}'
```

`DELETE /tables/{tableId}/rows/{rowId}`

Deletes a row within the specified table.

<h3 id="delete-a-row-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tableId|path|string|true|The ID of the table which this request is targeting.|
|rowId|path|string|true|The ID of the row which this request is targeting.|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "ro_ta_5b1649e42a5b41dea4ef7742a36a7a70_e6dc7e38cf1343b2b56760265201cda4",
    "type": "row",
    "tableId": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
    "name": "Mike",
    "age": 30,
    "relationship": [
      {
        "primaryDisplay": "Joe",
        "_id": "ro_ta_..."
      }
    ]
  }
}
```

<h3 id="delete-a-row-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the deleted row, including the ID which has been generated for it.|[rowOutput](#schemarowoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Search for rows

<a id="opIdrowSearch"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/tables/string/rows/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}' \
  -d '{
    "query": {
      "allOr": true,
      "string": {
        "columnName1": "value",
        "columnName2": "value"
      },
      "fuzzy": {},
      "range": {
        "columnName1": {
          "low": 10,
          "high": 20
        }
      },
      "equal": {},
      "notEqual": {},
      "empty": {
        "columnName1": ""
      },
      "notEmpty": {},
      "oneOf": {},
      "contains": {
        "arrayColumn": [
          "a",
          "b"
        ]
      },
      "notContains": {
        "arrayColumn": [
          "a",
          "b"
        ]
      },
      "containsAny": {
        "arrayColumn": [
          "a",
          "b"
        ]
      }
    },
    "paginate": true,
    "bookmark": "string",
    "limit": 0,
    "sort": {
      "order": "ascending",
      "column": "string",
      "type": "string"
    }
  }'
```

`POST /tables/{tableId}/rows/search`

> Body parameter

```json
{
  "query": {
    "allOr": true,
    "string": {
      "columnName1": "value",
      "columnName2": "value"
    },
    "fuzzy": {},
    "range": {
      "columnName1": {
        "low": 10,
        "high": 20
      }
    },
    "equal": {},
    "notEqual": {},
    "empty": {
      "columnName1": ""
    },
    "notEmpty": {},
    "oneOf": {},
    "contains": {
      "arrayColumn": [
        "a",
        "b"
      ]
    },
    "notContains": {
      "arrayColumn": [
        "a",
        "b"
      ]
    },
    "containsAny": {
      "arrayColumn": [
        "a",
        "b"
      ]
    }
  },
  "paginate": true,
  "bookmark": "string",
  "limit": 0,
  "sort": {
    "order": "ascending",
    "column": "string",
    "type": "string"
  }
}
```

<h3 id="search-for-rows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tableId|path|string|true|The ID of the table which this request is targeting.|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|
|body|body|[rowSearch](#schemarowsearch)|false|none|
|» query|body|object|true|none|
|» » allOr|body|boolean|false|Specifies that a row should be returned if it satisfies any of the specified options, rather than requiring it to fulfill all the search parameters. This defaults to false, meaning AND logic will be used.|
|» » string|body|object|false|A map of field name to the string to search for, this will look for rows that have a value starting with the string value.|
|» » » **additionalProperties**|body|string|false|The value to search for in the column.|
|» » fuzzy|body|object|false|Searches for a sub-string within a string column, e.g. searching for 'dib' will match 'Budibase'.|
|» » range|body|object|false|Searches within a range, the format of this must be in the format of an object with a "low" and "high" property.|
|» » equal|body|object|false|Searches for rows that have a column value that is exactly the value set.|
|» » notEqual|body|object|false|Searches for any row which does not contain the specified column value.|
|» » empty|body|object|false|Searches for rows which do not contain the specified column. The object should simply contain keys of the column names, these can map to any value.|
|» » notEmpty|body|object|false|Searches for rows which have the specified column.|
|» » oneOf|body|object|false|Searches for rows which have a column value that is any of the specified values. The format of this must be columnName -> [value1, value2].|
|» » contains|body|object|false|Searches for a value, or set of values in array column types (such as a multi-select). If an array of search options is provided then it must match all.|
|» » notContains|body|object|false|The logical inverse of contains. Only works on array column types. If an array of values is passed, the row must not match any of them to be returned in the response.|
|» » containsAny|body|object|false|As with the contains search, only works on array column types and searches for any of the provided values when given an array.|
|» paginate|body|boolean|false|Enables pagination, by default this is disabled.|
|» bookmark|body|string \| integer|false|If retrieving another page, the bookmark from the previous request must be supplied.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|integer|false|none|
|» limit|body|integer|false|The maximum number of rows to return, useful when paginating, for internal tables this will be limited to 1000, for SQL tables it will be 5000.|
|» sort|body|object|false|A set of parameters describing the sort behaviour of the search.|
|» » order|body|string|false|The order of the sort, by default this is ascending.|
|» » column|body|string|false|The name of the column by which the rows will be sorted.|
|» » type|body|string|false|Defines whether the column should be treated as a string or as numbers when sorting.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » order|ascending|
|» » order|descending|
|» » type|string|
|» » type|number|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "_id": "ro_ta_5b1649e42a5b41dea4ef7742a36a7a70_e6dc7e38cf1343b2b56760265201cda4",
      "type": "row",
      "tableId": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
      "name": "Mike",
      "age": 30,
      "relationship": [
        {
          "primaryDisplay": "Joe",
          "_id": "ro_ta_..."
        }
      ]
    }
  ],
  "hasNextPage": true,
  "bookmark": 10
}
```

<h3 id="search-for-rows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response will contain an array of rows that match the search parameters.|[searchOutput](#schemasearchoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Search for rows in a view

<a id="opIdrowViewSearch"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/views/string/rows/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}' \
  -d '{
    "query": {
      "allOr": true,
      "string": {
        "columnName1": "value",
        "columnName2": "value"
      },
      "fuzzy": {},
      "range": {
        "columnName1": {
          "low": 10,
          "high": 20
        }
      },
      "equal": {},
      "notEqual": {},
      "empty": {
        "columnName1": ""
      },
      "notEmpty": {},
      "oneOf": {},
      "contains": {
        "arrayColumn": [
          "a",
          "b"
        ]
      },
      "notContains": {
        "arrayColumn": [
          "a",
          "b"
        ]
      },
      "containsAny": {
        "arrayColumn": [
          "a",
          "b"
        ]
      }
    },
    "paginate": true,
    "bookmark": "string",
    "limit": 0,
    "sort": {
      "order": "ascending",
      "column": "string",
      "type": "string"
    }
  }'
```

`POST /views/{viewId}/rows/search`

> Body parameter

```json
{
  "query": {
    "allOr": true,
    "string": {
      "columnName1": "value",
      "columnName2": "value"
    },
    "fuzzy": {},
    "range": {
      "columnName1": {
        "low": 10,
        "high": 20
      }
    },
    "equal": {},
    "notEqual": {},
    "empty": {
      "columnName1": ""
    },
    "notEmpty": {},
    "oneOf": {},
    "contains": {
      "arrayColumn": [
        "a",
        "b"
      ]
    },
    "notContains": {
      "arrayColumn": [
        "a",
        "b"
      ]
    },
    "containsAny": {
      "arrayColumn": [
        "a",
        "b"
      ]
    }
  },
  "paginate": true,
  "bookmark": "string",
  "limit": 0,
  "sort": {
    "order": "ascending",
    "column": "string",
    "type": "string"
  }
}
```

<h3 id="search-for-rows-in-a-view-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|string|true|The ID of the view which this request is targeting.|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|
|body|body|[rowSearch](#schemarowsearch)|true|none|
|» query|body|object|true|none|
|» » allOr|body|boolean|false|Specifies that a row should be returned if it satisfies any of the specified options, rather than requiring it to fulfill all the search parameters. This defaults to false, meaning AND logic will be used.|
|» » string|body|object|false|A map of field name to the string to search for, this will look for rows that have a value starting with the string value.|
|» » » **additionalProperties**|body|string|false|The value to search for in the column.|
|» » fuzzy|body|object|false|Searches for a sub-string within a string column, e.g. searching for 'dib' will match 'Budibase'.|
|» » range|body|object|false|Searches within a range, the format of this must be in the format of an object with a "low" and "high" property.|
|» » equal|body|object|false|Searches for rows that have a column value that is exactly the value set.|
|» » notEqual|body|object|false|Searches for any row which does not contain the specified column value.|
|» » empty|body|object|false|Searches for rows which do not contain the specified column. The object should simply contain keys of the column names, these can map to any value.|
|» » notEmpty|body|object|false|Searches for rows which have the specified column.|
|» » oneOf|body|object|false|Searches for rows which have a column value that is any of the specified values. The format of this must be columnName -> [value1, value2].|
|» » contains|body|object|false|Searches for a value, or set of values in array column types (such as a multi-select). If an array of search options is provided then it must match all.|
|» » notContains|body|object|false|The logical inverse of contains. Only works on array column types. If an array of values is passed, the row must not match any of them to be returned in the response.|
|» » containsAny|body|object|false|As with the contains search, only works on array column types and searches for any of the provided values when given an array.|
|» paginate|body|boolean|false|Enables pagination, by default this is disabled.|
|» bookmark|body|string \| integer|false|If retrieving another page, the bookmark from the previous request must be supplied.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|integer|false|none|
|» limit|body|integer|false|The maximum number of rows to return, useful when paginating, for internal tables this will be limited to 1000, for SQL tables it will be 5000.|
|» sort|body|object|false|A set of parameters describing the sort behaviour of the search.|
|» » order|body|string|false|The order of the sort, by default this is ascending.|
|» » column|body|string|false|The name of the column by which the rows will be sorted.|
|» » type|body|string|false|Defines whether the column should be treated as a string or as numbers when sorting.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » order|ascending|
|» » order|descending|
|» » type|string|
|» » type|number|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "_id": "ro_ta_5b1649e42a5b41dea4ef7742a36a7a70_e6dc7e38cf1343b2b56760265201cda4",
      "type": "row",
      "tableId": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
      "name": "Mike",
      "age": 30,
      "relationship": [
        {
          "primaryDisplay": "Joe",
          "_id": "ro_ta_..."
        }
      ]
    }
  ],
  "hasNextPage": true,
  "bookmark": 10
}
```

<h3 id="search-for-rows-in-a-view-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response will contain an array of rows that match the search parameters.|[searchOutput](#schemasearchoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="budibase-api-tables">tables</h1>

## Create a table

<a id="opIdtableCreate"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/tables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}' \
  -d '{
    "data": {
      "_id": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
      "name": "People",
      "schema": {
        "name": {
          "type": "string",
          "name": "name"
        },
        "age": {
          "type": "number",
          "name": "age"
        },
        "relationship": {
          "type": "link",
          "name": "relationship",
          "tableId": "ta_...",
          "fieldName": "relatedColumn",
          "relationshipType": "many-to-many"
        }
      }
    }
  }'
```

`POST /tables`

Create a table, this could be internal or external.

> Body parameter

```json
{
  "data": {
    "_id": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
    "name": "People",
    "schema": {
      "name": {
        "type": "string",
        "name": "name"
      },
      "age": {
        "type": "number",
        "name": "age"
      },
      "relationship": {
        "type": "link",
        "name": "relationship",
        "tableId": "ta_...",
        "fieldName": "relatedColumn",
        "relationshipType": "many-to-many"
      }
    }
  }
}
```

<h3 id="create-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|
|body|body|[table](#schematable)|false|none|
|» name|body|string|true|The name of the table.|
|» primaryDisplay|body|string|false|The name of the column which should be used in relationship tags when relating to this table.|
|» schema|body|object|true|none|
|» » **additionalProperties**|body|object|false|none|
|» » » *oneOf*|body|object|false|none|
|» » » type|body|string|false|A relationship column.|
|» » » constraints|body|object|false|A constraint can be applied to the column which will be validated against when a row is saved.|
|» » » » type|body|string|false|none|
|» » » » presence|body|boolean \| object|false|none|
|» » » » » *oneOf*|body|boolean|false|Defines whether the column is required or not.|
|» » » » » *oneOf*|body|object|false|Defines whether the column is required or not.|
|» » » » » allowEmpty|body|boolean|false|Defines whether the value is allowed to be empty or not.|
|» » » » inclusion|body|array|false|Defines the valid values for this column.|
|» » » name|body|string|false|The name of the column.|
|» » » autocolumn|body|boolean|false|Defines whether the column is automatically generated.|
|» » » width|body|number|false|Defines the width of the column in the data UI.|
|» » » fieldName|body|string|false|The name of the column which a relationship column is related to in another table.|
|» » » tableId|body|string|false|The ID of the table which a relationship column is related to.|
|» » » relationshipType|body|string|false|Defines the type of relationship that this column will be used for.|
|» » » through|body|string|false|When using a SQL table that contains many to many relationships this defines the table the relationships are linked through.|
|» » » foreignKey|body|string|false|When using a SQL table that contains a one to many relationship this defines the foreign key.|
|» » » throughFrom|body|string|false|When using a SQL table that utilises a through table, this defines the primary key in the through table for this table.|
|» » » throughTo|body|string|false|When using a SQL table that utilises a through table, this defines the primary key in the through table for the related table.|
|» » » *oneOf*|body|object|false|none|
|» » » type|body|string|false|A formula column.|
|» » » constraints|body|object|false|A constraint can be applied to the column which will be validated against when a row is saved.|
|» » » » type|body|string|false|none|
|» » » » presence|body|boolean \| object|false|none|
|» » » » » *oneOf*|body|boolean|false|Defines whether the column is required or not.|
|» » » » » *oneOf*|body|object|false|Defines whether the column is required or not.|
|» » » » » allowEmpty|body|boolean|false|Defines whether the value is allowed to be empty or not.|
|» » » » inclusion|body|array|false|Defines the valid values for this column.|
|» » » name|body|string|false|The name of the column.|
|» » » autocolumn|body|boolean|false|Defines whether the column is automatically generated.|
|» » » width|body|number|false|Defines the width of the column in the data UI.|
|» » » formula|body|string|false|Defines a Handlebars or JavaScript formula to use, note that Javascript formulas are expected to be provided in the base64 format.|
|» » » formulaType|body|string|false|Defines whether this is a static or dynamic formula.|
|» » » *oneOf*|body|object|false|none|
|» » » type|body|string|false|Defines the type of the column, most explain themselves, a link column is a relationship.|
|» » » constraints|body|object|false|A constraint can be applied to the column which will be validated against when a row is saved.|
|» » » » type|body|string|false|none|
|» » » » presence|body|boolean \| object|false|none|
|» » » » » *oneOf*|body|boolean|false|Defines whether the column is required or not.|
|» » » » » *oneOf*|body|object|false|Defines whether the column is required or not.|
|» » » » » allowEmpty|body|boolean|false|Defines whether the value is allowed to be empty or not.|
|» » » » inclusion|body|array|false|Defines the valid values for this column.|
|» » » name|body|string|false|The name of the column.|
|» » » autocolumn|body|boolean|false|Defines whether the column is automatically generated.|
|» » » width|body|number|false|Defines the width of the column in the data UI.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » type|link|
|» » » relationshipType|one-to-many|
|» » » relationshipType|many-to-one|
|» » » relationshipType|many-to-many|
|» » » type|formula|
|» » » formulaType|static|
|» » » formulaType|dynamic|
|» » » type|string|
|» » » type|longform|
|» » » type|options|
|» » » type|number|
|» » » type|boolean|
|» » » type|array|
|» » » type|datetime|
|» » » type|attachment|
|» » » type|attachment_single|
|» » » type|auto|
|» » » type|ai|
|» » » type|json|
|» » » type|internal|
|» » » type|barcodeqr|
|» » » type|signature_single|
|» » » type|bigint|
|» » » type|bb_reference|
|» » » type|bb_reference_single|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
    "name": "People",
    "schema": {
      "name": {
        "type": "string",
        "name": "name"
      },
      "age": {
        "type": "number",
        "name": "age"
      },
      "relationship": {
        "type": "link",
        "name": "relationship",
        "tableId": "ta_...",
        "fieldName": "relatedColumn",
        "relationshipType": "many-to-many"
      }
    }
  }
}
```

<h3 id="create-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the created table, including the ID which has been generated for it. This can be internal or external datasources.|[tableOutput](#schematableoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Retrieve a table

<a id="opIdtableGetById"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/tables/string \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}'
```

`GET /tables/{tableId}`

Lookup a table, this could be internal or external.

<h3 id="retrieve-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tableId|path|string|true|The ID of the table which this request is targeting.|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
    "name": "People",
    "schema": {
      "name": {
        "type": "string",
        "name": "name"
      },
      "age": {
        "type": "number",
        "name": "age"
      },
      "relationship": {
        "type": "link",
        "name": "relationship",
        "tableId": "ta_...",
        "fieldName": "relatedColumn",
        "relationshipType": "many-to-many"
      }
    }
  }
}
```

<h3 id="retrieve-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the retrieved table.|[tableOutput](#schematableoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update a table

<a id="opIdtableUpdate"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/tables/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}' \
  -d '{
    "data": {
      "_id": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
      "name": "People",
      "schema": {
        "name": {
          "type": "string",
          "name": "name"
        },
        "age": {
          "type": "number",
          "name": "age"
        },
        "relationship": {
          "type": "link",
          "name": "relationship",
          "tableId": "ta_...",
          "fieldName": "relatedColumn",
          "relationshipType": "many-to-many"
        }
      }
    }
  }'
```

`PUT /tables/{tableId}`

Update a table, this could be internal or external.

> Body parameter

```json
{
  "data": {
    "_id": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
    "name": "People",
    "schema": {
      "name": {
        "type": "string",
        "name": "name"
      },
      "age": {
        "type": "number",
        "name": "age"
      },
      "relationship": {
        "type": "link",
        "name": "relationship",
        "tableId": "ta_...",
        "fieldName": "relatedColumn",
        "relationshipType": "many-to-many"
      }
    }
  }
}
```

<h3 id="update-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tableId|path|string|true|The ID of the table which this request is targeting.|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|
|body|body|[table](#schematable)|false|none|
|» name|body|string|true|The name of the table.|
|» primaryDisplay|body|string|false|The name of the column which should be used in relationship tags when relating to this table.|
|» schema|body|object|true|none|
|» » **additionalProperties**|body|object|false|none|
|» » » *oneOf*|body|object|false|none|
|» » » type|body|string|false|A relationship column.|
|» » » constraints|body|object|false|A constraint can be applied to the column which will be validated against when a row is saved.|
|» » » » type|body|string|false|none|
|» » » » presence|body|boolean \| object|false|none|
|» » » » » *oneOf*|body|boolean|false|Defines whether the column is required or not.|
|» » » » » *oneOf*|body|object|false|Defines whether the column is required or not.|
|» » » » » allowEmpty|body|boolean|false|Defines whether the value is allowed to be empty or not.|
|» » » » inclusion|body|array|false|Defines the valid values for this column.|
|» » » name|body|string|false|The name of the column.|
|» » » autocolumn|body|boolean|false|Defines whether the column is automatically generated.|
|» » » width|body|number|false|Defines the width of the column in the data UI.|
|» » » fieldName|body|string|false|The name of the column which a relationship column is related to in another table.|
|» » » tableId|body|string|false|The ID of the table which a relationship column is related to.|
|» » » relationshipType|body|string|false|Defines the type of relationship that this column will be used for.|
|» » » through|body|string|false|When using a SQL table that contains many to many relationships this defines the table the relationships are linked through.|
|» » » foreignKey|body|string|false|When using a SQL table that contains a one to many relationship this defines the foreign key.|
|» » » throughFrom|body|string|false|When using a SQL table that utilises a through table, this defines the primary key in the through table for this table.|
|» » » throughTo|body|string|false|When using a SQL table that utilises a through table, this defines the primary key in the through table for the related table.|
|» » » *oneOf*|body|object|false|none|
|» » » type|body|string|false|A formula column.|
|» » » constraints|body|object|false|A constraint can be applied to the column which will be validated against when a row is saved.|
|» » » » type|body|string|false|none|
|» » » » presence|body|boolean \| object|false|none|
|» » » » » *oneOf*|body|boolean|false|Defines whether the column is required or not.|
|» » » » » *oneOf*|body|object|false|Defines whether the column is required or not.|
|» » » » » allowEmpty|body|boolean|false|Defines whether the value is allowed to be empty or not.|
|» » » » inclusion|body|array|false|Defines the valid values for this column.|
|» » » name|body|string|false|The name of the column.|
|» » » autocolumn|body|boolean|false|Defines whether the column is automatically generated.|
|» » » width|body|number|false|Defines the width of the column in the data UI.|
|» » » formula|body|string|false|Defines a Handlebars or JavaScript formula to use, note that Javascript formulas are expected to be provided in the base64 format.|
|» » » formulaType|body|string|false|Defines whether this is a static or dynamic formula.|
|» » » *oneOf*|body|object|false|none|
|» » » type|body|string|false|Defines the type of the column, most explain themselves, a link column is a relationship.|
|» » » constraints|body|object|false|A constraint can be applied to the column which will be validated against when a row is saved.|
|» » » » type|body|string|false|none|
|» » » » presence|body|boolean \| object|false|none|
|» » » » » *oneOf*|body|boolean|false|Defines whether the column is required or not.|
|» » » » » *oneOf*|body|object|false|Defines whether the column is required or not.|
|» » » » » allowEmpty|body|boolean|false|Defines whether the value is allowed to be empty or not.|
|» » » » inclusion|body|array|false|Defines the valid values for this column.|
|» » » name|body|string|false|The name of the column.|
|» » » autocolumn|body|boolean|false|Defines whether the column is automatically generated.|
|» » » width|body|number|false|Defines the width of the column in the data UI.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » type|link|
|» » » relationshipType|one-to-many|
|» » » relationshipType|many-to-one|
|» » » relationshipType|many-to-many|
|» » » type|formula|
|» » » formulaType|static|
|» » » formulaType|dynamic|
|» » » type|string|
|» » » type|longform|
|» » » type|options|
|» » » type|number|
|» » » type|boolean|
|» » » type|array|
|» » » type|datetime|
|» » » type|attachment|
|» » » type|attachment_single|
|» » » type|auto|
|» » » type|ai|
|» » » type|json|
|» » » type|internal|
|» » » type|barcodeqr|
|» » » type|signature_single|
|» » » type|bigint|
|» » » type|bb_reference|
|» » » type|bb_reference_single|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
    "name": "People",
    "schema": {
      "name": {
        "type": "string",
        "name": "name"
      },
      "age": {
        "type": "number",
        "name": "age"
      },
      "relationship": {
        "type": "link",
        "name": "relationship",
        "tableId": "ta_...",
        "fieldName": "relatedColumn",
        "relationshipType": "many-to-many"
      }
    }
  }
}
```

<h3 id="update-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated table.|[tableOutput](#schematableoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a table

<a id="opIdtableDestroy"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/tables/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}'
```

`DELETE /tables/{tableId}`

Delete a table, this could be internal or external.

<h3 id="delete-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tableId|path|string|true|The ID of the table which this request is targeting.|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
    "name": "People",
    "schema": {
      "name": {
        "type": "string",
        "name": "name"
      },
      "age": {
        "type": "number",
        "name": "age"
      },
      "relationship": {
        "type": "link",
        "name": "relationship",
        "tableId": "ta_...",
        "fieldName": "relatedColumn",
        "relationshipType": "many-to-many"
      }
    }
  }
}
```

<h3 id="delete-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the deleted table.|[tableOutput](#schematableoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Search for tables

<a id="opIdtableSearch"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/tables/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}' \
  -d '{
    "name": "string"
  }'
```

`POST /tables/search`

Based on table properties (currently only name) search for tables. This could be an internal or an external table.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="search-for-tables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|
|body|body|[nameSearch](#schemanamesearch)|true|none|
|» name|body|string|true|The name to be used when searching - this will be used in a case insensitive starts with match.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "_id": "ta_5b1649e42a5b41dea4ef7742a36a7a70",
      "name": "People",
      "schema": {
        "name": {
          "type": "string",
          "name": "name"
        },
        "age": {
          "type": "number",
          "name": "age"
        },
        "relationship": {
          "type": "link",
          "name": "relationship",
          "tableId": "ta_...",
          "fieldName": "relatedColumn",
          "relationshipType": "many-to-many"
        }
      }
    }
  ]
}
```

<h3 id="search-for-tables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the found tables, based on the search parameters.|[tableSearch](#schematablesearch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="budibase-api-users">users</h1>

## Create a user

<a id="opIduserCreate"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -d '{
    "email": "string",
    "password": "string",
    "status": "active",
    "firstName": "string",
    "lastName": "string",
    "forceResetPassword": true,
    "builder": {
      "global": true
    },
    "admin": {
      "global": true
    },
    "roles": {
      "property1": "string",
      "property2": "string"
    },
    "userGroups": [
      "string"
    ]
  }'
```

`POST /users`

> Body parameter

```json
{
  "email": "string",
  "password": "string",
  "status": "active",
  "firstName": "string",
  "lastName": "string",
  "forceResetPassword": true,
  "builder": {
    "global": true
  },
  "admin": {
    "global": true
  },
  "roles": {
    "property1": "string",
    "property2": "string"
  },
  "userGroups": [
    "string"
  ]
}
```

<h3 id="create-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[user](#schemauser)|true|none|
|» email|body|string|true|The email address of the user, this must be unique.|
|» password|body|string|false|The password of the user if using password based login - this will never be returned. This can be left out of subsequent requests (updates) and will be enriched back into the user structure.|
|» status|body|string|false|The status of the user, if they are active.|
|» firstName|body|string|false|The first name of the user|
|» lastName|body|string|false|The last name of the user|
|» forceResetPassword|body|boolean|false|If set to true forces the user to reset their password on first login.|
|» builder|body|object|false|Describes if the user is a builder user or not. This field can only be set on a business or enterprise license.|
|» » global|body|boolean|false|If set to true the user will be able to build any app in the system.|
|» admin|body|object|false|Describes if the user is an admin user or not. This field can only be set on a business or enterprise license.|
|» » global|body|boolean|false|If set to true the user will be able to administrate the system.|
|» roles|body|object|false|Contains the roles of the user per app (assuming they are not a builder user). This field can only be set on a business or enterprise license.|
|» » **additionalProperties**|body|string|false|A map of app ID (production app ID, minus the _dev component) to a role ID, e.g. ADMIN.|
|» userGroups|body|[string]|false|The IDs of the user's groups. Find group IDs using GET /workspaces/{workspaceId}/groups or the Copy group ID button in Settings > People > Groups. Requires a global admin and the user groups and expanded public API features. On update, replaces memberships; omit to preserve them or provide an empty array to remove all memberships. SCIM-managed memberships cannot be added or removed. New users without group assignments receive the default group, if configured.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "us_693a73206518477283a8d5ae31103252",
    "email": "test@example.com",
    "roles": {
      "app_957b12f943d348faa61db7e18e088d0f": "BASIC"
    },
    "builder": {
      "global": false
    },
    "admin": {
      "global": true
    },
    "tenantId": "default",
    "status": "active",
    "budibaseAccess": true,
    "csrfToken": "9c70291d-7137-48f9-9166-99ab5473a3d4",
    "userId": "us_693a73206518477283a8d5ae31103252",
    "roleId": "ADMIN",
    "role": {
      "_id": "ADMIN",
      "name": "Admin",
      "permissionId": "admin",
      "inherits": "POWER"
    }
  }
}
```

<h3 id="create-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the created user.|[userOutput](#schemauseroutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Retrieve a user

<a id="opIduserGetById"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/users/string \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}"
```

`GET /users/{userId}`

<h3 id="retrieve-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The ID of the user which this request is targeting.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "us_693a73206518477283a8d5ae31103252",
    "email": "test@example.com",
    "roles": {
      "app_957b12f943d348faa61db7e18e088d0f": "BASIC"
    },
    "builder": {
      "global": false
    },
    "admin": {
      "global": true
    },
    "tenantId": "default",
    "status": "active",
    "budibaseAccess": true,
    "csrfToken": "9c70291d-7137-48f9-9166-99ab5473a3d4",
    "userId": "us_693a73206518477283a8d5ae31103252",
    "roleId": "ADMIN",
    "role": {
      "_id": "ADMIN",
      "name": "Admin",
      "permissionId": "admin",
      "inherits": "POWER"
    }
  }
}
```

<h3 id="retrieve-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the retrieved user.|[userOutput](#schemauseroutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update a user

<a id="opIduserUpdate"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/users/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -d '{
    "email": "string",
    "password": "string",
    "status": "active",
    "firstName": "string",
    "lastName": "string",
    "forceResetPassword": true,
    "builder": {
      "global": true
    },
    "admin": {
      "global": true
    },
    "roles": {
      "property1": "string",
      "property2": "string"
    },
    "userGroups": [
      "string"
    ]
  }'
```

`PUT /users/{userId}`

> Body parameter

```json
{
  "email": "string",
  "password": "string",
  "status": "active",
  "firstName": "string",
  "lastName": "string",
  "forceResetPassword": true,
  "builder": {
    "global": true
  },
  "admin": {
    "global": true
  },
  "roles": {
    "property1": "string",
    "property2": "string"
  },
  "userGroups": [
    "string"
  ]
}
```

<h3 id="update-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The ID of the user which this request is targeting.|
|body|body|[user](#schemauser)|true|none|
|» email|body|string|true|The email address of the user, this must be unique.|
|» password|body|string|false|The password of the user if using password based login - this will never be returned. This can be left out of subsequent requests (updates) and will be enriched back into the user structure.|
|» status|body|string|false|The status of the user, if they are active.|
|» firstName|body|string|false|The first name of the user|
|» lastName|body|string|false|The last name of the user|
|» forceResetPassword|body|boolean|false|If set to true forces the user to reset their password on first login.|
|» builder|body|object|false|Describes if the user is a builder user or not. This field can only be set on a business or enterprise license.|
|» » global|body|boolean|false|If set to true the user will be able to build any app in the system.|
|» admin|body|object|false|Describes if the user is an admin user or not. This field can only be set on a business or enterprise license.|
|» » global|body|boolean|false|If set to true the user will be able to administrate the system.|
|» roles|body|object|false|Contains the roles of the user per app (assuming they are not a builder user). This field can only be set on a business or enterprise license.|
|» » **additionalProperties**|body|string|false|A map of app ID (production app ID, minus the _dev component) to a role ID, e.g. ADMIN.|
|» userGroups|body|[string]|false|The IDs of the user's groups. Find group IDs using GET /workspaces/{workspaceId}/groups or the Copy group ID button in Settings > People > Groups. Requires a global admin and the user groups and expanded public API features. On update, replaces memberships; omit to preserve them or provide an empty array to remove all memberships. SCIM-managed memberships cannot be added or removed. New users without group assignments receive the default group, if configured.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "us_693a73206518477283a8d5ae31103252",
    "email": "test@example.com",
    "roles": {
      "app_957b12f943d348faa61db7e18e088d0f": "BASIC"
    },
    "builder": {
      "global": false
    },
    "admin": {
      "global": true
    },
    "tenantId": "default",
    "status": "active",
    "budibaseAccess": true,
    "csrfToken": "9c70291d-7137-48f9-9166-99ab5473a3d4",
    "userId": "us_693a73206518477283a8d5ae31103252",
    "roleId": "ADMIN",
    "role": {
      "_id": "ADMIN",
      "name": "Admin",
      "permissionId": "admin",
      "inherits": "POWER"
    }
  }
}
```

<h3 id="update-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated user.|[userOutput](#schemauseroutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a user

<a id="opIduserDestroy"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/users/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}"
```

`DELETE /users/{userId}`

<h3 id="delete-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The ID of the user which this request is targeting.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "us_693a73206518477283a8d5ae31103252",
    "email": "test@example.com",
    "roles": {
      "app_957b12f943d348faa61db7e18e088d0f": "BASIC"
    },
    "builder": {
      "global": false
    },
    "admin": {
      "global": true
    },
    "tenantId": "default",
    "status": "active",
    "budibaseAccess": true,
    "csrfToken": "9c70291d-7137-48f9-9166-99ab5473a3d4",
    "userId": "us_693a73206518477283a8d5ae31103252",
    "roleId": "ADMIN",
    "role": {
      "_id": "ADMIN",
      "name": "Admin",
      "permissionId": "admin",
      "inherits": "POWER"
    }
  }
}
```

<h3 id="delete-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the deleted user.|[userOutput](#schemauseroutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Search for users

<a id="opIduserSearch"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/users/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`POST /users/search`

Based on user properties (currently only name) search for users.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="search-for-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[nameSearch](#schemanamesearch)|true|none|
|» name|body|string|true|The name to be used when searching - this will be used in a case insensitive starts with match.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "_id": "us_693a73206518477283a8d5ae31103252",
      "email": "test@example.com",
      "roles": {
        "app_957b12f943d348faa61db7e18e088d0f": "BASIC"
      },
      "builder": {
        "global": false
      },
      "admin": {
        "global": true
      },
      "tenantId": "default",
      "status": "active",
      "budibaseAccess": true,
      "csrfToken": "9c70291d-7137-48f9-9166-99ab5473a3d4",
      "userId": "us_693a73206518477283a8d5ae31103252",
      "roleId": "ADMIN",
      "role": {
        "_id": "ADMIN",
        "name": "Admin",
        "permissionId": "admin",
        "inherits": "POWER"
      }
    }
  ]
}
```

<h3 id="search-for-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the found users based on search parameters.|[userSearch](#schemausersearch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="budibase-api-views">views</h1>

## Create a view

<a id="opIdviewCreate"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/views \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}' \
  -d '{
    "data": {
      "name": "peopleView",
      "tableId": "ta_896a325f7e8147d2a2cda93c5d236511",
      "schema": {
        "name": {
          "visible": true,
          "readonly": false,
          "order": 1,
          "width": 300
        },
        "age": {
          "visible": true,
          "readonly": true,
          "order": 2,
          "width": 200
        },
        "salary": {
          "visible": false,
          "readonly": false
        }
      },
      "query": {
        "logicalOperator": "all",
        "onEmptyFilter": "none",
        "groups": [
          {
            "logicalOperator": "any",
            "filters": [
              {
                "operator": "string",
                "field": "name",
                "value": "John"
              },
              {
                "operator": "range",
                "field": "age",
                "value": {
                  "low": 18,
                  "high": 100
                }
              }
            ]
          }
        ]
      },
      "primaryDisplay": "name"
    }
  }'
```

`POST /views`

Create a view, this can be against an internal or external table.

> Body parameter

```json
{
  "data": {
    "name": "peopleView",
    "tableId": "ta_896a325f7e8147d2a2cda93c5d236511",
    "schema": {
      "name": {
        "visible": true,
        "readonly": false,
        "order": 1,
        "width": 300
      },
      "age": {
        "visible": true,
        "readonly": true,
        "order": 2,
        "width": 200
      },
      "salary": {
        "visible": false,
        "readonly": false
      }
    },
    "query": {
      "logicalOperator": "all",
      "onEmptyFilter": "none",
      "groups": [
        {
          "logicalOperator": "any",
          "filters": [
            {
              "operator": "string",
              "field": "name",
              "value": "John"
            },
            {
              "operator": "range",
              "field": "age",
              "value": {
                "low": 18,
                "high": 100
              }
            }
          ]
        }
      ]
    },
    "primaryDisplay": "name"
  }
}
```

<h3 id="create-a-view-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|
|body|body|[view](#schemaview)|false|none|
|» name|body|string|true|The name of the view.|
|» tableId|body|string|true|The ID of the table this view is based on.|
|» type|body|string|false|The type of view - standard (empty value) or calculation.|
|» primaryDisplay|body|string|false|A column used to display rows from this view - usually used when rendered in tables.|
|» query|body|object|false|Search parameters for view|
|» » logicalOperator|body|string|false|When using groups this defines whether all of the filters must match, or only one of them.|
|» » onEmptyFilter|body|string|false|If no filters match, should the view return all rows, or no rows.|
|» » groups|body|[object]|false|A grouping of filters to be applied.|
|» » » logicalOperator|body|string|false|When using groups this defines whether all of the filters must match, or only one of them.|
|» » » filters|body|[object]|false|A list of filters to apply|
|» » » » operator|body|string|false|The type of search operation which is being performed.|
|» » » » field|body|string|false|The field in the view to perform the search on.|
|» » » » value|body|string \| number \| boolean \| object \| array|false|The value to search for - the type will depend on the operator in use.|
|» » » » » *oneOf*|body|string|false|none|
|» » » » » *oneOf*|body|number|false|none|
|» » » » » *oneOf*|body|boolean|false|none|
|» » » » » *oneOf*|body|object|false|none|
|» » » » » *oneOf*|body|array|false|none|
|» » » groups|body|[object]|false|A grouping of filters to be applied.|
|» » » » logicalOperator|body|string|false|When using groups this defines whether all of the filters must match, or only one of them.|
|» » » » filters|body|[object]|false|A list of filters to apply|
|» » » » » operator|body|string|false|The type of search operation which is being performed.|
|» » » » » field|body|string|false|The field in the view to perform the search on.|
|» » » » » value|body|string \| number \| boolean \| object \| array|false|The value to search for - the type will depend on the operator in use.|
|» » » » » » *oneOf*|body|string|false|none|
|» » » » » » *oneOf*|body|number|false|none|
|» » » » » » *oneOf*|body|boolean|false|none|
|» » » » » » *oneOf*|body|object|false|none|
|» » » » » » *oneOf*|body|array|false|none|
|» sort|body|object \| [object]|false|none|
|» » *oneOf*|body|object|false|none|
|» » field|body|string|true|The field from the table/view schema to sort on.|
|» » order|body|string|false|The order in which to sort.|
|» » type|body|string|false|The type of sort to perform (by number, or by alphabetically).|
|» » *oneOf*|body|[object]|false|none|
|» field|body|string|true|The field from the table/view schema to sort on.|
|» order|body|string|false|The order in which to sort.|
|» type|body|string|false|The type of sort to perform (by number, or by alphabetically).|
|» schema|body|object|true|none|
|» » **additionalProperties**|body|object|false|none|
|» » » *oneOf*|body|object|false|none|
|» » » visible|body|boolean|false|Defines whether the column is visible or not - rows retrieved/updated through this view will not be able to access it.|
|» » » readonly|body|boolean|false|When used in combination with 'visible: true' the column will be visible in row responses but cannot be updated.|
|» » » order|body|integer|false|A number defining where the column shows up in tables, lowest being first.|
|» » » width|body|integer|false|A width for the column, defined in pixels - this affects rendering in tables.|
|» » » column|body|[object]|false|If this is a relationship column, we can set the columns we wish to include|
|» » » » readonly|body|boolean|false|none|
|» » » *oneOf*|body|object|false|none|
|» » » calculationType|body|string|false|This column should be built from a calculation, specifying a type and field. It is important to note when a calculation is configured all non-calculation columns will be used for grouping.|
|» » » field|body|string|false|The field from the table to perform the calculation on.|
|» » » distinct|body|boolean|false|Can be used in tandem with the count calculation type, to count unique entries.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|calculation|
|» » logicalOperator|all|
|» » logicalOperator|any|
|» » onEmptyFilter|all|
|» » onEmptyFilter|none|
|» » » logicalOperator|all|
|» » » logicalOperator|any|
|» » » » operator|equal|
|» » » » operator|notEqual|
|» » » » operator|empty|
|» » » » operator|notEmpty|
|» » » » operator|fuzzy|
|» » » » operator|string|
|» » » » operator|contains|
|» » » » operator|notContains|
|» » » » operator|containsAny|
|» » » » operator|oneOf|
|» » » » operator|notOneOf|
|» » » » operator|range|
|» » » » logicalOperator|all|
|» » » » logicalOperator|any|
|» » » » » operator|equal|
|» » » » » operator|notEqual|
|» » » » » operator|empty|
|» » » » » operator|notEmpty|
|» » » » » operator|fuzzy|
|» » » » » operator|string|
|» » » » » operator|contains|
|» » » » » operator|notContains|
|» » » » » operator|containsAny|
|» » » » » operator|oneOf|
|» » » » » operator|notOneOf|
|» » » » » operator|range|
|» » order|ascending|
|» » order|descending|
|» » type|string|
|» » type|number|
|» order|ascending|
|» order|descending|
|» type|string|
|» type|number|
|» » » calculationType|sum|
|» » » calculationType|avg|
|» » » calculationType|count|
|» » » calculationType|min|
|» » » calculationType|max|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "peopleView",
    "tableId": "ta_896a325f7e8147d2a2cda93c5d236511",
    "schema": {
      "name": {
        "visible": true,
        "readonly": false,
        "order": 1,
        "width": 300
      },
      "age": {
        "visible": true,
        "readonly": true,
        "order": 2,
        "width": 200
      },
      "salary": {
        "visible": false,
        "readonly": false
      }
    },
    "query": {
      "logicalOperator": "all",
      "onEmptyFilter": "none",
      "groups": [
        {
          "logicalOperator": "any",
          "filters": [
            {
              "operator": "string",
              "field": "name",
              "value": "John"
            },
            {
              "operator": "range",
              "field": "age",
              "value": {
                "low": 18,
                "high": 100
              }
            }
          ]
        }
      ]
    },
    "primaryDisplay": "name"
  }
}
```

<h3 id="create-a-view-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the created view, including the ID which has been generated for it.|[viewOutput](#schemaviewoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Retrieve a view

<a id="opIdviewGetById"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/views/string \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}'
```

`GET /views/{viewId}`

Lookup a view, this could be internal or external.

<h3 id="retrieve-a-view-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|string|true|The ID of the view which this request is targeting.|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "peopleView",
    "tableId": "ta_896a325f7e8147d2a2cda93c5d236511",
    "schema": {
      "name": {
        "visible": true,
        "readonly": false,
        "order": 1,
        "width": 300
      },
      "age": {
        "visible": true,
        "readonly": true,
        "order": 2,
        "width": 200
      },
      "salary": {
        "visible": false,
        "readonly": false
      }
    },
    "query": {
      "logicalOperator": "all",
      "onEmptyFilter": "none",
      "groups": [
        {
          "logicalOperator": "any",
          "filters": [
            {
              "operator": "string",
              "field": "name",
              "value": "John"
            },
            {
              "operator": "range",
              "field": "age",
              "value": {
                "low": 18,
                "high": 100
              }
            }
          ]
        }
      ]
    },
    "primaryDisplay": "name"
  }
}
```

<h3 id="retrieve-a-view-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the retrieved view.|[viewOutput](#schemaviewoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update a view

<a id="opIdviewUpdate"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/views/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}' \
  -d '{
    "data": {
      "name": "peopleView",
      "tableId": "ta_896a325f7e8147d2a2cda93c5d236511",
      "schema": {
        "name": {
          "visible": true,
          "readonly": false,
          "order": 1,
          "width": 300
        },
        "age": {
          "visible": true,
          "readonly": true,
          "order": 2,
          "width": 200
        },
        "salary": {
          "visible": false,
          "readonly": false
        }
      },
      "query": {
        "logicalOperator": "all",
        "onEmptyFilter": "none",
        "groups": [
          {
            "logicalOperator": "any",
            "filters": [
              {
                "operator": "string",
                "field": "name",
                "value": "John"
              },
              {
                "operator": "range",
                "field": "age",
                "value": {
                  "low": 18,
                  "high": 100
                }
              }
            ]
          }
        ]
      },
      "primaryDisplay": "name"
    }
  }'
```

`PUT /views/{viewId}`

Update a view, this can be against an internal or external table.

> Body parameter

```json
{
  "data": {
    "name": "peopleView",
    "tableId": "ta_896a325f7e8147d2a2cda93c5d236511",
    "schema": {
      "name": {
        "visible": true,
        "readonly": false,
        "order": 1,
        "width": 300
      },
      "age": {
        "visible": true,
        "readonly": true,
        "order": 2,
        "width": 200
      },
      "salary": {
        "visible": false,
        "readonly": false
      }
    },
    "query": {
      "logicalOperator": "all",
      "onEmptyFilter": "none",
      "groups": [
        {
          "logicalOperator": "any",
          "filters": [
            {
              "operator": "string",
              "field": "name",
              "value": "John"
            },
            {
              "operator": "range",
              "field": "age",
              "value": {
                "low": 18,
                "high": 100
              }
            }
          ]
        }
      ]
    },
    "primaryDisplay": "name"
  }
}
```

<h3 id="update-a-view-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|string|true|The ID of the view which this request is targeting.|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|
|body|body|[view](#schemaview)|false|none|
|» name|body|string|true|The name of the view.|
|» tableId|body|string|true|The ID of the table this view is based on.|
|» type|body|string|false|The type of view - standard (empty value) or calculation.|
|» primaryDisplay|body|string|false|A column used to display rows from this view - usually used when rendered in tables.|
|» query|body|object|false|Search parameters for view|
|» » logicalOperator|body|string|false|When using groups this defines whether all of the filters must match, or only one of them.|
|» » onEmptyFilter|body|string|false|If no filters match, should the view return all rows, or no rows.|
|» » groups|body|[object]|false|A grouping of filters to be applied.|
|» » » logicalOperator|body|string|false|When using groups this defines whether all of the filters must match, or only one of them.|
|» » » filters|body|[object]|false|A list of filters to apply|
|» » » » operator|body|string|false|The type of search operation which is being performed.|
|» » » » field|body|string|false|The field in the view to perform the search on.|
|» » » » value|body|string \| number \| boolean \| object \| array|false|The value to search for - the type will depend on the operator in use.|
|» » » » » *oneOf*|body|string|false|none|
|» » » » » *oneOf*|body|number|false|none|
|» » » » » *oneOf*|body|boolean|false|none|
|» » » » » *oneOf*|body|object|false|none|
|» » » » » *oneOf*|body|array|false|none|
|» » » groups|body|[object]|false|A grouping of filters to be applied.|
|» » » » logicalOperator|body|string|false|When using groups this defines whether all of the filters must match, or only one of them.|
|» » » » filters|body|[object]|false|A list of filters to apply|
|» » » » » operator|body|string|false|The type of search operation which is being performed.|
|» » » » » field|body|string|false|The field in the view to perform the search on.|
|» » » » » value|body|string \| number \| boolean \| object \| array|false|The value to search for - the type will depend on the operator in use.|
|» » » » » » *oneOf*|body|string|false|none|
|» » » » » » *oneOf*|body|number|false|none|
|» » » » » » *oneOf*|body|boolean|false|none|
|» » » » » » *oneOf*|body|object|false|none|
|» » » » » » *oneOf*|body|array|false|none|
|» sort|body|object \| [object]|false|none|
|» » *oneOf*|body|object|false|none|
|» » field|body|string|true|The field from the table/view schema to sort on.|
|» » order|body|string|false|The order in which to sort.|
|» » type|body|string|false|The type of sort to perform (by number, or by alphabetically).|
|» » *oneOf*|body|[object]|false|none|
|» field|body|string|true|The field from the table/view schema to sort on.|
|» order|body|string|false|The order in which to sort.|
|» type|body|string|false|The type of sort to perform (by number, or by alphabetically).|
|» schema|body|object|true|none|
|» » **additionalProperties**|body|object|false|none|
|» » » *oneOf*|body|object|false|none|
|» » » visible|body|boolean|false|Defines whether the column is visible or not - rows retrieved/updated through this view will not be able to access it.|
|» » » readonly|body|boolean|false|When used in combination with 'visible: true' the column will be visible in row responses but cannot be updated.|
|» » » order|body|integer|false|A number defining where the column shows up in tables, lowest being first.|
|» » » width|body|integer|false|A width for the column, defined in pixels - this affects rendering in tables.|
|» » » column|body|[object]|false|If this is a relationship column, we can set the columns we wish to include|
|» » » » readonly|body|boolean|false|none|
|» » » *oneOf*|body|object|false|none|
|» » » calculationType|body|string|false|This column should be built from a calculation, specifying a type and field. It is important to note when a calculation is configured all non-calculation columns will be used for grouping.|
|» » » field|body|string|false|The field from the table to perform the calculation on.|
|» » » distinct|body|boolean|false|Can be used in tandem with the count calculation type, to count unique entries.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|calculation|
|» » logicalOperator|all|
|» » logicalOperator|any|
|» » onEmptyFilter|all|
|» » onEmptyFilter|none|
|» » » logicalOperator|all|
|» » » logicalOperator|any|
|» » » » operator|equal|
|» » » » operator|notEqual|
|» » » » operator|empty|
|» » » » operator|notEmpty|
|» » » » operator|fuzzy|
|» » » » operator|string|
|» » » » operator|contains|
|» » » » operator|notContains|
|» » » » operator|containsAny|
|» » » » operator|oneOf|
|» » » » operator|notOneOf|
|» » » » operator|range|
|» » » » logicalOperator|all|
|» » » » logicalOperator|any|
|» » » » » operator|equal|
|» » » » » operator|notEqual|
|» » » » » operator|empty|
|» » » » » operator|notEmpty|
|» » » » » operator|fuzzy|
|» » » » » operator|string|
|» » » » » operator|contains|
|» » » » » operator|notContains|
|» » » » » operator|containsAny|
|» » » » » operator|oneOf|
|» » » » » operator|notOneOf|
|» » » » » operator|range|
|» » order|ascending|
|» » order|descending|
|» » type|string|
|» » type|number|
|» order|ascending|
|» order|descending|
|» type|string|
|» type|number|
|» » » calculationType|sum|
|» » » calculationType|avg|
|» » » calculationType|count|
|» » » calculationType|min|
|» » » calculationType|max|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "peopleView",
    "tableId": "ta_896a325f7e8147d2a2cda93c5d236511",
    "schema": {
      "name": {
        "visible": true,
        "readonly": false,
        "order": 1,
        "width": 300
      },
      "age": {
        "visible": true,
        "readonly": true,
        "order": 2,
        "width": 200
      },
      "salary": {
        "visible": false,
        "readonly": false
      }
    },
    "query": {
      "logicalOperator": "all",
      "onEmptyFilter": "none",
      "groups": [
        {
          "logicalOperator": "any",
          "filters": [
            {
              "operator": "string",
              "field": "name",
              "value": "John"
            },
            {
              "operator": "range",
              "field": "age",
              "value": {
                "low": 18,
                "high": 100
              }
            }
          ]
        }
      ]
    },
    "primaryDisplay": "name"
  }
}
```

<h3 id="update-a-view-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated view.|[viewOutput](#schemaviewoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a view

<a id="opIdviewDestroy"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/views/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}'
```

`DELETE /views/{viewId}`

Delete a view, this can be against an internal or external table.

<h3 id="delete-a-view-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|string|true|The ID of the view which this request is targeting.|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "peopleView",
    "tableId": "ta_896a325f7e8147d2a2cda93c5d236511",
    "schema": {
      "name": {
        "visible": true,
        "readonly": false,
        "order": 1,
        "width": 300
      },
      "age": {
        "visible": true,
        "readonly": true,
        "order": 2,
        "width": 200
      },
      "salary": {
        "visible": false,
        "readonly": false
      }
    },
    "query": {
      "logicalOperator": "all",
      "onEmptyFilter": "none",
      "groups": [
        {
          "logicalOperator": "any",
          "filters": [
            {
              "operator": "string",
              "field": "name",
              "value": "John"
            },
            {
              "operator": "range",
              "field": "age",
              "value": {
                "low": 18,
                "high": 100
              }
            }
          ]
        }
      ]
    },
    "primaryDisplay": "name"
  }
}
```

<h3 id="delete-a-view-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the deleted view.|[viewOutput](#schemaviewoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Search for views

<a id="opIdviewSearch"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/views/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -H 'x-budibase-app-id: {{appId}}' \
  -d '{
    "name": "string"
  }'
```

`POST /views/search`

Based on view properties (currently only name) search for views.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="search-for-views-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-budibase-app-id|header|string|true|The ID of the app which this request is targeting.|
|body|body|[nameSearch](#schemanamesearch)|true|none|
|» name|body|string|true|The name to be used when searching - this will be used in a case insensitive starts with match.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "name": "peopleView",
      "tableId": "ta_896a325f7e8147d2a2cda93c5d236511",
      "schema": {
        "name": {
          "visible": true,
          "readonly": false,
          "order": 1,
          "width": 300
        },
        "age": {
          "visible": true,
          "readonly": true,
          "order": 2,
          "width": 200
        },
        "salary": {
          "visible": false,
          "readonly": false
        }
      },
      "query": {
        "logicalOperator": "all",
        "onEmptyFilter": "none",
        "groups": [
          {
            "logicalOperator": "any",
            "filters": [
              {
                "operator": "string",
                "field": "name",
                "value": "John"
              },
              {
                "operator": "range",
                "field": "age",
                "value": {
                  "low": 18,
                  "high": 100
                }
              }
            ]
          }
        ]
      },
      "primaryDisplay": "name"
    }
  ]
}
```

<h3 id="search-for-views-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the found views, based on the search parameters.|[viewSearch](#schemaviewsearch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="budibase-api-workspaces">workspaces</h1>

## Create a workspace

<a id="opIdworkspaceCreate"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/workspaces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -d '{
    "name": "string",
    "url": "string"
  }'
```

`POST /workspaces`

> Body parameter

```json
{
  "name": "string",
  "url": "string"
}
```

<h3 id="create-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[workspace](#schemaworkspace)|true|none|
|» name|body|string|true|The name of the app.|
|» url|body|string|false|The URL by which the app is accessed, this must be URL encoded.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "app_metadata",
    "appId": "app_dev_957b12f943d348faa61db7e18e088d0f",
    "version": "1.0.58-alpha.0",
    "name": "App name",
    "url": "/url",
    "tenantId": "default",
    "updatedAt": "2022-02-22T13:00:54.035Z",
    "createdAt": "2022-02-11T18:02:26.961Z",
    "status": "development"
  }
}
```

<h3 id="create-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the created workspace.|[workspaceOutput](#schemaworkspaceoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Retrieve a workspace

<a id="opIdworkspaceGetById"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/workspaces/%7B%7BworkspaceId%7D%7D \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}"
```

`GET /workspaces/{workspaceId}`

<h3 id="retrieve-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|path|string|true|The ID of the workspace which this request is targeting.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "app_metadata",
    "appId": "app_dev_957b12f943d348faa61db7e18e088d0f",
    "version": "1.0.58-alpha.0",
    "name": "App name",
    "url": "/url",
    "tenantId": "default",
    "updatedAt": "2022-02-22T13:00:54.035Z",
    "createdAt": "2022-02-11T18:02:26.961Z",
    "status": "development"
  }
}
```

<h3 id="retrieve-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the retrieved workspace.|[workspaceOutput](#schemaworkspaceoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update a workspace

<a id="opIdworkspaceUpdate"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/workspaces/%7B%7BworkspaceId%7D%7D \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -d '{
    "name": "string",
    "url": "string"
  }'
```

`PUT /workspaces/{workspaceId}`

> Body parameter

```json
{
  "name": "string",
  "url": "string"
}
```

<h3 id="update-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|path|string|true|The ID of the workspace which this request is targeting.|
|body|body|[workspace](#schemaworkspace)|true|none|
|» name|body|string|true|The name of the app.|
|» url|body|string|false|The URL by which the app is accessed, this must be URL encoded.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "app_metadata",
    "appId": "app_dev_957b12f943d348faa61db7e18e088d0f",
    "version": "1.0.58-alpha.0",
    "name": "App name",
    "url": "/url",
    "tenantId": "default",
    "updatedAt": "2022-02-22T13:00:54.035Z",
    "createdAt": "2022-02-11T18:02:26.961Z",
    "status": "development"
  }
}
```

<h3 id="update-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated workspace.|[workspaceOutput](#schemaworkspaceoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a workspace

<a id="opIdworkspaceDestroy"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/workspaces/%7B%7BworkspaceId%7D%7D \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}"
```

`DELETE /workspaces/{workspaceId}`

<h3 id="delete-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|path|string|true|The ID of the workspace which this request is targeting.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "app_metadata",
    "appId": "app_dev_957b12f943d348faa61db7e18e088d0f",
    "version": "1.0.58-alpha.0",
    "name": "App name",
    "url": "/url",
    "tenantId": "default",
    "updatedAt": "2022-02-22T13:00:54.035Z",
    "createdAt": "2022-02-11T18:02:26.961Z",
    "status": "development"
  }
}
```

<h3 id="delete-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the deleted workspace.|[workspaceOutput](#schemaworkspaceoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Publish a workspace

<a id="opIdworkspacePublish"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/workspaces/%7B%7BworkspaceId%7D%7D/publish \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}"
```

`POST /workspaces/{workspaceId}/publish`

<h3 id="publish-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|path|string|true|The ID of the workspace which this request is targeting.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_id": "ef12381f934b4f129675cdbb76eff3c2",
    "status": "SUCCESS",
    "appUrl": "/app-url"
  }
}
```

<h3 id="publish-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the deployment object.|[deploymentOutput](#schemadeploymentoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Unpublish a workspace

<a id="opIdworkspaceUnpublish"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/workspaces/%7B%7BworkspaceId%7D%7D/unpublish \
  -X POST \
  -H "x-budibase-api-key: ${API_KEY}"
```

`POST /workspaces/{workspaceId}/unpublish`

<h3 id="unpublish-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|path|string|true|The ID of the workspace which this request is targeting.|

<h3 id="unpublish-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The workspace was published successfully.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Import a workspace to an existing workspace 🔒

<a id="opIdworkspaceImport"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/workspaces/%7B%7BworkspaceId%7D%7D/import \
  -X POST \
  -H "x-budibase-api-key: ${API_KEY}" \
  -F 'encryptedPassword=string' \
  -F 'file=@/path/to/file'
```

`POST /workspaces/{workspaceId}/import`

This endpoint is only available on an enterprise license.

> Body parameter

```yaml
encryptedPassword: string
file: string
```

<h3 id="import-a-workspace-to-an-existing-workspace--parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|path|string|true|The ID of the workspace which this request is targeting.|
|body|body|object|false|none|
|» encryptedPassword|body|string|false|Password for the file if it is encrypted.|
|» file|body|string(binary)|true|The export to import.|

<h3 id="import-a-workspace-to-an-existing-workspace--responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Workspace has been updated.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Export a workspace 🔒

<a id="opIdworkspaceExport"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/workspaces/%7B%7BworkspaceId%7D%7D/export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -d '{
    "encryptPassword": "string",
    "excludeRows": true
  }'
```

`POST /workspaces/{workspaceId}/export`

This endpoint is only available on an enterprise license.

> Body parameter

```json
{
  "encryptPassword": "string",
  "excludeRows": true
}
```

<h3 id="export-a-workspace--parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|path|string|true|The ID of the workspace which this request is targeting.|
|body|body|[workspaceExport](#schemaworkspaceexport)|false|none|
|» encryptPassword|body|string|true|An optional password used to encrypt the export.|
|» excludeRows|body|boolean|true|Set whether the internal table rows should be excluded from the export.|

<h3 id="export-a-workspace--responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A gzip tarball containing the workspace export, encrypted if password provided.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List user groups for a workspace

<a id="opIdworkspaceListGroups"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/workspaces/%7B%7BworkspaceId%7D%7D/groups \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}"
```

`GET /workspaces/{workspaceId}/groups`

Returns groups that grant role or builder access to this workspace. Requires a global admin API key and the user groups and expanded public API features. Both development and production workspace IDs are accepted. SCIM-managed groups are included but their memberships cannot be changed through the public user API.

<h3 id="list-user-groups-for-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|path|string|true|The ID of the workspace which this request is targeting.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "_id": "gr_engineering",
      "name": "Engineering",
      "isDefault": false,
      "managedByScim": false
    }
  ]
}
```

<h3 id="list-user-groups-for-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the groups associated with the workspace.|[userGroupList](#schemausergrouplist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Search for workspaces

<a id="opIdworkspaceSearch"></a>

> Code samples

```bash
curl https://budibase.app/api/public/v1/workspaces/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-budibase-api-key: ${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`POST /workspaces/search`

Based on workspace properties (currently only name) search for workspaces.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="search-for-workspaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[nameSearch](#schemanamesearch)|true|none|
|» name|body|string|true|The name to be used when searching - this will be used in a case insensitive starts with match.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "_id": "app_metadata",
      "appId": "app_dev_957b12f943d348faa61db7e18e088d0f",
      "version": "1.0.58-alpha.0",
      "name": "App name",
      "url": "/url",
      "tenantId": "default",
      "updatedAt": "2022-02-22T13:00:54.035Z",
      "createdAt": "2022-02-11T18:02:26.961Z",
      "status": "development"
    }
  ]
}
```

<h3 id="search-for-workspaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the workspaces that were found based on the search parameters.|[workspaceSearch](#schemaworkspacesearch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_application">application</h2>
<!-- backwards compatibility -->
<a id="schemaapplication"></a>
<a id="schema_application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
{
  "name": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the app.|
|url|string|false|none|The URL by which the app is accessed, this must be URL encoded.|

<h2 id="tocS_workspace">workspace</h2>
<!-- backwards compatibility -->
<a id="schemaworkspace"></a>
<a id="schema_workspace"></a>
<a id="tocSworkspace"></a>
<a id="tocsworkspace"></a>

```json
{
  "name": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the app.|
|url|string|false|none|The URL by which the app is accessed, this must be URL encoded.|

<h2 id="tocS_applicationOutput">applicationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationoutput"></a>
<a id="schema_applicationOutput"></a>
<a id="tocSapplicationoutput"></a>
<a id="tocsapplicationoutput"></a>

```json
{
  "data": {
    "name": "string",
    "url": "string",
    "_id": "string",
    "status": "development",
    "createdAt": "string",
    "updatedAt": "string",
    "version": "string",
    "tenantId": "string",
    "lockedBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_workspaceOutput">workspaceOutput</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceoutput"></a>
<a id="schema_workspaceOutput"></a>
<a id="tocSworkspaceoutput"></a>
<a id="tocsworkspaceoutput"></a>

```json
{
  "data": {
    "name": "string",
    "url": "string",
    "_id": "string",
    "status": "development",
    "createdAt": "string",
    "updatedAt": "string",
    "version": "string",
    "tenantId": "string",
    "lockedBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_applicationSearch">applicationSearch</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsearch"></a>
<a id="schema_applicationSearch"></a>
<a id="tocSapplicationsearch"></a>
<a id="tocsapplicationsearch"></a>

```json
{
  "data": [
    {
      "name": "string",
      "url": "string",
      "_id": "string",
      "status": "development",
      "createdAt": "string",
      "updatedAt": "string",
      "version": "string",
      "tenantId": "string",
      "lockedBy": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|

<h2 id="tocS_workspaceSearch">workspaceSearch</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacesearch"></a>
<a id="schema_workspaceSearch"></a>
<a id="tocSworkspacesearch"></a>
<a id="tocsworkspacesearch"></a>

```json
{
  "data": [
    {
      "name": "string",
      "url": "string",
      "_id": "string",
      "status": "development",
      "createdAt": "string",
      "updatedAt": "string",
      "version": "string",
      "tenantId": "string",
      "lockedBy": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|

<h2 id="tocS_deploymentOutput">deploymentOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentoutput"></a>
<a id="schema_deploymentOutput"></a>
<a id="tocSdeploymentoutput"></a>
<a id="tocsdeploymentoutput"></a>

```json
{
  "data": {
    "_id": "string",
    "status": "SUCCESS",
    "appUrl": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_appExport">appExport</h2>
<!-- backwards compatibility -->
<a id="schemaappexport"></a>
<a id="schema_appExport"></a>
<a id="tocSappexport"></a>
<a id="tocsappexport"></a>

```json
{
  "encryptPassword": "string",
  "excludeRows": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptPassword|string|true|none|An optional password used to encrypt the export.|
|excludeRows|boolean|true|none|Set whether the internal table rows should be excluded from the export.|

<h2 id="tocS_workspaceExport">workspaceExport</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceexport"></a>
<a id="schema_workspaceExport"></a>
<a id="tocSworkspaceexport"></a>
<a id="tocsworkspaceexport"></a>

```json
{
  "encryptPassword": "string",
  "excludeRows": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptPassword|string|true|none|An optional password used to encrypt the export.|
|excludeRows|boolean|true|none|Set whether the internal table rows should be excluded from the export.|

<h2 id="tocS_row">row</h2>
<!-- backwards compatibility -->
<a id="schemarow"></a>
<a id="schema_row"></a>
<a id="tocSrow"></a>
<a id="tocsrow"></a>

```json
{
  "property1": null,
  "property2": null
}
```

The row to be created/updated, based on the table schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|Key value properties of any type, depending on the table schema.|

<h2 id="tocS_searchOutput">searchOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchoutput"></a>
<a id="schema_searchOutput"></a>
<a id="tocSsearchoutput"></a>
<a id="tocssearchoutput"></a>

```json
{
  "data": [
    {}
  ],
  "bookmark": "string",
  "hasNextPage": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|An array of rows, these will each contain an _id field which can be used to update or delete them.|
|bookmark|string \| integer|false|none|If pagination in use, this should be provided.|
|hasNextPage|boolean|false|none|If pagination in use, this will determine if there is another page to fetch.|

<h2 id="tocS_rowOutput">rowOutput</h2>
<!-- backwards compatibility -->
<a id="schemarowoutput"></a>
<a id="schema_rowOutput"></a>
<a id="tocSrowoutput"></a>
<a id="tocsrowoutput"></a>

```json
{
  "data": {
    "_id": "string",
    "tableId": "string",
    "property1": null,
    "property2": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|The row to be created/updated, based on the table schema.|

<h2 id="tocS_table">table</h2>
<!-- backwards compatibility -->
<a id="schematable"></a>
<a id="schema_table"></a>
<a id="tocStable"></a>
<a id="tocstable"></a>

```json
{
  "name": "string",
  "primaryDisplay": "string",
  "schema": {
    "property1": {
      "type": "link",
      "constraints": {
        "type": "string",
        "presence": true,
        "inclusion": []
      },
      "name": "string",
      "autocolumn": true,
      "width": 0,
      "fieldName": "string",
      "tableId": "string",
      "relationshipType": "one-to-many",
      "through": "string",
      "foreignKey": "string",
      "throughFrom": "string",
      "throughTo": "string"
    },
    "property2": {
      "type": "link",
      "constraints": {
        "type": "string",
        "presence": true,
        "inclusion": []
      },
      "name": "string",
      "autocolumn": true,
      "width": 0,
      "fieldName": "string",
      "tableId": "string",
      "relationshipType": "one-to-many",
      "through": "string",
      "foreignKey": "string",
      "throughFrom": "string",
      "throughTo": "string"
    }
  }
}
```

The table to be created/updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the table.|
|primaryDisplay|string|false|none|The name of the column which should be used in relationship tags when relating to this table.|
|schema|object|true|none|none|

<h2 id="tocS_tableOutput">tableOutput</h2>
<!-- backwards compatibility -->
<a id="schematableoutput"></a>
<a id="schema_tableOutput"></a>
<a id="tocStableoutput"></a>
<a id="tocstableoutput"></a>

```json
{
  "data": {
    "name": "string",
    "primaryDisplay": "string",
    "schema": {
      "property1": {
        "type": "link",
        "constraints": {
          "type": "string",
          "presence": true,
          "inclusion": []
        },
        "name": "string",
        "autocolumn": true,
        "width": 0,
        "fieldName": "string",
        "tableId": "string",
        "relationshipType": "one-to-many",
        "through": "string",
        "foreignKey": "string",
        "throughFrom": "string",
        "throughTo": "string"
      },
      "property2": {
        "type": "link",
        "constraints": {
          "type": "string",
          "presence": true,
          "inclusion": []
        },
        "name": "string",
        "autocolumn": true,
        "width": 0,
        "fieldName": "string",
        "tableId": "string",
        "relationshipType": "one-to-many",
        "through": "string",
        "foreignKey": "string",
        "throughFrom": "string",
        "throughTo": "string"
      }
    },
    "_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|The table to be created/updated.|

<h2 id="tocS_tableSearch">tableSearch</h2>
<!-- backwards compatibility -->
<a id="schematablesearch"></a>
<a id="schema_tableSearch"></a>
<a id="tocStablesearch"></a>
<a id="tocstablesearch"></a>

```json
{
  "data": [
    {
      "name": "string",
      "primaryDisplay": "string",
      "schema": {
        "property1": {
          "type": "link",
          "constraints": {
            "type": "string",
            "presence": true,
            "inclusion": []
          },
          "name": "string",
          "autocolumn": true,
          "width": 0,
          "fieldName": "string",
          "tableId": "string",
          "relationshipType": "one-to-many",
          "through": "string",
          "foreignKey": "string",
          "throughFrom": "string",
          "throughTo": "string"
        },
        "property2": {
          "type": "link",
          "constraints": {
            "type": "string",
            "presence": true,
            "inclusion": []
          },
          "name": "string",
          "autocolumn": true,
          "width": 0,
          "fieldName": "string",
          "tableId": "string",
          "relationshipType": "one-to-many",
          "through": "string",
          "foreignKey": "string",
          "throughFrom": "string",
          "throughTo": "string"
        }
      },
      "_id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|

<h2 id="tocS_executeQuery">executeQuery</h2>
<!-- backwards compatibility -->
<a id="schemaexecutequery"></a>
<a id="schema_executeQuery"></a>
<a id="tocSexecutequery"></a>
<a id="tocsexecutequery"></a>

```json
{
  "parameters": {
    "property1": null,
    "property2": null
  },
  "pagination": {
    "page": "string",
    "limit": 0
  }
}
```

The parameters required for executing a query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|object|false|none|This contains the required parameters for the query, this depends on query type, setup and bindings.|
|pagination|object|false|none|For supported query types (currently on REST) pagination can be performed using these properties.|

<h2 id="tocS_executeQueryOutput">executeQueryOutput</h2>
<!-- backwards compatibility -->
<a id="schemaexecutequeryoutput"></a>
<a id="schema_executeQueryOutput"></a>
<a id="tocSexecutequeryoutput"></a>
<a id="tocsexecutequeryoutput"></a>

```json
{
  "data": [
    {}
  ],
  "extra": {
    "headers": {},
    "raw": "string"
  },
  "pagination": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|The data response from the query.|
|extra|object|false|none|Extra information that is not part of the main data, e.g. headers.|
|pagination|object|false|none|If pagination is supported, this will contain the bookmark/anchor information for it.|

<h2 id="tocS_query">query</h2>
<!-- backwards compatibility -->
<a id="schemaquery"></a>
<a id="schema_query"></a>
<a id="tocSquery"></a>
<a id="tocsquery"></a>

```json
{
  "_id": "string",
  "datasourceId": "string",
  "parameters": [
    "string"
  ],
  "fields": {},
  "queryVerb": "create",
  "name": "string",
  "schema": {},
  "transformer": "string",
  "readable": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|The ID of the query.|
|datasourceId|string|false|none|The ID of the datasource the query belongs to.|
|parameters|[string]|false|none|The bindings which are required to perform this query.|
|fields|object|false|none|The fields that are used to perform this query, e.g. the sql statement|
|queryVerb|string|false|none|The verb that describes this query.|
|name|string|true|none|The name of the query.|
|schema|object|true|none|The schema of the data returned when the query is executed.|
|transformer|string|false|none|The JavaScript transformer function, applied after the query responds with data.|
|readable|boolean|false|none|Whether the query has readable data.|

#### Enumerated Values

|Property|Value|
|---|---|
|queryVerb|create|
|queryVerb|read|
|queryVerb|update|
|queryVerb|delete|

<h2 id="tocS_querySearch">querySearch</h2>
<!-- backwards compatibility -->
<a id="schemaquerysearch"></a>
<a id="schema_querySearch"></a>
<a id="tocSquerysearch"></a>
<a id="tocsquerysearch"></a>

```json
{
  "data": [
    {
      "_id": "string",
      "datasourceId": "string",
      "parameters": [
        "string"
      ],
      "fields": {},
      "queryVerb": "create",
      "name": "string",
      "schema": {},
      "transformer": "string",
      "readable": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|

<h2 id="tocS_user">user</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_user"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "email": "string",
  "password": "string",
  "status": "active",
  "firstName": "string",
  "lastName": "string",
  "forceResetPassword": true,
  "builder": {
    "global": true
  },
  "admin": {
    "global": true
  },
  "roles": {
    "property1": "string",
    "property2": "string"
  },
  "userGroups": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|The email address of the user, this must be unique.|
|password|string|false|none|The password of the user if using password based login - this will never be returned. This can be left out of subsequent requests (updates) and will be enriched back into the user structure.|
|status|string|false|none|The status of the user, if they are active.|
|firstName|string|false|none|The first name of the user|
|lastName|string|false|none|The last name of the user|
|forceResetPassword|boolean|false|none|If set to true forces the user to reset their password on first login.|
|builder|object|false|none|Describes if the user is a builder user or not. This field can only be set on a business or enterprise license.|
|admin|object|false|none|Describes if the user is an admin user or not. This field can only be set on a business or enterprise license.|
|roles|object|false|none|Contains the roles of the user per app (assuming they are not a builder user). This field can only be set on a business or enterprise license.|
|userGroups|[string]|false|none|The IDs of the user's groups. Find group IDs using GET /workspaces/{workspaceId}/groups or the Copy group ID button in Settings > People > Groups. Requires a global admin and the user groups and expanded public API features. On update, replaces memberships; omit to preserve them or provide an empty array to remove all memberships. SCIM-managed memberships cannot be added or removed. New users without group assignments receive the default group, if configured.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|

<h2 id="tocS_userOutput">userOutput</h2>
<!-- backwards compatibility -->
<a id="schemauseroutput"></a>
<a id="schema_userOutput"></a>
<a id="tocSuseroutput"></a>
<a id="tocsuseroutput"></a>

```json
{
  "data": {
    "email": "string",
    "password": "string",
    "status": "active",
    "firstName": "string",
    "lastName": "string",
    "forceResetPassword": true,
    "builder": {
      "global": true
    },
    "admin": {
      "global": true
    },
    "roles": {
      "property1": "string",
      "property2": "string"
    },
    "userGroups": [
      "string"
    ],
    "_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_userSearch">userSearch</h2>
<!-- backwards compatibility -->
<a id="schemausersearch"></a>
<a id="schema_userSearch"></a>
<a id="tocSusersearch"></a>
<a id="tocsusersearch"></a>

```json
{
  "data": [
    {
      "email": "string",
      "password": "string",
      "status": "active",
      "firstName": "string",
      "lastName": "string",
      "forceResetPassword": true,
      "builder": {
        "global": true
      },
      "admin": {
        "global": true
      },
      "roles": {
        "property1": "string",
        "property2": "string"
      },
      "userGroups": [
        "string"
      ],
      "_id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|

<h2 id="tocS_rowSearch">rowSearch</h2>
<!-- backwards compatibility -->
<a id="schemarowsearch"></a>
<a id="schema_rowSearch"></a>
<a id="tocSrowsearch"></a>
<a id="tocsrowsearch"></a>

```json
{
  "query": {
    "allOr": true,
    "string": {
      "columnName1": "value",
      "columnName2": "value"
    },
    "fuzzy": {},
    "range": {
      "columnName1": {
        "low": 10,
        "high": 20
      }
    },
    "equal": {},
    "notEqual": {},
    "empty": {
      "columnName1": ""
    },
    "notEmpty": {},
    "oneOf": {},
    "contains": {
      "arrayColumn": [
        "a",
        "b"
      ]
    },
    "notContains": {
      "arrayColumn": [
        "a",
        "b"
      ]
    },
    "containsAny": {
      "arrayColumn": [
        "a",
        "b"
      ]
    }
  },
  "paginate": true,
  "bookmark": "string",
  "limit": 0,
  "sort": {
    "order": "ascending",
    "column": "string",
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|object|true|none|none|
|paginate|boolean|false|none|Enables pagination, by default this is disabled.|
|bookmark|string \| integer|false|none|If retrieving another page, the bookmark from the previous request must be supplied.|
|limit|integer|false|none|The maximum number of rows to return, useful when paginating, for internal tables this will be limited to 1000, for SQL tables it will be 5000.|
|sort|object|false|none|A set of parameters describing the sort behaviour of the search.|

<h2 id="tocS_nameSearch">nameSearch</h2>
<!-- backwards compatibility -->
<a id="schemanamesearch"></a>
<a id="schema_nameSearch"></a>
<a id="tocSnamesearch"></a>
<a id="tocsnamesearch"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name to be used when searching - this will be used in a case insensitive starts with match.|

<h2 id="tocS_rolesAssign">rolesAssign</h2>
<!-- backwards compatibility -->
<a id="schemarolesassign"></a>
<a id="schema_rolesAssign"></a>
<a id="tocSrolesassign"></a>
<a id="tocsrolesassign"></a>

```json
{
  "appBuilder": {
    "appId": "string"
  },
  "builder": true,
  "admin": true,
  "role": {
    "roleId": "string",
    "appId": "string"
  },
  "userIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appBuilder|object|false|none|Allow setting users to builders per app.|
|builder|boolean|false|none|Add/remove global builder permissions from the list of users.|
|admin|boolean|false|none|Add/remove global admin permissions from the list of users.|
|role|object|false|none|Add/remove a per-app role, such as BASIC, ADMIN etc.|
|userIds|[string]|true|none|The user IDs to be updated to add/remove the specified roles.|

<h2 id="tocS_rolesUnAssign">rolesUnAssign</h2>
<!-- backwards compatibility -->
<a id="schemarolesunassign"></a>
<a id="schema_rolesUnAssign"></a>
<a id="tocSrolesunassign"></a>
<a id="tocsrolesunassign"></a>

```json
{
  "appBuilder": {
    "appId": "string"
  },
  "builder": true,
  "admin": true,
  "role": {
    "roleId": "string",
    "appId": "string"
  },
  "userIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appBuilder|object|false|none|Allow setting users to builders per app.|
|builder|boolean|false|none|Add/remove global builder permissions from the list of users.|
|admin|boolean|false|none|Add/remove global admin permissions from the list of users.|
|role|object|false|none|Add/remove a per-app role, such as BASIC, ADMIN etc.|
|userIds|[string]|true|none|The user IDs to be updated to add/remove the specified roles.|

<h2 id="tocS_rolesOutput">rolesOutput</h2>
<!-- backwards compatibility -->
<a id="schemarolesoutput"></a>
<a id="schema_rolesOutput"></a>
<a id="tocSrolesoutput"></a>
<a id="tocsrolesoutput"></a>

```json
{
  "data": {
    "userIds": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_view">view</h2>
<!-- backwards compatibility -->
<a id="schemaview"></a>
<a id="schema_view"></a>
<a id="tocSview"></a>
<a id="tocsview"></a>

```json
{
  "name": "string",
  "tableId": "string",
  "type": "calculation",
  "primaryDisplay": "string",
  "query": {
    "logicalOperator": "all",
    "onEmptyFilter": "all",
    "groups": [
      {
        "logicalOperator": "all",
        "filters": [
          {
            "operator": "equal",
            "field": "string",
            "value": "string"
          }
        ],
        "groups": [
          {
            "logicalOperator": "all",
            "filters": [
              {
                "operator": "equal",
                "field": "string",
                "value": "string"
              }
            ]
          }
        ]
      }
    ]
  },
  "sort": {
    "field": "string",
    "order": "ascending",
    "type": "string"
  },
  "schema": {
    "property1": {
      "visible": true,
      "readonly": true,
      "order": 0,
      "width": 0,
      "column": [
        {
          "readonly": true
        }
      ]
    },
    "property2": {
      "visible": true,
      "readonly": true,
      "order": 0,
      "width": 0,
      "column": [
        {
          "readonly": true
        }
      ]
    }
  }
}
```

The view to be created/updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the view.|
|tableId|string|true|none|The ID of the table this view is based on.|
|type|string|false|none|The type of view - standard (empty value) or calculation.|
|primaryDisplay|string|false|none|A column used to display rows from this view - usually used when rendered in tables.|
|query|object|false|none|Search parameters for view|
|sort|object \| [object]|false|none|none|
|schema|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|calculation|

<h2 id="tocS_viewOutput">viewOutput</h2>
<!-- backwards compatibility -->
<a id="schemaviewoutput"></a>
<a id="schema_viewOutput"></a>
<a id="tocSviewoutput"></a>
<a id="tocsviewoutput"></a>

```json
{
  "data": {
    "name": "string",
    "tableId": "string",
    "type": "calculation",
    "primaryDisplay": "string",
    "query": {
      "logicalOperator": "all",
      "onEmptyFilter": "all",
      "groups": [
        {
          "logicalOperator": "all",
          "filters": [
            {
              "operator": "equal",
              "field": "string",
              "value": "string"
            }
          ],
          "groups": [
            {
              "logicalOperator": "all",
              "filters": [
                {
                  "operator": "equal",
                  "field": "string",
                  "value": "string"
                }
              ]
            }
          ]
        }
      ]
    },
    "sort": {
      "field": "string",
      "order": "ascending",
      "type": "string"
    },
    "schema": {
      "property1": {
        "visible": true,
        "readonly": true,
        "order": 0,
        "width": 0,
        "column": [
          {
            "readonly": true
          }
        ]
      },
      "property2": {
        "visible": true,
        "readonly": true,
        "order": 0,
        "width": 0,
        "column": [
          {
            "readonly": true
          }
        ]
      }
    },
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|The view to be created/updated.|

<h2 id="tocS_viewSearch">viewSearch</h2>
<!-- backwards compatibility -->
<a id="schemaviewsearch"></a>
<a id="schema_viewSearch"></a>
<a id="tocSviewsearch"></a>
<a id="tocsviewsearch"></a>

```json
{
  "data": [
    {
      "name": "string",
      "tableId": "string",
      "type": "calculation",
      "primaryDisplay": "string",
      "query": {
        "logicalOperator": "all",
        "onEmptyFilter": "all",
        "groups": [
          {
            "logicalOperator": "all",
            "filters": [
              {
                "operator": "equal",
                "field": "string",
                "value": "string"
              }
            ],
            "groups": [
              {
                "logicalOperator": "all",
                "filters": [
                  {
                    "operator": "equal",
                    "field": "string",
                    "value": "string"
                  }
                ]
              }
            ]
          }
        ]
      },
      "sort": {
        "field": "string",
        "order": "ascending",
        "type": "string"
      },
      "schema": {
        "property1": {
          "visible": true,
          "readonly": true,
          "order": 0,
          "width": 0,
          "column": [
            {
              "readonly": true
            }
          ]
        },
        "property2": {
          "visible": true,
          "readonly": true,
          "order": 0,
          "width": 0,
          "column": [
            {
              "readonly": true
            }
          ]
        }
      },
      "id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|

<h2 id="tocS_userGroupList">userGroupList</h2>
<!-- backwards compatibility -->
<a id="schemausergrouplist"></a>
<a id="schema_userGroupList"></a>
<a id="tocSusergrouplist"></a>
<a id="tocsusergrouplist"></a>

```json
{
  "data": [
    {
      "_id": "string",
      "name": "string",
      "isDefault": true,
      "managedByScim": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
