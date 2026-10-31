<h1 id="cloud-functions-api">Cloud Functions API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manages lightweight user-provided functions executed in response to events.

Base URLs:

* <a href="https://cloudfunctions.googleapis.com/">https://cloudfunctions.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/functions">External documentation</a>

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

<h1 id="cloud-functions-api-projects">projects</h1>

## cloudfunctions.projects.locations.operations.get

<a id="opIdcloudfunctions.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="cloudfunctionsprojectslocationsoperationsget-parameters">Parameters</h3>

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

<h3 id="cloudfunctionsprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudfunctions.projects.locations.functions.delete

<a id="opIdcloudfunctions.projects.locations.functions.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/{name}`

Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.

<h3 id="cloudfunctionsprojectslocationsfunctionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the function which should be deleted.|
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

<h3 id="cloudfunctionsprojectslocationsfunctionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudfunctions.projects.locations.functions.patch

<a id="opIdcloudfunctions.projects.locations.functions.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "buildConfig": {
      "automaticUpdatePolicy": {},
      "dockerRegistry": "DOCKER_REGISTRY_UNSPECIFIED",
      "dockerRepository": "string",
      "entryPoint": "string",
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "onDeployUpdatePolicy": {},
      "runtime": "string",
      "serviceAccount": "string",
      "source": {
        "gitUri": "string",
        "repoSource": {
          "branchName": "string",
          "commitSha": "string",
          "dir": "string",
          "projectId": "string",
          "repoName": "string",
          "tagName": "string"
        },
        "storageSource": {
          "bucket": "string",
          "generation": "string",
          "object": "string"
        }
      },
      "sourceToken": "string",
      "workerPool": "string"
    },
    "description": "string",
    "environment": "ENVIRONMENT_UNSPECIFIED",
    "eventTrigger": {
      "channel": "string",
      "eventFilters": [
        {
          "attribute": "string",
          "operator": "string",
          "value": "string"
        }
      ],
      "eventType": "string",
      "pubsubTopic": "string",
      "retryPolicy": "RETRY_POLICY_UNSPECIFIED",
      "service": "string",
      "serviceAccountEmail": "string",
      "triggerRegion": "string"
    },
    "kmsKeyName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "serviceConfig": {
      "allTrafficOnLatestRevision": true,
      "availableCpu": "string",
      "availableMemory": "string",
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "ingressSettings": "INGRESS_SETTINGS_UNSPECIFIED",
      "maxInstanceCount": 0,
      "maxInstanceRequestConcurrency": 0,
      "minInstanceCount": 0,
      "secretEnvironmentVariables": [
        {
          "key": "string",
          "projectId": "string",
          "secret": "string",
          "version": "string"
        }
      ],
      "secretVolumes": [
        {
          "mountPath": "string",
          "projectId": "string",
          "secret": "string",
          "versions": [
            {
              "path": "string",
              "version": "string"
            }
          ]
        }
      ],
      "securityLevel": "SECURITY_LEVEL_UNSPECIFIED",
      "serviceAccountEmail": "string",
      "timeoutSeconds": 0,
      "vpcConnector": "string",
      "vpcConnectorEgressSettings": "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
    }
  }'
```

`PATCH /v2/{name}`

Updates existing function.

> Body parameter

```json
{
  "buildConfig": {
    "automaticUpdatePolicy": {},
    "dockerRegistry": "DOCKER_REGISTRY_UNSPECIFIED",
    "dockerRepository": "string",
    "entryPoint": "string",
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "onDeployUpdatePolicy": {},
    "runtime": "string",
    "serviceAccount": "string",
    "source": {
      "gitUri": "string",
      "repoSource": {
        "branchName": "string",
        "commitSha": "string",
        "dir": "string",
        "projectId": "string",
        "repoName": "string",
        "tagName": "string"
      },
      "storageSource": {
        "bucket": "string",
        "generation": "string",
        "object": "string"
      }
    },
    "sourceToken": "string",
    "workerPool": "string"
  },
  "description": "string",
  "environment": "ENVIRONMENT_UNSPECIFIED",
  "eventTrigger": {
    "channel": "string",
    "eventFilters": [
      {
        "attribute": "string",
        "operator": "string",
        "value": "string"
      }
    ],
    "eventType": "string",
    "pubsubTopic": "string",
    "retryPolicy": "RETRY_POLICY_UNSPECIFIED",
    "service": "string",
    "serviceAccountEmail": "string",
    "triggerRegion": "string"
  },
  "kmsKeyName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "serviceConfig": {
    "allTrafficOnLatestRevision": true,
    "availableCpu": "string",
    "availableMemory": "string",
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "ingressSettings": "INGRESS_SETTINGS_UNSPECIFIED",
    "maxInstanceCount": 0,
    "maxInstanceRequestConcurrency": 0,
    "minInstanceCount": 0,
    "secretEnvironmentVariables": [
      {
        "key": "string",
        "projectId": "string",
        "secret": "string",
        "version": "string"
      }
    ],
    "secretVolumes": [
      {
        "mountPath": "string",
        "projectId": "string",
        "secret": "string",
        "versions": [
          {
            "path": "string",
            "version": "string"
          }
        ]
      }
    ],
    "securityLevel": "SECURITY_LEVEL_UNSPECIFIED",
    "serviceAccountEmail": "string",
    "timeoutSeconds": 0,
    "vpcConnector": "string",
    "vpcConnectorEgressSettings": "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
  }
}
```

<h3 id="cloudfunctionsprojectslocationsfunctionspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|A user-defined name of the function. Function names must be unique globally and match pattern `projects/*/locations/*/functions/*`|
|updateMask|query|string|false|The list of fields to be updated. If no field mask is provided, all provided fields in the request will be updated.|
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
|body|body|[Function](#schemafunction)|false|none|
|» buildConfig|body|[BuildConfig](#schemabuildconfig)|false|Describes the Build step of the function that builds a container from the given source.|
|» description|body|string|false|User-provided description of a function.|
|» environment|body|string|false|Describe whether the function is 1st Gen or 2nd Gen.|
|» eventTrigger|body|[EventTrigger](#schemaeventtrigger)|false|An Eventarc trigger managed by Google Cloud Functions that fires events in response to a condition in another service.|
|» kmsKeyName|body|string|false|[Preview] Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.|
|» labels|body|object|false|Labels associated with this Cloud Function.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|A user-defined name of the function. Function names must be unique globally and match pattern `projects/*/locations/*/functions/*`|
|» serviceConfig|body|[ServiceConfig](#schemaserviceconfig)|false|Describes the Service being deployed. Currently deploys services to Cloud Run (fully managed).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» environment|ENVIRONMENT_UNSPECIFIED|
|» environment|GEN_1|
|» environment|GEN_2|

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

<h3 id="cloudfunctionsprojectslocationsfunctionspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudfunctions.projects.locations.list

<a id="opIdcloudfunctions.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="cloudfunctionsprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="cloudfunctionsprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudfunctions.projects.locations.operations.list

<a id="opIdcloudfunctions.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="cloudfunctionsprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="cloudfunctionsprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudfunctions.projects.locations.functions.abortFunctionUpgrade

<a id="opIdcloudfunctions.projects.locations.functions.abortFunctionUpgrade"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:abortFunctionUpgrade \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:abortFunctionUpgrade`

Aborts generation upgrade process for a function with the given name from the specified project. Deletes all 2nd Gen copy related configuration and resources which were created during the upgrade process.

> Body parameter

```json
{}
```

<h3 id="cloudfunctionsprojectslocationsfunctionsabortfunctionupgrade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the function for which upgrade should be aborted.|
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
|body|body|[AbortFunctionUpgradeRequest](#schemaabortfunctionupgraderequest)|false|none|

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

<h3 id="cloudfunctionsprojectslocationsfunctionsabortfunctionupgrade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudfunctions.projects.locations.functions.commitFunctionUpgrade

<a id="opIdcloudfunctions.projects.locations.functions.commitFunctionUpgrade"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:commitFunctionUpgrade \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:commitFunctionUpgrade`

Finalizes the upgrade after which function upgrade can not be rolled back. This is the last step of the multi step process to upgrade 1st Gen functions to 2nd Gen. Deletes all original 1st Gen related configuration and resources.

> Body parameter

```json
{}
```

<h3 id="cloudfunctionsprojectslocationsfunctionscommitfunctionupgrade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the function for which upgrade should be finalized.|
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
|body|body|[CommitFunctionUpgradeRequest](#schemacommitfunctionupgraderequest)|false|none|

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

<h3 id="cloudfunctionsprojectslocationsfunctionscommitfunctionupgrade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudfunctions.projects.locations.functions.generateDownloadUrl

<a id="opIdcloudfunctions.projects.locations.functions.generateDownloadUrl"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:generateDownloadUrl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:generateDownloadUrl`

Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls

> Body parameter

```json
{}
```

<h3 id="cloudfunctionsprojectslocationsfunctionsgeneratedownloadurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of function for which source code Google Cloud Storage signed URL should be generated.|
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
|body|body|[GenerateDownloadUrlRequest](#schemageneratedownloadurlrequest)|false|none|

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
  "downloadUrl": "string"
}
```

<h3 id="cloudfunctionsprojectslocationsfunctionsgeneratedownloadurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GenerateDownloadUrlResponse](#schemageneratedownloadurlresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudfunctions.projects.locations.functions.redirectFunctionUpgradeTraffic

<a id="opIdcloudfunctions.projects.locations.functions.redirectFunctionUpgradeTraffic"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:redirectFunctionUpgradeTraffic \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:redirectFunctionUpgradeTraffic`

Changes the traffic target of a function from the original 1st Gen function to the 2nd Gen copy. This is the second step of the multi step process to upgrade 1st Gen functions to 2nd Gen. After this operation, all new traffic will be served by 2nd Gen copy.

> Body parameter

```json
{}
```

<h3 id="cloudfunctionsprojectslocationsfunctionsredirectfunctionupgradetraffic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the function for which traffic target should be changed to 2nd Gen from 1st Gen.|
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
|body|body|[RedirectFunctionUpgradeTrafficRequest](#schemaredirectfunctionupgradetrafficrequest)|false|none|

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

<h3 id="cloudfunctionsprojectslocationsfunctionsredirectfunctionupgradetraffic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudfunctions.projects.locations.functions.rollbackFunctionUpgradeTraffic

<a id="opIdcloudfunctions.projects.locations.functions.rollbackFunctionUpgradeTraffic"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:rollbackFunctionUpgradeTraffic \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:rollbackFunctionUpgradeTraffic`

Reverts the traffic target of a function from the 2nd Gen copy to the original 1st Gen function. After this operation, all new traffic would be served by the 1st Gen.

> Body parameter

```json
{}
```

<h3 id="cloudfunctionsprojectslocationsfunctionsrollbackfunctionupgradetraffic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the function for which traffic target should be changed back to 1st Gen from 2nd Gen.|
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
|body|body|[RollbackFunctionUpgradeTrafficRequest](#schemarollbackfunctionupgradetrafficrequest)|false|none|

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

<h3 id="cloudfunctionsprojectslocationsfunctionsrollbackfunctionupgradetraffic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudfunctions.projects.locations.functions.setupFunctionUpgradeConfig

<a id="opIdcloudfunctions.projects.locations.functions.setupFunctionUpgradeConfig"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:setupFunctionUpgradeConfig \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:setupFunctionUpgradeConfig`

Creates a 2nd Gen copy of the function configuration based on the 1st Gen function with the given name. This is the first step of the multi step process to upgrade 1st Gen functions to 2nd Gen. Only 2nd Gen configuration is setup as part of this request and traffic continues to be served by 1st Gen.

> Body parameter

```json
{}
```

<h3 id="cloudfunctionsprojectslocationsfunctionssetupfunctionupgradeconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the function which should have configuration copied for upgrade.|
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
|body|body|[SetupFunctionUpgradeConfigRequest](#schemasetupfunctionupgradeconfigrequest)|false|none|

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

<h3 id="cloudfunctionsprojectslocationsfunctionssetupfunctionupgradeconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudfunctions.projects.locations.functions.list

<a id="opIdcloudfunctions.projects.locations.functions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/functions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/functions`

Returns a list of functions that belong to the requested project.

<h3 id="cloudfunctionsprojectslocationsfunctionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the function should be listed, specified in the format `projects/*/locations/*` If you want to list functions in all locations, use "-" in place of a location. When listing functions in all locations, if one or more location(s) are unreachable, the response will contain functions from all reachable locations along with the names of any unreachable locations.|
|filter|query|string|false|The filter for Functions that match the filter expression, following the syntax outlined in https://google.aip.dev/160.|
|orderBy|query|string|false|The sorting order of the resources returned. Value should be a comma separated list of fields. The default sorting oder is ascending. See https://google.aip.dev/132#ordering.|
|pageSize|query|integer|false|Maximum number of functions to return per call. The largest allowed page_size is 1,000, if the page_size is omitted or specified as greater than 1,000 then it will be replaced as 1,000. The size of the list response can be less than specified when used with filters.|
|pageToken|query|string|false|The value returned by the last `ListFunctionsResponse`; indicates that this is a continuation of a prior `ListFunctions` call, and that the system should return the next page of data.|
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
  "functions": [
    {
      "buildConfig": {
        "automaticUpdatePolicy": {},
        "build": "string",
        "dockerRegistry": "DOCKER_REGISTRY_UNSPECIFIED",
        "dockerRepository": "string",
        "entryPoint": "string",
        "environmentVariables": {
          "property1": "string",
          "property2": "string"
        },
        "onDeployUpdatePolicy": {
          "runtimeVersion": "string"
        },
        "runtime": "string",
        "serviceAccount": "string",
        "source": {
          "gitUri": "string",
          "repoSource": {
            "branchName": "string",
            "commitSha": "string",
            "dir": "string",
            "projectId": "string",
            "repoName": "string",
            "tagName": "string"
          },
          "storageSource": {
            "bucket": "string",
            "generation": "string",
            "object": "string"
          }
        },
        "sourceProvenance": {
          "gitUri": "string",
          "resolvedRepoSource": {
            "branchName": "string",
            "commitSha": "string",
            "dir": "string",
            "projectId": "string",
            "repoName": "string",
            "tagName": "string"
          },
          "resolvedStorageSource": {
            "bucket": "string",
            "generation": "string",
            "object": "string"
          }
        },
        "sourceToken": "string",
        "workerPool": "string"
      },
      "createTime": "string",
      "description": "string",
      "environment": "ENVIRONMENT_UNSPECIFIED",
      "eventTrigger": {
        "channel": "string",
        "eventFilters": [
          {
            "attribute": "string",
            "operator": "string",
            "value": "string"
          }
        ],
        "eventType": "string",
        "pubsubTopic": "string",
        "retryPolicy": "RETRY_POLICY_UNSPECIFIED",
        "service": "string",
        "serviceAccountEmail": "string",
        "trigger": "string",
        "triggerRegion": "string"
      },
      "kmsKeyName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "satisfiesPzs": true,
      "serviceConfig": {
        "allTrafficOnLatestRevision": true,
        "availableCpu": "string",
        "availableMemory": "string",
        "environmentVariables": {
          "property1": "string",
          "property2": "string"
        },
        "ingressSettings": "INGRESS_SETTINGS_UNSPECIFIED",
        "maxInstanceCount": 0,
        "maxInstanceRequestConcurrency": 0,
        "minInstanceCount": 0,
        "revision": "string",
        "secretEnvironmentVariables": [
          {
            "key": "string",
            "projectId": "string",
            "secret": "string",
            "version": "string"
          }
        ],
        "secretVolumes": [
          {
            "mountPath": "string",
            "projectId": "string",
            "secret": "string",
            "versions": [
              {
                "path": "string",
                "version": "string"
              }
            ]
          }
        ],
        "securityLevel": "SECURITY_LEVEL_UNSPECIFIED",
        "service": "string",
        "serviceAccountEmail": "string",
        "timeoutSeconds": 0,
        "uri": "string",
        "vpcConnector": "string",
        "vpcConnectorEgressSettings": "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
      },
      "state": "STATE_UNSPECIFIED",
      "stateMessages": [
        {
          "message": "string",
          "severity": "SEVERITY_UNSPECIFIED",
          "type": "string"
        }
      ],
      "updateTime": "string",
      "upgradeInfo": {
        "buildConfig": {
          "automaticUpdatePolicy": {},
          "build": "string",
          "dockerRegistry": "DOCKER_REGISTRY_UNSPECIFIED",
          "dockerRepository": "string",
          "entryPoint": "string",
          "environmentVariables": {
            "property1": "string",
            "property2": "string"
          },
          "onDeployUpdatePolicy": {
            "runtimeVersion": "string"
          },
          "runtime": "string",
          "serviceAccount": "string",
          "source": {
            "gitUri": "string",
            "repoSource": {
              "branchName": "string",
              "commitSha": "string",
              "dir": "string",
              "projectId": "string",
              "repoName": "string",
              "tagName": "string"
            },
            "storageSource": {
              "bucket": "string",
              "generation": "string",
              "object": "string"
            }
          },
          "sourceProvenance": {
            "gitUri": "string",
            "resolvedRepoSource": {
              "branchName": "string",
              "commitSha": "string",
              "dir": "string",
              "projectId": "string",
              "repoName": "string",
              "tagName": "string"
            },
            "resolvedStorageSource": {
              "bucket": "string",
              "generation": "string",
              "object": "string"
            }
          },
          "sourceToken": "string",
          "workerPool": "string"
        },
        "eventTrigger": {
          "channel": "string",
          "eventFilters": [
            {
              "attribute": "string",
              "operator": "string",
              "value": "string"
            }
          ],
          "eventType": "string",
          "pubsubTopic": "string",
          "retryPolicy": "RETRY_POLICY_UNSPECIFIED",
          "service": "string",
          "serviceAccountEmail": "string",
          "trigger": "string",
          "triggerRegion": "string"
        },
        "serviceConfig": {
          "allTrafficOnLatestRevision": true,
          "availableCpu": "string",
          "availableMemory": "string",
          "environmentVariables": {
            "property1": "string",
            "property2": "string"
          },
          "ingressSettings": "INGRESS_SETTINGS_UNSPECIFIED",
          "maxInstanceCount": 0,
          "maxInstanceRequestConcurrency": 0,
          "minInstanceCount": 0,
          "revision": "string",
          "secretEnvironmentVariables": [
            {
              "key": "string",
              "projectId": "string",
              "secret": "string",
              "version": "string"
            }
          ],
          "secretVolumes": [
            {
              "mountPath": "string",
              "projectId": "string",
              "secret": "string",
              "versions": [
                {
                  "path": "string",
                  "version": "string"
                }
              ]
            }
          ],
          "securityLevel": "SECURITY_LEVEL_UNSPECIFIED",
          "service": "string",
          "serviceAccountEmail": "string",
          "timeoutSeconds": 0,
          "uri": "string",
          "vpcConnector": "string",
          "vpcConnectorEgressSettings": "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
        },
        "upgradeState": "UPGRADE_STATE_UNSPECIFIED"
      },
      "url": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="cloudfunctionsprojectslocationsfunctionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListFunctionsResponse](#schemalistfunctionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudfunctions.projects.locations.functions.create

<a id="opIdcloudfunctions.projects.locations.functions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/functions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "buildConfig": {
      "automaticUpdatePolicy": {},
      "dockerRegistry": "DOCKER_REGISTRY_UNSPECIFIED",
      "dockerRepository": "string",
      "entryPoint": "string",
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "onDeployUpdatePolicy": {},
      "runtime": "string",
      "serviceAccount": "string",
      "source": {
        "gitUri": "string",
        "repoSource": {
          "branchName": "string",
          "commitSha": "string",
          "dir": "string",
          "projectId": "string",
          "repoName": "string",
          "tagName": "string"
        },
        "storageSource": {
          "bucket": "string",
          "generation": "string",
          "object": "string"
        }
      },
      "sourceToken": "string",
      "workerPool": "string"
    },
    "description": "string",
    "environment": "ENVIRONMENT_UNSPECIFIED",
    "eventTrigger": {
      "channel": "string",
      "eventFilters": [
        {
          "attribute": "string",
          "operator": "string",
          "value": "string"
        }
      ],
      "eventType": "string",
      "pubsubTopic": "string",
      "retryPolicy": "RETRY_POLICY_UNSPECIFIED",
      "service": "string",
      "serviceAccountEmail": "string",
      "triggerRegion": "string"
    },
    "kmsKeyName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "serviceConfig": {
      "allTrafficOnLatestRevision": true,
      "availableCpu": "string",
      "availableMemory": "string",
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "ingressSettings": "INGRESS_SETTINGS_UNSPECIFIED",
      "maxInstanceCount": 0,
      "maxInstanceRequestConcurrency": 0,
      "minInstanceCount": 0,
      "secretEnvironmentVariables": [
        {
          "key": "string",
          "projectId": "string",
          "secret": "string",
          "version": "string"
        }
      ],
      "secretVolumes": [
        {
          "mountPath": "string",
          "projectId": "string",
          "secret": "string",
          "versions": [
            {
              "path": "string",
              "version": "string"
            }
          ]
        }
      ],
      "securityLevel": "SECURITY_LEVEL_UNSPECIFIED",
      "serviceAccountEmail": "string",
      "timeoutSeconds": 0,
      "vpcConnector": "string",
      "vpcConnectorEgressSettings": "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
    }
  }'
```

`POST /v2/{parent}/functions`

Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.

> Body parameter

```json
{
  "buildConfig": {
    "automaticUpdatePolicy": {},
    "dockerRegistry": "DOCKER_REGISTRY_UNSPECIFIED",
    "dockerRepository": "string",
    "entryPoint": "string",
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "onDeployUpdatePolicy": {},
    "runtime": "string",
    "serviceAccount": "string",
    "source": {
      "gitUri": "string",
      "repoSource": {
        "branchName": "string",
        "commitSha": "string",
        "dir": "string",
        "projectId": "string",
        "repoName": "string",
        "tagName": "string"
      },
      "storageSource": {
        "bucket": "string",
        "generation": "string",
        "object": "string"
      }
    },
    "sourceToken": "string",
    "workerPool": "string"
  },
  "description": "string",
  "environment": "ENVIRONMENT_UNSPECIFIED",
  "eventTrigger": {
    "channel": "string",
    "eventFilters": [
      {
        "attribute": "string",
        "operator": "string",
        "value": "string"
      }
    ],
    "eventType": "string",
    "pubsubTopic": "string",
    "retryPolicy": "RETRY_POLICY_UNSPECIFIED",
    "service": "string",
    "serviceAccountEmail": "string",
    "triggerRegion": "string"
  },
  "kmsKeyName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "serviceConfig": {
    "allTrafficOnLatestRevision": true,
    "availableCpu": "string",
    "availableMemory": "string",
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "ingressSettings": "INGRESS_SETTINGS_UNSPECIFIED",
    "maxInstanceCount": 0,
    "maxInstanceRequestConcurrency": 0,
    "minInstanceCount": 0,
    "secretEnvironmentVariables": [
      {
        "key": "string",
        "projectId": "string",
        "secret": "string",
        "version": "string"
      }
    ],
    "secretVolumes": [
      {
        "mountPath": "string",
        "projectId": "string",
        "secret": "string",
        "versions": [
          {
            "path": "string",
            "version": "string"
          }
        ]
      }
    ],
    "securityLevel": "SECURITY_LEVEL_UNSPECIFIED",
    "serviceAccountEmail": "string",
    "timeoutSeconds": 0,
    "vpcConnector": "string",
    "vpcConnectorEgressSettings": "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
  }
}
```

<h3 id="cloudfunctionsprojectslocationsfunctionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location in which the function should be created, specified in the format `projects/*/locations/*`|
|functionId|query|string|false|The ID to use for the function, which will become the final component of the function's resource name. This value should be 4-63 characters, and valid characters are /a-z-/.|
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
|body|body|[Function](#schemafunction)|false|none|
|» buildConfig|body|[BuildConfig](#schemabuildconfig)|false|Describes the Build step of the function that builds a container from the given source.|
|» description|body|string|false|User-provided description of a function.|
|» environment|body|string|false|Describe whether the function is 1st Gen or 2nd Gen.|
|» eventTrigger|body|[EventTrigger](#schemaeventtrigger)|false|An Eventarc trigger managed by Google Cloud Functions that fires events in response to a condition in another service.|
|» kmsKeyName|body|string|false|[Preview] Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.|
|» labels|body|object|false|Labels associated with this Cloud Function.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|A user-defined name of the function. Function names must be unique globally and match pattern `projects/*/locations/*/functions/*`|
|» serviceConfig|body|[ServiceConfig](#schemaserviceconfig)|false|Describes the Service being deployed. Currently deploys services to Cloud Run (fully managed).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» environment|ENVIRONMENT_UNSPECIFIED|
|» environment|GEN_1|
|» environment|GEN_2|

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

<h3 id="cloudfunctionsprojectslocationsfunctionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudfunctions.projects.locations.functions.generateUploadUrl

<a id="opIdcloudfunctions.projects.locations.functions.generateUploadUrl"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/functions:generateUploadUrl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "environment": "ENVIRONMENT_UNSPECIFIED",
    "kmsKeyName": "string"
  }'
```

`POST /v2/{parent}/functions:generateUploadUrl`

Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, specify this header: * `content-type: application/zip` Do not specify this header: * `Authorization: Bearer YOUR_TOKEN`

> Body parameter

```json
{
  "environment": "ENVIRONMENT_UNSPECIFIED",
  "kmsKeyName": "string"
}
```

<h3 id="cloudfunctionsprojectslocationsfunctionsgenerateuploadurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location in which the Google Cloud Storage signed URL should be generated, specified in the format `projects/*/locations/*`.|
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
|body|body|[GenerateUploadUrlRequest](#schemagenerateuploadurlrequest)|false|none|
|» environment|body|string|false|The function environment the generated upload url will be used for. The upload url for 2nd Gen functions can also be used for 1st gen functions, but not vice versa. If not specified, 2nd generation-style upload URLs are generated.|
|» kmsKeyName|body|string|false|[Preview] Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function source code objects in intermediate Cloud Storage buckets. When you generate an upload url and upload your source code, it gets copied to an intermediate Cloud Storage bucket. The source code is then copied to a versioned directory in the sources bucket in the consumer project during the function deployment. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`. The Google Cloud Functions service account (service-{project_number}@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role 'Cloud KMS CryptoKey Encrypter/Decrypter (roles/cloudkms.cryptoKeyEncrypterDecrypter)' on the Key/KeyRing/Project/Organization (least access preferred).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» environment|ENVIRONMENT_UNSPECIFIED|
|» environment|GEN_1|
|» environment|GEN_2|

> Example responses

> 200 Response

```json
{
  "storageSource": {
    "bucket": "string",
    "generation": "string",
    "object": "string"
  },
  "uploadUrl": "string"
}
```

<h3 id="cloudfunctionsprojectslocationsfunctionsgenerateuploadurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GenerateUploadUrlResponse](#schemagenerateuploadurlresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudfunctions.projects.locations.runtimes.list

<a id="opIdcloudfunctions.projects.locations.runtimes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/runtimes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/runtimes`

Returns a list of runtimes that are supported for the requested project.

<h3 id="cloudfunctionsprojectslocationsruntimeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the runtimes should be listed, specified in the format `projects/*/locations/*`|
|filter|query|string|false|The filter for Runtimes that match the filter expression, following the syntax outlined in https://google.aip.dev/160.|
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
  "runtimes": [
    {
      "decommissionDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "deprecationDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "displayName": "string",
      "environment": "ENVIRONMENT_UNSPECIFIED",
      "name": "string",
      "stage": "RUNTIME_STAGE_UNSPECIFIED",
      "warnings": [
        "string"
      ]
    }
  ]
}
```

<h3 id="cloudfunctionsprojectslocationsruntimeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListRuntimesResponse](#schemalistruntimesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudfunctions.projects.locations.functions.getIamPolicy

<a id="opIdcloudfunctions.projects.locations.functions.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="cloudfunctionsprojectslocationsfunctionsgetiampolicy-parameters">Parameters</h3>

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

<h3 id="cloudfunctionsprojectslocationsfunctionsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudfunctions.projects.locations.functions.setIamPolicy

<a id="opIdcloudfunctions.projects.locations.functions.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:setIamPolicy \
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

`POST /v2/{resource}:setIamPolicy`

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

<h3 id="cloudfunctionsprojectslocationsfunctionssetiampolicy-parameters">Parameters</h3>

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

<h3 id="cloudfunctionsprojectslocationsfunctionssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudfunctions.projects.locations.functions.testIamPermissions

<a id="opIdcloudfunctions.projects.locations.functions.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:testIamPermissions \
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

`POST /v2/{resource}:testIamPermissions`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="cloudfunctionsprojectslocationsfunctionstestiampermissions-parameters">Parameters</h3>

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

<h3 id="cloudfunctionsprojectslocationsfunctionstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AbortFunctionUpgradeRequest">AbortFunctionUpgradeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaabortfunctionupgraderequest"></a>
<a id="schema_AbortFunctionUpgradeRequest"></a>
<a id="tocSabortfunctionupgraderequest"></a>
<a id="tocsabortfunctionupgraderequest"></a>

```json
{}
```

Request for the `AbortFunctionUpgrade` method.

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

<h2 id="tocS_AutomaticUpdatePolicy">AutomaticUpdatePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaautomaticupdatepolicy"></a>
<a id="schema_AutomaticUpdatePolicy"></a>
<a id="tocSautomaticupdatepolicy"></a>
<a id="tocsautomaticupdatepolicy"></a>

```json
{}
```

Security patches are applied automatically to the runtime without requiring the function to be redeployed.

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
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.|
|role|string|false|none|Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).|

<h2 id="tocS_BuildConfig">BuildConfig</h2>
<!-- backwards compatibility -->
<a id="schemabuildconfig"></a>
<a id="schema_BuildConfig"></a>
<a id="tocSbuildconfig"></a>
<a id="tocsbuildconfig"></a>

```json
{
  "automaticUpdatePolicy": {},
  "build": "string",
  "dockerRegistry": "DOCKER_REGISTRY_UNSPECIFIED",
  "dockerRepository": "string",
  "entryPoint": "string",
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "onDeployUpdatePolicy": {
    "runtimeVersion": "string"
  },
  "runtime": "string",
  "serviceAccount": "string",
  "source": {
    "gitUri": "string",
    "repoSource": {
      "branchName": "string",
      "commitSha": "string",
      "dir": "string",
      "projectId": "string",
      "repoName": "string",
      "tagName": "string"
    },
    "storageSource": {
      "bucket": "string",
      "generation": "string",
      "object": "string"
    }
  },
  "sourceProvenance": {
    "gitUri": "string",
    "resolvedRepoSource": {
      "branchName": "string",
      "commitSha": "string",
      "dir": "string",
      "projectId": "string",
      "repoName": "string",
      "tagName": "string"
    },
    "resolvedStorageSource": {
      "bucket": "string",
      "generation": "string",
      "object": "string"
    }
  },
  "sourceToken": "string",
  "workerPool": "string"
}
```

Describes the Build step of the function that builds a container from the given source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|automaticUpdatePolicy|[AutomaticUpdatePolicy](#schemaautomaticupdatepolicy)|false|none|Security patches are applied automatically to the runtime without requiring the function to be redeployed.|
|build|string|false|read-only|Output only. The Cloud Build name of the latest successful deployment of the function.|
|dockerRegistry|string|false|none|Docker Registry to use for this deployment. This configuration is only applicable to 1st Gen functions, 2nd Gen functions can only use Artifact Registry. If `docker_repository` field is specified, this field will be automatically set as `ARTIFACT_REGISTRY`. If unspecified, it currently defaults to `CONTAINER_REGISTRY`. This field may be overridden by the backend for eligible deployments.|
|dockerRepository|string|false|none|Repository in Artifact Registry to which the function docker image will be pushed after it is built by Cloud Build. If specified by user, it is created and managed by user with a customer managed encryption key. Otherwise, GCF will create and use a repository named 'gcf-artifacts' for every deployed region. It must match the pattern `projects/{project}/locations/{location}/repositories/{repository}`. Cross-project repositories are not supported. Cross-location repositories are not supported. Repository format must be 'DOCKER'.|
|entryPoint|string|false|none|The name of the function (as defined in source code) that will be executed. Defaults to the resource name suffix, if not specified. For backward compatibility, if function with given name is not found, then the system will try to use function named "function". For Node.js this is name of a function exported by the module specified in `source_location`.|
|environmentVariables|object|false|none|User-provided build-time environment variables for the function|
|onDeployUpdatePolicy|[OnDeployUpdatePolicy](#schemaondeployupdatepolicy)|false|none|Security patches are only applied when a function is redeployed.|
|runtime|string|false|none|The runtime in which to run the function. Required when deploying a new function, optional when updating an existing function. For a complete list of possible choices, see the [`gcloud` command reference](https://cloud.google.com/sdk/gcloud/reference/functions/deploy#--runtime).|
|serviceAccount|string|false|none|[Preview] Service account to be used for building the container|
|source|[Source](#schemasource)|false|none|The location of the function source code.|
|sourceProvenance|[SourceProvenance](#schemasourceprovenance)|false|none|Output only. A permanent fixed identifier for source.|
|sourceToken|string|false|none|An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments.|
|workerPool|string|false|none|Name of the Cloud Build Custom Worker Pool that should be used to build the function. The format of this field is `projects/{project}/locations/{region}/workerPools/{workerPool}` where {project} and {region} are the project id and region respectively where the worker pool is defined and {workerPool} is the short name of the worker pool. If the project id is not the same as the function, then the Cloud Functions Service Agent (service-@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role Cloud Build Custom Workers Builder (roles/cloudbuild.customworkers.builder) in the project.|

#### Enumerated Values

|Property|Value|
|---|---|
|dockerRegistry|DOCKER_REGISTRY_UNSPECIFIED|
|dockerRegistry|CONTAINER_REGISTRY|
|dockerRegistry|ARTIFACT_REGISTRY|

<h2 id="tocS_CommitFunctionUpgradeRequest">CommitFunctionUpgradeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacommitfunctionupgraderequest"></a>
<a id="schema_CommitFunctionUpgradeRequest"></a>
<a id="tocScommitfunctionupgraderequest"></a>
<a id="tocscommitfunctionupgraderequest"></a>

```json
{}
```

Request for the `CommitFunctionUpgrade` method.

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

<h2 id="tocS_EventFilter">EventFilter</h2>
<!-- backwards compatibility -->
<a id="schemaeventfilter"></a>
<a id="schema_EventFilter"></a>
<a id="tocSeventfilter"></a>
<a id="tocseventfilter"></a>

```json
{
  "attribute": "string",
  "operator": "string",
  "value": "string"
}
```

Filters events based on exact matches on the CloudEvents attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute|string|false|none|Required. The name of a CloudEvents attribute.|
|operator|string|false|none|Optional. The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The only allowed value is `match-path-pattern`.|
|value|string|false|none|Required. The value for the attribute.|

<h2 id="tocS_EventTrigger">EventTrigger</h2>
<!-- backwards compatibility -->
<a id="schemaeventtrigger"></a>
<a id="schema_EventTrigger"></a>
<a id="tocSeventtrigger"></a>
<a id="tocseventtrigger"></a>

```json
{
  "channel": "string",
  "eventFilters": [
    {
      "attribute": "string",
      "operator": "string",
      "value": "string"
    }
  ],
  "eventType": "string",
  "pubsubTopic": "string",
  "retryPolicy": "RETRY_POLICY_UNSPECIFIED",
  "service": "string",
  "serviceAccountEmail": "string",
  "trigger": "string",
  "triggerRegion": "string"
}
```

Describes EventTrigger, used to request events to be sent from another service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|none|Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.|
|eventFilters|[[EventFilter](#schemaeventfilter)]|false|none|Criteria used to filter events.|
|eventType|string|false|none|Required. The type of event to observe. For example: `google.cloud.audit.log.v1.written` or `google.cloud.pubsub.topic.v1.messagePublished`.|
|pubsubTopic|string|false|none|Optional. The name of a Pub/Sub topic in the same project that will be used as the transport topic for the event delivery. Format: `projects/{project}/topics/{topic}`. This is only valid for events of type `google.cloud.pubsub.topic.v1.messagePublished`. The topic provided here will not be deleted at function deletion.|
|retryPolicy|string|false|none|Optional. If unset, then defaults to ignoring failures (i.e. not retrying them).|
|service|string|false|none|Optional. The hostname of the service that 1st Gen function should be observed. If no string is provided, the default service implementing the API will be used. For example, `storage.googleapis.com` is the default for all event types in the `google.storage` namespace. The field is only applicable to 1st Gen functions.|
|serviceAccountEmail|string|false|none|Optional. The email of the trigger's service account. The service account must have permission to invoke Cloud Run services, the permission is `run.routes.invoke`. If empty, defaults to the Compute Engine default service account: `{project_number}-compute@developer.gserviceaccount.com`.|
|trigger|string|false|read-only|Output only. The resource name of the Eventarc trigger. The format of this field is `projects/{project}/locations/{region}/triggers/{trigger}`.|
|triggerRegion|string|false|none|The region that the trigger will be in. The trigger will only receive events originating in this region. It can be the same region as the function, a different region or multi-region, or the global region. If not provided, defaults to the same region as the function.|

#### Enumerated Values

|Property|Value|
|---|---|
|retryPolicy|RETRY_POLICY_UNSPECIFIED|
|retryPolicy|RETRY_POLICY_DO_NOT_RETRY|
|retryPolicy|RETRY_POLICY_RETRY|

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

<h2 id="tocS_Function">Function</h2>
<!-- backwards compatibility -->
<a id="schemafunction"></a>
<a id="schema_Function"></a>
<a id="tocSfunction"></a>
<a id="tocsfunction"></a>

```json
{
  "buildConfig": {
    "automaticUpdatePolicy": {},
    "build": "string",
    "dockerRegistry": "DOCKER_REGISTRY_UNSPECIFIED",
    "dockerRepository": "string",
    "entryPoint": "string",
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "onDeployUpdatePolicy": {
      "runtimeVersion": "string"
    },
    "runtime": "string",
    "serviceAccount": "string",
    "source": {
      "gitUri": "string",
      "repoSource": {
        "branchName": "string",
        "commitSha": "string",
        "dir": "string",
        "projectId": "string",
        "repoName": "string",
        "tagName": "string"
      },
      "storageSource": {
        "bucket": "string",
        "generation": "string",
        "object": "string"
      }
    },
    "sourceProvenance": {
      "gitUri": "string",
      "resolvedRepoSource": {
        "branchName": "string",
        "commitSha": "string",
        "dir": "string",
        "projectId": "string",
        "repoName": "string",
        "tagName": "string"
      },
      "resolvedStorageSource": {
        "bucket": "string",
        "generation": "string",
        "object": "string"
      }
    },
    "sourceToken": "string",
    "workerPool": "string"
  },
  "createTime": "string",
  "description": "string",
  "environment": "ENVIRONMENT_UNSPECIFIED",
  "eventTrigger": {
    "channel": "string",
    "eventFilters": [
      {
        "attribute": "string",
        "operator": "string",
        "value": "string"
      }
    ],
    "eventType": "string",
    "pubsubTopic": "string",
    "retryPolicy": "RETRY_POLICY_UNSPECIFIED",
    "service": "string",
    "serviceAccountEmail": "string",
    "trigger": "string",
    "triggerRegion": "string"
  },
  "kmsKeyName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "satisfiesPzs": true,
  "serviceConfig": {
    "allTrafficOnLatestRevision": true,
    "availableCpu": "string",
    "availableMemory": "string",
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "ingressSettings": "INGRESS_SETTINGS_UNSPECIFIED",
    "maxInstanceCount": 0,
    "maxInstanceRequestConcurrency": 0,
    "minInstanceCount": 0,
    "revision": "string",
    "secretEnvironmentVariables": [
      {
        "key": "string",
        "projectId": "string",
        "secret": "string",
        "version": "string"
      }
    ],
    "secretVolumes": [
      {
        "mountPath": "string",
        "projectId": "string",
        "secret": "string",
        "versions": [
          {
            "path": "string",
            "version": "string"
          }
        ]
      }
    ],
    "securityLevel": "SECURITY_LEVEL_UNSPECIFIED",
    "service": "string",
    "serviceAccountEmail": "string",
    "timeoutSeconds": 0,
    "uri": "string",
    "vpcConnector": "string",
    "vpcConnectorEgressSettings": "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
  },
  "state": "STATE_UNSPECIFIED",
  "stateMessages": [
    {
      "message": "string",
      "severity": "SEVERITY_UNSPECIFIED",
      "type": "string"
    }
  ],
  "updateTime": "string",
  "upgradeInfo": {
    "buildConfig": {
      "automaticUpdatePolicy": {},
      "build": "string",
      "dockerRegistry": "DOCKER_REGISTRY_UNSPECIFIED",
      "dockerRepository": "string",
      "entryPoint": "string",
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "onDeployUpdatePolicy": {
        "runtimeVersion": "string"
      },
      "runtime": "string",
      "serviceAccount": "string",
      "source": {
        "gitUri": "string",
        "repoSource": {
          "branchName": "string",
          "commitSha": "string",
          "dir": "string",
          "projectId": "string",
          "repoName": "string",
          "tagName": "string"
        },
        "storageSource": {
          "bucket": "string",
          "generation": "string",
          "object": "string"
        }
      },
      "sourceProvenance": {
        "gitUri": "string",
        "resolvedRepoSource": {
          "branchName": "string",
          "commitSha": "string",
          "dir": "string",
          "projectId": "string",
          "repoName": "string",
          "tagName": "string"
        },
        "resolvedStorageSource": {
          "bucket": "string",
          "generation": "string",
          "object": "string"
        }
      },
      "sourceToken": "string",
      "workerPool": "string"
    },
    "eventTrigger": {
      "channel": "string",
      "eventFilters": [
        {
          "attribute": "string",
          "operator": "string",
          "value": "string"
        }
      ],
      "eventType": "string",
      "pubsubTopic": "string",
      "retryPolicy": "RETRY_POLICY_UNSPECIFIED",
      "service": "string",
      "serviceAccountEmail": "string",
      "trigger": "string",
      "triggerRegion": "string"
    },
    "serviceConfig": {
      "allTrafficOnLatestRevision": true,
      "availableCpu": "string",
      "availableMemory": "string",
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "ingressSettings": "INGRESS_SETTINGS_UNSPECIFIED",
      "maxInstanceCount": 0,
      "maxInstanceRequestConcurrency": 0,
      "minInstanceCount": 0,
      "revision": "string",
      "secretEnvironmentVariables": [
        {
          "key": "string",
          "projectId": "string",
          "secret": "string",
          "version": "string"
        }
      ],
      "secretVolumes": [
        {
          "mountPath": "string",
          "projectId": "string",
          "secret": "string",
          "versions": [
            {
              "path": "string",
              "version": "string"
            }
          ]
        }
      ],
      "securityLevel": "SECURITY_LEVEL_UNSPECIFIED",
      "service": "string",
      "serviceAccountEmail": "string",
      "timeoutSeconds": 0,
      "uri": "string",
      "vpcConnector": "string",
      "vpcConnectorEgressSettings": "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
    },
    "upgradeState": "UPGRADE_STATE_UNSPECIFIED"
  },
  "url": "string"
}
```

Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildConfig|[BuildConfig](#schemabuildconfig)|false|none|Describes the Build step of the function that builds a container from the given source.|
|createTime|string(google-datetime)|false|read-only|Output only. The create timestamp of a Cloud Function. This is only applicable to 2nd Gen functions.|
|description|string|false|none|User-provided description of a function.|
|environment|string|false|none|Describe whether the function is 1st Gen or 2nd Gen.|
|eventTrigger|[EventTrigger](#schemaeventtrigger)|false|none|An Eventarc trigger managed by Google Cloud Functions that fires events in response to a condition in another service.|
|kmsKeyName|string|false|none|[Preview] Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.|
|labels|object|false|none|Labels associated with this Cloud Function.|
|name|string|false|none|A user-defined name of the function. Function names must be unique globally and match pattern `projects/*/locations/*/functions/*`|
|satisfiesPzs|boolean|false|read-only|Output only. Reserved for future use.|
|serviceConfig|[ServiceConfig](#schemaserviceconfig)|false|none|Describes the Service being deployed. Currently deploys services to Cloud Run (fully managed).|
|state|string|false|read-only|Output only. State of the function.|
|stateMessages|[[GoogleCloudFunctionsV2StateMessage](#schemagooglecloudfunctionsv2statemessage)]|false|read-only|Output only. State Messages for this Cloud Function.|
|updateTime|string(google-datetime)|false|read-only|Output only. The last update timestamp of a Cloud Function.|
|upgradeInfo|[UpgradeInfo](#schemaupgradeinfo)|false|none|Output only. UpgradeInfo for this Cloud Function|
|url|string|false|read-only|Output only. The deployed url for the function.|

#### Enumerated Values

|Property|Value|
|---|---|
|environment|ENVIRONMENT_UNSPECIFIED|
|environment|GEN_1|
|environment|GEN_2|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|FAILED|
|state|DEPLOYING|
|state|DELETING|
|state|UNKNOWN|

<h2 id="tocS_GenerateDownloadUrlRequest">GenerateDownloadUrlRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneratedownloadurlrequest"></a>
<a id="schema_GenerateDownloadUrlRequest"></a>
<a id="tocSgeneratedownloadurlrequest"></a>
<a id="tocsgeneratedownloadurlrequest"></a>

```json
{}
```

Request of `GenerateDownloadUrl` method.

<h2 id="tocS_GenerateDownloadUrlResponse">GenerateDownloadUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemageneratedownloadurlresponse"></a>
<a id="schema_GenerateDownloadUrlResponse"></a>
<a id="tocSgeneratedownloadurlresponse"></a>
<a id="tocsgeneratedownloadurlresponse"></a>

```json
{
  "downloadUrl": "string"
}
```

Response of `GenerateDownloadUrl` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloadUrl|string|false|none|The generated Google Cloud Storage signed URL that should be used for function source code download.|

<h2 id="tocS_GenerateUploadUrlRequest">GenerateUploadUrlRequest</h2>
<!-- backwards compatibility -->
<a id="schemagenerateuploadurlrequest"></a>
<a id="schema_GenerateUploadUrlRequest"></a>
<a id="tocSgenerateuploadurlrequest"></a>
<a id="tocsgenerateuploadurlrequest"></a>

```json
{
  "environment": "ENVIRONMENT_UNSPECIFIED",
  "kmsKeyName": "string"
}
```

Request of `GenerateSourceUploadUrl` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|string|false|none|The function environment the generated upload url will be used for. The upload url for 2nd Gen functions can also be used for 1st gen functions, but not vice versa. If not specified, 2nd generation-style upload URLs are generated.|
|kmsKeyName|string|false|none|[Preview] Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function source code objects in intermediate Cloud Storage buckets. When you generate an upload url and upload your source code, it gets copied to an intermediate Cloud Storage bucket. The source code is then copied to a versioned directory in the sources bucket in the consumer project during the function deployment. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`. The Google Cloud Functions service account (service-{project_number}@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role 'Cloud KMS CryptoKey Encrypter/Decrypter (roles/cloudkms.cryptoKeyEncrypterDecrypter)' on the Key/KeyRing/Project/Organization (least access preferred).|

#### Enumerated Values

|Property|Value|
|---|---|
|environment|ENVIRONMENT_UNSPECIFIED|
|environment|GEN_1|
|environment|GEN_2|

<h2 id="tocS_GenerateUploadUrlResponse">GenerateUploadUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenerateuploadurlresponse"></a>
<a id="schema_GenerateUploadUrlResponse"></a>
<a id="tocSgenerateuploadurlresponse"></a>
<a id="tocsgenerateuploadurlresponse"></a>

```json
{
  "storageSource": {
    "bucket": "string",
    "generation": "string",
    "object": "string"
  },
  "uploadUrl": "string"
}
```

Response of `GenerateSourceUploadUrl` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|storageSource|[StorageSource](#schemastoragesource)|false|none|The location of the source code in the upload bucket. Once the archive is uploaded using the `upload_url` use this field to set the `function.build_config.source.storage_source` during CreateFunction and UpdateFunction. Generation defaults to 0, as Cloud Storage provides a new generation only upon uploading a new object or version of an object.|
|uploadUrl|string|false|none|The generated Google Cloud Storage signed URL that should be used for a function source code upload. The uploaded file should be a zip archive which contains a function.|

<h2 id="tocS_GoogleCloudFunctionsV2LocationMetadata">GoogleCloudFunctionsV2LocationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudfunctionsv2locationmetadata"></a>
<a id="schema_GoogleCloudFunctionsV2LocationMetadata"></a>
<a id="tocSgooglecloudfunctionsv2locationmetadata"></a>
<a id="tocsgooglecloudfunctionsv2locationmetadata"></a>

```json
{
  "environments": [
    "ENVIRONMENT_UNSPECIFIED"
  ]
}
```

Extra GCF specific location information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environments|[string]|false|none|The Cloud Function environments this location supports.|

#### Enumerated Values

|Property|Value|
|---|---|
|environments|ENVIRONMENT_UNSPECIFIED|
|environments|GEN_1|
|environments|GEN_2|

<h2 id="tocS_GoogleCloudFunctionsV2OperationMetadata">GoogleCloudFunctionsV2OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudfunctionsv2operationmetadata"></a>
<a id="schema_GoogleCloudFunctionsV2OperationMetadata"></a>
<a id="tocSgooglecloudfunctionsv2operationmetadata"></a>
<a id="tocsgooglecloudfunctionsv2operationmetadata"></a>

```json
{
  "apiVersion": "string",
  "cancelRequested": true,
  "createTime": "string",
  "endTime": "string",
  "operationType": "OPERATIONTYPE_UNSPECIFIED",
  "requestResource": {
    "property1": null,
    "property2": null
  },
  "sourceToken": "string",
  "stages": [
    {
      "message": "string",
      "name": "NAME_UNSPECIFIED",
      "resource": "string",
      "resourceUri": "string",
      "state": "STATE_UNSPECIFIED",
      "stateMessages": [
        {
          "message": "string",
          "severity": "SEVERITY_UNSPECIFIED",
          "type": "string"
        }
      ]
    }
  ],
  "statusDetail": "string",
  "target": "string",
  "verb": "string"
}
```

Represents the metadata of the long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|API version used to start the operation.|
|cancelRequested|boolean|false|none|Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|createTime|string(google-datetime)|false|none|The time the operation was created.|
|endTime|string(google-datetime)|false|none|The time the operation finished running.|
|operationType|string|false|none|The operation type.|
|requestResource|object|false|none|The original request that started the operation.|
|sourceToken|string|false|none|An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments.|
|stages|[[GoogleCloudFunctionsV2Stage](#schemagooglecloudfunctionsv2stage)]|false|none|Mechanism for reporting in-progress stages|
|statusDetail|string|false|none|Human-readable status of the operation, if any.|
|target|string|false|none|Server-defined resource path for the target of the operation.|
|verb|string|false|none|Name of the verb executed by the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|OPERATIONTYPE_UNSPECIFIED|
|operationType|CREATE_FUNCTION|
|operationType|UPDATE_FUNCTION|
|operationType|DELETE_FUNCTION|
|operationType|REDIRECT_FUNCTION_UPGRADE_TRAFFIC|
|operationType|ROLLBACK_FUNCTION_UPGRADE_TRAFFIC|
|operationType|SETUP_FUNCTION_UPGRADE_CONFIG|
|operationType|ABORT_FUNCTION_UPGRADE|
|operationType|COMMIT_FUNCTION_UPGRADE|

<h2 id="tocS_GoogleCloudFunctionsV2Stage">GoogleCloudFunctionsV2Stage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudfunctionsv2stage"></a>
<a id="schema_GoogleCloudFunctionsV2Stage"></a>
<a id="tocSgooglecloudfunctionsv2stage"></a>
<a id="tocsgooglecloudfunctionsv2stage"></a>

```json
{
  "message": "string",
  "name": "NAME_UNSPECIFIED",
  "resource": "string",
  "resourceUri": "string",
  "state": "STATE_UNSPECIFIED",
  "stateMessages": [
    {
      "message": "string",
      "severity": "SEVERITY_UNSPECIFIED",
      "type": "string"
    }
  ]
}
```

Each Stage of the deployment process

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Message describing the Stage|
|name|string|false|none|Name of the Stage. This will be unique for each Stage.|
|resource|string|false|none|Resource of the Stage|
|resourceUri|string|false|none|Link to the current Stage resource|
|state|string|false|none|Current state of the Stage|
|stateMessages|[[GoogleCloudFunctionsV2StateMessage](#schemagooglecloudfunctionsv2statemessage)]|false|none|State messages from the current Stage.|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NAME_UNSPECIFIED|
|name|ARTIFACT_REGISTRY|
|name|BUILD|
|name|SERVICE|
|name|TRIGGER|
|name|SERVICE_ROLLBACK|
|name|TRIGGER_ROLLBACK|
|state|STATE_UNSPECIFIED|
|state|NOT_STARTED|
|state|IN_PROGRESS|
|state|COMPLETE|

<h2 id="tocS_GoogleCloudFunctionsV2StateMessage">GoogleCloudFunctionsV2StateMessage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudfunctionsv2statemessage"></a>
<a id="schema_GoogleCloudFunctionsV2StateMessage"></a>
<a id="tocSgooglecloudfunctionsv2statemessage"></a>
<a id="tocsgooglecloudfunctionsv2statemessage"></a>

```json
{
  "message": "string",
  "severity": "SEVERITY_UNSPECIFIED",
  "type": "string"
}
```

Informational messages about the state of the Cloud Function or Operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|The message.|
|severity|string|false|none|Severity of the state message.|
|type|string|false|none|One-word CamelCase type of the state message.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|SEVERITY_UNSPECIFIED|
|severity|ERROR|
|severity|WARNING|
|severity|INFO|

<h2 id="tocS_GoogleCloudFunctionsV2alphaLocationMetadata">GoogleCloudFunctionsV2alphaLocationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudfunctionsv2alphalocationmetadata"></a>
<a id="schema_GoogleCloudFunctionsV2alphaLocationMetadata"></a>
<a id="tocSgooglecloudfunctionsv2alphalocationmetadata"></a>
<a id="tocsgooglecloudfunctionsv2alphalocationmetadata"></a>

```json
{
  "environments": [
    "ENVIRONMENT_UNSPECIFIED"
  ]
}
```

Extra GCF specific location information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environments|[string]|false|none|The Cloud Function environments this location supports.|

#### Enumerated Values

|Property|Value|
|---|---|
|environments|ENVIRONMENT_UNSPECIFIED|
|environments|GEN_1|
|environments|GEN_2|

<h2 id="tocS_GoogleCloudFunctionsV2alphaOperationMetadata">GoogleCloudFunctionsV2alphaOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudfunctionsv2alphaoperationmetadata"></a>
<a id="schema_GoogleCloudFunctionsV2alphaOperationMetadata"></a>
<a id="tocSgooglecloudfunctionsv2alphaoperationmetadata"></a>
<a id="tocsgooglecloudfunctionsv2alphaoperationmetadata"></a>

```json
{
  "apiVersion": "string",
  "cancelRequested": true,
  "createTime": "string",
  "endTime": "string",
  "operationType": "OPERATIONTYPE_UNSPECIFIED",
  "requestResource": {
    "property1": null,
    "property2": null
  },
  "sourceToken": "string",
  "stages": [
    {
      "message": "string",
      "name": "NAME_UNSPECIFIED",
      "resource": "string",
      "resourceUri": "string",
      "state": "STATE_UNSPECIFIED",
      "stateMessages": [
        {
          "message": "string",
          "severity": "SEVERITY_UNSPECIFIED",
          "type": "string"
        }
      ]
    }
  ],
  "statusDetail": "string",
  "target": "string",
  "verb": "string"
}
```

Represents the metadata of the long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|API version used to start the operation.|
|cancelRequested|boolean|false|none|Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|createTime|string(google-datetime)|false|none|The time the operation was created.|
|endTime|string(google-datetime)|false|none|The time the operation finished running.|
|operationType|string|false|none|The operation type.|
|requestResource|object|false|none|The original request that started the operation.|
|sourceToken|string|false|none|An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments.|
|stages|[[GoogleCloudFunctionsV2alphaStage](#schemagooglecloudfunctionsv2alphastage)]|false|none|Mechanism for reporting in-progress stages|
|statusDetail|string|false|none|Human-readable status of the operation, if any.|
|target|string|false|none|Server-defined resource path for the target of the operation.|
|verb|string|false|none|Name of the verb executed by the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|OPERATIONTYPE_UNSPECIFIED|
|operationType|CREATE_FUNCTION|
|operationType|UPDATE_FUNCTION|
|operationType|DELETE_FUNCTION|
|operationType|REDIRECT_FUNCTION_UPGRADE_TRAFFIC|
|operationType|ROLLBACK_FUNCTION_UPGRADE_TRAFFIC|
|operationType|SETUP_FUNCTION_UPGRADE_CONFIG|
|operationType|ABORT_FUNCTION_UPGRADE|
|operationType|COMMIT_FUNCTION_UPGRADE|

<h2 id="tocS_GoogleCloudFunctionsV2alphaStage">GoogleCloudFunctionsV2alphaStage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudfunctionsv2alphastage"></a>
<a id="schema_GoogleCloudFunctionsV2alphaStage"></a>
<a id="tocSgooglecloudfunctionsv2alphastage"></a>
<a id="tocsgooglecloudfunctionsv2alphastage"></a>

```json
{
  "message": "string",
  "name": "NAME_UNSPECIFIED",
  "resource": "string",
  "resourceUri": "string",
  "state": "STATE_UNSPECIFIED",
  "stateMessages": [
    {
      "message": "string",
      "severity": "SEVERITY_UNSPECIFIED",
      "type": "string"
    }
  ]
}
```

Each Stage of the deployment process

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Message describing the Stage|
|name|string|false|none|Name of the Stage. This will be unique for each Stage.|
|resource|string|false|none|Resource of the Stage|
|resourceUri|string|false|none|Link to the current Stage resource|
|state|string|false|none|Current state of the Stage|
|stateMessages|[[GoogleCloudFunctionsV2alphaStateMessage](#schemagooglecloudfunctionsv2alphastatemessage)]|false|none|State messages from the current Stage.|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NAME_UNSPECIFIED|
|name|ARTIFACT_REGISTRY|
|name|BUILD|
|name|SERVICE|
|name|TRIGGER|
|name|SERVICE_ROLLBACK|
|name|TRIGGER_ROLLBACK|
|state|STATE_UNSPECIFIED|
|state|NOT_STARTED|
|state|IN_PROGRESS|
|state|COMPLETE|

<h2 id="tocS_GoogleCloudFunctionsV2alphaStateMessage">GoogleCloudFunctionsV2alphaStateMessage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudfunctionsv2alphastatemessage"></a>
<a id="schema_GoogleCloudFunctionsV2alphaStateMessage"></a>
<a id="tocSgooglecloudfunctionsv2alphastatemessage"></a>
<a id="tocsgooglecloudfunctionsv2alphastatemessage"></a>

```json
{
  "message": "string",
  "severity": "SEVERITY_UNSPECIFIED",
  "type": "string"
}
```

Informational messages about the state of the Cloud Function or Operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|The message.|
|severity|string|false|none|Severity of the state message.|
|type|string|false|none|One-word CamelCase type of the state message.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|SEVERITY_UNSPECIFIED|
|severity|ERROR|
|severity|WARNING|
|severity|INFO|

<h2 id="tocS_GoogleCloudFunctionsV2betaLocationMetadata">GoogleCloudFunctionsV2betaLocationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudfunctionsv2betalocationmetadata"></a>
<a id="schema_GoogleCloudFunctionsV2betaLocationMetadata"></a>
<a id="tocSgooglecloudfunctionsv2betalocationmetadata"></a>
<a id="tocsgooglecloudfunctionsv2betalocationmetadata"></a>

```json
{
  "environments": [
    "ENVIRONMENT_UNSPECIFIED"
  ]
}
```

Extra GCF specific location information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environments|[string]|false|none|The Cloud Function environments this location supports.|

#### Enumerated Values

|Property|Value|
|---|---|
|environments|ENVIRONMENT_UNSPECIFIED|
|environments|GEN_1|
|environments|GEN_2|

<h2 id="tocS_GoogleCloudFunctionsV2betaOperationMetadata">GoogleCloudFunctionsV2betaOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudfunctionsv2betaoperationmetadata"></a>
<a id="schema_GoogleCloudFunctionsV2betaOperationMetadata"></a>
<a id="tocSgooglecloudfunctionsv2betaoperationmetadata"></a>
<a id="tocsgooglecloudfunctionsv2betaoperationmetadata"></a>

```json
{
  "apiVersion": "string",
  "cancelRequested": true,
  "createTime": "string",
  "endTime": "string",
  "operationType": "OPERATIONTYPE_UNSPECIFIED",
  "requestResource": {
    "property1": null,
    "property2": null
  },
  "sourceToken": "string",
  "stages": [
    {
      "message": "string",
      "name": "NAME_UNSPECIFIED",
      "resource": "string",
      "resourceUri": "string",
      "state": "STATE_UNSPECIFIED",
      "stateMessages": [
        {
          "message": "string",
          "severity": "SEVERITY_UNSPECIFIED",
          "type": "string"
        }
      ]
    }
  ],
  "statusDetail": "string",
  "target": "string",
  "verb": "string"
}
```

Represents the metadata of the long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|API version used to start the operation.|
|cancelRequested|boolean|false|none|Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|createTime|string(google-datetime)|false|none|The time the operation was created.|
|endTime|string(google-datetime)|false|none|The time the operation finished running.|
|operationType|string|false|none|The operation type.|
|requestResource|object|false|none|The original request that started the operation.|
|sourceToken|string|false|none|An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments.|
|stages|[[GoogleCloudFunctionsV2betaStage](#schemagooglecloudfunctionsv2betastage)]|false|none|Mechanism for reporting in-progress stages|
|statusDetail|string|false|none|Human-readable status of the operation, if any.|
|target|string|false|none|Server-defined resource path for the target of the operation.|
|verb|string|false|none|Name of the verb executed by the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|OPERATIONTYPE_UNSPECIFIED|
|operationType|CREATE_FUNCTION|
|operationType|UPDATE_FUNCTION|
|operationType|DELETE_FUNCTION|
|operationType|REDIRECT_FUNCTION_UPGRADE_TRAFFIC|
|operationType|ROLLBACK_FUNCTION_UPGRADE_TRAFFIC|
|operationType|SETUP_FUNCTION_UPGRADE_CONFIG|
|operationType|ABORT_FUNCTION_UPGRADE|
|operationType|COMMIT_FUNCTION_UPGRADE|

<h2 id="tocS_GoogleCloudFunctionsV2betaStage">GoogleCloudFunctionsV2betaStage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudfunctionsv2betastage"></a>
<a id="schema_GoogleCloudFunctionsV2betaStage"></a>
<a id="tocSgooglecloudfunctionsv2betastage"></a>
<a id="tocsgooglecloudfunctionsv2betastage"></a>

```json
{
  "message": "string",
  "name": "NAME_UNSPECIFIED",
  "resource": "string",
  "resourceUri": "string",
  "state": "STATE_UNSPECIFIED",
  "stateMessages": [
    {
      "message": "string",
      "severity": "SEVERITY_UNSPECIFIED",
      "type": "string"
    }
  ]
}
```

Each Stage of the deployment process

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Message describing the Stage|
|name|string|false|none|Name of the Stage. This will be unique for each Stage.|
|resource|string|false|none|Resource of the Stage|
|resourceUri|string|false|none|Link to the current Stage resource|
|state|string|false|none|Current state of the Stage|
|stateMessages|[[GoogleCloudFunctionsV2betaStateMessage](#schemagooglecloudfunctionsv2betastatemessage)]|false|none|State messages from the current Stage.|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NAME_UNSPECIFIED|
|name|ARTIFACT_REGISTRY|
|name|BUILD|
|name|SERVICE|
|name|TRIGGER|
|name|SERVICE_ROLLBACK|
|name|TRIGGER_ROLLBACK|
|state|STATE_UNSPECIFIED|
|state|NOT_STARTED|
|state|IN_PROGRESS|
|state|COMPLETE|

<h2 id="tocS_GoogleCloudFunctionsV2betaStateMessage">GoogleCloudFunctionsV2betaStateMessage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudfunctionsv2betastatemessage"></a>
<a id="schema_GoogleCloudFunctionsV2betaStateMessage"></a>
<a id="tocSgooglecloudfunctionsv2betastatemessage"></a>
<a id="tocsgooglecloudfunctionsv2betastatemessage"></a>

```json
{
  "message": "string",
  "severity": "SEVERITY_UNSPECIFIED",
  "type": "string"
}
```

Informational messages about the state of the Cloud Function or Operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|The message.|
|severity|string|false|none|Severity of the state message.|
|type|string|false|none|One-word CamelCase type of the state message.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|SEVERITY_UNSPECIFIED|
|severity|ERROR|
|severity|WARNING|
|severity|INFO|

<h2 id="tocS_ListFunctionsResponse">ListFunctionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfunctionsresponse"></a>
<a id="schema_ListFunctionsResponse"></a>
<a id="tocSlistfunctionsresponse"></a>
<a id="tocslistfunctionsresponse"></a>

```json
{
  "functions": [
    {
      "buildConfig": {
        "automaticUpdatePolicy": {},
        "build": "string",
        "dockerRegistry": "DOCKER_REGISTRY_UNSPECIFIED",
        "dockerRepository": "string",
        "entryPoint": "string",
        "environmentVariables": {
          "property1": "string",
          "property2": "string"
        },
        "onDeployUpdatePolicy": {
          "runtimeVersion": "string"
        },
        "runtime": "string",
        "serviceAccount": "string",
        "source": {
          "gitUri": "string",
          "repoSource": {
            "branchName": "string",
            "commitSha": "string",
            "dir": "string",
            "projectId": "string",
            "repoName": "string",
            "tagName": "string"
          },
          "storageSource": {
            "bucket": "string",
            "generation": "string",
            "object": "string"
          }
        },
        "sourceProvenance": {
          "gitUri": "string",
          "resolvedRepoSource": {
            "branchName": "string",
            "commitSha": "string",
            "dir": "string",
            "projectId": "string",
            "repoName": "string",
            "tagName": "string"
          },
          "resolvedStorageSource": {
            "bucket": "string",
            "generation": "string",
            "object": "string"
          }
        },
        "sourceToken": "string",
        "workerPool": "string"
      },
      "createTime": "string",
      "description": "string",
      "environment": "ENVIRONMENT_UNSPECIFIED",
      "eventTrigger": {
        "channel": "string",
        "eventFilters": [
          {
            "attribute": "string",
            "operator": "string",
            "value": "string"
          }
        ],
        "eventType": "string",
        "pubsubTopic": "string",
        "retryPolicy": "RETRY_POLICY_UNSPECIFIED",
        "service": "string",
        "serviceAccountEmail": "string",
        "trigger": "string",
        "triggerRegion": "string"
      },
      "kmsKeyName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "satisfiesPzs": true,
      "serviceConfig": {
        "allTrafficOnLatestRevision": true,
        "availableCpu": "string",
        "availableMemory": "string",
        "environmentVariables": {
          "property1": "string",
          "property2": "string"
        },
        "ingressSettings": "INGRESS_SETTINGS_UNSPECIFIED",
        "maxInstanceCount": 0,
        "maxInstanceRequestConcurrency": 0,
        "minInstanceCount": 0,
        "revision": "string",
        "secretEnvironmentVariables": [
          {
            "key": "string",
            "projectId": "string",
            "secret": "string",
            "version": "string"
          }
        ],
        "secretVolumes": [
          {
            "mountPath": "string",
            "projectId": "string",
            "secret": "string",
            "versions": [
              {
                "path": "string",
                "version": "string"
              }
            ]
          }
        ],
        "securityLevel": "SECURITY_LEVEL_UNSPECIFIED",
        "service": "string",
        "serviceAccountEmail": "string",
        "timeoutSeconds": 0,
        "uri": "string",
        "vpcConnector": "string",
        "vpcConnectorEgressSettings": "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
      },
      "state": "STATE_UNSPECIFIED",
      "stateMessages": [
        {
          "message": "string",
          "severity": "SEVERITY_UNSPECIFIED",
          "type": "string"
        }
      ],
      "updateTime": "string",
      "upgradeInfo": {
        "buildConfig": {
          "automaticUpdatePolicy": {},
          "build": "string",
          "dockerRegistry": "DOCKER_REGISTRY_UNSPECIFIED",
          "dockerRepository": "string",
          "entryPoint": "string",
          "environmentVariables": {
            "property1": "string",
            "property2": "string"
          },
          "onDeployUpdatePolicy": {
            "runtimeVersion": "string"
          },
          "runtime": "string",
          "serviceAccount": "string",
          "source": {
            "gitUri": "string",
            "repoSource": {
              "branchName": "string",
              "commitSha": "string",
              "dir": "string",
              "projectId": "string",
              "repoName": "string",
              "tagName": "string"
            },
            "storageSource": {
              "bucket": "string",
              "generation": "string",
              "object": "string"
            }
          },
          "sourceProvenance": {
            "gitUri": "string",
            "resolvedRepoSource": {
              "branchName": "string",
              "commitSha": "string",
              "dir": "string",
              "projectId": "string",
              "repoName": "string",
              "tagName": "string"
            },
            "resolvedStorageSource": {
              "bucket": "string",
              "generation": "string",
              "object": "string"
            }
          },
          "sourceToken": "string",
          "workerPool": "string"
        },
        "eventTrigger": {
          "channel": "string",
          "eventFilters": [
            {
              "attribute": "string",
              "operator": "string",
              "value": "string"
            }
          ],
          "eventType": "string",
          "pubsubTopic": "string",
          "retryPolicy": "RETRY_POLICY_UNSPECIFIED",
          "service": "string",
          "serviceAccountEmail": "string",
          "trigger": "string",
          "triggerRegion": "string"
        },
        "serviceConfig": {
          "allTrafficOnLatestRevision": true,
          "availableCpu": "string",
          "availableMemory": "string",
          "environmentVariables": {
            "property1": "string",
            "property2": "string"
          },
          "ingressSettings": "INGRESS_SETTINGS_UNSPECIFIED",
          "maxInstanceCount": 0,
          "maxInstanceRequestConcurrency": 0,
          "minInstanceCount": 0,
          "revision": "string",
          "secretEnvironmentVariables": [
            {
              "key": "string",
              "projectId": "string",
              "secret": "string",
              "version": "string"
            }
          ],
          "secretVolumes": [
            {
              "mountPath": "string",
              "projectId": "string",
              "secret": "string",
              "versions": [
                {
                  "path": "string",
                  "version": "string"
                }
              ]
            }
          ],
          "securityLevel": "SECURITY_LEVEL_UNSPECIFIED",
          "service": "string",
          "serviceAccountEmail": "string",
          "timeoutSeconds": 0,
          "uri": "string",
          "vpcConnector": "string",
          "vpcConnectorEgressSettings": "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
        },
        "upgradeState": "UPGRADE_STATE_UNSPECIFIED"
      },
      "url": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response for the `ListFunctions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functions|[[Function](#schemafunction)]|false|none|The functions that match the request.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|unreachable|[string]|false|none|Locations that could not be reached. The response does not include any functions from these locations.|

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

<h2 id="tocS_ListRuntimesResponse">ListRuntimesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistruntimesresponse"></a>
<a id="schema_ListRuntimesResponse"></a>
<a id="tocSlistruntimesresponse"></a>
<a id="tocslistruntimesresponse"></a>

```json
{
  "runtimes": [
    {
      "decommissionDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "deprecationDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "displayName": "string",
      "environment": "ENVIRONMENT_UNSPECIFIED",
      "name": "string",
      "stage": "RUNTIME_STAGE_UNSPECIFIED",
      "warnings": [
        "string"
      ]
    }
  ]
}
```

Response for the `ListRuntimes` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|runtimes|[[Runtime](#schemaruntime)]|false|none|The runtimes that match the request.|

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

A resource that represents a Google Cloud location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The friendly name for this location, typically a nearby city name. For example, "Tokyo".|
|labels|object|false|none|Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}|
|locationId|string|false|none|The canonical id for this location. For example: `"us-east1"`.|
|metadata|object|false|none|Service-specific metadata. For example the available capacity at the given location.|
|name|string|false|none|Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`|

<h2 id="tocS_OnDeployUpdatePolicy">OnDeployUpdatePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaondeployupdatepolicy"></a>
<a id="schema_OnDeployUpdatePolicy"></a>
<a id="tocSondeployupdatepolicy"></a>
<a id="tocsondeployupdatepolicy"></a>

```json
{
  "runtimeVersion": "string"
}
```

Security patches are only applied when a function is redeployed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|runtimeVersion|string|false|read-only|Output only. contains the runtime version which was used during latest function deployment.|

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
|response|object|false|none|The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_OperationMetadataV1">OperationMetadataV1</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadatav1"></a>
<a id="schema_OperationMetadataV1"></a>
<a id="tocSoperationmetadatav1"></a>
<a id="tocsoperationmetadatav1"></a>

```json
{
  "buildId": "string",
  "buildName": "string",
  "request": {
    "property1": null,
    "property2": null
  },
  "sourceToken": "string",
  "target": "string",
  "type": "OPERATION_UNSPECIFIED",
  "updateTime": "string",
  "versionId": "string"
}
```

Metadata describing an Operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildId|string|false|none|The Cloud Build ID of the function created or updated by an API call. This field is only populated for Create and Update operations.|
|buildName|string|false|none|The Cloud Build Name of the function deployment. This field is only populated for Create and Update operations. `projects//locations//builds/`.|
|request|object|false|none|The original request that started the operation.|
|sourceToken|string|false|none|An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments.|
|target|string|false|none|Target of the operation - for example `projects/project-1/locations/region-1/functions/function-1`|
|type|string|false|none|Type of operation.|
|updateTime|string(google-datetime)|false|none|The last update timestamp of the operation.|
|versionId|string(int64)|false|none|Version id of the function created or updated by an API call. This field is only populated for Create and Update operations.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OPERATION_UNSPECIFIED|
|type|CREATE_FUNCTION|
|type|UPDATE_FUNCTION|
|type|DELETE_FUNCTION|

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

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditConfigs|[[AuditConfig](#schemaauditconfig)]|false|none|Specifies cloud audit logging configuration for this policy.|
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_RedirectFunctionUpgradeTrafficRequest">RedirectFunctionUpgradeTrafficRequest</h2>
<!-- backwards compatibility -->
<a id="schemaredirectfunctionupgradetrafficrequest"></a>
<a id="schema_RedirectFunctionUpgradeTrafficRequest"></a>
<a id="tocSredirectfunctionupgradetrafficrequest"></a>
<a id="tocsredirectfunctionupgradetrafficrequest"></a>

```json
{}
```

Request for the `RedirectFunctionUpgradeTraffic` method.

<h2 id="tocS_RepoSource">RepoSource</h2>
<!-- backwards compatibility -->
<a id="schemareposource"></a>
<a id="schema_RepoSource"></a>
<a id="tocSreposource"></a>
<a id="tocsreposource"></a>

```json
{
  "branchName": "string",
  "commitSha": "string",
  "dir": "string",
  "projectId": "string",
  "repoName": "string",
  "tagName": "string"
}
```

Location of the source in a Google Cloud Source Repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchName|string|false|none|Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax|
|commitSha|string|false|none|Explicit commit SHA to build.|
|dir|string|false|none|Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. eg. helloworld (no leading slash allowed)|
|projectId|string|false|none|ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.|
|repoName|string|false|none|Name of the Cloud Source Repository.|
|tagName|string|false|none|Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax|

<h2 id="tocS_RollbackFunctionUpgradeTrafficRequest">RollbackFunctionUpgradeTrafficRequest</h2>
<!-- backwards compatibility -->
<a id="schemarollbackfunctionupgradetrafficrequest"></a>
<a id="schema_RollbackFunctionUpgradeTrafficRequest"></a>
<a id="tocSrollbackfunctionupgradetrafficrequest"></a>
<a id="tocsrollbackfunctionupgradetrafficrequest"></a>

```json
{}
```

Request for the `RollbackFunctionUpgradeTraffic` method.

<h2 id="tocS_Runtime">Runtime</h2>
<!-- backwards compatibility -->
<a id="schemaruntime"></a>
<a id="schema_Runtime"></a>
<a id="tocSruntime"></a>
<a id="tocsruntime"></a>

```json
{
  "decommissionDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "deprecationDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "displayName": "string",
  "environment": "ENVIRONMENT_UNSPECIFIED",
  "name": "string",
  "stage": "RUNTIME_STAGE_UNSPECIFIED",
  "warnings": [
    "string"
  ]
}
```

Describes a runtime and any special information (e.g., deprecation status) related to it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|decommissionDate|[Date](#schemadate)|false|none|Decommission date for the runtime.|
|deprecationDate|[Date](#schemadate)|false|none|Deprecation date for the runtime.|
|displayName|string|false|none|The user facing name, eg 'Go 1.13', 'Node.js 12', etc.|
|environment|string|false|none|The environment for the runtime.|
|name|string|false|none|The name of the runtime, e.g., 'go113', 'nodejs12', etc.|
|stage|string|false|none|The stage of life this runtime is in, e.g., BETA, GA, etc.|
|warnings|[string]|false|none|Warning messages, e.g., a deprecation warning.|

#### Enumerated Values

|Property|Value|
|---|---|
|environment|ENVIRONMENT_UNSPECIFIED|
|environment|GEN_1|
|environment|GEN_2|
|stage|RUNTIME_STAGE_UNSPECIFIED|
|stage|DEVELOPMENT|
|stage|ALPHA|
|stage|BETA|
|stage|GA|
|stage|DEPRECATED|
|stage|DECOMMISSIONED|

<h2 id="tocS_SecretEnvVar">SecretEnvVar</h2>
<!-- backwards compatibility -->
<a id="schemasecretenvvar"></a>
<a id="schema_SecretEnvVar"></a>
<a id="tocSsecretenvvar"></a>
<a id="tocssecretenvvar"></a>

```json
{
  "key": "string",
  "projectId": "string",
  "secret": "string",
  "version": "string"
}
```

Configuration for a secret environment variable. It has the information necessary to fetch the secret value from secret manager and expose it as an environment variable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Name of the environment variable.|
|projectId|string|false|none|Project identifier (preferably project number but can also be the project ID) of the project that contains the secret. If not set, it is assumed that the secret is in the same project as the function.|
|secret|string|false|none|Name of the secret in secret manager (not the full resource name).|
|version|string|false|none|Version of the secret (version number or the string 'latest'). It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new instances start.|

<h2 id="tocS_SecretVersion">SecretVersion</h2>
<!-- backwards compatibility -->
<a id="schemasecretversion"></a>
<a id="schema_SecretVersion"></a>
<a id="tocSsecretversion"></a>
<a id="tocssecretversion"></a>

```json
{
  "path": "string",
  "version": "string"
}
```

Configuration for a single version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|false|none|Relative path of the file under the mount path where the secret value for this version will be fetched and made available. For example, setting the mount_path as '/etc/secrets' and path as `secret_foo` would mount the secret value file at `/etc/secrets/secret_foo`.|
|version|string|false|none|Version of the secret (version number or the string 'latest'). It is preferable to use `latest` version with secret volumes as secret value changes are reflected immediately.|

<h2 id="tocS_SecretVolume">SecretVolume</h2>
<!-- backwards compatibility -->
<a id="schemasecretvolume"></a>
<a id="schema_SecretVolume"></a>
<a id="tocSsecretvolume"></a>
<a id="tocssecretvolume"></a>

```json
{
  "mountPath": "string",
  "projectId": "string",
  "secret": "string",
  "versions": [
    {
      "path": "string",
      "version": "string"
    }
  ]
}
```

Configuration for a secret volume. It has the information necessary to fetch the secret value from secret manager and make it available as files mounted at the requested paths within the application container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mountPath|string|false|none|The path within the container to mount the secret volume. For example, setting the mount_path as `/etc/secrets` would mount the secret value files under the `/etc/secrets` directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount path: /etc/secrets|
|projectId|string|false|none|Project identifier (preferably project number but can also be the project ID) of the project that contains the secret. If not set, it is assumed that the secret is in the same project as the function.|
|secret|string|false|none|Name of the secret in secret manager (not the full resource name).|
|versions|[[SecretVersion](#schemasecretversion)]|false|none|List of secret versions to mount for this secret. If empty, the `latest` version of the secret will be made available in a file named after the secret under the mount point.|

<h2 id="tocS_ServiceConfig">ServiceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaserviceconfig"></a>
<a id="schema_ServiceConfig"></a>
<a id="tocSserviceconfig"></a>
<a id="tocsserviceconfig"></a>

```json
{
  "allTrafficOnLatestRevision": true,
  "availableCpu": "string",
  "availableMemory": "string",
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "ingressSettings": "INGRESS_SETTINGS_UNSPECIFIED",
  "maxInstanceCount": 0,
  "maxInstanceRequestConcurrency": 0,
  "minInstanceCount": 0,
  "revision": "string",
  "secretEnvironmentVariables": [
    {
      "key": "string",
      "projectId": "string",
      "secret": "string",
      "version": "string"
    }
  ],
  "secretVolumes": [
    {
      "mountPath": "string",
      "projectId": "string",
      "secret": "string",
      "versions": [
        {
          "path": "string",
          "version": "string"
        }
      ]
    }
  ],
  "securityLevel": "SECURITY_LEVEL_UNSPECIFIED",
  "service": "string",
  "serviceAccountEmail": "string",
  "timeoutSeconds": 0,
  "uri": "string",
  "vpcConnector": "string",
  "vpcConnectorEgressSettings": "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
}
```

Describes the Service being deployed. Currently Supported : Cloud Run (fully managed).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allTrafficOnLatestRevision|boolean|false|none|Whether 100% of traffic is routed to the latest revision. On CreateFunction and UpdateFunction, when set to true, the revision being deployed will serve 100% of traffic, ignoring any traffic split settings, if any. On GetFunction, true will be returned if the latest revision is serving 100% of traffic.|
|availableCpu|string|false|none|The number of CPUs used in a single container instance. Default value is calculated from available memory. Supports the same values as Cloud Run, see https://cloud.google.com/run/docs/reference/rest/v1/Container#resourcerequirements Example: "1" indicates 1 vCPU|
|availableMemory|string|false|none|The amount of memory available for a function. Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is supplied the value is interpreted as bytes. See https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go a full description.|
|environmentVariables|object|false|none|Environment variables that shall be available during function execution.|
|ingressSettings|string|false|none|The ingress settings for the function, controlling what traffic can reach it.|
|maxInstanceCount|integer(int32)|false|none|The limit on the maximum number of function instances that may coexist at a given time. In some cases, such as rapid traffic surges, Cloud Functions may, for a short period of time, create more instances than the specified max instances limit. If your function cannot tolerate this temporary behavior, you may want to factor in a safety margin and set a lower max instances value than your function can tolerate. See the [Max Instances](https://cloud.google.com/functions/docs/max-instances) Guide for more details.|
|maxInstanceRequestConcurrency|integer(int32)|false|none|Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.|
|minInstanceCount|integer(int32)|false|none|The limit on the minimum number of function instances that may coexist at a given time. Function instances are kept in idle state for a short period after they finished executing the request to reduce cold start time for subsequent requests. Setting a minimum instance count will ensure that the given number of instances are kept running in idle state always. This can help with cold start times when jump in incoming request count occurs after the idle instance would have been stopped in the default case.|
|revision|string|false|read-only|Output only. The name of service revision.|
|secretEnvironmentVariables|[[SecretEnvVar](#schemasecretenvvar)]|false|none|Secret environment variables configuration.|
|secretVolumes|[[SecretVolume](#schemasecretvolume)]|false|none|Secret volumes configuration.|
|securityLevel|string|false|none|Security level configure whether the function only accepts https. This configuration is only applicable to 1st Gen functions with Http trigger. By default https is optional for 1st Gen functions; 2nd Gen functions are https ONLY.|
|service|string|false|read-only|Output only. Name of the service associated with a Function. The format of this field is `projects/{project}/locations/{region}/services/{service}`|
|serviceAccountEmail|string|false|none|The email of the service's service account. If empty, defaults to `{project_number}-compute@developer.gserviceaccount.com`.|
|timeoutSeconds|integer(int32)|false|none|The function execution timeout. Execution is considered failed and can be terminated if the function is not completed at the end of the timeout period. Defaults to 60 seconds.|
|uri|string|false|read-only|Output only. URI of the Service deployed.|
|vpcConnector|string|false|none|The Serverless VPC Access connector that this cloud function can connect to. The format of this field is `projects/*/locations/*/connectors/*`.|
|vpcConnectorEgressSettings|string|false|none|The egress settings for the connector, controlling what traffic is diverted through it.|

#### Enumerated Values

|Property|Value|
|---|---|
|ingressSettings|INGRESS_SETTINGS_UNSPECIFIED|
|ingressSettings|ALLOW_ALL|
|ingressSettings|ALLOW_INTERNAL_ONLY|
|ingressSettings|ALLOW_INTERNAL_AND_GCLB|
|securityLevel|SECURITY_LEVEL_UNSPECIFIED|
|securityLevel|SECURE_ALWAYS|
|securityLevel|SECURE_OPTIONAL|
|vpcConnectorEgressSettings|VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED|
|vpcConnectorEgressSettings|PRIVATE_RANGES_ONLY|
|vpcConnectorEgressSettings|ALL_TRAFFIC|

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

<h2 id="tocS_SetupFunctionUpgradeConfigRequest">SetupFunctionUpgradeConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetupfunctionupgradeconfigrequest"></a>
<a id="schema_SetupFunctionUpgradeConfigRequest"></a>
<a id="tocSsetupfunctionupgradeconfigrequest"></a>
<a id="tocssetupfunctionupgradeconfigrequest"></a>

```json
{}
```

Request for the `SetupFunctionUpgradeConfig` method.

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "gitUri": "string",
  "repoSource": {
    "branchName": "string",
    "commitSha": "string",
    "dir": "string",
    "projectId": "string",
    "repoName": "string",
    "tagName": "string"
  },
  "storageSource": {
    "bucket": "string",
    "generation": "string",
    "object": "string"
  }
}
```

The location of the function source code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gitUri|string|false|none|If provided, get the source from GitHub repository. This option is valid only for GCF 1st Gen function. Example: https://github.com///blob//|
|repoSource|[RepoSource](#schemareposource)|false|none|If provided, get the source from this location in a Cloud Source Repository.|
|storageSource|[StorageSource](#schemastoragesource)|false|none|If provided, get the source from this location in Google Cloud Storage.|

<h2 id="tocS_SourceProvenance">SourceProvenance</h2>
<!-- backwards compatibility -->
<a id="schemasourceprovenance"></a>
<a id="schema_SourceProvenance"></a>
<a id="tocSsourceprovenance"></a>
<a id="tocssourceprovenance"></a>

```json
{
  "gitUri": "string",
  "resolvedRepoSource": {
    "branchName": "string",
    "commitSha": "string",
    "dir": "string",
    "projectId": "string",
    "repoName": "string",
    "tagName": "string"
  },
  "resolvedStorageSource": {
    "bucket": "string",
    "generation": "string",
    "object": "string"
  }
}
```

Provenance of the source. Ways to find the original source, or verify that some source was used for this build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gitUri|string|false|none|A copy of the build's `source.git_uri`, if exists, with any commits resolved.|
|resolvedRepoSource|[RepoSource](#schemareposource)|false|none|A copy of the build's `source.repo_source`, if exists, with any revisions resolved.|
|resolvedStorageSource|[StorageSource](#schemastoragesource)|false|none|A copy of the build's `source.storage_source`, if exists, with any generations resolved.|

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

<h2 id="tocS_StorageSource">StorageSource</h2>
<!-- backwards compatibility -->
<a id="schemastoragesource"></a>
<a id="schema_StorageSource"></a>
<a id="tocSstoragesource"></a>
<a id="tocsstoragesource"></a>

```json
{
  "bucket": "string",
  "generation": "string",
  "object": "string"
}
```

Location of the source in an archive file in Google Cloud Storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|string|false|none|Google Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).|
|generation|string(int64)|false|none|Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.|
|object|string|false|none|Google Cloud Storage object containing the source. This object must be a gzipped archive file (`.tar.gz`) containing source to build.|

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

<h2 id="tocS_UpgradeInfo">UpgradeInfo</h2>
<!-- backwards compatibility -->
<a id="schemaupgradeinfo"></a>
<a id="schema_UpgradeInfo"></a>
<a id="tocSupgradeinfo"></a>
<a id="tocsupgradeinfo"></a>

```json
{
  "buildConfig": {
    "automaticUpdatePolicy": {},
    "build": "string",
    "dockerRegistry": "DOCKER_REGISTRY_UNSPECIFIED",
    "dockerRepository": "string",
    "entryPoint": "string",
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "onDeployUpdatePolicy": {
      "runtimeVersion": "string"
    },
    "runtime": "string",
    "serviceAccount": "string",
    "source": {
      "gitUri": "string",
      "repoSource": {
        "branchName": "string",
        "commitSha": "string",
        "dir": "string",
        "projectId": "string",
        "repoName": "string",
        "tagName": "string"
      },
      "storageSource": {
        "bucket": "string",
        "generation": "string",
        "object": "string"
      }
    },
    "sourceProvenance": {
      "gitUri": "string",
      "resolvedRepoSource": {
        "branchName": "string",
        "commitSha": "string",
        "dir": "string",
        "projectId": "string",
        "repoName": "string",
        "tagName": "string"
      },
      "resolvedStorageSource": {
        "bucket": "string",
        "generation": "string",
        "object": "string"
      }
    },
    "sourceToken": "string",
    "workerPool": "string"
  },
  "eventTrigger": {
    "channel": "string",
    "eventFilters": [
      {
        "attribute": "string",
        "operator": "string",
        "value": "string"
      }
    ],
    "eventType": "string",
    "pubsubTopic": "string",
    "retryPolicy": "RETRY_POLICY_UNSPECIFIED",
    "service": "string",
    "serviceAccountEmail": "string",
    "trigger": "string",
    "triggerRegion": "string"
  },
  "serviceConfig": {
    "allTrafficOnLatestRevision": true,
    "availableCpu": "string",
    "availableMemory": "string",
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "ingressSettings": "INGRESS_SETTINGS_UNSPECIFIED",
    "maxInstanceCount": 0,
    "maxInstanceRequestConcurrency": 0,
    "minInstanceCount": 0,
    "revision": "string",
    "secretEnvironmentVariables": [
      {
        "key": "string",
        "projectId": "string",
        "secret": "string",
        "version": "string"
      }
    ],
    "secretVolumes": [
      {
        "mountPath": "string",
        "projectId": "string",
        "secret": "string",
        "versions": [
          {
            "path": "string",
            "version": "string"
          }
        ]
      }
    ],
    "securityLevel": "SECURITY_LEVEL_UNSPECIFIED",
    "service": "string",
    "serviceAccountEmail": "string",
    "timeoutSeconds": 0,
    "uri": "string",
    "vpcConnector": "string",
    "vpcConnectorEgressSettings": "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
  },
  "upgradeState": "UPGRADE_STATE_UNSPECIFIED"
}
```

Information related to: * A function's eligibility for 1st Gen to 2nd Gen migration * Current state of migration for function undergoing migration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildConfig|[BuildConfig](#schemabuildconfig)|false|none|Describes the Build step of the function that builds a container to prepare for 2nd gen upgrade.|
|eventTrigger|[EventTrigger](#schemaeventtrigger)|false|none|Describes the Event trigger which has been setup to prepare for 2nd gen upgrade.|
|serviceConfig|[ServiceConfig](#schemaserviceconfig)|false|none|Describes the Cloud Run service which has been setup to prepare for 2nd gen upgrade.|
|upgradeState|string|false|none|UpgradeState of the function|

#### Enumerated Values

|Property|Value|
|---|---|
|upgradeState|UPGRADE_STATE_UNSPECIFIED|
|upgradeState|ELIGIBLE_FOR_2ND_GEN_UPGRADE|
|upgradeState|UPGRADE_OPERATION_IN_PROGRESS|
|upgradeState|SETUP_FUNCTION_UPGRADE_CONFIG_SUCCESSFUL|
|upgradeState|SETUP_FUNCTION_UPGRADE_CONFIG_ERROR|
|upgradeState|ABORT_FUNCTION_UPGRADE_ERROR|
|upgradeState|REDIRECT_FUNCTION_UPGRADE_TRAFFIC_SUCCESSFUL|
|upgradeState|REDIRECT_FUNCTION_UPGRADE_TRAFFIC_ERROR|
|upgradeState|ROLLBACK_FUNCTION_UPGRADE_TRAFFIC_ERROR|
|upgradeState|COMMIT_FUNCTION_UPGRADE_ERROR|
