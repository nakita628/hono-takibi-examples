<h1 id="cloud-tpu-api">Cloud TPU API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

TPU API provides customers with access to Google TPU technology.

Base URLs:

* <a href="https://tpu.googleapis.com/">https://tpu.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/tpu/">External documentation</a>

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

<h1 id="cloud-tpu-api-projects">projects</h1>

## tpu.projects.locations.runtimeVersions.get

<a id="opIdtpu.projects.locations.runtimeVersions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}`

Gets a runtime version.

<h3 id="tpuprojectslocationsruntimeversionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name.|
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
  "name": "string",
  "version": "string"
}
```

<h3 id="tpuprojectslocationsruntimeversionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RuntimeVersion](#schemaruntimeversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## tpu.projects.locations.operations.delete

<a id="opIdtpu.projects.locations.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="tpuprojectslocationsoperationsdelete-parameters">Parameters</h3>

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

<h3 id="tpuprojectslocationsoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## tpu.projects.locations.nodes.patch

<a id="opIdtpu.projects.locations.nodes.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acceleratorConfig": {
      "topology": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "acceleratorType": "string",
    "cidrBlock": "string",
    "dataDisks": [
      {
        "mode": "DISK_MODE_UNSPECIFIED",
        "sourceDisk": "string"
      }
    ],
    "description": "string",
    "health": "HEALTH_UNSPECIFIED",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "networkConfig": {
      "canIpForward": true,
      "enableExternalIps": true,
      "network": "string",
      "subnetwork": "string"
    },
    "runtimeVersion": "string",
    "schedulingConfig": {
      "preemptible": true,
      "reserved": true
    },
    "serviceAccount": {
      "email": "string",
      "scope": [
        "string"
      ]
    },
    "shieldedInstanceConfig": {
      "enableSecureBoot": true
    },
    "tags": [
      "string"
    ]
  }'
```

`PATCH /v2/{name}`

Updates the configurations of a node.

> Body parameter

```json
{
  "acceleratorConfig": {
    "topology": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "acceleratorType": "string",
  "cidrBlock": "string",
  "dataDisks": [
    {
      "mode": "DISK_MODE_UNSPECIFIED",
      "sourceDisk": "string"
    }
  ],
  "description": "string",
  "health": "HEALTH_UNSPECIFIED",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "networkConfig": {
    "canIpForward": true,
    "enableExternalIps": true,
    "network": "string",
    "subnetwork": "string"
  },
  "runtimeVersion": "string",
  "schedulingConfig": {
    "preemptible": true,
    "reserved": true
  },
  "serviceAccount": {
    "email": "string",
    "scope": [
      "string"
    ]
  },
  "shieldedInstanceConfig": {
    "enableSecureBoot": true
  },
  "tags": [
    "string"
  ]
}
```

<h3 id="tpuprojectslocationsnodespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. Immutable. The name of the TPU.|
|updateMask|query|string|false|Required. Mask of fields from Node to update. Supported fields: [description, tags, labels, metadata, network_config.enable_external_ips].|
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
|body|body|[Node](#schemanode)|false|none|
|» acceleratorConfig|body|[AcceleratorConfig](#schemaacceleratorconfig)|false|The AccleratorConfig for the TPU Node.|
|» acceleratorType|body|string|false|Required. The type of hardware accelerators associated with this node.|
|» cidrBlock|body|string|false|The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user's provided network, or the provided network is peered with another network that is using that CIDR block.|
|» dataDisks|body|[[AttachedDisk](#schemaattacheddisk)]|false|The additional data disks for the Node.|
|» description|body|string|false|The user-supplied description of the TPU. Maximum of 512 characters.|
|» health|body|string|false|The health status of the TPU node.|
|» labels|body|object|false|Resource labels to represent user-provided metadata.|
|» » **additionalProperties**|body|string|false|none|
|» metadata|body|object|false|Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script|
|» » **additionalProperties**|body|string|false|none|
|» networkConfig|body|[NetworkConfig](#schemanetworkconfig)|false|Network configurations for the TPU node.|
|» runtimeVersion|body|string|false|Required. The runtime version running in the Node.|
|» schedulingConfig|body|[SchedulingConfig](#schemaschedulingconfig)|false|The scheduling options for this node.|
|» serviceAccount|body|[ServiceAccount](#schemaserviceaccount)|false|The Google Cloud Platform Service Account to be used by the TPU node VMs. If None is specified, the default compute service account will be used.|
|» shieldedInstanceConfig|body|[ShieldedInstanceConfig](#schemashieldedinstanceconfig)|false|Shielded Instance options.|
|» tags|body|[string]|false|Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» health|HEALTH_UNSPECIFIED|
|» health|HEALTHY|
|» health|TIMEOUT|
|» health|UNHEALTHY_TENSORFLOW|
|» health|UNHEALTHY_MAINTENANCE|

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

<h3 id="tpuprojectslocationsnodespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## tpu.projects.locations.list

<a id="opIdtpu.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="tpuprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="tpuprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## tpu.projects.locations.operations.list

<a id="opIdtpu.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="tpuprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="tpuprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## tpu.projects.locations.operations.cancel

<a id="opIdtpu.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

<h3 id="tpuprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="tpuprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## tpu.projects.locations.nodes.getGuestAttributes

<a id="opIdtpu.projects.locations.nodes.getGuestAttributes"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:getGuestAttributes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "queryPath": "string",
    "workerIds": [
      "string"
    ]
  }'
```

`POST /v2/{name}:getGuestAttributes`

Retrieves the guest attributes for the node.

> Body parameter

```json
{
  "queryPath": "string",
  "workerIds": [
    "string"
  ]
}
```

<h3 id="tpuprojectslocationsnodesgetguestattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name.|
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
|body|body|[GetGuestAttributesRequest](#schemagetguestattributesrequest)|false|none|
|» queryPath|body|string|false|The guest attributes path to be queried.|
|» workerIds|body|[string]|false|The 0-based worker ID. If it is empty, all workers' GuestAttributes will be returned.|

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
  "guestAttributes": [
    {
      "queryPath": "string",
      "queryValue": {
        "items": [
          {
            "key": "string",
            "namespace": "string",
            "value": "string"
          }
        ]
      }
    }
  ]
}
```

<h3 id="tpuprojectslocationsnodesgetguestattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetGuestAttributesResponse](#schemagetguestattributesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## tpu.projects.locations.nodes.start

<a id="opIdtpu.projects.locations.nodes.start"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:start`

Starts a node.

> Body parameter

```json
{}
```

<h3 id="tpuprojectslocationsnodesstart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name.|
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
|body|body|[StartNodeRequest](#schemastartnoderequest)|false|none|

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

<h3 id="tpuprojectslocationsnodesstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## tpu.projects.locations.nodes.stop

<a id="opIdtpu.projects.locations.nodes.stop"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:stop`

Stops a node. This operation is only available with single TPU nodes.

> Body parameter

```json
{}
```

<h3 id="tpuprojectslocationsnodesstop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name.|
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
|body|body|[StopNodeRequest](#schemastopnoderequest)|false|none|

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

<h3 id="tpuprojectslocationsnodesstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## tpu.projects.locations.acceleratorTypes.list

<a id="opIdtpu.projects.locations.acceleratorTypes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/acceleratorTypes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/acceleratorTypes`

Lists accelerator types supported by this API.

<h3 id="tpuprojectslocationsacceleratortypeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name.|
|filter|query|string|false|List filter.|
|orderBy|query|string|false|Sort results.|
|pageSize|query|integer|false|The maximum number of items to return.|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any.|
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
  "acceleratorTypes": [
    {
      "acceleratorConfigs": [
        {
          "topology": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "name": "string",
      "type": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="tpuprojectslocationsacceleratortypeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAcceleratorTypesResponse](#schemalistacceleratortypesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## tpu.projects.locations.nodes.list

<a id="opIdtpu.projects.locations.nodes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/nodes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/nodes`

Lists nodes.

<h3 id="tpuprojectslocationsnodeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name.|
|pageSize|query|integer|false|The maximum number of items to return.|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any.|
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
  "nodes": [
    {
      "acceleratorConfig": {
        "topology": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "acceleratorType": "string",
      "apiVersion": "API_VERSION_UNSPECIFIED",
      "cidrBlock": "string",
      "createTime": "string",
      "dataDisks": [
        {
          "mode": "DISK_MODE_UNSPECIFIED",
          "sourceDisk": "string"
        }
      ],
      "description": "string",
      "health": "HEALTH_UNSPECIFIED",
      "healthDescription": "string",
      "id": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "networkConfig": {
        "canIpForward": true,
        "enableExternalIps": true,
        "network": "string",
        "subnetwork": "string"
      },
      "networkEndpoints": [
        {
          "accessConfig": {
            "externalIp": "string"
          },
          "ipAddress": "string",
          "port": 0
        }
      ],
      "runtimeVersion": "string",
      "schedulingConfig": {
        "preemptible": true,
        "reserved": true
      },
      "serviceAccount": {
        "email": "string",
        "scope": [
          "string"
        ]
      },
      "shieldedInstanceConfig": {
        "enableSecureBoot": true
      },
      "state": "STATE_UNSPECIFIED",
      "symptoms": [
        {
          "createTime": "string",
          "details": "string",
          "symptomType": "SYMPTOM_TYPE_UNSPECIFIED",
          "workerId": "string"
        }
      ],
      "tags": [
        "string"
      ]
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="tpuprojectslocationsnodeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListNodesResponse](#schemalistnodesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## tpu.projects.locations.nodes.create

<a id="opIdtpu.projects.locations.nodes.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/nodes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acceleratorConfig": {
      "topology": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "acceleratorType": "string",
    "cidrBlock": "string",
    "dataDisks": [
      {
        "mode": "DISK_MODE_UNSPECIFIED",
        "sourceDisk": "string"
      }
    ],
    "description": "string",
    "health": "HEALTH_UNSPECIFIED",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "networkConfig": {
      "canIpForward": true,
      "enableExternalIps": true,
      "network": "string",
      "subnetwork": "string"
    },
    "runtimeVersion": "string",
    "schedulingConfig": {
      "preemptible": true,
      "reserved": true
    },
    "serviceAccount": {
      "email": "string",
      "scope": [
        "string"
      ]
    },
    "shieldedInstanceConfig": {
      "enableSecureBoot": true
    },
    "tags": [
      "string"
    ]
  }'
```

`POST /v2/{parent}/nodes`

Creates a node.

> Body parameter

```json
{
  "acceleratorConfig": {
    "topology": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "acceleratorType": "string",
  "cidrBlock": "string",
  "dataDisks": [
    {
      "mode": "DISK_MODE_UNSPECIFIED",
      "sourceDisk": "string"
    }
  ],
  "description": "string",
  "health": "HEALTH_UNSPECIFIED",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "networkConfig": {
    "canIpForward": true,
    "enableExternalIps": true,
    "network": "string",
    "subnetwork": "string"
  },
  "runtimeVersion": "string",
  "schedulingConfig": {
    "preemptible": true,
    "reserved": true
  },
  "serviceAccount": {
    "email": "string",
    "scope": [
      "string"
    ]
  },
  "shieldedInstanceConfig": {
    "enableSecureBoot": true
  },
  "tags": [
    "string"
  ]
}
```

<h3 id="tpuprojectslocationsnodescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name.|
|nodeId|query|string|false|The unqualified resource name.|
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
|body|body|[Node](#schemanode)|false|none|
|» acceleratorConfig|body|[AcceleratorConfig](#schemaacceleratorconfig)|false|The AccleratorConfig for the TPU Node.|
|» acceleratorType|body|string|false|Required. The type of hardware accelerators associated with this node.|
|» cidrBlock|body|string|false|The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user's provided network, or the provided network is peered with another network that is using that CIDR block.|
|» dataDisks|body|[[AttachedDisk](#schemaattacheddisk)]|false|The additional data disks for the Node.|
|» description|body|string|false|The user-supplied description of the TPU. Maximum of 512 characters.|
|» health|body|string|false|The health status of the TPU node.|
|» labels|body|object|false|Resource labels to represent user-provided metadata.|
|» » **additionalProperties**|body|string|false|none|
|» metadata|body|object|false|Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script|
|» » **additionalProperties**|body|string|false|none|
|» networkConfig|body|[NetworkConfig](#schemanetworkconfig)|false|Network configurations for the TPU node.|
|» runtimeVersion|body|string|false|Required. The runtime version running in the Node.|
|» schedulingConfig|body|[SchedulingConfig](#schemaschedulingconfig)|false|The scheduling options for this node.|
|» serviceAccount|body|[ServiceAccount](#schemaserviceaccount)|false|The Google Cloud Platform Service Account to be used by the TPU node VMs. If None is specified, the default compute service account will be used.|
|» shieldedInstanceConfig|body|[ShieldedInstanceConfig](#schemashieldedinstanceconfig)|false|Shielded Instance options.|
|» tags|body|[string]|false|Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» health|HEALTH_UNSPECIFIED|
|» health|HEALTHY|
|» health|TIMEOUT|
|» health|UNHEALTHY_TENSORFLOW|
|» health|UNHEALTHY_MAINTENANCE|

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

<h3 id="tpuprojectslocationsnodescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## tpu.projects.locations.runtimeVersions.list

<a id="opIdtpu.projects.locations.runtimeVersions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/runtimeVersions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/runtimeVersions`

Lists runtime versions supported by this API.

<h3 id="tpuprojectslocationsruntimeversionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name.|
|filter|query|string|false|List filter.|
|orderBy|query|string|false|Sort results.|
|pageSize|query|integer|false|The maximum number of items to return.|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any.|
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
  "runtimeVersions": [
    {
      "name": "string",
      "version": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="tpuprojectslocationsruntimeversionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListRuntimeVersionsResponse](#schemalistruntimeversionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## tpu.projects.locations.generateServiceIdentity

<a id="opIdtpu.projects.locations.generateServiceIdentity"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:generateServiceIdentity \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{parent}:generateServiceIdentity`

Generates the Cloud TPU service identity for the project.

> Body parameter

```json
{}
```

<h3 id="tpuprojectslocationsgenerateserviceidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name.|
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
|body|body|[GenerateServiceIdentityRequest](#schemagenerateserviceidentityrequest)|false|none|

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
  "identity": {
    "email": "string"
  }
}
```

<h3 id="tpuprojectslocationsgenerateserviceidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GenerateServiceIdentityResponse](#schemagenerateserviceidentityresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AcceleratorConfig">AcceleratorConfig</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratorconfig"></a>
<a id="schema_AcceleratorConfig"></a>
<a id="tocSacceleratorconfig"></a>
<a id="tocsacceleratorconfig"></a>

```json
{
  "topology": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

A TPU accelerator configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topology|string|false|none|Required. Topology of TPU in chips.|
|type|string|false|none|Required. Type of TPU.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|V2|
|type|V3|
|type|V4|

<h2 id="tocS_AcceleratorType">AcceleratorType</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratortype"></a>
<a id="schema_AcceleratorType"></a>
<a id="tocSacceleratortype"></a>
<a id="tocsacceleratortype"></a>

```json
{
  "acceleratorConfigs": [
    {
      "topology": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "name": "string",
  "type": "string"
}
```

A accelerator type that a Node can be configured with.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceleratorConfigs|[[AcceleratorConfig](#schemaacceleratorconfig)]|false|none|The accelerator config.|
|name|string|false|none|The resource name.|
|type|string|false|none|the accelerator type.|

<h2 id="tocS_AccessConfig">AccessConfig</h2>
<!-- backwards compatibility -->
<a id="schemaaccessconfig"></a>
<a id="schema_AccessConfig"></a>
<a id="tocSaccessconfig"></a>
<a id="tocsaccessconfig"></a>

```json
{
  "externalIp": "string"
}
```

An access config attached to the TPU worker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalIp|string|false|read-only|Output only. An external IP address associated with the TPU worker.|

<h2 id="tocS_AttachedDisk">AttachedDisk</h2>
<!-- backwards compatibility -->
<a id="schemaattacheddisk"></a>
<a id="schema_AttachedDisk"></a>
<a id="tocSattacheddisk"></a>
<a id="tocsattacheddisk"></a>

```json
{
  "mode": "DISK_MODE_UNSPECIFIED",
  "sourceDisk": "string"
}
```

A node-attached disk resource. Next ID: 8;

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|string|false|none|The mode in which to attach this disk. If not specified, the default is READ_WRITE mode. Only applicable to data_disks.|
|sourceDisk|string|false|none|Specifies the full path to an existing disk. For example: "projects/my-project/zones/us-central1-c/disks/my-disk".|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|DISK_MODE_UNSPECIFIED|
|mode|READ_WRITE|
|mode|READ_ONLY|

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

<h2 id="tocS_GenerateServiceIdentityRequest">GenerateServiceIdentityRequest</h2>
<!-- backwards compatibility -->
<a id="schemagenerateserviceidentityrequest"></a>
<a id="schema_GenerateServiceIdentityRequest"></a>
<a id="tocSgenerateserviceidentityrequest"></a>
<a id="tocsgenerateserviceidentityrequest"></a>

```json
{}
```

Request for GenerateServiceIdentity.

<h2 id="tocS_GenerateServiceIdentityResponse">GenerateServiceIdentityResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenerateserviceidentityresponse"></a>
<a id="schema_GenerateServiceIdentityResponse"></a>
<a id="tocSgenerateserviceidentityresponse"></a>
<a id="tocsgenerateserviceidentityresponse"></a>

```json
{
  "identity": {
    "email": "string"
  }
}
```

Response for GenerateServiceIdentity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identity|[ServiceIdentity](#schemaserviceidentity)|false|none|ServiceIdentity that was created or retrieved.|

<h2 id="tocS_GetGuestAttributesRequest">GetGuestAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetguestattributesrequest"></a>
<a id="schema_GetGuestAttributesRequest"></a>
<a id="tocSgetguestattributesrequest"></a>
<a id="tocsgetguestattributesrequest"></a>

```json
{
  "queryPath": "string",
  "workerIds": [
    "string"
  ]
}
```

Request for GetGuestAttributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryPath|string|false|none|The guest attributes path to be queried.|
|workerIds|[string]|false|none|The 0-based worker ID. If it is empty, all workers' GuestAttributes will be returned.|

<h2 id="tocS_GetGuestAttributesResponse">GetGuestAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetguestattributesresponse"></a>
<a id="schema_GetGuestAttributesResponse"></a>
<a id="tocSgetguestattributesresponse"></a>
<a id="tocsgetguestattributesresponse"></a>

```json
{
  "guestAttributes": [
    {
      "queryPath": "string",
      "queryValue": {
        "items": [
          {
            "key": "string",
            "namespace": "string",
            "value": "string"
          }
        ]
      }
    }
  ]
}
```

Response for GetGuestAttributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guestAttributes|[[GuestAttributes](#schemaguestattributes)]|false|none|The guest attributes for the TPU workers.|

<h2 id="tocS_GuestAttributes">GuestAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaguestattributes"></a>
<a id="schema_GuestAttributes"></a>
<a id="tocSguestattributes"></a>
<a id="tocsguestattributes"></a>

```json
{
  "queryPath": "string",
  "queryValue": {
    "items": [
      {
        "key": "string",
        "namespace": "string",
        "value": "string"
      }
    ]
  }
}
```

A guest attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryPath|string|false|none|The path to be queried. This can be the default namespace ('/') or a nested namespace ('/\/') or a specified key ('/\/\')|
|queryValue|[GuestAttributesValue](#schemaguestattributesvalue)|false|none|The value of the requested queried path.|

<h2 id="tocS_GuestAttributesEntry">GuestAttributesEntry</h2>
<!-- backwards compatibility -->
<a id="schemaguestattributesentry"></a>
<a id="schema_GuestAttributesEntry"></a>
<a id="tocSguestattributesentry"></a>
<a id="tocsguestattributesentry"></a>

```json
{
  "key": "string",
  "namespace": "string",
  "value": "string"
}
```

A guest attributes namespace/key/value entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Key for the guest attribute entry.|
|namespace|string|false|none|Namespace for the guest attribute entry.|
|value|string|false|none|Value for the guest attribute entry.|

<h2 id="tocS_GuestAttributesValue">GuestAttributesValue</h2>
<!-- backwards compatibility -->
<a id="schemaguestattributesvalue"></a>
<a id="schema_GuestAttributesValue"></a>
<a id="tocSguestattributesvalue"></a>
<a id="tocsguestattributesvalue"></a>

```json
{
  "items": [
    {
      "key": "string",
      "namespace": "string",
      "value": "string"
    }
  ]
}
```

Array of guest attribute namespace/key/value tuples.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[GuestAttributesEntry](#schemaguestattributesentry)]|false|none|The list of guest attributes entries.|

<h2 id="tocS_ListAcceleratorTypesResponse">ListAcceleratorTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistacceleratortypesresponse"></a>
<a id="schema_ListAcceleratorTypesResponse"></a>
<a id="tocSlistacceleratortypesresponse"></a>
<a id="tocslistacceleratortypesresponse"></a>

```json
{
  "acceleratorTypes": [
    {
      "acceleratorConfigs": [
        {
          "topology": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "name": "string",
      "type": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response for ListAcceleratorTypes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceleratorTypes|[[AcceleratorType](#schemaacceleratortype)]|false|none|The listed nodes.|
|nextPageToken|string|false|none|The next page token or empty if none.|
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

<h2 id="tocS_ListNodesResponse">ListNodesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnodesresponse"></a>
<a id="schema_ListNodesResponse"></a>
<a id="tocSlistnodesresponse"></a>
<a id="tocslistnodesresponse"></a>

```json
{
  "nextPageToken": "string",
  "nodes": [
    {
      "acceleratorConfig": {
        "topology": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "acceleratorType": "string",
      "apiVersion": "API_VERSION_UNSPECIFIED",
      "cidrBlock": "string",
      "createTime": "string",
      "dataDisks": [
        {
          "mode": "DISK_MODE_UNSPECIFIED",
          "sourceDisk": "string"
        }
      ],
      "description": "string",
      "health": "HEALTH_UNSPECIFIED",
      "healthDescription": "string",
      "id": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "networkConfig": {
        "canIpForward": true,
        "enableExternalIps": true,
        "network": "string",
        "subnetwork": "string"
      },
      "networkEndpoints": [
        {
          "accessConfig": {
            "externalIp": "string"
          },
          "ipAddress": "string",
          "port": 0
        }
      ],
      "runtimeVersion": "string",
      "schedulingConfig": {
        "preemptible": true,
        "reserved": true
      },
      "serviceAccount": {
        "email": "string",
        "scope": [
          "string"
        ]
      },
      "shieldedInstanceConfig": {
        "enableSecureBoot": true
      },
      "state": "STATE_UNSPECIFIED",
      "symptoms": [
        {
          "createTime": "string",
          "details": "string",
          "symptomType": "SYMPTOM_TYPE_UNSPECIFIED",
          "workerId": "string"
        }
      ],
      "tags": [
        "string"
      ]
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response for ListNodes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The next page token or empty if none.|
|nodes|[[Node](#schemanode)]|false|none|The listed nodes.|
|unreachable|[string]|false|none|Locations that could not be reached.|

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

<h2 id="tocS_ListRuntimeVersionsResponse">ListRuntimeVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistruntimeversionsresponse"></a>
<a id="schema_ListRuntimeVersionsResponse"></a>
<a id="tocSlistruntimeversionsresponse"></a>
<a id="tocslistruntimeversionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "runtimeVersions": [
    {
      "name": "string",
      "version": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response for ListRuntimeVersions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The next page token or empty if none.|
|runtimeVersions|[[RuntimeVersion](#schemaruntimeversion)]|false|none|The listed nodes.|
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

<h2 id="tocS_NetworkConfig">NetworkConfig</h2>
<!-- backwards compatibility -->
<a id="schemanetworkconfig"></a>
<a id="schema_NetworkConfig"></a>
<a id="tocSnetworkconfig"></a>
<a id="tocsnetworkconfig"></a>

```json
{
  "canIpForward": true,
  "enableExternalIps": true,
  "network": "string",
  "subnetwork": "string"
}
```

Network related configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canIpForward|boolean|false|none|Allows the TPU node to send and receive packets with non-matching destination or source IPs. This is required if you plan to use the TPU workers to forward routes.|
|enableExternalIps|boolean|false|none|Indicates that external IP addresses would be associated with the TPU workers. If set to false, the specified subnetwork or network should have Private Google Access enabled.|
|network|string|false|none|The name of the network for the TPU node. It must be a preexisting Google Compute Engine network. If none is provided, "default" will be used.|
|subnetwork|string|false|none|The name of the subnetwork for the TPU node. It must be a preexisting Google Compute Engine subnetwork. If none is provided, "default" will be used.|

<h2 id="tocS_NetworkEndpoint">NetworkEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemanetworkendpoint"></a>
<a id="schema_NetworkEndpoint"></a>
<a id="tocSnetworkendpoint"></a>
<a id="tocsnetworkendpoint"></a>

```json
{
  "accessConfig": {
    "externalIp": "string"
  },
  "ipAddress": "string",
  "port": 0
}
```

A network endpoint over which a TPU worker can be reached.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessConfig|[AccessConfig](#schemaaccessconfig)|false|none|The access config for the TPU worker.|
|ipAddress|string|false|none|The internal IP address of this network endpoint.|
|port|integer(int32)|false|none|The port of this network endpoint.|

<h2 id="tocS_Node">Node</h2>
<!-- backwards compatibility -->
<a id="schemanode"></a>
<a id="schema_Node"></a>
<a id="tocSnode"></a>
<a id="tocsnode"></a>

```json
{
  "acceleratorConfig": {
    "topology": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "acceleratorType": "string",
  "apiVersion": "API_VERSION_UNSPECIFIED",
  "cidrBlock": "string",
  "createTime": "string",
  "dataDisks": [
    {
      "mode": "DISK_MODE_UNSPECIFIED",
      "sourceDisk": "string"
    }
  ],
  "description": "string",
  "health": "HEALTH_UNSPECIFIED",
  "healthDescription": "string",
  "id": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "networkConfig": {
    "canIpForward": true,
    "enableExternalIps": true,
    "network": "string",
    "subnetwork": "string"
  },
  "networkEndpoints": [
    {
      "accessConfig": {
        "externalIp": "string"
      },
      "ipAddress": "string",
      "port": 0
    }
  ],
  "runtimeVersion": "string",
  "schedulingConfig": {
    "preemptible": true,
    "reserved": true
  },
  "serviceAccount": {
    "email": "string",
    "scope": [
      "string"
    ]
  },
  "shieldedInstanceConfig": {
    "enableSecureBoot": true
  },
  "state": "STATE_UNSPECIFIED",
  "symptoms": [
    {
      "createTime": "string",
      "details": "string",
      "symptomType": "SYMPTOM_TYPE_UNSPECIFIED",
      "workerId": "string"
    }
  ],
  "tags": [
    "string"
  ]
}
```

A TPU instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceleratorConfig|[AcceleratorConfig](#schemaacceleratorconfig)|false|none|The AccleratorConfig for the TPU Node.|
|acceleratorType|string|false|none|Required. The type of hardware accelerators associated with this node.|
|apiVersion|string|false|read-only|Output only. The API version that created this Node.|
|cidrBlock|string|false|none|The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user's provided network, or the provided network is peered with another network that is using that CIDR block.|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the node was created.|
|dataDisks|[[AttachedDisk](#schemaattacheddisk)]|false|none|The additional data disks for the Node.|
|description|string|false|none|The user-supplied description of the TPU. Maximum of 512 characters.|
|health|string|false|none|The health status of the TPU node.|
|healthDescription|string|false|read-only|Output only. If this field is populated, it contains a description of why the TPU Node is unhealthy.|
|id|string(int64)|false|read-only|Output only. The unique identifier for the TPU Node.|
|labels|object|false|none|Resource labels to represent user-provided metadata.|
|metadata|object|false|none|Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script|
|name|string|false|read-only|Output only. Immutable. The name of the TPU.|
|networkConfig|[NetworkConfig](#schemanetworkconfig)|false|none|Network configurations for the TPU node.|
|networkEndpoints|[[NetworkEndpoint](#schemanetworkendpoint)]|false|read-only|Output only. The network endpoints where TPU workers can be accessed and sent work. It is recommended that runtime clients of the node reach out to the 0th entry in this map first.|
|runtimeVersion|string|false|none|Required. The runtime version running in the Node.|
|schedulingConfig|[SchedulingConfig](#schemaschedulingconfig)|false|none|The scheduling options for this node.|
|serviceAccount|[ServiceAccount](#schemaserviceaccount)|false|none|The Google Cloud Platform Service Account to be used by the TPU node VMs. If None is specified, the default compute service account will be used.|
|shieldedInstanceConfig|[ShieldedInstanceConfig](#schemashieldedinstanceconfig)|false|none|Shielded Instance options.|
|state|string|false|read-only|Output only. The current state for the TPU Node.|
|symptoms|[[Symptom](#schemasymptom)]|false|read-only|Output only. The Symptoms that have occurred to the TPU Node.|
|tags|[string]|false|none|Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.|

#### Enumerated Values

|Property|Value|
|---|---|
|apiVersion|API_VERSION_UNSPECIFIED|
|apiVersion|V1_ALPHA1|
|apiVersion|V1|
|apiVersion|V2_ALPHA1|
|apiVersion|V2|
|health|HEALTH_UNSPECIFIED|
|health|HEALTHY|
|health|TIMEOUT|
|health|UNHEALTHY_TENSORFLOW|
|health|UNHEALTHY_MAINTENANCE|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|READY|
|state|RESTARTING|
|state|REIMAGING|
|state|DELETING|
|state|REPAIRING|
|state|STOPPED|
|state|STOPPING|
|state|STARTING|
|state|PREEMPTED|
|state|TERMINATED|
|state|HIDING|
|state|HIDDEN|
|state|UNHIDING|

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
|target|string|false|none|Target of the operation - for example projects/project-1/connectivityTests/test-1|
|verb|string|false|none|Name of the verb executed by the operation.|

<h2 id="tocS_RuntimeVersion">RuntimeVersion</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeversion"></a>
<a id="schema_RuntimeVersion"></a>
<a id="tocSruntimeversion"></a>
<a id="tocsruntimeversion"></a>

```json
{
  "name": "string",
  "version": "string"
}
```

A runtime version that a Node can be configured with.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The resource name.|
|version|string|false|none|The runtime version.|

<h2 id="tocS_SchedulingConfig">SchedulingConfig</h2>
<!-- backwards compatibility -->
<a id="schemaschedulingconfig"></a>
<a id="schema_SchedulingConfig"></a>
<a id="tocSschedulingconfig"></a>
<a id="tocsschedulingconfig"></a>

```json
{
  "preemptible": true,
  "reserved": true
}
```

Sets the scheduling options for this node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|preemptible|boolean|false|none|Defines whether the node is preemptible.|
|reserved|boolean|false|none|Whether the node is created under a reservation.|

<h2 id="tocS_ServiceAccount">ServiceAccount</h2>
<!-- backwards compatibility -->
<a id="schemaserviceaccount"></a>
<a id="schema_ServiceAccount"></a>
<a id="tocSserviceaccount"></a>
<a id="tocsserviceaccount"></a>

```json
{
  "email": "string",
  "scope": [
    "string"
  ]
}
```

A service account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Email address of the service account. If empty, default Compute service account will be used.|
|scope|[string]|false|none|The list of scopes to be made available for this service account. If empty, access to all Cloud APIs will be allowed.|

<h2 id="tocS_ServiceIdentity">ServiceIdentity</h2>
<!-- backwards compatibility -->
<a id="schemaserviceidentity"></a>
<a id="schema_ServiceIdentity"></a>
<a id="tocSserviceidentity"></a>
<a id="tocsserviceidentity"></a>

```json
{
  "email": "string"
}
```

The per-product per-project service identity for Cloud TPU service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email address of the service identity.|

<h2 id="tocS_ShieldedInstanceConfig">ShieldedInstanceConfig</h2>
<!-- backwards compatibility -->
<a id="schemashieldedinstanceconfig"></a>
<a id="schema_ShieldedInstanceConfig"></a>
<a id="tocSshieldedinstanceconfig"></a>
<a id="tocsshieldedinstanceconfig"></a>

```json
{
  "enableSecureBoot": true
}
```

A set of Shielded Instance options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableSecureBoot|boolean|false|none|Defines whether the instance has Secure Boot enabled.|

<h2 id="tocS_StartNodeRequest">StartNodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartnoderequest"></a>
<a id="schema_StartNodeRequest"></a>
<a id="tocSstartnoderequest"></a>
<a id="tocsstartnoderequest"></a>

```json
{}
```

Request for StartNode.

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

<h2 id="tocS_StopNodeRequest">StopNodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopnoderequest"></a>
<a id="schema_StopNodeRequest"></a>
<a id="tocSstopnoderequest"></a>
<a id="tocsstopnoderequest"></a>

```json
{}
```

Request for StopNode.

<h2 id="tocS_Symptom">Symptom</h2>
<!-- backwards compatibility -->
<a id="schemasymptom"></a>
<a id="schema_Symptom"></a>
<a id="tocSsymptom"></a>
<a id="tocssymptom"></a>

```json
{
  "createTime": "string",
  "details": "string",
  "symptomType": "SYMPTOM_TYPE_UNSPECIFIED",
  "workerId": "string"
}
```

A Symptom instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Timestamp when the Symptom is created.|
|details|string|false|none|Detailed information of the current Symptom.|
|symptomType|string|false|none|Type of the Symptom.|
|workerId|string|false|none|A string used to uniquely distinguish a worker within a TPU node.|

#### Enumerated Values

|Property|Value|
|---|---|
|symptomType|SYMPTOM_TYPE_UNSPECIFIED|
|symptomType|LOW_MEMORY|
|symptomType|OUT_OF_MEMORY|
|symptomType|EXECUTE_TIMED_OUT|
|symptomType|MESH_BUILD_FAIL|
|symptomType|HBM_OUT_OF_MEMORY|
|symptomType|PROJECT_ABUSE|
