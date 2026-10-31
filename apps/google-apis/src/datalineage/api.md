<h1 id="data-lineage-api">Data Lineage API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://datalineage.googleapis.com/">https://datalineage.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/data-catalog">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="data-lineage-api-projects">projects</h1>

## datalineage.projects.locations.processes.runs.lineageEvents.get

<a id="opIddatalineage.projects.locations.processes.runs.lineageEvents.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets details of a specified lineage event.

<h3 id="datalineageprojectslocationsprocessesrunslineageeventsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the lineage event to get.|
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
  "endTime": "string",
  "links": [
    {
      "source": {
        "fullyQualifiedName": "string"
      },
      "target": {
        "fullyQualifiedName": "string"
      }
    }
  ],
  "name": "string",
  "startTime": "string"
}
```

<h3 id="datalineageprojectslocationsprocessesrunslineageeventsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogLineageV1LineageEvent](#schemagoogleclouddatacataloglineagev1lineageevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalineage.projects.locations.processes.runs.lineageEvents.delete

<a id="opIddatalineage.projects.locations.processes.runs.lineageEvents.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes the lineage event with the specified name.

<h3 id="datalineageprojectslocationsprocessesrunslineageeventsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the lineage event to delete.|
|allowMissing|query|boolean|false|If set to true and the lineage event is not found, the request succeeds but the server doesn't perform any actions.|
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

<h3 id="datalineageprojectslocationsprocessesrunslineageeventsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalineage.projects.locations.processes.runs.patch

<a id="opIddatalineage.projects.locations.processes.runs.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attributes": {
      "property1": null,
      "property2": null
    },
    "displayName": "string",
    "endTime": "string",
    "name": "string",
    "startTime": "string",
    "state": "UNKNOWN"
  }'
```

`PATCH /v1/{name}`

Updates a run.

> Body parameter

```json
{
  "attributes": {
    "property1": null,
    "property2": null
  },
  "displayName": "string",
  "endTime": "string",
  "name": "string",
  "startTime": "string",
  "state": "UNKNOWN"
}
```

<h3 id="datalineageprojectslocationsprocessesrunspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Immutable. The resource name of the run. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}`. Can be specified or auto-assigned. {run} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`|
|allowMissing|query|boolean|false|If set to true and the run is not found, the request creates it.|
|updateMask|query|string|false|The list of fields to update. Currently not used. The whole message is updated.|
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
|body|body|[GoogleCloudDatacatalogLineageV1Run](#schemagoogleclouddatacataloglineagev1run)|false|none|
|» attributes|body|object|false|Optional. The attributes of the run. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the run). Up to 100 attributes are allowed.|
|» » **additionalProperties**|body|object|false|none|
|» displayName|body|string|false|Optional. A human-readable name you can set to display in a user interface. Must be not longer than 1024 characters and only contain UTF-8 letters or numbers, spaces or characters like `_-:&.`|
|» endTime|body|string(google-datetime)|false|Optional. The timestamp of the end of the run.|
|» name|body|string|false|Immutable. The resource name of the run. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}`. Can be specified or auto-assigned. {run} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`|
|» startTime|body|string(google-datetime)|false|Required. The timestamp of the start of the run.|
|» state|body|string|false|Required. The state of the run.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|UNKNOWN|
|» state|STARTED|
|» state|COMPLETED|
|» state|FAILED|
|» state|ABORTED|

> Example responses

> 200 Response

```json
{
  "attributes": {
    "property1": null,
    "property2": null
  },
  "displayName": "string",
  "endTime": "string",
  "name": "string",
  "startTime": "string",
  "state": "UNKNOWN"
}
```

<h3 id="datalineageprojectslocationsprocessesrunspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogLineageV1Run](#schemagoogleclouddatacataloglineagev1run)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalineage.projects.locations.operations.list

<a id="opIddatalineage.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="datalineageprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="datalineageprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningListOperationsResponse](#schemagooglelongrunninglistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalineage.projects.locations.operations.cancel

<a id="opIddatalineage.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="datalineageprojectslocationsoperationscancel-parameters">Parameters</h3>

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
|body|body|[GoogleLongrunningCancelOperationRequest](#schemagooglelongrunningcanceloperationrequest)|false|none|

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

<h3 id="datalineageprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalineage.projects.locations.processes.runs.lineageEvents.list

<a id="opIddatalineage.projects.locations.processes.runs.lineageEvents.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/lineageEvents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/lineageEvents`

Lists lineage events in the given project and location. The list order is not defined.

<h3 id="datalineageprojectslocationsprocessesrunslineageeventslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the run that owns the collection of lineage events to get.|
|pageSize|query|integer|false|The maximum number of lineage events to return. The service may return fewer events than this value. If unspecified, at most 50 events are returned. The maximum value is 100; values greater than 100 are cut to 100.|
|pageToken|query|string|false|The page token received from a previous `ListLineageEvents` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.|
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
  "lineageEvents": [
    {
      "endTime": "string",
      "links": [
        {
          "source": {
            "fullyQualifiedName": "string"
          },
          "target": {
            "fullyQualifiedName": "string"
          }
        }
      ],
      "name": "string",
      "startTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="datalineageprojectslocationsprocessesrunslineageeventslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogLineageV1ListLineageEventsResponse](#schemagoogleclouddatacataloglineagev1listlineageeventsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalineage.projects.locations.processes.runs.lineageEvents.create

<a id="opIddatalineage.projects.locations.processes.runs.lineageEvents.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/lineageEvents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endTime": "string",
    "links": [
      {
        "source": {
          "fullyQualifiedName": "string"
        },
        "target": {
          "fullyQualifiedName": "string"
        }
      }
    ],
    "name": "string",
    "startTime": "string"
  }'
```

`POST /v1/{parent}/lineageEvents`

Creates a new lineage event.

> Body parameter

```json
{
  "endTime": "string",
  "links": [
    {
      "source": {
        "fullyQualifiedName": "string"
      },
      "target": {
        "fullyQualifiedName": "string"
      }
    }
  ],
  "name": "string",
  "startTime": "string"
}
```

<h3 id="datalineageprojectslocationsprocessesrunslineageeventscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the run that should own the lineage event.|
|requestId|query|string|false|A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.|
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
|body|body|[GoogleCloudDatacatalogLineageV1LineageEvent](#schemagoogleclouddatacataloglineagev1lineageevent)|false|none|
|» endTime|body|string(google-datetime)|false|Optional. The end of the transformation which resulted in this lineage event. For streaming scenarios, it should be the end of the period from which the lineage is being reported.|
|» links|body|[[GoogleCloudDatacatalogLineageV1EventLink](#schemagoogleclouddatacataloglineagev1eventlink)]|false|Optional. List of source-target pairs. Can't contain more than 100 tuples.|
|» name|body|string|false|Immutable. The resource name of the lineage event. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}/lineageEvents/{lineage_event}`. Can be specified or auto-assigned. {lineage_event} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`|
|» startTime|body|string(google-datetime)|false|Optional. The beginning of the transformation which resulted in this lineage event. For streaming scenarios, it should be the beginning of the period from which the lineage is being reported.|

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
  "endTime": "string",
  "links": [
    {
      "source": {
        "fullyQualifiedName": "string"
      },
      "target": {
        "fullyQualifiedName": "string"
      }
    }
  ],
  "name": "string",
  "startTime": "string"
}
```

<h3 id="datalineageprojectslocationsprocessesrunslineageeventscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogLineageV1LineageEvent](#schemagoogleclouddatacataloglineagev1lineageevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalineage.projects.locations.processes.list

<a id="opIddatalineage.projects.locations.processes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/processes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/processes`

List processes in the given project and location. List order is descending by insertion time.

<h3 id="datalineageprojectslocationsprocesseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project and its location that owns this collection of processes.|
|pageSize|query|integer|false|The maximum number of processes to return. The service may return fewer than this value. If unspecified, at most 50 processes are returned. The maximum value is 100; values greater than 100 are cut to 100.|
|pageToken|query|string|false|The page token received from a previous `ListProcesses` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.|
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
  "processes": [
    {
      "attributes": {
        "property1": null,
        "property2": null
      },
      "displayName": "string",
      "name": "string",
      "origin": {
        "name": "string",
        "sourceType": "SOURCE_TYPE_UNSPECIFIED"
      }
    }
  ]
}
```

<h3 id="datalineageprojectslocationsprocesseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogLineageV1ListProcessesResponse](#schemagoogleclouddatacataloglineagev1listprocessesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalineage.projects.locations.processes.create

<a id="opIddatalineage.projects.locations.processes.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/processes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attributes": {
      "property1": null,
      "property2": null
    },
    "displayName": "string",
    "name": "string",
    "origin": {
      "name": "string",
      "sourceType": "SOURCE_TYPE_UNSPECIFIED"
    }
  }'
```

`POST /v1/{parent}/processes`

Creates a new process.

> Body parameter

```json
{
  "attributes": {
    "property1": null,
    "property2": null
  },
  "displayName": "string",
  "name": "string",
  "origin": {
    "name": "string",
    "sourceType": "SOURCE_TYPE_UNSPECIFIED"
  }
}
```

<h3 id="datalineageprojectslocationsprocessescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project and its location that should own the process.|
|requestId|query|string|false|A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.|
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
|body|body|[GoogleCloudDatacatalogLineageV1Process](#schemagoogleclouddatacataloglineagev1process)|false|none|
|» attributes|body|object|false|Optional. The attributes of the process. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the process). Up to 100 attributes are allowed.|
|» » **additionalProperties**|body|object|false|none|
|» displayName|body|string|false|Optional. A human-readable name you can set to display in a user interface. Must be not longer than 200 characters and only contain UTF-8 letters or numbers, spaces or characters like `_-:&.`|
|» name|body|string|false|Immutable. The resource name of the lineage process. Format: `projects/{project}/locations/{location}/processes/{process}`. Can be specified or auto-assigned. {process} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`|
|» origin|body|[GoogleCloudDatacatalogLineageV1Origin](#schemagoogleclouddatacataloglineagev1origin)|false|Optional. The origin of this process and its runs and lineage events.|

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
  "attributes": {
    "property1": null,
    "property2": null
  },
  "displayName": "string",
  "name": "string",
  "origin": {
    "name": "string",
    "sourceType": "SOURCE_TYPE_UNSPECIFIED"
  }
}
```

<h3 id="datalineageprojectslocationsprocessescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogLineageV1Process](#schemagoogleclouddatacataloglineagev1process)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalineage.projects.locations.processes.runs.list

<a id="opIddatalineage.projects.locations.processes.runs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/runs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/runs`

Lists runs in the given project and location. List order is descending by `start_time`.

<h3 id="datalineageprojectslocationsprocessesrunslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of process that owns this collection of runs.|
|pageSize|query|integer|false|The maximum number of runs to return. The service may return fewer than this value. If unspecified, at most 50 runs are returned. The maximum value is 100; values greater than 100 are cut to 100.|
|pageToken|query|string|false|The page token received from a previous `ListRuns` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.|
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
  "runs": [
    {
      "attributes": {
        "property1": null,
        "property2": null
      },
      "displayName": "string",
      "endTime": "string",
      "name": "string",
      "startTime": "string",
      "state": "UNKNOWN"
    }
  ]
}
```

<h3 id="datalineageprojectslocationsprocessesrunslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogLineageV1ListRunsResponse](#schemagoogleclouddatacataloglineagev1listrunsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalineage.projects.locations.processes.runs.create

<a id="opIddatalineage.projects.locations.processes.runs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/runs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attributes": {
      "property1": null,
      "property2": null
    },
    "displayName": "string",
    "endTime": "string",
    "name": "string",
    "startTime": "string",
    "state": "UNKNOWN"
  }'
```

`POST /v1/{parent}/runs`

Creates a new run.

> Body parameter

```json
{
  "attributes": {
    "property1": null,
    "property2": null
  },
  "displayName": "string",
  "endTime": "string",
  "name": "string",
  "startTime": "string",
  "state": "UNKNOWN"
}
```

<h3 id="datalineageprojectslocationsprocessesrunscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the process that should own the run.|
|requestId|query|string|false|A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.|
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
|body|body|[GoogleCloudDatacatalogLineageV1Run](#schemagoogleclouddatacataloglineagev1run)|false|none|
|» attributes|body|object|false|Optional. The attributes of the run. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the run). Up to 100 attributes are allowed.|
|» » **additionalProperties**|body|object|false|none|
|» displayName|body|string|false|Optional. A human-readable name you can set to display in a user interface. Must be not longer than 1024 characters and only contain UTF-8 letters or numbers, spaces or characters like `_-:&.`|
|» endTime|body|string(google-datetime)|false|Optional. The timestamp of the end of the run.|
|» name|body|string|false|Immutable. The resource name of the run. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}`. Can be specified or auto-assigned. {run} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`|
|» startTime|body|string(google-datetime)|false|Required. The timestamp of the start of the run.|
|» state|body|string|false|Required. The state of the run.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|UNKNOWN|
|» state|STARTED|
|» state|COMPLETED|
|» state|FAILED|
|» state|ABORTED|

> Example responses

> 200 Response

```json
{
  "attributes": {
    "property1": null,
    "property2": null
  },
  "displayName": "string",
  "endTime": "string",
  "name": "string",
  "startTime": "string",
  "state": "UNKNOWN"
}
```

<h3 id="datalineageprojectslocationsprocessesrunscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogLineageV1Run](#schemagoogleclouddatacataloglineagev1run)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalineage.projects.locations.batchSearchLinkProcesses

<a id="opIddatalineage.projects.locations.batchSearchLinkProcesses"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:batchSearchLinkProcesses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "links": [
      "string"
    ],
    "pageSize": 0,
    "pageToken": "string"
  }'
```

`POST /v1/{parent}:batchSearchLinkProcesses`

Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.

> Body parameter

```json
{
  "links": [
    "string"
  ],
  "pageSize": 0,
  "pageToken": "string"
}
```

<h3 id="datalineageprojectslocationsbatchsearchlinkprocesses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location where you want to search.|
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
|body|body|[GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest](#schemagoogleclouddatacataloglineagev1batchsearchlinkprocessesrequest)|false|none|
|» links|body|[string]|false|Required. An array of links to check for their associated LineageProcesses. The maximum number of items in this array is 100. If the request contains more than 100 links, it returns the `INVALID_ARGUMENT` error. Format: `projects/{project}/locations/{location}/links/{link}`.|
|» pageSize|body|integer(int32)|false|The maximum number of processes to return in a single page of the response. A page may contain fewer results than this value.|
|» pageToken|body|string|false|The page token received from a previous `BatchSearchLinkProcesses` call. Use it to get the next page. When requesting subsequent pages of a response, remember that all parameters must match the values you provided in the original request.|

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
  "processLinks": [
    {
      "links": [
        {
          "endTime": "string",
          "link": "string",
          "startTime": "string"
        }
      ],
      "process": "string"
    }
  ]
}
```

<h3 id="datalineageprojectslocationsbatchsearchlinkprocesses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse](#schemagoogleclouddatacataloglineagev1batchsearchlinkprocessesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalineage.projects.locations.searchLinks

<a id="opIddatalineage.projects.locations.searchLinks"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:searchLinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pageSize": 0,
    "pageToken": "string",
    "source": {
      "fullyQualifiedName": "string"
    },
    "target": {
      "fullyQualifiedName": "string"
    }
  }'
```

`POST /v1/{parent}:searchLinks`

Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.

> Body parameter

```json
{
  "pageSize": 0,
  "pageToken": "string",
  "source": {
    "fullyQualifiedName": "string"
  },
  "target": {
    "fullyQualifiedName": "string"
  }
}
```

<h3 id="datalineageprojectslocationssearchlinks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location you want search in.|
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
|body|body|[GoogleCloudDatacatalogLineageV1SearchLinksRequest](#schemagoogleclouddatacataloglineagev1searchlinksrequest)|false|none|
|» pageSize|body|integer(int32)|false|Optional. The maximum number of links to return in a single page of the response. A page may contain fewer links than this value. If unspecified, at most 10 links are returned. Maximum value is 100; values greater than 100 are reduced to 100.|
|» pageToken|body|string|false|Optional. The page token received from a previous `SearchLinksRequest` call. Use it to get the next page. When requesting subsequent pages of a response, remember that all parameters must match the values you provided in the original request.|
|» source|body|[GoogleCloudDatacatalogLineageV1EntityReference](#schemagoogleclouddatacataloglineagev1entityreference)|false|Optional. Send asset information in the **source** field to retrieve all links that lead from the specified asset to downstream assets.|
|» target|body|[GoogleCloudDatacatalogLineageV1EntityReference](#schemagoogleclouddatacataloglineagev1entityreference)|false|Optional. Send asset information in the **target** field to retrieve all links that lead from upstream assets to the specified asset.|

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
  "links": [
    {
      "endTime": "string",
      "name": "string",
      "source": {
        "fullyQualifiedName": "string"
      },
      "startTime": "string",
      "target": {
        "fullyQualifiedName": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="datalineageprojectslocationssearchlinks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogLineageV1SearchLinksResponse](#schemagoogleclouddatacataloglineagev1searchlinksresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest">GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacataloglineagev1batchsearchlinkprocessesrequest"></a>
<a id="schema_GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest"></a>
<a id="tocSgoogleclouddatacataloglineagev1batchsearchlinkprocessesrequest"></a>
<a id="tocsgoogleclouddatacataloglineagev1batchsearchlinkprocessesrequest"></a>

```json
{
  "links": [
    "string"
  ],
  "pageSize": 0,
  "pageToken": "string"
}
```

Request message for BatchSearchLinkProcesses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[string]|false|none|Required. An array of links to check for their associated LineageProcesses. The maximum number of items in this array is 100. If the request contains more than 100 links, it returns the `INVALID_ARGUMENT` error. Format: `projects/{project}/locations/{location}/links/{link}`.|
|pageSize|integer(int32)|false|none|The maximum number of processes to return in a single page of the response. A page may contain fewer results than this value.|
|pageToken|string|false|none|The page token received from a previous `BatchSearchLinkProcesses` call. Use it to get the next page. When requesting subsequent pages of a response, remember that all parameters must match the values you provided in the original request.|

<h2 id="tocS_GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse">GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacataloglineagev1batchsearchlinkprocessesresponse"></a>
<a id="schema_GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse"></a>
<a id="tocSgoogleclouddatacataloglineagev1batchsearchlinkprocessesresponse"></a>
<a id="tocsgoogleclouddatacataloglineagev1batchsearchlinkprocessesresponse"></a>

```json
{
  "nextPageToken": "string",
  "processLinks": [
    {
      "links": [
        {
          "endTime": "string",
          "link": "string",
          "startTime": "string"
        }
      ],
      "process": "string"
    }
  ]
}
```

Response message for BatchSearchLinkProcesses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The token to specify as `page_token` in the subsequent call to get the next page. Omitted if there are no more pages in the response.|
|processLinks|[[GoogleCloudDatacatalogLineageV1ProcessLinks](#schemagoogleclouddatacataloglineagev1processlinks)]|false|none|An array of processes associated with the specified links.|

<h2 id="tocS_GoogleCloudDatacatalogLineageV1EntityReference">GoogleCloudDatacatalogLineageV1EntityReference</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacataloglineagev1entityreference"></a>
<a id="schema_GoogleCloudDatacatalogLineageV1EntityReference"></a>
<a id="tocSgoogleclouddatacataloglineagev1entityreference"></a>
<a id="tocsgoogleclouddatacataloglineagev1entityreference"></a>

```json
{
  "fullyQualifiedName": "string"
}
```

The soft reference to everything you can attach a lineage event to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullyQualifiedName|string|false|none|Required. Fully Qualified Name of the entity. Useful for referencing entities that aren't represented as Google Cloud resources, for example, tables in Dataproc Metastore API. Examples: * `bigquery:dataset.project_id.dataset_id` * `bigquery:table.project_id.dataset_id.table_id` * `pubsub:project_id.topic_id` * `dataproc_metastore:projectId.locationId.instanceId.databaseId.tableId`|

<h2 id="tocS_GoogleCloudDatacatalogLineageV1EventLink">GoogleCloudDatacatalogLineageV1EventLink</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacataloglineagev1eventlink"></a>
<a id="schema_GoogleCloudDatacatalogLineageV1EventLink"></a>
<a id="tocSgoogleclouddatacataloglineagev1eventlink"></a>
<a id="tocsgoogleclouddatacataloglineagev1eventlink"></a>

```json
{
  "source": {
    "fullyQualifiedName": "string"
  },
  "target": {
    "fullyQualifiedName": "string"
  }
}
```

A lineage between source and target entities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|[GoogleCloudDatacatalogLineageV1EntityReference](#schemagoogleclouddatacataloglineagev1entityreference)|false|none|Required. Reference to the source entity|
|target|[GoogleCloudDatacatalogLineageV1EntityReference](#schemagoogleclouddatacataloglineagev1entityreference)|false|none|Required. Reference to the target entity|

<h2 id="tocS_GoogleCloudDatacatalogLineageV1LineageEvent">GoogleCloudDatacatalogLineageV1LineageEvent</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacataloglineagev1lineageevent"></a>
<a id="schema_GoogleCloudDatacatalogLineageV1LineageEvent"></a>
<a id="tocSgoogleclouddatacataloglineagev1lineageevent"></a>
<a id="tocsgoogleclouddatacataloglineagev1lineageevent"></a>

```json
{
  "endTime": "string",
  "links": [
    {
      "source": {
        "fullyQualifiedName": "string"
      },
      "target": {
        "fullyQualifiedName": "string"
      }
    }
  ],
  "name": "string",
  "startTime": "string"
}
```

A lineage event represents an operation on assets. Within the operation, the data flows from the source to the target defined in the links field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|Optional. The end of the transformation which resulted in this lineage event. For streaming scenarios, it should be the end of the period from which the lineage is being reported.|
|links|[[GoogleCloudDatacatalogLineageV1EventLink](#schemagoogleclouddatacataloglineagev1eventlink)]|false|none|Optional. List of source-target pairs. Can't contain more than 100 tuples.|
|name|string|false|none|Immutable. The resource name of the lineage event. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}/lineageEvents/{lineage_event}`. Can be specified or auto-assigned. {lineage_event} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`|
|startTime|string(google-datetime)|false|none|Optional. The beginning of the transformation which resulted in this lineage event. For streaming scenarios, it should be the beginning of the period from which the lineage is being reported.|

<h2 id="tocS_GoogleCloudDatacatalogLineageV1Link">GoogleCloudDatacatalogLineageV1Link</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacataloglineagev1link"></a>
<a id="schema_GoogleCloudDatacatalogLineageV1Link"></a>
<a id="tocSgoogleclouddatacataloglineagev1link"></a>
<a id="tocsgoogleclouddatacataloglineagev1link"></a>

```json
{
  "endTime": "string",
  "name": "string",
  "source": {
    "fullyQualifiedName": "string"
  },
  "startTime": "string",
  "target": {
    "fullyQualifiedName": "string"
  }
}
```

Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are created when LineageEvents record data transformation between related assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The end of the last event establishing this link.|
|name|string|false|read-only|Output only. Immutable. The name of the link. Format: `projects/{project}/locations/{location}/links/{link}`.|
|source|[GoogleCloudDatacatalogLineageV1EntityReference](#schemagoogleclouddatacataloglineagev1entityreference)|false|none|The pointer to the entity that is the **source** of this link.|
|startTime|string(google-datetime)|false|none|The start of the first event establishing this link.|
|target|[GoogleCloudDatacatalogLineageV1EntityReference](#schemagoogleclouddatacataloglineagev1entityreference)|false|none|The pointer to the entity that is the **target** of this link.|

<h2 id="tocS_GoogleCloudDatacatalogLineageV1ListLineageEventsResponse">GoogleCloudDatacatalogLineageV1ListLineageEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacataloglineagev1listlineageeventsresponse"></a>
<a id="schema_GoogleCloudDatacatalogLineageV1ListLineageEventsResponse"></a>
<a id="tocSgoogleclouddatacataloglineagev1listlineageeventsresponse"></a>
<a id="tocsgoogleclouddatacataloglineagev1listlineageeventsresponse"></a>

```json
{
  "lineageEvents": [
    {
      "endTime": "string",
      "links": [
        {
          "source": {
            "fullyQualifiedName": "string"
          },
          "target": {
            "fullyQualifiedName": "string"
          }
        }
      ],
      "name": "string",
      "startTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListLineageEvents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lineageEvents|[[GoogleCloudDatacatalogLineageV1LineageEvent](#schemagoogleclouddatacataloglineagev1lineageevent)]|false|none|Lineage events from the specified project and location.|
|nextPageToken|string|false|none|The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleCloudDatacatalogLineageV1ListProcessesResponse">GoogleCloudDatacatalogLineageV1ListProcessesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacataloglineagev1listprocessesresponse"></a>
<a id="schema_GoogleCloudDatacatalogLineageV1ListProcessesResponse"></a>
<a id="tocSgoogleclouddatacataloglineagev1listprocessesresponse"></a>
<a id="tocsgoogleclouddatacataloglineagev1listprocessesresponse"></a>

```json
{
  "nextPageToken": "string",
  "processes": [
    {
      "attributes": {
        "property1": null,
        "property2": null
      },
      "displayName": "string",
      "name": "string",
      "origin": {
        "name": "string",
        "sourceType": "SOURCE_TYPE_UNSPECIFIED"
      }
    }
  ]
}
```

Response message for ListProcesses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages.|
|processes|[[GoogleCloudDatacatalogLineageV1Process](#schemagoogleclouddatacataloglineagev1process)]|false|none|The processes from the specified project and location.|

<h2 id="tocS_GoogleCloudDatacatalogLineageV1ListRunsResponse">GoogleCloudDatacatalogLineageV1ListRunsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacataloglineagev1listrunsresponse"></a>
<a id="schema_GoogleCloudDatacatalogLineageV1ListRunsResponse"></a>
<a id="tocSgoogleclouddatacataloglineagev1listrunsresponse"></a>
<a id="tocsgoogleclouddatacataloglineagev1listrunsresponse"></a>

```json
{
  "nextPageToken": "string",
  "runs": [
    {
      "attributes": {
        "property1": null,
        "property2": null
      },
      "displayName": "string",
      "endTime": "string",
      "name": "string",
      "startTime": "string",
      "state": "UNKNOWN"
    }
  ]
}
```

Response message for ListRuns.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages.|
|runs|[[GoogleCloudDatacatalogLineageV1Run](#schemagoogleclouddatacataloglineagev1run)]|false|none|The runs from the specified project and location.|

<h2 id="tocS_GoogleCloudDatacatalogLineageV1OperationMetadata">GoogleCloudDatacatalogLineageV1OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacataloglineagev1operationmetadata"></a>
<a id="schema_GoogleCloudDatacatalogLineageV1OperationMetadata"></a>
<a id="tocSgoogleclouddatacataloglineagev1operationmetadata"></a>
<a id="tocsgoogleclouddatacataloglineagev1operationmetadata"></a>

```json
{
  "createTime": "string",
  "endTime": "string",
  "operationType": "TYPE_UNSPECIFIED",
  "resource": "string",
  "resourceUuid": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Metadata describing the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp of the operation submission to the server.|
|endTime|string(google-datetime)|false|read-only|Output only. The timestamp of the operation termination, regardless of its success. This field is unset if the operation is still ongoing.|
|operationType|string|false|read-only|Output only. The type of the operation being performed.|
|resource|string|false|read-only|Output only. The [relative name] (https://cloud.google.com//apis/design/resource_names#relative_resource_name) of the resource being operated on.|
|resourceUuid|string|false|read-only|Output only. The UUID of the resource being operated on.|
|state|string|false|read-only|Output only. The current operation state.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|TYPE_UNSPECIFIED|
|operationType|DELETE|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|RUNNING|
|state|SUCCEEDED|
|state|FAILED|

<h2 id="tocS_GoogleCloudDatacatalogLineageV1Origin">GoogleCloudDatacatalogLineageV1Origin</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacataloglineagev1origin"></a>
<a id="schema_GoogleCloudDatacatalogLineageV1Origin"></a>
<a id="tocSgoogleclouddatacataloglineagev1origin"></a>
<a id="tocsgoogleclouddatacataloglineagev1origin"></a>

```json
{
  "name": "string",
  "sourceType": "SOURCE_TYPE_UNSPECIFIED"
}
```

Origin of a process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|If the source_type isn't CUSTOM, the value of this field should be a Google Cloud resource name of the system, which reports lineage. The project and location parts of the resource name must match the project and location of the lineage resource being created. Examples: - `{source_type: COMPOSER, name: "projects/foo/locations/us/environments/bar"}` - `{source_type: BIGQUERY, name: "projects/foo/locations/eu"}` - `{source_type: CUSTOM, name: "myCustomIntegration"}`|
|sourceType|string|false|none|Type of the source.|

#### Enumerated Values

|Property|Value|
|---|---|
|sourceType|SOURCE_TYPE_UNSPECIFIED|
|sourceType|CUSTOM|
|sourceType|BIGQUERY|
|sourceType|DATA_FUSION|
|sourceType|COMPOSER|
|sourceType|LOOKER_STUDIO|
|sourceType|DATAPROC|

<h2 id="tocS_GoogleCloudDatacatalogLineageV1Process">GoogleCloudDatacatalogLineageV1Process</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacataloglineagev1process"></a>
<a id="schema_GoogleCloudDatacatalogLineageV1Process"></a>
<a id="tocSgoogleclouddatacataloglineagev1process"></a>
<a id="tocsgoogleclouddatacataloglineagev1process"></a>

```json
{
  "attributes": {
    "property1": null,
    "property2": null
  },
  "displayName": "string",
  "name": "string",
  "origin": {
    "name": "string",
    "sourceType": "SOURCE_TYPE_UNSPECIFIED"
  }
}
```

A process is the definition of a data transformation operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|Optional. The attributes of the process. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the process). Up to 100 attributes are allowed.|
|displayName|string|false|none|Optional. A human-readable name you can set to display in a user interface. Must be not longer than 200 characters and only contain UTF-8 letters or numbers, spaces or characters like `_-:&.`|
|name|string|false|none|Immutable. The resource name of the lineage process. Format: `projects/{project}/locations/{location}/processes/{process}`. Can be specified or auto-assigned. {process} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`|
|origin|[GoogleCloudDatacatalogLineageV1Origin](#schemagoogleclouddatacataloglineagev1origin)|false|none|Optional. The origin of this process and its runs and lineage events.|

<h2 id="tocS_GoogleCloudDatacatalogLineageV1ProcessLinkInfo">GoogleCloudDatacatalogLineageV1ProcessLinkInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacataloglineagev1processlinkinfo"></a>
<a id="schema_GoogleCloudDatacatalogLineageV1ProcessLinkInfo"></a>
<a id="tocSgoogleclouddatacataloglineagev1processlinkinfo"></a>
<a id="tocsgoogleclouddatacataloglineagev1processlinkinfo"></a>

```json
{
  "endTime": "string",
  "link": "string",
  "startTime": "string"
}
```

Link details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The end of the last event establishing this link-process tuple.|
|link|string|false|none|The name of the link in the format of `projects/{project}/locations/{location}/links/{link}`.|
|startTime|string(google-datetime)|false|none|The start of the first event establishing this link-process tuple.|

<h2 id="tocS_GoogleCloudDatacatalogLineageV1ProcessLinks">GoogleCloudDatacatalogLineageV1ProcessLinks</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacataloglineagev1processlinks"></a>
<a id="schema_GoogleCloudDatacatalogLineageV1ProcessLinks"></a>
<a id="tocSgoogleclouddatacataloglineagev1processlinks"></a>
<a id="tocsgoogleclouddatacataloglineagev1processlinks"></a>

```json
{
  "links": [
    {
      "endTime": "string",
      "link": "string",
      "startTime": "string"
    }
  ],
  "process": "string"
}
```

Links associated with a specific process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[GoogleCloudDatacatalogLineageV1ProcessLinkInfo](#schemagoogleclouddatacataloglineagev1processlinkinfo)]|false|none|An array containing link details objects of the links provided in the original request. A single process can result in creating multiple links. If any of the links you provide in the request are created by the same process, they all are included in this array.|
|process|string|false|none|The process name in the format of `projects/{project}/locations/{location}/processes/{process}`.|

<h2 id="tocS_GoogleCloudDatacatalogLineageV1Run">GoogleCloudDatacatalogLineageV1Run</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacataloglineagev1run"></a>
<a id="schema_GoogleCloudDatacatalogLineageV1Run"></a>
<a id="tocSgoogleclouddatacataloglineagev1run"></a>
<a id="tocsgoogleclouddatacataloglineagev1run"></a>

```json
{
  "attributes": {
    "property1": null,
    "property2": null
  },
  "displayName": "string",
  "endTime": "string",
  "name": "string",
  "startTime": "string",
  "state": "UNKNOWN"
}
```

A lineage run represents an execution of a process that creates lineage events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|Optional. The attributes of the run. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the run). Up to 100 attributes are allowed.|
|displayName|string|false|none|Optional. A human-readable name you can set to display in a user interface. Must be not longer than 1024 characters and only contain UTF-8 letters or numbers, spaces or characters like `_-:&.`|
|endTime|string(google-datetime)|false|none|Optional. The timestamp of the end of the run.|
|name|string|false|none|Immutable. The resource name of the run. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}`. Can be specified or auto-assigned. {run} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`|
|startTime|string(google-datetime)|false|none|Required. The timestamp of the start of the run.|
|state|string|false|none|Required. The state of the run.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|UNKNOWN|
|state|STARTED|
|state|COMPLETED|
|state|FAILED|
|state|ABORTED|

<h2 id="tocS_GoogleCloudDatacatalogLineageV1SearchLinksRequest">GoogleCloudDatacatalogLineageV1SearchLinksRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacataloglineagev1searchlinksrequest"></a>
<a id="schema_GoogleCloudDatacatalogLineageV1SearchLinksRequest"></a>
<a id="tocSgoogleclouddatacataloglineagev1searchlinksrequest"></a>
<a id="tocsgoogleclouddatacataloglineagev1searchlinksrequest"></a>

```json
{
  "pageSize": 0,
  "pageToken": "string",
  "source": {
    "fullyQualifiedName": "string"
  },
  "target": {
    "fullyQualifiedName": "string"
  }
}
```

Request message for SearchLinks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageSize|integer(int32)|false|none|Optional. The maximum number of links to return in a single page of the response. A page may contain fewer links than this value. If unspecified, at most 10 links are returned. Maximum value is 100; values greater than 100 are reduced to 100.|
|pageToken|string|false|none|Optional. The page token received from a previous `SearchLinksRequest` call. Use it to get the next page. When requesting subsequent pages of a response, remember that all parameters must match the values you provided in the original request.|
|source|[GoogleCloudDatacatalogLineageV1EntityReference](#schemagoogleclouddatacataloglineagev1entityreference)|false|none|Optional. Send asset information in the **source** field to retrieve all links that lead from the specified asset to downstream assets.|
|target|[GoogleCloudDatacatalogLineageV1EntityReference](#schemagoogleclouddatacataloglineagev1entityreference)|false|none|Optional. Send asset information in the **target** field to retrieve all links that lead from upstream assets to the specified asset.|

<h2 id="tocS_GoogleCloudDatacatalogLineageV1SearchLinksResponse">GoogleCloudDatacatalogLineageV1SearchLinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacataloglineagev1searchlinksresponse"></a>
<a id="schema_GoogleCloudDatacatalogLineageV1SearchLinksResponse"></a>
<a id="tocSgoogleclouddatacataloglineagev1searchlinksresponse"></a>
<a id="tocsgoogleclouddatacataloglineagev1searchlinksresponse"></a>

```json
{
  "links": [
    {
      "endTime": "string",
      "name": "string",
      "source": {
        "fullyQualifiedName": "string"
      },
      "startTime": "string",
      "target": {
        "fullyQualifiedName": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for SearchLinks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[GoogleCloudDatacatalogLineageV1Link](#schemagoogleclouddatacataloglineagev1link)]|false|none|The list of links for a given asset. Can be empty if the asset has no relations of requested type (source or target).|
|nextPageToken|string|false|none|The token to specify as `page_token` in the subsequent call to get the next page. Omitted if there are no more pages in the response.|

<h2 id="tocS_GoogleLongrunningCancelOperationRequest">GoogleLongrunningCancelOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunningcanceloperationrequest"></a>
<a id="schema_GoogleLongrunningCancelOperationRequest"></a>
<a id="tocSgooglelongrunningcanceloperationrequest"></a>
<a id="tocsgooglelongrunningcanceloperationrequest"></a>

```json
{}
```

The request message for Operations.CancelOperation.

<h2 id="tocS_GoogleLongrunningListOperationsResponse">GoogleLongrunningListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunninglistoperationsresponse"></a>
<a id="schema_GoogleLongrunningListOperationsResponse"></a>
<a id="tocSgooglelongrunninglistoperationsresponse"></a>
<a id="tocsgooglelongrunninglistoperationsresponse"></a>

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
|operations|[[GoogleLongrunningOperation](#schemagooglelongrunningoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_GoogleLongrunningOperation">GoogleLongrunningOperation</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunningoperation"></a>
<a id="schema_GoogleLongrunningOperation"></a>
<a id="tocSgooglelongrunningoperation"></a>
<a id="tocsgooglelongrunningoperation"></a>

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
|error|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_GoogleProtobufEmpty">GoogleProtobufEmpty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobufempty"></a>
<a id="schema_GoogleProtobufEmpty"></a>
<a id="tocSgoogleprotobufempty"></a>
<a id="tocsgoogleprotobufempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_GoogleRpcStatus">GoogleRpcStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglerpcstatus"></a>
<a id="schema_GoogleRpcStatus"></a>
<a id="tocSgooglerpcstatus"></a>
<a id="tocsgooglerpcstatus"></a>

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
