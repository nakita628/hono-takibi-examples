<h1 id="vsonline">VSOnline v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Public APIs for managing VS Codespaces

Base URLs:

* <a href="https://online.visualstudio.com">https://online.visualstudio.com</a>

# Authentication

- HTTP Authentication, scheme: bearer JWT auth token for the user. Example: eyJ2...

<h1 id="vsonline-agenttelemetry">AgentTelemetry</h1>

## post/api/v1/AgentTelemetry

> Code samples

```bash
curl https://example.com/api/v1/AgentTelemetry \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "level": "string",
      "message": "string",
      "optionalValues": {
        "property1": "string",
        "property2": "string"
      },
      "time": "string"
    }
  ]'
```

`POST /api/v1/AgentTelemetry`

> Body parameter

```json
[
  {
    "level": "string",
    "message": "string",
    "optionalValues": {
      "property1": "string",
      "property2": "string"
    },
    "time": "string"
  }
]
```

<h3 id="postapiv1agenttelemetry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[TelemetryData](#schematelemetrydata)]|false|none|

> Example responses

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1agenttelemetry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/AgentTelemetry/standalone

> Code samples

```bash
curl https://example.com/api/v1/AgentTelemetry/standalone \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "level": "string",
      "message": "string",
      "optionalValues": {
        "property1": "string",
        "property2": "string"
      },
      "time": "string"
    }
  ]'
```

`POST /api/v1/AgentTelemetry/standalone`

> Body parameter

```json
[
  {
    "level": "string",
    "message": "string",
    "optionalValues": {
      "property1": "string",
      "property2": "string"
    },
    "time": "string"
  }
]
```

<h3 id="postapiv1agenttelemetrystandalone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[TelemetryData](#schematelemetrydata)]|false|none|

> Example responses

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1agenttelemetrystandalone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-agents">Agents</h1>

## get/api/v1/Agents/{family}

> Code samples

```bash
curl https://example.com/api/v1/Agents/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/Agents/{family}`

<h3 id="getapiv1agentsfamily-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|family|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "assetUri": "string",
  "family": "string",
  "name": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1agentsfamily-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AgentResponse](#schemaagentresponse)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-environments">Environments</h1>

## get/api/v1/Environments

> Code samples

```bash
curl https://example.com/api/v1/Environments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/Environments`

<h3 id="getapiv1environments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|none|
|planId|query|string|false|none|
|deleted|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "accessToken": "string",
    "active": "1970-01-01T00:00:00Z",
    "autoShutdownDelayMinutes": 0,
    "billableOwnerType": "0 (User)",
    "clientUsage": {
      "sessionId": "string",
      "usageData": {
        "property1": {
          "activeMinutes": 0,
          "lastActivity": "1970-01-01T00:00:00Z"
        },
        "property2": {
          "activeMinutes": 0,
          "lastActivity": "1970-01-01T00:00:00Z"
        }
      }
    },
    "connection": {
      "connectionServiceUri": "string",
      "connectionSessionId": "string",
      "connectionSessionPath": "string",
      "hostPublicKeys": [
        "string"
      ],
      "relayEndpoint": "string",
      "relaySasToken": "string",
      "sessionToken": "string",
      "tunnelProperties": {
        "clusterId": "string",
        "connectAccessToken": "string",
        "domain": "string",
        "managePortsAccessToken": "string",
        "serviceUri": "string",
        "tunnelId": "string",
        "tunnelName": "string"
      }
    },
    "container": {
      "id": "string",
      "schemaVersion": "string"
    },
    "containerImage": "string",
    "createFromPrebuild": true,
    "created": "1970-01-01T00:00:00Z",
    "displayStorageUtilizationInKb": true,
    "exportedBlobUrl": "string",
    "failoverDetails": {
      "failoverEnabled": true,
      "failoverRegion": "101 (EastAsia)"
    },
    "features": {
      "property1": "string",
      "property2": "string"
    },
    "friendlyName": "string",
    "gitStatus": {
      "ahead": 0,
      "behind": 0,
      "branch": "string",
      "commit": "string",
      "hasUncommittedChanges": true,
      "hasUnpushedChanges": true,
      "noGitRepo": true
    },
    "id": "string",
    "lastStateUpdateReason": "string",
    "lastUsed": "1970-01-01T00:00:00Z",
    "location": "string",
    "organizationId": "string",
    "ownerId": "string",
    "planId": "string",
    "platform": "string",
    "portForwardingConnection": {
      "connectionServiceUri": "string",
      "connectionSessionId": "string",
      "connectionSessionPath": "string",
      "hostPublicKeys": [
        "string"
      ],
      "relayEndpoint": "string",
      "relaySasToken": "string",
      "sessionToken": "string",
      "tunnelProperties": {
        "clusterId": "string",
        "connectAccessToken": "string",
        "domain": "string",
        "managePortsAccessToken": "string",
        "serviceUri": "string",
        "tunnelId": "string",
        "tunnelName": "string"
      }
    },
    "prebuildType": "string",
    "recentFolders": [
      "string"
    ],
    "resourceTier": "0 (None)",
    "runtimeConstraints": {
      "allowedPortPrivacySettings": [
        "0 (Private)"
      ],
      "imageAllowList": [
        "string"
      ]
    },
    "seed": {
      "cloneUrl": "string",
      "gitConfig": {
        "userEmail": "string",
        "userName": "string"
      },
      "recurseClone": true,
      "repository": {
        "branchName": "string",
        "commitId": "string",
        "createType": "string",
        "diskUsage": "string",
        "name": "string",
        "owner": "string",
        "prebuildHash": "string",
        "repoId": 0,
        "url": "string"
      },
      "seedMoniker": "string",
      "seedType": "string"
    },
    "skuDisplayName": "string",
    "skuName": "string",
    "state": "string",
    "storageUtilizationInKb": 0,
    "subscriptionData": {
      "computeQuota": 0,
      "computeUsage": 0,
      "subscriptionId": "string",
      "subscriptionState": "string"
    },
    "templateStatus": "string",
    "type": "string",
    "updated": "1970-01-01T00:00:00Z"
  }
]
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1environments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|

<h3 id="getapiv1environments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CloudEnvironmentResult](#schemacloudenvironmentresult)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/Environments

> Code samples

```bash
curl https://example.com/api/v1/Environments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "analyticsTrackingId": "string",
    "autoShutdownDelayMinutes": 0,
    "billableOwner": {
      "id": "string",
      "login": "string",
      "type": "0 (User)"
    },
    "connection": {
      "connectionServiceUri": "string",
      "connectionSessionId": "string",
      "connectionSessionPath": "string",
      "hostPublicKeys": [
        "string"
      ],
      "relayEndpoint": "string",
      "relaySasToken": "string",
      "sessionToken": "string",
      "tunnelProperties": {
        "clusterId": "string",
        "connectAccessToken": "string",
        "domain": "string",
        "managePortsAccessToken": "string",
        "serviceUri": "string",
        "tunnelId": "string",
        "tunnelName": "string"
      }
    },
    "containerImage": "string",
    "createAsPrebuild": true,
    "devContainerJson": "string",
    "devContainerPath": "string",
    "experimentalFeatures": {
      "enableDynamicHttpsDetection": true,
      "queueResourceAllocation": true,
      "usePrebuildFastPathIfAvailable": true,
      "usePrebuiltImages": true,
      "useStorageV2": true
    },
    "features": {
      "property1": "string",
      "property2": "string"
    },
    "friendlyName": "string",
    "gitHubApiUrl": "string",
    "gitHubAppUrl": "string",
    "gitHubPfsAuthEndpoint": "string",
    "githubEnvironmentEndpoint": "string",
    "hasDevcontainerJson": true,
    "identity": {
      "displayName": "string",
      "id": "string",
      "userName": "string"
    },
    "label": "string",
    "location": "string",
    "netmonCorrelationData": {
      "billableOwnerCreatedAt": "string",
      "billableOwnerDatabaseId": "string",
      "billableOwnerGlobalRelayId": "string",
      "billableOwnerPlan": "string",
      "ownerCreatedAt": "string",
      "ownerDatabaseId": "string",
      "ownerGlobalRelayId": "string",
      "ownerPlan": "string",
      "repositoryCreatedAt": "string",
      "repositoryDatabaseId": "string",
      "repositoryGlobalRelayId": "string",
      "repositoryPrivate": true
    },
    "personalization": {
      "dotfilesInstallCommand": "string",
      "dotfilesRepository": "string",
      "dotfilesTargetPath": "string"
    },
    "planId": "string",
    "platform": "string",
    "runtimeConstraints": {
      "allowedPortPrivacySettings": [
        "0 (Private)"
      ],
      "imageAllowList": [
        "string"
      ]
    },
    "secrets": [
      {
        "name": "string",
        "type": "1 (EnvironmentVariable)",
        "value": "string"
      }
    ],
    "seed": {
      "cloneUrl": "string",
      "gitConfig": {
        "userEmail": "string",
        "userName": "string"
      },
      "recurseClone": true,
      "repository": {
        "branchName": "string",
        "commitId": "string",
        "createType": "string",
        "diskUsage": "string",
        "name": "string",
        "owner": "string",
        "prebuildHash": "string",
        "repoId": 0,
        "url": "string"
      },
      "seedMoniker": "string",
      "seedType": "string"
    },
    "skuName": "string",
    "testAccount": true,
    "type": "string",
    "userTier": "string",
    "workingDirectory": "string"
  }'
```

`POST /api/v1/Environments`

> Body parameter

```json
{
  "analyticsTrackingId": "string",
  "autoShutdownDelayMinutes": 0,
  "billableOwner": {
    "id": "string",
    "login": "string",
    "type": "0 (User)"
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "containerImage": "string",
  "createAsPrebuild": true,
  "devContainerJson": "string",
  "devContainerPath": "string",
  "experimentalFeatures": {
    "enableDynamicHttpsDetection": true,
    "queueResourceAllocation": true,
    "usePrebuildFastPathIfAvailable": true,
    "usePrebuiltImages": true,
    "useStorageV2": true
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitHubApiUrl": "string",
  "gitHubAppUrl": "string",
  "gitHubPfsAuthEndpoint": "string",
  "githubEnvironmentEndpoint": "string",
  "hasDevcontainerJson": true,
  "identity": {
    "displayName": "string",
    "id": "string",
    "userName": "string"
  },
  "label": "string",
  "location": "string",
  "netmonCorrelationData": {
    "billableOwnerCreatedAt": "string",
    "billableOwnerDatabaseId": "string",
    "billableOwnerGlobalRelayId": "string",
    "billableOwnerPlan": "string",
    "ownerCreatedAt": "string",
    "ownerDatabaseId": "string",
    "ownerGlobalRelayId": "string",
    "ownerPlan": "string",
    "repositoryCreatedAt": "string",
    "repositoryDatabaseId": "string",
    "repositoryGlobalRelayId": "string",
    "repositoryPrivate": true
  },
  "personalization": {
    "dotfilesInstallCommand": "string",
    "dotfilesRepository": "string",
    "dotfilesTargetPath": "string"
  },
  "planId": "string",
  "platform": "string",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "secrets": [
    {
      "name": "string",
      "type": "1 (EnvironmentVariable)",
      "value": "string"
    }
  ],
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuName": "string",
  "testAccount": true,
  "type": "string",
  "userTier": "string",
  "workingDirectory": "string"
}
```

<h3 id="postapiv1environments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|access|query|boolean|false|none|
|body|body|[CreateCloudEnvironmentBody](#schemacreatecloudenvironmentbody)|false|none|
|» analyticsTrackingId|body|string \| null|false|none|
|» autoShutdownDelayMinutes|body|integer(int32)|false|none|
|» billableOwner|body|[BillableOwnerBody](#schemabillableownerbody)|false|none|
|» connection|body|[ConnectionInfoBody](#schemaconnectioninfobody)|false|none|
|» containerImage|body|string \| null|false|none|
|» createAsPrebuild|body|boolean|false|none|
|» devContainerJson|body|string \| null|false|none|
|» devContainerPath|body|string \| null|false|none|
|» experimentalFeatures|body|[ExperimentalFeaturesBody](#schemaexperimentalfeaturesbody)|false|none|
|» features|body|object \| null|false|none|
|» » **additionalProperties**|body|string \| null|false|none|
|» friendlyName|body|string|true|none|
|» gitHubApiUrl|body|string \| null|false|none|
|» gitHubAppUrl|body|string \| null|false|none|
|» gitHubPfsAuthEndpoint|body|string \| null|false|none|
|» githubEnvironmentEndpoint|body|string \| null|false|none|
|» hasDevcontainerJson|body|boolean|false|none|
|» identity|body|[IdentityBody](#schemaidentitybody)|false|none|
|» label|body|string \| null|false|none|
|» location|body|string \| null|false|**Deprecated.**|
|» netmonCorrelationData|body|[NetmonCorrelationDataBody](#schemanetmoncorrelationdatabody)|false|none|
|» personalization|body|[PersonalizationInfoBody](#schemapersonalizationinfobody)|false|none|
|» planId|body|string \| null|false|none|
|» platform|body|string \| null|false|**Deprecated.**|
|» runtimeConstraints|body|[RuntimeConstraintsBody](#schemaruntimeconstraintsbody)|false|none|
|» secrets|body|[[SecretDataBody](#schemasecretdatabody)]|false|none|
|» seed|body|[SeedInfoBody](#schemaseedinfobody)|false|none|
|» skuName|body|string \| null|false|none|
|» testAccount|body|boolean|false|none|
|» type|body|string|true|none|
|» userTier|body|string \| null|false|none|
|» workingDirectory|body|string \| null|false|none|

> Example responses

> 201 Response

```json
{
  "accessToken": "string",
  "active": "1970-01-01T00:00:00Z",
  "autoShutdownDelayMinutes": 0,
  "billableOwnerType": "0 (User)",
  "clientUsage": {
    "sessionId": "string",
    "usageData": {
      "property1": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      }
    }
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "container": {
    "id": "string",
    "schemaVersion": "string"
  },
  "containerImage": "string",
  "createFromPrebuild": true,
  "created": "1970-01-01T00:00:00Z",
  "displayStorageUtilizationInKb": true,
  "exportedBlobUrl": "string",
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitStatus": {
    "ahead": 0,
    "behind": 0,
    "branch": "string",
    "commit": "string",
    "hasUncommittedChanges": true,
    "hasUnpushedChanges": true,
    "noGitRepo": true
  },
  "id": "string",
  "lastStateUpdateReason": "string",
  "lastUsed": "1970-01-01T00:00:00Z",
  "location": "string",
  "organizationId": "string",
  "ownerId": "string",
  "planId": "string",
  "platform": "string",
  "portForwardingConnection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "prebuildType": "string",
  "recentFolders": [
    "string"
  ],
  "resourceTier": "0 (None)",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuDisplayName": "string",
  "skuName": "string",
  "state": "string",
  "storageUtilizationInKb": 0,
  "subscriptionData": {
    "computeQuota": 0,
    "computeUsage": 0,
    "subscriptionId": "string",
    "subscriptionState": "string"
  },
  "templateStatus": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> 307 Response

```json
"0 (Unknown)"
```

> 400 Response

```json
"0 (Unknown)"
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
"0 (Unknown)"
```

> 409 Response

```json
"0 (Unknown)"
```

> 503 Response

```json
"0 (Unknown)"
```

<h3 id="postapiv1environments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[CloudEnvironmentResult](#schemacloudenvironmentresult)|
|307|Temporary Redirect|Redirect|[MessageCodes](#schemamessagecodes)|
|400|Bad Request|Bad Request|[MessageCodes](#schemamessagecodes)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[MessageCodes](#schemamessagecodes)|
|409|Conflict|Conflict|[MessageCodes](#schemamessagecodes)|
|503|Service Unavailable|Server Error|[MessageCodes](#schemamessagecodes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GetEnvironmentRoute

<a id="opIdGetEnvironmentRoute"></a>

> Code samples

```bash
curl https://example.com/api/v1/Environments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/Environments/{environmentId}`

<h3 id="getenvironmentroute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|
|connect|query|boolean|false|none|
|pfConnect|query|boolean|false|none|
|deleted|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "accessToken": "string",
  "active": "1970-01-01T00:00:00Z",
  "autoShutdownDelayMinutes": 0,
  "billableOwnerType": "0 (User)",
  "clientUsage": {
    "sessionId": "string",
    "usageData": {
      "property1": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      }
    }
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "container": {
    "id": "string",
    "schemaVersion": "string"
  },
  "containerImage": "string",
  "createFromPrebuild": true,
  "created": "1970-01-01T00:00:00Z",
  "displayStorageUtilizationInKb": true,
  "exportedBlobUrl": "string",
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitStatus": {
    "ahead": 0,
    "behind": 0,
    "branch": "string",
    "commit": "string",
    "hasUncommittedChanges": true,
    "hasUnpushedChanges": true,
    "noGitRepo": true
  },
  "id": "string",
  "lastStateUpdateReason": "string",
  "lastUsed": "1970-01-01T00:00:00Z",
  "location": "string",
  "organizationId": "string",
  "ownerId": "string",
  "planId": "string",
  "platform": "string",
  "portForwardingConnection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "prebuildType": "string",
  "recentFolders": [
    "string"
  ],
  "resourceTier": "0 (None)",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuDisplayName": "string",
  "skuName": "string",
  "state": "string",
  "storageUtilizationInKb": 0,
  "subscriptionData": {
    "computeQuota": 0,
    "computeUsage": 0,
    "subscriptionId": "string",
    "subscriptionState": "string"
  },
  "templateStatus": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getenvironmentroute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloudEnvironmentResult](#schemacloudenvironmentresult)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete/api/v1/Environments/{environmentId}

> Code samples

```bash
curl https://example.com/api/v1/Environments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/Environments/{environmentId}`

<h3 id="deleteapiv1environmentsenvironmentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|

> Example responses

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="deleteapiv1environmentsenvironmentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## patch/api/v1/Environments/{environmentId}

> Code samples

```bash
curl https://example.com/api/v1/Environments/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "autoShutdownDelayMinutes": 0,
    "failoverDetails": {
      "failoverEnabled": true,
      "failoverRegion": "101 (EastAsia)"
    },
    "friendlyName": "string",
    "planAccessToken": "string",
    "planId": "string",
    "skuName": "string"
  }'
```

`PATCH /api/v1/Environments/{environmentId}`

> Body parameter

```json
{
  "autoShutdownDelayMinutes": 0,
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "friendlyName": "string",
  "planAccessToken": "string",
  "planId": "string",
  "skuName": "string"
}
```

<h3 id="patchapiv1environmentsenvironmentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string|true|none|
|body|body|[UpdateCloudEnvironmentBody](#schemaupdatecloudenvironmentbody)|false|none|
|» autoShutdownDelayMinutes|body|integer(int32) \| null|false|none|
|» failoverDetails|body|[FailoverDetails](#schemafailoverdetails)|false|none|
|» friendlyName|body|string \| null|false|none|
|» planAccessToken|body|string \| null|false|none|
|» planId|body|string \| null|false|none|
|» skuName|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "accessToken": "string",
  "active": "1970-01-01T00:00:00Z",
  "autoShutdownDelayMinutes": 0,
  "billableOwnerType": "0 (User)",
  "clientUsage": {
    "sessionId": "string",
    "usageData": {
      "property1": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      }
    }
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "container": {
    "id": "string",
    "schemaVersion": "string"
  },
  "containerImage": "string",
  "createFromPrebuild": true,
  "created": "1970-01-01T00:00:00Z",
  "displayStorageUtilizationInKb": true,
  "exportedBlobUrl": "string",
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitStatus": {
    "ahead": 0,
    "behind": 0,
    "branch": "string",
    "commit": "string",
    "hasUncommittedChanges": true,
    "hasUnpushedChanges": true,
    "noGitRepo": true
  },
  "id": "string",
  "lastStateUpdateReason": "string",
  "lastUsed": "1970-01-01T00:00:00Z",
  "location": "string",
  "organizationId": "string",
  "ownerId": "string",
  "planId": "string",
  "platform": "string",
  "portForwardingConnection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "prebuildType": "string",
  "recentFolders": [
    "string"
  ],
  "resourceTier": "0 (None)",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuDisplayName": "string",
  "skuName": "string",
  "state": "string",
  "storageUtilizationInKb": 0,
  "subscriptionData": {
    "computeQuota": 0,
    "computeUsage": 0,
    "subscriptionId": "string",
    "subscriptionState": "string"
  },
  "templateStatus": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
[
  "0 (Unknown)"
]
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 409 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="patchapiv1environmentsenvironmentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloudEnvironmentResult](#schemacloudenvironmentresult)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|409|Conflict|Conflict|[ProblemDetails](#schemaproblemdetails)|

<h3 id="patchapiv1environmentsenvironmentid-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MessageCodes](#schemamessagecodes)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## UpdateEnvironmentRoute

<a id="opIdUpdateEnvironmentRoute"></a>

> Code samples

```bash
curl https://example.com/api/v1/Environments/string/_callback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "payload": {
      "sessionId": "string",
      "sessionPath": "string"
    },
    "type": "string"
  }'
```

`POST /api/v1/Environments/{environmentId}/_callback`

> Body parameter

```json
{
  "payload": {
    "sessionId": "string",
    "sessionPath": "string"
  },
  "type": "string"
}
```

<h3 id="updateenvironmentroute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string|true|none|
|body|body|[EnvironmentRegistrationCallbackBody](#schemaenvironmentregistrationcallbackbody)|false|none|
|» payload|body|[EnvironmentRegistrationCallbackPayloadBody](#schemaenvironmentregistrationcallbackpayloadbody)|false|none|
|» type|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "accessToken": "string",
  "active": "1970-01-01T00:00:00Z",
  "autoShutdownDelayMinutes": 0,
  "billableOwnerType": "0 (User)",
  "clientUsage": {
    "sessionId": "string",
    "usageData": {
      "property1": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      }
    }
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "container": {
    "id": "string",
    "schemaVersion": "string"
  },
  "containerImage": "string",
  "createFromPrebuild": true,
  "created": "1970-01-01T00:00:00Z",
  "displayStorageUtilizationInKb": true,
  "exportedBlobUrl": "string",
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitStatus": {
    "ahead": 0,
    "behind": 0,
    "branch": "string",
    "commit": "string",
    "hasUncommittedChanges": true,
    "hasUnpushedChanges": true,
    "noGitRepo": true
  },
  "id": "string",
  "lastStateUpdateReason": "string",
  "lastUsed": "1970-01-01T00:00:00Z",
  "location": "string",
  "organizationId": "string",
  "ownerId": "string",
  "planId": "string",
  "platform": "string",
  "portForwardingConnection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "prebuildType": "string",
  "recentFolders": [
    "string"
  ],
  "resourceTier": "0 (None)",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuDisplayName": "string",
  "skuName": "string",
  "state": "string",
  "storageUtilizationInKb": 0,
  "subscriptionData": {
    "computeQuota": 0,
    "computeUsage": 0,
    "subscriptionId": "string",
    "subscriptionState": "string"
  },
  "templateStatus": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="updateenvironmentroute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloudEnvironmentResult](#schemacloudenvironmentresult)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get/api/v1/Environments/{environmentId}/archive

> Code samples

```bash
curl https://example.com/api/v1/Environments/497f6eca-6276-4993-bfeb-53cbbbba6f08/archive \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/Environments/{environmentId}/archive`

<h3 id="getapiv1environmentsenvironmentidarchive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "accessToken": "string",
  "active": "1970-01-01T00:00:00Z",
  "autoShutdownDelayMinutes": 0,
  "billableOwnerType": "0 (User)",
  "clientUsage": {
    "sessionId": "string",
    "usageData": {
      "property1": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      }
    }
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "container": {
    "id": "string",
    "schemaVersion": "string"
  },
  "containerImage": "string",
  "createFromPrebuild": true,
  "created": "1970-01-01T00:00:00Z",
  "displayStorageUtilizationInKb": true,
  "exportedBlobUrl": "string",
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitStatus": {
    "ahead": 0,
    "behind": 0,
    "branch": "string",
    "commit": "string",
    "hasUncommittedChanges": true,
    "hasUnpushedChanges": true,
    "noGitRepo": true
  },
  "id": "string",
  "lastStateUpdateReason": "string",
  "lastUsed": "1970-01-01T00:00:00Z",
  "location": "string",
  "organizationId": "string",
  "ownerId": "string",
  "planId": "string",
  "platform": "string",
  "portForwardingConnection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "prebuildType": "string",
  "recentFolders": [
    "string"
  ],
  "resourceTier": "0 (None)",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuDisplayName": "string",
  "skuName": "string",
  "state": "string",
  "storageUtilizationInKb": 0,
  "subscriptionData": {
    "computeQuota": 0,
    "computeUsage": 0,
    "subscriptionId": "string",
    "subscriptionState": "string"
  },
  "templateStatus": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
"0 (Unknown)"
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 503 Response

```json
"0 (Unknown)"
```

<h3 id="getapiv1environmentsenvironmentidarchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UnfilteredCloudEnvironmentResult](#schemaunfilteredcloudenvironmentresult)|
|400|Bad Request|Bad Request|[MessageCodes](#schemamessagecodes)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|503|Service Unavailable|Server Error|[MessageCodes](#schemamessagecodes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/Environments/{environmentId}/archive

> Code samples

```bash
curl https://example.com/api/v1/Environments/497f6eca-6276-4993-bfeb-53cbbbba6f08/archive \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/Environments/{environmentId}/archive`

<h3 id="postapiv1environmentsenvironmentidarchive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "accessToken": "string",
  "active": "1970-01-01T00:00:00Z",
  "autoShutdownDelayMinutes": 0,
  "billableOwnerType": "0 (User)",
  "clientUsage": {
    "sessionId": "string",
    "usageData": {
      "property1": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      }
    }
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "container": {
    "id": "string",
    "schemaVersion": "string"
  },
  "containerImage": "string",
  "createFromPrebuild": true,
  "created": "1970-01-01T00:00:00Z",
  "displayStorageUtilizationInKb": true,
  "exportedBlobUrl": "string",
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitStatus": {
    "ahead": 0,
    "behind": 0,
    "branch": "string",
    "commit": "string",
    "hasUncommittedChanges": true,
    "hasUnpushedChanges": true,
    "noGitRepo": true
  },
  "id": "string",
  "lastStateUpdateReason": "string",
  "lastUsed": "1970-01-01T00:00:00Z",
  "location": "string",
  "organizationId": "string",
  "ownerId": "string",
  "planId": "string",
  "platform": "string",
  "portForwardingConnection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "prebuildType": "string",
  "recentFolders": [
    "string"
  ],
  "resourceTier": "0 (None)",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuDisplayName": "string",
  "skuName": "string",
  "state": "string",
  "storageUtilizationInKb": 0,
  "subscriptionData": {
    "computeQuota": 0,
    "computeUsage": 0,
    "subscriptionId": "string",
    "subscriptionState": "string"
  },
  "templateStatus": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
"0 (Unknown)"
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 503 Response

```json
"0 (Unknown)"
```

<h3 id="postapiv1environmentsenvironmentidarchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloudEnvironmentResult](#schemacloudenvironmentresult)|
|400|Bad Request|Bad Request|[MessageCodes](#schemamessagecodes)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|503|Service Unavailable|Server Error|[MessageCodes](#schemamessagecodes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/Environments/{environmentId}/export

> Code samples

```bash
curl https://example.com/api/v1/Environments/497f6eca-6276-4993-bfeb-53cbbbba6f08/export \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/Environments/{environmentId}/export`

<h3 id="postapiv1environmentsenvironmentidexport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "accessToken": "string",
  "active": "1970-01-01T00:00:00Z",
  "autoShutdownDelayMinutes": 0,
  "billableOwnerType": "0 (User)",
  "clientUsage": {
    "sessionId": "string",
    "usageData": {
      "property1": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      }
    }
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "container": {
    "id": "string",
    "schemaVersion": "string"
  },
  "containerImage": "string",
  "createFromPrebuild": true,
  "created": "1970-01-01T00:00:00Z",
  "displayStorageUtilizationInKb": true,
  "exportedBlobUrl": "string",
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitStatus": {
    "ahead": 0,
    "behind": 0,
    "branch": "string",
    "commit": "string",
    "hasUncommittedChanges": true,
    "hasUnpushedChanges": true,
    "noGitRepo": true
  },
  "id": "string",
  "lastStateUpdateReason": "string",
  "lastUsed": "1970-01-01T00:00:00Z",
  "location": "string",
  "organizationId": "string",
  "ownerId": "string",
  "planId": "string",
  "platform": "string",
  "portForwardingConnection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "prebuildType": "string",
  "recentFolders": [
    "string"
  ],
  "resourceTier": "0 (None)",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuDisplayName": "string",
  "skuName": "string",
  "state": "string",
  "storageUtilizationInKb": 0,
  "subscriptionData": {
    "computeQuota": 0,
    "computeUsage": 0,
    "subscriptionId": "string",
    "subscriptionState": "string"
  },
  "templateStatus": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
"0 (Unknown)"
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 503 Response

```json
"0 (Unknown)"
```

<h3 id="postapiv1environmentsenvironmentidexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloudEnvironmentResult](#schemacloudenvironmentresult)|
|400|Bad Request|Bad Request|[MessageCodes](#schemamessagecodes)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|503|Service Unavailable|Server Error|[MessageCodes](#schemamessagecodes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## patch/api/v1/Environments/{environmentId}/folder

> Code samples

```bash
curl https://example.com/api/v1/Environments/string/folder \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "recentFolderPaths": [
      "string"
    ]
  }'
```

`PATCH /api/v1/Environments/{environmentId}/folder`

> Body parameter

```json
{
  "recentFolderPaths": [
    "string"
  ]
}
```

<h3 id="patchapiv1environmentsenvironmentidfolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string|true|none|
|body|body|[CloudEnvironmentFolderBody](#schemacloudenvironmentfolderbody)|false|none|
|» recentFolderPaths|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "accessToken": "string",
  "active": "1970-01-01T00:00:00Z",
  "autoShutdownDelayMinutes": 0,
  "billableOwnerType": "0 (User)",
  "clientUsage": {
    "sessionId": "string",
    "usageData": {
      "property1": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      }
    }
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "container": {
    "id": "string",
    "schemaVersion": "string"
  },
  "containerImage": "string",
  "createFromPrebuild": true,
  "created": "1970-01-01T00:00:00Z",
  "displayStorageUtilizationInKb": true,
  "exportedBlobUrl": "string",
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitStatus": {
    "ahead": 0,
    "behind": 0,
    "branch": "string",
    "commit": "string",
    "hasUncommittedChanges": true,
    "hasUnpushedChanges": true,
    "noGitRepo": true
  },
  "id": "string",
  "lastStateUpdateReason": "string",
  "lastUsed": "1970-01-01T00:00:00Z",
  "location": "string",
  "organizationId": "string",
  "ownerId": "string",
  "planId": "string",
  "platform": "string",
  "portForwardingConnection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "prebuildType": "string",
  "recentFolders": [
    "string"
  ],
  "resourceTier": "0 (None)",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuDisplayName": "string",
  "skuName": "string",
  "state": "string",
  "storageUtilizationInKb": 0,
  "subscriptionData": {
    "computeQuota": 0,
    "computeUsage": 0,
    "subscriptionId": "string",
    "subscriptionState": "string"
  },
  "templateStatus": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
[
  "0 (Unknown)"
]
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="patchapiv1environmentsenvironmentidfolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloudEnvironmentResult](#schemacloudenvironmentresult)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<h3 id="patchapiv1environmentsenvironmentidfolder-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MessageCodes](#schemamessagecodes)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get/api/v1/Environments/{environmentId}/heartbeattoken

> Code samples

```bash
curl https://example.com/api/v1/Environments/string/heartbeattoken \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/Environments/{environmentId}/heartbeattoken`

<h3 id="getapiv1environmentsenvironmentidheartbeattoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "accessToken": "string",
  "active": "1970-01-01T00:00:00Z",
  "autoShutdownDelayMinutes": 0,
  "billableOwnerType": "0 (User)",
  "clientUsage": {
    "sessionId": "string",
    "usageData": {
      "property1": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      }
    }
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "container": {
    "id": "string",
    "schemaVersion": "string"
  },
  "containerImage": "string",
  "createFromPrebuild": true,
  "created": "1970-01-01T00:00:00Z",
  "displayStorageUtilizationInKb": true,
  "exportedBlobUrl": "string",
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitStatus": {
    "ahead": 0,
    "behind": 0,
    "branch": "string",
    "commit": "string",
    "hasUncommittedChanges": true,
    "hasUnpushedChanges": true,
    "noGitRepo": true
  },
  "id": "string",
  "lastStateUpdateReason": "string",
  "lastUsed": "1970-01-01T00:00:00Z",
  "location": "string",
  "organizationId": "string",
  "ownerId": "string",
  "planId": "string",
  "platform": "string",
  "portForwardingConnection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "prebuildType": "string",
  "recentFolders": [
    "string"
  ],
  "resourceTier": "0 (None)",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuDisplayName": "string",
  "skuName": "string",
  "state": "string",
  "storageUtilizationInKb": 0,
  "subscriptionData": {
    "computeQuota": 0,
    "computeUsage": 0,
    "subscriptionId": "string",
    "subscriptionState": "string"
  },
  "templateStatus": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1environmentsenvironmentidheartbeattoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloudEnvironmentResult](#schemacloudenvironmentresult)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/Environments/{environmentId}/notify

> Code samples

```bash
curl https://example.com/api/v1/Environments/497f6eca-6276-4993-bfeb-53cbbbba6f08/notify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "details": "string",
    "displayMode": "string",
    "message": "string",
    "modal": true
  }'
```

`POST /api/v1/Environments/{environmentId}/notify`

> Body parameter

```json
{
  "details": "string",
  "displayMode": "string",
  "message": "string",
  "modal": true
}
```

<h3 id="postapiv1environmentsenvironmentidnotify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|
|body|body|[NotificationDataBody](#schemanotificationdatabody)|false|none|
|» details|body|string \| null|false|none|
|» displayMode|body|string \| null|false|none|
|» message|body|string \| null|false|none|
|» modal|body|boolean|false|none|

> Example responses

> 200 Response

```json
"string"
```

> 400 Response

```json
"0 (Unknown)"
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1environmentsenvironmentidnotify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[MessageCodes](#schemamessagecodes)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put/api/v1/Environments/{environmentId}/ports/{port}

> Code samples

```bash
curl https://example.com/api/v1/Environments/string/ports/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "privacy": "0 (Private)",
    "tunnelType": "0 (Basis)"
  }'
```

`PUT /api/v1/Environments/{environmentId}/ports/{port}`

> Body parameter

```json
{
  "privacy": "0 (Private)",
  "tunnelType": "0 (Basis)"
}
```

<h3 id="putapiv1environmentsenvironmentidportsport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string|true|none|
|port|path|integer(int32)|true|none|
|body|body|[AddForwardedPortSettings](#schemaaddforwardedportsettings)|false|none|
|» privacy|body|[PrivacyEnum](#schemaprivacyenum)|false|none|
|» tunnelType|body|[TunnelType](#schematunneltype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» privacy|0 (Private)|
|» privacy|1 (Public)|
|» privacy|2 (Org)|
|» tunnelType|0 (Basis)|
|» tunnelType|1 (Liveshare)|

> Example responses

> 400 Response

```json
"0 (Unknown)"
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 503 Response

```json
"0 (Unknown)"
```

<h3 id="putapiv1environmentsenvironmentidportsport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[MessageCodes](#schemamessagecodes)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|503|Service Unavailable|Server Error|[MessageCodes](#schemamessagecodes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete/api/v1/Environments/{environmentId}/ports/{port}

> Code samples

```bash
curl https://example.com/api/v1/Environments/string/ports/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/Environments/{environmentId}/ports/{port}`

<h3 id="deleteapiv1environmentsenvironmentidportsport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string|true|none|
|port|path|integer(int32)|true|none|

> Example responses

> 400 Response

```json
"0 (Unknown)"
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 503 Response

```json
"0 (Unknown)"
```

<h3 id="deleteapiv1environmentsenvironmentidportsport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[MessageCodes](#schemamessagecodes)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|503|Service Unavailable|Server Error|[MessageCodes](#schemamessagecodes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## patch/api/v1/Environments/{environmentId}/restore

> Code samples

```bash
curl https://example.com/api/v1/Environments/497f6eca-6276-4993-bfeb-53cbbbba6f08/restore \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/v1/Environments/{environmentId}/restore`

<h3 id="patchapiv1environmentsenvironmentidrestore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="patchapiv1environmentsenvironmentidrestore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put/api/v1/Environments/{environmentId}/secrets

> Code samples

```bash
curl https://example.com/api/v1/Environments/497f6eca-6276-4993-bfeb-53cbbbba6f08/secrets \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "secrets": [
      {
        "name": "string",
        "type": "1 (EnvironmentVariable)",
        "value": "string"
      }
    ]
  }'
```

`PUT /api/v1/Environments/{environmentId}/secrets`

> Body parameter

```json
{
  "secrets": [
    {
      "name": "string",
      "type": "1 (EnvironmentVariable)",
      "value": "string"
    }
  ]
}
```

<h3 id="putapiv1environmentsenvironmentidsecrets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|
|body|body|[UpdateUserSecretsRequestBody](#schemaupdateusersecretsrequestbody)|false|none|
|» secrets|body|[[SecretDataBody](#schemasecretdatabody)]|false|none|

> Example responses

> 204 Response

```json
{
  "accessToken": "string",
  "active": "1970-01-01T00:00:00Z",
  "autoShutdownDelayMinutes": 0,
  "billableOwnerType": "0 (User)",
  "clientUsage": {
    "sessionId": "string",
    "usageData": {
      "property1": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      }
    }
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "container": {
    "id": "string",
    "schemaVersion": "string"
  },
  "containerImage": "string",
  "createFromPrebuild": true,
  "created": "1970-01-01T00:00:00Z",
  "displayStorageUtilizationInKb": true,
  "exportedBlobUrl": "string",
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitStatus": {
    "ahead": 0,
    "behind": 0,
    "branch": "string",
    "commit": "string",
    "hasUncommittedChanges": true,
    "hasUnpushedChanges": true,
    "noGitRepo": true
  },
  "id": "string",
  "lastStateUpdateReason": "string",
  "lastUsed": "1970-01-01T00:00:00Z",
  "location": "string",
  "organizationId": "string",
  "ownerId": "string",
  "planId": "string",
  "platform": "string",
  "portForwardingConnection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "prebuildType": "string",
  "recentFolders": [
    "string"
  ],
  "resourceTier": "0 (None)",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuDisplayName": "string",
  "skuName": "string",
  "state": "string",
  "storageUtilizationInKb": 0,
  "subscriptionData": {
    "computeQuota": 0,
    "computeUsage": 0,
    "subscriptionId": "string",
    "subscriptionState": "string"
  },
  "templateStatus": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> 307 Response

```json
"0 (Unknown)"
```

> 400 Response

```json
"0 (Unknown)"
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
"0 (Unknown)"
```

> 503 Response

```json
"0 (Unknown)"
```

<h3 id="putapiv1environmentsenvironmentidsecrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|[CloudEnvironmentResult](#schemacloudenvironmentresult)|
|307|Temporary Redirect|Redirect|[MessageCodes](#schemamessagecodes)|
|400|Bad Request|Bad Request|[MessageCodes](#schemamessagecodes)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[MessageCodes](#schemamessagecodes)|
|503|Service Unavailable|Server Error|[MessageCodes](#schemamessagecodes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/Environments/{environmentId}/shutdown

> Code samples

```bash
curl https://example.com/api/v1/Environments/497f6eca-6276-4993-bfeb-53cbbbba6f08/shutdown \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/Environments/{environmentId}/shutdown`

<h3 id="postapiv1environmentsenvironmentidshutdown-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "accessToken": "string",
  "active": "1970-01-01T00:00:00Z",
  "autoShutdownDelayMinutes": 0,
  "billableOwnerType": "0 (User)",
  "clientUsage": {
    "sessionId": "string",
    "usageData": {
      "property1": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      }
    }
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "container": {
    "id": "string",
    "schemaVersion": "string"
  },
  "containerImage": "string",
  "createFromPrebuild": true,
  "created": "1970-01-01T00:00:00Z",
  "displayStorageUtilizationInKb": true,
  "exportedBlobUrl": "string",
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitStatus": {
    "ahead": 0,
    "behind": 0,
    "branch": "string",
    "commit": "string",
    "hasUncommittedChanges": true,
    "hasUnpushedChanges": true,
    "noGitRepo": true
  },
  "id": "string",
  "lastStateUpdateReason": "string",
  "lastUsed": "1970-01-01T00:00:00Z",
  "location": "string",
  "organizationId": "string",
  "ownerId": "string",
  "planId": "string",
  "platform": "string",
  "portForwardingConnection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "prebuildType": "string",
  "recentFolders": [
    "string"
  ],
  "resourceTier": "0 (None)",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuDisplayName": "string",
  "skuName": "string",
  "state": "string",
  "storageUtilizationInKb": 0,
  "subscriptionData": {
    "computeQuota": 0,
    "computeUsage": 0,
    "subscriptionId": "string",
    "subscriptionState": "string"
  },
  "templateStatus": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
"0 (Unknown)"
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1environmentsenvironmentidshutdown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloudEnvironmentResult](#schemacloudenvironmentresult)|
|400|Bad Request|Bad Request|[MessageCodes](#schemamessagecodes)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/Environments/{environmentId}/start

> Code samples

```bash
curl https://example.com/api/v1/Environments/497f6eca-6276-4993-bfeb-53cbbbba6f08/start \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/Environments/{environmentId}/start`

<h3 id="postapiv1environmentsenvironmentidstart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|
|access|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "accessToken": "string",
  "active": "1970-01-01T00:00:00Z",
  "autoShutdownDelayMinutes": 0,
  "billableOwnerType": "0 (User)",
  "clientUsage": {
    "sessionId": "string",
    "usageData": {
      "property1": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      }
    }
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "container": {
    "id": "string",
    "schemaVersion": "string"
  },
  "containerImage": "string",
  "createFromPrebuild": true,
  "created": "1970-01-01T00:00:00Z",
  "displayStorageUtilizationInKb": true,
  "exportedBlobUrl": "string",
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitStatus": {
    "ahead": 0,
    "behind": 0,
    "branch": "string",
    "commit": "string",
    "hasUncommittedChanges": true,
    "hasUnpushedChanges": true,
    "noGitRepo": true
  },
  "id": "string",
  "lastStateUpdateReason": "string",
  "lastUsed": "1970-01-01T00:00:00Z",
  "location": "string",
  "organizationId": "string",
  "ownerId": "string",
  "planId": "string",
  "platform": "string",
  "portForwardingConnection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "prebuildType": "string",
  "recentFolders": [
    "string"
  ],
  "resourceTier": "0 (None)",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuDisplayName": "string",
  "skuName": "string",
  "state": "string",
  "storageUtilizationInKb": 0,
  "subscriptionData": {
    "computeQuota": 0,
    "computeUsage": 0,
    "subscriptionId": "string",
    "subscriptionState": "string"
  },
  "templateStatus": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
"0 (Unknown)"
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 503 Response

```json
"0 (Unknown)"
```

<h3 id="postapiv1environmentsenvironmentidstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloudEnvironmentResult](#schemacloudenvironmentresult)|
|400|Bad Request|Bad Request|[MessageCodes](#schemamessagecodes)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|503|Service Unavailable|Server Error|[MessageCodes](#schemamessagecodes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get/api/v1/Environments/{environmentId}/state

> Code samples

```bash
curl https://example.com/api/v1/Environments/497f6eca-6276-4993-bfeb-53cbbbba6f08/state \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/Environments/{environmentId}/state`

<h3 id="getapiv1environmentsenvironmentidstate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|

> Example responses

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1environmentsenvironmentidstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get/api/v1/Environments/{environmentId}/updates

> Code samples

```bash
curl https://example.com/api/v1/Environments/string/updates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/Environments/{environmentId}/updates`

<h3 id="getapiv1environmentsenvironmentidupdates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "accessToken": "string",
  "active": "1970-01-01T00:00:00Z",
  "autoShutdownDelayMinutes": 0,
  "billableOwnerType": "0 (User)",
  "clientUsage": {
    "sessionId": "string",
    "usageData": {
      "property1": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      }
    }
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "container": {
    "id": "string",
    "schemaVersion": "string"
  },
  "containerImage": "string",
  "createFromPrebuild": true,
  "created": "1970-01-01T00:00:00Z",
  "displayStorageUtilizationInKb": true,
  "exportedBlobUrl": "string",
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitStatus": {
    "ahead": 0,
    "behind": 0,
    "branch": "string",
    "commit": "string",
    "hasUncommittedChanges": true,
    "hasUnpushedChanges": true,
    "noGitRepo": true
  },
  "id": "string",
  "lastStateUpdateReason": "string",
  "lastUsed": "1970-01-01T00:00:00Z",
  "location": "string",
  "organizationId": "string",
  "ownerId": "string",
  "planId": "string",
  "platform": "string",
  "portForwardingConnection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "prebuildType": "string",
  "recentFolders": [
    "string"
  ],
  "resourceTier": "0 (None)",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuDisplayName": "string",
  "skuName": "string",
  "state": "string",
  "storageUtilizationInKb": 0,
  "subscriptionData": {
    "computeQuota": 0,
    "computeUsage": 0,
    "subscriptionId": "string",
    "subscriptionState": "string"
  },
  "templateStatus": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1environmentsenvironmentidupdates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloudEnvironmentResult](#schemacloudenvironmentresult)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get/api/v1/GenevaActions/Environments/{environmentId}

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Environments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/GenevaActions/Environments/{environmentId}`

<h3 id="getapiv1genevaactionsenvironmentsenvironmentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "accessToken": "string",
  "active": "1970-01-01T00:00:00Z",
  "autoShutdownDelayMinutes": 0,
  "billableOwnerType": "0 (User)",
  "clientUsage": {
    "sessionId": "string",
    "usageData": {
      "property1": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      }
    }
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "container": {
    "id": "string",
    "schemaVersion": "string"
  },
  "containerImage": "string",
  "createFromPrebuild": true,
  "created": "1970-01-01T00:00:00Z",
  "displayStorageUtilizationInKb": true,
  "exportedBlobUrl": "string",
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitStatus": {
    "ahead": 0,
    "behind": 0,
    "branch": "string",
    "commit": "string",
    "hasUncommittedChanges": true,
    "hasUnpushedChanges": true,
    "noGitRepo": true
  },
  "id": "string",
  "lastStateUpdateReason": "string",
  "lastUsed": "1970-01-01T00:00:00Z",
  "location": "string",
  "organizationId": "string",
  "ownerId": "string",
  "planId": "string",
  "platform": "string",
  "portForwardingConnection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "prebuildType": "string",
  "recentFolders": [
    "string"
  ],
  "resourceTier": "0 (None)",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuDisplayName": "string",
  "skuName": "string",
  "state": "string",
  "storageUtilizationInKb": 0,
  "subscriptionData": {
    "computeQuota": 0,
    "computeUsage": 0,
    "subscriptionId": "string",
    "subscriptionState": "string"
  },
  "templateStatus": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1genevaactionsenvironmentsenvironmentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloudEnvironmentResult](#schemacloudenvironmentresult)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete/api/v1/GenevaActions/Environments/{environmentId}

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Environments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/GenevaActions/Environments/{environmentId}`

<h3 id="deleteapiv1genevaactionsenvironmentsenvironmentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|
|deletionType|query|string|false|none|

> Example responses

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="deleteapiv1genevaactionsenvironmentsenvironmentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put/api/v1/GenevaActions/Environments/{environmentId}/archive

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Environments/497f6eca-6276-4993-bfeb-53cbbbba6f08/archive \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/v1/GenevaActions/Environments/{environmentId}/archive`

<h3 id="putapiv1genevaactionsenvironmentsenvironmentidarchive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "accessToken": "string",
  "active": "1970-01-01T00:00:00Z",
  "autoShutdownDelayMinutes": 0,
  "billableOwnerType": "0 (User)",
  "clientUsage": {
    "sessionId": "string",
    "usageData": {
      "property1": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      }
    }
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "container": {
    "id": "string",
    "schemaVersion": "string"
  },
  "containerImage": "string",
  "createFromPrebuild": true,
  "created": "1970-01-01T00:00:00Z",
  "displayStorageUtilizationInKb": true,
  "exportedBlobUrl": "string",
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitStatus": {
    "ahead": 0,
    "behind": 0,
    "branch": "string",
    "commit": "string",
    "hasUncommittedChanges": true,
    "hasUnpushedChanges": true,
    "noGitRepo": true
  },
  "id": "string",
  "lastStateUpdateReason": "string",
  "lastUsed": "1970-01-01T00:00:00Z",
  "location": "string",
  "organizationId": "string",
  "ownerId": "string",
  "planId": "string",
  "platform": "string",
  "portForwardingConnection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "prebuildType": "string",
  "recentFolders": [
    "string"
  ],
  "resourceTier": "0 (None)",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuDisplayName": "string",
  "skuName": "string",
  "state": "string",
  "storageUtilizationInKb": 0,
  "subscriptionData": {
    "computeQuota": 0,
    "computeUsage": 0,
    "subscriptionId": "string",
    "subscriptionState": "string"
  },
  "templateStatus": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="putapiv1genevaactionsenvironmentsenvironmentidarchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloudEnvironmentResult](#schemacloudenvironmentresult)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get/api/v1/GenevaActions/Environments/{environmentId}/archived_storage_sas/{targetBlob}

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Environments/string/archived_storage_sas/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/GenevaActions/Environments/{environmentId}/archived_storage_sas/{targetBlob}`

<h3 id="getapiv1genevaactionsenvironmentsenvironmentidarchivedstoragesastargetblob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string|true|none|
|targetBlob|path|string|true|none|

> Example responses

> 200 Response

```json
"string"
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1genevaactionsenvironmentsenvironmentidarchivedstoragesastargetblob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put/api/v1/GenevaActions/Environments/{environmentId}/shutdown

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Environments/497f6eca-6276-4993-bfeb-53cbbbba6f08/shutdown \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/v1/GenevaActions/Environments/{environmentId}/shutdown`

<h3 id="putapiv1genevaactionsenvironmentsenvironmentidshutdown-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "accessToken": "string",
  "active": "1970-01-01T00:00:00Z",
  "autoShutdownDelayMinutes": 0,
  "billableOwnerType": "0 (User)",
  "clientUsage": {
    "sessionId": "string",
    "usageData": {
      "property1": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      }
    }
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "container": {
    "id": "string",
    "schemaVersion": "string"
  },
  "containerImage": "string",
  "createFromPrebuild": true,
  "created": "1970-01-01T00:00:00Z",
  "displayStorageUtilizationInKb": true,
  "exportedBlobUrl": "string",
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitStatus": {
    "ahead": 0,
    "behind": 0,
    "branch": "string",
    "commit": "string",
    "hasUncommittedChanges": true,
    "hasUnpushedChanges": true,
    "noGitRepo": true
  },
  "id": "string",
  "lastStateUpdateReason": "string",
  "lastUsed": "1970-01-01T00:00:00Z",
  "location": "string",
  "organizationId": "string",
  "ownerId": "string",
  "planId": "string",
  "platform": "string",
  "portForwardingConnection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "prebuildType": "string",
  "recentFolders": [
    "string"
  ],
  "resourceTier": "0 (None)",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuDisplayName": "string",
  "skuName": "string",
  "state": "string",
  "storageUtilizationInKb": 0,
  "subscriptionData": {
    "computeQuota": 0,
    "computeUsage": 0,
    "subscriptionId": "string",
    "subscriptionState": "string"
  },
  "templateStatus": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="putapiv1genevaactionsenvironmentsenvironmentidshutdown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloudEnvironmentResult](#schemacloudenvironmentresult)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/GenevaActions/Environments/{environmentId}/upload/running/vm/logs

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Environments/string/upload/running/vm/logs \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/GenevaActions/Environments/{environmentId}/upload/running/vm/logs`

<h3 id="postapiv1genevaactionsenvironmentsenvironmentiduploadrunningvmlogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "containerName": "string",
  "message": "string",
  "pathInContainer": "string",
  "storageUri": "string",
  "vmResourceId": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1genevaactionsenvironmentsenvironmentiduploadrunningvmlogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VmLogsUploadInfo](#schemavmlogsuploadinfo)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-billing">Billing</h1>

## post/api/v1/GenevaActions/Billing/resend

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Billing/resend \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endTime": "1970-01-01T00:00:00Z",
    "startTime": "1970-01-01T00:00:00Z"
  }'
```

`POST /api/v1/GenevaActions/Billing/resend`

> Body parameter

```json
{
  "endTime": "1970-01-01T00:00:00Z",
  "startTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="postapiv1genevaactionsbillingresend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReplayBillRequestBody](#schemareplaybillrequestbody)|true|none|
|» endTime|body|string(date-time)|false|none|
|» startTime|body|string(date-time)|false|none|

> Example responses

> 200 Response

```json
{
  "billGenerationTime": "1970-01-01T00:00:00Z",
  "environmentId": "string",
  "id": "string",
  "location": "101 (EastAsia)",
  "partitionKey": "string",
  "periodEnd": "1970-01-01T00:00:00Z",
  "periodStart": "1970-01-01T00:00:00Z",
  "plan": {
    "location": "101 (EastAsia)",
    "name": "string",
    "providerNamespace": "string",
    "resourceGroup": "string",
    "resourceId": "string",
    "subscription": "string"
  },
  "usage": {
    "property1": 0,
    "property2": 0
  },
  "usageDetail": [
    {
      "endState": "0 (None)",
      "id": "string",
      "resourceUsage": {
        "compute": [
          {
            "sku": "string",
            "usage": 0
          }
        ],
        "storage": [
          {
            "size": 0,
            "sizeInKB": 0,
            "sku": "string",
            "usage": 0
          }
        ]
      },
      "sku": {
        "name": "string",
        "tier": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1genevaactionsbillingresend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BillSummary](#schemabillsummary)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get/api/v1/GenevaActions/Billing/{environmentId}

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Billing/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/GenevaActions/Billing/{environmentId}`

<h3 id="getapiv1genevaactionsbillingenvironmentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|
|startTime|query|string|false|none|
|endTime|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "billGenerationTime": "1970-01-01T00:00:00Z",
  "environmentId": "string",
  "id": "string",
  "location": "101 (EastAsia)",
  "partitionKey": "string",
  "periodEnd": "1970-01-01T00:00:00Z",
  "periodStart": "1970-01-01T00:00:00Z",
  "plan": {
    "location": "101 (EastAsia)",
    "name": "string",
    "providerNamespace": "string",
    "resourceGroup": "string",
    "resourceId": "string",
    "subscription": "string"
  },
  "usage": {
    "property1": 0,
    "property2": 0
  },
  "usageDetail": [
    {
      "endState": "0 (None)",
      "id": "string",
      "resourceUsage": {
        "compute": [
          {
            "sku": "string",
            "usage": 0
          }
        ],
        "storage": [
          {
            "size": 0,
            "sizeInKB": 0,
            "sku": "string",
            "usage": 0
          }
        ]
      },
      "sku": {
        "name": "string",
        "tier": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1genevaactionsbillingenvironmentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BillSummary](#schemabillsummary)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get/api/v1/GenevaActions/Billing/{environmentId}/state-changes

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Billing/497f6eca-6276-4993-bfeb-53cbbbba6f08/state-changes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/GenevaActions/Billing/{environmentId}/state-changes`

<h3 id="getapiv1genevaactionsbillingenvironmentidstate-changes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "environment": {
    "id": "string",
    "name": "string",
    "sku": {
      "name": "string",
      "tier": "string"
    },
    "userId": "string"
  },
  "id": "string",
  "newValue": "0 (None)",
  "oldValue": "0 (None)",
  "partitionKey": "string",
  "time": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1genevaactionsbillingenvironmentidstate-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnvironmentStateChange](#schemaenvironmentstatechange)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/GenevaActions/Billing/{environmentId}/state-changes

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Billing/497f6eca-6276-4993-bfeb-53cbbbba6f08/state-changes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "newValue": "0 (None)",
    "oldValue": "0 (None)",
    "time": "1970-01-01T00:00:00Z"
  }'
```

`POST /api/v1/GenevaActions/Billing/{environmentId}/state-changes`

> Body parameter

```json
{
  "newValue": "0 (None)",
  "oldValue": "0 (None)",
  "time": "1970-01-01T00:00:00Z"
}
```

<h3 id="postapiv1genevaactionsbillingenvironmentidstate-changes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|
|body|body|[CreateEnvironmentStateChangeBody](#schemacreateenvironmentstatechangebody)|true|none|
|» newValue|body|[CloudEnvironmentState](#schemacloudenvironmentstate)|false|none|
|» oldValue|body|[CloudEnvironmentState](#schemacloudenvironmentstate)|false|none|
|» time|body|string(date-time) \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» newValue|0 (None)|
|» newValue|1 (Created)|
|» newValue|2 (Queued)|
|» newValue|3 (Provisioning)|
|» newValue|4 (Available)|
|» newValue|5 (Awaiting)|
|» newValue|6 (Unavailable)|
|» newValue|7 (Deleted)|
|» newValue|8 (Moved)|
|» newValue|9 (Shutdown)|
|» newValue|10 (Archived)|
|» newValue|11 (Starting)|
|» newValue|12 (ShuttingDown)|
|» newValue|13 (Failed)|
|» newValue|14 (Exporting)|
|» newValue|15 (Updating)|
|» newValue|16 (Rebuilding)|
|» oldValue|0 (None)|
|» oldValue|1 (Created)|
|» oldValue|2 (Queued)|
|» oldValue|3 (Provisioning)|
|» oldValue|4 (Available)|
|» oldValue|5 (Awaiting)|
|» oldValue|6 (Unavailable)|
|» oldValue|7 (Deleted)|
|» oldValue|8 (Moved)|
|» oldValue|9 (Shutdown)|
|» oldValue|10 (Archived)|
|» oldValue|11 (Starting)|
|» oldValue|12 (ShuttingDown)|
|» oldValue|13 (Failed)|
|» oldValue|14 (Exporting)|
|» oldValue|15 (Updating)|
|» oldValue|16 (Rebuilding)|

> Example responses

> 200 Response

```json
{
  "environment": {
    "id": "string",
    "name": "string",
    "sku": {
      "name": "string",
      "tier": "string"
    },
    "userId": "string"
  },
  "id": "string",
  "newValue": "0 (None)",
  "oldValue": "0 (None)",
  "partitionKey": "string",
  "time": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1genevaactionsbillingenvironmentidstate-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnvironmentStateChange](#schemaenvironmentstatechange)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-configuration">Configuration</h1>

## post/api/v1/GenevaActions/Configuration/{target}

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Configuration/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "comment": "string",
    "key": "string",
    "value": "string"
  }'
```

`POST /api/v1/GenevaActions/Configuration/{target}`

> Body parameter

```json
{
  "comment": "string",
  "key": "string",
  "value": "string"
}
```

<h3 id="postapiv1genevaactionsconfigurationtarget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|string|true|none|
|body|body|[UpdateSystemConfigurationBody](#schemaupdatesystemconfigurationbody)|true|none|
|» comment|body|string \| null|false|none|
|» key|body|string \| null|false|none|
|» value|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "comment": "string",
  "key": "string",
  "value": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1genevaactionsconfigurationtarget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SystemConfigurationResponse](#schemasystemconfigurationresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get/api/v1/GenevaActions/Configuration/{target}/{key}

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Configuration/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/GenevaActions/Configuration/{target}/{key}`

<h3 id="getapiv1genevaactionsconfigurationtargetkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|string|true|none|
|key|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "comment": "string",
  "key": "string",
  "value": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1genevaactionsconfigurationtargetkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SystemConfigurationResponse](#schemasystemconfigurationresponse)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete/api/v1/GenevaActions/Configuration/{target}/{key}

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Configuration/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/GenevaActions/Configuration/{target}/{key}`

<h3 id="deleteapiv1genevaactionsconfigurationtargetkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|string|true|none|
|key|path|string|true|none|

> Example responses

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="deleteapiv1genevaactionsconfigurationtargetkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-pools">Pools</h1>

## post/api/v1/GenevaActions/Pools/change-resource-deletion-setting

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Pools/change-resource-deletion-setting \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "comment": "string",
    "enabled": true,
    "poolCode": "string",
    "poolType": "string",
    "region": "string"
  }'
```

`POST /api/v1/GenevaActions/Pools/change-resource-deletion-setting`

> Body parameter

```json
{
  "comment": "string",
  "enabled": true,
  "poolCode": "string",
  "poolType": "string",
  "region": "string"
}
```

<h3 id="postapiv1genevaactionspoolschange-resource-deletion-setting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChangeResourceDeletionRequestBody](#schemachangeresourcedeletionrequestbody)|true|none|
|» comment|body|string \| null|false|none|
|» enabled|body|boolean|false|none|
|» poolCode|body|string \| null|false|none|
|» poolType|body|string \| null|false|none|
|» region|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "comment": "string",
  "key": "string",
  "value": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1genevaactionspoolschange-resource-deletion-setting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SystemConfigurationResponse](#schemasystemconfigurationresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/GenevaActions/Pools/{poolCode}/rotate-pool

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Pools/string/rotate-pool \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/GenevaActions/Pools/{poolCode}/rotate-pool`

<h3 id="postapiv1genevaactionspoolspoolcoderotate-pool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|poolCode|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1genevaactionspoolspoolcoderotate-pool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/GenevaActions/Pools/{target}

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Pools/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "comment": "string",
    "maxTargetCount": "string",
    "minTargetCount": "string",
    "poolCode": "string",
    "poolType": "string",
    "region": "string",
    "targetCount": "string"
  }'
```

`POST /api/v1/GenevaActions/Pools/{target}`

> Body parameter

```json
{
  "comment": "string",
  "maxTargetCount": "string",
  "minTargetCount": "string",
  "poolCode": "string",
  "poolType": "string",
  "region": "string",
  "targetCount": "string"
}
```

<h3 id="postapiv1genevaactionspoolstarget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|string|true|none|
|body|body|[PoolConfigRequestBody](#schemapoolconfigrequestbody)|true|none|
|» comment|body|string \| null|false|none|
|» maxTargetCount|body|string \| null|false|none|
|» minTargetCount|body|string \| null|false|none|
|» poolCode|body|string \| null|false|none|
|» poolType|body|string \| null|false|none|
|» region|body|string \| null|false|none|
|» targetCount|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "comment": "string",
  "key": "string",
  "value": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1genevaactionspoolstarget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SystemConfigurationResponse](#schemasystemconfigurationresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get/api/v1/pools/default

> Code samples

```bash
curl https://example.com/api/v1/pools/default \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/pools/default`

<h3 id="getapiv1poolsdefault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|skuName|query|[string]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "allWithLatestVersion": true,
    "isEnvironmentPool": true,
    "location": "string",
    "poolCode": "string",
    "readyUnassignedCount": 0,
    "readyUnassignedLatestVersionCount": 0,
    "readyUnassignedNotLatestVersionAndIdleCount": 0,
    "readyUnassignedNotLatestVersionCount": 0,
    "resourceType": "string",
    "sku": "string"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1poolsdefault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<h3 id="getapiv1poolsdefault-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PoolStatusResponseBody](#schemapoolstatusresponsebody)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-prebuilds">Prebuilds</h1>

## post/api/v1/GenevaActions/Prebuilds/pools/createorupdatesettings

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Prebuilds/pools/createorupdatesettings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "branchName": "string",
    "devContainerPath": "string",
    "pools": [
      {
        "poolType": "0 (None)",
        "skuName": "string",
        "targetCount": 0
      }
    ],
    "repoId": "string",
    "storageType": "0 (V1)"
  }'
```

`POST /api/v1/GenevaActions/Prebuilds/pools/createorupdatesettings`

> Body parameter

```json
{
  "branchName": "string",
  "devContainerPath": "string",
  "pools": [
    {
      "poolType": "0 (None)",
      "skuName": "string",
      "targetCount": 0
    }
  ],
  "repoId": "string",
  "storageType": "0 (V1)"
}
```

<h3 id="postapiv1genevaactionsprebuildspoolscreateorupdatesettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PoolSettingsBody](#schemapoolsettingsbody)|true|none|
|» branchName|body|string \| null|false|none|
|» devContainerPath|body|string \| null|false|none|
|» pools|body|[[Pool](#schemapool)]|false|none|
|» repoId|body|string \| null|false|none|
|» storageType|body|[StorageType](#schemastoragetype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» storageType|0 (V1)|
|» storageType|1 (V2)|

> Example responses

> 400 Response

```json
"0 (Unknown)"
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1genevaactionsprebuildspoolscreateorupdatesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|400|Bad Request|Bad Request|[MessageCodes](#schemamessagecodes)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/GenevaActions/Prebuilds/pools/delete

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Prebuilds/pools/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "branchName": "string",
    "devContainerPath": "string",
    "pools": [
      {
        "poolType": "0 (None)",
        "skuName": "string",
        "targetCount": 0
      }
    ],
    "repoId": "string",
    "storageType": "0 (V1)"
  }'
```

`POST /api/v1/GenevaActions/Prebuilds/pools/delete`

> Body parameter

```json
{
  "branchName": "string",
  "devContainerPath": "string",
  "pools": [
    {
      "poolType": "0 (None)",
      "skuName": "string",
      "targetCount": 0
    }
  ],
  "repoId": "string",
  "storageType": "0 (V1)"
}
```

<h3 id="postapiv1genevaactionsprebuildspoolsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PoolSettingsBody](#schemapoolsettingsbody)|true|none|
|» branchName|body|string \| null|false|none|
|» devContainerPath|body|string \| null|false|none|
|» pools|body|[[Pool](#schemapool)]|false|none|
|» repoId|body|string \| null|false|none|
|» storageType|body|[StorageType](#schemastoragetype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» storageType|0 (V1)|
|» storageType|1 (V2)|

> Example responses

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1genevaactionsprebuildspoolsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put/api/v1/Prebuilds/pools/{poolId}/instances

> Code samples

```bash
curl https://example.com/api/v1/Prebuilds/pools/string/instances \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "environmentOptions": {
      "correlationId": "string"
    },
    "secrets": [
      {
        "name": "string",
        "type": "1 (EnvironmentVariable)",
        "value": "string"
      }
    ]
  }'
```

`PUT /api/v1/Prebuilds/pools/{poolId}/instances`

> Body parameter

```json
{
  "environmentOptions": {
    "correlationId": "string"
  },
  "secrets": [
    {
      "name": "string",
      "type": "1 (EnvironmentVariable)",
      "value": "string"
    }
  ]
}
```

<h3 id="putapiv1prebuildspoolspoolidinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|poolId|path|string|true|none|
|body|body|[CreateEnvironmentPoolResourceBody](#schemacreateenvironmentpoolresourcebody)|false|none|
|» environmentOptions|body|[PrebuildEnvironmentOptions](#schemaprebuildenvironmentoptions)|false|none|
|» secrets|body|[[SecretDataBody](#schemasecretdatabody)]|false|none|

> Example responses

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="putapiv1prebuildspoolspoolidinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/Prebuilds/pools/{poolId}/instances

> Code samples

```bash
curl https://example.com/api/v1/Prebuilds/pools/string/instances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "environmentOptions": {
      "correlationId": "string"
    },
    "secrets": [
      {
        "name": "string",
        "type": "1 (EnvironmentVariable)",
        "value": "string"
      }
    ]
  }'
```

`POST /api/v1/Prebuilds/pools/{poolId}/instances`

> Body parameter

```json
{
  "environmentOptions": {
    "correlationId": "string"
  },
  "secrets": [
    {
      "name": "string",
      "type": "1 (EnvironmentVariable)",
      "value": "string"
    }
  ]
}
```

<h3 id="postapiv1prebuildspoolspoolidinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|poolId|path|string|true|none|
|body|body|[CreateEnvironmentPoolResourceBody](#schemacreateenvironmentpoolresourcebody)|false|none|
|» environmentOptions|body|[PrebuildEnvironmentOptions](#schemaprebuildenvironmentoptions)|false|none|
|» secrets|body|[[SecretDataBody](#schemasecretdatabody)]|false|none|

> Example responses

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1prebuildspoolspoolidinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GetTemplateInfoRoute

<a id="opIdGetTemplateInfoRoute"></a>

> Code samples

```bash
curl https://example.com/api/v1/Prebuilds/template/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/Prebuilds/template/{environmentId}`

<h3 id="gettemplateinforoute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "branchName": "string",
  "commitId": "string",
  "id": "string",
  "isPrebuild": true,
  "lastUsedTime": "1970-01-01T00:00:00Z",
  "logicalSkus": [
    "string"
  ],
  "prebuildHash": "string",
  "repoId": 0,
  "templateStatus": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="gettemplateinforoute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PrebuildTemplateInfoResult](#schemaprebuildtemplateinforesult)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GetPrebuildReadinessRoute

<a id="opIdGetPrebuildReadinessRoute"></a>

> Code samples

```bash
curl https://example.com/api/v1/Prebuilds/templates/repo/string/branch/string/hash/string/location/string/skus \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/Prebuilds/templates/repo/{repoId}/branch/{branchName}/hash/{prebuildHash}/location/{location}/skus`

<h3 id="getprebuildreadinessroute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repoId|path|string|true|none|
|branchName|path|string|true|none|
|prebuildHash|path|string|true|none|
|location|path|string|true|none|
|storageType|query|[StorageType](#schemastoragetype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|storageType|0 (V1)|
|storageType|1 (V2)|

> Example responses

> 200 Response

```json
{
  "branchName": "string",
  "devContainerPath": "string",
  "location": "101 (EastAsia)",
  "poolSkus": [
    "string"
  ],
  "prebuildHash": "string",
  "repoId": "string",
  "supportedSkus": [
    "string"
  ],
  "templateSkus": [
    "string"
  ]
}
```

> 400 Response

```json
"string"
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getprebuildreadinessroute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PrebuildReadinessResult](#schemaprebuildreadinessresult)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-privacy">Privacy</h1>

## post/api/v1/GenevaActions/Privacy/refresh-profile-telemetry-properties

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Privacy/refresh-profile-telemetry-properties \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "partner": "string",
    "tenantId": "string",
    "userIds": "string"
  }'
```

`POST /api/v1/GenevaActions/Privacy/refresh-profile-telemetry-properties`

> Body parameter

```json
{
  "partner": "string",
  "tenantId": "string",
  "userIds": "string"
}
```

<h3 id="postapiv1genevaactionsprivacyrefresh-profile-telemetry-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RefreshProfileTelemetryPropertiesRequest](#schemarefreshprofiletelemetrypropertiesrequest)|true|none|
|» partner|body|string \| null|false|none|
|» tenantId|body|string \| null|false|none|
|» userIds|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "failed": [
    {
      "oid": "string",
      "provider": "string",
      "tid": "string"
    }
  ],
  "succeeded": [
    {
      "oid": "string",
      "provider": "string",
      "tid": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1genevaactionsprivacyrefresh-profile-telemetry-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RefreshProfileTelemetryPropertiesResponse](#schemarefreshprofiletelemetrypropertiesresponse)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-resources">Resources</h1>

## post/api/v1/GenevaActions/Resources/{resourceId}/under-investigation

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/Resources/string/under-investigation \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/GenevaActions/Resources/{resourceId}/under-investigation`

<h3 id="postapiv1genevaactionsresourcesresourceidunder-investigation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "investigationStarted": "1970-01-01T00:00:00Z",
  "resourceId": "string",
  "underInvestigation": true,
  "updated": true
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1genevaactionsresourcesresourceidunder-investigation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UnderInvestigationResponseBody](#schemaunderinvestigationresponsebody)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-vnetpooldefinitions">VnetPoolDefinitions</h1>

## post/api/v1/GenevaActions/VnetPoolDefinitions

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/VnetPoolDefinitions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dimensions": {
      "property1": "string",
      "property2": "string"
    },
    "isEnabled": true,
    "location": "101 (EastAsia)",
    "logicalSkus": [
      "string"
    ],
    "subtype": "0 (Default)",
    "targetCount": 0,
    "type": "1 (ComputeVM)"
  }'
```

`POST /api/v1/GenevaActions/VnetPoolDefinitions`

> Body parameter

```json
{
  "dimensions": {
    "property1": "string",
    "property2": "string"
  },
  "isEnabled": true,
  "location": "101 (EastAsia)",
  "logicalSkus": [
    "string"
  ],
  "subtype": "0 (Default)",
  "targetCount": 0,
  "type": "1 (ComputeVM)"
}
```

<h3 id="postapiv1genevaactionsvnetpooldefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PoolDefinitionInput](#schemapooldefinitioninput)|false|none|
|» dimensions|body|object|true|none|
|» » **additionalProperties**|body|string \| null|false|none|
|» isEnabled|body|boolean|true|none|
|» location|body|[AzureLocation](#schemaazurelocation)|true|none|
|» logicalSkus|body|[string]|false|none|
|» subtype|body|[ResourceSubtype](#schemaresourcesubtype)|true|none|
|» targetCount|body|integer(int32)|true|none|
|» type|body|[ResourceType](#schemaresourcetype)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» location|101 (EastAsia)|
|» location|102 (SouthEastAsia)|
|» location|201 (AustraliaCentral)|
|» location|202 (AustraliaCentral2)|
|» location|203 (AustraliaEast)|
|» location|205 (AustraliaSouthEast)|
|» location|301 (BrazilSouth)|
|» location|401 (CanadaCentral)|
|» location|402 (CanadaEast)|
|» location|501 (NorthEurope)|
|» location|502 (WestEurope)|
|» location|601 (FranceCentral)|
|» location|602 (FranceSouth)|
|» location|701 (CentralIndia)|
|» location|702 (SouthIndia)|
|» location|703 (WestIndia)|
|» location|801 (JapanEast)|
|» location|802 (JapanWest)|
|» location|901 (KoreaCentral)|
|» location|902 (KoreaSouth)|
|» location|1001 (SouthAfricaNorth)|
|» location|1002 (SouthAfricaWest)|
|» location|1201 (UaeCentral)|
|» location|1202 (UaeNorth)|
|» location|1401 (UkSouth)|
|» location|1402 (UkWest)|
|» location|1501 (CentralUs)|
|» location|1502 (EastUs)|
|» location|1503 (EastUs2)|
|» location|1504 (NorthCentralUs)|
|» location|1505 (SouthCentralUs)|
|» location|1506 (WestCentralUs)|
|» location|1507 (WestUs)|
|» location|1508 (WestUs2)|
|» location|1509 (WestUs3)|
|» location|1601 (CentralUsEuap)|
|» location|1602 (EastUs2Euap)|
|» location|1701 (SwitzerlandNorth)|
|» location|1702 (SwitzerlandWest)|
|» location|1801 (GermanyNorth)|
|» location|1802 (GermanyWestCentral)|
|» location|1901 (NorwayWest)|
|» location|1902 (NorwayEast)|
|» subtype|0 (Default)|
|» subtype|2 (ShrunkBlob)|
|» subtype|3 (FullBlob)|
|» subtype|4 (UserParametersBlob)|
|» subtype|5 (PrebuildHash)|
|» subtype|6 (VnetInjected)|
|» type|1 (ComputeVM)|
|» type|2 (StorageFileShare)|
|» type|3 (StorageArchive)|
|» type|4 (KeyVault)|
|» type|5 (OSDisk)|
|» type|6 (NetworkInterface)|
|» type|7 (InputQueue)|
|» type|8 (Snapshot)|
|» type|9 (PoolQueue)|
|» type|10 (VirtualNetwork)|
|» type|11 (NetworkSecurityGroup)|
|» type|12 (LiveShareWorkspace)|
|» type|13 (BasisTunnel)|
|» type|14 (StorageBlockBlob)|
|» type|15 (DataDisk)|
|» type|16 (PortForwardingWorkspace)|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1genevaactionsvnetpooldefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete/api/v1/GenevaActions/VnetPoolDefinitions

> Code samples

```bash
curl https://example.com/api/v1/GenevaActions/VnetPoolDefinitions \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dimensions": {
      "property1": "string",
      "property2": "string"
    },
    "isEnabled": true,
    "location": "101 (EastAsia)",
    "logicalSkus": [
      "string"
    ],
    "subtype": "0 (Default)",
    "targetCount": 0,
    "type": "1 (ComputeVM)"
  }'
```

`DELETE /api/v1/GenevaActions/VnetPoolDefinitions`

> Body parameter

```json
{
  "dimensions": {
    "property1": "string",
    "property2": "string"
  },
  "isEnabled": true,
  "location": "101 (EastAsia)",
  "logicalSkus": [
    "string"
  ],
  "subtype": "0 (Default)",
  "targetCount": 0,
  "type": "1 (ComputeVM)"
}
```

<h3 id="deleteapiv1genevaactionsvnetpooldefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PoolDefinitionInput](#schemapooldefinitioninput)|false|none|
|» dimensions|body|object|true|none|
|» » **additionalProperties**|body|string \| null|false|none|
|» isEnabled|body|boolean|true|none|
|» location|body|[AzureLocation](#schemaazurelocation)|true|none|
|» logicalSkus|body|[string]|false|none|
|» subtype|body|[ResourceSubtype](#schemaresourcesubtype)|true|none|
|» targetCount|body|integer(int32)|true|none|
|» type|body|[ResourceType](#schemaresourcetype)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» location|101 (EastAsia)|
|» location|102 (SouthEastAsia)|
|» location|201 (AustraliaCentral)|
|» location|202 (AustraliaCentral2)|
|» location|203 (AustraliaEast)|
|» location|205 (AustraliaSouthEast)|
|» location|301 (BrazilSouth)|
|» location|401 (CanadaCentral)|
|» location|402 (CanadaEast)|
|» location|501 (NorthEurope)|
|» location|502 (WestEurope)|
|» location|601 (FranceCentral)|
|» location|602 (FranceSouth)|
|» location|701 (CentralIndia)|
|» location|702 (SouthIndia)|
|» location|703 (WestIndia)|
|» location|801 (JapanEast)|
|» location|802 (JapanWest)|
|» location|901 (KoreaCentral)|
|» location|902 (KoreaSouth)|
|» location|1001 (SouthAfricaNorth)|
|» location|1002 (SouthAfricaWest)|
|» location|1201 (UaeCentral)|
|» location|1202 (UaeNorth)|
|» location|1401 (UkSouth)|
|» location|1402 (UkWest)|
|» location|1501 (CentralUs)|
|» location|1502 (EastUs)|
|» location|1503 (EastUs2)|
|» location|1504 (NorthCentralUs)|
|» location|1505 (SouthCentralUs)|
|» location|1506 (WestCentralUs)|
|» location|1507 (WestUs)|
|» location|1508 (WestUs2)|
|» location|1509 (WestUs3)|
|» location|1601 (CentralUsEuap)|
|» location|1602 (EastUs2Euap)|
|» location|1701 (SwitzerlandNorth)|
|» location|1702 (SwitzerlandWest)|
|» location|1801 (GermanyNorth)|
|» location|1802 (GermanyWestCentral)|
|» location|1901 (NorwayWest)|
|» location|1902 (NorwayEast)|
|» subtype|0 (Default)|
|» subtype|2 (ShrunkBlob)|
|» subtype|3 (FullBlob)|
|» subtype|4 (UserParametersBlob)|
|» subtype|5 (PrebuildHash)|
|» subtype|6 (VnetInjected)|
|» type|1 (ComputeVM)|
|» type|2 (StorageFileShare)|
|» type|3 (StorageArchive)|
|» type|4 (KeyVault)|
|» type|5 (OSDisk)|
|» type|6 (NetworkInterface)|
|» type|7 (InputQueue)|
|» type|8 (Snapshot)|
|» type|9 (PoolQueue)|
|» type|10 (VirtualNetwork)|
|» type|11 (NetworkSecurityGroup)|
|» type|12 (LiveShareWorkspace)|
|» type|13 (BasisTunnel)|
|» type|14 (StorageBlockBlob)|
|» type|15 (DataDisk)|
|» type|16 (PortForwardingWorkspace)|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="deleteapiv1genevaactionsvnetpooldefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-heartbeat">HeartBeat</h1>

## post/api/v1/HeartBeat

> Code samples

```bash
curl https://example.com/api/v1/HeartBeat \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "agentVersion": "string",
    "collectedDataList": [
      {
        "environmentId": "string",
        "name": "string",
        "parentActivityId": "string",
        "timestamp": "1970-01-01T00:00:00Z"
      }
    ],
    "environmentId": "string",
    "resourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "timeStamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /api/v1/HeartBeat`

> Body parameter

```json
{
  "agentVersion": "string",
  "collectedDataList": [
    {
      "environmentId": "string",
      "name": "string",
      "parentActivityId": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "environmentId": "string",
  "resourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "timeStamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="postapiv1heartbeat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[HeartBeatBody](#schemaheartbeatbody)|false|none|
|» agentVersion|body|string \| null|false|none|
|» collectedDataList|body|[[CollectedData](#schemacollecteddata)]|false|none|
|» environmentId|body|string \| null|false|none|
|» resourceId|body|string(uuid)|false|none|
|» timeStamp|body|string(date-time)|false|none|

> Example responses

> 422 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1heartbeat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|422|Unprocessable Entity|Client Error|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-locations">Locations</h1>

## get/api/v1/Locations

> Code samples

```bash
curl https://example.com/api/v1/Locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/Locations`

> Example responses

> 200 Response

```json
{
  "available": [
    "101 (EastAsia)"
  ],
  "current": "101 (EastAsia)",
  "hostnames": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="getapiv1locations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocationsResult](#schemalocationsresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get/api/v1/Locations/{location}

> Code samples

```bash
curl https://example.com/api/v1/Locations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/Locations/{location}`

<h3 id="getapiv1locationslocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|path|string|true|none|
|planId|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "skus": [
    {
      "availableSettings": {
        "sku": [
          "string"
        ]
      },
      "displayName": "string",
      "name": "string",
      "os": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1locationslocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocationInfoResult](#schemalocationinforesult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-sas">Sas</h1>

## get/api/v1/Sas

> Code samples

```bash
curl https://example.com/api/v1/Sas \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/Sas`

> Example responses

> 200 Response

```json
[
  {
    "filters": [
      {
        "type": "1 (GitRepo)",
        "value": "string"
      }
    ],
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lastModified": "1970-01-01T00:00:00Z",
    "notes": "string",
    "scope": "1 (Plan)",
    "secretName": "string",
    "type": "1 (EnvironmentVariable)"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1sas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|

<h3 id="getapiv1sas-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScopedSecretResultBody](#schemascopedsecretresultbody)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-secrets">Secrets</h1>

## get/api/v1/Secrets

> Code samples

```bash
curl https://example.com/api/v1/Secrets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/Secrets`

<h3 id="getapiv1secrets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planId|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "filters": [
      {
        "type": "1 (GitRepo)",
        "value": "string"
      }
    ],
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lastModified": "1970-01-01T00:00:00Z",
    "notes": "string",
    "scope": "1 (Plan)",
    "secretName": "string",
    "type": "1 (EnvironmentVariable)"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1secrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|

<h3 id="getapiv1secrets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScopedSecretResultBody](#schemascopedsecretresultbody)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/Secrets

> Code samples

```bash
curl https://example.com/api/v1/Secrets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filters": [
      {
        "type": "1 (GitRepo)",
        "value": "string"
      }
    ],
    "notes": "string",
    "scope": "1 (Plan)",
    "secretName": "string",
    "type": "1 (EnvironmentVariable)",
    "value": "string"
  }'
```

`POST /api/v1/Secrets`

> Body parameter

```json
{
  "filters": [
    {
      "type": "1 (GitRepo)",
      "value": "string"
    }
  ],
  "notes": "string",
  "scope": "1 (Plan)",
  "secretName": "string",
  "type": "1 (EnvironmentVariable)",
  "value": "string"
}
```

<h3 id="postapiv1secrets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planId|query|string|false|none|
|body|body|[ScopedCreateSecretBody](#schemascopedcreatesecretbody)|false|none|
|» filters|body|[[SecretFilterBody](#schemasecretfilterbody)]|false|none|
|» notes|body|string \| null|false|none|
|» scope|body|[SecretScope](#schemasecretscope)|false|none|
|» secretName|body|string \| null|false|none|
|» type|body|[SecretType](#schemasecrettype)|false|none|
|» value|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scope|1 (Plan)|
|» scope|2 (User)|
|» type|1 (EnvironmentVariable)|
|» type|2 (ContainerRegistry)|

> Example responses

> 200 Response

```json
{
  "filters": [
    {
      "type": "1 (GitRepo)",
      "value": "string"
    }
  ],
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "lastModified": "1970-01-01T00:00:00Z",
  "notes": "string",
  "scope": "1 (Plan)",
  "secretName": "string",
  "type": "1 (EnvironmentVariable)"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1secrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScopedSecretResultBody](#schemascopedsecretresultbody)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put/api/v1/Secrets/{secretId}

> Code samples

```bash
curl https://example.com/api/v1/Secrets/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filters": [
      {
        "type": "1 (GitRepo)",
        "value": "string"
      }
    ],
    "notes": "string",
    "scope": "1 (Plan)",
    "secretName": "string",
    "value": "string"
  }'
```

`PUT /api/v1/Secrets/{secretId}`

> Body parameter

```json
{
  "filters": [
    {
      "type": "1 (GitRepo)",
      "value": "string"
    }
  ],
  "notes": "string",
  "scope": "1 (Plan)",
  "secretName": "string",
  "value": "string"
}
```

<h3 id="putapiv1secretssecretid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planId|query|string|false|none|
|secretId|path|string(uuid)|true|none|
|body|body|[ScopedUpdateSecretBody](#schemascopedupdatesecretbody)|false|none|
|» filters|body|[[SecretFilterBody](#schemasecretfilterbody)]|false|none|
|» notes|body|string \| null|false|none|
|» scope|body|[SecretScope](#schemasecretscope)|false|none|
|» secretName|body|string \| null|false|none|
|» value|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scope|1 (Plan)|
|» scope|2 (User)|

> Example responses

> 200 Response

```json
{
  "filters": [
    {
      "type": "1 (GitRepo)",
      "value": "string"
    }
  ],
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "lastModified": "1970-01-01T00:00:00Z",
  "notes": "string",
  "scope": "1 (Plan)",
  "secretName": "string",
  "type": "1 (EnvironmentVariable)"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="putapiv1secretssecretid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScopedSecretResultBody](#schemascopedsecretresultbody)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete/api/v1/Secrets/{secretId}

> Code samples

```bash
curl https://example.com/api/v1/Secrets/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/Secrets/{secretId}`

<h3 id="deleteapiv1secretssecretid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planId|query|string|false|none|
|scope|query|[SecretScope](#schemasecretscope)|false|none|
|secretId|path|string(uuid)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scope|1 (Plan)|
|scope|2 (User)|

> Example responses

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="deleteapiv1secretssecretid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-tenant">Tenant</h1>

## get/api/v1/Tenant/{tenantId}

> Code samples

```bash
curl https://example.com/api/v1/Tenant/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/Tenant/{tenantId}`

<h3 id="getapiv1tenanttenantid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenantId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1tenanttenantid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TenantInfoResult](#schematenantinforesult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|500|Internal Server Error|Server Error|None|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put/api/v1/Tenant/{tenantId}

> Code samples

```bash
curl https://example.com/api/v1/Tenant/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/v1/Tenant/{tenantId}`

<h3 id="putapiv1tenanttenantid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenantId|path|string(uuid)|true|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="putapiv1tenanttenantid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|500|Internal Server Error|Server Error|None|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete/api/v1/Tenant/{tenantId}

> Code samples

```bash
curl https://example.com/api/v1/Tenant/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/Tenant/{tenantId}`

<h3 id="deleteapiv1tenanttenantid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenantId|path|string(uuid)|true|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="deleteapiv1tenanttenantid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|500|Internal Server Error|Server Error|None|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-tokens">Tokens</h1>

## post/api/v1/Tokens/plans/{planName}/deleteAllCodespaces

> Code samples

```bash
curl https://example.com/api/v1/Tokens/plans/string/deleteAllCodespaces \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/Tokens/plans/{planName}/deleteAllCodespaces`

<h3 id="postapiv1tokensplansplannamedeleteallcodespaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planName|path|string|true|none|
|x-subscription-id|header|string|false|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1tokensplansplannamedeleteallcodespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/Tokens/plans/{planName}/readAllCodespaces

> Code samples

```bash
curl https://example.com/api/v1/Tokens/plans/string/readAllCodespaces \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/Tokens/plans/{planName}/readAllCodespaces`

<h3 id="postapiv1tokensplansplannamereadallcodespaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planName|path|string|true|none|
|x-subscription-id|header|string|false|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1tokensplansplannamereadallcodespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/Tokens/plans/{planName}/writeCodespaces

> Code samples

```bash
curl https://example.com/api/v1/Tokens/plans/string/writeCodespaces \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/Tokens/plans/{planName}/writeCodespaces`

<h3 id="postapiv1tokensplansplannamewritecodespaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planName|path|string|true|none|
|x-subscription-id|header|string|false|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1tokensplansplannamewritecodespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/Tokens/plans/{planName}/writeDelegates

> Code samples

```bash
curl https://example.com/api/v1/Tokens/plans/string/writeDelegates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "environmentIds": [
      "string"
    ],
    "expiration": "1970-01-01T00:00:00Z",
    "identity": {
      "displayName": "string",
      "id": "string",
      "username": "string"
    },
    "portNumbers": [
      0
    ],
    "scope": "string"
  }'
```

`POST /api/v1/Tokens/plans/{planName}/writeDelegates`

> Body parameter

```json
{
  "environmentIds": [
    "string"
  ],
  "expiration": "1970-01-01T00:00:00Z",
  "identity": {
    "displayName": "string",
    "id": "string",
    "username": "string"
  },
  "portNumbers": [
    0
  ],
  "scope": "string"
}
```

<h3 id="postapiv1tokensplansplannamewritedelegates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planName|path|string|true|none|
|x-subscription-id|header|string|false|none|
|body|body|[IssueDelegatePlanAccessTokenBody](#schemaissuedelegateplanaccesstokenbody)|false|none|
|» environmentIds|body|[string]|false|none|
|» expiration|body|string(date-time) \| null|false|none|
|» identity|body|[DelegateIdentity](#schemadelegateidentity)|false|none|
|» portNumbers|body|[integer(int32)]|false|none|
|» scope|body|string \| null|false|none|

<h3 id="postapiv1tokensplansplannamewritedelegates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put/api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}

> Code samples

```bash
curl https://example.com/api/v1/Tokens/subscriptions/string/resourceGroups/string/providers/string/plans/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "identity": {
      "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "string"
    },
    "location": "string",
    "name": "string",
    "properties": {
      "defaultCodespaceSku": "string",
      "defaultEnvironmentSku": "string",
      "encryption": {
        "keySource": "string",
        "keyVaultProperties": {
          "keyName": "string",
          "keyVaultUri": "string",
          "keyVersion": "string"
        }
      },
      "userId": "string",
      "vnetProperties": {
        "subnetId": "string"
      }
    },
    "provisioningState": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "string"
  }'
```

`PUT /api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}`

> Body parameter

```json
{
  "id": "string",
  "identity": {
    "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "string"
  },
  "location": "string",
  "name": "string",
  "properties": {
    "defaultCodespaceSku": "string",
    "defaultEnvironmentSku": "string",
    "encryption": {
      "keySource": "string",
      "keyVaultProperties": {
        "keyName": "string",
        "keyVaultUri": "string",
        "keyVersion": "string"
      }
    },
    "userId": "string",
    "vnetProperties": {
      "subnetId": "string"
    }
  },
  "provisioningState": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "string"
}
```

<h3 id="putapiv1tokenssubscriptionssubscriptionidresourcegroupsresourcegroupprovidersprovidernamespaceplansresourcename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|providerNamespace|path|string|true|none|
|resourceName|path|string|true|none|
|headers|header|[PlanResourceHeaders](#schemaplanresourceheaders)|false|none|
|body|body|[PlanResource](#schemaplanresource)|false|none|
|» id|body|string \| null|false|none|
|» identity|body|[PlanResourceIdentity](#schemaplanresourceidentity)|false|none|
|» location|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» properties|body|[PlanResourceProperties](#schemaplanresourceproperties)|false|none|
|» provisioningState|body|string \| null|false|none|
|» tags|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» type|body|string \| null|false|none|

<h3 id="putapiv1tokenssubscriptionssubscriptionidresourcegroupsresourcegroupprovidersprovidernamespaceplansresourcename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/deleteAllCodespaces

> Code samples

```bash
curl https://example.com/api/v1/Tokens/subscriptions/string/resourceGroups/string/providers/string/plans/string/deleteAllCodespaces \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/deleteAllCodespaces`

<h3 id="postapiv1tokenssubscriptionssubscriptionidresourcegroupsresourcegroupprovidersprovidernamespaceplansresourcenamedeleteallcodespaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|providerNamespace|path|string|true|none|
|resourceName|path|string|true|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1tokenssubscriptionssubscriptionidresourcegroupsresourcegroupprovidersprovidernamespaceplansresourcenamedeleteallcodespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/deleteAllEnvironments

> Code samples

```bash
curl https://example.com/api/v1/Tokens/subscriptions/string/resourceGroups/string/providers/string/plans/string/deleteAllEnvironments \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/deleteAllEnvironments`

<h3 id="postapiv1tokenssubscriptionssubscriptionidresourcegroupsresourcegroupprovidersprovidernamespaceplansresourcenamedeleteallenvironments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|providerNamespace|path|string|true|none|
|resourceName|path|string|true|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1tokenssubscriptionssubscriptionidresourcegroupsresourcegroupprovidersprovidernamespaceplansresourcenamedeleteallenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/readAllCodespaces

> Code samples

```bash
curl https://example.com/api/v1/Tokens/subscriptions/string/resourceGroups/string/providers/string/plans/string/readAllCodespaces \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/readAllCodespaces`

<h3 id="postapiv1tokenssubscriptionssubscriptionidresourcegroupsresourcegroupprovidersprovidernamespaceplansresourcenamereadallcodespaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|providerNamespace|path|string|true|none|
|resourceName|path|string|true|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1tokenssubscriptionssubscriptionidresourcegroupsresourcegroupprovidersprovidernamespaceplansresourcenamereadallcodespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/readAllEnvironments

> Code samples

```bash
curl https://example.com/api/v1/Tokens/subscriptions/string/resourceGroups/string/providers/string/plans/string/readAllEnvironments \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/readAllEnvironments`

<h3 id="postapiv1tokenssubscriptionssubscriptionidresourcegroupsresourcegroupprovidersprovidernamespaceplansresourcenamereadallenvironments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|providerNamespace|path|string|true|none|
|resourceName|path|string|true|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1tokenssubscriptionssubscriptionidresourcegroupsresourcegroupprovidersprovidernamespaceplansresourcenamereadallenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/writeCodespaces

> Code samples

```bash
curl https://example.com/api/v1/Tokens/subscriptions/string/resourceGroups/string/providers/string/plans/string/writeCodespaces \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/writeCodespaces`

<h3 id="postapiv1tokenssubscriptionssubscriptionidresourcegroupsresourcegroupprovidersprovidernamespaceplansresourcenamewritecodespaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|providerNamespace|path|string|true|none|
|resourceName|path|string|true|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1tokenssubscriptionssubscriptionidresourcegroupsresourcegroupprovidersprovidernamespaceplansresourcenamewritecodespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/writeDelegates

> Code samples

```bash
curl https://example.com/api/v1/Tokens/subscriptions/string/resourceGroups/string/providers/string/plans/string/writeDelegates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "environmentIds": [
      "string"
    ],
    "expiration": "1970-01-01T00:00:00Z",
    "identity": {
      "displayName": "string",
      "id": "string",
      "username": "string"
    },
    "portNumbers": [
      0
    ],
    "scope": "string"
  }'
```

`POST /api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/writeDelegates`

> Body parameter

```json
{
  "environmentIds": [
    "string"
  ],
  "expiration": "1970-01-01T00:00:00Z",
  "identity": {
    "displayName": "string",
    "id": "string",
    "username": "string"
  },
  "portNumbers": [
    0
  ],
  "scope": "string"
}
```

<h3 id="postapiv1tokenssubscriptionssubscriptionidresourcegroupsresourcegroupprovidersprovidernamespaceplansresourcenamewritedelegates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|providerNamespace|path|string|true|none|
|resourceName|path|string|true|none|
|body|body|[IssueDelegatePlanAccessTokenBody](#schemaissuedelegateplanaccesstokenbody)|false|none|
|» environmentIds|body|[string]|false|none|
|» expiration|body|string(date-time) \| null|false|none|
|» identity|body|[DelegateIdentity](#schemadelegateidentity)|false|none|
|» portNumbers|body|[integer(int32)]|false|none|
|» scope|body|string \| null|false|none|

<h3 id="postapiv1tokenssubscriptionssubscriptionidresourcegroupsresourcegroupprovidersprovidernamespaceplansresourcenamewritedelegates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/writeEnvironments

> Code samples

```bash
curl https://example.com/api/v1/Tokens/subscriptions/string/resourceGroups/string/providers/string/plans/string/writeEnvironments \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/writeEnvironments`

<h3 id="postapiv1tokenssubscriptionssubscriptionidresourcegroupsresourcegroupprovidersprovidernamespaceplansresourcenamewriteenvironments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|providerNamespace|path|string|true|none|
|resourceName|path|string|true|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1tokenssubscriptionssubscriptionidresourcegroupsresourcegroupprovidersprovidernamespaceplansresourcenamewriteenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-tunnel">Tunnel</h1>

## get/api/v1/Tunnel/{environmentId}/portInfo

> Code samples

```bash
curl https://example.com/api/v1/Tunnel/497f6eca-6276-4993-bfeb-53cbbbba6f08/portInfo \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/Tunnel/{environmentId}/portInfo`

<h3 id="getapiv1tunnelenvironmentidportinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentId|path|string(uuid)|true|none|
|portNumber|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "portVisibility": "string",
  "tunnelToken": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1tunnelenvironmentidportinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TunnelPortInfoResult](#schematunnelportinforesult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-usersubscriptions">UserSubscriptions</h1>

## post/api/v1/UserSubscriptions

> Code samples

```bash
curl https://example.com/api/v1/UserSubscriptions \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/UserSubscriptions`

<h3 id="postapiv1usersubscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|false|none|

<h3 id="postapiv1usersubscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete/api/v1/UserSubscriptions

> Code samples

```bash
curl https://example.com/api/v1/UserSubscriptions \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/UserSubscriptions`

<h3 id="deleteapiv1usersubscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|false|none|

<h3 id="deleteapiv1usersubscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-networksettings">NetworkSettings</h1>

## put/api/v1/subscriptions/{subscriptionId}/providers/GitHub.Network/{resourceType}/SubscriptionLifeCycleNotification

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/providers/GitHub.Network/string/SubscriptionLifeCycleNotification \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "properties": {
      "accountOwner": {
        "email": "string",
        "puid": "string"
      },
      "additionalProperties": {
        "billingProperties": {
          "billingType": "string",
          "channelType": "string",
          "paymentType": "string",
          "tier": "string",
          "workloadType": "string"
        },
        "resourceProviderProperties": "string"
      },
      "locationPlacementId": "string",
      "managedByTenants": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "quotaId": "string",
      "registeredFeatures": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "registrationDate": "1970-01-01T00:00:00Z",
    "state": "string"
  }'
```

`PUT /api/v1/subscriptions/{subscriptionId}/providers/GitHub.Network/{resourceType}/SubscriptionLifeCycleNotification`

> Body parameter

```json
{
  "properties": {
    "accountOwner": {
      "email": "string",
      "puid": "string"
    },
    "additionalProperties": {
      "billingProperties": {
        "billingType": "string",
        "channelType": "string",
        "paymentType": "string",
        "tier": "string",
        "workloadType": "string"
      },
      "resourceProviderProperties": "string"
    },
    "locationPlacementId": "string",
    "managedByTenants": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "quotaId": "string",
    "registeredFeatures": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "registrationDate": "1970-01-01T00:00:00Z",
  "state": "string"
}
```

<h3 id="putapiv1subscriptionssubscriptionidprovidersgithubnetworkresourcetypesubscriptionlifecyclenotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceType|path|string|true|none|
|body|body|[RPSubscriptionNotification](#schemarpsubscriptionnotification)|false|none|
|» properties|body|[RPSubscriptionProperties](#schemarpsubscriptionproperties)|false|none|
|» registrationDate|body|string(date-time)|false|none|
|» state|body|string \| null|false|none|

<h3 id="putapiv1subscriptionssubscriptionidprovidersgithubnetworkresourcetypesubscriptionlifecyclenotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/providers/GitHub.Network/{resourceType}/resourceReadBegin

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/providers/GitHub.Network/string/resourceReadBegin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": [
      {
        "id": "string",
        "location": "string",
        "name": "string",
        "properties": {
          "subnetId": "string"
        },
        "provisioningState": "string",
        "tags": {
          "property1": "string",
          "property2": "string"
        },
        "type": "string"
      }
    ]
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/providers/GitHub.Network/{resourceType}/resourceReadBegin`

> Body parameter

```json
{
  "value": [
    {
      "id": "string",
      "location": "string",
      "name": "string",
      "properties": {
        "subnetId": "string"
      },
      "provisioningState": "string",
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "type": "string"
    }
  ]
}
```

<h3 id="postapiv1subscriptionssubscriptionidprovidersgithubnetworkresourcetyperesourcereadbegin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceType|path|string|true|none|
|body|body|[NetworkSettingsResourceList](#schemanetworksettingsresourcelist)|false|none|
|» value|body|[[NetworkSettingsResource](#schemanetworksettingsresource)]|false|none|

<h3 id="postapiv1subscriptionssubscriptionidprovidersgithubnetworkresourcetyperesourcereadbegin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/resourceReadBegin

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/GitHub.Network/string/resourceReadBegin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": [
      {
        "id": "string",
        "location": "string",
        "name": "string",
        "properties": {
          "subnetId": "string"
        },
        "provisioningState": "string",
        "tags": {
          "property1": "string",
          "property2": "string"
        },
        "type": "string"
      }
    ]
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/resourceReadBegin`

> Body parameter

```json
{
  "value": [
    {
      "id": "string",
      "location": "string",
      "name": "string",
      "properties": {
        "subnetId": "string"
      },
      "provisioningState": "string",
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "type": "string"
    }
  ]
}
```

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcereadbegin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceType|path|string|true|none|
|body|body|[NetworkSettingsResourceList](#schemanetworksettingsresourcelist)|false|none|
|» value|body|[[NetworkSettingsResource](#schemanetworksettingsresource)]|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcereadbegin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/GitHub.Network/string/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "location": "string",
    "name": "string",
    "properties": {
      "subnetId": "string"
    },
    "provisioningState": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "string"
  }'
```

`PUT /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}`

> Body parameter

```json
{
  "id": "string",
  "location": "string",
  "name": "string",
  "properties": {
    "subnetId": "string"
  },
  "provisioningState": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "string"
}
```

<h3 id="putapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceType|path|string|true|none|
|resourceName|path|string|true|none|
|body|body|[NetworkSettingsResource](#schemanetworksettingsresource)|false|none|
|» id|body|string \| null|false|none|
|» location|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» properties|body|[NetworkSettingsResourceProperties](#schemanetworksettingsresourceproperties)|false|none|
|» provisioningState|body|string \| null|false|none|
|» tags|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» type|body|string \| null|false|none|

<h3 id="putapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/GitHub.Network/string/string \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "location": "string",
    "name": "string",
    "properties": {
      "subnetId": "string"
    },
    "provisioningState": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "string"
  }'
```

`DELETE /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}`

> Body parameter

```json
{
  "id": "string",
  "location": "string",
  "name": "string",
  "properties": {
    "subnetId": "string"
  },
  "provisioningState": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "string"
}
```

<h3 id="deleteapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceType|path|string|true|none|
|resourceName|path|string|true|none|
|body|body|[NetworkSettingsResource](#schemanetworksettingsresource)|false|none|
|» id|body|string \| null|false|none|
|» location|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» properties|body|[NetworkSettingsResourceProperties](#schemanetworksettingsresourceproperties)|false|none|
|» provisioningState|body|string \| null|false|none|
|» tags|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» type|body|string \| null|false|none|

<h3 id="deleteapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## patch/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/GitHub.Network/string/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "location": "string",
    "name": "string",
    "properties": {
      "subnetId": "string"
    },
    "provisioningState": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "string"
  }'
```

`PATCH /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}`

> Body parameter

```json
{
  "id": "string",
  "location": "string",
  "name": "string",
  "properties": {
    "subnetId": "string"
  },
  "provisioningState": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "string"
}
```

<h3 id="patchapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceType|path|string|true|none|
|resourceName|path|string|true|none|
|body|body|[NetworkSettingsResource](#schemanetworksettingsresource)|false|none|
|» id|body|string \| null|false|none|
|» location|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» properties|body|[NetworkSettingsResourceProperties](#schemanetworksettingsresourceproperties)|false|none|
|» provisioningState|body|string \| null|false|none|
|» tags|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» type|body|string \| null|false|none|

<h3 id="patchapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceCreationCompleted

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/GitHub.Network/string/string/resourceCreationCompleted \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceCreationCompleted`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcenameresourcecreationcompleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceType|path|string|true|none|
|resourceName|path|string|true|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcenameresourcecreationcompleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceCreationValidate

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/GitHub.Network/string/string/resourceCreationValidate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "location": "string",
    "name": "string",
    "properties": {
      "subnetId": "string"
    },
    "provisioningState": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "string"
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceCreationValidate`

> Body parameter

```json
{
  "id": "string",
  "location": "string",
  "name": "string",
  "properties": {
    "subnetId": "string"
  },
  "provisioningState": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "string"
}
```

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcenameresourcecreationvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceType|path|string|true|none|
|resourceName|path|string|true|none|
|body|body|[NetworkSettingsResource](#schemanetworksettingsresource)|false|none|
|» id|body|string \| null|false|none|
|» location|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» properties|body|[NetworkSettingsResourceProperties](#schemanetworksettingsresourceproperties)|false|none|
|» provisioningState|body|string \| null|false|none|
|» tags|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» type|body|string \| null|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcenameresourcecreationvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceDeletionCompleted

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/GitHub.Network/string/string/resourceDeletionCompleted \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceDeletionCompleted`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcenameresourcedeletioncompleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceType|path|string|true|none|
|resourceName|path|string|true|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcenameresourcedeletioncompleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceDeletionValidate

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/GitHub.Network/string/string/resourceDeletionValidate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "location": "string",
    "name": "string",
    "properties": {
      "subnetId": "string"
    },
    "provisioningState": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "string"
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceDeletionValidate`

> Body parameter

```json
{
  "id": "string",
  "location": "string",
  "name": "string",
  "properties": {
    "subnetId": "string"
  },
  "provisioningState": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "string"
}
```

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcenameresourcedeletionvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceType|path|string|true|none|
|resourceName|path|string|true|none|
|body|body|[NetworkSettingsResource](#schemanetworksettingsresource)|false|none|
|» id|body|string \| null|false|none|
|» location|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» properties|body|[NetworkSettingsResourceProperties](#schemanetworksettingsresourceproperties)|false|none|
|» provisioningState|body|string \| null|false|none|
|» tags|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» type|body|string \| null|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcenameresourcedeletionvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourcePatchCompleted

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/GitHub.Network/string/string/resourcePatchCompleted \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourcePatchCompleted`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcenameresourcepatchcompleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceType|path|string|true|none|
|resourceName|path|string|true|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcenameresourcepatchcompleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourcePatchValidate

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/GitHub.Network/string/string/resourcePatchValidate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "location": "string",
    "name": "string",
    "properties": {
      "subnetId": "string"
    },
    "provisioningState": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "string"
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourcePatchValidate`

> Body parameter

```json
{
  "id": "string",
  "location": "string",
  "name": "string",
  "properties": {
    "subnetId": "string"
  },
  "provisioningState": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "string"
}
```

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcenameresourcepatchvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceType|path|string|true|none|
|resourceName|path|string|true|none|
|body|body|[NetworkSettingsResource](#schemanetworksettingsresource)|false|none|
|» id|body|string \| null|false|none|
|» location|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» properties|body|[NetworkSettingsResourceProperties](#schemanetworksettingsresourceproperties)|false|none|
|» provisioningState|body|string \| null|false|none|
|» tags|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» type|body|string \| null|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcenameresourcepatchvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceReadBegin

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/GitHub.Network/string/string/resourceReadBegin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "location": "string",
    "name": "string",
    "properties": {
      "subnetId": "string"
    },
    "provisioningState": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "string"
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceReadBegin`

> Body parameter

```json
{
  "id": "string",
  "location": "string",
  "name": "string",
  "properties": {
    "subnetId": "string"
  },
  "provisioningState": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "string"
}
```

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcenameresourcereadbegin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceType|path|string|true|none|
|resourceName|path|string|true|none|
|body|body|[NetworkSettingsResource](#schemanetworksettingsresource)|false|none|
|» id|body|string \| null|false|none|
|» location|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» properties|body|[NetworkSettingsResourceProperties](#schemanetworksettingsresourceproperties)|false|none|
|» provisioningState|body|string \| null|false|none|
|» tags|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» type|body|string \| null|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersgithubnetworkresourcetyperesourcenameresourcereadbegin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-plans">Plans</h1>

## put/api/v1/subscriptions/{subscriptionId}/providers/Microsoft.Codespaces/plans/SubscriptionLifeCycleNotification

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/providers/Microsoft.Codespaces/plans/SubscriptionLifeCycleNotification \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "properties": {
      "accountOwner": {
        "email": "string",
        "puid": "string"
      },
      "additionalProperties": {
        "billingProperties": {
          "billingType": "string",
          "channelType": "string",
          "paymentType": "string",
          "tier": "string",
          "workloadType": "string"
        },
        "resourceProviderProperties": "string"
      },
      "locationPlacementId": "string",
      "managedByTenants": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "quotaId": "string",
      "registeredFeatures": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "registrationDate": "1970-01-01T00:00:00Z",
    "state": "string"
  }'
```

`PUT /api/v1/subscriptions/{subscriptionId}/providers/Microsoft.Codespaces/plans/SubscriptionLifeCycleNotification`

> Body parameter

```json
{
  "properties": {
    "accountOwner": {
      "email": "string",
      "puid": "string"
    },
    "additionalProperties": {
      "billingProperties": {
        "billingType": "string",
        "channelType": "string",
        "paymentType": "string",
        "tier": "string",
        "workloadType": "string"
      },
      "resourceProviderProperties": "string"
    },
    "locationPlacementId": "string",
    "managedByTenants": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "quotaId": "string",
    "registeredFeatures": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "registrationDate": "1970-01-01T00:00:00Z",
  "state": "string"
}
```

<h3 id="putapiv1subscriptionssubscriptionidprovidersmicrosoftcodespacesplanssubscriptionlifecyclenotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|body|body|[RPSubscriptionNotification](#schemarpsubscriptionnotification)|false|none|
|» properties|body|[RPSubscriptionProperties](#schemarpsubscriptionproperties)|false|none|
|» registrationDate|body|string(date-time)|false|none|
|» state|body|string \| null|false|none|

<h3 id="putapiv1subscriptionssubscriptionidprovidersmicrosoftcodespacesplanssubscriptionlifecyclenotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/providers/Microsoft.Codespaces/plans/resourceReadBegin

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/providers/Microsoft.Codespaces/plans/resourceReadBegin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": [
      {
        "id": "string",
        "identity": {
          "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "type": "string"
        },
        "location": "string",
        "name": "string",
        "properties": {
          "defaultCodespaceSku": "string",
          "defaultEnvironmentSku": "string",
          "encryption": {
            "keySource": "string",
            "keyVaultProperties": {
              "keyName": "string",
              "keyVaultUri": "string",
              "keyVersion": "string"
            }
          },
          "userId": "string",
          "vnetProperties": {
            "subnetId": "string"
          }
        },
        "provisioningState": "string",
        "tags": {
          "property1": "string",
          "property2": "string"
        },
        "type": "string"
      }
    ]
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/providers/Microsoft.Codespaces/plans/resourceReadBegin`

> Body parameter

```json
{
  "value": [
    {
      "id": "string",
      "identity": {
        "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "type": "string"
      },
      "location": "string",
      "name": "string",
      "properties": {
        "defaultCodespaceSku": "string",
        "defaultEnvironmentSku": "string",
        "encryption": {
          "keySource": "string",
          "keyVaultProperties": {
            "keyName": "string",
            "keyVaultUri": "string",
            "keyVersion": "string"
          }
        },
        "userId": "string",
        "vnetProperties": {
          "subnetId": "string"
        }
      },
      "provisioningState": "string",
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "type": "string"
    }
  ]
}
```

<h3 id="postapiv1subscriptionssubscriptionidprovidersmicrosoftcodespacesplansresourcereadbegin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|body|body|[PlanResourceList](#schemaplanresourcelist)|false|none|
|» value|body|[[PlanResource](#schemaplanresource)]|false|none|

<h3 id="postapiv1subscriptionssubscriptionidprovidersmicrosoftcodespacesplansresourcereadbegin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put/api/v1/subscriptions/{subscriptionId}/providers/Microsoft.VSOnline/plans/SubscriptionLifeCycleNotification

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/providers/Microsoft.VSOnline/plans/SubscriptionLifeCycleNotification \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "properties": {
      "accountOwner": {
        "email": "string",
        "puid": "string"
      },
      "additionalProperties": {
        "billingProperties": {
          "billingType": "string",
          "channelType": "string",
          "paymentType": "string",
          "tier": "string",
          "workloadType": "string"
        },
        "resourceProviderProperties": "string"
      },
      "locationPlacementId": "string",
      "managedByTenants": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "quotaId": "string",
      "registeredFeatures": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "registrationDate": "1970-01-01T00:00:00Z",
    "state": "string"
  }'
```

`PUT /api/v1/subscriptions/{subscriptionId}/providers/Microsoft.VSOnline/plans/SubscriptionLifeCycleNotification`

> Body parameter

```json
{
  "properties": {
    "accountOwner": {
      "email": "string",
      "puid": "string"
    },
    "additionalProperties": {
      "billingProperties": {
        "billingType": "string",
        "channelType": "string",
        "paymentType": "string",
        "tier": "string",
        "workloadType": "string"
      },
      "resourceProviderProperties": "string"
    },
    "locationPlacementId": "string",
    "managedByTenants": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "quotaId": "string",
    "registeredFeatures": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "registrationDate": "1970-01-01T00:00:00Z",
  "state": "string"
}
```

<h3 id="putapiv1subscriptionssubscriptionidprovidersmicrosoftvsonlineplanssubscriptionlifecyclenotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|body|body|[RPSubscriptionNotification](#schemarpsubscriptionnotification)|false|none|
|» properties|body|[RPSubscriptionProperties](#schemarpsubscriptionproperties)|false|none|
|» registrationDate|body|string(date-time)|false|none|
|» state|body|string \| null|false|none|

<h3 id="putapiv1subscriptionssubscriptionidprovidersmicrosoftvsonlineplanssubscriptionlifecyclenotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/providers/Microsoft.VSOnline/plans/resourceReadBegin

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/providers/Microsoft.VSOnline/plans/resourceReadBegin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": [
      {
        "id": "string",
        "identity": {
          "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "type": "string"
        },
        "location": "string",
        "name": "string",
        "properties": {
          "defaultCodespaceSku": "string",
          "defaultEnvironmentSku": "string",
          "encryption": {
            "keySource": "string",
            "keyVaultProperties": {
              "keyName": "string",
              "keyVaultUri": "string",
              "keyVersion": "string"
            }
          },
          "userId": "string",
          "vnetProperties": {
            "subnetId": "string"
          }
        },
        "provisioningState": "string",
        "tags": {
          "property1": "string",
          "property2": "string"
        },
        "type": "string"
      }
    ]
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/providers/Microsoft.VSOnline/plans/resourceReadBegin`

> Body parameter

```json
{
  "value": [
    {
      "id": "string",
      "identity": {
        "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "type": "string"
      },
      "location": "string",
      "name": "string",
      "properties": {
        "defaultCodespaceSku": "string",
        "defaultEnvironmentSku": "string",
        "encryption": {
          "keySource": "string",
          "keyVaultProperties": {
            "keyName": "string",
            "keyVaultUri": "string",
            "keyVersion": "string"
          }
        },
        "userId": "string",
        "vnetProperties": {
          "subnetId": "string"
        }
      },
      "provisioningState": "string",
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "type": "string"
    }
  ]
}
```

<h3 id="postapiv1subscriptionssubscriptionidprovidersmicrosoftvsonlineplansresourcereadbegin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|body|body|[PlanResourceList](#schemaplanresourcelist)|false|none|
|» value|body|[[PlanResource](#schemaplanresource)]|false|none|

<h3 id="postapiv1subscriptionssubscriptionidprovidersmicrosoftvsonlineplansresourcereadbegin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/resourceReadBegin

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.Codespaces/plans/resourceReadBegin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": [
      {
        "id": "string",
        "identity": {
          "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "type": "string"
        },
        "location": "string",
        "name": "string",
        "properties": {
          "defaultCodespaceSku": "string",
          "defaultEnvironmentSku": "string",
          "encryption": {
            "keySource": "string",
            "keyVaultProperties": {
              "keyName": "string",
              "keyVaultUri": "string",
              "keyVersion": "string"
            }
          },
          "userId": "string",
          "vnetProperties": {
            "subnetId": "string"
          }
        },
        "provisioningState": "string",
        "tags": {
          "property1": "string",
          "property2": "string"
        },
        "type": "string"
      }
    ]
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/resourceReadBegin`

> Body parameter

```json
{
  "value": [
    {
      "id": "string",
      "identity": {
        "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "type": "string"
      },
      "location": "string",
      "name": "string",
      "properties": {
        "defaultCodespaceSku": "string",
        "defaultEnvironmentSku": "string",
        "encryption": {
          "keySource": "string",
          "keyVaultProperties": {
            "keyName": "string",
            "keyVaultUri": "string",
            "keyVersion": "string"
          }
        },
        "userId": "string",
        "vnetProperties": {
          "subnetId": "string"
        }
      },
      "provisioningState": "string",
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "type": "string"
    }
  ]
}
```

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcereadbegin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|body|body|[PlanResourceList](#schemaplanresourcelist)|false|none|
|» value|body|[[PlanResource](#schemaplanresource)]|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcereadbegin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.Codespaces/plans/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "identity": {
      "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "string"
    },
    "location": "string",
    "name": "string",
    "properties": {
      "defaultCodespaceSku": "string",
      "defaultEnvironmentSku": "string",
      "encryption": {
        "keySource": "string",
        "keyVaultProperties": {
          "keyName": "string",
          "keyVaultUri": "string",
          "keyVersion": "string"
        }
      },
      "userId": "string",
      "vnetProperties": {
        "subnetId": "string"
      }
    },
    "provisioningState": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "string"
  }'
```

`PUT /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}`

> Body parameter

```json
{
  "id": "string",
  "identity": {
    "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "string"
  },
  "location": "string",
  "name": "string",
  "properties": {
    "defaultCodespaceSku": "string",
    "defaultEnvironmentSku": "string",
    "encryption": {
      "keySource": "string",
      "keyVaultProperties": {
        "keyName": "string",
        "keyVaultUri": "string",
        "keyVersion": "string"
      }
    },
    "userId": "string",
    "vnetProperties": {
      "subnetId": "string"
    }
  },
  "provisioningState": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "string"
}
```

<h3 id="putapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|headers|header|[PlanResourceHeaders](#schemaplanresourceheaders)|false|none|
|body|body|[PlanResource](#schemaplanresource)|false|none|
|» id|body|string \| null|false|none|
|» identity|body|[PlanResourceIdentity](#schemaplanresourceidentity)|false|none|
|» location|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» properties|body|[PlanResourceProperties](#schemaplanresourceproperties)|false|none|
|» provisioningState|body|string \| null|false|none|
|» tags|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» type|body|string \| null|false|none|

<h3 id="putapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/deleteAllCodespaces

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.Codespaces/plans/string/deleteAllCodespaces \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/deleteAllCodespaces`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenamedeleteallcodespaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenamedeleteallcodespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/deleteAllEnvironments

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.Codespaces/plans/string/deleteAllEnvironments \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/deleteAllEnvironments`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenamedeleteallenvironments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenamedeleteallenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/readAllCodespaces

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.Codespaces/plans/string/readAllCodespaces \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/readAllCodespaces`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenamereadallcodespaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenamereadallcodespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/readAllEnvironments

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.Codespaces/plans/string/readAllEnvironments \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/readAllEnvironments`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenamereadallenvironments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenamereadallenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/readDelegates

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.Codespaces/plans/string/readDelegates \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/readDelegates`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenamereaddelegates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenamereaddelegates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceCreationCompleted

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.Codespaces/plans/string/resourceCreationCompleted \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceCreationCompleted`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenameresourcecreationcompleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenameresourcecreationcompleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceCreationValidate

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.Codespaces/plans/string/resourceCreationValidate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "identity": {
      "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "string"
    },
    "location": "string",
    "name": "string",
    "properties": {
      "defaultCodespaceSku": "string",
      "defaultEnvironmentSku": "string",
      "encryption": {
        "keySource": "string",
        "keyVaultProperties": {
          "keyName": "string",
          "keyVaultUri": "string",
          "keyVersion": "string"
        }
      },
      "userId": "string",
      "vnetProperties": {
        "subnetId": "string"
      }
    },
    "provisioningState": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "string"
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceCreationValidate`

> Body parameter

```json
{
  "id": "string",
  "identity": {
    "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "string"
  },
  "location": "string",
  "name": "string",
  "properties": {
    "defaultCodespaceSku": "string",
    "defaultEnvironmentSku": "string",
    "encryption": {
      "keySource": "string",
      "keyVaultProperties": {
        "keyName": "string",
        "keyVaultUri": "string",
        "keyVersion": "string"
      }
    },
    "userId": "string",
    "vnetProperties": {
      "subnetId": "string"
    }
  },
  "provisioningState": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "string"
}
```

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenameresourcecreationvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|body|body|[PlanResource](#schemaplanresource)|false|none|
|» id|body|string \| null|false|none|
|» identity|body|[PlanResourceIdentity](#schemaplanresourceidentity)|false|none|
|» location|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» properties|body|[PlanResourceProperties](#schemaplanresourceproperties)|false|none|
|» provisioningState|body|string \| null|false|none|
|» tags|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» type|body|string \| null|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenameresourcecreationvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceDeletionValidate

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.Codespaces/plans/string/resourceDeletionValidate \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceDeletionValidate`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenameresourcedeletionvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenameresourcedeletionvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourcePatchCompleted

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.Codespaces/plans/string/resourcePatchCompleted \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "identity": {
      "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "string"
    },
    "properties": {
      "defaultCodespaceSku": "string",
      "defaultEnvironmentSku": "string",
      "encryption": {
        "keySource": "string",
        "keyVaultProperties": {
          "keyName": "string",
          "keyVaultUri": "string",
          "keyVersion": "string"
        }
      },
      "userId": "string",
      "vnetProperties": {
        "subnetId": "string"
      }
    }
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourcePatchCompleted`

> Body parameter

```json
{
  "identity": {
    "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "string"
  },
  "properties": {
    "defaultCodespaceSku": "string",
    "defaultEnvironmentSku": "string",
    "encryption": {
      "keySource": "string",
      "keyVaultProperties": {
        "keyName": "string",
        "keyVaultUri": "string",
        "keyVersion": "string"
      }
    },
    "userId": "string",
    "vnetProperties": {
      "subnetId": "string"
    }
  }
}
```

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenameresourcepatchcompleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|headers|header|[PlanResourceHeaders](#schemaplanresourceheaders)|false|none|
|body|body|[PlanResourceUpdateBody](#schemaplanresourceupdatebody)|false|none|
|» identity|body|[PlanResourceIdentity](#schemaplanresourceidentity)|false|none|
|» properties|body|[PlanResourceProperties](#schemaplanresourceproperties)|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenameresourcepatchcompleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourcePatchValidate

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.Codespaces/plans/string/resourcePatchValidate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "identity": {
      "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "string"
    },
    "properties": {
      "defaultCodespaceSku": "string",
      "defaultEnvironmentSku": "string",
      "encryption": {
        "keySource": "string",
        "keyVaultProperties": {
          "keyName": "string",
          "keyVaultUri": "string",
          "keyVersion": "string"
        }
      },
      "userId": "string",
      "vnetProperties": {
        "subnetId": "string"
      }
    }
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourcePatchValidate`

> Body parameter

```json
{
  "identity": {
    "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "string"
  },
  "properties": {
    "defaultCodespaceSku": "string",
    "defaultEnvironmentSku": "string",
    "encryption": {
      "keySource": "string",
      "keyVaultProperties": {
        "keyName": "string",
        "keyVaultUri": "string",
        "keyVersion": "string"
      }
    },
    "userId": "string",
    "vnetProperties": {
      "subnetId": "string"
    }
  }
}
```

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenameresourcepatchvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|body|body|[PlanResourceUpdateBody](#schemaplanresourceupdatebody)|false|none|
|» identity|body|[PlanResourceIdentity](#schemaplanresourceidentity)|false|none|
|» properties|body|[PlanResourceProperties](#schemaplanresourceproperties)|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenameresourcepatchvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceReadBegin

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.Codespaces/plans/string/resourceReadBegin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "identity": {
      "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "string"
    },
    "location": "string",
    "name": "string",
    "properties": {
      "defaultCodespaceSku": "string",
      "defaultEnvironmentSku": "string",
      "encryption": {
        "keySource": "string",
        "keyVaultProperties": {
          "keyName": "string",
          "keyVaultUri": "string",
          "keyVersion": "string"
        }
      },
      "userId": "string",
      "vnetProperties": {
        "subnetId": "string"
      }
    },
    "provisioningState": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "string"
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceReadBegin`

> Body parameter

```json
{
  "id": "string",
  "identity": {
    "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "string"
  },
  "location": "string",
  "name": "string",
  "properties": {
    "defaultCodespaceSku": "string",
    "defaultEnvironmentSku": "string",
    "encryption": {
      "keySource": "string",
      "keyVaultProperties": {
        "keyName": "string",
        "keyVaultUri": "string",
        "keyVersion": "string"
      }
    },
    "userId": "string",
    "vnetProperties": {
      "subnetId": "string"
    }
  },
  "provisioningState": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "string"
}
```

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenameresourcereadbegin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|body|body|[PlanResource](#schemaplanresource)|false|none|
|» id|body|string \| null|false|none|
|» identity|body|[PlanResourceIdentity](#schemaplanresourceidentity)|false|none|
|» location|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» properties|body|[PlanResourceProperties](#schemaplanresourceproperties)|false|none|
|» provisioningState|body|string \| null|false|none|
|» tags|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» type|body|string \| null|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenameresourcereadbegin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/writeCodespaces

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.Codespaces/plans/string/writeCodespaces \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/writeCodespaces`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenamewritecodespaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenamewritecodespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/writeDelegates

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.Codespaces/plans/string/writeDelegates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "environmentIds": [
      "string"
    ],
    "expiration": "1970-01-01T00:00:00Z",
    "identity": {
      "displayName": "string",
      "id": "string",
      "username": "string"
    },
    "portNumbers": [
      0
    ],
    "scope": "string"
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/writeDelegates`

> Body parameter

```json
{
  "environmentIds": [
    "string"
  ],
  "expiration": "1970-01-01T00:00:00Z",
  "identity": {
    "displayName": "string",
    "id": "string",
    "username": "string"
  },
  "portNumbers": [
    0
  ],
  "scope": "string"
}
```

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenamewritedelegates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|body|body|[IssueDelegatePlanAccessTokenBody](#schemaissuedelegateplanaccesstokenbody)|false|none|
|» environmentIds|body|[string]|false|none|
|» expiration|body|string(date-time) \| null|false|none|
|» identity|body|[DelegateIdentity](#schemadelegateidentity)|false|none|
|» portNumbers|body|[integer(int32)]|false|none|
|» scope|body|string \| null|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenamewritedelegates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/writeEnvironments

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.Codespaces/plans/string/writeEnvironments \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/writeEnvironments`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenamewriteenvironments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftcodespacesplansresourcenamewriteenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/resourceReadBegin

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.VSOnline/plans/resourceReadBegin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": [
      {
        "id": "string",
        "identity": {
          "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "type": "string"
        },
        "location": "string",
        "name": "string",
        "properties": {
          "defaultCodespaceSku": "string",
          "defaultEnvironmentSku": "string",
          "encryption": {
            "keySource": "string",
            "keyVaultProperties": {
              "keyName": "string",
              "keyVaultUri": "string",
              "keyVersion": "string"
            }
          },
          "userId": "string",
          "vnetProperties": {
            "subnetId": "string"
          }
        },
        "provisioningState": "string",
        "tags": {
          "property1": "string",
          "property2": "string"
        },
        "type": "string"
      }
    ]
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/resourceReadBegin`

> Body parameter

```json
{
  "value": [
    {
      "id": "string",
      "identity": {
        "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "type": "string"
      },
      "location": "string",
      "name": "string",
      "properties": {
        "defaultCodespaceSku": "string",
        "defaultEnvironmentSku": "string",
        "encryption": {
          "keySource": "string",
          "keyVaultProperties": {
            "keyName": "string",
            "keyVaultUri": "string",
            "keyVersion": "string"
          }
        },
        "userId": "string",
        "vnetProperties": {
          "subnetId": "string"
        }
      },
      "provisioningState": "string",
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "type": "string"
    }
  ]
}
```

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcereadbegin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|body|body|[PlanResourceList](#schemaplanresourcelist)|false|none|
|» value|body|[[PlanResource](#schemaplanresource)]|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcereadbegin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.VSOnline/plans/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "identity": {
      "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "string"
    },
    "location": "string",
    "name": "string",
    "properties": {
      "defaultCodespaceSku": "string",
      "defaultEnvironmentSku": "string",
      "encryption": {
        "keySource": "string",
        "keyVaultProperties": {
          "keyName": "string",
          "keyVaultUri": "string",
          "keyVersion": "string"
        }
      },
      "userId": "string",
      "vnetProperties": {
        "subnetId": "string"
      }
    },
    "provisioningState": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "string"
  }'
```

`PUT /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}`

> Body parameter

```json
{
  "id": "string",
  "identity": {
    "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "string"
  },
  "location": "string",
  "name": "string",
  "properties": {
    "defaultCodespaceSku": "string",
    "defaultEnvironmentSku": "string",
    "encryption": {
      "keySource": "string",
      "keyVaultProperties": {
        "keyName": "string",
        "keyVaultUri": "string",
        "keyVersion": "string"
      }
    },
    "userId": "string",
    "vnetProperties": {
      "subnetId": "string"
    }
  },
  "provisioningState": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "string"
}
```

<h3 id="putapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|headers|header|[PlanResourceHeaders](#schemaplanresourceheaders)|false|none|
|body|body|[PlanResource](#schemaplanresource)|false|none|
|» id|body|string \| null|false|none|
|» identity|body|[PlanResourceIdentity](#schemaplanresourceidentity)|false|none|
|» location|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» properties|body|[PlanResourceProperties](#schemaplanresourceproperties)|false|none|
|» provisioningState|body|string \| null|false|none|
|» tags|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» type|body|string \| null|false|none|

<h3 id="putapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/deleteAllCodespaces

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.VSOnline/plans/string/deleteAllCodespaces \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/deleteAllCodespaces`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenamedeleteallcodespaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenamedeleteallcodespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/deleteAllEnvironments

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.VSOnline/plans/string/deleteAllEnvironments \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/deleteAllEnvironments`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenamedeleteallenvironments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenamedeleteallenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/readAllCodespaces

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.VSOnline/plans/string/readAllCodespaces \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/readAllCodespaces`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenamereadallcodespaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenamereadallcodespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/readAllEnvironments

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.VSOnline/plans/string/readAllEnvironments \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/readAllEnvironments`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenamereadallenvironments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenamereadallenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/readDelegates

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.VSOnline/plans/string/readDelegates \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/readDelegates`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenamereaddelegates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenamereaddelegates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceCreationCompleted

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.VSOnline/plans/string/resourceCreationCompleted \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceCreationCompleted`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenameresourcecreationcompleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenameresourcecreationcompleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceCreationValidate

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.VSOnline/plans/string/resourceCreationValidate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "identity": {
      "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "string"
    },
    "location": "string",
    "name": "string",
    "properties": {
      "defaultCodespaceSku": "string",
      "defaultEnvironmentSku": "string",
      "encryption": {
        "keySource": "string",
        "keyVaultProperties": {
          "keyName": "string",
          "keyVaultUri": "string",
          "keyVersion": "string"
        }
      },
      "userId": "string",
      "vnetProperties": {
        "subnetId": "string"
      }
    },
    "provisioningState": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "string"
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceCreationValidate`

> Body parameter

```json
{
  "id": "string",
  "identity": {
    "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "string"
  },
  "location": "string",
  "name": "string",
  "properties": {
    "defaultCodespaceSku": "string",
    "defaultEnvironmentSku": "string",
    "encryption": {
      "keySource": "string",
      "keyVaultProperties": {
        "keyName": "string",
        "keyVaultUri": "string",
        "keyVersion": "string"
      }
    },
    "userId": "string",
    "vnetProperties": {
      "subnetId": "string"
    }
  },
  "provisioningState": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "string"
}
```

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenameresourcecreationvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|body|body|[PlanResource](#schemaplanresource)|false|none|
|» id|body|string \| null|false|none|
|» identity|body|[PlanResourceIdentity](#schemaplanresourceidentity)|false|none|
|» location|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» properties|body|[PlanResourceProperties](#schemaplanresourceproperties)|false|none|
|» provisioningState|body|string \| null|false|none|
|» tags|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» type|body|string \| null|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenameresourcecreationvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceDeletionValidate

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.VSOnline/plans/string/resourceDeletionValidate \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceDeletionValidate`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenameresourcedeletionvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenameresourcedeletionvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourcePatchCompleted

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.VSOnline/plans/string/resourcePatchCompleted \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "identity": {
      "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "string"
    },
    "properties": {
      "defaultCodespaceSku": "string",
      "defaultEnvironmentSku": "string",
      "encryption": {
        "keySource": "string",
        "keyVaultProperties": {
          "keyName": "string",
          "keyVaultUri": "string",
          "keyVersion": "string"
        }
      },
      "userId": "string",
      "vnetProperties": {
        "subnetId": "string"
      }
    }
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourcePatchCompleted`

> Body parameter

```json
{
  "identity": {
    "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "string"
  },
  "properties": {
    "defaultCodespaceSku": "string",
    "defaultEnvironmentSku": "string",
    "encryption": {
      "keySource": "string",
      "keyVaultProperties": {
        "keyName": "string",
        "keyVaultUri": "string",
        "keyVersion": "string"
      }
    },
    "userId": "string",
    "vnetProperties": {
      "subnetId": "string"
    }
  }
}
```

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenameresourcepatchcompleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|headers|header|[PlanResourceHeaders](#schemaplanresourceheaders)|false|none|
|body|body|[PlanResourceUpdateBody](#schemaplanresourceupdatebody)|false|none|
|» identity|body|[PlanResourceIdentity](#schemaplanresourceidentity)|false|none|
|» properties|body|[PlanResourceProperties](#schemaplanresourceproperties)|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenameresourcepatchcompleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourcePatchValidate

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.VSOnline/plans/string/resourcePatchValidate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "identity": {
      "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "string"
    },
    "properties": {
      "defaultCodespaceSku": "string",
      "defaultEnvironmentSku": "string",
      "encryption": {
        "keySource": "string",
        "keyVaultProperties": {
          "keyName": "string",
          "keyVaultUri": "string",
          "keyVersion": "string"
        }
      },
      "userId": "string",
      "vnetProperties": {
        "subnetId": "string"
      }
    }
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourcePatchValidate`

> Body parameter

```json
{
  "identity": {
    "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "string"
  },
  "properties": {
    "defaultCodespaceSku": "string",
    "defaultEnvironmentSku": "string",
    "encryption": {
      "keySource": "string",
      "keyVaultProperties": {
        "keyName": "string",
        "keyVaultUri": "string",
        "keyVersion": "string"
      }
    },
    "userId": "string",
    "vnetProperties": {
      "subnetId": "string"
    }
  }
}
```

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenameresourcepatchvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|body|body|[PlanResourceUpdateBody](#schemaplanresourceupdatebody)|false|none|
|» identity|body|[PlanResourceIdentity](#schemaplanresourceidentity)|false|none|
|» properties|body|[PlanResourceProperties](#schemaplanresourceproperties)|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenameresourcepatchvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceReadBegin

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.VSOnline/plans/string/resourceReadBegin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "identity": {
      "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "string"
    },
    "location": "string",
    "name": "string",
    "properties": {
      "defaultCodespaceSku": "string",
      "defaultEnvironmentSku": "string",
      "encryption": {
        "keySource": "string",
        "keyVaultProperties": {
          "keyName": "string",
          "keyVaultUri": "string",
          "keyVersion": "string"
        }
      },
      "userId": "string",
      "vnetProperties": {
        "subnetId": "string"
      }
    },
    "provisioningState": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "string"
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceReadBegin`

> Body parameter

```json
{
  "id": "string",
  "identity": {
    "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "string"
  },
  "location": "string",
  "name": "string",
  "properties": {
    "defaultCodespaceSku": "string",
    "defaultEnvironmentSku": "string",
    "encryption": {
      "keySource": "string",
      "keyVaultProperties": {
        "keyName": "string",
        "keyVaultUri": "string",
        "keyVersion": "string"
      }
    },
    "userId": "string",
    "vnetProperties": {
      "subnetId": "string"
    }
  },
  "provisioningState": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "string"
}
```

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenameresourcereadbegin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|body|body|[PlanResource](#schemaplanresource)|false|none|
|» id|body|string \| null|false|none|
|» identity|body|[PlanResourceIdentity](#schemaplanresourceidentity)|false|none|
|» location|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» properties|body|[PlanResourceProperties](#schemaplanresourceproperties)|false|none|
|» provisioningState|body|string \| null|false|none|
|» tags|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» type|body|string \| null|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenameresourcereadbegin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/writeCodespaces

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.VSOnline/plans/string/writeCodespaces \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/writeCodespaces`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenamewritecodespaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenamewritecodespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/writeDelegates

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.VSOnline/plans/string/writeDelegates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "environmentIds": [
      "string"
    ],
    "expiration": "1970-01-01T00:00:00Z",
    "identity": {
      "displayName": "string",
      "id": "string",
      "username": "string"
    },
    "portNumbers": [
      0
    ],
    "scope": "string"
  }'
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/writeDelegates`

> Body parameter

```json
{
  "environmentIds": [
    "string"
  ],
  "expiration": "1970-01-01T00:00:00Z",
  "identity": {
    "displayName": "string",
    "id": "string",
    "username": "string"
  },
  "portNumbers": [
    0
  ],
  "scope": "string"
}
```

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenamewritedelegates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|body|body|[IssueDelegatePlanAccessTokenBody](#schemaissuedelegateplanaccesstokenbody)|false|none|
|» environmentIds|body|[string]|false|none|
|» expiration|body|string(date-time) \| null|false|none|
|» identity|body|[DelegateIdentity](#schemadelegateidentity)|false|none|
|» portNumbers|body|[integer(int32)]|false|none|
|» scope|body|string \| null|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenamewritedelegates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/writeEnvironments

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/resourceGroups/string/providers/Microsoft.VSOnline/plans/string/writeEnvironments \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/writeEnvironments`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenamewriteenvironments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|
|expiration|query|string(date-time)|false|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupsresourcegroupprovidersmicrosoftvsonlineplansresourcenamewriteenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/deleteDelegates

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/string/providers/Microsoft.Codespaces/plans/string/deleteDelegates \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/deleteDelegates`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupprovidersmicrosoftcodespacesplansresourcenamedeletedelegates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupprovidersmicrosoftcodespacesplansresourcenamedeletedelegates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/subscriptions/{subscriptionId}/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/deleteDelegates

> Code samples

```bash
curl https://example.com/api/v1/subscriptions/string/string/providers/Microsoft.VSOnline/plans/string/deleteDelegates \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/subscriptions/{subscriptionId}/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/deleteDelegates`

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupprovidersmicrosoftvsonlineplansresourcenamedeletedelegates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|resourceGroup|path|string|true|none|
|resourceName|path|string|true|none|

<h3 id="postapiv1subscriptionssubscriptionidresourcegroupprovidersmicrosoftvsonlineplansresourcenamedeletedelegates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-pool">Pool</h1>

## get/api/v1/tenant/{tenantId}/Pool/{poolName}

> Code samples

```bash
curl https://example.com/api/v1/tenant/497f6eca-6276-4993-bfeb-53cbbbba6f08/Pool/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/tenant/{tenantId}/Pool/{poolName}`

<h3 id="getapiv1tenanttenantidpoolpoolname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenantId|path|string(uuid)|true|none|
|poolName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "domainUserCredentials": {
    "domain": "string",
    "organizationalUnit": "string",
    "passwordSecretIdentifier": "string",
    "userName": "string"
  },
  "hotPoolSettings": {
    "size": 0
  },
  "poolGroupName": "string",
  "provisioningStatus": {
    "completedSteps": 0,
    "currentStepDescription": "string",
    "isReady": true,
    "operationStartedTimeUtc": "string",
    "totalSteps": 0
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userGroupName": "string",
  "vmSpecs": {
    "diskType": "0 (StandardHDD)",
    "imageResourceId": "string",
    "size": "string",
    "subnetResourceId": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1tenanttenantidpoolpoolname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PoolResult](#schemapoolresult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|500|Internal Server Error|Server Error|None|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put/api/v1/tenant/{tenantId}/Pool/{poolName}

> Code samples

```bash
curl https://example.com/api/v1/tenant/497f6eca-6276-4993-bfeb-53cbbbba6f08/Pool/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "domainUserCredentials": {
      "domain": "string",
      "organizationalUnit": "string",
      "passwordSecretIdentifier": "string",
      "userName": "string"
    },
    "hotPoolSettings": {
      "size": 0
    },
    "poolGroupName": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "userGroupName": "string",
    "vmSpecs": {
      "diskType": "0 (StandardHDD)",
      "imageResourceId": "string",
      "size": "string",
      "subnetResourceId": "string"
    }
  }'
```

`PUT /api/v1/tenant/{tenantId}/Pool/{poolName}`

> Body parameter

```json
{
  "domainUserCredentials": {
    "domain": "string",
    "organizationalUnit": "string",
    "passwordSecretIdentifier": "string",
    "userName": "string"
  },
  "hotPoolSettings": {
    "size": 0
  },
  "poolGroupName": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userGroupName": "string",
  "vmSpecs": {
    "diskType": "0 (StandardHDD)",
    "imageResourceId": "string",
    "size": "string",
    "subnetResourceId": "string"
  }
}
```

<h3 id="putapiv1tenanttenantidpoolpoolname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenantId|path|string(uuid)|true|none|
|poolName|path|string|true|none|
|body|body|[CreateOrUpdatePoolBody](#schemacreateorupdatepoolbody)|false|none|
|» domainUserCredentials|body|[DomainUserCredentials](#schemadomainusercredentials)|false|none|
|» hotPoolSettings|body|[HotPoolSettings](#schemahotpoolsettings)|false|none|
|» poolGroupName|body|string|true|none|
|» tags|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» userGroupName|body|string \| null|false|none|
|» vmSpecs|body|[VMSpecs](#schemavmspecs)|true|none|

> Example responses

> 200 Response

```json
{
  "domainUserCredentials": {
    "domain": "string",
    "organizationalUnit": "string",
    "passwordSecretIdentifier": "string",
    "userName": "string"
  },
  "hotPoolSettings": {
    "size": 0
  },
  "poolGroupName": "string",
  "provisioningStatus": {
    "completedSteps": 0,
    "currentStepDescription": "string",
    "isReady": true,
    "operationStartedTimeUtc": "string",
    "totalSteps": 0
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userGroupName": "string",
  "vmSpecs": {
    "diskType": "0 (StandardHDD)",
    "imageResourceId": "string",
    "size": "string",
    "subnetResourceId": "string"
  }
}
```

> 202 Response

```json
{
  "domainUserCredentials": {
    "domain": "string",
    "organizationalUnit": "string",
    "passwordSecretIdentifier": "string",
    "userName": "string"
  },
  "hotPoolSettings": {
    "size": 0
  },
  "poolGroupName": "string",
  "provisioningStatus": {
    "completedSteps": 0,
    "currentStepDescription": "string",
    "isReady": true,
    "operationStartedTimeUtc": "string",
    "totalSteps": 0
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userGroupName": "string",
  "vmSpecs": {
    "diskType": "0 (StandardHDD)",
    "imageResourceId": "string",
    "size": "string",
    "subnetResourceId": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="putapiv1tenanttenantidpoolpoolname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PoolResult](#schemapoolresult)|
|202|Accepted|Accepted|[PoolResult](#schemapoolresult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|500|Internal Server Error|Server Error|None|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete/api/v1/tenant/{tenantId}/Pool/{poolName}

> Code samples

```bash
curl https://example.com/api/v1/tenant/497f6eca-6276-4993-bfeb-53cbbbba6f08/Pool/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/tenant/{tenantId}/Pool/{poolName}`

<h3 id="deleteapiv1tenanttenantidpoolpoolname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenantId|path|string(uuid)|true|none|
|poolName|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="deleteapiv1tenanttenantidpoolpoolname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|500|Internal Server Error|Server Error|None|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## patch/api/v1/tenant/{tenantId}/Pool/{poolName}

> Code samples

```bash
curl https://example.com/api/v1/tenant/497f6eca-6276-4993-bfeb-53cbbbba6f08/Pool/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "domainUserCredentials": {
      "domain": "string",
      "organizationalUnit": "string",
      "passwordSecretIdentifier": "string",
      "userName": "string"
    },
    "hotPoolSettings": {
      "size": 0
    },
    "poolGroupName": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "userGroupName": "string",
    "vmSpecs": {
      "diskType": "0 (StandardHDD)",
      "imageResourceId": "string",
      "size": "string",
      "subnetResourceId": "string"
    }
  }'
```

`PATCH /api/v1/tenant/{tenantId}/Pool/{poolName}`

> Body parameter

```json
{
  "domainUserCredentials": {
    "domain": "string",
    "organizationalUnit": "string",
    "passwordSecretIdentifier": "string",
    "userName": "string"
  },
  "hotPoolSettings": {
    "size": 0
  },
  "poolGroupName": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userGroupName": "string",
  "vmSpecs": {
    "diskType": "0 (StandardHDD)",
    "imageResourceId": "string",
    "size": "string",
    "subnetResourceId": "string"
  }
}
```

<h3 id="patchapiv1tenanttenantidpoolpoolname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenantId|path|string(uuid)|true|none|
|poolName|path|string|true|none|
|body|body|[CreateOrUpdatePoolBody](#schemacreateorupdatepoolbody)|false|none|
|» domainUserCredentials|body|[DomainUserCredentials](#schemadomainusercredentials)|false|none|
|» hotPoolSettings|body|[HotPoolSettings](#schemahotpoolsettings)|false|none|
|» poolGroupName|body|string|true|none|
|» tags|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» userGroupName|body|string \| null|false|none|
|» vmSpecs|body|[VMSpecs](#schemavmspecs)|true|none|

> Example responses

> 200 Response

```json
{
  "domainUserCredentials": {
    "domain": "string",
    "organizationalUnit": "string",
    "passwordSecretIdentifier": "string",
    "userName": "string"
  },
  "hotPoolSettings": {
    "size": 0
  },
  "poolGroupName": "string",
  "provisioningStatus": {
    "completedSteps": 0,
    "currentStepDescription": "string",
    "isReady": true,
    "operationStartedTimeUtc": "string",
    "totalSteps": 0
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userGroupName": "string",
  "vmSpecs": {
    "diskType": "0 (StandardHDD)",
    "imageResourceId": "string",
    "size": "string",
    "subnetResourceId": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="patchapiv1tenanttenantidpoolpoolname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PoolResult](#schemapoolresult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|500|Internal Server Error|Server Error|None|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-poolgroup">PoolGroup</h1>

## get/api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}

> Code samples

```bash
curl https://example.com/api/v1/tenant/497f6eca-6276-4993-bfeb-53cbbbba6f08/PoolGroup/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}`

<h3 id="getapiv1tenanttenantidpoolgrouppoolgroupname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenantId|path|string(uuid)|true|none|
|poolGroupName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "displayName": "string",
  "region": "101 (EastAsia)",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1tenanttenantidpoolgrouppoolgroupname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PoolGroupResult](#schemapoolgroupresult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|500|Internal Server Error|Server Error|None|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put/api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}

> Code samples

```bash
curl https://example.com/api/v1/tenant/497f6eca-6276-4993-bfeb-53cbbbba6f08/PoolGroup/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "region": "101 (EastAsia)",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}`

> Body parameter

```json
{
  "displayName": "string",
  "region": "101 (EastAsia)",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="putapiv1tenanttenantidpoolgrouppoolgroupname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenantId|path|string(uuid)|true|none|
|poolGroupName|path|string|true|none|
|body|body|[CreatePoolGroupBody](#schemacreatepoolgroupbody)|false|none|
|» displayName|body|string|true|none|
|» region|body|[AzureLocation](#schemaazurelocation)|true|none|
|» tags|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» region|101 (EastAsia)|
|» region|102 (SouthEastAsia)|
|» region|201 (AustraliaCentral)|
|» region|202 (AustraliaCentral2)|
|» region|203 (AustraliaEast)|
|» region|205 (AustraliaSouthEast)|
|» region|301 (BrazilSouth)|
|» region|401 (CanadaCentral)|
|» region|402 (CanadaEast)|
|» region|501 (NorthEurope)|
|» region|502 (WestEurope)|
|» region|601 (FranceCentral)|
|» region|602 (FranceSouth)|
|» region|701 (CentralIndia)|
|» region|702 (SouthIndia)|
|» region|703 (WestIndia)|
|» region|801 (JapanEast)|
|» region|802 (JapanWest)|
|» region|901 (KoreaCentral)|
|» region|902 (KoreaSouth)|
|» region|1001 (SouthAfricaNorth)|
|» region|1002 (SouthAfricaWest)|
|» region|1201 (UaeCentral)|
|» region|1202 (UaeNorth)|
|» region|1401 (UkSouth)|
|» region|1402 (UkWest)|
|» region|1501 (CentralUs)|
|» region|1502 (EastUs)|
|» region|1503 (EastUs2)|
|» region|1504 (NorthCentralUs)|
|» region|1505 (SouthCentralUs)|
|» region|1506 (WestCentralUs)|
|» region|1507 (WestUs)|
|» region|1508 (WestUs2)|
|» region|1509 (WestUs3)|
|» region|1601 (CentralUsEuap)|
|» region|1602 (EastUs2Euap)|
|» region|1701 (SwitzerlandNorth)|
|» region|1702 (SwitzerlandWest)|
|» region|1801 (GermanyNorth)|
|» region|1802 (GermanyWestCentral)|
|» region|1901 (NorwayWest)|
|» region|1902 (NorwayEast)|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="putapiv1tenanttenantidpoolgrouppoolgroupname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|500|Internal Server Error|Server Error|None|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete/api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}

> Code samples

```bash
curl https://example.com/api/v1/tenant/497f6eca-6276-4993-bfeb-53cbbbba6f08/PoolGroup/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}`

<h3 id="deleteapiv1tenanttenantidpoolgrouppoolgroupname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenantId|path|string(uuid)|true|none|
|poolGroupName|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="deleteapiv1tenanttenantidpoolgrouppoolgroupname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|500|Internal Server Error|Server Error|None|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## patch/api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}

> Code samples

```bash
curl https://example.com/api/v1/tenant/497f6eca-6276-4993-bfeb-53cbbbba6f08/PoolGroup/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PATCH /api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}`

> Body parameter

```json
{
  "displayName": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="patchapiv1tenanttenantidpoolgrouppoolgroupname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenantId|path|string(uuid)|true|none|
|poolGroupName|path|string|true|none|
|body|body|[UpdatePoolGroupBody](#schemaupdatepoolgroupbody)|false|none|
|» displayName|body|string|true|none|
|» tags|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="patchapiv1tenanttenantidpoolgrouppoolgroupname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|500|Internal Server Error|Server Error|None|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-vm">Vm</h1>

## get/api/v1/tenant/{tenantId}/pool/{poolName}/Vm

> Code samples

```bash
curl https://example.com/api/v1/tenant/497f6eca-6276-4993-bfeb-53cbbbba6f08/pool/string/Vm \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/tenant/{tenantId}/pool/{poolName}/Vm`

<h3 id="getapiv1tenanttenantidpoolpoolnamevm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenantId|path|string(uuid)|true|none|
|poolName|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "connection": {
      "connectionType": "0 (LiveShare)",
      "liveShareWorkspaceId": "string"
    },
    "provisioningStatus": {
      "completedSteps": 0,
      "currentStepDescription": "string",
      "isReady": true,
      "operationStartedTimeUtc": "string",
      "totalSteps": 0
    },
    "status": "0 (Provisioning)"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1tenanttenantidpoolpoolnamevm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|500|Internal Server Error|Server Error|None|
|503|Service Unavailable|Server Error|None|

<h3 id="getapiv1tenanttenantidpoolpoolnamevm-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[VMResult](#schemavmresult)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}

> Code samples

```bash
curl https://example.com/api/v1/tenant/497f6eca-6276-4993-bfeb-53cbbbba6f08/pool/string/Vm/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}`

<h3 id="getapiv1tenanttenantidpoolpoolnamevmvmname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenantId|path|string(uuid)|true|none|
|poolName|path|string|true|none|
|vmName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "connection": {
    "connectionType": "0 (LiveShare)",
    "liveShareWorkspaceId": "string"
  },
  "provisioningStatus": {
    "completedSteps": 0,
    "currentStepDescription": "string",
    "isReady": true,
    "operationStartedTimeUtc": "string",
    "totalSteps": 0
  },
  "status": "0 (Provisioning)"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getapiv1tenanttenantidpoolpoolnamevmvmname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VMResult](#schemavmresult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|500|Internal Server Error|Server Error|None|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}

> Code samples

```bash
curl https://example.com/api/v1/tenant/497f6eca-6276-4993-bfeb-53cbbbba6f08/pool/string/Vm/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "user": {
      "userPrincipalName": "string"
    }
  }'
```

`PUT /api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}`

> Body parameter

```json
{
  "user": {
    "userPrincipalName": "string"
  }
}
```

<h3 id="putapiv1tenanttenantidpoolpoolnamevmvmname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenantId|path|string(uuid)|true|none|
|poolName|path|string|true|none|
|vmName|path|string|true|none|
|body|body|[ClaimVMBody](#schemaclaimvmbody)|false|none|
|» user|body|[UserIdentity](#schemauseridentity)|true|none|

> Example responses

> 200 Response

```json
{
  "connection": {
    "connectionType": "0 (LiveShare)",
    "liveShareWorkspaceId": "string"
  },
  "provisioningStatus": {
    "completedSteps": 0,
    "currentStepDescription": "string",
    "isReady": true,
    "operationStartedTimeUtc": "string",
    "totalSteps": 0
  },
  "status": "0 (Provisioning)"
}
```

> 202 Response

```json
{
  "connection": {
    "connectionType": "0 (LiveShare)",
    "liveShareWorkspaceId": "string"
  },
  "provisioningStatus": {
    "completedSteps": 0,
    "currentStepDescription": "string",
    "isReady": true,
    "operationStartedTimeUtc": "string",
    "totalSteps": 0
  },
  "status": "0 (Provisioning)"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="putapiv1tenanttenantidpoolpoolnamevmvmname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VMResult](#schemavmresult)|
|202|Accepted|Accepted|[VMResult](#schemavmresult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|500|Internal Server Error|Server Error|None|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}

> Code samples

```bash
curl https://example.com/api/v1/tenant/497f6eca-6276-4993-bfeb-53cbbbba6f08/pool/string/Vm/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}`

<h3 id="deleteapiv1tenanttenantidpoolpoolnamevmvmname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenantId|path|string(uuid)|true|none|
|poolName|path|string|true|none|
|vmName|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="deleteapiv1tenanttenantidpoolpoolnamevmvmname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|500|Internal Server Error|Server Error|None|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}/start

> Code samples

```bash
curl https://example.com/api/v1/tenant/497f6eca-6276-4993-bfeb-53cbbbba6f08/pool/string/Vm/string/start \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}/start`

<h3 id="postapiv1tenanttenantidpoolpoolnamevmvmnamestart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenantId|path|string(uuid)|true|none|
|poolName|path|string|true|none|
|vmName|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1tenanttenantidpoolpoolnamevmvmnamestart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|500|Internal Server Error|Server Error|None|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}/stop

> Code samples

```bash
curl https://example.com/api/v1/tenant/497f6eca-6276-4993-bfeb-53cbbbba6f08/pool/string/Vm/string/stop \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}/stop`

<h3 id="postapiv1tenanttenantidpoolpoolnamevmvmnamestop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenantId|path|string(uuid)|true|none|
|poolName|path|string|true|none|
|vmName|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv1tenanttenantidpoolpoolnamevmvmnamestop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|500|Internal Server Error|Server Error|None|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-prebuildsv">PrebuildsV</h1>

## post/api/v2/prebuilds/delete

> Code samples

```bash
curl https://example.com/api/v2/prebuilds/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "branchName": "string",
    "devContainerPath": "string",
    "prebuildConfigurationId": 0,
    "repoId": 0
  }'
```

`POST /api/v2/prebuilds/delete`

> Body parameter

```json
{
  "branchName": "string",
  "devContainerPath": "string",
  "prebuildConfigurationId": 0,
  "repoId": 0
}
```

<h3 id="postapiv2prebuildsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeletePrebuildTemplatesBody](#schemadeleteprebuildtemplatesbody)|false|none|
|» branchName|body|string|true|none|
|» devContainerPath|body|string \| null|false|none|
|» prebuildConfigurationId|body|integer(int64)|false|none|
|» repoId|body|integer(int64)|true|none|

> Example responses

> 400 Response

```json
"0 (Unknown)"
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 503 Response

```json
"0 (Unknown)"
```

<h3 id="postapiv2prebuildsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[MessageCodes](#schemamessagecodes)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|503|Service Unavailable|Server Error|[MessageCodes](#schemamessagecodes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete/api/v2/prebuilds/repository/{repoId}/branch/{branchName}

> Code samples

```bash
curl https://example.com/api/v2/prebuilds/repository/0/branch/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/prebuilds/repository/{repoId}/branch/{branchName}`

<h3 id="deleteapiv2prebuildsrepositoryrepoidbranchbranchname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repoId|path|integer(int64)|true|none|
|branchName|path|string|true|none|

> Example responses

> 400 Response

```json
"0 (Unknown)"
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 503 Response

```json
"0 (Unknown)"
```

<h3 id="deleteapiv2prebuildsrepositoryrepoidbranchbranchname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[MessageCodes](#schemamessagecodes)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|503|Service Unavailable|Server Error|[MessageCodes](#schemamessagecodes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v2/prebuilds/templates

> Code samples

```bash
curl https://example.com/api/v2/prebuilds/templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "devContainerPath": "string",
    "experimentalFeatures": {
      "enableDynamicHttpsDetection": true,
      "queueResourceAllocation": true,
      "usePrebuildFastPathIfAvailable": true,
      "usePrebuiltImages": true,
      "useStorageV2": true
    },
    "features": {
      "property1": "string",
      "property2": "string"
    },
    "friendlyName": "string",
    "planId": "string",
    "seed": {
      "cloneUrl": "string",
      "gitConfig": {
        "userEmail": "string",
        "userName": "string"
      },
      "recurseClone": true,
      "repository": {
        "branchName": "string",
        "commitId": "string",
        "createType": "string",
        "diskUsage": "string",
        "name": "string",
        "owner": "string",
        "prebuildHash": "string",
        "repoId": 0,
        "url": "string"
      },
      "seedMoniker": "string",
      "seedType": "string"
    },
    "storageType": "0 (V1)",
    "templateInfo": {
      "container": {
        "id": "string",
        "imageName": "string",
        "schemaVersion": "string"
      },
      "prebuildConfigurationId": "string",
      "templateSizeInGB": 0,
      "totalTimeSavingsInSeconds": "string",
      "workFlowRunId": "string"
    }
  }'
```

`POST /api/v2/prebuilds/templates`

> Body parameter

```json
{
  "devContainerPath": "string",
  "experimentalFeatures": {
    "enableDynamicHttpsDetection": true,
    "queueResourceAllocation": true,
    "usePrebuildFastPathIfAvailable": true,
    "usePrebuiltImages": true,
    "useStorageV2": true
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "planId": "string",
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "storageType": "0 (V1)",
  "templateInfo": {
    "container": {
      "id": "string",
      "imageName": "string",
      "schemaVersion": "string"
    },
    "prebuildConfigurationId": "string",
    "templateSizeInGB": 0,
    "totalTimeSavingsInSeconds": "string",
    "workFlowRunId": "string"
  }
}
```

<h3 id="postapiv2prebuildstemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatePrebuildTemplateBody](#schemacreateprebuildtemplatebody)|false|none|
|» devContainerPath|body|string \| null|false|none|
|» experimentalFeatures|body|[ExperimentalFeaturesBody](#schemaexperimentalfeaturesbody)|false|none|
|» features|body|object \| null|false|none|
|» » **additionalProperties**|body|string \| null|false|none|
|» friendlyName|body|string|true|none|
|» planId|body|string \| null|false|none|
|» seed|body|[SeedInfoBody](#schemaseedinfobody)|false|none|
|» storageType|body|[StorageType](#schemastoragetype)|false|none|
|» templateInfo|body|[PrebuildTemplateInfo](#schemaprebuildtemplateinfo)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» storageType|0 (V1)|
|» storageType|1 (V2)|

> Example responses

> 201 Response

```json
{
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "sasUrl": "string",
  "templateId": "string"
}
```

> 400 Response

```json
"0 (Unknown)"
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv2prebuildstemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[CreateTemplateResult](#schemacreatetemplateresult)|
|400|Bad Request|Bad Request|[MessageCodes](#schemamessagecodes)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GetPrebuildReadinessSkusRoute

<a id="opIdGetPrebuildReadinessSkusRoute"></a>

> Code samples

```bash
curl https://example.com/api/v2/prebuilds/templates/skus/repo/string/branch/string/hash/string/location/string/devcontainerpath/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/prebuilds/templates/skus/repo/{repoId}/branch/{branchName}/hash/{prebuildHash}/location/{location}/devcontainerpath/{devContainerPath}`

<h3 id="getprebuildreadinessskusroute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repoId|path|string|true|none|
|branchName|path|string|true|none|
|prebuildHash|path|string|true|none|
|location|path|string|true|none|
|devContainerPath|path|string|true|none|
|storageType|query|[StorageType](#schemastoragetype)|false|none|
|fastPathEnabled|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|storageType|0 (V1)|
|storageType|1 (V2)|

> Example responses

> 200 Response

```json
{
  "branchName": "string",
  "devContainerPath": "string",
  "location": "101 (EastAsia)",
  "poolSkus": [
    "string"
  ],
  "prebuildHash": "string",
  "repoId": "string",
  "supportedSkus": [
    "string"
  ],
  "templateSkus": [
    "string"
  ]
}
```

> 400 Response

```json
"string"
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getprebuildreadinessskusroute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PrebuildReadinessResult](#schemaprebuildreadinessresult)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v2/prebuilds/templates/updatemaxversions

> Code samples

```bash
curl https://example.com/api/v2/prebuilds/templates/updatemaxversions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "branchName": "string",
    "devContainerPath": "string",
    "maxPrebuildTemplateVersions": 0,
    "repoId": 0
  }'
```

`POST /api/v2/prebuilds/templates/updatemaxversions`

> Body parameter

```json
{
  "branchName": "string",
  "devContainerPath": "string",
  "maxPrebuildTemplateVersions": 0,
  "repoId": 0
}
```

<h3 id="postapiv2prebuildstemplatesupdatemaxversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdatePrebuildTemplateVersionsBody](#schemaupdateprebuildtemplateversionsbody)|false|none|
|» branchName|body|string|true|none|
|» devContainerPath|body|string \| null|false|none|
|» maxPrebuildTemplateVersions|body|integer(int32)|true|none|
|» repoId|body|integer(int64)|true|none|

> Example responses

> 400 Response

```json
"0 (Unknown)"
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 503 Response

```json
"0 (Unknown)"
```

<h3 id="postapiv2prebuildstemplatesupdatemaxversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[MessageCodes](#schemamessagecodes)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|
|503|Service Unavailable|Server Error|[MessageCodes](#schemamessagecodes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/api/v2/prebuilds/templates/{templateId}/updatestatus

> Code samples

```bash
curl https://example.com/api/v2/prebuilds/templates/497f6eca-6276-4993-bfeb-53cbbbba6f08/updatestatus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "isSuccess": true
  }'
```

`POST /api/v2/prebuilds/templates/{templateId}/updatestatus`

> Body parameter

```json
{
  "isSuccess": true
}
```

<h3 id="postapiv2prebuildstemplatestemplateidupdatestatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateId|path|string(uuid)|true|none|
|body|body|[UpdatePrebuildTemplateBody](#schemaupdateprebuildtemplatebody)|false|none|
|» isSuccess|body|boolean|true|none|

> Example responses

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postapiv2prebuildstemplatestemplateidupdatestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-health">Health</h1>

## get/health

> Code samples

```bash
curl https://example.com/health \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /health`

<h3 id="gethealth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|500|Internal Server Error|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-netmon">Netmon</h1>

## get/internal/Netmon/correlation

> Code samples

```bash
curl https://example.com/internal/Netmon/correlation \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /internal/Netmon/correlation`

<h3 id="getinternalnetmoncorrelation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|macAddress|query|string|false|none|

> Example responses

> 200 Response

```json
"string"
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="getinternalnetmoncorrelation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-authentication">Authentication</h1>

## get/tunnelauth

> Code samples

```bash
curl https://example.com/tunnelauth \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tunnelauth`

<h3 id="gettunnelauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|cluster|query|string|false|none|
|name|query|string|false|none|
|port|query|integer(int32)|false|none|
|pb|query|string|false|none|

<h3 id="gettunnelauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post/tunnelauth

> Code samples

```bash
curl https://example.com/tunnelauth \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /tunnelauth`

<h3 id="posttunnelauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|op|query|string|false|none|
|id|query|string|false|none|
|cluster|query|string|false|none|
|name|query|string|false|none|
|port|query|integer(int32)|false|none|

<h3 id="posttunnelauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="vsonline-warmup">Warmup</h1>

## get/warmup

> Code samples

```bash
curl https://example.com/warmup \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /warmup`

<h3 id="getwarmup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|503|Service Unavailable|Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocS_AddForwardedPortSettings">AddForwardedPortSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaddforwardedportsettings"></a>
<a id="schema_AddForwardedPortSettings"></a>
<a id="tocSaddforwardedportsettings"></a>
<a id="tocsaddforwardedportsettings"></a>

```json
{
  "privacy": "0 (Private)",
  "tunnelType": "0 (Basis)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privacy|[PrivacyEnum](#schemaprivacyenum)|false|none|none|
|tunnelType|[TunnelType](#schematunneltype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|0 (Private)|
|privacy|1 (Public)|
|privacy|2 (Org)|
|tunnelType|0 (Basis)|
|tunnelType|1 (Liveshare)|

<h2 id="tocS_AgentResponse">AgentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaagentresponse"></a>
<a id="schema_AgentResponse"></a>
<a id="tocSagentresponse"></a>
<a id="tocsagentresponse"></a>

```json
{
  "assetUri": "string",
  "family": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetUri|string \| null|false|none|none|
|family|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_AvailableSettingsResult">AvailableSettingsResult</h2>
<!-- backwards compatibility -->
<a id="schemaavailablesettingsresult"></a>
<a id="schema_AvailableSettingsResult"></a>
<a id="tocSavailablesettingsresult"></a>
<a id="tocsavailablesettingsresult"></a>

```json
{
  "sku": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sku|[string]|false|none|none|

<h2 id="tocS_AzureLocation">AzureLocation</h2>
<!-- backwards compatibility -->
<a id="schemaazurelocation"></a>
<a id="schema_AzureLocation"></a>
<a id="tocSazurelocation"></a>
<a id="tocsazurelocation"></a>

```json
"101 (EastAsia)"
```

<h2 id="tocS_BillSummary">BillSummary</h2>
<!-- backwards compatibility -->
<a id="schemabillsummary"></a>
<a id="schema_BillSummary"></a>
<a id="tocSbillsummary"></a>
<a id="tocsbillsummary"></a>

```json
{
  "billGenerationTime": "1970-01-01T00:00:00Z",
  "environmentId": "string",
  "id": "string",
  "location": "101 (EastAsia)",
  "partitionKey": "string",
  "periodEnd": "1970-01-01T00:00:00Z",
  "periodStart": "1970-01-01T00:00:00Z",
  "plan": {
    "location": "101 (EastAsia)",
    "name": "string",
    "providerNamespace": "string",
    "resourceGroup": "string",
    "resourceId": "string",
    "subscription": "string"
  },
  "usage": {
    "property1": 0,
    "property2": 0
  },
  "usageDetail": [
    {
      "endState": "0 (None)",
      "id": "string",
      "resourceUsage": {
        "compute": [
          {
            "sku": "string",
            "usage": 0
          }
        ],
        "storage": [
          {
            "size": 0,
            "sizeInKB": 0,
            "sku": "string",
            "usage": 0
          }
        ]
      },
      "sku": {
        "name": "string",
        "tier": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billGenerationTime|string(date-time)|false|none|none|
|environmentId|string \| null|false|none|none|
|id|string \| null|false|none|none|
|location|[AzureLocation](#schemaazurelocation)|false|none|none|
|partitionKey|string \| null|false|none|none|
|periodEnd|string(date-time)|false|none|none|
|periodStart|string(date-time)|false|none|none|
|plan|[VsoPlanInfo](#schemavsoplaninfo)|false|none|none|
|usage|object \| null|false|none|**Deprecated.**|
|usageDetail|[[EnvironmentUsage](#schemaenvironmentusage)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|location|101 (EastAsia)|
|location|102 (SouthEastAsia)|
|location|201 (AustraliaCentral)|
|location|202 (AustraliaCentral2)|
|location|203 (AustraliaEast)|
|location|205 (AustraliaSouthEast)|
|location|301 (BrazilSouth)|
|location|401 (CanadaCentral)|
|location|402 (CanadaEast)|
|location|501 (NorthEurope)|
|location|502 (WestEurope)|
|location|601 (FranceCentral)|
|location|602 (FranceSouth)|
|location|701 (CentralIndia)|
|location|702 (SouthIndia)|
|location|703 (WestIndia)|
|location|801 (JapanEast)|
|location|802 (JapanWest)|
|location|901 (KoreaCentral)|
|location|902 (KoreaSouth)|
|location|1001 (SouthAfricaNorth)|
|location|1002 (SouthAfricaWest)|
|location|1201 (UaeCentral)|
|location|1202 (UaeNorth)|
|location|1401 (UkSouth)|
|location|1402 (UkWest)|
|location|1501 (CentralUs)|
|location|1502 (EastUs)|
|location|1503 (EastUs2)|
|location|1504 (NorthCentralUs)|
|location|1505 (SouthCentralUs)|
|location|1506 (WestCentralUs)|
|location|1507 (WestUs)|
|location|1508 (WestUs2)|
|location|1509 (WestUs3)|
|location|1601 (CentralUsEuap)|
|location|1602 (EastUs2Euap)|
|location|1701 (SwitzerlandNorth)|
|location|1702 (SwitzerlandWest)|
|location|1801 (GermanyNorth)|
|location|1802 (GermanyWestCentral)|
|location|1901 (NorwayWest)|
|location|1902 (NorwayEast)|

<h2 id="tocS_BillableOwnerBody">BillableOwnerBody</h2>
<!-- backwards compatibility -->
<a id="schemabillableownerbody"></a>
<a id="schema_BillableOwnerBody"></a>
<a id="tocSbillableownerbody"></a>
<a id="tocsbillableownerbody"></a>

```json
{
  "id": "string",
  "login": "string",
  "type": "0 (User)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|login|string \| null|false|none|none|
|type|[BillableOwnerType](#schemabillableownertype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|0 (User)|
|type|1 (Organization)|

<h2 id="tocS_BillableOwnerType">BillableOwnerType</h2>
<!-- backwards compatibility -->
<a id="schemabillableownertype"></a>
<a id="schema_BillableOwnerType"></a>
<a id="tocSbillableownertype"></a>
<a id="tocsbillableownertype"></a>

```json
"0 (User)"
```

<h2 id="tocS_BillingProperties">BillingProperties</h2>
<!-- backwards compatibility -->
<a id="schemabillingproperties"></a>
<a id="schema_BillingProperties"></a>
<a id="tocSbillingproperties"></a>
<a id="tocsbillingproperties"></a>

```json
{
  "billingType": "string",
  "channelType": "string",
  "paymentType": "string",
  "tier": "string",
  "workloadType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingType|string \| null|false|none|none|
|channelType|string \| null|false|none|none|
|paymentType|string \| null|false|none|none|
|tier|string \| null|false|none|none|
|workloadType|string \| null|false|none|none|

<h2 id="tocS_ChangeResourceDeletionRequestBody">ChangeResourceDeletionRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemachangeresourcedeletionrequestbody"></a>
<a id="schema_ChangeResourceDeletionRequestBody"></a>
<a id="tocSchangeresourcedeletionrequestbody"></a>
<a id="tocschangeresourcedeletionrequestbody"></a>

```json
{
  "comment": "string",
  "enabled": true,
  "poolCode": "string",
  "poolType": "string",
  "region": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string \| null|false|none|none|
|enabled|boolean|false|none|none|
|poolCode|string \| null|false|none|none|
|poolType|string \| null|false|none|none|
|region|string \| null|false|none|none|

<h2 id="tocS_ClaimVMBody">ClaimVMBody</h2>
<!-- backwards compatibility -->
<a id="schemaclaimvmbody"></a>
<a id="schema_ClaimVMBody"></a>
<a id="tocSclaimvmbody"></a>
<a id="tocsclaimvmbody"></a>

```json
{
  "user": {
    "userPrincipalName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|[UserIdentity](#schemauseridentity)|true|none|none|

<h2 id="tocS_ClientUsageData">ClientUsageData</h2>
<!-- backwards compatibility -->
<a id="schemaclientusagedata"></a>
<a id="schema_ClientUsageData"></a>
<a id="tocSclientusagedata"></a>
<a id="tocsclientusagedata"></a>

```json
{
  "activeMinutes": 0,
  "lastActivity": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeMinutes|integer(int32)|false|none|none|
|lastActivity|string(date-time)|false|none|none|

<h2 id="tocS_ClientUsageSession">ClientUsageSession</h2>
<!-- backwards compatibility -->
<a id="schemaclientusagesession"></a>
<a id="schema_ClientUsageSession"></a>
<a id="tocSclientusagesession"></a>
<a id="tocsclientusagesession"></a>

```json
{
  "sessionId": "string",
  "usageData": {
    "property1": {
      "activeMinutes": 0,
      "lastActivity": "1970-01-01T00:00:00Z"
    },
    "property2": {
      "activeMinutes": 0,
      "lastActivity": "1970-01-01T00:00:00Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionId|string \| null|false|none|none|
|usageData|object \| null|false|none|none|

<h2 id="tocS_CloudEnvironmentFolderBody">CloudEnvironmentFolderBody</h2>
<!-- backwards compatibility -->
<a id="schemacloudenvironmentfolderbody"></a>
<a id="schema_CloudEnvironmentFolderBody"></a>
<a id="tocScloudenvironmentfolderbody"></a>
<a id="tocscloudenvironmentfolderbody"></a>

```json
{
  "recentFolderPaths": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recentFolderPaths|[string]|false|none|none|

<h2 id="tocS_CloudEnvironmentResult">CloudEnvironmentResult</h2>
<!-- backwards compatibility -->
<a id="schemacloudenvironmentresult"></a>
<a id="schema_CloudEnvironmentResult"></a>
<a id="tocScloudenvironmentresult"></a>
<a id="tocscloudenvironmentresult"></a>

```json
{
  "accessToken": "string",
  "active": "1970-01-01T00:00:00Z",
  "autoShutdownDelayMinutes": 0,
  "billableOwnerType": "0 (User)",
  "clientUsage": {
    "sessionId": "string",
    "usageData": {
      "property1": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      }
    }
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "container": {
    "id": "string",
    "schemaVersion": "string"
  },
  "containerImage": "string",
  "createFromPrebuild": true,
  "created": "1970-01-01T00:00:00Z",
  "displayStorageUtilizationInKb": true,
  "exportedBlobUrl": "string",
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitStatus": {
    "ahead": 0,
    "behind": 0,
    "branch": "string",
    "commit": "string",
    "hasUncommittedChanges": true,
    "hasUnpushedChanges": true,
    "noGitRepo": true
  },
  "id": "string",
  "lastStateUpdateReason": "string",
  "lastUsed": "1970-01-01T00:00:00Z",
  "location": "string",
  "organizationId": "string",
  "ownerId": "string",
  "planId": "string",
  "platform": "string",
  "portForwardingConnection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "prebuildType": "string",
  "recentFolders": [
    "string"
  ],
  "resourceTier": "0 (None)",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuDisplayName": "string",
  "skuName": "string",
  "state": "string",
  "storageUtilizationInKb": 0,
  "subscriptionData": {
    "computeQuota": 0,
    "computeUsage": 0,
    "subscriptionId": "string",
    "subscriptionState": "string"
  },
  "templateStatus": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|string \| null|false|none|none|
|active|string(date-time)|false|none|none|
|autoShutdownDelayMinutes|integer(int32)|false|none|none|
|billableOwnerType|[BillableOwnerType](#schemabillableownertype)|false|none|none|
|clientUsage|[ClientUsageSession](#schemaclientusagesession)|false|none|none|
|connection|[ConnectionInfoBody](#schemaconnectioninfobody)|false|none|none|
|container|[ContainerInfoBody](#schemacontainerinfobody)|false|none|none|
|containerImage|string \| null|false|none|none|
|createFromPrebuild|boolean|false|none|none|
|created|string(date-time)|false|none|none|
|displayStorageUtilizationInKb|boolean|false|none|none|
|exportedBlobUrl|string \| null|false|none|none|
|failoverDetails|[FailoverDetails](#schemafailoverdetails)|false|none|none|
|features|object \| null|false|none|none|
|friendlyName|string \| null|false|none|none|
|gitStatus|[GitStatus](#schemagitstatus)|false|none|none|
|id|string \| null|false|none|none|
|lastStateUpdateReason|string \| null|false|none|none|
|lastUsed|string(date-time) \| null|false|none|none|
|location|string \| null|false|none|none|
|organizationId|string \| null|false|none|none|
|ownerId|string \| null|false|none|none|
|planId|string \| null|false|none|none|
|platform|string \| null|false|none|none|
|portForwardingConnection|[ConnectionInfoBody](#schemaconnectioninfobody)|false|none|none|
|prebuildType|string \| null|false|none|none|
|recentFolders|[string]|false|none|none|
|resourceTier|[ConsumerType](#schemaconsumertype)|false|none|none|
|runtimeConstraints|[RuntimeConstraintsBody](#schemaruntimeconstraintsbody)|false|none|none|
|seed|[SeedInfoBody](#schemaseedinfobody)|false|none|none|
|skuDisplayName|string \| null|false|none|none|
|skuName|string \| null|false|none|none|
|state|string \| null|false|none|none|
|storageUtilizationInKb|integer(int64) \| null|false|none|none|
|subscriptionData|[SubscriptionData](#schemasubscriptiondata)|false|none|none|
|templateStatus|string \| null|false|none|none|
|type|string \| null|false|none|none|
|updated|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|billableOwnerType|0 (User)|
|billableOwnerType|1 (Organization)|
|resourceTier|0 (None)|
|resourceTier|1 (System)|
|resourceTier|2 (Trusted)|
|resourceTier|4 (Neutral)|
|resourceTier|8 (Untrusted)|
|resourceTier|9 (Test)|

<h2 id="tocS_CloudEnvironmentState">CloudEnvironmentState</h2>
<!-- backwards compatibility -->
<a id="schemacloudenvironmentstate"></a>
<a id="schema_CloudEnvironmentState"></a>
<a id="tocScloudenvironmentstate"></a>
<a id="tocscloudenvironmentstate"></a>

```json
"0 (None)"
```

<h2 id="tocS_CollectedData">CollectedData</h2>
<!-- backwards compatibility -->
<a id="schemacollecteddata"></a>
<a id="schema_CollectedData"></a>
<a id="tocScollecteddata"></a>
<a id="tocscollecteddata"></a>

```json
{
  "environmentId": "string",
  "name": "string",
  "parentActivityId": "string",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|parentActivityId|string \| null|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_ComputeUsageDetail">ComputeUsageDetail</h2>
<!-- backwards compatibility -->
<a id="schemacomputeusagedetail"></a>
<a id="schema_ComputeUsageDetail"></a>
<a id="tocScomputeusagedetail"></a>
<a id="tocscomputeusagedetail"></a>

```json
{
  "sku": "string",
  "usage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sku|string \| null|false|none|none|
|usage|number(double)|false|none|none|

<h2 id="tocS_ConnectionInfoBody">ConnectionInfoBody</h2>
<!-- backwards compatibility -->
<a id="schemaconnectioninfobody"></a>
<a id="schema_ConnectionInfoBody"></a>
<a id="tocSconnectioninfobody"></a>
<a id="tocsconnectioninfobody"></a>

```json
{
  "connectionServiceUri": "string",
  "connectionSessionId": "string",
  "connectionSessionPath": "string",
  "hostPublicKeys": [
    "string"
  ],
  "relayEndpoint": "string",
  "relaySasToken": "string",
  "sessionToken": "string",
  "tunnelProperties": {
    "clusterId": "string",
    "connectAccessToken": "string",
    "domain": "string",
    "managePortsAccessToken": "string",
    "serviceUri": "string",
    "tunnelId": "string",
    "tunnelName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionServiceUri|string \| null|false|none|none|
|connectionSessionId|string \| null|false|none|none|
|connectionSessionPath|string \| null|false|none|none|
|hostPublicKeys|[string]|false|none|none|
|relayEndpoint|string \| null|false|none|none|
|relaySasToken|string \| null|false|none|none|
|sessionToken|string \| null|false|none|none|
|tunnelProperties|[TunnelProperties](#schematunnelproperties)|false|none|none|

<h2 id="tocS_ConsumerType">ConsumerType</h2>
<!-- backwards compatibility -->
<a id="schemaconsumertype"></a>
<a id="schema_ConsumerType"></a>
<a id="tocSconsumertype"></a>
<a id="tocsconsumertype"></a>

```json
"0 (None)"
```

<h2 id="tocS_ContainerInfo">ContainerInfo</h2>
<!-- backwards compatibility -->
<a id="schemacontainerinfo"></a>
<a id="schema_ContainerInfo"></a>
<a id="tocScontainerinfo"></a>
<a id="tocscontainerinfo"></a>

```json
{
  "id": "string",
  "imageName": "string",
  "schemaVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|imageName|string \| null|false|none|none|
|schemaVersion|string \| null|false|none|none|

<h2 id="tocS_ContainerInfoBody">ContainerInfoBody</h2>
<!-- backwards compatibility -->
<a id="schemacontainerinfobody"></a>
<a id="schema_ContainerInfoBody"></a>
<a id="tocScontainerinfobody"></a>
<a id="tocscontainerinfobody"></a>

```json
{
  "id": "string",
  "schemaVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|schemaVersion|string \| null|false|none|none|

<h2 id="tocS_CreateCloudEnvironmentBody">CreateCloudEnvironmentBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatecloudenvironmentbody"></a>
<a id="schema_CreateCloudEnvironmentBody"></a>
<a id="tocScreatecloudenvironmentbody"></a>
<a id="tocscreatecloudenvironmentbody"></a>

```json
{
  "analyticsTrackingId": "string",
  "autoShutdownDelayMinutes": 0,
  "billableOwner": {
    "id": "string",
    "login": "string",
    "type": "0 (User)"
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "containerImage": "string",
  "createAsPrebuild": true,
  "devContainerJson": "string",
  "devContainerPath": "string",
  "experimentalFeatures": {
    "enableDynamicHttpsDetection": true,
    "queueResourceAllocation": true,
    "usePrebuildFastPathIfAvailable": true,
    "usePrebuiltImages": true,
    "useStorageV2": true
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitHubApiUrl": "string",
  "gitHubAppUrl": "string",
  "gitHubPfsAuthEndpoint": "string",
  "githubEnvironmentEndpoint": "string",
  "hasDevcontainerJson": true,
  "identity": {
    "displayName": "string",
    "id": "string",
    "userName": "string"
  },
  "label": "string",
  "location": "string",
  "netmonCorrelationData": {
    "billableOwnerCreatedAt": "string",
    "billableOwnerDatabaseId": "string",
    "billableOwnerGlobalRelayId": "string",
    "billableOwnerPlan": "string",
    "ownerCreatedAt": "string",
    "ownerDatabaseId": "string",
    "ownerGlobalRelayId": "string",
    "ownerPlan": "string",
    "repositoryCreatedAt": "string",
    "repositoryDatabaseId": "string",
    "repositoryGlobalRelayId": "string",
    "repositoryPrivate": true
  },
  "personalization": {
    "dotfilesInstallCommand": "string",
    "dotfilesRepository": "string",
    "dotfilesTargetPath": "string"
  },
  "planId": "string",
  "platform": "string",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "secrets": [
    {
      "name": "string",
      "type": "1 (EnvironmentVariable)",
      "value": "string"
    }
  ],
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuName": "string",
  "testAccount": true,
  "type": "string",
  "userTier": "string",
  "workingDirectory": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyticsTrackingId|string \| null|false|none|none|
|autoShutdownDelayMinutes|integer(int32)|false|none|none|
|billableOwner|[BillableOwnerBody](#schemabillableownerbody)|false|none|none|
|connection|[ConnectionInfoBody](#schemaconnectioninfobody)|false|none|none|
|containerImage|string \| null|false|none|none|
|createAsPrebuild|boolean|false|none|none|
|devContainerJson|string \| null|false|none|none|
|devContainerPath|string \| null|false|none|none|
|experimentalFeatures|[ExperimentalFeaturesBody](#schemaexperimentalfeaturesbody)|false|none|none|
|features|object \| null|false|none|none|
|friendlyName|string|true|none|none|
|gitHubApiUrl|string \| null|false|none|none|
|gitHubAppUrl|string \| null|false|none|none|
|gitHubPfsAuthEndpoint|string \| null|false|none|none|
|githubEnvironmentEndpoint|string \| null|false|none|none|
|hasDevcontainerJson|boolean|false|none|none|
|identity|[IdentityBody](#schemaidentitybody)|false|none|none|
|label|string \| null|false|none|none|
|location|string \| null|false|none|**Deprecated.**|
|netmonCorrelationData|[NetmonCorrelationDataBody](#schemanetmoncorrelationdatabody)|false|none|none|
|personalization|[PersonalizationInfoBody](#schemapersonalizationinfobody)|false|none|none|
|planId|string \| null|false|none|none|
|platform|string \| null|false|none|**Deprecated.**|
|runtimeConstraints|[RuntimeConstraintsBody](#schemaruntimeconstraintsbody)|false|none|none|
|secrets|[[SecretDataBody](#schemasecretdatabody)]|false|none|none|
|seed|[SeedInfoBody](#schemaseedinfobody)|false|none|none|
|skuName|string \| null|false|none|none|
|testAccount|boolean|false|none|none|
|type|string|true|none|none|
|userTier|string \| null|false|none|none|
|workingDirectory|string \| null|false|none|none|

<h2 id="tocS_CreateEnvironmentPoolResourceBody">CreateEnvironmentPoolResourceBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmentpoolresourcebody"></a>
<a id="schema_CreateEnvironmentPoolResourceBody"></a>
<a id="tocScreateenvironmentpoolresourcebody"></a>
<a id="tocscreateenvironmentpoolresourcebody"></a>

```json
{
  "environmentOptions": {
    "correlationId": "string"
  },
  "secrets": [
    {
      "name": "string",
      "type": "1 (EnvironmentVariable)",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentOptions|[PrebuildEnvironmentOptions](#schemaprebuildenvironmentoptions)|false|none|none|
|secrets|[[SecretDataBody](#schemasecretdatabody)]|false|none|none|

<h2 id="tocS_CreateEnvironmentStateChangeBody">CreateEnvironmentStateChangeBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmentstatechangebody"></a>
<a id="schema_CreateEnvironmentStateChangeBody"></a>
<a id="tocScreateenvironmentstatechangebody"></a>
<a id="tocscreateenvironmentstatechangebody"></a>

```json
{
  "newValue": "0 (None)",
  "oldValue": "0 (None)",
  "time": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newValue|[CloudEnvironmentState](#schemacloudenvironmentstate)|false|none|none|
|oldValue|[CloudEnvironmentState](#schemacloudenvironmentstate)|false|none|none|
|time|string(date-time) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|newValue|0 (None)|
|newValue|1 (Created)|
|newValue|2 (Queued)|
|newValue|3 (Provisioning)|
|newValue|4 (Available)|
|newValue|5 (Awaiting)|
|newValue|6 (Unavailable)|
|newValue|7 (Deleted)|
|newValue|8 (Moved)|
|newValue|9 (Shutdown)|
|newValue|10 (Archived)|
|newValue|11 (Starting)|
|newValue|12 (ShuttingDown)|
|newValue|13 (Failed)|
|newValue|14 (Exporting)|
|newValue|15 (Updating)|
|newValue|16 (Rebuilding)|
|oldValue|0 (None)|
|oldValue|1 (Created)|
|oldValue|2 (Queued)|
|oldValue|3 (Provisioning)|
|oldValue|4 (Available)|
|oldValue|5 (Awaiting)|
|oldValue|6 (Unavailable)|
|oldValue|7 (Deleted)|
|oldValue|8 (Moved)|
|oldValue|9 (Shutdown)|
|oldValue|10 (Archived)|
|oldValue|11 (Starting)|
|oldValue|12 (ShuttingDown)|
|oldValue|13 (Failed)|
|oldValue|14 (Exporting)|
|oldValue|15 (Updating)|
|oldValue|16 (Rebuilding)|

<h2 id="tocS_CreateOrUpdatePoolBody">CreateOrUpdatePoolBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateorupdatepoolbody"></a>
<a id="schema_CreateOrUpdatePoolBody"></a>
<a id="tocScreateorupdatepoolbody"></a>
<a id="tocscreateorupdatepoolbody"></a>

```json
{
  "domainUserCredentials": {
    "domain": "string",
    "organizationalUnit": "string",
    "passwordSecretIdentifier": "string",
    "userName": "string"
  },
  "hotPoolSettings": {
    "size": 0
  },
  "poolGroupName": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userGroupName": "string",
  "vmSpecs": {
    "diskType": "0 (StandardHDD)",
    "imageResourceId": "string",
    "size": "string",
    "subnetResourceId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainUserCredentials|[DomainUserCredentials](#schemadomainusercredentials)|false|none|none|
|hotPoolSettings|[HotPoolSettings](#schemahotpoolsettings)|false|none|none|
|poolGroupName|string|true|none|none|
|tags|object \| null|false|none|none|
|userGroupName|string \| null|false|none|none|
|vmSpecs|[VMSpecs](#schemavmspecs)|true|none|none|

<h2 id="tocS_CreatePoolGroupBody">CreatePoolGroupBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatepoolgroupbody"></a>
<a id="schema_CreatePoolGroupBody"></a>
<a id="tocScreatepoolgroupbody"></a>
<a id="tocscreatepoolgroupbody"></a>

```json
{
  "displayName": "string",
  "region": "101 (EastAsia)",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|true|none|none|
|region|[AzureLocation](#schemaazurelocation)|true|none|none|
|tags|object \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|region|101 (EastAsia)|
|region|102 (SouthEastAsia)|
|region|201 (AustraliaCentral)|
|region|202 (AustraliaCentral2)|
|region|203 (AustraliaEast)|
|region|205 (AustraliaSouthEast)|
|region|301 (BrazilSouth)|
|region|401 (CanadaCentral)|
|region|402 (CanadaEast)|
|region|501 (NorthEurope)|
|region|502 (WestEurope)|
|region|601 (FranceCentral)|
|region|602 (FranceSouth)|
|region|701 (CentralIndia)|
|region|702 (SouthIndia)|
|region|703 (WestIndia)|
|region|801 (JapanEast)|
|region|802 (JapanWest)|
|region|901 (KoreaCentral)|
|region|902 (KoreaSouth)|
|region|1001 (SouthAfricaNorth)|
|region|1002 (SouthAfricaWest)|
|region|1201 (UaeCentral)|
|region|1202 (UaeNorth)|
|region|1401 (UkSouth)|
|region|1402 (UkWest)|
|region|1501 (CentralUs)|
|region|1502 (EastUs)|
|region|1503 (EastUs2)|
|region|1504 (NorthCentralUs)|
|region|1505 (SouthCentralUs)|
|region|1506 (WestCentralUs)|
|region|1507 (WestUs)|
|region|1508 (WestUs2)|
|region|1509 (WestUs3)|
|region|1601 (CentralUsEuap)|
|region|1602 (EastUs2Euap)|
|region|1701 (SwitzerlandNorth)|
|region|1702 (SwitzerlandWest)|
|region|1801 (GermanyNorth)|
|region|1802 (GermanyWestCentral)|
|region|1901 (NorwayWest)|
|region|1902 (NorwayEast)|

<h2 id="tocS_CreatePrebuildTemplateBody">CreatePrebuildTemplateBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateprebuildtemplatebody"></a>
<a id="schema_CreatePrebuildTemplateBody"></a>
<a id="tocScreateprebuildtemplatebody"></a>
<a id="tocscreateprebuildtemplatebody"></a>

```json
{
  "devContainerPath": "string",
  "experimentalFeatures": {
    "enableDynamicHttpsDetection": true,
    "queueResourceAllocation": true,
    "usePrebuildFastPathIfAvailable": true,
    "usePrebuiltImages": true,
    "useStorageV2": true
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "planId": "string",
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "storageType": "0 (V1)",
  "templateInfo": {
    "container": {
      "id": "string",
      "imageName": "string",
      "schemaVersion": "string"
    },
    "prebuildConfigurationId": "string",
    "templateSizeInGB": 0,
    "totalTimeSavingsInSeconds": "string",
    "workFlowRunId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devContainerPath|string \| null|false|none|none|
|experimentalFeatures|[ExperimentalFeaturesBody](#schemaexperimentalfeaturesbody)|false|none|none|
|features|object \| null|false|none|none|
|friendlyName|string|true|none|none|
|planId|string \| null|false|none|none|
|seed|[SeedInfoBody](#schemaseedinfobody)|false|none|none|
|storageType|[StorageType](#schemastoragetype)|false|none|none|
|templateInfo|[PrebuildTemplateInfo](#schemaprebuildtemplateinfo)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|storageType|0 (V1)|
|storageType|1 (V2)|

<h2 id="tocS_CreateTemplateResult">CreateTemplateResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatetemplateresult"></a>
<a id="schema_CreateTemplateResult"></a>
<a id="tocScreatetemplateresult"></a>
<a id="tocscreatetemplateresult"></a>

```json
{
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "sasUrl": "string",
  "templateId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|object \| null|false|none|none|
|sasUrl|string \| null|false|none|none|
|templateId|string \| null|false|none|none|

<h2 id="tocS_DelegateIdentity">DelegateIdentity</h2>
<!-- backwards compatibility -->
<a id="schemadelegateidentity"></a>
<a id="schema_DelegateIdentity"></a>
<a id="tocSdelegateidentity"></a>
<a id="tocsdelegateidentity"></a>

```json
{
  "displayName": "string",
  "id": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string \| null|false|none|none|
|id|string \| null|false|none|none|
|username|string \| null|false|none|none|

<h2 id="tocS_DeletePrebuildTemplatesBody">DeletePrebuildTemplatesBody</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprebuildtemplatesbody"></a>
<a id="schema_DeletePrebuildTemplatesBody"></a>
<a id="tocSdeleteprebuildtemplatesbody"></a>
<a id="tocsdeleteprebuildtemplatesbody"></a>

```json
{
  "branchName": "string",
  "devContainerPath": "string",
  "prebuildConfigurationId": 0,
  "repoId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchName|string|true|none|none|
|devContainerPath|string \| null|false|none|none|
|prebuildConfigurationId|integer(int64)|false|none|none|
|repoId|integer(int64)|true|none|none|

<h2 id="tocS_DomainUserCredentials">DomainUserCredentials</h2>
<!-- backwards compatibility -->
<a id="schemadomainusercredentials"></a>
<a id="schema_DomainUserCredentials"></a>
<a id="tocSdomainusercredentials"></a>
<a id="tocsdomainusercredentials"></a>

```json
{
  "domain": "string",
  "organizationalUnit": "string",
  "passwordSecretIdentifier": "string",
  "userName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|true|none|none|
|organizationalUnit|string \| null|false|none|none|
|passwordSecretIdentifier|string|true|none|none|
|userName|string|true|none|none|

<h2 id="tocS_EnvironmentBillingInfo">EnvironmentBillingInfo</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentbillinginfo"></a>
<a id="schema_EnvironmentBillingInfo"></a>
<a id="tocSenvironmentbillinginfo"></a>
<a id="tocsenvironmentbillinginfo"></a>

```json
{
  "id": "string",
  "name": "string",
  "sku": {
    "name": "string",
    "tier": "string"
  },
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|name|string \| null|false|none|none|
|sku|[Sku](#schemasku)|false|none|none|
|userId|string \| null|false|none|none|

<h2 id="tocS_EnvironmentRegistrationCallbackBody">EnvironmentRegistrationCallbackBody</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentregistrationcallbackbody"></a>
<a id="schema_EnvironmentRegistrationCallbackBody"></a>
<a id="tocSenvironmentregistrationcallbackbody"></a>
<a id="tocsenvironmentregistrationcallbackbody"></a>

```json
{
  "payload": {
    "sessionId": "string",
    "sessionPath": "string"
  },
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[EnvironmentRegistrationCallbackPayloadBody](#schemaenvironmentregistrationcallbackpayloadbody)|false|none|none|
|type|string|true|none|none|

<h2 id="tocS_EnvironmentRegistrationCallbackPayloadBody">EnvironmentRegistrationCallbackPayloadBody</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentregistrationcallbackpayloadbody"></a>
<a id="schema_EnvironmentRegistrationCallbackPayloadBody"></a>
<a id="tocSenvironmentregistrationcallbackpayloadbody"></a>
<a id="tocsenvironmentregistrationcallbackpayloadbody"></a>

```json
{
  "sessionId": "string",
  "sessionPath": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionId|string \| null|false|none|none|
|sessionPath|string \| null|false|none|none|

<h2 id="tocS_EnvironmentStateChange">EnvironmentStateChange</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentstatechange"></a>
<a id="schema_EnvironmentStateChange"></a>
<a id="tocSenvironmentstatechange"></a>
<a id="tocsenvironmentstatechange"></a>

```json
{
  "environment": {
    "id": "string",
    "name": "string",
    "sku": {
      "name": "string",
      "tier": "string"
    },
    "userId": "string"
  },
  "id": "string",
  "newValue": "0 (None)",
  "oldValue": "0 (None)",
  "partitionKey": "string",
  "time": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|[EnvironmentBillingInfo](#schemaenvironmentbillinginfo)|false|none|none|
|id|string \| null|false|none|none|
|newValue|[CloudEnvironmentState](#schemacloudenvironmentstate)|false|none|none|
|oldValue|[CloudEnvironmentState](#schemacloudenvironmentstate)|false|none|none|
|partitionKey|string \| null|false|none|none|
|time|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|newValue|0 (None)|
|newValue|1 (Created)|
|newValue|2 (Queued)|
|newValue|3 (Provisioning)|
|newValue|4 (Available)|
|newValue|5 (Awaiting)|
|newValue|6 (Unavailable)|
|newValue|7 (Deleted)|
|newValue|8 (Moved)|
|newValue|9 (Shutdown)|
|newValue|10 (Archived)|
|newValue|11 (Starting)|
|newValue|12 (ShuttingDown)|
|newValue|13 (Failed)|
|newValue|14 (Exporting)|
|newValue|15 (Updating)|
|newValue|16 (Rebuilding)|
|oldValue|0 (None)|
|oldValue|1 (Created)|
|oldValue|2 (Queued)|
|oldValue|3 (Provisioning)|
|oldValue|4 (Available)|
|oldValue|5 (Awaiting)|
|oldValue|6 (Unavailable)|
|oldValue|7 (Deleted)|
|oldValue|8 (Moved)|
|oldValue|9 (Shutdown)|
|oldValue|10 (Archived)|
|oldValue|11 (Starting)|
|oldValue|12 (ShuttingDown)|
|oldValue|13 (Failed)|
|oldValue|14 (Exporting)|
|oldValue|15 (Updating)|
|oldValue|16 (Rebuilding)|

<h2 id="tocS_EnvironmentUsage">EnvironmentUsage</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentusage"></a>
<a id="schema_EnvironmentUsage"></a>
<a id="tocSenvironmentusage"></a>
<a id="tocsenvironmentusage"></a>

```json
{
  "endState": "0 (None)",
  "id": "string",
  "resourceUsage": {
    "compute": [
      {
        "sku": "string",
        "usage": 0
      }
    ],
    "storage": [
      {
        "size": 0,
        "sizeInKB": 0,
        "sku": "string",
        "usage": 0
      }
    ]
  },
  "sku": {
    "name": "string",
    "tier": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endState|[CloudEnvironmentState](#schemacloudenvironmentstate)|false|none|none|
|id|string \| null|false|none|none|
|resourceUsage|[ResourceUsageDetail](#schemaresourceusagedetail)|false|none|none|
|sku|[Sku](#schemasku)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|endState|0 (None)|
|endState|1 (Created)|
|endState|2 (Queued)|
|endState|3 (Provisioning)|
|endState|4 (Available)|
|endState|5 (Awaiting)|
|endState|6 (Unavailable)|
|endState|7 (Deleted)|
|endState|8 (Moved)|
|endState|9 (Shutdown)|
|endState|10 (Archived)|
|endState|11 (Starting)|
|endState|12 (ShuttingDown)|
|endState|13 (Failed)|
|endState|14 (Exporting)|
|endState|15 (Updating)|
|endState|16 (Rebuilding)|

<h2 id="tocS_ExperimentalFeaturesBody">ExperimentalFeaturesBody</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentalfeaturesbody"></a>
<a id="schema_ExperimentalFeaturesBody"></a>
<a id="tocSexperimentalfeaturesbody"></a>
<a id="tocsexperimentalfeaturesbody"></a>

```json
{
  "enableDynamicHttpsDetection": true,
  "queueResourceAllocation": true,
  "usePrebuildFastPathIfAvailable": true,
  "usePrebuiltImages": true,
  "useStorageV2": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableDynamicHttpsDetection|boolean|false|none|none|
|queueResourceAllocation|boolean|false|none|none|
|usePrebuildFastPathIfAvailable|boolean|false|none|none|
|usePrebuiltImages|boolean|false|none|none|
|useStorageV2|boolean|false|none|none|

<h2 id="tocS_FailoverDetails">FailoverDetails</h2>
<!-- backwards compatibility -->
<a id="schemafailoverdetails"></a>
<a id="schema_FailoverDetails"></a>
<a id="tocSfailoverdetails"></a>
<a id="tocsfailoverdetails"></a>

```json
{
  "failoverEnabled": true,
  "failoverRegion": "101 (EastAsia)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failoverEnabled|boolean|false|none|none|
|failoverRegion|[AzureLocation](#schemaazurelocation)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|failoverRegion|101 (EastAsia)|
|failoverRegion|102 (SouthEastAsia)|
|failoverRegion|201 (AustraliaCentral)|
|failoverRegion|202 (AustraliaCentral2)|
|failoverRegion|203 (AustraliaEast)|
|failoverRegion|205 (AustraliaSouthEast)|
|failoverRegion|301 (BrazilSouth)|
|failoverRegion|401 (CanadaCentral)|
|failoverRegion|402 (CanadaEast)|
|failoverRegion|501 (NorthEurope)|
|failoverRegion|502 (WestEurope)|
|failoverRegion|601 (FranceCentral)|
|failoverRegion|602 (FranceSouth)|
|failoverRegion|701 (CentralIndia)|
|failoverRegion|702 (SouthIndia)|
|failoverRegion|703 (WestIndia)|
|failoverRegion|801 (JapanEast)|
|failoverRegion|802 (JapanWest)|
|failoverRegion|901 (KoreaCentral)|
|failoverRegion|902 (KoreaSouth)|
|failoverRegion|1001 (SouthAfricaNorth)|
|failoverRegion|1002 (SouthAfricaWest)|
|failoverRegion|1201 (UaeCentral)|
|failoverRegion|1202 (UaeNorth)|
|failoverRegion|1401 (UkSouth)|
|failoverRegion|1402 (UkWest)|
|failoverRegion|1501 (CentralUs)|
|failoverRegion|1502 (EastUs)|
|failoverRegion|1503 (EastUs2)|
|failoverRegion|1504 (NorthCentralUs)|
|failoverRegion|1505 (SouthCentralUs)|
|failoverRegion|1506 (WestCentralUs)|
|failoverRegion|1507 (WestUs)|
|failoverRegion|1508 (WestUs2)|
|failoverRegion|1509 (WestUs3)|
|failoverRegion|1601 (CentralUsEuap)|
|failoverRegion|1602 (EastUs2Euap)|
|failoverRegion|1701 (SwitzerlandNorth)|
|failoverRegion|1702 (SwitzerlandWest)|
|failoverRegion|1801 (GermanyNorth)|
|failoverRegion|1802 (GermanyWestCentral)|
|failoverRegion|1901 (NorwayWest)|
|failoverRegion|1902 (NorwayEast)|

<h2 id="tocS_GitConfigOptionsBody">GitConfigOptionsBody</h2>
<!-- backwards compatibility -->
<a id="schemagitconfigoptionsbody"></a>
<a id="schema_GitConfigOptionsBody"></a>
<a id="tocSgitconfigoptionsbody"></a>
<a id="tocsgitconfigoptionsbody"></a>

```json
{
  "userEmail": "string",
  "userName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userEmail|string \| null|false|none|none|
|userName|string \| null|false|none|none|

<h2 id="tocS_GitStatus">GitStatus</h2>
<!-- backwards compatibility -->
<a id="schemagitstatus"></a>
<a id="schema_GitStatus"></a>
<a id="tocSgitstatus"></a>
<a id="tocsgitstatus"></a>

```json
{
  "ahead": 0,
  "behind": 0,
  "branch": "string",
  "commit": "string",
  "hasUncommittedChanges": true,
  "hasUnpushedChanges": true,
  "noGitRepo": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ahead|integer(int32)|false|none|none|
|behind|integer(int32)|false|none|none|
|branch|string \| null|false|none|none|
|commit|string \| null|false|none|none|
|hasUncommittedChanges|boolean|false|none|none|
|hasUnpushedChanges|boolean|false|none|none|
|noGitRepo|boolean|false|none|none|

<h2 id="tocS_HeartBeatBody">HeartBeatBody</h2>
<!-- backwards compatibility -->
<a id="schemaheartbeatbody"></a>
<a id="schema_HeartBeatBody"></a>
<a id="tocSheartbeatbody"></a>
<a id="tocsheartbeatbody"></a>

```json
{
  "agentVersion": "string",
  "collectedDataList": [
    {
      "environmentId": "string",
      "name": "string",
      "parentActivityId": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "environmentId": "string",
  "resourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "timeStamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentVersion|string \| null|false|none|none|
|collectedDataList|[[CollectedData](#schemacollecteddata)]|false|none|none|
|environmentId|string \| null|false|none|none|
|resourceId|string(uuid)|false|none|none|
|timeStamp|string(date-time)|false|none|none|

<h2 id="tocS_HotPoolSettings">HotPoolSettings</h2>
<!-- backwards compatibility -->
<a id="schemahotpoolsettings"></a>
<a id="schema_HotPoolSettings"></a>
<a id="tocShotpoolsettings"></a>
<a id="tocshotpoolsettings"></a>

```json
{
  "size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|integer(int32)|false|none|none|

<h2 id="tocS_IdentityBody">IdentityBody</h2>
<!-- backwards compatibility -->
<a id="schemaidentitybody"></a>
<a id="schema_IdentityBody"></a>
<a id="tocSidentitybody"></a>
<a id="tocsidentitybody"></a>

```json
{
  "displayName": "string",
  "id": "string",
  "userName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string \| null|false|none|none|
|id|string \| null|false|none|none|
|userName|string \| null|false|none|none|

<h2 id="tocS_IssueDelegatePlanAccessTokenBody">IssueDelegatePlanAccessTokenBody</h2>
<!-- backwards compatibility -->
<a id="schemaissuedelegateplanaccesstokenbody"></a>
<a id="schema_IssueDelegatePlanAccessTokenBody"></a>
<a id="tocSissuedelegateplanaccesstokenbody"></a>
<a id="tocsissuedelegateplanaccesstokenbody"></a>

```json
{
  "environmentIds": [
    "string"
  ],
  "expiration": "1970-01-01T00:00:00Z",
  "identity": {
    "displayName": "string",
    "id": "string",
    "username": "string"
  },
  "portNumbers": [
    0
  ],
  "scope": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentIds|[string]|false|none|none|
|expiration|string(date-time) \| null|false|none|none|
|identity|[DelegateIdentity](#schemadelegateidentity)|false|none|none|
|portNumbers|[integer(int32)]|false|none|none|
|scope|string \| null|false|none|none|

<h2 id="tocS_LocationInfoResult">LocationInfoResult</h2>
<!-- backwards compatibility -->
<a id="schemalocationinforesult"></a>
<a id="schema_LocationInfoResult"></a>
<a id="tocSlocationinforesult"></a>
<a id="tocslocationinforesult"></a>

```json
{
  "skus": [
    {
      "availableSettings": {
        "sku": [
          "string"
        ]
      },
      "displayName": "string",
      "name": "string",
      "os": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|skus|[[SkuInfoResult](#schemaskuinforesult)]|false|none|none|

<h2 id="tocS_LocationsResult">LocationsResult</h2>
<!-- backwards compatibility -->
<a id="schemalocationsresult"></a>
<a id="schema_LocationsResult"></a>
<a id="tocSlocationsresult"></a>
<a id="tocslocationsresult"></a>

```json
{
  "available": [
    "101 (EastAsia)"
  ],
  "current": "101 (EastAsia)",
  "hostnames": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|[[AzureLocation](#schemaazurelocation)]|false|none|none|
|current|[AzureLocation](#schemaazurelocation)|false|none|none|
|hostnames|object \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|available|101 (EastAsia)|
|available|102 (SouthEastAsia)|
|available|201 (AustraliaCentral)|
|available|202 (AustraliaCentral2)|
|available|203 (AustraliaEast)|
|available|205 (AustraliaSouthEast)|
|available|301 (BrazilSouth)|
|available|401 (CanadaCentral)|
|available|402 (CanadaEast)|
|available|501 (NorthEurope)|
|available|502 (WestEurope)|
|available|601 (FranceCentral)|
|available|602 (FranceSouth)|
|available|701 (CentralIndia)|
|available|702 (SouthIndia)|
|available|703 (WestIndia)|
|available|801 (JapanEast)|
|available|802 (JapanWest)|
|available|901 (KoreaCentral)|
|available|902 (KoreaSouth)|
|available|1001 (SouthAfricaNorth)|
|available|1002 (SouthAfricaWest)|
|available|1201 (UaeCentral)|
|available|1202 (UaeNorth)|
|available|1401 (UkSouth)|
|available|1402 (UkWest)|
|available|1501 (CentralUs)|
|available|1502 (EastUs)|
|available|1503 (EastUs2)|
|available|1504 (NorthCentralUs)|
|available|1505 (SouthCentralUs)|
|available|1506 (WestCentralUs)|
|available|1507 (WestUs)|
|available|1508 (WestUs2)|
|available|1509 (WestUs3)|
|available|1601 (CentralUsEuap)|
|available|1602 (EastUs2Euap)|
|available|1701 (SwitzerlandNorth)|
|available|1702 (SwitzerlandWest)|
|available|1801 (GermanyNorth)|
|available|1802 (GermanyWestCentral)|
|available|1901 (NorwayWest)|
|available|1902 (NorwayEast)|
|current|101 (EastAsia)|
|current|102 (SouthEastAsia)|
|current|201 (AustraliaCentral)|
|current|202 (AustraliaCentral2)|
|current|203 (AustraliaEast)|
|current|205 (AustraliaSouthEast)|
|current|301 (BrazilSouth)|
|current|401 (CanadaCentral)|
|current|402 (CanadaEast)|
|current|501 (NorthEurope)|
|current|502 (WestEurope)|
|current|601 (FranceCentral)|
|current|602 (FranceSouth)|
|current|701 (CentralIndia)|
|current|702 (SouthIndia)|
|current|703 (WestIndia)|
|current|801 (JapanEast)|
|current|802 (JapanWest)|
|current|901 (KoreaCentral)|
|current|902 (KoreaSouth)|
|current|1001 (SouthAfricaNorth)|
|current|1002 (SouthAfricaWest)|
|current|1201 (UaeCentral)|
|current|1202 (UaeNorth)|
|current|1401 (UkSouth)|
|current|1402 (UkWest)|
|current|1501 (CentralUs)|
|current|1502 (EastUs)|
|current|1503 (EastUs2)|
|current|1504 (NorthCentralUs)|
|current|1505 (SouthCentralUs)|
|current|1506 (WestCentralUs)|
|current|1507 (WestUs)|
|current|1508 (WestUs2)|
|current|1509 (WestUs3)|
|current|1601 (CentralUsEuap)|
|current|1602 (EastUs2Euap)|
|current|1701 (SwitzerlandNorth)|
|current|1702 (SwitzerlandWest)|
|current|1801 (GermanyNorth)|
|current|1802 (GermanyWestCentral)|
|current|1901 (NorwayWest)|
|current|1902 (NorwayEast)|

<h2 id="tocS_MessageCodes">MessageCodes</h2>
<!-- backwards compatibility -->
<a id="schemamessagecodes"></a>
<a id="schema_MessageCodes"></a>
<a id="tocSmessagecodes"></a>
<a id="tocsmessagecodes"></a>

```json
"0 (Unknown)"
```

<h2 id="tocS_NetmonCorrelationDataBody">NetmonCorrelationDataBody</h2>
<!-- backwards compatibility -->
<a id="schemanetmoncorrelationdatabody"></a>
<a id="schema_NetmonCorrelationDataBody"></a>
<a id="tocSnetmoncorrelationdatabody"></a>
<a id="tocsnetmoncorrelationdatabody"></a>

```json
{
  "billableOwnerCreatedAt": "string",
  "billableOwnerDatabaseId": "string",
  "billableOwnerGlobalRelayId": "string",
  "billableOwnerPlan": "string",
  "ownerCreatedAt": "string",
  "ownerDatabaseId": "string",
  "ownerGlobalRelayId": "string",
  "ownerPlan": "string",
  "repositoryCreatedAt": "string",
  "repositoryDatabaseId": "string",
  "repositoryGlobalRelayId": "string",
  "repositoryPrivate": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billableOwnerCreatedAt|string \| null|false|none|none|
|billableOwnerDatabaseId|string \| null|false|none|none|
|billableOwnerGlobalRelayId|string \| null|false|none|none|
|billableOwnerPlan|string \| null|false|none|none|
|ownerCreatedAt|string \| null|false|none|none|
|ownerDatabaseId|string \| null|false|none|none|
|ownerGlobalRelayId|string \| null|false|none|none|
|ownerPlan|string \| null|false|none|none|
|repositoryCreatedAt|string \| null|false|none|none|
|repositoryDatabaseId|string \| null|false|none|none|
|repositoryGlobalRelayId|string \| null|false|none|none|
|repositoryPrivate|boolean|false|none|none|

<h2 id="tocS_NetworkSettingsResource">NetworkSettingsResource</h2>
<!-- backwards compatibility -->
<a id="schemanetworksettingsresource"></a>
<a id="schema_NetworkSettingsResource"></a>
<a id="tocSnetworksettingsresource"></a>
<a id="tocsnetworksettingsresource"></a>

```json
{
  "id": "string",
  "location": "string",
  "name": "string",
  "properties": {
    "subnetId": "string"
  },
  "provisioningState": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|location|string \| null|false|none|none|
|name|string \| null|false|none|none|
|properties|[NetworkSettingsResourceProperties](#schemanetworksettingsresourceproperties)|false|none|none|
|provisioningState|string \| null|false|none|none|
|tags|object \| null|false|none|none|
|type|string \| null|false|none|none|

<h2 id="tocS_NetworkSettingsResourceList">NetworkSettingsResourceList</h2>
<!-- backwards compatibility -->
<a id="schemanetworksettingsresourcelist"></a>
<a id="schema_NetworkSettingsResourceList"></a>
<a id="tocSnetworksettingsresourcelist"></a>
<a id="tocsnetworksettingsresourcelist"></a>

```json
{
  "value": [
    {
      "id": "string",
      "location": "string",
      "name": "string",
      "properties": {
        "subnetId": "string"
      },
      "provisioningState": "string",
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[[NetworkSettingsResource](#schemanetworksettingsresource)]|false|none|none|

<h2 id="tocS_NetworkSettingsResourceProperties">NetworkSettingsResourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemanetworksettingsresourceproperties"></a>
<a id="schema_NetworkSettingsResourceProperties"></a>
<a id="tocSnetworksettingsresourceproperties"></a>
<a id="tocsnetworksettingsresourceproperties"></a>

```json
{
  "subnetId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subnetId|string \| null|false|none|none|

<h2 id="tocS_NotificationDataBody">NotificationDataBody</h2>
<!-- backwards compatibility -->
<a id="schemanotificationdatabody"></a>
<a id="schema_NotificationDataBody"></a>
<a id="tocSnotificationdatabody"></a>
<a id="tocsnotificationdatabody"></a>

```json
{
  "details": "string",
  "displayMode": "string",
  "message": "string",
  "modal": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string \| null|false|none|none|
|displayMode|string \| null|false|none|none|
|message|string \| null|false|none|none|
|modal|boolean|false|none|none|

<h2 id="tocS_PersonalizationInfoBody">PersonalizationInfoBody</h2>
<!-- backwards compatibility -->
<a id="schemapersonalizationinfobody"></a>
<a id="schema_PersonalizationInfoBody"></a>
<a id="tocSpersonalizationinfobody"></a>
<a id="tocspersonalizationinfobody"></a>

```json
{
  "dotfilesInstallCommand": "string",
  "dotfilesRepository": "string",
  "dotfilesTargetPath": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dotfilesInstallCommand|string \| null|false|none|none|
|dotfilesRepository|string \| null|false|none|none|
|dotfilesTargetPath|string \| null|false|none|none|

<h2 id="tocS_PlanResource">PlanResource</h2>
<!-- backwards compatibility -->
<a id="schemaplanresource"></a>
<a id="schema_PlanResource"></a>
<a id="tocSplanresource"></a>
<a id="tocsplanresource"></a>

```json
{
  "id": "string",
  "identity": {
    "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "string"
  },
  "location": "string",
  "name": "string",
  "properties": {
    "defaultCodespaceSku": "string",
    "defaultEnvironmentSku": "string",
    "encryption": {
      "keySource": "string",
      "keyVaultProperties": {
        "keyName": "string",
        "keyVaultUri": "string",
        "keyVersion": "string"
      }
    },
    "userId": "string",
    "vnetProperties": {
      "subnetId": "string"
    }
  },
  "provisioningState": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|identity|[PlanResourceIdentity](#schemaplanresourceidentity)|false|none|none|
|location|string \| null|false|none|none|
|name|string \| null|false|none|none|
|properties|[PlanResourceProperties](#schemaplanresourceproperties)|false|none|none|
|provisioningState|string \| null|false|none|none|
|tags|object \| null|false|none|none|
|type|string \| null|false|none|none|

<h2 id="tocS_PlanResourceEncryptionProperties">PlanResourceEncryptionProperties</h2>
<!-- backwards compatibility -->
<a id="schemaplanresourceencryptionproperties"></a>
<a id="schema_PlanResourceEncryptionProperties"></a>
<a id="tocSplanresourceencryptionproperties"></a>
<a id="tocsplanresourceencryptionproperties"></a>

```json
{
  "keySource": "string",
  "keyVaultProperties": {
    "keyName": "string",
    "keyVaultUri": "string",
    "keyVersion": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keySource|string \| null|false|none|none|
|keyVaultProperties|[PlanResourceKeyVaultProperties](#schemaplanresourcekeyvaultproperties)|false|none|none|

<h2 id="tocS_PlanResourceHeaders">PlanResourceHeaders</h2>
<!-- backwards compatibility -->
<a id="schemaplanresourceheaders"></a>
<a id="schema_PlanResourceHeaders"></a>
<a id="tocSplanresourceheaders"></a>
<a id="tocsplanresourceheaders"></a>

```json
{
  "clientTenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "homeTenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identityPrincipalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identityUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientTenantId|string(uuid) \| null|false|none|none|
|homeTenantId|string(uuid) \| null|false|none|none|
|identityPrincipalId|string(uuid) \| null|false|none|none|
|identityUrl|string \| null|false|none|none|

<h2 id="tocS_PlanResourceIdentity">PlanResourceIdentity</h2>
<!-- backwards compatibility -->
<a id="schemaplanresourceidentity"></a>
<a id="schema_PlanResourceIdentity"></a>
<a id="tocSplanresourceidentity"></a>
<a id="tocsplanresourceidentity"></a>

```json
{
  "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|principalId|string(uuid) \| null|false|none|none|
|tenantId|string(uuid) \| null|false|none|none|
|type|string \| null|false|none|none|

<h2 id="tocS_PlanResourceKeyVaultProperties">PlanResourceKeyVaultProperties</h2>
<!-- backwards compatibility -->
<a id="schemaplanresourcekeyvaultproperties"></a>
<a id="schema_PlanResourceKeyVaultProperties"></a>
<a id="tocSplanresourcekeyvaultproperties"></a>
<a id="tocsplanresourcekeyvaultproperties"></a>

```json
{
  "keyName": "string",
  "keyVaultUri": "string",
  "keyVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyName|string \| null|false|none|none|
|keyVaultUri|string \| null|false|none|none|
|keyVersion|string \| null|false|none|none|

<h2 id="tocS_PlanResourceList">PlanResourceList</h2>
<!-- backwards compatibility -->
<a id="schemaplanresourcelist"></a>
<a id="schema_PlanResourceList"></a>
<a id="tocSplanresourcelist"></a>
<a id="tocsplanresourcelist"></a>

```json
{
  "value": [
    {
      "id": "string",
      "identity": {
        "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "type": "string"
      },
      "location": "string",
      "name": "string",
      "properties": {
        "defaultCodespaceSku": "string",
        "defaultEnvironmentSku": "string",
        "encryption": {
          "keySource": "string",
          "keyVaultProperties": {
            "keyName": "string",
            "keyVaultUri": "string",
            "keyVersion": "string"
          }
        },
        "userId": "string",
        "vnetProperties": {
          "subnetId": "string"
        }
      },
      "provisioningState": "string",
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[[PlanResource](#schemaplanresource)]|false|none|none|

<h2 id="tocS_PlanResourceProperties">PlanResourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemaplanresourceproperties"></a>
<a id="schema_PlanResourceProperties"></a>
<a id="tocSplanresourceproperties"></a>
<a id="tocsplanresourceproperties"></a>

```json
{
  "defaultCodespaceSku": "string",
  "defaultEnvironmentSku": "string",
  "encryption": {
    "keySource": "string",
    "keyVaultProperties": {
      "keyName": "string",
      "keyVaultUri": "string",
      "keyVersion": "string"
    }
  },
  "userId": "string",
  "vnetProperties": {
    "subnetId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultCodespaceSku|string \| null|false|none|none|
|defaultEnvironmentSku|string \| null|false|none|none|
|encryption|[PlanResourceEncryptionProperties](#schemaplanresourceencryptionproperties)|false|none|none|
|userId|string \| null|false|none|none|
|vnetProperties|[VnetProperties](#schemavnetproperties)|false|none|none|

<h2 id="tocS_PlanResourceUpdateBody">PlanResourceUpdateBody</h2>
<!-- backwards compatibility -->
<a id="schemaplanresourceupdatebody"></a>
<a id="schema_PlanResourceUpdateBody"></a>
<a id="tocSplanresourceupdatebody"></a>
<a id="tocsplanresourceupdatebody"></a>

```json
{
  "identity": {
    "principalId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "string"
  },
  "properties": {
    "defaultCodespaceSku": "string",
    "defaultEnvironmentSku": "string",
    "encryption": {
      "keySource": "string",
      "keyVaultProperties": {
        "keyName": "string",
        "keyVaultUri": "string",
        "keyVersion": "string"
      }
    },
    "userId": "string",
    "vnetProperties": {
      "subnetId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identity|[PlanResourceIdentity](#schemaplanresourceidentity)|false|none|none|
|properties|[PlanResourceProperties](#schemaplanresourceproperties)|false|none|none|

<h2 id="tocS_Pool">Pool</h2>
<!-- backwards compatibility -->
<a id="schemapool"></a>
<a id="schema_Pool"></a>
<a id="tocSpool"></a>
<a id="tocspool"></a>

```json
{
  "poolType": "0 (None)",
  "skuName": "string",
  "targetCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|poolType|[PrebuildMode](#schemaprebuildmode)|false|none|none|
|skuName|string \| null|false|none|none|
|targetCount|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|poolType|0 (None)|
|poolType|1 (Blob)|
|poolType|2 (CodespacePool)|
|poolType|3 (StoragePool)|
|poolType|4 (CodespaceAndStoragePool)|

<h2 id="tocS_PoolConfigRequestBody">PoolConfigRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemapoolconfigrequestbody"></a>
<a id="schema_PoolConfigRequestBody"></a>
<a id="tocSpoolconfigrequestbody"></a>
<a id="tocspoolconfigrequestbody"></a>

```json
{
  "comment": "string",
  "maxTargetCount": "string",
  "minTargetCount": "string",
  "poolCode": "string",
  "poolType": "string",
  "region": "string",
  "targetCount": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string \| null|false|none|none|
|maxTargetCount|string \| null|false|none|none|
|minTargetCount|string \| null|false|none|none|
|poolCode|string \| null|false|none|none|
|poolType|string \| null|false|none|none|
|region|string \| null|false|none|none|
|targetCount|string \| null|false|none|none|

<h2 id="tocS_PoolDefinitionInput">PoolDefinitionInput</h2>
<!-- backwards compatibility -->
<a id="schemapooldefinitioninput"></a>
<a id="schema_PoolDefinitionInput"></a>
<a id="tocSpooldefinitioninput"></a>
<a id="tocspooldefinitioninput"></a>

```json
{
  "dimensions": {
    "property1": "string",
    "property2": "string"
  },
  "isEnabled": true,
  "location": "101 (EastAsia)",
  "logicalSkus": [
    "string"
  ],
  "subtype": "0 (Default)",
  "targetCount": 0,
  "type": "1 (ComputeVM)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensions|object|true|none|none|
|isEnabled|boolean|true|none|none|
|location|[AzureLocation](#schemaazurelocation)|true|none|none|
|logicalSkus|[string]|false|none|none|
|subtype|[ResourceSubtype](#schemaresourcesubtype)|true|none|none|
|targetCount|integer(int32)|true|none|none|
|type|[ResourceType](#schemaresourcetype)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|location|101 (EastAsia)|
|location|102 (SouthEastAsia)|
|location|201 (AustraliaCentral)|
|location|202 (AustraliaCentral2)|
|location|203 (AustraliaEast)|
|location|205 (AustraliaSouthEast)|
|location|301 (BrazilSouth)|
|location|401 (CanadaCentral)|
|location|402 (CanadaEast)|
|location|501 (NorthEurope)|
|location|502 (WestEurope)|
|location|601 (FranceCentral)|
|location|602 (FranceSouth)|
|location|701 (CentralIndia)|
|location|702 (SouthIndia)|
|location|703 (WestIndia)|
|location|801 (JapanEast)|
|location|802 (JapanWest)|
|location|901 (KoreaCentral)|
|location|902 (KoreaSouth)|
|location|1001 (SouthAfricaNorth)|
|location|1002 (SouthAfricaWest)|
|location|1201 (UaeCentral)|
|location|1202 (UaeNorth)|
|location|1401 (UkSouth)|
|location|1402 (UkWest)|
|location|1501 (CentralUs)|
|location|1502 (EastUs)|
|location|1503 (EastUs2)|
|location|1504 (NorthCentralUs)|
|location|1505 (SouthCentralUs)|
|location|1506 (WestCentralUs)|
|location|1507 (WestUs)|
|location|1508 (WestUs2)|
|location|1509 (WestUs3)|
|location|1601 (CentralUsEuap)|
|location|1602 (EastUs2Euap)|
|location|1701 (SwitzerlandNorth)|
|location|1702 (SwitzerlandWest)|
|location|1801 (GermanyNorth)|
|location|1802 (GermanyWestCentral)|
|location|1901 (NorwayWest)|
|location|1902 (NorwayEast)|
|subtype|0 (Default)|
|subtype|2 (ShrunkBlob)|
|subtype|3 (FullBlob)|
|subtype|4 (UserParametersBlob)|
|subtype|5 (PrebuildHash)|
|subtype|6 (VnetInjected)|
|type|1 (ComputeVM)|
|type|2 (StorageFileShare)|
|type|3 (StorageArchive)|
|type|4 (KeyVault)|
|type|5 (OSDisk)|
|type|6 (NetworkInterface)|
|type|7 (InputQueue)|
|type|8 (Snapshot)|
|type|9 (PoolQueue)|
|type|10 (VirtualNetwork)|
|type|11 (NetworkSecurityGroup)|
|type|12 (LiveShareWorkspace)|
|type|13 (BasisTunnel)|
|type|14 (StorageBlockBlob)|
|type|15 (DataDisk)|
|type|16 (PortForwardingWorkspace)|

<h2 id="tocS_PoolGroupResult">PoolGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemapoolgroupresult"></a>
<a id="schema_PoolGroupResult"></a>
<a id="tocSpoolgroupresult"></a>
<a id="tocspoolgroupresult"></a>

```json
{
  "displayName": "string",
  "region": "101 (EastAsia)",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string \| null|false|none|none|
|region|[AzureLocation](#schemaazurelocation)|false|none|none|
|tags|object \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|region|101 (EastAsia)|
|region|102 (SouthEastAsia)|
|region|201 (AustraliaCentral)|
|region|202 (AustraliaCentral2)|
|region|203 (AustraliaEast)|
|region|205 (AustraliaSouthEast)|
|region|301 (BrazilSouth)|
|region|401 (CanadaCentral)|
|region|402 (CanadaEast)|
|region|501 (NorthEurope)|
|region|502 (WestEurope)|
|region|601 (FranceCentral)|
|region|602 (FranceSouth)|
|region|701 (CentralIndia)|
|region|702 (SouthIndia)|
|region|703 (WestIndia)|
|region|801 (JapanEast)|
|region|802 (JapanWest)|
|region|901 (KoreaCentral)|
|region|902 (KoreaSouth)|
|region|1001 (SouthAfricaNorth)|
|region|1002 (SouthAfricaWest)|
|region|1201 (UaeCentral)|
|region|1202 (UaeNorth)|
|region|1401 (UkSouth)|
|region|1402 (UkWest)|
|region|1501 (CentralUs)|
|region|1502 (EastUs)|
|region|1503 (EastUs2)|
|region|1504 (NorthCentralUs)|
|region|1505 (SouthCentralUs)|
|region|1506 (WestCentralUs)|
|region|1507 (WestUs)|
|region|1508 (WestUs2)|
|region|1509 (WestUs3)|
|region|1601 (CentralUsEuap)|
|region|1602 (EastUs2Euap)|
|region|1701 (SwitzerlandNorth)|
|region|1702 (SwitzerlandWest)|
|region|1801 (GermanyNorth)|
|region|1802 (GermanyWestCentral)|
|region|1901 (NorwayWest)|
|region|1902 (NorwayEast)|

<h2 id="tocS_PoolResult">PoolResult</h2>
<!-- backwards compatibility -->
<a id="schemapoolresult"></a>
<a id="schema_PoolResult"></a>
<a id="tocSpoolresult"></a>
<a id="tocspoolresult"></a>

```json
{
  "domainUserCredentials": {
    "domain": "string",
    "organizationalUnit": "string",
    "passwordSecretIdentifier": "string",
    "userName": "string"
  },
  "hotPoolSettings": {
    "size": 0
  },
  "poolGroupName": "string",
  "provisioningStatus": {
    "completedSteps": 0,
    "currentStepDescription": "string",
    "isReady": true,
    "operationStartedTimeUtc": "string",
    "totalSteps": 0
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userGroupName": "string",
  "vmSpecs": {
    "diskType": "0 (StandardHDD)",
    "imageResourceId": "string",
    "size": "string",
    "subnetResourceId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainUserCredentials|[DomainUserCredentials](#schemadomainusercredentials)|false|none|none|
|hotPoolSettings|[HotPoolSettings](#schemahotpoolsettings)|false|none|none|
|poolGroupName|string|true|none|none|
|provisioningStatus|[ProvisioningStatusResult](#schemaprovisioningstatusresult)|false|none|none|
|tags|object \| null|false|none|none|
|userGroupName|string \| null|false|none|none|
|vmSpecs|[VMSpecs](#schemavmspecs)|true|none|none|

<h2 id="tocS_PoolSettingsBody">PoolSettingsBody</h2>
<!-- backwards compatibility -->
<a id="schemapoolsettingsbody"></a>
<a id="schema_PoolSettingsBody"></a>
<a id="tocSpoolsettingsbody"></a>
<a id="tocspoolsettingsbody"></a>

```json
{
  "branchName": "string",
  "devContainerPath": "string",
  "pools": [
    {
      "poolType": "0 (None)",
      "skuName": "string",
      "targetCount": 0
    }
  ],
  "repoId": "string",
  "storageType": "0 (V1)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchName|string \| null|false|none|none|
|devContainerPath|string \| null|false|none|none|
|pools|[[Pool](#schemapool)]|false|none|none|
|repoId|string \| null|false|none|none|
|storageType|[StorageType](#schemastoragetype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|storageType|0 (V1)|
|storageType|1 (V2)|

<h2 id="tocS_PoolStatusResponseBody">PoolStatusResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemapoolstatusresponsebody"></a>
<a id="schema_PoolStatusResponseBody"></a>
<a id="tocSpoolstatusresponsebody"></a>
<a id="tocspoolstatusresponsebody"></a>

```json
{
  "allWithLatestVersion": true,
  "isEnvironmentPool": true,
  "location": "string",
  "poolCode": "string",
  "readyUnassignedCount": 0,
  "readyUnassignedLatestVersionCount": 0,
  "readyUnassignedNotLatestVersionAndIdleCount": 0,
  "readyUnassignedNotLatestVersionCount": 0,
  "resourceType": "string",
  "sku": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allWithLatestVersion|boolean|false|none|none|
|isEnvironmentPool|boolean|false|none|none|
|location|string \| null|false|none|none|
|poolCode|string \| null|false|none|none|
|readyUnassignedCount|integer(int32)|false|none|none|
|readyUnassignedLatestVersionCount|integer(int32)|false|none|none|
|readyUnassignedNotLatestVersionAndIdleCount|integer(int32)|false|none|none|
|readyUnassignedNotLatestVersionCount|integer(int32)|false|none|none|
|resourceType|string \| null|false|none|none|
|sku|string \| null|false|none|none|

<h2 id="tocS_PrebuildEnvironmentOptions">PrebuildEnvironmentOptions</h2>
<!-- backwards compatibility -->
<a id="schemaprebuildenvironmentoptions"></a>
<a id="schema_PrebuildEnvironmentOptions"></a>
<a id="tocSprebuildenvironmentoptions"></a>
<a id="tocsprebuildenvironmentoptions"></a>

```json
{
  "correlationId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|correlationId|string \| null|false|none|none|

<h2 id="tocS_PrebuildMode">PrebuildMode</h2>
<!-- backwards compatibility -->
<a id="schemaprebuildmode"></a>
<a id="schema_PrebuildMode"></a>
<a id="tocSprebuildmode"></a>
<a id="tocsprebuildmode"></a>

```json
"0 (None)"
```

<h2 id="tocS_PrebuildReadinessResult">PrebuildReadinessResult</h2>
<!-- backwards compatibility -->
<a id="schemaprebuildreadinessresult"></a>
<a id="schema_PrebuildReadinessResult"></a>
<a id="tocSprebuildreadinessresult"></a>
<a id="tocsprebuildreadinessresult"></a>

```json
{
  "branchName": "string",
  "devContainerPath": "string",
  "location": "101 (EastAsia)",
  "poolSkus": [
    "string"
  ],
  "prebuildHash": "string",
  "repoId": "string",
  "supportedSkus": [
    "string"
  ],
  "templateSkus": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchName|string \| null|false|none|none|
|devContainerPath|string \| null|false|none|none|
|location|[AzureLocation](#schemaazurelocation)|false|none|none|
|poolSkus|[string]|false|none|none|
|prebuildHash|string \| null|false|none|none|
|repoId|string \| null|false|none|none|
|supportedSkus|[string]|false|none|none|
|templateSkus|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|location|101 (EastAsia)|
|location|102 (SouthEastAsia)|
|location|201 (AustraliaCentral)|
|location|202 (AustraliaCentral2)|
|location|203 (AustraliaEast)|
|location|205 (AustraliaSouthEast)|
|location|301 (BrazilSouth)|
|location|401 (CanadaCentral)|
|location|402 (CanadaEast)|
|location|501 (NorthEurope)|
|location|502 (WestEurope)|
|location|601 (FranceCentral)|
|location|602 (FranceSouth)|
|location|701 (CentralIndia)|
|location|702 (SouthIndia)|
|location|703 (WestIndia)|
|location|801 (JapanEast)|
|location|802 (JapanWest)|
|location|901 (KoreaCentral)|
|location|902 (KoreaSouth)|
|location|1001 (SouthAfricaNorth)|
|location|1002 (SouthAfricaWest)|
|location|1201 (UaeCentral)|
|location|1202 (UaeNorth)|
|location|1401 (UkSouth)|
|location|1402 (UkWest)|
|location|1501 (CentralUs)|
|location|1502 (EastUs)|
|location|1503 (EastUs2)|
|location|1504 (NorthCentralUs)|
|location|1505 (SouthCentralUs)|
|location|1506 (WestCentralUs)|
|location|1507 (WestUs)|
|location|1508 (WestUs2)|
|location|1509 (WestUs3)|
|location|1601 (CentralUsEuap)|
|location|1602 (EastUs2Euap)|
|location|1701 (SwitzerlandNorth)|
|location|1702 (SwitzerlandWest)|
|location|1801 (GermanyNorth)|
|location|1802 (GermanyWestCentral)|
|location|1901 (NorwayWest)|
|location|1902 (NorwayEast)|

<h2 id="tocS_PrebuildTemplateInfo">PrebuildTemplateInfo</h2>
<!-- backwards compatibility -->
<a id="schemaprebuildtemplateinfo"></a>
<a id="schema_PrebuildTemplateInfo"></a>
<a id="tocSprebuildtemplateinfo"></a>
<a id="tocsprebuildtemplateinfo"></a>

```json
{
  "container": {
    "id": "string",
    "imageName": "string",
    "schemaVersion": "string"
  },
  "prebuildConfigurationId": "string",
  "templateSizeInGB": 0,
  "totalTimeSavingsInSeconds": "string",
  "workFlowRunId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|container|[ContainerInfo](#schemacontainerinfo)|false|none|none|
|prebuildConfigurationId|string \| null|false|none|none|
|templateSizeInGB|number(double)|false|none|none|
|totalTimeSavingsInSeconds|string \| null|false|none|none|
|workFlowRunId|string \| null|false|none|none|

<h2 id="tocS_PrebuildTemplateInfoResult">PrebuildTemplateInfoResult</h2>
<!-- backwards compatibility -->
<a id="schemaprebuildtemplateinforesult"></a>
<a id="schema_PrebuildTemplateInfoResult"></a>
<a id="tocSprebuildtemplateinforesult"></a>
<a id="tocsprebuildtemplateinforesult"></a>

```json
{
  "branchName": "string",
  "commitId": "string",
  "id": "string",
  "isPrebuild": true,
  "lastUsedTime": "1970-01-01T00:00:00Z",
  "logicalSkus": [
    "string"
  ],
  "prebuildHash": "string",
  "repoId": 0,
  "templateStatus": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchName|string \| null|false|none|none|
|commitId|string \| null|false|none|none|
|id|string \| null|false|none|none|
|isPrebuild|boolean \| null|false|none|none|
|lastUsedTime|string(date-time) \| null|false|none|none|
|logicalSkus|[string]|false|none|none|
|prebuildHash|string \| null|false|none|none|
|repoId|integer(int64)|false|none|none|
|templateStatus|string \| null|false|none|none|

<h2 id="tocS_PrivacyEnum">PrivacyEnum</h2>
<!-- backwards compatibility -->
<a id="schemaprivacyenum"></a>
<a id="schema_PrivacyEnum"></a>
<a id="tocSprivacyenum"></a>
<a id="tocsprivacyenum"></a>

```json
"0 (Private)"
```

<h2 id="tocS_ProblemDetails">ProblemDetails</h2>
<!-- backwards compatibility -->
<a id="schemaproblemdetails"></a>
<a id="schema_ProblemDetails"></a>
<a id="tocSproblemdetails"></a>
<a id="tocsproblemdetails"></a>

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string \| null|false|none|none|
|instance|string \| null|false|none|none|
|status|integer(int32) \| null|false|none|none|
|title|string \| null|false|none|none|
|type|string \| null|false|none|none|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_ProfileSpecifier">ProfileSpecifier</h2>
<!-- backwards compatibility -->
<a id="schemaprofilespecifier"></a>
<a id="schema_ProfileSpecifier"></a>
<a id="tocSprofilespecifier"></a>
<a id="tocsprofilespecifier"></a>

```json
{
  "oid": "string",
  "provider": "string",
  "tid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oid|string \| null|false|none|none|
|provider|string \| null|false|none|none|
|tid|string \| null|false|none|none|

<h2 id="tocS_ProvisioningStatusResult">ProvisioningStatusResult</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningstatusresult"></a>
<a id="schema_ProvisioningStatusResult"></a>
<a id="tocSprovisioningstatusresult"></a>
<a id="tocsprovisioningstatusresult"></a>

```json
{
  "completedSteps": 0,
  "currentStepDescription": "string",
  "isReady": true,
  "operationStartedTimeUtc": "string",
  "totalSteps": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedSteps|integer(int32) \| null|false|none|none|
|currentStepDescription|string \| null|false|none|none|
|isReady|boolean|false|none|none|
|operationStartedTimeUtc|string \| null|false|none|none|
|totalSteps|integer(int32) \| null|false|none|none|

<h2 id="tocS_RPSubscriptionNotification">RPSubscriptionNotification</h2>
<!-- backwards compatibility -->
<a id="schemarpsubscriptionnotification"></a>
<a id="schema_RPSubscriptionNotification"></a>
<a id="tocSrpsubscriptionnotification"></a>
<a id="tocsrpsubscriptionnotification"></a>

```json
{
  "properties": {
    "accountOwner": {
      "email": "string",
      "puid": "string"
    },
    "additionalProperties": {
      "billingProperties": {
        "billingType": "string",
        "channelType": "string",
        "paymentType": "string",
        "tier": "string",
        "workloadType": "string"
      },
      "resourceProviderProperties": "string"
    },
    "locationPlacementId": "string",
    "managedByTenants": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "quotaId": "string",
    "registeredFeatures": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "registrationDate": "1970-01-01T00:00:00Z",
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|[RPSubscriptionProperties](#schemarpsubscriptionproperties)|false|none|none|
|registrationDate|string(date-time)|false|none|none|
|state|string \| null|false|none|none|

<h2 id="tocS_RPSubscriptionProperties">RPSubscriptionProperties</h2>
<!-- backwards compatibility -->
<a id="schemarpsubscriptionproperties"></a>
<a id="schema_RPSubscriptionProperties"></a>
<a id="tocSrpsubscriptionproperties"></a>
<a id="tocsrpsubscriptionproperties"></a>

```json
{
  "accountOwner": {
    "email": "string",
    "puid": "string"
  },
  "additionalProperties": {
    "billingProperties": {
      "billingType": "string",
      "channelType": "string",
      "paymentType": "string",
      "tier": "string",
      "workloadType": "string"
    },
    "resourceProviderProperties": "string"
  },
  "locationPlacementId": "string",
  "managedByTenants": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "quotaId": "string",
  "registeredFeatures": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountOwner|[SubscriptionAccountOwner](#schemasubscriptionaccountowner)|false|none|none|
|additionalProperties|[SubscriptionAdditionalProperties](#schemasubscriptionadditionalproperties)|false|none|none|
|locationPlacementId|string \| null|false|none|none|
|managedByTenants|[[StringStringKeyValuePair](#schemastringstringkeyvaluepair)]|false|none|none|
|quotaId|string \| null|false|none|none|
|registeredFeatures|[[StringStringKeyValuePair](#schemastringstringkeyvaluepair)]|false|none|none|
|tenantId|string(uuid)|false|none|none|

<h2 id="tocS_RefreshProfileTelemetryPropertiesRequest">RefreshProfileTelemetryPropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemarefreshprofiletelemetrypropertiesrequest"></a>
<a id="schema_RefreshProfileTelemetryPropertiesRequest"></a>
<a id="tocSrefreshprofiletelemetrypropertiesrequest"></a>
<a id="tocsrefreshprofiletelemetrypropertiesrequest"></a>

```json
{
  "partner": "string",
  "tenantId": "string",
  "userIds": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partner|string \| null|false|none|none|
|tenantId|string \| null|false|none|none|
|userIds|string \| null|false|none|none|

<h2 id="tocS_RefreshProfileTelemetryPropertiesResponse">RefreshProfileTelemetryPropertiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemarefreshprofiletelemetrypropertiesresponse"></a>
<a id="schema_RefreshProfileTelemetryPropertiesResponse"></a>
<a id="tocSrefreshprofiletelemetrypropertiesresponse"></a>
<a id="tocsrefreshprofiletelemetrypropertiesresponse"></a>

```json
{
  "failed": [
    {
      "oid": "string",
      "provider": "string",
      "tid": "string"
    }
  ],
  "succeeded": [
    {
      "oid": "string",
      "provider": "string",
      "tid": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failed|[[ProfileSpecifier](#schemaprofilespecifier)]|false|none|none|
|succeeded|[[ProfileSpecifier](#schemaprofilespecifier)]|false|none|none|

<h2 id="tocS_ReplayBillRequestBody">ReplayBillRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemareplaybillrequestbody"></a>
<a id="schema_ReplayBillRequestBody"></a>
<a id="tocSreplaybillrequestbody"></a>
<a id="tocsreplaybillrequestbody"></a>

```json
{
  "endTime": "1970-01-01T00:00:00Z",
  "startTime": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(date-time)|false|none|none|
|startTime|string(date-time)|false|none|none|

<h2 id="tocS_RepositoryInfoBody">RepositoryInfoBody</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryinfobody"></a>
<a id="schema_RepositoryInfoBody"></a>
<a id="tocSrepositoryinfobody"></a>
<a id="tocsrepositoryinfobody"></a>

```json
{
  "branchName": "string",
  "commitId": "string",
  "createType": "string",
  "diskUsage": "string",
  "name": "string",
  "owner": "string",
  "prebuildHash": "string",
  "repoId": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchName|string \| null|false|none|none|
|commitId|string \| null|false|none|none|
|createType|string \| null|false|none|none|
|diskUsage|string \| null|false|none|none|
|name|string \| null|false|none|none|
|owner|string \| null|false|none|none|
|prebuildHash|string \| null|false|none|none|
|repoId|integer(int64)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_ResourceSubtype">ResourceSubtype</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesubtype"></a>
<a id="schema_ResourceSubtype"></a>
<a id="tocSresourcesubtype"></a>
<a id="tocsresourcesubtype"></a>

```json
"0 (Default)"
```

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"1 (ComputeVM)"
```

<h2 id="tocS_ResourceUsageDetail">ResourceUsageDetail</h2>
<!-- backwards compatibility -->
<a id="schemaresourceusagedetail"></a>
<a id="schema_ResourceUsageDetail"></a>
<a id="tocSresourceusagedetail"></a>
<a id="tocsresourceusagedetail"></a>

```json
{
  "compute": [
    {
      "sku": "string",
      "usage": 0
    }
  ],
  "storage": [
    {
      "size": 0,
      "sizeInKB": 0,
      "sku": "string",
      "usage": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compute|[[ComputeUsageDetail](#schemacomputeusagedetail)]|false|none|none|
|storage|[[StorageUsageDetail](#schemastorageusagedetail)]|false|none|none|

<h2 id="tocS_RuntimeConstraintsBody">RuntimeConstraintsBody</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeconstraintsbody"></a>
<a id="schema_RuntimeConstraintsBody"></a>
<a id="tocSruntimeconstraintsbody"></a>
<a id="tocsruntimeconstraintsbody"></a>

```json
{
  "allowedPortPrivacySettings": [
    "0 (Private)"
  ],
  "imageAllowList": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedPortPrivacySettings|[[PrivacyEnum](#schemaprivacyenum)]|false|none|none|
|imageAllowList|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|allowedPortPrivacySettings|0 (Private)|
|allowedPortPrivacySettings|1 (Public)|
|allowedPortPrivacySettings|2 (Org)|

<h2 id="tocS_ScopedCreateSecretBody">ScopedCreateSecretBody</h2>
<!-- backwards compatibility -->
<a id="schemascopedcreatesecretbody"></a>
<a id="schema_ScopedCreateSecretBody"></a>
<a id="tocSscopedcreatesecretbody"></a>
<a id="tocsscopedcreatesecretbody"></a>

```json
{
  "filters": [
    {
      "type": "1 (GitRepo)",
      "value": "string"
    }
  ],
  "notes": "string",
  "scope": "1 (Plan)",
  "secretName": "string",
  "type": "1 (EnvironmentVariable)",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[[SecretFilterBody](#schemasecretfilterbody)]|false|none|none|
|notes|string \| null|false|none|none|
|scope|[SecretScope](#schemasecretscope)|false|none|none|
|secretName|string \| null|false|none|none|
|type|[SecretType](#schemasecrettype)|false|none|none|
|value|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|1 (Plan)|
|scope|2 (User)|
|type|1 (EnvironmentVariable)|
|type|2 (ContainerRegistry)|

<h2 id="tocS_ScopedSecretResultBody">ScopedSecretResultBody</h2>
<!-- backwards compatibility -->
<a id="schemascopedsecretresultbody"></a>
<a id="schema_ScopedSecretResultBody"></a>
<a id="tocSscopedsecretresultbody"></a>
<a id="tocsscopedsecretresultbody"></a>

```json
{
  "filters": [
    {
      "type": "1 (GitRepo)",
      "value": "string"
    }
  ],
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "lastModified": "1970-01-01T00:00:00Z",
  "notes": "string",
  "scope": "1 (Plan)",
  "secretName": "string",
  "type": "1 (EnvironmentVariable)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[[SecretFilterBody](#schemasecretfilterbody)]|false|none|none|
|id|string(uuid)|false|none|none|
|lastModified|string(date-time)|false|none|none|
|notes|string \| null|false|none|none|
|scope|[SecretScope](#schemasecretscope)|false|none|none|
|secretName|string \| null|false|none|none|
|type|[SecretType](#schemasecrettype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|1 (Plan)|
|scope|2 (User)|
|type|1 (EnvironmentVariable)|
|type|2 (ContainerRegistry)|

<h2 id="tocS_ScopedUpdateSecretBody">ScopedUpdateSecretBody</h2>
<!-- backwards compatibility -->
<a id="schemascopedupdatesecretbody"></a>
<a id="schema_ScopedUpdateSecretBody"></a>
<a id="tocSscopedupdatesecretbody"></a>
<a id="tocsscopedupdatesecretbody"></a>

```json
{
  "filters": [
    {
      "type": "1 (GitRepo)",
      "value": "string"
    }
  ],
  "notes": "string",
  "scope": "1 (Plan)",
  "secretName": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[[SecretFilterBody](#schemasecretfilterbody)]|false|none|none|
|notes|string \| null|false|none|none|
|scope|[SecretScope](#schemasecretscope)|false|none|none|
|secretName|string \| null|false|none|none|
|value|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|1 (Plan)|
|scope|2 (User)|

<h2 id="tocS_SecretDataBody">SecretDataBody</h2>
<!-- backwards compatibility -->
<a id="schemasecretdatabody"></a>
<a id="schema_SecretDataBody"></a>
<a id="tocSsecretdatabody"></a>
<a id="tocssecretdatabody"></a>

```json
{
  "name": "string",
  "type": "1 (EnvironmentVariable)",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|type|[SecretType](#schemasecrettype)|false|none|none|
|value|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|1 (EnvironmentVariable)|
|type|2 (ContainerRegistry)|

<h2 id="tocS_SecretFilterBody">SecretFilterBody</h2>
<!-- backwards compatibility -->
<a id="schemasecretfilterbody"></a>
<a id="schema_SecretFilterBody"></a>
<a id="tocSsecretfilterbody"></a>
<a id="tocssecretfilterbody"></a>

```json
{
  "type": "1 (GitRepo)",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[SecretFilterType](#schemasecretfiltertype)|false|none|none|
|value|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|1 (GitRepo)|
|type|2 (CodespaceName)|

<h2 id="tocS_SecretFilterType">SecretFilterType</h2>
<!-- backwards compatibility -->
<a id="schemasecretfiltertype"></a>
<a id="schema_SecretFilterType"></a>
<a id="tocSsecretfiltertype"></a>
<a id="tocssecretfiltertype"></a>

```json
"1 (GitRepo)"
```

<h2 id="tocS_SecretScope">SecretScope</h2>
<!-- backwards compatibility -->
<a id="schemasecretscope"></a>
<a id="schema_SecretScope"></a>
<a id="tocSsecretscope"></a>
<a id="tocssecretscope"></a>

```json
"1 (Plan)"
```

<h2 id="tocS_SecretType">SecretType</h2>
<!-- backwards compatibility -->
<a id="schemasecrettype"></a>
<a id="schema_SecretType"></a>
<a id="tocSsecrettype"></a>
<a id="tocssecrettype"></a>

```json
"1 (EnvironmentVariable)"
```

<h2 id="tocS_SeedInfoBody">SeedInfoBody</h2>
<!-- backwards compatibility -->
<a id="schemaseedinfobody"></a>
<a id="schema_SeedInfoBody"></a>
<a id="tocSseedinfobody"></a>
<a id="tocsseedinfobody"></a>

```json
{
  "cloneUrl": "string",
  "gitConfig": {
    "userEmail": "string",
    "userName": "string"
  },
  "recurseClone": true,
  "repository": {
    "branchName": "string",
    "commitId": "string",
    "createType": "string",
    "diskUsage": "string",
    "name": "string",
    "owner": "string",
    "prebuildHash": "string",
    "repoId": 0,
    "url": "string"
  },
  "seedMoniker": "string",
  "seedType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloneUrl|string \| null|false|none|none|
|gitConfig|[GitConfigOptionsBody](#schemagitconfigoptionsbody)|false|none|none|
|recurseClone|boolean|false|none|none|
|repository|[RepositoryInfoBody](#schemarepositoryinfobody)|false|none|none|
|seedMoniker|string \| null|false|none|none|
|seedType|string \| null|false|none|none|

<h2 id="tocS_Sku">Sku</h2>
<!-- backwards compatibility -->
<a id="schemasku"></a>
<a id="schema_Sku"></a>
<a id="tocSsku"></a>
<a id="tocssku"></a>

```json
{
  "name": "string",
  "tier": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|tier|string \| null|false|none|none|

<h2 id="tocS_SkuInfoResult">SkuInfoResult</h2>
<!-- backwards compatibility -->
<a id="schemaskuinforesult"></a>
<a id="schema_SkuInfoResult"></a>
<a id="tocSskuinforesult"></a>
<a id="tocsskuinforesult"></a>

```json
{
  "availableSettings": {
    "sku": [
      "string"
    ]
  },
  "displayName": "string",
  "name": "string",
  "os": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableSettings|[AvailableSettingsResult](#schemaavailablesettingsresult)|false|none|none|
|displayName|string \| null|false|none|none|
|name|string \| null|false|none|none|
|os|string \| null|false|none|none|

<h2 id="tocS_StorageType">StorageType</h2>
<!-- backwards compatibility -->
<a id="schemastoragetype"></a>
<a id="schema_StorageType"></a>
<a id="tocSstoragetype"></a>
<a id="tocsstoragetype"></a>

```json
"0 (V1)"
```

<h2 id="tocS_StorageUsageDetail">StorageUsageDetail</h2>
<!-- backwards compatibility -->
<a id="schemastorageusagedetail"></a>
<a id="schema_StorageUsageDetail"></a>
<a id="tocSstorageusagedetail"></a>
<a id="tocsstorageusagedetail"></a>

```json
{
  "size": 0,
  "sizeInKB": 0,
  "sku": "string",
  "usage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|integer(int32)|false|none|none|
|sizeInKB|integer(int64)|false|none|none|
|sku|string \| null|false|none|none|
|usage|number(double)|false|none|none|

<h2 id="tocS_StringStringKeyValuePair">StringStringKeyValuePair</h2>
<!-- backwards compatibility -->
<a id="schemastringstringkeyvaluepair"></a>
<a id="schema_StringStringKeyValuePair"></a>
<a id="tocSstringstringkeyvaluepair"></a>
<a id="tocsstringstringkeyvaluepair"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string \| null|false|none|none|
|value|string \| null|false|none|none|

<h2 id="tocS_SubscriptionAccountOwner">SubscriptionAccountOwner</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionaccountowner"></a>
<a id="schema_SubscriptionAccountOwner"></a>
<a id="tocSsubscriptionaccountowner"></a>
<a id="tocssubscriptionaccountowner"></a>

```json
{
  "email": "string",
  "puid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string \| null|false|none|none|
|puid|string \| null|false|none|none|

<h2 id="tocS_SubscriptionAdditionalProperties">SubscriptionAdditionalProperties</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionadditionalproperties"></a>
<a id="schema_SubscriptionAdditionalProperties"></a>
<a id="tocSsubscriptionadditionalproperties"></a>
<a id="tocssubscriptionadditionalproperties"></a>

```json
{
  "billingProperties": {
    "billingType": "string",
    "channelType": "string",
    "paymentType": "string",
    "tier": "string",
    "workloadType": "string"
  },
  "resourceProviderProperties": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingProperties|[BillingProperties](#schemabillingproperties)|false|none|none|
|resourceProviderProperties|string \| null|false|none|none|

<h2 id="tocS_SubscriptionData">SubscriptionData</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptiondata"></a>
<a id="schema_SubscriptionData"></a>
<a id="tocSsubscriptiondata"></a>
<a id="tocssubscriptiondata"></a>

```json
{
  "computeQuota": 0,
  "computeUsage": 0,
  "subscriptionId": "string",
  "subscriptionState": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computeQuota|integer(int32)|false|none|none|
|computeUsage|integer(int32)|false|none|none|
|subscriptionId|string \| null|false|none|none|
|subscriptionState|string \| null|false|none|none|

<h2 id="tocS_SystemConfigurationResponse">SystemConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemasystemconfigurationresponse"></a>
<a id="schema_SystemConfigurationResponse"></a>
<a id="tocSsystemconfigurationresponse"></a>
<a id="tocssystemconfigurationresponse"></a>

```json
{
  "comment": "string",
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string \| null|false|none|none|
|key|string \| null|false|none|none|
|value|string \| null|false|none|none|

<h2 id="tocS_TelemetryData">TelemetryData</h2>
<!-- backwards compatibility -->
<a id="schematelemetrydata"></a>
<a id="schema_TelemetryData"></a>
<a id="tocStelemetrydata"></a>
<a id="tocstelemetrydata"></a>

```json
{
  "level": "string",
  "message": "string",
  "optionalValues": {
    "property1": "string",
    "property2": "string"
  },
  "time": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|level|string \| null|false|none|none|
|message|string \| null|false|none|none|
|optionalValues|object \| null|false|none|none|
|time|string \| null|false|none|none|

<h2 id="tocS_TenantInfoResult">TenantInfoResult</h2>
<!-- backwards compatibility -->
<a id="schematenantinforesult"></a>
<a id="schema_TenantInfoResult"></a>
<a id="tocStenantinforesult"></a>
<a id="tocstenantinforesult"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|

<h2 id="tocS_TunnelPortInfoResult">TunnelPortInfoResult</h2>
<!-- backwards compatibility -->
<a id="schematunnelportinforesult"></a>
<a id="schema_TunnelPortInfoResult"></a>
<a id="tocStunnelportinforesult"></a>
<a id="tocstunnelportinforesult"></a>

```json
{
  "portVisibility": "string",
  "tunnelToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portVisibility|string \| null|false|none|none|
|tunnelToken|string \| null|false|none|none|

<h2 id="tocS_TunnelProperties">TunnelProperties</h2>
<!-- backwards compatibility -->
<a id="schematunnelproperties"></a>
<a id="schema_TunnelProperties"></a>
<a id="tocStunnelproperties"></a>
<a id="tocstunnelproperties"></a>

```json
{
  "clusterId": "string",
  "connectAccessToken": "string",
  "domain": "string",
  "managePortsAccessToken": "string",
  "serviceUri": "string",
  "tunnelId": "string",
  "tunnelName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterId|string \| null|false|none|none|
|connectAccessToken|string \| null|false|none|none|
|domain|string \| null|false|none|none|
|managePortsAccessToken|string \| null|false|none|none|
|serviceUri|string \| null|false|none|none|
|tunnelId|string \| null|false|none|none|
|tunnelName|string \| null|false|none|none|

<h2 id="tocS_TunnelType">TunnelType</h2>
<!-- backwards compatibility -->
<a id="schematunneltype"></a>
<a id="schema_TunnelType"></a>
<a id="tocStunneltype"></a>
<a id="tocstunneltype"></a>

```json
"0 (Basis)"
```

<h2 id="tocS_UnderInvestigationResponseBody">UnderInvestigationResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemaunderinvestigationresponsebody"></a>
<a id="schema_UnderInvestigationResponseBody"></a>
<a id="tocSunderinvestigationresponsebody"></a>
<a id="tocsunderinvestigationresponsebody"></a>

```json
{
  "investigationStarted": "1970-01-01T00:00:00Z",
  "resourceId": "string",
  "underInvestigation": true,
  "updated": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|investigationStarted|string(date-time) \| null|false|none|none|
|resourceId|string \| null|false|none|none|
|underInvestigation|boolean|false|none|none|
|updated|boolean|false|none|none|

<h2 id="tocS_UnfilteredCloudEnvironmentResult">UnfilteredCloudEnvironmentResult</h2>
<!-- backwards compatibility -->
<a id="schemaunfilteredcloudenvironmentresult"></a>
<a id="schema_UnfilteredCloudEnvironmentResult"></a>
<a id="tocSunfilteredcloudenvironmentresult"></a>
<a id="tocsunfilteredcloudenvironmentresult"></a>

```json
{
  "accessToken": "string",
  "active": "1970-01-01T00:00:00Z",
  "autoShutdownDelayMinutes": 0,
  "billableOwnerType": "0 (User)",
  "clientUsage": {
    "sessionId": "string",
    "usageData": {
      "property1": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      },
      "property2": {
        "activeMinutes": 0,
        "lastActivity": "1970-01-01T00:00:00Z"
      }
    }
  },
  "connection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "container": {
    "id": "string",
    "schemaVersion": "string"
  },
  "containerImage": "string",
  "createFromPrebuild": true,
  "created": "1970-01-01T00:00:00Z",
  "displayStorageUtilizationInKb": true,
  "exportedBlobUrl": "string",
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "features": {
    "property1": "string",
    "property2": "string"
  },
  "friendlyName": "string",
  "gitStatus": {
    "ahead": 0,
    "behind": 0,
    "branch": "string",
    "commit": "string",
    "hasUncommittedChanges": true,
    "hasUnpushedChanges": true,
    "noGitRepo": true
  },
  "id": "string",
  "lastStateUpdateReason": "string",
  "lastUsed": "1970-01-01T00:00:00Z",
  "location": "string",
  "organizationId": "string",
  "ownerId": "string",
  "planId": "string",
  "platform": "string",
  "portForwardingConnection": {
    "connectionServiceUri": "string",
    "connectionSessionId": "string",
    "connectionSessionPath": "string",
    "hostPublicKeys": [
      "string"
    ],
    "relayEndpoint": "string",
    "relaySasToken": "string",
    "sessionToken": "string",
    "tunnelProperties": {
      "clusterId": "string",
      "connectAccessToken": "string",
      "domain": "string",
      "managePortsAccessToken": "string",
      "serviceUri": "string",
      "tunnelId": "string",
      "tunnelName": "string"
    }
  },
  "prebuildType": "string",
  "recentFolders": [
    "string"
  ],
  "resourceTier": "0 (None)",
  "runtimeConstraints": {
    "allowedPortPrivacySettings": [
      "0 (Private)"
    ],
    "imageAllowList": [
      "string"
    ]
  },
  "seed": {
    "cloneUrl": "string",
    "gitConfig": {
      "userEmail": "string",
      "userName": "string"
    },
    "recurseClone": true,
    "repository": {
      "branchName": "string",
      "commitId": "string",
      "createType": "string",
      "diskUsage": "string",
      "name": "string",
      "owner": "string",
      "prebuildHash": "string",
      "repoId": 0,
      "url": "string"
    },
    "seedMoniker": "string",
    "seedType": "string"
  },
  "skuDisplayName": "string",
  "skuName": "string",
  "state": "string",
  "storageUtilizationInKb": 0,
  "subscriptionData": {
    "computeQuota": 0,
    "computeUsage": 0,
    "subscriptionId": "string",
    "subscriptionState": "string"
  },
  "templateStatus": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|string \| null|false|none|none|
|active|string(date-time)|false|none|none|
|autoShutdownDelayMinutes|integer(int32)|false|none|none|
|billableOwnerType|[BillableOwnerType](#schemabillableownertype)|false|none|none|
|clientUsage|[ClientUsageSession](#schemaclientusagesession)|false|none|none|
|connection|[ConnectionInfoBody](#schemaconnectioninfobody)|false|none|none|
|container|[ContainerInfoBody](#schemacontainerinfobody)|false|none|none|
|containerImage|string \| null|false|none|none|
|createFromPrebuild|boolean|false|none|none|
|created|string(date-time)|false|none|none|
|displayStorageUtilizationInKb|boolean|false|none|none|
|exportedBlobUrl|string \| null|false|none|none|
|failoverDetails|[FailoverDetails](#schemafailoverdetails)|false|none|none|
|features|object \| null|false|none|none|
|friendlyName|string \| null|false|none|none|
|gitStatus|[GitStatus](#schemagitstatus)|false|none|none|
|id|string \| null|false|none|none|
|lastStateUpdateReason|string \| null|false|none|none|
|lastUsed|string(date-time) \| null|false|none|none|
|location|string \| null|false|none|none|
|organizationId|string \| null|false|none|none|
|ownerId|string \| null|false|none|none|
|planId|string \| null|false|none|none|
|platform|string \| null|false|none|none|
|portForwardingConnection|[ConnectionInfoBody](#schemaconnectioninfobody)|false|none|none|
|prebuildType|string \| null|false|none|none|
|recentFolders|[string]|false|none|none|
|resourceTier|[ConsumerType](#schemaconsumertype)|false|none|none|
|runtimeConstraints|[RuntimeConstraintsBody](#schemaruntimeconstraintsbody)|false|none|none|
|seed|[SeedInfoBody](#schemaseedinfobody)|false|none|none|
|skuDisplayName|string \| null|false|none|none|
|skuName|string \| null|false|none|none|
|state|string \| null|false|none|none|
|storageUtilizationInKb|integer(int64) \| null|false|none|none|
|subscriptionData|[SubscriptionData](#schemasubscriptiondata)|false|none|none|
|templateStatus|string \| null|false|none|none|
|type|string \| null|false|none|none|
|updated|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|billableOwnerType|0 (User)|
|billableOwnerType|1 (Organization)|
|resourceTier|0 (None)|
|resourceTier|1 (System)|
|resourceTier|2 (Trusted)|
|resourceTier|4 (Neutral)|
|resourceTier|8 (Untrusted)|
|resourceTier|9 (Test)|

<h2 id="tocS_UpdateCloudEnvironmentBody">UpdateCloudEnvironmentBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecloudenvironmentbody"></a>
<a id="schema_UpdateCloudEnvironmentBody"></a>
<a id="tocSupdatecloudenvironmentbody"></a>
<a id="tocsupdatecloudenvironmentbody"></a>

```json
{
  "autoShutdownDelayMinutes": 0,
  "failoverDetails": {
    "failoverEnabled": true,
    "failoverRegion": "101 (EastAsia)"
  },
  "friendlyName": "string",
  "planAccessToken": "string",
  "planId": "string",
  "skuName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoShutdownDelayMinutes|integer(int32) \| null|false|none|none|
|failoverDetails|[FailoverDetails](#schemafailoverdetails)|false|none|none|
|friendlyName|string \| null|false|none|none|
|planAccessToken|string \| null|false|none|none|
|planId|string \| null|false|none|none|
|skuName|string \| null|false|none|none|

<h2 id="tocS_UpdatePoolGroupBody">UpdatePoolGroupBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepoolgroupbody"></a>
<a id="schema_UpdatePoolGroupBody"></a>
<a id="tocSupdatepoolgroupbody"></a>
<a id="tocsupdatepoolgroupbody"></a>

```json
{
  "displayName": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|true|none|none|
|tags|object \| null|false|none|none|

<h2 id="tocS_UpdatePrebuildTemplateBody">UpdatePrebuildTemplateBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprebuildtemplatebody"></a>
<a id="schema_UpdatePrebuildTemplateBody"></a>
<a id="tocSupdateprebuildtemplatebody"></a>
<a id="tocsupdateprebuildtemplatebody"></a>

```json
{
  "isSuccess": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isSuccess|boolean|true|none|none|

<h2 id="tocS_UpdatePrebuildTemplateVersionsBody">UpdatePrebuildTemplateVersionsBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprebuildtemplateversionsbody"></a>
<a id="schema_UpdatePrebuildTemplateVersionsBody"></a>
<a id="tocSupdateprebuildtemplateversionsbody"></a>
<a id="tocsupdateprebuildtemplateversionsbody"></a>

```json
{
  "branchName": "string",
  "devContainerPath": "string",
  "maxPrebuildTemplateVersions": 0,
  "repoId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchName|string|true|none|none|
|devContainerPath|string \| null|false|none|none|
|maxPrebuildTemplateVersions|integer(int32)|true|none|none|
|repoId|integer(int64)|true|none|none|

<h2 id="tocS_UpdateSystemConfigurationBody">UpdateSystemConfigurationBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystemconfigurationbody"></a>
<a id="schema_UpdateSystemConfigurationBody"></a>
<a id="tocSupdatesystemconfigurationbody"></a>
<a id="tocsupdatesystemconfigurationbody"></a>

```json
{
  "comment": "string",
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string \| null|false|none|none|
|key|string \| null|false|none|none|
|value|string \| null|false|none|none|

<h2 id="tocS_UpdateUserSecretsRequestBody">UpdateUserSecretsRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateusersecretsrequestbody"></a>
<a id="schema_UpdateUserSecretsRequestBody"></a>
<a id="tocSupdateusersecretsrequestbody"></a>
<a id="tocsupdateusersecretsrequestbody"></a>

```json
{
  "secrets": [
    {
      "name": "string",
      "type": "1 (EnvironmentVariable)",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secrets|[[SecretDataBody](#schemasecretdatabody)]|false|none|none|

<h2 id="tocS_UserIdentity">UserIdentity</h2>
<!-- backwards compatibility -->
<a id="schemauseridentity"></a>
<a id="schema_UserIdentity"></a>
<a id="tocSuseridentity"></a>
<a id="tocsuseridentity"></a>

```json
{
  "userPrincipalName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userPrincipalName|string|true|none|none|

<h2 id="tocS_VMConnectionInfo">VMConnectionInfo</h2>
<!-- backwards compatibility -->
<a id="schemavmconnectioninfo"></a>
<a id="schema_VMConnectionInfo"></a>
<a id="tocSvmconnectioninfo"></a>
<a id="tocsvmconnectioninfo"></a>

```json
{
  "connectionType": "0 (LiveShare)",
  "liveShareWorkspaceId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionType|[VMConnectionType](#schemavmconnectiontype)|false|none|none|
|liveShareWorkspaceId|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|connectionType|0 (LiveShare)|
|connectionType|1 (WVD)|

<h2 id="tocS_VMConnectionType">VMConnectionType</h2>
<!-- backwards compatibility -->
<a id="schemavmconnectiontype"></a>
<a id="schema_VMConnectionType"></a>
<a id="tocSvmconnectiontype"></a>
<a id="tocsvmconnectiontype"></a>

```json
"0 (LiveShare)"
```

<h2 id="tocS_VMDiskType">VMDiskType</h2>
<!-- backwards compatibility -->
<a id="schemavmdisktype"></a>
<a id="schema_VMDiskType"></a>
<a id="tocSvmdisktype"></a>
<a id="tocsvmdisktype"></a>

```json
"0 (StandardHDD)"
```

<h2 id="tocS_VMResult">VMResult</h2>
<!-- backwards compatibility -->
<a id="schemavmresult"></a>
<a id="schema_VMResult"></a>
<a id="tocSvmresult"></a>
<a id="tocsvmresult"></a>

```json
{
  "connection": {
    "connectionType": "0 (LiveShare)",
    "liveShareWorkspaceId": "string"
  },
  "provisioningStatus": {
    "completedSteps": 0,
    "currentStepDescription": "string",
    "isReady": true,
    "operationStartedTimeUtc": "string",
    "totalSteps": 0
  },
  "status": "0 (Provisioning)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection|[VMConnectionInfo](#schemavmconnectioninfo)|false|none|none|
|provisioningStatus|[ProvisioningStatusResult](#schemaprovisioningstatusresult)|false|none|none|
|status|[VMStatus](#schemavmstatus)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0 (Provisioning)|
|status|1 (Ready)|
|status|2 (Stopped)|
|status|3 (Deleted)|

<h2 id="tocS_VMSpecs">VMSpecs</h2>
<!-- backwards compatibility -->
<a id="schemavmspecs"></a>
<a id="schema_VMSpecs"></a>
<a id="tocSvmspecs"></a>
<a id="tocsvmspecs"></a>

```json
{
  "diskType": "0 (StandardHDD)",
  "imageResourceId": "string",
  "size": "string",
  "subnetResourceId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskType|[VMDiskType](#schemavmdisktype)|true|none|none|
|imageResourceId|string|true|none|none|
|size|string|true|none|none|
|subnetResourceId|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|diskType|0 (StandardHDD)|
|diskType|1 (StandardSSD)|
|diskType|2 (PremiumSSD)|

<h2 id="tocS_VMStatus">VMStatus</h2>
<!-- backwards compatibility -->
<a id="schemavmstatus"></a>
<a id="schema_VMStatus"></a>
<a id="tocSvmstatus"></a>
<a id="tocsvmstatus"></a>

```json
"0 (Provisioning)"
```

<h2 id="tocS_VmLogsUploadInfo">VmLogsUploadInfo</h2>
<!-- backwards compatibility -->
<a id="schemavmlogsuploadinfo"></a>
<a id="schema_VmLogsUploadInfo"></a>
<a id="tocSvmlogsuploadinfo"></a>
<a id="tocsvmlogsuploadinfo"></a>

```json
{
  "containerName": "string",
  "message": "string",
  "pathInContainer": "string",
  "storageUri": "string",
  "vmResourceId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerName|string \| null|false|none|none|
|message|string \| null|false|none|none|
|pathInContainer|string \| null|false|none|none|
|storageUri|string \| null|false|none|none|
|vmResourceId|string \| null|false|none|none|

<h2 id="tocS_VnetProperties">VnetProperties</h2>
<!-- backwards compatibility -->
<a id="schemavnetproperties"></a>
<a id="schema_VnetProperties"></a>
<a id="tocSvnetproperties"></a>
<a id="tocsvnetproperties"></a>

```json
{
  "subnetId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subnetId|string \| null|false|none|none|

<h2 id="tocS_VsoPlanInfo">VsoPlanInfo</h2>
<!-- backwards compatibility -->
<a id="schemavsoplaninfo"></a>
<a id="schema_VsoPlanInfo"></a>
<a id="tocSvsoplaninfo"></a>
<a id="tocsvsoplaninfo"></a>

```json
{
  "location": "101 (EastAsia)",
  "name": "string",
  "providerNamespace": "string",
  "resourceGroup": "string",
  "resourceId": "string",
  "subscription": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[AzureLocation](#schemaazurelocation)|false|none|none|
|name|string \| null|false|none|none|
|providerNamespace|string \| null|false|none|none|
|resourceGroup|string \| null|false|none|none|
|resourceId|string \| null|false|read-only|none|
|subscription|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|location|101 (EastAsia)|
|location|102 (SouthEastAsia)|
|location|201 (AustraliaCentral)|
|location|202 (AustraliaCentral2)|
|location|203 (AustraliaEast)|
|location|205 (AustraliaSouthEast)|
|location|301 (BrazilSouth)|
|location|401 (CanadaCentral)|
|location|402 (CanadaEast)|
|location|501 (NorthEurope)|
|location|502 (WestEurope)|
|location|601 (FranceCentral)|
|location|602 (FranceSouth)|
|location|701 (CentralIndia)|
|location|702 (SouthIndia)|
|location|703 (WestIndia)|
|location|801 (JapanEast)|
|location|802 (JapanWest)|
|location|901 (KoreaCentral)|
|location|902 (KoreaSouth)|
|location|1001 (SouthAfricaNorth)|
|location|1002 (SouthAfricaWest)|
|location|1201 (UaeCentral)|
|location|1202 (UaeNorth)|
|location|1401 (UkSouth)|
|location|1402 (UkWest)|
|location|1501 (CentralUs)|
|location|1502 (EastUs)|
|location|1503 (EastUs2)|
|location|1504 (NorthCentralUs)|
|location|1505 (SouthCentralUs)|
|location|1506 (WestCentralUs)|
|location|1507 (WestUs)|
|location|1508 (WestUs2)|
|location|1509 (WestUs3)|
|location|1601 (CentralUsEuap)|
|location|1602 (EastUs2Euap)|
|location|1701 (SwitzerlandNorth)|
|location|1702 (SwitzerlandWest)|
|location|1801 (GermanyNorth)|
|location|1802 (GermanyWestCentral)|
|location|1901 (NorwayWest)|
|location|1902 (NorwayEast)|
