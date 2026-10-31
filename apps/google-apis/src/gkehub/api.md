<h1 id="gke-hub-api">GKE Hub API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://gkehub.googleapis.com/">https://gkehub.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster">External documentation</a>

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

<h1 id="gke-hub-api-projects">projects</h1>

## gkehub.projects.locations.operations.get

<a id="opIdgkehub.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="gkehubprojectslocationsoperationsget-parameters">Parameters</h3>

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

<h3 id="gkehubprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkehub.projects.locations.operations.delete

<a id="opIdgkehub.projects.locations.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="gkehubprojectslocationsoperationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be deleted.|
|force|query|boolean|false|Optional. If set to true, any subresource from this Membership will also be deleted. Otherwise, the request will only work if the Membership has no subresource.|
|requestId|query|string|false|Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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

<h3 id="gkehubprojectslocationsoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkehub.projects.locations.memberships.patch

<a id="opIdgkehub.projects.locations.memberships.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authority": {
      "issuer": "string",
      "oidcJwks": "string"
    },
    "description": "string",
    "endpoint": {
      "applianceCluster": {
        "resourceLink": "string"
      },
      "edgeCluster": {
        "resourceLink": "string"
      },
      "gkeCluster": {
        "resourceLink": "string"
      },
      "kubernetesResource": {
        "membershipCrManifest": "string",
        "resourceOptions": {
          "connectVersion": "string",
          "k8sVersion": "string",
          "v1beta1Crd": true
        }
      },
      "multiCloudCluster": {
        "resourceLink": "string"
      },
      "onPremCluster": {
        "adminCluster": true,
        "clusterType": "CLUSTERTYPE_UNSPECIFIED",
        "resourceLink": "string"
      }
    },
    "externalId": "string",
    "infrastructureType": "INFRASTRUCTURE_TYPE_UNSPECIFIED",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "monitoringConfig": {
      "cluster": "string",
      "clusterHash": "string",
      "kubernetesMetricsPrefix": "string",
      "location": "string",
      "projectId": "string"
    }
  }'
```

`PATCH /v1beta1/{name}`

Updates an existing Membership.

> Body parameter

```json
{
  "authority": {
    "issuer": "string",
    "oidcJwks": "string"
  },
  "description": "string",
  "endpoint": {
    "applianceCluster": {
      "resourceLink": "string"
    },
    "edgeCluster": {
      "resourceLink": "string"
    },
    "gkeCluster": {
      "resourceLink": "string"
    },
    "kubernetesResource": {
      "membershipCrManifest": "string",
      "resourceOptions": {
        "connectVersion": "string",
        "k8sVersion": "string",
        "v1beta1Crd": true
      }
    },
    "multiCloudCluster": {
      "resourceLink": "string"
    },
    "onPremCluster": {
      "adminCluster": true,
      "clusterType": "CLUSTERTYPE_UNSPECIFIED",
      "resourceLink": "string"
    }
  },
  "externalId": "string",
  "infrastructureType": "INFRASTRUCTURE_TYPE_UNSPECIFIED",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "monitoringConfig": {
    "cluster": "string",
    "clusterHash": "string",
    "kubernetesMetricsPrefix": "string",
    "location": "string",
    "projectId": "string"
  }
}
```

<h3 id="gkehubprojectslocationsmembershipspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The membership resource name in the format: `projects/[project_id]/locations/global/memberships/[membership_id]`|
|requestId|query|string|false|Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|updateMask|query|string|false|Required. Mask of fields to update. At least one field path must be specified in this mask.|
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
|body|body|[Membership](#schemamembership)|false|none|
|» authority|body|[Authority](#schemaauthority)|false|Optional. How to identify workloads from this Membership. See the documentation on Workload Identity for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity|
|» description|body|string|false|Optional. Description of this membership, limited to 63 characters. Must match the regex: `a-zA-Z0-9*`|
|» endpoint|body|[MembershipEndpoint](#schemamembershipendpoint)|false|Optional. Endpoint information to reach this member.|
|» externalId|body|string|false|Optional. An externally-generated and managed ID for this Membership. This ID may be modified after creation, but this is not recommended. For GKE clusters, external_id is managed by the Hub API and updates will be ignored. The ID must match the regex: `a-zA-Z0-9*` If this Membership represents a Kubernetes cluster, this value should be set to the UID of the `kube-system` namespace object.|
|» infrastructureType|body|string|false|Optional. The infrastructure type this Membership is running on.|
|» labels|body|object|false|Optional. GCP labels for this membership.|
|» » **additionalProperties**|body|string|false|none|
|» monitoringConfig|body|[MonitoringConfig](#schemamonitoringconfig)|false|Optional. The monitoring config information for this membership.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» infrastructureType|INFRASTRUCTURE_TYPE_UNSPECIFIED|
|» infrastructureType|ON_PREM|
|» infrastructureType|MULTI_CLOUD|

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

<h3 id="gkehubprojectslocationsmembershipspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkehub.projects.locations.list

<a id="opIdgkehub.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="gkehubprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="gkehubprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkehub.projects.locations.operations.list

<a id="opIdgkehub.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="gkehubprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="gkehubprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkehub.projects.locations.operations.cancel

<a id="opIdgkehub.projects.locations.operations.cancel"></a>

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

<h3 id="gkehubprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="gkehubprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkehub.projects.locations.memberships.generateConnectManifest

<a id="opIdgkehub.projects.locations.memberships.generateConnectManifest"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:generateConnectManifest \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}:generateConnectManifest`

Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.

<h3 id="gkehubprojectslocationsmembershipsgenerateconnectmanifest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The Membership resource name the Agent will associate with, in the format `projects/*/locations/*/memberships/*`.|
|connectAgent.name|query|string|false|Do not set.|
|connectAgent.namespace|query|string|false|Optional. Namespace for GKE Connect agent resources. Defaults to `gke-connect`. The Connect Agent is authorized automatically when run in the default namespace. Otherwise, explicit authorization must be granted with an additional IAM binding.|
|connectAgent.proxy|query|string|false|Optional. URI of a proxy if connectivity from the agent to gkeconnect.googleapis.com requires the use of a proxy. Format must be in the form `http(s)://{proxy_address}`, depending on the HTTP/HTTPS protocol supported by the proxy. This will direct the connect agent's outbound traffic through a HTTP(S) proxy.|
|imagePullSecretContent|query|string|false|Optional. The image pull secret content for the registry, if not public.|
|isUpgrade|query|boolean|false|Optional. If true, generate the resources for upgrade only. Some resources generated only for installation (e.g. secrets) will be excluded.|
|registry|query|string|false|Optional. The registry to fetch the connect agent image from. Defaults to gcr.io/gkeconnect.|
|version|query|string|false|Optional. The Connect agent version to use. Defaults to the most current version.|
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
  "manifest": [
    {
      "manifest": "string",
      "type": {
        "apiVersion": "string",
        "kind": "string"
      }
    }
  ]
}
```

<h3 id="gkehubprojectslocationsmembershipsgenerateconnectmanifest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GenerateConnectManifestResponse](#schemagenerateconnectmanifestresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkehub.projects.locations.memberships.generateExclusivityManifest

<a id="opIdgkehub.projects.locations.memberships.generateExclusivityManifest"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:generateExclusivityManifest \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}:generateExclusivityManifest`

GenerateExclusivityManifest generates the manifests to update the exclusivity artifacts in the cluster if needed. Exclusivity artifacts include the Membership custom resource definition (CRD) and the singleton Membership custom resource (CR). Combined with ValidateExclusivity, exclusivity artifacts guarantee that a Kubernetes cluster is only registered to a single GKE Hub. The Membership CRD is versioned, and may require conversion when the GKE Hub API server begins serving a newer version of the CRD and corresponding CR. The response will be the converted CRD and CR if there are any differences between the versions.

<h3 id="gkehubprojectslocationsmembershipsgenerateexclusivitymanifest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The Membership resource name in the format `projects/*/locations/*/memberships/*`.|
|crManifest|query|string|false|Optional. The YAML manifest of the membership CR retrieved by `kubectl get memberships membership`. Leave empty if the resource does not exist.|
|crdManifest|query|string|false|Optional. The YAML manifest of the membership CRD retrieved by `kubectl get customresourcedefinitions membership`. Leave empty if the resource does not exist.|
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
  "crManifest": "string",
  "crdManifest": "string"
}
```

<h3 id="gkehubprojectslocationsmembershipsgenerateexclusivitymanifest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GenerateExclusivityManifestResponse](#schemagenerateexclusivitymanifestresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkehub.projects.locations.memberships.list

<a id="opIdgkehub.projects.locations.memberships.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/memberships \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/memberships`

Lists Memberships in a given project and location.

<h3 id="gkehubprojectslocationsmembershipslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent (project and location) where the Memberships will be listed. Specified in the format `projects/*/locations/*`. `projects/*/locations/-` list memberships in all the regions.|
|filter|query|string|false|Optional. Lists Memberships that match the filter expression, following the syntax outlined in https://google.aip.dev/160. Examples: - Name is `bar` in project `foo-proj` and location `global`: name = "projects/foo-proj/locations/global/membership/bar" - Memberships that have a label called `foo`: labels.foo:* - Memberships that have a label called `foo` whose value is `bar`: labels.foo = bar - Memberships in the CREATING state: state = CREATING|
|orderBy|query|string|false|Optional. One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering.|
|pageSize|query|integer|false|Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.|
|pageToken|query|string|false|Optional. Token returned by previous call to `ListMemberships` which specifies the position in the list from where to continue listing the resources.|
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
      "authority": {
        "identityProvider": "string",
        "issuer": "string",
        "oidcJwks": "string",
        "workloadIdentityPool": "string"
      },
      "createTime": "string",
      "deleteTime": "string",
      "description": "string",
      "endpoint": {
        "applianceCluster": {
          "resourceLink": "string"
        },
        "edgeCluster": {
          "resourceLink": "string"
        },
        "gkeCluster": {
          "clusterMissing": true,
          "resourceLink": "string"
        },
        "kubernetesMetadata": {
          "kubernetesApiServerVersion": "string",
          "memoryMb": 0,
          "nodeCount": 0,
          "nodeProviderId": "string",
          "updateTime": "string",
          "vcpuCount": 0
        },
        "kubernetesResource": {
          "connectResources": [
            {
              "clusterScoped": true,
              "manifest": "string"
            }
          ],
          "membershipCrManifest": "string",
          "membershipResources": [
            {
              "clusterScoped": true,
              "manifest": "string"
            }
          ],
          "resourceOptions": {
            "connectVersion": "string",
            "k8sVersion": "string",
            "v1beta1Crd": true
          }
        },
        "multiCloudCluster": {
          "clusterMissing": true,
          "resourceLink": "string"
        },
        "onPremCluster": {
          "adminCluster": true,
          "clusterMissing": true,
          "clusterType": "CLUSTERTYPE_UNSPECIFIED",
          "resourceLink": "string"
        }
      },
      "externalId": "string",
      "infrastructureType": "INFRASTRUCTURE_TYPE_UNSPECIFIED",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "lastConnectionTime": "string",
      "monitoringConfig": {
        "cluster": "string",
        "clusterHash": "string",
        "kubernetesMetricsPrefix": "string",
        "location": "string",
        "projectId": "string"
      },
      "name": "string",
      "state": {
        "code": "CODE_UNSPECIFIED",
        "description": "string",
        "updateTime": "string"
      },
      "uniqueId": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="gkehubprojectslocationsmembershipslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListMembershipsResponse](#schemalistmembershipsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkehub.projects.locations.memberships.create

<a id="opIdgkehub.projects.locations.memberships.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/memberships \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authority": {
      "issuer": "string",
      "oidcJwks": "string"
    },
    "description": "string",
    "endpoint": {
      "applianceCluster": {
        "resourceLink": "string"
      },
      "edgeCluster": {
        "resourceLink": "string"
      },
      "gkeCluster": {
        "resourceLink": "string"
      },
      "kubernetesResource": {
        "membershipCrManifest": "string",
        "resourceOptions": {
          "connectVersion": "string",
          "k8sVersion": "string",
          "v1beta1Crd": true
        }
      },
      "multiCloudCluster": {
        "resourceLink": "string"
      },
      "onPremCluster": {
        "adminCluster": true,
        "clusterType": "CLUSTERTYPE_UNSPECIFIED",
        "resourceLink": "string"
      }
    },
    "externalId": "string",
    "infrastructureType": "INFRASTRUCTURE_TYPE_UNSPECIFIED",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "monitoringConfig": {
      "cluster": "string",
      "clusterHash": "string",
      "kubernetesMetricsPrefix": "string",
      "location": "string",
      "projectId": "string"
    }
  }'
```

`POST /v1beta1/{parent}/memberships`

Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.

> Body parameter

```json
{
  "authority": {
    "issuer": "string",
    "oidcJwks": "string"
  },
  "description": "string",
  "endpoint": {
    "applianceCluster": {
      "resourceLink": "string"
    },
    "edgeCluster": {
      "resourceLink": "string"
    },
    "gkeCluster": {
      "resourceLink": "string"
    },
    "kubernetesResource": {
      "membershipCrManifest": "string",
      "resourceOptions": {
        "connectVersion": "string",
        "k8sVersion": "string",
        "v1beta1Crd": true
      }
    },
    "multiCloudCluster": {
      "resourceLink": "string"
    },
    "onPremCluster": {
      "adminCluster": true,
      "clusterType": "CLUSTERTYPE_UNSPECIFIED",
      "resourceLink": "string"
    }
  },
  "externalId": "string",
  "infrastructureType": "INFRASTRUCTURE_TYPE_UNSPECIFIED",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "monitoringConfig": {
    "cluster": "string",
    "clusterHash": "string",
    "kubernetesMetricsPrefix": "string",
    "location": "string",
    "projectId": "string"
  }
}
```

<h3 id="gkehubprojectslocationsmembershipscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent (project and location) where the Memberships will be created. Specified in the format `projects/*/locations/*`.|
|membershipId|query|string|false|Required. Client chosen ID for the membership. `membership_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.|
|requestId|query|string|false|Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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
|body|body|[Membership](#schemamembership)|false|none|
|» authority|body|[Authority](#schemaauthority)|false|Optional. How to identify workloads from this Membership. See the documentation on Workload Identity for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity|
|» description|body|string|false|Optional. Description of this membership, limited to 63 characters. Must match the regex: `a-zA-Z0-9*`|
|» endpoint|body|[MembershipEndpoint](#schemamembershipendpoint)|false|Optional. Endpoint information to reach this member.|
|» externalId|body|string|false|Optional. An externally-generated and managed ID for this Membership. This ID may be modified after creation, but this is not recommended. For GKE clusters, external_id is managed by the Hub API and updates will be ignored. The ID must match the regex: `a-zA-Z0-9*` If this Membership represents a Kubernetes cluster, this value should be set to the UID of the `kube-system` namespace object.|
|» infrastructureType|body|string|false|Optional. The infrastructure type this Membership is running on.|
|» labels|body|object|false|Optional. GCP labels for this membership.|
|» » **additionalProperties**|body|string|false|none|
|» monitoringConfig|body|[MonitoringConfig](#schemamonitoringconfig)|false|Optional. The monitoring config information for this membership.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» infrastructureType|INFRASTRUCTURE_TYPE_UNSPECIFIED|
|» infrastructureType|ON_PREM|
|» infrastructureType|MULTI_CLOUD|

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

<h3 id="gkehubprojectslocationsmembershipscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkehub.projects.locations.memberships.validateExclusivity

<a id="opIdgkehub.projects.locations.memberships.validateExclusivity"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/memberships:validateExclusivity \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/memberships:validateExclusivity`

ValidateExclusivity validates the state of exclusivity in the cluster. The validation does not depend on an existing Hub membership resource.

<h3 id="gkehubprojectslocationsmembershipsvalidateexclusivity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent (project and location) where the Memberships will be created. Specified in the format `projects/*/locations/*`.|
|crManifest|query|string|false|Optional. The YAML of the membership CR in the cluster. Empty if the membership CR does not exist.|
|intendedMembership|query|string|false|Required. The intended membership name under the `parent`. This method only does validation in anticipation of a CreateMembership call with the same name.|
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

<h3 id="gkehubprojectslocationsmembershipsvalidateexclusivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ValidateExclusivityResponse](#schemavalidateexclusivityresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkehub.projects.locations.memberships.getIamPolicy

<a id="opIdgkehub.projects.locations.memberships.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="gkehubprojectslocationsmembershipsgetiampolicy-parameters">Parameters</h3>

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

<h3 id="gkehubprojectslocationsmembershipsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkehub.projects.locations.memberships.setIamPolicy

<a id="opIdgkehub.projects.locations.memberships.setIamPolicy"></a>

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

<h3 id="gkehubprojectslocationsmembershipssetiampolicy-parameters">Parameters</h3>

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

<h3 id="gkehubprojectslocationsmembershipssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkehub.projects.locations.memberships.testIamPermissions

<a id="opIdgkehub.projects.locations.memberships.testIamPermissions"></a>

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

<h3 id="gkehubprojectslocationsmembershipstestiampermissions-parameters">Parameters</h3>

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

<h3 id="gkehubprojectslocationsmembershipstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_ApplianceCluster">ApplianceCluster</h2>
<!-- backwards compatibility -->
<a id="schemaappliancecluster"></a>
<a id="schema_ApplianceCluster"></a>
<a id="tocSappliancecluster"></a>
<a id="tocsappliancecluster"></a>

```json
{
  "resourceLink": "string"
}
```

ApplianceCluster contains information specific to GDC Edge Appliance Clusters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceLink|string|false|none|Immutable. Self-link of the GCP resource for the Appliance Cluster. For example: //transferappliance.googleapis.com/projects/my-project/locations/us-west1-a/appliances/my-appliance|

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

<h2 id="tocS_Authority">Authority</h2>
<!-- backwards compatibility -->
<a id="schemaauthority"></a>
<a id="schema_Authority"></a>
<a id="tocSauthority"></a>
<a id="tocsauthority"></a>

```json
{
  "identityProvider": "string",
  "issuer": "string",
  "oidcJwks": "string",
  "workloadIdentityPool": "string"
}
```

Authority encodes how Google will recognize identities from this Membership. See the workload identity documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityProvider|string|false|read-only|Output only. An identity provider that reflects the `issuer` in the workload identity pool.|
|issuer|string|false|none|Optional. A JSON Web Token (JWT) issuer URI. `issuer` must start with `https://` and be a valid URL with length <2000 characters. If set, then Google will allow valid OIDC tokens from this issuer to authenticate within the workload_identity_pool. OIDC discovery will be performed on this URI to validate tokens from the issuer. Clearing `issuer` disables Workload Identity. `issuer` cannot be directly modified; it must be cleared (and Workload Identity disabled) before using a new issuer (and re-enabling Workload Identity).|
|oidcJwks|string(byte)|false|none|Optional. OIDC verification keys for this Membership in JWKS format (RFC 7517). When this field is set, OIDC discovery will NOT be performed on `issuer`, and instead OIDC tokens will be validated using this field.|
|workloadIdentityPool|string|false|read-only|Output only. The name of the workload identity pool in which `issuer` will be recognized. There is a single Workload Identity Pool per Hub that is shared between all Memberships that belong to that Hub. For a Hub hosted in {PROJECT_ID}, the workload pool format is `{PROJECT_ID}.hub.id.goog`, although this is subject to change in newer versions of this API.|

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

<h2 id="tocS_ConnectAgentResource">ConnectAgentResource</h2>
<!-- backwards compatibility -->
<a id="schemaconnectagentresource"></a>
<a id="schema_ConnectAgentResource"></a>
<a id="tocSconnectagentresource"></a>
<a id="tocsconnectagentresource"></a>

```json
{
  "manifest": "string",
  "type": {
    "apiVersion": "string",
    "kind": "string"
  }
}
```

ConnectAgentResource represents a Kubernetes resource manifest for Connect Agent deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|manifest|string|false|none|YAML manifest of the resource.|
|type|[TypeMeta](#schematypemeta)|false|none|Kubernetes type of the resource.|

<h2 id="tocS_EdgeCluster">EdgeCluster</h2>
<!-- backwards compatibility -->
<a id="schemaedgecluster"></a>
<a id="schema_EdgeCluster"></a>
<a id="tocSedgecluster"></a>
<a id="tocsedgecluster"></a>

```json
{
  "resourceLink": "string"
}
```

EdgeCluster contains information specific to Google Edge Clusters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceLink|string|false|none|Immutable. Self-link of the GCP resource for the Edge Cluster. For example: //edgecontainer.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster|

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

<h2 id="tocS_GenerateConnectManifestResponse">GenerateConnectManifestResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenerateconnectmanifestresponse"></a>
<a id="schema_GenerateConnectManifestResponse"></a>
<a id="tocSgenerateconnectmanifestresponse"></a>
<a id="tocsgenerateconnectmanifestresponse"></a>

```json
{
  "manifest": [
    {
      "manifest": "string",
      "type": {
        "apiVersion": "string",
        "kind": "string"
      }
    }
  ]
}
```

GenerateConnectManifestResponse contains manifest information for installing/upgrading a Connect agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|manifest|[[ConnectAgentResource](#schemaconnectagentresource)]|false|none|The ordered list of Kubernetes resources that need to be applied to the cluster for GKE Connect agent installation/upgrade.|

<h2 id="tocS_GenerateExclusivityManifestResponse">GenerateExclusivityManifestResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenerateexclusivitymanifestresponse"></a>
<a id="schema_GenerateExclusivityManifestResponse"></a>
<a id="tocSgenerateexclusivitymanifestresponse"></a>
<a id="tocsgenerateexclusivitymanifestresponse"></a>

```json
{
  "crManifest": "string",
  "crdManifest": "string"
}
```

The response of the exclusivity artifacts manifests for the client to apply.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crManifest|string|false|none|The YAML manifest of the membership CR to apply if a new version of the CR is available. Empty if no update needs to be applied.|
|crdManifest|string|false|none|The YAML manifest of the membership CRD to apply if a newer version of the CRD is available. Empty if no update needs to be applied.|

<h2 id="tocS_GkeCluster">GkeCluster</h2>
<!-- backwards compatibility -->
<a id="schemagkecluster"></a>
<a id="schema_GkeCluster"></a>
<a id="tocSgkecluster"></a>
<a id="tocsgkecluster"></a>

```json
{
  "clusterMissing": true,
  "resourceLink": "string"
}
```

GkeCluster contains information specific to GKE clusters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterMissing|boolean|false|read-only|Output only. If cluster_missing is set then it denotes that the GKE cluster no longer exists in the GKE Control Plane.|
|resourceLink|string|false|none|Immutable. Self-link of the GCP resource for the GKE cluster. For example: //container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster Zonal clusters are also supported.|

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

<h2 id="tocS_KubernetesMetadata">KubernetesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemakubernetesmetadata"></a>
<a id="schema_KubernetesMetadata"></a>
<a id="tocSkubernetesmetadata"></a>
<a id="tocskubernetesmetadata"></a>

```json
{
  "kubernetesApiServerVersion": "string",
  "memoryMb": 0,
  "nodeCount": 0,
  "nodeProviderId": "string",
  "updateTime": "string",
  "vcpuCount": 0
}
```

KubernetesMetadata provides informational metadata for Memberships representing Kubernetes clusters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kubernetesApiServerVersion|string|false|read-only|Output only. Kubernetes API server version string as reported by '/version'.|
|memoryMb|integer(int32)|false|read-only|Output only. The total memory capacity as reported by the sum of all Kubernetes nodes resources, defined in MB.|
|nodeCount|integer(int32)|false|read-only|Output only. Node count as reported by Kubernetes nodes resources.|
|nodeProviderId|string|false|read-only|Output only. Node providerID as reported by the first node in the list of nodes on the Kubernetes endpoint. On Kubernetes platforms that support zero-node clusters (like GKE-on-GCP), the node_count will be zero and the node_provider_id will be empty.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time at which these details were last updated. This update_time is different from the Membership-level update_time since EndpointDetails are updated internally for API consumers.|
|vcpuCount|integer(int32)|false|read-only|Output only. vCPU count as reported by Kubernetes nodes resources.|

<h2 id="tocS_KubernetesResource">KubernetesResource</h2>
<!-- backwards compatibility -->
<a id="schemakubernetesresource"></a>
<a id="schema_KubernetesResource"></a>
<a id="tocSkubernetesresource"></a>
<a id="tocskubernetesresource"></a>

```json
{
  "connectResources": [
    {
      "clusterScoped": true,
      "manifest": "string"
    }
  ],
  "membershipCrManifest": "string",
  "membershipResources": [
    {
      "clusterScoped": true,
      "manifest": "string"
    }
  ],
  "resourceOptions": {
    "connectVersion": "string",
    "k8sVersion": "string",
    "v1beta1Crd": true
  }
}
```

KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectResources|[[ResourceManifest](#schemaresourcemanifest)]|false|read-only|Output only. The Kubernetes resources for installing the GKE Connect agent This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask.|
|membershipCrManifest|string|false|none|Input only. The YAML representation of the Membership CR. This field is ignored for GKE clusters where Hub can read the CR directly. Callers should provide the CR that is currently present in the cluster during CreateMembership or UpdateMembership, or leave this field empty if none exists. The CR manifest is used to validate the cluster has not been registered with another Membership.|
|membershipResources|[[ResourceManifest](#schemaresourcemanifest)]|false|read-only|Output only. Additional Kubernetes resources that need to be applied to the cluster after Membership creation, and after every update. This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask.|
|resourceOptions|[ResourceOptions](#schemaresourceoptions)|false|none|Optional. Options for Kubernetes resource generation.|

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

<h2 id="tocS_ListMembershipsResponse">ListMembershipsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmembershipsresponse"></a>
<a id="schema_ListMembershipsResponse"></a>
<a id="tocSlistmembershipsresponse"></a>
<a id="tocslistmembershipsresponse"></a>

```json
{
  "nextPageToken": "string",
  "resources": [
    {
      "authority": {
        "identityProvider": "string",
        "issuer": "string",
        "oidcJwks": "string",
        "workloadIdentityPool": "string"
      },
      "createTime": "string",
      "deleteTime": "string",
      "description": "string",
      "endpoint": {
        "applianceCluster": {
          "resourceLink": "string"
        },
        "edgeCluster": {
          "resourceLink": "string"
        },
        "gkeCluster": {
          "clusterMissing": true,
          "resourceLink": "string"
        },
        "kubernetesMetadata": {
          "kubernetesApiServerVersion": "string",
          "memoryMb": 0,
          "nodeCount": 0,
          "nodeProviderId": "string",
          "updateTime": "string",
          "vcpuCount": 0
        },
        "kubernetesResource": {
          "connectResources": [
            {
              "clusterScoped": true,
              "manifest": "string"
            }
          ],
          "membershipCrManifest": "string",
          "membershipResources": [
            {
              "clusterScoped": true,
              "manifest": "string"
            }
          ],
          "resourceOptions": {
            "connectVersion": "string",
            "k8sVersion": "string",
            "v1beta1Crd": true
          }
        },
        "multiCloudCluster": {
          "clusterMissing": true,
          "resourceLink": "string"
        },
        "onPremCluster": {
          "adminCluster": true,
          "clusterMissing": true,
          "clusterType": "CLUSTERTYPE_UNSPECIFIED",
          "resourceLink": "string"
        }
      },
      "externalId": "string",
      "infrastructureType": "INFRASTRUCTURE_TYPE_UNSPECIFIED",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "lastConnectionTime": "string",
      "monitoringConfig": {
        "cluster": "string",
        "clusterHash": "string",
        "kubernetesMetricsPrefix": "string",
        "location": "string",
        "projectId": "string"
      },
      "name": "string",
      "state": {
        "code": "CODE_UNSPECIFIED",
        "description": "string",
        "updateTime": "string"
      },
      "uniqueId": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response message for the `GkeHubMembershipService.ListMemberships` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token to request the next page of resources from the `ListMemberships` method. The value of an empty string means that there are no more resources to return.|
|resources|[[Membership](#schemamembership)]|false|none|The list of matching Memberships.|
|unreachable|[string]|false|none|List of locations that could not be reached while fetching this list.|

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

<h2 id="tocS_Membership">Membership</h2>
<!-- backwards compatibility -->
<a id="schemamembership"></a>
<a id="schema_Membership"></a>
<a id="tocSmembership"></a>
<a id="tocsmembership"></a>

```json
{
  "authority": {
    "identityProvider": "string",
    "issuer": "string",
    "oidcJwks": "string",
    "workloadIdentityPool": "string"
  },
  "createTime": "string",
  "deleteTime": "string",
  "description": "string",
  "endpoint": {
    "applianceCluster": {
      "resourceLink": "string"
    },
    "edgeCluster": {
      "resourceLink": "string"
    },
    "gkeCluster": {
      "clusterMissing": true,
      "resourceLink": "string"
    },
    "kubernetesMetadata": {
      "kubernetesApiServerVersion": "string",
      "memoryMb": 0,
      "nodeCount": 0,
      "nodeProviderId": "string",
      "updateTime": "string",
      "vcpuCount": 0
    },
    "kubernetesResource": {
      "connectResources": [
        {
          "clusterScoped": true,
          "manifest": "string"
        }
      ],
      "membershipCrManifest": "string",
      "membershipResources": [
        {
          "clusterScoped": true,
          "manifest": "string"
        }
      ],
      "resourceOptions": {
        "connectVersion": "string",
        "k8sVersion": "string",
        "v1beta1Crd": true
      }
    },
    "multiCloudCluster": {
      "clusterMissing": true,
      "resourceLink": "string"
    },
    "onPremCluster": {
      "adminCluster": true,
      "clusterMissing": true,
      "clusterType": "CLUSTERTYPE_UNSPECIFIED",
      "resourceLink": "string"
    }
  },
  "externalId": "string",
  "infrastructureType": "INFRASTRUCTURE_TYPE_UNSPECIFIED",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lastConnectionTime": "string",
  "monitoringConfig": {
    "cluster": "string",
    "clusterHash": "string",
    "kubernetesMetricsPrefix": "string",
    "location": "string",
    "projectId": "string"
  },
  "name": "string",
  "state": {
    "code": "CODE_UNSPECIFIED",
    "description": "string",
    "updateTime": "string"
  },
  "uniqueId": "string",
  "updateTime": "string"
}
```

Membership contains information about a member cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authority|[Authority](#schemaauthority)|false|none|Optional. How to identify workloads from this Membership. See the documentation on Workload Identity for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity|
|createTime|string(google-datetime)|false|read-only|Output only. When the Membership was created.|
|deleteTime|string(google-datetime)|false|read-only|Output only. When the Membership was deleted.|
|description|string|false|none|Optional. Description of this membership, limited to 63 characters. Must match the regex: `a-zA-Z0-9*`|
|endpoint|[MembershipEndpoint](#schemamembershipendpoint)|false|none|Optional. Endpoint information to reach this member.|
|externalId|string|false|none|Optional. An externally-generated and managed ID for this Membership. This ID may be modified after creation, but this is not recommended. For GKE clusters, external_id is managed by the Hub API and updates will be ignored. The ID must match the regex: `a-zA-Z0-9*` If this Membership represents a Kubernetes cluster, this value should be set to the UID of the `kube-system` namespace object.|
|infrastructureType|string|false|none|Optional. The infrastructure type this Membership is running on.|
|labels|object|false|none|Optional. GCP labels for this membership.|
|lastConnectionTime|string(google-datetime)|false|read-only|Output only. For clusters using Connect, the timestamp of the most recent connection established with Google Cloud. This time is updated every several minutes, not continuously. For clusters that do not use GKE Connect, or that have never connected successfully, this field will be unset.|
|monitoringConfig|[MonitoringConfig](#schemamonitoringconfig)|false|none|Optional. The monitoring config information for this membership.|
|name|string|false|read-only|Output only. The full, unique name of this Membership resource in the format `projects/*/locations/*/memberships/{membership_id}`, set during creation. `membership_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.|
|state|[MembershipState](#schemamembershipstate)|false|none|Output only. State of the Membership resource.|
|uniqueId|string|false|read-only|Output only. Google-generated UUID for this resource. This is unique across all Membership resources. If a Membership resource is deleted and another resource with the same name is created, it gets a different unique_id.|
|updateTime|string(google-datetime)|false|read-only|Output only. When the Membership was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|infrastructureType|INFRASTRUCTURE_TYPE_UNSPECIFIED|
|infrastructureType|ON_PREM|
|infrastructureType|MULTI_CLOUD|

<h2 id="tocS_MembershipEndpoint">MembershipEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemamembershipendpoint"></a>
<a id="schema_MembershipEndpoint"></a>
<a id="tocSmembershipendpoint"></a>
<a id="tocsmembershipendpoint"></a>

```json
{
  "applianceCluster": {
    "resourceLink": "string"
  },
  "edgeCluster": {
    "resourceLink": "string"
  },
  "gkeCluster": {
    "clusterMissing": true,
    "resourceLink": "string"
  },
  "kubernetesMetadata": {
    "kubernetesApiServerVersion": "string",
    "memoryMb": 0,
    "nodeCount": 0,
    "nodeProviderId": "string",
    "updateTime": "string",
    "vcpuCount": 0
  },
  "kubernetesResource": {
    "connectResources": [
      {
        "clusterScoped": true,
        "manifest": "string"
      }
    ],
    "membershipCrManifest": "string",
    "membershipResources": [
      {
        "clusterScoped": true,
        "manifest": "string"
      }
    ],
    "resourceOptions": {
      "connectVersion": "string",
      "k8sVersion": "string",
      "v1beta1Crd": true
    }
  },
  "multiCloudCluster": {
    "clusterMissing": true,
    "resourceLink": "string"
  },
  "onPremCluster": {
    "adminCluster": true,
    "clusterMissing": true,
    "clusterType": "CLUSTERTYPE_UNSPECIFIED",
    "resourceLink": "string"
  }
}
```

MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applianceCluster|[ApplianceCluster](#schemaappliancecluster)|false|none|Optional. Specific information for a GDC Edge Appliance cluster.|
|edgeCluster|[EdgeCluster](#schemaedgecluster)|false|none|Optional. Specific information for a Google Edge cluster.|
|gkeCluster|[GkeCluster](#schemagkecluster)|false|none|Optional. Specific information for a GKE-on-GCP cluster.|
|kubernetesMetadata|[KubernetesMetadata](#schemakubernetesmetadata)|false|none|Output only. Useful Kubernetes-specific metadata.|
|kubernetesResource|[KubernetesResource](#schemakubernetesresource)|false|none|Optional. The in-cluster Kubernetes Resources that should be applied for a correctly registered cluster, in the steady state. These resources: * Ensure that the cluster is exclusively registered to one and only one Hub Membership. * Propagate Workload Pool Information available in the Membership Authority field. * Ensure proper initial configuration of default Hub Features.|
|multiCloudCluster|[MultiCloudCluster](#schemamulticloudcluster)|false|none|Optional. Specific information for a GKE Multi-Cloud cluster.|
|onPremCluster|[OnPremCluster](#schemaonpremcluster)|false|none|Optional. Specific information for a GKE On-Prem cluster. An onprem user-cluster who has no resourceLink is not allowed to use this field, it should have a nil "type" instead.|

<h2 id="tocS_MembershipState">MembershipState</h2>
<!-- backwards compatibility -->
<a id="schemamembershipstate"></a>
<a id="schema_MembershipState"></a>
<a id="tocSmembershipstate"></a>
<a id="tocsmembershipstate"></a>

```json
{
  "code": "CODE_UNSPECIFIED",
  "description": "string",
  "updateTime": "string"
}
```

State of the Membership resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|read-only|Output only. The current state of the Membership resource.|
|description|string|false|none|This field is never set by the Hub Service.|
|updateTime|string(google-datetime)|false|none|This field is never set by the Hub Service.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|CODE_UNSPECIFIED|
|code|CREATING|
|code|READY|
|code|DELETING|
|code|UPDATING|
|code|SERVICE_UPDATING|

<h2 id="tocS_MonitoringConfig">MonitoringConfig</h2>
<!-- backwards compatibility -->
<a id="schemamonitoringconfig"></a>
<a id="schema_MonitoringConfig"></a>
<a id="tocSmonitoringconfig"></a>
<a id="tocsmonitoringconfig"></a>

```json
{
  "cluster": "string",
  "clusterHash": "string",
  "kubernetesMetricsPrefix": "string",
  "location": "string",
  "projectId": "string"
}
```

This field informs Fleet-based applications/services/UIs with the necessary information for where each underlying Cluster reports its metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|string|false|none|Immutable. Cluster name used to report metrics. For Anthos on VMWare/Baremetal, it would be in format `memberClusters/cluster_name`; And for Anthos on MultiCloud, it would be in format `{azureClusters, awsClusters}/cluster_name`.|
|clusterHash|string|false|none|Immutable. Cluster hash, this is a unique string generated by google code, which does not contain any PII, which we can use to reference the cluster. This is expected to be created by the monitoring stack and persisted into the Cluster object as well as to GKE-Hub.|
|kubernetesMetricsPrefix|string|false|none|Kubernetes system metrics, if available, are written to this prefix. This defaults to kubernetes.io for GKE, and kubernetes.io/anthos for Anthos eventually. Noted: Anthos MultiCloud will have kubernetes.io prefix today but will migration to be under kubernetes.io/anthos|
|location|string|false|none|Immutable. Location used to report Metrics|
|projectId|string|false|none|Immutable. Project used to report Metrics|

<h2 id="tocS_MultiCloudCluster">MultiCloudCluster</h2>
<!-- backwards compatibility -->
<a id="schemamulticloudcluster"></a>
<a id="schema_MultiCloudCluster"></a>
<a id="tocSmulticloudcluster"></a>
<a id="tocsmulticloudcluster"></a>

```json
{
  "clusterMissing": true,
  "resourceLink": "string"
}
```

MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterMissing|boolean|false|read-only|Output only. If cluster_missing is set then it denotes that API(gkemulticloud.googleapis.com) resource for this GKE Multi-Cloud cluster no longer exists.|
|resourceLink|string|false|none|Immutable. Self-link of the GCP resource for the GKE Multi-Cloud cluster. For example: //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/awsClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/azureClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/attachedClusters/my-cluster|

<h2 id="tocS_OnPremCluster">OnPremCluster</h2>
<!-- backwards compatibility -->
<a id="schemaonpremcluster"></a>
<a id="schema_OnPremCluster"></a>
<a id="tocSonpremcluster"></a>
<a id="tocsonpremcluster"></a>

```json
{
  "adminCluster": true,
  "clusterMissing": true,
  "clusterType": "CLUSTERTYPE_UNSPECIFIED",
  "resourceLink": "string"
}
```

OnPremCluster contains information specific to GKE On-Prem clusters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminCluster|boolean|false|none|Immutable. Whether the cluster is an admin cluster.|
|clusterMissing|boolean|false|read-only|Output only. If cluster_missing is set then it denotes that API(gkeonprem.googleapis.com) resource for this GKE On-Prem cluster no longer exists.|
|clusterType|string|false|none|Immutable. The on prem cluster's type.|
|resourceLink|string|false|none|Immutable. Self-link of the GCP resource for the GKE On-Prem cluster. For example: //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/vmwareClusters/my-cluster //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/bareMetalClusters/my-cluster|

#### Enumerated Values

|Property|Value|
|---|---|
|clusterType|CLUSTERTYPE_UNSPECIFIED|
|clusterType|BOOTSTRAP|
|clusterType|HYBRID|
|clusterType|STANDALONE|
|clusterType|USER|

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
|error|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The error result of the operation in case of failure or cancellation.|
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

Represents the metadata of the long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|read-only|Output only. API version used to start the operation.|
|cancelRequested|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|statusDetail|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

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

<h2 id="tocS_ResourceManifest">ResourceManifest</h2>
<!-- backwards compatibility -->
<a id="schemaresourcemanifest"></a>
<a id="schema_ResourceManifest"></a>
<a id="tocSresourcemanifest"></a>
<a id="tocsresourcemanifest"></a>

```json
{
  "clusterScoped": true,
  "manifest": "string"
}
```

ResourceManifest represents a single Kubernetes resource to be applied to the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterScoped|boolean|false|none|Whether the resource provided in the manifest is `cluster_scoped`. If unset, the manifest is assumed to be namespace scoped. This field is used for REST mapping when applying the resource in a cluster.|
|manifest|string|false|none|YAML manifest of the resource.|

<h2 id="tocS_ResourceOptions">ResourceOptions</h2>
<!-- backwards compatibility -->
<a id="schemaresourceoptions"></a>
<a id="schema_ResourceOptions"></a>
<a id="tocSresourceoptions"></a>
<a id="tocsresourceoptions"></a>

```json
{
  "connectVersion": "string",
  "k8sVersion": "string",
  "v1beta1Crd": true
}
```

ResourceOptions represent options for Kubernetes resource generation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectVersion|string|false|none|Optional. The Connect agent version to use for connect_resources. Defaults to the latest GKE Connect version. The version must be a currently supported version, obsolete versions will be rejected.|
|k8sVersion|string|false|none|Optional. Major version of the Kubernetes cluster. This is only used to determine which version to use for the CustomResourceDefinition resources, `apiextensions/v1beta1` or`apiextensions/v1`.|
|v1beta1Crd|boolean|false|none|Optional. Use `apiextensions/v1beta1` instead of `apiextensions/v1` for CustomResourceDefinition resources. This option should be set for clusters with Kubernetes apiserver versions <1.16.|

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

<h2 id="tocS_TypeMeta">TypeMeta</h2>
<!-- backwards compatibility -->
<a id="schematypemeta"></a>
<a id="schema_TypeMeta"></a>
<a id="tocStypemeta"></a>
<a id="tocstypemeta"></a>

```json
{
  "apiVersion": "string",
  "kind": "string"
}
```

TypeMeta is the type information needed for content unmarshalling of Kubernetes resources in the manifest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|APIVersion of the resource (e.g. v1).|
|kind|string|false|none|Kind of the resource (e.g. Deployment).|

<h2 id="tocS_ValidateExclusivityResponse">ValidateExclusivityResponse</h2>
<!-- backwards compatibility -->
<a id="schemavalidateexclusivityresponse"></a>
<a id="schema_ValidateExclusivityResponse"></a>
<a id="tocSvalidateexclusivityresponse"></a>
<a id="tocsvalidateexclusivityresponse"></a>

```json
{
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

The response of exclusivity artifacts validation result status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The validation result. * `OK` means that exclusivity is validated, assuming the manifest produced by GenerateExclusivityManifest is successfully applied. * `ALREADY_EXISTS` means that the Membership CRD is already owned by another Hub. See `status.message` for more information.|
