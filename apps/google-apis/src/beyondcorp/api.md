<h1 id="beyondcorp-api">BeyondCorp API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Beyondcorp Enterprise provides identity and context aware access controls for enterprise resources and enables zero-trust access. Using the Beyondcorp Enterprise APIs, enterprises can set up multi-cloud and on-prem connectivity solutions.

Base URLs:

* <a href="https://beyondcorp.googleapis.com/">https://beyondcorp.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/">External documentation</a>

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

<h1 id="beyondcorp-api-projects">projects</h1>

## beyondcorp.projects.locations.appConnectors.reportStatus

<a id="opIdbeyondcorp.projects.locations.appConnectors.reportStatus"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:reportStatus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requestId": "string",
    "resourceInfo": {
      "id": "string",
      "resource": {
        "property1": null,
        "property2": null
      },
      "status": "HEALTH_STATUS_UNSPECIFIED",
      "sub": [
        {}
      ],
      "time": "string"
    },
    "validateOnly": true
  }'
```

`POST /v1/{appConnector}:reportStatus`

Report status for a given connector.

> Body parameter

```json
{
  "requestId": "string",
  "resourceInfo": {
    "id": "string",
    "resource": {
      "property1": null,
      "property2": null
    },
    "status": "HEALTH_STATUS_UNSPECIFIED",
    "sub": [
      {}
    ],
    "time": "string"
  },
  "validateOnly": true
}
```

<h3 id="beyondcorpprojectslocationsappconnectorsreportstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appConnector|path|string|true|Required. BeyondCorp Connector name using the form: `projects/{project_id}/locations/{location_id}/connectors/{connector}`|
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
|body|body|[GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest](#schemagooglecloudbeyondcorpappconnectorsv1reportstatusrequest)|false|none|
|» requestId|body|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|» resourceInfo|body|[GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo](#schemagooglecloudbeyondcorpappconnectorsv1resourceinfo)|false|Required. Resource info of the connector.|
|» validateOnly|body|boolean|false|Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.|

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

<h3 id="beyondcorpprojectslocationsappconnectorsreportstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## beyondcorp.projects.locations.appConnectors.resolveInstanceConfig

<a id="opIdbeyondcorp.projects.locations.appConnectors.resolveInstanceConfig"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:resolveInstanceConfig \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{appConnector}:resolveInstanceConfig`

Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.

<h3 id="beyondcorpprojectslocationsappconnectorsresolveinstanceconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appConnector|path|string|true|Required. BeyondCorp AppConnector name using the form: `projects/{project_id}/locations/{location_id}/appConnectors/{app_connector}`|
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
  "instanceConfig": {
    "imageConfig": {
      "stableImage": "string",
      "targetImage": "string"
    },
    "instanceConfig": {
      "property1": null,
      "property2": null
    },
    "notificationConfig": {
      "pubsubNotification": {
        "pubsubSubscription": "string"
      }
    },
    "sequenceNumber": "string"
  }
}
```

<h3 id="beyondcorpprojectslocationsappconnectorsresolveinstanceconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse](#schemagooglecloudbeyondcorpappconnectorsv1resolveinstanceconfigresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## beyondcorp.projects.locations.operations.get

<a id="opIdbeyondcorp.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="beyondcorpprojectslocationsoperationsget-parameters">Parameters</h3>

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

<h3 id="beyondcorpprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## beyondcorp.projects.locations.operations.delete

<a id="opIdbeyondcorp.projects.locations.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="beyondcorpprojectslocationsoperationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be deleted.|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|validateOnly|query|boolean|false|Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.|
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

<h3 id="beyondcorpprojectslocationsoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## beyondcorp.projects.locations.appConnectors.patch

<a id="opIdbeyondcorp.projects.locations.appConnectors.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "principalInfo": {
      "serviceAccount": {
        "email": "string"
      }
    },
    "resourceInfo": {
      "id": "string",
      "resource": {
        "property1": null,
        "property2": null
      },
      "status": "HEALTH_STATUS_UNSPECIFIED",
      "sub": [
        {}
      ],
      "time": "string"
    }
  }'
```

`PATCH /v1/{name}`

Updates the parameters of a single AppConnector.

> Body parameter

```json
{
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "principalInfo": {
    "serviceAccount": {
      "email": "string"
    }
  },
  "resourceInfo": {
    "id": "string",
    "resource": {
      "property1": null,
      "property2": null
    },
    "status": "HEALTH_STATUS_UNSPECIFIED",
    "sub": [
      {}
    ],
    "time": "string"
  }
}
```

<h3 id="beyondcorpprojectslocationsappconnectorspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Unique resource name of the AppConnector. The name is ignored when creating a AppConnector.|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|updateMask|query|string|false|Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from [BeyondCorp.AppConnector]: * `labels` * `display_name`|
|validateOnly|query|boolean|false|Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.|
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
|body|body|[GoogleCloudBeyondcorpAppconnectorsV1AppConnector](#schemagooglecloudbeyondcorpappconnectorsv1appconnector)|false|none|
|» displayName|body|string|false|Optional. An arbitrary user-provided name for the AppConnector. Cannot exceed 64 characters.|
|» labels|body|object|false|Optional. Resource labels to represent user provided metadata.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Required. Unique resource name of the AppConnector. The name is ignored when creating a AppConnector.|
|» principalInfo|body|[GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo](#schemagooglecloudbeyondcorpappconnectorsv1appconnectorprincipalinfo)|false|Required. Principal information about the Identity of the AppConnector.|
|» resourceInfo|body|[GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo](#schemagooglecloudbeyondcorpappconnectorsv1resourceinfo)|false|Optional. Resource info of the connector.|

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

<h3 id="beyondcorpprojectslocationsappconnectorspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## beyondcorp.projects.locations.list

<a id="opIdbeyondcorp.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="beyondcorpprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="beyondcorpprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudLocationListLocationsResponse](#schemagooglecloudlocationlistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## beyondcorp.projects.locations.operations.list

<a id="opIdbeyondcorp.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="beyondcorpprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="beyondcorpprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningListOperationsResponse](#schemagooglelongrunninglistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## beyondcorp.projects.locations.operations.cancel

<a id="opIdbeyondcorp.projects.locations.operations.cancel"></a>

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

<h3 id="beyondcorpprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="beyondcorpprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## beyondcorp.projects.locations.appConnections.list

<a id="opIdbeyondcorp.projects.locations.appConnections.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/appConnections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/appConnections`

Lists AppConnections in a given project and location.

<h3 id="beyondcorpprojectslocationsappconnectionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the AppConnection location using the form: `projects/{project_id}/locations/{location_id}`|
|filter|query|string|false|Optional. A filter specifying constraints of a list operation.|
|orderBy|query|string|false|Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information.|
|pageSize|query|integer|false|Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.|
|pageToken|query|string|false|Optional. The next_page_token value returned from a previous ListAppConnectionsRequest, if any.|
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
  "appConnections": [
    {
      "applicationEndpoint": {
        "host": "string",
        "port": 0
      },
      "connectors": [
        "string"
      ],
      "createTime": "string",
      "displayName": "string",
      "gateway": {
        "appGateway": "string",
        "ingressPort": 0,
        "l7psc": "string",
        "type": "TYPE_UNSPECIFIED",
        "uri": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="beyondcorpprojectslocationsappconnectionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse](#schemagooglecloudbeyondcorpappconnectionsv1listappconnectionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## beyondcorp.projects.locations.appConnections.create

<a id="opIdbeyondcorp.projects.locations.appConnections.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/appConnections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "applicationEndpoint": {
      "host": "string",
      "port": 0
    },
    "connectors": [
      "string"
    ],
    "displayName": "string",
    "gateway": {
      "appGateway": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  }'
```

`POST /v1/{parent}/appConnections`

Creates a new AppConnection in a given project and location.

> Body parameter

```json
{
  "applicationEndpoint": {
    "host": "string",
    "port": 0
  },
  "connectors": [
    "string"
  ],
  "displayName": "string",
  "gateway": {
    "appGateway": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="beyondcorpprojectslocationsappconnectionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource project name of the AppConnection location using the form: `projects/{project_id}/locations/{location_id}`|
|appConnectionId|query|string|false|Optional. User-settable AppConnection resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or a letter.|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|validateOnly|query|boolean|false|Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.|
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
|body|body|[GoogleCloudBeyondcorpAppconnectionsV1AppConnection](#schemagooglecloudbeyondcorpappconnectionsv1appconnection)|false|none|
|» applicationEndpoint|body|[GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint](#schemagooglecloudbeyondcorpappconnectionsv1appconnectionapplicationendpoint)|false|Required. Address of the remote application endpoint for the BeyondCorp AppConnection.|
|» connectors|body|[string]|false|Optional. List of [google.cloud.beyondcorp.v1main.Connector.name] that are authorised to be associated with this AppConnection.|
|» displayName|body|string|false|Optional. An arbitrary user-provided name for the AppConnection. Cannot exceed 64 characters.|
|» gateway|body|[GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway](#schemagooglecloudbeyondcorpappconnectionsv1appconnectiongateway)|false|Optional. Gateway used by the AppConnection.|
|» labels|body|object|false|Optional. Resource labels to represent user provided metadata.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Required. Unique resource name of the AppConnection. The name is ignored when creating a AppConnection.|
|» type|body|string|false|Required. The type of network connectivity used by the AppConnection.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|TYPE_UNSPECIFIED|
|» type|TCP_PROXY|

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

<h3 id="beyondcorpprojectslocationsappconnectionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## beyondcorp.projects.locations.appConnections.resolve

<a id="opIdbeyondcorp.projects.locations.appConnections.resolve"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/appConnections:resolve \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/appConnections:resolve`

Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.

<h3 id="beyondcorpprojectslocationsappconnectionsresolve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the AppConnection location using the form: `projects/{project_id}/locations/{location_id}`|
|appConnectorId|query|string|false|Required. BeyondCorp Connector name of the connector associated with those AppConnections using the form: `projects/{project_id}/locations/{location_id}/appConnectors/{app_connector_id}`|
|pageSize|query|integer|false|Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.|
|pageToken|query|string|false|Optional. The next_page_token value returned from a previous ResolveAppConnectionsResponse, if any.|
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
  "appConnectionDetails": [
    {
      "appConnection": {
        "applicationEndpoint": {
          "host": "string",
          "port": 0
        },
        "connectors": [
          "string"
        ],
        "createTime": "string",
        "displayName": "string",
        "gateway": {
          "appGateway": "string",
          "ingressPort": 0,
          "l7psc": "string",
          "type": "TYPE_UNSPECIFIED",
          "uri": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "state": "STATE_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED",
        "uid": "string",
        "updateTime": "string"
      },
      "recentMigVms": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="beyondcorpprojectslocationsappconnectionsresolve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse](#schemagooglecloudbeyondcorpappconnectionsv1resolveappconnectionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## beyondcorp.projects.locations.appConnectors.list

<a id="opIdbeyondcorp.projects.locations.appConnectors.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/appConnectors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/appConnectors`

Lists AppConnectors in a given project and location.

<h3 id="beyondcorpprojectslocationsappconnectorslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the AppConnector location using the form: `projects/{project_id}/locations/{location_id}`|
|filter|query|string|false|Optional. A filter specifying constraints of a list operation.|
|orderBy|query|string|false|Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information.|
|pageSize|query|integer|false|Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.|
|pageToken|query|string|false|Optional. The next_page_token value returned from a previous ListAppConnectorsRequest, if any.|
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
  "appConnectors": [
    {
      "createTime": "string",
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "principalInfo": {
        "serviceAccount": {
          "email": "string"
        }
      },
      "resourceInfo": {
        "id": "string",
        "resource": {
          "property1": null,
          "property2": null
        },
        "status": "HEALTH_STATUS_UNSPECIFIED",
        "sub": [
          {}
        ],
        "time": "string"
      },
      "state": "STATE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="beyondcorpprojectslocationsappconnectorslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse](#schemagooglecloudbeyondcorpappconnectorsv1listappconnectorsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## beyondcorp.projects.locations.appConnectors.create

<a id="opIdbeyondcorp.projects.locations.appConnectors.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/appConnectors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "principalInfo": {
      "serviceAccount": {
        "email": "string"
      }
    },
    "resourceInfo": {
      "id": "string",
      "resource": {
        "property1": null,
        "property2": null
      },
      "status": "HEALTH_STATUS_UNSPECIFIED",
      "sub": [
        {}
      ],
      "time": "string"
    }
  }'
```

`POST /v1/{parent}/appConnectors`

Creates a new AppConnector in a given project and location.

> Body parameter

```json
{
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "principalInfo": {
    "serviceAccount": {
      "email": "string"
    }
  },
  "resourceInfo": {
    "id": "string",
    "resource": {
      "property1": null,
      "property2": null
    },
    "status": "HEALTH_STATUS_UNSPECIFIED",
    "sub": [
      {}
    ],
    "time": "string"
  }
}
```

<h3 id="beyondcorpprojectslocationsappconnectorscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource project name of the AppConnector location using the form: `projects/{project_id}/locations/{location_id}`|
|appConnectorId|query|string|false|Optional. User-settable AppConnector resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or a letter.|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|validateOnly|query|boolean|false|Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.|
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
|body|body|[GoogleCloudBeyondcorpAppconnectorsV1AppConnector](#schemagooglecloudbeyondcorpappconnectorsv1appconnector)|false|none|
|» displayName|body|string|false|Optional. An arbitrary user-provided name for the AppConnector. Cannot exceed 64 characters.|
|» labels|body|object|false|Optional. Resource labels to represent user provided metadata.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Required. Unique resource name of the AppConnector. The name is ignored when creating a AppConnector.|
|» principalInfo|body|[GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo](#schemagooglecloudbeyondcorpappconnectorsv1appconnectorprincipalinfo)|false|Required. Principal information about the Identity of the AppConnector.|
|» resourceInfo|body|[GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo](#schemagooglecloudbeyondcorpappconnectorsv1resourceinfo)|false|Optional. Resource info of the connector.|

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

<h3 id="beyondcorpprojectslocationsappconnectorscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## beyondcorp.projects.locations.appGateways.list

<a id="opIdbeyondcorp.projects.locations.appGateways.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/appGateways \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/appGateways`

Lists AppGateways in a given project and location.

<h3 id="beyondcorpprojectslocationsappgatewayslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the AppGateway location using the form: `projects/{project_id}/locations/{location_id}`|
|filter|query|string|false|Optional. A filter specifying constraints of a list operation.|
|orderBy|query|string|false|Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information.|
|pageSize|query|integer|false|Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.|
|pageToken|query|string|false|Optional. The next_page_token value returned from a previous ListAppGatewaysRequest, if any.|
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
  "appGateways": [
    {
      "allocatedConnections": [
        {
          "ingressPort": 0,
          "pscUri": "string"
        }
      ],
      "createTime": "string",
      "displayName": "string",
      "hostType": "HOST_TYPE_UNSPECIFIED",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string",
      "uri": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="beyondcorpprojectslocationsappgatewayslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAppGatewaysResponse](#schemalistappgatewaysresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## beyondcorp.projects.locations.appGateways.create

<a id="opIdbeyondcorp.projects.locations.appGateways.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/appGateways \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "hostType": "HOST_TYPE_UNSPECIFIED",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  }'
```

`POST /v1/{parent}/appGateways`

Creates a new AppGateway in a given project and location.

> Body parameter

```json
{
  "displayName": "string",
  "hostType": "HOST_TYPE_UNSPECIFIED",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="beyondcorpprojectslocationsappgatewayscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource project name of the AppGateway location using the form: `projects/{project_id}/locations/{location_id}`|
|appGatewayId|query|string|false|Optional. User-settable AppGateway resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or a letter.|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|validateOnly|query|boolean|false|Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.|
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
|body|body|[AppGateway](#schemaappgateway)|false|none|
|» displayName|body|string|false|Optional. An arbitrary user-provided name for the AppGateway. Cannot exceed 64 characters.|
|» hostType|body|string|false|Required. The type of hosting used by the AppGateway.|
|» labels|body|object|false|Optional. Resource labels to represent user provided metadata.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Required. Unique resource name of the AppGateway. The name is ignored when creating an AppGateway.|
|» type|body|string|false|Required. The type of network connectivity used by the AppGateway.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» hostType|HOST_TYPE_UNSPECIFIED|
|» hostType|GCP_REGIONAL_MIG|
|» type|TYPE_UNSPECIFIED|
|» type|TCP_PROXY|

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

<h3 id="beyondcorpprojectslocationsappgatewayscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## beyondcorp.projects.locations.clientGateways.getIamPolicy

<a id="opIdbeyondcorp.projects.locations.clientGateways.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="beyondcorpprojectslocationsclientgatewaysgetiampolicy-parameters">Parameters</h3>

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

<h3 id="beyondcorpprojectslocationsclientgatewaysgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1Policy](#schemagoogleiamv1policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## beyondcorp.projects.locations.clientGateways.setIamPolicy

<a id="opIdbeyondcorp.projects.locations.clientGateways.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:setIamPolicy \
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

`POST /v1/{resource}:setIamPolicy`

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

<h3 id="beyondcorpprojectslocationsclientgatewayssetiampolicy-parameters">Parameters</h3>

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
|body|body|[GoogleIamV1SetIamPolicyRequest](#schemagoogleiamv1setiampolicyrequest)|false|none|
|» policy|body|[GoogleIamV1Policy](#schemagoogleiamv1policy)|false|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
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

<h3 id="beyondcorpprojectslocationsclientgatewayssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1Policy](#schemagoogleiamv1policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## beyondcorp.projects.locations.clientGateways.testIamPermissions

<a id="opIdbeyondcorp.projects.locations.clientGateways.testIamPermissions"></a>

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

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="beyondcorpprojectslocationsclientgatewaystestiampermissions-parameters">Parameters</h3>

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
|body|body|[GoogleIamV1TestIamPermissionsRequest](#schemagoogleiamv1testiampermissionsrequest)|false|none|
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

<h3 id="beyondcorpprojectslocationsclientgatewaystestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1TestIamPermissionsResponse](#schemagoogleiamv1testiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AllocatedConnection">AllocatedConnection</h2>
<!-- backwards compatibility -->
<a id="schemaallocatedconnection"></a>
<a id="schema_AllocatedConnection"></a>
<a id="tocSallocatedconnection"></a>
<a id="tocsallocatedconnection"></a>

```json
{
  "ingressPort": 0,
  "pscUri": "string"
}
```

Allocated connection of the AppGateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ingressPort|integer(int32)|false|none|Required. The ingress port of an allocated connection|
|pscUri|string|false|none|Required. The PSC uri of an allocated connection|

<h2 id="tocS_AppGateway">AppGateway</h2>
<!-- backwards compatibility -->
<a id="schemaappgateway"></a>
<a id="schema_AppGateway"></a>
<a id="tocSappgateway"></a>
<a id="tocsappgateway"></a>

```json
{
  "allocatedConnections": [
    {
      "ingressPort": 0,
      "pscUri": "string"
    }
  ],
  "createTime": "string",
  "displayName": "string",
  "hostType": "HOST_TYPE_UNSPECIFIED",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "TYPE_UNSPECIFIED",
  "uid": "string",
  "updateTime": "string",
  "uri": "string"
}
```

A BeyondCorp AppGateway resource represents a BeyondCorp protected AppGateway to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppGateway. Multiple connectors can be authorised for a single AppGateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocatedConnections|[[AllocatedConnection](#schemaallocatedconnection)]|false|read-only|Output only. A list of connections allocated for the Gateway|
|createTime|string(google-datetime)|false|read-only|Output only. Timestamp when the resource was created.|
|displayName|string|false|none|Optional. An arbitrary user-provided name for the AppGateway. Cannot exceed 64 characters.|
|hostType|string|false|none|Required. The type of hosting used by the AppGateway.|
|labels|object|false|none|Optional. Resource labels to represent user provided metadata.|
|name|string|false|none|Required. Unique resource name of the AppGateway. The name is ignored when creating an AppGateway.|
|state|string|false|read-only|Output only. The current state of the AppGateway.|
|type|string|false|none|Required. The type of network connectivity used by the AppGateway.|
|uid|string|false|read-only|Output only. A unique identifier for the instance generated by the system.|
|updateTime|string(google-datetime)|false|read-only|Output only. Timestamp when the resource was last modified.|
|uri|string|false|read-only|Output only. Server-defined URI for this resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|hostType|HOST_TYPE_UNSPECIFIED|
|hostType|GCP_REGIONAL_MIG|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|CREATED|
|state|UPDATING|
|state|DELETING|
|state|DOWN|
|type|TYPE_UNSPECIFIED|
|type|TCP_PROXY|

<h2 id="tocS_AppGatewayOperationMetadata">AppGatewayOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaappgatewayoperationmetadata"></a>
<a id="schema_AppGatewayOperationMetadata"></a>
<a id="tocSappgatewayoperationmetadata"></a>
<a id="tocsappgatewayoperationmetadata"></a>

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
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|statusMessage|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_CloudSecurityZerotrustApplinkAppConnectorProtoConnectionConfig">CloudSecurityZerotrustApplinkAppConnectorProtoConnectionConfig</h2>
<!-- backwards compatibility -->
<a id="schemacloudsecurityzerotrustapplinkappconnectorprotoconnectionconfig"></a>
<a id="schema_CloudSecurityZerotrustApplinkAppConnectorProtoConnectionConfig"></a>
<a id="tocScloudsecurityzerotrustapplinkappconnectorprotoconnectionconfig"></a>
<a id="tocscloudsecurityzerotrustapplinkappconnectorprotoconnectionconfig"></a>

```json
{
  "applicationEndpoint": "string",
  "applicationName": "string",
  "gateway": [
    {
      "interface": "string",
      "name": "string",
      "port": 0,
      "project": "string",
      "selfLink": "string",
      "zone": "string"
    }
  ],
  "name": "string",
  "project": "string",
  "tunnelsPerGateway": 0,
  "userPort": 0
}
```

ConnectionConfig represents a Connection Configuration object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationEndpoint|string|false|none|application_endpoint is the endpoint of the application the form of host:port. For example, "localhost:80".|
|applicationName|string|false|none|application_name represents the given name of the application the connection is connecting with.|
|gateway|[[CloudSecurityZerotrustApplinkAppConnectorProtoGateway](#schemacloudsecurityzerotrustapplinkappconnectorprotogateway)]|false|none|gateway lists all instances running a gateway in GCP. They all connect to a connector on the host.|
|name|string|false|none|name is the unique ID for each connection. TODO(b/190732451) returns connection name from user-specified name in config. Now, name = ${application_name}:${application_endpoint}|
|project|string|false|none|project represents the consumer project the connection belongs to.|
|tunnelsPerGateway|integer(uint32)|false|none|tunnels_per_gateway reflects the number of tunnels between a connector and a gateway.|
|userPort|integer(int32)|false|none|user_port specifies the reserved port on gateways for user connections.|

<h2 id="tocS_CloudSecurityZerotrustApplinkAppConnectorProtoConnectorDetails">CloudSecurityZerotrustApplinkAppConnectorProtoConnectorDetails</h2>
<!-- backwards compatibility -->
<a id="schemacloudsecurityzerotrustapplinkappconnectorprotoconnectordetails"></a>
<a id="schema_CloudSecurityZerotrustApplinkAppConnectorProtoConnectorDetails"></a>
<a id="tocScloudsecurityzerotrustapplinkappconnectorprotoconnectordetails"></a>
<a id="tocscloudsecurityzerotrustapplinkappconnectorprotoconnectordetails"></a>

```json
{}
```

ConnectorDetails reflects the details of a connector.

<h2 id="tocS_CloudSecurityZerotrustApplinkAppConnectorProtoGateway">CloudSecurityZerotrustApplinkAppConnectorProtoGateway</h2>
<!-- backwards compatibility -->
<a id="schemacloudsecurityzerotrustapplinkappconnectorprotogateway"></a>
<a id="schema_CloudSecurityZerotrustApplinkAppConnectorProtoGateway"></a>
<a id="tocScloudsecurityzerotrustapplinkappconnectorprotogateway"></a>
<a id="tocscloudsecurityzerotrustapplinkappconnectorprotogateway"></a>

```json
{
  "interface": "string",
  "name": "string",
  "port": 0,
  "project": "string",
  "selfLink": "string",
  "zone": "string"
}
```

Gateway represents a GCE VM Instance endpoint for use by IAP TCP.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interface|string|false|none|interface specifies the network interface of the gateway to connect to.|
|name|string|false|none|name is the name of an instance running a gateway. It is the unique ID for a gateway. All gateways under the same connection have the same prefix. It is derived from the gateway URL. For example, name=${instance} assuming a gateway URL. https://www.googleapis.com/compute/${version}/projects/${project}/zones/${zone}/instances/${instance}|
|port|integer(uint32)|false|none|port specifies the port of the gateway for tunnel connections from the connectors.|
|project|string|false|none|project is the tenant project the gateway belongs to. Different from the project in the connection, it is a BeyondCorpAPI internally created project to manage all the gateways. It is sharing the same network with the consumer project user owned. It is derived from the gateway URL. For example, project=${project} assuming a gateway URL. https://www.googleapis.com/compute/${version}/projects/${project}/zones/${zone}/instances/${instance}|
|selfLink|string|false|none|self_link is the gateway URL in the form https://www.googleapis.com/compute/${version}/projects/${project}/zones/${zone}/instances/${instance}|
|zone|string|false|none|zone represents the zone the instance belongs. It is derived from the gateway URL. For example, zone=${zone} assuming a gateway URL. https://www.googleapis.com/compute/${version}/projects/${project}/zones/${zone}/instances/${instance}|

<h2 id="tocS_CloudSecurityZerotrustApplinkLogagentProtoLogAgentDetails">CloudSecurityZerotrustApplinkLogagentProtoLogAgentDetails</h2>
<!-- backwards compatibility -->
<a id="schemacloudsecurityzerotrustapplinklogagentprotologagentdetails"></a>
<a id="schema_CloudSecurityZerotrustApplinkLogagentProtoLogAgentDetails"></a>
<a id="tocScloudsecurityzerotrustapplinklogagentprotologagentdetails"></a>
<a id="tocscloudsecurityzerotrustapplinklogagentprotologagentdetails"></a>

```json
{}
```

LogAgentDetails reflects the details of a log agent.

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

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectionsV1AppConnection">GoogleCloudBeyondcorpAppconnectionsV1AppConnection</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectionsv1appconnection"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectionsV1AppConnection"></a>
<a id="tocSgooglecloudbeyondcorpappconnectionsv1appconnection"></a>
<a id="tocsgooglecloudbeyondcorpappconnectionsv1appconnection"></a>

```json
{
  "applicationEndpoint": {
    "host": "string",
    "port": 0
  },
  "connectors": [
    "string"
  ],
  "createTime": "string",
  "displayName": "string",
  "gateway": {
    "appGateway": "string",
    "ingressPort": 0,
    "l7psc": "string",
    "type": "TYPE_UNSPECIFIED",
    "uri": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "TYPE_UNSPECIFIED",
  "uid": "string",
  "updateTime": "string"
}
```

A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationEndpoint|[GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint](#schemagooglecloudbeyondcorpappconnectionsv1appconnectionapplicationendpoint)|false|none|Required. Address of the remote application endpoint for the BeyondCorp AppConnection.|
|connectors|[string]|false|none|Optional. List of [google.cloud.beyondcorp.v1main.Connector.name] that are authorised to be associated with this AppConnection.|
|createTime|string(google-datetime)|false|read-only|Output only. Timestamp when the resource was created.|
|displayName|string|false|none|Optional. An arbitrary user-provided name for the AppConnection. Cannot exceed 64 characters.|
|gateway|[GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway](#schemagooglecloudbeyondcorpappconnectionsv1appconnectiongateway)|false|none|Optional. Gateway used by the AppConnection.|
|labels|object|false|none|Optional. Resource labels to represent user provided metadata.|
|name|string|false|none|Required. Unique resource name of the AppConnection. The name is ignored when creating a AppConnection.|
|state|string|false|read-only|Output only. The current state of the AppConnection.|
|type|string|false|none|Required. The type of network connectivity used by the AppConnection.|
|uid|string|false|read-only|Output only. A unique identifier for the instance generated by the system.|
|updateTime|string(google-datetime)|false|read-only|Output only. Timestamp when the resource was last modified.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|CREATED|
|state|UPDATING|
|state|DELETING|
|state|DOWN|
|type|TYPE_UNSPECIFIED|
|type|TCP_PROXY|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint">GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectionsv1appconnectionapplicationendpoint"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint"></a>
<a id="tocSgooglecloudbeyondcorpappconnectionsv1appconnectionapplicationendpoint"></a>
<a id="tocsgooglecloudbeyondcorpappconnectionsv1appconnectionapplicationendpoint"></a>

```json
{
  "host": "string",
  "port": 0
}
```

ApplicationEndpoint represents a remote application endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|false|none|Required. Hostname or IP address of the remote application endpoint.|
|port|integer(int32)|false|none|Required. Port of the remote application endpoint.|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway">GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectionsv1appconnectiongateway"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway"></a>
<a id="tocSgooglecloudbeyondcorpappconnectionsv1appconnectiongateway"></a>
<a id="tocsgooglecloudbeyondcorpappconnectionsv1appconnectiongateway"></a>

```json
{
  "appGateway": "string",
  "ingressPort": 0,
  "l7psc": "string",
  "type": "TYPE_UNSPECIFIED",
  "uri": "string"
}
```

Gateway represents a user facing component that serves as an entrance to enable connectivity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appGateway|string|false|none|Required. AppGateway name in following format: `projects/{project_id}/locations/{location_id}/appgateways/{gateway_id}`|
|ingressPort|integer(int32)|false|read-only|Output only. Ingress port reserved on the gateways for this AppConnection, if not specified or zero, the default port is 19443.|
|l7psc|string|false|read-only|Output only. L7 private service connection for this resource.|
|type|string|false|none|Required. The type of hosting used by the gateway.|
|uri|string|false|read-only|Output only. Server-defined URI for this resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|GCP_REGIONAL_MIG|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectionsV1AppConnectionOperationMetadata">GoogleCloudBeyondcorpAppconnectionsV1AppConnectionOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectionsv1appconnectionoperationmetadata"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectionsV1AppConnectionOperationMetadata"></a>
<a id="tocSgooglecloudbeyondcorpappconnectionsv1appconnectionoperationmetadata"></a>
<a id="tocsgooglecloudbeyondcorpappconnectionsv1appconnectionoperationmetadata"></a>

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
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|statusMessage|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse">GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectionsv1listappconnectionsresponse"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse"></a>
<a id="tocSgooglecloudbeyondcorpappconnectionsv1listappconnectionsresponse"></a>
<a id="tocsgooglecloudbeyondcorpappconnectionsv1listappconnectionsresponse"></a>

```json
{
  "appConnections": [
    {
      "applicationEndpoint": {
        "host": "string",
        "port": 0
      },
      "connectors": [
        "string"
      ],
      "createTime": "string",
      "displayName": "string",
      "gateway": {
        "appGateway": "string",
        "ingressPort": 0,
        "l7psc": "string",
        "type": "TYPE_UNSPECIFIED",
        "uri": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for BeyondCorp.ListAppConnections.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appConnections|[[GoogleCloudBeyondcorpAppconnectionsV1AppConnection](#schemagooglecloudbeyondcorpappconnectionsv1appconnection)]|false|none|A list of BeyondCorp AppConnections in the project.|
|nextPageToken|string|false|none|A token to retrieve the next page of results, or empty if there are no more results in the list.|
|unreachable|[string]|false|none|A list of locations that could not be reached.|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse">GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectionsv1resolveappconnectionsresponse"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse"></a>
<a id="tocSgooglecloudbeyondcorpappconnectionsv1resolveappconnectionsresponse"></a>
<a id="tocsgooglecloudbeyondcorpappconnectionsv1resolveappconnectionsresponse"></a>

```json
{
  "appConnectionDetails": [
    {
      "appConnection": {
        "applicationEndpoint": {
          "host": "string",
          "port": 0
        },
        "connectors": [
          "string"
        ],
        "createTime": "string",
        "displayName": "string",
        "gateway": {
          "appGateway": "string",
          "ingressPort": 0,
          "l7psc": "string",
          "type": "TYPE_UNSPECIFIED",
          "uri": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "state": "STATE_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED",
        "uid": "string",
        "updateTime": "string"
      },
      "recentMigVms": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for BeyondCorp.ResolveAppConnections.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appConnectionDetails|[[GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails](#schemagooglecloudbeyondcorpappconnectionsv1resolveappconnectionsresponseappconnectiondetails)]|false|none|A list of BeyondCorp AppConnections with details in the project.|
|nextPageToken|string|false|none|A token to retrieve the next page of results, or empty if there are no more results in the list.|
|unreachable|[string]|false|none|A list of locations that could not be reached.|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails">GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectionsv1resolveappconnectionsresponseappconnectiondetails"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails"></a>
<a id="tocSgooglecloudbeyondcorpappconnectionsv1resolveappconnectionsresponseappconnectiondetails"></a>
<a id="tocsgooglecloudbeyondcorpappconnectionsv1resolveappconnectionsresponseappconnectiondetails"></a>

```json
{
  "appConnection": {
    "applicationEndpoint": {
      "host": "string",
      "port": 0
    },
    "connectors": [
      "string"
    ],
    "createTime": "string",
    "displayName": "string",
    "gateway": {
      "appGateway": "string",
      "ingressPort": 0,
      "l7psc": "string",
      "type": "TYPE_UNSPECIFIED",
      "uri": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "state": "STATE_UNSPECIFIED",
    "type": "TYPE_UNSPECIFIED",
    "uid": "string",
    "updateTime": "string"
  },
  "recentMigVms": [
    "string"
  ]
}
```

Details of the AppConnection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appConnection|[GoogleCloudBeyondcorpAppconnectionsV1AppConnection](#schemagooglecloudbeyondcorpappconnectionsv1appconnection)|false|none|A BeyondCorp AppConnection in the project.|
|recentMigVms|[string]|false|none|If type=GCP_REGIONAL_MIG, contains most recent VM instances, like `https://www.googleapis.com/compute/v1/projects/{project_id}/zones/{zone_id}/instances/{instance_id}`.|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionOperationMetadata">GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectionsv1alphaappconnectionoperationmetadata"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionOperationMetadata"></a>
<a id="tocSgooglecloudbeyondcorpappconnectionsv1alphaappconnectionoperationmetadata"></a>
<a id="tocsgooglecloudbeyondcorpappconnectionsv1alphaappconnectionoperationmetadata"></a>

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
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|statusMessage|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectorsV1AppConnector">GoogleCloudBeyondcorpAppconnectorsV1AppConnector</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectorsv1appconnector"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectorsV1AppConnector"></a>
<a id="tocSgooglecloudbeyondcorpappconnectorsv1appconnector"></a>
<a id="tocsgooglecloudbeyondcorpappconnectorsv1appconnector"></a>

```json
{
  "createTime": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "principalInfo": {
    "serviceAccount": {
      "email": "string"
    }
  },
  "resourceInfo": {
    "id": "string",
    "resource": {
      "property1": null,
      "property2": null
    },
    "status": "HEALTH_STATUS_UNSPECIFIED",
    "sub": [
      {}
    ],
    "time": "string"
  },
  "state": "STATE_UNSPECIFIED",
  "uid": "string",
  "updateTime": "string"
}
```

A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Timestamp when the resource was created.|
|displayName|string|false|none|Optional. An arbitrary user-provided name for the AppConnector. Cannot exceed 64 characters.|
|labels|object|false|none|Optional. Resource labels to represent user provided metadata.|
|name|string|false|none|Required. Unique resource name of the AppConnector. The name is ignored when creating a AppConnector.|
|principalInfo|[GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo](#schemagooglecloudbeyondcorpappconnectorsv1appconnectorprincipalinfo)|false|none|Required. Principal information about the Identity of the AppConnector.|
|resourceInfo|[GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo](#schemagooglecloudbeyondcorpappconnectorsv1resourceinfo)|false|none|Optional. Resource info of the connector.|
|state|string|false|read-only|Output only. The current state of the AppConnector.|
|uid|string|false|read-only|Output only. A unique identifier for the instance generated by the system.|
|updateTime|string(google-datetime)|false|read-only|Output only. Timestamp when the resource was last modified.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|CREATED|
|state|UPDATING|
|state|DELETING|
|state|DOWN|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig">GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectorsv1appconnectorinstanceconfig"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig"></a>
<a id="tocSgooglecloudbeyondcorpappconnectorsv1appconnectorinstanceconfig"></a>
<a id="tocsgooglecloudbeyondcorpappconnectorsv1appconnectorinstanceconfig"></a>

```json
{
  "imageConfig": {
    "stableImage": "string",
    "targetImage": "string"
  },
  "instanceConfig": {
    "property1": null,
    "property2": null
  },
  "notificationConfig": {
    "pubsubNotification": {
      "pubsubSubscription": "string"
    }
  },
  "sequenceNumber": "string"
}
```

AppConnectorInstanceConfig defines the instance config of a AppConnector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageConfig|[GoogleCloudBeyondcorpAppconnectorsV1ImageConfig](#schemagooglecloudbeyondcorpappconnectorsv1imageconfig)|false|none|ImageConfig defines the GCR images to run for the remote agent's control plane.|
|instanceConfig|object|false|none|The SLM instance agent configuration.|
|notificationConfig|[GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig](#schemagooglecloudbeyondcorpappconnectorsv1notificationconfig)|false|none|NotificationConfig defines the notification mechanism that the remote instance should subscribe to in order to receive notification.|
|sequenceNumber|string(int64)|false|none|Required. A monotonically increasing number generated and maintained by the API provider. Every time a config changes in the backend, the sequenceNumber should be bumped up to reflect the change.|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectorsV1AppConnectorOperationMetadata">GoogleCloudBeyondcorpAppconnectorsV1AppConnectorOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectorsv1appconnectoroperationmetadata"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectorsV1AppConnectorOperationMetadata"></a>
<a id="tocSgooglecloudbeyondcorpappconnectorsv1appconnectoroperationmetadata"></a>
<a id="tocsgooglecloudbeyondcorpappconnectorsv1appconnectoroperationmetadata"></a>

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
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|statusMessage|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo">GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectorsv1appconnectorprincipalinfo"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo"></a>
<a id="tocSgooglecloudbeyondcorpappconnectorsv1appconnectorprincipalinfo"></a>
<a id="tocsgooglecloudbeyondcorpappconnectorsv1appconnectorprincipalinfo"></a>

```json
{
  "serviceAccount": {
    "email": "string"
  }
}
```

PrincipalInfo represents an Identity oneof.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceAccount|[GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount](#schemagooglecloudbeyondcorpappconnectorsv1appconnectorprincipalinfoserviceaccount)|false|none|A GCP service account.|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount">GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectorsv1appconnectorprincipalinfoserviceaccount"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount"></a>
<a id="tocSgooglecloudbeyondcorpappconnectorsv1appconnectorprincipalinfoserviceaccount"></a>
<a id="tocsgooglecloudbeyondcorpappconnectorsv1appconnectorprincipalinfoserviceaccount"></a>

```json
{
  "email": "string"
}
```

ServiceAccount represents a GCP service account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Email address of the service account.|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectorsV1ContainerHealthDetails">GoogleCloudBeyondcorpAppconnectorsV1ContainerHealthDetails</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectorsv1containerhealthdetails"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectorsV1ContainerHealthDetails"></a>
<a id="tocSgooglecloudbeyondcorpappconnectorsv1containerhealthdetails"></a>
<a id="tocsgooglecloudbeyondcorpappconnectorsv1containerhealthdetails"></a>

```json
{
  "currentConfigVersion": "string",
  "errorMsg": "string",
  "expectedConfigVersion": "string",
  "extendedStatus": {
    "property1": "string",
    "property2": "string"
  }
}
```

ContainerHealthDetails reflects the health details of a container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentConfigVersion|string|false|none|The version of the current config.|
|errorMsg|string|false|none|The latest error message.|
|expectedConfigVersion|string|false|none|The version of the expected config.|
|extendedStatus|object|false|none|The extended status. Such as ExitCode, StartedAt, FinishedAt, etc.|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectorsV1ImageConfig">GoogleCloudBeyondcorpAppconnectorsV1ImageConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectorsv1imageconfig"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectorsV1ImageConfig"></a>
<a id="tocSgooglecloudbeyondcorpappconnectorsv1imageconfig"></a>
<a id="tocsgooglecloudbeyondcorpappconnectorsv1imageconfig"></a>

```json
{
  "stableImage": "string",
  "targetImage": "string"
}
```

ImageConfig defines the control plane images to run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stableImage|string|false|none|The stable image that the remote agent will fallback to if the target image fails. Format would be a gcr image path, e.g.: gcr.io/PROJECT-ID/my-image:tag1|
|targetImage|string|false|none|The initial image the remote agent will attempt to run for the control plane. Format would be a gcr image path, e.g.: gcr.io/PROJECT-ID/my-image:tag1|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse">GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectorsv1listappconnectorsresponse"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse"></a>
<a id="tocSgooglecloudbeyondcorpappconnectorsv1listappconnectorsresponse"></a>
<a id="tocsgooglecloudbeyondcorpappconnectorsv1listappconnectorsresponse"></a>

```json
{
  "appConnectors": [
    {
      "createTime": "string",
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "principalInfo": {
        "serviceAccount": {
          "email": "string"
        }
      },
      "resourceInfo": {
        "id": "string",
        "resource": {
          "property1": null,
          "property2": null
        },
        "status": "HEALTH_STATUS_UNSPECIFIED",
        "sub": [
          {}
        ],
        "time": "string"
      },
      "state": "STATE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for BeyondCorp.ListAppConnectors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appConnectors|[[GoogleCloudBeyondcorpAppconnectorsV1AppConnector](#schemagooglecloudbeyondcorpappconnectorsv1appconnector)]|false|none|A list of BeyondCorp AppConnectors in the project.|
|nextPageToken|string|false|none|A token to retrieve the next page of results, or empty if there are no more results in the list.|
|unreachable|[string]|false|none|A list of locations that could not be reached.|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig">GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectorsv1notificationconfig"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig"></a>
<a id="tocSgooglecloudbeyondcorpappconnectorsv1notificationconfig"></a>
<a id="tocsgooglecloudbeyondcorpappconnectorsv1notificationconfig"></a>

```json
{
  "pubsubNotification": {
    "pubsubSubscription": "string"
  }
}
```

NotificationConfig defines the mechanisms to notify instance agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pubsubNotification|[GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig](#schemagooglecloudbeyondcorpappconnectorsv1notificationconfigcloudpubsubnotificationconfig)|false|none|Cloud Pub/Sub Configuration to receive notifications.|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig">GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectorsv1notificationconfigcloudpubsubnotificationconfig"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig"></a>
<a id="tocSgooglecloudbeyondcorpappconnectorsv1notificationconfigcloudpubsubnotificationconfig"></a>
<a id="tocsgooglecloudbeyondcorpappconnectorsv1notificationconfigcloudpubsubnotificationconfig"></a>

```json
{
  "pubsubSubscription": "string"
}
```

The configuration for Pub/Sub messaging for the AppConnector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pubsubSubscription|string|false|none|The Pub/Sub subscription the AppConnector uses to receive notifications.|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectorsV1RemoteAgentDetails">GoogleCloudBeyondcorpAppconnectorsV1RemoteAgentDetails</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectorsv1remoteagentdetails"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectorsV1RemoteAgentDetails"></a>
<a id="tocSgooglecloudbeyondcorpappconnectorsv1remoteagentdetails"></a>
<a id="tocsgooglecloudbeyondcorpappconnectorsv1remoteagentdetails"></a>

```json
{}
```

RemoteAgentDetails reflects the details of a remote agent.

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest">GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectorsv1reportstatusrequest"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest"></a>
<a id="tocSgooglecloudbeyondcorpappconnectorsv1reportstatusrequest"></a>
<a id="tocsgooglecloudbeyondcorpappconnectorsv1reportstatusrequest"></a>

```json
{
  "requestId": "string",
  "resourceInfo": {
    "id": "string",
    "resource": {
      "property1": null,
      "property2": null
    },
    "status": "HEALTH_STATUS_UNSPECIFIED",
    "sub": [
      {}
    ],
    "time": "string"
  },
  "validateOnly": true
}
```

Request report the connector status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|resourceInfo|[GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo](#schemagooglecloudbeyondcorpappconnectorsv1resourceinfo)|false|none|Required. Resource info of the connector.|
|validateOnly|boolean|false|none|Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse">GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectorsv1resolveinstanceconfigresponse"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse"></a>
<a id="tocSgooglecloudbeyondcorpappconnectorsv1resolveinstanceconfigresponse"></a>
<a id="tocsgooglecloudbeyondcorpappconnectorsv1resolveinstanceconfigresponse"></a>

```json
{
  "instanceConfig": {
    "imageConfig": {
      "stableImage": "string",
      "targetImage": "string"
    },
    "instanceConfig": {
      "property1": null,
      "property2": null
    },
    "notificationConfig": {
      "pubsubNotification": {
        "pubsubSubscription": "string"
      }
    },
    "sequenceNumber": "string"
  }
}
```

Response message for BeyondCorp.ResolveInstanceConfig.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceConfig|[GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig](#schemagooglecloudbeyondcorpappconnectorsv1appconnectorinstanceconfig)|false|none|AppConnectorInstanceConfig.|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo">GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectorsv1resourceinfo"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo"></a>
<a id="tocSgooglecloudbeyondcorpappconnectorsv1resourceinfo"></a>
<a id="tocsgooglecloudbeyondcorpappconnectorsv1resourceinfo"></a>

```json
{
  "id": "string",
  "resource": {
    "property1": null,
    "property2": null
  },
  "status": "HEALTH_STATUS_UNSPECIFIED",
  "sub": [
    {
      "id": "string",
      "resource": {
        "property1": null,
        "property2": null
      },
      "status": "HEALTH_STATUS_UNSPECIFIED",
      "sub": [
        {}
      ],
      "time": "string"
    }
  ],
  "time": "string"
}
```

ResourceInfo represents the information/status of an app connector resource. Such as: - remote_agent - container - runtime - appgateway - appconnector - appconnection - tunnel - logagent

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Required. Unique Id for the resource.|
|resource|object|false|none|Specific details for the resource. This is for internal use only.|
|status|string|false|none|Overall health status. Overall status is derived based on the status of each sub level resources.|
|sub|[[GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo](#schemagooglecloudbeyondcorpappconnectorsv1resourceinfo)]|false|none|List of Info for the sub level resources.|
|time|string(google-datetime)|false|none|The timestamp to collect the info. It is suggested to be set by the topmost level resource only.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|HEALTH_STATUS_UNSPECIFIED|
|status|HEALTHY|
|status|UNHEALTHY|
|status|UNRESPONSIVE|
|status|DEGRADED|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorOperationMetadata">GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectorsv1alphaappconnectoroperationmetadata"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorOperationMetadata"></a>
<a id="tocSgooglecloudbeyondcorpappconnectorsv1alphaappconnectoroperationmetadata"></a>
<a id="tocsgooglecloudbeyondcorpappconnectorsv1alphaappconnectoroperationmetadata"></a>

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
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|statusMessage|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectorsV1alphaContainerHealthDetails">GoogleCloudBeyondcorpAppconnectorsV1alphaContainerHealthDetails</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectorsv1alphacontainerhealthdetails"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectorsV1alphaContainerHealthDetails"></a>
<a id="tocSgooglecloudbeyondcorpappconnectorsv1alphacontainerhealthdetails"></a>
<a id="tocsgooglecloudbeyondcorpappconnectorsv1alphacontainerhealthdetails"></a>

```json
{
  "currentConfigVersion": "string",
  "errorMsg": "string",
  "expectedConfigVersion": "string",
  "extendedStatus": {
    "property1": "string",
    "property2": "string"
  }
}
```

ContainerHealthDetails reflects the health details of a container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentConfigVersion|string|false|none|The version of the current config.|
|errorMsg|string|false|none|The latest error message.|
|expectedConfigVersion|string|false|none|The version of the expected config.|
|extendedStatus|object|false|none|The extended status. Such as ExitCode, StartedAt, FinishedAt, etc.|

<h2 id="tocS_GoogleCloudBeyondcorpAppconnectorsV1alphaRemoteAgentDetails">GoogleCloudBeyondcorpAppconnectorsV1alphaRemoteAgentDetails</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappconnectorsv1alpharemoteagentdetails"></a>
<a id="schema_GoogleCloudBeyondcorpAppconnectorsV1alphaRemoteAgentDetails"></a>
<a id="tocSgooglecloudbeyondcorpappconnectorsv1alpharemoteagentdetails"></a>
<a id="tocsgooglecloudbeyondcorpappconnectorsv1alpharemoteagentdetails"></a>

```json
{}
```

RemoteAgentDetails reflects the details of a remote agent.

<h2 id="tocS_GoogleCloudBeyondcorpAppgatewaysV1alphaAppGatewayOperationMetadata">GoogleCloudBeyondcorpAppgatewaysV1alphaAppGatewayOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpappgatewaysv1alphaappgatewayoperationmetadata"></a>
<a id="schema_GoogleCloudBeyondcorpAppgatewaysV1alphaAppGatewayOperationMetadata"></a>
<a id="tocSgooglecloudbeyondcorpappgatewaysv1alphaappgatewayoperationmetadata"></a>
<a id="tocsgooglecloudbeyondcorpappgatewaysv1alphaappgatewayoperationmetadata"></a>

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
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|statusMessage|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_GoogleCloudBeyondcorpClientconnectorservicesV1alphaClientConnectorServiceOperationMetadata">GoogleCloudBeyondcorpClientconnectorservicesV1alphaClientConnectorServiceOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpclientconnectorservicesv1alphaclientconnectorserviceoperationmetadata"></a>
<a id="schema_GoogleCloudBeyondcorpClientconnectorservicesV1alphaClientConnectorServiceOperationMetadata"></a>
<a id="tocSgooglecloudbeyondcorpclientconnectorservicesv1alphaclientconnectorserviceoperationmetadata"></a>
<a id="tocsgooglecloudbeyondcorpclientconnectorservicesv1alphaclientconnectorserviceoperationmetadata"></a>

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
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|statusMessage|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_GoogleCloudBeyondcorpClientgatewaysV1alphaClientGatewayOperationMetadata">GoogleCloudBeyondcorpClientgatewaysV1alphaClientGatewayOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpclientgatewaysv1alphaclientgatewayoperationmetadata"></a>
<a id="schema_GoogleCloudBeyondcorpClientgatewaysV1alphaClientGatewayOperationMetadata"></a>
<a id="tocSgooglecloudbeyondcorpclientgatewaysv1alphaclientgatewayoperationmetadata"></a>
<a id="tocsgooglecloudbeyondcorpclientgatewaysv1alphaclientgatewayoperationmetadata"></a>

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

<h2 id="tocS_GoogleCloudBeyondcorpConnectionsV1alphaConnectionOperationMetadata">GoogleCloudBeyondcorpConnectionsV1alphaConnectionOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpconnectionsv1alphaconnectionoperationmetadata"></a>
<a id="schema_GoogleCloudBeyondcorpConnectionsV1alphaConnectionOperationMetadata"></a>
<a id="tocSgooglecloudbeyondcorpconnectionsv1alphaconnectionoperationmetadata"></a>
<a id="tocsgooglecloudbeyondcorpconnectionsv1alphaconnectionoperationmetadata"></a>

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
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|statusMessage|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_GoogleCloudBeyondcorpConnectorsV1alphaConnectorOperationMetadata">GoogleCloudBeyondcorpConnectorsV1alphaConnectorOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpconnectorsv1alphaconnectoroperationmetadata"></a>
<a id="schema_GoogleCloudBeyondcorpConnectorsV1alphaConnectorOperationMetadata"></a>
<a id="tocSgooglecloudbeyondcorpconnectorsv1alphaconnectoroperationmetadata"></a>
<a id="tocsgooglecloudbeyondcorpconnectorsv1alphaconnectoroperationmetadata"></a>

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
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|statusMessage|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_GoogleCloudBeyondcorpConnectorsV1alphaContainerHealthDetails">GoogleCloudBeyondcorpConnectorsV1alphaContainerHealthDetails</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpconnectorsv1alphacontainerhealthdetails"></a>
<a id="schema_GoogleCloudBeyondcorpConnectorsV1alphaContainerHealthDetails"></a>
<a id="tocSgooglecloudbeyondcorpconnectorsv1alphacontainerhealthdetails"></a>
<a id="tocsgooglecloudbeyondcorpconnectorsv1alphacontainerhealthdetails"></a>

```json
{
  "currentConfigVersion": "string",
  "errorMsg": "string",
  "expectedConfigVersion": "string",
  "extendedStatus": {
    "property1": "string",
    "property2": "string"
  }
}
```

ContainerHealthDetails reflects the health details of a container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentConfigVersion|string|false|none|The version of the current config.|
|errorMsg|string|false|none|The latest error message.|
|expectedConfigVersion|string|false|none|The version of the expected config.|
|extendedStatus|object|false|none|The extended status. Such as ExitCode, StartedAt, FinishedAt, etc.|

<h2 id="tocS_GoogleCloudBeyondcorpConnectorsV1alphaRemoteAgentDetails">GoogleCloudBeyondcorpConnectorsV1alphaRemoteAgentDetails</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudbeyondcorpconnectorsv1alpharemoteagentdetails"></a>
<a id="schema_GoogleCloudBeyondcorpConnectorsV1alphaRemoteAgentDetails"></a>
<a id="tocSgooglecloudbeyondcorpconnectorsv1alpharemoteagentdetails"></a>
<a id="tocsgooglecloudbeyondcorpconnectorsv1alpharemoteagentdetails"></a>

```json
{}
```

RemoteAgentDetails reflects the details of a remote agent.

<h2 id="tocS_GoogleCloudLocationListLocationsResponse">GoogleCloudLocationListLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudlocationlistlocationsresponse"></a>
<a id="schema_GoogleCloudLocationListLocationsResponse"></a>
<a id="tocSgooglecloudlocationlistlocationsresponse"></a>
<a id="tocsgooglecloudlocationlistlocationsresponse"></a>

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
|locations|[[GoogleCloudLocationLocation](#schemagooglecloudlocationlocation)]|false|none|A list of locations that matches the specified filter in the request.|
|nextPageToken|string|false|none|The standard List next-page token.|

<h2 id="tocS_GoogleCloudLocationLocation">GoogleCloudLocationLocation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudlocationlocation"></a>
<a id="schema_GoogleCloudLocationLocation"></a>
<a id="tocSgooglecloudlocationlocation"></a>
<a id="tocsgooglecloudlocationlocation"></a>

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

<h2 id="tocS_GoogleIamV1AuditConfig">GoogleIamV1AuditConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1auditconfig"></a>
<a id="schema_GoogleIamV1AuditConfig"></a>
<a id="tocSgoogleiamv1auditconfig"></a>
<a id="tocsgoogleiamv1auditconfig"></a>

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
|auditLogConfigs|[[GoogleIamV1AuditLogConfig](#schemagoogleiamv1auditlogconfig)]|false|none|The configuration for logging of each type of permission.|
|service|string|false|none|Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.|

<h2 id="tocS_GoogleIamV1AuditLogConfig">GoogleIamV1AuditLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1auditlogconfig"></a>
<a id="schema_GoogleIamV1AuditLogConfig"></a>
<a id="tocSgoogleiamv1auditlogconfig"></a>
<a id="tocsgoogleiamv1auditlogconfig"></a>

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

<h2 id="tocS_GoogleIamV1Binding">GoogleIamV1Binding</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1binding"></a>
<a id="schema_GoogleIamV1Binding"></a>
<a id="tocSgoogleiamv1binding"></a>
<a id="tocsgoogleiamv1binding"></a>

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
|condition|[GoogleTypeExpr](#schemagoogletypeexpr)|false|none|The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.|
|role|string|false|none|Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.|

<h2 id="tocS_GoogleIamV1Policy">GoogleIamV1Policy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1policy"></a>
<a id="schema_GoogleIamV1Policy"></a>
<a id="tocSgoogleiamv1policy"></a>
<a id="tocsgoogleiamv1policy"></a>

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
|auditConfigs|[[GoogleIamV1AuditConfig](#schemagoogleiamv1auditconfig)]|false|none|Specifies cloud audit logging configuration for this policy.|
|bindings|[[GoogleIamV1Binding](#schemagoogleiamv1binding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_GoogleIamV1SetIamPolicyRequest">GoogleIamV1SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1setiampolicyrequest"></a>
<a id="schema_GoogleIamV1SetIamPolicyRequest"></a>
<a id="tocSgoogleiamv1setiampolicyrequest"></a>
<a id="tocsgoogleiamv1setiampolicyrequest"></a>

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
|policy|[GoogleIamV1Policy](#schemagoogleiamv1policy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|updateMask|string(google-fieldmask)|false|none|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

<h2 id="tocS_GoogleIamV1TestIamPermissionsRequest">GoogleIamV1TestIamPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1testiampermissionsrequest"></a>
<a id="schema_GoogleIamV1TestIamPermissionsRequest"></a>
<a id="tocSgoogleiamv1testiampermissionsrequest"></a>
<a id="tocsgoogleiamv1testiampermissionsrequest"></a>

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

<h2 id="tocS_GoogleIamV1TestIamPermissionsResponse">GoogleIamV1TestIamPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1testiampermissionsresponse"></a>
<a id="schema_GoogleIamV1TestIamPermissionsResponse"></a>
<a id="tocSgoogleiamv1testiampermissionsresponse"></a>
<a id="tocsgoogleiamv1testiampermissionsresponse"></a>

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

<h2 id="tocS_GoogleTypeExpr">GoogleTypeExpr</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypeexpr"></a>
<a id="schema_GoogleTypeExpr"></a>
<a id="tocSgoogletypeexpr"></a>
<a id="tocsgoogletypeexpr"></a>

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

<h2 id="tocS_ListAppGatewaysResponse">ListAppGatewaysResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistappgatewaysresponse"></a>
<a id="schema_ListAppGatewaysResponse"></a>
<a id="tocSlistappgatewaysresponse"></a>
<a id="tocslistappgatewaysresponse"></a>

```json
{
  "appGateways": [
    {
      "allocatedConnections": [
        {
          "ingressPort": 0,
          "pscUri": "string"
        }
      ],
      "createTime": "string",
      "displayName": "string",
      "hostType": "HOST_TYPE_UNSPECIFIED",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "type": "TYPE_UNSPECIFIED",
      "uid": "string",
      "updateTime": "string",
      "uri": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for BeyondCorp.ListAppGateways.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appGateways|[[AppGateway](#schemaappgateway)]|false|none|A list of BeyondCorp AppGateways in the project.|
|nextPageToken|string|false|none|A token to retrieve the next page of results, or empty if there are no more results in the list.|
|unreachable|[string]|false|none|A list of locations that could not be reached.|

<h2 id="tocS_Tunnelv1ProtoTunnelerError">Tunnelv1ProtoTunnelerError</h2>
<!-- backwards compatibility -->
<a id="schematunnelv1prototunnelererror"></a>
<a id="schema_Tunnelv1ProtoTunnelerError"></a>
<a id="tocStunnelv1prototunnelererror"></a>
<a id="tocstunnelv1prototunnelererror"></a>

```json
{
  "err": "string",
  "retryable": true
}
```

TunnelerError is an error proto for errors returned by the connection manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|err|string|false|none|Original raw error|
|retryable|boolean|false|none|retryable isn't used for now, but we may want to reuse it in the future.|

<h2 id="tocS_Tunnelv1ProtoTunnelerInfo">Tunnelv1ProtoTunnelerInfo</h2>
<!-- backwards compatibility -->
<a id="schematunnelv1prototunnelerinfo"></a>
<a id="schema_Tunnelv1ProtoTunnelerInfo"></a>
<a id="tocStunnelv1prototunnelerinfo"></a>
<a id="tocstunnelv1prototunnelerinfo"></a>

```json
{
  "backoffRetryCount": 0,
  "id": "string",
  "latestErr": {
    "err": "string",
    "retryable": true
  },
  "latestRetryTime": "string",
  "totalRetryCount": 0
}
```

TunnelerInfo contains metadata about tunneler launched by connection manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backoffRetryCount|integer(uint32)|false|none|backoff_retry_count stores the number of times the tunneler has been retried by tunManager for current backoff sequence. Gets reset to 0 if time difference between 2 consecutive retries exceeds backoffRetryResetTime.|
|id|string|false|none|id is the unique id of a tunneler.|
|latestErr|[Tunnelv1ProtoTunnelerError](#schematunnelv1prototunnelererror)|false|none|latest_err stores the Error for the latest tunneler failure. Gets reset everytime the tunneler is retried by tunManager.|
|latestRetryTime|string(google-datetime)|false|none|latest_retry_time stores the time when the tunneler was last restarted.|
|totalRetryCount|integer(uint32)|false|none|total_retry_count stores the total number of times the tunneler has been retried by tunManager.|
