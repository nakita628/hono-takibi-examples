<h1 id="cloud-filestore-api">Cloud Filestore API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Cloud Filestore API is used for creating and managing cloud file servers.

Base URLs:

* <a href="https://file.googleapis.com/">https://file.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/filestore/">External documentation</a>

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

<h1 id="cloud-filestore-api-projects">projects</h1>

## file.projects.locations.operations.get

<a id="opIdfile.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="fileprojectslocationsoperationsget-parameters">Parameters</h3>

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

<h3 id="fileprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## file.projects.locations.operations.delete

<a id="opIdfile.projects.locations.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="fileprojectslocationsoperationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be deleted.|
|force|query|boolean|false|If set to true, all snapshots of the instance will also be deleted. (Otherwise, the request will only work if the instance has no snapshots.)|
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

<h3 id="fileprojectslocationsoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## file.projects.locations.instances.snapshots.patch

<a id="opIdfile.projects.locations.instances.snapshots.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PATCH /v1/{name}`

Updates the settings of a specific snapshot.

> Body parameter

```json
{
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="fileprojectslocationsinstancessnapshotspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The resource name of the snapshot, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}/snapshots/{snapshot_id}`.|
|updateMask|query|string|false|Required. Mask of fields to update. At least one path must be supplied in this field.|
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
|body|body|[Snapshot](#schemasnapshot)|false|none|
|» description|body|string|false|A description of the snapshot with 2048 characters or less. Requests with longer descriptions will be rejected.|
|» labels|body|object|false|Resource labels to represent user provided metadata.|
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

<h3 id="fileprojectslocationsinstancessnapshotspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## file.projects.locations.list

<a id="opIdfile.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="fileprojectslocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource that owns the locations collection, if applicable.|
|filter|query|string|false|A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).|
|includeUnrevealedLocations|query|boolean|false|If true, the returned list will include locations which are not yet revealed.|
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

<h3 id="fileprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## file.projects.locations.operations.list

<a id="opIdfile.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="fileprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="fileprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## file.projects.locations.operations.cancel

<a id="opIdfile.projects.locations.operations.cancel"></a>

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

<h3 id="fileprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="fileprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## file.projects.locations.instances.restore

<a id="opIdfile.projects.locations.instances.restore"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:restore \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fileShare": "string",
    "sourceBackup": "string"
  }'
```

`POST /v1/{name}:restore`

Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).

> Body parameter

```json
{
  "fileShare": "string",
  "sourceBackup": "string"
}
```

<h3 id="fileprojectslocationsinstancesrestore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the instance, in the format `projects/{project_number}/locations/{location_id}/instances/{instance_id}`.|
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
|body|body|[RestoreInstanceRequest](#schemarestoreinstancerequest)|false|none|
|» fileShare|body|string|false|Required. Name of the file share in the Filestore instance that the backup is being restored to.|
|» sourceBackup|body|string|false|The resource name of the backup, in the format `projects/{project_number}/locations/{location_id}/backups/{backup_id}`.|

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

<h3 id="fileprojectslocationsinstancesrestore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## file.projects.locations.instances.revert

<a id="opIdfile.projects.locations.instances.revert"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:revert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "targetSnapshotId": "string"
  }'
```

`POST /v1/{name}:revert`

Revert an existing instance's file system to a specified snapshot.

> Body parameter

```json
{
  "targetSnapshotId": "string"
}
```

<h3 id="fileprojectslocationsinstancesrevert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. projects/{project_id}/locations/{location_id}/instances/{instance_id}. The resource name of the instance, in the format|
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
|body|body|[RevertInstanceRequest](#schemarevertinstancerequest)|false|none|
|» targetSnapshotId|body|string|false|Required. The snapshot resource ID, in the format 'my-snapshot', where the specified ID is the {snapshot_id} of the fully qualified name like projects/{project_id}/locations/{location_id}/instances/{instance_id}/snapshots/{snapshot_id}|

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

<h3 id="fileprojectslocationsinstancesrevert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## file.projects.locations.backups.list

<a id="opIdfile.projects.locations.backups.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/backups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/backups`

Lists all backups in a project for either a specified location or for all locations.

<h3 id="fileprojectslocationsbackupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location for which to retrieve backup information, in the format `projects/{project_number}/locations/{location}`. In Filestore, backup locations map to Google Cloud regions, for example **us-west1**. To retrieve backup information for all locations, use "-" for the `{location}` value.|
|filter|query|string|false|List filter.|
|orderBy|query|string|false|Sort results. Supported values are "name", "name desc" or "" (unsorted).|
|pageSize|query|integer|false|The maximum number of items to return.|
|pageToken|query|string|false|The next_page_token value to use if there are additional results to retrieve for this list request.|
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
      "capacityGb": "string",
      "createTime": "string",
      "description": "string",
      "downloadBytes": "string",
      "kmsKey": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "satisfiesPzs": true,
      "sourceFileShare": "string",
      "sourceInstance": "string",
      "sourceInstanceTier": "TIER_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED",
      "storageBytes": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="fileprojectslocationsbackupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBackupsResponse](#schemalistbackupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## file.projects.locations.backups.create

<a id="opIdfile.projects.locations.backups.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/backups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "kmsKey": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "sourceFileShare": "string",
    "sourceInstance": "string"
  }'
```

`POST /v1/{parent}/backups`

Creates a backup.

> Body parameter

```json
{
  "description": "string",
  "kmsKey": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "sourceFileShare": "string",
  "sourceInstance": "string"
}
```

<h3 id="fileprojectslocationsbackupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The backup's project and location, in the format `projects/{project_number}/locations/{location}`. In Filestore, backup locations map to Google Cloud regions, for example **us-west1**.|
|backupId|query|string|false|Required. The ID to use for the backup. The ID must be unique within the specified project and location. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. Values that do not match this pattern will trigger an INVALID_ARGUMENT error.|
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
|» description|body|string|false|A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.|
|» kmsKey|body|string|false|Immutable. KMS key name used for data encryption.|
|» labels|body|object|false|Resource labels to represent user provided metadata.|
|» » **additionalProperties**|body|string|false|none|
|» sourceFileShare|body|string|false|Name of the file share in the source Filestore instance that the backup is created from.|
|» sourceInstance|body|string|false|The resource name of the source Filestore instance, in the format `projects/{project_number}/locations/{location_id}/instances/{instance_id}`, used to create this backup.|

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

<h3 id="fileprojectslocationsbackupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## file.projects.locations.instances.list

<a id="opIdfile.projects.locations.instances.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/instances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/instances`

Lists all instances in a project for either a specified location or for all locations.

<h3 id="fileprojectslocationsinstanceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location for which to retrieve instance information, in the format `projects/{project_id}/locations/{location}`. In Cloud Filestore, locations map to Google Cloud zones, for example **us-west1-b**. To retrieve instance information for all locations, use "-" for the `{location}` value.|
|filter|query|string|false|List filter.|
|orderBy|query|string|false|Sort results. Supported values are "name", "name desc" or "" (unsorted).|
|pageSize|query|integer|false|The maximum number of items to return.|
|pageToken|query|string|false|The next_page_token value to use if there are additional results to retrieve for this list request.|
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
  "instances": [
    {
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "fileShares": [
        {
          "capacityGb": "string",
          "name": "string",
          "nfsExportOptions": [
            {
              "accessMode": "ACCESS_MODE_UNSPECIFIED",
              "anonGid": "string",
              "anonUid": "string",
              "ipRanges": [
                "string"
              ],
              "squashMode": "SQUASH_MODE_UNSPECIFIED"
            }
          ],
          "sourceBackup": "string"
        }
      ],
      "kmsKeyName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "networks": [
        {
          "connectMode": "CONNECT_MODE_UNSPECIFIED",
          "ipAddresses": [
            "string"
          ],
          "modes": [
            "ADDRESS_MODE_UNSPECIFIED"
          ],
          "network": "string",
          "reservedIpRange": "string"
        }
      ],
      "satisfiesPzs": true,
      "state": "STATE_UNSPECIFIED",
      "statusMessage": "string",
      "suspensionReasons": [
        "SUSPENSION_REASON_UNSPECIFIED"
      ],
      "tier": "TIER_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="fileprojectslocationsinstanceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListInstancesResponse](#schemalistinstancesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## file.projects.locations.instances.create

<a id="opIdfile.projects.locations.instances.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/instances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "etag": "string",
    "fileShares": [
      {
        "capacityGb": "string",
        "name": "string",
        "nfsExportOptions": [
          {
            "accessMode": "ACCESS_MODE_UNSPECIFIED",
            "anonGid": "string",
            "anonUid": "string",
            "ipRanges": [
              "string"
            ],
            "squashMode": "SQUASH_MODE_UNSPECIFIED"
          }
        ],
        "sourceBackup": "string"
      }
    ],
    "kmsKeyName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "networks": [
      {
        "connectMode": "CONNECT_MODE_UNSPECIFIED",
        "modes": [
          "ADDRESS_MODE_UNSPECIFIED"
        ],
        "network": "string",
        "reservedIpRange": "string"
      }
    ],
    "tier": "TIER_UNSPECIFIED"
  }'
```

`POST /v1/{parent}/instances`

Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).

> Body parameter

```json
{
  "description": "string",
  "etag": "string",
  "fileShares": [
    {
      "capacityGb": "string",
      "name": "string",
      "nfsExportOptions": [
        {
          "accessMode": "ACCESS_MODE_UNSPECIFIED",
          "anonGid": "string",
          "anonUid": "string",
          "ipRanges": [
            "string"
          ],
          "squashMode": "SQUASH_MODE_UNSPECIFIED"
        }
      ],
      "sourceBackup": "string"
    }
  ],
  "kmsKeyName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "networks": [
    {
      "connectMode": "CONNECT_MODE_UNSPECIFIED",
      "modes": [
        "ADDRESS_MODE_UNSPECIFIED"
      ],
      "network": "string",
      "reservedIpRange": "string"
    }
  ],
  "tier": "TIER_UNSPECIFIED"
}
```

<h3 id="fileprojectslocationsinstancescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The instance's project and location, in the format `projects/{project_id}/locations/{location}`. In Filestore, locations map to Google Cloud zones, for example **us-west1-b**.|
|instanceId|query|string|false|Required. The name of the instance to create. The name must be unique for the specified project and location.|
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
|body|body|[Instance](#schemainstance)|false|none|
|» description|body|string|false|The description of the instance (2048 characters or less).|
|» etag|body|string|false|Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other.|
|» fileShares|body|[[FileShareConfig](#schemafileshareconfig)]|false|File system shares on the instance. For this version, only a single file share is supported.|
|» kmsKeyName|body|string|false|KMS key name used for data encryption.|
|» labels|body|object|false|Resource labels to represent user provided metadata.|
|» » **additionalProperties**|body|string|false|none|
|» networks|body|[[NetworkConfig](#schemanetworkconfig)]|false|VPC networks to which the instance is connected. For this version, only a single network is supported.|
|» tier|body|string|false|The service tier of the instance.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» tier|TIER_UNSPECIFIED|
|» tier|STANDARD|
|» tier|PREMIUM|
|» tier|BASIC_HDD|
|» tier|BASIC_SSD|
|» tier|HIGH_SCALE_SSD|
|» tier|ENTERPRISE|

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

<h3 id="fileprojectslocationsinstancescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## file.projects.locations.instances.snapshots.list

<a id="opIdfile.projects.locations.instances.snapshots.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/snapshots \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/snapshots`

Lists all snapshots in a project for either a specified location or for all locations.

<h3 id="fileprojectslocationsinstancessnapshotslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The instance for which to retrieve snapshot information, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}`.|
|filter|query|string|false|List filter.|
|orderBy|query|string|false|Sort results. Supported values are "name", "name desc" or "" (unsorted).|
|pageSize|query|integer|false|The maximum number of items to return.|
|pageToken|query|string|false|The next_page_token value to use if there are additional results to retrieve for this list request.|
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
  "snapshots": [
    {
      "createTime": "string",
      "description": "string",
      "filesystemUsedBytes": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="fileprojectslocationsinstancessnapshotslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSnapshotsResponse](#schemalistsnapshotsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## file.projects.locations.instances.snapshots.create

<a id="opIdfile.projects.locations.instances.snapshots.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/snapshots \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1/{parent}/snapshots`

Creates a snapshot.

> Body parameter

```json
{
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="fileprojectslocationsinstancessnapshotscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The Filestore Instance to create the snapshots of, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}`|
|snapshotId|query|string|false|Required. The ID to use for the snapshot. The ID must be unique within the specified instance. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.|
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
|body|body|[Snapshot](#schemasnapshot)|false|none|
|» description|body|string|false|A description of the snapshot with 2048 characters or less. Requests with longer descriptions will be rejected.|
|» labels|body|object|false|Resource labels to represent user provided metadata.|
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

<h3 id="fileprojectslocationsinstancessnapshotscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_Backup">Backup</h2>
<!-- backwards compatibility -->
<a id="schemabackup"></a>
<a id="schema_Backup"></a>
<a id="tocSbackup"></a>
<a id="tocsbackup"></a>

```json
{
  "capacityGb": "string",
  "createTime": "string",
  "description": "string",
  "downloadBytes": "string",
  "kmsKey": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "satisfiesPzs": true,
  "sourceFileShare": "string",
  "sourceInstance": "string",
  "sourceInstanceTier": "TIER_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "storageBytes": "string"
}
```

A Filestore backup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacityGb|string(int64)|false|read-only|Output only. Capacity of the source file share when the backup was created.|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the backup was created.|
|description|string|false|none|A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.|
|downloadBytes|string(int64)|false|read-only|Output only. Amount of bytes that will be downloaded if the backup is restored. This may be different than storage bytes, since sequential backups of the same disk will share storage.|
|kmsKey|string|false|none|Immutable. KMS key name used for data encryption.|
|labels|object|false|none|Resource labels to represent user provided metadata.|
|name|string|false|read-only|Output only. The resource name of the backup, in the format `projects/{project_number}/locations/{location_id}/backups/{backup_id}`.|
|satisfiesPzs|boolean|false|read-only|Output only. Reserved for future use.|
|sourceFileShare|string|false|none|Name of the file share in the source Filestore instance that the backup is created from.|
|sourceInstance|string|false|none|The resource name of the source Filestore instance, in the format `projects/{project_number}/locations/{location_id}/instances/{instance_id}`, used to create this backup.|
|sourceInstanceTier|string|false|read-only|Output only. The service tier of the source Filestore instance that this backup is created from.|
|state|string|false|read-only|Output only. The backup state.|
|storageBytes|string(int64)|false|read-only|Output only. The size of the storage used by the backup. As backups share storage, this number is expected to change with backup creation/deletion.|

#### Enumerated Values

|Property|Value|
|---|---|
|sourceInstanceTier|TIER_UNSPECIFIED|
|sourceInstanceTier|STANDARD|
|sourceInstanceTier|PREMIUM|
|sourceInstanceTier|BASIC_HDD|
|sourceInstanceTier|BASIC_SSD|
|sourceInstanceTier|HIGH_SCALE_SSD|
|sourceInstanceTier|ENTERPRISE|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|FINALIZING|
|state|READY|
|state|DELETING|
|state|INVALID|

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

<h2 id="tocS_DailyCycle">DailyCycle</h2>
<!-- backwards compatibility -->
<a id="schemadailycycle"></a>
<a id="schema_DailyCycle"></a>
<a id="tocSdailycycle"></a>
<a id="tocsdailycycle"></a>

```json
{
  "duration": "string",
  "startTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  }
}
```

Time window specified for daily operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|string(google-duration)|false|none|Output only. Duration of the time window, set by service producer.|
|startTime|[TimeOfDay](#schematimeofday)|false|none|Time within the day to start the operations.|

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

<h2 id="tocS_DenyMaintenancePeriod">DenyMaintenancePeriod</h2>
<!-- backwards compatibility -->
<a id="schemadenymaintenanceperiod"></a>
<a id="schema_DenyMaintenancePeriod"></a>
<a id="tocSdenymaintenanceperiod"></a>
<a id="tocsdenymaintenanceperiod"></a>

```json
{
  "endDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "startDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "time": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  }
}
```

DenyMaintenancePeriod definition. Maintenance is forbidden within the deny period. The start_date must be less than the end_date.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|[Date](#schemadate)|false|none|Deny period end date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be before the end.|
|startDate|[Date](#schemadate)|false|none|Deny period start date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be the same or after the start.|
|time|[TimeOfDay](#schematimeofday)|false|none|Time in UTC when the Blackout period starts on start_date and ends on end_date. This can be: * Full time. * All zeros for 00:00:00 UTC|

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

<h2 id="tocS_FileShareConfig">FileShareConfig</h2>
<!-- backwards compatibility -->
<a id="schemafileshareconfig"></a>
<a id="schema_FileShareConfig"></a>
<a id="tocSfileshareconfig"></a>
<a id="tocsfileshareconfig"></a>

```json
{
  "capacityGb": "string",
  "name": "string",
  "nfsExportOptions": [
    {
      "accessMode": "ACCESS_MODE_UNSPECIFIED",
      "anonGid": "string",
      "anonUid": "string",
      "ipRanges": [
        "string"
      ],
      "squashMode": "SQUASH_MODE_UNSPECIFIED"
    }
  ],
  "sourceBackup": "string"
}
```

File share configuration for the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacityGb|string(int64)|false|none|File share capacity in gigabytes (GB). Filestore defines 1 GB as 1024^3 bytes.|
|name|string|false|none|The name of the file share (must be 16 characters or less).|
|nfsExportOptions|[[NfsExportOptions](#schemanfsexportoptions)]|false|none|Nfs Export Options. There is a limit of 10 export options per file share.|
|sourceBackup|string|false|none|The resource name of the backup, in the format `projects/{project_number}/locations/{location_id}/backups/{backup_id}`, that this file share has been restored from.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1Instance">GoogleCloudSaasacceleratorManagementProvidersV1Instance</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1instance"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1Instance"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1instance"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1instance"></a>

```json
{
  "consumerDefinedName": "string",
  "createTime": "string",
  "instanceType": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "maintenancePolicyNames": {
    "property1": "string",
    "property2": "string"
  },
  "maintenanceSchedules": {
    "property1": {
      "canReschedule": true,
      "endTime": "string",
      "rolloutManagementPolicy": "string",
      "scheduleDeadlineTime": "string",
      "startTime": "string"
    },
    "property2": {
      "canReschedule": true,
      "endTime": "string",
      "rolloutManagementPolicy": "string",
      "scheduleDeadlineTime": "string",
      "startTime": "string"
    }
  },
  "maintenanceSettings": {
    "exclude": true,
    "isRollback": true,
    "maintenancePolicies": {
      "property1": {
        "createTime": "string",
        "description": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "state": "STATE_UNSPECIFIED",
        "updatePolicy": {
          "channel": "UPDATE_CHANNEL_UNSPECIFIED",
          "denyMaintenancePeriods": [
            {
              "endDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "startDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "time": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            }
          ],
          "window": {
            "dailyCycle": {
              "duration": "string",
              "startTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            },
            "weeklyCycle": {
              "schedule": [
                {
                  "day": "DAY_OF_WEEK_UNSPECIFIED",
                  "duration": "string",
                  "startTime": {
                    "hours": 0,
                    "minutes": 0,
                    "nanos": 0,
                    "seconds": 0
                  }
                }
              ]
            }
          }
        },
        "updateTime": "string"
      },
      "property2": {
        "createTime": "string",
        "description": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "state": "STATE_UNSPECIFIED",
        "updatePolicy": {
          "channel": "UPDATE_CHANNEL_UNSPECIFIED",
          "denyMaintenancePeriods": [
            {
              "endDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "startDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "time": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            }
          ],
          "window": {
            "dailyCycle": {
              "duration": "string",
              "startTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            },
            "weeklyCycle": {
              "schedule": [
                {
                  "day": "DAY_OF_WEEK_UNSPECIFIED",
                  "duration": "string",
                  "startTime": {
                    "hours": 0,
                    "minutes": 0,
                    "nanos": 0,
                    "seconds": 0
                  }
                }
              ]
            }
          }
        },
        "updateTime": "string"
      }
    }
  },
  "name": "string",
  "notificationParameters": {
    "property1": {
      "values": [
        "string"
      ]
    },
    "property2": {
      "values": [
        "string"
      ]
    }
  },
  "producerMetadata": {
    "property1": "string",
    "property2": "string"
  },
  "provisionedResources": [
    {
      "resourceType": "string",
      "resourceUrl": "string"
    }
  ],
  "slmInstanceTemplate": "string",
  "sloMetadata": {
    "nodes": [
      {
        "location": "string",
        "nodeId": "string",
        "perSliEligibility": {
          "eligibilities": {
            "property1": {
              "eligible": true,
              "reason": "string"
            },
            "property2": {
              "eligible": true,
              "reason": "string"
            }
          }
        }
      }
    ],
    "perSliEligibility": {
      "eligibilities": {
        "property1": {
          "eligible": true,
          "reason": "string"
        },
        "property2": {
          "eligible": true,
          "reason": "string"
        }
      }
    },
    "tier": "string"
  },
  "softwareVersions": {
    "property1": "string",
    "property2": "string"
  },
  "state": "STATE_UNSPECIFIED",
  "tenantProjectId": "string",
  "updateTime": "string"
}
```

Instance represents the interface for SLM services to actuate the state of control plane resources. Example Instance in JSON, where consumer-project-number=123456, producer-project-id=cloud-sql: ```json Instance: { "name": "projects/123456/locations/us-east1/instances/prod-instance", "create_time": { "seconds": 1526406431, }, "labels": { "env": "prod", "foo": "bar" }, "state": READY, "software_versions": { "software_update": "cloud-sql-09-28-2018", }, "maintenance_policy_names": { "UpdatePolicy": "projects/123456/locations/us-east1/maintenancePolicies/prod-update-policy", } "tenant_project_id": "cloud-sql-test-tenant", "producer_metadata": { "cloud-sql-tier": "basic", "cloud-sql-instance-size": "1G", }, "provisioned_resources": [ { "resource-type": "compute-instance", "resource-url": "https://www.googleapis.com/compute/v1/projects/cloud-sql/zones/us-east1-b/instances/vm-1", } ], "maintenance_schedules": { "csa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, }, "ncsa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, } }, "consumer_defined_name": "my-sql-instance1", } ``` LINT.IfChange

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumerDefinedName|string|false|none|consumer_defined_name is the name of the instance set by the service consumers. Generally this is different from the `name` field which reperesents the system-assigned id of the instance which the service consumers do not recognize. This is a required field for tenants onboarding to Maintenance Window notifications (go/slm-rollout-maintenance-policies#prerequisites).|
|createTime|string(google-datetime)|false|read-only|Output only. Timestamp when the resource was created.|
|instanceType|string|false|none|Optional. The instance_type of this instance of format: projects/{project_number}/locations/{location_id}/instanceTypes/{instance_type_id}. Instance Type represents a high-level tier or SKU of the service that this instance belong to. When enabled(eg: Maintenance Rollout), Rollout uses 'instance_type' along with 'software_versions' to determine whether instance needs an update or not.|
|labels|object|false|none|Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.|
|maintenancePolicyNames|object|false|none|Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/cloud-saas-mw-ug. Should not be set if maintenance_settings.maintenance_policies is set.|
|maintenanceSchedules|object|false|none|The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions.|
|maintenanceSettings|[GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings](#schemagooglecloudsaasacceleratormanagementprovidersv1maintenancesettings)|false|none|Optional. The MaintenanceSettings associated with instance.|
|name|string|false|none|Unique name of the resource. It uses the form: `projects/{project_number}/locations/{location_id}/instances/{instance_id}` Note: This name is passed, stored and logged across the rollout system. So use of consumer project_id or any other consumer PII in the name is strongly discouraged for wipeout (go/wipeout) compliance. See go/elysium/project_ids#storage-guidance for more details.|
|notificationParameters|object|false|none|Optional. notification_parameter are information that service producers may like to include that is not relevant to Rollout. This parameter will only be passed to Gamma and Cloud Logging for notification/logging purpose.|
|producerMetadata|object|false|read-only|Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata.|
|provisionedResources|[[GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource](#schemagooglecloudsaasacceleratormanagementprovidersv1provisionedresource)]|false|read-only|Output only. The list of data plane resources provisioned for this instance, e.g. compute VMs. See go/get-instance-metadata.|
|slmInstanceTemplate|string|false|none|Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions.|
|sloMetadata|[GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata](#schemagooglecloudsaasacceleratormanagementprovidersv1slometadata)|false|none|Output only. SLO metadata for instance classification in the Standardized dataplane SLO platform. See go/cloud-ssa-standard-slo for feature description.|
|softwareVersions|object|false|none|Software versions that are used to deploy this instance. This can be mutated by rollout services.|
|state|string|false|read-only|Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use).|
|tenantProjectId|string|false|read-only|Output only. ID of the associated GCP tenant project. See go/get-instance-metadata.|
|updateTime|string(google-datetime)|false|read-only|Output only. Timestamp when the resource was last modified.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|READY|
|state|UPDATING|
|state|REPAIRING|
|state|DELETING|
|state|ERROR|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule">GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1maintenanceschedule"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1maintenanceschedule"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1maintenanceschedule"></a>

```json
{
  "canReschedule": true,
  "endTime": "string",
  "rolloutManagementPolicy": "string",
  "scheduleDeadlineTime": "string",
  "startTime": "string"
}
```

Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canReschedule|boolean|false|none|This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers.|
|endTime|string(google-datetime)|false|none|The scheduled end time for the maintenance.|
|rolloutManagementPolicy|string|false|none|The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy.|
|scheduleDeadlineTime|string(google-datetime)|false|none|schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It's normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline.|
|startTime|string(google-datetime)|false|none|The scheduled start time for the maintenance.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings">GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1maintenancesettings"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1maintenancesettings"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1maintenancesettings"></a>

```json
{
  "exclude": true,
  "isRollback": true,
  "maintenancePolicies": {
    "property1": {
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "updatePolicy": {
        "channel": "UPDATE_CHANNEL_UNSPECIFIED",
        "denyMaintenancePeriods": [
          {
            "endDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "startDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "time": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ],
        "window": {
          "dailyCycle": {
            "duration": "string",
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          },
          "weeklyCycle": {
            "schedule": [
              {
                "day": "DAY_OF_WEEK_UNSPECIFIED",
                "duration": "string",
                "startTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                }
              }
            ]
          }
        }
      },
      "updateTime": "string"
    },
    "property2": {
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "updatePolicy": {
        "channel": "UPDATE_CHANNEL_UNSPECIFIED",
        "denyMaintenancePeriods": [
          {
            "endDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "startDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "time": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ],
        "window": {
          "dailyCycle": {
            "duration": "string",
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          },
          "weeklyCycle": {
            "schedule": [
              {
                "day": "DAY_OF_WEEK_UNSPECIFIED",
                "duration": "string",
                "startTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                }
              }
            ]
          }
        }
      },
      "updateTime": "string"
    }
  }
}
```

Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exclude|boolean|false|none|Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted.|
|isRollback|boolean|false|none|Optional. If the update call is triggered from rollback, set the value as true.|
|maintenancePolicies|object|false|none|Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/cloud-saas-mw-ug. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata">GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1nodeslometadata"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1nodeslometadata"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1nodeslometadata"></a>

```json
{
  "location": "string",
  "nodeId": "string",
  "perSliEligibility": {
    "eligibilities": {
      "property1": {
        "eligible": true,
        "reason": "string"
      },
      "property2": {
        "eligible": true,
        "reason": "string"
      }
    }
  }
}
```

Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|none|The location of the node, if different from instance location.|
|nodeId|string|false|none|The id of the node. This should be equal to SaasInstanceNode.node_id.|
|perSliEligibility|[GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility](#schemagooglecloudsaasacceleratormanagementprovidersv1perslisloeligibility)|false|none|If present, this will override eligibility for the node coming from instance or exclusions for specified SLIs.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter">GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1notificationparameter"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1notificationparameter"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1notificationparameter"></a>

```json
{
  "values": [
    "string"
  ]
}
```

Contains notification related data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[string]|false|none|Optional. Array of string values. e.g. instance's replica information.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility">GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1perslisloeligibility"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1perslisloeligibility"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1perslisloeligibility"></a>

```json
{
  "eligibilities": {
    "property1": {
      "eligible": true,
      "reason": "string"
    },
    "property2": {
      "eligible": true,
      "reason": "string"
    }
  }
}
```

PerSliSloEligibility is a mapping from an SLI name to eligibility.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eligibilities|object|false|none|An entry in the eligibilities map specifies an eligibility for a particular SLI for the given instance. The SLI key in the name must be a valid SLI name specified in the Eligibility Exporter binary flags otherwise an error will be emitted by Eligibility Exporter and the oncaller will be alerted. If an SLI has been defined in the binary flags but the eligibilities map does not contain it, the corresponding SLI time series will not be emitted by the Eligibility Exporter. This ensures a smooth rollout and compatibility between the data produced by different versions of the Eligibility Exporters. If eligibilities map contains a key for an SLI which has not been declared in the binary flags, there will be an error message emitted in the Eligibility Exporter log and the metric for the SLI in question will not be emitted.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource">GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1provisionedresource"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1provisionedresource"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1provisionedresource"></a>

```json
{
  "resourceType": "string",
  "resourceUrl": "string"
}
```

Describes provisioned dataplane resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|string|false|none|Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'.|
|resourceUrl|string|false|none|URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)".|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility">GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1sloeligibility"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1sloeligibility"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1sloeligibility"></a>

```json
{
  "eligible": true,
  "reason": "string"
}
```

SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eligible|boolean|false|none|Whether an instance is eligible or ineligible.|
|reason|string|false|none|User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata">GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1slometadata"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1slometadata"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1slometadata"></a>

```json
{
  "nodes": [
    {
      "location": "string",
      "nodeId": "string",
      "perSliEligibility": {
        "eligibilities": {
          "property1": {
            "eligible": true,
            "reason": "string"
          },
          "property2": {
            "eligible": true,
            "reason": "string"
          }
        }
      }
    }
  ],
  "perSliEligibility": {
    "eligibilities": {
      "property1": {
        "eligible": true,
        "reason": "string"
      },
      "property2": {
        "eligible": true,
        "reason": "string"
      }
    }
  },
  "tier": "string"
}
```

SloMetadata contains resources required for proper SLO classification of the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodes|[[GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata](#schemagooglecloudsaasacceleratormanagementprovidersv1nodeslometadata)]|false|none|Optional. List of nodes. Some producers need to use per-node metadata to calculate SLO. This field allows such producers to publish per-node SLO meta data, which will be consumed by SSA Eligibility Exporter and published in the form of per node metric to Monarch.|
|perSliEligibility|[GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility](#schemagooglecloudsaasacceleratormanagementprovidersv1perslisloeligibility)|false|none|Optional. Multiple per-instance SLI eligibilities which apply for individual SLIs.|
|tier|string|false|none|Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty.|

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "etag": "string",
  "fileShares": [
    {
      "capacityGb": "string",
      "name": "string",
      "nfsExportOptions": [
        {
          "accessMode": "ACCESS_MODE_UNSPECIFIED",
          "anonGid": "string",
          "anonUid": "string",
          "ipRanges": [
            "string"
          ],
          "squashMode": "SQUASH_MODE_UNSPECIFIED"
        }
      ],
      "sourceBackup": "string"
    }
  ],
  "kmsKeyName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "networks": [
    {
      "connectMode": "CONNECT_MODE_UNSPECIFIED",
      "ipAddresses": [
        "string"
      ],
      "modes": [
        "ADDRESS_MODE_UNSPECIFIED"
      ],
      "network": "string",
      "reservedIpRange": "string"
    }
  ],
  "satisfiesPzs": true,
  "state": "STATE_UNSPECIFIED",
  "statusMessage": "string",
  "suspensionReasons": [
    "SUSPENSION_REASON_UNSPECIFIED"
  ],
  "tier": "TIER_UNSPECIFIED"
}
```

A Filestore instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the instance was created.|
|description|string|false|none|The description of the instance (2048 characters or less).|
|etag|string|false|none|Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other.|
|fileShares|[[FileShareConfig](#schemafileshareconfig)]|false|none|File system shares on the instance. For this version, only a single file share is supported.|
|kmsKeyName|string|false|none|KMS key name used for data encryption.|
|labels|object|false|none|Resource labels to represent user provided metadata.|
|name|string|false|read-only|Output only. The resource name of the instance, in the format `projects/{project}/locations/{location}/instances/{instance}`.|
|networks|[[NetworkConfig](#schemanetworkconfig)]|false|none|VPC networks to which the instance is connected. For this version, only a single network is supported.|
|satisfiesPzs|boolean|false|read-only|Output only. Reserved for future use.|
|state|string|false|read-only|Output only. The instance state.|
|statusMessage|string|false|read-only|Output only. Additional information about the instance state, if available.|
|suspensionReasons|[string]|false|read-only|Output only. Field indicates all the reasons the instance is in "SUSPENDED" state.|
|tier|string|false|none|The service tier of the instance.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|READY|
|state|REPAIRING|
|state|DELETING|
|state|ERROR|
|state|RESTORING|
|state|SUSPENDED|
|state|SUSPENDING|
|state|RESUMING|
|state|REVERTING|
|suspensionReasons|SUSPENSION_REASON_UNSPECIFIED|
|suspensionReasons|KMS_KEY_ISSUE|
|tier|TIER_UNSPECIFIED|
|tier|STANDARD|
|tier|PREMIUM|
|tier|BASIC_HDD|
|tier|BASIC_SSD|
|tier|HIGH_SCALE_SSD|
|tier|ENTERPRISE|

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
      "capacityGb": "string",
      "createTime": "string",
      "description": "string",
      "downloadBytes": "string",
      "kmsKey": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "satisfiesPzs": true,
      "sourceFileShare": "string",
      "sourceInstance": "string",
      "sourceInstanceTier": "TIER_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED",
      "storageBytes": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

ListBackupsResponse is the result of ListBackupsRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backups|[[Backup](#schemabackup)]|false|none|A list of backups in the project for the specified location. If the `{location}` value in the request is "-", the response contains a list of backups from all locations. If any location is unreachable, the response will only return backups in reachable locations and the "unreachable" field will be populated with a list of unreachable locations.|
|nextPageToken|string|false|none|The token you can use to retrieve the next page of results. Not returned if there are no more results in the list.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListInstancesResponse">ListInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancesresponse"></a>
<a id="schema_ListInstancesResponse"></a>
<a id="tocSlistinstancesresponse"></a>
<a id="tocslistinstancesresponse"></a>

```json
{
  "instances": [
    {
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "fileShares": [
        {
          "capacityGb": "string",
          "name": "string",
          "nfsExportOptions": [
            {
              "accessMode": "ACCESS_MODE_UNSPECIFIED",
              "anonGid": "string",
              "anonUid": "string",
              "ipRanges": [
                "string"
              ],
              "squashMode": "SQUASH_MODE_UNSPECIFIED"
            }
          ],
          "sourceBackup": "string"
        }
      ],
      "kmsKeyName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "networks": [
        {
          "connectMode": "CONNECT_MODE_UNSPECIFIED",
          "ipAddresses": [
            "string"
          ],
          "modes": [
            "ADDRESS_MODE_UNSPECIFIED"
          ],
          "network": "string",
          "reservedIpRange": "string"
        }
      ],
      "satisfiesPzs": true,
      "state": "STATE_UNSPECIFIED",
      "statusMessage": "string",
      "suspensionReasons": [
        "SUSPENSION_REASON_UNSPECIFIED"
      ],
      "tier": "TIER_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

ListInstancesResponse is the result of ListInstancesRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instances|[[Instance](#schemainstance)]|false|none|A list of instances in the project for the specified location. If the `{location}` value in the request is "-", the response contains a list of instances from all locations. If any location is unreachable, the response will only return instances in reachable locations and the "unreachable" field will be populated with a list of unreachable locations.|
|nextPageToken|string|false|none|The token you can use to retrieve the next page of results. Not returned if there are no more results in the list.|
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

<h2 id="tocS_ListSnapshotsResponse">ListSnapshotsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsnapshotsresponse"></a>
<a id="schema_ListSnapshotsResponse"></a>
<a id="tocSlistsnapshotsresponse"></a>
<a id="tocslistsnapshotsresponse"></a>

```json
{
  "nextPageToken": "string",
  "snapshots": [
    {
      "createTime": "string",
      "description": "string",
      "filesystemUsedBytes": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ]
}
```

ListSnapshotsResponse is the result of ListSnapshotsRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The token you can use to retrieve the next page of results. Not returned if there are no more results in the list.|
|snapshots|[[Snapshot](#schemasnapshot)]|false|none|A list of snapshots in the project for the specified instance.|

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

<h2 id="tocS_MaintenancePolicy">MaintenancePolicy</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancepolicy"></a>
<a id="schema_MaintenancePolicy"></a>
<a id="tocSmaintenancepolicy"></a>
<a id="tocsmaintenancepolicy"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "updatePolicy": {
    "channel": "UPDATE_CHANNEL_UNSPECIFIED",
    "denyMaintenancePeriods": [
      {
        "endDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "startDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "time": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      }
    ],
    "window": {
      "dailyCycle": {
        "duration": "string",
        "startTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      },
      "weeklyCycle": {
        "schedule": [
          {
            "day": "DAY_OF_WEEK_UNSPECIFIED",
            "duration": "string",
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ]
      }
    }
  },
  "updateTime": "string"
}
```

LINT.IfChange Defines policies to service maintenance events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Output only. The time when the resource was created.|
|description|string|false|none|Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.|
|labels|object|false|none|Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.|
|name|string|false|none|Required. MaintenancePolicy name using the form: `projects/{project_id}/locations/{location_id}/maintenancePolicies/{maintenance_policy_id}` where {project_id} refers to a GCP consumer project ID, {location_id} refers to a GCP region/zone, {maintenance_policy_id} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`.|
|state|string|false|none|Optional. The state of the policy.|
|updatePolicy|[UpdatePolicy](#schemaupdatepolicy)|false|none|Maintenance policy applicable to instance update.|
|updateTime|string(google-datetime)|false|none|Output only. The time when the resource was updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|READY|
|state|DELETING|

<h2 id="tocS_MaintenanceWindow">MaintenanceWindow</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindow"></a>
<a id="schema_MaintenanceWindow"></a>
<a id="tocSmaintenancewindow"></a>
<a id="tocsmaintenancewindow"></a>

```json
{
  "dailyCycle": {
    "duration": "string",
    "startTime": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    }
  },
  "weeklyCycle": {
    "schedule": [
      {
        "day": "DAY_OF_WEEK_UNSPECIFIED",
        "duration": "string",
        "startTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      }
    ]
  }
}
```

MaintenanceWindow definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyCycle|[DailyCycle](#schemadailycycle)|false|none|Daily cycle.|
|weeklyCycle|[WeeklyCycle](#schemaweeklycycle)|false|none|Weekly cycle.|

<h2 id="tocS_NetworkConfig">NetworkConfig</h2>
<!-- backwards compatibility -->
<a id="schemanetworkconfig"></a>
<a id="schema_NetworkConfig"></a>
<a id="tocSnetworkconfig"></a>
<a id="tocsnetworkconfig"></a>

```json
{
  "connectMode": "CONNECT_MODE_UNSPECIFIED",
  "ipAddresses": [
    "string"
  ],
  "modes": [
    "ADDRESS_MODE_UNSPECIFIED"
  ],
  "network": "string",
  "reservedIpRange": "string"
}
```

Network configuration for the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectMode|string|false|none|The network connect mode of the Filestore instance. If not provided, the connect mode defaults to DIRECT_PEERING.|
|ipAddresses|[string]|false|read-only|Output only. IPv4 addresses in the format `{octet1}.{octet2}.{octet3}.{octet4}` or IPv6 addresses in the format `{block1}:{block2}:{block3}:{block4}:{block5}:{block6}:{block7}:{block8}`.|
|modes|[string]|false|none|Internet protocol versions for which the instance has IP addresses assigned. For this version, only MODE_IPV4 is supported.|
|network|string|false|none|The name of the Google Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected.|
|reservedIpRange|string|false|none|Optional, reserved_ip_range can have one of the following two types of values. * CIDR range value when using DIRECT_PEERING connect mode. * [Allocated IP address range](https://cloud.google.com/compute/docs/ip-addresses/reserve-static-internal-ip-address) when using PRIVATE_SERVICE_ACCESS connect mode. When the name of an allocated IP address range is specified, it must be one of the ranges associated with the private service access connection. When specified as a direct CIDR value, it must be a /29 CIDR block for Basic tier, a /24 CIDR block for High Scale tier, or a /26 CIDR block for Enterprise tier in one of the [internal IP address ranges](https://www.arin.net/reference/research/statistics/address_filters/) that identifies the range of IP addresses reserved for this instance. For example, 10.0.0.0/29, 192.168.0.0/24 or 192.168.0.0/26, respectively. The range you specify can't overlap with either existing subnets or assigned IP address ranges for other Filestore instances in the selected VPC network.|

#### Enumerated Values

|Property|Value|
|---|---|
|connectMode|CONNECT_MODE_UNSPECIFIED|
|connectMode|DIRECT_PEERING|
|connectMode|PRIVATE_SERVICE_ACCESS|
|modes|ADDRESS_MODE_UNSPECIFIED|
|modes|MODE_IPV4|

<h2 id="tocS_NfsExportOptions">NfsExportOptions</h2>
<!-- backwards compatibility -->
<a id="schemanfsexportoptions"></a>
<a id="schema_NfsExportOptions"></a>
<a id="tocSnfsexportoptions"></a>
<a id="tocsnfsexportoptions"></a>

```json
{
  "accessMode": "ACCESS_MODE_UNSPECIFIED",
  "anonGid": "string",
  "anonUid": "string",
  "ipRanges": [
    "string"
  ],
  "squashMode": "SQUASH_MODE_UNSPECIFIED"
}
```

NFS export options specifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessMode|string|false|none|Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests. The default is READ_WRITE.|
|anonGid|string(int64)|false|none|An integer representing the anonymous group id with a default value of 65534. Anon_gid may only be set with squash_mode of ROOT_SQUASH. An error will be returned if this field is specified for other squash_mode settings.|
|anonUid|string(int64)|false|none|An integer representing the anonymous user id with a default value of 65534. Anon_uid may only be set with squash_mode of ROOT_SQUASH. An error will be returned if this field is specified for other squash_mode settings.|
|ipRanges|[string]|false|none|List of either an IPv4 addresses in the format `{octet1}.{octet2}.{octet3}.{octet4}` or CIDR ranges in the format `{octet1}.{octet2}.{octet3}.{octet4}/{mask size}` which may mount the file share. Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned. The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions.|
|squashMode|string|false|none|Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access. The default is NO_ROOT_SQUASH.|

#### Enumerated Values

|Property|Value|
|---|---|
|accessMode|ACCESS_MODE_UNSPECIFIED|
|accessMode|READ_ONLY|
|accessMode|READ_WRITE|
|squashMode|SQUASH_MODE_UNSPECIFIED|
|squashMode|NO_ROOT_SQUASH|
|squashMode|ROOT_SQUASH|

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
  "cancelRequested": true,
  "createTime": "string",
  "endTime": "string",
  "statusDetail": "string",
  "target": "string",
  "verb": "string"
}
```

Represents the metadata of the long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|read-only|Output only. API version used to start the operation.|
|cancelRequested|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|statusDetail|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_RestoreInstanceRequest">RestoreInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestoreinstancerequest"></a>
<a id="schema_RestoreInstanceRequest"></a>
<a id="tocSrestoreinstancerequest"></a>
<a id="tocsrestoreinstancerequest"></a>

```json
{
  "fileShare": "string",
  "sourceBackup": "string"
}
```

RestoreInstanceRequest restores an existing instance's file share from a backup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileShare|string|false|none|Required. Name of the file share in the Filestore instance that the backup is being restored to.|
|sourceBackup|string|false|none|The resource name of the backup, in the format `projects/{project_number}/locations/{location_id}/backups/{backup_id}`.|

<h2 id="tocS_RevertInstanceRequest">RevertInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemarevertinstancerequest"></a>
<a id="schema_RevertInstanceRequest"></a>
<a id="tocSrevertinstancerequest"></a>
<a id="tocsrevertinstancerequest"></a>

```json
{
  "targetSnapshotId": "string"
}
```

RevertInstanceRequest reverts the given instance's file share to the specified snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetSnapshotId|string|false|none|Required. The snapshot resource ID, in the format 'my-snapshot', where the specified ID is the {snapshot_id} of the fully qualified name like projects/{project_id}/locations/{location_id}/instances/{instance_id}/snapshots/{snapshot_id}|

<h2 id="tocS_Schedule">Schedule</h2>
<!-- backwards compatibility -->
<a id="schemaschedule"></a>
<a id="schema_Schedule"></a>
<a id="tocSschedule"></a>
<a id="tocsschedule"></a>

```json
{
  "day": "DAY_OF_WEEK_UNSPECIFIED",
  "duration": "string",
  "startTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  }
}
```

Configure the schedule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|string|false|none|Allows to define schedule that runs specified day of the week.|
|duration|string(google-duration)|false|none|Output only. Duration of the time window, set by service producer.|
|startTime|[TimeOfDay](#schematimeofday)|false|none|Time within the window to start the operations.|

#### Enumerated Values

|Property|Value|
|---|---|
|day|DAY_OF_WEEK_UNSPECIFIED|
|day|MONDAY|
|day|TUESDAY|
|day|WEDNESDAY|
|day|THURSDAY|
|day|FRIDAY|
|day|SATURDAY|
|day|SUNDAY|

<h2 id="tocS_Snapshot">Snapshot</h2>
<!-- backwards compatibility -->
<a id="schemasnapshot"></a>
<a id="schema_Snapshot"></a>
<a id="tocSsnapshot"></a>
<a id="tocssnapshot"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "filesystemUsedBytes": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

A Filestore snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the snapshot was created.|
|description|string|false|none|A description of the snapshot with 2048 characters or less. Requests with longer descriptions will be rejected.|
|filesystemUsedBytes|string(int64)|false|read-only|Output only. The amount of bytes needed to allocate a full copy of the snapshot content|
|labels|object|false|none|Resource labels to represent user provided metadata.|
|name|string|false|read-only|Output only. The resource name of the snapshot, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}/snapshots/{snapshot_id}`.|
|state|string|false|read-only|Output only. The snapshot state.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|READY|
|state|DELETING|

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

<h2 id="tocS_UpdatePolicy">UpdatePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepolicy"></a>
<a id="schema_UpdatePolicy"></a>
<a id="tocSupdatepolicy"></a>
<a id="tocsupdatepolicy"></a>

```json
{
  "channel": "UPDATE_CHANNEL_UNSPECIFIED",
  "denyMaintenancePeriods": [
    {
      "endDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "time": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    }
  ],
  "window": {
    "dailyCycle": {
      "duration": "string",
      "startTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    },
    "weeklyCycle": {
      "schedule": [
        {
          "day": "DAY_OF_WEEK_UNSPECIFIED",
          "duration": "string",
          "startTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          }
        }
      ]
    }
  }
}
```

Maintenance policy applicable to instance updates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|none|Optional. Relative scheduling channel applied to resource.|
|denyMaintenancePeriods|[[DenyMaintenancePeriod](#schemadenymaintenanceperiod)]|false|none|Deny Maintenance Period that is applied to resource to indicate when maintenance is forbidden. User can specify zero or more non-overlapping deny periods. Maximum number of deny_maintenance_periods expected is one.|
|window|[MaintenanceWindow](#schemamaintenancewindow)|false|none|Optional. Maintenance window that is applied to resources covered by this policy.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|UPDATE_CHANNEL_UNSPECIFIED|
|channel|EARLIER|
|channel|LATER|
|channel|WEEK1|
|channel|WEEK2|
|channel|WEEK5|

<h2 id="tocS_WeeklyCycle">WeeklyCycle</h2>
<!-- backwards compatibility -->
<a id="schemaweeklycycle"></a>
<a id="schema_WeeklyCycle"></a>
<a id="tocSweeklycycle"></a>
<a id="tocsweeklycycle"></a>

```json
{
  "schedule": [
    {
      "day": "DAY_OF_WEEK_UNSPECIFIED",
      "duration": "string",
      "startTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    }
  ]
}
```

Time window specified for weekly operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule|[[Schedule](#schemaschedule)]|false|none|User can specify multiple windows in a week. Minimum of 1 window.|
