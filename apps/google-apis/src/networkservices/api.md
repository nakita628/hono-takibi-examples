<h1 id="network-services-api">Network Services API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://networkservices.googleapis.com/">https://networkservices.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/networking">External documentation</a>

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

<h1 id="network-services-api-projects">projects</h1>

## networkservices.projects.locations.tlsRoutes.get

<a id="opIdnetworkservices.projects.locations.tlsRoutes.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets details of a single TlsRoute.

<h3 id="networkservicesprojectslocationstlsroutesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. A name of the TlsRoute to get. Must be in the format `projects/*/locations/global/tlsRoutes/*`.|
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
  "gateways": [
    "string"
  ],
  "meshes": [
    "string"
  ],
  "name": "string",
  "rules": [
    {
      "action": {
        "destinations": [
          {
            "serviceName": "string",
            "weight": 0
          }
        ]
      },
      "matches": [
        {
          "alpn": [
            "string"
          ],
          "sniHost": [
            "string"
          ]
        }
      ]
    }
  ],
  "selfLink": "string",
  "updateTime": "string"
}
```

<h3 id="networkservicesprojectslocationstlsroutesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TlsRoute](#schematlsroute)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.tlsRoutes.delete

<a id="opIdnetworkservices.projects.locations.tlsRoutes.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes a single TlsRoute.

<h3 id="networkservicesprojectslocationstlsroutesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. A name of the TlsRoute to delete. Must be in the format `projects/*/locations/global/tlsRoutes/*`.|
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

<h3 id="networkservicesprojectslocationstlsroutesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.tlsRoutes.patch

<a id="opIdnetworkservices.projects.locations.tlsRoutes.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "gateways": [
      "string"
    ],
    "meshes": [
      "string"
    ],
    "name": "string",
    "rules": [
      {
        "action": {
          "destinations": [
            {
              "serviceName": "string",
              "weight": 0
            }
          ]
        },
        "matches": [
          {
            "alpn": [
              "string"
            ],
            "sniHost": [
              "string"
            ]
          }
        ]
      }
    ]
  }'
```

`PATCH /v1beta1/{name}`

Updates the parameters of a single TlsRoute.

> Body parameter

```json
{
  "description": "string",
  "gateways": [
    "string"
  ],
  "meshes": [
    "string"
  ],
  "name": "string",
  "rules": [
    {
      "action": {
        "destinations": [
          {
            "serviceName": "string",
            "weight": 0
          }
        ]
      },
      "matches": [
        {
          "alpn": [
            "string"
          ],
          "sniHost": [
            "string"
          ]
        }
      ]
    }
  ]
}
```

<h3 id="networkservicesprojectslocationstlsroutespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the TlsRoute resource. It matches pattern `projects/*/locations/global/tlsRoutes/tls_route_name>`.|
|updateMask|query|string|false|Optional. Field mask is used to specify the fields to be overwritten in the TlsRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.|
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
|body|body|[TlsRoute](#schematlsroute)|false|none|
|» description|body|string|false|Optional. A free-text description of the resource. Max length 1024 characters.|
|» gateways|body|[string]|false|Optional. Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/*/locations/global/gateways/`|
|» meshes|body|[string]|false|Optional. Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/*/locations/global/meshes/` The attached Mesh should be of a type SIDECAR|
|» name|body|string|false|Required. Name of the TlsRoute resource. It matches pattern `projects/*/locations/global/tlsRoutes/tls_route_name>`.|
|» rules|body|[[TlsRouteRouteRule](#schematlsrouterouterule)]|false|Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.|

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

<h3 id="networkservicesprojectslocationstlsroutespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.list

<a id="opIdnetworkservices.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="networkservicesprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="networkservicesprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.operations.list

<a id="opIdnetworkservices.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="networkservicesprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="networkservicesprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.operations.cancel

<a id="opIdnetworkservices.projects.locations.operations.cancel"></a>

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

<h3 id="networkservicesprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="networkservicesprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.endpointPolicies.list

<a id="opIdnetworkservices.projects.locations.endpointPolicies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/endpointPolicies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/endpointPolicies`

Lists EndpointPolicies in a given project and location.

<h3 id="networkservicesprojectslocationsendpointpolicieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the EndpointPolicies should be listed, specified in the format `projects/*/locations/global`.|
|pageSize|query|integer|false|Maximum number of EndpointPolicies to return per call.|
|pageToken|query|string|false|The value returned by the last `ListEndpointPoliciesResponse` Indicates that this is a continuation of a prior `ListEndpointPolicies` call, and that the system should return the next page of data.|
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
  "endpointPolicies": [
    {
      "authorizationPolicy": "string",
      "clientTlsPolicy": "string",
      "createTime": "string",
      "description": "string",
      "endpointMatcher": {
        "metadataLabelMatcher": {
          "metadataLabelMatchCriteria": "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED",
          "metadataLabels": [
            {
              "labelName": "string",
              "labelValue": "string"
            }
          ]
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "serverTlsPolicy": "string",
      "trafficPortSelector": {
        "ports": [
          "string"
        ]
      },
      "type": "ENDPOINT_POLICY_TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="networkservicesprojectslocationsendpointpolicieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListEndpointPoliciesResponse](#schemalistendpointpoliciesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.endpointPolicies.create

<a id="opIdnetworkservices.projects.locations.endpointPolicies.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/endpointPolicies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authorizationPolicy": "string",
    "clientTlsPolicy": "string",
    "description": "string",
    "endpointMatcher": {
      "metadataLabelMatcher": {
        "metadataLabelMatchCriteria": "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED",
        "metadataLabels": [
          {
            "labelName": "string",
            "labelValue": "string"
          }
        ]
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "serverTlsPolicy": "string",
    "trafficPortSelector": {
      "ports": [
        "string"
      ]
    },
    "type": "ENDPOINT_POLICY_TYPE_UNSPECIFIED"
  }'
```

`POST /v1beta1/{parent}/endpointPolicies`

Creates a new EndpointPolicy in a given project and location.

> Body parameter

```json
{
  "authorizationPolicy": "string",
  "clientTlsPolicy": "string",
  "description": "string",
  "endpointMatcher": {
    "metadataLabelMatcher": {
      "metadataLabelMatchCriteria": "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED",
      "metadataLabels": [
        {
          "labelName": "string",
          "labelValue": "string"
        }
      ]
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "serverTlsPolicy": "string",
  "trafficPortSelector": {
    "ports": [
      "string"
    ]
  },
  "type": "ENDPOINT_POLICY_TYPE_UNSPECIFIED"
}
```

<h3 id="networkservicesprojectslocationsendpointpoliciescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the EndpointPolicy. Must be in the format `projects/*/locations/global`.|
|endpointPolicyId|query|string|false|Required. Short name of the EndpointPolicy resource to be created. E.g. "CustomECS".|
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
|body|body|[EndpointPolicy](#schemaendpointpolicy)|false|none|
|» authorizationPolicy|body|string|false|Optional. This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints. Refer to Authorization. If this field is not specified, authorization is disabled(no authz checks) for this endpoint.|
|» clientTlsPolicy|body|string|false|Optional. A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints. More specifically, it is applied to the outgoing traffic from the proxy to the endpoint. This is typically used for sidecar model where the proxy identifies itself as endpoint to the control plane, with the connection between sidecar and endpoint requiring authentication. If this field is not set, authentication is disabled(open). Applicable only when EndpointPolicyType is SIDECAR_PROXY.|
|» description|body|string|false|Optional. A free-text description of the resource. Max length 1024 characters.|
|» endpointMatcher|body|[EndpointMatcher](#schemaendpointmatcher)|false|Required. A matcher that selects endpoints to which the policies should be applied.|
|» labels|body|object|false|Optional. Set of label tags associated with the EndpointPolicy resource.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Required. Name of the EndpointPolicy resource. It matches pattern `projects/{project}/locations/global/endpointPolicies/{endpoint_policy}`.|
|» serverTlsPolicy|body|string|false|Optional. A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends. If this field is not set, authentication is disabled(open) for this endpoint.|
|» trafficPortSelector|body|[TrafficPortSelector](#schematrafficportselector)|false|Optional. Port selector for the (matched) endpoints. If no port selector is provided, the matched config is applied to all ports.|
|» type|body|string|false|Required. The type of endpoint policy. This is primarily used to validate the configuration.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|ENDPOINT_POLICY_TYPE_UNSPECIFIED|
|» type|SIDECAR_PROXY|
|» type|GRPC_SERVER|

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

<h3 id="networkservicesprojectslocationsendpointpoliciescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.gateways.list

<a id="opIdnetworkservices.projects.locations.gateways.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/gateways \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/gateways`

Lists Gateways in a given project and location.

<h3 id="networkservicesprojectslocationsgatewayslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the Gateways should be listed, specified in the format `projects/*/locations/*`.|
|pageSize|query|integer|false|Maximum number of Gateways to return per call.|
|pageToken|query|string|false|The value returned by the last `ListGatewaysResponse` Indicates that this is a continuation of a prior `ListGateways` call, and that the system should return the next page of data.|
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
  "gateways": [
    {
      "addresses": [
        "string"
      ],
      "certificateUrls": [
        "string"
      ],
      "createTime": "string",
      "description": "string",
      "gatewaySecurityPolicy": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "network": "string",
      "ports": [
        0
      ],
      "scope": "string",
      "selfLink": "string",
      "serverTlsPolicy": "string",
      "subnetwork": "string",
      "type": "TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="networkservicesprojectslocationsgatewayslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListGatewaysResponse](#schemalistgatewaysresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.gateways.create

<a id="opIdnetworkservices.projects.locations.gateways.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/gateways \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addresses": [
      "string"
    ],
    "certificateUrls": [
      "string"
    ],
    "description": "string",
    "gatewaySecurityPolicy": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "network": "string",
    "ports": [
      0
    ],
    "scope": "string",
    "serverTlsPolicy": "string",
    "subnetwork": "string",
    "type": "TYPE_UNSPECIFIED"
  }'
```

`POST /v1beta1/{parent}/gateways`

Creates a new Gateway in a given project and location.

> Body parameter

```json
{
  "addresses": [
    "string"
  ],
  "certificateUrls": [
    "string"
  ],
  "description": "string",
  "gatewaySecurityPolicy": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "network": "string",
  "ports": [
    0
  ],
  "scope": "string",
  "serverTlsPolicy": "string",
  "subnetwork": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="networkservicesprojectslocationsgatewayscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the Gateway. Must be in the format `projects/*/locations/*`.|
|gatewayId|query|string|false|Required. Short name of the Gateway resource to be created.|
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
|body|body|[Gateway](#schemagateway)|false|none|
|» addresses|body|[string]|false|Optional. Zero or one IPv4-address on which the Gateway will receive the traffic. When no address is provided, an IP from the subnetwork is allocated This field only applies to gateways of type 'SECURE_WEB_GATEWAY'. Gateways of type 'OPEN_MESH' listen on 0.0.0.0.|
|» certificateUrls|body|[string]|false|Optional. A fully-qualified Certificates URL reference. The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection. This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.|
|» description|body|string|false|Optional. A free-text description of the resource. Max length 1024 characters.|
|» gatewaySecurityPolicy|body|string|false|Optional. A fully-qualified GatewaySecurityPolicy URL reference. Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections. For example: `projects/*/locations/*/gatewaySecurityPolicies/swg-policy`. This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'.|
|» labels|body|object|false|Optional. Set of label tags associated with the Gateway resource.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Required. Name of the Gateway resource. It matches pattern `projects/*/locations/*/gateways/`.|
|» network|body|string|false|Optional. The relative resource name identifying the VPC network that is using this configuration. For example: `projects/*/global/networks/network-1`. Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.|
|» ports|body|[integer(int32)]|false|Required. One or more port numbers (1-65535), on which the Gateway will receive traffic. The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are limited to 1 port. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 and support multiple ports.|
|» scope|body|string|false|Optional. Scope determines how configuration across multiple Gateway instances are merged. The configuration for multiple Gateway instances with the same scope will be merged as presented as a single coniguration to the proxy/load balancer. Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.|
|» serverTlsPolicy|body|string|false|Optional. A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled.|
|» subnetwork|body|string|false|Optional. The relative resource name identifying the subnetwork in which this SWG is allocated. For example: `projects/*/regions/us-central1/subnetworks/network-1` Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY".|
|» type|body|string|false|Immutable. The type of the customer managed gateway. This field is required. If unspecified, an error is returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|TYPE_UNSPECIFIED|
|» type|OPEN_MESH|
|» type|SECURE_WEB_GATEWAY|

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

<h3 id="networkservicesprojectslocationsgatewayscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.grpcRoutes.list

<a id="opIdnetworkservices.projects.locations.grpcRoutes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/grpcRoutes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/grpcRoutes`

Lists GrpcRoutes in a given project and location.

<h3 id="networkservicesprojectslocationsgrpcrouteslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the GrpcRoutes should be listed, specified in the format `projects/*/locations/global`.|
|pageSize|query|integer|false|Maximum number of GrpcRoutes to return per call.|
|pageToken|query|string|false|The value returned by the last `ListGrpcRoutesResponse` Indicates that this is a continuation of a prior `ListGrpcRoutes` call, and that the system should return the next page of data.|
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
  "grpcRoutes": [
    {
      "createTime": "string",
      "description": "string",
      "gateways": [
        "string"
      ],
      "hostnames": [
        "string"
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "meshes": [
        "string"
      ],
      "name": "string",
      "rules": [
        {
          "action": {
            "destinations": [
              {
                "serviceName": "string",
                "weight": 0
              }
            ],
            "faultInjectionPolicy": {
              "abort": {
                "httpStatus": 0,
                "percentage": 0
              },
              "delay": {
                "fixedDelay": "string",
                "percentage": 0
              }
            },
            "retryPolicy": {
              "numRetries": 0,
              "retryConditions": [
                "string"
              ]
            },
            "timeout": "string"
          },
          "matches": [
            {
              "headers": [
                {
                  "key": "string",
                  "type": "TYPE_UNSPECIFIED",
                  "value": "string"
                }
              ],
              "method": {
                "caseSensitive": true,
                "grpcMethod": "string",
                "grpcService": "string",
                "type": "TYPE_UNSPECIFIED"
              }
            }
          ]
        }
      ],
      "selfLink": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="networkservicesprojectslocationsgrpcrouteslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListGrpcRoutesResponse](#schemalistgrpcroutesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.grpcRoutes.create

<a id="opIdnetworkservices.projects.locations.grpcRoutes.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/grpcRoutes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "gateways": [
      "string"
    ],
    "hostnames": [
      "string"
    ],
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "meshes": [
      "string"
    ],
    "name": "string",
    "rules": [
      {
        "action": {
          "destinations": [
            {
              "serviceName": "string",
              "weight": 0
            }
          ],
          "faultInjectionPolicy": {
            "abort": {
              "httpStatus": 0,
              "percentage": 0
            },
            "delay": {
              "fixedDelay": "string",
              "percentage": 0
            }
          },
          "retryPolicy": {
            "numRetries": 0,
            "retryConditions": [
              "string"
            ]
          },
          "timeout": "string"
        },
        "matches": [
          {
            "headers": [
              {
                "key": "string",
                "type": "TYPE_UNSPECIFIED",
                "value": "string"
              }
            ],
            "method": {
              "caseSensitive": true,
              "grpcMethod": "string",
              "grpcService": "string",
              "type": "TYPE_UNSPECIFIED"
            }
          }
        ]
      }
    ]
  }'
```

`POST /v1beta1/{parent}/grpcRoutes`

Creates a new GrpcRoute in a given project and location.

> Body parameter

```json
{
  "description": "string",
  "gateways": [
    "string"
  ],
  "hostnames": [
    "string"
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "meshes": [
    "string"
  ],
  "name": "string",
  "rules": [
    {
      "action": {
        "destinations": [
          {
            "serviceName": "string",
            "weight": 0
          }
        ],
        "faultInjectionPolicy": {
          "abort": {
            "httpStatus": 0,
            "percentage": 0
          },
          "delay": {
            "fixedDelay": "string",
            "percentage": 0
          }
        },
        "retryPolicy": {
          "numRetries": 0,
          "retryConditions": [
            "string"
          ]
        },
        "timeout": "string"
      },
      "matches": [
        {
          "headers": [
            {
              "key": "string",
              "type": "TYPE_UNSPECIFIED",
              "value": "string"
            }
          ],
          "method": {
            "caseSensitive": true,
            "grpcMethod": "string",
            "grpcService": "string",
            "type": "TYPE_UNSPECIFIED"
          }
        }
      ]
    }
  ]
}
```

<h3 id="networkservicesprojectslocationsgrpcroutescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the GrpcRoute. Must be in the format `projects/*/locations/global`.|
|grpcRouteId|query|string|false|Required. Short name of the GrpcRoute resource to be created.|
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
|body|body|[GrpcRoute](#schemagrpcroute)|false|none|
|» description|body|string|false|Optional. A free-text description of the resource. Max length 1024 characters.|
|» gateways|body|[string]|false|Optional. Gateways defines a list of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/*/locations/global/gateways/`|
|» hostnames|body|[string]|false|Required. Service hostnames with an optional port for which this route describes traffic. Format: [:] Hostname is the fully qualified domain name of a network host. This matches the RFC 1123 definition of a hostname with 2 notable exceptions: - IPs are not allowed. - A hostname may be prefixed with a wildcard label (*.). The wildcard label must appear by itself as the first label. Hostname can be "precise" which is a domain name without the terminating dot of a network host (e.g. "foo.example.com") or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. *.example.com). Note that as per RFC1035 and RFC1123, a label must consist of lower case alphanumeric characters or '-', and must start and end with an alphanumeric character. No other punctuation is allowed. The routes associated with a Mesh or Gateway must have unique hostnames. If you attempt to attach multiple routes with conflicting hostnames, the configuration will be rejected. For example, while it is acceptable for routes for the hostnames "*.foo.bar.com" and "*.bar.com" to be associated with the same route, it is not possible to associate two routes both with "*.bar.com" or both with "bar.com". If a port is specified, then gRPC clients must use the channel URI with the port to match this rule (i.e. "xds:///service:123"), otherwise they must supply the URI without a port (i.e. "xds:///service").|
|» labels|body|object|false|Optional. Set of label tags associated with the GrpcRoute resource.|
|» » **additionalProperties**|body|string|false|none|
|» meshes|body|[string]|false|Optional. Meshes defines a list of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/*/locations/global/meshes/`|
|» name|body|string|false|Required. Name of the GrpcRoute resource. It matches pattern `projects/*/locations/global/grpcRoutes/`|
|» rules|body|[[GrpcRouteRouteRule](#schemagrpcrouterouterule)]|false|Required. A list of detailed rules defining how to route traffic. Within a single GrpcRoute, the GrpcRoute.RouteAction associated with the first matching GrpcRoute.RouteRule will be executed. At least one rule must be supplied.|

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

<h3 id="networkservicesprojectslocationsgrpcroutescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.httpRoutes.list

<a id="opIdnetworkservices.projects.locations.httpRoutes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/httpRoutes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/httpRoutes`

Lists HttpRoute in a given project and location.

<h3 id="networkservicesprojectslocationshttprouteslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the HttpRoutes should be listed, specified in the format `projects/*/locations/global`.|
|pageSize|query|integer|false|Maximum number of HttpRoutes to return per call.|
|pageToken|query|string|false|The value returned by the last `ListHttpRoutesResponse` Indicates that this is a continuation of a prior `ListHttpRoutes` call, and that the system should return the next page of data.|
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
  "httpRoutes": [
    {
      "createTime": "string",
      "description": "string",
      "gateways": [
        "string"
      ],
      "hostnames": [
        "string"
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "meshes": [
        "string"
      ],
      "name": "string",
      "rules": [
        {
          "action": {
            "corsPolicy": {
              "allowCredentials": true,
              "allowHeaders": [
                "string"
              ],
              "allowMethods": [
                "string"
              ],
              "allowOriginRegexes": [
                "string"
              ],
              "allowOrigins": [
                "string"
              ],
              "disabled": true,
              "exposeHeaders": [
                "string"
              ],
              "maxAge": "string"
            },
            "destinations": [
              {
                "serviceName": "string",
                "weight": 0
              }
            ],
            "faultInjectionPolicy": {
              "abort": {
                "httpStatus": 0,
                "percentage": 0
              },
              "delay": {
                "fixedDelay": "string",
                "percentage": 0
              }
            },
            "redirect": {
              "hostRedirect": "string",
              "httpsRedirect": true,
              "pathRedirect": "string",
              "portRedirect": 0,
              "prefixRewrite": "string",
              "responseCode": "RESPONSE_CODE_UNSPECIFIED",
              "stripQuery": true
            },
            "requestHeaderModifier": {
              "add": {
                "property1": "string",
                "property2": "string"
              },
              "remove": [
                "string"
              ],
              "set": {
                "property1": "string",
                "property2": "string"
              }
            },
            "requestMirrorPolicy": {
              "destination": {
                "serviceName": "string",
                "weight": 0
              }
            },
            "responseHeaderModifier": {
              "add": {
                "property1": "string",
                "property2": "string"
              },
              "remove": [
                "string"
              ],
              "set": {
                "property1": "string",
                "property2": "string"
              }
            },
            "retryPolicy": {
              "numRetries": 0,
              "perTryTimeout": "string",
              "retryConditions": [
                "string"
              ]
            },
            "timeout": "string",
            "urlRewrite": {
              "hostRewrite": "string",
              "pathPrefixRewrite": "string"
            }
          },
          "matches": [
            {
              "fullPathMatch": "string",
              "headers": [
                {
                  "exactMatch": "string",
                  "header": "string",
                  "invertMatch": true,
                  "prefixMatch": "string",
                  "presentMatch": true,
                  "rangeMatch": {
                    "end": 0,
                    "start": 0
                  },
                  "regexMatch": "string",
                  "suffixMatch": "string"
                }
              ],
              "ignoreCase": true,
              "prefixMatch": "string",
              "queryParameters": [
                {
                  "exactMatch": "string",
                  "presentMatch": true,
                  "queryParameter": "string",
                  "regexMatch": "string"
                }
              ],
              "regexMatch": "string"
            }
          ]
        }
      ],
      "selfLink": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="networkservicesprojectslocationshttprouteslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListHttpRoutesResponse](#schemalisthttproutesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.httpRoutes.create

<a id="opIdnetworkservices.projects.locations.httpRoutes.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/httpRoutes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "gateways": [
      "string"
    ],
    "hostnames": [
      "string"
    ],
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "meshes": [
      "string"
    ],
    "name": "string",
    "rules": [
      {
        "action": {
          "corsPolicy": {
            "allowCredentials": true,
            "allowHeaders": [
              "string"
            ],
            "allowMethods": [
              "string"
            ],
            "allowOriginRegexes": [
              "string"
            ],
            "allowOrigins": [
              "string"
            ],
            "disabled": true,
            "exposeHeaders": [
              "string"
            ],
            "maxAge": "string"
          },
          "destinations": [
            {
              "serviceName": "string",
              "weight": 0
            }
          ],
          "faultInjectionPolicy": {
            "abort": {
              "httpStatus": 0,
              "percentage": 0
            },
            "delay": {
              "fixedDelay": "string",
              "percentage": 0
            }
          },
          "redirect": {
            "hostRedirect": "string",
            "httpsRedirect": true,
            "pathRedirect": "string",
            "portRedirect": 0,
            "prefixRewrite": "string",
            "responseCode": "RESPONSE_CODE_UNSPECIFIED",
            "stripQuery": true
          },
          "requestHeaderModifier": {
            "add": {
              "property1": "string",
              "property2": "string"
            },
            "remove": [
              "string"
            ],
            "set": {
              "property1": "string",
              "property2": "string"
            }
          },
          "requestMirrorPolicy": {
            "destination": {
              "serviceName": "string",
              "weight": 0
            }
          },
          "responseHeaderModifier": {
            "add": {
              "property1": "string",
              "property2": "string"
            },
            "remove": [
              "string"
            ],
            "set": {
              "property1": "string",
              "property2": "string"
            }
          },
          "retryPolicy": {
            "numRetries": 0,
            "perTryTimeout": "string",
            "retryConditions": [
              "string"
            ]
          },
          "timeout": "string",
          "urlRewrite": {
            "hostRewrite": "string",
            "pathPrefixRewrite": "string"
          }
        },
        "matches": [
          {
            "fullPathMatch": "string",
            "headers": [
              {
                "exactMatch": "string",
                "header": "string",
                "invertMatch": true,
                "prefixMatch": "string",
                "presentMatch": true,
                "rangeMatch": {
                  "end": 0,
                  "start": 0
                },
                "regexMatch": "string",
                "suffixMatch": "string"
              }
            ],
            "ignoreCase": true,
            "prefixMatch": "string",
            "queryParameters": [
              {
                "exactMatch": "string",
                "presentMatch": true,
                "queryParameter": "string",
                "regexMatch": "string"
              }
            ],
            "regexMatch": "string"
          }
        ]
      }
    ]
  }'
```

`POST /v1beta1/{parent}/httpRoutes`

Creates a new HttpRoute in a given project and location.

> Body parameter

```json
{
  "description": "string",
  "gateways": [
    "string"
  ],
  "hostnames": [
    "string"
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "meshes": [
    "string"
  ],
  "name": "string",
  "rules": [
    {
      "action": {
        "corsPolicy": {
          "allowCredentials": true,
          "allowHeaders": [
            "string"
          ],
          "allowMethods": [
            "string"
          ],
          "allowOriginRegexes": [
            "string"
          ],
          "allowOrigins": [
            "string"
          ],
          "disabled": true,
          "exposeHeaders": [
            "string"
          ],
          "maxAge": "string"
        },
        "destinations": [
          {
            "serviceName": "string",
            "weight": 0
          }
        ],
        "faultInjectionPolicy": {
          "abort": {
            "httpStatus": 0,
            "percentage": 0
          },
          "delay": {
            "fixedDelay": "string",
            "percentage": 0
          }
        },
        "redirect": {
          "hostRedirect": "string",
          "httpsRedirect": true,
          "pathRedirect": "string",
          "portRedirect": 0,
          "prefixRewrite": "string",
          "responseCode": "RESPONSE_CODE_UNSPECIFIED",
          "stripQuery": true
        },
        "requestHeaderModifier": {
          "add": {
            "property1": "string",
            "property2": "string"
          },
          "remove": [
            "string"
          ],
          "set": {
            "property1": "string",
            "property2": "string"
          }
        },
        "requestMirrorPolicy": {
          "destination": {
            "serviceName": "string",
            "weight": 0
          }
        },
        "responseHeaderModifier": {
          "add": {
            "property1": "string",
            "property2": "string"
          },
          "remove": [
            "string"
          ],
          "set": {
            "property1": "string",
            "property2": "string"
          }
        },
        "retryPolicy": {
          "numRetries": 0,
          "perTryTimeout": "string",
          "retryConditions": [
            "string"
          ]
        },
        "timeout": "string",
        "urlRewrite": {
          "hostRewrite": "string",
          "pathPrefixRewrite": "string"
        }
      },
      "matches": [
        {
          "fullPathMatch": "string",
          "headers": [
            {
              "exactMatch": "string",
              "header": "string",
              "invertMatch": true,
              "prefixMatch": "string",
              "presentMatch": true,
              "rangeMatch": {
                "end": 0,
                "start": 0
              },
              "regexMatch": "string",
              "suffixMatch": "string"
            }
          ],
          "ignoreCase": true,
          "prefixMatch": "string",
          "queryParameters": [
            {
              "exactMatch": "string",
              "presentMatch": true,
              "queryParameter": "string",
              "regexMatch": "string"
            }
          ],
          "regexMatch": "string"
        }
      ]
    }
  ]
}
```

<h3 id="networkservicesprojectslocationshttproutescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the HttpRoute. Must be in the format `projects/*/locations/global`.|
|httpRouteId|query|string|false|Required. Short name of the HttpRoute resource to be created.|
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
|body|body|[HttpRoute](#schemahttproute)|false|none|
|» description|body|string|false|Optional. A free-text description of the resource. Max length 1024 characters.|
|» gateways|body|[string]|false|Optional. Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/*/locations/global/gateways/`|
|» hostnames|body|[string]|false|Required. Hostnames define a set of hosts that should match against the HTTP host header to select a HttpRoute to process the request. Hostname is the fully qualified domain name of a network host, as defined by RFC 1123 with the exception that: - IPs are not allowed. - A hostname may be prefixed with a wildcard label (*.). The wildcard label must appear by itself as the first label. Hostname can be "precise" which is a domain name without the terminating dot of a network host (e.g. "foo.example.com") or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. *.example.com). Note that as per RFC1035 and RFC1123, a label must consist of lower case alphanumeric characters or '-', and must start and end with an alphanumeric character. No other punctuation is allowed. The routes associated with a Mesh or Gateways must have unique hostnames. If you attempt to attach multiple routes with conflicting hostnames, the configuration will be rejected. For example, while it is acceptable for routes for the hostnames "*.foo.bar.com" and "*.bar.com" to be associated with the same Mesh (or Gateways under the same scope), it is not possible to associate two routes both with "*.bar.com" or both with "bar.com".|
|» labels|body|object|false|Optional. Set of label tags associated with the HttpRoute resource.|
|» » **additionalProperties**|body|string|false|none|
|» meshes|body|[string]|false|Optional. Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/*/locations/global/meshes/` The attached Mesh should be of a type SIDECAR|
|» name|body|string|false|Required. Name of the HttpRoute resource. It matches pattern `projects/*/locations/global/httpRoutes/http_route_name>`.|
|» rules|body|[[HttpRouteRouteRule](#schemahttprouterouterule)]|false|Required. Rules that define how traffic is routed and handled. Rules will be matched sequentially based on the RouteMatch specified for the rule.|

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

<h3 id="networkservicesprojectslocationshttproutescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.meshes.list

<a id="opIdnetworkservices.projects.locations.meshes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/meshes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/meshes`

Lists Meshes in a given project and location.

<h3 id="networkservicesprojectslocationsmesheslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the Meshes should be listed, specified in the format `projects/*/locations/global`.|
|pageSize|query|integer|false|Maximum number of Meshes to return per call.|
|pageToken|query|string|false|The value returned by the last `ListMeshesResponse` Indicates that this is a continuation of a prior `ListMeshes` call, and that the system should return the next page of data.|
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
  "meshes": [
    {
      "createTime": "string",
      "description": "string",
      "interceptionPort": 0,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "selfLink": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="networkservicesprojectslocationsmesheslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListMeshesResponse](#schemalistmeshesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.meshes.create

<a id="opIdnetworkservices.projects.locations.meshes.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/meshes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "interceptionPort": 0,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string"
  }'
```

`POST /v1beta1/{parent}/meshes`

Creates a new Mesh in a given project and location.

> Body parameter

```json
{
  "description": "string",
  "interceptionPort": 0,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

<h3 id="networkservicesprojectslocationsmeshescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the Mesh. Must be in the format `projects/*/locations/global`.|
|meshId|query|string|false|Required. Short name of the Mesh resource to be created.|
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
|body|body|[Mesh](#schemamesh)|false|none|
|» description|body|string|false|Optional. A free-text description of the resource. Max length 1024 characters.|
|» interceptionPort|body|integer(int32)|false|Optional. If set to a valid TCP port (1-65535), instructs the SIDECAR proxy to listen on the specified port of localhost (127.0.0.1) address. The SIDECAR proxy will expect all traffic to be redirected to this port regardless of its actual ip:port destination. If unset, a port '15001' is used as the interception port. This will is applicable only for sidecar proxy deployments.|
|» labels|body|object|false|Optional. Set of label tags associated with the Mesh resource.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Required. Name of the Mesh resource. It matches pattern `projects/*/locations/global/meshes/`.|

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

<h3 id="networkservicesprojectslocationsmeshescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.serviceBindings.list

<a id="opIdnetworkservices.projects.locations.serviceBindings.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/serviceBindings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/serviceBindings`

Lists ServiceBinding in a given project and location.

<h3 id="networkservicesprojectslocationsservicebindingslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the ServiceBindings should be listed, specified in the format `projects/*/locations/global`.|
|pageSize|query|integer|false|Maximum number of ServiceBindings to return per call.|
|pageToken|query|string|false|The value returned by the last `ListServiceBindingsResponse` Indicates that this is a continuation of a prior `ListRouters` call, and that the system should return the next page of data.|
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
  "serviceBindings": [
    {
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "service": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="networkservicesprojectslocationsservicebindingslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListServiceBindingsResponse](#schemalistservicebindingsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.serviceBindings.create

<a id="opIdnetworkservices.projects.locations.serviceBindings.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/serviceBindings \
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
    "service": "string"
  }'
```

`POST /v1beta1/{parent}/serviceBindings`

Creates a new ServiceBinding in a given project and location.

> Body parameter

```json
{
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "service": "string"
}
```

<h3 id="networkservicesprojectslocationsservicebindingscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the ServiceBinding. Must be in the format `projects/*/locations/global`.|
|serviceBindingId|query|string|false|Required. Short name of the ServiceBinding resource to be created.|
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
|body|body|[ServiceBinding](#schemaservicebinding)|false|none|
|» description|body|string|false|Optional. A free-text description of the resource. Max length 1024 characters.|
|» labels|body|object|false|Optional. Set of label tags associated with the ServiceBinding resource.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Required. Name of the ServiceBinding resource. It matches pattern `projects/*/locations/global/serviceBindings/service_binding_name`.|
|» service|body|string|false|Required. The full Service Directory Service name of the format projects/*/locations/*/namespaces/*/services/*|

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

<h3 id="networkservicesprojectslocationsservicebindingscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.tcpRoutes.list

<a id="opIdnetworkservices.projects.locations.tcpRoutes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/tcpRoutes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/tcpRoutes`

Lists TcpRoute in a given project and location.

<h3 id="networkservicesprojectslocationstcprouteslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the TcpRoutes should be listed, specified in the format `projects/*/locations/global`.|
|pageSize|query|integer|false|Maximum number of TcpRoutes to return per call.|
|pageToken|query|string|false|The value returned by the last `ListTcpRoutesResponse` Indicates that this is a continuation of a prior `ListTcpRoutes` call, and that the system should return the next page of data.|
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
  "tcpRoutes": [
    {
      "createTime": "string",
      "description": "string",
      "gateways": [
        "string"
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "meshes": [
        "string"
      ],
      "name": "string",
      "rules": [
        {
          "action": {
            "destinations": [
              {
                "serviceName": "string",
                "weight": 0
              }
            ],
            "originalDestination": true
          },
          "matches": [
            {
              "address": "string",
              "port": "string"
            }
          ]
        }
      ],
      "selfLink": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="networkservicesprojectslocationstcprouteslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTcpRoutesResponse](#schemalisttcproutesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.tcpRoutes.create

<a id="opIdnetworkservices.projects.locations.tcpRoutes.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/tcpRoutes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "gateways": [
      "string"
    ],
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "meshes": [
      "string"
    ],
    "name": "string",
    "rules": [
      {
        "action": {
          "destinations": [
            {
              "serviceName": "string",
              "weight": 0
            }
          ],
          "originalDestination": true
        },
        "matches": [
          {
            "address": "string",
            "port": "string"
          }
        ]
      }
    ]
  }'
```

`POST /v1beta1/{parent}/tcpRoutes`

Creates a new TcpRoute in a given project and location.

> Body parameter

```json
{
  "description": "string",
  "gateways": [
    "string"
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "meshes": [
    "string"
  ],
  "name": "string",
  "rules": [
    {
      "action": {
        "destinations": [
          {
            "serviceName": "string",
            "weight": 0
          }
        ],
        "originalDestination": true
      },
      "matches": [
        {
          "address": "string",
          "port": "string"
        }
      ]
    }
  ]
}
```

<h3 id="networkservicesprojectslocationstcproutescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the TcpRoute. Must be in the format `projects/*/locations/global`.|
|tcpRouteId|query|string|false|Required. Short name of the TcpRoute resource to be created. E.g. TODO(Add an example).|
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
|body|body|[TcpRoute](#schematcproute)|false|none|
|» description|body|string|false|Optional. A free-text description of the resource. Max length 1024 characters.|
|» gateways|body|[string]|false|Optional. Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/*/locations/global/gateways/`|
|» labels|body|object|false|Optional. Set of label tags associated with the TcpRoute resource.|
|» » **additionalProperties**|body|string|false|none|
|» meshes|body|[string]|false|Optional. Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/*/locations/global/meshes/` The attached Mesh should be of a type SIDECAR|
|» name|body|string|false|Required. Name of the TcpRoute resource. It matches pattern `projects/*/locations/global/tcpRoutes/tcp_route_name>`.|
|» rules|body|[[TcpRouteRouteRule](#schematcprouterouterule)]|false|Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.|

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

<h3 id="networkservicesprojectslocationstcproutescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.tlsRoutes.list

<a id="opIdnetworkservices.projects.locations.tlsRoutes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/tlsRoutes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/tlsRoutes`

Lists TlsRoute in a given project and location.

<h3 id="networkservicesprojectslocationstlsrouteslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the TlsRoutes should be listed, specified in the format `projects/*/locations/global`.|
|pageSize|query|integer|false|Maximum number of TlsRoutes to return per call.|
|pageToken|query|string|false|The value returned by the last `ListTlsRoutesResponse` Indicates that this is a continuation of a prior `ListTlsRoutes` call, and that the system should return the next page of data.|
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
  "tlsRoutes": [
    {
      "createTime": "string",
      "description": "string",
      "gateways": [
        "string"
      ],
      "meshes": [
        "string"
      ],
      "name": "string",
      "rules": [
        {
          "action": {
            "destinations": [
              {
                "serviceName": "string",
                "weight": 0
              }
            ]
          },
          "matches": [
            {
              "alpn": [
                "string"
              ],
              "sniHost": [
                "string"
              ]
            }
          ]
        }
      ],
      "selfLink": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="networkservicesprojectslocationstlsrouteslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTlsRoutesResponse](#schemalisttlsroutesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.tlsRoutes.create

<a id="opIdnetworkservices.projects.locations.tlsRoutes.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/tlsRoutes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "gateways": [
      "string"
    ],
    "meshes": [
      "string"
    ],
    "name": "string",
    "rules": [
      {
        "action": {
          "destinations": [
            {
              "serviceName": "string",
              "weight": 0
            }
          ]
        },
        "matches": [
          {
            "alpn": [
              "string"
            ],
            "sniHost": [
              "string"
            ]
          }
        ]
      }
    ]
  }'
```

`POST /v1beta1/{parent}/tlsRoutes`

Creates a new TlsRoute in a given project and location.

> Body parameter

```json
{
  "description": "string",
  "gateways": [
    "string"
  ],
  "meshes": [
    "string"
  ],
  "name": "string",
  "rules": [
    {
      "action": {
        "destinations": [
          {
            "serviceName": "string",
            "weight": 0
          }
        ]
      },
      "matches": [
        {
          "alpn": [
            "string"
          ],
          "sniHost": [
            "string"
          ]
        }
      ]
    }
  ]
}
```

<h3 id="networkservicesprojectslocationstlsroutescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the TlsRoute. Must be in the format `projects/*/locations/global`.|
|tlsRouteId|query|string|false|Required. Short name of the TlsRoute resource to be created. E.g. TODO(Add an example).|
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
|body|body|[TlsRoute](#schematlsroute)|false|none|
|» description|body|string|false|Optional. A free-text description of the resource. Max length 1024 characters.|
|» gateways|body|[string]|false|Optional. Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/*/locations/global/gateways/`|
|» meshes|body|[string]|false|Optional. Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/*/locations/global/meshes/` The attached Mesh should be of a type SIDECAR|
|» name|body|string|false|Required. Name of the TlsRoute resource. It matches pattern `projects/*/locations/global/tlsRoutes/tls_route_name>`.|
|» rules|body|[[TlsRouteRouteRule](#schematlsrouterouterule)]|false|Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.|

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

<h3 id="networkservicesprojectslocationstlsroutescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.serviceBindings.getIamPolicy

<a id="opIdnetworkservices.projects.locations.serviceBindings.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="networkservicesprojectslocationsservicebindingsgetiampolicy-parameters">Parameters</h3>

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

<h3 id="networkservicesprojectslocationsservicebindingsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.serviceBindings.setIamPolicy

<a id="opIdnetworkservices.projects.locations.serviceBindings.setIamPolicy"></a>

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

<h3 id="networkservicesprojectslocationsservicebindingssetiampolicy-parameters">Parameters</h3>

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

<h3 id="networkservicesprojectslocationsservicebindingssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networkservices.projects.locations.serviceBindings.testIamPermissions

<a id="opIdnetworkservices.projects.locations.serviceBindings.testIamPermissions"></a>

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

<h3 id="networkservicesprojectslocationsservicebindingstestiampermissions-parameters">Parameters</h3>

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

<h3 id="networkservicesprojectslocationsservicebindingstestiampermissions-responses">Responses</h3>

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

<h2 id="tocS_EndpointMatcher">EndpointMatcher</h2>
<!-- backwards compatibility -->
<a id="schemaendpointmatcher"></a>
<a id="schema_EndpointMatcher"></a>
<a id="tocSendpointmatcher"></a>
<a id="tocsendpointmatcher"></a>

```json
{
  "metadataLabelMatcher": {
    "metadataLabelMatchCriteria": "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED",
    "metadataLabels": [
      {
        "labelName": "string",
        "labelValue": "string"
      }
    ]
  }
}
```

A definition of a matcher that selects endpoints to which the policies should be applied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadataLabelMatcher|[MetadataLabelMatcher](#schemametadatalabelmatcher)|false|none|The matcher is based on node metadata presented by xDS clients.|

<h2 id="tocS_EndpointPolicy">EndpointPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaendpointpolicy"></a>
<a id="schema_EndpointPolicy"></a>
<a id="tocSendpointpolicy"></a>
<a id="tocsendpointpolicy"></a>

```json
{
  "authorizationPolicy": "string",
  "clientTlsPolicy": "string",
  "createTime": "string",
  "description": "string",
  "endpointMatcher": {
    "metadataLabelMatcher": {
      "metadataLabelMatchCriteria": "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED",
      "metadataLabels": [
        {
          "labelName": "string",
          "labelValue": "string"
        }
      ]
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "serverTlsPolicy": "string",
  "trafficPortSelector": {
    "ports": [
      "string"
    ]
  },
  "type": "ENDPOINT_POLICY_TYPE_UNSPECIFIED",
  "updateTime": "string"
}
```

EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationPolicy|string|false|none|Optional. This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints. Refer to Authorization. If this field is not specified, authorization is disabled(no authz checks) for this endpoint.|
|clientTlsPolicy|string|false|none|Optional. A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints. More specifically, it is applied to the outgoing traffic from the proxy to the endpoint. This is typically used for sidecar model where the proxy identifies itself as endpoint to the control plane, with the connection between sidecar and endpoint requiring authentication. If this field is not set, authentication is disabled(open). Applicable only when EndpointPolicyType is SIDECAR_PROXY.|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was created.|
|description|string|false|none|Optional. A free-text description of the resource. Max length 1024 characters.|
|endpointMatcher|[EndpointMatcher](#schemaendpointmatcher)|false|none|Required. A matcher that selects endpoints to which the policies should be applied.|
|labels|object|false|none|Optional. Set of label tags associated with the EndpointPolicy resource.|
|name|string|false|none|Required. Name of the EndpointPolicy resource. It matches pattern `projects/{project}/locations/global/endpointPolicies/{endpoint_policy}`.|
|serverTlsPolicy|string|false|none|Optional. A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends. If this field is not set, authentication is disabled(open) for this endpoint.|
|trafficPortSelector|[TrafficPortSelector](#schematrafficportselector)|false|none|Optional. Port selector for the (matched) endpoints. If no port selector is provided, the matched config is applied to all ports.|
|type|string|false|none|Required. The type of endpoint policy. This is primarily used to validate the configuration.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ENDPOINT_POLICY_TYPE_UNSPECIFIED|
|type|SIDECAR_PROXY|
|type|GRPC_SERVER|

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

<h2 id="tocS_Gateway">Gateway</h2>
<!-- backwards compatibility -->
<a id="schemagateway"></a>
<a id="schema_Gateway"></a>
<a id="tocSgateway"></a>
<a id="tocsgateway"></a>

```json
{
  "addresses": [
    "string"
  ],
  "certificateUrls": [
    "string"
  ],
  "createTime": "string",
  "description": "string",
  "gatewaySecurityPolicy": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "network": "string",
  "ports": [
    0
  ],
  "scope": "string",
  "selfLink": "string",
  "serverTlsPolicy": "string",
  "subnetwork": "string",
  "type": "TYPE_UNSPECIFIED",
  "updateTime": "string"
}
```

Gateway represents the configuration for a proxy, typically a load balancer. It captures the ip:port over which the services are exposed by the proxy, along with any policy configurations. Routes have reference to to Gateways to dictate how requests should be routed by this Gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[string]|false|none|Optional. Zero or one IPv4-address on which the Gateway will receive the traffic. When no address is provided, an IP from the subnetwork is allocated This field only applies to gateways of type 'SECURE_WEB_GATEWAY'. Gateways of type 'OPEN_MESH' listen on 0.0.0.0.|
|certificateUrls|[string]|false|none|Optional. A fully-qualified Certificates URL reference. The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection. This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was created.|
|description|string|false|none|Optional. A free-text description of the resource. Max length 1024 characters.|
|gatewaySecurityPolicy|string|false|none|Optional. A fully-qualified GatewaySecurityPolicy URL reference. Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections. For example: `projects/*/locations/*/gatewaySecurityPolicies/swg-policy`. This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'.|
|labels|object|false|none|Optional. Set of label tags associated with the Gateway resource.|
|name|string|false|none|Required. Name of the Gateway resource. It matches pattern `projects/*/locations/*/gateways/`.|
|network|string|false|none|Optional. The relative resource name identifying the VPC network that is using this configuration. For example: `projects/*/global/networks/network-1`. Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.|
|ports|[integer(int32)]|false|none|Required. One or more port numbers (1-65535), on which the Gateway will receive traffic. The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are limited to 1 port. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 and support multiple ports.|
|scope|string|false|none|Optional. Scope determines how configuration across multiple Gateway instances are merged. The configuration for multiple Gateway instances with the same scope will be merged as presented as a single coniguration to the proxy/load balancer. Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.|
|selfLink|string|false|read-only|Output only. Server-defined URL of this resource|
|serverTlsPolicy|string|false|none|Optional. A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled.|
|subnetwork|string|false|none|Optional. The relative resource name identifying the subnetwork in which this SWG is allocated. For example: `projects/*/regions/us-central1/subnetworks/network-1` Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY".|
|type|string|false|none|Immutable. The type of the customer managed gateway. This field is required. If unspecified, an error is returned.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|OPEN_MESH|
|type|SECURE_WEB_GATEWAY|

<h2 id="tocS_GrpcRoute">GrpcRoute</h2>
<!-- backwards compatibility -->
<a id="schemagrpcroute"></a>
<a id="schema_GrpcRoute"></a>
<a id="tocSgrpcroute"></a>
<a id="tocsgrpcroute"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "gateways": [
    "string"
  ],
  "hostnames": [
    "string"
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "meshes": [
    "string"
  ],
  "name": "string",
  "rules": [
    {
      "action": {
        "destinations": [
          {
            "serviceName": "string",
            "weight": 0
          }
        ],
        "faultInjectionPolicy": {
          "abort": {
            "httpStatus": 0,
            "percentage": 0
          },
          "delay": {
            "fixedDelay": "string",
            "percentage": 0
          }
        },
        "retryPolicy": {
          "numRetries": 0,
          "retryConditions": [
            "string"
          ]
        },
        "timeout": "string"
      },
      "matches": [
        {
          "headers": [
            {
              "key": "string",
              "type": "TYPE_UNSPECIFIED",
              "value": "string"
            }
          ],
          "method": {
            "caseSensitive": true,
            "grpcMethod": "string",
            "grpcService": "string",
            "type": "TYPE_UNSPECIFIED"
          }
        }
      ]
    }
  ],
  "selfLink": "string",
  "updateTime": "string"
}
```

GrpcRoute is the resource defining how gRPC traffic routed by a Mesh or Gateway resource is routed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was created.|
|description|string|false|none|Optional. A free-text description of the resource. Max length 1024 characters.|
|gateways|[string]|false|none|Optional. Gateways defines a list of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/*/locations/global/gateways/`|
|hostnames|[string]|false|none|Required. Service hostnames with an optional port for which this route describes traffic. Format: [:] Hostname is the fully qualified domain name of a network host. This matches the RFC 1123 definition of a hostname with 2 notable exceptions: - IPs are not allowed. - A hostname may be prefixed with a wildcard label (*.). The wildcard label must appear by itself as the first label. Hostname can be "precise" which is a domain name without the terminating dot of a network host (e.g. "foo.example.com") or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. *.example.com). Note that as per RFC1035 and RFC1123, a label must consist of lower case alphanumeric characters or '-', and must start and end with an alphanumeric character. No other punctuation is allowed. The routes associated with a Mesh or Gateway must have unique hostnames. If you attempt to attach multiple routes with conflicting hostnames, the configuration will be rejected. For example, while it is acceptable for routes for the hostnames "*.foo.bar.com" and "*.bar.com" to be associated with the same route, it is not possible to associate two routes both with "*.bar.com" or both with "bar.com". If a port is specified, then gRPC clients must use the channel URI with the port to match this rule (i.e. "xds:///service:123"), otherwise they must supply the URI without a port (i.e. "xds:///service").|
|labels|object|false|none|Optional. Set of label tags associated with the GrpcRoute resource.|
|meshes|[string]|false|none|Optional. Meshes defines a list of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/*/locations/global/meshes/`|
|name|string|false|none|Required. Name of the GrpcRoute resource. It matches pattern `projects/*/locations/global/grpcRoutes/`|
|rules|[[GrpcRouteRouteRule](#schemagrpcrouterouterule)]|false|none|Required. A list of detailed rules defining how to route traffic. Within a single GrpcRoute, the GrpcRoute.RouteAction associated with the first matching GrpcRoute.RouteRule will be executed. At least one rule must be supplied.|
|selfLink|string|false|read-only|Output only. Server-defined URL of this resource|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was updated.|

<h2 id="tocS_GrpcRouteDestination">GrpcRouteDestination</h2>
<!-- backwards compatibility -->
<a id="schemagrpcroutedestination"></a>
<a id="schema_GrpcRouteDestination"></a>
<a id="tocSgrpcroutedestination"></a>
<a id="tocsgrpcroutedestination"></a>

```json
{
  "serviceName": "string",
  "weight": 0
}
```

The destination to which traffic will be routed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|string|false|none|Required. The URL of a destination service to which to route traffic. Must refer to either a BackendService or ServiceDirectoryService.|
|weight|integer(int32)|false|none|Optional. Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.|

<h2 id="tocS_GrpcRouteFaultInjectionPolicy">GrpcRouteFaultInjectionPolicy</h2>
<!-- backwards compatibility -->
<a id="schemagrpcroutefaultinjectionpolicy"></a>
<a id="schema_GrpcRouteFaultInjectionPolicy"></a>
<a id="tocSgrpcroutefaultinjectionpolicy"></a>
<a id="tocsgrpcroutefaultinjectionpolicy"></a>

```json
{
  "abort": {
    "httpStatus": 0,
    "percentage": 0
  },
  "delay": {
    "fixedDelay": "string",
    "percentage": 0
  }
}
```

The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced on a percentage of requests before sending those requests to the destination service. Similarly requests from clients can be aborted by for a percentage of requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abort|[GrpcRouteFaultInjectionPolicyAbort](#schemagrpcroutefaultinjectionpolicyabort)|false|none|The specification for aborting to client requests.|
|delay|[GrpcRouteFaultInjectionPolicyDelay](#schemagrpcroutefaultinjectionpolicydelay)|false|none|The specification for injecting delay to client requests.|

<h2 id="tocS_GrpcRouteFaultInjectionPolicyAbort">GrpcRouteFaultInjectionPolicyAbort</h2>
<!-- backwards compatibility -->
<a id="schemagrpcroutefaultinjectionpolicyabort"></a>
<a id="schema_GrpcRouteFaultInjectionPolicyAbort"></a>
<a id="tocSgrpcroutefaultinjectionpolicyabort"></a>
<a id="tocsgrpcroutefaultinjectionpolicyabort"></a>

```json
{
  "httpStatus": 0,
  "percentage": 0
}
```

Specification of how client requests are aborted as part of fault injection before being sent to a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|httpStatus|integer(int32)|false|none|The HTTP status code used to abort the request. The value must be between 200 and 599 inclusive.|
|percentage|integer(int32)|false|none|The percentage of traffic which will be aborted. The value must be between [0, 100]|

<h2 id="tocS_GrpcRouteFaultInjectionPolicyDelay">GrpcRouteFaultInjectionPolicyDelay</h2>
<!-- backwards compatibility -->
<a id="schemagrpcroutefaultinjectionpolicydelay"></a>
<a id="schema_GrpcRouteFaultInjectionPolicyDelay"></a>
<a id="tocSgrpcroutefaultinjectionpolicydelay"></a>
<a id="tocsgrpcroutefaultinjectionpolicydelay"></a>

```json
{
  "fixedDelay": "string",
  "percentage": 0
}
```

Specification of how client requests are delayed as part of fault injection before being sent to a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fixedDelay|string(google-duration)|false|none|Specify a fixed delay before forwarding the request.|
|percentage|integer(int32)|false|none|The percentage of traffic on which delay will be injected. The value must be between [0, 100]|

<h2 id="tocS_GrpcRouteHeaderMatch">GrpcRouteHeaderMatch</h2>
<!-- backwards compatibility -->
<a id="schemagrpcrouteheadermatch"></a>
<a id="schema_GrpcRouteHeaderMatch"></a>
<a id="tocSgrpcrouteheadermatch"></a>
<a id="tocsgrpcrouteheadermatch"></a>

```json
{
  "key": "string",
  "type": "TYPE_UNSPECIFIED",
  "value": "string"
}
```

A match against a collection of headers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Required. The key of the header.|
|type|string|false|none|Optional. Specifies how to match against the value of the header. If not specified, a default value of EXACT is used.|
|value|string|false|none|Required. The value of the header.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|EXACT|
|type|REGULAR_EXPRESSION|

<h2 id="tocS_GrpcRouteMethodMatch">GrpcRouteMethodMatch</h2>
<!-- backwards compatibility -->
<a id="schemagrpcroutemethodmatch"></a>
<a id="schema_GrpcRouteMethodMatch"></a>
<a id="tocSgrpcroutemethodmatch"></a>
<a id="tocsgrpcroutemethodmatch"></a>

```json
{
  "caseSensitive": true,
  "grpcMethod": "string",
  "grpcService": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

Specifies a match against a method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseSensitive|boolean|false|none|Optional. Specifies that matches are case sensitive. The default value is true. case_sensitive must not be used with a type of REGULAR_EXPRESSION.|
|grpcMethod|string|false|none|Required. Name of the method to match against. If unspecified, will match all methods.|
|grpcService|string|false|none|Required. Name of the service to match against. If unspecified, will match all services.|
|type|string|false|none|Optional. Specifies how to match against the name. If not specified, a default value of "EXACT" is used.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|EXACT|
|type|REGULAR_EXPRESSION|

<h2 id="tocS_GrpcRouteRetryPolicy">GrpcRouteRetryPolicy</h2>
<!-- backwards compatibility -->
<a id="schemagrpcrouteretrypolicy"></a>
<a id="schema_GrpcRouteRetryPolicy"></a>
<a id="tocSgrpcrouteretrypolicy"></a>
<a id="tocsgrpcrouteretrypolicy"></a>

```json
{
  "numRetries": 0,
  "retryConditions": [
    "string"
  ]
}
```

The specifications for retries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numRetries|integer(uint32)|false|none|Specifies the allowed number of retries. This number must be > 0. If not specified, default to 1.|
|retryConditions|[string]|false|none|- connect-failure: Router will retry on failures connecting to Backend Services, for example due to connection timeouts. - refused-stream: Router will retry if the backend service resets the stream with a REFUSED_STREAM error code. This reset type indicates that it is safe to retry. - cancelled: Router will retry if the gRPC status code in the response header is set to cancelled - deadline-exceeded: Router will retry if the gRPC status code in the response header is set to deadline-exceeded - resource-exhausted: Router will retry if the gRPC status code in the response header is set to resource-exhausted - unavailable: Router will retry if the gRPC status code in the response header is set to unavailable|

<h2 id="tocS_GrpcRouteRouteAction">GrpcRouteRouteAction</h2>
<!-- backwards compatibility -->
<a id="schemagrpcrouterouteaction"></a>
<a id="schema_GrpcRouteRouteAction"></a>
<a id="tocSgrpcrouterouteaction"></a>
<a id="tocsgrpcrouterouteaction"></a>

```json
{
  "destinations": [
    {
      "serviceName": "string",
      "weight": 0
    }
  ],
  "faultInjectionPolicy": {
    "abort": {
      "httpStatus": 0,
      "percentage": 0
    },
    "delay": {
      "fixedDelay": "string",
      "percentage": 0
    }
  },
  "retryPolicy": {
    "numRetries": 0,
    "retryConditions": [
      "string"
    ]
  },
  "timeout": "string"
}
```

Specifies how to route matched traffic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinations|[[GrpcRouteDestination](#schemagrpcroutedestination)]|false|none|Optional. The destination services to which traffic should be forwarded. If multiple destinations are specified, traffic will be split between Backend Service(s) according to the weight field of these destinations.|
|faultInjectionPolicy|[GrpcRouteFaultInjectionPolicy](#schemagrpcroutefaultinjectionpolicy)|false|none|Optional. The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced on a percentage of requests before sending those requests to the destination service. Similarly requests from clients can be aborted by for a percentage of requests. timeout and retry_policy will be ignored by clients that are configured with a fault_injection_policy|
|retryPolicy|[GrpcRouteRetryPolicy](#schemagrpcrouteretrypolicy)|false|none|Optional. Specifies the retry policy associated with this route.|
|timeout|string(google-duration)|false|none|Optional. Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries.|

<h2 id="tocS_GrpcRouteRouteMatch">GrpcRouteRouteMatch</h2>
<!-- backwards compatibility -->
<a id="schemagrpcrouteroutematch"></a>
<a id="schema_GrpcRouteRouteMatch"></a>
<a id="tocSgrpcrouteroutematch"></a>
<a id="tocsgrpcrouteroutematch"></a>

```json
{
  "headers": [
    {
      "key": "string",
      "type": "TYPE_UNSPECIFIED",
      "value": "string"
    }
  ],
  "method": {
    "caseSensitive": true,
    "grpcMethod": "string",
    "grpcService": "string",
    "type": "TYPE_UNSPECIFIED"
  }
}
```

Criteria for matching traffic. A RouteMatch will be considered to match when all supplied fields match.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|[[GrpcRouteHeaderMatch](#schemagrpcrouteheadermatch)]|false|none|Optional. Specifies a collection of headers to match.|
|method|[GrpcRouteMethodMatch](#schemagrpcroutemethodmatch)|false|none|Optional. A gRPC method to match against. If this field is empty or omitted, will match all methods.|

<h2 id="tocS_GrpcRouteRouteRule">GrpcRouteRouteRule</h2>
<!-- backwards compatibility -->
<a id="schemagrpcrouterouterule"></a>
<a id="schema_GrpcRouteRouteRule"></a>
<a id="tocSgrpcrouterouterule"></a>
<a id="tocsgrpcrouterouterule"></a>

```json
{
  "action": {
    "destinations": [
      {
        "serviceName": "string",
        "weight": 0
      }
    ],
    "faultInjectionPolicy": {
      "abort": {
        "httpStatus": 0,
        "percentage": 0
      },
      "delay": {
        "fixedDelay": "string",
        "percentage": 0
      }
    },
    "retryPolicy": {
      "numRetries": 0,
      "retryConditions": [
        "string"
      ]
    },
    "timeout": "string"
  },
  "matches": [
    {
      "headers": [
        {
          "key": "string",
          "type": "TYPE_UNSPECIFIED",
          "value": "string"
        }
      ],
      "method": {
        "caseSensitive": true,
        "grpcMethod": "string",
        "grpcService": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    }
  ]
}
```

Describes how to route traffic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[GrpcRouteRouteAction](#schemagrpcrouterouteaction)|false|none|Required. A detailed rule defining how to route traffic. This field is required.|
|matches|[[GrpcRouteRouteMatch](#schemagrpcrouteroutematch)]|false|none|Optional. Matches define conditions used for matching the rule against incoming gRPC requests. Each match is independent, i.e. this rule will be matched if ANY one of the matches is satisfied. If no matches field is specified, this rule will unconditionally match traffic.|

<h2 id="tocS_HttpRoute">HttpRoute</h2>
<!-- backwards compatibility -->
<a id="schemahttproute"></a>
<a id="schema_HttpRoute"></a>
<a id="tocShttproute"></a>
<a id="tocshttproute"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "gateways": [
    "string"
  ],
  "hostnames": [
    "string"
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "meshes": [
    "string"
  ],
  "name": "string",
  "rules": [
    {
      "action": {
        "corsPolicy": {
          "allowCredentials": true,
          "allowHeaders": [
            "string"
          ],
          "allowMethods": [
            "string"
          ],
          "allowOriginRegexes": [
            "string"
          ],
          "allowOrigins": [
            "string"
          ],
          "disabled": true,
          "exposeHeaders": [
            "string"
          ],
          "maxAge": "string"
        },
        "destinations": [
          {
            "serviceName": "string",
            "weight": 0
          }
        ],
        "faultInjectionPolicy": {
          "abort": {
            "httpStatus": 0,
            "percentage": 0
          },
          "delay": {
            "fixedDelay": "string",
            "percentage": 0
          }
        },
        "redirect": {
          "hostRedirect": "string",
          "httpsRedirect": true,
          "pathRedirect": "string",
          "portRedirect": 0,
          "prefixRewrite": "string",
          "responseCode": "RESPONSE_CODE_UNSPECIFIED",
          "stripQuery": true
        },
        "requestHeaderModifier": {
          "add": {
            "property1": "string",
            "property2": "string"
          },
          "remove": [
            "string"
          ],
          "set": {
            "property1": "string",
            "property2": "string"
          }
        },
        "requestMirrorPolicy": {
          "destination": {
            "serviceName": "string",
            "weight": 0
          }
        },
        "responseHeaderModifier": {
          "add": {
            "property1": "string",
            "property2": "string"
          },
          "remove": [
            "string"
          ],
          "set": {
            "property1": "string",
            "property2": "string"
          }
        },
        "retryPolicy": {
          "numRetries": 0,
          "perTryTimeout": "string",
          "retryConditions": [
            "string"
          ]
        },
        "timeout": "string",
        "urlRewrite": {
          "hostRewrite": "string",
          "pathPrefixRewrite": "string"
        }
      },
      "matches": [
        {
          "fullPathMatch": "string",
          "headers": [
            {
              "exactMatch": "string",
              "header": "string",
              "invertMatch": true,
              "prefixMatch": "string",
              "presentMatch": true,
              "rangeMatch": {
                "end": 0,
                "start": 0
              },
              "regexMatch": "string",
              "suffixMatch": "string"
            }
          ],
          "ignoreCase": true,
          "prefixMatch": "string",
          "queryParameters": [
            {
              "exactMatch": "string",
              "presentMatch": true,
              "queryParameter": "string",
              "regexMatch": "string"
            }
          ],
          "regexMatch": "string"
        }
      ]
    }
  ],
  "selfLink": "string",
  "updateTime": "string"
}
```

HttpRoute is the resource defining how HTTP traffic should be routed by a Mesh or Gateway resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was created.|
|description|string|false|none|Optional. A free-text description of the resource. Max length 1024 characters.|
|gateways|[string]|false|none|Optional. Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/*/locations/global/gateways/`|
|hostnames|[string]|false|none|Required. Hostnames define a set of hosts that should match against the HTTP host header to select a HttpRoute to process the request. Hostname is the fully qualified domain name of a network host, as defined by RFC 1123 with the exception that: - IPs are not allowed. - A hostname may be prefixed with a wildcard label (*.). The wildcard label must appear by itself as the first label. Hostname can be "precise" which is a domain name without the terminating dot of a network host (e.g. "foo.example.com") or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. *.example.com). Note that as per RFC1035 and RFC1123, a label must consist of lower case alphanumeric characters or '-', and must start and end with an alphanumeric character. No other punctuation is allowed. The routes associated with a Mesh or Gateways must have unique hostnames. If you attempt to attach multiple routes with conflicting hostnames, the configuration will be rejected. For example, while it is acceptable for routes for the hostnames "*.foo.bar.com" and "*.bar.com" to be associated with the same Mesh (or Gateways under the same scope), it is not possible to associate two routes both with "*.bar.com" or both with "bar.com".|
|labels|object|false|none|Optional. Set of label tags associated with the HttpRoute resource.|
|meshes|[string]|false|none|Optional. Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/*/locations/global/meshes/` The attached Mesh should be of a type SIDECAR|
|name|string|false|none|Required. Name of the HttpRoute resource. It matches pattern `projects/*/locations/global/httpRoutes/http_route_name>`.|
|rules|[[HttpRouteRouteRule](#schemahttprouterouterule)]|false|none|Required. Rules that define how traffic is routed and handled. Rules will be matched sequentially based on the RouteMatch specified for the rule.|
|selfLink|string|false|read-only|Output only. Server-defined URL of this resource|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was updated.|

<h2 id="tocS_HttpRouteCorsPolicy">HttpRouteCorsPolicy</h2>
<!-- backwards compatibility -->
<a id="schemahttproutecorspolicy"></a>
<a id="schema_HttpRouteCorsPolicy"></a>
<a id="tocShttproutecorspolicy"></a>
<a id="tocshttproutecorspolicy"></a>

```json
{
  "allowCredentials": true,
  "allowHeaders": [
    "string"
  ],
  "allowMethods": [
    "string"
  ],
  "allowOriginRegexes": [
    "string"
  ],
  "allowOrigins": [
    "string"
  ],
  "disabled": true,
  "exposeHeaders": [
    "string"
  ],
  "maxAge": "string"
}
```

The Specification for allowing client side cross-origin requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowCredentials|boolean|false|none|In response to a preflight request, setting this to true indicates that the actual request can include user credentials. This translates to the Access-Control-Allow-Credentials header. Default value is false.|
|allowHeaders|[string]|false|none|Specifies the content for Access-Control-Allow-Headers header.|
|allowMethods|[string]|false|none|Specifies the content for Access-Control-Allow-Methods header.|
|allowOriginRegexes|[string]|false|none|Specifies the regular expression patterns that match allowed origins. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax.|
|allowOrigins|[string]|false|none|Specifies the list of origins that will be allowed to do CORS requests. An origin is allowed if it matches either an item in allow_origins or an item in allow_origin_regexes.|
|disabled|boolean|false|none|If true, the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.|
|exposeHeaders|[string]|false|none|Specifies the content for Access-Control-Expose-Headers header.|
|maxAge|string|false|none|Specifies how long result of a preflight request can be cached in seconds. This translates to the Access-Control-Max-Age header.|

<h2 id="tocS_HttpRouteDestination">HttpRouteDestination</h2>
<!-- backwards compatibility -->
<a id="schemahttproutedestination"></a>
<a id="schema_HttpRouteDestination"></a>
<a id="tocShttproutedestination"></a>
<a id="tocshttproutedestination"></a>

```json
{
  "serviceName": "string",
  "weight": 0
}
```

Specifications of a destination to which the request should be routed to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|string|false|none|The URL of a BackendService to route traffic to.|
|weight|integer(int32)|false|none|Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.|

<h2 id="tocS_HttpRouteFaultInjectionPolicy">HttpRouteFaultInjectionPolicy</h2>
<!-- backwards compatibility -->
<a id="schemahttproutefaultinjectionpolicy"></a>
<a id="schema_HttpRouteFaultInjectionPolicy"></a>
<a id="tocShttproutefaultinjectionpolicy"></a>
<a id="tocshttproutefaultinjectionpolicy"></a>

```json
{
  "abort": {
    "httpStatus": 0,
    "percentage": 0
  },
  "delay": {
    "fixedDelay": "string",
    "percentage": 0
  }
}
```

The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced by client proxy on a percentage of requests before sending those requests to the destination service. Similarly requests can be aborted by client proxy for a percentage of requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abort|[HttpRouteFaultInjectionPolicyAbort](#schemahttproutefaultinjectionpolicyabort)|false|none|The specification for aborting to client requests.|
|delay|[HttpRouteFaultInjectionPolicyDelay](#schemahttproutefaultinjectionpolicydelay)|false|none|The specification for injecting delay to client requests.|

<h2 id="tocS_HttpRouteFaultInjectionPolicyAbort">HttpRouteFaultInjectionPolicyAbort</h2>
<!-- backwards compatibility -->
<a id="schemahttproutefaultinjectionpolicyabort"></a>
<a id="schema_HttpRouteFaultInjectionPolicyAbort"></a>
<a id="tocShttproutefaultinjectionpolicyabort"></a>
<a id="tocshttproutefaultinjectionpolicyabort"></a>

```json
{
  "httpStatus": 0,
  "percentage": 0
}
```

Specification of how client requests are aborted as part of fault injection before being sent to a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|httpStatus|integer(int32)|false|none|The HTTP status code used to abort the request. The value must be between 200 and 599 inclusive.|
|percentage|integer(int32)|false|none|The percentage of traffic which will be aborted. The value must be between [0, 100]|

<h2 id="tocS_HttpRouteFaultInjectionPolicyDelay">HttpRouteFaultInjectionPolicyDelay</h2>
<!-- backwards compatibility -->
<a id="schemahttproutefaultinjectionpolicydelay"></a>
<a id="schema_HttpRouteFaultInjectionPolicyDelay"></a>
<a id="tocShttproutefaultinjectionpolicydelay"></a>
<a id="tocshttproutefaultinjectionpolicydelay"></a>

```json
{
  "fixedDelay": "string",
  "percentage": 0
}
```

Specification of how client requests are delayed as part of fault injection before being sent to a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fixedDelay|string(google-duration)|false|none|Specify a fixed delay before forwarding the request.|
|percentage|integer(int32)|false|none|The percentage of traffic on which delay will be injected. The value must be between [0, 100]|

<h2 id="tocS_HttpRouteHeaderMatch">HttpRouteHeaderMatch</h2>
<!-- backwards compatibility -->
<a id="schemahttprouteheadermatch"></a>
<a id="schema_HttpRouteHeaderMatch"></a>
<a id="tocShttprouteheadermatch"></a>
<a id="tocshttprouteheadermatch"></a>

```json
{
  "exactMatch": "string",
  "header": "string",
  "invertMatch": true,
  "prefixMatch": "string",
  "presentMatch": true,
  "rangeMatch": {
    "end": 0,
    "start": 0
  },
  "regexMatch": "string",
  "suffixMatch": "string"
}
```

Specifies how to select a route rule based on HTTP request headers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exactMatch|string|false|none|The value of the header should match exactly the content of exact_match.|
|header|string|false|none|The name of the HTTP header to match against.|
|invertMatch|boolean|false|none|If specified, the match result will be inverted before checking. Default value is set to false.|
|prefixMatch|string|false|none|The value of the header must start with the contents of prefix_match.|
|presentMatch|boolean|false|none|A header with header_name must exist. The match takes place whether or not the header has a value.|
|rangeMatch|[HttpRouteHeaderMatchIntegerRange](#schemahttprouteheadermatchintegerrange)|false|none|If specified, the rule will match if the request header value is within the range.|
|regexMatch|string|false|none|The value of the header must match the regular expression specified in regex_match. For regular expression grammar, please see: https://github.com/google/re2/wiki/Syntax|
|suffixMatch|string|false|none|The value of the header must end with the contents of suffix_match.|

<h2 id="tocS_HttpRouteHeaderMatchIntegerRange">HttpRouteHeaderMatchIntegerRange</h2>
<!-- backwards compatibility -->
<a id="schemahttprouteheadermatchintegerrange"></a>
<a id="schema_HttpRouteHeaderMatchIntegerRange"></a>
<a id="tocShttprouteheadermatchintegerrange"></a>
<a id="tocshttprouteheadermatchintegerrange"></a>

```json
{
  "end": 0,
  "start": 0
}
```

Represents an integer value range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|integer(int32)|false|none|End of the range (exclusive)|
|start|integer(int32)|false|none|Start of the range (inclusive)|

<h2 id="tocS_HttpRouteHeaderModifier">HttpRouteHeaderModifier</h2>
<!-- backwards compatibility -->
<a id="schemahttprouteheadermodifier"></a>
<a id="schema_HttpRouteHeaderModifier"></a>
<a id="tocShttprouteheadermodifier"></a>
<a id="tocshttprouteheadermodifier"></a>

```json
{
  "add": {
    "property1": "string",
    "property2": "string"
  },
  "remove": [
    "string"
  ],
  "set": {
    "property1": "string",
    "property2": "string"
  }
}
```

The specification for modifying HTTP header in HTTP request and HTTP response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add|object|false|none|Add the headers with given map where key is the name of the header, value is the value of the header.|
|remove|[string]|false|none|Remove headers (matching by header names) specified in the list.|
|set|object|false|none|Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.|

<h2 id="tocS_HttpRouteQueryParameterMatch">HttpRouteQueryParameterMatch</h2>
<!-- backwards compatibility -->
<a id="schemahttproutequeryparametermatch"></a>
<a id="schema_HttpRouteQueryParameterMatch"></a>
<a id="tocShttproutequeryparametermatch"></a>
<a id="tocshttproutequeryparametermatch"></a>

```json
{
  "exactMatch": "string",
  "presentMatch": true,
  "queryParameter": "string",
  "regexMatch": "string"
}
```

Specifications to match a query parameter in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exactMatch|string|false|none|The value of the query parameter must exactly match the contents of exact_match. Only one of exact_match, regex_match, or present_match must be set.|
|presentMatch|boolean|false|none|Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not. Only one of exact_match, regex_match, or present_match must be set.|
|queryParameter|string|false|none|The name of the query parameter to match.|
|regexMatch|string|false|none|The value of the query parameter must match the regular expression specified by regex_match. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax Only one of exact_match, regex_match, or present_match must be set.|

<h2 id="tocS_HttpRouteRedirect">HttpRouteRedirect</h2>
<!-- backwards compatibility -->
<a id="schemahttprouteredirect"></a>
<a id="schema_HttpRouteRedirect"></a>
<a id="tocShttprouteredirect"></a>
<a id="tocshttprouteredirect"></a>

```json
{
  "hostRedirect": "string",
  "httpsRedirect": true,
  "pathRedirect": "string",
  "portRedirect": 0,
  "prefixRewrite": "string",
  "responseCode": "RESPONSE_CODE_UNSPECIFIED",
  "stripQuery": true
}
```

The specification for redirecting traffic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostRedirect|string|false|none|The host that will be used in the redirect response instead of the one that was supplied in the request.|
|httpsRedirect|boolean|false|none|If set to true, the URL scheme in the redirected request is set to https. If set to false, the URL scheme of the redirected request will remain the same as that of the request. The default is set to false.|
|pathRedirect|string|false|none|The path that will be used in the redirect response instead of the one that was supplied in the request. path_redirect can not be supplied together with prefix_redirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.|
|portRedirect|integer(int32)|false|none|The port that will be used in the redirected request instead of the one that was supplied in the request.|
|prefixRewrite|string|false|none|Indicates that during redirection, the matched prefix (or path) should be swapped with this value. This option allows URLs be dynamically created based on the request.|
|responseCode|string|false|none|The HTTP Status code to use for the redirect.|
|stripQuery|boolean|false|none|if set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. If set to false, the query portion of the original URL is retained. The default is set to false.|

#### Enumerated Values

|Property|Value|
|---|---|
|responseCode|RESPONSE_CODE_UNSPECIFIED|
|responseCode|MOVED_PERMANENTLY_DEFAULT|
|responseCode|FOUND|
|responseCode|SEE_OTHER|
|responseCode|TEMPORARY_REDIRECT|
|responseCode|PERMANENT_REDIRECT|

<h2 id="tocS_HttpRouteRequestMirrorPolicy">HttpRouteRequestMirrorPolicy</h2>
<!-- backwards compatibility -->
<a id="schemahttprouterequestmirrorpolicy"></a>
<a id="schema_HttpRouteRequestMirrorPolicy"></a>
<a id="tocShttprouterequestmirrorpolicy"></a>
<a id="tocshttprouterequestmirrorpolicy"></a>

```json
{
  "destination": {
    "serviceName": "string",
    "weight": 0
  }
}
```

Specifies the policy on how requests are shadowed to a separate mirrored destination service. The proxy does not wait for responses from the shadow service. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|[HttpRouteDestination](#schemahttproutedestination)|false|none|The destination the requests will be mirrored to. The weight of the destination will be ignored.|

<h2 id="tocS_HttpRouteRetryPolicy">HttpRouteRetryPolicy</h2>
<!-- backwards compatibility -->
<a id="schemahttprouteretrypolicy"></a>
<a id="schema_HttpRouteRetryPolicy"></a>
<a id="tocShttprouteretrypolicy"></a>
<a id="tocshttprouteretrypolicy"></a>

```json
{
  "numRetries": 0,
  "perTryTimeout": "string",
  "retryConditions": [
    "string"
  ]
}
```

The specifications for retries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numRetries|integer(int32)|false|none|Specifies the allowed number of retries. This number must be > 0. If not specified, default to 1.|
|perTryTimeout|string(google-duration)|false|none|Specifies a non-zero timeout per retry attempt.|
|retryConditions|[string]|false|none|Specifies one or more conditions when this retry policy applies. Valid values are: 5xx: Proxy will attempt a retry if the destination service responds with any 5xx response code, of if the destination service does not respond at all, example: disconnect, reset, read timeout, connection failure and refused streams. gateway-error: Similar to 5xx, but only applies to response codes 502, 503, 504. reset: Proxy will attempt a retry if the destination service does not respond at all (disconnect/reset/read timeout) connect-failure: Proxy will retry on failures connecting to destination for example due to connection timeouts. retriable-4xx: Proxy will retry fro retriable 4xx response codes. Currently the only retriable error supported is 409. refused-stream: Proxy will retry if the destination resets the stream with a REFUSED_STREAM error code. This reset type indicates that it is safe to retry.|

<h2 id="tocS_HttpRouteRouteAction">HttpRouteRouteAction</h2>
<!-- backwards compatibility -->
<a id="schemahttprouterouteaction"></a>
<a id="schema_HttpRouteRouteAction"></a>
<a id="tocShttprouterouteaction"></a>
<a id="tocshttprouterouteaction"></a>

```json
{
  "corsPolicy": {
    "allowCredentials": true,
    "allowHeaders": [
      "string"
    ],
    "allowMethods": [
      "string"
    ],
    "allowOriginRegexes": [
      "string"
    ],
    "allowOrigins": [
      "string"
    ],
    "disabled": true,
    "exposeHeaders": [
      "string"
    ],
    "maxAge": "string"
  },
  "destinations": [
    {
      "serviceName": "string",
      "weight": 0
    }
  ],
  "faultInjectionPolicy": {
    "abort": {
      "httpStatus": 0,
      "percentage": 0
    },
    "delay": {
      "fixedDelay": "string",
      "percentage": 0
    }
  },
  "redirect": {
    "hostRedirect": "string",
    "httpsRedirect": true,
    "pathRedirect": "string",
    "portRedirect": 0,
    "prefixRewrite": "string",
    "responseCode": "RESPONSE_CODE_UNSPECIFIED",
    "stripQuery": true
  },
  "requestHeaderModifier": {
    "add": {
      "property1": "string",
      "property2": "string"
    },
    "remove": [
      "string"
    ],
    "set": {
      "property1": "string",
      "property2": "string"
    }
  },
  "requestMirrorPolicy": {
    "destination": {
      "serviceName": "string",
      "weight": 0
    }
  },
  "responseHeaderModifier": {
    "add": {
      "property1": "string",
      "property2": "string"
    },
    "remove": [
      "string"
    ],
    "set": {
      "property1": "string",
      "property2": "string"
    }
  },
  "retryPolicy": {
    "numRetries": 0,
    "perTryTimeout": "string",
    "retryConditions": [
      "string"
    ]
  },
  "timeout": "string",
  "urlRewrite": {
    "hostRewrite": "string",
    "pathPrefixRewrite": "string"
  }
}
```

The specifications for routing traffic and applying associated policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corsPolicy|[HttpRouteCorsPolicy](#schemahttproutecorspolicy)|false|none|The specification for allowing client side cross-origin requests.|
|destinations|[[HttpRouteDestination](#schemahttproutedestination)]|false|none|The destination to which traffic should be forwarded.|
|faultInjectionPolicy|[HttpRouteFaultInjectionPolicy](#schemahttproutefaultinjectionpolicy)|false|none|The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure. As part of fault injection, when clients send requests to a backend service, delays can be introduced on a percentage of requests before sending those requests to the backend service. Similarly requests from clients can be aborted for a percentage of requests. timeout and retry_policy will be ignored by clients that are configured with a fault_injection_policy|
|redirect|[HttpRouteRedirect](#schemahttprouteredirect)|false|none|If set, the request is directed as configured by this field.|
|requestHeaderModifier|[HttpRouteHeaderModifier](#schemahttprouteheadermodifier)|false|none|The specification for modifying the headers of a matching request prior to delivery of the request to the destination.|
|requestMirrorPolicy|[HttpRouteRequestMirrorPolicy](#schemahttprouterequestmirrorpolicy)|false|none|Specifies the policy on how requests intended for the routes destination are shadowed to a separate mirrored destination. Proxy will not wait for the shadow destination to respond before returning the response. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow.|
|responseHeaderModifier|[HttpRouteHeaderModifier](#schemahttprouteheadermodifier)|false|none|The specification for modifying the headers of a response prior to sending the response back to the client.|
|retryPolicy|[HttpRouteRetryPolicy](#schemahttprouteretrypolicy)|false|none|Specifies the retry policy associated with this route.|
|timeout|string(google-duration)|false|none|Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries.|
|urlRewrite|[HttpRouteURLRewrite](#schemahttprouteurlrewrite)|false|none|The specification for rewrite URL before forwarding requests to the destination.|

<h2 id="tocS_HttpRouteRouteMatch">HttpRouteRouteMatch</h2>
<!-- backwards compatibility -->
<a id="schemahttprouteroutematch"></a>
<a id="schema_HttpRouteRouteMatch"></a>
<a id="tocShttprouteroutematch"></a>
<a id="tocshttprouteroutematch"></a>

```json
{
  "fullPathMatch": "string",
  "headers": [
    {
      "exactMatch": "string",
      "header": "string",
      "invertMatch": true,
      "prefixMatch": "string",
      "presentMatch": true,
      "rangeMatch": {
        "end": 0,
        "start": 0
      },
      "regexMatch": "string",
      "suffixMatch": "string"
    }
  ],
  "ignoreCase": true,
  "prefixMatch": "string",
  "queryParameters": [
    {
      "exactMatch": "string",
      "presentMatch": true,
      "queryParameter": "string",
      "regexMatch": "string"
    }
  ],
  "regexMatch": "string"
}
```

RouteMatch defines specifications used to match requests. If multiple match types are set, this RouteMatch will match if ALL type of matches are matched.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullPathMatch|string|false|none|The HTTP request path value should exactly match this value. Only one of full_path_match, prefix_match, or regex_match should be used.|
|headers|[[HttpRouteHeaderMatch](#schemahttprouteheadermatch)]|false|none|Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.|
|ignoreCase|boolean|false|none|Specifies if prefix_match and full_path_match matches are case sensitive. The default value is false.|
|prefixMatch|string|false|none|The HTTP request path value must begin with specified prefix_match. prefix_match must begin with a /. Only one of full_path_match, prefix_match, or regex_match should be used.|
|queryParameters|[[HttpRouteQueryParameterMatch](#schemahttproutequeryparametermatch)]|false|none|Specifies a list of query parameters to match against. ALL of the query parameters must be matched.|
|regexMatch|string|false|none|The HTTP request path value must satisfy the regular expression specified by regex_match after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax Only one of full_path_match, prefix_match, or regex_match should be used.|

<h2 id="tocS_HttpRouteRouteRule">HttpRouteRouteRule</h2>
<!-- backwards compatibility -->
<a id="schemahttprouterouterule"></a>
<a id="schema_HttpRouteRouteRule"></a>
<a id="tocShttprouterouterule"></a>
<a id="tocshttprouterouterule"></a>

```json
{
  "action": {
    "corsPolicy": {
      "allowCredentials": true,
      "allowHeaders": [
        "string"
      ],
      "allowMethods": [
        "string"
      ],
      "allowOriginRegexes": [
        "string"
      ],
      "allowOrigins": [
        "string"
      ],
      "disabled": true,
      "exposeHeaders": [
        "string"
      ],
      "maxAge": "string"
    },
    "destinations": [
      {
        "serviceName": "string",
        "weight": 0
      }
    ],
    "faultInjectionPolicy": {
      "abort": {
        "httpStatus": 0,
        "percentage": 0
      },
      "delay": {
        "fixedDelay": "string",
        "percentage": 0
      }
    },
    "redirect": {
      "hostRedirect": "string",
      "httpsRedirect": true,
      "pathRedirect": "string",
      "portRedirect": 0,
      "prefixRewrite": "string",
      "responseCode": "RESPONSE_CODE_UNSPECIFIED",
      "stripQuery": true
    },
    "requestHeaderModifier": {
      "add": {
        "property1": "string",
        "property2": "string"
      },
      "remove": [
        "string"
      ],
      "set": {
        "property1": "string",
        "property2": "string"
      }
    },
    "requestMirrorPolicy": {
      "destination": {
        "serviceName": "string",
        "weight": 0
      }
    },
    "responseHeaderModifier": {
      "add": {
        "property1": "string",
        "property2": "string"
      },
      "remove": [
        "string"
      ],
      "set": {
        "property1": "string",
        "property2": "string"
      }
    },
    "retryPolicy": {
      "numRetries": 0,
      "perTryTimeout": "string",
      "retryConditions": [
        "string"
      ]
    },
    "timeout": "string",
    "urlRewrite": {
      "hostRewrite": "string",
      "pathPrefixRewrite": "string"
    }
  },
  "matches": [
    {
      "fullPathMatch": "string",
      "headers": [
        {
          "exactMatch": "string",
          "header": "string",
          "invertMatch": true,
          "prefixMatch": "string",
          "presentMatch": true,
          "rangeMatch": {
            "end": 0,
            "start": 0
          },
          "regexMatch": "string",
          "suffixMatch": "string"
        }
      ],
      "ignoreCase": true,
      "prefixMatch": "string",
      "queryParameters": [
        {
          "exactMatch": "string",
          "presentMatch": true,
          "queryParameter": "string",
          "regexMatch": "string"
        }
      ],
      "regexMatch": "string"
    }
  ]
}
```

Specifies how to match traffic and how to route traffic when traffic is matched.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[HttpRouteRouteAction](#schemahttprouterouteaction)|false|none|The detailed rule defining how to route matched traffic.|
|matches|[[HttpRouteRouteMatch](#schemahttprouteroutematch)]|false|none|A list of matches define conditions used for matching the rule against incoming HTTP requests. Each match is independent, i.e. this rule will be matched if ANY one of the matches is satisfied. If no matches field is specified, this rule will unconditionally match traffic. If a default rule is desired to be configured, add a rule with no matches specified to the end of the rules list.|

<h2 id="tocS_HttpRouteURLRewrite">HttpRouteURLRewrite</h2>
<!-- backwards compatibility -->
<a id="schemahttprouteurlrewrite"></a>
<a id="schema_HttpRouteURLRewrite"></a>
<a id="tocShttprouteurlrewrite"></a>
<a id="tocshttprouteurlrewrite"></a>

```json
{
  "hostRewrite": "string",
  "pathPrefixRewrite": "string"
}
```

The specification for modifying the URL of the request, prior to forwarding the request to the destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostRewrite|string|false|none|Prior to forwarding the request to the selected destination, the requests host header is replaced by this value.|
|pathPrefixRewrite|string|false|none|Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value.|

<h2 id="tocS_ListEndpointPoliciesResponse">ListEndpointPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistendpointpoliciesresponse"></a>
<a id="schema_ListEndpointPoliciesResponse"></a>
<a id="tocSlistendpointpoliciesresponse"></a>
<a id="tocslistendpointpoliciesresponse"></a>

```json
{
  "endpointPolicies": [
    {
      "authorizationPolicy": "string",
      "clientTlsPolicy": "string",
      "createTime": "string",
      "description": "string",
      "endpointMatcher": {
        "metadataLabelMatcher": {
          "metadataLabelMatchCriteria": "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED",
          "metadataLabels": [
            {
              "labelName": "string",
              "labelValue": "string"
            }
          ]
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "serverTlsPolicy": "string",
      "trafficPortSelector": {
        "ports": [
          "string"
        ]
      },
      "type": "ENDPOINT_POLICY_TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response returned by the ListEndpointPolicies method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpointPolicies|[[EndpointPolicy](#schemaendpointpolicy)]|false|none|List of EndpointPolicy resources.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|

<h2 id="tocS_ListGatewaysResponse">ListGatewaysResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgatewaysresponse"></a>
<a id="schema_ListGatewaysResponse"></a>
<a id="tocSlistgatewaysresponse"></a>
<a id="tocslistgatewaysresponse"></a>

```json
{
  "gateways": [
    {
      "addresses": [
        "string"
      ],
      "certificateUrls": [
        "string"
      ],
      "createTime": "string",
      "description": "string",
      "gatewaySecurityPolicy": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "network": "string",
      "ports": [
        0
      ],
      "scope": "string",
      "selfLink": "string",
      "serverTlsPolicy": "string",
      "subnetwork": "string",
      "type": "TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response returned by the ListGateways method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gateways|[[Gateway](#schemagateway)]|false|none|List of Gateway resources.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|

<h2 id="tocS_ListGrpcRoutesResponse">ListGrpcRoutesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgrpcroutesresponse"></a>
<a id="schema_ListGrpcRoutesResponse"></a>
<a id="tocSlistgrpcroutesresponse"></a>
<a id="tocslistgrpcroutesresponse"></a>

```json
{
  "grpcRoutes": [
    {
      "createTime": "string",
      "description": "string",
      "gateways": [
        "string"
      ],
      "hostnames": [
        "string"
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "meshes": [
        "string"
      ],
      "name": "string",
      "rules": [
        {
          "action": {
            "destinations": [
              {
                "serviceName": "string",
                "weight": 0
              }
            ],
            "faultInjectionPolicy": {
              "abort": {
                "httpStatus": 0,
                "percentage": 0
              },
              "delay": {
                "fixedDelay": "string",
                "percentage": 0
              }
            },
            "retryPolicy": {
              "numRetries": 0,
              "retryConditions": [
                "string"
              ]
            },
            "timeout": "string"
          },
          "matches": [
            {
              "headers": [
                {
                  "key": "string",
                  "type": "TYPE_UNSPECIFIED",
                  "value": "string"
                }
              ],
              "method": {
                "caseSensitive": true,
                "grpcMethod": "string",
                "grpcService": "string",
                "type": "TYPE_UNSPECIFIED"
              }
            }
          ]
        }
      ],
      "selfLink": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response returned by the ListGrpcRoutes method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grpcRoutes|[[GrpcRoute](#schemagrpcroute)]|false|none|List of GrpcRoute resources.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|

<h2 id="tocS_ListHttpRoutesResponse">ListHttpRoutesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthttproutesresponse"></a>
<a id="schema_ListHttpRoutesResponse"></a>
<a id="tocSlisthttproutesresponse"></a>
<a id="tocslisthttproutesresponse"></a>

```json
{
  "httpRoutes": [
    {
      "createTime": "string",
      "description": "string",
      "gateways": [
        "string"
      ],
      "hostnames": [
        "string"
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "meshes": [
        "string"
      ],
      "name": "string",
      "rules": [
        {
          "action": {
            "corsPolicy": {
              "allowCredentials": true,
              "allowHeaders": [
                "string"
              ],
              "allowMethods": [
                "string"
              ],
              "allowOriginRegexes": [
                "string"
              ],
              "allowOrigins": [
                "string"
              ],
              "disabled": true,
              "exposeHeaders": [
                "string"
              ],
              "maxAge": "string"
            },
            "destinations": [
              {
                "serviceName": "string",
                "weight": 0
              }
            ],
            "faultInjectionPolicy": {
              "abort": {
                "httpStatus": 0,
                "percentage": 0
              },
              "delay": {
                "fixedDelay": "string",
                "percentage": 0
              }
            },
            "redirect": {
              "hostRedirect": "string",
              "httpsRedirect": true,
              "pathRedirect": "string",
              "portRedirect": 0,
              "prefixRewrite": "string",
              "responseCode": "RESPONSE_CODE_UNSPECIFIED",
              "stripQuery": true
            },
            "requestHeaderModifier": {
              "add": {
                "property1": "string",
                "property2": "string"
              },
              "remove": [
                "string"
              ],
              "set": {
                "property1": "string",
                "property2": "string"
              }
            },
            "requestMirrorPolicy": {
              "destination": {
                "serviceName": "string",
                "weight": 0
              }
            },
            "responseHeaderModifier": {
              "add": {
                "property1": "string",
                "property2": "string"
              },
              "remove": [
                "string"
              ],
              "set": {
                "property1": "string",
                "property2": "string"
              }
            },
            "retryPolicy": {
              "numRetries": 0,
              "perTryTimeout": "string",
              "retryConditions": [
                "string"
              ]
            },
            "timeout": "string",
            "urlRewrite": {
              "hostRewrite": "string",
              "pathPrefixRewrite": "string"
            }
          },
          "matches": [
            {
              "fullPathMatch": "string",
              "headers": [
                {
                  "exactMatch": "string",
                  "header": "string",
                  "invertMatch": true,
                  "prefixMatch": "string",
                  "presentMatch": true,
                  "rangeMatch": {
                    "end": 0,
                    "start": 0
                  },
                  "regexMatch": "string",
                  "suffixMatch": "string"
                }
              ],
              "ignoreCase": true,
              "prefixMatch": "string",
              "queryParameters": [
                {
                  "exactMatch": "string",
                  "presentMatch": true,
                  "queryParameter": "string",
                  "regexMatch": "string"
                }
              ],
              "regexMatch": "string"
            }
          ]
        }
      ],
      "selfLink": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response returned by the ListHttpRoutes method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|httpRoutes|[[HttpRoute](#schemahttproute)]|false|none|List of HttpRoute resources.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|

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

<h2 id="tocS_ListMeshesResponse">ListMeshesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmeshesresponse"></a>
<a id="schema_ListMeshesResponse"></a>
<a id="tocSlistmeshesresponse"></a>
<a id="tocslistmeshesresponse"></a>

```json
{
  "meshes": [
    {
      "createTime": "string",
      "description": "string",
      "interceptionPort": 0,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "selfLink": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response returned by the ListMeshes method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meshes|[[Mesh](#schemamesh)]|false|none|List of Mesh resources.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|

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

<h2 id="tocS_ListServiceBindingsResponse">ListServiceBindingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistservicebindingsresponse"></a>
<a id="schema_ListServiceBindingsResponse"></a>
<a id="tocSlistservicebindingsresponse"></a>
<a id="tocslistservicebindingsresponse"></a>

```json
{
  "nextPageToken": "string",
  "serviceBindings": [
    {
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "service": "string",
      "updateTime": "string"
    }
  ]
}
```

Response returned by the ListServiceBindings method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|
|serviceBindings|[[ServiceBinding](#schemaservicebinding)]|false|none|List of ServiceBinding resources.|

<h2 id="tocS_ListTcpRoutesResponse">ListTcpRoutesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttcproutesresponse"></a>
<a id="schema_ListTcpRoutesResponse"></a>
<a id="tocSlisttcproutesresponse"></a>
<a id="tocslisttcproutesresponse"></a>

```json
{
  "nextPageToken": "string",
  "tcpRoutes": [
    {
      "createTime": "string",
      "description": "string",
      "gateways": [
        "string"
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "meshes": [
        "string"
      ],
      "name": "string",
      "rules": [
        {
          "action": {
            "destinations": [
              {
                "serviceName": "string",
                "weight": 0
              }
            ],
            "originalDestination": true
          },
          "matches": [
            {
              "address": "string",
              "port": "string"
            }
          ]
        }
      ],
      "selfLink": "string",
      "updateTime": "string"
    }
  ]
}
```

Response returned by the ListTcpRoutes method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|
|tcpRoutes|[[TcpRoute](#schematcproute)]|false|none|List of TcpRoute resources.|

<h2 id="tocS_ListTlsRoutesResponse">ListTlsRoutesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttlsroutesresponse"></a>
<a id="schema_ListTlsRoutesResponse"></a>
<a id="tocSlisttlsroutesresponse"></a>
<a id="tocslisttlsroutesresponse"></a>

```json
{
  "nextPageToken": "string",
  "tlsRoutes": [
    {
      "createTime": "string",
      "description": "string",
      "gateways": [
        "string"
      ],
      "meshes": [
        "string"
      ],
      "name": "string",
      "rules": [
        {
          "action": {
            "destinations": [
              {
                "serviceName": "string",
                "weight": 0
              }
            ]
          },
          "matches": [
            {
              "alpn": [
                "string"
              ],
              "sniHost": [
                "string"
              ]
            }
          ]
        }
      ],
      "selfLink": "string",
      "updateTime": "string"
    }
  ]
}
```

Response returned by the ListTlsRoutes method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|
|tlsRoutes|[[TlsRoute](#schematlsroute)]|false|none|List of TlsRoute resources.|

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

<h2 id="tocS_Mesh">Mesh</h2>
<!-- backwards compatibility -->
<a id="schemamesh"></a>
<a id="schema_Mesh"></a>
<a id="tocSmesh"></a>
<a id="tocsmesh"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "interceptionPort": 0,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "selfLink": "string",
  "updateTime": "string"
}
```

Mesh represents a logical configuration grouping for workload to workload communication within a service mesh. Routes that point to mesh dictate how requests are routed within this logical mesh boundary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was created.|
|description|string|false|none|Optional. A free-text description of the resource. Max length 1024 characters.|
|interceptionPort|integer(int32)|false|none|Optional. If set to a valid TCP port (1-65535), instructs the SIDECAR proxy to listen on the specified port of localhost (127.0.0.1) address. The SIDECAR proxy will expect all traffic to be redirected to this port regardless of its actual ip:port destination. If unset, a port '15001' is used as the interception port. This will is applicable only for sidecar proxy deployments.|
|labels|object|false|none|Optional. Set of label tags associated with the Mesh resource.|
|name|string|false|none|Required. Name of the Mesh resource. It matches pattern `projects/*/locations/global/meshes/`.|
|selfLink|string|false|read-only|Output only. Server-defined URL of this resource|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was updated.|

<h2 id="tocS_MetadataLabelMatcher">MetadataLabelMatcher</h2>
<!-- backwards compatibility -->
<a id="schemametadatalabelmatcher"></a>
<a id="schema_MetadataLabelMatcher"></a>
<a id="tocSmetadatalabelmatcher"></a>
<a id="tocsmetadatalabelmatcher"></a>

```json
{
  "metadataLabelMatchCriteria": "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED",
  "metadataLabels": [
    {
      "labelName": "string",
      "labelValue": "string"
    }
  ]
}
```

The matcher that is based on node metadata presented by xDS clients.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadataLabelMatchCriteria|string|false|none|Specifies how matching should be done. Supported values are: MATCH_ANY: At least one of the Labels specified in the matcher should match the metadata presented by xDS client. MATCH_ALL: The metadata presented by the xDS client should contain all of the labels specified here. The selection is determined based on the best match. For example, suppose there are three EndpointPolicy resources P1, P2 and P3 and if P1 has a the matcher as MATCH_ANY , P2 has MATCH_ALL , and P3 has MATCH_ALL . If a client with label connects, the config from P1 will be selected. If a client with label connects, the config from P2 will be selected. If a client with label connects, the config from P3 will be selected. If there is more than one best match, (for example, if a config P4 with selector exists and if a client with label connects), an error will be thrown.|
|metadataLabels|[[MetadataLabels](#schemametadatalabels)]|false|none|The list of label value pairs that must match labels in the provided metadata based on filterMatchCriteria This list can have at most 64 entries. The list can be empty if the match criteria is MATCH_ANY, to specify a wildcard match (i.e this matches any client).|

#### Enumerated Values

|Property|Value|
|---|---|
|metadataLabelMatchCriteria|METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED|
|metadataLabelMatchCriteria|MATCH_ANY|
|metadataLabelMatchCriteria|MATCH_ALL|

<h2 id="tocS_MetadataLabels">MetadataLabels</h2>
<!-- backwards compatibility -->
<a id="schemametadatalabels"></a>
<a id="schema_MetadataLabels"></a>
<a id="tocSmetadatalabels"></a>
<a id="tocsmetadatalabels"></a>

```json
{
  "labelName": "string",
  "labelValue": "string"
}
```

Defines a name-pair value for a single label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelName|string|false|none|Required. Label name presented as key in xDS Node Metadata.|
|labelValue|string|false|none|Required. Label value presented as value corresponding to the above key, in xDS Node Metadata.|

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
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
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

<h2 id="tocS_ServiceBinding">ServiceBinding</h2>
<!-- backwards compatibility -->
<a id="schemaservicebinding"></a>
<a id="schema_ServiceBinding"></a>
<a id="tocSservicebinding"></a>
<a id="tocsservicebinding"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "service": "string",
  "updateTime": "string"
}
```

ServiceBinding is the resource that defines a Service Directory Service to be used in a BackendService resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was created.|
|description|string|false|none|Optional. A free-text description of the resource. Max length 1024 characters.|
|labels|object|false|none|Optional. Set of label tags associated with the ServiceBinding resource.|
|name|string|false|none|Required. Name of the ServiceBinding resource. It matches pattern `projects/*/locations/global/serviceBindings/service_binding_name`.|
|service|string|false|none|Required. The full Service Directory Service name of the format projects/*/locations/*/namespaces/*/services/*|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was updated.|

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

<h2 id="tocS_TcpRoute">TcpRoute</h2>
<!-- backwards compatibility -->
<a id="schematcproute"></a>
<a id="schema_TcpRoute"></a>
<a id="tocStcproute"></a>
<a id="tocstcproute"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "gateways": [
    "string"
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "meshes": [
    "string"
  ],
  "name": "string",
  "rules": [
    {
      "action": {
        "destinations": [
          {
            "serviceName": "string",
            "weight": 0
          }
        ],
        "originalDestination": true
      },
      "matches": [
        {
          "address": "string",
          "port": "string"
        }
      ]
    }
  ],
  "selfLink": "string",
  "updateTime": "string"
}
```

TcpRoute is the resource defining how TCP traffic should be routed by a Mesh/Gateway resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was created.|
|description|string|false|none|Optional. A free-text description of the resource. Max length 1024 characters.|
|gateways|[string]|false|none|Optional. Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/*/locations/global/gateways/`|
|labels|object|false|none|Optional. Set of label tags associated with the TcpRoute resource.|
|meshes|[string]|false|none|Optional. Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/*/locations/global/meshes/` The attached Mesh should be of a type SIDECAR|
|name|string|false|none|Required. Name of the TcpRoute resource. It matches pattern `projects/*/locations/global/tcpRoutes/tcp_route_name>`.|
|rules|[[TcpRouteRouteRule](#schematcprouterouterule)]|false|none|Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.|
|selfLink|string|false|read-only|Output only. Server-defined URL of this resource|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was updated.|

<h2 id="tocS_TcpRouteRouteAction">TcpRouteRouteAction</h2>
<!-- backwards compatibility -->
<a id="schematcprouterouteaction"></a>
<a id="schema_TcpRouteRouteAction"></a>
<a id="tocStcprouterouteaction"></a>
<a id="tocstcprouterouteaction"></a>

```json
{
  "destinations": [
    {
      "serviceName": "string",
      "weight": 0
    }
  ],
  "originalDestination": true
}
```

The specifications for routing traffic and applying associated policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinations|[[TcpRouteRouteDestination](#schematcprouteroutedestination)]|false|none|Optional. The destination services to which traffic should be forwarded. At least one destination service is required.|
|originalDestination|boolean|false|none|Optional. If true, Router will use the destination IP and port of the original connection as the destination of the request. Default is false.|

<h2 id="tocS_TcpRouteRouteDestination">TcpRouteRouteDestination</h2>
<!-- backwards compatibility -->
<a id="schematcprouteroutedestination"></a>
<a id="schema_TcpRouteRouteDestination"></a>
<a id="tocStcprouteroutedestination"></a>
<a id="tocstcprouteroutedestination"></a>

```json
{
  "serviceName": "string",
  "weight": 0
}
```

Describe the destination for traffic to be routed to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|string|false|none|Required. The URL of a BackendService to route traffic to.|
|weight|integer(int32)|false|none|Optional. Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.|

<h2 id="tocS_TcpRouteRouteMatch">TcpRouteRouteMatch</h2>
<!-- backwards compatibility -->
<a id="schematcprouteroutematch"></a>
<a id="schema_TcpRouteRouteMatch"></a>
<a id="tocStcprouteroutematch"></a>
<a id="tocstcprouteroutematch"></a>

```json
{
  "address": "string",
  "port": "string"
}
```

RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|Required. Must be specified in the CIDR range format. A CIDR range consists of an IP Address and a prefix length to construct the subnet mask. By default, the prefix length is 32 (i.e. matches a single IP address). Only IPV4 addresses are supported. Examples: "10.0.0.1" - matches against this exact IP address. "10.0.0.0/8" - matches against any IP address within the 10.0.0.0 subnet and 255.255.255.0 mask. "0.0.0.0/0" - matches against any IP address'.|
|port|string|false|none|Required. Specifies the destination port to match against.|

<h2 id="tocS_TcpRouteRouteRule">TcpRouteRouteRule</h2>
<!-- backwards compatibility -->
<a id="schematcprouterouterule"></a>
<a id="schema_TcpRouteRouteRule"></a>
<a id="tocStcprouterouterule"></a>
<a id="tocstcprouterouterule"></a>

```json
{
  "action": {
    "destinations": [
      {
        "serviceName": "string",
        "weight": 0
      }
    ],
    "originalDestination": true
  },
  "matches": [
    {
      "address": "string",
      "port": "string"
    }
  ]
}
```

Specifies how to match traffic and how to route traffic when traffic is matched.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[TcpRouteRouteAction](#schematcprouterouteaction)|false|none|Required. The detailed rule defining how to route matched traffic.|
|matches|[[TcpRouteRouteMatch](#schematcprouteroutematch)]|false|none|Optional. RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.|

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

<h2 id="tocS_TlsRoute">TlsRoute</h2>
<!-- backwards compatibility -->
<a id="schematlsroute"></a>
<a id="schema_TlsRoute"></a>
<a id="tocStlsroute"></a>
<a id="tocstlsroute"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "gateways": [
    "string"
  ],
  "meshes": [
    "string"
  ],
  "name": "string",
  "rules": [
    {
      "action": {
        "destinations": [
          {
            "serviceName": "string",
            "weight": 0
          }
        ]
      },
      "matches": [
        {
          "alpn": [
            "string"
          ],
          "sniHost": [
            "string"
          ]
        }
      ]
    }
  ],
  "selfLink": "string",
  "updateTime": "string"
}
```

TlsRoute defines how traffic should be routed based on SNI and other matching L3 attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was created.|
|description|string|false|none|Optional. A free-text description of the resource. Max length 1024 characters.|
|gateways|[string]|false|none|Optional. Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/*/locations/global/gateways/`|
|meshes|[string]|false|none|Optional. Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/*/locations/global/meshes/` The attached Mesh should be of a type SIDECAR|
|name|string|false|none|Required. Name of the TlsRoute resource. It matches pattern `projects/*/locations/global/tlsRoutes/tls_route_name>`.|
|rules|[[TlsRouteRouteRule](#schematlsrouterouterule)]|false|none|Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.|
|selfLink|string|false|read-only|Output only. Server-defined URL of this resource|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was updated.|

<h2 id="tocS_TlsRouteRouteAction">TlsRouteRouteAction</h2>
<!-- backwards compatibility -->
<a id="schematlsrouterouteaction"></a>
<a id="schema_TlsRouteRouteAction"></a>
<a id="tocStlsrouterouteaction"></a>
<a id="tocstlsrouterouteaction"></a>

```json
{
  "destinations": [
    {
      "serviceName": "string",
      "weight": 0
    }
  ]
}
```

The specifications for routing traffic and applying associated policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinations|[[TlsRouteRouteDestination](#schematlsrouteroutedestination)]|false|none|Required. The destination services to which traffic should be forwarded. At least one destination service is required.|

<h2 id="tocS_TlsRouteRouteDestination">TlsRouteRouteDestination</h2>
<!-- backwards compatibility -->
<a id="schematlsrouteroutedestination"></a>
<a id="schema_TlsRouteRouteDestination"></a>
<a id="tocStlsrouteroutedestination"></a>
<a id="tocstlsrouteroutedestination"></a>

```json
{
  "serviceName": "string",
  "weight": 0
}
```

Describe the destination for traffic to be routed to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|string|false|none|Required. The URL of a BackendService to route traffic to.|
|weight|integer(int32)|false|none|Optional. Specifies the proportion of requests forwareded to the backend referenced by the service_name field. This is computed as: weight/Sum(weights in destinations) Weights in all destinations does not need to sum up to 100.|

<h2 id="tocS_TlsRouteRouteMatch">TlsRouteRouteMatch</h2>
<!-- backwards compatibility -->
<a id="schematlsrouteroutematch"></a>
<a id="schema_TlsRouteRouteMatch"></a>
<a id="tocStlsrouteroutematch"></a>
<a id="tocstlsrouteroutematch"></a>

```json
{
  "alpn": [
    "string"
  ],
  "sniHost": [
    "string"
  ]
}
```

RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "AND"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alpn|[string]|false|none|Optional. ALPN (Application-Layer Protocol Negotiation) to match against. Examples: "http/1.1", "h2". At least one of sni_host and alpn is required. Up to 5 alpns across all matches can be set.|
|sniHost|[string]|false|none|Optional. SNI (server name indicator) to match against. SNI will be matched against all wildcard domains, i.e. www.example.com will be first matched against www.example.com, then *.example.com, then *.com. Partial wildcards are not supported, and values like *w.example.com are invalid. At least one of sni_host and alpn is required. Up to 5 sni hosts across all matches can be set.|

<h2 id="tocS_TlsRouteRouteRule">TlsRouteRouteRule</h2>
<!-- backwards compatibility -->
<a id="schematlsrouterouterule"></a>
<a id="schema_TlsRouteRouteRule"></a>
<a id="tocStlsrouterouterule"></a>
<a id="tocstlsrouterouterule"></a>

```json
{
  "action": {
    "destinations": [
      {
        "serviceName": "string",
        "weight": 0
      }
    ]
  },
  "matches": [
    {
      "alpn": [
        "string"
      ],
      "sniHost": [
        "string"
      ]
    }
  ]
}
```

Specifies how to match traffic and how to route traffic when traffic is matched.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[TlsRouteRouteAction](#schematlsrouterouteaction)|false|none|Required. The detailed rule defining how to route matched traffic.|
|matches|[[TlsRouteRouteMatch](#schematlsrouteroutematch)]|false|none|Required. RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation.|

<h2 id="tocS_TrafficPortSelector">TrafficPortSelector</h2>
<!-- backwards compatibility -->
<a id="schematrafficportselector"></a>
<a id="schema_TrafficPortSelector"></a>
<a id="tocStrafficportselector"></a>
<a id="tocstrafficportselector"></a>

```json
{
  "ports": [
    "string"
  ]
}
```

Specification of a port-based selector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ports|[string]|false|none|Optional. A list of ports. Can be port numbers or port range (example, [80-90] specifies all ports from 80 to 90, including 80 and 90) or named ports or * to specify all ports. If the list is empty, all ports are selected.|
