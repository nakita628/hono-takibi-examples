<h1 id="batch-api">Batch API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An API to manage the running of batch jobs on Google Cloud Platform.

Base URLs:

* <a href="https://batch.googleapis.com/">https://batch.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/batch/">External documentation</a>

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

<h1 id="batch-api-projects">projects</h1>

## batch.projects.locations.operations.get

<a id="opIdbatch.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="batchprojectslocationsoperationsget-parameters">Parameters</h3>

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

<h3 id="batchprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## batch.projects.locations.operations.delete

<a id="opIdbatch.projects.locations.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="batchprojectslocationsoperationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be deleted.|
|reason|query|string|false|Optional. Reason for this deletion.|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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

<h3 id="batchprojectslocationsoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## batch.projects.locations.list

<a id="opIdbatch.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="batchprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="batchprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## batch.projects.locations.operations.list

<a id="opIdbatch.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="batchprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="batchprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## batch.projects.locations.operations.cancel

<a id="opIdbatch.projects.locations.operations.cancel"></a>

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

<h3 id="batchprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="batchprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## batch.projects.locations.jobs.list

<a id="opIdbatch.projects.locations.jobs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/jobs`

List all Jobs for a project within a region.

<h3 id="batchprojectslocationsjobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Parent path.|
|filter|query|string|false|List filter.|
|pageSize|query|integer|false|Page size.|
|pageToken|query|string|false|Page token.|
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
  "jobs": [
    {
      "allocationPolicy": {
        "instances": [
          {
            "installGpuDrivers": true,
            "instanceTemplate": "string",
            "policy": {
              "accelerators": [
                {
                  "count": "string",
                  "installGpuDrivers": true,
                  "type": "string"
                }
              ],
              "bootDisk": {
                "diskInterface": "string",
                "image": "string",
                "sizeGb": "string",
                "snapshot": "string",
                "type": "string"
              },
              "disks": [
                {
                  "deviceName": "string",
                  "existingDisk": "string",
                  "newDisk": {
                    "diskInterface": "string",
                    "image": "string",
                    "sizeGb": "string",
                    "snapshot": "string",
                    "type": "string"
                  }
                }
              ],
              "machineType": "string",
              "minCpuPlatform": "string",
              "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED"
            }
          }
        ],
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "location": {
          "allowedLocations": [
            "string"
          ]
        },
        "network": {
          "networkInterfaces": [
            {
              "network": "string",
              "noExternalIpAddress": true,
              "subnetwork": "string"
            }
          ]
        },
        "placement": {
          "collocation": "string",
          "maxDistance": "string"
        },
        "serviceAccount": {
          "email": "string",
          "scopes": [
            "string"
          ]
        }
      },
      "createTime": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "logsPolicy": {
        "destination": "DESTINATION_UNSPECIFIED",
        "logsPath": "string"
      },
      "name": "string",
      "notifications": [
        {
          "message": {
            "newJobState": "STATE_UNSPECIFIED",
            "newTaskState": "STATE_UNSPECIFIED",
            "type": "TYPE_UNSPECIFIED"
          },
          "pubsubTopic": "string"
        }
      ],
      "priority": "string",
      "status": {
        "runDuration": "string",
        "state": "STATE_UNSPECIFIED",
        "statusEvents": [
          {
            "description": "string",
            "eventTime": "string",
            "taskExecution": {
              "exitCode": 0
            },
            "taskState": "STATE_UNSPECIFIED",
            "type": "string"
          }
        ],
        "taskGroups": {
          "property1": {
            "counts": {
              "property1": "string",
              "property2": "string"
            },
            "instances": [
              {
                "bootDisk": {
                  "diskInterface": "string",
                  "image": "string",
                  "sizeGb": "string",
                  "snapshot": "string",
                  "type": "string"
                },
                "machineType": "string",
                "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED",
                "taskPack": "string"
              }
            ]
          },
          "property2": {
            "counts": {
              "property1": "string",
              "property2": "string"
            },
            "instances": [
              {
                "bootDisk": {
                  "diskInterface": "string",
                  "image": "string",
                  "sizeGb": "string",
                  "snapshot": "string",
                  "type": "string"
                },
                "machineType": "string",
                "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED",
                "taskPack": "string"
              }
            ]
          }
        }
      },
      "taskGroups": [
        {
          "name": "string",
          "parallelism": "string",
          "permissiveSsh": true,
          "requireHostsFile": true,
          "taskCount": "string",
          "taskCountPerNode": "string",
          "taskEnvironments": [
            {
              "encryptedVariables": {
                "cipherText": "string",
                "keyName": "string"
              },
              "secretVariables": {
                "property1": "string",
                "property2": "string"
              },
              "variables": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "taskSpec": {
            "computeResource": {
              "bootDiskMib": "string",
              "cpuMilli": "string",
              "memoryMib": "string"
            },
            "environment": {
              "encryptedVariables": {
                "cipherText": "string",
                "keyName": "string"
              },
              "secretVariables": {
                "property1": "string",
                "property2": "string"
              },
              "variables": {
                "property1": "string",
                "property2": "string"
              }
            },
            "environments": {
              "property1": "string",
              "property2": "string"
            },
            "lifecyclePolicies": [
              {
                "action": "ACTION_UNSPECIFIED",
                "actionCondition": {
                  "exitCodes": [
                    0
                  ]
                }
              }
            ],
            "maxRetryCount": 0,
            "maxRunDuration": "string",
            "runnables": [
              {
                "alwaysRun": true,
                "background": true,
                "barrier": {
                  "name": "string"
                },
                "container": {
                  "blockExternalNetwork": true,
                  "commands": [
                    "string"
                  ],
                  "entrypoint": "string",
                  "imageUri": "string",
                  "options": "string",
                  "password": "string",
                  "username": "string",
                  "volumes": [
                    "string"
                  ]
                },
                "environment": {
                  "encryptedVariables": {
                    "cipherText": "string",
                    "keyName": "string"
                  },
                  "secretVariables": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "variables": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "ignoreExitStatus": true,
                "labels": {
                  "property1": "string",
                  "property2": "string"
                },
                "script": {
                  "path": "string",
                  "text": "string"
                },
                "timeout": "string"
              }
            ],
            "volumes": [
              {
                "deviceName": "string",
                "gcs": {
                  "remotePath": "string"
                },
                "mountOptions": [
                  "string"
                ],
                "mountPath": "string",
                "nfs": {
                  "remotePath": "string",
                  "server": "string"
                }
              }
            ]
          }
        }
      ],
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

<h3 id="batchprojectslocationsjobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListJobsResponse](#schemalistjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## batch.projects.locations.jobs.create

<a id="opIdbatch.projects.locations.jobs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allocationPolicy": {
      "instances": [
        {
          "installGpuDrivers": true,
          "instanceTemplate": "string",
          "policy": {
            "accelerators": [
              {
                "count": "string",
                "installGpuDrivers": true,
                "type": "string"
              }
            ],
            "bootDisk": {
              "diskInterface": "string",
              "image": "string",
              "sizeGb": "string",
              "snapshot": "string",
              "type": "string"
            },
            "disks": [
              {
                "deviceName": "string",
                "existingDisk": "string",
                "newDisk": {
                  "diskInterface": "string",
                  "image": "string",
                  "sizeGb": "string",
                  "snapshot": "string",
                  "type": "string"
                }
              }
            ],
            "machineType": "string",
            "minCpuPlatform": "string",
            "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED"
          }
        }
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "location": {
        "allowedLocations": [
          "string"
        ]
      },
      "network": {
        "networkInterfaces": [
          {
            "network": "string",
            "noExternalIpAddress": true,
            "subnetwork": "string"
          }
        ]
      },
      "placement": {
        "collocation": "string",
        "maxDistance": "string"
      },
      "serviceAccount": {
        "email": "string",
        "scopes": [
          "string"
        ]
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "logsPolicy": {
      "destination": "DESTINATION_UNSPECIFIED",
      "logsPath": "string"
    },
    "notifications": [
      {
        "message": {
          "newJobState": "STATE_UNSPECIFIED",
          "newTaskState": "STATE_UNSPECIFIED",
          "type": "TYPE_UNSPECIFIED"
        },
        "pubsubTopic": "string"
      }
    ],
    "priority": "string",
    "taskGroups": [
      {
        "parallelism": "string",
        "permissiveSsh": true,
        "requireHostsFile": true,
        "taskCount": "string",
        "taskCountPerNode": "string",
        "taskEnvironments": [
          {
            "encryptedVariables": {
              "cipherText": "string",
              "keyName": "string"
            },
            "secretVariables": {
              "property1": "string",
              "property2": "string"
            },
            "variables": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "taskSpec": {
          "computeResource": {
            "bootDiskMib": "string",
            "cpuMilli": "string",
            "memoryMib": "string"
          },
          "environment": {
            "encryptedVariables": {
              "cipherText": "string",
              "keyName": "string"
            },
            "secretVariables": {
              "property1": "string",
              "property2": "string"
            },
            "variables": {
              "property1": "string",
              "property2": "string"
            }
          },
          "environments": {
            "property1": "string",
            "property2": "string"
          },
          "lifecyclePolicies": [
            {
              "action": "ACTION_UNSPECIFIED",
              "actionCondition": {
                "exitCodes": [
                  0
                ]
              }
            }
          ],
          "maxRetryCount": 0,
          "maxRunDuration": "string",
          "runnables": [
            {
              "alwaysRun": true,
              "background": true,
              "barrier": {
                "name": "string"
              },
              "container": {
                "blockExternalNetwork": true,
                "commands": [
                  "string"
                ],
                "entrypoint": "string",
                "imageUri": "string",
                "options": "string",
                "password": "string",
                "username": "string",
                "volumes": [
                  "string"
                ]
              },
              "environment": {
                "encryptedVariables": {
                  "cipherText": "string",
                  "keyName": "string"
                },
                "secretVariables": {
                  "property1": "string",
                  "property2": "string"
                },
                "variables": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "ignoreExitStatus": true,
              "labels": {
                "property1": "string",
                "property2": "string"
              },
              "script": {
                "path": "string",
                "text": "string"
              },
              "timeout": "string"
            }
          ],
          "volumes": [
            {
              "deviceName": "string",
              "gcs": {
                "remotePath": "string"
              },
              "mountOptions": [
                "string"
              ],
              "mountPath": "string",
              "nfs": {
                "remotePath": "string",
                "server": "string"
              }
            }
          ]
        }
      }
    ]
  }'
```

`POST /v1/{parent}/jobs`

Create a Job.

> Body parameter

```json
{
  "allocationPolicy": {
    "instances": [
      {
        "installGpuDrivers": true,
        "instanceTemplate": "string",
        "policy": {
          "accelerators": [
            {
              "count": "string",
              "installGpuDrivers": true,
              "type": "string"
            }
          ],
          "bootDisk": {
            "diskInterface": "string",
            "image": "string",
            "sizeGb": "string",
            "snapshot": "string",
            "type": "string"
          },
          "disks": [
            {
              "deviceName": "string",
              "existingDisk": "string",
              "newDisk": {
                "diskInterface": "string",
                "image": "string",
                "sizeGb": "string",
                "snapshot": "string",
                "type": "string"
              }
            }
          ],
          "machineType": "string",
          "minCpuPlatform": "string",
          "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED"
        }
      }
    ],
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": {
      "allowedLocations": [
        "string"
      ]
    },
    "network": {
      "networkInterfaces": [
        {
          "network": "string",
          "noExternalIpAddress": true,
          "subnetwork": "string"
        }
      ]
    },
    "placement": {
      "collocation": "string",
      "maxDistance": "string"
    },
    "serviceAccount": {
      "email": "string",
      "scopes": [
        "string"
      ]
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "logsPolicy": {
    "destination": "DESTINATION_UNSPECIFIED",
    "logsPath": "string"
  },
  "notifications": [
    {
      "message": {
        "newJobState": "STATE_UNSPECIFIED",
        "newTaskState": "STATE_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED"
      },
      "pubsubTopic": "string"
    }
  ],
  "priority": "string",
  "taskGroups": [
    {
      "parallelism": "string",
      "permissiveSsh": true,
      "requireHostsFile": true,
      "taskCount": "string",
      "taskCountPerNode": "string",
      "taskEnvironments": [
        {
          "encryptedVariables": {
            "cipherText": "string",
            "keyName": "string"
          },
          "secretVariables": {
            "property1": "string",
            "property2": "string"
          },
          "variables": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "taskSpec": {
        "computeResource": {
          "bootDiskMib": "string",
          "cpuMilli": "string",
          "memoryMib": "string"
        },
        "environment": {
          "encryptedVariables": {
            "cipherText": "string",
            "keyName": "string"
          },
          "secretVariables": {
            "property1": "string",
            "property2": "string"
          },
          "variables": {
            "property1": "string",
            "property2": "string"
          }
        },
        "environments": {
          "property1": "string",
          "property2": "string"
        },
        "lifecyclePolicies": [
          {
            "action": "ACTION_UNSPECIFIED",
            "actionCondition": {
              "exitCodes": [
                0
              ]
            }
          }
        ],
        "maxRetryCount": 0,
        "maxRunDuration": "string",
        "runnables": [
          {
            "alwaysRun": true,
            "background": true,
            "barrier": {
              "name": "string"
            },
            "container": {
              "blockExternalNetwork": true,
              "commands": [
                "string"
              ],
              "entrypoint": "string",
              "imageUri": "string",
              "options": "string",
              "password": "string",
              "username": "string",
              "volumes": [
                "string"
              ]
            },
            "environment": {
              "encryptedVariables": {
                "cipherText": "string",
                "keyName": "string"
              },
              "secretVariables": {
                "property1": "string",
                "property2": "string"
              },
              "variables": {
                "property1": "string",
                "property2": "string"
              }
            },
            "ignoreExitStatus": true,
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "script": {
              "path": "string",
              "text": "string"
            },
            "timeout": "string"
          }
        ],
        "volumes": [
          {
            "deviceName": "string",
            "gcs": {
              "remotePath": "string"
            },
            "mountOptions": [
              "string"
            ],
            "mountPath": "string",
            "nfs": {
              "remotePath": "string",
              "server": "string"
            }
          }
        ]
      }
    }
  ]
}
```

<h3 id="batchprojectslocationsjobscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name where the Job will be created. Pattern: "projects/{project}/locations/{location}"|
|jobId|query|string|false|ID used to uniquely identify the Job within its parent scope. This field should contain at most 63 characters and must start with lowercase characters. Only lowercase characters, numbers and '-' are accepted. The '-' character cannot be the first or the last one. A system generated ID will be used if the field is not set. The job.name field in the request will be ignored and the created resource name of the Job will be "{parent}/jobs/{job_id}".|
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
|body|body|[Job](#schemajob)|false|none|
|» allocationPolicy|body|[AllocationPolicy](#schemaallocationpolicy)|false|Compute resource allocation for all TaskGroups in the Job.|
|» labels|body|object|false|Labels for the Job. Labels could be user provided or system generated. For example, "labels": { "department": "finance", "environment": "test" } You can assign up to 64 labels. [Google Compute Engine label restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) apply. Label names that start with "goog-" or "google-" are reserved.|
|» » **additionalProperties**|body|string|false|none|
|» logsPolicy|body|[LogsPolicy](#schemalogspolicy)|false|Log preservation policy for the Job.|
|» notifications|body|[[JobNotification](#schemajobnotification)]|false|Notification configurations.|
|» priority|body|string(int64)|false|Priority of the Job. The valid value range is [0, 100). Default value is 0. Higher value indicates higher priority. A job with higher priority value is more likely to run earlier if all other requirements are satisfied.|
|» taskGroups|body|[[TaskGroup](#schemataskgroup)]|false|Required. TaskGroups in the Job. Only one TaskGroup is supported now.|

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
  "allocationPolicy": {
    "instances": [
      {
        "installGpuDrivers": true,
        "instanceTemplate": "string",
        "policy": {
          "accelerators": [
            {
              "count": "string",
              "installGpuDrivers": true,
              "type": "string"
            }
          ],
          "bootDisk": {
            "diskInterface": "string",
            "image": "string",
            "sizeGb": "string",
            "snapshot": "string",
            "type": "string"
          },
          "disks": [
            {
              "deviceName": "string",
              "existingDisk": "string",
              "newDisk": {
                "diskInterface": "string",
                "image": "string",
                "sizeGb": "string",
                "snapshot": "string",
                "type": "string"
              }
            }
          ],
          "machineType": "string",
          "minCpuPlatform": "string",
          "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED"
        }
      }
    ],
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": {
      "allowedLocations": [
        "string"
      ]
    },
    "network": {
      "networkInterfaces": [
        {
          "network": "string",
          "noExternalIpAddress": true,
          "subnetwork": "string"
        }
      ]
    },
    "placement": {
      "collocation": "string",
      "maxDistance": "string"
    },
    "serviceAccount": {
      "email": "string",
      "scopes": [
        "string"
      ]
    }
  },
  "createTime": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "logsPolicy": {
    "destination": "DESTINATION_UNSPECIFIED",
    "logsPath": "string"
  },
  "name": "string",
  "notifications": [
    {
      "message": {
        "newJobState": "STATE_UNSPECIFIED",
        "newTaskState": "STATE_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED"
      },
      "pubsubTopic": "string"
    }
  ],
  "priority": "string",
  "status": {
    "runDuration": "string",
    "state": "STATE_UNSPECIFIED",
    "statusEvents": [
      {
        "description": "string",
        "eventTime": "string",
        "taskExecution": {
          "exitCode": 0
        },
        "taskState": "STATE_UNSPECIFIED",
        "type": "string"
      }
    ],
    "taskGroups": {
      "property1": {
        "counts": {
          "property1": "string",
          "property2": "string"
        },
        "instances": [
          {
            "bootDisk": {
              "diskInterface": "string",
              "image": "string",
              "sizeGb": "string",
              "snapshot": "string",
              "type": "string"
            },
            "machineType": "string",
            "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED",
            "taskPack": "string"
          }
        ]
      },
      "property2": {
        "counts": {
          "property1": "string",
          "property2": "string"
        },
        "instances": [
          {
            "bootDisk": {
              "diskInterface": "string",
              "image": "string",
              "sizeGb": "string",
              "snapshot": "string",
              "type": "string"
            },
            "machineType": "string",
            "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED",
            "taskPack": "string"
          }
        ]
      }
    }
  },
  "taskGroups": [
    {
      "name": "string",
      "parallelism": "string",
      "permissiveSsh": true,
      "requireHostsFile": true,
      "taskCount": "string",
      "taskCountPerNode": "string",
      "taskEnvironments": [
        {
          "encryptedVariables": {
            "cipherText": "string",
            "keyName": "string"
          },
          "secretVariables": {
            "property1": "string",
            "property2": "string"
          },
          "variables": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "taskSpec": {
        "computeResource": {
          "bootDiskMib": "string",
          "cpuMilli": "string",
          "memoryMib": "string"
        },
        "environment": {
          "encryptedVariables": {
            "cipherText": "string",
            "keyName": "string"
          },
          "secretVariables": {
            "property1": "string",
            "property2": "string"
          },
          "variables": {
            "property1": "string",
            "property2": "string"
          }
        },
        "environments": {
          "property1": "string",
          "property2": "string"
        },
        "lifecyclePolicies": [
          {
            "action": "ACTION_UNSPECIFIED",
            "actionCondition": {
              "exitCodes": [
                0
              ]
            }
          }
        ],
        "maxRetryCount": 0,
        "maxRunDuration": "string",
        "runnables": [
          {
            "alwaysRun": true,
            "background": true,
            "barrier": {
              "name": "string"
            },
            "container": {
              "blockExternalNetwork": true,
              "commands": [
                "string"
              ],
              "entrypoint": "string",
              "imageUri": "string",
              "options": "string",
              "password": "string",
              "username": "string",
              "volumes": [
                "string"
              ]
            },
            "environment": {
              "encryptedVariables": {
                "cipherText": "string",
                "keyName": "string"
              },
              "secretVariables": {
                "property1": "string",
                "property2": "string"
              },
              "variables": {
                "property1": "string",
                "property2": "string"
              }
            },
            "ignoreExitStatus": true,
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "script": {
              "path": "string",
              "text": "string"
            },
            "timeout": "string"
          }
        ],
        "volumes": [
          {
            "deviceName": "string",
            "gcs": {
              "remotePath": "string"
            },
            "mountOptions": [
              "string"
            ],
            "mountPath": "string",
            "nfs": {
              "remotePath": "string",
              "server": "string"
            }
          }
        ]
      }
    }
  ],
  "uid": "string",
  "updateTime": "string"
}
```

<h3 id="batchprojectslocationsjobscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## batch.projects.locations.state.report

<a id="opIdbatch.projects.locations.state.report"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/state:report \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "agentInfo": {
      "jobId": "string",
      "reportTime": "string",
      "state": "AGENT_STATE_UNSPECIFIED",
      "taskGroupId": "string",
      "tasks": [
        {
          "runnable": "string",
          "taskId": "string",
          "taskStatus": {
            "state": "STATE_UNSPECIFIED",
            "statusEvents": [
              {
                "description": "string",
                "eventTime": "string",
                "taskExecution": {
                  "exitCode": 0
                },
                "taskState": "STATE_UNSPECIFIED",
                "type": "string"
              }
            ]
          }
        }
      ]
    },
    "agentTimingInfo": {
      "agentStartupTime": "string",
      "bootTime": "string",
      "scriptStartupTime": "string"
    },
    "metadata": {
      "creationTime": "string",
      "creator": "string",
      "imageVersion": "string",
      "instance": "string",
      "instanceId": "string",
      "instancePreemptionNoticeReceived": true,
      "osRelease": {
        "property1": "string",
        "property2": "string"
      },
      "version": "string",
      "zone": "string"
    }
  }'
```

`POST /v1/{parent}/state:report`

Report agent's state, e.g. agent status and tasks information

> Body parameter

```json
{
  "agentInfo": {
    "jobId": "string",
    "reportTime": "string",
    "state": "AGENT_STATE_UNSPECIFIED",
    "taskGroupId": "string",
    "tasks": [
      {
        "runnable": "string",
        "taskId": "string",
        "taskStatus": {
          "state": "STATE_UNSPECIFIED",
          "statusEvents": [
            {
              "description": "string",
              "eventTime": "string",
              "taskExecution": {
                "exitCode": 0
              },
              "taskState": "STATE_UNSPECIFIED",
              "type": "string"
            }
          ]
        }
      }
    ]
  },
  "agentTimingInfo": {
    "agentStartupTime": "string",
    "bootTime": "string",
    "scriptStartupTime": "string"
  },
  "metadata": {
    "creationTime": "string",
    "creator": "string",
    "imageVersion": "string",
    "instance": "string",
    "instanceId": "string",
    "instancePreemptionNoticeReceived": true,
    "osRelease": {
      "property1": "string",
      "property2": "string"
    },
    "version": "string",
    "zone": "string"
  }
}
```

<h3 id="batchprojectslocationsstatereport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Format: projects/{project}/locations/{location} {project} should be a project number.|
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
|body|body|[ReportAgentStateRequest](#schemareportagentstaterequest)|false|none|
|» agentInfo|body|[AgentInfo](#schemaagentinfo)|false|Agent info.|
|» agentTimingInfo|body|[AgentTimingInfo](#schemaagenttiminginfo)|false|Agent timing info.|
|» metadata|body|[AgentMetadata](#schemaagentmetadata)|false|Agent metadata.|

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
  "defaultReportInterval": "string",
  "minReportInterval": "string",
  "tasks": [
    {
      "intendedState": "INTENDED_STATE_UNSPECIFIED",
      "reachedBarrier": "string",
      "spec": {
        "computeResource": {
          "bootDiskMib": "string",
          "cpuMilli": "string",
          "memoryMib": "string"
        },
        "environment": {
          "encryptedVariables": {
            "cipherText": "string",
            "keyName": "string"
          },
          "secretVariables": {
            "property1": "string",
            "property2": "string"
          },
          "variables": {
            "property1": "string",
            "property2": "string"
          }
        },
        "environments": {
          "property1": "string",
          "property2": "string"
        },
        "lifecyclePolicies": [
          {
            "action": "ACTION_UNSPECIFIED",
            "actionCondition": {
              "exitCodes": [
                0
              ]
            }
          }
        ],
        "maxRetryCount": 0,
        "maxRunDuration": "string",
        "runnables": [
          {
            "alwaysRun": true,
            "background": true,
            "barrier": {
              "name": "string"
            },
            "container": {
              "blockExternalNetwork": true,
              "commands": [
                "string"
              ],
              "entrypoint": "string",
              "imageUri": "string",
              "options": "string",
              "password": "string",
              "username": "string",
              "volumes": [
                "string"
              ]
            },
            "environment": {
              "encryptedVariables": {
                "cipherText": "string",
                "keyName": "string"
              },
              "secretVariables": {
                "property1": "string",
                "property2": "string"
              },
              "variables": {
                "property1": "string",
                "property2": "string"
              }
            },
            "ignoreExitStatus": true,
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "script": {
              "path": "string",
              "text": "string"
            },
            "timeout": "string"
          }
        ],
        "volumes": [
          {
            "deviceName": "string",
            "gcs": {
              "remotePath": "string"
            },
            "mountOptions": [
              "string"
            ],
            "mountPath": "string",
            "nfs": {
              "remotePath": "string",
              "server": "string"
            }
          }
        ]
      },
      "status": {
        "state": "STATE_UNSPECIFIED",
        "statusEvents": [
          {
            "description": "string",
            "eventTime": "string",
            "taskExecution": {
              "exitCode": 0
            },
            "taskState": "STATE_UNSPECIFIED",
            "type": "string"
          }
        ]
      },
      "task": "string",
      "taskSource": "TASK_SOURCE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="batchprojectslocationsstatereport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReportAgentStateResponse](#schemareportagentstateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## batch.projects.locations.jobs.taskGroups.tasks.list

<a id="opIdbatch.projects.locations.jobs.taskGroups.tasks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/tasks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/tasks`

List Tasks associated with a job.

<h3 id="batchprojectslocationsjobstaskgroupstaskslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of a TaskGroup from which Tasks are being requested. Pattern: "projects/{project}/locations/{location}/jobs/{job}/taskGroups/{task_group}"|
|filter|query|string|false|Task filter, null filter matches all Tasks. Filter string should be of the format State=TaskStatus.State e.g. State=RUNNING|
|pageSize|query|integer|false|Page size.|
|pageToken|query|string|false|Page token.|
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
  "tasks": [
    {
      "name": "string",
      "status": {
        "state": "STATE_UNSPECIFIED",
        "statusEvents": [
          {
            "description": "string",
            "eventTime": "string",
            "taskExecution": {
              "exitCode": 0
            },
            "taskState": "STATE_UNSPECIFIED",
            "type": "string"
          }
        ]
      }
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="batchprojectslocationsjobstaskgroupstaskslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTasksResponse](#schemalisttasksresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_Accelerator">Accelerator</h2>
<!-- backwards compatibility -->
<a id="schemaaccelerator"></a>
<a id="schema_Accelerator"></a>
<a id="tocSaccelerator"></a>
<a id="tocsaccelerator"></a>

```json
{
  "count": "string",
  "installGpuDrivers": true,
  "type": "string"
}
```

Accelerator describes Compute Engine accelerators to be attached to the VM.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|string(int64)|false|none|The number of accelerators of this type.|
|installGpuDrivers|boolean|false|none|Deprecated: please use instances[0].install_gpu_drivers instead.|
|type|string|false|none|The accelerator type. For example, "nvidia-tesla-t4". See `gcloud compute accelerator-types list`.|

<h2 id="tocS_ActionCondition">ActionCondition</h2>
<!-- backwards compatibility -->
<a id="schemaactioncondition"></a>
<a id="schema_ActionCondition"></a>
<a id="tocSactioncondition"></a>
<a id="tocsactioncondition"></a>

```json
{
  "exitCodes": [
    0
  ]
}
```

Conditions for actions to deal with task failures.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exitCodes|[integer(int32)]|false|none|Exit codes of a task execution. If there are more than 1 exit codes, when task executes with any of the exit code in the list, the condition is met and the action will be executed.|

<h2 id="tocS_AgentInfo">AgentInfo</h2>
<!-- backwards compatibility -->
<a id="schemaagentinfo"></a>
<a id="schema_AgentInfo"></a>
<a id="tocSagentinfo"></a>
<a id="tocsagentinfo"></a>

```json
{
  "jobId": "string",
  "reportTime": "string",
  "state": "AGENT_STATE_UNSPECIFIED",
  "taskGroupId": "string",
  "tasks": [
    {
      "runnable": "string",
      "taskId": "string",
      "taskStatus": {
        "state": "STATE_UNSPECIFIED",
        "statusEvents": [
          {
            "description": "string",
            "eventTime": "string",
            "taskExecution": {
              "exitCode": 0
            },
            "taskState": "STATE_UNSPECIFIED",
            "type": "string"
          }
        ]
      }
    }
  ]
}
```

VM Agent Info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|string|false|none|The assigned Job ID|
|reportTime|string(google-datetime)|false|none|When the AgentInfo is generated.|
|state|string|false|none|Agent state.|
|taskGroupId|string|false|none|The assigned task group ID.|
|tasks|[[AgentTaskInfo](#schemaagenttaskinfo)]|false|none|Task Info.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|AGENT_STATE_UNSPECIFIED|
|state|AGENT_STARTING|
|state|AGENT_RUNNING|
|state|AGENT_STOPPED|

<h2 id="tocS_AgentMetadata">AgentMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaagentmetadata"></a>
<a id="schema_AgentMetadata"></a>
<a id="tocSagentmetadata"></a>
<a id="tocsagentmetadata"></a>

```json
{
  "creationTime": "string",
  "creator": "string",
  "imageVersion": "string",
  "instance": "string",
  "instanceId": "string",
  "instancePreemptionNoticeReceived": true,
  "osRelease": {
    "property1": "string",
    "property2": "string"
  },
  "version": "string",
  "zone": "string"
}
```

VM Agent Metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|string(google-datetime)|false|none|When the VM agent started. Use agent_startup_time instead.|
|creator|string|false|none|Full name of the entity that created this vm. For MIG, this path is: projects/{project}/regions/{region}/InstanceGroupManagers/{igm} The value is retrieved from the vm metadata key of "created-by".|
|imageVersion|string|false|none|image version for the VM that this agent is installed on.|
|instance|string|false|none|GCP instance name (go/instance-name).|
|instanceId|string(uint64)|false|none|GCP instance ID (go/instance-id).|
|instancePreemptionNoticeReceived|boolean|false|none|If the GCP instance has received preemption notice.|
|osRelease|object|false|none|parsed contents of /etc/os-release|
|version|string|false|none|agent binary version running on VM|
|zone|string|false|none|Agent zone.|

<h2 id="tocS_AgentTask">AgentTask</h2>
<!-- backwards compatibility -->
<a id="schemaagenttask"></a>
<a id="schema_AgentTask"></a>
<a id="tocSagenttask"></a>
<a id="tocsagenttask"></a>

```json
{
  "intendedState": "INTENDED_STATE_UNSPECIFIED",
  "reachedBarrier": "string",
  "spec": {
    "computeResource": {
      "bootDiskMib": "string",
      "cpuMilli": "string",
      "memoryMib": "string"
    },
    "environment": {
      "encryptedVariables": {
        "cipherText": "string",
        "keyName": "string"
      },
      "secretVariables": {
        "property1": "string",
        "property2": "string"
      },
      "variables": {
        "property1": "string",
        "property2": "string"
      }
    },
    "environments": {
      "property1": "string",
      "property2": "string"
    },
    "lifecyclePolicies": [
      {
        "action": "ACTION_UNSPECIFIED",
        "actionCondition": {
          "exitCodes": [
            0
          ]
        }
      }
    ],
    "maxRetryCount": 0,
    "maxRunDuration": "string",
    "runnables": [
      {
        "alwaysRun": true,
        "background": true,
        "barrier": {
          "name": "string"
        },
        "container": {
          "blockExternalNetwork": true,
          "commands": [
            "string"
          ],
          "entrypoint": "string",
          "imageUri": "string",
          "options": "string",
          "password": "string",
          "username": "string",
          "volumes": [
            "string"
          ]
        },
        "environment": {
          "encryptedVariables": {
            "cipherText": "string",
            "keyName": "string"
          },
          "secretVariables": {
            "property1": "string",
            "property2": "string"
          },
          "variables": {
            "property1": "string",
            "property2": "string"
          }
        },
        "ignoreExitStatus": true,
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "script": {
          "path": "string",
          "text": "string"
        },
        "timeout": "string"
      }
    ],
    "volumes": [
      {
        "deviceName": "string",
        "gcs": {
          "remotePath": "string"
        },
        "mountOptions": [
          "string"
        ],
        "mountPath": "string",
        "nfs": {
          "remotePath": "string",
          "server": "string"
        }
      }
    ]
  },
  "status": {
    "state": "STATE_UNSPECIFIED",
    "statusEvents": [
      {
        "description": "string",
        "eventTime": "string",
        "taskExecution": {
          "exitCode": 0
        },
        "taskState": "STATE_UNSPECIFIED",
        "type": "string"
      }
    ]
  },
  "task": "string",
  "taskSource": "TASK_SOURCE_UNSPECIFIED"
}
```

TODO(b/182501497) The message needs to be redefined when the Agent API server updates data in storage per the backend design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intendedState|string|false|none|The intended state of the task.|
|reachedBarrier|string(int64)|false|none|The highest barrier reached by all tasks in the task's TaskGroup.|
|spec|[TaskSpec](#schemataskspec)|false|none|Task Spec.|
|status|[TaskStatus](#schemataskstatus)|false|none|Task status.|
|task|string|false|none|Task name.|
|taskSource|string|false|none|TaskSource represents the source of the task.|

#### Enumerated Values

|Property|Value|
|---|---|
|intendedState|INTENDED_STATE_UNSPECIFIED|
|intendedState|ASSIGNED|
|intendedState|CANCELLED|
|intendedState|DELETED|
|taskSource|TASK_SOURCE_UNSPECIFIED|
|taskSource|BATCH_INTERNAL|
|taskSource|USER|

<h2 id="tocS_AgentTaskInfo">AgentTaskInfo</h2>
<!-- backwards compatibility -->
<a id="schemaagenttaskinfo"></a>
<a id="schema_AgentTaskInfo"></a>
<a id="tocSagenttaskinfo"></a>
<a id="tocsagenttaskinfo"></a>

```json
{
  "runnable": "string",
  "taskId": "string",
  "taskStatus": {
    "state": "STATE_UNSPECIFIED",
    "statusEvents": [
      {
        "description": "string",
        "eventTime": "string",
        "taskExecution": {
          "exitCode": 0
        },
        "taskState": "STATE_UNSPECIFIED",
        "type": "string"
      }
    ]
  }
}
```

Task Info

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|runnable|string(int64)|false|none|The highest index of a runnable started by the agent for this task. The runnables are indexed from 1. Value 0 is undefined.|
|taskId|string|false|none|ID of the Task|
|taskStatus|[TaskStatus](#schemataskstatus)|false|none|The status of the Task. If we need agent specific fields we should fork the public TaskStatus into an agent specific one. Or add them below.|

<h2 id="tocS_AgentTimingInfo">AgentTimingInfo</h2>
<!-- backwards compatibility -->
<a id="schemaagenttiminginfo"></a>
<a id="schema_AgentTimingInfo"></a>
<a id="tocSagenttiminginfo"></a>
<a id="tocsagenttiminginfo"></a>

```json
{
  "agentStartupTime": "string",
  "bootTime": "string",
  "scriptStartupTime": "string"
}
```

VM timing information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentStartupTime|string(google-datetime)|false|none|Agent startup time|
|bootTime|string(google-datetime)|false|none|Boot timestamp of the VM OS|
|scriptStartupTime|string(google-datetime)|false|none|Startup time of the Batch VM script.|

<h2 id="tocS_AllocationPolicy">AllocationPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaallocationpolicy"></a>
<a id="schema_AllocationPolicy"></a>
<a id="tocSallocationpolicy"></a>
<a id="tocsallocationpolicy"></a>

```json
{
  "instances": [
    {
      "installGpuDrivers": true,
      "instanceTemplate": "string",
      "policy": {
        "accelerators": [
          {
            "count": "string",
            "installGpuDrivers": true,
            "type": "string"
          }
        ],
        "bootDisk": {
          "diskInterface": "string",
          "image": "string",
          "sizeGb": "string",
          "snapshot": "string",
          "type": "string"
        },
        "disks": [
          {
            "deviceName": "string",
            "existingDisk": "string",
            "newDisk": {
              "diskInterface": "string",
              "image": "string",
              "sizeGb": "string",
              "snapshot": "string",
              "type": "string"
            }
          }
        ],
        "machineType": "string",
        "minCpuPlatform": "string",
        "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED"
      }
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": {
    "allowedLocations": [
      "string"
    ]
  },
  "network": {
    "networkInterfaces": [
      {
        "network": "string",
        "noExternalIpAddress": true,
        "subnetwork": "string"
      }
    ]
  },
  "placement": {
    "collocation": "string",
    "maxDistance": "string"
  },
  "serviceAccount": {
    "email": "string",
    "scopes": [
      "string"
    ]
  }
}
```

A Job's resource allocation policy describes when, where, and how compute resources should be allocated for the Job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instances|[[InstancePolicyOrTemplate](#schemainstancepolicyortemplate)]|false|none|Describe instances that can be created by this AllocationPolicy. Only instances[0] is supported now.|
|labels|object|false|none|Labels applied to all VM instances and other resources created by AllocationPolicy. Labels could be user provided or system generated. You can assign up to 64 labels. [Google Compute Engine label restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) apply. Label names that start with "goog-" or "google-" are reserved.|
|location|[LocationPolicy](#schemalocationpolicy)|false|none|Location where compute resources should be allocated for the Job.|
|network|[NetworkPolicy](#schemanetworkpolicy)|false|none|The network policy.|
|placement|[PlacementPolicy](#schemaplacementpolicy)|false|none|The placement policy.|
|serviceAccount|[ServiceAccount](#schemaserviceaccount)|false|none|Service account that VMs will run as.|

<h2 id="tocS_AttachedDisk">AttachedDisk</h2>
<!-- backwards compatibility -->
<a id="schemaattacheddisk"></a>
<a id="schema_AttachedDisk"></a>
<a id="tocSattacheddisk"></a>
<a id="tocsattacheddisk"></a>

```json
{
  "deviceName": "string",
  "existingDisk": "string",
  "newDisk": {
    "diskInterface": "string",
    "image": "string",
    "sizeGb": "string",
    "snapshot": "string",
    "type": "string"
  }
}
```

A new or an existing persistent disk (PD) or a local ssd attached to a VM instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceName|string|false|none|Device name that the guest operating system will see. It is used by Runnable.volumes field to mount disks. So please specify the device_name if you want Batch to help mount the disk, and it should match the device_name field in volumes.|
|existingDisk|string|false|none|Name of an existing PD.|
|newDisk|[Disk](#schemadisk)|false|none|A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. See https://cloud.google.com/compute/docs/disks#pdspecs and https://cloud.google.com/compute/docs/disks#localssds.|

<h2 id="tocS_Barrier">Barrier</h2>
<!-- backwards compatibility -->
<a id="schemabarrier"></a>
<a id="schema_Barrier"></a>
<a id="tocSbarrier"></a>
<a id="tocsbarrier"></a>

```json
{
  "name": "string"
}
```

Barrier runnable blocks until all tasks in a taskgroup reach it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Barriers are identified by their index in runnable list. Names are not required, but if present should be an identifier.|

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

<h2 id="tocS_ComputeResource">ComputeResource</h2>
<!-- backwards compatibility -->
<a id="schemacomputeresource"></a>
<a id="schema_ComputeResource"></a>
<a id="tocScomputeresource"></a>
<a id="tocscomputeresource"></a>

```json
{
  "bootDiskMib": "string",
  "cpuMilli": "string",
  "memoryMib": "string"
}
```

Compute resource requirements

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bootDiskMib|string(int64)|false|none|Extra boot disk size in MiB for each task.|
|cpuMilli|string(int64)|false|none|The milliCPU count.|
|memoryMib|string(int64)|false|none|Memory in MiB.|

<h2 id="tocS_Container">Container</h2>
<!-- backwards compatibility -->
<a id="schemacontainer"></a>
<a id="schema_Container"></a>
<a id="tocScontainer"></a>
<a id="tocscontainer"></a>

```json
{
  "blockExternalNetwork": true,
  "commands": [
    "string"
  ],
  "entrypoint": "string",
  "imageUri": "string",
  "options": "string",
  "password": "string",
  "username": "string",
  "volumes": [
    "string"
  ]
}
```

Container runnable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockExternalNetwork|boolean|false|none|If set to true, external network access to and from container will be blocked, containers that are with block_external_network as true can still communicate with each other, network cannot be specified in the `container.options` field.|
|commands|[string]|false|none|Overrides the `CMD` specified in the container. If there is an ENTRYPOINT (either in the container image or with the entrypoint field below) then commands are appended as arguments to the ENTRYPOINT.|
|entrypoint|string|false|none|Overrides the `ENTRYPOINT` specified in the container.|
|imageUri|string|false|none|The URI to pull the container image from.|
|options|string|false|none|Arbitrary additional options to include in the "docker run" command when running this container, e.g. "--network host".|
|password|string|false|none|Optional password for logging in to a docker registry. If password matches `projects/*/secrets/*/versions/*` then Batch will read the password from the Secret Manager;|
|username|string|false|none|Optional username for logging in to a docker registry. If username matches `projects/*/secrets/*/versions/*` then Batch will read the username from the Secret Manager.|
|volumes|[string]|false|none|Volumes to mount (bind mount) from the host machine files or directories into the container, formatted to match docker run's --volume option, e.g. /foo:/bar, or /foo:/bar:ro|

<h2 id="tocS_Disk">Disk</h2>
<!-- backwards compatibility -->
<a id="schemadisk"></a>
<a id="schema_Disk"></a>
<a id="tocSdisk"></a>
<a id="tocsdisk"></a>

```json
{
  "diskInterface": "string",
  "image": "string",
  "sizeGb": "string",
  "snapshot": "string",
  "type": "string"
}
```

A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. See https://cloud.google.com/compute/docs/disks#pdspecs and https://cloud.google.com/compute/docs/disks#localssds.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskInterface|string|false|none|Local SSDs are available through both "SCSI" and "NVMe" interfaces. If not indicated, "NVMe" will be the default one for local ssds. We only support "SCSI" for persistent disks now.|
|image|string|false|none|Name of a public or custom image used as the data source. For example, the following are all valid URLs: * Specify the image by its family name: projects/{project}/global/images/family/{image_family} * Specify the image version: projects/{project}/global/images/{image_version} You can also use Batch customized image in short names. The following image values are supported for a boot disk: * "batch-debian": use Batch Debian images. * "batch-centos": use Batch CentOS images. * "batch-cos": use Batch Container-Optimized images.|
|sizeGb|string(int64)|false|none|Disk size in GB. For persistent disk, this field is ignored if `data_source` is `image` or `snapshot`. For local SSD, size_gb should be a multiple of 375GB, otherwise, the final size will be the next greater multiple of 375 GB. For boot disk, Batch will calculate the boot disk size based on source image and task requirements if you do not speicify the size. If both this field and the boot_disk_mib field in task spec's compute_resource are defined, Batch will only honor this field.|
|snapshot|string|false|none|Name of a snapshot used as the data source. Snapshot is not supported as boot disk now.|
|type|string|false|none|Disk type as shown in `gcloud compute disk-types list`. For example, local SSD uses type "local-ssd". Persistent disks and boot disks use "pd-balanced", "pd-extreme", "pd-ssd" or "pd-standard".|

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

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
{
  "encryptedVariables": {
    "cipherText": "string",
    "keyName": "string"
  },
  "secretVariables": {
    "property1": "string",
    "property2": "string"
  },
  "variables": {
    "property1": "string",
    "property2": "string"
  }
}
```

An Environment describes a collection of environment variables to set when executing Tasks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptedVariables|[KMSEnvMap](#schemakmsenvmap)|false|none|An encrypted JSON dictionary where the key/value pairs correspond to environment variable names and their values.|
|secretVariables|object|false|none|A map of environment variable names to Secret Manager secret names. The VM will access the named secrets to set the value of each environment variable.|
|variables|object|false|none|A map of environment variable names to values.|

<h2 id="tocS_GCS">GCS</h2>
<!-- backwards compatibility -->
<a id="schemagcs"></a>
<a id="schema_GCS"></a>
<a id="tocSgcs"></a>
<a id="tocsgcs"></a>

```json
{
  "remotePath": "string"
}
```

Represents a Google Cloud Storage volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remotePath|string|false|none|Remote path, either a bucket name or a subdirectory of a bucket, e.g.: bucket_name, bucket_name/subdirectory/|

<h2 id="tocS_InstancePolicy">InstancePolicy</h2>
<!-- backwards compatibility -->
<a id="schemainstancepolicy"></a>
<a id="schema_InstancePolicy"></a>
<a id="tocSinstancepolicy"></a>
<a id="tocsinstancepolicy"></a>

```json
{
  "accelerators": [
    {
      "count": "string",
      "installGpuDrivers": true,
      "type": "string"
    }
  ],
  "bootDisk": {
    "diskInterface": "string",
    "image": "string",
    "sizeGb": "string",
    "snapshot": "string",
    "type": "string"
  },
  "disks": [
    {
      "deviceName": "string",
      "existingDisk": "string",
      "newDisk": {
        "diskInterface": "string",
        "image": "string",
        "sizeGb": "string",
        "snapshot": "string",
        "type": "string"
      }
    }
  ],
  "machineType": "string",
  "minCpuPlatform": "string",
  "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED"
}
```

InstancePolicy describes an instance type and resources attached to each VM created by this InstancePolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accelerators|[[Accelerator](#schemaaccelerator)]|false|none|The accelerators attached to each VM instance.|
|bootDisk|[Disk](#schemadisk)|false|none|Boot disk to be created and attached to each VM by this InstancePolicy. Boot disk will be deleted when the VM is deleted. Batch API now only supports booting from image.|
|disks|[[AttachedDisk](#schemaattacheddisk)]|false|none|Non-boot disks to be attached for each VM created by this InstancePolicy. New disks will be deleted when the VM is deleted.|
|machineType|string|false|none|The Compute Engine machine type.|
|minCpuPlatform|string|false|none|The minimum CPU platform. See https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform. Not yet implemented.|
|provisioningModel|string|false|none|The provisioning model.|

#### Enumerated Values

|Property|Value|
|---|---|
|provisioningModel|PROVISIONING_MODEL_UNSPECIFIED|
|provisioningModel|STANDARD|
|provisioningModel|SPOT|
|provisioningModel|PREEMPTIBLE|

<h2 id="tocS_InstancePolicyOrTemplate">InstancePolicyOrTemplate</h2>
<!-- backwards compatibility -->
<a id="schemainstancepolicyortemplate"></a>
<a id="schema_InstancePolicyOrTemplate"></a>
<a id="tocSinstancepolicyortemplate"></a>
<a id="tocsinstancepolicyortemplate"></a>

```json
{
  "installGpuDrivers": true,
  "instanceTemplate": "string",
  "policy": {
    "accelerators": [
      {
        "count": "string",
        "installGpuDrivers": true,
        "type": "string"
      }
    ],
    "bootDisk": {
      "diskInterface": "string",
      "image": "string",
      "sizeGb": "string",
      "snapshot": "string",
      "type": "string"
    },
    "disks": [
      {
        "deviceName": "string",
        "existingDisk": "string",
        "newDisk": {
          "diskInterface": "string",
          "image": "string",
          "sizeGb": "string",
          "snapshot": "string",
          "type": "string"
        }
      }
    ],
    "machineType": "string",
    "minCpuPlatform": "string",
    "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED"
  }
}
```

Either an InstancePolicy or an instance template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|installGpuDrivers|boolean|false|none|Set this field true if users want Batch to help fetch drivers from a third party location and install them for GPUs specified in policy.accelerators or instance_template on their behalf. Default is false.|
|instanceTemplate|string|false|none|Name of an instance template used to create VMs. Named the field as 'instance_template' instead of 'template' to avoid c++ keyword conflict.|
|policy|[InstancePolicy](#schemainstancepolicy)|false|none|InstancePolicy.|

<h2 id="tocS_InstanceStatus">InstanceStatus</h2>
<!-- backwards compatibility -->
<a id="schemainstancestatus"></a>
<a id="schema_InstanceStatus"></a>
<a id="tocSinstancestatus"></a>
<a id="tocsinstancestatus"></a>

```json
{
  "bootDisk": {
    "diskInterface": "string",
    "image": "string",
    "sizeGb": "string",
    "snapshot": "string",
    "type": "string"
  },
  "machineType": "string",
  "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED",
  "taskPack": "string"
}
```

VM instance status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bootDisk|[Disk](#schemadisk)|false|none|The VM boot disk.|
|machineType|string|false|none|The Compute Engine machine type.|
|provisioningModel|string|false|none|The VM instance provisioning model.|
|taskPack|string(int64)|false|none|The max number of tasks can be assigned to this instance type.|

#### Enumerated Values

|Property|Value|
|---|---|
|provisioningModel|PROVISIONING_MODEL_UNSPECIFIED|
|provisioningModel|STANDARD|
|provisioningModel|SPOT|
|provisioningModel|PREEMPTIBLE|

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "allocationPolicy": {
    "instances": [
      {
        "installGpuDrivers": true,
        "instanceTemplate": "string",
        "policy": {
          "accelerators": [
            {
              "count": "string",
              "installGpuDrivers": true,
              "type": "string"
            }
          ],
          "bootDisk": {
            "diskInterface": "string",
            "image": "string",
            "sizeGb": "string",
            "snapshot": "string",
            "type": "string"
          },
          "disks": [
            {
              "deviceName": "string",
              "existingDisk": "string",
              "newDisk": {
                "diskInterface": "string",
                "image": "string",
                "sizeGb": "string",
                "snapshot": "string",
                "type": "string"
              }
            }
          ],
          "machineType": "string",
          "minCpuPlatform": "string",
          "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED"
        }
      }
    ],
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": {
      "allowedLocations": [
        "string"
      ]
    },
    "network": {
      "networkInterfaces": [
        {
          "network": "string",
          "noExternalIpAddress": true,
          "subnetwork": "string"
        }
      ]
    },
    "placement": {
      "collocation": "string",
      "maxDistance": "string"
    },
    "serviceAccount": {
      "email": "string",
      "scopes": [
        "string"
      ]
    }
  },
  "createTime": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "logsPolicy": {
    "destination": "DESTINATION_UNSPECIFIED",
    "logsPath": "string"
  },
  "name": "string",
  "notifications": [
    {
      "message": {
        "newJobState": "STATE_UNSPECIFIED",
        "newTaskState": "STATE_UNSPECIFIED",
        "type": "TYPE_UNSPECIFIED"
      },
      "pubsubTopic": "string"
    }
  ],
  "priority": "string",
  "status": {
    "runDuration": "string",
    "state": "STATE_UNSPECIFIED",
    "statusEvents": [
      {
        "description": "string",
        "eventTime": "string",
        "taskExecution": {
          "exitCode": 0
        },
        "taskState": "STATE_UNSPECIFIED",
        "type": "string"
      }
    ],
    "taskGroups": {
      "property1": {
        "counts": {
          "property1": "string",
          "property2": "string"
        },
        "instances": [
          {
            "bootDisk": {
              "diskInterface": "string",
              "image": "string",
              "sizeGb": "string",
              "snapshot": "string",
              "type": "string"
            },
            "machineType": "string",
            "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED",
            "taskPack": "string"
          }
        ]
      },
      "property2": {
        "counts": {
          "property1": "string",
          "property2": "string"
        },
        "instances": [
          {
            "bootDisk": {
              "diskInterface": "string",
              "image": "string",
              "sizeGb": "string",
              "snapshot": "string",
              "type": "string"
            },
            "machineType": "string",
            "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED",
            "taskPack": "string"
          }
        ]
      }
    }
  },
  "taskGroups": [
    {
      "name": "string",
      "parallelism": "string",
      "permissiveSsh": true,
      "requireHostsFile": true,
      "taskCount": "string",
      "taskCountPerNode": "string",
      "taskEnvironments": [
        {
          "encryptedVariables": {
            "cipherText": "string",
            "keyName": "string"
          },
          "secretVariables": {
            "property1": "string",
            "property2": "string"
          },
          "variables": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "taskSpec": {
        "computeResource": {
          "bootDiskMib": "string",
          "cpuMilli": "string",
          "memoryMib": "string"
        },
        "environment": {
          "encryptedVariables": {
            "cipherText": "string",
            "keyName": "string"
          },
          "secretVariables": {
            "property1": "string",
            "property2": "string"
          },
          "variables": {
            "property1": "string",
            "property2": "string"
          }
        },
        "environments": {
          "property1": "string",
          "property2": "string"
        },
        "lifecyclePolicies": [
          {
            "action": "ACTION_UNSPECIFIED",
            "actionCondition": {
              "exitCodes": [
                0
              ]
            }
          }
        ],
        "maxRetryCount": 0,
        "maxRunDuration": "string",
        "runnables": [
          {
            "alwaysRun": true,
            "background": true,
            "barrier": {
              "name": "string"
            },
            "container": {
              "blockExternalNetwork": true,
              "commands": [
                "string"
              ],
              "entrypoint": "string",
              "imageUri": "string",
              "options": "string",
              "password": "string",
              "username": "string",
              "volumes": [
                "string"
              ]
            },
            "environment": {
              "encryptedVariables": {
                "cipherText": "string",
                "keyName": "string"
              },
              "secretVariables": {
                "property1": "string",
                "property2": "string"
              },
              "variables": {
                "property1": "string",
                "property2": "string"
              }
            },
            "ignoreExitStatus": true,
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "script": {
              "path": "string",
              "text": "string"
            },
            "timeout": "string"
          }
        ],
        "volumes": [
          {
            "deviceName": "string",
            "gcs": {
              "remotePath": "string"
            },
            "mountOptions": [
              "string"
            ],
            "mountPath": "string",
            "nfs": {
              "remotePath": "string",
              "server": "string"
            }
          }
        ]
      }
    }
  ],
  "uid": "string",
  "updateTime": "string"
}
```

The Cloud Batch Job description.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocationPolicy|[AllocationPolicy](#schemaallocationpolicy)|false|none|Compute resource allocation for all TaskGroups in the Job.|
|createTime|string(google-datetime)|false|read-only|Output only. When the Job was created.|
|labels|object|false|none|Labels for the Job. Labels could be user provided or system generated. For example, "labels": { "department": "finance", "environment": "test" } You can assign up to 64 labels. [Google Compute Engine label restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) apply. Label names that start with "goog-" or "google-" are reserved.|
|logsPolicy|[LogsPolicy](#schemalogspolicy)|false|none|Log preservation policy for the Job.|
|name|string|false|read-only|Output only. Job name. For example: "projects/123456/locations/us-central1/jobs/job01".|
|notifications|[[JobNotification](#schemajobnotification)]|false|none|Notification configurations.|
|priority|string(int64)|false|none|Priority of the Job. The valid value range is [0, 100). Default value is 0. Higher value indicates higher priority. A job with higher priority value is more likely to run earlier if all other requirements are satisfied.|
|status|[JobStatus](#schemajobstatus)|false|none|Output only. Job status. It is read only for users.|
|taskGroups|[[TaskGroup](#schemataskgroup)]|false|none|Required. TaskGroups in the Job. Only one TaskGroup is supported now.|
|uid|string|false|read-only|Output only. A system generated unique ID (in UUID4 format) for the Job.|
|updateTime|string(google-datetime)|false|read-only|Output only. The last time the Job was updated.|

<h2 id="tocS_JobNotification">JobNotification</h2>
<!-- backwards compatibility -->
<a id="schemajobnotification"></a>
<a id="schema_JobNotification"></a>
<a id="tocSjobnotification"></a>
<a id="tocsjobnotification"></a>

```json
{
  "message": {
    "newJobState": "STATE_UNSPECIFIED",
    "newTaskState": "STATE_UNSPECIFIED",
    "type": "TYPE_UNSPECIFIED"
  },
  "pubsubTopic": "string"
}
```

Notification configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[Message](#schemamessage)|false|none|The attribute requirements of messages to be sent to this Pub/Sub topic. Without this field, no message will be sent.|
|pubsubTopic|string|false|none|The Pub/Sub topic where notifications like the job state changes will be published. This topic exist in the same project as the job and billings will be charged to this project. If not specified, no Pub/Sub messages will be sent. Topic format: `projects/{project}/topics/{topic}`.|

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
{
  "runDuration": "string",
  "state": "STATE_UNSPECIFIED",
  "statusEvents": [
    {
      "description": "string",
      "eventTime": "string",
      "taskExecution": {
        "exitCode": 0
      },
      "taskState": "STATE_UNSPECIFIED",
      "type": "string"
    }
  ],
  "taskGroups": {
    "property1": {
      "counts": {
        "property1": "string",
        "property2": "string"
      },
      "instances": [
        {
          "bootDisk": {
            "diskInterface": "string",
            "image": "string",
            "sizeGb": "string",
            "snapshot": "string",
            "type": "string"
          },
          "machineType": "string",
          "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED",
          "taskPack": "string"
        }
      ]
    },
    "property2": {
      "counts": {
        "property1": "string",
        "property2": "string"
      },
      "instances": [
        {
          "bootDisk": {
            "diskInterface": "string",
            "image": "string",
            "sizeGb": "string",
            "snapshot": "string",
            "type": "string"
          },
          "machineType": "string",
          "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED",
          "taskPack": "string"
        }
      ]
    }
  }
}
```

Job status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|runDuration|string(google-duration)|false|none|The duration of time that the Job spent in status RUNNING.|
|state|string|false|none|Job state|
|statusEvents|[[StatusEvent](#schemastatusevent)]|false|none|Job status events|
|taskGroups|object|false|none|Aggregated task status for each TaskGroup in the Job. The map key is TaskGroup ID.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|QUEUED|
|state|SCHEDULED|
|state|RUNNING|
|state|SUCCEEDED|
|state|FAILED|
|state|DELETION_IN_PROGRESS|

<h2 id="tocS_KMSEnvMap">KMSEnvMap</h2>
<!-- backwards compatibility -->
<a id="schemakmsenvmap"></a>
<a id="schema_KMSEnvMap"></a>
<a id="tocSkmsenvmap"></a>
<a id="tocskmsenvmap"></a>

```json
{
  "cipherText": "string",
  "keyName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cipherText|string|false|none|The value of the cipherText response from the `encrypt` method.|
|keyName|string|false|none|The name of the KMS key that will be used to decrypt the cipher text.|

<h2 id="tocS_LifecyclePolicy">LifecyclePolicy</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepolicy"></a>
<a id="schema_LifecyclePolicy"></a>
<a id="tocSlifecyclepolicy"></a>
<a id="tocslifecyclepolicy"></a>

```json
{
  "action": "ACTION_UNSPECIFIED",
  "actionCondition": {
    "exitCodes": [
      0
    ]
  }
}
```

LifecyclePolicy describes how to deal with task failures based on different conditions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Action to execute when ActionCondition is true. When RETRY_TASK is specified, we will retry failed tasks if we notice any exit code match and fail tasks if no match is found. Likewise, when FAIL_TASK is specified, we will fail tasks if we notice any exit code match and retry tasks if no match is found.|
|actionCondition|[ActionCondition](#schemaactioncondition)|false|none|Conditions that decide why a task failure is dealt with a specific action.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|ACTION_UNSPECIFIED|
|action|RETRY_TASK|
|action|FAIL_TASK|

<h2 id="tocS_ListJobsResponse">ListJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsresponse"></a>
<a id="schema_ListJobsResponse"></a>
<a id="tocSlistjobsresponse"></a>
<a id="tocslistjobsresponse"></a>

```json
{
  "jobs": [
    {
      "allocationPolicy": {
        "instances": [
          {
            "installGpuDrivers": true,
            "instanceTemplate": "string",
            "policy": {
              "accelerators": [
                {
                  "count": "string",
                  "installGpuDrivers": true,
                  "type": "string"
                }
              ],
              "bootDisk": {
                "diskInterface": "string",
                "image": "string",
                "sizeGb": "string",
                "snapshot": "string",
                "type": "string"
              },
              "disks": [
                {
                  "deviceName": "string",
                  "existingDisk": "string",
                  "newDisk": {
                    "diskInterface": "string",
                    "image": "string",
                    "sizeGb": "string",
                    "snapshot": "string",
                    "type": "string"
                  }
                }
              ],
              "machineType": "string",
              "minCpuPlatform": "string",
              "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED"
            }
          }
        ],
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "location": {
          "allowedLocations": [
            "string"
          ]
        },
        "network": {
          "networkInterfaces": [
            {
              "network": "string",
              "noExternalIpAddress": true,
              "subnetwork": "string"
            }
          ]
        },
        "placement": {
          "collocation": "string",
          "maxDistance": "string"
        },
        "serviceAccount": {
          "email": "string",
          "scopes": [
            "string"
          ]
        }
      },
      "createTime": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "logsPolicy": {
        "destination": "DESTINATION_UNSPECIFIED",
        "logsPath": "string"
      },
      "name": "string",
      "notifications": [
        {
          "message": {
            "newJobState": "STATE_UNSPECIFIED",
            "newTaskState": "STATE_UNSPECIFIED",
            "type": "TYPE_UNSPECIFIED"
          },
          "pubsubTopic": "string"
        }
      ],
      "priority": "string",
      "status": {
        "runDuration": "string",
        "state": "STATE_UNSPECIFIED",
        "statusEvents": [
          {
            "description": "string",
            "eventTime": "string",
            "taskExecution": {
              "exitCode": 0
            },
            "taskState": "STATE_UNSPECIFIED",
            "type": "string"
          }
        ],
        "taskGroups": {
          "property1": {
            "counts": {
              "property1": "string",
              "property2": "string"
            },
            "instances": [
              {
                "bootDisk": {
                  "diskInterface": "string",
                  "image": "string",
                  "sizeGb": "string",
                  "snapshot": "string",
                  "type": "string"
                },
                "machineType": "string",
                "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED",
                "taskPack": "string"
              }
            ]
          },
          "property2": {
            "counts": {
              "property1": "string",
              "property2": "string"
            },
            "instances": [
              {
                "bootDisk": {
                  "diskInterface": "string",
                  "image": "string",
                  "sizeGb": "string",
                  "snapshot": "string",
                  "type": "string"
                },
                "machineType": "string",
                "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED",
                "taskPack": "string"
              }
            ]
          }
        }
      },
      "taskGroups": [
        {
          "name": "string",
          "parallelism": "string",
          "permissiveSsh": true,
          "requireHostsFile": true,
          "taskCount": "string",
          "taskCountPerNode": "string",
          "taskEnvironments": [
            {
              "encryptedVariables": {
                "cipherText": "string",
                "keyName": "string"
              },
              "secretVariables": {
                "property1": "string",
                "property2": "string"
              },
              "variables": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "taskSpec": {
            "computeResource": {
              "bootDiskMib": "string",
              "cpuMilli": "string",
              "memoryMib": "string"
            },
            "environment": {
              "encryptedVariables": {
                "cipherText": "string",
                "keyName": "string"
              },
              "secretVariables": {
                "property1": "string",
                "property2": "string"
              },
              "variables": {
                "property1": "string",
                "property2": "string"
              }
            },
            "environments": {
              "property1": "string",
              "property2": "string"
            },
            "lifecyclePolicies": [
              {
                "action": "ACTION_UNSPECIFIED",
                "actionCondition": {
                  "exitCodes": [
                    0
                  ]
                }
              }
            ],
            "maxRetryCount": 0,
            "maxRunDuration": "string",
            "runnables": [
              {
                "alwaysRun": true,
                "background": true,
                "barrier": {
                  "name": "string"
                },
                "container": {
                  "blockExternalNetwork": true,
                  "commands": [
                    "string"
                  ],
                  "entrypoint": "string",
                  "imageUri": "string",
                  "options": "string",
                  "password": "string",
                  "username": "string",
                  "volumes": [
                    "string"
                  ]
                },
                "environment": {
                  "encryptedVariables": {
                    "cipherText": "string",
                    "keyName": "string"
                  },
                  "secretVariables": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "variables": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "ignoreExitStatus": true,
                "labels": {
                  "property1": "string",
                  "property2": "string"
                },
                "script": {
                  "path": "string",
                  "text": "string"
                },
                "timeout": "string"
              }
            ],
            "volumes": [
              {
                "deviceName": "string",
                "gcs": {
                  "remotePath": "string"
                },
                "mountOptions": [
                  "string"
                ],
                "mountPath": "string",
                "nfs": {
                  "remotePath": "string",
                  "server": "string"
                }
              }
            ]
          }
        }
      ],
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

ListJob Response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|[[Job](#schemajob)]|false|none|Jobs.|
|nextPageToken|string|false|none|Next page token.|
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

<h2 id="tocS_ListTasksResponse">ListTasksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttasksresponse"></a>
<a id="schema_ListTasksResponse"></a>
<a id="tocSlisttasksresponse"></a>
<a id="tocslisttasksresponse"></a>

```json
{
  "nextPageToken": "string",
  "tasks": [
    {
      "name": "string",
      "status": {
        "state": "STATE_UNSPECIFIED",
        "statusEvents": [
          {
            "description": "string",
            "eventTime": "string",
            "taskExecution": {
              "exitCode": 0
            },
            "taskState": "STATE_UNSPECIFIED",
            "type": "string"
          }
        ]
      }
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

ListTasks Response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Next page token.|
|tasks|[[Task](#schematask)]|false|none|Tasks.|
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

<h2 id="tocS_LocationPolicy">LocationPolicy</h2>
<!-- backwards compatibility -->
<a id="schemalocationpolicy"></a>
<a id="schema_LocationPolicy"></a>
<a id="tocSlocationpolicy"></a>
<a id="tocslocationpolicy"></a>

```json
{
  "allowedLocations": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedLocations|[string]|false|none|A list of allowed location names represented by internal URLs. Each location can be a region or a zone. Only one region or multiple zones in one region is supported now. For example, ["regions/us-central1"] allow VMs in any zones in region us-central1. ["zones/us-central1-a", "zones/us-central1-c"] only allow VMs in zones us-central1-a and us-central1-c. All locations end up in different regions would cause errors. For example, ["regions/us-central1", "zones/us-central1-a", "zones/us-central1-b", "zones/us-west1-a"] contains 2 regions "us-central1" and "us-west1". An error is expected in this case.|

<h2 id="tocS_LogsPolicy">LogsPolicy</h2>
<!-- backwards compatibility -->
<a id="schemalogspolicy"></a>
<a id="schema_LogsPolicy"></a>
<a id="tocSlogspolicy"></a>
<a id="tocslogspolicy"></a>

```json
{
  "destination": "DESTINATION_UNSPECIFIED",
  "logsPath": "string"
}
```

LogsPolicy describes how outputs from a Job's Tasks (stdout/stderr) will be preserved.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|string|false|none|Where logs should be saved.|
|logsPath|string|false|none|The path to which logs are saved when the destination = PATH. This can be a local file path on the VM, or under the mount point of a Persistent Disk or Filestore, or a Cloud Storage path.|

#### Enumerated Values

|Property|Value|
|---|---|
|destination|DESTINATION_UNSPECIFIED|
|destination|CLOUD_LOGGING|
|destination|PATH|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "newJobState": "STATE_UNSPECIFIED",
  "newTaskState": "STATE_UNSPECIFIED",
  "type": "TYPE_UNSPECIFIED"
}
```

Message details. Describe the attribute that a message should have. Without specified message attributes, no message will be sent by default.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newJobState|string|false|none|The new job state.|
|newTaskState|string|false|none|The new task state.|
|type|string|false|none|The message type.|

#### Enumerated Values

|Property|Value|
|---|---|
|newJobState|STATE_UNSPECIFIED|
|newJobState|QUEUED|
|newJobState|SCHEDULED|
|newJobState|RUNNING|
|newJobState|SUCCEEDED|
|newJobState|FAILED|
|newJobState|DELETION_IN_PROGRESS|
|newTaskState|STATE_UNSPECIFIED|
|newTaskState|PENDING|
|newTaskState|ASSIGNED|
|newTaskState|RUNNING|
|newTaskState|FAILED|
|newTaskState|SUCCEEDED|
|newTaskState|UNEXECUTED|
|type|TYPE_UNSPECIFIED|
|type|JOB_STATE_CHANGED|
|type|TASK_STATE_CHANGED|

<h2 id="tocS_NFS">NFS</h2>
<!-- backwards compatibility -->
<a id="schemanfs"></a>
<a id="schema_NFS"></a>
<a id="tocSnfs"></a>
<a id="tocsnfs"></a>

```json
{
  "remotePath": "string",
  "server": "string"
}
```

Represents an NFS volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remotePath|string|false|none|Remote source path exported from the NFS, e.g., "/share".|
|server|string|false|none|The IP address of the NFS.|

<h2 id="tocS_NetworkInterface">NetworkInterface</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterface"></a>
<a id="schema_NetworkInterface"></a>
<a id="tocSnetworkinterface"></a>
<a id="tocsnetworkinterface"></a>

```json
{
  "network": "string",
  "noExternalIpAddress": true,
  "subnetwork": "string"
}
```

A network interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|network|string|false|none|The URL of an existing network resource. You can specify the network as a full or partial URL. For example, the following are all valid URLs: * https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} * projects/{project}/global/networks/{network} * global/networks/{network}|
|noExternalIpAddress|boolean|false|none|Default is false (with an external IP address). Required if no external public IP address is attached to the VM. If no external public IP address, additional configuration is required to allow the VM to access Google Services. See https://cloud.google.com/vpc/docs/configure-private-google-access and https://cloud.google.com/nat/docs/gce-example#create-nat for more information.|
|subnetwork|string|false|none|The URL of an existing subnetwork resource in the network. You can specify the subnetwork as a full or partial URL. For example, the following are all valid URLs: * https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetwork} * projects/{project}/regions/{region}/subnetworks/{subnetwork} * regions/{region}/subnetworks/{subnetwork}|

<h2 id="tocS_NetworkPolicy">NetworkPolicy</h2>
<!-- backwards compatibility -->
<a id="schemanetworkpolicy"></a>
<a id="schema_NetworkPolicy"></a>
<a id="tocSnetworkpolicy"></a>
<a id="tocsnetworkpolicy"></a>

```json
{
  "networkInterfaces": [
    {
      "network": "string",
      "noExternalIpAddress": true,
      "subnetwork": "string"
    }
  ]
}
```

NetworkPolicy describes VM instance network configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networkInterfaces|[[NetworkInterface](#schemanetworkinterface)]|false|none|Network configurations.|

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

<h2 id="tocS_PlacementPolicy">PlacementPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaplacementpolicy"></a>
<a id="schema_PlacementPolicy"></a>
<a id="tocSplacementpolicy"></a>
<a id="tocsplacementpolicy"></a>

```json
{
  "collocation": "string",
  "maxDistance": "string"
}
```

PlacementPolicy describes a group placement policy for the VMs controlled by this AllocationPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collocation|string|false|none|UNSPECIFIED vs. COLLOCATED (default UNSPECIFIED). Use COLLOCATED when you want VMs to be located close to each other for low network latency between the VMs. No placement policy will be generated when collocation is UNSPECIFIED.|
|maxDistance|string(int64)|false|none|When specified, causes the job to fail if more than max_distance logical switches are required between VMs. Batch uses the most compact possible placement of VMs even when max_distance is not specified. An explicit max_distance makes that level of compactness a strict requirement. Not yet implemented|

<h2 id="tocS_ReportAgentStateRequest">ReportAgentStateRequest</h2>
<!-- backwards compatibility -->
<a id="schemareportagentstaterequest"></a>
<a id="schema_ReportAgentStateRequest"></a>
<a id="tocSreportagentstaterequest"></a>
<a id="tocsreportagentstaterequest"></a>

```json
{
  "agentInfo": {
    "jobId": "string",
    "reportTime": "string",
    "state": "AGENT_STATE_UNSPECIFIED",
    "taskGroupId": "string",
    "tasks": [
      {
        "runnable": "string",
        "taskId": "string",
        "taskStatus": {
          "state": "STATE_UNSPECIFIED",
          "statusEvents": [
            {
              "description": "string",
              "eventTime": "string",
              "taskExecution": {
                "exitCode": 0
              },
              "taskState": "STATE_UNSPECIFIED",
              "type": "string"
            }
          ]
        }
      }
    ]
  },
  "agentTimingInfo": {
    "agentStartupTime": "string",
    "bootTime": "string",
    "scriptStartupTime": "string"
  },
  "metadata": {
    "creationTime": "string",
    "creator": "string",
    "imageVersion": "string",
    "instance": "string",
    "instanceId": "string",
    "instancePreemptionNoticeReceived": true,
    "osRelease": {
      "property1": "string",
      "property2": "string"
    },
    "version": "string",
    "zone": "string"
  }
}
```

Request to report agent's state. The Request itself implies the agent is healthy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentInfo|[AgentInfo](#schemaagentinfo)|false|none|Agent info.|
|agentTimingInfo|[AgentTimingInfo](#schemaagenttiminginfo)|false|none|Agent timing info.|
|metadata|[AgentMetadata](#schemaagentmetadata)|false|none|Agent metadata.|

<h2 id="tocS_ReportAgentStateResponse">ReportAgentStateResponse</h2>
<!-- backwards compatibility -->
<a id="schemareportagentstateresponse"></a>
<a id="schema_ReportAgentStateResponse"></a>
<a id="tocSreportagentstateresponse"></a>
<a id="tocsreportagentstateresponse"></a>

```json
{
  "defaultReportInterval": "string",
  "minReportInterval": "string",
  "tasks": [
    {
      "intendedState": "INTENDED_STATE_UNSPECIFIED",
      "reachedBarrier": "string",
      "spec": {
        "computeResource": {
          "bootDiskMib": "string",
          "cpuMilli": "string",
          "memoryMib": "string"
        },
        "environment": {
          "encryptedVariables": {
            "cipherText": "string",
            "keyName": "string"
          },
          "secretVariables": {
            "property1": "string",
            "property2": "string"
          },
          "variables": {
            "property1": "string",
            "property2": "string"
          }
        },
        "environments": {
          "property1": "string",
          "property2": "string"
        },
        "lifecyclePolicies": [
          {
            "action": "ACTION_UNSPECIFIED",
            "actionCondition": {
              "exitCodes": [
                0
              ]
            }
          }
        ],
        "maxRetryCount": 0,
        "maxRunDuration": "string",
        "runnables": [
          {
            "alwaysRun": true,
            "background": true,
            "barrier": {
              "name": "string"
            },
            "container": {
              "blockExternalNetwork": true,
              "commands": [
                "string"
              ],
              "entrypoint": "string",
              "imageUri": "string",
              "options": "string",
              "password": "string",
              "username": "string",
              "volumes": [
                "string"
              ]
            },
            "environment": {
              "encryptedVariables": {
                "cipherText": "string",
                "keyName": "string"
              },
              "secretVariables": {
                "property1": "string",
                "property2": "string"
              },
              "variables": {
                "property1": "string",
                "property2": "string"
              }
            },
            "ignoreExitStatus": true,
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "script": {
              "path": "string",
              "text": "string"
            },
            "timeout": "string"
          }
        ],
        "volumes": [
          {
            "deviceName": "string",
            "gcs": {
              "remotePath": "string"
            },
            "mountOptions": [
              "string"
            ],
            "mountPath": "string",
            "nfs": {
              "remotePath": "string",
              "server": "string"
            }
          }
        ]
      },
      "status": {
        "state": "STATE_UNSPECIFIED",
        "statusEvents": [
          {
            "description": "string",
            "eventTime": "string",
            "taskExecution": {
              "exitCode": 0
            },
            "taskState": "STATE_UNSPECIFIED",
            "type": "string"
          }
        ]
      },
      "task": "string",
      "taskSource": "TASK_SOURCE_UNSPECIFIED"
    }
  ]
}
```

Response to ReportAgentStateRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultReportInterval|string(google-duration)|false|none|Default report interval override|
|minReportInterval|string(google-duration)|false|none|Minimum report interval override|
|tasks|[[AgentTask](#schemaagenttask)]|false|none|Tasks assigned to the agent|

<h2 id="tocS_Runnable">Runnable</h2>
<!-- backwards compatibility -->
<a id="schemarunnable"></a>
<a id="schema_Runnable"></a>
<a id="tocSrunnable"></a>
<a id="tocsrunnable"></a>

```json
{
  "alwaysRun": true,
  "background": true,
  "barrier": {
    "name": "string"
  },
  "container": {
    "blockExternalNetwork": true,
    "commands": [
      "string"
    ],
    "entrypoint": "string",
    "imageUri": "string",
    "options": "string",
    "password": "string",
    "username": "string",
    "volumes": [
      "string"
    ]
  },
  "environment": {
    "encryptedVariables": {
      "cipherText": "string",
      "keyName": "string"
    },
    "secretVariables": {
      "property1": "string",
      "property2": "string"
    },
    "variables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "ignoreExitStatus": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "script": {
    "path": "string",
    "text": "string"
  },
  "timeout": "string"
}
```

Runnable describes instructions for executing a specific script or container as part of a Task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alwaysRun|boolean|false|none|By default, after a Runnable fails, no further Runnable are executed. This flag indicates that this Runnable must be run even if the Task has already failed. This is useful for Runnables that copy output files off of the VM or for debugging. The always_run flag does not override the Task's overall max_run_duration. If the max_run_duration has expired then no further Runnables will execute, not even always_run Runnables.|
|background|boolean|false|none|This flag allows a Runnable to continue running in the background while the Task executes subsequent Runnables. This is useful to provide services to other Runnables (or to provide debugging support tools like SSH servers).|
|barrier|[Barrier](#schemabarrier)|false|none|Barrier runnable.|
|container|[Container](#schemacontainer)|false|none|Container runnable.|
|environment|[Environment](#schemaenvironment)|false|none|Environment variables for this Runnable (overrides variables set for the whole Task or TaskGroup).|
|ignoreExitStatus|boolean|false|none|Normally, a non-zero exit status causes the Task to fail. This flag allows execution of other Runnables to continue instead.|
|labels|object|false|none|Labels for this Runnable.|
|script|[Script](#schemascript)|false|none|Script runnable.|
|timeout|string(google-duration)|false|none|Timeout for this Runnable.|

<h2 id="tocS_Script">Script</h2>
<!-- backwards compatibility -->
<a id="schemascript"></a>
<a id="schema_Script"></a>
<a id="tocSscript"></a>
<a id="tocsscript"></a>

```json
{
  "path": "string",
  "text": "string"
}
```

Script runnable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|false|none|Script file path on the host VM. To specify an interpreter, please add a `#!`(also known as [shebang line](https://en.wikipedia.org/wiki/Shebang_(Unix))) as the first line of the file.(For example, to execute the script using bash, `#!/bin/bash` should be the first line of the file. To execute the script using`Python3`, `#!/usr/bin/env python3` should be the first line of the file.) Otherwise, the file will by default be excuted by `/bin/sh`.|
|text|string|false|none|Shell script text. To specify an interpreter, please add a `#!\n` at the beginning of the text.(For example, to execute the script using bash, `#!/bin/bash\n` should be added. To execute the script using`Python3`, `#!/usr/bin/env python3\n` should be added.) Otherwise, the script will by default be excuted by `/bin/sh`.|

<h2 id="tocS_ServiceAccount">ServiceAccount</h2>
<!-- backwards compatibility -->
<a id="schemaserviceaccount"></a>
<a id="schema_ServiceAccount"></a>
<a id="tocSserviceaccount"></a>
<a id="tocsserviceaccount"></a>

```json
{
  "email": "string",
  "scopes": [
    "string"
  ]
}
```

Carries information about a Google Cloud service account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Email address of the service account. If not specified, the default Compute Engine service account for the project will be used. If instance template is being used, the service account has to be specified in the instance template and it has to match the email field here.|
|scopes|[string]|false|none|List of scopes to be enabled for this service account on the VM, in addition to the cloud-platform API scope that will be added by default.|

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

<h2 id="tocS_StatusEvent">StatusEvent</h2>
<!-- backwards compatibility -->
<a id="schemastatusevent"></a>
<a id="schema_StatusEvent"></a>
<a id="tocSstatusevent"></a>
<a id="tocsstatusevent"></a>

```json
{
  "description": "string",
  "eventTime": "string",
  "taskExecution": {
    "exitCode": 0
  },
  "taskState": "STATE_UNSPECIFIED",
  "type": "string"
}
```

Status event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the event.|
|eventTime|string(google-datetime)|false|none|The time this event occurred.|
|taskExecution|[TaskExecution](#schemataskexecution)|false|none|Task Execution|
|taskState|string|false|none|Task State|
|type|string|false|none|Type of the event.|

#### Enumerated Values

|Property|Value|
|---|---|
|taskState|STATE_UNSPECIFIED|
|taskState|PENDING|
|taskState|ASSIGNED|
|taskState|RUNNING|
|taskState|FAILED|
|taskState|SUCCEEDED|
|taskState|UNEXECUTED|

<h2 id="tocS_Task">Task</h2>
<!-- backwards compatibility -->
<a id="schematask"></a>
<a id="schema_Task"></a>
<a id="tocStask"></a>
<a id="tocstask"></a>

```json
{
  "name": "string",
  "status": {
    "state": "STATE_UNSPECIFIED",
    "statusEvents": [
      {
        "description": "string",
        "eventTime": "string",
        "taskExecution": {
          "exitCode": 0
        },
        "taskState": "STATE_UNSPECIFIED",
        "type": "string"
      }
    ]
  }
}
```

A Cloud Batch task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Task name. The name is generated from the parent TaskGroup name and 'id' field. For example: "projects/123456/locations/us-west1/jobs/job01/taskGroups/group01/tasks/task01".|
|status|[TaskStatus](#schemataskstatus)|false|none|Task Status.|

<h2 id="tocS_TaskExecution">TaskExecution</h2>
<!-- backwards compatibility -->
<a id="schemataskexecution"></a>
<a id="schema_TaskExecution"></a>
<a id="tocStaskexecution"></a>
<a id="tocstaskexecution"></a>

```json
{
  "exitCode": 0
}
```

This Task Execution field includes detail information for task execution procedures, based on StatusEvent types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exitCode|integer(int32)|false|none|When task is completed as the status of FAILED or SUCCEEDED, exit code is for one task execution result, default is 0 as success.|

<h2 id="tocS_TaskGroup">TaskGroup</h2>
<!-- backwards compatibility -->
<a id="schemataskgroup"></a>
<a id="schema_TaskGroup"></a>
<a id="tocStaskgroup"></a>
<a id="tocstaskgroup"></a>

```json
{
  "name": "string",
  "parallelism": "string",
  "permissiveSsh": true,
  "requireHostsFile": true,
  "taskCount": "string",
  "taskCountPerNode": "string",
  "taskEnvironments": [
    {
      "encryptedVariables": {
        "cipherText": "string",
        "keyName": "string"
      },
      "secretVariables": {
        "property1": "string",
        "property2": "string"
      },
      "variables": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "taskSpec": {
    "computeResource": {
      "bootDiskMib": "string",
      "cpuMilli": "string",
      "memoryMib": "string"
    },
    "environment": {
      "encryptedVariables": {
        "cipherText": "string",
        "keyName": "string"
      },
      "secretVariables": {
        "property1": "string",
        "property2": "string"
      },
      "variables": {
        "property1": "string",
        "property2": "string"
      }
    },
    "environments": {
      "property1": "string",
      "property2": "string"
    },
    "lifecyclePolicies": [
      {
        "action": "ACTION_UNSPECIFIED",
        "actionCondition": {
          "exitCodes": [
            0
          ]
        }
      }
    ],
    "maxRetryCount": 0,
    "maxRunDuration": "string",
    "runnables": [
      {
        "alwaysRun": true,
        "background": true,
        "barrier": {
          "name": "string"
        },
        "container": {
          "blockExternalNetwork": true,
          "commands": [
            "string"
          ],
          "entrypoint": "string",
          "imageUri": "string",
          "options": "string",
          "password": "string",
          "username": "string",
          "volumes": [
            "string"
          ]
        },
        "environment": {
          "encryptedVariables": {
            "cipherText": "string",
            "keyName": "string"
          },
          "secretVariables": {
            "property1": "string",
            "property2": "string"
          },
          "variables": {
            "property1": "string",
            "property2": "string"
          }
        },
        "ignoreExitStatus": true,
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "script": {
          "path": "string",
          "text": "string"
        },
        "timeout": "string"
      }
    ],
    "volumes": [
      {
        "deviceName": "string",
        "gcs": {
          "remotePath": "string"
        },
        "mountOptions": [
          "string"
        ],
        "mountPath": "string",
        "nfs": {
          "remotePath": "string",
          "server": "string"
        }
      }
    ]
  }
}
```

A TaskGroup contains one or multiple Tasks that share the same Runnable but with different runtime parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|read-only|Output only. TaskGroup name. The system generates this field based on parent Job name. For example: "projects/123456/locations/us-west1/jobs/job01/taskGroups/group01".|
|parallelism|string(int64)|false|none|Max number of tasks that can run in parallel. Default to min(task_count, 1000). Field parallelism must be 1 if the scheduling_policy is IN_ORDER.|
|permissiveSsh|boolean|false|none|When true, Batch will configure SSH to allow passwordless login between VMs running the Batch tasks in the same TaskGroup.|
|requireHostsFile|boolean|false|none|When true, Batch will populate a file with a list of all VMs assigned to the TaskGroup and set the BATCH_HOSTS_FILE environment variable to the path of that file. Defaults to false.|
|taskCount|string(int64)|false|none|Number of Tasks in the TaskGroup. Default is 1.|
|taskCountPerNode|string(int64)|false|none|Max number of tasks that can be run on a VM at the same time. If not specified, the system will decide a value based on available compute resources on a VM and task requirements.|
|taskEnvironments|[[Environment](#schemaenvironment)]|false|none|An array of environment variable mappings, which are passed to Tasks with matching indices. If task_environments is used then task_count should not be specified in the request (and will be ignored). Task count will be the length of task_environments. Tasks get a BATCH_TASK_INDEX and BATCH_TASK_COUNT environment variable, in addition to any environment variables set in task_environments, specifying the number of Tasks in the Task's parent TaskGroup, and the specific Task's index in the TaskGroup (0 through BATCH_TASK_COUNT - 1). task_environments supports up to 200 entries.|
|taskSpec|[TaskSpec](#schemataskspec)|false|none|Required. Tasks in the group share the same task spec.|

<h2 id="tocS_TaskGroupStatus">TaskGroupStatus</h2>
<!-- backwards compatibility -->
<a id="schemataskgroupstatus"></a>
<a id="schema_TaskGroupStatus"></a>
<a id="tocStaskgroupstatus"></a>
<a id="tocstaskgroupstatus"></a>

```json
{
  "counts": {
    "property1": "string",
    "property2": "string"
  },
  "instances": [
    {
      "bootDisk": {
        "diskInterface": "string",
        "image": "string",
        "sizeGb": "string",
        "snapshot": "string",
        "type": "string"
      },
      "machineType": "string",
      "provisioningModel": "PROVISIONING_MODEL_UNSPECIFIED",
      "taskPack": "string"
    }
  ]
}
```

Aggregated task status for a TaskGroup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counts|object|false|none|Count of task in each state in the TaskGroup. The map key is task state name.|
|instances|[[InstanceStatus](#schemainstancestatus)]|false|none|Status of instances allocated for the TaskGroup.|

<h2 id="tocS_TaskSpec">TaskSpec</h2>
<!-- backwards compatibility -->
<a id="schemataskspec"></a>
<a id="schema_TaskSpec"></a>
<a id="tocStaskspec"></a>
<a id="tocstaskspec"></a>

```json
{
  "computeResource": {
    "bootDiskMib": "string",
    "cpuMilli": "string",
    "memoryMib": "string"
  },
  "environment": {
    "encryptedVariables": {
      "cipherText": "string",
      "keyName": "string"
    },
    "secretVariables": {
      "property1": "string",
      "property2": "string"
    },
    "variables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "environments": {
    "property1": "string",
    "property2": "string"
  },
  "lifecyclePolicies": [
    {
      "action": "ACTION_UNSPECIFIED",
      "actionCondition": {
        "exitCodes": [
          0
        ]
      }
    }
  ],
  "maxRetryCount": 0,
  "maxRunDuration": "string",
  "runnables": [
    {
      "alwaysRun": true,
      "background": true,
      "barrier": {
        "name": "string"
      },
      "container": {
        "blockExternalNetwork": true,
        "commands": [
          "string"
        ],
        "entrypoint": "string",
        "imageUri": "string",
        "options": "string",
        "password": "string",
        "username": "string",
        "volumes": [
          "string"
        ]
      },
      "environment": {
        "encryptedVariables": {
          "cipherText": "string",
          "keyName": "string"
        },
        "secretVariables": {
          "property1": "string",
          "property2": "string"
        },
        "variables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "ignoreExitStatus": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "script": {
        "path": "string",
        "text": "string"
      },
      "timeout": "string"
    }
  ],
  "volumes": [
    {
      "deviceName": "string",
      "gcs": {
        "remotePath": "string"
      },
      "mountOptions": [
        "string"
      ],
      "mountPath": "string",
      "nfs": {
        "remotePath": "string",
        "server": "string"
      }
    }
  ]
}
```

Spec of a task

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computeResource|[ComputeResource](#schemacomputeresource)|false|none|ComputeResource requirements.|
|environment|[Environment](#schemaenvironment)|false|none|Environment variables to set before running the Task.|
|environments|object|false|none|Deprecated: please use environment(non-plural) instead.|
|lifecyclePolicies|[[LifecyclePolicy](#schemalifecyclepolicy)]|false|none|Lifecycle management schema when any task in a task group is failed. Currently we only support one lifecycle policy. When the lifecycle policy condition is met, the action in the policy will execute. If task execution result does not meet with the defined lifecycle policy, we consider it as the default policy. Default policy means if the exit code is 0, exit task. If task ends with non-zero exit code, retry the task with max_retry_count.|
|maxRetryCount|integer(int32)|false|none|Maximum number of retries on failures. The default, 0, which means never retry. The valid value range is [0, 10].|
|maxRunDuration|string(google-duration)|false|none|Maximum duration the task should run. The task will be killed and marked as FAILED if over this limit.|
|runnables|[[Runnable](#schemarunnable)]|false|none|The sequence of scripts or containers to run for this Task. Each Task using this TaskSpec executes its list of runnables in order. The Task succeeds if all of its runnables either exit with a zero status or any that exit with a non-zero status have the ignore_exit_status flag. Background runnables are killed automatically (if they have not already exited) a short time after all foreground runnables have completed. Even though this is likely to result in a non-zero exit status for the background runnable, these automatic kills are not treated as Task failures.|
|volumes|[[Volume](#schemavolume)]|false|none|Volumes to mount before running Tasks using this TaskSpec.|

<h2 id="tocS_TaskStatus">TaskStatus</h2>
<!-- backwards compatibility -->
<a id="schemataskstatus"></a>
<a id="schema_TaskStatus"></a>
<a id="tocStaskstatus"></a>
<a id="tocstaskstatus"></a>

```json
{
  "state": "STATE_UNSPECIFIED",
  "statusEvents": [
    {
      "description": "string",
      "eventTime": "string",
      "taskExecution": {
        "exitCode": 0
      },
      "taskState": "STATE_UNSPECIFIED",
      "type": "string"
    }
  ]
}
```

Status of a task

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|none|Task state|
|statusEvents|[[StatusEvent](#schemastatusevent)]|false|none|Detailed info about why the state is reached.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|ASSIGNED|
|state|RUNNING|
|state|FAILED|
|state|SUCCEEDED|
|state|UNEXECUTED|

<h2 id="tocS_Volume">Volume</h2>
<!-- backwards compatibility -->
<a id="schemavolume"></a>
<a id="schema_Volume"></a>
<a id="tocSvolume"></a>
<a id="tocsvolume"></a>

```json
{
  "deviceName": "string",
  "gcs": {
    "remotePath": "string"
  },
  "mountOptions": [
    "string"
  ],
  "mountPath": "string",
  "nfs": {
    "remotePath": "string",
    "server": "string"
  }
}
```

Volume describes a volume and parameters for it to be mounted to a VM.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceName|string|false|none|Device name of an attached disk volume, which should align with a device_name specified by job.allocation_policy.instances[0].policy.disks[i].device_name or defined by the given instance template in job.allocation_policy.instances[0].instance_template.|
|gcs|[GCS](#schemagcs)|false|none|A Google Cloud Storage (GCS) volume.|
|mountOptions|[string]|false|none|For Google Cloud Storage (GCS), mount options are the options supported by the gcsfuse tool (https://github.com/GoogleCloudPlatform/gcsfuse). For existing persistent disks, mount options provided by the mount command (https://man7.org/linux/man-pages/man8/mount.8.html) except writing are supported. This is due to restrictions of multi-writer mode (https://cloud.google.com/compute/docs/disks/sharing-disks-between-vms). For other attached disks and Network File System (NFS), mount options are these supported by the mount command (https://man7.org/linux/man-pages/man8/mount.8.html).|
|mountPath|string|false|none|The mount path for the volume, e.g. /mnt/disks/share.|
|nfs|[NFS](#schemanfs)|false|none|A Network File System (NFS) volume. For example, a Filestore file share.|
