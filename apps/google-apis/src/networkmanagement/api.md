<h1 id="network-management-api">Network Management API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Network Management API provides a collection of network performance monitoring and diagnostic capabilities.

Base URLs:

* <a href="https://networkmanagement.googleapis.com/">https://networkmanagement.googleapis.com/</a>

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

<h1 id="network-management-api-projects">projects</h1>

## networkmanagement.projects.locations.global.operations.get

<a id="opIdnetworkmanagement.projects.locations.global.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="networkmanagementprojectslocationsglobaloperationsget-parameters">Parameters</h3>

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

<h3 id="networkmanagementprojectslocationsglobaloperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkmanagement.projects.locations.global.operations.delete

<a id="opIdnetworkmanagement.projects.locations.global.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="networkmanagementprojectslocationsglobaloperationsdelete-parameters">Parameters</h3>

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

<h3 id="networkmanagementprojectslocationsglobaloperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkmanagement.projects.locations.global.connectivityTests.patch

<a id="opIdnetworkmanagement.projects.locations.global.connectivityTests.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "destination": {
      "appEngineVersion": {
        "uri": "string"
      },
      "cloudFunction": {
        "uri": "string"
      },
      "cloudRunRevision": {
        "uri": "string"
      },
      "cloudSqlInstance": "string",
      "forwardingRule": "string",
      "gkeMasterCluster": "string",
      "instance": "string",
      "ipAddress": "string",
      "network": "string",
      "networkType": "NETWORK_TYPE_UNSPECIFIED",
      "port": 0,
      "projectId": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "protocol": "string",
    "relatedProjects": [
      "string"
    ],
    "source": {
      "appEngineVersion": {
        "uri": "string"
      },
      "cloudFunction": {
        "uri": "string"
      },
      "cloudRunRevision": {
        "uri": "string"
      },
      "cloudSqlInstance": "string",
      "forwardingRule": "string",
      "gkeMasterCluster": "string",
      "instance": "string",
      "ipAddress": "string",
      "network": "string",
      "networkType": "NETWORK_TYPE_UNSPECIFIED",
      "port": 0,
      "projectId": "string"
    }
  }'
```

`PATCH /v1beta1/{name}`

Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.

> Body parameter

```json
{
  "description": "string",
  "destination": {
    "appEngineVersion": {
      "uri": "string"
    },
    "cloudFunction": {
      "uri": "string"
    },
    "cloudRunRevision": {
      "uri": "string"
    },
    "cloudSqlInstance": "string",
    "forwardingRule": "string",
    "gkeMasterCluster": "string",
    "instance": "string",
    "ipAddress": "string",
    "network": "string",
    "networkType": "NETWORK_TYPE_UNSPECIFIED",
    "port": 0,
    "projectId": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "protocol": "string",
  "relatedProjects": [
    "string"
  ],
  "source": {
    "appEngineVersion": {
      "uri": "string"
    },
    "cloudFunction": {
      "uri": "string"
    },
    "cloudRunRevision": {
      "uri": "string"
    },
    "cloudSqlInstance": "string",
    "forwardingRule": "string",
    "gkeMasterCluster": "string",
    "instance": "string",
    "ipAddress": "string",
    "network": "string",
    "networkType": "NETWORK_TYPE_UNSPECIFIED",
    "port": 0,
    "projectId": "string"
  }
}
```

<h3 id="networkmanagementprojectslocationsglobalconnectivitytestspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test}`|
|updateMask|query|string|false|Required. Mask of fields to update. At least one path must be supplied in this field.|
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
|body|body|[ConnectivityTest](#schemaconnectivitytest)|false|none|
|» description|body|string|false|The user-supplied description of the Connectivity Test. Maximum of 512 characters.|
|» destination|body|[Endpoint](#schemaendpoint)|false|Required. Destination specification of the Connectivity Test. You can use a combination of destination IP address, Compute Engine VM instance, or VPC network to uniquely identify the destination location. Even if the destination IP address is not unique, the source IP location is unique. Usually, the analysis can infer the destination endpoint from route information. If the destination you specify is a VM instance and the instance has multiple network interfaces, then you must also specify either a destination IP address or VPC network to identify the destination interface. A reachability analysis proceeds even if the destination location is ambiguous. However, the result can include endpoints that you don't intend to test.|
|» labels|body|object|false|Resource labels to represent user-provided metadata.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Required. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test}`|
|» protocol|body|string|false|IP Protocol of the test. When not provided, "TCP" is assumed.|
|» relatedProjects|body|[string]|false|Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.|
|» source|body|[Endpoint](#schemaendpoint)|false|Required. Source specification of the Connectivity Test. You can use a combination of source IP address, virtual machine (VM) instance, or Compute Engine network to uniquely identify the source location. Examples: If the source IP address is an internal IP address within a Google Cloud Virtual Private Cloud (VPC) network, then you must also specify the VPC network. Otherwise, specify the VM instance, which already contains its internal IP address and VPC network information. If the source of the test is within an on-premises network, then you must provide the destination VPC network. If the source endpoint is a Compute Engine VM instance with multiple network interfaces, the instance itself is not sufficient to identify the endpoint. So, you must also specify the source IP address or VPC network. A reachability analysis proceeds even if the source location is ambiguous. However, the test result may include endpoints that you don't intend to test.|

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

<h3 id="networkmanagementprojectslocationsglobalconnectivitytestspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkmanagement.projects.locations.list

<a id="opIdnetworkmanagement.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="networkmanagementprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="networkmanagementprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkmanagement.projects.locations.global.operations.list

<a id="opIdnetworkmanagement.projects.locations.global.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="networkmanagementprojectslocationsglobaloperationslist-parameters">Parameters</h3>

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

<h3 id="networkmanagementprojectslocationsglobaloperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkmanagement.projects.locations.global.operations.cancel

<a id="opIdnetworkmanagement.projects.locations.global.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="networkmanagementprojectslocationsglobaloperationscancel-parameters">Parameters</h3>

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

<h3 id="networkmanagementprojectslocationsglobaloperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkmanagement.projects.locations.global.connectivityTests.rerun

<a id="opIdnetworkmanagement.projects.locations.global.connectivityTests.rerun"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:rerun \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:rerun`

Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.

> Body parameter

```json
{}
```

<h3 id="networkmanagementprojectslocationsglobalconnectivitytestsrerun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Connectivity Test resource name using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}`|
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
|body|body|[RerunConnectivityTestRequest](#schemarerunconnectivitytestrequest)|false|none|

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

<h3 id="networkmanagementprojectslocationsglobalconnectivitytestsrerun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkmanagement.projects.locations.global.connectivityTests.list

<a id="opIdnetworkmanagement.projects.locations.global.connectivityTests.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/connectivityTests \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/connectivityTests`

Lists all Connectivity Tests owned by a project.

<h3 id="networkmanagementprojectslocationsglobalconnectivitytestslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the Connectivity Tests: `projects/{project_id}/locations/global`|
|filter|query|string|false|Lists the `ConnectivityTests` that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form ` ` where operators: `<`, `>`, `<=`, `>=`, `!=`, `=`, `:` are supported (colon `:` represents a HAS operator which is roughly synonymous with equality). can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/proj-1/locations/global/connectivityTests/test-1 - Filter by labels: - Resources that have a key called `foo` labels.foo:* - Resources that have a key called `foo` whose value is `bar` labels.foo = bar|
|orderBy|query|string|false|Field to use to sort the list.|
|pageSize|query|integer|false|Number of `ConnectivityTests` to return.|
|pageToken|query|string|false|Page token from an earlier query, as returned in `next_page_token`.|
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
  "resources": [
    {
      "createTime": "string",
      "description": "string",
      "destination": {
        "appEngineVersion": {
          "uri": "string"
        },
        "cloudFunction": {
          "uri": "string"
        },
        "cloudRunRevision": {
          "uri": "string"
        },
        "cloudSqlInstance": "string",
        "forwardingRule": "string",
        "forwardingRuleTarget": "FORWARDING_RULE_TARGET_UNSPECIFIED",
        "gkeMasterCluster": "string",
        "instance": "string",
        "ipAddress": "string",
        "loadBalancerId": "string",
        "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED",
        "network": "string",
        "networkType": "NETWORK_TYPE_UNSPECIFIED",
        "port": 0,
        "projectId": "string"
      },
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "probingDetails": {
        "abortCause": "PROBING_ABORT_CAUSE_UNSPECIFIED",
        "destinationEgressLocation": {
          "metropolitanArea": "string"
        },
        "endpointInfo": {
          "destinationIp": "string",
          "destinationNetworkUri": "string",
          "destinationPort": 0,
          "protocol": "string",
          "sourceAgentUri": "string",
          "sourceIp": "string",
          "sourceNetworkUri": "string",
          "sourcePort": 0
        },
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
        "probingLatency": {
          "latencyPercentiles": [
            {
              "latencyMicros": "string",
              "percent": 0
            }
          ]
        },
        "result": "PROBING_RESULT_UNSPECIFIED",
        "sentProbeCount": 0,
        "successfulProbeCount": 0,
        "verifyTime": "string"
      },
      "protocol": "string",
      "reachabilityDetails": {
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
        "result": "RESULT_UNSPECIFIED",
        "traces": [
          {
            "endpointInfo": {
              "destinationIp": "string",
              "destinationNetworkUri": "string",
              "destinationPort": 0,
              "protocol": "string",
              "sourceAgentUri": "string",
              "sourceIp": "string",
              "sourceNetworkUri": "string",
              "sourcePort": 0
            },
            "steps": [
              {
                "abort": {
                  "cause": "CAUSE_UNSPECIFIED",
                  "projectsMissingPermission": [
                    "string"
                  ],
                  "resourceUri": "string"
                },
                "appEngineVersion": {
                  "displayName": "string",
                  "environment": "string",
                  "runtime": "string",
                  "uri": "string"
                },
                "causesDrop": true,
                "cloudFunction": {
                  "displayName": "string",
                  "location": "string",
                  "uri": "string",
                  "versionId": "string"
                },
                "cloudRunRevision": {
                  "displayName": "string",
                  "location": "string",
                  "serviceName": "string",
                  "serviceUri": "string",
                  "uri": "string"
                },
                "cloudSqlInstance": {
                  "displayName": "string",
                  "externalIp": "string",
                  "internalIp": "string",
                  "networkUri": "string",
                  "region": "string",
                  "uri": "string"
                },
                "deliver": {
                  "resourceUri": "string",
                  "target": "TARGET_UNSPECIFIED"
                },
                "description": "string",
                "drop": {
                  "cause": "CAUSE_UNSPECIFIED",
                  "resourceUri": "string"
                },
                "endpoint": {
                  "destinationIp": "string",
                  "destinationNetworkUri": "string",
                  "destinationPort": 0,
                  "protocol": "string",
                  "sourceAgentUri": "string",
                  "sourceIp": "string",
                  "sourceNetworkUri": "string",
                  "sourcePort": 0
                },
                "firewall": {
                  "action": "string",
                  "direction": "string",
                  "displayName": "string",
                  "firewallRuleType": "FIREWALL_RULE_TYPE_UNSPECIFIED",
                  "networkUri": "string",
                  "policy": "string",
                  "priority": 0,
                  "targetServiceAccounts": [
                    "string"
                  ],
                  "targetTags": [
                    "string"
                  ],
                  "uri": "string"
                },
                "forward": {
                  "resourceUri": "string",
                  "target": "TARGET_UNSPECIFIED"
                },
                "forwardingRule": {
                  "displayName": "string",
                  "matchedPortRange": "string",
                  "matchedProtocol": "string",
                  "networkUri": "string",
                  "target": "string",
                  "uri": "string",
                  "vip": "string"
                },
                "gkeMaster": {
                  "clusterNetworkUri": "string",
                  "clusterUri": "string",
                  "externalIp": "string",
                  "internalIp": "string"
                },
                "instance": {
                  "displayName": "string",
                  "externalIp": "string",
                  "interface": "string",
                  "internalIp": "string",
                  "networkTags": [
                    "string"
                  ],
                  "networkUri": "string",
                  "serviceAccount": "string",
                  "uri": "string"
                },
                "loadBalancer": {
                  "backendType": "BACKEND_TYPE_UNSPECIFIED",
                  "backendUri": "string",
                  "backends": [
                    {
                      "displayName": "string",
                      "healthCheckAllowingFirewallRules": [
                        "string"
                      ],
                      "healthCheckBlockingFirewallRules": [
                        "string"
                      ],
                      "healthCheckFirewallState": "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                      "uri": "string"
                    }
                  ],
                  "healthCheckUri": "string",
                  "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
                },
                "network": {
                  "displayName": "string",
                  "matchedIpRange": "string",
                  "uri": "string"
                },
                "projectId": "string",
                "route": {
                  "destIpRange": "string",
                  "destPortRanges": [
                    "string"
                  ],
                  "displayName": "string",
                  "instanceTags": [
                    "string"
                  ],
                  "networkUri": "string",
                  "nextHop": "string",
                  "nextHopType": "NEXT_HOP_TYPE_UNSPECIFIED",
                  "priority": 0,
                  "protocols": [
                    "string"
                  ],
                  "routeType": "ROUTE_TYPE_UNSPECIFIED",
                  "srcIpRange": "string",
                  "srcPortRanges": [
                    "string"
                  ],
                  "uri": "string"
                },
                "state": "STATE_UNSPECIFIED",
                "vpcConnector": {
                  "displayName": "string",
                  "location": "string",
                  "uri": "string"
                },
                "vpnGateway": {
                  "displayName": "string",
                  "ipAddress": "string",
                  "networkUri": "string",
                  "region": "string",
                  "uri": "string",
                  "vpnTunnelUri": "string"
                },
                "vpnTunnel": {
                  "displayName": "string",
                  "networkUri": "string",
                  "region": "string",
                  "remoteGateway": "string",
                  "remoteGatewayIp": "string",
                  "routingType": "ROUTING_TYPE_UNSPECIFIED",
                  "sourceGateway": "string",
                  "sourceGatewayIp": "string",
                  "uri": "string"
                }
              }
            ]
          }
        ],
        "verifyTime": "string"
      },
      "relatedProjects": [
        "string"
      ],
      "source": {
        "appEngineVersion": {
          "uri": "string"
        },
        "cloudFunction": {
          "uri": "string"
        },
        "cloudRunRevision": {
          "uri": "string"
        },
        "cloudSqlInstance": "string",
        "forwardingRule": "string",
        "forwardingRuleTarget": "FORWARDING_RULE_TARGET_UNSPECIFIED",
        "gkeMasterCluster": "string",
        "instance": "string",
        "ipAddress": "string",
        "loadBalancerId": "string",
        "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED",
        "network": "string",
        "networkType": "NETWORK_TYPE_UNSPECIFIED",
        "port": 0,
        "projectId": "string"
      },
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="networkmanagementprojectslocationsglobalconnectivitytestslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListConnectivityTestsResponse](#schemalistconnectivitytestsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkmanagement.projects.locations.global.connectivityTests.create

<a id="opIdnetworkmanagement.projects.locations.global.connectivityTests.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/connectivityTests \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "destination": {
      "appEngineVersion": {
        "uri": "string"
      },
      "cloudFunction": {
        "uri": "string"
      },
      "cloudRunRevision": {
        "uri": "string"
      },
      "cloudSqlInstance": "string",
      "forwardingRule": "string",
      "gkeMasterCluster": "string",
      "instance": "string",
      "ipAddress": "string",
      "network": "string",
      "networkType": "NETWORK_TYPE_UNSPECIFIED",
      "port": 0,
      "projectId": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "protocol": "string",
    "relatedProjects": [
      "string"
    ],
    "source": {
      "appEngineVersion": {
        "uri": "string"
      },
      "cloudFunction": {
        "uri": "string"
      },
      "cloudRunRevision": {
        "uri": "string"
      },
      "cloudSqlInstance": "string",
      "forwardingRule": "string",
      "gkeMasterCluster": "string",
      "instance": "string",
      "ipAddress": "string",
      "network": "string",
      "networkType": "NETWORK_TYPE_UNSPECIFIED",
      "port": 0,
      "projectId": "string"
    }
  }'
```

`POST /v1beta1/{parent}/connectivityTests`

Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.

> Body parameter

```json
{
  "description": "string",
  "destination": {
    "appEngineVersion": {
      "uri": "string"
    },
    "cloudFunction": {
      "uri": "string"
    },
    "cloudRunRevision": {
      "uri": "string"
    },
    "cloudSqlInstance": "string",
    "forwardingRule": "string",
    "gkeMasterCluster": "string",
    "instance": "string",
    "ipAddress": "string",
    "network": "string",
    "networkType": "NETWORK_TYPE_UNSPECIFIED",
    "port": 0,
    "projectId": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "protocol": "string",
  "relatedProjects": [
    "string"
  ],
  "source": {
    "appEngineVersion": {
      "uri": "string"
    },
    "cloudFunction": {
      "uri": "string"
    },
    "cloudRunRevision": {
      "uri": "string"
    },
    "cloudSqlInstance": "string",
    "forwardingRule": "string",
    "gkeMasterCluster": "string",
    "instance": "string",
    "ipAddress": "string",
    "network": "string",
    "networkType": "NETWORK_TYPE_UNSPECIFIED",
    "port": 0,
    "projectId": "string"
  }
}
```

<h3 id="networkmanagementprojectslocationsglobalconnectivitytestscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the Connectivity Test to create: `projects/{project_id}/locations/global`|
|testId|query|string|false|Required. The logical name of the Connectivity Test in your project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project|
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
|body|body|[ConnectivityTest](#schemaconnectivitytest)|false|none|
|» description|body|string|false|The user-supplied description of the Connectivity Test. Maximum of 512 characters.|
|» destination|body|[Endpoint](#schemaendpoint)|false|Required. Destination specification of the Connectivity Test. You can use a combination of destination IP address, Compute Engine VM instance, or VPC network to uniquely identify the destination location. Even if the destination IP address is not unique, the source IP location is unique. Usually, the analysis can infer the destination endpoint from route information. If the destination you specify is a VM instance and the instance has multiple network interfaces, then you must also specify either a destination IP address or VPC network to identify the destination interface. A reachability analysis proceeds even if the destination location is ambiguous. However, the result can include endpoints that you don't intend to test.|
|» labels|body|object|false|Resource labels to represent user-provided metadata.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Required. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test}`|
|» protocol|body|string|false|IP Protocol of the test. When not provided, "TCP" is assumed.|
|» relatedProjects|body|[string]|false|Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.|
|» source|body|[Endpoint](#schemaendpoint)|false|Required. Source specification of the Connectivity Test. You can use a combination of source IP address, virtual machine (VM) instance, or Compute Engine network to uniquely identify the source location. Examples: If the source IP address is an internal IP address within a Google Cloud Virtual Private Cloud (VPC) network, then you must also specify the VPC network. Otherwise, specify the VM instance, which already contains its internal IP address and VPC network information. If the source of the test is within an on-premises network, then you must provide the destination VPC network. If the source endpoint is a Compute Engine VM instance with multiple network interfaces, the instance itself is not sufficient to identify the endpoint. So, you must also specify the source IP address or VPC network. A reachability analysis proceeds even if the source location is ambiguous. However, the test result may include endpoints that you don't intend to test.|

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

<h3 id="networkmanagementprojectslocationsglobalconnectivitytestscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkmanagement.projects.locations.global.connectivityTests.getIamPolicy

<a id="opIdnetworkmanagement.projects.locations.global.connectivityTests.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="networkmanagementprojectslocationsglobalconnectivitytestsgetiampolicy-parameters">Parameters</h3>

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

<h3 id="networkmanagementprojectslocationsglobalconnectivitytestsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkmanagement.projects.locations.global.connectivityTests.setIamPolicy

<a id="opIdnetworkmanagement.projects.locations.global.connectivityTests.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setIamPolicy \
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

`POST /v1beta1/{resource}:setIamPolicy`

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

<h3 id="networkmanagementprojectslocationsglobalconnectivitytestssetiampolicy-parameters">Parameters</h3>

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

<h3 id="networkmanagementprojectslocationsglobalconnectivitytestssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkmanagement.projects.locations.global.connectivityTests.testIamPermissions

<a id="opIdnetworkmanagement.projects.locations.global.connectivityTests.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:testIamPermissions \
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

`POST /v1beta1/{resource}:testIamPermissions`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="networkmanagementprojectslocationsglobalconnectivityteststestiampermissions-parameters">Parameters</h3>

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

<h3 id="networkmanagementprojectslocationsglobalconnectivityteststestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AbortInfo">AbortInfo</h2>
<!-- backwards compatibility -->
<a id="schemaabortinfo"></a>
<a id="schema_AbortInfo"></a>
<a id="tocSabortinfo"></a>
<a id="tocsabortinfo"></a>

```json
{
  "cause": "CAUSE_UNSPECIFIED",
  "projectsMissingPermission": [
    "string"
  ],
  "resourceUri": "string"
}
```

Details of the final state "abort" and associated resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cause|string|false|none|Causes that the analysis is aborted.|
|projectsMissingPermission|[string]|false|none|List of project IDs that the user has specified in the request but does not have permission to access network configs. Analysis is aborted in this case with the PERMISSION_DENIED cause.|
|resourceUri|string|false|none|URI of the resource that caused the abort.|

#### Enumerated Values

|Property|Value|
|---|---|
|cause|CAUSE_UNSPECIFIED|
|cause|UNKNOWN_NETWORK|
|cause|UNKNOWN_IP|
|cause|UNKNOWN_PROJECT|
|cause|PERMISSION_DENIED|
|cause|NO_SOURCE_LOCATION|
|cause|INVALID_ARGUMENT|
|cause|NO_EXTERNAL_IP|
|cause|UNINTENDED_DESTINATION|
|cause|TRACE_TOO_LONG|
|cause|INTERNAL_ERROR|
|cause|SOURCE_ENDPOINT_NOT_FOUND|
|cause|MISMATCHED_SOURCE_NETWORK|
|cause|DESTINATION_ENDPOINT_NOT_FOUND|
|cause|MISMATCHED_DESTINATION_NETWORK|
|cause|UNSUPPORTED|
|cause|MISMATCHED_IP_VERSION|
|cause|GKE_KONNECTIVITY_PROXY_UNSUPPORTED|

<h2 id="tocS_AppEngineVersionEndpoint">AppEngineVersionEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaappengineversionendpoint"></a>
<a id="schema_AppEngineVersionEndpoint"></a>
<a id="tocSappengineversionendpoint"></a>
<a id="tocsappengineversionendpoint"></a>

```json
{
  "uri": "string"
}
```

Wrapper for app engine service version attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|An [App Engine](https://cloud.google.com/appengine) [service version](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions) name.|

<h2 id="tocS_AppEngineVersionInfo">AppEngineVersionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaappengineversioninfo"></a>
<a id="schema_AppEngineVersionInfo"></a>
<a id="tocSappengineversioninfo"></a>
<a id="tocsappengineversioninfo"></a>

```json
{
  "displayName": "string",
  "environment": "string",
  "runtime": "string",
  "uri": "string"
}
```

For display only. Metadata associated with an App Engine version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Name of an App Engine version.|
|environment|string|false|none|App Engine execution environment for a version.|
|runtime|string|false|none|Runtime of the App Engine version.|
|uri|string|false|none|URI of an App Engine version.|

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

<h2 id="tocS_CloudFunctionEndpoint">CloudFunctionEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemacloudfunctionendpoint"></a>
<a id="schema_CloudFunctionEndpoint"></a>
<a id="tocScloudfunctionendpoint"></a>
<a id="tocscloudfunctionendpoint"></a>

```json
{
  "uri": "string"
}
```

Wrapper for Cloud Function attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|A [Cloud Function](https://cloud.google.com/functions) name.|

<h2 id="tocS_CloudFunctionInfo">CloudFunctionInfo</h2>
<!-- backwards compatibility -->
<a id="schemacloudfunctioninfo"></a>
<a id="schema_CloudFunctionInfo"></a>
<a id="tocScloudfunctioninfo"></a>
<a id="tocscloudfunctioninfo"></a>

```json
{
  "displayName": "string",
  "location": "string",
  "uri": "string",
  "versionId": "string"
}
```

For display only. Metadata associated with a Cloud Function.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Name of a Cloud Function.|
|location|string|false|none|Location in which the Cloud Function is deployed.|
|uri|string|false|none|URI of a Cloud Function.|
|versionId|string(int64)|false|none|Latest successfully deployed version id of the Cloud Function.|

<h2 id="tocS_CloudRunRevisionEndpoint">CloudRunRevisionEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemacloudrunrevisionendpoint"></a>
<a id="schema_CloudRunRevisionEndpoint"></a>
<a id="tocScloudrunrevisionendpoint"></a>
<a id="tocscloudrunrevisionendpoint"></a>

```json
{
  "uri": "string"
}
```

Wrapper for Cloud Run revision attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|A [Cloud Run](https://cloud.google.com/run) [revision](https://cloud.google.com/run/docs/reference/rest/v1/namespaces.revisions/get) URI. The format is: projects/{project}/locations/{location}/revisions/{revision}|

<h2 id="tocS_CloudRunRevisionInfo">CloudRunRevisionInfo</h2>
<!-- backwards compatibility -->
<a id="schemacloudrunrevisioninfo"></a>
<a id="schema_CloudRunRevisionInfo"></a>
<a id="tocScloudrunrevisioninfo"></a>
<a id="tocscloudrunrevisioninfo"></a>

```json
{
  "displayName": "string",
  "location": "string",
  "serviceName": "string",
  "serviceUri": "string",
  "uri": "string"
}
```

For display only. Metadata associated with a Cloud Run revision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Name of a Cloud Run revision.|
|location|string|false|none|Location in which this revision is deployed.|
|serviceName|string|false|none|ID of Cloud Run Service this revision belongs to.|
|serviceUri|string|false|none|URI of Cloud Run service this revision belongs to.|
|uri|string|false|none|URI of a Cloud Run revision.|

<h2 id="tocS_CloudSQLInstanceInfo">CloudSQLInstanceInfo</h2>
<!-- backwards compatibility -->
<a id="schemacloudsqlinstanceinfo"></a>
<a id="schema_CloudSQLInstanceInfo"></a>
<a id="tocScloudsqlinstanceinfo"></a>
<a id="tocscloudsqlinstanceinfo"></a>

```json
{
  "displayName": "string",
  "externalIp": "string",
  "internalIp": "string",
  "networkUri": "string",
  "region": "string",
  "uri": "string"
}
```

For display only. Metadata associated with a Cloud SQL instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Name of a Cloud SQL instance.|
|externalIp|string|false|none|External IP address of a Cloud SQL instance.|
|internalIp|string|false|none|Internal IP address of a Cloud SQL instance.|
|networkUri|string|false|none|URI of a Cloud SQL instance network or empty string if the instance does not have one.|
|region|string|false|none|Region in which the Cloud SQL instance is running.|
|uri|string|false|none|URI of a Cloud SQL instance.|

<h2 id="tocS_ConnectivityTest">ConnectivityTest</h2>
<!-- backwards compatibility -->
<a id="schemaconnectivitytest"></a>
<a id="schema_ConnectivityTest"></a>
<a id="tocSconnectivitytest"></a>
<a id="tocsconnectivitytest"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "destination": {
    "appEngineVersion": {
      "uri": "string"
    },
    "cloudFunction": {
      "uri": "string"
    },
    "cloudRunRevision": {
      "uri": "string"
    },
    "cloudSqlInstance": "string",
    "forwardingRule": "string",
    "forwardingRuleTarget": "FORWARDING_RULE_TARGET_UNSPECIFIED",
    "gkeMasterCluster": "string",
    "instance": "string",
    "ipAddress": "string",
    "loadBalancerId": "string",
    "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED",
    "network": "string",
    "networkType": "NETWORK_TYPE_UNSPECIFIED",
    "port": 0,
    "projectId": "string"
  },
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "probingDetails": {
    "abortCause": "PROBING_ABORT_CAUSE_UNSPECIFIED",
    "destinationEgressLocation": {
      "metropolitanArea": "string"
    },
    "endpointInfo": {
      "destinationIp": "string",
      "destinationNetworkUri": "string",
      "destinationPort": 0,
      "protocol": "string",
      "sourceAgentUri": "string",
      "sourceIp": "string",
      "sourceNetworkUri": "string",
      "sourcePort": 0
    },
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
    "probingLatency": {
      "latencyPercentiles": [
        {
          "latencyMicros": "string",
          "percent": 0
        }
      ]
    },
    "result": "PROBING_RESULT_UNSPECIFIED",
    "sentProbeCount": 0,
    "successfulProbeCount": 0,
    "verifyTime": "string"
  },
  "protocol": "string",
  "reachabilityDetails": {
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
    "result": "RESULT_UNSPECIFIED",
    "traces": [
      {
        "endpointInfo": {
          "destinationIp": "string",
          "destinationNetworkUri": "string",
          "destinationPort": 0,
          "protocol": "string",
          "sourceAgentUri": "string",
          "sourceIp": "string",
          "sourceNetworkUri": "string",
          "sourcePort": 0
        },
        "steps": [
          {
            "abort": {
              "cause": "CAUSE_UNSPECIFIED",
              "projectsMissingPermission": [
                "string"
              ],
              "resourceUri": "string"
            },
            "appEngineVersion": {
              "displayName": "string",
              "environment": "string",
              "runtime": "string",
              "uri": "string"
            },
            "causesDrop": true,
            "cloudFunction": {
              "displayName": "string",
              "location": "string",
              "uri": "string",
              "versionId": "string"
            },
            "cloudRunRevision": {
              "displayName": "string",
              "location": "string",
              "serviceName": "string",
              "serviceUri": "string",
              "uri": "string"
            },
            "cloudSqlInstance": {
              "displayName": "string",
              "externalIp": "string",
              "internalIp": "string",
              "networkUri": "string",
              "region": "string",
              "uri": "string"
            },
            "deliver": {
              "resourceUri": "string",
              "target": "TARGET_UNSPECIFIED"
            },
            "description": "string",
            "drop": {
              "cause": "CAUSE_UNSPECIFIED",
              "resourceUri": "string"
            },
            "endpoint": {
              "destinationIp": "string",
              "destinationNetworkUri": "string",
              "destinationPort": 0,
              "protocol": "string",
              "sourceAgentUri": "string",
              "sourceIp": "string",
              "sourceNetworkUri": "string",
              "sourcePort": 0
            },
            "firewall": {
              "action": "string",
              "direction": "string",
              "displayName": "string",
              "firewallRuleType": "FIREWALL_RULE_TYPE_UNSPECIFIED",
              "networkUri": "string",
              "policy": "string",
              "priority": 0,
              "targetServiceAccounts": [
                "string"
              ],
              "targetTags": [
                "string"
              ],
              "uri": "string"
            },
            "forward": {
              "resourceUri": "string",
              "target": "TARGET_UNSPECIFIED"
            },
            "forwardingRule": {
              "displayName": "string",
              "matchedPortRange": "string",
              "matchedProtocol": "string",
              "networkUri": "string",
              "target": "string",
              "uri": "string",
              "vip": "string"
            },
            "gkeMaster": {
              "clusterNetworkUri": "string",
              "clusterUri": "string",
              "externalIp": "string",
              "internalIp": "string"
            },
            "instance": {
              "displayName": "string",
              "externalIp": "string",
              "interface": "string",
              "internalIp": "string",
              "networkTags": [
                "string"
              ],
              "networkUri": "string",
              "serviceAccount": "string",
              "uri": "string"
            },
            "loadBalancer": {
              "backendType": "BACKEND_TYPE_UNSPECIFIED",
              "backendUri": "string",
              "backends": [
                {
                  "displayName": "string",
                  "healthCheckAllowingFirewallRules": [
                    "string"
                  ],
                  "healthCheckBlockingFirewallRules": [
                    "string"
                  ],
                  "healthCheckFirewallState": "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                  "uri": "string"
                }
              ],
              "healthCheckUri": "string",
              "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
            },
            "network": {
              "displayName": "string",
              "matchedIpRange": "string",
              "uri": "string"
            },
            "projectId": "string",
            "route": {
              "destIpRange": "string",
              "destPortRanges": [
                "string"
              ],
              "displayName": "string",
              "instanceTags": [
                "string"
              ],
              "networkUri": "string",
              "nextHop": "string",
              "nextHopType": "NEXT_HOP_TYPE_UNSPECIFIED",
              "priority": 0,
              "protocols": [
                "string"
              ],
              "routeType": "ROUTE_TYPE_UNSPECIFIED",
              "srcIpRange": "string",
              "srcPortRanges": [
                "string"
              ],
              "uri": "string"
            },
            "state": "STATE_UNSPECIFIED",
            "vpcConnector": {
              "displayName": "string",
              "location": "string",
              "uri": "string"
            },
            "vpnGateway": {
              "displayName": "string",
              "ipAddress": "string",
              "networkUri": "string",
              "region": "string",
              "uri": "string",
              "vpnTunnelUri": "string"
            },
            "vpnTunnel": {
              "displayName": "string",
              "networkUri": "string",
              "region": "string",
              "remoteGateway": "string",
              "remoteGatewayIp": "string",
              "routingType": "ROUTING_TYPE_UNSPECIFIED",
              "sourceGateway": "string",
              "sourceGatewayIp": "string",
              "uri": "string"
            }
          }
        ]
      }
    ],
    "verifyTime": "string"
  },
  "relatedProjects": [
    "string"
  ],
  "source": {
    "appEngineVersion": {
      "uri": "string"
    },
    "cloudFunction": {
      "uri": "string"
    },
    "cloudRunRevision": {
      "uri": "string"
    },
    "cloudSqlInstance": "string",
    "forwardingRule": "string",
    "forwardingRuleTarget": "FORWARDING_RULE_TARGET_UNSPECIFIED",
    "gkeMasterCluster": "string",
    "instance": "string",
    "ipAddress": "string",
    "loadBalancerId": "string",
    "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED",
    "network": "string",
    "networkType": "NETWORK_TYPE_UNSPECIFIED",
    "port": 0,
    "projectId": "string"
  },
  "updateTime": "string"
}
```

A Connectivity Test for a network reachability analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the test was created.|
|description|string|false|none|The user-supplied description of the Connectivity Test. Maximum of 512 characters.|
|destination|[Endpoint](#schemaendpoint)|false|none|Required. Destination specification of the Connectivity Test. You can use a combination of destination IP address, Compute Engine VM instance, or VPC network to uniquely identify the destination location. Even if the destination IP address is not unique, the source IP location is unique. Usually, the analysis can infer the destination endpoint from route information. If the destination you specify is a VM instance and the instance has multiple network interfaces, then you must also specify either a destination IP address or VPC network to identify the destination interface. A reachability analysis proceeds even if the destination location is ambiguous. However, the result can include endpoints that you don't intend to test.|
|displayName|string|false|read-only|Output only. The display name of a Connectivity Test.|
|labels|object|false|none|Resource labels to represent user-provided metadata.|
|name|string|false|none|Required. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test}`|
|probingDetails|[ProbingDetails](#schemaprobingdetails)|false|none|Output only. The probing details of this test from the latest run, present for applicable tests only. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test.|
|protocol|string|false|none|IP Protocol of the test. When not provided, "TCP" is assumed.|
|reachabilityDetails|[ReachabilityDetails](#schemareachabilitydetails)|false|none|Output only. The reachability details of this test from the latest run. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test.|
|relatedProjects|[string]|false|none|Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.|
|source|[Endpoint](#schemaendpoint)|false|none|Required. Source specification of the Connectivity Test. You can use a combination of source IP address, virtual machine (VM) instance, or Compute Engine network to uniquely identify the source location. Examples: If the source IP address is an internal IP address within a Google Cloud Virtual Private Cloud (VPC) network, then you must also specify the VPC network. Otherwise, specify the VM instance, which already contains its internal IP address and VPC network information. If the source of the test is within an on-premises network, then you must provide the destination VPC network. If the source endpoint is a Compute Engine VM instance with multiple network interfaces, the instance itself is not sufficient to identify the endpoint. So, you must also specify the source IP address or VPC network. A reachability analysis proceeds even if the source location is ambiguous. However, the test result may include endpoints that you don't intend to test.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time the test's configuration was updated.|

<h2 id="tocS_DeliverInfo">DeliverInfo</h2>
<!-- backwards compatibility -->
<a id="schemadeliverinfo"></a>
<a id="schema_DeliverInfo"></a>
<a id="tocSdeliverinfo"></a>
<a id="tocsdeliverinfo"></a>

```json
{
  "resourceUri": "string",
  "target": "TARGET_UNSPECIFIED"
}
```

Details of the final state "deliver" and associated resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceUri|string|false|none|URI of the resource that the packet is delivered to.|
|target|string|false|none|Target type where the packet is delivered to.|

#### Enumerated Values

|Property|Value|
|---|---|
|target|TARGET_UNSPECIFIED|
|target|INSTANCE|
|target|INTERNET|
|target|GOOGLE_API|
|target|GKE_MASTER|
|target|CLOUD_SQL_INSTANCE|
|target|PSC_PUBLISHED_SERVICE|
|target|PSC_GOOGLE_API|
|target|PSC_VPC_SC|
|target|SERVERLESS_NEG|

<h2 id="tocS_DropInfo">DropInfo</h2>
<!-- backwards compatibility -->
<a id="schemadropinfo"></a>
<a id="schema_DropInfo"></a>
<a id="tocSdropinfo"></a>
<a id="tocsdropinfo"></a>

```json
{
  "cause": "CAUSE_UNSPECIFIED",
  "resourceUri": "string"
}
```

Details of the final state "drop" and associated resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cause|string|false|none|Cause that the packet is dropped.|
|resourceUri|string|false|none|URI of the resource that caused the drop.|

#### Enumerated Values

|Property|Value|
|---|---|
|cause|CAUSE_UNSPECIFIED|
|cause|UNKNOWN_EXTERNAL_ADDRESS|
|cause|FOREIGN_IP_DISALLOWED|
|cause|FIREWALL_RULE|
|cause|NO_ROUTE|
|cause|ROUTE_BLACKHOLE|
|cause|ROUTE_WRONG_NETWORK|
|cause|PRIVATE_TRAFFIC_TO_INTERNET|
|cause|PRIVATE_GOOGLE_ACCESS_DISALLOWED|
|cause|NO_EXTERNAL_ADDRESS|
|cause|UNKNOWN_INTERNAL_ADDRESS|
|cause|FORWARDING_RULE_MISMATCH|
|cause|FORWARDING_RULE_REGION_MISMATCH|
|cause|FORWARDING_RULE_NO_INSTANCES|
|cause|FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK|
|cause|INSTANCE_NOT_RUNNING|
|cause|GKE_CLUSTER_NOT_RUNNING|
|cause|CLOUD_SQL_INSTANCE_NOT_RUNNING|
|cause|TRAFFIC_TYPE_BLOCKED|
|cause|GKE_MASTER_UNAUTHORIZED_ACCESS|
|cause|CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS|
|cause|DROPPED_INSIDE_GKE_SERVICE|
|cause|DROPPED_INSIDE_CLOUD_SQL_SERVICE|
|cause|GOOGLE_MANAGED_SERVICE_NO_PEERING|
|cause|GKE_PSC_ENDPOINT_MISSING|
|cause|CLOUD_SQL_INSTANCE_NO_IP_ADDRESS|
|cause|GKE_CONTROL_PLANE_REGION_MISMATCH|
|cause|PUBLIC_GKE_CONTROL_PLANE_TO_PRIVATE_DESTINATION|
|cause|GKE_CONTROL_PLANE_NO_ROUTE|
|cause|CLOUD_SQL_INSTANCE_NOT_CONFIGURED_FOR_EXTERNAL_TRAFFIC|
|cause|PUBLIC_CLOUD_SQL_INSTANCE_TO_PRIVATE_DESTINATION|
|cause|CLOUD_SQL_INSTANCE_NO_ROUTE|
|cause|CLOUD_FUNCTION_NOT_ACTIVE|
|cause|VPC_CONNECTOR_NOT_SET|
|cause|VPC_CONNECTOR_NOT_RUNNING|
|cause|PSC_CONNECTION_NOT_ACCEPTED|
|cause|CLOUD_RUN_REVISION_NOT_READY|
|cause|DROPPED_INSIDE_PSC_SERVICE_PRODUCER|

<h2 id="tocS_EdgeLocation">EdgeLocation</h2>
<!-- backwards compatibility -->
<a id="schemaedgelocation"></a>
<a id="schema_EdgeLocation"></a>
<a id="tocSedgelocation"></a>
<a id="tocsedgelocation"></a>

```json
{
  "metropolitanArea": "string"
}
```

Representation of a network edge location as per https://cloud.google.com/vpc/docs/edge-locations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metropolitanArea|string|false|none|Name of the metropolitan area.|

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

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
{
  "appEngineVersion": {
    "uri": "string"
  },
  "cloudFunction": {
    "uri": "string"
  },
  "cloudRunRevision": {
    "uri": "string"
  },
  "cloudSqlInstance": "string",
  "forwardingRule": "string",
  "forwardingRuleTarget": "FORWARDING_RULE_TARGET_UNSPECIFIED",
  "gkeMasterCluster": "string",
  "instance": "string",
  "ipAddress": "string",
  "loadBalancerId": "string",
  "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED",
  "network": "string",
  "networkType": "NETWORK_TYPE_UNSPECIFIED",
  "port": 0,
  "projectId": "string"
}
```

Source or destination of the Connectivity Test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appEngineVersion|[AppEngineVersionEndpoint](#schemaappengineversionendpoint)|false|none|An [App Engine](https://cloud.google.com/appengine) [service version](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions).|
|cloudFunction|[CloudFunctionEndpoint](#schemacloudfunctionendpoint)|false|none|A [Cloud Function](https://cloud.google.com/functions).|
|cloudRunRevision|[CloudRunRevisionEndpoint](#schemacloudrunrevisionendpoint)|false|none|A [Cloud Run](https://cloud.google.com/run) [revision](https://cloud.google.com/run/docs/reference/rest/v1/namespaces.revisions/get)|
|cloudSqlInstance|string|false|none|A [Cloud SQL](https://cloud.google.com/sql) instance URI.|
|forwardingRule|string|false|none|Forwarding rule URI. Forwarding rules are frontends for load balancers, PSC endpoints and Protocol Forwarding. Format: projects/{project}/global/forwardingRules/{id} or projects/{project}/regions/{region}/forwardingRules/{id}|
|forwardingRuleTarget|string|false|read-only|Output only. Specifies the type of the target of the forwarding rule.|
|gkeMasterCluster|string|false|none|A cluster URI for [Google Kubernetes Engine master](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture).|
|instance|string|false|none|A Compute Engine instance URI.|
|ipAddress|string|false|none|The IP address of the endpoint, which can be an external or internal IP. An IPv6 address is only allowed when the test's destination is a [global load balancer VIP](https://cloud.google.com/load-balancing/docs/load-balancing-overview).|
|loadBalancerId|string|false|read-only|Output only. ID of the load balancer the forwarding rule points to. Empty for forwarding rules not related to load balancers.|
|loadBalancerType|string|false|read-only|Output only. Type of the load balancer the forwarding rule points to.|
|network|string|false|none|A Compute Engine network URI.|
|networkType|string|false|none|Type of the network where the endpoint is located. Applicable only to source endpoint, as destination network type can be inferred from the source.|
|port|integer(int32)|false|none|The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.|
|projectId|string|false|none|Project ID where the endpoint is located. The Project ID can be derived from the URI if you provide a VM instance or network URI. The following are two cases where you must provide the project ID: 1. Only the IP address is specified, and the IP address is within a GCP project. 2. When you are using Shared VPC and the IP address that you provide is from the service project. In this case, the network that the IP address resides in is defined in the host project.|

#### Enumerated Values

|Property|Value|
|---|---|
|forwardingRuleTarget|FORWARDING_RULE_TARGET_UNSPECIFIED|
|forwardingRuleTarget|INSTANCE|
|forwardingRuleTarget|LOAD_BALANCER|
|forwardingRuleTarget|VPN_GATEWAY|
|forwardingRuleTarget|PSC|
|loadBalancerType|LOAD_BALANCER_TYPE_UNSPECIFIED|
|loadBalancerType|HTTPS_ADVANCED_LOAD_BALANCER|
|loadBalancerType|HTTPS_LOAD_BALANCER|
|loadBalancerType|REGIONAL_HTTPS_LOAD_BALANCER|
|loadBalancerType|INTERNAL_HTTPS_LOAD_BALANCER|
|loadBalancerType|SSL_PROXY_LOAD_BALANCER|
|loadBalancerType|TCP_PROXY_LOAD_BALANCER|
|loadBalancerType|INTERNAL_TCP_PROXY_LOAD_BALANCER|
|loadBalancerType|NETWORK_LOAD_BALANCER|
|loadBalancerType|LEGACY_NETWORK_LOAD_BALANCER|
|loadBalancerType|TCP_UDP_INTERNAL_LOAD_BALANCER|
|networkType|NETWORK_TYPE_UNSPECIFIED|
|networkType|GCP_NETWORK|
|networkType|NON_GCP_NETWORK|

<h2 id="tocS_EndpointInfo">EndpointInfo</h2>
<!-- backwards compatibility -->
<a id="schemaendpointinfo"></a>
<a id="schema_EndpointInfo"></a>
<a id="tocSendpointinfo"></a>
<a id="tocsendpointinfo"></a>

```json
{
  "destinationIp": "string",
  "destinationNetworkUri": "string",
  "destinationPort": 0,
  "protocol": "string",
  "sourceAgentUri": "string",
  "sourceIp": "string",
  "sourceNetworkUri": "string",
  "sourcePort": 0
}
```

For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationIp|string|false|none|Destination IP address.|
|destinationNetworkUri|string|false|none|URI of the network where this packet is sent to.|
|destinationPort|integer(int32)|false|none|Destination port. Only valid when protocol is TCP or UDP.|
|protocol|string|false|none|IP protocol in string format, for example: "TCP", "UDP", "ICMP".|
|sourceAgentUri|string|false|none|URI of the source telemetry agent this packet originates from.|
|sourceIp|string|false|none|Source IP address.|
|sourceNetworkUri|string|false|none|URI of the network where this packet originates from.|
|sourcePort|integer(int32)|false|none|Source port. Only valid when protocol is TCP or UDP.|

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

<h2 id="tocS_FirewallInfo">FirewallInfo</h2>
<!-- backwards compatibility -->
<a id="schemafirewallinfo"></a>
<a id="schema_FirewallInfo"></a>
<a id="tocSfirewallinfo"></a>
<a id="tocsfirewallinfo"></a>

```json
{
  "action": "string",
  "direction": "string",
  "displayName": "string",
  "firewallRuleType": "FIREWALL_RULE_TYPE_UNSPECIFIED",
  "networkUri": "string",
  "policy": "string",
  "priority": 0,
  "targetServiceAccounts": [
    "string"
  ],
  "targetTags": [
    "string"
  ],
  "uri": "string"
}
```

For display only. Metadata associated with a VPC firewall rule, an implied VPC firewall rule, or a hierarchical firewall policy rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Possible values: ALLOW, DENY|
|direction|string|false|none|Possible values: INGRESS, EGRESS|
|displayName|string|false|none|The display name of the VPC firewall rule. This field is not applicable to hierarchical firewall policy rules.|
|firewallRuleType|string|false|none|The firewall rule's type.|
|networkUri|string|false|none|The URI of the VPC network that the firewall rule is associated with. This field is not applicable to hierarchical firewall policy rules.|
|policy|string|false|none|The hierarchical firewall policy that this rule is associated with. This field is not applicable to VPC firewall rules.|
|priority|integer(int32)|false|none|The priority of the firewall rule.|
|targetServiceAccounts|[string]|false|none|The target service accounts specified by the firewall rule.|
|targetTags|[string]|false|none|The target tags defined by the VPC firewall rule. This field is not applicable to hierarchical firewall policy rules.|
|uri|string|false|none|The URI of the VPC firewall rule. This field is not applicable to implied firewall rules or hierarchical firewall policy rules.|

#### Enumerated Values

|Property|Value|
|---|---|
|firewallRuleType|FIREWALL_RULE_TYPE_UNSPECIFIED|
|firewallRuleType|HIERARCHICAL_FIREWALL_POLICY_RULE|
|firewallRuleType|VPC_FIREWALL_RULE|
|firewallRuleType|IMPLIED_VPC_FIREWALL_RULE|
|firewallRuleType|SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE|
|firewallRuleType|NETWORK_FIREWALL_POLICY_RULE|

<h2 id="tocS_ForwardInfo">ForwardInfo</h2>
<!-- backwards compatibility -->
<a id="schemaforwardinfo"></a>
<a id="schema_ForwardInfo"></a>
<a id="tocSforwardinfo"></a>
<a id="tocsforwardinfo"></a>

```json
{
  "resourceUri": "string",
  "target": "TARGET_UNSPECIFIED"
}
```

Details of the final state "forward" and associated resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceUri|string|false|none|URI of the resource that the packet is forwarded to.|
|target|string|false|none|Target type where this packet is forwarded to.|

#### Enumerated Values

|Property|Value|
|---|---|
|target|TARGET_UNSPECIFIED|
|target|PEERING_VPC|
|target|VPN_GATEWAY|
|target|INTERCONNECT|
|target|GKE_MASTER|
|target|IMPORTED_CUSTOM_ROUTE_NEXT_HOP|
|target|CLOUD_SQL_INSTANCE|
|target|ANOTHER_PROJECT|

<h2 id="tocS_ForwardingRuleInfo">ForwardingRuleInfo</h2>
<!-- backwards compatibility -->
<a id="schemaforwardingruleinfo"></a>
<a id="schema_ForwardingRuleInfo"></a>
<a id="tocSforwardingruleinfo"></a>
<a id="tocsforwardingruleinfo"></a>

```json
{
  "displayName": "string",
  "matchedPortRange": "string",
  "matchedProtocol": "string",
  "networkUri": "string",
  "target": "string",
  "uri": "string",
  "vip": "string"
}
```

For display only. Metadata associated with a Compute Engine forwarding rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Name of a Compute Engine forwarding rule.|
|matchedPortRange|string|false|none|Port range defined in the forwarding rule that matches the test.|
|matchedProtocol|string|false|none|Protocol defined in the forwarding rule that matches the test.|
|networkUri|string|false|none|Network URI. Only valid for Internal Load Balancer.|
|target|string|false|none|Target type of the forwarding rule.|
|uri|string|false|none|URI of a Compute Engine forwarding rule.|
|vip|string|false|none|VIP of the forwarding rule.|

<h2 id="tocS_GKEMasterInfo">GKEMasterInfo</h2>
<!-- backwards compatibility -->
<a id="schemagkemasterinfo"></a>
<a id="schema_GKEMasterInfo"></a>
<a id="tocSgkemasterinfo"></a>
<a id="tocsgkemasterinfo"></a>

```json
{
  "clusterNetworkUri": "string",
  "clusterUri": "string",
  "externalIp": "string",
  "internalIp": "string"
}
```

For display only. Metadata associated with a Google Kubernetes Engine (GKE) cluster master.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterNetworkUri|string|false|none|URI of a GKE cluster network.|
|clusterUri|string|false|none|URI of a GKE cluster.|
|externalIp|string|false|none|External IP address of a GKE cluster master.|
|internalIp|string|false|none|Internal IP address of a GKE cluster master.|

<h2 id="tocS_InstanceInfo">InstanceInfo</h2>
<!-- backwards compatibility -->
<a id="schemainstanceinfo"></a>
<a id="schema_InstanceInfo"></a>
<a id="tocSinstanceinfo"></a>
<a id="tocsinstanceinfo"></a>

```json
{
  "displayName": "string",
  "externalIp": "string",
  "interface": "string",
  "internalIp": "string",
  "networkTags": [
    "string"
  ],
  "networkUri": "string",
  "serviceAccount": "string",
  "uri": "string"
}
```

For display only. Metadata associated with a Compute Engine instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Name of a Compute Engine instance.|
|externalIp|string|false|none|External IP address of the network interface.|
|interface|string|false|none|Name of the network interface of a Compute Engine instance.|
|internalIp|string|false|none|Internal IP address of the network interface.|
|networkTags|[string]|false|none|Network tags configured on the instance.|
|networkUri|string|false|none|URI of a Compute Engine network.|
|serviceAccount|string|false|none|Service account authorized for the instance.|
|uri|string|false|none|URI of a Compute Engine instance.|

<h2 id="tocS_LatencyDistribution">LatencyDistribution</h2>
<!-- backwards compatibility -->
<a id="schemalatencydistribution"></a>
<a id="schema_LatencyDistribution"></a>
<a id="tocSlatencydistribution"></a>
<a id="tocslatencydistribution"></a>

```json
{
  "latencyPercentiles": [
    {
      "latencyMicros": "string",
      "percent": 0
    }
  ]
}
```

Describes measured latency distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latencyPercentiles|[[LatencyPercentile](#schemalatencypercentile)]|false|none|Representative latency percentiles.|

<h2 id="tocS_LatencyPercentile">LatencyPercentile</h2>
<!-- backwards compatibility -->
<a id="schemalatencypercentile"></a>
<a id="schema_LatencyPercentile"></a>
<a id="tocSlatencypercentile"></a>
<a id="tocslatencypercentile"></a>

```json
{
  "latencyMicros": "string",
  "percent": 0
}
```

Latency percentile rank and value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latencyMicros|string(int64)|false|none|percent-th percentile of latency observed, in microseconds. Fraction of percent/100 of samples have latency lower or equal to the value of this field.|
|percent|integer(int32)|false|none|Percentage of samples this data point applies to.|

<h2 id="tocS_ListConnectivityTestsResponse">ListConnectivityTestsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectivitytestsresponse"></a>
<a id="schema_ListConnectivityTestsResponse"></a>
<a id="tocSlistconnectivitytestsresponse"></a>
<a id="tocslistconnectivitytestsresponse"></a>

```json
{
  "nextPageToken": "string",
  "resources": [
    {
      "createTime": "string",
      "description": "string",
      "destination": {
        "appEngineVersion": {
          "uri": "string"
        },
        "cloudFunction": {
          "uri": "string"
        },
        "cloudRunRevision": {
          "uri": "string"
        },
        "cloudSqlInstance": "string",
        "forwardingRule": "string",
        "forwardingRuleTarget": "FORWARDING_RULE_TARGET_UNSPECIFIED",
        "gkeMasterCluster": "string",
        "instance": "string",
        "ipAddress": "string",
        "loadBalancerId": "string",
        "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED",
        "network": "string",
        "networkType": "NETWORK_TYPE_UNSPECIFIED",
        "port": 0,
        "projectId": "string"
      },
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "probingDetails": {
        "abortCause": "PROBING_ABORT_CAUSE_UNSPECIFIED",
        "destinationEgressLocation": {
          "metropolitanArea": "string"
        },
        "endpointInfo": {
          "destinationIp": "string",
          "destinationNetworkUri": "string",
          "destinationPort": 0,
          "protocol": "string",
          "sourceAgentUri": "string",
          "sourceIp": "string",
          "sourceNetworkUri": "string",
          "sourcePort": 0
        },
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
        "probingLatency": {
          "latencyPercentiles": [
            {
              "latencyMicros": "string",
              "percent": 0
            }
          ]
        },
        "result": "PROBING_RESULT_UNSPECIFIED",
        "sentProbeCount": 0,
        "successfulProbeCount": 0,
        "verifyTime": "string"
      },
      "protocol": "string",
      "reachabilityDetails": {
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
        "result": "RESULT_UNSPECIFIED",
        "traces": [
          {
            "endpointInfo": {
              "destinationIp": "string",
              "destinationNetworkUri": "string",
              "destinationPort": 0,
              "protocol": "string",
              "sourceAgentUri": "string",
              "sourceIp": "string",
              "sourceNetworkUri": "string",
              "sourcePort": 0
            },
            "steps": [
              {
                "abort": {
                  "cause": "CAUSE_UNSPECIFIED",
                  "projectsMissingPermission": [
                    "string"
                  ],
                  "resourceUri": "string"
                },
                "appEngineVersion": {
                  "displayName": "string",
                  "environment": "string",
                  "runtime": "string",
                  "uri": "string"
                },
                "causesDrop": true,
                "cloudFunction": {
                  "displayName": "string",
                  "location": "string",
                  "uri": "string",
                  "versionId": "string"
                },
                "cloudRunRevision": {
                  "displayName": "string",
                  "location": "string",
                  "serviceName": "string",
                  "serviceUri": "string",
                  "uri": "string"
                },
                "cloudSqlInstance": {
                  "displayName": "string",
                  "externalIp": "string",
                  "internalIp": "string",
                  "networkUri": "string",
                  "region": "string",
                  "uri": "string"
                },
                "deliver": {
                  "resourceUri": "string",
                  "target": "TARGET_UNSPECIFIED"
                },
                "description": "string",
                "drop": {
                  "cause": "CAUSE_UNSPECIFIED",
                  "resourceUri": "string"
                },
                "endpoint": {
                  "destinationIp": "string",
                  "destinationNetworkUri": "string",
                  "destinationPort": 0,
                  "protocol": "string",
                  "sourceAgentUri": "string",
                  "sourceIp": "string",
                  "sourceNetworkUri": "string",
                  "sourcePort": 0
                },
                "firewall": {
                  "action": "string",
                  "direction": "string",
                  "displayName": "string",
                  "firewallRuleType": "FIREWALL_RULE_TYPE_UNSPECIFIED",
                  "networkUri": "string",
                  "policy": "string",
                  "priority": 0,
                  "targetServiceAccounts": [
                    "string"
                  ],
                  "targetTags": [
                    "string"
                  ],
                  "uri": "string"
                },
                "forward": {
                  "resourceUri": "string",
                  "target": "TARGET_UNSPECIFIED"
                },
                "forwardingRule": {
                  "displayName": "string",
                  "matchedPortRange": "string",
                  "matchedProtocol": "string",
                  "networkUri": "string",
                  "target": "string",
                  "uri": "string",
                  "vip": "string"
                },
                "gkeMaster": {
                  "clusterNetworkUri": "string",
                  "clusterUri": "string",
                  "externalIp": "string",
                  "internalIp": "string"
                },
                "instance": {
                  "displayName": "string",
                  "externalIp": "string",
                  "interface": "string",
                  "internalIp": "string",
                  "networkTags": [
                    "string"
                  ],
                  "networkUri": "string",
                  "serviceAccount": "string",
                  "uri": "string"
                },
                "loadBalancer": {
                  "backendType": "BACKEND_TYPE_UNSPECIFIED",
                  "backendUri": "string",
                  "backends": [
                    {
                      "displayName": "string",
                      "healthCheckAllowingFirewallRules": [
                        "string"
                      ],
                      "healthCheckBlockingFirewallRules": [
                        "string"
                      ],
                      "healthCheckFirewallState": "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                      "uri": "string"
                    }
                  ],
                  "healthCheckUri": "string",
                  "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
                },
                "network": {
                  "displayName": "string",
                  "matchedIpRange": "string",
                  "uri": "string"
                },
                "projectId": "string",
                "route": {
                  "destIpRange": "string",
                  "destPortRanges": [
                    "string"
                  ],
                  "displayName": "string",
                  "instanceTags": [
                    "string"
                  ],
                  "networkUri": "string",
                  "nextHop": "string",
                  "nextHopType": "NEXT_HOP_TYPE_UNSPECIFIED",
                  "priority": 0,
                  "protocols": [
                    "string"
                  ],
                  "routeType": "ROUTE_TYPE_UNSPECIFIED",
                  "srcIpRange": "string",
                  "srcPortRanges": [
                    "string"
                  ],
                  "uri": "string"
                },
                "state": "STATE_UNSPECIFIED",
                "vpcConnector": {
                  "displayName": "string",
                  "location": "string",
                  "uri": "string"
                },
                "vpnGateway": {
                  "displayName": "string",
                  "ipAddress": "string",
                  "networkUri": "string",
                  "region": "string",
                  "uri": "string",
                  "vpnTunnelUri": "string"
                },
                "vpnTunnel": {
                  "displayName": "string",
                  "networkUri": "string",
                  "region": "string",
                  "remoteGateway": "string",
                  "remoteGatewayIp": "string",
                  "routingType": "ROUTING_TYPE_UNSPECIFIED",
                  "sourceGateway": "string",
                  "sourceGatewayIp": "string",
                  "uri": "string"
                }
              }
            ]
          }
        ],
        "verifyTime": "string"
      },
      "relatedProjects": [
        "string"
      ],
      "source": {
        "appEngineVersion": {
          "uri": "string"
        },
        "cloudFunction": {
          "uri": "string"
        },
        "cloudRunRevision": {
          "uri": "string"
        },
        "cloudSqlInstance": "string",
        "forwardingRule": "string",
        "forwardingRuleTarget": "FORWARDING_RULE_TARGET_UNSPECIFIED",
        "gkeMasterCluster": "string",
        "instance": "string",
        "ipAddress": "string",
        "loadBalancerId": "string",
        "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED",
        "network": "string",
        "networkType": "NETWORK_TYPE_UNSPECIFIED",
        "port": 0,
        "projectId": "string"
      },
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response for the `ListConnectivityTests` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Page token to fetch the next set of Connectivity Tests.|
|resources|[[ConnectivityTest](#schemaconnectivitytest)]|false|none|List of Connectivity Tests.|
|unreachable|[string]|false|none|Locations that could not be reached (when querying all locations with `-`).|

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

<h2 id="tocS_LoadBalancerBackend">LoadBalancerBackend</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerbackend"></a>
<a id="schema_LoadBalancerBackend"></a>
<a id="tocSloadbalancerbackend"></a>
<a id="tocsloadbalancerbackend"></a>

```json
{
  "displayName": "string",
  "healthCheckAllowingFirewallRules": [
    "string"
  ],
  "healthCheckBlockingFirewallRules": [
    "string"
  ],
  "healthCheckFirewallState": "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
  "uri": "string"
}
```

For display only. Metadata associated with a specific load balancer backend.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Name of a Compute Engine instance or network endpoint.|
|healthCheckAllowingFirewallRules|[string]|false|none|A list of firewall rule URIs allowing probes from health check IP ranges.|
|healthCheckBlockingFirewallRules|[string]|false|none|A list of firewall rule URIs blocking probes from health check IP ranges.|
|healthCheckFirewallState|string|false|none|State of the health check firewall configuration.|
|uri|string|false|none|URI of a Compute Engine instance or network endpoint.|

#### Enumerated Values

|Property|Value|
|---|---|
|healthCheckFirewallState|HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED|
|healthCheckFirewallState|CONFIGURED|
|healthCheckFirewallState|MISCONFIGURED|

<h2 id="tocS_LoadBalancerInfo">LoadBalancerInfo</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerinfo"></a>
<a id="schema_LoadBalancerInfo"></a>
<a id="tocSloadbalancerinfo"></a>
<a id="tocsloadbalancerinfo"></a>

```json
{
  "backendType": "BACKEND_TYPE_UNSPECIFIED",
  "backendUri": "string",
  "backends": [
    {
      "displayName": "string",
      "healthCheckAllowingFirewallRules": [
        "string"
      ],
      "healthCheckBlockingFirewallRules": [
        "string"
      ],
      "healthCheckFirewallState": "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
      "uri": "string"
    }
  ],
  "healthCheckUri": "string",
  "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
}
```

For display only. Metadata associated with a load balancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backendType|string|false|none|Type of load balancer's backend configuration.|
|backendUri|string|false|none|Backend configuration URI.|
|backends|[[LoadBalancerBackend](#schemaloadbalancerbackend)]|false|none|Information for the loadbalancer backends.|
|healthCheckUri|string|false|none|URI of the health check for the load balancer.|
|loadBalancerType|string|false|none|Type of the load balancer.|

#### Enumerated Values

|Property|Value|
|---|---|
|backendType|BACKEND_TYPE_UNSPECIFIED|
|backendType|BACKEND_SERVICE|
|backendType|TARGET_POOL|
|backendType|TARGET_INSTANCE|
|loadBalancerType|LOAD_BALANCER_TYPE_UNSPECIFIED|
|loadBalancerType|INTERNAL_TCP_UDP|
|loadBalancerType|NETWORK_TCP_UDP|
|loadBalancerType|HTTP_PROXY|
|loadBalancerType|TCP_PROXY|
|loadBalancerType|SSL_PROXY|

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

<h2 id="tocS_NetworkInfo">NetworkInfo</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinfo"></a>
<a id="schema_NetworkInfo"></a>
<a id="tocSnetworkinfo"></a>
<a id="tocsnetworkinfo"></a>

```json
{
  "displayName": "string",
  "matchedIpRange": "string",
  "uri": "string"
}
```

For display only. Metadata associated with a Compute Engine network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Name of a Compute Engine network.|
|matchedIpRange|string|false|none|The IP range that matches the test.|
|uri|string|false|none|URI of a Compute Engine network.|

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
  "cancelRequested": true,
  "createTime": "string",
  "endTime": "string",
  "statusDetail": "string",
  "target": "string",
  "verb": "string"
}
```

Metadata describing an Operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|API version.|
|cancelRequested|boolean|false|none|Specifies if cancellation was requested for the operation.|
|createTime|string(google-datetime)|false|none|The time the operation was created.|
|endTime|string(google-datetime)|false|none|The time the operation finished running.|
|statusDetail|string|false|none|Human-readable status of the operation, if any.|
|target|string|false|none|Target of the operation - for example projects/project-1/locations/global/connectivityTests/test-1|
|verb|string|false|none|Name of the verb executed by the operation.|

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

<h2 id="tocS_ProbingDetails">ProbingDetails</h2>
<!-- backwards compatibility -->
<a id="schemaprobingdetails"></a>
<a id="schema_ProbingDetails"></a>
<a id="tocSprobingdetails"></a>
<a id="tocsprobingdetails"></a>

```json
{
  "abortCause": "PROBING_ABORT_CAUSE_UNSPECIFIED",
  "destinationEgressLocation": {
    "metropolitanArea": "string"
  },
  "endpointInfo": {
    "destinationIp": "string",
    "destinationNetworkUri": "string",
    "destinationPort": 0,
    "protocol": "string",
    "sourceAgentUri": "string",
    "sourceIp": "string",
    "sourceNetworkUri": "string",
    "sourcePort": 0
  },
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
  "probingLatency": {
    "latencyPercentiles": [
      {
        "latencyMicros": "string",
        "percent": 0
      }
    ]
  },
  "result": "PROBING_RESULT_UNSPECIFIED",
  "sentProbeCount": 0,
  "successfulProbeCount": 0,
  "verifyTime": "string"
}
```

Results of active probing from the last run of the test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abortCause|string|false|none|The reason probing was aborted.|
|destinationEgressLocation|[EdgeLocation](#schemaedgelocation)|false|none|The EdgeLocation from which a packet destined for/originating from the internet will egress/ingress the Google network. This will only be populated for a connectivity test which has an internet destination/source address. The absence of this field *must not* be used as an indication that the destination/source is part of the Google network.|
|endpointInfo|[EndpointInfo](#schemaendpointinfo)|false|none|The source and destination endpoints derived from the test input and used for active probing.|
|error|[Status](#schemastatus)|false|none|Details about an internal failure or the cancellation of active probing.|
|probingLatency|[LatencyDistribution](#schemalatencydistribution)|false|none|Latency as measured by active probing in one direction: from the source to the destination endpoint.|
|result|string|false|none|The overall result of active probing.|
|sentProbeCount|integer(int32)|false|none|Number of probes sent.|
|successfulProbeCount|integer(int32)|false|none|Number of probes that reached the destination.|
|verifyTime|string(google-datetime)|false|none|The time that reachability was assessed through active probing.|

#### Enumerated Values

|Property|Value|
|---|---|
|abortCause|PROBING_ABORT_CAUSE_UNSPECIFIED|
|abortCause|PERMISSION_DENIED|
|abortCause|NO_SOURCE_LOCATION|
|result|PROBING_RESULT_UNSPECIFIED|
|result|REACHABLE|
|result|UNREACHABLE|
|result|REACHABILITY_INCONSISTENT|
|result|UNDETERMINED|

<h2 id="tocS_ReachabilityDetails">ReachabilityDetails</h2>
<!-- backwards compatibility -->
<a id="schemareachabilitydetails"></a>
<a id="schema_ReachabilityDetails"></a>
<a id="tocSreachabilitydetails"></a>
<a id="tocsreachabilitydetails"></a>

```json
{
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
  "result": "RESULT_UNSPECIFIED",
  "traces": [
    {
      "endpointInfo": {
        "destinationIp": "string",
        "destinationNetworkUri": "string",
        "destinationPort": 0,
        "protocol": "string",
        "sourceAgentUri": "string",
        "sourceIp": "string",
        "sourceNetworkUri": "string",
        "sourcePort": 0
      },
      "steps": [
        {
          "abort": {
            "cause": "CAUSE_UNSPECIFIED",
            "projectsMissingPermission": [
              "string"
            ],
            "resourceUri": "string"
          },
          "appEngineVersion": {
            "displayName": "string",
            "environment": "string",
            "runtime": "string",
            "uri": "string"
          },
          "causesDrop": true,
          "cloudFunction": {
            "displayName": "string",
            "location": "string",
            "uri": "string",
            "versionId": "string"
          },
          "cloudRunRevision": {
            "displayName": "string",
            "location": "string",
            "serviceName": "string",
            "serviceUri": "string",
            "uri": "string"
          },
          "cloudSqlInstance": {
            "displayName": "string",
            "externalIp": "string",
            "internalIp": "string",
            "networkUri": "string",
            "region": "string",
            "uri": "string"
          },
          "deliver": {
            "resourceUri": "string",
            "target": "TARGET_UNSPECIFIED"
          },
          "description": "string",
          "drop": {
            "cause": "CAUSE_UNSPECIFIED",
            "resourceUri": "string"
          },
          "endpoint": {
            "destinationIp": "string",
            "destinationNetworkUri": "string",
            "destinationPort": 0,
            "protocol": "string",
            "sourceAgentUri": "string",
            "sourceIp": "string",
            "sourceNetworkUri": "string",
            "sourcePort": 0
          },
          "firewall": {
            "action": "string",
            "direction": "string",
            "displayName": "string",
            "firewallRuleType": "FIREWALL_RULE_TYPE_UNSPECIFIED",
            "networkUri": "string",
            "policy": "string",
            "priority": 0,
            "targetServiceAccounts": [
              "string"
            ],
            "targetTags": [
              "string"
            ],
            "uri": "string"
          },
          "forward": {
            "resourceUri": "string",
            "target": "TARGET_UNSPECIFIED"
          },
          "forwardingRule": {
            "displayName": "string",
            "matchedPortRange": "string",
            "matchedProtocol": "string",
            "networkUri": "string",
            "target": "string",
            "uri": "string",
            "vip": "string"
          },
          "gkeMaster": {
            "clusterNetworkUri": "string",
            "clusterUri": "string",
            "externalIp": "string",
            "internalIp": "string"
          },
          "instance": {
            "displayName": "string",
            "externalIp": "string",
            "interface": "string",
            "internalIp": "string",
            "networkTags": [
              "string"
            ],
            "networkUri": "string",
            "serviceAccount": "string",
            "uri": "string"
          },
          "loadBalancer": {
            "backendType": "BACKEND_TYPE_UNSPECIFIED",
            "backendUri": "string",
            "backends": [
              {
                "displayName": "string",
                "healthCheckAllowingFirewallRules": [
                  "string"
                ],
                "healthCheckBlockingFirewallRules": [
                  "string"
                ],
                "healthCheckFirewallState": "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                "uri": "string"
              }
            ],
            "healthCheckUri": "string",
            "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
          },
          "network": {
            "displayName": "string",
            "matchedIpRange": "string",
            "uri": "string"
          },
          "projectId": "string",
          "route": {
            "destIpRange": "string",
            "destPortRanges": [
              "string"
            ],
            "displayName": "string",
            "instanceTags": [
              "string"
            ],
            "networkUri": "string",
            "nextHop": "string",
            "nextHopType": "NEXT_HOP_TYPE_UNSPECIFIED",
            "priority": 0,
            "protocols": [
              "string"
            ],
            "routeType": "ROUTE_TYPE_UNSPECIFIED",
            "srcIpRange": "string",
            "srcPortRanges": [
              "string"
            ],
            "uri": "string"
          },
          "state": "STATE_UNSPECIFIED",
          "vpcConnector": {
            "displayName": "string",
            "location": "string",
            "uri": "string"
          },
          "vpnGateway": {
            "displayName": "string",
            "ipAddress": "string",
            "networkUri": "string",
            "region": "string",
            "uri": "string",
            "vpnTunnelUri": "string"
          },
          "vpnTunnel": {
            "displayName": "string",
            "networkUri": "string",
            "region": "string",
            "remoteGateway": "string",
            "remoteGatewayIp": "string",
            "routingType": "ROUTING_TYPE_UNSPECIFIED",
            "sourceGateway": "string",
            "sourceGatewayIp": "string",
            "uri": "string"
          }
        }
      ]
    }
  ],
  "verifyTime": "string"
}
```

Results of the configuration analysis from the last run of the test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Status](#schemastatus)|false|none|The details of a failure or a cancellation of reachability analysis.|
|result|string|false|none|The overall result of the test's configuration analysis.|
|traces|[[Trace](#schematrace)]|false|none|Result may contain a list of traces if a test has multiple possible paths in the network, such as when destination endpoint is a load balancer with multiple backends.|
|verifyTime|string(google-datetime)|false|none|The time of the configuration analysis.|

#### Enumerated Values

|Property|Value|
|---|---|
|result|RESULT_UNSPECIFIED|
|result|REACHABLE|
|result|UNREACHABLE|
|result|AMBIGUOUS|
|result|UNDETERMINED|

<h2 id="tocS_RerunConnectivityTestRequest">RerunConnectivityTestRequest</h2>
<!-- backwards compatibility -->
<a id="schemarerunconnectivitytestrequest"></a>
<a id="schema_RerunConnectivityTestRequest"></a>
<a id="tocSrerunconnectivitytestrequest"></a>
<a id="tocsrerunconnectivitytestrequest"></a>

```json
{}
```

Request for the `RerunConnectivityTest` method.

<h2 id="tocS_RouteInfo">RouteInfo</h2>
<!-- backwards compatibility -->
<a id="schemarouteinfo"></a>
<a id="schema_RouteInfo"></a>
<a id="tocSrouteinfo"></a>
<a id="tocsrouteinfo"></a>

```json
{
  "destIpRange": "string",
  "destPortRanges": [
    "string"
  ],
  "displayName": "string",
  "instanceTags": [
    "string"
  ],
  "networkUri": "string",
  "nextHop": "string",
  "nextHopType": "NEXT_HOP_TYPE_UNSPECIFIED",
  "priority": 0,
  "protocols": [
    "string"
  ],
  "routeType": "ROUTE_TYPE_UNSPECIFIED",
  "srcIpRange": "string",
  "srcPortRanges": [
    "string"
  ],
  "uri": "string"
}
```

For display only. Metadata associated with a Compute Engine route.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destIpRange|string|false|none|Destination IP range of the route.|
|destPortRanges|[string]|false|none|Destination port ranges of the route. Policy based routes only.|
|displayName|string|false|none|Name of a Compute Engine route.|
|instanceTags|[string]|false|none|Instance tags of the route.|
|networkUri|string|false|none|URI of a Compute Engine network.|
|nextHop|string|false|none|Next hop of the route.|
|nextHopType|string|false|none|Type of next hop.|
|priority|integer(int32)|false|none|Priority of the route.|
|protocols|[string]|false|none|Protocols of the route. Policy based routes only.|
|routeType|string|false|none|Type of route.|
|srcIpRange|string|false|none|Source IP address range of the route. Policy based routes only.|
|srcPortRanges|[string]|false|none|Source port ranges of the route. Policy based routes only.|
|uri|string|false|none|URI of a Compute Engine route. Dynamic route from cloud router does not have a URI. Advertised route from Google Cloud VPC to on-premises network also does not have a URI.|

#### Enumerated Values

|Property|Value|
|---|---|
|nextHopType|NEXT_HOP_TYPE_UNSPECIFIED|
|nextHopType|NEXT_HOP_IP|
|nextHopType|NEXT_HOP_INSTANCE|
|nextHopType|NEXT_HOP_NETWORK|
|nextHopType|NEXT_HOP_PEERING|
|nextHopType|NEXT_HOP_INTERCONNECT|
|nextHopType|NEXT_HOP_VPN_TUNNEL|
|nextHopType|NEXT_HOP_VPN_GATEWAY|
|nextHopType|NEXT_HOP_INTERNET_GATEWAY|
|nextHopType|NEXT_HOP_BLACKHOLE|
|nextHopType|NEXT_HOP_ILB|
|nextHopType|NEXT_HOP_ROUTER_APPLIANCE|
|routeType|ROUTE_TYPE_UNSPECIFIED|
|routeType|SUBNET|
|routeType|STATIC|
|routeType|DYNAMIC|
|routeType|PEERING_SUBNET|
|routeType|PEERING_STATIC|
|routeType|PEERING_DYNAMIC|
|routeType|POLICY_BASED|

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

<h2 id="tocS_Step">Step</h2>
<!-- backwards compatibility -->
<a id="schemastep"></a>
<a id="schema_Step"></a>
<a id="tocSstep"></a>
<a id="tocsstep"></a>

```json
{
  "abort": {
    "cause": "CAUSE_UNSPECIFIED",
    "projectsMissingPermission": [
      "string"
    ],
    "resourceUri": "string"
  },
  "appEngineVersion": {
    "displayName": "string",
    "environment": "string",
    "runtime": "string",
    "uri": "string"
  },
  "causesDrop": true,
  "cloudFunction": {
    "displayName": "string",
    "location": "string",
    "uri": "string",
    "versionId": "string"
  },
  "cloudRunRevision": {
    "displayName": "string",
    "location": "string",
    "serviceName": "string",
    "serviceUri": "string",
    "uri": "string"
  },
  "cloudSqlInstance": {
    "displayName": "string",
    "externalIp": "string",
    "internalIp": "string",
    "networkUri": "string",
    "region": "string",
    "uri": "string"
  },
  "deliver": {
    "resourceUri": "string",
    "target": "TARGET_UNSPECIFIED"
  },
  "description": "string",
  "drop": {
    "cause": "CAUSE_UNSPECIFIED",
    "resourceUri": "string"
  },
  "endpoint": {
    "destinationIp": "string",
    "destinationNetworkUri": "string",
    "destinationPort": 0,
    "protocol": "string",
    "sourceAgentUri": "string",
    "sourceIp": "string",
    "sourceNetworkUri": "string",
    "sourcePort": 0
  },
  "firewall": {
    "action": "string",
    "direction": "string",
    "displayName": "string",
    "firewallRuleType": "FIREWALL_RULE_TYPE_UNSPECIFIED",
    "networkUri": "string",
    "policy": "string",
    "priority": 0,
    "targetServiceAccounts": [
      "string"
    ],
    "targetTags": [
      "string"
    ],
    "uri": "string"
  },
  "forward": {
    "resourceUri": "string",
    "target": "TARGET_UNSPECIFIED"
  },
  "forwardingRule": {
    "displayName": "string",
    "matchedPortRange": "string",
    "matchedProtocol": "string",
    "networkUri": "string",
    "target": "string",
    "uri": "string",
    "vip": "string"
  },
  "gkeMaster": {
    "clusterNetworkUri": "string",
    "clusterUri": "string",
    "externalIp": "string",
    "internalIp": "string"
  },
  "instance": {
    "displayName": "string",
    "externalIp": "string",
    "interface": "string",
    "internalIp": "string",
    "networkTags": [
      "string"
    ],
    "networkUri": "string",
    "serviceAccount": "string",
    "uri": "string"
  },
  "loadBalancer": {
    "backendType": "BACKEND_TYPE_UNSPECIFIED",
    "backendUri": "string",
    "backends": [
      {
        "displayName": "string",
        "healthCheckAllowingFirewallRules": [
          "string"
        ],
        "healthCheckBlockingFirewallRules": [
          "string"
        ],
        "healthCheckFirewallState": "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
        "uri": "string"
      }
    ],
    "healthCheckUri": "string",
    "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
  },
  "network": {
    "displayName": "string",
    "matchedIpRange": "string",
    "uri": "string"
  },
  "projectId": "string",
  "route": {
    "destIpRange": "string",
    "destPortRanges": [
      "string"
    ],
    "displayName": "string",
    "instanceTags": [
      "string"
    ],
    "networkUri": "string",
    "nextHop": "string",
    "nextHopType": "NEXT_HOP_TYPE_UNSPECIFIED",
    "priority": 0,
    "protocols": [
      "string"
    ],
    "routeType": "ROUTE_TYPE_UNSPECIFIED",
    "srcIpRange": "string",
    "srcPortRanges": [
      "string"
    ],
    "uri": "string"
  },
  "state": "STATE_UNSPECIFIED",
  "vpcConnector": {
    "displayName": "string",
    "location": "string",
    "uri": "string"
  },
  "vpnGateway": {
    "displayName": "string",
    "ipAddress": "string",
    "networkUri": "string",
    "region": "string",
    "uri": "string",
    "vpnTunnelUri": "string"
  },
  "vpnTunnel": {
    "displayName": "string",
    "networkUri": "string",
    "region": "string",
    "remoteGateway": "string",
    "remoteGatewayIp": "string",
    "routingType": "ROUTING_TYPE_UNSPECIFIED",
    "sourceGateway": "string",
    "sourceGatewayIp": "string",
    "uri": "string"
  }
}
```

A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abort|[AbortInfo](#schemaabortinfo)|false|none|Display information of the final state "abort" and reason.|
|appEngineVersion|[AppEngineVersionInfo](#schemaappengineversioninfo)|false|none|Display information of an App Engine service version.|
|causesDrop|boolean|false|none|This is a step that leads to the final state Drop.|
|cloudFunction|[CloudFunctionInfo](#schemacloudfunctioninfo)|false|none|Display information of a Cloud Function.|
|cloudRunRevision|[CloudRunRevisionInfo](#schemacloudrunrevisioninfo)|false|none|Display information of a Cloud Run revision.|
|cloudSqlInstance|[CloudSQLInstanceInfo](#schemacloudsqlinstanceinfo)|false|none|Display information of a Cloud SQL instance.|
|deliver|[DeliverInfo](#schemadeliverinfo)|false|none|Display information of the final state "deliver" and reason.|
|description|string|false|none|A description of the step. Usually this is a summary of the state.|
|drop|[DropInfo](#schemadropinfo)|false|none|Display information of the final state "drop" and reason.|
|endpoint|[EndpointInfo](#schemaendpointinfo)|false|none|Display information of the source and destination under analysis. The endpoint information in an intermediate state may differ with the initial input, as it might be modified by state like NAT, or Connection Proxy.|
|firewall|[FirewallInfo](#schemafirewallinfo)|false|none|Display information of a Compute Engine firewall rule.|
|forward|[ForwardInfo](#schemaforwardinfo)|false|none|Display information of the final state "forward" and reason.|
|forwardingRule|[ForwardingRuleInfo](#schemaforwardingruleinfo)|false|none|Display information of a Compute Engine forwarding rule.|
|gkeMaster|[GKEMasterInfo](#schemagkemasterinfo)|false|none|Display information of a Google Kubernetes Engine cluster master.|
|instance|[InstanceInfo](#schemainstanceinfo)|false|none|Display information of a Compute Engine instance.|
|loadBalancer|[LoadBalancerInfo](#schemaloadbalancerinfo)|false|none|Display information of the load balancers.|
|network|[NetworkInfo](#schemanetworkinfo)|false|none|Display information of a Google Cloud network.|
|projectId|string|false|none|Project ID that contains the configuration this step is validating.|
|route|[RouteInfo](#schemarouteinfo)|false|none|Display information of a Compute Engine route.|
|state|string|false|none|Each step is in one of the pre-defined states.|
|vpcConnector|[VpcConnectorInfo](#schemavpcconnectorinfo)|false|none|Display information of a VPC connector.|
|vpnGateway|[VpnGatewayInfo](#schemavpngatewayinfo)|false|none|Display information of a Compute Engine VPN gateway.|
|vpnTunnel|[VpnTunnelInfo](#schemavpntunnelinfo)|false|none|Display information of a Compute Engine VPN tunnel.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|START_FROM_INSTANCE|
|state|START_FROM_INTERNET|
|state|START_FROM_PRIVATE_NETWORK|
|state|START_FROM_GKE_MASTER|
|state|START_FROM_CLOUD_SQL_INSTANCE|
|state|START_FROM_CLOUD_FUNCTION|
|state|START_FROM_APP_ENGINE_VERSION|
|state|START_FROM_CLOUD_RUN_REVISION|
|state|APPLY_INGRESS_FIREWALL_RULE|
|state|APPLY_EGRESS_FIREWALL_RULE|
|state|APPLY_ROUTE|
|state|APPLY_FORWARDING_RULE|
|state|SPOOFING_APPROVED|
|state|ARRIVE_AT_INSTANCE|
|state|ARRIVE_AT_INTERNAL_LOAD_BALANCER|
|state|ARRIVE_AT_EXTERNAL_LOAD_BALANCER|
|state|ARRIVE_AT_VPN_GATEWAY|
|state|ARRIVE_AT_VPN_TUNNEL|
|state|ARRIVE_AT_VPC_CONNECTOR|
|state|NAT|
|state|PROXY_CONNECTION|
|state|DELIVER|
|state|DROP|
|state|FORWARD|
|state|ABORT|
|state|VIEWER_PERMISSION_MISSING|

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

<h2 id="tocS_Trace">Trace</h2>
<!-- backwards compatibility -->
<a id="schematrace"></a>
<a id="schema_Trace"></a>
<a id="tocStrace"></a>
<a id="tocstrace"></a>

```json
{
  "endpointInfo": {
    "destinationIp": "string",
    "destinationNetworkUri": "string",
    "destinationPort": 0,
    "protocol": "string",
    "sourceAgentUri": "string",
    "sourceIp": "string",
    "sourceNetworkUri": "string",
    "sourcePort": 0
  },
  "steps": [
    {
      "abort": {
        "cause": "CAUSE_UNSPECIFIED",
        "projectsMissingPermission": [
          "string"
        ],
        "resourceUri": "string"
      },
      "appEngineVersion": {
        "displayName": "string",
        "environment": "string",
        "runtime": "string",
        "uri": "string"
      },
      "causesDrop": true,
      "cloudFunction": {
        "displayName": "string",
        "location": "string",
        "uri": "string",
        "versionId": "string"
      },
      "cloudRunRevision": {
        "displayName": "string",
        "location": "string",
        "serviceName": "string",
        "serviceUri": "string",
        "uri": "string"
      },
      "cloudSqlInstance": {
        "displayName": "string",
        "externalIp": "string",
        "internalIp": "string",
        "networkUri": "string",
        "region": "string",
        "uri": "string"
      },
      "deliver": {
        "resourceUri": "string",
        "target": "TARGET_UNSPECIFIED"
      },
      "description": "string",
      "drop": {
        "cause": "CAUSE_UNSPECIFIED",
        "resourceUri": "string"
      },
      "endpoint": {
        "destinationIp": "string",
        "destinationNetworkUri": "string",
        "destinationPort": 0,
        "protocol": "string",
        "sourceAgentUri": "string",
        "sourceIp": "string",
        "sourceNetworkUri": "string",
        "sourcePort": 0
      },
      "firewall": {
        "action": "string",
        "direction": "string",
        "displayName": "string",
        "firewallRuleType": "FIREWALL_RULE_TYPE_UNSPECIFIED",
        "networkUri": "string",
        "policy": "string",
        "priority": 0,
        "targetServiceAccounts": [
          "string"
        ],
        "targetTags": [
          "string"
        ],
        "uri": "string"
      },
      "forward": {
        "resourceUri": "string",
        "target": "TARGET_UNSPECIFIED"
      },
      "forwardingRule": {
        "displayName": "string",
        "matchedPortRange": "string",
        "matchedProtocol": "string",
        "networkUri": "string",
        "target": "string",
        "uri": "string",
        "vip": "string"
      },
      "gkeMaster": {
        "clusterNetworkUri": "string",
        "clusterUri": "string",
        "externalIp": "string",
        "internalIp": "string"
      },
      "instance": {
        "displayName": "string",
        "externalIp": "string",
        "interface": "string",
        "internalIp": "string",
        "networkTags": [
          "string"
        ],
        "networkUri": "string",
        "serviceAccount": "string",
        "uri": "string"
      },
      "loadBalancer": {
        "backendType": "BACKEND_TYPE_UNSPECIFIED",
        "backendUri": "string",
        "backends": [
          {
            "displayName": "string",
            "healthCheckAllowingFirewallRules": [
              "string"
            ],
            "healthCheckBlockingFirewallRules": [
              "string"
            ],
            "healthCheckFirewallState": "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
            "uri": "string"
          }
        ],
        "healthCheckUri": "string",
        "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
      },
      "network": {
        "displayName": "string",
        "matchedIpRange": "string",
        "uri": "string"
      },
      "projectId": "string",
      "route": {
        "destIpRange": "string",
        "destPortRanges": [
          "string"
        ],
        "displayName": "string",
        "instanceTags": [
          "string"
        ],
        "networkUri": "string",
        "nextHop": "string",
        "nextHopType": "NEXT_HOP_TYPE_UNSPECIFIED",
        "priority": 0,
        "protocols": [
          "string"
        ],
        "routeType": "ROUTE_TYPE_UNSPECIFIED",
        "srcIpRange": "string",
        "srcPortRanges": [
          "string"
        ],
        "uri": "string"
      },
      "state": "STATE_UNSPECIFIED",
      "vpcConnector": {
        "displayName": "string",
        "location": "string",
        "uri": "string"
      },
      "vpnGateway": {
        "displayName": "string",
        "ipAddress": "string",
        "networkUri": "string",
        "region": "string",
        "uri": "string",
        "vpnTunnelUri": "string"
      },
      "vpnTunnel": {
        "displayName": "string",
        "networkUri": "string",
        "region": "string",
        "remoteGateway": "string",
        "remoteGatewayIp": "string",
        "routingType": "ROUTING_TYPE_UNSPECIFIED",
        "sourceGateway": "string",
        "sourceGatewayIp": "string",
        "uri": "string"
      }
    }
  ]
}
```

Trace represents one simulated packet forwarding path. * Each trace contains multiple ordered steps. * Each step is in a particular state with associated configuration. * State is categorized as final or non-final states. * Each final state has a reason associated. * Each trace must end with a final state (the last step). ``` |---------------------Trace----------------------| Step1(State) Step2(State) --- StepN(State(final)) ```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpointInfo|[EndpointInfo](#schemaendpointinfo)|false|none|Derived from the source and destination endpoints definition specified by user request, and validated by the data plane model. If there are multiple traces starting from different source locations, then the endpoint_info may be different between traces.|
|steps|[[Step](#schemastep)]|false|none|A trace of a test contains multiple steps from the initial state to the final state (delivered, dropped, forwarded, or aborted). The steps are ordered by the processing sequence within the simulated network state machine. It is critical to preserve the order of the steps and avoid reordering or sorting them.|

<h2 id="tocS_VpcConnectorInfo">VpcConnectorInfo</h2>
<!-- backwards compatibility -->
<a id="schemavpcconnectorinfo"></a>
<a id="schema_VpcConnectorInfo"></a>
<a id="tocSvpcconnectorinfo"></a>
<a id="tocsvpcconnectorinfo"></a>

```json
{
  "displayName": "string",
  "location": "string",
  "uri": "string"
}
```

For display only. Metadata associated with a VPC connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Name of a VPC connector.|
|location|string|false|none|Location in which the VPC connector is deployed.|
|uri|string|false|none|URI of a VPC connector.|

<h2 id="tocS_VpnGatewayInfo">VpnGatewayInfo</h2>
<!-- backwards compatibility -->
<a id="schemavpngatewayinfo"></a>
<a id="schema_VpnGatewayInfo"></a>
<a id="tocSvpngatewayinfo"></a>
<a id="tocsvpngatewayinfo"></a>

```json
{
  "displayName": "string",
  "ipAddress": "string",
  "networkUri": "string",
  "region": "string",
  "uri": "string",
  "vpnTunnelUri": "string"
}
```

For display only. Metadata associated with a Compute Engine VPN gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Name of a VPN gateway.|
|ipAddress|string|false|none|IP address of the VPN gateway.|
|networkUri|string|false|none|URI of a Compute Engine network where the VPN gateway is configured.|
|region|string|false|none|Name of a Google Cloud region where this VPN gateway is configured.|
|uri|string|false|none|URI of a VPN gateway.|
|vpnTunnelUri|string|false|none|A VPN tunnel that is associated with this VPN gateway. There may be multiple VPN tunnels configured on a VPN gateway, and only the one relevant to the test is displayed.|

<h2 id="tocS_VpnTunnelInfo">VpnTunnelInfo</h2>
<!-- backwards compatibility -->
<a id="schemavpntunnelinfo"></a>
<a id="schema_VpnTunnelInfo"></a>
<a id="tocSvpntunnelinfo"></a>
<a id="tocsvpntunnelinfo"></a>

```json
{
  "displayName": "string",
  "networkUri": "string",
  "region": "string",
  "remoteGateway": "string",
  "remoteGatewayIp": "string",
  "routingType": "ROUTING_TYPE_UNSPECIFIED",
  "sourceGateway": "string",
  "sourceGatewayIp": "string",
  "uri": "string"
}
```

For display only. Metadata associated with a Compute Engine VPN tunnel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Name of a VPN tunnel.|
|networkUri|string|false|none|URI of a Compute Engine network where the VPN tunnel is configured.|
|region|string|false|none|Name of a Google Cloud region where this VPN tunnel is configured.|
|remoteGateway|string|false|none|URI of a VPN gateway at remote end of the tunnel.|
|remoteGatewayIp|string|false|none|Remote VPN gateway's IP address.|
|routingType|string|false|none|Type of the routing policy.|
|sourceGateway|string|false|none|URI of the VPN gateway at local end of the tunnel.|
|sourceGatewayIp|string|false|none|Local VPN gateway's IP address.|
|uri|string|false|none|URI of a VPN tunnel.|

#### Enumerated Values

|Property|Value|
|---|---|
|routingType|ROUTING_TYPE_UNSPECIFIED|
|routingType|ROUTE_BASED|
|routingType|POLICY_BASED|
|routingType|DYNAMIC|
