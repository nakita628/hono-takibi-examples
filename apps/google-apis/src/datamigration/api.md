<h1 id="database-migration-api">Database Migration API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manage Cloud Database Migration Service resources on Google Cloud Platform.

Base URLs:

* <a href="https://datamigration.googleapis.com/">https://datamigration.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/database-migration/">External documentation</a>

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

<h1 id="database-migration-api-projects">projects</h1>

## datamigration.projects.locations.migrationJobs.generateSshScript

<a id="opIddatamigration.projects.locations.migrationJobs.generateSshScript"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:generateSshScript \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "vm": "string",
    "vmCreationConfig": {
      "subnet": "string",
      "vmMachineType": "string",
      "vmZone": "string"
    },
    "vmPort": 0,
    "vmSelectionConfig": {
      "vmZone": "string"
    }
  }'
```

`POST /v1beta1/{migrationJob}:generateSshScript`

Generate a SSH configuration script to configure the reverse SSH connectivity.

> Body parameter

```json
{
  "vm": "string",
  "vmCreationConfig": {
    "subnet": "string",
    "vmMachineType": "string",
    "vmZone": "string"
  },
  "vmPort": 0,
  "vmSelectionConfig": {
    "vmZone": "string"
  }
}
```

<h3 id="datamigrationprojectslocationsmigrationjobsgeneratesshscript-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|migrationJob|path|string|true|Name of the migration job resource to generate the SSH script.|
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
|body|body|[GenerateSshScriptRequest](#schemageneratesshscriptrequest)|false|none|
|» vm|body|string|false|Required. Bastion VM Instance name to use or to create.|
|» vmCreationConfig|body|[VmCreationConfig](#schemavmcreationconfig)|false|The VM creation configuration|
|» vmPort|body|integer(int32)|false|The port that will be open on the bastion host|
|» vmSelectionConfig|body|[VmSelectionConfig](#schemavmselectionconfig)|false|The VM selection configuration|

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
  "script": "string"
}
```

<h3 id="datamigrationprojectslocationsmigrationjobsgeneratesshscript-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SshScript](#schemasshscript)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.operations.get

<a id="opIddatamigration.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="datamigrationprojectslocationsoperationsget-parameters">Parameters</h3>

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

<h3 id="datamigrationprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.operations.delete

<a id="opIddatamigration.projects.locations.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="datamigrationprojectslocationsoperationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be deleted.|
|force|query|boolean|false|The destination CloudSQL connection profile is always deleted with the migration job. In case of force delete, the destination CloudSQL replica database is also deleted.|
|requestId|query|string|false|A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|
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

<h3 id="datamigrationprojectslocationsoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.migrationJobs.patch

<a id="opIddatamigration.projects.locations.migrationJobs.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "destination": "string",
    "destinationDatabase": {
      "engine": "DATABASE_ENGINE_UNSPECIFIED",
      "provider": "DATABASE_PROVIDER_UNSPECIFIED"
    },
    "displayName": "string",
    "dumpPath": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "reverseSshConnectivity": {
      "vm": "string",
      "vmIp": "string",
      "vmPort": 0,
      "vpc": "string"
    },
    "source": "string",
    "sourceDatabase": {
      "engine": "DATABASE_ENGINE_UNSPECIFIED",
      "provider": "DATABASE_PROVIDER_UNSPECIFIED"
    },
    "state": "STATE_UNSPECIFIED",
    "staticIpConnectivity": {},
    "type": "TYPE_UNSPECIFIED",
    "vpcPeeringConnectivity": {
      "vpc": "string"
    }
  }'
```

`PATCH /v1beta1/{name}`

Updates the parameters of a single migration job.

> Body parameter

```json
{
  "destination": "string",
  "destinationDatabase": {
    "engine": "DATABASE_ENGINE_UNSPECIFIED",
    "provider": "DATABASE_PROVIDER_UNSPECIFIED"
  },
  "displayName": "string",
  "dumpPath": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "reverseSshConnectivity": {
    "vm": "string",
    "vmIp": "string",
    "vmPort": 0,
    "vpc": "string"
  },
  "source": "string",
  "sourceDatabase": {
    "engine": "DATABASE_ENGINE_UNSPECIFIED",
    "provider": "DATABASE_PROVIDER_UNSPECIFIED"
  },
  "state": "STATE_UNSPECIFIED",
  "staticIpConnectivity": {},
  "type": "TYPE_UNSPECIFIED",
  "vpcPeeringConnectivity": {
    "vpc": "string"
  }
}
```

<h3 id="datamigrationprojectslocationsmigrationjobspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}.|
|requestId|query|string|false|A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|
|updateMask|query|string|false|Required. Field mask is used to specify the fields to be overwritten in the migration job resource by the update.|
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
|body|body|[MigrationJob](#schemamigrationjob)|false|none|
|» destination|body|string|false|Required. The resource name (URI) of the destination connection profile.|
|» destinationDatabase|body|[DatabaseType](#schemadatabasetype)|false|The database engine type and provider of the destination.|
|» displayName|body|string|false|The migration job display name.|
|» dumpPath|body|string|false|The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]).|
|» labels|body|object|false|The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}.|
|» reverseSshConnectivity|body|[ReverseSshConnectivity](#schemareversesshconnectivity)|false|The details needed to communicate to the source over Reverse SSH tunnel connectivity.|
|» source|body|string|false|Required. The resource name (URI) of the source connection profile.|
|» sourceDatabase|body|[DatabaseType](#schemadatabasetype)|false|The database engine type and provider of the source.|
|» state|body|string|false|The current migration job state.|
|» staticIpConnectivity|body|[StaticIpConnectivity](#schemastaticipconnectivity)|false|static ip connectivity data (default, no additional details needed).|
|» type|body|string|false|Required. The migration job type.|
|» vpcPeeringConnectivity|body|[VpcPeeringConnectivity](#schemavpcpeeringconnectivity)|false|The details of the VPC network that the source database is located in.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|STATE_UNSPECIFIED|
|» state|MAINTENANCE|
|» state|DRAFT|
|» state|CREATING|
|» state|NOT_STARTED|
|» state|RUNNING|
|» state|FAILED|
|» state|COMPLETED|
|» state|DELETING|
|» state|STOPPING|
|» state|STOPPED|
|» state|DELETED|
|» state|UPDATING|
|» state|STARTING|
|» state|RESTARTING|
|» state|RESUMING|
|» type|TYPE_UNSPECIFIED|
|» type|ONE_TIME|
|» type|CONTINUOUS|

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

<h3 id="datamigrationprojectslocationsmigrationjobspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.list

<a id="opIddatamigration.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="datamigrationprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="datamigrationprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.operations.list

<a id="opIddatamigration.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="datamigrationprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="datamigrationprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.operations.cancel

<a id="opIddatamigration.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="datamigrationprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="datamigrationprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.migrationJobs.promote

<a id="opIddatamigration.projects.locations.migrationJobs.promote"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:promote \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:promote`

Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.

> Body parameter

```json
{}
```

<h3 id="datamigrationprojectslocationsmigrationjobspromote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the migration job resource to promote.|
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
|body|body|[PromoteMigrationJobRequest](#schemapromotemigrationjobrequest)|false|none|

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

<h3 id="datamigrationprojectslocationsmigrationjobspromote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.migrationJobs.restart

<a id="opIddatamigration.projects.locations.migrationJobs.restart"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:restart \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:restart`

Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.

> Body parameter

```json
{}
```

<h3 id="datamigrationprojectslocationsmigrationjobsrestart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the migration job resource to restart.|
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
|body|body|[RestartMigrationJobRequest](#schemarestartmigrationjobrequest)|false|none|

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

<h3 id="datamigrationprojectslocationsmigrationjobsrestart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.migrationJobs.resume

<a id="opIddatamigration.projects.locations.migrationJobs.resume"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:resume \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:resume`

Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).

> Body parameter

```json
{}
```

<h3 id="datamigrationprojectslocationsmigrationjobsresume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the migration job resource to resume.|
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
|body|body|[ResumeMigrationJobRequest](#schemaresumemigrationjobrequest)|false|none|

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

<h3 id="datamigrationprojectslocationsmigrationjobsresume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.migrationJobs.start

<a id="opIddatamigration.projects.locations.migrationJobs.start"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:start`

Start an already created migration job.

> Body parameter

```json
{}
```

<h3 id="datamigrationprojectslocationsmigrationjobsstart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the migration job resource to start.|
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
|body|body|[StartMigrationJobRequest](#schemastartmigrationjobrequest)|false|none|

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

<h3 id="datamigrationprojectslocationsmigrationjobsstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.migrationJobs.stop

<a id="opIddatamigration.projects.locations.migrationJobs.stop"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:stop`

Stops a running migration job.

> Body parameter

```json
{}
```

<h3 id="datamigrationprojectslocationsmigrationjobsstop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the migration job resource to stop.|
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
|body|body|[StopMigrationJobRequest](#schemastopmigrationjobrequest)|false|none|

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

<h3 id="datamigrationprojectslocationsmigrationjobsstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.migrationJobs.verify

<a id="opIddatamigration.projects.locations.migrationJobs.verify"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:verify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:verify`

Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.

> Body parameter

```json
{}
```

<h3 id="datamigrationprojectslocationsmigrationjobsverify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the migration job resource to verify.|
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
|body|body|[VerifyMigrationJobRequest](#schemaverifymigrationjobrequest)|false|none|

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

<h3 id="datamigrationprojectslocationsmigrationjobsverify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.connectionProfiles.list

<a id="opIddatamigration.projects.locations.connectionProfiles.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/connectionProfiles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/connectionProfiles`

Retrieve a list of all connection profiles in a given project and location.

<h3 id="datamigrationprojectslocationsconnectionprofileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of connection profiles.|
|filter|query|string|false|A filter expression that filters connection profiles listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list connection profiles created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z**. You can also filter nested fields. For example, you could specify **mySql.username = %lt;my_username%gt;** to list all connection profiles configured to connect with a specific username.|
|orderBy|query|string|false|the order by fields for the result.|
|pageSize|query|integer|false|The maximum number of connection profiles to return. The service may return fewer than this value. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|A page token, received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token.|
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
  "connectionProfiles": [
    {
      "cloudsql": {
        "cloudSqlId": "string",
        "privateIp": "string",
        "publicIp": "string",
        "settings": {
          "activationPolicy": "SQL_ACTIVATION_POLICY_UNSPECIFIED",
          "autoStorageIncrease": true,
          "dataDiskSizeGb": "string",
          "dataDiskType": "SQL_DATA_DISK_TYPE_UNSPECIFIED",
          "databaseFlags": {
            "property1": "string",
            "property2": "string"
          },
          "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
          "ipConfig": {
            "authorizedNetworks": [
              {
                "expireTime": "string",
                "label": "string",
                "ttl": "string",
                "value": "string"
              }
            ],
            "enableIpv4": true,
            "privateNetwork": "string",
            "requireSsl": true
          },
          "rootPassword": "string",
          "rootPasswordSet": true,
          "sourceId": "string",
          "storageAutoResizeLimit": "string",
          "tier": "string",
          "userLabels": {
            "property1": "string",
            "property2": "string"
          },
          "zone": "string"
        }
      },
      "createTime": "string",
      "displayName": "string",
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
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mysql": {
        "cloudSqlId": "string",
        "host": "string",
        "password": "string",
        "passwordSet": true,
        "port": 0,
        "ssl": {
          "caCertificate": "string",
          "clientCertificate": "string",
          "clientKey": "string",
          "type": "SSL_TYPE_UNSPECIFIED"
        },
        "username": "string"
      },
      "name": "string",
      "provider": "DATABASE_PROVIDER_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="datamigrationprojectslocationsconnectionprofileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListConnectionProfilesResponse](#schemalistconnectionprofilesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.connectionProfiles.create

<a id="opIddatamigration.projects.locations.connectionProfiles.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/connectionProfiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cloudsql": {
      "settings": {
        "activationPolicy": "SQL_ACTIVATION_POLICY_UNSPECIFIED",
        "autoStorageIncrease": true,
        "dataDiskSizeGb": "string",
        "dataDiskType": "SQL_DATA_DISK_TYPE_UNSPECIFIED",
        "databaseFlags": {
          "property1": "string",
          "property2": "string"
        },
        "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
        "ipConfig": {
          "authorizedNetworks": [
            {
              "expireTime": "string",
              "label": "string",
              "ttl": "string",
              "value": "string"
            }
          ],
          "enableIpv4": true,
          "privateNetwork": "string",
          "requireSsl": true
        },
        "rootPassword": "string",
        "sourceId": "string",
        "storageAutoResizeLimit": "string",
        "tier": "string",
        "userLabels": {
          "property1": "string",
          "property2": "string"
        },
        "zone": "string"
      }
    },
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "mysql": {
      "cloudSqlId": "string",
      "host": "string",
      "password": "string",
      "port": 0,
      "ssl": {
        "caCertificate": "string",
        "clientCertificate": "string",
        "clientKey": "string"
      },
      "username": "string"
    },
    "name": "string",
    "provider": "DATABASE_PROVIDER_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED"
  }'
```

`POST /v1beta1/{parent}/connectionProfiles`

Creates a new connection profile in a given project and location.

> Body parameter

```json
{
  "cloudsql": {
    "settings": {
      "activationPolicy": "SQL_ACTIVATION_POLICY_UNSPECIFIED",
      "autoStorageIncrease": true,
      "dataDiskSizeGb": "string",
      "dataDiskType": "SQL_DATA_DISK_TYPE_UNSPECIFIED",
      "databaseFlags": {
        "property1": "string",
        "property2": "string"
      },
      "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
      "ipConfig": {
        "authorizedNetworks": [
          {
            "expireTime": "string",
            "label": "string",
            "ttl": "string",
            "value": "string"
          }
        ],
        "enableIpv4": true,
        "privateNetwork": "string",
        "requireSsl": true
      },
      "rootPassword": "string",
      "sourceId": "string",
      "storageAutoResizeLimit": "string",
      "tier": "string",
      "userLabels": {
        "property1": "string",
        "property2": "string"
      },
      "zone": "string"
    }
  },
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mysql": {
    "cloudSqlId": "string",
    "host": "string",
    "password": "string",
    "port": 0,
    "ssl": {
      "caCertificate": "string",
      "clientCertificate": "string",
      "clientKey": "string"
    },
    "username": "string"
  },
  "name": "string",
  "provider": "DATABASE_PROVIDER_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="datamigrationprojectslocationsconnectionprofilescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of connection profiles.|
|connectionProfileId|query|string|false|Required. The connection profile identifier.|
|requestId|query|string|false|A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|
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
|body|body|[ConnectionProfile](#schemaconnectionprofile)|false|none|
|» cloudsql|body|[CloudSqlConnectionProfile](#schemacloudsqlconnectionprofile)|false|A CloudSQL database connection profile.|
|» displayName|body|string|false|The connection profile display name.|
|» labels|body|object|false|The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.|
|» » **additionalProperties**|body|string|false|none|
|» mysql|body|[MySqlConnectionProfile](#schemamysqlconnectionprofile)|false|A MySQL database connection profile.|
|» name|body|string|false|The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}.|
|» provider|body|string|false|The database provider.|
|» state|body|string|false|The current connection profile state (e.g. DRAFT, READY, or FAILED).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» provider|DATABASE_PROVIDER_UNSPECIFIED|
|» provider|CLOUDSQL|
|» provider|RDS|
|» state|STATE_UNSPECIFIED|
|» state|DRAFT|
|» state|CREATING|
|» state|READY|
|» state|UPDATING|
|» state|DELETING|
|» state|DELETED|
|» state|FAILED|

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

<h3 id="datamigrationprojectslocationsconnectionprofilescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.migrationJobs.list

<a id="opIddatamigration.projects.locations.migrationJobs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/migrationJobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/migrationJobs`

Lists migration jobs in a given project and location.

<h3 id="datamigrationprojectslocationsmigrationjobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of migrationJobs.|
|filter|query|string|false|A filter expression that filters migration jobs listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list migration jobs created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z.** You can also filter nested fields. For example, you could specify **reverseSshConnectivity.vmIp = "1.2.3.4"** to select all migration jobs connecting through the specific SSH tunnel bastion.|
|orderBy|query|string|false|Sort the results based on the migration job name. Valid values are: "name", "name asc", and "name desc".|
|pageSize|query|integer|false|The maximum number of migration jobs to return. The service may return fewer than this value. If unspecified, at most 50 migration jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|The nextPageToken value received in the previous call to migrationJobs.list, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to migrationJobs.list must match the call that provided the page token.|
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
  "migrationJobs": [
    {
      "createTime": "string",
      "destination": "string",
      "destinationDatabase": {
        "engine": "DATABASE_ENGINE_UNSPECIFIED",
        "provider": "DATABASE_PROVIDER_UNSPECIFIED"
      },
      "displayName": "string",
      "dumpPath": "string",
      "duration": "string",
      "endTime": "string",
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
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "phase": "PHASE_UNSPECIFIED",
      "reverseSshConnectivity": {
        "vm": "string",
        "vmIp": "string",
        "vmPort": 0,
        "vpc": "string"
      },
      "source": "string",
      "sourceDatabase": {
        "engine": "DATABASE_ENGINE_UNSPECIFIED",
        "provider": "DATABASE_PROVIDER_UNSPECIFIED"
      },
      "state": "STATE_UNSPECIFIED",
      "staticIpConnectivity": {},
      "type": "TYPE_UNSPECIFIED",
      "updateTime": "string",
      "vpcPeeringConnectivity": {
        "vpc": "string"
      }
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="datamigrationprojectslocationsmigrationjobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListMigrationJobsResponse](#schemalistmigrationjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.migrationJobs.create

<a id="opIddatamigration.projects.locations.migrationJobs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/migrationJobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "destination": "string",
    "destinationDatabase": {
      "engine": "DATABASE_ENGINE_UNSPECIFIED",
      "provider": "DATABASE_PROVIDER_UNSPECIFIED"
    },
    "displayName": "string",
    "dumpPath": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "reverseSshConnectivity": {
      "vm": "string",
      "vmIp": "string",
      "vmPort": 0,
      "vpc": "string"
    },
    "source": "string",
    "sourceDatabase": {
      "engine": "DATABASE_ENGINE_UNSPECIFIED",
      "provider": "DATABASE_PROVIDER_UNSPECIFIED"
    },
    "state": "STATE_UNSPECIFIED",
    "staticIpConnectivity": {},
    "type": "TYPE_UNSPECIFIED",
    "vpcPeeringConnectivity": {
      "vpc": "string"
    }
  }'
```

`POST /v1beta1/{parent}/migrationJobs`

Creates a new migration job in a given project and location.

> Body parameter

```json
{
  "destination": "string",
  "destinationDatabase": {
    "engine": "DATABASE_ENGINE_UNSPECIFIED",
    "provider": "DATABASE_PROVIDER_UNSPECIFIED"
  },
  "displayName": "string",
  "dumpPath": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "reverseSshConnectivity": {
    "vm": "string",
    "vmIp": "string",
    "vmPort": 0,
    "vpc": "string"
  },
  "source": "string",
  "sourceDatabase": {
    "engine": "DATABASE_ENGINE_UNSPECIFIED",
    "provider": "DATABASE_PROVIDER_UNSPECIFIED"
  },
  "state": "STATE_UNSPECIFIED",
  "staticIpConnectivity": {},
  "type": "TYPE_UNSPECIFIED",
  "vpcPeeringConnectivity": {
    "vpc": "string"
  }
}
```

<h3 id="datamigrationprojectslocationsmigrationjobscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of migration jobs.|
|migrationJobId|query|string|false|Required. The ID of the instance to create.|
|requestId|query|string|false|A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|
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
|body|body|[MigrationJob](#schemamigrationjob)|false|none|
|» destination|body|string|false|Required. The resource name (URI) of the destination connection profile.|
|» destinationDatabase|body|[DatabaseType](#schemadatabasetype)|false|The database engine type and provider of the destination.|
|» displayName|body|string|false|The migration job display name.|
|» dumpPath|body|string|false|The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]).|
|» labels|body|object|false|The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}.|
|» reverseSshConnectivity|body|[ReverseSshConnectivity](#schemareversesshconnectivity)|false|The details needed to communicate to the source over Reverse SSH tunnel connectivity.|
|» source|body|string|false|Required. The resource name (URI) of the source connection profile.|
|» sourceDatabase|body|[DatabaseType](#schemadatabasetype)|false|The database engine type and provider of the source.|
|» state|body|string|false|The current migration job state.|
|» staticIpConnectivity|body|[StaticIpConnectivity](#schemastaticipconnectivity)|false|static ip connectivity data (default, no additional details needed).|
|» type|body|string|false|Required. The migration job type.|
|» vpcPeeringConnectivity|body|[VpcPeeringConnectivity](#schemavpcpeeringconnectivity)|false|The details of the VPC network that the source database is located in.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|STATE_UNSPECIFIED|
|» state|MAINTENANCE|
|» state|DRAFT|
|» state|CREATING|
|» state|NOT_STARTED|
|» state|RUNNING|
|» state|FAILED|
|» state|COMPLETED|
|» state|DELETING|
|» state|STOPPING|
|» state|STOPPED|
|» state|DELETED|
|» state|UPDATING|
|» state|STARTING|
|» state|RESTARTING|
|» state|RESUMING|
|» type|TYPE_UNSPECIFIED|
|» type|ONE_TIME|
|» type|CONTINUOUS|

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

<h3 id="datamigrationprojectslocationsmigrationjobscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.migrationJobs.getIamPolicy

<a id="opIddatamigration.projects.locations.migrationJobs.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="datamigrationprojectslocationsmigrationjobsgetiampolicy-parameters">Parameters</h3>

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

<h3 id="datamigrationprojectslocationsmigrationjobsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.migrationJobs.setIamPolicy

<a id="opIddatamigration.projects.locations.migrationJobs.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setIamPolicy \
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

`POST /v1beta1/{resource}:setIamPolicy`

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

<h3 id="datamigrationprojectslocationsmigrationjobssetiampolicy-parameters">Parameters</h3>

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

<h3 id="datamigrationprojectslocationsmigrationjobssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datamigration.projects.locations.migrationJobs.testIamPermissions

<a id="opIddatamigration.projects.locations.migrationJobs.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:testIamPermissions \
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

`POST /v1beta1/{resource}:testIamPermissions`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="datamigrationprojectslocationsmigrationjobstestiampermissions-parameters">Parameters</h3>

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

<h3 id="datamigrationprojectslocationsmigrationjobstestiampermissions-responses">Responses</h3>

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

<h2 id="tocS_CloudSqlConnectionProfile">CloudSqlConnectionProfile</h2>
<!-- backwards compatibility -->
<a id="schemacloudsqlconnectionprofile"></a>
<a id="schema_CloudSqlConnectionProfile"></a>
<a id="tocScloudsqlconnectionprofile"></a>
<a id="tocscloudsqlconnectionprofile"></a>

```json
{
  "cloudSqlId": "string",
  "privateIp": "string",
  "publicIp": "string",
  "settings": {
    "activationPolicy": "SQL_ACTIVATION_POLICY_UNSPECIFIED",
    "autoStorageIncrease": true,
    "dataDiskSizeGb": "string",
    "dataDiskType": "SQL_DATA_DISK_TYPE_UNSPECIFIED",
    "databaseFlags": {
      "property1": "string",
      "property2": "string"
    },
    "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
    "ipConfig": {
      "authorizedNetworks": [
        {
          "expireTime": "string",
          "label": "string",
          "ttl": "string",
          "value": "string"
        }
      ],
      "enableIpv4": true,
      "privateNetwork": "string",
      "requireSsl": true
    },
    "rootPassword": "string",
    "rootPasswordSet": true,
    "sourceId": "string",
    "storageAutoResizeLimit": "string",
    "tier": "string",
    "userLabels": {
      "property1": "string",
      "property2": "string"
    },
    "zone": "string"
  }
}
```

Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudSqlId|string|false|read-only|Output only. The Cloud SQL instance ID that this connection profile is associated with.|
|privateIp|string|false|read-only|Output only. The Cloud SQL database instance's private IP.|
|publicIp|string|false|read-only|Output only. The Cloud SQL database instance's public IP.|
|settings|[CloudSqlSettings](#schemacloudsqlsettings)|false|none|Immutable. Metadata used to create the destination Cloud SQL database.|

<h2 id="tocS_CloudSqlSettings">CloudSqlSettings</h2>
<!-- backwards compatibility -->
<a id="schemacloudsqlsettings"></a>
<a id="schema_CloudSqlSettings"></a>
<a id="tocScloudsqlsettings"></a>
<a id="tocscloudsqlsettings"></a>

```json
{
  "activationPolicy": "SQL_ACTIVATION_POLICY_UNSPECIFIED",
  "autoStorageIncrease": true,
  "dataDiskSizeGb": "string",
  "dataDiskType": "SQL_DATA_DISK_TYPE_UNSPECIFIED",
  "databaseFlags": {
    "property1": "string",
    "property2": "string"
  },
  "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
  "ipConfig": {
    "authorizedNetworks": [
      {
        "expireTime": "string",
        "label": "string",
        "ttl": "string",
        "value": "string"
      }
    ],
    "enableIpv4": true,
    "privateNetwork": "string",
    "requireSsl": true
  },
  "rootPassword": "string",
  "rootPasswordSet": true,
  "sourceId": "string",
  "storageAutoResizeLimit": "string",
  "tier": "string",
  "userLabels": {
    "property1": "string",
    "property2": "string"
  },
  "zone": "string"
}
```

Settings for creating a Cloud SQL database instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activationPolicy|string|false|none|The activation policy specifies when the instance is activated; it is applicable only when the instance state is 'RUNNABLE'. Valid values: 'ALWAYS': The instance is on, and remains so even in the absence of connection requests. `NEVER`: The instance is off; it is not activated, even if a connection request arrives.|
|autoStorageIncrease|boolean|false|none|[default: ON] If you enable this setting, Cloud SQL checks your available storage every 30 seconds. If the available storage falls below a threshold size, Cloud SQL automatically adds additional storage capacity. If the available storage repeatedly falls below the threshold size, Cloud SQL continues to add storage until it reaches the maximum of 30 TB.|
|dataDiskSizeGb|string(int64)|false|none|The storage capacity available to the database, in GB. The minimum (and default) size is 10GB.|
|dataDiskType|string|false|none|The type of storage: `PD_SSD` (default) or `PD_HDD`.|
|databaseFlags|object|false|none|The database flags passed to the Cloud SQL instance at startup. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.|
|databaseVersion|string|false|none|The database engine type and version.|
|ipConfig|[SqlIpConfig](#schemasqlipconfig)|false|none|The settings for IP Management. This allows to enable or disable the instance IP and manage which external networks can connect to the instance. The IPv4 address cannot be disabled.|
|rootPassword|string|false|none|Input only. Initial root password.|
|rootPasswordSet|boolean|false|read-only|Output only. Indicates If this connection profile root password is stored.|
|sourceId|string|false|none|The Database Migration Service source connection profile ID, in the format: `projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID`|
|storageAutoResizeLimit|string(int64)|false|none|The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.|
|tier|string|false|none|The tier (or machine type) for this instance, for example: `db-n1-standard-1` (MySQL instances). For more information, see [Cloud SQL Instance Settings](https://cloud.google.com/sql/docs/mysql/instance-settings).|
|userLabels|object|false|none|The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "18kg", "count": "3" }`.|
|zone|string|false|none|The Google Cloud Platform zone where your Cloud SQL database instance is located.|

#### Enumerated Values

|Property|Value|
|---|---|
|activationPolicy|SQL_ACTIVATION_POLICY_UNSPECIFIED|
|activationPolicy|ALWAYS|
|activationPolicy|NEVER|
|dataDiskType|SQL_DATA_DISK_TYPE_UNSPECIFIED|
|dataDiskType|PD_SSD|
|dataDiskType|PD_HDD|
|databaseVersion|SQL_DATABASE_VERSION_UNSPECIFIED|
|databaseVersion|MYSQL_5_6|
|databaseVersion|MYSQL_5_7|
|databaseVersion|MYSQL_8_0|

<h2 id="tocS_ConnectionProfile">ConnectionProfile</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionprofile"></a>
<a id="schema_ConnectionProfile"></a>
<a id="tocSconnectionprofile"></a>
<a id="tocsconnectionprofile"></a>

```json
{
  "cloudsql": {
    "cloudSqlId": "string",
    "privateIp": "string",
    "publicIp": "string",
    "settings": {
      "activationPolicy": "SQL_ACTIVATION_POLICY_UNSPECIFIED",
      "autoStorageIncrease": true,
      "dataDiskSizeGb": "string",
      "dataDiskType": "SQL_DATA_DISK_TYPE_UNSPECIFIED",
      "databaseFlags": {
        "property1": "string",
        "property2": "string"
      },
      "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
      "ipConfig": {
        "authorizedNetworks": [
          {
            "expireTime": "string",
            "label": "string",
            "ttl": "string",
            "value": "string"
          }
        ],
        "enableIpv4": true,
        "privateNetwork": "string",
        "requireSsl": true
      },
      "rootPassword": "string",
      "rootPasswordSet": true,
      "sourceId": "string",
      "storageAutoResizeLimit": "string",
      "tier": "string",
      "userLabels": {
        "property1": "string",
        "property2": "string"
      },
      "zone": "string"
    }
  },
  "createTime": "string",
  "displayName": "string",
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
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mysql": {
    "cloudSqlId": "string",
    "host": "string",
    "password": "string",
    "passwordSet": true,
    "port": 0,
    "ssl": {
      "caCertificate": "string",
      "clientCertificate": "string",
      "clientKey": "string",
      "type": "SSL_TYPE_UNSPECIFIED"
    },
    "username": "string"
  },
  "name": "string",
  "provider": "DATABASE_PROVIDER_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

A connection profile definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudsql|[CloudSqlConnectionProfile](#schemacloudsqlconnectionprofile)|false|none|A CloudSQL database connection profile.|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".|
|displayName|string|false|none|The connection profile display name.|
|error|[Status](#schemastatus)|false|none|Output only. The error details in case of state FAILED.|
|labels|object|false|none|The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.|
|mysql|[MySqlConnectionProfile](#schemamysqlconnectionprofile)|false|none|A MySQL database connection profile.|
|name|string|false|none|The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}.|
|provider|string|false|none|The database provider.|
|state|string|false|none|The current connection profile state (e.g. DRAFT, READY, or FAILED).|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|DATABASE_PROVIDER_UNSPECIFIED|
|provider|CLOUDSQL|
|provider|RDS|
|state|STATE_UNSPECIFIED|
|state|DRAFT|
|state|CREATING|
|state|READY|
|state|UPDATING|
|state|DELETING|
|state|DELETED|
|state|FAILED|

<h2 id="tocS_DatabaseType">DatabaseType</h2>
<!-- backwards compatibility -->
<a id="schemadatabasetype"></a>
<a id="schema_DatabaseType"></a>
<a id="tocSdatabasetype"></a>
<a id="tocsdatabasetype"></a>

```json
{
  "engine": "DATABASE_ENGINE_UNSPECIFIED",
  "provider": "DATABASE_PROVIDER_UNSPECIFIED"
}
```

A message defining the database engine and provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|engine|string|false|none|The database engine.|
|provider|string|false|none|The database provider.|

#### Enumerated Values

|Property|Value|
|---|---|
|engine|DATABASE_ENGINE_UNSPECIFIED|
|engine|MYSQL|
|provider|DATABASE_PROVIDER_UNSPECIFIED|
|provider|CLOUDSQL|
|provider|RDS|

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

<h2 id="tocS_GenerateSshScriptRequest">GenerateSshScriptRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneratesshscriptrequest"></a>
<a id="schema_GenerateSshScriptRequest"></a>
<a id="tocSgeneratesshscriptrequest"></a>
<a id="tocsgeneratesshscriptrequest"></a>

```json
{
  "vm": "string",
  "vmCreationConfig": {
    "subnet": "string",
    "vmMachineType": "string",
    "vmZone": "string"
  },
  "vmPort": 0,
  "vmSelectionConfig": {
    "vmZone": "string"
  }
}
```

Request message for 'GenerateSshScript' request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vm|string|false|none|Required. Bastion VM Instance name to use or to create.|
|vmCreationConfig|[VmCreationConfig](#schemavmcreationconfig)|false|none|The VM creation configuration|
|vmPort|integer(int32)|false|none|The port that will be open on the bastion host|
|vmSelectionConfig|[VmSelectionConfig](#schemavmselectionconfig)|false|none|The VM selection configuration|

<h2 id="tocS_GoogleCloudClouddmsV1beta1OperationMetadata">GoogleCloudClouddmsV1beta1OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudclouddmsv1beta1operationmetadata"></a>
<a id="schema_GoogleCloudClouddmsV1beta1OperationMetadata"></a>
<a id="tocSgooglecloudclouddmsv1beta1operationmetadata"></a>
<a id="tocsgooglecloudclouddmsv1beta1operationmetadata"></a>

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

<h2 id="tocS_ListConnectionProfilesResponse">ListConnectionProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectionprofilesresponse"></a>
<a id="schema_ListConnectionProfilesResponse"></a>
<a id="tocSlistconnectionprofilesresponse"></a>
<a id="tocslistconnectionprofilesresponse"></a>

```json
{
  "connectionProfiles": [
    {
      "cloudsql": {
        "cloudSqlId": "string",
        "privateIp": "string",
        "publicIp": "string",
        "settings": {
          "activationPolicy": "SQL_ACTIVATION_POLICY_UNSPECIFIED",
          "autoStorageIncrease": true,
          "dataDiskSizeGb": "string",
          "dataDiskType": "SQL_DATA_DISK_TYPE_UNSPECIFIED",
          "databaseFlags": {
            "property1": "string",
            "property2": "string"
          },
          "databaseVersion": "SQL_DATABASE_VERSION_UNSPECIFIED",
          "ipConfig": {
            "authorizedNetworks": [
              {
                "expireTime": "string",
                "label": "string",
                "ttl": "string",
                "value": "string"
              }
            ],
            "enableIpv4": true,
            "privateNetwork": "string",
            "requireSsl": true
          },
          "rootPassword": "string",
          "rootPasswordSet": true,
          "sourceId": "string",
          "storageAutoResizeLimit": "string",
          "tier": "string",
          "userLabels": {
            "property1": "string",
            "property2": "string"
          },
          "zone": "string"
        }
      },
      "createTime": "string",
      "displayName": "string",
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
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mysql": {
        "cloudSqlId": "string",
        "host": "string",
        "password": "string",
        "passwordSet": true,
        "port": 0,
        "ssl": {
          "caCertificate": "string",
          "clientCertificate": "string",
          "clientKey": "string",
          "type": "SSL_TYPE_UNSPECIFIED"
        },
        "username": "string"
      },
      "name": "string",
      "provider": "DATABASE_PROVIDER_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for 'ListConnectionProfiles' request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionProfiles|[[ConnectionProfile](#schemaconnectionprofile)]|false|none|The response list of connection profiles.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
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

<h2 id="tocS_ListMigrationJobsResponse">ListMigrationJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmigrationjobsresponse"></a>
<a id="schema_ListMigrationJobsResponse"></a>
<a id="tocSlistmigrationjobsresponse"></a>
<a id="tocslistmigrationjobsresponse"></a>

```json
{
  "migrationJobs": [
    {
      "createTime": "string",
      "destination": "string",
      "destinationDatabase": {
        "engine": "DATABASE_ENGINE_UNSPECIFIED",
        "provider": "DATABASE_PROVIDER_UNSPECIFIED"
      },
      "displayName": "string",
      "dumpPath": "string",
      "duration": "string",
      "endTime": "string",
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
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "phase": "PHASE_UNSPECIFIED",
      "reverseSshConnectivity": {
        "vm": "string",
        "vmIp": "string",
        "vmPort": 0,
        "vpc": "string"
      },
      "source": "string",
      "sourceDatabase": {
        "engine": "DATABASE_ENGINE_UNSPECIFIED",
        "provider": "DATABASE_PROVIDER_UNSPECIFIED"
      },
      "state": "STATE_UNSPECIFIED",
      "staticIpConnectivity": {},
      "type": "TYPE_UNSPECIFIED",
      "updateTime": "string",
      "vpcPeeringConnectivity": {
        "vpc": "string"
      }
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for 'ListMigrationJobs' request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|migrationJobs|[[MigrationJob](#schemamigrationjob)]|false|none|The list of migration jobs objects.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|unreachable|[string]|false|none|Locations that could not be reached.|

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

<h2 id="tocS_MigrationJob">MigrationJob</h2>
<!-- backwards compatibility -->
<a id="schemamigrationjob"></a>
<a id="schema_MigrationJob"></a>
<a id="tocSmigrationjob"></a>
<a id="tocsmigrationjob"></a>

```json
{
  "createTime": "string",
  "destination": "string",
  "destinationDatabase": {
    "engine": "DATABASE_ENGINE_UNSPECIFIED",
    "provider": "DATABASE_PROVIDER_UNSPECIFIED"
  },
  "displayName": "string",
  "dumpPath": "string",
  "duration": "string",
  "endTime": "string",
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
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "phase": "PHASE_UNSPECIFIED",
  "reverseSshConnectivity": {
    "vm": "string",
    "vmIp": "string",
    "vmPort": 0,
    "vpc": "string"
  },
  "source": "string",
  "sourceDatabase": {
    "engine": "DATABASE_ENGINE_UNSPECIFIED",
    "provider": "DATABASE_PROVIDER_UNSPECIFIED"
  },
  "state": "STATE_UNSPECIFIED",
  "staticIpConnectivity": {},
  "type": "TYPE_UNSPECIFIED",
  "updateTime": "string",
  "vpcPeeringConnectivity": {
    "vpc": "string"
  }
}
```

Represents a Database Migration Service migration job object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the migration job resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".|
|destination|string|false|none|Required. The resource name (URI) of the destination connection profile.|
|destinationDatabase|[DatabaseType](#schemadatabasetype)|false|none|The database engine type and provider of the destination.|
|displayName|string|false|none|The migration job display name.|
|dumpPath|string|false|none|The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]).|
|duration|string(google-duration)|false|read-only|Output only. The duration of the migration job (in seconds). A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".|
|endTime|string(google-datetime)|false|read-only|Output only. If the migration job is completed, the time when it was completed.|
|error|[Status](#schemastatus)|false|none|Output only. The error details in case of state FAILED.|
|labels|object|false|none|The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.|
|name|string|false|none|The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}.|
|phase|string|false|read-only|Output only. The current migration job phase.|
|reverseSshConnectivity|[ReverseSshConnectivity](#schemareversesshconnectivity)|false|none|The details needed to communicate to the source over Reverse SSH tunnel connectivity.|
|source|string|false|none|Required. The resource name (URI) of the source connection profile.|
|sourceDatabase|[DatabaseType](#schemadatabasetype)|false|none|The database engine type and provider of the source.|
|state|string|false|none|The current migration job state.|
|staticIpConnectivity|[StaticIpConnectivity](#schemastaticipconnectivity)|false|none|static ip connectivity data (default, no additional details needed).|
|type|string|false|none|Required. The migration job type.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the migration job resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".|
|vpcPeeringConnectivity|[VpcPeeringConnectivity](#schemavpcpeeringconnectivity)|false|none|The details of the VPC network that the source database is located in.|

#### Enumerated Values

|Property|Value|
|---|---|
|phase|PHASE_UNSPECIFIED|
|phase|FULL_DUMP|
|phase|CDC|
|phase|PROMOTE_IN_PROGRESS|
|phase|WAITING_FOR_SOURCE_WRITES_TO_STOP|
|phase|PREPARING_THE_DUMP|
|state|STATE_UNSPECIFIED|
|state|MAINTENANCE|
|state|DRAFT|
|state|CREATING|
|state|NOT_STARTED|
|state|RUNNING|
|state|FAILED|
|state|COMPLETED|
|state|DELETING|
|state|STOPPING|
|state|STOPPED|
|state|DELETED|
|state|UPDATING|
|state|STARTING|
|state|RESTARTING|
|state|RESUMING|
|type|TYPE_UNSPECIFIED|
|type|ONE_TIME|
|type|CONTINUOUS|

<h2 id="tocS_MigrationJobVerificationError">MigrationJobVerificationError</h2>
<!-- backwards compatibility -->
<a id="schemamigrationjobverificationerror"></a>
<a id="schema_MigrationJobVerificationError"></a>
<a id="tocSmigrationjobverificationerror"></a>
<a id="tocsmigrationjobverificationerror"></a>

```json
{
  "errorCode": "ERROR_CODE_UNSPECIFIED",
  "errorDetailMessage": "string",
  "errorMessage": "string"
}
```

Error message of a verification Migration job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|false|read-only|Output only. An instance of ErrorCode specifying the error that occurred.|
|errorDetailMessage|string|false|read-only|Output only. A specific detailed error message, if supplied by the engine.|
|errorMessage|string|false|read-only|Output only. A formatted message with further details about the error and a CTA.|

#### Enumerated Values

|Property|Value|
|---|---|
|errorCode|ERROR_CODE_UNSPECIFIED|
|errorCode|CONNECTION_FAILURE|
|errorCode|AUTHENTICATION_FAILURE|
|errorCode|INVALID_CONNECTION_PROFILE_CONFIG|
|errorCode|VERSION_INCOMPATIBILITY|
|errorCode|CONNECTION_PROFILE_TYPES_INCOMPATIBILITY|
|errorCode|UNSUPPORTED_GTID_MODE|
|errorCode|UNSUPPORTED_DEFINER|
|errorCode|CANT_RESTART_RUNNING_MIGRATION|
|errorCode|TABLES_WITH_LIMITED_SUPPORT|
|errorCode|UNSUPPORTED_DATABASE_LOCALE|
|errorCode|UNSUPPORTED_DATABASE_FDW_CONFIG|
|errorCode|ERROR_RDBMS|

<h2 id="tocS_MySqlConnectionProfile">MySqlConnectionProfile</h2>
<!-- backwards compatibility -->
<a id="schemamysqlconnectionprofile"></a>
<a id="schema_MySqlConnectionProfile"></a>
<a id="tocSmysqlconnectionprofile"></a>
<a id="tocsmysqlconnectionprofile"></a>

```json
{
  "cloudSqlId": "string",
  "host": "string",
  "password": "string",
  "passwordSet": true,
  "port": 0,
  "ssl": {
    "caCertificate": "string",
    "clientCertificate": "string",
    "clientKey": "string",
    "type": "SSL_TYPE_UNSPECIFIED"
  },
  "username": "string"
}
```

Specifies connection parameters required specifically for MySQL databases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudSqlId|string|false|none|If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.|
|host|string|false|none|Required. The IP or hostname of the source MySQL database.|
|password|string|false|none|Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service.|
|passwordSet|boolean|false|read-only|Output only. Indicates If this connection profile password is stored.|
|port|integer(int32)|false|none|Required. The network port of the source MySQL database.|
|ssl|[SslConfig](#schemasslconfig)|false|none|SSL configuration for the destination to connect to the source database.|
|username|string|false|none|Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.|

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

<h2 id="tocS_PromoteMigrationJobRequest">PromoteMigrationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemapromotemigrationjobrequest"></a>
<a id="schema_PromoteMigrationJobRequest"></a>
<a id="tocSpromotemigrationjobrequest"></a>
<a id="tocspromotemigrationjobrequest"></a>

```json
{}
```

Request message for 'PromoteMigrationJob' request.

<h2 id="tocS_RestartMigrationJobRequest">RestartMigrationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestartmigrationjobrequest"></a>
<a id="schema_RestartMigrationJobRequest"></a>
<a id="tocSrestartmigrationjobrequest"></a>
<a id="tocsrestartmigrationjobrequest"></a>

```json
{}
```

Request message for 'RestartMigrationJob' request.

<h2 id="tocS_ResumeMigrationJobRequest">ResumeMigrationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresumemigrationjobrequest"></a>
<a id="schema_ResumeMigrationJobRequest"></a>
<a id="tocSresumemigrationjobrequest"></a>
<a id="tocsresumemigrationjobrequest"></a>

```json
{}
```

Request message for 'ResumeMigrationJob' request.

<h2 id="tocS_ReverseSshConnectivity">ReverseSshConnectivity</h2>
<!-- backwards compatibility -->
<a id="schemareversesshconnectivity"></a>
<a id="schema_ReverseSshConnectivity"></a>
<a id="tocSreversesshconnectivity"></a>
<a id="tocsreversesshconnectivity"></a>

```json
{
  "vm": "string",
  "vmIp": "string",
  "vmPort": 0,
  "vpc": "string"
}
```

The details needed to configure a reverse SSH tunnel between the source and destination databases. These details will be used when calling the generateSshScript method (see https://cloud.google.com/database-migration/docs/reference/rest/v1beta1/projects.locations.migrationJobs/generateSshScript) to produce the script that will help set up the reverse SSH tunnel, and to set up the VPC peering between the Cloud SQL private network and the VPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vm|string|false|none|The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.|
|vmIp|string|false|none|Required. The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.|
|vmPort|integer(int32)|false|none|Required. The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.|
|vpc|string|false|none|The name of the VPC to peer with the Cloud SQL private network.|

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

<h2 id="tocS_SqlAclEntry">SqlAclEntry</h2>
<!-- backwards compatibility -->
<a id="schemasqlaclentry"></a>
<a id="schema_SqlAclEntry"></a>
<a id="tocSsqlaclentry"></a>
<a id="tocssqlaclentry"></a>

```json
{
  "expireTime": "string",
  "label": "string",
  "ttl": "string",
  "value": "string"
}
```

An entry for an Access Control list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expireTime|string(google-datetime)|false|none|The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example: `2012-11-15T16:19:00.094Z`.|
|label|string|false|none|A label to identify this entry.|
|ttl|string(google-duration)|false|none|Input only. The time-to-leave of this access control entry.|
|value|string|false|none|The allowlisted value for the access control list.|

<h2 id="tocS_SqlIpConfig">SqlIpConfig</h2>
<!-- backwards compatibility -->
<a id="schemasqlipconfig"></a>
<a id="schema_SqlIpConfig"></a>
<a id="tocSsqlipconfig"></a>
<a id="tocssqlipconfig"></a>

```json
{
  "authorizedNetworks": [
    {
      "expireTime": "string",
      "label": "string",
      "ttl": "string",
      "value": "string"
    }
  ],
  "enableIpv4": true,
  "privateNetwork": "string",
  "requireSsl": true
}
```

IP Management configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizedNetworks|[[SqlAclEntry](#schemasqlaclentry)]|false|none|The list of external networks that are allowed to connect to the instance using the IP. See https://en.wikipedia.org/wiki/CIDR_notation#CIDR_notation, also known as 'slash' notation (e.g. `192.168.100.0/24`).|
|enableIpv4|boolean|false|none|Whether the instance is assigned a public IP address or not.|
|privateNetwork|string|false|none|The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, `/projects/myProject/global/networks/default`. This setting can be updated, but it cannot be removed after it is set.|
|requireSsl|boolean|false|none|Whether SSL connections over IP should be enforced or not.|

<h2 id="tocS_SshScript">SshScript</h2>
<!-- backwards compatibility -->
<a id="schemasshscript"></a>
<a id="schema_SshScript"></a>
<a id="tocSsshscript"></a>
<a id="tocssshscript"></a>

```json
{
  "script": "string"
}
```

Response message for 'GenerateSshScript' request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|script|string|false|none|The ssh configuration script.|

<h2 id="tocS_SslConfig">SslConfig</h2>
<!-- backwards compatibility -->
<a id="schemasslconfig"></a>
<a id="schema_SslConfig"></a>
<a id="tocSsslconfig"></a>
<a id="tocssslconfig"></a>

```json
{
  "caCertificate": "string",
  "clientCertificate": "string",
  "clientKey": "string",
  "type": "SSL_TYPE_UNSPECIFIED"
}
```

SSL configuration information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caCertificate|string|false|none|Required. Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate. The replica will use this certificate to verify it's connecting to the right host.|
|clientCertificate|string|false|none|Input only. The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.If this field is used then the 'client_key' field is mandatory.|
|clientKey|string|false|none|Input only. The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' field is mandatory.|
|type|string|false|read-only|Output only. The ssl config type according to 'client_key', 'client_certificate' and 'ca_certificate'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SSL_TYPE_UNSPECIFIED|
|type|SERVER_ONLY|
|type|SERVER_CLIENT|

<h2 id="tocS_StartMigrationJobRequest">StartMigrationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartmigrationjobrequest"></a>
<a id="schema_StartMigrationJobRequest"></a>
<a id="tocSstartmigrationjobrequest"></a>
<a id="tocsstartmigrationjobrequest"></a>

```json
{}
```

Request message for 'StartMigrationJob' request.

<h2 id="tocS_StaticIpConnectivity">StaticIpConnectivity</h2>
<!-- backwards compatibility -->
<a id="schemastaticipconnectivity"></a>
<a id="schema_StaticIpConnectivity"></a>
<a id="tocSstaticipconnectivity"></a>
<a id="tocsstaticipconnectivity"></a>

```json
{}
```

The source database will allow incoming connections from the destination database's public IP. You can retrieve the Cloud SQL instance's public IP from the Cloud SQL console or using Cloud SQL APIs. No additional configuration is required.

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

<h2 id="tocS_StopMigrationJobRequest">StopMigrationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopmigrationjobrequest"></a>
<a id="schema_StopMigrationJobRequest"></a>
<a id="tocSstopmigrationjobrequest"></a>
<a id="tocsstopmigrationjobrequest"></a>

```json
{}
```

Request message for 'StopMigrationJob' request.

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

<h2 id="tocS_VerifyMigrationJobRequest">VerifyMigrationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifymigrationjobrequest"></a>
<a id="schema_VerifyMigrationJobRequest"></a>
<a id="tocSverifymigrationjobrequest"></a>
<a id="tocsverifymigrationjobrequest"></a>

```json
{}
```

Request message for 'VerifyMigrationJob' request.

<h2 id="tocS_VmCreationConfig">VmCreationConfig</h2>
<!-- backwards compatibility -->
<a id="schemavmcreationconfig"></a>
<a id="schema_VmCreationConfig"></a>
<a id="tocSvmcreationconfig"></a>
<a id="tocsvmcreationconfig"></a>

```json
{
  "subnet": "string",
  "vmMachineType": "string",
  "vmZone": "string"
}
```

VM creation configuration message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subnet|string|false|none|The subnet name the vm needs to be created in.|
|vmMachineType|string|false|none|Required. VM instance machine type to create.|
|vmZone|string|false|none|The Google Cloud Platform zone to create the VM in.|

<h2 id="tocS_VmSelectionConfig">VmSelectionConfig</h2>
<!-- backwards compatibility -->
<a id="schemavmselectionconfig"></a>
<a id="schema_VmSelectionConfig"></a>
<a id="tocSvmselectionconfig"></a>
<a id="tocsvmselectionconfig"></a>

```json
{
  "vmZone": "string"
}
```

VM selection configuration message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vmZone|string|false|none|Required. The Google Cloud Platform zone the VM is located.|

<h2 id="tocS_VpcPeeringConnectivity">VpcPeeringConnectivity</h2>
<!-- backwards compatibility -->
<a id="schemavpcpeeringconnectivity"></a>
<a id="schema_VpcPeeringConnectivity"></a>
<a id="tocSvpcpeeringconnectivity"></a>
<a id="tocsvpcpeeringconnectivity"></a>

```json
{
  "vpc": "string"
}
```

The details of the VPC where the source database is located in Google Cloud. We will use this information to set up the VPC peering connection between Cloud SQL and this VPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vpc|string|false|none|The name of the VPC network to peer with the Cloud SQL private network.|
