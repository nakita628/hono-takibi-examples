<h1 id="vm-migration-api">VM Migration API v1alpha1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Use the Migrate to Virtual Machines API to programmatically migrate workloads.

Base URLs:

* <a href="https://vmmigration.googleapis.com/">https://vmmigration.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/migrate/virtual-machines">External documentation</a>

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

<h1 id="vm-migration-api-projects">projects</h1>

## vmmigration.projects.locations.sources.datacenterConnectors.upgradeAppliance

<a id="opIdvmmigration.projects.locations.sources.datacenterConnectors.upgradeAppliance"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:upgradeAppliance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requestId": "string"
  }'
```

`POST /v1alpha1/{datacenterConnector}:upgradeAppliance`

Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.

> Body parameter

```json
{
  "requestId": "string"
}
```

<h3 id="vmmigrationprojectslocationssourcesdatacenterconnectorsupgradeappliance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datacenterConnector|path|string|true|Required. The DatacenterConnector name.|
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
|body|body|[UpgradeApplianceRequest](#schemaupgradeappliancerequest)|false|none|
|» requestId|body|string|false|A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|

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

<h3 id="vmmigrationprojectslocationssourcesdatacenterconnectorsupgradeappliance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.groups.addGroupMigration

<a id="opIdvmmigration.projects.locations.groups.addGroupMigration"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:addGroupMigration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "migratingVm": "string"
  }'
```

`POST /v1alpha1/{group}:addGroupMigration`

Adds a MigratingVm to a Group.

> Body parameter

```json
{
  "migratingVm": "string"
}
```

<h3 id="vmmigrationprojectslocationsgroupsaddgroupmigration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group|path|string|true|Required. The full path name of the Group to add to.|
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
|body|body|[AddGroupMigrationRequest](#schemaaddgroupmigrationrequest)|false|none|
|» migratingVm|body|string|false|The full path name of the MigratingVm to add.|

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

<h3 id="vmmigrationprojectslocationsgroupsaddgroupmigration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.groups.removeGroupMigration

<a id="opIdvmmigration.projects.locations.groups.removeGroupMigration"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:removeGroupMigration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "migratingVm": "string"
  }'
```

`POST /v1alpha1/{group}:removeGroupMigration`

Removes a MigratingVm from a Group.

> Body parameter

```json
{
  "migratingVm": "string"
}
```

<h3 id="vmmigrationprojectslocationsgroupsremovegroupmigration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group|path|string|true|Required. The name of the Group.|
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
|body|body|[RemoveGroupMigrationRequest](#schemaremovegroupmigrationrequest)|false|none|
|» migratingVm|body|string|false|The MigratingVm to remove.|

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

<h3 id="vmmigrationprojectslocationsgroupsremovegroupmigration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.migratingVms.finalizeMigration

<a id="opIdvmmigration.projects.locations.sources.migratingVms.finalizeMigration"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:finalizeMigration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1alpha1/{migratingVm}:finalizeMigration`

Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.

> Body parameter

```json
{}
```

<h3 id="vmmigrationprojectslocationssourcesmigratingvmsfinalizemigration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|migratingVm|path|string|true|Required. The name of the MigratingVm.|
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
|body|body|[FinalizeMigrationRequest](#schemafinalizemigrationrequest)|false|none|

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

<h3 id="vmmigrationprojectslocationssourcesmigratingvmsfinalizemigration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.migratingVms.pauseMigration

<a id="opIdvmmigration.projects.locations.sources.migratingVms.pauseMigration"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:pauseMigration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1alpha1/{migratingVm}:pauseMigration`

Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.

> Body parameter

```json
{}
```

<h3 id="vmmigrationprojectslocationssourcesmigratingvmspausemigration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|migratingVm|path|string|true|Required. The name of the MigratingVm.|
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
|body|body|[PauseMigrationRequest](#schemapausemigrationrequest)|false|none|

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

<h3 id="vmmigrationprojectslocationssourcesmigratingvmspausemigration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.migratingVms.resumeMigration

<a id="opIdvmmigration.projects.locations.sources.migratingVms.resumeMigration"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:resumeMigration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1alpha1/{migratingVm}:resumeMigration`

Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.

> Body parameter

```json
{}
```

<h3 id="vmmigrationprojectslocationssourcesmigratingvmsresumemigration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|migratingVm|path|string|true|Required. The name of the MigratingVm.|
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
|body|body|[ResumeMigrationRequest](#schemaresumemigrationrequest)|false|none|

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

<h3 id="vmmigrationprojectslocationssourcesmigratingvmsresumemigration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.migratingVms.startMigration

<a id="opIdvmmigration.projects.locations.sources.migratingVms.startMigration"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:startMigration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1alpha1/{migratingVm}:startMigration`

Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.

> Body parameter

```json
{}
```

<h3 id="vmmigrationprojectslocationssourcesmigratingvmsstartmigration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|migratingVm|path|string|true|Required. The name of the MigratingVm.|
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
|body|body|[StartMigrationRequest](#schemastartmigrationrequest)|false|none|

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

<h3 id="vmmigrationprojectslocationssourcesmigratingvmsstartmigration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.targetProjects.get

<a id="opIdvmmigration.projects.locations.targetProjects.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{name}`

Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

<h3 id="vmmigrationprojectslocationstargetprojectsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The TargetProject name.|
|view|query|string|false|Optional. The level of details of the report. Defaults to FULL|
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
|view|UTILIZATION_REPORT_VIEW_UNSPECIFIED|
|view|BASIC|
|view|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "description": "string",
  "name": "string",
  "project": "string",
  "updateTime": "string"
}
```

<h3 id="vmmigrationprojectslocationstargetprojectsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TargetProject](#schematargetproject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.targetProjects.delete

<a id="opIdvmmigration.projects.locations.targetProjects.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1alpha1/{name}`

Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

<h3 id="vmmigrationprojectslocationstargetprojectsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The TargetProject name.|
|requestId|query|string|false|Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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

<h3 id="vmmigrationprojectslocationstargetprojectsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.targetProjects.patch

<a id="opIdvmmigration.projects.locations.targetProjects.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "project": "string"
  }'
```

`PATCH /v1alpha1/{name}`

Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

> Body parameter

```json
{
  "description": "string",
  "project": "string"
}
```

<h3 id="vmmigrationprojectslocationstargetprojectspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The name of the target project.|
|requestId|query|string|false|A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|updateMask|query|string|false|Field mask is used to specify the fields to be overwritten in the TargetProject resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.|
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
|body|body|[TargetProject](#schematargetproject)|false|none|
|» description|body|string|false|The target project's description.|
|» project|body|string|false|The target project ID (number) or project name.|

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

<h3 id="vmmigrationprojectslocationstargetprojectspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.list

<a id="opIdvmmigration.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="vmmigrationprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="vmmigrationprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.operations.list

<a id="opIdvmmigration.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="vmmigrationprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="vmmigrationprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.migratingVms.cutoverJobs.cancel

<a id="opIdvmmigration.projects.locations.sources.migratingVms.cutoverJobs.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1alpha1/{name}:cancel`

Initiates the cancellation of a running cutover job.

> Body parameter

```json
{}
```

<h3 id="vmmigrationprojectslocationssourcesmigratingvmscutoverjobscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The cutover job id|
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
|body|body|[CancelCutoverJobRequest](#schemacancelcutoverjobrequest)|false|none|

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

<h3 id="vmmigrationprojectslocationssourcesmigratingvmscutoverjobscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.migratingVms.cloneJobs.list

<a id="opIdvmmigration.projects.locations.sources.migratingVms.cloneJobs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/cloneJobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/cloneJobs`

Lists CloneJobs of a given migrating VM.

<h3 id="vmmigrationprojectslocationssourcesmigratingvmsclonejobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of source VMs.|
|filter|query|string|false|Optional. The filter request.|
|orderBy|query|string|false|Optional. the order by fields for the result.|
|pageSize|query|integer|false|Optional. The maximum number of clone jobs to return. The service may return fewer than this value. If unspecified, at most 500 clone jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Required. A page token, received from a previous `ListCloneJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCloneJobs` must match the call that provided the page token.|
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
  "cloneJobs": [
    {
      "computeEngineTargetDetails": {
        "additionalLicenses": [
          "string"
        ],
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
        "hostname": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "vmName": "string",
        "zone": "string"
      },
      "computeEngineVmDetails": {
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "DISK_TYPE_UNSPECIFIED",
        "externalIp": "string",
        "internalIp": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "network": "string",
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "subnetwork": "string",
        "targetProject": "string",
        "zone": "string"
      },
      "createTime": "string",
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
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "stateTime": "string",
      "steps": [
        {
          "adaptingOs": {},
          "endTime": "string",
          "instantiatingMigratedVm": {},
          "preparingVmDisks": {},
          "startTime": "string"
        }
      ],
      "targetDetails": {
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "DISK_TYPE_UNSPECIFIED",
        "externalIp": "string",
        "internalIp": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "network": "string",
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "subnetwork": "string",
        "targetProject": "string",
        "zone": "string"
      }
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="vmmigrationprojectslocationssourcesmigratingvmsclonejobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCloneJobsResponse](#schemalistclonejobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.migratingVms.cloneJobs.create

<a id="opIdvmmigration.projects.locations.sources.migratingVms.cloneJobs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/cloneJobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1alpha1/{parent}/cloneJobs`

Initiates a Clone of a specific migrating VM.

> Body parameter

```json
{}
```

<h3 id="vmmigrationprojectslocationssourcesmigratingvmsclonejobscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The Clone's parent.|
|cloneJobId|query|string|false|Required. The clone job identifier.|
|requestId|query|string|false|A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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
|body|body|[CloneJob](#schemaclonejob)|false|none|

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

<h3 id="vmmigrationprojectslocationssourcesmigratingvmsclonejobscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.migratingVms.cutoverJobs.list

<a id="opIdvmmigration.projects.locations.sources.migratingVms.cutoverJobs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/cutoverJobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/cutoverJobs`

Lists CutoverJobs of a given migrating VM.

<h3 id="vmmigrationprojectslocationssourcesmigratingvmscutoverjobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of migrating VMs.|
|filter|query|string|false|Optional. The filter request.|
|orderBy|query|string|false|Optional. the order by fields for the result.|
|pageSize|query|integer|false|Optional. The maximum number of cutover jobs to return. The service may return fewer than this value. If unspecified, at most 500 cutover jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Required. A page token, received from a previous `ListCutoverJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCutoverJobs` must match the call that provided the page token.|
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
  "cutoverJobs": [
    {
      "computeEngineTargetDetails": {
        "additionalLicenses": [
          "string"
        ],
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
        "hostname": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "vmName": "string",
        "zone": "string"
      },
      "computeEngineVmDetails": {
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "DISK_TYPE_UNSPECIFIED",
        "externalIp": "string",
        "internalIp": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "network": "string",
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "subnetwork": "string",
        "targetProject": "string",
        "zone": "string"
      },
      "createTime": "string",
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
      "name": "string",
      "progress": 0,
      "progressPercent": 0,
      "state": "STATE_UNSPECIFIED",
      "stateMessage": "string",
      "stateTime": "string",
      "steps": [
        {
          "endTime": "string",
          "finalSync": {
            "cycleNumber": 0,
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
            "name": "string",
            "progress": 0,
            "progressPercent": 0,
            "startTime": "string",
            "state": "STATE_UNSPECIFIED",
            "steps": [
              {
                "endTime": "string",
                "initializingReplication": {},
                "postProcessing": {},
                "replicating": {
                  "lastThirtyMinutesAverageBytesPerSecond": "string",
                  "lastTwoMinutesAverageBytesPerSecond": "string",
                  "replicatedBytes": "string",
                  "totalBytes": "string"
                },
                "startTime": "string"
              }
            ],
            "totalPauseDuration": "string",
            "warnings": [
              {
                "actionItem": {
                  "locale": "string",
                  "message": "string"
                },
                "code": "WARNING_CODE_UNSPECIFIED",
                "helpLinks": [
                  {
                    "description": "string",
                    "url": "string"
                  }
                ],
                "warningMessage": {
                  "locale": "string",
                  "message": "string"
                },
                "warningTime": "string"
              }
            ]
          },
          "instantiatingMigratedVm": {},
          "preparingVmDisks": {},
          "previousReplicationCycle": {
            "cycleNumber": 0,
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
            "name": "string",
            "progress": 0,
            "progressPercent": 0,
            "startTime": "string",
            "state": "STATE_UNSPECIFIED",
            "steps": [
              {
                "endTime": "string",
                "initializingReplication": {},
                "postProcessing": {},
                "replicating": {
                  "lastThirtyMinutesAverageBytesPerSecond": "string",
                  "lastTwoMinutesAverageBytesPerSecond": "string",
                  "replicatedBytes": "string",
                  "totalBytes": "string"
                },
                "startTime": "string"
              }
            ],
            "totalPauseDuration": "string",
            "warnings": [
              {
                "actionItem": {
                  "locale": "string",
                  "message": "string"
                },
                "code": "WARNING_CODE_UNSPECIFIED",
                "helpLinks": [
                  {
                    "description": "string",
                    "url": "string"
                  }
                ],
                "warningMessage": {
                  "locale": "string",
                  "message": "string"
                },
                "warningTime": "string"
              }
            ]
          },
          "shuttingDownSourceVm": {},
          "startTime": "string"
        }
      ],
      "targetDetails": {
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "DISK_TYPE_UNSPECIFIED",
        "externalIp": "string",
        "internalIp": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "network": "string",
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "subnetwork": "string",
        "targetProject": "string",
        "zone": "string"
      }
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="vmmigrationprojectslocationssourcesmigratingvmscutoverjobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCutoverJobsResponse](#schemalistcutoverjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.migratingVms.cutoverJobs.create

<a id="opIdvmmigration.projects.locations.sources.migratingVms.cutoverJobs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/cutoverJobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1alpha1/{parent}/cutoverJobs`

Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.

> Body parameter

```json
{}
```

<h3 id="vmmigrationprojectslocationssourcesmigratingvmscutoverjobscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The Cutover's parent.|
|cutoverJobId|query|string|false|Required. The cutover job identifier.|
|requestId|query|string|false|A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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
|body|body|[CutoverJob](#schemacutoverjob)|false|none|

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

<h3 id="vmmigrationprojectslocationssourcesmigratingvmscutoverjobscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.datacenterConnectors.list

<a id="opIdvmmigration.projects.locations.sources.datacenterConnectors.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/datacenterConnectors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/datacenterConnectors`

Lists DatacenterConnectors in a given Source.

<h3 id="vmmigrationprojectslocationssourcesdatacenterconnectorslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of connectors.|
|filter|query|string|false|Optional. The filter request.|
|orderBy|query|string|false|Optional. the order by fields for the result.|
|pageSize|query|integer|false|Optional. The maximum number of connectors to return. The service may return fewer than this value. If unspecified, at most 500 sources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Required. A page token, received from a previous `ListDatacenterConnectors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDatacenterConnectors` must match the call that provided the page token.|
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
  "datacenterConnectors": [
    {
      "applianceInfrastructureVersion": "string",
      "applianceSoftwareVersion": "string",
      "availableVersions": {
        "inPlaceUpdate": {
          "critical": true,
          "releaseNotesUri": "string",
          "uri": "string",
          "version": "string"
        },
        "newDeployableAppliance": {
          "critical": true,
          "releaseNotesUri": "string",
          "uri": "string",
          "version": "string"
        }
      },
      "bucket": "string",
      "createTime": "string",
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
      "name": "string",
      "registrationId": "string",
      "serviceAccount": "string",
      "state": "STATE_UNSPECIFIED",
      "stateTime": "string",
      "updateTime": "string",
      "upgradeStatus": {
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
        "previousVersion": "string",
        "startTime": "string",
        "state": "STATE_UNSPECIFIED",
        "version": "string"
      },
      "version": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="vmmigrationprojectslocationssourcesdatacenterconnectorslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDatacenterConnectorsResponse](#schemalistdatacenterconnectorsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.datacenterConnectors.create

<a id="opIdvmmigration.projects.locations.sources.datacenterConnectors.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/datacenterConnectors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "registrationId": "string",
    "serviceAccount": "string",
    "version": "string"
  }'
```

`POST /v1alpha1/{parent}/datacenterConnectors`

Creates a new DatacenterConnector in a given Source.

> Body parameter

```json
{
  "registrationId": "string",
  "serviceAccount": "string",
  "version": "string"
}
```

<h3 id="vmmigrationprojectslocationssourcesdatacenterconnectorscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The DatacenterConnector's parent. Required. The Source in where the new DatacenterConnector will be created. For example: `projects/my-project/locations/us-central1/sources/my-source`|
|datacenterConnectorId|query|string|false|Required. The datacenterConnector identifier.|
|requestId|query|string|false|A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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
|body|body|[DatacenterConnector](#schemadatacenterconnector)|false|none|
|» registrationId|body|string|false|Immutable. A unique key for this connector. This key is internal to the OVA connector and is supplied with its creation during the registration process and can not be modified.|
|» serviceAccount|body|string|false|The service account to use in the connector when communicating with the cloud.|
|» version|body|string|false|The version running in the DatacenterConnector. This is supplied by the OVA connector during the registration process and can not be modified.|

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

<h3 id="vmmigrationprojectslocationssourcesdatacenterconnectorscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.groups.list

<a id="opIdvmmigration.projects.locations.groups.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/groups`

Lists Groups in a given project and location.

<h3 id="vmmigrationprojectslocationsgroupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of groups.|
|filter|query|string|false|Optional. The filter request.|
|orderBy|query|string|false|Optional. the order by fields for the result.|
|pageSize|query|integer|false|Optional. The maximum number of groups to return. The service may return fewer than this value. If unspecified, at most 500 groups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Required. A page token, received from a previous `ListGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGroups` must match the call that provided the page token.|
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
  "groups": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "name": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="vmmigrationprojectslocationsgroupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListGroupsResponse](#schemalistgroupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.groups.create

<a id="opIdvmmigration.projects.locations.groups.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string"
  }'
```

`POST /v1alpha1/{parent}/groups`

Creates a new Group in a given project and location.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string"
}
```

<h3 id="vmmigrationprojectslocationsgroupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The Group's parent.|
|groupId|query|string|false|Required. The group identifier.|
|requestId|query|string|false|A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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
|body|body|[Group](#schemagroup)|false|none|
|» description|body|string|false|User-provided description of the group.|
|» displayName|body|string|false|Display name is a user defined name for this group which can be updated.|

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

<h3 id="vmmigrationprojectslocationsgroupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.migratingVms.list

<a id="opIdvmmigration.projects.locations.sources.migratingVms.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/migratingVms \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/migratingVms`

Lists MigratingVms in a given Source.

<h3 id="vmmigrationprojectslocationssourcesmigratingvmslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of MigratingVms.|
|filter|query|string|false|Optional. The filter request.|
|orderBy|query|string|false|Optional. the order by fields for the result.|
|pageSize|query|integer|false|Optional. The maximum number of migrating VMs to return. The service may return fewer than this value. If unspecified, at most 500 migrating VMs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Required. A page token, received from a previous `ListMigratingVms` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMigratingVms` must match the call that provided the page token.|
|view|query|string|false|Optional. The level of details of each migrating VM.|
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
|view|MIGRATING_VM_VIEW_UNSPECIFIED|
|view|MIGRATING_VM_VIEW_BASIC|
|view|MIGRATING_VM_VIEW_FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "migratingVms": [
    {
      "awsSourceVmDetails": {
        "committedStorageBytes": "string",
        "firmware": "FIRMWARE_UNSPECIFIED"
      },
      "computeEngineTargetDefaults": {
        "additionalLicenses": [
          "string"
        ],
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
        "hostname": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "secureBoot": true,
        "serviceAccount": "string",
        "targetProject": "string",
        "vmName": "string",
        "zone": "string"
      },
      "computeEngineVmDefaults": {
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "DISK_TYPE_UNSPECIFIED",
        "externalIp": "string",
        "internalIp": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "network": "string",
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "subnetwork": "string",
        "targetProject": "string",
        "zone": "string"
      },
      "createTime": "string",
      "currentSyncInfo": {
        "cycleNumber": 0,
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
        "name": "string",
        "progress": 0,
        "progressPercent": 0,
        "startTime": "string",
        "state": "STATE_UNSPECIFIED",
        "steps": [
          {
            "endTime": "string",
            "initializingReplication": {},
            "postProcessing": {},
            "replicating": {
              "lastThirtyMinutesAverageBytesPerSecond": "string",
              "lastTwoMinutesAverageBytesPerSecond": "string",
              "replicatedBytes": "string",
              "totalBytes": "string"
            },
            "startTime": "string"
          }
        ],
        "totalPauseDuration": "string",
        "warnings": [
          {
            "actionItem": {
              "locale": "string",
              "message": "string"
            },
            "code": "WARNING_CODE_UNSPECIFIED",
            "helpLinks": [
              {
                "description": "string",
                "url": "string"
              }
            ],
            "warningMessage": {
              "locale": "string",
              "message": "string"
            },
            "warningTime": "string"
          }
        ]
      },
      "cutoverForecast": {
        "estimatedCutoverJobDuration": "string"
      },
      "description": "string",
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
      "group": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "lastReplicationCycle": {
        "cycleNumber": 0,
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
        "name": "string",
        "progress": 0,
        "progressPercent": 0,
        "startTime": "string",
        "state": "STATE_UNSPECIFIED",
        "steps": [
          {
            "endTime": "string",
            "initializingReplication": {},
            "postProcessing": {},
            "replicating": {
              "lastThirtyMinutesAverageBytesPerSecond": "string",
              "lastTwoMinutesAverageBytesPerSecond": "string",
              "replicatedBytes": "string",
              "totalBytes": "string"
            },
            "startTime": "string"
          }
        ],
        "totalPauseDuration": "string",
        "warnings": [
          {
            "actionItem": {
              "locale": "string",
              "message": "string"
            },
            "code": "WARNING_CODE_UNSPECIFIED",
            "helpLinks": [
              {
                "description": "string",
                "url": "string"
              }
            ],
            "warningMessage": {
              "locale": "string",
              "message": "string"
            },
            "warningTime": "string"
          }
        ]
      },
      "lastSync": {
        "lastSyncTime": "string"
      },
      "name": "string",
      "policy": {
        "idleDuration": "string",
        "skipOsAdaptation": true
      },
      "recentCloneJobs": [
        {
          "computeEngineTargetDetails": {
            "additionalLicenses": [
              "string"
            ],
            "appliedLicense": {
              "osLicense": "string",
              "type": "TYPE_UNSPECIFIED"
            },
            "bootOption": "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
            "computeScheduling": {
              "automaticRestart": true,
              "minNodeCpus": 0,
              "nodeAffinities": [
                {
                  "key": "string",
                  "operator": "OPERATOR_UNSPECIFIED",
                  "values": [
                    "string"
                  ]
                }
              ],
              "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
              "restartType": "RESTART_TYPE_UNSPECIFIED"
            },
            "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
            "hostname": "string",
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
            "machineType": "string",
            "machineTypeSeries": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "networkInterfaces": [
              {
                "externalIp": "string",
                "internalIp": "string",
                "network": "string",
                "subnetwork": "string"
              }
            ],
            "networkTags": [
              "string"
            ],
            "project": "string",
            "secureBoot": true,
            "serviceAccount": "string",
            "vmName": "string",
            "zone": "string"
          },
          "computeEngineVmDetails": {
            "appliedLicense": {
              "osLicense": "string",
              "type": "TYPE_UNSPECIFIED"
            },
            "bootOption": "BOOT_OPTION_UNSPECIFIED",
            "computeScheduling": {
              "automaticRestart": true,
              "minNodeCpus": 0,
              "nodeAffinities": [
                {
                  "key": "string",
                  "operator": "OPERATOR_UNSPECIFIED",
                  "values": [
                    "string"
                  ]
                }
              ],
              "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
              "restartType": "RESTART_TYPE_UNSPECIFIED"
            },
            "diskType": "DISK_TYPE_UNSPECIFIED",
            "externalIp": "string",
            "internalIp": "string",
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "licenseType": "DEFAULT",
            "machineType": "string",
            "machineTypeSeries": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string",
            "network": "string",
            "networkInterfaces": [
              {
                "externalIp": "string",
                "internalIp": "string",
                "network": "string",
                "subnetwork": "string"
              }
            ],
            "networkTags": [
              "string"
            ],
            "project": "string",
            "secureBoot": true,
            "serviceAccount": "string",
            "subnetwork": "string",
            "targetProject": "string",
            "zone": "string"
          },
          "createTime": "string",
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
          "name": "string",
          "state": "STATE_UNSPECIFIED",
          "stateTime": "string",
          "steps": [
            {
              "adaptingOs": {},
              "endTime": "string",
              "instantiatingMigratedVm": {},
              "preparingVmDisks": {},
              "startTime": "string"
            }
          ],
          "targetDetails": {
            "appliedLicense": {
              "osLicense": "string",
              "type": "TYPE_UNSPECIFIED"
            },
            "bootOption": "BOOT_OPTION_UNSPECIFIED",
            "computeScheduling": {
              "automaticRestart": true,
              "minNodeCpus": 0,
              "nodeAffinities": [
                {
                  "key": "string",
                  "operator": "OPERATOR_UNSPECIFIED",
                  "values": [
                    "string"
                  ]
                }
              ],
              "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
              "restartType": "RESTART_TYPE_UNSPECIFIED"
            },
            "diskType": "DISK_TYPE_UNSPECIFIED",
            "externalIp": "string",
            "internalIp": "string",
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "licenseType": "DEFAULT",
            "machineType": "string",
            "machineTypeSeries": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string",
            "network": "string",
            "networkInterfaces": [
              {
                "externalIp": "string",
                "internalIp": "string",
                "network": "string",
                "subnetwork": "string"
              }
            ],
            "networkTags": [
              "string"
            ],
            "project": "string",
            "secureBoot": true,
            "serviceAccount": "string",
            "subnetwork": "string",
            "targetProject": "string",
            "zone": "string"
          }
        }
      ],
      "recentCutoverJobs": [
        {
          "computeEngineTargetDetails": {
            "additionalLicenses": [
              "string"
            ],
            "appliedLicense": {
              "osLicense": "string",
              "type": "TYPE_UNSPECIFIED"
            },
            "bootOption": "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
            "computeScheduling": {
              "automaticRestart": true,
              "minNodeCpus": 0,
              "nodeAffinities": [
                {
                  "key": "string",
                  "operator": "OPERATOR_UNSPECIFIED",
                  "values": [
                    "string"
                  ]
                }
              ],
              "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
              "restartType": "RESTART_TYPE_UNSPECIFIED"
            },
            "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
            "hostname": "string",
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
            "machineType": "string",
            "machineTypeSeries": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "networkInterfaces": [
              {
                "externalIp": "string",
                "internalIp": "string",
                "network": "string",
                "subnetwork": "string"
              }
            ],
            "networkTags": [
              "string"
            ],
            "project": "string",
            "secureBoot": true,
            "serviceAccount": "string",
            "vmName": "string",
            "zone": "string"
          },
          "computeEngineVmDetails": {
            "appliedLicense": {
              "osLicense": "string",
              "type": "TYPE_UNSPECIFIED"
            },
            "bootOption": "BOOT_OPTION_UNSPECIFIED",
            "computeScheduling": {
              "automaticRestart": true,
              "minNodeCpus": 0,
              "nodeAffinities": [
                {
                  "key": "string",
                  "operator": "OPERATOR_UNSPECIFIED",
                  "values": [
                    "string"
                  ]
                }
              ],
              "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
              "restartType": "RESTART_TYPE_UNSPECIFIED"
            },
            "diskType": "DISK_TYPE_UNSPECIFIED",
            "externalIp": "string",
            "internalIp": "string",
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "licenseType": "DEFAULT",
            "machineType": "string",
            "machineTypeSeries": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string",
            "network": "string",
            "networkInterfaces": [
              {
                "externalIp": "string",
                "internalIp": "string",
                "network": "string",
                "subnetwork": "string"
              }
            ],
            "networkTags": [
              "string"
            ],
            "project": "string",
            "secureBoot": true,
            "serviceAccount": "string",
            "subnetwork": "string",
            "targetProject": "string",
            "zone": "string"
          },
          "createTime": "string",
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
          "name": "string",
          "progress": 0,
          "progressPercent": 0,
          "state": "STATE_UNSPECIFIED",
          "stateMessage": "string",
          "stateTime": "string",
          "steps": [
            {
              "endTime": "string",
              "finalSync": {
                "cycleNumber": 0,
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
                "name": "string",
                "progress": 0,
                "progressPercent": 0,
                "startTime": "string",
                "state": "STATE_UNSPECIFIED",
                "steps": [
                  {
                    "endTime": "string",
                    "initializingReplication": {},
                    "postProcessing": {},
                    "replicating": {
                      "lastThirtyMinutesAverageBytesPerSecond": "string",
                      "lastTwoMinutesAverageBytesPerSecond": "string",
                      "replicatedBytes": "string",
                      "totalBytes": "string"
                    },
                    "startTime": "string"
                  }
                ],
                "totalPauseDuration": "string",
                "warnings": [
                  {
                    "actionItem": {
                      "locale": "string",
                      "message": "string"
                    },
                    "code": "WARNING_CODE_UNSPECIFIED",
                    "helpLinks": [
                      {
                        "description": "string",
                        "url": "string"
                      }
                    ],
                    "warningMessage": {
                      "locale": "string",
                      "message": "string"
                    },
                    "warningTime": "string"
                  }
                ]
              },
              "instantiatingMigratedVm": {},
              "preparingVmDisks": {},
              "previousReplicationCycle": {
                "cycleNumber": 0,
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
                "name": "string",
                "progress": 0,
                "progressPercent": 0,
                "startTime": "string",
                "state": "STATE_UNSPECIFIED",
                "steps": [
                  {
                    "endTime": "string",
                    "initializingReplication": {},
                    "postProcessing": {},
                    "replicating": {
                      "lastThirtyMinutesAverageBytesPerSecond": "string",
                      "lastTwoMinutesAverageBytesPerSecond": "string",
                      "replicatedBytes": "string",
                      "totalBytes": "string"
                    },
                    "startTime": "string"
                  }
                ],
                "totalPauseDuration": "string",
                "warnings": [
                  {
                    "actionItem": {
                      "locale": "string",
                      "message": "string"
                    },
                    "code": "WARNING_CODE_UNSPECIFIED",
                    "helpLinks": [
                      {
                        "description": "string",
                        "url": "string"
                      }
                    ],
                    "warningMessage": {
                      "locale": "string",
                      "message": "string"
                    },
                    "warningTime": "string"
                  }
                ]
              },
              "shuttingDownSourceVm": {},
              "startTime": "string"
            }
          ],
          "targetDetails": {
            "appliedLicense": {
              "osLicense": "string",
              "type": "TYPE_UNSPECIFIED"
            },
            "bootOption": "BOOT_OPTION_UNSPECIFIED",
            "computeScheduling": {
              "automaticRestart": true,
              "minNodeCpus": 0,
              "nodeAffinities": [
                {
                  "key": "string",
                  "operator": "OPERATOR_UNSPECIFIED",
                  "values": [
                    "string"
                  ]
                }
              ],
              "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
              "restartType": "RESTART_TYPE_UNSPECIFIED"
            },
            "diskType": "DISK_TYPE_UNSPECIFIED",
            "externalIp": "string",
            "internalIp": "string",
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "licenseType": "DEFAULT",
            "machineType": "string",
            "machineTypeSeries": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string",
            "network": "string",
            "networkInterfaces": [
              {
                "externalIp": "string",
                "internalIp": "string",
                "network": "string",
                "subnetwork": "string"
              }
            ],
            "networkTags": [
              "string"
            ],
            "project": "string",
            "secureBoot": true,
            "serviceAccount": "string",
            "subnetwork": "string",
            "targetProject": "string",
            "zone": "string"
          }
        }
      ],
      "sourceVmId": "string",
      "state": "STATE_UNSPECIFIED",
      "stateTime": "string",
      "targetDefaults": {
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "DISK_TYPE_UNSPECIFIED",
        "externalIp": "string",
        "internalIp": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "network": "string",
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "subnetwork": "string",
        "targetProject": "string",
        "zone": "string"
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="vmmigrationprojectslocationssourcesmigratingvmslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListMigratingVmsResponse](#schemalistmigratingvmsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.migratingVms.create

<a id="opIdvmmigration.projects.locations.sources.migratingVms.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/migratingVms \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "computeEngineTargetDefaults": {
      "additionalLicenses": [
        "string"
      ],
      "computeScheduling": {
        "automaticRestart": true,
        "minNodeCpus": 0,
        "nodeAffinities": [
          {
            "key": "string",
            "operator": "OPERATOR_UNSPECIFIED",
            "values": [
              "string"
            ]
          }
        ],
        "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
        "restartType": "RESTART_TYPE_UNSPECIFIED"
      },
      "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
      "hostname": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
      "machineType": "string",
      "machineTypeSeries": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "networkInterfaces": [
        {
          "externalIp": "string",
          "internalIp": "string",
          "network": "string",
          "subnetwork": "string"
        }
      ],
      "networkTags": [
        "string"
      ],
      "secureBoot": true,
      "serviceAccount": "string",
      "targetProject": "string",
      "vmName": "string",
      "zone": "string"
    },
    "computeEngineVmDefaults": {
      "computeScheduling": {
        "automaticRestart": true,
        "minNodeCpus": 0,
        "nodeAffinities": [
          {
            "key": "string",
            "operator": "OPERATOR_UNSPECIFIED",
            "values": [
              "string"
            ]
          }
        ],
        "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
        "restartType": "RESTART_TYPE_UNSPECIFIED"
      },
      "diskType": "DISK_TYPE_UNSPECIFIED",
      "externalIp": "string",
      "internalIp": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "licenseType": "DEFAULT",
      "machineType": "string",
      "machineTypeSeries": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "network": "string",
      "networkInterfaces": [
        {
          "externalIp": "string",
          "internalIp": "string",
          "network": "string",
          "subnetwork": "string"
        }
      ],
      "networkTags": [
        "string"
      ],
      "secureBoot": true,
      "serviceAccount": "string",
      "subnetwork": "string",
      "targetProject": "string",
      "zone": "string"
    },
    "description": "string",
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "policy": {
      "idleDuration": "string",
      "skipOsAdaptation": true
    },
    "sourceVmId": "string",
    "targetDefaults": {
      "computeScheduling": {
        "automaticRestart": true,
        "minNodeCpus": 0,
        "nodeAffinities": [
          {
            "key": "string",
            "operator": "OPERATOR_UNSPECIFIED",
            "values": [
              "string"
            ]
          }
        ],
        "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
        "restartType": "RESTART_TYPE_UNSPECIFIED"
      },
      "diskType": "DISK_TYPE_UNSPECIFIED",
      "externalIp": "string",
      "internalIp": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "licenseType": "DEFAULT",
      "machineType": "string",
      "machineTypeSeries": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "network": "string",
      "networkInterfaces": [
        {
          "externalIp": "string",
          "internalIp": "string",
          "network": "string",
          "subnetwork": "string"
        }
      ],
      "networkTags": [
        "string"
      ],
      "secureBoot": true,
      "serviceAccount": "string",
      "subnetwork": "string",
      "targetProject": "string",
      "zone": "string"
    }
  }'
```

`POST /v1alpha1/{parent}/migratingVms`

Creates a new MigratingVm in a given Source.

> Body parameter

```json
{
  "computeEngineTargetDefaults": {
    "additionalLicenses": [
      "string"
    ],
    "computeScheduling": {
      "automaticRestart": true,
      "minNodeCpus": 0,
      "nodeAffinities": [
        {
          "key": "string",
          "operator": "OPERATOR_UNSPECIFIED",
          "values": [
            "string"
          ]
        }
      ],
      "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
      "restartType": "RESTART_TYPE_UNSPECIFIED"
    },
    "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
    "hostname": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
    "machineType": "string",
    "machineTypeSeries": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "networkInterfaces": [
      {
        "externalIp": "string",
        "internalIp": "string",
        "network": "string",
        "subnetwork": "string"
      }
    ],
    "networkTags": [
      "string"
    ],
    "secureBoot": true,
    "serviceAccount": "string",
    "targetProject": "string",
    "vmName": "string",
    "zone": "string"
  },
  "computeEngineVmDefaults": {
    "computeScheduling": {
      "automaticRestart": true,
      "minNodeCpus": 0,
      "nodeAffinities": [
        {
          "key": "string",
          "operator": "OPERATOR_UNSPECIFIED",
          "values": [
            "string"
          ]
        }
      ],
      "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
      "restartType": "RESTART_TYPE_UNSPECIFIED"
    },
    "diskType": "DISK_TYPE_UNSPECIFIED",
    "externalIp": "string",
    "internalIp": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "licenseType": "DEFAULT",
    "machineType": "string",
    "machineTypeSeries": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "network": "string",
    "networkInterfaces": [
      {
        "externalIp": "string",
        "internalIp": "string",
        "network": "string",
        "subnetwork": "string"
      }
    ],
    "networkTags": [
      "string"
    ],
    "secureBoot": true,
    "serviceAccount": "string",
    "subnetwork": "string",
    "targetProject": "string",
    "zone": "string"
  },
  "description": "string",
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "policy": {
    "idleDuration": "string",
    "skipOsAdaptation": true
  },
  "sourceVmId": "string",
  "targetDefaults": {
    "computeScheduling": {
      "automaticRestart": true,
      "minNodeCpus": 0,
      "nodeAffinities": [
        {
          "key": "string",
          "operator": "OPERATOR_UNSPECIFIED",
          "values": [
            "string"
          ]
        }
      ],
      "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
      "restartType": "RESTART_TYPE_UNSPECIFIED"
    },
    "diskType": "DISK_TYPE_UNSPECIFIED",
    "externalIp": "string",
    "internalIp": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "licenseType": "DEFAULT",
    "machineType": "string",
    "machineTypeSeries": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "network": "string",
    "networkInterfaces": [
      {
        "externalIp": "string",
        "internalIp": "string",
        "network": "string",
        "subnetwork": "string"
      }
    ],
    "networkTags": [
      "string"
    ],
    "secureBoot": true,
    "serviceAccount": "string",
    "subnetwork": "string",
    "targetProject": "string",
    "zone": "string"
  }
}
```

<h3 id="vmmigrationprojectslocationssourcesmigratingvmscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The MigratingVm's parent.|
|migratingVmId|query|string|false|Required. The migratingVm identifier.|
|requestId|query|string|false|A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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
|body|body|[MigratingVm](#schemamigratingvm)|false|none|
|» computeEngineTargetDefaults|body|[ComputeEngineTargetDefaults](#schemacomputeenginetargetdefaults)|false|Details of the target VM in Compute Engine.|
|» computeEngineVmDefaults|body|[TargetVMDetails](#schematargetvmdetails)|false|Details of the VM in Compute Engine. Deprecated: Use compute_engine_target_defaults instead.|
|» description|body|string|false|The description attached to the migrating VM by the user.|
|» displayName|body|string|false|The display name attached to the MigratingVm by the user.|
|» labels|body|object|false|The labels of the migrating VM.|
|» » **additionalProperties**|body|string|false|none|
|» policy|body|[SchedulePolicy](#schemaschedulepolicy)|false|The replication schedule policy.|
|» sourceVmId|body|string|false|The unique ID of the VM in the source. The VM's name in vSphere can be changed, so this is not the VM's name but rather its moRef id. This id is of the form vm-.|
|» targetDefaults|body|[TargetVMDetails](#schematargetvmdetails)|false|The default configuration of the target VM that will be created in Google Cloud as a result of the migration. Deprecated: Use compute_engine_target_defaults instead.|

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

<h3 id="vmmigrationprojectslocationssourcesmigratingvmscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.migratingVms.replicationCycles.list

<a id="opIdvmmigration.projects.locations.sources.migratingVms.replicationCycles.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/replicationCycles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/replicationCycles`

Lists ReplicationCycles in a given MigratingVM.

<h3 id="vmmigrationprojectslocationssourcesmigratingvmsreplicationcycleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of ReplicationCycles.|
|filter|query|string|false|Optional. The filter request.|
|orderBy|query|string|false|Optional. the order by fields for the result.|
|pageSize|query|integer|false|Optional. The maximum number of replication cycles to return. The service may return fewer than this value. If unspecified, at most 100 migrating VMs will be returned. The maximum value is 100; values above 100 will be coerced to 100.|
|pageToken|query|string|false|Required. A page token, received from a previous `ListReplicationCycles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReplicationCycles` must match the call that provided the page token.|
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
  "replicationCycles": [
    {
      "cycleNumber": 0,
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
      "name": "string",
      "progress": 0,
      "progressPercent": 0,
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "steps": [
        {
          "endTime": "string",
          "initializingReplication": {},
          "postProcessing": {},
          "replicating": {
            "lastThirtyMinutesAverageBytesPerSecond": "string",
            "lastTwoMinutesAverageBytesPerSecond": "string",
            "replicatedBytes": "string",
            "totalBytes": "string"
          },
          "startTime": "string"
        }
      ],
      "totalPauseDuration": "string",
      "warnings": [
        {
          "actionItem": {
            "locale": "string",
            "message": "string"
          },
          "code": "WARNING_CODE_UNSPECIFIED",
          "helpLinks": [
            {
              "description": "string",
              "url": "string"
            }
          ],
          "warningMessage": {
            "locale": "string",
            "message": "string"
          },
          "warningTime": "string"
        }
      ]
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="vmmigrationprojectslocationssourcesmigratingvmsreplicationcycleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListReplicationCyclesResponse](#schemalistreplicationcyclesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.list

<a id="opIdvmmigration.projects.locations.sources.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/sources \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/sources`

Lists Sources in a given project and location.

<h3 id="vmmigrationprojectslocationssourceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of sources.|
|filter|query|string|false|Optional. The filter request.|
|orderBy|query|string|false|Optional. the order by fields for the result.|
|pageSize|query|integer|false|Optional. The maximum number of sources to return. The service may return fewer than this value. If unspecified, at most 500 sources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Required. A page token, received from a previous `ListSources` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSources` must match the call that provided the page token.|
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
  "sources": [
    {
      "aws": {
        "accessKeyCreds": {
          "accessKeyId": "string",
          "secretAccessKey": "string",
          "sessionToken": "string"
        },
        "awsRegion": "string",
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
        "inventorySecurityGroupNames": [
          "string"
        ],
        "inventoryTagList": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "migrationResourcesUserTags": {
          "property1": "string",
          "property2": "string"
        },
        "publicIp": "string",
        "state": "STATE_UNSPECIFIED"
      },
      "createTime": "string",
      "description": "string",
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
      "updateTime": "string",
      "vmware": {
        "password": "string",
        "thumbprint": "string",
        "username": "string",
        "vcenterIp": "string"
      }
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="vmmigrationprojectslocationssourceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSourcesResponse](#schemalistsourcesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.create

<a id="opIdvmmigration.projects.locations.sources.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/sources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "aws": {
      "accessKeyCreds": {
        "accessKeyId": "string",
        "secretAccessKey": "string",
        "sessionToken": "string"
      },
      "awsRegion": "string",
      "inventorySecurityGroupNames": [
        "string"
      ],
      "inventoryTagList": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "migrationResourcesUserTags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "description": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "vmware": {
      "password": "string",
      "thumbprint": "string",
      "username": "string",
      "vcenterIp": "string"
    }
  }'
```

`POST /v1alpha1/{parent}/sources`

Creates a new Source in a given project and location.

> Body parameter

```json
{
  "aws": {
    "accessKeyCreds": {
      "accessKeyId": "string",
      "secretAccessKey": "string",
      "sessionToken": "string"
    },
    "awsRegion": "string",
    "inventorySecurityGroupNames": [
      "string"
    ],
    "inventoryTagList": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "migrationResourcesUserTags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "vmware": {
    "password": "string",
    "thumbprint": "string",
    "username": "string",
    "vcenterIp": "string"
  }
}
```

<h3 id="vmmigrationprojectslocationssourcescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The Source's parent.|
|requestId|query|string|false|A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|sourceId|query|string|false|Required. The source identifier.|
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
|body|body|[Source](#schemasource)|false|none|
|» aws|body|[AwsSourceDetails](#schemaawssourcedetails)|false|AWS type source details.|
|» description|body|string|false|User-provided description of the source.|
|» labels|body|object|false|The labels of the source.|
|» » **additionalProperties**|body|string|false|none|
|» vmware|body|[VmwareSourceDetails](#schemavmwaresourcedetails)|false|Vmware type source details.|

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

<h3 id="vmmigrationprojectslocationssourcescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.targetProjects.list

<a id="opIdvmmigration.projects.locations.targetProjects.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/targetProjects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/targetProjects`

Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

<h3 id="vmmigrationprojectslocationstargetprojectslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of targets.|
|filter|query|string|false|Optional. The filter request.|
|orderBy|query|string|false|Optional. the order by fields for the result.|
|pageSize|query|integer|false|Optional. The maximum number of targets to return. The service may return fewer than this value. If unspecified, at most 500 targets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Required. A page token, received from a previous `ListTargets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTargets` must match the call that provided the page token.|
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
  "targetProjects": [
    {
      "createTime": "string",
      "description": "string",
      "name": "string",
      "project": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="vmmigrationprojectslocationstargetprojectslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTargetProjectsResponse](#schemalisttargetprojectsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.targetProjects.create

<a id="opIdvmmigration.projects.locations.targetProjects.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/targetProjects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "project": "string"
  }'
```

`POST /v1alpha1/{parent}/targetProjects`

Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

> Body parameter

```json
{
  "description": "string",
  "project": "string"
}
```

<h3 id="vmmigrationprojectslocationstargetprojectscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The TargetProject's parent.|
|requestId|query|string|false|A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|targetProjectId|query|string|false|Required. The target_project identifier.|
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
|body|body|[TargetProject](#schematargetproject)|false|none|
|» description|body|string|false|The target project's description.|
|» project|body|string|false|The target project ID (number) or project name.|

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

<h3 id="vmmigrationprojectslocationstargetprojectscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.utilizationReports.list

<a id="opIdvmmigration.projects.locations.sources.utilizationReports.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/utilizationReports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/utilizationReports`

Lists Utilization Reports of the given Source.

<h3 id="vmmigrationprojectslocationssourcesutilizationreportslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The Utilization Reports parent.|
|filter|query|string|false|Optional. The filter request.|
|orderBy|query|string|false|Optional. the order by fields for the result.|
|pageSize|query|integer|false|Optional. The maximum number of reports to return. The service may return fewer than this value. If unspecified, at most 500 reports will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Required. A page token, received from a previous `ListUtilizationReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUtilizationReports` must match the call that provided the page token.|
|view|query|string|false|Optional. The level of details of each report. Defaults to BASIC.|
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
|view|UTILIZATION_REPORT_VIEW_UNSPECIFIED|
|view|BASIC|
|view|FULL|
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
  "unreachable": [
    "string"
  ],
  "utilizationReports": [
    {
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
      "frameEndTime": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "stateTime": "string",
      "timeFrame": "TIME_FRAME_UNSPECIFIED",
      "vmCount": 0,
      "vms": [
        {
          "utilization": {
            "cpuAverage": 0,
            "cpuAveragePercent": 0,
            "cpuMax": 0,
            "cpuMaxPercent": 0,
            "diskIoRateAverage": "string",
            "diskIoRateAverageKbps": "string",
            "diskIoRateMax": "string",
            "diskIoRateMaxKbps": "string",
            "memoryAverage": 0,
            "memoryAveragePercent": 0,
            "memoryMax": 0,
            "memoryMaxPercent": 0,
            "networkThroughputAverage": "string",
            "networkThroughputAverageKbps": "string",
            "networkThroughputMax": "string",
            "networkThroughputMaxKbps": "string"
          },
          "vmId": "string",
          "vmwareVmDetails": {
            "bootOption": "BOOT_OPTION_UNSPECIFIED",
            "committedStorage": "string",
            "committedStorageMb": "string",
            "cpuCount": 0,
            "datacenterDescription": "string",
            "datacenterId": "string",
            "diskCount": 0,
            "displayName": "string",
            "guestDescription": "string",
            "memoryMb": 0,
            "powerState": "POWER_STATE_UNSPECIFIED",
            "uuid": "string",
            "vmId": "string"
          }
        }
      ],
      "vmsCount": 0
    }
  ]
}
```

<h3 id="vmmigrationprojectslocationssourcesutilizationreportslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListUtilizationReportsResponse](#schemalistutilizationreportsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.utilizationReports.create

<a id="opIdvmmigration.projects.locations.sources.utilizationReports.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/utilizationReports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "timeFrame": "TIME_FRAME_UNSPECIFIED",
    "vms": [
      {
        "utilization": {
          "cpuAverage": 0,
          "cpuAveragePercent": 0,
          "cpuMax": 0,
          "cpuMaxPercent": 0,
          "diskIoRateAverage": "string",
          "diskIoRateAverageKbps": "string",
          "diskIoRateMax": "string",
          "diskIoRateMaxKbps": "string",
          "memoryAverage": 0,
          "memoryAveragePercent": 0,
          "memoryMax": 0,
          "memoryMaxPercent": 0,
          "networkThroughputAverage": "string",
          "networkThroughputAverageKbps": "string",
          "networkThroughputMax": "string",
          "networkThroughputMaxKbps": "string"
        },
        "vmId": "string",
        "vmwareVmDetails": {
          "committedStorage": "string",
          "committedStorageMb": "string",
          "cpuCount": 0,
          "datacenterDescription": "string",
          "datacenterId": "string",
          "diskCount": 0,
          "displayName": "string",
          "guestDescription": "string",
          "memoryMb": 0,
          "powerState": "POWER_STATE_UNSPECIFIED",
          "uuid": "string",
          "vmId": "string"
        }
      }
    ]
  }'
```

`POST /v1alpha1/{parent}/utilizationReports`

Creates a new UtilizationReport.

> Body parameter

```json
{
  "displayName": "string",
  "timeFrame": "TIME_FRAME_UNSPECIFIED",
  "vms": [
    {
      "utilization": {
        "cpuAverage": 0,
        "cpuAveragePercent": 0,
        "cpuMax": 0,
        "cpuMaxPercent": 0,
        "diskIoRateAverage": "string",
        "diskIoRateAverageKbps": "string",
        "diskIoRateMax": "string",
        "diskIoRateMaxKbps": "string",
        "memoryAverage": 0,
        "memoryAveragePercent": 0,
        "memoryMax": 0,
        "memoryMaxPercent": 0,
        "networkThroughputAverage": "string",
        "networkThroughputAverageKbps": "string",
        "networkThroughputMax": "string",
        "networkThroughputMaxKbps": "string"
      },
      "vmId": "string",
      "vmwareVmDetails": {
        "committedStorage": "string",
        "committedStorageMb": "string",
        "cpuCount": 0,
        "datacenterDescription": "string",
        "datacenterId": "string",
        "diskCount": 0,
        "displayName": "string",
        "guestDescription": "string",
        "memoryMb": 0,
        "powerState": "POWER_STATE_UNSPECIFIED",
        "uuid": "string",
        "vmId": "string"
      }
    }
  ]
}
```

<h3 id="vmmigrationprojectslocationssourcesutilizationreportscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The Utilization Report's parent.|
|requestId|query|string|false|A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|utilizationReportId|query|string|false|Required. The ID to use for the report, which will become the final component of the reports's resource name. This value maximum length is 63 characters, and valid characters are /a-z-/. It must start with an english letter and must not end with a hyphen.|
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
|body|body|[UtilizationReport](#schemautilizationreport)|false|none|
|» displayName|body|string|false|The report display name, as assigned by the user.|
|» timeFrame|body|string|false|Time frame of the report.|
|» vms|body|[[VmUtilizationInfo](#schemavmutilizationinfo)]|false|List of utilization information per VM. When sent as part of the request, the "vm_id" field is used in order to specify which VMs to include in the report. In that case all other fields are ignored.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» timeFrame|TIME_FRAME_UNSPECIFIED|
|» timeFrame|WEEK|
|» timeFrame|MONTH|
|» timeFrame|YEAR|

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

<h3 id="vmmigrationprojectslocationssourcesutilizationreportscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vmmigration.projects.locations.sources.fetchInventory

<a id="opIdvmmigration.projects.locations.sources.fetchInventory"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:fetchInventory \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{source}:fetchInventory`

List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.

<h3 id="vmmigrationprojectslocationssourcesfetchinventory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|path|string|true|Required. The name of the Source.|
|forceRefresh|query|boolean|false|If this flag is set to true, the source will be queried instead of using cached results. Using this flag will make the call slower.|
|pageSize|query|integer|false|The maximum number of VMs to return. The service may return fewer than this value. For AWS source: If unspecified, at most 500 VMs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. For VMWare source: If unspecified, all VMs will be returned. There is no limit for maximum value.|
|pageToken|query|string|false|A page token, received from a previous `FetchInventory` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchInventory` must match the call that provided the page token.|
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
  "awsVms": {
    "details": [
      {
        "architecture": "VM_ARCHITECTURE_UNSPECIFIED",
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "committedStorageMb": "string",
        "cpuCount": 0,
        "diskCount": 0,
        "displayName": "string",
        "instanceType": "string",
        "memoryMb": 0,
        "osDescription": "string",
        "powerState": "POWER_STATE_UNSPECIFIED",
        "securityGroups": [
          {
            "id": "string",
            "name": "string"
          }
        ],
        "sourceDescription": "string",
        "sourceId": "string",
        "tags": {
          "property1": "string",
          "property2": "string"
        },
        "virtualizationType": "VM_VIRTUALIZATION_TYPE_UNSPECIFIED",
        "vmId": "string",
        "vpcId": "string",
        "zone": "string"
      }
    ]
  },
  "nextPageToken": "string",
  "updateTime": "string",
  "vmwareVms": {
    "details": [
      {
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "committedStorage": "string",
        "committedStorageMb": "string",
        "cpuCount": 0,
        "datacenterDescription": "string",
        "datacenterId": "string",
        "diskCount": 0,
        "displayName": "string",
        "guestDescription": "string",
        "memoryMb": 0,
        "powerState": "POWER_STATE_UNSPECIFIED",
        "uuid": "string",
        "vmId": "string"
      }
    ]
  }
}
```

<h3 id="vmmigrationprojectslocationssourcesfetchinventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FetchInventoryResponse](#schemafetchinventoryresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AccessKeyCredentials">AccessKeyCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaaccesskeycredentials"></a>
<a id="schema_AccessKeyCredentials"></a>
<a id="tocSaccesskeycredentials"></a>
<a id="tocsaccesskeycredentials"></a>

```json
{
  "accessKeyId": "string",
  "secretAccessKey": "string",
  "sessionToken": "string"
}
```

Message describing AWS Credentials using access key id and secret.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessKeyId|string|false|none|AWS access key ID.|
|secretAccessKey|string|false|none|Input only. AWS secret access key.|
|sessionToken|string|false|none|Input only. AWS session token. Used only when AWS security token service (STS) is responsible for creating the temporary credentials.|

<h2 id="tocS_AdaptingOSStep">AdaptingOSStep</h2>
<!-- backwards compatibility -->
<a id="schemaadaptingosstep"></a>
<a id="schema_AdaptingOSStep"></a>
<a id="tocSadaptingosstep"></a>
<a id="tocsadaptingosstep"></a>

```json
{}
```

AdaptingOSStep contains specific step details.

<h2 id="tocS_AddGroupMigrationRequest">AddGroupMigrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddgroupmigrationrequest"></a>
<a id="schema_AddGroupMigrationRequest"></a>
<a id="tocSaddgroupmigrationrequest"></a>
<a id="tocsaddgroupmigrationrequest"></a>

```json
{
  "migratingVm": "string"
}
```

Request message for 'AddGroupMigration' request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|migratingVm|string|false|none|The full path name of the MigratingVm to add.|

<h2 id="tocS_ApplianceVersion">ApplianceVersion</h2>
<!-- backwards compatibility -->
<a id="schemaapplianceversion"></a>
<a id="schema_ApplianceVersion"></a>
<a id="tocSapplianceversion"></a>
<a id="tocsapplianceversion"></a>

```json
{
  "critical": true,
  "releaseNotesUri": "string",
  "uri": "string",
  "version": "string"
}
```

Describes an appliance version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|critical|boolean|false|none|Determine whether it's critical to upgrade the appliance to this version.|
|releaseNotesUri|string|false|none|Link to a page that contains the version release notes.|
|uri|string|false|none|A link for downloading the version.|
|version|string|false|none|The appliance version.|

<h2 id="tocS_AppliedLicense">AppliedLicense</h2>
<!-- backwards compatibility -->
<a id="schemaappliedlicense"></a>
<a id="schema_AppliedLicense"></a>
<a id="tocSappliedlicense"></a>
<a id="tocsappliedlicense"></a>

```json
{
  "osLicense": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

AppliedLicense holds the license data returned by adaptation module report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|osLicense|string|false|none|The OS license returned from the adaptation module's report.|
|type|string|false|none|The license type that was used in OS adaptation.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|NONE|
|type|PAYG|
|type|BYOL|

<h2 id="tocS_AvailableUpdates">AvailableUpdates</h2>
<!-- backwards compatibility -->
<a id="schemaavailableupdates"></a>
<a id="schema_AvailableUpdates"></a>
<a id="tocSavailableupdates"></a>
<a id="tocsavailableupdates"></a>

```json
{
  "inPlaceUpdate": {
    "critical": true,
    "releaseNotesUri": "string",
    "uri": "string",
    "version": "string"
  },
  "newDeployableAppliance": {
    "critical": true,
    "releaseNotesUri": "string",
    "uri": "string",
    "version": "string"
  }
}
```

Holds informatiom about the available versions for upgrade.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inPlaceUpdate|[ApplianceVersion](#schemaapplianceversion)|false|none|The latest version for in place update. The current appliance can be updated to this version using the API or m4c CLI.|
|newDeployableAppliance|[ApplianceVersion](#schemaapplianceversion)|false|none|The newest deployable version of the appliance. The current appliance can't be updated into this version, and the owner must manually deploy this OVA to a new appliance.|

<h2 id="tocS_AwsSecurityGroup">AwsSecurityGroup</h2>
<!-- backwards compatibility -->
<a id="schemaawssecuritygroup"></a>
<a id="schema_AwsSecurityGroup"></a>
<a id="tocSawssecuritygroup"></a>
<a id="tocsawssecuritygroup"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

AwsSecurityGroup describes a security group of an AWS VM.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The AWS security group id.|
|name|string|false|none|The AWS security group name.|

<h2 id="tocS_AwsSourceDetails">AwsSourceDetails</h2>
<!-- backwards compatibility -->
<a id="schemaawssourcedetails"></a>
<a id="schema_AwsSourceDetails"></a>
<a id="tocSawssourcedetails"></a>
<a id="tocsawssourcedetails"></a>

```json
{
  "accessKeyCreds": {
    "accessKeyId": "string",
    "secretAccessKey": "string",
    "sessionToken": "string"
  },
  "awsRegion": "string",
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
  "inventorySecurityGroupNames": [
    "string"
  ],
  "inventoryTagList": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "migrationResourcesUserTags": {
    "property1": "string",
    "property2": "string"
  },
  "publicIp": "string",
  "state": "STATE_UNSPECIFIED"
}
```

AwsSourceDetails message describes a specific source details for the AWS source type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessKeyCreds|[AccessKeyCredentials](#schemaaccesskeycredentials)|false|none|AWS Credentials using access key id and secret.|
|awsRegion|string|false|none|Immutable. The AWS region that the source VMs will be migrated from.|
|error|[Status](#schemastatus)|false|none|Output only. Provides details on the state of the Source in case of an error.|
|inventorySecurityGroupNames|[string]|false|none|AWS security group names to limit the scope of the source inventory.|
|inventoryTagList|[[Tag](#schematag)]|false|none|AWS resource tags to limit the scope of the source inventory.|
|migrationResourcesUserTags|object|false|none|User specified tags to add to every M2VM generated resource in AWS. These tags will be set in addition to the default tags that are set as part of the migration process. The tags must not begin with the reserved prefix `m2vm`.|
|publicIp|string|false|read-only|Output only. The source's public IP. All communication initiated by this source will originate from this IP.|
|state|string|false|read-only|Output only. State of the source as determined by the health check.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|FAILED|
|state|ACTIVE|

<h2 id="tocS_AwsSourceVmDetails">AwsSourceVmDetails</h2>
<!-- backwards compatibility -->
<a id="schemaawssourcevmdetails"></a>
<a id="schema_AwsSourceVmDetails"></a>
<a id="tocSawssourcevmdetails"></a>
<a id="tocsawssourcevmdetails"></a>

```json
{
  "committedStorageBytes": "string",
  "firmware": "FIRMWARE_UNSPECIFIED"
}
```

Represent the source AWS VM details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|committedStorageBytes|string(int64)|false|none|The total size of the disks being migrated in bytes.|
|firmware|string|false|none|The firmware type of the source VM.|

#### Enumerated Values

|Property|Value|
|---|---|
|firmware|FIRMWARE_UNSPECIFIED|
|firmware|EFI|
|firmware|BIOS|

<h2 id="tocS_AwsVmDetails">AwsVmDetails</h2>
<!-- backwards compatibility -->
<a id="schemaawsvmdetails"></a>
<a id="schema_AwsVmDetails"></a>
<a id="tocSawsvmdetails"></a>
<a id="tocsawsvmdetails"></a>

```json
{
  "architecture": "VM_ARCHITECTURE_UNSPECIFIED",
  "bootOption": "BOOT_OPTION_UNSPECIFIED",
  "committedStorageMb": "string",
  "cpuCount": 0,
  "diskCount": 0,
  "displayName": "string",
  "instanceType": "string",
  "memoryMb": 0,
  "osDescription": "string",
  "powerState": "POWER_STATE_UNSPECIFIED",
  "securityGroups": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "sourceDescription": "string",
  "sourceId": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "virtualizationType": "VM_VIRTUALIZATION_TYPE_UNSPECIFIED",
  "vmId": "string",
  "vpcId": "string",
  "zone": "string"
}
```

AwsVmDetails describes a VM in AWS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|architecture|string|false|none|The CPU architecture.|
|bootOption|string|false|none|The VM Boot Option.|
|committedStorageMb|string(int64)|false|none|The total size of the storage allocated to the VM in MB.|
|cpuCount|integer(int32)|false|none|The number of cpus the VM has.|
|diskCount|integer(int32)|false|none|The number of disks the VM has.|
|displayName|string|false|none|The display name of the VM. Note that this value is not necessarily unique.|
|instanceType|string|false|none|The instance type of the VM.|
|memoryMb|integer(int32)|false|none|The memory size of the VM in MB.|
|osDescription|string|false|none|The VM's OS.|
|powerState|string|false|read-only|Output only. The power state of the VM at the moment list was taken.|
|securityGroups|[[AwsSecurityGroup](#schemaawssecuritygroup)]|false|none|The security groups the VM belongs to.|
|sourceDescription|string|false|none|The descriptive name of the AWS's source this VM is connected to.|
|sourceId|string|false|none|The id of the AWS's source this VM is connected to.|
|tags|object|false|none|The tags of the VM.|
|virtualizationType|string|false|none|The virtualization type.|
|vmId|string|false|none|The VM ID in AWS.|
|vpcId|string|false|none|The VPC ID the VM belongs to.|
|zone|string|false|none|The AWS zone of the VM.|

#### Enumerated Values

|Property|Value|
|---|---|
|architecture|VM_ARCHITECTURE_UNSPECIFIED|
|architecture|I386|
|architecture|X86_64|
|architecture|ARM64|
|architecture|X86_64_MAC|
|bootOption|BOOT_OPTION_UNSPECIFIED|
|bootOption|EFI|
|bootOption|BIOS|
|powerState|POWER_STATE_UNSPECIFIED|
|powerState|ON|
|powerState|OFF|
|powerState|SUSPENDED|
|powerState|PENDING|
|virtualizationType|VM_VIRTUALIZATION_TYPE_UNSPECIFIED|
|virtualizationType|HVM|
|virtualizationType|PARAVIRTUAL|

<h2 id="tocS_AwsVmsDetails">AwsVmsDetails</h2>
<!-- backwards compatibility -->
<a id="schemaawsvmsdetails"></a>
<a id="schema_AwsVmsDetails"></a>
<a id="tocSawsvmsdetails"></a>
<a id="tocsawsvmsdetails"></a>

```json
{
  "details": [
    {
      "architecture": "VM_ARCHITECTURE_UNSPECIFIED",
      "bootOption": "BOOT_OPTION_UNSPECIFIED",
      "committedStorageMb": "string",
      "cpuCount": 0,
      "diskCount": 0,
      "displayName": "string",
      "instanceType": "string",
      "memoryMb": 0,
      "osDescription": "string",
      "powerState": "POWER_STATE_UNSPECIFIED",
      "securityGroups": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "sourceDescription": "string",
      "sourceId": "string",
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "virtualizationType": "VM_VIRTUALIZATION_TYPE_UNSPECIFIED",
      "vmId": "string",
      "vpcId": "string",
      "zone": "string"
    }
  ]
}
```

AWSVmsDetails describes VMs in AWS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[[AwsVmDetails](#schemaawsvmdetails)]|false|none|The details of the AWS VMs.|

<h2 id="tocS_CancelCloneJobRequest">CancelCloneJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelclonejobrequest"></a>
<a id="schema_CancelCloneJobRequest"></a>
<a id="tocScancelclonejobrequest"></a>
<a id="tocscancelclonejobrequest"></a>

```json
{}
```

Request message for 'CancelCloneJob' request.

<h2 id="tocS_CancelCutoverJobRequest">CancelCutoverJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelcutoverjobrequest"></a>
<a id="schema_CancelCutoverJobRequest"></a>
<a id="tocScancelcutoverjobrequest"></a>
<a id="tocscancelcutoverjobrequest"></a>

```json
{}
```

Request message for 'CancelCutoverJob' request.

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

<h2 id="tocS_CloneJob">CloneJob</h2>
<!-- backwards compatibility -->
<a id="schemaclonejob"></a>
<a id="schema_CloneJob"></a>
<a id="tocSclonejob"></a>
<a id="tocsclonejob"></a>

```json
{
  "computeEngineTargetDetails": {
    "additionalLicenses": [
      "string"
    ],
    "appliedLicense": {
      "osLicense": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "bootOption": "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
    "computeScheduling": {
      "automaticRestart": true,
      "minNodeCpus": 0,
      "nodeAffinities": [
        {
          "key": "string",
          "operator": "OPERATOR_UNSPECIFIED",
          "values": [
            "string"
          ]
        }
      ],
      "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
      "restartType": "RESTART_TYPE_UNSPECIFIED"
    },
    "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
    "hostname": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
    "machineType": "string",
    "machineTypeSeries": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "networkInterfaces": [
      {
        "externalIp": "string",
        "internalIp": "string",
        "network": "string",
        "subnetwork": "string"
      }
    ],
    "networkTags": [
      "string"
    ],
    "project": "string",
    "secureBoot": true,
    "serviceAccount": "string",
    "vmName": "string",
    "zone": "string"
  },
  "computeEngineVmDetails": {
    "appliedLicense": {
      "osLicense": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "bootOption": "BOOT_OPTION_UNSPECIFIED",
    "computeScheduling": {
      "automaticRestart": true,
      "minNodeCpus": 0,
      "nodeAffinities": [
        {
          "key": "string",
          "operator": "OPERATOR_UNSPECIFIED",
          "values": [
            "string"
          ]
        }
      ],
      "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
      "restartType": "RESTART_TYPE_UNSPECIFIED"
    },
    "diskType": "DISK_TYPE_UNSPECIFIED",
    "externalIp": "string",
    "internalIp": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "licenseType": "DEFAULT",
    "machineType": "string",
    "machineTypeSeries": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "network": "string",
    "networkInterfaces": [
      {
        "externalIp": "string",
        "internalIp": "string",
        "network": "string",
        "subnetwork": "string"
      }
    ],
    "networkTags": [
      "string"
    ],
    "project": "string",
    "secureBoot": true,
    "serviceAccount": "string",
    "subnetwork": "string",
    "targetProject": "string",
    "zone": "string"
  },
  "createTime": "string",
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
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "stateTime": "string",
  "steps": [
    {
      "adaptingOs": {},
      "endTime": "string",
      "instantiatingMigratedVm": {},
      "preparingVmDisks": {},
      "startTime": "string"
    }
  ],
  "targetDetails": {
    "appliedLicense": {
      "osLicense": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "bootOption": "BOOT_OPTION_UNSPECIFIED",
    "computeScheduling": {
      "automaticRestart": true,
      "minNodeCpus": 0,
      "nodeAffinities": [
        {
          "key": "string",
          "operator": "OPERATOR_UNSPECIFIED",
          "values": [
            "string"
          ]
        }
      ],
      "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
      "restartType": "RESTART_TYPE_UNSPECIFIED"
    },
    "diskType": "DISK_TYPE_UNSPECIFIED",
    "externalIp": "string",
    "internalIp": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "licenseType": "DEFAULT",
    "machineType": "string",
    "machineTypeSeries": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "network": "string",
    "networkInterfaces": [
      {
        "externalIp": "string",
        "internalIp": "string",
        "network": "string",
        "subnetwork": "string"
      }
    ],
    "networkTags": [
      "string"
    ],
    "project": "string",
    "secureBoot": true,
    "serviceAccount": "string",
    "subnetwork": "string",
    "targetProject": "string",
    "zone": "string"
  }
}
```

CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computeEngineTargetDetails|[ComputeEngineTargetDetails](#schemacomputeenginetargetdetails)|false|none|Output only. Details of the target VM in Compute Engine.|
|computeEngineVmDetails|[TargetVMDetails](#schematargetvmdetails)|false|none|Output only. Details of the VM in Compute Engine. Deprecated: Use compute_engine_target_details instead.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the clone job was created (as an API call, not when it was actually created in the target).|
|endTime|string(google-datetime)|false|read-only|Output only. The time the clone job was ended.|
|error|[Status](#schemastatus)|false|none|Output only. Provides details for the errors that led to the Clone Job's state.|
|name|string|false|read-only|Output only. The name of the clone.|
|state|string|false|read-only|Output only. State of the clone job.|
|stateTime|string(google-datetime)|false|read-only|Output only. The time the state was last updated.|
|steps|[[CloneStep](#schemaclonestep)]|false|read-only|Output only. The clone steps list representing its progress.|
|targetDetails|[TargetVMDetails](#schematargetvmdetails)|false|none|Output only. Details of the VM to create as the target of this clone job. Deprecated: Use compute_engine_target_details instead.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|ACTIVE|
|state|FAILED|
|state|SUCCEEDED|
|state|CANCELLED|
|state|CANCELLING|
|state|ADAPTING_OS|

<h2 id="tocS_CloneStep">CloneStep</h2>
<!-- backwards compatibility -->
<a id="schemaclonestep"></a>
<a id="schema_CloneStep"></a>
<a id="tocSclonestep"></a>
<a id="tocsclonestep"></a>

```json
{
  "adaptingOs": {},
  "endTime": "string",
  "instantiatingMigratedVm": {},
  "preparingVmDisks": {},
  "startTime": "string"
}
```

CloneStep holds information about the clone step progress.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adaptingOs|[AdaptingOSStep](#schemaadaptingosstep)|false|none|Adapting OS step.|
|endTime|string(google-datetime)|false|none|The time the step has ended.|
|instantiatingMigratedVm|[InstantiatingMigratedVMStep](#schemainstantiatingmigratedvmstep)|false|none|Instantiating migrated VM step.|
|preparingVmDisks|[PreparingVMDisksStep](#schemapreparingvmdisksstep)|false|none|Preparing VM disks step.|
|startTime|string(google-datetime)|false|none|The time the step has started.|

<h2 id="tocS_ComputeEngineTargetDefaults">ComputeEngineTargetDefaults</h2>
<!-- backwards compatibility -->
<a id="schemacomputeenginetargetdefaults"></a>
<a id="schema_ComputeEngineTargetDefaults"></a>
<a id="tocScomputeenginetargetdefaults"></a>
<a id="tocscomputeenginetargetdefaults"></a>

```json
{
  "additionalLicenses": [
    "string"
  ],
  "appliedLicense": {
    "osLicense": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "bootOption": "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
  "computeScheduling": {
    "automaticRestart": true,
    "minNodeCpus": 0,
    "nodeAffinities": [
      {
        "key": "string",
        "operator": "OPERATOR_UNSPECIFIED",
        "values": [
          "string"
        ]
      }
    ],
    "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
    "restartType": "RESTART_TYPE_UNSPECIFIED"
  },
  "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
  "hostname": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
  "machineType": "string",
  "machineTypeSeries": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "networkInterfaces": [
    {
      "externalIp": "string",
      "internalIp": "string",
      "network": "string",
      "subnetwork": "string"
    }
  ],
  "networkTags": [
    "string"
  ],
  "secureBoot": true,
  "serviceAccount": "string",
  "targetProject": "string",
  "vmName": "string",
  "zone": "string"
}
```

ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalLicenses|[string]|false|none|Additional licenses to assign to the VM.|
|appliedLicense|[AppliedLicense](#schemaappliedlicense)|false|none|Output only. The OS license returned from the adaptation module report.|
|bootOption|string|false|read-only|Output only. The VM Boot Option, as set in the source vm.|
|computeScheduling|[ComputeScheduling](#schemacomputescheduling)|false|none|Compute instance scheduling information (if empty default is used).|
|diskType|string|false|none|The disk type to use in the VM.|
|hostname|string|false|none|The hostname to assign to the VM.|
|labels|object|false|none|A map of labels to associate with the VM.|
|licenseType|string|false|none|The license type to use in OS adaptation.|
|machineType|string|false|none|The machine type to create the VM with.|
|machineTypeSeries|string|false|none|The machine type series to create the VM with.|
|metadata|object|false|none|The metadata key/value pairs to assign to the VM.|
|networkInterfaces|[[NetworkInterface](#schemanetworkinterface)]|false|none|List of NICs connected to this VM.|
|networkTags|[string]|false|none|A map of network tags to associate with the VM.|
|secureBoot|boolean|false|none|Defines whether the instance has Secure Boot enabled. This can be set to true only if the vm boot option is EFI.|
|serviceAccount|string|false|none|The service account to associate the VM with.|
|targetProject|string|false|none|The full path of the resource of type TargetProject which represents the Compute Engine project in which to create this VM.|
|vmName|string|false|none|The name of the VM to create.|
|zone|string|false|none|The zone in which to create the VM.|

#### Enumerated Values

|Property|Value|
|---|---|
|bootOption|COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED|
|bootOption|COMPUTE_ENGINE_BOOT_OPTION_EFI|
|bootOption|COMPUTE_ENGINE_BOOT_OPTION_BIOS|
|diskType|COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED|
|diskType|COMPUTE_ENGINE_DISK_TYPE_STANDARD|
|diskType|COMPUTE_ENGINE_DISK_TYPE_SSD|
|diskType|COMPUTE_ENGINE_DISK_TYPE_BALANCED|
|licenseType|COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT|
|licenseType|COMPUTE_ENGINE_LICENSE_TYPE_PAYG|
|licenseType|COMPUTE_ENGINE_LICENSE_TYPE_BYOL|

<h2 id="tocS_ComputeEngineTargetDetails">ComputeEngineTargetDetails</h2>
<!-- backwards compatibility -->
<a id="schemacomputeenginetargetdetails"></a>
<a id="schema_ComputeEngineTargetDetails"></a>
<a id="tocScomputeenginetargetdetails"></a>
<a id="tocscomputeenginetargetdetails"></a>

```json
{
  "additionalLicenses": [
    "string"
  ],
  "appliedLicense": {
    "osLicense": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "bootOption": "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
  "computeScheduling": {
    "automaticRestart": true,
    "minNodeCpus": 0,
    "nodeAffinities": [
      {
        "key": "string",
        "operator": "OPERATOR_UNSPECIFIED",
        "values": [
          "string"
        ]
      }
    ],
    "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
    "restartType": "RESTART_TYPE_UNSPECIFIED"
  },
  "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
  "hostname": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
  "machineType": "string",
  "machineTypeSeries": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "networkInterfaces": [
    {
      "externalIp": "string",
      "internalIp": "string",
      "network": "string",
      "subnetwork": "string"
    }
  ],
  "networkTags": [
    "string"
  ],
  "project": "string",
  "secureBoot": true,
  "serviceAccount": "string",
  "vmName": "string",
  "zone": "string"
}
```

ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalLicenses|[string]|false|none|Additional licenses to assign to the VM.|
|appliedLicense|[AppliedLicense](#schemaappliedlicense)|false|none|The OS license returned from the adaptation module report.|
|bootOption|string|false|none|The VM Boot Option, as set in the source vm.|
|computeScheduling|[ComputeScheduling](#schemacomputescheduling)|false|none|Compute instance scheduling information (if empty default is used).|
|diskType|string|false|none|The disk type to use in the VM.|
|hostname|string|false|none|The hostname to assign to the VM.|
|labels|object|false|none|A map of labels to associate with the VM.|
|licenseType|string|false|none|The license type to use in OS adaptation.|
|machineType|string|false|none|The machine type to create the VM with.|
|machineTypeSeries|string|false|none|The machine type series to create the VM with.|
|metadata|object|false|none|The metadata key/value pairs to assign to the VM.|
|networkInterfaces|[[NetworkInterface](#schemanetworkinterface)]|false|none|List of NICs connected to this VM.|
|networkTags|[string]|false|none|A map of network tags to associate with the VM.|
|project|string|false|none|The Google Cloud target project ID or project name.|
|secureBoot|boolean|false|none|Defines whether the instance has Secure Boot enabled. This can be set to true only if the vm boot option is EFI.|
|serviceAccount|string|false|none|The service account to associate the VM with.|
|vmName|string|false|none|The name of the VM to create.|
|zone|string|false|none|The zone in which to create the VM.|

#### Enumerated Values

|Property|Value|
|---|---|
|bootOption|COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED|
|bootOption|COMPUTE_ENGINE_BOOT_OPTION_EFI|
|bootOption|COMPUTE_ENGINE_BOOT_OPTION_BIOS|
|diskType|COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED|
|diskType|COMPUTE_ENGINE_DISK_TYPE_STANDARD|
|diskType|COMPUTE_ENGINE_DISK_TYPE_SSD|
|diskType|COMPUTE_ENGINE_DISK_TYPE_BALANCED|
|licenseType|COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT|
|licenseType|COMPUTE_ENGINE_LICENSE_TYPE_PAYG|
|licenseType|COMPUTE_ENGINE_LICENSE_TYPE_BYOL|

<h2 id="tocS_ComputeScheduling">ComputeScheduling</h2>
<!-- backwards compatibility -->
<a id="schemacomputescheduling"></a>
<a id="schema_ComputeScheduling"></a>
<a id="tocScomputescheduling"></a>
<a id="tocscomputescheduling"></a>

```json
{
  "automaticRestart": true,
  "minNodeCpus": 0,
  "nodeAffinities": [
    {
      "key": "string",
      "operator": "OPERATOR_UNSPECIFIED",
      "values": [
        "string"
      ]
    }
  ],
  "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
  "restartType": "RESTART_TYPE_UNSPECIFIED"
}
```

Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|automaticRestart|boolean|false|none|none|
|minNodeCpus|integer(int32)|false|none|The minimum number of virtual CPUs this instance will consume when running on a sole-tenant node. Ignored if no node_affinites are configured.|
|nodeAffinities|[[SchedulingNodeAffinity](#schemaschedulingnodeaffinity)]|false|none|A set of node affinity and anti-affinity configurations for sole tenant nodes.|
|onHostMaintenance|string|false|none|How the instance should behave when the host machine undergoes maintenance that may temporarily impact instance performance.|
|restartType|string|false|none|Whether the Instance should be automatically restarted whenever it is terminated by Compute Engine (not terminated by user). This configuration is identical to `automaticRestart` field in Compute Engine create instance under scheduling. It was changed to an enum (instead of a boolean) to match the default value in Compute Engine which is automatic restart.|

#### Enumerated Values

|Property|Value|
|---|---|
|onHostMaintenance|ON_HOST_MAINTENANCE_UNSPECIFIED|
|onHostMaintenance|TERMINATE|
|onHostMaintenance|MIGRATE|
|restartType|RESTART_TYPE_UNSPECIFIED|
|restartType|AUTOMATIC_RESTART|
|restartType|NO_AUTOMATIC_RESTART|

<h2 id="tocS_CutoverForecast">CutoverForecast</h2>
<!-- backwards compatibility -->
<a id="schemacutoverforecast"></a>
<a id="schema_CutoverForecast"></a>
<a id="tocScutoverforecast"></a>
<a id="tocscutoverforecast"></a>

```json
{
  "estimatedCutoverJobDuration": "string"
}
```

CutoverForecast holds information about future CutoverJobs of a MigratingVm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimatedCutoverJobDuration|string(google-duration)|false|read-only|Output only. Estimation of the CutoverJob duration.|

<h2 id="tocS_CutoverJob">CutoverJob</h2>
<!-- backwards compatibility -->
<a id="schemacutoverjob"></a>
<a id="schema_CutoverJob"></a>
<a id="tocScutoverjob"></a>
<a id="tocscutoverjob"></a>

```json
{
  "computeEngineTargetDetails": {
    "additionalLicenses": [
      "string"
    ],
    "appliedLicense": {
      "osLicense": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "bootOption": "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
    "computeScheduling": {
      "automaticRestart": true,
      "minNodeCpus": 0,
      "nodeAffinities": [
        {
          "key": "string",
          "operator": "OPERATOR_UNSPECIFIED",
          "values": [
            "string"
          ]
        }
      ],
      "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
      "restartType": "RESTART_TYPE_UNSPECIFIED"
    },
    "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
    "hostname": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
    "machineType": "string",
    "machineTypeSeries": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "networkInterfaces": [
      {
        "externalIp": "string",
        "internalIp": "string",
        "network": "string",
        "subnetwork": "string"
      }
    ],
    "networkTags": [
      "string"
    ],
    "project": "string",
    "secureBoot": true,
    "serviceAccount": "string",
    "vmName": "string",
    "zone": "string"
  },
  "computeEngineVmDetails": {
    "appliedLicense": {
      "osLicense": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "bootOption": "BOOT_OPTION_UNSPECIFIED",
    "computeScheduling": {
      "automaticRestart": true,
      "minNodeCpus": 0,
      "nodeAffinities": [
        {
          "key": "string",
          "operator": "OPERATOR_UNSPECIFIED",
          "values": [
            "string"
          ]
        }
      ],
      "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
      "restartType": "RESTART_TYPE_UNSPECIFIED"
    },
    "diskType": "DISK_TYPE_UNSPECIFIED",
    "externalIp": "string",
    "internalIp": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "licenseType": "DEFAULT",
    "machineType": "string",
    "machineTypeSeries": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "network": "string",
    "networkInterfaces": [
      {
        "externalIp": "string",
        "internalIp": "string",
        "network": "string",
        "subnetwork": "string"
      }
    ],
    "networkTags": [
      "string"
    ],
    "project": "string",
    "secureBoot": true,
    "serviceAccount": "string",
    "subnetwork": "string",
    "targetProject": "string",
    "zone": "string"
  },
  "createTime": "string",
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
  "name": "string",
  "progress": 0,
  "progressPercent": 0,
  "state": "STATE_UNSPECIFIED",
  "stateMessage": "string",
  "stateTime": "string",
  "steps": [
    {
      "endTime": "string",
      "finalSync": {
        "cycleNumber": 0,
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
        "name": "string",
        "progress": 0,
        "progressPercent": 0,
        "startTime": "string",
        "state": "STATE_UNSPECIFIED",
        "steps": [
          {
            "endTime": "string",
            "initializingReplication": {},
            "postProcessing": {},
            "replicating": {
              "lastThirtyMinutesAverageBytesPerSecond": "string",
              "lastTwoMinutesAverageBytesPerSecond": "string",
              "replicatedBytes": "string",
              "totalBytes": "string"
            },
            "startTime": "string"
          }
        ],
        "totalPauseDuration": "string",
        "warnings": [
          {
            "actionItem": {
              "locale": "string",
              "message": "string"
            },
            "code": "WARNING_CODE_UNSPECIFIED",
            "helpLinks": [
              {
                "description": "string",
                "url": "string"
              }
            ],
            "warningMessage": {
              "locale": "string",
              "message": "string"
            },
            "warningTime": "string"
          }
        ]
      },
      "instantiatingMigratedVm": {},
      "preparingVmDisks": {},
      "previousReplicationCycle": {
        "cycleNumber": 0,
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
        "name": "string",
        "progress": 0,
        "progressPercent": 0,
        "startTime": "string",
        "state": "STATE_UNSPECIFIED",
        "steps": [
          {
            "endTime": "string",
            "initializingReplication": {},
            "postProcessing": {},
            "replicating": {
              "lastThirtyMinutesAverageBytesPerSecond": "string",
              "lastTwoMinutesAverageBytesPerSecond": "string",
              "replicatedBytes": "string",
              "totalBytes": "string"
            },
            "startTime": "string"
          }
        ],
        "totalPauseDuration": "string",
        "warnings": [
          {
            "actionItem": {
              "locale": "string",
              "message": "string"
            },
            "code": "WARNING_CODE_UNSPECIFIED",
            "helpLinks": [
              {
                "description": "string",
                "url": "string"
              }
            ],
            "warningMessage": {
              "locale": "string",
              "message": "string"
            },
            "warningTime": "string"
          }
        ]
      },
      "shuttingDownSourceVm": {},
      "startTime": "string"
    }
  ],
  "targetDetails": {
    "appliedLicense": {
      "osLicense": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "bootOption": "BOOT_OPTION_UNSPECIFIED",
    "computeScheduling": {
      "automaticRestart": true,
      "minNodeCpus": 0,
      "nodeAffinities": [
        {
          "key": "string",
          "operator": "OPERATOR_UNSPECIFIED",
          "values": [
            "string"
          ]
        }
      ],
      "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
      "restartType": "RESTART_TYPE_UNSPECIFIED"
    },
    "diskType": "DISK_TYPE_UNSPECIFIED",
    "externalIp": "string",
    "internalIp": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "licenseType": "DEFAULT",
    "machineType": "string",
    "machineTypeSeries": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "network": "string",
    "networkInterfaces": [
      {
        "externalIp": "string",
        "internalIp": "string",
        "network": "string",
        "subnetwork": "string"
      }
    ],
    "networkTags": [
      "string"
    ],
    "project": "string",
    "secureBoot": true,
    "serviceAccount": "string",
    "subnetwork": "string",
    "targetProject": "string",
    "zone": "string"
  }
}
```

CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computeEngineTargetDetails|[ComputeEngineTargetDetails](#schemacomputeenginetargetdetails)|false|none|Output only. Details of the target VM in Compute Engine.|
|computeEngineVmDetails|[TargetVMDetails](#schematargetvmdetails)|false|none|Output only. Details of the VM in Compute Engine. Deprecated: Use compute_engine_target_details instead.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the cutover job was created (as an API call, not when it was actually created in the target).|
|endTime|string(google-datetime)|false|read-only|Output only. The time the cutover job had finished.|
|error|[Status](#schemastatus)|false|none|Output only. Provides details for the errors that led to the Cutover Job's state.|
|name|string|false|read-only|Output only. The name of the cutover job.|
|progress|integer(int32)|false|read-only|Output only. The current progress in percentage of the cutover job.|
|progressPercent|integer(int32)|false|read-only|Output only. The current progress in percentage of the cutover job.|
|state|string|false|read-only|Output only. State of the cutover job.|
|stateMessage|string|false|read-only|Output only. A message providing possible extra details about the current state.|
|stateTime|string(google-datetime)|false|read-only|Output only. The time the state was last updated.|
|steps|[[CutoverStep](#schemacutoverstep)]|false|read-only|Output only. The cutover steps list representing its progress.|
|targetDetails|[TargetVMDetails](#schematargetvmdetails)|false|none|Output only. Details of the VM to create as the target of this cutover job. Deprecated: Use compute_engine_target_details instead.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|FAILED|
|state|SUCCEEDED|
|state|CANCELLED|
|state|CANCELLING|
|state|ACTIVE|
|state|ADAPTING_OS|

<h2 id="tocS_CutoverStep">CutoverStep</h2>
<!-- backwards compatibility -->
<a id="schemacutoverstep"></a>
<a id="schema_CutoverStep"></a>
<a id="tocScutoverstep"></a>
<a id="tocscutoverstep"></a>

```json
{
  "endTime": "string",
  "finalSync": {
    "cycleNumber": 0,
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
    "name": "string",
    "progress": 0,
    "progressPercent": 0,
    "startTime": "string",
    "state": "STATE_UNSPECIFIED",
    "steps": [
      {
        "endTime": "string",
        "initializingReplication": {},
        "postProcessing": {},
        "replicating": {
          "lastThirtyMinutesAverageBytesPerSecond": "string",
          "lastTwoMinutesAverageBytesPerSecond": "string",
          "replicatedBytes": "string",
          "totalBytes": "string"
        },
        "startTime": "string"
      }
    ],
    "totalPauseDuration": "string",
    "warnings": [
      {
        "actionItem": {
          "locale": "string",
          "message": "string"
        },
        "code": "WARNING_CODE_UNSPECIFIED",
        "helpLinks": [
          {
            "description": "string",
            "url": "string"
          }
        ],
        "warningMessage": {
          "locale": "string",
          "message": "string"
        },
        "warningTime": "string"
      }
    ]
  },
  "instantiatingMigratedVm": {},
  "preparingVmDisks": {},
  "previousReplicationCycle": {
    "cycleNumber": 0,
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
    "name": "string",
    "progress": 0,
    "progressPercent": 0,
    "startTime": "string",
    "state": "STATE_UNSPECIFIED",
    "steps": [
      {
        "endTime": "string",
        "initializingReplication": {},
        "postProcessing": {},
        "replicating": {
          "lastThirtyMinutesAverageBytesPerSecond": "string",
          "lastTwoMinutesAverageBytesPerSecond": "string",
          "replicatedBytes": "string",
          "totalBytes": "string"
        },
        "startTime": "string"
      }
    ],
    "totalPauseDuration": "string",
    "warnings": [
      {
        "actionItem": {
          "locale": "string",
          "message": "string"
        },
        "code": "WARNING_CODE_UNSPECIFIED",
        "helpLinks": [
          {
            "description": "string",
            "url": "string"
          }
        ],
        "warningMessage": {
          "locale": "string",
          "message": "string"
        },
        "warningTime": "string"
      }
    ]
  },
  "shuttingDownSourceVm": {},
  "startTime": "string"
}
```

CutoverStep holds information about the cutover step progress.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The time the step has ended.|
|finalSync|[ReplicationCycle](#schemareplicationcycle)|false|none|Final sync step.|
|instantiatingMigratedVm|[InstantiatingMigratedVMStep](#schemainstantiatingmigratedvmstep)|false|none|Instantiating migrated VM step.|
|preparingVmDisks|[PreparingVMDisksStep](#schemapreparingvmdisksstep)|false|none|Preparing VM disks step.|
|previousReplicationCycle|[ReplicationCycle](#schemareplicationcycle)|false|none|A replication cycle prior cutover step.|
|shuttingDownSourceVm|[ShuttingDownSourceVMStep](#schemashuttingdownsourcevmstep)|false|none|Shutting down VM step.|
|startTime|string(google-datetime)|false|none|The time the step has started.|

<h2 id="tocS_CycleStep">CycleStep</h2>
<!-- backwards compatibility -->
<a id="schemacyclestep"></a>
<a id="schema_CycleStep"></a>
<a id="tocScyclestep"></a>
<a id="tocscyclestep"></a>

```json
{
  "endTime": "string",
  "initializingReplication": {},
  "postProcessing": {},
  "replicating": {
    "lastThirtyMinutesAverageBytesPerSecond": "string",
    "lastTwoMinutesAverageBytesPerSecond": "string",
    "replicatedBytes": "string",
    "totalBytes": "string"
  },
  "startTime": "string"
}
```

CycleStep holds information about a step progress.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The time the cycle step has ended.|
|initializingReplication|[InitializingReplicationStep](#schemainitializingreplicationstep)|false|none|Initializing replication step.|
|postProcessing|[PostProcessingStep](#schemapostprocessingstep)|false|none|Post processing step.|
|replicating|[ReplicatingStep](#schemareplicatingstep)|false|none|Replicating step.|
|startTime|string(google-datetime)|false|none|The time the cycle step has started.|

<h2 id="tocS_DatacenterConnector">DatacenterConnector</h2>
<!-- backwards compatibility -->
<a id="schemadatacenterconnector"></a>
<a id="schema_DatacenterConnector"></a>
<a id="tocSdatacenterconnector"></a>
<a id="tocsdatacenterconnector"></a>

```json
{
  "applianceInfrastructureVersion": "string",
  "applianceSoftwareVersion": "string",
  "availableVersions": {
    "inPlaceUpdate": {
      "critical": true,
      "releaseNotesUri": "string",
      "uri": "string",
      "version": "string"
    },
    "newDeployableAppliance": {
      "critical": true,
      "releaseNotesUri": "string",
      "uri": "string",
      "version": "string"
    }
  },
  "bucket": "string",
  "createTime": "string",
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
  "name": "string",
  "registrationId": "string",
  "serviceAccount": "string",
  "state": "STATE_UNSPECIFIED",
  "stateTime": "string",
  "updateTime": "string",
  "upgradeStatus": {
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
    "previousVersion": "string",
    "startTime": "string",
    "state": "STATE_UNSPECIFIED",
    "version": "string"
  },
  "version": "string"
}
```

DatacenterConnector message describes a connector between the Source and Google Cloud, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to Google Cloud and support vm migration data transfer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applianceInfrastructureVersion|string|false|read-only|Output only. Appliance OVA version. This is the OVA which is manually installed by the user and contains the infrastructure for the automatically updatable components on the appliance.|
|applianceSoftwareVersion|string|false|read-only|Output only. Appliance last installed update bundle version. This is the version of the automatically updatable components on the appliance.|
|availableVersions|[AvailableUpdates](#schemaavailableupdates)|false|none|Output only. The available versions for updating this appliance.|
|bucket|string|false|read-only|Output only. The communication channel between the datacenter connector and Google Cloud.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the connector was created (as an API call, not when it was actually installed).|
|error|[Status](#schemastatus)|false|none|Output only. Provides details on the state of the Datacenter Connector in case of an error.|
|name|string|false|read-only|Output only. The connector's name.|
|registrationId|string|false|none|Immutable. A unique key for this connector. This key is internal to the OVA connector and is supplied with its creation during the registration process and can not be modified.|
|serviceAccount|string|false|none|The service account to use in the connector when communicating with the cloud.|
|state|string|false|read-only|Output only. State of the DatacenterConnector, as determined by the health checks.|
|stateTime|string(google-datetime)|false|read-only|Output only. The time the state was last set.|
|updateTime|string(google-datetime)|false|read-only|Output only. The last time the connector was updated with an API call.|
|upgradeStatus|[UpgradeStatus](#schemaupgradestatus)|false|none|Output only. The status of the current / last upgradeAppliance operation.|
|version|string|false|none|The version running in the DatacenterConnector. This is supplied by the OVA connector during the registration process and can not be modified.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|OFFLINE|
|state|FAILED|
|state|ACTIVE|

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

<h2 id="tocS_FetchInventoryResponse">FetchInventoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemafetchinventoryresponse"></a>
<a id="schema_FetchInventoryResponse"></a>
<a id="tocSfetchinventoryresponse"></a>
<a id="tocsfetchinventoryresponse"></a>

```json
{
  "awsVms": {
    "details": [
      {
        "architecture": "VM_ARCHITECTURE_UNSPECIFIED",
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "committedStorageMb": "string",
        "cpuCount": 0,
        "diskCount": 0,
        "displayName": "string",
        "instanceType": "string",
        "memoryMb": 0,
        "osDescription": "string",
        "powerState": "POWER_STATE_UNSPECIFIED",
        "securityGroups": [
          {
            "id": "string",
            "name": "string"
          }
        ],
        "sourceDescription": "string",
        "sourceId": "string",
        "tags": {
          "property1": "string",
          "property2": "string"
        },
        "virtualizationType": "VM_VIRTUALIZATION_TYPE_UNSPECIFIED",
        "vmId": "string",
        "vpcId": "string",
        "zone": "string"
      }
    ]
  },
  "nextPageToken": "string",
  "updateTime": "string",
  "vmwareVms": {
    "details": [
      {
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "committedStorage": "string",
        "committedStorageMb": "string",
        "cpuCount": 0,
        "datacenterDescription": "string",
        "datacenterId": "string",
        "diskCount": 0,
        "displayName": "string",
        "guestDescription": "string",
        "memoryMb": 0,
        "powerState": "POWER_STATE_UNSPECIFIED",
        "uuid": "string",
        "vmId": "string"
      }
    ]
  }
}
```

Response message for fetchInventory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsVms|[AwsVmsDetails](#schemaawsvmsdetails)|false|none|The description of the VMs in a Source of type AWS.|
|nextPageToken|string|false|read-only|Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the source was last queried (if the result is from the cache).|
|vmwareVms|[VmwareVmsDetails](#schemavmwarevmsdetails)|false|none|The description of the VMs in a Source of type Vmware.|

<h2 id="tocS_FinalizeMigrationRequest">FinalizeMigrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemafinalizemigrationrequest"></a>
<a id="schema_FinalizeMigrationRequest"></a>
<a id="tocSfinalizemigrationrequest"></a>
<a id="tocsfinalizemigrationrequest"></a>

```json
{}
```

Request message for 'FinalizeMigration' request.

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "name": "string",
  "updateTime": "string"
}
```

Describes message for 'Group' resource. The Group is a collections of several MigratingVms.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The create time timestamp.|
|description|string|false|none|User-provided description of the group.|
|displayName|string|false|none|Display name is a user defined name for this group which can be updated.|
|name|string|false|read-only|Output only. The Group name.|
|updateTime|string(google-datetime)|false|read-only|Output only. The update time timestamp.|

<h2 id="tocS_InitializingReplicationStep">InitializingReplicationStep</h2>
<!-- backwards compatibility -->
<a id="schemainitializingreplicationstep"></a>
<a id="schema_InitializingReplicationStep"></a>
<a id="tocSinitializingreplicationstep"></a>
<a id="tocsinitializingreplicationstep"></a>

```json
{}
```

InitializingReplicationStep contains specific step details.

<h2 id="tocS_InstantiatingMigratedVMStep">InstantiatingMigratedVMStep</h2>
<!-- backwards compatibility -->
<a id="schemainstantiatingmigratedvmstep"></a>
<a id="schema_InstantiatingMigratedVMStep"></a>
<a id="tocSinstantiatingmigratedvmstep"></a>
<a id="tocsinstantiatingmigratedvmstep"></a>

```json
{}
```

InstantiatingMigratedVMStep contains specific step details.

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "description": "string",
  "url": "string"
}
```

Describes a URL link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Describes what the link offers.|
|url|string|false|none|The URL of the link.|

<h2 id="tocS_ListCloneJobsResponse">ListCloneJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclonejobsresponse"></a>
<a id="schema_ListCloneJobsResponse"></a>
<a id="tocSlistclonejobsresponse"></a>
<a id="tocslistclonejobsresponse"></a>

```json
{
  "cloneJobs": [
    {
      "computeEngineTargetDetails": {
        "additionalLicenses": [
          "string"
        ],
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
        "hostname": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "vmName": "string",
        "zone": "string"
      },
      "computeEngineVmDetails": {
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "DISK_TYPE_UNSPECIFIED",
        "externalIp": "string",
        "internalIp": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "network": "string",
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "subnetwork": "string",
        "targetProject": "string",
        "zone": "string"
      },
      "createTime": "string",
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
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "stateTime": "string",
      "steps": [
        {
          "adaptingOs": {},
          "endTime": "string",
          "instantiatingMigratedVm": {},
          "preparingVmDisks": {},
          "startTime": "string"
        }
      ],
      "targetDetails": {
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "DISK_TYPE_UNSPECIFIED",
        "externalIp": "string",
        "internalIp": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "network": "string",
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "subnetwork": "string",
        "targetProject": "string",
        "zone": "string"
      }
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for 'ListCloneJobs' request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloneJobs|[[CloneJob](#schemaclonejob)]|false|read-only|Output only. The list of clone jobs response.|
|nextPageToken|string|false|read-only|Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|unreachable|[string]|false|read-only|Output only. Locations that could not be reached.|

<h2 id="tocS_ListCutoverJobsResponse">ListCutoverJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcutoverjobsresponse"></a>
<a id="schema_ListCutoverJobsResponse"></a>
<a id="tocSlistcutoverjobsresponse"></a>
<a id="tocslistcutoverjobsresponse"></a>

```json
{
  "cutoverJobs": [
    {
      "computeEngineTargetDetails": {
        "additionalLicenses": [
          "string"
        ],
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
        "hostname": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "vmName": "string",
        "zone": "string"
      },
      "computeEngineVmDetails": {
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "DISK_TYPE_UNSPECIFIED",
        "externalIp": "string",
        "internalIp": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "network": "string",
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "subnetwork": "string",
        "targetProject": "string",
        "zone": "string"
      },
      "createTime": "string",
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
      "name": "string",
      "progress": 0,
      "progressPercent": 0,
      "state": "STATE_UNSPECIFIED",
      "stateMessage": "string",
      "stateTime": "string",
      "steps": [
        {
          "endTime": "string",
          "finalSync": {
            "cycleNumber": 0,
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
            "name": "string",
            "progress": 0,
            "progressPercent": 0,
            "startTime": "string",
            "state": "STATE_UNSPECIFIED",
            "steps": [
              {
                "endTime": "string",
                "initializingReplication": {},
                "postProcessing": {},
                "replicating": {
                  "lastThirtyMinutesAverageBytesPerSecond": "string",
                  "lastTwoMinutesAverageBytesPerSecond": "string",
                  "replicatedBytes": "string",
                  "totalBytes": "string"
                },
                "startTime": "string"
              }
            ],
            "totalPauseDuration": "string",
            "warnings": [
              {
                "actionItem": {
                  "locale": "string",
                  "message": "string"
                },
                "code": "WARNING_CODE_UNSPECIFIED",
                "helpLinks": [
                  {
                    "description": "string",
                    "url": "string"
                  }
                ],
                "warningMessage": {
                  "locale": "string",
                  "message": "string"
                },
                "warningTime": "string"
              }
            ]
          },
          "instantiatingMigratedVm": {},
          "preparingVmDisks": {},
          "previousReplicationCycle": {
            "cycleNumber": 0,
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
            "name": "string",
            "progress": 0,
            "progressPercent": 0,
            "startTime": "string",
            "state": "STATE_UNSPECIFIED",
            "steps": [
              {
                "endTime": "string",
                "initializingReplication": {},
                "postProcessing": {},
                "replicating": {
                  "lastThirtyMinutesAverageBytesPerSecond": "string",
                  "lastTwoMinutesAverageBytesPerSecond": "string",
                  "replicatedBytes": "string",
                  "totalBytes": "string"
                },
                "startTime": "string"
              }
            ],
            "totalPauseDuration": "string",
            "warnings": [
              {
                "actionItem": {
                  "locale": "string",
                  "message": "string"
                },
                "code": "WARNING_CODE_UNSPECIFIED",
                "helpLinks": [
                  {
                    "description": "string",
                    "url": "string"
                  }
                ],
                "warningMessage": {
                  "locale": "string",
                  "message": "string"
                },
                "warningTime": "string"
              }
            ]
          },
          "shuttingDownSourceVm": {},
          "startTime": "string"
        }
      ],
      "targetDetails": {
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "DISK_TYPE_UNSPECIFIED",
        "externalIp": "string",
        "internalIp": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "network": "string",
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "subnetwork": "string",
        "targetProject": "string",
        "zone": "string"
      }
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for 'ListCutoverJobs' request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cutoverJobs|[[CutoverJob](#schemacutoverjob)]|false|read-only|Output only. The list of cutover jobs response.|
|nextPageToken|string|false|read-only|Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|unreachable|[string]|false|read-only|Output only. Locations that could not be reached.|

<h2 id="tocS_ListDatacenterConnectorsResponse">ListDatacenterConnectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatacenterconnectorsresponse"></a>
<a id="schema_ListDatacenterConnectorsResponse"></a>
<a id="tocSlistdatacenterconnectorsresponse"></a>
<a id="tocslistdatacenterconnectorsresponse"></a>

```json
{
  "datacenterConnectors": [
    {
      "applianceInfrastructureVersion": "string",
      "applianceSoftwareVersion": "string",
      "availableVersions": {
        "inPlaceUpdate": {
          "critical": true,
          "releaseNotesUri": "string",
          "uri": "string",
          "version": "string"
        },
        "newDeployableAppliance": {
          "critical": true,
          "releaseNotesUri": "string",
          "uri": "string",
          "version": "string"
        }
      },
      "bucket": "string",
      "createTime": "string",
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
      "name": "string",
      "registrationId": "string",
      "serviceAccount": "string",
      "state": "STATE_UNSPECIFIED",
      "stateTime": "string",
      "updateTime": "string",
      "upgradeStatus": {
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
        "previousVersion": "string",
        "startTime": "string",
        "state": "STATE_UNSPECIFIED",
        "version": "string"
      },
      "version": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for 'ListDatacenterConnectors' request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datacenterConnectors|[[DatacenterConnector](#schemadatacenterconnector)]|false|read-only|Output only. The list of sources response.|
|nextPageToken|string|false|read-only|Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|unreachable|[string]|false|read-only|Output only. Locations that could not be reached.|

<h2 id="tocS_ListGroupsResponse">ListGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupsresponse"></a>
<a id="schema_ListGroupsResponse"></a>
<a id="tocSlistgroupsresponse"></a>
<a id="tocslistgroupsresponse"></a>

```json
{
  "groups": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "name": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for 'ListGroups' request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[[Group](#schemagroup)]|false|read-only|Output only. The list of groups response.|
|nextPageToken|string|false|read-only|Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|unreachable|[string]|false|read-only|Output only. Locations that could not be reached.|

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

<h2 id="tocS_ListMigratingVmsResponse">ListMigratingVmsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmigratingvmsresponse"></a>
<a id="schema_ListMigratingVmsResponse"></a>
<a id="tocSlistmigratingvmsresponse"></a>
<a id="tocslistmigratingvmsresponse"></a>

```json
{
  "migratingVms": [
    {
      "awsSourceVmDetails": {
        "committedStorageBytes": "string",
        "firmware": "FIRMWARE_UNSPECIFIED"
      },
      "computeEngineTargetDefaults": {
        "additionalLicenses": [
          "string"
        ],
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
        "hostname": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "secureBoot": true,
        "serviceAccount": "string",
        "targetProject": "string",
        "vmName": "string",
        "zone": "string"
      },
      "computeEngineVmDefaults": {
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "DISK_TYPE_UNSPECIFIED",
        "externalIp": "string",
        "internalIp": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "network": "string",
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "subnetwork": "string",
        "targetProject": "string",
        "zone": "string"
      },
      "createTime": "string",
      "currentSyncInfo": {
        "cycleNumber": 0,
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
        "name": "string",
        "progress": 0,
        "progressPercent": 0,
        "startTime": "string",
        "state": "STATE_UNSPECIFIED",
        "steps": [
          {
            "endTime": "string",
            "initializingReplication": {},
            "postProcessing": {},
            "replicating": {
              "lastThirtyMinutesAverageBytesPerSecond": "string",
              "lastTwoMinutesAverageBytesPerSecond": "string",
              "replicatedBytes": "string",
              "totalBytes": "string"
            },
            "startTime": "string"
          }
        ],
        "totalPauseDuration": "string",
        "warnings": [
          {
            "actionItem": {
              "locale": "string",
              "message": "string"
            },
            "code": "WARNING_CODE_UNSPECIFIED",
            "helpLinks": [
              {
                "description": "string",
                "url": "string"
              }
            ],
            "warningMessage": {
              "locale": "string",
              "message": "string"
            },
            "warningTime": "string"
          }
        ]
      },
      "cutoverForecast": {
        "estimatedCutoverJobDuration": "string"
      },
      "description": "string",
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
      "group": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "lastReplicationCycle": {
        "cycleNumber": 0,
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
        "name": "string",
        "progress": 0,
        "progressPercent": 0,
        "startTime": "string",
        "state": "STATE_UNSPECIFIED",
        "steps": [
          {
            "endTime": "string",
            "initializingReplication": {},
            "postProcessing": {},
            "replicating": {
              "lastThirtyMinutesAverageBytesPerSecond": "string",
              "lastTwoMinutesAverageBytesPerSecond": "string",
              "replicatedBytes": "string",
              "totalBytes": "string"
            },
            "startTime": "string"
          }
        ],
        "totalPauseDuration": "string",
        "warnings": [
          {
            "actionItem": {
              "locale": "string",
              "message": "string"
            },
            "code": "WARNING_CODE_UNSPECIFIED",
            "helpLinks": [
              {
                "description": "string",
                "url": "string"
              }
            ],
            "warningMessage": {
              "locale": "string",
              "message": "string"
            },
            "warningTime": "string"
          }
        ]
      },
      "lastSync": {
        "lastSyncTime": "string"
      },
      "name": "string",
      "policy": {
        "idleDuration": "string",
        "skipOsAdaptation": true
      },
      "recentCloneJobs": [
        {
          "computeEngineTargetDetails": {
            "additionalLicenses": [
              "string"
            ],
            "appliedLicense": {
              "osLicense": "string",
              "type": "TYPE_UNSPECIFIED"
            },
            "bootOption": "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
            "computeScheduling": {
              "automaticRestart": true,
              "minNodeCpus": 0,
              "nodeAffinities": [
                {
                  "key": "string",
                  "operator": "OPERATOR_UNSPECIFIED",
                  "values": [
                    "string"
                  ]
                }
              ],
              "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
              "restartType": "RESTART_TYPE_UNSPECIFIED"
            },
            "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
            "hostname": "string",
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
            "machineType": "string",
            "machineTypeSeries": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "networkInterfaces": [
              {
                "externalIp": "string",
                "internalIp": "string",
                "network": "string",
                "subnetwork": "string"
              }
            ],
            "networkTags": [
              "string"
            ],
            "project": "string",
            "secureBoot": true,
            "serviceAccount": "string",
            "vmName": "string",
            "zone": "string"
          },
          "computeEngineVmDetails": {
            "appliedLicense": {
              "osLicense": "string",
              "type": "TYPE_UNSPECIFIED"
            },
            "bootOption": "BOOT_OPTION_UNSPECIFIED",
            "computeScheduling": {
              "automaticRestart": true,
              "minNodeCpus": 0,
              "nodeAffinities": [
                {
                  "key": "string",
                  "operator": "OPERATOR_UNSPECIFIED",
                  "values": [
                    "string"
                  ]
                }
              ],
              "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
              "restartType": "RESTART_TYPE_UNSPECIFIED"
            },
            "diskType": "DISK_TYPE_UNSPECIFIED",
            "externalIp": "string",
            "internalIp": "string",
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "licenseType": "DEFAULT",
            "machineType": "string",
            "machineTypeSeries": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string",
            "network": "string",
            "networkInterfaces": [
              {
                "externalIp": "string",
                "internalIp": "string",
                "network": "string",
                "subnetwork": "string"
              }
            ],
            "networkTags": [
              "string"
            ],
            "project": "string",
            "secureBoot": true,
            "serviceAccount": "string",
            "subnetwork": "string",
            "targetProject": "string",
            "zone": "string"
          },
          "createTime": "string",
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
          "name": "string",
          "state": "STATE_UNSPECIFIED",
          "stateTime": "string",
          "steps": [
            {
              "adaptingOs": {},
              "endTime": "string",
              "instantiatingMigratedVm": {},
              "preparingVmDisks": {},
              "startTime": "string"
            }
          ],
          "targetDetails": {
            "appliedLicense": {
              "osLicense": "string",
              "type": "TYPE_UNSPECIFIED"
            },
            "bootOption": "BOOT_OPTION_UNSPECIFIED",
            "computeScheduling": {
              "automaticRestart": true,
              "minNodeCpus": 0,
              "nodeAffinities": [
                {
                  "key": "string",
                  "operator": "OPERATOR_UNSPECIFIED",
                  "values": [
                    "string"
                  ]
                }
              ],
              "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
              "restartType": "RESTART_TYPE_UNSPECIFIED"
            },
            "diskType": "DISK_TYPE_UNSPECIFIED",
            "externalIp": "string",
            "internalIp": "string",
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "licenseType": "DEFAULT",
            "machineType": "string",
            "machineTypeSeries": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string",
            "network": "string",
            "networkInterfaces": [
              {
                "externalIp": "string",
                "internalIp": "string",
                "network": "string",
                "subnetwork": "string"
              }
            ],
            "networkTags": [
              "string"
            ],
            "project": "string",
            "secureBoot": true,
            "serviceAccount": "string",
            "subnetwork": "string",
            "targetProject": "string",
            "zone": "string"
          }
        }
      ],
      "recentCutoverJobs": [
        {
          "computeEngineTargetDetails": {
            "additionalLicenses": [
              "string"
            ],
            "appliedLicense": {
              "osLicense": "string",
              "type": "TYPE_UNSPECIFIED"
            },
            "bootOption": "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
            "computeScheduling": {
              "automaticRestart": true,
              "minNodeCpus": 0,
              "nodeAffinities": [
                {
                  "key": "string",
                  "operator": "OPERATOR_UNSPECIFIED",
                  "values": [
                    "string"
                  ]
                }
              ],
              "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
              "restartType": "RESTART_TYPE_UNSPECIFIED"
            },
            "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
            "hostname": "string",
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
            "machineType": "string",
            "machineTypeSeries": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "networkInterfaces": [
              {
                "externalIp": "string",
                "internalIp": "string",
                "network": "string",
                "subnetwork": "string"
              }
            ],
            "networkTags": [
              "string"
            ],
            "project": "string",
            "secureBoot": true,
            "serviceAccount": "string",
            "vmName": "string",
            "zone": "string"
          },
          "computeEngineVmDetails": {
            "appliedLicense": {
              "osLicense": "string",
              "type": "TYPE_UNSPECIFIED"
            },
            "bootOption": "BOOT_OPTION_UNSPECIFIED",
            "computeScheduling": {
              "automaticRestart": true,
              "minNodeCpus": 0,
              "nodeAffinities": [
                {
                  "key": "string",
                  "operator": "OPERATOR_UNSPECIFIED",
                  "values": [
                    "string"
                  ]
                }
              ],
              "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
              "restartType": "RESTART_TYPE_UNSPECIFIED"
            },
            "diskType": "DISK_TYPE_UNSPECIFIED",
            "externalIp": "string",
            "internalIp": "string",
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "licenseType": "DEFAULT",
            "machineType": "string",
            "machineTypeSeries": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string",
            "network": "string",
            "networkInterfaces": [
              {
                "externalIp": "string",
                "internalIp": "string",
                "network": "string",
                "subnetwork": "string"
              }
            ],
            "networkTags": [
              "string"
            ],
            "project": "string",
            "secureBoot": true,
            "serviceAccount": "string",
            "subnetwork": "string",
            "targetProject": "string",
            "zone": "string"
          },
          "createTime": "string",
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
          "name": "string",
          "progress": 0,
          "progressPercent": 0,
          "state": "STATE_UNSPECIFIED",
          "stateMessage": "string",
          "stateTime": "string",
          "steps": [
            {
              "endTime": "string",
              "finalSync": {
                "cycleNumber": 0,
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
                "name": "string",
                "progress": 0,
                "progressPercent": 0,
                "startTime": "string",
                "state": "STATE_UNSPECIFIED",
                "steps": [
                  {
                    "endTime": "string",
                    "initializingReplication": {},
                    "postProcessing": {},
                    "replicating": {
                      "lastThirtyMinutesAverageBytesPerSecond": "string",
                      "lastTwoMinutesAverageBytesPerSecond": "string",
                      "replicatedBytes": "string",
                      "totalBytes": "string"
                    },
                    "startTime": "string"
                  }
                ],
                "totalPauseDuration": "string",
                "warnings": [
                  {
                    "actionItem": {
                      "locale": "string",
                      "message": "string"
                    },
                    "code": "WARNING_CODE_UNSPECIFIED",
                    "helpLinks": [
                      {
                        "description": "string",
                        "url": "string"
                      }
                    ],
                    "warningMessage": {
                      "locale": "string",
                      "message": "string"
                    },
                    "warningTime": "string"
                  }
                ]
              },
              "instantiatingMigratedVm": {},
              "preparingVmDisks": {},
              "previousReplicationCycle": {
                "cycleNumber": 0,
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
                "name": "string",
                "progress": 0,
                "progressPercent": 0,
                "startTime": "string",
                "state": "STATE_UNSPECIFIED",
                "steps": [
                  {
                    "endTime": "string",
                    "initializingReplication": {},
                    "postProcessing": {},
                    "replicating": {
                      "lastThirtyMinutesAverageBytesPerSecond": "string",
                      "lastTwoMinutesAverageBytesPerSecond": "string",
                      "replicatedBytes": "string",
                      "totalBytes": "string"
                    },
                    "startTime": "string"
                  }
                ],
                "totalPauseDuration": "string",
                "warnings": [
                  {
                    "actionItem": {
                      "locale": "string",
                      "message": "string"
                    },
                    "code": "WARNING_CODE_UNSPECIFIED",
                    "helpLinks": [
                      {
                        "description": "string",
                        "url": "string"
                      }
                    ],
                    "warningMessage": {
                      "locale": "string",
                      "message": "string"
                    },
                    "warningTime": "string"
                  }
                ]
              },
              "shuttingDownSourceVm": {},
              "startTime": "string"
            }
          ],
          "targetDetails": {
            "appliedLicense": {
              "osLicense": "string",
              "type": "TYPE_UNSPECIFIED"
            },
            "bootOption": "BOOT_OPTION_UNSPECIFIED",
            "computeScheduling": {
              "automaticRestart": true,
              "minNodeCpus": 0,
              "nodeAffinities": [
                {
                  "key": "string",
                  "operator": "OPERATOR_UNSPECIFIED",
                  "values": [
                    "string"
                  ]
                }
              ],
              "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
              "restartType": "RESTART_TYPE_UNSPECIFIED"
            },
            "diskType": "DISK_TYPE_UNSPECIFIED",
            "externalIp": "string",
            "internalIp": "string",
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "licenseType": "DEFAULT",
            "machineType": "string",
            "machineTypeSeries": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string",
            "network": "string",
            "networkInterfaces": [
              {
                "externalIp": "string",
                "internalIp": "string",
                "network": "string",
                "subnetwork": "string"
              }
            ],
            "networkTags": [
              "string"
            ],
            "project": "string",
            "secureBoot": true,
            "serviceAccount": "string",
            "subnetwork": "string",
            "targetProject": "string",
            "zone": "string"
          }
        }
      ],
      "sourceVmId": "string",
      "state": "STATE_UNSPECIFIED",
      "stateTime": "string",
      "targetDefaults": {
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "DISK_TYPE_UNSPECIFIED",
        "externalIp": "string",
        "internalIp": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "network": "string",
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "subnetwork": "string",
        "targetProject": "string",
        "zone": "string"
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for 'ListMigratingVms' request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|migratingVms|[[MigratingVm](#schemamigratingvm)]|false|read-only|Output only. The list of Migrating VMs response.|
|nextPageToken|string|false|read-only|Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|unreachable|[string]|false|read-only|Output only. Locations that could not be reached.|

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

<h2 id="tocS_ListReplicationCyclesResponse">ListReplicationCyclesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreplicationcyclesresponse"></a>
<a id="schema_ListReplicationCyclesResponse"></a>
<a id="tocSlistreplicationcyclesresponse"></a>
<a id="tocslistreplicationcyclesresponse"></a>

```json
{
  "nextPageToken": "string",
  "replicationCycles": [
    {
      "cycleNumber": 0,
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
      "name": "string",
      "progress": 0,
      "progressPercent": 0,
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "steps": [
        {
          "endTime": "string",
          "initializingReplication": {},
          "postProcessing": {},
          "replicating": {
            "lastThirtyMinutesAverageBytesPerSecond": "string",
            "lastTwoMinutesAverageBytesPerSecond": "string",
            "replicatedBytes": "string",
            "totalBytes": "string"
          },
          "startTime": "string"
        }
      ],
      "totalPauseDuration": "string",
      "warnings": [
        {
          "actionItem": {
            "locale": "string",
            "message": "string"
          },
          "code": "WARNING_CODE_UNSPECIFIED",
          "helpLinks": [
            {
              "description": "string",
              "url": "string"
            }
          ],
          "warningMessage": {
            "locale": "string",
            "message": "string"
          },
          "warningTime": "string"
        }
      ]
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response message for 'ListReplicationCycles' request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|read-only|Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|replicationCycles|[[ReplicationCycle](#schemareplicationcycle)]|false|read-only|Output only. The list of replication cycles response.|
|unreachable|[string]|false|read-only|Output only. Locations that could not be reached.|

<h2 id="tocS_ListSourcesResponse">ListSourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsourcesresponse"></a>
<a id="schema_ListSourcesResponse"></a>
<a id="tocSlistsourcesresponse"></a>
<a id="tocslistsourcesresponse"></a>

```json
{
  "nextPageToken": "string",
  "sources": [
    {
      "aws": {
        "accessKeyCreds": {
          "accessKeyId": "string",
          "secretAccessKey": "string",
          "sessionToken": "string"
        },
        "awsRegion": "string",
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
        "inventorySecurityGroupNames": [
          "string"
        ],
        "inventoryTagList": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "migrationResourcesUserTags": {
          "property1": "string",
          "property2": "string"
        },
        "publicIp": "string",
        "state": "STATE_UNSPECIFIED"
      },
      "createTime": "string",
      "description": "string",
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
      "updateTime": "string",
      "vmware": {
        "password": "string",
        "thumbprint": "string",
        "username": "string",
        "vcenterIp": "string"
      }
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response message for 'ListSources' request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|read-only|Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|sources|[[Source](#schemasource)]|false|read-only|Output only. The list of sources response.|
|unreachable|[string]|false|read-only|Output only. Locations that could not be reached.|

<h2 id="tocS_ListTargetProjectsResponse">ListTargetProjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttargetprojectsresponse"></a>
<a id="schema_ListTargetProjectsResponse"></a>
<a id="tocSlisttargetprojectsresponse"></a>
<a id="tocslisttargetprojectsresponse"></a>

```json
{
  "nextPageToken": "string",
  "targetProjects": [
    {
      "createTime": "string",
      "description": "string",
      "name": "string",
      "project": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response message for 'ListTargetProjects' call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|read-only|Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|targetProjects|[[TargetProject](#schematargetproject)]|false|read-only|Output only. The list of target response.|
|unreachable|[string]|false|read-only|Output only. Locations that could not be reached.|

<h2 id="tocS_ListUtilizationReportsResponse">ListUtilizationReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistutilizationreportsresponse"></a>
<a id="schema_ListUtilizationReportsResponse"></a>
<a id="tocSlistutilizationreportsresponse"></a>
<a id="tocslistutilizationreportsresponse"></a>

```json
{
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ],
  "utilizationReports": [
    {
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
      "frameEndTime": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "stateTime": "string",
      "timeFrame": "TIME_FRAME_UNSPECIFIED",
      "vmCount": 0,
      "vms": [
        {
          "utilization": {
            "cpuAverage": 0,
            "cpuAveragePercent": 0,
            "cpuMax": 0,
            "cpuMaxPercent": 0,
            "diskIoRateAverage": "string",
            "diskIoRateAverageKbps": "string",
            "diskIoRateMax": "string",
            "diskIoRateMaxKbps": "string",
            "memoryAverage": 0,
            "memoryAveragePercent": 0,
            "memoryMax": 0,
            "memoryMaxPercent": 0,
            "networkThroughputAverage": "string",
            "networkThroughputAverageKbps": "string",
            "networkThroughputMax": "string",
            "networkThroughputMaxKbps": "string"
          },
          "vmId": "string",
          "vmwareVmDetails": {
            "bootOption": "BOOT_OPTION_UNSPECIFIED",
            "committedStorage": "string",
            "committedStorageMb": "string",
            "cpuCount": 0,
            "datacenterDescription": "string",
            "datacenterId": "string",
            "diskCount": 0,
            "displayName": "string",
            "guestDescription": "string",
            "memoryMb": 0,
            "powerState": "POWER_STATE_UNSPECIFIED",
            "uuid": "string",
            "vmId": "string"
          }
        }
      ],
      "vmsCount": 0
    }
  ]
}
```

Response message for 'ListUtilizationReports' request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|read-only|Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|unreachable|[string]|false|read-only|Output only. Locations that could not be reached.|
|utilizationReports|[[UtilizationReport](#schemautilizationreport)]|false|read-only|Output only. The list of reports.|

<h2 id="tocS_LocalizedMessage">LocalizedMessage</h2>
<!-- backwards compatibility -->
<a id="schemalocalizedmessage"></a>
<a id="schema_LocalizedMessage"></a>
<a id="tocSlocalizedmessage"></a>
<a id="tocslocalizedmessage"></a>

```json
{
  "locale": "string",
  "message": "string"
}
```

Provides a localized error message that is safe to return to the user which can be attached to an RPC error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locale|string|false|none|The locale used following the specification defined at https://www.rfc-editor.org/rfc/bcp/bcp47.txt. Examples are: "en-US", "fr-CH", "es-MX"|
|message|string|false|none|The localized error message in the above locale.|

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

<h2 id="tocS_MigratingVm">MigratingVm</h2>
<!-- backwards compatibility -->
<a id="schemamigratingvm"></a>
<a id="schema_MigratingVm"></a>
<a id="tocSmigratingvm"></a>
<a id="tocsmigratingvm"></a>

```json
{
  "awsSourceVmDetails": {
    "committedStorageBytes": "string",
    "firmware": "FIRMWARE_UNSPECIFIED"
  },
  "computeEngineTargetDefaults": {
    "additionalLicenses": [
      "string"
    ],
    "appliedLicense": {
      "osLicense": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "bootOption": "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
    "computeScheduling": {
      "automaticRestart": true,
      "minNodeCpus": 0,
      "nodeAffinities": [
        {
          "key": "string",
          "operator": "OPERATOR_UNSPECIFIED",
          "values": [
            "string"
          ]
        }
      ],
      "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
      "restartType": "RESTART_TYPE_UNSPECIFIED"
    },
    "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
    "hostname": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
    "machineType": "string",
    "machineTypeSeries": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "networkInterfaces": [
      {
        "externalIp": "string",
        "internalIp": "string",
        "network": "string",
        "subnetwork": "string"
      }
    ],
    "networkTags": [
      "string"
    ],
    "secureBoot": true,
    "serviceAccount": "string",
    "targetProject": "string",
    "vmName": "string",
    "zone": "string"
  },
  "computeEngineVmDefaults": {
    "appliedLicense": {
      "osLicense": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "bootOption": "BOOT_OPTION_UNSPECIFIED",
    "computeScheduling": {
      "automaticRestart": true,
      "minNodeCpus": 0,
      "nodeAffinities": [
        {
          "key": "string",
          "operator": "OPERATOR_UNSPECIFIED",
          "values": [
            "string"
          ]
        }
      ],
      "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
      "restartType": "RESTART_TYPE_UNSPECIFIED"
    },
    "diskType": "DISK_TYPE_UNSPECIFIED",
    "externalIp": "string",
    "internalIp": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "licenseType": "DEFAULT",
    "machineType": "string",
    "machineTypeSeries": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "network": "string",
    "networkInterfaces": [
      {
        "externalIp": "string",
        "internalIp": "string",
        "network": "string",
        "subnetwork": "string"
      }
    ],
    "networkTags": [
      "string"
    ],
    "project": "string",
    "secureBoot": true,
    "serviceAccount": "string",
    "subnetwork": "string",
    "targetProject": "string",
    "zone": "string"
  },
  "createTime": "string",
  "currentSyncInfo": {
    "cycleNumber": 0,
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
    "name": "string",
    "progress": 0,
    "progressPercent": 0,
    "startTime": "string",
    "state": "STATE_UNSPECIFIED",
    "steps": [
      {
        "endTime": "string",
        "initializingReplication": {},
        "postProcessing": {},
        "replicating": {
          "lastThirtyMinutesAverageBytesPerSecond": "string",
          "lastTwoMinutesAverageBytesPerSecond": "string",
          "replicatedBytes": "string",
          "totalBytes": "string"
        },
        "startTime": "string"
      }
    ],
    "totalPauseDuration": "string",
    "warnings": [
      {
        "actionItem": {
          "locale": "string",
          "message": "string"
        },
        "code": "WARNING_CODE_UNSPECIFIED",
        "helpLinks": [
          {
            "description": "string",
            "url": "string"
          }
        ],
        "warningMessage": {
          "locale": "string",
          "message": "string"
        },
        "warningTime": "string"
      }
    ]
  },
  "cutoverForecast": {
    "estimatedCutoverJobDuration": "string"
  },
  "description": "string",
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
  "group": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lastReplicationCycle": {
    "cycleNumber": 0,
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
    "name": "string",
    "progress": 0,
    "progressPercent": 0,
    "startTime": "string",
    "state": "STATE_UNSPECIFIED",
    "steps": [
      {
        "endTime": "string",
        "initializingReplication": {},
        "postProcessing": {},
        "replicating": {
          "lastThirtyMinutesAverageBytesPerSecond": "string",
          "lastTwoMinutesAverageBytesPerSecond": "string",
          "replicatedBytes": "string",
          "totalBytes": "string"
        },
        "startTime": "string"
      }
    ],
    "totalPauseDuration": "string",
    "warnings": [
      {
        "actionItem": {
          "locale": "string",
          "message": "string"
        },
        "code": "WARNING_CODE_UNSPECIFIED",
        "helpLinks": [
          {
            "description": "string",
            "url": "string"
          }
        ],
        "warningMessage": {
          "locale": "string",
          "message": "string"
        },
        "warningTime": "string"
      }
    ]
  },
  "lastSync": {
    "lastSyncTime": "string"
  },
  "name": "string",
  "policy": {
    "idleDuration": "string",
    "skipOsAdaptation": true
  },
  "recentCloneJobs": [
    {
      "computeEngineTargetDetails": {
        "additionalLicenses": [
          "string"
        ],
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
        "hostname": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "vmName": "string",
        "zone": "string"
      },
      "computeEngineVmDetails": {
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "DISK_TYPE_UNSPECIFIED",
        "externalIp": "string",
        "internalIp": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "network": "string",
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "subnetwork": "string",
        "targetProject": "string",
        "zone": "string"
      },
      "createTime": "string",
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
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "stateTime": "string",
      "steps": [
        {
          "adaptingOs": {},
          "endTime": "string",
          "instantiatingMigratedVm": {},
          "preparingVmDisks": {},
          "startTime": "string"
        }
      ],
      "targetDetails": {
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "DISK_TYPE_UNSPECIFIED",
        "externalIp": "string",
        "internalIp": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "network": "string",
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "subnetwork": "string",
        "targetProject": "string",
        "zone": "string"
      }
    }
  ],
  "recentCutoverJobs": [
    {
      "computeEngineTargetDetails": {
        "additionalLicenses": [
          "string"
        ],
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
        "hostname": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "vmName": "string",
        "zone": "string"
      },
      "computeEngineVmDetails": {
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "DISK_TYPE_UNSPECIFIED",
        "externalIp": "string",
        "internalIp": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "network": "string",
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "subnetwork": "string",
        "targetProject": "string",
        "zone": "string"
      },
      "createTime": "string",
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
      "name": "string",
      "progress": 0,
      "progressPercent": 0,
      "state": "STATE_UNSPECIFIED",
      "stateMessage": "string",
      "stateTime": "string",
      "steps": [
        {
          "endTime": "string",
          "finalSync": {
            "cycleNumber": 0,
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
            "name": "string",
            "progress": 0,
            "progressPercent": 0,
            "startTime": "string",
            "state": "STATE_UNSPECIFIED",
            "steps": [
              {
                "endTime": "string",
                "initializingReplication": {},
                "postProcessing": {},
                "replicating": {
                  "lastThirtyMinutesAverageBytesPerSecond": "string",
                  "lastTwoMinutesAverageBytesPerSecond": "string",
                  "replicatedBytes": "string",
                  "totalBytes": "string"
                },
                "startTime": "string"
              }
            ],
            "totalPauseDuration": "string",
            "warnings": [
              {
                "actionItem": {
                  "locale": "string",
                  "message": "string"
                },
                "code": "WARNING_CODE_UNSPECIFIED",
                "helpLinks": [
                  {
                    "description": "string",
                    "url": "string"
                  }
                ],
                "warningMessage": {
                  "locale": "string",
                  "message": "string"
                },
                "warningTime": "string"
              }
            ]
          },
          "instantiatingMigratedVm": {},
          "preparingVmDisks": {},
          "previousReplicationCycle": {
            "cycleNumber": 0,
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
            "name": "string",
            "progress": 0,
            "progressPercent": 0,
            "startTime": "string",
            "state": "STATE_UNSPECIFIED",
            "steps": [
              {
                "endTime": "string",
                "initializingReplication": {},
                "postProcessing": {},
                "replicating": {
                  "lastThirtyMinutesAverageBytesPerSecond": "string",
                  "lastTwoMinutesAverageBytesPerSecond": "string",
                  "replicatedBytes": "string",
                  "totalBytes": "string"
                },
                "startTime": "string"
              }
            ],
            "totalPauseDuration": "string",
            "warnings": [
              {
                "actionItem": {
                  "locale": "string",
                  "message": "string"
                },
                "code": "WARNING_CODE_UNSPECIFIED",
                "helpLinks": [
                  {
                    "description": "string",
                    "url": "string"
                  }
                ],
                "warningMessage": {
                  "locale": "string",
                  "message": "string"
                },
                "warningTime": "string"
              }
            ]
          },
          "shuttingDownSourceVm": {},
          "startTime": "string"
        }
      ],
      "targetDetails": {
        "appliedLicense": {
          "osLicense": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "computeScheduling": {
          "automaticRestart": true,
          "minNodeCpus": 0,
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ],
          "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
          "restartType": "RESTART_TYPE_UNSPECIFIED"
        },
        "diskType": "DISK_TYPE_UNSPECIFIED",
        "externalIp": "string",
        "internalIp": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "licenseType": "DEFAULT",
        "machineType": "string",
        "machineTypeSeries": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "network": "string",
        "networkInterfaces": [
          {
            "externalIp": "string",
            "internalIp": "string",
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "networkTags": [
          "string"
        ],
        "project": "string",
        "secureBoot": true,
        "serviceAccount": "string",
        "subnetwork": "string",
        "targetProject": "string",
        "zone": "string"
      }
    }
  ],
  "sourceVmId": "string",
  "state": "STATE_UNSPECIFIED",
  "stateTime": "string",
  "targetDefaults": {
    "appliedLicense": {
      "osLicense": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "bootOption": "BOOT_OPTION_UNSPECIFIED",
    "computeScheduling": {
      "automaticRestart": true,
      "minNodeCpus": 0,
      "nodeAffinities": [
        {
          "key": "string",
          "operator": "OPERATOR_UNSPECIFIED",
          "values": [
            "string"
          ]
        }
      ],
      "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
      "restartType": "RESTART_TYPE_UNSPECIFIED"
    },
    "diskType": "DISK_TYPE_UNSPECIFIED",
    "externalIp": "string",
    "internalIp": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "licenseType": "DEFAULT",
    "machineType": "string",
    "machineTypeSeries": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "network": "string",
    "networkInterfaces": [
      {
        "externalIp": "string",
        "internalIp": "string",
        "network": "string",
        "subnetwork": "string"
      }
    ],
    "networkTags": [
      "string"
    ],
    "project": "string",
    "secureBoot": true,
    "serviceAccount": "string",
    "subnetwork": "string",
    "targetProject": "string",
    "zone": "string"
  },
  "updateTime": "string"
}
```

MigratingVm describes the VM that will be migrated from a Source environment and its replication state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsSourceVmDetails|[AwsSourceVmDetails](#schemaawssourcevmdetails)|false|none|Output only. Details of the VM from an AWS source.|
|computeEngineTargetDefaults|[ComputeEngineTargetDefaults](#schemacomputeenginetargetdefaults)|false|none|Details of the target VM in Compute Engine.|
|computeEngineVmDefaults|[TargetVMDetails](#schematargetvmdetails)|false|none|Details of the VM in Compute Engine. Deprecated: Use compute_engine_target_defaults instead.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the migrating VM was created (this refers to this resource and not to the time it was installed in the source).|
|currentSyncInfo|[ReplicationCycle](#schemareplicationcycle)|false|none|Output only. Details of the current running replication cycle.|
|cutoverForecast|[CutoverForecast](#schemacutoverforecast)|false|none|Output only. Provides details of future CutoverJobs of a MigratingVm. Set to empty when cutover forecast is unavailable.|
|description|string|false|none|The description attached to the migrating VM by the user.|
|displayName|string|false|none|The display name attached to the MigratingVm by the user.|
|error|[Status](#schemastatus)|false|none|Output only. Provides details on the state of the Migrating VM in case of an error in replication.|
|group|string|false|read-only|Output only. The group this migrating vm is included in, if any. The group is represented by the full path of the appropriate Group resource.|
|labels|object|false|none|The labels of the migrating VM.|
|lastReplicationCycle|[ReplicationCycle](#schemareplicationcycle)|false|none|Output only. Details of the last replication cycle. This will be updated whenever a replication cycle is finished and is not to be confused with last_sync which is only updated on successful replication cycles.|
|lastSync|[ReplicationSync](#schemareplicationsync)|false|none|Output only. The most updated snapshot created time in the source that finished replication.|
|name|string|false|read-only|Output only. The identifier of the MigratingVm.|
|policy|[SchedulePolicy](#schemaschedulepolicy)|false|none|The replication schedule policy.|
|recentCloneJobs|[[CloneJob](#schemaclonejob)]|false|read-only|Output only. The recent clone jobs performed on the migrating VM. This field holds the vm's last completed clone job and the vm's running clone job, if one exists. Note: To have this field populated you need to explicitly request it via the "view" parameter of the Get/List request.|
|recentCutoverJobs|[[CutoverJob](#schemacutoverjob)]|false|read-only|Output only. The recent cutover jobs performed on the migrating VM. This field holds the vm's last completed cutover job and the vm's running cutover job, if one exists. Note: To have this field populated you need to explicitly request it via the "view" parameter of the Get/List request.|
|sourceVmId|string|false|none|The unique ID of the VM in the source. The VM's name in vSphere can be changed, so this is not the VM's name but rather its moRef id. This id is of the form vm-.|
|state|string|false|read-only|Output only. State of the MigratingVm.|
|stateTime|string(google-datetime)|false|read-only|Output only. The last time the migrating VM state was updated.|
|targetDefaults|[TargetVMDetails](#schematargetvmdetails)|false|none|The default configuration of the target VM that will be created in Google Cloud as a result of the migration. Deprecated: Use compute_engine_target_defaults instead.|
|updateTime|string(google-datetime)|false|read-only|Output only. The last time the migrating VM resource was updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|READY|
|state|FIRST_SYNC|
|state|ACTIVE|
|state|CUTTING_OVER|
|state|CUTOVER|
|state|FINAL_SYNC|
|state|PAUSED|
|state|FINALIZING|
|state|FINALIZED|
|state|ERROR|

<h2 id="tocS_MigrationError">MigrationError</h2>
<!-- backwards compatibility -->
<a id="schemamigrationerror"></a>
<a id="schema_MigrationError"></a>
<a id="tocSmigrationerror"></a>
<a id="tocsmigrationerror"></a>

```json
{
  "actionItem": {
    "locale": "string",
    "message": "string"
  },
  "code": "ERROR_CODE_UNSPECIFIED",
  "errorMessage": {
    "locale": "string",
    "message": "string"
  },
  "errorTime": "string",
  "helpLinks": [
    {
      "description": "string",
      "url": "string"
    }
  ]
}
```

Represents migration resource error information that can be used with google.rpc.Status message. MigrationError is used to present the user with error information in migration operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionItem|[LocalizedMessage](#schemalocalizedmessage)|false|none|Output only. Suggested action for solving the error.|
|code|string|false|read-only|Output only. The error code.|
|errorMessage|[LocalizedMessage](#schemalocalizedmessage)|false|none|Output only. The localized error message.|
|errorTime|string(google-datetime)|false|read-only|Output only. The time the error occurred.|
|helpLinks|[[Link](#schemalink)]|false|read-only|Output only. URL(s) pointing to additional information on handling the current error.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|ERROR_CODE_UNSPECIFIED|
|code|UNKNOWN_ERROR|
|code|SOURCE_VALIDATION_ERROR|
|code|SOURCE_REPLICATION_ERROR|
|code|TARGET_REPLICATION_ERROR|
|code|OS_ADAPTATION_ERROR|
|code|CLONE_ERROR|
|code|CUTOVER_ERROR|
|code|UTILIZATION_REPORT_ERROR|
|code|APPLIANCE_UPGRADE_ERROR|

<h2 id="tocS_MigrationWarning">MigrationWarning</h2>
<!-- backwards compatibility -->
<a id="schemamigrationwarning"></a>
<a id="schema_MigrationWarning"></a>
<a id="tocSmigrationwarning"></a>
<a id="tocsmigrationwarning"></a>

```json
{
  "actionItem": {
    "locale": "string",
    "message": "string"
  },
  "code": "WARNING_CODE_UNSPECIFIED",
  "helpLinks": [
    {
      "description": "string",
      "url": "string"
    }
  ],
  "warningMessage": {
    "locale": "string",
    "message": "string"
  },
  "warningTime": "string"
}
```

Represents migration resource warning information that can be used with google.rpc.Status message. MigrationWarning is used to present the user with warning information in migration operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionItem|[LocalizedMessage](#schemalocalizedmessage)|false|none|Suggested action for solving the warning.|
|code|string|false|none|The warning code.|
|helpLinks|[[Link](#schemalink)]|false|none|URL(s) pointing to additional information on handling the current warning.|
|warningMessage|[LocalizedMessage](#schemalocalizedmessage)|false|none|The localized warning message.|
|warningTime|string(google-datetime)|false|none|The time the warning occurred.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|WARNING_CODE_UNSPECIFIED|
|code|ADAPTATION_WARNING|

<h2 id="tocS_NetworkInterface">NetworkInterface</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterface"></a>
<a id="schema_NetworkInterface"></a>
<a id="tocSnetworkinterface"></a>
<a id="tocsnetworkinterface"></a>

```json
{
  "externalIp": "string",
  "internalIp": "string",
  "network": "string",
  "subnetwork": "string"
}
```

NetworkInterface represents a NIC of a VM.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalIp|string|false|none|The external IP to define in the NIC.|
|internalIp|string|false|none|The internal IP to define in the NIC. The formats accepted are: `ephemeral` \ ipv4 address \ a named address resource full path.|
|network|string|false|none|The network to connect the NIC to.|
|subnetwork|string|false|none|The subnetwork to connect the NIC to.|

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

<h2 id="tocS_PauseMigrationRequest">PauseMigrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapausemigrationrequest"></a>
<a id="schema_PauseMigrationRequest"></a>
<a id="tocSpausemigrationrequest"></a>
<a id="tocspausemigrationrequest"></a>

```json
{}
```

Request message for 'PauseMigration' request.

<h2 id="tocS_PostProcessingStep">PostProcessingStep</h2>
<!-- backwards compatibility -->
<a id="schemapostprocessingstep"></a>
<a id="schema_PostProcessingStep"></a>
<a id="tocSpostprocessingstep"></a>
<a id="tocspostprocessingstep"></a>

```json
{}
```

PostProcessingStep contains specific step details.

<h2 id="tocS_PreparingVMDisksStep">PreparingVMDisksStep</h2>
<!-- backwards compatibility -->
<a id="schemapreparingvmdisksstep"></a>
<a id="schema_PreparingVMDisksStep"></a>
<a id="tocSpreparingvmdisksstep"></a>
<a id="tocspreparingvmdisksstep"></a>

```json
{}
```

PreparingVMDisksStep contains specific step details.

<h2 id="tocS_RemoveGroupMigrationRequest">RemoveGroupMigrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovegroupmigrationrequest"></a>
<a id="schema_RemoveGroupMigrationRequest"></a>
<a id="tocSremovegroupmigrationrequest"></a>
<a id="tocsremovegroupmigrationrequest"></a>

```json
{
  "migratingVm": "string"
}
```

Request message for 'RemoveMigration' request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|migratingVm|string|false|none|The MigratingVm to remove.|

<h2 id="tocS_ReplicatingStep">ReplicatingStep</h2>
<!-- backwards compatibility -->
<a id="schemareplicatingstep"></a>
<a id="schema_ReplicatingStep"></a>
<a id="tocSreplicatingstep"></a>
<a id="tocsreplicatingstep"></a>

```json
{
  "lastThirtyMinutesAverageBytesPerSecond": "string",
  "lastTwoMinutesAverageBytesPerSecond": "string",
  "replicatedBytes": "string",
  "totalBytes": "string"
}
```

ReplicatingStep contains specific step details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastThirtyMinutesAverageBytesPerSecond|string(int64)|false|none|The source disks replication rate for the last 30 minutes in bytes per second.|
|lastTwoMinutesAverageBytesPerSecond|string(int64)|false|none|The source disks replication rate for the last 2 minutes in bytes per second.|
|replicatedBytes|string(int64)|false|none|Replicated bytes in the step.|
|totalBytes|string(int64)|false|none|Total bytes to be handled in the step.|

<h2 id="tocS_ReplicationCycle">ReplicationCycle</h2>
<!-- backwards compatibility -->
<a id="schemareplicationcycle"></a>
<a id="schema_ReplicationCycle"></a>
<a id="tocSreplicationcycle"></a>
<a id="tocsreplicationcycle"></a>

```json
{
  "cycleNumber": 0,
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
  "name": "string",
  "progress": 0,
  "progressPercent": 0,
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "steps": [
    {
      "endTime": "string",
      "initializingReplication": {},
      "postProcessing": {},
      "replicating": {
        "lastThirtyMinutesAverageBytesPerSecond": "string",
        "lastTwoMinutesAverageBytesPerSecond": "string",
        "replicatedBytes": "string",
        "totalBytes": "string"
      },
      "startTime": "string"
    }
  ],
  "totalPauseDuration": "string",
  "warnings": [
    {
      "actionItem": {
        "locale": "string",
        "message": "string"
      },
      "code": "WARNING_CODE_UNSPECIFIED",
      "helpLinks": [
        {
          "description": "string",
          "url": "string"
        }
      ],
      "warningMessage": {
        "locale": "string",
        "message": "string"
      },
      "warningTime": "string"
    }
  ]
}
```

ReplicationCycle contains information about the current replication cycle status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cycleNumber|integer(int32)|false|none|The cycle's ordinal number.|
|endTime|string(google-datetime)|false|none|The time the replication cycle has ended.|
|error|[Status](#schemastatus)|false|none|Provides details on the state of the cycle in case of an error.|
|name|string|false|none|The identifier of the ReplicationCycle.|
|progress|integer(int32)|false|none|The current progress in percentage of this cycle.|
|progressPercent|integer(int32)|false|none|The current progress in percentage of this cycle. Was replaced by 'steps' field, which breaks down the cycle progression more accurately.|
|startTime|string(google-datetime)|false|none|The time the replication cycle has started.|
|state|string|false|none|State of the ReplicationCycle.|
|steps|[[CycleStep](#schemacyclestep)]|false|none|The cycle's steps list representing its progress.|
|totalPauseDuration|string(google-duration)|false|none|The accumulated duration the replication cycle was paused.|
|warnings|[[MigrationWarning](#schemamigrationwarning)]|false|read-only|Output only. Warnings that occurred during the cycle.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|RUNNING|
|state|PAUSED|
|state|FAILED|
|state|SUCCEEDED|

<h2 id="tocS_ReplicationSync">ReplicationSync</h2>
<!-- backwards compatibility -->
<a id="schemareplicationsync"></a>
<a id="schema_ReplicationSync"></a>
<a id="tocSreplicationsync"></a>
<a id="tocsreplicationsync"></a>

```json
{
  "lastSyncTime": "string"
}
```

ReplicationSync contain information about the last replica sync to the cloud.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastSyncTime|string(google-datetime)|false|none|The most updated snapshot created time in the source that finished replication.|

<h2 id="tocS_ResumeMigrationRequest">ResumeMigrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresumemigrationrequest"></a>
<a id="schema_ResumeMigrationRequest"></a>
<a id="tocSresumemigrationrequest"></a>
<a id="tocsresumemigrationrequest"></a>

```json
{}
```

Request message for 'ResumeMigration' request.

<h2 id="tocS_SchedulePolicy">SchedulePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaschedulepolicy"></a>
<a id="schema_SchedulePolicy"></a>
<a id="tocSschedulepolicy"></a>
<a id="tocsschedulepolicy"></a>

```json
{
  "idleDuration": "string",
  "skipOsAdaptation": true
}
```

A policy for scheduling replications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idleDuration|string(google-duration)|false|none|The idle duration between replication stages.|
|skipOsAdaptation|boolean|false|none|A flag to indicate whether to skip OS adaptation during the replication sync. OS adaptation is a process where the VM's operating system undergoes changes and adaptations to fully function on Compute Engine.|

<h2 id="tocS_SchedulingNodeAffinity">SchedulingNodeAffinity</h2>
<!-- backwards compatibility -->
<a id="schemaschedulingnodeaffinity"></a>
<a id="schema_SchedulingNodeAffinity"></a>
<a id="tocSschedulingnodeaffinity"></a>
<a id="tocsschedulingnodeaffinity"></a>

```json
{
  "key": "string",
  "operator": "OPERATOR_UNSPECIFIED",
  "values": [
    "string"
  ]
}
```

Node Affinity: the configuration of desired nodes onto which this Instance could be scheduled. Based on https://cloud.google.com/compute/docs/reference/rest/v1/instances/setScheduling

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The label key of Node resource to reference.|
|operator|string|false|none|The operator to use for the node resources specified in the `values` parameter.|
|values|[string]|false|none|Corresponds to the label values of Node resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|OPERATOR_UNSPECIFIED|
|operator|IN|
|operator|NOT_IN|

<h2 id="tocS_ShuttingDownSourceVMStep">ShuttingDownSourceVMStep</h2>
<!-- backwards compatibility -->
<a id="schemashuttingdownsourcevmstep"></a>
<a id="schema_ShuttingDownSourceVMStep"></a>
<a id="tocSshuttingdownsourcevmstep"></a>
<a id="tocsshuttingdownsourcevmstep"></a>

```json
{}
```

ShuttingDownSourceVMStep contains specific step details.

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "aws": {
    "accessKeyCreds": {
      "accessKeyId": "string",
      "secretAccessKey": "string",
      "sessionToken": "string"
    },
    "awsRegion": "string",
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
    "inventorySecurityGroupNames": [
      "string"
    ],
    "inventoryTagList": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "migrationResourcesUserTags": {
      "property1": "string",
      "property2": "string"
    },
    "publicIp": "string",
    "state": "STATE_UNSPECIFIED"
  },
  "createTime": "string",
  "description": "string",
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
  "updateTime": "string",
  "vmware": {
    "password": "string",
    "thumbprint": "string",
    "username": "string",
    "vcenterIp": "string"
  }
}
```

Source message describes a specific vm migration Source resource. It contains the source environment information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aws|[AwsSourceDetails](#schemaawssourcedetails)|false|none|AWS type source details.|
|createTime|string(google-datetime)|false|read-only|Output only. The create time timestamp.|
|description|string|false|none|User-provided description of the source.|
|error|[Status](#schemastatus)|false|none|Output only. Provides details on the state of the Source in case of an error.|
|labels|object|false|none|The labels of the source.|
|name|string|false|read-only|Output only. The Source name.|
|updateTime|string(google-datetime)|false|read-only|Output only. The update time timestamp.|
|vmware|[VmwareSourceDetails](#schemavmwaresourcedetails)|false|none|Vmware type source details.|

<h2 id="tocS_StartMigrationRequest">StartMigrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartmigrationrequest"></a>
<a id="schema_StartMigrationRequest"></a>
<a id="tocSstartmigrationrequest"></a>
<a id="tocsstartmigrationrequest"></a>

```json
{}
```

Request message for 'StartMigrationRequest' request.

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

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

Tag is an AWS tag representation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Key of tag.|
|value|string|false|none|Value of tag.|

<h2 id="tocS_TargetProject">TargetProject</h2>
<!-- backwards compatibility -->
<a id="schematargetproject"></a>
<a id="schema_TargetProject"></a>
<a id="tocStargetproject"></a>
<a id="tocstargetproject"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "name": "string",
  "project": "string",
  "updateTime": "string"
}
```

TargetProject message represents a target Compute Engine project for a migration or a clone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time this target project resource was created (not related to when the Compute Engine project it points to was created).|
|description|string|false|none|The target project's description.|
|name|string|false|read-only|Output only. The name of the target project.|
|project|string|false|none|The target project ID (number) or project name.|
|updateTime|string(google-datetime)|false|read-only|Output only. The last time the target project resource was updated.|

<h2 id="tocS_TargetVMDetails">TargetVMDetails</h2>
<!-- backwards compatibility -->
<a id="schematargetvmdetails"></a>
<a id="schema_TargetVMDetails"></a>
<a id="tocStargetvmdetails"></a>
<a id="tocstargetvmdetails"></a>

```json
{
  "appliedLicense": {
    "osLicense": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "bootOption": "BOOT_OPTION_UNSPECIFIED",
  "computeScheduling": {
    "automaticRestart": true,
    "minNodeCpus": 0,
    "nodeAffinities": [
      {
        "key": "string",
        "operator": "OPERATOR_UNSPECIFIED",
        "values": [
          "string"
        ]
      }
    ],
    "onHostMaintenance": "ON_HOST_MAINTENANCE_UNSPECIFIED",
    "restartType": "RESTART_TYPE_UNSPECIFIED"
  },
  "diskType": "DISK_TYPE_UNSPECIFIED",
  "externalIp": "string",
  "internalIp": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "licenseType": "DEFAULT",
  "machineType": "string",
  "machineTypeSeries": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "network": "string",
  "networkInterfaces": [
    {
      "externalIp": "string",
      "internalIp": "string",
      "network": "string",
      "subnetwork": "string"
    }
  ],
  "networkTags": [
    "string"
  ],
  "project": "string",
  "secureBoot": true,
  "serviceAccount": "string",
  "subnetwork": "string",
  "targetProject": "string",
  "zone": "string"
}
```

TargetVMDetails is a collection of details for creating a VM in a target Compute Engine project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appliedLicense|[AppliedLicense](#schemaappliedlicense)|false|none|Output only. The OS license returned from the adaptation module report.|
|bootOption|string|false|read-only|Output only. The VM Boot Option, as set in the source vm.|
|computeScheduling|[ComputeScheduling](#schemacomputescheduling)|false|none|Compute instance scheduling information (if empty default is used).|
|diskType|string|false|none|The disk type to use in the VM.|
|externalIp|string|false|none|The external IP to define in the VM.|
|internalIp|string|false|none|The internal IP to define in the VM. The formats accepted are: `ephemeral` \ ipv4 address \ a named address resource full path.|
|labels|object|false|none|A map of labels to associate with the VM.|
|licenseType|string|false|none|The license type to use in OS adaptation.|
|machineType|string|false|none|The machine type to create the VM with.|
|machineTypeSeries|string|false|none|The machine type series to create the VM with.|
|metadata|object|false|none|The metadata key/value pairs to assign to the VM.|
|name|string|false|none|The name of the VM to create.|
|network|string|false|none|The network to connect the VM to.|
|networkInterfaces|[[NetworkInterface](#schemanetworkinterface)]|false|none|List of NICs connected to this VM.|
|networkTags|[string]|false|none|A map of network tags to associate with the VM.|
|project|string|false|read-only|Output only. The project in which to create the VM.|
|secureBoot|boolean|false|none|Defines whether the instance has Secure Boot enabled. This can be set to true only if the vm boot option is EFI.|
|serviceAccount|string|false|none|The service account to associate the VM with.|
|subnetwork|string|false|none|The subnetwork to connect the VM to.|
|targetProject|string|false|none|The full path of the resource of type TargetProject which represents the Compute Engine project in which to create this VM.|
|zone|string|false|none|The zone in which to create the VM.|

#### Enumerated Values

|Property|Value|
|---|---|
|bootOption|BOOT_OPTION_UNSPECIFIED|
|bootOption|EFI|
|bootOption|BIOS|
|diskType|DISK_TYPE_UNSPECIFIED|
|diskType|STANDARD|
|diskType|BALANCED|
|diskType|SSD|
|licenseType|DEFAULT|
|licenseType|PAYG|
|licenseType|BYOL|

<h2 id="tocS_UpgradeApplianceRequest">UpgradeApplianceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupgradeappliancerequest"></a>
<a id="schema_UpgradeApplianceRequest"></a>
<a id="tocSupgradeappliancerequest"></a>
<a id="tocsupgradeappliancerequest"></a>

```json
{
  "requestId": "string"
}
```

Request message for 'UpgradeAppliance' request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|

<h2 id="tocS_UpgradeStatus">UpgradeStatus</h2>
<!-- backwards compatibility -->
<a id="schemaupgradestatus"></a>
<a id="schema_UpgradeStatus"></a>
<a id="tocSupgradestatus"></a>
<a id="tocsupgradestatus"></a>

```json
{
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
  "previousVersion": "string",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "version": "string"
}
```

UpgradeStatus contains information about upgradeAppliance operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Status](#schemastatus)|false|none|Provides details on the state of the upgrade operation in case of an error.|
|previousVersion|string|false|none|The version from which we upgraded.|
|startTime|string(google-datetime)|false|none|The time the operation was started.|
|state|string|false|none|The state of the upgradeAppliance operation.|
|version|string|false|none|The version to upgrade to.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|RUNNING|
|state|FAILED|
|state|SUCCEEDED|

<h2 id="tocS_UtilizationReport">UtilizationReport</h2>
<!-- backwards compatibility -->
<a id="schemautilizationreport"></a>
<a id="schema_UtilizationReport"></a>
<a id="tocSutilizationreport"></a>
<a id="tocsutilizationreport"></a>

```json
{
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
  "frameEndTime": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "stateTime": "string",
  "timeFrame": "TIME_FRAME_UNSPECIFIED",
  "vmCount": 0,
  "vms": [
    {
      "utilization": {
        "cpuAverage": 0,
        "cpuAveragePercent": 0,
        "cpuMax": 0,
        "cpuMaxPercent": 0,
        "diskIoRateAverage": "string",
        "diskIoRateAverageKbps": "string",
        "diskIoRateMax": "string",
        "diskIoRateMaxKbps": "string",
        "memoryAverage": 0,
        "memoryAveragePercent": 0,
        "memoryMax": 0,
        "memoryMaxPercent": 0,
        "networkThroughputAverage": "string",
        "networkThroughputAverageKbps": "string",
        "networkThroughputMax": "string",
        "networkThroughputMaxKbps": "string"
      },
      "vmId": "string",
      "vmwareVmDetails": {
        "bootOption": "BOOT_OPTION_UNSPECIFIED",
        "committedStorage": "string",
        "committedStorageMb": "string",
        "cpuCount": 0,
        "datacenterDescription": "string",
        "datacenterId": "string",
        "diskCount": 0,
        "displayName": "string",
        "guestDescription": "string",
        "memoryMb": 0,
        "powerState": "POWER_STATE_UNSPECIFIED",
        "uuid": "string",
        "vmId": "string"
      }
    }
  ],
  "vmsCount": 0
}
```

Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the report was created (this refers to the time of the request, not the time the report creation completed).|
|displayName|string|false|none|The report display name, as assigned by the user.|
|error|[Status](#schemastatus)|false|none|Output only. Provides details on the state of the report in case of an error.|
|frameEndTime|string(google-datetime)|false|read-only|Output only. The point in time when the time frame ends. Notice that the time frame is counted backwards. For instance if the "frame_end_time" value is 2021/01/20 and the time frame is WEEK then the report covers the week between 2021/01/20 and 2021/01/14.|
|name|string|false|read-only|Output only. The report unique name.|
|state|string|false|read-only|Output only. Current state of the report.|
|stateTime|string(google-datetime)|false|read-only|Output only. The time the state was last set.|
|timeFrame|string|false|none|Time frame of the report.|
|vmCount|integer(int32)|false|read-only|Output only. Total number of VMs included in the report.|
|vms|[[VmUtilizationInfo](#schemavmutilizationinfo)]|false|none|List of utilization information per VM. When sent as part of the request, the "vm_id" field is used in order to specify which VMs to include in the report. In that case all other fields are ignored.|
|vmsCount|integer(int32)|false|read-only|Output only. Total number of VMs included in the report.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|SUCCEEDED|
|state|FAILED|
|timeFrame|TIME_FRAME_UNSPECIFIED|
|timeFrame|WEEK|
|timeFrame|MONTH|
|timeFrame|YEAR|

<h2 id="tocS_VmUtilizationInfo">VmUtilizationInfo</h2>
<!-- backwards compatibility -->
<a id="schemavmutilizationinfo"></a>
<a id="schema_VmUtilizationInfo"></a>
<a id="tocSvmutilizationinfo"></a>
<a id="tocsvmutilizationinfo"></a>

```json
{
  "utilization": {
    "cpuAverage": 0,
    "cpuAveragePercent": 0,
    "cpuMax": 0,
    "cpuMaxPercent": 0,
    "diskIoRateAverage": "string",
    "diskIoRateAverageKbps": "string",
    "diskIoRateMax": "string",
    "diskIoRateMaxKbps": "string",
    "memoryAverage": 0,
    "memoryAveragePercent": 0,
    "memoryMax": 0,
    "memoryMaxPercent": 0,
    "networkThroughputAverage": "string",
    "networkThroughputAverageKbps": "string",
    "networkThroughputMax": "string",
    "networkThroughputMaxKbps": "string"
  },
  "vmId": "string",
  "vmwareVmDetails": {
    "bootOption": "BOOT_OPTION_UNSPECIFIED",
    "committedStorage": "string",
    "committedStorageMb": "string",
    "cpuCount": 0,
    "datacenterDescription": "string",
    "datacenterId": "string",
    "diskCount": 0,
    "displayName": "string",
    "guestDescription": "string",
    "memoryMb": 0,
    "powerState": "POWER_STATE_UNSPECIFIED",
    "uuid": "string",
    "vmId": "string"
  }
}
```

Utilization information of a single VM.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|utilization|[VmUtilizationMetrics](#schemavmutilizationmetrics)|false|none|Utilization metrics for this VM.|
|vmId|string|false|none|The VM's ID in the source.|
|vmwareVmDetails|[VmwareVmDetails](#schemavmwarevmdetails)|false|none|The description of the VM in a Source of type Vmware.|

<h2 id="tocS_VmUtilizationMetrics">VmUtilizationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemavmutilizationmetrics"></a>
<a id="schema_VmUtilizationMetrics"></a>
<a id="tocSvmutilizationmetrics"></a>
<a id="tocsvmutilizationmetrics"></a>

```json
{
  "cpuAverage": 0,
  "cpuAveragePercent": 0,
  "cpuMax": 0,
  "cpuMaxPercent": 0,
  "diskIoRateAverage": "string",
  "diskIoRateAverageKbps": "string",
  "diskIoRateMax": "string",
  "diskIoRateMaxKbps": "string",
  "memoryAverage": 0,
  "memoryAveragePercent": 0,
  "memoryMax": 0,
  "memoryMaxPercent": 0,
  "networkThroughputAverage": "string",
  "networkThroughputAverageKbps": "string",
  "networkThroughputMax": "string",
  "networkThroughputMaxKbps": "string"
}
```

Utilization metrics values for a single VM.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpuAverage|integer(int32)|false|none|Average CPU usage, percent.|
|cpuAveragePercent|integer(int32)|false|none|Average CPU usage, percent.|
|cpuMax|integer(int32)|false|none|Max CPU usage, percent.|
|cpuMaxPercent|integer(int32)|false|none|Max CPU usage, percent.|
|diskIoRateAverage|string(int64)|false|none|Average disk IO rate, in kilobytes per second.|
|diskIoRateAverageKbps|string(int64)|false|none|Average disk IO rate, in kilobytes per second.|
|diskIoRateMax|string(int64)|false|none|Max disk IO rate, in kilobytes per second.|
|diskIoRateMaxKbps|string(int64)|false|none|Max disk IO rate, in kilobytes per second.|
|memoryAverage|integer(int32)|false|none|Average memory usage, percent.|
|memoryAveragePercent|integer(int32)|false|none|Average memory usage, percent.|
|memoryMax|integer(int32)|false|none|Max memory usage, percent.|
|memoryMaxPercent|integer(int32)|false|none|Max memory usage, percent.|
|networkThroughputAverage|string(int64)|false|none|Average network throughput (combined transmit-rates and receive-rates), in kilobytes per second.|
|networkThroughputAverageKbps|string(int64)|false|none|Average network throughput (combined transmit-rates and receive-rates), in kilobytes per second.|
|networkThroughputMax|string(int64)|false|none|Max network throughput (combined transmit-rates and receive-rates), in kilobytes per second.|
|networkThroughputMaxKbps|string(int64)|false|none|Max network throughput (combined transmit-rates and receive-rates), in kilobytes per second.|

<h2 id="tocS_VmwareSourceDetails">VmwareSourceDetails</h2>
<!-- backwards compatibility -->
<a id="schemavmwaresourcedetails"></a>
<a id="schema_VmwareSourceDetails"></a>
<a id="tocSvmwaresourcedetails"></a>
<a id="tocsvmwaresourcedetails"></a>

```json
{
  "password": "string",
  "thumbprint": "string",
  "username": "string",
  "vcenterIp": "string"
}
```

VmwareSourceDetails message describes a specific source details for the vmware source type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|false|none|Input only. The credentials password. This is write only and can not be read in a GET operation.|
|thumbprint|string|false|none|The thumbprint representing the certificate for the vcenter.|
|username|string|false|none|The credentials username.|
|vcenterIp|string|false|none|The ip address of the vcenter this Source represents.|

<h2 id="tocS_VmwareVmDetails">VmwareVmDetails</h2>
<!-- backwards compatibility -->
<a id="schemavmwarevmdetails"></a>
<a id="schema_VmwareVmDetails"></a>
<a id="tocSvmwarevmdetails"></a>
<a id="tocsvmwarevmdetails"></a>

```json
{
  "bootOption": "BOOT_OPTION_UNSPECIFIED",
  "committedStorage": "string",
  "committedStorageMb": "string",
  "cpuCount": 0,
  "datacenterDescription": "string",
  "datacenterId": "string",
  "diskCount": 0,
  "displayName": "string",
  "guestDescription": "string",
  "memoryMb": 0,
  "powerState": "POWER_STATE_UNSPECIFIED",
  "uuid": "string",
  "vmId": "string"
}
```

VmwareVmDetails describes a VM in vCenter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bootOption|string|false|read-only|Output only. The VM Boot Option.|
|committedStorage|string(int64)|false|none|The total size of the storage allocated to the VM in MB.|
|committedStorageMb|string(int64)|false|none|The total size of the storage allocated to the VM in MB.|
|cpuCount|integer(int32)|false|none|The number of cpus in the VM.|
|datacenterDescription|string|false|none|The descriptive name of the vCenter's datacenter this VM is contained in.|
|datacenterId|string|false|none|The id of the vCenter's datacenter this VM is contained in.|
|diskCount|integer(int32)|false|none|The number of disks the VM has.|
|displayName|string|false|none|The display name of the VM. Note that this is not necessarily unique.|
|guestDescription|string|false|none|The VM's OS. See for example https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html for types of strings this might hold.|
|memoryMb|integer(int32)|false|none|The size of the memory of the VM in MB.|
|powerState|string|false|none|The power state of the VM at the moment list was taken.|
|uuid|string|false|none|The unique identifier of the VM in vCenter.|
|vmId|string|false|none|The VM's id in the source (note that this is not the MigratingVm's id). This is the moref id of the VM.|

#### Enumerated Values

|Property|Value|
|---|---|
|bootOption|BOOT_OPTION_UNSPECIFIED|
|bootOption|EFI|
|bootOption|BIOS|
|powerState|POWER_STATE_UNSPECIFIED|
|powerState|ON|
|powerState|OFF|
|powerState|SUSPENDED|

<h2 id="tocS_VmwareVmsDetails">VmwareVmsDetails</h2>
<!-- backwards compatibility -->
<a id="schemavmwarevmsdetails"></a>
<a id="schema_VmwareVmsDetails"></a>
<a id="tocSvmwarevmsdetails"></a>
<a id="tocsvmwarevmsdetails"></a>

```json
{
  "details": [
    {
      "bootOption": "BOOT_OPTION_UNSPECIFIED",
      "committedStorage": "string",
      "committedStorageMb": "string",
      "cpuCount": 0,
      "datacenterDescription": "string",
      "datacenterId": "string",
      "diskCount": 0,
      "displayName": "string",
      "guestDescription": "string",
      "memoryMb": 0,
      "powerState": "POWER_STATE_UNSPECIFIED",
      "uuid": "string",
      "vmId": "string"
    }
  ]
}
```

VmwareVmsDetails describes VMs in vCenter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[[VmwareVmDetails](#schemavmwarevmdetails)]|false|none|The details of the vmware VMs.|
