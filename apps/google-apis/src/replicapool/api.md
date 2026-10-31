<h1 id="replica-pool">Replica Pool v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Replica Pool API allows users to declaratively provision and manage groups of Google Compute Engine instances based on a common template.

Base URLs:

* <a href="https://www.googleapis.com/replicapool/v1beta1/projects">https://www.googleapis.com/replicapool/v1beta1/projects</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/compute/docs/replica-pool/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|View and manage your data across Google Cloud Platform services|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud Platform services|
|https://www.googleapis.com/auth/ndev.cloudman|View and manage your Google Cloud Platform management resources and deployment status information|
|https://www.googleapis.com/auth/ndev.cloudman.readonly|View your Google Cloud Platform management resources and deployment status information|
|https://www.googleapis.com/auth/replicapool|View and manage replica pools|
|https://www.googleapis.com/auth/replicapool.readonly|View replica pools|

- oAuth2 authentication. Oauth 2.0 accessCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|View and manage your data across Google Cloud Platform services|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud Platform services|
|https://www.googleapis.com/auth/ndev.cloudman|View and manage your Google Cloud Platform management resources and deployment status information|
|https://www.googleapis.com/auth/ndev.cloudman.readonly|View your Google Cloud Platform management resources and deployment status information|
|https://www.googleapis.com/auth/replicapool|View and manage replica pools|
|https://www.googleapis.com/auth/replicapool.readonly|View replica pools|

<h1 id="replica-pool-pools">pools</h1>

## replicapool.pools.list

<a id="opIdreplicapool.pools.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/zones/string/pools \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{projectName}/zones/{zone}/pools`

List all replica pools.

<h3 id="replicapoolpoolslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The project ID for this request.|
|zone|path|string|true|The zone for this replica pool.|
|maxResults|query|integer|false|Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)|
|pageToken|query|string|false|Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="replicapoolpoolslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PoolsListResponse](#schemapoolslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/replicapool ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/replicapool ), Oauth2 ( Scopes: https://www.googleapis.com/auth/replicapool.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/replicapool.readonly )
</aside>

## replicapool.pools.insert

<a id="opIdreplicapool.pools.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/zones/string/pools \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "autoRestart": true,
    "baseInstanceName": "string",
    "currentNumReplicas": 0,
    "description": "string",
    "healthChecks": [
      {
        "checkIntervalSec": 0,
        "description": "string",
        "healthyThreshold": 0,
        "host": "string",
        "name": "string",
        "path": "string",
        "port": 0,
        "timeoutSec": 0,
        "unhealthyThreshold": 0
      }
    ],
    "initialNumReplicas": 0,
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "name": "string",
    "numReplicas": 0,
    "resourceViews": [
      "string"
    ],
    "selfLink": "string",
    "targetPool": "string",
    "targetPools": [
      "string"
    ],
    "template": {
      "action": {
        "commands": [
          "string"
        ],
        "envVariables": [
          {
            "hidden": true,
            "name": "string",
            "value": "string"
          }
        ],
        "timeoutMilliSeconds": 0
      },
      "healthChecks": [
        {
          "checkIntervalSec": 0,
          "description": "string",
          "healthyThreshold": 0,
          "host": "string",
          "name": "string",
          "path": "string",
          "port": 0,
          "timeoutSec": 0,
          "unhealthyThreshold": 0
        }
      ],
      "version": "string",
      "vmParams": {
        "baseInstanceName": "string",
        "canIpForward": true,
        "description": "string",
        "disksToAttach": [
          {
            "attachment": {
              "deviceName": "string",
              "index": 0
            },
            "source": "string"
          }
        ],
        "disksToCreate": [
          {
            "attachment": {
              "deviceName": "string",
              "index": 0
            },
            "autoDelete": true,
            "boot": true,
            "initializeParams": {
              "diskSizeGb": "string",
              "diskType": "string",
              "sourceImage": "string"
            }
          }
        ],
        "machineType": "string",
        "metadata": {
          "fingerPrint": "string",
          "items": [
            {
              "key": "string",
              "value": "string"
            }
          ]
        },
        "networkInterfaces": [
          {
            "accessConfigs": [
              {
                "name": "string",
                "natIp": "string",
                "type": "string"
              }
            ],
            "network": "string",
            "networkIp": "string"
          }
        ],
        "onHostMaintenance": "string",
        "serviceAccounts": [
          {
            "email": "string",
            "scopes": [
              "string"
            ]
          }
        ],
        "tags": {
          "fingerPrint": "string",
          "items": [
            "string"
          ]
        }
      }
    },
    "type": "string"
  }'
```

`POST /{projectName}/zones/{zone}/pools`

Inserts a new replica pool.

> Body parameter

```json
{
  "autoRestart": true,
  "baseInstanceName": "string",
  "currentNumReplicas": 0,
  "description": "string",
  "healthChecks": [
    {
      "checkIntervalSec": 0,
      "description": "string",
      "healthyThreshold": 0,
      "host": "string",
      "name": "string",
      "path": "string",
      "port": 0,
      "timeoutSec": 0,
      "unhealthyThreshold": 0
    }
  ],
  "initialNumReplicas": 0,
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "numReplicas": 0,
  "resourceViews": [
    "string"
  ],
  "selfLink": "string",
  "targetPool": "string",
  "targetPools": [
    "string"
  ],
  "template": {
    "action": {
      "commands": [
        "string"
      ],
      "envVariables": [
        {
          "hidden": true,
          "name": "string",
          "value": "string"
        }
      ],
      "timeoutMilliSeconds": 0
    },
    "healthChecks": [
      {
        "checkIntervalSec": 0,
        "description": "string",
        "healthyThreshold": 0,
        "host": "string",
        "name": "string",
        "path": "string",
        "port": 0,
        "timeoutSec": 0,
        "unhealthyThreshold": 0
      }
    ],
    "version": "string",
    "vmParams": {
      "baseInstanceName": "string",
      "canIpForward": true,
      "description": "string",
      "disksToAttach": [
        {
          "attachment": {
            "deviceName": "string",
            "index": 0
          },
          "source": "string"
        }
      ],
      "disksToCreate": [
        {
          "attachment": {
            "deviceName": "string",
            "index": 0
          },
          "autoDelete": true,
          "boot": true,
          "initializeParams": {
            "diskSizeGb": "string",
            "diskType": "string",
            "sourceImage": "string"
          }
        }
      ],
      "machineType": "string",
      "metadata": {
        "fingerPrint": "string",
        "items": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "networkInterfaces": [
        {
          "accessConfigs": [
            {
              "name": "string",
              "natIp": "string",
              "type": "string"
            }
          ],
          "network": "string",
          "networkIp": "string"
        }
      ],
      "onHostMaintenance": "string",
      "serviceAccounts": [
        {
          "email": "string",
          "scopes": [
            "string"
          ]
        }
      ],
      "tags": {
        "fingerPrint": "string",
        "items": [
          "string"
        ]
      }
    }
  },
  "type": "string"
}
```

<h3 id="replicapoolpoolsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The project ID for this replica pool.|
|zone|path|string|true|The zone for this replica pool.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Pool](#schemapool)|false|none|
|» autoRestart|body|boolean|false|Whether replicas in this pool should be restarted if they experience a failure. The default value is true.|
|» baseInstanceName|body|string|false|The base instance name to use for the replicas in this pool. This must match the regex [a-z]([-a-z0-9]*[a-z0-9])?. If specified, the instances in this replica pool will be named in the format <base-instance-name>-<ID>. The <ID> postfix will be a four character alphanumeric identifier generated by the service.<br><br>If this is not specified by the user, a random base instance name is generated by the service.|
|» currentNumReplicas|body|integer(int32)|false|[Output Only] The current number of replicas in the pool.|
|» description|body|string|false|An optional description of the replica pool.|
|» healthChecks|body|[[HealthCheck](#schemahealthcheck)]|false|Deprecated. Please use template[].healthChecks instead.|
|» initialNumReplicas|body|integer(int32)|false|The initial number of replicas this pool should have. You must provide a value greater than or equal to 0.|
|» labels|body|[[Label](#schemalabel)]|false|A list of labels to attach to this replica pool and all created virtual machines in this replica pool.|
|» name|body|string|false|The name of the replica pool. Must follow the regex [a-z]([-a-z0-9]*[a-z0-9])? and be 1-28 characters long.|
|» numReplicas|body|integer(int32)|false|Deprecated! Use initial_num_replicas instead.|
|» resourceViews|body|[string]|false|The list of resource views that should be updated with all the replicas that are managed by this pool.|
|» selfLink|body|string|false|[Output Only] A self-link to the replica pool.|
|» targetPool|body|string|false|Deprecated, please use target_pools instead.|
|» targetPools|body|[string]|false|A list of target pools to update with the replicas that are managed by this pool. If specified, the replicas in this replica pool will be added to the specified target pools for load balancing purposes. The replica pool must live in the same region as the specified target pools. These values must be the target pool resource names, and not fully qualified URLs.|
|» template|body|[Template](#schematemplate)|false|The template to use when creating replicas in this pool. This template is used during initial instance creation of the pool, when growing the pool in size, or when a replica restarts.|
|» type|body|string|false|Deprecated! Do not set.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="replicapoolpoolsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Pool](#schemapool)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/replicapool ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/replicapool )
</aside>

## replicapool.pools.get

<a id="opIdreplicapool.pools.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/zones/string/pools/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{projectName}/zones/{zone}/pools/{poolName}`

Gets information about a single replica pool.

<h3 id="replicapoolpoolsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The project ID for this replica pool.|
|zone|path|string|true|The zone for this replica pool.|
|poolName|path|string|true|The name of the replica pool for this request.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="replicapoolpoolsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Pool](#schemapool)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/replicapool ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/replicapool ), Oauth2 ( Scopes: https://www.googleapis.com/auth/replicapool.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/replicapool.readonly )
</aside>

## replicapool.pools.delete

<a id="opIdreplicapool.pools.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/zones/string/pools/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "abandonInstances": [
      "string"
    ]
  }'
```

`POST /{projectName}/zones/{zone}/pools/{poolName}`

Deletes a replica pool.

> Body parameter

```json
{
  "abandonInstances": [
    "string"
  ]
}
```

<h3 id="replicapoolpoolsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The project ID for this replica pool.|
|zone|path|string|true|The zone for this replica pool.|
|poolName|path|string|true|The name of the replica pool for this request.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[PoolsDeleteRequest](#schemapoolsdeleterequest)|false|none|
|» abandonInstances|body|[string]|false|If there are instances you would like to keep, you can specify them here. These instances won't be deleted, but the associated replica objects will be removed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="replicapoolpoolsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/replicapool ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/replicapool )
</aside>

## replicapool.pools.resize

<a id="opIdreplicapool.pools.resize"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/zones/string/pools/string/resize \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{projectName}/zones/{zone}/pools/{poolName}/resize`

Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.

<h3 id="replicapoolpoolsresize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The project ID for this replica pool.|
|zone|path|string|true|The zone for this replica pool.|
|poolName|path|string|true|The name of the replica pool for this request.|
|numReplicas|query|integer|false|The desired number of replicas to resize to. If this number is larger than the existing number of replicas, new replicas will be added. If the number is smaller, then existing replicas will be deleted.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="replicapoolpoolsresize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Pool](#schemapool)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/replicapool ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/replicapool )
</aside>

## replicapool.pools.updatetemplate

<a id="opIdreplicapool.pools.updatetemplate"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/zones/string/pools/string/updateTemplate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": {
      "commands": [
        "string"
      ],
      "envVariables": [
        {
          "hidden": true,
          "name": "string",
          "value": "string"
        }
      ],
      "timeoutMilliSeconds": 0
    },
    "healthChecks": [
      {
        "checkIntervalSec": 0,
        "description": "string",
        "healthyThreshold": 0,
        "host": "string",
        "name": "string",
        "path": "string",
        "port": 0,
        "timeoutSec": 0,
        "unhealthyThreshold": 0
      }
    ],
    "version": "string",
    "vmParams": {
      "baseInstanceName": "string",
      "canIpForward": true,
      "description": "string",
      "disksToAttach": [
        {
          "attachment": {
            "deviceName": "string",
            "index": 0
          },
          "source": "string"
        }
      ],
      "disksToCreate": [
        {
          "attachment": {
            "deviceName": "string",
            "index": 0
          },
          "autoDelete": true,
          "boot": true,
          "initializeParams": {
            "diskSizeGb": "string",
            "diskType": "string",
            "sourceImage": "string"
          }
        }
      ],
      "machineType": "string",
      "metadata": {
        "fingerPrint": "string",
        "items": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "networkInterfaces": [
        {
          "accessConfigs": [
            {
              "name": "string",
              "natIp": "string",
              "type": "string"
            }
          ],
          "network": "string",
          "networkIp": "string"
        }
      ],
      "onHostMaintenance": "string",
      "serviceAccounts": [
        {
          "email": "string",
          "scopes": [
            "string"
          ]
        }
      ],
      "tags": {
        "fingerPrint": "string",
        "items": [
          "string"
        ]
      }
    }
  }'
```

`POST /{projectName}/zones/{zone}/pools/{poolName}/updateTemplate`

Update the template used by the pool.

> Body parameter

```json
{
  "action": {
    "commands": [
      "string"
    ],
    "envVariables": [
      {
        "hidden": true,
        "name": "string",
        "value": "string"
      }
    ],
    "timeoutMilliSeconds": 0
  },
  "healthChecks": [
    {
      "checkIntervalSec": 0,
      "description": "string",
      "healthyThreshold": 0,
      "host": "string",
      "name": "string",
      "path": "string",
      "port": 0,
      "timeoutSec": 0,
      "unhealthyThreshold": 0
    }
  ],
  "version": "string",
  "vmParams": {
    "baseInstanceName": "string",
    "canIpForward": true,
    "description": "string",
    "disksToAttach": [
      {
        "attachment": {
          "deviceName": "string",
          "index": 0
        },
        "source": "string"
      }
    ],
    "disksToCreate": [
      {
        "attachment": {
          "deviceName": "string",
          "index": 0
        },
        "autoDelete": true,
        "boot": true,
        "initializeParams": {
          "diskSizeGb": "string",
          "diskType": "string",
          "sourceImage": "string"
        }
      }
    ],
    "machineType": "string",
    "metadata": {
      "fingerPrint": "string",
      "items": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    },
    "networkInterfaces": [
      {
        "accessConfigs": [
          {
            "name": "string",
            "natIp": "string",
            "type": "string"
          }
        ],
        "network": "string",
        "networkIp": "string"
      }
    ],
    "onHostMaintenance": "string",
    "serviceAccounts": [
      {
        "email": "string",
        "scopes": [
          "string"
        ]
      }
    ],
    "tags": {
      "fingerPrint": "string",
      "items": [
        "string"
      ]
    }
  }
}
```

<h3 id="replicapoolpoolsupdatetemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The project ID for this replica pool.|
|zone|path|string|true|The zone for this replica pool.|
|poolName|path|string|true|The name of the replica pool for this request.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Template](#schematemplate)|false|none|
|» action|body|[Action](#schemaaction)|false|An action to run during initialization of your replicas. An action is run as shell commands which are executed one after the other in the same bash shell, so any state established by one command is inherited by later commands.|
|» healthChecks|body|[[HealthCheck](#schemahealthcheck)]|false|A list of HTTP Health Checks to configure for this replica pool and all virtual machines in this replica pool.|
|» version|body|string|false|A free-form string describing the version of this template. You can provide any versioning string you would like. For example, version1 or template-v1.|
|» vmParams|body|[VmParams](#schemavmparams)|false|The virtual machine parameters to use for creating replicas. You can define settings such as the machine type and the image of replicas in this pool. This is required if replica type is SMART_VM.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="replicapoolpoolsupdatetemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/replicapool ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/replicapool )
</aside>

<h1 id="replica-pool-replicas">replicas</h1>

## replicapool.replicas.list

<a id="opIdreplicapool.replicas.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/zones/string/pools/string/replicas \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{projectName}/zones/{zone}/pools/{poolName}/replicas`

Lists all replicas in a pool.

<h3 id="replicapoolreplicaslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The project ID for this request.|
|zone|path|string|true|The zone where the replica pool lives.|
|poolName|path|string|true|The replica pool name for this request.|
|maxResults|query|integer|false|Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)|
|pageToken|query|string|false|Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="replicapoolreplicaslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReplicasListResponse](#schemareplicaslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/replicapool ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/replicapool ), Oauth2 ( Scopes: https://www.googleapis.com/auth/replicapool.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/replicapool.readonly )
</aside>

## replicapool.replicas.get

<a id="opIdreplicapool.replicas.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/zones/string/pools/string/replicas/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}`

Gets information about a specific replica.

<h3 id="replicapoolreplicasget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The project ID for this request.|
|zone|path|string|true|The zone where the replica lives.|
|poolName|path|string|true|The replica pool name for this request.|
|replicaName|path|string|true|The name of the replica for this request.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="replicapoolreplicasget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Replica](#schemareplica)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/replicapool ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/replicapool ), Oauth2 ( Scopes: https://www.googleapis.com/auth/replicapool.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/replicapool.readonly )
</aside>

## replicapool.replicas.delete

<a id="opIdreplicapool.replicas.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/zones/string/pools/string/replicas/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "abandonInstance": true
  }'
```

`POST /{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}`

Deletes a replica from the pool.

> Body parameter

```json
{
  "abandonInstance": true
}
```

<h3 id="replicapoolreplicasdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The project ID for this request.|
|zone|path|string|true|The zone where the replica lives.|
|poolName|path|string|true|The replica pool name for this request.|
|replicaName|path|string|true|The name of the replica for this request.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[ReplicasDeleteRequest](#schemareplicasdeleterequest)|false|none|
|» abandonInstance|body|boolean|false|Whether the instance resource represented by this replica should be deleted or abandoned. If abandoned, the replica will be deleted but the virtual machine instance will remain. By default, this is set to false and the instance will be deleted along with the replica.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="replicapoolreplicasdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Replica](#schemareplica)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/replicapool ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/replicapool )
</aside>

## replicapool.replicas.restart

<a id="opIdreplicapool.replicas.restart"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/zones/string/pools/string/replicas/string/restart \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}/restart`

Restarts a replica in a pool.

<h3 id="replicapoolreplicasrestart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The project ID for this request.|
|zone|path|string|true|The zone where the replica lives.|
|poolName|path|string|true|The replica pool name for this request.|
|replicaName|path|string|true|The name of the replica for this request.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="replicapoolreplicasrestart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Replica](#schemareplica)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/replicapool ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/replicapool )
</aside>

# Schemas

<h2 id="tocS_AccessConfig">AccessConfig</h2>
<!-- backwards compatibility -->
<a id="schemaaccessconfig"></a>
<a id="schema_AccessConfig"></a>
<a id="tocSaccessconfig"></a>
<a id="tocsaccessconfig"></a>

```json
{
  "name": "string",
  "natIp": "string",
  "type": "string"
}
```

A Compute Engine network accessConfig. Identical to the accessConfig on corresponding Compute Engine resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of this access configuration.|
|natIp|string|false|none|An external IP address associated with this instance.|
|type|string|false|none|Type of this access configuration file. Currently only ONE_TO_ONE_NAT is supported.|

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "commands": [
    "string"
  ],
  "envVariables": [
    {
      "hidden": true,
      "name": "string",
      "value": "string"
    }
  ],
  "timeoutMilliSeconds": 0
}
```

An action that gets executed during initialization of the replicas.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commands|[string]|false|none|A list of commands to run, one per line. If any command fails, the whole action is considered a failure and no further actions are run. This also marks the virtual machine or replica as a failure.|
|envVariables|[[EnvVariable](#schemaenvvariable)]|false|none|A list of environment variables to use for the commands in this action.|
|timeoutMilliSeconds|integer(int32)|false|none|If an action's commands on a particular replica do not finish in the specified timeoutMilliSeconds, the replica is considered to be in a FAILING state. No efforts are made to stop any processes that were spawned or created as the result of running the action's commands. The default is the max allowed value, 1 hour (i.e. 3600000 milliseconds).|

<h2 id="tocS_DiskAttachment">DiskAttachment</h2>
<!-- backwards compatibility -->
<a id="schemadiskattachment"></a>
<a id="schema_DiskAttachment"></a>
<a id="tocSdiskattachment"></a>
<a id="tocsdiskattachment"></a>

```json
{
  "deviceName": "string",
  "index": 0
}
```

Specifies how to attach a disk to a Replica.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceName|string|false|none|The device name of this disk.|
|index|integer(uint32)|false|none|A zero-based index to assign to this disk, where 0 is reserved for the boot disk. If not specified, this is assigned by the server.|

<h2 id="tocS_EnvVariable">EnvVariable</h2>
<!-- backwards compatibility -->
<a id="schemaenvvariable"></a>
<a id="schema_EnvVariable"></a>
<a id="tocSenvvariable"></a>
<a id="tocsenvvariable"></a>

```json
{
  "hidden": true,
  "name": "string",
  "value": "string"
}
```

An environment variable to set for an action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hidden|boolean|false|none|Deprecated, do not use.|
|name|string|false|none|The name of the environment variable.|
|value|string|false|none|The value of the variable.|

<h2 id="tocS_ExistingDisk">ExistingDisk</h2>
<!-- backwards compatibility -->
<a id="schemaexistingdisk"></a>
<a id="schema_ExistingDisk"></a>
<a id="tocSexistingdisk"></a>
<a id="tocsexistingdisk"></a>

```json
{
  "attachment": {
    "deviceName": "string",
    "index": 0
  },
  "source": "string"
}
```

A pre-existing persistent disk that will be attached to every Replica in the Pool in READ_ONLY mode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachment|[DiskAttachment](#schemadiskattachment)|false|none|How the disk will be attached to the Replica.|
|source|string|false|none|The name of the Persistent Disk resource. The Persistent Disk resource must be in the same zone as the Pool.|

<h2 id="tocS_HealthCheck">HealthCheck</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheck"></a>
<a id="schema_HealthCheck"></a>
<a id="tocShealthcheck"></a>
<a id="tocshealthcheck"></a>

```json
{
  "checkIntervalSec": 0,
  "description": "string",
  "healthyThreshold": 0,
  "host": "string",
  "name": "string",
  "path": "string",
  "port": 0,
  "timeoutSec": 0,
  "unhealthyThreshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkIntervalSec|integer(int32)|false|none|How often (in seconds) to make HTTP requests for this healthcheck. The default value is 5 seconds.|
|description|string|false|none|The description for this health check.|
|healthyThreshold|integer(int32)|false|none|The number of consecutive health check requests that need to succeed before the replica is considered healthy again. The default value is 2.|
|host|string|false|none|The value of the host header in the HTTP health check request. If left empty (default value), the localhost IP 127.0.0.1 will be used.|
|name|string|false|none|The name of this health check.|
|path|string|false|none|The localhost request path to send this health check, in the format /path/to/use. For example, /healthcheck.|
|port|integer(int32)|false|none|The TCP port for the health check requests.|
|timeoutSec|integer(int32)|false|none|How long (in seconds) to wait before a timeout failure for this healthcheck. The default value is 5 seconds.|
|unhealthyThreshold|integer(int32)|false|none|The number of consecutive health check requests that need to fail in order to consider the replica unhealthy. The default value is 2.|

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

A label to apply to this replica pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The key for this label.|
|value|string|false|none|The value of this label.|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "fingerPrint": "string",
  "items": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fingerPrint|string|false|none|The fingerprint of the metadata. Required for updating the metadata entries for this instance.|
|items|[[MetadataItem](#schemametadataitem)]|false|none|A list of metadata items.|

<h2 id="tocS_MetadataItem">MetadataItem</h2>
<!-- backwards compatibility -->
<a id="schemametadataitem"></a>
<a id="schema_MetadataItem"></a>
<a id="tocSmetadataitem"></a>
<a id="tocsmetadataitem"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

A Compute Engine metadata item, defined as a key:value pair. Identical to the metadata on the corresponding Compute Engine resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|A metadata key.|
|value|string|false|none|A metadata value.|

<h2 id="tocS_NetworkInterface">NetworkInterface</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterface"></a>
<a id="schema_NetworkInterface"></a>
<a id="tocSnetworkinterface"></a>
<a id="tocsnetworkinterface"></a>

```json
{
  "accessConfigs": [
    {
      "name": "string",
      "natIp": "string",
      "type": "string"
    }
  ],
  "network": "string",
  "networkIp": "string"
}
```

A Compute Engine NetworkInterface resource. Identical to the NetworkInterface on the corresponding Compute Engine resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessConfigs|[[AccessConfig](#schemaaccessconfig)]|false|none|An array of configurations for this interface. This specifies how this interface is configured to interact with other network services.|
|network|string|false|none|Name the Network resource to which this interface applies.|
|networkIp|string|false|none|An optional IPV4 internal network address to assign to the instance for this network interface.|

<h2 id="tocS_NewDisk">NewDisk</h2>
<!-- backwards compatibility -->
<a id="schemanewdisk"></a>
<a id="schema_NewDisk"></a>
<a id="tocSnewdisk"></a>
<a id="tocsnewdisk"></a>

```json
{
  "attachment": {
    "deviceName": "string",
    "index": 0
  },
  "autoDelete": true,
  "boot": true,
  "initializeParams": {
    "diskSizeGb": "string",
    "diskType": "string",
    "sourceImage": "string"
  }
}
```

A Persistent Disk resource that will be created and attached to each Replica in the Pool. Each Replica will have a unique persistent disk that is created and attached to that Replica in READ_WRITE mode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachment|[DiskAttachment](#schemadiskattachment)|false|none|How the disk will be attached to the Replica.|
|autoDelete|boolean|false|none|If true, then this disk will be deleted when the instance is deleted. The default value is true.|
|boot|boolean|false|none|If true, indicates that this is the root persistent disk.|
|initializeParams|[NewDiskInitializeParams](#schemanewdiskinitializeparams)|false|none|Create the new disk using these parameters. The name of the disk will be <instance_name>-<four_random_charactersgt;.|

<h2 id="tocS_NewDiskInitializeParams">NewDiskInitializeParams</h2>
<!-- backwards compatibility -->
<a id="schemanewdiskinitializeparams"></a>
<a id="schema_NewDiskInitializeParams"></a>
<a id="tocSnewdiskinitializeparams"></a>
<a id="tocsnewdiskinitializeparams"></a>

```json
{
  "diskSizeGb": "string",
  "diskType": "string",
  "sourceImage": "string"
}
```

Initialization parameters for creating a new disk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskSizeGb|string(int64)|false|none|The size of the created disk in gigabytes.|
|diskType|string|false|none|Name of the disk type resource describing which disk type to use to create the disk. For example 'pd-ssd' or 'pd-standard'. Default is 'pd-standard'|
|sourceImage|string|false|none|The name or fully-qualified URL of a source image to use to create this disk. If you provide a name of the source image, Replica Pool will look for an image with that name in your project. If you are specifying an image provided by Compute Engine, you will need to provide the full URL with the correct project, such as:<br>http://www.googleapis.com/compute/v1/projects/debian-cloud/ global/images/debian-wheezy-7-vYYYYMMDD|

<h2 id="tocS_Pool">Pool</h2>
<!-- backwards compatibility -->
<a id="schemapool"></a>
<a id="schema_Pool"></a>
<a id="tocSpool"></a>
<a id="tocspool"></a>

```json
{
  "autoRestart": true,
  "baseInstanceName": "string",
  "currentNumReplicas": 0,
  "description": "string",
  "healthChecks": [
    {
      "checkIntervalSec": 0,
      "description": "string",
      "healthyThreshold": 0,
      "host": "string",
      "name": "string",
      "path": "string",
      "port": 0,
      "timeoutSec": 0,
      "unhealthyThreshold": 0
    }
  ],
  "initialNumReplicas": 0,
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "numReplicas": 0,
  "resourceViews": [
    "string"
  ],
  "selfLink": "string",
  "targetPool": "string",
  "targetPools": [
    "string"
  ],
  "template": {
    "action": {
      "commands": [
        "string"
      ],
      "envVariables": [
        {
          "hidden": true,
          "name": "string",
          "value": "string"
        }
      ],
      "timeoutMilliSeconds": 0
    },
    "healthChecks": [
      {
        "checkIntervalSec": 0,
        "description": "string",
        "healthyThreshold": 0,
        "host": "string",
        "name": "string",
        "path": "string",
        "port": 0,
        "timeoutSec": 0,
        "unhealthyThreshold": 0
      }
    ],
    "version": "string",
    "vmParams": {
      "baseInstanceName": "string",
      "canIpForward": true,
      "description": "string",
      "disksToAttach": [
        {
          "attachment": {
            "deviceName": "string",
            "index": 0
          },
          "source": "string"
        }
      ],
      "disksToCreate": [
        {
          "attachment": {
            "deviceName": "string",
            "index": 0
          },
          "autoDelete": true,
          "boot": true,
          "initializeParams": {
            "diskSizeGb": "string",
            "diskType": "string",
            "sourceImage": "string"
          }
        }
      ],
      "machineType": "string",
      "metadata": {
        "fingerPrint": "string",
        "items": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "networkInterfaces": [
        {
          "accessConfigs": [
            {
              "name": "string",
              "natIp": "string",
              "type": "string"
            }
          ],
          "network": "string",
          "networkIp": "string"
        }
      ],
      "onHostMaintenance": "string",
      "serviceAccounts": [
        {
          "email": "string",
          "scopes": [
            "string"
          ]
        }
      ],
      "tags": {
        "fingerPrint": "string",
        "items": [
          "string"
        ]
      }
    }
  },
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoRestart|boolean|false|none|Whether replicas in this pool should be restarted if they experience a failure. The default value is true.|
|baseInstanceName|string|false|none|The base instance name to use for the replicas in this pool. This must match the regex [a-z]([-a-z0-9]*[a-z0-9])?. If specified, the instances in this replica pool will be named in the format <base-instance-name>-<ID>. The <ID> postfix will be a four character alphanumeric identifier generated by the service.<br><br>If this is not specified by the user, a random base instance name is generated by the service.|
|currentNumReplicas|integer(int32)|false|none|[Output Only] The current number of replicas in the pool.|
|description|string|false|none|An optional description of the replica pool.|
|healthChecks|[[HealthCheck](#schemahealthcheck)]|false|none|Deprecated. Please use template[].healthChecks instead.|
|initialNumReplicas|integer(int32)|false|none|The initial number of replicas this pool should have. You must provide a value greater than or equal to 0.|
|labels|[[Label](#schemalabel)]|false|none|A list of labels to attach to this replica pool and all created virtual machines in this replica pool.|
|name|string|false|none|The name of the replica pool. Must follow the regex [a-z]([-a-z0-9]*[a-z0-9])? and be 1-28 characters long.|
|numReplicas|integer(int32)|false|none|Deprecated! Use initial_num_replicas instead.|
|resourceViews|[string]|false|none|The list of resource views that should be updated with all the replicas that are managed by this pool.|
|selfLink|string|false|none|[Output Only] A self-link to the replica pool.|
|targetPool|string|false|none|Deprecated, please use target_pools instead.|
|targetPools|[string]|false|none|A list of target pools to update with the replicas that are managed by this pool. If specified, the replicas in this replica pool will be added to the specified target pools for load balancing purposes. The replica pool must live in the same region as the specified target pools. These values must be the target pool resource names, and not fully qualified URLs.|
|template|[Template](#schematemplate)|false|none|The template to use when creating replicas in this pool. This template is used during initial instance creation of the pool, when growing the pool in size, or when a replica restarts.|
|type|string|false|none|Deprecated! Do not set.|

<h2 id="tocS_PoolsDeleteRequest">PoolsDeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemapoolsdeleterequest"></a>
<a id="schema_PoolsDeleteRequest"></a>
<a id="tocSpoolsdeleterequest"></a>
<a id="tocspoolsdeleterequest"></a>

```json
{
  "abandonInstances": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abandonInstances|[string]|false|none|If there are instances you would like to keep, you can specify them here. These instances won't be deleted, but the associated replica objects will be removed.|

<h2 id="tocS_PoolsListResponse">PoolsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemapoolslistresponse"></a>
<a id="schema_PoolsListResponse"></a>
<a id="tocSpoolslistresponse"></a>
<a id="tocspoolslistresponse"></a>

```json
{
  "nextPageToken": "string",
  "resources": [
    {
      "autoRestart": true,
      "baseInstanceName": "string",
      "currentNumReplicas": 0,
      "description": "string",
      "healthChecks": [
        {
          "checkIntervalSec": 0,
          "description": "string",
          "healthyThreshold": 0,
          "host": "string",
          "name": "string",
          "path": "string",
          "port": 0,
          "timeoutSec": 0,
          "unhealthyThreshold": 0
        }
      ],
      "initialNumReplicas": 0,
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "name": "string",
      "numReplicas": 0,
      "resourceViews": [
        "string"
      ],
      "selfLink": "string",
      "targetPool": "string",
      "targetPools": [
        "string"
      ],
      "template": {
        "action": {
          "commands": [
            "string"
          ],
          "envVariables": [
            {
              "hidden": true,
              "name": "string",
              "value": "string"
            }
          ],
          "timeoutMilliSeconds": 0
        },
        "healthChecks": [
          {
            "checkIntervalSec": 0,
            "description": "string",
            "healthyThreshold": 0,
            "host": "string",
            "name": "string",
            "path": "string",
            "port": 0,
            "timeoutSec": 0,
            "unhealthyThreshold": 0
          }
        ],
        "version": "string",
        "vmParams": {
          "baseInstanceName": "string",
          "canIpForward": true,
          "description": "string",
          "disksToAttach": [
            {
              "attachment": {
                "deviceName": "string",
                "index": 0
              },
              "source": "string"
            }
          ],
          "disksToCreate": [
            {
              "attachment": {
                "deviceName": "string",
                "index": 0
              },
              "autoDelete": true,
              "boot": true,
              "initializeParams": {
                "diskSizeGb": "string",
                "diskType": "string",
                "sourceImage": "string"
              }
            }
          ],
          "machineType": "string",
          "metadata": {
            "fingerPrint": "string",
            "items": [
              {
                "key": "string",
                "value": "string"
              }
            ]
          },
          "networkInterfaces": [
            {
              "accessConfigs": [
                {
                  "name": "string",
                  "natIp": "string",
                  "type": "string"
                }
              ],
              "network": "string",
              "networkIp": "string"
            }
          ],
          "onHostMaintenance": "string",
          "serviceAccounts": [
            {
              "email": "string",
              "scopes": [
                "string"
              ]
            }
          ],
          "tags": {
            "fingerPrint": "string",
            "items": [
              "string"
            ]
          }
        }
      },
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|none|
|resources|[[Pool](#schemapool)]|false|none|none|

<h2 id="tocS_Replica">Replica</h2>
<!-- backwards compatibility -->
<a id="schemareplica"></a>
<a id="schema_Replica"></a>
<a id="tocSreplica"></a>
<a id="tocsreplica"></a>

```json
{
  "name": "string",
  "selfLink": "string",
  "status": {
    "details": "string",
    "state": "string",
    "templateVersion": "string",
    "vmLink": "string",
    "vmStartTime": "string"
  }
}
```

An individual Replica within a Pool. Replicas are automatically created by the replica pool, using the template provided by the user. You cannot directly create replicas.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|[Output Only] The name of the Replica object.|
|selfLink|string|false|none|[Output Only] The self-link of the Replica.|
|status|[ReplicaStatus](#schemareplicastatus)|false|none|[Output Only] Last known status of the Replica.|

<h2 id="tocS_ReplicaStatus">ReplicaStatus</h2>
<!-- backwards compatibility -->
<a id="schemareplicastatus"></a>
<a id="schema_ReplicaStatus"></a>
<a id="tocSreplicastatus"></a>
<a id="tocsreplicastatus"></a>

```json
{
  "details": "string",
  "state": "string",
  "templateVersion": "string",
  "vmLink": "string",
  "vmStartTime": "string"
}
```

The current status of a Replica.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|none|[Output Only] Human-readable details about the current state of the replica|
|state|string|false|none|[Output Only] The state of the Replica.|
|templateVersion|string|false|none|[Output Only] The template used to build the replica.|
|vmLink|string|false|none|[Output Only] Link to the virtual machine that this Replica represents.|
|vmStartTime|string|false|none|[Output Only] The time that this Replica got to the RUNNING state, in RFC 3339 format. If the start time is unknown, UNKNOWN is returned.|

<h2 id="tocS_ReplicasDeleteRequest">ReplicasDeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemareplicasdeleterequest"></a>
<a id="schema_ReplicasDeleteRequest"></a>
<a id="tocSreplicasdeleterequest"></a>
<a id="tocsreplicasdeleterequest"></a>

```json
{
  "abandonInstance": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abandonInstance|boolean|false|none|Whether the instance resource represented by this replica should be deleted or abandoned. If abandoned, the replica will be deleted but the virtual machine instance will remain. By default, this is set to false and the instance will be deleted along with the replica.|

<h2 id="tocS_ReplicasListResponse">ReplicasListResponse</h2>
<!-- backwards compatibility -->
<a id="schemareplicaslistresponse"></a>
<a id="schema_ReplicasListResponse"></a>
<a id="tocSreplicaslistresponse"></a>
<a id="tocsreplicaslistresponse"></a>

```json
{
  "nextPageToken": "string",
  "resources": [
    {
      "name": "string",
      "selfLink": "string",
      "status": {
        "details": "string",
        "state": "string",
        "templateVersion": "string",
        "vmLink": "string",
        "vmStartTime": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|none|
|resources|[[Replica](#schemareplica)]|false|none|none|

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

A Compute Engine service account, identical to the Compute Engine resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The service account email address, for example: 123845678986@project.gserviceaccount.com|
|scopes|[string]|false|none|The list of OAuth2 scopes to obtain for the service account, for example: https://www.googleapis.com/auth/devstorage.full_control|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "fingerPrint": "string",
  "items": [
    "string"
  ]
}
```

A Compute Engine Instance tag, identical to the tags on the corresponding Compute Engine Instance resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fingerPrint|string|false|none|The fingerprint of the tag. Required for updating the list of tags.|
|items|[string]|false|none|Items contained in this tag.|

<h2 id="tocS_Template">Template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_Template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
{
  "action": {
    "commands": [
      "string"
    ],
    "envVariables": [
      {
        "hidden": true,
        "name": "string",
        "value": "string"
      }
    ],
    "timeoutMilliSeconds": 0
  },
  "healthChecks": [
    {
      "checkIntervalSec": 0,
      "description": "string",
      "healthyThreshold": 0,
      "host": "string",
      "name": "string",
      "path": "string",
      "port": 0,
      "timeoutSec": 0,
      "unhealthyThreshold": 0
    }
  ],
  "version": "string",
  "vmParams": {
    "baseInstanceName": "string",
    "canIpForward": true,
    "description": "string",
    "disksToAttach": [
      {
        "attachment": {
          "deviceName": "string",
          "index": 0
        },
        "source": "string"
      }
    ],
    "disksToCreate": [
      {
        "attachment": {
          "deviceName": "string",
          "index": 0
        },
        "autoDelete": true,
        "boot": true,
        "initializeParams": {
          "diskSizeGb": "string",
          "diskType": "string",
          "sourceImage": "string"
        }
      }
    ],
    "machineType": "string",
    "metadata": {
      "fingerPrint": "string",
      "items": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    },
    "networkInterfaces": [
      {
        "accessConfigs": [
          {
            "name": "string",
            "natIp": "string",
            "type": "string"
          }
        ],
        "network": "string",
        "networkIp": "string"
      }
    ],
    "onHostMaintenance": "string",
    "serviceAccounts": [
      {
        "email": "string",
        "scopes": [
          "string"
        ]
      }
    ],
    "tags": {
      "fingerPrint": "string",
      "items": [
        "string"
      ]
    }
  }
}
```

The template used for creating replicas in the pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[Action](#schemaaction)|false|none|An action to run during initialization of your replicas. An action is run as shell commands which are executed one after the other in the same bash shell, so any state established by one command is inherited by later commands.|
|healthChecks|[[HealthCheck](#schemahealthcheck)]|false|none|A list of HTTP Health Checks to configure for this replica pool and all virtual machines in this replica pool.|
|version|string|false|none|A free-form string describing the version of this template. You can provide any versioning string you would like. For example, version1 or template-v1.|
|vmParams|[VmParams](#schemavmparams)|false|none|The virtual machine parameters to use for creating replicas. You can define settings such as the machine type and the image of replicas in this pool. This is required if replica type is SMART_VM.|

<h2 id="tocS_VmParams">VmParams</h2>
<!-- backwards compatibility -->
<a id="schemavmparams"></a>
<a id="schema_VmParams"></a>
<a id="tocSvmparams"></a>
<a id="tocsvmparams"></a>

```json
{
  "baseInstanceName": "string",
  "canIpForward": true,
  "description": "string",
  "disksToAttach": [
    {
      "attachment": {
        "deviceName": "string",
        "index": 0
      },
      "source": "string"
    }
  ],
  "disksToCreate": [
    {
      "attachment": {
        "deviceName": "string",
        "index": 0
      },
      "autoDelete": true,
      "boot": true,
      "initializeParams": {
        "diskSizeGb": "string",
        "diskType": "string",
        "sourceImage": "string"
      }
    }
  ],
  "machineType": "string",
  "metadata": {
    "fingerPrint": "string",
    "items": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  },
  "networkInterfaces": [
    {
      "accessConfigs": [
        {
          "name": "string",
          "natIp": "string",
          "type": "string"
        }
      ],
      "network": "string",
      "networkIp": "string"
    }
  ],
  "onHostMaintenance": "string",
  "serviceAccounts": [
    {
      "email": "string",
      "scopes": [
        "string"
      ]
    }
  ],
  "tags": {
    "fingerPrint": "string",
    "items": [
      "string"
    ]
  }
}
```

Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseInstanceName|string|false|none|Deprecated. Please use baseInstanceName instead.|
|canIpForward|boolean|false|none|Enables IP Forwarding, which allows this instance to receive packets destined for a different IP address, and send packets with a different source IP. See IP Forwarding for more information.|
|description|string|false|none|An optional textual description of the instance.|
|disksToAttach|[[ExistingDisk](#schemaexistingdisk)]|false|none|A list of existing Persistent Disk resources to attach to each replica in the pool. Each disk will be attached in read-only mode to every replica.|
|disksToCreate|[[NewDisk](#schemanewdisk)]|false|none|A list of Disk resources to create and attach to each Replica in the Pool. Currently, you can only define one disk and it must be a root persistent disk. Note that Replica Pool will create a root persistent disk for each replica.|
|machineType|string|false|none|The machine type for this instance. The resource name (e.g. n1-standard-1).|
|metadata|[Metadata](#schemametadata)|false|none|The metadata key/value pairs assigned to this instance.|
|networkInterfaces|[[NetworkInterface](#schemanetworkinterface)]|false|none|A list of network interfaces for the instance. Currently only one interface is supported by Google Compute Engine, ONE_TO_ONE_NAT.|
|onHostMaintenance|string|false|none|none|
|serviceAccounts|[[ServiceAccount](#schemaserviceaccount)]|false|none|A list of Service Accounts to enable for this instance.|
|tags|[Tag](#schematag)|false|none|A list of tags to apply to the Google Compute Engine instance to identify resources.|
