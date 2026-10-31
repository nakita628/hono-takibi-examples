<h1 id="network-connectivity-api">Network Connectivity API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API enables connectivity with and between Google Cloud resources.

Base URLs:

* <a href="https://networkconnectivity.googleapis.com/">https://networkconnectivity.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest">External documentation</a>

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

<h1 id="network-connectivity-api-projects">projects</h1>

## networkconnectivity.projects.locations.spokes.get

<a id="opIdnetworkconnectivity.projects.locations.spokes.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets details about a Network Connectivity Center spoke.

<h3 id="networkconnectivityprojectslocationsspokesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the spoke resource.|
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
  "createTime": "string",
  "description": "string",
  "hub": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "linkedInterconnectAttachments": {
    "siteToSiteDataTransfer": true,
    "uris": [
      "string"
    ],
    "vpcNetwork": "string"
  },
  "linkedRouterApplianceInstances": {
    "instances": [
      {
        "ipAddress": "string",
        "virtualMachine": "string"
      }
    ],
    "siteToSiteDataTransfer": true,
    "vpcNetwork": "string"
  },
  "linkedVpnTunnels": {
    "siteToSiteDataTransfer": true,
    "uris": [
      "string"
    ],
    "vpcNetwork": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "uniqueId": "string",
  "updateTime": "string"
}
```

<h3 id="networkconnectivityprojectslocationsspokesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Spoke](#schemaspoke)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkconnectivity.projects.locations.spokes.delete

<a id="opIdnetworkconnectivity.projects.locations.spokes.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a Network Connectivity Center spoke.

<h3 id="networkconnectivityprojectslocationsspokesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the spoke to delete.|
|requestId|query|string|false|Optional. A unique request ID (optional). If you specify this ID, you can use it in cases when you need to retry your request. When you need to retry, this ID lets the server know that it can ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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

<h3 id="networkconnectivityprojectslocationsspokesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkconnectivity.projects.locations.spokes.patch

<a id="opIdnetworkconnectivity.projects.locations.spokes.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "hub": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "linkedInterconnectAttachments": {
      "siteToSiteDataTransfer": true,
      "uris": [
        "string"
      ]
    },
    "linkedRouterApplianceInstances": {
      "instances": [
        {
          "ipAddress": "string",
          "virtualMachine": "string"
        }
      ],
      "siteToSiteDataTransfer": true
    },
    "linkedVpnTunnels": {
      "siteToSiteDataTransfer": true,
      "uris": [
        "string"
      ]
    },
    "name": "string"
  }'
```

`PATCH /v1/{name}`

Updates the parameters of a Network Connectivity Center spoke.

> Body parameter

```json
{
  "description": "string",
  "hub": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "linkedInterconnectAttachments": {
    "siteToSiteDataTransfer": true,
    "uris": [
      "string"
    ]
  },
  "linkedRouterApplianceInstances": {
    "instances": [
      {
        "ipAddress": "string",
        "virtualMachine": "string"
      }
    ],
    "siteToSiteDataTransfer": true
  },
  "linkedVpnTunnels": {
    "siteToSiteDataTransfer": true,
    "uris": [
      "string"
    ]
  },
  "name": "string"
}
```

<h3 id="networkconnectivityprojectslocationsspokespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Immutable. The name of the spoke. Spoke names must be unique. They use the following form: `projects/{project_number}/locations/{region}/spokes/{spoke_id}`|
|requestId|query|string|false|Optional. A unique request ID (optional). If you specify this ID, you can use it in cases when you need to retry your request. When you need to retry, this ID lets the server know that it can ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|updateMask|query|string|false|Optional. In the case of an update to an existing spoke, field mask is used to specify the fields to be overwritten. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not provide a mask, then all fields are overwritten.|
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
|body|body|[Spoke](#schemaspoke)|false|none|
|» description|body|string|false|An optional description of the spoke.|
|» hub|body|string|false|Immutable. The name of the hub that this spoke is attached to.|
|» labels|body|object|false|Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).|
|» » **additionalProperties**|body|string|false|none|
|» linkedInterconnectAttachments|body|[LinkedInterconnectAttachments](#schemalinkedinterconnectattachments)|false|VLAN attachments that are associated with the spoke.|
|» linkedRouterApplianceInstances|body|[LinkedRouterApplianceInstances](#schemalinkedrouterapplianceinstances)|false|Router appliance instances that are associated with the spoke.|
|» linkedVpnTunnels|body|[LinkedVpnTunnels](#schemalinkedvpntunnels)|false|VPN tunnels that are associated with the spoke.|
|» name|body|string|false|Immutable. The name of the spoke. Spoke names must be unique. They use the following form: `projects/{project_number}/locations/{region}/spokes/{spoke_id}`|

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

<h3 id="networkconnectivityprojectslocationsspokespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkconnectivity.projects.locations.list

<a id="opIdnetworkconnectivity.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="networkconnectivityprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="networkconnectivityprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkconnectivity.projects.locations.operations.list

<a id="opIdnetworkconnectivity.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="networkconnectivityprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="networkconnectivityprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningListOperationsResponse](#schemagooglelongrunninglistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkconnectivity.projects.locations.operations.cancel

<a id="opIdnetworkconnectivity.projects.locations.operations.cancel"></a>

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

<h3 id="networkconnectivityprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="networkconnectivityprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkconnectivity.projects.locations.global.hubs.list

<a id="opIdnetworkconnectivity.projects.locations.global.hubs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/hubs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/hubs`

Lists the Network Connectivity Center hubs associated with a given project.

<h3 id="networkconnectivityprojectslocationsglobalhubslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource's name.|
|filter|query|string|false|An expression that filters the list of results.|
|orderBy|query|string|false|Sort the results by a certain order.|
|pageSize|query|integer|false|The maximum number of results per page to return.|
|pageToken|query|string|false|The page token.|
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
  "hubs": [
    {
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "routingVpcs": [
        {
          "requiredForNewSiteToSiteDataTransferSpokes": true,
          "uri": "string"
        }
      ],
      "state": "STATE_UNSPECIFIED",
      "uniqueId": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="networkconnectivityprojectslocationsglobalhubslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListHubsResponse](#schemalisthubsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkconnectivity.projects.locations.global.hubs.create

<a id="opIdnetworkconnectivity.projects.locations.global.hubs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/hubs \
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
    "routingVpcs": [
      {
        "uri": "string"
      }
    ]
  }'
```

`POST /v1/{parent}/hubs`

Creates a new Network Connectivity Center hub in the specified project.

> Body parameter

```json
{
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "routingVpcs": [
    {
      "uri": "string"
    }
  ]
}
```

<h3 id="networkconnectivityprojectslocationsglobalhubscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource.|
|hubId|query|string|false|Required. A unique identifier for the hub.|
|requestId|query|string|false|Optional. A unique request ID (optional). If you specify this ID, you can use it in cases when you need to retry your request. When you need to retry, this ID lets the server know that it can ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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
|body|body|[Hub](#schemahub)|false|none|
|» description|body|string|false|An optional description of the hub.|
|» labels|body|object|false|Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Immutable. The name of the hub. Hub names must be unique. They use the following form: `projects/{project_number}/locations/global/hubs/{hub_id}`|
|» routingVpcs|body|[[RoutingVPC](#schemaroutingvpc)]|false|The VPC networks associated with this hub's spokes. This field is read-only. Network Connectivity Center automatically populates it based on the set of spokes attached to the hub.|

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

<h3 id="networkconnectivityprojectslocationsglobalhubscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkconnectivity.projects.locations.internalRanges.list

<a id="opIdnetworkconnectivity.projects.locations.internalRanges.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/internalRanges \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/internalRanges`

Lists internal ranges in a given project and location.

<h3 id="networkconnectivityprojectslocationsinternalrangeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource's name.|
|filter|query|string|false|A filter expression that filters the results listed in the response.|
|orderBy|query|string|false|Sort the results by a certain order.|
|pageSize|query|integer|false|The maximum number of results per page that should be returned.|
|pageToken|query|string|false|The page token.|
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
  "internalRanges": [
    {
      "createTime": "string",
      "description": "string",
      "ipCidrRange": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "network": "string",
      "overlaps": [
        "OVERLAP_UNSPECIFIED"
      ],
      "peering": "PEERING_UNSPECIFIED",
      "prefixLength": 0,
      "targetCidrRange": [
        "string"
      ],
      "updateTime": "string",
      "usage": "USAGE_UNSPECIFIED",
      "users": [
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

<h3 id="networkconnectivityprojectslocationsinternalrangeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListInternalRangesResponse](#schemalistinternalrangesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkconnectivity.projects.locations.internalRanges.create

<a id="opIdnetworkconnectivity.projects.locations.internalRanges.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/internalRanges \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "createTime": "string",
    "description": "string",
    "ipCidrRange": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "network": "string",
    "overlaps": [
      "OVERLAP_UNSPECIFIED"
    ],
    "peering": "PEERING_UNSPECIFIED",
    "prefixLength": 0,
    "targetCidrRange": [
      "string"
    ],
    "updateTime": "string",
    "usage": "USAGE_UNSPECIFIED"
  }'
```

`POST /v1/{parent}/internalRanges`

Creates a new internal range in a given project and location.

> Body parameter

```json
{
  "createTime": "string",
  "description": "string",
  "ipCidrRange": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "network": "string",
  "overlaps": [
    "OVERLAP_UNSPECIFIED"
  ],
  "peering": "PEERING_UNSPECIFIED",
  "prefixLength": 0,
  "targetCidrRange": [
    "string"
  ],
  "updateTime": "string",
  "usage": "USAGE_UNSPECIFIED"
}
```

<h3 id="networkconnectivityprojectslocationsinternalrangescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource's name of the internal range.|
|internalRangeId|query|string|false|Optional. Resource ID (i.e. 'foo' in '[...]/projects/p/locations/l/internalRanges/foo') See https://google.aip.dev/122#resource-id-segments Unique per location.|
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
|body|body|[InternalRange](#schemainternalrange)|false|none|
|» createTime|body|string(google-datetime)|false|Time when the internal range was created.|
|» description|body|string|false|A description of this resource.|
|» ipCidrRange|body|string|false|The IP range that this internal range defines.|
|» labels|body|object|false|User-defined labels.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Immutable. The name of an internal range. Format: projects/{project}/locations/{location}/internalRanges/{internal_range} See: https://google.aip.dev/122#fields-representing-resource-names|
|» network|body|string|false|The URL or resource ID of the network in which to reserve the internal range. The network cannot be deleted if there are any reserved internal ranges referring to it. Legacy networks are not supported. This can only be specified for a global internal address. Example: - URL: /compute/v1/projects/{project}/global/networks/{resourceId} - ID: network123|
|» overlaps|body|[string]|false|Optional. Types of resources that are allowed to overlap with the current internal range.|
|» peering|body|string|false|The type of peering set for this internal range.|
|» prefixLength|body|integer(int32)|false|An alternate to ip_cidr_range. Can be set when trying to create a reservation that automatically finds a free range of the given size. If both ip_cidr_range and prefix_length are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size.|
|» targetCidrRange|body|[string]|false|Optional. Can be set to narrow down or pick a different address space while searching for a free range. If not set, defaults to the "10.0.0.0/8" address space. This can be used to search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.|
|» updateTime|body|string(google-datetime)|false|Time when the internal range was updated.|
|» usage|body|string|false|The type of usage set for this InternalRange.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» overlaps|OVERLAP_UNSPECIFIED|
|» overlaps|OVERLAP_ROUTE_RANGE|
|» peering|PEERING_UNSPECIFIED|
|» peering|FOR_SELF|
|» peering|FOR_PEER|
|» peering|NOT_SHARED|
|» usage|USAGE_UNSPECIFIED|
|» usage|FOR_VPC|
|» usage|EXTERNAL_TO_VPC|

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

<h3 id="networkconnectivityprojectslocationsinternalrangescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkconnectivity.projects.locations.spokes.list

<a id="opIdnetworkconnectivity.projects.locations.spokes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/spokes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/spokes`

Lists the Network Connectivity Center spokes in a specified project and location.

<h3 id="networkconnectivityprojectslocationsspokeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource.|
|filter|query|string|false|An expression that filters the list of results.|
|orderBy|query|string|false|Sort the results by a certain order.|
|pageSize|query|integer|false|The maximum number of results to return per page.|
|pageToken|query|string|false|The page token.|
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
  "spokes": [
    {
      "createTime": "string",
      "description": "string",
      "hub": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "linkedInterconnectAttachments": {
        "siteToSiteDataTransfer": true,
        "uris": [
          "string"
        ],
        "vpcNetwork": "string"
      },
      "linkedRouterApplianceInstances": {
        "instances": [
          {
            "ipAddress": "string",
            "virtualMachine": "string"
          }
        ],
        "siteToSiteDataTransfer": true,
        "vpcNetwork": "string"
      },
      "linkedVpnTunnels": {
        "siteToSiteDataTransfer": true,
        "uris": [
          "string"
        ],
        "vpcNetwork": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "uniqueId": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="networkconnectivityprojectslocationsspokeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSpokesResponse](#schemalistspokesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkconnectivity.projects.locations.spokes.create

<a id="opIdnetworkconnectivity.projects.locations.spokes.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/spokes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "hub": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "linkedInterconnectAttachments": {
      "siteToSiteDataTransfer": true,
      "uris": [
        "string"
      ]
    },
    "linkedRouterApplianceInstances": {
      "instances": [
        {
          "ipAddress": "string",
          "virtualMachine": "string"
        }
      ],
      "siteToSiteDataTransfer": true
    },
    "linkedVpnTunnels": {
      "siteToSiteDataTransfer": true,
      "uris": [
        "string"
      ]
    },
    "name": "string"
  }'
```

`POST /v1/{parent}/spokes`

Creates a Network Connectivity Center spoke.

> Body parameter

```json
{
  "description": "string",
  "hub": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "linkedInterconnectAttachments": {
    "siteToSiteDataTransfer": true,
    "uris": [
      "string"
    ]
  },
  "linkedRouterApplianceInstances": {
    "instances": [
      {
        "ipAddress": "string",
        "virtualMachine": "string"
      }
    ],
    "siteToSiteDataTransfer": true
  },
  "linkedVpnTunnels": {
    "siteToSiteDataTransfer": true,
    "uris": [
      "string"
    ]
  },
  "name": "string"
}
```

<h3 id="networkconnectivityprojectslocationsspokescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource.|
|requestId|query|string|false|Optional. A unique request ID (optional). If you specify this ID, you can use it in cases when you need to retry your request. When you need to retry, this ID lets the server know that it can ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|spokeId|query|string|false|Required. Unique id for the spoke to create.|
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
|body|body|[Spoke](#schemaspoke)|false|none|
|» description|body|string|false|An optional description of the spoke.|
|» hub|body|string|false|Immutable. The name of the hub that this spoke is attached to.|
|» labels|body|object|false|Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).|
|» » **additionalProperties**|body|string|false|none|
|» linkedInterconnectAttachments|body|[LinkedInterconnectAttachments](#schemalinkedinterconnectattachments)|false|VLAN attachments that are associated with the spoke.|
|» linkedRouterApplianceInstances|body|[LinkedRouterApplianceInstances](#schemalinkedrouterapplianceinstances)|false|Router appliance instances that are associated with the spoke.|
|» linkedVpnTunnels|body|[LinkedVpnTunnels](#schemalinkedvpntunnels)|false|VPN tunnels that are associated with the spoke.|
|» name|body|string|false|Immutable. The name of the spoke. Spoke names must be unique. They use the following form: `projects/{project_number}/locations/{region}/spokes/{spoke_id}`|

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

<h3 id="networkconnectivityprojectslocationsspokescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkconnectivity.projects.locations.spokes.getIamPolicy

<a id="opIdnetworkconnectivity.projects.locations.spokes.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="networkconnectivityprojectslocationsspokesgetiampolicy-parameters">Parameters</h3>

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

<h3 id="networkconnectivityprojectslocationsspokesgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkconnectivity.projects.locations.spokes.setIamPolicy

<a id="opIdnetworkconnectivity.projects.locations.spokes.setIamPolicy"></a>

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

<h3 id="networkconnectivityprojectslocationsspokessetiampolicy-parameters">Parameters</h3>

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

<h3 id="networkconnectivityprojectslocationsspokessetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkconnectivity.projects.locations.spokes.testIamPermissions

<a id="opIdnetworkconnectivity.projects.locations.spokes.testIamPermissions"></a>

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

<h3 id="networkconnectivityprojectslocationsspokestestiampermissions-parameters">Parameters</h3>

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

<h3 id="networkconnectivityprojectslocationsspokestestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

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

<h2 id="tocS_Hub">Hub</h2>
<!-- backwards compatibility -->
<a id="schemahub"></a>
<a id="schema_Hub"></a>
<a id="tocShub"></a>
<a id="tocshub"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "routingVpcs": [
    {
      "requiredForNewSiteToSiteDataTransferSpokes": true,
      "uri": "string"
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "uniqueId": "string",
  "updateTime": "string"
}
```

A Network Connectivity Center hub is a global management resource to which you attach spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the site-to-site data transfer feature, the resources associated with those spokes must all be in the same VPC network. Spokes that do not use site-to-site data transfer can be associated with any VPC network in your project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the hub was created.|
|description|string|false|none|An optional description of the hub.|
|labels|object|false|none|Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).|
|name|string|false|none|Immutable. The name of the hub. Hub names must be unique. They use the following form: `projects/{project_number}/locations/global/hubs/{hub_id}`|
|routingVpcs|[[RoutingVPC](#schemaroutingvpc)]|false|none|The VPC networks associated with this hub's spokes. This field is read-only. Network Connectivity Center automatically populates it based on the set of spokes attached to the hub.|
|state|string|false|read-only|Output only. The current lifecycle state of this hub.|
|uniqueId|string|false|read-only|Output only. The Google-generated UUID for the hub. This value is unique across all hub resources. If a hub is deleted and another with the same name is created, the new hub is assigned a different unique_id.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time the hub was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|ACTIVE|
|state|DELETING|
|state|UPDATING|

<h2 id="tocS_InternalRange">InternalRange</h2>
<!-- backwards compatibility -->
<a id="schemainternalrange"></a>
<a id="schema_InternalRange"></a>
<a id="tocSinternalrange"></a>
<a id="tocsinternalrange"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "ipCidrRange": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "network": "string",
  "overlaps": [
    "OVERLAP_UNSPECIFIED"
  ],
  "peering": "PEERING_UNSPECIFIED",
  "prefixLength": 0,
  "targetCidrRange": [
    "string"
  ],
  "updateTime": "string",
  "usage": "USAGE_UNSPECIFIED",
  "users": [
    "string"
  ]
}
```

The internal range resource for IPAM operations within a VPC network. Used to represent a private address range along with behavioral characterstics of that range (its usage and peering behavior). Networking resources can link to this range if they are created as belonging to it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Time when the internal range was created.|
|description|string|false|none|A description of this resource.|
|ipCidrRange|string|false|none|The IP range that this internal range defines.|
|labels|object|false|none|User-defined labels.|
|name|string|false|none|Immutable. The name of an internal range. Format: projects/{project}/locations/{location}/internalRanges/{internal_range} See: https://google.aip.dev/122#fields-representing-resource-names|
|network|string|false|none|The URL or resource ID of the network in which to reserve the internal range. The network cannot be deleted if there are any reserved internal ranges referring to it. Legacy networks are not supported. This can only be specified for a global internal address. Example: - URL: /compute/v1/projects/{project}/global/networks/{resourceId} - ID: network123|
|overlaps|[string]|false|none|Optional. Types of resources that are allowed to overlap with the current internal range.|
|peering|string|false|none|The type of peering set for this internal range.|
|prefixLength|integer(int32)|false|none|An alternate to ip_cidr_range. Can be set when trying to create a reservation that automatically finds a free range of the given size. If both ip_cidr_range and prefix_length are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size.|
|targetCidrRange|[string]|false|none|Optional. Can be set to narrow down or pick a different address space while searching for a free range. If not set, defaults to the "10.0.0.0/8" address space. This can be used to search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.|
|updateTime|string(google-datetime)|false|none|Time when the internal range was updated.|
|usage|string|false|none|The type of usage set for this InternalRange.|
|users|[string]|false|read-only|Output only. The list of resources that refer to this internal range. Resources that use the internal range for their range allocation are referred to as users of the range. Other resources mark themselves as users while doing so by creating a reference to this internal range. Having a user, based on this reference, prevents deletion of the internal range referred to. Can be empty.|

#### Enumerated Values

|Property|Value|
|---|---|
|overlaps|OVERLAP_UNSPECIFIED|
|overlaps|OVERLAP_ROUTE_RANGE|
|peering|PEERING_UNSPECIFIED|
|peering|FOR_SELF|
|peering|FOR_PEER|
|peering|NOT_SHARED|
|usage|USAGE_UNSPECIFIED|
|usage|FOR_VPC|
|usage|EXTERNAL_TO_VPC|

<h2 id="tocS_LinkedInterconnectAttachments">LinkedInterconnectAttachments</h2>
<!-- backwards compatibility -->
<a id="schemalinkedinterconnectattachments"></a>
<a id="schema_LinkedInterconnectAttachments"></a>
<a id="tocSlinkedinterconnectattachments"></a>
<a id="tocslinkedinterconnectattachments"></a>

```json
{
  "siteToSiteDataTransfer": true,
  "uris": [
    "string"
  ],
  "vpcNetwork": "string"
}
```

A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|siteToSiteDataTransfer|boolean|false|none|A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations).|
|uris|[string]|false|none|The URIs of linked interconnect attachment resources|
|vpcNetwork|string|false|read-only|Output only. The VPC network where these VLAN attachments are located.|

<h2 id="tocS_LinkedRouterApplianceInstances">LinkedRouterApplianceInstances</h2>
<!-- backwards compatibility -->
<a id="schemalinkedrouterapplianceinstances"></a>
<a id="schema_LinkedRouterApplianceInstances"></a>
<a id="tocSlinkedrouterapplianceinstances"></a>
<a id="tocslinkedrouterapplianceinstances"></a>

```json
{
  "instances": [
    {
      "ipAddress": "string",
      "virtualMachine": "string"
    }
  ],
  "siteToSiteDataTransfer": true,
  "vpcNetwork": "string"
}
```

A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instances|[[RouterApplianceInstance](#schemarouterapplianceinstance)]|false|none|The list of router appliance instances.|
|siteToSiteDataTransfer|boolean|false|none|A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations).|
|vpcNetwork|string|false|read-only|Output only. The VPC network where these router appliance instances are located.|

<h2 id="tocS_LinkedVpnTunnels">LinkedVpnTunnels</h2>
<!-- backwards compatibility -->
<a id="schemalinkedvpntunnels"></a>
<a id="schema_LinkedVpnTunnels"></a>
<a id="tocSlinkedvpntunnels"></a>
<a id="tocslinkedvpntunnels"></a>

```json
{
  "siteToSiteDataTransfer": true,
  "uris": [
    "string"
  ],
  "vpcNetwork": "string"
}
```

A collection of Cloud VPN tunnel resources. These resources should be redundant HA VPN tunnels that all advertise the same prefixes to Google Cloud. Alternatively, in a passive/active configuration, all tunnels should be capable of advertising the same prefixes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|siteToSiteDataTransfer|boolean|false|none|A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations).|
|uris|[string]|false|none|The URIs of linked VPN tunnel resources.|
|vpcNetwork|string|false|read-only|Output only. The VPC network where these VPN tunnels are located.|

<h2 id="tocS_ListHubsResponse">ListHubsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthubsresponse"></a>
<a id="schema_ListHubsResponse"></a>
<a id="tocSlisthubsresponse"></a>
<a id="tocslisthubsresponse"></a>

```json
{
  "hubs": [
    {
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "routingVpcs": [
        {
          "requiredForNewSiteToSiteDataTransferSpokes": true,
          "uri": "string"
        }
      ],
      "state": "STATE_UNSPECIFIED",
      "uniqueId": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response for HubService.ListHubs method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hubs|[[Hub](#schemahub)]|false|none|The requested hubs.|
|nextPageToken|string|false|none|The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListInternalRangesResponse">ListInternalRangesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinternalrangesresponse"></a>
<a id="schema_ListInternalRangesResponse"></a>
<a id="tocSlistinternalrangesresponse"></a>
<a id="tocslistinternalrangesresponse"></a>

```json
{
  "internalRanges": [
    {
      "createTime": "string",
      "description": "string",
      "ipCidrRange": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "network": "string",
      "overlaps": [
        "OVERLAP_UNSPECIFIED"
      ],
      "peering": "PEERING_UNSPECIFIED",
      "prefixLength": 0,
      "targetCidrRange": [
        "string"
      ],
      "updateTime": "string",
      "usage": "USAGE_UNSPECIFIED",
      "users": [
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

Response for InternalRange.ListInternalRanges

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|internalRanges|[[InternalRange](#schemainternalrange)]|false|none|Internal ranges to be returned.|
|nextPageToken|string|false|none|The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result.|
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

<h2 id="tocS_ListSpokesResponse">ListSpokesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistspokesresponse"></a>
<a id="schema_ListSpokesResponse"></a>
<a id="tocSlistspokesresponse"></a>
<a id="tocslistspokesresponse"></a>

```json
{
  "nextPageToken": "string",
  "spokes": [
    {
      "createTime": "string",
      "description": "string",
      "hub": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "linkedInterconnectAttachments": {
        "siteToSiteDataTransfer": true,
        "uris": [
          "string"
        ],
        "vpcNetwork": "string"
      },
      "linkedRouterApplianceInstances": {
        "instances": [
          {
            "ipAddress": "string",
            "virtualMachine": "string"
          }
        ],
        "siteToSiteDataTransfer": true,
        "vpcNetwork": "string"
      },
      "linkedVpnTunnels": {
        "siteToSiteDataTransfer": true,
        "uris": [
          "string"
        ],
        "vpcNetwork": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "uniqueId": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

The response for HubService.ListSpokes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results.|
|spokes|[[Spoke](#schemaspoke)]|false|none|The requested spokes.|
|unreachable|[string]|false|none|Locations that could not be reached.|

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

<h2 id="tocS_LocationMetadata">LocationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemalocationmetadata"></a>
<a id="schema_LocationMetadata"></a>
<a id="tocSlocationmetadata"></a>
<a id="tocslocationmetadata"></a>

```json
{
  "locationFeatures": [
    "LOCATION_FEATURE_UNSPECIFIED"
  ]
}
```

Metadata about locations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locationFeatures|[string]|false|none|List of supported features|

#### Enumerated Values

|Property|Value|
|---|---|
|locationFeatures|LOCATION_FEATURE_UNSPECIFIED|
|locationFeatures|SITE_TO_CLOUD_SPOKES|
|locationFeatures|SITE_TO_SITE_SPOKES|

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

<h2 id="tocS_RouterApplianceInstance">RouterApplianceInstance</h2>
<!-- backwards compatibility -->
<a id="schemarouterapplianceinstance"></a>
<a id="schema_RouterApplianceInstance"></a>
<a id="tocSrouterapplianceinstance"></a>
<a id="tocsrouterapplianceinstance"></a>

```json
{
  "ipAddress": "string",
  "virtualMachine": "string"
}
```

A router appliance instance is a Compute Engine virtual machine (VM) instance that acts as a BGP speaker. A router appliance instance is specified by the URI of the VM and the internal IP address of one of the VM's network interfaces.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipAddress|string|false|none|The IP address on the VM to use for peering.|
|virtualMachine|string|false|none|The URI of the VM.|

<h2 id="tocS_RoutingVPC">RoutingVPC</h2>
<!-- backwards compatibility -->
<a id="schemaroutingvpc"></a>
<a id="schema_RoutingVPC"></a>
<a id="tocSroutingvpc"></a>
<a id="tocsroutingvpc"></a>

```json
{
  "requiredForNewSiteToSiteDataTransferSpokes": true,
  "uri": "string"
}
```

RoutingVPC contains information about the VPC networks associated with the spokes of a Network Connectivity Center hub.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requiredForNewSiteToSiteDataTransferSpokes|boolean|false|read-only|Output only. If true, indicates that this VPC network is currently associated with spokes that use the data transfer feature (spokes where the site_to_site_data_transfer field is set to true). If you create new spokes that use data transfer, they must be associated with this VPC network. At most, one VPC network will have this field set to true.|
|uri|string|false|none|The URI of the VPC network.|

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

<h2 id="tocS_Spoke">Spoke</h2>
<!-- backwards compatibility -->
<a id="schemaspoke"></a>
<a id="schema_Spoke"></a>
<a id="tocSspoke"></a>
<a id="tocsspoke"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "hub": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "linkedInterconnectAttachments": {
    "siteToSiteDataTransfer": true,
    "uris": [
      "string"
    ],
    "vpcNetwork": "string"
  },
  "linkedRouterApplianceInstances": {
    "instances": [
      {
        "ipAddress": "string",
        "virtualMachine": "string"
      }
    ],
    "siteToSiteDataTransfer": true,
    "vpcNetwork": "string"
  },
  "linkedVpnTunnels": {
    "siteToSiteDataTransfer": true,
    "uris": [
      "string"
    ],
    "vpcNetwork": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "uniqueId": "string",
  "updateTime": "string"
}
```

A Network Connectivity Center spoke represents one or more network connectivity resources. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the spoke was created.|
|description|string|false|none|An optional description of the spoke.|
|hub|string|false|none|Immutable. The name of the hub that this spoke is attached to.|
|labels|object|false|none|Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).|
|linkedInterconnectAttachments|[LinkedInterconnectAttachments](#schemalinkedinterconnectattachments)|false|none|VLAN attachments that are associated with the spoke.|
|linkedRouterApplianceInstances|[LinkedRouterApplianceInstances](#schemalinkedrouterapplianceinstances)|false|none|Router appliance instances that are associated with the spoke.|
|linkedVpnTunnels|[LinkedVpnTunnels](#schemalinkedvpntunnels)|false|none|VPN tunnels that are associated with the spoke.|
|name|string|false|none|Immutable. The name of the spoke. Spoke names must be unique. They use the following form: `projects/{project_number}/locations/{region}/spokes/{spoke_id}`|
|state|string|false|read-only|Output only. The current lifecycle state of this spoke.|
|uniqueId|string|false|read-only|Output only. The Google-generated UUID for the spoke. This value is unique across all spoke resources. If a spoke is deleted and another with the same name is created, the new spoke is assigned a different unique_id.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time the spoke was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|ACTIVE|
|state|DELETING|
|state|UPDATING|

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
