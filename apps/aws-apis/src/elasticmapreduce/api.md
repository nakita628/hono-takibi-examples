<h1 id="amazon-emr">Amazon EMR v2009-03-31</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon EMR is a web service that makes it easier to process large amounts of data efficiently. Amazon EMR uses Hadoop processing combined with several Amazon Web Services services to do tasks such as web indexing, data mining, log file analysis, machine learning, scientific simulation, and data warehouse management.

Base URLs:

* <a href="http://elasticmapreduce.us-east-1.amazonaws.com">http://elasticmapreduce.us-east-1.amazonaws.com</a> - The Amazon EMR multi-region endpoint

* <a href="https://elasticmapreduce.us-east-1.amazonaws.com">https://elasticmapreduce.us-east-1.amazonaws.com</a> - The Amazon EMR multi-region endpoint

* <a href="http://elasticmapreduce.amazonaws.com">http://elasticmapreduce.amazonaws.com</a> - The general Amazon EMR endpoint for US West (Oregon)

* <a href="https://elasticmapreduce.amazonaws.com">https://elasticmapreduce.amazonaws.com</a> - The general Amazon EMR endpoint for US West (Oregon)

* <a href="http://elasticmapreduce.cn-north-1.amazonaws.com.cn">http://elasticmapreduce.cn-north-1.amazonaws.com.cn</a> - The Amazon EMR endpoint for China (Beijing) and China (Ningxia)

* <a href="https://elasticmapreduce.cn-north-1.amazonaws.com.cn">https://elasticmapreduce.cn-north-1.amazonaws.com.cn</a> - The Amazon EMR endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/elasticmapreduce/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-emr-default">Default</h1>

## AddInstanceFleet

<a id="opIdAddInstanceFleet"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.AddInstanceFleet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.AddInstanceFleet' \
  -d '{
    "ClusterId": {},
    "InstanceFleet": {
      "Name": {},
      "InstanceFleetType": {},
      "TargetOnDemandCapacity": {},
      "TargetSpotCapacity": {},
      "InstanceTypeConfigs": {},
      "LaunchSpecifications": {
        "SpotSpecification": {
          "TimeoutDurationMinutes": {},
          "TimeoutAction": {},
          "BlockDurationMinutes": {},
          "AllocationStrategy": {}
        },
        "OnDemandSpecification": {
          "AllocationStrategy": {},
          "CapacityReservationOptions": {
            "UsageStrategy": {},
            "CapacityReservationPreference": {},
            "CapacityReservationResourceGroupArn": {}
          }
        }
      },
      "ResizeSpecifications": {
        "SpotResizeSpecification": {
          "TimeoutDurationMinutes": {}
        },
        "OnDemandResizeSpecification": {
          "TimeoutDurationMinutes": {}
        }
      }
    }
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.AddInstanceFleet`

<p>Adds an instance fleet to a running cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x.</p> </note>

> Body parameter

```json
{
  "ClusterId": {},
  "InstanceFleet": {
    "Name": {},
    "InstanceFleetType": {},
    "TargetOnDemandCapacity": {},
    "TargetSpotCapacity": {},
    "InstanceTypeConfigs": {},
    "LaunchSpecifications": {
      "SpotSpecification": {
        "TimeoutDurationMinutes": {},
        "TimeoutAction": {},
        "BlockDurationMinutes": {},
        "AllocationStrategy": {}
      },
      "OnDemandSpecification": {
        "AllocationStrategy": {},
        "CapacityReservationOptions": {
          "UsageStrategy": {},
          "CapacityReservationPreference": {},
          "CapacityReservationResourceGroupArn": {}
        }
      }
    },
    "ResizeSpecifications": {
      "SpotResizeSpecification": {
        "TimeoutDurationMinutes": {}
      },
      "OnDemandResizeSpecification": {
        "TimeoutDurationMinutes": {}
      }
    }
  }
}
```

<h3 id="addinstancefleet-parameters">Parameters</h3>

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
|body|body|[AddInstanceFleetInput](#schemaaddinstancefleetinput)|true|none|
|» ClusterId|body|object|true|none|
|» InstanceFleet|body|object|true|none|
|» » Name|body|object|false|none|
|» » InstanceFleetType|body|object|true|none|
|» » TargetOnDemandCapacity|body|object|false|none|
|» » TargetSpotCapacity|body|object|false|none|
|» » InstanceTypeConfigs|body|object|false|none|
|» » LaunchSpecifications|body|object|false|none|
|» » » SpotSpecification|body|object|false|none|
|» » » » TimeoutDurationMinutes|body|object|true|none|
|» » » » TimeoutAction|body|object|true|none|
|» » » » BlockDurationMinutes|body|object|false|none|
|» » » » AllocationStrategy|body|object|false|none|
|» » » OnDemandSpecification|body|object|false|none|
|» » » » AllocationStrategy|body|object|true|none|
|» » » » CapacityReservationOptions|body|object|false|none|
|» » » » » UsageStrategy|body|object|false|none|
|» » » » » CapacityReservationPreference|body|object|false|none|
|» » » » » CapacityReservationResourceGroupArn|body|object|false|none|
|» » ResizeSpecifications|body|object|false|none|
|» » » SpotResizeSpecification|body|object|false|none|
|» » » » TimeoutDurationMinutes|body|object|true|none|
|» » » OnDemandResizeSpecification|body|object|false|none|
|» » » » TimeoutDurationMinutes|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.AddInstanceFleet|

> Example responses

> 200 Response

```json
{
  "ClusterId": {},
  "InstanceFleetId": {},
  "ClusterArn": {}
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

<h3 id="addinstancefleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddInstanceFleetOutput](#schemaaddinstancefleetoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddInstanceGroups

<a id="opIdAddInstanceGroups"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.AddInstanceGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.AddInstanceGroups' \
  -d '{
    "InstanceGroups": {},
    "JobFlowId": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.AddInstanceGroups`

Adds one or more instance groups to a running cluster.

> Body parameter

```json
{
  "InstanceGroups": {},
  "JobFlowId": {}
}
```

<h3 id="addinstancegroups-parameters">Parameters</h3>

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
|body|body|[AddInstanceGroupsInput](#schemaaddinstancegroupsinput)|true|none|
|» InstanceGroups|body|object|true|none|
|» JobFlowId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.AddInstanceGroups|

> Example responses

> 200 Response

```json
{
  "JobFlowId": {},
  "InstanceGroupIds": {},
  "ClusterArn": {}
}
```

> 480 Response

```json
null
```

<h3 id="addinstancegroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddInstanceGroupsOutput](#schemaaddinstancegroupsoutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddJobFlowSteps

<a id="opIdAddJobFlowSteps"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.AddJobFlowSteps' \
  -d '{
    "JobFlowId": {},
    "Steps": {},
    "ExecutionRoleArn": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps`

<p>AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using SSH to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop.</p> <p>A step specifies the location of a JAR file stored either on the master node of the cluster or in Amazon S3. Each step is performed by the main function of the main class of the JAR file. The main class can be specified either in the manifest of the JAR or by using the MainFunction parameter of the step.</p> <p>Amazon EMR executes each step in the order listed. For a step to be considered complete, the main function must exit with a zero exit code and all Hadoop jobs started while the step was running must have completed and run successfully.</p> <p>You can only add steps to a cluster that is in one of the following states: STARTING, BOOTSTRAPPING, RUNNING, or WAITING.</p> <note> <p>The string values passed into <code>HadoopJarStep</code> object cannot exceed a total of 10240 characters.</p> </note>

> Body parameter

```json
{
  "JobFlowId": {},
  "Steps": {},
  "ExecutionRoleArn": {}
}
```

<h3 id="addjobflowsteps-parameters">Parameters</h3>

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
|body|body|[AddJobFlowStepsInput](#schemaaddjobflowstepsinput)|true|none|
|» JobFlowId|body|object|true|none|
|» Steps|body|object|true|none|
|» ExecutionRoleArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.AddJobFlowSteps|

> Example responses

> 200 Response

```json
{
  "StepIds": {}
}
```

> 480 Response

```json
null
```

<h3 id="addjobflowsteps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddJobFlowStepsOutput](#schemaaddjobflowstepsoutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddTags

<a id="opIdAddTags"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.AddTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.AddTags' \
  -d '{
    "ResourceId": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.AddTags`

Adds tags to an Amazon EMR resource, such as a cluster or an Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. 

> Body parameter

```json
{
  "ResourceId": {},
  "Tags": {}
}
```

<h3 id="addtags-parameters">Parameters</h3>

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
|body|body|[AddTagsInput](#schemaaddtagsinput)|true|none|
|» ResourceId|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.AddTags|

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

<h3 id="addtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddTagsOutput](#schemaaddtagsoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelSteps

<a id="opIdCancelSteps"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.CancelSteps' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.CancelSteps' \
  -d '{
    "ClusterId": {},
    "StepIds": {},
    "StepCancellationOption": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.CancelSteps`

Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee that a step will be canceled, even if the request is successfully submitted. When you use Amazon EMR versions 5.28.0 and later, you can cancel steps that are in a <code>PENDING</code> or <code>RUNNING</code> state. In earlier versions of Amazon EMR, you can only cancel steps that are in a <code>PENDING</code> state. 

> Body parameter

```json
{
  "ClusterId": {},
  "StepIds": {},
  "StepCancellationOption": {}
}
```

<h3 id="cancelsteps-parameters">Parameters</h3>

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
|body|body|[CancelStepsInput](#schemacancelstepsinput)|true|none|
|» ClusterId|body|object|true|none|
|» StepIds|body|object|true|none|
|» StepCancellationOption|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.CancelSteps|

> Example responses

> 200 Response

```json
{
  "CancelStepsInfoList": {}
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

<h3 id="cancelsteps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelStepsOutput](#schemacancelstepsoutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSecurityConfiguration

<a id="opIdCreateSecurityConfiguration"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.CreateSecurityConfiguration' \
  -d '{
    "Name": {},
    "SecurityConfiguration": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration`

Creates a security configuration, which is stored in the service and can be specified when a cluster is created.

> Body parameter

```json
{
  "Name": {},
  "SecurityConfiguration": {}
}
```

<h3 id="createsecurityconfiguration-parameters">Parameters</h3>

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
|body|body|[CreateSecurityConfigurationInput](#schemacreatesecurityconfigurationinput)|true|none|
|» Name|body|object|true|none|
|» SecurityConfiguration|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.CreateSecurityConfiguration|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "CreationDateTime": {}
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

<h3 id="createsecurityconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSecurityConfigurationOutput](#schemacreatesecurityconfigurationoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStudio

<a id="opIdCreateStudio"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.CreateStudio' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.CreateStudio' \
  -d '{
    "Name": {},
    "Description": {},
    "AuthMode": {},
    "VpcId": {},
    "SubnetIds": {},
    "ServiceRole": {},
    "UserRole": {},
    "WorkspaceSecurityGroupId": {},
    "EngineSecurityGroupId": {},
    "DefaultS3Location": {},
    "IdpAuthUrl": {},
    "IdpRelayStateParameterName": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.CreateStudio`

Creates a new Amazon EMR Studio.

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "AuthMode": {},
  "VpcId": {},
  "SubnetIds": {},
  "ServiceRole": {},
  "UserRole": {},
  "WorkspaceSecurityGroupId": {},
  "EngineSecurityGroupId": {},
  "DefaultS3Location": {},
  "IdpAuthUrl": {},
  "IdpRelayStateParameterName": {},
  "Tags": {}
}
```

<h3 id="createstudio-parameters">Parameters</h3>

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
|body|body|[CreateStudioInput](#schemacreatestudioinput)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» AuthMode|body|object|true|none|
|» VpcId|body|object|true|none|
|» SubnetIds|body|object|true|none|
|» ServiceRole|body|object|true|none|
|» UserRole|body|object|false|none|
|» WorkspaceSecurityGroupId|body|object|true|none|
|» EngineSecurityGroupId|body|object|true|none|
|» DefaultS3Location|body|object|true|none|
|» IdpAuthUrl|body|object|false|none|
|» IdpRelayStateParameterName|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.CreateStudio|

> Example responses

> 200 Response

```json
{
  "StudioId": {},
  "Url": {}
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

<h3 id="createstudio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStudioOutput](#schemacreatestudiooutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStudioSessionMapping

<a id="opIdCreateStudioSessionMapping"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.CreateStudioSessionMapping' \
  -d '{
    "StudioId": {},
    "IdentityId": {},
    "IdentityName": {},
    "IdentityType": {},
    "SessionPolicyArn": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping`

Maps a user or group to the Amazon EMR Studio specified by <code>StudioId</code>, and applies a session policy to refine Studio permissions for that user or group. Use <code>CreateStudioSessionMapping</code> to assign users to a Studio when you use IAM Identity Center authentication. For instructions on how to assign users to a Studio when you use IAM authentication, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-manage-users.html#emr-studio-assign-users-groups">Assign a user or group to your EMR Studio</a>.

> Body parameter

```json
{
  "StudioId": {},
  "IdentityId": {},
  "IdentityName": {},
  "IdentityType": {},
  "SessionPolicyArn": {}
}
```

<h3 id="createstudiosessionmapping-parameters">Parameters</h3>

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
|body|body|[CreateStudioSessionMappingInput](#schemacreatestudiosessionmappinginput)|true|none|
|» StudioId|body|object|true|none|
|» IdentityId|body|object|false|none|
|» IdentityName|body|object|false|none|
|» IdentityType|body|object|true|none|
|» SessionPolicyArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.CreateStudioSessionMapping|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="createstudiosessionmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSecurityConfiguration

<a id="opIdDeleteSecurityConfiguration"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.DeleteSecurityConfiguration' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration`

Deletes a security configuration.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deletesecurityconfiguration-parameters">Parameters</h3>

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
|body|body|[DeleteSecurityConfigurationInput](#schemadeletesecurityconfigurationinput)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.DeleteSecurityConfiguration|

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

<h3 id="deletesecurityconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSecurityConfigurationOutput](#schemadeletesecurityconfigurationoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStudio

<a id="opIdDeleteStudio"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.DeleteStudio' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.DeleteStudio' \
  -d '{
    "StudioId": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.DeleteStudio`

Removes an Amazon EMR Studio from the Studio metadata store.

> Body parameter

```json
{
  "StudioId": {}
}
```

<h3 id="deletestudio-parameters">Parameters</h3>

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
|body|body|[DeleteStudioInput](#schemadeletestudioinput)|true|none|
|» StudioId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.DeleteStudio|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deletestudio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStudioSessionMapping

<a id="opIdDeleteStudioSessionMapping"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.DeleteStudioSessionMapping' \
  -d '{
    "StudioId": {},
    "IdentityId": {},
    "IdentityName": {},
    "IdentityType": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping`

Removes a user or group from an Amazon EMR Studio.

> Body parameter

```json
{
  "StudioId": {},
  "IdentityId": {},
  "IdentityName": {},
  "IdentityType": {}
}
```

<h3 id="deletestudiosessionmapping-parameters">Parameters</h3>

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
|body|body|[DeleteStudioSessionMappingInput](#schemadeletestudiosessionmappinginput)|true|none|
|» StudioId|body|object|true|none|
|» IdentityId|body|object|false|none|
|» IdentityName|body|object|false|none|
|» IdentityType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.DeleteStudioSessionMapping|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deletestudiosessionmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCluster

<a id="opIdDescribeCluster"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.DescribeCluster' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.DescribeCluster' \
  -d '{
    "ClusterId": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.DescribeCluster`

Provides cluster-level details including status, hardware and software configuration, VPC settings, and so on.

> Body parameter

```json
{
  "ClusterId": {}
}
```

<h3 id="describecluster-parameters">Parameters</h3>

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
|body|body|[DescribeClusterInput](#schemadescribeclusterinput)|true|none|
|» ClusterId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.DescribeCluster|

> Example responses

> 200 Response

```json
{
  "Cluster": {
    "Id": {},
    "Name": {},
    "Status": {
      "State": {},
      "StateChangeReason": {
        "Code": {},
        "Message": {}
      },
      "Timeline": {
        "CreationDateTime": {},
        "ReadyDateTime": {},
        "EndDateTime": {}
      },
      "ErrorDetails": {}
    },
    "Ec2InstanceAttributes": {
      "Ec2KeyName": {},
      "Ec2SubnetId": {},
      "RequestedEc2SubnetIds": {},
      "Ec2AvailabilityZone": {},
      "RequestedEc2AvailabilityZones": {},
      "IamInstanceProfile": {},
      "EmrManagedMasterSecurityGroup": {},
      "EmrManagedSlaveSecurityGroup": {},
      "ServiceAccessSecurityGroup": {},
      "AdditionalMasterSecurityGroups": {},
      "AdditionalSlaveSecurityGroups": {}
    },
    "InstanceCollectionType": {},
    "LogUri": {},
    "LogEncryptionKmsKeyId": {},
    "RequestedAmiVersion": {},
    "RunningAmiVersion": {},
    "ReleaseLabel": {},
    "AutoTerminate": {},
    "TerminationProtected": {},
    "VisibleToAllUsers": {},
    "Applications": {},
    "Tags": {},
    "ServiceRole": {},
    "NormalizedInstanceHours": {},
    "MasterPublicDnsName": {},
    "Configurations": {},
    "SecurityConfiguration": {},
    "AutoScalingRole": {},
    "ScaleDownBehavior": {},
    "CustomAmiId": {},
    "EbsRootVolumeSize": {},
    "RepoUpgradeOnBoot": {},
    "KerberosAttributes": {
      "Realm": {},
      "KdcAdminPassword": {},
      "CrossRealmTrustPrincipalPassword": {},
      "ADDomainJoinUser": {},
      "ADDomainJoinPassword": {}
    },
    "ClusterArn": {},
    "OutpostArn": {},
    "StepConcurrencyLevel": {},
    "PlacementGroups": {},
    "OSReleaseLabel": {}
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

<h3 id="describecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeClusterOutput](#schemadescribeclusteroutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeJobFlows

<a id="opIdDescribeJobFlows"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.DescribeJobFlows' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.DescribeJobFlows' \
  -d '{
    "CreatedAfter": {},
    "CreatedBefore": {},
    "JobFlowIds": {},
    "JobFlowStates": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.DescribeJobFlows`

<aside class="warning">
This operation is deprecated
</aside>

<p>This API is no longer supported and will eventually be removed. We recommend you use <a>ListClusters</a>, <a>DescribeCluster</a>, <a>ListSteps</a>, <a>ListInstanceGroups</a> and <a>ListBootstrapActions</a> instead.</p> <p>DescribeJobFlows returns a list of job flows that match all of the supplied parameters. The parameters can include a list of job flow IDs, job flow states, and restrictions on job flow creation date and time.</p> <p>Regardless of supplied parameters, only job flows created within the last two months are returned.</p> <p>If no parameters are supplied, then job flows matching either of the following criteria are returned:</p> <ul> <li> <p>Job flows created and completed in the last two weeks</p> </li> <li> <p> Job flows created within the last two months that are in one of the following states: <code>RUNNING</code>, <code>WAITING</code>, <code>SHUTTING_DOWN</code>, <code>STARTING</code> </p> </li> </ul> <p>Amazon EMR can return a maximum of 512 job flow descriptions.</p>

> Body parameter

```json
{
  "CreatedAfter": {},
  "CreatedBefore": {},
  "JobFlowIds": {},
  "JobFlowStates": {}
}
```

<h3 id="describejobflows-parameters">Parameters</h3>

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
|body|body|[DescribeJobFlowsInput](#schemadescribejobflowsinput)|true|none|
|» CreatedAfter|body|object|false|none|
|» CreatedBefore|body|object|false|none|
|» JobFlowIds|body|object|false|none|
|» JobFlowStates|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.DescribeJobFlows|

> Example responses

> 200 Response

```json
{
  "JobFlows": {}
}
```

> 480 Response

```json
null
```

<h3 id="describejobflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeJobFlowsOutput](#schemadescribejobflowsoutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeNotebookExecution

<a id="opIdDescribeNotebookExecution"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.DescribeNotebookExecution' \
  -d '{
    "NotebookExecutionId": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution`

Provides details of a notebook execution.

> Body parameter

```json
{
  "NotebookExecutionId": {}
}
```

<h3 id="describenotebookexecution-parameters">Parameters</h3>

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
|body|body|[DescribeNotebookExecutionInput](#schemadescribenotebookexecutioninput)|true|none|
|» NotebookExecutionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.DescribeNotebookExecution|

> Example responses

> 200 Response

```json
{
  "NotebookExecution": {
    "NotebookExecutionId": {},
    "EditorId": {},
    "ExecutionEngine": {
      "Id": {},
      "Type": {},
      "MasterInstanceSecurityGroupId": {}
    },
    "NotebookExecutionName": {},
    "NotebookParams": {},
    "Status": {},
    "StartTime": {},
    "EndTime": {},
    "Arn": {},
    "OutputNotebookURI": {},
    "LastStateChangeReason": {},
    "NotebookInstanceSecurityGroupId": {},
    "Tags": {}
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

<h3 id="describenotebookexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeNotebookExecutionOutput](#schemadescribenotebookexecutionoutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReleaseLabel

<a id="opIdDescribeReleaseLabel"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.DescribeReleaseLabel' \
  -d '{
    "ReleaseLabel": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel`

Provides EMR release label details, such as releases available the region where the API request is run, and the available applications for a specific EMR release label. Can also list EMR release versions that support a specified version of Spark.

> Body parameter

```json
{
  "ReleaseLabel": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describereleaselabel-parameters">Parameters</h3>

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
|body|body|[DescribeReleaseLabelInput](#schemadescribereleaselabelinput)|true|none|
|» ReleaseLabel|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.DescribeReleaseLabel|

> Example responses

> 200 Response

```json
{
  "ReleaseLabel": {},
  "Applications": {},
  "NextToken": {},
  "AvailableOSReleases": {}
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

<h3 id="describereleaselabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReleaseLabelOutput](#schemadescribereleaselabeloutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSecurityConfiguration

<a id="opIdDescribeSecurityConfiguration"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.DescribeSecurityConfiguration' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration`

Provides the details of a security configuration by returning the configuration JSON.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="describesecurityconfiguration-parameters">Parameters</h3>

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
|body|body|[DescribeSecurityConfigurationInput](#schemadescribesecurityconfigurationinput)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.DescribeSecurityConfiguration|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "SecurityConfiguration": {},
  "CreationDateTime": {}
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

<h3 id="describesecurityconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSecurityConfigurationOutput](#schemadescribesecurityconfigurationoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeStep

<a id="opIdDescribeStep"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.DescribeStep' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.DescribeStep' \
  -d '{
    "ClusterId": {},
    "StepId": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.DescribeStep`

Provides more detail about the cluster step.

> Body parameter

```json
{
  "ClusterId": {},
  "StepId": {}
}
```

<h3 id="describestep-parameters">Parameters</h3>

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
|body|body|[DescribeStepInput](#schemadescribestepinput)|true|none|
|» ClusterId|body|object|true|none|
|» StepId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.DescribeStep|

> Example responses

> 200 Response

```json
{
  "Step": {
    "Id": {},
    "Name": {},
    "Config": {
      "Jar": {},
      "Properties": {
        "property1": "string",
        "property2": "string"
      },
      "MainClass": {},
      "Args": {}
    },
    "ActionOnFailure": {},
    "Status": {
      "State": {},
      "StateChangeReason": {
        "Code": {},
        "Message": {}
      },
      "FailureDetails": {
        "Reason": {},
        "Message": {},
        "LogFile": {}
      },
      "Timeline": {
        "CreationDateTime": {},
        "StartDateTime": {},
        "EndDateTime": {}
      }
    },
    "ExecutionRoleArn": {}
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

<h3 id="describestep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStepOutput](#schemadescribestepoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeStudio

<a id="opIdDescribeStudio"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.DescribeStudio' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.DescribeStudio' \
  -d '{
    "StudioId": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.DescribeStudio`

Returns details for the specified Amazon EMR Studio including ID, Name, VPC, Studio access URL, and so on.

> Body parameter

```json
{
  "StudioId": {}
}
```

<h3 id="describestudio-parameters">Parameters</h3>

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
|body|body|[DescribeStudioInput](#schemadescribestudioinput)|true|none|
|» StudioId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.DescribeStudio|

> Example responses

> 200 Response

```json
{
  "Studio": {
    "StudioId": {},
    "StudioArn": {},
    "Name": {},
    "Description": {},
    "AuthMode": {},
    "VpcId": {},
    "SubnetIds": {},
    "ServiceRole": {},
    "UserRole": {},
    "WorkspaceSecurityGroupId": {},
    "EngineSecurityGroupId": {},
    "Url": {},
    "CreationTime": {},
    "DefaultS3Location": {},
    "IdpAuthUrl": {},
    "IdpRelayStateParameterName": {},
    "Tags": {}
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

<h3 id="describestudio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStudioOutput](#schemadescribestudiooutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAutoTerminationPolicy

<a id="opIdGetAutoTerminationPolicy"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.GetAutoTerminationPolicy' \
  -d '{
    "ClusterId": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy`

Returns the auto-termination policy for an Amazon EMR cluster.

> Body parameter

```json
{
  "ClusterId": {}
}
```

<h3 id="getautoterminationpolicy-parameters">Parameters</h3>

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
|body|body|[GetAutoTerminationPolicyInput](#schemagetautoterminationpolicyinput)|true|none|
|» ClusterId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.GetAutoTerminationPolicy|

> Example responses

> 200 Response

```json
{
  "AutoTerminationPolicy": {
    "IdleTimeout": {}
  }
}
```

<h3 id="getautoterminationpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAutoTerminationPolicyOutput](#schemagetautoterminationpolicyoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBlockPublicAccessConfiguration

<a id="opIdGetBlockPublicAccessConfiguration"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.GetBlockPublicAccessConfiguration' \
  -d '{}'
```

`POST /#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration`

Returns the Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.

> Body parameter

```json
{}
```

<h3 id="getblockpublicaccessconfiguration-parameters">Parameters</h3>

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
|body|body|[GetBlockPublicAccessConfigurationInput](#schemagetblockpublicaccessconfigurationinput)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.GetBlockPublicAccessConfiguration|

> Example responses

> 200 Response

```json
{
  "BlockPublicAccessConfiguration": {
    "BlockPublicSecurityGroupRules": {},
    "PermittedPublicSecurityGroupRuleRanges": {}
  },
  "BlockPublicAccessConfigurationMetadata": {
    "CreationDateTime": {},
    "CreatedByArn": {}
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

<h3 id="getblockpublicaccessconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBlockPublicAccessConfigurationOutput](#schemagetblockpublicaccessconfigurationoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetClusterSessionCredentials

<a id="opIdGetClusterSessionCredentials"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.GetClusterSessionCredentials' \
  -d '{
    "ClusterId": {},
    "ExecutionRoleArn": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials`

Provides temporary, HTTP basic credentials that are associated with a given runtime IAM role and used by a cluster with fine-grained access control activated. You can use these credentials to connect to cluster endpoints that support username and password authentication.

> Body parameter

```json
{
  "ClusterId": {},
  "ExecutionRoleArn": {}
}
```

<h3 id="getclustersessioncredentials-parameters">Parameters</h3>

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
|body|body|[GetClusterSessionCredentialsInput](#schemagetclustersessioncredentialsinput)|true|none|
|» ClusterId|body|object|true|none|
|» ExecutionRoleArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.GetClusterSessionCredentials|

> Example responses

> 200 Response

```json
{
  "Credentials": {
    "UsernamePassword": {
      "Username": {},
      "Password": {}
    }
  },
  "ExpiresAt": {}
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

<h3 id="getclustersessioncredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetClusterSessionCredentialsOutput](#schemagetclustersessioncredentialsoutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetManagedScalingPolicy

<a id="opIdGetManagedScalingPolicy"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.GetManagedScalingPolicy' \
  -d '{
    "ClusterId": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy`

Fetches the attached managed scaling policy for an Amazon EMR cluster. 

> Body parameter

```json
{
  "ClusterId": {}
}
```

<h3 id="getmanagedscalingpolicy-parameters">Parameters</h3>

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
|body|body|[GetManagedScalingPolicyInput](#schemagetmanagedscalingpolicyinput)|true|none|
|» ClusterId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.GetManagedScalingPolicy|

> Example responses

> 200 Response

```json
{
  "ManagedScalingPolicy": {
    "ComputeLimits": {
      "UnitType": {},
      "MinimumCapacityUnits": {},
      "MaximumCapacityUnits": {},
      "MaximumOnDemandCapacityUnits": {},
      "MaximumCoreCapacityUnits": {}
    }
  }
}
```

<h3 id="getmanagedscalingpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetManagedScalingPolicyOutput](#schemagetmanagedscalingpolicyoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStudioSessionMapping

<a id="opIdGetStudioSessionMapping"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.GetStudioSessionMapping' \
  -d '{
    "StudioId": {},
    "IdentityId": {},
    "IdentityName": {},
    "IdentityType": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping`

Fetches mapping details for the specified Amazon EMR Studio and identity (user or group).

> Body parameter

```json
{
  "StudioId": {},
  "IdentityId": {},
  "IdentityName": {},
  "IdentityType": {}
}
```

<h3 id="getstudiosessionmapping-parameters">Parameters</h3>

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
|body|body|[GetStudioSessionMappingInput](#schemagetstudiosessionmappinginput)|true|none|
|» StudioId|body|object|true|none|
|» IdentityId|body|object|false|none|
|» IdentityName|body|object|false|none|
|» IdentityType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.GetStudioSessionMapping|

> Example responses

> 200 Response

```json
{
  "SessionMapping": {
    "StudioId": {},
    "IdentityId": {},
    "IdentityName": {},
    "IdentityType": {},
    "SessionPolicyArn": {},
    "CreationTime": {},
    "LastModifiedTime": {}
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

<h3 id="getstudiosessionmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStudioSessionMappingOutput](#schemagetstudiosessionmappingoutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBootstrapActions

<a id="opIdListBootstrapActions"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.ListBootstrapActions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.ListBootstrapActions' \
  -d '{
    "ClusterId": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.ListBootstrapActions`

Provides information about the bootstrap actions associated with a cluster.

> Body parameter

```json
{
  "ClusterId": {},
  "Marker": {}
}
```

<h3 id="listbootstrapactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListBootstrapActionsInput](#schemalistbootstrapactionsinput)|true|none|
|» ClusterId|body|object|true|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.ListBootstrapActions|

> Example responses

> 200 Response

```json
{
  "BootstrapActions": {},
  "Marker": {}
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

<h3 id="listbootstrapactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBootstrapActionsOutput](#schemalistbootstrapactionsoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListClusters

<a id="opIdListClusters"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.ListClusters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.ListClusters' \
  -d '{
    "CreatedAfter": {},
    "CreatedBefore": {},
    "ClusterStates": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.ListClusters`

Provides the status of all clusters visible to this Amazon Web Services account. Allows you to filter the list of clusters based on certain criteria; for example, filtering by cluster creation date and time or by status. This call returns a maximum of 50 clusters in unsorted order per call, but returns a marker to track the paging of the cluster list across multiple ListClusters calls.

> Body parameter

```json
{
  "CreatedAfter": {},
  "CreatedBefore": {},
  "ClusterStates": {},
  "Marker": {}
}
```

<h3 id="listclusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListClustersInput](#schemalistclustersinput)|true|none|
|» CreatedAfter|body|object|false|none|
|» CreatedBefore|body|object|false|none|
|» ClusterStates|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.ListClusters|

> Example responses

> 200 Response

```json
{
  "Clusters": {},
  "Marker": {}
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

<h3 id="listclusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListClustersOutput](#schemalistclustersoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInstanceFleets

<a id="opIdListInstanceFleets"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.ListInstanceFleets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.ListInstanceFleets' \
  -d '{
    "ClusterId": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.ListInstanceFleets`

<p>Lists all available details about the instance fleets in a cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>

> Body parameter

```json
{
  "ClusterId": {},
  "Marker": {}
}
```

<h3 id="listinstancefleets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListInstanceFleetsInput](#schemalistinstancefleetsinput)|true|none|
|» ClusterId|body|object|true|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.ListInstanceFleets|

> Example responses

> 200 Response

```json
{
  "InstanceFleets": {},
  "Marker": {}
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

<h3 id="listinstancefleets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInstanceFleetsOutput](#schemalistinstancefleetsoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInstanceGroups

<a id="opIdListInstanceGroups"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.ListInstanceGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.ListInstanceGroups' \
  -d '{
    "ClusterId": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.ListInstanceGroups`

Provides all available details about the instance groups in a cluster.

> Body parameter

```json
{
  "ClusterId": {},
  "Marker": {}
}
```

<h3 id="listinstancegroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListInstanceGroupsInput](#schemalistinstancegroupsinput)|true|none|
|» ClusterId|body|object|true|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.ListInstanceGroups|

> Example responses

> 200 Response

```json
{
  "InstanceGroups": {},
  "Marker": {}
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

<h3 id="listinstancegroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInstanceGroupsOutput](#schemalistinstancegroupsoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInstances

<a id="opIdListInstances"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.ListInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.ListInstances' \
  -d '{
    "ClusterId": {},
    "InstanceGroupId": {},
    "InstanceGroupTypes": {},
    "InstanceFleetId": {},
    "InstanceFleetType": {},
    "InstanceStates": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.ListInstances`

Provides information for all active EC2 instances and EC2 instances terminated in the last 30 days, up to a maximum of 2,000. EC2 instances in any of the following states are considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.

> Body parameter

```json
{
  "ClusterId": {},
  "InstanceGroupId": {},
  "InstanceGroupTypes": {},
  "InstanceFleetId": {},
  "InstanceFleetType": {},
  "InstanceStates": {},
  "Marker": {}
}
```

<h3 id="listinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListInstancesInput](#schemalistinstancesinput)|true|none|
|» ClusterId|body|object|true|none|
|» InstanceGroupId|body|object|false|none|
|» InstanceGroupTypes|body|object|false|none|
|» InstanceFleetId|body|object|false|none|
|» InstanceFleetType|body|object|false|none|
|» InstanceStates|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.ListInstances|

> Example responses

> 200 Response

```json
{
  "Instances": {},
  "Marker": {}
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

<h3 id="listinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInstancesOutput](#schemalistinstancesoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListNotebookExecutions

<a id="opIdListNotebookExecutions"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.ListNotebookExecutions' \
  -d '{
    "EditorId": {},
    "Status": {},
    "From": {},
    "To": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions`

Provides summaries of all notebook executions. You can filter the list based on multiple criteria such as status, time range, and editor id. Returns a maximum of 50 notebook executions and a marker to track the paging of a longer notebook execution list across multiple <code>ListNotebookExecution</code> calls.

> Body parameter

```json
{
  "EditorId": {},
  "Status": {},
  "From": {},
  "To": {},
  "Marker": {}
}
```

<h3 id="listnotebookexecutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListNotebookExecutionsInput](#schemalistnotebookexecutionsinput)|true|none|
|» EditorId|body|object|false|none|
|» Status|body|object|false|none|
|» From|body|object|false|none|
|» To|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.ListNotebookExecutions|

> Example responses

> 200 Response

```json
{
  "NotebookExecutions": {},
  "Marker": {}
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

<h3 id="listnotebookexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListNotebookExecutionsOutput](#schemalistnotebookexecutionsoutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReleaseLabels

<a id="opIdListReleaseLabels"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.ListReleaseLabels' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.ListReleaseLabels' \
  -d '{
    "Filters": {
      "Prefix": {},
      "Application": {}
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.ListReleaseLabels`

Retrieves release labels of EMR services in the region where the API is called.

> Body parameter

```json
{
  "Filters": {
    "Prefix": {},
    "Application": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listreleaselabels-parameters">Parameters</h3>

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
|body|body|[ListReleaseLabelsInput](#schemalistreleaselabelsinput)|true|none|
|» Filters|body|object|false|none|
|» » Prefix|body|object|false|none|
|» » Application|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.ListReleaseLabels|

> Example responses

> 200 Response

```json
{
  "ReleaseLabels": {},
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

<h3 id="listreleaselabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReleaseLabelsOutput](#schemalistreleaselabelsoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSecurityConfigurations

<a id="opIdListSecurityConfigurations"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.ListSecurityConfigurations' \
  -d '{
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations`

Lists all the security configurations visible to this account, providing their creation dates and times, and their names. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListSecurityConfigurations calls.

> Body parameter

```json
{
  "Marker": {}
}
```

<h3 id="listsecurityconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListSecurityConfigurationsInput](#schemalistsecurityconfigurationsinput)|true|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.ListSecurityConfigurations|

> Example responses

> 200 Response

```json
{
  "SecurityConfigurations": {},
  "Marker": {}
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

<h3 id="listsecurityconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSecurityConfigurationsOutput](#schemalistsecurityconfigurationsoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSteps

<a id="opIdListSteps"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.ListSteps' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.ListSteps' \
  -d '{
    "ClusterId": {},
    "StepStates": {},
    "StepIds": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.ListSteps`

Provides a list of steps for the cluster in reverse order unless you specify <code>stepIds</code> with the request or filter by <code>StepStates</code>. You can specify a maximum of 10 <code>stepIDs</code>. The CLI automatically paginates results to return a list greater than 50 steps. To return more than 50 steps using the CLI, specify a <code>Marker</code>, which is a pagination token that indicates the next set of steps to retrieve.

> Body parameter

```json
{
  "ClusterId": {},
  "StepStates": {},
  "StepIds": {},
  "Marker": {}
}
```

<h3 id="liststeps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListStepsInput](#schemaliststepsinput)|true|none|
|» ClusterId|body|object|true|none|
|» StepStates|body|object|false|none|
|» StepIds|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.ListSteps|

> Example responses

> 200 Response

```json
{
  "Steps": {},
  "Marker": {}
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

<h3 id="liststeps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStepsOutput](#schemaliststepsoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStudioSessionMappings

<a id="opIdListStudioSessionMappings"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.ListStudioSessionMappings' \
  -d '{
    "StudioId": {},
    "IdentityType": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings`

Returns a list of all user or group session mappings for the Amazon EMR Studio specified by <code>StudioId</code>.

> Body parameter

```json
{
  "StudioId": {},
  "IdentityType": {},
  "Marker": {}
}
```

<h3 id="liststudiosessionmappings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListStudioSessionMappingsInput](#schemaliststudiosessionmappingsinput)|true|none|
|» StudioId|body|object|false|none|
|» IdentityType|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.ListStudioSessionMappings|

> Example responses

> 200 Response

```json
{
  "SessionMappings": {},
  "Marker": {}
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

<h3 id="liststudiosessionmappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStudioSessionMappingsOutput](#schemaliststudiosessionmappingsoutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStudios

<a id="opIdListStudios"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.ListStudios' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.ListStudios' \
  -d '{
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.ListStudios`

Returns a list of all Amazon EMR Studios associated with the Amazon Web Services account. The list includes details such as ID, Studio Access URL, and creation time for each Studio.

> Body parameter

```json
{
  "Marker": {}
}
```

<h3 id="liststudios-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListStudiosInput](#schemaliststudiosinput)|true|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.ListStudios|

> Example responses

> 200 Response

```json
{
  "Studios": {},
  "Marker": {}
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

<h3 id="liststudios-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStudiosOutput](#schemaliststudiosoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyCluster

<a id="opIdModifyCluster"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.ModifyCluster' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.ModifyCluster' \
  -d '{
    "ClusterId": {},
    "StepConcurrencyLevel": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.ModifyCluster`

Modifies the number of steps that can be executed concurrently for the cluster specified using ClusterID.

> Body parameter

```json
{
  "ClusterId": {},
  "StepConcurrencyLevel": {}
}
```

<h3 id="modifycluster-parameters">Parameters</h3>

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
|body|body|[ModifyClusterInput](#schemamodifyclusterinput)|true|none|
|» ClusterId|body|object|true|none|
|» StepConcurrencyLevel|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.ModifyCluster|

> Example responses

> 200 Response

```json
{
  "StepConcurrencyLevel": {}
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

<h3 id="modifycluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyClusterOutput](#schemamodifyclusteroutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyInstanceFleet

<a id="opIdModifyInstanceFleet"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.ModifyInstanceFleet' \
  -d '{
    "ClusterId": {},
    "InstanceFleet": {
      "InstanceFleetId": {},
      "TargetOnDemandCapacity": {},
      "TargetSpotCapacity": {},
      "ResizeSpecifications": {
        "SpotResizeSpecification": {
          "TimeoutDurationMinutes": {}
        },
        "OnDemandResizeSpecification": {
          "TimeoutDurationMinutes": {}
        }
      }
    }
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet`

<p>Modifies the target On-Demand and target Spot capacities for the instance fleet with the specified InstanceFleetID within the cluster specified using ClusterID. The call either succeeds or fails atomically.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>

> Body parameter

```json
{
  "ClusterId": {},
  "InstanceFleet": {
    "InstanceFleetId": {},
    "TargetOnDemandCapacity": {},
    "TargetSpotCapacity": {},
    "ResizeSpecifications": {
      "SpotResizeSpecification": {
        "TimeoutDurationMinutes": {}
      },
      "OnDemandResizeSpecification": {
        "TimeoutDurationMinutes": {}
      }
    }
  }
}
```

<h3 id="modifyinstancefleet-parameters">Parameters</h3>

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
|body|body|[ModifyInstanceFleetInput](#schemamodifyinstancefleetinput)|true|none|
|» ClusterId|body|object|true|none|
|» InstanceFleet|body|object|true|none|
|» » InstanceFleetId|body|object|true|none|
|» » TargetOnDemandCapacity|body|object|false|none|
|» » TargetSpotCapacity|body|object|false|none|
|» » ResizeSpecifications|body|object|false|none|
|» » » SpotResizeSpecification|body|object|false|none|
|» » » » TimeoutDurationMinutes|body|object|true|none|
|» » » OnDemandResizeSpecification|body|object|false|none|
|» » » » TimeoutDurationMinutes|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.ModifyInstanceFleet|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="modifyinstancefleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyInstanceGroups

<a id="opIdModifyInstanceGroups"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.ModifyInstanceGroups' \
  -d '{
    "ClusterId": {},
    "InstanceGroups": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups`

ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance group. The input parameters include the new target instance count for the group and the instance group ID. The call will either succeed or fail atomically.

> Body parameter

```json
{
  "ClusterId": {},
  "InstanceGroups": {}
}
```

<h3 id="modifyinstancegroups-parameters">Parameters</h3>

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
|body|body|[ModifyInstanceGroupsInput](#schemamodifyinstancegroupsinput)|true|none|
|» ClusterId|body|object|false|none|
|» InstanceGroups|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.ModifyInstanceGroups|

> Example responses

> 480 Response

```json
null
```

<h3 id="modifyinstancegroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAutoScalingPolicy

<a id="opIdPutAutoScalingPolicy"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.PutAutoScalingPolicy' \
  -d '{
    "ClusterId": {},
    "InstanceGroupId": {},
    "AutoScalingPolicy": {
      "Constraints": {
        "MinCapacity": {},
        "MaxCapacity": {}
      },
      "Rules": {}
    }
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy`

Creates or updates an automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric.

> Body parameter

```json
{
  "ClusterId": {},
  "InstanceGroupId": {},
  "AutoScalingPolicy": {
    "Constraints": {
      "MinCapacity": {},
      "MaxCapacity": {}
    },
    "Rules": {}
  }
}
```

<h3 id="putautoscalingpolicy-parameters">Parameters</h3>

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
|body|body|[PutAutoScalingPolicyInput](#schemaputautoscalingpolicyinput)|true|none|
|» ClusterId|body|object|true|none|
|» InstanceGroupId|body|object|true|none|
|» AutoScalingPolicy|body|object|true|none|
|» » Constraints|body|object|true|none|
|» » » MinCapacity|body|object|true|none|
|» » » MaxCapacity|body|object|true|none|
|» » Rules|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.PutAutoScalingPolicy|

> Example responses

> 200 Response

```json
{
  "ClusterId": {},
  "InstanceGroupId": {},
  "AutoScalingPolicy": {
    "Status": {
      "State": {},
      "StateChangeReason": {
        "Code": {},
        "Message": {}
      }
    },
    "Constraints": {
      "MinCapacity": {},
      "MaxCapacity": {}
    },
    "Rules": {}
  },
  "ClusterArn": {}
}
```

<h3 id="putautoscalingpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAutoScalingPolicyOutput](#schemaputautoscalingpolicyoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAutoTerminationPolicy

<a id="opIdPutAutoTerminationPolicy"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.PutAutoTerminationPolicy' \
  -d '{
    "ClusterId": {},
    "AutoTerminationPolicy": {
      "IdleTimeout": {}
    }
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy`

<note> <p>Auto-termination is supported in Amazon EMR versions 5.30.0 and 6.1.0 and later. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-auto-termination-policy.html">Using an auto-termination policy</a>.</p> </note> <p>Creates or updates an auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.</p>

> Body parameter

```json
{
  "ClusterId": {},
  "AutoTerminationPolicy": {
    "IdleTimeout": {}
  }
}
```

<h3 id="putautoterminationpolicy-parameters">Parameters</h3>

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
|body|body|[PutAutoTerminationPolicyInput](#schemaputautoterminationpolicyinput)|true|none|
|» ClusterId|body|object|true|none|
|» AutoTerminationPolicy|body|object|false|none|
|» » IdleTimeout|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.PutAutoTerminationPolicy|

> Example responses

> 200 Response

```json
{}
```

<h3 id="putautoterminationpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAutoTerminationPolicyOutput](#schemaputautoterminationpolicyoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBlockPublicAccessConfiguration

<a id="opIdPutBlockPublicAccessConfiguration"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.PutBlockPublicAccessConfiguration' \
  -d '{
    "BlockPublicAccessConfiguration": {
      "BlockPublicSecurityGroupRules": {},
      "PermittedPublicSecurityGroupRuleRanges": {}
    }
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration`

Creates or updates an Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.

> Body parameter

```json
{
  "BlockPublicAccessConfiguration": {
    "BlockPublicSecurityGroupRules": {},
    "PermittedPublicSecurityGroupRuleRanges": {}
  }
}
```

<h3 id="putblockpublicaccessconfiguration-parameters">Parameters</h3>

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
|body|body|[PutBlockPublicAccessConfigurationInput](#schemaputblockpublicaccessconfigurationinput)|true|none|
|» BlockPublicAccessConfiguration|body|object|true|none|
|» » BlockPublicSecurityGroupRules|body|object|true|none|
|» » PermittedPublicSecurityGroupRuleRanges|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.PutBlockPublicAccessConfiguration|

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

<h3 id="putblockpublicaccessconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutBlockPublicAccessConfigurationOutput](#schemaputblockpublicaccessconfigurationoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutManagedScalingPolicy

<a id="opIdPutManagedScalingPolicy"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.PutManagedScalingPolicy' \
  -d '{
    "ClusterId": {},
    "ManagedScalingPolicy": {
      "ComputeLimits": {
        "UnitType": {},
        "MinimumCapacityUnits": {},
        "MaximumCapacityUnits": {},
        "MaximumOnDemandCapacityUnits": {},
        "MaximumCoreCapacityUnits": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy`

Creates or updates a managed scaling policy for an Amazon EMR cluster. The managed scaling policy defines the limits for resources, such as EC2 instances that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration. 

> Body parameter

```json
{
  "ClusterId": {},
  "ManagedScalingPolicy": {
    "ComputeLimits": {
      "UnitType": {},
      "MinimumCapacityUnits": {},
      "MaximumCapacityUnits": {},
      "MaximumOnDemandCapacityUnits": {},
      "MaximumCoreCapacityUnits": {}
    }
  }
}
```

<h3 id="putmanagedscalingpolicy-parameters">Parameters</h3>

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
|body|body|[PutManagedScalingPolicyInput](#schemaputmanagedscalingpolicyinput)|true|none|
|» ClusterId|body|object|true|none|
|» ManagedScalingPolicy|body|object|true|none|
|» » ComputeLimits|body|object|false|none|
|» » » UnitType|body|object|true|none|
|» » » MinimumCapacityUnits|body|object|true|none|
|» » » MaximumCapacityUnits|body|object|true|none|
|» » » MaximumOnDemandCapacityUnits|body|object|false|none|
|» » » MaximumCoreCapacityUnits|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.PutManagedScalingPolicy|

> Example responses

> 200 Response

```json
{}
```

<h3 id="putmanagedscalingpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutManagedScalingPolicyOutput](#schemaputmanagedscalingpolicyoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveAutoScalingPolicy

<a id="opIdRemoveAutoScalingPolicy"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.RemoveAutoScalingPolicy' \
  -d '{
    "ClusterId": {},
    "InstanceGroupId": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy`

Removes an automatic scaling policy from a specified instance group within an EMR cluster.

> Body parameter

```json
{
  "ClusterId": {},
  "InstanceGroupId": {}
}
```

<h3 id="removeautoscalingpolicy-parameters">Parameters</h3>

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
|body|body|[RemoveAutoScalingPolicyInput](#schemaremoveautoscalingpolicyinput)|true|none|
|» ClusterId|body|object|true|none|
|» InstanceGroupId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.RemoveAutoScalingPolicy|

> Example responses

> 200 Response

```json
{}
```

<h3 id="removeautoscalingpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveAutoScalingPolicyOutput](#schemaremoveautoscalingpolicyoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveAutoTerminationPolicy

<a id="opIdRemoveAutoTerminationPolicy"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.RemoveAutoTerminationPolicy' \
  -d '{
    "ClusterId": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy`

Removes an auto-termination policy from an Amazon EMR cluster.

> Body parameter

```json
{
  "ClusterId": {}
}
```

<h3 id="removeautoterminationpolicy-parameters">Parameters</h3>

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
|body|body|[RemoveAutoTerminationPolicyInput](#schemaremoveautoterminationpolicyinput)|true|none|
|» ClusterId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.RemoveAutoTerminationPolicy|

> Example responses

> 200 Response

```json
{}
```

<h3 id="removeautoterminationpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveAutoTerminationPolicyOutput](#schemaremoveautoterminationpolicyoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveManagedScalingPolicy

<a id="opIdRemoveManagedScalingPolicy"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.RemoveManagedScalingPolicy' \
  -d '{
    "ClusterId": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy`

 Removes a managed scaling policy from a specified EMR cluster. 

> Body parameter

```json
{
  "ClusterId": {}
}
```

<h3 id="removemanagedscalingpolicy-parameters">Parameters</h3>

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
|body|body|[RemoveManagedScalingPolicyInput](#schemaremovemanagedscalingpolicyinput)|true|none|
|» ClusterId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.RemoveManagedScalingPolicy|

> Example responses

> 200 Response

```json
{}
```

<h3 id="removemanagedscalingpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveManagedScalingPolicyOutput](#schemaremovemanagedscalingpolicyoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveTags

<a id="opIdRemoveTags"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.RemoveTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.RemoveTags' \
  -d '{
    "ResourceId": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.RemoveTags`

<p>Removes tags from an Amazon EMR resource, such as a cluster or Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. </p> <p>The following example removes the stack tag with value Prod from a cluster:</p>

> Body parameter

```json
{
  "ResourceId": {},
  "TagKeys": {}
}
```

<h3 id="removetags-parameters">Parameters</h3>

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
|body|body|[RemoveTagsInput](#schemaremovetagsinput)|true|none|
|» ResourceId|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.RemoveTags|

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

<h3 id="removetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveTagsOutput](#schemaremovetagsoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RunJobFlow

<a id="opIdRunJobFlow"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.RunJobFlow' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.RunJobFlow' \
  -d '{
    "Name": {},
    "LogUri": {},
    "LogEncryptionKmsKeyId": {},
    "AdditionalInfo": {},
    "AmiVersion": {},
    "ReleaseLabel": {},
    "Instances": {
      "MasterInstanceType": {},
      "SlaveInstanceType": {},
      "InstanceCount": {},
      "InstanceGroups": {},
      "InstanceFleets": {},
      "Ec2KeyName": {},
      "Placement": {
        "AvailabilityZone": {},
        "AvailabilityZones": {}
      },
      "KeepJobFlowAliveWhenNoSteps": {},
      "TerminationProtected": {},
      "HadoopVersion": {},
      "Ec2SubnetId": {},
      "Ec2SubnetIds": {},
      "EmrManagedMasterSecurityGroup": {},
      "EmrManagedSlaveSecurityGroup": {},
      "ServiceAccessSecurityGroup": {},
      "AdditionalMasterSecurityGroups": {},
      "AdditionalSlaveSecurityGroups": {}
    },
    "Steps": {},
    "BootstrapActions": {},
    "SupportedProducts": {},
    "NewSupportedProducts": {},
    "Applications": {},
    "Configurations": {},
    "VisibleToAllUsers": {},
    "JobFlowRole": {},
    "ServiceRole": {},
    "Tags": {},
    "SecurityConfiguration": {},
    "AutoScalingRole": {},
    "ScaleDownBehavior": {},
    "CustomAmiId": {},
    "EbsRootVolumeSize": {},
    "RepoUpgradeOnBoot": {},
    "KerberosAttributes": {
      "Realm": {},
      "KdcAdminPassword": {},
      "CrossRealmTrustPrincipalPassword": {},
      "ADDomainJoinUser": {},
      "ADDomainJoinPassword": {}
    },
    "StepConcurrencyLevel": {},
    "ManagedScalingPolicy": {
      "ComputeLimits": {
        "UnitType": {},
        "MinimumCapacityUnits": {},
        "MaximumCapacityUnits": {},
        "MaximumOnDemandCapacityUnits": {},
        "MaximumCoreCapacityUnits": {}
      }
    },
    "PlacementGroupConfigs": {},
    "AutoTerminationPolicy": {
      "IdleTimeout": {}
    },
    "OSReleaseLabel": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.RunJobFlow`

<p>RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the steps specified. After the steps complete, the cluster stops and the HDFS partition is lost. To prevent loss of data, configure the last step of the job flow to store results in Amazon S3. If the <a>JobFlowInstancesConfig</a> <code>KeepJobFlowAliveWhenNoSteps</code> parameter is set to <code>TRUE</code>, the cluster transitions to the WAITING state rather than shutting down after the steps have completed. </p> <p>For additional protection, you can set the <a>JobFlowInstancesConfig</a> <code>TerminationProtected</code> parameter to <code>TRUE</code> to lock the cluster and prevent it from being terminated by API call, user intervention, or in the event of a job flow error.</p> <p>A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using the SSH shell to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop.</p> <p>For long-running clusters, we recommend that you periodically store your results.</p> <note> <p>The instance fleets configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. The RunJobFlow request can contain InstanceFleets parameters or InstanceGroups parameters, but not both.</p> </note>

> Body parameter

```json
{
  "Name": {},
  "LogUri": {},
  "LogEncryptionKmsKeyId": {},
  "AdditionalInfo": {},
  "AmiVersion": {},
  "ReleaseLabel": {},
  "Instances": {
    "MasterInstanceType": {},
    "SlaveInstanceType": {},
    "InstanceCount": {},
    "InstanceGroups": {},
    "InstanceFleets": {},
    "Ec2KeyName": {},
    "Placement": {
      "AvailabilityZone": {},
      "AvailabilityZones": {}
    },
    "KeepJobFlowAliveWhenNoSteps": {},
    "TerminationProtected": {},
    "HadoopVersion": {},
    "Ec2SubnetId": {},
    "Ec2SubnetIds": {},
    "EmrManagedMasterSecurityGroup": {},
    "EmrManagedSlaveSecurityGroup": {},
    "ServiceAccessSecurityGroup": {},
    "AdditionalMasterSecurityGroups": {},
    "AdditionalSlaveSecurityGroups": {}
  },
  "Steps": {},
  "BootstrapActions": {},
  "SupportedProducts": {},
  "NewSupportedProducts": {},
  "Applications": {},
  "Configurations": {},
  "VisibleToAllUsers": {},
  "JobFlowRole": {},
  "ServiceRole": {},
  "Tags": {},
  "SecurityConfiguration": {},
  "AutoScalingRole": {},
  "ScaleDownBehavior": {},
  "CustomAmiId": {},
  "EbsRootVolumeSize": {},
  "RepoUpgradeOnBoot": {},
  "KerberosAttributes": {
    "Realm": {},
    "KdcAdminPassword": {},
    "CrossRealmTrustPrincipalPassword": {},
    "ADDomainJoinUser": {},
    "ADDomainJoinPassword": {}
  },
  "StepConcurrencyLevel": {},
  "ManagedScalingPolicy": {
    "ComputeLimits": {
      "UnitType": {},
      "MinimumCapacityUnits": {},
      "MaximumCapacityUnits": {},
      "MaximumOnDemandCapacityUnits": {},
      "MaximumCoreCapacityUnits": {}
    }
  },
  "PlacementGroupConfigs": {},
  "AutoTerminationPolicy": {
    "IdleTimeout": {}
  },
  "OSReleaseLabel": {}
}
```

<h3 id="runjobflow-parameters">Parameters</h3>

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
|body|body|[RunJobFlowInput](#schemarunjobflowinput)|true|none|
|» Name|body|object|true|none|
|» LogUri|body|object|false|none|
|» LogEncryptionKmsKeyId|body|object|false|none|
|» AdditionalInfo|body|object|false|none|
|» AmiVersion|body|object|false|none|
|» ReleaseLabel|body|object|false|none|
|» Instances|body|object|true|none|
|» » MasterInstanceType|body|object|false|none|
|» » SlaveInstanceType|body|object|false|none|
|» » InstanceCount|body|object|false|none|
|» » InstanceGroups|body|object|false|none|
|» » InstanceFleets|body|object|false|none|
|» » Ec2KeyName|body|object|false|none|
|» » Placement|body|object|false|none|
|» » » AvailabilityZone|body|object|false|none|
|» » » AvailabilityZones|body|object|false|none|
|» » KeepJobFlowAliveWhenNoSteps|body|object|false|none|
|» » TerminationProtected|body|object|false|none|
|» » HadoopVersion|body|object|false|none|
|» » Ec2SubnetId|body|object|false|none|
|» » Ec2SubnetIds|body|object|false|none|
|» » EmrManagedMasterSecurityGroup|body|object|false|none|
|» » EmrManagedSlaveSecurityGroup|body|object|false|none|
|» » ServiceAccessSecurityGroup|body|object|false|none|
|» » AdditionalMasterSecurityGroups|body|object|false|none|
|» » AdditionalSlaveSecurityGroups|body|object|false|none|
|» Steps|body|object|false|none|
|» BootstrapActions|body|object|false|none|
|» SupportedProducts|body|object|false|none|
|» NewSupportedProducts|body|object|false|none|
|» Applications|body|object|false|none|
|» Configurations|body|object|false|none|
|» VisibleToAllUsers|body|object|false|none|
|» JobFlowRole|body|object|false|none|
|» ServiceRole|body|object|false|none|
|» Tags|body|object|false|none|
|» SecurityConfiguration|body|object|false|none|
|» AutoScalingRole|body|object|false|none|
|» ScaleDownBehavior|body|object|false|none|
|» CustomAmiId|body|object|false|none|
|» EbsRootVolumeSize|body|object|false|none|
|» RepoUpgradeOnBoot|body|object|false|none|
|» KerberosAttributes|body|object|false|none|
|» » Realm|body|object|true|none|
|» » KdcAdminPassword|body|object|true|none|
|» » CrossRealmTrustPrincipalPassword|body|object|false|none|
|» » ADDomainJoinUser|body|object|false|none|
|» » ADDomainJoinPassword|body|object|false|none|
|» StepConcurrencyLevel|body|object|false|none|
|» ManagedScalingPolicy|body|object|false|none|
|» » ComputeLimits|body|object|false|none|
|» » » UnitType|body|object|true|none|
|» » » MinimumCapacityUnits|body|object|true|none|
|» » » MaximumCapacityUnits|body|object|true|none|
|» » » MaximumOnDemandCapacityUnits|body|object|false|none|
|» » » MaximumCoreCapacityUnits|body|object|false|none|
|» PlacementGroupConfigs|body|object|false|none|
|» AutoTerminationPolicy|body|[AutoTerminationPolicy](#schemaautoterminationpolicy)|false|An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.|
|» OSReleaseLabel|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.RunJobFlow|

> Example responses

> 200 Response

```json
{
  "JobFlowId": {},
  "ClusterArn": {}
}
```

> 480 Response

```json
null
```

<h3 id="runjobflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RunJobFlowOutput](#schemarunjobflowoutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetTerminationProtection

<a id="opIdSetTerminationProtection"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.SetTerminationProtection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.SetTerminationProtection' \
  -d '{
    "JobFlowIds": {},
    "TerminationProtected": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.SetTerminationProtection`

<p>SetTerminationProtection locks a cluster (job flow) so the EC2 instances in the cluster cannot be terminated by user intervention, an API call, or in the event of a job-flow error. The cluster still terminates upon successful completion of the job flow. Calling <code>SetTerminationProtection</code> on a cluster is similar to calling the Amazon EC2 <code>DisableAPITermination</code> API on all EC2 instances in a cluster.</p> <p> <code>SetTerminationProtection</code> is used to prevent accidental termination of a cluster and to ensure that in the event of an error, the instances persist so that you can recover any data stored in their ephemeral instance storage.</p> <p> To terminate a cluster that has been locked by setting <code>SetTerminationProtection</code> to <code>true</code>, you must first unlock the job flow by a subsequent call to <code>SetTerminationProtection</code> in which you set the value to <code>false</code>. </p> <p> For more information, see<a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html">Managing Cluster Termination</a> in the <i>Amazon EMR Management Guide</i>. </p>

> Body parameter

```json
{
  "JobFlowIds": {},
  "TerminationProtected": {}
}
```

<h3 id="setterminationprotection-parameters">Parameters</h3>

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
|body|body|[SetTerminationProtectionInput](#schemasetterminationprotectioninput)|true|none|
|» JobFlowIds|body|object|true|none|
|» TerminationProtected|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.SetTerminationProtection|

> Example responses

> 480 Response

```json
null
```

<h3 id="setterminationprotection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetVisibleToAllUsers

<a id="opIdSetVisibleToAllUsers"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.SetVisibleToAllUsers' \
  -d '{
    "JobFlowIds": {},
    "VisibleToAllUsers": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers`

<important> <p>The SetVisibleToAllUsers parameter is no longer supported. Your cluster may be visible to all users in your account. To restrict cluster access using an IAM policy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html">Identity and Access Management for EMR</a>. </p> </important> <p>Sets the <a>Cluster$VisibleToAllUsers</a> value for an EMR cluster. When <code>true</code>, IAM principals in the Amazon Web Services account can perform EMR cluster actions that their IAM policies allow. When <code>false</code>, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform EMR actions on the cluster, regardless of IAM permissions policies attached to other IAM principals.</p> <p>This action works on running clusters. When you create a cluster, use the <a>RunJobFlowInput$VisibleToAllUsers</a> parameter.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/security_iam_emr-with-iam.html#security_set_visible_to_all_users">Understanding the EMR Cluster VisibleToAllUsers Setting</a> in the <i>Amazon EMRManagement Guide</i>.</p>

> Body parameter

```json
{
  "JobFlowIds": {},
  "VisibleToAllUsers": {}
}
```

<h3 id="setvisibletoallusers-parameters">Parameters</h3>

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
|body|body|[SetVisibleToAllUsersInput](#schemasetvisibletoallusersinput)|true|none|
|» JobFlowIds|body|object|true|none|
|» VisibleToAllUsers|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.SetVisibleToAllUsers|

> Example responses

> 480 Response

```json
null
```

<h3 id="setvisibletoallusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartNotebookExecution

<a id="opIdStartNotebookExecution"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.StartNotebookExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.StartNotebookExecution' \
  -d '{
    "EditorId": {},
    "RelativePath": {},
    "NotebookExecutionName": {},
    "NotebookParams": {},
    "ExecutionEngine": {
      "Id": {},
      "Type": {},
      "MasterInstanceSecurityGroupId": {}
    },
    "ServiceRole": {},
    "NotebookInstanceSecurityGroupId": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.StartNotebookExecution`

Starts a notebook execution.

> Body parameter

```json
{
  "EditorId": {},
  "RelativePath": {},
  "NotebookExecutionName": {},
  "NotebookParams": {},
  "ExecutionEngine": {
    "Id": {},
    "Type": {},
    "MasterInstanceSecurityGroupId": {}
  },
  "ServiceRole": {},
  "NotebookInstanceSecurityGroupId": {},
  "Tags": {}
}
```

<h3 id="startnotebookexecution-parameters">Parameters</h3>

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
|body|body|[StartNotebookExecutionInput](#schemastartnotebookexecutioninput)|true|none|
|» EditorId|body|object|true|none|
|» RelativePath|body|object|true|none|
|» NotebookExecutionName|body|object|false|none|
|» NotebookParams|body|object|false|none|
|» ExecutionEngine|body|object|true|none|
|» » Id|body|object|true|none|
|» » Type|body|object|false|none|
|» » MasterInstanceSecurityGroupId|body|object|false|none|
|» ServiceRole|body|object|true|none|
|» NotebookInstanceSecurityGroupId|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.StartNotebookExecution|

> Example responses

> 200 Response

```json
{
  "NotebookExecutionId": {}
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

<h3 id="startnotebookexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartNotebookExecutionOutput](#schemastartnotebookexecutionoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopNotebookExecution

<a id="opIdStopNotebookExecution"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.StopNotebookExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.StopNotebookExecution' \
  -d '{
    "NotebookExecutionId": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.StopNotebookExecution`

Stops a notebook execution.

> Body parameter

```json
{
  "NotebookExecutionId": {}
}
```

<h3 id="stopnotebookexecution-parameters">Parameters</h3>

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
|body|body|[StopNotebookExecutionInput](#schemastopnotebookexecutioninput)|true|none|
|» NotebookExecutionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.StopNotebookExecution|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="stopnotebookexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TerminateJobFlows

<a id="opIdTerminateJobFlows"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.TerminateJobFlows' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.TerminateJobFlows' \
  -d '{
    "JobFlowIds": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.TerminateJobFlows`

<p>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut down, any step not yet completed is canceled and the EC2 instances on which the cluster is running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the cluster was created.</p> <p>The maximum number of clusters allowed is 10. The call to <code>TerminateJobFlows</code> is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5 minutes for the cluster to completely terminate and release allocated resources, such as Amazon EC2 instances.</p>

> Body parameter

```json
{
  "JobFlowIds": {}
}
```

<h3 id="terminatejobflows-parameters">Parameters</h3>

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
|body|body|[TerminateJobFlowsInput](#schematerminatejobflowsinput)|true|none|
|» JobFlowIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.TerminateJobFlows|

> Example responses

> 480 Response

```json
null
```

<h3 id="terminatejobflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateStudio

<a id="opIdUpdateStudio"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.UpdateStudio' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.UpdateStudio' \
  -d '{
    "StudioId": {},
    "Name": {},
    "Description": {},
    "SubnetIds": {},
    "DefaultS3Location": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.UpdateStudio`

Updates an Amazon EMR Studio configuration, including attributes such as name, description, and subnets.

> Body parameter

```json
{
  "StudioId": {},
  "Name": {},
  "Description": {},
  "SubnetIds": {},
  "DefaultS3Location": {}
}
```

<h3 id="updatestudio-parameters">Parameters</h3>

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
|body|body|[UpdateStudioInput](#schemaupdatestudioinput)|true|none|
|» StudioId|body|object|true|none|
|» Name|body|object|false|none|
|» Description|body|object|false|none|
|» SubnetIds|body|object|false|none|
|» DefaultS3Location|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.UpdateStudio|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updatestudio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateStudioSessionMapping

<a id="opIdUpdateStudioSessionMapping"></a>

> Code samples

```bash
curl 'https://elasticmapreduce.us-east-1.amazonaws.com/#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ElasticMapReduce.UpdateStudioSessionMapping' \
  -d '{
    "StudioId": {},
    "IdentityId": {},
    "IdentityName": {},
    "IdentityType": {},
    "SessionPolicyArn": {}
  }'
```

`POST /#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping`

Updates the session policy attached to the user or group for the specified Amazon EMR Studio.

> Body parameter

```json
{
  "StudioId": {},
  "IdentityId": {},
  "IdentityName": {},
  "IdentityType": {},
  "SessionPolicyArn": {}
}
```

<h3 id="updatestudiosessionmapping-parameters">Parameters</h3>

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
|body|body|[UpdateStudioSessionMappingInput](#schemaupdatestudiosessionmappinginput)|true|none|
|» StudioId|body|object|true|none|
|» IdentityId|body|object|false|none|
|» IdentityName|body|object|false|none|
|» IdentityType|body|object|true|none|
|» SessionPolicyArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ElasticMapReduce.UpdateStudioSessionMapping|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updatestudiosessionmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddInstanceFleetOutput">AddInstanceFleetOutput</h2>
<!-- backwards compatibility -->
<a id="schemaaddinstancefleetoutput"></a>
<a id="schema_AddInstanceFleetOutput"></a>
<a id="tocSaddinstancefleetoutput"></a>
<a id="tocsaddinstancefleetoutput"></a>

```json
{
  "ClusterId": {},
  "InstanceFleetId": {},
  "ClusterArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|false|none|none|
|InstanceFleetId|object|false|none|none|
|ClusterArn|object|false|none|none|

<h2 id="tocS_AddInstanceFleetInput">AddInstanceFleetInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddinstancefleetinput"></a>
<a id="schema_AddInstanceFleetInput"></a>
<a id="tocSaddinstancefleetinput"></a>
<a id="tocsaddinstancefleetinput"></a>

```json
{
  "ClusterId": {},
  "InstanceFleet": {
    "Name": {},
    "InstanceFleetType": {},
    "TargetOnDemandCapacity": {},
    "TargetSpotCapacity": {},
    "InstanceTypeConfigs": {},
    "LaunchSpecifications": {
      "SpotSpecification": {
        "TimeoutDurationMinutes": {},
        "TimeoutAction": {},
        "BlockDurationMinutes": {},
        "AllocationStrategy": {}
      },
      "OnDemandSpecification": {
        "AllocationStrategy": {},
        "CapacityReservationOptions": {
          "UsageStrategy": {},
          "CapacityReservationPreference": {},
          "CapacityReservationResourceGroupArn": {}
        }
      }
    },
    "ResizeSpecifications": {
      "SpotResizeSpecification": {
        "TimeoutDurationMinutes": {}
      },
      "OnDemandResizeSpecification": {
        "TimeoutDurationMinutes": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|InstanceFleet|object|true|none|none|

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_AddInstanceGroupsOutput">AddInstanceGroupsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaaddinstancegroupsoutput"></a>
<a id="schema_AddInstanceGroupsOutput"></a>
<a id="tocSaddinstancegroupsoutput"></a>
<a id="tocsaddinstancegroupsoutput"></a>

```json
{
  "JobFlowId": {},
  "InstanceGroupIds": {},
  "ClusterArn": {}
}
```

Output from an AddInstanceGroups call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobFlowId|object|false|none|none|
|InstanceGroupIds|object|false|none|none|
|ClusterArn|object|false|none|none|

<h2 id="tocS_AddInstanceGroupsInput">AddInstanceGroupsInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddinstancegroupsinput"></a>
<a id="schema_AddInstanceGroupsInput"></a>
<a id="tocSaddinstancegroupsinput"></a>
<a id="tocsaddinstancegroupsinput"></a>

```json
{
  "InstanceGroups": {},
  "JobFlowId": {}
}
```

Input to an AddInstanceGroups call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceGroups|object|true|none|none|
|JobFlowId|object|true|none|none|

<h2 id="tocS_InternalServerError">InternalServerError</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererror"></a>
<a id="schema_InternalServerError"></a>
<a id="tocSinternalservererror"></a>
<a id="tocsinternalservererror"></a>

```json
null
```

<h2 id="tocS_AddJobFlowStepsOutput">AddJobFlowStepsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaaddjobflowstepsoutput"></a>
<a id="schema_AddJobFlowStepsOutput"></a>
<a id="tocSaddjobflowstepsoutput"></a>
<a id="tocsaddjobflowstepsoutput"></a>

```json
{
  "StepIds": {}
}
```

 The output for the <a>AddJobFlowSteps</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StepIds|object|false|none|none|

<h2 id="tocS_AddJobFlowStepsInput">AddJobFlowStepsInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddjobflowstepsinput"></a>
<a id="schema_AddJobFlowStepsInput"></a>
<a id="tocSaddjobflowstepsinput"></a>
<a id="tocsaddjobflowstepsinput"></a>

```json
{
  "JobFlowId": {},
  "Steps": {},
  "ExecutionRoleArn": {}
}
```

 The input argument to the <a>AddJobFlowSteps</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobFlowId|object|true|none|none|
|Steps|object|true|none|none|
|ExecutionRoleArn|object|false|none|none|

<h2 id="tocS_AddTagsOutput">AddTagsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagsoutput"></a>
<a id="schema_AddTagsOutput"></a>
<a id="tocSaddtagsoutput"></a>
<a id="tocsaddtagsoutput"></a>

```json
{}
```

This output indicates the result of adding tags to a resource.

<h2 id="tocS_AddTagsInput">AddTagsInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagsinput"></a>
<a id="schema_AddTagsInput"></a>
<a id="tocSaddtagsinput"></a>
<a id="tocsaddtagsinput"></a>

```json
{
  "ResourceId": {},
  "Tags": {}
}
```

This input identifies an Amazon EMR resource and a list of tags to attach.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_CancelStepsOutput">CancelStepsOutput</h2>
<!-- backwards compatibility -->
<a id="schemacancelstepsoutput"></a>
<a id="schema_CancelStepsOutput"></a>
<a id="tocScancelstepsoutput"></a>
<a id="tocscancelstepsoutput"></a>

```json
{
  "CancelStepsInfoList": {}
}
```

 The output for the <a>CancelSteps</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CancelStepsInfoList|object|false|none|none|

<h2 id="tocS_CancelStepsInput">CancelStepsInput</h2>
<!-- backwards compatibility -->
<a id="schemacancelstepsinput"></a>
<a id="schema_CancelStepsInput"></a>
<a id="tocScancelstepsinput"></a>
<a id="tocscancelstepsinput"></a>

```json
{
  "ClusterId": {},
  "StepIds": {},
  "StepCancellationOption": {}
}
```

The input argument to the <a>CancelSteps</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|StepIds|object|true|none|none|
|StepCancellationOption|object|false|none|none|

<h2 id="tocS_CreateSecurityConfigurationOutput">CreateSecurityConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatesecurityconfigurationoutput"></a>
<a id="schema_CreateSecurityConfigurationOutput"></a>
<a id="tocScreatesecurityconfigurationoutput"></a>
<a id="tocscreatesecurityconfigurationoutput"></a>

```json
{
  "Name": {},
  "CreationDateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|CreationDateTime|object|true|none|none|

<h2 id="tocS_CreateSecurityConfigurationInput">CreateSecurityConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatesecurityconfigurationinput"></a>
<a id="schema_CreateSecurityConfigurationInput"></a>
<a id="tocScreatesecurityconfigurationinput"></a>
<a id="tocscreatesecurityconfigurationinput"></a>

```json
{
  "Name": {},
  "SecurityConfiguration": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|SecurityConfiguration|object|true|none|none|

<h2 id="tocS_CreateStudioOutput">CreateStudioOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatestudiooutput"></a>
<a id="schema_CreateStudioOutput"></a>
<a id="tocScreatestudiooutput"></a>
<a id="tocscreatestudiooutput"></a>

```json
{
  "StudioId": {},
  "Url": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StudioId|object|false|none|none|
|Url|object|false|none|none|

<h2 id="tocS_CreateStudioInput">CreateStudioInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatestudioinput"></a>
<a id="schema_CreateStudioInput"></a>
<a id="tocScreatestudioinput"></a>
<a id="tocscreatestudioinput"></a>

```json
{
  "Name": {},
  "Description": {},
  "AuthMode": {},
  "VpcId": {},
  "SubnetIds": {},
  "ServiceRole": {},
  "UserRole": {},
  "WorkspaceSecurityGroupId": {},
  "EngineSecurityGroupId": {},
  "DefaultS3Location": {},
  "IdpAuthUrl": {},
  "IdpRelayStateParameterName": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|AuthMode|object|true|none|none|
|VpcId|object|true|none|none|
|SubnetIds|object|true|none|none|
|ServiceRole|object|true|none|none|
|UserRole|object|false|none|none|
|WorkspaceSecurityGroupId|object|true|none|none|
|EngineSecurityGroupId|object|true|none|none|
|DefaultS3Location|object|true|none|none|
|IdpAuthUrl|object|false|none|none|
|IdpRelayStateParameterName|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateStudioSessionMappingInput">CreateStudioSessionMappingInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatestudiosessionmappinginput"></a>
<a id="schema_CreateStudioSessionMappingInput"></a>
<a id="tocScreatestudiosessionmappinginput"></a>
<a id="tocscreatestudiosessionmappinginput"></a>

```json
{
  "StudioId": {},
  "IdentityId": {},
  "IdentityName": {},
  "IdentityType": {},
  "SessionPolicyArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StudioId|object|true|none|none|
|IdentityId|object|false|none|none|
|IdentityName|object|false|none|none|
|IdentityType|object|true|none|none|
|SessionPolicyArn|object|true|none|none|

<h2 id="tocS_DeleteSecurityConfigurationOutput">DeleteSecurityConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletesecurityconfigurationoutput"></a>
<a id="schema_DeleteSecurityConfigurationOutput"></a>
<a id="tocSdeletesecurityconfigurationoutput"></a>
<a id="tocsdeletesecurityconfigurationoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteSecurityConfigurationInput">DeleteSecurityConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletesecurityconfigurationinput"></a>
<a id="schema_DeleteSecurityConfigurationInput"></a>
<a id="tocSdeletesecurityconfigurationinput"></a>
<a id="tocsdeletesecurityconfigurationinput"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteStudioInput">DeleteStudioInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletestudioinput"></a>
<a id="schema_DeleteStudioInput"></a>
<a id="tocSdeletestudioinput"></a>
<a id="tocsdeletestudioinput"></a>

```json
{
  "StudioId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StudioId|object|true|none|none|

<h2 id="tocS_DeleteStudioSessionMappingInput">DeleteStudioSessionMappingInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletestudiosessionmappinginput"></a>
<a id="schema_DeleteStudioSessionMappingInput"></a>
<a id="tocSdeletestudiosessionmappinginput"></a>
<a id="tocsdeletestudiosessionmappinginput"></a>

```json
{
  "StudioId": {},
  "IdentityId": {},
  "IdentityName": {},
  "IdentityType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StudioId|object|true|none|none|
|IdentityId|object|false|none|none|
|IdentityName|object|false|none|none|
|IdentityType|object|true|none|none|

<h2 id="tocS_DescribeClusterOutput">DescribeClusterOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclusteroutput"></a>
<a id="schema_DescribeClusterOutput"></a>
<a id="tocSdescribeclusteroutput"></a>
<a id="tocsdescribeclusteroutput"></a>

```json
{
  "Cluster": {
    "Id": {},
    "Name": {},
    "Status": {
      "State": {},
      "StateChangeReason": {
        "Code": {},
        "Message": {}
      },
      "Timeline": {
        "CreationDateTime": {},
        "ReadyDateTime": {},
        "EndDateTime": {}
      },
      "ErrorDetails": {}
    },
    "Ec2InstanceAttributes": {
      "Ec2KeyName": {},
      "Ec2SubnetId": {},
      "RequestedEc2SubnetIds": {},
      "Ec2AvailabilityZone": {},
      "RequestedEc2AvailabilityZones": {},
      "IamInstanceProfile": {},
      "EmrManagedMasterSecurityGroup": {},
      "EmrManagedSlaveSecurityGroup": {},
      "ServiceAccessSecurityGroup": {},
      "AdditionalMasterSecurityGroups": {},
      "AdditionalSlaveSecurityGroups": {}
    },
    "InstanceCollectionType": {},
    "LogUri": {},
    "LogEncryptionKmsKeyId": {},
    "RequestedAmiVersion": {},
    "RunningAmiVersion": {},
    "ReleaseLabel": {},
    "AutoTerminate": {},
    "TerminationProtected": {},
    "VisibleToAllUsers": {},
    "Applications": {},
    "Tags": {},
    "ServiceRole": {},
    "NormalizedInstanceHours": {},
    "MasterPublicDnsName": {},
    "Configurations": {},
    "SecurityConfiguration": {},
    "AutoScalingRole": {},
    "ScaleDownBehavior": {},
    "CustomAmiId": {},
    "EbsRootVolumeSize": {},
    "RepoUpgradeOnBoot": {},
    "KerberosAttributes": {
      "Realm": {},
      "KdcAdminPassword": {},
      "CrossRealmTrustPrincipalPassword": {},
      "ADDomainJoinUser": {},
      "ADDomainJoinPassword": {}
    },
    "ClusterArn": {},
    "OutpostArn": {},
    "StepConcurrencyLevel": {},
    "PlacementGroups": {},
    "OSReleaseLabel": {}
  }
}
```

This output contains the description of the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cluster|object|false|none|none|

<h2 id="tocS_DescribeClusterInput">DescribeClusterInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclusterinput"></a>
<a id="schema_DescribeClusterInput"></a>
<a id="tocSdescribeclusterinput"></a>
<a id="tocsdescribeclusterinput"></a>

```json
{
  "ClusterId": {}
}
```

This input determines which cluster to describe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|

<h2 id="tocS_DescribeJobFlowsOutput">DescribeJobFlowsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobflowsoutput"></a>
<a id="schema_DescribeJobFlowsOutput"></a>
<a id="tocSdescribejobflowsoutput"></a>
<a id="tocsdescribejobflowsoutput"></a>

```json
{
  "JobFlows": {}
}
```

 The output for the <a>DescribeJobFlows</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobFlows|object|false|none|none|

<h2 id="tocS_DescribeJobFlowsInput">DescribeJobFlowsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobflowsinput"></a>
<a id="schema_DescribeJobFlowsInput"></a>
<a id="tocSdescribejobflowsinput"></a>
<a id="tocsdescribejobflowsinput"></a>

```json
{
  "CreatedAfter": {},
  "CreatedBefore": {},
  "JobFlowIds": {},
  "JobFlowStates": {}
}
```

 The input for the <a>DescribeJobFlows</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedAfter|object|false|none|none|
|CreatedBefore|object|false|none|none|
|JobFlowIds|object|false|none|none|
|JobFlowStates|object|false|none|none|

<h2 id="tocS_DescribeNotebookExecutionOutput">DescribeNotebookExecutionOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribenotebookexecutionoutput"></a>
<a id="schema_DescribeNotebookExecutionOutput"></a>
<a id="tocSdescribenotebookexecutionoutput"></a>
<a id="tocsdescribenotebookexecutionoutput"></a>

```json
{
  "NotebookExecution": {
    "NotebookExecutionId": {},
    "EditorId": {},
    "ExecutionEngine": {
      "Id": {},
      "Type": {},
      "MasterInstanceSecurityGroupId": {}
    },
    "NotebookExecutionName": {},
    "NotebookParams": {},
    "Status": {},
    "StartTime": {},
    "EndTime": {},
    "Arn": {},
    "OutputNotebookURI": {},
    "LastStateChangeReason": {},
    "NotebookInstanceSecurityGroupId": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookExecution|object|false|none|none|

<h2 id="tocS_DescribeNotebookExecutionInput">DescribeNotebookExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribenotebookexecutioninput"></a>
<a id="schema_DescribeNotebookExecutionInput"></a>
<a id="tocSdescribenotebookexecutioninput"></a>
<a id="tocsdescribenotebookexecutioninput"></a>

```json
{
  "NotebookExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookExecutionId|object|true|none|none|

<h2 id="tocS_DescribeReleaseLabelOutput">DescribeReleaseLabelOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribereleaselabeloutput"></a>
<a id="schema_DescribeReleaseLabelOutput"></a>
<a id="tocSdescribereleaselabeloutput"></a>
<a id="tocsdescribereleaselabeloutput"></a>

```json
{
  "ReleaseLabel": {},
  "Applications": {},
  "NextToken": {},
  "AvailableOSReleases": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReleaseLabel|object|false|none|none|
|Applications|object|false|none|none|
|NextToken|object|false|none|none|
|AvailableOSReleases|object|false|none|none|

<h2 id="tocS_DescribeReleaseLabelInput">DescribeReleaseLabelInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribereleaselabelinput"></a>
<a id="schema_DescribeReleaseLabelInput"></a>
<a id="tocSdescribereleaselabelinput"></a>
<a id="tocsdescribereleaselabelinput"></a>

```json
{
  "ReleaseLabel": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReleaseLabel|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_DescribeSecurityConfigurationOutput">DescribeSecurityConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribesecurityconfigurationoutput"></a>
<a id="schema_DescribeSecurityConfigurationOutput"></a>
<a id="tocSdescribesecurityconfigurationoutput"></a>
<a id="tocsdescribesecurityconfigurationoutput"></a>

```json
{
  "Name": {},
  "SecurityConfiguration": {},
  "CreationDateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|SecurityConfiguration|object|false|none|none|
|CreationDateTime|object|false|none|none|

<h2 id="tocS_DescribeSecurityConfigurationInput">DescribeSecurityConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribesecurityconfigurationinput"></a>
<a id="schema_DescribeSecurityConfigurationInput"></a>
<a id="tocSdescribesecurityconfigurationinput"></a>
<a id="tocsdescribesecurityconfigurationinput"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DescribeStepOutput">DescribeStepOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestepoutput"></a>
<a id="schema_DescribeStepOutput"></a>
<a id="tocSdescribestepoutput"></a>
<a id="tocsdescribestepoutput"></a>

```json
{
  "Step": {
    "Id": {},
    "Name": {},
    "Config": {
      "Jar": {},
      "Properties": {
        "property1": "string",
        "property2": "string"
      },
      "MainClass": {},
      "Args": {}
    },
    "ActionOnFailure": {},
    "Status": {
      "State": {},
      "StateChangeReason": {
        "Code": {},
        "Message": {}
      },
      "FailureDetails": {
        "Reason": {},
        "Message": {},
        "LogFile": {}
      },
      "Timeline": {
        "CreationDateTime": {},
        "StartDateTime": {},
        "EndDateTime": {}
      }
    },
    "ExecutionRoleArn": {}
  }
}
```

This output contains the description of the cluster step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Step|object|false|none|none|

<h2 id="tocS_DescribeStepInput">DescribeStepInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestepinput"></a>
<a id="schema_DescribeStepInput"></a>
<a id="tocSdescribestepinput"></a>
<a id="tocsdescribestepinput"></a>

```json
{
  "ClusterId": {},
  "StepId": {}
}
```

This input determines which step to describe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|StepId|object|true|none|none|

<h2 id="tocS_DescribeStudioOutput">DescribeStudioOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestudiooutput"></a>
<a id="schema_DescribeStudioOutput"></a>
<a id="tocSdescribestudiooutput"></a>
<a id="tocsdescribestudiooutput"></a>

```json
{
  "Studio": {
    "StudioId": {},
    "StudioArn": {},
    "Name": {},
    "Description": {},
    "AuthMode": {},
    "VpcId": {},
    "SubnetIds": {},
    "ServiceRole": {},
    "UserRole": {},
    "WorkspaceSecurityGroupId": {},
    "EngineSecurityGroupId": {},
    "Url": {},
    "CreationTime": {},
    "DefaultS3Location": {},
    "IdpAuthUrl": {},
    "IdpRelayStateParameterName": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Studio|object|false|none|none|

<h2 id="tocS_DescribeStudioInput">DescribeStudioInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestudioinput"></a>
<a id="schema_DescribeStudioInput"></a>
<a id="tocSdescribestudioinput"></a>
<a id="tocsdescribestudioinput"></a>

```json
{
  "StudioId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StudioId|object|true|none|none|

<h2 id="tocS_GetAutoTerminationPolicyOutput">GetAutoTerminationPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetautoterminationpolicyoutput"></a>
<a id="schema_GetAutoTerminationPolicyOutput"></a>
<a id="tocSgetautoterminationpolicyoutput"></a>
<a id="tocsgetautoterminationpolicyoutput"></a>

```json
{
  "AutoTerminationPolicy": {
    "IdleTimeout": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoTerminationPolicy|object|false|none|none|

<h2 id="tocS_GetAutoTerminationPolicyInput">GetAutoTerminationPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemagetautoterminationpolicyinput"></a>
<a id="schema_GetAutoTerminationPolicyInput"></a>
<a id="tocSgetautoterminationpolicyinput"></a>
<a id="tocsgetautoterminationpolicyinput"></a>

```json
{
  "ClusterId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|

<h2 id="tocS_GetBlockPublicAccessConfigurationOutput">GetBlockPublicAccessConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetblockpublicaccessconfigurationoutput"></a>
<a id="schema_GetBlockPublicAccessConfigurationOutput"></a>
<a id="tocSgetblockpublicaccessconfigurationoutput"></a>
<a id="tocsgetblockpublicaccessconfigurationoutput"></a>

```json
{
  "BlockPublicAccessConfiguration": {
    "BlockPublicSecurityGroupRules": {},
    "PermittedPublicSecurityGroupRuleRanges": {}
  },
  "BlockPublicAccessConfigurationMetadata": {
    "CreationDateTime": {},
    "CreatedByArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockPublicAccessConfiguration|object|true|none|none|
|BlockPublicAccessConfigurationMetadata|object|true|none|none|

<h2 id="tocS_GetBlockPublicAccessConfigurationInput">GetBlockPublicAccessConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemagetblockpublicaccessconfigurationinput"></a>
<a id="schema_GetBlockPublicAccessConfigurationInput"></a>
<a id="tocSgetblockpublicaccessconfigurationinput"></a>
<a id="tocsgetblockpublicaccessconfigurationinput"></a>

```json
{}
```

<h2 id="tocS_GetClusterSessionCredentialsOutput">GetClusterSessionCredentialsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetclustersessioncredentialsoutput"></a>
<a id="schema_GetClusterSessionCredentialsOutput"></a>
<a id="tocSgetclustersessioncredentialsoutput"></a>
<a id="tocsgetclustersessioncredentialsoutput"></a>

```json
{
  "Credentials": {
    "UsernamePassword": {
      "Username": {},
      "Password": {}
    }
  },
  "ExpiresAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Credentials|object|false|none|none|
|ExpiresAt|object|false|none|none|

<h2 id="tocS_GetClusterSessionCredentialsInput">GetClusterSessionCredentialsInput</h2>
<!-- backwards compatibility -->
<a id="schemagetclustersessioncredentialsinput"></a>
<a id="schema_GetClusterSessionCredentialsInput"></a>
<a id="tocSgetclustersessioncredentialsinput"></a>
<a id="tocsgetclustersessioncredentialsinput"></a>

```json
{
  "ClusterId": {},
  "ExecutionRoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|ExecutionRoleArn|object|true|none|none|

<h2 id="tocS_GetManagedScalingPolicyOutput">GetManagedScalingPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetmanagedscalingpolicyoutput"></a>
<a id="schema_GetManagedScalingPolicyOutput"></a>
<a id="tocSgetmanagedscalingpolicyoutput"></a>
<a id="tocsgetmanagedscalingpolicyoutput"></a>

```json
{
  "ManagedScalingPolicy": {
    "ComputeLimits": {
      "UnitType": {},
      "MinimumCapacityUnits": {},
      "MaximumCapacityUnits": {},
      "MaximumOnDemandCapacityUnits": {},
      "MaximumCoreCapacityUnits": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManagedScalingPolicy|object|false|none|none|

<h2 id="tocS_GetManagedScalingPolicyInput">GetManagedScalingPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemagetmanagedscalingpolicyinput"></a>
<a id="schema_GetManagedScalingPolicyInput"></a>
<a id="tocSgetmanagedscalingpolicyinput"></a>
<a id="tocsgetmanagedscalingpolicyinput"></a>

```json
{
  "ClusterId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|

<h2 id="tocS_GetStudioSessionMappingOutput">GetStudioSessionMappingOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetstudiosessionmappingoutput"></a>
<a id="schema_GetStudioSessionMappingOutput"></a>
<a id="tocSgetstudiosessionmappingoutput"></a>
<a id="tocsgetstudiosessionmappingoutput"></a>

```json
{
  "SessionMapping": {
    "StudioId": {},
    "IdentityId": {},
    "IdentityName": {},
    "IdentityType": {},
    "SessionPolicyArn": {},
    "CreationTime": {},
    "LastModifiedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionMapping|object|false|none|none|

<h2 id="tocS_GetStudioSessionMappingInput">GetStudioSessionMappingInput</h2>
<!-- backwards compatibility -->
<a id="schemagetstudiosessionmappinginput"></a>
<a id="schema_GetStudioSessionMappingInput"></a>
<a id="tocSgetstudiosessionmappinginput"></a>
<a id="tocsgetstudiosessionmappinginput"></a>

```json
{
  "StudioId": {},
  "IdentityId": {},
  "IdentityName": {},
  "IdentityType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StudioId|object|true|none|none|
|IdentityId|object|false|none|none|
|IdentityName|object|false|none|none|
|IdentityType|object|true|none|none|

<h2 id="tocS_ListBootstrapActionsOutput">ListBootstrapActionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbootstrapactionsoutput"></a>
<a id="schema_ListBootstrapActionsOutput"></a>
<a id="tocSlistbootstrapactionsoutput"></a>
<a id="tocslistbootstrapactionsoutput"></a>

```json
{
  "BootstrapActions": {},
  "Marker": {}
}
```

This output contains the bootstrap actions detail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BootstrapActions|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListBootstrapActionsInput">ListBootstrapActionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistbootstrapactionsinput"></a>
<a id="schema_ListBootstrapActionsInput"></a>
<a id="tocSlistbootstrapactionsinput"></a>
<a id="tocslistbootstrapactionsinput"></a>

```json
{
  "ClusterId": {},
  "Marker": {}
}
```

This input determines which bootstrap actions to retrieve.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListClustersOutput">ListClustersOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistclustersoutput"></a>
<a id="schema_ListClustersOutput"></a>
<a id="tocSlistclustersoutput"></a>
<a id="tocslistclustersoutput"></a>

```json
{
  "Clusters": {},
  "Marker": {}
}
```

This contains a ClusterSummaryList with the cluster details; for example, the cluster IDs, names, and status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Clusters|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListClustersInput">ListClustersInput</h2>
<!-- backwards compatibility -->
<a id="schemalistclustersinput"></a>
<a id="schema_ListClustersInput"></a>
<a id="tocSlistclustersinput"></a>
<a id="tocslistclustersinput"></a>

```json
{
  "CreatedAfter": {},
  "CreatedBefore": {},
  "ClusterStates": {},
  "Marker": {}
}
```

This input determines how the ListClusters action filters the list of clusters that it returns.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedAfter|object|false|none|none|
|CreatedBefore|object|false|none|none|
|ClusterStates|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListInstanceFleetsOutput">ListInstanceFleetsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancefleetsoutput"></a>
<a id="schema_ListInstanceFleetsOutput"></a>
<a id="tocSlistinstancefleetsoutput"></a>
<a id="tocslistinstancefleetsoutput"></a>

```json
{
  "InstanceFleets": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceFleets|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListInstanceFleetsInput">ListInstanceFleetsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancefleetsinput"></a>
<a id="schema_ListInstanceFleetsInput"></a>
<a id="tocSlistinstancefleetsinput"></a>
<a id="tocslistinstancefleetsinput"></a>

```json
{
  "ClusterId": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListInstanceGroupsOutput">ListInstanceGroupsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancegroupsoutput"></a>
<a id="schema_ListInstanceGroupsOutput"></a>
<a id="tocSlistinstancegroupsoutput"></a>
<a id="tocslistinstancegroupsoutput"></a>

```json
{
  "InstanceGroups": {},
  "Marker": {}
}
```

This input determines which instance groups to retrieve.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceGroups|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListInstanceGroupsInput">ListInstanceGroupsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancegroupsinput"></a>
<a id="schema_ListInstanceGroupsInput"></a>
<a id="tocSlistinstancegroupsinput"></a>
<a id="tocslistinstancegroupsinput"></a>

```json
{
  "ClusterId": {},
  "Marker": {}
}
```

This input determines which instance groups to retrieve.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListInstancesOutput">ListInstancesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancesoutput"></a>
<a id="schema_ListInstancesOutput"></a>
<a id="tocSlistinstancesoutput"></a>
<a id="tocslistinstancesoutput"></a>

```json
{
  "Instances": {},
  "Marker": {}
}
```

This output contains the list of instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Instances|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListInstancesInput">ListInstancesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancesinput"></a>
<a id="schema_ListInstancesInput"></a>
<a id="tocSlistinstancesinput"></a>
<a id="tocslistinstancesinput"></a>

```json
{
  "ClusterId": {},
  "InstanceGroupId": {},
  "InstanceGroupTypes": {},
  "InstanceFleetId": {},
  "InstanceFleetType": {},
  "InstanceStates": {},
  "Marker": {}
}
```

This input determines which instances to list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|InstanceGroupId|object|false|none|none|
|InstanceGroupTypes|object|false|none|none|
|InstanceFleetId|object|false|none|none|
|InstanceFleetType|object|false|none|none|
|InstanceStates|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListNotebookExecutionsOutput">ListNotebookExecutionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistnotebookexecutionsoutput"></a>
<a id="schema_ListNotebookExecutionsOutput"></a>
<a id="tocSlistnotebookexecutionsoutput"></a>
<a id="tocslistnotebookexecutionsoutput"></a>

```json
{
  "NotebookExecutions": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookExecutions|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListNotebookExecutionsInput">ListNotebookExecutionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistnotebookexecutionsinput"></a>
<a id="schema_ListNotebookExecutionsInput"></a>
<a id="tocSlistnotebookexecutionsinput"></a>
<a id="tocslistnotebookexecutionsinput"></a>

```json
{
  "EditorId": {},
  "Status": {},
  "From": {},
  "To": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EditorId|object|false|none|none|
|Status|object|false|none|none|
|From|object|false|none|none|
|To|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListReleaseLabelsOutput">ListReleaseLabelsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistreleaselabelsoutput"></a>
<a id="schema_ListReleaseLabelsOutput"></a>
<a id="tocSlistreleaselabelsoutput"></a>
<a id="tocslistreleaselabelsoutput"></a>

```json
{
  "ReleaseLabels": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReleaseLabels|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListReleaseLabelsInput">ListReleaseLabelsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistreleaselabelsinput"></a>
<a id="schema_ListReleaseLabelsInput"></a>
<a id="tocSlistreleaselabelsinput"></a>
<a id="tocslistreleaselabelsinput"></a>

```json
{
  "Filters": {
    "Prefix": {},
    "Application": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListSecurityConfigurationsOutput">ListSecurityConfigurationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistsecurityconfigurationsoutput"></a>
<a id="schema_ListSecurityConfigurationsOutput"></a>
<a id="tocSlistsecurityconfigurationsoutput"></a>
<a id="tocslistsecurityconfigurationsoutput"></a>

```json
{
  "SecurityConfigurations": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityConfigurations|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListSecurityConfigurationsInput">ListSecurityConfigurationsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistsecurityconfigurationsinput"></a>
<a id="schema_ListSecurityConfigurationsInput"></a>
<a id="tocSlistsecurityconfigurationsinput"></a>
<a id="tocslistsecurityconfigurationsinput"></a>

```json
{
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|

<h2 id="tocS_ListStepsOutput">ListStepsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaliststepsoutput"></a>
<a id="schema_ListStepsOutput"></a>
<a id="tocSliststepsoutput"></a>
<a id="tocsliststepsoutput"></a>

```json
{
  "Steps": {},
  "Marker": {}
}
```

This output contains the list of steps returned in reverse order. This means that the last step is the first element in the list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Steps|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListStepsInput">ListStepsInput</h2>
<!-- backwards compatibility -->
<a id="schemaliststepsinput"></a>
<a id="schema_ListStepsInput"></a>
<a id="tocSliststepsinput"></a>
<a id="tocsliststepsinput"></a>

```json
{
  "ClusterId": {},
  "StepStates": {},
  "StepIds": {},
  "Marker": {}
}
```

This input determines which steps to list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|StepStates|object|false|none|none|
|StepIds|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListStudioSessionMappingsOutput">ListStudioSessionMappingsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaliststudiosessionmappingsoutput"></a>
<a id="schema_ListStudioSessionMappingsOutput"></a>
<a id="tocSliststudiosessionmappingsoutput"></a>
<a id="tocsliststudiosessionmappingsoutput"></a>

```json
{
  "SessionMappings": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionMappings|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListStudioSessionMappingsInput">ListStudioSessionMappingsInput</h2>
<!-- backwards compatibility -->
<a id="schemaliststudiosessionmappingsinput"></a>
<a id="schema_ListStudioSessionMappingsInput"></a>
<a id="tocSliststudiosessionmappingsinput"></a>
<a id="tocsliststudiosessionmappingsinput"></a>

```json
{
  "StudioId": {},
  "IdentityType": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StudioId|object|false|none|none|
|IdentityType|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListStudiosOutput">ListStudiosOutput</h2>
<!-- backwards compatibility -->
<a id="schemaliststudiosoutput"></a>
<a id="schema_ListStudiosOutput"></a>
<a id="tocSliststudiosoutput"></a>
<a id="tocsliststudiosoutput"></a>

```json
{
  "Studios": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Studios|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListStudiosInput">ListStudiosInput</h2>
<!-- backwards compatibility -->
<a id="schemaliststudiosinput"></a>
<a id="schema_ListStudiosInput"></a>
<a id="tocSliststudiosinput"></a>
<a id="tocsliststudiosinput"></a>

```json
{
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|

<h2 id="tocS_ModifyClusterOutput">ModifyClusterOutput</h2>
<!-- backwards compatibility -->
<a id="schemamodifyclusteroutput"></a>
<a id="schema_ModifyClusterOutput"></a>
<a id="tocSmodifyclusteroutput"></a>
<a id="tocsmodifyclusteroutput"></a>

```json
{
  "StepConcurrencyLevel": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StepConcurrencyLevel|object|false|none|none|

<h2 id="tocS_ModifyClusterInput">ModifyClusterInput</h2>
<!-- backwards compatibility -->
<a id="schemamodifyclusterinput"></a>
<a id="schema_ModifyClusterInput"></a>
<a id="tocSmodifyclusterinput"></a>
<a id="tocsmodifyclusterinput"></a>

```json
{
  "ClusterId": {},
  "StepConcurrencyLevel": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|StepConcurrencyLevel|object|false|none|none|

<h2 id="tocS_ModifyInstanceFleetInput">ModifyInstanceFleetInput</h2>
<!-- backwards compatibility -->
<a id="schemamodifyinstancefleetinput"></a>
<a id="schema_ModifyInstanceFleetInput"></a>
<a id="tocSmodifyinstancefleetinput"></a>
<a id="tocsmodifyinstancefleetinput"></a>

```json
{
  "ClusterId": {},
  "InstanceFleet": {
    "InstanceFleetId": {},
    "TargetOnDemandCapacity": {},
    "TargetSpotCapacity": {},
    "ResizeSpecifications": {
      "SpotResizeSpecification": {
        "TimeoutDurationMinutes": {}
      },
      "OnDemandResizeSpecification": {
        "TimeoutDurationMinutes": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|InstanceFleet|object|true|none|none|

<h2 id="tocS_ModifyInstanceGroupsInput">ModifyInstanceGroupsInput</h2>
<!-- backwards compatibility -->
<a id="schemamodifyinstancegroupsinput"></a>
<a id="schema_ModifyInstanceGroupsInput"></a>
<a id="tocSmodifyinstancegroupsinput"></a>
<a id="tocsmodifyinstancegroupsinput"></a>

```json
{
  "ClusterId": {},
  "InstanceGroups": {}
}
```

Change the size of some instance groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|false|none|none|
|InstanceGroups|object|false|none|none|

<h2 id="tocS_PutAutoScalingPolicyOutput">PutAutoScalingPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputautoscalingpolicyoutput"></a>
<a id="schema_PutAutoScalingPolicyOutput"></a>
<a id="tocSputautoscalingpolicyoutput"></a>
<a id="tocsputautoscalingpolicyoutput"></a>

```json
{
  "ClusterId": {},
  "InstanceGroupId": {},
  "AutoScalingPolicy": {
    "Status": {
      "State": {},
      "StateChangeReason": {
        "Code": {},
        "Message": {}
      }
    },
    "Constraints": {
      "MinCapacity": {},
      "MaxCapacity": {}
    },
    "Rules": {}
  },
  "ClusterArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|false|none|none|
|InstanceGroupId|object|false|none|none|
|AutoScalingPolicy|object|false|none|none|
|ClusterArn|object|false|none|none|

<h2 id="tocS_PutAutoScalingPolicyInput">PutAutoScalingPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemaputautoscalingpolicyinput"></a>
<a id="schema_PutAutoScalingPolicyInput"></a>
<a id="tocSputautoscalingpolicyinput"></a>
<a id="tocsputautoscalingpolicyinput"></a>

```json
{
  "ClusterId": {},
  "InstanceGroupId": {},
  "AutoScalingPolicy": {
    "Constraints": {
      "MinCapacity": {},
      "MaxCapacity": {}
    },
    "Rules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|InstanceGroupId|object|true|none|none|
|AutoScalingPolicy|object|true|none|none|

<h2 id="tocS_PutAutoTerminationPolicyOutput">PutAutoTerminationPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputautoterminationpolicyoutput"></a>
<a id="schema_PutAutoTerminationPolicyOutput"></a>
<a id="tocSputautoterminationpolicyoutput"></a>
<a id="tocsputautoterminationpolicyoutput"></a>

```json
{}
```

<h2 id="tocS_PutAutoTerminationPolicyInput">PutAutoTerminationPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemaputautoterminationpolicyinput"></a>
<a id="schema_PutAutoTerminationPolicyInput"></a>
<a id="tocSputautoterminationpolicyinput"></a>
<a id="tocsputautoterminationpolicyinput"></a>

```json
{
  "ClusterId": {},
  "AutoTerminationPolicy": {
    "IdleTimeout": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|AutoTerminationPolicy|object|false|none|none|

<h2 id="tocS_PutBlockPublicAccessConfigurationOutput">PutBlockPublicAccessConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputblockpublicaccessconfigurationoutput"></a>
<a id="schema_PutBlockPublicAccessConfigurationOutput"></a>
<a id="tocSputblockpublicaccessconfigurationoutput"></a>
<a id="tocsputblockpublicaccessconfigurationoutput"></a>

```json
{}
```

<h2 id="tocS_PutBlockPublicAccessConfigurationInput">PutBlockPublicAccessConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemaputblockpublicaccessconfigurationinput"></a>
<a id="schema_PutBlockPublicAccessConfigurationInput"></a>
<a id="tocSputblockpublicaccessconfigurationinput"></a>
<a id="tocsputblockpublicaccessconfigurationinput"></a>

```json
{
  "BlockPublicAccessConfiguration": {
    "BlockPublicSecurityGroupRules": {},
    "PermittedPublicSecurityGroupRuleRanges": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockPublicAccessConfiguration|object|true|none|none|

<h2 id="tocS_PutManagedScalingPolicyOutput">PutManagedScalingPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputmanagedscalingpolicyoutput"></a>
<a id="schema_PutManagedScalingPolicyOutput"></a>
<a id="tocSputmanagedscalingpolicyoutput"></a>
<a id="tocsputmanagedscalingpolicyoutput"></a>

```json
{}
```

<h2 id="tocS_PutManagedScalingPolicyInput">PutManagedScalingPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemaputmanagedscalingpolicyinput"></a>
<a id="schema_PutManagedScalingPolicyInput"></a>
<a id="tocSputmanagedscalingpolicyinput"></a>
<a id="tocsputmanagedscalingpolicyinput"></a>

```json
{
  "ClusterId": {},
  "ManagedScalingPolicy": {
    "ComputeLimits": {
      "UnitType": {},
      "MinimumCapacityUnits": {},
      "MaximumCapacityUnits": {},
      "MaximumOnDemandCapacityUnits": {},
      "MaximumCoreCapacityUnits": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|ManagedScalingPolicy|object|true|none|none|

<h2 id="tocS_RemoveAutoScalingPolicyOutput">RemoveAutoScalingPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaremoveautoscalingpolicyoutput"></a>
<a id="schema_RemoveAutoScalingPolicyOutput"></a>
<a id="tocSremoveautoscalingpolicyoutput"></a>
<a id="tocsremoveautoscalingpolicyoutput"></a>

```json
{}
```

<h2 id="tocS_RemoveAutoScalingPolicyInput">RemoveAutoScalingPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemaremoveautoscalingpolicyinput"></a>
<a id="schema_RemoveAutoScalingPolicyInput"></a>
<a id="tocSremoveautoscalingpolicyinput"></a>
<a id="tocsremoveautoscalingpolicyinput"></a>

```json
{
  "ClusterId": {},
  "InstanceGroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|
|InstanceGroupId|object|true|none|none|

<h2 id="tocS_RemoveAutoTerminationPolicyOutput">RemoveAutoTerminationPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaremoveautoterminationpolicyoutput"></a>
<a id="schema_RemoveAutoTerminationPolicyOutput"></a>
<a id="tocSremoveautoterminationpolicyoutput"></a>
<a id="tocsremoveautoterminationpolicyoutput"></a>

```json
{}
```

<h2 id="tocS_RemoveAutoTerminationPolicyInput">RemoveAutoTerminationPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemaremoveautoterminationpolicyinput"></a>
<a id="schema_RemoveAutoTerminationPolicyInput"></a>
<a id="tocSremoveautoterminationpolicyinput"></a>
<a id="tocsremoveautoterminationpolicyinput"></a>

```json
{
  "ClusterId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|

<h2 id="tocS_RemoveManagedScalingPolicyOutput">RemoveManagedScalingPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaremovemanagedscalingpolicyoutput"></a>
<a id="schema_RemoveManagedScalingPolicyOutput"></a>
<a id="tocSremovemanagedscalingpolicyoutput"></a>
<a id="tocsremovemanagedscalingpolicyoutput"></a>

```json
{}
```

<h2 id="tocS_RemoveManagedScalingPolicyInput">RemoveManagedScalingPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemaremovemanagedscalingpolicyinput"></a>
<a id="schema_RemoveManagedScalingPolicyInput"></a>
<a id="tocSremovemanagedscalingpolicyinput"></a>
<a id="tocsremovemanagedscalingpolicyinput"></a>

```json
{
  "ClusterId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterId|object|true|none|none|

<h2 id="tocS_RemoveTagsOutput">RemoveTagsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsoutput"></a>
<a id="schema_RemoveTagsOutput"></a>
<a id="tocSremovetagsoutput"></a>
<a id="tocsremovetagsoutput"></a>

```json
{}
```

This output indicates the result of removing tags from the resource.

<h2 id="tocS_RemoveTagsInput">RemoveTagsInput</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsinput"></a>
<a id="schema_RemoveTagsInput"></a>
<a id="tocSremovetagsinput"></a>
<a id="tocsremovetagsinput"></a>

```json
{
  "ResourceId": {},
  "TagKeys": {}
}
```

This input identifies an Amazon EMR resource and a list of tags to remove.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_RunJobFlowOutput">RunJobFlowOutput</h2>
<!-- backwards compatibility -->
<a id="schemarunjobflowoutput"></a>
<a id="schema_RunJobFlowOutput"></a>
<a id="tocSrunjobflowoutput"></a>
<a id="tocsrunjobflowoutput"></a>

```json
{
  "JobFlowId": {},
  "ClusterArn": {}
}
```

 The result of the <a>RunJobFlow</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobFlowId|object|false|none|none|
|ClusterArn|object|false|none|none|

<h2 id="tocS_RunJobFlowInput">RunJobFlowInput</h2>
<!-- backwards compatibility -->
<a id="schemarunjobflowinput"></a>
<a id="schema_RunJobFlowInput"></a>
<a id="tocSrunjobflowinput"></a>
<a id="tocsrunjobflowinput"></a>

```json
{
  "Name": {},
  "LogUri": {},
  "LogEncryptionKmsKeyId": {},
  "AdditionalInfo": {},
  "AmiVersion": {},
  "ReleaseLabel": {},
  "Instances": {
    "MasterInstanceType": {},
    "SlaveInstanceType": {},
    "InstanceCount": {},
    "InstanceGroups": {},
    "InstanceFleets": {},
    "Ec2KeyName": {},
    "Placement": {
      "AvailabilityZone": {},
      "AvailabilityZones": {}
    },
    "KeepJobFlowAliveWhenNoSteps": {},
    "TerminationProtected": {},
    "HadoopVersion": {},
    "Ec2SubnetId": {},
    "Ec2SubnetIds": {},
    "EmrManagedMasterSecurityGroup": {},
    "EmrManagedSlaveSecurityGroup": {},
    "ServiceAccessSecurityGroup": {},
    "AdditionalMasterSecurityGroups": {},
    "AdditionalSlaveSecurityGroups": {}
  },
  "Steps": {},
  "BootstrapActions": {},
  "SupportedProducts": {},
  "NewSupportedProducts": {},
  "Applications": {},
  "Configurations": {},
  "VisibleToAllUsers": {},
  "JobFlowRole": {},
  "ServiceRole": {},
  "Tags": {},
  "SecurityConfiguration": {},
  "AutoScalingRole": {},
  "ScaleDownBehavior": {},
  "CustomAmiId": {},
  "EbsRootVolumeSize": {},
  "RepoUpgradeOnBoot": {},
  "KerberosAttributes": {
    "Realm": {},
    "KdcAdminPassword": {},
    "CrossRealmTrustPrincipalPassword": {},
    "ADDomainJoinUser": {},
    "ADDomainJoinPassword": {}
  },
  "StepConcurrencyLevel": {},
  "ManagedScalingPolicy": {
    "ComputeLimits": {
      "UnitType": {},
      "MinimumCapacityUnits": {},
      "MaximumCapacityUnits": {},
      "MaximumOnDemandCapacityUnits": {},
      "MaximumCoreCapacityUnits": {}
    }
  },
  "PlacementGroupConfigs": {},
  "AutoTerminationPolicy": {
    "IdleTimeout": {}
  },
  "OSReleaseLabel": {}
}
```

 Input to the <a>RunJobFlow</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|LogUri|object|false|none|none|
|LogEncryptionKmsKeyId|object|false|none|none|
|AdditionalInfo|object|false|none|none|
|AmiVersion|object|false|none|none|
|ReleaseLabel|object|false|none|none|
|Instances|object|true|none|none|
|Steps|object|false|none|none|
|BootstrapActions|object|false|none|none|
|SupportedProducts|object|false|none|none|
|NewSupportedProducts|object|false|none|none|
|Applications|object|false|none|none|
|Configurations|object|false|none|none|
|VisibleToAllUsers|object|false|none|none|
|JobFlowRole|object|false|none|none|
|ServiceRole|object|false|none|none|
|Tags|object|false|none|none|
|SecurityConfiguration|object|false|none|none|
|AutoScalingRole|object|false|none|none|
|ScaleDownBehavior|object|false|none|none|
|CustomAmiId|object|false|none|none|
|EbsRootVolumeSize|object|false|none|none|
|RepoUpgradeOnBoot|object|false|none|none|
|KerberosAttributes|object|false|none|none|
|StepConcurrencyLevel|object|false|none|none|
|ManagedScalingPolicy|object|false|none|none|
|PlacementGroupConfigs|object|false|none|none|
|AutoTerminationPolicy|[AutoTerminationPolicy](#schemaautoterminationpolicy)|false|none|An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.|
|OSReleaseLabel|object|false|none|none|

<h2 id="tocS_SetTerminationProtectionInput">SetTerminationProtectionInput</h2>
<!-- backwards compatibility -->
<a id="schemasetterminationprotectioninput"></a>
<a id="schema_SetTerminationProtectionInput"></a>
<a id="tocSsetterminationprotectioninput"></a>
<a id="tocssetterminationprotectioninput"></a>

```json
{
  "JobFlowIds": {},
  "TerminationProtected": {}
}
```

 The input argument to the <a>TerminationProtection</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobFlowIds|object|true|none|none|
|TerminationProtected|object|true|none|none|

<h2 id="tocS_SetVisibleToAllUsersInput">SetVisibleToAllUsersInput</h2>
<!-- backwards compatibility -->
<a id="schemasetvisibletoallusersinput"></a>
<a id="schema_SetVisibleToAllUsersInput"></a>
<a id="tocSsetvisibletoallusersinput"></a>
<a id="tocssetvisibletoallusersinput"></a>

```json
{
  "JobFlowIds": {},
  "VisibleToAllUsers": {}
}
```

The input to the SetVisibleToAllUsers action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobFlowIds|object|true|none|none|
|VisibleToAllUsers|object|true|none|none|

<h2 id="tocS_StartNotebookExecutionOutput">StartNotebookExecutionOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartnotebookexecutionoutput"></a>
<a id="schema_StartNotebookExecutionOutput"></a>
<a id="tocSstartnotebookexecutionoutput"></a>
<a id="tocsstartnotebookexecutionoutput"></a>

```json
{
  "NotebookExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookExecutionId|object|false|none|none|

<h2 id="tocS_StartNotebookExecutionInput">StartNotebookExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemastartnotebookexecutioninput"></a>
<a id="schema_StartNotebookExecutionInput"></a>
<a id="tocSstartnotebookexecutioninput"></a>
<a id="tocsstartnotebookexecutioninput"></a>

```json
{
  "EditorId": {},
  "RelativePath": {},
  "NotebookExecutionName": {},
  "NotebookParams": {},
  "ExecutionEngine": {
    "Id": {},
    "Type": {},
    "MasterInstanceSecurityGroupId": {}
  },
  "ServiceRole": {},
  "NotebookInstanceSecurityGroupId": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EditorId|object|true|none|none|
|RelativePath|object|true|none|none|
|NotebookExecutionName|object|false|none|none|
|NotebookParams|object|false|none|none|
|ExecutionEngine|object|true|none|none|
|ServiceRole|object|true|none|none|
|NotebookInstanceSecurityGroupId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_StopNotebookExecutionInput">StopNotebookExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemastopnotebookexecutioninput"></a>
<a id="schema_StopNotebookExecutionInput"></a>
<a id="tocSstopnotebookexecutioninput"></a>
<a id="tocsstopnotebookexecutioninput"></a>

```json
{
  "NotebookExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookExecutionId|object|true|none|none|

<h2 id="tocS_TerminateJobFlowsInput">TerminateJobFlowsInput</h2>
<!-- backwards compatibility -->
<a id="schematerminatejobflowsinput"></a>
<a id="schema_TerminateJobFlowsInput"></a>
<a id="tocSterminatejobflowsinput"></a>
<a id="tocsterminatejobflowsinput"></a>

```json
{
  "JobFlowIds": {}
}
```

 Input to the <a>TerminateJobFlows</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobFlowIds|object|true|none|none|

<h2 id="tocS_UpdateStudioInput">UpdateStudioInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestudioinput"></a>
<a id="schema_UpdateStudioInput"></a>
<a id="tocSupdatestudioinput"></a>
<a id="tocsupdatestudioinput"></a>

```json
{
  "StudioId": {},
  "Name": {},
  "Description": {},
  "SubnetIds": {},
  "DefaultS3Location": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StudioId|object|true|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|SubnetIds|object|false|none|none|
|DefaultS3Location|object|false|none|none|

<h2 id="tocS_UpdateStudioSessionMappingInput">UpdateStudioSessionMappingInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestudiosessionmappinginput"></a>
<a id="schema_UpdateStudioSessionMappingInput"></a>
<a id="tocSupdatestudiosessionmappinginput"></a>
<a id="tocsupdatestudiosessionmappinginput"></a>

```json
{
  "StudioId": {},
  "IdentityId": {},
  "IdentityName": {},
  "IdentityType": {},
  "SessionPolicyArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StudioId|object|true|none|none|
|IdentityId|object|false|none|none|
|IdentityName|object|false|none|none|
|IdentityType|object|true|none|none|
|SessionPolicyArn|object|true|none|none|

<h2 id="tocS_ActionOnFailure">ActionOnFailure</h2>
<!-- backwards compatibility -->
<a id="schemaactiononfailure"></a>
<a id="schema_ActionOnFailure"></a>
<a id="tocSactiononfailure"></a>
<a id="tocsactiononfailure"></a>

```json
"TERMINATE_JOB_FLOW"
```

<h2 id="tocS_XmlStringMaxLen256">XmlStringMaxLen256</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstringmaxlen256"></a>
<a id="schema_XmlStringMaxLen256"></a>
<a id="tocSxmlstringmaxlen256"></a>
<a id="tocsxmlstringmaxlen256"></a>

```json
"string"
```

<h2 id="tocS_InstanceFleetConfig">InstanceFleetConfig</h2>
<!-- backwards compatibility -->
<a id="schemainstancefleetconfig"></a>
<a id="schema_InstanceFleetConfig"></a>
<a id="tocSinstancefleetconfig"></a>
<a id="tocsinstancefleetconfig"></a>

```json
{
  "Name": {},
  "InstanceFleetType": {},
  "TargetOnDemandCapacity": {},
  "TargetSpotCapacity": {},
  "InstanceTypeConfigs": {},
  "LaunchSpecifications": {
    "SpotSpecification": {
      "TimeoutDurationMinutes": {},
      "TimeoutAction": {},
      "BlockDurationMinutes": {},
      "AllocationStrategy": {}
    },
    "OnDemandSpecification": {
      "AllocationStrategy": {},
      "CapacityReservationOptions": {
        "UsageStrategy": {},
        "CapacityReservationPreference": {},
        "CapacityReservationResourceGroupArn": {}
      }
    }
  },
  "ResizeSpecifications": {
    "SpotResizeSpecification": {
      "TimeoutDurationMinutes": {}
    },
    "OnDemandResizeSpecification": {
      "TimeoutDurationMinutes": {}
    }
  }
}
```

<p>The configuration that defines an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|InstanceFleetType|object|true|none|none|
|TargetOnDemandCapacity|object|false|none|none|
|TargetSpotCapacity|object|false|none|none|
|InstanceTypeConfigs|object|false|none|none|
|LaunchSpecifications|object|false|none|none|
|ResizeSpecifications|object|false|none|none|

<h2 id="tocS_InstanceFleetId">InstanceFleetId</h2>
<!-- backwards compatibility -->
<a id="schemainstancefleetid"></a>
<a id="schema_InstanceFleetId"></a>
<a id="tocSinstancefleetid"></a>
<a id="tocsinstancefleetid"></a>

```json
"string"
```

<h2 id="tocS_ArnType">ArnType</h2>
<!-- backwards compatibility -->
<a id="schemaarntype"></a>
<a id="schema_ArnType"></a>
<a id="tocSarntype"></a>
<a id="tocsarntype"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_InstanceGroupConfigList">InstanceGroupConfigList</h2>
<!-- backwards compatibility -->
<a id="schemainstancegroupconfiglist"></a>
<a id="schema_InstanceGroupConfigList"></a>
<a id="tocSinstancegroupconfiglist"></a>
<a id="tocsinstancegroupconfiglist"></a>

```json
[
  {
    "Name": {},
    "Market": {},
    "InstanceRole": {},
    "BidPrice": {},
    "InstanceType": {},
    "InstanceCount": {},
    "Configurations": {},
    "EbsConfiguration": {
      "EbsBlockDeviceConfigs": {},
      "EbsOptimized": {}
    },
    "AutoScalingPolicy": {
      "Constraints": {
        "MinCapacity": {},
        "MaxCapacity": {}
      },
      "Rules": {}
    },
    "CustomAmiId": {}
  }
]
```

<h2 id="tocS_InstanceGroupIdsList">InstanceGroupIdsList</h2>
<!-- backwards compatibility -->
<a id="schemainstancegroupidslist"></a>
<a id="schema_InstanceGroupIdsList"></a>
<a id="tocSinstancegroupidslist"></a>
<a id="tocsinstancegroupidslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StepConfigList">StepConfigList</h2>
<!-- backwards compatibility -->
<a id="schemastepconfiglist"></a>
<a id="schema_StepConfigList"></a>
<a id="tocSstepconfiglist"></a>
<a id="tocsstepconfiglist"></a>

```json
[
  {
    "Name": {},
    "ActionOnFailure": {},
    "HadoopJarStep": {
      "Properties": {},
      "Jar": {},
      "MainClass": {},
      "Args": {}
    }
  }
]
```

<h2 id="tocS_StepIdsList">StepIdsList</h2>
<!-- backwards compatibility -->
<a id="schemastepidslist"></a>
<a id="schema_StepIdsList"></a>
<a id="tocSstepidslist"></a>
<a id="tocsstepidslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"string"
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
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_AdjustmentType">AdjustmentType</h2>
<!-- backwards compatibility -->
<a id="schemaadjustmenttype"></a>
<a id="schema_AdjustmentType"></a>
<a id="tocSadjustmenttype"></a>
<a id="tocsadjustmenttype"></a>

```json
"CHANGE_IN_CAPACITY"
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

<h2 id="tocS_StringList">StringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_StringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StringMap">StringMap</h2>
<!-- backwards compatibility -->
<a id="schemastringmap"></a>
<a id="schema_StringMap"></a>
<a id="tocSstringmap"></a>
<a id="tocsstringmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_Application">Application</h2>
<!-- backwards compatibility -->
<a id="schemaapplication"></a>
<a id="schema_Application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
{
  "Name": {},
  "Version": {},
  "Args": {},
  "AdditionalInfo": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>With Amazon EMR release version 4.0 and later, the only accepted parameter is the application name. To pass arguments to applications, you use configuration classifications specified using configuration JSON objects. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p> <p>With earlier Amazon EMR releases, the application is any Amazon or third-party software that you can add to the cluster. This structure contains a list of strings that indicates the software to use with the cluster and accepts a user argument list. Amazon EMR accepts and forwards the argument list to the corresponding installation script as bootstrap action argument.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Version|object|false|none|none|
|Args|object|false|none|none|
|AdditionalInfo|object|false|none|none|

<h2 id="tocS_ApplicationList">ApplicationList</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationlist"></a>
<a id="schema_ApplicationList"></a>
<a id="tocSapplicationlist"></a>
<a id="tocsapplicationlist"></a>

```json
[
  {
    "Name": {},
    "Version": {},
    "Args": {},
    "AdditionalInfo": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_AuthMode">AuthMode</h2>
<!-- backwards compatibility -->
<a id="schemaauthmode"></a>
<a id="schema_AuthMode"></a>
<a id="tocSauthmode"></a>
<a id="tocsauthmode"></a>

```json
"SSO"
```

<h2 id="tocS_ScalingConstraints">ScalingConstraints</h2>
<!-- backwards compatibility -->
<a id="schemascalingconstraints"></a>
<a id="schema_ScalingConstraints"></a>
<a id="tocSscalingconstraints"></a>
<a id="tocsscalingconstraints"></a>

```json
{
  "MinCapacity": {},
  "MaxCapacity": {}
}
```

The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or below these limits.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MinCapacity|object|true|none|none|
|MaxCapacity|object|true|none|none|

<h2 id="tocS_ScalingRuleList">ScalingRuleList</h2>
<!-- backwards compatibility -->
<a id="schemascalingrulelist"></a>
<a id="schema_ScalingRuleList"></a>
<a id="tocSscalingrulelist"></a>
<a id="tocsscalingrulelist"></a>

```json
[
  {
    "Name": {},
    "Description": {},
    "Action": {
      "Market": {},
      "SimpleScalingPolicyConfiguration": {
        "AdjustmentType": {},
        "ScalingAdjustment": {},
        "CoolDown": {}
      }
    },
    "Trigger": {
      "CloudWatchAlarmDefinition": {
        "ComparisonOperator": {},
        "EvaluationPeriods": {},
        "MetricName": {},
        "Namespace": {},
        "Period": {},
        "Statistic": {},
        "Threshold": {},
        "Unit": {},
        "Dimensions": {}
      }
    }
  }
]
```

<h2 id="tocS_AutoScalingPolicy">AutoScalingPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingpolicy"></a>
<a id="schema_AutoScalingPolicy"></a>
<a id="tocSautoscalingpolicy"></a>
<a id="tocsautoscalingpolicy"></a>

```json
{
  "Constraints": {
    "MinCapacity": {},
    "MaxCapacity": {}
  },
  "Rules": {}
}
```

An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. An automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Constraints|object|true|none|none|
|Rules|object|true|none|none|

<h2 id="tocS_AutoScalingPolicyStatus">AutoScalingPolicyStatus</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingpolicystatus"></a>
<a id="schema_AutoScalingPolicyStatus"></a>
<a id="tocSautoscalingpolicystatus"></a>
<a id="tocsautoscalingpolicystatus"></a>

```json
{
  "State": {},
  "StateChangeReason": {
    "Code": {},
    "Message": {}
  }
}
```

The status of an automatic scaling policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|
|StateChangeReason|object|false|none|none|

<h2 id="tocS_AutoScalingPolicyDescription">AutoScalingPolicyDescription</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingpolicydescription"></a>
<a id="schema_AutoScalingPolicyDescription"></a>
<a id="tocSautoscalingpolicydescription"></a>
<a id="tocsautoscalingpolicydescription"></a>

```json
{
  "Status": {
    "State": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    }
  },
  "Constraints": {
    "MinCapacity": {},
    "MaxCapacity": {}
  },
  "Rules": {}
}
```

An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|Constraints|object|false|none|none|
|Rules|object|false|none|none|

<h2 id="tocS_AutoScalingPolicyState">AutoScalingPolicyState</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingpolicystate"></a>
<a id="schema_AutoScalingPolicyState"></a>
<a id="tocSautoscalingpolicystate"></a>
<a id="tocsautoscalingpolicystate"></a>

```json
"PENDING"
```

<h2 id="tocS_AutoScalingPolicyStateChangeReasonCode">AutoScalingPolicyStateChangeReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingpolicystatechangereasoncode"></a>
<a id="schema_AutoScalingPolicyStateChangeReasonCode"></a>
<a id="tocSautoscalingpolicystatechangereasoncode"></a>
<a id="tocsautoscalingpolicystatechangereasoncode"></a>

```json
"USER_REQUEST"
```

<h2 id="tocS_AutoScalingPolicyStateChangeReason">AutoScalingPolicyStateChangeReason</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingpolicystatechangereason"></a>
<a id="schema_AutoScalingPolicyStateChangeReason"></a>
<a id="tocSautoscalingpolicystatechangereason"></a>
<a id="tocsautoscalingpolicystatechangereason"></a>

```json
{
  "Code": {},
  "Message": {}
}
```

The reason for an <a>AutoScalingPolicyStatus</a> change.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_AutoTerminationPolicy">AutoTerminationPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaautoterminationpolicy"></a>
<a id="schema_AutoTerminationPolicy"></a>
<a id="tocSautoterminationpolicy"></a>
<a id="tocsautoterminationpolicy"></a>

```json
{
  "IdleTimeout": {}
}
```

An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdleTimeout|object|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_PortRanges">PortRanges</h2>
<!-- backwards compatibility -->
<a id="schemaportranges"></a>
<a id="schema_PortRanges"></a>
<a id="tocSportranges"></a>
<a id="tocsportranges"></a>

```json
[
  {
    "MinRange": {},
    "MaxRange": {}
  }
]
```

<h2 id="tocS_BlockPublicAccessConfiguration">BlockPublicAccessConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemablockpublicaccessconfiguration"></a>
<a id="schema_BlockPublicAccessConfiguration"></a>
<a id="tocSblockpublicaccessconfiguration"></a>
<a id="tocsblockpublicaccessconfiguration"></a>

```json
{
  "BlockPublicSecurityGroupRules": {},
  "PermittedPublicSecurityGroupRuleRanges": {}
}
```

A configuration for Amazon EMR block public access. When <code>BlockPublicSecurityGroupRules</code> is set to <code>true</code>, Amazon EMR prevents cluster creation if one of the cluster's security groups has a rule that allows inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using <code>PermittedPublicSecurityGroupRuleRanges</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockPublicSecurityGroupRules|object|true|none|none|
|PermittedPublicSecurityGroupRuleRanges|object|false|none|none|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_BlockPublicAccessConfigurationMetadata">BlockPublicAccessConfigurationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemablockpublicaccessconfigurationmetadata"></a>
<a id="schema_BlockPublicAccessConfigurationMetadata"></a>
<a id="tocSblockpublicaccessconfigurationmetadata"></a>
<a id="tocsblockpublicaccessconfigurationmetadata"></a>

```json
{
  "CreationDateTime": {},
  "CreatedByArn": {}
}
```

Properties that describe the Amazon Web Services principal that created the <code>BlockPublicAccessConfiguration</code> using the <code>PutBlockPublicAccessConfiguration</code> action as well as the date and time that the configuration was created. Each time a configuration for block public access is updated, Amazon EMR updates this metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationDateTime|object|true|none|none|
|CreatedByArn|object|true|none|none|

<h2 id="tocS_BooleanObject">BooleanObject</h2>
<!-- backwards compatibility -->
<a id="schemabooleanobject"></a>
<a id="schema_BooleanObject"></a>
<a id="tocSbooleanobject"></a>
<a id="tocsbooleanobject"></a>

```json
true
```

<h2 id="tocS_ScriptBootstrapActionConfig">ScriptBootstrapActionConfig</h2>
<!-- backwards compatibility -->
<a id="schemascriptbootstrapactionconfig"></a>
<a id="schema_ScriptBootstrapActionConfig"></a>
<a id="tocSscriptbootstrapactionconfig"></a>
<a id="tocsscriptbootstrapactionconfig"></a>

```json
{
  "Path": {},
  "Args": {}
}
```

Configuration of the script to run during a bootstrap action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Path|object|true|none|none|
|Args|object|false|none|none|

<h2 id="tocS_BootstrapActionConfig">BootstrapActionConfig</h2>
<!-- backwards compatibility -->
<a id="schemabootstrapactionconfig"></a>
<a id="schema_BootstrapActionConfig"></a>
<a id="tocSbootstrapactionconfig"></a>
<a id="tocsbootstrapactionconfig"></a>

```json
{
  "Name": {},
  "ScriptBootstrapAction": {
    "Path": {},
    "Args": {}
  }
}
```

Configuration of a bootstrap action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ScriptBootstrapAction|object|true|none|none|

<h2 id="tocS_BootstrapActionConfigList">BootstrapActionConfigList</h2>
<!-- backwards compatibility -->
<a id="schemabootstrapactionconfiglist"></a>
<a id="schema_BootstrapActionConfigList"></a>
<a id="tocSbootstrapactionconfiglist"></a>
<a id="tocsbootstrapactionconfiglist"></a>

```json
[
  {
    "Name": {},
    "ScriptBootstrapAction": {
      "Path": {},
      "Args": {}
    }
  }
]
```

<h2 id="tocS_BootstrapActionDetail">BootstrapActionDetail</h2>
<!-- backwards compatibility -->
<a id="schemabootstrapactiondetail"></a>
<a id="schema_BootstrapActionDetail"></a>
<a id="tocSbootstrapactiondetail"></a>
<a id="tocsbootstrapactiondetail"></a>

```json
{
  "BootstrapActionConfig": {
    "Name": {},
    "ScriptBootstrapAction": {
      "Path": {},
      "Args": {}
    }
  }
}
```

Reports the configuration of a bootstrap action in a cluster (job flow).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BootstrapActionConfig|object|false|none|none|

<h2 id="tocS_BootstrapActionDetailList">BootstrapActionDetailList</h2>
<!-- backwards compatibility -->
<a id="schemabootstrapactiondetaillist"></a>
<a id="schema_BootstrapActionDetailList"></a>
<a id="tocSbootstrapactiondetaillist"></a>
<a id="tocsbootstrapactiondetaillist"></a>

```json
[
  {
    "BootstrapActionConfig": {
      "Name": {},
      "ScriptBootstrapAction": {
        "Path": {},
        "Args": {}
      }
    }
  }
]
```

<h2 id="tocS_StepId">StepId</h2>
<!-- backwards compatibility -->
<a id="schemastepid"></a>
<a id="schema_StepId"></a>
<a id="tocSstepid"></a>
<a id="tocsstepid"></a>

```json
"string"
```

<h2 id="tocS_CancelStepsRequestStatus">CancelStepsRequestStatus</h2>
<!-- backwards compatibility -->
<a id="schemacancelstepsrequeststatus"></a>
<a id="schema_CancelStepsRequestStatus"></a>
<a id="tocScancelstepsrequeststatus"></a>
<a id="tocscancelstepsrequeststatus"></a>

```json
"SUBMITTED"
```

<h2 id="tocS_CancelStepsInfo">CancelStepsInfo</h2>
<!-- backwards compatibility -->
<a id="schemacancelstepsinfo"></a>
<a id="schema_CancelStepsInfo"></a>
<a id="tocScancelstepsinfo"></a>
<a id="tocscancelstepsinfo"></a>

```json
{
  "StepId": {},
  "Status": {},
  "Reason": {}
}
```

Specification of the status of a CancelSteps request. Available only in Amazon EMR version 4.8.0 and later, excluding version 5.0.0.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StepId|object|false|none|none|
|Status|object|false|none|none|
|Reason|object|false|none|none|

<h2 id="tocS_CancelStepsInfoList">CancelStepsInfoList</h2>
<!-- backwards compatibility -->
<a id="schemacancelstepsinfolist"></a>
<a id="schema_CancelStepsInfoList"></a>
<a id="tocScancelstepsinfolist"></a>
<a id="tocscancelstepsinfolist"></a>

```json
[
  {
    "StepId": {},
    "Status": {},
    "Reason": {}
  }
]
```

<h2 id="tocS_StepCancellationOption">StepCancellationOption</h2>
<!-- backwards compatibility -->
<a id="schemastepcancellationoption"></a>
<a id="schema_StepCancellationOption"></a>
<a id="tocSstepcancellationoption"></a>
<a id="tocsstepcancellationoption"></a>

```json
"SEND_INTERRUPT"
```

<h2 id="tocS_ComparisonOperator">ComparisonOperator</h2>
<!-- backwards compatibility -->
<a id="schemacomparisonoperator"></a>
<a id="schema_ComparisonOperator"></a>
<a id="tocScomparisonoperator"></a>
<a id="tocscomparisonoperator"></a>

```json
"GREATER_THAN_OR_EQUAL"
```

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_Statistic">Statistic</h2>
<!-- backwards compatibility -->
<a id="schemastatistic"></a>
<a id="schema_Statistic"></a>
<a id="tocSstatistic"></a>
<a id="tocsstatistic"></a>

```json
"SAMPLE_COUNT"
```

<h2 id="tocS_NonNegativeDouble">NonNegativeDouble</h2>
<!-- backwards compatibility -->
<a id="schemanonnegativedouble"></a>
<a id="schema_NonNegativeDouble"></a>
<a id="tocSnonnegativedouble"></a>
<a id="tocsnonnegativedouble"></a>

```json
0
```

<h2 id="tocS_Unit">Unit</h2>
<!-- backwards compatibility -->
<a id="schemaunit"></a>
<a id="schema_Unit"></a>
<a id="tocSunit"></a>
<a id="tocsunit"></a>

```json
"NONE"
```

<h2 id="tocS_MetricDimensionList">MetricDimensionList</h2>
<!-- backwards compatibility -->
<a id="schemametricdimensionlist"></a>
<a id="schema_MetricDimensionList"></a>
<a id="tocSmetricdimensionlist"></a>
<a id="tocsmetricdimensionlist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_CloudWatchAlarmDefinition">CloudWatchAlarmDefinition</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchalarmdefinition"></a>
<a id="schema_CloudWatchAlarmDefinition"></a>
<a id="tocScloudwatchalarmdefinition"></a>
<a id="tocscloudwatchalarmdefinition"></a>

```json
{
  "ComparisonOperator": {},
  "EvaluationPeriods": {},
  "MetricName": {},
  "Namespace": {},
  "Period": {},
  "Statistic": {},
  "Threshold": {},
  "Unit": {},
  "Dimensions": {}
}
```

The definition of a CloudWatch metric alarm, which determines when an automatic scaling activity is triggered. When the defined alarm conditions are satisfied, scaling activity begins.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComparisonOperator|object|true|none|none|
|EvaluationPeriods|object|false|none|none|
|MetricName|object|true|none|none|
|Namespace|object|false|none|none|
|Period|object|true|none|none|
|Statistic|object|false|none|none|
|Threshold|object|true|none|none|
|Unit|object|false|none|none|
|Dimensions|object|false|none|none|

<h2 id="tocS_ClusterId">ClusterId</h2>
<!-- backwards compatibility -->
<a id="schemaclusterid"></a>
<a id="schema_ClusterId"></a>
<a id="tocSclusterid"></a>
<a id="tocsclusterid"></a>

```json
"string"
```

<h2 id="tocS_ClusterStatus">ClusterStatus</h2>
<!-- backwards compatibility -->
<a id="schemaclusterstatus"></a>
<a id="schema_ClusterStatus"></a>
<a id="tocSclusterstatus"></a>
<a id="tocsclusterstatus"></a>

```json
{
  "State": {},
  "StateChangeReason": {
    "Code": {},
    "Message": {}
  },
  "Timeline": {
    "CreationDateTime": {},
    "ReadyDateTime": {},
    "EndDateTime": {}
  },
  "ErrorDetails": {}
}
```

The detailed status of the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|
|StateChangeReason|object|false|none|none|
|Timeline|object|false|none|none|
|ErrorDetails|object|false|none|none|

<h2 id="tocS_Ec2InstanceAttributes">Ec2InstanceAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaec2instanceattributes"></a>
<a id="schema_Ec2InstanceAttributes"></a>
<a id="tocSec2instanceattributes"></a>
<a id="tocsec2instanceattributes"></a>

```json
{
  "Ec2KeyName": {},
  "Ec2SubnetId": {},
  "RequestedEc2SubnetIds": {},
  "Ec2AvailabilityZone": {},
  "RequestedEc2AvailabilityZones": {},
  "IamInstanceProfile": {},
  "EmrManagedMasterSecurityGroup": {},
  "EmrManagedSlaveSecurityGroup": {},
  "ServiceAccessSecurityGroup": {},
  "AdditionalMasterSecurityGroups": {},
  "AdditionalSlaveSecurityGroups": {}
}
```

Provides information about the EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Ec2KeyName|object|false|none|none|
|Ec2SubnetId|object|false|none|none|
|RequestedEc2SubnetIds|object|false|none|none|
|Ec2AvailabilityZone|object|false|none|none|
|RequestedEc2AvailabilityZones|object|false|none|none|
|IamInstanceProfile|object|false|none|none|
|EmrManagedMasterSecurityGroup|object|false|none|none|
|EmrManagedSlaveSecurityGroup|object|false|none|none|
|ServiceAccessSecurityGroup|object|false|none|none|
|AdditionalMasterSecurityGroups|object|false|none|none|
|AdditionalSlaveSecurityGroups|object|false|none|none|

<h2 id="tocS_InstanceCollectionType">InstanceCollectionType</h2>
<!-- backwards compatibility -->
<a id="schemainstancecollectiontype"></a>
<a id="schema_InstanceCollectionType"></a>
<a id="tocSinstancecollectiontype"></a>
<a id="tocsinstancecollectiontype"></a>

```json
"INSTANCE_FLEET"
```

<h2 id="tocS_ConfigurationList">ConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationlist"></a>
<a id="schema_ConfigurationList"></a>
<a id="tocSconfigurationlist"></a>
<a id="tocsconfigurationlist"></a>

```json
[
  {
    "Classification": {},
    "Configurations": {},
    "Properties": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_XmlString">XmlString</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstring"></a>
<a id="schema_XmlString"></a>
<a id="tocSxmlstring"></a>
<a id="tocsxmlstring"></a>

```json
"string"
```

<h2 id="tocS_ScaleDownBehavior">ScaleDownBehavior</h2>
<!-- backwards compatibility -->
<a id="schemascaledownbehavior"></a>
<a id="schema_ScaleDownBehavior"></a>
<a id="tocSscaledownbehavior"></a>
<a id="tocsscaledownbehavior"></a>

```json
"TERMINATE_AT_INSTANCE_HOUR"
```

<h2 id="tocS_RepoUpgradeOnBoot">RepoUpgradeOnBoot</h2>
<!-- backwards compatibility -->
<a id="schemarepoupgradeonboot"></a>
<a id="schema_RepoUpgradeOnBoot"></a>
<a id="tocSrepoupgradeonboot"></a>
<a id="tocsrepoupgradeonboot"></a>

```json
"SECURITY"
```

<h2 id="tocS_KerberosAttributes">KerberosAttributes</h2>
<!-- backwards compatibility -->
<a id="schemakerberosattributes"></a>
<a id="schema_KerberosAttributes"></a>
<a id="tocSkerberosattributes"></a>
<a id="tocskerberosattributes"></a>

```json
{
  "Realm": {},
  "KdcAdminPassword": {},
  "CrossRealmTrustPrincipalPassword": {},
  "ADDomainJoinUser": {},
  "ADDomainJoinPassword": {}
}
```

Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>Amazon EMR Management Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Realm|object|true|none|none|
|KdcAdminPassword|object|true|none|none|
|CrossRealmTrustPrincipalPassword|object|false|none|none|
|ADDomainJoinUser|object|false|none|none|
|ADDomainJoinPassword|object|false|none|none|

<h2 id="tocS_OptionalArnType">OptionalArnType</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalarntype"></a>
<a id="schema_OptionalArnType"></a>
<a id="tocSoptionalarntype"></a>
<a id="tocsoptionalarntype"></a>

```json
"string"
```

<h2 id="tocS_PlacementGroupConfigList">PlacementGroupConfigList</h2>
<!-- backwards compatibility -->
<a id="schemaplacementgroupconfiglist"></a>
<a id="schema_PlacementGroupConfigList"></a>
<a id="tocSplacementgroupconfiglist"></a>
<a id="tocsplacementgroupconfiglist"></a>

```json
[
  {
    "InstanceRole": {},
    "PlacementStrategy": {}
  }
]
```

<h2 id="tocS_Cluster">Cluster</h2>
<!-- backwards compatibility -->
<a id="schemacluster"></a>
<a id="schema_Cluster"></a>
<a id="tocScluster"></a>
<a id="tocscluster"></a>

```json
{
  "Id": {},
  "Name": {},
  "Status": {
    "State": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "Timeline": {
      "CreationDateTime": {},
      "ReadyDateTime": {},
      "EndDateTime": {}
    },
    "ErrorDetails": {}
  },
  "Ec2InstanceAttributes": {
    "Ec2KeyName": {},
    "Ec2SubnetId": {},
    "RequestedEc2SubnetIds": {},
    "Ec2AvailabilityZone": {},
    "RequestedEc2AvailabilityZones": {},
    "IamInstanceProfile": {},
    "EmrManagedMasterSecurityGroup": {},
    "EmrManagedSlaveSecurityGroup": {},
    "ServiceAccessSecurityGroup": {},
    "AdditionalMasterSecurityGroups": {},
    "AdditionalSlaveSecurityGroups": {}
  },
  "InstanceCollectionType": {},
  "LogUri": {},
  "LogEncryptionKmsKeyId": {},
  "RequestedAmiVersion": {},
  "RunningAmiVersion": {},
  "ReleaseLabel": {},
  "AutoTerminate": {},
  "TerminationProtected": {},
  "VisibleToAllUsers": {},
  "Applications": {},
  "Tags": {},
  "ServiceRole": {},
  "NormalizedInstanceHours": {},
  "MasterPublicDnsName": {},
  "Configurations": {},
  "SecurityConfiguration": {},
  "AutoScalingRole": {},
  "ScaleDownBehavior": {},
  "CustomAmiId": {},
  "EbsRootVolumeSize": {},
  "RepoUpgradeOnBoot": {},
  "KerberosAttributes": {
    "Realm": {},
    "KdcAdminPassword": {},
    "CrossRealmTrustPrincipalPassword": {},
    "ADDomainJoinUser": {},
    "ADDomainJoinPassword": {}
  },
  "ClusterArn": {},
  "OutpostArn": {},
  "StepConcurrencyLevel": {},
  "PlacementGroups": {},
  "OSReleaseLabel": {}
}
```

The detailed description of the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|Ec2InstanceAttributes|object|false|none|none|
|InstanceCollectionType|object|false|none|none|
|LogUri|object|false|none|none|
|LogEncryptionKmsKeyId|object|false|none|none|
|RequestedAmiVersion|object|false|none|none|
|RunningAmiVersion|object|false|none|none|
|ReleaseLabel|object|false|none|none|
|AutoTerminate|object|false|none|none|
|TerminationProtected|object|false|none|none|
|VisibleToAllUsers|object|false|none|none|
|Applications|object|false|none|none|
|Tags|object|false|none|none|
|ServiceRole|object|false|none|none|
|NormalizedInstanceHours|object|false|none|none|
|MasterPublicDnsName|object|false|none|none|
|Configurations|object|false|none|none|
|SecurityConfiguration|object|false|none|none|
|AutoScalingRole|object|false|none|none|
|ScaleDownBehavior|object|false|none|none|
|CustomAmiId|object|false|none|none|
|EbsRootVolumeSize|object|false|none|none|
|RepoUpgradeOnBoot|object|false|none|none|
|KerberosAttributes|object|false|none|none|
|ClusterArn|object|false|none|none|
|OutpostArn|object|false|none|none|
|StepConcurrencyLevel|object|false|none|none|
|PlacementGroups|object|false|none|none|
|OSReleaseLabel|object|false|none|none|

<h2 id="tocS_ClusterState">ClusterState</h2>
<!-- backwards compatibility -->
<a id="schemaclusterstate"></a>
<a id="schema_ClusterState"></a>
<a id="tocSclusterstate"></a>
<a id="tocsclusterstate"></a>

```json
"STARTING"
```

<h2 id="tocS_ClusterStateChangeReasonCode">ClusterStateChangeReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemaclusterstatechangereasoncode"></a>
<a id="schema_ClusterStateChangeReasonCode"></a>
<a id="tocSclusterstatechangereasoncode"></a>
<a id="tocsclusterstatechangereasoncode"></a>

```json
"INTERNAL_ERROR"
```

<h2 id="tocS_ClusterStateChangeReason">ClusterStateChangeReason</h2>
<!-- backwards compatibility -->
<a id="schemaclusterstatechangereason"></a>
<a id="schema_ClusterStateChangeReason"></a>
<a id="tocSclusterstatechangereason"></a>
<a id="tocsclusterstatechangereason"></a>

```json
{
  "Code": {},
  "Message": {}
}
```

The reason that the cluster changed to its current state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_ClusterStateList">ClusterStateList</h2>
<!-- backwards compatibility -->
<a id="schemaclusterstatelist"></a>
<a id="schema_ClusterStateList"></a>
<a id="tocSclusterstatelist"></a>
<a id="tocsclusterstatelist"></a>

```json
[
  "STARTING"
]
```

<h2 id="tocS_ClusterTimeline">ClusterTimeline</h2>
<!-- backwards compatibility -->
<a id="schemaclustertimeline"></a>
<a id="schema_ClusterTimeline"></a>
<a id="tocSclustertimeline"></a>
<a id="tocsclustertimeline"></a>

```json
{
  "CreationDateTime": {},
  "ReadyDateTime": {},
  "EndDateTime": {}
}
```

Represents the timeline of the cluster's lifecycle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationDateTime|object|false|none|none|
|ReadyDateTime|object|false|none|none|
|EndDateTime|object|false|none|none|

<h2 id="tocS_ErrorDetailList">ErrorDetailList</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetaillist"></a>
<a id="schema_ErrorDetailList"></a>
<a id="tocSerrordetaillist"></a>
<a id="tocserrordetaillist"></a>

```json
[
  {
    "ErrorCode": {},
    "ErrorData": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_ClusterSummary">ClusterSummary</h2>
<!-- backwards compatibility -->
<a id="schemaclustersummary"></a>
<a id="schema_ClusterSummary"></a>
<a id="tocSclustersummary"></a>
<a id="tocsclustersummary"></a>

```json
{
  "Id": {},
  "Name": {},
  "Status": {
    "State": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "Timeline": {
      "CreationDateTime": {},
      "ReadyDateTime": {},
      "EndDateTime": {}
    },
    "ErrorDetails": {}
  },
  "NormalizedInstanceHours": {},
  "ClusterArn": {},
  "OutpostArn": {}
}
```

The summary description of the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|NormalizedInstanceHours|object|false|none|none|
|ClusterArn|object|false|none|none|
|OutpostArn|object|false|none|none|

<h2 id="tocS_ClusterSummaryList">ClusterSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaclustersummarylist"></a>
<a id="schema_ClusterSummaryList"></a>
<a id="tocSclustersummarylist"></a>
<a id="tocsclustersummarylist"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Status": {
      "State": {},
      "StateChangeReason": {
        "Code": {},
        "Message": {}
      },
      "Timeline": {
        "CreationDateTime": {},
        "ReadyDateTime": {},
        "EndDateTime": {}
      },
      "ErrorDetails": {}
    },
    "NormalizedInstanceHours": {},
    "ClusterArn": {},
    "OutpostArn": {}
  }
]
```

<h2 id="tocS_Command">Command</h2>
<!-- backwards compatibility -->
<a id="schemacommand"></a>
<a id="schema_Command"></a>
<a id="tocScommand"></a>
<a id="tocscommand"></a>

```json
{
  "Name": {},
  "ScriptPath": {},
  "Args": {}
}
```

An entity describing an executable that runs on a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|ScriptPath|object|false|none|none|
|Args|object|false|none|none|

<h2 id="tocS_CommandList">CommandList</h2>
<!-- backwards compatibility -->
<a id="schemacommandlist"></a>
<a id="schema_CommandList"></a>
<a id="tocScommandlist"></a>
<a id="tocscommandlist"></a>

```json
[
  {
    "Name": {},
    "ScriptPath": {},
    "Args": {}
  }
]
```

<h2 id="tocS_ComputeLimitsUnitType">ComputeLimitsUnitType</h2>
<!-- backwards compatibility -->
<a id="schemacomputelimitsunittype"></a>
<a id="schema_ComputeLimitsUnitType"></a>
<a id="tocScomputelimitsunittype"></a>
<a id="tocscomputelimitsunittype"></a>

```json
"InstanceFleetUnits"
```

<h2 id="tocS_ComputeLimits">ComputeLimits</h2>
<!-- backwards compatibility -->
<a id="schemacomputelimits"></a>
<a id="schema_ComputeLimits"></a>
<a id="tocScomputelimits"></a>
<a id="tocscomputelimits"></a>

```json
{
  "UnitType": {},
  "MinimumCapacityUnits": {},
  "MaximumCapacityUnits": {},
  "MaximumOnDemandCapacityUnits": {},
  "MaximumCoreCapacityUnits": {}
}
```

 The EC2 unit limits for a managed scaling policy. The managed scaling activity of a cluster can not be above or below these limits. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UnitType|object|true|none|none|
|MinimumCapacityUnits|object|true|none|none|
|MaximumCapacityUnits|object|true|none|none|
|MaximumOnDemandCapacityUnits|object|false|none|none|
|MaximumCoreCapacityUnits|object|false|none|none|

<h2 id="tocS_Configuration">Configuration</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguration"></a>
<a id="schema_Configuration"></a>
<a id="tocSconfiguration"></a>
<a id="tocsconfiguration"></a>

```json
{
  "Classification": {},
  "Configurations": {},
  "Properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

<note> <p>Amazon EMR releases 4.x or later.</p> </note> <p>An optional configuration specification to be used when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Classification|object|false|none|none|
|Configurations|object|false|none|none|
|Properties|object|false|none|none|

<h2 id="tocS_SubnetIdList">SubnetIdList</h2>
<!-- backwards compatibility -->
<a id="schemasubnetidlist"></a>
<a id="schema_SubnetIdList"></a>
<a id="tocSsubnetidlist"></a>
<a id="tocssubnetidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_IdentityType">IdentityType</h2>
<!-- backwards compatibility -->
<a id="schemaidentitytype"></a>
<a id="schema_IdentityType"></a>
<a id="tocSidentitytype"></a>
<a id="tocsidentitytype"></a>

```json
"USER"
```

<h2 id="tocS_UsernamePassword">UsernamePassword</h2>
<!-- backwards compatibility -->
<a id="schemausernamepassword"></a>
<a id="schema_UsernamePassword"></a>
<a id="tocSusernamepassword"></a>
<a id="tocsusernamepassword"></a>

```json
{
  "Username": {},
  "Password": {}
}
```

The username and password that you use to connect to cluster endpoints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Username|object|false|none|none|
|Password|object|false|none|none|

<h2 id="tocS_Credentials">Credentials</h2>
<!-- backwards compatibility -->
<a id="schemacredentials"></a>
<a id="schema_Credentials"></a>
<a id="tocScredentials"></a>
<a id="tocscredentials"></a>

```json
{
  "UsernamePassword": {
    "Username": {},
    "Password": {}
  }
}
```

The credentials that you can use to connect to cluster endpoints. Credentials consist of a username and a password.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UsernamePassword|object|false|none|none|

<h2 id="tocS_XmlStringList">XmlStringList</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstringlist"></a>
<a id="schema_XmlStringList"></a>
<a id="tocSxmlstringlist"></a>
<a id="tocsxmlstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_JobFlowExecutionStateList">JobFlowExecutionStateList</h2>
<!-- backwards compatibility -->
<a id="schemajobflowexecutionstatelist"></a>
<a id="schema_JobFlowExecutionStateList"></a>
<a id="tocSjobflowexecutionstatelist"></a>
<a id="tocsjobflowexecutionstatelist"></a>

```json
[
  "STARTING"
]
```

<h2 id="tocS_JobFlowDetailList">JobFlowDetailList</h2>
<!-- backwards compatibility -->
<a id="schemajobflowdetaillist"></a>
<a id="schema_JobFlowDetailList"></a>
<a id="tocSjobflowdetaillist"></a>
<a id="tocsjobflowdetaillist"></a>

```json
[
  {
    "JobFlowId": {},
    "Name": {},
    "LogUri": {},
    "LogEncryptionKmsKeyId": {},
    "AmiVersion": {},
    "ExecutionStatusDetail": {
      "State": {},
      "CreationDateTime": {},
      "StartDateTime": {},
      "ReadyDateTime": {},
      "EndDateTime": {},
      "LastStateChangeReason": {}
    },
    "Instances": {
      "MasterInstanceType": {},
      "MasterPublicDnsName": {},
      "MasterInstanceId": {},
      "SlaveInstanceType": {},
      "InstanceCount": {},
      "InstanceGroups": {},
      "NormalizedInstanceHours": {},
      "Ec2KeyName": {},
      "Ec2SubnetId": {},
      "Placement": {
        "AvailabilityZone": {},
        "AvailabilityZones": {}
      },
      "KeepJobFlowAliveWhenNoSteps": {},
      "TerminationProtected": {},
      "HadoopVersion": {}
    },
    "Steps": {},
    "BootstrapActions": {},
    "SupportedProducts": {},
    "VisibleToAllUsers": {},
    "JobFlowRole": {},
    "ServiceRole": {},
    "AutoScalingRole": {},
    "ScaleDownBehavior": {}
  }
]
```

<h2 id="tocS_NotebookExecution">NotebookExecution</h2>
<!-- backwards compatibility -->
<a id="schemanotebookexecution"></a>
<a id="schema_NotebookExecution"></a>
<a id="tocSnotebookexecution"></a>
<a id="tocsnotebookexecution"></a>

```json
{
  "NotebookExecutionId": {},
  "EditorId": {},
  "ExecutionEngine": {
    "Id": {},
    "Type": {},
    "MasterInstanceSecurityGroupId": {}
  },
  "NotebookExecutionName": {},
  "NotebookParams": {},
  "Status": {},
  "StartTime": {},
  "EndTime": {},
  "Arn": {},
  "OutputNotebookURI": {},
  "LastStateChangeReason": {},
  "NotebookInstanceSecurityGroupId": {},
  "Tags": {}
}
```

A notebook execution. An execution is a specific instance that an EMR Notebook is run using the <code>StartNotebookExecution</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookExecutionId|object|false|none|none|
|EditorId|object|false|none|none|
|ExecutionEngine|object|false|none|none|
|NotebookExecutionName|object|false|none|none|
|NotebookParams|object|false|none|none|
|Status|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Arn|object|false|none|none|
|OutputNotebookURI|object|false|none|none|
|LastStateChangeReason|object|false|none|none|
|NotebookInstanceSecurityGroupId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_MaxResultsNumber">MaxResultsNumber</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsnumber"></a>
<a id="schema_MaxResultsNumber"></a>
<a id="tocSmaxresultsnumber"></a>
<a id="tocsmaxresultsnumber"></a>

```json
1
```

<h2 id="tocS_SimplifiedApplicationList">SimplifiedApplicationList</h2>
<!-- backwards compatibility -->
<a id="schemasimplifiedapplicationlist"></a>
<a id="schema_SimplifiedApplicationList"></a>
<a id="tocSsimplifiedapplicationlist"></a>
<a id="tocssimplifiedapplicationlist"></a>

```json
[
  {
    "Name": {},
    "Version": {}
  }
]
```

<h2 id="tocS_OSReleaseList">OSReleaseList</h2>
<!-- backwards compatibility -->
<a id="schemaosreleaselist"></a>
<a id="schema_OSReleaseList"></a>
<a id="tocSosreleaselist"></a>
<a id="tocsosreleaselist"></a>

```json
[
  {
    "Label": {}
  }
]
```

<h2 id="tocS_Step">Step</h2>
<!-- backwards compatibility -->
<a id="schemastep"></a>
<a id="schema_Step"></a>
<a id="tocSstep"></a>
<a id="tocsstep"></a>

```json
{
  "Id": {},
  "Name": {},
  "Config": {
    "Jar": {},
    "Properties": {
      "property1": "string",
      "property2": "string"
    },
    "MainClass": {},
    "Args": {}
  },
  "ActionOnFailure": {},
  "Status": {
    "State": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "FailureDetails": {
      "Reason": {},
      "Message": {},
      "LogFile": {}
    },
    "Timeline": {
      "CreationDateTime": {},
      "StartDateTime": {},
      "EndDateTime": {}
    }
  },
  "ExecutionRoleArn": {}
}
```

This represents a step in a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Config|object|false|none|none|
|ActionOnFailure|object|false|none|none|
|Status|object|false|none|none|
|ExecutionRoleArn|object|false|none|none|

<h2 id="tocS_Studio">Studio</h2>
<!-- backwards compatibility -->
<a id="schemastudio"></a>
<a id="schema_Studio"></a>
<a id="tocSstudio"></a>
<a id="tocsstudio"></a>

```json
{
  "StudioId": {},
  "StudioArn": {},
  "Name": {},
  "Description": {},
  "AuthMode": {},
  "VpcId": {},
  "SubnetIds": {},
  "ServiceRole": {},
  "UserRole": {},
  "WorkspaceSecurityGroupId": {},
  "EngineSecurityGroupId": {},
  "Url": {},
  "CreationTime": {},
  "DefaultS3Location": {},
  "IdpAuthUrl": {},
  "IdpRelayStateParameterName": {},
  "Tags": {}
}
```

Details for an Amazon EMR Studio including ID, creation time, name, and so on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StudioId|object|false|none|none|
|StudioArn|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|AuthMode|object|false|none|none|
|VpcId|object|false|none|none|
|SubnetIds|object|false|none|none|
|ServiceRole|object|false|none|none|
|UserRole|object|false|none|none|
|WorkspaceSecurityGroupId|object|false|none|none|
|EngineSecurityGroupId|object|false|none|none|
|Url|object|false|none|none|
|CreationTime|object|false|none|none|
|DefaultS3Location|object|false|none|none|
|IdpAuthUrl|object|false|none|none|
|IdpRelayStateParameterName|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_InstanceId">InstanceId</h2>
<!-- backwards compatibility -->
<a id="schemainstanceid"></a>
<a id="schema_InstanceId"></a>
<a id="tocSinstanceid"></a>
<a id="tocsinstanceid"></a>

```json
"string"
```

<h2 id="tocS_EC2InstanceIdsList">EC2InstanceIdsList</h2>
<!-- backwards compatibility -->
<a id="schemaec2instanceidslist"></a>
<a id="schema_EC2InstanceIdsList"></a>
<a id="tocSec2instanceidslist"></a>
<a id="tocsec2instanceidslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EC2InstanceIdsToTerminateList">EC2InstanceIdsToTerminateList</h2>
<!-- backwards compatibility -->
<a id="schemaec2instanceidstoterminatelist"></a>
<a id="schema_EC2InstanceIdsToTerminateList"></a>
<a id="tocSec2instanceidstoterminatelist"></a>
<a id="tocsec2instanceidstoterminatelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_VolumeSpecification">VolumeSpecification</h2>
<!-- backwards compatibility -->
<a id="schemavolumespecification"></a>
<a id="schema_VolumeSpecification"></a>
<a id="tocSvolumespecification"></a>
<a id="tocsvolumespecification"></a>

```json
{
  "VolumeType": {},
  "Iops": {},
  "SizeInGB": {},
  "Throughput": {}
}
```

EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s) that are requested for the EBS volume attached to an EC2 instance in the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeType|object|true|none|none|
|Iops|object|false|none|none|
|SizeInGB|object|true|none|none|
|Throughput|object|false|none|none|

<h2 id="tocS_EbsBlockDevice">EbsBlockDevice</h2>
<!-- backwards compatibility -->
<a id="schemaebsblockdevice"></a>
<a id="schema_EbsBlockDevice"></a>
<a id="tocSebsblockdevice"></a>
<a id="tocsebsblockdevice"></a>

```json
{
  "VolumeSpecification": {
    "VolumeType": {},
    "Iops": {},
    "SizeInGB": {},
    "Throughput": {}
  },
  "Device": {}
}
```

Configuration of requested EBS block device associated with the instance group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeSpecification|object|false|none|none|
|Device|object|false|none|none|

<h2 id="tocS_EbsBlockDeviceConfig">EbsBlockDeviceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaebsblockdeviceconfig"></a>
<a id="schema_EbsBlockDeviceConfig"></a>
<a id="tocSebsblockdeviceconfig"></a>
<a id="tocsebsblockdeviceconfig"></a>

```json
{
  "VolumeSpecification": {
    "VolumeType": {},
    "Iops": {},
    "SizeInGB": {},
    "Throughput": {}
  },
  "VolumesPerInstance": {}
}
```

Configuration of requested EBS block device associated with the instance group with count of volumes that are associated to every instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeSpecification|object|true|none|none|
|VolumesPerInstance|object|false|none|none|

<h2 id="tocS_EbsBlockDeviceConfigList">EbsBlockDeviceConfigList</h2>
<!-- backwards compatibility -->
<a id="schemaebsblockdeviceconfiglist"></a>
<a id="schema_EbsBlockDeviceConfigList"></a>
<a id="tocSebsblockdeviceconfiglist"></a>
<a id="tocsebsblockdeviceconfiglist"></a>

```json
[
  {
    "VolumeSpecification": {
      "VolumeType": {},
      "Iops": {},
      "SizeInGB": {},
      "Throughput": {}
    },
    "VolumesPerInstance": {}
  }
]
```

<h2 id="tocS_EbsBlockDeviceList">EbsBlockDeviceList</h2>
<!-- backwards compatibility -->
<a id="schemaebsblockdevicelist"></a>
<a id="schema_EbsBlockDeviceList"></a>
<a id="tocSebsblockdevicelist"></a>
<a id="tocsebsblockdevicelist"></a>

```json
[
  {
    "VolumeSpecification": {
      "VolumeType": {},
      "Iops": {},
      "SizeInGB": {},
      "Throughput": {}
    },
    "Device": {}
  }
]
```

<h2 id="tocS_EbsConfiguration">EbsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaebsconfiguration"></a>
<a id="schema_EbsConfiguration"></a>
<a id="tocSebsconfiguration"></a>
<a id="tocsebsconfiguration"></a>

```json
{
  "EbsBlockDeviceConfigs": {},
  "EbsOptimized": {}
}
```

The Amazon EBS configuration of a cluster instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EbsBlockDeviceConfigs|object|false|none|none|
|EbsOptimized|object|false|none|none|

<h2 id="tocS_EbsVolume">EbsVolume</h2>
<!-- backwards compatibility -->
<a id="schemaebsvolume"></a>
<a id="schema_EbsVolume"></a>
<a id="tocSebsvolume"></a>
<a id="tocsebsvolume"></a>

```json
{
  "Device": {},
  "VolumeId": {}
}
```

EBS block device that's attached to an EC2 instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Device|object|false|none|none|
|VolumeId|object|false|none|none|

<h2 id="tocS_EbsVolumeList">EbsVolumeList</h2>
<!-- backwards compatibility -->
<a id="schemaebsvolumelist"></a>
<a id="schema_EbsVolumeList"></a>
<a id="tocSebsvolumelist"></a>
<a id="tocsebsvolumelist"></a>

```json
[
  {
    "Device": {},
    "VolumeId": {}
  }
]
```

<h2 id="tocS_XmlStringMaxLen256List">XmlStringMaxLen256List</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstringmaxlen256list"></a>
<a id="schema_XmlStringMaxLen256List"></a>
<a id="tocSxmlstringmaxlen256list"></a>
<a id="tocsxmlstringmaxlen256list"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ErrorData">ErrorData</h2>
<!-- backwards compatibility -->
<a id="schemaerrordata"></a>
<a id="schema_ErrorData"></a>
<a id="tocSerrordata"></a>
<a id="tocserrordata"></a>

```json
[
  {
    "property1": "string",
    "property2": "string"
  }
]
```

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
{
  "ErrorCode": {},
  "ErrorData": {},
  "ErrorMessage": {}
}
```

A tuple that provides information about an error that caused a cluster to terminate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|ErrorData|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_ExecutionEngineType">ExecutionEngineType</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionenginetype"></a>
<a id="schema_ExecutionEngineType"></a>
<a id="tocSexecutionenginetype"></a>
<a id="tocsexecutionenginetype"></a>

```json
"EMR"
```

<h2 id="tocS_ExecutionEngineConfig">ExecutionEngineConfig</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionengineconfig"></a>
<a id="schema_ExecutionEngineConfig"></a>
<a id="tocSexecutionengineconfig"></a>
<a id="tocsexecutionengineconfig"></a>

```json
{
  "Id": {},
  "Type": {},
  "MasterInstanceSecurityGroupId": {}
}
```

Specifies the execution engine (cluster) to run the notebook and perform the notebook execution, for example, an EMR cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Type|object|false|none|none|
|MasterInstanceSecurityGroupId|object|false|none|none|

<h2 id="tocS_FailureDetails">FailureDetails</h2>
<!-- backwards compatibility -->
<a id="schemafailuredetails"></a>
<a id="schema_FailureDetails"></a>
<a id="tocSfailuredetails"></a>
<a id="tocsfailuredetails"></a>

```json
{
  "Reason": {},
  "Message": {},
  "LogFile": {}
}
```

The details of the step failure. The service attempts to detect the root cause for many common failures.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Reason|object|false|none|none|
|Message|object|false|none|none|
|LogFile|object|false|none|none|

<h2 id="tocS_ManagedScalingPolicy">ManagedScalingPolicy</h2>
<!-- backwards compatibility -->
<a id="schemamanagedscalingpolicy"></a>
<a id="schema_ManagedScalingPolicy"></a>
<a id="tocSmanagedscalingpolicy"></a>
<a id="tocsmanagedscalingpolicy"></a>

```json
{
  "ComputeLimits": {
    "UnitType": {},
    "MinimumCapacityUnits": {},
    "MaximumCapacityUnits": {},
    "MaximumOnDemandCapacityUnits": {},
    "MaximumCoreCapacityUnits": {}
  }
}
```

 Managed scaling policy for an Amazon EMR cluster. The policy specifies the limits for resources that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComputeLimits|object|false|none|none|

<h2 id="tocS_SessionMappingDetail">SessionMappingDetail</h2>
<!-- backwards compatibility -->
<a id="schemasessionmappingdetail"></a>
<a id="schema_SessionMappingDetail"></a>
<a id="tocSsessionmappingdetail"></a>
<a id="tocssessionmappingdetail"></a>

```json
{
  "StudioId": {},
  "IdentityId": {},
  "IdentityName": {},
  "IdentityType": {},
  "SessionPolicyArn": {},
  "CreationTime": {},
  "LastModifiedTime": {}
}
```

Details for an Amazon EMR Studio session mapping including creation time, user or group ID, Studio ID, and so on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StudioId|object|false|none|none|
|IdentityId|object|false|none|none|
|IdentityName|object|false|none|none|
|IdentityType|object|false|none|none|
|SessionPolicyArn|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_KeyValueList">KeyValueList</h2>
<!-- backwards compatibility -->
<a id="schemakeyvaluelist"></a>
<a id="schema_KeyValueList"></a>
<a id="tocSkeyvaluelist"></a>
<a id="tocskeyvaluelist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_HadoopJarStepConfig">HadoopJarStepConfig</h2>
<!-- backwards compatibility -->
<a id="schemahadoopjarstepconfig"></a>
<a id="schema_HadoopJarStepConfig"></a>
<a id="tocShadoopjarstepconfig"></a>
<a id="tocshadoopjarstepconfig"></a>

```json
{
  "Properties": {},
  "Jar": {},
  "MainClass": {},
  "Args": {}
}
```

A job flow step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Properties|object|false|none|none|
|Jar|object|true|none|none|
|MainClass|object|false|none|none|
|Args|object|false|none|none|

<h2 id="tocS_HadoopStepConfig">HadoopStepConfig</h2>
<!-- backwards compatibility -->
<a id="schemahadoopstepconfig"></a>
<a id="schema_HadoopStepConfig"></a>
<a id="tocShadoopstepconfig"></a>
<a id="tocshadoopstepconfig"></a>

```json
{
  "Jar": {},
  "Properties": {
    "property1": "string",
    "property2": "string"
  },
  "MainClass": {},
  "Args": {}
}
```

A cluster step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Jar|object|false|none|none|
|Properties|object|false|none|none|
|MainClass|object|false|none|none|
|Args|object|false|none|none|

<h2 id="tocS_InstanceStatus">InstanceStatus</h2>
<!-- backwards compatibility -->
<a id="schemainstancestatus"></a>
<a id="schema_InstanceStatus"></a>
<a id="tocSinstancestatus"></a>
<a id="tocsinstancestatus"></a>

```json
{
  "State": {},
  "StateChangeReason": {
    "Code": {},
    "Message": {}
  },
  "Timeline": {
    "CreationDateTime": {},
    "ReadyDateTime": {},
    "EndDateTime": {}
  }
}
```

The instance status details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|
|StateChangeReason|object|false|none|none|
|Timeline|object|false|none|none|

<h2 id="tocS_MarketType">MarketType</h2>
<!-- backwards compatibility -->
<a id="schemamarkettype"></a>
<a id="schema_MarketType"></a>
<a id="tocSmarkettype"></a>
<a id="tocsmarkettype"></a>

```json
"ON_DEMAND"
```

<h2 id="tocS_InstanceType">InstanceType</h2>
<!-- backwards compatibility -->
<a id="schemainstancetype"></a>
<a id="schema_InstanceType"></a>
<a id="tocSinstancetype"></a>
<a id="tocsinstancetype"></a>

```json
"string"
```

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "Id": {},
  "Ec2InstanceId": {},
  "PublicDnsName": {},
  "PublicIpAddress": {},
  "PrivateDnsName": {},
  "PrivateIpAddress": {},
  "Status": {
    "State": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "Timeline": {
      "CreationDateTime": {},
      "ReadyDateTime": {},
      "EndDateTime": {}
    }
  },
  "InstanceGroupId": {},
  "InstanceFleetId": {},
  "Market": {},
  "InstanceType": {},
  "EbsVolumes": {}
}
```

Represents an EC2 instance provisioned as part of cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Ec2InstanceId|object|false|none|none|
|PublicDnsName|object|false|none|none|
|PublicIpAddress|object|false|none|none|
|PrivateDnsName|object|false|none|none|
|PrivateIpAddress|object|false|none|none|
|Status|object|false|none|none|
|InstanceGroupId|object|false|none|none|
|InstanceFleetId|object|false|none|none|
|Market|object|false|none|none|
|InstanceType|object|false|none|none|
|EbsVolumes|object|false|none|none|

<h2 id="tocS_InstanceFleetStatus">InstanceFleetStatus</h2>
<!-- backwards compatibility -->
<a id="schemainstancefleetstatus"></a>
<a id="schema_InstanceFleetStatus"></a>
<a id="tocSinstancefleetstatus"></a>
<a id="tocsinstancefleetstatus"></a>

```json
{
  "State": {},
  "StateChangeReason": {
    "Code": {},
    "Message": {}
  },
  "Timeline": {
    "CreationDateTime": {},
    "ReadyDateTime": {},
    "EndDateTime": {}
  }
}
```

<p>The status of the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|
|StateChangeReason|object|false|none|none|
|Timeline|object|false|none|none|

<h2 id="tocS_InstanceFleetType">InstanceFleetType</h2>
<!-- backwards compatibility -->
<a id="schemainstancefleettype"></a>
<a id="schema_InstanceFleetType"></a>
<a id="tocSinstancefleettype"></a>
<a id="tocsinstancefleettype"></a>

```json
"MASTER"
```

<h2 id="tocS_WholeNumber">WholeNumber</h2>
<!-- backwards compatibility -->
<a id="schemawholenumber"></a>
<a id="schema_WholeNumber"></a>
<a id="tocSwholenumber"></a>
<a id="tocswholenumber"></a>

```json
0
```

<h2 id="tocS_InstanceTypeSpecificationList">InstanceTypeSpecificationList</h2>
<!-- backwards compatibility -->
<a id="schemainstancetypespecificationlist"></a>
<a id="schema_InstanceTypeSpecificationList"></a>
<a id="tocSinstancetypespecificationlist"></a>
<a id="tocsinstancetypespecificationlist"></a>

```json
[
  {
    "InstanceType": {},
    "WeightedCapacity": {},
    "BidPrice": {},
    "BidPriceAsPercentageOfOnDemandPrice": {},
    "Configurations": {},
    "EbsBlockDevices": {},
    "EbsOptimized": {},
    "CustomAmiId": {}
  }
]
```

<h2 id="tocS_InstanceFleetProvisioningSpecifications">InstanceFleetProvisioningSpecifications</h2>
<!-- backwards compatibility -->
<a id="schemainstancefleetprovisioningspecifications"></a>
<a id="schema_InstanceFleetProvisioningSpecifications"></a>
<a id="tocSinstancefleetprovisioningspecifications"></a>
<a id="tocsinstancefleetprovisioningspecifications"></a>

```json
{
  "SpotSpecification": {
    "TimeoutDurationMinutes": {},
    "TimeoutAction": {},
    "BlockDurationMinutes": {},
    "AllocationStrategy": {}
  },
  "OnDemandSpecification": {
    "AllocationStrategy": {},
    "CapacityReservationOptions": {
      "UsageStrategy": {},
      "CapacityReservationPreference": {},
      "CapacityReservationResourceGroupArn": {}
    }
  }
}
```

<p>The launch specification for Spot Instances in the fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. On-Demand and Spot instance allocation strategies are available in Amazon EMR version 5.12.1 and later.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SpotSpecification|object|false|none|none|
|OnDemandSpecification|object|false|none|none|

<h2 id="tocS_InstanceFleetResizingSpecifications">InstanceFleetResizingSpecifications</h2>
<!-- backwards compatibility -->
<a id="schemainstancefleetresizingspecifications"></a>
<a id="schema_InstanceFleetResizingSpecifications"></a>
<a id="tocSinstancefleetresizingspecifications"></a>
<a id="tocsinstancefleetresizingspecifications"></a>

```json
{
  "SpotResizeSpecification": {
    "TimeoutDurationMinutes": {}
  },
  "OnDemandResizeSpecification": {
    "TimeoutDurationMinutes": {}
  }
}
```

The resize specification for On-Demand and Spot Instances in the fleet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SpotResizeSpecification|object|false|none|none|
|OnDemandResizeSpecification|object|false|none|none|

<h2 id="tocS_InstanceFleet">InstanceFleet</h2>
<!-- backwards compatibility -->
<a id="schemainstancefleet"></a>
<a id="schema_InstanceFleet"></a>
<a id="tocSinstancefleet"></a>
<a id="tocsinstancefleet"></a>

```json
{
  "Id": {},
  "Name": {},
  "Status": {
    "State": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "Timeline": {
      "CreationDateTime": {},
      "ReadyDateTime": {},
      "EndDateTime": {}
    }
  },
  "InstanceFleetType": {},
  "TargetOnDemandCapacity": {},
  "TargetSpotCapacity": {},
  "ProvisionedOnDemandCapacity": {},
  "ProvisionedSpotCapacity": {},
  "InstanceTypeSpecifications": {},
  "LaunchSpecifications": {
    "SpotSpecification": {
      "TimeoutDurationMinutes": {},
      "TimeoutAction": {},
      "BlockDurationMinutes": {},
      "AllocationStrategy": {}
    },
    "OnDemandSpecification": {
      "AllocationStrategy": {},
      "CapacityReservationOptions": {
        "UsageStrategy": {},
        "CapacityReservationPreference": {},
        "CapacityReservationResourceGroupArn": {}
      }
    }
  },
  "ResizeSpecifications": {
    "SpotResizeSpecification": {
      "TimeoutDurationMinutes": {}
    },
    "OnDemandResizeSpecification": {
      "TimeoutDurationMinutes": {}
    }
  }
}
```

<p>Describes an instance fleet, which is a group of EC2 instances that host a particular node type (master, core, or task) in an Amazon EMR cluster. Instance fleets can consist of a mix of instance types and On-Demand and Spot Instances, which are provisioned to meet a defined target capacity. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|InstanceFleetType|object|false|none|none|
|TargetOnDemandCapacity|object|false|none|none|
|TargetSpotCapacity|object|false|none|none|
|ProvisionedOnDemandCapacity|object|false|none|none|
|ProvisionedSpotCapacity|object|false|none|none|
|InstanceTypeSpecifications|object|false|none|none|
|LaunchSpecifications|object|false|none|none|
|ResizeSpecifications|object|false|none|none|

<h2 id="tocS_InstanceTypeConfigList">InstanceTypeConfigList</h2>
<!-- backwards compatibility -->
<a id="schemainstancetypeconfiglist"></a>
<a id="schema_InstanceTypeConfigList"></a>
<a id="tocSinstancetypeconfiglist"></a>
<a id="tocsinstancetypeconfiglist"></a>

```json
[
  {
    "InstanceType": {},
    "WeightedCapacity": {},
    "BidPrice": {},
    "BidPriceAsPercentageOfOnDemandPrice": {},
    "EbsConfiguration": {
      "EbsBlockDeviceConfigs": {},
      "EbsOptimized": {}
    },
    "Configurations": {},
    "CustomAmiId": {}
  }
]
```

<h2 id="tocS_InstanceFleetConfigList">InstanceFleetConfigList</h2>
<!-- backwards compatibility -->
<a id="schemainstancefleetconfiglist"></a>
<a id="schema_InstanceFleetConfigList"></a>
<a id="tocSinstancefleetconfiglist"></a>
<a id="tocsinstancefleetconfiglist"></a>

```json
[
  {
    "Name": {},
    "InstanceFleetType": {},
    "TargetOnDemandCapacity": {},
    "TargetSpotCapacity": {},
    "InstanceTypeConfigs": {},
    "LaunchSpecifications": {
      "SpotSpecification": {
        "TimeoutDurationMinutes": {},
        "TimeoutAction": {},
        "BlockDurationMinutes": {},
        "AllocationStrategy": {}
      },
      "OnDemandSpecification": {
        "AllocationStrategy": {},
        "CapacityReservationOptions": {
          "UsageStrategy": {},
          "CapacityReservationPreference": {},
          "CapacityReservationResourceGroupArn": {}
        }
      }
    },
    "ResizeSpecifications": {
      "SpotResizeSpecification": {
        "TimeoutDurationMinutes": {}
      },
      "OnDemandResizeSpecification": {
        "TimeoutDurationMinutes": {}
      }
    }
  }
]
```

<h2 id="tocS_InstanceFleetList">InstanceFleetList</h2>
<!-- backwards compatibility -->
<a id="schemainstancefleetlist"></a>
<a id="schema_InstanceFleetList"></a>
<a id="tocSinstancefleetlist"></a>
<a id="tocsinstancefleetlist"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Status": {
      "State": {},
      "StateChangeReason": {
        "Code": {},
        "Message": {}
      },
      "Timeline": {
        "CreationDateTime": {},
        "ReadyDateTime": {},
        "EndDateTime": {}
      }
    },
    "InstanceFleetType": {},
    "TargetOnDemandCapacity": {},
    "TargetSpotCapacity": {},
    "ProvisionedOnDemandCapacity": {},
    "ProvisionedSpotCapacity": {},
    "InstanceTypeSpecifications": {},
    "LaunchSpecifications": {
      "SpotSpecification": {
        "TimeoutDurationMinutes": {},
        "TimeoutAction": {},
        "BlockDurationMinutes": {},
        "AllocationStrategy": {}
      },
      "OnDemandSpecification": {
        "AllocationStrategy": {},
        "CapacityReservationOptions": {
          "UsageStrategy": {},
          "CapacityReservationPreference": {},
          "CapacityReservationResourceGroupArn": {}
        }
      }
    },
    "ResizeSpecifications": {
      "SpotResizeSpecification": {
        "TimeoutDurationMinutes": {}
      },
      "OnDemandResizeSpecification": {
        "TimeoutDurationMinutes": {}
      }
    }
  }
]
```

<h2 id="tocS_InstanceFleetModifyConfig">InstanceFleetModifyConfig</h2>
<!-- backwards compatibility -->
<a id="schemainstancefleetmodifyconfig"></a>
<a id="schema_InstanceFleetModifyConfig"></a>
<a id="tocSinstancefleetmodifyconfig"></a>
<a id="tocsinstancefleetmodifyconfig"></a>

```json
{
  "InstanceFleetId": {},
  "TargetOnDemandCapacity": {},
  "TargetSpotCapacity": {},
  "ResizeSpecifications": {
    "SpotResizeSpecification": {
      "TimeoutDurationMinutes": {}
    },
    "OnDemandResizeSpecification": {
      "TimeoutDurationMinutes": {}
    }
  }
}
```

<p>Configuration parameters for an instance fleet modification request.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceFleetId|object|true|none|none|
|TargetOnDemandCapacity|object|false|none|none|
|TargetSpotCapacity|object|false|none|none|
|ResizeSpecifications|object|false|none|none|

<h2 id="tocS_SpotProvisioningSpecification">SpotProvisioningSpecification</h2>
<!-- backwards compatibility -->
<a id="schemaspotprovisioningspecification"></a>
<a id="schema_SpotProvisioningSpecification"></a>
<a id="tocSspotprovisioningspecification"></a>
<a id="tocsspotprovisioningspecification"></a>

```json
{
  "TimeoutDurationMinutes": {},
  "TimeoutAction": {},
  "BlockDurationMinutes": {},
  "AllocationStrategy": {}
}
```

<p>The launch specification for Spot Instances in the instance fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. Spot Instance allocation strategy is available in Amazon EMR version 5.12.1 and later.</p> </note> <note> <p>Spot Instances with a defined duration (also known as Spot blocks) are no longer available to new customers from July 1, 2021. For customers who have previously used the feature, we will continue to support Spot Instances with a defined duration until December 31, 2022. </p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeoutDurationMinutes|object|true|none|none|
|TimeoutAction|object|true|none|none|
|BlockDurationMinutes|object|false|none|none|
|AllocationStrategy|object|false|none|none|

<h2 id="tocS_OnDemandProvisioningSpecification">OnDemandProvisioningSpecification</h2>
<!-- backwards compatibility -->
<a id="schemaondemandprovisioningspecification"></a>
<a id="schema_OnDemandProvisioningSpecification"></a>
<a id="tocSondemandprovisioningspecification"></a>
<a id="tocsondemandprovisioningspecification"></a>

```json
{
  "AllocationStrategy": {},
  "CapacityReservationOptions": {
    "UsageStrategy": {},
    "CapacityReservationPreference": {},
    "CapacityReservationResourceGroupArn": {}
  }
}
```

<p> The launch specification for On-Demand Instances in the instance fleet, which determines the allocation strategy. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. On-Demand Instances allocation strategy is available in Amazon EMR version 5.12.1 and later.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllocationStrategy|object|true|none|none|
|CapacityReservationOptions|object|false|none|none|

<h2 id="tocS_SpotResizingSpecification">SpotResizingSpecification</h2>
<!-- backwards compatibility -->
<a id="schemaspotresizingspecification"></a>
<a id="schema_SpotResizingSpecification"></a>
<a id="tocSspotresizingspecification"></a>
<a id="tocsspotresizingspecification"></a>

```json
{
  "TimeoutDurationMinutes": {}
}
```

The resize specification for Spot Instances in the instance fleet, which contains the resize timeout period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeoutDurationMinutes|object|true|none|none|

<h2 id="tocS_OnDemandResizingSpecification">OnDemandResizingSpecification</h2>
<!-- backwards compatibility -->
<a id="schemaondemandresizingspecification"></a>
<a id="schema_OnDemandResizingSpecification"></a>
<a id="tocSondemandresizingspecification"></a>
<a id="tocsondemandresizingspecification"></a>

```json
{
  "TimeoutDurationMinutes": {}
}
```

The resize specification for On-Demand Instances in the instance fleet, which contains the resize timeout period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeoutDurationMinutes|object|true|none|none|

<h2 id="tocS_InstanceFleetState">InstanceFleetState</h2>
<!-- backwards compatibility -->
<a id="schemainstancefleetstate"></a>
<a id="schema_InstanceFleetState"></a>
<a id="tocSinstancefleetstate"></a>
<a id="tocsinstancefleetstate"></a>

```json
"PROVISIONING"
```

<h2 id="tocS_InstanceFleetStateChangeReasonCode">InstanceFleetStateChangeReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemainstancefleetstatechangereasoncode"></a>
<a id="schema_InstanceFleetStateChangeReasonCode"></a>
<a id="tocSinstancefleetstatechangereasoncode"></a>
<a id="tocsinstancefleetstatechangereasoncode"></a>

```json
"INTERNAL_ERROR"
```

<h2 id="tocS_InstanceFleetStateChangeReason">InstanceFleetStateChangeReason</h2>
<!-- backwards compatibility -->
<a id="schemainstancefleetstatechangereason"></a>
<a id="schema_InstanceFleetStateChangeReason"></a>
<a id="tocSinstancefleetstatechangereason"></a>
<a id="tocsinstancefleetstatechangereason"></a>

```json
{
  "Code": {},
  "Message": {}
}
```

<p>Provides status change reason details for the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_InstanceFleetTimeline">InstanceFleetTimeline</h2>
<!-- backwards compatibility -->
<a id="schemainstancefleettimeline"></a>
<a id="schema_InstanceFleetTimeline"></a>
<a id="tocSinstancefleettimeline"></a>
<a id="tocsinstancefleettimeline"></a>

```json
{
  "CreationDateTime": {},
  "ReadyDateTime": {},
  "EndDateTime": {}
}
```

<p>Provides historical timestamps for the instance fleet, including the time of creation, the time it became ready to run jobs, and the time of termination.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationDateTime|object|false|none|none|
|ReadyDateTime|object|false|none|none|
|EndDateTime|object|false|none|none|

<h2 id="tocS_InstanceGroupId">InstanceGroupId</h2>
<!-- backwards compatibility -->
<a id="schemainstancegroupid"></a>
<a id="schema_InstanceGroupId"></a>
<a id="tocSinstancegroupid"></a>
<a id="tocsinstancegroupid"></a>

```json
"string"
```

<h2 id="tocS_InstanceGroupType">InstanceGroupType</h2>
<!-- backwards compatibility -->
<a id="schemainstancegrouptype"></a>
<a id="schema_InstanceGroupType"></a>
<a id="tocSinstancegrouptype"></a>
<a id="tocsinstancegrouptype"></a>

```json
"MASTER"
```

<h2 id="tocS_InstanceGroupStatus">InstanceGroupStatus</h2>
<!-- backwards compatibility -->
<a id="schemainstancegroupstatus"></a>
<a id="schema_InstanceGroupStatus"></a>
<a id="tocSinstancegroupstatus"></a>
<a id="tocsinstancegroupstatus"></a>

```json
{
  "State": {},
  "StateChangeReason": {
    "Code": {},
    "Message": {}
  },
  "Timeline": {
    "CreationDateTime": {},
    "ReadyDateTime": {},
    "EndDateTime": {}
  }
}
```

The details of the instance group status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|
|StateChangeReason|object|false|none|none|
|Timeline|object|false|none|none|

<h2 id="tocS_ShrinkPolicy">ShrinkPolicy</h2>
<!-- backwards compatibility -->
<a id="schemashrinkpolicy"></a>
<a id="schema_ShrinkPolicy"></a>
<a id="tocSshrinkpolicy"></a>
<a id="tocsshrinkpolicy"></a>

```json
{
  "DecommissionTimeout": {},
  "InstanceResizePolicy": {
    "InstancesToTerminate": {},
    "InstancesToProtect": {},
    "InstanceTerminationTimeout": {}
  }
}
```

Policy for customizing shrink operations. Allows configuration of decommissioning timeout and targeted instance shrinking.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DecommissionTimeout|object|false|none|none|
|InstanceResizePolicy|object|false|none|none|

<h2 id="tocS_InstanceGroup">InstanceGroup</h2>
<!-- backwards compatibility -->
<a id="schemainstancegroup"></a>
<a id="schema_InstanceGroup"></a>
<a id="tocSinstancegroup"></a>
<a id="tocsinstancegroup"></a>

```json
{
  "Id": {},
  "Name": {},
  "Market": {},
  "InstanceGroupType": {},
  "BidPrice": {},
  "InstanceType": {},
  "RequestedInstanceCount": {},
  "RunningInstanceCount": {},
  "Status": {
    "State": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "Timeline": {
      "CreationDateTime": {},
      "ReadyDateTime": {},
      "EndDateTime": {}
    }
  },
  "Configurations": {},
  "ConfigurationsVersion": {},
  "LastSuccessfullyAppliedConfigurations": {},
  "LastSuccessfullyAppliedConfigurationsVersion": {},
  "EbsBlockDevices": {},
  "EbsOptimized": {},
  "ShrinkPolicy": {
    "DecommissionTimeout": {},
    "InstanceResizePolicy": {
      "InstancesToTerminate": {},
      "InstancesToProtect": {},
      "InstanceTerminationTimeout": {}
    }
  },
  "AutoScalingPolicy": {
    "Status": {
      "State": {},
      "StateChangeReason": {
        "Code": {},
        "Message": {}
      }
    },
    "Constraints": {
      "MinCapacity": {},
      "MaxCapacity": {}
    },
    "Rules": {}
  },
  "CustomAmiId": {}
}
```

This entity represents an instance group, which is a group of instances that have common purpose. For example, CORE instance group is used for HDFS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Market|object|false|none|none|
|InstanceGroupType|object|false|none|none|
|BidPrice|object|false|none|none|
|InstanceType|object|false|none|none|
|RequestedInstanceCount|object|false|none|none|
|RunningInstanceCount|object|false|none|none|
|Status|object|false|none|none|
|Configurations|object|false|none|none|
|ConfigurationsVersion|object|false|none|none|
|LastSuccessfullyAppliedConfigurations|object|false|none|none|
|LastSuccessfullyAppliedConfigurationsVersion|object|false|none|none|
|EbsBlockDevices|object|false|none|none|
|EbsOptimized|object|false|none|none|
|ShrinkPolicy|object|false|none|none|
|AutoScalingPolicy|object|false|none|none|
|CustomAmiId|object|false|none|none|

<h2 id="tocS_InstanceRoleType">InstanceRoleType</h2>
<!-- backwards compatibility -->
<a id="schemainstanceroletype"></a>
<a id="schema_InstanceRoleType"></a>
<a id="tocSinstanceroletype"></a>
<a id="tocsinstanceroletype"></a>

```json
"MASTER"
```

<h2 id="tocS_InstanceGroupConfig">InstanceGroupConfig</h2>
<!-- backwards compatibility -->
<a id="schemainstancegroupconfig"></a>
<a id="schema_InstanceGroupConfig"></a>
<a id="tocSinstancegroupconfig"></a>
<a id="tocsinstancegroupconfig"></a>

```json
{
  "Name": {},
  "Market": {},
  "InstanceRole": {},
  "BidPrice": {},
  "InstanceType": {},
  "InstanceCount": {},
  "Configurations": {},
  "EbsConfiguration": {
    "EbsBlockDeviceConfigs": {},
    "EbsOptimized": {}
  },
  "AutoScalingPolicy": {
    "Constraints": {
      "MinCapacity": {},
      "MaxCapacity": {}
    },
    "Rules": {}
  },
  "CustomAmiId": {}
}
```

Configuration defining a new instance group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Market|object|false|none|none|
|InstanceRole|object|true|none|none|
|BidPrice|object|false|none|none|
|InstanceType|object|true|none|none|
|InstanceCount|object|true|none|none|
|Configurations|object|false|none|none|
|EbsConfiguration|object|false|none|none|
|AutoScalingPolicy|object|false|none|none|
|CustomAmiId|object|false|none|none|

<h2 id="tocS_InstanceGroupState">InstanceGroupState</h2>
<!-- backwards compatibility -->
<a id="schemainstancegroupstate"></a>
<a id="schema_InstanceGroupState"></a>
<a id="tocSinstancegroupstate"></a>
<a id="tocsinstancegroupstate"></a>

```json
"PROVISIONING"
```

<h2 id="tocS_InstanceGroupDetail">InstanceGroupDetail</h2>
<!-- backwards compatibility -->
<a id="schemainstancegroupdetail"></a>
<a id="schema_InstanceGroupDetail"></a>
<a id="tocSinstancegroupdetail"></a>
<a id="tocsinstancegroupdetail"></a>

```json
{
  "InstanceGroupId": {},
  "Name": {},
  "Market": {},
  "InstanceRole": {},
  "BidPrice": {},
  "InstanceType": {},
  "InstanceRequestCount": {},
  "InstanceRunningCount": {},
  "State": {},
  "LastStateChangeReason": {},
  "CreationDateTime": {},
  "StartDateTime": {},
  "ReadyDateTime": {},
  "EndDateTime": {},
  "CustomAmiId": {}
}
```

Detailed information about an instance group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceGroupId|object|false|none|none|
|Name|object|false|none|none|
|Market|object|true|none|none|
|InstanceRole|object|true|none|none|
|BidPrice|object|false|none|none|
|InstanceType|object|true|none|none|
|InstanceRequestCount|object|true|none|none|
|InstanceRunningCount|object|true|none|none|
|State|object|true|none|none|
|LastStateChangeReason|object|false|none|none|
|CreationDateTime|object|true|none|none|
|StartDateTime|object|false|none|none|
|ReadyDateTime|object|false|none|none|
|EndDateTime|object|false|none|none|
|CustomAmiId|object|false|none|none|

<h2 id="tocS_InstanceGroupDetailList">InstanceGroupDetailList</h2>
<!-- backwards compatibility -->
<a id="schemainstancegroupdetaillist"></a>
<a id="schema_InstanceGroupDetailList"></a>
<a id="tocSinstancegroupdetaillist"></a>
<a id="tocsinstancegroupdetaillist"></a>

```json
[
  {
    "InstanceGroupId": {},
    "Name": {},
    "Market": {},
    "InstanceRole": {},
    "BidPrice": {},
    "InstanceType": {},
    "InstanceRequestCount": {},
    "InstanceRunningCount": {},
    "State": {},
    "LastStateChangeReason": {},
    "CreationDateTime": {},
    "StartDateTime": {},
    "ReadyDateTime": {},
    "EndDateTime": {},
    "CustomAmiId": {}
  }
]
```

<h2 id="tocS_InstanceGroupList">InstanceGroupList</h2>
<!-- backwards compatibility -->
<a id="schemainstancegrouplist"></a>
<a id="schema_InstanceGroupList"></a>
<a id="tocSinstancegrouplist"></a>
<a id="tocsinstancegrouplist"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Market": {},
    "InstanceGroupType": {},
    "BidPrice": {},
    "InstanceType": {},
    "RequestedInstanceCount": {},
    "RunningInstanceCount": {},
    "Status": {
      "State": {},
      "StateChangeReason": {
        "Code": {},
        "Message": {}
      },
      "Timeline": {
        "CreationDateTime": {},
        "ReadyDateTime": {},
        "EndDateTime": {}
      }
    },
    "Configurations": {},
    "ConfigurationsVersion": {},
    "LastSuccessfullyAppliedConfigurations": {},
    "LastSuccessfullyAppliedConfigurationsVersion": {},
    "EbsBlockDevices": {},
    "EbsOptimized": {},
    "ShrinkPolicy": {
      "DecommissionTimeout": {},
      "InstanceResizePolicy": {
        "InstancesToTerminate": {},
        "InstancesToProtect": {},
        "InstanceTerminationTimeout": {}
      }
    },
    "AutoScalingPolicy": {
      "Status": {
        "State": {},
        "StateChangeReason": {
          "Code": {},
          "Message": {}
        }
      },
      "Constraints": {
        "MinCapacity": {},
        "MaxCapacity": {}
      },
      "Rules": {}
    },
    "CustomAmiId": {}
  }
]
```

<h2 id="tocS_ReconfigurationType">ReconfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemareconfigurationtype"></a>
<a id="schema_ReconfigurationType"></a>
<a id="tocSreconfigurationtype"></a>
<a id="tocsreconfigurationtype"></a>

```json
"OVERWRITE"
```

<h2 id="tocS_InstanceGroupModifyConfig">InstanceGroupModifyConfig</h2>
<!-- backwards compatibility -->
<a id="schemainstancegroupmodifyconfig"></a>
<a id="schema_InstanceGroupModifyConfig"></a>
<a id="tocSinstancegroupmodifyconfig"></a>
<a id="tocsinstancegroupmodifyconfig"></a>

```json
{
  "InstanceGroupId": {},
  "InstanceCount": {},
  "EC2InstanceIdsToTerminate": {},
  "ShrinkPolicy": {
    "DecommissionTimeout": {},
    "InstanceResizePolicy": {
      "InstancesToTerminate": {},
      "InstancesToProtect": {},
      "InstanceTerminationTimeout": {}
    }
  },
  "ReconfigurationType": {},
  "Configurations": {}
}
```

Modify the size or configurations of an instance group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceGroupId|object|true|none|none|
|InstanceCount|object|false|none|none|
|EC2InstanceIdsToTerminate|object|false|none|none|
|ShrinkPolicy|object|false|none|none|
|ReconfigurationType|object|false|none|none|
|Configurations|object|false|none|none|

<h2 id="tocS_InstanceGroupModifyConfigList">InstanceGroupModifyConfigList</h2>
<!-- backwards compatibility -->
<a id="schemainstancegroupmodifyconfiglist"></a>
<a id="schema_InstanceGroupModifyConfigList"></a>
<a id="tocSinstancegroupmodifyconfiglist"></a>
<a id="tocsinstancegroupmodifyconfiglist"></a>

```json
[
  {
    "InstanceGroupId": {},
    "InstanceCount": {},
    "EC2InstanceIdsToTerminate": {},
    "ShrinkPolicy": {
      "DecommissionTimeout": {},
      "InstanceResizePolicy": {
        "InstancesToTerminate": {},
        "InstancesToProtect": {},
        "InstanceTerminationTimeout": {}
      }
    },
    "ReconfigurationType": {},
    "Configurations": {}
  }
]
```

<h2 id="tocS_InstanceGroupStateChangeReasonCode">InstanceGroupStateChangeReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemainstancegroupstatechangereasoncode"></a>
<a id="schema_InstanceGroupStateChangeReasonCode"></a>
<a id="tocSinstancegroupstatechangereasoncode"></a>
<a id="tocsinstancegroupstatechangereasoncode"></a>

```json
"INTERNAL_ERROR"
```

<h2 id="tocS_InstanceGroupStateChangeReason">InstanceGroupStateChangeReason</h2>
<!-- backwards compatibility -->
<a id="schemainstancegroupstatechangereason"></a>
<a id="schema_InstanceGroupStateChangeReason"></a>
<a id="tocSinstancegroupstatechangereason"></a>
<a id="tocsinstancegroupstatechangereason"></a>

```json
{
  "Code": {},
  "Message": {}
}
```

The status change reason details for the instance group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_InstanceGroupTimeline">InstanceGroupTimeline</h2>
<!-- backwards compatibility -->
<a id="schemainstancegrouptimeline"></a>
<a id="schema_InstanceGroupTimeline"></a>
<a id="tocSinstancegrouptimeline"></a>
<a id="tocsinstancegrouptimeline"></a>

```json
{
  "CreationDateTime": {},
  "ReadyDateTime": {},
  "EndDateTime": {}
}
```

The timeline of the instance group lifecycle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationDateTime|object|false|none|none|
|ReadyDateTime|object|false|none|none|
|EndDateTime|object|false|none|none|

<h2 id="tocS_InstanceGroupTypeList">InstanceGroupTypeList</h2>
<!-- backwards compatibility -->
<a id="schemainstancegrouptypelist"></a>
<a id="schema_InstanceGroupTypeList"></a>
<a id="tocSinstancegrouptypelist"></a>
<a id="tocsinstancegrouptypelist"></a>

```json
[
  "MASTER"
]
```

<h2 id="tocS_InstanceList">InstanceList</h2>
<!-- backwards compatibility -->
<a id="schemainstancelist"></a>
<a id="schema_InstanceList"></a>
<a id="tocSinstancelist"></a>
<a id="tocsinstancelist"></a>

```json
[
  {
    "Id": {},
    "Ec2InstanceId": {},
    "PublicDnsName": {},
    "PublicIpAddress": {},
    "PrivateDnsName": {},
    "PrivateIpAddress": {},
    "Status": {
      "State": {},
      "StateChangeReason": {
        "Code": {},
        "Message": {}
      },
      "Timeline": {
        "CreationDateTime": {},
        "ReadyDateTime": {},
        "EndDateTime": {}
      }
    },
    "InstanceGroupId": {},
    "InstanceFleetId": {},
    "Market": {},
    "InstanceType": {},
    "EbsVolumes": {}
  }
]
```

<h2 id="tocS_InstanceResizePolicy">InstanceResizePolicy</h2>
<!-- backwards compatibility -->
<a id="schemainstanceresizepolicy"></a>
<a id="schema_InstanceResizePolicy"></a>
<a id="tocSinstanceresizepolicy"></a>
<a id="tocsinstanceresizepolicy"></a>

```json
{
  "InstancesToTerminate": {},
  "InstancesToProtect": {},
  "InstanceTerminationTimeout": {}
}
```

Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstancesToTerminate|object|false|none|none|
|InstancesToProtect|object|false|none|none|
|InstanceTerminationTimeout|object|false|none|none|

<h2 id="tocS_InstanceState">InstanceState</h2>
<!-- backwards compatibility -->
<a id="schemainstancestate"></a>
<a id="schema_InstanceState"></a>
<a id="tocSinstancestate"></a>
<a id="tocsinstancestate"></a>

```json
"AWAITING_FULFILLMENT"
```

<h2 id="tocS_InstanceStateChangeReasonCode">InstanceStateChangeReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemainstancestatechangereasoncode"></a>
<a id="schema_InstanceStateChangeReasonCode"></a>
<a id="tocSinstancestatechangereasoncode"></a>
<a id="tocsinstancestatechangereasoncode"></a>

```json
"INTERNAL_ERROR"
```

<h2 id="tocS_InstanceStateChangeReason">InstanceStateChangeReason</h2>
<!-- backwards compatibility -->
<a id="schemainstancestatechangereason"></a>
<a id="schema_InstanceStateChangeReason"></a>
<a id="tocSinstancestatechangereason"></a>
<a id="tocsinstancestatechangereason"></a>

```json
{
  "Code": {},
  "Message": {}
}
```

The details of the status change reason for the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_InstanceStateList">InstanceStateList</h2>
<!-- backwards compatibility -->
<a id="schemainstancestatelist"></a>
<a id="schema_InstanceStateList"></a>
<a id="tocSinstancestatelist"></a>
<a id="tocsinstancestatelist"></a>

```json
[
  "AWAITING_FULFILLMENT"
]
```

<h2 id="tocS_InstanceTimeline">InstanceTimeline</h2>
<!-- backwards compatibility -->
<a id="schemainstancetimeline"></a>
<a id="schema_InstanceTimeline"></a>
<a id="tocSinstancetimeline"></a>
<a id="tocsinstancetimeline"></a>

```json
{
  "CreationDateTime": {},
  "ReadyDateTime": {},
  "EndDateTime": {}
}
```

The timeline of the instance lifecycle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationDateTime|object|false|none|none|
|ReadyDateTime|object|false|none|none|
|EndDateTime|object|false|none|none|

<h2 id="tocS_InstanceTypeConfig">InstanceTypeConfig</h2>
<!-- backwards compatibility -->
<a id="schemainstancetypeconfig"></a>
<a id="schema_InstanceTypeConfig"></a>
<a id="tocSinstancetypeconfig"></a>
<a id="tocsinstancetypeconfig"></a>

```json
{
  "InstanceType": {},
  "WeightedCapacity": {},
  "BidPrice": {},
  "BidPriceAsPercentageOfOnDemandPrice": {},
  "EbsConfiguration": {
    "EbsBlockDeviceConfigs": {},
    "EbsOptimized": {}
  },
  "Configurations": {},
  "CustomAmiId": {}
}
```

<p>An instance type configuration for each instance type in an instance fleet, which determines the EC2 instances Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities. When you use an allocation strategy, you can include a maximum of 30 instance type configurations for a fleet. For more information about how to use an allocation strategy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html">Configure Instance Fleets</a>. Without an allocation strategy, you may specify a maximum of five instance type configurations for a fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceType|object|true|none|none|
|WeightedCapacity|object|false|none|none|
|BidPrice|object|false|none|none|
|BidPriceAsPercentageOfOnDemandPrice|object|false|none|none|
|EbsConfiguration|object|false|none|none|
|Configurations|object|false|none|none|
|CustomAmiId|object|false|none|none|

<h2 id="tocS_InstanceTypeSpecification">InstanceTypeSpecification</h2>
<!-- backwards compatibility -->
<a id="schemainstancetypespecification"></a>
<a id="schema_InstanceTypeSpecification"></a>
<a id="tocSinstancetypespecification"></a>
<a id="tocsinstancetypespecification"></a>

```json
{
  "InstanceType": {},
  "WeightedCapacity": {},
  "BidPrice": {},
  "BidPriceAsPercentageOfOnDemandPrice": {},
  "Configurations": {},
  "EbsBlockDevices": {},
  "EbsOptimized": {},
  "CustomAmiId": {}
}
```

<p>The configuration specification for each instance type in an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceType|object|false|none|none|
|WeightedCapacity|object|false|none|none|
|BidPrice|object|false|none|none|
|BidPriceAsPercentageOfOnDemandPrice|object|false|none|none|
|Configurations|object|false|none|none|
|EbsBlockDevices|object|false|none|none|
|EbsOptimized|object|false|none|none|
|CustomAmiId|object|false|none|none|

<h2 id="tocS_JobFlowExecutionStatusDetail">JobFlowExecutionStatusDetail</h2>
<!-- backwards compatibility -->
<a id="schemajobflowexecutionstatusdetail"></a>
<a id="schema_JobFlowExecutionStatusDetail"></a>
<a id="tocSjobflowexecutionstatusdetail"></a>
<a id="tocsjobflowexecutionstatusdetail"></a>

```json
{
  "State": {},
  "CreationDateTime": {},
  "StartDateTime": {},
  "ReadyDateTime": {},
  "EndDateTime": {},
  "LastStateChangeReason": {}
}
```

Describes the status of the cluster (job flow).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|true|none|none|
|CreationDateTime|object|true|none|none|
|StartDateTime|object|false|none|none|
|ReadyDateTime|object|false|none|none|
|EndDateTime|object|false|none|none|
|LastStateChangeReason|object|false|none|none|

<h2 id="tocS_JobFlowInstancesDetail">JobFlowInstancesDetail</h2>
<!-- backwards compatibility -->
<a id="schemajobflowinstancesdetail"></a>
<a id="schema_JobFlowInstancesDetail"></a>
<a id="tocSjobflowinstancesdetail"></a>
<a id="tocsjobflowinstancesdetail"></a>

```json
{
  "MasterInstanceType": {},
  "MasterPublicDnsName": {},
  "MasterInstanceId": {},
  "SlaveInstanceType": {},
  "InstanceCount": {},
  "InstanceGroups": {},
  "NormalizedInstanceHours": {},
  "Ec2KeyName": {},
  "Ec2SubnetId": {},
  "Placement": {
    "AvailabilityZone": {},
    "AvailabilityZones": {}
  },
  "KeepJobFlowAliveWhenNoSteps": {},
  "TerminationProtected": {},
  "HadoopVersion": {}
}
```

Specify the type of Amazon EC2 instances that the cluster (job flow) runs on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MasterInstanceType|object|true|none|none|
|MasterPublicDnsName|object|false|none|none|
|MasterInstanceId|object|false|none|none|
|SlaveInstanceType|object|true|none|none|
|InstanceCount|object|true|none|none|
|InstanceGroups|object|false|none|none|
|NormalizedInstanceHours|object|false|none|none|
|Ec2KeyName|object|false|none|none|
|Ec2SubnetId|object|false|none|none|
|Placement|object|false|none|none|
|KeepJobFlowAliveWhenNoSteps|object|false|none|none|
|TerminationProtected|object|false|none|none|
|HadoopVersion|object|false|none|none|

<h2 id="tocS_StepDetailList">StepDetailList</h2>
<!-- backwards compatibility -->
<a id="schemastepdetaillist"></a>
<a id="schema_StepDetailList"></a>
<a id="tocSstepdetaillist"></a>
<a id="tocsstepdetaillist"></a>

```json
[
  {
    "StepConfig": {
      "Name": {},
      "ActionOnFailure": {},
      "HadoopJarStep": {
        "Properties": {},
        "Jar": {},
        "MainClass": {},
        "Args": {}
      }
    },
    "ExecutionStatusDetail": {
      "State": {},
      "CreationDateTime": {},
      "StartDateTime": {},
      "EndDateTime": {},
      "LastStateChangeReason": {}
    }
  }
]
```

<h2 id="tocS_SupportedProductsList">SupportedProductsList</h2>
<!-- backwards compatibility -->
<a id="schemasupportedproductslist"></a>
<a id="schema_SupportedProductsList"></a>
<a id="tocSsupportedproductslist"></a>
<a id="tocssupportedproductslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_JobFlowDetail">JobFlowDetail</h2>
<!-- backwards compatibility -->
<a id="schemajobflowdetail"></a>
<a id="schema_JobFlowDetail"></a>
<a id="tocSjobflowdetail"></a>
<a id="tocsjobflowdetail"></a>

```json
{
  "JobFlowId": {},
  "Name": {},
  "LogUri": {},
  "LogEncryptionKmsKeyId": {},
  "AmiVersion": {},
  "ExecutionStatusDetail": {
    "State": {},
    "CreationDateTime": {},
    "StartDateTime": {},
    "ReadyDateTime": {},
    "EndDateTime": {},
    "LastStateChangeReason": {}
  },
  "Instances": {
    "MasterInstanceType": {},
    "MasterPublicDnsName": {},
    "MasterInstanceId": {},
    "SlaveInstanceType": {},
    "InstanceCount": {},
    "InstanceGroups": {},
    "NormalizedInstanceHours": {},
    "Ec2KeyName": {},
    "Ec2SubnetId": {},
    "Placement": {
      "AvailabilityZone": {},
      "AvailabilityZones": {}
    },
    "KeepJobFlowAliveWhenNoSteps": {},
    "TerminationProtected": {},
    "HadoopVersion": {}
  },
  "Steps": {},
  "BootstrapActions": {},
  "SupportedProducts": {},
  "VisibleToAllUsers": {},
  "JobFlowRole": {},
  "ServiceRole": {},
  "AutoScalingRole": {},
  "ScaleDownBehavior": {}
}
```

A description of a cluster (job flow).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobFlowId|object|true|none|none|
|Name|object|true|none|none|
|LogUri|object|false|none|none|
|LogEncryptionKmsKeyId|object|false|none|none|
|AmiVersion|object|false|none|none|
|ExecutionStatusDetail|object|true|none|none|
|Instances|object|true|none|none|
|Steps|object|false|none|none|
|BootstrapActions|object|false|none|none|
|SupportedProducts|object|false|none|none|
|VisibleToAllUsers|object|false|none|none|
|JobFlowRole|object|false|none|none|
|ServiceRole|object|false|none|none|
|AutoScalingRole|object|false|none|none|
|ScaleDownBehavior|object|false|none|none|

<h2 id="tocS_JobFlowExecutionState">JobFlowExecutionState</h2>
<!-- backwards compatibility -->
<a id="schemajobflowexecutionstate"></a>
<a id="schema_JobFlowExecutionState"></a>
<a id="tocSjobflowexecutionstate"></a>
<a id="tocsjobflowexecutionstate"></a>

```json
"STARTING"
```

The type of instance.

<h2 id="tocS_PlacementType">PlacementType</h2>
<!-- backwards compatibility -->
<a id="schemaplacementtype"></a>
<a id="schema_PlacementType"></a>
<a id="tocSplacementtype"></a>
<a id="tocsplacementtype"></a>

```json
{
  "AvailabilityZone": {},
  "AvailabilityZones": {}
}
```

The Amazon EC2 Availability Zone configuration of the cluster (job flow).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZone|object|false|none|none|
|AvailabilityZones|object|false|none|none|

<h2 id="tocS_SecurityGroupsList">SecurityGroupsList</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupslist"></a>
<a id="schema_SecurityGroupsList"></a>
<a id="tocSsecuritygroupslist"></a>
<a id="tocssecuritygroupslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_JobFlowInstancesConfig">JobFlowInstancesConfig</h2>
<!-- backwards compatibility -->
<a id="schemajobflowinstancesconfig"></a>
<a id="schema_JobFlowInstancesConfig"></a>
<a id="tocSjobflowinstancesconfig"></a>
<a id="tocsjobflowinstancesconfig"></a>

```json
{
  "MasterInstanceType": {},
  "SlaveInstanceType": {},
  "InstanceCount": {},
  "InstanceGroups": {},
  "InstanceFleets": {},
  "Ec2KeyName": {},
  "Placement": {
    "AvailabilityZone": {},
    "AvailabilityZones": {}
  },
  "KeepJobFlowAliveWhenNoSteps": {},
  "TerminationProtected": {},
  "HadoopVersion": {},
  "Ec2SubnetId": {},
  "Ec2SubnetIds": {},
  "EmrManagedMasterSecurityGroup": {},
  "EmrManagedSlaveSecurityGroup": {},
  "ServiceAccessSecurityGroup": {},
  "AdditionalMasterSecurityGroups": {},
  "AdditionalSlaveSecurityGroups": {}
}
```

A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MasterInstanceType|object|false|none|none|
|SlaveInstanceType|object|false|none|none|
|InstanceCount|object|false|none|none|
|InstanceGroups|object|false|none|none|
|InstanceFleets|object|false|none|none|
|Ec2KeyName|object|false|none|none|
|Placement|object|false|none|none|
|KeepJobFlowAliveWhenNoSteps|object|false|none|none|
|TerminationProtected|object|false|none|none|
|HadoopVersion|object|false|none|none|
|Ec2SubnetId|object|false|none|none|
|Ec2SubnetIds|object|false|none|none|
|EmrManagedMasterSecurityGroup|object|false|none|none|
|EmrManagedSlaveSecurityGroup|object|false|none|none|
|ServiceAccessSecurityGroup|object|false|none|none|
|AdditionalMasterSecurityGroups|object|false|none|none|
|AdditionalSlaveSecurityGroups|object|false|none|none|

<h2 id="tocS_KeyValue">KeyValue</h2>
<!-- backwards compatibility -->
<a id="schemakeyvalue"></a>
<a id="schema_KeyValue"></a>
<a id="tocSkeyvalue"></a>
<a id="tocskeyvalue"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

A key-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_Marker">Marker</h2>
<!-- backwards compatibility -->
<a id="schemamarker"></a>
<a id="schema_Marker"></a>
<a id="tocSmarker"></a>
<a id="tocsmarker"></a>

```json
"string"
```

<h2 id="tocS_NotebookExecutionStatus">NotebookExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemanotebookexecutionstatus"></a>
<a id="schema_NotebookExecutionStatus"></a>
<a id="tocSnotebookexecutionstatus"></a>
<a id="tocsnotebookexecutionstatus"></a>

```json
"START_PENDING"
```

<h2 id="tocS_NotebookExecutionSummaryList">NotebookExecutionSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemanotebookexecutionsummarylist"></a>
<a id="schema_NotebookExecutionSummaryList"></a>
<a id="tocSnotebookexecutionsummarylist"></a>
<a id="tocsnotebookexecutionsummarylist"></a>

```json
[
  {
    "NotebookExecutionId": {},
    "EditorId": {},
    "NotebookExecutionName": {},
    "Status": {},
    "StartTime": {},
    "EndTime": {}
  }
]
```

<h2 id="tocS_ReleaseLabelFilter">ReleaseLabelFilter</h2>
<!-- backwards compatibility -->
<a id="schemareleaselabelfilter"></a>
<a id="schema_ReleaseLabelFilter"></a>
<a id="tocSreleaselabelfilter"></a>
<a id="tocsreleaselabelfilter"></a>

```json
{
  "Prefix": {},
  "Application": {}
}
```

The release label filters by application or version prefix.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prefix|object|false|none|none|
|Application|object|false|none|none|

<h2 id="tocS_SecurityConfigurationList">SecurityConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemasecurityconfigurationlist"></a>
<a id="schema_SecurityConfigurationList"></a>
<a id="tocSsecurityconfigurationlist"></a>
<a id="tocssecurityconfigurationlist"></a>

```json
[
  {
    "Name": {},
    "CreationDateTime": {}
  }
]
```

<h2 id="tocS_StepStateList">StepStateList</h2>
<!-- backwards compatibility -->
<a id="schemastepstatelist"></a>
<a id="schema_StepStateList"></a>
<a id="tocSstepstatelist"></a>
<a id="tocsstepstatelist"></a>

```json
[
  "PENDING"
]
```

<h2 id="tocS_StepSummaryList">StepSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemastepsummarylist"></a>
<a id="schema_StepSummaryList"></a>
<a id="tocSstepsummarylist"></a>
<a id="tocsstepsummarylist"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Config": {
      "Jar": {},
      "Properties": {
        "property1": "string",
        "property2": "string"
      },
      "MainClass": {},
      "Args": {}
    },
    "ActionOnFailure": {},
    "Status": {
      "State": {},
      "StateChangeReason": {
        "Code": {},
        "Message": {}
      },
      "FailureDetails": {
        "Reason": {},
        "Message": {},
        "LogFile": {}
      },
      "Timeline": {
        "CreationDateTime": {},
        "StartDateTime": {},
        "EndDateTime": {}
      }
    }
  }
]
```

<h2 id="tocS_SessionMappingSummaryList">SessionMappingSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemasessionmappingsummarylist"></a>
<a id="schema_SessionMappingSummaryList"></a>
<a id="tocSsessionmappingsummarylist"></a>
<a id="tocssessionmappingsummarylist"></a>

```json
[
  {
    "StudioId": {},
    "IdentityId": {},
    "IdentityName": {},
    "IdentityType": {},
    "SessionPolicyArn": {},
    "CreationTime": {}
  }
]
```

<h2 id="tocS_StudioSummaryList">StudioSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemastudiosummarylist"></a>
<a id="schema_StudioSummaryList"></a>
<a id="tocSstudiosummarylist"></a>
<a id="tocsstudiosummarylist"></a>

```json
[
  {
    "StudioId": {},
    "Name": {},
    "VpcId": {},
    "Description": {},
    "Url": {},
    "AuthMode": {},
    "CreationTime": {}
  }
]
```

<h2 id="tocS_MetricDimension">MetricDimension</h2>
<!-- backwards compatibility -->
<a id="schemametricdimension"></a>
<a id="schema_MetricDimension"></a>
<a id="tocSmetricdimension"></a>
<a id="tocsmetricdimension"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

A CloudWatch dimension, which is specified using a <code>Key</code> (known as a <code>Name</code> in CloudWatch), <code>Value</code> pair. By default, Amazon EMR uses one dimension whose <code>Key</code> is <code>JobFlowID</code> and <code>Value</code> is a variable representing the cluster ID, which is <code>${emr.clusterId}</code>. This enables the rule to bootstrap when the cluster ID becomes available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_SupportedProductConfig">SupportedProductConfig</h2>
<!-- backwards compatibility -->
<a id="schemasupportedproductconfig"></a>
<a id="schema_SupportedProductConfig"></a>
<a id="tocSsupportedproductconfig"></a>
<a id="tocssupportedproductconfig"></a>

```json
{
  "Name": {},
  "Args": {}
}
```

The list of supported product configurations that allow user-supplied arguments. EMR accepts these arguments and forwards them to the corresponding installation script as bootstrap action arguments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Args|object|false|none|none|

<h2 id="tocS_NewSupportedProductsList">NewSupportedProductsList</h2>
<!-- backwards compatibility -->
<a id="schemanewsupportedproductslist"></a>
<a id="schema_NewSupportedProductsList"></a>
<a id="tocSnewsupportedproductslist"></a>
<a id="tocsnewsupportedproductslist"></a>

```json
[
  {
    "Name": {},
    "Args": {}
  }
]
```

<h2 id="tocS_NotebookExecutionSummary">NotebookExecutionSummary</h2>
<!-- backwards compatibility -->
<a id="schemanotebookexecutionsummary"></a>
<a id="schema_NotebookExecutionSummary"></a>
<a id="tocSnotebookexecutionsummary"></a>
<a id="tocsnotebookexecutionsummary"></a>

```json
{
  "NotebookExecutionId": {},
  "EditorId": {},
  "NotebookExecutionName": {},
  "Status": {},
  "StartTime": {},
  "EndTime": {}
}
```

Details for a notebook execution. The details include information such as the unique ID and status of the notebook execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookExecutionId|object|false|none|none|
|EditorId|object|false|none|none|
|NotebookExecutionName|object|false|none|none|
|Status|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|

<h2 id="tocS_OSRelease">OSRelease</h2>
<!-- backwards compatibility -->
<a id="schemaosrelease"></a>
<a id="schema_OSRelease"></a>
<a id="tocSosrelease"></a>
<a id="tocsosrelease"></a>

```json
{
  "Label": {}
}
```

The Amazon Linux release specified for a cluster in the RunJobFlow request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Label|object|false|none|none|

<h2 id="tocS_OnDemandCapacityReservationUsageStrategy">OnDemandCapacityReservationUsageStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaondemandcapacityreservationusagestrategy"></a>
<a id="schema_OnDemandCapacityReservationUsageStrategy"></a>
<a id="tocSondemandcapacityreservationusagestrategy"></a>
<a id="tocsondemandcapacityreservationusagestrategy"></a>

```json
"use-capacity-reservations-first"
```

<h2 id="tocS_OnDemandCapacityReservationPreference">OnDemandCapacityReservationPreference</h2>
<!-- backwards compatibility -->
<a id="schemaondemandcapacityreservationpreference"></a>
<a id="schema_OnDemandCapacityReservationPreference"></a>
<a id="tocSondemandcapacityreservationpreference"></a>
<a id="tocsondemandcapacityreservationpreference"></a>

```json
"open"
```

<h2 id="tocS_OnDemandCapacityReservationOptions">OnDemandCapacityReservationOptions</h2>
<!-- backwards compatibility -->
<a id="schemaondemandcapacityreservationoptions"></a>
<a id="schema_OnDemandCapacityReservationOptions"></a>
<a id="tocSondemandcapacityreservationoptions"></a>
<a id="tocsondemandcapacityreservationoptions"></a>

```json
{
  "UsageStrategy": {},
  "CapacityReservationPreference": {},
  "CapacityReservationResourceGroupArn": {}
}
```

Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UsageStrategy|object|false|none|none|
|CapacityReservationPreference|object|false|none|none|
|CapacityReservationResourceGroupArn|object|false|none|none|

<h2 id="tocS_OnDemandProvisioningAllocationStrategy">OnDemandProvisioningAllocationStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaondemandprovisioningallocationstrategy"></a>
<a id="schema_OnDemandProvisioningAllocationStrategy"></a>
<a id="tocSondemandprovisioningallocationstrategy"></a>
<a id="tocsondemandprovisioningallocationstrategy"></a>

```json
"lowest-price"
```

<h2 id="tocS_PlacementGroupStrategy">PlacementGroupStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaplacementgroupstrategy"></a>
<a id="schema_PlacementGroupStrategy"></a>
<a id="tocSplacementgroupstrategy"></a>
<a id="tocsplacementgroupstrategy"></a>

```json
"SPREAD"
```

<h2 id="tocS_PlacementGroupConfig">PlacementGroupConfig</h2>
<!-- backwards compatibility -->
<a id="schemaplacementgroupconfig"></a>
<a id="schema_PlacementGroupConfig"></a>
<a id="tocSplacementgroupconfig"></a>
<a id="tocsplacementgroupconfig"></a>

```json
{
  "InstanceRole": {},
  "PlacementStrategy": {}
}
```

<p>Placement group configuration for an Amazon EMR cluster. The configuration specifies the placement strategy that can be applied to instance roles during cluster creation.</p> <p>To use this configuration, consider attaching managed policy AmazonElasticMapReducePlacementGroupPolicy to the EMR role.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceRole|object|true|none|none|
|PlacementStrategy|object|false|none|none|

<h2 id="tocS_Port">Port</h2>
<!-- backwards compatibility -->
<a id="schemaport"></a>
<a id="schema_Port"></a>
<a id="tocSport"></a>
<a id="tocsport"></a>

```json
-1
```

<h2 id="tocS_PortRange">PortRange</h2>
<!-- backwards compatibility -->
<a id="schemaportrange"></a>
<a id="schema_PortRange"></a>
<a id="tocSportrange"></a>
<a id="tocsportrange"></a>

```json
{
  "MinRange": {},
  "MaxRange": {}
}
```

A list of port ranges that are permitted to allow inbound traffic from all public IP addresses. To specify a single port, use the same value for <code>MinRange</code> and <code>MaxRange</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MinRange|object|true|none|none|
|MaxRange|object|false|none|none|

<h2 id="tocS_SimpleScalingPolicyConfiguration">SimpleScalingPolicyConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasimplescalingpolicyconfiguration"></a>
<a id="schema_SimpleScalingPolicyConfiguration"></a>
<a id="tocSsimplescalingpolicyconfiguration"></a>
<a id="tocssimplescalingpolicyconfiguration"></a>

```json
{
  "AdjustmentType": {},
  "ScalingAdjustment": {},
  "CoolDown": {}
}
```

An automatic scaling configuration, which describes how the policy adds or removes instances, the cooldown period, and the number of EC2 instances that will be added each time the CloudWatch metric alarm condition is satisfied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdjustmentType|object|false|none|none|
|ScalingAdjustment|object|true|none|none|
|CoolDown|object|false|none|none|

<h2 id="tocS_ScalingAction">ScalingAction</h2>
<!-- backwards compatibility -->
<a id="schemascalingaction"></a>
<a id="schema_ScalingAction"></a>
<a id="tocSscalingaction"></a>
<a id="tocsscalingaction"></a>

```json
{
  "Market": {},
  "SimpleScalingPolicyConfiguration": {
    "AdjustmentType": {},
    "ScalingAdjustment": {},
    "CoolDown": {}
  }
}
```

The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Market|object|false|none|none|
|SimpleScalingPolicyConfiguration|object|true|none|none|

<h2 id="tocS_ScalingTrigger">ScalingTrigger</h2>
<!-- backwards compatibility -->
<a id="schemascalingtrigger"></a>
<a id="schema_ScalingTrigger"></a>
<a id="tocSscalingtrigger"></a>
<a id="tocsscalingtrigger"></a>

```json
{
  "CloudWatchAlarmDefinition": {
    "ComparisonOperator": {},
    "EvaluationPeriods": {},
    "MetricName": {},
    "Namespace": {},
    "Period": {},
    "Statistic": {},
    "Threshold": {},
    "Unit": {},
    "Dimensions": {}
  }
}
```

The conditions that trigger an automatic scaling activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudWatchAlarmDefinition|object|true|none|none|

<h2 id="tocS_ScalingRule">ScalingRule</h2>
<!-- backwards compatibility -->
<a id="schemascalingrule"></a>
<a id="schema_ScalingRule"></a>
<a id="tocSscalingrule"></a>
<a id="tocsscalingrule"></a>

```json
{
  "Name": {},
  "Description": {},
  "Action": {
    "Market": {},
    "SimpleScalingPolicyConfiguration": {
      "AdjustmentType": {},
      "ScalingAdjustment": {},
      "CoolDown": {}
    }
  },
  "Trigger": {
    "CloudWatchAlarmDefinition": {
      "ComparisonOperator": {},
      "EvaluationPeriods": {},
      "MetricName": {},
      "Namespace": {},
      "Period": {},
      "Statistic": {},
      "Threshold": {},
      "Unit": {},
      "Dimensions": {}
    }
  }
}
```

A scale-in or scale-out rule that defines scaling activity, including the CloudWatch metric alarm that triggers activity, how EC2 instances are added or removed, and the periodicity of adjustments. The automatic scaling policy for an instance group can comprise one or more automatic scaling rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|Action|object|true|none|none|
|Trigger|object|true|none|none|

<h2 id="tocS_SecurityConfigurationSummary">SecurityConfigurationSummary</h2>
<!-- backwards compatibility -->
<a id="schemasecurityconfigurationsummary"></a>
<a id="schema_SecurityConfigurationSummary"></a>
<a id="tocSsecurityconfigurationsummary"></a>
<a id="tocssecurityconfigurationsummary"></a>

```json
{
  "Name": {},
  "CreationDateTime": {}
}
```

The creation date and time, and name, of a security configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|CreationDateTime|object|false|none|none|

<h2 id="tocS_SessionMappingSummary">SessionMappingSummary</h2>
<!-- backwards compatibility -->
<a id="schemasessionmappingsummary"></a>
<a id="schema_SessionMappingSummary"></a>
<a id="tocSsessionmappingsummary"></a>
<a id="tocssessionmappingsummary"></a>

```json
{
  "StudioId": {},
  "IdentityId": {},
  "IdentityName": {},
  "IdentityType": {},
  "SessionPolicyArn": {},
  "CreationTime": {}
}
```

Details for an Amazon EMR Studio session mapping. The details do not include the time the session mapping was last modified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StudioId|object|false|none|none|
|IdentityId|object|false|none|none|
|IdentityName|object|false|none|none|
|IdentityType|object|false|none|none|
|SessionPolicyArn|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_SimplifiedApplication">SimplifiedApplication</h2>
<!-- backwards compatibility -->
<a id="schemasimplifiedapplication"></a>
<a id="schema_SimplifiedApplication"></a>
<a id="tocSsimplifiedapplication"></a>
<a id="tocssimplifiedapplication"></a>

```json
{
  "Name": {},
  "Version": {}
}
```

The returned release label application names or versions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_SpotProvisioningAllocationStrategy">SpotProvisioningAllocationStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaspotprovisioningallocationstrategy"></a>
<a id="schema_SpotProvisioningAllocationStrategy"></a>
<a id="tocSspotprovisioningallocationstrategy"></a>
<a id="tocsspotprovisioningallocationstrategy"></a>

```json
"capacity-optimized"
```

<h2 id="tocS_SpotProvisioningTimeoutAction">SpotProvisioningTimeoutAction</h2>
<!-- backwards compatibility -->
<a id="schemaspotprovisioningtimeoutaction"></a>
<a id="schema_SpotProvisioningTimeoutAction"></a>
<a id="tocSspotprovisioningtimeoutaction"></a>
<a id="tocsspotprovisioningtimeoutaction"></a>

```json
"SWITCH_TO_ON_DEMAND"
```

<h2 id="tocS_StepStatus">StepStatus</h2>
<!-- backwards compatibility -->
<a id="schemastepstatus"></a>
<a id="schema_StepStatus"></a>
<a id="tocSstepstatus"></a>
<a id="tocsstepstatus"></a>

```json
{
  "State": {},
  "StateChangeReason": {
    "Code": {},
    "Message": {}
  },
  "FailureDetails": {
    "Reason": {},
    "Message": {},
    "LogFile": {}
  },
  "Timeline": {
    "CreationDateTime": {},
    "StartDateTime": {},
    "EndDateTime": {}
  }
}
```

The execution status details of the cluster step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|
|StateChangeReason|object|false|none|none|
|FailureDetails|object|false|none|none|
|Timeline|object|false|none|none|

<h2 id="tocS_StepConfig">StepConfig</h2>
<!-- backwards compatibility -->
<a id="schemastepconfig"></a>
<a id="schema_StepConfig"></a>
<a id="tocSstepconfig"></a>
<a id="tocsstepconfig"></a>

```json
{
  "Name": {},
  "ActionOnFailure": {},
  "HadoopJarStep": {
    "Properties": {},
    "Jar": {},
    "MainClass": {},
    "Args": {}
  }
}
```

Specification for a cluster (job flow) step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ActionOnFailure|object|false|none|none|
|HadoopJarStep|object|true|none|none|

<h2 id="tocS_StepExecutionStatusDetail">StepExecutionStatusDetail</h2>
<!-- backwards compatibility -->
<a id="schemastepexecutionstatusdetail"></a>
<a id="schema_StepExecutionStatusDetail"></a>
<a id="tocSstepexecutionstatusdetail"></a>
<a id="tocsstepexecutionstatusdetail"></a>

```json
{
  "State": {},
  "CreationDateTime": {},
  "StartDateTime": {},
  "EndDateTime": {},
  "LastStateChangeReason": {}
}
```

The execution state of a step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|true|none|none|
|CreationDateTime|object|true|none|none|
|StartDateTime|object|false|none|none|
|EndDateTime|object|false|none|none|
|LastStateChangeReason|object|false|none|none|

<h2 id="tocS_StepDetail">StepDetail</h2>
<!-- backwards compatibility -->
<a id="schemastepdetail"></a>
<a id="schema_StepDetail"></a>
<a id="tocSstepdetail"></a>
<a id="tocsstepdetail"></a>

```json
{
  "StepConfig": {
    "Name": {},
    "ActionOnFailure": {},
    "HadoopJarStep": {
      "Properties": {},
      "Jar": {},
      "MainClass": {},
      "Args": {}
    }
  },
  "ExecutionStatusDetail": {
    "State": {},
    "CreationDateTime": {},
    "StartDateTime": {},
    "EndDateTime": {},
    "LastStateChangeReason": {}
  }
}
```

Combines the execution state and configuration of a step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StepConfig|object|true|none|none|
|ExecutionStatusDetail|object|true|none|none|

<h2 id="tocS_StepExecutionState">StepExecutionState</h2>
<!-- backwards compatibility -->
<a id="schemastepexecutionstate"></a>
<a id="schema_StepExecutionState"></a>
<a id="tocSstepexecutionstate"></a>
<a id="tocsstepexecutionstate"></a>

```json
"PENDING"
```

<h2 id="tocS_StepState">StepState</h2>
<!-- backwards compatibility -->
<a id="schemastepstate"></a>
<a id="schema_StepState"></a>
<a id="tocSstepstate"></a>
<a id="tocsstepstate"></a>

```json
"PENDING"
```

<h2 id="tocS_StepStateChangeReasonCode">StepStateChangeReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemastepstatechangereasoncode"></a>
<a id="schema_StepStateChangeReasonCode"></a>
<a id="tocSstepstatechangereasoncode"></a>
<a id="tocsstepstatechangereasoncode"></a>

```json
"NONE"
```

<h2 id="tocS_StepStateChangeReason">StepStateChangeReason</h2>
<!-- backwards compatibility -->
<a id="schemastepstatechangereason"></a>
<a id="schema_StepStateChangeReason"></a>
<a id="tocSstepstatechangereason"></a>
<a id="tocsstepstatechangereason"></a>

```json
{
  "Code": {},
  "Message": {}
}
```

The details of the step state change reason.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_StepTimeline">StepTimeline</h2>
<!-- backwards compatibility -->
<a id="schemasteptimeline"></a>
<a id="schema_StepTimeline"></a>
<a id="tocSsteptimeline"></a>
<a id="tocssteptimeline"></a>

```json
{
  "CreationDateTime": {},
  "StartDateTime": {},
  "EndDateTime": {}
}
```

The timeline of the cluster step lifecycle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationDateTime|object|false|none|none|
|StartDateTime|object|false|none|none|
|EndDateTime|object|false|none|none|

<h2 id="tocS_StepSummary">StepSummary</h2>
<!-- backwards compatibility -->
<a id="schemastepsummary"></a>
<a id="schema_StepSummary"></a>
<a id="tocSstepsummary"></a>
<a id="tocsstepsummary"></a>

```json
{
  "Id": {},
  "Name": {},
  "Config": {
    "Jar": {},
    "Properties": {
      "property1": "string",
      "property2": "string"
    },
    "MainClass": {},
    "Args": {}
  },
  "ActionOnFailure": {},
  "Status": {
    "State": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "FailureDetails": {
      "Reason": {},
      "Message": {},
      "LogFile": {}
    },
    "Timeline": {
      "CreationDateTime": {},
      "StartDateTime": {},
      "EndDateTime": {}
    }
  }
}
```

The summary of the cluster step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Config|object|false|none|none|
|ActionOnFailure|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_StudioSummary">StudioSummary</h2>
<!-- backwards compatibility -->
<a id="schemastudiosummary"></a>
<a id="schema_StudioSummary"></a>
<a id="tocSstudiosummary"></a>
<a id="tocsstudiosummary"></a>

```json
{
  "StudioId": {},
  "Name": {},
  "VpcId": {},
  "Description": {},
  "Url": {},
  "AuthMode": {},
  "CreationTime": {}
}
```

Details for an Amazon EMR Studio, including ID, Name, VPC, and Description. The details do not include subnets, IAM roles, security groups, or tags associated with the Studio.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StudioId|object|false|none|none|
|Name|object|false|none|none|
|VpcId|object|false|none|none|
|Description|object|false|none|none|
|Url|object|false|none|none|
|AuthMode|object|false|none|none|
|CreationTime|object|false|none|none|

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

A key-value pair containing user-defined metadata that you can associate with an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_ThroughputVal">ThroughputVal</h2>
<!-- backwards compatibility -->
<a id="schemathroughputval"></a>
<a id="schema_ThroughputVal"></a>
<a id="tocSthroughputval"></a>
<a id="tocsthroughputval"></a>

```json
0
```
