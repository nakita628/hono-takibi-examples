<h1 id="google-cloud-deploy-api">Google Cloud Deploy API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://clouddeploy.googleapis.com/">https://clouddeploy.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/deploy/">External documentation</a>

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

<h1 id="google-cloud-deploy-api-projects">projects</h1>

## clouddeploy.projects.locations.targets.get

<a id="opIdclouddeploy.projects.locations.targets.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets details of a single Target.

<h3 id="clouddeployprojectslocationstargetsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the `Target`. Format must be projects/{project_id}/locations/{location_name}/targets/{target_name}.|
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
  "anthosCluster": {
    "membership": "string"
  },
  "createTime": "string",
  "description": "string",
  "etag": "string",
  "executionConfigs": [
    {
      "artifactStorage": "string",
      "defaultPool": {
        "artifactStorage": "string",
        "serviceAccount": "string"
      },
      "executionTimeout": "string",
      "privatePool": {
        "artifactStorage": "string",
        "serviceAccount": "string",
        "workerPool": "string"
      },
      "serviceAccount": "string",
      "usages": [
        "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
      ],
      "workerPool": "string"
    }
  ],
  "gke": {
    "cluster": "string",
    "internalIp": true
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "multiTarget": {
    "targetIds": [
      "string"
    ]
  },
  "name": "string",
  "requireApproval": true,
  "run": {
    "location": "string"
  },
  "targetId": "string",
  "uid": "string",
  "updateTime": "string"
}
```

<h3 id="clouddeployprojectslocationstargetsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Target](#schematarget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.targets.delete

<a id="opIdclouddeploy.projects.locations.targets.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a single Target.

<h3 id="clouddeployprojectslocationstargetsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the `Target` to delete. Format should be projects/{project_id}/locations/{location_name}/targets/{target_name}.|
|allowMissing|query|boolean|false|Optional. If set to true, then deleting an already deleted or non-existing DeliveryPipeline will succeed.|
|etag|query|string|false|Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|requestId|query|string|false|Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|validateOnly|query|boolean|false|Optional. If set, validate the request and preview the review, but do not actually post it.|
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

<h3 id="clouddeployprojectslocationstargetsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.targets.patch

<a id="opIdclouddeploy.projects.locations.targets.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "anthosCluster": {
      "membership": "string"
    },
    "description": "string",
    "etag": "string",
    "executionConfigs": [
      {
        "artifactStorage": "string",
        "defaultPool": {
          "artifactStorage": "string",
          "serviceAccount": "string"
        },
        "executionTimeout": "string",
        "privatePool": {
          "artifactStorage": "string",
          "serviceAccount": "string",
          "workerPool": "string"
        },
        "serviceAccount": "string",
        "usages": [
          "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
        ],
        "workerPool": "string"
      }
    ],
    "gke": {
      "cluster": "string",
      "internalIp": true
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "multiTarget": {
      "targetIds": [
        "string"
      ]
    },
    "name": "string",
    "requireApproval": true,
    "run": {
      "location": "string"
    }
  }'
```

`PATCH /v1/{name}`

Updates the parameters of a single Target.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "anthosCluster": {
    "membership": "string"
  },
  "description": "string",
  "etag": "string",
  "executionConfigs": [
    {
      "artifactStorage": "string",
      "defaultPool": {
        "artifactStorage": "string",
        "serviceAccount": "string"
      },
      "executionTimeout": "string",
      "privatePool": {
        "artifactStorage": "string",
        "serviceAccount": "string",
        "workerPool": "string"
      },
      "serviceAccount": "string",
      "usages": [
        "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
      ],
      "workerPool": "string"
    }
  ],
  "gke": {
    "cluster": "string",
    "internalIp": true
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "multiTarget": {
    "targetIds": [
      "string"
    ]
  },
  "name": "string",
  "requireApproval": true,
  "run": {
    "location": "string"
  }
}
```

<h3 id="clouddeployprojectslocationstargetspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Optional. Name of the `Target`. Format is projects/{project}/locations/{location}/targets/a-z{0,62}.|
|allowMissing|query|boolean|false|Optional. If set to true, updating a `Target` that does not exist will result in the creation of a new `Target`.|
|requestId|query|string|false|Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|updateMask|query|string|false|Required. Field mask is used to specify the fields to be overwritten in the Target resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.|
|validateOnly|query|boolean|false|Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.|
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
|body|body|[Target](#schematarget)|false|none|
|» annotations|body|object|false|Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.|
|» » **additionalProperties**|body|string|false|none|
|» anthosCluster|body|[AnthosCluster](#schemaanthoscluster)|false|Information specifying an Anthos Cluster.|
|» description|body|string|false|Optional. Description of the `Target`. Max length is 255 characters.|
|» etag|body|string|false|Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|» executionConfigs|body|[[ExecutionConfig](#schemaexecutionconfig)]|false|Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.|
|» gke|body|[GkeCluster](#schemagkecluster)|false|Information specifying a GKE Cluster.|
|» labels|body|object|false|Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.|
|» » **additionalProperties**|body|string|false|none|
|» multiTarget|body|[MultiTarget](#schemamultitarget)|false|Information specifying a multiTarget.|
|» name|body|string|false|Optional. Name of the `Target`. Format is projects/{project}/locations/{location}/targets/a-z{0,62}.|
|» requireApproval|body|boolean|false|Optional. Whether or not the `Target` requires approval.|
|» run|body|[CloudRunLocation](#schemacloudrunlocation)|false|Information specifying a Cloud Run deployment target.|

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

<h3 id="clouddeployprojectslocationstargetspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.list

<a id="opIdclouddeploy.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="clouddeployprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="clouddeployprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.operations.list

<a id="opIdclouddeploy.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="clouddeployprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="clouddeployprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.deliveryPipelines.releases.abandon

<a id="opIdclouddeploy.projects.locations.deliveryPipelines.releases.abandon"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:abandon \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:abandon`

Abandons a Release in the Delivery Pipeline.

> Body parameter

```json
{}
```

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasesabandon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the Release. Format is projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}.|
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
|body|body|[AbandonReleaseRequest](#schemaabandonreleaserequest)|false|none|

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

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasesabandon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AbandonReleaseResponse](#schemaabandonreleaseresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.advance

<a id="opIdclouddeploy.projects.locations.deliveryPipelines.releases.rollouts.advance"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:advance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "phaseId": "string"
  }'
```

`POST /v1/{name}:advance`

Advances a Rollout in a given project and location.

> Body parameter

```json
{
  "phaseId": "string"
}
```

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsadvance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the Rollout. Format is projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/{rollout}.|
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
|body|body|[AdvanceRolloutRequest](#schemaadvancerolloutrequest)|false|none|
|» phaseId|body|string|false|Required. The phase ID to advance the `Rollout` to.|

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

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsadvance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdvanceRolloutResponse](#schemaadvancerolloutresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.approve

<a id="opIdclouddeploy.projects.locations.deliveryPipelines.releases.rollouts.approve"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:approve \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "approved": true
  }'
```

`POST /v1/{name}:approve`

Approves a Rollout.

> Body parameter

```json
{
  "approved": true
}
```

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsapprove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the Rollout. Format is projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/{rollout}.|
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
|body|body|[ApproveRolloutRequest](#schemaapproverolloutrequest)|false|none|
|» approved|body|boolean|false|Required. True = approve; false = reject|

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

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsapprove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ApproveRolloutResponse](#schemaapproverolloutresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.operations.cancel

<a id="opIdclouddeploy.projects.locations.operations.cancel"></a>

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

<h3 id="clouddeployprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="clouddeployprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.jobRuns.terminate

<a id="opIdclouddeploy.projects.locations.deliveryPipelines.releases.rollouts.jobRuns.terminate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:terminate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:terminate`

Terminates a Job Run in a given project and location.

> Body parameter

```json
{}
```

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsjobrunsterminate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the `JobRun`. Format must be projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/{rollout}/jobRuns/{jobRun}.|
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
|body|body|[TerminateJobRunRequest](#schematerminatejobrunrequest)|false|none|

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

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsjobrunsterminate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TerminateJobRunResponse](#schematerminatejobrunresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.deliveryPipelines.list

<a id="opIdclouddeploy.projects.locations.deliveryPipelines.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/deliveryPipelines \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/deliveryPipelines`

Lists DeliveryPipelines in a given project and location.

<h3 id="clouddeployprojectslocationsdeliverypipelineslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of pipelines. Format must be projects/{project_id}/locations/{location_name}.|
|filter|query|string|false|Filter pipelines to be returned. See https://google.aip.dev/160 for more details.|
|orderBy|query|string|false|Field to sort by. See https://google.aip.dev/132#ordering for more details.|
|pageSize|query|integer|false|The maximum number of pipelines to return. The service may return fewer than this value. If unspecified, at most 50 pipelines will be returned. The maximum value is 1000; values above 1000 will be set to 1000.|
|pageToken|query|string|false|A page token, received from a previous `ListDeliveryPipelines` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.|
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
  "deliveryPipelines": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "condition": {
        "pipelineReadyCondition": {
          "status": true,
          "updateTime": "string"
        },
        "targetsPresentCondition": {
          "missingTargets": [
            "string"
          ],
          "status": true,
          "updateTime": "string"
        },
        "targetsTypeCondition": {
          "errorDetails": "string",
          "status": true
        }
      },
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "serialPipeline": {
        "stages": [
          {
            "profiles": [
              "string"
            ],
            "strategy": {
              "canary": {
                "canaryDeployment": {
                  "percentages": [
                    0
                  ],
                  "verify": true
                },
                "customCanaryDeployment": {
                  "phaseConfigs": [
                    {
                      "percentage": 0,
                      "phaseId": "string",
                      "profiles": [
                        "string"
                      ],
                      "verify": true
                    }
                  ]
                },
                "runtimeConfig": {
                  "cloudRun": {
                    "automaticTrafficControl": true
                  },
                  "kubernetes": {
                    "gatewayServiceMesh": {
                      "deployment": "string",
                      "httpRoute": "string",
                      "service": "string"
                    },
                    "serviceNetworking": {
                      "deployment": "string",
                      "service": "string"
                    }
                  }
                }
              },
              "standard": {
                "verify": true
              }
            },
            "targetId": "string"
          }
        ]
      },
      "suspended": true,
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

<h3 id="clouddeployprojectslocationsdeliverypipelineslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDeliveryPipelinesResponse](#schemalistdeliverypipelinesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.deliveryPipelines.create

<a id="opIdclouddeploy.projects.locations.deliveryPipelines.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/deliveryPipelines \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "description": "string",
    "etag": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "serialPipeline": {
      "stages": [
        {
          "profiles": [
            "string"
          ],
          "strategy": {
            "canary": {
              "canaryDeployment": {
                "percentages": [
                  0
                ],
                "verify": true
              },
              "customCanaryDeployment": {
                "phaseConfigs": [
                  {
                    "percentage": 0,
                    "phaseId": "string",
                    "profiles": [
                      "string"
                    ],
                    "verify": true
                  }
                ]
              },
              "runtimeConfig": {
                "cloudRun": {
                  "automaticTrafficControl": true
                },
                "kubernetes": {
                  "gatewayServiceMesh": {
                    "deployment": "string",
                    "httpRoute": "string",
                    "service": "string"
                  },
                  "serviceNetworking": {
                    "deployment": "string",
                    "service": "string"
                  }
                }
              }
            },
            "standard": {
              "verify": true
            }
          },
          "targetId": "string"
        }
      ]
    },
    "suspended": true
  }'
```

`POST /v1/{parent}/deliveryPipelines`

Creates a new DeliveryPipeline in a given project and location.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "description": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "serialPipeline": {
    "stages": [
      {
        "profiles": [
          "string"
        ],
        "strategy": {
          "canary": {
            "canaryDeployment": {
              "percentages": [
                0
              ],
              "verify": true
            },
            "customCanaryDeployment": {
              "phaseConfigs": [
                {
                  "percentage": 0,
                  "phaseId": "string",
                  "profiles": [
                    "string"
                  ],
                  "verify": true
                }
              ]
            },
            "runtimeConfig": {
              "cloudRun": {
                "automaticTrafficControl": true
              },
              "kubernetes": {
                "gatewayServiceMesh": {
                  "deployment": "string",
                  "httpRoute": "string",
                  "service": "string"
                },
                "serviceNetworking": {
                  "deployment": "string",
                  "service": "string"
                }
              }
            }
          },
          "standard": {
            "verify": true
          }
        },
        "targetId": "string"
      }
    ]
  },
  "suspended": true
}
```

<h3 id="clouddeployprojectslocationsdeliverypipelinescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent collection in which the `DeliveryPipeline` should be created. Format should be projects/{project_id}/locations/{location_name}.|
|deliveryPipelineId|query|string|false|Required. ID of the `DeliveryPipeline`.|
|requestId|query|string|false|Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|validateOnly|query|boolean|false|Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.|
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
|body|body|[DeliveryPipeline](#schemadeliverypipeline)|false|none|
|» annotations|body|object|false|User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy.|
|» » **additionalProperties**|body|string|false|none|
|» description|body|string|false|Description of the `DeliveryPipeline`. Max length is 255 characters.|
|» etag|body|string|false|This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|» labels|body|object|false|Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Optional. Name of the `DeliveryPipeline`. Format is projects/{project}/ locations/{location}/deliveryPipelines/a-z{0,62}.|
|» serialPipeline|body|[SerialPipeline](#schemaserialpipeline)|false|SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.|
|» suspended|body|boolean|false|When suspended, no new releases or rollouts can be created, but in-progress ones will complete.|

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

<h3 id="clouddeployprojectslocationsdeliverypipelinescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.jobRuns.list

<a id="opIdclouddeploy.projects.locations.deliveryPipelines.releases.rollouts.jobRuns.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/jobRuns \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/jobRuns`

Lists JobRuns in a given project and location.

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsjobrunslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The `Rollout` which owns this collection of `JobRun` objects.|
|filter|query|string|false|Optional. Filter results to be returned. See https://google.aip.dev/160 for more details.|
|orderBy|query|string|false|Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.|
|pageSize|query|integer|false|Optional. The maximum number of `JobRun` objects to return. The service may return fewer than this value. If unspecified, at most 50 `JobRun` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListJobRuns` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.|
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
  "jobRuns": [
    {
      "advanceChildRolloutJobRun": {
        "rollout": "string",
        "rolloutPhaseId": "string"
      },
      "createChildRolloutJobRun": {
        "rollout": "string",
        "rolloutPhaseId": "string"
      },
      "createTime": "string",
      "deployJobRun": {
        "build": "string",
        "failureCause": "FAILURE_CAUSE_UNSPECIFIED",
        "failureMessage": "string",
        "metadata": {
          "cloudRun": {
            "revision": "string",
            "service": "string",
            "serviceUrls": [
              "string"
            ]
          }
        }
      },
      "endTime": "string",
      "etag": "string",
      "jobId": "string",
      "name": "string",
      "phaseId": "string",
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "uid": "string",
      "verifyJobRun": {
        "artifactUri": "string",
        "build": "string",
        "eventLogPath": "string",
        "failureCause": "FAILURE_CAUSE_UNSPECIFIED",
        "failureMessage": "string"
      }
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsjobrunslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListJobRunsResponse](#schemalistjobrunsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.deliveryPipelines.releases.list

<a id="opIdclouddeploy.projects.locations.deliveryPipelines.releases.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/releases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/releases`

Lists Releases in a given project and location.

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleaseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The `DeliveryPipeline` which owns this collection of `Release` objects.|
|filter|query|string|false|Optional. Filter releases to be returned. See https://google.aip.dev/160 for more details.|
|orderBy|query|string|false|Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.|
|pageSize|query|integer|false|Optional. The maximum number of `Release` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Release` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListReleases` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.|
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
  "releases": [
    {
      "abandoned": true,
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "buildArtifacts": [
        {
          "image": "string",
          "tag": "string"
        }
      ],
      "condition": {
        "releaseReadyCondition": {
          "status": true
        },
        "skaffoldSupportedCondition": {
          "maintenanceModeTime": "string",
          "skaffoldSupportState": "SKAFFOLD_SUPPORT_STATE_UNSPECIFIED",
          "status": true,
          "supportExpirationTime": "string"
        }
      },
      "createTime": "string",
      "deliveryPipelineSnapshot": {
        "annotations": {
          "property1": "string",
          "property2": "string"
        },
        "condition": {
          "pipelineReadyCondition": {
            "status": true,
            "updateTime": "string"
          },
          "targetsPresentCondition": {
            "missingTargets": [
              "string"
            ],
            "status": true,
            "updateTime": "string"
          },
          "targetsTypeCondition": {
            "errorDetails": "string",
            "status": true
          }
        },
        "createTime": "string",
        "description": "string",
        "etag": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "serialPipeline": {
          "stages": [
            {
              "profiles": [
                "string"
              ],
              "strategy": {
                "canary": {
                  "canaryDeployment": {
                    "percentages": [
                      0
                    ],
                    "verify": true
                  },
                  "customCanaryDeployment": {
                    "phaseConfigs": [
                      {
                        "percentage": 0,
                        "phaseId": "string",
                        "profiles": [
                          "string"
                        ],
                        "verify": true
                      }
                    ]
                  },
                  "runtimeConfig": {
                    "cloudRun": {
                      "automaticTrafficControl": true
                    },
                    "kubernetes": {
                      "gatewayServiceMesh": {
                        "deployment": "string",
                        "httpRoute": "string",
                        "service": "string"
                      },
                      "serviceNetworking": {
                        "deployment": "string",
                        "service": "string"
                      }
                    }
                  }
                },
                "standard": {
                  "verify": true
                }
              },
              "targetId": "string"
            }
          ]
        },
        "suspended": true,
        "uid": "string",
        "updateTime": "string"
      },
      "description": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "renderEndTime": "string",
      "renderStartTime": "string",
      "renderState": "RENDER_STATE_UNSPECIFIED",
      "skaffoldConfigPath": "string",
      "skaffoldConfigUri": "string",
      "skaffoldVersion": "string",
      "targetArtifacts": {
        "property1": {
          "artifactUri": "string",
          "manifestPath": "string",
          "phaseArtifacts": {
            "property1": {
              "manifestPath": "string",
              "skaffoldConfigPath": "string"
            },
            "property2": {
              "manifestPath": "string",
              "skaffoldConfigPath": "string"
            }
          },
          "skaffoldConfigPath": "string"
        },
        "property2": {
          "artifactUri": "string",
          "manifestPath": "string",
          "phaseArtifacts": {
            "property1": {
              "manifestPath": "string",
              "skaffoldConfigPath": "string"
            },
            "property2": {
              "manifestPath": "string",
              "skaffoldConfigPath": "string"
            }
          },
          "skaffoldConfigPath": "string"
        }
      },
      "targetRenders": {
        "property1": {
          "failureCause": "FAILURE_CAUSE_UNSPECIFIED",
          "failureMessage": "string",
          "metadata": {
            "cloudRun": {
              "service": "string"
            }
          },
          "renderingBuild": "string",
          "renderingState": "TARGET_RENDER_STATE_UNSPECIFIED"
        },
        "property2": {
          "failureCause": "FAILURE_CAUSE_UNSPECIFIED",
          "failureMessage": "string",
          "metadata": {
            "cloudRun": {
              "service": "string"
            }
          },
          "renderingBuild": "string",
          "renderingState": "TARGET_RENDER_STATE_UNSPECIFIED"
        }
      },
      "targetSnapshots": [
        {
          "annotations": {
            "property1": "string",
            "property2": "string"
          },
          "anthosCluster": {
            "membership": "string"
          },
          "createTime": "string",
          "description": "string",
          "etag": "string",
          "executionConfigs": [
            {
              "artifactStorage": "string",
              "defaultPool": {
                "artifactStorage": "string",
                "serviceAccount": "string"
              },
              "executionTimeout": "string",
              "privatePool": {
                "artifactStorage": "string",
                "serviceAccount": "string",
                "workerPool": "string"
              },
              "serviceAccount": "string",
              "usages": [
                "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
              ],
              "workerPool": "string"
            }
          ],
          "gke": {
            "cluster": "string",
            "internalIp": true
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "multiTarget": {
            "targetIds": [
              "string"
            ]
          },
          "name": "string",
          "requireApproval": true,
          "run": {
            "location": "string"
          },
          "targetId": "string",
          "uid": "string",
          "updateTime": "string"
        }
      ],
      "uid": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleaseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListReleasesResponse](#schemalistreleasesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.deliveryPipelines.releases.create

<a id="opIdclouddeploy.projects.locations.deliveryPipelines.releases.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/releases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "buildArtifacts": [
      {
        "image": "string",
        "tag": "string"
      }
    ],
    "description": "string",
    "etag": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "skaffoldConfigPath": "string",
    "skaffoldConfigUri": "string",
    "skaffoldVersion": "string"
  }'
```

`POST /v1/{parent}/releases`

Creates a new Release in a given project and location.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "buildArtifacts": [
    {
      "image": "string",
      "tag": "string"
    }
  ],
  "description": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "skaffoldConfigPath": "string",
  "skaffoldConfigUri": "string",
  "skaffoldVersion": "string"
}
```

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent collection in which the `Release` should be created. Format should be projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}.|
|releaseId|query|string|false|Required. ID of the `Release`.|
|requestId|query|string|false|Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|validateOnly|query|boolean|false|Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.|
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
|body|body|[Release](#schemarelease)|false|none|
|» annotations|body|object|false|User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.|
|» » **additionalProperties**|body|string|false|none|
|» buildArtifacts|body|[[BuildArtifact](#schemabuildartifact)]|false|List of artifacts to pass through to Skaffold command.|
|» description|body|string|false|Description of the `Release`. Max length is 255 characters.|
|» etag|body|string|false|This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|» labels|body|object|false|Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Optional. Name of the `Release`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/a-z{0,62}.|
|» skaffoldConfigPath|body|string|false|Filepath of the Skaffold config inside of the config URI.|
|» skaffoldConfigUri|body|string|false|Cloud Storage URI of tar.gz archive containing Skaffold configuration.|
|» skaffoldVersion|body|string|false|The Skaffold version to use when operating on this release, such as "1.20.0". Not all versions are valid; Google Cloud Deploy supports a specific set of versions. If unset, the most recent supported Skaffold version will be used.|

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

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.list

<a id="opIdclouddeploy.projects.locations.deliveryPipelines.releases.rollouts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/rollouts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/rollouts`

Lists Rollouts in a given project and location.

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasesrolloutslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The `Release` which owns this collection of `Rollout` objects.|
|filter|query|string|false|Optional. Filter rollouts to be returned. See https://google.aip.dev/160 for more details.|
|orderBy|query|string|false|Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.|
|pageSize|query|integer|false|Optional. The maximum number of `Rollout` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Rollout` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListRollouts` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.|
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
  "rollouts": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "approvalState": "APPROVAL_STATE_UNSPECIFIED",
      "approveTime": "string",
      "controllerRollout": "string",
      "createTime": "string",
      "deployEndTime": "string",
      "deployFailureCause": "FAILURE_CAUSE_UNSPECIFIED",
      "deployStartTime": "string",
      "deployingBuild": "string",
      "description": "string",
      "enqueueTime": "string",
      "etag": "string",
      "failureReason": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "metadata": {
        "cloudRun": {
          "revision": "string",
          "service": "string",
          "serviceUrls": [
            "string"
          ]
        }
      },
      "name": "string",
      "phases": [
        {
          "childRolloutJobs": {
            "advanceRolloutJobs": [
              {
                "advanceChildRolloutJob": {},
                "createChildRolloutJob": {},
                "deployJob": {},
                "id": "string",
                "jobRun": "string",
                "skipMessage": "string",
                "state": "STATE_UNSPECIFIED",
                "verifyJob": {}
              }
            ],
            "createRolloutJobs": [
              {
                "advanceChildRolloutJob": {},
                "createChildRolloutJob": {},
                "deployJob": {},
                "id": "string",
                "jobRun": "string",
                "skipMessage": "string",
                "state": "STATE_UNSPECIFIED",
                "verifyJob": {}
              }
            ]
          },
          "deploymentJobs": {
            "deployJob": {
              "advanceChildRolloutJob": {},
              "createChildRolloutJob": {},
              "deployJob": {},
              "id": "string",
              "jobRun": "string",
              "skipMessage": "string",
              "state": "STATE_UNSPECIFIED",
              "verifyJob": {}
            },
            "verifyJob": {
              "advanceChildRolloutJob": {},
              "createChildRolloutJob": {},
              "deployJob": {},
              "id": "string",
              "jobRun": "string",
              "skipMessage": "string",
              "state": "STATE_UNSPECIFIED",
              "verifyJob": {}
            }
          },
          "id": "string",
          "skipMessage": "string",
          "state": "STATE_UNSPECIFIED"
        }
      ],
      "state": "STATE_UNSPECIFIED",
      "targetId": "string",
      "uid": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasesrolloutslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListRolloutsResponse](#schemalistrolloutsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.create

<a id="opIdclouddeploy.projects.locations.deliveryPipelines.releases.rollouts.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/rollouts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "description": "string",
    "etag": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "targetId": "string"
  }'
```

`POST /v1/{parent}/rollouts`

Creates a new Rollout in a given project and location.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "description": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "targetId": "string"
}
```

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasesrolloutscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent collection in which the `Rollout` should be created. Format should be projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/releases/{release_name}.|
|requestId|query|string|false|Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|rolloutId|query|string|false|Required. ID of the `Rollout`.|
|startingPhaseId|query|string|false|Optional. The starting phase ID for the `Rollout`. If empty the `Rollout` will start at the first phase.|
|validateOnly|query|boolean|false|Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.|
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
|body|body|[Rollout](#schemarollout)|false|none|
|» annotations|body|object|false|User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.|
|» » **additionalProperties**|body|string|false|none|
|» description|body|string|false|Description of the `Rollout` for user purposes. Max length is 255 characters.|
|» etag|body|string|false|This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|» labels|body|object|false|Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Optional. Name of the `Rollout`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/a-z{0,62}.|
|» targetId|body|string|false|Required. The ID of Target to which this `Rollout` is deploying.|

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

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasesrolloutscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.targets.list

<a id="opIdclouddeploy.projects.locations.targets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/targets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/targets`

Lists Targets in a given project and location.

<h3 id="clouddeployprojectslocationstargetslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of targets. Format must be projects/{project_id}/locations/{location_name}.|
|filter|query|string|false|Optional. Filter targets to be returned. See https://google.aip.dev/160 for more details.|
|orderBy|query|string|false|Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.|
|pageSize|query|integer|false|Optional. The maximum number of `Target` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Target` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListTargets` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.|
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
  "targets": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "anthosCluster": {
        "membership": "string"
      },
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "executionConfigs": [
        {
          "artifactStorage": "string",
          "defaultPool": {
            "artifactStorage": "string",
            "serviceAccount": "string"
          },
          "executionTimeout": "string",
          "privatePool": {
            "artifactStorage": "string",
            "serviceAccount": "string",
            "workerPool": "string"
          },
          "serviceAccount": "string",
          "usages": [
            "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
          ],
          "workerPool": "string"
        }
      ],
      "gke": {
        "cluster": "string",
        "internalIp": true
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "multiTarget": {
        "targetIds": [
          "string"
        ]
      },
      "name": "string",
      "requireApproval": true,
      "run": {
        "location": "string"
      },
      "targetId": "string",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="clouddeployprojectslocationstargetslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTargetsResponse](#schemalisttargetsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.targets.create

<a id="opIdclouddeploy.projects.locations.targets.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/targets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "anthosCluster": {
      "membership": "string"
    },
    "description": "string",
    "etag": "string",
    "executionConfigs": [
      {
        "artifactStorage": "string",
        "defaultPool": {
          "artifactStorage": "string",
          "serviceAccount": "string"
        },
        "executionTimeout": "string",
        "privatePool": {
          "artifactStorage": "string",
          "serviceAccount": "string",
          "workerPool": "string"
        },
        "serviceAccount": "string",
        "usages": [
          "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
        ],
        "workerPool": "string"
      }
    ],
    "gke": {
      "cluster": "string",
      "internalIp": true
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "multiTarget": {
      "targetIds": [
        "string"
      ]
    },
    "name": "string",
    "requireApproval": true,
    "run": {
      "location": "string"
    }
  }'
```

`POST /v1/{parent}/targets`

Creates a new Target in a given project and location.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "anthosCluster": {
    "membership": "string"
  },
  "description": "string",
  "etag": "string",
  "executionConfigs": [
    {
      "artifactStorage": "string",
      "defaultPool": {
        "artifactStorage": "string",
        "serviceAccount": "string"
      },
      "executionTimeout": "string",
      "privatePool": {
        "artifactStorage": "string",
        "serviceAccount": "string",
        "workerPool": "string"
      },
      "serviceAccount": "string",
      "usages": [
        "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
      ],
      "workerPool": "string"
    }
  ],
  "gke": {
    "cluster": "string",
    "internalIp": true
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "multiTarget": {
    "targetIds": [
      "string"
    ]
  },
  "name": "string",
  "requireApproval": true,
  "run": {
    "location": "string"
  }
}
```

<h3 id="clouddeployprojectslocationstargetscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent collection in which the `Target` should be created. Format should be projects/{project_id}/locations/{location_name}.|
|requestId|query|string|false|Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|targetId|query|string|false|Required. ID of the `Target`.|
|validateOnly|query|boolean|false|Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.|
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
|body|body|[Target](#schematarget)|false|none|
|» annotations|body|object|false|Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.|
|» » **additionalProperties**|body|string|false|none|
|» anthosCluster|body|[AnthosCluster](#schemaanthoscluster)|false|Information specifying an Anthos Cluster.|
|» description|body|string|false|Optional. Description of the `Target`. Max length is 255 characters.|
|» etag|body|string|false|Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|» executionConfigs|body|[[ExecutionConfig](#schemaexecutionconfig)]|false|Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.|
|» gke|body|[GkeCluster](#schemagkecluster)|false|Information specifying a GKE Cluster.|
|» labels|body|object|false|Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.|
|» » **additionalProperties**|body|string|false|none|
|» multiTarget|body|[MultiTarget](#schemamultitarget)|false|Information specifying a multiTarget.|
|» name|body|string|false|Optional. Name of the `Target`. Format is projects/{project}/locations/{location}/targets/a-z{0,62}.|
|» requireApproval|body|boolean|false|Optional. Whether or not the `Target` requires approval.|
|» run|body|[CloudRunLocation](#schemacloudrunlocation)|false|Information specifying a Cloud Run deployment target.|

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

<h3 id="clouddeployprojectslocationstargetscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.targets.getIamPolicy

<a id="opIdclouddeploy.projects.locations.targets.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="clouddeployprojectslocationstargetsgetiampolicy-parameters">Parameters</h3>

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

<h3 id="clouddeployprojectslocationstargetsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.targets.setIamPolicy

<a id="opIdclouddeploy.projects.locations.targets.setIamPolicy"></a>

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

<h3 id="clouddeployprojectslocationstargetssetiampolicy-parameters">Parameters</h3>

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

<h3 id="clouddeployprojectslocationstargetssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.targets.testIamPermissions

<a id="opIdclouddeploy.projects.locations.targets.testIamPermissions"></a>

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

<h3 id="clouddeployprojectslocationstargetstestiampermissions-parameters">Parameters</h3>

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

<h3 id="clouddeployprojectslocationstargetstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.ignoreJob

<a id="opIdclouddeploy.projects.locations.deliveryPipelines.releases.rollouts.ignoreJob"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:ignoreJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "jobId": "string",
    "phaseId": "string"
  }'
```

`POST /v1/{rollout}:ignoreJob`

Ignores the specified Job in a Rollout.

> Body parameter

```json
{
  "jobId": "string",
  "phaseId": "string"
}
```

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsignorejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rollout|path|string|true|Required. Name of the Rollout. Format is projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/{rollout}.|
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
|body|body|[IgnoreJobRequest](#schemaignorejobrequest)|false|none|
|» jobId|body|string|false|Required. The job ID for the Job to ignore.|
|» phaseId|body|string|false|Required. The phase ID the Job to ignore belongs to.|

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

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsignorejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[IgnoreJobResponse](#schemaignorejobresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.retryJob

<a id="opIdclouddeploy.projects.locations.deliveryPipelines.releases.rollouts.retryJob"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:retryJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "jobId": "string",
    "phaseId": "string"
  }'
```

`POST /v1/{rollout}:retryJob`

Retries the specified Job in a Rollout.

> Body parameter

```json
{
  "jobId": "string",
  "phaseId": "string"
}
```

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsretryjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rollout|path|string|true|Required. Name of the Rollout. Format is projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/{rollout}.|
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
|body|body|[RetryJobRequest](#schemaretryjobrequest)|false|none|
|» jobId|body|string|false|Required. The job ID for the Job to retry.|
|» phaseId|body|string|false|Required. The phase ID the Job to retry belongs to.|

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

<h3 id="clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsretryjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RetryJobResponse](#schemaretryjobresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AbandonReleaseRequest">AbandonReleaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaabandonreleaserequest"></a>
<a id="schema_AbandonReleaseRequest"></a>
<a id="tocSabandonreleaserequest"></a>
<a id="tocsabandonreleaserequest"></a>

```json
{}
```

The request object used by `AbandonRelease`.

<h2 id="tocS_AbandonReleaseResponse">AbandonReleaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaabandonreleaseresponse"></a>
<a id="schema_AbandonReleaseResponse"></a>
<a id="tocSabandonreleaseresponse"></a>
<a id="tocsabandonreleaseresponse"></a>

```json
{}
```

The response object for `AbandonRelease`.

<h2 id="tocS_AdvanceChildRolloutJob">AdvanceChildRolloutJob</h2>
<!-- backwards compatibility -->
<a id="schemaadvancechildrolloutjob"></a>
<a id="schema_AdvanceChildRolloutJob"></a>
<a id="tocSadvancechildrolloutjob"></a>
<a id="tocsadvancechildrolloutjob"></a>

```json
{}
```

An advanceChildRollout Job.

<h2 id="tocS_AdvanceChildRolloutJobRun">AdvanceChildRolloutJobRun</h2>
<!-- backwards compatibility -->
<a id="schemaadvancechildrolloutjobrun"></a>
<a id="schema_AdvanceChildRolloutJobRun"></a>
<a id="tocSadvancechildrolloutjobrun"></a>
<a id="tocsadvancechildrolloutjobrun"></a>

```json
{
  "rollout": "string",
  "rolloutPhaseId": "string"
}
```

AdvanceChildRolloutJobRun contains information specific to a advanceChildRollout `JobRun`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rollout|string|false|read-only|Output only. Name of the `ChildRollout`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/a-z{0,62}.|
|rolloutPhaseId|string|false|read-only|Output only. the ID of the ChildRollout's Phase.|

<h2 id="tocS_AdvanceRolloutRequest">AdvanceRolloutRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadvancerolloutrequest"></a>
<a id="schema_AdvanceRolloutRequest"></a>
<a id="tocSadvancerolloutrequest"></a>
<a id="tocsadvancerolloutrequest"></a>

```json
{
  "phaseId": "string"
}
```

The request object used by `AdvanceRollout`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phaseId|string|false|none|Required. The phase ID to advance the `Rollout` to.|

<h2 id="tocS_AdvanceRolloutResponse">AdvanceRolloutResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadvancerolloutresponse"></a>
<a id="schema_AdvanceRolloutResponse"></a>
<a id="tocSadvancerolloutresponse"></a>
<a id="tocsadvancerolloutresponse"></a>

```json
{}
```

The response object from `AdvanceRollout`.

<h2 id="tocS_AnthosCluster">AnthosCluster</h2>
<!-- backwards compatibility -->
<a id="schemaanthoscluster"></a>
<a id="schema_AnthosCluster"></a>
<a id="tocSanthoscluster"></a>
<a id="tocsanthoscluster"></a>

```json
{
  "membership": "string"
}
```

Information specifying an Anthos Cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|membership|string|false|none|Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.|

<h2 id="tocS_ApproveRolloutRequest">ApproveRolloutRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapproverolloutrequest"></a>
<a id="schema_ApproveRolloutRequest"></a>
<a id="tocSapproverolloutrequest"></a>
<a id="tocsapproverolloutrequest"></a>

```json
{
  "approved": true
}
```

The request object used by `ApproveRollout`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approved|boolean|false|none|Required. True = approve; false = reject|

<h2 id="tocS_ApproveRolloutResponse">ApproveRolloutResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapproverolloutresponse"></a>
<a id="schema_ApproveRolloutResponse"></a>
<a id="tocSapproverolloutresponse"></a>
<a id="tocsapproverolloutresponse"></a>

```json
{}
```

The response object from `ApproveRollout`.

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

<h2 id="tocS_BuildArtifact">BuildArtifact</h2>
<!-- backwards compatibility -->
<a id="schemabuildartifact"></a>
<a id="schema_BuildArtifact"></a>
<a id="tocSbuildartifact"></a>
<a id="tocsbuildartifact"></a>

```json
{
  "image": "string",
  "tag": "string"
}
```

Description of an a image to use during Skaffold rendering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|string|false|none|Image name in Skaffold configuration.|
|tag|string|false|none|Image tag to use. This will generally be the full path to an image, such as "gcr.io/my-project/busybox:1.2.3" or "gcr.io/my-project/busybox@sha256:abc123".|

<h2 id="tocS_Canary">Canary</h2>
<!-- backwards compatibility -->
<a id="schemacanary"></a>
<a id="schema_Canary"></a>
<a id="tocScanary"></a>
<a id="tocscanary"></a>

```json
{
  "canaryDeployment": {
    "percentages": [
      0
    ],
    "verify": true
  },
  "customCanaryDeployment": {
    "phaseConfigs": [
      {
        "percentage": 0,
        "phaseId": "string",
        "profiles": [
          "string"
        ],
        "verify": true
      }
    ]
  },
  "runtimeConfig": {
    "cloudRun": {
      "automaticTrafficControl": true
    },
    "kubernetes": {
      "gatewayServiceMesh": {
        "deployment": "string",
        "httpRoute": "string",
        "service": "string"
      },
      "serviceNetworking": {
        "deployment": "string",
        "service": "string"
      }
    }
  }
}
```

Canary represents the canary deployment strategy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canaryDeployment|[CanaryDeployment](#schemacanarydeployment)|false|none|Configures the progressive based deployment for a Target.|
|customCanaryDeployment|[CustomCanaryDeployment](#schemacustomcanarydeployment)|false|none|Configures the progressive based deployment for a Target, but allows customizing at the phase level where a phase represents each of the percentage deployments.|
|runtimeConfig|[RuntimeConfig](#schemaruntimeconfig)|false|none|Optional. Runtime specific configurations for the deployment strategy. The runtime configuration is used to determine how Cloud Deploy will split traffic to enable a progressive deployment.|

<h2 id="tocS_CanaryDeployment">CanaryDeployment</h2>
<!-- backwards compatibility -->
<a id="schemacanarydeployment"></a>
<a id="schema_CanaryDeployment"></a>
<a id="tocScanarydeployment"></a>
<a id="tocscanarydeployment"></a>

```json
{
  "percentages": [
    0
  ],
  "verify": true
}
```

CanaryDeployment represents the canary deployment configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|percentages|[integer(int32)]|false|none|Required. The percentage based deployments that will occur as a part of a `Rollout`. List is expected in ascending order and each integer n is 0 <= n < 100.|
|verify|boolean|false|none|Whether to run verify tests after each percentage deployment.|

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

<h2 id="tocS_CancelRolloutRequest">CancelRolloutRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelrolloutrequest"></a>
<a id="schema_CancelRolloutRequest"></a>
<a id="tocScancelrolloutrequest"></a>
<a id="tocscancelrolloutrequest"></a>

```json
{}
```

The request object used by `CancelRollout`.

<h2 id="tocS_CancelRolloutResponse">CancelRolloutResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelrolloutresponse"></a>
<a id="schema_CancelRolloutResponse"></a>
<a id="tocScancelrolloutresponse"></a>
<a id="tocscancelrolloutresponse"></a>

```json
{}
```

The response object from `CancelRollout`.

<h2 id="tocS_ChildRolloutJobs">ChildRolloutJobs</h2>
<!-- backwards compatibility -->
<a id="schemachildrolloutjobs"></a>
<a id="schema_ChildRolloutJobs"></a>
<a id="tocSchildrolloutjobs"></a>
<a id="tocschildrolloutjobs"></a>

```json
{
  "advanceRolloutJobs": [
    {
      "advanceChildRolloutJob": {},
      "createChildRolloutJob": {},
      "deployJob": {},
      "id": "string",
      "jobRun": "string",
      "skipMessage": "string",
      "state": "STATE_UNSPECIFIED",
      "verifyJob": {}
    }
  ],
  "createRolloutJobs": [
    {
      "advanceChildRolloutJob": {},
      "createChildRolloutJob": {},
      "deployJob": {},
      "id": "string",
      "jobRun": "string",
      "skipMessage": "string",
      "state": "STATE_UNSPECIFIED",
      "verifyJob": {}
    }
  ]
}
```

ChildRollouts job composition

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advanceRolloutJobs|[[Job](#schemajob)]|false|read-only|Output only. List of AdvanceChildRolloutJobs|
|createRolloutJobs|[[Job](#schemajob)]|false|read-only|Output only. List of CreateChildRolloutJobs|

<h2 id="tocS_CloudRunConfig">CloudRunConfig</h2>
<!-- backwards compatibility -->
<a id="schemacloudrunconfig"></a>
<a id="schema_CloudRunConfig"></a>
<a id="tocScloudrunconfig"></a>
<a id="tocscloudrunconfig"></a>

```json
{
  "automaticTrafficControl": true
}
```

CloudRunConfig contains the Cloud Run runtime configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|automaticTrafficControl|boolean|false|none|Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting. This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments.|

<h2 id="tocS_CloudRunLocation">CloudRunLocation</h2>
<!-- backwards compatibility -->
<a id="schemacloudrunlocation"></a>
<a id="schema_CloudRunLocation"></a>
<a id="tocScloudrunlocation"></a>
<a id="tocscloudrunlocation"></a>

```json
{
  "location": "string"
}
```

Information specifying where to deploy a Cloud Run Service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|none|Required. The location for the Cloud Run Service. Format must be `projects/{project}/locations/{location}`.|

<h2 id="tocS_CloudRunMetadata">CloudRunMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacloudrunmetadata"></a>
<a id="schema_CloudRunMetadata"></a>
<a id="tocScloudrunmetadata"></a>
<a id="tocscloudrunmetadata"></a>

```json
{
  "revision": "string",
  "service": "string",
  "serviceUrls": [
    "string"
  ]
}
```

CloudRunMetadata contains information from a Cloud Run deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revision|string|false|read-only|Output only. The Cloud Run Revision id associated with a `Rollout`.|
|service|string|false|read-only|Output only. The name of the Cloud Run Service that is associated with a `Rollout`. Format is projects/{project}/locations/{location}/services/{service}.|
|serviceUrls|[string]|false|read-only|Output only. The Cloud Run Service urls that are associated with a `Rollout`.|

<h2 id="tocS_CloudRunRenderMetadata">CloudRunRenderMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacloudrunrendermetadata"></a>
<a id="schema_CloudRunRenderMetadata"></a>
<a id="tocScloudrunrendermetadata"></a>
<a id="tocscloudrunrendermetadata"></a>

```json
{
  "service": "string"
}
```

CloudRunRenderMetadata contains Cloud Run information associated with a `Release` render.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service|string|false|read-only|Output only. The name of the Cloud Run Service in the rendered manifest. Format is projects/{project}/locations/{location}/services/{service}.|

<h2 id="tocS_Config">Config</h2>
<!-- backwards compatibility -->
<a id="schemaconfig"></a>
<a id="schema_Config"></a>
<a id="tocSconfig"></a>
<a id="tocsconfig"></a>

```json
{
  "defaultSkaffoldVersion": "string",
  "name": "string",
  "supportedVersions": [
    {
      "maintenanceModeTime": "string",
      "supportEndDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "supportExpirationTime": "string",
      "version": "string"
    }
  ]
}
```

Service-wide configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultSkaffoldVersion|string|false|none|Default Skaffold version that is assigned when a Release is created without specifying a Skaffold version.|
|name|string|false|none|Name of the configuration.|
|supportedVersions|[[SkaffoldVersion](#schemaskaffoldversion)]|false|none|All supported versions of Skaffold.|

<h2 id="tocS_CreateChildRolloutJob">CreateChildRolloutJob</h2>
<!-- backwards compatibility -->
<a id="schemacreatechildrolloutjob"></a>
<a id="schema_CreateChildRolloutJob"></a>
<a id="tocScreatechildrolloutjob"></a>
<a id="tocscreatechildrolloutjob"></a>

```json
{}
```

A createChildRollout Job.

<h2 id="tocS_CreateChildRolloutJobRun">CreateChildRolloutJobRun</h2>
<!-- backwards compatibility -->
<a id="schemacreatechildrolloutjobrun"></a>
<a id="schema_CreateChildRolloutJobRun"></a>
<a id="tocScreatechildrolloutjobrun"></a>
<a id="tocscreatechildrolloutjobrun"></a>

```json
{
  "rollout": "string",
  "rolloutPhaseId": "string"
}
```

CreateChildRolloutJobRun contains information specific to a createChildRollout `JobRun`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rollout|string|false|read-only|Output only. Name of the `ChildRollout`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/a-z{0,62}.|
|rolloutPhaseId|string|false|read-only|Output only. The ID of the childRollout Phase initiated by this JobRun.|

<h2 id="tocS_CustomCanaryDeployment">CustomCanaryDeployment</h2>
<!-- backwards compatibility -->
<a id="schemacustomcanarydeployment"></a>
<a id="schema_CustomCanaryDeployment"></a>
<a id="tocScustomcanarydeployment"></a>
<a id="tocscustomcanarydeployment"></a>

```json
{
  "phaseConfigs": [
    {
      "percentage": 0,
      "phaseId": "string",
      "profiles": [
        "string"
      ],
      "verify": true
    }
  ]
}
```

CustomCanaryDeployment represents the custom canary deployment configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phaseConfigs|[[PhaseConfig](#schemaphaseconfig)]|false|none|Required. Configuration for each phase in the canary deployment in the order executed.|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
{
  "day": 0,
  "month": 0,
  "year": 0
}
```

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|

<h2 id="tocS_DefaultPool">DefaultPool</h2>
<!-- backwards compatibility -->
<a id="schemadefaultpool"></a>
<a id="schema_DefaultPool"></a>
<a id="tocSdefaultpool"></a>
<a id="tocsdefaultpool"></a>

```json
{
  "artifactStorage": "string",
  "serviceAccount": "string"
}
```

Execution using the default Cloud Build pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactStorage|string|false|none|Optional. Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.|
|serviceAccount|string|false|none|Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used.|

<h2 id="tocS_DeliveryPipeline">DeliveryPipeline</h2>
<!-- backwards compatibility -->
<a id="schemadeliverypipeline"></a>
<a id="schema_DeliveryPipeline"></a>
<a id="tocSdeliverypipeline"></a>
<a id="tocsdeliverypipeline"></a>

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "condition": {
    "pipelineReadyCondition": {
      "status": true,
      "updateTime": "string"
    },
    "targetsPresentCondition": {
      "missingTargets": [
        "string"
      ],
      "status": true,
      "updateTime": "string"
    },
    "targetsTypeCondition": {
      "errorDetails": "string",
      "status": true
    }
  },
  "createTime": "string",
  "description": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "serialPipeline": {
    "stages": [
      {
        "profiles": [
          "string"
        ],
        "strategy": {
          "canary": {
            "canaryDeployment": {
              "percentages": [
                0
              ],
              "verify": true
            },
            "customCanaryDeployment": {
              "phaseConfigs": [
                {
                  "percentage": 0,
                  "phaseId": "string",
                  "profiles": [
                    "string"
                  ],
                  "verify": true
                }
              ]
            },
            "runtimeConfig": {
              "cloudRun": {
                "automaticTrafficControl": true
              },
              "kubernetes": {
                "gatewayServiceMesh": {
                  "deployment": "string",
                  "httpRoute": "string",
                  "service": "string"
                },
                "serviceNetworking": {
                  "deployment": "string",
                  "service": "string"
                }
              }
            }
          },
          "standard": {
            "verify": true
          }
        },
        "targetId": "string"
      }
    ]
  },
  "suspended": true,
  "uid": "string",
  "updateTime": "string"
}
```

A `DeliveryPipeline` resource in the Google Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy.|
|condition|[PipelineCondition](#schemapipelinecondition)|false|none|Output only. Information around the state of the Delivery Pipeline.|
|createTime|string(google-datetime)|false|read-only|Output only. Time at which the pipeline was created.|
|description|string|false|none|Description of the `DeliveryPipeline`. Max length is 255 characters.|
|etag|string|false|none|This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|labels|object|false|none|Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.|
|name|string|false|none|Optional. Name of the `DeliveryPipeline`. Format is projects/{project}/ locations/{location}/deliveryPipelines/a-z{0,62}.|
|serialPipeline|[SerialPipeline](#schemaserialpipeline)|false|none|SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.|
|suspended|boolean|false|none|When suspended, no new releases or rollouts can be created, but in-progress ones will complete.|
|uid|string|false|read-only|Output only. Unique identifier of the `DeliveryPipeline`.|
|updateTime|string(google-datetime)|false|read-only|Output only. Most recent time at which the pipeline was updated.|

<h2 id="tocS_DeliveryPipelineNotificationEvent">DeliveryPipelineNotificationEvent</h2>
<!-- backwards compatibility -->
<a id="schemadeliverypipelinenotificationevent"></a>
<a id="schema_DeliveryPipelineNotificationEvent"></a>
<a id="tocSdeliverypipelinenotificationevent"></a>
<a id="tocsdeliverypipelinenotificationevent"></a>

```json
{
  "deliveryPipeline": "string",
  "message": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

Payload proto for "clouddeploy.googleapis.com/deliverypipeline_notification" Platform Log event that describes the failure to send delivery pipeline status change Pub/Sub notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryPipeline|string|false|none|The name of the `Delivery Pipeline`.|
|message|string|false|none|Debug message for when a notification fails to send.|
|type|string|false|none|Type of this notification, e.g. for a Pub/Sub failure.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|TYPE_PUBSUB_NOTIFICATION_FAILURE|
|type|TYPE_RENDER_STATUES_CHANGE|

<h2 id="tocS_DeployJob">DeployJob</h2>
<!-- backwards compatibility -->
<a id="schemadeployjob"></a>
<a id="schema_DeployJob"></a>
<a id="tocSdeployjob"></a>
<a id="tocsdeployjob"></a>

```json
{}
```

A deploy Job.

<h2 id="tocS_DeployJobRun">DeployJobRun</h2>
<!-- backwards compatibility -->
<a id="schemadeployjobrun"></a>
<a id="schema_DeployJobRun"></a>
<a id="tocSdeployjobrun"></a>
<a id="tocsdeployjobrun"></a>

```json
{
  "build": "string",
  "failureCause": "FAILURE_CAUSE_UNSPECIFIED",
  "failureMessage": "string",
  "metadata": {
    "cloudRun": {
      "revision": "string",
      "service": "string",
      "serviceUrls": [
        "string"
      ]
    }
  }
}
```

DeployJobRun contains information specific to a deploy `JobRun`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build|string|false|read-only|Output only. The resource name of the Cloud Build `Build` object that is used to deploy. Format is projects/{project}/locations/{location}/builds/{build}.|
|failureCause|string|false|read-only|Output only. The reason the deploy failed. This will always be unspecified while the deploy is in progress or if it succeeded.|
|failureMessage|string|false|read-only|Output only. Additional information about the deploy failure, if available.|
|metadata|[DeployJobRunMetadata](#schemadeployjobrunmetadata)|false|none|Output only. Metadata containing information about the deploy job run.|

#### Enumerated Values

|Property|Value|
|---|---|
|failureCause|FAILURE_CAUSE_UNSPECIFIED|
|failureCause|CLOUD_BUILD_UNAVAILABLE|
|failureCause|EXECUTION_FAILED|
|failureCause|DEADLINE_EXCEEDED|
|failureCause|MISSING_RESOURCES_FOR_CANARY|
|failureCause|CLOUD_BUILD_REQUEST_FAILED|

<h2 id="tocS_DeployJobRunMetadata">DeployJobRunMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeployjobrunmetadata"></a>
<a id="schema_DeployJobRunMetadata"></a>
<a id="tocSdeployjobrunmetadata"></a>
<a id="tocsdeployjobrunmetadata"></a>

```json
{
  "cloudRun": {
    "revision": "string",
    "service": "string",
    "serviceUrls": [
      "string"
    ]
  }
}
```

DeployJobRunMetadata surfaces information associated with a `DeployJobRun` to the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudRun|[CloudRunMetadata](#schemacloudrunmetadata)|false|none|Output only. The name of the Cloud Run Service that is associated with a `DeployJobRun`.|

<h2 id="tocS_DeploymentJobs">DeploymentJobs</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentjobs"></a>
<a id="schema_DeploymentJobs"></a>
<a id="tocSdeploymentjobs"></a>
<a id="tocsdeploymentjobs"></a>

```json
{
  "deployJob": {
    "advanceChildRolloutJob": {},
    "createChildRolloutJob": {},
    "deployJob": {},
    "id": "string",
    "jobRun": "string",
    "skipMessage": "string",
    "state": "STATE_UNSPECIFIED",
    "verifyJob": {}
  },
  "verifyJob": {
    "advanceChildRolloutJob": {},
    "createChildRolloutJob": {},
    "deployJob": {},
    "id": "string",
    "jobRun": "string",
    "skipMessage": "string",
    "state": "STATE_UNSPECIFIED",
    "verifyJob": {}
  }
}
```

Deployment job composition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployJob|[Job](#schemajob)|false|none|Output only. The deploy Job. This is the first job run in the phase.|
|verifyJob|[Job](#schemajob)|false|none|Output only. The verify Job. Runs after a deploy if the deploy succeeds.|

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

<h2 id="tocS_ExecutionConfig">ExecutionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionconfig"></a>
<a id="schema_ExecutionConfig"></a>
<a id="tocSexecutionconfig"></a>
<a id="tocsexecutionconfig"></a>

```json
{
  "artifactStorage": "string",
  "defaultPool": {
    "artifactStorage": "string",
    "serviceAccount": "string"
  },
  "executionTimeout": "string",
  "privatePool": {
    "artifactStorage": "string",
    "serviceAccount": "string",
    "workerPool": "string"
  },
  "serviceAccount": "string",
  "usages": [
    "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
  ],
  "workerPool": "string"
}
```

Configuration of the environment to use when calling Skaffold.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactStorage|string|false|none|Optional. Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.|
|defaultPool|[DefaultPool](#schemadefaultpool)|false|none|Optional. Use default Cloud Build pool.|
|executionTimeout|string(google-duration)|false|none|Optional. Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used.|
|privatePool|[PrivatePool](#schemaprivatepool)|false|none|Optional. Use private Cloud Build pool.|
|serviceAccount|string|false|none|Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used.|
|usages|[string]|false|none|Required. Usages when this configuration should be applied.|
|workerPool|string|false|none|Optional. The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used.|

#### Enumerated Values

|Property|Value|
|---|---|
|usages|EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED|
|usages|RENDER|
|usages|DEPLOY|
|usages|VERIFY|

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

<h2 id="tocS_GatewayServiceMesh">GatewayServiceMesh</h2>
<!-- backwards compatibility -->
<a id="schemagatewayservicemesh"></a>
<a id="schema_GatewayServiceMesh"></a>
<a id="tocSgatewayservicemesh"></a>
<a id="tocsgatewayservicemesh"></a>

```json
{
  "deployment": "string",
  "httpRoute": "string",
  "service": "string"
}
```

Information about the Kubernetes Gateway API service mesh configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployment|string|false|none|Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service.|
|httpRoute|string|false|none|Required. Name of the Gateway API HTTPRoute.|
|service|string|false|none|Required. Name of the Kubernetes Service.|

<h2 id="tocS_GkeCluster">GkeCluster</h2>
<!-- backwards compatibility -->
<a id="schemagkecluster"></a>
<a id="schema_GkeCluster"></a>
<a id="tocSgkecluster"></a>
<a id="tocsgkecluster"></a>

```json
{
  "cluster": "string",
  "internalIp": true
}
```

Information specifying a GKE Cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|string|false|none|Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}.|
|internalIp|boolean|false|none|Optional. If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).|

<h2 id="tocS_IgnoreJobRequest">IgnoreJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemaignorejobrequest"></a>
<a id="schema_IgnoreJobRequest"></a>
<a id="tocSignorejobrequest"></a>
<a id="tocsignorejobrequest"></a>

```json
{
  "jobId": "string",
  "phaseId": "string"
}
```

The request object used by `IgnoreJob`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|string|false|none|Required. The job ID for the Job to ignore.|
|phaseId|string|false|none|Required. The phase ID the Job to ignore belongs to.|

<h2 id="tocS_IgnoreJobResponse">IgnoreJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemaignorejobresponse"></a>
<a id="schema_IgnoreJobResponse"></a>
<a id="tocSignorejobresponse"></a>
<a id="tocsignorejobresponse"></a>

```json
{}
```

The response object from `IgnoreJob`.

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "advanceChildRolloutJob": {},
  "createChildRolloutJob": {},
  "deployJob": {},
  "id": "string",
  "jobRun": "string",
  "skipMessage": "string",
  "state": "STATE_UNSPECIFIED",
  "verifyJob": {}
}
```

Job represents an operation for a `Rollout`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advanceChildRolloutJob|[AdvanceChildRolloutJob](#schemaadvancechildrolloutjob)|false|none|Output only. An advanceChildRollout Job.|
|createChildRolloutJob|[CreateChildRolloutJob](#schemacreatechildrolloutjob)|false|none|Output only. A createChildRollout Job.|
|deployJob|[DeployJob](#schemadeployjob)|false|none|Output only. A deploy Job.|
|id|string|false|read-only|Output only. The ID of the Job.|
|jobRun|string|false|read-only|Output only. The name of the `JobRun` responsible for the most recent invocation of this Job.|
|skipMessage|string|false|read-only|Output only. Additional information on why the Job was skipped, if available.|
|state|string|false|read-only|Output only. The current state of the Job.|
|verifyJob|[VerifyJob](#schemaverifyjob)|false|none|Output only. A verify Job.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|DISABLED|
|state|IN_PROGRESS|
|state|SUCCEEDED|
|state|FAILED|
|state|ABORTED|
|state|SKIPPED|
|state|IGNORED|

<h2 id="tocS_JobRun">JobRun</h2>
<!-- backwards compatibility -->
<a id="schemajobrun"></a>
<a id="schema_JobRun"></a>
<a id="tocSjobrun"></a>
<a id="tocsjobrun"></a>

```json
{
  "advanceChildRolloutJobRun": {
    "rollout": "string",
    "rolloutPhaseId": "string"
  },
  "createChildRolloutJobRun": {
    "rollout": "string",
    "rolloutPhaseId": "string"
  },
  "createTime": "string",
  "deployJobRun": {
    "build": "string",
    "failureCause": "FAILURE_CAUSE_UNSPECIFIED",
    "failureMessage": "string",
    "metadata": {
      "cloudRun": {
        "revision": "string",
        "service": "string",
        "serviceUrls": [
          "string"
        ]
      }
    }
  },
  "endTime": "string",
  "etag": "string",
  "jobId": "string",
  "name": "string",
  "phaseId": "string",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "uid": "string",
  "verifyJobRun": {
    "artifactUri": "string",
    "build": "string",
    "eventLogPath": "string",
    "failureCause": "FAILURE_CAUSE_UNSPECIFIED",
    "failureMessage": "string"
  }
}
```

A `JobRun` resource in the Google Cloud Deploy API. A `JobRun` contains information of a single `Rollout` job evaluation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advanceChildRolloutJobRun|[AdvanceChildRolloutJobRun](#schemaadvancechildrolloutjobrun)|false|none|Output only. Information specific to an advanceChildRollout `JobRun`|
|createChildRolloutJobRun|[CreateChildRolloutJobRun](#schemacreatechildrolloutjobrun)|false|none|Output only. Information specific to a createChildRollout `JobRun`.|
|createTime|string(google-datetime)|false|read-only|Output only. Time at which the `JobRun` was created.|
|deployJobRun|[DeployJobRun](#schemadeployjobrun)|false|none|Output only. Information specific to a deploy `JobRun`.|
|endTime|string(google-datetime)|false|read-only|Output only. Time at which the `JobRun` ended.|
|etag|string|false|read-only|Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|jobId|string|false|read-only|Output only. ID of the `Rollout` job this `JobRun` corresponds to.|
|name|string|false|none|Optional. Name of the `JobRun`. Format is projects/{project}/locations/{location}/ deliveryPipelines/{deliveryPipeline}/releases/{releases}/rollouts/ {rollouts}/jobRuns/{uuid}.|
|phaseId|string|false|read-only|Output only. ID of the `Rollout` phase this `JobRun` belongs in.|
|startTime|string(google-datetime)|false|read-only|Output only. Time at which the `JobRun` was started.|
|state|string|false|read-only|Output only. The current state of the `JobRun`.|
|uid|string|false|read-only|Output only. Unique identifier of the `JobRun`.|
|verifyJobRun|[VerifyJobRun](#schemaverifyjobrun)|false|none|Output only. Information specific to a verify `JobRun`.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|IN_PROGRESS|
|state|SUCCEEDED|
|state|FAILED|
|state|TERMINATING|
|state|TERMINATED|

<h2 id="tocS_JobRunNotificationEvent">JobRunNotificationEvent</h2>
<!-- backwards compatibility -->
<a id="schemajobrunnotificationevent"></a>
<a id="schema_JobRunNotificationEvent"></a>
<a id="tocSjobrunnotificationevent"></a>
<a id="tocsjobrunnotificationevent"></a>

```json
{
  "jobRun": "string",
  "message": "string",
  "pipelineUid": "string",
  "releaseUid": "string",
  "rolloutUid": "string",
  "targetId": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

Payload proto for "clouddeploy.googleapis.com/jobrun_notification" Platform Log event that describes the failure to send JobRun resource update Pub/Sub notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobRun|string|false|none|The name of the `JobRun`.|
|message|string|false|none|Debug message for when a notification fails to send.|
|pipelineUid|string|false|none|Unique identifier of the `DeliveryPipeline`.|
|releaseUid|string|false|none|Unique identifier of the `Release`.|
|rolloutUid|string|false|none|Unique identifier of the `Rollout`.|
|targetId|string|false|none|ID of the `Target`.|
|type|string|false|none|Type of this notification, e.g. for a Pub/Sub failure.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|TYPE_PUBSUB_NOTIFICATION_FAILURE|
|type|TYPE_RENDER_STATUES_CHANGE|

<h2 id="tocS_KubernetesConfig">KubernetesConfig</h2>
<!-- backwards compatibility -->
<a id="schemakubernetesconfig"></a>
<a id="schema_KubernetesConfig"></a>
<a id="tocSkubernetesconfig"></a>
<a id="tocskubernetesconfig"></a>

```json
{
  "gatewayServiceMesh": {
    "deployment": "string",
    "httpRoute": "string",
    "service": "string"
  },
  "serviceNetworking": {
    "deployment": "string",
    "service": "string"
  }
}
```

KubernetesConfig contains the Kubernetes runtime configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gatewayServiceMesh|[GatewayServiceMesh](#schemagatewayservicemesh)|false|none|Kubernetes Gateway API service mesh configuration.|
|serviceNetworking|[ServiceNetworking](#schemaservicenetworking)|false|none|Kubernetes Service networking configuration.|

<h2 id="tocS_ListDeliveryPipelinesResponse">ListDeliveryPipelinesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdeliverypipelinesresponse"></a>
<a id="schema_ListDeliveryPipelinesResponse"></a>
<a id="tocSlistdeliverypipelinesresponse"></a>
<a id="tocslistdeliverypipelinesresponse"></a>

```json
{
  "deliveryPipelines": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "condition": {
        "pipelineReadyCondition": {
          "status": true,
          "updateTime": "string"
        },
        "targetsPresentCondition": {
          "missingTargets": [
            "string"
          ],
          "status": true,
          "updateTime": "string"
        },
        "targetsTypeCondition": {
          "errorDetails": "string",
          "status": true
        }
      },
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "serialPipeline": {
        "stages": [
          {
            "profiles": [
              "string"
            ],
            "strategy": {
              "canary": {
                "canaryDeployment": {
                  "percentages": [
                    0
                  ],
                  "verify": true
                },
                "customCanaryDeployment": {
                  "phaseConfigs": [
                    {
                      "percentage": 0,
                      "phaseId": "string",
                      "profiles": [
                        "string"
                      ],
                      "verify": true
                    }
                  ]
                },
                "runtimeConfig": {
                  "cloudRun": {
                    "automaticTrafficControl": true
                  },
                  "kubernetes": {
                    "gatewayServiceMesh": {
                      "deployment": "string",
                      "httpRoute": "string",
                      "service": "string"
                    },
                    "serviceNetworking": {
                      "deployment": "string",
                      "service": "string"
                    }
                  }
                }
              },
              "standard": {
                "verify": true
              }
            },
            "targetId": "string"
          }
        ]
      },
      "suspended": true,
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

The response object from `ListDeliveryPipelines`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryPipelines|[[DeliveryPipeline](#schemadeliverypipeline)]|false|none|The `DeliveryPipeline` objects.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListJobRunsResponse">ListJobRunsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjobrunsresponse"></a>
<a id="schema_ListJobRunsResponse"></a>
<a id="tocSlistjobrunsresponse"></a>
<a id="tocslistjobrunsresponse"></a>

```json
{
  "jobRuns": [
    {
      "advanceChildRolloutJobRun": {
        "rollout": "string",
        "rolloutPhaseId": "string"
      },
      "createChildRolloutJobRun": {
        "rollout": "string",
        "rolloutPhaseId": "string"
      },
      "createTime": "string",
      "deployJobRun": {
        "build": "string",
        "failureCause": "FAILURE_CAUSE_UNSPECIFIED",
        "failureMessage": "string",
        "metadata": {
          "cloudRun": {
            "revision": "string",
            "service": "string",
            "serviceUrls": [
              "string"
            ]
          }
        }
      },
      "endTime": "string",
      "etag": "string",
      "jobId": "string",
      "name": "string",
      "phaseId": "string",
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "uid": "string",
      "verifyJobRun": {
        "artifactUri": "string",
        "build": "string",
        "eventLogPath": "string",
        "failureCause": "FAILURE_CAUSE_UNSPECIFIED",
        "failureMessage": "string"
      }
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

ListJobRunsResponse is the response object returned by `ListJobRuns`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobRuns|[[JobRun](#schemajobrun)]|false|none|The `JobRun` objects.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|unreachable|[string]|false|none|Locations that could not be reached|

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

<h2 id="tocS_ListReleasesResponse">ListReleasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreleasesresponse"></a>
<a id="schema_ListReleasesResponse"></a>
<a id="tocSlistreleasesresponse"></a>
<a id="tocslistreleasesresponse"></a>

```json
{
  "nextPageToken": "string",
  "releases": [
    {
      "abandoned": true,
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "buildArtifacts": [
        {
          "image": "string",
          "tag": "string"
        }
      ],
      "condition": {
        "releaseReadyCondition": {
          "status": true
        },
        "skaffoldSupportedCondition": {
          "maintenanceModeTime": "string",
          "skaffoldSupportState": "SKAFFOLD_SUPPORT_STATE_UNSPECIFIED",
          "status": true,
          "supportExpirationTime": "string"
        }
      },
      "createTime": "string",
      "deliveryPipelineSnapshot": {
        "annotations": {
          "property1": "string",
          "property2": "string"
        },
        "condition": {
          "pipelineReadyCondition": {
            "status": true,
            "updateTime": "string"
          },
          "targetsPresentCondition": {
            "missingTargets": [
              "string"
            ],
            "status": true,
            "updateTime": "string"
          },
          "targetsTypeCondition": {
            "errorDetails": "string",
            "status": true
          }
        },
        "createTime": "string",
        "description": "string",
        "etag": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "serialPipeline": {
          "stages": [
            {
              "profiles": [
                "string"
              ],
              "strategy": {
                "canary": {
                  "canaryDeployment": {
                    "percentages": [
                      0
                    ],
                    "verify": true
                  },
                  "customCanaryDeployment": {
                    "phaseConfigs": [
                      {
                        "percentage": 0,
                        "phaseId": "string",
                        "profiles": [
                          "string"
                        ],
                        "verify": true
                      }
                    ]
                  },
                  "runtimeConfig": {
                    "cloudRun": {
                      "automaticTrafficControl": true
                    },
                    "kubernetes": {
                      "gatewayServiceMesh": {
                        "deployment": "string",
                        "httpRoute": "string",
                        "service": "string"
                      },
                      "serviceNetworking": {
                        "deployment": "string",
                        "service": "string"
                      }
                    }
                  }
                },
                "standard": {
                  "verify": true
                }
              },
              "targetId": "string"
            }
          ]
        },
        "suspended": true,
        "uid": "string",
        "updateTime": "string"
      },
      "description": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "renderEndTime": "string",
      "renderStartTime": "string",
      "renderState": "RENDER_STATE_UNSPECIFIED",
      "skaffoldConfigPath": "string",
      "skaffoldConfigUri": "string",
      "skaffoldVersion": "string",
      "targetArtifacts": {
        "property1": {
          "artifactUri": "string",
          "manifestPath": "string",
          "phaseArtifacts": {
            "property1": {
              "manifestPath": "string",
              "skaffoldConfigPath": "string"
            },
            "property2": {
              "manifestPath": "string",
              "skaffoldConfigPath": "string"
            }
          },
          "skaffoldConfigPath": "string"
        },
        "property2": {
          "artifactUri": "string",
          "manifestPath": "string",
          "phaseArtifacts": {
            "property1": {
              "manifestPath": "string",
              "skaffoldConfigPath": "string"
            },
            "property2": {
              "manifestPath": "string",
              "skaffoldConfigPath": "string"
            }
          },
          "skaffoldConfigPath": "string"
        }
      },
      "targetRenders": {
        "property1": {
          "failureCause": "FAILURE_CAUSE_UNSPECIFIED",
          "failureMessage": "string",
          "metadata": {
            "cloudRun": {
              "service": "string"
            }
          },
          "renderingBuild": "string",
          "renderingState": "TARGET_RENDER_STATE_UNSPECIFIED"
        },
        "property2": {
          "failureCause": "FAILURE_CAUSE_UNSPECIFIED",
          "failureMessage": "string",
          "metadata": {
            "cloudRun": {
              "service": "string"
            }
          },
          "renderingBuild": "string",
          "renderingState": "TARGET_RENDER_STATE_UNSPECIFIED"
        }
      },
      "targetSnapshots": [
        {
          "annotations": {
            "property1": "string",
            "property2": "string"
          },
          "anthosCluster": {
            "membership": "string"
          },
          "createTime": "string",
          "description": "string",
          "etag": "string",
          "executionConfigs": [
            {
              "artifactStorage": "string",
              "defaultPool": {
                "artifactStorage": "string",
                "serviceAccount": "string"
              },
              "executionTimeout": "string",
              "privatePool": {
                "artifactStorage": "string",
                "serviceAccount": "string",
                "workerPool": "string"
              },
              "serviceAccount": "string",
              "usages": [
                "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
              ],
              "workerPool": "string"
            }
          ],
          "gke": {
            "cluster": "string",
            "internalIp": true
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "multiTarget": {
            "targetIds": [
              "string"
            ]
          },
          "name": "string",
          "requireApproval": true,
          "run": {
            "location": "string"
          },
          "targetId": "string",
          "uid": "string",
          "updateTime": "string"
        }
      ],
      "uid": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

The response object from `ListReleases`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|releases|[[Release](#schemarelease)]|false|none|The `Release` objects.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListRolloutsResponse">ListRolloutsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrolloutsresponse"></a>
<a id="schema_ListRolloutsResponse"></a>
<a id="tocSlistrolloutsresponse"></a>
<a id="tocslistrolloutsresponse"></a>

```json
{
  "nextPageToken": "string",
  "rollouts": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "approvalState": "APPROVAL_STATE_UNSPECIFIED",
      "approveTime": "string",
      "controllerRollout": "string",
      "createTime": "string",
      "deployEndTime": "string",
      "deployFailureCause": "FAILURE_CAUSE_UNSPECIFIED",
      "deployStartTime": "string",
      "deployingBuild": "string",
      "description": "string",
      "enqueueTime": "string",
      "etag": "string",
      "failureReason": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "metadata": {
        "cloudRun": {
          "revision": "string",
          "service": "string",
          "serviceUrls": [
            "string"
          ]
        }
      },
      "name": "string",
      "phases": [
        {
          "childRolloutJobs": {
            "advanceRolloutJobs": [
              {
                "advanceChildRolloutJob": {},
                "createChildRolloutJob": {},
                "deployJob": {},
                "id": "string",
                "jobRun": "string",
                "skipMessage": "string",
                "state": "STATE_UNSPECIFIED",
                "verifyJob": {}
              }
            ],
            "createRolloutJobs": [
              {
                "advanceChildRolloutJob": {},
                "createChildRolloutJob": {},
                "deployJob": {},
                "id": "string",
                "jobRun": "string",
                "skipMessage": "string",
                "state": "STATE_UNSPECIFIED",
                "verifyJob": {}
              }
            ]
          },
          "deploymentJobs": {
            "deployJob": {
              "advanceChildRolloutJob": {},
              "createChildRolloutJob": {},
              "deployJob": {},
              "id": "string",
              "jobRun": "string",
              "skipMessage": "string",
              "state": "STATE_UNSPECIFIED",
              "verifyJob": {}
            },
            "verifyJob": {
              "advanceChildRolloutJob": {},
              "createChildRolloutJob": {},
              "deployJob": {},
              "id": "string",
              "jobRun": "string",
              "skipMessage": "string",
              "state": "STATE_UNSPECIFIED",
              "verifyJob": {}
            }
          },
          "id": "string",
          "skipMessage": "string",
          "state": "STATE_UNSPECIFIED"
        }
      ],
      "state": "STATE_UNSPECIFIED",
      "targetId": "string",
      "uid": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

ListRolloutsResponse is the response object reutrned by `ListRollouts`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|rollouts|[[Rollout](#schemarollout)]|false|none|The `Rollout` objects.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListTargetsResponse">ListTargetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttargetsresponse"></a>
<a id="schema_ListTargetsResponse"></a>
<a id="tocSlisttargetsresponse"></a>
<a id="tocslisttargetsresponse"></a>

```json
{
  "nextPageToken": "string",
  "targets": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "anthosCluster": {
        "membership": "string"
      },
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "executionConfigs": [
        {
          "artifactStorage": "string",
          "defaultPool": {
            "artifactStorage": "string",
            "serviceAccount": "string"
          },
          "executionTimeout": "string",
          "privatePool": {
            "artifactStorage": "string",
            "serviceAccount": "string",
            "workerPool": "string"
          },
          "serviceAccount": "string",
          "usages": [
            "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
          ],
          "workerPool": "string"
        }
      ],
      "gke": {
        "cluster": "string",
        "internalIp": true
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "multiTarget": {
        "targetIds": [
          "string"
        ]
      },
      "name": "string",
      "requireApproval": true,
      "run": {
        "location": "string"
      },
      "targetId": "string",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

The response object from `ListTargets`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|targets|[[Target](#schematarget)]|false|none|The `Target` objects.|
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

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "cloudRun": {
    "revision": "string",
    "service": "string",
    "serviceUrls": [
      "string"
    ]
  }
}
```

Metadata includes information associated with a `Rollout`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudRun|[CloudRunMetadata](#schemacloudrunmetadata)|false|none|Output only. The name of the Cloud Run Service that is associated with a `Rollout`.|

<h2 id="tocS_MultiTarget">MultiTarget</h2>
<!-- backwards compatibility -->
<a id="schemamultitarget"></a>
<a id="schema_MultiTarget"></a>
<a id="tocSmultitarget"></a>
<a id="tocsmultitarget"></a>

```json
{
  "targetIds": [
    "string"
  ]
}
```

Information specifying a multiTarget.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetIds|[string]|false|none|Required. The target_ids of this multiTarget.|

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

<h2 id="tocS_Phase">Phase</h2>
<!-- backwards compatibility -->
<a id="schemaphase"></a>
<a id="schema_Phase"></a>
<a id="tocSphase"></a>
<a id="tocsphase"></a>

```json
{
  "childRolloutJobs": {
    "advanceRolloutJobs": [
      {
        "advanceChildRolloutJob": {},
        "createChildRolloutJob": {},
        "deployJob": {},
        "id": "string",
        "jobRun": "string",
        "skipMessage": "string",
        "state": "STATE_UNSPECIFIED",
        "verifyJob": {}
      }
    ],
    "createRolloutJobs": [
      {
        "advanceChildRolloutJob": {},
        "createChildRolloutJob": {},
        "deployJob": {},
        "id": "string",
        "jobRun": "string",
        "skipMessage": "string",
        "state": "STATE_UNSPECIFIED",
        "verifyJob": {}
      }
    ]
  },
  "deploymentJobs": {
    "deployJob": {
      "advanceChildRolloutJob": {},
      "createChildRolloutJob": {},
      "deployJob": {},
      "id": "string",
      "jobRun": "string",
      "skipMessage": "string",
      "state": "STATE_UNSPECIFIED",
      "verifyJob": {}
    },
    "verifyJob": {
      "advanceChildRolloutJob": {},
      "createChildRolloutJob": {},
      "deployJob": {},
      "id": "string",
      "jobRun": "string",
      "skipMessage": "string",
      "state": "STATE_UNSPECIFIED",
      "verifyJob": {}
    }
  },
  "id": "string",
  "skipMessage": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Phase represents a collection of jobs that are logically grouped together for a `Rollout`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childRolloutJobs|[ChildRolloutJobs](#schemachildrolloutjobs)|false|none|Output only. ChildRollout job composition.|
|deploymentJobs|[DeploymentJobs](#schemadeploymentjobs)|false|none|Output only. Deployment job composition.|
|id|string|false|read-only|Output only. The ID of the Phase.|
|skipMessage|string|false|read-only|Output only. Additional information on why the Phase was skipped, if available.|
|state|string|false|read-only|Output only. Current state of the Phase.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|IN_PROGRESS|
|state|SUCCEEDED|
|state|FAILED|
|state|ABORTED|
|state|SKIPPED|

<h2 id="tocS_PhaseArtifact">PhaseArtifact</h2>
<!-- backwards compatibility -->
<a id="schemaphaseartifact"></a>
<a id="schema_PhaseArtifact"></a>
<a id="tocSphaseartifact"></a>
<a id="tocsphaseartifact"></a>

```json
{
  "manifestPath": "string",
  "skaffoldConfigPath": "string"
}
```

Contains the paths to the artifacts, relative to the URI, for a phase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|manifestPath|string|false|read-only|Output only. File path of the rendered manifest relative to the URI.|
|skaffoldConfigPath|string|false|read-only|Output only. File path of the resolved Skaffold configuration relative to the URI.|

<h2 id="tocS_PhaseConfig">PhaseConfig</h2>
<!-- backwards compatibility -->
<a id="schemaphaseconfig"></a>
<a id="schema_PhaseConfig"></a>
<a id="tocSphaseconfig"></a>
<a id="tocsphaseconfig"></a>

```json
{
  "percentage": 0,
  "phaseId": "string",
  "profiles": [
    "string"
  ],
  "verify": true
}
```

PhaseConfig represents the configuration for a phase in the custom canary deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|percentage|integer(int32)|false|none|Required. Percentage deployment for the phase.|
|phaseId|string|false|none|Required. The ID to assign to the `Rollout` phase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.|
|profiles|[string]|false|none|Skaffold profiles to use when rendering the manifest for this phase. These are in addition to the profiles list specified in the `DeliveryPipeline` stage.|
|verify|boolean|false|none|Whether to run verify tests after the deployment.|

<h2 id="tocS_PipelineCondition">PipelineCondition</h2>
<!-- backwards compatibility -->
<a id="schemapipelinecondition"></a>
<a id="schema_PipelineCondition"></a>
<a id="tocSpipelinecondition"></a>
<a id="tocspipelinecondition"></a>

```json
{
  "pipelineReadyCondition": {
    "status": true,
    "updateTime": "string"
  },
  "targetsPresentCondition": {
    "missingTargets": [
      "string"
    ],
    "status": true,
    "updateTime": "string"
  },
  "targetsTypeCondition": {
    "errorDetails": "string",
    "status": true
  }
}
```

PipelineCondition contains all conditions relevant to a Delivery Pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineReadyCondition|[PipelineReadyCondition](#schemapipelinereadycondition)|false|none|Details around the Pipeline's overall status.|
|targetsPresentCondition|[TargetsPresentCondition](#schematargetspresentcondition)|false|none|Details around targets enumerated in the pipeline.|
|targetsTypeCondition|[TargetsTypeCondition](#schematargetstypecondition)|false|none|Details on the whether the targets enumerated in the pipeline are of the same type.|

<h2 id="tocS_PipelineReadyCondition">PipelineReadyCondition</h2>
<!-- backwards compatibility -->
<a id="schemapipelinereadycondition"></a>
<a id="schema_PipelineReadyCondition"></a>
<a id="tocSpipelinereadycondition"></a>
<a id="tocspipelinereadycondition"></a>

```json
{
  "status": true,
  "updateTime": "string"
}
```

PipelineReadyCondition contains information around the status of the Pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|boolean|false|none|True if the Pipeline is in a valid state. Otherwise at least one condition in `PipelineCondition` is in an invalid state. Iterate over those conditions and see which condition(s) has status = false to find out what is wrong with the Pipeline.|
|updateTime|string(google-datetime)|false|none|Last time the condition was updated.|

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

<h2 id="tocS_PrivatePool">PrivatePool</h2>
<!-- backwards compatibility -->
<a id="schemaprivatepool"></a>
<a id="schema_PrivatePool"></a>
<a id="tocSprivatepool"></a>
<a id="tocsprivatepool"></a>

```json
{
  "artifactStorage": "string",
  "serviceAccount": "string",
  "workerPool": "string"
}
```

Execution using a private Cloud Build pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactStorage|string|false|none|Optional. Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.|
|serviceAccount|string|false|none|Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used.|
|workerPool|string|false|none|Required. Resource name of the Cloud Build worker pool to use. The format is `projects/{project}/locations/{location}/workerPools/{pool}`.|

<h2 id="tocS_Release">Release</h2>
<!-- backwards compatibility -->
<a id="schemarelease"></a>
<a id="schema_Release"></a>
<a id="tocSrelease"></a>
<a id="tocsrelease"></a>

```json
{
  "abandoned": true,
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "buildArtifacts": [
    {
      "image": "string",
      "tag": "string"
    }
  ],
  "condition": {
    "releaseReadyCondition": {
      "status": true
    },
    "skaffoldSupportedCondition": {
      "maintenanceModeTime": "string",
      "skaffoldSupportState": "SKAFFOLD_SUPPORT_STATE_UNSPECIFIED",
      "status": true,
      "supportExpirationTime": "string"
    }
  },
  "createTime": "string",
  "deliveryPipelineSnapshot": {
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "condition": {
      "pipelineReadyCondition": {
        "status": true,
        "updateTime": "string"
      },
      "targetsPresentCondition": {
        "missingTargets": [
          "string"
        ],
        "status": true,
        "updateTime": "string"
      },
      "targetsTypeCondition": {
        "errorDetails": "string",
        "status": true
      }
    },
    "createTime": "string",
    "description": "string",
    "etag": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "serialPipeline": {
      "stages": [
        {
          "profiles": [
            "string"
          ],
          "strategy": {
            "canary": {
              "canaryDeployment": {
                "percentages": [
                  0
                ],
                "verify": true
              },
              "customCanaryDeployment": {
                "phaseConfigs": [
                  {
                    "percentage": 0,
                    "phaseId": "string",
                    "profiles": [
                      "string"
                    ],
                    "verify": true
                  }
                ]
              },
              "runtimeConfig": {
                "cloudRun": {
                  "automaticTrafficControl": true
                },
                "kubernetes": {
                  "gatewayServiceMesh": {
                    "deployment": "string",
                    "httpRoute": "string",
                    "service": "string"
                  },
                  "serviceNetworking": {
                    "deployment": "string",
                    "service": "string"
                  }
                }
              }
            },
            "standard": {
              "verify": true
            }
          },
          "targetId": "string"
        }
      ]
    },
    "suspended": true,
    "uid": "string",
    "updateTime": "string"
  },
  "description": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "renderEndTime": "string",
  "renderStartTime": "string",
  "renderState": "RENDER_STATE_UNSPECIFIED",
  "skaffoldConfigPath": "string",
  "skaffoldConfigUri": "string",
  "skaffoldVersion": "string",
  "targetArtifacts": {
    "property1": {
      "artifactUri": "string",
      "manifestPath": "string",
      "phaseArtifacts": {
        "property1": {
          "manifestPath": "string",
          "skaffoldConfigPath": "string"
        },
        "property2": {
          "manifestPath": "string",
          "skaffoldConfigPath": "string"
        }
      },
      "skaffoldConfigPath": "string"
    },
    "property2": {
      "artifactUri": "string",
      "manifestPath": "string",
      "phaseArtifacts": {
        "property1": {
          "manifestPath": "string",
          "skaffoldConfigPath": "string"
        },
        "property2": {
          "manifestPath": "string",
          "skaffoldConfigPath": "string"
        }
      },
      "skaffoldConfigPath": "string"
    }
  },
  "targetRenders": {
    "property1": {
      "failureCause": "FAILURE_CAUSE_UNSPECIFIED",
      "failureMessage": "string",
      "metadata": {
        "cloudRun": {
          "service": "string"
        }
      },
      "renderingBuild": "string",
      "renderingState": "TARGET_RENDER_STATE_UNSPECIFIED"
    },
    "property2": {
      "failureCause": "FAILURE_CAUSE_UNSPECIFIED",
      "failureMessage": "string",
      "metadata": {
        "cloudRun": {
          "service": "string"
        }
      },
      "renderingBuild": "string",
      "renderingState": "TARGET_RENDER_STATE_UNSPECIFIED"
    }
  },
  "targetSnapshots": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "anthosCluster": {
        "membership": "string"
      },
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "executionConfigs": [
        {
          "artifactStorage": "string",
          "defaultPool": {
            "artifactStorage": "string",
            "serviceAccount": "string"
          },
          "executionTimeout": "string",
          "privatePool": {
            "artifactStorage": "string",
            "serviceAccount": "string",
            "workerPool": "string"
          },
          "serviceAccount": "string",
          "usages": [
            "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
          ],
          "workerPool": "string"
        }
      ],
      "gke": {
        "cluster": "string",
        "internalIp": true
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "multiTarget": {
        "targetIds": [
          "string"
        ]
      },
      "name": "string",
      "requireApproval": true,
      "run": {
        "location": "string"
      },
      "targetId": "string",
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "uid": "string"
}
```

A `Release` resource in the Google Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abandoned|boolean|false|read-only|Output only. Indicates whether this is an abandoned release.|
|annotations|object|false|none|User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.|
|buildArtifacts|[[BuildArtifact](#schemabuildartifact)]|false|none|List of artifacts to pass through to Skaffold command.|
|condition|[ReleaseCondition](#schemareleasecondition)|false|none|Output only. Information around the state of the Release.|
|createTime|string(google-datetime)|false|read-only|Output only. Time at which the `Release` was created.|
|deliveryPipelineSnapshot|[DeliveryPipeline](#schemadeliverypipeline)|false|none|Output only. Snapshot of the parent pipeline taken at release creation time.|
|description|string|false|none|Description of the `Release`. Max length is 255 characters.|
|etag|string|false|none|This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|labels|object|false|none|Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.|
|name|string|false|none|Optional. Name of the `Release`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/a-z{0,62}.|
|renderEndTime|string(google-datetime)|false|read-only|Output only. Time at which the render completed.|
|renderStartTime|string(google-datetime)|false|read-only|Output only. Time at which the render began.|
|renderState|string|false|read-only|Output only. Current state of the render operation.|
|skaffoldConfigPath|string|false|none|Filepath of the Skaffold config inside of the config URI.|
|skaffoldConfigUri|string|false|none|Cloud Storage URI of tar.gz archive containing Skaffold configuration.|
|skaffoldVersion|string|false|none|The Skaffold version to use when operating on this release, such as "1.20.0". Not all versions are valid; Google Cloud Deploy supports a specific set of versions. If unset, the most recent supported Skaffold version will be used.|
|targetArtifacts|object|false|read-only|Output only. Map from target ID to the target artifacts created during the render operation.|
|targetRenders|object|false|read-only|Output only. Map from target ID to details of the render operation for that target.|
|targetSnapshots|[[Target](#schematarget)]|false|read-only|Output only. Snapshot of the targets taken at release creation time.|
|uid|string|false|read-only|Output only. Unique identifier of the `Release`.|

#### Enumerated Values

|Property|Value|
|---|---|
|renderState|RENDER_STATE_UNSPECIFIED|
|renderState|SUCCEEDED|
|renderState|FAILED|
|renderState|IN_PROGRESS|

<h2 id="tocS_ReleaseCondition">ReleaseCondition</h2>
<!-- backwards compatibility -->
<a id="schemareleasecondition"></a>
<a id="schema_ReleaseCondition"></a>
<a id="tocSreleasecondition"></a>
<a id="tocsreleasecondition"></a>

```json
{
  "releaseReadyCondition": {
    "status": true
  },
  "skaffoldSupportedCondition": {
    "maintenanceModeTime": "string",
    "skaffoldSupportState": "SKAFFOLD_SUPPORT_STATE_UNSPECIFIED",
    "status": true,
    "supportExpirationTime": "string"
  }
}
```

ReleaseCondition contains all conditions relevant to a Release.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|releaseReadyCondition|[ReleaseReadyCondition](#schemareleasereadycondition)|false|none|Details around the Releases's overall status.|
|skaffoldSupportedCondition|[SkaffoldSupportedCondition](#schemaskaffoldsupportedcondition)|false|none|Details around the support state of the release's skaffold version.|

<h2 id="tocS_ReleaseNotificationEvent">ReleaseNotificationEvent</h2>
<!-- backwards compatibility -->
<a id="schemareleasenotificationevent"></a>
<a id="schema_ReleaseNotificationEvent"></a>
<a id="tocSreleasenotificationevent"></a>
<a id="tocsreleasenotificationevent"></a>

```json
{
  "message": "string",
  "release": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

Payload proto for "clouddeploy.googleapis.com/release_notification" Platform Log event that describes the failure to send release status change Pub/Sub notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Debug message for when a notification fails to send.|
|release|string|false|none|The name of the `Release`.|
|type|string|false|none|Type of this notification, e.g. for a Pub/Sub failure.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|TYPE_PUBSUB_NOTIFICATION_FAILURE|
|type|TYPE_RENDER_STATUES_CHANGE|

<h2 id="tocS_ReleaseReadyCondition">ReleaseReadyCondition</h2>
<!-- backwards compatibility -->
<a id="schemareleasereadycondition"></a>
<a id="schema_ReleaseReadyCondition"></a>
<a id="tocSreleasereadycondition"></a>
<a id="tocsreleasereadycondition"></a>

```json
{
  "status": true
}
```

ReleaseReadyCondition contains information around the status of the Release. If a release is not ready, you cannot create a rollout with the release.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|boolean|false|none|True if the Release is in a valid state. Otherwise at least one condition in `ReleaseCondition` is in an invalid state. Iterate over those conditions and see which condition(s) has status = false to find out what is wrong with the Release.|

<h2 id="tocS_ReleaseRenderEvent">ReleaseRenderEvent</h2>
<!-- backwards compatibility -->
<a id="schemareleaserenderevent"></a>
<a id="schema_ReleaseRenderEvent"></a>
<a id="tocSreleaserenderevent"></a>
<a id="tocsreleaserenderevent"></a>

```json
{
  "message": "string",
  "release": "string"
}
```

Payload proto for "clouddeploy.googleapis.com/release_render" Platform Log event that describes the render status change.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Debug message for when a render transition occurs. Provides further details as rendering progresses through render states.|
|release|string|false|none|The name of the `Release`.|

<h2 id="tocS_RenderMetadata">RenderMetadata</h2>
<!-- backwards compatibility -->
<a id="schemarendermetadata"></a>
<a id="schema_RenderMetadata"></a>
<a id="tocSrendermetadata"></a>
<a id="tocsrendermetadata"></a>

```json
{
  "cloudRun": {
    "service": "string"
  }
}
```

RenderMetadata includes information associated with a `Release` render.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudRun|[CloudRunRenderMetadata](#schemacloudrunrendermetadata)|false|none|Output only. Metadata associated with rendering for Cloud Run.|

<h2 id="tocS_RetryJobRequest">RetryJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemaretryjobrequest"></a>
<a id="schema_RetryJobRequest"></a>
<a id="tocSretryjobrequest"></a>
<a id="tocsretryjobrequest"></a>

```json
{
  "jobId": "string",
  "phaseId": "string"
}
```

RetryJobRequest is the request object used by `RetryJob`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|string|false|none|Required. The job ID for the Job to retry.|
|phaseId|string|false|none|Required. The phase ID the Job to retry belongs to.|

<h2 id="tocS_RetryJobResponse">RetryJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemaretryjobresponse"></a>
<a id="schema_RetryJobResponse"></a>
<a id="tocSretryjobresponse"></a>
<a id="tocsretryjobresponse"></a>

```json
{}
```

The response object from 'RetryJob'.

<h2 id="tocS_Rollout">Rollout</h2>
<!-- backwards compatibility -->
<a id="schemarollout"></a>
<a id="schema_Rollout"></a>
<a id="tocSrollout"></a>
<a id="tocsrollout"></a>

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "approvalState": "APPROVAL_STATE_UNSPECIFIED",
  "approveTime": "string",
  "controllerRollout": "string",
  "createTime": "string",
  "deployEndTime": "string",
  "deployFailureCause": "FAILURE_CAUSE_UNSPECIFIED",
  "deployStartTime": "string",
  "deployingBuild": "string",
  "description": "string",
  "enqueueTime": "string",
  "etag": "string",
  "failureReason": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "metadata": {
    "cloudRun": {
      "revision": "string",
      "service": "string",
      "serviceUrls": [
        "string"
      ]
    }
  },
  "name": "string",
  "phases": [
    {
      "childRolloutJobs": {
        "advanceRolloutJobs": [
          {
            "advanceChildRolloutJob": {},
            "createChildRolloutJob": {},
            "deployJob": {},
            "id": "string",
            "jobRun": "string",
            "skipMessage": "string",
            "state": "STATE_UNSPECIFIED",
            "verifyJob": {}
          }
        ],
        "createRolloutJobs": [
          {
            "advanceChildRolloutJob": {},
            "createChildRolloutJob": {},
            "deployJob": {},
            "id": "string",
            "jobRun": "string",
            "skipMessage": "string",
            "state": "STATE_UNSPECIFIED",
            "verifyJob": {}
          }
        ]
      },
      "deploymentJobs": {
        "deployJob": {
          "advanceChildRolloutJob": {},
          "createChildRolloutJob": {},
          "deployJob": {},
          "id": "string",
          "jobRun": "string",
          "skipMessage": "string",
          "state": "STATE_UNSPECIFIED",
          "verifyJob": {}
        },
        "verifyJob": {
          "advanceChildRolloutJob": {},
          "createChildRolloutJob": {},
          "deployJob": {},
          "id": "string",
          "jobRun": "string",
          "skipMessage": "string",
          "state": "STATE_UNSPECIFIED",
          "verifyJob": {}
        }
      },
      "id": "string",
      "skipMessage": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "targetId": "string",
  "uid": "string"
}
```

A `Rollout` resource in the Google Cloud Deploy API. A `Rollout` contains information around a specific deployment to a `Target`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.|
|approvalState|string|false|read-only|Output only. Approval state of the `Rollout`.|
|approveTime|string(google-datetime)|false|read-only|Output only. Time at which the `Rollout` was approved.|
|controllerRollout|string|false|read-only|Output only. Name of the `ControllerRollout`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/a-z{0,62}.|
|createTime|string(google-datetime)|false|read-only|Output only. Time at which the `Rollout` was created.|
|deployEndTime|string(google-datetime)|false|read-only|Output only. Time at which the `Rollout` finished deploying.|
|deployFailureCause|string|false|read-only|Output only. The reason this rollout failed. This will always be unspecified while the rollout is in progress.|
|deployStartTime|string(google-datetime)|false|read-only|Output only. Time at which the `Rollout` started deploying.|
|deployingBuild|string|false|read-only|Output only. The resource name of the Cloud Build `Build` object that is used to deploy the Rollout. Format is `projects/{project}/locations/{location}/builds/{build}`.|
|description|string|false|none|Description of the `Rollout` for user purposes. Max length is 255 characters.|
|enqueueTime|string(google-datetime)|false|read-only|Output only. Time at which the `Rollout` was enqueued.|
|etag|string|false|none|This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|failureReason|string|false|read-only|Output only. Additional information about the rollout failure, if available.|
|labels|object|false|none|Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.|
|metadata|[Metadata](#schemametadata)|false|none|Output only. Metadata contains information about the rollout.|
|name|string|false|none|Optional. Name of the `Rollout`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/a-z{0,62}.|
|phases|[[Phase](#schemaphase)]|false|read-only|Output only. The phases that represent the workflows of this `Rollout`.|
|state|string|false|read-only|Output only. Current state of the `Rollout`.|
|targetId|string|false|none|Required. The ID of Target to which this `Rollout` is deploying.|
|uid|string|false|read-only|Output only. Unique identifier of the `Rollout`.|

#### Enumerated Values

|Property|Value|
|---|---|
|approvalState|APPROVAL_STATE_UNSPECIFIED|
|approvalState|NEEDS_APPROVAL|
|approvalState|DOES_NOT_NEED_APPROVAL|
|approvalState|APPROVED|
|approvalState|REJECTED|
|deployFailureCause|FAILURE_CAUSE_UNSPECIFIED|
|deployFailureCause|CLOUD_BUILD_UNAVAILABLE|
|deployFailureCause|EXECUTION_FAILED|
|deployFailureCause|DEADLINE_EXCEEDED|
|deployFailureCause|RELEASE_FAILED|
|deployFailureCause|RELEASE_ABANDONED|
|deployFailureCause|VERIFICATION_CONFIG_NOT_FOUND|
|deployFailureCause|CLOUD_BUILD_REQUEST_FAILED|
|state|STATE_UNSPECIFIED|
|state|SUCCEEDED|
|state|FAILED|
|state|IN_PROGRESS|
|state|PENDING_APPROVAL|
|state|APPROVAL_REJECTED|
|state|PENDING|
|state|PENDING_RELEASE|
|state|CANCELLING|
|state|CANCELLED|
|state|HALTED|

<h2 id="tocS_RolloutNotificationEvent">RolloutNotificationEvent</h2>
<!-- backwards compatibility -->
<a id="schemarolloutnotificationevent"></a>
<a id="schema_RolloutNotificationEvent"></a>
<a id="tocSrolloutnotificationevent"></a>
<a id="tocsrolloutnotificationevent"></a>

```json
{
  "message": "string",
  "pipelineUid": "string",
  "releaseUid": "string",
  "rollout": "string",
  "targetId": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

Payload proto for "clouddeploy.googleapis.com/rollout_notification" Platform Log event that describes the failure to send rollout status change Pub/Sub notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Debug message for when a notification fails to send.|
|pipelineUid|string|false|none|Unique identifier of the `DeliveryPipeline`.|
|releaseUid|string|false|none|Unique identifier of the `Release`.|
|rollout|string|false|none|The name of the `Rollout`.|
|targetId|string|false|none|ID of the `Target` that the rollout is deployed to.|
|type|string|false|none|Type of this notification, e.g. for a Pub/Sub failure.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|TYPE_PUBSUB_NOTIFICATION_FAILURE|
|type|TYPE_RENDER_STATUES_CHANGE|

<h2 id="tocS_RuntimeConfig">RuntimeConfig</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeconfig"></a>
<a id="schema_RuntimeConfig"></a>
<a id="tocSruntimeconfig"></a>
<a id="tocsruntimeconfig"></a>

```json
{
  "cloudRun": {
    "automaticTrafficControl": true
  },
  "kubernetes": {
    "gatewayServiceMesh": {
      "deployment": "string",
      "httpRoute": "string",
      "service": "string"
    },
    "serviceNetworking": {
      "deployment": "string",
      "service": "string"
    }
  }
}
```

RuntimeConfig contains the runtime specific configurations for a deployment strategy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudRun|[CloudRunConfig](#schemacloudrunconfig)|false|none|Cloud Run runtime configuration.|
|kubernetes|[KubernetesConfig](#schemakubernetesconfig)|false|none|Kubernetes runtime configuration.|

<h2 id="tocS_SerialPipeline">SerialPipeline</h2>
<!-- backwards compatibility -->
<a id="schemaserialpipeline"></a>
<a id="schema_SerialPipeline"></a>
<a id="tocSserialpipeline"></a>
<a id="tocsserialpipeline"></a>

```json
{
  "stages": [
    {
      "profiles": [
        "string"
      ],
      "strategy": {
        "canary": {
          "canaryDeployment": {
            "percentages": [
              0
            ],
            "verify": true
          },
          "customCanaryDeployment": {
            "phaseConfigs": [
              {
                "percentage": 0,
                "phaseId": "string",
                "profiles": [
                  "string"
                ],
                "verify": true
              }
            ]
          },
          "runtimeConfig": {
            "cloudRun": {
              "automaticTrafficControl": true
            },
            "kubernetes": {
              "gatewayServiceMesh": {
                "deployment": "string",
                "httpRoute": "string",
                "service": "string"
              },
              "serviceNetworking": {
                "deployment": "string",
                "service": "string"
              }
            }
          }
        },
        "standard": {
          "verify": true
        }
      },
      "targetId": "string"
    }
  ]
}
```

SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stages|[[Stage](#schemastage)]|false|none|Each stage specifies configuration for a `Target`. The ordering of this list defines the promotion flow.|

<h2 id="tocS_ServiceNetworking">ServiceNetworking</h2>
<!-- backwards compatibility -->
<a id="schemaservicenetworking"></a>
<a id="schema_ServiceNetworking"></a>
<a id="tocSservicenetworking"></a>
<a id="tocsservicenetworking"></a>

```json
{
  "deployment": "string",
  "service": "string"
}
```

Information about the Kubernetes Service networking configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployment|string|false|none|Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service.|
|service|string|false|none|Required. Name of the Kubernetes Service.|

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

<h2 id="tocS_SkaffoldSupportedCondition">SkaffoldSupportedCondition</h2>
<!-- backwards compatibility -->
<a id="schemaskaffoldsupportedcondition"></a>
<a id="schema_SkaffoldSupportedCondition"></a>
<a id="tocSskaffoldsupportedcondition"></a>
<a id="tocsskaffoldsupportedcondition"></a>

```json
{
  "maintenanceModeTime": "string",
  "skaffoldSupportState": "SKAFFOLD_SUPPORT_STATE_UNSPECIFIED",
  "status": true,
  "supportExpirationTime": "string"
}
```

SkaffoldSupportedCondition contains information about when support for the release's version of skaffold ends.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maintenanceModeTime|string(google-datetime)|false|none|The time at which this release's version of skaffold will enter maintenance mode.|
|skaffoldSupportState|string|false|none|The skaffold support state for this release's version of skaffold.|
|status|boolean|false|none|True if the version of skaffold used by this release is supported.|
|supportExpirationTime|string(google-datetime)|false|none|The time at which this release's version of skaffold will no longer be supported.|

#### Enumerated Values

|Property|Value|
|---|---|
|skaffoldSupportState|SKAFFOLD_SUPPORT_STATE_UNSPECIFIED|
|skaffoldSupportState|SKAFFOLD_SUPPORT_STATE_SUPPORTED|
|skaffoldSupportState|SKAFFOLD_SUPPORT_STATE_MAINTENANCE_MODE|
|skaffoldSupportState|SKAFFOLD_SUPPORT_STATE_UNSUPPORTED|

<h2 id="tocS_SkaffoldVersion">SkaffoldVersion</h2>
<!-- backwards compatibility -->
<a id="schemaskaffoldversion"></a>
<a id="schema_SkaffoldVersion"></a>
<a id="tocSskaffoldversion"></a>
<a id="tocsskaffoldversion"></a>

```json
{
  "maintenanceModeTime": "string",
  "supportEndDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "supportExpirationTime": "string",
  "version": "string"
}
```

Details of a supported Skaffold version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maintenanceModeTime|string(google-datetime)|false|none|The time at which this version of skaffold will enter maintenance mode.|
|supportEndDate|[Date](#schemadate)|false|none|Date when this version is expected to no longer be supported.|
|supportExpirationTime|string(google-datetime)|false|none|The time at which this version of skaffold will no longer be supported.|
|version|string|false|none|Release version number. For example, "1.20.3".|

<h2 id="tocS_Stage">Stage</h2>
<!-- backwards compatibility -->
<a id="schemastage"></a>
<a id="schema_Stage"></a>
<a id="tocSstage"></a>
<a id="tocsstage"></a>

```json
{
  "profiles": [
    "string"
  ],
  "strategy": {
    "canary": {
      "canaryDeployment": {
        "percentages": [
          0
        ],
        "verify": true
      },
      "customCanaryDeployment": {
        "phaseConfigs": [
          {
            "percentage": 0,
            "phaseId": "string",
            "profiles": [
              "string"
            ],
            "verify": true
          }
        ]
      },
      "runtimeConfig": {
        "cloudRun": {
          "automaticTrafficControl": true
        },
        "kubernetes": {
          "gatewayServiceMesh": {
            "deployment": "string",
            "httpRoute": "string",
            "service": "string"
          },
          "serviceNetworking": {
            "deployment": "string",
            "service": "string"
          }
        }
      }
    },
    "standard": {
      "verify": true
    }
  },
  "targetId": "string"
}
```

Stage specifies a location to which to deploy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profiles|[string]|false|none|Skaffold profiles to use when rendering the manifest for this stage's `Target`.|
|strategy|[Strategy](#schemastrategy)|false|none|Optional. The strategy to use for a `Rollout` to this stage.|
|targetId|string|false|none|The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.|

<h2 id="tocS_Standard">Standard</h2>
<!-- backwards compatibility -->
<a id="schemastandard"></a>
<a id="schema_Standard"></a>
<a id="tocSstandard"></a>
<a id="tocsstandard"></a>

```json
{
  "verify": true
}
```

Standard represents the standard deployment strategy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verify|boolean|false|none|Whether to verify a deployment.|

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

<h2 id="tocS_Strategy">Strategy</h2>
<!-- backwards compatibility -->
<a id="schemastrategy"></a>
<a id="schema_Strategy"></a>
<a id="tocSstrategy"></a>
<a id="tocsstrategy"></a>

```json
{
  "canary": {
    "canaryDeployment": {
      "percentages": [
        0
      ],
      "verify": true
    },
    "customCanaryDeployment": {
      "phaseConfigs": [
        {
          "percentage": 0,
          "phaseId": "string",
          "profiles": [
            "string"
          ],
          "verify": true
        }
      ]
    },
    "runtimeConfig": {
      "cloudRun": {
        "automaticTrafficControl": true
      },
      "kubernetes": {
        "gatewayServiceMesh": {
          "deployment": "string",
          "httpRoute": "string",
          "service": "string"
        },
        "serviceNetworking": {
          "deployment": "string",
          "service": "string"
        }
      }
    }
  },
  "standard": {
    "verify": true
  }
}
```

Strategy contains deployment strategy information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canary|[Canary](#schemacanary)|false|none|Canary deployment strategy provides progressive percentage based deployments to a Target.|
|standard|[Standard](#schemastandard)|false|none|Standard deployment strategy executes a single deploy and allows verifying the deployment.|

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "anthosCluster": {
    "membership": "string"
  },
  "createTime": "string",
  "description": "string",
  "etag": "string",
  "executionConfigs": [
    {
      "artifactStorage": "string",
      "defaultPool": {
        "artifactStorage": "string",
        "serviceAccount": "string"
      },
      "executionTimeout": "string",
      "privatePool": {
        "artifactStorage": "string",
        "serviceAccount": "string",
        "workerPool": "string"
      },
      "serviceAccount": "string",
      "usages": [
        "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
      ],
      "workerPool": "string"
    }
  ],
  "gke": {
    "cluster": "string",
    "internalIp": true
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "multiTarget": {
    "targetIds": [
      "string"
    ]
  },
  "name": "string",
  "requireApproval": true,
  "run": {
    "location": "string"
  },
  "targetId": "string",
  "uid": "string",
  "updateTime": "string"
}
```

A `Target` resource in the Google Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.|
|anthosCluster|[AnthosCluster](#schemaanthoscluster)|false|none|Information specifying an Anthos Cluster.|
|createTime|string(google-datetime)|false|read-only|Output only. Time at which the `Target` was created.|
|description|string|false|none|Optional. Description of the `Target`. Max length is 255 characters.|
|etag|string|false|none|Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|executionConfigs|[[ExecutionConfig](#schemaexecutionconfig)]|false|none|Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.|
|gke|[GkeCluster](#schemagkecluster)|false|none|Information specifying a GKE Cluster.|
|labels|object|false|none|Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.|
|multiTarget|[MultiTarget](#schemamultitarget)|false|none|Information specifying a multiTarget.|
|name|string|false|none|Optional. Name of the `Target`. Format is projects/{project}/locations/{location}/targets/a-z{0,62}.|
|requireApproval|boolean|false|none|Optional. Whether or not the `Target` requires approval.|
|run|[CloudRunLocation](#schemacloudrunlocation)|false|none|Information specifying a Cloud Run deployment target.|
|targetId|string|false|read-only|Output only. Resource id of the `Target`.|
|uid|string|false|read-only|Output only. Unique identifier of the `Target`.|
|updateTime|string(google-datetime)|false|read-only|Output only. Most recent time at which the `Target` was updated.|

<h2 id="tocS_TargetArtifact">TargetArtifact</h2>
<!-- backwards compatibility -->
<a id="schematargetartifact"></a>
<a id="schema_TargetArtifact"></a>
<a id="tocStargetartifact"></a>
<a id="tocstargetartifact"></a>

```json
{
  "artifactUri": "string",
  "manifestPath": "string",
  "phaseArtifacts": {
    "property1": {
      "manifestPath": "string",
      "skaffoldConfigPath": "string"
    },
    "property2": {
      "manifestPath": "string",
      "skaffoldConfigPath": "string"
    }
  },
  "skaffoldConfigPath": "string"
}
```

The artifacts produced by a target render operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactUri|string|false|read-only|Output only. URI of a directory containing the artifacts. This contains deployment configuration used by Skaffold during a rollout, and all paths are relative to this location.|
|manifestPath|string|false|read-only|Output only. File path of the rendered manifest relative to the URI.|
|phaseArtifacts|object|false|read-only|Output only. Map from the phase ID to the phase artifacts for the `Target`.|
|skaffoldConfigPath|string|false|read-only|Output only. File path of the resolved Skaffold configuration relative to the URI.|

<h2 id="tocS_TargetNotificationEvent">TargetNotificationEvent</h2>
<!-- backwards compatibility -->
<a id="schematargetnotificationevent"></a>
<a id="schema_TargetNotificationEvent"></a>
<a id="tocStargetnotificationevent"></a>
<a id="tocstargetnotificationevent"></a>

```json
{
  "message": "string",
  "target": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

Payload proto for "clouddeploy.googleapis.com/target_notification" Platform Log event that describes the failure to send target status change Pub/Sub notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Debug message for when a notification fails to send.|
|target|string|false|none|The name of the `Target`.|
|type|string|false|none|Type of this notification, e.g. for a Pub/Sub failure.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|TYPE_PUBSUB_NOTIFICATION_FAILURE|
|type|TYPE_RENDER_STATUES_CHANGE|

<h2 id="tocS_TargetRender">TargetRender</h2>
<!-- backwards compatibility -->
<a id="schematargetrender"></a>
<a id="schema_TargetRender"></a>
<a id="tocStargetrender"></a>
<a id="tocstargetrender"></a>

```json
{
  "failureCause": "FAILURE_CAUSE_UNSPECIFIED",
  "failureMessage": "string",
  "metadata": {
    "cloudRun": {
      "service": "string"
    }
  },
  "renderingBuild": "string",
  "renderingState": "TARGET_RENDER_STATE_UNSPECIFIED"
}
```

Details of rendering for a single target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failureCause|string|false|read-only|Output only. Reason this render failed. This will always be unspecified while the render in progress.|
|failureMessage|string|false|read-only|Output only. Additional information about the render failure, if available.|
|metadata|[RenderMetadata](#schemarendermetadata)|false|none|Output only. Metadata related to the `Release` render for this Target.|
|renderingBuild|string|false|read-only|Output only. The resource name of the Cloud Build `Build` object that is used to render the manifest for this target. Format is `projects/{project}/locations/{location}/builds/{build}`.|
|renderingState|string|false|read-only|Output only. Current state of the render operation for this Target.|

#### Enumerated Values

|Property|Value|
|---|---|
|failureCause|FAILURE_CAUSE_UNSPECIFIED|
|failureCause|CLOUD_BUILD_UNAVAILABLE|
|failureCause|EXECUTION_FAILED|
|failureCause|CLOUD_BUILD_REQUEST_FAILED|
|renderingState|TARGET_RENDER_STATE_UNSPECIFIED|
|renderingState|SUCCEEDED|
|renderingState|FAILED|
|renderingState|IN_PROGRESS|

<h2 id="tocS_TargetsPresentCondition">TargetsPresentCondition</h2>
<!-- backwards compatibility -->
<a id="schematargetspresentcondition"></a>
<a id="schema_TargetsPresentCondition"></a>
<a id="tocStargetspresentcondition"></a>
<a id="tocstargetspresentcondition"></a>

```json
{
  "missingTargets": [
    "string"
  ],
  "status": true,
  "updateTime": "string"
}
```

TargetsPresentCondition contains information on any Targets defined in the Delivery Pipeline that do not actually exist.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|missingTargets|[string]|false|none|The list of Target names that do not exist. For example, projects/{project_id}/locations/{location_name}/targets/{target_name}.|
|status|boolean|false|none|True if there aren't any missing Targets.|
|updateTime|string(google-datetime)|false|none|Last time the condition was updated.|

<h2 id="tocS_TargetsTypeCondition">TargetsTypeCondition</h2>
<!-- backwards compatibility -->
<a id="schematargetstypecondition"></a>
<a id="schema_TargetsTypeCondition"></a>
<a id="tocStargetstypecondition"></a>
<a id="tocstargetstypecondition"></a>

```json
{
  "errorDetails": "string",
  "status": true
}
```

TargetsTypeCondition contains information on whether the Targets defined in the Delivery Pipeline are of the same type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorDetails|string|false|none|Human readable error message.|
|status|boolean|false|none|True if the targets are all a comparable type. For example this is true if all targets are GKE clusters. This is false if some targets are Cloud Run targets and others are GKE clusters.|

<h2 id="tocS_TerminateJobRunRequest">TerminateJobRunRequest</h2>
<!-- backwards compatibility -->
<a id="schematerminatejobrunrequest"></a>
<a id="schema_TerminateJobRunRequest"></a>
<a id="tocSterminatejobrunrequest"></a>
<a id="tocsterminatejobrunrequest"></a>

```json
{}
```

The request object used by `TerminateJobRun`.

<h2 id="tocS_TerminateJobRunResponse">TerminateJobRunResponse</h2>
<!-- backwards compatibility -->
<a id="schematerminatejobrunresponse"></a>
<a id="schema_TerminateJobRunResponse"></a>
<a id="tocSterminatejobrunresponse"></a>
<a id="tocsterminatejobrunresponse"></a>

```json
{}
```

The response object from `TerminateJobRun`.

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

<h2 id="tocS_VerifyJob">VerifyJob</h2>
<!-- backwards compatibility -->
<a id="schemaverifyjob"></a>
<a id="schema_VerifyJob"></a>
<a id="tocSverifyjob"></a>
<a id="tocsverifyjob"></a>

```json
{}
```

A verify Job.

<h2 id="tocS_VerifyJobRun">VerifyJobRun</h2>
<!-- backwards compatibility -->
<a id="schemaverifyjobrun"></a>
<a id="schema_VerifyJobRun"></a>
<a id="tocSverifyjobrun"></a>
<a id="tocsverifyjobrun"></a>

```json
{
  "artifactUri": "string",
  "build": "string",
  "eventLogPath": "string",
  "failureCause": "FAILURE_CAUSE_UNSPECIFIED",
  "failureMessage": "string"
}
```

VerifyJobRun contains information specific to a verify `JobRun`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactUri|string|false|read-only|Output only. URI of a directory containing the verify artifacts. This contains the Skaffold event log.|
|build|string|false|read-only|Output only. The resource name of the Cloud Build `Build` object that is used to verify. Format is projects/{project}/locations/{location}/builds/{build}.|
|eventLogPath|string|false|read-only|Output only. File path of the Skaffold event log relative to the artifact URI.|
|failureCause|string|false|read-only|Output only. The reason the verify failed. This will always be unspecified while the verify is in progress or if it succeeded.|
|failureMessage|string|false|read-only|Output only. Additional information about the verify failure, if available.|

#### Enumerated Values

|Property|Value|
|---|---|
|failureCause|FAILURE_CAUSE_UNSPECIFIED|
|failureCause|CLOUD_BUILD_UNAVAILABLE|
|failureCause|EXECUTION_FAILED|
|failureCause|DEADLINE_EXCEEDED|
|failureCause|VERIFICATION_CONFIG_NOT_FOUND|
|failureCause|CLOUD_BUILD_REQUEST_FAILED|
