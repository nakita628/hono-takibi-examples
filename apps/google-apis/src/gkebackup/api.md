<h1 id="backup-for-gke-api">Backup for GKE API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Backup for GKE is a managed Kubernetes workload backup and restore service for GKE clusters.

Base URLs:

* <a href="https://gkebackup.googleapis.com/">https://gkebackup.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke">External documentation</a>

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

<h1 id="backup-for-gke-api-projects">projects</h1>

## gkebackup.projects.locations.restorePlans.restores.volumeRestores.get

<a id="opIdgkebackup.projects.locations.restorePlans.restores.volumeRestores.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Retrieve the details of a single VolumeRestore.

<h3 id="gkebackupprojectslocationsrestoreplansrestoresvolumerestoresget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Full name of the VolumeRestore resource. Format: `projects/*/locations/*/restorePlans/*/restores/*/volumeRestores/*`|
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
  "completeTime": "string",
  "createTime": "string",
  "etag": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "stateMessage": "string",
  "targetPvc": {
    "name": "string",
    "namespace": "string"
  },
  "uid": "string",
  "updateTime": "string",
  "volumeBackup": "string",
  "volumeHandle": "string",
  "volumeType": "VOLUME_TYPE_UNSPECIFIED"
}
```

<h3 id="gkebackupprojectslocationsrestoreplansrestoresvolumerestoresget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VolumeRestore](#schemavolumerestore)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.restorePlans.restores.delete

<a id="opIdgkebackup.projects.locations.restorePlans.restores.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes an existing Restore.

<h3 id="gkebackupprojectslocationsrestoreplansrestoresdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Full name of the Restore Format: `projects/*/locations/*/restorePlans/*/restores/*`|
|etag|query|string|false|If provided, this value must match the current value of the target Restore's etag field or the request is rejected.|
|force|query|boolean|false|If set to true, any VolumeRestores below this restore will also be deleted. Otherwise, the request will only succeed if the restore has no VolumeRestores.|
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

<h3 id="gkebackupprojectslocationsrestoreplansrestoresdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.restorePlans.restores.patch

<a id="opIdgkebackup.projects.locations.restorePlans.restores.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backup": "string",
    "description": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PATCH /v1/{name}`

Update a Restore.

> Body parameter

```json
{
  "backup": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="gkebackupprojectslocationsrestoreplansrestorespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The full name of the Restore resource. Format: `projects/*/locations/*/restorePlans/*/restores/*`|
|updateMask|query|string|false|This is used to specify the fields to be overwritten in the Restore targeted for update. The values for each of these updated fields will be taken from the `restore` provided with this request. Field names are relative to the root of the resource. If no `update_mask` is provided, all fields in `restore` will be written to the target Restore resource. Note that OUTPUT_ONLY and IMMUTABLE fields in `restore` are ignored and are not used to update the target Restore.|
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
|body|body|[Restore](#schemarestore)|false|none|
|» backup|body|string|false|Required. Immutable. A reference to the Backup used as the source from which this Restore will restore. Note that this Backup must be a sub-resource of the RestorePlan's backup_plan. Format: `projects/*/locations/*/backupPlans/*/backups/*`.|
|» description|body|string|false|User specified descriptive string for this Restore.|
|» labels|body|object|false|A set of custom labels supplied by user.|
|» » **additionalProperties**|body|string|false|none|

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

<h3 id="gkebackupprojectslocationsrestoreplansrestorespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.list

<a id="opIdgkebackup.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="gkebackupprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="gkebackupprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.operations.list

<a id="opIdgkebackup.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="gkebackupprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="gkebackupprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningListOperationsResponse](#schemagooglelongrunninglistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.deleteOperations

<a id="opIdgkebackup.projects.locations.deleteOperations"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}/operations`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="gkebackupprojectslocationsdeleteoperations-parameters">Parameters</h3>

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

<h3 id="gkebackupprojectslocationsdeleteoperations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.operations.cancel

<a id="opIdgkebackup.projects.locations.operations.cancel"></a>

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

<h3 id="gkebackupprojectslocationsoperationscancel-parameters">Parameters</h3>

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
|body|body|[GoogleLongrunningCancelOperationRequest](#schemagooglelongrunningcanceloperationrequest)|false|none|

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

<h3 id="gkebackupprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.backupPlans.list

<a id="opIdgkebackup.projects.locations.backupPlans.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/backupPlans \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/backupPlans`

Lists BackupPlans in a given location.

<h3 id="gkebackupprojectslocationsbackupplanslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The location that contains the BackupPlans to list. Format: `projects/*/locations/*`|
|filter|query|string|false|Field match expression used to filter the results.|
|orderBy|query|string|false|Field by which to sort the results.|
|pageSize|query|integer|false|The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may inclue a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.|
|pageToken|query|string|false|The value of next_page_token received from a previous `ListBackupPlans` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackupPlans` must match the call that provided the page token.|
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
  "backupPlans": [
    {
      "backupConfig": {
        "allNamespaces": true,
        "encryptionKey": {
          "gcpKmsEncryptionKey": "string"
        },
        "includeSecrets": true,
        "includeVolumeData": true,
        "selectedApplications": {
          "namespacedNames": [
            {
              "name": "string",
              "namespace": "string"
            }
          ]
        },
        "selectedNamespaces": {
          "namespaces": [
            "string"
          ]
        }
      },
      "backupSchedule": {
        "cronSchedule": "string",
        "paused": true
      },
      "cluster": "string",
      "createTime": "string",
      "deactivated": true,
      "description": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "protectedPodCount": 0,
      "retentionPolicy": {
        "backupDeleteLockDays": 0,
        "backupRetainDays": 0,
        "locked": true
      },
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

<h3 id="gkebackupprojectslocationsbackupplanslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBackupPlansResponse](#schemalistbackupplansresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.backupPlans.create

<a id="opIdgkebackup.projects.locations.backupPlans.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/backupPlans \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backupConfig": {
      "allNamespaces": true,
      "encryptionKey": {
        "gcpKmsEncryptionKey": "string"
      },
      "includeSecrets": true,
      "includeVolumeData": true,
      "selectedApplications": {
        "namespacedNames": [
          {
            "name": "string",
            "namespace": "string"
          }
        ]
      },
      "selectedNamespaces": {
        "namespaces": [
          "string"
        ]
      }
    },
    "backupSchedule": {
      "cronSchedule": "string",
      "paused": true
    },
    "cluster": "string",
    "deactivated": true,
    "description": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "retentionPolicy": {
      "backupDeleteLockDays": 0,
      "backupRetainDays": 0,
      "locked": true
    }
  }'
```

`POST /v1/{parent}/backupPlans`

Creates a new BackupPlan in a given location.

> Body parameter

```json
{
  "backupConfig": {
    "allNamespaces": true,
    "encryptionKey": {
      "gcpKmsEncryptionKey": "string"
    },
    "includeSecrets": true,
    "includeVolumeData": true,
    "selectedApplications": {
      "namespacedNames": [
        {
          "name": "string",
          "namespace": "string"
        }
      ]
    },
    "selectedNamespaces": {
      "namespaces": [
        "string"
      ]
    }
  },
  "backupSchedule": {
    "cronSchedule": "string",
    "paused": true
  },
  "cluster": "string",
  "deactivated": true,
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "retentionPolicy": {
    "backupDeleteLockDays": 0,
    "backupRetainDays": 0,
    "locked": true
  }
}
```

<h3 id="gkebackupprojectslocationsbackupplanscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The location within which to create the BackupPlan. Format: `projects/*/locations/*`|
|backupPlanId|query|string|false|Required. The client-provided short name for the BackupPlan resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of BackupPlans in this location|
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
|body|body|[BackupPlan](#schemabackupplan)|false|none|
|» backupConfig|body|[BackupConfig](#schemabackupconfig)|false|Defines the configuration of Backups created via this BackupPlan.|
|» backupSchedule|body|[Schedule](#schemaschedule)|false|Defines a schedule for automatic Backup creation via this BackupPlan.|
|» cluster|body|string|false|Required. Immutable. The source cluster from which Backups will be created via this BackupPlan. Valid formats: - `projects/*/locations/*/clusters/*` - `projects/*/zones/*/clusters/*`|
|» deactivated|body|boolean|false|This flag indicates whether this BackupPlan has been deactivated. Setting this field to True locks the BackupPlan such that no further updates will be allowed (except deletes), including the deactivated field itself. It also prevents any new Backups from being created via this BackupPlan (including scheduled Backups). Default: False|
|» description|body|string|false|User specified descriptive string for this BackupPlan.|
|» labels|body|object|false|A set of custom labels supplied by user.|
|» » **additionalProperties**|body|string|false|none|
|» retentionPolicy|body|[RetentionPolicy](#schemaretentionpolicy)|false|RetentionPolicy governs lifecycle of Backups created under this plan.|

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

<h3 id="gkebackupprojectslocationsbackupplanscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.backupPlans.backups.list

<a id="opIdgkebackup.projects.locations.backupPlans.backups.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/backups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/backups`

Lists the Backups for a given BackupPlan.

<h3 id="gkebackupprojectslocationsbackupplansbackupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The BackupPlan that contains the Backups to list. Format: `projects/*/locations/*/backupPlans/*`|
|filter|query|string|false|Field match expression used to filter the results.|
|orderBy|query|string|false|Field by which to sort the results.|
|pageSize|query|integer|false|The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may inclue a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.|
|pageToken|query|string|false|The value of next_page_token received from a previous `ListBackups` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackups` must match the call that provided the page token.|
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
  "backups": [
    {
      "allNamespaces": true,
      "clusterMetadata": {
        "anthosVersion": "string",
        "backupCrdVersions": {
          "property1": "string",
          "property2": "string"
        },
        "cluster": "string",
        "gkeVersion": "string",
        "k8sVersion": "string"
      },
      "completeTime": "string",
      "configBackupSizeBytes": "string",
      "containsSecrets": true,
      "containsVolumeData": true,
      "createTime": "string",
      "deleteLockDays": 0,
      "deleteLockExpireTime": "string",
      "description": "string",
      "encryptionKey": {
        "gcpKmsEncryptionKey": "string"
      },
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "manual": true,
      "name": "string",
      "podCount": 0,
      "resourceCount": 0,
      "retainDays": 0,
      "retainExpireTime": "string",
      "selectedApplications": {
        "namespacedNames": [
          {
            "name": "string",
            "namespace": "string"
          }
        ]
      },
      "selectedNamespaces": {
        "namespaces": [
          "string"
        ]
      },
      "sizeBytes": "string",
      "state": "STATE_UNSPECIFIED",
      "stateReason": "string",
      "uid": "string",
      "updateTime": "string",
      "volumeCount": 0
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="gkebackupprojectslocationsbackupplansbackupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBackupsResponse](#schemalistbackupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.backupPlans.backups.create

<a id="opIdgkebackup.projects.locations.backupPlans.backups.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/backups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deleteLockDays": 0,
    "description": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "retainDays": 0
  }'
```

`POST /v1/{parent}/backups`

Creates a Backup for the given BackupPlan.

> Body parameter

```json
{
  "deleteLockDays": 0,
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "retainDays": 0
}
```

<h3 id="gkebackupprojectslocationsbackupplansbackupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The BackupPlan within which to create the Backup. Format: `projects/*/locations/*/backupPlans/*`|
|backupId|query|string|false|The client-provided short name for the Backup resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of Backups in this BackupPlan|
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
|body|body|[Backup](#schemabackup)|false|none|
|» deleteLockDays|body|integer(int32)|false|Minimum age for this Backup (in days). If this field is set to a non-zero value, the Backup will be "locked" against deletion (either manual or automatic deletion) for the number of days provided (measured from the creation time of the Backup). MUST be an integer value between 0-90 (inclusive). Defaults to parent BackupPlan's backup_delete_lock_days setting and may only be increased (either at creation time or in a subsequent update).|
|» description|body|string|false|User specified descriptive string for this Backup.|
|» labels|body|object|false|A set of custom labels supplied by user.|
|» » **additionalProperties**|body|string|false|none|
|» retainDays|body|integer(int32)|false|The age (in days) after which this Backup will be automatically deleted. Must be an integer value >= 0: - If 0, no automatic deletion will occur for this Backup. - If not 0, this must be >= delete_lock_days and <= 365. Once a Backup is created, this value may only be increased. Defaults to the parent BackupPlan's backup_retain_days value.|

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

<h3 id="gkebackupprojectslocationsbackupplansbackupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.restorePlans.list

<a id="opIdgkebackup.projects.locations.restorePlans.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/restorePlans \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/restorePlans`

Lists RestorePlans in a given location.

<h3 id="gkebackupprojectslocationsrestoreplanslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The location that contains the RestorePlans to list. Format: `projects/*/locations/*`|
|filter|query|string|false|Field match expression used to filter the results.|
|orderBy|query|string|false|Field by which to sort the results.|
|pageSize|query|integer|false|The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may inclue a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.|
|pageToken|query|string|false|The value of next_page_token received from a previous `ListRestorePlans` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListRestorePlans` must match the call that provided the page token.|
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
  "restorePlans": [
    {
      "backupPlan": "string",
      "cluster": "string",
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "restoreConfig": {
        "allNamespaces": true,
        "clusterResourceConflictPolicy": "CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED",
        "clusterResourceRestoreScope": {
          "selectedGroupKinds": [
            {
              "resourceGroup": "string",
              "resourceKind": "string"
            }
          ]
        },
        "namespacedResourceRestoreMode": "NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED",
        "selectedApplications": {
          "namespacedNames": [
            {
              "name": "string",
              "namespace": "string"
            }
          ]
        },
        "selectedNamespaces": {
          "namespaces": [
            "string"
          ]
        },
        "substitutionRules": [
          {
            "newValue": "string",
            "originalValuePattern": "string",
            "targetGroupKinds": [
              {
                "resourceGroup": "string",
                "resourceKind": "string"
              }
            ],
            "targetJsonPath": "string",
            "targetNamespaces": [
              "string"
            ]
          }
        ],
        "volumeDataRestorePolicy": "VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED"
      },
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="gkebackupprojectslocationsrestoreplanslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListRestorePlansResponse](#schemalistrestoreplansresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.restorePlans.create

<a id="opIdgkebackup.projects.locations.restorePlans.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/restorePlans \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backupPlan": "string",
    "cluster": "string",
    "description": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "restoreConfig": {
      "allNamespaces": true,
      "clusterResourceConflictPolicy": "CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED",
      "clusterResourceRestoreScope": {
        "selectedGroupKinds": [
          {
            "resourceGroup": "string",
            "resourceKind": "string"
          }
        ]
      },
      "namespacedResourceRestoreMode": "NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED",
      "selectedApplications": {
        "namespacedNames": [
          {
            "name": "string",
            "namespace": "string"
          }
        ]
      },
      "selectedNamespaces": {
        "namespaces": [
          "string"
        ]
      },
      "substitutionRules": [
        {
          "newValue": "string",
          "originalValuePattern": "string",
          "targetGroupKinds": [
            {
              "resourceGroup": "string",
              "resourceKind": "string"
            }
          ],
          "targetJsonPath": "string",
          "targetNamespaces": [
            "string"
          ]
        }
      ],
      "volumeDataRestorePolicy": "VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED"
    }
  }'
```

`POST /v1/{parent}/restorePlans`

Creates a new RestorePlan in a given location.

> Body parameter

```json
{
  "backupPlan": "string",
  "cluster": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "restoreConfig": {
    "allNamespaces": true,
    "clusterResourceConflictPolicy": "CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED",
    "clusterResourceRestoreScope": {
      "selectedGroupKinds": [
        {
          "resourceGroup": "string",
          "resourceKind": "string"
        }
      ]
    },
    "namespacedResourceRestoreMode": "NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED",
    "selectedApplications": {
      "namespacedNames": [
        {
          "name": "string",
          "namespace": "string"
        }
      ]
    },
    "selectedNamespaces": {
      "namespaces": [
        "string"
      ]
    },
    "substitutionRules": [
      {
        "newValue": "string",
        "originalValuePattern": "string",
        "targetGroupKinds": [
          {
            "resourceGroup": "string",
            "resourceKind": "string"
          }
        ],
        "targetJsonPath": "string",
        "targetNamespaces": [
          "string"
        ]
      }
    ],
    "volumeDataRestorePolicy": "VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED"
  }
}
```

<h3 id="gkebackupprojectslocationsrestoreplanscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The location within which to create the RestorePlan. Format: `projects/*/locations/*`|
|restorePlanId|query|string|false|Required. The client-provided short name for the RestorePlan resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of RestorePlans in this location|
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
|body|body|[RestorePlan](#schemarestoreplan)|false|none|
|» backupPlan|body|string|false|Required. Immutable. A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan. Format: `projects/*/locations/*/backupPlans/*`.|
|» cluster|body|string|false|Required. Immutable. The target cluster into which Restores created via this RestorePlan will restore data. NOTE: the cluster's region must be the same as the RestorePlan. Valid formats: - `projects/*/locations/*/clusters/*` - `projects/*/zones/*/clusters/*`|
|» description|body|string|false|User specified descriptive string for this RestorePlan.|
|» labels|body|object|false|A set of custom labels supplied by user.|
|» » **additionalProperties**|body|string|false|none|
|» restoreConfig|body|[RestoreConfig](#schemarestoreconfig)|false|Required. Configuration of Restores created via this RestorePlan.|

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

<h3 id="gkebackupprojectslocationsrestoreplanscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.restorePlans.restores.list

<a id="opIdgkebackup.projects.locations.restorePlans.restores.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/restores \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/restores`

Lists the Restores for a given RestorePlan.

<h3 id="gkebackupprojectslocationsrestoreplansrestoreslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The RestorePlan that contains the Restores to list. Format: `projects/*/locations/*/restorePlans/*`|
|filter|query|string|false|Field match expression used to filter the results.|
|orderBy|query|string|false|Field by which to sort the results.|
|pageSize|query|integer|false|The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may inclue a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.|
|pageToken|query|string|false|The value of next_page_token received from a previous `ListRestores` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListRestores` must match the call that provided the page token.|
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
  "restores": [
    {
      "backup": "string",
      "cluster": "string",
      "completeTime": "string",
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "resourcesExcludedCount": 0,
      "resourcesFailedCount": 0,
      "resourcesRestoredCount": 0,
      "restoreConfig": {
        "allNamespaces": true,
        "clusterResourceConflictPolicy": "CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED",
        "clusterResourceRestoreScope": {
          "selectedGroupKinds": [
            {
              "resourceGroup": "string",
              "resourceKind": "string"
            }
          ]
        },
        "namespacedResourceRestoreMode": "NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED",
        "selectedApplications": {
          "namespacedNames": [
            {
              "name": "string",
              "namespace": "string"
            }
          ]
        },
        "selectedNamespaces": {
          "namespaces": [
            "string"
          ]
        },
        "substitutionRules": [
          {
            "newValue": "string",
            "originalValuePattern": "string",
            "targetGroupKinds": [
              {
                "resourceGroup": "string",
                "resourceKind": "string"
              }
            ],
            "targetJsonPath": "string",
            "targetNamespaces": [
              "string"
            ]
          }
        ],
        "volumeDataRestorePolicy": "VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED"
      },
      "state": "STATE_UNSPECIFIED",
      "stateReason": "string",
      "uid": "string",
      "updateTime": "string",
      "volumesRestoredCount": 0
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="gkebackupprojectslocationsrestoreplansrestoreslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListRestoresResponse](#schemalistrestoresresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.restorePlans.restores.create

<a id="opIdgkebackup.projects.locations.restorePlans.restores.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/restores \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backup": "string",
    "description": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1/{parent}/restores`

Creates a new Restore for the given RestorePlan.

> Body parameter

```json
{
  "backup": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="gkebackupprojectslocationsrestoreplansrestorescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The RestorePlan within which to create the Restore. Format: `projects/*/locations/*/restorePlans/*`|
|restoreId|query|string|false|Required. The client-provided short name for the Restore resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of Restores in this RestorePlan.|
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
|body|body|[Restore](#schemarestore)|false|none|
|» backup|body|string|false|Required. Immutable. A reference to the Backup used as the source from which this Restore will restore. Note that this Backup must be a sub-resource of the RestorePlan's backup_plan. Format: `projects/*/locations/*/backupPlans/*/backups/*`.|
|» description|body|string|false|User specified descriptive string for this Restore.|
|» labels|body|object|false|A set of custom labels supplied by user.|
|» » **additionalProperties**|body|string|false|none|

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

<h3 id="gkebackupprojectslocationsrestoreplansrestorescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.backupPlans.backups.volumeBackups.list

<a id="opIdgkebackup.projects.locations.backupPlans.backups.volumeBackups.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/volumeBackups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/volumeBackups`

Lists the VolumeBackups for a given Backup.

<h3 id="gkebackupprojectslocationsbackupplansbackupsvolumebackupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The Backup that contains the VolumeBackups to list. Format: `projects/*/locations/*/backupPlans/*/backups/*`|
|filter|query|string|false|Field match expression used to filter the results.|
|orderBy|query|string|false|Field by which to sort the results.|
|pageSize|query|integer|false|The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may inclue a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.|
|pageToken|query|string|false|The value of next_page_token received from a previous `ListVolumeBackups` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListVolumeBackups` must match the call that provided the page token.|
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
  "volumeBackups": [
    {
      "completeTime": "string",
      "createTime": "string",
      "diskSizeBytes": "string",
      "etag": "string",
      "format": "VOLUME_BACKUP_FORMAT_UNSPECIFIED",
      "name": "string",
      "sourcePvc": {
        "name": "string",
        "namespace": "string"
      },
      "state": "STATE_UNSPECIFIED",
      "stateMessage": "string",
      "storageBytes": "string",
      "uid": "string",
      "updateTime": "string",
      "volumeBackupHandle": "string"
    }
  ]
}
```

<h3 id="gkebackupprojectslocationsbackupplansbackupsvolumebackupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListVolumeBackupsResponse](#schemalistvolumebackupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.restorePlans.restores.volumeRestores.list

<a id="opIdgkebackup.projects.locations.restorePlans.restores.volumeRestores.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/volumeRestores \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/volumeRestores`

Lists the VolumeRestores for a given Restore.

<h3 id="gkebackupprojectslocationsrestoreplansrestoresvolumerestoreslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The Restore that contains the VolumeRestores to list. Format: `projects/*/locations/*/restorePlans/*/restores/*`|
|filter|query|string|false|Field match expression used to filter the results.|
|orderBy|query|string|false|Field by which to sort the results.|
|pageSize|query|integer|false|The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may inclue a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.|
|pageToken|query|string|false|The value of next_page_token received from a previous `ListVolumeRestores` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListVolumeRestores` must match the call that provided the page token.|
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
  "volumeRestores": [
    {
      "completeTime": "string",
      "createTime": "string",
      "etag": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "stateMessage": "string",
      "targetPvc": {
        "name": "string",
        "namespace": "string"
      },
      "uid": "string",
      "updateTime": "string",
      "volumeBackup": "string",
      "volumeHandle": "string",
      "volumeType": "VOLUME_TYPE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="gkebackupprojectslocationsrestoreplansrestoresvolumerestoreslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListVolumeRestoresResponse](#schemalistvolumerestoresresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.restorePlans.restores.volumeRestores.getIamPolicy

<a id="opIdgkebackup.projects.locations.restorePlans.restores.volumeRestores.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="gkebackupprojectslocationsrestoreplansrestoresvolumerestoresgetiampolicy-parameters">Parameters</h3>

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

<h3 id="gkebackupprojectslocationsrestoreplansrestoresvolumerestoresgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.restorePlans.restores.volumeRestores.setIamPolicy

<a id="opIdgkebackup.projects.locations.restorePlans.restores.volumeRestores.setIamPolicy"></a>

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

<h3 id="gkebackupprojectslocationsrestoreplansrestoresvolumerestoressetiampolicy-parameters">Parameters</h3>

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

<h3 id="gkebackupprojectslocationsrestoreplansrestoresvolumerestoressetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## gkebackup.projects.locations.restorePlans.restores.volumeRestores.testIamPermissions

<a id="opIdgkebackup.projects.locations.restorePlans.restores.volumeRestores.testIamPermissions"></a>

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

<h3 id="gkebackupprojectslocationsrestoreplansrestoresvolumerestorestestiampermissions-parameters">Parameters</h3>

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

<h3 id="gkebackupprojectslocationsrestoreplansrestoresvolumerestorestestiampermissions-responses">Responses</h3>

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

<h2 id="tocS_Backup">Backup</h2>
<!-- backwards compatibility -->
<a id="schemabackup"></a>
<a id="schema_Backup"></a>
<a id="tocSbackup"></a>
<a id="tocsbackup"></a>

```json
{
  "allNamespaces": true,
  "clusterMetadata": {
    "anthosVersion": "string",
    "backupCrdVersions": {
      "property1": "string",
      "property2": "string"
    },
    "cluster": "string",
    "gkeVersion": "string",
    "k8sVersion": "string"
  },
  "completeTime": "string",
  "configBackupSizeBytes": "string",
  "containsSecrets": true,
  "containsVolumeData": true,
  "createTime": "string",
  "deleteLockDays": 0,
  "deleteLockExpireTime": "string",
  "description": "string",
  "encryptionKey": {
    "gcpKmsEncryptionKey": "string"
  },
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "manual": true,
  "name": "string",
  "podCount": 0,
  "resourceCount": 0,
  "retainDays": 0,
  "retainExpireTime": "string",
  "selectedApplications": {
    "namespacedNames": [
      {
        "name": "string",
        "namespace": "string"
      }
    ]
  },
  "selectedNamespaces": {
    "namespaces": [
      "string"
    ]
  },
  "sizeBytes": "string",
  "state": "STATE_UNSPECIFIED",
  "stateReason": "string",
  "uid": "string",
  "updateTime": "string",
  "volumeCount": 0
}
```

Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 28

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allNamespaces|boolean|false|read-only|Output only. If True, all namespaces were included in the Backup.|
|clusterMetadata|[ClusterMetadata](#schemaclustermetadata)|false|none|Output only. Information about the GKE cluster from which this Backup was created.|
|completeTime|string(google-datetime)|false|read-only|Output only. Completion time of the Backup|
|configBackupSizeBytes|string(int64)|false|read-only|Output only. The size of the config backup in bytes.|
|containsSecrets|boolean|false|read-only|Output only. Whether or not the Backup contains Kubernetes Secrets. Controlled by the parent BackupPlan's include_secrets value.|
|containsVolumeData|boolean|false|read-only|Output only. Whether or not the Backup contains volume data. Controlled by the parent BackupPlan's include_volume_data value.|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when this Backup resource was created.|
|deleteLockDays|integer(int32)|false|none|Minimum age for this Backup (in days). If this field is set to a non-zero value, the Backup will be "locked" against deletion (either manual or automatic deletion) for the number of days provided (measured from the creation time of the Backup). MUST be an integer value between 0-90 (inclusive). Defaults to parent BackupPlan's backup_delete_lock_days setting and may only be increased (either at creation time or in a subsequent update).|
|deleteLockExpireTime|string(google-datetime)|false|read-only|Output only. The time at which an existing delete lock will expire for this backup (calculated from create_time + delete_lock_days).|
|description|string|false|none|User specified descriptive string for this Backup.|
|encryptionKey|[EncryptionKey](#schemaencryptionkey)|false|none|Output only. The customer managed encryption key that was used to encrypt the Backup's artifacts. Inherited from the parent BackupPlan's encryption_key value.|
|etag|string|false|read-only|Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a backup from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform backup updates in order to avoid race conditions: An `etag` is returned in the response to `GetBackup`, and systems are expected to put that etag in the request to `UpdateBackup` or `DeleteBackup` to ensure that their change will be applied to the same version of the resource.|
|labels|object|false|none|A set of custom labels supplied by user.|
|manual|boolean|false|read-only|Output only. This flag indicates whether this Backup resource was created manually by a user or via a schedule in the BackupPlan. A value of True means that the Backup was created manually.|
|name|string|false|read-only|Output only. The fully qualified name of the Backup. `projects/*/locations/*/backupPlans/*/backups/*`|
|podCount|integer(int32)|false|read-only|Output only. The total number of Kubernetes Pods contained in the Backup.|
|resourceCount|integer(int32)|false|read-only|Output only. The total number of Kubernetes resources included in the Backup.|
|retainDays|integer(int32)|false|none|The age (in days) after which this Backup will be automatically deleted. Must be an integer value >= 0: - If 0, no automatic deletion will occur for this Backup. - If not 0, this must be >= delete_lock_days and <= 365. Once a Backup is created, this value may only be increased. Defaults to the parent BackupPlan's backup_retain_days value.|
|retainExpireTime|string(google-datetime)|false|read-only|Output only. The time at which this Backup will be automatically deleted (calculated from create_time + retain_days).|
|selectedApplications|[NamespacedNames](#schemanamespacednames)|false|none|Output only. If set, the list of ProtectedApplications whose resources were included in the Backup.|
|selectedNamespaces|[Namespaces](#schemanamespaces)|false|none|Output only. If set, the list of namespaces that were included in the Backup.|
|sizeBytes|string(int64)|false|read-only|Output only. The total size of the Backup in bytes = config backup size + sum(volume backup sizes)|
|state|string|false|read-only|Output only. Current state of the Backup|
|stateReason|string|false|read-only|Output only. Human-readable description of why the backup is in the current `state`.|
|uid|string|false|read-only|Output only. Server generated global unique identifier of [UUID4](https://en.wikipedia.org/wiki/Universally_unique_identifier)|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when this Backup resource was last updated.|
|volumeCount|integer(int32)|false|read-only|Output only. The total number of volume backups contained in the Backup.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|IN_PROGRESS|
|state|SUCCEEDED|
|state|FAILED|
|state|DELETING|

<h2 id="tocS_BackupConfig">BackupConfig</h2>
<!-- backwards compatibility -->
<a id="schemabackupconfig"></a>
<a id="schema_BackupConfig"></a>
<a id="tocSbackupconfig"></a>
<a id="tocsbackupconfig"></a>

```json
{
  "allNamespaces": true,
  "encryptionKey": {
    "gcpKmsEncryptionKey": "string"
  },
  "includeSecrets": true,
  "includeVolumeData": true,
  "selectedApplications": {
    "namespacedNames": [
      {
        "name": "string",
        "namespace": "string"
      }
    ]
  },
  "selectedNamespaces": {
    "namespaces": [
      "string"
    ]
  }
}
```

BackupConfig defines the configuration of Backups created via this BackupPlan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allNamespaces|boolean|false|none|If True, include all namespaced resources|
|encryptionKey|[EncryptionKey](#schemaencryptionkey)|false|none|This defines a customer managed encryption key that will be used to encrypt the "config" portion (the Kubernetes resources) of Backups created via this plan. Default (empty): Config backup artifacts will not be encrypted.|
|includeSecrets|boolean|false|none|This flag specifies whether Kubernetes Secret resources should be included when they fall into the scope of Backups. Default: False|
|includeVolumeData|boolean|false|none|This flag specifies whether volume data should be backed up when PVCs are included in the scope of a Backup. Default: False|
|selectedApplications|[NamespacedNames](#schemanamespacednames)|false|none|If set, include just the resources referenced by the listed ProtectedApplications.|
|selectedNamespaces|[Namespaces](#schemanamespaces)|false|none|If set, include just the resources in the listed namespaces.|

<h2 id="tocS_BackupPlan">BackupPlan</h2>
<!-- backwards compatibility -->
<a id="schemabackupplan"></a>
<a id="schema_BackupPlan"></a>
<a id="tocSbackupplan"></a>
<a id="tocsbackupplan"></a>

```json
{
  "backupConfig": {
    "allNamespaces": true,
    "encryptionKey": {
      "gcpKmsEncryptionKey": "string"
    },
    "includeSecrets": true,
    "includeVolumeData": true,
    "selectedApplications": {
      "namespacedNames": [
        {
          "name": "string",
          "namespace": "string"
        }
      ]
    },
    "selectedNamespaces": {
      "namespaces": [
        "string"
      ]
    }
  },
  "backupSchedule": {
    "cronSchedule": "string",
    "paused": true
  },
  "cluster": "string",
  "createTime": "string",
  "deactivated": true,
  "description": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "protectedPodCount": 0,
  "retentionPolicy": {
    "backupDeleteLockDays": 0,
    "backupRetainDays": 0,
    "locked": true
  },
  "uid": "string",
  "updateTime": "string"
}
```

Defines the configuration and scheduling for a "line" of Backups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupConfig|[BackupConfig](#schemabackupconfig)|false|none|Defines the configuration of Backups created via this BackupPlan.|
|backupSchedule|[Schedule](#schemaschedule)|false|none|Defines a schedule for automatic Backup creation via this BackupPlan.|
|cluster|string|false|none|Required. Immutable. The source cluster from which Backups will be created via this BackupPlan. Valid formats: - `projects/*/locations/*/clusters/*` - `projects/*/zones/*/clusters/*`|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when this BackupPlan resource was created.|
|deactivated|boolean|false|none|This flag indicates whether this BackupPlan has been deactivated. Setting this field to True locks the BackupPlan such that no further updates will be allowed (except deletes), including the deactivated field itself. It also prevents any new Backups from being created via this BackupPlan (including scheduled Backups). Default: False|
|description|string|false|none|User specified descriptive string for this BackupPlan.|
|etag|string|false|read-only|Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a backup plan from overwriting each other. It is strongly suggested that systems make use of the 'etag' in the read-modify-write cycle to perform BackupPlan updates in order to avoid race conditions: An `etag` is returned in the response to `GetBackupPlan`, and systems are expected to put that etag in the request to `UpdateBackupPlan` or `DeleteBackupPlan` to ensure that their change will be applied to the same version of the resource.|
|labels|object|false|none|A set of custom labels supplied by user.|
|name|string|false|read-only|Output only. The full name of the BackupPlan resource. Format: `projects/*/locations/*/backupPlans/*`|
|protectedPodCount|integer(int32)|false|read-only|Output only. The number of Kubernetes Pods backed up in the last successful Backup created via this BackupPlan.|
|retentionPolicy|[RetentionPolicy](#schemaretentionpolicy)|false|none|RetentionPolicy governs lifecycle of Backups created under this plan.|
|uid|string|false|read-only|Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when this BackupPlan resource was last updated.|

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

<h2 id="tocS_ClusterMetadata">ClusterMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaclustermetadata"></a>
<a id="schema_ClusterMetadata"></a>
<a id="tocSclustermetadata"></a>
<a id="tocsclustermetadata"></a>

```json
{
  "anthosVersion": "string",
  "backupCrdVersions": {
    "property1": "string",
    "property2": "string"
  },
  "cluster": "string",
  "gkeVersion": "string",
  "k8sVersion": "string"
}
```

Information about the GKE cluster from which this Backup was created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|anthosVersion|string|false|none|Anthos version|
|backupCrdVersions|object|false|none|A list of the Backup for GKE CRD versions found in the cluster.|
|cluster|string|false|none|The source cluster from which this Backup was created. Valid formats: - `projects/*/locations/*/clusters/*` - `projects/*/zones/*/clusters/*` This is inherited from the parent BackupPlan's cluster field.|
|gkeVersion|string|false|none|GKE version|
|k8sVersion|string|false|none|The Kubernetes server version of the source cluster.|

<h2 id="tocS_ClusterResourceRestoreScope">ClusterResourceRestoreScope</h2>
<!-- backwards compatibility -->
<a id="schemaclusterresourcerestorescope"></a>
<a id="schema_ClusterResourceRestoreScope"></a>
<a id="tocSclusterresourcerestorescope"></a>
<a id="tocsclusterresourcerestorescope"></a>

```json
{
  "selectedGroupKinds": [
    {
      "resourceGroup": "string",
      "resourceKind": "string"
    }
  ]
}
```

Defines the scope of cluster-scoped resources to restore. Some group kinds are not reasonable choices for a restore, and will cause an error if selected here. Any scope selection that would restore "all valid" resources automatically excludes these group kinds. - gkebackup.gke.io/BackupJob - gkebackup.gke.io/RestoreJob - metrics.k8s.io/NodeMetrics - migration.k8s.io/StorageState - migration.k8s.io/StorageVersionMigration - Node - snapshot.storage.k8s.io/VolumeSnapshotContent - storage.k8s.io/CSINode Some group kinds are driven by restore configuration elsewhere, and will cause an error if selected here. - Namespace - PersistentVolume

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selectedGroupKinds|[[GroupKind](#schemagroupkind)]|false|none|A list of cluster-scoped resource group kinds to restore from the backup. If specified, only the selected resources will be restored. Mutually exclusive to any other field in the message.|

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

<h2 id="tocS_EncryptionKey">EncryptionKey</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionkey"></a>
<a id="schema_EncryptionKey"></a>
<a id="tocSencryptionkey"></a>
<a id="tocsencryptionkey"></a>

```json
{
  "gcpKmsEncryptionKey": "string"
}
```

Defined a customer managed encryption key that will be used to encrypt Backup artifacts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcpKmsEncryptionKey|string|false|none|Google Cloud KMS encryption key. Format: `projects/*/locations/*/keyRings/*/cryptoKeys/*`|

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

<h2 id="tocS_GoogleLongrunningCancelOperationRequest">GoogleLongrunningCancelOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunningcanceloperationrequest"></a>
<a id="schema_GoogleLongrunningCancelOperationRequest"></a>
<a id="tocSgooglelongrunningcanceloperationrequest"></a>
<a id="tocsgooglelongrunningcanceloperationrequest"></a>

```json
{}
```

The request message for Operations.CancelOperation.

<h2 id="tocS_GoogleLongrunningListOperationsResponse">GoogleLongrunningListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunninglistoperationsresponse"></a>
<a id="schema_GoogleLongrunningListOperationsResponse"></a>
<a id="tocSgooglelongrunninglistoperationsresponse"></a>
<a id="tocsgooglelongrunninglistoperationsresponse"></a>

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
|operations|[[GoogleLongrunningOperation](#schemagooglelongrunningoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_GoogleLongrunningOperation">GoogleLongrunningOperation</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunningoperation"></a>
<a id="schema_GoogleLongrunningOperation"></a>
<a id="tocSgooglelongrunningoperation"></a>
<a id="tocsgooglelongrunningoperation"></a>

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
|error|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_GoogleRpcStatus">GoogleRpcStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglerpcstatus"></a>
<a id="schema_GoogleRpcStatus"></a>
<a id="tocSgooglerpcstatus"></a>
<a id="tocsgooglerpcstatus"></a>

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

<h2 id="tocS_GroupKind">GroupKind</h2>
<!-- backwards compatibility -->
<a id="schemagroupkind"></a>
<a id="schema_GroupKind"></a>
<a id="tocSgroupkind"></a>
<a id="tocsgroupkind"></a>

```json
{
  "resourceGroup": "string",
  "resourceKind": "string"
}
```

This is a direct map to the Kubernetes GroupKind type [GroupKind](https://godoc.org/k8s.io/apimachinery/pkg/runtime/schema#GroupKind) and is used for identifying specific "types" of resources to restore.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceGroup|string|false|none|API group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Note: use empty string for core API group|
|resourceKind|string|false|none|Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.|

<h2 id="tocS_ListBackupPlansResponse">ListBackupPlansResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupplansresponse"></a>
<a id="schema_ListBackupPlansResponse"></a>
<a id="tocSlistbackupplansresponse"></a>
<a id="tocslistbackupplansresponse"></a>

```json
{
  "backupPlans": [
    {
      "backupConfig": {
        "allNamespaces": true,
        "encryptionKey": {
          "gcpKmsEncryptionKey": "string"
        },
        "includeSecrets": true,
        "includeVolumeData": true,
        "selectedApplications": {
          "namespacedNames": [
            {
              "name": "string",
              "namespace": "string"
            }
          ]
        },
        "selectedNamespaces": {
          "namespaces": [
            "string"
          ]
        }
      },
      "backupSchedule": {
        "cronSchedule": "string",
        "paused": true
      },
      "cluster": "string",
      "createTime": "string",
      "deactivated": true,
      "description": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "protectedPodCount": 0,
      "retentionPolicy": {
        "backupDeleteLockDays": 0,
        "backupRetainDays": 0,
        "locked": true
      },
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

Response message for ListBackupPlans.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupPlans|[[BackupPlan](#schemabackupplan)]|false|none|The list of BackupPlans matching the given criteria.|
|nextPageToken|string|false|none|A token which may be sent as page_token in a subsequent `ListBackupPlans` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListBackupsResponse">ListBackupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupsresponse"></a>
<a id="schema_ListBackupsResponse"></a>
<a id="tocSlistbackupsresponse"></a>
<a id="tocslistbackupsresponse"></a>

```json
{
  "backups": [
    {
      "allNamespaces": true,
      "clusterMetadata": {
        "anthosVersion": "string",
        "backupCrdVersions": {
          "property1": "string",
          "property2": "string"
        },
        "cluster": "string",
        "gkeVersion": "string",
        "k8sVersion": "string"
      },
      "completeTime": "string",
      "configBackupSizeBytes": "string",
      "containsSecrets": true,
      "containsVolumeData": true,
      "createTime": "string",
      "deleteLockDays": 0,
      "deleteLockExpireTime": "string",
      "description": "string",
      "encryptionKey": {
        "gcpKmsEncryptionKey": "string"
      },
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "manual": true,
      "name": "string",
      "podCount": 0,
      "resourceCount": 0,
      "retainDays": 0,
      "retainExpireTime": "string",
      "selectedApplications": {
        "namespacedNames": [
          {
            "name": "string",
            "namespace": "string"
          }
        ]
      },
      "selectedNamespaces": {
        "namespaces": [
          "string"
        ]
      },
      "sizeBytes": "string",
      "state": "STATE_UNSPECIFIED",
      "stateReason": "string",
      "uid": "string",
      "updateTime": "string",
      "volumeCount": 0
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListBackups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backups|[[Backup](#schemabackup)]|false|none|The list of Backups matching the given criteria.|
|nextPageToken|string|false|none|A token which may be sent as page_token in a subsequent `ListBackups` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return.|

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

<h2 id="tocS_ListRestorePlansResponse">ListRestorePlansResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrestoreplansresponse"></a>
<a id="schema_ListRestorePlansResponse"></a>
<a id="tocSlistrestoreplansresponse"></a>
<a id="tocslistrestoreplansresponse"></a>

```json
{
  "nextPageToken": "string",
  "restorePlans": [
    {
      "backupPlan": "string",
      "cluster": "string",
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "restoreConfig": {
        "allNamespaces": true,
        "clusterResourceConflictPolicy": "CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED",
        "clusterResourceRestoreScope": {
          "selectedGroupKinds": [
            {
              "resourceGroup": "string",
              "resourceKind": "string"
            }
          ]
        },
        "namespacedResourceRestoreMode": "NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED",
        "selectedApplications": {
          "namespacedNames": [
            {
              "name": "string",
              "namespace": "string"
            }
          ]
        },
        "selectedNamespaces": {
          "namespaces": [
            "string"
          ]
        },
        "substitutionRules": [
          {
            "newValue": "string",
            "originalValuePattern": "string",
            "targetGroupKinds": [
              {
                "resourceGroup": "string",
                "resourceKind": "string"
              }
            ],
            "targetJsonPath": "string",
            "targetNamespaces": [
              "string"
            ]
          }
        ],
        "volumeDataRestorePolicy": "VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED"
      },
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response message for ListRestorePlans.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token which may be sent as page_token in a subsequent `ListRestorePlans` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return.|
|restorePlans|[[RestorePlan](#schemarestoreplan)]|false|none|The list of RestorePlans matching the given criteria.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListRestoresResponse">ListRestoresResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrestoresresponse"></a>
<a id="schema_ListRestoresResponse"></a>
<a id="tocSlistrestoresresponse"></a>
<a id="tocslistrestoresresponse"></a>

```json
{
  "nextPageToken": "string",
  "restores": [
    {
      "backup": "string",
      "cluster": "string",
      "completeTime": "string",
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "resourcesExcludedCount": 0,
      "resourcesFailedCount": 0,
      "resourcesRestoredCount": 0,
      "restoreConfig": {
        "allNamespaces": true,
        "clusterResourceConflictPolicy": "CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED",
        "clusterResourceRestoreScope": {
          "selectedGroupKinds": [
            {
              "resourceGroup": "string",
              "resourceKind": "string"
            }
          ]
        },
        "namespacedResourceRestoreMode": "NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED",
        "selectedApplications": {
          "namespacedNames": [
            {
              "name": "string",
              "namespace": "string"
            }
          ]
        },
        "selectedNamespaces": {
          "namespaces": [
            "string"
          ]
        },
        "substitutionRules": [
          {
            "newValue": "string",
            "originalValuePattern": "string",
            "targetGroupKinds": [
              {
                "resourceGroup": "string",
                "resourceKind": "string"
              }
            ],
            "targetJsonPath": "string",
            "targetNamespaces": [
              "string"
            ]
          }
        ],
        "volumeDataRestorePolicy": "VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED"
      },
      "state": "STATE_UNSPECIFIED",
      "stateReason": "string",
      "uid": "string",
      "updateTime": "string",
      "volumesRestoredCount": 0
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response message for ListRestores.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token which may be sent as page_token in a subsequent `ListRestores` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return.|
|restores|[[Restore](#schemarestore)]|false|none|The list of Restores matching the given criteria.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListVolumeBackupsResponse">ListVolumeBackupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvolumebackupsresponse"></a>
<a id="schema_ListVolumeBackupsResponse"></a>
<a id="tocSlistvolumebackupsresponse"></a>
<a id="tocslistvolumebackupsresponse"></a>

```json
{
  "nextPageToken": "string",
  "volumeBackups": [
    {
      "completeTime": "string",
      "createTime": "string",
      "diskSizeBytes": "string",
      "etag": "string",
      "format": "VOLUME_BACKUP_FORMAT_UNSPECIFIED",
      "name": "string",
      "sourcePvc": {
        "name": "string",
        "namespace": "string"
      },
      "state": "STATE_UNSPECIFIED",
      "stateMessage": "string",
      "storageBytes": "string",
      "uid": "string",
      "updateTime": "string",
      "volumeBackupHandle": "string"
    }
  ]
}
```

Response message for ListVolumeBackups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token which may be sent as page_token in a subsequent `ListVolumeBackups` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return.|
|volumeBackups|[[VolumeBackup](#schemavolumebackup)]|false|none|The list of VolumeBackups matching the given criteria.|

<h2 id="tocS_ListVolumeRestoresResponse">ListVolumeRestoresResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvolumerestoresresponse"></a>
<a id="schema_ListVolumeRestoresResponse"></a>
<a id="tocSlistvolumerestoresresponse"></a>
<a id="tocslistvolumerestoresresponse"></a>

```json
{
  "nextPageToken": "string",
  "volumeRestores": [
    {
      "completeTime": "string",
      "createTime": "string",
      "etag": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "stateMessage": "string",
      "targetPvc": {
        "name": "string",
        "namespace": "string"
      },
      "uid": "string",
      "updateTime": "string",
      "volumeBackup": "string",
      "volumeHandle": "string",
      "volumeType": "VOLUME_TYPE_UNSPECIFIED"
    }
  ]
}
```

Response message for ListVolumeRestores.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token which may be sent as page_token in a subsequent `ListVolumeRestores` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return.|
|volumeRestores|[[VolumeRestore](#schemavolumerestore)]|false|none|The list of VolumeRestores matching the given criteria.|

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

<h2 id="tocS_NamespacedName">NamespacedName</h2>
<!-- backwards compatibility -->
<a id="schemanamespacedname"></a>
<a id="schema_NamespacedName"></a>
<a id="tocSnamespacedname"></a>
<a id="tocsnamespacedname"></a>

```json
{
  "name": "string",
  "namespace": "string"
}
```

A reference to a namespaced resource in Kubernetes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the Kubernetes resource.|
|namespace|string|false|none|The Namespace of the Kubernetes resource.|

<h2 id="tocS_NamespacedNames">NamespacedNames</h2>
<!-- backwards compatibility -->
<a id="schemanamespacednames"></a>
<a id="schema_NamespacedNames"></a>
<a id="tocSnamespacednames"></a>
<a id="tocsnamespacednames"></a>

```json
{
  "namespacedNames": [
    {
      "name": "string",
      "namespace": "string"
    }
  ]
}
```

A list of namespaced Kubernetes resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespacedNames|[[NamespacedName](#schemanamespacedname)]|false|none|A list of namespaced Kubernetes resources.|

<h2 id="tocS_Namespaces">Namespaces</h2>
<!-- backwards compatibility -->
<a id="schemanamespaces"></a>
<a id="schema_Namespaces"></a>
<a id="tocSnamespaces"></a>
<a id="tocsnamespaces"></a>

```json
{
  "namespaces": [
    "string"
  ]
}
```

A list of Kubernetes Namespaces

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespaces|[string]|false|none|A list of Kubernetes Namespaces|

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

<h2 id="tocS_Restore">Restore</h2>
<!-- backwards compatibility -->
<a id="schemarestore"></a>
<a id="schema_Restore"></a>
<a id="tocSrestore"></a>
<a id="tocsrestore"></a>

```json
{
  "backup": "string",
  "cluster": "string",
  "completeTime": "string",
  "createTime": "string",
  "description": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "resourcesExcludedCount": 0,
  "resourcesFailedCount": 0,
  "resourcesRestoredCount": 0,
  "restoreConfig": {
    "allNamespaces": true,
    "clusterResourceConflictPolicy": "CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED",
    "clusterResourceRestoreScope": {
      "selectedGroupKinds": [
        {
          "resourceGroup": "string",
          "resourceKind": "string"
        }
      ]
    },
    "namespacedResourceRestoreMode": "NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED",
    "selectedApplications": {
      "namespacedNames": [
        {
          "name": "string",
          "namespace": "string"
        }
      ]
    },
    "selectedNamespaces": {
      "namespaces": [
        "string"
      ]
    },
    "substitutionRules": [
      {
        "newValue": "string",
        "originalValuePattern": "string",
        "targetGroupKinds": [
          {
            "resourceGroup": "string",
            "resourceKind": "string"
          }
        ],
        "targetJsonPath": "string",
        "targetNamespaces": [
          "string"
        ]
      }
    ],
    "volumeDataRestorePolicy": "VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED"
  },
  "state": "STATE_UNSPECIFIED",
  "stateReason": "string",
  "uid": "string",
  "updateTime": "string",
  "volumesRestoredCount": 0
}
```

Represents both a request to Restore some portion of a Backup into a target GKE cluster and a record of the restore operation itself. Next id: 18

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backup|string|false|none|Required. Immutable. A reference to the Backup used as the source from which this Restore will restore. Note that this Backup must be a sub-resource of the RestorePlan's backup_plan. Format: `projects/*/locations/*/backupPlans/*/backups/*`.|
|cluster|string|false|read-only|Output only. The target cluster into which this Restore will restore data. Valid formats: - `projects/*/locations/*/clusters/*` - `projects/*/zones/*/clusters/*` Inherited from parent RestorePlan's cluster value.|
|completeTime|string(google-datetime)|false|read-only|Output only. Timestamp of when the restore operation completed.|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when this Restore resource was created.|
|description|string|false|none|User specified descriptive string for this Restore.|
|etag|string|false|read-only|Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a restore from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform restore updates in order to avoid race conditions: An `etag` is returned in the response to `GetRestore`, and systems are expected to put that etag in the request to `UpdateRestore` or `DeleteRestore` to ensure that their change will be applied to the same version of the resource.|
|labels|object|false|none|A set of custom labels supplied by user.|
|name|string|false|read-only|Output only. The full name of the Restore resource. Format: `projects/*/locations/*/restorePlans/*/restores/*`|
|resourcesExcludedCount|integer(int32)|false|read-only|Output only. Number of resources excluded during the restore execution.|
|resourcesFailedCount|integer(int32)|false|read-only|Output only. Number of resources that failed to be restored during the restore execution.|
|resourcesRestoredCount|integer(int32)|false|read-only|Output only. Number of resources restored during the restore execution.|
|restoreConfig|[RestoreConfig](#schemarestoreconfig)|false|none|Output only. Configuration of the Restore. Inherited from parent RestorePlan's restore_config.|
|state|string|false|read-only|Output only. The current state of the Restore.|
|stateReason|string|false|read-only|Output only. Human-readable description of why the Restore is in its current state.|
|uid|string|false|read-only|Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when this Restore resource was last updated.|
|volumesRestoredCount|integer(int32)|false|read-only|Output only. Number of volumes restored during the restore execution.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|IN_PROGRESS|
|state|SUCCEEDED|
|state|FAILED|
|state|DELETING|

<h2 id="tocS_RestoreConfig">RestoreConfig</h2>
<!-- backwards compatibility -->
<a id="schemarestoreconfig"></a>
<a id="schema_RestoreConfig"></a>
<a id="tocSrestoreconfig"></a>
<a id="tocsrestoreconfig"></a>

```json
{
  "allNamespaces": true,
  "clusterResourceConflictPolicy": "CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED",
  "clusterResourceRestoreScope": {
    "selectedGroupKinds": [
      {
        "resourceGroup": "string",
        "resourceKind": "string"
      }
    ]
  },
  "namespacedResourceRestoreMode": "NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED",
  "selectedApplications": {
    "namespacedNames": [
      {
        "name": "string",
        "namespace": "string"
      }
    ]
  },
  "selectedNamespaces": {
    "namespaces": [
      "string"
    ]
  },
  "substitutionRules": [
    {
      "newValue": "string",
      "originalValuePattern": "string",
      "targetGroupKinds": [
        {
          "resourceGroup": "string",
          "resourceKind": "string"
        }
      ],
      "targetJsonPath": "string",
      "targetNamespaces": [
        "string"
      ]
    }
  ],
  "volumeDataRestorePolicy": "VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED"
}
```

Configuration of a restore. Next id: 12

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allNamespaces|boolean|false|none|Restore all namespaced resources in the Backup if set to "True". Specifying this field to "False" is an error.|
|clusterResourceConflictPolicy|string|false|none|Defines the behavior for handling the situation where cluster-scoped resources being restored already exist in the target cluster. This MUST be set to a value other than CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED if cluster_resource_restore_scope is not empty.|
|clusterResourceRestoreScope|[ClusterResourceRestoreScope](#schemaclusterresourcerestorescope)|false|none|Identifies the cluster-scoped resources to restore from the Backup. Not specifying it means NO cluster resource will be restored.|
|namespacedResourceRestoreMode|string|false|none|Defines the behavior for handling the situation where sets of namespaced resources being restored already exist in the target cluster. This MUST be set to a value other than NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED.|
|selectedApplications|[NamespacedNames](#schemanamespacednames)|false|none|A list of selected ProtectedApplications to restore. The listed ProtectedApplications and all the resources to which they refer will be restored.|
|selectedNamespaces|[Namespaces](#schemanamespaces)|false|none|A list of selected Namespaces to restore from the Backup. The listed Namespaces and all resources contained in them will be restored.|
|substitutionRules|[[SubstitutionRule](#schemasubstitutionrule)]|false|none|A list of transformation rules to be applied against Kubernetes resources as they are selected for restoration from a Backup. Rules are executed in order defined - this order matters, as changes made by a rule may impact the filtering logic of subsequent rules. An empty list means no substitution will occur.|
|volumeDataRestorePolicy|string|false|none|Specifies the mechanism to be used to restore volume data. Default: VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED (will be treated as NO_VOLUME_DATA_RESTORATION).|

#### Enumerated Values

|Property|Value|
|---|---|
|clusterResourceConflictPolicy|CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED|
|clusterResourceConflictPolicy|USE_EXISTING_VERSION|
|clusterResourceConflictPolicy|USE_BACKUP_VERSION|
|namespacedResourceRestoreMode|NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED|
|namespacedResourceRestoreMode|DELETE_AND_RESTORE|
|namespacedResourceRestoreMode|FAIL_ON_CONFLICT|
|volumeDataRestorePolicy|VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED|
|volumeDataRestorePolicy|RESTORE_VOLUME_DATA_FROM_BACKUP|
|volumeDataRestorePolicy|REUSE_VOLUME_HANDLE_FROM_BACKUP|
|volumeDataRestorePolicy|NO_VOLUME_DATA_RESTORATION|

<h2 id="tocS_RestorePlan">RestorePlan</h2>
<!-- backwards compatibility -->
<a id="schemarestoreplan"></a>
<a id="schema_RestorePlan"></a>
<a id="tocSrestoreplan"></a>
<a id="tocsrestoreplan"></a>

```json
{
  "backupPlan": "string",
  "cluster": "string",
  "createTime": "string",
  "description": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "restoreConfig": {
    "allNamespaces": true,
    "clusterResourceConflictPolicy": "CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED",
    "clusterResourceRestoreScope": {
      "selectedGroupKinds": [
        {
          "resourceGroup": "string",
          "resourceKind": "string"
        }
      ]
    },
    "namespacedResourceRestoreMode": "NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED",
    "selectedApplications": {
      "namespacedNames": [
        {
          "name": "string",
          "namespace": "string"
        }
      ]
    },
    "selectedNamespaces": {
      "namespaces": [
        "string"
      ]
    },
    "substitutionRules": [
      {
        "newValue": "string",
        "originalValuePattern": "string",
        "targetGroupKinds": [
          {
            "resourceGroup": "string",
            "resourceKind": "string"
          }
        ],
        "targetJsonPath": "string",
        "targetNamespaces": [
          "string"
        ]
      }
    ],
    "volumeDataRestorePolicy": "VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED"
  },
  "uid": "string",
  "updateTime": "string"
}
```

The configuration of a potential series of Restore operations to be performed against Backups belong to a particular BackupPlan. Next id: 13

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupPlan|string|false|none|Required. Immutable. A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan. Format: `projects/*/locations/*/backupPlans/*`.|
|cluster|string|false|none|Required. Immutable. The target cluster into which Restores created via this RestorePlan will restore data. NOTE: the cluster's region must be the same as the RestorePlan. Valid formats: - `projects/*/locations/*/clusters/*` - `projects/*/zones/*/clusters/*`|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when this RestorePlan resource was created.|
|description|string|false|none|User specified descriptive string for this RestorePlan.|
|etag|string|false|read-only|Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a restore from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform restore updates in order to avoid race conditions: An `etag` is returned in the response to `GetRestorePlan`, and systems are expected to put that etag in the request to `UpdateRestorePlan` or `DeleteRestorePlan` to ensure that their change will be applied to the same version of the resource.|
|labels|object|false|none|A set of custom labels supplied by user.|
|name|string|false|read-only|Output only. The full name of the RestorePlan resource. Format: `projects/*/locations/*/restorePlans/*`.|
|restoreConfig|[RestoreConfig](#schemarestoreconfig)|false|none|Required. Configuration of Restores created via this RestorePlan.|
|uid|string|false|read-only|Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when this RestorePlan resource was last updated.|

<h2 id="tocS_RetentionPolicy">RetentionPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaretentionpolicy"></a>
<a id="schema_RetentionPolicy"></a>
<a id="tocSretentionpolicy"></a>
<a id="tocsretentionpolicy"></a>

```json
{
  "backupDeleteLockDays": 0,
  "backupRetainDays": 0,
  "locked": true
}
```

RetentionPolicy defines a Backup retention policy for a BackupPlan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupDeleteLockDays|integer(int32)|false|none|Minimum age for Backups created via this BackupPlan (in days). This field MUST be an integer value between 0-90 (inclusive). A Backup created under this BackupPlan will NOT be deletable until it reaches Backup's (create_time + backup_delete_lock_days). Updating this field of a BackupPlan does NOT affect existing Backups under it. Backups created AFTER a successful update will inherit the new value. Default: 0 (no delete blocking)|
|backupRetainDays|integer(int32)|false|none|The default maximum age of a Backup created via this BackupPlan. This field MUST be an integer value >= 0 and <= 365. If specified, a Backup created under this BackupPlan will be automatically deleted after its age reaches (create_time + backup_retain_days). If not specified, Backups created under this BackupPlan will NOT be subject to automatic deletion. Updating this field does NOT affect existing Backups under it. Backups created AFTER a successful update will automatically pick up the new value. NOTE: backup_retain_days must be >= backup_delete_lock_days. If cron_schedule is defined, then this must be <= 360 * the creation interval. Default: 0 (no automatic deletion)|
|locked|boolean|false|none|This flag denotes whether the retention policy of this BackupPlan is locked. If set to True, no further update is allowed on this policy, including the `locked` field itself. Default: False|

<h2 id="tocS_Schedule">Schedule</h2>
<!-- backwards compatibility -->
<a id="schemaschedule"></a>
<a id="schema_Schedule"></a>
<a id="tocSschedule"></a>
<a id="tocsschedule"></a>

```json
{
  "cronSchedule": "string",
  "paused": true
}
```

Schedule defines scheduling parameters for automatically creating Backups via this BackupPlan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cronSchedule|string|false|none|A standard [cron](https://wikipedia.com/wiki/cron) string that defines a repeating schedule for creating Backups via this BackupPlan. If this is defined, then backup_retain_days must also be defined. Default (empty): no automatic backup creation will occur.|
|paused|boolean|false|none|This flag denotes whether automatic Backup creation is paused for this BackupPlan. Default: False|

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

<h2 id="tocS_SubstitutionRule">SubstitutionRule</h2>
<!-- backwards compatibility -->
<a id="schemasubstitutionrule"></a>
<a id="schema_SubstitutionRule"></a>
<a id="tocSsubstitutionrule"></a>
<a id="tocssubstitutionrule"></a>

```json
{
  "newValue": "string",
  "originalValuePattern": "string",
  "targetGroupKinds": [
    {
      "resourceGroup": "string",
      "resourceKind": "string"
    }
  ],
  "targetJsonPath": "string",
  "targetNamespaces": [
    "string"
  ]
}
```

A transformation rule to be applied against Kubernetes resources as they are selected for restoration from a Backup. A rule contains both filtering logic (which resources are subject to substitution) and substitution logic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newValue|string|false|none|This is the new value to set for any fields that pass the filtering and selection criteria. To remove a value from a Kubernetes resource, either leave this field unspecified, or set it to the empty string ("").|
|originalValuePattern|string|false|none|(Filtering parameter) This is a [regular expression] (https://en.wikipedia.org/wiki/Regular_expression) that is compared against the fields matched by the target_json_path expression (and must also have passed the previous filters). Substitution will not be performed against fields whose value does not match this expression. If this field is NOT specified, then ALL fields matched by the target_json_path expression will undergo substitution. Note that an empty (e.g., "", rather than unspecified) value for this field will only match empty fields.|
|targetGroupKinds|[[GroupKind](#schemagroupkind)]|false|none|(Filtering parameter) Any resource subject to substitution must belong to one of the listed "types". If this field is not provided, no type filtering will be performed (all resources of all types matching previous filtering parameters will be candidates for substitution).|
|targetJsonPath|string|false|none|Required. This is a [JSONPath] (https://kubernetes.io/docs/reference/kubectl/jsonpath/) expression that matches specific fields of candidate resources and it operates as both a filtering parameter (resources that are not matched with this expression will not be candidates for substitution) as well as a field identifier (identifies exactly which fields out of the candidate resources will be modified).|
|targetNamespaces|[string]|false|none|(Filtering parameter) Any resource subject to substitution must be contained within one of the listed Kubernetes Namespace in the Backup. If this field is not provided, no namespace filtering will be performed (all resources in all Namespaces, including all cluster-scoped resources, will be candidates for substitution). To mix cluster-scoped and namespaced resources in the same rule, use an empty string ("") as one of the target namespaces.|

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

<h2 id="tocS_VolumeBackup">VolumeBackup</h2>
<!-- backwards compatibility -->
<a id="schemavolumebackup"></a>
<a id="schema_VolumeBackup"></a>
<a id="tocSvolumebackup"></a>
<a id="tocsvolumebackup"></a>

```json
{
  "completeTime": "string",
  "createTime": "string",
  "diskSizeBytes": "string",
  "etag": "string",
  "format": "VOLUME_BACKUP_FORMAT_UNSPECIFIED",
  "name": "string",
  "sourcePvc": {
    "name": "string",
    "namespace": "string"
  },
  "state": "STATE_UNSPECIFIED",
  "stateMessage": "string",
  "storageBytes": "string",
  "uid": "string",
  "updateTime": "string",
  "volumeBackupHandle": "string"
}
```

Represents the backup of a specific persistent volume as a component of a Backup - both the record of the operation and a pointer to the underlying storage-specific artifacts. Next id: 14

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completeTime|string(google-datetime)|false|read-only|Output only. The timestamp when the associated underlying volume backup operation completed.|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when this VolumeBackup resource was created.|
|diskSizeBytes|string(int64)|false|read-only|Output only. The minimum size of the disk to which this VolumeBackup can be restored.|
|etag|string|false|read-only|Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a volume backup from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform volume backup updates in order to avoid race conditions.|
|format|string|false|read-only|Output only. The format used for the volume backup.|
|name|string|false|read-only|Output only. The full name of the VolumeBackup resource. Format: `projects/*/locations/*/backupPlans/*/backups/*/volumeBackups/*`.|
|sourcePvc|[NamespacedName](#schemanamespacedname)|false|none|Output only. A reference to the source Kubernetes PVC from which this VolumeBackup was created.|
|state|string|false|read-only|Output only. The current state of this VolumeBackup.|
|stateMessage|string|false|read-only|Output only. A human readable message explaining why the VolumeBackup is in its current state.|
|storageBytes|string(int64)|false|read-only|Output only. The aggregate size of the underlying artifacts associated with this VolumeBackup in the backup storage. This may change over time when multiple backups of the same volume share the same backup storage location. In particular, this is likely to increase in size when the immediately preceding backup of the same volume is deleted.|
|uid|string|false|read-only|Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when this VolumeBackup resource was last updated.|
|volumeBackupHandle|string|false|read-only|Output only. A storage system-specific opaque handle to the underlying volume backup.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|VOLUME_BACKUP_FORMAT_UNSPECIFIED|
|format|GCE_PERSISTENT_DISK|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|SNAPSHOTTING|
|state|UPLOADING|
|state|SUCCEEDED|
|state|FAILED|
|state|DELETING|

<h2 id="tocS_VolumeRestore">VolumeRestore</h2>
<!-- backwards compatibility -->
<a id="schemavolumerestore"></a>
<a id="schema_VolumeRestore"></a>
<a id="tocSvolumerestore"></a>
<a id="tocsvolumerestore"></a>

```json
{
  "completeTime": "string",
  "createTime": "string",
  "etag": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "stateMessage": "string",
  "targetPvc": {
    "name": "string",
    "namespace": "string"
  },
  "uid": "string",
  "updateTime": "string",
  "volumeBackup": "string",
  "volumeHandle": "string",
  "volumeType": "VOLUME_TYPE_UNSPECIFIED"
}
```

Represents the operation of restoring a volume from a VolumeBackup. Next id: 13

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completeTime|string(google-datetime)|false|read-only|Output only. The timestamp when the associated underlying volume restoration completed.|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when this VolumeRestore resource was created.|
|etag|string|false|read-only|Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a volume restore from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform volume restore updates in order to avoid race conditions.|
|name|string|false|read-only|Output only. Full name of the VolumeRestore resource. Format: `projects/*/locations/*/restorePlans/*/restores/*/volumeRestores/*`|
|state|string|false|read-only|Output only. The current state of this VolumeRestore.|
|stateMessage|string|false|read-only|Output only. A human readable message explaining why the VolumeRestore is in its current state.|
|targetPvc|[NamespacedName](#schemanamespacedname)|false|none|Output only. The reference to the target Kubernetes PVC to be restored.|
|uid|string|false|read-only|Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when this VolumeRestore resource was last updated.|
|volumeBackup|string|false|read-only|Output only. The full name of the VolumeBackup from which the volume will be restored. Format: `projects/*/locations/*/backupPlans/*/backups/*/volumeBackups/*`.|
|volumeHandle|string|false|read-only|Output only. A storage system-specific opaque handler to the underlying volume created for the target PVC from the volume backup.|
|volumeType|string|false|read-only|Output only. The type of volume provisioned|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|RESTORING|
|state|SUCCEEDED|
|state|FAILED|
|state|DELETING|
|volumeType|VOLUME_TYPE_UNSPECIFIED|
|volumeType|GCE_PERSISTENT_DISK|
