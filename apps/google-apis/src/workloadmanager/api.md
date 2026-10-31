<h1 id="workload-manager-api">Workload Manager API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://workloadmanager.googleapis.com/">https://workloadmanager.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/workload-manager/docs">External documentation</a>

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

<h1 id="workload-manager-api-projects">projects</h1>

## workloadmanager.projects.locations.insights.writeInsight

<a id="opIdworkloadmanager.projects.locations.insights.writeInsight"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/insights:writeInsight \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "insight": {
      "sapDiscovery": {
        "applicationLayer": {
          "applicationType": "string",
          "databaseType": "string",
          "hostProject": "string",
          "resources": [
            {
              "relatedResources": [
                "string"
              ],
              "resourceKind": "string",
              "resourceState": "RESOURCE_STATE_UNSPECIFIED",
              "resourceType": "RESOURCE_TYPE_UNSPECIFIED",
              "resourceUri": "string",
              "updateTime": "string"
            }
          ],
          "sid": "string"
        },
        "databaseLayer": {
          "applicationType": "string",
          "databaseType": "string",
          "hostProject": "string",
          "resources": [
            {
              "relatedResources": [
                "string"
              ],
              "resourceKind": "string",
              "resourceState": "RESOURCE_STATE_UNSPECIFIED",
              "resourceType": "RESOURCE_TYPE_UNSPECIFIED",
              "resourceUri": "string",
              "updateTime": "string"
            }
          ],
          "sid": "string"
        },
        "metadata": {
          "customerRegion": "string",
          "definedSystem": "string",
          "environmentType": "string",
          "sapProduct": "string"
        },
        "systemId": "string",
        "updateTime": "string"
      },
      "sapValidation": {
        "validationDetails": [
          {
            "details": {
              "property1": "string",
              "property2": "string"
            },
            "sapValidationType": "SAP_VALIDATION_TYPE_UNSPECIFIED"
          }
        ]
      }
    },
    "requestId": "string"
  }'
```

`POST /v1/{location}/insights:writeInsight`

Write the data insights to workload manager data warehouse.

> Body parameter

```json
{
  "insight": {
    "sapDiscovery": {
      "applicationLayer": {
        "applicationType": "string",
        "databaseType": "string",
        "hostProject": "string",
        "resources": [
          {
            "relatedResources": [
              "string"
            ],
            "resourceKind": "string",
            "resourceState": "RESOURCE_STATE_UNSPECIFIED",
            "resourceType": "RESOURCE_TYPE_UNSPECIFIED",
            "resourceUri": "string",
            "updateTime": "string"
          }
        ],
        "sid": "string"
      },
      "databaseLayer": {
        "applicationType": "string",
        "databaseType": "string",
        "hostProject": "string",
        "resources": [
          {
            "relatedResources": [
              "string"
            ],
            "resourceKind": "string",
            "resourceState": "RESOURCE_STATE_UNSPECIFIED",
            "resourceType": "RESOURCE_TYPE_UNSPECIFIED",
            "resourceUri": "string",
            "updateTime": "string"
          }
        ],
        "sid": "string"
      },
      "metadata": {
        "customerRegion": "string",
        "definedSystem": "string",
        "environmentType": "string",
        "sapProduct": "string"
      },
      "systemId": "string",
      "updateTime": "string"
    },
    "sapValidation": {
      "validationDetails": [
        {
          "details": {
            "property1": "string",
            "property2": "string"
          },
          "sapValidationType": "SAP_VALIDATION_TYPE_UNSPECIFIED"
        }
      ]
    }
  },
  "requestId": "string"
}
```

<h3 id="workloadmanagerprojectslocationsinsightswriteinsight-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|path|string|true|Required. The GCP location. The format is: projects/{project}/locations/{location}.|
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
|body|body|[WriteInsightRequest](#schemawriteinsightrequest)|false|none|
|» insight|body|[Insight](#schemainsight)|false|Required. The metrics data details.|
|» requestId|body|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|

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

<h3 id="workloadmanagerprojectslocationsinsightswriteinsight-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WriteInsightResponse](#schemawriteinsightresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workloadmanager.projects.locations.operations.get

<a id="opIdworkloadmanager.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="workloadmanagerprojectslocationsoperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource.|
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

<h3 id="workloadmanagerprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workloadmanager.projects.locations.operations.delete

<a id="opIdworkloadmanager.projects.locations.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="workloadmanagerprojectslocationsoperationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be deleted.|
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

<h3 id="workloadmanagerprojectslocationsoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workloadmanager.projects.locations.evaluations.executions.run

<a id="opIdworkloadmanager.projects.locations.evaluations.executions.run"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/executions:run \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "execution": {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "runType": "TYPE_UNSPECIFIED"
    },
    "executionId": "string",
    "requestId": "string"
  }'
```

`POST /v1/{name}/executions:run`

Creates a new Execution in a given project and location.

> Body parameter

```json
{
  "execution": {
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "runType": "TYPE_UNSPECIFIED"
  },
  "executionId": "string",
  "requestId": "string"
}
```

<h3 id="workloadmanagerprojectslocationsevaluationsexecutionsrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the Execution using the form: 'projects/{project}/locations/{location}/evaluations/{evaluation}/executions/{execution}'|
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
|body|body|[RunEvaluationRequest](#schemarunevaluationrequest)|false|none|
|» execution|body|[Execution](#schemaexecution)|false|Required. The resource being created|
|» executionId|body|string|false|Required. Id of the requesting object If auto-generating Id server-side, remove this field and execution_id from the method_signature of Create RPC|
|» requestId|body|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|

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

<h3 id="workloadmanagerprojectslocationsevaluationsexecutionsrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workloadmanager.projects.locations.list

<a id="opIdworkloadmanager.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="workloadmanagerprojectslocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource that owns the locations collection, if applicable.|
|filter|query|string|false|A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).|
|pageSize|query|integer|false|The maximum number of results to return. If not set, the service selects a default.|
|pageToken|query|string|false|A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.|
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
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="workloadmanagerprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workloadmanager.projects.locations.operations.list

<a id="opIdworkloadmanager.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="workloadmanagerprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="workloadmanagerprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workloadmanager.projects.locations.operations.cancel

<a id="opIdworkloadmanager.projects.locations.operations.cancel"></a>

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

<h3 id="workloadmanagerprojectslocationsoperationscancel-parameters">Parameters</h3>

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
|body|body|[CancelOperationRequest](#schemacanceloperationrequest)|false|none|

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

<h3 id="workloadmanagerprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workloadmanager.projects.locations.evaluations.list

<a id="opIdworkloadmanager.projects.locations.evaluations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/evaluations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/evaluations`

Lists Evaluations in a given project and location.

<h3 id="workloadmanagerprojectslocationsevaluationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for ListEvaluationsRequest|
|filter|query|string|false|Filtering results|
|orderBy|query|string|false|Hint for how to order the results|
|pageSize|query|integer|false|Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return.|
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
  "evaluations": [
    {
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "resourceFilter": {
        "gceInstanceFilter": {
          "serviceAccounts": [
            "string"
          ]
        },
        "inclusionLabels": {
          "property1": "string",
          "property2": "string"
        },
        "resourceIdPatterns": [
          "string"
        ],
        "scopes": [
          "string"
        ]
      },
      "resourceStatus": {
        "rulesNewerVersions": [
          "string"
        ],
        "state": "STATE_UNSPECIFIED"
      },
      "ruleNames": [
        "string"
      ],
      "ruleVersions": [
        "string"
      ],
      "schedule": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="workloadmanagerprojectslocationsevaluationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListEvaluationsResponse](#schemalistevaluationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workloadmanager.projects.locations.evaluations.create

<a id="opIdworkloadmanager.projects.locations.evaluations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/evaluations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "resourceFilter": {
      "gceInstanceFilter": {
        "serviceAccounts": [
          "string"
        ]
      },
      "inclusionLabels": {
        "property1": "string",
        "property2": "string"
      },
      "resourceIdPatterns": [
        "string"
      ],
      "scopes": [
        "string"
      ]
    },
    "ruleNames": [
      "string"
    ],
    "schedule": "string"
  }'
```

`POST /v1/{parent}/evaluations`

Creates a new Evaluation in a given project and location.

> Body parameter

```json
{
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "resourceFilter": {
    "gceInstanceFilter": {
      "serviceAccounts": [
        "string"
      ]
    },
    "inclusionLabels": {
      "property1": "string",
      "property2": "string"
    },
    "resourceIdPatterns": [
      "string"
    ],
    "scopes": [
      "string"
    ]
  },
  "ruleNames": [
    "string"
  ],
  "schedule": "string"
}
```

<h3 id="workloadmanagerprojectslocationsevaluationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource prefix of the evaluation location using the form: `projects/{project_id}/locations/{location_id}`|
|evaluationId|query|string|false|Required. Id of the requesting object|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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
|body|body|[Evaluation](#schemaevaluation)|false|none|
|» description|body|string|false|Description of the Evaluation|
|» labels|body|object|false|Labels as key value pairs|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|name of resource names have the form 'projects/{project_id}/locations/{location_id}/evaluations/{evaluation_id}'|
|» resourceFilter|body|[ResourceFilter](#schemaresourcefilter)|false|annotations as key value pairs|
|» ruleNames|body|[string]|false|the name of the rule|
|» schedule|body|string|false|crontab format schedule for scheduled evaluation, example: 0 */3 * * *|

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

<h3 id="workloadmanagerprojectslocationsevaluationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workloadmanager.projects.locations.evaluations.executions.list

<a id="opIdworkloadmanager.projects.locations.evaluations.executions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/executions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/executions`

Lists Executions in a given project and location.

<h3 id="workloadmanagerprojectslocationsevaluationsexecutionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource prefix of the Execution using the form: 'projects/{project}/locations/{location}/evaluations/{evaluation}'|
|filter|query|string|false|Filtering results|
|orderBy|query|string|false|Field to sort by. See https://google.aip.dev/132#ordering for more details.|
|pageSize|query|integer|false|Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return.|
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
  "executions": [
    {
      "endTime": "string",
      "evaluationId": "string",
      "inventoryTime": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "runType": "TYPE_UNSPECIFIED",
      "startTime": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="workloadmanagerprojectslocationsevaluationsexecutionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListExecutionsResponse](#schemalistexecutionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workloadmanager.projects.locations.evaluations.executions.results.list

<a id="opIdworkloadmanager.projects.locations.evaluations.executions.results.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/results \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/results`

List the running result of a single Execution.

<h3 id="workloadmanagerprojectslocationsevaluationsexecutionsresultslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The execution results. Format: {parent}/evaluations/*/executions/*/results|
|filter|query|string|false|Filtering results|
|pageSize|query|integer|false|Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return.|
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
  "executionResults": [
    {
      "documentationUrl": "string",
      "resource": {
        "name": "string",
        "serviceAccount": "string",
        "type": "string"
      },
      "rule": "string",
      "severity": "string",
      "violationDetails": {
        "asset": "string",
        "observed": {
          "property1": "string",
          "property2": "string"
        },
        "serviceAccount": "string"
      },
      "violationMessage": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="workloadmanagerprojectslocationsevaluationsexecutionsresultslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListExecutionResultsResponse](#schemalistexecutionresultsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workloadmanager.projects.locations.rules.list

<a id="opIdworkloadmanager.projects.locations.rules.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/rules \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/rules`

Lists rules in a given project.

<h3 id="workloadmanagerprojectslocationsruleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The [project] on which to execute the request. The format is: projects/{project_id}/locations/{location} Currently, the pre-defined rules are global available to all projects and all regions|
|filter|query|string|false|Filter based on primary_category, secondary_category|
|pageSize|query|integer|false|Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return.|
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
  "rules": [
    {
      "description": "string",
      "displayName": "string",
      "errorMessage": "string",
      "name": "string",
      "primaryCategory": "string",
      "remediation": "string",
      "revisionId": "string",
      "secondaryCategory": "string",
      "severity": "string",
      "uri": "string"
    }
  ]
}
```

<h3 id="workloadmanagerprojectslocationsruleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListRulesResponse](#schemalistrulesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workloadmanager.projects.locations.evaluations.executions.scannedResources.list

<a id="opIdworkloadmanager.projects.locations.evaluations.executions.scannedResources.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/scannedResources \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/scannedResources`

List all scanned resources for a single Execution.

<h3 id="workloadmanagerprojectslocationsevaluationsexecutionsscannedresourceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. parent for ListScannedResourcesRequest|
|filter|query|string|false|Filtering results|
|orderBy|query|string|false|Field to sort by. See https://google.aip.dev/132#ordering for more details.|
|pageSize|query|integer|false|Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return.|
|rule|query|string|false|rule name|
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
  "scannedResources": [
    {
      "resource": "string"
    }
  ]
}
```

<h3 id="workloadmanagerprojectslocationsevaluationsexecutionsscannedresourceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListScannedResourcesResponse](#schemalistscannedresourcesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_CancelOperationRequest">CancelOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceloperationrequest"></a>
<a id="schema_CancelOperationRequest"></a>
<a id="tocScanceloperationrequest"></a>
<a id="tocscanceloperationrequest"></a>

```json
{}
```

The request message for Operations.CancelOperation.

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

<h2 id="tocS_Evaluation">Evaluation</h2>
<!-- backwards compatibility -->
<a id="schemaevaluation"></a>
<a id="schema_Evaluation"></a>
<a id="tocSevaluation"></a>
<a id="tocsevaluation"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "resourceFilter": {
    "gceInstanceFilter": {
      "serviceAccounts": [
        "string"
      ]
    },
    "inclusionLabels": {
      "property1": "string",
      "property2": "string"
    },
    "resourceIdPatterns": [
      "string"
    ],
    "scopes": [
      "string"
    ]
  },
  "resourceStatus": {
    "rulesNewerVersions": [
      "string"
    ],
    "state": "STATE_UNSPECIFIED"
  },
  "ruleNames": [
    "string"
  ],
  "ruleVersions": [
    "string"
  ],
  "schedule": "string",
  "updateTime": "string"
}
```

Message describing Evaluation object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. [Output only] Create time stamp|
|description|string|false|none|Description of the Evaluation|
|labels|object|false|none|Labels as key value pairs|
|name|string|false|none|name of resource names have the form 'projects/{project_id}/locations/{location_id}/evaluations/{evaluation_id}'|
|resourceFilter|[ResourceFilter](#schemaresourcefilter)|false|none|annotations as key value pairs|
|resourceStatus|[ResourceStatus](#schemaresourcestatus)|false|none|Output only. [Output only] The updated rule ids if exist.|
|ruleNames|[string]|false|none|the name of the rule|
|ruleVersions|[string]|false|read-only|Output only. [Output only] The updated rule ids if exist.|
|schedule|string|false|none|crontab format schedule for scheduled evaluation, example: 0 */3 * * *|
|updateTime|string(google-datetime)|false|read-only|Output only. [Output only] Update time stamp|

<h2 id="tocS_Execution">Execution</h2>
<!-- backwards compatibility -->
<a id="schemaexecution"></a>
<a id="schema_Execution"></a>
<a id="tocSexecution"></a>
<a id="tocsexecution"></a>

```json
{
  "endTime": "string",
  "evaluationId": "string",
  "inventoryTime": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "runType": "TYPE_UNSPECIFIED",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Message describing Execution object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|read-only|Output only. [Output only] End time stamp|
|evaluationId|string|false|read-only|Output only. [Output only] Evaluation ID|
|inventoryTime|string(google-datetime)|false|read-only|Output only. [Output only] Inventory time stamp|
|labels|object|false|none|Labels as key value pairs|
|name|string|false|none|The name of execution resource. The format is projects/{project}/locations/{location}/evaluations/{evaluation}/executions/{execution}|
|runType|string|false|none|type represent whether the execution executed directly by user or scheduled according evaluation.schedule field.|
|startTime|string(google-datetime)|false|read-only|Output only. [Output only] Start time stamp|
|state|string|false|read-only|Output only. [Output only] State|

#### Enumerated Values

|Property|Value|
|---|---|
|runType|TYPE_UNSPECIFIED|
|runType|ONE_TIME|
|runType|SCHEDULED|
|state|STATE_UNSPECIFIED|
|state|RUNNING|
|state|SUCCEEDED|
|state|FAILED|

<h2 id="tocS_ExecutionResult">ExecutionResult</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionresult"></a>
<a id="schema_ExecutionResult"></a>
<a id="tocSexecutionresult"></a>
<a id="tocsexecutionresult"></a>

```json
{
  "documentationUrl": "string",
  "resource": {
    "name": "string",
    "serviceAccount": "string",
    "type": "string"
  },
  "rule": "string",
  "severity": "string",
  "violationDetails": {
    "asset": "string",
    "observed": {
      "property1": "string",
      "property2": "string"
    },
    "serviceAccount": "string"
  },
  "violationMessage": "string"
}
```

Message describing the result of an execution

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentationUrl|string|false|none|the document url of the rule|
|resource|[Resource](#schemaresource)|false|none|the violate resource|
|rule|string|false|none|the rule which violate in execution|
|severity|string|false|none|severity of violation|
|violationDetails|[ViolationDetails](#schemaviolationdetails)|false|none|the details of violation in result|
|violationMessage|string|false|none|the violation message of an execution|

<h2 id="tocS_GceInstanceFilter">GceInstanceFilter</h2>
<!-- backwards compatibility -->
<a id="schemagceinstancefilter"></a>
<a id="schema_GceInstanceFilter"></a>
<a id="tocSgceinstancefilter"></a>
<a id="tocsgceinstancefilter"></a>

```json
{
  "serviceAccounts": [
    "string"
  ]
}
```

Message describing compute engine instance filter

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceAccounts|[string]|false|none|Service account of compute engine|

<h2 id="tocS_Insight">Insight</h2>
<!-- backwards compatibility -->
<a id="schemainsight"></a>
<a id="schema_Insight"></a>
<a id="tocSinsight"></a>
<a id="tocsinsight"></a>

```json
{
  "sapDiscovery": {
    "applicationLayer": {
      "applicationType": "string",
      "databaseType": "string",
      "hostProject": "string",
      "resources": [
        {
          "relatedResources": [
            "string"
          ],
          "resourceKind": "string",
          "resourceState": "RESOURCE_STATE_UNSPECIFIED",
          "resourceType": "RESOURCE_TYPE_UNSPECIFIED",
          "resourceUri": "string",
          "updateTime": "string"
        }
      ],
      "sid": "string"
    },
    "databaseLayer": {
      "applicationType": "string",
      "databaseType": "string",
      "hostProject": "string",
      "resources": [
        {
          "relatedResources": [
            "string"
          ],
          "resourceKind": "string",
          "resourceState": "RESOURCE_STATE_UNSPECIFIED",
          "resourceType": "RESOURCE_TYPE_UNSPECIFIED",
          "resourceUri": "string",
          "updateTime": "string"
        }
      ],
      "sid": "string"
    },
    "metadata": {
      "customerRegion": "string",
      "definedSystem": "string",
      "environmentType": "string",
      "sapProduct": "string"
    },
    "systemId": "string",
    "updateTime": "string"
  },
  "sapValidation": {
    "validationDetails": [
      {
        "details": {
          "property1": "string",
          "property2": "string"
        },
        "sapValidationType": "SAP_VALIDATION_TYPE_UNSPECIFIED"
      }
    ]
  },
  "sentTime": "string"
}
```

A presentation of host resource usage where the workload runs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sapDiscovery|[SapDiscovery](#schemasapdiscovery)|false|none|The insights data for sap system discovery. This is a copy of SAP System proto and should get updated whenever that one changes.|
|sapValidation|[SapValidation](#schemasapvalidation)|false|none|The insights data for the sap workload validation.|
|sentTime|string(google-datetime)|false|read-only|Output only. [Output only] Create time stamp|

<h2 id="tocS_ListEvaluationsResponse">ListEvaluationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistevaluationsresponse"></a>
<a id="schema_ListEvaluationsResponse"></a>
<a id="tocSlistevaluationsresponse"></a>
<a id="tocslistevaluationsresponse"></a>

```json
{
  "evaluations": [
    {
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "resourceFilter": {
        "gceInstanceFilter": {
          "serviceAccounts": [
            "string"
          ]
        },
        "inclusionLabels": {
          "property1": "string",
          "property2": "string"
        },
        "resourceIdPatterns": [
          "string"
        ],
        "scopes": [
          "string"
        ]
      },
      "resourceStatus": {
        "rulesNewerVersions": [
          "string"
        ],
        "state": "STATE_UNSPECIFIED"
      },
      "ruleNames": [
        "string"
      ],
      "ruleVersions": [
        "string"
      ],
      "schedule": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Message for response to listing Evaluations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluations|[[Evaluation](#schemaevaluation)]|false|none|The list of Evaluation|
|nextPageToken|string|false|none|A token identifying a page of results the server should return.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListExecutionResultsResponse">ListExecutionResultsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistexecutionresultsresponse"></a>
<a id="schema_ListExecutionResultsResponse"></a>
<a id="tocSlistexecutionresultsresponse"></a>
<a id="tocslistexecutionresultsresponse"></a>

```json
{
  "executionResults": [
    {
      "documentationUrl": "string",
      "resource": {
        "name": "string",
        "serviceAccount": "string",
        "type": "string"
      },
      "rule": "string",
      "severity": "string",
      "violationDetails": {
        "asset": "string",
        "observed": {
          "property1": "string",
          "property2": "string"
        },
        "serviceAccount": "string"
      },
      "violationMessage": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Message for response of list execution results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionResults|[[ExecutionResult](#schemaexecutionresult)]|false|none|The versions from the specified publisher.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_ListExecutionsResponse">ListExecutionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistexecutionsresponse"></a>
<a id="schema_ListExecutionsResponse"></a>
<a id="tocSlistexecutionsresponse"></a>
<a id="tocslistexecutionsresponse"></a>

```json
{
  "executions": [
    {
      "endTime": "string",
      "evaluationId": "string",
      "inventoryTime": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "runType": "TYPE_UNSPECIFIED",
      "startTime": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Message for response to listing Executions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executions|[[Execution](#schemaexecution)]|false|none|The list of Execution|
|nextPageToken|string|false|none|A token identifying a page of results the server should return.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListLocationsResponse">ListLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlocationsresponse"></a>
<a id="schema_ListLocationsResponse"></a>
<a id="tocSlistlocationsresponse"></a>
<a id="tocslistlocationsresponse"></a>

```json
{
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for Locations.ListLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[Location](#schemalocation)]|false|none|A list of locations that matches the specified filter in the request.|
|nextPageToken|string|false|none|The standard List next-page token.|

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

<h2 id="tocS_ListRulesResponse">ListRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrulesresponse"></a>
<a id="schema_ListRulesResponse"></a>
<a id="tocSlistrulesresponse"></a>
<a id="tocslistrulesresponse"></a>

```json
{
  "nextPageToken": "string",
  "rules": [
    {
      "description": "string",
      "displayName": "string",
      "errorMessage": "string",
      "name": "string",
      "primaryCategory": "string",
      "remediation": "string",
      "revisionId": "string",
      "secondaryCategory": "string",
      "severity": "string",
      "uri": "string"
    }
  ]
}
```

Mesesage of response of list rules

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token identifying a page of results the server should return.|
|rules|[[Rule](#schemarule)]|false|none|all rules in response|

<h2 id="tocS_ListScannedResourcesResponse">ListScannedResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistscannedresourcesresponse"></a>
<a id="schema_ListScannedResourcesResponse"></a>
<a id="tocSlistscannedresourcesresponse"></a>
<a id="tocslistscannedresourcesresponse"></a>

```json
{
  "nextPageToken": "string",
  "scannedResources": [
    {
      "resource": "string"
    }
  ]
}
```

Message for response to list scanned resources

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|scannedResources|[[ScannedResource](#schemascannedresource)]|false|none|All scanned resources in response|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "locationId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string"
}
```

A resource that represents Google Cloud Platform location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The friendly name for this location, typically a nearby city name. For example, "Tokyo".|
|labels|object|false|none|Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}|
|locationId|string|false|none|The canonical id for this location. For example: `"us-east1"`.|
|metadata|object|false|none|Service-specific metadata. For example the available capacity at the given location.|
|name|string|false|none|Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`|

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

<h2 id="tocS_OperationMetadata">OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadata"></a>
<a id="schema_OperationMetadata"></a>
<a id="tocSoperationmetadata"></a>
<a id="tocsoperationmetadata"></a>

```json
{
  "apiVersion": "string",
  "createTime": "string",
  "endTime": "string",
  "requestedCancellation": true,
  "statusMessage": "string",
  "target": "string",
  "verb": "string"
}
```

Represents the metadata of the long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|read-only|Output only. API version used to start the operation.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|statusMessage|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "name": "string",
  "serviceAccount": "string",
  "type": "string"
}
```

Message represent resource in execution result

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|the name of the resource|
|serviceAccount|string|false|none|the service account accosiate with resource|
|type|string|false|none|the type of reresource|

<h2 id="tocS_ResourceFilter">ResourceFilter</h2>
<!-- backwards compatibility -->
<a id="schemaresourcefilter"></a>
<a id="schema_ResourceFilter"></a>
<a id="tocSresourcefilter"></a>
<a id="tocsresourcefilter"></a>

```json
{
  "gceInstanceFilter": {
    "serviceAccounts": [
      "string"
    ]
  },
  "inclusionLabels": {
    "property1": "string",
    "property2": "string"
  },
  "resourceIdPatterns": [
    "string"
  ],
  "scopes": [
    "string"
  ]
}
```

Message describing resource filters

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gceInstanceFilter|[GceInstanceFilter](#schemagceinstancefilter)|false|none|Filter compute engine resource|
|inclusionLabels|object|false|none|The label used for filter resource|
|resourceIdPatterns|[string]|false|none|The id pattern for filter resource|
|scopes|[string]|false|none|The scopes of evaluation resource|

<h2 id="tocS_ResourceStatus">ResourceStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresourcestatus"></a>
<a id="schema_ResourceStatus"></a>
<a id="tocSresourcestatus"></a>
<a id="tocsresourcestatus"></a>

```json
{
  "rulesNewerVersions": [
    "string"
  ],
  "state": "STATE_UNSPECIFIED"
}
```

Message describing resource status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rulesNewerVersions|[string]|false|none|the new version of rule id if exists|
|state|string|false|none|State of the resource|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|ACTIVE|
|state|DELETING|

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "errorMessage": "string",
  "name": "string",
  "primaryCategory": "string",
  "remediation": "string",
  "revisionId": "string",
  "secondaryCategory": "string",
  "severity": "string",
  "uri": "string"
}
```

Message represent a rule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|descrite rule in plain language|
|displayName|string|false|none|the name display in UI|
|errorMessage|string|false|none|the message template for rule|
|name|string|false|none|rule name|
|primaryCategory|string|false|none|the primary category|
|remediation|string|false|none|the remediation for the rule|
|revisionId|string|false|read-only|Output only. the version of the rule|
|secondaryCategory|string|false|none|the secondary category|
|severity|string|false|none|the severity of the rule|
|uri|string|false|none|the docuement url for the rule|

<h2 id="tocS_RunEvaluationRequest">RunEvaluationRequest</h2>
<!-- backwards compatibility -->
<a id="schemarunevaluationrequest"></a>
<a id="schema_RunEvaluationRequest"></a>
<a id="tocSrunevaluationrequest"></a>
<a id="tocsrunevaluationrequest"></a>

```json
{
  "execution": {
    "endTime": "string",
    "evaluationId": "string",
    "inventoryTime": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "runType": "TYPE_UNSPECIFIED",
    "startTime": "string",
    "state": "STATE_UNSPECIFIED"
  },
  "executionId": "string",
  "requestId": "string"
}
```

Message for creating a Execution

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|execution|[Execution](#schemaexecution)|false|none|Required. The resource being created|
|executionId|string|false|none|Required. Id of the requesting object If auto-generating Id server-side, remove this field and execution_id from the method_signature of Create RPC|
|requestId|string|false|none|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|

<h2 id="tocS_SapDiscovery">SapDiscovery</h2>
<!-- backwards compatibility -->
<a id="schemasapdiscovery"></a>
<a id="schema_SapDiscovery"></a>
<a id="tocSsapdiscovery"></a>
<a id="tocssapdiscovery"></a>

```json
{
  "applicationLayer": {
    "applicationType": "string",
    "databaseType": "string",
    "hostProject": "string",
    "resources": [
      {
        "relatedResources": [
          "string"
        ],
        "resourceKind": "string",
        "resourceState": "RESOURCE_STATE_UNSPECIFIED",
        "resourceType": "RESOURCE_TYPE_UNSPECIFIED",
        "resourceUri": "string",
        "updateTime": "string"
      }
    ],
    "sid": "string"
  },
  "databaseLayer": {
    "applicationType": "string",
    "databaseType": "string",
    "hostProject": "string",
    "resources": [
      {
        "relatedResources": [
          "string"
        ],
        "resourceKind": "string",
        "resourceState": "RESOURCE_STATE_UNSPECIFIED",
        "resourceType": "RESOURCE_TYPE_UNSPECIFIED",
        "resourceUri": "string",
        "updateTime": "string"
      }
    ],
    "sid": "string"
  },
  "metadata": {
    "customerRegion": "string",
    "definedSystem": "string",
    "environmentType": "string",
    "sapProduct": "string"
  },
  "systemId": "string",
  "updateTime": "string"
}
```

The schema of SAP system discovery data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationLayer|[SapDiscoveryComponent](#schemasapdiscoverycomponent)|false|none|An SAP system may run without an application layer.|
|databaseLayer|[SapDiscoveryComponent](#schemasapdiscoverycomponent)|false|none|An SAP System must have a database.|
|metadata|[SapDiscoveryMetadata](#schemasapdiscoverymetadata)|false|none|The metadata for SAP system discovery data.|
|systemId|string|false|none|A combination of database SID, database instance URI and tenant DB name to make a unique identifier per-system.|
|updateTime|string(google-datetime)|false|none|Unix timestamp this system has been updated last.|

<h2 id="tocS_SapDiscoveryComponent">SapDiscoveryComponent</h2>
<!-- backwards compatibility -->
<a id="schemasapdiscoverycomponent"></a>
<a id="schema_SapDiscoveryComponent"></a>
<a id="tocSsapdiscoverycomponent"></a>
<a id="tocssapdiscoverycomponent"></a>

```json
{
  "applicationType": "string",
  "databaseType": "string",
  "hostProject": "string",
  "resources": [
    {
      "relatedResources": [
        "string"
      ],
      "resourceKind": "string",
      "resourceState": "RESOURCE_STATE_UNSPECIFIED",
      "resourceType": "RESOURCE_TYPE_UNSPECIFIED",
      "resourceUri": "string",
      "updateTime": "string"
    }
  ],
  "sid": "string"
}
```

Message describing the system component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationType|string|false|none|The component is a SAP application.|
|databaseType|string|false|none|The component is a SAP database.|
|hostProject|string|false|none|Pantheon Project in which the resources reside.|
|resources|[[SapDiscoveryResource](#schemasapdiscoveryresource)]|false|none|The resources in a component.|
|sid|string|false|none|The sap identifier, used by the SAP software and helps differentiate systems for customers.|

<h2 id="tocS_SapDiscoveryMetadata">SapDiscoveryMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasapdiscoverymetadata"></a>
<a id="schema_SapDiscoveryMetadata"></a>
<a id="tocSsapdiscoverymetadata"></a>
<a id="tocssapdiscoverymetadata"></a>

```json
{
  "customerRegion": "string",
  "definedSystem": "string",
  "environmentType": "string",
  "sapProduct": "string"
}
```

Message describing SAP discovery system metadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerRegion|string|false|none|Customer region string for customer's use. Does not represent GCP region.|
|definedSystem|string|false|none|Customer defined, something like "E-commerce pre prod"|
|environmentType|string|false|none|Should be "prod", "QA", "dev", "staging", etc.|
|sapProduct|string|false|none|This sap product name|

<h2 id="tocS_SapDiscoveryResource">SapDiscoveryResource</h2>
<!-- backwards compatibility -->
<a id="schemasapdiscoveryresource"></a>
<a id="schema_SapDiscoveryResource"></a>
<a id="tocSsapdiscoveryresource"></a>
<a id="tocssapdiscoveryresource"></a>

```json
{
  "relatedResources": [
    "string"
  ],
  "resourceKind": "string",
  "resourceState": "RESOURCE_STATE_UNSPECIFIED",
  "resourceType": "RESOURCE_TYPE_UNSPECIFIED",
  "resourceUri": "string",
  "updateTime": "string"
}
```

Message describing a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relatedResources|[string]|false|none|A list of resource URIs related to this resource.|
|resourceKind|string|false|none|ComputeInstance, ComputeDisk, VPC, Bare Metal server, etc.|
|resourceState|string|false|none|Indicates whether this is a new, updated, or missing resource.|
|resourceType|string|false|none|The type of this resource.|
|resourceUri|string|false|none|URI of the resource, includes project, location, and name.|
|updateTime|string(google-datetime)|false|none|Unix timestamp of when this resource last had its discovery data updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|resourceState|RESOURCE_STATE_UNSPECIFIED|
|resourceState|ADDED|
|resourceState|UPDATED|
|resourceState|REMOVED|
|resourceState|REPLACED|
|resourceState|MISSING|
|resourceType|RESOURCE_TYPE_UNSPECIFIED|
|resourceType|COMPUTE|
|resourceType|STORAGE|
|resourceType|NETWORK|

<h2 id="tocS_SapValidation">SapValidation</h2>
<!-- backwards compatibility -->
<a id="schemasapvalidation"></a>
<a id="schema_SapValidation"></a>
<a id="tocSsapvalidation"></a>
<a id="tocssapvalidation"></a>

```json
{
  "validationDetails": [
    {
      "details": {
        "property1": "string",
        "property2": "string"
      },
      "sapValidationType": "SAP_VALIDATION_TYPE_UNSPECIFIED"
    }
  ]
}
```

A presentation of SAP workload insight. The schema of SAP workloads validation related data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validationDetails|[[SapValidationValidationDetail](#schemasapvalidationvalidationdetail)]|false|none|A list of SAP validation metrics data.|

<h2 id="tocS_SapValidationValidationDetail">SapValidationValidationDetail</h2>
<!-- backwards compatibility -->
<a id="schemasapvalidationvalidationdetail"></a>
<a id="schema_SapValidationValidationDetail"></a>
<a id="tocSsapvalidationvalidationdetail"></a>
<a id="tocssapvalidationvalidationdetail"></a>

```json
{
  "details": {
    "property1": "string",
    "property2": "string"
  },
  "sapValidationType": "SAP_VALIDATION_TYPE_UNSPECIFIED"
}
```

Message describing the SAP validation metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|The pairs of metrics data: field name & field value.|
|sapValidationType|string|false|none|The SAP system that the validation data is from.|

#### Enumerated Values

|Property|Value|
|---|---|
|sapValidationType|SAP_VALIDATION_TYPE_UNSPECIFIED|
|sapValidationType|SYSTEM|
|sapValidationType|COROSYNC|
|sapValidationType|PACEMAKER|
|sapValidationType|HANA|
|sapValidationType|NETWEAVER|

<h2 id="tocS_ScannedResource">ScannedResource</h2>
<!-- backwards compatibility -->
<a id="schemascannedresource"></a>
<a id="schema_ScannedResource"></a>
<a id="tocSscannedresource"></a>
<a id="tocsscannedresource"></a>

```json
{
  "resource": "string"
}
```

Message of scanned resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resource|string|false|none|resource name|

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

<h2 id="tocS_ViolationDetails">ViolationDetails</h2>
<!-- backwards compatibility -->
<a id="schemaviolationdetails"></a>
<a id="schema_ViolationDetails"></a>
<a id="tocSviolationdetails"></a>
<a id="tocsviolationdetails"></a>

```json
{
  "asset": "string",
  "observed": {
    "property1": "string",
    "property2": "string"
  },
  "serviceAccount": "string"
}
```

Message describing the violdation in execution result

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|string|false|none|the name of asset|
|observed|object|false|none|observed|
|serviceAccount|string|false|none|the service account associate with resource|

<h2 id="tocS_WriteInsightRequest">WriteInsightRequest</h2>
<!-- backwards compatibility -->
<a id="schemawriteinsightrequest"></a>
<a id="schema_WriteInsightRequest"></a>
<a id="tocSwriteinsightrequest"></a>
<a id="tocswriteinsightrequest"></a>

```json
{
  "insight": {
    "sapDiscovery": {
      "applicationLayer": {
        "applicationType": "string",
        "databaseType": "string",
        "hostProject": "string",
        "resources": [
          {
            "relatedResources": [
              "string"
            ],
            "resourceKind": "string",
            "resourceState": "RESOURCE_STATE_UNSPECIFIED",
            "resourceType": "RESOURCE_TYPE_UNSPECIFIED",
            "resourceUri": "string",
            "updateTime": "string"
          }
        ],
        "sid": "string"
      },
      "databaseLayer": {
        "applicationType": "string",
        "databaseType": "string",
        "hostProject": "string",
        "resources": [
          {
            "relatedResources": [
              "string"
            ],
            "resourceKind": "string",
            "resourceState": "RESOURCE_STATE_UNSPECIFIED",
            "resourceType": "RESOURCE_TYPE_UNSPECIFIED",
            "resourceUri": "string",
            "updateTime": "string"
          }
        ],
        "sid": "string"
      },
      "metadata": {
        "customerRegion": "string",
        "definedSystem": "string",
        "environmentType": "string",
        "sapProduct": "string"
      },
      "systemId": "string",
      "updateTime": "string"
    },
    "sapValidation": {
      "validationDetails": [
        {
          "details": {
            "property1": "string",
            "property2": "string"
          },
          "sapValidationType": "SAP_VALIDATION_TYPE_UNSPECIFIED"
        }
      ]
    },
    "sentTime": "string"
  },
  "requestId": "string"
}
```

Request for sending the data insights.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|insight|[Insight](#schemainsight)|false|none|Required. The metrics data details.|
|requestId|string|false|none|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|

<h2 id="tocS_WriteInsightResponse">WriteInsightResponse</h2>
<!-- backwards compatibility -->
<a id="schemawriteinsightresponse"></a>
<a id="schema_WriteInsightResponse"></a>
<a id="tocSwriteinsightresponse"></a>
<a id="tocswriteinsightresponse"></a>

```json
{}
```

The response for write insights request.
