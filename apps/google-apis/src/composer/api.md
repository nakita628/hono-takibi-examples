<h1 id="cloud-composer-api">Cloud Composer API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manages Apache Airflow environments on Google Cloud Platform.

Base URLs:

* <a href="https://composer.googleapis.com/">https://composer.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/composer/">External documentation</a>

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

<h1 id="cloud-composer-api-projects">projects</h1>

## composer.projects.locations.environments.checkUpgrade

<a id="opIdcomposer.projects.locations.environments.checkUpgrade"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:checkUpgrade \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "imageVersion": "string"
  }'
```

`POST /v1beta1/{environment}:checkUpgrade`

Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.

> Body parameter

```json
{
  "imageVersion": "string"
}
```

<h3 id="composerprojectslocationsenvironmentscheckupgrade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|path|string|true|The resource name of the environment to check upgrade for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"|
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
|body|body|[CheckUpgradeRequest](#schemacheckupgraderequest)|false|none|
|» imageVersion|body|string|false|The version of the software running in the environment. This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression `composer-([0-9]+(\.[0-9]+\.[0-9]+(-preview\.[0-9]+)?)?\|latest)-airflow-([0-9]+(\.[0-9]+(\.[0-9]+)?)?)`. When used as input, the server also checks if the provided version is supported and denies the request for an unsupported version. The Cloud Composer portion of the image version is a full [semantic version](https://semver.org), or an alias in the form of major version number or `latest`. When an alias is provided, the server replaces it with the current Cloud Composer version that satisfies the alias. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. When an alias is provided, the server replaces it with the latest Apache Airflow version that satisfies the alias and is supported in the given Cloud Composer version. In all cases, the resolved image version is stored in the same field. See also [version list](/composer/docs/concepts/versioning/composer-versions) and [versioning overview](/composer/docs/concepts/versioning/composer-versioning-overview).|

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

<h3 id="composerprojectslocationsenvironmentscheckupgrade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## composer.projects.locations.environments.loadSnapshot

<a id="opIdcomposer.projects.locations.environments.loadSnapshot"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:loadSnapshot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "skipAirflowOverridesSetting": true,
    "skipEnvironmentVariablesSetting": true,
    "skipGcsDataCopying": true,
    "skipPypiPackagesInstallation": true,
    "snapshotPath": "string"
  }'
```

`POST /v1beta1/{environment}:loadSnapshot`

Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.

> Body parameter

```json
{
  "skipAirflowOverridesSetting": true,
  "skipEnvironmentVariablesSetting": true,
  "skipGcsDataCopying": true,
  "skipPypiPackagesInstallation": true,
  "snapshotPath": "string"
}
```

<h3 id="composerprojectslocationsenvironmentsloadsnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|path|string|true|The resource name of the target environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"|
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
|body|body|[LoadSnapshotRequest](#schemaloadsnapshotrequest)|false|none|
|» skipAirflowOverridesSetting|body|boolean|false|Whether or not to skip setting Airflow overrides when loading the environment's state.|
|» skipEnvironmentVariablesSetting|body|boolean|false|Whether or not to skip setting environment variables when loading the environment's state.|
|» skipGcsDataCopying|body|boolean|false|Whether or not to skip copying Cloud Storage data when loading the environment's state.|
|» skipPypiPackagesInstallation|body|boolean|false|Whether or not to skip installing Pypi packages when loading the environment's state.|
|» snapshotPath|body|string|false|A Cloud Storage path to a snapshot to load, e.g.: "gs://my-bucket/snapshots/project_location_environment_timestamp".|

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

<h3 id="composerprojectslocationsenvironmentsloadsnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## composer.projects.locations.environments.saveSnapshot

<a id="opIdcomposer.projects.locations.environments.saveSnapshot"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:saveSnapshot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "snapshotLocation": "string"
  }'
```

`POST /v1beta1/{environment}:saveSnapshot`

Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.

> Body parameter

```json
{
  "snapshotLocation": "string"
}
```

<h3 id="composerprojectslocationsenvironmentssavesnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|path|string|true|The resource name of the source environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"|
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
|body|body|[SaveSnapshotRequest](#schemasavesnapshotrequest)|false|none|
|» snapshotLocation|body|string|false|Location in a Cloud Storage where the snapshot is going to be stored, e.g.: "gs://my-bucket/snapshots".|

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

<h3 id="composerprojectslocationsenvironmentssavesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## composer.projects.locations.operations.get

<a id="opIdcomposer.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="composerprojectslocationsoperationsget-parameters">Parameters</h3>

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

<h3 id="composerprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## composer.projects.locations.operations.delete

<a id="opIdcomposer.projects.locations.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="composerprojectslocationsoperationsdelete-parameters">Parameters</h3>

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

<h3 id="composerprojectslocationsoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## composer.projects.locations.environments.patch

<a id="opIdcomposer.projects.locations.environments.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {
      "databaseConfig": {
        "machineType": "string"
      },
      "encryptionConfig": {
        "kmsKeyName": "string"
      },
      "environmentSize": "ENVIRONMENT_SIZE_UNSPECIFIED",
      "maintenanceWindow": {
        "endTime": "string",
        "recurrence": "string",
        "startTime": "string"
      },
      "masterAuthorizedNetworksConfig": {
        "cidrBlocks": [
          {
            "cidrBlock": "string",
            "displayName": "string"
          }
        ],
        "enabled": true
      },
      "nodeConfig": {
        "diskSizeGb": 0,
        "enableIpMasqAgent": true,
        "ipAllocationPolicy": {
          "clusterIpv4CidrBlock": "string",
          "clusterSecondaryRangeName": "string",
          "servicesIpv4CidrBlock": "string",
          "servicesSecondaryRangeName": "string",
          "useIpAliases": true
        },
        "location": "string",
        "machineType": "string",
        "maxPodsPerNode": 0,
        "network": "string",
        "oauthScopes": [
          "string"
        ],
        "serviceAccount": "string",
        "subnetwork": "string",
        "tags": [
          "string"
        ]
      },
      "nodeCount": 0,
      "privateEnvironmentConfig": {
        "cloudComposerConnectionSubnetwork": "string",
        "cloudComposerNetworkIpv4CidrBlock": "string",
        "cloudSqlIpv4CidrBlock": "string",
        "enablePrivateEnvironment": true,
        "enablePrivatelyUsedPublicIps": true,
        "networkingConfig": {
          "connectionType": "CONNECTION_TYPE_UNSPECIFIED"
        },
        "privateClusterConfig": {
          "enablePrivateEndpoint": true,
          "masterIpv4CidrBlock": "string"
        },
        "webServerIpv4CidrBlock": "string"
      },
      "recoveryConfig": {
        "scheduledSnapshotsConfig": {
          "enabled": true,
          "snapshotCreationSchedule": "string",
          "snapshotLocation": "string",
          "timeZone": "string"
        }
      },
      "softwareConfig": {
        "airflowConfigOverrides": {
          "property1": "string",
          "property2": "string"
        },
        "cloudDataLineageIntegration": {
          "enabled": true
        },
        "envVariables": {
          "property1": "string",
          "property2": "string"
        },
        "imageVersion": "string",
        "pypiPackages": {
          "property1": "string",
          "property2": "string"
        },
        "pythonVersion": "string",
        "schedulerCount": 0
      },
      "webServerConfig": {
        "machineType": "string"
      },
      "webServerNetworkAccessControl": {
        "allowedIpRanges": [
          {
            "description": "string",
            "value": "string"
          }
        ]
      },
      "workloadsConfig": {
        "scheduler": {
          "count": 0,
          "cpu": 0,
          "memoryGb": 0,
          "storageGb": 0
        },
        "triggerer": {
          "count": 0,
          "cpu": 0,
          "memoryGb": 0
        },
        "webServer": {
          "cpu": 0,
          "memoryGb": 0,
          "storageGb": 0
        },
        "worker": {
          "cpu": 0,
          "maxCount": 0,
          "memoryGb": 0,
          "minCount": 0,
          "storageGb": 0
        }
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "state": "STATE_UNSPECIFIED"
  }'
```

`PATCH /v1beta1/{name}`

Update an environment.

> Body parameter

```json
{
  "config": {
    "databaseConfig": {
      "machineType": "string"
    },
    "encryptionConfig": {
      "kmsKeyName": "string"
    },
    "environmentSize": "ENVIRONMENT_SIZE_UNSPECIFIED",
    "maintenanceWindow": {
      "endTime": "string",
      "recurrence": "string",
      "startTime": "string"
    },
    "masterAuthorizedNetworksConfig": {
      "cidrBlocks": [
        {
          "cidrBlock": "string",
          "displayName": "string"
        }
      ],
      "enabled": true
    },
    "nodeConfig": {
      "diskSizeGb": 0,
      "enableIpMasqAgent": true,
      "ipAllocationPolicy": {
        "clusterIpv4CidrBlock": "string",
        "clusterSecondaryRangeName": "string",
        "servicesIpv4CidrBlock": "string",
        "servicesSecondaryRangeName": "string",
        "useIpAliases": true
      },
      "location": "string",
      "machineType": "string",
      "maxPodsPerNode": 0,
      "network": "string",
      "oauthScopes": [
        "string"
      ],
      "serviceAccount": "string",
      "subnetwork": "string",
      "tags": [
        "string"
      ]
    },
    "nodeCount": 0,
    "privateEnvironmentConfig": {
      "cloudComposerConnectionSubnetwork": "string",
      "cloudComposerNetworkIpv4CidrBlock": "string",
      "cloudSqlIpv4CidrBlock": "string",
      "enablePrivateEnvironment": true,
      "enablePrivatelyUsedPublicIps": true,
      "networkingConfig": {
        "connectionType": "CONNECTION_TYPE_UNSPECIFIED"
      },
      "privateClusterConfig": {
        "enablePrivateEndpoint": true,
        "masterIpv4CidrBlock": "string"
      },
      "webServerIpv4CidrBlock": "string"
    },
    "recoveryConfig": {
      "scheduledSnapshotsConfig": {
        "enabled": true,
        "snapshotCreationSchedule": "string",
        "snapshotLocation": "string",
        "timeZone": "string"
      }
    },
    "softwareConfig": {
      "airflowConfigOverrides": {
        "property1": "string",
        "property2": "string"
      },
      "cloudDataLineageIntegration": {
        "enabled": true
      },
      "envVariables": {
        "property1": "string",
        "property2": "string"
      },
      "imageVersion": "string",
      "pypiPackages": {
        "property1": "string",
        "property2": "string"
      },
      "pythonVersion": "string",
      "schedulerCount": 0
    },
    "webServerConfig": {
      "machineType": "string"
    },
    "webServerNetworkAccessControl": {
      "allowedIpRanges": [
        {
          "description": "string",
          "value": "string"
        }
      ]
    },
    "workloadsConfig": {
      "scheduler": {
        "count": 0,
        "cpu": 0,
        "memoryGb": 0,
        "storageGb": 0
      },
      "triggerer": {
        "count": 0,
        "cpu": 0,
        "memoryGb": 0
      },
      "webServer": {
        "cpu": 0,
        "memoryGb": 0,
        "storageGb": 0
      },
      "worker": {
        "cpu": 0,
        "maxCount": 0,
        "memoryGb": 0,
        "minCount": 0,
        "storageGb": 0
      }
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="composerprojectslocationsenvironmentspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The relative resource name of the environment to update, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"|
|updateMask|query|string|false|Required. A comma-separated list of paths, relative to `Environment`, of fields to update. For example, to set the version of scikit-learn to install in the environment to 0.19.0 and to remove an existing installation of argparse, the `updateMask` parameter would include the following two `paths` values: "config.softwareConfig.pypiPackages.scikit-learn" and "config.softwareConfig.pypiPackages.argparse". The included patch environment would specify the scikit-learn version as follows: { "config":{ "softwareConfig":{ "pypiPackages":{ "scikit-learn":"==0.19.0" } } } } Note that in the above example, any existing PyPI packages other than scikit-learn and argparse will be unaffected. Only one update type may be included in a single request's `updateMask`. For example, one cannot update both the PyPI packages and labels in the same request. However, it is possible to update multiple members of a map field simultaneously in the same request. For example, to set the labels "label1" and "label2" while clearing "label3" (assuming it already exists), one can provide the paths "labels.label1", "labels.label2", and "labels.label3" and populate the patch environment as follows: { "labels":{ "label1":"new-label1-value" "label2":"new-label2-value" } } Note that in the above example, any existing labels that are not included in the `updateMask` will be unaffected. It is also possible to replace an entire map field by providing the map field's path in the `updateMask`. The new value of the field will be that which is provided in the patch environment. For example, to delete all pre-existing user-specified PyPI packages and install botocore at version 1.7.14, the `updateMask` would contain the path "config.softwareConfig.pypiPackages", and the patch environment would be the following: { "config":{ "softwareConfig":{ "pypiPackages":{ "botocore":"==1.7.14" } } } } **Note:** Only the following fields can be updated: * `config.softwareConfig.pypiPackages` * Replace all custom custom PyPI packages. If a replacement package map is not included in `environment`, all custom PyPI packages are cleared. It is an error to provide both this mask and a mask specifying an individual package. * `config.softwareConfig.pypiPackages.`packagename * Update the custom PyPI package *packagename*, preserving other packages. To delete the package, include it in `updateMask`, and omit the mapping for it in `environment.config.softwareConfig.pypiPackages`. It is an error to provide both a mask of this form and the `config.softwareConfig.pypiPackages` mask. * `labels` * Replace all environment labels. If a replacement labels map is not included in `environment`, all labels are cleared. It is an error to provide both this mask and a mask specifying one or more individual labels. * `labels.`labelName * Set the label named *labelName*, while preserving other labels. To delete the label, include it in `updateMask` and omit its mapping in `environment.labels`. It is an error to provide both a mask of this form and the `labels` mask. * `config.nodeCount` * Horizontally scale the number of nodes in the environment. An integer greater than or equal to 3 must be provided in the `config.nodeCount` field. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.webServerNetworkAccessControl` * Replace the environment's current WebServerNetworkAccessControl. * `config.softwareConfig.airflowConfigOverrides` * Replace all Apache Airflow config overrides. If a replacement config overrides map is not included in `environment`, all config overrides are cleared. It is an error to provide both this mask and a mask specifying one or more individual config overrides. * `config.softwareConfig.airflowConfigOverrides.`section-name * Override the Apache Airflow config property *name* in the section named *section*, preserving other properties. To delete the property override, include it in `updateMask` and omit its mapping in `environment.config.softwareConfig.airflowConfigOverrides`. It is an error to provide both a mask of this form and the `config.softwareConfig.airflowConfigOverrides` mask. * `config.softwareConfig.envVariables` * Replace all environment variables. If a replacement environment variable map is not included in `environment`, all custom environment variables are cleared. * `config.softwareConfig.imageVersion` * Upgrade the version of the environment in-place. Refer to `SoftwareConfig.image_version` for information on how to format the new image version. Additionally, the new image version cannot effect a version downgrade, and must match the current image version's Composer and Airflow major versions. Consult the [Cloud Composer version list](/composer/docs/concepts/versioning/composer-versions) for valid values. * `config.softwareConfig.schedulerCount` * Horizontally scale the number of schedulers in Airflow. A positive integer not greater than the number of nodes must be provided in the `config.softwareConfig.schedulerCount` field. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*. * `config.softwareConfig.cloudDataLineageIntegration` * Configuration for Cloud Data Lineage integration. * `config.databaseConfig.machineType` * Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.webServerConfig.machineType` * Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.maintenanceWindow` * Maintenance window during which Cloud Composer components may be under maintenance. * `config.workloadsConfig` * The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. * `config.environmentSize` * The size of the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.|
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
|body|body|[Environment](#schemaenvironment)|false|none|
|» config|body|[EnvironmentConfig](#schemaenvironmentconfig)|false|Configuration parameters for this environment.|
|» labels|body|object|false|Optional. User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|The resource name of the environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" EnvironmentId must start with a lowercase letter followed by up to 63 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.|
|» state|body|string|false|The current state of the environment.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|STATE_UNSPECIFIED|
|» state|CREATING|
|» state|RUNNING|
|» state|UPDATING|
|» state|DELETING|
|» state|ERROR|

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

<h3 id="composerprojectslocationsenvironmentspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## composer.projects.locations.operations.list

<a id="opIdcomposer.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="composerprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="composerprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## composer.projects.locations.environments.restartWebServer

<a id="opIdcomposer.projects.locations.environments.restartWebServer"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:restartWebServer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:restartWebServer`

Restart Airflow web server.

> Body parameter

```json
{}
```

<h3 id="composerprojectslocationsenvironmentsrestartwebserver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the environment to restart the web server for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"|
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
|body|body|[RestartWebServerRequest](#schemarestartwebserverrequest)|false|none|

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

<h3 id="composerprojectslocationsenvironmentsrestartwebserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## composer.projects.locations.environments.list

<a id="opIdcomposer.projects.locations.environments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/environments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/environments`

List environments.

<h3 id="composerprojectslocationsenvironmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|List environments in the given project and location, in the form: "projects/{projectId}/locations/{locationId}"|
|pageSize|query|integer|false|The maximum number of environments to return.|
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
  "environments": [
    {
      "config": {
        "airflowByoidUri": "string",
        "airflowUri": "string",
        "dagGcsPrefix": "string",
        "databaseConfig": {
          "machineType": "string"
        },
        "encryptionConfig": {
          "kmsKeyName": "string"
        },
        "environmentSize": "ENVIRONMENT_SIZE_UNSPECIFIED",
        "gkeCluster": "string",
        "maintenanceWindow": {
          "endTime": "string",
          "recurrence": "string",
          "startTime": "string"
        },
        "masterAuthorizedNetworksConfig": {
          "cidrBlocks": [
            {
              "cidrBlock": "string",
              "displayName": "string"
            }
          ],
          "enabled": true
        },
        "nodeConfig": {
          "diskSizeGb": 0,
          "enableIpMasqAgent": true,
          "ipAllocationPolicy": {
            "clusterIpv4CidrBlock": "string",
            "clusterSecondaryRangeName": "string",
            "servicesIpv4CidrBlock": "string",
            "servicesSecondaryRangeName": "string",
            "useIpAliases": true
          },
          "location": "string",
          "machineType": "string",
          "maxPodsPerNode": 0,
          "network": "string",
          "oauthScopes": [
            "string"
          ],
          "serviceAccount": "string",
          "subnetwork": "string",
          "tags": [
            "string"
          ]
        },
        "nodeCount": 0,
        "privateEnvironmentConfig": {
          "cloudComposerConnectionSubnetwork": "string",
          "cloudComposerNetworkIpv4CidrBlock": "string",
          "cloudComposerNetworkIpv4ReservedRange": "string",
          "cloudSqlIpv4CidrBlock": "string",
          "enablePrivateEnvironment": true,
          "enablePrivatelyUsedPublicIps": true,
          "networkingConfig": {
            "connectionType": "CONNECTION_TYPE_UNSPECIFIED"
          },
          "privateClusterConfig": {
            "enablePrivateEndpoint": true,
            "masterIpv4CidrBlock": "string",
            "masterIpv4ReservedRange": "string"
          },
          "webServerIpv4CidrBlock": "string",
          "webServerIpv4ReservedRange": "string"
        },
        "recoveryConfig": {
          "scheduledSnapshotsConfig": {
            "enabled": true,
            "snapshotCreationSchedule": "string",
            "snapshotLocation": "string",
            "timeZone": "string"
          }
        },
        "softwareConfig": {
          "airflowConfigOverrides": {
            "property1": "string",
            "property2": "string"
          },
          "cloudDataLineageIntegration": {
            "enabled": true
          },
          "envVariables": {
            "property1": "string",
            "property2": "string"
          },
          "imageVersion": "string",
          "pypiPackages": {
            "property1": "string",
            "property2": "string"
          },
          "pythonVersion": "string",
          "schedulerCount": 0
        },
        "webServerConfig": {
          "machineType": "string"
        },
        "webServerNetworkAccessControl": {
          "allowedIpRanges": [
            {
              "description": "string",
              "value": "string"
            }
          ]
        },
        "workloadsConfig": {
          "scheduler": {
            "count": 0,
            "cpu": 0,
            "memoryGb": 0,
            "storageGb": 0
          },
          "triggerer": {
            "count": 0,
            "cpu": 0,
            "memoryGb": 0
          },
          "webServer": {
            "cpu": 0,
            "memoryGb": 0,
            "storageGb": 0
          },
          "worker": {
            "cpu": 0,
            "maxCount": 0,
            "memoryGb": 0,
            "minCount": 0,
            "storageGb": 0
          }
        }
      },
      "createTime": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string",
      "uuid": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="composerprojectslocationsenvironmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListEnvironmentsResponse](#schemalistenvironmentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## composer.projects.locations.environments.create

<a id="opIdcomposer.projects.locations.environments.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/environments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {
      "databaseConfig": {
        "machineType": "string"
      },
      "encryptionConfig": {
        "kmsKeyName": "string"
      },
      "environmentSize": "ENVIRONMENT_SIZE_UNSPECIFIED",
      "maintenanceWindow": {
        "endTime": "string",
        "recurrence": "string",
        "startTime": "string"
      },
      "masterAuthorizedNetworksConfig": {
        "cidrBlocks": [
          {
            "cidrBlock": "string",
            "displayName": "string"
          }
        ],
        "enabled": true
      },
      "nodeConfig": {
        "diskSizeGb": 0,
        "enableIpMasqAgent": true,
        "ipAllocationPolicy": {
          "clusterIpv4CidrBlock": "string",
          "clusterSecondaryRangeName": "string",
          "servicesIpv4CidrBlock": "string",
          "servicesSecondaryRangeName": "string",
          "useIpAliases": true
        },
        "location": "string",
        "machineType": "string",
        "maxPodsPerNode": 0,
        "network": "string",
        "oauthScopes": [
          "string"
        ],
        "serviceAccount": "string",
        "subnetwork": "string",
        "tags": [
          "string"
        ]
      },
      "nodeCount": 0,
      "privateEnvironmentConfig": {
        "cloudComposerConnectionSubnetwork": "string",
        "cloudComposerNetworkIpv4CidrBlock": "string",
        "cloudSqlIpv4CidrBlock": "string",
        "enablePrivateEnvironment": true,
        "enablePrivatelyUsedPublicIps": true,
        "networkingConfig": {
          "connectionType": "CONNECTION_TYPE_UNSPECIFIED"
        },
        "privateClusterConfig": {
          "enablePrivateEndpoint": true,
          "masterIpv4CidrBlock": "string"
        },
        "webServerIpv4CidrBlock": "string"
      },
      "recoveryConfig": {
        "scheduledSnapshotsConfig": {
          "enabled": true,
          "snapshotCreationSchedule": "string",
          "snapshotLocation": "string",
          "timeZone": "string"
        }
      },
      "softwareConfig": {
        "airflowConfigOverrides": {
          "property1": "string",
          "property2": "string"
        },
        "cloudDataLineageIntegration": {
          "enabled": true
        },
        "envVariables": {
          "property1": "string",
          "property2": "string"
        },
        "imageVersion": "string",
        "pypiPackages": {
          "property1": "string",
          "property2": "string"
        },
        "pythonVersion": "string",
        "schedulerCount": 0
      },
      "webServerConfig": {
        "machineType": "string"
      },
      "webServerNetworkAccessControl": {
        "allowedIpRanges": [
          {
            "description": "string",
            "value": "string"
          }
        ]
      },
      "workloadsConfig": {
        "scheduler": {
          "count": 0,
          "cpu": 0,
          "memoryGb": 0,
          "storageGb": 0
        },
        "triggerer": {
          "count": 0,
          "cpu": 0,
          "memoryGb": 0
        },
        "webServer": {
          "cpu": 0,
          "memoryGb": 0,
          "storageGb": 0
        },
        "worker": {
          "cpu": 0,
          "maxCount": 0,
          "memoryGb": 0,
          "minCount": 0,
          "storageGb": 0
        }
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "state": "STATE_UNSPECIFIED"
  }'
```

`POST /v1beta1/{parent}/environments`

Create a new environment.

> Body parameter

```json
{
  "config": {
    "databaseConfig": {
      "machineType": "string"
    },
    "encryptionConfig": {
      "kmsKeyName": "string"
    },
    "environmentSize": "ENVIRONMENT_SIZE_UNSPECIFIED",
    "maintenanceWindow": {
      "endTime": "string",
      "recurrence": "string",
      "startTime": "string"
    },
    "masterAuthorizedNetworksConfig": {
      "cidrBlocks": [
        {
          "cidrBlock": "string",
          "displayName": "string"
        }
      ],
      "enabled": true
    },
    "nodeConfig": {
      "diskSizeGb": 0,
      "enableIpMasqAgent": true,
      "ipAllocationPolicy": {
        "clusterIpv4CidrBlock": "string",
        "clusterSecondaryRangeName": "string",
        "servicesIpv4CidrBlock": "string",
        "servicesSecondaryRangeName": "string",
        "useIpAliases": true
      },
      "location": "string",
      "machineType": "string",
      "maxPodsPerNode": 0,
      "network": "string",
      "oauthScopes": [
        "string"
      ],
      "serviceAccount": "string",
      "subnetwork": "string",
      "tags": [
        "string"
      ]
    },
    "nodeCount": 0,
    "privateEnvironmentConfig": {
      "cloudComposerConnectionSubnetwork": "string",
      "cloudComposerNetworkIpv4CidrBlock": "string",
      "cloudSqlIpv4CidrBlock": "string",
      "enablePrivateEnvironment": true,
      "enablePrivatelyUsedPublicIps": true,
      "networkingConfig": {
        "connectionType": "CONNECTION_TYPE_UNSPECIFIED"
      },
      "privateClusterConfig": {
        "enablePrivateEndpoint": true,
        "masterIpv4CidrBlock": "string"
      },
      "webServerIpv4CidrBlock": "string"
    },
    "recoveryConfig": {
      "scheduledSnapshotsConfig": {
        "enabled": true,
        "snapshotCreationSchedule": "string",
        "snapshotLocation": "string",
        "timeZone": "string"
      }
    },
    "softwareConfig": {
      "airflowConfigOverrides": {
        "property1": "string",
        "property2": "string"
      },
      "cloudDataLineageIntegration": {
        "enabled": true
      },
      "envVariables": {
        "property1": "string",
        "property2": "string"
      },
      "imageVersion": "string",
      "pypiPackages": {
        "property1": "string",
        "property2": "string"
      },
      "pythonVersion": "string",
      "schedulerCount": 0
    },
    "webServerConfig": {
      "machineType": "string"
    },
    "webServerNetworkAccessControl": {
      "allowedIpRanges": [
        {
          "description": "string",
          "value": "string"
        }
      ]
    },
    "workloadsConfig": {
      "scheduler": {
        "count": 0,
        "cpu": 0,
        "memoryGb": 0,
        "storageGb": 0
      },
      "triggerer": {
        "count": 0,
        "cpu": 0,
        "memoryGb": 0
      },
      "webServer": {
        "cpu": 0,
        "memoryGb": 0,
        "storageGb": 0
      },
      "worker": {
        "cpu": 0,
        "maxCount": 0,
        "memoryGb": 0,
        "minCount": 0,
        "storageGb": 0
      }
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="composerprojectslocationsenvironmentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent must be of the form "projects/{projectId}/locations/{locationId}".|
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
|body|body|[Environment](#schemaenvironment)|false|none|
|» config|body|[EnvironmentConfig](#schemaenvironmentconfig)|false|Configuration parameters for this environment.|
|» labels|body|object|false|Optional. User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|The resource name of the environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" EnvironmentId must start with a lowercase letter followed by up to 63 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.|
|» state|body|string|false|The current state of the environment.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|STATE_UNSPECIFIED|
|» state|CREATING|
|» state|RUNNING|
|» state|UPDATING|
|» state|DELETING|
|» state|ERROR|

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

<h3 id="composerprojectslocationsenvironmentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## composer.projects.locations.imageVersions.list

<a id="opIdcomposer.projects.locations.imageVersions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/imageVersions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/imageVersions`

List ImageVersions for provided location.

<h3 id="composerprojectslocationsimageversionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|List ImageVersions in the given project and location, in the form: "projects/{projectId}/locations/{locationId}"|
|includePastReleases|query|boolean|false|Whether or not image versions from old releases should be included.|
|pageSize|query|integer|false|The maximum number of image_versions to return.|
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
  "imageVersions": [
    {
      "creationDisabled": true,
      "imageVersionId": "string",
      "isDefault": true,
      "releaseDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "supportedPythonVersions": [
        "string"
      ],
      "upgradeDisabled": true
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="composerprojectslocationsimageversionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListImageVersionsResponse](#schemalistimageversionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AllowedIpRange">AllowedIpRange</h2>
<!-- backwards compatibility -->
<a id="schemaallowediprange"></a>
<a id="schema_AllowedIpRange"></a>
<a id="tocSallowediprange"></a>
<a id="tocsallowediprange"></a>

```json
{
  "description": "string",
  "value": "string"
}
```

Allowed IP range with user-provided description.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. User-provided description. It must contain at most 300 characters.|
|value|string|false|none|IP address or range, defined using CIDR notation, of requests that this rule applies to. Examples: `192.168.1.1` or `192.168.0.0/16` or `2001:db8::/32` or `2001:0db8:0000:0042:0000:8a2e:0370:7334`. IP range prefixes should be properly truncated. For example, `1.2.3.4/24` should be truncated to `1.2.3.0/24`. Similarly, for IPv6, `2001:db8::1/32` should be truncated to `2001:db8::/32`.|

<h2 id="tocS_CheckUpgradeRequest">CheckUpgradeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacheckupgraderequest"></a>
<a id="schema_CheckUpgradeRequest"></a>
<a id="tocScheckupgraderequest"></a>
<a id="tocscheckupgraderequest"></a>

```json
{
  "imageVersion": "string"
}
```

Request to check whether image upgrade will succeed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageVersion|string|false|none|The version of the software running in the environment. This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression `composer-([0-9]+(\.[0-9]+\.[0-9]+(-preview\.[0-9]+)?)?\|latest)-airflow-([0-9]+(\.[0-9]+(\.[0-9]+)?)?)`. When used as input, the server also checks if the provided version is supported and denies the request for an unsupported version. The Cloud Composer portion of the image version is a full [semantic version](https://semver.org), or an alias in the form of major version number or `latest`. When an alias is provided, the server replaces it with the current Cloud Composer version that satisfies the alias. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. When an alias is provided, the server replaces it with the latest Apache Airflow version that satisfies the alias and is supported in the given Cloud Composer version. In all cases, the resolved image version is stored in the same field. See also [version list](/composer/docs/concepts/versioning/composer-versions) and [versioning overview](/composer/docs/concepts/versioning/composer-versioning-overview).|

<h2 id="tocS_CheckUpgradeResponse">CheckUpgradeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckupgraderesponse"></a>
<a id="schema_CheckUpgradeResponse"></a>
<a id="tocScheckupgraderesponse"></a>
<a id="tocscheckupgraderesponse"></a>

```json
{
  "buildLogUri": "string",
  "containsPypiModulesConflict": "CONFLICT_RESULT_UNSPECIFIED",
  "imageVersion": "string",
  "pypiConflictBuildLogExtract": "string",
  "pypiDependencies": {
    "property1": "string",
    "property2": "string"
  }
}
```

Message containing information about the result of an upgrade check operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildLogUri|string|false|read-only|Output only. Url for a docker build log of an upgraded image.|
|containsPypiModulesConflict|string|false|read-only|Output only. Whether build has succeeded or failed on modules conflicts.|
|imageVersion|string|false|none|Composer image for which the build was happening.|
|pypiConflictBuildLogExtract|string|false|read-only|Output only. Extract from a docker image build log containing information about pypi modules conflicts.|
|pypiDependencies|object|false|none|Pypi dependencies specified in the environment configuration, at the time when the build was triggered.|

#### Enumerated Values

|Property|Value|
|---|---|
|containsPypiModulesConflict|CONFLICT_RESULT_UNSPECIFIED|
|containsPypiModulesConflict|CONFLICT|
|containsPypiModulesConflict|NO_CONFLICT|

<h2 id="tocS_CidrBlock">CidrBlock</h2>
<!-- backwards compatibility -->
<a id="schemacidrblock"></a>
<a id="schema_CidrBlock"></a>
<a id="tocScidrblock"></a>
<a id="tocscidrblock"></a>

```json
{
  "cidrBlock": "string",
  "displayName": "string"
}
```

CIDR block with an optional name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cidrBlock|string|false|none|CIDR block that must be specified in CIDR notation.|
|displayName|string|false|none|User-defined name that identifies the CIDR block.|

<h2 id="tocS_CloudDataLineageIntegration">CloudDataLineageIntegration</h2>
<!-- backwards compatibility -->
<a id="schemaclouddatalineageintegration"></a>
<a id="schema_CloudDataLineageIntegration"></a>
<a id="tocSclouddatalineageintegration"></a>
<a id="tocsclouddatalineageintegration"></a>

```json
{
  "enabled": true
}
```

Configuration for Cloud Data Lineage integration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Optional. Whether or not Cloud Data Lineage integration is enabled.|

<h2 id="tocS_DatabaseConfig">DatabaseConfig</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseconfig"></a>
<a id="schema_DatabaseConfig"></a>
<a id="tocSdatabaseconfig"></a>
<a id="tocsdatabaseconfig"></a>

```json
{
  "machineType": "string"
}
```

The configuration of Cloud SQL instance that is used by the Apache Airflow software.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|machineType|string|false|none|Optional. Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. If not specified, db-n1-standard-2 will be used. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.|

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

<h2 id="tocS_EncryptionConfig">EncryptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionconfig"></a>
<a id="schema_EncryptionConfig"></a>
<a id="tocSencryptionconfig"></a>
<a id="tocsencryptionconfig"></a>

```json
{
  "kmsKeyName": "string"
}
```

The encryption options for the Cloud Composer environment and its dependencies. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsKeyName|string|false|none|Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated. If not specified, Google-managed key will be used.|

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
{
  "config": {
    "airflowByoidUri": "string",
    "airflowUri": "string",
    "dagGcsPrefix": "string",
    "databaseConfig": {
      "machineType": "string"
    },
    "encryptionConfig": {
      "kmsKeyName": "string"
    },
    "environmentSize": "ENVIRONMENT_SIZE_UNSPECIFIED",
    "gkeCluster": "string",
    "maintenanceWindow": {
      "endTime": "string",
      "recurrence": "string",
      "startTime": "string"
    },
    "masterAuthorizedNetworksConfig": {
      "cidrBlocks": [
        {
          "cidrBlock": "string",
          "displayName": "string"
        }
      ],
      "enabled": true
    },
    "nodeConfig": {
      "diskSizeGb": 0,
      "enableIpMasqAgent": true,
      "ipAllocationPolicy": {
        "clusterIpv4CidrBlock": "string",
        "clusterSecondaryRangeName": "string",
        "servicesIpv4CidrBlock": "string",
        "servicesSecondaryRangeName": "string",
        "useIpAliases": true
      },
      "location": "string",
      "machineType": "string",
      "maxPodsPerNode": 0,
      "network": "string",
      "oauthScopes": [
        "string"
      ],
      "serviceAccount": "string",
      "subnetwork": "string",
      "tags": [
        "string"
      ]
    },
    "nodeCount": 0,
    "privateEnvironmentConfig": {
      "cloudComposerConnectionSubnetwork": "string",
      "cloudComposerNetworkIpv4CidrBlock": "string",
      "cloudComposerNetworkIpv4ReservedRange": "string",
      "cloudSqlIpv4CidrBlock": "string",
      "enablePrivateEnvironment": true,
      "enablePrivatelyUsedPublicIps": true,
      "networkingConfig": {
        "connectionType": "CONNECTION_TYPE_UNSPECIFIED"
      },
      "privateClusterConfig": {
        "enablePrivateEndpoint": true,
        "masterIpv4CidrBlock": "string",
        "masterIpv4ReservedRange": "string"
      },
      "webServerIpv4CidrBlock": "string",
      "webServerIpv4ReservedRange": "string"
    },
    "recoveryConfig": {
      "scheduledSnapshotsConfig": {
        "enabled": true,
        "snapshotCreationSchedule": "string",
        "snapshotLocation": "string",
        "timeZone": "string"
      }
    },
    "softwareConfig": {
      "airflowConfigOverrides": {
        "property1": "string",
        "property2": "string"
      },
      "cloudDataLineageIntegration": {
        "enabled": true
      },
      "envVariables": {
        "property1": "string",
        "property2": "string"
      },
      "imageVersion": "string",
      "pypiPackages": {
        "property1": "string",
        "property2": "string"
      },
      "pythonVersion": "string",
      "schedulerCount": 0
    },
    "webServerConfig": {
      "machineType": "string"
    },
    "webServerNetworkAccessControl": {
      "allowedIpRanges": [
        {
          "description": "string",
          "value": "string"
        }
      ]
    },
    "workloadsConfig": {
      "scheduler": {
        "count": 0,
        "cpu": 0,
        "memoryGb": 0,
        "storageGb": 0
      },
      "triggerer": {
        "count": 0,
        "cpu": 0,
        "memoryGb": 0
      },
      "webServer": {
        "cpu": 0,
        "memoryGb": 0,
        "storageGb": 0
      },
      "worker": {
        "cpu": 0,
        "maxCount": 0,
        "memoryGb": 0,
        "minCount": 0,
        "storageGb": 0
      }
    }
  },
  "createTime": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string",
  "uuid": "string"
}
```

An environment for running orchestration tasks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[EnvironmentConfig](#schemaenvironmentconfig)|false|none|Configuration parameters for this environment.|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which this environment was created.|
|labels|object|false|none|Optional. User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size.|
|name|string|false|none|The resource name of the environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" EnvironmentId must start with a lowercase letter followed by up to 63 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.|
|state|string|false|none|The current state of the environment.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time at which this environment was last modified.|
|uuid|string|false|read-only|Output only. The UUID (Universally Unique IDentifier) associated with this environment. This value is generated when the environment is created.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|RUNNING|
|state|UPDATING|
|state|DELETING|
|state|ERROR|

<h2 id="tocS_EnvironmentConfig">EnvironmentConfig</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentconfig"></a>
<a id="schema_EnvironmentConfig"></a>
<a id="tocSenvironmentconfig"></a>
<a id="tocsenvironmentconfig"></a>

```json
{
  "airflowByoidUri": "string",
  "airflowUri": "string",
  "dagGcsPrefix": "string",
  "databaseConfig": {
    "machineType": "string"
  },
  "encryptionConfig": {
    "kmsKeyName": "string"
  },
  "environmentSize": "ENVIRONMENT_SIZE_UNSPECIFIED",
  "gkeCluster": "string",
  "maintenanceWindow": {
    "endTime": "string",
    "recurrence": "string",
    "startTime": "string"
  },
  "masterAuthorizedNetworksConfig": {
    "cidrBlocks": [
      {
        "cidrBlock": "string",
        "displayName": "string"
      }
    ],
    "enabled": true
  },
  "nodeConfig": {
    "diskSizeGb": 0,
    "enableIpMasqAgent": true,
    "ipAllocationPolicy": {
      "clusterIpv4CidrBlock": "string",
      "clusterSecondaryRangeName": "string",
      "servicesIpv4CidrBlock": "string",
      "servicesSecondaryRangeName": "string",
      "useIpAliases": true
    },
    "location": "string",
    "machineType": "string",
    "maxPodsPerNode": 0,
    "network": "string",
    "oauthScopes": [
      "string"
    ],
    "serviceAccount": "string",
    "subnetwork": "string",
    "tags": [
      "string"
    ]
  },
  "nodeCount": 0,
  "privateEnvironmentConfig": {
    "cloudComposerConnectionSubnetwork": "string",
    "cloudComposerNetworkIpv4CidrBlock": "string",
    "cloudComposerNetworkIpv4ReservedRange": "string",
    "cloudSqlIpv4CidrBlock": "string",
    "enablePrivateEnvironment": true,
    "enablePrivatelyUsedPublicIps": true,
    "networkingConfig": {
      "connectionType": "CONNECTION_TYPE_UNSPECIFIED"
    },
    "privateClusterConfig": {
      "enablePrivateEndpoint": true,
      "masterIpv4CidrBlock": "string",
      "masterIpv4ReservedRange": "string"
    },
    "webServerIpv4CidrBlock": "string",
    "webServerIpv4ReservedRange": "string"
  },
  "recoveryConfig": {
    "scheduledSnapshotsConfig": {
      "enabled": true,
      "snapshotCreationSchedule": "string",
      "snapshotLocation": "string",
      "timeZone": "string"
    }
  },
  "softwareConfig": {
    "airflowConfigOverrides": {
      "property1": "string",
      "property2": "string"
    },
    "cloudDataLineageIntegration": {
      "enabled": true
    },
    "envVariables": {
      "property1": "string",
      "property2": "string"
    },
    "imageVersion": "string",
    "pypiPackages": {
      "property1": "string",
      "property2": "string"
    },
    "pythonVersion": "string",
    "schedulerCount": 0
  },
  "webServerConfig": {
    "machineType": "string"
  },
  "webServerNetworkAccessControl": {
    "allowedIpRanges": [
      {
        "description": "string",
        "value": "string"
      }
    ]
  },
  "workloadsConfig": {
    "scheduler": {
      "count": 0,
      "cpu": 0,
      "memoryGb": 0,
      "storageGb": 0
    },
    "triggerer": {
      "count": 0,
      "cpu": 0,
      "memoryGb": 0
    },
    "webServer": {
      "cpu": 0,
      "memoryGb": 0,
      "storageGb": 0
    },
    "worker": {
      "cpu": 0,
      "maxCount": 0,
      "memoryGb": 0,
      "minCount": 0,
      "storageGb": 0
    }
  }
}
```

Configuration information for an environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airflowByoidUri|string|false|read-only|Output only. The 'bring your own identity' variant of the URI of the Apache Airflow Web UI hosted within this environment, to be accessed with external identities using workforce identity federation (see [Access environments with workforce identity federation](/composer/docs/composer-2/access-environments-with-workforce-identity-federation)).|
|airflowUri|string|false|read-only|Output only. The URI of the Apache Airflow Web UI hosted within this environment (see [Airflow web interface](/composer/docs/how-to/accessing/airflow-web-interface)).|
|dagGcsPrefix|string|false|read-only|Output only. The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using "/"-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with the given prefix.|
|databaseConfig|[DatabaseConfig](#schemadatabaseconfig)|false|none|Optional. The configuration settings for Cloud SQL instance used internally by Apache Airflow software.|
|encryptionConfig|[EncryptionConfig](#schemaencryptionconfig)|false|none|Optional. The encryption options for the Cloud Composer environment and its dependencies. Cannot be updated.|
|environmentSize|string|false|none|Optional. The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.|
|gkeCluster|string|false|read-only|Output only. The Kubernetes Engine cluster used to run this environment.|
|maintenanceWindow|[MaintenanceWindow](#schemamaintenancewindow)|false|none|Optional. The maintenance window is the period when Cloud Composer components may undergo maintenance. It is defined so that maintenance is not executed during peak hours or critical time periods. The system will not be under maintenance for every occurrence of this window, but when maintenance is planned, it will be scheduled during the window. The maintenance window period must encompass at least 12 hours per week. This may be split into multiple chunks, each with a size of at least 4 hours. If this value is omitted, Cloud Composer components may be subject to maintenance at any time.|
|masterAuthorizedNetworksConfig|[MasterAuthorizedNetworksConfig](#schemamasterauthorizednetworksconfig)|false|none|Optional. The configuration options for GKE cluster master authorized networks. By default master authorized networks feature is: - in case of private environment: enabled with no external networks allowlisted. - in case of public environment: disabled.|
|nodeConfig|[NodeConfig](#schemanodeconfig)|false|none|The configuration used for the Kubernetes Engine cluster.|
|nodeCount|integer(int32)|false|none|The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.|
|privateEnvironmentConfig|[PrivateEnvironmentConfig](#schemaprivateenvironmentconfig)|false|none|The configuration used for the Private IP Cloud Composer environment.|
|recoveryConfig|[RecoveryConfig](#schemarecoveryconfig)|false|none|Optional. The Recovery settings configuration of an environment. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.|
|softwareConfig|[SoftwareConfig](#schemasoftwareconfig)|false|none|The configuration settings for software inside the environment.|
|webServerConfig|[WebServerConfig](#schemawebserverconfig)|false|none|Optional. The configuration settings for the Airflow web server App Engine instance. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.|
|webServerNetworkAccessControl|[WebServerNetworkAccessControl](#schemawebservernetworkaccesscontrol)|false|none|Optional. The network-level access control policy for the Airflow web server. If unspecified, no network-level access restrictions will be applied.|
|workloadsConfig|[WorkloadsConfig](#schemaworkloadsconfig)|false|none|Optional. The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. The GKE cluster runs Airflow scheduler, web server and workers workloads. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.|

#### Enumerated Values

|Property|Value|
|---|---|
|environmentSize|ENVIRONMENT_SIZE_UNSPECIFIED|
|environmentSize|ENVIRONMENT_SIZE_SMALL|
|environmentSize|ENVIRONMENT_SIZE_MEDIUM|
|environmentSize|ENVIRONMENT_SIZE_LARGE|

<h2 id="tocS_ExecuteAirflowCommandResponse">ExecuteAirflowCommandResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexecuteairflowcommandresponse"></a>
<a id="schema_ExecuteAirflowCommandResponse"></a>
<a id="tocSexecuteairflowcommandresponse"></a>
<a id="tocsexecuteairflowcommandresponse"></a>

```json
{
  "error": "string",
  "executionId": "string",
  "pod": "string",
  "podNamespace": "string"
}
```

Response to ExecuteAirflowCommandRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message. Empty if there was no error.|
|executionId|string|false|none|The unique ID of the command execution for polling.|
|pod|string|false|none|The name of the pod where the command is executed.|
|podNamespace|string|false|none|The namespace of the pod where the command is executed.|

<h2 id="tocS_ExitInfo">ExitInfo</h2>
<!-- backwards compatibility -->
<a id="schemaexitinfo"></a>
<a id="schema_ExitInfo"></a>
<a id="tocSexitinfo"></a>
<a id="tocsexitinfo"></a>

```json
{
  "error": "string",
  "exitCode": 0
}
```

Information about how a command ended.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message. Empty if there was no error.|
|exitCode|integer(int32)|false|none|The exit code from the command execution.|

<h2 id="tocS_IPAllocationPolicy">IPAllocationPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaipallocationpolicy"></a>
<a id="schema_IPAllocationPolicy"></a>
<a id="tocSipallocationpolicy"></a>
<a id="tocsipallocationpolicy"></a>

```json
{
  "clusterIpv4CidrBlock": "string",
  "clusterSecondaryRangeName": "string",
  "servicesIpv4CidrBlock": "string",
  "servicesSecondaryRangeName": "string",
  "useIpAliases": true
}
```

Configuration for controlling how IPs are allocated in the GKE cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterIpv4CidrBlock|string|false|none|Optional. The IP address range used to allocate IP addresses to pods in the cluster. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. `/14`) to have GKE choose a range with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. Specify `cluster_secondary_range_name` or `cluster_ipv4_cidr_block` but not both.|
|clusterSecondaryRangeName|string|false|none|Optional. The name of the cluster's secondary range used to allocate IP addresses to pods. Specify either `cluster_secondary_range_name` or `cluster_ipv4_cidr_block` but not both. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true.|
|servicesIpv4CidrBlock|string|false|none|Optional. The IP address range of the services IP addresses in this cluster. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. `/14`) to have GKE choose a range with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. Specify `services_secondary_range_name` or `services_ipv4_cidr_block` but not both.|
|servicesSecondaryRangeName|string|false|none|Optional. The name of the services' secondary range used to allocate IP addresses to the cluster. Specify either `services_secondary_range_name` or `services_ipv4_cidr_block` but not both. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true.|
|useIpAliases|boolean|false|none|Optional. Whether or not to enable Alias IPs in the GKE cluster. If `true`, a VPC-native cluster is created. This field is only supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use VPC-native GKE clusters.|

<h2 id="tocS_ImageVersion">ImageVersion</h2>
<!-- backwards compatibility -->
<a id="schemaimageversion"></a>
<a id="schema_ImageVersion"></a>
<a id="tocSimageversion"></a>
<a id="tocsimageversion"></a>

```json
{
  "creationDisabled": true,
  "imageVersionId": "string",
  "isDefault": true,
  "releaseDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "supportedPythonVersions": [
    "string"
  ],
  "upgradeDisabled": true
}
```

Image Version information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDisabled|boolean|false|none|Whether it is impossible to create an environment with the image version.|
|imageVersionId|string|false|none|The string identifier of the ImageVersion, in the form: "composer-x.y.z-airflow-a.b.c"|
|isDefault|boolean|false|none|Whether this is the default ImageVersion used by Composer during environment creation if no input ImageVersion is specified.|
|releaseDate|[Date](#schemadate)|false|none|The date of the version release.|
|supportedPythonVersions|[string]|false|none|supported python versions|
|upgradeDisabled|boolean|false|none|Whether it is impossible to upgrade an environment running with the image version.|

<h2 id="tocS_Line">Line</h2>
<!-- backwards compatibility -->
<a id="schemaline"></a>
<a id="schema_Line"></a>
<a id="tocSline"></a>
<a id="tocsline"></a>

```json
{
  "content": "string",
  "lineNumber": 0
}
```

Contains information about a single line from logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|Text content of the log line.|
|lineNumber|integer(int32)|false|none|Number of the line.|

<h2 id="tocS_ListEnvironmentsResponse">ListEnvironmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmentsresponse"></a>
<a id="schema_ListEnvironmentsResponse"></a>
<a id="tocSlistenvironmentsresponse"></a>
<a id="tocslistenvironmentsresponse"></a>

```json
{
  "environments": [
    {
      "config": {
        "airflowByoidUri": "string",
        "airflowUri": "string",
        "dagGcsPrefix": "string",
        "databaseConfig": {
          "machineType": "string"
        },
        "encryptionConfig": {
          "kmsKeyName": "string"
        },
        "environmentSize": "ENVIRONMENT_SIZE_UNSPECIFIED",
        "gkeCluster": "string",
        "maintenanceWindow": {
          "endTime": "string",
          "recurrence": "string",
          "startTime": "string"
        },
        "masterAuthorizedNetworksConfig": {
          "cidrBlocks": [
            {
              "cidrBlock": "string",
              "displayName": "string"
            }
          ],
          "enabled": true
        },
        "nodeConfig": {
          "diskSizeGb": 0,
          "enableIpMasqAgent": true,
          "ipAllocationPolicy": {
            "clusterIpv4CidrBlock": "string",
            "clusterSecondaryRangeName": "string",
            "servicesIpv4CidrBlock": "string",
            "servicesSecondaryRangeName": "string",
            "useIpAliases": true
          },
          "location": "string",
          "machineType": "string",
          "maxPodsPerNode": 0,
          "network": "string",
          "oauthScopes": [
            "string"
          ],
          "serviceAccount": "string",
          "subnetwork": "string",
          "tags": [
            "string"
          ]
        },
        "nodeCount": 0,
        "privateEnvironmentConfig": {
          "cloudComposerConnectionSubnetwork": "string",
          "cloudComposerNetworkIpv4CidrBlock": "string",
          "cloudComposerNetworkIpv4ReservedRange": "string",
          "cloudSqlIpv4CidrBlock": "string",
          "enablePrivateEnvironment": true,
          "enablePrivatelyUsedPublicIps": true,
          "networkingConfig": {
            "connectionType": "CONNECTION_TYPE_UNSPECIFIED"
          },
          "privateClusterConfig": {
            "enablePrivateEndpoint": true,
            "masterIpv4CidrBlock": "string",
            "masterIpv4ReservedRange": "string"
          },
          "webServerIpv4CidrBlock": "string",
          "webServerIpv4ReservedRange": "string"
        },
        "recoveryConfig": {
          "scheduledSnapshotsConfig": {
            "enabled": true,
            "snapshotCreationSchedule": "string",
            "snapshotLocation": "string",
            "timeZone": "string"
          }
        },
        "softwareConfig": {
          "airflowConfigOverrides": {
            "property1": "string",
            "property2": "string"
          },
          "cloudDataLineageIntegration": {
            "enabled": true
          },
          "envVariables": {
            "property1": "string",
            "property2": "string"
          },
          "imageVersion": "string",
          "pypiPackages": {
            "property1": "string",
            "property2": "string"
          },
          "pythonVersion": "string",
          "schedulerCount": 0
        },
        "webServerConfig": {
          "machineType": "string"
        },
        "webServerNetworkAccessControl": {
          "allowedIpRanges": [
            {
              "description": "string",
              "value": "string"
            }
          ]
        },
        "workloadsConfig": {
          "scheduler": {
            "count": 0,
            "cpu": 0,
            "memoryGb": 0,
            "storageGb": 0
          },
          "triggerer": {
            "count": 0,
            "cpu": 0,
            "memoryGb": 0
          },
          "webServer": {
            "cpu": 0,
            "memoryGb": 0,
            "storageGb": 0
          },
          "worker": {
            "cpu": 0,
            "maxCount": 0,
            "memoryGb": 0,
            "minCount": 0,
            "storageGb": 0
          }
        }
      },
      "createTime": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string",
      "uuid": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The environments in a project and location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environments|[[Environment](#schemaenvironment)]|false|none|The list of environments returned by a ListEnvironmentsRequest.|
|nextPageToken|string|false|none|The page token used to query for the next page if one exists.|

<h2 id="tocS_ListImageVersionsResponse">ListImageVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimageversionsresponse"></a>
<a id="schema_ListImageVersionsResponse"></a>
<a id="tocSlistimageversionsresponse"></a>
<a id="tocslistimageversionsresponse"></a>

```json
{
  "imageVersions": [
    {
      "creationDisabled": true,
      "imageVersionId": "string",
      "isDefault": true,
      "releaseDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "supportedPythonVersions": [
        "string"
      ],
      "upgradeDisabled": true
    }
  ],
  "nextPageToken": "string"
}
```

The ImageVersions in a project and location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageVersions|[[ImageVersion](#schemaimageversion)]|false|none|The list of supported ImageVersions in a location.|
|nextPageToken|string|false|none|The page token used to query for the next page if one exists.|

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

<h2 id="tocS_LoadSnapshotRequest">LoadSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemaloadsnapshotrequest"></a>
<a id="schema_LoadSnapshotRequest"></a>
<a id="tocSloadsnapshotrequest"></a>
<a id="tocsloadsnapshotrequest"></a>

```json
{
  "skipAirflowOverridesSetting": true,
  "skipEnvironmentVariablesSetting": true,
  "skipGcsDataCopying": true,
  "skipPypiPackagesInstallation": true,
  "snapshotPath": "string"
}
```

Request to load a snapshot into a Cloud Composer environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|skipAirflowOverridesSetting|boolean|false|none|Whether or not to skip setting Airflow overrides when loading the environment's state.|
|skipEnvironmentVariablesSetting|boolean|false|none|Whether or not to skip setting environment variables when loading the environment's state.|
|skipGcsDataCopying|boolean|false|none|Whether or not to skip copying Cloud Storage data when loading the environment's state.|
|skipPypiPackagesInstallation|boolean|false|none|Whether or not to skip installing Pypi packages when loading the environment's state.|
|snapshotPath|string|false|none|A Cloud Storage path to a snapshot to load, e.g.: "gs://my-bucket/snapshots/project_location_environment_timestamp".|

<h2 id="tocS_LoadSnapshotResponse">LoadSnapshotResponse</h2>
<!-- backwards compatibility -->
<a id="schemaloadsnapshotresponse"></a>
<a id="schema_LoadSnapshotResponse"></a>
<a id="tocSloadsnapshotresponse"></a>
<a id="tocsloadsnapshotresponse"></a>

```json
{}
```

Response to LoadSnapshotRequest.

<h2 id="tocS_MaintenanceWindow">MaintenanceWindow</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindow"></a>
<a id="schema_MaintenanceWindow"></a>
<a id="tocSmaintenancewindow"></a>
<a id="tocsmaintenancewindow"></a>

```json
{
  "endTime": "string",
  "recurrence": "string",
  "startTime": "string"
}
```

The configuration settings for Cloud Composer maintenance window. The following example: ``` { "startTime":"2019-08-01T01:00:00Z" "endTime":"2019-08-01T07:00:00Z" "recurrence":"FREQ=WEEKLY;BYDAY=TU,WE" } ``` would define a maintenance window between 01 and 07 hours UTC during each Tuesday and Wednesday.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|Required. Maintenance window end time. It is used only to calculate the duration of the maintenance window. The value for end_time must be in the future, relative to `start_time`.|
|recurrence|string|false|none|Required. Maintenance window recurrence. Format is a subset of [RFC-5545](https://tools.ietf.org/html/rfc5545) `RRULE`. The only allowed values for `FREQ` field are `FREQ=DAILY` and `FREQ=WEEKLY;BYDAY=...` Example values: `FREQ=WEEKLY;BYDAY=TU,WE`, `FREQ=DAILY`.|
|startTime|string(google-datetime)|false|none|Required. Start time of the first recurrence of the maintenance window.|

<h2 id="tocS_MasterAuthorizedNetworksConfig">MasterAuthorizedNetworksConfig</h2>
<!-- backwards compatibility -->
<a id="schemamasterauthorizednetworksconfig"></a>
<a id="schema_MasterAuthorizedNetworksConfig"></a>
<a id="tocSmasterauthorizednetworksconfig"></a>
<a id="tocsmasterauthorizednetworksconfig"></a>

```json
{
  "cidrBlocks": [
    {
      "cidrBlock": "string",
      "displayName": "string"
    }
  ],
  "enabled": true
}
```

Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cidrBlocks|[[CidrBlock](#schemacidrblock)]|false|none|Up to 50 external networks that could access Kubernetes master through HTTPS.|
|enabled|boolean|false|none|Whether or not master authorized networks feature is enabled.|

<h2 id="tocS_NetworkingConfig">NetworkingConfig</h2>
<!-- backwards compatibility -->
<a id="schemanetworkingconfig"></a>
<a id="schema_NetworkingConfig"></a>
<a id="tocSnetworkingconfig"></a>
<a id="tocsnetworkingconfig"></a>

```json
{
  "connectionType": "CONNECTION_TYPE_UNSPECIFIED"
}
```

Configuration options for networking connections in the Composer 2 environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionType|string|false|none|Optional. Indicates the user requested specifc connection type between Tenant and Customer projects. You cannot set networking connection type in public IP environment.|

#### Enumerated Values

|Property|Value|
|---|---|
|connectionType|CONNECTION_TYPE_UNSPECIFIED|
|connectionType|VPC_PEERING|
|connectionType|PRIVATE_SERVICE_CONNECT|

<h2 id="tocS_NodeConfig">NodeConfig</h2>
<!-- backwards compatibility -->
<a id="schemanodeconfig"></a>
<a id="schema_NodeConfig"></a>
<a id="tocSnodeconfig"></a>
<a id="tocsnodeconfig"></a>

```json
{
  "diskSizeGb": 0,
  "enableIpMasqAgent": true,
  "ipAllocationPolicy": {
    "clusterIpv4CidrBlock": "string",
    "clusterSecondaryRangeName": "string",
    "servicesIpv4CidrBlock": "string",
    "servicesSecondaryRangeName": "string",
    "useIpAliases": true
  },
  "location": "string",
  "machineType": "string",
  "maxPodsPerNode": 0,
  "network": "string",
  "oauthScopes": [
    "string"
  ],
  "serviceAccount": "string",
  "subnetwork": "string",
  "tags": [
    "string"
  ]
}
```

The configuration information for the Kubernetes Engine nodes running the Apache Airflow software.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskSizeGb|integer(int32)|false|none|Optional. The disk size in GB used for node VMs. Minimum size is 30GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.|
|enableIpMasqAgent|boolean|false|none|Optional. Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic. See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent|
|ipAllocationPolicy|[IPAllocationPolicy](#schemaipallocationpolicy)|false|none|Optional. The IPAllocationPolicy fields for the GKE cluster.|
|location|string|false|none|Optional. The Compute Engine [zone](/compute/docs/regions-zones) in which to deploy the VMs used to run the Apache Airflow software, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId}/zones/{zoneId}". This `location` must belong to the enclosing environment's project and location. If both this field and `nodeConfig.machineType` are specified, `nodeConfig.machineType` must belong to this `location`; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields. If only one field (`location` or `nodeConfig.machineType`) is specified, the location information from the specified field will be propagated to the unspecified field. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.|
|machineType|string|false|none|Optional. The Compute Engine [machine type](/compute/docs/machine-types) used for cluster instances, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId}/zones/{zoneId}/machineTypes/{machineTypeId}". The `machineType` must belong to the enclosing environment's project and location. If both this field and `nodeConfig.location` are specified, this `machineType` must belong to the `nodeConfig.location`; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields. If exactly one of this field and `nodeConfig.location` is specified, the location information from the specified field will be propagated to the unspecified field. The `machineTypeId` must not be a [shared-core machine type](/compute/docs/machine-types#sharedcore). If this field is unspecified, the `machineTypeId` defaults to "n1-standard-1". This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.|
|maxPodsPerNode|integer(int32)|false|none|Optional. The maximum number of pods per node in the Cloud Composer GKE cluster. The value must be between 8 and 110 and it can be set only if the environment is VPC-native. The default value is 32. Values of this field will be propagated both to the `default-pool` node pool of the newly created GKE cluster, and to the default "Maximum Pods per Node" value which is used for newly created node pools if their value is not explicitly set during node pool creation. For more information, see [Optimizing IP address allocation] (https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr). Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.|
|network|string|false|none|Optional. The Compute Engine network to be used for machine communications, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId}/global/networks/{networkId}". If unspecified, the default network in the environment's project is used. If a [Custom Subnet Network](/vpc/docs/vpc#vpc_networks_and_subnets) is provided, `nodeConfig.subnetwork` must also be provided. For [Shared VPC](/vpc/docs/shared-vpc) subnetwork requirements, see `nodeConfig.subnetwork`.|
|oauthScopes|[string]|false|none|Optional. The set of Google API scopes to be made available on all node VMs. If `oauth_scopes` is empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.|
|serviceAccount|string|false|none|Optional. The Google Cloud Platform Service Account to be used by the workloads. If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated.|
|subnetwork|string|false|none|Optional. The Compute Engine subnetwork to be used for machine communications, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId}/regions/{regionId}/subnetworks/{subnetworkId}" If a subnetwork is provided, `nodeConfig.network` must also be provided, and the subnetwork must belong to the enclosing environment's project and location.|
|tags|[string]|false|none|Optional. The list of instance tags applied to all node VMs. Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Cannot be updated.|

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
  "createTime": "string",
  "endTime": "string",
  "operationType": "TYPE_UNSPECIFIED",
  "resource": "string",
  "resourceUuid": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Metadata describing an operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Output only. The time the operation was submitted to the server.|
|endTime|string(google-datetime)|false|none|Output only. The time when the operation terminated, regardless of its success. This field is unset if the operation is still ongoing.|
|operationType|string|false|none|Output only. The type of operation being performed.|
|resource|string|false|none|Output only. The resource being operated on, as a [relative resource name]( /apis/design/resource_names#relative_resource_name).|
|resourceUuid|string|false|none|Output only. The UUID of the resource being operated on.|
|state|string|false|none|Output only. The current operation state.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|TYPE_UNSPECIFIED|
|operationType|CREATE|
|operationType|DELETE|
|operationType|UPDATE|
|operationType|CHECK|
|operationType|SAVE_SNAPSHOT|
|operationType|LOAD_SNAPSHOT|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|RUNNING|
|state|SUCCESSFUL|
|state|FAILED|

<h2 id="tocS_PollAirflowCommandResponse">PollAirflowCommandResponse</h2>
<!-- backwards compatibility -->
<a id="schemapollairflowcommandresponse"></a>
<a id="schema_PollAirflowCommandResponse"></a>
<a id="tocSpollairflowcommandresponse"></a>
<a id="tocspollairflowcommandresponse"></a>

```json
{
  "exitInfo": {
    "error": "string",
    "exitCode": 0
  },
  "output": [
    {
      "content": "string",
      "lineNumber": 0
    }
  ],
  "outputEnd": true
}
```

Response to PollAirflowCommandRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exitInfo|[ExitInfo](#schemaexitinfo)|false|none|The result exit status of the command.|
|output|[[Line](#schemaline)]|false|none|Output from the command execution. It may not contain the full output and the caller may need to poll for more lines.|
|outputEnd|boolean|false|none|Whether the command execution has finished and there is no more output.|

<h2 id="tocS_PrivateClusterConfig">PrivateClusterConfig</h2>
<!-- backwards compatibility -->
<a id="schemaprivateclusterconfig"></a>
<a id="schema_PrivateClusterConfig"></a>
<a id="tocSprivateclusterconfig"></a>
<a id="tocsprivateclusterconfig"></a>

```json
{
  "enablePrivateEndpoint": true,
  "masterIpv4CidrBlock": "string",
  "masterIpv4ReservedRange": "string"
}
```

Configuration options for the private GKE cluster in a Cloud Composer environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enablePrivateEndpoint|boolean|false|none|Optional. If `true`, access to the public endpoint of the GKE cluster is denied.|
|masterIpv4CidrBlock|string|false|none|Optional. The CIDR block from which IPv4 range for GKE master will be reserved. If left blank, the default value of '172.16.0.0/23' is used.|
|masterIpv4ReservedRange|string|false|read-only|Output only. The IP range in CIDR notation to use for the hosted master network. This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network.|

<h2 id="tocS_PrivateEnvironmentConfig">PrivateEnvironmentConfig</h2>
<!-- backwards compatibility -->
<a id="schemaprivateenvironmentconfig"></a>
<a id="schema_PrivateEnvironmentConfig"></a>
<a id="tocSprivateenvironmentconfig"></a>
<a id="tocsprivateenvironmentconfig"></a>

```json
{
  "cloudComposerConnectionSubnetwork": "string",
  "cloudComposerNetworkIpv4CidrBlock": "string",
  "cloudComposerNetworkIpv4ReservedRange": "string",
  "cloudSqlIpv4CidrBlock": "string",
  "enablePrivateEnvironment": true,
  "enablePrivatelyUsedPublicIps": true,
  "networkingConfig": {
    "connectionType": "CONNECTION_TYPE_UNSPECIFIED"
  },
  "privateClusterConfig": {
    "enablePrivateEndpoint": true,
    "masterIpv4CidrBlock": "string",
    "masterIpv4ReservedRange": "string"
  },
  "webServerIpv4CidrBlock": "string",
  "webServerIpv4ReservedRange": "string"
}
```

The configuration information for configuring a Private IP Cloud Composer environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudComposerConnectionSubnetwork|string|false|none|Optional. When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork.|
|cloudComposerNetworkIpv4CidrBlock|string|false|none|Optional. The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.|
|cloudComposerNetworkIpv4ReservedRange|string|false|read-only|Output only. The IP range reserved for the tenant project's Cloud Composer network. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.|
|cloudSqlIpv4CidrBlock|string|false|none|Optional. The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. Needs to be disjoint from web_server_ipv4_cidr_block|
|enablePrivateEnvironment|boolean|false|none|Optional. If `true`, a Private IP Cloud Composer environment is created. If this field is set to true, `IPAllocationPolicy.use_ip_aliases` must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.|
|enablePrivatelyUsedPublicIps|boolean|false|none|Optional. When enabled, IPs from public (non-RFC1918) ranges can be used for `IPAllocationPolicy.cluster_ipv4_cidr_block` and `IPAllocationPolicy.service_ipv4_cidr_block`.|
|networkingConfig|[NetworkingConfig](#schemanetworkingconfig)|false|none|Optional. Configuration for the network connections configuration in the environment.|
|privateClusterConfig|[PrivateClusterConfig](#schemaprivateclusterconfig)|false|none|Optional. Configuration for the private GKE cluster for a Private IP Cloud Composer environment.|
|webServerIpv4CidrBlock|string|false|none|Optional. The CIDR block from which IP range for web server will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.|
|webServerIpv4ReservedRange|string|false|read-only|Output only. The IP range reserved for the tenant project's App Engine VMs. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.|

<h2 id="tocS_RecoveryConfig">RecoveryConfig</h2>
<!-- backwards compatibility -->
<a id="schemarecoveryconfig"></a>
<a id="schema_RecoveryConfig"></a>
<a id="tocSrecoveryconfig"></a>
<a id="tocsrecoveryconfig"></a>

```json
{
  "scheduledSnapshotsConfig": {
    "enabled": true,
    "snapshotCreationSchedule": "string",
    "snapshotLocation": "string",
    "timeZone": "string"
  }
}
```

The Recovery settings of an environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scheduledSnapshotsConfig|[ScheduledSnapshotsConfig](#schemascheduledsnapshotsconfig)|false|none|Optional. The configuration for scheduled snapshot creation mechanism.|

<h2 id="tocS_RestartWebServerRequest">RestartWebServerRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestartwebserverrequest"></a>
<a id="schema_RestartWebServerRequest"></a>
<a id="tocSrestartwebserverrequest"></a>
<a id="tocsrestartwebserverrequest"></a>

```json
{}
```

Restart Airflow web server.

<h2 id="tocS_SaveSnapshotRequest">SaveSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemasavesnapshotrequest"></a>
<a id="schema_SaveSnapshotRequest"></a>
<a id="tocSsavesnapshotrequest"></a>
<a id="tocssavesnapshotrequest"></a>

```json
{
  "snapshotLocation": "string"
}
```

Request to create a snapshot of a Cloud Composer environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snapshotLocation|string|false|none|Location in a Cloud Storage where the snapshot is going to be stored, e.g.: "gs://my-bucket/snapshots".|

<h2 id="tocS_SaveSnapshotResponse">SaveSnapshotResponse</h2>
<!-- backwards compatibility -->
<a id="schemasavesnapshotresponse"></a>
<a id="schema_SaveSnapshotResponse"></a>
<a id="tocSsavesnapshotresponse"></a>
<a id="tocssavesnapshotresponse"></a>

```json
{
  "snapshotPath": "string"
}
```

Response to SaveSnapshotRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snapshotPath|string|false|none|The fully-resolved Cloud Storage path of the created snapshot, e.g.: "gs://my-bucket/snapshots/project_location_environment_timestamp". This field is populated only if the snapshot creation was successful.|

<h2 id="tocS_ScheduledSnapshotsConfig">ScheduledSnapshotsConfig</h2>
<!-- backwards compatibility -->
<a id="schemascheduledsnapshotsconfig"></a>
<a id="schema_ScheduledSnapshotsConfig"></a>
<a id="tocSscheduledsnapshotsconfig"></a>
<a id="tocsscheduledsnapshotsconfig"></a>

```json
{
  "enabled": true,
  "snapshotCreationSchedule": "string",
  "snapshotLocation": "string",
  "timeZone": "string"
}
```

The configuration for scheduled snapshot creation mechanism.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Optional. Whether scheduled snapshots creation is enabled.|
|snapshotCreationSchedule|string|false|none|Optional. The cron expression representing the time when snapshots creation mechanism runs. This field is subject to additional validation around frequency of execution.|
|snapshotLocation|string|false|none|Optional. The Cloud Storage location for storing automatically created snapshots.|
|timeZone|string|false|none|Optional. Time zone that sets the context to interpret snapshot_creation_schedule.|

<h2 id="tocS_SchedulerResource">SchedulerResource</h2>
<!-- backwards compatibility -->
<a id="schemaschedulerresource"></a>
<a id="schema_SchedulerResource"></a>
<a id="tocSschedulerresource"></a>
<a id="tocsschedulerresource"></a>

```json
{
  "count": 0,
  "cpu": 0,
  "memoryGb": 0,
  "storageGb": 0
}
```

Configuration for resources used by Airflow schedulers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|Optional. The number of schedulers.|
|cpu|number(float)|false|none|Optional. CPU request and limit for a single Airflow scheduler replica.|
|memoryGb|number(float)|false|none|Optional. Memory (GB) request and limit for a single Airflow scheduler replica.|
|storageGb|number(float)|false|none|Optional. Storage (GB) request and limit for a single Airflow scheduler replica.|

<h2 id="tocS_SoftwareConfig">SoftwareConfig</h2>
<!-- backwards compatibility -->
<a id="schemasoftwareconfig"></a>
<a id="schema_SoftwareConfig"></a>
<a id="tocSsoftwareconfig"></a>
<a id="tocssoftwareconfig"></a>

```json
{
  "airflowConfigOverrides": {
    "property1": "string",
    "property2": "string"
  },
  "cloudDataLineageIntegration": {
    "enabled": true
  },
  "envVariables": {
    "property1": "string",
    "property2": "string"
  },
  "imageVersion": "string",
  "pypiPackages": {
    "property1": "string",
    "property2": "string"
  },
  "pythonVersion": "string",
  "schedulerCount": 0
}
```

Specifies the selection and configuration of software inside the environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airflowConfigOverrides|object|false|none|Optional. Apache Airflow configuration properties to override. Property keys contain the section and property names, separated by a hyphen, for example "core-dags_are_paused_at_creation". Section names must not contain hyphens ("-"), opening square brackets ("["), or closing square brackets ("]"). The property name must not be empty and must not contain an equals sign ("=") or semicolon (";"). Section and property names must not contain a period ("."). Apache Airflow configuration property names must be written in [snake_case](https://en.wikipedia.org/wiki/Snake_case). Property values can contain any character, and can be written in any lower/upper case format. Certain Apache Airflow configuration property values are [blocked](/composer/docs/concepts/airflow-configurations), and cannot be overridden.|
|cloudDataLineageIntegration|[CloudDataLineageIntegration](#schemaclouddatalineageintegration)|false|none|Optional. The configuration for Cloud Data Lineage integration.|
|envVariables|object|false|none|Optional. Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes. Environment variable names must match the regular expression `a-zA-Z_*`. They cannot specify Apache Airflow software configuration overrides (they cannot match the regular expression `AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+`), and they cannot match any of the following reserved names: * `AIRFLOW_HOME` * `C_FORCE_ROOT` * `CONTAINER_NAME` * `DAGS_FOLDER` * `GCP_PROJECT` * `GCS_BUCKET` * `GKE_CLUSTER_NAME` * `SQL_DATABASE` * `SQL_INSTANCE` * `SQL_PASSWORD` * `SQL_PROJECT` * `SQL_REGION` * `SQL_USER`|
|imageVersion|string|false|none|The version of the software running in the environment. This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression `composer-([0-9]+(\.[0-9]+\.[0-9]+(-preview\.[0-9]+)?)?\|latest)-airflow-([0-9]+(\.[0-9]+(\.[0-9]+)?)?)`. When used as input, the server also checks if the provided version is supported and denies the request for an unsupported version. The Cloud Composer portion of the image version is a full [semantic version](https://semver.org), or an alias in the form of major version number or `latest`. When an alias is provided, the server replaces it with the current Cloud Composer version that satisfies the alias. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. When an alias is provided, the server replaces it with the latest Apache Airflow version that satisfies the alias and is supported in the given Cloud Composer version. In all cases, the resolved image version is stored in the same field. See also [version list](/composer/docs/concepts/versioning/composer-versions) and [versioning overview](/composer/docs/concepts/versioning/composer-versioning-overview).|
|pypiPackages|object|false|none|Optional. Custom Python Package Index (PyPI) packages to be installed in the environment. Keys refer to the lowercase package name such as "numpy" and values are the lowercase extras and version specifier such as "==1.12.0", "[devel,gcp_api]", or "[devel]>=1.8.2, <1.9.2". To specify a package without pinning it to a version specifier, use the empty string as the value.|
|pythonVersion|string|false|none|Optional. The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes. Can be set to '2' or '3'. If not specified, the default is '3'. Cannot be updated. This field is only supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use Python major version 3.|
|schedulerCount|integer(int32)|false|none|Optional. The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*.|

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

<h2 id="tocS_TriggererResource">TriggererResource</h2>
<!-- backwards compatibility -->
<a id="schematriggererresource"></a>
<a id="schema_TriggererResource"></a>
<a id="tocStriggererresource"></a>
<a id="tocstriggererresource"></a>

```json
{
  "count": 0,
  "cpu": 0,
  "memoryGb": 0
}
```

Configuration for resources used by Airflow triggerers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|Optional. The number of triggerers.|
|cpu|number(float)|false|none|Optional. CPU request and limit for a single Airflow triggerer replica.|
|memoryGb|number(float)|false|none|Optional. Memory (GB) request and limit for a single Airflow triggerer replica.|

<h2 id="tocS_WebServerConfig">WebServerConfig</h2>
<!-- backwards compatibility -->
<a id="schemawebserverconfig"></a>
<a id="schema_WebServerConfig"></a>
<a id="tocSwebserverconfig"></a>
<a id="tocswebserverconfig"></a>

```json
{
  "machineType": "string"
}
```

The configuration settings for the Airflow web server App Engine instance. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|machineType|string|false|none|Optional. Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. If not specified, composer-n1-webserver-2 will be used. Value custom is returned only in response, if Airflow web server parameters were manually changed to a non-standard values.|

<h2 id="tocS_WebServerNetworkAccessControl">WebServerNetworkAccessControl</h2>
<!-- backwards compatibility -->
<a id="schemawebservernetworkaccesscontrol"></a>
<a id="schema_WebServerNetworkAccessControl"></a>
<a id="tocSwebservernetworkaccesscontrol"></a>
<a id="tocswebservernetworkaccesscontrol"></a>

```json
{
  "allowedIpRanges": [
    {
      "description": "string",
      "value": "string"
    }
  ]
}
```

Network-level access control policy for the Airflow web server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedIpRanges|[[AllowedIpRange](#schemaallowediprange)]|false|none|A collection of allowed IP ranges with descriptions.|

<h2 id="tocS_WebServerResource">WebServerResource</h2>
<!-- backwards compatibility -->
<a id="schemawebserverresource"></a>
<a id="schema_WebServerResource"></a>
<a id="tocSwebserverresource"></a>
<a id="tocswebserverresource"></a>

```json
{
  "cpu": 0,
  "memoryGb": 0,
  "storageGb": 0
}
```

Configuration for resources used by Airflow web server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpu|number(float)|false|none|Optional. CPU request and limit for Airflow web server.|
|memoryGb|number(float)|false|none|Optional. Memory (GB) request and limit for Airflow web server.|
|storageGb|number(float)|false|none|Optional. Storage (GB) request and limit for Airflow web server.|

<h2 id="tocS_WorkerResource">WorkerResource</h2>
<!-- backwards compatibility -->
<a id="schemaworkerresource"></a>
<a id="schema_WorkerResource"></a>
<a id="tocSworkerresource"></a>
<a id="tocsworkerresource"></a>

```json
{
  "cpu": 0,
  "maxCount": 0,
  "memoryGb": 0,
  "minCount": 0,
  "storageGb": 0
}
```

Configuration for resources used by Airflow workers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpu|number(float)|false|none|Optional. CPU request and limit for a single Airflow worker replica.|
|maxCount|integer(int32)|false|none|Optional. Maximum number of workers for autoscaling.|
|memoryGb|number(float)|false|none|Optional. Memory (GB) request and limit for a single Airflow worker replica.|
|minCount|integer(int32)|false|none|Optional. Minimum number of workers for autoscaling.|
|storageGb|number(float)|false|none|Optional. Storage (GB) request and limit for a single Airflow worker replica.|

<h2 id="tocS_WorkloadsConfig">WorkloadsConfig</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadsconfig"></a>
<a id="schema_WorkloadsConfig"></a>
<a id="tocSworkloadsconfig"></a>
<a id="tocsworkloadsconfig"></a>

```json
{
  "scheduler": {
    "count": 0,
    "cpu": 0,
    "memoryGb": 0,
    "storageGb": 0
  },
  "triggerer": {
    "count": 0,
    "cpu": 0,
    "memoryGb": 0
  },
  "webServer": {
    "cpu": 0,
    "memoryGb": 0,
    "storageGb": 0
  },
  "worker": {
    "cpu": 0,
    "maxCount": 0,
    "memoryGb": 0,
    "minCount": 0,
    "storageGb": 0
  }
}
```

The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scheduler|[SchedulerResource](#schemaschedulerresource)|false|none|Optional. Resources used by Airflow schedulers.|
|triggerer|[TriggererResource](#schematriggererresource)|false|none|Optional. Resources used by Airflow triggerers.|
|webServer|[WebServerResource](#schemawebserverresource)|false|none|Optional. Resources used by Airflow web server.|
|worker|[WorkerResource](#schemaworkerresource)|false|none|Optional. Resources used by Airflow workers.|
