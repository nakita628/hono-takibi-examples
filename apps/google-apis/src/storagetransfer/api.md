<h1 id="storage-transfer-api">Storage Transfer API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Transfers data from external data sources to a Google Cloud Storage bucket or between Google Cloud Storage buckets.

Base URLs:

* <a href="https://storagetransfer.googleapis.com/">https://storagetransfer.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/storage-transfer/docs">External documentation</a>

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

<h1 id="storage-transfer-api-googleserviceaccounts">googleServiceAccounts</h1>

## storagetransfer.googleServiceAccounts.get

<a id="opIdstoragetransfer.googleServiceAccounts.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/googleServiceAccounts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/googleServiceAccounts/{projectId}`

Returns the Google service account that is used by Storage Transfer Service to access buckets in the project where transfers run or in other projects. Each Google service account is associated with one Google Cloud project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to Storage Transfer Service. This service account is created and owned by Storage Transfer Service and can only be used by Storage Transfer Service.

<h3 id="storagetransfergoogleserviceaccountsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud project that the Google service account is associated with.|
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
  "accountEmail": "string",
  "subjectId": "string"
}
```

<h3 id="storagetransfergoogleserviceaccountsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleServiceAccount](#schemagoogleserviceaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="storage-transfer-api-projects">projects</h1>

## storagetransfer.projects.agentPools.list

<a id="opIdstoragetransfer.projects.agentPools.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/agentPools \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{projectId}/agentPools`

Lists agent pools.

<h3 id="storagetransferprojectsagentpoolslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud project that owns the job.|
|filter|query|string|false|An optional list of query parameters specified as JSON text in the form of: `{"agentPoolNames":["agentpool1","agentpool2",...]}` Since `agentPoolNames` support multiple values, its values must be specified with array notation. When the filter is either empty or not provided, the list returns all agent pools for the project.|
|pageSize|query|integer|false|The list page size. The max allowed value is `256`.|
|pageToken|query|string|false|The list page token.|
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
  "agentPools": [
    {
      "bandwidthLimit": {
        "limitMbps": "string"
      },
      "displayName": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="storagetransferprojectsagentpoolslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAgentPoolsResponse](#schemalistagentpoolsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## storagetransfer.projects.agentPools.create

<a id="opIdstoragetransfer.projects.agentPools.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/agentPools \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bandwidthLimit": {
      "limitMbps": "string"
    },
    "displayName": "string",
    "name": "string"
  }'
```

`POST /v1/projects/{projectId}/agentPools`

Creates an agent pool resource.

> Body parameter

```json
{
  "bandwidthLimit": {
    "limitMbps": "string"
  },
  "displayName": "string",
  "name": "string"
}
```

<h3 id="storagetransferprojectsagentpoolscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud project that owns the agent pool.|
|agentPoolId|query|string|false|Required. The ID of the agent pool to create. The `agent_pool_id` must meet the following requirements: * Length of 128 characters or less. * Not start with the string `goog`. * Start with a lowercase ASCII character, followed by: * Zero or more: lowercase Latin alphabet characters, numerals, hyphens (`-`), periods (`.`), underscores (`_`), or tildes (`~`). * One or more numerals or lowercase ASCII characters. As expressed by the regular expression: `^(?!goog)[a-z]([a-z0-9-._~]*[a-z0-9])?$`.|
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
|body|body|[AgentPool](#schemaagentpool)|false|none|
|» bandwidthLimit|body|[BandwidthLimit](#schemabandwidthlimit)|false|Specifies the bandwidth limit details. If this field is unspecified, the default value is set as 'No Limit'.|
|» displayName|body|string|false|Specifies the client-specified AgentPool description.|
|» name|body|string|false|Required. Specifies a unique string that identifies the agent pool. Format: `projects/{project_id}/agentPools/{agent_pool_id}`|

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
  "bandwidthLimit": {
    "limitMbps": "string"
  },
  "displayName": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="storagetransferprojectsagentpoolscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AgentPool](#schemaagentpool)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## storagetransfer.projects.agentPools.delete

<a id="opIdstoragetransfer.projects.agentPools.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes an agent pool.

<h3 id="storagetransferprojectsagentpoolsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the agent pool to delete.|
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

<h3 id="storagetransferprojectsagentpoolsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## storagetransfer.projects.agentPools.patch

<a id="opIdstoragetransfer.projects.agentPools.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bandwidthLimit": {
      "limitMbps": "string"
    },
    "displayName": "string",
    "name": "string"
  }'
```

`PATCH /v1/{name}`

Updates an existing agent pool resource.

> Body parameter

```json
{
  "bandwidthLimit": {
    "limitMbps": "string"
  },
  "displayName": "string",
  "name": "string"
}
```

<h3 id="storagetransferprojectsagentpoolspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Specifies a unique string that identifies the agent pool. Format: `projects/{project_id}/agentPools/{agent_pool_id}`|
|updateMask|query|string|false|The [field mask] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf) of the fields in `agentPool` to update in this request. The following `agentPool` fields can be updated: * display_name * bandwidth_limit|
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
|body|body|[AgentPool](#schemaagentpool)|false|none|
|» bandwidthLimit|body|[BandwidthLimit](#schemabandwidthlimit)|false|Specifies the bandwidth limit details. If this field is unspecified, the default value is set as 'No Limit'.|
|» displayName|body|string|false|Specifies the client-specified AgentPool description.|
|» name|body|string|false|Required. Specifies a unique string that identifies the agent pool. Format: `projects/{project_id}/agentPools/{agent_pool_id}`|

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
  "bandwidthLimit": {
    "limitMbps": "string"
  },
  "displayName": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="storagetransferprojectsagentpoolspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AgentPool](#schemaagentpool)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="storage-transfer-api-transferjobs">transferJobs</h1>

## storagetransfer.transferJobs.list

<a id="opIdstoragetransfer.transferJobs.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/v1/transferJobs?filter=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/transferJobs`

Lists transfer jobs.

<h3 id="storagetransfertransferjobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|true|Required. A list of query parameters specified as JSON text in the form of: `{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobStatuses":["status1","status2",...]}` Since `jobNames` and `jobStatuses` support multiple values, their values must be specified with array notation. `projectId` is required. `jobNames` and `jobStatuses` are optional. The valid values for `jobStatuses` are case-insensitive: ENABLED, DISABLED, and DELETED.|
|pageSize|query|integer|false|The list page size. The max allowed value is 256.|
|pageToken|query|string|false|The list page token.|
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
  "transferJobs": [
    {
      "creationTime": "string",
      "deletionTime": "string",
      "description": "string",
      "eventStream": {
        "eventStreamExpirationTime": "string",
        "eventStreamStartTime": "string",
        "name": "string"
      },
      "lastModificationTime": "string",
      "latestOperationName": "string",
      "loggingConfig": {
        "enableOnpremGcsTransferLogs": true,
        "logActionStates": [
          "LOGGABLE_ACTION_STATE_UNSPECIFIED"
        ],
        "logActions": [
          "LOGGABLE_ACTION_UNSPECIFIED"
        ]
      },
      "name": "string",
      "notificationConfig": {
        "eventTypes": [
          "EVENT_TYPE_UNSPECIFIED"
        ],
        "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
        "pubsubTopic": "string"
      },
      "projectId": "string",
      "schedule": {
        "endTimeOfDay": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "repeatInterval": "string",
        "scheduleEndDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "scheduleStartDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "startTimeOfDay": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      },
      "status": "STATUS_UNSPECIFIED",
      "transferSpec": {
        "awsS3CompatibleDataSource": {
          "bucketName": "string",
          "endpoint": "string",
          "path": "string",
          "region": "string",
          "s3Metadata": {
            "authMethod": "AUTH_METHOD_UNSPECIFIED",
            "listApi": "LIST_API_UNSPECIFIED",
            "protocol": "NETWORK_PROTOCOL_UNSPECIFIED",
            "requestModel": "REQUEST_MODEL_UNSPECIFIED"
          }
        },
        "awsS3DataSource": {
          "awsAccessKey": {
            "accessKeyId": "string",
            "secretAccessKey": "string"
          },
          "bucketName": "string",
          "path": "string",
          "roleArn": "string"
        },
        "azureBlobStorageDataSource": {
          "azureCredentials": {
            "sasToken": "string"
          },
          "container": "string",
          "path": "string",
          "storageAccount": "string"
        },
        "gcsDataSink": {
          "bucketName": "string",
          "path": "string"
        },
        "gcsDataSource": {
          "bucketName": "string",
          "path": "string"
        },
        "gcsIntermediateDataLocation": {
          "bucketName": "string",
          "path": "string"
        },
        "httpDataSource": {
          "listUrl": "string"
        },
        "objectConditions": {
          "excludePrefixes": [
            "string"
          ],
          "includePrefixes": [
            "string"
          ],
          "lastModifiedBefore": "string",
          "lastModifiedSince": "string",
          "maxTimeElapsedSinceLastModification": "string",
          "minTimeElapsedSinceLastModification": "string"
        },
        "posixDataSink": {
          "rootDirectory": "string"
        },
        "posixDataSource": {
          "rootDirectory": "string"
        },
        "sinkAgentPoolName": "string",
        "sourceAgentPoolName": "string",
        "transferManifest": {
          "location": "string"
        },
        "transferOptions": {
          "deleteObjectsFromSourceAfterTransfer": true,
          "deleteObjectsUniqueInSink": true,
          "metadataOptions": {
            "acl": "ACL_UNSPECIFIED",
            "gid": "GID_UNSPECIFIED",
            "kmsKey": "KMS_KEY_UNSPECIFIED",
            "mode": "MODE_UNSPECIFIED",
            "storageClass": "STORAGE_CLASS_UNSPECIFIED",
            "symlink": "SYMLINK_UNSPECIFIED",
            "temporaryHold": "TEMPORARY_HOLD_UNSPECIFIED",
            "timeCreated": "TIME_CREATED_UNSPECIFIED",
            "uid": "UID_UNSPECIFIED"
          },
          "overwriteObjectsAlreadyExistingInSink": true,
          "overwriteWhen": "OVERWRITE_WHEN_UNSPECIFIED"
        }
      }
    }
  ]
}
```

<h3 id="storagetransfertransferjobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTransferJobsResponse](#schemalisttransferjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## storagetransfer.transferJobs.create

<a id="opIdstoragetransfer.transferJobs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/transferJobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "eventStream": {
      "eventStreamExpirationTime": "string",
      "eventStreamStartTime": "string",
      "name": "string"
    },
    "latestOperationName": "string",
    "loggingConfig": {
      "enableOnpremGcsTransferLogs": true,
      "logActionStates": [
        "LOGGABLE_ACTION_STATE_UNSPECIFIED"
      ],
      "logActions": [
        "LOGGABLE_ACTION_UNSPECIFIED"
      ]
    },
    "name": "string",
    "notificationConfig": {
      "eventTypes": [
        "EVENT_TYPE_UNSPECIFIED"
      ],
      "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
      "pubsubTopic": "string"
    },
    "projectId": "string",
    "schedule": {
      "endTimeOfDay": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "repeatInterval": "string",
      "scheduleEndDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "scheduleStartDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startTimeOfDay": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    },
    "status": "STATUS_UNSPECIFIED",
    "transferSpec": {
      "awsS3CompatibleDataSource": {
        "bucketName": "string",
        "endpoint": "string",
        "path": "string",
        "region": "string",
        "s3Metadata": {
          "authMethod": "AUTH_METHOD_UNSPECIFIED",
          "listApi": "LIST_API_UNSPECIFIED",
          "protocol": "NETWORK_PROTOCOL_UNSPECIFIED",
          "requestModel": "REQUEST_MODEL_UNSPECIFIED"
        }
      },
      "awsS3DataSource": {
        "awsAccessKey": {
          "accessKeyId": "string",
          "secretAccessKey": "string"
        },
        "bucketName": "string",
        "path": "string",
        "roleArn": "string"
      },
      "azureBlobStorageDataSource": {
        "azureCredentials": {
          "sasToken": "string"
        },
        "container": "string",
        "path": "string",
        "storageAccount": "string"
      },
      "gcsDataSink": {
        "bucketName": "string",
        "path": "string"
      },
      "gcsDataSource": {
        "bucketName": "string",
        "path": "string"
      },
      "gcsIntermediateDataLocation": {
        "bucketName": "string",
        "path": "string"
      },
      "httpDataSource": {
        "listUrl": "string"
      },
      "objectConditions": {
        "excludePrefixes": [
          "string"
        ],
        "includePrefixes": [
          "string"
        ],
        "lastModifiedBefore": "string",
        "lastModifiedSince": "string",
        "maxTimeElapsedSinceLastModification": "string",
        "minTimeElapsedSinceLastModification": "string"
      },
      "posixDataSink": {
        "rootDirectory": "string"
      },
      "posixDataSource": {
        "rootDirectory": "string"
      },
      "sinkAgentPoolName": "string",
      "sourceAgentPoolName": "string",
      "transferManifest": {
        "location": "string"
      },
      "transferOptions": {
        "deleteObjectsFromSourceAfterTransfer": true,
        "deleteObjectsUniqueInSink": true,
        "metadataOptions": {
          "acl": "ACL_UNSPECIFIED",
          "gid": "GID_UNSPECIFIED",
          "kmsKey": "KMS_KEY_UNSPECIFIED",
          "mode": "MODE_UNSPECIFIED",
          "storageClass": "STORAGE_CLASS_UNSPECIFIED",
          "symlink": "SYMLINK_UNSPECIFIED",
          "temporaryHold": "TEMPORARY_HOLD_UNSPECIFIED",
          "timeCreated": "TIME_CREATED_UNSPECIFIED",
          "uid": "UID_UNSPECIFIED"
        },
        "overwriteObjectsAlreadyExistingInSink": true,
        "overwriteWhen": "OVERWRITE_WHEN_UNSPECIFIED"
      }
    }
  }'
```

`POST /v1/transferJobs`

Creates a transfer job that runs periodically.

> Body parameter

```json
{
  "description": "string",
  "eventStream": {
    "eventStreamExpirationTime": "string",
    "eventStreamStartTime": "string",
    "name": "string"
  },
  "latestOperationName": "string",
  "loggingConfig": {
    "enableOnpremGcsTransferLogs": true,
    "logActionStates": [
      "LOGGABLE_ACTION_STATE_UNSPECIFIED"
    ],
    "logActions": [
      "LOGGABLE_ACTION_UNSPECIFIED"
    ]
  },
  "name": "string",
  "notificationConfig": {
    "eventTypes": [
      "EVENT_TYPE_UNSPECIFIED"
    ],
    "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
    "pubsubTopic": "string"
  },
  "projectId": "string",
  "schedule": {
    "endTimeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "repeatInterval": "string",
    "scheduleEndDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "scheduleStartDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "startTimeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    }
  },
  "status": "STATUS_UNSPECIFIED",
  "transferSpec": {
    "awsS3CompatibleDataSource": {
      "bucketName": "string",
      "endpoint": "string",
      "path": "string",
      "region": "string",
      "s3Metadata": {
        "authMethod": "AUTH_METHOD_UNSPECIFIED",
        "listApi": "LIST_API_UNSPECIFIED",
        "protocol": "NETWORK_PROTOCOL_UNSPECIFIED",
        "requestModel": "REQUEST_MODEL_UNSPECIFIED"
      }
    },
    "awsS3DataSource": {
      "awsAccessKey": {
        "accessKeyId": "string",
        "secretAccessKey": "string"
      },
      "bucketName": "string",
      "path": "string",
      "roleArn": "string"
    },
    "azureBlobStorageDataSource": {
      "azureCredentials": {
        "sasToken": "string"
      },
      "container": "string",
      "path": "string",
      "storageAccount": "string"
    },
    "gcsDataSink": {
      "bucketName": "string",
      "path": "string"
    },
    "gcsDataSource": {
      "bucketName": "string",
      "path": "string"
    },
    "gcsIntermediateDataLocation": {
      "bucketName": "string",
      "path": "string"
    },
    "httpDataSource": {
      "listUrl": "string"
    },
    "objectConditions": {
      "excludePrefixes": [
        "string"
      ],
      "includePrefixes": [
        "string"
      ],
      "lastModifiedBefore": "string",
      "lastModifiedSince": "string",
      "maxTimeElapsedSinceLastModification": "string",
      "minTimeElapsedSinceLastModification": "string"
    },
    "posixDataSink": {
      "rootDirectory": "string"
    },
    "posixDataSource": {
      "rootDirectory": "string"
    },
    "sinkAgentPoolName": "string",
    "sourceAgentPoolName": "string",
    "transferManifest": {
      "location": "string"
    },
    "transferOptions": {
      "deleteObjectsFromSourceAfterTransfer": true,
      "deleteObjectsUniqueInSink": true,
      "metadataOptions": {
        "acl": "ACL_UNSPECIFIED",
        "gid": "GID_UNSPECIFIED",
        "kmsKey": "KMS_KEY_UNSPECIFIED",
        "mode": "MODE_UNSPECIFIED",
        "storageClass": "STORAGE_CLASS_UNSPECIFIED",
        "symlink": "SYMLINK_UNSPECIFIED",
        "temporaryHold": "TEMPORARY_HOLD_UNSPECIFIED",
        "timeCreated": "TIME_CREATED_UNSPECIFIED",
        "uid": "UID_UNSPECIFIED"
      },
      "overwriteObjectsAlreadyExistingInSink": true,
      "overwriteWhen": "OVERWRITE_WHEN_UNSPECIFIED"
    }
  }
}
```

<h3 id="storagetransfertransferjobscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[TransferJob](#schematransferjob)|false|none|
|» description|body|string|false|A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded.|
|» eventStream|body|[EventStream](#schemaeventstream)|false|Specifies the event stream for the transfer job for event-driven transfers. When EventStream is specified, the Schedule fields are ignored.|
|» latestOperationName|body|string|false|The name of the most recently started TransferOperation of this JobConfig. Present if a TransferOperation has been created for this JobConfig.|
|» loggingConfig|body|[LoggingConfig](#schemaloggingconfig)|false|Logging configuration.|
|» name|body|string|false|A unique name (within the transfer project) assigned when the job is created. If this field is empty in a CreateTransferJobRequest, Storage Transfer Service assigns a unique name. Otherwise, the specified name is used as the unique name for this job. If the specified name is in use by a job, the creation request fails with an ALREADY_EXISTS error. This name must start with `"transferJobs/"` prefix and end with a letter or a number, and should be no more than 128 characters. For transfers involving PosixFilesystem, this name must start with `transferJobs/OPI` specifically. For all other transfer types, this name must not start with `transferJobs/OPI`. Non-PosixFilesystem example: `"transferJobs/^(?!OPI)[A-Za-z0-9-._~]*[A-Za-z0-9]$"` PosixFilesystem example: `"transferJobs/OPI^[A-Za-z0-9-._~]*[A-Za-z0-9]$"` Applications must not rely on the enforcement of naming requirements involving OPI. Invalid job names fail with an INVALID_ARGUMENT error.|
|» notificationConfig|body|[NotificationConfig](#schemanotificationconfig)|false|Notification configuration. This is not supported for transfers involving PosixFilesystem.|
|» projectId|body|string|false|The ID of the Google Cloud project that owns the job.|
|» schedule|body|[Schedule](#schemaschedule)|false|Specifies schedule for the transfer job. This is an optional field. When the field is not set, the job never executes a transfer, unless you invoke RunTransferJob or update the job to have a non-empty schedule.|
|» status|body|string|false|Status of the job. This value MUST be specified for `CreateTransferJobRequests`. **Note:** The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.|
|» transferSpec|body|[TransferSpec](#schematransferspec)|false|Transfer specification.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» status|STATUS_UNSPECIFIED|
|» status|ENABLED|
|» status|DISABLED|
|» status|DELETED|

> Example responses

> 200 Response

```json
{
  "creationTime": "string",
  "deletionTime": "string",
  "description": "string",
  "eventStream": {
    "eventStreamExpirationTime": "string",
    "eventStreamStartTime": "string",
    "name": "string"
  },
  "lastModificationTime": "string",
  "latestOperationName": "string",
  "loggingConfig": {
    "enableOnpremGcsTransferLogs": true,
    "logActionStates": [
      "LOGGABLE_ACTION_STATE_UNSPECIFIED"
    ],
    "logActions": [
      "LOGGABLE_ACTION_UNSPECIFIED"
    ]
  },
  "name": "string",
  "notificationConfig": {
    "eventTypes": [
      "EVENT_TYPE_UNSPECIFIED"
    ],
    "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
    "pubsubTopic": "string"
  },
  "projectId": "string",
  "schedule": {
    "endTimeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "repeatInterval": "string",
    "scheduleEndDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "scheduleStartDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "startTimeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    }
  },
  "status": "STATUS_UNSPECIFIED",
  "transferSpec": {
    "awsS3CompatibleDataSource": {
      "bucketName": "string",
      "endpoint": "string",
      "path": "string",
      "region": "string",
      "s3Metadata": {
        "authMethod": "AUTH_METHOD_UNSPECIFIED",
        "listApi": "LIST_API_UNSPECIFIED",
        "protocol": "NETWORK_PROTOCOL_UNSPECIFIED",
        "requestModel": "REQUEST_MODEL_UNSPECIFIED"
      }
    },
    "awsS3DataSource": {
      "awsAccessKey": {
        "accessKeyId": "string",
        "secretAccessKey": "string"
      },
      "bucketName": "string",
      "path": "string",
      "roleArn": "string"
    },
    "azureBlobStorageDataSource": {
      "azureCredentials": {
        "sasToken": "string"
      },
      "container": "string",
      "path": "string",
      "storageAccount": "string"
    },
    "gcsDataSink": {
      "bucketName": "string",
      "path": "string"
    },
    "gcsDataSource": {
      "bucketName": "string",
      "path": "string"
    },
    "gcsIntermediateDataLocation": {
      "bucketName": "string",
      "path": "string"
    },
    "httpDataSource": {
      "listUrl": "string"
    },
    "objectConditions": {
      "excludePrefixes": [
        "string"
      ],
      "includePrefixes": [
        "string"
      ],
      "lastModifiedBefore": "string",
      "lastModifiedSince": "string",
      "maxTimeElapsedSinceLastModification": "string",
      "minTimeElapsedSinceLastModification": "string"
    },
    "posixDataSink": {
      "rootDirectory": "string"
    },
    "posixDataSource": {
      "rootDirectory": "string"
    },
    "sinkAgentPoolName": "string",
    "sourceAgentPoolName": "string",
    "transferManifest": {
      "location": "string"
    },
    "transferOptions": {
      "deleteObjectsFromSourceAfterTransfer": true,
      "deleteObjectsUniqueInSink": true,
      "metadataOptions": {
        "acl": "ACL_UNSPECIFIED",
        "gid": "GID_UNSPECIFIED",
        "kmsKey": "KMS_KEY_UNSPECIFIED",
        "mode": "MODE_UNSPECIFIED",
        "storageClass": "STORAGE_CLASS_UNSPECIFIED",
        "symlink": "SYMLINK_UNSPECIFIED",
        "temporaryHold": "TEMPORARY_HOLD_UNSPECIFIED",
        "timeCreated": "TIME_CREATED_UNSPECIFIED",
        "uid": "UID_UNSPECIFIED"
      },
      "overwriteObjectsAlreadyExistingInSink": true,
      "overwriteWhen": "OVERWRITE_WHEN_UNSPECIFIED"
    }
  }
}
```

<h3 id="storagetransfertransferjobscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TransferJob](#schematransferjob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## storagetransfer.transferJobs.get

<a id="opIdstoragetransfer.transferJobs.get"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/v1/string?projectId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{jobName}`

Gets a transfer job.

<h3 id="storagetransfertransferjobsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobName|path|string|true|Required. The job to get.|
|projectId|query|string|true|Required. The ID of the Google Cloud project that owns the job.|
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
  "creationTime": "string",
  "deletionTime": "string",
  "description": "string",
  "eventStream": {
    "eventStreamExpirationTime": "string",
    "eventStreamStartTime": "string",
    "name": "string"
  },
  "lastModificationTime": "string",
  "latestOperationName": "string",
  "loggingConfig": {
    "enableOnpremGcsTransferLogs": true,
    "logActionStates": [
      "LOGGABLE_ACTION_STATE_UNSPECIFIED"
    ],
    "logActions": [
      "LOGGABLE_ACTION_UNSPECIFIED"
    ]
  },
  "name": "string",
  "notificationConfig": {
    "eventTypes": [
      "EVENT_TYPE_UNSPECIFIED"
    ],
    "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
    "pubsubTopic": "string"
  },
  "projectId": "string",
  "schedule": {
    "endTimeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "repeatInterval": "string",
    "scheduleEndDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "scheduleStartDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "startTimeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    }
  },
  "status": "STATUS_UNSPECIFIED",
  "transferSpec": {
    "awsS3CompatibleDataSource": {
      "bucketName": "string",
      "endpoint": "string",
      "path": "string",
      "region": "string",
      "s3Metadata": {
        "authMethod": "AUTH_METHOD_UNSPECIFIED",
        "listApi": "LIST_API_UNSPECIFIED",
        "protocol": "NETWORK_PROTOCOL_UNSPECIFIED",
        "requestModel": "REQUEST_MODEL_UNSPECIFIED"
      }
    },
    "awsS3DataSource": {
      "awsAccessKey": {
        "accessKeyId": "string",
        "secretAccessKey": "string"
      },
      "bucketName": "string",
      "path": "string",
      "roleArn": "string"
    },
    "azureBlobStorageDataSource": {
      "azureCredentials": {
        "sasToken": "string"
      },
      "container": "string",
      "path": "string",
      "storageAccount": "string"
    },
    "gcsDataSink": {
      "bucketName": "string",
      "path": "string"
    },
    "gcsDataSource": {
      "bucketName": "string",
      "path": "string"
    },
    "gcsIntermediateDataLocation": {
      "bucketName": "string",
      "path": "string"
    },
    "httpDataSource": {
      "listUrl": "string"
    },
    "objectConditions": {
      "excludePrefixes": [
        "string"
      ],
      "includePrefixes": [
        "string"
      ],
      "lastModifiedBefore": "string",
      "lastModifiedSince": "string",
      "maxTimeElapsedSinceLastModification": "string",
      "minTimeElapsedSinceLastModification": "string"
    },
    "posixDataSink": {
      "rootDirectory": "string"
    },
    "posixDataSource": {
      "rootDirectory": "string"
    },
    "sinkAgentPoolName": "string",
    "sourceAgentPoolName": "string",
    "transferManifest": {
      "location": "string"
    },
    "transferOptions": {
      "deleteObjectsFromSourceAfterTransfer": true,
      "deleteObjectsUniqueInSink": true,
      "metadataOptions": {
        "acl": "ACL_UNSPECIFIED",
        "gid": "GID_UNSPECIFIED",
        "kmsKey": "KMS_KEY_UNSPECIFIED",
        "mode": "MODE_UNSPECIFIED",
        "storageClass": "STORAGE_CLASS_UNSPECIFIED",
        "symlink": "SYMLINK_UNSPECIFIED",
        "temporaryHold": "TEMPORARY_HOLD_UNSPECIFIED",
        "timeCreated": "TIME_CREATED_UNSPECIFIED",
        "uid": "UID_UNSPECIFIED"
      },
      "overwriteObjectsAlreadyExistingInSink": true,
      "overwriteWhen": "OVERWRITE_WHEN_UNSPECIFIED"
    }
  }
}
```

<h3 id="storagetransfertransferjobsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TransferJob](#schematransferjob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## storagetransfer.transferJobs.delete

<a id="opIdstoragetransfer.transferJobs.delete"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/v1/string?projectId=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{jobName}`

Deletes a transfer job. Deleting a transfer job sets its status to DELETED.

<h3 id="storagetransfertransferjobsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobName|path|string|true|Required. The job to delete.|
|projectId|query|string|true|Required. The ID of the Google Cloud project that owns the job.|
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

<h3 id="storagetransfertransferjobsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## storagetransfer.transferJobs.patch

<a id="opIdstoragetransfer.transferJobs.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "projectId": "string",
    "transferJob": {
      "description": "string",
      "eventStream": {
        "eventStreamExpirationTime": "string",
        "eventStreamStartTime": "string",
        "name": "string"
      },
      "latestOperationName": "string",
      "loggingConfig": {
        "enableOnpremGcsTransferLogs": true,
        "logActionStates": [
          "LOGGABLE_ACTION_STATE_UNSPECIFIED"
        ],
        "logActions": [
          "LOGGABLE_ACTION_UNSPECIFIED"
        ]
      },
      "name": "string",
      "notificationConfig": {
        "eventTypes": [
          "EVENT_TYPE_UNSPECIFIED"
        ],
        "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
        "pubsubTopic": "string"
      },
      "projectId": "string",
      "schedule": {
        "endTimeOfDay": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "repeatInterval": "string",
        "scheduleEndDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "scheduleStartDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "startTimeOfDay": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      },
      "status": "STATUS_UNSPECIFIED",
      "transferSpec": {
        "awsS3CompatibleDataSource": {
          "bucketName": "string",
          "endpoint": "string",
          "path": "string",
          "region": "string",
          "s3Metadata": {
            "authMethod": "AUTH_METHOD_UNSPECIFIED",
            "listApi": "LIST_API_UNSPECIFIED",
            "protocol": "NETWORK_PROTOCOL_UNSPECIFIED",
            "requestModel": "REQUEST_MODEL_UNSPECIFIED"
          }
        },
        "awsS3DataSource": {
          "awsAccessKey": {
            "accessKeyId": "string",
            "secretAccessKey": "string"
          },
          "bucketName": "string",
          "path": "string",
          "roleArn": "string"
        },
        "azureBlobStorageDataSource": {
          "azureCredentials": {
            "sasToken": "string"
          },
          "container": "string",
          "path": "string",
          "storageAccount": "string"
        },
        "gcsDataSink": {
          "bucketName": "string",
          "path": "string"
        },
        "gcsDataSource": {
          "bucketName": "string",
          "path": "string"
        },
        "gcsIntermediateDataLocation": {
          "bucketName": "string",
          "path": "string"
        },
        "httpDataSource": {
          "listUrl": "string"
        },
        "objectConditions": {
          "excludePrefixes": [
            "string"
          ],
          "includePrefixes": [
            "string"
          ],
          "lastModifiedBefore": "string",
          "lastModifiedSince": "string",
          "maxTimeElapsedSinceLastModification": "string",
          "minTimeElapsedSinceLastModification": "string"
        },
        "posixDataSink": {
          "rootDirectory": "string"
        },
        "posixDataSource": {
          "rootDirectory": "string"
        },
        "sinkAgentPoolName": "string",
        "sourceAgentPoolName": "string",
        "transferManifest": {
          "location": "string"
        },
        "transferOptions": {
          "deleteObjectsFromSourceAfterTransfer": true,
          "deleteObjectsUniqueInSink": true,
          "metadataOptions": {
            "acl": "ACL_UNSPECIFIED",
            "gid": "GID_UNSPECIFIED",
            "kmsKey": "KMS_KEY_UNSPECIFIED",
            "mode": "MODE_UNSPECIFIED",
            "storageClass": "STORAGE_CLASS_UNSPECIFIED",
            "symlink": "SYMLINK_UNSPECIFIED",
            "temporaryHold": "TEMPORARY_HOLD_UNSPECIFIED",
            "timeCreated": "TIME_CREATED_UNSPECIFIED",
            "uid": "UID_UNSPECIFIED"
          },
          "overwriteObjectsAlreadyExistingInSink": true,
          "overwriteWhen": "OVERWRITE_WHEN_UNSPECIFIED"
        }
      }
    },
    "updateTransferJobFieldMask": "string"
  }'
```

`PATCH /v1/{jobName}`

Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to DELETED, DISABLED, or ENABLED).

> Body parameter

```json
{
  "projectId": "string",
  "transferJob": {
    "description": "string",
    "eventStream": {
      "eventStreamExpirationTime": "string",
      "eventStreamStartTime": "string",
      "name": "string"
    },
    "latestOperationName": "string",
    "loggingConfig": {
      "enableOnpremGcsTransferLogs": true,
      "logActionStates": [
        "LOGGABLE_ACTION_STATE_UNSPECIFIED"
      ],
      "logActions": [
        "LOGGABLE_ACTION_UNSPECIFIED"
      ]
    },
    "name": "string",
    "notificationConfig": {
      "eventTypes": [
        "EVENT_TYPE_UNSPECIFIED"
      ],
      "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
      "pubsubTopic": "string"
    },
    "projectId": "string",
    "schedule": {
      "endTimeOfDay": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "repeatInterval": "string",
      "scheduleEndDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "scheduleStartDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startTimeOfDay": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    },
    "status": "STATUS_UNSPECIFIED",
    "transferSpec": {
      "awsS3CompatibleDataSource": {
        "bucketName": "string",
        "endpoint": "string",
        "path": "string",
        "region": "string",
        "s3Metadata": {
          "authMethod": "AUTH_METHOD_UNSPECIFIED",
          "listApi": "LIST_API_UNSPECIFIED",
          "protocol": "NETWORK_PROTOCOL_UNSPECIFIED",
          "requestModel": "REQUEST_MODEL_UNSPECIFIED"
        }
      },
      "awsS3DataSource": {
        "awsAccessKey": {
          "accessKeyId": "string",
          "secretAccessKey": "string"
        },
        "bucketName": "string",
        "path": "string",
        "roleArn": "string"
      },
      "azureBlobStorageDataSource": {
        "azureCredentials": {
          "sasToken": "string"
        },
        "container": "string",
        "path": "string",
        "storageAccount": "string"
      },
      "gcsDataSink": {
        "bucketName": "string",
        "path": "string"
      },
      "gcsDataSource": {
        "bucketName": "string",
        "path": "string"
      },
      "gcsIntermediateDataLocation": {
        "bucketName": "string",
        "path": "string"
      },
      "httpDataSource": {
        "listUrl": "string"
      },
      "objectConditions": {
        "excludePrefixes": [
          "string"
        ],
        "includePrefixes": [
          "string"
        ],
        "lastModifiedBefore": "string",
        "lastModifiedSince": "string",
        "maxTimeElapsedSinceLastModification": "string",
        "minTimeElapsedSinceLastModification": "string"
      },
      "posixDataSink": {
        "rootDirectory": "string"
      },
      "posixDataSource": {
        "rootDirectory": "string"
      },
      "sinkAgentPoolName": "string",
      "sourceAgentPoolName": "string",
      "transferManifest": {
        "location": "string"
      },
      "transferOptions": {
        "deleteObjectsFromSourceAfterTransfer": true,
        "deleteObjectsUniqueInSink": true,
        "metadataOptions": {
          "acl": "ACL_UNSPECIFIED",
          "gid": "GID_UNSPECIFIED",
          "kmsKey": "KMS_KEY_UNSPECIFIED",
          "mode": "MODE_UNSPECIFIED",
          "storageClass": "STORAGE_CLASS_UNSPECIFIED",
          "symlink": "SYMLINK_UNSPECIFIED",
          "temporaryHold": "TEMPORARY_HOLD_UNSPECIFIED",
          "timeCreated": "TIME_CREATED_UNSPECIFIED",
          "uid": "UID_UNSPECIFIED"
        },
        "overwriteObjectsAlreadyExistingInSink": true,
        "overwriteWhen": "OVERWRITE_WHEN_UNSPECIFIED"
      }
    }
  },
  "updateTransferJobFieldMask": "string"
}
```

<h3 id="storagetransfertransferjobspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobName|path|string|true|Required. The name of job to update.|
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
|body|body|[UpdateTransferJobRequest](#schemaupdatetransferjobrequest)|false|none|
|» projectId|body|string|false|Required. The ID of the Google Cloud project that owns the job.|
|» transferJob|body|[TransferJob](#schematransferjob)|false|Required. The job to update. `transferJob` is expected to specify one or more of five fields: description, transfer_spec, notification_config, logging_config, and status. An `UpdateTransferJobRequest` that specifies other fields are rejected with the error INVALID_ARGUMENT. Updating a job status to DELETED requires `storagetransfer.jobs.delete` permission.|
|» updateTransferJobFieldMask|body|string(google-fieldmask)|false|The field mask of the fields in `transferJob` that are to be updated in this request. Fields in `transferJob` that can be updated are: description, transfer_spec, notification_config, logging_config, and status. To update the `transfer_spec` of the job, a complete transfer specification must be provided. An incomplete specification missing any required fields is rejected with the error INVALID_ARGUMENT.|

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
  "creationTime": "string",
  "deletionTime": "string",
  "description": "string",
  "eventStream": {
    "eventStreamExpirationTime": "string",
    "eventStreamStartTime": "string",
    "name": "string"
  },
  "lastModificationTime": "string",
  "latestOperationName": "string",
  "loggingConfig": {
    "enableOnpremGcsTransferLogs": true,
    "logActionStates": [
      "LOGGABLE_ACTION_STATE_UNSPECIFIED"
    ],
    "logActions": [
      "LOGGABLE_ACTION_UNSPECIFIED"
    ]
  },
  "name": "string",
  "notificationConfig": {
    "eventTypes": [
      "EVENT_TYPE_UNSPECIFIED"
    ],
    "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
    "pubsubTopic": "string"
  },
  "projectId": "string",
  "schedule": {
    "endTimeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "repeatInterval": "string",
    "scheduleEndDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "scheduleStartDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "startTimeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    }
  },
  "status": "STATUS_UNSPECIFIED",
  "transferSpec": {
    "awsS3CompatibleDataSource": {
      "bucketName": "string",
      "endpoint": "string",
      "path": "string",
      "region": "string",
      "s3Metadata": {
        "authMethod": "AUTH_METHOD_UNSPECIFIED",
        "listApi": "LIST_API_UNSPECIFIED",
        "protocol": "NETWORK_PROTOCOL_UNSPECIFIED",
        "requestModel": "REQUEST_MODEL_UNSPECIFIED"
      }
    },
    "awsS3DataSource": {
      "awsAccessKey": {
        "accessKeyId": "string",
        "secretAccessKey": "string"
      },
      "bucketName": "string",
      "path": "string",
      "roleArn": "string"
    },
    "azureBlobStorageDataSource": {
      "azureCredentials": {
        "sasToken": "string"
      },
      "container": "string",
      "path": "string",
      "storageAccount": "string"
    },
    "gcsDataSink": {
      "bucketName": "string",
      "path": "string"
    },
    "gcsDataSource": {
      "bucketName": "string",
      "path": "string"
    },
    "gcsIntermediateDataLocation": {
      "bucketName": "string",
      "path": "string"
    },
    "httpDataSource": {
      "listUrl": "string"
    },
    "objectConditions": {
      "excludePrefixes": [
        "string"
      ],
      "includePrefixes": [
        "string"
      ],
      "lastModifiedBefore": "string",
      "lastModifiedSince": "string",
      "maxTimeElapsedSinceLastModification": "string",
      "minTimeElapsedSinceLastModification": "string"
    },
    "posixDataSink": {
      "rootDirectory": "string"
    },
    "posixDataSource": {
      "rootDirectory": "string"
    },
    "sinkAgentPoolName": "string",
    "sourceAgentPoolName": "string",
    "transferManifest": {
      "location": "string"
    },
    "transferOptions": {
      "deleteObjectsFromSourceAfterTransfer": true,
      "deleteObjectsUniqueInSink": true,
      "metadataOptions": {
        "acl": "ACL_UNSPECIFIED",
        "gid": "GID_UNSPECIFIED",
        "kmsKey": "KMS_KEY_UNSPECIFIED",
        "mode": "MODE_UNSPECIFIED",
        "storageClass": "STORAGE_CLASS_UNSPECIFIED",
        "symlink": "SYMLINK_UNSPECIFIED",
        "temporaryHold": "TEMPORARY_HOLD_UNSPECIFIED",
        "timeCreated": "TIME_CREATED_UNSPECIFIED",
        "uid": "UID_UNSPECIFIED"
      },
      "overwriteObjectsAlreadyExistingInSink": true,
      "overwriteWhen": "OVERWRITE_WHEN_UNSPECIFIED"
    }
  }
}
```

<h3 id="storagetransfertransferjobspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TransferJob](#schematransferjob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## storagetransfer.transferJobs.run

<a id="opIdstoragetransfer.transferJobs.run"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:run \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "projectId": "string"
  }'
```

`POST /v1/{jobName}:run`

Starts a new operation for the specified transfer job. A `TransferJob` has a maximum of one active `TransferOperation`. If this method is called while a `TransferOperation` is active, an error is returned.

> Body parameter

```json
{
  "projectId": "string"
}
```

<h3 id="storagetransfertransferjobsrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobName|path|string|true|Required. The name of the transfer job.|
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
|body|body|[RunTransferJobRequest](#schemaruntransferjobrequest)|false|none|
|» projectId|body|string|false|Required. The ID of the Google Cloud project that owns the transfer job.|

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

<h3 id="storagetransfertransferjobsrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="storage-transfer-api-transferoperations">transferOperations</h1>

## storagetransfer.transferOperations.list

<a id="opIdstoragetransfer.transferOperations.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/v1/string?filter=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Lists transfer operations. Operations are ordered by their creation time in reverse chronological order.

<h3 id="storagetransfertransferoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the type being listed; must be `transferOperations`.|
|filter|query|string|true|Required. A list of query parameters specified as JSON text in the form of: `{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "operationNames":["opid1","opid2",...], "transferStatuses":["status1","status2",...]}` Since `jobNames`, `operationNames`, and `transferStatuses` support multiple values, they must be specified with array notation. `projectId` is required. `jobNames`, `operationNames`, and `transferStatuses` are optional. The valid values for `transferStatuses` are case-insensitive: IN_PROGRESS, PAUSED, SUCCESS, FAILED, and ABORTED.|
|pageSize|query|integer|false|The list page size. The max allowed value is 256.|
|pageToken|query|string|false|The list page token.|
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

<h3 id="storagetransfertransferoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## storagetransfer.transferOperations.cancel

<a id="opIdstoragetransfer.transferOperations.cancel"></a>

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

Cancels a transfer. Use the transferOperations.get method to check if the cancellation succeeded or if the operation completed despite the `cancel` request. When you cancel an operation, the currently running transfer is interrupted. For recurring transfer jobs, the next instance of the transfer job will still run. For example, if your job is configured to run every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer will stop. However, a transfer job will still be attempted on Tuesday. This applies only to currently running operations. If an operation is not currently running, `cancel` does nothing. *Caution:* Canceling a transfer job can leave your data in an unknown state. We recommend that you restore the state at both the destination and the source after the `cancel` request completes so that your data is in a consistent state. When you cancel a job, the next job computes a delta of files and may repair any inconsistent state. For instance, if you run a job every day, and today's job found 10 new files and transferred five files before you canceled the job, tomorrow's transfer operation will compute a new delta with the five files that were not copied today plus any new files discovered tomorrow.

> Body parameter

```json
{}
```

<h3 id="storagetransfertransferoperationscancel-parameters">Parameters</h3>

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

<h3 id="storagetransfertransferoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## storagetransfer.transferOperations.pause

<a id="opIdstoragetransfer.transferOperations.pause"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:pause \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:pause`

Pauses a transfer operation.

> Body parameter

```json
{}
```

<h3 id="storagetransfertransferoperationspause-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the transfer operation.|
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
|body|body|[PauseTransferOperationRequest](#schemapausetransferoperationrequest)|false|none|

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

<h3 id="storagetransfertransferoperationspause-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## storagetransfer.transferOperations.resume

<a id="opIdstoragetransfer.transferOperations.resume"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:resume \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:resume`

Resumes a transfer operation that is paused.

> Body parameter

```json
{}
```

<h3 id="storagetransfertransferoperationsresume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the transfer operation.|
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
|body|body|[ResumeTransferOperationRequest](#schemaresumetransferoperationrequest)|false|none|

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

<h3 id="storagetransfertransferoperationsresume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AgentPool">AgentPool</h2>
<!-- backwards compatibility -->
<a id="schemaagentpool"></a>
<a id="schema_AgentPool"></a>
<a id="tocSagentpool"></a>
<a id="tocsagentpool"></a>

```json
{
  "bandwidthLimit": {
    "limitMbps": "string"
  },
  "displayName": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Represents an On-Premises Agent pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidthLimit|[BandwidthLimit](#schemabandwidthlimit)|false|none|Specifies the bandwidth limit details. If this field is unspecified, the default value is set as 'No Limit'.|
|displayName|string|false|none|Specifies the client-specified AgentPool description.|
|name|string|false|none|Required. Specifies a unique string that identifies the agent pool. Format: `projects/{project_id}/agentPools/{agent_pool_id}`|
|state|string|false|read-only|Output only. Specifies the state of the AgentPool.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|CREATED|
|state|DELETING|

<h2 id="tocS_AwsAccessKey">AwsAccessKey</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccesskey"></a>
<a id="schema_AwsAccessKey"></a>
<a id="tocSawsaccesskey"></a>
<a id="tocsawsaccesskey"></a>

```json
{
  "accessKeyId": "string",
  "secretAccessKey": "string"
}
```

AWS access key (see [AWS Security Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)). For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessKeyId|string|false|none|Required. AWS access key ID.|
|secretAccessKey|string|false|none|Required. AWS secret access key. This field is not returned in RPC responses.|

<h2 id="tocS_AwsS3CompatibleData">AwsS3CompatibleData</h2>
<!-- backwards compatibility -->
<a id="schemaawss3compatibledata"></a>
<a id="schema_AwsS3CompatibleData"></a>
<a id="tocSawss3compatibledata"></a>
<a id="tocsawss3compatibledata"></a>

```json
{
  "bucketName": "string",
  "endpoint": "string",
  "path": "string",
  "region": "string",
  "s3Metadata": {
    "authMethod": "AUTH_METHOD_UNSPECIFIED",
    "listApi": "LIST_API_UNSPECIFIED",
    "protocol": "NETWORK_PROTOCOL_UNSPECIFIED",
    "requestModel": "REQUEST_MODEL_UNSPECIFIED"
  }
}
```

An AwsS3CompatibleData resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|string|false|none|Required. Specifies the name of the bucket.|
|endpoint|string|false|none|Required. Specifies the endpoint of the storage service.|
|path|string|false|none|Specifies the root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.|
|region|string|false|none|Specifies the region to sign requests with. This can be left blank if requests should be signed with an empty region.|
|s3Metadata|[S3CompatibleMetadata](#schemas3compatiblemetadata)|false|none|A S3 compatible metadata.|

<h2 id="tocS_AwsS3Data">AwsS3Data</h2>
<!-- backwards compatibility -->
<a id="schemaawss3data"></a>
<a id="schema_AwsS3Data"></a>
<a id="tocSawss3data"></a>
<a id="tocsawss3data"></a>

```json
{
  "awsAccessKey": {
    "accessKeyId": "string",
    "secretAccessKey": "string"
  },
  "bucketName": "string",
  "path": "string",
  "roleArn": "string"
}
```

An AwsS3Data resource can be a data source, but not a data sink. In an AwsS3Data resource, an object's name is the S3 object's key name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsAccessKey|[AwsAccessKey](#schemaawsaccesskey)|false|none|Input only. AWS access key used to sign the API requests to the AWS S3 bucket. Permissions on the bucket must be granted to the access ID of the AWS access key. For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).|
|bucketName|string|false|none|Required. S3 Bucket name (see [Creating a bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/create-bucket-get-location-example.html)).|
|path|string|false|none|Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.|
|roleArn|string|false|none|The Amazon Resource Name (ARN) of the role to support temporary credentials via `AssumeRoleWithWebIdentity`. For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a `AssumeRoleWithWebIdentity` call for the provided role using the GoogleServiceAccount for this project.|

<h2 id="tocS_AzureBlobStorageData">AzureBlobStorageData</h2>
<!-- backwards compatibility -->
<a id="schemaazureblobstoragedata"></a>
<a id="schema_AzureBlobStorageData"></a>
<a id="tocSazureblobstoragedata"></a>
<a id="tocsazureblobstoragedata"></a>

```json
{
  "azureCredentials": {
    "sasToken": "string"
  },
  "container": "string",
  "path": "string",
  "storageAccount": "string"
}
```

An AzureBlobStorageData resource can be a data source, but not a data sink. An AzureBlobStorageData resource represents one Azure container. The storage account determines the [Azure endpoint](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints). In an AzureBlobStorageData resource, a blobs's name is the [Azure Blob Storage blob's key name](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|azureCredentials|[AzureCredentials](#schemaazurecredentials)|false|none|Required. Input only. Credentials used to authenticate API requests to Azure. For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).|
|container|string|false|none|Required. The container to transfer from the Azure Storage account.|
|path|string|false|none|Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.|
|storageAccount|string|false|none|Required. The name of the Azure Storage account.|

<h2 id="tocS_AzureCredentials">AzureCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaazurecredentials"></a>
<a id="schema_AzureCredentials"></a>
<a id="tocSazurecredentials"></a>
<a id="tocsazurecredentials"></a>

```json
{
  "sasToken": "string"
}
```

Azure credentials For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sasToken|string|false|none|Required. Azure shared access signature (SAS). For more information about SAS, see [Grant limited access to Azure Storage resources using shared access signatures (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview).|

<h2 id="tocS_BandwidthLimit">BandwidthLimit</h2>
<!-- backwards compatibility -->
<a id="schemabandwidthlimit"></a>
<a id="schema_BandwidthLimit"></a>
<a id="tocSbandwidthlimit"></a>
<a id="tocsbandwidthlimit"></a>

```json
{
  "limitMbps": "string"
}
```

Specifies a bandwidth limit for an agent pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limitMbps|string(int64)|false|none|Bandwidth rate in megabytes per second, distributed across all the agents in the pool.|

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

<h2 id="tocS_ErrorLogEntry">ErrorLogEntry</h2>
<!-- backwards compatibility -->
<a id="schemaerrorlogentry"></a>
<a id="schema_ErrorLogEntry"></a>
<a id="tocSerrorlogentry"></a>
<a id="tocserrorlogentry"></a>

```json
{
  "errorDetails": [
    "string"
  ],
  "url": "string"
}
```

An entry describing an error that has occurred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorDetails|[string]|false|none|A list of messages that carry the error details.|
|url|string|false|none|Required. A URL that refers to the target (a data source, a data sink, or an object) with which the error is associated.|

<h2 id="tocS_ErrorSummary">ErrorSummary</h2>
<!-- backwards compatibility -->
<a id="schemaerrorsummary"></a>
<a id="schema_ErrorSummary"></a>
<a id="tocSerrorsummary"></a>
<a id="tocserrorsummary"></a>

```json
{
  "errorCode": "OK",
  "errorCount": "string",
  "errorLogEntries": [
    {
      "errorDetails": [
        "string"
      ],
      "url": "string"
    }
  ]
}
```

A summary of errors by error code, plus a count and sample error log entries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|false|none|Required.|
|errorCount|string(int64)|false|none|Required. Count of this type of error.|
|errorLogEntries|[[ErrorLogEntry](#schemaerrorlogentry)]|false|none|Error samples. At most 5 error log entries are recorded for a given error code for a single transfer operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|errorCode|OK|
|errorCode|CANCELLED|
|errorCode|UNKNOWN|
|errorCode|INVALID_ARGUMENT|
|errorCode|DEADLINE_EXCEEDED|
|errorCode|NOT_FOUND|
|errorCode|ALREADY_EXISTS|
|errorCode|PERMISSION_DENIED|
|errorCode|UNAUTHENTICATED|
|errorCode|RESOURCE_EXHAUSTED|
|errorCode|FAILED_PRECONDITION|
|errorCode|ABORTED|
|errorCode|OUT_OF_RANGE|
|errorCode|UNIMPLEMENTED|
|errorCode|INTERNAL|
|errorCode|UNAVAILABLE|
|errorCode|DATA_LOSS|

<h2 id="tocS_EventStream">EventStream</h2>
<!-- backwards compatibility -->
<a id="schemaeventstream"></a>
<a id="schema_EventStream"></a>
<a id="tocSeventstream"></a>
<a id="tocseventstream"></a>

```json
{
  "eventStreamExpirationTime": "string",
  "eventStreamStartTime": "string",
  "name": "string"
}
```

Specifies the Event-driven transfer options. Event-driven transfers listen to an event stream to transfer updated files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventStreamExpirationTime|string(google-datetime)|false|none|Specifies the data and time at which Storage Transfer Service stops listening for events from this stream. After this time, any transfers in progress will complete, but no new transfers are initiated.|
|eventStreamStartTime|string(google-datetime)|false|none|Specifies the date and time that Storage Transfer Service starts listening for events from this stream. If no start time is specified or start time is in the past, Storage Transfer Service starts listening immediately.|
|name|string|false|none|Required. Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'.|

<h2 id="tocS_GcsData">GcsData</h2>
<!-- backwards compatibility -->
<a id="schemagcsdata"></a>
<a id="schema_GcsData"></a>
<a id="tocSgcsdata"></a>
<a id="tocsgcsdata"></a>

```json
{
  "bucketName": "string",
  "path": "string"
}
```

In a GcsData resource, an object's name is the Cloud Storage object's name and its "last modification time" refers to the object's `updated` property of Cloud Storage objects, which changes when the content or the metadata of the object is updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|string|false|none|Required. Cloud Storage bucket name. Must meet [Bucket Name Requirements](/storage/docs/naming#requirements).|
|path|string|false|none|Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'. The root path value must meet [Object Name Requirements](/storage/docs/naming#objectnames).|

<h2 id="tocS_GoogleServiceAccount">GoogleServiceAccount</h2>
<!-- backwards compatibility -->
<a id="schemagoogleserviceaccount"></a>
<a id="schema_GoogleServiceAccount"></a>
<a id="tocSgoogleserviceaccount"></a>
<a id="tocsgoogleserviceaccount"></a>

```json
{
  "accountEmail": "string",
  "subjectId": "string"
}
```

Google service account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountEmail|string|false|none|Email address of the service account.|
|subjectId|string|false|none|Unique identifier for the service account.|

<h2 id="tocS_HttpData">HttpData</h2>
<!-- backwards compatibility -->
<a id="schemahttpdata"></a>
<a id="schema_HttpData"></a>
<a id="tocShttpdata"></a>
<a id="tocshttpdata"></a>

```json
{
  "listUrl": "string"
}
```

An HttpData resource specifies a list of objects on the web to be transferred over HTTP. The information of the objects to be transferred is contained in a file referenced by a URL. The first line in the file must be `"TsvHttpData-1.0"`, which specifies the format of the file. Subsequent lines specify the information of the list of objects, one object per list entry. Each entry has the following tab-delimited fields: * **HTTP URL** — The location of the object. * **Length** — The size of the object in bytes. * **MD5** — The base64-encoded MD5 hash of the object. For an example of a valid TSV file, see [Transferring data from URLs](https://cloud.google.com/storage-transfer/docs/create-url-list). When transferring data based on a URL list, keep the following in mind: * When an object located at `http(s)://hostname:port/` is transferred to a data sink, the name of the object at the data sink is `/`. * If the specified size of an object does not match the actual size of the object fetched, the object is not transferred. * If the specified MD5 does not match the MD5 computed from the transferred bytes, the object transfer fails. * Ensure that each URL you specify is publicly accessible. For example, in Cloud Storage you can [share an object publicly] (/storage/docs/cloud-console#_sharingdata) and get a link to it. * Storage Transfer Service obeys `robots.txt` rules and requires the source HTTP server to support `Range` requests and to return a `Content-Length` header in each response. * ObjectConditions have no effect when filtering objects to transfer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listUrl|string|false|none|Required. The URL that points to the file that stores the object list entries. This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported.|

<h2 id="tocS_ListAgentPoolsResponse">ListAgentPoolsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistagentpoolsresponse"></a>
<a id="schema_ListAgentPoolsResponse"></a>
<a id="tocSlistagentpoolsresponse"></a>
<a id="tocslistagentpoolsresponse"></a>

```json
{
  "agentPools": [
    {
      "bandwidthLimit": {
        "limitMbps": "string"
      },
      "displayName": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response from ListAgentPools.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentPools|[[AgentPool](#schemaagentpool)]|false|none|A list of agent pools.|
|nextPageToken|string|false|none|The list next page token.|

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

<h2 id="tocS_ListTransferJobsResponse">ListTransferJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttransferjobsresponse"></a>
<a id="schema_ListTransferJobsResponse"></a>
<a id="tocSlisttransferjobsresponse"></a>
<a id="tocslisttransferjobsresponse"></a>

```json
{
  "nextPageToken": "string",
  "transferJobs": [
    {
      "creationTime": "string",
      "deletionTime": "string",
      "description": "string",
      "eventStream": {
        "eventStreamExpirationTime": "string",
        "eventStreamStartTime": "string",
        "name": "string"
      },
      "lastModificationTime": "string",
      "latestOperationName": "string",
      "loggingConfig": {
        "enableOnpremGcsTransferLogs": true,
        "logActionStates": [
          "LOGGABLE_ACTION_STATE_UNSPECIFIED"
        ],
        "logActions": [
          "LOGGABLE_ACTION_UNSPECIFIED"
        ]
      },
      "name": "string",
      "notificationConfig": {
        "eventTypes": [
          "EVENT_TYPE_UNSPECIFIED"
        ],
        "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
        "pubsubTopic": "string"
      },
      "projectId": "string",
      "schedule": {
        "endTimeOfDay": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "repeatInterval": "string",
        "scheduleEndDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "scheduleStartDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "startTimeOfDay": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      },
      "status": "STATUS_UNSPECIFIED",
      "transferSpec": {
        "awsS3CompatibleDataSource": {
          "bucketName": "string",
          "endpoint": "string",
          "path": "string",
          "region": "string",
          "s3Metadata": {
            "authMethod": "AUTH_METHOD_UNSPECIFIED",
            "listApi": "LIST_API_UNSPECIFIED",
            "protocol": "NETWORK_PROTOCOL_UNSPECIFIED",
            "requestModel": "REQUEST_MODEL_UNSPECIFIED"
          }
        },
        "awsS3DataSource": {
          "awsAccessKey": {
            "accessKeyId": "string",
            "secretAccessKey": "string"
          },
          "bucketName": "string",
          "path": "string",
          "roleArn": "string"
        },
        "azureBlobStorageDataSource": {
          "azureCredentials": {
            "sasToken": "string"
          },
          "container": "string",
          "path": "string",
          "storageAccount": "string"
        },
        "gcsDataSink": {
          "bucketName": "string",
          "path": "string"
        },
        "gcsDataSource": {
          "bucketName": "string",
          "path": "string"
        },
        "gcsIntermediateDataLocation": {
          "bucketName": "string",
          "path": "string"
        },
        "httpDataSource": {
          "listUrl": "string"
        },
        "objectConditions": {
          "excludePrefixes": [
            "string"
          ],
          "includePrefixes": [
            "string"
          ],
          "lastModifiedBefore": "string",
          "lastModifiedSince": "string",
          "maxTimeElapsedSinceLastModification": "string",
          "minTimeElapsedSinceLastModification": "string"
        },
        "posixDataSink": {
          "rootDirectory": "string"
        },
        "posixDataSource": {
          "rootDirectory": "string"
        },
        "sinkAgentPoolName": "string",
        "sourceAgentPoolName": "string",
        "transferManifest": {
          "location": "string"
        },
        "transferOptions": {
          "deleteObjectsFromSourceAfterTransfer": true,
          "deleteObjectsUniqueInSink": true,
          "metadataOptions": {
            "acl": "ACL_UNSPECIFIED",
            "gid": "GID_UNSPECIFIED",
            "kmsKey": "KMS_KEY_UNSPECIFIED",
            "mode": "MODE_UNSPECIFIED",
            "storageClass": "STORAGE_CLASS_UNSPECIFIED",
            "symlink": "SYMLINK_UNSPECIFIED",
            "temporaryHold": "TEMPORARY_HOLD_UNSPECIFIED",
            "timeCreated": "TIME_CREATED_UNSPECIFIED",
            "uid": "UID_UNSPECIFIED"
          },
          "overwriteObjectsAlreadyExistingInSink": true,
          "overwriteWhen": "OVERWRITE_WHEN_UNSPECIFIED"
        }
      }
    }
  ]
}
```

Response from ListTransferJobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The list next page token.|
|transferJobs|[[TransferJob](#schematransferjob)]|false|none|A list of transfer jobs.|

<h2 id="tocS_LoggingConfig">LoggingConfig</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfig"></a>
<a id="schema_LoggingConfig"></a>
<a id="tocSloggingconfig"></a>
<a id="tocsloggingconfig"></a>

```json
{
  "enableOnpremGcsTransferLogs": true,
  "logActionStates": [
    "LOGGABLE_ACTION_STATE_UNSPECIFIED"
  ],
  "logActions": [
    "LOGGABLE_ACTION_UNSPECIFIED"
  ]
}
```

Specifies the logging behavior for transfer operations. For cloud-to-cloud transfers, logs are sent to Cloud Logging. See [Read transfer logs](https://cloud.google.com/storage-transfer/docs/read-transfer-logs) for details. For transfers to or from a POSIX file system, logs are stored in the Cloud Storage bucket that is the source or sink of the transfer. See [Managing Transfer for on-premises jobs] (https://cloud.google.com/storage-transfer/docs/managing-on-prem-jobs#viewing-logs) for details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableOnpremGcsTransferLogs|boolean|false|none|For transfers with a PosixFilesystem source, this option enables the Cloud Storage transfer logs for this transfer.|
|logActionStates|[string]|false|none|States in which `log_actions` are logged. If empty, no logs are generated. Not supported for transfers with PosixFilesystem data sources; use enable_onprem_gcs_transfer_logs instead.|
|logActions|[string]|false|none|Specifies the actions to be logged. If empty, no logs are generated. Not supported for transfers with PosixFilesystem data sources; use enable_onprem_gcs_transfer_logs instead.|

#### Enumerated Values

|Property|Value|
|---|---|
|logActionStates|LOGGABLE_ACTION_STATE_UNSPECIFIED|
|logActionStates|SUCCEEDED|
|logActionStates|FAILED|
|logActions|LOGGABLE_ACTION_UNSPECIFIED|
|logActions|FIND|
|logActions|DELETE|
|logActions|COPY|

<h2 id="tocS_MetadataOptions">MetadataOptions</h2>
<!-- backwards compatibility -->
<a id="schemametadataoptions"></a>
<a id="schema_MetadataOptions"></a>
<a id="tocSmetadataoptions"></a>
<a id="tocsmetadataoptions"></a>

```json
{
  "acl": "ACL_UNSPECIFIED",
  "gid": "GID_UNSPECIFIED",
  "kmsKey": "KMS_KEY_UNSPECIFIED",
  "mode": "MODE_UNSPECIFIED",
  "storageClass": "STORAGE_CLASS_UNSPECIFIED",
  "symlink": "SYMLINK_UNSPECIFIED",
  "temporaryHold": "TEMPORARY_HOLD_UNSPECIFIED",
  "timeCreated": "TIME_CREATED_UNSPECIFIED",
  "uid": "UID_UNSPECIFIED"
}
```

Specifies the metadata options for running a transfer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acl|string|false|none|Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as ACL_DESTINATION_BUCKET_DEFAULT.|
|gid|string|false|none|Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. By default, GID is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.|
|kmsKey|string|false|none|Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as KMS_KEY_DESTINATION_BUCKET_DEFAULT.|
|mode|string|false|none|Specifies how each file's mode attribute should be handled by the transfer. By default, mode is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.|
|storageClass|string|false|none|Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets. If unspecified, the default behavior is the same as STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT.|
|symlink|string|false|none|Specifies how symlinks should be handled by the transfer. By default, symlinks are not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.|
|temporaryHold|string|false|none|Specifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as TEMPORARY_HOLD_PRESERVE.|
|timeCreated|string|false|none|Specifies how each object's `timeCreated` metadata is preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as TIME_CREATED_SKIP.|
|uid|string|false|none|Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. By default, UID is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.|

#### Enumerated Values

|Property|Value|
|---|---|
|acl|ACL_UNSPECIFIED|
|acl|ACL_DESTINATION_BUCKET_DEFAULT|
|acl|ACL_PRESERVE|
|gid|GID_UNSPECIFIED|
|gid|GID_SKIP|
|gid|GID_NUMBER|
|kmsKey|KMS_KEY_UNSPECIFIED|
|kmsKey|KMS_KEY_DESTINATION_BUCKET_DEFAULT|
|kmsKey|KMS_KEY_PRESERVE|
|mode|MODE_UNSPECIFIED|
|mode|MODE_SKIP|
|mode|MODE_PRESERVE|
|storageClass|STORAGE_CLASS_UNSPECIFIED|
|storageClass|STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT|
|storageClass|STORAGE_CLASS_PRESERVE|
|storageClass|STORAGE_CLASS_STANDARD|
|storageClass|STORAGE_CLASS_NEARLINE|
|storageClass|STORAGE_CLASS_COLDLINE|
|storageClass|STORAGE_CLASS_ARCHIVE|
|symlink|SYMLINK_UNSPECIFIED|
|symlink|SYMLINK_SKIP|
|symlink|SYMLINK_PRESERVE|
|temporaryHold|TEMPORARY_HOLD_UNSPECIFIED|
|temporaryHold|TEMPORARY_HOLD_SKIP|
|temporaryHold|TEMPORARY_HOLD_PRESERVE|
|timeCreated|TIME_CREATED_UNSPECIFIED|
|timeCreated|TIME_CREATED_SKIP|
|timeCreated|TIME_CREATED_PRESERVE_AS_CUSTOM_TIME|
|uid|UID_UNSPECIFIED|
|uid|UID_SKIP|
|uid|UID_NUMBER|

<h2 id="tocS_NotificationConfig">NotificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemanotificationconfig"></a>
<a id="schema_NotificationConfig"></a>
<a id="tocSnotificationconfig"></a>
<a id="tocsnotificationconfig"></a>

```json
{
  "eventTypes": [
    "EVENT_TYPE_UNSPECIFIED"
  ],
  "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
  "pubsubTopic": "string"
}
```

Specification to configure notifications published to Pub/Sub. Notifications are published to the customer-provided topic using the following `PubsubMessage.attributes`: * `"eventType"`: one of the EventType values * `"payloadFormat"`: one of the PayloadFormat values * `"projectId"`: the project_id of the `TransferOperation` * `"transferJobName"`: the transfer_job_name of the `TransferOperation` * `"transferOperationName"`: the name of the `TransferOperation` The `PubsubMessage.data` contains a TransferOperation resource formatted according to the specified `PayloadFormat`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypes|[string]|false|none|Event types for which a notification is desired. If empty, send notifications for all event types.|
|payloadFormat|string|false|none|Required. The desired format of the notification message payloads.|
|pubsubTopic|string|false|none|Required. The `Topic.name` of the Pub/Sub topic to which to publish notifications. Must be of the format: `projects/{project}/topics/{topic}`. Not matching this format results in an INVALID_ARGUMENT error.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventTypes|EVENT_TYPE_UNSPECIFIED|
|eventTypes|TRANSFER_OPERATION_SUCCESS|
|eventTypes|TRANSFER_OPERATION_FAILED|
|eventTypes|TRANSFER_OPERATION_ABORTED|
|payloadFormat|PAYLOAD_FORMAT_UNSPECIFIED|
|payloadFormat|NONE|
|payloadFormat|JSON|

<h2 id="tocS_ObjectConditions">ObjectConditions</h2>
<!-- backwards compatibility -->
<a id="schemaobjectconditions"></a>
<a id="schema_ObjectConditions"></a>
<a id="tocSobjectconditions"></a>
<a id="tocsobjectconditions"></a>

```json
{
  "excludePrefixes": [
    "string"
  ],
  "includePrefixes": [
    "string"
  ],
  "lastModifiedBefore": "string",
  "lastModifiedSince": "string",
  "maxTimeElapsedSinceLastModification": "string",
  "minTimeElapsedSinceLastModification": "string"
}
```

Conditions that determine which objects are transferred. Applies only to Cloud Data Sources such as S3, Azure, and Cloud Storage. The "last modification time" refers to the time of the last change to the object's content or metadata — specifically, this is the `updated` property of Cloud Storage objects, the `LastModified` field of S3 objects, and the `Last-Modified` header of Azure blobs. Transfers with a PosixFilesystem source or destination don't support `ObjectConditions`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludePrefixes|[string]|false|none|If you specify `exclude_prefixes`, Storage Transfer Service uses the items in the `exclude_prefixes` array to determine which objects to exclude from a transfer. Objects must not start with one of the matching `exclude_prefixes` for inclusion in a transfer. The following are requirements of `exclude_prefixes`: * Each exclude-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported. * Each exclude-prefix must omit the leading slash. For example, to exclude the object `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the exclude-prefix as `logs/y=2015/requests.gz`. * None of the exclude-prefix values can be empty, if specified. * Each exclude-prefix must exclude a distinct portion of the object namespace. No exclude-prefix may be a prefix of another exclude-prefix. * If include_prefixes is specified, then each exclude-prefix must start with the value of a path explicitly included by `include_prefixes`. The max size of `exclude_prefixes` is 1000. For more information, see [Filtering objects from transfers](/storage-transfer/docs/filtering-objects-from-transfers).|
|includePrefixes|[string]|false|none|If you specify `include_prefixes`, Storage Transfer Service uses the items in the `include_prefixes` array to determine which objects to include in a transfer. Objects must start with one of the matching `include_prefixes` for inclusion in the transfer. If exclude_prefixes is specified, objects must not start with any of the `exclude_prefixes` specified for inclusion in the transfer. The following are requirements of `include_prefixes`: * Each include-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported. * Each include-prefix must omit the leading slash. For example, to include the object `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the include-prefix as `logs/y=2015/requests.gz`. * None of the include-prefix values can be empty, if specified. * Each include-prefix must include a distinct portion of the object namespace. No include-prefix may be a prefix of another include-prefix. The max size of `include_prefixes` is 1000. For more information, see [Filtering objects from transfers](/storage-transfer/docs/filtering-objects-from-transfers).|
|lastModifiedBefore|string(google-datetime)|false|none|If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.|
|lastModifiedSince|string(google-datetime)|false|none|If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. The `last_modified_since` and `last_modified_before` fields can be used together for chunked data processing. For example, consider a script that processes each day's worth of data at a time. For that you'd set each of the fields as follows: * `last_modified_since` to the start of the day * `last_modified_before` to the end of the day|
|maxTimeElapsedSinceLastModification|string(google-duration)|false|none|Ensures that objects are not transferred if a specific maximum time has elapsed since the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the start_time of the `TransferOperation`and the "last modification time" of the object is less than the value of max_time_elapsed_since_last_modification`. Objects that do not have a "last modification time" are also transferred.|
|minTimeElapsedSinceLastModification|string(google-duration)|false|none|Ensures that objects are not transferred until a specific minimum time has elapsed after the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the start_time of the `TransferOperation` and the "last modification time" of the object is equal to or greater than the value of min_time_elapsed_since_last_modification`. Objects that do not have a "last modification time" are also transferred.|

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
|metadata|object|false|none|Represents the transfer operation object. To request a TransferOperation object, use transferOperations.get.|
|name|string|false|none|The server-assigned unique name. The format of `name` is `transferOperations/some/unique/name`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_PauseTransferOperationRequest">PauseTransferOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapausetransferoperationrequest"></a>
<a id="schema_PauseTransferOperationRequest"></a>
<a id="tocSpausetransferoperationrequest"></a>
<a id="tocspausetransferoperationrequest"></a>

```json
{}
```

Request passed to PauseTransferOperation.

<h2 id="tocS_PosixFilesystem">PosixFilesystem</h2>
<!-- backwards compatibility -->
<a id="schemaposixfilesystem"></a>
<a id="schema_PosixFilesystem"></a>
<a id="tocSposixfilesystem"></a>
<a id="tocsposixfilesystem"></a>

```json
{
  "rootDirectory": "string"
}
```

A POSIX filesystem resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rootDirectory|string|false|none|Root directory path to the filesystem.|

<h2 id="tocS_ResumeTransferOperationRequest">ResumeTransferOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresumetransferoperationrequest"></a>
<a id="schema_ResumeTransferOperationRequest"></a>
<a id="tocSresumetransferoperationrequest"></a>
<a id="tocsresumetransferoperationrequest"></a>

```json
{}
```

Request passed to ResumeTransferOperation.

<h2 id="tocS_RunTransferJobRequest">RunTransferJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemaruntransferjobrequest"></a>
<a id="schema_RunTransferJobRequest"></a>
<a id="tocSruntransferjobrequest"></a>
<a id="tocsruntransferjobrequest"></a>

```json
{
  "projectId": "string"
}
```

Request passed to RunTransferJob.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectId|string|false|none|Required. The ID of the Google Cloud project that owns the transfer job.|

<h2 id="tocS_S3CompatibleMetadata">S3CompatibleMetadata</h2>
<!-- backwards compatibility -->
<a id="schemas3compatiblemetadata"></a>
<a id="schema_S3CompatibleMetadata"></a>
<a id="tocSs3compatiblemetadata"></a>
<a id="tocss3compatiblemetadata"></a>

```json
{
  "authMethod": "AUTH_METHOD_UNSPECIFIED",
  "listApi": "LIST_API_UNSPECIFIED",
  "protocol": "NETWORK_PROTOCOL_UNSPECIFIED",
  "requestModel": "REQUEST_MODEL_UNSPECIFIED"
}
```

S3CompatibleMetadata contains the metadata fields that apply to the basic types of S3-compatible data providers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authMethod|string|false|none|Specifies the authentication and authorization method used by the storage service. When not specified, Transfer Service will attempt to determine right auth method to use.|
|listApi|string|false|none|The Listing API to use for discovering objects. When not specified, Transfer Service will attempt to determine the right API to use.|
|protocol|string|false|none|Specifies the network protocol of the agent. When not specified, the default value of NetworkProtocol NETWORK_PROTOCOL_HTTPS is used.|
|requestModel|string|false|none|Specifies the API request model used to call the storage service. When not specified, the default value of RequestModel REQUEST_MODEL_VIRTUAL_HOSTED_STYLE is used.|

#### Enumerated Values

|Property|Value|
|---|---|
|authMethod|AUTH_METHOD_UNSPECIFIED|
|authMethod|AUTH_METHOD_AWS_SIGNATURE_V4|
|authMethod|AUTH_METHOD_AWS_SIGNATURE_V2|
|listApi|LIST_API_UNSPECIFIED|
|listApi|LIST_OBJECTS_V2|
|listApi|LIST_OBJECTS|
|protocol|NETWORK_PROTOCOL_UNSPECIFIED|
|protocol|NETWORK_PROTOCOL_HTTPS|
|protocol|NETWORK_PROTOCOL_HTTP|
|requestModel|REQUEST_MODEL_UNSPECIFIED|
|requestModel|REQUEST_MODEL_VIRTUAL_HOSTED_STYLE|
|requestModel|REQUEST_MODEL_PATH_STYLE|

<h2 id="tocS_Schedule">Schedule</h2>
<!-- backwards compatibility -->
<a id="schemaschedule"></a>
<a id="schema_Schedule"></a>
<a id="tocSschedule"></a>
<a id="tocsschedule"></a>

```json
{
  "endTimeOfDay": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "repeatInterval": "string",
  "scheduleEndDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "scheduleStartDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "startTimeOfDay": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  }
}
```

Transfers can be scheduled to recur or to run just once.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTimeOfDay|[TimeOfDay](#schematimeofday)|false|none|The time in UTC that no further transfer operations are scheduled. Combined with schedule_end_date, `end_time_of_day` specifies the end date and time for starting new transfer operations. This field must be greater than or equal to the timestamp corresponding to the combintation of schedule_start_date and start_time_of_day, and is subject to the following: * If `end_time_of_day` is not set and `schedule_end_date` is set, then a default value of `23:59:59` is used for `end_time_of_day`. * If `end_time_of_day` is set and `schedule_end_date` is not set, then INVALID_ARGUMENT is returned.|
|repeatInterval|string(google-duration)|false|none|Interval between the start of each scheduled TransferOperation. If unspecified, the default value is 24 hours. This value may not be less than 1 hour.|
|scheduleEndDate|[Date](#schemadate)|false|none|The last day a transfer runs. Date boundaries are determined relative to UTC time. A job runs once per 24 hours within the following guidelines: * If `schedule_end_date` and schedule_start_date are the same and in the future relative to UTC, the transfer is executed only one time. * If `schedule_end_date` is later than `schedule_start_date` and `schedule_end_date` is in the future relative to UTC, the job runs each day at start_time_of_day through `schedule_end_date`.|
|scheduleStartDate|[Date](#schemadate)|false|none|Required. The start date of a transfer. Date boundaries are determined relative to UTC time. If `schedule_start_date` and start_time_of_day are in the past relative to the job's creation time, the transfer starts the day after you schedule the transfer request. **Note:** When starting jobs at or near midnight UTC it is possible that a job starts later than expected. For example, if you send an outbound request on June 1 one millisecond prior to midnight UTC and the Storage Transfer Service server receives the request on June 2, then it creates a TransferJob with `schedule_start_date` set to June 2 and a `start_time_of_day` set to midnight UTC. The first scheduled TransferOperation takes place on June 3 at midnight UTC.|
|startTimeOfDay|[TimeOfDay](#schematimeofday)|false|none|The time in UTC that a transfer job is scheduled to run. Transfers may start later than this time. If `start_time_of_day` is not specified: * One-time transfers run immediately. * Recurring transfers run immediately, and each day at midnight UTC, through schedule_end_date. If `start_time_of_day` is specified: * One-time transfers run at the specified time. * Recurring transfers run at the specified time each day, through `schedule_end_date`.|

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

<h2 id="tocS_TimeOfDay">TimeOfDay</h2>
<!-- backwards compatibility -->
<a id="schematimeofday"></a>
<a id="schema_TimeOfDay"></a>
<a id="tocStimeofday"></a>
<a id="tocstimeofday"></a>

```json
{
  "hours": 0,
  "minutes": 0,
  "nanos": 0,
  "seconds": 0
}
```

Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hours|integer(int32)|false|none|Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.|
|minutes|integer(int32)|false|none|Minutes of hour of day. Must be from 0 to 59.|
|nanos|integer(int32)|false|none|Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.|
|seconds|integer(int32)|false|none|Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.|

<h2 id="tocS_TransferCounters">TransferCounters</h2>
<!-- backwards compatibility -->
<a id="schematransfercounters"></a>
<a id="schema_TransferCounters"></a>
<a id="tocStransfercounters"></a>
<a id="tocstransfercounters"></a>

```json
{
  "bytesCopiedToSink": "string",
  "bytesDeletedFromSink": "string",
  "bytesDeletedFromSource": "string",
  "bytesFailedToDeleteFromSink": "string",
  "bytesFoundFromSource": "string",
  "bytesFoundOnlyFromSink": "string",
  "bytesFromSourceFailed": "string",
  "bytesFromSourceSkippedBySync": "string",
  "directoriesFailedToListFromSource": "string",
  "directoriesFoundFromSource": "string",
  "directoriesSuccessfullyListedFromSource": "string",
  "intermediateObjectsCleanedUp": "string",
  "intermediateObjectsFailedCleanedUp": "string",
  "objectsCopiedToSink": "string",
  "objectsDeletedFromSink": "string",
  "objectsDeletedFromSource": "string",
  "objectsFailedToDeleteFromSink": "string",
  "objectsFoundFromSource": "string",
  "objectsFoundOnlyFromSink": "string",
  "objectsFromSourceFailed": "string",
  "objectsFromSourceSkippedBySync": "string"
}
```

A collection of counters that report the progress of a transfer operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bytesCopiedToSink|string(int64)|false|none|Bytes that are copied to the data sink.|
|bytesDeletedFromSink|string(int64)|false|none|Bytes that are deleted from the data sink.|
|bytesDeletedFromSource|string(int64)|false|none|Bytes that are deleted from the data source.|
|bytesFailedToDeleteFromSink|string(int64)|false|none|Bytes that failed to be deleted from the data sink.|
|bytesFoundFromSource|string(int64)|false|none|Bytes found in the data source that are scheduled to be transferred, excluding any that are filtered based on object conditions or skipped due to sync.|
|bytesFoundOnlyFromSink|string(int64)|false|none|Bytes found only in the data sink that are scheduled to be deleted.|
|bytesFromSourceFailed|string(int64)|false|none|Bytes in the data source that failed to be transferred or that failed to be deleted after being transferred.|
|bytesFromSourceSkippedBySync|string(int64)|false|none|Bytes in the data source that are not transferred because they already exist in the data sink.|
|directoriesFailedToListFromSource|string(int64)|false|none|For transfers involving PosixFilesystem only. Number of listing failures for each directory found at the source. Potential failures when listing a directory include permission failure or block failure. If listing a directory fails, no files in the directory are transferred.|
|directoriesFoundFromSource|string(int64)|false|none|For transfers involving PosixFilesystem only. Number of directories found while listing. For example, if the root directory of the transfer is `base/` and there are two other directories, `a/` and `b/` under this directory, the count after listing `base/`, `base/a/` and `base/b/` is 3.|
|directoriesSuccessfullyListedFromSource|string(int64)|false|none|For transfers involving PosixFilesystem only. Number of successful listings for each directory found at the source.|
|intermediateObjectsCleanedUp|string(int64)|false|none|Number of successfully cleaned up intermediate objects.|
|intermediateObjectsFailedCleanedUp|string(int64)|false|none|Number of intermediate objects failed cleaned up.|
|objectsCopiedToSink|string(int64)|false|none|Objects that are copied to the data sink.|
|objectsDeletedFromSink|string(int64)|false|none|Objects that are deleted from the data sink.|
|objectsDeletedFromSource|string(int64)|false|none|Objects that are deleted from the data source.|
|objectsFailedToDeleteFromSink|string(int64)|false|none|Objects that failed to be deleted from the data sink.|
|objectsFoundFromSource|string(int64)|false|none|Objects found in the data source that are scheduled to be transferred, excluding any that are filtered based on object conditions or skipped due to sync.|
|objectsFoundOnlyFromSink|string(int64)|false|none|Objects found only in the data sink that are scheduled to be deleted.|
|objectsFromSourceFailed|string(int64)|false|none|Objects in the data source that failed to be transferred or that failed to be deleted after being transferred.|
|objectsFromSourceSkippedBySync|string(int64)|false|none|Objects in the data source that are not transferred because they already exist in the data sink.|

<h2 id="tocS_TransferJob">TransferJob</h2>
<!-- backwards compatibility -->
<a id="schematransferjob"></a>
<a id="schema_TransferJob"></a>
<a id="tocStransferjob"></a>
<a id="tocstransferjob"></a>

```json
{
  "creationTime": "string",
  "deletionTime": "string",
  "description": "string",
  "eventStream": {
    "eventStreamExpirationTime": "string",
    "eventStreamStartTime": "string",
    "name": "string"
  },
  "lastModificationTime": "string",
  "latestOperationName": "string",
  "loggingConfig": {
    "enableOnpremGcsTransferLogs": true,
    "logActionStates": [
      "LOGGABLE_ACTION_STATE_UNSPECIFIED"
    ],
    "logActions": [
      "LOGGABLE_ACTION_UNSPECIFIED"
    ]
  },
  "name": "string",
  "notificationConfig": {
    "eventTypes": [
      "EVENT_TYPE_UNSPECIFIED"
    ],
    "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
    "pubsubTopic": "string"
  },
  "projectId": "string",
  "schedule": {
    "endTimeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "repeatInterval": "string",
    "scheduleEndDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "scheduleStartDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "startTimeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    }
  },
  "status": "STATUS_UNSPECIFIED",
  "transferSpec": {
    "awsS3CompatibleDataSource": {
      "bucketName": "string",
      "endpoint": "string",
      "path": "string",
      "region": "string",
      "s3Metadata": {
        "authMethod": "AUTH_METHOD_UNSPECIFIED",
        "listApi": "LIST_API_UNSPECIFIED",
        "protocol": "NETWORK_PROTOCOL_UNSPECIFIED",
        "requestModel": "REQUEST_MODEL_UNSPECIFIED"
      }
    },
    "awsS3DataSource": {
      "awsAccessKey": {
        "accessKeyId": "string",
        "secretAccessKey": "string"
      },
      "bucketName": "string",
      "path": "string",
      "roleArn": "string"
    },
    "azureBlobStorageDataSource": {
      "azureCredentials": {
        "sasToken": "string"
      },
      "container": "string",
      "path": "string",
      "storageAccount": "string"
    },
    "gcsDataSink": {
      "bucketName": "string",
      "path": "string"
    },
    "gcsDataSource": {
      "bucketName": "string",
      "path": "string"
    },
    "gcsIntermediateDataLocation": {
      "bucketName": "string",
      "path": "string"
    },
    "httpDataSource": {
      "listUrl": "string"
    },
    "objectConditions": {
      "excludePrefixes": [
        "string"
      ],
      "includePrefixes": [
        "string"
      ],
      "lastModifiedBefore": "string",
      "lastModifiedSince": "string",
      "maxTimeElapsedSinceLastModification": "string",
      "minTimeElapsedSinceLastModification": "string"
    },
    "posixDataSink": {
      "rootDirectory": "string"
    },
    "posixDataSource": {
      "rootDirectory": "string"
    },
    "sinkAgentPoolName": "string",
    "sourceAgentPoolName": "string",
    "transferManifest": {
      "location": "string"
    },
    "transferOptions": {
      "deleteObjectsFromSourceAfterTransfer": true,
      "deleteObjectsUniqueInSink": true,
      "metadataOptions": {
        "acl": "ACL_UNSPECIFIED",
        "gid": "GID_UNSPECIFIED",
        "kmsKey": "KMS_KEY_UNSPECIFIED",
        "mode": "MODE_UNSPECIFIED",
        "storageClass": "STORAGE_CLASS_UNSPECIFIED",
        "symlink": "SYMLINK_UNSPECIFIED",
        "temporaryHold": "TEMPORARY_HOLD_UNSPECIFIED",
        "timeCreated": "TIME_CREATED_UNSPECIFIED",
        "uid": "UID_UNSPECIFIED"
      },
      "overwriteObjectsAlreadyExistingInSink": true,
      "overwriteWhen": "OVERWRITE_WHEN_UNSPECIFIED"
    }
  }
}
```

This resource represents the configuration of a transfer job that runs periodically.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|string(google-datetime)|false|read-only|Output only. The time that the transfer job was created.|
|deletionTime|string(google-datetime)|false|read-only|Output only. The time that the transfer job was deleted.|
|description|string|false|none|A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded.|
|eventStream|[EventStream](#schemaeventstream)|false|none|Specifies the event stream for the transfer job for event-driven transfers. When EventStream is specified, the Schedule fields are ignored.|
|lastModificationTime|string(google-datetime)|false|read-only|Output only. The time that the transfer job was last modified.|
|latestOperationName|string|false|none|The name of the most recently started TransferOperation of this JobConfig. Present if a TransferOperation has been created for this JobConfig.|
|loggingConfig|[LoggingConfig](#schemaloggingconfig)|false|none|Logging configuration.|
|name|string|false|none|A unique name (within the transfer project) assigned when the job is created. If this field is empty in a CreateTransferJobRequest, Storage Transfer Service assigns a unique name. Otherwise, the specified name is used as the unique name for this job. If the specified name is in use by a job, the creation request fails with an ALREADY_EXISTS error. This name must start with `"transferJobs/"` prefix and end with a letter or a number, and should be no more than 128 characters. For transfers involving PosixFilesystem, this name must start with `transferJobs/OPI` specifically. For all other transfer types, this name must not start with `transferJobs/OPI`. Non-PosixFilesystem example: `"transferJobs/^(?!OPI)[A-Za-z0-9-._~]*[A-Za-z0-9]$"` PosixFilesystem example: `"transferJobs/OPI^[A-Za-z0-9-._~]*[A-Za-z0-9]$"` Applications must not rely on the enforcement of naming requirements involving OPI. Invalid job names fail with an INVALID_ARGUMENT error.|
|notificationConfig|[NotificationConfig](#schemanotificationconfig)|false|none|Notification configuration. This is not supported for transfers involving PosixFilesystem.|
|projectId|string|false|none|The ID of the Google Cloud project that owns the job.|
|schedule|[Schedule](#schemaschedule)|false|none|Specifies schedule for the transfer job. This is an optional field. When the field is not set, the job never executes a transfer, unless you invoke RunTransferJob or update the job to have a non-empty schedule.|
|status|string|false|none|Status of the job. This value MUST be specified for `CreateTransferJobRequests`. **Note:** The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.|
|transferSpec|[TransferSpec](#schematransferspec)|false|none|Transfer specification.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNSPECIFIED|
|status|ENABLED|
|status|DISABLED|
|status|DELETED|

<h2 id="tocS_TransferManifest">TransferManifest</h2>
<!-- backwards compatibility -->
<a id="schematransfermanifest"></a>
<a id="schema_TransferManifest"></a>
<a id="tocStransfermanifest"></a>
<a id="tocstransfermanifest"></a>

```json
{
  "location": "string"
}
```

Specifies where the manifest is located.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|none|Specifies the path to the manifest in Cloud Storage. The Google-managed service account for the transfer must have `storage.objects.get` permission for this object. An example path is `gs://bucket_name/path/manifest.csv`.|

<h2 id="tocS_TransferOperation">TransferOperation</h2>
<!-- backwards compatibility -->
<a id="schematransferoperation"></a>
<a id="schema_TransferOperation"></a>
<a id="tocStransferoperation"></a>
<a id="tocstransferoperation"></a>

```json
{
  "counters": {
    "bytesCopiedToSink": "string",
    "bytesDeletedFromSink": "string",
    "bytesDeletedFromSource": "string",
    "bytesFailedToDeleteFromSink": "string",
    "bytesFoundFromSource": "string",
    "bytesFoundOnlyFromSink": "string",
    "bytesFromSourceFailed": "string",
    "bytesFromSourceSkippedBySync": "string",
    "directoriesFailedToListFromSource": "string",
    "directoriesFoundFromSource": "string",
    "directoriesSuccessfullyListedFromSource": "string",
    "intermediateObjectsCleanedUp": "string",
    "intermediateObjectsFailedCleanedUp": "string",
    "objectsCopiedToSink": "string",
    "objectsDeletedFromSink": "string",
    "objectsDeletedFromSource": "string",
    "objectsFailedToDeleteFromSink": "string",
    "objectsFoundFromSource": "string",
    "objectsFoundOnlyFromSink": "string",
    "objectsFromSourceFailed": "string",
    "objectsFromSourceSkippedBySync": "string"
  },
  "endTime": "string",
  "errorBreakdowns": [
    {
      "errorCode": "OK",
      "errorCount": "string",
      "errorLogEntries": [
        {
          "errorDetails": [
            "string"
          ],
          "url": "string"
        }
      ]
    }
  ],
  "loggingConfig": {
    "enableOnpremGcsTransferLogs": true,
    "logActionStates": [
      "LOGGABLE_ACTION_STATE_UNSPECIFIED"
    ],
    "logActions": [
      "LOGGABLE_ACTION_UNSPECIFIED"
    ]
  },
  "name": "string",
  "notificationConfig": {
    "eventTypes": [
      "EVENT_TYPE_UNSPECIFIED"
    ],
    "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
    "pubsubTopic": "string"
  },
  "projectId": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "transferJobName": "string",
  "transferSpec": {
    "awsS3CompatibleDataSource": {
      "bucketName": "string",
      "endpoint": "string",
      "path": "string",
      "region": "string",
      "s3Metadata": {
        "authMethod": "AUTH_METHOD_UNSPECIFIED",
        "listApi": "LIST_API_UNSPECIFIED",
        "protocol": "NETWORK_PROTOCOL_UNSPECIFIED",
        "requestModel": "REQUEST_MODEL_UNSPECIFIED"
      }
    },
    "awsS3DataSource": {
      "awsAccessKey": {
        "accessKeyId": "string",
        "secretAccessKey": "string"
      },
      "bucketName": "string",
      "path": "string",
      "roleArn": "string"
    },
    "azureBlobStorageDataSource": {
      "azureCredentials": {
        "sasToken": "string"
      },
      "container": "string",
      "path": "string",
      "storageAccount": "string"
    },
    "gcsDataSink": {
      "bucketName": "string",
      "path": "string"
    },
    "gcsDataSource": {
      "bucketName": "string",
      "path": "string"
    },
    "gcsIntermediateDataLocation": {
      "bucketName": "string",
      "path": "string"
    },
    "httpDataSource": {
      "listUrl": "string"
    },
    "objectConditions": {
      "excludePrefixes": [
        "string"
      ],
      "includePrefixes": [
        "string"
      ],
      "lastModifiedBefore": "string",
      "lastModifiedSince": "string",
      "maxTimeElapsedSinceLastModification": "string",
      "minTimeElapsedSinceLastModification": "string"
    },
    "posixDataSink": {
      "rootDirectory": "string"
    },
    "posixDataSource": {
      "rootDirectory": "string"
    },
    "sinkAgentPoolName": "string",
    "sourceAgentPoolName": "string",
    "transferManifest": {
      "location": "string"
    },
    "transferOptions": {
      "deleteObjectsFromSourceAfterTransfer": true,
      "deleteObjectsUniqueInSink": true,
      "metadataOptions": {
        "acl": "ACL_UNSPECIFIED",
        "gid": "GID_UNSPECIFIED",
        "kmsKey": "KMS_KEY_UNSPECIFIED",
        "mode": "MODE_UNSPECIFIED",
        "storageClass": "STORAGE_CLASS_UNSPECIFIED",
        "symlink": "SYMLINK_UNSPECIFIED",
        "temporaryHold": "TEMPORARY_HOLD_UNSPECIFIED",
        "timeCreated": "TIME_CREATED_UNSPECIFIED",
        "uid": "UID_UNSPECIFIED"
      },
      "overwriteObjectsAlreadyExistingInSink": true,
      "overwriteWhen": "OVERWRITE_WHEN_UNSPECIFIED"
    }
  }
}
```

A description of the execution of a transfer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counters|[TransferCounters](#schematransfercounters)|false|none|Information about the progress of the transfer operation.|
|endTime|string(google-datetime)|false|none|End time of this transfer execution.|
|errorBreakdowns|[[ErrorSummary](#schemaerrorsummary)]|false|none|Summarizes errors encountered with sample error log entries.|
|loggingConfig|[LoggingConfig](#schemaloggingconfig)|false|none|Cloud Logging configuration.|
|name|string|false|none|A globally unique ID assigned by the system.|
|notificationConfig|[NotificationConfig](#schemanotificationconfig)|false|none|Notification configuration.|
|projectId|string|false|none|The ID of the Google Cloud project that owns the operation.|
|startTime|string(google-datetime)|false|none|Start time of this transfer execution.|
|status|string|false|none|Status of the transfer operation.|
|transferJobName|string|false|none|The name of the transfer job that triggers this transfer operation.|
|transferSpec|[TransferSpec](#schematransferspec)|false|none|Transfer specification.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNSPECIFIED|
|status|IN_PROGRESS|
|status|PAUSED|
|status|SUCCESS|
|status|FAILED|
|status|ABORTED|
|status|QUEUED|
|status|SUSPENDING|

<h2 id="tocS_TransferOptions">TransferOptions</h2>
<!-- backwards compatibility -->
<a id="schematransferoptions"></a>
<a id="schema_TransferOptions"></a>
<a id="tocStransferoptions"></a>
<a id="tocstransferoptions"></a>

```json
{
  "deleteObjectsFromSourceAfterTransfer": true,
  "deleteObjectsUniqueInSink": true,
  "metadataOptions": {
    "acl": "ACL_UNSPECIFIED",
    "gid": "GID_UNSPECIFIED",
    "kmsKey": "KMS_KEY_UNSPECIFIED",
    "mode": "MODE_UNSPECIFIED",
    "storageClass": "STORAGE_CLASS_UNSPECIFIED",
    "symlink": "SYMLINK_UNSPECIFIED",
    "temporaryHold": "TEMPORARY_HOLD_UNSPECIFIED",
    "timeCreated": "TIME_CREATED_UNSPECIFIED",
    "uid": "UID_UNSPECIFIED"
  },
  "overwriteObjectsAlreadyExistingInSink": true,
  "overwriteWhen": "OVERWRITE_WHEN_UNSPECIFIED"
}
```

TransferOptions define the actions to be performed on objects in a transfer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleteObjectsFromSourceAfterTransfer|boolean|false|none|Whether objects should be deleted from the source after they are transferred to the sink. **Note:** This option and delete_objects_unique_in_sink are mutually exclusive.|
|deleteObjectsUniqueInSink|boolean|false|none|Whether objects that exist only in the sink should be deleted. **Note:** This option and delete_objects_from_source_after_transfer are mutually exclusive.|
|metadataOptions|[MetadataOptions](#schemametadataoptions)|false|none|Represents the selected metadata options for a transfer job.|
|overwriteObjectsAlreadyExistingInSink|boolean|false|none|When to overwrite objects that already exist in the sink. The default is that only objects that are different from the source are ovewritten. If true, all objects in the sink whose name matches an object in the source are overwritten with the source object.|
|overwriteWhen|string|false|none|When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwrite_objects_already_existing_in_sink.|

#### Enumerated Values

|Property|Value|
|---|---|
|overwriteWhen|OVERWRITE_WHEN_UNSPECIFIED|
|overwriteWhen|DIFFERENT|
|overwriteWhen|NEVER|
|overwriteWhen|ALWAYS|

<h2 id="tocS_TransferSpec">TransferSpec</h2>
<!-- backwards compatibility -->
<a id="schematransferspec"></a>
<a id="schema_TransferSpec"></a>
<a id="tocStransferspec"></a>
<a id="tocstransferspec"></a>

```json
{
  "awsS3CompatibleDataSource": {
    "bucketName": "string",
    "endpoint": "string",
    "path": "string",
    "region": "string",
    "s3Metadata": {
      "authMethod": "AUTH_METHOD_UNSPECIFIED",
      "listApi": "LIST_API_UNSPECIFIED",
      "protocol": "NETWORK_PROTOCOL_UNSPECIFIED",
      "requestModel": "REQUEST_MODEL_UNSPECIFIED"
    }
  },
  "awsS3DataSource": {
    "awsAccessKey": {
      "accessKeyId": "string",
      "secretAccessKey": "string"
    },
    "bucketName": "string",
    "path": "string",
    "roleArn": "string"
  },
  "azureBlobStorageDataSource": {
    "azureCredentials": {
      "sasToken": "string"
    },
    "container": "string",
    "path": "string",
    "storageAccount": "string"
  },
  "gcsDataSink": {
    "bucketName": "string",
    "path": "string"
  },
  "gcsDataSource": {
    "bucketName": "string",
    "path": "string"
  },
  "gcsIntermediateDataLocation": {
    "bucketName": "string",
    "path": "string"
  },
  "httpDataSource": {
    "listUrl": "string"
  },
  "objectConditions": {
    "excludePrefixes": [
      "string"
    ],
    "includePrefixes": [
      "string"
    ],
    "lastModifiedBefore": "string",
    "lastModifiedSince": "string",
    "maxTimeElapsedSinceLastModification": "string",
    "minTimeElapsedSinceLastModification": "string"
  },
  "posixDataSink": {
    "rootDirectory": "string"
  },
  "posixDataSource": {
    "rootDirectory": "string"
  },
  "sinkAgentPoolName": "string",
  "sourceAgentPoolName": "string",
  "transferManifest": {
    "location": "string"
  },
  "transferOptions": {
    "deleteObjectsFromSourceAfterTransfer": true,
    "deleteObjectsUniqueInSink": true,
    "metadataOptions": {
      "acl": "ACL_UNSPECIFIED",
      "gid": "GID_UNSPECIFIED",
      "kmsKey": "KMS_KEY_UNSPECIFIED",
      "mode": "MODE_UNSPECIFIED",
      "storageClass": "STORAGE_CLASS_UNSPECIFIED",
      "symlink": "SYMLINK_UNSPECIFIED",
      "temporaryHold": "TEMPORARY_HOLD_UNSPECIFIED",
      "timeCreated": "TIME_CREATED_UNSPECIFIED",
      "uid": "UID_UNSPECIFIED"
    },
    "overwriteObjectsAlreadyExistingInSink": true,
    "overwriteWhen": "OVERWRITE_WHEN_UNSPECIFIED"
  }
}
```

Configuration for running a transfer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsS3CompatibleDataSource|[AwsS3CompatibleData](#schemaawss3compatibledata)|false|none|An AWS S3 compatible data source.|
|awsS3DataSource|[AwsS3Data](#schemaawss3data)|false|none|An AWS S3 data source.|
|azureBlobStorageDataSource|[AzureBlobStorageData](#schemaazureblobstoragedata)|false|none|An Azure Blob Storage data source.|
|gcsDataSink|[GcsData](#schemagcsdata)|false|none|A Cloud Storage data sink.|
|gcsDataSource|[GcsData](#schemagcsdata)|false|none|A Cloud Storage data source.|
|gcsIntermediateDataLocation|[GcsData](#schemagcsdata)|false|none|Cloud Storage intermediate data location.|
|httpDataSource|[HttpData](#schemahttpdata)|false|none|An HTTP URL data source.|
|objectConditions|[ObjectConditions](#schemaobjectconditions)|false|none|Only objects that satisfy these object conditions are included in the set of data source and data sink objects. Object conditions based on objects' "last modification time" do not exclude objects in a data sink.|
|posixDataSink|[PosixFilesystem](#schemaposixfilesystem)|false|none|A POSIX Filesystem data sink.|
|posixDataSource|[PosixFilesystem](#schemaposixfilesystem)|false|none|A POSIX Filesystem data source.|
|sinkAgentPoolName|string|false|none|Specifies the agent pool name associated with the posix data sink. When unspecified, the default name is used.|
|sourceAgentPoolName|string|false|none|Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.|
|transferManifest|[TransferManifest](#schematransfermanifest)|false|none|A manifest file provides a list of objects to be transferred from the data source. This field points to the location of the manifest file. Otherwise, the entire source bucket is used. ObjectConditions still apply.|
|transferOptions|[TransferOptions](#schematransferoptions)|false|none|If the option delete_objects_unique_in_sink is `true` and time-based object conditions such as 'last modification time' are specified, the request fails with an INVALID_ARGUMENT error.|

<h2 id="tocS_UpdateTransferJobRequest">UpdateTransferJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetransferjobrequest"></a>
<a id="schema_UpdateTransferJobRequest"></a>
<a id="tocSupdatetransferjobrequest"></a>
<a id="tocsupdatetransferjobrequest"></a>

```json
{
  "projectId": "string",
  "transferJob": {
    "creationTime": "string",
    "deletionTime": "string",
    "description": "string",
    "eventStream": {
      "eventStreamExpirationTime": "string",
      "eventStreamStartTime": "string",
      "name": "string"
    },
    "lastModificationTime": "string",
    "latestOperationName": "string",
    "loggingConfig": {
      "enableOnpremGcsTransferLogs": true,
      "logActionStates": [
        "LOGGABLE_ACTION_STATE_UNSPECIFIED"
      ],
      "logActions": [
        "LOGGABLE_ACTION_UNSPECIFIED"
      ]
    },
    "name": "string",
    "notificationConfig": {
      "eventTypes": [
        "EVENT_TYPE_UNSPECIFIED"
      ],
      "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
      "pubsubTopic": "string"
    },
    "projectId": "string",
    "schedule": {
      "endTimeOfDay": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "repeatInterval": "string",
      "scheduleEndDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "scheduleStartDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startTimeOfDay": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    },
    "status": "STATUS_UNSPECIFIED",
    "transferSpec": {
      "awsS3CompatibleDataSource": {
        "bucketName": "string",
        "endpoint": "string",
        "path": "string",
        "region": "string",
        "s3Metadata": {
          "authMethod": "AUTH_METHOD_UNSPECIFIED",
          "listApi": "LIST_API_UNSPECIFIED",
          "protocol": "NETWORK_PROTOCOL_UNSPECIFIED",
          "requestModel": "REQUEST_MODEL_UNSPECIFIED"
        }
      },
      "awsS3DataSource": {
        "awsAccessKey": {
          "accessKeyId": "string",
          "secretAccessKey": "string"
        },
        "bucketName": "string",
        "path": "string",
        "roleArn": "string"
      },
      "azureBlobStorageDataSource": {
        "azureCredentials": {
          "sasToken": "string"
        },
        "container": "string",
        "path": "string",
        "storageAccount": "string"
      },
      "gcsDataSink": {
        "bucketName": "string",
        "path": "string"
      },
      "gcsDataSource": {
        "bucketName": "string",
        "path": "string"
      },
      "gcsIntermediateDataLocation": {
        "bucketName": "string",
        "path": "string"
      },
      "httpDataSource": {
        "listUrl": "string"
      },
      "objectConditions": {
        "excludePrefixes": [
          "string"
        ],
        "includePrefixes": [
          "string"
        ],
        "lastModifiedBefore": "string",
        "lastModifiedSince": "string",
        "maxTimeElapsedSinceLastModification": "string",
        "minTimeElapsedSinceLastModification": "string"
      },
      "posixDataSink": {
        "rootDirectory": "string"
      },
      "posixDataSource": {
        "rootDirectory": "string"
      },
      "sinkAgentPoolName": "string",
      "sourceAgentPoolName": "string",
      "transferManifest": {
        "location": "string"
      },
      "transferOptions": {
        "deleteObjectsFromSourceAfterTransfer": true,
        "deleteObjectsUniqueInSink": true,
        "metadataOptions": {
          "acl": "ACL_UNSPECIFIED",
          "gid": "GID_UNSPECIFIED",
          "kmsKey": "KMS_KEY_UNSPECIFIED",
          "mode": "MODE_UNSPECIFIED",
          "storageClass": "STORAGE_CLASS_UNSPECIFIED",
          "symlink": "SYMLINK_UNSPECIFIED",
          "temporaryHold": "TEMPORARY_HOLD_UNSPECIFIED",
          "timeCreated": "TIME_CREATED_UNSPECIFIED",
          "uid": "UID_UNSPECIFIED"
        },
        "overwriteObjectsAlreadyExistingInSink": true,
        "overwriteWhen": "OVERWRITE_WHEN_UNSPECIFIED"
      }
    }
  },
  "updateTransferJobFieldMask": "string"
}
```

Request passed to UpdateTransferJob.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectId|string|false|none|Required. The ID of the Google Cloud project that owns the job.|
|transferJob|[TransferJob](#schematransferjob)|false|none|Required. The job to update. `transferJob` is expected to specify one or more of five fields: description, transfer_spec, notification_config, logging_config, and status. An `UpdateTransferJobRequest` that specifies other fields are rejected with the error INVALID_ARGUMENT. Updating a job status to DELETED requires `storagetransfer.jobs.delete` permission.|
|updateTransferJobFieldMask|string(google-fieldmask)|false|none|The field mask of the fields in `transferJob` that are to be updated in this request. Fields in `transferJob` that can be updated are: description, transfer_spec, notification_config, logging_config, and status. To update the `transfer_spec` of the job, a complete transfer specification must be provided. An incomplete specification missing any required fields is rejected with the error INVALID_ARGUMENT.|
