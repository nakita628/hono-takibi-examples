<h1 id="cloud-life-sciences-api">Cloud Life Sciences API v2beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Cloud Life Sciences is a suite of services and tools for managing, processing, and transforming life sciences data.

Base URLs:

* <a href="https://lifesciences.googleapis.com/">https://lifesciences.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/life-sciences">External documentation</a>

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

<h1 id="cloud-life-sciences-api-projects">projects</h1>

## lifesciences.projects.locations.operations.get

<a id="opIdlifesciences.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.get`

<h3 id="lifesciencesprojectslocationsoperationsget-parameters">Parameters</h3>

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

<h3 id="lifesciencesprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## lifesciences.projects.locations.list

<a id="opIdlifesciences.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="lifesciencesprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="lifesciencesprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## lifesciences.projects.locations.operations.list

<a id="opIdlifesciences.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta/{name}/operations`

Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.list`

<h3 id="lifesciencesprojectslocationsoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation's parent resource.|
|filter|query|string|false|A string for filtering Operations. The following filter fields are supported: * createTime: The time this job was created * events: The set of event (names) that have occurred while running the pipeline. The : operator can be used to determine if a particular event has occurred. * error: If the pipeline is running, this value is NULL. Once the pipeline finishes, the value is the standard Google error code. * labels.key or labels."key with space" where key is a label key. * done: If the pipeline is running, this value is false. Once the pipeline finishes, the value is true.|
|pageSize|query|integer|false|The maximum number of results to return. The maximum value is 256.|
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

<h3 id="lifesciencesprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## lifesciences.projects.locations.operations.cancel

<a id="opIdlifesciences.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2beta/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.cancel`

> Body parameter

```json
{}
```

<h3 id="lifesciencesprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="lifesciencesprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## lifesciences.projects.locations.pipelines.run

<a id="opIdlifesciences.projects.locations.pipelines.run"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string/pipelines:run \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "pipeline": {
      "actions": [
        {
          "alwaysRun": true,
          "blockExternalNetwork": true,
          "commands": [
            "string"
          ],
          "containerName": "string",
          "credentials": {
            "cipherText": "string",
            "keyName": "string"
          },
          "disableImagePrefetch": true,
          "disableStandardErrorCapture": true,
          "enableFuse": true,
          "encryptedEnvironment": {
            "cipherText": "string",
            "keyName": "string"
          },
          "entrypoint": "string",
          "environment": {
            "property1": "string",
            "property2": "string"
          },
          "ignoreExitStatus": true,
          "imageUri": "string",
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "mounts": [
            {
              "disk": "string",
              "path": "string",
              "readOnly": true
            }
          ],
          "pidNamespace": "string",
          "portMappings": {
            "property1": 0,
            "property2": 0
          },
          "publishExposedPorts": true,
          "runInBackground": true,
          "timeout": "string"
        }
      ],
      "encryptedEnvironment": {
        "cipherText": "string",
        "keyName": "string"
      },
      "environment": {
        "property1": "string",
        "property2": "string"
      },
      "resources": {
        "regions": [
          "string"
        ],
        "virtualMachine": {
          "accelerators": [
            {
              "count": "string",
              "type": "string"
            }
          ],
          "bootDiskSizeGb": 0,
          "bootImage": "string",
          "cpuPlatform": "string",
          "disks": [
            {
              "name": "string",
              "sizeGb": 0,
              "sourceImage": "string",
              "type": "string"
            }
          ],
          "dockerCacheImages": [
            "string"
          ],
          "enableStackdriverMonitoring": true,
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "machineType": "string",
          "network": {
            "network": "string",
            "subnetwork": "string",
            "usePrivateAddress": true
          },
          "nvidiaDriverVersion": "string",
          "preemptible": true,
          "reservation": "string",
          "serviceAccount": {
            "email": "string",
            "scopes": [
              "string"
            ]
          },
          "volumes": [
            {
              "existingDisk": {
                "disk": "string"
              },
              "nfsMount": {
                "target": "string"
              },
              "persistentDisk": {
                "sizeGb": 0,
                "sourceImage": "string",
                "type": "string"
              },
              "volume": "string"
            }
          ]
        },
        "zones": [
          "string"
        ]
      },
      "timeout": "string"
    },
    "pubSubTopic": "string"
  }'
```

`POST /v2beta/{parent}/pipelines:run`

Runs a pipeline. The returned Operation's metadata field will contain a google.cloud.lifesciences.v2beta.Metadata object describing the status of the pipeline execution. The response field will contain a google.cloud.lifesciences.v2beta.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the *Life Sciences Service Agent* must have access to your project. This is done automatically when the Cloud Life Sciences API is first enabled, but if you delete this permission you must disable and re-enable the API to grant the Life Sciences Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `lifesciences.workflows.run`

> Body parameter

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "pipeline": {
    "actions": [
      {
        "alwaysRun": true,
        "blockExternalNetwork": true,
        "commands": [
          "string"
        ],
        "containerName": "string",
        "credentials": {
          "cipherText": "string",
          "keyName": "string"
        },
        "disableImagePrefetch": true,
        "disableStandardErrorCapture": true,
        "enableFuse": true,
        "encryptedEnvironment": {
          "cipherText": "string",
          "keyName": "string"
        },
        "entrypoint": "string",
        "environment": {
          "property1": "string",
          "property2": "string"
        },
        "ignoreExitStatus": true,
        "imageUri": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "mounts": [
          {
            "disk": "string",
            "path": "string",
            "readOnly": true
          }
        ],
        "pidNamespace": "string",
        "portMappings": {
          "property1": 0,
          "property2": 0
        },
        "publishExposedPorts": true,
        "runInBackground": true,
        "timeout": "string"
      }
    ],
    "encryptedEnvironment": {
      "cipherText": "string",
      "keyName": "string"
    },
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "resources": {
      "regions": [
        "string"
      ],
      "virtualMachine": {
        "accelerators": [
          {
            "count": "string",
            "type": "string"
          }
        ],
        "bootDiskSizeGb": 0,
        "bootImage": "string",
        "cpuPlatform": "string",
        "disks": [
          {
            "name": "string",
            "sizeGb": 0,
            "sourceImage": "string",
            "type": "string"
          }
        ],
        "dockerCacheImages": [
          "string"
        ],
        "enableStackdriverMonitoring": true,
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "machineType": "string",
        "network": {
          "network": "string",
          "subnetwork": "string",
          "usePrivateAddress": true
        },
        "nvidiaDriverVersion": "string",
        "preemptible": true,
        "reservation": "string",
        "serviceAccount": {
          "email": "string",
          "scopes": [
            "string"
          ]
        },
        "volumes": [
          {
            "existingDisk": {
              "disk": "string"
            },
            "nfsMount": {
              "target": "string"
            },
            "persistentDisk": {
              "sizeGb": 0,
              "sourceImage": "string",
              "type": "string"
            },
            "volume": "string"
          }
        ]
      },
      "zones": [
        "string"
      ]
    },
    "timeout": "string"
  },
  "pubSubTopic": "string"
}
```

<h3 id="lifesciencesprojectslocationspipelinesrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The project and location that this request should be executed against.|
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
|body|body|[RunPipelineRequest](#schemarunpipelinerequest)|false|none|
|» labels|body|object|false|User-defined labels to associate with the returned operation. These labels are not propagated to any Google Cloud Platform resources used by the operation, and can be modified at any time. To associate labels with resources created while executing the operation, see the appropriate resource message (for example, `VirtualMachine`).|
|» » **additionalProperties**|body|string|false|none|
|» pipeline|body|[Pipeline](#schemapipeline)|false|Required. The description of the pipeline to run.|
|» pubSubTopic|body|string|false|The name of an existing Pub/Sub topic. The server will publish messages to this topic whenever the status of the operation changes. The Life Sciences Service Agent account must have publisher permissions to the specified topic or notifications will not be sent.|

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

<h3 id="lifesciencesprojectslocationspipelinesrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

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
  "type": "string"
}
```

Carries information about an accelerator that can be attached to a VM.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|string(int64)|false|none|How many accelerators of this type to attach.|
|type|string|false|none|The accelerator type string (for example, "nvidia-tesla-k80"). Only NVIDIA GPU accelerators are currently supported. If an NVIDIA GPU is attached, the required runtime libraries will be made available to all containers under `/usr/local/nvidia`. The driver version to install must be specified using the NVIDIA driver version parameter on the virtual machine specification. Note that attaching a GPU increases the worker VM startup time by a few minutes.|

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "alwaysRun": true,
  "blockExternalNetwork": true,
  "commands": [
    "string"
  ],
  "containerName": "string",
  "credentials": {
    "cipherText": "string",
    "keyName": "string"
  },
  "disableImagePrefetch": true,
  "disableStandardErrorCapture": true,
  "enableFuse": true,
  "encryptedEnvironment": {
    "cipherText": "string",
    "keyName": "string"
  },
  "entrypoint": "string",
  "environment": {
    "property1": "string",
    "property2": "string"
  },
  "ignoreExitStatus": true,
  "imageUri": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mounts": [
    {
      "disk": "string",
      "path": "string",
      "readOnly": true
    }
  ],
  "pidNamespace": "string",
  "portMappings": {
    "property1": 0,
    "property2": 0
  },
  "publishExposedPorts": true,
  "runInBackground": true,
  "timeout": "string"
}
```

Specifies a single action that runs a Docker container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alwaysRun|boolean|false|none|By default, after an action fails, no further actions are run. This flag indicates that this action must be run even if the pipeline has already failed. This is useful for actions that copy output files off of the VM or for debugging. Note that no actions will be run if image prefetching fails.|
|blockExternalNetwork|boolean|false|none|Prevents the container from accessing the external network.|
|commands|[string]|false|none|If specified, overrides the `CMD` specified in the container. If the container also has an `ENTRYPOINT` the values are used as entrypoint arguments. Otherwise, they are used as a command and arguments to run inside the container.|
|containerName|string|false|none|An optional name for the container. The container hostname will be set to this name, making it useful for inter-container communication. The name must contain only upper and lowercase alphanumeric characters and hyphens and cannot start with a hyphen.|
|credentials|[Secret](#schemasecret)|false|none|If the specified image is hosted on a private registry other than Google Container Registry, the credentials required to pull the image must be specified here as an encrypted secret. The secret must decrypt to a JSON-encoded dictionary containing both `username` and `password` keys.|
|disableImagePrefetch|boolean|false|none|All container images are typically downloaded before any actions are executed. This helps prevent typos in URIs or issues like lack of disk space from wasting large amounts of compute resources. If set, this flag prevents the worker from downloading the image until just before the action is executed.|
|disableStandardErrorCapture|boolean|false|none|A small portion of the container's standard error stream is typically captured and returned inside the `ContainerStoppedEvent`. Setting this flag disables this functionality.|
|enableFuse|boolean|false|none|Enable access to the FUSE device for this action. Filesystems can then be mounted into disks shared with other actions. The other actions do not need the `enable_fuse` flag to access the mounted filesystem. This has the effect of causing the container to be executed with `CAP_SYS_ADMIN` and exposes `/dev/fuse` to the container, so use it only for containers you trust.|
|encryptedEnvironment|[Secret](#schemasecret)|false|none|The encrypted environment to pass into the container. This environment is merged with values specified in the google.cloud.lifesciences.v2beta.Pipeline message, overwriting any duplicate values. The secret must decrypt to a JSON-encoded dictionary where key-value pairs serve as environment variable names and their values. The decoded environment variables can overwrite the values specified by the `environment` field.|
|entrypoint|string|false|none|If specified, overrides the `ENTRYPOINT` specified in the container.|
|environment|object|false|none|The environment to pass into the container. This environment is merged with values specified in the google.cloud.lifesciences.v2beta.Pipeline message, overwriting any duplicate values. In addition to the values passed here, a few other values are automatically injected into the environment. These cannot be hidden or overwritten. `GOOGLE_PIPELINE_FAILED` will be set to "1" if the pipeline failed because an action has exited with a non-zero status (and did not have the `IGNORE_EXIT_STATUS` flag set). This can be used to determine if additional debug or logging actions should execute. `GOOGLE_LAST_EXIT_STATUS` will be set to the exit status of the last non-background action that executed. This can be used by workflow engine authors to determine whether an individual action has succeeded or failed.|
|ignoreExitStatus|boolean|false|none|Normally, a non-zero exit status causes the pipeline to fail. This flag allows execution of other actions to continue instead.|
|imageUri|string|false|none|Required. The URI to pull the container image from. Note that all images referenced by actions in the pipeline are pulled before the first action runs. If multiple actions reference the same image, it is only pulled once, ensuring that the same image is used for all actions in a single pipeline. The image URI can be either a complete host and image specification (e.g., quay.io/biocontainers/samtools), a library and image name (e.g., google/cloud-sdk) or a bare image name ('bash') to pull from the default library. No schema is required in any of these cases. If the specified image is not public, the service account specified for the Virtual Machine must have access to pull the images from GCR, or appropriate credentials must be specified in the google.cloud.lifesciences.v2beta.Action.credentials field.|
|labels|object|false|none|Labels to associate with the action. This field is provided to assist workflow engine authors in identifying actions (for example, to indicate what sort of action they perform, such as localization or debugging). They are returned in the operation metadata, but are otherwise ignored.|
|mounts|[[Mount](#schemamount)]|false|none|A list of mounts to make available to the action. In addition to the values specified here, every action has a special virtual disk mounted under `/google` that contains log files and other operational components. - /google/logs All logs written during the pipeline execution. - /google/logs/output The combined standard output and standard error of all actions run as part of the pipeline execution. - /google/logs/action/*/stdout The complete contents of each individual action's standard output. - /google/logs/action/*/stderr The complete contents of each individual action's standard error output. |
|pidNamespace|string|false|none|An optional identifier for a PID namespace to run the action inside. Multiple actions should use the same string to share a namespace. If unspecified, a separate isolated namespace is used.|
|portMappings|object|false|none|A map of containers to host port mappings for this container. If the container already specifies exposed ports, use the `PUBLISH_EXPOSED_PORTS` flag instead. The host port number must be less than 65536. If it is zero, an unused random port is assigned. To determine the resulting port number, consult the `ContainerStartedEvent` in the operation metadata.|
|publishExposedPorts|boolean|false|none|Exposes all ports specified by `EXPOSE` statements in the container. To discover the host side port numbers, consult the `ACTION_STARTED` event in the operation metadata.|
|runInBackground|boolean|false|none|This flag allows an action to continue running in the background while executing subsequent actions. This is useful to provide services to other actions (or to provide debugging support tools like SSH servers).|
|timeout|string(google-duration)|false|none|The maximum amount of time to give the action to complete. If the action fails to complete before the timeout, it will be terminated and the exit status will be non-zero. The pipeline will continue or terminate based on the rules defined by the `ALWAYS_RUN` and `IGNORE_EXIT_STATUS` flags.|

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

<h2 id="tocS_ContainerKilledEvent">ContainerKilledEvent</h2>
<!-- backwards compatibility -->
<a id="schemacontainerkilledevent"></a>
<a id="schema_ContainerKilledEvent"></a>
<a id="tocScontainerkilledevent"></a>
<a id="tocscontainerkilledevent"></a>

```json
{
  "actionId": 0
}
```

An event generated when a container is forcibly terminated by the worker. Currently, this only occurs when the container outlives the timeout specified by the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionId|integer(int32)|false|none|The numeric ID of the action that started the container.|

<h2 id="tocS_ContainerStartedEvent">ContainerStartedEvent</h2>
<!-- backwards compatibility -->
<a id="schemacontainerstartedevent"></a>
<a id="schema_ContainerStartedEvent"></a>
<a id="tocScontainerstartedevent"></a>
<a id="tocscontainerstartedevent"></a>

```json
{
  "actionId": 0,
  "ipAddress": "string",
  "portMappings": {
    "property1": 0,
    "property2": 0
  }
}
```

An event generated when a container starts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionId|integer(int32)|false|none|The numeric ID of the action that started this container.|
|ipAddress|string|false|none|The public IP address that can be used to connect to the container. This field is only populated when at least one port mapping is present. If the instance was created with a private address, this field will be empty even if port mappings exist.|
|portMappings|object|false|none|The container-to-host port mappings installed for this container. This set will contain any ports exposed using the `PUBLISH_EXPOSED_PORTS` flag as well as any specified in the `Action` definition.|

<h2 id="tocS_ContainerStoppedEvent">ContainerStoppedEvent</h2>
<!-- backwards compatibility -->
<a id="schemacontainerstoppedevent"></a>
<a id="schema_ContainerStoppedEvent"></a>
<a id="tocScontainerstoppedevent"></a>
<a id="tocscontainerstoppedevent"></a>

```json
{
  "actionId": 0,
  "exitStatus": 0,
  "stderr": "string"
}
```

An event generated when a container exits.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionId|integer(int32)|false|none|The numeric ID of the action that started this container.|
|exitStatus|integer(int32)|false|none|The exit status of the container.|
|stderr|string|false|none|The tail end of any content written to standard error by the container. If the content emits large amounts of debugging noise or contains sensitive information, you can prevent the content from being printed by setting the `DISABLE_STANDARD_ERROR_CAPTURE` flag. Note that only a small amount of the end of the stream is captured here. The entire stream is stored in the `/google/logs` directory mounted into each action, and can be copied off the machine as described elsewhere.|

<h2 id="tocS_DelayedEvent">DelayedEvent</h2>
<!-- backwards compatibility -->
<a id="schemadelayedevent"></a>
<a id="schema_DelayedEvent"></a>
<a id="tocSdelayedevent"></a>
<a id="tocsdelayedevent"></a>

```json
{
  "cause": "string",
  "metrics": [
    "string"
  ]
}
```

An event generated whenever a resource limitation or transient error delays execution of a pipeline that was otherwise ready to run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cause|string|false|none|A textual description of the cause of the delay. The string can change without notice because it is often generated by another service (such as Compute Engine).|
|metrics|[string]|false|none|If the delay was caused by a resource shortage, this field lists the Compute Engine metrics that are preventing this operation from running (for example, `CPUS` or `INSTANCES`). If the particular metric is not known, a single `UNKNOWN` metric will be present.|

<h2 id="tocS_Disk">Disk</h2>
<!-- backwards compatibility -->
<a id="schemadisk"></a>
<a id="schema_Disk"></a>
<a id="tocSdisk"></a>
<a id="tocsdisk"></a>

```json
{
  "name": "string",
  "sizeGb": 0,
  "sourceImage": "string",
  "type": "string"
}
```

Carries information about a disk that can be attached to a VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations. Specify either `Volume` or `Disk`, but not both.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A user-supplied name for the disk. Used when mounting the disk into actions. The name must contain only upper and lowercase alphanumeric characters and hyphens and cannot start with a hyphen.|
|sizeGb|integer(int32)|false|none|The size, in GB, of the disk to attach. If the size is not specified, a default is chosen to ensure reasonable I/O performance. If the disk type is specified as `local-ssd`, multiple local drives are automatically combined to provide the requested size. Note, however, that each physical SSD is 375GB in size, and no more than 8 drives can be attached to a single instance.|
|sourceImage|string|false|none|An optional image to put on the disk before attaching it to the VM.|
|type|string|false|none|The Compute Engine disk type. If unspecified, `pd-standard` is used.|

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

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "containerKilled": {
    "actionId": 0
  },
  "containerStarted": {
    "actionId": 0,
    "ipAddress": "string",
    "portMappings": {
      "property1": 0,
      "property2": 0
    }
  },
  "containerStopped": {
    "actionId": 0,
    "exitStatus": 0,
    "stderr": "string"
  },
  "delayed": {
    "cause": "string",
    "metrics": [
      "string"
    ]
  },
  "description": "string",
  "failed": {
    "cause": "string",
    "code": "OK"
  },
  "pullStarted": {
    "imageUri": "string"
  },
  "pullStopped": {
    "imageUri": "string"
  },
  "timestamp": "string",
  "unexpectedExitStatus": {
    "actionId": 0,
    "exitStatus": 0
  },
  "workerAssigned": {
    "instance": "string",
    "machineType": "string",
    "zone": "string"
  },
  "workerReleased": {
    "instance": "string",
    "zone": "string"
  }
}
```

Carries information about events that occur during pipeline execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerKilled|[ContainerKilledEvent](#schemacontainerkilledevent)|false|none|See google.cloud.lifesciences.v2beta.ContainerKilledEvent.|
|containerStarted|[ContainerStartedEvent](#schemacontainerstartedevent)|false|none|See google.cloud.lifesciences.v2beta.ContainerStartedEvent.|
|containerStopped|[ContainerStoppedEvent](#schemacontainerstoppedevent)|false|none|See google.cloud.lifesciences.v2beta.ContainerStoppedEvent.|
|delayed|[DelayedEvent](#schemadelayedevent)|false|none|See google.cloud.lifesciences.v2beta.DelayedEvent.|
|description|string|false|none|A human-readable description of the event. Note that these strings can change at any time without notice. Any application logic must use the information in the `details` field.|
|failed|[FailedEvent](#schemafailedevent)|false|none|See google.cloud.lifesciences.v2beta.FailedEvent.|
|pullStarted|[PullStartedEvent](#schemapullstartedevent)|false|none|See google.cloud.lifesciences.v2beta.PullStartedEvent.|
|pullStopped|[PullStoppedEvent](#schemapullstoppedevent)|false|none|See google.cloud.lifesciences.v2beta.PullStoppedEvent.|
|timestamp|string(google-datetime)|false|none|The time at which the event occurred.|
|unexpectedExitStatus|[UnexpectedExitStatusEvent](#schemaunexpectedexitstatusevent)|false|none|See google.cloud.lifesciences.v2beta.UnexpectedExitStatusEvent.|
|workerAssigned|[WorkerAssignedEvent](#schemaworkerassignedevent)|false|none|See google.cloud.lifesciences.v2beta.WorkerAssignedEvent.|
|workerReleased|[WorkerReleasedEvent](#schemaworkerreleasedevent)|false|none|See google.cloud.lifesciences.v2beta.WorkerReleasedEvent.|

<h2 id="tocS_ExistingDisk">ExistingDisk</h2>
<!-- backwards compatibility -->
<a id="schemaexistingdisk"></a>
<a id="schema_ExistingDisk"></a>
<a id="tocSexistingdisk"></a>
<a id="tocsexistingdisk"></a>

```json
{
  "disk": "string"
}
```

Configuration for an existing disk to be attached to the VM.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disk|string|false|none|If `disk` contains slashes, the Cloud Life Sciences API assumes that it is a complete URL for the disk. If `disk` does not contain slashes, the Cloud Life Sciences API assumes that the disk is a zonal disk and a URL will be generated of the form `zones//disks/`, where `` is the zone in which the instance is allocated. The disk must be ext4 formatted. If all `Mount` references to this disk have the `read_only` flag set to true, the disk will be attached in `read-only` mode and can be shared with other instances. Otherwise, the disk will be available for writing but cannot be shared.|

<h2 id="tocS_FailedEvent">FailedEvent</h2>
<!-- backwards compatibility -->
<a id="schemafailedevent"></a>
<a id="schema_FailedEvent"></a>
<a id="tocSfailedevent"></a>
<a id="tocsfailedevent"></a>

```json
{
  "cause": "string",
  "code": "OK"
}
```

An event generated when the execution of a pipeline has failed. Note that other events can continue to occur after this event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cause|string|false|none|The human-readable description of the cause of the failure.|
|code|string|false|none|The Google standard error code that best describes this failure.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|OK|
|code|CANCELLED|
|code|UNKNOWN|
|code|INVALID_ARGUMENT|
|code|DEADLINE_EXCEEDED|
|code|NOT_FOUND|
|code|ALREADY_EXISTS|
|code|PERMISSION_DENIED|
|code|UNAUTHENTICATED|
|code|RESOURCE_EXHAUSTED|
|code|FAILED_PRECONDITION|
|code|ABORTED|
|code|OUT_OF_RANGE|
|code|UNIMPLEMENTED|
|code|INTERNAL|
|code|UNAVAILABLE|
|code|DATA_LOSS|

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
  "createTime": "string",
  "endTime": "string",
  "events": [
    {
      "containerKilled": {
        "actionId": 0
      },
      "containerStarted": {
        "actionId": 0,
        "ipAddress": "string",
        "portMappings": {
          "property1": 0,
          "property2": 0
        }
      },
      "containerStopped": {
        "actionId": 0,
        "exitStatus": 0,
        "stderr": "string"
      },
      "delayed": {
        "cause": "string",
        "metrics": [
          "string"
        ]
      },
      "description": "string",
      "failed": {
        "cause": "string",
        "code": "OK"
      },
      "pullStarted": {
        "imageUri": "string"
      },
      "pullStopped": {
        "imageUri": "string"
      },
      "timestamp": "string",
      "unexpectedExitStatus": {
        "actionId": 0,
        "exitStatus": 0
      },
      "workerAssigned": {
        "instance": "string",
        "machineType": "string",
        "zone": "string"
      },
      "workerReleased": {
        "instance": "string",
        "zone": "string"
      }
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "pipeline": {
    "actions": [
      {
        "alwaysRun": true,
        "blockExternalNetwork": true,
        "commands": [
          "string"
        ],
        "containerName": "string",
        "credentials": {
          "cipherText": "string",
          "keyName": "string"
        },
        "disableImagePrefetch": true,
        "disableStandardErrorCapture": true,
        "enableFuse": true,
        "encryptedEnvironment": {
          "cipherText": "string",
          "keyName": "string"
        },
        "entrypoint": "string",
        "environment": {
          "property1": "string",
          "property2": "string"
        },
        "ignoreExitStatus": true,
        "imageUri": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "mounts": [
          {
            "disk": "string",
            "path": "string",
            "readOnly": true
          }
        ],
        "pidNamespace": "string",
        "portMappings": {
          "property1": 0,
          "property2": 0
        },
        "publishExposedPorts": true,
        "runInBackground": true,
        "timeout": "string"
      }
    ],
    "encryptedEnvironment": {
      "cipherText": "string",
      "keyName": "string"
    },
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "resources": {
      "regions": [
        "string"
      ],
      "virtualMachine": {
        "accelerators": [
          {
            "count": "string",
            "type": "string"
          }
        ],
        "bootDiskSizeGb": 0,
        "bootImage": "string",
        "cpuPlatform": "string",
        "disks": [
          {
            "name": "string",
            "sizeGb": 0,
            "sourceImage": "string",
            "type": "string"
          }
        ],
        "dockerCacheImages": [
          "string"
        ],
        "enableStackdriverMonitoring": true,
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "machineType": "string",
        "network": {
          "network": "string",
          "subnetwork": "string",
          "usePrivateAddress": true
        },
        "nvidiaDriverVersion": "string",
        "preemptible": true,
        "reservation": "string",
        "serviceAccount": {
          "email": "string",
          "scopes": [
            "string"
          ]
        },
        "volumes": [
          {
            "existingDisk": {
              "disk": "string"
            },
            "nfsMount": {
              "target": "string"
            },
            "persistentDisk": {
              "sizeGb": 0,
              "sourceImage": "string",
              "type": "string"
            },
            "volume": "string"
          }
        ]
      },
      "zones": [
        "string"
      ]
    },
    "timeout": "string"
  },
  "pubSubTopic": "string",
  "startTime": "string"
}
```

Carries information about the pipeline execution that is returned in the long running operation's metadata field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The time at which the operation was created by the API.|
|endTime|string(google-datetime)|false|none|The time at which execution was completed and resources were cleaned up.|
|events|[[Event](#schemaevent)]|false|none|The list of events that have happened so far during the execution of this operation.|
|labels|object|false|none|The user-defined labels associated with this operation.|
|pipeline|[Pipeline](#schemapipeline)|false|none|The pipeline this operation represents.|
|pubSubTopic|string|false|none|The name of the Cloud Pub/Sub topic where notifications of operation status changes are sent.|
|startTime|string(google-datetime)|false|none|The first time at which resources were allocated to execute the pipeline.|

<h2 id="tocS_Mount">Mount</h2>
<!-- backwards compatibility -->
<a id="schemamount"></a>
<a id="schema_Mount"></a>
<a id="tocSmount"></a>
<a id="tocsmount"></a>

```json
{
  "disk": "string",
  "path": "string",
  "readOnly": true
}
```

Carries information about a particular disk mount inside a container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disk|string|false|none|The name of the disk to mount, as specified in the resources section.|
|path|string|false|none|The path to mount the disk inside the container.|
|readOnly|boolean|false|none|If true, the disk is mounted read-only inside the container.|

<h2 id="tocS_NFSMount">NFSMount</h2>
<!-- backwards compatibility -->
<a id="schemanfsmount"></a>
<a id="schema_NFSMount"></a>
<a id="tocSnfsmount"></a>
<a id="tocsnfsmount"></a>

```json
{
  "target": "string"
}
```

Configuration for an `NFSMount` to be attached to the VM.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target|string|false|none|A target NFS mount. The target must be specified as `address:/mount".|

<h2 id="tocS_Network">Network</h2>
<!-- backwards compatibility -->
<a id="schemanetwork"></a>
<a id="schema_Network"></a>
<a id="tocSnetwork"></a>
<a id="tocsnetwork"></a>

```json
{
  "network": "string",
  "subnetwork": "string",
  "usePrivateAddress": true
}
```

VM networking options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|network|string|false|none|The network name to attach the VM's network interface to. The value will be prefixed with `global/networks/` unless it contains a `/`, in which case it is assumed to be a fully specified network resource URL. If unspecified, the global default network is used.|
|subnetwork|string|false|none|If the specified network is configured for custom subnet creation, the name of the subnetwork to attach the instance to must be specified here. The value is prefixed with `regions/*/subnetworks/` unless it contains a `/`, in which case it is assumed to be a fully specified subnetwork resource URL. If the `*` character appears in the value, it is replaced with the region that the virtual machine has been allocated in.|
|usePrivateAddress|boolean|false|none|If set to true, do not attach a public IP address to the VM. Note that without a public IP address, additional configuration is required to allow the VM to access Google services. See https://cloud.google.com/vpc/docs/configure-private-google-access for more information.|

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
|metadata|object|false|none|An Metadata object. This will always be returned with the Operation.|
|name|string|false|none|The server-assigned name for the operation. This may be passed to the other operation methods to retrieve information about the operation's status.|
|response|object|false|none|An Empty object.|

<h2 id="tocS_PersistentDisk">PersistentDisk</h2>
<!-- backwards compatibility -->
<a id="schemapersistentdisk"></a>
<a id="schema_PersistentDisk"></a>
<a id="tocSpersistentdisk"></a>
<a id="tocspersistentdisk"></a>

```json
{
  "sizeGb": 0,
  "sourceImage": "string",
  "type": "string"
}
```

Configuration for a persistent disk to be attached to the VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sizeGb|integer(int32)|false|none|The size, in GB, of the disk to attach. If the size is not specified, a default is chosen to ensure reasonable I/O performance. If the disk type is specified as `local-ssd`, multiple local drives are automatically combined to provide the requested size. Note, however, that each physical SSD is 375GB in size, and no more than 8 drives can be attached to a single instance.|
|sourceImage|string|false|none|An image to put on the disk before attaching it to the VM.|
|type|string|false|none|The Compute Engine disk type. If unspecified, `pd-standard` is used.|

<h2 id="tocS_Pipeline">Pipeline</h2>
<!-- backwards compatibility -->
<a id="schemapipeline"></a>
<a id="schema_Pipeline"></a>
<a id="tocSpipeline"></a>
<a id="tocspipeline"></a>

```json
{
  "actions": [
    {
      "alwaysRun": true,
      "blockExternalNetwork": true,
      "commands": [
        "string"
      ],
      "containerName": "string",
      "credentials": {
        "cipherText": "string",
        "keyName": "string"
      },
      "disableImagePrefetch": true,
      "disableStandardErrorCapture": true,
      "enableFuse": true,
      "encryptedEnvironment": {
        "cipherText": "string",
        "keyName": "string"
      },
      "entrypoint": "string",
      "environment": {
        "property1": "string",
        "property2": "string"
      },
      "ignoreExitStatus": true,
      "imageUri": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mounts": [
        {
          "disk": "string",
          "path": "string",
          "readOnly": true
        }
      ],
      "pidNamespace": "string",
      "portMappings": {
        "property1": 0,
        "property2": 0
      },
      "publishExposedPorts": true,
      "runInBackground": true,
      "timeout": "string"
    }
  ],
  "encryptedEnvironment": {
    "cipherText": "string",
    "keyName": "string"
  },
  "environment": {
    "property1": "string",
    "property2": "string"
  },
  "resources": {
    "regions": [
      "string"
    ],
    "virtualMachine": {
      "accelerators": [
        {
          "count": "string",
          "type": "string"
        }
      ],
      "bootDiskSizeGb": 0,
      "bootImage": "string",
      "cpuPlatform": "string",
      "disks": [
        {
          "name": "string",
          "sizeGb": 0,
          "sourceImage": "string",
          "type": "string"
        }
      ],
      "dockerCacheImages": [
        "string"
      ],
      "enableStackdriverMonitoring": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "machineType": "string",
      "network": {
        "network": "string",
        "subnetwork": "string",
        "usePrivateAddress": true
      },
      "nvidiaDriverVersion": "string",
      "preemptible": true,
      "reservation": "string",
      "serviceAccount": {
        "email": "string",
        "scopes": [
          "string"
        ]
      },
      "volumes": [
        {
          "existingDisk": {
            "disk": "string"
          },
          "nfsMount": {
            "target": "string"
          },
          "persistentDisk": {
            "sizeGb": 0,
            "sourceImage": "string",
            "type": "string"
          },
          "volume": "string"
        }
      ]
    },
    "zones": [
      "string"
    ]
  },
  "timeout": "string"
}
```

Specifies a series of actions to execute, expressed as Docker containers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[Action](#schemaaction)]|false|none|The list of actions to execute, in the order they are specified.|
|encryptedEnvironment|[Secret](#schemasecret)|false|none|The encrypted environment to pass into every action. Each action can also specify its own encrypted environment. The secret must decrypt to a JSON-encoded dictionary where key-value pairs serve as environment variable names and their values. The decoded environment variables can overwrite the values specified by the `environment` field.|
|environment|object|false|none|The environment to pass into every action. Each action can also specify additional environment variables but cannot delete an entry from this map (though they can overwrite it with a different value).|
|resources|[Resources](#schemaresources)|false|none|The resources required for execution.|
|timeout|string(google-duration)|false|none|The maximum amount of time to give the pipeline to complete. This includes the time spent waiting for a worker to be allocated. If the pipeline fails to complete before the timeout, it will be cancelled and the error code will be set to DEADLINE_EXCEEDED. If unspecified, it will default to 7 days.|

<h2 id="tocS_PullStartedEvent">PullStartedEvent</h2>
<!-- backwards compatibility -->
<a id="schemapullstartedevent"></a>
<a id="schema_PullStartedEvent"></a>
<a id="tocSpullstartedevent"></a>
<a id="tocspullstartedevent"></a>

```json
{
  "imageUri": "string"
}
```

An event generated when the worker starts pulling an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageUri|string|false|none|The URI of the image that was pulled.|

<h2 id="tocS_PullStoppedEvent">PullStoppedEvent</h2>
<!-- backwards compatibility -->
<a id="schemapullstoppedevent"></a>
<a id="schema_PullStoppedEvent"></a>
<a id="tocSpullstoppedevent"></a>
<a id="tocspullstoppedevent"></a>

```json
{
  "imageUri": "string"
}
```

An event generated when the worker stops pulling an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageUri|string|false|none|The URI of the image that was pulled.|

<h2 id="tocS_Resources">Resources</h2>
<!-- backwards compatibility -->
<a id="schemaresources"></a>
<a id="schema_Resources"></a>
<a id="tocSresources"></a>
<a id="tocsresources"></a>

```json
{
  "regions": [
    "string"
  ],
  "virtualMachine": {
    "accelerators": [
      {
        "count": "string",
        "type": "string"
      }
    ],
    "bootDiskSizeGb": 0,
    "bootImage": "string",
    "cpuPlatform": "string",
    "disks": [
      {
        "name": "string",
        "sizeGb": 0,
        "sourceImage": "string",
        "type": "string"
      }
    ],
    "dockerCacheImages": [
      "string"
    ],
    "enableStackdriverMonitoring": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "machineType": "string",
    "network": {
      "network": "string",
      "subnetwork": "string",
      "usePrivateAddress": true
    },
    "nvidiaDriverVersion": "string",
    "preemptible": true,
    "reservation": "string",
    "serviceAccount": {
      "email": "string",
      "scopes": [
        "string"
      ]
    },
    "volumes": [
      {
        "existingDisk": {
          "disk": "string"
        },
        "nfsMount": {
          "target": "string"
        },
        "persistentDisk": {
          "sizeGb": 0,
          "sourceImage": "string",
          "type": "string"
        },
        "volume": "string"
      }
    ]
  },
  "zones": [
    "string"
  ]
}
```

The system resources for the pipeline run. At least one zone or region must be specified or the pipeline run will fail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regions|[string]|false|none|The list of regions allowed for VM allocation. If set, the `zones` field must not be set.|
|virtualMachine|[VirtualMachine](#schemavirtualmachine)|false|none|The virtual machine specification.|
|zones|[string]|false|none|The list of zones allowed for VM allocation. If set, the `regions` field must not be set.|

<h2 id="tocS_RunPipelineRequest">RunPipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemarunpipelinerequest"></a>
<a id="schema_RunPipelineRequest"></a>
<a id="tocSrunpipelinerequest"></a>
<a id="tocsrunpipelinerequest"></a>

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "pipeline": {
    "actions": [
      {
        "alwaysRun": true,
        "blockExternalNetwork": true,
        "commands": [
          "string"
        ],
        "containerName": "string",
        "credentials": {
          "cipherText": "string",
          "keyName": "string"
        },
        "disableImagePrefetch": true,
        "disableStandardErrorCapture": true,
        "enableFuse": true,
        "encryptedEnvironment": {
          "cipherText": "string",
          "keyName": "string"
        },
        "entrypoint": "string",
        "environment": {
          "property1": "string",
          "property2": "string"
        },
        "ignoreExitStatus": true,
        "imageUri": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "mounts": [
          {
            "disk": "string",
            "path": "string",
            "readOnly": true
          }
        ],
        "pidNamespace": "string",
        "portMappings": {
          "property1": 0,
          "property2": 0
        },
        "publishExposedPorts": true,
        "runInBackground": true,
        "timeout": "string"
      }
    ],
    "encryptedEnvironment": {
      "cipherText": "string",
      "keyName": "string"
    },
    "environment": {
      "property1": "string",
      "property2": "string"
    },
    "resources": {
      "regions": [
        "string"
      ],
      "virtualMachine": {
        "accelerators": [
          {
            "count": "string",
            "type": "string"
          }
        ],
        "bootDiskSizeGb": 0,
        "bootImage": "string",
        "cpuPlatform": "string",
        "disks": [
          {
            "name": "string",
            "sizeGb": 0,
            "sourceImage": "string",
            "type": "string"
          }
        ],
        "dockerCacheImages": [
          "string"
        ],
        "enableStackdriverMonitoring": true,
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "machineType": "string",
        "network": {
          "network": "string",
          "subnetwork": "string",
          "usePrivateAddress": true
        },
        "nvidiaDriverVersion": "string",
        "preemptible": true,
        "reservation": "string",
        "serviceAccount": {
          "email": "string",
          "scopes": [
            "string"
          ]
        },
        "volumes": [
          {
            "existingDisk": {
              "disk": "string"
            },
            "nfsMount": {
              "target": "string"
            },
            "persistentDisk": {
              "sizeGb": 0,
              "sourceImage": "string",
              "type": "string"
            },
            "volume": "string"
          }
        ]
      },
      "zones": [
        "string"
      ]
    },
    "timeout": "string"
  },
  "pubSubTopic": "string"
}
```

The arguments to the `RunPipeline` method. The requesting user must have the `iam.serviceAccounts.actAs` permission for the Cloud Life Sciences service account or the request will fail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|User-defined labels to associate with the returned operation. These labels are not propagated to any Google Cloud Platform resources used by the operation, and can be modified at any time. To associate labels with resources created while executing the operation, see the appropriate resource message (for example, `VirtualMachine`).|
|pipeline|[Pipeline](#schemapipeline)|false|none|Required. The description of the pipeline to run.|
|pubSubTopic|string|false|none|The name of an existing Pub/Sub topic. The server will publish messages to this topic whenever the status of the operation changes. The Life Sciences Service Agent account must have publisher permissions to the specified topic or notifications will not be sent.|

<h2 id="tocS_RunPipelineResponse">RunPipelineResponse</h2>
<!-- backwards compatibility -->
<a id="schemarunpipelineresponse"></a>
<a id="schema_RunPipelineResponse"></a>
<a id="tocSrunpipelineresponse"></a>
<a id="tocsrunpipelineresponse"></a>

```json
{}
```

The response to the RunPipeline method, returned in the operation's result field on success.

<h2 id="tocS_Secret">Secret</h2>
<!-- backwards compatibility -->
<a id="schemasecret"></a>
<a id="schema_Secret"></a>
<a id="tocSsecret"></a>
<a id="tocssecret"></a>

```json
{
  "cipherText": "string",
  "keyName": "string"
}
```

Holds encrypted information that is only decrypted and stored in RAM by the worker VM when running the pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cipherText|string|false|none|The value of the cipherText response from the `encrypt` method. This field is intentionally unaudited.|
|keyName|string|false|none|The name of the Cloud KMS key that will be used to decrypt the secret value. The VM service account must have the required permissions and authentication scopes to invoke the `decrypt` method on the specified key.|

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
|email|string|false|none|Email address of the service account. If not specified, the default Compute Engine service account for the project will be used.|
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

<h2 id="tocS_UnexpectedExitStatusEvent">UnexpectedExitStatusEvent</h2>
<!-- backwards compatibility -->
<a id="schemaunexpectedexitstatusevent"></a>
<a id="schema_UnexpectedExitStatusEvent"></a>
<a id="tocSunexpectedexitstatusevent"></a>
<a id="tocsunexpectedexitstatusevent"></a>

```json
{
  "actionId": 0,
  "exitStatus": 0
}
```

An event generated when the execution of a container results in a non-zero exit status that was not otherwise ignored. Execution will continue, but only actions that are flagged as `ALWAYS_RUN` will be executed. Other actions will be skipped.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionId|integer(int32)|false|none|The numeric ID of the action that started the container.|
|exitStatus|integer(int32)|false|none|The exit status of the container.|

<h2 id="tocS_VirtualMachine">VirtualMachine</h2>
<!-- backwards compatibility -->
<a id="schemavirtualmachine"></a>
<a id="schema_VirtualMachine"></a>
<a id="tocSvirtualmachine"></a>
<a id="tocsvirtualmachine"></a>

```json
{
  "accelerators": [
    {
      "count": "string",
      "type": "string"
    }
  ],
  "bootDiskSizeGb": 0,
  "bootImage": "string",
  "cpuPlatform": "string",
  "disks": [
    {
      "name": "string",
      "sizeGb": 0,
      "sourceImage": "string",
      "type": "string"
    }
  ],
  "dockerCacheImages": [
    "string"
  ],
  "enableStackdriverMonitoring": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "machineType": "string",
  "network": {
    "network": "string",
    "subnetwork": "string",
    "usePrivateAddress": true
  },
  "nvidiaDriverVersion": "string",
  "preemptible": true,
  "reservation": "string",
  "serviceAccount": {
    "email": "string",
    "scopes": [
      "string"
    ]
  },
  "volumes": [
    {
      "existingDisk": {
        "disk": "string"
      },
      "nfsMount": {
        "target": "string"
      },
      "persistentDisk": {
        "sizeGb": 0,
        "sourceImage": "string",
        "type": "string"
      },
      "volume": "string"
    }
  ]
}
```

Carries information about a Compute Engine VM resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accelerators|[[Accelerator](#schemaaccelerator)]|false|none|The list of accelerators to attach to the VM.|
|bootDiskSizeGb|integer(int32)|false|none|The size of the boot disk, in GB. The boot disk must be large enough to accommodate all of the Docker images from each action in the pipeline at the same time. If not specified, a small but reasonable default value is used.|
|bootImage|string|false|none|The host operating system image to use. Currently, only Container-Optimized OS images can be used. The default value is `projects/cos-cloud/global/images/family/cos-stable`, which selects the latest stable release of Container-Optimized OS. This option is provided to allow testing against the beta release of the operating system to ensure that the new version does not interact negatively with production pipelines. To test a pipeline against the beta release of Container-Optimized OS, use the value `projects/cos-cloud/global/images/family/cos-beta`.|
|cpuPlatform|string|false|none|The CPU platform to request. An instance based on a newer platform can be allocated, but never one with fewer capabilities. The value of this parameter must be a valid Compute Engine CPU platform name (such as "Intel Skylake"). This parameter is only useful for carefully optimized work loads where the CPU platform has a significant impact. For more information about the effect of this parameter, see https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform.|
|disks|[[Disk](#schemadisk)]|false|none|The list of disks to create and attach to the VM. Specify either the `volumes[]` field or the `disks[]` field, but not both.|
|dockerCacheImages|[string]|false|none|The Compute Engine Disk Images to use as a Docker cache. The disks will be mounted into the Docker folder in a way that the images present in the cache will not need to be pulled. The digests of the cached images must match those of the tags used or the latest version will still be pulled. The root directory of the ext4 image must contain `image` and `overlay2` directories copied from the Docker directory of a VM where the desired Docker images have already been pulled. Any images pulled that are not cached will be stored on the first cache disk instead of the boot disk. Only a single image is supported.|
|enableStackdriverMonitoring|boolean|false|none|Whether Stackdriver monitoring should be enabled on the VM.|
|labels|object|false|none|Optional set of labels to apply to the VM and any attached disk resources. These labels must adhere to the [name and value restrictions](https://cloud.google.com/compute/docs/labeling-resources) on VM labels imposed by Compute Engine. Labels keys with the prefix 'google-' are reserved for use by Google. Labels applied at creation time to the VM. Applied on a best-effort basis to attached disk resources shortly after VM creation.|
|machineType|string|false|none|Required. The machine type of the virtual machine to create. Must be the short name of a standard machine type (such as "n1-standard-1") or a custom machine type (such as "custom-1-4096", where "1" indicates the number of vCPUs and "4096" indicates the memory in MB). See [Creating an instance with a custom machine type](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#create) for more specifications on creating a custom machine type.|
|network|[Network](#schemanetwork)|false|none|The VM network configuration.|
|nvidiaDriverVersion|string|false|none|The NVIDIA driver version to use when attaching an NVIDIA GPU accelerator. The version specified here must be compatible with the GPU libraries contained in the container being executed, and must be one of the drivers hosted in the `nvidia-drivers-us-public` bucket on Google Cloud Storage.|
|preemptible|boolean|false|none|If true, allocate a preemptible VM.|
|reservation|string|false|none|If specified, the VM will only be allocated inside the matching reservation. It will fail if the VM parameters don't match the reservation.|
|serviceAccount|[ServiceAccount](#schemaserviceaccount)|false|none|The service account to install on the VM. This account does not need any permissions other than those required by the pipeline.|
|volumes|[[Volume](#schemavolume)]|false|none|The list of disks and other storage to create or attach to the VM. Specify either the `volumes[]` field or the `disks[]` field, but not both.|

<h2 id="tocS_Volume">Volume</h2>
<!-- backwards compatibility -->
<a id="schemavolume"></a>
<a id="schema_Volume"></a>
<a id="tocSvolume"></a>
<a id="tocsvolume"></a>

```json
{
  "existingDisk": {
    "disk": "string"
  },
  "nfsMount": {
    "target": "string"
  },
  "persistentDisk": {
    "sizeGb": 0,
    "sourceImage": "string",
    "type": "string"
  },
  "volume": "string"
}
```

Carries information about storage that can be attached to a VM. Specify either `Volume` or `Disk`, but not both.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|existingDisk|[ExistingDisk](#schemaexistingdisk)|false|none|Configuration for a existing disk.|
|nfsMount|[NFSMount](#schemanfsmount)|false|none|Configuration for an NFS mount.|
|persistentDisk|[PersistentDisk](#schemapersistentdisk)|false|none|Configuration for a persistent disk.|
|volume|string|false|none|A user-supplied name for the volume. Used when mounting the volume into `Actions`. The name must contain only upper and lowercase alphanumeric characters and hyphens and cannot start with a hyphen.|

<h2 id="tocS_WorkerAssignedEvent">WorkerAssignedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaworkerassignedevent"></a>
<a id="schema_WorkerAssignedEvent"></a>
<a id="tocSworkerassignedevent"></a>
<a id="tocsworkerassignedevent"></a>

```json
{
  "instance": "string",
  "machineType": "string",
  "zone": "string"
}
```

An event generated after a worker VM has been assigned to run the pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instance|string|false|none|The worker's instance name.|
|machineType|string|false|none|The machine type that was assigned for the worker.|
|zone|string|false|none|The zone the worker is running in.|

<h2 id="tocS_WorkerReleasedEvent">WorkerReleasedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaworkerreleasedevent"></a>
<a id="schema_WorkerReleasedEvent"></a>
<a id="tocSworkerreleasedevent"></a>
<a id="tocsworkerreleasedevent"></a>

```json
{
  "instance": "string",
  "zone": "string"
}
```

An event generated when the worker VM that was assigned to the pipeline has been released (deleted).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instance|string|false|none|The worker's instance name.|
|zone|string|false|none|The zone the worker was running in.|
