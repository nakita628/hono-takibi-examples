<h1 id="dataform-api">Dataform API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://dataform.googleapis.com/">https://dataform.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/dataform/docs">External documentation</a>

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

<h1 id="dataform-api-projects">projects</h1>

## dataform.projects.locations.repositories.workspaces.get

<a id="opIddataform.projects.locations.repositories.workspaces.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Fetches a single Workspace.

<h3 id="dataformprojectslocationsrepositoriesworkspacesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The workspace's name.|
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
  "name": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Workspace](#schemaworkspace)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.delete

<a id="opIddataform.projects.locations.repositories.workspaces.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes a single Workspace.

<h3 id="dataformprojectslocationsrepositoriesworkspacesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The workspace resource's name.|
|force|query|boolean|false|If set to true, any child resources of this repository will also be deleted. (Otherwise, the request will only succeed if the repository has no child resources.)|
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

<h3 id="dataformprojectslocationsrepositoriesworkspacesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workflowConfigs.patch

<a id="opIddataform.projects.locations.repositories.workflowConfigs.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cronSchedule": "string",
    "invocationConfig": {
      "fullyRefreshIncrementalTablesEnabled": true,
      "includedTags": [
        "string"
      ],
      "includedTargets": [
        {
          "database": "string",
          "name": "string",
          "schema": "string"
        }
      ],
      "transitiveDependenciesIncluded": true,
      "transitiveDependentsIncluded": true
    },
    "releaseConfig": "string",
    "timeZone": "string"
  }'
```

`PATCH /v1beta1/{name}`

Updates a single WorkflowConfig.

> Body parameter

```json
{
  "cronSchedule": "string",
  "invocationConfig": {
    "fullyRefreshIncrementalTablesEnabled": true,
    "includedTags": [
      "string"
    ],
    "includedTargets": [
      {
        "database": "string",
        "name": "string",
        "schema": "string"
      }
    ],
    "transitiveDependenciesIncluded": true,
    "transitiveDependentsIncluded": true
  },
  "releaseConfig": "string",
  "timeZone": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkflowconfigspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The workflow config's name.|
|updateMask|query|string|false|Optional. Specifies the fields to be updated in the workflow config. If left unset, all fields will be updated.|
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
|body|body|[WorkflowConfig](#schemaworkflowconfig)|false|none|
|» cronSchedule|body|string|false|Optional. Optional schedule (in cron format) for automatic execution of this workflow config.|
|» invocationConfig|body|[InvocationConfig](#schemainvocationconfig)|false|Optional. If left unset, a default InvocationConfig will be used.|
|» releaseConfig|body|string|false|Required. The name of the release config whose release_compilation_result should be executed. Must be in the format `projects/*/locations/*/repositories/*/releaseConfigs/*`.|
|» timeZone|body|string|false|Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.|

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
  "cronSchedule": "string",
  "invocationConfig": {
    "fullyRefreshIncrementalTablesEnabled": true,
    "includedTags": [
      "string"
    ],
    "includedTargets": [
      {
        "database": "string",
        "name": "string",
        "schema": "string"
      }
    ],
    "transitiveDependenciesIncluded": true,
    "transitiveDependentsIncluded": true
  },
  "name": "string",
  "recentScheduledExecutionRecords": [
    {
      "errorStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "executionTime": "string",
      "workflowInvocation": "string"
    }
  ],
  "releaseConfig": "string",
  "timeZone": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkflowconfigspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WorkflowConfig](#schemaworkflowconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.list

<a id="opIddataform.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="dataformprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="dataformprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workflowInvocations.cancel

<a id="opIddataform.projects.locations.repositories.workflowInvocations.cancel"></a>

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

Requests cancellation of a running WorkflowInvocation.

> Body parameter

```json
{}
```

<h3 id="dataformprojectslocationsrepositoriesworkflowinvocationscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The workflow invocation resource's name.|
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
|body|body|[CancelWorkflowInvocationRequest](#schemacancelworkflowinvocationrequest)|false|none|

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

<h3 id="dataformprojectslocationsrepositoriesworkflowinvocationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.commit

<a id="opIddataform.projects.locations.repositories.workspaces.commit"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:commit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "author": {
      "emailAddress": "string",
      "name": "string"
    },
    "commitMessage": "string",
    "paths": [
      "string"
    ]
  }'
```

`POST /v1beta1/{name}:commit`

Applies a Git commit for uncommitted files in a Workspace.

> Body parameter

```json
{
  "author": {
    "emailAddress": "string",
    "name": "string"
  },
  "commitMessage": "string",
  "paths": [
    "string"
  ]
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacescommit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The workspace's name.|
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
|body|body|[CommitWorkspaceChangesRequest](#schemacommitworkspacechangesrequest)|false|none|
|» author|body|[CommitAuthor](#schemacommitauthor)|false|Required. The commit's author.|
|» commitMessage|body|string|false|Optional. The commit's message.|
|» paths|body|[string]|false|Optional. Full file paths to commit including filename, rooted at workspace root. If left empty, all files will be committed.|

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

<h3 id="dataformprojectslocationsrepositoriesworkspacescommit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.fetchFileGitStatuses

<a id="opIddataform.projects.locations.repositories.workspaces.fetchFileGitStatuses"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:fetchFileGitStatuses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}:fetchFileGitStatuses`

Fetches Git statuses for the files in a Workspace.

<h3 id="dataformprojectslocationsrepositoriesworkspacesfetchfilegitstatuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The workspace's name.|
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
  "uncommittedFileChanges": [
    {
      "path": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacesfetchfilegitstatuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FetchFileGitStatusesResponse](#schemafetchfilegitstatusesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.fetchGitAheadBehind

<a id="opIddataform.projects.locations.repositories.workspaces.fetchGitAheadBehind"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:fetchGitAheadBehind \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}:fetchGitAheadBehind`

Fetches Git ahead/behind against a remote branch.

<h3 id="dataformprojectslocationsrepositoriesworkspacesfetchgitaheadbehind-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The workspace's name.|
|remoteBranch|query|string|false|Optional. The name of the branch in the Git remote against which this workspace should be compared. If left unset, the repository's default branch name will be used.|
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
  "commitsAhead": 0,
  "commitsBehind": 0
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacesfetchgitaheadbehind-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FetchGitAheadBehindResponse](#schemafetchgitaheadbehindresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.fetchRemoteBranches

<a id="opIddataform.projects.locations.repositories.fetchRemoteBranches"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:fetchRemoteBranches \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}:fetchRemoteBranches`

Fetches a Repository's remote branches.

<h3 id="dataformprojectslocationsrepositoriesfetchremotebranches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The repository's name.|
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
  "branches": [
    "string"
  ]
}
```

<h3 id="dataformprojectslocationsrepositoriesfetchremotebranches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FetchRemoteBranchesResponse](#schemafetchremotebranchesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.pull

<a id="opIddataform.projects.locations.repositories.workspaces.pull"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:pull \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "author": {
      "emailAddress": "string",
      "name": "string"
    },
    "remoteBranch": "string"
  }'
```

`POST /v1beta1/{name}:pull`

Pulls Git commits from the Repository's remote into a Workspace.

> Body parameter

```json
{
  "author": {
    "emailAddress": "string",
    "name": "string"
  },
  "remoteBranch": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacespull-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The workspace's name.|
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
|body|body|[PullGitCommitsRequest](#schemapullgitcommitsrequest)|false|none|
|» author|body|[CommitAuthor](#schemacommitauthor)|false|Required. The author of any merge commit which may be created as a result of merging fetched Git commits into this workspace.|
|» remoteBranch|body|string|false|Optional. The name of the branch in the Git remote from which to pull commits. If left unset, the repository's default branch name will be used.|

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

<h3 id="dataformprojectslocationsrepositoriesworkspacespull-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.push

<a id="opIddataform.projects.locations.repositories.workspaces.push"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:push \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "remoteBranch": "string"
  }'
```

`POST /v1beta1/{name}:push`

Pushes Git commits from a Workspace to the Repository's remote.

> Body parameter

```json
{
  "remoteBranch": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacespush-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The workspace's name.|
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
|body|body|[PushGitCommitsRequest](#schemapushgitcommitsrequest)|false|none|
|» remoteBranch|body|string|false|Optional. The name of the branch in the Git remote to which commits should be pushed. If left unset, the repository's default branch name will be used.|

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

<h3 id="dataformprojectslocationsrepositoriesworkspacespush-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workflowInvocations.query

<a id="opIddataform.projects.locations.repositories.workflowInvocations.query"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:query \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}:query`

Returns WorkflowInvocationActions in a given WorkflowInvocation.

<h3 id="dataformprojectslocationsrepositoriesworkflowinvocationsquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The workflow invocation's name.|
|pageSize|query|integer|false|Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|Optional. Page token received from a previous `QueryWorkflowInvocationActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryWorkflowInvocationActions` must match the call that provided the page token.|
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
  "workflowInvocationActions": [
    {
      "bigqueryAction": {
        "sqlScript": "string"
      },
      "canonicalTarget": {
        "database": "string",
        "name": "string",
        "schema": "string"
      },
      "failureReason": "string",
      "invocationTiming": {
        "endTime": "string",
        "startTime": "string"
      },
      "state": "PENDING",
      "target": {
        "database": "string",
        "name": "string",
        "schema": "string"
      }
    }
  ]
}
```

<h3 id="dataformprojectslocationsrepositoriesworkflowinvocationsquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[QueryWorkflowInvocationActionsResponse](#schemaqueryworkflowinvocationactionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.reset

<a id="opIddataform.projects.locations.repositories.workspaces.reset"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:reset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clean": true,
    "paths": [
      "string"
    ]
  }'
```

`POST /v1beta1/{name}:reset`

Performs a Git reset for uncommitted files in a Workspace.

> Body parameter

```json
{
  "clean": true,
  "paths": [
    "string"
  ]
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacesreset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The workspace's name.|
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
|body|body|[ResetWorkspaceChangesRequest](#schemaresetworkspacechangesrequest)|false|none|
|» clean|body|boolean|false|Optional. If set to true, untracked files will be deleted.|
|» paths|body|[string]|false|Optional. Full file paths to reset back to their committed state including filename, rooted at workspace root. If left empty, all files will be reset.|

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

<h3 id="dataformprojectslocationsrepositoriesworkspacesreset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.compilationResults.list

<a id="opIddataform.projects.locations.repositories.compilationResults.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/compilationResults \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/compilationResults`

Lists CompilationResults in a given Repository.

<h3 id="dataformprojectslocationsrepositoriescompilationresultslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The repository in which to list compilation results. Must be in the format `projects/*/locations/*/repositories/*`.|
|pageSize|query|integer|false|Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|Optional. Page token received from a previous `ListCompilationResults` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCompilationResults` must match the call that provided the page token.|
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
  "compilationResults": [
    {
      "codeCompilationConfig": {
        "assertionSchema": "string",
        "databaseSuffix": "string",
        "defaultDatabase": "string",
        "defaultLocation": "string",
        "defaultSchema": "string",
        "schemaSuffix": "string",
        "tablePrefix": "string",
        "vars": {
          "property1": "string",
          "property2": "string"
        }
      },
      "compilationErrors": [
        {
          "actionTarget": {
            "database": "string",
            "name": "string",
            "schema": "string"
          },
          "message": "string",
          "path": "string",
          "stack": "string"
        }
      ],
      "dataformCoreVersion": "string",
      "gitCommitish": "string",
      "name": "string",
      "releaseConfig": "string",
      "resolvedGitCommitSha": "string",
      "workspace": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="dataformprojectslocationsrepositoriescompilationresultslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCompilationResultsResponse](#schemalistcompilationresultsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.compilationResults.create

<a id="opIddataform.projects.locations.repositories.compilationResults.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/compilationResults \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "codeCompilationConfig": {
      "assertionSchema": "string",
      "databaseSuffix": "string",
      "defaultDatabase": "string",
      "defaultLocation": "string",
      "defaultSchema": "string",
      "schemaSuffix": "string",
      "tablePrefix": "string",
      "vars": {
        "property1": "string",
        "property2": "string"
      }
    },
    "gitCommitish": "string",
    "releaseConfig": "string",
    "workspace": "string"
  }'
```

`POST /v1beta1/{parent}/compilationResults`

Creates a new CompilationResult in a given project and location.

> Body parameter

```json
{
  "codeCompilationConfig": {
    "assertionSchema": "string",
    "databaseSuffix": "string",
    "defaultDatabase": "string",
    "defaultLocation": "string",
    "defaultSchema": "string",
    "schemaSuffix": "string",
    "tablePrefix": "string",
    "vars": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gitCommitish": "string",
  "releaseConfig": "string",
  "workspace": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriescompilationresultscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The repository in which to create the compilation result. Must be in the format `projects/*/locations/*/repositories/*`.|
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
|body|body|[CompilationResult](#schemacompilationresult)|false|none|
|» codeCompilationConfig|body|[CodeCompilationConfig](#schemacodecompilationconfig)|false|Immutable. If set, fields of `code_compilation_config` override the default compilation settings that are specified in dataform.json.|
|» gitCommitish|body|string|false|Immutable. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1`|
|» releaseConfig|body|string|false|Immutable. The name of the release config to compile. The release config's 'current_compilation_result' field will be updated to this compilation result. Must be in the format `projects/*/locations/*/repositories/*/releaseConfigs/*`.|
|» workspace|body|string|false|Immutable. The name of the workspace to compile. Must be in the format `projects/*/locations/*/repositories/*/workspaces/*`.|

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
  "codeCompilationConfig": {
    "assertionSchema": "string",
    "databaseSuffix": "string",
    "defaultDatabase": "string",
    "defaultLocation": "string",
    "defaultSchema": "string",
    "schemaSuffix": "string",
    "tablePrefix": "string",
    "vars": {
      "property1": "string",
      "property2": "string"
    }
  },
  "compilationErrors": [
    {
      "actionTarget": {
        "database": "string",
        "name": "string",
        "schema": "string"
      },
      "message": "string",
      "path": "string",
      "stack": "string"
    }
  ],
  "dataformCoreVersion": "string",
  "gitCommitish": "string",
  "name": "string",
  "releaseConfig": "string",
  "resolvedGitCommitSha": "string",
  "workspace": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriescompilationresultscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CompilationResult](#schemacompilationresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.releaseConfigs.list

<a id="opIddataform.projects.locations.repositories.releaseConfigs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/releaseConfigs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/releaseConfigs`

Lists ReleaseConfigs in a given Repository.

<h3 id="dataformprojectslocationsrepositoriesreleaseconfigslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The repository in which to list release configs. Must be in the format `projects/*/locations/*/repositories/*`.|
|pageSize|query|integer|false|Optional. Maximum number of release configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|Optional. Page token received from a previous `ListReleaseConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReleaseConfigs` must match the call that provided the page token.|
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
  "releaseConfigs": [
    {
      "codeCompilationConfig": {
        "assertionSchema": "string",
        "databaseSuffix": "string",
        "defaultDatabase": "string",
        "defaultLocation": "string",
        "defaultSchema": "string",
        "schemaSuffix": "string",
        "tablePrefix": "string",
        "vars": {
          "property1": "string",
          "property2": "string"
        }
      },
      "cronSchedule": "string",
      "gitCommitish": "string",
      "name": "string",
      "recentScheduledReleaseRecords": [
        {
          "compilationResult": "string",
          "errorStatus": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "releaseTime": "string"
        }
      ],
      "releaseCompilationResult": "string",
      "timeZone": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="dataformprojectslocationsrepositoriesreleaseconfigslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListReleaseConfigsResponse](#schemalistreleaseconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.releaseConfigs.create

<a id="opIddataform.projects.locations.repositories.releaseConfigs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/releaseConfigs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "codeCompilationConfig": {
      "assertionSchema": "string",
      "databaseSuffix": "string",
      "defaultDatabase": "string",
      "defaultLocation": "string",
      "defaultSchema": "string",
      "schemaSuffix": "string",
      "tablePrefix": "string",
      "vars": {
        "property1": "string",
        "property2": "string"
      }
    },
    "cronSchedule": "string",
    "gitCommitish": "string",
    "releaseCompilationResult": "string",
    "timeZone": "string"
  }'
```

`POST /v1beta1/{parent}/releaseConfigs`

Creates a new ReleaseConfig in a given Repository.

> Body parameter

```json
{
  "codeCompilationConfig": {
    "assertionSchema": "string",
    "databaseSuffix": "string",
    "defaultDatabase": "string",
    "defaultLocation": "string",
    "defaultSchema": "string",
    "schemaSuffix": "string",
    "tablePrefix": "string",
    "vars": {
      "property1": "string",
      "property2": "string"
    }
  },
  "cronSchedule": "string",
  "gitCommitish": "string",
  "releaseCompilationResult": "string",
  "timeZone": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesreleaseconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The repository in which to create the release config. Must be in the format `projects/*/locations/*/repositories/*`.|
|releaseConfigId|query|string|false|Required. The ID to use for the release config, which will become the final component of the release config's resource name.|
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
|body|body|[ReleaseConfig](#schemareleaseconfig)|false|none|
|» codeCompilationConfig|body|[CodeCompilationConfig](#schemacodecompilationconfig)|false|Optional. If set, fields of `code_compilation_config` override the default compilation settings that are specified in dataform.json.|
|» cronSchedule|body|string|false|Optional. Optional schedule (in cron format) for automatic creation of compilation results.|
|» gitCommitish|body|string|false|Required. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1`|
|» releaseCompilationResult|body|string|false|Optional. The name of the currently released compilation result for this release config. This value is updated when a compilation result is created from this release config, or when this resource is updated by API call (perhaps to roll back to an earlier release). The compilation result must have been created using this release config. Must be in the format `projects/*/locations/*/repositories/*/compilationResults/*`.|
|» timeZone|body|string|false|Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.|

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
  "codeCompilationConfig": {
    "assertionSchema": "string",
    "databaseSuffix": "string",
    "defaultDatabase": "string",
    "defaultLocation": "string",
    "defaultSchema": "string",
    "schemaSuffix": "string",
    "tablePrefix": "string",
    "vars": {
      "property1": "string",
      "property2": "string"
    }
  },
  "cronSchedule": "string",
  "gitCommitish": "string",
  "name": "string",
  "recentScheduledReleaseRecords": [
    {
      "compilationResult": "string",
      "errorStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "releaseTime": "string"
    }
  ],
  "releaseCompilationResult": "string",
  "timeZone": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesreleaseconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReleaseConfig](#schemareleaseconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.list

<a id="opIddataform.projects.locations.repositories.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/repositories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/repositories`

Lists Repositories in a given project and location.

<h3 id="dataformprojectslocationsrepositorieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The location in which to list repositories. Must be in the format `projects/*/locations/*`.|
|filter|query|string|false|Optional. Filter for the returned list.|
|orderBy|query|string|false|Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.|
|pageSize|query|integer|false|Optional. Maximum number of repositories to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|Optional. Page token received from a previous `ListRepositories` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRepositories` must match the call that provided the page token.|
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
  "repositories": [
    {
      "gitRemoteSettings": {
        "authenticationTokenSecretVersion": "string",
        "defaultBranch": "string",
        "tokenStatus": "TOKEN_STATUS_UNSPECIFIED",
        "url": "string"
      },
      "name": "string",
      "npmrcEnvironmentVariablesSecretVersion": "string",
      "workspaceCompilationOverrides": {
        "defaultDatabase": "string",
        "schemaSuffix": "string",
        "tablePrefix": "string"
      }
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="dataformprojectslocationsrepositorieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListRepositoriesResponse](#schemalistrepositoriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.create

<a id="opIddataform.projects.locations.repositories.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/repositories \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "gitRemoteSettings": {
      "authenticationTokenSecretVersion": "string",
      "defaultBranch": "string",
      "url": "string"
    },
    "npmrcEnvironmentVariablesSecretVersion": "string",
    "workspaceCompilationOverrides": {
      "defaultDatabase": "string",
      "schemaSuffix": "string",
      "tablePrefix": "string"
    }
  }'
```

`POST /v1beta1/{parent}/repositories`

Creates a new Repository in a given project and location.

> Body parameter

```json
{
  "gitRemoteSettings": {
    "authenticationTokenSecretVersion": "string",
    "defaultBranch": "string",
    "url": "string"
  },
  "npmrcEnvironmentVariablesSecretVersion": "string",
  "workspaceCompilationOverrides": {
    "defaultDatabase": "string",
    "schemaSuffix": "string",
    "tablePrefix": "string"
  }
}
```

<h3 id="dataformprojectslocationsrepositoriescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The location in which to create the repository. Must be in the format `projects/*/locations/*`.|
|repositoryId|query|string|false|Required. The ID to use for the repository, which will become the final component of the repository's resource name.|
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
|body|body|[Repository](#schemarepository)|false|none|
|» gitRemoteSettings|body|[GitRemoteSettings](#schemagitremotesettings)|false|Optional. If set, configures this repository to be linked to a Git remote.|
|» npmrcEnvironmentVariablesSecretVersion|body|string|false|Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format `projects/*/secrets/*/versions/*`. The file itself must be in a JSON format.|
|» workspaceCompilationOverrides|body|[WorkspaceCompilationOverrides](#schemaworkspacecompilationoverrides)|false|Optional. If set, fields of `workspace_compilation_overrides` override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results. See documentation for `WorkspaceCompilationOverrides` for more information.|

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
  "gitRemoteSettings": {
    "authenticationTokenSecretVersion": "string",
    "defaultBranch": "string",
    "tokenStatus": "TOKEN_STATUS_UNSPECIFIED",
    "url": "string"
  },
  "name": "string",
  "npmrcEnvironmentVariablesSecretVersion": "string",
  "workspaceCompilationOverrides": {
    "defaultDatabase": "string",
    "schemaSuffix": "string",
    "tablePrefix": "string"
  }
}
```

<h3 id="dataformprojectslocationsrepositoriescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Repository](#schemarepository)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workflowConfigs.list

<a id="opIddataform.projects.locations.repositories.workflowConfigs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/workflowConfigs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/workflowConfigs`

Lists WorkflowConfigs in a given Repository.

<h3 id="dataformprojectslocationsrepositoriesworkflowconfigslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The repository in which to list workflow configs. Must be in the format `projects/*/locations/*/repositories/*`.|
|pageSize|query|integer|false|Optional. Maximum number of workflow configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|Optional. Page token received from a previous `ListWorkflowConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowConfigs` must match the call that provided the page token.|
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
  "unreachable": [
    "string"
  ],
  "workflowConfigs": [
    {
      "cronSchedule": "string",
      "invocationConfig": {
        "fullyRefreshIncrementalTablesEnabled": true,
        "includedTags": [
          "string"
        ],
        "includedTargets": [
          {
            "database": "string",
            "name": "string",
            "schema": "string"
          }
        ],
        "transitiveDependenciesIncluded": true,
        "transitiveDependentsIncluded": true
      },
      "name": "string",
      "recentScheduledExecutionRecords": [
        {
          "errorStatus": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "executionTime": "string",
          "workflowInvocation": "string"
        }
      ],
      "releaseConfig": "string",
      "timeZone": "string"
    }
  ]
}
```

<h3 id="dataformprojectslocationsrepositoriesworkflowconfigslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListWorkflowConfigsResponse](#schemalistworkflowconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workflowConfigs.create

<a id="opIddataform.projects.locations.repositories.workflowConfigs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/workflowConfigs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cronSchedule": "string",
    "invocationConfig": {
      "fullyRefreshIncrementalTablesEnabled": true,
      "includedTags": [
        "string"
      ],
      "includedTargets": [
        {
          "database": "string",
          "name": "string",
          "schema": "string"
        }
      ],
      "transitiveDependenciesIncluded": true,
      "transitiveDependentsIncluded": true
    },
    "releaseConfig": "string",
    "timeZone": "string"
  }'
```

`POST /v1beta1/{parent}/workflowConfigs`

Creates a new WorkflowConfig in a given Repository.

> Body parameter

```json
{
  "cronSchedule": "string",
  "invocationConfig": {
    "fullyRefreshIncrementalTablesEnabled": true,
    "includedTags": [
      "string"
    ],
    "includedTargets": [
      {
        "database": "string",
        "name": "string",
        "schema": "string"
      }
    ],
    "transitiveDependenciesIncluded": true,
    "transitiveDependentsIncluded": true
  },
  "releaseConfig": "string",
  "timeZone": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkflowconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The repository in which to create the workflow config. Must be in the format `projects/*/locations/*/repositories/*`.|
|workflowConfigId|query|string|false|Required. The ID to use for the workflow config, which will become the final component of the workflow config's resource name.|
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
|body|body|[WorkflowConfig](#schemaworkflowconfig)|false|none|
|» cronSchedule|body|string|false|Optional. Optional schedule (in cron format) for automatic execution of this workflow config.|
|» invocationConfig|body|[InvocationConfig](#schemainvocationconfig)|false|Optional. If left unset, a default InvocationConfig will be used.|
|» releaseConfig|body|string|false|Required. The name of the release config whose release_compilation_result should be executed. Must be in the format `projects/*/locations/*/repositories/*/releaseConfigs/*`.|
|» timeZone|body|string|false|Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.|

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
  "cronSchedule": "string",
  "invocationConfig": {
    "fullyRefreshIncrementalTablesEnabled": true,
    "includedTags": [
      "string"
    ],
    "includedTargets": [
      {
        "database": "string",
        "name": "string",
        "schema": "string"
      }
    ],
    "transitiveDependenciesIncluded": true,
    "transitiveDependentsIncluded": true
  },
  "name": "string",
  "recentScheduledExecutionRecords": [
    {
      "errorStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "executionTime": "string",
      "workflowInvocation": "string"
    }
  ],
  "releaseConfig": "string",
  "timeZone": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkflowconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WorkflowConfig](#schemaworkflowconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workflowInvocations.list

<a id="opIddataform.projects.locations.repositories.workflowInvocations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/workflowInvocations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/workflowInvocations`

Lists WorkflowInvocations in a given Repository.

<h3 id="dataformprojectslocationsrepositoriesworkflowinvocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the WorkflowInvocation type. Must be in the format `projects/*/locations/*/repositories/*`.|
|filter|query|string|false|Optional. Filter for the returned list.|
|orderBy|query|string|false|Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.|
|pageSize|query|integer|false|Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|Optional. Page token received from a previous `ListWorkflowInvocations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowInvocations` must match the call that provided the page token.|
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
  "unreachable": [
    "string"
  ],
  "workflowInvocations": [
    {
      "compilationResult": "string",
      "invocationConfig": {
        "fullyRefreshIncrementalTablesEnabled": true,
        "includedTags": [
          "string"
        ],
        "includedTargets": [
          {
            "database": "string",
            "name": "string",
            "schema": "string"
          }
        ],
        "transitiveDependenciesIncluded": true,
        "transitiveDependentsIncluded": true
      },
      "invocationTiming": {
        "endTime": "string",
        "startTime": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "workflowConfig": "string"
    }
  ]
}
```

<h3 id="dataformprojectslocationsrepositoriesworkflowinvocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListWorkflowInvocationsResponse](#schemalistworkflowinvocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workflowInvocations.create

<a id="opIddataform.projects.locations.repositories.workflowInvocations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/workflowInvocations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "compilationResult": "string",
    "invocationConfig": {
      "fullyRefreshIncrementalTablesEnabled": true,
      "includedTags": [
        "string"
      ],
      "includedTargets": [
        {
          "database": "string",
          "name": "string",
          "schema": "string"
        }
      ],
      "transitiveDependenciesIncluded": true,
      "transitiveDependentsIncluded": true
    },
    "workflowConfig": "string"
  }'
```

`POST /v1beta1/{parent}/workflowInvocations`

Creates a new WorkflowInvocation in a given Repository.

> Body parameter

```json
{
  "compilationResult": "string",
  "invocationConfig": {
    "fullyRefreshIncrementalTablesEnabled": true,
    "includedTags": [
      "string"
    ],
    "includedTargets": [
      {
        "database": "string",
        "name": "string",
        "schema": "string"
      }
    ],
    "transitiveDependenciesIncluded": true,
    "transitiveDependentsIncluded": true
  },
  "workflowConfig": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkflowinvocationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The repository in which to create the workflow invocation. Must be in the format `projects/*/locations/*/repositories/*`.|
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
|body|body|[WorkflowInvocation](#schemaworkflowinvocation)|false|none|
|» compilationResult|body|string|false|Immutable. The name of the compilation result to compile. Must be in the format `projects/*/locations/*/repositories/*/compilationResults/*`.|
|» invocationConfig|body|[InvocationConfig](#schemainvocationconfig)|false|Immutable. If left unset, a default InvocationConfig will be used.|
|» workflowConfig|body|string|false|Immutable. The name of the workflow config to invoke. Must be in the format `projects/*/locations/*/repositories/*/workflowConfigs/*`.|

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
  "compilationResult": "string",
  "invocationConfig": {
    "fullyRefreshIncrementalTablesEnabled": true,
    "includedTags": [
      "string"
    ],
    "includedTargets": [
      {
        "database": "string",
        "name": "string",
        "schema": "string"
      }
    ],
    "transitiveDependenciesIncluded": true,
    "transitiveDependentsIncluded": true
  },
  "invocationTiming": {
    "endTime": "string",
    "startTime": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "workflowConfig": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkflowinvocationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WorkflowInvocation](#schemaworkflowinvocation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.list

<a id="opIddataform.projects.locations.repositories.workspaces.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/workspaces \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/workspaces`

Lists Workspaces in a given Repository.

<h3 id="dataformprojectslocationsrepositoriesworkspaceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The repository in which to list workspaces. Must be in the format `projects/*/locations/*/repositories/*`.|
|filter|query|string|false|Optional. Filter for the returned list.|
|orderBy|query|string|false|Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.|
|pageSize|query|integer|false|Optional. Maximum number of workspaces to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|Optional. Page token received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces` must match the call that provided the page token.|
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
  "unreachable": [
    "string"
  ],
  "workspaces": [
    {
      "name": "string"
    }
  ]
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspaceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListWorkspacesResponse](#schemalistworkspacesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.create

<a id="opIddataform.projects.locations.repositories.workspaces.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/workspaces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{parent}/workspaces`

Creates a new Workspace in a given Repository.

> Body parameter

```json
{}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The repository in which to create the workspace. Must be in the format `projects/*/locations/*/repositories/*`.|
|workspaceId|query|string|false|Required. The ID to use for the workspace, which will become the final component of the workspace's resource name.|
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
|body|body|[Workspace](#schemaworkspace)|false|none|

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
  "name": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Workspace](#schemaworkspace)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.getIamPolicy

<a id="opIddataform.projects.locations.repositories.workspaces.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="dataformprojectslocationsrepositoriesworkspacesgetiampolicy-parameters">Parameters</h3>

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

<h3 id="dataformprojectslocationsrepositoriesworkspacesgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.setIamPolicy

<a id="opIddataform.projects.locations.repositories.workspaces.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
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
  }'
```

`POST /v1beta1/{resource}:setIamPolicy`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

> Body parameter

```json
{
  "policy": {
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
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacessetiampolicy-parameters">Parameters</h3>

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

<h3 id="dataformprojectslocationsrepositoriesworkspacessetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.testIamPermissions

<a id="opIddataform.projects.locations.repositories.workspaces.testIamPermissions"></a>

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

<h3 id="dataformprojectslocationsrepositoriesworkspacestestiampermissions-parameters">Parameters</h3>

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

<h3 id="dataformprojectslocationsrepositoriesworkspacestestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.fetchFileDiff

<a id="opIddataform.projects.locations.repositories.workspaces.fetchFileDiff"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:fetchFileDiff \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{workspace}:fetchFileDiff`

Fetches Git diff for an uncommitted file in a Workspace.

<h3 id="dataformprojectslocationsrepositoriesworkspacesfetchfilediff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace|path|string|true|Required. The workspace's name.|
|path|query|string|false|Required. The file's full path including filename, relative to the workspace root.|
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
  "formattedDiff": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacesfetchfilediff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FetchFileDiffResponse](#schemafetchfilediffresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.installNpmPackages

<a id="opIddataform.projects.locations.repositories.workspaces.installNpmPackages"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:installNpmPackages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{workspace}:installNpmPackages`

Installs dependency NPM packages (inside a Workspace).

> Body parameter

```json
{}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacesinstallnpmpackages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace|path|string|true|Required. The workspace's name.|
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
|body|body|[InstallNpmPackagesRequest](#schemainstallnpmpackagesrequest)|false|none|

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

<h3 id="dataformprojectslocationsrepositoriesworkspacesinstallnpmpackages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[InstallNpmPackagesResponse](#schemainstallnpmpackagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.makeDirectory

<a id="opIddataform.projects.locations.repositories.workspaces.makeDirectory"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:makeDirectory \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "path": "string"
  }'
```

`POST /v1beta1/{workspace}:makeDirectory`

Creates a directory inside a Workspace.

> Body parameter

```json
{
  "path": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacesmakedirectory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace|path|string|true|Required. The workspace's name.|
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
|body|body|[MakeDirectoryRequest](#schemamakedirectoryrequest)|false|none|
|» path|body|string|false|Required. The directory's full path including directory name, relative to the workspace root.|

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

<h3 id="dataformprojectslocationsrepositoriesworkspacesmakedirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MakeDirectoryResponse](#schemamakedirectoryresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.moveDirectory

<a id="opIddataform.projects.locations.repositories.workspaces.moveDirectory"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:moveDirectory \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "newPath": "string",
    "path": "string"
  }'
```

`POST /v1beta1/{workspace}:moveDirectory`

Moves a directory (inside a Workspace), and all of its contents, to a new location.

> Body parameter

```json
{
  "newPath": "string",
  "path": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacesmovedirectory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace|path|string|true|Required. The workspace's name.|
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
|body|body|[MoveDirectoryRequest](#schemamovedirectoryrequest)|false|none|
|» newPath|body|string|false|Required. The new path for the directory including directory name, rooted at workspace root.|
|» path|body|string|false|Required. The directory's full path including directory name, relative to the workspace root.|

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

<h3 id="dataformprojectslocationsrepositoriesworkspacesmovedirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MoveDirectoryResponse](#schemamovedirectoryresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.moveFile

<a id="opIddataform.projects.locations.repositories.workspaces.moveFile"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:moveFile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "newPath": "string",
    "path": "string"
  }'
```

`POST /v1beta1/{workspace}:moveFile`

Moves a file (inside a Workspace) to a new location.

> Body parameter

```json
{
  "newPath": "string",
  "path": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacesmovefile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace|path|string|true|Required. The workspace's name.|
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
|body|body|[MoveFileRequest](#schemamovefilerequest)|false|none|
|» newPath|body|string|false|Required. The file's new path including filename, relative to the workspace root.|
|» path|body|string|false|Required. The file's full path including filename, relative to the workspace root.|

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

<h3 id="dataformprojectslocationsrepositoriesworkspacesmovefile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MoveFileResponse](#schemamovefileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.queryDirectoryContents

<a id="opIddataform.projects.locations.repositories.workspaces.queryDirectoryContents"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:queryDirectoryContents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{workspace}:queryDirectoryContents`

Returns the contents of a given Workspace directory.

<h3 id="dataformprojectslocationsrepositoriesworkspacesquerydirectorycontents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace|path|string|true|Required. The workspace's name.|
|pageSize|query|integer|false|Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|Optional. Page token received from a previous `QueryDirectoryContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryDirectoryContents` must match the call that provided the page token.|
|path|query|string|false|Optional. The directory's full path including directory name, relative to the workspace root. If left unset, the workspace root is used.|
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
  "directoryEntries": [
    {
      "directory": "string",
      "file": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacesquerydirectorycontents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[QueryDirectoryContentsResponse](#schemaquerydirectorycontentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.readFile

<a id="opIddataform.projects.locations.repositories.workspaces.readFile"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:readFile \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{workspace}:readFile`

Returns the contents of a file (inside a Workspace).

<h3 id="dataformprojectslocationsrepositoriesworkspacesreadfile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace|path|string|true|Required. The workspace's name.|
|path|query|string|false|Required. The file's full path including filename, relative to the workspace root.|
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
  "fileContents": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacesreadfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReadFileResponse](#schemareadfileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.removeDirectory

<a id="opIddataform.projects.locations.repositories.workspaces.removeDirectory"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:removeDirectory \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "path": "string"
  }'
```

`POST /v1beta1/{workspace}:removeDirectory`

Deletes a directory (inside a Workspace) and all of its contents.

> Body parameter

```json
{
  "path": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacesremovedirectory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace|path|string|true|Required. The workspace's name.|
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
|body|body|[RemoveDirectoryRequest](#schemaremovedirectoryrequest)|false|none|
|» path|body|string|false|Required. The directory's full path including directory name, relative to the workspace root.|

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

<h3 id="dataformprojectslocationsrepositoriesworkspacesremovedirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.removeFile

<a id="opIddataform.projects.locations.repositories.workspaces.removeFile"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:removeFile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "path": "string"
  }'
```

`POST /v1beta1/{workspace}:removeFile`

Deletes a file (inside a Workspace).

> Body parameter

```json
{
  "path": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspacesremovefile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace|path|string|true|Required. The workspace's name.|
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
|body|body|[RemoveFileRequest](#schemaremovefilerequest)|false|none|
|» path|body|string|false|Required. The file's full path including filename, relative to the workspace root.|

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

<h3 id="dataformprojectslocationsrepositoriesworkspacesremovefile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataform.projects.locations.repositories.workspaces.writeFile

<a id="opIddataform.projects.locations.repositories.workspaces.writeFile"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:writeFile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contents": "string",
    "path": "string"
  }'
```

`POST /v1beta1/{workspace}:writeFile`

Writes to a file (inside a Workspace).

> Body parameter

```json
{
  "contents": "string",
  "path": "string"
}
```

<h3 id="dataformprojectslocationsrepositoriesworkspaceswritefile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspace|path|string|true|Required. The workspace's name.|
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
|body|body|[WriteFileRequest](#schemawritefilerequest)|false|none|
|» contents|body|string(byte)|false|Required. The file's contents.|
|» path|body|string|false|Required. The file.|

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

<h3 id="dataformprojectslocationsrepositoriesworkspaceswritefile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WriteFileResponse](#schemawritefileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_Assertion">Assertion</h2>
<!-- backwards compatibility -->
<a id="schemaassertion"></a>
<a id="schema_Assertion"></a>
<a id="tocSassertion"></a>
<a id="tocsassertion"></a>

```json
{
  "dependencyTargets": [
    {
      "database": "string",
      "name": "string",
      "schema": "string"
    }
  ],
  "disabled": true,
  "parentAction": {
    "database": "string",
    "name": "string",
    "schema": "string"
  },
  "relationDescriptor": {
    "bigqueryLabels": {
      "property1": "string",
      "property2": "string"
    },
    "columns": [
      {
        "bigqueryPolicyTags": [
          "string"
        ],
        "description": "string",
        "path": [
          "string"
        ]
      }
    ],
    "description": "string"
  },
  "selectQuery": "string",
  "tags": [
    "string"
  ]
}
```

Represents an assertion upon a SQL query which is required return zero rows.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dependencyTargets|[[Target](#schematarget)]|false|none|A list of actions that this action depends on.|
|disabled|boolean|false|none|Whether this action is disabled (i.e. should not be run).|
|parentAction|[Target](#schematarget)|false|none|The parent action of this assertion. Only set if this assertion was automatically generated.|
|relationDescriptor|[RelationDescriptor](#schemarelationdescriptor)|false|none|Descriptor for the assertion's automatically-generated view and its columns.|
|selectQuery|string|false|none|The SELECT query which must return zero rows in order for this assertion to succeed.|
|tags|[string]|false|none|Arbitrary, user-defined tags on this action.|

<h2 id="tocS_BigQueryAction">BigQueryAction</h2>
<!-- backwards compatibility -->
<a id="schemabigqueryaction"></a>
<a id="schema_BigQueryAction"></a>
<a id="tocSbigqueryaction"></a>
<a id="tocsbigqueryaction"></a>

```json
{
  "sqlScript": "string"
}
```

Represents a workflow action that will run against BigQuery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sqlScript|string|false|read-only|Output only. The generated BigQuery SQL script that will be executed.|

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

<h2 id="tocS_CancelWorkflowInvocationRequest">CancelWorkflowInvocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelworkflowinvocationrequest"></a>
<a id="schema_CancelWorkflowInvocationRequest"></a>
<a id="tocScancelworkflowinvocationrequest"></a>
<a id="tocscancelworkflowinvocationrequest"></a>

```json
{}
```

`CancelWorkflowInvocation` request message.

<h2 id="tocS_CodeCompilationConfig">CodeCompilationConfig</h2>
<!-- backwards compatibility -->
<a id="schemacodecompilationconfig"></a>
<a id="schema_CodeCompilationConfig"></a>
<a id="tocScodecompilationconfig"></a>
<a id="tocscodecompilationconfig"></a>

```json
{
  "assertionSchema": "string",
  "databaseSuffix": "string",
  "defaultDatabase": "string",
  "defaultLocation": "string",
  "defaultSchema": "string",
  "schemaSuffix": "string",
  "tablePrefix": "string",
  "vars": {
    "property1": "string",
    "property2": "string"
  }
}
```

Configures various aspects of Dataform code compilation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assertionSchema|string|false|none|Optional. The default schema (BigQuery dataset ID) for assertions.|
|databaseSuffix|string|false|none|Optional. The suffix that should be appended to all database (Google Cloud project ID) names.|
|defaultDatabase|string|false|none|Optional. The default database (Google Cloud project ID).|
|defaultLocation|string|false|none|Optional. The default BigQuery location to use. Defaults to "US". See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.|
|defaultSchema|string|false|none|Optional. The default schema (BigQuery dataset ID).|
|schemaSuffix|string|false|none|Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.|
|tablePrefix|string|false|none|Optional. The prefix that should be prepended to all table names.|
|vars|object|false|none|Optional. User-defined variables that are made available to project code during compilation.|

<h2 id="tocS_ColumnDescriptor">ColumnDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemacolumndescriptor"></a>
<a id="schema_ColumnDescriptor"></a>
<a id="tocScolumndescriptor"></a>
<a id="tocscolumndescriptor"></a>

```json
{
  "bigqueryPolicyTags": [
    "string"
  ],
  "description": "string",
  "path": [
    "string"
  ]
}
```

Describes a column.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryPolicyTags|[string]|false|none|A list of BigQuery policy tags that will be applied to the column.|
|description|string|false|none|A textual description of the column.|
|path|[string]|false|none|The identifier for the column. Each entry in `path` represents one level of nesting.|

<h2 id="tocS_CommitAuthor">CommitAuthor</h2>
<!-- backwards compatibility -->
<a id="schemacommitauthor"></a>
<a id="schema_CommitAuthor"></a>
<a id="tocScommitauthor"></a>
<a id="tocscommitauthor"></a>

```json
{
  "emailAddress": "string",
  "name": "string"
}
```

Represents the author of a Git commit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailAddress|string|false|none|Required. The commit author's email address.|
|name|string|false|none|Required. The commit author's name.|

<h2 id="tocS_CommitWorkspaceChangesRequest">CommitWorkspaceChangesRequest</h2>
<!-- backwards compatibility -->
<a id="schemacommitworkspacechangesrequest"></a>
<a id="schema_CommitWorkspaceChangesRequest"></a>
<a id="tocScommitworkspacechangesrequest"></a>
<a id="tocscommitworkspacechangesrequest"></a>

```json
{
  "author": {
    "emailAddress": "string",
    "name": "string"
  },
  "commitMessage": "string",
  "paths": [
    "string"
  ]
}
```

`CommitWorkspaceChanges` request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|[CommitAuthor](#schemacommitauthor)|false|none|Required. The commit's author.|
|commitMessage|string|false|none|Optional. The commit's message.|
|paths|[string]|false|none|Optional. Full file paths to commit including filename, rooted at workspace root. If left empty, all files will be committed.|

<h2 id="tocS_CompilationError">CompilationError</h2>
<!-- backwards compatibility -->
<a id="schemacompilationerror"></a>
<a id="schema_CompilationError"></a>
<a id="tocScompilationerror"></a>
<a id="tocscompilationerror"></a>

```json
{
  "actionTarget": {
    "database": "string",
    "name": "string",
    "schema": "string"
  },
  "message": "string",
  "path": "string",
  "stack": "string"
}
```

An error encountered when attempting to compile a Dataform project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionTarget|[Target](#schematarget)|false|none|Output only. The identifier of the action where this error occurred, if available.|
|message|string|false|read-only|Output only. The error's top level message.|
|path|string|false|read-only|Output only. The path of the file where this error occurred, if available, relative to the project root.|
|stack|string|false|read-only|Output only. The error's full stack trace.|

<h2 id="tocS_CompilationResult">CompilationResult</h2>
<!-- backwards compatibility -->
<a id="schemacompilationresult"></a>
<a id="schema_CompilationResult"></a>
<a id="tocScompilationresult"></a>
<a id="tocscompilationresult"></a>

```json
{
  "codeCompilationConfig": {
    "assertionSchema": "string",
    "databaseSuffix": "string",
    "defaultDatabase": "string",
    "defaultLocation": "string",
    "defaultSchema": "string",
    "schemaSuffix": "string",
    "tablePrefix": "string",
    "vars": {
      "property1": "string",
      "property2": "string"
    }
  },
  "compilationErrors": [
    {
      "actionTarget": {
        "database": "string",
        "name": "string",
        "schema": "string"
      },
      "message": "string",
      "path": "string",
      "stack": "string"
    }
  ],
  "dataformCoreVersion": "string",
  "gitCommitish": "string",
  "name": "string",
  "releaseConfig": "string",
  "resolvedGitCommitSha": "string",
  "workspace": "string"
}
```

Represents the result of compiling a Dataform project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codeCompilationConfig|[CodeCompilationConfig](#schemacodecompilationconfig)|false|none|Immutable. If set, fields of `code_compilation_config` override the default compilation settings that are specified in dataform.json.|
|compilationErrors|[[CompilationError](#schemacompilationerror)]|false|read-only|Output only. Errors encountered during project compilation.|
|dataformCoreVersion|string|false|read-only|Output only. The version of `@dataform/core` that was used for compilation.|
|gitCommitish|string|false|none|Immutable. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1`|
|name|string|false|read-only|Output only. The compilation result's name.|
|releaseConfig|string|false|none|Immutable. The name of the release config to compile. The release config's 'current_compilation_result' field will be updated to this compilation result. Must be in the format `projects/*/locations/*/repositories/*/releaseConfigs/*`.|
|resolvedGitCommitSha|string|false|read-only|Output only. The fully resolved Git commit SHA of the code that was compiled. Not set for compilation results whose source is a workspace.|
|workspace|string|false|none|Immutable. The name of the workspace to compile. Must be in the format `projects/*/locations/*/repositories/*/workspaces/*`.|

<h2 id="tocS_CompilationResultAction">CompilationResultAction</h2>
<!-- backwards compatibility -->
<a id="schemacompilationresultaction"></a>
<a id="schema_CompilationResultAction"></a>
<a id="tocScompilationresultaction"></a>
<a id="tocscompilationresultaction"></a>

```json
{
  "assertion": {
    "dependencyTargets": [
      {
        "database": "string",
        "name": "string",
        "schema": "string"
      }
    ],
    "disabled": true,
    "parentAction": {
      "database": "string",
      "name": "string",
      "schema": "string"
    },
    "relationDescriptor": {
      "bigqueryLabels": {
        "property1": "string",
        "property2": "string"
      },
      "columns": [
        {
          "bigqueryPolicyTags": [
            "string"
          ],
          "description": "string",
          "path": [
            "string"
          ]
        }
      ],
      "description": "string"
    },
    "selectQuery": "string",
    "tags": [
      "string"
    ]
  },
  "canonicalTarget": {
    "database": "string",
    "name": "string",
    "schema": "string"
  },
  "declaration": {
    "relationDescriptor": {
      "bigqueryLabels": {
        "property1": "string",
        "property2": "string"
      },
      "columns": [
        {
          "bigqueryPolicyTags": [
            "string"
          ],
          "description": "string",
          "path": [
            "string"
          ]
        }
      ],
      "description": "string"
    }
  },
  "filePath": "string",
  "operations": {
    "dependencyTargets": [
      {
        "database": "string",
        "name": "string",
        "schema": "string"
      }
    ],
    "disabled": true,
    "hasOutput": true,
    "queries": [
      "string"
    ],
    "relationDescriptor": {
      "bigqueryLabels": {
        "property1": "string",
        "property2": "string"
      },
      "columns": [
        {
          "bigqueryPolicyTags": [
            "string"
          ],
          "description": "string",
          "path": [
            "string"
          ]
        }
      ],
      "description": "string"
    },
    "tags": [
      "string"
    ]
  },
  "relation": {
    "additionalOptions": {
      "property1": "string",
      "property2": "string"
    },
    "clusterExpressions": [
      "string"
    ],
    "dependencyTargets": [
      {
        "database": "string",
        "name": "string",
        "schema": "string"
      }
    ],
    "disabled": true,
    "incrementalTableConfig": {
      "incrementalPostOperations": [
        "string"
      ],
      "incrementalPreOperations": [
        "string"
      ],
      "incrementalSelectQuery": "string",
      "refreshDisabled": true,
      "uniqueKeyParts": [
        "string"
      ],
      "updatePartitionFilter": "string"
    },
    "partitionExpirationDays": 0,
    "partitionExpression": "string",
    "postOperations": [
      "string"
    ],
    "preOperations": [
      "string"
    ],
    "relationDescriptor": {
      "bigqueryLabels": {
        "property1": "string",
        "property2": "string"
      },
      "columns": [
        {
          "bigqueryPolicyTags": [
            "string"
          ],
          "description": "string",
          "path": [
            "string"
          ]
        }
      ],
      "description": "string"
    },
    "relationType": "RELATION_TYPE_UNSPECIFIED",
    "requirePartitionFilter": true,
    "selectQuery": "string",
    "tags": [
      "string"
    ]
  },
  "target": {
    "database": "string",
    "name": "string",
    "schema": "string"
  }
}
```

Represents a single Dataform action in a compilation result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assertion|[Assertion](#schemaassertion)|false|none|The assertion executed by this action.|
|canonicalTarget|[Target](#schematarget)|false|none|The action's identifier if the project had been compiled without any overrides configured. Unique within the compilation result.|
|declaration|[Declaration](#schemadeclaration)|false|none|The declaration declared by this action.|
|filePath|string|false|none|The full path including filename in which this action is located, relative to the workspace root.|
|operations|[Operations](#schemaoperations)|false|none|The database operations executed by this action.|
|relation|[Relation](#schemarelation)|false|none|The database relation created/updated by this action.|
|target|[Target](#schematarget)|false|none|This action's identifier. Unique within the compilation result.|

<h2 id="tocS_Declaration">Declaration</h2>
<!-- backwards compatibility -->
<a id="schemadeclaration"></a>
<a id="schema_Declaration"></a>
<a id="tocSdeclaration"></a>
<a id="tocsdeclaration"></a>

```json
{
  "relationDescriptor": {
    "bigqueryLabels": {
      "property1": "string",
      "property2": "string"
    },
    "columns": [
      {
        "bigqueryPolicyTags": [
          "string"
        ],
        "description": "string",
        "path": [
          "string"
        ]
      }
    ],
    "description": "string"
  }
}
```

Represents a relation which is not managed by Dataform but which may be referenced by Dataform actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationDescriptor|[RelationDescriptor](#schemarelationdescriptor)|false|none|Descriptor for the relation and its columns. Used as documentation only, i.e. values here will result in no changes to the relation's metadata.|

<h2 id="tocS_DirectoryEntry">DirectoryEntry</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryentry"></a>
<a id="schema_DirectoryEntry"></a>
<a id="tocSdirectoryentry"></a>
<a id="tocsdirectoryentry"></a>

```json
{
  "directory": "string",
  "file": "string"
}
```

Represents a single entry in a directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directory|string|false|none|A child directory in the directory.|
|file|string|false|none|A file in the directory.|

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

<h2 id="tocS_FetchFileDiffResponse">FetchFileDiffResponse</h2>
<!-- backwards compatibility -->
<a id="schemafetchfilediffresponse"></a>
<a id="schema_FetchFileDiffResponse"></a>
<a id="tocSfetchfilediffresponse"></a>
<a id="tocsfetchfilediffresponse"></a>

```json
{
  "formattedDiff": "string"
}
```

`FetchFileDiff` response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formattedDiff|string|false|none|The raw formatted Git diff for the file.|

<h2 id="tocS_FetchFileGitStatusesResponse">FetchFileGitStatusesResponse</h2>
<!-- backwards compatibility -->
<a id="schemafetchfilegitstatusesresponse"></a>
<a id="schema_FetchFileGitStatusesResponse"></a>
<a id="tocSfetchfilegitstatusesresponse"></a>
<a id="tocsfetchfilegitstatusesresponse"></a>

```json
{
  "uncommittedFileChanges": [
    {
      "path": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ]
}
```

`FetchFileGitStatuses` response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uncommittedFileChanges|[[UncommittedFileChange](#schemauncommittedfilechange)]|false|none|A list of all files which have uncommitted Git changes. There will only be a single entry for any given file.|

<h2 id="tocS_FetchGitAheadBehindResponse">FetchGitAheadBehindResponse</h2>
<!-- backwards compatibility -->
<a id="schemafetchgitaheadbehindresponse"></a>
<a id="schema_FetchGitAheadBehindResponse"></a>
<a id="tocSfetchgitaheadbehindresponse"></a>
<a id="tocsfetchgitaheadbehindresponse"></a>

```json
{
  "commitsAhead": 0,
  "commitsBehind": 0
}
```

`FetchGitAheadBehind` response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitsAhead|integer(int32)|false|none|The number of commits in the remote branch that are not in the workspace.|
|commitsBehind|integer(int32)|false|none|The number of commits in the workspace that are not in the remote branch.|

<h2 id="tocS_FetchRemoteBranchesResponse">FetchRemoteBranchesResponse</h2>
<!-- backwards compatibility -->
<a id="schemafetchremotebranchesresponse"></a>
<a id="schema_FetchRemoteBranchesResponse"></a>
<a id="tocSfetchremotebranchesresponse"></a>
<a id="tocsfetchremotebranchesresponse"></a>

```json
{
  "branches": [
    "string"
  ]
}
```

`FetchRemoteBranches` response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branches|[string]|false|none|The remote repository's branch names.|

<h2 id="tocS_GitRemoteSettings">GitRemoteSettings</h2>
<!-- backwards compatibility -->
<a id="schemagitremotesettings"></a>
<a id="schema_GitRemoteSettings"></a>
<a id="tocSgitremotesettings"></a>
<a id="tocsgitremotesettings"></a>

```json
{
  "authenticationTokenSecretVersion": "string",
  "defaultBranch": "string",
  "tokenStatus": "TOKEN_STATUS_UNSPECIFIED",
  "url": "string"
}
```

Controls Git remote configuration for a repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationTokenSecretVersion|string|false|none|Required. The name of the Secret Manager secret version to use as an authentication token for Git operations. Must be in the format `projects/*/secrets/*/versions/*`.|
|defaultBranch|string|false|none|Required. The Git remote's default branch name.|
|tokenStatus|string|false|read-only|Output only. Indicates the status of the Git access token.|
|url|string|false|none|Required. The Git remote's URL.|

#### Enumerated Values

|Property|Value|
|---|---|
|tokenStatus|TOKEN_STATUS_UNSPECIFIED|
|tokenStatus|NOT_FOUND|
|tokenStatus|INVALID|
|tokenStatus|VALID|

<h2 id="tocS_IncrementalTableConfig">IncrementalTableConfig</h2>
<!-- backwards compatibility -->
<a id="schemaincrementaltableconfig"></a>
<a id="schema_IncrementalTableConfig"></a>
<a id="tocSincrementaltableconfig"></a>
<a id="tocsincrementaltableconfig"></a>

```json
{
  "incrementalPostOperations": [
    "string"
  ],
  "incrementalPreOperations": [
    "string"
  ],
  "incrementalSelectQuery": "string",
  "refreshDisabled": true,
  "uniqueKeyParts": [
    "string"
  ],
  "updatePartitionFilter": "string"
}
```

Contains settings for relations of type `INCREMENTAL_TABLE`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|incrementalPostOperations|[string]|false|none|SQL statements to be executed after inserting new rows into the relation.|
|incrementalPreOperations|[string]|false|none|SQL statements to be executed before inserting new rows into the relation.|
|incrementalSelectQuery|string|false|none|The SELECT query which returns rows which should be inserted into the relation if it already exists and is not being refreshed.|
|refreshDisabled|boolean|false|none|Whether this table should be protected from being refreshed.|
|uniqueKeyParts|[string]|false|none|A set of columns or SQL expressions used to define row uniqueness. If any duplicates are discovered (as defined by `unique_key_parts`), only the newly selected rows (as defined by `incremental_select_query`) will be included in the relation.|
|updatePartitionFilter|string|false|none|A SQL expression conditional used to limit the set of existing rows considered for a merge operation (see `unique_key_parts` for more information).|

<h2 id="tocS_InstallNpmPackagesRequest">InstallNpmPackagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemainstallnpmpackagesrequest"></a>
<a id="schema_InstallNpmPackagesRequest"></a>
<a id="tocSinstallnpmpackagesrequest"></a>
<a id="tocsinstallnpmpackagesrequest"></a>

```json
{}
```

`InstallNpmPackages` request message.

<h2 id="tocS_InstallNpmPackagesResponse">InstallNpmPackagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemainstallnpmpackagesresponse"></a>
<a id="schema_InstallNpmPackagesResponse"></a>
<a id="tocSinstallnpmpackagesresponse"></a>
<a id="tocsinstallnpmpackagesresponse"></a>

```json
{}
```

`InstallNpmPackages` response message.

<h2 id="tocS_Interval">Interval</h2>
<!-- backwards compatibility -->
<a id="schemainterval"></a>
<a id="schema_Interval"></a>
<a id="tocSinterval"></a>
<a id="tocsinterval"></a>

```json
{
  "endTime": "string",
  "startTime": "string"
}
```

Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.|
|startTime|string(google-datetime)|false|none|Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.|

<h2 id="tocS_InvocationConfig">InvocationConfig</h2>
<!-- backwards compatibility -->
<a id="schemainvocationconfig"></a>
<a id="schema_InvocationConfig"></a>
<a id="tocSinvocationconfig"></a>
<a id="tocsinvocationconfig"></a>

```json
{
  "fullyRefreshIncrementalTablesEnabled": true,
  "includedTags": [
    "string"
  ],
  "includedTargets": [
    {
      "database": "string",
      "name": "string",
      "schema": "string"
    }
  ],
  "transitiveDependenciesIncluded": true,
  "transitiveDependentsIncluded": true
}
```

Includes various configuration options for a workflow invocation. If both `included_targets` and `included_tags` are unset, all actions will be included.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullyRefreshIncrementalTablesEnabled|boolean|false|none|Optional. When set to true, any incremental tables will be fully refreshed.|
|includedTags|[string]|false|none|Optional. The set of tags to include.|
|includedTargets|[[Target](#schematarget)]|false|none|Optional. The set of action identifiers to include.|
|transitiveDependenciesIncluded|boolean|false|none|Optional. When set to true, transitive dependencies of included actions will be executed.|
|transitiveDependentsIncluded|boolean|false|none|Optional. When set to true, transitive dependents of included actions will be executed.|

<h2 id="tocS_ListCompilationResultsResponse">ListCompilationResultsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcompilationresultsresponse"></a>
<a id="schema_ListCompilationResultsResponse"></a>
<a id="tocSlistcompilationresultsresponse"></a>
<a id="tocslistcompilationresultsresponse"></a>

```json
{
  "compilationResults": [
    {
      "codeCompilationConfig": {
        "assertionSchema": "string",
        "databaseSuffix": "string",
        "defaultDatabase": "string",
        "defaultLocation": "string",
        "defaultSchema": "string",
        "schemaSuffix": "string",
        "tablePrefix": "string",
        "vars": {
          "property1": "string",
          "property2": "string"
        }
      },
      "compilationErrors": [
        {
          "actionTarget": {
            "database": "string",
            "name": "string",
            "schema": "string"
          },
          "message": "string",
          "path": "string",
          "stack": "string"
        }
      ],
      "dataformCoreVersion": "string",
      "gitCommitish": "string",
      "name": "string",
      "releaseConfig": "string",
      "resolvedGitCommitSha": "string",
      "workspace": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

`ListCompilationResults` response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compilationResults|[[CompilationResult](#schemacompilationresult)]|false|none|List of compilation results.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|unreachable|[string]|false|none|Locations which could not be reached.|

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

<h2 id="tocS_ListReleaseConfigsResponse">ListReleaseConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreleaseconfigsresponse"></a>
<a id="schema_ListReleaseConfigsResponse"></a>
<a id="tocSlistreleaseconfigsresponse"></a>
<a id="tocslistreleaseconfigsresponse"></a>

```json
{
  "nextPageToken": "string",
  "releaseConfigs": [
    {
      "codeCompilationConfig": {
        "assertionSchema": "string",
        "databaseSuffix": "string",
        "defaultDatabase": "string",
        "defaultLocation": "string",
        "defaultSchema": "string",
        "schemaSuffix": "string",
        "tablePrefix": "string",
        "vars": {
          "property1": "string",
          "property2": "string"
        }
      },
      "cronSchedule": "string",
      "gitCommitish": "string",
      "name": "string",
      "recentScheduledReleaseRecords": [
        {
          "compilationResult": "string",
          "errorStatus": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "releaseTime": "string"
        }
      ],
      "releaseCompilationResult": "string",
      "timeZone": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

`ListReleaseConfigs` response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|releaseConfigs|[[ReleaseConfig](#schemareleaseconfig)]|false|none|List of release configs.|
|unreachable|[string]|false|none|Locations which could not be reached.|

<h2 id="tocS_ListRepositoriesResponse">ListRepositoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrepositoriesresponse"></a>
<a id="schema_ListRepositoriesResponse"></a>
<a id="tocSlistrepositoriesresponse"></a>
<a id="tocslistrepositoriesresponse"></a>

```json
{
  "nextPageToken": "string",
  "repositories": [
    {
      "gitRemoteSettings": {
        "authenticationTokenSecretVersion": "string",
        "defaultBranch": "string",
        "tokenStatus": "TOKEN_STATUS_UNSPECIFIED",
        "url": "string"
      },
      "name": "string",
      "npmrcEnvironmentVariablesSecretVersion": "string",
      "workspaceCompilationOverrides": {
        "defaultDatabase": "string",
        "schemaSuffix": "string",
        "tablePrefix": "string"
      }
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

`ListRepositories` response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|repositories|[[Repository](#schemarepository)]|false|none|List of repositories.|
|unreachable|[string]|false|none|Locations which could not be reached.|

<h2 id="tocS_ListWorkflowConfigsResponse">ListWorkflowConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkflowconfigsresponse"></a>
<a id="schema_ListWorkflowConfigsResponse"></a>
<a id="tocSlistworkflowconfigsresponse"></a>
<a id="tocslistworkflowconfigsresponse"></a>

```json
{
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ],
  "workflowConfigs": [
    {
      "cronSchedule": "string",
      "invocationConfig": {
        "fullyRefreshIncrementalTablesEnabled": true,
        "includedTags": [
          "string"
        ],
        "includedTargets": [
          {
            "database": "string",
            "name": "string",
            "schema": "string"
          }
        ],
        "transitiveDependenciesIncluded": true,
        "transitiveDependentsIncluded": true
      },
      "name": "string",
      "recentScheduledExecutionRecords": [
        {
          "errorStatus": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "executionTime": "string",
          "workflowInvocation": "string"
        }
      ],
      "releaseConfig": "string",
      "timeZone": "string"
    }
  ]
}
```

`ListWorkflowConfigs` response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|unreachable|[string]|false|none|Locations which could not be reached.|
|workflowConfigs|[[WorkflowConfig](#schemaworkflowconfig)]|false|none|List of workflow configs.|

<h2 id="tocS_ListWorkflowInvocationsResponse">ListWorkflowInvocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkflowinvocationsresponse"></a>
<a id="schema_ListWorkflowInvocationsResponse"></a>
<a id="tocSlistworkflowinvocationsresponse"></a>
<a id="tocslistworkflowinvocationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ],
  "workflowInvocations": [
    {
      "compilationResult": "string",
      "invocationConfig": {
        "fullyRefreshIncrementalTablesEnabled": true,
        "includedTags": [
          "string"
        ],
        "includedTargets": [
          {
            "database": "string",
            "name": "string",
            "schema": "string"
          }
        ],
        "transitiveDependenciesIncluded": true,
        "transitiveDependentsIncluded": true
      },
      "invocationTiming": {
        "endTime": "string",
        "startTime": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "workflowConfig": "string"
    }
  ]
}
```

`ListWorkflowInvocations` response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|unreachable|[string]|false|none|Locations which could not be reached.|
|workflowInvocations|[[WorkflowInvocation](#schemaworkflowinvocation)]|false|none|List of workflow invocations.|

<h2 id="tocS_ListWorkspacesResponse">ListWorkspacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkspacesresponse"></a>
<a id="schema_ListWorkspacesResponse"></a>
<a id="tocSlistworkspacesresponse"></a>
<a id="tocslistworkspacesresponse"></a>

```json
{
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ],
  "workspaces": [
    {
      "name": "string"
    }
  ]
}
```

`ListWorkspaces` response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|unreachable|[string]|false|none|Locations which could not be reached.|
|workspaces|[[Workspace](#schemaworkspace)]|false|none|List of workspaces.|

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

<h2 id="tocS_MakeDirectoryRequest">MakeDirectoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemamakedirectoryrequest"></a>
<a id="schema_MakeDirectoryRequest"></a>
<a id="tocSmakedirectoryrequest"></a>
<a id="tocsmakedirectoryrequest"></a>

```json
{
  "path": "string"
}
```

`MakeDirectory` request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|false|none|Required. The directory's full path including directory name, relative to the workspace root.|

<h2 id="tocS_MakeDirectoryResponse">MakeDirectoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemamakedirectoryresponse"></a>
<a id="schema_MakeDirectoryResponse"></a>
<a id="tocSmakedirectoryresponse"></a>
<a id="tocsmakedirectoryresponse"></a>

```json
{}
```

`MakeDirectory` response message.

<h2 id="tocS_MoveDirectoryRequest">MoveDirectoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemamovedirectoryrequest"></a>
<a id="schema_MoveDirectoryRequest"></a>
<a id="tocSmovedirectoryrequest"></a>
<a id="tocsmovedirectoryrequest"></a>

```json
{
  "newPath": "string",
  "path": "string"
}
```

`MoveDirectory` request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newPath|string|false|none|Required. The new path for the directory including directory name, rooted at workspace root.|
|path|string|false|none|Required. The directory's full path including directory name, relative to the workspace root.|

<h2 id="tocS_MoveDirectoryResponse">MoveDirectoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemamovedirectoryresponse"></a>
<a id="schema_MoveDirectoryResponse"></a>
<a id="tocSmovedirectoryresponse"></a>
<a id="tocsmovedirectoryresponse"></a>

```json
{}
```

`MoveDirectory` response message.

<h2 id="tocS_MoveFileRequest">MoveFileRequest</h2>
<!-- backwards compatibility -->
<a id="schemamovefilerequest"></a>
<a id="schema_MoveFileRequest"></a>
<a id="tocSmovefilerequest"></a>
<a id="tocsmovefilerequest"></a>

```json
{
  "newPath": "string",
  "path": "string"
}
```

`MoveFile` request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newPath|string|false|none|Required. The file's new path including filename, relative to the workspace root.|
|path|string|false|none|Required. The file's full path including filename, relative to the workspace root.|

<h2 id="tocS_MoveFileResponse">MoveFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemamovefileresponse"></a>
<a id="schema_MoveFileResponse"></a>
<a id="tocSmovefileresponse"></a>
<a id="tocsmovefileresponse"></a>

```json
{}
```

`MoveFile` response message.

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

<h2 id="tocS_Operations">Operations</h2>
<!-- backwards compatibility -->
<a id="schemaoperations"></a>
<a id="schema_Operations"></a>
<a id="tocSoperations"></a>
<a id="tocsoperations"></a>

```json
{
  "dependencyTargets": [
    {
      "database": "string",
      "name": "string",
      "schema": "string"
    }
  ],
  "disabled": true,
  "hasOutput": true,
  "queries": [
    "string"
  ],
  "relationDescriptor": {
    "bigqueryLabels": {
      "property1": "string",
      "property2": "string"
    },
    "columns": [
      {
        "bigqueryPolicyTags": [
          "string"
        ],
        "description": "string",
        "path": [
          "string"
        ]
      }
    ],
    "description": "string"
  },
  "tags": [
    "string"
  ]
}
```

Represents a list of arbitrary database operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dependencyTargets|[[Target](#schematarget)]|false|none|A list of actions that this action depends on.|
|disabled|boolean|false|none|Whether this action is disabled (i.e. should not be run).|
|hasOutput|boolean|false|none|Whether these operations produce an output relation.|
|queries|[string]|false|none|A list of arbitrary SQL statements that will be executed without alteration.|
|relationDescriptor|[RelationDescriptor](#schemarelationdescriptor)|false|none|Descriptor for any output relation and its columns. Only set if `has_output` is true.|
|tags|[string]|false|none|Arbitrary, user-defined tags on this action.|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
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
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_PullGitCommitsRequest">PullGitCommitsRequest</h2>
<!-- backwards compatibility -->
<a id="schemapullgitcommitsrequest"></a>
<a id="schema_PullGitCommitsRequest"></a>
<a id="tocSpullgitcommitsrequest"></a>
<a id="tocspullgitcommitsrequest"></a>

```json
{
  "author": {
    "emailAddress": "string",
    "name": "string"
  },
  "remoteBranch": "string"
}
```

`PullGitCommits` request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|[CommitAuthor](#schemacommitauthor)|false|none|Required. The author of any merge commit which may be created as a result of merging fetched Git commits into this workspace.|
|remoteBranch|string|false|none|Optional. The name of the branch in the Git remote from which to pull commits. If left unset, the repository's default branch name will be used.|

<h2 id="tocS_PushGitCommitsRequest">PushGitCommitsRequest</h2>
<!-- backwards compatibility -->
<a id="schemapushgitcommitsrequest"></a>
<a id="schema_PushGitCommitsRequest"></a>
<a id="tocSpushgitcommitsrequest"></a>
<a id="tocspushgitcommitsrequest"></a>

```json
{
  "remoteBranch": "string"
}
```

`PushGitCommits` request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remoteBranch|string|false|none|Optional. The name of the branch in the Git remote to which commits should be pushed. If left unset, the repository's default branch name will be used.|

<h2 id="tocS_QueryCompilationResultActionsResponse">QueryCompilationResultActionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquerycompilationresultactionsresponse"></a>
<a id="schema_QueryCompilationResultActionsResponse"></a>
<a id="tocSquerycompilationresultactionsresponse"></a>
<a id="tocsquerycompilationresultactionsresponse"></a>

```json
{
  "compilationResultActions": [
    {
      "assertion": {
        "dependencyTargets": [
          {
            "database": "string",
            "name": "string",
            "schema": "string"
          }
        ],
        "disabled": true,
        "parentAction": {
          "database": "string",
          "name": "string",
          "schema": "string"
        },
        "relationDescriptor": {
          "bigqueryLabels": {
            "property1": "string",
            "property2": "string"
          },
          "columns": [
            {
              "bigqueryPolicyTags": [
                "string"
              ],
              "description": "string",
              "path": [
                "string"
              ]
            }
          ],
          "description": "string"
        },
        "selectQuery": "string",
        "tags": [
          "string"
        ]
      },
      "canonicalTarget": {
        "database": "string",
        "name": "string",
        "schema": "string"
      },
      "declaration": {
        "relationDescriptor": {
          "bigqueryLabels": {
            "property1": "string",
            "property2": "string"
          },
          "columns": [
            {
              "bigqueryPolicyTags": [
                "string"
              ],
              "description": "string",
              "path": [
                "string"
              ]
            }
          ],
          "description": "string"
        }
      },
      "filePath": "string",
      "operations": {
        "dependencyTargets": [
          {
            "database": "string",
            "name": "string",
            "schema": "string"
          }
        ],
        "disabled": true,
        "hasOutput": true,
        "queries": [
          "string"
        ],
        "relationDescriptor": {
          "bigqueryLabels": {
            "property1": "string",
            "property2": "string"
          },
          "columns": [
            {
              "bigqueryPolicyTags": [
                "string"
              ],
              "description": "string",
              "path": [
                "string"
              ]
            }
          ],
          "description": "string"
        },
        "tags": [
          "string"
        ]
      },
      "relation": {
        "additionalOptions": {
          "property1": "string",
          "property2": "string"
        },
        "clusterExpressions": [
          "string"
        ],
        "dependencyTargets": [
          {
            "database": "string",
            "name": "string",
            "schema": "string"
          }
        ],
        "disabled": true,
        "incrementalTableConfig": {
          "incrementalPostOperations": [
            "string"
          ],
          "incrementalPreOperations": [
            "string"
          ],
          "incrementalSelectQuery": "string",
          "refreshDisabled": true,
          "uniqueKeyParts": [
            "string"
          ],
          "updatePartitionFilter": "string"
        },
        "partitionExpirationDays": 0,
        "partitionExpression": "string",
        "postOperations": [
          "string"
        ],
        "preOperations": [
          "string"
        ],
        "relationDescriptor": {
          "bigqueryLabels": {
            "property1": "string",
            "property2": "string"
          },
          "columns": [
            {
              "bigqueryPolicyTags": [
                "string"
              ],
              "description": "string",
              "path": [
                "string"
              ]
            }
          ],
          "description": "string"
        },
        "relationType": "RELATION_TYPE_UNSPECIFIED",
        "requirePartitionFilter": true,
        "selectQuery": "string",
        "tags": [
          "string"
        ]
      },
      "target": {
        "database": "string",
        "name": "string",
        "schema": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

`QueryCompilationResultActions` response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compilationResultActions|[[CompilationResultAction](#schemacompilationresultaction)]|false|none|List of compilation result actions.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_QueryDirectoryContentsResponse">QueryDirectoryContentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquerydirectorycontentsresponse"></a>
<a id="schema_QueryDirectoryContentsResponse"></a>
<a id="tocSquerydirectorycontentsresponse"></a>
<a id="tocsquerydirectorycontentsresponse"></a>

```json
{
  "directoryEntries": [
    {
      "directory": "string",
      "file": "string"
    }
  ],
  "nextPageToken": "string"
}
```

`QueryDirectoryContents` response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directoryEntries|[[DirectoryEntry](#schemadirectoryentry)]|false|none|List of entries in the directory.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_QueryWorkflowInvocationActionsResponse">QueryWorkflowInvocationActionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaqueryworkflowinvocationactionsresponse"></a>
<a id="schema_QueryWorkflowInvocationActionsResponse"></a>
<a id="tocSqueryworkflowinvocationactionsresponse"></a>
<a id="tocsqueryworkflowinvocationactionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "workflowInvocationActions": [
    {
      "bigqueryAction": {
        "sqlScript": "string"
      },
      "canonicalTarget": {
        "database": "string",
        "name": "string",
        "schema": "string"
      },
      "failureReason": "string",
      "invocationTiming": {
        "endTime": "string",
        "startTime": "string"
      },
      "state": "PENDING",
      "target": {
        "database": "string",
        "name": "string",
        "schema": "string"
      }
    }
  ]
}
```

`QueryWorkflowInvocationActions` response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|workflowInvocationActions|[[WorkflowInvocationAction](#schemaworkflowinvocationaction)]|false|none|List of workflow invocation actions.|

<h2 id="tocS_ReadFileResponse">ReadFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemareadfileresponse"></a>
<a id="schema_ReadFileResponse"></a>
<a id="tocSreadfileresponse"></a>
<a id="tocsreadfileresponse"></a>

```json
{
  "fileContents": "string"
}
```

`ReadFile` response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileContents|string(byte)|false|none|The file's contents.|

<h2 id="tocS_Relation">Relation</h2>
<!-- backwards compatibility -->
<a id="schemarelation"></a>
<a id="schema_Relation"></a>
<a id="tocSrelation"></a>
<a id="tocsrelation"></a>

```json
{
  "additionalOptions": {
    "property1": "string",
    "property2": "string"
  },
  "clusterExpressions": [
    "string"
  ],
  "dependencyTargets": [
    {
      "database": "string",
      "name": "string",
      "schema": "string"
    }
  ],
  "disabled": true,
  "incrementalTableConfig": {
    "incrementalPostOperations": [
      "string"
    ],
    "incrementalPreOperations": [
      "string"
    ],
    "incrementalSelectQuery": "string",
    "refreshDisabled": true,
    "uniqueKeyParts": [
      "string"
    ],
    "updatePartitionFilter": "string"
  },
  "partitionExpirationDays": 0,
  "partitionExpression": "string",
  "postOperations": [
    "string"
  ],
  "preOperations": [
    "string"
  ],
  "relationDescriptor": {
    "bigqueryLabels": {
      "property1": "string",
      "property2": "string"
    },
    "columns": [
      {
        "bigqueryPolicyTags": [
          "string"
        ],
        "description": "string",
        "path": [
          "string"
        ]
      }
    ],
    "description": "string"
  },
  "relationType": "RELATION_TYPE_UNSPECIFIED",
  "requirePartitionFilter": true,
  "selectQuery": "string",
  "tags": [
    "string"
  ]
}
```

Represents a database relation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalOptions|object|false|none|Additional options that will be provided as key/value pairs into the options clause of a create table/view statement. See https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language for more information on which options are supported.|
|clusterExpressions|[string]|false|none|A list of columns or SQL expressions used to cluster the table.|
|dependencyTargets|[[Target](#schematarget)]|false|none|A list of actions that this action depends on.|
|disabled|boolean|false|none|Whether this action is disabled (i.e. should not be run).|
|incrementalTableConfig|[IncrementalTableConfig](#schemaincrementaltableconfig)|false|none|Configures `INCREMENTAL_TABLE` settings for this relation. Only set if `relation_type` is `INCREMENTAL_TABLE`.|
|partitionExpirationDays|integer(int32)|false|none|Sets the partition expiration in days.|
|partitionExpression|string|false|none|The SQL expression used to partition the relation.|
|postOperations|[string]|false|none|SQL statements to be executed after creating the relation.|
|preOperations|[string]|false|none|SQL statements to be executed before creating the relation.|
|relationDescriptor|[RelationDescriptor](#schemarelationdescriptor)|false|none|Descriptor for the relation and its columns.|
|relationType|string|false|none|The type of this relation.|
|requirePartitionFilter|boolean|false|none|Specifies whether queries on this table must include a predicate filter that filters on the partitioning column.|
|selectQuery|string|false|none|The SELECT query which returns rows which this relation should contain.|
|tags|[string]|false|none|Arbitrary, user-defined tags on this action.|

#### Enumerated Values

|Property|Value|
|---|---|
|relationType|RELATION_TYPE_UNSPECIFIED|
|relationType|TABLE|
|relationType|VIEW|
|relationType|INCREMENTAL_TABLE|
|relationType|MATERIALIZED_VIEW|

<h2 id="tocS_RelationDescriptor">RelationDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemarelationdescriptor"></a>
<a id="schema_RelationDescriptor"></a>
<a id="tocSrelationdescriptor"></a>
<a id="tocsrelationdescriptor"></a>

```json
{
  "bigqueryLabels": {
    "property1": "string",
    "property2": "string"
  },
  "columns": [
    {
      "bigqueryPolicyTags": [
        "string"
      ],
      "description": "string",
      "path": [
        "string"
      ]
    }
  ],
  "description": "string"
}
```

Describes a relation and its columns.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryLabels|object|false|none|A set of BigQuery labels that should be applied to the relation.|
|columns|[[ColumnDescriptor](#schemacolumndescriptor)]|false|none|A list of descriptions of columns within the relation.|
|description|string|false|none|A text description of the relation.|

<h2 id="tocS_ReleaseConfig">ReleaseConfig</h2>
<!-- backwards compatibility -->
<a id="schemareleaseconfig"></a>
<a id="schema_ReleaseConfig"></a>
<a id="tocSreleaseconfig"></a>
<a id="tocsreleaseconfig"></a>

```json
{
  "codeCompilationConfig": {
    "assertionSchema": "string",
    "databaseSuffix": "string",
    "defaultDatabase": "string",
    "defaultLocation": "string",
    "defaultSchema": "string",
    "schemaSuffix": "string",
    "tablePrefix": "string",
    "vars": {
      "property1": "string",
      "property2": "string"
    }
  },
  "cronSchedule": "string",
  "gitCommitish": "string",
  "name": "string",
  "recentScheduledReleaseRecords": [
    {
      "compilationResult": "string",
      "errorStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "releaseTime": "string"
    }
  ],
  "releaseCompilationResult": "string",
  "timeZone": "string"
}
```

Represents a Dataform release configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codeCompilationConfig|[CodeCompilationConfig](#schemacodecompilationconfig)|false|none|Optional. If set, fields of `code_compilation_config` override the default compilation settings that are specified in dataform.json.|
|cronSchedule|string|false|none|Optional. Optional schedule (in cron format) for automatic creation of compilation results.|
|gitCommitish|string|false|none|Required. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1`|
|name|string|false|read-only|Output only. The release config's name.|
|recentScheduledReleaseRecords|[[ScheduledReleaseRecord](#schemascheduledreleaserecord)]|false|read-only|Output only. Records of the 10 most recent scheduled release attempts, ordered in in descending order of `release_time`. Updated whenever automatic creation of a compilation result is triggered by cron_schedule.|
|releaseCompilationResult|string|false|none|Optional. The name of the currently released compilation result for this release config. This value is updated when a compilation result is created from this release config, or when this resource is updated by API call (perhaps to roll back to an earlier release). The compilation result must have been created using this release config. Must be in the format `projects/*/locations/*/repositories/*/compilationResults/*`.|
|timeZone|string|false|none|Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.|

<h2 id="tocS_RemoveDirectoryRequest">RemoveDirectoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovedirectoryrequest"></a>
<a id="schema_RemoveDirectoryRequest"></a>
<a id="tocSremovedirectoryrequest"></a>
<a id="tocsremovedirectoryrequest"></a>

```json
{
  "path": "string"
}
```

`RemoveDirectory` request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|false|none|Required. The directory's full path including directory name, relative to the workspace root.|

<h2 id="tocS_RemoveFileRequest">RemoveFileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovefilerequest"></a>
<a id="schema_RemoveFileRequest"></a>
<a id="tocSremovefilerequest"></a>
<a id="tocsremovefilerequest"></a>

```json
{
  "path": "string"
}
```

`RemoveFile` request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|false|none|Required. The file's full path including filename, relative to the workspace root.|

<h2 id="tocS_Repository">Repository</h2>
<!-- backwards compatibility -->
<a id="schemarepository"></a>
<a id="schema_Repository"></a>
<a id="tocSrepository"></a>
<a id="tocsrepository"></a>

```json
{
  "gitRemoteSettings": {
    "authenticationTokenSecretVersion": "string",
    "defaultBranch": "string",
    "tokenStatus": "TOKEN_STATUS_UNSPECIFIED",
    "url": "string"
  },
  "name": "string",
  "npmrcEnvironmentVariablesSecretVersion": "string",
  "workspaceCompilationOverrides": {
    "defaultDatabase": "string",
    "schemaSuffix": "string",
    "tablePrefix": "string"
  }
}
```

Represents a Dataform Git repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gitRemoteSettings|[GitRemoteSettings](#schemagitremotesettings)|false|none|Optional. If set, configures this repository to be linked to a Git remote.|
|name|string|false|read-only|Output only. The repository's name.|
|npmrcEnvironmentVariablesSecretVersion|string|false|none|Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format `projects/*/secrets/*/versions/*`. The file itself must be in a JSON format.|
|workspaceCompilationOverrides|[WorkspaceCompilationOverrides](#schemaworkspacecompilationoverrides)|false|none|Optional. If set, fields of `workspace_compilation_overrides` override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results. See documentation for `WorkspaceCompilationOverrides` for more information.|

<h2 id="tocS_ResetWorkspaceChangesRequest">ResetWorkspaceChangesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresetworkspacechangesrequest"></a>
<a id="schema_ResetWorkspaceChangesRequest"></a>
<a id="tocSresetworkspacechangesrequest"></a>
<a id="tocsresetworkspacechangesrequest"></a>

```json
{
  "clean": true,
  "paths": [
    "string"
  ]
}
```

`ResetWorkspaceChanges` request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clean|boolean|false|none|Optional. If set to true, untracked files will be deleted.|
|paths|[string]|false|none|Optional. Full file paths to reset back to their committed state including filename, rooted at workspace root. If left empty, all files will be reset.|

<h2 id="tocS_ScheduledExecutionRecord">ScheduledExecutionRecord</h2>
<!-- backwards compatibility -->
<a id="schemascheduledexecutionrecord"></a>
<a id="schema_ScheduledExecutionRecord"></a>
<a id="tocSscheduledexecutionrecord"></a>
<a id="tocsscheduledexecutionrecord"></a>

```json
{
  "errorStatus": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "executionTime": "string",
  "workflowInvocation": "string"
}
```

A record of an attempt to create a workflow invocation for this workflow config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorStatus|[Status](#schemastatus)|false|none|The error status encountered upon this attempt to create the workflow invocation, if the attempt was unsuccessful.|
|executionTime|string(google-datetime)|false|none|The timestamp of this execution attempt.|
|workflowInvocation|string|false|none|The name of the created workflow invocation, if one was successfully created. Must be in the format `projects/*/locations/*/repositories/*/workflowInvocations/*`.|

<h2 id="tocS_ScheduledReleaseRecord">ScheduledReleaseRecord</h2>
<!-- backwards compatibility -->
<a id="schemascheduledreleaserecord"></a>
<a id="schema_ScheduledReleaseRecord"></a>
<a id="tocSscheduledreleaserecord"></a>
<a id="tocsscheduledreleaserecord"></a>

```json
{
  "compilationResult": "string",
  "errorStatus": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "releaseTime": "string"
}
```

A record of an attempt to create a compilation result for this release config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compilationResult|string|false|none|The name of the created compilation result, if one was successfully created. Must be in the format `projects/*/locations/*/repositories/*/compilationResults/*`.|
|errorStatus|[Status](#schemastatus)|false|none|The error status encountered upon this attempt to create the compilation result, if the attempt was unsuccessful.|
|releaseTime|string(google-datetime)|false|none|The timestamp of this release attempt.|

<h2 id="tocS_SetIamPolicyRequest">SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetiampolicyrequest"></a>
<a id="schema_SetIamPolicyRequest"></a>
<a id="tocSsetiampolicyrequest"></a>
<a id="tocssetiampolicyrequest"></a>

```json
{
  "policy": {
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
}
```

Request message for `SetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[Policy](#schemapolicy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|

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

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "database": "string",
  "name": "string",
  "schema": "string"
}
```

Represents an action identifier. If the action writes output, the output will be written to the referenced database object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|string|false|none|The action's database (Google Cloud project ID) .|
|name|string|false|none|The action's name, within `database` and `schema`.|
|schema|string|false|none|The action's schema (BigQuery dataset ID), within `database`.|

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

<h2 id="tocS_UncommittedFileChange">UncommittedFileChange</h2>
<!-- backwards compatibility -->
<a id="schemauncommittedfilechange"></a>
<a id="schema_UncommittedFileChange"></a>
<a id="tocSuncommittedfilechange"></a>
<a id="tocsuncommittedfilechange"></a>

```json
{
  "path": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Represents the Git state of a file with uncommitted changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|false|none|The file's full path including filename, relative to the workspace root.|
|state|string|false|none|Indicates the status of the file.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ADDED|
|state|DELETED|
|state|MODIFIED|
|state|HAS_CONFLICTS|

<h2 id="tocS_WorkflowConfig">WorkflowConfig</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowconfig"></a>
<a id="schema_WorkflowConfig"></a>
<a id="tocSworkflowconfig"></a>
<a id="tocsworkflowconfig"></a>

```json
{
  "cronSchedule": "string",
  "invocationConfig": {
    "fullyRefreshIncrementalTablesEnabled": true,
    "includedTags": [
      "string"
    ],
    "includedTargets": [
      {
        "database": "string",
        "name": "string",
        "schema": "string"
      }
    ],
    "transitiveDependenciesIncluded": true,
    "transitiveDependentsIncluded": true
  },
  "name": "string",
  "recentScheduledExecutionRecords": [
    {
      "errorStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "executionTime": "string",
      "workflowInvocation": "string"
    }
  ],
  "releaseConfig": "string",
  "timeZone": "string"
}
```

Represents a Dataform workflow configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cronSchedule|string|false|none|Optional. Optional schedule (in cron format) for automatic execution of this workflow config.|
|invocationConfig|[InvocationConfig](#schemainvocationconfig)|false|none|Optional. If left unset, a default InvocationConfig will be used.|
|name|string|false|read-only|Output only. The workflow config's name.|
|recentScheduledExecutionRecords|[[ScheduledExecutionRecord](#schemascheduledexecutionrecord)]|false|read-only|Output only. Records of the 10 most recent scheduled execution attempts, ordered in in descending order of `execution_time`. Updated whenever automatic creation of a workflow invocation is triggered by cron_schedule.|
|releaseConfig|string|false|none|Required. The name of the release config whose release_compilation_result should be executed. Must be in the format `projects/*/locations/*/repositories/*/releaseConfigs/*`.|
|timeZone|string|false|none|Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.|

<h2 id="tocS_WorkflowInvocation">WorkflowInvocation</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowinvocation"></a>
<a id="schema_WorkflowInvocation"></a>
<a id="tocSworkflowinvocation"></a>
<a id="tocsworkflowinvocation"></a>

```json
{
  "compilationResult": "string",
  "invocationConfig": {
    "fullyRefreshIncrementalTablesEnabled": true,
    "includedTags": [
      "string"
    ],
    "includedTargets": [
      {
        "database": "string",
        "name": "string",
        "schema": "string"
      }
    ],
    "transitiveDependenciesIncluded": true,
    "transitiveDependentsIncluded": true
  },
  "invocationTiming": {
    "endTime": "string",
    "startTime": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "workflowConfig": "string"
}
```

Represents a single invocation of a compilation result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compilationResult|string|false|none|Immutable. The name of the compilation result to compile. Must be in the format `projects/*/locations/*/repositories/*/compilationResults/*`.|
|invocationConfig|[InvocationConfig](#schemainvocationconfig)|false|none|Immutable. If left unset, a default InvocationConfig will be used.|
|invocationTiming|[Interval](#schemainterval)|false|none|Output only. This workflow invocation's timing details.|
|name|string|false|read-only|Output only. The workflow invocation's name.|
|state|string|false|read-only|Output only. This workflow invocation's current state.|
|workflowConfig|string|false|none|Immutable. The name of the workflow config to invoke. Must be in the format `projects/*/locations/*/repositories/*/workflowConfigs/*`.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|RUNNING|
|state|SUCCEEDED|
|state|CANCELLED|
|state|FAILED|
|state|CANCELING|

<h2 id="tocS_WorkflowInvocationAction">WorkflowInvocationAction</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowinvocationaction"></a>
<a id="schema_WorkflowInvocationAction"></a>
<a id="tocSworkflowinvocationaction"></a>
<a id="tocsworkflowinvocationaction"></a>

```json
{
  "bigqueryAction": {
    "sqlScript": "string"
  },
  "canonicalTarget": {
    "database": "string",
    "name": "string",
    "schema": "string"
  },
  "failureReason": "string",
  "invocationTiming": {
    "endTime": "string",
    "startTime": "string"
  },
  "state": "PENDING",
  "target": {
    "database": "string",
    "name": "string",
    "schema": "string"
  }
}
```

Represents a single action in a workflow invocation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryAction|[BigQueryAction](#schemabigqueryaction)|false|none|Output only. The workflow action's bigquery action details.|
|canonicalTarget|[Target](#schematarget)|false|none|Output only. The action's identifier if the project had been compiled without any overrides configured. Unique within the compilation result.|
|failureReason|string|false|read-only|Output only. If and only if action's state is FAILED a failure reason is set.|
|invocationTiming|[Interval](#schemainterval)|false|none|Output only. This action's timing details. `start_time` will be set if the action is in [RUNNING, SUCCEEDED, CANCELLED, FAILED] state. `end_time` will be set if the action is in [SUCCEEDED, CANCELLED, FAILED] state.|
|state|string|false|read-only|Output only. This action's current state.|
|target|[Target](#schematarget)|false|none|Output only. This action's identifier. Unique within the workflow invocation.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|PENDING|
|state|RUNNING|
|state|SKIPPED|
|state|DISABLED|
|state|SUCCEEDED|
|state|CANCELLED|
|state|FAILED|

<h2 id="tocS_Workspace">Workspace</h2>
<!-- backwards compatibility -->
<a id="schemaworkspace"></a>
<a id="schema_Workspace"></a>
<a id="tocSworkspace"></a>
<a id="tocsworkspace"></a>

```json
{
  "name": "string"
}
```

Represents a Dataform Git workspace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|read-only|Output only. The workspace's name.|

<h2 id="tocS_WorkspaceCompilationOverrides">WorkspaceCompilationOverrides</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacecompilationoverrides"></a>
<a id="schema_WorkspaceCompilationOverrides"></a>
<a id="tocSworkspacecompilationoverrides"></a>
<a id="tocsworkspacecompilationoverrides"></a>

```json
{
  "defaultDatabase": "string",
  "schemaSuffix": "string",
  "tablePrefix": "string"
}
```

Configures workspace compilation overrides for a repository. Primarily used by the UI (`console.cloud.google.com`). `schema_suffix` and `table_prefix` can have a special expression - `${workspaceName}`, which refers to the workspace name from which the compilation results will be created. API callers are expected to resolve the expression in these overrides and provide them explicitly in `code_compilation_config` (https://cloud.google.com/dataform/reference/rest/v1beta1/projects.locations.repositories.compilationResults#codecompilationconfig) when creating workspace-scoped compilation results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultDatabase|string|false|none|Optional. The default database (Google Cloud project ID).|
|schemaSuffix|string|false|none|Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.|
|tablePrefix|string|false|none|Optional. The prefix that should be prepended to all table names.|

<h2 id="tocS_WriteFileRequest">WriteFileRequest</h2>
<!-- backwards compatibility -->
<a id="schemawritefilerequest"></a>
<a id="schema_WriteFileRequest"></a>
<a id="tocSwritefilerequest"></a>
<a id="tocswritefilerequest"></a>

```json
{
  "contents": "string",
  "path": "string"
}
```

`WriteFile` request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|string(byte)|false|none|Required. The file's contents.|
|path|string|false|none|Required. The file.|

<h2 id="tocS_WriteFileResponse">WriteFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemawritefileresponse"></a>
<a id="schema_WriteFileResponse"></a>
<a id="tocSwritefileresponse"></a>
<a id="tocswritefileresponse"></a>

```json
{}
```

`WriteFile` response message.
