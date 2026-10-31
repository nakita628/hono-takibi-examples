<h1 id="cloud-build-api">Cloud Build API v1alpha2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Creates and manages builds on Google Cloud Platform.

Base URLs:

* <a href="https://cloudbuild.googleapis.com/">https://cloudbuild.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/cloud-build/docs/">External documentation</a>

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

<h1 id="cloud-build-api-projects">projects</h1>

## cloudbuild.projects.workerPools.get

<a id="opIdcloudbuild.projects.workerPools.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha2/{name}`

Returns details of a `WorkerPool`.

<h3 id="cloudbuildprojectsworkerpoolsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the `WorkerPool` to retrieve. Format: projects/{project}/workerPools/{workerPool}|
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
  "createTime": "string",
  "deleteTime": "string",
  "name": "string",
  "networkConfig": {
    "peeredNetwork": "string"
  },
  "region": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string",
  "workerConfig": {
    "diskSizeGb": "string",
    "machineType": "string"
  }
}
```

<h3 id="cloudbuildprojectsworkerpoolsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WorkerPool](#schemaworkerpool)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudbuild.projects.workerPools.delete

<a id="opIdcloudbuild.projects.workerPools.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1alpha2/{name}`

Deletes a `WorkerPool`.

<h3 id="cloudbuildprojectsworkerpoolsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the `WorkerPool` to delete. Format: projects/{project}/workerPools/{workerPool}|
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

<h3 id="cloudbuildprojectsworkerpoolsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudbuild.projects.workerPools.patch

<a id="opIdcloudbuild.projects.workerPools.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha2/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "networkConfig": {
      "peeredNetwork": "string"
    },
    "region": "string",
    "workerConfig": {
      "diskSizeGb": "string",
      "machineType": "string"
    }
  }'
```

`PATCH /v1alpha2/{name}`

Updates a `WorkerPool`.

> Body parameter

```json
{
  "networkConfig": {
    "peeredNetwork": "string"
  },
  "region": "string",
  "workerConfig": {
    "diskSizeGb": "string",
    "machineType": "string"
  }
}
```

<h3 id="cloudbuildprojectsworkerpoolspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The resource name of the `WorkerPool`. Format of the name is `projects/{project_id}/workerPools/{worker_pool_id}`, where the value of {worker_pool_id} is provided in the CreateWorkerPool request.|
|updateMask|query|string|false|A mask specifying which fields in `WorkerPool` should be updated.|
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
|body|body|[WorkerPool](#schemaworkerpool)|false|none|
|» networkConfig|body|[NetworkConfig](#schemanetworkconfig)|false|Network configuration for the `WorkerPool`.|
|» region|body|string|false|Required. Immutable. The region where the `WorkerPool` runs. Only "us-central1" is currently supported. Note that `region` cannot be changed once the `WorkerPool` is created.|
|» workerConfig|body|[WorkerConfig](#schemaworkerconfig)|false|Worker configuration for the `WorkerPool`.|

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
  "createTime": "string",
  "deleteTime": "string",
  "name": "string",
  "networkConfig": {
    "peeredNetwork": "string"
  },
  "region": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string",
  "workerConfig": {
    "diskSizeGb": "string",
    "machineType": "string"
  }
}
```

<h3 id="cloudbuildprojectsworkerpoolspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WorkerPool](#schemaworkerpool)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudbuild.projects.locations.operations.cancel

<a id="opIdcloudbuild.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha2/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1alpha2/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="cloudbuildprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="cloudbuildprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudbuild.projects.workerPools.list

<a id="opIdcloudbuild.projects.workerPools.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha2/string/workerPools \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha2/{parent}/workerPools`

Lists `WorkerPool`s by project.

<h3 id="cloudbuildprojectsworkerpoolslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of `WorkerPools`. Format: projects/{project}|
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
  "workerPools": [
    {
      "createTime": "string",
      "deleteTime": "string",
      "name": "string",
      "networkConfig": {
        "peeredNetwork": "string"
      },
      "region": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string",
      "workerConfig": {
        "diskSizeGb": "string",
        "machineType": "string"
      }
    }
  ]
}
```

<h3 id="cloudbuildprojectsworkerpoolslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListWorkerPoolsResponse](#schemalistworkerpoolsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudbuild.projects.workerPools.create

<a id="opIdcloudbuild.projects.workerPools.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha2/string/workerPools \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "networkConfig": {
      "peeredNetwork": "string"
    },
    "region": "string",
    "workerConfig": {
      "diskSizeGb": "string",
      "machineType": "string"
    }
  }'
```

`POST /v1alpha2/{parent}/workerPools`

Creates a `WorkerPool` to run the builds, and returns the new worker pool.

> Body parameter

```json
{
  "networkConfig": {
    "peeredNetwork": "string"
  },
  "region": "string",
  "workerConfig": {
    "diskSizeGb": "string",
    "machineType": "string"
  }
}
```

<h3 id="cloudbuildprojectsworkerpoolscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource where this book will be created. Format: projects/{project}|
|workerPoolId|query|string|false|Required. Immutable. The ID to use for the `WorkerPool`, which will become the final component of the resource name. This value should be 1-63 characters, and valid characters are /a-z-/.|
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
|body|body|[WorkerPool](#schemaworkerpool)|false|none|
|» networkConfig|body|[NetworkConfig](#schemanetworkconfig)|false|Network configuration for the `WorkerPool`.|
|» region|body|string|false|Required. Immutable. The region where the `WorkerPool` runs. Only "us-central1" is currently supported. Note that `region` cannot be changed once the `WorkerPool` is created.|
|» workerConfig|body|[WorkerConfig](#schemaworkerconfig)|false|Worker configuration for the `WorkerPool`.|

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
  "createTime": "string",
  "deleteTime": "string",
  "name": "string",
  "networkConfig": {
    "peeredNetwork": "string"
  },
  "region": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string",
  "workerConfig": {
    "diskSizeGb": "string",
    "machineType": "string"
  }
}
```

<h3 id="cloudbuildprojectsworkerpoolscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WorkerPool](#schemaworkerpool)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_ApprovalConfig">ApprovalConfig</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalconfig"></a>
<a id="schema_ApprovalConfig"></a>
<a id="tocSapprovalconfig"></a>
<a id="tocsapprovalconfig"></a>

```json
{
  "approvalRequired": true
}
```

ApprovalConfig describes configuration for manual approval of a build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRequired|boolean|false|none|Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start.|

<h2 id="tocS_ApprovalResult">ApprovalResult</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalresult"></a>
<a id="schema_ApprovalResult"></a>
<a id="tocSapprovalresult"></a>
<a id="tocsapprovalresult"></a>

```json
{
  "approvalTime": "string",
  "approverAccount": "string",
  "comment": "string",
  "decision": "DECISION_UNSPECIFIED",
  "url": "string"
}
```

ApprovalResult describes the decision and associated metadata of a manual approval of a build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalTime|string(google-datetime)|false|read-only|Output only. The time when the approval decision was made.|
|approverAccount|string|false|read-only|Output only. Email of the user that called the ApproveBuild API to approve or reject a build at the time that the API was called.|
|comment|string|false|none|Optional. An optional comment for this manual approval result.|
|decision|string|false|none|Required. The decision of this manual approval.|
|url|string|false|none|Optional. An optional URL tied to this manual approval result. This field is essentially the same as comment, except that it will be rendered by the UI differently. An example use case is a link to an external job that approved this Build.|

#### Enumerated Values

|Property|Value|
|---|---|
|decision|DECISION_UNSPECIFIED|
|decision|APPROVED|
|decision|REJECTED|

<h2 id="tocS_ArtifactObjects">ArtifactObjects</h2>
<!-- backwards compatibility -->
<a id="schemaartifactobjects"></a>
<a id="schema_ArtifactObjects"></a>
<a id="tocSartifactobjects"></a>
<a id="tocsartifactobjects"></a>

```json
{
  "location": "string",
  "paths": [
    "string"
  ],
  "timing": {
    "endTime": "string",
    "startTime": "string"
  }
}
```

Files in the workspace to upload to Cloud Storage upon successful completion of all build steps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|none|Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix.|
|paths|[string]|false|none|Path globs used to match files in the build's workspace.|
|timing|[TimeSpan](#schematimespan)|false|none|Output only. Stores timing information for pushing all artifact objects.|

<h2 id="tocS_ArtifactResult">ArtifactResult</h2>
<!-- backwards compatibility -->
<a id="schemaartifactresult"></a>
<a id="schema_ArtifactResult"></a>
<a id="tocSartifactresult"></a>
<a id="tocsartifactresult"></a>

```json
{
  "fileHash": [
    {
      "fileHash": [
        {
          "type": "NONE",
          "value": "string"
        }
      ]
    }
  ],
  "location": "string"
}
```

An artifact that was uploaded during a build. This is a single record in the artifact manifest JSON file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileHash|[[FileHashes](#schemafilehashes)]|false|none|The file hash of the artifact.|
|location|string|false|none|The path of an artifact in a Google Cloud Storage bucket, with the generation number. For example, `gs://mybucket/path/to/output.jar#generation`.|

<h2 id="tocS_Artifacts">Artifacts</h2>
<!-- backwards compatibility -->
<a id="schemaartifacts"></a>
<a id="schema_Artifacts"></a>
<a id="tocSartifacts"></a>
<a id="tocsartifacts"></a>

```json
{
  "images": [
    "string"
  ],
  "mavenArtifacts": [
    {
      "artifactId": "string",
      "groupId": "string",
      "path": "string",
      "repository": "string",
      "version": "string"
    }
  ],
  "objects": {
    "location": "string",
    "paths": [
      "string"
    ],
    "timing": {
      "endTime": "string",
      "startTime": "string"
    }
  },
  "pythonPackages": [
    {
      "paths": [
        "string"
      ],
      "repository": "string"
    }
  ]
}
```

Artifacts produced by a build that should be uploaded upon successful completion of all build steps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|images|[string]|false|none|A list of images to be pushed upon the successful completion of all build steps. The images will be pushed using the builder service account's credentials. The digests of the pushed images will be stored in the Build resource's results field. If any of the images fail to be pushed, the build is marked FAILURE.|
|mavenArtifacts|[[MavenArtifact](#schemamavenartifact)]|false|none|A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. Artifacts in the workspace matching specified paths globs will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any artifacts fail to be pushed, the build is marked FAILURE.|
|objects|[ArtifactObjects](#schemaartifactobjects)|false|none|A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps. Files in the workspace matching specified paths globs will be uploaded to the specified Cloud Storage location using the builder service account's credentials. The location and generation of the uploaded objects will be stored in the Build resource's results field. If any objects fail to be pushed, the build is marked FAILURE.|
|pythonPackages|[[PythonPackage](#schemapythonpackage)]|false|none|A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps. The build service account credentials will be used to perform the upload. If any objects fail to be pushed, the build is marked FAILURE.|

<h2 id="tocS_BatchCreateBitbucketServerConnectedRepositoriesResponse">BatchCreateBitbucketServerConnectedRepositoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatebitbucketserverconnectedrepositoriesresponse"></a>
<a id="schema_BatchCreateBitbucketServerConnectedRepositoriesResponse"></a>
<a id="tocSbatchcreatebitbucketserverconnectedrepositoriesresponse"></a>
<a id="tocsbatchcreatebitbucketserverconnectedrepositoriesresponse"></a>

```json
{
  "bitbucketServerConnectedRepositories": [
    {
      "parent": "string",
      "repo": {
        "projectKey": "string",
        "repoSlug": "string",
        "webhookId": 0
      },
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    }
  ]
}
```

Response of BatchCreateBitbucketServerConnectedRepositories RPC method including all successfully connected Bitbucket Server repositories.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bitbucketServerConnectedRepositories|[[BitbucketServerConnectedRepository](#schemabitbucketserverconnectedrepository)]|false|none|The connected Bitbucket Server repositories.|

<h2 id="tocS_BatchCreateBitbucketServerConnectedRepositoriesResponseMetadata">BatchCreateBitbucketServerConnectedRepositoriesResponseMetadata</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatebitbucketserverconnectedrepositoriesresponsemetadata"></a>
<a id="schema_BatchCreateBitbucketServerConnectedRepositoriesResponseMetadata"></a>
<a id="tocSbatchcreatebitbucketserverconnectedrepositoriesresponsemetadata"></a>
<a id="tocsbatchcreatebitbucketserverconnectedrepositoriesresponsemetadata"></a>

```json
{
  "completeTime": "string",
  "config": "string",
  "createTime": "string"
}
```

Metadata for `BatchCreateBitbucketServerConnectedRepositories` operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completeTime|string(google-datetime)|false|none|Time the operation was completed.|
|config|string|false|none|The name of the `BitbucketServerConfig` that added connected repositories. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{config}`|
|createTime|string(google-datetime)|false|none|Time the operation was created.|

<h2 id="tocS_BatchCreateGitLabConnectedRepositoriesResponse">BatchCreateGitLabConnectedRepositoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreategitlabconnectedrepositoriesresponse"></a>
<a id="schema_BatchCreateGitLabConnectedRepositoriesResponse"></a>
<a id="tocSbatchcreategitlabconnectedrepositoriesresponse"></a>
<a id="tocsbatchcreategitlabconnectedrepositoriesresponse"></a>

```json
{
  "gitlabConnectedRepositories": [
    {
      "parent": "string",
      "repo": {
        "id": "string",
        "webhookId": 0
      },
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    }
  ]
}
```

Response of BatchCreateGitLabConnectedRepositories RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gitlabConnectedRepositories|[[GitLabConnectedRepository](#schemagitlabconnectedrepository)]|false|none|The GitLab connected repository requests' responses.|

<h2 id="tocS_BatchCreateGitLabConnectedRepositoriesResponseMetadata">BatchCreateGitLabConnectedRepositoriesResponseMetadata</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreategitlabconnectedrepositoriesresponsemetadata"></a>
<a id="schema_BatchCreateGitLabConnectedRepositoriesResponseMetadata"></a>
<a id="tocSbatchcreategitlabconnectedrepositoriesresponsemetadata"></a>
<a id="tocsbatchcreategitlabconnectedrepositoriesresponsemetadata"></a>

```json
{
  "completeTime": "string",
  "config": "string",
  "createTime": "string"
}
```

Metadata for `BatchCreateGitLabConnectedRepositories` operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completeTime|string(google-datetime)|false|none|Time the operation was completed.|
|config|string|false|none|The name of the `GitLabConfig` that added connected repositories. Format: `projects/{project}/locations/{location}/gitLabConfigs/{config}`|
|createTime|string(google-datetime)|false|none|Time the operation was created.|

<h2 id="tocS_BatchCreateRepositoriesResponse">BatchCreateRepositoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreaterepositoriesresponse"></a>
<a id="schema_BatchCreateRepositoriesResponse"></a>
<a id="tocSbatchcreaterepositoriesresponse"></a>
<a id="tocsbatchcreaterepositoriesresponse"></a>

```json
{
  "repositories": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "string",
      "etag": "string",
      "name": "string",
      "remoteUri": "string",
      "updateTime": "string"
    }
  ]
}
```

Message for response of creating repositories in batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositories|[[Repository](#schemarepository)]|false|none|Repository resources created.|

<h2 id="tocS_BitbucketServerConnectedRepository">BitbucketServerConnectedRepository</h2>
<!-- backwards compatibility -->
<a id="schemabitbucketserverconnectedrepository"></a>
<a id="schema_BitbucketServerConnectedRepository"></a>
<a id="tocSbitbucketserverconnectedrepository"></a>
<a id="tocsbitbucketserverconnectedrepository"></a>

```json
{
  "parent": "string",
  "repo": {
    "projectKey": "string",
    "repoSlug": "string",
    "webhookId": 0
  },
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

/ BitbucketServerConnectedRepository represents a connected Bitbucket Server / repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parent|string|false|none|The name of the `BitbucketServerConfig` that added connected repository. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{config}`|
|repo|[BitbucketServerRepositoryId](#schemabitbucketserverrepositoryid)|false|none|The Bitbucket Server repositories to connect.|
|status|[Status](#schemastatus)|false|none|Output only. The status of the repo connection request.|

<h2 id="tocS_BitbucketServerRepositoryId">BitbucketServerRepositoryId</h2>
<!-- backwards compatibility -->
<a id="schemabitbucketserverrepositoryid"></a>
<a id="schema_BitbucketServerRepositoryId"></a>
<a id="tocSbitbucketserverrepositoryid"></a>
<a id="tocsbitbucketserverrepositoryid"></a>

```json
{
  "projectKey": "string",
  "repoSlug": "string",
  "webhookId": 0
}
```

BitbucketServerRepositoryId identifies a specific repository hosted on a Bitbucket Server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectKey|string|false|none|Required. Identifier for the project storing the repository.|
|repoSlug|string|false|none|Required. Identifier for the repository.|
|webhookId|integer(int32)|false|read-only|Output only. The ID of the webhook that was created for receiving events from this repo. We only create and manage a single webhook for each repo.|

<h2 id="tocS_Build">Build</h2>
<!-- backwards compatibility -->
<a id="schemabuild"></a>
<a id="schema_Build"></a>
<a id="tocSbuild"></a>
<a id="tocsbuild"></a>

```json
{
  "approval": {
    "config": {
      "approvalRequired": true
    },
    "result": {
      "approvalTime": "string",
      "approverAccount": "string",
      "comment": "string",
      "decision": "DECISION_UNSPECIFIED",
      "url": "string"
    },
    "state": "STATE_UNSPECIFIED"
  },
  "artifacts": {
    "images": [
      "string"
    ],
    "mavenArtifacts": [
      {
        "artifactId": "string",
        "groupId": "string",
        "path": "string",
        "repository": "string",
        "version": "string"
      }
    ],
    "objects": {
      "location": "string",
      "paths": [
        "string"
      ],
      "timing": {
        "endTime": "string",
        "startTime": "string"
      }
    },
    "pythonPackages": [
      {
        "paths": [
          "string"
        ],
        "repository": "string"
      }
    ]
  },
  "availableSecrets": {
    "inline": [
      {
        "envMap": {
          "property1": "string",
          "property2": "string"
        },
        "kmsKeyName": "string"
      }
    ],
    "secretManager": [
      {
        "env": "string",
        "versionName": "string"
      }
    ]
  },
  "buildTriggerId": "string",
  "createTime": "string",
  "failureInfo": {
    "detail": "string",
    "type": "FAILURE_TYPE_UNSPECIFIED"
  },
  "finishTime": "string",
  "id": "string",
  "images": [
    "string"
  ],
  "logUrl": "string",
  "logsBucket": "string",
  "name": "string",
  "options": {
    "diskSizeGb": "string",
    "dynamicSubstitutions": true,
    "env": [
      "string"
    ],
    "logStreamingOption": "STREAM_DEFAULT",
    "logging": "LOGGING_UNSPECIFIED",
    "machineType": "UNSPECIFIED",
    "pool": {
      "name": "string"
    },
    "requestedVerifyOption": "NOT_VERIFIED",
    "secretEnv": [
      "string"
    ],
    "sourceProvenanceHash": [
      "NONE"
    ],
    "substitutionOption": "MUST_MATCH",
    "volumes": [
      {
        "name": "string",
        "path": "string"
      }
    ],
    "workerPool": "string"
  },
  "projectId": "string",
  "queueTtl": "string",
  "results": {
    "artifactManifest": "string",
    "artifactTiming": {
      "endTime": "string",
      "startTime": "string"
    },
    "buildStepImages": [
      "string"
    ],
    "buildStepOutputs": [
      "string"
    ],
    "images": [
      {
        "digest": "string",
        "name": "string",
        "pushTiming": {
          "endTime": "string",
          "startTime": "string"
        }
      }
    ],
    "mavenArtifacts": [
      {
        "fileHashes": {
          "fileHash": [
            {
              "type": "NONE",
              "value": "string"
            }
          ]
        },
        "pushTiming": {
          "endTime": "string",
          "startTime": "string"
        },
        "uri": "string"
      }
    ],
    "numArtifacts": "string",
    "pythonPackages": [
      {
        "fileHashes": {
          "fileHash": [
            {
              "type": "NONE",
              "value": "string"
            }
          ]
        },
        "pushTiming": {
          "endTime": "string",
          "startTime": "string"
        },
        "uri": "string"
      }
    ]
  },
  "secrets": [
    {
      "kmsKeyName": "string",
      "secretEnv": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "serviceAccount": "string",
  "source": {
    "repoSource": {
      "branchName": "string",
      "commitSha": "string",
      "dir": "string",
      "invertRegex": true,
      "projectId": "string",
      "repoName": "string",
      "substitutions": {
        "property1": "string",
        "property2": "string"
      },
      "tagName": "string"
    },
    "storageSource": {
      "bucket": "string",
      "generation": "string",
      "object": "string"
    },
    "storageSourceManifest": {
      "bucket": "string",
      "generation": "string",
      "object": "string"
    }
  },
  "sourceProvenance": {
    "fileHashes": {
      "property1": {
        "fileHash": [
          {
            "type": "NONE",
            "value": "string"
          }
        ]
      },
      "property2": {
        "fileHash": [
          {
            "type": "NONE",
            "value": "string"
          }
        ]
      }
    },
    "resolvedRepoSource": {
      "branchName": "string",
      "commitSha": "string",
      "dir": "string",
      "invertRegex": true,
      "projectId": "string",
      "repoName": "string",
      "substitutions": {
        "property1": "string",
        "property2": "string"
      },
      "tagName": "string"
    },
    "resolvedStorageSource": {
      "bucket": "string",
      "generation": "string",
      "object": "string"
    },
    "resolvedStorageSourceManifest": {
      "bucket": "string",
      "generation": "string",
      "object": "string"
    }
  },
  "startTime": "string",
  "status": "STATUS_UNKNOWN",
  "statusDetail": "string",
  "steps": [
    {
      "allowExitCodes": [
        0
      ],
      "allowFailure": true,
      "args": [
        "string"
      ],
      "dir": "string",
      "entrypoint": "string",
      "env": [
        "string"
      ],
      "exitCode": 0,
      "id": "string",
      "name": "string",
      "pullTiming": {
        "endTime": "string",
        "startTime": "string"
      },
      "script": "string",
      "secretEnv": [
        "string"
      ],
      "status": "STATUS_UNKNOWN",
      "timeout": "string",
      "timing": {
        "endTime": "string",
        "startTime": "string"
      },
      "volumes": [
        {
          "name": "string",
          "path": "string"
        }
      ],
      "waitFor": [
        "string"
      ]
    }
  ],
  "substitutions": {
    "property1": "string",
    "property2": "string"
  },
  "tags": [
    "string"
  ],
  "timeout": "string",
  "timing": {
    "property1": {
      "endTime": "string",
      "startTime": "string"
    },
    "property2": {
      "endTime": "string",
      "startTime": "string"
    }
  },
  "warnings": [
    {
      "priority": "PRIORITY_UNSPECIFIED",
      "text": "string"
    }
  ]
}
```

A build resource in the Cloud Build API. At a high level, a `Build` describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approval|[BuildApproval](#schemabuildapproval)|false|none|Output only. Describes this build's approval configuration, status, and result.|
|artifacts|[Artifacts](#schemaartifacts)|false|none|Artifacts produced by the build that should be uploaded upon successful completion of all build steps.|
|availableSecrets|[Secrets](#schemasecrets)|false|none|Secrets and secret environment variables.|
|buildTriggerId|string|false|read-only|Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically.|
|createTime|string(google-datetime)|false|read-only|Output only. Time at which the request to create the build was received.|
|failureInfo|[FailureInfo](#schemafailureinfo)|false|none|Output only. Contains information about the build when status=FAILURE.|
|finishTime|string(google-datetime)|false|read-only|Output only. Time at which execution of the build was finished. The difference between finish_time and start_time is the duration of the build's execution.|
|id|string|false|read-only|Output only. Unique identifier of the build.|
|images|[string]|false|none|A list of images to be pushed upon the successful completion of all build steps. The images are pushed using the builder service account's credentials. The digests of the pushed images will be stored in the `Build` resource's results field. If any of the images fail to be pushed, the build status is marked `FAILURE`.|
|logUrl|string|false|read-only|Output only. URL to logs for this build in Google Cloud Console.|
|logsBucket|string|false|none|Google Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`.|
|name|string|false|read-only|Output only. The 'Build' name with format: `projects/{project}/locations/{location}/builds/{build}`, where {build} is a unique identifier generated by the service.|
|options|[BuildOptions](#schemabuildoptions)|false|none|Special options for this build.|
|projectId|string|false|read-only|Output only. ID of the project.|
|queueTtl|string(google-duration)|false|none|TTL in queue for this build. If provided and the build is enqueued longer than this value, the build will expire and the build status will be `EXPIRED`. The TTL starts ticking from create_time.|
|results|[Results](#schemaresults)|false|none|Output only. Results of the build.|
|secrets|[[Secret](#schemasecret)]|false|none|Secrets to decrypt using Cloud Key Management Service. Note: Secret Manager is the recommended technique for managing sensitive data with Cloud Build. Use `available_secrets` to configure builds to access secrets from Secret Manager. For instructions, see: https://cloud.google.com/cloud-build/docs/securing-builds/use-secrets|
|serviceAccount|string|false|none|IAM service account whose credentials will be used at build runtime. Must be of the format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. ACCOUNT can be email address or uniqueId of the service account. |
|source|[Source](#schemasource)|false|none|The location of the source files to build.|
|sourceProvenance|[SourceProvenance](#schemasourceprovenance)|false|none|Output only. A permanent fixed identifier for source.|
|startTime|string(google-datetime)|false|read-only|Output only. Time at which execution of the build was started.|
|status|string|false|read-only|Output only. Status of the build.|
|statusDetail|string|false|read-only|Output only. Customer-readable message about the current status.|
|steps|[[BuildStep](#schemabuildstep)]|false|none|Required. The operations to be performed on the workspace.|
|substitutions|object|false|none|Substitutions data for `Build` resource.|
|tags|[string]|false|none|Tags for annotation of a `Build`. These are not docker tags.|
|timeout|string(google-duration)|false|none|Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is ten minutes.|
|timing|object|false|read-only|Output only. Stores timing information for phases of the build. Valid keys are: * BUILD: time to execute all build steps. * PUSH: time to push all artifacts including docker images and non docker artifacts. * FETCHSOURCE: time to fetch source. * SETUPBUILD: time to set up build. If the build does not specify source or images, these keys will not be included.|
|warnings|[[Warning](#schemawarning)]|false|read-only|Output only. Non-fatal problems encountered during the execution of the build.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNKNOWN|
|status|PENDING|
|status|QUEUED|
|status|WORKING|
|status|SUCCESS|
|status|FAILURE|
|status|INTERNAL_ERROR|
|status|TIMEOUT|
|status|CANCELLED|
|status|EXPIRED|

<h2 id="tocS_BuildApproval">BuildApproval</h2>
<!-- backwards compatibility -->
<a id="schemabuildapproval"></a>
<a id="schema_BuildApproval"></a>
<a id="tocSbuildapproval"></a>
<a id="tocsbuildapproval"></a>

```json
{
  "config": {
    "approvalRequired": true
  },
  "result": {
    "approvalTime": "string",
    "approverAccount": "string",
    "comment": "string",
    "decision": "DECISION_UNSPECIFIED",
    "url": "string"
  },
  "state": "STATE_UNSPECIFIED"
}
```

BuildApproval describes a build's approval configuration, state, and result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[ApprovalConfig](#schemaapprovalconfig)|false|none|Output only. Configuration for manual approval of this build.|
|result|[ApprovalResult](#schemaapprovalresult)|false|none|Output only. Result of manual approval for this Build.|
|state|string|false|read-only|Output only. The state of this build's approval.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|APPROVED|
|state|REJECTED|
|state|CANCELLED|

<h2 id="tocS_BuildOperationMetadata">BuildOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemabuildoperationmetadata"></a>
<a id="schema_BuildOperationMetadata"></a>
<a id="tocSbuildoperationmetadata"></a>
<a id="tocsbuildoperationmetadata"></a>

```json
{
  "build": {
    "approval": {
      "config": {
        "approvalRequired": true
      },
      "result": {
        "approvalTime": "string",
        "approverAccount": "string",
        "comment": "string",
        "decision": "DECISION_UNSPECIFIED",
        "url": "string"
      },
      "state": "STATE_UNSPECIFIED"
    },
    "artifacts": {
      "images": [
        "string"
      ],
      "mavenArtifacts": [
        {
          "artifactId": "string",
          "groupId": "string",
          "path": "string",
          "repository": "string",
          "version": "string"
        }
      ],
      "objects": {
        "location": "string",
        "paths": [
          "string"
        ],
        "timing": {
          "endTime": "string",
          "startTime": "string"
        }
      },
      "pythonPackages": [
        {
          "paths": [
            "string"
          ],
          "repository": "string"
        }
      ]
    },
    "availableSecrets": {
      "inline": [
        {
          "envMap": {
            "property1": "string",
            "property2": "string"
          },
          "kmsKeyName": "string"
        }
      ],
      "secretManager": [
        {
          "env": "string",
          "versionName": "string"
        }
      ]
    },
    "buildTriggerId": "string",
    "createTime": "string",
    "failureInfo": {
      "detail": "string",
      "type": "FAILURE_TYPE_UNSPECIFIED"
    },
    "finishTime": "string",
    "id": "string",
    "images": [
      "string"
    ],
    "logUrl": "string",
    "logsBucket": "string",
    "name": "string",
    "options": {
      "diskSizeGb": "string",
      "dynamicSubstitutions": true,
      "env": [
        "string"
      ],
      "logStreamingOption": "STREAM_DEFAULT",
      "logging": "LOGGING_UNSPECIFIED",
      "machineType": "UNSPECIFIED",
      "pool": {
        "name": "string"
      },
      "requestedVerifyOption": "NOT_VERIFIED",
      "secretEnv": [
        "string"
      ],
      "sourceProvenanceHash": [
        "NONE"
      ],
      "substitutionOption": "MUST_MATCH",
      "volumes": [
        {
          "name": "string",
          "path": "string"
        }
      ],
      "workerPool": "string"
    },
    "projectId": "string",
    "queueTtl": "string",
    "results": {
      "artifactManifest": "string",
      "artifactTiming": {
        "endTime": "string",
        "startTime": "string"
      },
      "buildStepImages": [
        "string"
      ],
      "buildStepOutputs": [
        "string"
      ],
      "images": [
        {
          "digest": "string",
          "name": "string",
          "pushTiming": {
            "endTime": "string",
            "startTime": "string"
          }
        }
      ],
      "mavenArtifacts": [
        {
          "fileHashes": {
            "fileHash": [
              {
                "type": "NONE",
                "value": "string"
              }
            ]
          },
          "pushTiming": {
            "endTime": "string",
            "startTime": "string"
          },
          "uri": "string"
        }
      ],
      "numArtifacts": "string",
      "pythonPackages": [
        {
          "fileHashes": {
            "fileHash": [
              {
                "type": "NONE",
                "value": "string"
              }
            ]
          },
          "pushTiming": {
            "endTime": "string",
            "startTime": "string"
          },
          "uri": "string"
        }
      ]
    },
    "secrets": [
      {
        "kmsKeyName": "string",
        "secretEnv": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "serviceAccount": "string",
    "source": {
      "repoSource": {
        "branchName": "string",
        "commitSha": "string",
        "dir": "string",
        "invertRegex": true,
        "projectId": "string",
        "repoName": "string",
        "substitutions": {
          "property1": "string",
          "property2": "string"
        },
        "tagName": "string"
      },
      "storageSource": {
        "bucket": "string",
        "generation": "string",
        "object": "string"
      },
      "storageSourceManifest": {
        "bucket": "string",
        "generation": "string",
        "object": "string"
      }
    },
    "sourceProvenance": {
      "fileHashes": {
        "property1": {
          "fileHash": [
            {
              "type": "NONE",
              "value": "string"
            }
          ]
        },
        "property2": {
          "fileHash": [
            {
              "type": "NONE",
              "value": "string"
            }
          ]
        }
      },
      "resolvedRepoSource": {
        "branchName": "string",
        "commitSha": "string",
        "dir": "string",
        "invertRegex": true,
        "projectId": "string",
        "repoName": "string",
        "substitutions": {
          "property1": "string",
          "property2": "string"
        },
        "tagName": "string"
      },
      "resolvedStorageSource": {
        "bucket": "string",
        "generation": "string",
        "object": "string"
      },
      "resolvedStorageSourceManifest": {
        "bucket": "string",
        "generation": "string",
        "object": "string"
      }
    },
    "startTime": "string",
    "status": "STATUS_UNKNOWN",
    "statusDetail": "string",
    "steps": [
      {
        "allowExitCodes": [
          0
        ],
        "allowFailure": true,
        "args": [
          "string"
        ],
        "dir": "string",
        "entrypoint": "string",
        "env": [
          "string"
        ],
        "exitCode": 0,
        "id": "string",
        "name": "string",
        "pullTiming": {
          "endTime": "string",
          "startTime": "string"
        },
        "script": "string",
        "secretEnv": [
          "string"
        ],
        "status": "STATUS_UNKNOWN",
        "timeout": "string",
        "timing": {
          "endTime": "string",
          "startTime": "string"
        },
        "volumes": [
          {
            "name": "string",
            "path": "string"
          }
        ],
        "waitFor": [
          "string"
        ]
      }
    ],
    "substitutions": {
      "property1": "string",
      "property2": "string"
    },
    "tags": [
      "string"
    ],
    "timeout": "string",
    "timing": {
      "property1": {
        "endTime": "string",
        "startTime": "string"
      },
      "property2": {
        "endTime": "string",
        "startTime": "string"
      }
    },
    "warnings": [
      {
        "priority": "PRIORITY_UNSPECIFIED",
        "text": "string"
      }
    ]
  }
}
```

Metadata for build operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build|[Build](#schemabuild)|false|none|The build that the operation is tracking.|

<h2 id="tocS_BuildOptions">BuildOptions</h2>
<!-- backwards compatibility -->
<a id="schemabuildoptions"></a>
<a id="schema_BuildOptions"></a>
<a id="tocSbuildoptions"></a>
<a id="tocsbuildoptions"></a>

```json
{
  "diskSizeGb": "string",
  "dynamicSubstitutions": true,
  "env": [
    "string"
  ],
  "logStreamingOption": "STREAM_DEFAULT",
  "logging": "LOGGING_UNSPECIFIED",
  "machineType": "UNSPECIFIED",
  "pool": {
    "name": "string"
  },
  "requestedVerifyOption": "NOT_VERIFIED",
  "secretEnv": [
    "string"
  ],
  "sourceProvenanceHash": [
    "NONE"
  ],
  "substitutionOption": "MUST_MATCH",
  "volumes": [
    {
      "name": "string",
      "path": "string"
    }
  ],
  "workerPool": "string"
}
```

Optional arguments to enable specific features of builds.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskSizeGb|string(int64)|false|none|Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 2000GB; builds that request more than the maximum are rejected with an error.|
|dynamicSubstitutions|boolean|false|none|Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file.|
|env|[string]|false|none|A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".|
|logStreamingOption|string|false|none|Option to define build log streaming behavior to Google Cloud Storage.|
|logging|string|false|none|Option to specify the logging mode, which determines if and where build logs are stored.|
|machineType|string|false|none|Compute Engine machine type on which to run the build.|
|pool|[PoolOption](#schemapooloption)|false|none|Optional. Specification for execution on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.|
|requestedVerifyOption|string|false|none|Requested verifiability options.|
|secretEnv|[string]|false|none|A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. These variables will be available to all build steps in this build.|
|sourceProvenanceHash|[string]|false|none|Requested hash for SourceProvenance.|
|substitutionOption|string|false|none|Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file.|
|volumes|[[Volume](#schemavolume)]|false|none|Global list of volumes to mount for ALL build steps Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step. Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration.|
|workerPool|string|false|none|This field deprecated; please use `pool.name` instead.|

#### Enumerated Values

|Property|Value|
|---|---|
|logStreamingOption|STREAM_DEFAULT|
|logStreamingOption|STREAM_ON|
|logStreamingOption|STREAM_OFF|
|logging|LOGGING_UNSPECIFIED|
|logging|LEGACY|
|logging|GCS_ONLY|
|logging|STACKDRIVER_ONLY|
|logging|CLOUD_LOGGING_ONLY|
|logging|NONE|
|machineType|UNSPECIFIED|
|machineType|N1_HIGHCPU_8|
|machineType|N1_HIGHCPU_32|
|machineType|E2_HIGHCPU_8|
|machineType|E2_HIGHCPU_32|
|requestedVerifyOption|NOT_VERIFIED|
|requestedVerifyOption|VERIFIED|
|sourceProvenanceHash|NONE|
|sourceProvenanceHash|SHA256|
|sourceProvenanceHash|MD5|
|substitutionOption|MUST_MATCH|
|substitutionOption|ALLOW_LOOSE|

<h2 id="tocS_BuildStep">BuildStep</h2>
<!-- backwards compatibility -->
<a id="schemabuildstep"></a>
<a id="schema_BuildStep"></a>
<a id="tocSbuildstep"></a>
<a id="tocsbuildstep"></a>

```json
{
  "allowExitCodes": [
    0
  ],
  "allowFailure": true,
  "args": [
    "string"
  ],
  "dir": "string",
  "entrypoint": "string",
  "env": [
    "string"
  ],
  "exitCode": 0,
  "id": "string",
  "name": "string",
  "pullTiming": {
    "endTime": "string",
    "startTime": "string"
  },
  "script": "string",
  "secretEnv": [
    "string"
  ],
  "status": "STATUS_UNKNOWN",
  "timeout": "string",
  "timing": {
    "endTime": "string",
    "startTime": "string"
  },
  "volumes": [
    {
      "name": "string",
      "path": "string"
    }
  ],
  "waitFor": [
    "string"
  ]
}
```

A step in the build pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowExitCodes|[integer(int32)]|false|none|Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence.|
|allowFailure|boolean|false|none|Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field.|
|args|[string]|false|none|A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments.|
|dir|string|false|none|Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution.|
|entrypoint|string|false|none|Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used.|
|env|[string]|false|none|A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".|
|exitCode|integer(int32)|false|read-only|Output only. Return code from running the step.|
|id|string|false|none|Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency.|
|name|string|false|none|Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step.|
|pullTiming|[TimeSpan](#schematimespan)|false|none|Output only. Stores timing information for pulling this build step's builder image only.|
|script|string|false|none|A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args.|
|secretEnv|[string]|false|none|A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`.|
|status|string|false|read-only|Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses.|
|timeout|string(google-duration)|false|none|Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out.|
|timing|[TimeSpan](#schematimespan)|false|none|Output only. Stores timing information for executing this build step.|
|volumes|[[Volume](#schemavolume)]|false|none|List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration.|
|waitFor|[string]|false|none|The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNKNOWN|
|status|PENDING|
|status|QUEUED|
|status|WORKING|
|status|SUCCESS|
|status|FAILURE|
|status|INTERNAL_ERROR|
|status|TIMEOUT|
|status|CANCELLED|
|status|EXPIRED|

<h2 id="tocS_BuiltImage">BuiltImage</h2>
<!-- backwards compatibility -->
<a id="schemabuiltimage"></a>
<a id="schema_BuiltImage"></a>
<a id="tocSbuiltimage"></a>
<a id="tocsbuiltimage"></a>

```json
{
  "digest": "string",
  "name": "string",
  "pushTiming": {
    "endTime": "string",
    "startTime": "string"
  }
}
```

An image built by the pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digest|string|false|none|Docker Registry 2.0 digest.|
|name|string|false|none|Name used to push the container image to Google Container Registry, as presented to `docker push`.|
|pushTiming|[TimeSpan](#schematimespan)|false|none|Output only. Stores timing information for pushing the specified image.|

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

<h2 id="tocS_CreateBitbucketServerConfigOperationMetadata">CreateBitbucketServerConfigOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreatebitbucketserverconfigoperationmetadata"></a>
<a id="schema_CreateBitbucketServerConfigOperationMetadata"></a>
<a id="tocScreatebitbucketserverconfigoperationmetadata"></a>
<a id="tocscreatebitbucketserverconfigoperationmetadata"></a>

```json
{
  "bitbucketServerConfig": "string",
  "completeTime": "string",
  "createTime": "string"
}
```

Metadata for `CreateBitbucketServerConfig` operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bitbucketServerConfig|string|false|none|The resource name of the BitbucketServerConfig to be created. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{id}`.|
|completeTime|string(google-datetime)|false|none|Time the operation was completed.|
|createTime|string(google-datetime)|false|none|Time the operation was created.|

<h2 id="tocS_CreateGitHubEnterpriseConfigOperationMetadata">CreateGitHubEnterpriseConfigOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreategithubenterpriseconfigoperationmetadata"></a>
<a id="schema_CreateGitHubEnterpriseConfigOperationMetadata"></a>
<a id="tocScreategithubenterpriseconfigoperationmetadata"></a>
<a id="tocscreategithubenterpriseconfigoperationmetadata"></a>

```json
{
  "completeTime": "string",
  "createTime": "string",
  "githubEnterpriseConfig": "string"
}
```

Metadata for `CreateGithubEnterpriseConfig` operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completeTime|string(google-datetime)|false|none|Time the operation was completed.|
|createTime|string(google-datetime)|false|none|Time the operation was created.|
|githubEnterpriseConfig|string|false|none|The resource name of the GitHubEnterprise to be created. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`.|

<h2 id="tocS_CreateGitLabConfigOperationMetadata">CreateGitLabConfigOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreategitlabconfigoperationmetadata"></a>
<a id="schema_CreateGitLabConfigOperationMetadata"></a>
<a id="tocScreategitlabconfigoperationmetadata"></a>
<a id="tocscreategitlabconfigoperationmetadata"></a>

```json
{
  "completeTime": "string",
  "createTime": "string",
  "gitlabConfig": "string"
}
```

Metadata for `CreateGitLabConfig` operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completeTime|string(google-datetime)|false|none|Time the operation was completed.|
|createTime|string(google-datetime)|false|none|Time the operation was created.|
|gitlabConfig|string|false|none|The resource name of the GitLabConfig to be created. Format: `projects/{project}/locations/{location}/gitlabConfigs/{id}`.|

<h2 id="tocS_CreateWorkerPoolOperationMetadata">CreateWorkerPoolOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkerpooloperationmetadata"></a>
<a id="schema_CreateWorkerPoolOperationMetadata"></a>
<a id="tocScreateworkerpooloperationmetadata"></a>
<a id="tocscreateworkerpooloperationmetadata"></a>

```json
{
  "completeTime": "string",
  "createTime": "string",
  "workerPool": "string"
}
```

Metadata for the `CreateWorkerPool` operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completeTime|string(google-datetime)|false|none|Time the operation was completed.|
|createTime|string(google-datetime)|false|none|Time the operation was created.|
|workerPool|string|false|none|The resource name of the `WorkerPool` to create. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`.|

<h2 id="tocS_DeleteBitbucketServerConfigOperationMetadata">DeleteBitbucketServerConfigOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeletebitbucketserverconfigoperationmetadata"></a>
<a id="schema_DeleteBitbucketServerConfigOperationMetadata"></a>
<a id="tocSdeletebitbucketserverconfigoperationmetadata"></a>
<a id="tocsdeletebitbucketserverconfigoperationmetadata"></a>

```json
{
  "bitbucketServerConfig": "string",
  "completeTime": "string",
  "createTime": "string"
}
```

Metadata for `DeleteBitbucketServerConfig` operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bitbucketServerConfig|string|false|none|The resource name of the BitbucketServerConfig to be deleted. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{id}`.|
|completeTime|string(google-datetime)|false|none|Time the operation was completed.|
|createTime|string(google-datetime)|false|none|Time the operation was created.|

<h2 id="tocS_DeleteGitHubEnterpriseConfigOperationMetadata">DeleteGitHubEnterpriseConfigOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeletegithubenterpriseconfigoperationmetadata"></a>
<a id="schema_DeleteGitHubEnterpriseConfigOperationMetadata"></a>
<a id="tocSdeletegithubenterpriseconfigoperationmetadata"></a>
<a id="tocsdeletegithubenterpriseconfigoperationmetadata"></a>

```json
{
  "completeTime": "string",
  "createTime": "string",
  "githubEnterpriseConfig": "string"
}
```

Metadata for `DeleteGitHubEnterpriseConfig` operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completeTime|string(google-datetime)|false|none|Time the operation was completed.|
|createTime|string(google-datetime)|false|none|Time the operation was created.|
|githubEnterpriseConfig|string|false|none|The resource name of the GitHubEnterprise to be deleted. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`.|

<h2 id="tocS_DeleteGitLabConfigOperationMetadata">DeleteGitLabConfigOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeletegitlabconfigoperationmetadata"></a>
<a id="schema_DeleteGitLabConfigOperationMetadata"></a>
<a id="tocSdeletegitlabconfigoperationmetadata"></a>
<a id="tocsdeletegitlabconfigoperationmetadata"></a>

```json
{
  "completeTime": "string",
  "createTime": "string",
  "gitlabConfig": "string"
}
```

Metadata for `DeleteGitLabConfig` operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completeTime|string(google-datetime)|false|none|Time the operation was completed.|
|createTime|string(google-datetime)|false|none|Time the operation was created.|
|gitlabConfig|string|false|none|The resource name of the GitLabConfig to be created. Format: `projects/{project}/locations/{location}/gitlabConfigs/{id}`.|

<h2 id="tocS_DeleteWorkerPoolOperationMetadata">DeleteWorkerPoolOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeleteworkerpooloperationmetadata"></a>
<a id="schema_DeleteWorkerPoolOperationMetadata"></a>
<a id="tocSdeleteworkerpooloperationmetadata"></a>
<a id="tocsdeleteworkerpooloperationmetadata"></a>

```json
{
  "completeTime": "string",
  "createTime": "string",
  "workerPool": "string"
}
```

Metadata for the `DeleteWorkerPool` operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completeTime|string(google-datetime)|false|none|Time the operation was completed.|
|createTime|string(google-datetime)|false|none|Time the operation was created.|
|workerPool|string|false|none|The resource name of the `WorkerPool` being deleted. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`.|

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

<h2 id="tocS_FailureInfo">FailureInfo</h2>
<!-- backwards compatibility -->
<a id="schemafailureinfo"></a>
<a id="schema_FailureInfo"></a>
<a id="tocSfailureinfo"></a>
<a id="tocsfailureinfo"></a>

```json
{
  "detail": "string",
  "type": "FAILURE_TYPE_UNSPECIFIED"
}
```

A fatal problem encountered during the execution of the build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Explains the failure issue in more detail using hard-coded text.|
|type|string|false|none|The name of the failure.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FAILURE_TYPE_UNSPECIFIED|
|type|PUSH_FAILED|
|type|PUSH_IMAGE_NOT_FOUND|
|type|PUSH_NOT_AUTHORIZED|
|type|LOGGING_FAILURE|
|type|USER_BUILD_STEP|
|type|FETCH_SOURCE_FAILED|

<h2 id="tocS_FileHashes">FileHashes</h2>
<!-- backwards compatibility -->
<a id="schemafilehashes"></a>
<a id="schema_FileHashes"></a>
<a id="tocSfilehashes"></a>
<a id="tocsfilehashes"></a>

```json
{
  "fileHash": [
    {
      "type": "NONE",
      "value": "string"
    }
  ]
}
```

Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileHash|[[Hash](#schemahash)]|false|none|Collection of file hashes.|

<h2 id="tocS_GitLabConnectedRepository">GitLabConnectedRepository</h2>
<!-- backwards compatibility -->
<a id="schemagitlabconnectedrepository"></a>
<a id="schema_GitLabConnectedRepository"></a>
<a id="tocSgitlabconnectedrepository"></a>
<a id="tocsgitlabconnectedrepository"></a>

```json
{
  "parent": "string",
  "repo": {
    "id": "string",
    "webhookId": 0
  },
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

GitLabConnectedRepository represents a GitLab connected repository request response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parent|string|false|none|The name of the `GitLabConfig` that added connected repository. Format: `projects/{project}/locations/{location}/gitLabConfigs/{config}`|
|repo|[GitLabRepositoryId](#schemagitlabrepositoryid)|false|none|The GitLab repositories to connect.|
|status|[Status](#schemastatus)|false|none|Output only. The status of the repo connection request.|

<h2 id="tocS_GitLabRepositoryId">GitLabRepositoryId</h2>
<!-- backwards compatibility -->
<a id="schemagitlabrepositoryid"></a>
<a id="schema_GitLabRepositoryId"></a>
<a id="tocSgitlabrepositoryid"></a>
<a id="tocsgitlabrepositoryid"></a>

```json
{
  "id": "string",
  "webhookId": 0
}
```

GitLabRepositoryId identifies a specific repository hosted on GitLab.com or GitLabEnterprise

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Required. Identifier for the repository. example: "namespace/project-slug", namespace is usually the username or group ID|
|webhookId|integer(int32)|false|read-only|Output only. The ID of the webhook that was created for receiving events from this repo. We only create and manage a single webhook for each repo.|

<h2 id="tocS_GoogleDevtoolsCloudbuildV2OperationMetadata">GoogleDevtoolsCloudbuildV2OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogledevtoolscloudbuildv2operationmetadata"></a>
<a id="schema_GoogleDevtoolsCloudbuildV2OperationMetadata"></a>
<a id="tocSgoogledevtoolscloudbuildv2operationmetadata"></a>
<a id="tocsgoogledevtoolscloudbuildv2operationmetadata"></a>

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

<h2 id="tocS_HTTPDelivery">HTTPDelivery</h2>
<!-- backwards compatibility -->
<a id="schemahttpdelivery"></a>
<a id="schema_HTTPDelivery"></a>
<a id="tocShttpdelivery"></a>
<a id="tocshttpdelivery"></a>

```json
{
  "uri": "string"
}
```

HTTPDelivery is the delivery configuration for an HTTP notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|The URI to which JSON-containing HTTP POST requests should be sent.|

<h2 id="tocS_Hash">Hash</h2>
<!-- backwards compatibility -->
<a id="schemahash"></a>
<a id="schema_Hash"></a>
<a id="tocShash"></a>
<a id="tocshash"></a>

```json
{
  "type": "NONE",
  "value": "string"
}
```

Container message for hash values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of hash that was performed.|
|value|string(byte)|false|none|The hash value.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|NONE|
|type|SHA256|
|type|MD5|

<h2 id="tocS_InlineSecret">InlineSecret</h2>
<!-- backwards compatibility -->
<a id="schemainlinesecret"></a>
<a id="schema_InlineSecret"></a>
<a id="tocSinlinesecret"></a>
<a id="tocsinlinesecret"></a>

```json
{
  "envMap": {
    "property1": "string",
    "property2": "string"
  },
  "kmsKeyName": "string"
}
```

Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|envMap|object|false|none|Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets.|
|kmsKeyName|string|false|none|Resource name of Cloud KMS crypto key to decrypt the encrypted value. In format: projects/*/locations/*/keyRings/*/cryptoKeys/*|

<h2 id="tocS_ListWorkerPoolsResponse">ListWorkerPoolsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkerpoolsresponse"></a>
<a id="schema_ListWorkerPoolsResponse"></a>
<a id="tocSlistworkerpoolsresponse"></a>
<a id="tocslistworkerpoolsresponse"></a>

```json
{
  "workerPools": [
    {
      "createTime": "string",
      "deleteTime": "string",
      "name": "string",
      "networkConfig": {
        "peeredNetwork": "string"
      },
      "region": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string",
      "workerConfig": {
        "diskSizeGb": "string",
        "machineType": "string"
      }
    }
  ]
}
```

Response containing existing `WorkerPools`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workerPools|[[WorkerPool](#schemaworkerpool)]|false|none|`WorkerPools` for the specified project.|

<h2 id="tocS_MavenArtifact">MavenArtifact</h2>
<!-- backwards compatibility -->
<a id="schemamavenartifact"></a>
<a id="schema_MavenArtifact"></a>
<a id="tocSmavenartifact"></a>
<a id="tocsmavenartifact"></a>

```json
{
  "artifactId": "string",
  "groupId": "string",
  "path": "string",
  "repository": "string",
  "version": "string"
}
```

A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactId|string|false|none|Maven `artifactId` value used when uploading the artifact to Artifact Registry.|
|groupId|string|false|none|Maven `groupId` value used when uploading the artifact to Artifact Registry.|
|path|string|false|none|Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar.|
|repository|string|false|none|Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY" Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix.|
|version|string|false|none|Maven `version` value used when uploading the artifact to Artifact Registry.|

<h2 id="tocS_NetworkConfig">NetworkConfig</h2>
<!-- backwards compatibility -->
<a id="schemanetworkconfig"></a>
<a id="schema_NetworkConfig"></a>
<a id="tocSnetworkconfig"></a>
<a id="tocsnetworkconfig"></a>

```json
{
  "peeredNetwork": "string"
}
```

Network describes the network configuration for a `WorkerPool`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|peeredNetwork|string|false|none|Required. Immutable. The network definition that the workers are peered to. If this section is left empty, the workers will be peered to WorkerPool.project_id on the default network. Must be in the format `projects/{project}/global/networks/{network}`, where {project} is a project number, such as `12345`, and {network} is the name of a VPC network in the project.|

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "filter": "string",
  "httpDelivery": {
    "uri": "string"
  },
  "slackDelivery": {
    "webhookUri": {
      "secretRef": "string"
    }
  },
  "smtpDelivery": {
    "fromAddress": "string",
    "password": {
      "secretRef": "string"
    },
    "port": "string",
    "recipientAddresses": [
      "string"
    ],
    "senderAddress": "string",
    "server": "string"
  },
  "structDelivery": {
    "property1": null,
    "property2": null
  }
}
```

Notification is the container which holds the data that is relevant to this particular notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|The filter string to use for notification filtering. Currently, this is assumed to be a CEL program. See https://opensource.google/projects/cel for more.|
|httpDelivery|[HTTPDelivery](#schemahttpdelivery)|false|none|Configuration for HTTP delivery.|
|slackDelivery|[SlackDelivery](#schemaslackdelivery)|false|none|Configuration for Slack delivery.|
|smtpDelivery|[SMTPDelivery](#schemasmtpdelivery)|false|none|Configuration for SMTP (email) delivery.|
|structDelivery|object|false|none|Escape hatch for users to supply custom delivery configs.|

<h2 id="tocS_NotifierConfig">NotifierConfig</h2>
<!-- backwards compatibility -->
<a id="schemanotifierconfig"></a>
<a id="schema_NotifierConfig"></a>
<a id="tocSnotifierconfig"></a>
<a id="tocsnotifierconfig"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "metadata": {
    "name": "string",
    "notifier": "string"
  },
  "spec": {
    "notification": {
      "filter": "string",
      "httpDelivery": {
        "uri": "string"
      },
      "slackDelivery": {
        "webhookUri": {
          "secretRef": "string"
        }
      },
      "smtpDelivery": {
        "fromAddress": "string",
        "password": {
          "secretRef": "string"
        },
        "port": "string",
        "recipientAddresses": [
          "string"
        ],
        "senderAddress": "string",
        "server": "string"
      },
      "structDelivery": {
        "property1": null,
        "property2": null
      }
    },
    "secrets": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  }
}
```

NotifierConfig is the top-level configuration message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|The API version of this configuration format.|
|kind|string|false|none|The type of notifier to use (e.g. SMTPNotifier).|
|metadata|[NotifierMetadata](#schemanotifiermetadata)|false|none|Metadata for referring to/handling/deploying this notifier.|
|spec|[NotifierSpec](#schemanotifierspec)|false|none|The actual configuration for this notifier.|

<h2 id="tocS_NotifierMetadata">NotifierMetadata</h2>
<!-- backwards compatibility -->
<a id="schemanotifiermetadata"></a>
<a id="schema_NotifierMetadata"></a>
<a id="tocSnotifiermetadata"></a>
<a id="tocsnotifiermetadata"></a>

```json
{
  "name": "string",
  "notifier": "string"
}
```

NotifierMetadata contains the data which can be used to reference or describe this notifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The human-readable and user-given name for the notifier. For example: "repo-merge-email-notifier".|
|notifier|string|false|none|The string representing the name and version of notifier to deploy. Expected to be of the form of "/:". For example: "gcr.io/my-project/notifiers/smtp:1.2.34".|

<h2 id="tocS_NotifierSecret">NotifierSecret</h2>
<!-- backwards compatibility -->
<a id="schemanotifiersecret"></a>
<a id="schema_NotifierSecret"></a>
<a id="tocSnotifiersecret"></a>
<a id="tocsnotifiersecret"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

NotifierSecret is the container that maps a secret name (reference) to its Google Cloud Secret Manager resource path.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name is the local name of the secret, such as the verbatim string "my-smtp-password".|
|value|string|false|none|Value is interpreted to be a resource path for fetching the actual (versioned) secret data for this secret. For example, this would be a Google Cloud Secret Manager secret version resource path like: "projects/my-project/secrets/my-secret/versions/latest".|

<h2 id="tocS_NotifierSecretRef">NotifierSecretRef</h2>
<!-- backwards compatibility -->
<a id="schemanotifiersecretref"></a>
<a id="schema_NotifierSecretRef"></a>
<a id="tocSnotifiersecretref"></a>
<a id="tocsnotifiersecretref"></a>

```json
{
  "secretRef": "string"
}
```

NotifierSecretRef contains the reference to a secret stored in the corresponding NotifierSpec.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secretRef|string|false|none|The value of `secret_ref` should be a `name` that is registered in a `Secret` in the `secrets` list of the `Spec`.|

<h2 id="tocS_NotifierSpec">NotifierSpec</h2>
<!-- backwards compatibility -->
<a id="schemanotifierspec"></a>
<a id="schema_NotifierSpec"></a>
<a id="tocSnotifierspec"></a>
<a id="tocsnotifierspec"></a>

```json
{
  "notification": {
    "filter": "string",
    "httpDelivery": {
      "uri": "string"
    },
    "slackDelivery": {
      "webhookUri": {
        "secretRef": "string"
      }
    },
    "smtpDelivery": {
      "fromAddress": "string",
      "password": {
        "secretRef": "string"
      },
      "port": "string",
      "recipientAddresses": [
        "string"
      ],
      "senderAddress": "string",
      "server": "string"
    },
    "structDelivery": {
      "property1": null,
      "property2": null
    }
  },
  "secrets": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

NotifierSpec is the configuration container for notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notification|[Notification](#schemanotification)|false|none|The configuration of this particular notifier.|
|secrets|[[NotifierSecret](#schemanotifiersecret)]|false|none|Configurations for secret resources used by this particular notifier.|

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

<h2 id="tocS_PoolOption">PoolOption</h2>
<!-- backwards compatibility -->
<a id="schemapooloption"></a>
<a id="schema_PoolOption"></a>
<a id="tocSpooloption"></a>
<a id="tocspooloption"></a>

```json
{
  "name": "string"
}
```

Details about how a build should be executed on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The `WorkerPool` resource to execute the build on. You must have `cloudbuild.workerpools.use` on the project hosting the WorkerPool. Format projects/{project}/locations/{location}/workerPools/{workerPoolId}|

<h2 id="tocS_ProcessAppManifestCallbackOperationMetadata">ProcessAppManifestCallbackOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaprocessappmanifestcallbackoperationmetadata"></a>
<a id="schema_ProcessAppManifestCallbackOperationMetadata"></a>
<a id="tocSprocessappmanifestcallbackoperationmetadata"></a>
<a id="tocsprocessappmanifestcallbackoperationmetadata"></a>

```json
{
  "completeTime": "string",
  "createTime": "string",
  "githubEnterpriseConfig": "string"
}
```

Metadata for `ProcessAppManifestCallback` operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completeTime|string(google-datetime)|false|none|Time the operation was completed.|
|createTime|string(google-datetime)|false|none|Time the operation was created.|
|githubEnterpriseConfig|string|false|none|The resource name of the GitHubEnterprise to be created. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`.|

<h2 id="tocS_PythonPackage">PythonPackage</h2>
<!-- backwards compatibility -->
<a id="schemapythonpackage"></a>
<a id="schema_PythonPackage"></a>
<a id="tocSpythonpackage"></a>
<a id="tocspythonpackage"></a>

```json
{
  "paths": [
    "string"
  ],
  "repository": "string"
}
```

Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paths|[string]|false|none|Path globs used to match files in the build's workspace. For Python/ Twine, this is usually `dist/*`, and sometimes additionally an `.asc` file.|
|repository|string|false|none|Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY" Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix.|

<h2 id="tocS_RepoSource">RepoSource</h2>
<!-- backwards compatibility -->
<a id="schemareposource"></a>
<a id="schema_RepoSource"></a>
<a id="tocSreposource"></a>
<a id="tocsreposource"></a>

```json
{
  "branchName": "string",
  "commitSha": "string",
  "dir": "string",
  "invertRegex": true,
  "projectId": "string",
  "repoName": "string",
  "substitutions": {
    "property1": "string",
    "property2": "string"
  },
  "tagName": "string"
}
```

Location of the source in a Google Cloud Source Repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchName|string|false|none|Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax|
|commitSha|string|false|none|Explicit commit SHA to build.|
|dir|string|false|none|Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution.|
|invertRegex|boolean|false|none|Only trigger a build if the revision regex does NOT match the revision regex.|
|projectId|string|false|none|ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.|
|repoName|string|false|none|Name of the Cloud Source Repository.|
|substitutions|object|false|none|Substitutions to use in a triggered build. Should only be used with RunBuildTrigger|
|tagName|string|false|none|Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax|

<h2 id="tocS_Repository">Repository</h2>
<!-- backwards compatibility -->
<a id="schemarepository"></a>
<a id="schema_Repository"></a>
<a id="tocSrepository"></a>
<a id="tocsrepository"></a>

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "string",
  "etag": "string",
  "name": "string",
  "remoteUri": "string",
  "updateTime": "string"
}
```

A repository associated to a parent connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Allows clients to store small amounts of arbitrary data.|
|createTime|string(google-datetime)|false|read-only|Output only. Server assigned timestamp for when the connection was created.|
|etag|string|false|none|This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|name|string|false|none|Immutable. Resource name of the repository, in the format `projects/*/locations/*/connections/*/repositories/*`.|
|remoteUri|string|false|none|Required. Git Clone HTTPS URI.|
|updateTime|string(google-datetime)|false|read-only|Output only. Server assigned timestamp for when the connection was updated.|

<h2 id="tocS_Results">Results</h2>
<!-- backwards compatibility -->
<a id="schemaresults"></a>
<a id="schema_Results"></a>
<a id="tocSresults"></a>
<a id="tocsresults"></a>

```json
{
  "artifactManifest": "string",
  "artifactTiming": {
    "endTime": "string",
    "startTime": "string"
  },
  "buildStepImages": [
    "string"
  ],
  "buildStepOutputs": [
    "string"
  ],
  "images": [
    {
      "digest": "string",
      "name": "string",
      "pushTiming": {
        "endTime": "string",
        "startTime": "string"
      }
    }
  ],
  "mavenArtifacts": [
    {
      "fileHashes": {
        "fileHash": [
          {
            "type": "NONE",
            "value": "string"
          }
        ]
      },
      "pushTiming": {
        "endTime": "string",
        "startTime": "string"
      },
      "uri": "string"
    }
  ],
  "numArtifacts": "string",
  "pythonPackages": [
    {
      "fileHashes": {
        "fileHash": [
          {
            "type": "NONE",
            "value": "string"
          }
        ]
      },
      "pushTiming": {
        "endTime": "string",
        "startTime": "string"
      },
      "uri": "string"
    }
  ]
}
```

Artifacts created by the build pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactManifest|string|false|none|Path to the artifact manifest for non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage.|
|artifactTiming|[TimeSpan](#schematimespan)|false|none|Time to push all non-container artifacts to Cloud Storage.|
|buildStepImages|[string]|false|none|List of build step digests, in the order corresponding to build step indices.|
|buildStepOutputs|[string(byte)]|false|none|List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 4KB of data is stored.|
|images|[[BuiltImage](#schemabuiltimage)]|false|none|Container images that were built as a part of the build.|
|mavenArtifacts|[[UploadedMavenArtifact](#schemauploadedmavenartifact)]|false|none|Maven artifacts uploaded to Artifact Registry at the end of the build.|
|numArtifacts|string(int64)|false|none|Number of non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage.|
|pythonPackages|[[UploadedPythonPackage](#schemauploadedpythonpackage)]|false|none|Python artifacts uploaded to Artifact Registry at the end of the build.|

<h2 id="tocS_RunWorkflowCustomOperationMetadata">RunWorkflowCustomOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemarunworkflowcustomoperationmetadata"></a>
<a id="schema_RunWorkflowCustomOperationMetadata"></a>
<a id="tocSrunworkflowcustomoperationmetadata"></a>
<a id="tocsrunworkflowcustomoperationmetadata"></a>

```json
{
  "apiVersion": "string",
  "createTime": "string",
  "endTime": "string",
  "pipelineRunId": "string",
  "requestedCancellation": true,
  "target": "string",
  "verb": "string"
}
```

Represents the custom metadata of the RunWorkflow long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|read-only|Output only. API version used to start the operation.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|pipelineRunId|string|false|read-only|Output only. ID of the pipeline run created by RunWorkflow.|
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_SMTPDelivery">SMTPDelivery</h2>
<!-- backwards compatibility -->
<a id="schemasmtpdelivery"></a>
<a id="schema_SMTPDelivery"></a>
<a id="tocSsmtpdelivery"></a>
<a id="tocssmtpdelivery"></a>

```json
{
  "fromAddress": "string",
  "password": {
    "secretRef": "string"
  },
  "port": "string",
  "recipientAddresses": [
    "string"
  ],
  "senderAddress": "string",
  "server": "string"
}
```

SMTPDelivery is the delivery configuration for an SMTP (email) notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromAddress|string|false|none|This is the SMTP account/email that appears in the `From:` of the email. If empty, it is assumed to be sender.|
|password|[NotifierSecretRef](#schemanotifiersecretref)|false|none|The SMTP sender's password.|
|port|string|false|none|The SMTP port of the server.|
|recipientAddresses|[string]|false|none|This is the list of addresses to which we send the email (i.e. in the `To:` of the email).|
|senderAddress|string|false|none|This is the SMTP account/email that is used to send the message.|
|server|string|false|none|The address of the SMTP server.|

<h2 id="tocS_Secret">Secret</h2>
<!-- backwards compatibility -->
<a id="schemasecret"></a>
<a id="schema_Secret"></a>
<a id="tocSsecret"></a>
<a id="tocssecret"></a>

```json
{
  "kmsKeyName": "string",
  "secretEnv": {
    "property1": "string",
    "property2": "string"
  }
}
```

Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value. Note: Use `kmsKeyName` with `available_secrets` instead of using `kmsKeyName` with `secret`. For instructions see: https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsKeyName|string|false|none|Cloud KMS key name to use to decrypt these envs.|
|secretEnv|object|false|none|Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets.|

<h2 id="tocS_SecretManagerSecret">SecretManagerSecret</h2>
<!-- backwards compatibility -->
<a id="schemasecretmanagersecret"></a>
<a id="schema_SecretManagerSecret"></a>
<a id="tocSsecretmanagersecret"></a>
<a id="tocssecretmanagersecret"></a>

```json
{
  "env": "string",
  "versionName": "string"
}
```

Pairs a secret environment variable with a SecretVersion in Secret Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|env|string|false|none|Environment variable name to associate with the secret. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step.|
|versionName|string|false|none|Resource name of the SecretVersion. In format: projects/*/secrets/*/versions/*|

<h2 id="tocS_Secrets">Secrets</h2>
<!-- backwards compatibility -->
<a id="schemasecrets"></a>
<a id="schema_Secrets"></a>
<a id="tocSsecrets"></a>
<a id="tocssecrets"></a>

```json
{
  "inline": [
    {
      "envMap": {
        "property1": "string",
        "property2": "string"
      },
      "kmsKeyName": "string"
    }
  ],
  "secretManager": [
    {
      "env": "string",
      "versionName": "string"
    }
  ]
}
```

Secrets and secret environment variables.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inline|[[InlineSecret](#schemainlinesecret)]|false|none|Secrets encrypted with KMS key and the associated secret environment variable.|
|secretManager|[[SecretManagerSecret](#schemasecretmanagersecret)]|false|none|Secrets in Secret Manager and associated secret environment variable.|

<h2 id="tocS_SlackDelivery">SlackDelivery</h2>
<!-- backwards compatibility -->
<a id="schemaslackdelivery"></a>
<a id="schema_SlackDelivery"></a>
<a id="tocSslackdelivery"></a>
<a id="tocsslackdelivery"></a>

```json
{
  "webhookUri": {
    "secretRef": "string"
  }
}
```

SlackDelivery is the delivery configuration for delivering Slack messages via webhooks. See Slack webhook documentation at: https://api.slack.com/messaging/webhooks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhookUri|[NotifierSecretRef](#schemanotifiersecretref)|false|none|The secret reference for the Slack webhook URI for sending messages to a channel.|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "repoSource": {
    "branchName": "string",
    "commitSha": "string",
    "dir": "string",
    "invertRegex": true,
    "projectId": "string",
    "repoName": "string",
    "substitutions": {
      "property1": "string",
      "property2": "string"
    },
    "tagName": "string"
  },
  "storageSource": {
    "bucket": "string",
    "generation": "string",
    "object": "string"
  },
  "storageSourceManifest": {
    "bucket": "string",
    "generation": "string",
    "object": "string"
  }
}
```

Location of the source in a supported storage service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repoSource|[RepoSource](#schemareposource)|false|none|If provided, get the source from this location in a Cloud Source Repository.|
|storageSource|[StorageSource](#schemastoragesource)|false|none|If provided, get the source from this location in Google Cloud Storage.|
|storageSourceManifest|[StorageSourceManifest](#schemastoragesourcemanifest)|false|none|If provided, get the source from this manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).|

<h2 id="tocS_SourceProvenance">SourceProvenance</h2>
<!-- backwards compatibility -->
<a id="schemasourceprovenance"></a>
<a id="schema_SourceProvenance"></a>
<a id="tocSsourceprovenance"></a>
<a id="tocssourceprovenance"></a>

```json
{
  "fileHashes": {
    "property1": {
      "fileHash": [
        {
          "type": "NONE",
          "value": "string"
        }
      ]
    },
    "property2": {
      "fileHash": [
        {
          "type": "NONE",
          "value": "string"
        }
      ]
    }
  },
  "resolvedRepoSource": {
    "branchName": "string",
    "commitSha": "string",
    "dir": "string",
    "invertRegex": true,
    "projectId": "string",
    "repoName": "string",
    "substitutions": {
      "property1": "string",
      "property2": "string"
    },
    "tagName": "string"
  },
  "resolvedStorageSource": {
    "bucket": "string",
    "generation": "string",
    "object": "string"
  },
  "resolvedStorageSourceManifest": {
    "bucket": "string",
    "generation": "string",
    "object": "string"
  }
}
```

Provenance of the source. Ways to find the original source, or verify that some source was used for this build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileHashes|object|false|read-only|Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file.|
|resolvedRepoSource|[RepoSource](#schemareposource)|false|none|A copy of the build's `source.repo_source`, if exists, with any revisions resolved.|
|resolvedStorageSource|[StorageSource](#schemastoragesource)|false|none|A copy of the build's `source.storage_source`, if exists, with any generations resolved.|
|resolvedStorageSourceManifest|[StorageSourceManifest](#schemastoragesourcemanifest)|false|none|A copy of the build's `source.storage_source_manifest`, if exists, with any revisions resolved. This feature is in Preview.|

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

<h2 id="tocS_StorageSource">StorageSource</h2>
<!-- backwards compatibility -->
<a id="schemastoragesource"></a>
<a id="schema_StorageSource"></a>
<a id="tocSstoragesource"></a>
<a id="tocsstoragesource"></a>

```json
{
  "bucket": "string",
  "generation": "string",
  "object": "string"
}
```

Location of the source in an archive file in Google Cloud Storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|string|false|none|Google Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).|
|generation|string(int64)|false|none|Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.|
|object|string|false|none|Google Cloud Storage object containing the source. This object must be a zipped (`.zip`) or gzipped archive file (`.tar.gz`) containing source to build.|

<h2 id="tocS_StorageSourceManifest">StorageSourceManifest</h2>
<!-- backwards compatibility -->
<a id="schemastoragesourcemanifest"></a>
<a id="schema_StorageSourceManifest"></a>
<a id="tocSstoragesourcemanifest"></a>
<a id="tocsstoragesourcemanifest"></a>

```json
{
  "bucket": "string",
  "generation": "string",
  "object": "string"
}
```

Location of the source manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|string|false|none|Google Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).|
|generation|string(int64)|false|none|Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.|
|object|string|false|none|Google Cloud Storage object containing the source manifest. This object must be a JSON file.|

<h2 id="tocS_TimeSpan">TimeSpan</h2>
<!-- backwards compatibility -->
<a id="schematimespan"></a>
<a id="schema_TimeSpan"></a>
<a id="tocStimespan"></a>
<a id="tocstimespan"></a>

```json
{
  "endTime": "string",
  "startTime": "string"
}
```

Start and end times for a build execution phase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|End of time span.|
|startTime|string(google-datetime)|false|none|Start of time span.|

<h2 id="tocS_UpdateBitbucketServerConfigOperationMetadata">UpdateBitbucketServerConfigOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebitbucketserverconfigoperationmetadata"></a>
<a id="schema_UpdateBitbucketServerConfigOperationMetadata"></a>
<a id="tocSupdatebitbucketserverconfigoperationmetadata"></a>
<a id="tocsupdatebitbucketserverconfigoperationmetadata"></a>

```json
{
  "bitbucketServerConfig": "string",
  "completeTime": "string",
  "createTime": "string"
}
```

Metadata for `UpdateBitbucketServerConfig` operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bitbucketServerConfig|string|false|none|The resource name of the BitbucketServerConfig to be updated. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{id}`.|
|completeTime|string(google-datetime)|false|none|Time the operation was completed.|
|createTime|string(google-datetime)|false|none|Time the operation was created.|

<h2 id="tocS_UpdateGitHubEnterpriseConfigOperationMetadata">UpdateGitHubEnterpriseConfigOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdategithubenterpriseconfigoperationmetadata"></a>
<a id="schema_UpdateGitHubEnterpriseConfigOperationMetadata"></a>
<a id="tocSupdategithubenterpriseconfigoperationmetadata"></a>
<a id="tocsupdategithubenterpriseconfigoperationmetadata"></a>

```json
{
  "completeTime": "string",
  "createTime": "string",
  "githubEnterpriseConfig": "string"
}
```

Metadata for `UpdateGitHubEnterpriseConfig` operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completeTime|string(google-datetime)|false|none|Time the operation was completed.|
|createTime|string(google-datetime)|false|none|Time the operation was created.|
|githubEnterpriseConfig|string|false|none|The resource name of the GitHubEnterprise to be updated. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`.|

<h2 id="tocS_UpdateGitLabConfigOperationMetadata">UpdateGitLabConfigOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdategitlabconfigoperationmetadata"></a>
<a id="schema_UpdateGitLabConfigOperationMetadata"></a>
<a id="tocSupdategitlabconfigoperationmetadata"></a>
<a id="tocsupdategitlabconfigoperationmetadata"></a>

```json
{
  "completeTime": "string",
  "createTime": "string",
  "gitlabConfig": "string"
}
```

Metadata for `UpdateGitLabConfig` operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completeTime|string(google-datetime)|false|none|Time the operation was completed.|
|createTime|string(google-datetime)|false|none|Time the operation was created.|
|gitlabConfig|string|false|none|The resource name of the GitLabConfig to be created. Format: `projects/{project}/locations/{location}/gitlabConfigs/{id}`.|

<h2 id="tocS_UpdateWorkerPoolOperationMetadata">UpdateWorkerPoolOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdateworkerpooloperationmetadata"></a>
<a id="schema_UpdateWorkerPoolOperationMetadata"></a>
<a id="tocSupdateworkerpooloperationmetadata"></a>
<a id="tocsupdateworkerpooloperationmetadata"></a>

```json
{
  "completeTime": "string",
  "createTime": "string",
  "workerPool": "string"
}
```

Metadata for the `UpdateWorkerPool` operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completeTime|string(google-datetime)|false|none|Time the operation was completed.|
|createTime|string(google-datetime)|false|none|Time the operation was created.|
|workerPool|string|false|none|The resource name of the `WorkerPool` being updated. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`.|

<h2 id="tocS_UploadedMavenArtifact">UploadedMavenArtifact</h2>
<!-- backwards compatibility -->
<a id="schemauploadedmavenartifact"></a>
<a id="schema_UploadedMavenArtifact"></a>
<a id="tocSuploadedmavenartifact"></a>
<a id="tocsuploadedmavenartifact"></a>

```json
{
  "fileHashes": {
    "fileHash": [
      {
        "type": "NONE",
        "value": "string"
      }
    ]
  },
  "pushTiming": {
    "endTime": "string",
    "startTime": "string"
  },
  "uri": "string"
}
```

A Maven artifact uploaded using the MavenArtifact directive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileHashes|[FileHashes](#schemafilehashes)|false|none|Hash types and values of the Maven Artifact.|
|pushTiming|[TimeSpan](#schematimespan)|false|none|Output only. Stores timing information for pushing the specified artifact.|
|uri|string|false|none|URI of the uploaded artifact.|

<h2 id="tocS_UploadedPythonPackage">UploadedPythonPackage</h2>
<!-- backwards compatibility -->
<a id="schemauploadedpythonpackage"></a>
<a id="schema_UploadedPythonPackage"></a>
<a id="tocSuploadedpythonpackage"></a>
<a id="tocsuploadedpythonpackage"></a>

```json
{
  "fileHashes": {
    "fileHash": [
      {
        "type": "NONE",
        "value": "string"
      }
    ]
  },
  "pushTiming": {
    "endTime": "string",
    "startTime": "string"
  },
  "uri": "string"
}
```

Artifact uploaded using the PythonPackage directive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileHashes|[FileHashes](#schemafilehashes)|false|none|Hash types and values of the Python Artifact.|
|pushTiming|[TimeSpan](#schematimespan)|false|none|Output only. Stores timing information for pushing the specified artifact.|
|uri|string|false|none|URI of the uploaded artifact.|

<h2 id="tocS_Volume">Volume</h2>
<!-- backwards compatibility -->
<a id="schemavolume"></a>
<a id="schema_Volume"></a>
<a id="tocSvolume"></a>
<a id="tocsvolume"></a>

```json
{
  "name": "string",
  "path": "string"
}
```

Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps.|
|path|string|false|none|Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths.|

<h2 id="tocS_Warning">Warning</h2>
<!-- backwards compatibility -->
<a id="schemawarning"></a>
<a id="schema_Warning"></a>
<a id="tocSwarning"></a>
<a id="tocswarning"></a>

```json
{
  "priority": "PRIORITY_UNSPECIFIED",
  "text": "string"
}
```

A non-fatal problem encountered during the execution of the build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|priority|string|false|none|The priority for this warning.|
|text|string|false|none|Explanation of the warning generated.|

#### Enumerated Values

|Property|Value|
|---|---|
|priority|PRIORITY_UNSPECIFIED|
|priority|INFO|
|priority|WARNING|
|priority|ALERT|

<h2 id="tocS_WorkerConfig">WorkerConfig</h2>
<!-- backwards compatibility -->
<a id="schemaworkerconfig"></a>
<a id="schema_WorkerConfig"></a>
<a id="tocSworkerconfig"></a>
<a id="tocsworkerconfig"></a>

```json
{
  "diskSizeGb": "string",
  "machineType": "string"
}
```

WorkerConfig defines the configuration to be used for a creating workers in the pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskSizeGb|string(int64)|false|none|Size of the disk attached to the worker, in GB. See https://cloud.google.com/compute/docs/disks/ If `0` is specified, Cloud Build will use a standard disk size.|
|machineType|string|false|none|Machine Type of the worker, such as n1-standard-1. See https://cloud.google.com/compute/docs/machine-types. If left blank, Cloud Build will use a standard unspecified machine to create the worker pool.|

<h2 id="tocS_WorkerPool">WorkerPool</h2>
<!-- backwards compatibility -->
<a id="schemaworkerpool"></a>
<a id="schema_WorkerPool"></a>
<a id="tocSworkerpool"></a>
<a id="tocsworkerpool"></a>

```json
{
  "createTime": "string",
  "deleteTime": "string",
  "name": "string",
  "networkConfig": {
    "peeredNetwork": "string"
  },
  "region": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string",
  "workerConfig": {
    "diskSizeGb": "string",
    "machineType": "string"
  }
}
```

Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Time at which the request to create the `WorkerPool` was received.|
|deleteTime|string(google-datetime)|false|read-only|Output only. Time at which the request to delete the `WorkerPool` was received.|
|name|string|false|read-only|Output only. The resource name of the `WorkerPool`. Format of the name is `projects/{project_id}/workerPools/{worker_pool_id}`, where the value of {worker_pool_id} is provided in the CreateWorkerPool request.|
|networkConfig|[NetworkConfig](#schemanetworkconfig)|false|none|Network configuration for the `WorkerPool`.|
|region|string|false|none|Required. Immutable. The region where the `WorkerPool` runs. Only "us-central1" is currently supported. Note that `region` cannot be changed once the `WorkerPool` is created.|
|state|string|false|read-only|Output only. WorkerPool state.|
|updateTime|string(google-datetime)|false|read-only|Output only. Time at which the request to update the `WorkerPool` was received.|
|workerConfig|[WorkerConfig](#schemaworkerconfig)|false|none|Worker configuration for the `WorkerPool`.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|RUNNING|
|state|DELETING|
|state|DELETED|
