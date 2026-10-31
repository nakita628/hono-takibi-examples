<h1 id="aws-codedeploy">AWS CodeDeploy v2014-10-06</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances, on-premises instances running in your own facility, serverless Lambda functions, or applications in an Amazon ECS service.</p> <p>You can deploy a nearly unlimited variety of application content, such as an updated Lambda function, updated applications in an Amazon ECS service, code, web and configuration files, executables, packages, scripts, multimedia files, and so on. CodeDeploy can deploy application content stored in Amazon S3 buckets, GitHub repositories, or Bitbucket repositories. You do not need to make changes to your existing code before you can use CodeDeploy.</p> <p>CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during application deployment, and handles the complexity of updating your applications, without many of the risks associated with error-prone manual deployments.</p> <p> <b>CodeDeploy Components</b> </p> <p>Use the information in this guide to help you work with the following CodeDeploy components:</p> <ul> <li> <p> <b>Application</b>: A name that uniquely identifies the application you want to deploy. CodeDeploy uses this name, which functions as a container, to ensure the correct combination of revision, deployment configuration, and deployment group are referenced during a deployment.</p> </li> <li> <p> <b>Deployment group</b>: A set of individual instances, CodeDeploy Lambda deployment configuration settings, or an Amazon ECS service and network details. A Lambda deployment group specifies how to route traffic to a new version of a Lambda function. An Amazon ECS deployment group specifies the service created in Amazon ECS to deploy, a load balancer, and a listener to reroute production traffic to an updated containerized application. An Amazon EC2/On-premises deployment group contains individually tagged instances, Amazon EC2 instances in Amazon EC2 Auto Scaling groups, or both. All deployment groups can specify optional trigger, alarm, and rollback settings.</p> </li> <li> <p> <b>Deployment configuration</b>: A set of deployment rules and deployment success and failure conditions used by CodeDeploy during a deployment.</p> </li> <li> <p> <b>Deployment</b>: The process and the components used when updating a Lambda function, a containerized application in an Amazon ECS service, or of installing content on one or more instances. </p> </li> <li> <p> <b>Application revisions</b>: For an Lambda deployment, this is an AppSpec file that specifies the Lambda function to be updated and one or more functions to validate deployment lifecycle events. For an Amazon ECS deployment, this is an AppSpec file that specifies the Amazon ECS task definition, container, and port where production traffic is rerouted. For an EC2/On-premises deployment, this is an archive file that contains source content—source code, webpages, executable files, and deployment scripts—along with an AppSpec file. Revisions are stored in Amazon S3 buckets or GitHub repositories. For Amazon S3, a revision is uniquely identified by its Amazon S3 object key and its ETag, version, or both. For GitHub, a revision is uniquely identified by its commit ID.</p> </li> </ul> <p>This guide also contains information to help you get details about the instances in your deployments, to make on-premises instances available for CodeDeploy deployments, to get details about a Lambda function deployment, and to get details about Amazon ECS service deployments.</p> <p> <b>CodeDeploy Information Resources</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide">CodeDeploy User Guide</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/">CodeDeploy API Reference Guide</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cli/latest/reference/deploy/index.html">CLI Reference for CodeDeploy</a> </p> </li> <li> <p> <a href="https://forums.aws.amazon.com/forum.jspa?forumID=179">CodeDeploy Developer Forum</a> </p> </li> </ul>

Base URLs:

* <a href="http://codedeploy.us-east-1.amazonaws.com">http://codedeploy.us-east-1.amazonaws.com</a> - The CodeDeploy multi-region endpoint

* <a href="https://codedeploy.us-east-1.amazonaws.com">https://codedeploy.us-east-1.amazonaws.com</a> - The CodeDeploy multi-region endpoint

* <a href="http://codedeploy.cn-north-1.amazonaws.com.cn">http://codedeploy.cn-north-1.amazonaws.com.cn</a> - The CodeDeploy endpoint for China (Beijing) and China (Ningxia)

* <a href="https://codedeploy.cn-north-1.amazonaws.com.cn">https://codedeploy.cn-north-1.amazonaws.com.cn</a> - The CodeDeploy endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/codedeploy/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-codedeploy-default">Default</h1>

## AddTagsToOnPremisesInstances

<a id="opIdAddTagsToOnPremisesInstances"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.AddTagsToOnPremisesInstances' \
  -d '{
    "tags": {},
    "instanceNames": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances`

Adds tags to on-premises instances.

> Body parameter

```json
{
  "tags": {},
  "instanceNames": {}
}
```

<h3 id="addtagstoonpremisesinstances-parameters">Parameters</h3>

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
|body|body|[AddTagsToOnPremisesInstancesInput](#schemaaddtagstoonpremisesinstancesinput)|true|none|
|» tags|body|object|true|none|
|» instanceNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.AddTagsToOnPremisesInstances|

> Example responses

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

<h3 id="addtagstoonpremisesinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InstanceNameRequiredException|[InstanceNameRequiredException](#schemainstancenamerequiredexception)|
|481|481|InvalidInstanceNameException|[InvalidInstanceNameException](#schemainvalidinstancenameexception)|
|482|482|TagRequiredException|[TagRequiredException](#schematagrequiredexception)|
|483|483|InvalidTagException|[InvalidTagException](#schemainvalidtagexception)|
|484|484|TagLimitExceededException|[TagLimitExceededException](#schemataglimitexceededexception)|
|485|485|InstanceLimitExceededException|[InstanceLimitExceededException](#schemainstancelimitexceededexception)|
|486|486|InstanceNotRegisteredException|[InstanceNotRegisteredException](#schemainstancenotregisteredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetApplicationRevisions

<a id="opIdBatchGetApplicationRevisions"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.BatchGetApplicationRevisions' \
  -d '{
    "applicationName": {},
    "revisions": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions`

Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.

> Body parameter

```json
{
  "applicationName": {},
  "revisions": {}
}
```

<h3 id="batchgetapplicationrevisions-parameters">Parameters</h3>

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
|body|body|[BatchGetApplicationRevisionsInput](#schemabatchgetapplicationrevisionsinput)|true|none|
|» applicationName|body|object|true|none|
|» revisions|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.BatchGetApplicationRevisions|

> Example responses

> 200 Response

```json
{
  "applicationName": {},
  "errorMessage": {},
  "revisions": {}
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

<h3 id="batchgetapplicationrevisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetApplicationRevisionsOutput](#schemabatchgetapplicationrevisionsoutput)|
|480|480|ApplicationDoesNotExistException|[ApplicationDoesNotExistException](#schemaapplicationdoesnotexistexception)|
|481|481|ApplicationNameRequiredException|[ApplicationNameRequiredException](#schemaapplicationnamerequiredexception)|
|482|482|InvalidApplicationNameException|[InvalidApplicationNameException](#schemainvalidapplicationnameexception)|
|483|483|RevisionRequiredException|[RevisionRequiredException](#schemarevisionrequiredexception)|
|484|484|InvalidRevisionException|[InvalidRevisionException](#schemainvalidrevisionexception)|
|485|485|BatchLimitExceededException|[BatchLimitExceededException](#schemabatchlimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetApplications

<a id="opIdBatchGetApplications"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.BatchGetApplications' \
  -d '{
    "applicationNames": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications`

Gets information about one or more applications. The maximum number of applications that can be returned is 100.

> Body parameter

```json
{
  "applicationNames": {}
}
```

<h3 id="batchgetapplications-parameters">Parameters</h3>

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
|body|body|[BatchGetApplicationsInput](#schemabatchgetapplicationsinput)|true|none|
|» applicationNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.BatchGetApplications|

> Example responses

> 200 Response

```json
{
  "applicationsInfo": {}
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

<h3 id="batchgetapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetApplicationsOutput](#schemabatchgetapplicationsoutput)|
|480|480|ApplicationNameRequiredException|[ApplicationNameRequiredException](#schemaapplicationnamerequiredexception)|
|481|481|InvalidApplicationNameException|[InvalidApplicationNameException](#schemainvalidapplicationnameexception)|
|482|482|ApplicationDoesNotExistException|[ApplicationDoesNotExistException](#schemaapplicationdoesnotexistexception)|
|483|483|BatchLimitExceededException|[BatchLimitExceededException](#schemabatchlimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetDeploymentGroups

<a id="opIdBatchGetDeploymentGroups"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.BatchGetDeploymentGroups' \
  -d '{
    "applicationName": {},
    "deploymentGroupNames": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups`

Gets information about one or more deployment groups.

> Body parameter

```json
{
  "applicationName": {},
  "deploymentGroupNames": {}
}
```

<h3 id="batchgetdeploymentgroups-parameters">Parameters</h3>

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
|body|body|[BatchGetDeploymentGroupsInput](#schemabatchgetdeploymentgroupsinput)|true|none|
|» applicationName|body|object|true|none|
|» deploymentGroupNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.BatchGetDeploymentGroups|

> Example responses

> 200 Response

```json
{
  "deploymentGroupsInfo": {},
  "errorMessage": {}
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

<h3 id="batchgetdeploymentgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetDeploymentGroupsOutput](#schemabatchgetdeploymentgroupsoutput)|
|480|480|ApplicationNameRequiredException|[ApplicationNameRequiredException](#schemaapplicationnamerequiredexception)|
|481|481|InvalidApplicationNameException|[InvalidApplicationNameException](#schemainvalidapplicationnameexception)|
|482|482|ApplicationDoesNotExistException|[ApplicationDoesNotExistException](#schemaapplicationdoesnotexistexception)|
|483|483|DeploymentGroupNameRequiredException|[DeploymentGroupNameRequiredException](#schemadeploymentgroupnamerequiredexception)|
|484|484|InvalidDeploymentGroupNameException|[InvalidDeploymentGroupNameException](#schemainvaliddeploymentgroupnameexception)|
|485|485|BatchLimitExceededException|[BatchLimitExceededException](#schemabatchlimitexceededexception)|
|486|486|DeploymentConfigDoesNotExistException|[DeploymentConfigDoesNotExistException](#schemadeploymentconfigdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetDeploymentInstances

<a id="opIdBatchGetDeploymentInstances"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.BatchGetDeploymentInstances' \
  -d '{
    "deploymentId": {},
    "instanceIds": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances`

<aside class="warning">
This operation is deprecated
</aside>

<note> <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code> instead. </p> </note> <p> Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and Lambda compute platforms. The newer <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum number of instances that can be returned is 25.</p>

> Body parameter

```json
{
  "deploymentId": {},
  "instanceIds": {}
}
```

<h3 id="batchgetdeploymentinstances-parameters">Parameters</h3>

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
|body|body|[BatchGetDeploymentInstancesInput](#schemabatchgetdeploymentinstancesinput)|true|none|
|» deploymentId|body|object|true|none|
|» instanceIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.BatchGetDeploymentInstances|

> Example responses

> 200 Response

```json
{
  "instancesSummary": {},
  "errorMessage": {}
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

<h3 id="batchgetdeploymentinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetDeploymentInstancesOutput](#schemabatchgetdeploymentinstancesoutput)|
|480|480|DeploymentIdRequiredException|[DeploymentIdRequiredException](#schemadeploymentidrequiredexception)|
|481|481|DeploymentDoesNotExistException|[DeploymentDoesNotExistException](#schemadeploymentdoesnotexistexception)|
|482|482|InstanceIdRequiredException|[InstanceIdRequiredException](#schemainstanceidrequiredexception)|
|483|483|InvalidDeploymentIdException|[InvalidDeploymentIdException](#schemainvaliddeploymentidexception)|
|484|484|InvalidInstanceNameException|[InvalidInstanceNameException](#schemainvalidinstancenameexception)|
|485|485|BatchLimitExceededException|[BatchLimitExceededException](#schemabatchlimitexceededexception)|
|486|486|InvalidComputePlatformException|[InvalidComputePlatformException](#schemainvalidcomputeplatformexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetDeploymentTargets

<a id="opIdBatchGetDeploymentTargets"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.BatchGetDeploymentTargets' \
  -d '{
    "deploymentId": {},
    "targetIds": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets`

<p> Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be returned is 25.</p> <p> The type of targets returned depends on the deployment's compute platform or deployment method: </p> <ul> <li> <p> <b>EC2/On-premises</b>: Information about Amazon EC2 instance targets. </p> </li> <li> <p> <b>Lambda</b>: Information about Lambda functions targets. </p> </li> <li> <p> <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p> </li> <li> <p> <b>CloudFormation</b>: Information about targets of blue/green deployments initiated by a CloudFormation stack update.</p> </li> </ul>

> Body parameter

```json
{
  "deploymentId": {},
  "targetIds": {}
}
```

<h3 id="batchgetdeploymenttargets-parameters">Parameters</h3>

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
|body|body|[BatchGetDeploymentTargetsInput](#schemabatchgetdeploymenttargetsinput)|true|none|
|» deploymentId|body|object|false|none|
|» targetIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.BatchGetDeploymentTargets|

> Example responses

> 200 Response

```json
{
  "deploymentTargets": {}
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

> 488 Response

```json
null
```

<h3 id="batchgetdeploymenttargets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetDeploymentTargetsOutput](#schemabatchgetdeploymenttargetsoutput)|
|480|480|InvalidDeploymentIdException|[InvalidDeploymentIdException](#schemainvaliddeploymentidexception)|
|481|481|DeploymentIdRequiredException|[DeploymentIdRequiredException](#schemadeploymentidrequiredexception)|
|482|482|DeploymentDoesNotExistException|[DeploymentDoesNotExistException](#schemadeploymentdoesnotexistexception)|
|483|483|DeploymentNotStartedException|[DeploymentNotStartedException](#schemadeploymentnotstartedexception)|
|484|484|DeploymentTargetIdRequiredException|[DeploymentTargetIdRequiredException](#schemadeploymenttargetidrequiredexception)|
|485|485|InvalidDeploymentTargetIdException|[InvalidDeploymentTargetIdException](#schemainvaliddeploymenttargetidexception)|
|486|486|DeploymentTargetDoesNotExistException|[DeploymentTargetDoesNotExistException](#schemadeploymenttargetdoesnotexistexception)|
|487|487|DeploymentTargetListSizeExceededException|[DeploymentTargetListSizeExceededException](#schemadeploymenttargetlistsizeexceededexception)|
|488|488|InstanceDoesNotExistException|[InstanceDoesNotExistException](#schemainstancedoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetDeployments

<a id="opIdBatchGetDeployments"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.BatchGetDeployments' \
  -d '{
    "deploymentIds": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments`

Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.

> Body parameter

```json
{
  "deploymentIds": {}
}
```

<h3 id="batchgetdeployments-parameters">Parameters</h3>

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
|body|body|[BatchGetDeploymentsInput](#schemabatchgetdeploymentsinput)|true|none|
|» deploymentIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.BatchGetDeployments|

> Example responses

> 200 Response

```json
{
  "deploymentsInfo": {}
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

<h3 id="batchgetdeployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetDeploymentsOutput](#schemabatchgetdeploymentsoutput)|
|480|480|DeploymentIdRequiredException|[DeploymentIdRequiredException](#schemadeploymentidrequiredexception)|
|481|481|InvalidDeploymentIdException|[InvalidDeploymentIdException](#schemainvaliddeploymentidexception)|
|482|482|BatchLimitExceededException|[BatchLimitExceededException](#schemabatchlimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetOnPremisesInstances

<a id="opIdBatchGetOnPremisesInstances"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.BatchGetOnPremisesInstances' \
  -d '{
    "instanceNames": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances`

Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.

> Body parameter

```json
{
  "instanceNames": {}
}
```

<h3 id="batchgetonpremisesinstances-parameters">Parameters</h3>

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
|body|body|[BatchGetOnPremisesInstancesInput](#schemabatchgetonpremisesinstancesinput)|true|none|
|» instanceNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.BatchGetOnPremisesInstances|

> Example responses

> 200 Response

```json
{
  "instanceInfos": {}
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

<h3 id="batchgetonpremisesinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetOnPremisesInstancesOutput](#schemabatchgetonpremisesinstancesoutput)|
|480|480|InstanceNameRequiredException|[InstanceNameRequiredException](#schemainstancenamerequiredexception)|
|481|481|InvalidInstanceNameException|[InvalidInstanceNameException](#schemainvalidinstancenameexception)|
|482|482|BatchLimitExceededException|[BatchLimitExceededException](#schemabatchlimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ContinueDeployment

<a id="opIdContinueDeployment"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.ContinueDeployment' \
  -d '{
    "deploymentId": {},
    "deploymentWaitType": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment`

For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.) 

> Body parameter

```json
{
  "deploymentId": {},
  "deploymentWaitType": {}
}
```

<h3 id="continuedeployment-parameters">Parameters</h3>

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
|body|body|[ContinueDeploymentInput](#schemacontinuedeploymentinput)|true|none|
|» deploymentId|body|object|false|none|
|» deploymentWaitType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.ContinueDeployment|

> Example responses

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

<h3 id="continuedeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|DeploymentIdRequiredException|[DeploymentIdRequiredException](#schemadeploymentidrequiredexception)|
|481|481|DeploymentDoesNotExistException|[DeploymentDoesNotExistException](#schemadeploymentdoesnotexistexception)|
|482|482|DeploymentAlreadyCompletedException|[DeploymentAlreadyCompletedException](#schemadeploymentalreadycompletedexception)|
|483|483|InvalidDeploymentIdException|[InvalidDeploymentIdException](#schemainvaliddeploymentidexception)|
|484|484|DeploymentIsNotInReadyStateException|[DeploymentIsNotInReadyStateException](#schemadeploymentisnotinreadystateexception)|
|485|485|UnsupportedActionForDeploymentTypeException|[UnsupportedActionForDeploymentTypeException](#schemaunsupportedactionfordeploymenttypeexception)|
|486|486|InvalidDeploymentWaitTypeException|[InvalidDeploymentWaitTypeException](#schemainvaliddeploymentwaittypeexception)|
|487|487|InvalidDeploymentStatusException|[InvalidDeploymentStatusException](#schemainvaliddeploymentstatusexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApplication

<a id="opIdCreateApplication"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.CreateApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.CreateApplication' \
  -d '{
    "applicationName": {},
    "computePlatform": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.CreateApplication`

Creates an application.

> Body parameter

```json
{
  "applicationName": {},
  "computePlatform": {},
  "tags": {}
}
```

<h3 id="createapplication-parameters">Parameters</h3>

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
|body|body|[CreateApplicationInput](#schemacreateapplicationinput)|true|none|
|» applicationName|body|object|true|none|
|» computePlatform|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.CreateApplication|

> Example responses

> 200 Response

```json
{
  "applicationId": {}
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

<h3 id="createapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateApplicationOutput](#schemacreateapplicationoutput)|
|480|480|ApplicationNameRequiredException|[ApplicationNameRequiredException](#schemaapplicationnamerequiredexception)|
|481|481|InvalidApplicationNameException|[InvalidApplicationNameException](#schemainvalidapplicationnameexception)|
|482|482|ApplicationAlreadyExistsException|[ApplicationAlreadyExistsException](#schemaapplicationalreadyexistsexception)|
|483|483|ApplicationLimitExceededException|[ApplicationLimitExceededException](#schemaapplicationlimitexceededexception)|
|484|484|InvalidComputePlatformException|[InvalidComputePlatformException](#schemainvalidcomputeplatformexception)|
|485|485|InvalidTagsToAddException|[InvalidTagsToAddException](#schemainvalidtagstoaddexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDeployment

<a id="opIdCreateDeployment"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.CreateDeployment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.CreateDeployment' \
  -d '{
    "applicationName": {},
    "deploymentGroupName": {},
    "revision": {
      "revisionType": {},
      "s3Location": {
        "bucket": {},
        "key": {},
        "bundleType": {},
        "version": {},
        "eTag": {}
      },
      "gitHubLocation": {
        "repository": {},
        "commitId": {}
      },
      "string": {
        "content": {},
        "sha256": {}
      },
      "appSpecContent": {
        "content": {},
        "sha256": {}
      }
    },
    "deploymentConfigName": {},
    "description": {},
    "ignoreApplicationStopFailures": {},
    "targetInstances": {
      "tagFilters": {},
      "autoScalingGroups": {},
      "ec2TagSet": {
        "ec2TagSetList": {}
      }
    },
    "autoRollbackConfiguration": {
      "enabled": {},
      "events": {}
    },
    "updateOutdatedInstancesOnly": {},
    "fileExistsBehavior": {},
    "overrideAlarmConfiguration": {
      "enabled": {},
      "ignorePollAlarmFailure": {},
      "alarms": {}
    }
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.CreateDeployment`

Deploys an application revision through the specified deployment group.

> Body parameter

```json
{
  "applicationName": {},
  "deploymentGroupName": {},
  "revision": {
    "revisionType": {},
    "s3Location": {
      "bucket": {},
      "key": {},
      "bundleType": {},
      "version": {},
      "eTag": {}
    },
    "gitHubLocation": {
      "repository": {},
      "commitId": {}
    },
    "string": {
      "content": {},
      "sha256": {}
    },
    "appSpecContent": {
      "content": {},
      "sha256": {}
    }
  },
  "deploymentConfigName": {},
  "description": {},
  "ignoreApplicationStopFailures": {},
  "targetInstances": {
    "tagFilters": {},
    "autoScalingGroups": {},
    "ec2TagSet": {
      "ec2TagSetList": {}
    }
  },
  "autoRollbackConfiguration": {
    "enabled": {},
    "events": {}
  },
  "updateOutdatedInstancesOnly": {},
  "fileExistsBehavior": {},
  "overrideAlarmConfiguration": {
    "enabled": {},
    "ignorePollAlarmFailure": {},
    "alarms": {}
  }
}
```

<h3 id="createdeployment-parameters">Parameters</h3>

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
|body|body|[CreateDeploymentInput](#schemacreatedeploymentinput)|true|none|
|» applicationName|body|object|true|none|
|» deploymentGroupName|body|object|false|none|
|» revision|body|object|false|none|
|» » revisionType|body|object|false|none|
|» » s3Location|body|object|false|none|
|» » » bucket|body|object|false|none|
|» » » key|body|object|false|none|
|» » » bundleType|body|object|false|none|
|» » » version|body|object|false|none|
|» » » eTag|body|object|false|none|
|» » gitHubLocation|body|object|false|none|
|» » » repository|body|object|false|none|
|» » » commitId|body|object|false|none|
|» » string|body|object|false|none|
|» » » content|body|object|false|none|
|» » » sha256|body|object|false|none|
|» » appSpecContent|body|object|false|none|
|» » » content|body|object|false|none|
|» » » sha256|body|object|false|none|
|» deploymentConfigName|body|object|false|none|
|» description|body|object|false|none|
|» ignoreApplicationStopFailures|body|object|false|none|
|» targetInstances|body|object|false|none|
|» » tagFilters|body|object|false|none|
|» » autoScalingGroups|body|object|false|none|
|» » ec2TagSet|body|object|false|none|
|» » » ec2TagSetList|body|object|false|none|
|» autoRollbackConfiguration|body|object|false|none|
|» » enabled|body|object|false|none|
|» » events|body|object|false|none|
|» updateOutdatedInstancesOnly|body|object|false|none|
|» fileExistsBehavior|body|object|false|none|
|» overrideAlarmConfiguration|body|object|false|none|
|» » enabled|body|object|false|none|
|» » ignorePollAlarmFailure|body|object|false|none|
|» » alarms|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.CreateDeployment|

> Example responses

> 200 Response

```json
{
  "deploymentId": {}
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

> 502 Response

```json
null
```

> 503 Response

```json
null
```

> 504 Response

```json
null
```

> 505 Response

```json
null
```

<h3 id="createdeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDeploymentOutput](#schemacreatedeploymentoutput)|
|480|480|ApplicationNameRequiredException|[ApplicationNameRequiredException](#schemaapplicationnamerequiredexception)|
|481|481|InvalidApplicationNameException|[InvalidApplicationNameException](#schemainvalidapplicationnameexception)|
|482|482|ApplicationDoesNotExistException|[ApplicationDoesNotExistException](#schemaapplicationdoesnotexistexception)|
|483|483|DeploymentGroupNameRequiredException|[DeploymentGroupNameRequiredException](#schemadeploymentgroupnamerequiredexception)|
|484|484|InvalidDeploymentGroupNameException|[InvalidDeploymentGroupNameException](#schemainvaliddeploymentgroupnameexception)|
|485|485|DeploymentGroupDoesNotExistException|[DeploymentGroupDoesNotExistException](#schemadeploymentgroupdoesnotexistexception)|
|486|486|RevisionRequiredException|[RevisionRequiredException](#schemarevisionrequiredexception)|
|487|487|RevisionDoesNotExistException|[RevisionDoesNotExistException](#schemarevisiondoesnotexistexception)|
|488|488|InvalidRevisionException|[InvalidRevisionException](#schemainvalidrevisionexception)|
|489|489|InvalidDeploymentConfigNameException|[InvalidDeploymentConfigNameException](#schemainvaliddeploymentconfignameexception)|
|490|490|DeploymentConfigDoesNotExistException|[DeploymentConfigDoesNotExistException](#schemadeploymentconfigdoesnotexistexception)|
|491|491|DescriptionTooLongException|[DescriptionTooLongException](#schemadescriptiontoolongexception)|
|492|492|DeploymentLimitExceededException|[DeploymentLimitExceededException](#schemadeploymentlimitexceededexception)|
|493|493|InvalidTargetInstancesException|[InvalidTargetInstancesException](#schemainvalidtargetinstancesexception)|
|494|494|InvalidAlarmConfigException|[InvalidAlarmConfigException](#schemainvalidalarmconfigexception)|
|495|495|AlarmsLimitExceededException|[AlarmsLimitExceededException](#schemaalarmslimitexceededexception)|
|496|496|InvalidAutoRollbackConfigException|[InvalidAutoRollbackConfigException](#schemainvalidautorollbackconfigexception)|
|497|497|InvalidLoadBalancerInfoException|[InvalidLoadBalancerInfoException](#schemainvalidloadbalancerinfoexception)|
|498|498|InvalidFileExistsBehaviorException|[InvalidFileExistsBehaviorException](#schemainvalidfileexistsbehaviorexception)|
|499|499|InvalidRoleException|[InvalidRoleException](#schemainvalidroleexception)|
|500|Internal Server Error|InvalidAutoScalingGroupException|[InvalidAutoScalingGroupException](#schemainvalidautoscalinggroupexception)|
|501|Not Implemented|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|502|Bad Gateway|InvalidUpdateOutdatedInstancesOnlyValueException|[InvalidUpdateOutdatedInstancesOnlyValueException](#schemainvalidupdateoutdatedinstancesonlyvalueexception)|
|503|Service Unavailable|InvalidIgnoreApplicationStopFailuresValueException|[InvalidIgnoreApplicationStopFailuresValueException](#schemainvalidignoreapplicationstopfailuresvalueexception)|
|504|Gateway Timeout|InvalidGitHubAccountTokenException|[InvalidGitHubAccountTokenException](#schemainvalidgithubaccounttokenexception)|
|505|HTTP Version Not Supported|InvalidTrafficRoutingConfigurationException|[InvalidTrafficRoutingConfigurationException](#schemainvalidtrafficroutingconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDeploymentConfig

<a id="opIdCreateDeploymentConfig"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.CreateDeploymentConfig' \
  -d '{
    "deploymentConfigName": {},
    "minimumHealthyHosts": {
      "type": {},
      "value": {}
    },
    "trafficRoutingConfig": {
      "type": {},
      "timeBasedCanary": {
        "canaryPercentage": {},
        "canaryInterval": {}
      },
      "timeBasedLinear": {
        "linearPercentage": {},
        "linearInterval": {}
      }
    },
    "computePlatform": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig`

 Creates a deployment configuration. 

> Body parameter

```json
{
  "deploymentConfigName": {},
  "minimumHealthyHosts": {
    "type": {},
    "value": {}
  },
  "trafficRoutingConfig": {
    "type": {},
    "timeBasedCanary": {
      "canaryPercentage": {},
      "canaryInterval": {}
    },
    "timeBasedLinear": {
      "linearPercentage": {},
      "linearInterval": {}
    }
  },
  "computePlatform": {}
}
```

<h3 id="createdeploymentconfig-parameters">Parameters</h3>

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
|body|body|[CreateDeploymentConfigInput](#schemacreatedeploymentconfiginput)|true|none|
|» deploymentConfigName|body|object|true|none|
|» minimumHealthyHosts|body|object|false|none|
|» » type|body|object|false|none|
|» » value|body|object|false|none|
|» trafficRoutingConfig|body|object|false|none|
|» » type|body|object|false|none|
|» » timeBasedCanary|body|object|false|none|
|» » » canaryPercentage|body|object|false|none|
|» » » canaryInterval|body|object|false|none|
|» » timeBasedLinear|body|object|false|none|
|» » » linearPercentage|body|object|false|none|
|» » » linearInterval|body|object|false|none|
|» computePlatform|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.CreateDeploymentConfig|

> Example responses

> 200 Response

```json
{
  "deploymentConfigId": {}
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

<h3 id="createdeploymentconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDeploymentConfigOutput](#schemacreatedeploymentconfigoutput)|
|480|480|InvalidDeploymentConfigNameException|[InvalidDeploymentConfigNameException](#schemainvaliddeploymentconfignameexception)|
|481|481|DeploymentConfigNameRequiredException|[DeploymentConfigNameRequiredException](#schemadeploymentconfignamerequiredexception)|
|482|482|DeploymentConfigAlreadyExistsException|[DeploymentConfigAlreadyExistsException](#schemadeploymentconfigalreadyexistsexception)|
|483|483|InvalidMinimumHealthyHostValueException|[InvalidMinimumHealthyHostValueException](#schemainvalidminimumhealthyhostvalueexception)|
|484|484|DeploymentConfigLimitExceededException|[DeploymentConfigLimitExceededException](#schemadeploymentconfiglimitexceededexception)|
|485|485|InvalidComputePlatformException|[InvalidComputePlatformException](#schemainvalidcomputeplatformexception)|
|486|486|InvalidTrafficRoutingConfigurationException|[InvalidTrafficRoutingConfigurationException](#schemainvalidtrafficroutingconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDeploymentGroup

<a id="opIdCreateDeploymentGroup"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.CreateDeploymentGroup' \
  -d '{
    "applicationName": {},
    "deploymentGroupName": {},
    "deploymentConfigName": {},
    "ec2TagFilters": {},
    "onPremisesInstanceTagFilters": {},
    "autoScalingGroups": {},
    "serviceRoleArn": {},
    "triggerConfigurations": {},
    "alarmConfiguration": {
      "enabled": {},
      "ignorePollAlarmFailure": {},
      "alarms": {}
    },
    "autoRollbackConfiguration": {
      "enabled": {},
      "events": {}
    },
    "outdatedInstancesStrategy": {},
    "deploymentStyle": {
      "deploymentType": {},
      "deploymentOption": {}
    },
    "blueGreenDeploymentConfiguration": {
      "terminateBlueInstancesOnDeploymentSuccess": {
        "action": {},
        "terminationWaitTimeInMinutes": {}
      },
      "deploymentReadyOption": {
        "actionOnTimeout": {},
        "waitTimeInMinutes": {}
      },
      "greenFleetProvisioningOption": {
        "action": {}
      }
    },
    "loadBalancerInfo": {
      "elbInfoList": {},
      "targetGroupInfoList": {},
      "targetGroupPairInfoList": {}
    },
    "ec2TagSet": {
      "ec2TagSetList": {}
    },
    "ecsServices": {},
    "onPremisesTagSet": {
      "onPremisesTagSetList": {}
    },
    "tags": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup`

Creates a deployment group to which application revisions are deployed.

> Body parameter

```json
{
  "applicationName": {},
  "deploymentGroupName": {},
  "deploymentConfigName": {},
  "ec2TagFilters": {},
  "onPremisesInstanceTagFilters": {},
  "autoScalingGroups": {},
  "serviceRoleArn": {},
  "triggerConfigurations": {},
  "alarmConfiguration": {
    "enabled": {},
    "ignorePollAlarmFailure": {},
    "alarms": {}
  },
  "autoRollbackConfiguration": {
    "enabled": {},
    "events": {}
  },
  "outdatedInstancesStrategy": {},
  "deploymentStyle": {
    "deploymentType": {},
    "deploymentOption": {}
  },
  "blueGreenDeploymentConfiguration": {
    "terminateBlueInstancesOnDeploymentSuccess": {
      "action": {},
      "terminationWaitTimeInMinutes": {}
    },
    "deploymentReadyOption": {
      "actionOnTimeout": {},
      "waitTimeInMinutes": {}
    },
    "greenFleetProvisioningOption": {
      "action": {}
    }
  },
  "loadBalancerInfo": {
    "elbInfoList": {},
    "targetGroupInfoList": {},
    "targetGroupPairInfoList": {}
  },
  "ec2TagSet": {
    "ec2TagSetList": {}
  },
  "ecsServices": {},
  "onPremisesTagSet": {
    "onPremisesTagSetList": {}
  },
  "tags": {}
}
```

<h3 id="createdeploymentgroup-parameters">Parameters</h3>

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
|body|body|[CreateDeploymentGroupInput](#schemacreatedeploymentgroupinput)|true|none|
|» applicationName|body|object|true|none|
|» deploymentGroupName|body|object|true|none|
|» deploymentConfigName|body|object|false|none|
|» ec2TagFilters|body|object|false|none|
|» onPremisesInstanceTagFilters|body|object|false|none|
|» autoScalingGroups|body|object|false|none|
|» serviceRoleArn|body|object|true|none|
|» triggerConfigurations|body|object|false|none|
|» alarmConfiguration|body|object|false|none|
|» » enabled|body|object|false|none|
|» » ignorePollAlarmFailure|body|object|false|none|
|» » alarms|body|object|false|none|
|» autoRollbackConfiguration|body|object|false|none|
|» » enabled|body|object|false|none|
|» » events|body|object|false|none|
|» outdatedInstancesStrategy|body|object|false|none|
|» deploymentStyle|body|object|false|none|
|» » deploymentType|body|object|false|none|
|» » deploymentOption|body|object|false|none|
|» blueGreenDeploymentConfiguration|body|object|false|none|
|» » terminateBlueInstancesOnDeploymentSuccess|body|object|false|none|
|» » » action|body|object|false|none|
|» » » terminationWaitTimeInMinutes|body|object|false|none|
|» » deploymentReadyOption|body|object|false|none|
|» » » actionOnTimeout|body|object|false|none|
|» » » waitTimeInMinutes|body|object|false|none|
|» » greenFleetProvisioningOption|body|object|false|none|
|» » » action|body|object|false|none|
|» loadBalancerInfo|body|object|false|none|
|» » elbInfoList|body|object|false|none|
|» » targetGroupInfoList|body|object|false|none|
|» » targetGroupPairInfoList|body|object|false|none|
|» ec2TagSet|body|object|false|none|
|» » ec2TagSetList|body|object|false|none|
|» ecsServices|body|object|false|none|
|» onPremisesTagSet|body|object|false|none|
|» » onPremisesTagSetList|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.CreateDeploymentGroup|

> Example responses

> 200 Response

```json
{
  "deploymentGroupId": {}
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

> 502 Response

```json
null
```

> 503 Response

```json
null
```

> 504 Response

```json
null
```

> 505 Response

```json
null
```

> 506 Response

```json
null
```

> 507 Response

```json
null
```

> 508 Response

```json
null
```

> 509 Response

```json
null
```

> 510 Response

```json
null
```

> 511 Response

```json
null
```

> 512 Response

```json
null
```

<h3 id="createdeploymentgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDeploymentGroupOutput](#schemacreatedeploymentgroupoutput)|
|480|480|ApplicationNameRequiredException|[ApplicationNameRequiredException](#schemaapplicationnamerequiredexception)|
|481|481|InvalidApplicationNameException|[InvalidApplicationNameException](#schemainvalidapplicationnameexception)|
|482|482|ApplicationDoesNotExistException|[ApplicationDoesNotExistException](#schemaapplicationdoesnotexistexception)|
|483|483|DeploymentGroupNameRequiredException|[DeploymentGroupNameRequiredException](#schemadeploymentgroupnamerequiredexception)|
|484|484|InvalidDeploymentGroupNameException|[InvalidDeploymentGroupNameException](#schemainvaliddeploymentgroupnameexception)|
|485|485|DeploymentGroupAlreadyExistsException|[DeploymentGroupAlreadyExistsException](#schemadeploymentgroupalreadyexistsexception)|
|486|486|InvalidEC2TagException|[InvalidEC2TagException](#schemainvalidec2tagexception)|
|487|487|InvalidTagException|[InvalidTagException](#schemainvalidtagexception)|
|488|488|InvalidAutoScalingGroupException|[InvalidAutoScalingGroupException](#schemainvalidautoscalinggroupexception)|
|489|489|InvalidDeploymentConfigNameException|[InvalidDeploymentConfigNameException](#schemainvaliddeploymentconfignameexception)|
|490|490|DeploymentConfigDoesNotExistException|[DeploymentConfigDoesNotExistException](#schemadeploymentconfigdoesnotexistexception)|
|491|491|RoleRequiredException|[RoleRequiredException](#schemarolerequiredexception)|
|492|492|InvalidRoleException|[InvalidRoleException](#schemainvalidroleexception)|
|493|493|DeploymentGroupLimitExceededException|[DeploymentGroupLimitExceededException](#schemadeploymentgrouplimitexceededexception)|
|494|494|LifecycleHookLimitExceededException|[LifecycleHookLimitExceededException](#schemalifecyclehooklimitexceededexception)|
|495|495|InvalidTriggerConfigException|[InvalidTriggerConfigException](#schemainvalidtriggerconfigexception)|
|496|496|TriggerTargetsLimitExceededException|[TriggerTargetsLimitExceededException](#schematriggertargetslimitexceededexception)|
|497|497|InvalidAlarmConfigException|[InvalidAlarmConfigException](#schemainvalidalarmconfigexception)|
|498|498|AlarmsLimitExceededException|[AlarmsLimitExceededException](#schemaalarmslimitexceededexception)|
|499|499|InvalidAutoRollbackConfigException|[InvalidAutoRollbackConfigException](#schemainvalidautorollbackconfigexception)|
|500|Internal Server Error|InvalidLoadBalancerInfoException|[InvalidLoadBalancerInfoException](#schemainvalidloadbalancerinfoexception)|
|501|Not Implemented|InvalidDeploymentStyleException|[InvalidDeploymentStyleException](#schemainvaliddeploymentstyleexception)|
|502|Bad Gateway|InvalidBlueGreenDeploymentConfigurationException|[InvalidBlueGreenDeploymentConfigurationException](#schemainvalidbluegreendeploymentconfigurationexception)|
|503|Service Unavailable|InvalidEC2TagCombinationException|[InvalidEC2TagCombinationException](#schemainvalidec2tagcombinationexception)|
|504|Gateway Timeout|InvalidOnPremisesTagCombinationException|[InvalidOnPremisesTagCombinationException](#schemainvalidonpremisestagcombinationexception)|
|505|HTTP Version Not Supported|TagSetListLimitExceededException|[TagSetListLimitExceededException](#schematagsetlistlimitexceededexception)|
|506|Variant Also Negotiates|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|507|Insufficient Storage|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|508|Loop Detected|InvalidECSServiceException|[InvalidECSServiceException](#schemainvalidecsserviceexception)|
|509|Bandwidth Limit Exceeded|InvalidTargetGroupPairException|[InvalidTargetGroupPairException](#schemainvalidtargetgrouppairexception)|
|510|Not Extended|ECSServiceMappingLimitExceededException|[ECSServiceMappingLimitExceededException](#schemaecsservicemappinglimitexceededexception)|
|511|Network Authentication Required|InvalidTagsToAddException|[InvalidTagsToAddException](#schemainvalidtagstoaddexception)|
|512|512|InvalidTrafficRoutingConfigurationException|[InvalidTrafficRoutingConfigurationException](#schemainvalidtrafficroutingconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplication

<a id="opIdDeleteApplication"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.DeleteApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.DeleteApplication' \
  -d '{
    "applicationName": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.DeleteApplication`

Deletes an application.

> Body parameter

```json
{
  "applicationName": {}
}
```

<h3 id="deleteapplication-parameters">Parameters</h3>

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
|body|body|[DeleteApplicationInput](#schemadeleteapplicationinput)|true|none|
|» applicationName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.DeleteApplication|

> Example responses

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

<h3 id="deleteapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ApplicationNameRequiredException|[ApplicationNameRequiredException](#schemaapplicationnamerequiredexception)|
|481|481|InvalidApplicationNameException|[InvalidApplicationNameException](#schemainvalidapplicationnameexception)|
|482|482|InvalidRoleException|[InvalidRoleException](#schemainvalidroleexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDeploymentConfig

<a id="opIdDeleteDeploymentConfig"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.DeleteDeploymentConfig' \
  -d '{
    "deploymentConfigName": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig`

<p>Deletes a deployment configuration.</p> <note> <p>A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</p> </note>

> Body parameter

```json
{
  "deploymentConfigName": {}
}
```

<h3 id="deletedeploymentconfig-parameters">Parameters</h3>

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
|body|body|[DeleteDeploymentConfigInput](#schemadeletedeploymentconfiginput)|true|none|
|» deploymentConfigName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.DeleteDeploymentConfig|

> Example responses

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

<h3 id="deletedeploymentconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidDeploymentConfigNameException|[InvalidDeploymentConfigNameException](#schemainvaliddeploymentconfignameexception)|
|481|481|DeploymentConfigNameRequiredException|[DeploymentConfigNameRequiredException](#schemadeploymentconfignamerequiredexception)|
|482|482|DeploymentConfigInUseException|[DeploymentConfigInUseException](#schemadeploymentconfiginuseexception)|
|483|483|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDeploymentGroup

<a id="opIdDeleteDeploymentGroup"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.DeleteDeploymentGroup' \
  -d '{
    "applicationName": {},
    "deploymentGroupName": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup`

Deletes a deployment group.

> Body parameter

```json
{
  "applicationName": {},
  "deploymentGroupName": {}
}
```

<h3 id="deletedeploymentgroup-parameters">Parameters</h3>

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
|body|body|[DeleteDeploymentGroupInput](#schemadeletedeploymentgroupinput)|true|none|
|» applicationName|body|object|true|none|
|» deploymentGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.DeleteDeploymentGroup|

> Example responses

> 200 Response

```json
{
  "hooksNotCleanedUp": {}
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

<h3 id="deletedeploymentgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDeploymentGroupOutput](#schemadeletedeploymentgroupoutput)|
|480|480|ApplicationNameRequiredException|[ApplicationNameRequiredException](#schemaapplicationnamerequiredexception)|
|481|481|InvalidApplicationNameException|[InvalidApplicationNameException](#schemainvalidapplicationnameexception)|
|482|482|DeploymentGroupNameRequiredException|[DeploymentGroupNameRequiredException](#schemadeploymentgroupnamerequiredexception)|
|483|483|InvalidDeploymentGroupNameException|[InvalidDeploymentGroupNameException](#schemainvaliddeploymentgroupnameexception)|
|484|484|InvalidRoleException|[InvalidRoleException](#schemainvalidroleexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGitHubAccountToken

<a id="opIdDeleteGitHubAccountToken"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.DeleteGitHubAccountToken' \
  -d '{
    "tokenName": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken`

Deletes a GitHub account connection.

> Body parameter

```json
{
  "tokenName": {}
}
```

<h3 id="deletegithubaccounttoken-parameters">Parameters</h3>

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
|body|body|[DeleteGitHubAccountTokenInput](#schemadeletegithubaccounttokeninput)|true|none|
|» tokenName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.DeleteGitHubAccountToken|

> Example responses

> 200 Response

```json
{
  "tokenName": {}
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

<h3 id="deletegithubaccounttoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGitHubAccountTokenOutput](#schemadeletegithubaccounttokenoutput)|
|480|480|GitHubAccountTokenNameRequiredException|[GitHubAccountTokenNameRequiredException](#schemagithubaccounttokennamerequiredexception)|
|481|481|GitHubAccountTokenDoesNotExistException|[GitHubAccountTokenDoesNotExistException](#schemagithubaccounttokendoesnotexistexception)|
|482|482|InvalidGitHubAccountTokenNameException|[InvalidGitHubAccountTokenNameException](#schemainvalidgithubaccounttokennameexception)|
|483|483|ResourceValidationException|[ResourceValidationException](#schemaresourcevalidationexception)|
|484|484|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourcesByExternalId

<a id="opIdDeleteResourcesByExternalId"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.DeleteResourcesByExternalId' \
  -d '{
    "externalId": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId`

Deletes resources linked to an external ID.

> Body parameter

```json
{
  "externalId": {}
}
```

<h3 id="deleteresourcesbyexternalid-parameters">Parameters</h3>

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
|body|body|[DeleteResourcesByExternalIdInput](#schemadeleteresourcesbyexternalidinput)|true|none|
|» externalId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.DeleteResourcesByExternalId|

> Example responses

> 200 Response

```json
{}
```

<h3 id="deleteresourcesbyexternalid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteResourcesByExternalIdOutput](#schemadeleteresourcesbyexternalidoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterOnPremisesInstance

<a id="opIdDeregisterOnPremisesInstance"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.DeregisterOnPremisesInstance' \
  -d '{
    "instanceName": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance`

Deregisters an on-premises instance.

> Body parameter

```json
{
  "instanceName": {}
}
```

<h3 id="deregisteronpremisesinstance-parameters">Parameters</h3>

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
|body|body|[DeregisterOnPremisesInstanceInput](#schemaderegisteronpremisesinstanceinput)|true|none|
|» instanceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.DeregisterOnPremisesInstance|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deregisteronpremisesinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InstanceNameRequiredException|[InstanceNameRequiredException](#schemainstancenamerequiredexception)|
|481|481|InvalidInstanceNameException|[InvalidInstanceNameException](#schemainvalidinstancenameexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetApplication

<a id="opIdGetApplication"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.GetApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.GetApplication' \
  -d '{
    "applicationName": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.GetApplication`

Gets information about an application.

> Body parameter

```json
{
  "applicationName": {}
}
```

<h3 id="getapplication-parameters">Parameters</h3>

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
|body|body|[GetApplicationInput](#schemagetapplicationinput)|true|none|
|» applicationName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.GetApplication|

> Example responses

> 200 Response

```json
{
  "application": {
    "applicationId": {},
    "applicationName": {},
    "createTime": {},
    "linkedToGitHub": {},
    "gitHubAccountName": {},
    "computePlatform": {}
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

<h3 id="getapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetApplicationOutput](#schemagetapplicationoutput)|
|480|480|ApplicationNameRequiredException|[ApplicationNameRequiredException](#schemaapplicationnamerequiredexception)|
|481|481|InvalidApplicationNameException|[InvalidApplicationNameException](#schemainvalidapplicationnameexception)|
|482|482|ApplicationDoesNotExistException|[ApplicationDoesNotExistException](#schemaapplicationdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetApplicationRevision

<a id="opIdGetApplicationRevision"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.GetApplicationRevision' \
  -d '{
    "applicationName": {},
    "revision": {
      "revisionType": {},
      "s3Location": {
        "bucket": {},
        "key": {},
        "bundleType": {},
        "version": {},
        "eTag": {}
      },
      "gitHubLocation": {
        "repository": {},
        "commitId": {}
      },
      "string": {
        "content": {},
        "sha256": {}
      },
      "appSpecContent": {
        "content": {},
        "sha256": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision`

Gets information about an application revision.

> Body parameter

```json
{
  "applicationName": {},
  "revision": {
    "revisionType": {},
    "s3Location": {
      "bucket": {},
      "key": {},
      "bundleType": {},
      "version": {},
      "eTag": {}
    },
    "gitHubLocation": {
      "repository": {},
      "commitId": {}
    },
    "string": {
      "content": {},
      "sha256": {}
    },
    "appSpecContent": {
      "content": {},
      "sha256": {}
    }
  }
}
```

<h3 id="getapplicationrevision-parameters">Parameters</h3>

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
|body|body|[GetApplicationRevisionInput](#schemagetapplicationrevisioninput)|true|none|
|» applicationName|body|object|true|none|
|» revision|body|object|true|none|
|» » revisionType|body|object|false|none|
|» » s3Location|body|object|false|none|
|» » » bucket|body|object|false|none|
|» » » key|body|object|false|none|
|» » » bundleType|body|object|false|none|
|» » » version|body|object|false|none|
|» » » eTag|body|object|false|none|
|» » gitHubLocation|body|object|false|none|
|» » » repository|body|object|false|none|
|» » » commitId|body|object|false|none|
|» » string|body|object|false|none|
|» » » content|body|object|false|none|
|» » » sha256|body|object|false|none|
|» » appSpecContent|body|object|false|none|
|» » » content|body|object|false|none|
|» » » sha256|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.GetApplicationRevision|

> Example responses

> 200 Response

```json
{
  "applicationName": {},
  "revision": {
    "revisionType": {},
    "s3Location": {
      "bucket": {},
      "key": {},
      "bundleType": {},
      "version": {},
      "eTag": {}
    },
    "gitHubLocation": {
      "repository": {},
      "commitId": {}
    },
    "string": {
      "content": {},
      "sha256": {}
    },
    "appSpecContent": {
      "content": {},
      "sha256": {}
    }
  },
  "revisionInfo": {
    "description": {},
    "deploymentGroups": {},
    "firstUsedTime": {},
    "lastUsedTime": {},
    "registerTime": {}
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

<h3 id="getapplicationrevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetApplicationRevisionOutput](#schemagetapplicationrevisionoutput)|
|480|480|ApplicationDoesNotExistException|[ApplicationDoesNotExistException](#schemaapplicationdoesnotexistexception)|
|481|481|ApplicationNameRequiredException|[ApplicationNameRequiredException](#schemaapplicationnamerequiredexception)|
|482|482|InvalidApplicationNameException|[InvalidApplicationNameException](#schemainvalidapplicationnameexception)|
|483|483|RevisionDoesNotExistException|[RevisionDoesNotExistException](#schemarevisiondoesnotexistexception)|
|484|484|RevisionRequiredException|[RevisionRequiredException](#schemarevisionrequiredexception)|
|485|485|InvalidRevisionException|[InvalidRevisionException](#schemainvalidrevisionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeployment

<a id="opIdGetDeployment"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.GetDeployment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.GetDeployment' \
  -d '{
    "deploymentId": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.GetDeployment`

<p>Gets information about a deployment.</p> <note> <p> The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null. Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code> object to get the content of the deployment’s AppSpec file. </p> </note>

> Body parameter

```json
{
  "deploymentId": {}
}
```

<h3 id="getdeployment-parameters">Parameters</h3>

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
|body|body|[GetDeploymentInput](#schemagetdeploymentinput)|true|none|
|» deploymentId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.GetDeployment|

> Example responses

> 200 Response

```json
{
  "deploymentInfo": {
    "applicationName": {},
    "deploymentGroupName": {},
    "deploymentConfigName": {},
    "deploymentId": {},
    "previousRevision": {
      "revisionType": {},
      "s3Location": {
        "bucket": {},
        "key": {},
        "bundleType": {},
        "version": {},
        "eTag": {}
      },
      "gitHubLocation": {
        "repository": {},
        "commitId": {}
      },
      "string": {
        "content": {},
        "sha256": {}
      },
      "appSpecContent": {
        "content": {},
        "sha256": {}
      }
    },
    "revision": {
      "revisionType": {},
      "s3Location": {
        "bucket": {},
        "key": {},
        "bundleType": {},
        "version": {},
        "eTag": {}
      },
      "gitHubLocation": {
        "repository": {},
        "commitId": {}
      },
      "string": {
        "content": {},
        "sha256": {}
      },
      "appSpecContent": {
        "content": {},
        "sha256": {}
      }
    },
    "status": {},
    "errorInformation": {
      "code": {},
      "message": {}
    },
    "createTime": {},
    "startTime": {},
    "completeTime": {},
    "deploymentOverview": {
      "Pending": {},
      "InProgress": {},
      "Succeeded": {},
      "Failed": {},
      "Skipped": {},
      "Ready": {}
    },
    "description": {},
    "creator": {},
    "ignoreApplicationStopFailures": {},
    "autoRollbackConfiguration": {
      "enabled": {},
      "events": {}
    },
    "updateOutdatedInstancesOnly": {},
    "rollbackInfo": {
      "rollbackDeploymentId": {},
      "rollbackTriggeringDeploymentId": {},
      "rollbackMessage": {}
    },
    "deploymentStyle": {
      "deploymentType": {},
      "deploymentOption": {}
    },
    "targetInstances": {
      "tagFilters": {},
      "autoScalingGroups": {},
      "ec2TagSet": {
        "ec2TagSetList": {}
      }
    },
    "instanceTerminationWaitTimeStarted": {},
    "blueGreenDeploymentConfiguration": {
      "terminateBlueInstancesOnDeploymentSuccess": {
        "action": {},
        "terminationWaitTimeInMinutes": {}
      },
      "deploymentReadyOption": {
        "actionOnTimeout": {},
        "waitTimeInMinutes": {}
      },
      "greenFleetProvisioningOption": {
        "action": {}
      }
    },
    "loadBalancerInfo": {
      "elbInfoList": {},
      "targetGroupInfoList": {},
      "targetGroupPairInfoList": {}
    },
    "additionalDeploymentStatusInfo": {},
    "fileExistsBehavior": {},
    "deploymentStatusMessages": {},
    "computePlatform": {},
    "externalId": {},
    "relatedDeployments": {
      "autoUpdateOutdatedInstancesRootDeploymentId": {},
      "autoUpdateOutdatedInstancesDeploymentIds": {}
    },
    "overrideAlarmConfiguration": {
      "enabled": {},
      "ignorePollAlarmFailure": {},
      "alarms": {}
    }
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

<h3 id="getdeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeploymentOutput](#schemagetdeploymentoutput)|
|480|480|DeploymentIdRequiredException|[DeploymentIdRequiredException](#schemadeploymentidrequiredexception)|
|481|481|InvalidDeploymentIdException|[InvalidDeploymentIdException](#schemainvaliddeploymentidexception)|
|482|482|DeploymentDoesNotExistException|[DeploymentDoesNotExistException](#schemadeploymentdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeploymentConfig

<a id="opIdGetDeploymentConfig"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.GetDeploymentConfig' \
  -d '{
    "deploymentConfigName": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig`

Gets information about a deployment configuration.

> Body parameter

```json
{
  "deploymentConfigName": {}
}
```

<h3 id="getdeploymentconfig-parameters">Parameters</h3>

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
|body|body|[GetDeploymentConfigInput](#schemagetdeploymentconfiginput)|true|none|
|» deploymentConfigName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.GetDeploymentConfig|

> Example responses

> 200 Response

```json
{
  "deploymentConfigInfo": {
    "deploymentConfigId": {},
    "deploymentConfigName": {},
    "minimumHealthyHosts": {
      "type": {},
      "value": {}
    },
    "createTime": {},
    "computePlatform": {},
    "trafficRoutingConfig": {
      "type": {},
      "timeBasedCanary": {
        "canaryPercentage": {},
        "canaryInterval": {}
      },
      "timeBasedLinear": {
        "linearPercentage": {},
        "linearInterval": {}
      }
    }
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

<h3 id="getdeploymentconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeploymentConfigOutput](#schemagetdeploymentconfigoutput)|
|480|480|InvalidDeploymentConfigNameException|[InvalidDeploymentConfigNameException](#schemainvaliddeploymentconfignameexception)|
|481|481|DeploymentConfigNameRequiredException|[DeploymentConfigNameRequiredException](#schemadeploymentconfignamerequiredexception)|
|482|482|DeploymentConfigDoesNotExistException|[DeploymentConfigDoesNotExistException](#schemadeploymentconfigdoesnotexistexception)|
|483|483|InvalidComputePlatformException|[InvalidComputePlatformException](#schemainvalidcomputeplatformexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeploymentGroup

<a id="opIdGetDeploymentGroup"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.GetDeploymentGroup' \
  -d '{
    "applicationName": {},
    "deploymentGroupName": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup`

Gets information about a deployment group.

> Body parameter

```json
{
  "applicationName": {},
  "deploymentGroupName": {}
}
```

<h3 id="getdeploymentgroup-parameters">Parameters</h3>

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
|body|body|[GetDeploymentGroupInput](#schemagetdeploymentgroupinput)|true|none|
|» applicationName|body|object|true|none|
|» deploymentGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.GetDeploymentGroup|

> Example responses

> 200 Response

```json
{
  "deploymentGroupInfo": {
    "applicationName": {},
    "deploymentGroupId": {},
    "deploymentGroupName": {},
    "deploymentConfigName": {},
    "ec2TagFilters": {},
    "onPremisesInstanceTagFilters": {},
    "autoScalingGroups": {},
    "serviceRoleArn": {},
    "targetRevision": {
      "revisionType": {},
      "s3Location": {
        "bucket": {},
        "key": {},
        "bundleType": {},
        "version": {},
        "eTag": {}
      },
      "gitHubLocation": {
        "repository": {},
        "commitId": {}
      },
      "string": {
        "content": {},
        "sha256": {}
      },
      "appSpecContent": {
        "content": {},
        "sha256": {}
      }
    },
    "triggerConfigurations": {},
    "alarmConfiguration": {
      "enabled": {},
      "ignorePollAlarmFailure": {},
      "alarms": {}
    },
    "autoRollbackConfiguration": {
      "enabled": {},
      "events": {}
    },
    "deploymentStyle": {
      "deploymentType": {},
      "deploymentOption": {}
    },
    "outdatedInstancesStrategy": {},
    "blueGreenDeploymentConfiguration": {
      "terminateBlueInstancesOnDeploymentSuccess": {
        "action": {},
        "terminationWaitTimeInMinutes": {}
      },
      "deploymentReadyOption": {
        "actionOnTimeout": {},
        "waitTimeInMinutes": {}
      },
      "greenFleetProvisioningOption": {
        "action": {}
      }
    },
    "loadBalancerInfo": {
      "elbInfoList": {},
      "targetGroupInfoList": {},
      "targetGroupPairInfoList": {}
    },
    "lastSuccessfulDeployment": {
      "deploymentId": {},
      "status": {},
      "endTime": {},
      "createTime": {}
    },
    "lastAttemptedDeployment": {
      "deploymentId": {},
      "status": {},
      "endTime": {},
      "createTime": {}
    },
    "ec2TagSet": {
      "ec2TagSetList": {}
    },
    "onPremisesTagSet": {
      "onPremisesTagSetList": {}
    },
    "computePlatform": {},
    "ecsServices": {}
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

<h3 id="getdeploymentgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeploymentGroupOutput](#schemagetdeploymentgroupoutput)|
|480|480|ApplicationNameRequiredException|[ApplicationNameRequiredException](#schemaapplicationnamerequiredexception)|
|481|481|InvalidApplicationNameException|[InvalidApplicationNameException](#schemainvalidapplicationnameexception)|
|482|482|ApplicationDoesNotExistException|[ApplicationDoesNotExistException](#schemaapplicationdoesnotexistexception)|
|483|483|DeploymentGroupNameRequiredException|[DeploymentGroupNameRequiredException](#schemadeploymentgroupnamerequiredexception)|
|484|484|InvalidDeploymentGroupNameException|[InvalidDeploymentGroupNameException](#schemainvaliddeploymentgroupnameexception)|
|485|485|DeploymentGroupDoesNotExistException|[DeploymentGroupDoesNotExistException](#schemadeploymentgroupdoesnotexistexception)|
|486|486|DeploymentConfigDoesNotExistException|[DeploymentConfigDoesNotExistException](#schemadeploymentconfigdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeploymentInstance

<a id="opIdGetDeploymentInstance"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.GetDeploymentInstance' \
  -d '{
    "deploymentId": {},
    "instanceId": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance`

<aside class="warning">
This operation is deprecated
</aside>

Gets information about an instance as part of a deployment.

> Body parameter

```json
{
  "deploymentId": {},
  "instanceId": {}
}
```

<h3 id="getdeploymentinstance-parameters">Parameters</h3>

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
|body|body|[GetDeploymentInstanceInput](#schemagetdeploymentinstanceinput)|true|none|
|» deploymentId|body|object|true|none|
|» instanceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.GetDeploymentInstance|

> Example responses

> 200 Response

```json
{
  "instanceSummary": {
    "deploymentId": {},
    "instanceId": {},
    "status": {},
    "lastUpdatedAt": {},
    "lifecycleEvents": {},
    "instanceType": {}
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

<h3 id="getdeploymentinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeploymentInstanceOutput](#schemagetdeploymentinstanceoutput)|
|480|480|DeploymentIdRequiredException|[DeploymentIdRequiredException](#schemadeploymentidrequiredexception)|
|481|481|DeploymentDoesNotExistException|[DeploymentDoesNotExistException](#schemadeploymentdoesnotexistexception)|
|482|482|InstanceIdRequiredException|[InstanceIdRequiredException](#schemainstanceidrequiredexception)|
|483|483|InvalidDeploymentIdException|[InvalidDeploymentIdException](#schemainvaliddeploymentidexception)|
|484|484|InstanceDoesNotExistException|[InstanceDoesNotExistException](#schemainstancedoesnotexistexception)|
|485|485|InvalidInstanceNameException|[InvalidInstanceNameException](#schemainvalidinstancenameexception)|
|486|486|InvalidComputePlatformException|[InvalidComputePlatformException](#schemainvalidcomputeplatformexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeploymentTarget

<a id="opIdGetDeploymentTarget"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.GetDeploymentTarget' \
  -d '{
    "deploymentId": {},
    "targetId": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget`

 Returns information about a deployment target. 

> Body parameter

```json
{
  "deploymentId": {},
  "targetId": {}
}
```

<h3 id="getdeploymenttarget-parameters">Parameters</h3>

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
|body|body|[GetDeploymentTargetInput](#schemagetdeploymenttargetinput)|true|none|
|» deploymentId|body|object|false|none|
|» targetId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.GetDeploymentTarget|

> Example responses

> 200 Response

```json
{
  "deploymentTarget": {
    "deploymentTargetType": {},
    "instanceTarget": {
      "deploymentId": {},
      "targetId": {},
      "targetArn": {},
      "status": {},
      "lastUpdatedAt": {},
      "lifecycleEvents": {},
      "instanceLabel": {}
    },
    "lambdaTarget": {
      "deploymentId": {},
      "targetId": {},
      "targetArn": {},
      "status": {},
      "lastUpdatedAt": {},
      "lifecycleEvents": {},
      "lambdaFunctionInfo": {
        "functionName": {},
        "functionAlias": {},
        "currentVersion": {},
        "targetVersion": {},
        "targetVersionWeight": {}
      }
    },
    "ecsTarget": {
      "deploymentId": {},
      "targetId": {},
      "targetArn": {},
      "lastUpdatedAt": {},
      "lifecycleEvents": {},
      "status": {},
      "taskSetsInfo": {}
    },
    "cloudFormationTarget": {
      "deploymentId": {},
      "targetId": {},
      "lastUpdatedAt": {},
      "lifecycleEvents": {},
      "status": {},
      "resourceType": {},
      "targetVersionWeight": {}
    }
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

> 487 Response

```json
null
```

<h3 id="getdeploymenttarget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeploymentTargetOutput](#schemagetdeploymenttargetoutput)|
|480|480|InvalidDeploymentIdException|[InvalidDeploymentIdException](#schemainvaliddeploymentidexception)|
|481|481|DeploymentIdRequiredException|[DeploymentIdRequiredException](#schemadeploymentidrequiredexception)|
|482|482|DeploymentDoesNotExistException|[DeploymentDoesNotExistException](#schemadeploymentdoesnotexistexception)|
|483|483|DeploymentNotStartedException|[DeploymentNotStartedException](#schemadeploymentnotstartedexception)|
|484|484|DeploymentTargetIdRequiredException|[DeploymentTargetIdRequiredException](#schemadeploymenttargetidrequiredexception)|
|485|485|InvalidDeploymentTargetIdException|[InvalidDeploymentTargetIdException](#schemainvaliddeploymenttargetidexception)|
|486|486|DeploymentTargetDoesNotExistException|[DeploymentTargetDoesNotExistException](#schemadeploymenttargetdoesnotexistexception)|
|487|487|InvalidInstanceNameException|[InvalidInstanceNameException](#schemainvalidinstancenameexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOnPremisesInstance

<a id="opIdGetOnPremisesInstance"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.GetOnPremisesInstance' \
  -d '{
    "instanceName": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance`

 Gets information about an on-premises instance. 

> Body parameter

```json
{
  "instanceName": {}
}
```

<h3 id="getonpremisesinstance-parameters">Parameters</h3>

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
|body|body|[GetOnPremisesInstanceInput](#schemagetonpremisesinstanceinput)|true|none|
|» instanceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.GetOnPremisesInstance|

> Example responses

> 200 Response

```json
{
  "instanceInfo": {
    "instanceName": {},
    "iamSessionArn": {},
    "iamUserArn": {},
    "instanceArn": {},
    "registerTime": {},
    "deregisterTime": {},
    "tags": {}
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

<h3 id="getonpremisesinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOnPremisesInstanceOutput](#schemagetonpremisesinstanceoutput)|
|480|480|InstanceNameRequiredException|[InstanceNameRequiredException](#schemainstancenamerequiredexception)|
|481|481|InstanceNotRegisteredException|[InstanceNotRegisteredException](#schemainstancenotregisteredexception)|
|482|482|InvalidInstanceNameException|[InvalidInstanceNameException](#schemainvalidinstancenameexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListApplicationRevisions

<a id="opIdListApplicationRevisions"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.ListApplicationRevisions' \
  -d '{
    "applicationName": {},
    "sortBy": {},
    "sortOrder": {},
    "s3Bucket": {},
    "s3KeyPrefix": {},
    "deployed": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions`

Lists information about revisions for an application.

> Body parameter

```json
{
  "applicationName": {},
  "sortBy": {},
  "sortOrder": {},
  "s3Bucket": {},
  "s3KeyPrefix": {},
  "deployed": {},
  "nextToken": {}
}
```

<h3 id="listapplicationrevisions-parameters">Parameters</h3>

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
|body|body|[ListApplicationRevisionsInput](#schemalistapplicationrevisionsinput)|true|none|
|» applicationName|body|object|true|none|
|» sortBy|body|object|false|none|
|» sortOrder|body|object|false|none|
|» s3Bucket|body|object|false|none|
|» s3KeyPrefix|body|object|false|none|
|» deployed|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.ListApplicationRevisions|

> Example responses

> 200 Response

```json
{
  "revisions": {},
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

<h3 id="listapplicationrevisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApplicationRevisionsOutput](#schemalistapplicationrevisionsoutput)|
|480|480|ApplicationDoesNotExistException|[ApplicationDoesNotExistException](#schemaapplicationdoesnotexistexception)|
|481|481|ApplicationNameRequiredException|[ApplicationNameRequiredException](#schemaapplicationnamerequiredexception)|
|482|482|InvalidApplicationNameException|[InvalidApplicationNameException](#schemainvalidapplicationnameexception)|
|483|483|InvalidSortByException|[InvalidSortByException](#schemainvalidsortbyexception)|
|484|484|InvalidSortOrderException|[InvalidSortOrderException](#schemainvalidsortorderexception)|
|485|485|InvalidBucketNameFilterException|[InvalidBucketNameFilterException](#schemainvalidbucketnamefilterexception)|
|486|486|InvalidKeyPrefixFilterException|[InvalidKeyPrefixFilterException](#schemainvalidkeyprefixfilterexception)|
|487|487|BucketNameFilterRequiredException|[BucketNameFilterRequiredException](#schemabucketnamefilterrequiredexception)|
|488|488|InvalidDeployedStateFilterException|[InvalidDeployedStateFilterException](#schemainvaliddeployedstatefilterexception)|
|489|489|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListApplications

<a id="opIdListApplications"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.ListApplications' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.ListApplications' \
  -d '{
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.ListApplications`

Lists the applications registered with the IAM user or Amazon Web Services account.

> Body parameter

```json
{
  "nextToken": {}
}
```

<h3 id="listapplications-parameters">Parameters</h3>

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
|body|body|[ListApplicationsInput](#schemalistapplicationsinput)|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.ListApplications|

> Example responses

> 200 Response

```json
{
  "applications": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApplicationsOutput](#schemalistapplicationsoutput)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDeploymentConfigs

<a id="opIdListDeploymentConfigs"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.ListDeploymentConfigs' \
  -d '{
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs`

Lists the deployment configurations with the IAM user or Amazon Web Services account.

> Body parameter

```json
{
  "nextToken": {}
}
```

<h3 id="listdeploymentconfigs-parameters">Parameters</h3>

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
|body|body|[ListDeploymentConfigsInput](#schemalistdeploymentconfigsinput)|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.ListDeploymentConfigs|

> Example responses

> 200 Response

```json
{
  "deploymentConfigsList": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listdeploymentconfigs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDeploymentConfigsOutput](#schemalistdeploymentconfigsoutput)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDeploymentGroups

<a id="opIdListDeploymentGroups"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.ListDeploymentGroups' \
  -d '{
    "applicationName": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups`

Lists the deployment groups for an application registered with the IAM user or Amazon Web Services account.

> Body parameter

```json
{
  "applicationName": {},
  "nextToken": {}
}
```

<h3 id="listdeploymentgroups-parameters">Parameters</h3>

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
|body|body|[ListDeploymentGroupsInput](#schemalistdeploymentgroupsinput)|true|none|
|» applicationName|body|object|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.ListDeploymentGroups|

> Example responses

> 200 Response

```json
{
  "applicationName": {},
  "deploymentGroups": {},
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listdeploymentgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDeploymentGroupsOutput](#schemalistdeploymentgroupsoutput)|
|480|480|ApplicationNameRequiredException|[ApplicationNameRequiredException](#schemaapplicationnamerequiredexception)|
|481|481|InvalidApplicationNameException|[InvalidApplicationNameException](#schemainvalidapplicationnameexception)|
|482|482|ApplicationDoesNotExistException|[ApplicationDoesNotExistException](#schemaapplicationdoesnotexistexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDeploymentInstances

<a id="opIdListDeploymentInstances"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.ListDeploymentInstances' \
  -d '{
    "deploymentId": {},
    "nextToken": {},
    "instanceStatusFilter": {},
    "instanceTypeFilter": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances`

<aside class="warning">
This operation is deprecated
</aside>

<note> <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because it works with all compute types. <code>ListDeploymentInstances</code> throws an exception if it is used with a compute platform other than EC2/On-premises or Lambda. </p> </note> <p> Lists the instance for a deployment associated with the IAM user or Amazon Web Services account. </p>

> Body parameter

```json
{
  "deploymentId": {},
  "nextToken": {},
  "instanceStatusFilter": {},
  "instanceTypeFilter": {}
}
```

<h3 id="listdeploymentinstances-parameters">Parameters</h3>

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
|body|body|[ListDeploymentInstancesInput](#schemalistdeploymentinstancesinput)|true|none|
|» deploymentId|body|object|true|none|
|» nextToken|body|object|false|none|
|» instanceStatusFilter|body|object|false|none|
|» instanceTypeFilter|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.ListDeploymentInstances|

> Example responses

> 200 Response

```json
{
  "instancesList": {},
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

<h3 id="listdeploymentinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDeploymentInstancesOutput](#schemalistdeploymentinstancesoutput)|
|480|480|DeploymentIdRequiredException|[DeploymentIdRequiredException](#schemadeploymentidrequiredexception)|
|481|481|DeploymentDoesNotExistException|[DeploymentDoesNotExistException](#schemadeploymentdoesnotexistexception)|
|482|482|DeploymentNotStartedException|[DeploymentNotStartedException](#schemadeploymentnotstartedexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|InvalidDeploymentIdException|[InvalidDeploymentIdException](#schemainvaliddeploymentidexception)|
|485|485|InvalidInstanceStatusException|[InvalidInstanceStatusException](#schemainvalidinstancestatusexception)|
|486|486|InvalidInstanceTypeException|[InvalidInstanceTypeException](#schemainvalidinstancetypeexception)|
|487|487|InvalidDeploymentInstanceTypeException|[InvalidDeploymentInstanceTypeException](#schemainvaliddeploymentinstancetypeexception)|
|488|488|InvalidTargetFilterNameException|[InvalidTargetFilterNameException](#schemainvalidtargetfilternameexception)|
|489|489|InvalidComputePlatformException|[InvalidComputePlatformException](#schemainvalidcomputeplatformexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDeploymentTargets

<a id="opIdListDeploymentTargets"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.ListDeploymentTargets' \
  -d '{
    "deploymentId": {},
    "nextToken": {},
    "targetFilters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets`

 Returns an array of target IDs that are associated a deployment. 

> Body parameter

```json
{
  "deploymentId": {},
  "nextToken": {},
  "targetFilters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

<h3 id="listdeploymenttargets-parameters">Parameters</h3>

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
|body|body|[ListDeploymentTargetsInput](#schemalistdeploymenttargetsinput)|true|none|
|» deploymentId|body|object|false|none|
|» nextToken|body|object|false|none|
|» targetFilters|body|object|false|none|
|» » **additionalProperties**|body|[FilterValueList](#schemafiltervaluelist)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.ListDeploymentTargets|

> Example responses

> 200 Response

```json
{
  "targetIds": {},
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

<h3 id="listdeploymenttargets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDeploymentTargetsOutput](#schemalistdeploymenttargetsoutput)|
|480|480|DeploymentIdRequiredException|[DeploymentIdRequiredException](#schemadeploymentidrequiredexception)|
|481|481|DeploymentDoesNotExistException|[DeploymentDoesNotExistException](#schemadeploymentdoesnotexistexception)|
|482|482|DeploymentNotStartedException|[DeploymentNotStartedException](#schemadeploymentnotstartedexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|InvalidDeploymentIdException|[InvalidDeploymentIdException](#schemainvaliddeploymentidexception)|
|485|485|InvalidInstanceStatusException|[InvalidInstanceStatusException](#schemainvalidinstancestatusexception)|
|486|486|InvalidInstanceTypeException|[InvalidInstanceTypeException](#schemainvalidinstancetypeexception)|
|487|487|InvalidDeploymentInstanceTypeException|[InvalidDeploymentInstanceTypeException](#schemainvaliddeploymentinstancetypeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDeployments

<a id="opIdListDeployments"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.ListDeployments' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.ListDeployments' \
  -d '{
    "applicationName": {},
    "deploymentGroupName": {},
    "externalId": {},
    "includeOnlyStatuses": {},
    "createTimeRange": {
      "start": {},
      "end": {}
    },
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.ListDeployments`

Lists the deployments in a deployment group for an application registered with the IAM user or Amazon Web Services account.

> Body parameter

```json
{
  "applicationName": {},
  "deploymentGroupName": {},
  "externalId": {},
  "includeOnlyStatuses": {},
  "createTimeRange": {
    "start": {},
    "end": {}
  },
  "nextToken": {}
}
```

<h3 id="listdeployments-parameters">Parameters</h3>

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
|body|body|[ListDeploymentsInput](#schemalistdeploymentsinput)|true|none|
|» applicationName|body|object|false|none|
|» deploymentGroupName|body|object|false|none|
|» externalId|body|object|false|none|
|» includeOnlyStatuses|body|object|false|none|
|» createTimeRange|body|object|false|none|
|» » start|body|object|false|none|
|» » end|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.ListDeployments|

> Example responses

> 200 Response

```json
{
  "deployments": {},
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

> 490 Response

```json
null
```

<h3 id="listdeployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDeploymentsOutput](#schemalistdeploymentsoutput)|
|480|480|ApplicationNameRequiredException|[ApplicationNameRequiredException](#schemaapplicationnamerequiredexception)|
|481|481|InvalidApplicationNameException|[InvalidApplicationNameException](#schemainvalidapplicationnameexception)|
|482|482|ApplicationDoesNotExistException|[ApplicationDoesNotExistException](#schemaapplicationdoesnotexistexception)|
|483|483|InvalidDeploymentGroupNameException|[InvalidDeploymentGroupNameException](#schemainvaliddeploymentgroupnameexception)|
|484|484|DeploymentGroupDoesNotExistException|[DeploymentGroupDoesNotExistException](#schemadeploymentgroupdoesnotexistexception)|
|485|485|DeploymentGroupNameRequiredException|[DeploymentGroupNameRequiredException](#schemadeploymentgroupnamerequiredexception)|
|486|486|InvalidTimeRangeException|[InvalidTimeRangeException](#schemainvalidtimerangeexception)|
|487|487|InvalidDeploymentStatusException|[InvalidDeploymentStatusException](#schemainvaliddeploymentstatusexception)|
|488|488|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|489|489|InvalidExternalIdException|[InvalidExternalIdException](#schemainvalidexternalidexception)|
|490|490|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGitHubAccountTokenNames

<a id="opIdListGitHubAccountTokenNames"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.ListGitHubAccountTokenNames' \
  -d '{
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames`

Lists the names of stored connections to GitHub accounts.

> Body parameter

```json
{
  "nextToken": {}
}
```

<h3 id="listgithubaccounttokennames-parameters">Parameters</h3>

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
|body|body|[ListGitHubAccountTokenNamesInput](#schemalistgithubaccounttokennamesinput)|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.ListGitHubAccountTokenNames|

> Example responses

> 200 Response

```json
{
  "tokenNameList": {},
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

> 482 Response

```json
null
```

<h3 id="listgithubaccounttokennames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGitHubAccountTokenNamesOutput](#schemalistgithubaccounttokennamesoutput)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|ResourceValidationException|[ResourceValidationException](#schemaresourcevalidationexception)|
|482|482|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOnPremisesInstances

<a id="opIdListOnPremisesInstances"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.ListOnPremisesInstances' \
  -d '{
    "registrationStatus": {},
    "tagFilters": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances`

<p>Gets a list of names for one or more on-premises instances.</p> <p>Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</p>

> Body parameter

```json
{
  "registrationStatus": {},
  "tagFilters": {},
  "nextToken": {}
}
```

<h3 id="listonpremisesinstances-parameters">Parameters</h3>

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
|body|body|[ListOnPremisesInstancesInput](#schemalistonpremisesinstancesinput)|true|none|
|» registrationStatus|body|object|false|none|
|» tagFilters|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.ListOnPremisesInstances|

> Example responses

> 200 Response

```json
{
  "instanceNames": {},
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

> 482 Response

```json
null
```

<h3 id="listonpremisesinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOnPremisesInstancesOutput](#schemalistonpremisesinstancesoutput)|
|480|480|InvalidRegistrationStatusException|[InvalidRegistrationStatusException](#schemainvalidregistrationstatusexception)|
|481|481|InvalidTagFilterException|[InvalidTagFilterException](#schemainvalidtagfilterexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.ListTagsForResource' \
  -d '{
    "ResourceArn": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource`

 Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources. 

> Body parameter

```json
{
  "ResourceArn": {},
  "NextToken": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

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
|body|body|[ListTagsForResourceInput](#schemalisttagsforresourceinput)|true|none|
|» ResourceArn|body|object|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "Tags": {},
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceOutput](#schemalisttagsforresourceoutput)|
|480|480|ArnNotSupportedException|[ArnNotSupportedException](#schemaarnnotsupportedexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|ResourceArnRequiredException|[ResourceArnRequiredException](#schemaresourcearnrequiredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutLifecycleEventHookExecutionStatus

<a id="opIdPutLifecycleEventHookExecutionStatus"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus' \
  -d '{
    "deploymentId": {},
    "lifecycleEventHookExecutionId": {},
    "status": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus`

 Sets the result of a Lambda validation function. The function validates lifecycle hooks during a deployment that uses the Lambda or Amazon ECS compute platform. For Lambda deployments, the available lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>. For Amazon ECS deployments, the available lifecycle hooks are <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and <code>AfterAllowTraffic</code>. Lambda validation functions return <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an Lambda Deployment </a> and <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.

> Body parameter

```json
{
  "deploymentId": {},
  "lifecycleEventHookExecutionId": {},
  "status": {}
}
```

<h3 id="putlifecycleeventhookexecutionstatus-parameters">Parameters</h3>

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
|body|body|[PutLifecycleEventHookExecutionStatusInput](#schemaputlifecycleeventhookexecutionstatusinput)|true|none|
|» deploymentId|body|object|false|none|
|» lifecycleEventHookExecutionId|body|object|false|none|
|» status|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus|

> Example responses

> 200 Response

```json
{
  "lifecycleEventHookExecutionId": {}
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

<h3 id="putlifecycleeventhookexecutionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutLifecycleEventHookExecutionStatusOutput](#schemaputlifecycleeventhookexecutionstatusoutput)|
|480|480|InvalidLifecycleEventHookExecutionStatusException|[InvalidLifecycleEventHookExecutionStatusException](#schemainvalidlifecycleeventhookexecutionstatusexception)|
|481|481|InvalidLifecycleEventHookExecutionIdException|[InvalidLifecycleEventHookExecutionIdException](#schemainvalidlifecycleeventhookexecutionidexception)|
|482|482|LifecycleEventAlreadyCompletedException|[LifecycleEventAlreadyCompletedException](#schemalifecycleeventalreadycompletedexception)|
|483|483|DeploymentIdRequiredException|[DeploymentIdRequiredException](#schemadeploymentidrequiredexception)|
|484|484|DeploymentDoesNotExistException|[DeploymentDoesNotExistException](#schemadeploymentdoesnotexistexception)|
|485|485|InvalidDeploymentIdException|[InvalidDeploymentIdException](#schemainvaliddeploymentidexception)|
|486|486|UnsupportedActionForDeploymentTypeException|[UnsupportedActionForDeploymentTypeException](#schemaunsupportedactionfordeploymenttypeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterApplicationRevision

<a id="opIdRegisterApplicationRevision"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.RegisterApplicationRevision' \
  -d '{
    "applicationName": {},
    "description": {},
    "revision": {
      "revisionType": {},
      "s3Location": {
        "bucket": {},
        "key": {},
        "bundleType": {},
        "version": {},
        "eTag": {}
      },
      "gitHubLocation": {
        "repository": {},
        "commitId": {}
      },
      "string": {
        "content": {},
        "sha256": {}
      },
      "appSpecContent": {
        "content": {},
        "sha256": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision`

Registers with CodeDeploy a revision for the specified application.

> Body parameter

```json
{
  "applicationName": {},
  "description": {},
  "revision": {
    "revisionType": {},
    "s3Location": {
      "bucket": {},
      "key": {},
      "bundleType": {},
      "version": {},
      "eTag": {}
    },
    "gitHubLocation": {
      "repository": {},
      "commitId": {}
    },
    "string": {
      "content": {},
      "sha256": {}
    },
    "appSpecContent": {
      "content": {},
      "sha256": {}
    }
  }
}
```

<h3 id="registerapplicationrevision-parameters">Parameters</h3>

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
|body|body|[RegisterApplicationRevisionInput](#schemaregisterapplicationrevisioninput)|true|none|
|» applicationName|body|object|true|none|
|» description|body|object|false|none|
|» revision|body|object|true|none|
|» » revisionType|body|object|false|none|
|» » s3Location|body|object|false|none|
|» » » bucket|body|object|false|none|
|» » » key|body|object|false|none|
|» » » bundleType|body|object|false|none|
|» » » version|body|object|false|none|
|» » » eTag|body|object|false|none|
|» » gitHubLocation|body|object|false|none|
|» » » repository|body|object|false|none|
|» » » commitId|body|object|false|none|
|» » string|body|object|false|none|
|» » » content|body|object|false|none|
|» » » sha256|body|object|false|none|
|» » appSpecContent|body|object|false|none|
|» » » content|body|object|false|none|
|» » » sha256|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.RegisterApplicationRevision|

> Example responses

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

<h3 id="registerapplicationrevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ApplicationDoesNotExistException|[ApplicationDoesNotExistException](#schemaapplicationdoesnotexistexception)|
|481|481|ApplicationNameRequiredException|[ApplicationNameRequiredException](#schemaapplicationnamerequiredexception)|
|482|482|InvalidApplicationNameException|[InvalidApplicationNameException](#schemainvalidapplicationnameexception)|
|483|483|DescriptionTooLongException|[DescriptionTooLongException](#schemadescriptiontoolongexception)|
|484|484|RevisionRequiredException|[RevisionRequiredException](#schemarevisionrequiredexception)|
|485|485|InvalidRevisionException|[InvalidRevisionException](#schemainvalidrevisionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterOnPremisesInstance

<a id="opIdRegisterOnPremisesInstance"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.RegisterOnPremisesInstance' \
  -d '{
    "instanceName": {},
    "iamSessionArn": {},
    "iamUserArn": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance`

<p>Registers an on-premises instance.</p> <note> <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p> </note>

> Body parameter

```json
{
  "instanceName": {},
  "iamSessionArn": {},
  "iamUserArn": {}
}
```

<h3 id="registeronpremisesinstance-parameters">Parameters</h3>

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
|body|body|[RegisterOnPremisesInstanceInput](#schemaregisteronpremisesinstanceinput)|true|none|
|» instanceName|body|object|true|none|
|» iamSessionArn|body|object|false|none|
|» iamUserArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.RegisterOnPremisesInstance|

> Example responses

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

<h3 id="registeronpremisesinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InstanceNameAlreadyRegisteredException|[InstanceNameAlreadyRegisteredException](#schemainstancenamealreadyregisteredexception)|
|481|481|IamArnRequiredException|[IamArnRequiredException](#schemaiamarnrequiredexception)|
|482|482|IamSessionArnAlreadyRegisteredException|[IamSessionArnAlreadyRegisteredException](#schemaiamsessionarnalreadyregisteredexception)|
|483|483|IamUserArnAlreadyRegisteredException|[IamUserArnAlreadyRegisteredException](#schemaiamuserarnalreadyregisteredexception)|
|484|484|InstanceNameRequiredException|[InstanceNameRequiredException](#schemainstancenamerequiredexception)|
|485|485|IamUserArnRequiredException|[IamUserArnRequiredException](#schemaiamuserarnrequiredexception)|
|486|486|InvalidInstanceNameException|[InvalidInstanceNameException](#schemainvalidinstancenameexception)|
|487|487|InvalidIamSessionArnException|[InvalidIamSessionArnException](#schemainvalidiamsessionarnexception)|
|488|488|InvalidIamUserArnException|[InvalidIamUserArnException](#schemainvalidiamuserarnexception)|
|489|489|MultipleIamArnsProvidedException|[MultipleIamArnsProvidedException](#schemamultipleiamarnsprovidedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveTagsFromOnPremisesInstances

<a id="opIdRemoveTagsFromOnPremisesInstances"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances' \
  -d '{
    "tags": {},
    "instanceNames": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances`

Removes one or more tags from one or more on-premises instances.

> Body parameter

```json
{
  "tags": {},
  "instanceNames": {}
}
```

<h3 id="removetagsfromonpremisesinstances-parameters">Parameters</h3>

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
|body|body|[RemoveTagsFromOnPremisesInstancesInput](#schemaremovetagsfromonpremisesinstancesinput)|true|none|
|» tags|body|object|true|none|
|» instanceNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances|

> Example responses

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

<h3 id="removetagsfromonpremisesinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InstanceNameRequiredException|[InstanceNameRequiredException](#schemainstancenamerequiredexception)|
|481|481|InvalidInstanceNameException|[InvalidInstanceNameException](#schemainvalidinstancenameexception)|
|482|482|TagRequiredException|[TagRequiredException](#schematagrequiredexception)|
|483|483|InvalidTagException|[InvalidTagException](#schemainvalidtagexception)|
|484|484|TagLimitExceededException|[TagLimitExceededException](#schemataglimitexceededexception)|
|485|485|InstanceLimitExceededException|[InstanceLimitExceededException](#schemainstancelimitexceededexception)|
|486|486|InstanceNotRegisteredException|[InstanceNotRegisteredException](#schemainstancenotregisteredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SkipWaitTimeForInstanceTermination

<a id="opIdSkipWaitTimeForInstanceTermination"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.SkipWaitTimeForInstanceTermination' \
  -d '{
    "deploymentId": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination`

<aside class="warning">
This operation is deprecated
</aside>

In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete.

> Body parameter

```json
{
  "deploymentId": {}
}
```

<h3 id="skipwaittimeforinstancetermination-parameters">Parameters</h3>

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
|body|body|[SkipWaitTimeForInstanceTerminationInput](#schemaskipwaittimeforinstanceterminationinput)|true|none|
|» deploymentId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.SkipWaitTimeForInstanceTermination|

> Example responses

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

<h3 id="skipwaittimeforinstancetermination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|DeploymentIdRequiredException|[DeploymentIdRequiredException](#schemadeploymentidrequiredexception)|
|481|481|DeploymentDoesNotExistException|[DeploymentDoesNotExistException](#schemadeploymentdoesnotexistexception)|
|482|482|DeploymentAlreadyCompletedException|[DeploymentAlreadyCompletedException](#schemadeploymentalreadycompletedexception)|
|483|483|InvalidDeploymentIdException|[InvalidDeploymentIdException](#schemainvaliddeploymentidexception)|
|484|484|DeploymentNotStartedException|[DeploymentNotStartedException](#schemadeploymentnotstartedexception)|
|485|485|UnsupportedActionForDeploymentTypeException|[UnsupportedActionForDeploymentTypeException](#schemaunsupportedactionfordeploymenttypeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopDeployment

<a id="opIdStopDeployment"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.StopDeployment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.StopDeployment' \
  -d '{
    "deploymentId": {},
    "autoRollbackEnabled": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.StopDeployment`

Attempts to stop an ongoing deployment.

> Body parameter

```json
{
  "deploymentId": {},
  "autoRollbackEnabled": {}
}
```

<h3 id="stopdeployment-parameters">Parameters</h3>

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
|body|body|[StopDeploymentInput](#schemastopdeploymentinput)|true|none|
|» deploymentId|body|object|true|none|
|» autoRollbackEnabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.StopDeployment|

> Example responses

> 200 Response

```json
{
  "status": {},
  "statusMessage": {}
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

<h3 id="stopdeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopDeploymentOutput](#schemastopdeploymentoutput)|
|480|480|DeploymentIdRequiredException|[DeploymentIdRequiredException](#schemadeploymentidrequiredexception)|
|481|481|DeploymentDoesNotExistException|[DeploymentDoesNotExistException](#schemadeploymentdoesnotexistexception)|
|482|482|DeploymentGroupDoesNotExistException|[DeploymentGroupDoesNotExistException](#schemadeploymentgroupdoesnotexistexception)|
|483|483|DeploymentAlreadyCompletedException|[DeploymentAlreadyCompletedException](#schemadeploymentalreadycompletedexception)|
|484|484|InvalidDeploymentIdException|[InvalidDeploymentIdException](#schemainvaliddeploymentidexception)|
|485|485|UnsupportedActionForDeploymentTypeException|[UnsupportedActionForDeploymentTypeException](#schemaunsupportedactionfordeploymenttypeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.TagResource`

 Associates the list of tags in the input <code>Tags</code> parameter with the resource identified by the <code>ResourceArn</code> input parameter. 

> Body parameter

```json
{
  "ResourceArn": {},
  "Tags": {}
}
```

<h3 id="tagresource-parameters">Parameters</h3>

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
|body|body|[TagResourceInput](#schematagresourceinput)|true|none|
|» ResourceArn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceOutput](#schematagresourceoutput)|
|480|480|ResourceArnRequiredException|[ResourceArnRequiredException](#schemaresourcearnrequiredexception)|
|481|481|ApplicationDoesNotExistException|[ApplicationDoesNotExistException](#schemaapplicationdoesnotexistexception)|
|482|482|DeploymentGroupDoesNotExistException|[DeploymentGroupDoesNotExistException](#schemadeploymentgroupdoesnotexistexception)|
|483|483|DeploymentConfigDoesNotExistException|[DeploymentConfigDoesNotExistException](#schemadeploymentconfigdoesnotexistexception)|
|484|484|TagRequiredException|[TagRequiredException](#schematagrequiredexception)|
|485|485|InvalidTagsToAddException|[InvalidTagsToAddException](#schemainvalidtagstoaddexception)|
|486|486|ArnNotSupportedException|[ArnNotSupportedException](#schemaarnnotsupportedexception)|
|487|487|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.UntagResource`

 Disassociates a resource from a list of tags. The resource is identified by the <code>ResourceArn</code> input parameter. The tags are identified by the list of keys in the <code>TagKeys</code> input parameter. 

> Body parameter

```json
{
  "ResourceArn": {},
  "TagKeys": {}
}
```

<h3 id="untagresource-parameters">Parameters</h3>

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
|body|body|[UntagResourceInput](#schemauntagresourceinput)|true|none|
|» ResourceArn|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceOutput](#schemauntagresourceoutput)|
|480|480|ResourceArnRequiredException|[ResourceArnRequiredException](#schemaresourcearnrequiredexception)|
|481|481|ApplicationDoesNotExistException|[ApplicationDoesNotExistException](#schemaapplicationdoesnotexistexception)|
|482|482|DeploymentGroupDoesNotExistException|[DeploymentGroupDoesNotExistException](#schemadeploymentgroupdoesnotexistexception)|
|483|483|DeploymentConfigDoesNotExistException|[DeploymentConfigDoesNotExistException](#schemadeploymentconfigdoesnotexistexception)|
|484|484|TagRequiredException|[TagRequiredException](#schematagrequiredexception)|
|485|485|InvalidTagsToAddException|[InvalidTagsToAddException](#schemainvalidtagstoaddexception)|
|486|486|ArnNotSupportedException|[ArnNotSupportedException](#schemaarnnotsupportedexception)|
|487|487|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApplication

<a id="opIdUpdateApplication"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.UpdateApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.UpdateApplication' \
  -d '{
    "applicationName": {},
    "newApplicationName": {}
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.UpdateApplication`

Changes the name of an application.

> Body parameter

```json
{
  "applicationName": {},
  "newApplicationName": {}
}
```

<h3 id="updateapplication-parameters">Parameters</h3>

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
|body|body|[UpdateApplicationInput](#schemaupdateapplicationinput)|true|none|
|» applicationName|body|object|false|none|
|» newApplicationName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.UpdateApplication|

> Example responses

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

<h3 id="updateapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ApplicationNameRequiredException|[ApplicationNameRequiredException](#schemaapplicationnamerequiredexception)|
|481|481|InvalidApplicationNameException|[InvalidApplicationNameException](#schemainvalidapplicationnameexception)|
|482|482|ApplicationAlreadyExistsException|[ApplicationAlreadyExistsException](#schemaapplicationalreadyexistsexception)|
|483|483|ApplicationDoesNotExistException|[ApplicationDoesNotExistException](#schemaapplicationdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDeploymentGroup

<a id="opIdUpdateDeploymentGroup"></a>

> Code samples

```bash
curl 'https://codedeploy.us-east-1.amazonaws.com/#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeDeploy_20141006.UpdateDeploymentGroup' \
  -d '{
    "applicationName": {},
    "currentDeploymentGroupName": {},
    "newDeploymentGroupName": {},
    "deploymentConfigName": {},
    "ec2TagFilters": {},
    "onPremisesInstanceTagFilters": {},
    "autoScalingGroups": {},
    "serviceRoleArn": {},
    "triggerConfigurations": {},
    "alarmConfiguration": {
      "enabled": {},
      "ignorePollAlarmFailure": {},
      "alarms": {}
    },
    "autoRollbackConfiguration": {
      "enabled": {},
      "events": {}
    },
    "outdatedInstancesStrategy": {},
    "deploymentStyle": {
      "deploymentType": {},
      "deploymentOption": {}
    },
    "blueGreenDeploymentConfiguration": {
      "terminateBlueInstancesOnDeploymentSuccess": {
        "action": {},
        "terminationWaitTimeInMinutes": {}
      },
      "deploymentReadyOption": {
        "actionOnTimeout": {},
        "waitTimeInMinutes": {}
      },
      "greenFleetProvisioningOption": {
        "action": {}
      }
    },
    "loadBalancerInfo": {
      "elbInfoList": {},
      "targetGroupInfoList": {},
      "targetGroupPairInfoList": {}
    },
    "ec2TagSet": {
      "ec2TagSetList": {}
    },
    "ecsServices": {},
    "onPremisesTagSet": {
      "onPremisesTagSetList": {}
    }
  }'
```

`POST /#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup`

Changes information about a deployment group.

> Body parameter

```json
{
  "applicationName": {},
  "currentDeploymentGroupName": {},
  "newDeploymentGroupName": {},
  "deploymentConfigName": {},
  "ec2TagFilters": {},
  "onPremisesInstanceTagFilters": {},
  "autoScalingGroups": {},
  "serviceRoleArn": {},
  "triggerConfigurations": {},
  "alarmConfiguration": {
    "enabled": {},
    "ignorePollAlarmFailure": {},
    "alarms": {}
  },
  "autoRollbackConfiguration": {
    "enabled": {},
    "events": {}
  },
  "outdatedInstancesStrategy": {},
  "deploymentStyle": {
    "deploymentType": {},
    "deploymentOption": {}
  },
  "blueGreenDeploymentConfiguration": {
    "terminateBlueInstancesOnDeploymentSuccess": {
      "action": {},
      "terminationWaitTimeInMinutes": {}
    },
    "deploymentReadyOption": {
      "actionOnTimeout": {},
      "waitTimeInMinutes": {}
    },
    "greenFleetProvisioningOption": {
      "action": {}
    }
  },
  "loadBalancerInfo": {
    "elbInfoList": {},
    "targetGroupInfoList": {},
    "targetGroupPairInfoList": {}
  },
  "ec2TagSet": {
    "ec2TagSetList": {}
  },
  "ecsServices": {},
  "onPremisesTagSet": {
    "onPremisesTagSetList": {}
  }
}
```

<h3 id="updatedeploymentgroup-parameters">Parameters</h3>

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
|body|body|[UpdateDeploymentGroupInput](#schemaupdatedeploymentgroupinput)|true|none|
|» applicationName|body|object|true|none|
|» currentDeploymentGroupName|body|object|true|none|
|» newDeploymentGroupName|body|object|false|none|
|» deploymentConfigName|body|object|false|none|
|» ec2TagFilters|body|object|false|none|
|» onPremisesInstanceTagFilters|body|object|false|none|
|» autoScalingGroups|body|object|false|none|
|» serviceRoleArn|body|object|false|none|
|» triggerConfigurations|body|object|false|none|
|» alarmConfiguration|body|object|false|none|
|» » enabled|body|object|false|none|
|» » ignorePollAlarmFailure|body|object|false|none|
|» » alarms|body|object|false|none|
|» autoRollbackConfiguration|body|object|false|none|
|» » enabled|body|object|false|none|
|» » events|body|object|false|none|
|» outdatedInstancesStrategy|body|object|false|none|
|» deploymentStyle|body|object|false|none|
|» » deploymentType|body|object|false|none|
|» » deploymentOption|body|object|false|none|
|» blueGreenDeploymentConfiguration|body|object|false|none|
|» » terminateBlueInstancesOnDeploymentSuccess|body|object|false|none|
|» » » action|body|object|false|none|
|» » » terminationWaitTimeInMinutes|body|object|false|none|
|» » deploymentReadyOption|body|object|false|none|
|» » » actionOnTimeout|body|object|false|none|
|» » » waitTimeInMinutes|body|object|false|none|
|» » greenFleetProvisioningOption|body|object|false|none|
|» » » action|body|object|false|none|
|» loadBalancerInfo|body|object|false|none|
|» » elbInfoList|body|object|false|none|
|» » targetGroupInfoList|body|object|false|none|
|» » targetGroupPairInfoList|body|object|false|none|
|» ec2TagSet|body|object|false|none|
|» » ec2TagSetList|body|object|false|none|
|» ecsServices|body|object|false|none|
|» onPremisesTagSet|body|object|false|none|
|» » onPremisesTagSetList|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeDeploy_20141006.UpdateDeploymentGroup|

> Example responses

> 200 Response

```json
{
  "hooksNotCleanedUp": {}
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

> 502 Response

```json
null
```

> 503 Response

```json
null
```

> 504 Response

```json
null
```

> 505 Response

```json
null
```

> 506 Response

```json
null
```

> 507 Response

```json
null
```

> 508 Response

```json
null
```

> 509 Response

```json
null
```

> 510 Response

```json
null
```

<h3 id="updatedeploymentgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDeploymentGroupOutput](#schemaupdatedeploymentgroupoutput)|
|480|480|ApplicationNameRequiredException|[ApplicationNameRequiredException](#schemaapplicationnamerequiredexception)|
|481|481|InvalidApplicationNameException|[InvalidApplicationNameException](#schemainvalidapplicationnameexception)|
|482|482|ApplicationDoesNotExistException|[ApplicationDoesNotExistException](#schemaapplicationdoesnotexistexception)|
|483|483|InvalidDeploymentGroupNameException|[InvalidDeploymentGroupNameException](#schemainvaliddeploymentgroupnameexception)|
|484|484|DeploymentGroupAlreadyExistsException|[DeploymentGroupAlreadyExistsException](#schemadeploymentgroupalreadyexistsexception)|
|485|485|DeploymentGroupNameRequiredException|[DeploymentGroupNameRequiredException](#schemadeploymentgroupnamerequiredexception)|
|486|486|DeploymentGroupDoesNotExistException|[DeploymentGroupDoesNotExistException](#schemadeploymentgroupdoesnotexistexception)|
|487|487|InvalidEC2TagException|[InvalidEC2TagException](#schemainvalidec2tagexception)|
|488|488|InvalidTagException|[InvalidTagException](#schemainvalidtagexception)|
|489|489|InvalidAutoScalingGroupException|[InvalidAutoScalingGroupException](#schemainvalidautoscalinggroupexception)|
|490|490|InvalidDeploymentConfigNameException|[InvalidDeploymentConfigNameException](#schemainvaliddeploymentconfignameexception)|
|491|491|DeploymentConfigDoesNotExistException|[DeploymentConfigDoesNotExistException](#schemadeploymentconfigdoesnotexistexception)|
|492|492|InvalidRoleException|[InvalidRoleException](#schemainvalidroleexception)|
|493|493|LifecycleHookLimitExceededException|[LifecycleHookLimitExceededException](#schemalifecyclehooklimitexceededexception)|
|494|494|InvalidTriggerConfigException|[InvalidTriggerConfigException](#schemainvalidtriggerconfigexception)|
|495|495|TriggerTargetsLimitExceededException|[TriggerTargetsLimitExceededException](#schematriggertargetslimitexceededexception)|
|496|496|InvalidAlarmConfigException|[InvalidAlarmConfigException](#schemainvalidalarmconfigexception)|
|497|497|AlarmsLimitExceededException|[AlarmsLimitExceededException](#schemaalarmslimitexceededexception)|
|498|498|InvalidAutoRollbackConfigException|[InvalidAutoRollbackConfigException](#schemainvalidautorollbackconfigexception)|
|499|499|InvalidLoadBalancerInfoException|[InvalidLoadBalancerInfoException](#schemainvalidloadbalancerinfoexception)|
|500|Internal Server Error|InvalidDeploymentStyleException|[InvalidDeploymentStyleException](#schemainvaliddeploymentstyleexception)|
|501|Not Implemented|InvalidBlueGreenDeploymentConfigurationException|[InvalidBlueGreenDeploymentConfigurationException](#schemainvalidbluegreendeploymentconfigurationexception)|
|502|Bad Gateway|InvalidEC2TagCombinationException|[InvalidEC2TagCombinationException](#schemainvalidec2tagcombinationexception)|
|503|Service Unavailable|InvalidOnPremisesTagCombinationException|[InvalidOnPremisesTagCombinationException](#schemainvalidonpremisestagcombinationexception)|
|504|Gateway Timeout|TagSetListLimitExceededException|[TagSetListLimitExceededException](#schematagsetlistlimitexceededexception)|
|505|HTTP Version Not Supported|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|506|Variant Also Negotiates|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|507|Insufficient Storage|InvalidECSServiceException|[InvalidECSServiceException](#schemainvalidecsserviceexception)|
|508|Loop Detected|InvalidTargetGroupPairException|[InvalidTargetGroupPairException](#schemainvalidtargetgrouppairexception)|
|509|Bandwidth Limit Exceeded|ECSServiceMappingLimitExceededException|[ECSServiceMappingLimitExceededException](#schemaecsservicemappinglimitexceededexception)|
|510|Not Extended|InvalidTrafficRoutingConfigurationException|[InvalidTrafficRoutingConfigurationException](#schemainvalidtrafficroutingconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddTagsToOnPremisesInstancesInput">AddTagsToOnPremisesInstancesInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagstoonpremisesinstancesinput"></a>
<a id="schema_AddTagsToOnPremisesInstancesInput"></a>
<a id="tocSaddtagstoonpremisesinstancesinput"></a>
<a id="tocsaddtagstoonpremisesinstancesinput"></a>

```json
{
  "tags": {},
  "instanceNames": {}
}
```

Represents the input of, and adds tags to, an on-premises instance operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|
|instanceNames|object|true|none|none|

<h2 id="tocS_InstanceNameRequiredException">InstanceNameRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemainstancenamerequiredexception"></a>
<a id="schema_InstanceNameRequiredException"></a>
<a id="tocSinstancenamerequiredexception"></a>
<a id="tocsinstancenamerequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidInstanceNameException">InvalidInstanceNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinstancenameexception"></a>
<a id="schema_InvalidInstanceNameException"></a>
<a id="tocSinvalidinstancenameexception"></a>
<a id="tocsinvalidinstancenameexception"></a>

```json
null
```

<h2 id="tocS_TagRequiredException">TagRequiredException</h2>
<!-- backwards compatibility -->
<a id="schematagrequiredexception"></a>
<a id="schema_TagRequiredException"></a>
<a id="tocStagrequiredexception"></a>
<a id="tocstagrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidTagException">InvalidTagException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtagexception"></a>
<a id="schema_InvalidTagException"></a>
<a id="tocSinvalidtagexception"></a>
<a id="tocsinvalidtagexception"></a>

```json
null
```

<h2 id="tocS_TagLimitExceededException">TagLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemataglimitexceededexception"></a>
<a id="schema_TagLimitExceededException"></a>
<a id="tocStaglimitexceededexception"></a>
<a id="tocstaglimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InstanceLimitExceededException">InstanceLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemainstancelimitexceededexception"></a>
<a id="schema_InstanceLimitExceededException"></a>
<a id="tocSinstancelimitexceededexception"></a>
<a id="tocsinstancelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InstanceNotRegisteredException">InstanceNotRegisteredException</h2>
<!-- backwards compatibility -->
<a id="schemainstancenotregisteredexception"></a>
<a id="schema_InstanceNotRegisteredException"></a>
<a id="tocSinstancenotregisteredexception"></a>
<a id="tocsinstancenotregisteredexception"></a>

```json
null
```

<h2 id="tocS_BatchGetApplicationRevisionsOutput">BatchGetApplicationRevisionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetapplicationrevisionsoutput"></a>
<a id="schema_BatchGetApplicationRevisionsOutput"></a>
<a id="tocSbatchgetapplicationrevisionsoutput"></a>
<a id="tocsbatchgetapplicationrevisionsoutput"></a>

```json
{
  "applicationName": {},
  "errorMessage": {},
  "revisions": {}
}
```

Represents the output of a <code>BatchGetApplicationRevisions</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|false|none|none|
|errorMessage|object|false|none|none|
|revisions|object|false|none|none|

<h2 id="tocS_BatchGetApplicationRevisionsInput">BatchGetApplicationRevisionsInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetapplicationrevisionsinput"></a>
<a id="schema_BatchGetApplicationRevisionsInput"></a>
<a id="tocSbatchgetapplicationrevisionsinput"></a>
<a id="tocsbatchgetapplicationrevisionsinput"></a>

```json
{
  "applicationName": {},
  "revisions": {}
}
```

Represents the input of a <code>BatchGetApplicationRevisions</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|true|none|none|
|revisions|object|true|none|none|

<h2 id="tocS_ApplicationDoesNotExistException">ApplicationDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationdoesnotexistexception"></a>
<a id="schema_ApplicationDoesNotExistException"></a>
<a id="tocSapplicationdoesnotexistexception"></a>
<a id="tocsapplicationdoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_ApplicationNameRequiredException">ApplicationNameRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationnamerequiredexception"></a>
<a id="schema_ApplicationNameRequiredException"></a>
<a id="tocSapplicationnamerequiredexception"></a>
<a id="tocsapplicationnamerequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidApplicationNameException">InvalidApplicationNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidapplicationnameexception"></a>
<a id="schema_InvalidApplicationNameException"></a>
<a id="tocSinvalidapplicationnameexception"></a>
<a id="tocsinvalidapplicationnameexception"></a>

```json
null
```

<h2 id="tocS_RevisionRequiredException">RevisionRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemarevisionrequiredexception"></a>
<a id="schema_RevisionRequiredException"></a>
<a id="tocSrevisionrequiredexception"></a>
<a id="tocsrevisionrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidRevisionException">InvalidRevisionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrevisionexception"></a>
<a id="schema_InvalidRevisionException"></a>
<a id="tocSinvalidrevisionexception"></a>
<a id="tocsinvalidrevisionexception"></a>

```json
null
```

<h2 id="tocS_BatchLimitExceededException">BatchLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemabatchlimitexceededexception"></a>
<a id="schema_BatchLimitExceededException"></a>
<a id="tocSbatchlimitexceededexception"></a>
<a id="tocsbatchlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_BatchGetApplicationsOutput">BatchGetApplicationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetapplicationsoutput"></a>
<a id="schema_BatchGetApplicationsOutput"></a>
<a id="tocSbatchgetapplicationsoutput"></a>
<a id="tocsbatchgetapplicationsoutput"></a>

```json
{
  "applicationsInfo": {}
}
```

Represents the output of a <code>BatchGetApplications</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationsInfo|object|false|none|none|

<h2 id="tocS_BatchGetApplicationsInput">BatchGetApplicationsInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetapplicationsinput"></a>
<a id="schema_BatchGetApplicationsInput"></a>
<a id="tocSbatchgetapplicationsinput"></a>
<a id="tocsbatchgetapplicationsinput"></a>

```json
{
  "applicationNames": {}
}
```

Represents the input of a <code>BatchGetApplications</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationNames|object|true|none|none|

<h2 id="tocS_BatchGetDeploymentGroupsOutput">BatchGetDeploymentGroupsOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetdeploymentgroupsoutput"></a>
<a id="schema_BatchGetDeploymentGroupsOutput"></a>
<a id="tocSbatchgetdeploymentgroupsoutput"></a>
<a id="tocsbatchgetdeploymentgroupsoutput"></a>

```json
{
  "deploymentGroupsInfo": {},
  "errorMessage": {}
}
```

Represents the output of a <code>BatchGetDeploymentGroups</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentGroupsInfo|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_BatchGetDeploymentGroupsInput">BatchGetDeploymentGroupsInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetdeploymentgroupsinput"></a>
<a id="schema_BatchGetDeploymentGroupsInput"></a>
<a id="tocSbatchgetdeploymentgroupsinput"></a>
<a id="tocsbatchgetdeploymentgroupsinput"></a>

```json
{
  "applicationName": {},
  "deploymentGroupNames": {}
}
```

Represents the input of a <code>BatchGetDeploymentGroups</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|true|none|none|
|deploymentGroupNames|object|true|none|none|

<h2 id="tocS_DeploymentGroupNameRequiredException">DeploymentGroupNameRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentgroupnamerequiredexception"></a>
<a id="schema_DeploymentGroupNameRequiredException"></a>
<a id="tocSdeploymentgroupnamerequiredexception"></a>
<a id="tocsdeploymentgroupnamerequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidDeploymentGroupNameException">InvalidDeploymentGroupNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddeploymentgroupnameexception"></a>
<a id="schema_InvalidDeploymentGroupNameException"></a>
<a id="tocSinvaliddeploymentgroupnameexception"></a>
<a id="tocsinvaliddeploymentgroupnameexception"></a>

```json
null
```

<h2 id="tocS_DeploymentConfigDoesNotExistException">DeploymentConfigDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentconfigdoesnotexistexception"></a>
<a id="schema_DeploymentConfigDoesNotExistException"></a>
<a id="tocSdeploymentconfigdoesnotexistexception"></a>
<a id="tocsdeploymentconfigdoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_BatchGetDeploymentInstancesOutput">BatchGetDeploymentInstancesOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetdeploymentinstancesoutput"></a>
<a id="schema_BatchGetDeploymentInstancesOutput"></a>
<a id="tocSbatchgetdeploymentinstancesoutput"></a>
<a id="tocsbatchgetdeploymentinstancesoutput"></a>

```json
{
  "instancesSummary": {},
  "errorMessage": {}
}
```

Represents the output of a <code>BatchGetDeploymentInstances</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instancesSummary|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_BatchGetDeploymentInstancesInput">BatchGetDeploymentInstancesInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetdeploymentinstancesinput"></a>
<a id="schema_BatchGetDeploymentInstancesInput"></a>
<a id="tocSbatchgetdeploymentinstancesinput"></a>
<a id="tocsbatchgetdeploymentinstancesinput"></a>

```json
{
  "deploymentId": {},
  "instanceIds": {}
}
```

 Represents the input of a <code>BatchGetDeploymentInstances</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|true|none|none|
|instanceIds|object|true|none|none|

<h2 id="tocS_DeploymentIdRequiredException">DeploymentIdRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentidrequiredexception"></a>
<a id="schema_DeploymentIdRequiredException"></a>
<a id="tocSdeploymentidrequiredexception"></a>
<a id="tocsdeploymentidrequiredexception"></a>

```json
null
```

<h2 id="tocS_DeploymentDoesNotExistException">DeploymentDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentdoesnotexistexception"></a>
<a id="schema_DeploymentDoesNotExistException"></a>
<a id="tocSdeploymentdoesnotexistexception"></a>
<a id="tocsdeploymentdoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_InstanceIdRequiredException">InstanceIdRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemainstanceidrequiredexception"></a>
<a id="schema_InstanceIdRequiredException"></a>
<a id="tocSinstanceidrequiredexception"></a>
<a id="tocsinstanceidrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidDeploymentIdException">InvalidDeploymentIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddeploymentidexception"></a>
<a id="schema_InvalidDeploymentIdException"></a>
<a id="tocSinvaliddeploymentidexception"></a>
<a id="tocsinvaliddeploymentidexception"></a>

```json
null
```

<h2 id="tocS_InvalidComputePlatformException">InvalidComputePlatformException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcomputeplatformexception"></a>
<a id="schema_InvalidComputePlatformException"></a>
<a id="tocSinvalidcomputeplatformexception"></a>
<a id="tocsinvalidcomputeplatformexception"></a>

```json
null
```

<h2 id="tocS_BatchGetDeploymentTargetsOutput">BatchGetDeploymentTargetsOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetdeploymenttargetsoutput"></a>
<a id="schema_BatchGetDeploymentTargetsOutput"></a>
<a id="tocSbatchgetdeploymenttargetsoutput"></a>
<a id="tocsbatchgetdeploymenttargetsoutput"></a>

```json
{
  "deploymentTargets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentTargets|object|false|none|none|

<h2 id="tocS_BatchGetDeploymentTargetsInput">BatchGetDeploymentTargetsInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetdeploymenttargetsinput"></a>
<a id="schema_BatchGetDeploymentTargetsInput"></a>
<a id="tocSbatchgetdeploymenttargetsinput"></a>
<a id="tocsbatchgetdeploymenttargetsinput"></a>

```json
{
  "deploymentId": {},
  "targetIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|false|none|none|
|targetIds|object|false|none|none|

<h2 id="tocS_DeploymentNotStartedException">DeploymentNotStartedException</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentnotstartedexception"></a>
<a id="schema_DeploymentNotStartedException"></a>
<a id="tocSdeploymentnotstartedexception"></a>
<a id="tocsdeploymentnotstartedexception"></a>

```json
null
```

<h2 id="tocS_DeploymentTargetIdRequiredException">DeploymentTargetIdRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemadeploymenttargetidrequiredexception"></a>
<a id="schema_DeploymentTargetIdRequiredException"></a>
<a id="tocSdeploymenttargetidrequiredexception"></a>
<a id="tocsdeploymenttargetidrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidDeploymentTargetIdException">InvalidDeploymentTargetIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddeploymenttargetidexception"></a>
<a id="schema_InvalidDeploymentTargetIdException"></a>
<a id="tocSinvaliddeploymenttargetidexception"></a>
<a id="tocsinvaliddeploymenttargetidexception"></a>

```json
null
```

<h2 id="tocS_DeploymentTargetDoesNotExistException">DeploymentTargetDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemadeploymenttargetdoesnotexistexception"></a>
<a id="schema_DeploymentTargetDoesNotExistException"></a>
<a id="tocSdeploymenttargetdoesnotexistexception"></a>
<a id="tocsdeploymenttargetdoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_DeploymentTargetListSizeExceededException">DeploymentTargetListSizeExceededException</h2>
<!-- backwards compatibility -->
<a id="schemadeploymenttargetlistsizeexceededexception"></a>
<a id="schema_DeploymentTargetListSizeExceededException"></a>
<a id="tocSdeploymenttargetlistsizeexceededexception"></a>
<a id="tocsdeploymenttargetlistsizeexceededexception"></a>

```json
null
```

<h2 id="tocS_InstanceDoesNotExistException">InstanceDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemainstancedoesnotexistexception"></a>
<a id="schema_InstanceDoesNotExistException"></a>
<a id="tocSinstancedoesnotexistexception"></a>
<a id="tocsinstancedoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_BatchGetDeploymentsOutput">BatchGetDeploymentsOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetdeploymentsoutput"></a>
<a id="schema_BatchGetDeploymentsOutput"></a>
<a id="tocSbatchgetdeploymentsoutput"></a>
<a id="tocsbatchgetdeploymentsoutput"></a>

```json
{
  "deploymentsInfo": {}
}
```

 Represents the output of a <code>BatchGetDeployments</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentsInfo|object|false|none|none|

<h2 id="tocS_BatchGetDeploymentsInput">BatchGetDeploymentsInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetdeploymentsinput"></a>
<a id="schema_BatchGetDeploymentsInput"></a>
<a id="tocSbatchgetdeploymentsinput"></a>
<a id="tocsbatchgetdeploymentsinput"></a>

```json
{
  "deploymentIds": {}
}
```

 Represents the input of a <code>BatchGetDeployments</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentIds|object|true|none|none|

<h2 id="tocS_BatchGetOnPremisesInstancesOutput">BatchGetOnPremisesInstancesOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetonpremisesinstancesoutput"></a>
<a id="schema_BatchGetOnPremisesInstancesOutput"></a>
<a id="tocSbatchgetonpremisesinstancesoutput"></a>
<a id="tocsbatchgetonpremisesinstancesoutput"></a>

```json
{
  "instanceInfos": {}
}
```

Represents the output of a <code>BatchGetOnPremisesInstances</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceInfos|object|false|none|none|

<h2 id="tocS_BatchGetOnPremisesInstancesInput">BatchGetOnPremisesInstancesInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetonpremisesinstancesinput"></a>
<a id="schema_BatchGetOnPremisesInstancesInput"></a>
<a id="tocSbatchgetonpremisesinstancesinput"></a>
<a id="tocsbatchgetonpremisesinstancesinput"></a>

```json
{
  "instanceNames": {}
}
```

Represents the input of a <code>BatchGetOnPremisesInstances</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceNames|object|true|none|none|

<h2 id="tocS_ContinueDeploymentInput">ContinueDeploymentInput</h2>
<!-- backwards compatibility -->
<a id="schemacontinuedeploymentinput"></a>
<a id="schema_ContinueDeploymentInput"></a>
<a id="tocScontinuedeploymentinput"></a>
<a id="tocscontinuedeploymentinput"></a>

```json
{
  "deploymentId": {},
  "deploymentWaitType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|false|none|none|
|deploymentWaitType|object|false|none|none|

<h2 id="tocS_DeploymentAlreadyCompletedException">DeploymentAlreadyCompletedException</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentalreadycompletedexception"></a>
<a id="schema_DeploymentAlreadyCompletedException"></a>
<a id="tocSdeploymentalreadycompletedexception"></a>
<a id="tocsdeploymentalreadycompletedexception"></a>

```json
null
```

<h2 id="tocS_DeploymentIsNotInReadyStateException">DeploymentIsNotInReadyStateException</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentisnotinreadystateexception"></a>
<a id="schema_DeploymentIsNotInReadyStateException"></a>
<a id="tocSdeploymentisnotinreadystateexception"></a>
<a id="tocsdeploymentisnotinreadystateexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedActionForDeploymentTypeException">UnsupportedActionForDeploymentTypeException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedactionfordeploymenttypeexception"></a>
<a id="schema_UnsupportedActionForDeploymentTypeException"></a>
<a id="tocSunsupportedactionfordeploymenttypeexception"></a>
<a id="tocsunsupportedactionfordeploymenttypeexception"></a>

```json
null
```

<h2 id="tocS_InvalidDeploymentWaitTypeException">InvalidDeploymentWaitTypeException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddeploymentwaittypeexception"></a>
<a id="schema_InvalidDeploymentWaitTypeException"></a>
<a id="tocSinvaliddeploymentwaittypeexception"></a>
<a id="tocsinvaliddeploymentwaittypeexception"></a>

```json
null
```

<h2 id="tocS_InvalidDeploymentStatusException">InvalidDeploymentStatusException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddeploymentstatusexception"></a>
<a id="schema_InvalidDeploymentStatusException"></a>
<a id="tocSinvaliddeploymentstatusexception"></a>
<a id="tocsinvaliddeploymentstatusexception"></a>

```json
null
```

<h2 id="tocS_CreateApplicationOutput">CreateApplicationOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationoutput"></a>
<a id="schema_CreateApplicationOutput"></a>
<a id="tocScreateapplicationoutput"></a>
<a id="tocscreateapplicationoutput"></a>

```json
{
  "applicationId": {}
}
```

Represents the output of a <code>CreateApplication</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationId|object|false|none|none|

<h2 id="tocS_CreateApplicationInput">CreateApplicationInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationinput"></a>
<a id="schema_CreateApplicationInput"></a>
<a id="tocScreateapplicationinput"></a>
<a id="tocscreateapplicationinput"></a>

```json
{
  "applicationName": {},
  "computePlatform": {},
  "tags": {}
}
```

Represents the input of a <code>CreateApplication</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|true|none|none|
|computePlatform|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ApplicationAlreadyExistsException">ApplicationAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationalreadyexistsexception"></a>
<a id="schema_ApplicationAlreadyExistsException"></a>
<a id="tocSapplicationalreadyexistsexception"></a>
<a id="tocsapplicationalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_ApplicationLimitExceededException">ApplicationLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationlimitexceededexception"></a>
<a id="schema_ApplicationLimitExceededException"></a>
<a id="tocSapplicationlimitexceededexception"></a>
<a id="tocsapplicationlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidTagsToAddException">InvalidTagsToAddException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtagstoaddexception"></a>
<a id="schema_InvalidTagsToAddException"></a>
<a id="tocSinvalidtagstoaddexception"></a>
<a id="tocsinvalidtagstoaddexception"></a>

```json
null
```

<h2 id="tocS_CreateDeploymentOutput">CreateDeploymentOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentoutput"></a>
<a id="schema_CreateDeploymentOutput"></a>
<a id="tocScreatedeploymentoutput"></a>
<a id="tocscreatedeploymentoutput"></a>

```json
{
  "deploymentId": {}
}
```

 Represents the output of a <code>CreateDeployment</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|false|none|none|

<h2 id="tocS_CreateDeploymentInput">CreateDeploymentInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentinput"></a>
<a id="schema_CreateDeploymentInput"></a>
<a id="tocScreatedeploymentinput"></a>
<a id="tocscreatedeploymentinput"></a>

```json
{
  "applicationName": {},
  "deploymentGroupName": {},
  "revision": {
    "revisionType": {},
    "s3Location": {
      "bucket": {},
      "key": {},
      "bundleType": {},
      "version": {},
      "eTag": {}
    },
    "gitHubLocation": {
      "repository": {},
      "commitId": {}
    },
    "string": {
      "content": {},
      "sha256": {}
    },
    "appSpecContent": {
      "content": {},
      "sha256": {}
    }
  },
  "deploymentConfigName": {},
  "description": {},
  "ignoreApplicationStopFailures": {},
  "targetInstances": {
    "tagFilters": {},
    "autoScalingGroups": {},
    "ec2TagSet": {
      "ec2TagSetList": {}
    }
  },
  "autoRollbackConfiguration": {
    "enabled": {},
    "events": {}
  },
  "updateOutdatedInstancesOnly": {},
  "fileExistsBehavior": {},
  "overrideAlarmConfiguration": {
    "enabled": {},
    "ignorePollAlarmFailure": {},
    "alarms": {}
  }
}
```

Represents the input of a <code>CreateDeployment</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|true|none|none|
|deploymentGroupName|object|false|none|none|
|revision|object|false|none|none|
|deploymentConfigName|object|false|none|none|
|description|object|false|none|none|
|ignoreApplicationStopFailures|object|false|none|none|
|targetInstances|object|false|none|none|
|autoRollbackConfiguration|object|false|none|none|
|updateOutdatedInstancesOnly|object|false|none|none|
|fileExistsBehavior|object|false|none|none|
|overrideAlarmConfiguration|object|false|none|none|

<h2 id="tocS_DeploymentGroupDoesNotExistException">DeploymentGroupDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentgroupdoesnotexistexception"></a>
<a id="schema_DeploymentGroupDoesNotExistException"></a>
<a id="tocSdeploymentgroupdoesnotexistexception"></a>
<a id="tocsdeploymentgroupdoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_RevisionDoesNotExistException">RevisionDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemarevisiondoesnotexistexception"></a>
<a id="schema_RevisionDoesNotExistException"></a>
<a id="tocSrevisiondoesnotexistexception"></a>
<a id="tocsrevisiondoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_InvalidDeploymentConfigNameException">InvalidDeploymentConfigNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddeploymentconfignameexception"></a>
<a id="schema_InvalidDeploymentConfigNameException"></a>
<a id="tocSinvaliddeploymentconfignameexception"></a>
<a id="tocsinvaliddeploymentconfignameexception"></a>

```json
null
```

<h2 id="tocS_DescriptionTooLongException">DescriptionTooLongException</h2>
<!-- backwards compatibility -->
<a id="schemadescriptiontoolongexception"></a>
<a id="schema_DescriptionTooLongException"></a>
<a id="tocSdescriptiontoolongexception"></a>
<a id="tocsdescriptiontoolongexception"></a>

```json
null
```

<h2 id="tocS_DeploymentLimitExceededException">DeploymentLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentlimitexceededexception"></a>
<a id="schema_DeploymentLimitExceededException"></a>
<a id="tocSdeploymentlimitexceededexception"></a>
<a id="tocsdeploymentlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidTargetInstancesException">InvalidTargetInstancesException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtargetinstancesexception"></a>
<a id="schema_InvalidTargetInstancesException"></a>
<a id="tocSinvalidtargetinstancesexception"></a>
<a id="tocsinvalidtargetinstancesexception"></a>

```json
null
```

<h2 id="tocS_InvalidAlarmConfigException">InvalidAlarmConfigException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidalarmconfigexception"></a>
<a id="schema_InvalidAlarmConfigException"></a>
<a id="tocSinvalidalarmconfigexception"></a>
<a id="tocsinvalidalarmconfigexception"></a>

```json
null
```

<h2 id="tocS_AlarmsLimitExceededException">AlarmsLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaalarmslimitexceededexception"></a>
<a id="schema_AlarmsLimitExceededException"></a>
<a id="tocSalarmslimitexceededexception"></a>
<a id="tocsalarmslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidAutoRollbackConfigException">InvalidAutoRollbackConfigException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidautorollbackconfigexception"></a>
<a id="schema_InvalidAutoRollbackConfigException"></a>
<a id="tocSinvalidautorollbackconfigexception"></a>
<a id="tocsinvalidautorollbackconfigexception"></a>

```json
null
```

<h2 id="tocS_InvalidLoadBalancerInfoException">InvalidLoadBalancerInfoException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidloadbalancerinfoexception"></a>
<a id="schema_InvalidLoadBalancerInfoException"></a>
<a id="tocSinvalidloadbalancerinfoexception"></a>
<a id="tocsinvalidloadbalancerinfoexception"></a>

```json
null
```

<h2 id="tocS_InvalidFileExistsBehaviorException">InvalidFileExistsBehaviorException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfileexistsbehaviorexception"></a>
<a id="schema_InvalidFileExistsBehaviorException"></a>
<a id="tocSinvalidfileexistsbehaviorexception"></a>
<a id="tocsinvalidfileexistsbehaviorexception"></a>

```json
null
```

<h2 id="tocS_InvalidRoleException">InvalidRoleException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidroleexception"></a>
<a id="schema_InvalidRoleException"></a>
<a id="tocSinvalidroleexception"></a>
<a id="tocsinvalidroleexception"></a>

```json
null
```

<h2 id="tocS_InvalidAutoScalingGroupException">InvalidAutoScalingGroupException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidautoscalinggroupexception"></a>
<a id="schema_InvalidAutoScalingGroupException"></a>
<a id="tocSinvalidautoscalinggroupexception"></a>
<a id="tocsinvalidautoscalinggroupexception"></a>

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

<h2 id="tocS_InvalidUpdateOutdatedInstancesOnlyValueException">InvalidUpdateOutdatedInstancesOnlyValueException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidupdateoutdatedinstancesonlyvalueexception"></a>
<a id="schema_InvalidUpdateOutdatedInstancesOnlyValueException"></a>
<a id="tocSinvalidupdateoutdatedinstancesonlyvalueexception"></a>
<a id="tocsinvalidupdateoutdatedinstancesonlyvalueexception"></a>

```json
null
```

<h2 id="tocS_InvalidIgnoreApplicationStopFailuresValueException">InvalidIgnoreApplicationStopFailuresValueException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidignoreapplicationstopfailuresvalueexception"></a>
<a id="schema_InvalidIgnoreApplicationStopFailuresValueException"></a>
<a id="tocSinvalidignoreapplicationstopfailuresvalueexception"></a>
<a id="tocsinvalidignoreapplicationstopfailuresvalueexception"></a>

```json
null
```

<h2 id="tocS_InvalidGitHubAccountTokenException">InvalidGitHubAccountTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidgithubaccounttokenexception"></a>
<a id="schema_InvalidGitHubAccountTokenException"></a>
<a id="tocSinvalidgithubaccounttokenexception"></a>
<a id="tocsinvalidgithubaccounttokenexception"></a>

```json
null
```

<h2 id="tocS_InvalidTrafficRoutingConfigurationException">InvalidTrafficRoutingConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtrafficroutingconfigurationexception"></a>
<a id="schema_InvalidTrafficRoutingConfigurationException"></a>
<a id="tocSinvalidtrafficroutingconfigurationexception"></a>
<a id="tocsinvalidtrafficroutingconfigurationexception"></a>

```json
null
```

<h2 id="tocS_CreateDeploymentConfigOutput">CreateDeploymentConfigOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentconfigoutput"></a>
<a id="schema_CreateDeploymentConfigOutput"></a>
<a id="tocScreatedeploymentconfigoutput"></a>
<a id="tocscreatedeploymentconfigoutput"></a>

```json
{
  "deploymentConfigId": {}
}
```

Represents the output of a <code>CreateDeploymentConfig</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentConfigId|object|false|none|none|

<h2 id="tocS_CreateDeploymentConfigInput">CreateDeploymentConfigInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentconfiginput"></a>
<a id="schema_CreateDeploymentConfigInput"></a>
<a id="tocScreatedeploymentconfiginput"></a>
<a id="tocscreatedeploymentconfiginput"></a>

```json
{
  "deploymentConfigName": {},
  "minimumHealthyHosts": {
    "type": {},
    "value": {}
  },
  "trafficRoutingConfig": {
    "type": {},
    "timeBasedCanary": {
      "canaryPercentage": {},
      "canaryInterval": {}
    },
    "timeBasedLinear": {
      "linearPercentage": {},
      "linearInterval": {}
    }
  },
  "computePlatform": {}
}
```

Represents the input of a <code>CreateDeploymentConfig</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentConfigName|object|true|none|none|
|minimumHealthyHosts|object|false|none|none|
|trafficRoutingConfig|object|false|none|none|
|computePlatform|object|false|none|none|

<h2 id="tocS_DeploymentConfigNameRequiredException">DeploymentConfigNameRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentconfignamerequiredexception"></a>
<a id="schema_DeploymentConfigNameRequiredException"></a>
<a id="tocSdeploymentconfignamerequiredexception"></a>
<a id="tocsdeploymentconfignamerequiredexception"></a>

```json
null
```

<h2 id="tocS_DeploymentConfigAlreadyExistsException">DeploymentConfigAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentconfigalreadyexistsexception"></a>
<a id="schema_DeploymentConfigAlreadyExistsException"></a>
<a id="tocSdeploymentconfigalreadyexistsexception"></a>
<a id="tocsdeploymentconfigalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_InvalidMinimumHealthyHostValueException">InvalidMinimumHealthyHostValueException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidminimumhealthyhostvalueexception"></a>
<a id="schema_InvalidMinimumHealthyHostValueException"></a>
<a id="tocSinvalidminimumhealthyhostvalueexception"></a>
<a id="tocsinvalidminimumhealthyhostvalueexception"></a>

```json
null
```

<h2 id="tocS_DeploymentConfigLimitExceededException">DeploymentConfigLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentconfiglimitexceededexception"></a>
<a id="schema_DeploymentConfigLimitExceededException"></a>
<a id="tocSdeploymentconfiglimitexceededexception"></a>
<a id="tocsdeploymentconfiglimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateDeploymentGroupOutput">CreateDeploymentGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentgroupoutput"></a>
<a id="schema_CreateDeploymentGroupOutput"></a>
<a id="tocScreatedeploymentgroupoutput"></a>
<a id="tocscreatedeploymentgroupoutput"></a>

```json
{
  "deploymentGroupId": {}
}
```

Represents the output of a <code>CreateDeploymentGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentGroupId|object|false|none|none|

<h2 id="tocS_CreateDeploymentGroupInput">CreateDeploymentGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentgroupinput"></a>
<a id="schema_CreateDeploymentGroupInput"></a>
<a id="tocScreatedeploymentgroupinput"></a>
<a id="tocscreatedeploymentgroupinput"></a>

```json
{
  "applicationName": {},
  "deploymentGroupName": {},
  "deploymentConfigName": {},
  "ec2TagFilters": {},
  "onPremisesInstanceTagFilters": {},
  "autoScalingGroups": {},
  "serviceRoleArn": {},
  "triggerConfigurations": {},
  "alarmConfiguration": {
    "enabled": {},
    "ignorePollAlarmFailure": {},
    "alarms": {}
  },
  "autoRollbackConfiguration": {
    "enabled": {},
    "events": {}
  },
  "outdatedInstancesStrategy": {},
  "deploymentStyle": {
    "deploymentType": {},
    "deploymentOption": {}
  },
  "blueGreenDeploymentConfiguration": {
    "terminateBlueInstancesOnDeploymentSuccess": {
      "action": {},
      "terminationWaitTimeInMinutes": {}
    },
    "deploymentReadyOption": {
      "actionOnTimeout": {},
      "waitTimeInMinutes": {}
    },
    "greenFleetProvisioningOption": {
      "action": {}
    }
  },
  "loadBalancerInfo": {
    "elbInfoList": {},
    "targetGroupInfoList": {},
    "targetGroupPairInfoList": {}
  },
  "ec2TagSet": {
    "ec2TagSetList": {}
  },
  "ecsServices": {},
  "onPremisesTagSet": {
    "onPremisesTagSetList": {}
  },
  "tags": {}
}
```

Represents the input of a <code>CreateDeploymentGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|true|none|none|
|deploymentGroupName|object|true|none|none|
|deploymentConfigName|object|false|none|none|
|ec2TagFilters|object|false|none|none|
|onPremisesInstanceTagFilters|object|false|none|none|
|autoScalingGroups|object|false|none|none|
|serviceRoleArn|object|true|none|none|
|triggerConfigurations|object|false|none|none|
|alarmConfiguration|object|false|none|none|
|autoRollbackConfiguration|object|false|none|none|
|outdatedInstancesStrategy|object|false|none|none|
|deploymentStyle|object|false|none|none|
|blueGreenDeploymentConfiguration|object|false|none|none|
|loadBalancerInfo|object|false|none|none|
|ec2TagSet|object|false|none|none|
|ecsServices|object|false|none|none|
|onPremisesTagSet|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DeploymentGroupAlreadyExistsException">DeploymentGroupAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentgroupalreadyexistsexception"></a>
<a id="schema_DeploymentGroupAlreadyExistsException"></a>
<a id="tocSdeploymentgroupalreadyexistsexception"></a>
<a id="tocsdeploymentgroupalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_InvalidEC2TagException">InvalidEC2TagException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidec2tagexception"></a>
<a id="schema_InvalidEC2TagException"></a>
<a id="tocSinvalidec2tagexception"></a>
<a id="tocsinvalidec2tagexception"></a>

```json
null
```

<h2 id="tocS_RoleRequiredException">RoleRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemarolerequiredexception"></a>
<a id="schema_RoleRequiredException"></a>
<a id="tocSrolerequiredexception"></a>
<a id="tocsrolerequiredexception"></a>

```json
null
```

<h2 id="tocS_DeploymentGroupLimitExceededException">DeploymentGroupLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentgrouplimitexceededexception"></a>
<a id="schema_DeploymentGroupLimitExceededException"></a>
<a id="tocSdeploymentgrouplimitexceededexception"></a>
<a id="tocsdeploymentgrouplimitexceededexception"></a>

```json
null
```

<h2 id="tocS_LifecycleHookLimitExceededException">LifecycleHookLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclehooklimitexceededexception"></a>
<a id="schema_LifecycleHookLimitExceededException"></a>
<a id="tocSlifecyclehooklimitexceededexception"></a>
<a id="tocslifecyclehooklimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidTriggerConfigException">InvalidTriggerConfigException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtriggerconfigexception"></a>
<a id="schema_InvalidTriggerConfigException"></a>
<a id="tocSinvalidtriggerconfigexception"></a>
<a id="tocsinvalidtriggerconfigexception"></a>

```json
null
```

<h2 id="tocS_TriggerTargetsLimitExceededException">TriggerTargetsLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schematriggertargetslimitexceededexception"></a>
<a id="schema_TriggerTargetsLimitExceededException"></a>
<a id="tocStriggertargetslimitexceededexception"></a>
<a id="tocstriggertargetslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidDeploymentStyleException">InvalidDeploymentStyleException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddeploymentstyleexception"></a>
<a id="schema_InvalidDeploymentStyleException"></a>
<a id="tocSinvaliddeploymentstyleexception"></a>
<a id="tocsinvaliddeploymentstyleexception"></a>

```json
null
```

<h2 id="tocS_InvalidBlueGreenDeploymentConfigurationException">InvalidBlueGreenDeploymentConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidbluegreendeploymentconfigurationexception"></a>
<a id="schema_InvalidBlueGreenDeploymentConfigurationException"></a>
<a id="tocSinvalidbluegreendeploymentconfigurationexception"></a>
<a id="tocsinvalidbluegreendeploymentconfigurationexception"></a>

```json
null
```

<h2 id="tocS_InvalidEC2TagCombinationException">InvalidEC2TagCombinationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidec2tagcombinationexception"></a>
<a id="schema_InvalidEC2TagCombinationException"></a>
<a id="tocSinvalidec2tagcombinationexception"></a>
<a id="tocsinvalidec2tagcombinationexception"></a>

```json
null
```

<h2 id="tocS_InvalidOnPremisesTagCombinationException">InvalidOnPremisesTagCombinationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidonpremisestagcombinationexception"></a>
<a id="schema_InvalidOnPremisesTagCombinationException"></a>
<a id="tocSinvalidonpremisestagcombinationexception"></a>
<a id="tocsinvalidonpremisestagcombinationexception"></a>

```json
null
```

<h2 id="tocS_TagSetListLimitExceededException">TagSetListLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schematagsetlistlimitexceededexception"></a>
<a id="schema_TagSetListLimitExceededException"></a>
<a id="tocStagsetlistlimitexceededexception"></a>
<a id="tocstagsetlistlimitexceededexception"></a>

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

<h2 id="tocS_InvalidECSServiceException">InvalidECSServiceException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidecsserviceexception"></a>
<a id="schema_InvalidECSServiceException"></a>
<a id="tocSinvalidecsserviceexception"></a>
<a id="tocsinvalidecsserviceexception"></a>

```json
null
```

<h2 id="tocS_InvalidTargetGroupPairException">InvalidTargetGroupPairException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtargetgrouppairexception"></a>
<a id="schema_InvalidTargetGroupPairException"></a>
<a id="tocSinvalidtargetgrouppairexception"></a>
<a id="tocsinvalidtargetgrouppairexception"></a>

```json
null
```

<h2 id="tocS_ECSServiceMappingLimitExceededException">ECSServiceMappingLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaecsservicemappinglimitexceededexception"></a>
<a id="schema_ECSServiceMappingLimitExceededException"></a>
<a id="tocSecsservicemappinglimitexceededexception"></a>
<a id="tocsecsservicemappinglimitexceededexception"></a>

```json
null
```

<h2 id="tocS_DeleteApplicationInput">DeleteApplicationInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationinput"></a>
<a id="schema_DeleteApplicationInput"></a>
<a id="tocSdeleteapplicationinput"></a>
<a id="tocsdeleteapplicationinput"></a>

```json
{
  "applicationName": {}
}
```

Represents the input of a <code>DeleteApplication</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|true|none|none|

<h2 id="tocS_DeleteDeploymentConfigInput">DeleteDeploymentConfigInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletedeploymentconfiginput"></a>
<a id="schema_DeleteDeploymentConfigInput"></a>
<a id="tocSdeletedeploymentconfiginput"></a>
<a id="tocsdeletedeploymentconfiginput"></a>

```json
{
  "deploymentConfigName": {}
}
```

Represents the input of a <code>DeleteDeploymentConfig</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentConfigName|object|true|none|none|

<h2 id="tocS_DeploymentConfigInUseException">DeploymentConfigInUseException</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentconfiginuseexception"></a>
<a id="schema_DeploymentConfigInUseException"></a>
<a id="tocSdeploymentconfiginuseexception"></a>
<a id="tocsdeploymentconfiginuseexception"></a>

```json
null
```

<h2 id="tocS_InvalidOperationException">InvalidOperationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidoperationexception"></a>
<a id="schema_InvalidOperationException"></a>
<a id="tocSinvalidoperationexception"></a>
<a id="tocsinvalidoperationexception"></a>

```json
null
```

<h2 id="tocS_DeleteDeploymentGroupOutput">DeleteDeploymentGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletedeploymentgroupoutput"></a>
<a id="schema_DeleteDeploymentGroupOutput"></a>
<a id="tocSdeletedeploymentgroupoutput"></a>
<a id="tocsdeletedeploymentgroupoutput"></a>

```json
{
  "hooksNotCleanedUp": {}
}
```

Represents the output of a <code>DeleteDeploymentGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hooksNotCleanedUp|object|false|none|none|

<h2 id="tocS_DeleteDeploymentGroupInput">DeleteDeploymentGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletedeploymentgroupinput"></a>
<a id="schema_DeleteDeploymentGroupInput"></a>
<a id="tocSdeletedeploymentgroupinput"></a>
<a id="tocsdeletedeploymentgroupinput"></a>

```json
{
  "applicationName": {},
  "deploymentGroupName": {}
}
```

Represents the input of a <code>DeleteDeploymentGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|true|none|none|
|deploymentGroupName|object|true|none|none|

<h2 id="tocS_DeleteGitHubAccountTokenOutput">DeleteGitHubAccountTokenOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletegithubaccounttokenoutput"></a>
<a id="schema_DeleteGitHubAccountTokenOutput"></a>
<a id="tocSdeletegithubaccounttokenoutput"></a>
<a id="tocsdeletegithubaccounttokenoutput"></a>

```json
{
  "tokenName": {}
}
```

Represents the output of a <code>DeleteGitHubAccountToken</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokenName|object|false|none|none|

<h2 id="tocS_DeleteGitHubAccountTokenInput">DeleteGitHubAccountTokenInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletegithubaccounttokeninput"></a>
<a id="schema_DeleteGitHubAccountTokenInput"></a>
<a id="tocSdeletegithubaccounttokeninput"></a>
<a id="tocsdeletegithubaccounttokeninput"></a>

```json
{
  "tokenName": {}
}
```

Represents the input of a <code>DeleteGitHubAccount</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokenName|object|false|none|none|

<h2 id="tocS_GitHubAccountTokenNameRequiredException">GitHubAccountTokenNameRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemagithubaccounttokennamerequiredexception"></a>
<a id="schema_GitHubAccountTokenNameRequiredException"></a>
<a id="tocSgithubaccounttokennamerequiredexception"></a>
<a id="tocsgithubaccounttokennamerequiredexception"></a>

```json
null
```

<h2 id="tocS_GitHubAccountTokenDoesNotExistException">GitHubAccountTokenDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemagithubaccounttokendoesnotexistexception"></a>
<a id="schema_GitHubAccountTokenDoesNotExistException"></a>
<a id="tocSgithubaccounttokendoesnotexistexception"></a>
<a id="tocsgithubaccounttokendoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_InvalidGitHubAccountTokenNameException">InvalidGitHubAccountTokenNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidgithubaccounttokennameexception"></a>
<a id="schema_InvalidGitHubAccountTokenNameException"></a>
<a id="tocSinvalidgithubaccounttokennameexception"></a>
<a id="tocsinvalidgithubaccounttokennameexception"></a>

```json
null
```

<h2 id="tocS_ResourceValidationException">ResourceValidationException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcevalidationexception"></a>
<a id="schema_ResourceValidationException"></a>
<a id="tocSresourcevalidationexception"></a>
<a id="tocsresourcevalidationexception"></a>

```json
null
```

<h2 id="tocS_OperationNotSupportedException">OperationNotSupportedException</h2>
<!-- backwards compatibility -->
<a id="schemaoperationnotsupportedexception"></a>
<a id="schema_OperationNotSupportedException"></a>
<a id="tocSoperationnotsupportedexception"></a>
<a id="tocsoperationnotsupportedexception"></a>

```json
null
```

<h2 id="tocS_DeleteResourcesByExternalIdOutput">DeleteResourcesByExternalIdOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcesbyexternalidoutput"></a>
<a id="schema_DeleteResourcesByExternalIdOutput"></a>
<a id="tocSdeleteresourcesbyexternalidoutput"></a>
<a id="tocsdeleteresourcesbyexternalidoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteResourcesByExternalIdInput">DeleteResourcesByExternalIdInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcesbyexternalidinput"></a>
<a id="schema_DeleteResourcesByExternalIdInput"></a>
<a id="tocSdeleteresourcesbyexternalidinput"></a>
<a id="tocsdeleteresourcesbyexternalidinput"></a>

```json
{
  "externalId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalId|object|false|none|none|

<h2 id="tocS_DeregisterOnPremisesInstanceInput">DeregisterOnPremisesInstanceInput</h2>
<!-- backwards compatibility -->
<a id="schemaderegisteronpremisesinstanceinput"></a>
<a id="schema_DeregisterOnPremisesInstanceInput"></a>
<a id="tocSderegisteronpremisesinstanceinput"></a>
<a id="tocsderegisteronpremisesinstanceinput"></a>

```json
{
  "instanceName": {}
}
```

Represents the input of a <code>DeregisterOnPremisesInstance</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceName|object|true|none|none|

<h2 id="tocS_GetApplicationOutput">GetApplicationOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetapplicationoutput"></a>
<a id="schema_GetApplicationOutput"></a>
<a id="tocSgetapplicationoutput"></a>
<a id="tocsgetapplicationoutput"></a>

```json
{
  "application": {
    "applicationId": {},
    "applicationName": {},
    "createTime": {},
    "linkedToGitHub": {},
    "gitHubAccountName": {},
    "computePlatform": {}
  }
}
```

Represents the output of a <code>GetApplication</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|object|false|none|none|

<h2 id="tocS_GetApplicationInput">GetApplicationInput</h2>
<!-- backwards compatibility -->
<a id="schemagetapplicationinput"></a>
<a id="schema_GetApplicationInput"></a>
<a id="tocSgetapplicationinput"></a>
<a id="tocsgetapplicationinput"></a>

```json
{
  "applicationName": {}
}
```

Represents the input of a <code>GetApplication</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|true|none|none|

<h2 id="tocS_GetApplicationRevisionOutput">GetApplicationRevisionOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetapplicationrevisionoutput"></a>
<a id="schema_GetApplicationRevisionOutput"></a>
<a id="tocSgetapplicationrevisionoutput"></a>
<a id="tocsgetapplicationrevisionoutput"></a>

```json
{
  "applicationName": {},
  "revision": {
    "revisionType": {},
    "s3Location": {
      "bucket": {},
      "key": {},
      "bundleType": {},
      "version": {},
      "eTag": {}
    },
    "gitHubLocation": {
      "repository": {},
      "commitId": {}
    },
    "string": {
      "content": {},
      "sha256": {}
    },
    "appSpecContent": {
      "content": {},
      "sha256": {}
    }
  },
  "revisionInfo": {
    "description": {},
    "deploymentGroups": {},
    "firstUsedTime": {},
    "lastUsedTime": {},
    "registerTime": {}
  }
}
```

Represents the output of a <code>GetApplicationRevision</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|false|none|none|
|revision|object|false|none|none|
|revisionInfo|object|false|none|none|

<h2 id="tocS_GetApplicationRevisionInput">GetApplicationRevisionInput</h2>
<!-- backwards compatibility -->
<a id="schemagetapplicationrevisioninput"></a>
<a id="schema_GetApplicationRevisionInput"></a>
<a id="tocSgetapplicationrevisioninput"></a>
<a id="tocsgetapplicationrevisioninput"></a>

```json
{
  "applicationName": {},
  "revision": {
    "revisionType": {},
    "s3Location": {
      "bucket": {},
      "key": {},
      "bundleType": {},
      "version": {},
      "eTag": {}
    },
    "gitHubLocation": {
      "repository": {},
      "commitId": {}
    },
    "string": {
      "content": {},
      "sha256": {}
    },
    "appSpecContent": {
      "content": {},
      "sha256": {}
    }
  }
}
```

Represents the input of a <code>GetApplicationRevision</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|true|none|none|
|revision|object|true|none|none|

<h2 id="tocS_GetDeploymentOutput">GetDeploymentOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentoutput"></a>
<a id="schema_GetDeploymentOutput"></a>
<a id="tocSgetdeploymentoutput"></a>
<a id="tocsgetdeploymentoutput"></a>

```json
{
  "deploymentInfo": {
    "applicationName": {},
    "deploymentGroupName": {},
    "deploymentConfigName": {},
    "deploymentId": {},
    "previousRevision": {
      "revisionType": {},
      "s3Location": {
        "bucket": {},
        "key": {},
        "bundleType": {},
        "version": {},
        "eTag": {}
      },
      "gitHubLocation": {
        "repository": {},
        "commitId": {}
      },
      "string": {
        "content": {},
        "sha256": {}
      },
      "appSpecContent": {
        "content": {},
        "sha256": {}
      }
    },
    "revision": {
      "revisionType": {},
      "s3Location": {
        "bucket": {},
        "key": {},
        "bundleType": {},
        "version": {},
        "eTag": {}
      },
      "gitHubLocation": {
        "repository": {},
        "commitId": {}
      },
      "string": {
        "content": {},
        "sha256": {}
      },
      "appSpecContent": {
        "content": {},
        "sha256": {}
      }
    },
    "status": {},
    "errorInformation": {
      "code": {},
      "message": {}
    },
    "createTime": {},
    "startTime": {},
    "completeTime": {},
    "deploymentOverview": {
      "Pending": {},
      "InProgress": {},
      "Succeeded": {},
      "Failed": {},
      "Skipped": {},
      "Ready": {}
    },
    "description": {},
    "creator": {},
    "ignoreApplicationStopFailures": {},
    "autoRollbackConfiguration": {
      "enabled": {},
      "events": {}
    },
    "updateOutdatedInstancesOnly": {},
    "rollbackInfo": {
      "rollbackDeploymentId": {},
      "rollbackTriggeringDeploymentId": {},
      "rollbackMessage": {}
    },
    "deploymentStyle": {
      "deploymentType": {},
      "deploymentOption": {}
    },
    "targetInstances": {
      "tagFilters": {},
      "autoScalingGroups": {},
      "ec2TagSet": {
        "ec2TagSetList": {}
      }
    },
    "instanceTerminationWaitTimeStarted": {},
    "blueGreenDeploymentConfiguration": {
      "terminateBlueInstancesOnDeploymentSuccess": {
        "action": {},
        "terminationWaitTimeInMinutes": {}
      },
      "deploymentReadyOption": {
        "actionOnTimeout": {},
        "waitTimeInMinutes": {}
      },
      "greenFleetProvisioningOption": {
        "action": {}
      }
    },
    "loadBalancerInfo": {
      "elbInfoList": {},
      "targetGroupInfoList": {},
      "targetGroupPairInfoList": {}
    },
    "additionalDeploymentStatusInfo": {},
    "fileExistsBehavior": {},
    "deploymentStatusMessages": {},
    "computePlatform": {},
    "externalId": {},
    "relatedDeployments": {
      "autoUpdateOutdatedInstancesRootDeploymentId": {},
      "autoUpdateOutdatedInstancesDeploymentIds": {}
    },
    "overrideAlarmConfiguration": {
      "enabled": {},
      "ignorePollAlarmFailure": {},
      "alarms": {}
    }
  }
}
```

Represents the output of a <code>GetDeployment</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentInfo|object|false|none|none|

<h2 id="tocS_GetDeploymentInput">GetDeploymentInput</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentinput"></a>
<a id="schema_GetDeploymentInput"></a>
<a id="tocSgetdeploymentinput"></a>
<a id="tocsgetdeploymentinput"></a>

```json
{
  "deploymentId": {}
}
```

Represents the input of a <code>GetDeployment</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|true|none|none|

<h2 id="tocS_GetDeploymentConfigOutput">GetDeploymentConfigOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentconfigoutput"></a>
<a id="schema_GetDeploymentConfigOutput"></a>
<a id="tocSgetdeploymentconfigoutput"></a>
<a id="tocsgetdeploymentconfigoutput"></a>

```json
{
  "deploymentConfigInfo": {
    "deploymentConfigId": {},
    "deploymentConfigName": {},
    "minimumHealthyHosts": {
      "type": {},
      "value": {}
    },
    "createTime": {},
    "computePlatform": {},
    "trafficRoutingConfig": {
      "type": {},
      "timeBasedCanary": {
        "canaryPercentage": {},
        "canaryInterval": {}
      },
      "timeBasedLinear": {
        "linearPercentage": {},
        "linearInterval": {}
      }
    }
  }
}
```

Represents the output of a <code>GetDeploymentConfig</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentConfigInfo|object|false|none|none|

<h2 id="tocS_GetDeploymentConfigInput">GetDeploymentConfigInput</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentconfiginput"></a>
<a id="schema_GetDeploymentConfigInput"></a>
<a id="tocSgetdeploymentconfiginput"></a>
<a id="tocsgetdeploymentconfiginput"></a>

```json
{
  "deploymentConfigName": {}
}
```

Represents the input of a <code>GetDeploymentConfig</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentConfigName|object|true|none|none|

<h2 id="tocS_GetDeploymentGroupOutput">GetDeploymentGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentgroupoutput"></a>
<a id="schema_GetDeploymentGroupOutput"></a>
<a id="tocSgetdeploymentgroupoutput"></a>
<a id="tocsgetdeploymentgroupoutput"></a>

```json
{
  "deploymentGroupInfo": {
    "applicationName": {},
    "deploymentGroupId": {},
    "deploymentGroupName": {},
    "deploymentConfigName": {},
    "ec2TagFilters": {},
    "onPremisesInstanceTagFilters": {},
    "autoScalingGroups": {},
    "serviceRoleArn": {},
    "targetRevision": {
      "revisionType": {},
      "s3Location": {
        "bucket": {},
        "key": {},
        "bundleType": {},
        "version": {},
        "eTag": {}
      },
      "gitHubLocation": {
        "repository": {},
        "commitId": {}
      },
      "string": {
        "content": {},
        "sha256": {}
      },
      "appSpecContent": {
        "content": {},
        "sha256": {}
      }
    },
    "triggerConfigurations": {},
    "alarmConfiguration": {
      "enabled": {},
      "ignorePollAlarmFailure": {},
      "alarms": {}
    },
    "autoRollbackConfiguration": {
      "enabled": {},
      "events": {}
    },
    "deploymentStyle": {
      "deploymentType": {},
      "deploymentOption": {}
    },
    "outdatedInstancesStrategy": {},
    "blueGreenDeploymentConfiguration": {
      "terminateBlueInstancesOnDeploymentSuccess": {
        "action": {},
        "terminationWaitTimeInMinutes": {}
      },
      "deploymentReadyOption": {
        "actionOnTimeout": {},
        "waitTimeInMinutes": {}
      },
      "greenFleetProvisioningOption": {
        "action": {}
      }
    },
    "loadBalancerInfo": {
      "elbInfoList": {},
      "targetGroupInfoList": {},
      "targetGroupPairInfoList": {}
    },
    "lastSuccessfulDeployment": {
      "deploymentId": {},
      "status": {},
      "endTime": {},
      "createTime": {}
    },
    "lastAttemptedDeployment": {
      "deploymentId": {},
      "status": {},
      "endTime": {},
      "createTime": {}
    },
    "ec2TagSet": {
      "ec2TagSetList": {}
    },
    "onPremisesTagSet": {
      "onPremisesTagSetList": {}
    },
    "computePlatform": {},
    "ecsServices": {}
  }
}
```

Represents the output of a <code>GetDeploymentGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentGroupInfo|object|false|none|none|

<h2 id="tocS_GetDeploymentGroupInput">GetDeploymentGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentgroupinput"></a>
<a id="schema_GetDeploymentGroupInput"></a>
<a id="tocSgetdeploymentgroupinput"></a>
<a id="tocsgetdeploymentgroupinput"></a>

```json
{
  "applicationName": {},
  "deploymentGroupName": {}
}
```

Represents the input of a <code>GetDeploymentGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|true|none|none|
|deploymentGroupName|object|true|none|none|

<h2 id="tocS_GetDeploymentInstanceOutput">GetDeploymentInstanceOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentinstanceoutput"></a>
<a id="schema_GetDeploymentInstanceOutput"></a>
<a id="tocSgetdeploymentinstanceoutput"></a>
<a id="tocsgetdeploymentinstanceoutput"></a>

```json
{
  "instanceSummary": {
    "deploymentId": {},
    "instanceId": {},
    "status": {},
    "lastUpdatedAt": {},
    "lifecycleEvents": {},
    "instanceType": {}
  }
}
```

 Represents the output of a <code>GetDeploymentInstance</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceSummary|object|false|none|none|

<h2 id="tocS_GetDeploymentInstanceInput">GetDeploymentInstanceInput</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentinstanceinput"></a>
<a id="schema_GetDeploymentInstanceInput"></a>
<a id="tocSgetdeploymentinstanceinput"></a>
<a id="tocsgetdeploymentinstanceinput"></a>

```json
{
  "deploymentId": {},
  "instanceId": {}
}
```

 Represents the input of a <code>GetDeploymentInstance</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|true|none|none|
|instanceId|object|true|none|none|

<h2 id="tocS_GetDeploymentTargetOutput">GetDeploymentTargetOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymenttargetoutput"></a>
<a id="schema_GetDeploymentTargetOutput"></a>
<a id="tocSgetdeploymenttargetoutput"></a>
<a id="tocsgetdeploymenttargetoutput"></a>

```json
{
  "deploymentTarget": {
    "deploymentTargetType": {},
    "instanceTarget": {
      "deploymentId": {},
      "targetId": {},
      "targetArn": {},
      "status": {},
      "lastUpdatedAt": {},
      "lifecycleEvents": {},
      "instanceLabel": {}
    },
    "lambdaTarget": {
      "deploymentId": {},
      "targetId": {},
      "targetArn": {},
      "status": {},
      "lastUpdatedAt": {},
      "lifecycleEvents": {},
      "lambdaFunctionInfo": {
        "functionName": {},
        "functionAlias": {},
        "currentVersion": {},
        "targetVersion": {},
        "targetVersionWeight": {}
      }
    },
    "ecsTarget": {
      "deploymentId": {},
      "targetId": {},
      "targetArn": {},
      "lastUpdatedAt": {},
      "lifecycleEvents": {},
      "status": {},
      "taskSetsInfo": {}
    },
    "cloudFormationTarget": {
      "deploymentId": {},
      "targetId": {},
      "lastUpdatedAt": {},
      "lifecycleEvents": {},
      "status": {},
      "resourceType": {},
      "targetVersionWeight": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentTarget|object|false|none|none|

<h2 id="tocS_GetDeploymentTargetInput">GetDeploymentTargetInput</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymenttargetinput"></a>
<a id="schema_GetDeploymentTargetInput"></a>
<a id="tocSgetdeploymenttargetinput"></a>
<a id="tocsgetdeploymenttargetinput"></a>

```json
{
  "deploymentId": {},
  "targetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|false|none|none|
|targetId|object|false|none|none|

<h2 id="tocS_GetOnPremisesInstanceOutput">GetOnPremisesInstanceOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetonpremisesinstanceoutput"></a>
<a id="schema_GetOnPremisesInstanceOutput"></a>
<a id="tocSgetonpremisesinstanceoutput"></a>
<a id="tocsgetonpremisesinstanceoutput"></a>

```json
{
  "instanceInfo": {
    "instanceName": {},
    "iamSessionArn": {},
    "iamUserArn": {},
    "instanceArn": {},
    "registerTime": {},
    "deregisterTime": {},
    "tags": {}
  }
}
```

 Represents the output of a <code>GetOnPremisesInstance</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceInfo|object|false|none|none|

<h2 id="tocS_GetOnPremisesInstanceInput">GetOnPremisesInstanceInput</h2>
<!-- backwards compatibility -->
<a id="schemagetonpremisesinstanceinput"></a>
<a id="schema_GetOnPremisesInstanceInput"></a>
<a id="tocSgetonpremisesinstanceinput"></a>
<a id="tocsgetonpremisesinstanceinput"></a>

```json
{
  "instanceName": {}
}
```

 Represents the input of a <code>GetOnPremisesInstance</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceName|object|true|none|none|

<h2 id="tocS_ListApplicationRevisionsOutput">ListApplicationRevisionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationrevisionsoutput"></a>
<a id="schema_ListApplicationRevisionsOutput"></a>
<a id="tocSlistapplicationrevisionsoutput"></a>
<a id="tocslistapplicationrevisionsoutput"></a>

```json
{
  "revisions": {},
  "nextToken": {}
}
```

Represents the output of a <code>ListApplicationRevisions</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revisions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListApplicationRevisionsInput">ListApplicationRevisionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationrevisionsinput"></a>
<a id="schema_ListApplicationRevisionsInput"></a>
<a id="tocSlistapplicationrevisionsinput"></a>
<a id="tocslistapplicationrevisionsinput"></a>

```json
{
  "applicationName": {},
  "sortBy": {},
  "sortOrder": {},
  "s3Bucket": {},
  "s3KeyPrefix": {},
  "deployed": {},
  "nextToken": {}
}
```

 Represents the input of a <code>ListApplicationRevisions</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|true|none|none|
|sortBy|object|false|none|none|
|sortOrder|object|false|none|none|
|s3Bucket|object|false|none|none|
|s3KeyPrefix|object|false|none|none|
|deployed|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_InvalidSortByException">InvalidSortByException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsortbyexception"></a>
<a id="schema_InvalidSortByException"></a>
<a id="tocSinvalidsortbyexception"></a>
<a id="tocsinvalidsortbyexception"></a>

```json
null
```

<h2 id="tocS_InvalidSortOrderException">InvalidSortOrderException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsortorderexception"></a>
<a id="schema_InvalidSortOrderException"></a>
<a id="tocSinvalidsortorderexception"></a>
<a id="tocsinvalidsortorderexception"></a>

```json
null
```

<h2 id="tocS_InvalidBucketNameFilterException">InvalidBucketNameFilterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidbucketnamefilterexception"></a>
<a id="schema_InvalidBucketNameFilterException"></a>
<a id="tocSinvalidbucketnamefilterexception"></a>
<a id="tocsinvalidbucketnamefilterexception"></a>

```json
null
```

<h2 id="tocS_InvalidKeyPrefixFilterException">InvalidKeyPrefixFilterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidkeyprefixfilterexception"></a>
<a id="schema_InvalidKeyPrefixFilterException"></a>
<a id="tocSinvalidkeyprefixfilterexception"></a>
<a id="tocsinvalidkeyprefixfilterexception"></a>

```json
null
```

<h2 id="tocS_BucketNameFilterRequiredException">BucketNameFilterRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemabucketnamefilterrequiredexception"></a>
<a id="schema_BucketNameFilterRequiredException"></a>
<a id="tocSbucketnamefilterrequiredexception"></a>
<a id="tocsbucketnamefilterrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidDeployedStateFilterException">InvalidDeployedStateFilterException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddeployedstatefilterexception"></a>
<a id="schema_InvalidDeployedStateFilterException"></a>
<a id="tocSinvaliddeployedstatefilterexception"></a>
<a id="tocsinvaliddeployedstatefilterexception"></a>

```json
null
```

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_ListApplicationsOutput">ListApplicationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsoutput"></a>
<a id="schema_ListApplicationsOutput"></a>
<a id="tocSlistapplicationsoutput"></a>
<a id="tocslistapplicationsoutput"></a>

```json
{
  "applications": {},
  "nextToken": {}
}
```

Represents the output of a ListApplications operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applications|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListApplicationsInput">ListApplicationsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsinput"></a>
<a id="schema_ListApplicationsInput"></a>
<a id="tocSlistapplicationsinput"></a>
<a id="tocslistapplicationsinput"></a>

```json
{
  "nextToken": {}
}
```

Represents the input of a <code>ListApplications</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDeploymentConfigsOutput">ListDeploymentConfigsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistdeploymentconfigsoutput"></a>
<a id="schema_ListDeploymentConfigsOutput"></a>
<a id="tocSlistdeploymentconfigsoutput"></a>
<a id="tocslistdeploymentconfigsoutput"></a>

```json
{
  "deploymentConfigsList": {},
  "nextToken": {}
}
```

Represents the output of a <code>ListDeploymentConfigs</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentConfigsList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDeploymentConfigsInput">ListDeploymentConfigsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistdeploymentconfigsinput"></a>
<a id="schema_ListDeploymentConfigsInput"></a>
<a id="tocSlistdeploymentconfigsinput"></a>
<a id="tocslistdeploymentconfigsinput"></a>

```json
{
  "nextToken": {}
}
```

Represents the input of a <code>ListDeploymentConfigs</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDeploymentGroupsOutput">ListDeploymentGroupsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistdeploymentgroupsoutput"></a>
<a id="schema_ListDeploymentGroupsOutput"></a>
<a id="tocSlistdeploymentgroupsoutput"></a>
<a id="tocslistdeploymentgroupsoutput"></a>

```json
{
  "applicationName": {},
  "deploymentGroups": {},
  "nextToken": {}
}
```

Represents the output of a <code>ListDeploymentGroups</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|false|none|none|
|deploymentGroups|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDeploymentGroupsInput">ListDeploymentGroupsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistdeploymentgroupsinput"></a>
<a id="schema_ListDeploymentGroupsInput"></a>
<a id="tocSlistdeploymentgroupsinput"></a>
<a id="tocslistdeploymentgroupsinput"></a>

```json
{
  "applicationName": {},
  "nextToken": {}
}
```

Represents the input of a <code>ListDeploymentGroups</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDeploymentInstancesOutput">ListDeploymentInstancesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistdeploymentinstancesoutput"></a>
<a id="schema_ListDeploymentInstancesOutput"></a>
<a id="tocSlistdeploymentinstancesoutput"></a>
<a id="tocslistdeploymentinstancesoutput"></a>

```json
{
  "instancesList": {},
  "nextToken": {}
}
```

Represents the output of a <code>ListDeploymentInstances</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instancesList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDeploymentInstancesInput">ListDeploymentInstancesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistdeploymentinstancesinput"></a>
<a id="schema_ListDeploymentInstancesInput"></a>
<a id="tocSlistdeploymentinstancesinput"></a>
<a id="tocslistdeploymentinstancesinput"></a>

```json
{
  "deploymentId": {},
  "nextToken": {},
  "instanceStatusFilter": {},
  "instanceTypeFilter": {}
}
```

 Represents the input of a <code>ListDeploymentInstances</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|true|none|none|
|nextToken|object|false|none|none|
|instanceStatusFilter|object|false|none|none|
|instanceTypeFilter|object|false|none|none|

<h2 id="tocS_InvalidInstanceStatusException">InvalidInstanceStatusException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinstancestatusexception"></a>
<a id="schema_InvalidInstanceStatusException"></a>
<a id="tocSinvalidinstancestatusexception"></a>
<a id="tocsinvalidinstancestatusexception"></a>

```json
null
```

<h2 id="tocS_InvalidInstanceTypeException">InvalidInstanceTypeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinstancetypeexception"></a>
<a id="schema_InvalidInstanceTypeException"></a>
<a id="tocSinvalidinstancetypeexception"></a>
<a id="tocsinvalidinstancetypeexception"></a>

```json
null
```

<h2 id="tocS_InvalidDeploymentInstanceTypeException">InvalidDeploymentInstanceTypeException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddeploymentinstancetypeexception"></a>
<a id="schema_InvalidDeploymentInstanceTypeException"></a>
<a id="tocSinvaliddeploymentinstancetypeexception"></a>
<a id="tocsinvaliddeploymentinstancetypeexception"></a>

```json
null
```

<h2 id="tocS_InvalidTargetFilterNameException">InvalidTargetFilterNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtargetfilternameexception"></a>
<a id="schema_InvalidTargetFilterNameException"></a>
<a id="tocSinvalidtargetfilternameexception"></a>
<a id="tocsinvalidtargetfilternameexception"></a>

```json
null
```

<h2 id="tocS_ListDeploymentTargetsOutput">ListDeploymentTargetsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistdeploymenttargetsoutput"></a>
<a id="schema_ListDeploymentTargetsOutput"></a>
<a id="tocSlistdeploymenttargetsoutput"></a>
<a id="tocslistdeploymenttargetsoutput"></a>

```json
{
  "targetIds": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetIds|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDeploymentTargetsInput">ListDeploymentTargetsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistdeploymenttargetsinput"></a>
<a id="schema_ListDeploymentTargetsInput"></a>
<a id="tocSlistdeploymenttargetsinput"></a>
<a id="tocslistdeploymenttargetsinput"></a>

```json
{
  "deploymentId": {},
  "nextToken": {},
  "targetFilters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|false|none|none|
|nextToken|object|false|none|none|
|targetFilters|object|false|none|none|

<h2 id="tocS_ListDeploymentsOutput">ListDeploymentsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistdeploymentsoutput"></a>
<a id="schema_ListDeploymentsOutput"></a>
<a id="tocSlistdeploymentsoutput"></a>
<a id="tocslistdeploymentsoutput"></a>

```json
{
  "deployments": {},
  "nextToken": {}
}
```

Represents the output of a <code>ListDeployments</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployments|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDeploymentsInput">ListDeploymentsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistdeploymentsinput"></a>
<a id="schema_ListDeploymentsInput"></a>
<a id="tocSlistdeploymentsinput"></a>
<a id="tocslistdeploymentsinput"></a>

```json
{
  "applicationName": {},
  "deploymentGroupName": {},
  "externalId": {},
  "includeOnlyStatuses": {},
  "createTimeRange": {
    "start": {},
    "end": {}
  },
  "nextToken": {}
}
```

Represents the input of a <code>ListDeployments</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|false|none|none|
|deploymentGroupName|object|false|none|none|
|externalId|object|false|none|none|
|includeOnlyStatuses|object|false|none|none|
|createTimeRange|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_InvalidTimeRangeException">InvalidTimeRangeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtimerangeexception"></a>
<a id="schema_InvalidTimeRangeException"></a>
<a id="tocSinvalidtimerangeexception"></a>
<a id="tocsinvalidtimerangeexception"></a>

```json
null
```

<h2 id="tocS_InvalidExternalIdException">InvalidExternalIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidexternalidexception"></a>
<a id="schema_InvalidExternalIdException"></a>
<a id="tocSinvalidexternalidexception"></a>
<a id="tocsinvalidexternalidexception"></a>

```json
null
```

<h2 id="tocS_ListGitHubAccountTokenNamesOutput">ListGitHubAccountTokenNamesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistgithubaccounttokennamesoutput"></a>
<a id="schema_ListGitHubAccountTokenNamesOutput"></a>
<a id="tocSlistgithubaccounttokennamesoutput"></a>
<a id="tocslistgithubaccounttokennamesoutput"></a>

```json
{
  "tokenNameList": {},
  "nextToken": {}
}
```

Represents the output of a <code>ListGitHubAccountTokenNames</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokenNameList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListGitHubAccountTokenNamesInput">ListGitHubAccountTokenNamesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistgithubaccounttokennamesinput"></a>
<a id="schema_ListGitHubAccountTokenNamesInput"></a>
<a id="tocSlistgithubaccounttokennamesinput"></a>
<a id="tocslistgithubaccounttokennamesinput"></a>

```json
{
  "nextToken": {}
}
```

Represents the input of a <code>ListGitHubAccountTokenNames</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|

<h2 id="tocS_ListOnPremisesInstancesOutput">ListOnPremisesInstancesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistonpremisesinstancesoutput"></a>
<a id="schema_ListOnPremisesInstancesOutput"></a>
<a id="tocSlistonpremisesinstancesoutput"></a>
<a id="tocslistonpremisesinstancesoutput"></a>

```json
{
  "instanceNames": {},
  "nextToken": {}
}
```

Represents the output of the list on-premises instances operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceNames|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListOnPremisesInstancesInput">ListOnPremisesInstancesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistonpremisesinstancesinput"></a>
<a id="schema_ListOnPremisesInstancesInput"></a>
<a id="tocSlistonpremisesinstancesinput"></a>
<a id="tocslistonpremisesinstancesinput"></a>

```json
{
  "registrationStatus": {},
  "tagFilters": {},
  "nextToken": {}
}
```

Represents the input of a <code>ListOnPremisesInstances</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registrationStatus|object|false|none|none|
|tagFilters|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_InvalidRegistrationStatusException">InvalidRegistrationStatusException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidregistrationstatusexception"></a>
<a id="schema_InvalidRegistrationStatusException"></a>
<a id="tocSinvalidregistrationstatusexception"></a>
<a id="tocsinvalidregistrationstatusexception"></a>

```json
null
```

<h2 id="tocS_InvalidTagFilterException">InvalidTagFilterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtagfilterexception"></a>
<a id="schema_InvalidTagFilterException"></a>
<a id="tocSinvalidtagfilterexception"></a>
<a id="tocsinvalidtagfilterexception"></a>

```json
null
```

<h2 id="tocS_ListTagsForResourceOutput">ListTagsForResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceoutput"></a>
<a id="schema_ListTagsForResourceOutput"></a>
<a id="tocSlisttagsforresourceoutput"></a>
<a id="tocslisttagsforresourceoutput"></a>

```json
{
  "Tags": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceInput">ListTagsForResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceinput"></a>
<a id="schema_ListTagsForResourceInput"></a>
<a id="tocSlisttagsforresourceinput"></a>
<a id="tocslisttagsforresourceinput"></a>

```json
{
  "ResourceArn": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ArnNotSupportedException">ArnNotSupportedException</h2>
<!-- backwards compatibility -->
<a id="schemaarnnotsupportedexception"></a>
<a id="schema_ArnNotSupportedException"></a>
<a id="tocSarnnotsupportedexception"></a>
<a id="tocsarnnotsupportedexception"></a>

```json
null
```

<h2 id="tocS_InvalidArnException">InvalidArnException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidarnexception"></a>
<a id="schema_InvalidArnException"></a>
<a id="tocSinvalidarnexception"></a>
<a id="tocsinvalidarnexception"></a>

```json
null
```

<h2 id="tocS_ResourceArnRequiredException">ResourceArnRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearnrequiredexception"></a>
<a id="schema_ResourceArnRequiredException"></a>
<a id="tocSresourcearnrequiredexception"></a>
<a id="tocsresourcearnrequiredexception"></a>

```json
null
```

<h2 id="tocS_PutLifecycleEventHookExecutionStatusOutput">PutLifecycleEventHookExecutionStatusOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputlifecycleeventhookexecutionstatusoutput"></a>
<a id="schema_PutLifecycleEventHookExecutionStatusOutput"></a>
<a id="tocSputlifecycleeventhookexecutionstatusoutput"></a>
<a id="tocsputlifecycleeventhookexecutionstatusoutput"></a>

```json
{
  "lifecycleEventHookExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lifecycleEventHookExecutionId|object|false|none|none|

<h2 id="tocS_PutLifecycleEventHookExecutionStatusInput">PutLifecycleEventHookExecutionStatusInput</h2>
<!-- backwards compatibility -->
<a id="schemaputlifecycleeventhookexecutionstatusinput"></a>
<a id="schema_PutLifecycleEventHookExecutionStatusInput"></a>
<a id="tocSputlifecycleeventhookexecutionstatusinput"></a>
<a id="tocsputlifecycleeventhookexecutionstatusinput"></a>

```json
{
  "deploymentId": {},
  "lifecycleEventHookExecutionId": {},
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|false|none|none|
|lifecycleEventHookExecutionId|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_InvalidLifecycleEventHookExecutionStatusException">InvalidLifecycleEventHookExecutionStatusException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidlifecycleeventhookexecutionstatusexception"></a>
<a id="schema_InvalidLifecycleEventHookExecutionStatusException"></a>
<a id="tocSinvalidlifecycleeventhookexecutionstatusexception"></a>
<a id="tocsinvalidlifecycleeventhookexecutionstatusexception"></a>

```json
null
```

<h2 id="tocS_InvalidLifecycleEventHookExecutionIdException">InvalidLifecycleEventHookExecutionIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidlifecycleeventhookexecutionidexception"></a>
<a id="schema_InvalidLifecycleEventHookExecutionIdException"></a>
<a id="tocSinvalidlifecycleeventhookexecutionidexception"></a>
<a id="tocsinvalidlifecycleeventhookexecutionidexception"></a>

```json
null
```

<h2 id="tocS_LifecycleEventAlreadyCompletedException">LifecycleEventAlreadyCompletedException</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleeventalreadycompletedexception"></a>
<a id="schema_LifecycleEventAlreadyCompletedException"></a>
<a id="tocSlifecycleeventalreadycompletedexception"></a>
<a id="tocslifecycleeventalreadycompletedexception"></a>

```json
null
```

<h2 id="tocS_RegisterApplicationRevisionInput">RegisterApplicationRevisionInput</h2>
<!-- backwards compatibility -->
<a id="schemaregisterapplicationrevisioninput"></a>
<a id="schema_RegisterApplicationRevisionInput"></a>
<a id="tocSregisterapplicationrevisioninput"></a>
<a id="tocsregisterapplicationrevisioninput"></a>

```json
{
  "applicationName": {},
  "description": {},
  "revision": {
    "revisionType": {},
    "s3Location": {
      "bucket": {},
      "key": {},
      "bundleType": {},
      "version": {},
      "eTag": {}
    },
    "gitHubLocation": {
      "repository": {},
      "commitId": {}
    },
    "string": {
      "content": {},
      "sha256": {}
    },
    "appSpecContent": {
      "content": {},
      "sha256": {}
    }
  }
}
```

Represents the input of a RegisterApplicationRevision operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|true|none|none|
|description|object|false|none|none|
|revision|object|true|none|none|

<h2 id="tocS_RegisterOnPremisesInstanceInput">RegisterOnPremisesInstanceInput</h2>
<!-- backwards compatibility -->
<a id="schemaregisteronpremisesinstanceinput"></a>
<a id="schema_RegisterOnPremisesInstanceInput"></a>
<a id="tocSregisteronpremisesinstanceinput"></a>
<a id="tocsregisteronpremisesinstanceinput"></a>

```json
{
  "instanceName": {},
  "iamSessionArn": {},
  "iamUserArn": {}
}
```

Represents the input of the register on-premises instance operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceName|object|true|none|none|
|iamSessionArn|object|false|none|none|
|iamUserArn|object|false|none|none|

<h2 id="tocS_InstanceNameAlreadyRegisteredException">InstanceNameAlreadyRegisteredException</h2>
<!-- backwards compatibility -->
<a id="schemainstancenamealreadyregisteredexception"></a>
<a id="schema_InstanceNameAlreadyRegisteredException"></a>
<a id="tocSinstancenamealreadyregisteredexception"></a>
<a id="tocsinstancenamealreadyregisteredexception"></a>

```json
null
```

<h2 id="tocS_IamArnRequiredException">IamArnRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemaiamarnrequiredexception"></a>
<a id="schema_IamArnRequiredException"></a>
<a id="tocSiamarnrequiredexception"></a>
<a id="tocsiamarnrequiredexception"></a>

```json
null
```

<h2 id="tocS_IamSessionArnAlreadyRegisteredException">IamSessionArnAlreadyRegisteredException</h2>
<!-- backwards compatibility -->
<a id="schemaiamsessionarnalreadyregisteredexception"></a>
<a id="schema_IamSessionArnAlreadyRegisteredException"></a>
<a id="tocSiamsessionarnalreadyregisteredexception"></a>
<a id="tocsiamsessionarnalreadyregisteredexception"></a>

```json
null
```

<h2 id="tocS_IamUserArnAlreadyRegisteredException">IamUserArnAlreadyRegisteredException</h2>
<!-- backwards compatibility -->
<a id="schemaiamuserarnalreadyregisteredexception"></a>
<a id="schema_IamUserArnAlreadyRegisteredException"></a>
<a id="tocSiamuserarnalreadyregisteredexception"></a>
<a id="tocsiamuserarnalreadyregisteredexception"></a>

```json
null
```

<h2 id="tocS_IamUserArnRequiredException">IamUserArnRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemaiamuserarnrequiredexception"></a>
<a id="schema_IamUserArnRequiredException"></a>
<a id="tocSiamuserarnrequiredexception"></a>
<a id="tocsiamuserarnrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidIamSessionArnException">InvalidIamSessionArnException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidiamsessionarnexception"></a>
<a id="schema_InvalidIamSessionArnException"></a>
<a id="tocSinvalidiamsessionarnexception"></a>
<a id="tocsinvalidiamsessionarnexception"></a>

```json
null
```

<h2 id="tocS_InvalidIamUserArnException">InvalidIamUserArnException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidiamuserarnexception"></a>
<a id="schema_InvalidIamUserArnException"></a>
<a id="tocSinvalidiamuserarnexception"></a>
<a id="tocsinvalidiamuserarnexception"></a>

```json
null
```

<h2 id="tocS_MultipleIamArnsProvidedException">MultipleIamArnsProvidedException</h2>
<!-- backwards compatibility -->
<a id="schemamultipleiamarnsprovidedexception"></a>
<a id="schema_MultipleIamArnsProvidedException"></a>
<a id="tocSmultipleiamarnsprovidedexception"></a>
<a id="tocsmultipleiamarnsprovidedexception"></a>

```json
null
```

<h2 id="tocS_RemoveTagsFromOnPremisesInstancesInput">RemoveTagsFromOnPremisesInstancesInput</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsfromonpremisesinstancesinput"></a>
<a id="schema_RemoveTagsFromOnPremisesInstancesInput"></a>
<a id="tocSremovetagsfromonpremisesinstancesinput"></a>
<a id="tocsremovetagsfromonpremisesinstancesinput"></a>

```json
{
  "tags": {},
  "instanceNames": {}
}
```

Represents the input of a <code>RemoveTagsFromOnPremisesInstances</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|
|instanceNames|object|true|none|none|

<h2 id="tocS_SkipWaitTimeForInstanceTerminationInput">SkipWaitTimeForInstanceTerminationInput</h2>
<!-- backwards compatibility -->
<a id="schemaskipwaittimeforinstanceterminationinput"></a>
<a id="schema_SkipWaitTimeForInstanceTerminationInput"></a>
<a id="tocSskipwaittimeforinstanceterminationinput"></a>
<a id="tocsskipwaittimeforinstanceterminationinput"></a>

```json
{
  "deploymentId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|false|none|none|

<h2 id="tocS_StopDeploymentOutput">StopDeploymentOutput</h2>
<!-- backwards compatibility -->
<a id="schemastopdeploymentoutput"></a>
<a id="schema_StopDeploymentOutput"></a>
<a id="tocSstopdeploymentoutput"></a>
<a id="tocsstopdeploymentoutput"></a>

```json
{
  "status": {},
  "statusMessage": {}
}
```

 Represents the output of a <code>StopDeployment</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|statusMessage|object|false|none|none|

<h2 id="tocS_StopDeploymentInput">StopDeploymentInput</h2>
<!-- backwards compatibility -->
<a id="schemastopdeploymentinput"></a>
<a id="schema_StopDeploymentInput"></a>
<a id="tocSstopdeploymentinput"></a>
<a id="tocsstopdeploymentinput"></a>

```json
{
  "deploymentId": {},
  "autoRollbackEnabled": {}
}
```

 Represents the input of a <code>StopDeployment</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|true|none|none|
|autoRollbackEnabled|object|false|none|none|

<h2 id="tocS_TagResourceOutput">TagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceoutput"></a>
<a id="schema_TagResourceOutput"></a>
<a id="tocStagresourceoutput"></a>
<a id="tocstagresourceoutput"></a>

```json
{}
```

<h2 id="tocS_TagResourceInput">TagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceinput"></a>
<a id="schema_TagResourceInput"></a>
<a id="tocStagresourceinput"></a>
<a id="tocstagresourceinput"></a>

```json
{
  "ResourceArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceOutput">UntagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceoutput"></a>
<a id="schema_UntagResourceOutput"></a>
<a id="tocSuntagresourceoutput"></a>
<a id="tocsuntagresourceoutput"></a>

```json
{}
```

<h2 id="tocS_UntagResourceInput">UntagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceinput"></a>
<a id="schema_UntagResourceInput"></a>
<a id="tocSuntagresourceinput"></a>
<a id="tocsuntagresourceinput"></a>

```json
{
  "ResourceArn": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateApplicationInput">UpdateApplicationInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationinput"></a>
<a id="schema_UpdateApplicationInput"></a>
<a id="tocSupdateapplicationinput"></a>
<a id="tocsupdateapplicationinput"></a>

```json
{
  "applicationName": {},
  "newApplicationName": {}
}
```

Represents the input of an <code>UpdateApplication</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|false|none|none|
|newApplicationName|object|false|none|none|

<h2 id="tocS_UpdateDeploymentGroupOutput">UpdateDeploymentGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedeploymentgroupoutput"></a>
<a id="schema_UpdateDeploymentGroupOutput"></a>
<a id="tocSupdatedeploymentgroupoutput"></a>
<a id="tocsupdatedeploymentgroupoutput"></a>

```json
{
  "hooksNotCleanedUp": {}
}
```

Represents the output of an <code>UpdateDeploymentGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hooksNotCleanedUp|object|false|none|none|

<h2 id="tocS_UpdateDeploymentGroupInput">UpdateDeploymentGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedeploymentgroupinput"></a>
<a id="schema_UpdateDeploymentGroupInput"></a>
<a id="tocSupdatedeploymentgroupinput"></a>
<a id="tocsupdatedeploymentgroupinput"></a>

```json
{
  "applicationName": {},
  "currentDeploymentGroupName": {},
  "newDeploymentGroupName": {},
  "deploymentConfigName": {},
  "ec2TagFilters": {},
  "onPremisesInstanceTagFilters": {},
  "autoScalingGroups": {},
  "serviceRoleArn": {},
  "triggerConfigurations": {},
  "alarmConfiguration": {
    "enabled": {},
    "ignorePollAlarmFailure": {},
    "alarms": {}
  },
  "autoRollbackConfiguration": {
    "enabled": {},
    "events": {}
  },
  "outdatedInstancesStrategy": {},
  "deploymentStyle": {
    "deploymentType": {},
    "deploymentOption": {}
  },
  "blueGreenDeploymentConfiguration": {
    "terminateBlueInstancesOnDeploymentSuccess": {
      "action": {},
      "terminationWaitTimeInMinutes": {}
    },
    "deploymentReadyOption": {
      "actionOnTimeout": {},
      "waitTimeInMinutes": {}
    },
    "greenFleetProvisioningOption": {
      "action": {}
    }
  },
  "loadBalancerInfo": {
    "elbInfoList": {},
    "targetGroupInfoList": {},
    "targetGroupPairInfoList": {}
  },
  "ec2TagSet": {
    "ec2TagSetList": {}
  },
  "ecsServices": {},
  "onPremisesTagSet": {
    "onPremisesTagSetList": {}
  }
}
```

Represents the input of an <code>UpdateDeploymentGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|true|none|none|
|currentDeploymentGroupName|object|true|none|none|
|newDeploymentGroupName|object|false|none|none|
|deploymentConfigName|object|false|none|none|
|ec2TagFilters|object|false|none|none|
|onPremisesInstanceTagFilters|object|false|none|none|
|autoScalingGroups|object|false|none|none|
|serviceRoleArn|object|false|none|none|
|triggerConfigurations|object|false|none|none|
|alarmConfiguration|object|false|none|none|
|autoRollbackConfiguration|object|false|none|none|
|outdatedInstancesStrategy|object|false|none|none|
|deploymentStyle|object|false|none|none|
|blueGreenDeploymentConfiguration|object|false|none|none|
|loadBalancerInfo|object|false|none|none|
|ec2TagSet|object|false|none|none|
|ecsServices|object|false|none|none|
|onPremisesTagSet|object|false|none|none|

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_InstanceNameList">InstanceNameList</h2>
<!-- backwards compatibility -->
<a id="schemainstancenamelist"></a>
<a id="schema_InstanceNameList"></a>
<a id="tocSinstancenamelist"></a>
<a id="tocsinstancenamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AdditionalDeploymentStatusInfo">AdditionalDeploymentStatusInfo</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldeploymentstatusinfo"></a>
<a id="schema_AdditionalDeploymentStatusInfo"></a>
<a id="tocSadditionaldeploymentstatusinfo"></a>
<a id="tocsadditionaldeploymentstatusinfo"></a>

```json
"string"
```

AdditionalDeploymentStatusInfo is deprecated, use DeploymentStatusMessageList instead.

<h2 id="tocS_AlarmName">AlarmName</h2>
<!-- backwards compatibility -->
<a id="schemaalarmname"></a>
<a id="schema_AlarmName"></a>
<a id="tocSalarmname"></a>
<a id="tocsalarmname"></a>

```json
"string"
```

<h2 id="tocS_Alarm">Alarm</h2>
<!-- backwards compatibility -->
<a id="schemaalarm"></a>
<a id="schema_Alarm"></a>
<a id="tocSalarm"></a>
<a id="tocsalarm"></a>

```json
{
  "name": {}
}
```

Information about an alarm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_AlarmList">AlarmList</h2>
<!-- backwards compatibility -->
<a id="schemaalarmlist"></a>
<a id="schema_AlarmList"></a>
<a id="tocSalarmlist"></a>
<a id="tocsalarmlist"></a>

```json
[
  {
    "name": {}
  }
]
```

<h2 id="tocS_AlarmConfiguration">AlarmConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaalarmconfiguration"></a>
<a id="schema_AlarmConfiguration"></a>
<a id="tocSalarmconfiguration"></a>
<a id="tocsalarmconfiguration"></a>

```json
{
  "enabled": {},
  "ignorePollAlarmFailure": {},
  "alarms": {}
}
```

Information about alarms associated with a deployment or deployment group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|object|false|none|none|
|ignorePollAlarmFailure|object|false|none|none|
|alarms|object|false|none|none|

<h2 id="tocS_RawStringContent">RawStringContent</h2>
<!-- backwards compatibility -->
<a id="schemarawstringcontent"></a>
<a id="schema_RawStringContent"></a>
<a id="tocSrawstringcontent"></a>
<a id="tocsrawstringcontent"></a>

```json
"string"
```

<h2 id="tocS_RawStringSha256">RawStringSha256</h2>
<!-- backwards compatibility -->
<a id="schemarawstringsha256"></a>
<a id="schema_RawStringSha256"></a>
<a id="tocSrawstringsha256"></a>
<a id="tocsrawstringsha256"></a>

```json
"string"
```

<h2 id="tocS_AppSpecContent">AppSpecContent</h2>
<!-- backwards compatibility -->
<a id="schemaappspeccontent"></a>
<a id="schema_AppSpecContent"></a>
<a id="tocSappspeccontent"></a>
<a id="tocsappspeccontent"></a>

```json
{
  "content": {},
  "sha256": {}
}
```

 A revision for an Lambda or Amazon ECS deployment that is a YAML-formatted or JSON-formatted string. For Lambda and Amazon ECS deployments, the revision is the same as the AppSpec file. This method replaces the deprecated <code>RawString</code> data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|object|false|none|none|
|sha256|object|false|none|none|

<h2 id="tocS_ApplicationId">ApplicationId</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationid"></a>
<a id="schema_ApplicationId"></a>
<a id="tocSapplicationid"></a>
<a id="tocsapplicationid"></a>

```json
"string"
```

<h2 id="tocS_ApplicationName">ApplicationName</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationname"></a>
<a id="schema_ApplicationName"></a>
<a id="tocSapplicationname"></a>
<a id="tocsapplicationname"></a>

```json
"string"
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

<h2 id="tocS_GitHubAccountTokenName">GitHubAccountTokenName</h2>
<!-- backwards compatibility -->
<a id="schemagithubaccounttokenname"></a>
<a id="schema_GitHubAccountTokenName"></a>
<a id="tocSgithubaccounttokenname"></a>
<a id="tocsgithubaccounttokenname"></a>

```json
"string"
```

<h2 id="tocS_ComputePlatform">ComputePlatform</h2>
<!-- backwards compatibility -->
<a id="schemacomputeplatform"></a>
<a id="schema_ComputePlatform"></a>
<a id="tocScomputeplatform"></a>
<a id="tocscomputeplatform"></a>

```json
"Server"
```

<h2 id="tocS_ApplicationInfo">ApplicationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationinfo"></a>
<a id="schema_ApplicationInfo"></a>
<a id="tocSapplicationinfo"></a>
<a id="tocsapplicationinfo"></a>

```json
{
  "applicationId": {},
  "applicationName": {},
  "createTime": {},
  "linkedToGitHub": {},
  "gitHubAccountName": {},
  "computePlatform": {}
}
```

Information about an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationId|object|false|none|none|
|applicationName|object|false|none|none|
|createTime|object|false|none|none|
|linkedToGitHub|object|false|none|none|
|gitHubAccountName|object|false|none|none|
|computePlatform|object|false|none|none|

<h2 id="tocS_ApplicationRevisionSortBy">ApplicationRevisionSortBy</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationrevisionsortby"></a>
<a id="schema_ApplicationRevisionSortBy"></a>
<a id="tocSapplicationrevisionsortby"></a>
<a id="tocsapplicationrevisionsortby"></a>

```json
"registerTime"
```

<h2 id="tocS_ApplicationsInfoList">ApplicationsInfoList</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsinfolist"></a>
<a id="schema_ApplicationsInfoList"></a>
<a id="tocSapplicationsinfolist"></a>
<a id="tocsapplicationsinfolist"></a>

```json
[
  {
    "applicationId": {},
    "applicationName": {},
    "createTime": {},
    "linkedToGitHub": {},
    "gitHubAccountName": {},
    "computePlatform": {}
  }
]
```

<h2 id="tocS_ApplicationsList">ApplicationsList</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationslist"></a>
<a id="schema_ApplicationsList"></a>
<a id="tocSapplicationslist"></a>
<a id="tocsapplicationslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_AutoRollbackEventsList">AutoRollbackEventsList</h2>
<!-- backwards compatibility -->
<a id="schemaautorollbackeventslist"></a>
<a id="schema_AutoRollbackEventsList"></a>
<a id="tocSautorollbackeventslist"></a>
<a id="tocsautorollbackeventslist"></a>

```json
[
  "DEPLOYMENT_FAILURE"
]
```

<h2 id="tocS_AutoRollbackConfiguration">AutoRollbackConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaautorollbackconfiguration"></a>
<a id="schema_AutoRollbackConfiguration"></a>
<a id="tocSautorollbackconfiguration"></a>
<a id="tocsautorollbackconfiguration"></a>

```json
{
  "enabled": {},
  "events": {}
}
```

Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|object|false|none|none|
|events|object|false|none|none|

<h2 id="tocS_AutoRollbackEvent">AutoRollbackEvent</h2>
<!-- backwards compatibility -->
<a id="schemaautorollbackevent"></a>
<a id="schema_AutoRollbackEvent"></a>
<a id="tocSautorollbackevent"></a>
<a id="tocsautorollbackevent"></a>

```json
"DEPLOYMENT_FAILURE"
```

<h2 id="tocS_AutoScalingGroupName">AutoScalingGroupName</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggroupname"></a>
<a id="schema_AutoScalingGroupName"></a>
<a id="tocSautoscalinggroupname"></a>
<a id="tocsautoscalinggroupname"></a>

```json
"string"
```

<h2 id="tocS_AutoScalingGroupHook">AutoScalingGroupHook</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggrouphook"></a>
<a id="schema_AutoScalingGroupHook"></a>
<a id="tocSautoscalinggrouphook"></a>
<a id="tocsautoscalinggrouphook"></a>

```json
"string"
```

<h2 id="tocS_AutoScalingGroup">AutoScalingGroup</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggroup"></a>
<a id="schema_AutoScalingGroup"></a>
<a id="tocSautoscalinggroup"></a>
<a id="tocsautoscalinggroup"></a>

```json
{
  "name": {},
  "hook": {}
}
```

Information about an Auto Scaling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|hook|object|false|none|none|

<h2 id="tocS_AutoScalingGroupList">AutoScalingGroupList</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggrouplist"></a>
<a id="schema_AutoScalingGroupList"></a>
<a id="tocSautoscalinggrouplist"></a>
<a id="tocsautoscalinggrouplist"></a>

```json
[
  {
    "name": {},
    "hook": {}
  }
]
```

<h2 id="tocS_AutoScalingGroupNameList">AutoScalingGroupNameList</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggroupnamelist"></a>
<a id="schema_AutoScalingGroupNameList"></a>
<a id="tocSautoscalinggroupnamelist"></a>
<a id="tocsautoscalinggroupnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RevisionLocationList">RevisionLocationList</h2>
<!-- backwards compatibility -->
<a id="schemarevisionlocationlist"></a>
<a id="schema_RevisionLocationList"></a>
<a id="tocSrevisionlocationlist"></a>
<a id="tocsrevisionlocationlist"></a>

```json
[
  {
    "revisionType": {},
    "s3Location": {
      "bucket": {},
      "key": {},
      "bundleType": {},
      "version": {},
      "eTag": {}
    },
    "gitHubLocation": {
      "repository": {},
      "commitId": {}
    },
    "string": {
      "content": {},
      "sha256": {}
    },
    "appSpecContent": {
      "content": {},
      "sha256": {}
    }
  }
]
```

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_RevisionInfoList">RevisionInfoList</h2>
<!-- backwards compatibility -->
<a id="schemarevisioninfolist"></a>
<a id="schema_RevisionInfoList"></a>
<a id="tocSrevisioninfolist"></a>
<a id="tocsrevisioninfolist"></a>

```json
[
  {
    "revisionLocation": {
      "revisionType": {},
      "s3Location": {
        "bucket": {},
        "key": {},
        "bundleType": {},
        "version": {},
        "eTag": {}
      },
      "gitHubLocation": {
        "repository": {},
        "commitId": {}
      },
      "string": {
        "content": {},
        "sha256": {}
      },
      "appSpecContent": {
        "content": {},
        "sha256": {}
      }
    },
    "genericRevisionInfo": {
      "description": {},
      "deploymentGroups": {},
      "firstUsedTime": {},
      "lastUsedTime": {},
      "registerTime": {}
    }
  }
]
```

<h2 id="tocS_DeploymentGroupsList">DeploymentGroupsList</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentgroupslist"></a>
<a id="schema_DeploymentGroupsList"></a>
<a id="tocSdeploymentgroupslist"></a>
<a id="tocsdeploymentgroupslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DeploymentGroupInfoList">DeploymentGroupInfoList</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentgroupinfolist"></a>
<a id="schema_DeploymentGroupInfoList"></a>
<a id="tocSdeploymentgroupinfolist"></a>
<a id="tocsdeploymentgroupinfolist"></a>

```json
[
  {
    "applicationName": {},
    "deploymentGroupId": {},
    "deploymentGroupName": {},
    "deploymentConfigName": {},
    "ec2TagFilters": {},
    "onPremisesInstanceTagFilters": {},
    "autoScalingGroups": {},
    "serviceRoleArn": {},
    "targetRevision": {
      "revisionType": {},
      "s3Location": {
        "bucket": {},
        "key": {},
        "bundleType": {},
        "version": {},
        "eTag": {}
      },
      "gitHubLocation": {
        "repository": {},
        "commitId": {}
      },
      "string": {
        "content": {},
        "sha256": {}
      },
      "appSpecContent": {
        "content": {},
        "sha256": {}
      }
    },
    "triggerConfigurations": {},
    "alarmConfiguration": {
      "enabled": {},
      "ignorePollAlarmFailure": {},
      "alarms": {}
    },
    "autoRollbackConfiguration": {
      "enabled": {},
      "events": {}
    },
    "deploymentStyle": {
      "deploymentType": {},
      "deploymentOption": {}
    },
    "outdatedInstancesStrategy": {},
    "blueGreenDeploymentConfiguration": {
      "terminateBlueInstancesOnDeploymentSuccess": {
        "action": {},
        "terminationWaitTimeInMinutes": {}
      },
      "deploymentReadyOption": {
        "actionOnTimeout": {},
        "waitTimeInMinutes": {}
      },
      "greenFleetProvisioningOption": {
        "action": {}
      }
    },
    "loadBalancerInfo": {
      "elbInfoList": {},
      "targetGroupInfoList": {},
      "targetGroupPairInfoList": {}
    },
    "lastSuccessfulDeployment": {
      "deploymentId": {},
      "status": {},
      "endTime": {},
      "createTime": {}
    },
    "lastAttemptedDeployment": {
      "deploymentId": {},
      "status": {},
      "endTime": {},
      "createTime": {}
    },
    "ec2TagSet": {
      "ec2TagSetList": {}
    },
    "onPremisesTagSet": {
      "onPremisesTagSetList": {}
    },
    "computePlatform": {},
    "ecsServices": {}
  }
]
```

<h2 id="tocS_DeploymentId">DeploymentId</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentid"></a>
<a id="schema_DeploymentId"></a>
<a id="tocSdeploymentid"></a>
<a id="tocsdeploymentid"></a>

```json
"string"
```

<h2 id="tocS_InstancesList">InstancesList</h2>
<!-- backwards compatibility -->
<a id="schemainstanceslist"></a>
<a id="schema_InstancesList"></a>
<a id="tocSinstanceslist"></a>
<a id="tocsinstanceslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InstanceSummaryList">InstanceSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemainstancesummarylist"></a>
<a id="schema_InstanceSummaryList"></a>
<a id="tocSinstancesummarylist"></a>
<a id="tocsinstancesummarylist"></a>

```json
[
  {
    "deploymentId": {},
    "instanceId": {},
    "status": {},
    "lastUpdatedAt": {},
    "lifecycleEvents": {},
    "instanceType": {}
  }
]
```

<h2 id="tocS_TargetIdList">TargetIdList</h2>
<!-- backwards compatibility -->
<a id="schematargetidlist"></a>
<a id="schema_TargetIdList"></a>
<a id="tocStargetidlist"></a>
<a id="tocstargetidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DeploymentTargetList">DeploymentTargetList</h2>
<!-- backwards compatibility -->
<a id="schemadeploymenttargetlist"></a>
<a id="schema_DeploymentTargetList"></a>
<a id="tocSdeploymenttargetlist"></a>
<a id="tocsdeploymenttargetlist"></a>

```json
[
  {
    "deploymentTargetType": {},
    "instanceTarget": {
      "deploymentId": {},
      "targetId": {},
      "targetArn": {},
      "status": {},
      "lastUpdatedAt": {},
      "lifecycleEvents": {},
      "instanceLabel": {}
    },
    "lambdaTarget": {
      "deploymentId": {},
      "targetId": {},
      "targetArn": {},
      "status": {},
      "lastUpdatedAt": {},
      "lifecycleEvents": {},
      "lambdaFunctionInfo": {
        "functionName": {},
        "functionAlias": {},
        "currentVersion": {},
        "targetVersion": {},
        "targetVersionWeight": {}
      }
    },
    "ecsTarget": {
      "deploymentId": {},
      "targetId": {},
      "targetArn": {},
      "lastUpdatedAt": {},
      "lifecycleEvents": {},
      "status": {},
      "taskSetsInfo": {}
    },
    "cloudFormationTarget": {
      "deploymentId": {},
      "targetId": {},
      "lastUpdatedAt": {},
      "lifecycleEvents": {},
      "status": {},
      "resourceType": {},
      "targetVersionWeight": {}
    }
  }
]
```

<h2 id="tocS_DeploymentsList">DeploymentsList</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentslist"></a>
<a id="schema_DeploymentsList"></a>
<a id="tocSdeploymentslist"></a>
<a id="tocsdeploymentslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DeploymentsInfoList">DeploymentsInfoList</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentsinfolist"></a>
<a id="schema_DeploymentsInfoList"></a>
<a id="tocSdeploymentsinfolist"></a>
<a id="tocsdeploymentsinfolist"></a>

```json
[
  {
    "applicationName": {},
    "deploymentGroupName": {},
    "deploymentConfigName": {},
    "deploymentId": {},
    "previousRevision": {
      "revisionType": {},
      "s3Location": {
        "bucket": {},
        "key": {},
        "bundleType": {},
        "version": {},
        "eTag": {}
      },
      "gitHubLocation": {
        "repository": {},
        "commitId": {}
      },
      "string": {
        "content": {},
        "sha256": {}
      },
      "appSpecContent": {
        "content": {},
        "sha256": {}
      }
    },
    "revision": {
      "revisionType": {},
      "s3Location": {
        "bucket": {},
        "key": {},
        "bundleType": {},
        "version": {},
        "eTag": {}
      },
      "gitHubLocation": {
        "repository": {},
        "commitId": {}
      },
      "string": {
        "content": {},
        "sha256": {}
      },
      "appSpecContent": {
        "content": {},
        "sha256": {}
      }
    },
    "status": {},
    "errorInformation": {
      "code": {},
      "message": {}
    },
    "createTime": {},
    "startTime": {},
    "completeTime": {},
    "deploymentOverview": {
      "Pending": {},
      "InProgress": {},
      "Succeeded": {},
      "Failed": {},
      "Skipped": {},
      "Ready": {}
    },
    "description": {},
    "creator": {},
    "ignoreApplicationStopFailures": {},
    "autoRollbackConfiguration": {
      "enabled": {},
      "events": {}
    },
    "updateOutdatedInstancesOnly": {},
    "rollbackInfo": {
      "rollbackDeploymentId": {},
      "rollbackTriggeringDeploymentId": {},
      "rollbackMessage": {}
    },
    "deploymentStyle": {
      "deploymentType": {},
      "deploymentOption": {}
    },
    "targetInstances": {
      "tagFilters": {},
      "autoScalingGroups": {},
      "ec2TagSet": {
        "ec2TagSetList": {}
      }
    },
    "instanceTerminationWaitTimeStarted": {},
    "blueGreenDeploymentConfiguration": {
      "terminateBlueInstancesOnDeploymentSuccess": {
        "action": {},
        "terminationWaitTimeInMinutes": {}
      },
      "deploymentReadyOption": {
        "actionOnTimeout": {},
        "waitTimeInMinutes": {}
      },
      "greenFleetProvisioningOption": {
        "action": {}
      }
    },
    "loadBalancerInfo": {
      "elbInfoList": {},
      "targetGroupInfoList": {},
      "targetGroupPairInfoList": {}
    },
    "additionalDeploymentStatusInfo": {},
    "fileExistsBehavior": {},
    "deploymentStatusMessages": {},
    "computePlatform": {},
    "externalId": {},
    "relatedDeployments": {
      "autoUpdateOutdatedInstancesRootDeploymentId": {},
      "autoUpdateOutdatedInstancesDeploymentIds": {}
    },
    "overrideAlarmConfiguration": {
      "enabled": {},
      "ignorePollAlarmFailure": {},
      "alarms": {}
    }
  }
]
```

<h2 id="tocS_InstanceInfoList">InstanceInfoList</h2>
<!-- backwards compatibility -->
<a id="schemainstanceinfolist"></a>
<a id="schema_InstanceInfoList"></a>
<a id="tocSinstanceinfolist"></a>
<a id="tocsinstanceinfolist"></a>

```json
[
  {
    "instanceName": {},
    "iamSessionArn": {},
    "iamUserArn": {},
    "instanceArn": {},
    "registerTime": {},
    "deregisterTime": {},
    "tags": {}
  }
]
```

<h2 id="tocS_BlueInstanceTerminationOption">BlueInstanceTerminationOption</h2>
<!-- backwards compatibility -->
<a id="schemablueinstanceterminationoption"></a>
<a id="schema_BlueInstanceTerminationOption"></a>
<a id="tocSblueinstanceterminationoption"></a>
<a id="tocsblueinstanceterminationoption"></a>

```json
{
  "action": {},
  "terminationWaitTimeInMinutes": {}
}
```

Information about whether instances in the original environment are terminated when a blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not apply to Lambda deployments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|terminationWaitTimeInMinutes|object|false|none|none|

<h2 id="tocS_DeploymentReadyOption">DeploymentReadyOption</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentreadyoption"></a>
<a id="schema_DeploymentReadyOption"></a>
<a id="tocSdeploymentreadyoption"></a>
<a id="tocsdeploymentreadyoption"></a>

```json
{
  "actionOnTimeout": {},
  "waitTimeInMinutes": {}
}
```

Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionOnTimeout|object|false|none|none|
|waitTimeInMinutes|object|false|none|none|

<h2 id="tocS_GreenFleetProvisioningOption">GreenFleetProvisioningOption</h2>
<!-- backwards compatibility -->
<a id="schemagreenfleetprovisioningoption"></a>
<a id="schema_GreenFleetProvisioningOption"></a>
<a id="tocSgreenfleetprovisioningoption"></a>
<a id="tocsgreenfleetprovisioningoption"></a>

```json
{
  "action": {}
}
```

Information about the instances that belong to the replacement environment in a blue/green deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|

<h2 id="tocS_BlueGreenDeploymentConfiguration">BlueGreenDeploymentConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemabluegreendeploymentconfiguration"></a>
<a id="schema_BlueGreenDeploymentConfiguration"></a>
<a id="tocSbluegreendeploymentconfiguration"></a>
<a id="tocsbluegreendeploymentconfiguration"></a>

```json
{
  "terminateBlueInstancesOnDeploymentSuccess": {
    "action": {},
    "terminationWaitTimeInMinutes": {}
  },
  "deploymentReadyOption": {
    "actionOnTimeout": {},
    "waitTimeInMinutes": {}
  },
  "greenFleetProvisioningOption": {
    "action": {}
  }
}
```

Information about blue/green deployment options for a deployment group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|terminateBlueInstancesOnDeploymentSuccess|object|false|none|none|
|deploymentReadyOption|object|false|none|none|
|greenFleetProvisioningOption|object|false|none|none|

<h2 id="tocS_InstanceAction">InstanceAction</h2>
<!-- backwards compatibility -->
<a id="schemainstanceaction"></a>
<a id="schema_InstanceAction"></a>
<a id="tocSinstanceaction"></a>
<a id="tocsinstanceaction"></a>

```json
"TERMINATE"
```

<h2 id="tocS_Duration">Duration</h2>
<!-- backwards compatibility -->
<a id="schemaduration"></a>
<a id="schema_Duration"></a>
<a id="tocSduration"></a>
<a id="tocsduration"></a>

```json
0
```

<h2 id="tocS_BundleType">BundleType</h2>
<!-- backwards compatibility -->
<a id="schemabundletype"></a>
<a id="schema_BundleType"></a>
<a id="tocSbundletype"></a>
<a id="tocsbundletype"></a>

```json
"tar"
```

<h2 id="tocS_CloudFormationResourceType">CloudFormationResourceType</h2>
<!-- backwards compatibility -->
<a id="schemacloudformationresourcetype"></a>
<a id="schema_CloudFormationResourceType"></a>
<a id="tocScloudformationresourcetype"></a>
<a id="tocscloudformationresourcetype"></a>

```json
"string"
```

<h2 id="tocS_TargetId">TargetId</h2>
<!-- backwards compatibility -->
<a id="schematargetid"></a>
<a id="schema_TargetId"></a>
<a id="tocStargetid"></a>
<a id="tocstargetid"></a>

```json
"string"
```

<h2 id="tocS_Time">Time</h2>
<!-- backwards compatibility -->
<a id="schematime"></a>
<a id="schema_Time"></a>
<a id="tocStime"></a>
<a id="tocstime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_LifecycleEventList">LifecycleEventList</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleeventlist"></a>
<a id="schema_LifecycleEventList"></a>
<a id="tocSlifecycleeventlist"></a>
<a id="tocslifecycleeventlist"></a>

```json
[
  {
    "lifecycleEventName": {},
    "diagnostics": {
      "errorCode": {},
      "scriptName": {},
      "message": {},
      "logTail": {}
    },
    "startTime": {},
    "endTime": {},
    "status": {}
  }
]
```

<h2 id="tocS_TargetStatus">TargetStatus</h2>
<!-- backwards compatibility -->
<a id="schematargetstatus"></a>
<a id="schema_TargetStatus"></a>
<a id="tocStargetstatus"></a>
<a id="tocstargetstatus"></a>

```json
"Pending"
```

<h2 id="tocS_TrafficWeight">TrafficWeight</h2>
<!-- backwards compatibility -->
<a id="schematrafficweight"></a>
<a id="schema_TrafficWeight"></a>
<a id="tocStrafficweight"></a>
<a id="tocstrafficweight"></a>

```json
0
```

<h2 id="tocS_CloudFormationTarget">CloudFormationTarget</h2>
<!-- backwards compatibility -->
<a id="schemacloudformationtarget"></a>
<a id="schema_CloudFormationTarget"></a>
<a id="tocScloudformationtarget"></a>
<a id="tocscloudformationtarget"></a>

```json
{
  "deploymentId": {},
  "targetId": {},
  "lastUpdatedAt": {},
  "lifecycleEvents": {},
  "status": {},
  "resourceType": {},
  "targetVersionWeight": {}
}
```

 Information about the target to be updated by an CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|false|none|none|
|targetId|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|lifecycleEvents|object|false|none|none|
|status|object|false|none|none|
|resourceType|object|false|none|none|
|targetVersionWeight|object|false|none|none|

<h2 id="tocS_CommitId">CommitId</h2>
<!-- backwards compatibility -->
<a id="schemacommitid"></a>
<a id="schema_CommitId"></a>
<a id="tocScommitid"></a>
<a id="tocscommitid"></a>

```json
"string"
```

<h2 id="tocS_DeploymentWaitType">DeploymentWaitType</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentwaittype"></a>
<a id="schema_DeploymentWaitType"></a>
<a id="tocSdeploymentwaittype"></a>
<a id="tocsdeploymentwaittype"></a>

```json
"READY_WAIT"
```

<h2 id="tocS_DeploymentConfigName">DeploymentConfigName</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentconfigname"></a>
<a id="schema_DeploymentConfigName"></a>
<a id="tocSdeploymentconfigname"></a>
<a id="tocsdeploymentconfigname"></a>

```json
"string"
```

<h2 id="tocS_MinimumHealthyHosts">MinimumHealthyHosts</h2>
<!-- backwards compatibility -->
<a id="schemaminimumhealthyhosts"></a>
<a id="schema_MinimumHealthyHosts"></a>
<a id="tocSminimumhealthyhosts"></a>
<a id="tocsminimumhealthyhosts"></a>

```json
{
  "type": {},
  "value": {}
}
```

Information about minimum healthy instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_TrafficRoutingConfig">TrafficRoutingConfig</h2>
<!-- backwards compatibility -->
<a id="schematrafficroutingconfig"></a>
<a id="schema_TrafficRoutingConfig"></a>
<a id="tocStrafficroutingconfig"></a>
<a id="tocstrafficroutingconfig"></a>

```json
{
  "type": {},
  "timeBasedCanary": {
    "canaryPercentage": {},
    "canaryInterval": {}
  },
  "timeBasedLinear": {
    "linearPercentage": {},
    "linearInterval": {}
  }
}
```

The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|timeBasedCanary|object|false|none|none|
|timeBasedLinear|object|false|none|none|

<h2 id="tocS_DeploymentConfigId">DeploymentConfigId</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentconfigid"></a>
<a id="schema_DeploymentConfigId"></a>
<a id="tocSdeploymentconfigid"></a>
<a id="tocsdeploymentconfigid"></a>

```json
"string"
```

<h2 id="tocS_DeploymentGroupName">DeploymentGroupName</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentgroupname"></a>
<a id="schema_DeploymentGroupName"></a>
<a id="tocSdeploymentgroupname"></a>
<a id="tocsdeploymentgroupname"></a>

```json
"string"
```

<h2 id="tocS_EC2TagFilterList">EC2TagFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaec2tagfilterlist"></a>
<a id="schema_EC2TagFilterList"></a>
<a id="tocSec2tagfilterlist"></a>
<a id="tocsec2tagfilterlist"></a>

```json
[
  {
    "Key": {},
    "Value": {},
    "Type": {}
  }
]
```

<h2 id="tocS_TagFilterList">TagFilterList</h2>
<!-- backwards compatibility -->
<a id="schematagfilterlist"></a>
<a id="schema_TagFilterList"></a>
<a id="tocStagfilterlist"></a>
<a id="tocstagfilterlist"></a>

```json
[
  {
    "Key": {},
    "Value": {},
    "Type": {}
  }
]
```

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
"string"
```

<h2 id="tocS_TriggerConfigList">TriggerConfigList</h2>
<!-- backwards compatibility -->
<a id="schematriggerconfiglist"></a>
<a id="schema_TriggerConfigList"></a>
<a id="tocStriggerconfiglist"></a>
<a id="tocstriggerconfiglist"></a>

```json
[
  {
    "triggerName": {},
    "triggerTargetArn": {},
    "triggerEvents": {}
  }
]
```

<h2 id="tocS_OutdatedInstancesStrategy">OutdatedInstancesStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaoutdatedinstancesstrategy"></a>
<a id="schema_OutdatedInstancesStrategy"></a>
<a id="tocSoutdatedinstancesstrategy"></a>
<a id="tocsoutdatedinstancesstrategy"></a>

```json
"UPDATE"
```

<h2 id="tocS_DeploymentStyle">DeploymentStyle</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentstyle"></a>
<a id="schema_DeploymentStyle"></a>
<a id="tocSdeploymentstyle"></a>
<a id="tocsdeploymentstyle"></a>

```json
{
  "deploymentType": {},
  "deploymentOption": {}
}
```

Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentType|object|false|none|none|
|deploymentOption|object|false|none|none|

<h2 id="tocS_LoadBalancerInfo">LoadBalancerInfo</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerinfo"></a>
<a id="schema_LoadBalancerInfo"></a>
<a id="tocSloadbalancerinfo"></a>
<a id="tocsloadbalancerinfo"></a>

```json
{
  "elbInfoList": {},
  "targetGroupInfoList": {},
  "targetGroupPairInfoList": {}
}
```

Information about the Elastic Load Balancing load balancer or target group used in a deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elbInfoList|object|false|none|none|
|targetGroupInfoList|object|false|none|none|
|targetGroupPairInfoList|object|false|none|none|

<h2 id="tocS_EC2TagSet">EC2TagSet</h2>
<!-- backwards compatibility -->
<a id="schemaec2tagset"></a>
<a id="schema_EC2TagSet"></a>
<a id="tocSec2tagset"></a>
<a id="tocsec2tagset"></a>

```json
{
  "ec2TagSetList": {}
}
```

Information about groups of Amazon EC2 instance tags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ec2TagSetList|object|false|none|none|

<h2 id="tocS_ECSServiceList">ECSServiceList</h2>
<!-- backwards compatibility -->
<a id="schemaecsservicelist"></a>
<a id="schema_ECSServiceList"></a>
<a id="tocSecsservicelist"></a>
<a id="tocsecsservicelist"></a>

```json
[
  {
    "serviceName": {},
    "clusterName": {}
  }
]
```

<h2 id="tocS_OnPremisesTagSet">OnPremisesTagSet</h2>
<!-- backwards compatibility -->
<a id="schemaonpremisestagset"></a>
<a id="schema_OnPremisesTagSet"></a>
<a id="tocSonpremisestagset"></a>
<a id="tocsonpremisestagset"></a>

```json
{
  "onPremisesTagSetList": {}
}
```

Information about groups of on-premises instance tags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|onPremisesTagSetList|object|false|none|none|

<h2 id="tocS_DeploymentGroupId">DeploymentGroupId</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentgroupid"></a>
<a id="schema_DeploymentGroupId"></a>
<a id="tocSdeploymentgroupid"></a>
<a id="tocsdeploymentgroupid"></a>

```json
"string"
```

<h2 id="tocS_RevisionLocation">RevisionLocation</h2>
<!-- backwards compatibility -->
<a id="schemarevisionlocation"></a>
<a id="schema_RevisionLocation"></a>
<a id="tocSrevisionlocation"></a>
<a id="tocsrevisionlocation"></a>

```json
{
  "revisionType": {},
  "s3Location": {
    "bucket": {},
    "key": {},
    "bundleType": {},
    "version": {},
    "eTag": {}
  },
  "gitHubLocation": {
    "repository": {},
    "commitId": {}
  },
  "string": {
    "content": {},
    "sha256": {}
  },
  "appSpecContent": {
    "content": {},
    "sha256": {}
  }
}
```

Information about the location of an application revision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revisionType|object|false|none|none|
|s3Location|object|false|none|none|
|gitHubLocation|object|false|none|none|
|string|object|false|none|none|
|appSpecContent|object|false|none|none|

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_TargetInstances">TargetInstances</h2>
<!-- backwards compatibility -->
<a id="schematargetinstances"></a>
<a id="schema_TargetInstances"></a>
<a id="tocStargetinstances"></a>
<a id="tocstargetinstances"></a>

```json
{
  "tagFilters": {},
  "autoScalingGroups": {},
  "ec2TagSet": {
    "ec2TagSetList": {}
  }
}
```

Information about the instances to be used in the replacement environment in a blue/green deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tagFilters|object|false|none|none|
|autoScalingGroups|object|false|none|none|
|ec2TagSet|object|false|none|none|

<h2 id="tocS_FileExistsBehavior">FileExistsBehavior</h2>
<!-- backwards compatibility -->
<a id="schemafileexistsbehavior"></a>
<a id="schema_FileExistsBehavior"></a>
<a id="tocSfileexistsbehavior"></a>
<a id="tocsfileexistsbehavior"></a>

```json
"DISALLOW"
```

<h2 id="tocS_ExternalId">ExternalId</h2>
<!-- backwards compatibility -->
<a id="schemaexternalid"></a>
<a id="schema_ExternalId"></a>
<a id="tocSexternalid"></a>
<a id="tocsexternalid"></a>

```json
"string"
```

<h2 id="tocS_DeploymentConfigInfo">DeploymentConfigInfo</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentconfiginfo"></a>
<a id="schema_DeploymentConfigInfo"></a>
<a id="tocSdeploymentconfiginfo"></a>
<a id="tocsdeploymentconfiginfo"></a>

```json
{
  "deploymentConfigId": {},
  "deploymentConfigName": {},
  "minimumHealthyHosts": {
    "type": {},
    "value": {}
  },
  "createTime": {},
  "computePlatform": {},
  "trafficRoutingConfig": {
    "type": {},
    "timeBasedCanary": {
      "canaryPercentage": {},
      "canaryInterval": {}
    },
    "timeBasedLinear": {
      "linearPercentage": {},
      "linearInterval": {}
    }
  }
}
```

Information about a deployment configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentConfigId|object|false|none|none|
|deploymentConfigName|object|false|none|none|
|minimumHealthyHosts|object|false|none|none|
|createTime|object|false|none|none|
|computePlatform|object|false|none|none|
|trafficRoutingConfig|object|false|none|none|

<h2 id="tocS_DeploymentConfigsList">DeploymentConfigsList</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentconfigslist"></a>
<a id="schema_DeploymentConfigsList"></a>
<a id="tocSdeploymentconfigslist"></a>
<a id="tocsdeploymentconfigslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DeploymentCreator">DeploymentCreator</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentcreator"></a>
<a id="schema_DeploymentCreator"></a>
<a id="tocSdeploymentcreator"></a>
<a id="tocsdeploymentcreator"></a>

```json
"user"
```

<h2 id="tocS_LastDeploymentInfo">LastDeploymentInfo</h2>
<!-- backwards compatibility -->
<a id="schemalastdeploymentinfo"></a>
<a id="schema_LastDeploymentInfo"></a>
<a id="tocSlastdeploymentinfo"></a>
<a id="tocslastdeploymentinfo"></a>

```json
{
  "deploymentId": {},
  "status": {},
  "endTime": {},
  "createTime": {}
}
```

Information about the most recent attempted or successful deployment to a deployment group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|false|none|none|
|status|object|false|none|none|
|endTime|object|false|none|none|
|createTime|object|false|none|none|

<h2 id="tocS_DeploymentGroupInfo">DeploymentGroupInfo</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentgroupinfo"></a>
<a id="schema_DeploymentGroupInfo"></a>
<a id="tocSdeploymentgroupinfo"></a>
<a id="tocsdeploymentgroupinfo"></a>

```json
{
  "applicationName": {},
  "deploymentGroupId": {},
  "deploymentGroupName": {},
  "deploymentConfigName": {},
  "ec2TagFilters": {},
  "onPremisesInstanceTagFilters": {},
  "autoScalingGroups": {},
  "serviceRoleArn": {},
  "targetRevision": {
    "revisionType": {},
    "s3Location": {
      "bucket": {},
      "key": {},
      "bundleType": {},
      "version": {},
      "eTag": {}
    },
    "gitHubLocation": {
      "repository": {},
      "commitId": {}
    },
    "string": {
      "content": {},
      "sha256": {}
    },
    "appSpecContent": {
      "content": {},
      "sha256": {}
    }
  },
  "triggerConfigurations": {},
  "alarmConfiguration": {
    "enabled": {},
    "ignorePollAlarmFailure": {},
    "alarms": {}
  },
  "autoRollbackConfiguration": {
    "enabled": {},
    "events": {}
  },
  "deploymentStyle": {
    "deploymentType": {},
    "deploymentOption": {}
  },
  "outdatedInstancesStrategy": {},
  "blueGreenDeploymentConfiguration": {
    "terminateBlueInstancesOnDeploymentSuccess": {
      "action": {},
      "terminationWaitTimeInMinutes": {}
    },
    "deploymentReadyOption": {
      "actionOnTimeout": {},
      "waitTimeInMinutes": {}
    },
    "greenFleetProvisioningOption": {
      "action": {}
    }
  },
  "loadBalancerInfo": {
    "elbInfoList": {},
    "targetGroupInfoList": {},
    "targetGroupPairInfoList": {}
  },
  "lastSuccessfulDeployment": {
    "deploymentId": {},
    "status": {},
    "endTime": {},
    "createTime": {}
  },
  "lastAttemptedDeployment": {
    "deploymentId": {},
    "status": {},
    "endTime": {},
    "createTime": {}
  },
  "ec2TagSet": {
    "ec2TagSetList": {}
  },
  "onPremisesTagSet": {
    "onPremisesTagSetList": {}
  },
  "computePlatform": {},
  "ecsServices": {}
}
```

Information about a deployment group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|false|none|none|
|deploymentGroupId|object|false|none|none|
|deploymentGroupName|object|false|none|none|
|deploymentConfigName|object|false|none|none|
|ec2TagFilters|object|false|none|none|
|onPremisesInstanceTagFilters|object|false|none|none|
|autoScalingGroups|object|false|none|none|
|serviceRoleArn|object|false|none|none|
|targetRevision|object|false|none|none|
|triggerConfigurations|object|false|none|none|
|alarmConfiguration|object|false|none|none|
|autoRollbackConfiguration|object|false|none|none|
|deploymentStyle|object|false|none|none|
|outdatedInstancesStrategy|object|false|none|none|
|blueGreenDeploymentConfiguration|object|false|none|none|
|loadBalancerInfo|object|false|none|none|
|lastSuccessfulDeployment|object|false|none|none|
|lastAttemptedDeployment|object|false|none|none|
|ec2TagSet|object|false|none|none|
|onPremisesTagSet|object|false|none|none|
|computePlatform|object|false|none|none|
|ecsServices|object|false|none|none|

<h2 id="tocS_DeploymentStatus">DeploymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentstatus"></a>
<a id="schema_DeploymentStatus"></a>
<a id="tocSdeploymentstatus"></a>
<a id="tocsdeploymentstatus"></a>

```json
"Created"
```

<h2 id="tocS_ErrorInformation">ErrorInformation</h2>
<!-- backwards compatibility -->
<a id="schemaerrorinformation"></a>
<a id="schema_ErrorInformation"></a>
<a id="tocSerrorinformation"></a>
<a id="tocserrorinformation"></a>

```json
{
  "code": {},
  "message": {}
}
```

Information about a deployment error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_DeploymentOverview">DeploymentOverview</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentoverview"></a>
<a id="schema_DeploymentOverview"></a>
<a id="tocSdeploymentoverview"></a>
<a id="tocsdeploymentoverview"></a>

```json
{
  "Pending": {},
  "InProgress": {},
  "Succeeded": {},
  "Failed": {},
  "Skipped": {},
  "Ready": {}
}
```

Information about the deployment status of the instances in the deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Pending|object|false|none|none|
|InProgress|object|false|none|none|
|Succeeded|object|false|none|none|
|Failed|object|false|none|none|
|Skipped|object|false|none|none|
|Ready|object|false|none|none|

<h2 id="tocS_RollbackInfo">RollbackInfo</h2>
<!-- backwards compatibility -->
<a id="schemarollbackinfo"></a>
<a id="schema_RollbackInfo"></a>
<a id="tocSrollbackinfo"></a>
<a id="tocsrollbackinfo"></a>

```json
{
  "rollbackDeploymentId": {},
  "rollbackTriggeringDeploymentId": {},
  "rollbackMessage": {}
}
```

Information about a deployment rollback.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rollbackDeploymentId|object|false|none|none|
|rollbackTriggeringDeploymentId|object|false|none|none|
|rollbackMessage|object|false|none|none|

<h2 id="tocS_DeploymentStatusMessageList">DeploymentStatusMessageList</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentstatusmessagelist"></a>
<a id="schema_DeploymentStatusMessageList"></a>
<a id="tocSdeploymentstatusmessagelist"></a>
<a id="tocsdeploymentstatusmessagelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RelatedDeployments">RelatedDeployments</h2>
<!-- backwards compatibility -->
<a id="schemarelateddeployments"></a>
<a id="schema_RelatedDeployments"></a>
<a id="tocSrelateddeployments"></a>
<a id="tocsrelateddeployments"></a>

```json
{
  "autoUpdateOutdatedInstancesRootDeploymentId": {},
  "autoUpdateOutdatedInstancesDeploymentIds": {}
}
```

Information about deployments related to the specified deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoUpdateOutdatedInstancesRootDeploymentId|object|false|none|none|
|autoUpdateOutdatedInstancesDeploymentIds|object|false|none|none|

<h2 id="tocS_DeploymentInfo">DeploymentInfo</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentinfo"></a>
<a id="schema_DeploymentInfo"></a>
<a id="tocSdeploymentinfo"></a>
<a id="tocsdeploymentinfo"></a>

```json
{
  "applicationName": {},
  "deploymentGroupName": {},
  "deploymentConfigName": {},
  "deploymentId": {},
  "previousRevision": {
    "revisionType": {},
    "s3Location": {
      "bucket": {},
      "key": {},
      "bundleType": {},
      "version": {},
      "eTag": {}
    },
    "gitHubLocation": {
      "repository": {},
      "commitId": {}
    },
    "string": {
      "content": {},
      "sha256": {}
    },
    "appSpecContent": {
      "content": {},
      "sha256": {}
    }
  },
  "revision": {
    "revisionType": {},
    "s3Location": {
      "bucket": {},
      "key": {},
      "bundleType": {},
      "version": {},
      "eTag": {}
    },
    "gitHubLocation": {
      "repository": {},
      "commitId": {}
    },
    "string": {
      "content": {},
      "sha256": {}
    },
    "appSpecContent": {
      "content": {},
      "sha256": {}
    }
  },
  "status": {},
  "errorInformation": {
    "code": {},
    "message": {}
  },
  "createTime": {},
  "startTime": {},
  "completeTime": {},
  "deploymentOverview": {
    "Pending": {},
    "InProgress": {},
    "Succeeded": {},
    "Failed": {},
    "Skipped": {},
    "Ready": {}
  },
  "description": {},
  "creator": {},
  "ignoreApplicationStopFailures": {},
  "autoRollbackConfiguration": {
    "enabled": {},
    "events": {}
  },
  "updateOutdatedInstancesOnly": {},
  "rollbackInfo": {
    "rollbackDeploymentId": {},
    "rollbackTriggeringDeploymentId": {},
    "rollbackMessage": {}
  },
  "deploymentStyle": {
    "deploymentType": {},
    "deploymentOption": {}
  },
  "targetInstances": {
    "tagFilters": {},
    "autoScalingGroups": {},
    "ec2TagSet": {
      "ec2TagSetList": {}
    }
  },
  "instanceTerminationWaitTimeStarted": {},
  "blueGreenDeploymentConfiguration": {
    "terminateBlueInstancesOnDeploymentSuccess": {
      "action": {},
      "terminationWaitTimeInMinutes": {}
    },
    "deploymentReadyOption": {
      "actionOnTimeout": {},
      "waitTimeInMinutes": {}
    },
    "greenFleetProvisioningOption": {
      "action": {}
    }
  },
  "loadBalancerInfo": {
    "elbInfoList": {},
    "targetGroupInfoList": {},
    "targetGroupPairInfoList": {}
  },
  "additionalDeploymentStatusInfo": {},
  "fileExistsBehavior": {},
  "deploymentStatusMessages": {},
  "computePlatform": {},
  "externalId": {},
  "relatedDeployments": {
    "autoUpdateOutdatedInstancesRootDeploymentId": {},
    "autoUpdateOutdatedInstancesDeploymentIds": {}
  },
  "overrideAlarmConfiguration": {
    "enabled": {},
    "ignorePollAlarmFailure": {},
    "alarms": {}
  }
}
```

Information about a deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|false|none|none|
|deploymentGroupName|object|false|none|none|
|deploymentConfigName|object|false|none|none|
|deploymentId|object|false|none|none|
|previousRevision|object|false|none|none|
|revision|object|false|none|none|
|status|object|false|none|none|
|errorInformation|object|false|none|none|
|createTime|object|false|none|none|
|startTime|object|false|none|none|
|completeTime|object|false|none|none|
|deploymentOverview|object|false|none|none|
|description|object|false|none|none|
|creator|object|false|none|none|
|ignoreApplicationStopFailures|object|false|none|none|
|autoRollbackConfiguration|object|false|none|none|
|updateOutdatedInstancesOnly|object|false|none|none|
|rollbackInfo|object|false|none|none|
|deploymentStyle|object|false|none|none|
|targetInstances|object|false|none|none|
|instanceTerminationWaitTimeStarted|object|false|none|none|
|blueGreenDeploymentConfiguration|object|false|none|none|
|loadBalancerInfo|object|false|none|none|
|additionalDeploymentStatusInfo|object|false|none|none|
|fileExistsBehavior|object|false|none|none|
|deploymentStatusMessages|object|false|none|none|
|computePlatform|object|false|none|none|
|externalId|object|false|none|none|
|relatedDeployments|[RelatedDeployments](#schemarelateddeployments)|false|none|Information about deployments related to the specified deployment.|
|overrideAlarmConfiguration|[AlarmConfiguration](#schemaalarmconfiguration)|false|none|Information about alarms associated with a deployment or deployment group.|

<h2 id="tocS_DeploymentOption">DeploymentOption</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentoption"></a>
<a id="schema_DeploymentOption"></a>
<a id="tocSdeploymentoption"></a>
<a id="tocsdeploymentoption"></a>

```json
"WITH_TRAFFIC_CONTROL"
```

<h2 id="tocS_InstanceCount">InstanceCount</h2>
<!-- backwards compatibility -->
<a id="schemainstancecount"></a>
<a id="schema_InstanceCount"></a>
<a id="tocSinstancecount"></a>
<a id="tocsinstancecount"></a>

```json
0
```

<h2 id="tocS_DeploymentReadyAction">DeploymentReadyAction</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentreadyaction"></a>
<a id="schema_DeploymentReadyAction"></a>
<a id="tocSdeploymentreadyaction"></a>
<a id="tocsdeploymentreadyaction"></a>

```json
"CONTINUE_DEPLOYMENT"
```

<h2 id="tocS_DeploymentStatusList">DeploymentStatusList</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentstatuslist"></a>
<a id="schema_DeploymentStatusList"></a>
<a id="tocSdeploymentstatuslist"></a>
<a id="tocsdeploymentstatuslist"></a>

```json
[
  "Created"
]
```

<h2 id="tocS_DeploymentType">DeploymentType</h2>
<!-- backwards compatibility -->
<a id="schemadeploymenttype"></a>
<a id="schema_DeploymentType"></a>
<a id="tocSdeploymenttype"></a>
<a id="tocsdeploymenttype"></a>

```json
"IN_PLACE"
```

<h2 id="tocS_DeploymentTargetType">DeploymentTargetType</h2>
<!-- backwards compatibility -->
<a id="schemadeploymenttargettype"></a>
<a id="schema_DeploymentTargetType"></a>
<a id="tocSdeploymenttargettype"></a>
<a id="tocsdeploymenttargettype"></a>

```json
"InstanceTarget"
```

<h2 id="tocS_InstanceTarget">InstanceTarget</h2>
<!-- backwards compatibility -->
<a id="schemainstancetarget"></a>
<a id="schema_InstanceTarget"></a>
<a id="tocSinstancetarget"></a>
<a id="tocsinstancetarget"></a>

```json
{
  "deploymentId": {},
  "targetId": {},
  "targetArn": {},
  "status": {},
  "lastUpdatedAt": {},
  "lifecycleEvents": {},
  "instanceLabel": {}
}
```

 A target Amazon EC2 or on-premises instance during a deployment that uses the EC2/On-premises compute platform.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|false|none|none|
|targetId|object|false|none|none|
|targetArn|object|false|none|none|
|status|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|lifecycleEvents|object|false|none|none|
|instanceLabel|object|false|none|none|

<h2 id="tocS_LambdaTarget">LambdaTarget</h2>
<!-- backwards compatibility -->
<a id="schemalambdatarget"></a>
<a id="schema_LambdaTarget"></a>
<a id="tocSlambdatarget"></a>
<a id="tocslambdatarget"></a>

```json
{
  "deploymentId": {},
  "targetId": {},
  "targetArn": {},
  "status": {},
  "lastUpdatedAt": {},
  "lifecycleEvents": {},
  "lambdaFunctionInfo": {
    "functionName": {},
    "functionAlias": {},
    "currentVersion": {},
    "targetVersion": {},
    "targetVersionWeight": {}
  }
}
```

 Information about the target Lambda function during an Lambda deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|false|none|none|
|targetId|object|false|none|none|
|targetArn|object|false|none|none|
|status|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|lifecycleEvents|object|false|none|none|
|lambdaFunctionInfo|object|false|none|none|

<h2 id="tocS_ECSTarget">ECSTarget</h2>
<!-- backwards compatibility -->
<a id="schemaecstarget"></a>
<a id="schema_ECSTarget"></a>
<a id="tocSecstarget"></a>
<a id="tocsecstarget"></a>

```json
{
  "deploymentId": {},
  "targetId": {},
  "targetArn": {},
  "lastUpdatedAt": {},
  "lifecycleEvents": {},
  "status": {},
  "taskSetsInfo": {}
}
```

 Information about the target of an Amazon ECS deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|false|none|none|
|targetId|object|false|none|none|
|targetArn|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|lifecycleEvents|object|false|none|none|
|status|object|false|none|none|
|taskSetsInfo|object|false|none|none|

<h2 id="tocS_DeploymentTarget">DeploymentTarget</h2>
<!-- backwards compatibility -->
<a id="schemadeploymenttarget"></a>
<a id="schema_DeploymentTarget"></a>
<a id="tocSdeploymenttarget"></a>
<a id="tocsdeploymenttarget"></a>

```json
{
  "deploymentTargetType": {},
  "instanceTarget": {
    "deploymentId": {},
    "targetId": {},
    "targetArn": {},
    "status": {},
    "lastUpdatedAt": {},
    "lifecycleEvents": {},
    "instanceLabel": {}
  },
  "lambdaTarget": {
    "deploymentId": {},
    "targetId": {},
    "targetArn": {},
    "status": {},
    "lastUpdatedAt": {},
    "lifecycleEvents": {},
    "lambdaFunctionInfo": {
      "functionName": {},
      "functionAlias": {},
      "currentVersion": {},
      "targetVersion": {},
      "targetVersionWeight": {}
    }
  },
  "ecsTarget": {
    "deploymentId": {},
    "targetId": {},
    "targetArn": {},
    "lastUpdatedAt": {},
    "lifecycleEvents": {},
    "status": {},
    "taskSetsInfo": {}
  },
  "cloudFormationTarget": {
    "deploymentId": {},
    "targetId": {},
    "lastUpdatedAt": {},
    "lifecycleEvents": {},
    "status": {},
    "resourceType": {},
    "targetVersionWeight": {}
  }
}
```

 Information about the deployment target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentTargetType|object|false|none|none|
|instanceTarget|object|false|none|none|
|lambdaTarget|object|false|none|none|
|ecsTarget|object|false|none|none|
|cloudFormationTarget|[CloudFormationTarget](#schemacloudformationtarget)|false|none| Information about the target to be updated by an CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update.|

<h2 id="tocS_InstanceName">InstanceName</h2>
<!-- backwards compatibility -->
<a id="schemainstancename"></a>
<a id="schema_InstanceName"></a>
<a id="tocSinstancename"></a>
<a id="tocsinstancename"></a>

```json
"string"
```

<h2 id="tocS_LifecycleErrorCode">LifecycleErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleerrorcode"></a>
<a id="schema_LifecycleErrorCode"></a>
<a id="tocSlifecycleerrorcode"></a>
<a id="tocslifecycleerrorcode"></a>

```json
"Success"
```

<h2 id="tocS_ScriptName">ScriptName</h2>
<!-- backwards compatibility -->
<a id="schemascriptname"></a>
<a id="schema_ScriptName"></a>
<a id="tocSscriptname"></a>
<a id="tocsscriptname"></a>

```json
"string"
```

<h2 id="tocS_LifecycleMessage">LifecycleMessage</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclemessage"></a>
<a id="schema_LifecycleMessage"></a>
<a id="tocSlifecyclemessage"></a>
<a id="tocslifecyclemessage"></a>

```json
"string"
```

<h2 id="tocS_LogTail">LogTail</h2>
<!-- backwards compatibility -->
<a id="schemalogtail"></a>
<a id="schema_LogTail"></a>
<a id="tocSlogtail"></a>
<a id="tocslogtail"></a>

```json
"string"
```

<h2 id="tocS_Diagnostics">Diagnostics</h2>
<!-- backwards compatibility -->
<a id="schemadiagnostics"></a>
<a id="schema_Diagnostics"></a>
<a id="tocSdiagnostics"></a>
<a id="tocsdiagnostics"></a>

```json
{
  "errorCode": {},
  "scriptName": {},
  "message": {},
  "logTail": {}
}
```

Diagnostic information about executable scripts that are part of a deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|object|false|none|none|
|scriptName|object|false|none|none|
|message|object|false|none|none|
|logTail|object|false|none|none|

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
"string"
```

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
"string"
```

<h2 id="tocS_EC2TagFilterType">EC2TagFilterType</h2>
<!-- backwards compatibility -->
<a id="schemaec2tagfiltertype"></a>
<a id="schema_EC2TagFilterType"></a>
<a id="tocSec2tagfiltertype"></a>
<a id="tocsec2tagfiltertype"></a>

```json
"KEY_ONLY"
```

<h2 id="tocS_EC2TagFilter">EC2TagFilter</h2>
<!-- backwards compatibility -->
<a id="schemaec2tagfilter"></a>
<a id="schema_EC2TagFilter"></a>
<a id="tocSec2tagfilter"></a>
<a id="tocsec2tagfilter"></a>

```json
{
  "Key": {},
  "Value": {},
  "Type": {}
}
```

Information about an EC2 tag filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_EC2TagSetList">EC2TagSetList</h2>
<!-- backwards compatibility -->
<a id="schemaec2tagsetlist"></a>
<a id="schema_EC2TagSetList"></a>
<a id="tocSec2tagsetlist"></a>
<a id="tocsec2tagsetlist"></a>

```json
[
  [
    {
      "Key": {},
      "Value": {},
      "Type": {}
    }
  ]
]
```

<h2 id="tocS_ECSClusterName">ECSClusterName</h2>
<!-- backwards compatibility -->
<a id="schemaecsclustername"></a>
<a id="schema_ECSClusterName"></a>
<a id="tocSecsclustername"></a>
<a id="tocsecsclustername"></a>

```json
"string"
```

<h2 id="tocS_ECSServiceName">ECSServiceName</h2>
<!-- backwards compatibility -->
<a id="schemaecsservicename"></a>
<a id="schema_ECSServiceName"></a>
<a id="tocSecsservicename"></a>
<a id="tocsecsservicename"></a>

```json
"string"
```

<h2 id="tocS_ECSService">ECSService</h2>
<!-- backwards compatibility -->
<a id="schemaecsservice"></a>
<a id="schema_ECSService"></a>
<a id="tocSecsservice"></a>
<a id="tocsecsservice"></a>

```json
{
  "serviceName": {},
  "clusterName": {}
}
```

 Contains the service and cluster names used to identify an Amazon ECS deployment's target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|object|false|none|none|
|clusterName|object|false|none|none|

<h2 id="tocS_TargetArn">TargetArn</h2>
<!-- backwards compatibility -->
<a id="schematargetarn"></a>
<a id="schema_TargetArn"></a>
<a id="tocStargetarn"></a>
<a id="tocstargetarn"></a>

```json
"string"
```

<h2 id="tocS_ECSTaskSetList">ECSTaskSetList</h2>
<!-- backwards compatibility -->
<a id="schemaecstasksetlist"></a>
<a id="schema_ECSTaskSetList"></a>
<a id="tocSecstasksetlist"></a>
<a id="tocsecstasksetlist"></a>

```json
[
  {
    "identifer": {},
    "desiredCount": {},
    "pendingCount": {},
    "runningCount": {},
    "status": {},
    "trafficWeight": {},
    "targetGroup": {
      "name": {}
    },
    "taskSetLabel": {}
  }
]
```

<h2 id="tocS_ECSTaskSetIdentifier">ECSTaskSetIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaecstasksetidentifier"></a>
<a id="schema_ECSTaskSetIdentifier"></a>
<a id="tocSecstasksetidentifier"></a>
<a id="tocsecstasksetidentifier"></a>

```json
"string"
```

<h2 id="tocS_ECSTaskSetCount">ECSTaskSetCount</h2>
<!-- backwards compatibility -->
<a id="schemaecstasksetcount"></a>
<a id="schema_ECSTaskSetCount"></a>
<a id="tocSecstasksetcount"></a>
<a id="tocsecstasksetcount"></a>

```json
0
```

<h2 id="tocS_ECSTaskSetStatus">ECSTaskSetStatus</h2>
<!-- backwards compatibility -->
<a id="schemaecstasksetstatus"></a>
<a id="schema_ECSTaskSetStatus"></a>
<a id="tocSecstasksetstatus"></a>
<a id="tocsecstasksetstatus"></a>

```json
"string"
```

<h2 id="tocS_TargetGroupInfo">TargetGroupInfo</h2>
<!-- backwards compatibility -->
<a id="schematargetgroupinfo"></a>
<a id="schema_TargetGroupInfo"></a>
<a id="tocStargetgroupinfo"></a>
<a id="tocstargetgroupinfo"></a>

```json
{
  "name": {}
}
```

Information about a target group in Elastic Load Balancing to use in a deployment. Instances are registered as targets in a target group, and traffic is routed to the target group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|

<h2 id="tocS_TargetLabel">TargetLabel</h2>
<!-- backwards compatibility -->
<a id="schematargetlabel"></a>
<a id="schema_TargetLabel"></a>
<a id="tocStargetlabel"></a>
<a id="tocstargetlabel"></a>

```json
"Blue"
```

<h2 id="tocS_ECSTaskSet">ECSTaskSet</h2>
<!-- backwards compatibility -->
<a id="schemaecstaskset"></a>
<a id="schema_ECSTaskSet"></a>
<a id="tocSecstaskset"></a>
<a id="tocsecstaskset"></a>

```json
{
  "identifer": {},
  "desiredCount": {},
  "pendingCount": {},
  "runningCount": {},
  "status": {},
  "trafficWeight": {},
  "targetGroup": {
    "name": {}
  },
  "taskSetLabel": {}
}
```

 Information about a set of Amazon ECS tasks in an CodeDeploy deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. An CodeDeploy application that uses the Amazon ECS compute platform deploys a containerized application in an Amazon ECS service as a task set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifer|object|false|none|none|
|desiredCount|object|false|none|none|
|pendingCount|object|false|none|none|
|runningCount|object|false|none|none|
|status|object|false|none|none|
|trafficWeight|object|false|none|none|
|targetGroup|object|false|none|none|
|taskSetLabel|object|false|none|none|

<h2 id="tocS_ELBName">ELBName</h2>
<!-- backwards compatibility -->
<a id="schemaelbname"></a>
<a id="schema_ELBName"></a>
<a id="tocSelbname"></a>
<a id="tocselbname"></a>

```json
"string"
```

<h2 id="tocS_ELBInfo">ELBInfo</h2>
<!-- backwards compatibility -->
<a id="schemaelbinfo"></a>
<a id="schema_ELBInfo"></a>
<a id="tocSelbinfo"></a>
<a id="tocselbinfo"></a>

```json
{
  "name": {}
}
```

Information about a load balancer in Elastic Load Balancing to use in a deployment. Instances are registered directly with a load balancer, and traffic is routed to the load balancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|

<h2 id="tocS_ELBInfoList">ELBInfoList</h2>
<!-- backwards compatibility -->
<a id="schemaelbinfolist"></a>
<a id="schema_ELBInfoList"></a>
<a id="tocSelbinfolist"></a>
<a id="tocselbinfolist"></a>

```json
[
  {
    "name": {}
  }
]
```

<h2 id="tocS_ETag">ETag</h2>
<!-- backwards compatibility -->
<a id="schemaetag"></a>
<a id="schema_ETag"></a>
<a id="tocSetag"></a>
<a id="tocsetag"></a>

```json
"string"
```

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"AGENT_ISSUE"
```

<h2 id="tocS_FilterValue">FilterValue</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalue"></a>
<a id="schema_FilterValue"></a>
<a id="tocSfiltervalue"></a>
<a id="tocsfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_FilterValueList">FilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemafiltervaluelist"></a>
<a id="schema_FilterValueList"></a>
<a id="tocSfiltervaluelist"></a>
<a id="tocsfiltervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GenericRevisionInfo">GenericRevisionInfo</h2>
<!-- backwards compatibility -->
<a id="schemagenericrevisioninfo"></a>
<a id="schema_GenericRevisionInfo"></a>
<a id="tocSgenericrevisioninfo"></a>
<a id="tocsgenericrevisioninfo"></a>

```json
{
  "description": {},
  "deploymentGroups": {},
  "firstUsedTime": {},
  "lastUsedTime": {},
  "registerTime": {}
}
```

Information about an application revision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|deploymentGroups|object|false|none|none|
|firstUsedTime|object|false|none|none|
|lastUsedTime|object|false|none|none|
|registerTime|object|false|none|none|

<h2 id="tocS_InstanceId">InstanceId</h2>
<!-- backwards compatibility -->
<a id="schemainstanceid"></a>
<a id="schema_InstanceId"></a>
<a id="tocSinstanceid"></a>
<a id="tocsinstanceid"></a>

```json
"string"
```

<h2 id="tocS_InstanceSummary">InstanceSummary</h2>
<!-- backwards compatibility -->
<a id="schemainstancesummary"></a>
<a id="schema_InstanceSummary"></a>
<a id="tocSinstancesummary"></a>
<a id="tocsinstancesummary"></a>

```json
{
  "deploymentId": {},
  "instanceId": {},
  "status": {},
  "lastUpdatedAt": {},
  "lifecycleEvents": {},
  "instanceType": {}
}
```

Information about an instance in a deployment.InstanceSummary is deprecated, use DeploymentTarget instead.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|false|none|none|
|instanceId|object|false|none|none|
|status|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|lifecycleEvents|object|false|none|none|
|instanceType|object|false|none|none|

<h2 id="tocS_InstanceInfo">InstanceInfo</h2>
<!-- backwards compatibility -->
<a id="schemainstanceinfo"></a>
<a id="schema_InstanceInfo"></a>
<a id="tocSinstanceinfo"></a>
<a id="tocsinstanceinfo"></a>

```json
{
  "instanceName": {},
  "iamSessionArn": {},
  "iamUserArn": {},
  "instanceArn": {},
  "registerTime": {},
  "deregisterTime": {},
  "tags": {}
}
```

Information about an on-premises instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceName|object|false|none|none|
|iamSessionArn|object|false|none|none|
|iamUserArn|object|false|none|none|
|instanceArn|object|false|none|none|
|registerTime|object|false|none|none|
|deregisterTime|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GitHubAccountTokenNameList">GitHubAccountTokenNameList</h2>
<!-- backwards compatibility -->
<a id="schemagithubaccounttokennamelist"></a>
<a id="schema_GitHubAccountTokenNameList"></a>
<a id="tocSgithubaccounttokennamelist"></a>
<a id="tocsgithubaccounttokennamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Repository">Repository</h2>
<!-- backwards compatibility -->
<a id="schemarepository"></a>
<a id="schema_Repository"></a>
<a id="tocSrepository"></a>
<a id="tocsrepository"></a>

```json
"string"
```

<h2 id="tocS_GitHubLocation">GitHubLocation</h2>
<!-- backwards compatibility -->
<a id="schemagithublocation"></a>
<a id="schema_GitHubLocation"></a>
<a id="tocSgithublocation"></a>
<a id="tocsgithublocation"></a>

```json
{
  "repository": {},
  "commitId": {}
}
```

Information about the location of application artifacts stored in GitHub.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repository|object|false|none|none|
|commitId|object|false|none|none|

<h2 id="tocS_GreenFleetProvisioningAction">GreenFleetProvisioningAction</h2>
<!-- backwards compatibility -->
<a id="schemagreenfleetprovisioningaction"></a>
<a id="schema_GreenFleetProvisioningAction"></a>
<a id="tocSgreenfleetprovisioningaction"></a>
<a id="tocsgreenfleetprovisioningaction"></a>

```json
"DISCOVER_EXISTING"
```

<h2 id="tocS_IamSessionArn">IamSessionArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamsessionarn"></a>
<a id="schema_IamSessionArn"></a>
<a id="tocSiamsessionarn"></a>
<a id="tocsiamsessionarn"></a>

```json
"string"
```

<h2 id="tocS_IamUserArn">IamUserArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamuserarn"></a>
<a id="schema_IamUserArn"></a>
<a id="tocSiamuserarn"></a>
<a id="tocsiamuserarn"></a>

```json
"string"
```

<h2 id="tocS_InstanceArn">InstanceArn</h2>
<!-- backwards compatibility -->
<a id="schemainstancearn"></a>
<a id="schema_InstanceArn"></a>
<a id="tocSinstancearn"></a>
<a id="tocsinstancearn"></a>

```json
"string"
```

<h2 id="tocS_InstanceStatus">InstanceStatus</h2>
<!-- backwards compatibility -->
<a id="schemainstancestatus"></a>
<a id="schema_InstanceStatus"></a>
<a id="tocSinstancestatus"></a>
<a id="tocsinstancestatus"></a>

```json
"Pending"
```

InstanceStatus is deprecated, use TargetStatus instead.

<h2 id="tocS_InstanceStatusList">InstanceStatusList</h2>
<!-- backwards compatibility -->
<a id="schemainstancestatuslist"></a>
<a id="schema_InstanceStatusList"></a>
<a id="tocSinstancestatuslist"></a>
<a id="tocsinstancestatuslist"></a>

```json
[
  "Pending"
]
```

<h2 id="tocS_InstanceType">InstanceType</h2>
<!-- backwards compatibility -->
<a id="schemainstancetype"></a>
<a id="schema_InstanceType"></a>
<a id="tocSinstancetype"></a>
<a id="tocsinstancetype"></a>

```json
"Blue"
```

<h2 id="tocS_InstanceTypeList">InstanceTypeList</h2>
<!-- backwards compatibility -->
<a id="schemainstancetypelist"></a>
<a id="schema_InstanceTypeList"></a>
<a id="tocSinstancetypelist"></a>
<a id="tocsinstancetypelist"></a>

```json
[
  "Blue"
]
```

<h2 id="tocS_LambdaFunctionAlias">LambdaFunctionAlias</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionalias"></a>
<a id="schema_LambdaFunctionAlias"></a>
<a id="tocSlambdafunctionalias"></a>
<a id="tocslambdafunctionalias"></a>

```json
"string"
```

<h2 id="tocS_LambdaFunctionName">LambdaFunctionName</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionname"></a>
<a id="schema_LambdaFunctionName"></a>
<a id="tocSlambdafunctionname"></a>
<a id="tocslambdafunctionname"></a>

```json
"string"
```

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
"string"
```

<h2 id="tocS_LambdaFunctionInfo">LambdaFunctionInfo</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctioninfo"></a>
<a id="schema_LambdaFunctionInfo"></a>
<a id="tocSlambdafunctioninfo"></a>
<a id="tocslambdafunctioninfo"></a>

```json
{
  "functionName": {},
  "functionAlias": {},
  "currentVersion": {},
  "targetVersion": {},
  "targetVersionWeight": {}
}
```

 Information about a Lambda function specified in a deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionName|object|false|none|none|
|functionAlias|object|false|none|none|
|currentVersion|object|false|none|none|
|targetVersion|object|false|none|none|
|targetVersionWeight|object|false|none|none|

<h2 id="tocS_LifecycleEventName">LifecycleEventName</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleeventname"></a>
<a id="schema_LifecycleEventName"></a>
<a id="tocSlifecycleeventname"></a>
<a id="tocslifecycleeventname"></a>

```json
"string"
```

<h2 id="tocS_LifecycleEventStatus">LifecycleEventStatus</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleeventstatus"></a>
<a id="schema_LifecycleEventStatus"></a>
<a id="tocSlifecycleeventstatus"></a>
<a id="tocslifecycleeventstatus"></a>

```json
"Pending"
```

<h2 id="tocS_LifecycleEvent">LifecycleEvent</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleevent"></a>
<a id="schema_LifecycleEvent"></a>
<a id="tocSlifecycleevent"></a>
<a id="tocslifecycleevent"></a>

```json
{
  "lifecycleEventName": {},
  "diagnostics": {
    "errorCode": {},
    "scriptName": {},
    "message": {},
    "logTail": {}
  },
  "startTime": {},
  "endTime": {},
  "status": {}
}
```

Information about a deployment lifecycle event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lifecycleEventName|object|false|none|none|
|diagnostics|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_LifecycleEventHookExecutionId">LifecycleEventHookExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleeventhookexecutionid"></a>
<a id="schema_LifecycleEventHookExecutionId"></a>
<a id="tocSlifecycleeventhookexecutionid"></a>
<a id="tocslifecycleeventhookexecutionid"></a>

```json
"string"
```

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"ascending"
```

<h2 id="tocS_S3Bucket">S3Bucket</h2>
<!-- backwards compatibility -->
<a id="schemas3bucket"></a>
<a id="schema_S3Bucket"></a>
<a id="tocSs3bucket"></a>
<a id="tocss3bucket"></a>

```json
"string"
```

<h2 id="tocS_S3Key">S3Key</h2>
<!-- backwards compatibility -->
<a id="schemas3key"></a>
<a id="schema_S3Key"></a>
<a id="tocSs3key"></a>
<a id="tocss3key"></a>

```json
"string"
```

<h2 id="tocS_ListStateFilterAction">ListStateFilterAction</h2>
<!-- backwards compatibility -->
<a id="schemaliststatefilteraction"></a>
<a id="schema_ListStateFilterAction"></a>
<a id="tocSliststatefilteraction"></a>
<a id="tocsliststatefilteraction"></a>

```json
"include"
```

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_TargetFilters">TargetFilters</h2>
<!-- backwards compatibility -->
<a id="schematargetfilters"></a>
<a id="schema_TargetFilters"></a>
<a id="tocStargetfilters"></a>
<a id="tocstargetfilters"></a>

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[FilterValueList](#schemafiltervaluelist)|false|none|none|

<h2 id="tocS_TimeRange">TimeRange</h2>
<!-- backwards compatibility -->
<a id="schematimerange"></a>
<a id="schema_TimeRange"></a>
<a id="tocStimerange"></a>
<a id="tocstimerange"></a>

```json
{
  "start": {},
  "end": {}
}
```

Information about a time range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|object|false|none|none|
|end|object|false|none|none|

<h2 id="tocS_RegistrationStatus">RegistrationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationstatus"></a>
<a id="schema_RegistrationStatus"></a>
<a id="tocSregistrationstatus"></a>
<a id="tocsregistrationstatus"></a>

```json
"Registered"
```

<h2 id="tocS_ListenerArn">ListenerArn</h2>
<!-- backwards compatibility -->
<a id="schemalistenerarn"></a>
<a id="schema_ListenerArn"></a>
<a id="tocSlistenerarn"></a>
<a id="tocslistenerarn"></a>

```json
"string"
```

<h2 id="tocS_ListenerArnList">ListenerArnList</h2>
<!-- backwards compatibility -->
<a id="schemalistenerarnlist"></a>
<a id="schema_ListenerArnList"></a>
<a id="tocSlistenerarnlist"></a>
<a id="tocslistenerarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TargetGroupInfoList">TargetGroupInfoList</h2>
<!-- backwards compatibility -->
<a id="schematargetgroupinfolist"></a>
<a id="schema_TargetGroupInfoList"></a>
<a id="tocStargetgroupinfolist"></a>
<a id="tocstargetgroupinfolist"></a>

```json
[
  {
    "name": {}
  }
]
```

<h2 id="tocS_TargetGroupPairInfoList">TargetGroupPairInfoList</h2>
<!-- backwards compatibility -->
<a id="schematargetgrouppairinfolist"></a>
<a id="schema_TargetGroupPairInfoList"></a>
<a id="tocStargetgrouppairinfolist"></a>
<a id="tocstargetgrouppairinfolist"></a>

```json
[
  {
    "targetGroups": {},
    "prodTrafficRoute": {
      "listenerArns": {}
    },
    "testTrafficRoute": {
      "listenerArns": {}
    }
  }
]
```

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

<h2 id="tocS_MinimumHealthyHostsType">MinimumHealthyHostsType</h2>
<!-- backwards compatibility -->
<a id="schemaminimumhealthyhoststype"></a>
<a id="schema_MinimumHealthyHostsType"></a>
<a id="tocSminimumhealthyhoststype"></a>
<a id="tocsminimumhealthyhoststype"></a>

```json
"HOST_COUNT"
```

<h2 id="tocS_MinimumHealthyHostsValue">MinimumHealthyHostsValue</h2>
<!-- backwards compatibility -->
<a id="schemaminimumhealthyhostsvalue"></a>
<a id="schema_MinimumHealthyHostsValue"></a>
<a id="tocSminimumhealthyhostsvalue"></a>
<a id="tocsminimumhealthyhostsvalue"></a>

```json
0
```

<h2 id="tocS_NullableBoolean">NullableBoolean</h2>
<!-- backwards compatibility -->
<a id="schemanullableboolean"></a>
<a id="schema_NullableBoolean"></a>
<a id="tocSnullableboolean"></a>
<a id="tocsnullableboolean"></a>

```json
true
```

<h2 id="tocS_OnPremisesTagSetList">OnPremisesTagSetList</h2>
<!-- backwards compatibility -->
<a id="schemaonpremisestagsetlist"></a>
<a id="schema_OnPremisesTagSetList"></a>
<a id="tocSonpremisestagsetlist"></a>
<a id="tocsonpremisestagsetlist"></a>

```json
[
  [
    {
      "Key": {},
      "Value": {},
      "Type": {}
    }
  ]
]
```

<h2 id="tocS_Percentage">Percentage</h2>
<!-- backwards compatibility -->
<a id="schemapercentage"></a>
<a id="schema_Percentage"></a>
<a id="tocSpercentage"></a>
<a id="tocspercentage"></a>

```json
0
```

<h2 id="tocS_RawString">RawString</h2>
<!-- backwards compatibility -->
<a id="schemarawstring"></a>
<a id="schema_RawString"></a>
<a id="tocSrawstring"></a>
<a id="tocsrawstring"></a>

```json
{
  "content": {},
  "sha256": {}
}
```

A revision for an Lambda deployment that is a YAML-formatted or JSON-formatted string. For Lambda deployments, the revision is the same as the AppSpec file.RawString and String revision type are deprecated, use AppSpecContent type instead.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|object|false|none|none|
|sha256|object|false|none|none|

<h2 id="tocS_RevisionInfo">RevisionInfo</h2>
<!-- backwards compatibility -->
<a id="schemarevisioninfo"></a>
<a id="schema_RevisionInfo"></a>
<a id="tocSrevisioninfo"></a>
<a id="tocsrevisioninfo"></a>

```json
{
  "revisionLocation": {
    "revisionType": {},
    "s3Location": {
      "bucket": {},
      "key": {},
      "bundleType": {},
      "version": {},
      "eTag": {}
    },
    "gitHubLocation": {
      "repository": {},
      "commitId": {}
    },
    "string": {
      "content": {},
      "sha256": {}
    },
    "appSpecContent": {
      "content": {},
      "sha256": {}
    }
  },
  "genericRevisionInfo": {
    "description": {},
    "deploymentGroups": {},
    "firstUsedTime": {},
    "lastUsedTime": {},
    "registerTime": {}
  }
}
```

Information about an application revision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revisionLocation|object|false|none|none|
|genericRevisionInfo|object|false|none|none|

<h2 id="tocS_RevisionLocationType">RevisionLocationType</h2>
<!-- backwards compatibility -->
<a id="schemarevisionlocationtype"></a>
<a id="schema_RevisionLocationType"></a>
<a id="tocSrevisionlocationtype"></a>
<a id="tocsrevisionlocationtype"></a>

```json
"S3"
```

<h2 id="tocS_S3Location">S3Location</h2>
<!-- backwards compatibility -->
<a id="schemas3location"></a>
<a id="schema_S3Location"></a>
<a id="tocSs3location"></a>
<a id="tocss3location"></a>

```json
{
  "bucket": {},
  "key": {},
  "bundleType": {},
  "version": {},
  "eTag": {}
}
```

Information about the location of application artifacts stored in Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|false|none|none|
|key|object|false|none|none|
|bundleType|object|false|none|none|
|version|object|false|none|none|
|eTag|object|false|none|none|

<h2 id="tocS_VersionId">VersionId</h2>
<!-- backwards compatibility -->
<a id="schemaversionid"></a>
<a id="schema_VersionId"></a>
<a id="tocSversionid"></a>
<a id="tocsversionid"></a>

```json
"string"
```

<h2 id="tocS_StopStatus">StopStatus</h2>
<!-- backwards compatibility -->
<a id="schemastopstatus"></a>
<a id="schema_StopStatus"></a>
<a id="tocSstopstatus"></a>
<a id="tocsstopstatus"></a>

```json
"Pending"
```

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

Information about a tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_TagFilterType">TagFilterType</h2>
<!-- backwards compatibility -->
<a id="schematagfiltertype"></a>
<a id="schema_TagFilterType"></a>
<a id="tocStagfiltertype"></a>
<a id="tocstagfiltertype"></a>

```json
"KEY_ONLY"
```

<h2 id="tocS_TagFilter">TagFilter</h2>
<!-- backwards compatibility -->
<a id="schematagfilter"></a>
<a id="schema_TagFilter"></a>
<a id="tocStagfilter"></a>
<a id="tocstagfilter"></a>

```json
{
  "Key": {},
  "Value": {},
  "Type": {}
}
```

Information about an on-premises instance tag filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TargetFilterName">TargetFilterName</h2>
<!-- backwards compatibility -->
<a id="schematargetfiltername"></a>
<a id="schema_TargetFilterName"></a>
<a id="tocStargetfiltername"></a>
<a id="tocstargetfiltername"></a>

```json
"TargetStatus"
```

<h2 id="tocS_TargetGroupName">TargetGroupName</h2>
<!-- backwards compatibility -->
<a id="schematargetgroupname"></a>
<a id="schema_TargetGroupName"></a>
<a id="tocStargetgroupname"></a>
<a id="tocstargetgroupname"></a>

```json
"string"
```

<h2 id="tocS_TrafficRoute">TrafficRoute</h2>
<!-- backwards compatibility -->
<a id="schematrafficroute"></a>
<a id="schema_TrafficRoute"></a>
<a id="tocStrafficroute"></a>
<a id="tocstrafficroute"></a>

```json
{
  "listenerArns": {}
}
```

 Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listenerArns|object|false|none|none|

<h2 id="tocS_TargetGroupPairInfo">TargetGroupPairInfo</h2>
<!-- backwards compatibility -->
<a id="schematargetgrouppairinfo"></a>
<a id="schema_TargetGroupPairInfo"></a>
<a id="tocStargetgrouppairinfo"></a>
<a id="tocstargetgrouppairinfo"></a>

```json
{
  "targetGroups": {},
  "prodTrafficRoute": {
    "listenerArns": {}
  },
  "testTrafficRoute": {
    "listenerArns": {}
  }
}
```

 Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetGroups|object|false|none|none|
|prodTrafficRoute|object|false|none|none|
|testTrafficRoute|object|false|none|none|

<h2 id="tocS_WaitTimeInMins">WaitTimeInMins</h2>
<!-- backwards compatibility -->
<a id="schemawaittimeinmins"></a>
<a id="schema_WaitTimeInMins"></a>
<a id="tocSwaittimeinmins"></a>
<a id="tocswaittimeinmins"></a>

```json
0
```

<h2 id="tocS_TimeBasedCanary">TimeBasedCanary</h2>
<!-- backwards compatibility -->
<a id="schematimebasedcanary"></a>
<a id="schema_TimeBasedCanary"></a>
<a id="tocStimebasedcanary"></a>
<a id="tocstimebasedcanary"></a>

```json
{
  "canaryPercentage": {},
  "canaryInterval": {}
}
```

A configuration that shifts traffic from one version of a Lambda function or Amazon ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canaryPercentage|object|false|none|none|
|canaryInterval|object|false|none|none|

<h2 id="tocS_TimeBasedLinear">TimeBasedLinear</h2>
<!-- backwards compatibility -->
<a id="schematimebasedlinear"></a>
<a id="schema_TimeBasedLinear"></a>
<a id="tocStimebasedlinear"></a>
<a id="tocstimebasedlinear"></a>

```json
{
  "linearPercentage": {},
  "linearInterval": {}
}
```

A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linearPercentage|object|false|none|none|
|linearInterval|object|false|none|none|

<h2 id="tocS_TrafficRoutingType">TrafficRoutingType</h2>
<!-- backwards compatibility -->
<a id="schematrafficroutingtype"></a>
<a id="schema_TrafficRoutingType"></a>
<a id="tocStrafficroutingtype"></a>
<a id="tocstrafficroutingtype"></a>

```json
"TimeBasedCanary"
```

<h2 id="tocS_TriggerName">TriggerName</h2>
<!-- backwards compatibility -->
<a id="schematriggername"></a>
<a id="schema_TriggerName"></a>
<a id="tocStriggername"></a>
<a id="tocstriggername"></a>

```json
"string"
```

<h2 id="tocS_TriggerTargetArn">TriggerTargetArn</h2>
<!-- backwards compatibility -->
<a id="schematriggertargetarn"></a>
<a id="schema_TriggerTargetArn"></a>
<a id="tocStriggertargetarn"></a>
<a id="tocstriggertargetarn"></a>

```json
"string"
```

<h2 id="tocS_TriggerEventTypeList">TriggerEventTypeList</h2>
<!-- backwards compatibility -->
<a id="schematriggereventtypelist"></a>
<a id="schema_TriggerEventTypeList"></a>
<a id="tocStriggereventtypelist"></a>
<a id="tocstriggereventtypelist"></a>

```json
[
  "DeploymentStart"
]
```

<h2 id="tocS_TriggerConfig">TriggerConfig</h2>
<!-- backwards compatibility -->
<a id="schematriggerconfig"></a>
<a id="schema_TriggerConfig"></a>
<a id="tocStriggerconfig"></a>
<a id="tocstriggerconfig"></a>

```json
{
  "triggerName": {},
  "triggerTargetArn": {},
  "triggerEvents": {}
}
```

Information about notification triggers for the deployment group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|triggerName|object|false|none|none|
|triggerTargetArn|object|false|none|none|
|triggerEvents|object|false|none|none|

<h2 id="tocS_TriggerEventType">TriggerEventType</h2>
<!-- backwards compatibility -->
<a id="schematriggereventtype"></a>
<a id="schema_TriggerEventType"></a>
<a id="tocStriggereventtype"></a>
<a id="tocstriggereventtype"></a>

```json
"DeploymentStart"
```
