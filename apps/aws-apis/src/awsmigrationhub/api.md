<h1 id="aws-migration-hub">AWS Migration Hub v2017-05-31</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>The AWS Migration Hub API methods help to obtain server and application migration status and integrate your resource-specific migration tool by providing a programmatic interface to Migration Hub.</p> <p>Remember that you must set your AWS Migration Hub home region before you call any of these APIs, or a <code>HomeRegionNotSetException</code> error will be returned. Also, you must make the API calls while in your home region.</p>

Base URLs:

* <a href="http://mgh.us-east-1.amazonaws.com">http://mgh.us-east-1.amazonaws.com</a> - The AWS Migration Hub multi-region endpoint

* <a href="https://mgh.us-east-1.amazonaws.com">https://mgh.us-east-1.amazonaws.com</a> - The AWS Migration Hub multi-region endpoint

* <a href="http://mgh.cn-north-1.amazonaws.com.cn">http://mgh.cn-north-1.amazonaws.com.cn</a> - The AWS Migration Hub endpoint for China (Beijing) and China (Ningxia)

* <a href="https://mgh.cn-north-1.amazonaws.com.cn">https://mgh.cn-north-1.amazonaws.com.cn</a> - The AWS Migration Hub endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/mgh/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-migration-hub-default">Default</h1>

## AssociateCreatedArtifact

<a id="opIdAssociateCreatedArtifact"></a>

> Code samples

```bash
curl 'https://awsmigrationhub.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHub.AssociateCreatedArtifact' \
  -d '{
    "ProgressUpdateStream": {},
    "MigrationTaskName": {},
    "CreatedArtifact": {
      "Name": {},
      "Description": {}
    },
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact`

<p>Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits:</p> <ul> <li> <p>Migration tools can call the <code>AssociateCreatedArtifact</code> operation to indicate which AWS artifact is associated with a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc.</p> </li> </ul>

> Body parameter

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "CreatedArtifact": {
    "Name": {},
    "Description": {}
  },
  "DryRun": {}
}
```

<h3 id="associatecreatedartifact-parameters">Parameters</h3>

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
|body|body|[AssociateCreatedArtifactRequest](#schemaassociatecreatedartifactrequest)|true|none|
|» ProgressUpdateStream|body|object|true|none|
|» MigrationTaskName|body|object|true|none|
|» CreatedArtifact|body|object|true|none|
|» » Name|body|object|true|none|
|» » Description|body|object|false|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHub.AssociateCreatedArtifact|

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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="associatecreatedartifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateCreatedArtifactResult](#schemaassociatecreatedartifactresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|DryRunOperation|[DryRunOperation](#schemadryrunoperation)|
|485|485|UnauthorizedOperation|[UnauthorizedOperation](#schemaunauthorizedoperation)|
|486|486|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateDiscoveredResource

<a id="opIdAssociateDiscoveredResource"></a>

> Code samples

```bash
curl 'https://awsmigrationhub.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHub.AssociateDiscoveredResource' \
  -d '{
    "ProgressUpdateStream": {},
    "MigrationTaskName": {},
    "DiscoveredResource": {
      "ConfigurationId": {},
      "Description": {}
    },
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource`

Associates a discovered resource ID from Application Discovery Service with a migration task.

> Body parameter

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "DiscoveredResource": {
    "ConfigurationId": {},
    "Description": {}
  },
  "DryRun": {}
}
```

<h3 id="associatediscoveredresource-parameters">Parameters</h3>

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
|body|body|[AssociateDiscoveredResourceRequest](#schemaassociatediscoveredresourcerequest)|true|none|
|» ProgressUpdateStream|body|object|true|none|
|» MigrationTaskName|body|object|true|none|
|» DiscoveredResource|body|object|true|none|
|» » ConfigurationId|body|object|true|none|
|» » Description|body|object|false|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHub.AssociateDiscoveredResource|

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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="associatediscoveredresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateDiscoveredResourceResult](#schemaassociatediscoveredresourceresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|DryRunOperation|[DryRunOperation](#schemadryrunoperation)|
|485|485|UnauthorizedOperation|[UnauthorizedOperation](#schemaunauthorizedoperation)|
|486|486|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|487|487|PolicyErrorException|[PolicyErrorException](#schemapolicyerrorexception)|
|488|488|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|489|489|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProgressUpdateStream

<a id="opIdCreateProgressUpdateStream"></a>

> Code samples

```bash
curl 'https://awsmigrationhub.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHub.CreateProgressUpdateStream' \
  -d '{
    "ProgressUpdateStreamName": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream`

Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.

> Body parameter

```json
{
  "ProgressUpdateStreamName": {},
  "DryRun": {}
}
```

<h3 id="createprogressupdatestream-parameters">Parameters</h3>

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
|body|body|[CreateProgressUpdateStreamRequest](#schemacreateprogressupdatestreamrequest)|true|none|
|» ProgressUpdateStreamName|body|object|true|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHub.CreateProgressUpdateStream|

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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="createprogressupdatestream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProgressUpdateStreamResult](#schemacreateprogressupdatestreamresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|DryRunOperation|[DryRunOperation](#schemadryrunoperation)|
|485|485|UnauthorizedOperation|[UnauthorizedOperation](#schemaunauthorizedoperation)|
|486|486|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|487|487|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProgressUpdateStream

<a id="opIdDeleteProgressUpdateStream"></a>

> Code samples

```bash
curl 'https://awsmigrationhub.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHub.DeleteProgressUpdateStream' \
  -d '{
    "ProgressUpdateStreamName": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream`

<p>Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits:</p> <ul> <li> <p>The only parameter needed for <code>DeleteProgressUpdateStream</code> is the stream name (same as a <code>CreateProgressUpdateStream</code> call).</p> </li> <li> <p>The call will return, and a background process will asynchronously delete the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts).</p> </li> <li> <p>If the stream takes time to be deleted, it might still show up on a <code>ListProgressUpdateStreams</code> call.</p> </li> <li> <p> <code>CreateProgressUpdateStream</code>, <code>ImportMigrationTask</code>, <code>NotifyMigrationTaskState</code>, and all Associate[*] APIs related to the tasks belonging to the stream will throw "InvalidInputException" if the stream of the same name is in the process of being deleted.</p> </li> <li> <p>Once the stream and all of its resources are deleted, <code>CreateProgressUpdateStream</code> for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).</p> </li> </ul>

> Body parameter

```json
{
  "ProgressUpdateStreamName": {},
  "DryRun": {}
}
```

<h3 id="deleteprogressupdatestream-parameters">Parameters</h3>

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
|body|body|[DeleteProgressUpdateStreamRequest](#schemadeleteprogressupdatestreamrequest)|true|none|
|» ProgressUpdateStreamName|body|object|true|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHub.DeleteProgressUpdateStream|

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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="deleteprogressupdatestream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProgressUpdateStreamResult](#schemadeleteprogressupdatestreamresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|DryRunOperation|[DryRunOperation](#schemadryrunoperation)|
|485|485|UnauthorizedOperation|[UnauthorizedOperation](#schemaunauthorizedoperation)|
|486|486|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeApplicationState

<a id="opIdDescribeApplicationState"></a>

> Code samples

```bash
curl 'https://awsmigrationhub.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHub.DescribeApplicationState' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHub.DescribeApplicationState' \
  -d '{
    "ApplicationId": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHub.DescribeApplicationState`

Gets the migration status of an application.

> Body parameter

```json
{
  "ApplicationId": {}
}
```

<h3 id="describeapplicationstate-parameters">Parameters</h3>

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
|body|body|[DescribeApplicationStateRequest](#schemadescribeapplicationstaterequest)|true|none|
|» ApplicationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHub.DescribeApplicationState|

> Example responses

> 200 Response

```json
{
  "ApplicationStatus": {},
  "LastUpdatedTime": {}
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="describeapplicationstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeApplicationStateResult](#schemadescribeapplicationstateresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|485|485|PolicyErrorException|[PolicyErrorException](#schemapolicyerrorexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMigrationTask

<a id="opIdDescribeMigrationTask"></a>

> Code samples

```bash
curl 'https://awsmigrationhub.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHub.DescribeMigrationTask' \
  -d '{
    "ProgressUpdateStream": {},
    "MigrationTaskName": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask`

Retrieves a list of all attributes associated with a specific migration task.

> Body parameter

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {}
}
```

<h3 id="describemigrationtask-parameters">Parameters</h3>

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
|body|body|[DescribeMigrationTaskRequest](#schemadescribemigrationtaskrequest)|true|none|
|» ProgressUpdateStream|body|object|true|none|
|» MigrationTaskName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHub.DescribeMigrationTask|

> Example responses

> 200 Response

```json
{
  "MigrationTask": {
    "ProgressUpdateStream": {},
    "MigrationTaskName": {},
    "Task": {
      "Status": {},
      "StatusDetail": {},
      "ProgressPercent": {}
    },
    "UpdateDateTime": {},
    "ResourceAttributeList": {}
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="describemigrationtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMigrationTaskResult](#schemadescribemigrationtaskresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateCreatedArtifact

<a id="opIdDisassociateCreatedArtifact"></a>

> Code samples

```bash
curl 'https://awsmigrationhub.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHub.DisassociateCreatedArtifact' \
  -d '{
    "ProgressUpdateStream": {},
    "MigrationTaskName": {},
    "CreatedArtifactName": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact`

<p>Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits:</p> <ul> <li> <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation to disassociate a created AWS Artifact from a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.</p> </li> </ul>

> Body parameter

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "CreatedArtifactName": {},
  "DryRun": {}
}
```

<h3 id="disassociatecreatedartifact-parameters">Parameters</h3>

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
|body|body|[DisassociateCreatedArtifactRequest](#schemadisassociatecreatedartifactrequest)|true|none|
|» ProgressUpdateStream|body|object|true|none|
|» MigrationTaskName|body|object|true|none|
|» CreatedArtifactName|body|object|true|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHub.DisassociateCreatedArtifact|

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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="disassociatecreatedartifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateCreatedArtifactResult](#schemadisassociatecreatedartifactresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|DryRunOperation|[DryRunOperation](#schemadryrunoperation)|
|485|485|UnauthorizedOperation|[UnauthorizedOperation](#schemaunauthorizedoperation)|
|486|486|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateDiscoveredResource

<a id="opIdDisassociateDiscoveredResource"></a>

> Code samples

```bash
curl 'https://awsmigrationhub.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHub.DisassociateDiscoveredResource' \
  -d '{
    "ProgressUpdateStream": {},
    "MigrationTaskName": {},
    "ConfigurationId": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource`

Disassociate an Application Discovery Service discovered resource from a migration task.

> Body parameter

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "ConfigurationId": {},
  "DryRun": {}
}
```

<h3 id="disassociatediscoveredresource-parameters">Parameters</h3>

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
|body|body|[DisassociateDiscoveredResourceRequest](#schemadisassociatediscoveredresourcerequest)|true|none|
|» ProgressUpdateStream|body|object|true|none|
|» MigrationTaskName|body|object|true|none|
|» ConfigurationId|body|object|true|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHub.DisassociateDiscoveredResource|

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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="disassociatediscoveredresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateDiscoveredResourceResult](#schemadisassociatediscoveredresourceresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|DryRunOperation|[DryRunOperation](#schemadryrunoperation)|
|485|485|UnauthorizedOperation|[UnauthorizedOperation](#schemaunauthorizedoperation)|
|486|486|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportMigrationTask

<a id="opIdImportMigrationTask"></a>

> Code samples

```bash
curl 'https://awsmigrationhub.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHub.ImportMigrationTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHub.ImportMigrationTask' \
  -d '{
    "ProgressUpdateStream": {},
    "MigrationTaskName": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHub.ImportMigrationTask`

<p>Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool.</p> <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as the migration tool must first register the migration task with Migration Hub.</p>

> Body parameter

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "DryRun": {}
}
```

<h3 id="importmigrationtask-parameters">Parameters</h3>

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
|body|body|[ImportMigrationTaskRequest](#schemaimportmigrationtaskrequest)|true|none|
|» ProgressUpdateStream|body|object|true|none|
|» MigrationTaskName|body|object|true|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHub.ImportMigrationTask|

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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="importmigrationtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportMigrationTaskResult](#schemaimportmigrationtaskresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|DryRunOperation|[DryRunOperation](#schemadryrunoperation)|
|485|485|UnauthorizedOperation|[UnauthorizedOperation](#schemaunauthorizedoperation)|
|486|486|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListApplicationStates

<a id="opIdListApplicationStates"></a>

> Code samples

```bash
curl 'https://awsmigrationhub.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHub.ListApplicationStates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHub.ListApplicationStates' \
  -d '{
    "ApplicationIds": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHub.ListApplicationStates`

Lists all the migration statuses for your applications. If you use the optional <code>ApplicationIds</code> parameter, only the migration statuses for those applications will be returned.

> Body parameter

```json
{
  "ApplicationIds": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listapplicationstates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListApplicationStatesRequest](#schemalistapplicationstatesrequest)|true|none|
|» ApplicationIds|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHub.ListApplicationStates|

> Example responses

> 200 Response

```json
{
  "ApplicationStateList": {},
  "NextToken": {}
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listapplicationstates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApplicationStatesResult](#schemalistapplicationstatesresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|485|485|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCreatedArtifacts

<a id="opIdListCreatedArtifacts"></a>

> Code samples

```bash
curl 'https://awsmigrationhub.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHub.ListCreatedArtifacts' \
  -d '{
    "ProgressUpdateStream": {},
    "MigrationTaskName": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts`

<p>Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits:</p> <ul> <li> <p>Gets the list of the created artifacts while migration is taking place.</p> </li> <li> <p>Shows the artifacts created by the migration tool that was associated by the <code>AssociateCreatedArtifact</code> API. </p> </li> <li> <p>Lists created artifacts in a paginated interface. </p> </li> </ul>

> Body parameter

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listcreatedartifacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListCreatedArtifactsRequest](#schemalistcreatedartifactsrequest)|true|none|
|» ProgressUpdateStream|body|object|true|none|
|» MigrationTaskName|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHub.ListCreatedArtifacts|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "CreatedArtifactList": {}
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listcreatedartifacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCreatedArtifactsResult](#schemalistcreatedartifactsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDiscoveredResources

<a id="opIdListDiscoveredResources"></a>

> Code samples

```bash
curl 'https://awsmigrationhub.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHub.ListDiscoveredResources' \
  -d '{
    "ProgressUpdateStream": {},
    "MigrationTaskName": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources`

Lists discovered resources associated with the given <code>MigrationTask</code>.

> Body parameter

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listdiscoveredresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListDiscoveredResourcesRequest](#schemalistdiscoveredresourcesrequest)|true|none|
|» ProgressUpdateStream|body|object|true|none|
|» MigrationTaskName|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHub.ListDiscoveredResources|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "DiscoveredResourceList": {}
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listdiscoveredresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDiscoveredResourcesResult](#schemalistdiscoveredresourcesresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMigrationTasks

<a id="opIdListMigrationTasks"></a>

> Code samples

```bash
curl 'https://awsmigrationhub.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHub.ListMigrationTasks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHub.ListMigrationTasks' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "ResourceName": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHub.ListMigrationTasks`

<p>Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits:</p> <ul> <li> <p>Can show a summary list of the most recent migration tasks.</p> </li> <li> <p>Can show a summary list of migration tasks associated with a given discovered resource.</p> </li> <li> <p>Lists migration tasks in a paginated interface.</p> </li> </ul>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "ResourceName": {}
}
```

<h3 id="listmigrationtasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListMigrationTasksRequest](#schemalistmigrationtasksrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» ResourceName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHub.ListMigrationTasks|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "MigrationTaskSummaryList": {}
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="listmigrationtasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMigrationTasksResult](#schemalistmigrationtasksresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|485|485|PolicyErrorException|[PolicyErrorException](#schemapolicyerrorexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProgressUpdateStreams

<a id="opIdListProgressUpdateStreams"></a>

> Code samples

```bash
curl 'https://awsmigrationhub.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHub.ListProgressUpdateStreams' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams`

Lists progress update streams associated with the user account making this call.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listprogressupdatestreams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListProgressUpdateStreamsRequest](#schemalistprogressupdatestreamsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHub.ListProgressUpdateStreams|

> Example responses

> 200 Response

```json
{
  "ProgressUpdateStreamSummaryList": {},
  "NextToken": {}
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listprogressupdatestreams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProgressUpdateStreamsResult](#schemalistprogressupdatestreamsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|485|485|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## NotifyApplicationState

<a id="opIdNotifyApplicationState"></a>

> Code samples

```bash
curl 'https://awsmigrationhub.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHub.NotifyApplicationState' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHub.NotifyApplicationState' \
  -d '{
    "ApplicationId": {},
    "Status": {},
    "UpdateDateTime": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHub.NotifyApplicationState`

Sets the migration state of an application. For a given application identified by the value passed to <code>ApplicationId</code>, its status is set or updated by passing one of three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS | COMPLETED</code>.

> Body parameter

```json
{
  "ApplicationId": {},
  "Status": {},
  "UpdateDateTime": {},
  "DryRun": {}
}
```

<h3 id="notifyapplicationstate-parameters">Parameters</h3>

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
|body|body|[NotifyApplicationStateRequest](#schemanotifyapplicationstaterequest)|true|none|
|» ApplicationId|body|object|true|none|
|» Status|body|object|true|none|
|» UpdateDateTime|body|object|false|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHub.NotifyApplicationState|

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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="notifyapplicationstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NotifyApplicationStateResult](#schemanotifyapplicationstateresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|DryRunOperation|[DryRunOperation](#schemadryrunoperation)|
|485|485|UnauthorizedOperation|[UnauthorizedOperation](#schemaunauthorizedoperation)|
|486|486|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|487|487|PolicyErrorException|[PolicyErrorException](#schemapolicyerrorexception)|
|488|488|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|489|489|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## NotifyMigrationTaskState

<a id="opIdNotifyMigrationTaskState"></a>

> Code samples

```bash
curl 'https://awsmigrationhub.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHub.NotifyMigrationTaskState' \
  -d '{
    "ProgressUpdateStream": {},
    "MigrationTaskName": {},
    "Task": {
      "Status": {},
      "StatusDetail": {},
      "ProgressPercent": {}
    },
    "UpdateDateTime": {},
    "NextUpdateSeconds": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState`

<p>Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits:</p> <ul> <li> <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share the latest progress and status.</p> </li> <li> <p> <code>MigrationTaskName</code> is used for addressing updates to the correct target.</p> </li> <li> <p> <code>ProgressUpdateStream</code> is used for access control and to provide a namespace for each migration tool.</p> </li> </ul>

> Body parameter

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "Task": {
    "Status": {},
    "StatusDetail": {},
    "ProgressPercent": {}
  },
  "UpdateDateTime": {},
  "NextUpdateSeconds": {},
  "DryRun": {}
}
```

<h3 id="notifymigrationtaskstate-parameters">Parameters</h3>

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
|body|body|[NotifyMigrationTaskStateRequest](#schemanotifymigrationtaskstaterequest)|true|none|
|» ProgressUpdateStream|body|object|true|none|
|» MigrationTaskName|body|object|true|none|
|» Task|body|object|true|none|
|» » Status|body|object|true|none|
|» » StatusDetail|body|object|false|none|
|» » ProgressPercent|body|object|false|none|
|» UpdateDateTime|body|object|true|none|
|» NextUpdateSeconds|body|object|true|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHub.NotifyMigrationTaskState|

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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="notifymigrationtaskstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NotifyMigrationTaskStateResult](#schemanotifymigrationtaskstateresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|DryRunOperation|[DryRunOperation](#schemadryrunoperation)|
|485|485|UnauthorizedOperation|[UnauthorizedOperation](#schemaunauthorizedoperation)|
|486|486|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResourceAttributes

<a id="opIdPutResourceAttributes"></a>

> Code samples

```bash
curl 'https://awsmigrationhub.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHub.PutResourceAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHub.PutResourceAttributes' \
  -d '{
    "ProgressUpdateStream": {},
    "MigrationTaskName": {},
    "ResourceAttributeList": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHub.PutResourceAttributes`

<p>Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service repository. This association occurs asynchronously after <code>PutResourceAttributes</code> returns.</p> <important> <ul> <li> <p>Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to <i>add</i> an IP address, it will then be required to call it with <i>both</i> the IP and MAC addresses to prevent overriding the MAC address.</p> </li> <li> <p>Note the instructions regarding the special use case of the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList"> <code>ResourceAttributeList</code> </a> parameter when specifying any "VM" related value.</p> </li> </ul> </important> <note> <p>Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call <code>ListDiscoveredResources</code>.</p> </note>

> Body parameter

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "ResourceAttributeList": {},
  "DryRun": {}
}
```

<h3 id="putresourceattributes-parameters">Parameters</h3>

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
|body|body|[PutResourceAttributesRequest](#schemaputresourceattributesrequest)|true|none|
|» ProgressUpdateStream|body|object|true|none|
|» MigrationTaskName|body|object|true|none|
|» ResourceAttributeList|body|object|true|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHub.PutResourceAttributes|

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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="putresourceattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutResourceAttributesResult](#schemaputresourceattributesresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|DryRunOperation|[DryRunOperation](#schemadryrunoperation)|
|485|485|UnauthorizedOperation|[UnauthorizedOperation](#schemaunauthorizedoperation)|
|486|486|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateCreatedArtifactResult">AssociateCreatedArtifactResult</h2>
<!-- backwards compatibility -->
<a id="schemaassociatecreatedartifactresult"></a>
<a id="schema_AssociateCreatedArtifactResult"></a>
<a id="tocSassociatecreatedartifactresult"></a>
<a id="tocsassociatecreatedartifactresult"></a>

```json
{}
```

<h2 id="tocS_AssociateCreatedArtifactRequest">AssociateCreatedArtifactRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatecreatedartifactrequest"></a>
<a id="schema_AssociateCreatedArtifactRequest"></a>
<a id="tocSassociatecreatedartifactrequest"></a>
<a id="tocsassociatecreatedartifactrequest"></a>

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "CreatedArtifact": {
    "Name": {},
    "Description": {}
  },
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressUpdateStream|object|true|none|none|
|MigrationTaskName|object|true|none|none|
|CreatedArtifact|object|true|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_InternalServerError">InternalServerError</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererror"></a>
<a id="schema_InternalServerError"></a>
<a id="tocSinternalservererror"></a>
<a id="tocsinternalservererror"></a>

```json
null
```

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

```json
null
```

<h2 id="tocS_DryRunOperation">DryRunOperation</h2>
<!-- backwards compatibility -->
<a id="schemadryrunoperation"></a>
<a id="schema_DryRunOperation"></a>
<a id="tocSdryrunoperation"></a>
<a id="tocsdryrunoperation"></a>

```json
null
```

<h2 id="tocS_UnauthorizedOperation">UnauthorizedOperation</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedoperation"></a>
<a id="schema_UnauthorizedOperation"></a>
<a id="tocSunauthorizedoperation"></a>
<a id="tocsunauthorizedoperation"></a>

```json
null
```

<h2 id="tocS_InvalidInputException">InvalidInputException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinputexception"></a>
<a id="schema_InvalidInputException"></a>
<a id="tocSinvalidinputexception"></a>
<a id="tocsinvalidinputexception"></a>

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

<h2 id="tocS_HomeRegionNotSetException">HomeRegionNotSetException</h2>
<!-- backwards compatibility -->
<a id="schemahomeregionnotsetexception"></a>
<a id="schema_HomeRegionNotSetException"></a>
<a id="tocShomeregionnotsetexception"></a>
<a id="tocshomeregionnotsetexception"></a>

```json
null
```

<h2 id="tocS_AssociateDiscoveredResourceResult">AssociateDiscoveredResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemaassociatediscoveredresourceresult"></a>
<a id="schema_AssociateDiscoveredResourceResult"></a>
<a id="tocSassociatediscoveredresourceresult"></a>
<a id="tocsassociatediscoveredresourceresult"></a>

```json
{}
```

<h2 id="tocS_AssociateDiscoveredResourceRequest">AssociateDiscoveredResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatediscoveredresourcerequest"></a>
<a id="schema_AssociateDiscoveredResourceRequest"></a>
<a id="tocSassociatediscoveredresourcerequest"></a>
<a id="tocsassociatediscoveredresourcerequest"></a>

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "DiscoveredResource": {
    "ConfigurationId": {},
    "Description": {}
  },
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressUpdateStream|object|true|none|none|
|MigrationTaskName|object|true|none|none|
|DiscoveredResource|object|true|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_PolicyErrorException">PolicyErrorException</h2>
<!-- backwards compatibility -->
<a id="schemapolicyerrorexception"></a>
<a id="schema_PolicyErrorException"></a>
<a id="tocSpolicyerrorexception"></a>
<a id="tocspolicyerrorexception"></a>

```json
null
```

<h2 id="tocS_CreateProgressUpdateStreamResult">CreateProgressUpdateStreamResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateprogressupdatestreamresult"></a>
<a id="schema_CreateProgressUpdateStreamResult"></a>
<a id="tocScreateprogressupdatestreamresult"></a>
<a id="tocscreateprogressupdatestreamresult"></a>

```json
{}
```

<h2 id="tocS_CreateProgressUpdateStreamRequest">CreateProgressUpdateStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprogressupdatestreamrequest"></a>
<a id="schema_CreateProgressUpdateStreamRequest"></a>
<a id="tocScreateprogressupdatestreamrequest"></a>
<a id="tocscreateprogressupdatestreamrequest"></a>

```json
{
  "ProgressUpdateStreamName": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressUpdateStreamName|object|true|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_DeleteProgressUpdateStreamResult">DeleteProgressUpdateStreamResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprogressupdatestreamresult"></a>
<a id="schema_DeleteProgressUpdateStreamResult"></a>
<a id="tocSdeleteprogressupdatestreamresult"></a>
<a id="tocsdeleteprogressupdatestreamresult"></a>

```json
{}
```

<h2 id="tocS_DeleteProgressUpdateStreamRequest">DeleteProgressUpdateStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprogressupdatestreamrequest"></a>
<a id="schema_DeleteProgressUpdateStreamRequest"></a>
<a id="tocSdeleteprogressupdatestreamrequest"></a>
<a id="tocsdeleteprogressupdatestreamrequest"></a>

```json
{
  "ProgressUpdateStreamName": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressUpdateStreamName|object|true|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_DescribeApplicationStateResult">DescribeApplicationStateResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationstateresult"></a>
<a id="schema_DescribeApplicationStateResult"></a>
<a id="tocSdescribeapplicationstateresult"></a>
<a id="tocsdescribeapplicationstateresult"></a>

```json
{
  "ApplicationStatus": {},
  "LastUpdatedTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationStatus|object|false|none|none|
|LastUpdatedTime|object|false|none|none|

<h2 id="tocS_DescribeApplicationStateRequest">DescribeApplicationStateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationstaterequest"></a>
<a id="schema_DescribeApplicationStateRequest"></a>
<a id="tocSdescribeapplicationstaterequest"></a>
<a id="tocsdescribeapplicationstaterequest"></a>

```json
{
  "ApplicationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationId|object|true|none|none|

<h2 id="tocS_DescribeMigrationTaskResult">DescribeMigrationTaskResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribemigrationtaskresult"></a>
<a id="schema_DescribeMigrationTaskResult"></a>
<a id="tocSdescribemigrationtaskresult"></a>
<a id="tocsdescribemigrationtaskresult"></a>

```json
{
  "MigrationTask": {
    "ProgressUpdateStream": {},
    "MigrationTaskName": {},
    "Task": {
      "Status": {},
      "StatusDetail": {},
      "ProgressPercent": {}
    },
    "UpdateDateTime": {},
    "ResourceAttributeList": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MigrationTask|object|false|none|none|

<h2 id="tocS_DescribeMigrationTaskRequest">DescribeMigrationTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemigrationtaskrequest"></a>
<a id="schema_DescribeMigrationTaskRequest"></a>
<a id="tocSdescribemigrationtaskrequest"></a>
<a id="tocsdescribemigrationtaskrequest"></a>

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressUpdateStream|object|true|none|none|
|MigrationTaskName|object|true|none|none|

<h2 id="tocS_DisassociateCreatedArtifactResult">DisassociateCreatedArtifactResult</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatecreatedartifactresult"></a>
<a id="schema_DisassociateCreatedArtifactResult"></a>
<a id="tocSdisassociatecreatedartifactresult"></a>
<a id="tocsdisassociatecreatedartifactresult"></a>

```json
{}
```

<h2 id="tocS_DisassociateCreatedArtifactRequest">DisassociateCreatedArtifactRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatecreatedartifactrequest"></a>
<a id="schema_DisassociateCreatedArtifactRequest"></a>
<a id="tocSdisassociatecreatedartifactrequest"></a>
<a id="tocsdisassociatecreatedartifactrequest"></a>

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "CreatedArtifactName": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressUpdateStream|object|true|none|none|
|MigrationTaskName|object|true|none|none|
|CreatedArtifactName|object|true|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_DisassociateDiscoveredResourceResult">DisassociateDiscoveredResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatediscoveredresourceresult"></a>
<a id="schema_DisassociateDiscoveredResourceResult"></a>
<a id="tocSdisassociatediscoveredresourceresult"></a>
<a id="tocsdisassociatediscoveredresourceresult"></a>

```json
{}
```

<h2 id="tocS_DisassociateDiscoveredResourceRequest">DisassociateDiscoveredResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatediscoveredresourcerequest"></a>
<a id="schema_DisassociateDiscoveredResourceRequest"></a>
<a id="tocSdisassociatediscoveredresourcerequest"></a>
<a id="tocsdisassociatediscoveredresourcerequest"></a>

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "ConfigurationId": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressUpdateStream|object|true|none|none|
|MigrationTaskName|object|true|none|none|
|ConfigurationId|object|true|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_ImportMigrationTaskResult">ImportMigrationTaskResult</h2>
<!-- backwards compatibility -->
<a id="schemaimportmigrationtaskresult"></a>
<a id="schema_ImportMigrationTaskResult"></a>
<a id="tocSimportmigrationtaskresult"></a>
<a id="tocsimportmigrationtaskresult"></a>

```json
{}
```

<h2 id="tocS_ImportMigrationTaskRequest">ImportMigrationTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportmigrationtaskrequest"></a>
<a id="schema_ImportMigrationTaskRequest"></a>
<a id="tocSimportmigrationtaskrequest"></a>
<a id="tocsimportmigrationtaskrequest"></a>

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressUpdateStream|object|true|none|none|
|MigrationTaskName|object|true|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_ListApplicationStatesResult">ListApplicationStatesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationstatesresult"></a>
<a id="schema_ListApplicationStatesResult"></a>
<a id="tocSlistapplicationstatesresult"></a>
<a id="tocslistapplicationstatesresult"></a>

```json
{
  "ApplicationStateList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationStateList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListApplicationStatesRequest">ListApplicationStatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationstatesrequest"></a>
<a id="schema_ListApplicationStatesRequest"></a>
<a id="tocSlistapplicationstatesrequest"></a>
<a id="tocslistapplicationstatesrequest"></a>

```json
{
  "ApplicationIds": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationIds|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListCreatedArtifactsResult">ListCreatedArtifactsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistcreatedartifactsresult"></a>
<a id="schema_ListCreatedArtifactsResult"></a>
<a id="tocSlistcreatedartifactsresult"></a>
<a id="tocslistcreatedartifactsresult"></a>

```json
{
  "NextToken": {},
  "CreatedArtifactList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|CreatedArtifactList|object|false|none|none|

<h2 id="tocS_ListCreatedArtifactsRequest">ListCreatedArtifactsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcreatedartifactsrequest"></a>
<a id="schema_ListCreatedArtifactsRequest"></a>
<a id="tocSlistcreatedartifactsrequest"></a>
<a id="tocslistcreatedartifactsrequest"></a>

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressUpdateStream|object|true|none|none|
|MigrationTaskName|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListDiscoveredResourcesResult">ListDiscoveredResourcesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistdiscoveredresourcesresult"></a>
<a id="schema_ListDiscoveredResourcesResult"></a>
<a id="tocSlistdiscoveredresourcesresult"></a>
<a id="tocslistdiscoveredresourcesresult"></a>

```json
{
  "NextToken": {},
  "DiscoveredResourceList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|DiscoveredResourceList|object|false|none|none|

<h2 id="tocS_ListDiscoveredResourcesRequest">ListDiscoveredResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdiscoveredresourcesrequest"></a>
<a id="schema_ListDiscoveredResourcesRequest"></a>
<a id="tocSlistdiscoveredresourcesrequest"></a>
<a id="tocslistdiscoveredresourcesrequest"></a>

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressUpdateStream|object|true|none|none|
|MigrationTaskName|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListMigrationTasksResult">ListMigrationTasksResult</h2>
<!-- backwards compatibility -->
<a id="schemalistmigrationtasksresult"></a>
<a id="schema_ListMigrationTasksResult"></a>
<a id="tocSlistmigrationtasksresult"></a>
<a id="tocslistmigrationtasksresult"></a>

```json
{
  "NextToken": {},
  "MigrationTaskSummaryList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MigrationTaskSummaryList|object|false|none|none|

<h2 id="tocS_ListMigrationTasksRequest">ListMigrationTasksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmigrationtasksrequest"></a>
<a id="schema_ListMigrationTasksRequest"></a>
<a id="tocSlistmigrationtasksrequest"></a>
<a id="tocslistmigrationtasksrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "ResourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|ResourceName|object|false|none|none|

<h2 id="tocS_ListProgressUpdateStreamsResult">ListProgressUpdateStreamsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistprogressupdatestreamsresult"></a>
<a id="schema_ListProgressUpdateStreamsResult"></a>
<a id="tocSlistprogressupdatestreamsresult"></a>
<a id="tocslistprogressupdatestreamsresult"></a>

```json
{
  "ProgressUpdateStreamSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressUpdateStreamSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListProgressUpdateStreamsRequest">ListProgressUpdateStreamsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprogressupdatestreamsrequest"></a>
<a id="schema_ListProgressUpdateStreamsRequest"></a>
<a id="tocSlistprogressupdatestreamsrequest"></a>
<a id="tocslistprogressupdatestreamsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_NotifyApplicationStateResult">NotifyApplicationStateResult</h2>
<!-- backwards compatibility -->
<a id="schemanotifyapplicationstateresult"></a>
<a id="schema_NotifyApplicationStateResult"></a>
<a id="tocSnotifyapplicationstateresult"></a>
<a id="tocsnotifyapplicationstateresult"></a>

```json
{}
```

<h2 id="tocS_NotifyApplicationStateRequest">NotifyApplicationStateRequest</h2>
<!-- backwards compatibility -->
<a id="schemanotifyapplicationstaterequest"></a>
<a id="schema_NotifyApplicationStateRequest"></a>
<a id="tocSnotifyapplicationstaterequest"></a>
<a id="tocsnotifyapplicationstaterequest"></a>

```json
{
  "ApplicationId": {},
  "Status": {},
  "UpdateDateTime": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationId|object|true|none|none|
|Status|object|true|none|none|
|UpdateDateTime|object|false|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_NotifyMigrationTaskStateResult">NotifyMigrationTaskStateResult</h2>
<!-- backwards compatibility -->
<a id="schemanotifymigrationtaskstateresult"></a>
<a id="schema_NotifyMigrationTaskStateResult"></a>
<a id="tocSnotifymigrationtaskstateresult"></a>
<a id="tocsnotifymigrationtaskstateresult"></a>

```json
{}
```

<h2 id="tocS_NotifyMigrationTaskStateRequest">NotifyMigrationTaskStateRequest</h2>
<!-- backwards compatibility -->
<a id="schemanotifymigrationtaskstaterequest"></a>
<a id="schema_NotifyMigrationTaskStateRequest"></a>
<a id="tocSnotifymigrationtaskstaterequest"></a>
<a id="tocsnotifymigrationtaskstaterequest"></a>

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "Task": {
    "Status": {},
    "StatusDetail": {},
    "ProgressPercent": {}
  },
  "UpdateDateTime": {},
  "NextUpdateSeconds": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressUpdateStream|object|true|none|none|
|MigrationTaskName|object|true|none|none|
|Task|object|true|none|none|
|UpdateDateTime|object|true|none|none|
|NextUpdateSeconds|object|true|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_PutResourceAttributesResult">PutResourceAttributesResult</h2>
<!-- backwards compatibility -->
<a id="schemaputresourceattributesresult"></a>
<a id="schema_PutResourceAttributesResult"></a>
<a id="tocSputresourceattributesresult"></a>
<a id="tocsputresourceattributesresult"></a>

```json
{}
```

<h2 id="tocS_PutResourceAttributesRequest">PutResourceAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputresourceattributesrequest"></a>
<a id="schema_PutResourceAttributesRequest"></a>
<a id="tocSputresourceattributesrequest"></a>
<a id="tocsputresourceattributesrequest"></a>

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "ResourceAttributeList": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressUpdateStream|object|true|none|none|
|MigrationTaskName|object|true|none|none|
|ResourceAttributeList|object|true|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_ApplicationId">ApplicationId</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationid"></a>
<a id="schema_ApplicationId"></a>
<a id="tocSapplicationid"></a>
<a id="tocsapplicationid"></a>

```json
"string"
```

<h2 id="tocS_ApplicationIds">ApplicationIds</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationids"></a>
<a id="schema_ApplicationIds"></a>
<a id="tocSapplicationids"></a>
<a id="tocsapplicationids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ApplicationStatus">ApplicationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationstatus"></a>
<a id="schema_ApplicationStatus"></a>
<a id="tocSapplicationstatus"></a>
<a id="tocsapplicationstatus"></a>

```json
"NOT_STARTED"
```

<h2 id="tocS_UpdateDateTime">UpdateDateTime</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatetime"></a>
<a id="schema_UpdateDateTime"></a>
<a id="tocSupdatedatetime"></a>
<a id="tocsupdatedatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ApplicationState">ApplicationState</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationstate"></a>
<a id="schema_ApplicationState"></a>
<a id="tocSapplicationstate"></a>
<a id="tocsapplicationstate"></a>

```json
{
  "ApplicationId": {},
  "ApplicationStatus": {},
  "LastUpdatedTime": {}
}
```

The state of an application discovered through Migration Hub import, the AWS Agentless Discovery Connector, or the AWS Application Discovery Agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationId|object|false|none|none|
|ApplicationStatus|object|false|none|none|
|LastUpdatedTime|object|false|none|none|

<h2 id="tocS_ApplicationStateList">ApplicationStateList</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationstatelist"></a>
<a id="schema_ApplicationStateList"></a>
<a id="tocSapplicationstatelist"></a>
<a id="tocsapplicationstatelist"></a>

```json
[
  {
    "ApplicationId": {},
    "ApplicationStatus": {},
    "LastUpdatedTime": {}
  }
]
```

<h2 id="tocS_ProgressUpdateStream">ProgressUpdateStream</h2>
<!-- backwards compatibility -->
<a id="schemaprogressupdatestream"></a>
<a id="schema_ProgressUpdateStream"></a>
<a id="tocSprogressupdatestream"></a>
<a id="tocsprogressupdatestream"></a>

```json
"string"
```

<h2 id="tocS_MigrationTaskName">MigrationTaskName</h2>
<!-- backwards compatibility -->
<a id="schemamigrationtaskname"></a>
<a id="schema_MigrationTaskName"></a>
<a id="tocSmigrationtaskname"></a>
<a id="tocsmigrationtaskname"></a>

```json
"string"
```

<h2 id="tocS_CreatedArtifact">CreatedArtifact</h2>
<!-- backwards compatibility -->
<a id="schemacreatedartifact"></a>
<a id="schema_CreatedArtifact"></a>
<a id="tocScreatedartifact"></a>
<a id="tocscreatedartifact"></a>

```json
{
  "Name": {},
  "Description": {}
}
```

An ARN of the AWS cloud resource target receiving the migration (e.g., AMI, EC2 instance, RDS instance, etc.).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|

<h2 id="tocS_DryRun">DryRun</h2>
<!-- backwards compatibility -->
<a id="schemadryrun"></a>
<a id="schema_DryRun"></a>
<a id="tocSdryrun"></a>
<a id="tocsdryrun"></a>

```json
true
```

<h2 id="tocS_DiscoveredResource">DiscoveredResource</h2>
<!-- backwards compatibility -->
<a id="schemadiscoveredresource"></a>
<a id="schema_DiscoveredResource"></a>
<a id="tocSdiscoveredresource"></a>
<a id="tocsdiscoveredresource"></a>

```json
{
  "ConfigurationId": {},
  "Description": {}
}
```

Object representing the on-premises resource being migrated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationId|object|true|none|none|
|Description|object|false|none|none|

<h2 id="tocS_ConfigurationId">ConfigurationId</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationid"></a>
<a id="schema_ConfigurationId"></a>
<a id="tocSconfigurationid"></a>
<a id="tocsconfigurationid"></a>

```json
"string"
```

<h2 id="tocS_CreatedArtifactName">CreatedArtifactName</h2>
<!-- backwards compatibility -->
<a id="schemacreatedartifactname"></a>
<a id="schema_CreatedArtifactName"></a>
<a id="tocScreatedartifactname"></a>
<a id="tocscreatedartifactname"></a>

```json
"string"
```

<h2 id="tocS_CreatedArtifactDescription">CreatedArtifactDescription</h2>
<!-- backwards compatibility -->
<a id="schemacreatedartifactdescription"></a>
<a id="schema_CreatedArtifactDescription"></a>
<a id="tocScreatedartifactdescription"></a>
<a id="tocscreatedartifactdescription"></a>

```json
"string"
```

<h2 id="tocS_CreatedArtifactList">CreatedArtifactList</h2>
<!-- backwards compatibility -->
<a id="schemacreatedartifactlist"></a>
<a id="schema_CreatedArtifactList"></a>
<a id="tocScreatedartifactlist"></a>
<a id="tocscreatedartifactlist"></a>

```json
[
  {
    "Name": {},
    "Description": {}
  }
]
```

<h2 id="tocS_MigrationTask">MigrationTask</h2>
<!-- backwards compatibility -->
<a id="schemamigrationtask"></a>
<a id="schema_MigrationTask"></a>
<a id="tocSmigrationtask"></a>
<a id="tocsmigrationtask"></a>

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "Task": {
    "Status": {},
    "StatusDetail": {},
    "ProgressPercent": {}
  },
  "UpdateDateTime": {},
  "ResourceAttributeList": {}
}
```

Represents a migration task in a migration tool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressUpdateStream|object|false|none|none|
|MigrationTaskName|object|false|none|none|
|Task|object|false|none|none|
|UpdateDateTime|object|false|none|none|
|ResourceAttributeList|object|false|none|none|

<h2 id="tocS_DiscoveredResourceDescription">DiscoveredResourceDescription</h2>
<!-- backwards compatibility -->
<a id="schemadiscoveredresourcedescription"></a>
<a id="schema_DiscoveredResourceDescription"></a>
<a id="tocSdiscoveredresourcedescription"></a>
<a id="tocsdiscoveredresourcedescription"></a>

```json
"string"
```

<h2 id="tocS_DiscoveredResourceList">DiscoveredResourceList</h2>
<!-- backwards compatibility -->
<a id="schemadiscoveredresourcelist"></a>
<a id="schema_DiscoveredResourceList"></a>
<a id="tocSdiscoveredresourcelist"></a>
<a id="tocsdiscoveredresourcelist"></a>

```json
[
  {
    "ConfigurationId": {},
    "Description": {}
  }
]
```

<h2 id="tocS_ResourceAttribute">ResourceAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaresourceattribute"></a>
<a id="schema_ResourceAttribute"></a>
<a id="tocSresourceattribute"></a>
<a id="tocsresourceattribute"></a>

```json
{
  "Type": {},
  "Value": {}
}
```

<p>Attribute associated with a resource.</p> <p>Note the corresponding format required per type listed below:</p> <dl> <dt>IPV4</dt> <dd> <p> <code>x.x.x.x</code> </p> <p> <i>where x is an integer in the range [0,255]</i> </p> </dd> <dt>IPV6</dt> <dd> <p> <code>y : y : y : y : y : y : y : y</code> </p> <p> <i>where y is a hexadecimal between 0 and FFFF. [0, FFFF]</i> </p> </dd> <dt>MAC_ADDRESS</dt> <dd> <p> <code>^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$</code> </p> </dd> <dt>FQDN</dt> <dd> <p> <code>^[^&lt;&gt;{}\\\\/?,=\\p{Cntrl}]{1,256}$</code> </p> </dd> </dl>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_LatestResourceAttributeList">LatestResourceAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemalatestresourceattributelist"></a>
<a id="schema_LatestResourceAttributeList"></a>
<a id="tocSlatestresourceattributelist"></a>
<a id="tocslatestresourceattributelist"></a>

```json
[
  {
    "Type": {},
    "Value": {}
  }
]
```

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"string"
```

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_MaxResultsCreatedArtifacts">MaxResultsCreatedArtifacts</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultscreatedartifacts"></a>
<a id="schema_MaxResultsCreatedArtifacts"></a>
<a id="tocSmaxresultscreatedartifacts"></a>
<a id="tocsmaxresultscreatedartifacts"></a>

```json
1
```

<h2 id="tocS_MaxResultsResources">MaxResultsResources</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsresources"></a>
<a id="schema_MaxResultsResources"></a>
<a id="tocSmaxresultsresources"></a>
<a id="tocsmaxresultsresources"></a>

```json
1
```

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"string"
```

<h2 id="tocS_MigrationTaskSummaryList">MigrationTaskSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemamigrationtasksummarylist"></a>
<a id="schema_MigrationTaskSummaryList"></a>
<a id="tocSmigrationtasksummarylist"></a>
<a id="tocsmigrationtasksummarylist"></a>

```json
[
  {
    "ProgressUpdateStream": {},
    "MigrationTaskName": {},
    "Status": {},
    "ProgressPercent": {},
    "StatusDetail": {},
    "UpdateDateTime": {}
  }
]
```

<h2 id="tocS_ProgressUpdateStreamSummaryList">ProgressUpdateStreamSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaprogressupdatestreamsummarylist"></a>
<a id="schema_ProgressUpdateStreamSummaryList"></a>
<a id="tocSprogressupdatestreamsummarylist"></a>
<a id="tocsprogressupdatestreamsummarylist"></a>

```json
[
  {
    "ProgressUpdateStreamName": {}
  }
]
```

<h2 id="tocS_Task">Task</h2>
<!-- backwards compatibility -->
<a id="schematask"></a>
<a id="schema_Task"></a>
<a id="tocStask"></a>
<a id="tocstask"></a>

```json
{
  "Status": {},
  "StatusDetail": {},
  "ProgressPercent": {}
}
```

Task object encapsulating task information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|
|StatusDetail|object|false|none|none|
|ProgressPercent|object|false|none|none|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"NOT_STARTED"
```

<h2 id="tocS_ProgressPercent">ProgressPercent</h2>
<!-- backwards compatibility -->
<a id="schemaprogresspercent"></a>
<a id="schema_ProgressPercent"></a>
<a id="tocSprogresspercent"></a>
<a id="tocsprogresspercent"></a>

```json
0
```

<h2 id="tocS_StatusDetail">StatusDetail</h2>
<!-- backwards compatibility -->
<a id="schemastatusdetail"></a>
<a id="schema_StatusDetail"></a>
<a id="tocSstatusdetail"></a>
<a id="tocsstatusdetail"></a>

```json
"string"
```

<h2 id="tocS_MigrationTaskSummary">MigrationTaskSummary</h2>
<!-- backwards compatibility -->
<a id="schemamigrationtasksummary"></a>
<a id="schema_MigrationTaskSummary"></a>
<a id="tocSmigrationtasksummary"></a>
<a id="tocsmigrationtasksummary"></a>

```json
{
  "ProgressUpdateStream": {},
  "MigrationTaskName": {},
  "Status": {},
  "ProgressPercent": {},
  "StatusDetail": {},
  "UpdateDateTime": {}
}
```

MigrationTaskSummary includes <code>MigrationTaskName</code>, <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>, and <code>UpdateDateTime</code> for each task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressUpdateStream|object|false|none|none|
|MigrationTaskName|object|false|none|none|
|Status|object|false|none|none|
|ProgressPercent|object|false|none|none|
|StatusDetail|object|false|none|none|
|UpdateDateTime|object|false|none|none|

<h2 id="tocS_NextUpdateSeconds">NextUpdateSeconds</h2>
<!-- backwards compatibility -->
<a id="schemanextupdateseconds"></a>
<a id="schema_NextUpdateSeconds"></a>
<a id="tocSnextupdateseconds"></a>
<a id="tocsnextupdateseconds"></a>

```json
0
```

<h2 id="tocS_ProgressUpdateStreamSummary">ProgressUpdateStreamSummary</h2>
<!-- backwards compatibility -->
<a id="schemaprogressupdatestreamsummary"></a>
<a id="schema_ProgressUpdateStreamSummary"></a>
<a id="tocSprogressupdatestreamsummary"></a>
<a id="tocsprogressupdatestreamsummary"></a>

```json
{
  "ProgressUpdateStreamName": {}
}
```

Summary of the AWS resource used for access control that is implicitly linked to your AWS account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressUpdateStreamName|object|false|none|none|

<h2 id="tocS_ResourceAttributeList">ResourceAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemaresourceattributelist"></a>
<a id="schema_ResourceAttributeList"></a>
<a id="tocSresourceattributelist"></a>
<a id="tocsresourceattributelist"></a>

```json
[
  {
    "Type": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ResourceAttributeType">ResourceAttributeType</h2>
<!-- backwards compatibility -->
<a id="schemaresourceattributetype"></a>
<a id="schema_ResourceAttributeType"></a>
<a id="tocSresourceattributetype"></a>
<a id="tocsresourceattributetype"></a>

```json
"IPV4_ADDRESS"
```

<h2 id="tocS_ResourceAttributeValue">ResourceAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaresourceattributevalue"></a>
<a id="schema_ResourceAttributeValue"></a>
<a id="tocSresourceattributevalue"></a>
<a id="tocsresourceattributevalue"></a>

```json
"string"
```
