<h1 id="cloud-workstations-api">Cloud Workstations API v1beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://workstations.googleapis.com/">https://workstations.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/workstations">External documentation</a>

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

<h1 id="cloud-workstations-api-projects">projects</h1>

## workstations.projects.locations.workstationClusters.workstationConfigs.workstations.get

<a id="opIdworkstations.projects.locations.workstationClusters.workstationConfigs.workstations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{name}`

Returns the requested workstation.

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the requested resource.|
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
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "string",
  "deleteTime": "string",
  "displayName": "string",
  "env": {
    "property1": "string",
    "property2": "string"
  },
  "etag": "string",
  "host": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "reconciling": true,
  "state": "STATE_UNSPECIFIED",
  "uid": "string",
  "updateTime": "string"
}
```

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Workstation](#schemaworkstation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workstations.projects.locations.workstationClusters.workstationConfigs.workstations.delete

<a id="opIdworkstations.projects.locations.workstationClusters.workstationConfigs.workstations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta/{name}`

Deletes the specified workstation.

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the workstation to delete.|
|etag|query|string|false|If set, the request will be rejected if the latest version of the workstation on the server does not have this etag.|
|validateOnly|query|boolean|false|If set, validate the request and preview the review, but do not actually apply it.|
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

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workstations.projects.locations.workstationClusters.workstationConfigs.workstations.patch

<a id="opIdworkstations.projects.locations.workstationClusters.workstationConfigs.workstations.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "displayName": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "etag": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string"
  }'
```

`PATCH /v1beta/{name}`

Updates an existing workstation.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "displayName": "string",
  "env": {
    "property1": "string",
    "property2": "string"
  },
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Full name of this resource.|
|allowMissing|query|boolean|false|If set, and the config is not found, a new config will be created. In this situation, update_mask is ignored.|
|updateMask|query|string|false|Required. Mask specifying which fields in the config should be updated.|
|validateOnly|query|boolean|false|If set, validate the request and preview the review, but do not actually apply it.|
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
|body|body|[Workstation](#schemaworkstation)|false|none|
|» annotations|body|object|false|Client-specified annotations.|
|» » **additionalProperties**|body|string|false|none|
|» displayName|body|string|false|Human-readable name for this resource.|
|» env|body|object|false|Environment variables passed to the workstation container.|
|» » **additionalProperties**|body|string|false|none|
|» etag|body|string|false|Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.|
|» labels|body|object|false|Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Full name of this resource.|

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

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workstations.projects.locations.operations.list

<a id="opIdworkstations.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="workstationsprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="workstationsprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workstations.projects.locations.operations.cancel

<a id="opIdworkstations.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="workstationsprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="workstationsprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workstations.projects.locations.workstationClusters.workstationConfigs.workstations.start

<a id="opIdworkstations.projects.locations.workstationClusters.workstationConfigs.workstations.start"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "validateOnly": true
  }'
```

`POST /v1beta/{name}:start`

Starts running a workstation so that users can connect to it.

> Body parameter

```json
{
  "etag": "string",
  "validateOnly": true
}
```

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsstart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the workstation to start.|
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
|body|body|[StartWorkstationRequest](#schemastartworkstationrequest)|false|none|
|» etag|body|string|false|If set, the request will be rejected if the latest version of the workstation on the server does not have this etag.|
|» validateOnly|body|boolean|false|If set, validate the request and preview the review, but do not actually apply it.|

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

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workstations.projects.locations.workstationClusters.workstationConfigs.workstations.stop

<a id="opIdworkstations.projects.locations.workstationClusters.workstationConfigs.workstations.stop"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "validateOnly": true
  }'
```

`POST /v1beta/{name}:stop`

Stops running a workstation, reducing costs.

> Body parameter

```json
{
  "etag": "string",
  "validateOnly": true
}
```

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsstop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the workstation to stop.|
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
|body|body|[StopWorkstationRequest](#schemastopworkstationrequest)|false|none|
|» etag|body|string|false|If set, the request will be rejected if the latest version of the workstation on the server does not have this etag.|
|» validateOnly|body|boolean|false|If set, validate the request and preview the review, but do not actually apply it.|

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

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workstations.projects.locations.workstationClusters.list

<a id="opIdworkstations.projects.locations.workstationClusters.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/workstationClusters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/workstationClusters`

Returns all workstation clusters in the specified location.

<h3 id="workstationsprojectslocationsworkstationclusterslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent resource name.|
|pageSize|query|integer|false|Maximum number of items to return.|
|pageToken|query|string|false|next_page_token value returned from a previous List request, if any.|
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
  "unreachable": [
    "string"
  ],
  "workstationClusters": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "conditions": [
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
      ],
      "controlPlaneIp": "string",
      "createTime": "string",
      "degraded": true,
      "deleteTime": "string",
      "displayName": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "network": "string",
      "privateClusterConfig": {
        "allowedProjects": [
          "string"
        ],
        "clusterHostname": "string",
        "enablePrivateEndpoint": true,
        "serviceAttachmentUri": "string"
      },
      "reconciling": true,
      "subnetwork": "string",
      "uid": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="workstationsprojectslocationsworkstationclusterslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListWorkstationClustersResponse](#schemalistworkstationclustersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workstations.projects.locations.workstationClusters.create

<a id="opIdworkstations.projects.locations.workstationClusters.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/workstationClusters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "displayName": "string",
    "etag": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "network": "string",
    "privateClusterConfig": {
      "allowedProjects": [
        "string"
      ],
      "enablePrivateEndpoint": true
    },
    "subnetwork": "string"
  }'
```

`POST /v1beta/{parent}/workstationClusters`

Creates a new workstation cluster.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "displayName": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "network": "string",
  "privateClusterConfig": {
    "allowedProjects": [
      "string"
    ],
    "enablePrivateEndpoint": true
  },
  "subnetwork": "string"
}
```

<h3 id="workstationsprojectslocationsworkstationclusterscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent resource name.|
|validateOnly|query|boolean|false|If set, validate the request and preview the review, but do not actually apply it.|
|workstationClusterId|query|string|false|Required. ID to use for the workstation cluster.|
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
|body|body|[WorkstationCluster](#schemaworkstationcluster)|false|none|
|» annotations|body|object|false|Client-specified annotations.|
|» » **additionalProperties**|body|string|false|none|
|» displayName|body|string|false|Human-readable name for this resource.|
|» etag|body|string|false|Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.|
|» labels|body|object|false|Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Full name of this resource.|
|» network|body|string|false|Immutable. Name of the Compute Engine network in which instances associated with this cluster will be created.|
|» privateClusterConfig|body|[PrivateClusterConfig](#schemaprivateclusterconfig)|false|Configuration for private cluster.|
|» subnetwork|body|string|false|Immutable. Name of the Compute Engine subnetwork in which instances associated with this cluster will be created. Must be part of the subnetwork specified for this cluster.|

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

<h3 id="workstationsprojectslocationsworkstationclusterscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workstations.projects.locations.workstationClusters.workstationConfigs.list

<a id="opIdworkstations.projects.locations.workstationClusters.workstationConfigs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/workstationConfigs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/workstationConfigs`

Returns all workstation configurations in the specified cluster.

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent resource name.|
|pageSize|query|integer|false|Maximum number of items to return.|
|pageToken|query|string|false|next_page_token value returned from a previous List request, if any.|
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
  "unreachable": [
    "string"
  ],
  "workstationConfigs": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "conditions": [
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
      ],
      "container": {
        "args": [
          "string"
        ],
        "command": [
          "string"
        ],
        "env": {
          "property1": "string",
          "property2": "string"
        },
        "image": "string",
        "runAsUser": 0,
        "workingDir": "string"
      },
      "createTime": "string",
      "degraded": true,
      "deleteTime": "string",
      "displayName": "string",
      "enableAuditAgent": true,
      "encryptionKey": {
        "kmsKey": "string",
        "kmsKeyServiceAccount": "string"
      },
      "etag": "string",
      "host": {
        "gceInstance": {
          "bootDiskSizeGb": 0,
          "confidentialInstanceConfig": {
            "enableConfidentialCompute": true
          },
          "disablePublicIpAddresses": true,
          "machineType": "string",
          "poolSize": 0,
          "serviceAccount": "string",
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true,
            "enableVtpm": true
          },
          "tags": [
            "string"
          ]
        }
      },
      "idleTimeout": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "persistentDirectories": [
        {
          "gcePd": {
            "diskType": "string",
            "fsType": "string",
            "reclaimPolicy": "RECLAIM_POLICY_UNSPECIFIED",
            "sizeGb": 0,
            "sourceSnapshot": "string"
          },
          "mountPath": "string"
        }
      ],
      "reconciling": true,
      "runningTimeout": "string",
      "uid": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListWorkstationConfigsResponse](#schemalistworkstationconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workstations.projects.locations.workstationClusters.workstationConfigs.create

<a id="opIdworkstations.projects.locations.workstationClusters.workstationConfigs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/workstationConfigs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "container": {
      "args": [
        "string"
      ],
      "command": [
        "string"
      ],
      "env": {
        "property1": "string",
        "property2": "string"
      },
      "image": "string",
      "runAsUser": 0,
      "workingDir": "string"
    },
    "displayName": "string",
    "enableAuditAgent": true,
    "encryptionKey": {
      "kmsKey": "string",
      "kmsKeyServiceAccount": "string"
    },
    "etag": "string",
    "host": {
      "gceInstance": {
        "bootDiskSizeGb": 0,
        "confidentialInstanceConfig": {
          "enableConfidentialCompute": true
        },
        "disablePublicIpAddresses": true,
        "machineType": "string",
        "poolSize": 0,
        "serviceAccount": "string",
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true,
          "enableVtpm": true
        },
        "tags": [
          "string"
        ]
      }
    },
    "idleTimeout": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "persistentDirectories": [
      {
        "gcePd": {
          "diskType": "string",
          "fsType": "string",
          "reclaimPolicy": "RECLAIM_POLICY_UNSPECIFIED",
          "sizeGb": 0,
          "sourceSnapshot": "string"
        },
        "mountPath": "string"
      }
    ],
    "runningTimeout": "string"
  }'
```

`POST /v1beta/{parent}/workstationConfigs`

Creates a new workstation configuration.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "container": {
    "args": [
      "string"
    ],
    "command": [
      "string"
    ],
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "image": "string",
    "runAsUser": 0,
    "workingDir": "string"
  },
  "displayName": "string",
  "enableAuditAgent": true,
  "encryptionKey": {
    "kmsKey": "string",
    "kmsKeyServiceAccount": "string"
  },
  "etag": "string",
  "host": {
    "gceInstance": {
      "bootDiskSizeGb": 0,
      "confidentialInstanceConfig": {
        "enableConfidentialCompute": true
      },
      "disablePublicIpAddresses": true,
      "machineType": "string",
      "poolSize": 0,
      "serviceAccount": "string",
      "shieldedInstanceConfig": {
        "enableIntegrityMonitoring": true,
        "enableSecureBoot": true,
        "enableVtpm": true
      },
      "tags": [
        "string"
      ]
    }
  },
  "idleTimeout": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "persistentDirectories": [
    {
      "gcePd": {
        "diskType": "string",
        "fsType": "string",
        "reclaimPolicy": "RECLAIM_POLICY_UNSPECIFIED",
        "sizeGb": 0,
        "sourceSnapshot": "string"
      },
      "mountPath": "string"
    }
  ],
  "runningTimeout": "string"
}
```

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent resource name.|
|validateOnly|query|boolean|false|If set, validate the request and preview the review, but do not actually apply it.|
|workstationConfigId|query|string|false|Required. ID to use for the config.|
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
|body|body|[WorkstationConfig](#schemaworkstationconfig)|false|none|
|» annotations|body|object|false|Client-specified annotations.|
|» » **additionalProperties**|body|string|false|none|
|» container|body|[Container](#schemacontainer)|false|Container that will be run for each workstation using this configuration when that workstation is started.|
|» displayName|body|string|false|Human-readable name for this resource.|
|» enableAuditAgent|body|boolean|false|Whether to enable linux auditd logging on the workstation. When enabled, a service account must also be specified that has logging.buckets.write permission on the project. Operating system audit logging is distinct from [Cloud Audit Logs](https://cloud.google.com/workstations/docs/audit-logging).|
|» encryptionKey|body|[CustomerEncryptionKey](#schemacustomerencryptionkey)|false|Immutable. Encrypts resources of this workstation configuration using a customer-managed encryption key. If specified, the boot disk of the Compute Engine instance and the persistent disk are encrypted using this encryption key. If this field is not set, the disks are encrypted using a generated key. Customer-managed encryption keys do not protect disk metadata. If the customer-managed encryption key is rotated, when the workstation instance is stopped, the system attempts to recreate the persistent disk with the new version of the key. Be sure to keep older versions of the key until the persistent disk is recreated. Otherwise, data on the persistent disk will be lost. If the encryption key is revoked, the workstation session will automatically be stopped within 7 hours. Immutable after workstation config is created.|
|» etag|body|string|false|Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.|
|» host|body|[Host](#schemahost)|false|Runtime host for the workstation.|
|» idleTimeout|body|string(google-duration)|false|How long to wait before automatically stopping an instance that hasn't received any user traffic. A value of 0 indicates that this instance should never time out due to idleness. Defaults to 20 minutes.|
|» labels|body|object|false|Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Full name of this resource.|
|» persistentDirectories|body|[[PersistentDirectory](#schemapersistentdirectory)]|false|Directories to persist across workstation sessions.|
|» runningTimeout|body|string(google-duration)|false|How long to wait before automatically stopping a workstation after it started. A value of 0 indicates that workstations using this configuration should never time out. Must be greater than 0 and less than 24 hours if encryption_key is set. Defaults to 12 hours.|

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

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workstations.projects.locations.workstationClusters.workstationConfigs.listUsable

<a id="opIdworkstations.projects.locations.workstationClusters.workstationConfigs.listUsable"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/workstationConfigs:listUsable \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/workstationConfigs:listUsable`

Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigslistusable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent resource name.|
|pageSize|query|integer|false|Maximum number of items to return.|
|pageToken|query|string|false|next_page_token value returned from a previous List request, if any.|
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
  "unreachable": [
    "string"
  ],
  "workstationConfigs": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "conditions": [
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
      ],
      "container": {
        "args": [
          "string"
        ],
        "command": [
          "string"
        ],
        "env": {
          "property1": "string",
          "property2": "string"
        },
        "image": "string",
        "runAsUser": 0,
        "workingDir": "string"
      },
      "createTime": "string",
      "degraded": true,
      "deleteTime": "string",
      "displayName": "string",
      "enableAuditAgent": true,
      "encryptionKey": {
        "kmsKey": "string",
        "kmsKeyServiceAccount": "string"
      },
      "etag": "string",
      "host": {
        "gceInstance": {
          "bootDiskSizeGb": 0,
          "confidentialInstanceConfig": {
            "enableConfidentialCompute": true
          },
          "disablePublicIpAddresses": true,
          "machineType": "string",
          "poolSize": 0,
          "serviceAccount": "string",
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true,
            "enableVtpm": true
          },
          "tags": [
            "string"
          ]
        }
      },
      "idleTimeout": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "persistentDirectories": [
        {
          "gcePd": {
            "diskType": "string",
            "fsType": "string",
            "reclaimPolicy": "RECLAIM_POLICY_UNSPECIFIED",
            "sizeGb": 0,
            "sourceSnapshot": "string"
          },
          "mountPath": "string"
        }
      ],
      "reconciling": true,
      "runningTimeout": "string",
      "uid": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigslistusable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListUsableWorkstationConfigsResponse](#schemalistusableworkstationconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workstations.projects.locations.workstationClusters.workstationConfigs.workstations.list

<a id="opIdworkstations.projects.locations.workstationClusters.workstationConfigs.workstations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/workstations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/workstations`

Returns all Workstations using the specified config.

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent resource name.|
|pageSize|query|integer|false|Maximum number of items to return.|
|pageToken|query|string|false|next_page_token value returned from a previous List request, if any.|
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
  "unreachable": [
    "string"
  ],
  "workstations": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "string",
      "deleteTime": "string",
      "displayName": "string",
      "env": {
        "property1": "string",
        "property2": "string"
      },
      "etag": "string",
      "host": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "reconciling": true,
      "state": "STATE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListWorkstationsResponse](#schemalistworkstationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workstations.projects.locations.workstationClusters.workstationConfigs.workstations.create

<a id="opIdworkstations.projects.locations.workstationClusters.workstationConfigs.workstations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/workstations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "displayName": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "etag": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string"
  }'
```

`POST /v1beta/{parent}/workstations`

Creates a new workstation.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "displayName": "string",
  "env": {
    "property1": "string",
    "property2": "string"
  },
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent resource name.|
|validateOnly|query|boolean|false|If set, validate the request and preview the review, but do not actually apply it.|
|workstationId|query|string|false|Required. ID to use for the workstation.|
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
|body|body|[Workstation](#schemaworkstation)|false|none|
|» annotations|body|object|false|Client-specified annotations.|
|» » **additionalProperties**|body|string|false|none|
|» displayName|body|string|false|Human-readable name for this resource.|
|» env|body|object|false|Environment variables passed to the workstation container.|
|» » **additionalProperties**|body|string|false|none|
|» etag|body|string|false|Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.|
|» labels|body|object|false|Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Full name of this resource.|

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

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workstations.projects.locations.workstationClusters.workstationConfigs.workstations.listUsable

<a id="opIdworkstations.projects.locations.workstationClusters.workstationConfigs.workstations.listUsable"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/workstations:listUsable \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/workstations:listUsable`

Returns all Workstations using the specified config on which the caller has the "workstations.workstations.use" permission.

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationslistusable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent resource name.|
|pageSize|query|integer|false|Maximum number of items to return.|
|pageToken|query|string|false|next_page_token value returned from a previous List request, if any.|
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
  "unreachable": [
    "string"
  ],
  "workstations": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "string",
      "deleteTime": "string",
      "displayName": "string",
      "env": {
        "property1": "string",
        "property2": "string"
      },
      "etag": "string",
      "host": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "reconciling": true,
      "state": "STATE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationslistusable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListUsableWorkstationsResponse](#schemalistusableworkstationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workstations.projects.locations.workstationClusters.workstationConfigs.workstations.getIamPolicy

<a id="opIdworkstations.projects.locations.workstationClusters.workstationConfigs.workstations.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
|options.requestedPolicyVersion|query|integer|false|Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
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
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
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

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workstations.projects.locations.workstationClusters.workstationConfigs.workstations.setIamPolicy

<a id="opIdworkstations.projects.locations.workstationClusters.workstationConfigs.workstations.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
      "auditConfigs": [
        {
          "auditLogConfigs": [
            {
              "exemptedMembers": [
                "string"
              ],
              "logType": "LOG_TYPE_UNSPECIFIED"
            }
          ],
          "service": "string"
        }
      ],
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
    },
    "updateMask": "string"
  }'
```

`POST /v1beta/{resource}:setIamPolicy`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

> Body parameter

```json
{
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
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
  },
  "updateMask": "string"
}
```

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationssetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|» updateMask|body|string(google-fieldmask)|false|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

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
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
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

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workstations.projects.locations.workstationClusters.workstationConfigs.workstations.testIamPermissions

<a id="opIdworkstations.projects.locations.workstationClusters.workstationConfigs.workstations.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:testIamPermissions \
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

`POST /v1beta/{resource}:testIamPermissions`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationstestiampermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|» permissions|body|[string]|false|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

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

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## workstations.projects.locations.workstationClusters.workstationConfigs.workstations.generateAccessToken

<a id="opIdworkstations.projects.locations.workstationClusters.workstationConfigs.workstations.generateAccessToken"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:generateAccessToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "expireTime": "string",
    "ttl": "string"
  }'
```

`POST /v1beta/{workstation}:generateAccessToken`

Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.

> Body parameter

```json
{
  "expireTime": "string",
  "ttl": "string"
}
```

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsgenerateaccesstoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workstation|path|string|true|Required. Name of the workstation for which the access token should be generated.|
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
|body|body|[GenerateAccessTokenRequest](#schemagenerateaccesstokenrequest)|false|none|
|» expireTime|body|string(google-datetime)|false|Desired expiration time of the access token. This value must be at most 24 hours in the future. If a value is not specified, the token's expiration time will be set to a default value of 1 hour in the future.|
|» ttl|body|string(google-duration)|false|Desired lifetime duration of the access token. This value must be at most 24 hours. If a value is not specified, the token's lifetime will be set to a default value of 1 hour.|

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
  "accessToken": "string",
  "expireTime": "string"
}
```

<h3 id="workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsgenerateaccesstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GenerateAccessTokenResponse](#schemagenerateaccesstokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AuditConfig">AuditConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauditconfig"></a>
<a id="schema_AuditConfig"></a>
<a id="tocSauditconfig"></a>
<a id="tocsauditconfig"></a>

```json
{
  "auditLogConfigs": [
    {
      "exemptedMembers": [
        "string"
      ],
      "logType": "LOG_TYPE_UNSPECIFIED"
    }
  ],
  "service": "string"
}
```

Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditLogConfigs|[[AuditLogConfig](#schemaauditlogconfig)]|false|none|The configuration for logging of each type of permission.|
|service|string|false|none|Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.|

<h2 id="tocS_AuditLogConfig">AuditLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogconfig"></a>
<a id="schema_AuditLogConfig"></a>
<a id="tocSauditlogconfig"></a>
<a id="tocsauditlogconfig"></a>

```json
{
  "exemptedMembers": [
    "string"
  ],
  "logType": "LOG_TYPE_UNSPECIFIED"
}
```

Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exemptedMembers|[string]|false|none|Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.|
|logType|string|false|none|The log type that this config enables.|

#### Enumerated Values

|Property|Value|
|---|---|
|logType|LOG_TYPE_UNSPECIFIED|
|logType|ADMIN_READ|
|logType|DATA_WRITE|
|logType|DATA_READ|

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

<h2 id="tocS_Container">Container</h2>
<!-- backwards compatibility -->
<a id="schemacontainer"></a>
<a id="schema_Container"></a>
<a id="tocScontainer"></a>
<a id="tocscontainer"></a>

```json
{
  "args": [
    "string"
  ],
  "command": [
    "string"
  ],
  "env": {
    "property1": "string",
    "property2": "string"
  },
  "image": "string",
  "runAsUser": 0,
  "workingDir": "string"
}
```

A Docker container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|args|[string]|false|none|Arguments passed to the entrypoint.|
|command|[string]|false|none|If set, overrides the default ENTRYPOINT specified by the image.|
|env|object|false|none|Environment variables passed to the container.|
|image|string|false|none|Docker image defining the container. This image must be accessible by the config's service account.|
|runAsUser|integer(int32)|false|none|If set, overrides the USER specified in the image with the given uid.|
|workingDir|string|false|none|If set, overrides the default DIR specified by the image.|

<h2 id="tocS_CustomerEncryptionKey">CustomerEncryptionKey</h2>
<!-- backwards compatibility -->
<a id="schemacustomerencryptionkey"></a>
<a id="schema_CustomerEncryptionKey"></a>
<a id="tocScustomerencryptionkey"></a>
<a id="tocscustomerencryptionkey"></a>

```json
{
  "kmsKey": "string",
  "kmsKeyServiceAccount": "string"
}
```

A customer-managed encryption key for the Compute Engine resources of this workstation configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsKey|string|false|none|Immutable. The name of the Google Cloud KMS encryption key. For example, `projects/PROJECT_ID/locations/REGION/keyRings/KEY_RING/cryptoKeys/KEY_NAME`.|
|kmsKeyServiceAccount|string|false|none|Immutable. The service account to use with the specified KMS key. We recommend that you use a separate service account and follow KMS best practices. For more information, see [Separation of duties](https://cloud.google.com/kms/docs/separation-of-duties) and `gcloud kms keys add-iam-policy-binding` [`--member`](https://cloud.google.com/sdk/gcloud/reference/kms/keys/add-iam-policy-binding#--member).|

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

<h2 id="tocS_GceConfidentialInstanceConfig">GceConfidentialInstanceConfig</h2>
<!-- backwards compatibility -->
<a id="schemagceconfidentialinstanceconfig"></a>
<a id="schema_GceConfidentialInstanceConfig"></a>
<a id="tocSgceconfidentialinstanceconfig"></a>
<a id="tocsgceconfidentialinstanceconfig"></a>

```json
{
  "enableConfidentialCompute": true
}
```

A set of Compute Engine Confidential VM instance options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableConfidentialCompute|boolean|false|none|Whether the instance has confidential compute enabled.|

<h2 id="tocS_GceInstance">GceInstance</h2>
<!-- backwards compatibility -->
<a id="schemagceinstance"></a>
<a id="schema_GceInstance"></a>
<a id="tocSgceinstance"></a>
<a id="tocsgceinstance"></a>

```json
{
  "bootDiskSizeGb": 0,
  "confidentialInstanceConfig": {
    "enableConfidentialCompute": true
  },
  "disablePublicIpAddresses": true,
  "machineType": "string",
  "poolSize": 0,
  "serviceAccount": "string",
  "shieldedInstanceConfig": {
    "enableIntegrityMonitoring": true,
    "enableSecureBoot": true,
    "enableVtpm": true
  },
  "tags": [
    "string"
  ]
}
```

A runtime using a Compute Engine instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bootDiskSizeGb|integer(int32)|false|none|Size of the boot disk in GB. Defaults to 50.|
|confidentialInstanceConfig|[GceConfidentialInstanceConfig](#schemagceconfidentialinstanceconfig)|false|none|A set of Compute Engine Confidential VM instance options.|
|disablePublicIpAddresses|boolean|false|none|Whether instances have no public IP address.|
|machineType|string|false|none|The name of a Compute Engine machine type.|
|poolSize|integer(int32)|false|none|Number of instances to pool for faster workstation starup.|
|serviceAccount|string|false|none|Email address of the service account that will be used on VM instances used to support this config. If not set, VMs will run with a Google-managed service account. This service account must have permission to pull the specified container image, otherwise the image must be publicly accessible.|
|shieldedInstanceConfig|[GceShieldedInstanceConfig](#schemagceshieldedinstanceconfig)|false|none|A set of Compute Engine Shielded instance options.|
|tags|[string]|false|none|Network tags to add to the Compute Engine machines backing the Workstations.|

<h2 id="tocS_GceRegionalPersistentDisk">GceRegionalPersistentDisk</h2>
<!-- backwards compatibility -->
<a id="schemagceregionalpersistentdisk"></a>
<a id="schema_GceRegionalPersistentDisk"></a>
<a id="tocSgceregionalpersistentdisk"></a>
<a id="tocsgceregionalpersistentdisk"></a>

```json
{
  "diskType": "string",
  "fsType": "string",
  "reclaimPolicy": "RECLAIM_POLICY_UNSPECIFIED",
  "sizeGb": 0,
  "sourceSnapshot": "string"
}
```

A PersistentDirectory backed by a Compute Engine regional persistent disk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskType|string|false|none|Type of the disk to use. Defaults to pd-standard.|
|fsType|string|false|none|Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if source_snapshot is set. Defaults to ext4.|
|reclaimPolicy|string|false|none|What should happen to the disk after the workstation is deleted. Defaults to DELETE.|
|sizeGb|integer(int32)|false|none|Size of the disk in GB. Must be empty if source_snapshot is set. Defaults to 200.|
|sourceSnapshot|string|false|none|Name of the snapshot to use as the source for the disk. If set, size_gb and fs_type must be empty.|

#### Enumerated Values

|Property|Value|
|---|---|
|reclaimPolicy|RECLAIM_POLICY_UNSPECIFIED|
|reclaimPolicy|DELETE|
|reclaimPolicy|RETAIN|

<h2 id="tocS_GceShieldedInstanceConfig">GceShieldedInstanceConfig</h2>
<!-- backwards compatibility -->
<a id="schemagceshieldedinstanceconfig"></a>
<a id="schema_GceShieldedInstanceConfig"></a>
<a id="tocSgceshieldedinstanceconfig"></a>
<a id="tocsgceshieldedinstanceconfig"></a>

```json
{
  "enableIntegrityMonitoring": true,
  "enableSecureBoot": true,
  "enableVtpm": true
}
```

A set of Compute Engine Shielded instance options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableIntegrityMonitoring|boolean|false|none|Whether the instance has integrity monitoring enabled.|
|enableSecureBoot|boolean|false|none|Whether the instance has Secure Boot enabled.|
|enableVtpm|boolean|false|none|Whether the instance has the vTPM enabled.|

<h2 id="tocS_GenerateAccessTokenRequest">GenerateAccessTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagenerateaccesstokenrequest"></a>
<a id="schema_GenerateAccessTokenRequest"></a>
<a id="tocSgenerateaccesstokenrequest"></a>
<a id="tocsgenerateaccesstokenrequest"></a>

```json
{
  "expireTime": "string",
  "ttl": "string"
}
```

Request message for GenerateAccessToken.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expireTime|string(google-datetime)|false|none|Desired expiration time of the access token. This value must be at most 24 hours in the future. If a value is not specified, the token's expiration time will be set to a default value of 1 hour in the future.|
|ttl|string(google-duration)|false|none|Desired lifetime duration of the access token. This value must be at most 24 hours. If a value is not specified, the token's lifetime will be set to a default value of 1 hour.|

<h2 id="tocS_GenerateAccessTokenResponse">GenerateAccessTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenerateaccesstokenresponse"></a>
<a id="schema_GenerateAccessTokenResponse"></a>
<a id="tocSgenerateaccesstokenresponse"></a>
<a id="tocsgenerateaccesstokenresponse"></a>

```json
{
  "accessToken": "string",
  "expireTime": "string"
}
```

Response message for GenerateAccessToken.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|string|false|none|The generated bearer access token. To use this token, include it in an Authorization header of an HTTP request sent to the associated workstation's hostname, for example, `Authorization: Bearer `.|
|expireTime|string(google-datetime)|false|none|Time at which the generated token will expire.|

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

<h2 id="tocS_Host">Host</h2>
<!-- backwards compatibility -->
<a id="schemahost"></a>
<a id="schema_Host"></a>
<a id="tocShost"></a>
<a id="tocshost"></a>

```json
{
  "gceInstance": {
    "bootDiskSizeGb": 0,
    "confidentialInstanceConfig": {
      "enableConfidentialCompute": true
    },
    "disablePublicIpAddresses": true,
    "machineType": "string",
    "poolSize": 0,
    "serviceAccount": "string",
    "shieldedInstanceConfig": {
      "enableIntegrityMonitoring": true,
      "enableSecureBoot": true,
      "enableVtpm": true
    },
    "tags": [
      "string"
    ]
  }
}
```

Runtime host for a workstation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gceInstance|[GceInstance](#schemagceinstance)|false|none|Specifies a Compute Engine instance as the host.|

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

<h2 id="tocS_ListUsableWorkstationConfigsResponse">ListUsableWorkstationConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusableworkstationconfigsresponse"></a>
<a id="schema_ListUsableWorkstationConfigsResponse"></a>
<a id="tocSlistusableworkstationconfigsresponse"></a>
<a id="tocslistusableworkstationconfigsresponse"></a>

```json
{
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ],
  "workstationConfigs": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "conditions": [
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
      ],
      "container": {
        "args": [
          "string"
        ],
        "command": [
          "string"
        ],
        "env": {
          "property1": "string",
          "property2": "string"
        },
        "image": "string",
        "runAsUser": 0,
        "workingDir": "string"
      },
      "createTime": "string",
      "degraded": true,
      "deleteTime": "string",
      "displayName": "string",
      "enableAuditAgent": true,
      "encryptionKey": {
        "kmsKey": "string",
        "kmsKeyServiceAccount": "string"
      },
      "etag": "string",
      "host": {
        "gceInstance": {
          "bootDiskSizeGb": 0,
          "confidentialInstanceConfig": {
            "enableConfidentialCompute": true
          },
          "disablePublicIpAddresses": true,
          "machineType": "string",
          "poolSize": 0,
          "serviceAccount": "string",
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true,
            "enableVtpm": true
          },
          "tags": [
            "string"
          ]
        }
      },
      "idleTimeout": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "persistentDirectories": [
        {
          "gcePd": {
            "diskType": "string",
            "fsType": "string",
            "reclaimPolicy": "RECLAIM_POLICY_UNSPECIFIED",
            "sizeGb": 0,
            "sourceSnapshot": "string"
          },
          "mountPath": "string"
        }
      ],
      "reconciling": true,
      "runningTimeout": "string",
      "uid": "string",
      "updateTime": "string"
    }
  ]
}
```

Response message for ListUsableWorkstationConfigs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|unreachable|[string]|false|none|Unreachable resources.|
|workstationConfigs|[[WorkstationConfig](#schemaworkstationconfig)]|false|none|The requested configs.|

<h2 id="tocS_ListUsableWorkstationsResponse">ListUsableWorkstationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusableworkstationsresponse"></a>
<a id="schema_ListUsableWorkstationsResponse"></a>
<a id="tocSlistusableworkstationsresponse"></a>
<a id="tocslistusableworkstationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ],
  "workstations": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "string",
      "deleteTime": "string",
      "displayName": "string",
      "env": {
        "property1": "string",
        "property2": "string"
      },
      "etag": "string",
      "host": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "reconciling": true,
      "state": "STATE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ]
}
```

Response message for ListUsableWorkstations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|unreachable|[string]|false|none|Unreachable resources.|
|workstations|[[Workstation](#schemaworkstation)]|false|none|The requested workstations.|

<h2 id="tocS_ListWorkstationClustersResponse">ListWorkstationClustersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkstationclustersresponse"></a>
<a id="schema_ListWorkstationClustersResponse"></a>
<a id="tocSlistworkstationclustersresponse"></a>
<a id="tocslistworkstationclustersresponse"></a>

```json
{
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ],
  "workstationClusters": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "conditions": [
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
      ],
      "controlPlaneIp": "string",
      "createTime": "string",
      "degraded": true,
      "deleteTime": "string",
      "displayName": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "network": "string",
      "privateClusterConfig": {
        "allowedProjects": [
          "string"
        ],
        "clusterHostname": "string",
        "enablePrivateEndpoint": true,
        "serviceAttachmentUri": "string"
      },
      "reconciling": true,
      "subnetwork": "string",
      "uid": "string",
      "updateTime": "string"
    }
  ]
}
```

Response message for ListWorkstationClusters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|unreachable|[string]|false|none|Unreachable resources.|
|workstationClusters|[[WorkstationCluster](#schemaworkstationcluster)]|false|none|The requested workstation clusters.|

<h2 id="tocS_ListWorkstationConfigsResponse">ListWorkstationConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkstationconfigsresponse"></a>
<a id="schema_ListWorkstationConfigsResponse"></a>
<a id="tocSlistworkstationconfigsresponse"></a>
<a id="tocslistworkstationconfigsresponse"></a>

```json
{
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ],
  "workstationConfigs": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "conditions": [
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
      ],
      "container": {
        "args": [
          "string"
        ],
        "command": [
          "string"
        ],
        "env": {
          "property1": "string",
          "property2": "string"
        },
        "image": "string",
        "runAsUser": 0,
        "workingDir": "string"
      },
      "createTime": "string",
      "degraded": true,
      "deleteTime": "string",
      "displayName": "string",
      "enableAuditAgent": true,
      "encryptionKey": {
        "kmsKey": "string",
        "kmsKeyServiceAccount": "string"
      },
      "etag": "string",
      "host": {
        "gceInstance": {
          "bootDiskSizeGb": 0,
          "confidentialInstanceConfig": {
            "enableConfidentialCompute": true
          },
          "disablePublicIpAddresses": true,
          "machineType": "string",
          "poolSize": 0,
          "serviceAccount": "string",
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true,
            "enableVtpm": true
          },
          "tags": [
            "string"
          ]
        }
      },
      "idleTimeout": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "persistentDirectories": [
        {
          "gcePd": {
            "diskType": "string",
            "fsType": "string",
            "reclaimPolicy": "RECLAIM_POLICY_UNSPECIFIED",
            "sizeGb": 0,
            "sourceSnapshot": "string"
          },
          "mountPath": "string"
        }
      ],
      "reconciling": true,
      "runningTimeout": "string",
      "uid": "string",
      "updateTime": "string"
    }
  ]
}
```

Response message for ListWorkstationConfigs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|unreachable|[string]|false|none|Unreachable resources.|
|workstationConfigs|[[WorkstationConfig](#schemaworkstationconfig)]|false|none|The requested configs.|

<h2 id="tocS_ListWorkstationsResponse">ListWorkstationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkstationsresponse"></a>
<a id="schema_ListWorkstationsResponse"></a>
<a id="tocSlistworkstationsresponse"></a>
<a id="tocslistworkstationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ],
  "workstations": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "string",
      "deleteTime": "string",
      "displayName": "string",
      "env": {
        "property1": "string",
        "property2": "string"
      },
      "etag": "string",
      "host": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "reconciling": true,
      "state": "STATE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ]
}
```

Response message for ListWorkstations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|unreachable|[string]|false|none|Unreachable resources.|
|workstations|[[Workstation](#schemaworkstation)]|false|none|The requested workstations.|

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

Metadata for long-running operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|read-only|Output only. API version used to start the operation.|
|createTime|string(google-datetime)|false|read-only|Output only. Time that the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. Time that the operation finished running.|
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation.|
|statusMessage|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_PersistentDirectory">PersistentDirectory</h2>
<!-- backwards compatibility -->
<a id="schemapersistentdirectory"></a>
<a id="schema_PersistentDirectory"></a>
<a id="tocSpersistentdirectory"></a>
<a id="tocspersistentdirectory"></a>

```json
{
  "gcePd": {
    "diskType": "string",
    "fsType": "string",
    "reclaimPolicy": "RECLAIM_POLICY_UNSPECIFIED",
    "sizeGb": 0,
    "sourceSnapshot": "string"
  },
  "mountPath": "string"
}
```

A directory to persist across workstation sessions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcePd|[GceRegionalPersistentDisk](#schemagceregionalpersistentdisk)|false|none|A PersistentDirectory backed by a Compute Engine persistent disk.|
|mountPath|string|false|none|Location of this directory in the running workstation.|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
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
|auditConfigs|[[AuditConfig](#schemaauditconfig)]|false|none|Specifies cloud audit logging configuration for this policy.|
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_PrivateClusterConfig">PrivateClusterConfig</h2>
<!-- backwards compatibility -->
<a id="schemaprivateclusterconfig"></a>
<a id="schema_PrivateClusterConfig"></a>
<a id="tocSprivateclusterconfig"></a>
<a id="tocsprivateclusterconfig"></a>

```json
{
  "allowedProjects": [
    "string"
  ],
  "clusterHostname": "string",
  "enablePrivateEndpoint": true,
  "serviceAttachmentUri": "string"
}
```

Configuration options for private clusters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedProjects|[string]|false|none|Additional projects that are allowed to attach to the workstation cluster's service attachment. By default, the workstation cluster's project and the VPC host project (if different) are allowed.|
|clusterHostname|string|false|read-only|Output only. Hostname for the workstation cluster. This field will be populated only when private endpoint is enabled. To access workstations in the cluster, create a new DNS zone mapping this domain name to an internal IP address and a forwarding rule mapping that address to the service attachment.|
|enablePrivateEndpoint|boolean|false|none|Immutable. Whether Workstations endpoint is private.|
|serviceAttachmentUri|string|false|read-only|Output only. Service attachment URI for the workstation cluster. The service attachemnt is created when private endpoint is enabled. To access workstations in the cluster, configure access to the managed service using [Private Service Connect](https://cloud.google.com/vpc/docs/configure-private-service-connect-services).|

<h2 id="tocS_SetIamPolicyRequest">SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetiampolicyrequest"></a>
<a id="schema_SetIamPolicyRequest"></a>
<a id="tocSsetiampolicyrequest"></a>
<a id="tocssetiampolicyrequest"></a>

```json
{
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
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
  },
  "updateMask": "string"
}
```

Request message for `SetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[Policy](#schemapolicy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|updateMask|string(google-fieldmask)|false|none|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

<h2 id="tocS_StartWorkstationRequest">StartWorkstationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartworkstationrequest"></a>
<a id="schema_StartWorkstationRequest"></a>
<a id="tocSstartworkstationrequest"></a>
<a id="tocsstartworkstationrequest"></a>

```json
{
  "etag": "string",
  "validateOnly": true
}
```

Request message for StartWorkstation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|If set, the request will be rejected if the latest version of the workstation on the server does not have this etag.|
|validateOnly|boolean|false|none|If set, validate the request and preview the review, but do not actually apply it.|

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

<h2 id="tocS_StopWorkstationRequest">StopWorkstationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopworkstationrequest"></a>
<a id="schema_StopWorkstationRequest"></a>
<a id="tocSstopworkstationrequest"></a>
<a id="tocsstopworkstationrequest"></a>

```json
{
  "etag": "string",
  "validateOnly": true
}
```

Request message for StopWorkstation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|If set, the request will be rejected if the latest version of the workstation on the server does not have this etag.|
|validateOnly|boolean|false|none|If set, validate the request and preview the review, but do not actually apply it.|

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
|permissions|[string]|false|none|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

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

<h2 id="tocS_Workstation">Workstation</h2>
<!-- backwards compatibility -->
<a id="schemaworkstation"></a>
<a id="schema_Workstation"></a>
<a id="tocSworkstation"></a>
<a id="tocsworkstation"></a>

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "string",
  "deleteTime": "string",
  "displayName": "string",
  "env": {
    "property1": "string",
    "property2": "string"
  },
  "etag": "string",
  "host": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "reconciling": true,
  "state": "STATE_UNSPECIFIED",
  "uid": "string",
  "updateTime": "string"
}
```

A single instance of a developer workstation with its own persistent storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Client-specified annotations.|
|createTime|string(google-datetime)|false|read-only|Output only. Time when this resource was created.|
|deleteTime|string(google-datetime)|false|read-only|Output only. Time when this resource was soft-deleted.|
|displayName|string|false|none|Human-readable name for this resource.|
|env|object|false|none|Environment variables passed to the workstation container.|
|etag|string|false|none|Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.|
|host|string|false|read-only|Output only. Host to which clients can send HTTPS traffic that will be received by the workstation. Authorized traffic will be received to the workstation as HTTP on port 80. To send traffic to a different port, clients may prefix the host with the destination port in the format `{port}-{host}`.|
|labels|object|false|none|Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.|
|name|string|false|none|Full name of this resource.|
|reconciling|boolean|false|read-only|Output only. Indicates whether this resource is currently being updated to match its intended state.|
|state|string|false|read-only|Output only. Current state of the workstation.|
|uid|string|false|read-only|Output only. A system-assigned unique identified for this resource.|
|updateTime|string(google-datetime)|false|read-only|Output only. Time when this resource was most recently updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|STATE_STARTING|
|state|STATE_RUNNING|
|state|STATE_STOPPING|
|state|STATE_STOPPED|

<h2 id="tocS_WorkstationCluster">WorkstationCluster</h2>
<!-- backwards compatibility -->
<a id="schemaworkstationcluster"></a>
<a id="schema_WorkstationCluster"></a>
<a id="tocSworkstationcluster"></a>
<a id="tocsworkstationcluster"></a>

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "conditions": [
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
  ],
  "controlPlaneIp": "string",
  "createTime": "string",
  "degraded": true,
  "deleteTime": "string",
  "displayName": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "network": "string",
  "privateClusterConfig": {
    "allowedProjects": [
      "string"
    ],
    "clusterHostname": "string",
    "enablePrivateEndpoint": true,
    "serviceAttachmentUri": "string"
  },
  "reconciling": true,
  "subnetwork": "string",
  "uid": "string",
  "updateTime": "string"
}
```

A grouping of workstation configurations and the associated workstations in that region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Client-specified annotations.|
|conditions|[[Status](#schemastatus)]|false|read-only|Output only. Status conditions describing the current resource state.|
|controlPlaneIp|string|false|read-only|Output only. The private IP address of the control plane for this cluster. Workstation VMs need access to this IP address to work with the service, so please ensure your firewall rules allow egress from the Workstation VMs to this address.|
|createTime|string(google-datetime)|false|read-only|Output only. Time when this resource was created.|
|degraded|boolean|false|read-only|Output only. Whether this resource is in degraded mode, in which case it may require user action to restore full functionality. Details can be found in the `conditions` field.|
|deleteTime|string(google-datetime)|false|read-only|Output only. Time when this resource was soft-deleted.|
|displayName|string|false|none|Human-readable name for this resource.|
|etag|string|false|none|Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.|
|labels|object|false|none|Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.|
|name|string|false|none|Full name of this resource.|
|network|string|false|none|Immutable. Name of the Compute Engine network in which instances associated with this cluster will be created.|
|privateClusterConfig|[PrivateClusterConfig](#schemaprivateclusterconfig)|false|none|Configuration for private cluster.|
|reconciling|boolean|false|read-only|Output only. Indicates whether this resource is currently being updated to match its intended state.|
|subnetwork|string|false|none|Immutable. Name of the Compute Engine subnetwork in which instances associated with this cluster will be created. Must be part of the subnetwork specified for this cluster.|
|uid|string|false|read-only|Output only. A system-assigned unique identified for this resource.|
|updateTime|string(google-datetime)|false|read-only|Output only. Time when this resource was most recently updated.|

<h2 id="tocS_WorkstationConfig">WorkstationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaworkstationconfig"></a>
<a id="schema_WorkstationConfig"></a>
<a id="tocSworkstationconfig"></a>
<a id="tocsworkstationconfig"></a>

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "conditions": [
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
  ],
  "container": {
    "args": [
      "string"
    ],
    "command": [
      "string"
    ],
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "image": "string",
    "runAsUser": 0,
    "workingDir": "string"
  },
  "createTime": "string",
  "degraded": true,
  "deleteTime": "string",
  "displayName": "string",
  "enableAuditAgent": true,
  "encryptionKey": {
    "kmsKey": "string",
    "kmsKeyServiceAccount": "string"
  },
  "etag": "string",
  "host": {
    "gceInstance": {
      "bootDiskSizeGb": 0,
      "confidentialInstanceConfig": {
        "enableConfidentialCompute": true
      },
      "disablePublicIpAddresses": true,
      "machineType": "string",
      "poolSize": 0,
      "serviceAccount": "string",
      "shieldedInstanceConfig": {
        "enableIntegrityMonitoring": true,
        "enableSecureBoot": true,
        "enableVtpm": true
      },
      "tags": [
        "string"
      ]
    }
  },
  "idleTimeout": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "persistentDirectories": [
    {
      "gcePd": {
        "diskType": "string",
        "fsType": "string",
        "reclaimPolicy": "RECLAIM_POLICY_UNSPECIFIED",
        "sizeGb": 0,
        "sourceSnapshot": "string"
      },
      "mountPath": "string"
    }
  ],
  "reconciling": true,
  "runningTimeout": "string",
  "uid": "string",
  "updateTime": "string"
}
```

A set of configuration options describing how a workstation will be run. Workstation configurations are intended to be shared across multiple workstations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Client-specified annotations.|
|conditions|[[Status](#schemastatus)]|false|read-only|Output only. Status conditions describing the current resource state.|
|container|[Container](#schemacontainer)|false|none|Container that will be run for each workstation using this configuration when that workstation is started.|
|createTime|string(google-datetime)|false|read-only|Output only. Time when this resource was created.|
|degraded|boolean|false|read-only|Output only. Whether this resource is in degraded mode, in which case it may require user action to restore full functionality. Details can be found in the `conditions` field.|
|deleteTime|string(google-datetime)|false|read-only|Output only. Time when this resource was soft-deleted.|
|displayName|string|false|none|Human-readable name for this resource.|
|enableAuditAgent|boolean|false|none|Whether to enable linux auditd logging on the workstation. When enabled, a service account must also be specified that has logging.buckets.write permission on the project. Operating system audit logging is distinct from [Cloud Audit Logs](https://cloud.google.com/workstations/docs/audit-logging).|
|encryptionKey|[CustomerEncryptionKey](#schemacustomerencryptionkey)|false|none|Immutable. Encrypts resources of this workstation configuration using a customer-managed encryption key. If specified, the boot disk of the Compute Engine instance and the persistent disk are encrypted using this encryption key. If this field is not set, the disks are encrypted using a generated key. Customer-managed encryption keys do not protect disk metadata. If the customer-managed encryption key is rotated, when the workstation instance is stopped, the system attempts to recreate the persistent disk with the new version of the key. Be sure to keep older versions of the key until the persistent disk is recreated. Otherwise, data on the persistent disk will be lost. If the encryption key is revoked, the workstation session will automatically be stopped within 7 hours. Immutable after workstation config is created.|
|etag|string|false|none|Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.|
|host|[Host](#schemahost)|false|none|Runtime host for the workstation.|
|idleTimeout|string(google-duration)|false|none|How long to wait before automatically stopping an instance that hasn't received any user traffic. A value of 0 indicates that this instance should never time out due to idleness. Defaults to 20 minutes.|
|labels|object|false|none|Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.|
|name|string|false|none|Full name of this resource.|
|persistentDirectories|[[PersistentDirectory](#schemapersistentdirectory)]|false|none|Directories to persist across workstation sessions.|
|reconciling|boolean|false|read-only|Output only. Indicates whether this resource is currently being updated to match its intended state.|
|runningTimeout|string(google-duration)|false|none|How long to wait before automatically stopping a workstation after it started. A value of 0 indicates that workstations using this configuration should never time out. Must be greater than 0 and less than 24 hours if encryption_key is set. Defaults to 12 hours.|
|uid|string|false|read-only|Output only. A system-assigned unique identified for this resource.|
|updateTime|string(google-datetime)|false|read-only|Output only. Time when this resource was most recently updated.|
