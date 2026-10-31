<h1 id="on-demand-scanning-api">On-Demand Scanning API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A service to scan container images for vulnerabilities.

Base URLs:

* <a href="https://ondemandscanning.googleapis.com/">https://ondemandscanning.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/container-analysis/docs/on-demand-scanning/">External documentation</a>

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

<h1 id="on-demand-scanning-api-projects">projects</h1>

## ondemandscanning.projects.locations.operations.get

<a id="opIdondemandscanning.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="ondemandscanningprojectslocationsoperationsget-parameters">Parameters</h3>

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

<h3 id="ondemandscanningprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ondemandscanning.projects.locations.operations.delete

<a id="opIdondemandscanning.projects.locations.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="ondemandscanningprojectslocationsoperationsdelete-parameters">Parameters</h3>

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

<h3 id="ondemandscanningprojectslocationsoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ondemandscanning.projects.locations.operations.list

<a id="opIdondemandscanning.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="ondemandscanningprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="ondemandscanningprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ondemandscanning.projects.locations.operations.cancel

<a id="opIdondemandscanning.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1beta1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

<h3 id="ondemandscanningprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="ondemandscanningprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ondemandscanning.projects.locations.operations.wait

<a id="opIdondemandscanning.projects.locations.operations.wait"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:wait \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1beta1/{name}:wait`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

<h3 id="ondemandscanningprojectslocationsoperationswait-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to wait on.|
|timeout|query|string|false|The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.|
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

<h3 id="ondemandscanningprojectslocationsoperationswait-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ondemandscanning.projects.locations.scans.analyzePackages

<a id="opIdondemandscanning.projects.locations.scans.analyzePackages"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/scans:analyzePackages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "packages": [
      {
        "architecture": "string",
        "binary": {
          "name": "string",
          "version": "string"
        },
        "cpeUri": "string",
        "dependencyChain": [
          {
            "package": "string",
            "version": "string"
          }
        ],
        "fileLocation": [
          {
            "filePath": "string"
          }
        ],
        "hashDigest": "string",
        "maintainer": {
          "kind": "string",
          "name": "string"
        },
        "os": "string",
        "osVersion": "string",
        "package": "string",
        "packageType": "PACKAGE_TYPE_UNSPECIFIED",
        "patchedCve": [
          "string"
        ],
        "unused": "string",
        "version": "string"
      }
    ],
    "resourceUri": "string"
  }'
```

`POST /v1beta1/{parent}/scans:analyzePackages`

Initiates an analysis of the provided packages.

> Body parameter

```json
{
  "packages": [
    {
      "architecture": "string",
      "binary": {
        "name": "string",
        "version": "string"
      },
      "cpeUri": "string",
      "dependencyChain": [
        {
          "package": "string",
          "version": "string"
        }
      ],
      "fileLocation": [
        {
          "filePath": "string"
        }
      ],
      "hashDigest": "string",
      "maintainer": {
        "kind": "string",
        "name": "string"
      },
      "os": "string",
      "osVersion": "string",
      "package": "string",
      "packageType": "PACKAGE_TYPE_UNSPECIFIED",
      "patchedCve": [
        "string"
      ],
      "unused": "string",
      "version": "string"
    }
  ],
  "resourceUri": "string"
}
```

<h3 id="ondemandscanningprojectslocationsscansanalyzepackages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent of the resource for which analysis is requested. Format: projects/[project_name]/locations/[location]|
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
|body|body|[AnalyzePackagesRequest](#schemaanalyzepackagesrequest)|false|none|
|» packages|body|[[PackageData](#schemapackagedata)]|false|The packages to analyze.|
|» resourceUri|body|string|false|Required. The resource URI of the container image being scanned.|

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

<h3 id="ondemandscanningprojectslocationsscansanalyzepackages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ondemandscanning.projects.locations.scans.vulnerabilities.list

<a id="opIdondemandscanning.projects.locations.scans.vulnerabilities.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/vulnerabilities \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/vulnerabilities`

Lists vulnerabilities resulting from a successfully completed scan.

<h3 id="ondemandscanningprojectslocationsscansvulnerabilitieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent of the collection of Vulnerabilities being requested. Format: projects/[project_name]/locations/[location]/scans/[scan_id]|
|pageSize|query|integer|false|The number of vulnerabilities to retrieve.|
|pageToken|query|string|false|The page token, resulting from a previous call to ListVulnerabilities.|
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
  "occurrences": [
    {
      "attestation": {
        "jwts": [
          {
            "compactJwt": "string"
          }
        ],
        "serializedPayload": "string",
        "signatures": [
          {
            "publicKeyId": "string",
            "signature": "string"
          }
        ]
      },
      "build": {
        "intotoProvenance": {
          "builderConfig": {
            "id": "string"
          },
          "materials": [
            "string"
          ],
          "metadata": {
            "buildFinishedOn": "string",
            "buildInvocationId": "string",
            "buildStartedOn": "string",
            "completeness": {
              "arguments": true,
              "environment": true,
              "materials": true
            },
            "reproducible": true
          },
          "recipe": {
            "arguments": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "definedInMaterial": "string",
            "entryPoint": "string",
            "environment": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "type": "string"
          }
        },
        "intotoStatement": {
          "_type": "string",
          "predicateType": "string",
          "provenance": {
            "builderConfig": {
              "id": "string"
            },
            "materials": [
              "string"
            ],
            "metadata": {
              "buildFinishedOn": "string",
              "buildInvocationId": "string",
              "buildStartedOn": "string",
              "completeness": {
                "arguments": true,
                "environment": true,
                "materials": true
              },
              "reproducible": true
            },
            "recipe": {
              "arguments": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "definedInMaterial": "string",
              "entryPoint": "string",
              "environment": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "type": "string"
            }
          },
          "slsaProvenance": {
            "builder": {
              "id": "string"
            },
            "materials": [
              {
                "digest": {
                  "property1": "string",
                  "property2": "string"
                },
                "uri": "string"
              }
            ],
            "metadata": {
              "buildFinishedOn": "string",
              "buildInvocationId": "string",
              "buildStartedOn": "string",
              "completeness": {
                "arguments": true,
                "environment": true,
                "materials": true
              },
              "reproducible": true
            },
            "recipe": {
              "arguments": {
                "property1": null,
                "property2": null
              },
              "definedInMaterial": "string",
              "entryPoint": "string",
              "environment": {
                "property1": null,
                "property2": null
              },
              "type": "string"
            }
          },
          "slsaProvenanceZeroTwo": {
            "buildConfig": {
              "property1": null,
              "property2": null
            },
            "buildType": "string",
            "builder": {
              "id": "string"
            },
            "invocation": {
              "configSource": {
                "digest": {
                  "property1": "string",
                  "property2": "string"
                },
                "entryPoint": "string",
                "uri": "string"
              },
              "environment": {
                "property1": null,
                "property2": null
              },
              "parameters": {
                "property1": null,
                "property2": null
              }
            },
            "materials": [
              {
                "digest": {
                  "property1": "string",
                  "property2": "string"
                },
                "uri": "string"
              }
            ],
            "metadata": {
              "buildFinishedOn": "string",
              "buildInvocationId": "string",
              "buildStartedOn": "string",
              "completeness": {
                "environment": true,
                "materials": true,
                "parameters": true
              },
              "reproducible": true
            }
          },
          "subject": [
            {
              "digest": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string"
            }
          ]
        },
        "provenance": {
          "buildOptions": {
            "property1": "string",
            "property2": "string"
          },
          "builderVersion": "string",
          "builtArtifacts": [
            {
              "checksum": "string",
              "id": "string",
              "names": [
                "string"
              ]
            }
          ],
          "commands": [
            {
              "args": [
                "string"
              ],
              "dir": "string",
              "env": [
                "string"
              ],
              "id": "string",
              "name": "string",
              "waitFor": [
                "string"
              ]
            }
          ],
          "createTime": "string",
          "creator": "string",
          "endTime": "string",
          "id": "string",
          "logsUri": "string",
          "projectId": "string",
          "sourceProvenance": {
            "additionalContexts": [
              {
                "cloudRepo": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "repoId": {
                    "projectRepoId": {
                      "projectId": "string",
                      "repoName": "string"
                    },
                    "uid": "string"
                  },
                  "revisionId": "string"
                },
                "gerrit": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "gerritProject": "string",
                  "hostUri": "string",
                  "revisionId": "string"
                },
                "git": {
                  "revisionId": "string",
                  "url": "string"
                },
                "labels": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ],
            "artifactStorageSourceUri": "string",
            "context": {
              "cloudRepo": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "repoId": {
                  "projectRepoId": {
                    "projectId": "string",
                    "repoName": "string"
                  },
                  "uid": "string"
                },
                "revisionId": "string"
              },
              "gerrit": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "gerritProject": "string",
                "hostUri": "string",
                "revisionId": "string"
              },
              "git": {
                "revisionId": "string",
                "url": "string"
              },
              "labels": {
                "property1": "string",
                "property2": "string"
              }
            },
            "fileHashes": {
              "property1": {
                "fileHash": [
                  {
                    "type": "string",
                    "value": "string"
                  }
                ]
              },
              "property2": {
                "fileHash": [
                  {
                    "type": "string",
                    "value": "string"
                  }
                ]
              }
            }
          },
          "startTime": "string",
          "triggerId": "string"
        },
        "provenanceBytes": "string"
      },
      "compliance": {
        "nonComplianceReason": "string",
        "nonCompliantFiles": [
          {
            "displayCommand": "string",
            "path": "string",
            "reason": "string"
          }
        ]
      },
      "createTime": "string",
      "deployment": {
        "address": "string",
        "config": "string",
        "deployTime": "string",
        "platform": "PLATFORM_UNSPECIFIED",
        "resourceUri": [
          "string"
        ],
        "undeployTime": "string",
        "userEmail": "string"
      },
      "discovery": {
        "analysisCompleted": {
          "analysisType": [
            "string"
          ]
        },
        "analysisError": [
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
        "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
        "analysisStatusError": {
          "code": 0,
          "details": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "message": "string"
        },
        "archiveTime": "string",
        "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
        "cpe": "string",
        "lastScanTime": "string"
      },
      "dsseAttestation": {
        "envelope": {
          "payload": "string",
          "payloadType": "string",
          "signatures": [
            {
              "keyid": "string",
              "sig": "string"
            }
          ]
        },
        "statement": {
          "_type": "string",
          "predicateType": "string",
          "provenance": {
            "builderConfig": {
              "id": "string"
            },
            "materials": [
              "string"
            ],
            "metadata": {
              "buildFinishedOn": "string",
              "buildInvocationId": "string",
              "buildStartedOn": "string",
              "completeness": {
                "arguments": true,
                "environment": true,
                "materials": true
              },
              "reproducible": true
            },
            "recipe": {
              "arguments": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "definedInMaterial": "string",
              "entryPoint": "string",
              "environment": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "type": "string"
            }
          },
          "slsaProvenance": {
            "builder": {
              "id": "string"
            },
            "materials": [
              {
                "digest": {
                  "property1": "string",
                  "property2": "string"
                },
                "uri": "string"
              }
            ],
            "metadata": {
              "buildFinishedOn": "string",
              "buildInvocationId": "string",
              "buildStartedOn": "string",
              "completeness": {
                "arguments": true,
                "environment": true,
                "materials": true
              },
              "reproducible": true
            },
            "recipe": {
              "arguments": {
                "property1": null,
                "property2": null
              },
              "definedInMaterial": "string",
              "entryPoint": "string",
              "environment": {
                "property1": null,
                "property2": null
              },
              "type": "string"
            }
          },
          "slsaProvenanceZeroTwo": {
            "buildConfig": {
              "property1": null,
              "property2": null
            },
            "buildType": "string",
            "builder": {
              "id": "string"
            },
            "invocation": {
              "configSource": {
                "digest": {
                  "property1": "string",
                  "property2": "string"
                },
                "entryPoint": "string",
                "uri": "string"
              },
              "environment": {
                "property1": null,
                "property2": null
              },
              "parameters": {
                "property1": null,
                "property2": null
              }
            },
            "materials": [
              {
                "digest": {
                  "property1": "string",
                  "property2": "string"
                },
                "uri": "string"
              }
            ],
            "metadata": {
              "buildFinishedOn": "string",
              "buildInvocationId": "string",
              "buildStartedOn": "string",
              "completeness": {
                "environment": true,
                "materials": true,
                "parameters": true
              },
              "reproducible": true
            }
          },
          "subject": [
            {
              "digest": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string"
            }
          ]
        }
      },
      "envelope": {
        "payload": "string",
        "payloadType": "string",
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ]
      },
      "image": {
        "baseResourceUrl": "string",
        "distance": 0,
        "fingerprint": {
          "v1Name": "string",
          "v2Blob": [
            "string"
          ],
          "v2Name": "string"
        },
        "layerInfo": [
          {
            "arguments": "string",
            "directive": "string"
          }
        ]
      },
      "kind": "NOTE_KIND_UNSPECIFIED",
      "name": "string",
      "noteName": "string",
      "package": {
        "architecture": "ARCHITECTURE_UNSPECIFIED",
        "cpeUri": "string",
        "license": {
          "comments": "string",
          "expression": "string"
        },
        "location": [
          {
            "cpeUri": "string",
            "path": "string",
            "version": {
              "epoch": 0,
              "fullName": "string",
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            }
          }
        ],
        "name": "string",
        "packageType": "string",
        "version": {
          "epoch": 0,
          "fullName": "string",
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        }
      },
      "remediation": "string",
      "resourceUri": "string",
      "updateTime": "string",
      "upgrade": {
        "distribution": {
          "classification": "string",
          "cpeUri": "string",
          "cve": [
            "string"
          ],
          "severity": "string"
        },
        "package": "string",
        "parsedVersion": {
          "epoch": 0,
          "fullName": "string",
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        },
        "windowsUpdate": {
          "categories": [
            {
              "categoryId": "string",
              "name": "string"
            }
          ],
          "description": "string",
          "identity": {
            "revision": 0,
            "updateId": "string"
          },
          "kbArticleIds": [
            "string"
          ],
          "lastPublishedTimestamp": "string",
          "supportUrl": "string",
          "title": "string"
        }
      },
      "vulnerability": {
        "cvssScore": 0,
        "cvssV2": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
        "cvssv3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "effectiveSeverity": "SEVERITY_UNSPECIFIED",
        "fixAvailable": true,
        "longDescription": "string",
        "packageIssue": [
          {
            "affectedCpeUri": "string",
            "affectedPackage": "string",
            "affectedVersion": {
              "epoch": 0,
              "fullName": "string",
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "effectiveSeverity": "SEVERITY_UNSPECIFIED",
            "fileLocation": [
              {
                "filePath": "string"
              }
            ],
            "fixAvailable": true,
            "fixedCpeUri": "string",
            "fixedPackage": "string",
            "fixedVersion": {
              "epoch": 0,
              "fullName": "string",
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "packageType": "string"
          }
        ],
        "relatedUrls": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "severity": "SEVERITY_UNSPECIFIED",
        "shortDescription": "string",
        "type": "string",
        "vexAssessment": {
          "cve": "string",
          "impacts": [
            "string"
          ],
          "justification": {
            "details": "string",
            "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
          },
          "noteName": "string",
          "relatedUris": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "remediations": [
            {
              "details": "string",
              "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
              "remediationUri": {
                "label": "string",
                "url": "string"
              }
            }
          ],
          "state": "STATE_UNSPECIFIED"
        }
      }
    }
  ]
}
```

<h3 id="ondemandscanningprojectslocationsscansvulnerabilitieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListVulnerabilitiesResponse](#schemalistvulnerabilitiesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AliasContext">AliasContext</h2>
<!-- backwards compatibility -->
<a id="schemaaliascontext"></a>
<a id="schema_AliasContext"></a>
<a id="tocSaliascontext"></a>
<a id="tocsaliascontext"></a>

```json
{
  "kind": "KIND_UNSPECIFIED",
  "name": "string"
}
```

An alias to a repo revision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|The alias kind.|
|name|string|false|none|The alias name.|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|KIND_UNSPECIFIED|
|kind|FIXED|
|kind|MOVABLE|
|kind|OTHER|

<h2 id="tocS_AnalysisCompleted">AnalysisCompleted</h2>
<!-- backwards compatibility -->
<a id="schemaanalysiscompleted"></a>
<a id="schema_AnalysisCompleted"></a>
<a id="tocSanalysiscompleted"></a>
<a id="tocsanalysiscompleted"></a>

```json
{
  "analysisType": [
    "string"
  ]
}
```

Indicates which analysis completed successfully. Multiple types of analysis can be performed on a single resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysisType|[string]|false|none|none|

<h2 id="tocS_AnalyzePackagesMetadata">AnalyzePackagesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzepackagesmetadata"></a>
<a id="schema_AnalyzePackagesMetadata"></a>
<a id="tocSanalyzepackagesmetadata"></a>
<a id="tocsanalyzepackagesmetadata"></a>

```json
{
  "createTime": "string",
  "resourceUri": "string"
}
```

AnalyzePackagesMetadata contains metadata for an active scan of a container image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|When the scan was created.|
|resourceUri|string|false|none|The resource URI of the container image being scanned.|

<h2 id="tocS_AnalyzePackagesMetadataV1">AnalyzePackagesMetadataV1</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzepackagesmetadatav1"></a>
<a id="schema_AnalyzePackagesMetadataV1"></a>
<a id="tocSanalyzepackagesmetadatav1"></a>
<a id="tocsanalyzepackagesmetadatav1"></a>

```json
{
  "createTime": "string",
  "resourceUri": "string"
}
```

AnalyzePackagesMetadata contains metadata for an active scan of a container image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|When the scan was created.|
|resourceUri|string|false|none|The resource URI of the container image being scanned.|

<h2 id="tocS_AnalyzePackagesRequest">AnalyzePackagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzepackagesrequest"></a>
<a id="schema_AnalyzePackagesRequest"></a>
<a id="tocSanalyzepackagesrequest"></a>
<a id="tocsanalyzepackagesrequest"></a>

```json
{
  "packages": [
    {
      "architecture": "string",
      "binary": {
        "name": "string",
        "version": "string"
      },
      "cpeUri": "string",
      "dependencyChain": [
        {
          "package": "string",
          "version": "string"
        }
      ],
      "fileLocation": [
        {
          "filePath": "string"
        }
      ],
      "hashDigest": "string",
      "maintainer": {
        "kind": "string",
        "name": "string"
      },
      "os": "string",
      "osVersion": "string",
      "package": "string",
      "packageType": "PACKAGE_TYPE_UNSPECIFIED",
      "patchedCve": [
        "string"
      ],
      "unused": "string",
      "version": "string"
    }
  ],
  "resourceUri": "string"
}
```

AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packages|[[PackageData](#schemapackagedata)]|false|none|The packages to analyze.|
|resourceUri|string|false|none|Required. The resource URI of the container image being scanned.|

<h2 id="tocS_AnalyzePackagesResponse">AnalyzePackagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzepackagesresponse"></a>
<a id="schema_AnalyzePackagesResponse"></a>
<a id="tocSanalyzepackagesresponse"></a>
<a id="tocsanalyzepackagesresponse"></a>

```json
{
  "scan": "string"
}
```

AnalyzePackagesResponse contains the information necessary to find results for the given scan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scan|string|false|none|The name of the scan resource created by this successful scan.|

<h2 id="tocS_AnalyzePackagesResponseV1">AnalyzePackagesResponseV1</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzepackagesresponsev1"></a>
<a id="schema_AnalyzePackagesResponseV1"></a>
<a id="tocSanalyzepackagesresponsev1"></a>
<a id="tocsanalyzepackagesresponsev1"></a>

```json
{
  "scan": "string"
}
```

AnalyzePackagesResponse contains the information necessary to find results for the given scan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scan|string|false|none|The name of the scan resource created by this successful scan.|

<h2 id="tocS_Artifact">Artifact</h2>
<!-- backwards compatibility -->
<a id="schemaartifact"></a>
<a id="schema_Artifact"></a>
<a id="tocSartifact"></a>
<a id="tocsartifact"></a>

```json
{
  "checksum": "string",
  "id": "string",
  "names": [
    "string"
  ]
}
```

Artifact describes a build product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checksum|string|false|none|Hash or checksum value of a binary, or Docker Registry 2.0 digest of a container.|
|id|string|false|none|Artifact ID, if any; for container images, this will be a URL by digest like `gcr.io/projectID/imagename@sha256:123456`.|
|names|[string]|false|none|Related artifact names. This may be the path to a binary or jar file, or in the case of a container build, the name used to push the container image to Google Container Registry, as presented to `docker push`. Note that a single Artifact ID can have multiple names, for example if two tags are applied to one image.|

<h2 id="tocS_AttestationOccurrence">AttestationOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemaattestationoccurrence"></a>
<a id="schema_AttestationOccurrence"></a>
<a id="tocSattestationoccurrence"></a>
<a id="tocsattestationoccurrence"></a>

```json
{
  "jwts": [
    {
      "compactJwt": "string"
    }
  ],
  "serializedPayload": "string",
  "signatures": [
    {
      "publicKeyId": "string",
      "signature": "string"
    }
  ]
}
```

Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jwts|[[Jwt](#schemajwt)]|false|none|One or more JWTs encoding a self-contained attestation. Each JWT encodes the payload that it verifies within the JWT itself. Verifier implementation SHOULD ignore the `serialized_payload` field when verifying these JWTs. If only JWTs are present on this AttestationOccurrence, then the `serialized_payload` SHOULD be left empty. Each JWT SHOULD encode a claim specific to the `resource_uri` of this Occurrence, but this is not validated by Grafeas metadata API implementations. The JWT itself is opaque to Grafeas.|
|serializedPayload|string(byte)|false|none|Required. The serialized payload that is verified by one or more `signatures`.|
|signatures|[[Signature](#schemasignature)]|false|none|One or more signatures over `serialized_payload`. Verifier implementations should consider this attestation message verified if at least one `signature` verifies `serialized_payload`. See `Signature` in common.proto for more details on signature structure and verification.|

<h2 id="tocS_Binary">Binary</h2>
<!-- backwards compatibility -->
<a id="schemabinary"></a>
<a id="schema_Binary"></a>
<a id="tocSbinary"></a>
<a id="tocsbinary"></a>

```json
{
  "name": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|version|string|false|none|none|

<h2 id="tocS_BuildOccurrence">BuildOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemabuildoccurrence"></a>
<a id="schema_BuildOccurrence"></a>
<a id="tocSbuildoccurrence"></a>
<a id="tocsbuildoccurrence"></a>

```json
{
  "intotoProvenance": {
    "builderConfig": {
      "id": "string"
    },
    "materials": [
      "string"
    ],
    "metadata": {
      "buildFinishedOn": "string",
      "buildInvocationId": "string",
      "buildStartedOn": "string",
      "completeness": {
        "arguments": true,
        "environment": true,
        "materials": true
      },
      "reproducible": true
    },
    "recipe": {
      "arguments": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "definedInMaterial": "string",
      "entryPoint": "string",
      "environment": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "type": "string"
    }
  },
  "intotoStatement": {
    "_type": "string",
    "predicateType": "string",
    "provenance": {
      "builderConfig": {
        "id": "string"
      },
      "materials": [
        "string"
      ],
      "metadata": {
        "buildFinishedOn": "string",
        "buildInvocationId": "string",
        "buildStartedOn": "string",
        "completeness": {
          "arguments": true,
          "environment": true,
          "materials": true
        },
        "reproducible": true
      },
      "recipe": {
        "arguments": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "definedInMaterial": "string",
        "entryPoint": "string",
        "environment": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "type": "string"
      }
    },
    "slsaProvenance": {
      "builder": {
        "id": "string"
      },
      "materials": [
        {
          "digest": {
            "property1": "string",
            "property2": "string"
          },
          "uri": "string"
        }
      ],
      "metadata": {
        "buildFinishedOn": "string",
        "buildInvocationId": "string",
        "buildStartedOn": "string",
        "completeness": {
          "arguments": true,
          "environment": true,
          "materials": true
        },
        "reproducible": true
      },
      "recipe": {
        "arguments": {
          "property1": null,
          "property2": null
        },
        "definedInMaterial": "string",
        "entryPoint": "string",
        "environment": {
          "property1": null,
          "property2": null
        },
        "type": "string"
      }
    },
    "slsaProvenanceZeroTwo": {
      "buildConfig": {
        "property1": null,
        "property2": null
      },
      "buildType": "string",
      "builder": {
        "id": "string"
      },
      "invocation": {
        "configSource": {
          "digest": {
            "property1": "string",
            "property2": "string"
          },
          "entryPoint": "string",
          "uri": "string"
        },
        "environment": {
          "property1": null,
          "property2": null
        },
        "parameters": {
          "property1": null,
          "property2": null
        }
      },
      "materials": [
        {
          "digest": {
            "property1": "string",
            "property2": "string"
          },
          "uri": "string"
        }
      ],
      "metadata": {
        "buildFinishedOn": "string",
        "buildInvocationId": "string",
        "buildStartedOn": "string",
        "completeness": {
          "environment": true,
          "materials": true,
          "parameters": true
        },
        "reproducible": true
      }
    },
    "subject": [
      {
        "digest": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string"
      }
    ]
  },
  "provenance": {
    "buildOptions": {
      "property1": "string",
      "property2": "string"
    },
    "builderVersion": "string",
    "builtArtifacts": [
      {
        "checksum": "string",
        "id": "string",
        "names": [
          "string"
        ]
      }
    ],
    "commands": [
      {
        "args": [
          "string"
        ],
        "dir": "string",
        "env": [
          "string"
        ],
        "id": "string",
        "name": "string",
        "waitFor": [
          "string"
        ]
      }
    ],
    "createTime": "string",
    "creator": "string",
    "endTime": "string",
    "id": "string",
    "logsUri": "string",
    "projectId": "string",
    "sourceProvenance": {
      "additionalContexts": [
        {
          "cloudRepo": {
            "aliasContext": {
              "kind": "KIND_UNSPECIFIED",
              "name": "string"
            },
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            },
            "revisionId": "string"
          },
          "gerrit": {
            "aliasContext": {
              "kind": "KIND_UNSPECIFIED",
              "name": "string"
            },
            "gerritProject": "string",
            "hostUri": "string",
            "revisionId": "string"
          },
          "git": {
            "revisionId": "string",
            "url": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "artifactStorageSourceUri": "string",
      "context": {
        "cloudRepo": {
          "aliasContext": {
            "kind": "KIND_UNSPECIFIED",
            "name": "string"
          },
          "repoId": {
            "projectRepoId": {
              "projectId": "string",
              "repoName": "string"
            },
            "uid": "string"
          },
          "revisionId": "string"
        },
        "gerrit": {
          "aliasContext": {
            "kind": "KIND_UNSPECIFIED",
            "name": "string"
          },
          "gerritProject": "string",
          "hostUri": "string",
          "revisionId": "string"
        },
        "git": {
          "revisionId": "string",
          "url": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "fileHashes": {
        "property1": {
          "fileHash": [
            {
              "type": "string",
              "value": "string"
            }
          ]
        },
        "property2": {
          "fileHash": [
            {
              "type": "string",
              "value": "string"
            }
          ]
        }
      }
    },
    "startTime": "string",
    "triggerId": "string"
  },
  "provenanceBytes": "string"
}
```

Details of a build occurrence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intotoProvenance|[InTotoProvenance](#schemaintotoprovenance)|false|none|Deprecated. See InTotoStatement for the replacement. In-toto Provenance representation as defined in spec.|
|intotoStatement|[InTotoStatement](#schemaintotostatement)|false|none|In-toto Statement representation as defined in spec. The intoto_statement can contain any type of provenance. The serialized payload of the statement can be stored and signed in the Occurrence's envelope.|
|provenance|[BuildProvenance](#schemabuildprovenance)|false|none|The actual provenance for the build.|
|provenanceBytes|string|false|none|Serialized JSON representation of the provenance, used in generating the build signature in the corresponding build note. After verifying the signature, `provenance_bytes` can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification. The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes.|

<h2 id="tocS_BuildProvenance">BuildProvenance</h2>
<!-- backwards compatibility -->
<a id="schemabuildprovenance"></a>
<a id="schema_BuildProvenance"></a>
<a id="tocSbuildprovenance"></a>
<a id="tocsbuildprovenance"></a>

```json
{
  "buildOptions": {
    "property1": "string",
    "property2": "string"
  },
  "builderVersion": "string",
  "builtArtifacts": [
    {
      "checksum": "string",
      "id": "string",
      "names": [
        "string"
      ]
    }
  ],
  "commands": [
    {
      "args": [
        "string"
      ],
      "dir": "string",
      "env": [
        "string"
      ],
      "id": "string",
      "name": "string",
      "waitFor": [
        "string"
      ]
    }
  ],
  "createTime": "string",
  "creator": "string",
  "endTime": "string",
  "id": "string",
  "logsUri": "string",
  "projectId": "string",
  "sourceProvenance": {
    "additionalContexts": [
      {
        "cloudRepo": {
          "aliasContext": {
            "kind": "KIND_UNSPECIFIED",
            "name": "string"
          },
          "repoId": {
            "projectRepoId": {
              "projectId": "string",
              "repoName": "string"
            },
            "uid": "string"
          },
          "revisionId": "string"
        },
        "gerrit": {
          "aliasContext": {
            "kind": "KIND_UNSPECIFIED",
            "name": "string"
          },
          "gerritProject": "string",
          "hostUri": "string",
          "revisionId": "string"
        },
        "git": {
          "revisionId": "string",
          "url": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "artifactStorageSourceUri": "string",
    "context": {
      "cloudRepo": {
        "aliasContext": {
          "kind": "KIND_UNSPECIFIED",
          "name": "string"
        },
        "repoId": {
          "projectRepoId": {
            "projectId": "string",
            "repoName": "string"
          },
          "uid": "string"
        },
        "revisionId": "string"
      },
      "gerrit": {
        "aliasContext": {
          "kind": "KIND_UNSPECIFIED",
          "name": "string"
        },
        "gerritProject": "string",
        "hostUri": "string",
        "revisionId": "string"
      },
      "git": {
        "revisionId": "string",
        "url": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "fileHashes": {
      "property1": {
        "fileHash": [
          {
            "type": "string",
            "value": "string"
          }
        ]
      },
      "property2": {
        "fileHash": [
          {
            "type": "string",
            "value": "string"
          }
        ]
      }
    }
  },
  "startTime": "string",
  "triggerId": "string"
}
```

Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildOptions|object|false|none|Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details.|
|builderVersion|string|false|none|Version string of the builder at the time this build was executed.|
|builtArtifacts|[[Artifact](#schemaartifact)]|false|none|Output of the build.|
|commands|[[Command](#schemacommand)]|false|none|Commands requested by the build.|
|createTime|string(google-datetime)|false|none|Time at which the build was created.|
|creator|string|false|none|E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time.|
|endTime|string(google-datetime)|false|none|Time at which execution of the build was finished.|
|id|string|false|none|Required. Unique identifier of the build.|
|logsUri|string|false|none|URI where any logs for this provenance were written.|
|projectId|string|false|none|ID of the project.|
|sourceProvenance|[Source](#schemasource)|false|none|Details of the Source input to the build.|
|startTime|string(google-datetime)|false|none|Time at which execution of the build was started.|
|triggerId|string|false|none|Trigger identifier if the build was triggered automatically; empty if not.|

<h2 id="tocS_BuilderConfig">BuilderConfig</h2>
<!-- backwards compatibility -->
<a id="schemabuilderconfig"></a>
<a id="schema_BuilderConfig"></a>
<a id="tocSbuilderconfig"></a>
<a id="tocsbuilderconfig"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|

<h2 id="tocS_CVSS">CVSS</h2>
<!-- backwards compatibility -->
<a id="schemacvss"></a>
<a id="schema_CVSS"></a>
<a id="tocScvss"></a>
<a id="tocscvss"></a>

```json
{
  "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
  "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
  "authentication": "AUTHENTICATION_UNSPECIFIED",
  "availabilityImpact": "IMPACT_UNSPECIFIED",
  "baseScore": 0,
  "confidentialityImpact": "IMPACT_UNSPECIFIED",
  "exploitabilityScore": 0,
  "impactScore": 0,
  "integrityImpact": "IMPACT_UNSPECIFIED",
  "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
  "scope": "SCOPE_UNSPECIFIED",
  "userInteraction": "USER_INTERACTION_UNSPECIFIED"
}
```

Common Vulnerability Scoring System. For details, see https://www.first.org/cvss/specification-document This is a message we will try to use for storing various versions of CVSS rather than making a separate proto for storing a specific version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attackComplexity|string|false|none|none|
|attackVector|string|false|none|Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments.|
|authentication|string|false|none|none|
|availabilityImpact|string|false|none|none|
|baseScore|number(float)|false|none|The base score is a function of the base metric scores.|
|confidentialityImpact|string|false|none|none|
|exploitabilityScore|number(float)|false|none|none|
|impactScore|number(float)|false|none|none|
|integrityImpact|string|false|none|none|
|privilegesRequired|string|false|none|none|
|scope|string|false|none|none|
|userInteraction|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|attackComplexity|ATTACK_COMPLEXITY_UNSPECIFIED|
|attackComplexity|ATTACK_COMPLEXITY_LOW|
|attackComplexity|ATTACK_COMPLEXITY_HIGH|
|attackComplexity|ATTACK_COMPLEXITY_MEDIUM|
|attackVector|ATTACK_VECTOR_UNSPECIFIED|
|attackVector|ATTACK_VECTOR_NETWORK|
|attackVector|ATTACK_VECTOR_ADJACENT|
|attackVector|ATTACK_VECTOR_LOCAL|
|attackVector|ATTACK_VECTOR_PHYSICAL|
|authentication|AUTHENTICATION_UNSPECIFIED|
|authentication|AUTHENTICATION_MULTIPLE|
|authentication|AUTHENTICATION_SINGLE|
|authentication|AUTHENTICATION_NONE|
|availabilityImpact|IMPACT_UNSPECIFIED|
|availabilityImpact|IMPACT_HIGH|
|availabilityImpact|IMPACT_LOW|
|availabilityImpact|IMPACT_NONE|
|availabilityImpact|IMPACT_PARTIAL|
|availabilityImpact|IMPACT_COMPLETE|
|confidentialityImpact|IMPACT_UNSPECIFIED|
|confidentialityImpact|IMPACT_HIGH|
|confidentialityImpact|IMPACT_LOW|
|confidentialityImpact|IMPACT_NONE|
|confidentialityImpact|IMPACT_PARTIAL|
|confidentialityImpact|IMPACT_COMPLETE|
|integrityImpact|IMPACT_UNSPECIFIED|
|integrityImpact|IMPACT_HIGH|
|integrityImpact|IMPACT_LOW|
|integrityImpact|IMPACT_NONE|
|integrityImpact|IMPACT_PARTIAL|
|integrityImpact|IMPACT_COMPLETE|
|privilegesRequired|PRIVILEGES_REQUIRED_UNSPECIFIED|
|privilegesRequired|PRIVILEGES_REQUIRED_NONE|
|privilegesRequired|PRIVILEGES_REQUIRED_LOW|
|privilegesRequired|PRIVILEGES_REQUIRED_HIGH|
|scope|SCOPE_UNSPECIFIED|
|scope|SCOPE_UNCHANGED|
|scope|SCOPE_CHANGED|
|userInteraction|USER_INTERACTION_UNSPECIFIED|
|userInteraction|USER_INTERACTION_NONE|
|userInteraction|USER_INTERACTION_REQUIRED|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "categoryId": "string",
  "name": "string"
}
```

The category to which the update belongs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|string|false|none|The identifier of the category.|
|name|string|false|none|The localized name of the category.|

<h2 id="tocS_CloudRepoSourceContext">CloudRepoSourceContext</h2>
<!-- backwards compatibility -->
<a id="schemacloudreposourcecontext"></a>
<a id="schema_CloudRepoSourceContext"></a>
<a id="tocScloudreposourcecontext"></a>
<a id="tocscloudreposourcecontext"></a>

```json
{
  "aliasContext": {
    "kind": "KIND_UNSPECIFIED",
    "name": "string"
  },
  "repoId": {
    "projectRepoId": {
      "projectId": "string",
      "repoName": "string"
    },
    "uid": "string"
  },
  "revisionId": "string"
}
```

A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliasContext|[AliasContext](#schemaaliascontext)|false|none|An alias, which may be a branch or tag.|
|repoId|[RepoId](#schemarepoid)|false|none|The ID of the repo.|
|revisionId|string|false|none|A revision ID.|

<h2 id="tocS_Command">Command</h2>
<!-- backwards compatibility -->
<a id="schemacommand"></a>
<a id="schema_Command"></a>
<a id="tocScommand"></a>
<a id="tocscommand"></a>

```json
{
  "args": [
    "string"
  ],
  "dir": "string",
  "env": [
    "string"
  ],
  "id": "string",
  "name": "string",
  "waitFor": [
    "string"
  ]
}
```

Command describes a step performed as part of the build pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|args|[string]|false|none|Command-line arguments used when executing this command.|
|dir|string|false|none|Working directory (relative to project source root) used when running this command.|
|env|[string]|false|none|Environment variables set before running this command.|
|id|string|false|none|Optional unique identifier for this command, used in wait_for to reference this command as a dependency.|
|name|string|false|none|Required. Name of the command, as presented on the command line, or if the command is packaged as a Docker container, as presented to `docker pull`.|
|waitFor|[string]|false|none|The ID(s) of the command(s) that this command depends on.|

<h2 id="tocS_Completeness">Completeness</h2>
<!-- backwards compatibility -->
<a id="schemacompleteness"></a>
<a id="schema_Completeness"></a>
<a id="tocScompleteness"></a>
<a id="tocscompleteness"></a>

```json
{
  "arguments": true,
  "environment": true,
  "materials": true
}
```

Indicates that the builder claims certain fields in this message to be complete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arguments|boolean|false|none|If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe.|
|environment|boolean|false|none|If true, the builder claims that recipe.environment is claimed to be complete.|
|materials|boolean|false|none|If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called "hermetic".|

<h2 id="tocS_ComplianceOccurrence">ComplianceOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceoccurrence"></a>
<a id="schema_ComplianceOccurrence"></a>
<a id="tocScomplianceoccurrence"></a>
<a id="tocscomplianceoccurrence"></a>

```json
{
  "nonComplianceReason": "string",
  "nonCompliantFiles": [
    {
      "displayCommand": "string",
      "path": "string",
      "reason": "string"
    }
  ]
}
```

An indication that the compliance checks in the associated ComplianceNote were not satisfied for particular resources or a specified reason.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nonComplianceReason|string|false|none|none|
|nonCompliantFiles|[[NonCompliantFile](#schemanoncompliantfile)]|false|none|none|

<h2 id="tocS_DSSEAttestationOccurrence">DSSEAttestationOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemadsseattestationoccurrence"></a>
<a id="schema_DSSEAttestationOccurrence"></a>
<a id="tocSdsseattestationoccurrence"></a>
<a id="tocsdsseattestationoccurrence"></a>

```json
{
  "envelope": {
    "payload": "string",
    "payloadType": "string",
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ]
  },
  "statement": {
    "_type": "string",
    "predicateType": "string",
    "provenance": {
      "builderConfig": {
        "id": "string"
      },
      "materials": [
        "string"
      ],
      "metadata": {
        "buildFinishedOn": "string",
        "buildInvocationId": "string",
        "buildStartedOn": "string",
        "completeness": {
          "arguments": true,
          "environment": true,
          "materials": true
        },
        "reproducible": true
      },
      "recipe": {
        "arguments": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "definedInMaterial": "string",
        "entryPoint": "string",
        "environment": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "type": "string"
      }
    },
    "slsaProvenance": {
      "builder": {
        "id": "string"
      },
      "materials": [
        {
          "digest": {
            "property1": "string",
            "property2": "string"
          },
          "uri": "string"
        }
      ],
      "metadata": {
        "buildFinishedOn": "string",
        "buildInvocationId": "string",
        "buildStartedOn": "string",
        "completeness": {
          "arguments": true,
          "environment": true,
          "materials": true
        },
        "reproducible": true
      },
      "recipe": {
        "arguments": {
          "property1": null,
          "property2": null
        },
        "definedInMaterial": "string",
        "entryPoint": "string",
        "environment": {
          "property1": null,
          "property2": null
        },
        "type": "string"
      }
    },
    "slsaProvenanceZeroTwo": {
      "buildConfig": {
        "property1": null,
        "property2": null
      },
      "buildType": "string",
      "builder": {
        "id": "string"
      },
      "invocation": {
        "configSource": {
          "digest": {
            "property1": "string",
            "property2": "string"
          },
          "entryPoint": "string",
          "uri": "string"
        },
        "environment": {
          "property1": null,
          "property2": null
        },
        "parameters": {
          "property1": null,
          "property2": null
        }
      },
      "materials": [
        {
          "digest": {
            "property1": "string",
            "property2": "string"
          },
          "uri": "string"
        }
      ],
      "metadata": {
        "buildFinishedOn": "string",
        "buildInvocationId": "string",
        "buildStartedOn": "string",
        "completeness": {
          "environment": true,
          "materials": true,
          "parameters": true
        },
        "reproducible": true
      }
    },
    "subject": [
      {
        "digest": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string"
      }
    ]
  }
}
```

Deprecated. Prefer to use a regular Occurrence, and populate the Envelope at the top level of the Occurrence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|envelope|[Envelope](#schemaenvelope)|false|none|If doing something security critical, make sure to verify the signatures in this metadata.|
|statement|[InTotoStatement](#schemaintotostatement)|false|none|Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always "application/vnd.in-toto+json".|

<h2 id="tocS_DeploymentOccurrence">DeploymentOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentoccurrence"></a>
<a id="schema_DeploymentOccurrence"></a>
<a id="tocSdeploymentoccurrence"></a>
<a id="tocsdeploymentoccurrence"></a>

```json
{
  "address": "string",
  "config": "string",
  "deployTime": "string",
  "platform": "PLATFORM_UNSPECIFIED",
  "resourceUri": [
    "string"
  ],
  "undeployTime": "string",
  "userEmail": "string"
}
```

The period during which some deployable was active in a runtime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|Address of the runtime element hosting this deployment.|
|config|string|false|none|Configuration used to create this deployment.|
|deployTime|string(google-datetime)|false|none|Required. Beginning of the lifetime of this deployment.|
|platform|string|false|none|Platform hosting this deployment.|
|resourceUri|[string]|false|none|Output only. Resource URI for the artifact being deployed taken from the deployable field with the same name.|
|undeployTime|string(google-datetime)|false|none|End of the lifetime of this deployment.|
|userEmail|string|false|none|Identity of the user that triggered this deployment.|

#### Enumerated Values

|Property|Value|
|---|---|
|platform|PLATFORM_UNSPECIFIED|
|platform|GKE|
|platform|FLEX|
|platform|CUSTOM|

<h2 id="tocS_DiscoveryOccurrence">DiscoveryOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemadiscoveryoccurrence"></a>
<a id="schema_DiscoveryOccurrence"></a>
<a id="tocSdiscoveryoccurrence"></a>
<a id="tocsdiscoveryoccurrence"></a>

```json
{
  "analysisCompleted": {
    "analysisType": [
      "string"
    ]
  },
  "analysisError": [
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
  "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
  "analysisStatusError": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "archiveTime": "string",
  "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
  "cpe": "string",
  "lastScanTime": "string"
}
```

Provides information about the analysis status of a discovered resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysisCompleted|[AnalysisCompleted](#schemaanalysiscompleted)|false|none|Indicates which analysis completed successfully. Multiple types of analysis can be performed on a single resource.|
|analysisError|[[Status](#schemastatus)]|false|none|Indicates any errors encountered during analysis of a resource. There could be 0 or more of these errors.|
|analysisStatus|string|false|none|The status of discovery for the resource.|
|analysisStatusError|[Status](#schemastatus)|false|none|When an error is encountered this will contain a LocalizedMessage under details to show to the user. The LocalizedMessage is output only and populated by the API.|
|archiveTime|string(google-datetime)|false|read-only|Output only. The time occurrences related to this discovery occurrence were archived.|
|continuousAnalysis|string|false|none|Whether the resource is continuously analyzed.|
|cpe|string|false|none|The CPE of the resource being scanned.|
|lastScanTime|string(google-datetime)|false|none|The last time this resource was scanned.|

#### Enumerated Values

|Property|Value|
|---|---|
|analysisStatus|ANALYSIS_STATUS_UNSPECIFIED|
|analysisStatus|PENDING|
|analysisStatus|SCANNING|
|analysisStatus|FINISHED_SUCCESS|
|analysisStatus|COMPLETE|
|analysisStatus|FINISHED_FAILED|
|analysisStatus|FINISHED_UNSUPPORTED|
|continuousAnalysis|CONTINUOUS_ANALYSIS_UNSPECIFIED|
|continuousAnalysis|ACTIVE|
|continuousAnalysis|INACTIVE|

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

<h2 id="tocS_Envelope">Envelope</h2>
<!-- backwards compatibility -->
<a id="schemaenvelope"></a>
<a id="schema_Envelope"></a>
<a id="tocSenvelope"></a>
<a id="tocsenvelope"></a>

```json
{
  "payload": "string",
  "payloadType": "string",
  "signatures": [
    {
      "keyid": "string",
      "sig": "string"
    }
  ]
}
```

MUST match https://github.com/secure-systems-lab/dsse/blob/master/envelope.proto. An authenticated message of arbitrary type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|string(byte)|false|none|none|
|payloadType|string|false|none|none|
|signatures|[[EnvelopeSignature](#schemaenvelopesignature)]|false|none|none|

<h2 id="tocS_EnvelopeSignature">EnvelopeSignature</h2>
<!-- backwards compatibility -->
<a id="schemaenvelopesignature"></a>
<a id="schema_EnvelopeSignature"></a>
<a id="tocSenvelopesignature"></a>
<a id="tocsenvelopesignature"></a>

```json
{
  "keyid": "string",
  "sig": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyid|string|false|none|none|
|sig|string(byte)|false|none|none|

<h2 id="tocS_FileHashes">FileHashes</h2>
<!-- backwards compatibility -->
<a id="schemafilehashes"></a>
<a id="schema_FileHashes"></a>
<a id="tocSfilehashes"></a>
<a id="tocsfilehashes"></a>

```json
{
  "fileHash": [
    {
      "type": "string",
      "value": "string"
    }
  ]
}
```

Container message for hashes of byte content of files, used in source messages to verify integrity of source input to the build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileHash|[[Hash](#schemahash)]|false|none|Required. Collection of file hashes.|

<h2 id="tocS_FileLocation">FileLocation</h2>
<!-- backwards compatibility -->
<a id="schemafilelocation"></a>
<a id="schema_FileLocation"></a>
<a id="tocSfilelocation"></a>
<a id="tocsfilelocation"></a>

```json
{
  "filePath": "string"
}
```

Indicates the location at which a package was found.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePath|string|false|none|For jars that are contained inside .war files, this filepath can indicate the path to war file combined with the path to jar file.|

<h2 id="tocS_Fingerprint">Fingerprint</h2>
<!-- backwards compatibility -->
<a id="schemafingerprint"></a>
<a id="schema_Fingerprint"></a>
<a id="tocSfingerprint"></a>
<a id="tocsfingerprint"></a>

```json
{
  "v1Name": "string",
  "v2Blob": [
    "string"
  ],
  "v2Name": "string"
}
```

A set of properties that uniquely identify a given Docker image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|v1Name|string|false|none|Required. The layer ID of the final layer in the Docker image's v1 representation.|
|v2Blob|[string]|false|none|Required. The ordered list of v2 blobs that represent a given image.|
|v2Name|string|false|none|Output only. The name of the image's v2 blobs computed via: [bottom] := v2_blobbottom := sha256(v2_blob[N] + " " + v2_name[N+1]) Only the name of the final blob is kept.|

<h2 id="tocS_GerritSourceContext">GerritSourceContext</h2>
<!-- backwards compatibility -->
<a id="schemagerritsourcecontext"></a>
<a id="schema_GerritSourceContext"></a>
<a id="tocSgerritsourcecontext"></a>
<a id="tocsgerritsourcecontext"></a>

```json
{
  "aliasContext": {
    "kind": "KIND_UNSPECIFIED",
    "name": "string"
  },
  "gerritProject": "string",
  "hostUri": "string",
  "revisionId": "string"
}
```

A SourceContext referring to a Gerrit project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliasContext|[AliasContext](#schemaaliascontext)|false|none|An alias, which may be a branch or tag.|
|gerritProject|string|false|none|The full project name within the host. Projects may be nested, so "project/subproject" is a valid project name. The "repo name" is the hostURI/project.|
|hostUri|string|false|none|The URI of a running Gerrit instance.|
|revisionId|string|false|none|A revision (commit) ID.|

<h2 id="tocS_GitSourceContext">GitSourceContext</h2>
<!-- backwards compatibility -->
<a id="schemagitsourcecontext"></a>
<a id="schema_GitSourceContext"></a>
<a id="tocSgitsourcecontext"></a>
<a id="tocsgitsourcecontext"></a>

```json
{
  "revisionId": "string",
  "url": "string"
}
```

A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revisionId|string|false|none|Git commit hash.|
|url|string|false|none|Git repository URL.|

<h2 id="tocS_GrafeasV1FileLocation">GrafeasV1FileLocation</h2>
<!-- backwards compatibility -->
<a id="schemagrafeasv1filelocation"></a>
<a id="schema_GrafeasV1FileLocation"></a>
<a id="tocSgrafeasv1filelocation"></a>
<a id="tocsgrafeasv1filelocation"></a>

```json
{
  "filePath": "string"
}
```

Indicates the location at which a package was found.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePath|string|false|none|For jars that are contained inside .war files, this filepath can indicate the path to war file combined with the path to jar file.|

<h2 id="tocS_GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder">GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder</h2>
<!-- backwards compatibility -->
<a id="schemagrafeasv1slsaprovenancezerotwoslsabuilder"></a>
<a id="schema_GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder"></a>
<a id="tocSgrafeasv1slsaprovenancezerotwoslsabuilder"></a>
<a id="tocsgrafeasv1slsaprovenancezerotwoslsabuilder"></a>

```json
{
  "id": "string"
}
```

Identifies the entity that executed the recipe, which is trusted to have correctly performed the operation and populated this provenance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|

<h2 id="tocS_GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness">GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness</h2>
<!-- backwards compatibility -->
<a id="schemagrafeasv1slsaprovenancezerotwoslsacompleteness"></a>
<a id="schema_GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness"></a>
<a id="tocSgrafeasv1slsaprovenancezerotwoslsacompleteness"></a>
<a id="tocsgrafeasv1slsaprovenancezerotwoslsacompleteness"></a>

```json
{
  "environment": true,
  "materials": true,
  "parameters": true
}
```

Indicates that the builder claims certain fields in this message to be complete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|boolean|false|none|none|
|materials|boolean|false|none|none|
|parameters|boolean|false|none|none|

<h2 id="tocS_GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource">GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource</h2>
<!-- backwards compatibility -->
<a id="schemagrafeasv1slsaprovenancezerotwoslsaconfigsource"></a>
<a id="schema_GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource"></a>
<a id="tocSgrafeasv1slsaprovenancezerotwoslsaconfigsource"></a>
<a id="tocsgrafeasv1slsaprovenancezerotwoslsaconfigsource"></a>

```json
{
  "digest": {
    "property1": "string",
    "property2": "string"
  },
  "entryPoint": "string",
  "uri": "string"
}
```

Describes where the config file that kicked off the build came from. This is effectively a pointer to the source where buildConfig came from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digest|object|false|none|none|
|entryPoint|string|false|none|none|
|uri|string|false|none|none|

<h2 id="tocS_GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation">GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation</h2>
<!-- backwards compatibility -->
<a id="schemagrafeasv1slsaprovenancezerotwoslsainvocation"></a>
<a id="schema_GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation"></a>
<a id="tocSgrafeasv1slsaprovenancezerotwoslsainvocation"></a>
<a id="tocsgrafeasv1slsaprovenancezerotwoslsainvocation"></a>

```json
{
  "configSource": {
    "digest": {
      "property1": "string",
      "property2": "string"
    },
    "entryPoint": "string",
    "uri": "string"
  },
  "environment": {
    "property1": null,
    "property2": null
  },
  "parameters": {
    "property1": null,
    "property2": null
  }
}
```

Identifies the event that kicked off the build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configSource|[GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource](#schemagrafeasv1slsaprovenancezerotwoslsaconfigsource)|false|none|Describes where the config file that kicked off the build came from. This is effectively a pointer to the source where buildConfig came from.|
|environment|object|false|none|none|
|parameters|object|false|none|none|

<h2 id="tocS_GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial">GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial</h2>
<!-- backwards compatibility -->
<a id="schemagrafeasv1slsaprovenancezerotwoslsamaterial"></a>
<a id="schema_GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial"></a>
<a id="tocSgrafeasv1slsaprovenancezerotwoslsamaterial"></a>
<a id="tocsgrafeasv1slsaprovenancezerotwoslsamaterial"></a>

```json
{
  "digest": {
    "property1": "string",
    "property2": "string"
  },
  "uri": "string"
}
```

The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digest|object|false|none|none|
|uri|string|false|none|none|

<h2 id="tocS_GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata">GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagrafeasv1slsaprovenancezerotwoslsametadata"></a>
<a id="schema_GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata"></a>
<a id="tocSgrafeasv1slsaprovenancezerotwoslsametadata"></a>
<a id="tocsgrafeasv1slsaprovenancezerotwoslsametadata"></a>

```json
{
  "buildFinishedOn": "string",
  "buildInvocationId": "string",
  "buildStartedOn": "string",
  "completeness": {
    "environment": true,
    "materials": true,
    "parameters": true
  },
  "reproducible": true
}
```

Other properties of the build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildFinishedOn|string(google-datetime)|false|none|none|
|buildInvocationId|string|false|none|none|
|buildStartedOn|string(google-datetime)|false|none|none|
|completeness|[GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness](#schemagrafeasv1slsaprovenancezerotwoslsacompleteness)|false|none|Indicates that the builder claims certain fields in this message to be complete.|
|reproducible|boolean|false|none|none|

<h2 id="tocS_Hash">Hash</h2>
<!-- backwards compatibility -->
<a id="schemahash"></a>
<a id="schema_Hash"></a>
<a id="tocShash"></a>
<a id="tocshash"></a>

```json
{
  "type": "string",
  "value": "string"
}
```

Container message for hash values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Required. The type of hash that was performed, e.g. "SHA-256".|
|value|string(byte)|false|none|Required. The hash value.|

<h2 id="tocS_Identity">Identity</h2>
<!-- backwards compatibility -->
<a id="schemaidentity"></a>
<a id="schema_Identity"></a>
<a id="tocSidentity"></a>
<a id="tocsidentity"></a>

```json
{
  "revision": 0,
  "updateId": "string"
}
```

The unique identifier of the update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revision|integer(int32)|false|none|The revision number of the update.|
|updateId|string|false|none|The revision independent identifier of the update.|

<h2 id="tocS_ImageOccurrence">ImageOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemaimageoccurrence"></a>
<a id="schema_ImageOccurrence"></a>
<a id="tocSimageoccurrence"></a>
<a id="tocsimageoccurrence"></a>

```json
{
  "baseResourceUrl": "string",
  "distance": 0,
  "fingerprint": {
    "v1Name": "string",
    "v2Blob": [
      "string"
    ],
    "v2Name": "string"
  },
  "layerInfo": [
    {
      "arguments": "string",
      "directive": "string"
    }
  ]
}
```

Details of the derived image portion of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseResourceUrl|string|false|none|Output only. This contains the base image URL for the derived image occurrence.|
|distance|integer(int32)|false|none|Output only. The number of layers by which this image differs from the associated image basis.|
|fingerprint|[Fingerprint](#schemafingerprint)|false|none|Required. The fingerprint of the derived image.|
|layerInfo|[[Layer](#schemalayer)]|false|none|This contains layer-specific metadata, if populated it has length "distance" and is ordered with [distance] being the layer immediately following the base image and [1] being the final layer.|

<h2 id="tocS_InTotoProvenance">InTotoProvenance</h2>
<!-- backwards compatibility -->
<a id="schemaintotoprovenance"></a>
<a id="schema_InTotoProvenance"></a>
<a id="tocSintotoprovenance"></a>
<a id="tocsintotoprovenance"></a>

```json
{
  "builderConfig": {
    "id": "string"
  },
  "materials": [
    "string"
  ],
  "metadata": {
    "buildFinishedOn": "string",
    "buildInvocationId": "string",
    "buildStartedOn": "string",
    "completeness": {
      "arguments": true,
      "environment": true,
      "materials": true
    },
    "reproducible": true
  },
  "recipe": {
    "arguments": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "definedInMaterial": "string",
    "entryPoint": "string",
    "environment": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|builderConfig|[BuilderConfig](#schemabuilderconfig)|false|none|required|
|materials|[string]|false|none|The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. This is considered to be incomplete unless metadata.completeness.materials is true. Unset or null is equivalent to empty.|
|metadata|[Metadata](#schemametadata)|false|none|Other properties of the build.|
|recipe|[Recipe](#schemarecipe)|false|none|Identifies the configuration used for the build. When combined with materials, this SHOULD fully describe the build, such that re-running this recipe results in bit-for-bit identical output (if the build is reproducible). required|

<h2 id="tocS_InTotoStatement">InTotoStatement</h2>
<!-- backwards compatibility -->
<a id="schemaintotostatement"></a>
<a id="schema_InTotoStatement"></a>
<a id="tocSintotostatement"></a>
<a id="tocsintotostatement"></a>

```json
{
  "_type": "string",
  "predicateType": "string",
  "provenance": {
    "builderConfig": {
      "id": "string"
    },
    "materials": [
      "string"
    ],
    "metadata": {
      "buildFinishedOn": "string",
      "buildInvocationId": "string",
      "buildStartedOn": "string",
      "completeness": {
        "arguments": true,
        "environment": true,
        "materials": true
      },
      "reproducible": true
    },
    "recipe": {
      "arguments": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "definedInMaterial": "string",
      "entryPoint": "string",
      "environment": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "type": "string"
    }
  },
  "slsaProvenance": {
    "builder": {
      "id": "string"
    },
    "materials": [
      {
        "digest": {
          "property1": "string",
          "property2": "string"
        },
        "uri": "string"
      }
    ],
    "metadata": {
      "buildFinishedOn": "string",
      "buildInvocationId": "string",
      "buildStartedOn": "string",
      "completeness": {
        "arguments": true,
        "environment": true,
        "materials": true
      },
      "reproducible": true
    },
    "recipe": {
      "arguments": {
        "property1": null,
        "property2": null
      },
      "definedInMaterial": "string",
      "entryPoint": "string",
      "environment": {
        "property1": null,
        "property2": null
      },
      "type": "string"
    }
  },
  "slsaProvenanceZeroTwo": {
    "buildConfig": {
      "property1": null,
      "property2": null
    },
    "buildType": "string",
    "builder": {
      "id": "string"
    },
    "invocation": {
      "configSource": {
        "digest": {
          "property1": "string",
          "property2": "string"
        },
        "entryPoint": "string",
        "uri": "string"
      },
      "environment": {
        "property1": null,
        "property2": null
      },
      "parameters": {
        "property1": null,
        "property2": null
      }
    },
    "materials": [
      {
        "digest": {
          "property1": "string",
          "property2": "string"
        },
        "uri": "string"
      }
    ],
    "metadata": {
      "buildFinishedOn": "string",
      "buildInvocationId": "string",
      "buildStartedOn": "string",
      "completeness": {
        "environment": true,
        "materials": true,
        "parameters": true
      },
      "reproducible": true
    }
  },
  "subject": [
    {
      "digest": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string"
    }
  ]
}
```

Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always "application/vnd.in-toto+json".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_type|string|false|none|Always `https://in-toto.io/Statement/v0.1`.|
|predicateType|string|false|none|`https://slsa.dev/provenance/v0.1` for SlsaProvenance.|
|provenance|[InTotoProvenance](#schemaintotoprovenance)|false|none|none|
|slsaProvenance|[SlsaProvenance](#schemaslsaprovenance)|false|none|none|
|slsaProvenanceZeroTwo|[SlsaProvenanceZeroTwo](#schemaslsaprovenancezerotwo)|false|none|See full explanation of fields at slsa.dev/provenance/v0.2.|
|subject|[[Subject](#schemasubject)]|false|none|none|

<h2 id="tocS_Justification">Justification</h2>
<!-- backwards compatibility -->
<a id="schemajustification"></a>
<a id="schema_Justification"></a>
<a id="tocSjustification"></a>
<a id="tocsjustification"></a>

```json
{
  "details": "string",
  "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
}
```

Justification provides the justification when the state of the assessment if NOT_AFFECTED.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|none|Additional details on why this justification was chosen.|
|justificationType|string|false|none|The justification type for this vulnerability.|

#### Enumerated Values

|Property|Value|
|---|---|
|justificationType|JUSTIFICATION_TYPE_UNSPECIFIED|
|justificationType|COMPONENT_NOT_PRESENT|
|justificationType|VULNERABLE_CODE_NOT_PRESENT|
|justificationType|VULNERABLE_CODE_NOT_IN_EXECUTE_PATH|
|justificationType|VULNERABLE_CODE_CANNOT_BE_CONTROLLED_BY_ADVERSARY|
|justificationType|INLINE_MITIGATIONS_ALREADY_EXIST|

<h2 id="tocS_Jwt">Jwt</h2>
<!-- backwards compatibility -->
<a id="schemajwt"></a>
<a id="schema_Jwt"></a>
<a id="tocSjwt"></a>
<a id="tocsjwt"></a>

```json
{
  "compactJwt": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compactJwt|string|false|none|The compact encoding of a JWS, which is always three base64 encoded strings joined by periods. For details, see: https://tools.ietf.org/html/rfc7515.html#section-3.1|

<h2 id="tocS_LanguagePackageDependency">LanguagePackageDependency</h2>
<!-- backwards compatibility -->
<a id="schemalanguagepackagedependency"></a>
<a id="schema_LanguagePackageDependency"></a>
<a id="tocSlanguagepackagedependency"></a>
<a id="tocslanguagepackagedependency"></a>

```json
{
  "package": "string",
  "version": "string"
}
```

Indicates a language package available between this package and the customer's resource artifact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|package|string|false|none|none|
|version|string|false|none|none|

<h2 id="tocS_Layer">Layer</h2>
<!-- backwards compatibility -->
<a id="schemalayer"></a>
<a id="schema_Layer"></a>
<a id="tocSlayer"></a>
<a id="tocslayer"></a>

```json
{
  "arguments": "string",
  "directive": "string"
}
```

Layer holds metadata specific to a layer of a Docker image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arguments|string|false|none|The recovered arguments to the Dockerfile directive.|
|directive|string|false|none|Required. The recovered Dockerfile directive used to construct this layer. See https://docs.docker.com/engine/reference/builder/ for more information.|

<h2 id="tocS_License">License</h2>
<!-- backwards compatibility -->
<a id="schemalicense"></a>
<a id="schema_License"></a>
<a id="tocSlicense"></a>
<a id="tocslicense"></a>

```json
{
  "comments": "string",
  "expression": "string"
}
```

License information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|string|false|none|Comments|
|expression|string|false|none|Often a single license can be used to represent the licensing terms. Sometimes it is necessary to include a choice of one or more licenses or some combination of license identifiers. Examples: "LGPL-2.1-only OR MIT", "LGPL-2.1-only AND MIT", "GPL-2.0-or-later WITH Bison-exception-2.2".|

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

<h2 id="tocS_ListVulnerabilitiesResponse">ListVulnerabilitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvulnerabilitiesresponse"></a>
<a id="schema_ListVulnerabilitiesResponse"></a>
<a id="tocSlistvulnerabilitiesresponse"></a>
<a id="tocslistvulnerabilitiesresponse"></a>

```json
{
  "nextPageToken": "string",
  "occurrences": [
    {
      "attestation": {
        "jwts": [
          {
            "compactJwt": "string"
          }
        ],
        "serializedPayload": "string",
        "signatures": [
          {
            "publicKeyId": "string",
            "signature": "string"
          }
        ]
      },
      "build": {
        "intotoProvenance": {
          "builderConfig": {
            "id": "string"
          },
          "materials": [
            "string"
          ],
          "metadata": {
            "buildFinishedOn": "string",
            "buildInvocationId": "string",
            "buildStartedOn": "string",
            "completeness": {
              "arguments": true,
              "environment": true,
              "materials": true
            },
            "reproducible": true
          },
          "recipe": {
            "arguments": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "definedInMaterial": "string",
            "entryPoint": "string",
            "environment": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "type": "string"
          }
        },
        "intotoStatement": {
          "_type": "string",
          "predicateType": "string",
          "provenance": {
            "builderConfig": {
              "id": "string"
            },
            "materials": [
              "string"
            ],
            "metadata": {
              "buildFinishedOn": "string",
              "buildInvocationId": "string",
              "buildStartedOn": "string",
              "completeness": {
                "arguments": true,
                "environment": true,
                "materials": true
              },
              "reproducible": true
            },
            "recipe": {
              "arguments": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "definedInMaterial": "string",
              "entryPoint": "string",
              "environment": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "type": "string"
            }
          },
          "slsaProvenance": {
            "builder": {
              "id": "string"
            },
            "materials": [
              {
                "digest": {
                  "property1": "string",
                  "property2": "string"
                },
                "uri": "string"
              }
            ],
            "metadata": {
              "buildFinishedOn": "string",
              "buildInvocationId": "string",
              "buildStartedOn": "string",
              "completeness": {
                "arguments": true,
                "environment": true,
                "materials": true
              },
              "reproducible": true
            },
            "recipe": {
              "arguments": {
                "property1": null,
                "property2": null
              },
              "definedInMaterial": "string",
              "entryPoint": "string",
              "environment": {
                "property1": null,
                "property2": null
              },
              "type": "string"
            }
          },
          "slsaProvenanceZeroTwo": {
            "buildConfig": {
              "property1": null,
              "property2": null
            },
            "buildType": "string",
            "builder": {
              "id": "string"
            },
            "invocation": {
              "configSource": {
                "digest": {
                  "property1": "string",
                  "property2": "string"
                },
                "entryPoint": "string",
                "uri": "string"
              },
              "environment": {
                "property1": null,
                "property2": null
              },
              "parameters": {
                "property1": null,
                "property2": null
              }
            },
            "materials": [
              {
                "digest": {
                  "property1": "string",
                  "property2": "string"
                },
                "uri": "string"
              }
            ],
            "metadata": {
              "buildFinishedOn": "string",
              "buildInvocationId": "string",
              "buildStartedOn": "string",
              "completeness": {
                "environment": true,
                "materials": true,
                "parameters": true
              },
              "reproducible": true
            }
          },
          "subject": [
            {
              "digest": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string"
            }
          ]
        },
        "provenance": {
          "buildOptions": {
            "property1": "string",
            "property2": "string"
          },
          "builderVersion": "string",
          "builtArtifacts": [
            {
              "checksum": "string",
              "id": "string",
              "names": [
                "string"
              ]
            }
          ],
          "commands": [
            {
              "args": [
                "string"
              ],
              "dir": "string",
              "env": [
                "string"
              ],
              "id": "string",
              "name": "string",
              "waitFor": [
                "string"
              ]
            }
          ],
          "createTime": "string",
          "creator": "string",
          "endTime": "string",
          "id": "string",
          "logsUri": "string",
          "projectId": "string",
          "sourceProvenance": {
            "additionalContexts": [
              {
                "cloudRepo": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "repoId": {
                    "projectRepoId": {
                      "projectId": "string",
                      "repoName": "string"
                    },
                    "uid": "string"
                  },
                  "revisionId": "string"
                },
                "gerrit": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "gerritProject": "string",
                  "hostUri": "string",
                  "revisionId": "string"
                },
                "git": {
                  "revisionId": "string",
                  "url": "string"
                },
                "labels": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ],
            "artifactStorageSourceUri": "string",
            "context": {
              "cloudRepo": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "repoId": {
                  "projectRepoId": {
                    "projectId": "string",
                    "repoName": "string"
                  },
                  "uid": "string"
                },
                "revisionId": "string"
              },
              "gerrit": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "gerritProject": "string",
                "hostUri": "string",
                "revisionId": "string"
              },
              "git": {
                "revisionId": "string",
                "url": "string"
              },
              "labels": {
                "property1": "string",
                "property2": "string"
              }
            },
            "fileHashes": {
              "property1": {
                "fileHash": [
                  {
                    "type": "string",
                    "value": "string"
                  }
                ]
              },
              "property2": {
                "fileHash": [
                  {
                    "type": "string",
                    "value": "string"
                  }
                ]
              }
            }
          },
          "startTime": "string",
          "triggerId": "string"
        },
        "provenanceBytes": "string"
      },
      "compliance": {
        "nonComplianceReason": "string",
        "nonCompliantFiles": [
          {
            "displayCommand": "string",
            "path": "string",
            "reason": "string"
          }
        ]
      },
      "createTime": "string",
      "deployment": {
        "address": "string",
        "config": "string",
        "deployTime": "string",
        "platform": "PLATFORM_UNSPECIFIED",
        "resourceUri": [
          "string"
        ],
        "undeployTime": "string",
        "userEmail": "string"
      },
      "discovery": {
        "analysisCompleted": {
          "analysisType": [
            "string"
          ]
        },
        "analysisError": [
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
        "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
        "analysisStatusError": {
          "code": 0,
          "details": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "message": "string"
        },
        "archiveTime": "string",
        "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
        "cpe": "string",
        "lastScanTime": "string"
      },
      "dsseAttestation": {
        "envelope": {
          "payload": "string",
          "payloadType": "string",
          "signatures": [
            {
              "keyid": "string",
              "sig": "string"
            }
          ]
        },
        "statement": {
          "_type": "string",
          "predicateType": "string",
          "provenance": {
            "builderConfig": {
              "id": "string"
            },
            "materials": [
              "string"
            ],
            "metadata": {
              "buildFinishedOn": "string",
              "buildInvocationId": "string",
              "buildStartedOn": "string",
              "completeness": {
                "arguments": true,
                "environment": true,
                "materials": true
              },
              "reproducible": true
            },
            "recipe": {
              "arguments": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "definedInMaterial": "string",
              "entryPoint": "string",
              "environment": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "type": "string"
            }
          },
          "slsaProvenance": {
            "builder": {
              "id": "string"
            },
            "materials": [
              {
                "digest": {
                  "property1": "string",
                  "property2": "string"
                },
                "uri": "string"
              }
            ],
            "metadata": {
              "buildFinishedOn": "string",
              "buildInvocationId": "string",
              "buildStartedOn": "string",
              "completeness": {
                "arguments": true,
                "environment": true,
                "materials": true
              },
              "reproducible": true
            },
            "recipe": {
              "arguments": {
                "property1": null,
                "property2": null
              },
              "definedInMaterial": "string",
              "entryPoint": "string",
              "environment": {
                "property1": null,
                "property2": null
              },
              "type": "string"
            }
          },
          "slsaProvenanceZeroTwo": {
            "buildConfig": {
              "property1": null,
              "property2": null
            },
            "buildType": "string",
            "builder": {
              "id": "string"
            },
            "invocation": {
              "configSource": {
                "digest": {
                  "property1": "string",
                  "property2": "string"
                },
                "entryPoint": "string",
                "uri": "string"
              },
              "environment": {
                "property1": null,
                "property2": null
              },
              "parameters": {
                "property1": null,
                "property2": null
              }
            },
            "materials": [
              {
                "digest": {
                  "property1": "string",
                  "property2": "string"
                },
                "uri": "string"
              }
            ],
            "metadata": {
              "buildFinishedOn": "string",
              "buildInvocationId": "string",
              "buildStartedOn": "string",
              "completeness": {
                "environment": true,
                "materials": true,
                "parameters": true
              },
              "reproducible": true
            }
          },
          "subject": [
            {
              "digest": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string"
            }
          ]
        }
      },
      "envelope": {
        "payload": "string",
        "payloadType": "string",
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ]
      },
      "image": {
        "baseResourceUrl": "string",
        "distance": 0,
        "fingerprint": {
          "v1Name": "string",
          "v2Blob": [
            "string"
          ],
          "v2Name": "string"
        },
        "layerInfo": [
          {
            "arguments": "string",
            "directive": "string"
          }
        ]
      },
      "kind": "NOTE_KIND_UNSPECIFIED",
      "name": "string",
      "noteName": "string",
      "package": {
        "architecture": "ARCHITECTURE_UNSPECIFIED",
        "cpeUri": "string",
        "license": {
          "comments": "string",
          "expression": "string"
        },
        "location": [
          {
            "cpeUri": "string",
            "path": "string",
            "version": {
              "epoch": 0,
              "fullName": "string",
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            }
          }
        ],
        "name": "string",
        "packageType": "string",
        "version": {
          "epoch": 0,
          "fullName": "string",
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        }
      },
      "remediation": "string",
      "resourceUri": "string",
      "updateTime": "string",
      "upgrade": {
        "distribution": {
          "classification": "string",
          "cpeUri": "string",
          "cve": [
            "string"
          ],
          "severity": "string"
        },
        "package": "string",
        "parsedVersion": {
          "epoch": 0,
          "fullName": "string",
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        },
        "windowsUpdate": {
          "categories": [
            {
              "categoryId": "string",
              "name": "string"
            }
          ],
          "description": "string",
          "identity": {
            "revision": 0,
            "updateId": "string"
          },
          "kbArticleIds": [
            "string"
          ],
          "lastPublishedTimestamp": "string",
          "supportUrl": "string",
          "title": "string"
        }
      },
      "vulnerability": {
        "cvssScore": 0,
        "cvssV2": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
        "cvssv3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "effectiveSeverity": "SEVERITY_UNSPECIFIED",
        "fixAvailable": true,
        "longDescription": "string",
        "packageIssue": [
          {
            "affectedCpeUri": "string",
            "affectedPackage": "string",
            "affectedVersion": {
              "epoch": 0,
              "fullName": "string",
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "effectiveSeverity": "SEVERITY_UNSPECIFIED",
            "fileLocation": [
              {
                "filePath": "string"
              }
            ],
            "fixAvailable": true,
            "fixedCpeUri": "string",
            "fixedPackage": "string",
            "fixedVersion": {
              "epoch": 0,
              "fullName": "string",
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "packageType": "string"
          }
        ],
        "relatedUrls": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "severity": "SEVERITY_UNSPECIFIED",
        "shortDescription": "string",
        "type": "string",
        "vexAssessment": {
          "cve": "string",
          "impacts": [
            "string"
          ],
          "justification": {
            "details": "string",
            "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
          },
          "noteName": "string",
          "relatedUris": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "remediations": [
            {
              "details": "string",
              "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
              "remediationUri": {
                "label": "string",
                "url": "string"
              }
            }
          ],
          "state": "STATE_UNSPECIFIED"
        }
      }
    }
  ]
}
```

ListVulnerabilitiesResponse contains a single page of vulnerabilities resulting from a scan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A page token that can be used in a subsequent call to ListVulnerabilities to continue retrieving results.|
|occurrences|[[Occurrence](#schemaoccurrence)]|false|none|The list of Vulnerability Occurrences resulting from a scan.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "cpeUri": "string",
  "path": "string",
  "version": {
    "epoch": 0,
    "fullName": "string",
    "inclusive": true,
    "kind": "VERSION_KIND_UNSPECIFIED",
    "name": "string",
    "revision": "string"
  }
}
```

An occurrence of a particular package installation found within a system's filesystem. E.g., glibc was found in `/var/lib/dpkg/status`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpeUri|string|false|none|Deprecated. The CPE URI in [CPE format](https://cpe.mitre.org/specification/)|
|path|string|false|none|The path from which we gathered that this package/version is installed.|
|version|[Version](#schemaversion)|false|none|Deprecated. The version installed at this location.|

<h2 id="tocS_Maintainer">Maintainer</h2>
<!-- backwards compatibility -->
<a id="schemamaintainer"></a>
<a id="schema_Maintainer"></a>
<a id="tocSmaintainer"></a>
<a id="tocsmaintainer"></a>

```json
{
  "kind": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Material">Material</h2>
<!-- backwards compatibility -->
<a id="schemamaterial"></a>
<a id="schema_Material"></a>
<a id="tocSmaterial"></a>
<a id="tocsmaterial"></a>

```json
{
  "digest": {
    "property1": "string",
    "property2": "string"
  },
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digest|object|false|none|none|
|uri|string|false|none|none|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "buildFinishedOn": "string",
  "buildInvocationId": "string",
  "buildStartedOn": "string",
  "completeness": {
    "arguments": true,
    "environment": true,
    "materials": true
  },
  "reproducible": true
}
```

Other properties of the build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildFinishedOn|string(google-datetime)|false|none|The timestamp of when the build completed.|
|buildInvocationId|string|false|none|Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec.|
|buildStartedOn|string(google-datetime)|false|none|The timestamp of when the build started.|
|completeness|[Completeness](#schemacompleteness)|false|none|Indicates that the builder claims certain fields in this message to be complete.|
|reproducible|boolean|false|none|If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output.|

<h2 id="tocS_NonCompliantFile">NonCompliantFile</h2>
<!-- backwards compatibility -->
<a id="schemanoncompliantfile"></a>
<a id="schema_NonCompliantFile"></a>
<a id="tocSnoncompliantfile"></a>
<a id="tocsnoncompliantfile"></a>

```json
{
  "displayCommand": "string",
  "path": "string",
  "reason": "string"
}
```

Details about files that caused a compliance check to fail. display_command is a single command that can be used to display a list of non compliant files. When there is no such command, we can also iterate a list of non compliant file using 'path'.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayCommand|string|false|none|Command to display the non-compliant files.|
|path|string|false|none|Empty if `display_command` is set.|
|reason|string|false|none|Explains why a file is non compliant for a CIS check.|

<h2 id="tocS_Occurrence">Occurrence</h2>
<!-- backwards compatibility -->
<a id="schemaoccurrence"></a>
<a id="schema_Occurrence"></a>
<a id="tocSoccurrence"></a>
<a id="tocsoccurrence"></a>

```json
{
  "attestation": {
    "jwts": [
      {
        "compactJwt": "string"
      }
    ],
    "serializedPayload": "string",
    "signatures": [
      {
        "publicKeyId": "string",
        "signature": "string"
      }
    ]
  },
  "build": {
    "intotoProvenance": {
      "builderConfig": {
        "id": "string"
      },
      "materials": [
        "string"
      ],
      "metadata": {
        "buildFinishedOn": "string",
        "buildInvocationId": "string",
        "buildStartedOn": "string",
        "completeness": {
          "arguments": true,
          "environment": true,
          "materials": true
        },
        "reproducible": true
      },
      "recipe": {
        "arguments": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "definedInMaterial": "string",
        "entryPoint": "string",
        "environment": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "type": "string"
      }
    },
    "intotoStatement": {
      "_type": "string",
      "predicateType": "string",
      "provenance": {
        "builderConfig": {
          "id": "string"
        },
        "materials": [
          "string"
        ],
        "metadata": {
          "buildFinishedOn": "string",
          "buildInvocationId": "string",
          "buildStartedOn": "string",
          "completeness": {
            "arguments": true,
            "environment": true,
            "materials": true
          },
          "reproducible": true
        },
        "recipe": {
          "arguments": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "definedInMaterial": "string",
          "entryPoint": "string",
          "environment": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "type": "string"
        }
      },
      "slsaProvenance": {
        "builder": {
          "id": "string"
        },
        "materials": [
          {
            "digest": {
              "property1": "string",
              "property2": "string"
            },
            "uri": "string"
          }
        ],
        "metadata": {
          "buildFinishedOn": "string",
          "buildInvocationId": "string",
          "buildStartedOn": "string",
          "completeness": {
            "arguments": true,
            "environment": true,
            "materials": true
          },
          "reproducible": true
        },
        "recipe": {
          "arguments": {
            "property1": null,
            "property2": null
          },
          "definedInMaterial": "string",
          "entryPoint": "string",
          "environment": {
            "property1": null,
            "property2": null
          },
          "type": "string"
        }
      },
      "slsaProvenanceZeroTwo": {
        "buildConfig": {
          "property1": null,
          "property2": null
        },
        "buildType": "string",
        "builder": {
          "id": "string"
        },
        "invocation": {
          "configSource": {
            "digest": {
              "property1": "string",
              "property2": "string"
            },
            "entryPoint": "string",
            "uri": "string"
          },
          "environment": {
            "property1": null,
            "property2": null
          },
          "parameters": {
            "property1": null,
            "property2": null
          }
        },
        "materials": [
          {
            "digest": {
              "property1": "string",
              "property2": "string"
            },
            "uri": "string"
          }
        ],
        "metadata": {
          "buildFinishedOn": "string",
          "buildInvocationId": "string",
          "buildStartedOn": "string",
          "completeness": {
            "environment": true,
            "materials": true,
            "parameters": true
          },
          "reproducible": true
        }
      },
      "subject": [
        {
          "digest": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string"
        }
      ]
    },
    "provenance": {
      "buildOptions": {
        "property1": "string",
        "property2": "string"
      },
      "builderVersion": "string",
      "builtArtifacts": [
        {
          "checksum": "string",
          "id": "string",
          "names": [
            "string"
          ]
        }
      ],
      "commands": [
        {
          "args": [
            "string"
          ],
          "dir": "string",
          "env": [
            "string"
          ],
          "id": "string",
          "name": "string",
          "waitFor": [
            "string"
          ]
        }
      ],
      "createTime": "string",
      "creator": "string",
      "endTime": "string",
      "id": "string",
      "logsUri": "string",
      "projectId": "string",
      "sourceProvenance": {
        "additionalContexts": [
          {
            "cloudRepo": {
              "aliasContext": {
                "kind": "KIND_UNSPECIFIED",
                "name": "string"
              },
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              },
              "revisionId": "string"
            },
            "gerrit": {
              "aliasContext": {
                "kind": "KIND_UNSPECIFIED",
                "name": "string"
              },
              "gerritProject": "string",
              "hostUri": "string",
              "revisionId": "string"
            },
            "git": {
              "revisionId": "string",
              "url": "string"
            },
            "labels": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "artifactStorageSourceUri": "string",
        "context": {
          "cloudRepo": {
            "aliasContext": {
              "kind": "KIND_UNSPECIFIED",
              "name": "string"
            },
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            },
            "revisionId": "string"
          },
          "gerrit": {
            "aliasContext": {
              "kind": "KIND_UNSPECIFIED",
              "name": "string"
            },
            "gerritProject": "string",
            "hostUri": "string",
            "revisionId": "string"
          },
          "git": {
            "revisionId": "string",
            "url": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        },
        "fileHashes": {
          "property1": {
            "fileHash": [
              {
                "type": "string",
                "value": "string"
              }
            ]
          },
          "property2": {
            "fileHash": [
              {
                "type": "string",
                "value": "string"
              }
            ]
          }
        }
      },
      "startTime": "string",
      "triggerId": "string"
    },
    "provenanceBytes": "string"
  },
  "compliance": {
    "nonComplianceReason": "string",
    "nonCompliantFiles": [
      {
        "displayCommand": "string",
        "path": "string",
        "reason": "string"
      }
    ]
  },
  "createTime": "string",
  "deployment": {
    "address": "string",
    "config": "string",
    "deployTime": "string",
    "platform": "PLATFORM_UNSPECIFIED",
    "resourceUri": [
      "string"
    ],
    "undeployTime": "string",
    "userEmail": "string"
  },
  "discovery": {
    "analysisCompleted": {
      "analysisType": [
        "string"
      ]
    },
    "analysisError": [
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
    "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
    "analysisStatusError": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "archiveTime": "string",
    "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
    "cpe": "string",
    "lastScanTime": "string"
  },
  "dsseAttestation": {
    "envelope": {
      "payload": "string",
      "payloadType": "string",
      "signatures": [
        {
          "keyid": "string",
          "sig": "string"
        }
      ]
    },
    "statement": {
      "_type": "string",
      "predicateType": "string",
      "provenance": {
        "builderConfig": {
          "id": "string"
        },
        "materials": [
          "string"
        ],
        "metadata": {
          "buildFinishedOn": "string",
          "buildInvocationId": "string",
          "buildStartedOn": "string",
          "completeness": {
            "arguments": true,
            "environment": true,
            "materials": true
          },
          "reproducible": true
        },
        "recipe": {
          "arguments": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "definedInMaterial": "string",
          "entryPoint": "string",
          "environment": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "type": "string"
        }
      },
      "slsaProvenance": {
        "builder": {
          "id": "string"
        },
        "materials": [
          {
            "digest": {
              "property1": "string",
              "property2": "string"
            },
            "uri": "string"
          }
        ],
        "metadata": {
          "buildFinishedOn": "string",
          "buildInvocationId": "string",
          "buildStartedOn": "string",
          "completeness": {
            "arguments": true,
            "environment": true,
            "materials": true
          },
          "reproducible": true
        },
        "recipe": {
          "arguments": {
            "property1": null,
            "property2": null
          },
          "definedInMaterial": "string",
          "entryPoint": "string",
          "environment": {
            "property1": null,
            "property2": null
          },
          "type": "string"
        }
      },
      "slsaProvenanceZeroTwo": {
        "buildConfig": {
          "property1": null,
          "property2": null
        },
        "buildType": "string",
        "builder": {
          "id": "string"
        },
        "invocation": {
          "configSource": {
            "digest": {
              "property1": "string",
              "property2": "string"
            },
            "entryPoint": "string",
            "uri": "string"
          },
          "environment": {
            "property1": null,
            "property2": null
          },
          "parameters": {
            "property1": null,
            "property2": null
          }
        },
        "materials": [
          {
            "digest": {
              "property1": "string",
              "property2": "string"
            },
            "uri": "string"
          }
        ],
        "metadata": {
          "buildFinishedOn": "string",
          "buildInvocationId": "string",
          "buildStartedOn": "string",
          "completeness": {
            "environment": true,
            "materials": true,
            "parameters": true
          },
          "reproducible": true
        }
      },
      "subject": [
        {
          "digest": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string"
        }
      ]
    }
  },
  "envelope": {
    "payload": "string",
    "payloadType": "string",
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ]
  },
  "image": {
    "baseResourceUrl": "string",
    "distance": 0,
    "fingerprint": {
      "v1Name": "string",
      "v2Blob": [
        "string"
      ],
      "v2Name": "string"
    },
    "layerInfo": [
      {
        "arguments": "string",
        "directive": "string"
      }
    ]
  },
  "kind": "NOTE_KIND_UNSPECIFIED",
  "name": "string",
  "noteName": "string",
  "package": {
    "architecture": "ARCHITECTURE_UNSPECIFIED",
    "cpeUri": "string",
    "license": {
      "comments": "string",
      "expression": "string"
    },
    "location": [
      {
        "cpeUri": "string",
        "path": "string",
        "version": {
          "epoch": 0,
          "fullName": "string",
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        }
      }
    ],
    "name": "string",
    "packageType": "string",
    "version": {
      "epoch": 0,
      "fullName": "string",
      "inclusive": true,
      "kind": "VERSION_KIND_UNSPECIFIED",
      "name": "string",
      "revision": "string"
    }
  },
  "remediation": "string",
  "resourceUri": "string",
  "updateTime": "string",
  "upgrade": {
    "distribution": {
      "classification": "string",
      "cpeUri": "string",
      "cve": [
        "string"
      ],
      "severity": "string"
    },
    "package": "string",
    "parsedVersion": {
      "epoch": 0,
      "fullName": "string",
      "inclusive": true,
      "kind": "VERSION_KIND_UNSPECIFIED",
      "name": "string",
      "revision": "string"
    },
    "windowsUpdate": {
      "categories": [
        {
          "categoryId": "string",
          "name": "string"
        }
      ],
      "description": "string",
      "identity": {
        "revision": 0,
        "updateId": "string"
      },
      "kbArticleIds": [
        "string"
      ],
      "lastPublishedTimestamp": "string",
      "supportUrl": "string",
      "title": "string"
    }
  },
  "vulnerability": {
    "cvssScore": 0,
    "cvssV2": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "authentication": "AUTHENTICATION_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
    "cvssv3": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "authentication": "AUTHENTICATION_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "effectiveSeverity": "SEVERITY_UNSPECIFIED",
    "fixAvailable": true,
    "longDescription": "string",
    "packageIssue": [
      {
        "affectedCpeUri": "string",
        "affectedPackage": "string",
        "affectedVersion": {
          "epoch": 0,
          "fullName": "string",
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        },
        "effectiveSeverity": "SEVERITY_UNSPECIFIED",
        "fileLocation": [
          {
            "filePath": "string"
          }
        ],
        "fixAvailable": true,
        "fixedCpeUri": "string",
        "fixedPackage": "string",
        "fixedVersion": {
          "epoch": 0,
          "fullName": "string",
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        },
        "packageType": "string"
      }
    ],
    "relatedUrls": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "severity": "SEVERITY_UNSPECIFIED",
    "shortDescription": "string",
    "type": "string",
    "vexAssessment": {
      "cve": "string",
      "impacts": [
        "string"
      ],
      "justification": {
        "details": "string",
        "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
      },
      "noteName": "string",
      "relatedUris": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "remediations": [
        {
          "details": "string",
          "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
          "remediationUri": {
            "label": "string",
            "url": "string"
          }
        }
      ],
      "state": "STATE_UNSPECIFIED"
    }
  }
}
```

An instance of an analysis type that has been found on a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attestation|[AttestationOccurrence](#schemaattestationoccurrence)|false|none|Describes an attestation of an artifact.|
|build|[BuildOccurrence](#schemabuildoccurrence)|false|none|Describes a verifiable build.|
|compliance|[ComplianceOccurrence](#schemacomplianceoccurrence)|false|none|Describes a compliance violation on a linked resource.|
|createTime|string(google-datetime)|false|none|Output only. The time this occurrence was created.|
|deployment|[DeploymentOccurrence](#schemadeploymentoccurrence)|false|none|Describes the deployment of an artifact on a runtime.|
|discovery|[DiscoveryOccurrence](#schemadiscoveryoccurrence)|false|none|Describes when a resource was discovered.|
|dsseAttestation|[DSSEAttestationOccurrence](#schemadsseattestationoccurrence)|false|none|Describes an attestation of an artifact using dsse.|
|envelope|[Envelope](#schemaenvelope)|false|none|https://github.com/secure-systems-lab/dsse|
|image|[ImageOccurrence](#schemaimageoccurrence)|false|none|Describes how this resource derives from the basis in the associated note.|
|kind|string|false|none|Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests.|
|name|string|false|none|Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.|
|noteName|string|false|none|Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests.|
|package|[PackageOccurrence](#schemapackageoccurrence)|false|none|Describes the installation of a package on the linked resource.|
|remediation|string|false|none|A description of actions that can be taken to remedy the note.|
|resourceUri|string|false|none|Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, `https://gcr.io/project/image@sha256:123abc` for a Docker image.|
|updateTime|string(google-datetime)|false|none|Output only. The time this occurrence was last updated.|
|upgrade|[UpgradeOccurrence](#schemaupgradeoccurrence)|false|none|Describes an available package upgrade on the linked resource.|
|vulnerability|[VulnerabilityOccurrence](#schemavulnerabilityoccurrence)|false|none|Describes a security vulnerability.|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|NOTE_KIND_UNSPECIFIED|
|kind|VULNERABILITY|
|kind|BUILD|
|kind|IMAGE|
|kind|PACKAGE|
|kind|DEPLOYMENT|
|kind|DISCOVERY|
|kind|ATTESTATION|
|kind|UPGRADE|
|kind|COMPLIANCE|
|kind|DSSE_ATTESTATION|
|kind|VULNERABILITY_ASSESSMENT|

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

<h2 id="tocS_PackageData">PackageData</h2>
<!-- backwards compatibility -->
<a id="schemapackagedata"></a>
<a id="schema_PackageData"></a>
<a id="tocSpackagedata"></a>
<a id="tocspackagedata"></a>

```json
{
  "architecture": "string",
  "binary": {
    "name": "string",
    "version": "string"
  },
  "cpeUri": "string",
  "dependencyChain": [
    {
      "package": "string",
      "version": "string"
    }
  ],
  "fileLocation": [
    {
      "filePath": "string"
    }
  ],
  "hashDigest": "string",
  "maintainer": {
    "kind": "string",
    "name": "string"
  },
  "os": "string",
  "osVersion": "string",
  "package": "string",
  "packageType": "PACKAGE_TYPE_UNSPECIFIED",
  "patchedCve": [
    "string"
  ],
  "unused": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|architecture|string|false|none|The architecture of the package.|
|binary|[Binary](#schemabinary)|false|none|The binary package. This is significant when the source is different than the binary itself. Historically if they've differed, we've stored the name of the source and its version in the package/version fields, but we should also store the binary package info, as that's what's actually installed. See b/175908657#comment15.|
|cpeUri|string|false|none|The cpe_uri in [cpe format] (https://cpe.mitre.org/specification/) in which the vulnerability may manifest. Examples include distro or storage location for vulnerable jar.|
|dependencyChain|[[LanguagePackageDependency](#schemalanguagepackagedependency)]|false|none|The dependency chain between this package and the user's artifact. List in order from the customer's package under review first, to the current package last. Inclusive of the original package and the current package.|
|fileLocation|[[FileLocation](#schemafilelocation)]|false|none|The path to the jar file / go binary file.|
|hashDigest|string|false|none|HashDigest stores the SHA512 hash digest of the jar file if the package is of type Maven. This field will be unset for non Maven packages.|
|maintainer|[Maintainer](#schemamaintainer)|false|none|The maintainer of the package.|
|os|string|false|none|The OS affected by a vulnerability Used to generate the cpe_uri for OS packages|
|osVersion|string|false|none|The version of the OS Used to generate the cpe_uri for OS packages|
|package|string|false|none|The package being analysed for vulnerabilities|
|packageType|string|false|none|The type of package: os, maven, go, etc.|
|patchedCve|[string]|false|none|CVEs that this package is no longer vulnerable to go/drydock-dd-custom-binary-scanning|
|unused|string|false|none|none|
|version|string|false|none|The version of the package being analysed|

#### Enumerated Values

|Property|Value|
|---|---|
|packageType|PACKAGE_TYPE_UNSPECIFIED|
|packageType|OS|
|packageType|MAVEN|
|packageType|GO|
|packageType|GO_STDLIB|
|packageType|PYPI|
|packageType|NPM|

<h2 id="tocS_PackageIssue">PackageIssue</h2>
<!-- backwards compatibility -->
<a id="schemapackageissue"></a>
<a id="schema_PackageIssue"></a>
<a id="tocSpackageissue"></a>
<a id="tocspackageissue"></a>

```json
{
  "affectedCpeUri": "string",
  "affectedPackage": "string",
  "affectedVersion": {
    "epoch": 0,
    "fullName": "string",
    "inclusive": true,
    "kind": "VERSION_KIND_UNSPECIFIED",
    "name": "string",
    "revision": "string"
  },
  "effectiveSeverity": "SEVERITY_UNSPECIFIED",
  "fileLocation": [
    {
      "filePath": "string"
    }
  ],
  "fixAvailable": true,
  "fixedCpeUri": "string",
  "fixedPackage": "string",
  "fixedVersion": {
    "epoch": 0,
    "fullName": "string",
    "inclusive": true,
    "kind": "VERSION_KIND_UNSPECIFIED",
    "name": "string",
    "revision": "string"
  },
  "packageType": "string"
}
```

A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|affectedCpeUri|string|false|none|Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was found in.|
|affectedPackage|string|false|none|Required. The package this vulnerability was found in.|
|affectedVersion|[Version](#schemaversion)|false|none|Required. The version of the package that is installed on the resource affected by this vulnerability.|
|effectiveSeverity|string|false|read-only|Output only. The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available.|
|fileLocation|[[GrafeasV1FileLocation](#schemagrafeasv1filelocation)]|false|none|The location at which this package was found.|
|fixAvailable|boolean|false|none|Output only. Whether a fix is available for this package.|
|fixedCpeUri|string|false|none|The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was fixed in. It is possible for this to be different from the affected_cpe_uri.|
|fixedPackage|string|false|none|The package this vulnerability was fixed in. It is possible for this to be different from the affected_package.|
|fixedVersion|[Version](#schemaversion)|false|none|Required. The version of the package this vulnerability was fixed in. Setting this to VersionKind.MAXIMUM means no fix is yet available.|
|packageType|string|false|none|The type of package (e.g. OS, MAVEN, GO).|

#### Enumerated Values

|Property|Value|
|---|---|
|effectiveSeverity|SEVERITY_UNSPECIFIED|
|effectiveSeverity|MINIMAL|
|effectiveSeverity|LOW|
|effectiveSeverity|MEDIUM|
|effectiveSeverity|HIGH|
|effectiveSeverity|CRITICAL|

<h2 id="tocS_PackageOccurrence">PackageOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemapackageoccurrence"></a>
<a id="schema_PackageOccurrence"></a>
<a id="tocSpackageoccurrence"></a>
<a id="tocspackageoccurrence"></a>

```json
{
  "architecture": "ARCHITECTURE_UNSPECIFIED",
  "cpeUri": "string",
  "license": {
    "comments": "string",
    "expression": "string"
  },
  "location": [
    {
      "cpeUri": "string",
      "path": "string",
      "version": {
        "epoch": 0,
        "fullName": "string",
        "inclusive": true,
        "kind": "VERSION_KIND_UNSPECIFIED",
        "name": "string",
        "revision": "string"
      }
    }
  ],
  "name": "string",
  "packageType": "string",
  "version": {
    "epoch": 0,
    "fullName": "string",
    "inclusive": true,
    "kind": "VERSION_KIND_UNSPECIFIED",
    "name": "string",
    "revision": "string"
  }
}
```

Details on how a particular software package was installed on a system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|architecture|string|false|read-only|Output only. The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages.|
|cpeUri|string|false|read-only|Output only. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages.|
|license|[License](#schemalicense)|false|none|Licenses that have been declared by the authors of the package.|
|location|[[Location](#schemalocation)]|false|none|All of the places within the filesystem versions of this package have been found.|
|name|string|false|read-only|Required. Output only. The name of the installed package.|
|packageType|string|false|read-only|Output only. The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).|
|version|[Version](#schemaversion)|false|none|Output only. The version of the package.|

#### Enumerated Values

|Property|Value|
|---|---|
|architecture|ARCHITECTURE_UNSPECIFIED|
|architecture|X86|
|architecture|X64|

<h2 id="tocS_ProjectRepoId">ProjectRepoId</h2>
<!-- backwards compatibility -->
<a id="schemaprojectrepoid"></a>
<a id="schema_ProjectRepoId"></a>
<a id="tocSprojectrepoid"></a>
<a id="tocsprojectrepoid"></a>

```json
{
  "projectId": "string",
  "repoName": "string"
}
```

Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectId|string|false|none|The ID of the project.|
|repoName|string|false|none|The name of the repo. Leave empty for the default repo.|

<h2 id="tocS_Recipe">Recipe</h2>
<!-- backwards compatibility -->
<a id="schemarecipe"></a>
<a id="schema_Recipe"></a>
<a id="tocSrecipe"></a>
<a id="tocsrecipe"></a>

```json
{
  "arguments": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "definedInMaterial": "string",
  "entryPoint": "string",
  "environment": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "type": "string"
}
```

Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arguments|[object]|false|none|Collection of all external inputs that influenced the build on top of recipe.definedInMaterial and recipe.entryPoint. For example, if the recipe type were "make", then this might be the flags passed to make aside from the target, which is captured in recipe.entryPoint. Since the arguments field can greatly vary in structure, depending on the builder and recipe type, this is of form "Any".|
|definedInMaterial|string(int64)|false|none|Index in materials containing the recipe steps that are not implied by recipe.type. For example, if the recipe type were "make", then this would point to the source containing the Makefile, not the make program itself. Set to -1 if the recipe doesn't come from a material, as zero is default unset value for int64.|
|entryPoint|string|false|none|String identifying the entry point into the build. This is often a path to a configuration file and/or a target label within that file. The syntax and meaning are defined by recipe.type. For example, if the recipe type were "make", then this would reference the directory in which to run make as well as which target to use.|
|environment|[object]|false|none|Any other builder-controlled inputs necessary for correctly evaluating the recipe. Usually only needed for reproducing the build but not evaluated as part of policy. Since the environment field can greatly vary in structure, depending on the builder and recipe type, this is of form "Any".|
|type|string|false|none|URI indicating what type of recipe was performed. It determines the meaning of recipe.entryPoint, recipe.arguments, recipe.environment, and materials.|

<h2 id="tocS_RelatedUrl">RelatedUrl</h2>
<!-- backwards compatibility -->
<a id="schemarelatedurl"></a>
<a id="schema_RelatedUrl"></a>
<a id="tocSrelatedurl"></a>
<a id="tocsrelatedurl"></a>

```json
{
  "label": "string",
  "url": "string"
}
```

Metadata for any related URL information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|Label to describe usage of the URL.|
|url|string|false|none|Specific URL associated with the resource.|

<h2 id="tocS_Remediation">Remediation</h2>
<!-- backwards compatibility -->
<a id="schemaremediation"></a>
<a id="schema_Remediation"></a>
<a id="tocSremediation"></a>
<a id="tocsremediation"></a>

```json
{
  "details": "string",
  "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
  "remediationUri": {
    "label": "string",
    "url": "string"
  }
}
```

Specifies details on how to handle (and presumably, fix) a vulnerability.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|none|Contains a comprehensive human-readable discussion of the remediation.|
|remediationType|string|false|none|The type of remediation that can be applied.|
|remediationUri|[RelatedUrl](#schemarelatedurl)|false|none|Contains the URL where to obtain the remediation.|

#### Enumerated Values

|Property|Value|
|---|---|
|remediationType|REMEDIATION_TYPE_UNSPECIFIED|
|remediationType|MITIGATION|
|remediationType|NO_FIX_PLANNED|
|remediationType|NONE_AVAILABLE|
|remediationType|VENDOR_FIX|
|remediationType|WORKAROUND|

<h2 id="tocS_RepoId">RepoId</h2>
<!-- backwards compatibility -->
<a id="schemarepoid"></a>
<a id="schema_RepoId"></a>
<a id="tocSrepoid"></a>
<a id="tocsrepoid"></a>

```json
{
  "projectRepoId": {
    "projectId": "string",
    "repoName": "string"
  },
  "uid": "string"
}
```

A unique identifier for a Cloud Repo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectRepoId|[ProjectRepoId](#schemaprojectrepoid)|false|none|A combination of a project ID and a repo name.|
|uid|string|false|none|A server-assigned, globally unique identifier.|

<h2 id="tocS_Signature">Signature</h2>
<!-- backwards compatibility -->
<a id="schemasignature"></a>
<a id="schema_Signature"></a>
<a id="tocSsignature"></a>
<a id="tocssignature"></a>

```json
{
  "publicKeyId": "string",
  "signature": "string"
}
```

Verifiers (e.g. Kritis implementations) MUST verify signatures with respect to the trust anchors defined in policy (e.g. a Kritis policy). Typically this means that the verifier has been configured with a map from `public_key_id` to public key material (and any required parameters, e.g. signing algorithm). In particular, verification implementations MUST NOT treat the signature `public_key_id` as anything more than a key lookup hint. The `public_key_id` DOES NOT validate or authenticate a public key; it only provides a mechanism for quickly selecting a public key ALREADY CONFIGURED on the verifier through a trusted channel. Verification implementations MUST reject signatures in any of the following circumstances: * The `public_key_id` is not recognized by the verifier. * The public key that `public_key_id` refers to does not verify the signature with respect to the payload. The `signature` contents SHOULD NOT be "attached" (where the payload is included with the serialized `signature` bytes). Verifiers MUST ignore any "attached" payload and only verify signatures with respect to explicitly provided payload (e.g. a `payload` field on the proto message that holds this Signature, or the canonical serialization of the proto message that holds this signature).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publicKeyId|string|false|none|The identifier for the public key that verifies this signature. * The `public_key_id` is required. * The `public_key_id` SHOULD be an RFC3986 conformant URI. * When possible, the `public_key_id` SHOULD be an immutable reference, such as a cryptographic digest. Examples of valid `public_key_id`s: OpenPGP V4 public key fingerprint: * "openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA" See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr for more details on this scheme. RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization): * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU" * "nih:///sha-256;703f68f42aba2c6de30f488a5ea122fef76324679c9bf89791ba95a1271589a5"|
|signature|string(byte)|false|none|The content of the signature, an opaque bytestring. The payload that this signature verifies MUST be unambiguously provided with the Signature during verification. A wrapper message might provide the payload explicitly. Alternatively, a message might have a canonical serialization that can always be unambiguously computed to derive the payload.|

<h2 id="tocS_SlsaBuilder">SlsaBuilder</h2>
<!-- backwards compatibility -->
<a id="schemaslsabuilder"></a>
<a id="schema_SlsaBuilder"></a>
<a id="tocSslsabuilder"></a>
<a id="tocsslsabuilder"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|

<h2 id="tocS_SlsaCompleteness">SlsaCompleteness</h2>
<!-- backwards compatibility -->
<a id="schemaslsacompleteness"></a>
<a id="schema_SlsaCompleteness"></a>
<a id="tocSslsacompleteness"></a>
<a id="tocsslsacompleteness"></a>

```json
{
  "arguments": true,
  "environment": true,
  "materials": true
}
```

Indicates that the builder claims certain fields in this message to be complete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arguments|boolean|false|none|If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe.|
|environment|boolean|false|none|If true, the builder claims that recipe.environment is claimed to be complete.|
|materials|boolean|false|none|If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called "hermetic".|

<h2 id="tocS_SlsaMetadata">SlsaMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaslsametadata"></a>
<a id="schema_SlsaMetadata"></a>
<a id="tocSslsametadata"></a>
<a id="tocsslsametadata"></a>

```json
{
  "buildFinishedOn": "string",
  "buildInvocationId": "string",
  "buildStartedOn": "string",
  "completeness": {
    "arguments": true,
    "environment": true,
    "materials": true
  },
  "reproducible": true
}
```

Other properties of the build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildFinishedOn|string(google-datetime)|false|none|The timestamp of when the build completed.|
|buildInvocationId|string|false|none|Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec.|
|buildStartedOn|string(google-datetime)|false|none|The timestamp of when the build started.|
|completeness|[SlsaCompleteness](#schemaslsacompleteness)|false|none|Indicates that the builder claims certain fields in this message to be complete.|
|reproducible|boolean|false|none|If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output.|

<h2 id="tocS_SlsaProvenance">SlsaProvenance</h2>
<!-- backwards compatibility -->
<a id="schemaslsaprovenance"></a>
<a id="schema_SlsaProvenance"></a>
<a id="tocSslsaprovenance"></a>
<a id="tocsslsaprovenance"></a>

```json
{
  "builder": {
    "id": "string"
  },
  "materials": [
    {
      "digest": {
        "property1": "string",
        "property2": "string"
      },
      "uri": "string"
    }
  ],
  "metadata": {
    "buildFinishedOn": "string",
    "buildInvocationId": "string",
    "buildStartedOn": "string",
    "completeness": {
      "arguments": true,
      "environment": true,
      "materials": true
    },
    "reproducible": true
  },
  "recipe": {
    "arguments": {
      "property1": null,
      "property2": null
    },
    "definedInMaterial": "string",
    "entryPoint": "string",
    "environment": {
      "property1": null,
      "property2": null
    },
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|builder|[SlsaBuilder](#schemaslsabuilder)|false|none|required|
|materials|[[Material](#schemamaterial)]|false|none|The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. This is considered to be incomplete unless metadata.completeness.materials is true. Unset or null is equivalent to empty.|
|metadata|[SlsaMetadata](#schemaslsametadata)|false|none|Other properties of the build.|
|recipe|[SlsaRecipe](#schemaslsarecipe)|false|none|Identifies the configuration used for the build. When combined with materials, this SHOULD fully describe the build, such that re-running this recipe results in bit-for-bit identical output (if the build is reproducible). required|

<h2 id="tocS_SlsaProvenanceZeroTwo">SlsaProvenanceZeroTwo</h2>
<!-- backwards compatibility -->
<a id="schemaslsaprovenancezerotwo"></a>
<a id="schema_SlsaProvenanceZeroTwo"></a>
<a id="tocSslsaprovenancezerotwo"></a>
<a id="tocsslsaprovenancezerotwo"></a>

```json
{
  "buildConfig": {
    "property1": null,
    "property2": null
  },
  "buildType": "string",
  "builder": {
    "id": "string"
  },
  "invocation": {
    "configSource": {
      "digest": {
        "property1": "string",
        "property2": "string"
      },
      "entryPoint": "string",
      "uri": "string"
    },
    "environment": {
      "property1": null,
      "property2": null
    },
    "parameters": {
      "property1": null,
      "property2": null
    }
  },
  "materials": [
    {
      "digest": {
        "property1": "string",
        "property2": "string"
      },
      "uri": "string"
    }
  ],
  "metadata": {
    "buildFinishedOn": "string",
    "buildInvocationId": "string",
    "buildStartedOn": "string",
    "completeness": {
      "environment": true,
      "materials": true,
      "parameters": true
    },
    "reproducible": true
  }
}
```

See full explanation of fields at slsa.dev/provenance/v0.2.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildConfig|object|false|none|none|
|buildType|string|false|none|none|
|builder|[GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder](#schemagrafeasv1slsaprovenancezerotwoslsabuilder)|false|none|Identifies the entity that executed the recipe, which is trusted to have correctly performed the operation and populated this provenance.|
|invocation|[GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation](#schemagrafeasv1slsaprovenancezerotwoslsainvocation)|false|none|Identifies the event that kicked off the build.|
|materials|[[GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial](#schemagrafeasv1slsaprovenancezerotwoslsamaterial)]|false|none|none|
|metadata|[GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata](#schemagrafeasv1slsaprovenancezerotwoslsametadata)|false|none|Other properties of the build.|

<h2 id="tocS_SlsaRecipe">SlsaRecipe</h2>
<!-- backwards compatibility -->
<a id="schemaslsarecipe"></a>
<a id="schema_SlsaRecipe"></a>
<a id="tocSslsarecipe"></a>
<a id="tocsslsarecipe"></a>

```json
{
  "arguments": {
    "property1": null,
    "property2": null
  },
  "definedInMaterial": "string",
  "entryPoint": "string",
  "environment": {
    "property1": null,
    "property2": null
  },
  "type": "string"
}
```

Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arguments|object|false|none|Collection of all external inputs that influenced the build on top of recipe.definedInMaterial and recipe.entryPoint. For example, if the recipe type were "make", then this might be the flags passed to make aside from the target, which is captured in recipe.entryPoint. Depending on the recipe Type, the structure may be different.|
|definedInMaterial|string(int64)|false|none|Index in materials containing the recipe steps that are not implied by recipe.type. For example, if the recipe type were "make", then this would point to the source containing the Makefile, not the make program itself. Set to -1 if the recipe doesn't come from a material, as zero is default unset value for int64.|
|entryPoint|string|false|none|String identifying the entry point into the build. This is often a path to a configuration file and/or a target label within that file. The syntax and meaning are defined by recipe.type. For example, if the recipe type were "make", then this would reference the directory in which to run make as well as which target to use.|
|environment|object|false|none|Any other builder-controlled inputs necessary for correctly evaluating the recipe. Usually only needed for reproducing the build but not evaluated as part of policy. Depending on the recipe Type, the structure may be different.|
|type|string|false|none|URI indicating what type of recipe was performed. It determines the meaning of recipe.entryPoint, recipe.arguments, recipe.environment, and materials.|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "additionalContexts": [
    {
      "cloudRepo": {
        "aliasContext": {
          "kind": "KIND_UNSPECIFIED",
          "name": "string"
        },
        "repoId": {
          "projectRepoId": {
            "projectId": "string",
            "repoName": "string"
          },
          "uid": "string"
        },
        "revisionId": "string"
      },
      "gerrit": {
        "aliasContext": {
          "kind": "KIND_UNSPECIFIED",
          "name": "string"
        },
        "gerritProject": "string",
        "hostUri": "string",
        "revisionId": "string"
      },
      "git": {
        "revisionId": "string",
        "url": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "artifactStorageSourceUri": "string",
  "context": {
    "cloudRepo": {
      "aliasContext": {
        "kind": "KIND_UNSPECIFIED",
        "name": "string"
      },
      "repoId": {
        "projectRepoId": {
          "projectId": "string",
          "repoName": "string"
        },
        "uid": "string"
      },
      "revisionId": "string"
    },
    "gerrit": {
      "aliasContext": {
        "kind": "KIND_UNSPECIFIED",
        "name": "string"
      },
      "gerritProject": "string",
      "hostUri": "string",
      "revisionId": "string"
    },
    "git": {
      "revisionId": "string",
      "url": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "fileHashes": {
    "property1": {
      "fileHash": [
        {
          "type": "string",
          "value": "string"
        }
      ]
    },
    "property2": {
      "fileHash": [
        {
          "type": "string",
          "value": "string"
        }
      ]
    }
  }
}
```

Source describes the location of the source used for the build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalContexts|[[SourceContext](#schemasourcecontext)]|false|none|If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field.|
|artifactStorageSourceUri|string|false|none|If provided, the input binary artifacts for the build came from this location.|
|context|[SourceContext](#schemasourcecontext)|false|none|If provided, the source code used for the build came from this location.|
|fileHashes|object|false|none|Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file.|

<h2 id="tocS_SourceContext">SourceContext</h2>
<!-- backwards compatibility -->
<a id="schemasourcecontext"></a>
<a id="schema_SourceContext"></a>
<a id="tocSsourcecontext"></a>
<a id="tocssourcecontext"></a>

```json
{
  "cloudRepo": {
    "aliasContext": {
      "kind": "KIND_UNSPECIFIED",
      "name": "string"
    },
    "repoId": {
      "projectRepoId": {
        "projectId": "string",
        "repoName": "string"
      },
      "uid": "string"
    },
    "revisionId": "string"
  },
  "gerrit": {
    "aliasContext": {
      "kind": "KIND_UNSPECIFIED",
      "name": "string"
    },
    "gerritProject": "string",
    "hostUri": "string",
    "revisionId": "string"
  },
  "git": {
    "revisionId": "string",
    "url": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudRepo|[CloudRepoSourceContext](#schemacloudreposourcecontext)|false|none|A SourceContext referring to a revision in a Google Cloud Source Repo.|
|gerrit|[GerritSourceContext](#schemagerritsourcecontext)|false|none|A SourceContext referring to a Gerrit project.|
|git|[GitSourceContext](#schemagitsourcecontext)|false|none|A SourceContext referring to any third party Git repo (e.g., GitHub).|
|labels|object|false|none|Labels with user defined metadata.|

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

<h2 id="tocS_Subject">Subject</h2>
<!-- backwards compatibility -->
<a id="schemasubject"></a>
<a id="schema_Subject"></a>
<a id="tocSsubject"></a>
<a id="tocssubject"></a>

```json
{
  "digest": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digest|object|false|none|`"": ""` Algorithms can be e.g. sha256, sha512 See https://github.com/in-toto/attestation/blob/main/spec/field_types.md#DigestSet|
|name|string|false|none|none|

<h2 id="tocS_UpgradeDistribution">UpgradeDistribution</h2>
<!-- backwards compatibility -->
<a id="schemaupgradedistribution"></a>
<a id="schema_UpgradeDistribution"></a>
<a id="tocSupgradedistribution"></a>
<a id="tocsupgradedistribution"></a>

```json
{
  "classification": "string",
  "cpeUri": "string",
  "cve": [
    "string"
  ],
  "severity": "string"
}
```

The Upgrade Distribution represents metadata about the Upgrade for each operating system (CPE). Some distributions have additional metadata around updates, classifying them into various categories and severities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classification|string|false|none|The operating system classification of this Upgrade, as specified by the upstream operating system upgrade feed. For Windows the classification is one of the category_ids listed at https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ff357803(v=vs.85)|
|cpeUri|string|false|none|Required - The specific operating system this metadata applies to. See https://cpe.mitre.org/specification/.|
|cve|[string]|false|none|The cve tied to this Upgrade.|
|severity|string|false|none|The severity as specified by the upstream operating system.|

<h2 id="tocS_UpgradeOccurrence">UpgradeOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemaupgradeoccurrence"></a>
<a id="schema_UpgradeOccurrence"></a>
<a id="tocSupgradeoccurrence"></a>
<a id="tocsupgradeoccurrence"></a>

```json
{
  "distribution": {
    "classification": "string",
    "cpeUri": "string",
    "cve": [
      "string"
    ],
    "severity": "string"
  },
  "package": "string",
  "parsedVersion": {
    "epoch": 0,
    "fullName": "string",
    "inclusive": true,
    "kind": "VERSION_KIND_UNSPECIFIED",
    "name": "string",
    "revision": "string"
  },
  "windowsUpdate": {
    "categories": [
      {
        "categoryId": "string",
        "name": "string"
      }
    ],
    "description": "string",
    "identity": {
      "revision": 0,
      "updateId": "string"
    },
    "kbArticleIds": [
      "string"
    ],
    "lastPublishedTimestamp": "string",
    "supportUrl": "string",
    "title": "string"
  }
}
```

An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability). For Windows, both distribution and windows_update contain information for the Windows update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distribution|[UpgradeDistribution](#schemaupgradedistribution)|false|none|Metadata about the upgrade for available for the specific operating system for the resource_url. This allows efficient filtering, as well as making it easier to use the occurrence.|
|package|string|false|none|Required for non-Windows OS. The package this Upgrade is for.|
|parsedVersion|[Version](#schemaversion)|false|none|Required for non-Windows OS. The version of the package in a machine + human readable form.|
|windowsUpdate|[WindowsUpdate](#schemawindowsupdate)|false|none|Required for Windows OS. Represents the metadata about the Windows update.|

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
{
  "epoch": 0,
  "fullName": "string",
  "inclusive": true,
  "kind": "VERSION_KIND_UNSPECIFIED",
  "name": "string",
  "revision": "string"
}
```

Version contains structured information about the version of a package.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|epoch|integer(int32)|false|none|Used to correct mistakes in the version numbering scheme.|
|fullName|string|false|none|Human readable version string. This string is of the form :- and is only set when kind is NORMAL.|
|inclusive|boolean|false|none|Whether this version is specifying part of an inclusive range. Grafeas does not have the capability to specify version ranges; instead we have fields that specify start version and end versions. At times this is insufficient - we also need to specify whether the version is included in the range or is excluded from the range. This boolean is expected to be set to true when the version is included in a range.|
|kind|string|false|none|Required. Distinguishes between sentinel MIN/MAX versions and normal versions.|
|name|string|false|none|Required only when version kind is NORMAL. The main part of the version name.|
|revision|string|false|none|The iteration of the package build from the above version.|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|VERSION_KIND_UNSPECIFIED|
|kind|NORMAL|
|kind|MINIMUM|
|kind|MAXIMUM|

<h2 id="tocS_VexAssessment">VexAssessment</h2>
<!-- backwards compatibility -->
<a id="schemavexassessment"></a>
<a id="schema_VexAssessment"></a>
<a id="tocSvexassessment"></a>
<a id="tocsvexassessment"></a>

```json
{
  "cve": "string",
  "impacts": [
    "string"
  ],
  "justification": {
    "details": "string",
    "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
  },
  "noteName": "string",
  "relatedUris": [
    {
      "label": "string",
      "url": "string"
    }
  ],
  "remediations": [
    {
      "details": "string",
      "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
      "remediationUri": {
        "label": "string",
        "url": "string"
      }
    }
  ],
  "state": "STATE_UNSPECIFIED"
}
```

VexAssessment provides all publisher provided Vex information that is related to this vulnerability.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cve|string|false|none|Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability.|
|impacts|[string]|false|none|Contains information about the impact of this vulnerability, this will change with time.|
|justification|[Justification](#schemajustification)|false|none|Justification provides the justification when the state of the assessment if NOT_AFFECTED.|
|noteName|string|false|none|The VulnerabilityAssessment note from which this VexAssessment was generated. This will be of the form: `projects/[PROJECT_ID]/notes/[NOTE_ID]`.|
|relatedUris|[[RelatedUrl](#schemarelatedurl)]|false|none|Holds a list of references associated with this vulnerability item and assessment.|
|remediations|[[Remediation](#schemaremediation)]|false|none|Specifies details on how to handle (and presumably, fix) a vulnerability.|
|state|string|false|none|Provides the state of this Vulnerability assessment.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|AFFECTED|
|state|NOT_AFFECTED|
|state|FIXED|
|state|UNDER_INVESTIGATION|

<h2 id="tocS_VulnerabilityOccurrence">VulnerabilityOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemavulnerabilityoccurrence"></a>
<a id="schema_VulnerabilityOccurrence"></a>
<a id="tocSvulnerabilityoccurrence"></a>
<a id="tocsvulnerabilityoccurrence"></a>

```json
{
  "cvssScore": 0,
  "cvssV2": {
    "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
    "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
    "authentication": "AUTHENTICATION_UNSPECIFIED",
    "availabilityImpact": "IMPACT_UNSPECIFIED",
    "baseScore": 0,
    "confidentialityImpact": "IMPACT_UNSPECIFIED",
    "exploitabilityScore": 0,
    "impactScore": 0,
    "integrityImpact": "IMPACT_UNSPECIFIED",
    "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
    "scope": "SCOPE_UNSPECIFIED",
    "userInteraction": "USER_INTERACTION_UNSPECIFIED"
  },
  "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
  "cvssv3": {
    "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
    "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
    "authentication": "AUTHENTICATION_UNSPECIFIED",
    "availabilityImpact": "IMPACT_UNSPECIFIED",
    "baseScore": 0,
    "confidentialityImpact": "IMPACT_UNSPECIFIED",
    "exploitabilityScore": 0,
    "impactScore": 0,
    "integrityImpact": "IMPACT_UNSPECIFIED",
    "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
    "scope": "SCOPE_UNSPECIFIED",
    "userInteraction": "USER_INTERACTION_UNSPECIFIED"
  },
  "effectiveSeverity": "SEVERITY_UNSPECIFIED",
  "fixAvailable": true,
  "longDescription": "string",
  "packageIssue": [
    {
      "affectedCpeUri": "string",
      "affectedPackage": "string",
      "affectedVersion": {
        "epoch": 0,
        "fullName": "string",
        "inclusive": true,
        "kind": "VERSION_KIND_UNSPECIFIED",
        "name": "string",
        "revision": "string"
      },
      "effectiveSeverity": "SEVERITY_UNSPECIFIED",
      "fileLocation": [
        {
          "filePath": "string"
        }
      ],
      "fixAvailable": true,
      "fixedCpeUri": "string",
      "fixedPackage": "string",
      "fixedVersion": {
        "epoch": 0,
        "fullName": "string",
        "inclusive": true,
        "kind": "VERSION_KIND_UNSPECIFIED",
        "name": "string",
        "revision": "string"
      },
      "packageType": "string"
    }
  ],
  "relatedUrls": [
    {
      "label": "string",
      "url": "string"
    }
  ],
  "severity": "SEVERITY_UNSPECIFIED",
  "shortDescription": "string",
  "type": "string",
  "vexAssessment": {
    "cve": "string",
    "impacts": [
      "string"
    ],
    "justification": {
      "details": "string",
      "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
    },
    "noteName": "string",
    "relatedUris": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "remediations": [
      {
        "details": "string",
        "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
        "remediationUri": {
          "label": "string",
          "url": "string"
        }
      }
    ],
    "state": "STATE_UNSPECIFIED"
  }
}
```

An occurrence of a severity vulnerability on a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cvssScore|number(float)|false|none|Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity.|
|cvssV2|[CVSS](#schemacvss)|false|none|The cvss v2 score for the vulnerability.|
|cvssVersion|string|false|none|Output only. CVSS version used to populate cvss_score and severity.|
|cvssv3|[CVSS](#schemacvss)|false|none|The cvss v3 score for the vulnerability.|
|effectiveSeverity|string|false|none|The distro assigned severity for this vulnerability when it is available, otherwise this is the note provider assigned severity. When there are multiple PackageIssues for this vulnerability, they can have different effective severities because some might be provided by the distro while others are provided by the language ecosystem for a language pack. For this reason, it is advised to use the effective severity on the PackageIssue level. In the case where multiple PackageIssues have differing effective severities, this field should be the highest severity for any of the PackageIssues.|
|fixAvailable|boolean|false|none|Output only. Whether at least one of the affected packages has a fix available.|
|longDescription|string|false|none|Output only. A detailed description of this vulnerability.|
|packageIssue|[[PackageIssue](#schemapackageissue)]|false|none|Required. The set of affected locations and their fixes (if available) within the associated resource.|
|relatedUrls|[[RelatedUrl](#schemarelatedurl)]|false|none|Output only. URLs related to this vulnerability.|
|severity|string|false|none|Output only. The note provider assigned severity of this vulnerability.|
|shortDescription|string|false|none|Output only. A one sentence description of this vulnerability.|
|type|string|false|none|The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).|
|vexAssessment|[VexAssessment](#schemavexassessment)|false|none|VexAssessment provides all publisher provided Vex information that is related to this vulnerability.|

#### Enumerated Values

|Property|Value|
|---|---|
|cvssVersion|CVSS_VERSION_UNSPECIFIED|
|cvssVersion|CVSS_VERSION_2|
|cvssVersion|CVSS_VERSION_3|
|effectiveSeverity|SEVERITY_UNSPECIFIED|
|effectiveSeverity|MINIMAL|
|effectiveSeverity|LOW|
|effectiveSeverity|MEDIUM|
|effectiveSeverity|HIGH|
|effectiveSeverity|CRITICAL|
|severity|SEVERITY_UNSPECIFIED|
|severity|MINIMAL|
|severity|LOW|
|severity|MEDIUM|
|severity|HIGH|
|severity|CRITICAL|

<h2 id="tocS_WindowsUpdate">WindowsUpdate</h2>
<!-- backwards compatibility -->
<a id="schemawindowsupdate"></a>
<a id="schema_WindowsUpdate"></a>
<a id="tocSwindowsupdate"></a>
<a id="tocswindowsupdate"></a>

```json
{
  "categories": [
    {
      "categoryId": "string",
      "name": "string"
    }
  ],
  "description": "string",
  "identity": {
    "revision": 0,
    "updateId": "string"
  },
  "kbArticleIds": [
    "string"
  ],
  "lastPublishedTimestamp": "string",
  "supportUrl": "string",
  "title": "string"
}
```

Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[[Category](#schemacategory)]|false|none|The list of categories to which the update belongs.|
|description|string|false|none|The localized description of the update.|
|identity|[Identity](#schemaidentity)|false|none|Required - The unique identifier for the update.|
|kbArticleIds|[string]|false|none|The Microsoft Knowledge Base article IDs that are associated with the update.|
|lastPublishedTimestamp|string(google-datetime)|false|none|The last published timestamp of the update.|
|supportUrl|string|false|none|The hyperlink to the support information for the update.|
|title|string|false|none|The localized title of the update.|
