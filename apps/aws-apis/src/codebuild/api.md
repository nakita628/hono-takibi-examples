<h1 id="aws-codebuild">AWS CodeBuild v2016-10-06</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>CodeBuild</fullname> <p>CodeBuild is a fully managed build service in the cloud. CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy. CodeBuild eliminates the need to provision, manage, and scale your own build servers. It provides prepackaged build environments for the most popular programming languages and build tools, such as Apache Maven, Gradle, and more. You can also fully customize build environments in CodeBuild to use your own build tools. CodeBuild scales automatically to meet peak build requests. You pay only for the build time you consume. For more information about CodeBuild, see the <i> <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html">CodeBuild User Guide</a>.</i> </p>

Base URLs:

* <a href="http://codebuild.us-east-1.amazonaws.com">http://codebuild.us-east-1.amazonaws.com</a> - The AWS CodeBuild multi-region endpoint

* <a href="https://codebuild.us-east-1.amazonaws.com">https://codebuild.us-east-1.amazonaws.com</a> - The AWS CodeBuild multi-region endpoint

* <a href="http://codebuild.cn-north-1.amazonaws.com.cn">http://codebuild.cn-north-1.amazonaws.com.cn</a> - The AWS CodeBuild endpoint for China (Beijing) and China (Ningxia)

* <a href="https://codebuild.cn-north-1.amazonaws.com.cn">https://codebuild.cn-north-1.amazonaws.com.cn</a> - The AWS CodeBuild endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/codebuild/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-codebuild-default">Default</h1>

## BatchDeleteBuilds

<a id="opIdBatchDeleteBuilds"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.BatchDeleteBuilds' \
  -d '{
    "ids": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds`

Deletes one or more builds.

> Body parameter

```json
{
  "ids": {}
}
```

<h3 id="batchdeletebuilds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[BatchDeleteBuildsInput](#schemabatchdeletebuildsinput)|true|none|
|» ids|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.BatchDeleteBuilds|

> Example responses

> 200 Response

```json
{
  "buildsDeleted": {},
  "buildsNotDeleted": {}
}
```

> 480 Response

```json
null
```

<h3 id="batchdeletebuilds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDeleteBuildsOutput](#schemabatchdeletebuildsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetBuildBatches

<a id="opIdBatchGetBuildBatches"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.BatchGetBuildBatches' \
  -d '{
    "ids": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches`

Retrieves information about one or more batch builds.

> Body parameter

```json
{
  "ids": {}
}
```

<h3 id="batchgetbuildbatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[BatchGetBuildBatchesInput](#schemabatchgetbuildbatchesinput)|true|none|
|» ids|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.BatchGetBuildBatches|

> Example responses

> 200 Response

```json
{
  "buildBatches": {},
  "buildBatchesNotFound": {}
}
```

> 480 Response

```json
null
```

<h3 id="batchgetbuildbatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetBuildBatchesOutput](#schemabatchgetbuildbatchesoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetBuilds

<a id="opIdBatchGetBuilds"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.BatchGetBuilds' \
  -d '{
    "ids": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds`

Gets information about one or more builds.

> Body parameter

```json
{
  "ids": {}
}
```

<h3 id="batchgetbuilds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[BatchGetBuildsInput](#schemabatchgetbuildsinput)|true|none|
|» ids|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.BatchGetBuilds|

> Example responses

> 200 Response

```json
{
  "builds": {},
  "buildsNotFound": {}
}
```

> 480 Response

```json
null
```

<h3 id="batchgetbuilds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetBuildsOutput](#schemabatchgetbuildsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetProjects

<a id="opIdBatchGetProjects"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.BatchGetProjects' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.BatchGetProjects' \
  -d '{
    "names": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.BatchGetProjects`

Gets information about one or more build projects.

> Body parameter

```json
{
  "names": {}
}
```

<h3 id="batchgetprojects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[BatchGetProjectsInput](#schemabatchgetprojectsinput)|true|none|
|» names|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.BatchGetProjects|

> Example responses

> 200 Response

```json
{
  "projects": {},
  "projectsNotFound": {}
}
```

> 480 Response

```json
null
```

<h3 id="batchgetprojects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetProjectsOutput](#schemabatchgetprojectsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetReportGroups

<a id="opIdBatchGetReportGroups"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.BatchGetReportGroups' \
  -d '{
    "reportGroupArns": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups`

 Returns an array of report groups. 

> Body parameter

```json
{
  "reportGroupArns": {}
}
```

<h3 id="batchgetreportgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[BatchGetReportGroupsInput](#schemabatchgetreportgroupsinput)|true|none|
|» reportGroupArns|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.BatchGetReportGroups|

> Example responses

> 200 Response

```json
{
  "reportGroups": {},
  "reportGroupsNotFound": {}
}
```

> 480 Response

```json
null
```

<h3 id="batchgetreportgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetReportGroupsOutput](#schemabatchgetreportgroupsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetReports

<a id="opIdBatchGetReports"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.BatchGetReports' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.BatchGetReports' \
  -d '{
    "reportArns": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.BatchGetReports`

 Returns an array of reports. 

> Body parameter

```json
{
  "reportArns": {}
}
```

<h3 id="batchgetreports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[BatchGetReportsInput](#schemabatchgetreportsinput)|true|none|
|» reportArns|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.BatchGetReports|

> Example responses

> 200 Response

```json
{
  "reports": {},
  "reportsNotFound": {}
}
```

> 480 Response

```json
null
```

<h3 id="batchgetreports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetReportsOutput](#schemabatchgetreportsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProject

<a id="opIdCreateProject"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.CreateProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.CreateProject' \
  -d '{
    "name": {},
    "description": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "sourceVersion": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "type": {},
      "location": {},
      "path": {},
      "namespaceType": {},
      "name": {},
      "packaging": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "timeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "encryptionKey": {},
    "tags": {},
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "badgeEnabled": {},
    "logsConfig": {
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "fileSystemLocations": {},
    "buildBatchConfig": {
      "serviceRole": {},
      "combineArtifacts": {},
      "restrictions": {
        "maximumBuildsAllowed": {},
        "computeTypesAllowed": {}
      },
      "timeoutInMins": {},
      "batchReportMode": {}
    },
    "concurrentBuildLimit": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.CreateProject`

Creates a build project.

> Body parameter

```json
{
  "name": {},
  "description": {},
  "source": {
    "type": {},
    "location": {},
    "gitCloneDepth": {},
    "gitSubmodulesConfig": {
      "fetchSubmodules": {}
    },
    "buildspec": {},
    "auth": {
      "type": {},
      "resource": {}
    },
    "reportBuildStatus": {},
    "buildStatusConfig": {
      "context": {},
      "targetUrl": {}
    },
    "insecureSsl": {},
    "sourceIdentifier": {}
  },
  "secondarySources": {},
  "sourceVersion": {},
  "secondarySourceVersions": {},
  "artifacts": {
    "type": {},
    "location": {},
    "path": {},
    "namespaceType": {},
    "name": {},
    "packaging": {},
    "overrideArtifactName": {},
    "encryptionDisabled": {},
    "artifactIdentifier": {},
    "bucketOwnerAccess": "NONE"
  },
  "secondaryArtifacts": {},
  "cache": {
    "type": {},
    "location": {},
    "modes": {}
  },
  "environment": {
    "type": {},
    "image": {},
    "computeType": {},
    "environmentVariables": {},
    "privilegedMode": {},
    "certificate": {},
    "registryCredential": {
      "credential": {},
      "credentialProvider": {}
    },
    "imagePullCredentialsType": {}
  },
  "serviceRole": {},
  "timeoutInMinutes": {},
  "queuedTimeoutInMinutes": {},
  "encryptionKey": {},
  "tags": {},
  "vpcConfig": {
    "vpcId": {},
    "subnets": {},
    "securityGroupIds": {}
  },
  "badgeEnabled": {},
  "logsConfig": {
    "cloudWatchLogs": {
      "status": {},
      "groupName": {},
      "streamName": {}
    },
    "s3Logs": {
      "status": {},
      "location": {},
      "encryptionDisabled": {},
      "bucketOwnerAccess": "NONE"
    }
  },
  "fileSystemLocations": {},
  "buildBatchConfig": {
    "serviceRole": {},
    "combineArtifacts": {},
    "restrictions": {
      "maximumBuildsAllowed": {},
      "computeTypesAllowed": {}
    },
    "timeoutInMins": {},
    "batchReportMode": {}
  },
  "concurrentBuildLimit": {}
}
```

<h3 id="createproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateProjectInput](#schemacreateprojectinput)|true|none|
|» name|body|object|true|none|
|» description|body|object|false|none|
|» source|body|object|true|none|
|» » type|body|object|true|none|
|» » location|body|object|false|none|
|» » gitCloneDepth|body|object|false|none|
|» » gitSubmodulesConfig|body|object|false|none|
|» » » fetchSubmodules|body|object|true|none|
|» » buildspec|body|object|false|none|
|» » auth|body|object|false|none|
|» » » type|body|object|true|none|
|» » » resource|body|object|false|none|
|» » reportBuildStatus|body|object|false|none|
|» » buildStatusConfig|body|object|false|none|
|» » » context|body|object|false|none|
|» » » targetUrl|body|object|false|none|
|» » insecureSsl|body|object|false|none|
|» » sourceIdentifier|body|object|false|none|
|» secondarySources|body|object|false|none|
|» sourceVersion|body|object|false|none|
|» secondarySourceVersions|body|object|false|none|
|» artifacts|body|object|true|none|
|» » type|body|object|true|none|
|» » location|body|object|false|none|
|» » path|body|object|false|none|
|» » namespaceType|body|object|false|none|
|» » name|body|object|false|none|
|» » packaging|body|object|false|none|
|» » overrideArtifactName|body|object|false|none|
|» » encryptionDisabled|body|object|false|none|
|» » artifactIdentifier|body|object|false|none|
|» » bucketOwnerAccess|body|[BucketOwnerAccess](#schemabucketowneraccess)|false|<p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl>|
|» secondaryArtifacts|body|object|false|none|
|» cache|body|object|false|none|
|» » type|body|object|true|none|
|» » location|body|object|false|none|
|» » modes|body|object|false|none|
|» environment|body|object|true|none|
|» » type|body|object|true|none|
|» » image|body|object|true|none|
|» » computeType|body|object|true|none|
|» » environmentVariables|body|object|false|none|
|» » privilegedMode|body|object|false|none|
|» » certificate|body|object|false|none|
|» » registryCredential|body|object|false|none|
|» » » credential|body|object|true|none|
|» » » credentialProvider|body|object|true|none|
|» » imagePullCredentialsType|body|object|false|none|
|» serviceRole|body|object|true|none|
|» timeoutInMinutes|body|object|false|none|
|» queuedTimeoutInMinutes|body|object|false|none|
|» encryptionKey|body|object|false|none|
|» tags|body|object|false|none|
|» vpcConfig|body|object|false|none|
|» » vpcId|body|object|false|none|
|» » subnets|body|object|false|none|
|» » securityGroupIds|body|object|false|none|
|» badgeEnabled|body|object|false|none|
|» logsConfig|body|object|false|none|
|» » cloudWatchLogs|body|object|false|none|
|» » » status|body|object|true|none|
|» » » groupName|body|object|false|none|
|» » » streamName|body|object|false|none|
|» » s3Logs|body|object|false|none|
|» » » status|body|object|true|none|
|» » » location|body|object|false|none|
|» » » encryptionDisabled|body|object|false|none|
|» » » bucketOwnerAccess|body|[BucketOwnerAccess](#schemabucketowneraccess)|false|<p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl>|
|» fileSystemLocations|body|object|false|none|
|» buildBatchConfig|body|object|false|none|
|» » serviceRole|body|object|false|none|
|» » combineArtifacts|body|object|false|none|
|» » restrictions|body|object|false|none|
|» » » maximumBuildsAllowed|body|object|false|none|
|» » » computeTypesAllowed|body|object|false|none|
|» » timeoutInMins|body|object|false|none|
|» » batchReportMode|body|object|false|none|
|» concurrentBuildLimit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.CreateProject|
|» » bucketOwnerAccess|NONE|
|» » bucketOwnerAccess|READ_ONLY|
|» » bucketOwnerAccess|FULL|
|» » » bucketOwnerAccess|NONE|
|» » » bucketOwnerAccess|READ_ONLY|
|» » » bucketOwnerAccess|FULL|

> Example responses

> 200 Response

```json
{
  "project": {
    "name": {},
    "arn": {},
    "description": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "sourceVersion": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "type": {},
      "location": {},
      "path": {},
      "namespaceType": {},
      "name": {},
      "packaging": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "timeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "encryptionKey": {},
    "tags": {},
    "created": {},
    "lastModified": {},
    "webhook": {
      "url": {},
      "payloadUrl": {},
      "secret": {},
      "branchFilter": {},
      "filterGroups": {},
      "buildType": {},
      "lastModifiedSecret": {}
    },
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "badge": {
      "badgeEnabled": {},
      "badgeRequestUrl": {}
    },
    "logsConfig": {
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "fileSystemLocations": {},
    "buildBatchConfig": {
      "serviceRole": {},
      "combineArtifacts": {},
      "restrictions": {
        "maximumBuildsAllowed": {},
        "computeTypesAllowed": {}
      },
      "timeoutInMins": {},
      "batchReportMode": {}
    },
    "concurrentBuildLimit": {},
    "projectVisibility": "PUBLIC_READ",
    "publicProjectAlias": {},
    "resourceAccessRole": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="createproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProjectOutput](#schemacreateprojectoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|AccountLimitExceededException|[AccountLimitExceededException](#schemaaccountlimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateReportGroup

<a id="opIdCreateReportGroup"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.CreateReportGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.CreateReportGroup' \
  -d '{
    "name": {},
    "type": {},
    "exportConfig": {
      "exportConfigType": {},
      "s3Destination": {
        "bucket": {},
        "bucketOwner": {},
        "path": {},
        "packaging": {},
        "encryptionKey": {},
        "encryptionDisabled": {}
      }
    },
    "tags": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.CreateReportGroup`

 Creates a report group. A report group contains a collection of reports. 

> Body parameter

```json
{
  "name": {},
  "type": {},
  "exportConfig": {
    "exportConfigType": {},
    "s3Destination": {
      "bucket": {},
      "bucketOwner": {},
      "path": {},
      "packaging": {},
      "encryptionKey": {},
      "encryptionDisabled": {}
    }
  },
  "tags": {}
}
```

<h3 id="createreportgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateReportGroupInput](#schemacreatereportgroupinput)|true|none|
|» name|body|object|true|none|
|» type|body|object|true|none|
|» exportConfig|body|object|true|none|
|» » exportConfigType|body|object|false|none|
|» » s3Destination|body|object|false|none|
|» » » bucket|body|object|false|none|
|» » » bucketOwner|body|object|false|none|
|» » » path|body|object|false|none|
|» » » packaging|body|object|false|none|
|» » » encryptionKey|body|object|false|none|
|» » » encryptionDisabled|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.CreateReportGroup|

> Example responses

> 200 Response

```json
{
  "reportGroup": {
    "arn": {},
    "name": {},
    "type": {},
    "exportConfig": {
      "exportConfigType": {},
      "s3Destination": {
        "bucket": {},
        "bucketOwner": {},
        "path": {},
        "packaging": {},
        "encryptionKey": {},
        "encryptionDisabled": {}
      }
    },
    "created": {},
    "lastModified": {},
    "tags": {},
    "status": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="createreportgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateReportGroupOutput](#schemacreatereportgroupoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|AccountLimitExceededException|[AccountLimitExceededException](#schemaaccountlimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWebhook

<a id="opIdCreateWebhook"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.CreateWebhook' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.CreateWebhook' \
  -d '{
    "projectName": {},
    "branchFilter": {},
    "filterGroups": {},
    "buildType": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.CreateWebhook`

<p>For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p> </important>

> Body parameter

```json
{
  "projectName": {},
  "branchFilter": {},
  "filterGroups": {},
  "buildType": {}
}
```

<h3 id="createwebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateWebhookInput](#schemacreatewebhookinput)|true|none|
|» projectName|body|object|true|none|
|» branchFilter|body|object|false|none|
|» filterGroups|body|object|false|none|
|» buildType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.CreateWebhook|

> Example responses

> 200 Response

```json
{
  "webhook": {
    "url": {},
    "payloadUrl": {},
    "secret": {},
    "branchFilter": {},
    "filterGroups": {},
    "buildType": {},
    "lastModifiedSecret": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="createwebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWebhookOutput](#schemacreatewebhookoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|OAuthProviderException|[OAuthProviderException](#schemaoauthproviderexception)|
|482|482|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBuildBatch

<a id="opIdDeleteBuildBatch"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.DeleteBuildBatch' \
  -d '{
    "id": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch`

Deletes a batch build.

> Body parameter

```json
{
  "id": {}
}
```

<h3 id="deletebuildbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteBuildBatchInput](#schemadeletebuildbatchinput)|true|none|
|» id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.DeleteBuildBatch|

> Example responses

> 200 Response

```json
{
  "statusCode": {},
  "buildsDeleted": {},
  "buildsNotDeleted": {}
}
```

> 480 Response

```json
null
```

<h3 id="deletebuildbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBuildBatchOutput](#schemadeletebuildbatchoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProject

<a id="opIdDeleteProject"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.DeleteProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.DeleteProject' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.DeleteProject`

 Deletes a build project. When you delete a project, its builds are not deleted. 

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="deleteproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteProjectInput](#schemadeleteprojectinput)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.DeleteProject|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deleteproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProjectOutput](#schemadeleteprojectoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteReport

<a id="opIdDeleteReport"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.DeleteReport' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.DeleteReport' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.DeleteReport`

 Deletes a report. 

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="deletereport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteReportInput](#schemadeletereportinput)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.DeleteReport|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deletereport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReportOutput](#schemadeletereportoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteReportGroup

<a id="opIdDeleteReportGroup"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.DeleteReportGroup' \
  -d '{
    "arn": {},
    "deleteReports": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup`

Deletes a report group. Before you delete a report group, you must delete its reports. 

> Body parameter

```json
{
  "arn": {},
  "deleteReports": {}
}
```

<h3 id="deletereportgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteReportGroupInput](#schemadeletereportgroupinput)|true|none|
|» arn|body|object|true|none|
|» deleteReports|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.DeleteReportGroup|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deletereportgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReportGroupOutput](#schemadeletereportgroupoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourcePolicy

<a id="opIdDeleteResourcePolicy"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.DeleteResourcePolicy' \
  -d '{
    "resourceArn": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy`

 Deletes a resource policy that is identified by its resource ARN. 

> Body parameter

```json
{
  "resourceArn": {}
}
```

<h3 id="deleteresourcepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteResourcePolicyInput](#schemadeleteresourcepolicyinput)|true|none|
|» resourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.DeleteResourcePolicy|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deleteresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteResourcePolicyOutput](#schemadeleteresourcepolicyoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSourceCredentials

<a id="opIdDeleteSourceCredentials"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.DeleteSourceCredentials' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials`

 Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. 

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="deletesourcecredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteSourceCredentialsInput](#schemadeletesourcecredentialsinput)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.DeleteSourceCredentials|

> Example responses

> 200 Response

```json
{
  "arn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deletesourcecredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSourceCredentialsOutput](#schemadeletesourcecredentialsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWebhook

<a id="opIdDeleteWebhook"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.DeleteWebhook' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.DeleteWebhook' \
  -d '{
    "projectName": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.DeleteWebhook`

For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.

> Body parameter

```json
{
  "projectName": {}
}
```

<h3 id="deletewebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteWebhookInput](#schemadeletewebhookinput)|true|none|
|» projectName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.DeleteWebhook|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="deletewebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteWebhookOutput](#schemadeletewebhookoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|OAuthProviderException|[OAuthProviderException](#schemaoauthproviderexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCodeCoverages

<a id="opIdDescribeCodeCoverages"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.DescribeCodeCoverages' \
  -d '{
    "reportArn": {},
    "nextToken": {},
    "maxResults": {},
    "sortOrder": {},
    "sortBy": {},
    "minLineCoveragePercentage": {},
    "maxLineCoveragePercentage": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages`

Retrieves one or more code coverage reports.

> Body parameter

```json
{
  "reportArn": {},
  "nextToken": {},
  "maxResults": {},
  "sortOrder": {},
  "sortBy": {},
  "minLineCoveragePercentage": {},
  "maxLineCoveragePercentage": {}
}
```

<h3 id="describecodecoverages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeCodeCoveragesInput](#schemadescribecodecoveragesinput)|true|none|
|» reportArn|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» sortOrder|body|object|false|none|
|» sortBy|body|object|false|none|
|» minLineCoveragePercentage|body|object|false|none|
|» maxLineCoveragePercentage|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.DescribeCodeCoverages|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "codeCoverages": {}
}
```

> 480 Response

```json
null
```

<h3 id="describecodecoverages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCodeCoveragesOutput](#schemadescribecodecoveragesoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTestCases

<a id="opIdDescribeTestCases"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.DescribeTestCases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.DescribeTestCases' \
  -d '{
    "reportArn": {},
    "nextToken": {},
    "maxResults": {},
    "filter": {
      "status": {},
      "keyword": {}
    }
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.DescribeTestCases`

 Returns a list of details about test cases for a report. 

> Body parameter

```json
{
  "reportArn": {},
  "nextToken": {},
  "maxResults": {},
  "filter": {
    "status": {},
    "keyword": {}
  }
}
```

<h3 id="describetestcases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeTestCasesInput](#schemadescribetestcasesinput)|true|none|
|» reportArn|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» filter|body|object|false|none|
|» » status|body|object|false|none|
|» » keyword|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.DescribeTestCases|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "testCases": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describetestcases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTestCasesOutput](#schemadescribetestcasesoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetReportGroupTrend

<a id="opIdGetReportGroupTrend"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.GetReportGroupTrend' \
  -d '{
    "reportGroupArn": {},
    "numOfReports": {},
    "trendField": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend`

Analyzes and accumulates test report values for the specified test reports.

> Body parameter

```json
{
  "reportGroupArn": {},
  "numOfReports": {},
  "trendField": {}
}
```

<h3 id="getreportgrouptrend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetReportGroupTrendInput](#schemagetreportgrouptrendinput)|true|none|
|» reportGroupArn|body|object|true|none|
|» numOfReports|body|object|false|none|
|» trendField|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.GetReportGroupTrend|

> Example responses

> 200 Response

```json
{
  "stats": {
    "average": {},
    "max": {},
    "min": {}
  },
  "rawData": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="getreportgrouptrend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetReportGroupTrendOutput](#schemagetreportgrouptrendoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourcePolicy

<a id="opIdGetResourcePolicy"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.GetResourcePolicy' \
  -d '{
    "resourceArn": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy`

 Gets a resource policy that is identified by its resource ARN. 

> Body parameter

```json
{
  "resourceArn": {}
}
```

<h3 id="getresourcepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetResourcePolicyInput](#schemagetresourcepolicyinput)|true|none|
|» resourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.GetResourcePolicy|

> Example responses

> 200 Response

```json
{
  "policy": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="getresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourcePolicyOutput](#schemagetresourcepolicyoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportSourceCredentials

<a id="opIdImportSourceCredentials"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.ImportSourceCredentials' \
  -d '{
    "username": {},
    "token": {},
    "serverType": {},
    "authType": {},
    "shouldOverwrite": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials`

 Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. 

> Body parameter

```json
{
  "username": {},
  "token": {},
  "serverType": {},
  "authType": {},
  "shouldOverwrite": {}
}
```

<h3 id="importsourcecredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ImportSourceCredentialsInput](#schemaimportsourcecredentialsinput)|true|none|
|» username|body|object|false|none|
|» token|body|object|true|none|
|» serverType|body|object|true|none|
|» authType|body|object|true|none|
|» shouldOverwrite|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.ImportSourceCredentials|

> Example responses

> 200 Response

```json
{
  "arn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="importsourcecredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportSourceCredentialsOutput](#schemaimportsourcecredentialsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|AccountLimitExceededException|[AccountLimitExceededException](#schemaaccountlimitexceededexception)|
|482|482|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InvalidateProjectCache

<a id="opIdInvalidateProjectCache"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.InvalidateProjectCache' \
  -d '{
    "projectName": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache`

Resets the cache for a project.

> Body parameter

```json
{
  "projectName": {}
}
```

<h3 id="invalidateprojectcache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[InvalidateProjectCacheInput](#schemainvalidateprojectcacheinput)|true|none|
|» projectName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.InvalidateProjectCache|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="invalidateprojectcache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InvalidateProjectCacheOutput](#schemainvalidateprojectcacheoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBuildBatches

<a id="opIdListBuildBatches"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.ListBuildBatches' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.ListBuildBatches' \
  -d '{
    "filter": {
      "status": {}
    },
    "maxResults": {},
    "sortOrder": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.ListBuildBatches`

Retrieves the identifiers of your build batches in the current region.

> Body parameter

```json
{
  "filter": {
    "status": {}
  },
  "maxResults": {},
  "sortOrder": {},
  "nextToken": {}
}
```

<h3 id="listbuildbatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListBuildBatchesInput](#schemalistbuildbatchesinput)|true|none|
|» filter|body|object|false|none|
|» » status|body|object|false|none|
|» maxResults|body|object|false|none|
|» sortOrder|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.ListBuildBatches|

> Example responses

> 200 Response

```json
{
  "ids": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listbuildbatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBuildBatchesOutput](#schemalistbuildbatchesoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBuildBatchesForProject

<a id="opIdListBuildBatchesForProject"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.ListBuildBatchesForProject' \
  -d '{
    "projectName": {},
    "filter": {
      "status": {}
    },
    "maxResults": {},
    "sortOrder": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject`

Retrieves the identifiers of the build batches for a specific project.

> Body parameter

```json
{
  "projectName": {},
  "filter": {
    "status": {}
  },
  "maxResults": {},
  "sortOrder": {},
  "nextToken": {}
}
```

<h3 id="listbuildbatchesforproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListBuildBatchesForProjectInput](#schemalistbuildbatchesforprojectinput)|true|none|
|» projectName|body|object|false|none|
|» filter|body|object|false|none|
|» » status|body|object|false|none|
|» maxResults|body|object|false|none|
|» sortOrder|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.ListBuildBatchesForProject|

> Example responses

> 200 Response

```json
{
  "ids": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listbuildbatchesforproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBuildBatchesForProjectOutput](#schemalistbuildbatchesforprojectoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBuilds

<a id="opIdListBuilds"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.ListBuilds' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.ListBuilds' \
  -d '{
    "sortOrder": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.ListBuilds`

Gets a list of build IDs, with each build ID representing a single build.

> Body parameter

```json
{
  "sortOrder": {},
  "nextToken": {}
}
```

<h3 id="listbuilds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListBuildsInput](#schemalistbuildsinput)|true|none|
|» sortOrder|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.ListBuilds|

> Example responses

> 200 Response

```json
{
  "ids": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listbuilds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBuildsOutput](#schemalistbuildsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBuildsForProject

<a id="opIdListBuildsForProject"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.ListBuildsForProject' \
  -d '{
    "projectName": {},
    "sortOrder": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject`

Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.

> Body parameter

```json
{
  "projectName": {},
  "sortOrder": {},
  "nextToken": {}
}
```

<h3 id="listbuildsforproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListBuildsForProjectInput](#schemalistbuildsforprojectinput)|true|none|
|» projectName|body|object|true|none|
|» sortOrder|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.ListBuildsForProject|

> Example responses

> 200 Response

```json
{
  "ids": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listbuildsforproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBuildsForProjectOutput](#schemalistbuildsforprojectoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCuratedEnvironmentImages

<a id="opIdListCuratedEnvironmentImages"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.ListCuratedEnvironmentImages' \
  -d '{}'
```

`POST /#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages`

Gets information about Docker images that are managed by CodeBuild.

> Body parameter

```json
{}
```

<h3 id="listcuratedenvironmentimages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListCuratedEnvironmentImagesInput](#schemalistcuratedenvironmentimagesinput)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.ListCuratedEnvironmentImages|

> Example responses

> 200 Response

```json
{
  "platforms": {}
}
```

<h3 id="listcuratedenvironmentimages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCuratedEnvironmentImagesOutput](#schemalistcuratedenvironmentimagesoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProjects

<a id="opIdListProjects"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.ListProjects' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.ListProjects' \
  -d '{
    "sortBy": {},
    "sortOrder": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.ListProjects`

Gets a list of build project names, with each build project name representing a single build project.

> Body parameter

```json
{
  "sortBy": {},
  "sortOrder": {},
  "nextToken": {}
}
```

<h3 id="listprojects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListProjectsInput](#schemalistprojectsinput)|true|none|
|» sortBy|body|object|false|none|
|» sortOrder|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.ListProjects|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "projects": {}
}
```

> 480 Response

```json
null
```

<h3 id="listprojects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProjectsOutput](#schemalistprojectsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReportGroups

<a id="opIdListReportGroups"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.ListReportGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.ListReportGroups' \
  -d '{
    "sortOrder": {},
    "sortBy": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.ListReportGroups`

 Gets a list ARNs for the report groups in the current Amazon Web Services account. 

> Body parameter

```json
{
  "sortOrder": {},
  "sortBy": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listreportgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListReportGroupsInput](#schemalistreportgroupsinput)|true|none|
|» sortOrder|body|object|false|none|
|» sortBy|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.ListReportGroups|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "reportGroups": {}
}
```

> 480 Response

```json
null
```

<h3 id="listreportgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReportGroupsOutput](#schemalistreportgroupsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReports

<a id="opIdListReports"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.ListReports' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.ListReports' \
  -d '{
    "sortOrder": {},
    "nextToken": {},
    "maxResults": {},
    "filter": {
      "status": {}
    }
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.ListReports`

 Returns a list of ARNs for the reports in the current Amazon Web Services account. 

> Body parameter

```json
{
  "sortOrder": {},
  "nextToken": {},
  "maxResults": {},
  "filter": {
    "status": {}
  }
}
```

<h3 id="listreports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListReportsInput](#schemalistreportsinput)|true|none|
|» sortOrder|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» filter|body|object|false|none|
|» » status|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.ListReports|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "reports": {}
}
```

> 480 Response

```json
null
```

<h3 id="listreports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReportsOutput](#schemalistreportsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReportsForReportGroup

<a id="opIdListReportsForReportGroup"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.ListReportsForReportGroup' \
  -d '{
    "reportGroupArn": {},
    "nextToken": {},
    "sortOrder": {},
    "maxResults": {},
    "filter": {
      "status": {}
    }
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup`

 Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>. 

> Body parameter

```json
{
  "reportGroupArn": {},
  "nextToken": {},
  "sortOrder": {},
  "maxResults": {},
  "filter": {
    "status": {}
  }
}
```

<h3 id="listreportsforreportgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListReportsForReportGroupInput](#schemalistreportsforreportgroupinput)|true|none|
|» reportGroupArn|body|object|true|none|
|» nextToken|body|object|false|none|
|» sortOrder|body|object|false|none|
|» maxResults|body|object|false|none|
|» filter|body|object|false|none|
|» » status|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.ListReportsForReportGroup|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "reports": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listreportsforreportgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReportsForReportGroupOutput](#schemalistreportsforreportgroupoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSharedProjects

<a id="opIdListSharedProjects"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.ListSharedProjects' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.ListSharedProjects' \
  -d '{
    "sortBy": {},
    "sortOrder": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.ListSharedProjects`

 Gets a list of projects that are shared with other Amazon Web Services accounts or users. 

> Body parameter

```json
{
  "sortBy": {},
  "sortOrder": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="listsharedprojects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListSharedProjectsInput](#schemalistsharedprojectsinput)|true|none|
|» sortBy|body|object|false|none|
|» sortOrder|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.ListSharedProjects|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "projects": {}
}
```

> 480 Response

```json
null
```

<h3 id="listsharedprojects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSharedProjectsOutput](#schemalistsharedprojectsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSharedReportGroups

<a id="opIdListSharedReportGroups"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.ListSharedReportGroups' \
  -d '{
    "sortOrder": {},
    "sortBy": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups`

 Gets a list of report groups that are shared with other Amazon Web Services accounts or users. 

> Body parameter

```json
{
  "sortOrder": {},
  "sortBy": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listsharedreportgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListSharedReportGroupsInput](#schemalistsharedreportgroupsinput)|true|none|
|» sortOrder|body|object|false|none|
|» sortBy|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.ListSharedReportGroups|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "reportGroups": {}
}
```

> 480 Response

```json
null
```

<h3 id="listsharedreportgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSharedReportGroupsOutput](#schemalistsharedreportgroupsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSourceCredentials

<a id="opIdListSourceCredentials"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.ListSourceCredentials' \
  -d '{}'
```

`POST /#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials`

 Returns a list of <code>SourceCredentialsInfo</code> objects. 

> Body parameter

```json
{}
```

<h3 id="listsourcecredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListSourceCredentialsInput](#schemalistsourcecredentialsinput)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.ListSourceCredentials|

> Example responses

> 200 Response

```json
{
  "sourceCredentialsInfos": {}
}
```

> 480 Response

```json
null
```

<h3 id="listsourcecredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSourceCredentialsOutput](#schemalistsourcecredentialsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResourcePolicy

<a id="opIdPutResourcePolicy"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.PutResourcePolicy' \
  -d '{
    "policy": {},
    "resourceArn": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy`

 Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object. 

> Body parameter

```json
{
  "policy": {},
  "resourceArn": {}
}
```

<h3 id="putresourcepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutResourcePolicyInput](#schemaputresourcepolicyinput)|true|none|
|» policy|body|object|true|none|
|» resourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.PutResourcePolicy|

> Example responses

> 200 Response

```json
{
  "resourceArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="putresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutResourcePolicyOutput](#schemaputresourcepolicyoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RetryBuild

<a id="opIdRetryBuild"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.RetryBuild' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.RetryBuild' \
  -d '{
    "id": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.RetryBuild`

Restarts a build.

> Body parameter

```json
{
  "id": {}
}
```

<h3 id="retrybuild-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RetryBuildInput](#schemaretrybuildinput)|true|none|
|» id|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.RetryBuild|

> Example responses

> 200 Response

```json
{
  "build": {
    "id": {},
    "arn": {},
    "buildNumber": {},
    "startTime": {},
    "endTime": {},
    "currentPhase": {},
    "buildStatus": {},
    "sourceVersion": {},
    "resolvedSourceVersion": {},
    "projectName": {},
    "phases": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "location": {},
      "sha256sum": {},
      "md5sum": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "logs": {
      "groupName": {},
      "streamName": {},
      "deepLink": {},
      "s3DeepLink": {},
      "cloudWatchLogsArn": {},
      "s3LogsArn": {},
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "timeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "buildComplete": {},
    "initiator": {},
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "networkInterface": {
      "subnetId": {},
      "networkInterfaceId": {}
    },
    "encryptionKey": {},
    "exportedEnvironmentVariables": {},
    "reportArns": {},
    "fileSystemLocations": {},
    "debugSession": {
      "sessionEnabled": {},
      "sessionTarget": {}
    },
    "buildBatchArn": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="retrybuild-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RetryBuildOutput](#schemaretrybuildoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccountLimitExceededException|[AccountLimitExceededException](#schemaaccountlimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RetryBuildBatch

<a id="opIdRetryBuildBatch"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.RetryBuildBatch' \
  -d '{
    "id": {},
    "retryType": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch`

Restarts a failed batch build. Only batch builds that have failed can be retried.

> Body parameter

```json
{
  "id": {},
  "retryType": {}
}
```

<h3 id="retrybuildbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RetryBuildBatchInput](#schemaretrybuildbatchinput)|true|none|
|» id|body|object|false|none|
|» retryType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.RetryBuildBatch|

> Example responses

> 200 Response

```json
{
  "buildBatch": {
    "id": {},
    "arn": {},
    "startTime": {},
    "endTime": {},
    "currentPhase": {},
    "buildBatchStatus": {},
    "sourceVersion": {},
    "resolvedSourceVersion": {},
    "projectName": {},
    "phases": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "location": {},
      "sha256sum": {},
      "md5sum": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "logConfig": {
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "buildTimeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "complete": {},
    "initiator": {},
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "encryptionKey": {},
    "buildBatchNumber": {},
    "fileSystemLocations": {},
    "buildBatchConfig": {
      "serviceRole": {},
      "combineArtifacts": {},
      "restrictions": {
        "maximumBuildsAllowed": {},
        "computeTypesAllowed": {}
      },
      "timeoutInMins": {},
      "batchReportMode": {}
    },
    "buildGroups": {},
    "debugSessionEnabled": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="retrybuildbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RetryBuildBatchOutput](#schemaretrybuildbatchoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartBuild

<a id="opIdStartBuild"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.StartBuild' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.StartBuild' \
  -d '{
    "projectName": {},
    "secondarySourcesOverride": {},
    "secondarySourcesVersionOverride": {},
    "sourceVersion": {},
    "artifactsOverride": {
      "type": {},
      "location": {},
      "path": {},
      "namespaceType": {},
      "name": {},
      "packaging": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifactsOverride": {},
    "environmentVariablesOverride": {},
    "sourceTypeOverride": {},
    "sourceLocationOverride": {},
    "sourceAuthOverride": {
      "type": {},
      "resource": {}
    },
    "gitCloneDepthOverride": {},
    "gitSubmodulesConfigOverride": {
      "fetchSubmodules": {}
    },
    "buildspecOverride": {},
    "insecureSslOverride": {},
    "reportBuildStatusOverride": {},
    "buildStatusConfigOverride": {
      "context": {},
      "targetUrl": {}
    },
    "environmentTypeOverride": {},
    "imageOverride": {},
    "computeTypeOverride": {},
    "certificateOverride": {},
    "cacheOverride": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "serviceRoleOverride": {},
    "privilegedModeOverride": {},
    "timeoutInMinutesOverride": {},
    "queuedTimeoutInMinutesOverride": {},
    "encryptionKeyOverride": {},
    "logsConfigOverride": {
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "registryCredentialOverride": {
      "credential": {},
      "credentialProvider": {}
    },
    "imagePullCredentialsTypeOverride": {},
    "debugSessionEnabled": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.StartBuild`

Starts running a build.

> Body parameter

```json
{
  "projectName": {},
  "secondarySourcesOverride": {},
  "secondarySourcesVersionOverride": {},
  "sourceVersion": {},
  "artifactsOverride": {
    "type": {},
    "location": {},
    "path": {},
    "namespaceType": {},
    "name": {},
    "packaging": {},
    "overrideArtifactName": {},
    "encryptionDisabled": {},
    "artifactIdentifier": {},
    "bucketOwnerAccess": "NONE"
  },
  "secondaryArtifactsOverride": {},
  "environmentVariablesOverride": {},
  "sourceTypeOverride": {},
  "sourceLocationOverride": {},
  "sourceAuthOverride": {
    "type": {},
    "resource": {}
  },
  "gitCloneDepthOverride": {},
  "gitSubmodulesConfigOverride": {
    "fetchSubmodules": {}
  },
  "buildspecOverride": {},
  "insecureSslOverride": {},
  "reportBuildStatusOverride": {},
  "buildStatusConfigOverride": {
    "context": {},
    "targetUrl": {}
  },
  "environmentTypeOverride": {},
  "imageOverride": {},
  "computeTypeOverride": {},
  "certificateOverride": {},
  "cacheOverride": {
    "type": {},
    "location": {},
    "modes": {}
  },
  "serviceRoleOverride": {},
  "privilegedModeOverride": {},
  "timeoutInMinutesOverride": {},
  "queuedTimeoutInMinutesOverride": {},
  "encryptionKeyOverride": {},
  "logsConfigOverride": {
    "cloudWatchLogs": {
      "status": {},
      "groupName": {},
      "streamName": {}
    },
    "s3Logs": {
      "status": {},
      "location": {},
      "encryptionDisabled": {},
      "bucketOwnerAccess": "NONE"
    }
  },
  "registryCredentialOverride": {
    "credential": {},
    "credentialProvider": {}
  },
  "imagePullCredentialsTypeOverride": {},
  "debugSessionEnabled": {}
}
```

<h3 id="startbuild-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartBuildInput](#schemastartbuildinput)|true|none|
|» projectName|body|object|true|none|
|» secondarySourcesOverride|body|object|false|none|
|» secondarySourcesVersionOverride|body|object|false|none|
|» sourceVersion|body|object|false|none|
|» artifactsOverride|body|object|false|none|
|» » type|body|object|true|none|
|» » location|body|object|false|none|
|» » path|body|object|false|none|
|» » namespaceType|body|object|false|none|
|» » name|body|object|false|none|
|» » packaging|body|object|false|none|
|» » overrideArtifactName|body|object|false|none|
|» » encryptionDisabled|body|object|false|none|
|» » artifactIdentifier|body|object|false|none|
|» » bucketOwnerAccess|body|[BucketOwnerAccess](#schemabucketowneraccess)|false|<p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl>|
|» secondaryArtifactsOverride|body|object|false|none|
|» environmentVariablesOverride|body|object|false|none|
|» sourceTypeOverride|body|object|false|none|
|» sourceLocationOverride|body|object|false|none|
|» sourceAuthOverride|body|object|false|none|
|» » type|body|object|true|none|
|» » resource|body|object|false|none|
|» gitCloneDepthOverride|body|object|false|none|
|» gitSubmodulesConfigOverride|body|object|false|none|
|» » fetchSubmodules|body|object|true|none|
|» buildspecOverride|body|object|false|none|
|» insecureSslOverride|body|object|false|none|
|» reportBuildStatusOverride|body|object|false|none|
|» buildStatusConfigOverride|body|object|false|none|
|» » context|body|object|false|none|
|» » targetUrl|body|object|false|none|
|» environmentTypeOverride|body|object|false|none|
|» imageOverride|body|object|false|none|
|» computeTypeOverride|body|object|false|none|
|» certificateOverride|body|object|false|none|
|» cacheOverride|body|object|false|none|
|» » type|body|object|true|none|
|» » location|body|object|false|none|
|» » modes|body|object|false|none|
|» serviceRoleOverride|body|object|false|none|
|» privilegedModeOverride|body|object|false|none|
|» timeoutInMinutesOverride|body|object|false|none|
|» queuedTimeoutInMinutesOverride|body|object|false|none|
|» encryptionKeyOverride|body|object|false|none|
|» logsConfigOverride|body|object|false|none|
|» » cloudWatchLogs|body|object|false|none|
|» » » status|body|object|true|none|
|» » » groupName|body|object|false|none|
|» » » streamName|body|object|false|none|
|» » s3Logs|body|object|false|none|
|» » » status|body|object|true|none|
|» » » location|body|object|false|none|
|» » » encryptionDisabled|body|object|false|none|
|» » » bucketOwnerAccess|body|[BucketOwnerAccess](#schemabucketowneraccess)|false|<p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl>|
|» registryCredentialOverride|body|object|false|none|
|» » credential|body|object|true|none|
|» » credentialProvider|body|object|true|none|
|» imagePullCredentialsTypeOverride|body|object|false|none|
|» debugSessionEnabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.StartBuild|
|» » bucketOwnerAccess|NONE|
|» » bucketOwnerAccess|READ_ONLY|
|» » bucketOwnerAccess|FULL|
|» » » bucketOwnerAccess|NONE|
|» » » bucketOwnerAccess|READ_ONLY|
|» » » bucketOwnerAccess|FULL|

> Example responses

> 200 Response

```json
{
  "build": {
    "id": {},
    "arn": {},
    "buildNumber": {},
    "startTime": {},
    "endTime": {},
    "currentPhase": {},
    "buildStatus": {},
    "sourceVersion": {},
    "resolvedSourceVersion": {},
    "projectName": {},
    "phases": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "location": {},
      "sha256sum": {},
      "md5sum": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "logs": {
      "groupName": {},
      "streamName": {},
      "deepLink": {},
      "s3DeepLink": {},
      "cloudWatchLogsArn": {},
      "s3LogsArn": {},
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "timeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "buildComplete": {},
    "initiator": {},
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "networkInterface": {
      "subnetId": {},
      "networkInterfaceId": {}
    },
    "encryptionKey": {},
    "exportedEnvironmentVariables": {},
    "reportArns": {},
    "fileSystemLocations": {},
    "debugSession": {
      "sessionEnabled": {},
      "sessionTarget": {}
    },
    "buildBatchArn": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="startbuild-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartBuildOutput](#schemastartbuildoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccountLimitExceededException|[AccountLimitExceededException](#schemaaccountlimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartBuildBatch

<a id="opIdStartBuildBatch"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.StartBuildBatch' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.StartBuildBatch' \
  -d '{
    "projectName": {},
    "secondarySourcesOverride": {},
    "secondarySourcesVersionOverride": {},
    "sourceVersion": {},
    "artifactsOverride": {
      "type": {},
      "location": {},
      "path": {},
      "namespaceType": {},
      "name": {},
      "packaging": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifactsOverride": {},
    "environmentVariablesOverride": {},
    "sourceTypeOverride": {},
    "sourceLocationOverride": {},
    "sourceAuthOverride": {
      "type": {},
      "resource": {}
    },
    "gitCloneDepthOverride": {},
    "gitSubmodulesConfigOverride": {
      "fetchSubmodules": {}
    },
    "buildspecOverride": {},
    "insecureSslOverride": {},
    "reportBuildBatchStatusOverride": {},
    "environmentTypeOverride": {},
    "imageOverride": {},
    "computeTypeOverride": {},
    "certificateOverride": {},
    "cacheOverride": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "serviceRoleOverride": {},
    "privilegedModeOverride": {},
    "buildTimeoutInMinutesOverride": {},
    "queuedTimeoutInMinutesOverride": {},
    "encryptionKeyOverride": {},
    "logsConfigOverride": {
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "registryCredentialOverride": {
      "credential": {},
      "credentialProvider": {}
    },
    "imagePullCredentialsTypeOverride": {},
    "buildBatchConfigOverride": {
      "serviceRole": {},
      "combineArtifacts": {},
      "restrictions": {
        "maximumBuildsAllowed": {},
        "computeTypesAllowed": {}
      },
      "timeoutInMins": {},
      "batchReportMode": {}
    },
    "debugSessionEnabled": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.StartBuildBatch`

Starts a batch build for a project.

> Body parameter

```json
{
  "projectName": {},
  "secondarySourcesOverride": {},
  "secondarySourcesVersionOverride": {},
  "sourceVersion": {},
  "artifactsOverride": {
    "type": {},
    "location": {},
    "path": {},
    "namespaceType": {},
    "name": {},
    "packaging": {},
    "overrideArtifactName": {},
    "encryptionDisabled": {},
    "artifactIdentifier": {},
    "bucketOwnerAccess": "NONE"
  },
  "secondaryArtifactsOverride": {},
  "environmentVariablesOverride": {},
  "sourceTypeOverride": {},
  "sourceLocationOverride": {},
  "sourceAuthOverride": {
    "type": {},
    "resource": {}
  },
  "gitCloneDepthOverride": {},
  "gitSubmodulesConfigOverride": {
    "fetchSubmodules": {}
  },
  "buildspecOverride": {},
  "insecureSslOverride": {},
  "reportBuildBatchStatusOverride": {},
  "environmentTypeOverride": {},
  "imageOverride": {},
  "computeTypeOverride": {},
  "certificateOverride": {},
  "cacheOverride": {
    "type": {},
    "location": {},
    "modes": {}
  },
  "serviceRoleOverride": {},
  "privilegedModeOverride": {},
  "buildTimeoutInMinutesOverride": {},
  "queuedTimeoutInMinutesOverride": {},
  "encryptionKeyOverride": {},
  "logsConfigOverride": {
    "cloudWatchLogs": {
      "status": {},
      "groupName": {},
      "streamName": {}
    },
    "s3Logs": {
      "status": {},
      "location": {},
      "encryptionDisabled": {},
      "bucketOwnerAccess": "NONE"
    }
  },
  "registryCredentialOverride": {
    "credential": {},
    "credentialProvider": {}
  },
  "imagePullCredentialsTypeOverride": {},
  "buildBatchConfigOverride": {
    "serviceRole": {},
    "combineArtifacts": {},
    "restrictions": {
      "maximumBuildsAllowed": {},
      "computeTypesAllowed": {}
    },
    "timeoutInMins": {},
    "batchReportMode": {}
  },
  "debugSessionEnabled": {}
}
```

<h3 id="startbuildbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartBuildBatchInput](#schemastartbuildbatchinput)|true|none|
|» projectName|body|object|true|none|
|» secondarySourcesOverride|body|object|false|none|
|» secondarySourcesVersionOverride|body|object|false|none|
|» sourceVersion|body|object|false|none|
|» artifactsOverride|body|object|false|none|
|» » type|body|object|true|none|
|» » location|body|object|false|none|
|» » path|body|object|false|none|
|» » namespaceType|body|object|false|none|
|» » name|body|object|false|none|
|» » packaging|body|object|false|none|
|» » overrideArtifactName|body|object|false|none|
|» » encryptionDisabled|body|object|false|none|
|» » artifactIdentifier|body|object|false|none|
|» » bucketOwnerAccess|body|[BucketOwnerAccess](#schemabucketowneraccess)|false|<p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl>|
|» secondaryArtifactsOverride|body|object|false|none|
|» environmentVariablesOverride|body|object|false|none|
|» sourceTypeOverride|body|object|false|none|
|» sourceLocationOverride|body|object|false|none|
|» sourceAuthOverride|body|object|false|none|
|» » type|body|object|true|none|
|» » resource|body|object|false|none|
|» gitCloneDepthOverride|body|object|false|none|
|» gitSubmodulesConfigOverride|body|object|false|none|
|» » fetchSubmodules|body|object|true|none|
|» buildspecOverride|body|object|false|none|
|» insecureSslOverride|body|object|false|none|
|» reportBuildBatchStatusOverride|body|object|false|none|
|» environmentTypeOverride|body|object|false|none|
|» imageOverride|body|object|false|none|
|» computeTypeOverride|body|object|false|none|
|» certificateOverride|body|object|false|none|
|» cacheOverride|body|object|false|none|
|» » type|body|object|true|none|
|» » location|body|object|false|none|
|» » modes|body|object|false|none|
|» serviceRoleOverride|body|object|false|none|
|» privilegedModeOverride|body|object|false|none|
|» buildTimeoutInMinutesOverride|body|object|false|none|
|» queuedTimeoutInMinutesOverride|body|object|false|none|
|» encryptionKeyOverride|body|object|false|none|
|» logsConfigOverride|body|object|false|none|
|» » cloudWatchLogs|body|object|false|none|
|» » » status|body|object|true|none|
|» » » groupName|body|object|false|none|
|» » » streamName|body|object|false|none|
|» » s3Logs|body|object|false|none|
|» » » status|body|object|true|none|
|» » » location|body|object|false|none|
|» » » encryptionDisabled|body|object|false|none|
|» » » bucketOwnerAccess|body|[BucketOwnerAccess](#schemabucketowneraccess)|false|<p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl>|
|» registryCredentialOverride|body|object|false|none|
|» » credential|body|object|true|none|
|» » credentialProvider|body|object|true|none|
|» imagePullCredentialsTypeOverride|body|object|false|none|
|» buildBatchConfigOverride|body|object|false|none|
|» » serviceRole|body|object|false|none|
|» » combineArtifacts|body|object|false|none|
|» » restrictions|body|object|false|none|
|» » » maximumBuildsAllowed|body|object|false|none|
|» » » computeTypesAllowed|body|object|false|none|
|» » timeoutInMins|body|object|false|none|
|» » batchReportMode|body|object|false|none|
|» debugSessionEnabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.StartBuildBatch|
|» » bucketOwnerAccess|NONE|
|» » bucketOwnerAccess|READ_ONLY|
|» » bucketOwnerAccess|FULL|
|» » » bucketOwnerAccess|NONE|
|» » » bucketOwnerAccess|READ_ONLY|
|» » » bucketOwnerAccess|FULL|

> Example responses

> 200 Response

```json
{
  "buildBatch": {
    "id": {},
    "arn": {},
    "startTime": {},
    "endTime": {},
    "currentPhase": {},
    "buildBatchStatus": {},
    "sourceVersion": {},
    "resolvedSourceVersion": {},
    "projectName": {},
    "phases": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "location": {},
      "sha256sum": {},
      "md5sum": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "logConfig": {
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "buildTimeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "complete": {},
    "initiator": {},
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "encryptionKey": {},
    "buildBatchNumber": {},
    "fileSystemLocations": {},
    "buildBatchConfig": {
      "serviceRole": {},
      "combineArtifacts": {},
      "restrictions": {
        "maximumBuildsAllowed": {},
        "computeTypesAllowed": {}
      },
      "timeoutInMins": {},
      "batchReportMode": {}
    },
    "buildGroups": {},
    "debugSessionEnabled": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="startbuildbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartBuildBatchOutput](#schemastartbuildbatchoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopBuild

<a id="opIdStopBuild"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.StopBuild' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.StopBuild' \
  -d '{
    "id": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.StopBuild`

Attempts to stop running a build.

> Body parameter

```json
{
  "id": {}
}
```

<h3 id="stopbuild-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StopBuildInput](#schemastopbuildinput)|true|none|
|» id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.StopBuild|

> Example responses

> 200 Response

```json
{
  "build": {
    "id": {},
    "arn": {},
    "buildNumber": {},
    "startTime": {},
    "endTime": {},
    "currentPhase": {},
    "buildStatus": {},
    "sourceVersion": {},
    "resolvedSourceVersion": {},
    "projectName": {},
    "phases": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "location": {},
      "sha256sum": {},
      "md5sum": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "logs": {
      "groupName": {},
      "streamName": {},
      "deepLink": {},
      "s3DeepLink": {},
      "cloudWatchLogsArn": {},
      "s3LogsArn": {},
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "timeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "buildComplete": {},
    "initiator": {},
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "networkInterface": {
      "subnetId": {},
      "networkInterfaceId": {}
    },
    "encryptionKey": {},
    "exportedEnvironmentVariables": {},
    "reportArns": {},
    "fileSystemLocations": {},
    "debugSession": {
      "sessionEnabled": {},
      "sessionTarget": {}
    },
    "buildBatchArn": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="stopbuild-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopBuildOutput](#schemastopbuildoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopBuildBatch

<a id="opIdStopBuildBatch"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.StopBuildBatch' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.StopBuildBatch' \
  -d '{
    "id": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.StopBuildBatch`

Stops a running batch build.

> Body parameter

```json
{
  "id": {}
}
```

<h3 id="stopbuildbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StopBuildBatchInput](#schemastopbuildbatchinput)|true|none|
|» id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.StopBuildBatch|

> Example responses

> 200 Response

```json
{
  "buildBatch": {
    "id": {},
    "arn": {},
    "startTime": {},
    "endTime": {},
    "currentPhase": {},
    "buildBatchStatus": {},
    "sourceVersion": {},
    "resolvedSourceVersion": {},
    "projectName": {},
    "phases": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "location": {},
      "sha256sum": {},
      "md5sum": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "logConfig": {
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "buildTimeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "complete": {},
    "initiator": {},
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "encryptionKey": {},
    "buildBatchNumber": {},
    "fileSystemLocations": {},
    "buildBatchConfig": {
      "serviceRole": {},
      "combineArtifacts": {},
      "restrictions": {
        "maximumBuildsAllowed": {},
        "computeTypesAllowed": {}
      },
      "timeoutInMins": {},
      "batchReportMode": {}
    },
    "buildGroups": {},
    "debugSessionEnabled": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="stopbuildbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopBuildBatchOutput](#schemastopbuildbatchoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProject

<a id="opIdUpdateProject"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.UpdateProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.UpdateProject' \
  -d '{
    "name": {},
    "description": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "sourceVersion": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "type": {},
      "location": {},
      "path": {},
      "namespaceType": {},
      "name": {},
      "packaging": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "timeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "encryptionKey": {},
    "tags": {},
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "badgeEnabled": {},
    "logsConfig": {
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "fileSystemLocations": {},
    "buildBatchConfig": {
      "serviceRole": {},
      "combineArtifacts": {},
      "restrictions": {
        "maximumBuildsAllowed": {},
        "computeTypesAllowed": {}
      },
      "timeoutInMins": {},
      "batchReportMode": {}
    },
    "concurrentBuildLimit": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.UpdateProject`

Changes the settings of a build project.

> Body parameter

```json
{
  "name": {},
  "description": {},
  "source": {
    "type": {},
    "location": {},
    "gitCloneDepth": {},
    "gitSubmodulesConfig": {
      "fetchSubmodules": {}
    },
    "buildspec": {},
    "auth": {
      "type": {},
      "resource": {}
    },
    "reportBuildStatus": {},
    "buildStatusConfig": {
      "context": {},
      "targetUrl": {}
    },
    "insecureSsl": {},
    "sourceIdentifier": {}
  },
  "secondarySources": {},
  "sourceVersion": {},
  "secondarySourceVersions": {},
  "artifacts": {
    "type": {},
    "location": {},
    "path": {},
    "namespaceType": {},
    "name": {},
    "packaging": {},
    "overrideArtifactName": {},
    "encryptionDisabled": {},
    "artifactIdentifier": {},
    "bucketOwnerAccess": "NONE"
  },
  "secondaryArtifacts": {},
  "cache": {
    "type": {},
    "location": {},
    "modes": {}
  },
  "environment": {
    "type": {},
    "image": {},
    "computeType": {},
    "environmentVariables": {},
    "privilegedMode": {},
    "certificate": {},
    "registryCredential": {
      "credential": {},
      "credentialProvider": {}
    },
    "imagePullCredentialsType": {}
  },
  "serviceRole": {},
  "timeoutInMinutes": {},
  "queuedTimeoutInMinutes": {},
  "encryptionKey": {},
  "tags": {},
  "vpcConfig": {
    "vpcId": {},
    "subnets": {},
    "securityGroupIds": {}
  },
  "badgeEnabled": {},
  "logsConfig": {
    "cloudWatchLogs": {
      "status": {},
      "groupName": {},
      "streamName": {}
    },
    "s3Logs": {
      "status": {},
      "location": {},
      "encryptionDisabled": {},
      "bucketOwnerAccess": "NONE"
    }
  },
  "fileSystemLocations": {},
  "buildBatchConfig": {
    "serviceRole": {},
    "combineArtifacts": {},
    "restrictions": {
      "maximumBuildsAllowed": {},
      "computeTypesAllowed": {}
    },
    "timeoutInMins": {},
    "batchReportMode": {}
  },
  "concurrentBuildLimit": {}
}
```

<h3 id="updateproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateProjectInput](#schemaupdateprojectinput)|true|none|
|» name|body|object|true|none|
|» description|body|object|false|none|
|» source|body|object|false|none|
|» » type|body|object|true|none|
|» » location|body|object|false|none|
|» » gitCloneDepth|body|object|false|none|
|» » gitSubmodulesConfig|body|object|false|none|
|» » » fetchSubmodules|body|object|true|none|
|» » buildspec|body|object|false|none|
|» » auth|body|object|false|none|
|» » » type|body|object|true|none|
|» » » resource|body|object|false|none|
|» » reportBuildStatus|body|object|false|none|
|» » buildStatusConfig|body|object|false|none|
|» » » context|body|object|false|none|
|» » » targetUrl|body|object|false|none|
|» » insecureSsl|body|object|false|none|
|» » sourceIdentifier|body|object|false|none|
|» secondarySources|body|object|false|none|
|» sourceVersion|body|object|false|none|
|» secondarySourceVersions|body|object|false|none|
|» artifacts|body|object|false|none|
|» » type|body|object|true|none|
|» » location|body|object|false|none|
|» » path|body|object|false|none|
|» » namespaceType|body|object|false|none|
|» » name|body|object|false|none|
|» » packaging|body|object|false|none|
|» » overrideArtifactName|body|object|false|none|
|» » encryptionDisabled|body|object|false|none|
|» » artifactIdentifier|body|object|false|none|
|» » bucketOwnerAccess|body|[BucketOwnerAccess](#schemabucketowneraccess)|false|<p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl>|
|» secondaryArtifacts|body|object|false|none|
|» cache|body|object|false|none|
|» » type|body|object|true|none|
|» » location|body|object|false|none|
|» » modes|body|object|false|none|
|» environment|body|object|false|none|
|» » type|body|object|true|none|
|» » image|body|object|true|none|
|» » computeType|body|object|true|none|
|» » environmentVariables|body|object|false|none|
|» » privilegedMode|body|object|false|none|
|» » certificate|body|object|false|none|
|» » registryCredential|body|object|false|none|
|» » » credential|body|object|true|none|
|» » » credentialProvider|body|object|true|none|
|» » imagePullCredentialsType|body|object|false|none|
|» serviceRole|body|object|false|none|
|» timeoutInMinutes|body|object|false|none|
|» queuedTimeoutInMinutes|body|object|false|none|
|» encryptionKey|body|object|false|none|
|» tags|body|object|false|none|
|» vpcConfig|body|object|false|none|
|» » vpcId|body|object|false|none|
|» » subnets|body|object|false|none|
|» » securityGroupIds|body|object|false|none|
|» badgeEnabled|body|object|false|none|
|» logsConfig|body|object|false|none|
|» » cloudWatchLogs|body|object|false|none|
|» » » status|body|object|true|none|
|» » » groupName|body|object|false|none|
|» » » streamName|body|object|false|none|
|» » s3Logs|body|object|false|none|
|» » » status|body|object|true|none|
|» » » location|body|object|false|none|
|» » » encryptionDisabled|body|object|false|none|
|» » » bucketOwnerAccess|body|[BucketOwnerAccess](#schemabucketowneraccess)|false|<p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl>|
|» fileSystemLocations|body|object|false|none|
|» buildBatchConfig|body|[ProjectBuildBatchConfig](#schemaprojectbuildbatchconfig)|false|Contains configuration information about a batch build project.|
|» concurrentBuildLimit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.UpdateProject|
|» » bucketOwnerAccess|NONE|
|» » bucketOwnerAccess|READ_ONLY|
|» » bucketOwnerAccess|FULL|
|» » » bucketOwnerAccess|NONE|
|» » » bucketOwnerAccess|READ_ONLY|
|» » » bucketOwnerAccess|FULL|

> Example responses

> 200 Response

```json
{
  "project": {
    "name": {},
    "arn": {},
    "description": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "sourceVersion": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "type": {},
      "location": {},
      "path": {},
      "namespaceType": {},
      "name": {},
      "packaging": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "timeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "encryptionKey": {},
    "tags": {},
    "created": {},
    "lastModified": {},
    "webhook": {
      "url": {},
      "payloadUrl": {},
      "secret": {},
      "branchFilter": {},
      "filterGroups": {},
      "buildType": {},
      "lastModifiedSecret": {}
    },
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "badge": {
      "badgeEnabled": {},
      "badgeRequestUrl": {}
    },
    "logsConfig": {
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "fileSystemLocations": {},
    "buildBatchConfig": {
      "serviceRole": {},
      "combineArtifacts": {},
      "restrictions": {
        "maximumBuildsAllowed": {},
        "computeTypesAllowed": {}
      },
      "timeoutInMins": {},
      "batchReportMode": {}
    },
    "concurrentBuildLimit": {},
    "projectVisibility": "PUBLIC_READ",
    "publicProjectAlias": {},
    "resourceAccessRole": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updateproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProjectOutput](#schemaupdateprojectoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProjectVisibility

<a id="opIdUpdateProjectVisibility"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.UpdateProjectVisibility' \
  -d '{
    "projectArn": {},
    "projectVisibility": "PUBLIC_READ",
    "resourceAccessRole": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility`

<p>Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/public-builds.html">Public build projects</a> in the <i>CodeBuild User Guide</i>.</p> <important> <p>The following should be kept in mind when making your projects public:</p> <ul> <li> <p>All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public.</p> </li> <li> <p>All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are:</p> <ul> <li> <p>Do not store sensitive values, especially Amazon Web Services access key IDs and secret access keys, in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values.</p> </li> <li> <p>Follow <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/webhooks.html#webhook-best-practices">Best practices for using webhooks</a> in the <i>CodeBuild User Guide</i> to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible.</p> </li> </ul> </li> <li> <p>A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded.</p> </li> </ul> </important>

> Body parameter

```json
{
  "projectArn": {},
  "projectVisibility": "PUBLIC_READ",
  "resourceAccessRole": {}
}
```

<h3 id="updateprojectvisibility-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateProjectVisibilityInput](#schemaupdateprojectvisibilityinput)|true|none|
|» projectArn|body|object|true|none|
|» projectVisibility|body|[ProjectVisibilityType](#schemaprojectvisibilitytype)|true|<p>Specifies the visibility of the project's builds. Possible values are:</p> <dl> <dt>PUBLIC_READ</dt> <dd> <p>The project builds are visible to the public.</p> </dd> <dt>PRIVATE</dt> <dd> <p>The project builds are not visible to the public.</p> </dd> </dl>|
|» resourceAccessRole|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.UpdateProjectVisibility|
|» projectVisibility|PUBLIC_READ|
|» projectVisibility|PRIVATE|

> Example responses

> 200 Response

```json
{
  "projectArn": {},
  "publicProjectAlias": {},
  "projectVisibility": "PUBLIC_READ"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updateprojectvisibility-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProjectVisibilityOutput](#schemaupdateprojectvisibilityoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateReportGroup

<a id="opIdUpdateReportGroup"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.UpdateReportGroup' \
  -d '{
    "arn": {},
    "exportConfig": {
      "exportConfigType": {},
      "s3Destination": {
        "bucket": {},
        "bucketOwner": {},
        "path": {},
        "packaging": {},
        "encryptionKey": {},
        "encryptionDisabled": {}
      }
    },
    "tags": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup`

 Updates a report group. 

> Body parameter

```json
{
  "arn": {},
  "exportConfig": {
    "exportConfigType": {},
    "s3Destination": {
      "bucket": {},
      "bucketOwner": {},
      "path": {},
      "packaging": {},
      "encryptionKey": {},
      "encryptionDisabled": {}
    }
  },
  "tags": {}
}
```

<h3 id="updatereportgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateReportGroupInput](#schemaupdatereportgroupinput)|true|none|
|» arn|body|object|true|none|
|» exportConfig|body|object|false|none|
|» » exportConfigType|body|object|false|none|
|» » s3Destination|body|object|false|none|
|» » » bucket|body|object|false|none|
|» » » bucketOwner|body|object|false|none|
|» » » path|body|object|false|none|
|» » » packaging|body|object|false|none|
|» » » encryptionKey|body|object|false|none|
|» » » encryptionDisabled|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.UpdateReportGroup|

> Example responses

> 200 Response

```json
{
  "reportGroup": {
    "arn": {},
    "name": {},
    "type": {},
    "exportConfig": {
      "exportConfigType": {},
      "s3Destination": {
        "bucket": {},
        "bucketOwner": {},
        "path": {},
        "packaging": {},
        "encryptionKey": {},
        "encryptionDisabled": {}
      }
    },
    "created": {},
    "lastModified": {},
    "tags": {},
    "status": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updatereportgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateReportGroupOutput](#schemaupdatereportgroupoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateWebhook

<a id="opIdUpdateWebhook"></a>

> Code samples

```bash
curl 'https://codebuild.us-east-1.amazonaws.com/#X-Amz-Target=CodeBuild_20161006.UpdateWebhook' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeBuild_20161006.UpdateWebhook' \
  -d '{
    "projectName": {},
    "branchFilter": {},
    "rotateSecret": {},
    "filterGroups": {},
    "buildType": {}
  }'
```

`POST /#X-Amz-Target=CodeBuild_20161006.UpdateWebhook`

<p> Updates the webhook associated with an CodeBuild build project. </p> <note> <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p> </note>

> Body parameter

```json
{
  "projectName": {},
  "branchFilter": {},
  "rotateSecret": {},
  "filterGroups": {},
  "buildType": {}
}
```

<h3 id="updatewebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateWebhookInput](#schemaupdatewebhookinput)|true|none|
|» projectName|body|object|true|none|
|» branchFilter|body|object|false|none|
|» rotateSecret|body|object|false|none|
|» filterGroups|body|object|false|none|
|» buildType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeBuild_20161006.UpdateWebhook|

> Example responses

> 200 Response

```json
{
  "webhook": {
    "url": {},
    "payloadUrl": {},
    "secret": {},
    "branchFilter": {},
    "filterGroups": {},
    "buildType": {},
    "lastModifiedSecret": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="updatewebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateWebhookOutput](#schemaupdatewebhookoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|OAuthProviderException|[OAuthProviderException](#schemaoauthproviderexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchDeleteBuildsOutput">BatchDeleteBuildsOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletebuildsoutput"></a>
<a id="schema_BatchDeleteBuildsOutput"></a>
<a id="tocSbatchdeletebuildsoutput"></a>
<a id="tocsbatchdeletebuildsoutput"></a>

```json
{
  "buildsDeleted": {},
  "buildsNotDeleted": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildsDeleted|object|false|none|none|
|buildsNotDeleted|object|false|none|none|

<h2 id="tocS_BatchDeleteBuildsInput">BatchDeleteBuildsInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletebuildsinput"></a>
<a id="schema_BatchDeleteBuildsInput"></a>
<a id="tocSbatchdeletebuildsinput"></a>
<a id="tocsbatchdeletebuildsinput"></a>

```json
{
  "ids": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|object|true|none|none|

<h2 id="tocS_InvalidInputException">InvalidInputException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinputexception"></a>
<a id="schema_InvalidInputException"></a>
<a id="tocSinvalidinputexception"></a>
<a id="tocsinvalidinputexception"></a>

```json
null
```

<h2 id="tocS_BatchGetBuildBatchesOutput">BatchGetBuildBatchesOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetbuildbatchesoutput"></a>
<a id="schema_BatchGetBuildBatchesOutput"></a>
<a id="tocSbatchgetbuildbatchesoutput"></a>
<a id="tocsbatchgetbuildbatchesoutput"></a>

```json
{
  "buildBatches": {},
  "buildBatchesNotFound": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildBatches|object|false|none|none|
|buildBatchesNotFound|object|false|none|none|

<h2 id="tocS_BatchGetBuildBatchesInput">BatchGetBuildBatchesInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetbuildbatchesinput"></a>
<a id="schema_BatchGetBuildBatchesInput"></a>
<a id="tocSbatchgetbuildbatchesinput"></a>
<a id="tocsbatchgetbuildbatchesinput"></a>

```json
{
  "ids": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|object|true|none|none|

<h2 id="tocS_BatchGetBuildsOutput">BatchGetBuildsOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetbuildsoutput"></a>
<a id="schema_BatchGetBuildsOutput"></a>
<a id="tocSbatchgetbuildsoutput"></a>
<a id="tocsbatchgetbuildsoutput"></a>

```json
{
  "builds": {},
  "buildsNotFound": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|builds|object|false|none|none|
|buildsNotFound|object|false|none|none|

<h2 id="tocS_BatchGetBuildsInput">BatchGetBuildsInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetbuildsinput"></a>
<a id="schema_BatchGetBuildsInput"></a>
<a id="tocSbatchgetbuildsinput"></a>
<a id="tocsbatchgetbuildsinput"></a>

```json
{
  "ids": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|object|true|none|none|

<h2 id="tocS_BatchGetProjectsOutput">BatchGetProjectsOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetprojectsoutput"></a>
<a id="schema_BatchGetProjectsOutput"></a>
<a id="tocSbatchgetprojectsoutput"></a>
<a id="tocsbatchgetprojectsoutput"></a>

```json
{
  "projects": {},
  "projectsNotFound": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projects|object|false|none|none|
|projectsNotFound|object|false|none|none|

<h2 id="tocS_BatchGetProjectsInput">BatchGetProjectsInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetprojectsinput"></a>
<a id="schema_BatchGetProjectsInput"></a>
<a id="tocSbatchgetprojectsinput"></a>
<a id="tocsbatchgetprojectsinput"></a>

```json
{
  "names": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|object|true|none|none|

<h2 id="tocS_BatchGetReportGroupsOutput">BatchGetReportGroupsOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetreportgroupsoutput"></a>
<a id="schema_BatchGetReportGroupsOutput"></a>
<a id="tocSbatchgetreportgroupsoutput"></a>
<a id="tocsbatchgetreportgroupsoutput"></a>

```json
{
  "reportGroups": {},
  "reportGroupsNotFound": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportGroups|object|false|none|none|
|reportGroupsNotFound|object|false|none|none|

<h2 id="tocS_BatchGetReportGroupsInput">BatchGetReportGroupsInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetreportgroupsinput"></a>
<a id="schema_BatchGetReportGroupsInput"></a>
<a id="tocSbatchgetreportgroupsinput"></a>
<a id="tocsbatchgetreportgroupsinput"></a>

```json
{
  "reportGroupArns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportGroupArns|object|true|none|none|

<h2 id="tocS_BatchGetReportsOutput">BatchGetReportsOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetreportsoutput"></a>
<a id="schema_BatchGetReportsOutput"></a>
<a id="tocSbatchgetreportsoutput"></a>
<a id="tocsbatchgetreportsoutput"></a>

```json
{
  "reports": {},
  "reportsNotFound": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reports|object|false|none|none|
|reportsNotFound|object|false|none|none|

<h2 id="tocS_BatchGetReportsInput">BatchGetReportsInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetreportsinput"></a>
<a id="schema_BatchGetReportsInput"></a>
<a id="tocSbatchgetreportsinput"></a>
<a id="tocsbatchgetreportsinput"></a>

```json
{
  "reportArns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportArns|object|true|none|none|

<h2 id="tocS_CreateProjectOutput">CreateProjectOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectoutput"></a>
<a id="schema_CreateProjectOutput"></a>
<a id="tocScreateprojectoutput"></a>
<a id="tocscreateprojectoutput"></a>

```json
{
  "project": {
    "name": {},
    "arn": {},
    "description": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "sourceVersion": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "type": {},
      "location": {},
      "path": {},
      "namespaceType": {},
      "name": {},
      "packaging": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "timeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "encryptionKey": {},
    "tags": {},
    "created": {},
    "lastModified": {},
    "webhook": {
      "url": {},
      "payloadUrl": {},
      "secret": {},
      "branchFilter": {},
      "filterGroups": {},
      "buildType": {},
      "lastModifiedSecret": {}
    },
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "badge": {
      "badgeEnabled": {},
      "badgeRequestUrl": {}
    },
    "logsConfig": {
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "fileSystemLocations": {},
    "buildBatchConfig": {
      "serviceRole": {},
      "combineArtifacts": {},
      "restrictions": {
        "maximumBuildsAllowed": {},
        "computeTypesAllowed": {}
      },
      "timeoutInMins": {},
      "batchReportMode": {}
    },
    "concurrentBuildLimit": {},
    "projectVisibility": "PUBLIC_READ",
    "publicProjectAlias": {},
    "resourceAccessRole": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|object|false|none|none|

<h2 id="tocS_CreateProjectInput">CreateProjectInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectinput"></a>
<a id="schema_CreateProjectInput"></a>
<a id="tocScreateprojectinput"></a>
<a id="tocscreateprojectinput"></a>

```json
{
  "name": {},
  "description": {},
  "source": {
    "type": {},
    "location": {},
    "gitCloneDepth": {},
    "gitSubmodulesConfig": {
      "fetchSubmodules": {}
    },
    "buildspec": {},
    "auth": {
      "type": {},
      "resource": {}
    },
    "reportBuildStatus": {},
    "buildStatusConfig": {
      "context": {},
      "targetUrl": {}
    },
    "insecureSsl": {},
    "sourceIdentifier": {}
  },
  "secondarySources": {},
  "sourceVersion": {},
  "secondarySourceVersions": {},
  "artifacts": {
    "type": {},
    "location": {},
    "path": {},
    "namespaceType": {},
    "name": {},
    "packaging": {},
    "overrideArtifactName": {},
    "encryptionDisabled": {},
    "artifactIdentifier": {},
    "bucketOwnerAccess": "NONE"
  },
  "secondaryArtifacts": {},
  "cache": {
    "type": {},
    "location": {},
    "modes": {}
  },
  "environment": {
    "type": {},
    "image": {},
    "computeType": {},
    "environmentVariables": {},
    "privilegedMode": {},
    "certificate": {},
    "registryCredential": {
      "credential": {},
      "credentialProvider": {}
    },
    "imagePullCredentialsType": {}
  },
  "serviceRole": {},
  "timeoutInMinutes": {},
  "queuedTimeoutInMinutes": {},
  "encryptionKey": {},
  "tags": {},
  "vpcConfig": {
    "vpcId": {},
    "subnets": {},
    "securityGroupIds": {}
  },
  "badgeEnabled": {},
  "logsConfig": {
    "cloudWatchLogs": {
      "status": {},
      "groupName": {},
      "streamName": {}
    },
    "s3Logs": {
      "status": {},
      "location": {},
      "encryptionDisabled": {},
      "bucketOwnerAccess": "NONE"
    }
  },
  "fileSystemLocations": {},
  "buildBatchConfig": {
    "serviceRole": {},
    "combineArtifacts": {},
    "restrictions": {
      "maximumBuildsAllowed": {},
      "computeTypesAllowed": {}
    },
    "timeoutInMins": {},
    "batchReportMode": {}
  },
  "concurrentBuildLimit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|source|object|true|none|none|
|secondarySources|object|false|none|none|
|sourceVersion|object|false|none|none|
|secondarySourceVersions|object|false|none|none|
|artifacts|object|true|none|none|
|secondaryArtifacts|object|false|none|none|
|cache|object|false|none|none|
|environment|object|true|none|none|
|serviceRole|object|true|none|none|
|timeoutInMinutes|object|false|none|none|
|queuedTimeoutInMinutes|object|false|none|none|
|encryptionKey|object|false|none|none|
|tags|object|false|none|none|
|vpcConfig|object|false|none|none|
|badgeEnabled|object|false|none|none|
|logsConfig|object|false|none|none|
|fileSystemLocations|object|false|none|none|
|buildBatchConfig|object|false|none|none|
|concurrentBuildLimit|object|false|none|none|

<h2 id="tocS_ResourceAlreadyExistsException">ResourceAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsexception"></a>
<a id="schema_ResourceAlreadyExistsException"></a>
<a id="tocSresourcealreadyexistsexception"></a>
<a id="tocsresourcealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_AccountLimitExceededException">AccountLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlimitexceededexception"></a>
<a id="schema_AccountLimitExceededException"></a>
<a id="tocSaccountlimitexceededexception"></a>
<a id="tocsaccountlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateReportGroupOutput">CreateReportGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatereportgroupoutput"></a>
<a id="schema_CreateReportGroupOutput"></a>
<a id="tocScreatereportgroupoutput"></a>
<a id="tocscreatereportgroupoutput"></a>

```json
{
  "reportGroup": {
    "arn": {},
    "name": {},
    "type": {},
    "exportConfig": {
      "exportConfigType": {},
      "s3Destination": {
        "bucket": {},
        "bucketOwner": {},
        "path": {},
        "packaging": {},
        "encryptionKey": {},
        "encryptionDisabled": {}
      }
    },
    "created": {},
    "lastModified": {},
    "tags": {},
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportGroup|object|false|none|none|

<h2 id="tocS_CreateReportGroupInput">CreateReportGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatereportgroupinput"></a>
<a id="schema_CreateReportGroupInput"></a>
<a id="tocScreatereportgroupinput"></a>
<a id="tocscreatereportgroupinput"></a>

```json
{
  "name": {},
  "type": {},
  "exportConfig": {
    "exportConfigType": {},
    "s3Destination": {
      "bucket": {},
      "bucketOwner": {},
      "path": {},
      "packaging": {},
      "encryptionKey": {},
      "encryptionDisabled": {}
    }
  },
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|type|object|true|none|none|
|exportConfig|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateWebhookOutput">CreateWebhookOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebhookoutput"></a>
<a id="schema_CreateWebhookOutput"></a>
<a id="tocScreatewebhookoutput"></a>
<a id="tocscreatewebhookoutput"></a>

```json
{
  "webhook": {
    "url": {},
    "payloadUrl": {},
    "secret": {},
    "branchFilter": {},
    "filterGroups": {},
    "buildType": {},
    "lastModifiedSecret": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook|object|false|none|none|

<h2 id="tocS_CreateWebhookInput">CreateWebhookInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebhookinput"></a>
<a id="schema_CreateWebhookInput"></a>
<a id="tocScreatewebhookinput"></a>
<a id="tocscreatewebhookinput"></a>

```json
{
  "projectName": {},
  "branchFilter": {},
  "filterGroups": {},
  "buildType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectName|object|true|none|none|
|branchFilter|object|false|none|none|
|filterGroups|object|false|none|none|
|buildType|object|false|none|none|

<h2 id="tocS_OAuthProviderException">OAuthProviderException</h2>
<!-- backwards compatibility -->
<a id="schemaoauthproviderexception"></a>
<a id="schema_OAuthProviderException"></a>
<a id="tocSoauthproviderexception"></a>
<a id="tocsoauthproviderexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteBuildBatchOutput">DeleteBuildBatchOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletebuildbatchoutput"></a>
<a id="schema_DeleteBuildBatchOutput"></a>
<a id="tocSdeletebuildbatchoutput"></a>
<a id="tocsdeletebuildbatchoutput"></a>

```json
{
  "statusCode": {},
  "buildsDeleted": {},
  "buildsNotDeleted": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|object|false|none|none|
|buildsDeleted|object|false|none|none|
|buildsNotDeleted|object|false|none|none|

<h2 id="tocS_DeleteBuildBatchInput">DeleteBuildBatchInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletebuildbatchinput"></a>
<a id="schema_DeleteBuildBatchInput"></a>
<a id="tocSdeletebuildbatchinput"></a>
<a id="tocsdeletebuildbatchinput"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_DeleteProjectOutput">DeleteProjectOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectoutput"></a>
<a id="schema_DeleteProjectOutput"></a>
<a id="tocSdeleteprojectoutput"></a>
<a id="tocsdeleteprojectoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteProjectInput">DeleteProjectInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectinput"></a>
<a id="schema_DeleteProjectInput"></a>
<a id="tocSdeleteprojectinput"></a>
<a id="tocsdeleteprojectinput"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_DeleteReportOutput">DeleteReportOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletereportoutput"></a>
<a id="schema_DeleteReportOutput"></a>
<a id="tocSdeletereportoutput"></a>
<a id="tocsdeletereportoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteReportInput">DeleteReportInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletereportinput"></a>
<a id="schema_DeleteReportInput"></a>
<a id="tocSdeletereportinput"></a>
<a id="tocsdeletereportinput"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_DeleteReportGroupOutput">DeleteReportGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletereportgroupoutput"></a>
<a id="schema_DeleteReportGroupOutput"></a>
<a id="tocSdeletereportgroupoutput"></a>
<a id="tocsdeletereportgroupoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteReportGroupInput">DeleteReportGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletereportgroupinput"></a>
<a id="schema_DeleteReportGroupInput"></a>
<a id="tocSdeletereportgroupinput"></a>
<a id="tocsdeletereportgroupinput"></a>

```json
{
  "arn": {},
  "deleteReports": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|deleteReports|object|false|none|none|

<h2 id="tocS_DeleteResourcePolicyOutput">DeleteResourcePolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyoutput"></a>
<a id="schema_DeleteResourcePolicyOutput"></a>
<a id="tocSdeleteresourcepolicyoutput"></a>
<a id="tocsdeleteresourcepolicyoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteResourcePolicyInput">DeleteResourcePolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyinput"></a>
<a id="schema_DeleteResourcePolicyInput"></a>
<a id="tocSdeleteresourcepolicyinput"></a>
<a id="tocsdeleteresourcepolicyinput"></a>

```json
{
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|

<h2 id="tocS_DeleteSourceCredentialsOutput">DeleteSourceCredentialsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletesourcecredentialsoutput"></a>
<a id="schema_DeleteSourceCredentialsOutput"></a>
<a id="tocSdeletesourcecredentialsoutput"></a>
<a id="tocsdeletesourcecredentialsoutput"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|

<h2 id="tocS_DeleteSourceCredentialsInput">DeleteSourceCredentialsInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletesourcecredentialsinput"></a>
<a id="schema_DeleteSourceCredentialsInput"></a>
<a id="tocSdeletesourcecredentialsinput"></a>
<a id="tocsdeletesourcecredentialsinput"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_DeleteWebhookOutput">DeleteWebhookOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletewebhookoutput"></a>
<a id="schema_DeleteWebhookOutput"></a>
<a id="tocSdeletewebhookoutput"></a>
<a id="tocsdeletewebhookoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteWebhookInput">DeleteWebhookInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletewebhookinput"></a>
<a id="schema_DeleteWebhookInput"></a>
<a id="tocSdeletewebhookinput"></a>
<a id="tocsdeletewebhookinput"></a>

```json
{
  "projectName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectName|object|true|none|none|

<h2 id="tocS_DescribeCodeCoveragesOutput">DescribeCodeCoveragesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribecodecoveragesoutput"></a>
<a id="schema_DescribeCodeCoveragesOutput"></a>
<a id="tocSdescribecodecoveragesoutput"></a>
<a id="tocsdescribecodecoveragesoutput"></a>

```json
{
  "nextToken": {},
  "codeCoverages": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|codeCoverages|object|false|none|none|

<h2 id="tocS_DescribeCodeCoveragesInput">DescribeCodeCoveragesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribecodecoveragesinput"></a>
<a id="schema_DescribeCodeCoveragesInput"></a>
<a id="tocSdescribecodecoveragesinput"></a>
<a id="tocsdescribecodecoveragesinput"></a>

```json
{
  "reportArn": {},
  "nextToken": {},
  "maxResults": {},
  "sortOrder": {},
  "sortBy": {},
  "minLineCoveragePercentage": {},
  "maxLineCoveragePercentage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportArn|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|sortOrder|object|false|none|none|
|sortBy|object|false|none|none|
|minLineCoveragePercentage|object|false|none|none|
|maxLineCoveragePercentage|object|false|none|none|

<h2 id="tocS_DescribeTestCasesOutput">DescribeTestCasesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetestcasesoutput"></a>
<a id="schema_DescribeTestCasesOutput"></a>
<a id="tocSdescribetestcasesoutput"></a>
<a id="tocsdescribetestcasesoutput"></a>

```json
{
  "nextToken": {},
  "testCases": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|testCases|object|false|none|none|

<h2 id="tocS_DescribeTestCasesInput">DescribeTestCasesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetestcasesinput"></a>
<a id="schema_DescribeTestCasesInput"></a>
<a id="tocSdescribetestcasesinput"></a>
<a id="tocsdescribetestcasesinput"></a>

```json
{
  "reportArn": {},
  "nextToken": {},
  "maxResults": {},
  "filter": {
    "status": {},
    "keyword": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportArn|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|filter|object|false|none|none|

<h2 id="tocS_GetReportGroupTrendOutput">GetReportGroupTrendOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetreportgrouptrendoutput"></a>
<a id="schema_GetReportGroupTrendOutput"></a>
<a id="tocSgetreportgrouptrendoutput"></a>
<a id="tocsgetreportgrouptrendoutput"></a>

```json
{
  "stats": {
    "average": {},
    "max": {},
    "min": {}
  },
  "rawData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stats|object|false|none|none|
|rawData|object|false|none|none|

<h2 id="tocS_GetReportGroupTrendInput">GetReportGroupTrendInput</h2>
<!-- backwards compatibility -->
<a id="schemagetreportgrouptrendinput"></a>
<a id="schema_GetReportGroupTrendInput"></a>
<a id="tocSgetreportgrouptrendinput"></a>
<a id="tocsgetreportgrouptrendinput"></a>

```json
{
  "reportGroupArn": {},
  "numOfReports": {},
  "trendField": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportGroupArn|object|true|none|none|
|numOfReports|object|false|none|none|
|trendField|object|true|none|none|

<h2 id="tocS_GetResourcePolicyOutput">GetResourcePolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepolicyoutput"></a>
<a id="schema_GetResourcePolicyOutput"></a>
<a id="tocSgetresourcepolicyoutput"></a>
<a id="tocsgetresourcepolicyoutput"></a>

```json
{
  "policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|object|false|none|none|

<h2 id="tocS_GetResourcePolicyInput">GetResourcePolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepolicyinput"></a>
<a id="schema_GetResourcePolicyInput"></a>
<a id="tocSgetresourcepolicyinput"></a>
<a id="tocsgetresourcepolicyinput"></a>

```json
{
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|

<h2 id="tocS_ImportSourceCredentialsOutput">ImportSourceCredentialsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaimportsourcecredentialsoutput"></a>
<a id="schema_ImportSourceCredentialsOutput"></a>
<a id="tocSimportsourcecredentialsoutput"></a>
<a id="tocsimportsourcecredentialsoutput"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|

<h2 id="tocS_ImportSourceCredentialsInput">ImportSourceCredentialsInput</h2>
<!-- backwards compatibility -->
<a id="schemaimportsourcecredentialsinput"></a>
<a id="schema_ImportSourceCredentialsInput"></a>
<a id="tocSimportsourcecredentialsinput"></a>
<a id="tocsimportsourcecredentialsinput"></a>

```json
{
  "username": {},
  "token": {},
  "serverType": {},
  "authType": {},
  "shouldOverwrite": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|object|false|none|none|
|token|object|true|none|none|
|serverType|object|true|none|none|
|authType|object|true|none|none|
|shouldOverwrite|object|false|none|none|

<h2 id="tocS_InvalidateProjectCacheOutput">InvalidateProjectCacheOutput</h2>
<!-- backwards compatibility -->
<a id="schemainvalidateprojectcacheoutput"></a>
<a id="schema_InvalidateProjectCacheOutput"></a>
<a id="tocSinvalidateprojectcacheoutput"></a>
<a id="tocsinvalidateprojectcacheoutput"></a>

```json
{}
```

<h2 id="tocS_InvalidateProjectCacheInput">InvalidateProjectCacheInput</h2>
<!-- backwards compatibility -->
<a id="schemainvalidateprojectcacheinput"></a>
<a id="schema_InvalidateProjectCacheInput"></a>
<a id="tocSinvalidateprojectcacheinput"></a>
<a id="tocsinvalidateprojectcacheinput"></a>

```json
{
  "projectName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectName|object|true|none|none|

<h2 id="tocS_ListBuildBatchesOutput">ListBuildBatchesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbuildbatchesoutput"></a>
<a id="schema_ListBuildBatchesOutput"></a>
<a id="tocSlistbuildbatchesoutput"></a>
<a id="tocslistbuildbatchesoutput"></a>

```json
{
  "ids": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListBuildBatchesInput">ListBuildBatchesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistbuildbatchesinput"></a>
<a id="schema_ListBuildBatchesInput"></a>
<a id="tocSlistbuildbatchesinput"></a>
<a id="tocslistbuildbatchesinput"></a>

```json
{
  "filter": {
    "status": {}
  },
  "maxResults": {},
  "sortOrder": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|object|false|none|none|
|maxResults|object|false|none|none|
|sortOrder|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListBuildBatchesForProjectOutput">ListBuildBatchesForProjectOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbuildbatchesforprojectoutput"></a>
<a id="schema_ListBuildBatchesForProjectOutput"></a>
<a id="tocSlistbuildbatchesforprojectoutput"></a>
<a id="tocslistbuildbatchesforprojectoutput"></a>

```json
{
  "ids": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListBuildBatchesForProjectInput">ListBuildBatchesForProjectInput</h2>
<!-- backwards compatibility -->
<a id="schemalistbuildbatchesforprojectinput"></a>
<a id="schema_ListBuildBatchesForProjectInput"></a>
<a id="tocSlistbuildbatchesforprojectinput"></a>
<a id="tocslistbuildbatchesforprojectinput"></a>

```json
{
  "projectName": {},
  "filter": {
    "status": {}
  },
  "maxResults": {},
  "sortOrder": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectName|object|false|none|none|
|filter|object|false|none|none|
|maxResults|object|false|none|none|
|sortOrder|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListBuildsOutput">ListBuildsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbuildsoutput"></a>
<a id="schema_ListBuildsOutput"></a>
<a id="tocSlistbuildsoutput"></a>
<a id="tocslistbuildsoutput"></a>

```json
{
  "ids": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListBuildsInput">ListBuildsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistbuildsinput"></a>
<a id="schema_ListBuildsInput"></a>
<a id="tocSlistbuildsinput"></a>
<a id="tocslistbuildsinput"></a>

```json
{
  "sortOrder": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sortOrder|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListBuildsForProjectOutput">ListBuildsForProjectOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbuildsforprojectoutput"></a>
<a id="schema_ListBuildsForProjectOutput"></a>
<a id="tocSlistbuildsforprojectoutput"></a>
<a id="tocslistbuildsforprojectoutput"></a>

```json
{
  "ids": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListBuildsForProjectInput">ListBuildsForProjectInput</h2>
<!-- backwards compatibility -->
<a id="schemalistbuildsforprojectinput"></a>
<a id="schema_ListBuildsForProjectInput"></a>
<a id="tocSlistbuildsforprojectinput"></a>
<a id="tocslistbuildsforprojectinput"></a>

```json
{
  "projectName": {},
  "sortOrder": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectName|object|true|none|none|
|sortOrder|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListCuratedEnvironmentImagesOutput">ListCuratedEnvironmentImagesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistcuratedenvironmentimagesoutput"></a>
<a id="schema_ListCuratedEnvironmentImagesOutput"></a>
<a id="tocSlistcuratedenvironmentimagesoutput"></a>
<a id="tocslistcuratedenvironmentimagesoutput"></a>

```json
{
  "platforms": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|platforms|object|false|none|none|

<h2 id="tocS_ListCuratedEnvironmentImagesInput">ListCuratedEnvironmentImagesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistcuratedenvironmentimagesinput"></a>
<a id="schema_ListCuratedEnvironmentImagesInput"></a>
<a id="tocSlistcuratedenvironmentimagesinput"></a>
<a id="tocslistcuratedenvironmentimagesinput"></a>

```json
{}
```

<h2 id="tocS_ListProjectsOutput">ListProjectsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectsoutput"></a>
<a id="schema_ListProjectsOutput"></a>
<a id="tocSlistprojectsoutput"></a>
<a id="tocslistprojectsoutput"></a>

```json
{
  "nextToken": {},
  "projects": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|projects|object|false|none|none|

<h2 id="tocS_ListProjectsInput">ListProjectsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectsinput"></a>
<a id="schema_ListProjectsInput"></a>
<a id="tocSlistprojectsinput"></a>
<a id="tocslistprojectsinput"></a>

```json
{
  "sortBy": {},
  "sortOrder": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sortBy|object|false|none|none|
|sortOrder|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListReportGroupsOutput">ListReportGroupsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistreportgroupsoutput"></a>
<a id="schema_ListReportGroupsOutput"></a>
<a id="tocSlistreportgroupsoutput"></a>
<a id="tocslistreportgroupsoutput"></a>

```json
{
  "nextToken": {},
  "reportGroups": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|reportGroups|object|false|none|none|

<h2 id="tocS_ListReportGroupsInput">ListReportGroupsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistreportgroupsinput"></a>
<a id="schema_ListReportGroupsInput"></a>
<a id="tocSlistreportgroupsinput"></a>
<a id="tocslistreportgroupsinput"></a>

```json
{
  "sortOrder": {},
  "sortBy": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sortOrder|object|false|none|none|
|sortBy|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListReportsOutput">ListReportsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistreportsoutput"></a>
<a id="schema_ListReportsOutput"></a>
<a id="tocSlistreportsoutput"></a>
<a id="tocslistreportsoutput"></a>

```json
{
  "nextToken": {},
  "reports": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|reports|object|false|none|none|

<h2 id="tocS_ListReportsInput">ListReportsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistreportsinput"></a>
<a id="schema_ListReportsInput"></a>
<a id="tocSlistreportsinput"></a>
<a id="tocslistreportsinput"></a>

```json
{
  "sortOrder": {},
  "nextToken": {},
  "maxResults": {},
  "filter": {
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sortOrder|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|filter|object|false|none|none|

<h2 id="tocS_ListReportsForReportGroupOutput">ListReportsForReportGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistreportsforreportgroupoutput"></a>
<a id="schema_ListReportsForReportGroupOutput"></a>
<a id="tocSlistreportsforreportgroupoutput"></a>
<a id="tocslistreportsforreportgroupoutput"></a>

```json
{
  "nextToken": {},
  "reports": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|reports|object|false|none|none|

<h2 id="tocS_ListReportsForReportGroupInput">ListReportsForReportGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemalistreportsforreportgroupinput"></a>
<a id="schema_ListReportsForReportGroupInput"></a>
<a id="tocSlistreportsforreportgroupinput"></a>
<a id="tocslistreportsforreportgroupinput"></a>

```json
{
  "reportGroupArn": {},
  "nextToken": {},
  "sortOrder": {},
  "maxResults": {},
  "filter": {
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportGroupArn|object|true|none|none|
|nextToken|object|false|none|none|
|sortOrder|object|false|none|none|
|maxResults|object|false|none|none|
|filter|object|false|none|none|

<h2 id="tocS_ListSharedProjectsOutput">ListSharedProjectsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistsharedprojectsoutput"></a>
<a id="schema_ListSharedProjectsOutput"></a>
<a id="tocSlistsharedprojectsoutput"></a>
<a id="tocslistsharedprojectsoutput"></a>

```json
{
  "nextToken": {},
  "projects": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|projects|object|false|none|none|

<h2 id="tocS_ListSharedProjectsInput">ListSharedProjectsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistsharedprojectsinput"></a>
<a id="schema_ListSharedProjectsInput"></a>
<a id="tocSlistsharedprojectsinput"></a>
<a id="tocslistsharedprojectsinput"></a>

```json
{
  "sortBy": {},
  "sortOrder": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sortBy|object|false|none|none|
|sortOrder|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListSharedReportGroupsOutput">ListSharedReportGroupsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistsharedreportgroupsoutput"></a>
<a id="schema_ListSharedReportGroupsOutput"></a>
<a id="tocSlistsharedreportgroupsoutput"></a>
<a id="tocslistsharedreportgroupsoutput"></a>

```json
{
  "nextToken": {},
  "reportGroups": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|reportGroups|object|false|none|none|

<h2 id="tocS_ListSharedReportGroupsInput">ListSharedReportGroupsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistsharedreportgroupsinput"></a>
<a id="schema_ListSharedReportGroupsInput"></a>
<a id="tocSlistsharedreportgroupsinput"></a>
<a id="tocslistsharedreportgroupsinput"></a>

```json
{
  "sortOrder": {},
  "sortBy": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sortOrder|object|false|none|none|
|sortBy|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListSourceCredentialsOutput">ListSourceCredentialsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistsourcecredentialsoutput"></a>
<a id="schema_ListSourceCredentialsOutput"></a>
<a id="tocSlistsourcecredentialsoutput"></a>
<a id="tocslistsourcecredentialsoutput"></a>

```json
{
  "sourceCredentialsInfos": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceCredentialsInfos|object|false|none|none|

<h2 id="tocS_ListSourceCredentialsInput">ListSourceCredentialsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistsourcecredentialsinput"></a>
<a id="schema_ListSourceCredentialsInput"></a>
<a id="tocSlistsourcecredentialsinput"></a>
<a id="tocslistsourcecredentialsinput"></a>

```json
{}
```

<h2 id="tocS_PutResourcePolicyOutput">PutResourcePolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyoutput"></a>
<a id="schema_PutResourcePolicyOutput"></a>
<a id="tocSputresourcepolicyoutput"></a>
<a id="tocsputresourcepolicyoutput"></a>

```json
{
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|false|none|none|

<h2 id="tocS_PutResourcePolicyInput">PutResourcePolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyinput"></a>
<a id="schema_PutResourcePolicyInput"></a>
<a id="tocSputresourcepolicyinput"></a>
<a id="tocsputresourcepolicyinput"></a>

```json
{
  "policy": {},
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|object|true|none|none|
|resourceArn|object|true|none|none|

<h2 id="tocS_RetryBuildOutput">RetryBuildOutput</h2>
<!-- backwards compatibility -->
<a id="schemaretrybuildoutput"></a>
<a id="schema_RetryBuildOutput"></a>
<a id="tocSretrybuildoutput"></a>
<a id="tocsretrybuildoutput"></a>

```json
{
  "build": {
    "id": {},
    "arn": {},
    "buildNumber": {},
    "startTime": {},
    "endTime": {},
    "currentPhase": {},
    "buildStatus": {},
    "sourceVersion": {},
    "resolvedSourceVersion": {},
    "projectName": {},
    "phases": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "location": {},
      "sha256sum": {},
      "md5sum": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "logs": {
      "groupName": {},
      "streamName": {},
      "deepLink": {},
      "s3DeepLink": {},
      "cloudWatchLogsArn": {},
      "s3LogsArn": {},
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "timeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "buildComplete": {},
    "initiator": {},
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "networkInterface": {
      "subnetId": {},
      "networkInterfaceId": {}
    },
    "encryptionKey": {},
    "exportedEnvironmentVariables": {},
    "reportArns": {},
    "fileSystemLocations": {},
    "debugSession": {
      "sessionEnabled": {},
      "sessionTarget": {}
    },
    "buildBatchArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build|[Build](#schemabuild)|false|none|Information about a build.|

<h2 id="tocS_RetryBuildInput">RetryBuildInput</h2>
<!-- backwards compatibility -->
<a id="schemaretrybuildinput"></a>
<a id="schema_RetryBuildInput"></a>
<a id="tocSretrybuildinput"></a>
<a id="tocsretrybuildinput"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|

<h2 id="tocS_RetryBuildBatchOutput">RetryBuildBatchOutput</h2>
<!-- backwards compatibility -->
<a id="schemaretrybuildbatchoutput"></a>
<a id="schema_RetryBuildBatchOutput"></a>
<a id="tocSretrybuildbatchoutput"></a>
<a id="tocsretrybuildbatchoutput"></a>

```json
{
  "buildBatch": {
    "id": {},
    "arn": {},
    "startTime": {},
    "endTime": {},
    "currentPhase": {},
    "buildBatchStatus": {},
    "sourceVersion": {},
    "resolvedSourceVersion": {},
    "projectName": {},
    "phases": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "location": {},
      "sha256sum": {},
      "md5sum": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "logConfig": {
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "buildTimeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "complete": {},
    "initiator": {},
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "encryptionKey": {},
    "buildBatchNumber": {},
    "fileSystemLocations": {},
    "buildBatchConfig": {
      "serviceRole": {},
      "combineArtifacts": {},
      "restrictions": {
        "maximumBuildsAllowed": {},
        "computeTypesAllowed": {}
      },
      "timeoutInMins": {},
      "batchReportMode": {}
    },
    "buildGroups": {},
    "debugSessionEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildBatch|[BuildBatch](#schemabuildbatch)|false|none|Contains information about a batch build.|

<h2 id="tocS_RetryBuildBatchInput">RetryBuildBatchInput</h2>
<!-- backwards compatibility -->
<a id="schemaretrybuildbatchinput"></a>
<a id="schema_RetryBuildBatchInput"></a>
<a id="tocSretrybuildbatchinput"></a>
<a id="tocsretrybuildbatchinput"></a>

```json
{
  "id": {},
  "retryType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|retryType|object|false|none|none|

<h2 id="tocS_StartBuildOutput">StartBuildOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartbuildoutput"></a>
<a id="schema_StartBuildOutput"></a>
<a id="tocSstartbuildoutput"></a>
<a id="tocsstartbuildoutput"></a>

```json
{
  "build": {
    "id": {},
    "arn": {},
    "buildNumber": {},
    "startTime": {},
    "endTime": {},
    "currentPhase": {},
    "buildStatus": {},
    "sourceVersion": {},
    "resolvedSourceVersion": {},
    "projectName": {},
    "phases": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "location": {},
      "sha256sum": {},
      "md5sum": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "logs": {
      "groupName": {},
      "streamName": {},
      "deepLink": {},
      "s3DeepLink": {},
      "cloudWatchLogsArn": {},
      "s3LogsArn": {},
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "timeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "buildComplete": {},
    "initiator": {},
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "networkInterface": {
      "subnetId": {},
      "networkInterfaceId": {}
    },
    "encryptionKey": {},
    "exportedEnvironmentVariables": {},
    "reportArns": {},
    "fileSystemLocations": {},
    "debugSession": {
      "sessionEnabled": {},
      "sessionTarget": {}
    },
    "buildBatchArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build|object|false|none|none|

<h2 id="tocS_StartBuildInput">StartBuildInput</h2>
<!-- backwards compatibility -->
<a id="schemastartbuildinput"></a>
<a id="schema_StartBuildInput"></a>
<a id="tocSstartbuildinput"></a>
<a id="tocsstartbuildinput"></a>

```json
{
  "projectName": {},
  "secondarySourcesOverride": {},
  "secondarySourcesVersionOverride": {},
  "sourceVersion": {},
  "artifactsOverride": {
    "type": {},
    "location": {},
    "path": {},
    "namespaceType": {},
    "name": {},
    "packaging": {},
    "overrideArtifactName": {},
    "encryptionDisabled": {},
    "artifactIdentifier": {},
    "bucketOwnerAccess": "NONE"
  },
  "secondaryArtifactsOverride": {},
  "environmentVariablesOverride": {},
  "sourceTypeOverride": {},
  "sourceLocationOverride": {},
  "sourceAuthOverride": {
    "type": {},
    "resource": {}
  },
  "gitCloneDepthOverride": {},
  "gitSubmodulesConfigOverride": {
    "fetchSubmodules": {}
  },
  "buildspecOverride": {},
  "insecureSslOverride": {},
  "reportBuildStatusOverride": {},
  "buildStatusConfigOverride": {
    "context": {},
    "targetUrl": {}
  },
  "environmentTypeOverride": {},
  "imageOverride": {},
  "computeTypeOverride": {},
  "certificateOverride": {},
  "cacheOverride": {
    "type": {},
    "location": {},
    "modes": {}
  },
  "serviceRoleOverride": {},
  "privilegedModeOverride": {},
  "timeoutInMinutesOverride": {},
  "queuedTimeoutInMinutesOverride": {},
  "encryptionKeyOverride": {},
  "logsConfigOverride": {
    "cloudWatchLogs": {
      "status": {},
      "groupName": {},
      "streamName": {}
    },
    "s3Logs": {
      "status": {},
      "location": {},
      "encryptionDisabled": {},
      "bucketOwnerAccess": "NONE"
    }
  },
  "registryCredentialOverride": {
    "credential": {},
    "credentialProvider": {}
  },
  "imagePullCredentialsTypeOverride": {},
  "debugSessionEnabled": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectName|object|true|none|none|
|secondarySourcesOverride|object|false|none|none|
|secondarySourcesVersionOverride|object|false|none|none|
|sourceVersion|object|false|none|none|
|artifactsOverride|object|false|none|none|
|secondaryArtifactsOverride|object|false|none|none|
|environmentVariablesOverride|object|false|none|none|
|sourceTypeOverride|object|false|none|none|
|sourceLocationOverride|object|false|none|none|
|sourceAuthOverride|object|false|none|none|
|gitCloneDepthOverride|object|false|none|none|
|gitSubmodulesConfigOverride|object|false|none|none|
|buildspecOverride|object|false|none|none|
|insecureSslOverride|object|false|none|none|
|reportBuildStatusOverride|object|false|none|none|
|buildStatusConfigOverride|object|false|none|none|
|environmentTypeOverride|object|false|none|none|
|imageOverride|object|false|none|none|
|computeTypeOverride|object|false|none|none|
|certificateOverride|object|false|none|none|
|cacheOverride|object|false|none|none|
|serviceRoleOverride|object|false|none|none|
|privilegedModeOverride|object|false|none|none|
|timeoutInMinutesOverride|object|false|none|none|
|queuedTimeoutInMinutesOverride|object|false|none|none|
|encryptionKeyOverride|object|false|none|none|
|logsConfigOverride|object|false|none|none|
|registryCredentialOverride|object|false|none|none|
|imagePullCredentialsTypeOverride|object|false|none|none|
|debugSessionEnabled|object|false|none|none|

<h2 id="tocS_StartBuildBatchOutput">StartBuildBatchOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartbuildbatchoutput"></a>
<a id="schema_StartBuildBatchOutput"></a>
<a id="tocSstartbuildbatchoutput"></a>
<a id="tocsstartbuildbatchoutput"></a>

```json
{
  "buildBatch": {
    "id": {},
    "arn": {},
    "startTime": {},
    "endTime": {},
    "currentPhase": {},
    "buildBatchStatus": {},
    "sourceVersion": {},
    "resolvedSourceVersion": {},
    "projectName": {},
    "phases": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "location": {},
      "sha256sum": {},
      "md5sum": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "logConfig": {
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "buildTimeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "complete": {},
    "initiator": {},
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "encryptionKey": {},
    "buildBatchNumber": {},
    "fileSystemLocations": {},
    "buildBatchConfig": {
      "serviceRole": {},
      "combineArtifacts": {},
      "restrictions": {
        "maximumBuildsAllowed": {},
        "computeTypesAllowed": {}
      },
      "timeoutInMins": {},
      "batchReportMode": {}
    },
    "buildGroups": {},
    "debugSessionEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildBatch|object|false|none|none|

<h2 id="tocS_StartBuildBatchInput">StartBuildBatchInput</h2>
<!-- backwards compatibility -->
<a id="schemastartbuildbatchinput"></a>
<a id="schema_StartBuildBatchInput"></a>
<a id="tocSstartbuildbatchinput"></a>
<a id="tocsstartbuildbatchinput"></a>

```json
{
  "projectName": {},
  "secondarySourcesOverride": {},
  "secondarySourcesVersionOverride": {},
  "sourceVersion": {},
  "artifactsOverride": {
    "type": {},
    "location": {},
    "path": {},
    "namespaceType": {},
    "name": {},
    "packaging": {},
    "overrideArtifactName": {},
    "encryptionDisabled": {},
    "artifactIdentifier": {},
    "bucketOwnerAccess": "NONE"
  },
  "secondaryArtifactsOverride": {},
  "environmentVariablesOverride": {},
  "sourceTypeOverride": {},
  "sourceLocationOverride": {},
  "sourceAuthOverride": {
    "type": {},
    "resource": {}
  },
  "gitCloneDepthOverride": {},
  "gitSubmodulesConfigOverride": {
    "fetchSubmodules": {}
  },
  "buildspecOverride": {},
  "insecureSslOverride": {},
  "reportBuildBatchStatusOverride": {},
  "environmentTypeOverride": {},
  "imageOverride": {},
  "computeTypeOverride": {},
  "certificateOverride": {},
  "cacheOverride": {
    "type": {},
    "location": {},
    "modes": {}
  },
  "serviceRoleOverride": {},
  "privilegedModeOverride": {},
  "buildTimeoutInMinutesOverride": {},
  "queuedTimeoutInMinutesOverride": {},
  "encryptionKeyOverride": {},
  "logsConfigOverride": {
    "cloudWatchLogs": {
      "status": {},
      "groupName": {},
      "streamName": {}
    },
    "s3Logs": {
      "status": {},
      "location": {},
      "encryptionDisabled": {},
      "bucketOwnerAccess": "NONE"
    }
  },
  "registryCredentialOverride": {
    "credential": {},
    "credentialProvider": {}
  },
  "imagePullCredentialsTypeOverride": {},
  "buildBatchConfigOverride": {
    "serviceRole": {},
    "combineArtifacts": {},
    "restrictions": {
      "maximumBuildsAllowed": {},
      "computeTypesAllowed": {}
    },
    "timeoutInMins": {},
    "batchReportMode": {}
  },
  "debugSessionEnabled": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectName|object|true|none|none|
|secondarySourcesOverride|object|false|none|none|
|secondarySourcesVersionOverride|object|false|none|none|
|sourceVersion|object|false|none|none|
|artifactsOverride|object|false|none|none|
|secondaryArtifactsOverride|object|false|none|none|
|environmentVariablesOverride|object|false|none|none|
|sourceTypeOverride|object|false|none|none|
|sourceLocationOverride|object|false|none|none|
|sourceAuthOverride|object|false|none|none|
|gitCloneDepthOverride|object|false|none|none|
|gitSubmodulesConfigOverride|object|false|none|none|
|buildspecOverride|object|false|none|none|
|insecureSslOverride|object|false|none|none|
|reportBuildBatchStatusOverride|object|false|none|none|
|environmentTypeOverride|object|false|none|none|
|imageOverride|object|false|none|none|
|computeTypeOverride|object|false|none|none|
|certificateOverride|object|false|none|none|
|cacheOverride|object|false|none|none|
|serviceRoleOverride|object|false|none|none|
|privilegedModeOverride|object|false|none|none|
|buildTimeoutInMinutesOverride|object|false|none|none|
|queuedTimeoutInMinutesOverride|object|false|none|none|
|encryptionKeyOverride|object|false|none|none|
|logsConfigOverride|object|false|none|none|
|registryCredentialOverride|object|false|none|none|
|imagePullCredentialsTypeOverride|object|false|none|none|
|buildBatchConfigOverride|object|false|none|none|
|debugSessionEnabled|object|false|none|none|

<h2 id="tocS_StopBuildOutput">StopBuildOutput</h2>
<!-- backwards compatibility -->
<a id="schemastopbuildoutput"></a>
<a id="schema_StopBuildOutput"></a>
<a id="tocSstopbuildoutput"></a>
<a id="tocsstopbuildoutput"></a>

```json
{
  "build": {
    "id": {},
    "arn": {},
    "buildNumber": {},
    "startTime": {},
    "endTime": {},
    "currentPhase": {},
    "buildStatus": {},
    "sourceVersion": {},
    "resolvedSourceVersion": {},
    "projectName": {},
    "phases": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "location": {},
      "sha256sum": {},
      "md5sum": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "logs": {
      "groupName": {},
      "streamName": {},
      "deepLink": {},
      "s3DeepLink": {},
      "cloudWatchLogsArn": {},
      "s3LogsArn": {},
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "timeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "buildComplete": {},
    "initiator": {},
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "networkInterface": {
      "subnetId": {},
      "networkInterfaceId": {}
    },
    "encryptionKey": {},
    "exportedEnvironmentVariables": {},
    "reportArns": {},
    "fileSystemLocations": {},
    "debugSession": {
      "sessionEnabled": {},
      "sessionTarget": {}
    },
    "buildBatchArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build|object|false|none|none|

<h2 id="tocS_StopBuildInput">StopBuildInput</h2>
<!-- backwards compatibility -->
<a id="schemastopbuildinput"></a>
<a id="schema_StopBuildInput"></a>
<a id="tocSstopbuildinput"></a>
<a id="tocsstopbuildinput"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_StopBuildBatchOutput">StopBuildBatchOutput</h2>
<!-- backwards compatibility -->
<a id="schemastopbuildbatchoutput"></a>
<a id="schema_StopBuildBatchOutput"></a>
<a id="tocSstopbuildbatchoutput"></a>
<a id="tocsstopbuildbatchoutput"></a>

```json
{
  "buildBatch": {
    "id": {},
    "arn": {},
    "startTime": {},
    "endTime": {},
    "currentPhase": {},
    "buildBatchStatus": {},
    "sourceVersion": {},
    "resolvedSourceVersion": {},
    "projectName": {},
    "phases": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "location": {},
      "sha256sum": {},
      "md5sum": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "logConfig": {
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "buildTimeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "complete": {},
    "initiator": {},
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "encryptionKey": {},
    "buildBatchNumber": {},
    "fileSystemLocations": {},
    "buildBatchConfig": {
      "serviceRole": {},
      "combineArtifacts": {},
      "restrictions": {
        "maximumBuildsAllowed": {},
        "computeTypesAllowed": {}
      },
      "timeoutInMins": {},
      "batchReportMode": {}
    },
    "buildGroups": {},
    "debugSessionEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildBatch|[BuildBatch](#schemabuildbatch)|false|none|Contains information about a batch build.|

<h2 id="tocS_StopBuildBatchInput">StopBuildBatchInput</h2>
<!-- backwards compatibility -->
<a id="schemastopbuildbatchinput"></a>
<a id="schema_StopBuildBatchInput"></a>
<a id="tocSstopbuildbatchinput"></a>
<a id="tocsstopbuildbatchinput"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_UpdateProjectOutput">UpdateProjectOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectoutput"></a>
<a id="schema_UpdateProjectOutput"></a>
<a id="tocSupdateprojectoutput"></a>
<a id="tocsupdateprojectoutput"></a>

```json
{
  "project": {
    "name": {},
    "arn": {},
    "description": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "sourceVersion": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "type": {},
      "location": {},
      "path": {},
      "namespaceType": {},
      "name": {},
      "packaging": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "timeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "encryptionKey": {},
    "tags": {},
    "created": {},
    "lastModified": {},
    "webhook": {
      "url": {},
      "payloadUrl": {},
      "secret": {},
      "branchFilter": {},
      "filterGroups": {},
      "buildType": {},
      "lastModifiedSecret": {}
    },
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "badge": {
      "badgeEnabled": {},
      "badgeRequestUrl": {}
    },
    "logsConfig": {
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "fileSystemLocations": {},
    "buildBatchConfig": {
      "serviceRole": {},
      "combineArtifacts": {},
      "restrictions": {
        "maximumBuildsAllowed": {},
        "computeTypesAllowed": {}
      },
      "timeoutInMins": {},
      "batchReportMode": {}
    },
    "concurrentBuildLimit": {},
    "projectVisibility": "PUBLIC_READ",
    "publicProjectAlias": {},
    "resourceAccessRole": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|object|false|none|none|

<h2 id="tocS_UpdateProjectInput">UpdateProjectInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectinput"></a>
<a id="schema_UpdateProjectInput"></a>
<a id="tocSupdateprojectinput"></a>
<a id="tocsupdateprojectinput"></a>

```json
{
  "name": {},
  "description": {},
  "source": {
    "type": {},
    "location": {},
    "gitCloneDepth": {},
    "gitSubmodulesConfig": {
      "fetchSubmodules": {}
    },
    "buildspec": {},
    "auth": {
      "type": {},
      "resource": {}
    },
    "reportBuildStatus": {},
    "buildStatusConfig": {
      "context": {},
      "targetUrl": {}
    },
    "insecureSsl": {},
    "sourceIdentifier": {}
  },
  "secondarySources": {},
  "sourceVersion": {},
  "secondarySourceVersions": {},
  "artifacts": {
    "type": {},
    "location": {},
    "path": {},
    "namespaceType": {},
    "name": {},
    "packaging": {},
    "overrideArtifactName": {},
    "encryptionDisabled": {},
    "artifactIdentifier": {},
    "bucketOwnerAccess": "NONE"
  },
  "secondaryArtifacts": {},
  "cache": {
    "type": {},
    "location": {},
    "modes": {}
  },
  "environment": {
    "type": {},
    "image": {},
    "computeType": {},
    "environmentVariables": {},
    "privilegedMode": {},
    "certificate": {},
    "registryCredential": {
      "credential": {},
      "credentialProvider": {}
    },
    "imagePullCredentialsType": {}
  },
  "serviceRole": {},
  "timeoutInMinutes": {},
  "queuedTimeoutInMinutes": {},
  "encryptionKey": {},
  "tags": {},
  "vpcConfig": {
    "vpcId": {},
    "subnets": {},
    "securityGroupIds": {}
  },
  "badgeEnabled": {},
  "logsConfig": {
    "cloudWatchLogs": {
      "status": {},
      "groupName": {},
      "streamName": {}
    },
    "s3Logs": {
      "status": {},
      "location": {},
      "encryptionDisabled": {},
      "bucketOwnerAccess": "NONE"
    }
  },
  "fileSystemLocations": {},
  "buildBatchConfig": {
    "serviceRole": {},
    "combineArtifacts": {},
    "restrictions": {
      "maximumBuildsAllowed": {},
      "computeTypesAllowed": {}
    },
    "timeoutInMins": {},
    "batchReportMode": {}
  },
  "concurrentBuildLimit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|source|object|false|none|none|
|secondarySources|object|false|none|none|
|sourceVersion|object|false|none|none|
|secondarySourceVersions|object|false|none|none|
|artifacts|object|false|none|none|
|secondaryArtifacts|object|false|none|none|
|cache|object|false|none|none|
|environment|object|false|none|none|
|serviceRole|object|false|none|none|
|timeoutInMinutes|object|false|none|none|
|queuedTimeoutInMinutes|object|false|none|none|
|encryptionKey|object|false|none|none|
|tags|object|false|none|none|
|vpcConfig|object|false|none|none|
|badgeEnabled|object|false|none|none|
|logsConfig|object|false|none|none|
|fileSystemLocations|object|false|none|none|
|buildBatchConfig|[ProjectBuildBatchConfig](#schemaprojectbuildbatchconfig)|false|none|Contains configuration information about a batch build project.|
|concurrentBuildLimit|object|false|none|none|

<h2 id="tocS_UpdateProjectVisibilityOutput">UpdateProjectVisibilityOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectvisibilityoutput"></a>
<a id="schema_UpdateProjectVisibilityOutput"></a>
<a id="tocSupdateprojectvisibilityoutput"></a>
<a id="tocsupdateprojectvisibilityoutput"></a>

```json
{
  "projectArn": {},
  "publicProjectAlias": {},
  "projectVisibility": "PUBLIC_READ"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectArn|object|false|none|none|
|publicProjectAlias|object|false|none|none|
|projectVisibility|[ProjectVisibilityType](#schemaprojectvisibilitytype)|false|none|<p>Specifies the visibility of the project's builds. Possible values are:</p> <dl> <dt>PUBLIC_READ</dt> <dd> <p>The project builds are visible to the public.</p> </dd> <dt>PRIVATE</dt> <dd> <p>The project builds are not visible to the public.</p> </dd> </dl>|

#### Enumerated Values

|Property|Value|
|---|---|
|projectVisibility|PUBLIC_READ|
|projectVisibility|PRIVATE|

<h2 id="tocS_UpdateProjectVisibilityInput">UpdateProjectVisibilityInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectvisibilityinput"></a>
<a id="schema_UpdateProjectVisibilityInput"></a>
<a id="tocSupdateprojectvisibilityinput"></a>
<a id="tocsupdateprojectvisibilityinput"></a>

```json
{
  "projectArn": {},
  "projectVisibility": "PUBLIC_READ",
  "resourceAccessRole": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectArn|object|true|none|none|
|projectVisibility|[ProjectVisibilityType](#schemaprojectvisibilitytype)|true|none|<p>Specifies the visibility of the project's builds. Possible values are:</p> <dl> <dt>PUBLIC_READ</dt> <dd> <p>The project builds are visible to the public.</p> </dd> <dt>PRIVATE</dt> <dd> <p>The project builds are not visible to the public.</p> </dd> </dl>|
|resourceAccessRole|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|projectVisibility|PUBLIC_READ|
|projectVisibility|PRIVATE|

<h2 id="tocS_UpdateReportGroupOutput">UpdateReportGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereportgroupoutput"></a>
<a id="schema_UpdateReportGroupOutput"></a>
<a id="tocSupdatereportgroupoutput"></a>
<a id="tocsupdatereportgroupoutput"></a>

```json
{
  "reportGroup": {
    "arn": {},
    "name": {},
    "type": {},
    "exportConfig": {
      "exportConfigType": {},
      "s3Destination": {
        "bucket": {},
        "bucketOwner": {},
        "path": {},
        "packaging": {},
        "encryptionKey": {},
        "encryptionDisabled": {}
      }
    },
    "created": {},
    "lastModified": {},
    "tags": {},
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportGroup|object|false|none|none|

<h2 id="tocS_UpdateReportGroupInput">UpdateReportGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereportgroupinput"></a>
<a id="schema_UpdateReportGroupInput"></a>
<a id="tocSupdatereportgroupinput"></a>
<a id="tocsupdatereportgroupinput"></a>

```json
{
  "arn": {},
  "exportConfig": {
    "exportConfigType": {},
    "s3Destination": {
      "bucket": {},
      "bucketOwner": {},
      "path": {},
      "packaging": {},
      "encryptionKey": {},
      "encryptionDisabled": {}
    }
  },
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|exportConfig|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_UpdateWebhookOutput">UpdateWebhookOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewebhookoutput"></a>
<a id="schema_UpdateWebhookOutput"></a>
<a id="tocSupdatewebhookoutput"></a>
<a id="tocsupdatewebhookoutput"></a>

```json
{
  "webhook": {
    "url": {},
    "payloadUrl": {},
    "secret": {},
    "branchFilter": {},
    "filterGroups": {},
    "buildType": {},
    "lastModifiedSecret": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook|object|false|none|none|

<h2 id="tocS_UpdateWebhookInput">UpdateWebhookInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewebhookinput"></a>
<a id="schema_UpdateWebhookInput"></a>
<a id="tocSupdatewebhookinput"></a>
<a id="tocsupdatewebhookinput"></a>

```json
{
  "projectName": {},
  "branchFilter": {},
  "rotateSecret": {},
  "filterGroups": {},
  "buildType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectName|object|true|none|none|
|branchFilter|object|false|none|none|
|rotateSecret|object|false|none|none|
|filterGroups|object|false|none|none|
|buildType|object|false|none|none|

<h2 id="tocS_ArtifactNamespace">ArtifactNamespace</h2>
<!-- backwards compatibility -->
<a id="schemaartifactnamespace"></a>
<a id="schema_ArtifactNamespace"></a>
<a id="tocSartifactnamespace"></a>
<a id="tocsartifactnamespace"></a>

```json
"NONE"
```

<h2 id="tocS_ArtifactPackaging">ArtifactPackaging</h2>
<!-- backwards compatibility -->
<a id="schemaartifactpackaging"></a>
<a id="schema_ArtifactPackaging"></a>
<a id="tocSartifactpackaging"></a>
<a id="tocsartifactpackaging"></a>

```json
"NONE"
```

<h2 id="tocS_ArtifactsType">ArtifactsType</h2>
<!-- backwards compatibility -->
<a id="schemaartifactstype"></a>
<a id="schema_ArtifactsType"></a>
<a id="tocSartifactstype"></a>
<a id="tocsartifactstype"></a>

```json
"CODEPIPELINE"
```

<h2 id="tocS_AuthType">AuthType</h2>
<!-- backwards compatibility -->
<a id="schemaauthtype"></a>
<a id="schema_AuthType"></a>
<a id="tocSauthtype"></a>
<a id="tocsauthtype"></a>

```json
"OAUTH"
```

<h2 id="tocS_BuildIds">BuildIds</h2>
<!-- backwards compatibility -->
<a id="schemabuildids"></a>
<a id="schema_BuildIds"></a>
<a id="tocSbuildids"></a>
<a id="tocsbuildids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BuildsNotDeleted">BuildsNotDeleted</h2>
<!-- backwards compatibility -->
<a id="schemabuildsnotdeleted"></a>
<a id="schema_BuildsNotDeleted"></a>
<a id="tocSbuildsnotdeleted"></a>
<a id="tocsbuildsnotdeleted"></a>

```json
[
  {
    "id": {},
    "statusCode": {}
  }
]
```

<h2 id="tocS_BuildBatchIds">BuildBatchIds</h2>
<!-- backwards compatibility -->
<a id="schemabuildbatchids"></a>
<a id="schema_BuildBatchIds"></a>
<a id="tocSbuildbatchids"></a>
<a id="tocsbuildbatchids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BuildBatches">BuildBatches</h2>
<!-- backwards compatibility -->
<a id="schemabuildbatches"></a>
<a id="schema_BuildBatches"></a>
<a id="tocSbuildbatches"></a>
<a id="tocsbuildbatches"></a>

```json
[
  {
    "id": {},
    "arn": {},
    "startTime": {},
    "endTime": {},
    "currentPhase": {},
    "buildBatchStatus": {},
    "sourceVersion": {},
    "resolvedSourceVersion": {},
    "projectName": {},
    "phases": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "location": {},
      "sha256sum": {},
      "md5sum": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "logConfig": {
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "buildTimeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "complete": {},
    "initiator": {},
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "encryptionKey": {},
    "buildBatchNumber": {},
    "fileSystemLocations": {},
    "buildBatchConfig": {
      "serviceRole": {},
      "combineArtifacts": {},
      "restrictions": {
        "maximumBuildsAllowed": {},
        "computeTypesAllowed": {}
      },
      "timeoutInMins": {},
      "batchReportMode": {}
    },
    "buildGroups": {},
    "debugSessionEnabled": {}
  }
]
```

<h2 id="tocS_Builds">Builds</h2>
<!-- backwards compatibility -->
<a id="schemabuilds"></a>
<a id="schema_Builds"></a>
<a id="tocSbuilds"></a>
<a id="tocsbuilds"></a>

```json
[
  {
    "id": {},
    "arn": {},
    "buildNumber": {},
    "startTime": {},
    "endTime": {},
    "currentPhase": {},
    "buildStatus": {},
    "sourceVersion": {},
    "resolvedSourceVersion": {},
    "projectName": {},
    "phases": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "location": {},
      "sha256sum": {},
      "md5sum": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "logs": {
      "groupName": {},
      "streamName": {},
      "deepLink": {},
      "s3DeepLink": {},
      "cloudWatchLogsArn": {},
      "s3LogsArn": {},
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "timeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "buildComplete": {},
    "initiator": {},
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "networkInterface": {
      "subnetId": {},
      "networkInterfaceId": {}
    },
    "encryptionKey": {},
    "exportedEnvironmentVariables": {},
    "reportArns": {},
    "fileSystemLocations": {},
    "debugSession": {
      "sessionEnabled": {},
      "sessionTarget": {}
    },
    "buildBatchArn": {}
  }
]
```

<h2 id="tocS_ProjectNames">ProjectNames</h2>
<!-- backwards compatibility -->
<a id="schemaprojectnames"></a>
<a id="schema_ProjectNames"></a>
<a id="tocSprojectnames"></a>
<a id="tocsprojectnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Projects">Projects</h2>
<!-- backwards compatibility -->
<a id="schemaprojects"></a>
<a id="schema_Projects"></a>
<a id="tocSprojects"></a>
<a id="tocsprojects"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "description": {},
    "source": {
      "type": {},
      "location": {},
      "gitCloneDepth": {},
      "gitSubmodulesConfig": {
        "fetchSubmodules": {}
      },
      "buildspec": {},
      "auth": {
        "type": {},
        "resource": {}
      },
      "reportBuildStatus": {},
      "buildStatusConfig": {
        "context": {},
        "targetUrl": {}
      },
      "insecureSsl": {},
      "sourceIdentifier": {}
    },
    "secondarySources": {},
    "sourceVersion": {},
    "secondarySourceVersions": {},
    "artifacts": {
      "type": {},
      "location": {},
      "path": {},
      "namespaceType": {},
      "name": {},
      "packaging": {},
      "overrideArtifactName": {},
      "encryptionDisabled": {},
      "artifactIdentifier": {},
      "bucketOwnerAccess": "NONE"
    },
    "secondaryArtifacts": {},
    "cache": {
      "type": {},
      "location": {},
      "modes": {}
    },
    "environment": {
      "type": {},
      "image": {},
      "computeType": {},
      "environmentVariables": {},
      "privilegedMode": {},
      "certificate": {},
      "registryCredential": {
        "credential": {},
        "credentialProvider": {}
      },
      "imagePullCredentialsType": {}
    },
    "serviceRole": {},
    "timeoutInMinutes": {},
    "queuedTimeoutInMinutes": {},
    "encryptionKey": {},
    "tags": {},
    "created": {},
    "lastModified": {},
    "webhook": {
      "url": {},
      "payloadUrl": {},
      "secret": {},
      "branchFilter": {},
      "filterGroups": {},
      "buildType": {},
      "lastModifiedSecret": {}
    },
    "vpcConfig": {
      "vpcId": {},
      "subnets": {},
      "securityGroupIds": {}
    },
    "badge": {
      "badgeEnabled": {},
      "badgeRequestUrl": {}
    },
    "logsConfig": {
      "cloudWatchLogs": {
        "status": {},
        "groupName": {},
        "streamName": {}
      },
      "s3Logs": {
        "status": {},
        "location": {},
        "encryptionDisabled": {},
        "bucketOwnerAccess": "NONE"
      }
    },
    "fileSystemLocations": {},
    "buildBatchConfig": {
      "serviceRole": {},
      "combineArtifacts": {},
      "restrictions": {
        "maximumBuildsAllowed": {},
        "computeTypesAllowed": {}
      },
      "timeoutInMins": {},
      "batchReportMode": {}
    },
    "concurrentBuildLimit": {},
    "projectVisibility": "PUBLIC_READ",
    "publicProjectAlias": {},
    "resourceAccessRole": {}
  }
]
```

<h2 id="tocS_ReportGroupArns">ReportGroupArns</h2>
<!-- backwards compatibility -->
<a id="schemareportgrouparns"></a>
<a id="schema_ReportGroupArns"></a>
<a id="tocSreportgrouparns"></a>
<a id="tocsreportgrouparns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ReportGroups">ReportGroups</h2>
<!-- backwards compatibility -->
<a id="schemareportgroups"></a>
<a id="schema_ReportGroups"></a>
<a id="tocSreportgroups"></a>
<a id="tocsreportgroups"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "type": {},
    "exportConfig": {
      "exportConfigType": {},
      "s3Destination": {
        "bucket": {},
        "bucketOwner": {},
        "path": {},
        "packaging": {},
        "encryptionKey": {},
        "encryptionDisabled": {}
      }
    },
    "created": {},
    "lastModified": {},
    "tags": {},
    "status": {}
  }
]
```

<h2 id="tocS_ReportArns">ReportArns</h2>
<!-- backwards compatibility -->
<a id="schemareportarns"></a>
<a id="schema_ReportArns"></a>
<a id="tocSreportarns"></a>
<a id="tocsreportarns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Reports">Reports</h2>
<!-- backwards compatibility -->
<a id="schemareports"></a>
<a id="schema_Reports"></a>
<a id="tocSreports"></a>
<a id="tocsreports"></a>

```json
[
  {
    "arn": {},
    "type": {},
    "name": {},
    "reportGroupArn": {},
    "executionId": {},
    "status": {},
    "created": {},
    "expired": {},
    "exportConfig": {
      "exportConfigType": {},
      "s3Destination": {
        "bucket": {},
        "bucketOwner": {},
        "path": {},
        "packaging": {},
        "encryptionKey": {},
        "encryptionDisabled": {}
      }
    },
    "truncated": {},
    "testSummary": {
      "total": {},
      "statusCounts": {
        "property1": 0,
        "property2": 0
      },
      "durationInNanoSeconds": {}
    },
    "codeCoverageSummary": {
      "lineCoveragePercentage": {},
      "linesCovered": {},
      "linesMissed": {},
      "branchCoveragePercentage": {},
      "branchesCovered": {},
      "branchesMissed": {}
    }
  }
]
```

<h2 id="tocS_BatchReportModeType">BatchReportModeType</h2>
<!-- backwards compatibility -->
<a id="schemabatchreportmodetype"></a>
<a id="schema_BatchReportModeType"></a>
<a id="tocSbatchreportmodetype"></a>
<a id="tocsbatchreportmodetype"></a>

```json
"REPORT_INDIVIDUAL_BUILDS"
```

<h2 id="tocS_WrapperInt">WrapperInt</h2>
<!-- backwards compatibility -->
<a id="schemawrapperint"></a>
<a id="schema_WrapperInt"></a>
<a id="tocSwrapperint"></a>
<a id="tocswrapperint"></a>

```json
0
```

<h2 id="tocS_ComputeTypesAllowed">ComputeTypesAllowed</h2>
<!-- backwards compatibility -->
<a id="schemacomputetypesallowed"></a>
<a id="schema_ComputeTypesAllowed"></a>
<a id="tocScomputetypesallowed"></a>
<a id="tocscomputetypesallowed"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchRestrictions">BatchRestrictions</h2>
<!-- backwards compatibility -->
<a id="schemabatchrestrictions"></a>
<a id="schema_BatchRestrictions"></a>
<a id="tocSbatchrestrictions"></a>
<a id="tocsbatchrestrictions"></a>

```json
{
  "maximumBuildsAllowed": {},
  "computeTypesAllowed": {}
}
```

Specifies restrictions for the batch build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maximumBuildsAllowed|object|false|none|none|
|computeTypesAllowed|object|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_BucketOwnerAccess">BucketOwnerAccess</h2>
<!-- backwards compatibility -->
<a id="schemabucketowneraccess"></a>
<a id="schema_BucketOwnerAccess"></a>
<a id="tocSbucketowneraccess"></a>
<a id="tocsbucketowneraccess"></a>

```json
"NONE"
```

<p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl>

<h2 id="tocS_NonEmptyString">NonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystring"></a>
<a id="schema_NonEmptyString"></a>
<a id="tocSnonemptystring"></a>
<a id="tocsnonemptystring"></a>

```json
"string"
```

<h2 id="tocS_WrapperLong">WrapperLong</h2>
<!-- backwards compatibility -->
<a id="schemawrapperlong"></a>
<a id="schema_WrapperLong"></a>
<a id="tocSwrapperlong"></a>
<a id="tocswrapperlong"></a>

```json
0
```

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_StatusType">StatusType</h2>
<!-- backwards compatibility -->
<a id="schemastatustype"></a>
<a id="schema_StatusType"></a>
<a id="tocSstatustype"></a>
<a id="tocsstatustype"></a>

```json
"SUCCEEDED"
```

<h2 id="tocS_BuildPhases">BuildPhases</h2>
<!-- backwards compatibility -->
<a id="schemabuildphases"></a>
<a id="schema_BuildPhases"></a>
<a id="tocSbuildphases"></a>
<a id="tocsbuildphases"></a>

```json
[
  {
    "phaseType": {},
    "phaseStatus": {},
    "startTime": {},
    "endTime": {},
    "durationInSeconds": {},
    "contexts": {}
  }
]
```

<h2 id="tocS_ProjectSource">ProjectSource</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsource"></a>
<a id="schema_ProjectSource"></a>
<a id="tocSprojectsource"></a>
<a id="tocsprojectsource"></a>

```json
{
  "type": {},
  "location": {},
  "gitCloneDepth": {},
  "gitSubmodulesConfig": {
    "fetchSubmodules": {}
  },
  "buildspec": {},
  "auth": {
    "type": {},
    "resource": {}
  },
  "reportBuildStatus": {},
  "buildStatusConfig": {
    "context": {},
    "targetUrl": {}
  },
  "insecureSsl": {},
  "sourceIdentifier": {}
}
```

Information about the build input source code for the build project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|location|object|false|none|none|
|gitCloneDepth|object|false|none|none|
|gitSubmodulesConfig|object|false|none|none|
|buildspec|object|false|none|none|
|auth|object|false|none|none|
|reportBuildStatus|object|false|none|none|
|buildStatusConfig|object|false|none|none|
|insecureSsl|object|false|none|none|
|sourceIdentifier|object|false|none|none|

<h2 id="tocS_ProjectSources">ProjectSources</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsources"></a>
<a id="schema_ProjectSources"></a>
<a id="tocSprojectsources"></a>
<a id="tocsprojectsources"></a>

```json
[
  {
    "type": {},
    "location": {},
    "gitCloneDepth": {},
    "gitSubmodulesConfig": {
      "fetchSubmodules": {}
    },
    "buildspec": {},
    "auth": {
      "type": {},
      "resource": {}
    },
    "reportBuildStatus": {},
    "buildStatusConfig": {
      "context": {},
      "targetUrl": {}
    },
    "insecureSsl": {},
    "sourceIdentifier": {}
  }
]
```

<h2 id="tocS_ProjectSecondarySourceVersions">ProjectSecondarySourceVersions</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsecondarysourceversions"></a>
<a id="schema_ProjectSecondarySourceVersions"></a>
<a id="tocSprojectsecondarysourceversions"></a>
<a id="tocsprojectsecondarysourceversions"></a>

```json
[
  {
    "sourceIdentifier": {},
    "sourceVersion": {}
  }
]
```

<h2 id="tocS_BuildArtifacts">BuildArtifacts</h2>
<!-- backwards compatibility -->
<a id="schemabuildartifacts"></a>
<a id="schema_BuildArtifacts"></a>
<a id="tocSbuildartifacts"></a>
<a id="tocsbuildartifacts"></a>

```json
{
  "location": {},
  "sha256sum": {},
  "md5sum": {},
  "overrideArtifactName": {},
  "encryptionDisabled": {},
  "artifactIdentifier": {},
  "bucketOwnerAccess": "NONE"
}
```

Information about build output artifacts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|object|false|none|none|
|sha256sum|object|false|none|none|
|md5sum|object|false|none|none|
|overrideArtifactName|object|false|none|none|
|encryptionDisabled|object|false|none|none|
|artifactIdentifier|object|false|none|none|
|bucketOwnerAccess|[BucketOwnerAccess](#schemabucketowneraccess)|false|none|<p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl>|

#### Enumerated Values

|Property|Value|
|---|---|
|bucketOwnerAccess|NONE|
|bucketOwnerAccess|READ_ONLY|
|bucketOwnerAccess|FULL|

<h2 id="tocS_BuildArtifactsList">BuildArtifactsList</h2>
<!-- backwards compatibility -->
<a id="schemabuildartifactslist"></a>
<a id="schema_BuildArtifactsList"></a>
<a id="tocSbuildartifactslist"></a>
<a id="tocsbuildartifactslist"></a>

```json
[
  {
    "location": {},
    "sha256sum": {},
    "md5sum": {},
    "overrideArtifactName": {},
    "encryptionDisabled": {},
    "artifactIdentifier": {},
    "bucketOwnerAccess": "NONE"
  }
]
```

<h2 id="tocS_ProjectCache">ProjectCache</h2>
<!-- backwards compatibility -->
<a id="schemaprojectcache"></a>
<a id="schema_ProjectCache"></a>
<a id="tocSprojectcache"></a>
<a id="tocsprojectcache"></a>

```json
{
  "type": {},
  "location": {},
  "modes": {}
}
```

Information about the cache for the build project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|location|object|false|none|none|
|modes|object|false|none|none|

<h2 id="tocS_ProjectEnvironment">ProjectEnvironment</h2>
<!-- backwards compatibility -->
<a id="schemaprojectenvironment"></a>
<a id="schema_ProjectEnvironment"></a>
<a id="tocSprojectenvironment"></a>
<a id="tocsprojectenvironment"></a>

```json
{
  "type": {},
  "image": {},
  "computeType": {},
  "environmentVariables": {},
  "privilegedMode": {},
  "certificate": {},
  "registryCredential": {
    "credential": {},
    "credentialProvider": {}
  },
  "imagePullCredentialsType": {}
}
```

Information about the build environment of the build project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|image|object|true|none|none|
|computeType|object|true|none|none|
|environmentVariables|object|false|none|none|
|privilegedMode|object|false|none|none|
|certificate|object|false|none|none|
|registryCredential|object|false|none|none|
|imagePullCredentialsType|object|false|none|none|

<h2 id="tocS_LogsLocation">LogsLocation</h2>
<!-- backwards compatibility -->
<a id="schemalogslocation"></a>
<a id="schema_LogsLocation"></a>
<a id="tocSlogslocation"></a>
<a id="tocslogslocation"></a>

```json
{
  "groupName": {},
  "streamName": {},
  "deepLink": {},
  "s3DeepLink": {},
  "cloudWatchLogsArn": {},
  "s3LogsArn": {},
  "cloudWatchLogs": {
    "status": {},
    "groupName": {},
    "streamName": {}
  },
  "s3Logs": {
    "status": {},
    "location": {},
    "encryptionDisabled": {},
    "bucketOwnerAccess": "NONE"
  }
}
```

Information about build logs in CloudWatch Logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupName|object|false|none|none|
|streamName|object|false|none|none|
|deepLink|object|false|none|none|
|s3DeepLink|object|false|none|none|
|cloudWatchLogsArn|object|false|none|none|
|s3LogsArn|object|false|none|none|
|cloudWatchLogs|object|false|none|none|
|s3Logs|object|false|none|none|

<h2 id="tocS_VpcConfig">VpcConfig</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfig"></a>
<a id="schema_VpcConfig"></a>
<a id="tocSvpcconfig"></a>
<a id="tocsvpcconfig"></a>

```json
{
  "vpcId": {},
  "subnets": {},
  "securityGroupIds": {}
}
```

Information about the VPC configuration that CodeBuild accesses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vpcId|object|false|none|none|
|subnets|object|false|none|none|
|securityGroupIds|object|false|none|none|

<h2 id="tocS_NetworkInterface">NetworkInterface</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterface"></a>
<a id="schema_NetworkInterface"></a>
<a id="tocSnetworkinterface"></a>
<a id="tocsnetworkinterface"></a>

```json
{
  "subnetId": {},
  "networkInterfaceId": {}
}
```

Describes a network interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subnetId|object|false|none|none|
|networkInterfaceId|object|false|none|none|

<h2 id="tocS_ExportedEnvironmentVariables">ExportedEnvironmentVariables</h2>
<!-- backwards compatibility -->
<a id="schemaexportedenvironmentvariables"></a>
<a id="schema_ExportedEnvironmentVariables"></a>
<a id="tocSexportedenvironmentvariables"></a>
<a id="tocsexportedenvironmentvariables"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_BuildReportArns">BuildReportArns</h2>
<!-- backwards compatibility -->
<a id="schemabuildreportarns"></a>
<a id="schema_BuildReportArns"></a>
<a id="tocSbuildreportarns"></a>
<a id="tocsbuildreportarns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ProjectFileSystemLocations">ProjectFileSystemLocations</h2>
<!-- backwards compatibility -->
<a id="schemaprojectfilesystemlocations"></a>
<a id="schema_ProjectFileSystemLocations"></a>
<a id="tocSprojectfilesystemlocations"></a>
<a id="tocsprojectfilesystemlocations"></a>

```json
[
  {
    "type": {},
    "location": {},
    "mountPoint": {},
    "identifier": {},
    "mountOptions": {}
  }
]
```

<h2 id="tocS_DebugSession">DebugSession</h2>
<!-- backwards compatibility -->
<a id="schemadebugsession"></a>
<a id="schema_DebugSession"></a>
<a id="tocSdebugsession"></a>
<a id="tocsdebugsession"></a>

```json
{
  "sessionEnabled": {},
  "sessionTarget": {}
}
```

Contains information about the debug session for a build. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionEnabled|object|false|none|none|
|sessionTarget|object|false|none|none|

<h2 id="tocS_Build">Build</h2>
<!-- backwards compatibility -->
<a id="schemabuild"></a>
<a id="schema_Build"></a>
<a id="tocSbuild"></a>
<a id="tocsbuild"></a>

```json
{
  "id": {},
  "arn": {},
  "buildNumber": {},
  "startTime": {},
  "endTime": {},
  "currentPhase": {},
  "buildStatus": {},
  "sourceVersion": {},
  "resolvedSourceVersion": {},
  "projectName": {},
  "phases": {},
  "source": {
    "type": {},
    "location": {},
    "gitCloneDepth": {},
    "gitSubmodulesConfig": {
      "fetchSubmodules": {}
    },
    "buildspec": {},
    "auth": {
      "type": {},
      "resource": {}
    },
    "reportBuildStatus": {},
    "buildStatusConfig": {
      "context": {},
      "targetUrl": {}
    },
    "insecureSsl": {},
    "sourceIdentifier": {}
  },
  "secondarySources": {},
  "secondarySourceVersions": {},
  "artifacts": {
    "location": {},
    "sha256sum": {},
    "md5sum": {},
    "overrideArtifactName": {},
    "encryptionDisabled": {},
    "artifactIdentifier": {},
    "bucketOwnerAccess": "NONE"
  },
  "secondaryArtifacts": {},
  "cache": {
    "type": {},
    "location": {},
    "modes": {}
  },
  "environment": {
    "type": {},
    "image": {},
    "computeType": {},
    "environmentVariables": {},
    "privilegedMode": {},
    "certificate": {},
    "registryCredential": {
      "credential": {},
      "credentialProvider": {}
    },
    "imagePullCredentialsType": {}
  },
  "serviceRole": {},
  "logs": {
    "groupName": {},
    "streamName": {},
    "deepLink": {},
    "s3DeepLink": {},
    "cloudWatchLogsArn": {},
    "s3LogsArn": {},
    "cloudWatchLogs": {
      "status": {},
      "groupName": {},
      "streamName": {}
    },
    "s3Logs": {
      "status": {},
      "location": {},
      "encryptionDisabled": {},
      "bucketOwnerAccess": "NONE"
    }
  },
  "timeoutInMinutes": {},
  "queuedTimeoutInMinutes": {},
  "buildComplete": {},
  "initiator": {},
  "vpcConfig": {
    "vpcId": {},
    "subnets": {},
    "securityGroupIds": {}
  },
  "networkInterface": {
    "subnetId": {},
    "networkInterfaceId": {}
  },
  "encryptionKey": {},
  "exportedEnvironmentVariables": {},
  "reportArns": {},
  "fileSystemLocations": {},
  "debugSession": {
    "sessionEnabled": {},
    "sessionTarget": {}
  },
  "buildBatchArn": {}
}
```

Information about a build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|arn|object|false|none|none|
|buildNumber|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
|currentPhase|object|false|none|none|
|buildStatus|object|false|none|none|
|sourceVersion|object|false|none|none|
|resolvedSourceVersion|object|false|none|none|
|projectName|object|false|none|none|
|phases|object|false|none|none|
|source|object|false|none|none|
|secondarySources|object|false|none|none|
|secondarySourceVersions|object|false|none|none|
|artifacts|object|false|none|none|
|secondaryArtifacts|object|false|none|none|
|cache|object|false|none|none|
|environment|object|false|none|none|
|serviceRole|object|false|none|none|
|logs|object|false|none|none|
|timeoutInMinutes|object|false|none|none|
|queuedTimeoutInMinutes|object|false|none|none|
|buildComplete|object|false|none|none|
|initiator|object|false|none|none|
|vpcConfig|object|false|none|none|
|networkInterface|object|false|none|none|
|encryptionKey|object|false|none|none|
|exportedEnvironmentVariables|object|false|none|none|
|reportArns|object|false|none|none|
|fileSystemLocations|object|false|none|none|
|debugSession|object|false|none|none|
|buildBatchArn|object|false|none|none|

<h2 id="tocS_WrapperBoolean">WrapperBoolean</h2>
<!-- backwards compatibility -->
<a id="schemawrapperboolean"></a>
<a id="schema_WrapperBoolean"></a>
<a id="tocSwrapperboolean"></a>
<a id="tocswrapperboolean"></a>

```json
true
```

<h2 id="tocS_BuildBatchPhases">BuildBatchPhases</h2>
<!-- backwards compatibility -->
<a id="schemabuildbatchphases"></a>
<a id="schema_BuildBatchPhases"></a>
<a id="tocSbuildbatchphases"></a>
<a id="tocsbuildbatchphases"></a>

```json
[
  {
    "phaseType": {},
    "phaseStatus": {},
    "startTime": {},
    "endTime": {},
    "durationInSeconds": {},
    "contexts": {}
  }
]
```

<h2 id="tocS_LogsConfig">LogsConfig</h2>
<!-- backwards compatibility -->
<a id="schemalogsconfig"></a>
<a id="schema_LogsConfig"></a>
<a id="tocSlogsconfig"></a>
<a id="tocslogsconfig"></a>

```json
{
  "cloudWatchLogs": {
    "status": {},
    "groupName": {},
    "streamName": {}
  },
  "s3Logs": {
    "status": {},
    "location": {},
    "encryptionDisabled": {},
    "bucketOwnerAccess": "NONE"
  }
}
```

 Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudWatchLogs|object|false|none|none|
|s3Logs|object|false|none|none|

<h2 id="tocS_ProjectBuildBatchConfig">ProjectBuildBatchConfig</h2>
<!-- backwards compatibility -->
<a id="schemaprojectbuildbatchconfig"></a>
<a id="schema_ProjectBuildBatchConfig"></a>
<a id="tocSprojectbuildbatchconfig"></a>
<a id="tocsprojectbuildbatchconfig"></a>

```json
{
  "serviceRole": {},
  "combineArtifacts": {},
  "restrictions": {
    "maximumBuildsAllowed": {},
    "computeTypesAllowed": {}
  },
  "timeoutInMins": {},
  "batchReportMode": {}
}
```

Contains configuration information about a batch build project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceRole|object|false|none|none|
|combineArtifacts|object|false|none|none|
|restrictions|object|false|none|none|
|timeoutInMins|object|false|none|none|
|batchReportMode|object|false|none|none|

<h2 id="tocS_BuildGroups">BuildGroups</h2>
<!-- backwards compatibility -->
<a id="schemabuildgroups"></a>
<a id="schema_BuildGroups"></a>
<a id="tocSbuildgroups"></a>
<a id="tocsbuildgroups"></a>

```json
[
  {
    "identifier": {},
    "dependsOn": {},
    "ignoreFailure": {},
    "currentBuildSummary": {
      "arn": {},
      "requestedOn": {},
      "buildStatus": {},
      "primaryArtifact": {
        "type": {},
        "location": {},
        "identifier": {}
      },
      "secondaryArtifacts": {}
    },
    "priorBuildSummaryList": {}
  }
]
```

<h2 id="tocS_BuildBatch">BuildBatch</h2>
<!-- backwards compatibility -->
<a id="schemabuildbatch"></a>
<a id="schema_BuildBatch"></a>
<a id="tocSbuildbatch"></a>
<a id="tocsbuildbatch"></a>

```json
{
  "id": {},
  "arn": {},
  "startTime": {},
  "endTime": {},
  "currentPhase": {},
  "buildBatchStatus": {},
  "sourceVersion": {},
  "resolvedSourceVersion": {},
  "projectName": {},
  "phases": {},
  "source": {
    "type": {},
    "location": {},
    "gitCloneDepth": {},
    "gitSubmodulesConfig": {
      "fetchSubmodules": {}
    },
    "buildspec": {},
    "auth": {
      "type": {},
      "resource": {}
    },
    "reportBuildStatus": {},
    "buildStatusConfig": {
      "context": {},
      "targetUrl": {}
    },
    "insecureSsl": {},
    "sourceIdentifier": {}
  },
  "secondarySources": {},
  "secondarySourceVersions": {},
  "artifacts": {
    "location": {},
    "sha256sum": {},
    "md5sum": {},
    "overrideArtifactName": {},
    "encryptionDisabled": {},
    "artifactIdentifier": {},
    "bucketOwnerAccess": "NONE"
  },
  "secondaryArtifacts": {},
  "cache": {
    "type": {},
    "location": {},
    "modes": {}
  },
  "environment": {
    "type": {},
    "image": {},
    "computeType": {},
    "environmentVariables": {},
    "privilegedMode": {},
    "certificate": {},
    "registryCredential": {
      "credential": {},
      "credentialProvider": {}
    },
    "imagePullCredentialsType": {}
  },
  "serviceRole": {},
  "logConfig": {
    "cloudWatchLogs": {
      "status": {},
      "groupName": {},
      "streamName": {}
    },
    "s3Logs": {
      "status": {},
      "location": {},
      "encryptionDisabled": {},
      "bucketOwnerAccess": "NONE"
    }
  },
  "buildTimeoutInMinutes": {},
  "queuedTimeoutInMinutes": {},
  "complete": {},
  "initiator": {},
  "vpcConfig": {
    "vpcId": {},
    "subnets": {},
    "securityGroupIds": {}
  },
  "encryptionKey": {},
  "buildBatchNumber": {},
  "fileSystemLocations": {},
  "buildBatchConfig": {
    "serviceRole": {},
    "combineArtifacts": {},
    "restrictions": {
      "maximumBuildsAllowed": {},
      "computeTypesAllowed": {}
    },
    "timeoutInMins": {},
    "batchReportMode": {}
  },
  "buildGroups": {},
  "debugSessionEnabled": {}
}
```

Contains information about a batch build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|arn|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
|currentPhase|object|false|none|none|
|buildBatchStatus|object|false|none|none|
|sourceVersion|object|false|none|none|
|resolvedSourceVersion|object|false|none|none|
|projectName|object|false|none|none|
|phases|object|false|none|none|
|source|[ProjectSource](#schemaprojectsource)|false|none|Information about the build input source code for the build project.|
|secondarySources|object|false|none|none|
|secondarySourceVersions|object|false|none|none|
|artifacts|object|false|none|none|
|secondaryArtifacts|object|false|none|none|
|cache|[ProjectCache](#schemaprojectcache)|false|none|Information about the cache for the build project.|
|environment|[ProjectEnvironment](#schemaprojectenvironment)|false|none|Information about the build environment of the build project.|
|serviceRole|object|false|none|none|
|logConfig|[LogsConfig](#schemalogsconfig)|false|none| Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both. |
|buildTimeoutInMinutes|object|false|none|none|
|queuedTimeoutInMinutes|object|false|none|none|
|complete|object|false|none|none|
|initiator|object|false|none|none|
|vpcConfig|[VpcConfig](#schemavpcconfig)|false|none|Information about the VPC configuration that CodeBuild accesses.|
|encryptionKey|object|false|none|none|
|buildBatchNumber|object|false|none|none|
|fileSystemLocations|object|false|none|none|
|buildBatchConfig|[ProjectBuildBatchConfig](#schemaprojectbuildbatchconfig)|false|none|Contains configuration information about a batch build project.|
|buildGroups|object|false|none|none|
|debugSessionEnabled|object|false|none|none|

<h2 id="tocS_BuildBatchFilter">BuildBatchFilter</h2>
<!-- backwards compatibility -->
<a id="schemabuildbatchfilter"></a>
<a id="schema_BuildBatchFilter"></a>
<a id="tocSbuildbatchfilter"></a>
<a id="tocsbuildbatchfilter"></a>

```json
{
  "status": {}
}
```

Specifies filters when retrieving batch builds.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|

<h2 id="tocS_BuildBatchPhaseType">BuildBatchPhaseType</h2>
<!-- backwards compatibility -->
<a id="schemabuildbatchphasetype"></a>
<a id="schema_BuildBatchPhaseType"></a>
<a id="tocSbuildbatchphasetype"></a>
<a id="tocsbuildbatchphasetype"></a>

```json
"SUBMITTED"
```

<h2 id="tocS_PhaseContexts">PhaseContexts</h2>
<!-- backwards compatibility -->
<a id="schemaphasecontexts"></a>
<a id="schema_PhaseContexts"></a>
<a id="tocSphasecontexts"></a>
<a id="tocsphasecontexts"></a>

```json
[
  {
    "statusCode": {},
    "message": {}
  }
]
```

<h2 id="tocS_BuildBatchPhase">BuildBatchPhase</h2>
<!-- backwards compatibility -->
<a id="schemabuildbatchphase"></a>
<a id="schema_BuildBatchPhase"></a>
<a id="tocSbuildbatchphase"></a>
<a id="tocsbuildbatchphase"></a>

```json
{
  "phaseType": {},
  "phaseStatus": {},
  "startTime": {},
  "endTime": {},
  "durationInSeconds": {},
  "contexts": {}
}
```

Contains information about a stage for a batch build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phaseType|object|false|none|none|
|phaseStatus|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
|durationInSeconds|object|false|none|none|
|contexts|object|false|none|none|

<h2 id="tocS_Identifiers">Identifiers</h2>
<!-- backwards compatibility -->
<a id="schemaidentifiers"></a>
<a id="schema_Identifiers"></a>
<a id="tocSidentifiers"></a>
<a id="tocsidentifiers"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BuildSummary">BuildSummary</h2>
<!-- backwards compatibility -->
<a id="schemabuildsummary"></a>
<a id="schema_BuildSummary"></a>
<a id="tocSbuildsummary"></a>
<a id="tocsbuildsummary"></a>

```json
{
  "arn": {},
  "requestedOn": {},
  "buildStatus": {},
  "primaryArtifact": {
    "type": {},
    "location": {},
    "identifier": {}
  },
  "secondaryArtifacts": {}
}
```

Contains summary information about a batch build group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|requestedOn|object|false|none|none|
|buildStatus|object|false|none|none|
|primaryArtifact|object|false|none|none|
|secondaryArtifacts|object|false|none|none|

<h2 id="tocS_BuildSummaries">BuildSummaries</h2>
<!-- backwards compatibility -->
<a id="schemabuildsummaries"></a>
<a id="schema_BuildSummaries"></a>
<a id="tocSbuildsummaries"></a>
<a id="tocsbuildsummaries"></a>

```json
[
  {
    "arn": {},
    "requestedOn": {},
    "buildStatus": {},
    "primaryArtifact": {
      "type": {},
      "location": {},
      "identifier": {}
    },
    "secondaryArtifacts": {}
  }
]
```

<h2 id="tocS_BuildGroup">BuildGroup</h2>
<!-- backwards compatibility -->
<a id="schemabuildgroup"></a>
<a id="schema_BuildGroup"></a>
<a id="tocSbuildgroup"></a>
<a id="tocsbuildgroup"></a>

```json
{
  "identifier": {},
  "dependsOn": {},
  "ignoreFailure": {},
  "currentBuildSummary": {
    "arn": {},
    "requestedOn": {},
    "buildStatus": {},
    "primaryArtifact": {
      "type": {},
      "location": {},
      "identifier": {}
    },
    "secondaryArtifacts": {}
  },
  "priorBuildSummaryList": {}
}
```

Contains information about a batch build build group. Build groups are used to combine builds that can run in parallel, while still being able to set dependencies on other build groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|object|false|none|none|
|dependsOn|object|false|none|none|
|ignoreFailure|object|false|none|none|
|currentBuildSummary|object|false|none|none|
|priorBuildSummaryList|object|false|none|none|

<h2 id="tocS_BuildNotDeleted">BuildNotDeleted</h2>
<!-- backwards compatibility -->
<a id="schemabuildnotdeleted"></a>
<a id="schema_BuildNotDeleted"></a>
<a id="tocSbuildnotdeleted"></a>
<a id="tocsbuildnotdeleted"></a>

```json
{
  "id": {},
  "statusCode": {}
}
```

Information about a build that could not be successfully deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|statusCode|object|false|none|none|

<h2 id="tocS_BuildPhaseType">BuildPhaseType</h2>
<!-- backwards compatibility -->
<a id="schemabuildphasetype"></a>
<a id="schema_BuildPhaseType"></a>
<a id="tocSbuildphasetype"></a>
<a id="tocsbuildphasetype"></a>

```json
"SUBMITTED"
```

<h2 id="tocS_BuildPhase">BuildPhase</h2>
<!-- backwards compatibility -->
<a id="schemabuildphase"></a>
<a id="schema_BuildPhase"></a>
<a id="tocSbuildphase"></a>
<a id="tocsbuildphase"></a>

```json
{
  "phaseType": {},
  "phaseStatus": {},
  "startTime": {},
  "endTime": {},
  "durationInSeconds": {},
  "contexts": {}
}
```

Information about a stage for a build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phaseType|object|false|none|none|
|phaseStatus|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
|durationInSeconds|object|false|none|none|
|contexts|object|false|none|none|

<h2 id="tocS_BuildStatusConfig">BuildStatusConfig</h2>
<!-- backwards compatibility -->
<a id="schemabuildstatusconfig"></a>
<a id="schema_BuildStatusConfig"></a>
<a id="tocSbuildstatusconfig"></a>
<a id="tocsbuildstatusconfig"></a>

```json
{
  "context": {},
  "targetUrl": {}
}
```

Contains information that defines how the CodeBuild build project reports the build status to the source provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|object|false|none|none|
|targetUrl|object|false|none|none|

<h2 id="tocS_ResolvedArtifact">ResolvedArtifact</h2>
<!-- backwards compatibility -->
<a id="schemaresolvedartifact"></a>
<a id="schema_ResolvedArtifact"></a>
<a id="tocSresolvedartifact"></a>
<a id="tocsresolvedartifact"></a>

```json
{
  "type": {},
  "location": {},
  "identifier": {}
}
```

Represents a resolved build artifact. A resolved artifact is an artifact that is built and deployed to the destination, such as Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|location|object|false|none|none|
|identifier|object|false|none|none|

<h2 id="tocS_ResolvedSecondaryArtifacts">ResolvedSecondaryArtifacts</h2>
<!-- backwards compatibility -->
<a id="schemaresolvedsecondaryartifacts"></a>
<a id="schema_ResolvedSecondaryArtifacts"></a>
<a id="tocSresolvedsecondaryartifacts"></a>
<a id="tocsresolvedsecondaryartifacts"></a>

```json
[
  {
    "type": {},
    "location": {},
    "identifier": {}
  }
]
```

<h2 id="tocS_CacheMode">CacheMode</h2>
<!-- backwards compatibility -->
<a id="schemacachemode"></a>
<a id="schema_CacheMode"></a>
<a id="tocScachemode"></a>
<a id="tocscachemode"></a>

```json
"LOCAL_DOCKER_LAYER_CACHE"
```

<h2 id="tocS_CacheType">CacheType</h2>
<!-- backwards compatibility -->
<a id="schemacachetype"></a>
<a id="schema_CacheType"></a>
<a id="tocScachetype"></a>
<a id="tocscachetype"></a>

```json
"NO_CACHE"
```

<h2 id="tocS_LogsConfigStatusType">LogsConfigStatusType</h2>
<!-- backwards compatibility -->
<a id="schemalogsconfigstatustype"></a>
<a id="schema_LogsConfigStatusType"></a>
<a id="tocSlogsconfigstatustype"></a>
<a id="tocslogsconfigstatustype"></a>

```json
"ENABLED"
```

<h2 id="tocS_CloudWatchLogsConfig">CloudWatchLogsConfig</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchlogsconfig"></a>
<a id="schema_CloudWatchLogsConfig"></a>
<a id="tocScloudwatchlogsconfig"></a>
<a id="tocscloudwatchlogsconfig"></a>

```json
{
  "status": {},
  "groupName": {},
  "streamName": {}
}
```

 Information about CloudWatch Logs for a build project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|
|groupName|object|false|none|none|
|streamName|object|false|none|none|

<h2 id="tocS_Percentage">Percentage</h2>
<!-- backwards compatibility -->
<a id="schemapercentage"></a>
<a id="schema_Percentage"></a>
<a id="tocSpercentage"></a>
<a id="tocspercentage"></a>

```json
0
```

<h2 id="tocS_NonNegativeInt">NonNegativeInt</h2>
<!-- backwards compatibility -->
<a id="schemanonnegativeint"></a>
<a id="schema_NonNegativeInt"></a>
<a id="tocSnonnegativeint"></a>
<a id="tocsnonnegativeint"></a>

```json
0
```

<h2 id="tocS_CodeCoverage">CodeCoverage</h2>
<!-- backwards compatibility -->
<a id="schemacodecoverage"></a>
<a id="schema_CodeCoverage"></a>
<a id="tocScodecoverage"></a>
<a id="tocscodecoverage"></a>

```json
{
  "id": {},
  "reportARN": {},
  "filePath": {},
  "lineCoveragePercentage": {},
  "linesCovered": {},
  "linesMissed": {},
  "branchCoveragePercentage": {},
  "branchesCovered": {},
  "branchesMissed": {},
  "expired": {}
}
```

<p>Contains code coverage report information.</p> <p>Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.</p> <p>Branch coverage determines if your tests cover every possible branch of a control structure, such as an <code>if</code> or <code>case</code> statement.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|reportARN|object|false|none|none|
|filePath|object|false|none|none|
|lineCoveragePercentage|object|false|none|none|
|linesCovered|object|false|none|none|
|linesMissed|object|false|none|none|
|branchCoveragePercentage|object|false|none|none|
|branchesCovered|object|false|none|none|
|branchesMissed|object|false|none|none|
|expired|object|false|none|none|

<h2 id="tocS_CodeCoverageReportSummary">CodeCoverageReportSummary</h2>
<!-- backwards compatibility -->
<a id="schemacodecoveragereportsummary"></a>
<a id="schema_CodeCoverageReportSummary"></a>
<a id="tocScodecoveragereportsummary"></a>
<a id="tocscodecoveragereportsummary"></a>

```json
{
  "lineCoveragePercentage": {},
  "linesCovered": {},
  "linesMissed": {},
  "branchCoveragePercentage": {},
  "branchesCovered": {},
  "branchesMissed": {}
}
```

<p>Contains a summary of a code coverage report.</p> <p>Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.</p> <p>Branch coverage determines if your tests cover every possible branch of a control structure, such as an <code>if</code> or <code>case</code> statement.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lineCoveragePercentage|object|false|none|none|
|linesCovered|object|false|none|none|
|linesMissed|object|false|none|none|
|branchCoveragePercentage|object|false|none|none|
|branchesCovered|object|false|none|none|
|branchesMissed|object|false|none|none|

<h2 id="tocS_CodeCoverages">CodeCoverages</h2>
<!-- backwards compatibility -->
<a id="schemacodecoverages"></a>
<a id="schema_CodeCoverages"></a>
<a id="tocScodecoverages"></a>
<a id="tocscodecoverages"></a>

```json
[
  {
    "id": {},
    "reportARN": {},
    "filePath": {},
    "lineCoveragePercentage": {},
    "linesCovered": {},
    "linesMissed": {},
    "branchCoveragePercentage": {},
    "branchesCovered": {},
    "branchesMissed": {},
    "expired": {}
  }
]
```

<h2 id="tocS_ComputeType">ComputeType</h2>
<!-- backwards compatibility -->
<a id="schemacomputetype"></a>
<a id="schema_ComputeType"></a>
<a id="tocScomputetype"></a>
<a id="tocscomputetype"></a>

```json
"BUILD_GENERAL1_SMALL"
```

<h2 id="tocS_ProjectName">ProjectName</h2>
<!-- backwards compatibility -->
<a id="schemaprojectname"></a>
<a id="schema_ProjectName"></a>
<a id="tocSprojectname"></a>
<a id="tocsprojectname"></a>

```json
"string"
```

<h2 id="tocS_ProjectDescription">ProjectDescription</h2>
<!-- backwards compatibility -->
<a id="schemaprojectdescription"></a>
<a id="schema_ProjectDescription"></a>
<a id="tocSprojectdescription"></a>
<a id="tocsprojectdescription"></a>

```json
"string"
```

<h2 id="tocS_ProjectArtifacts">ProjectArtifacts</h2>
<!-- backwards compatibility -->
<a id="schemaprojectartifacts"></a>
<a id="schema_ProjectArtifacts"></a>
<a id="tocSprojectartifacts"></a>
<a id="tocsprojectartifacts"></a>

```json
{
  "type": {},
  "location": {},
  "path": {},
  "namespaceType": {},
  "name": {},
  "packaging": {},
  "overrideArtifactName": {},
  "encryptionDisabled": {},
  "artifactIdentifier": {},
  "bucketOwnerAccess": "NONE"
}
```

Information about the build output artifacts for the build project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|location|object|false|none|none|
|path|object|false|none|none|
|namespaceType|object|false|none|none|
|name|object|false|none|none|
|packaging|object|false|none|none|
|overrideArtifactName|object|false|none|none|
|encryptionDisabled|object|false|none|none|
|artifactIdentifier|object|false|none|none|
|bucketOwnerAccess|[BucketOwnerAccess](#schemabucketowneraccess)|false|none|<p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl>|

#### Enumerated Values

|Property|Value|
|---|---|
|bucketOwnerAccess|NONE|
|bucketOwnerAccess|READ_ONLY|
|bucketOwnerAccess|FULL|

<h2 id="tocS_ProjectArtifactsList">ProjectArtifactsList</h2>
<!-- backwards compatibility -->
<a id="schemaprojectartifactslist"></a>
<a id="schema_ProjectArtifactsList"></a>
<a id="tocSprojectartifactslist"></a>
<a id="tocsprojectartifactslist"></a>

```json
[
  {
    "type": {},
    "location": {},
    "path": {},
    "namespaceType": {},
    "name": {},
    "packaging": {},
    "overrideArtifactName": {},
    "encryptionDisabled": {},
    "artifactIdentifier": {},
    "bucketOwnerAccess": "NONE"
  }
]
```

<h2 id="tocS_TimeOut">TimeOut</h2>
<!-- backwards compatibility -->
<a id="schematimeout"></a>
<a id="schema_TimeOut"></a>
<a id="tocStimeout"></a>
<a id="tocstimeout"></a>

```json
5
```

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "name": {},
  "arn": {},
  "description": {},
  "source": {
    "type": {},
    "location": {},
    "gitCloneDepth": {},
    "gitSubmodulesConfig": {
      "fetchSubmodules": {}
    },
    "buildspec": {},
    "auth": {
      "type": {},
      "resource": {}
    },
    "reportBuildStatus": {},
    "buildStatusConfig": {
      "context": {},
      "targetUrl": {}
    },
    "insecureSsl": {},
    "sourceIdentifier": {}
  },
  "secondarySources": {},
  "sourceVersion": {},
  "secondarySourceVersions": {},
  "artifacts": {
    "type": {},
    "location": {},
    "path": {},
    "namespaceType": {},
    "name": {},
    "packaging": {},
    "overrideArtifactName": {},
    "encryptionDisabled": {},
    "artifactIdentifier": {},
    "bucketOwnerAccess": "NONE"
  },
  "secondaryArtifacts": {},
  "cache": {
    "type": {},
    "location": {},
    "modes": {}
  },
  "environment": {
    "type": {},
    "image": {},
    "computeType": {},
    "environmentVariables": {},
    "privilegedMode": {},
    "certificate": {},
    "registryCredential": {
      "credential": {},
      "credentialProvider": {}
    },
    "imagePullCredentialsType": {}
  },
  "serviceRole": {},
  "timeoutInMinutes": {},
  "queuedTimeoutInMinutes": {},
  "encryptionKey": {},
  "tags": {},
  "created": {},
  "lastModified": {},
  "webhook": {
    "url": {},
    "payloadUrl": {},
    "secret": {},
    "branchFilter": {},
    "filterGroups": {},
    "buildType": {},
    "lastModifiedSecret": {}
  },
  "vpcConfig": {
    "vpcId": {},
    "subnets": {},
    "securityGroupIds": {}
  },
  "badge": {
    "badgeEnabled": {},
    "badgeRequestUrl": {}
  },
  "logsConfig": {
    "cloudWatchLogs": {
      "status": {},
      "groupName": {},
      "streamName": {}
    },
    "s3Logs": {
      "status": {},
      "location": {},
      "encryptionDisabled": {},
      "bucketOwnerAccess": "NONE"
    }
  },
  "fileSystemLocations": {},
  "buildBatchConfig": {
    "serviceRole": {},
    "combineArtifacts": {},
    "restrictions": {
      "maximumBuildsAllowed": {},
      "computeTypesAllowed": {}
    },
    "timeoutInMins": {},
    "batchReportMode": {}
  },
  "concurrentBuildLimit": {},
  "projectVisibility": "PUBLIC_READ",
  "publicProjectAlias": {},
  "resourceAccessRole": {}
}
```

Information about a build project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|description|object|false|none|none|
|source|object|false|none|none|
|secondarySources|object|false|none|none|
|sourceVersion|object|false|none|none|
|secondarySourceVersions|object|false|none|none|
|artifacts|object|false|none|none|
|secondaryArtifacts|object|false|none|none|
|cache|object|false|none|none|
|environment|object|false|none|none|
|serviceRole|object|false|none|none|
|timeoutInMinutes|object|false|none|none|
|queuedTimeoutInMinutes|object|false|none|none|
|encryptionKey|object|false|none|none|
|tags|object|false|none|none|
|created|object|false|none|none|
|lastModified|object|false|none|none|
|webhook|object|false|none|none|
|vpcConfig|object|false|none|none|
|badge|object|false|none|none|
|logsConfig|object|false|none|none|
|fileSystemLocations|object|false|none|none|
|buildBatchConfig|object|false|none|none|
|concurrentBuildLimit|object|false|none|none|
|projectVisibility|[ProjectVisibilityType](#schemaprojectvisibilitytype)|false|none|<p>Specifies the visibility of the project's builds. Possible values are:</p> <dl> <dt>PUBLIC_READ</dt> <dd> <p>The project builds are visible to the public.</p> </dd> <dt>PRIVATE</dt> <dd> <p>The project builds are not visible to the public.</p> </dd> </dl>|
|publicProjectAlias|object|false|none|none|
|resourceAccessRole|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|projectVisibility|PUBLIC_READ|
|projectVisibility|PRIVATE|

<h2 id="tocS_ReportGroupName">ReportGroupName</h2>
<!-- backwards compatibility -->
<a id="schemareportgroupname"></a>
<a id="schema_ReportGroupName"></a>
<a id="tocSreportgroupname"></a>
<a id="tocsreportgroupname"></a>

```json
"string"
```

<h2 id="tocS_ReportType">ReportType</h2>
<!-- backwards compatibility -->
<a id="schemareporttype"></a>
<a id="schema_ReportType"></a>
<a id="tocSreporttype"></a>
<a id="tocsreporttype"></a>

```json
"TEST"
```

<h2 id="tocS_ReportExportConfig">ReportExportConfig</h2>
<!-- backwards compatibility -->
<a id="schemareportexportconfig"></a>
<a id="schema_ReportExportConfig"></a>
<a id="tocSreportexportconfig"></a>
<a id="tocsreportexportconfig"></a>

```json
{
  "exportConfigType": {},
  "s3Destination": {
    "bucket": {},
    "bucketOwner": {},
    "path": {},
    "packaging": {},
    "encryptionKey": {},
    "encryptionDisabled": {}
  }
}
```

 Information about the location where the run of a report is exported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportConfigType|object|false|none|none|
|s3Destination|object|false|none|none|

<h2 id="tocS_ReportGroup">ReportGroup</h2>
<!-- backwards compatibility -->
<a id="schemareportgroup"></a>
<a id="schema_ReportGroup"></a>
<a id="tocSreportgroup"></a>
<a id="tocsreportgroup"></a>

```json
{
  "arn": {},
  "name": {},
  "type": {},
  "exportConfig": {
    "exportConfigType": {},
    "s3Destination": {
      "bucket": {},
      "bucketOwner": {},
      "path": {},
      "packaging": {},
      "encryptionKey": {},
      "encryptionDisabled": {}
    }
  },
  "created": {},
  "lastModified": {},
  "tags": {},
  "status": {}
}
```

A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|type|object|false|none|none|
|exportConfig|object|false|none|none|
|created|object|false|none|none|
|lastModified|object|false|none|none|
|tags|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_FilterGroups">FilterGroups</h2>
<!-- backwards compatibility -->
<a id="schemafiltergroups"></a>
<a id="schema_FilterGroups"></a>
<a id="tocSfiltergroups"></a>
<a id="tocsfiltergroups"></a>

```json
[
  [
    {
      "type": {},
      "pattern": {},
      "excludeMatchedPattern": {}
    }
  ]
]
```

<h2 id="tocS_WebhookBuildType">WebhookBuildType</h2>
<!-- backwards compatibility -->
<a id="schemawebhookbuildtype"></a>
<a id="schema_WebhookBuildType"></a>
<a id="tocSwebhookbuildtype"></a>
<a id="tocswebhookbuildtype"></a>

```json
"BUILD"
```

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "url": {},
  "payloadUrl": {},
  "secret": {},
  "branchFilter": {},
  "filterGroups": {},
  "buildType": {},
  "lastModifiedSecret": {}
}
```

Information about a webhook that connects repository events to a build project in CodeBuild.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|object|false|none|none|
|payloadUrl|object|false|none|none|
|secret|object|false|none|none|
|branchFilter|object|false|none|none|
|filterGroups|object|false|none|none|
|buildType|object|false|none|none|
|lastModifiedSecret|object|false|none|none|

<h2 id="tocS_CredentialProviderType">CredentialProviderType</h2>
<!-- backwards compatibility -->
<a id="schemacredentialprovidertype"></a>
<a id="schema_CredentialProviderType"></a>
<a id="tocScredentialprovidertype"></a>
<a id="tocscredentialprovidertype"></a>

```json
"SECRETS_MANAGER"
```

<h2 id="tocS_PageSize">PageSize</h2>
<!-- backwards compatibility -->
<a id="schemapagesize"></a>
<a id="schema_PageSize"></a>
<a id="tocSpagesize"></a>
<a id="tocspagesize"></a>

```json
1
```

<h2 id="tocS_SortOrderType">SortOrderType</h2>
<!-- backwards compatibility -->
<a id="schemasortordertype"></a>
<a id="schema_SortOrderType"></a>
<a id="tocSsortordertype"></a>
<a id="tocssortordertype"></a>

```json
"ASCENDING"
```

<h2 id="tocS_ReportCodeCoverageSortByType">ReportCodeCoverageSortByType</h2>
<!-- backwards compatibility -->
<a id="schemareportcodecoveragesortbytype"></a>
<a id="schema_ReportCodeCoverageSortByType"></a>
<a id="tocSreportcodecoveragesortbytype"></a>
<a id="tocsreportcodecoveragesortbytype"></a>

```json
"LINE_COVERAGE_PERCENTAGE"
```

<h2 id="tocS_TestCaseFilter">TestCaseFilter</h2>
<!-- backwards compatibility -->
<a id="schematestcasefilter"></a>
<a id="schema_TestCaseFilter"></a>
<a id="tocStestcasefilter"></a>
<a id="tocstestcasefilter"></a>

```json
{
  "status": {},
  "keyword": {}
}
```

A filter used to return specific types of test cases. In order to pass the filter, the report must meet all of the filter properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|keyword|object|false|none|none|

<h2 id="tocS_TestCases">TestCases</h2>
<!-- backwards compatibility -->
<a id="schematestcases"></a>
<a id="schema_TestCases"></a>
<a id="tocStestcases"></a>
<a id="tocstestcases"></a>

```json
[
  {
    "reportArn": {},
    "testRawDataPath": {},
    "prefix": {},
    "name": {},
    "status": {},
    "durationInNanoSeconds": {},
    "message": {},
    "expired": {}
  }
]
```

<h2 id="tocS_ImageVersions">ImageVersions</h2>
<!-- backwards compatibility -->
<a id="schemaimageversions"></a>
<a id="schema_ImageVersions"></a>
<a id="tocSimageversions"></a>
<a id="tocsimageversions"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EnvironmentImage">EnvironmentImage</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentimage"></a>
<a id="schema_EnvironmentImage"></a>
<a id="tocSenvironmentimage"></a>
<a id="tocsenvironmentimage"></a>

```json
{
  "name": {},
  "description": {},
  "versions": {}
}
```

Information about a Docker image that is managed by CodeBuild.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|versions|object|false|none|none|

<h2 id="tocS_EnvironmentImages">EnvironmentImages</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentimages"></a>
<a id="schema_EnvironmentImages"></a>
<a id="tocSenvironmentimages"></a>
<a id="tocsenvironmentimages"></a>

```json
[
  {
    "name": {},
    "description": {},
    "versions": {}
  }
]
```

<h2 id="tocS_LanguageType">LanguageType</h2>
<!-- backwards compatibility -->
<a id="schemalanguagetype"></a>
<a id="schema_LanguageType"></a>
<a id="tocSlanguagetype"></a>
<a id="tocslanguagetype"></a>

```json
"JAVA"
```

<h2 id="tocS_EnvironmentLanguage">EnvironmentLanguage</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentlanguage"></a>
<a id="schema_EnvironmentLanguage"></a>
<a id="tocSenvironmentlanguage"></a>
<a id="tocsenvironmentlanguage"></a>

```json
{
  "language": {},
  "images": {}
}
```

A set of Docker images that are related by programming language and are managed by CodeBuild.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|object|false|none|none|
|images|object|false|none|none|

<h2 id="tocS_EnvironmentLanguages">EnvironmentLanguages</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentlanguages"></a>
<a id="schema_EnvironmentLanguages"></a>
<a id="tocSenvironmentlanguages"></a>
<a id="tocsenvironmentlanguages"></a>

```json
[
  {
    "language": {},
    "images": {}
  }
]
```

<h2 id="tocS_PlatformType">PlatformType</h2>
<!-- backwards compatibility -->
<a id="schemaplatformtype"></a>
<a id="schema_PlatformType"></a>
<a id="tocSplatformtype"></a>
<a id="tocsplatformtype"></a>

```json
"DEBIAN"
```

<h2 id="tocS_EnvironmentPlatform">EnvironmentPlatform</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentplatform"></a>
<a id="schema_EnvironmentPlatform"></a>
<a id="tocSenvironmentplatform"></a>
<a id="tocsenvironmentplatform"></a>

```json
{
  "platform": {},
  "languages": {}
}
```

A set of Docker images that are related by platform and are managed by CodeBuild.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|platform|object|false|none|none|
|languages|object|false|none|none|

<h2 id="tocS_EnvironmentPlatforms">EnvironmentPlatforms</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentplatforms"></a>
<a id="schema_EnvironmentPlatforms"></a>
<a id="tocSenvironmentplatforms"></a>
<a id="tocsenvironmentplatforms"></a>

```json
[
  {
    "platform": {},
    "languages": {}
  }
]
```

<h2 id="tocS_EnvironmentType">EnvironmentType</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmenttype"></a>
<a id="schema_EnvironmentType"></a>
<a id="tocSenvironmenttype"></a>
<a id="tocsenvironmenttype"></a>

```json
"WINDOWS_CONTAINER"
```

<h2 id="tocS_EnvironmentVariableType">EnvironmentVariableType</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentvariabletype"></a>
<a id="schema_EnvironmentVariableType"></a>
<a id="tocSenvironmentvariabletype"></a>
<a id="tocsenvironmentvariabletype"></a>

```json
"PLAINTEXT"
```

<h2 id="tocS_EnvironmentVariable">EnvironmentVariable</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentvariable"></a>
<a id="schema_EnvironmentVariable"></a>
<a id="tocSenvironmentvariable"></a>
<a id="tocsenvironmentvariable"></a>

```json
{
  "name": {},
  "value": {},
  "type": {}
}
```

Information about an environment variable for a build project or a build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|value|object|true|none|none|
|type|object|false|none|none|

<h2 id="tocS_EnvironmentVariables">EnvironmentVariables</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentvariables"></a>
<a id="schema_EnvironmentVariables"></a>
<a id="tocSenvironmentvariables"></a>
<a id="tocsenvironmentvariables"></a>

```json
[
  {
    "name": {},
    "value": {},
    "type": {}
  }
]
```

<h2 id="tocS_ExportedEnvironmentVariable">ExportedEnvironmentVariable</h2>
<!-- backwards compatibility -->
<a id="schemaexportedenvironmentvariable"></a>
<a id="schema_ExportedEnvironmentVariable"></a>
<a id="tocSexportedenvironmentvariable"></a>
<a id="tocsexportedenvironmentvariable"></a>

```json
{
  "name": {},
  "value": {}
}
```

<p>Contains information about an exported environment variable. </p> <p>Exported environment variables are used in conjunction with CodePipeline to export environment variables from the current build stage to subsequent stages in the pipeline. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-variables.html">Working with variables</a> in the <i>CodePipeline User Guide</i>.</p> <note> <p> During a build, the value of a variable is available starting with the <code>install</code> phase. It can be updated between the start of the <code>install</code> phase and the end of the <code>post_build</code> phase. After the <code>post_build</code> phase ends, the value of exported variables cannot change.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_FileSystemType">FileSystemType</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemtype"></a>
<a id="schema_FileSystemType"></a>
<a id="tocSfilesystemtype"></a>
<a id="tocsfilesystemtype"></a>

```json
"EFS"
```

<h2 id="tocS_WebhookFilter">WebhookFilter</h2>
<!-- backwards compatibility -->
<a id="schemawebhookfilter"></a>
<a id="schema_WebhookFilter"></a>
<a id="tocSwebhookfilter"></a>
<a id="tocswebhookfilter"></a>

```json
{
  "type": {},
  "pattern": {},
  "excludeMatchedPattern": {}
}
```

 A filter used to determine which webhooks trigger a build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|pattern|object|true|none|none|
|excludeMatchedPattern|object|false|none|none|

<h2 id="tocS_FilterGroup">FilterGroup</h2>
<!-- backwards compatibility -->
<a id="schemafiltergroup"></a>
<a id="schema_FilterGroup"></a>
<a id="tocSfiltergroup"></a>
<a id="tocsfiltergroup"></a>

```json
[
  {
    "type": {},
    "pattern": {},
    "excludeMatchedPattern": {}
  }
]
```

<h2 id="tocS_ReportGroupTrendFieldType">ReportGroupTrendFieldType</h2>
<!-- backwards compatibility -->
<a id="schemareportgrouptrendfieldtype"></a>
<a id="schema_ReportGroupTrendFieldType"></a>
<a id="tocSreportgrouptrendfieldtype"></a>
<a id="tocsreportgrouptrendfieldtype"></a>

```json
"PASS_RATE"
```

<h2 id="tocS_ReportGroupTrendStats">ReportGroupTrendStats</h2>
<!-- backwards compatibility -->
<a id="schemareportgrouptrendstats"></a>
<a id="schema_ReportGroupTrendStats"></a>
<a id="tocSreportgrouptrendstats"></a>
<a id="tocsreportgrouptrendstats"></a>

```json
{
  "average": {},
  "max": {},
  "min": {}
}
```

Contains trend statistics for a set of reports. The actual values depend on the type of trend being collected. For more information, see .

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|average|object|false|none|none|
|max|object|false|none|none|
|min|object|false|none|none|

<h2 id="tocS_ReportGroupTrendRawDataList">ReportGroupTrendRawDataList</h2>
<!-- backwards compatibility -->
<a id="schemareportgrouptrendrawdatalist"></a>
<a id="schema_ReportGroupTrendRawDataList"></a>
<a id="tocSreportgrouptrendrawdatalist"></a>
<a id="tocsreportgrouptrendrawdatalist"></a>

```json
[
  {
    "reportArn": {},
    "data": {}
  }
]
```

<h2 id="tocS_GitCloneDepth">GitCloneDepth</h2>
<!-- backwards compatibility -->
<a id="schemagitclonedepth"></a>
<a id="schema_GitCloneDepth"></a>
<a id="tocSgitclonedepth"></a>
<a id="tocsgitclonedepth"></a>

```json
0
```

<h2 id="tocS_GitSubmodulesConfig">GitSubmodulesConfig</h2>
<!-- backwards compatibility -->
<a id="schemagitsubmodulesconfig"></a>
<a id="schema_GitSubmodulesConfig"></a>
<a id="tocSgitsubmodulesconfig"></a>
<a id="tocsgitsubmodulesconfig"></a>

```json
{
  "fetchSubmodules": {}
}
```

 Information about the Git submodules configuration for an CodeBuild build project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fetchSubmodules|object|true|none|none|

<h2 id="tocS_ImagePullCredentialsType">ImagePullCredentialsType</h2>
<!-- backwards compatibility -->
<a id="schemaimagepullcredentialstype"></a>
<a id="schema_ImagePullCredentialsType"></a>
<a id="tocSimagepullcredentialstype"></a>
<a id="tocsimagepullcredentialstype"></a>

```json
"CODEBUILD"
```

<h2 id="tocS_SensitiveNonEmptyString">SensitiveNonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemasensitivenonemptystring"></a>
<a id="schema_SensitiveNonEmptyString"></a>
<a id="tocSsensitivenonemptystring"></a>
<a id="tocssensitivenonemptystring"></a>

```json
"password"
```

<h2 id="tocS_ServerType">ServerType</h2>
<!-- backwards compatibility -->
<a id="schemaservertype"></a>
<a id="schema_ServerType"></a>
<a id="tocSservertype"></a>
<a id="tocsservertype"></a>

```json
"GITHUB"
```

<h2 id="tocS_KeyInput">KeyInput</h2>
<!-- backwards compatibility -->
<a id="schemakeyinput"></a>
<a id="schema_KeyInput"></a>
<a id="tocSkeyinput"></a>
<a id="tocskeyinput"></a>

```json
"string"
```

<h2 id="tocS_ProjectSortByType">ProjectSortByType</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsortbytype"></a>
<a id="schema_ProjectSortByType"></a>
<a id="tocSprojectsortbytype"></a>
<a id="tocsprojectsortbytype"></a>

```json
"NAME"
```

<h2 id="tocS_ReportGroupSortByType">ReportGroupSortByType</h2>
<!-- backwards compatibility -->
<a id="schemareportgroupsortbytype"></a>
<a id="schema_ReportGroupSortByType"></a>
<a id="tocSreportgroupsortbytype"></a>
<a id="tocsreportgroupsortbytype"></a>

```json
"NAME"
```

<h2 id="tocS_ReportFilter">ReportFilter</h2>
<!-- backwards compatibility -->
<a id="schemareportfilter"></a>
<a id="schema_ReportFilter"></a>
<a id="tocSreportfilter"></a>
<a id="tocsreportfilter"></a>

```json
{
  "status": {}
}
```

 A filter used to return reports with the status specified by the input <code>status</code> parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|

<h2 id="tocS_SharedResourceSortByType">SharedResourceSortByType</h2>
<!-- backwards compatibility -->
<a id="schemasharedresourcesortbytype"></a>
<a id="schema_SharedResourceSortByType"></a>
<a id="tocSsharedresourcesortbytype"></a>
<a id="tocssharedresourcesortbytype"></a>

```json
"ARN"
```

<h2 id="tocS_ProjectArns">ProjectArns</h2>
<!-- backwards compatibility -->
<a id="schemaprojectarns"></a>
<a id="schema_ProjectArns"></a>
<a id="tocSprojectarns"></a>
<a id="tocsprojectarns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SourceCredentialsInfos">SourceCredentialsInfos</h2>
<!-- backwards compatibility -->
<a id="schemasourcecredentialsinfos"></a>
<a id="schema_SourceCredentialsInfos"></a>
<a id="tocSsourcecredentialsinfos"></a>
<a id="tocssourcecredentialsinfos"></a>

```json
[
  {
    "arn": {},
    "serverType": {},
    "authType": {}
  }
]
```

<h2 id="tocS_S3LogsConfig">S3LogsConfig</h2>
<!-- backwards compatibility -->
<a id="schemas3logsconfig"></a>
<a id="schema_S3LogsConfig"></a>
<a id="tocSs3logsconfig"></a>
<a id="tocss3logsconfig"></a>

```json
{
  "status": {},
  "location": {},
  "encryptionDisabled": {},
  "bucketOwnerAccess": "NONE"
}
```

 Information about S3 logs for a build project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|
|location|object|false|none|none|
|encryptionDisabled|object|false|none|none|
|bucketOwnerAccess|[BucketOwnerAccess](#schemabucketowneraccess)|false|none|<p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl>|

#### Enumerated Values

|Property|Value|
|---|---|
|bucketOwnerAccess|NONE|
|bucketOwnerAccess|READ_ONLY|
|bucketOwnerAccess|FULL|

<h2 id="tocS_PhaseContext">PhaseContext</h2>
<!-- backwards compatibility -->
<a id="schemaphasecontext"></a>
<a id="schema_PhaseContext"></a>
<a id="tocSphasecontext"></a>
<a id="tocsphasecontext"></a>

```json
{
  "statusCode": {},
  "message": {}
}
```

Additional information about a build phase that has an error. You can use this information for troubleshooting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_ProjectBadge">ProjectBadge</h2>
<!-- backwards compatibility -->
<a id="schemaprojectbadge"></a>
<a id="schema_ProjectBadge"></a>
<a id="tocSprojectbadge"></a>
<a id="tocsprojectbadge"></a>

```json
{
  "badgeEnabled": {},
  "badgeRequestUrl": {}
}
```

Information about the build badge for the build project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|badgeEnabled|object|false|none|none|
|badgeRequestUrl|object|false|none|none|

<h2 id="tocS_ProjectVisibilityType">ProjectVisibilityType</h2>
<!-- backwards compatibility -->
<a id="schemaprojectvisibilitytype"></a>
<a id="schema_ProjectVisibilityType"></a>
<a id="tocSprojectvisibilitytype"></a>
<a id="tocsprojectvisibilitytype"></a>

```json
"PUBLIC_READ"
```

<p>Specifies the visibility of the project's builds. Possible values are:</p> <dl> <dt>PUBLIC_READ</dt> <dd> <p>The project builds are visible to the public.</p> </dd> <dt>PRIVATE</dt> <dd> <p>The project builds are not visible to the public.</p> </dd> </dl>

<h2 id="tocS_ProjectCacheModes">ProjectCacheModes</h2>
<!-- backwards compatibility -->
<a id="schemaprojectcachemodes"></a>
<a id="schema_ProjectCacheModes"></a>
<a id="tocSprojectcachemodes"></a>
<a id="tocsprojectcachemodes"></a>

```json
[
  "LOCAL_DOCKER_LAYER_CACHE"
]
```

<h2 id="tocS_RegistryCredential">RegistryCredential</h2>
<!-- backwards compatibility -->
<a id="schemaregistrycredential"></a>
<a id="schema_RegistryCredential"></a>
<a id="tocSregistrycredential"></a>
<a id="tocsregistrycredential"></a>

```json
{
  "credential": {},
  "credentialProvider": {}
}
```

<p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with Secrets Manager Sample for CodeBuild</a>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credential|object|true|none|none|
|credentialProvider|object|true|none|none|

<h2 id="tocS_ProjectFileSystemLocation">ProjectFileSystemLocation</h2>
<!-- backwards compatibility -->
<a id="schemaprojectfilesystemlocation"></a>
<a id="schema_ProjectFileSystemLocation"></a>
<a id="tocSprojectfilesystemlocation"></a>
<a id="tocsprojectfilesystemlocation"></a>

```json
{
  "type": {},
  "location": {},
  "mountPoint": {},
  "identifier": {},
  "mountOptions": {}
}
```

 Information about a file system created by Amazon Elastic File System (EFS). For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">What Is Amazon Elastic File System?</a>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|location|object|false|none|none|
|mountPoint|object|false|none|none|
|identifier|object|false|none|none|
|mountOptions|object|false|none|none|

<h2 id="tocS_ProjectSourceVersion">ProjectSourceVersion</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsourceversion"></a>
<a id="schema_ProjectSourceVersion"></a>
<a id="tocSprojectsourceversion"></a>
<a id="tocsprojectsourceversion"></a>

```json
{
  "sourceIdentifier": {},
  "sourceVersion": {}
}
```

 A source identifier and its corresponding version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceIdentifier|object|true|none|none|
|sourceVersion|object|true|none|none|

<h2 id="tocS_SourceType">SourceType</h2>
<!-- backwards compatibility -->
<a id="schemasourcetype"></a>
<a id="schema_SourceType"></a>
<a id="tocSsourcetype"></a>
<a id="tocssourcetype"></a>

```json
"CODECOMMIT"
```

<h2 id="tocS_SourceAuth">SourceAuth</h2>
<!-- backwards compatibility -->
<a id="schemasourceauth"></a>
<a id="schema_SourceAuth"></a>
<a id="tocSsourceauth"></a>
<a id="tocssourceauth"></a>

```json
{
  "type": {},
  "resource": {}
}
```

<p>Information about the authorization settings for CodeBuild to access the source code to be built.</p> <p>This information is for the CodeBuild console's use only. Your code should not get or set this information directly.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|resource|object|false|none|none|

<h2 id="tocS_ReportStatusType">ReportStatusType</h2>
<!-- backwards compatibility -->
<a id="schemareportstatustype"></a>
<a id="schema_ReportStatusType"></a>
<a id="tocSreportstatustype"></a>
<a id="tocsreportstatustype"></a>

```json
"GENERATING"
```

<h2 id="tocS_TestReportSummary">TestReportSummary</h2>
<!-- backwards compatibility -->
<a id="schematestreportsummary"></a>
<a id="schema_TestReportSummary"></a>
<a id="tocStestreportsummary"></a>
<a id="tocstestreportsummary"></a>

```json
{
  "total": {},
  "statusCounts": {
    "property1": 0,
    "property2": 0
  },
  "durationInNanoSeconds": {}
}
```

 Information about a test report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|object|true|none|none|
|statusCounts|object|true|none|none|
|durationInNanoSeconds|object|true|none|none|

<h2 id="tocS_Report">Report</h2>
<!-- backwards compatibility -->
<a id="schemareport"></a>
<a id="schema_Report"></a>
<a id="tocSreport"></a>
<a id="tocsreport"></a>

```json
{
  "arn": {},
  "type": {},
  "name": {},
  "reportGroupArn": {},
  "executionId": {},
  "status": {},
  "created": {},
  "expired": {},
  "exportConfig": {
    "exportConfigType": {},
    "s3Destination": {
      "bucket": {},
      "bucketOwner": {},
      "path": {},
      "packaging": {},
      "encryptionKey": {},
      "encryptionDisabled": {}
    }
  },
  "truncated": {},
  "testSummary": {
    "total": {},
    "statusCounts": {
      "property1": 0,
      "property2": 0
    },
    "durationInNanoSeconds": {}
  },
  "codeCoverageSummary": {
    "lineCoveragePercentage": {},
    "linesCovered": {},
    "linesMissed": {},
    "branchCoveragePercentage": {},
    "branchesCovered": {},
    "branchesMissed": {}
  }
}
```

Information about the results from running a series of test cases during the run of a build project. The test cases are specified in the buildspec for the build project using one or more paths to the test case files. You can specify any type of tests you want, such as unit tests, integration tests, and functional tests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|type|object|false|none|none|
|name|object|false|none|none|
|reportGroupArn|object|false|none|none|
|executionId|object|false|none|none|
|status|object|false|none|none|
|created|object|false|none|none|
|expired|object|false|none|none|
|exportConfig|object|false|none|none|
|truncated|object|false|none|none|
|testSummary|object|false|none|none|
|codeCoverageSummary|object|false|none|none|

<h2 id="tocS_ReportExportConfigType">ReportExportConfigType</h2>
<!-- backwards compatibility -->
<a id="schemareportexportconfigtype"></a>
<a id="schema_ReportExportConfigType"></a>
<a id="tocSreportexportconfigtype"></a>
<a id="tocsreportexportconfigtype"></a>

```json
"S3"
```

<h2 id="tocS_S3ReportExportConfig">S3ReportExportConfig</h2>
<!-- backwards compatibility -->
<a id="schemas3reportexportconfig"></a>
<a id="schema_S3ReportExportConfig"></a>
<a id="tocSs3reportexportconfig"></a>
<a id="tocss3reportexportconfig"></a>

```json
{
  "bucket": {},
  "bucketOwner": {},
  "path": {},
  "packaging": {},
  "encryptionKey": {},
  "encryptionDisabled": {}
}
```

 Information about the S3 bucket where the raw data of a report are exported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|false|none|none|
|bucketOwner|object|false|none|none|
|path|object|false|none|none|
|packaging|object|false|none|none|
|encryptionKey|object|false|none|none|
|encryptionDisabled|object|false|none|none|

<h2 id="tocS_ReportGroupStatusType">ReportGroupStatusType</h2>
<!-- backwards compatibility -->
<a id="schemareportgroupstatustype"></a>
<a id="schema_ReportGroupStatusType"></a>
<a id="tocSreportgroupstatustype"></a>
<a id="tocsreportgroupstatustype"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ReportWithRawData">ReportWithRawData</h2>
<!-- backwards compatibility -->
<a id="schemareportwithrawdata"></a>
<a id="schema_ReportWithRawData"></a>
<a id="tocSreportwithrawdata"></a>
<a id="tocsreportwithrawdata"></a>

```json
{
  "reportArn": {},
  "data": {}
}
```

Contains the unmodified data for the report. For more information, see .

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportArn|object|false|none|none|
|data|object|false|none|none|

<h2 id="tocS_ReportPackagingType">ReportPackagingType</h2>
<!-- backwards compatibility -->
<a id="schemareportpackagingtype"></a>
<a id="schema_ReportPackagingType"></a>
<a id="tocSreportpackagingtype"></a>
<a id="tocsreportpackagingtype"></a>

```json
"ZIP"
```

<h2 id="tocS_ReportStatusCounts">ReportStatusCounts</h2>
<!-- backwards compatibility -->
<a id="schemareportstatuscounts"></a>
<a id="schema_ReportStatusCounts"></a>
<a id="tocSreportstatuscounts"></a>
<a id="tocsreportstatuscounts"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[WrapperInt](#schemawrapperint)|false|none|none|

<h2 id="tocS_RetryBuildBatchType">RetryBuildBatchType</h2>
<!-- backwards compatibility -->
<a id="schemaretrybuildbatchtype"></a>
<a id="schema_RetryBuildBatchType"></a>
<a id="tocSretrybuildbatchtype"></a>
<a id="tocsretrybuildbatchtype"></a>

```json
"RETRY_ALL_BUILDS"
```

<h2 id="tocS_SecurityGroupIds">SecurityGroupIds</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupids"></a>
<a id="schema_SecurityGroupIds"></a>
<a id="tocSsecuritygroupids"></a>
<a id="tocssecuritygroupids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SourceAuthType">SourceAuthType</h2>
<!-- backwards compatibility -->
<a id="schemasourceauthtype"></a>
<a id="schema_SourceAuthType"></a>
<a id="tocSsourceauthtype"></a>
<a id="tocssourceauthtype"></a>

```json
"OAUTH"
```

<h2 id="tocS_SourceCredentialsInfo">SourceCredentialsInfo</h2>
<!-- backwards compatibility -->
<a id="schemasourcecredentialsinfo"></a>
<a id="schema_SourceCredentialsInfo"></a>
<a id="tocSsourcecredentialsinfo"></a>
<a id="tocssourcecredentialsinfo"></a>

```json
{
  "arn": {},
  "serverType": {},
  "authType": {}
}
```

 Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|serverType|object|false|none|none|
|authType|object|false|none|none|

<h2 id="tocS_Subnets">Subnets</h2>
<!-- backwards compatibility -->
<a id="schemasubnets"></a>
<a id="schema_Subnets"></a>
<a id="tocSsubnets"></a>
<a id="tocssubnets"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ValueInput">ValueInput</h2>
<!-- backwards compatibility -->
<a id="schemavalueinput"></a>
<a id="schema_ValueInput"></a>
<a id="tocSvalueinput"></a>
<a id="tocsvalueinput"></a>

```json
"string"
```

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "key": {},
  "value": {}
}
```

<p>A tag, consisting of a key and a value.</p> <p>This tag is available for use by Amazon Web Services services that support tags in CodeBuild.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_TestCase">TestCase</h2>
<!-- backwards compatibility -->
<a id="schematestcase"></a>
<a id="schema_TestCase"></a>
<a id="tocStestcase"></a>
<a id="tocstestcase"></a>

```json
{
  "reportArn": {},
  "testRawDataPath": {},
  "prefix": {},
  "name": {},
  "status": {},
  "durationInNanoSeconds": {},
  "message": {},
  "expired": {}
}
```

 Information about a test case created using a framework such as NUnit or Cucumber. A test case might be a unit test or a configuration test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportArn|object|false|none|none|
|testRawDataPath|object|false|none|none|
|prefix|object|false|none|none|
|name|object|false|none|none|
|status|object|false|none|none|
|durationInNanoSeconds|object|false|none|none|
|message|object|false|none|none|
|expired|object|false|none|none|

<h2 id="tocS_WebhookFilterType">WebhookFilterType</h2>
<!-- backwards compatibility -->
<a id="schemawebhookfiltertype"></a>
<a id="schema_WebhookFilterType"></a>
<a id="tocSwebhookfiltertype"></a>
<a id="tocswebhookfiltertype"></a>

```json
"EVENT"
```
