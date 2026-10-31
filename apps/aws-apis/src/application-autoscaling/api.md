<h1 id="application-auto-scaling">Application Auto Scaling v2016-02-06</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>With Application Auto Scaling, you can configure automatic scaling for the following resources:</p> <ul> <li> <p>Amazon AppStream 2.0 fleets</p> </li> <li> <p>Amazon Aurora Replicas</p> </li> <li> <p>Amazon Comprehend document classification and entity recognizer endpoints</p> </li> <li> <p>Amazon DynamoDB tables and global secondary indexes throughput capacity</p> </li> <li> <p>Amazon ECS services</p> </li> <li> <p>Amazon ElastiCache for Redis clusters (replication groups)</p> </li> <li> <p>Amazon EMR clusters</p> </li> <li> <p>Amazon Keyspaces (for Apache Cassandra) tables</p> </li> <li> <p>Lambda function provisioned concurrency</p> </li> <li> <p>Amazon Managed Streaming for Apache Kafka broker storage</p> </li> <li> <p>Amazon Neptune clusters</p> </li> <li> <p>Amazon SageMaker endpoint variants</p> </li> <li> <p>Spot Fleets (Amazon EC2)</p> </li> <li> <p>Custom resources provided by your own applications or services</p> </li> </ul> <p>To learn more about Application Auto Scaling, see the <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html">Application Auto Scaling User Guide</a>.</p> <p> <b>API Summary</b> </p> <p>The Application Auto Scaling service API includes three key sets of actions: </p> <ul> <li> <p>Register and manage scalable targets - Register Amazon Web Services or custom resources as scalable targets (a resource that Application Auto Scaling can scale), set minimum and maximum capacity limits, and retrieve information on existing scalable targets.</p> </li> <li> <p>Configure and manage automatic scaling - Define scaling policies to dynamically scale your resources in response to CloudWatch alarms, schedule one-time or recurring scaling actions, and retrieve your recent scaling activity history.</p> </li> <li> <p>Suspend and resume scaling - Temporarily suspend and later resume automatic scaling by calling the <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html">RegisterScalableTarget</a> API action for any Application Auto Scaling scalable target. You can suspend and resume (individually or in combination) scale-out activities that are triggered by a scaling policy, scale-in activities that are triggered by a scaling policy, and scheduled scaling.</p> </li> </ul>

Base URLs:

* <a href="http://application-autoscaling.us-east-1.amazonaws.com">http://application-autoscaling.us-east-1.amazonaws.com</a> - The Application Auto Scaling multi-region endpoint

* <a href="https://application-autoscaling.us-east-1.amazonaws.com">https://application-autoscaling.us-east-1.amazonaws.com</a> - The Application Auto Scaling multi-region endpoint

* <a href="http://application-autoscaling.cn-north-1.amazonaws.com.cn">http://application-autoscaling.cn-north-1.amazonaws.com.cn</a> - The Application Auto Scaling endpoint for China (Beijing) and China (Ningxia)

* <a href="https://application-autoscaling.cn-north-1.amazonaws.com.cn">https://application-autoscaling.cn-north-1.amazonaws.com.cn</a> - The Application Auto Scaling endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/application-autoscaling/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="application-auto-scaling-default">Default</h1>

## DeleteScalingPolicy

<a id="opIdDeleteScalingPolicy"></a>

> Code samples

```bash
curl 'https://application-autoscaling.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleFrontendService.DeleteScalingPolicy' \
  -d '{
    "PolicyName": {},
    "ServiceNamespace": {},
    "ResourceId": {},
    "ScalableDimension": {}
  }'
```

`POST /#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy`

<p>Deletes the specified scaling policy for an Application Auto Scaling scalable target.</p> <p>Deleting a step scaling policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html#delete-step-scaling-policy">Delete a step scaling policy</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html#delete-target-tracking-policy">Delete a target tracking scaling policy</a> in the <i>Application Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "PolicyName": {},
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {}
}
```

<h3 id="deletescalingpolicy-parameters">Parameters</h3>

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
|body|body|[DeleteScalingPolicyRequest](#schemadeletescalingpolicyrequest)|true|none|
|» PolicyName|body|object|true|none|
|» ServiceNamespace|body|object|true|none|
|» ResourceId|body|object|true|none|
|» ScalableDimension|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleFrontendService.DeleteScalingPolicy|

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

<h3 id="deletescalingpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteScalingPolicyResponse](#schemadeletescalingpolicyresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ObjectNotFoundException|[ObjectNotFoundException](#schemaobjectnotfoundexception)|
|482|482|ConcurrentUpdateException|[ConcurrentUpdateException](#schemaconcurrentupdateexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteScheduledAction

<a id="opIdDeleteScheduledAction"></a>

> Code samples

```bash
curl 'https://application-autoscaling.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleFrontendService.DeleteScheduledAction' \
  -d '{
    "ServiceNamespace": {},
    "ScheduledActionName": {},
    "ResourceId": {},
    "ScalableDimension": {}
  }'
```

`POST /#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction`

<p>Deletes the specified scheduled action for an Application Auto Scaling scalable target.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html#delete-scheduled-action">Delete a scheduled action</a> in the <i>Application Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "ServiceNamespace": {},
  "ScheduledActionName": {},
  "ResourceId": {},
  "ScalableDimension": {}
}
```

<h3 id="deletescheduledaction-parameters">Parameters</h3>

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
|body|body|[DeleteScheduledActionRequest](#schemadeletescheduledactionrequest)|true|none|
|» ServiceNamespace|body|object|true|none|
|» ScheduledActionName|body|object|true|none|
|» ResourceId|body|object|true|none|
|» ScalableDimension|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleFrontendService.DeleteScheduledAction|

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

<h3 id="deletescheduledaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteScheduledActionResponse](#schemadeletescheduledactionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ObjectNotFoundException|[ObjectNotFoundException](#schemaobjectnotfoundexception)|
|482|482|ConcurrentUpdateException|[ConcurrentUpdateException](#schemaconcurrentupdateexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterScalableTarget

<a id="opIdDeregisterScalableTarget"></a>

> Code samples

```bash
curl 'https://application-autoscaling.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleFrontendService.DeregisterScalableTarget' \
  -d '{
    "ServiceNamespace": {},
    "ResourceId": {},
    "ScalableDimension": {}
  }'
```

`POST /#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget`

<p>Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. </p> <note> <p>Deregistering a scalable target deletes the scaling policies and the scheduled actions that are associated with it.</p> </note>

> Body parameter

```json
{
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {}
}
```

<h3 id="deregisterscalabletarget-parameters">Parameters</h3>

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
|body|body|[DeregisterScalableTargetRequest](#schemaderegisterscalabletargetrequest)|true|none|
|» ServiceNamespace|body|object|true|none|
|» ResourceId|body|object|true|none|
|» ScalableDimension|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleFrontendService.DeregisterScalableTarget|

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

<h3 id="deregisterscalabletarget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterScalableTargetResponse](#schemaderegisterscalabletargetresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ObjectNotFoundException|[ObjectNotFoundException](#schemaobjectnotfoundexception)|
|482|482|ConcurrentUpdateException|[ConcurrentUpdateException](#schemaconcurrentupdateexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeScalableTargets

<a id="opIdDescribeScalableTargets"></a>

> Code samples

```bash
curl 'https://application-autoscaling.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleFrontendService.DescribeScalableTargets' \
  -d '{
    "ServiceNamespace": {},
    "ResourceIds": {},
    "ScalableDimension": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets`

<p>Gets information about the scalable targets in the specified namespace.</p> <p>You can filter the results using <code>ResourceIds</code> and <code>ScalableDimension</code>.</p>

> Body parameter

```json
{
  "ServiceNamespace": {},
  "ResourceIds": {},
  "ScalableDimension": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describescalabletargets-parameters">Parameters</h3>

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
|body|body|[DescribeScalableTargetsRequest](#schemadescribescalabletargetsrequest)|true|none|
|» ServiceNamespace|body|object|true|none|
|» ResourceIds|body|object|false|none|
|» ScalableDimension|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleFrontendService.DescribeScalableTargets|

> Example responses

> 200 Response

```json
{
  "ScalableTargets": [
    {
      "CreationTime": "2019-05-06T11:21:46.199Z",
      "MaxCapacity": 10,
      "MinCapacity": 1,
      "ResourceId": "service/default/web-app",
      "RoleARN": "arn:aws:iam::012345678910:role/aws-service-role/ecs.application-autoscaling.amazonaws.com/AWSServiceRoleForApplicationAutoScaling_ECSService",
      "ScalableDimension": "ecs:service:DesiredCount",
      "ServiceNamespace": "ecs",
      "SuspendedState": {
        "DynamicScalingInSuspended": false,
        "DynamicScalingOutSuspended": false,
        "ScheduledScalingSuspended": false
      }
    }
  ]
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

<h3 id="describescalabletargets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeScalableTargetsResponse](#schemadescribescalabletargetsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|ConcurrentUpdateException|[ConcurrentUpdateException](#schemaconcurrentupdateexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeScalingActivities

<a id="opIdDescribeScalingActivities"></a>

> Code samples

```bash
curl 'https://application-autoscaling.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleFrontendService.DescribeScalingActivities' \
  -d '{
    "ServiceNamespace": {},
    "ResourceId": {},
    "ScalableDimension": {},
    "MaxResults": {},
    "NextToken": {},
    "IncludeNotScaledActivities": {}
  }'
```

`POST /#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities`

<p>Provides descriptive information about the scaling activities in the specified namespace from the previous six weeks.</p> <p>You can filter the results using <code>ResourceId</code> and <code>ScalableDimension</code>.</p> <p>For information about viewing scaling activities using the Amazon Web Services CLI, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>.</p>

> Body parameter

```json
{
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "MaxResults": {},
  "NextToken": {},
  "IncludeNotScaledActivities": {}
}
```

<h3 id="describescalingactivities-parameters">Parameters</h3>

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
|body|body|[DescribeScalingActivitiesRequest](#schemadescribescalingactivitiesrequest)|true|none|
|» ServiceNamespace|body|object|true|none|
|» ResourceId|body|object|false|none|
|» ScalableDimension|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» IncludeNotScaledActivities|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleFrontendService.DescribeScalingActivities|

> Example responses

> 200 Response

```json
{
  "ScalingActivities": [
    {
      "ActivityId": "e6c5f7d1-dbbb-4a3f-89b2-51f33e766399",
      "Cause": "monitor alarm web-app-cpu-lt-25 in state ALARM triggered policy web-app-cpu-lt-25",
      "Description": "Setting desired count to 1.",
      "EndTime": "2019-05-06T16:04:32.111Z",
      "ResourceId": "service/default/web-app",
      "ScalableDimension": "ecs:service:DesiredCount",
      "ServiceNamespace": "ecs",
      "StartTime": "2019-05-06T16:03:58.171Z",
      "StatusCode": "Successful",
      "StatusMessage": "Successfully set desired count to 1. Change successfully fulfilled by ecs."
    }
  ]
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

<h3 id="describescalingactivities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeScalingActivitiesResponse](#schemadescribescalingactivitiesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|ConcurrentUpdateException|[ConcurrentUpdateException](#schemaconcurrentupdateexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeScalingPolicies

<a id="opIdDescribeScalingPolicies"></a>

> Code samples

```bash
curl 'https://application-autoscaling.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleFrontendService.DescribeScalingPolicies' \
  -d '{
    "PolicyNames": {},
    "ServiceNamespace": {},
    "ResourceId": {},
    "ScalableDimension": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies`

<p>Describes the Application Auto Scaling scaling policies for the specified service namespace.</p> <p>You can filter the results using <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>PolicyNames</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "PolicyNames": {},
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describescalingpolicies-parameters">Parameters</h3>

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
|body|body|[DescribeScalingPoliciesRequest](#schemadescribescalingpoliciesrequest)|true|none|
|» PolicyNames|body|object|false|none|
|» ServiceNamespace|body|object|true|none|
|» ResourceId|body|object|false|none|
|» ScalableDimension|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleFrontendService.DescribeScalingPolicies|

> Example responses

> 200 Response

```json
{
  "NextToken": "",
  "ScalingPolicies": [
    {
      "Alarms": [
        {
          "AlarmARN": "arn:aws:cloudwatch:us-west-2:012345678910:alarm:web-app-cpu-gt-75",
          "AlarmName": "web-app-cpu-gt-75"
        }
      ],
      "CreationTime": "2019-05-06T12:11:39.230Z",
      "PolicyARN": "arn:aws:autoscaling:us-west-2:012345678910:scalingPolicy:6d8972f3-efc8-437c-92d1-6270f29a66e7:resource/ecs/service/default/web-app:policyName/web-app-cpu-gt-75",
      "PolicyName": "web-app-cpu-gt-75",
      "PolicyType": "StepScaling",
      "ResourceId": "service/default/web-app",
      "ScalableDimension": "ecs:service:DesiredCount",
      "ServiceNamespace": "ecs",
      "StepScalingPolicyConfiguration": {
        "AdjustmentType": "PercentChangeInCapacity",
        "Cooldown": 60,
        "StepAdjustments": [
          {
            "MetricIntervalLowerBound": 0,
            "ScalingAdjustment": 200
          }
        ]
      }
    }
  ]
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

<h3 id="describescalingpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeScalingPoliciesResponse](#schemadescribescalingpoliciesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|FailedResourceAccessException|[FailedResourceAccessException](#schemafailedresourceaccessexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|ConcurrentUpdateException|[ConcurrentUpdateException](#schemaconcurrentupdateexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeScheduledActions

<a id="opIdDescribeScheduledActions"></a>

> Code samples

```bash
curl 'https://application-autoscaling.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleFrontendService.DescribeScheduledActions' \
  -d '{
    "ScheduledActionNames": {},
    "ServiceNamespace": {},
    "ResourceId": {},
    "ScalableDimension": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions`

<p>Describes the Application Auto Scaling scheduled actions for the specified service namespace.</p> <p>You can filter the results using the <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>ScheduledActionNames</code> parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html">Managing scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "ScheduledActionNames": {},
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describescheduledactions-parameters">Parameters</h3>

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
|body|body|[DescribeScheduledActionsRequest](#schemadescribescheduledactionsrequest)|true|none|
|» ScheduledActionNames|body|object|false|none|
|» ServiceNamespace|body|object|true|none|
|» ResourceId|body|object|false|none|
|» ScalableDimension|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleFrontendService.DescribeScheduledActions|

> Example responses

> 200 Response

```json
{
  "ScheduledActions": [
    {
      "CreationTime": 1561571888.361,
      "ResourceId": "table/my-table",
      "ScalableDimension": "dynamodb:table:WriteCapacityUnits",
      "ScalableTargetAction": {
        "MaxCapacity": 20,
        "MinCapacity": 15
      },
      "Schedule": "at(2019-05-20T18:35:00)",
      "ScheduledActionARN": "arn:aws:autoscaling:us-west-2:123456789012:scheduledAction:2d36aa3b-cdf9-4565-b290-81db519b227d:resource/dynamodb/table/my-table:scheduledActionName/my-first-scheduled-action",
      "ScheduledActionName": "my-first-scheduled-action",
      "ServiceNamespace": "dynamodb"
    },
    {
      "CreationTime": 1561571946.021,
      "ResourceId": "table/my-table",
      "ScalableDimension": "dynamodb:table:WriteCapacityUnits",
      "ScalableTargetAction": {
        "MaxCapacity": 10,
        "MinCapacity": 5
      },
      "Schedule": "at(2019-05-20T18:40:00)",
      "ScheduledActionARN": "arn:aws:autoscaling:us-west-2:123456789012:scheduledAction:2d36aa3b-cdf9-4565-b290-81db519b227d:resource/dynamodb/table/my-table:scheduledActionName/my-second-scheduled-action",
      "ScheduledActionName": "my-second-scheduled-action",
      "ServiceNamespace": "dynamodb"
    }
  ]
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

<h3 id="describescheduledactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeScheduledActionsResponse](#schemadescribescheduledactionsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|ConcurrentUpdateException|[ConcurrentUpdateException](#schemaconcurrentupdateexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://application-autoscaling.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleFrontendService.ListTagsForResource' \
  -d '{
    "ResourceARN": {}
  }'
```

`POST /#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource`

<p>Returns all the tags on the specified Application Auto Scaling scalable target.</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p>

> Body parameter

```json
{
  "ResourceARN": {}
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
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleFrontendService.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "Tags": {
    "environment": "production"
  }
}
```

> 480 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutScalingPolicy

<a id="opIdPutScalingPolicy"></a>

> Code samples

```bash
curl 'https://application-autoscaling.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleFrontendService.PutScalingPolicy' \
  -d '{
    "PolicyName": {},
    "ServiceNamespace": {},
    "ResourceId": {},
    "ScalableDimension": {},
    "PolicyType": {},
    "StepScalingPolicyConfiguration": {
      "AdjustmentType": {},
      "StepAdjustments": {},
      "MinAdjustmentMagnitude": {},
      "Cooldown": {},
      "MetricAggregationType": {}
    },
    "TargetTrackingScalingPolicyConfiguration": {
      "TargetValue": {},
      "PredefinedMetricSpecification": {
        "PredefinedMetricType": {},
        "ResourceLabel": {}
      },
      "CustomizedMetricSpecification": {
        "MetricName": {},
        "Namespace": {},
        "Dimensions": {},
        "Statistic": {},
        "Unit": {},
        "Metrics": {}
      },
      "ScaleOutCooldown": {},
      "ScaleInCooldown": {},
      "DisableScaleIn": {}
    }
  }'
```

`POST /#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy`

<p>Creates or updates a scaling policy for an Application Auto Scaling scalable target.</p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy until you have registered the resource as a scalable target.</p> <p>Multiple scaling policies can be in force at the same time for the same scalable target. You can have one or more target tracking scaling policies, one or more step scaling policies, or both. However, there is a chance that multiple policies could conflict, instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives precedence to the policy that provides the largest capacity for both scale out and scale in. For example, if one policy increases capacity by 3, another policy increases capacity by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest calculated capacity (200% of 10 = 20) and scales out to 30. </p> <p>We recommend caution, however, when using target tracking scaling policies with step scaling policies because conflicts between these policies can cause undesirable behavior. For example, if the step scaling policy initiates a scale-in activity before the target tracking policy is ready to scale in, the scale-in activity will not be blocked. After the scale-in activity completes, the target tracking policy could instruct the scalable target to scale out again. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to use scaling policies. Any scaling policies that were specified for the scalable target are deleted.</p> </note>

> Body parameter

```json
{
  "PolicyName": {},
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "PolicyType": {},
  "StepScalingPolicyConfiguration": {
    "AdjustmentType": {},
    "StepAdjustments": {},
    "MinAdjustmentMagnitude": {},
    "Cooldown": {},
    "MetricAggregationType": {}
  },
  "TargetTrackingScalingPolicyConfiguration": {
    "TargetValue": {},
    "PredefinedMetricSpecification": {
      "PredefinedMetricType": {},
      "ResourceLabel": {}
    },
    "CustomizedMetricSpecification": {
      "MetricName": {},
      "Namespace": {},
      "Dimensions": {},
      "Statistic": {},
      "Unit": {},
      "Metrics": {}
    },
    "ScaleOutCooldown": {},
    "ScaleInCooldown": {},
    "DisableScaleIn": {}
  }
}
```

<h3 id="putscalingpolicy-parameters">Parameters</h3>

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
|body|body|[PutScalingPolicyRequest](#schemaputscalingpolicyrequest)|true|none|
|» PolicyName|body|object|true|none|
|» ServiceNamespace|body|object|true|none|
|» ResourceId|body|object|true|none|
|» ScalableDimension|body|object|true|none|
|» PolicyType|body|object|false|none|
|» StepScalingPolicyConfiguration|body|object|false|none|
|» » AdjustmentType|body|object|false|none|
|» » StepAdjustments|body|object|false|none|
|» » MinAdjustmentMagnitude|body|object|false|none|
|» » Cooldown|body|object|false|none|
|» » MetricAggregationType|body|object|false|none|
|» TargetTrackingScalingPolicyConfiguration|body|object|false|none|
|» » TargetValue|body|object|true|none|
|» » PredefinedMetricSpecification|body|object|false|none|
|» » » PredefinedMetricType|body|object|true|none|
|» » » ResourceLabel|body|object|false|none|
|» » CustomizedMetricSpecification|body|object|false|none|
|» » » MetricName|body|object|false|none|
|» » » Namespace|body|object|false|none|
|» » » Dimensions|body|object|false|none|
|» » » Statistic|body|object|false|none|
|» » » Unit|body|object|false|none|
|» » » Metrics|body|object|false|none|
|» » ScaleOutCooldown|body|object|false|none|
|» » ScaleInCooldown|body|object|false|none|
|» » DisableScaleIn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleFrontendService.PutScalingPolicy|

> Example responses

> 200 Response

```json
{
  "Alarms": [
    {
      "AlarmARN": "arn:aws:cloudwatch:us-west-2:012345678910:alarm:TargetTracking-service/default/web-app-AlarmHigh-d4f0770c-b46e-434a-a60f-3b36d653feca",
      "AlarmName": "TargetTracking-service/default/web-app-AlarmHigh-d4f0770c-b46e-434a-a60f-3b36d653feca"
    },
    {
      "AlarmARN": "arn:aws:cloudwatch:us-west-2:012345678910:alarm:TargetTracking-service/default/web-app-AlarmLow-1b437334-d19b-4a63-a812-6c67aaf2910d",
      "AlarmName": "TargetTracking-service/default/web-app-AlarmLow-1b437334-d19b-4a63-a812-6c67aaf2910d"
    }
  ],
  "PolicyARN": "arn:aws:autoscaling:us-west-2:012345678910:scalingPolicy:6d8972f3-efc8-437c-92d1-6270f29a66e7:resource/ecs/service/default/web-app:policyName/cpu75-target-tracking-scaling-policy"
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

<h3 id="putscalingpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutScalingPolicyResponse](#schemaputscalingpolicyresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ObjectNotFoundException|[ObjectNotFoundException](#schemaobjectnotfoundexception)|
|483|483|ConcurrentUpdateException|[ConcurrentUpdateException](#schemaconcurrentupdateexception)|
|484|484|FailedResourceAccessException|[FailedResourceAccessException](#schemafailedresourceaccessexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutScheduledAction

<a id="opIdPutScheduledAction"></a>

> Code samples

```bash
curl 'https://application-autoscaling.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleFrontendService.PutScheduledAction' \
  -d '{
    "ServiceNamespace": {},
    "Schedule": {},
    "Timezone": {},
    "ScheduledActionName": {},
    "ResourceId": {},
    "ScalableDimension": {},
    "StartTime": {},
    "EndTime": {},
    "ScalableTargetAction": {
      "MinCapacity": {},
      "MaxCapacity": {}
    }
  }'
```

`POST /#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction`

<p>Creates or updates a scheduled action for an Application Auto Scaling scalable target. </p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scheduled action applies to the scalable target identified by those three attributes. You cannot create a scheduled action until you have registered the resource as a scalable target.</p> <p>When you specify start and end times with a recurring schedule using a cron expression or rates, they form the boundaries for when the recurring action starts and stops.</p> <p>To update a scheduled action, specify the parameters that you want to change. If you don't specify start and end times, the old values are deleted.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to run scheduled actions. Any scheduled actions that were specified for the scalable target are deleted.</p> </note>

> Body parameter

```json
{
  "ServiceNamespace": {},
  "Schedule": {},
  "Timezone": {},
  "ScheduledActionName": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "StartTime": {},
  "EndTime": {},
  "ScalableTargetAction": {
    "MinCapacity": {},
    "MaxCapacity": {}
  }
}
```

<h3 id="putscheduledaction-parameters">Parameters</h3>

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
|body|body|[PutScheduledActionRequest](#schemaputscheduledactionrequest)|true|none|
|» ServiceNamespace|body|object|true|none|
|» Schedule|body|object|false|none|
|» Timezone|body|object|false|none|
|» ScheduledActionName|body|object|true|none|
|» ResourceId|body|object|true|none|
|» ScalableDimension|body|object|true|none|
|» StartTime|body|object|false|none|
|» EndTime|body|object|false|none|
|» ScalableTargetAction|body|object|false|none|
|» » MinCapacity|body|object|false|none|
|» » MaxCapacity|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleFrontendService.PutScheduledAction|

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

<h3 id="putscheduledaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutScheduledActionResponse](#schemaputscheduledactionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ObjectNotFoundException|[ObjectNotFoundException](#schemaobjectnotfoundexception)|
|483|483|ConcurrentUpdateException|[ConcurrentUpdateException](#schemaconcurrentupdateexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterScalableTarget

<a id="opIdRegisterScalableTarget"></a>

> Code samples

```bash
curl 'https://application-autoscaling.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleFrontendService.RegisterScalableTarget' \
  -d '{
    "ServiceNamespace": {},
    "ResourceId": {},
    "ScalableDimension": {},
    "MinCapacity": {},
    "MaxCapacity": {},
    "RoleARN": {},
    "SuspendedState": {
      "DynamicScalingInSuspended": {},
      "DynamicScalingOutSuspended": {},
      "ScheduledScalingSuspended": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget`

<p>Registers or updates a scalable target, which is the resource that you want to scale.</p> <p>Scalable targets are uniquely identified by the combination of resource ID, scalable dimension, and namespace, which represents some capacity dimension of the underlying service.</p> <p>When you register a new scalable target, you must specify values for the minimum and maximum capacity. If the specified resource is not active in the target service, this operation does not change the resource's current capacity. Otherwise, it changes the resource's current capacity to a value that is inside of this range.</p> <p>If you add a scaling policy, current capacity is adjustable within the specified range when scaling starts. Application Auto Scaling scaling policies will not scale capacity to values that are outside of the minimum and maximum range.</p> <p>After you register a scalable target, you do not need to register it again to use other Application Auto Scaling operations. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. You can also view the scaling policies for a service namespace by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. If you no longer need a scalable target, you can deregister it by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html">DeregisterScalableTarget</a>.</p> <p>To update a scalable target, specify the parameters that you want to change. Include the parameters that identify the scalable target: resource ID, scalable dimension, and namespace. Any parameters that you don't specify are not changed by this update request. </p> <note> <p>If you call the <code>RegisterScalableTarget</code> API operation to create a scalable target, there might be a brief delay until the operation achieves <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. You might become aware of this brief delay if you get unexpected errors when performing sequential operations. The typical strategy is to retry the request, and some Amazon Web Services SDKs include automatic backoff and retry logic.</p> <p>If you call the <code>RegisterScalableTarget</code> API operation to update an existing scalable target, Application Auto Scaling retrieves the current capacity of the resource. If it's below the minimum capacity or above the maximum capacity, Application Auto Scaling adjusts the capacity of the scalable target to place it within these bounds, even if you don't include the <code>MinCapacity</code> or <code>MaxCapacity</code> request parameters.</p> </note>

> Body parameter

```json
{
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "MinCapacity": {},
  "MaxCapacity": {},
  "RoleARN": {},
  "SuspendedState": {
    "DynamicScalingInSuspended": {},
    "DynamicScalingOutSuspended": {},
    "ScheduledScalingSuspended": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="registerscalabletarget-parameters">Parameters</h3>

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
|body|body|[RegisterScalableTargetRequest](#schemaregisterscalabletargetrequest)|true|none|
|» ServiceNamespace|body|object|true|none|
|» ResourceId|body|object|true|none|
|» ScalableDimension|body|object|true|none|
|» MinCapacity|body|object|false|none|
|» MaxCapacity|body|object|false|none|
|» RoleARN|body|object|false|none|
|» SuspendedState|body|object|false|none|
|» » DynamicScalingInSuspended|body|object|false|none|
|» » DynamicScalingOutSuspended|body|object|false|none|
|» » ScheduledScalingSuspended|body|object|false|none|
|» Tags|body|object|false|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleFrontendService.RegisterScalableTarget|

> Example responses

> 200 Response

```json
{
  "ScalableTargetARN": {}
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

<h3 id="registerscalabletarget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterScalableTargetResponse](#schemaregisterscalabletargetresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ConcurrentUpdateException|[ConcurrentUpdateException](#schemaconcurrentupdateexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://application-autoscaling.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleFrontendService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleFrontendService.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AnyScaleFrontendService.TagResource`

<p>Adds or edits tags on an Application Auto Scaling scalable target.</p> <p>Each tag consists of a tag key and a tag value, which are both case-sensitive strings. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value.</p> <p>You can use this operation to tag an Application Auto Scaling scalable target, but you cannot tag a scaling policy or scheduled action.</p> <p>You can also add tags to an Application Auto Scaling scalable target while creating it (<code>RegisterScalableTarget</code>).</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>Use tags to control access to a scalable target. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/resource-tagging-support.html">Tagging support for Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "ResourceARN": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
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
|body|body|[TagResourceRequest](#schematagresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|
|» Tags|body|object|true|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleFrontendService.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://application-autoscaling.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleFrontendService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleFrontendService.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AnyScaleFrontendService.UntagResource`

Deletes tags from an Application Auto Scaling scalable target. To delete a tag, specify the tag key and the Application Auto Scaling scalable target.

> Body parameter

```json
{
  "ResourceARN": {},
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
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleFrontendService.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_DeleteScalingPolicyResponse">DeleteScalingPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletescalingpolicyresponse"></a>
<a id="schema_DeleteScalingPolicyResponse"></a>
<a id="tocSdeletescalingpolicyresponse"></a>
<a id="tocsdeletescalingpolicyresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteScalingPolicyRequest">DeleteScalingPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletescalingpolicyrequest"></a>
<a id="schema_DeleteScalingPolicyRequest"></a>
<a id="tocSdeletescalingpolicyrequest"></a>
<a id="tocsdeletescalingpolicyrequest"></a>

```json
{
  "PolicyName": {},
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyName|object|true|none|none|
|ServiceNamespace|object|true|none|none|
|ResourceId|object|true|none|none|
|ScalableDimension|object|true|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_ObjectNotFoundException">ObjectNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaobjectnotfoundexception"></a>
<a id="schema_ObjectNotFoundException"></a>
<a id="tocSobjectnotfoundexception"></a>
<a id="tocsobjectnotfoundexception"></a>

```json
null
```

<h2 id="tocS_ConcurrentUpdateException">ConcurrentUpdateException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentupdateexception"></a>
<a id="schema_ConcurrentUpdateException"></a>
<a id="tocSconcurrentupdateexception"></a>
<a id="tocsconcurrentupdateexception"></a>

```json
null
```

<h2 id="tocS_InternalServiceException">InternalServiceException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceexception"></a>
<a id="schema_InternalServiceException"></a>
<a id="tocSinternalserviceexception"></a>
<a id="tocsinternalserviceexception"></a>

```json
null
```

<h2 id="tocS_DeleteScheduledActionResponse">DeleteScheduledActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletescheduledactionresponse"></a>
<a id="schema_DeleteScheduledActionResponse"></a>
<a id="tocSdeletescheduledactionresponse"></a>
<a id="tocsdeletescheduledactionresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteScheduledActionRequest">DeleteScheduledActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletescheduledactionrequest"></a>
<a id="schema_DeleteScheduledActionRequest"></a>
<a id="tocSdeletescheduledactionrequest"></a>
<a id="tocsdeletescheduledactionrequest"></a>

```json
{
  "ServiceNamespace": {},
  "ScheduledActionName": {},
  "ResourceId": {},
  "ScalableDimension": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceNamespace|object|true|none|none|
|ScheduledActionName|object|true|none|none|
|ResourceId|object|true|none|none|
|ScalableDimension|object|true|none|none|

<h2 id="tocS_DeregisterScalableTargetResponse">DeregisterScalableTargetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterscalabletargetresponse"></a>
<a id="schema_DeregisterScalableTargetResponse"></a>
<a id="tocSderegisterscalabletargetresponse"></a>
<a id="tocsderegisterscalabletargetresponse"></a>

```json
{}
```

<h2 id="tocS_DeregisterScalableTargetRequest">DeregisterScalableTargetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterscalabletargetrequest"></a>
<a id="schema_DeregisterScalableTargetRequest"></a>
<a id="tocSderegisterscalabletargetrequest"></a>
<a id="tocsderegisterscalabletargetrequest"></a>

```json
{
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceNamespace|object|true|none|none|
|ResourceId|object|true|none|none|
|ScalableDimension|object|true|none|none|

<h2 id="tocS_DescribeScalableTargetsResponse">DescribeScalableTargetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribescalabletargetsresponse"></a>
<a id="schema_DescribeScalableTargetsResponse"></a>
<a id="tocSdescribescalabletargetsresponse"></a>
<a id="tocsdescribescalabletargetsresponse"></a>

```json
{
  "ScalableTargets": [
    {
      "CreationTime": "2019-05-06T11:21:46.199Z",
      "MaxCapacity": 10,
      "MinCapacity": 1,
      "ResourceId": "service/default/web-app",
      "RoleARN": "arn:aws:iam::012345678910:role/aws-service-role/ecs.application-autoscaling.amazonaws.com/AWSServiceRoleForApplicationAutoScaling_ECSService",
      "ScalableDimension": "ecs:service:DesiredCount",
      "ServiceNamespace": "ecs",
      "SuspendedState": {
        "DynamicScalingInSuspended": false,
        "DynamicScalingOutSuspended": false,
        "ScheduledScalingSuspended": false
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalableTargets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeScalableTargetsRequest">DescribeScalableTargetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribescalabletargetsrequest"></a>
<a id="schema_DescribeScalableTargetsRequest"></a>
<a id="tocSdescribescalabletargetsrequest"></a>
<a id="tocsdescribescalabletargetsrequest"></a>

```json
{
  "ServiceNamespace": {},
  "ResourceIds": {},
  "ScalableDimension": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceNamespace|object|true|none|none|
|ResourceIds|object|false|none|none|
|ScalableDimension|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_DescribeScalingActivitiesResponse">DescribeScalingActivitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribescalingactivitiesresponse"></a>
<a id="schema_DescribeScalingActivitiesResponse"></a>
<a id="tocSdescribescalingactivitiesresponse"></a>
<a id="tocsdescribescalingactivitiesresponse"></a>

```json
{
  "ScalingActivities": [
    {
      "ActivityId": "e6c5f7d1-dbbb-4a3f-89b2-51f33e766399",
      "Cause": "monitor alarm web-app-cpu-lt-25 in state ALARM triggered policy web-app-cpu-lt-25",
      "Description": "Setting desired count to 1.",
      "EndTime": "2019-05-06T16:04:32.111Z",
      "ResourceId": "service/default/web-app",
      "ScalableDimension": "ecs:service:DesiredCount",
      "ServiceNamespace": "ecs",
      "StartTime": "2019-05-06T16:03:58.171Z",
      "StatusCode": "Successful",
      "StatusMessage": "Successfully set desired count to 1. Change successfully fulfilled by ecs."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalingActivities|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeScalingActivitiesRequest">DescribeScalingActivitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribescalingactivitiesrequest"></a>
<a id="schema_DescribeScalingActivitiesRequest"></a>
<a id="tocSdescribescalingactivitiesrequest"></a>
<a id="tocsdescribescalingactivitiesrequest"></a>

```json
{
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "MaxResults": {},
  "NextToken": {},
  "IncludeNotScaledActivities": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceNamespace|object|true|none|none|
|ResourceId|object|false|none|none|
|ScalableDimension|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|IncludeNotScaledActivities|object|false|none|none|

<h2 id="tocS_DescribeScalingPoliciesResponse">DescribeScalingPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribescalingpoliciesresponse"></a>
<a id="schema_DescribeScalingPoliciesResponse"></a>
<a id="tocSdescribescalingpoliciesresponse"></a>
<a id="tocsdescribescalingpoliciesresponse"></a>

```json
{
  "NextToken": "",
  "ScalingPolicies": [
    {
      "Alarms": [
        {
          "AlarmARN": "arn:aws:cloudwatch:us-west-2:012345678910:alarm:web-app-cpu-gt-75",
          "AlarmName": "web-app-cpu-gt-75"
        }
      ],
      "CreationTime": "2019-05-06T12:11:39.230Z",
      "PolicyARN": "arn:aws:autoscaling:us-west-2:012345678910:scalingPolicy:6d8972f3-efc8-437c-92d1-6270f29a66e7:resource/ecs/service/default/web-app:policyName/web-app-cpu-gt-75",
      "PolicyName": "web-app-cpu-gt-75",
      "PolicyType": "StepScaling",
      "ResourceId": "service/default/web-app",
      "ScalableDimension": "ecs:service:DesiredCount",
      "ServiceNamespace": "ecs",
      "StepScalingPolicyConfiguration": {
        "AdjustmentType": "PercentChangeInCapacity",
        "Cooldown": 60,
        "StepAdjustments": [
          {
            "MetricIntervalLowerBound": 0,
            "ScalingAdjustment": 200
          }
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalingPolicies|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeScalingPoliciesRequest">DescribeScalingPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribescalingpoliciesrequest"></a>
<a id="schema_DescribeScalingPoliciesRequest"></a>
<a id="tocSdescribescalingpoliciesrequest"></a>
<a id="tocsdescribescalingpoliciesrequest"></a>

```json
{
  "PolicyNames": {},
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyNames|object|false|none|none|
|ServiceNamespace|object|true|none|none|
|ResourceId|object|false|none|none|
|ScalableDimension|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_FailedResourceAccessException">FailedResourceAccessException</h2>
<!-- backwards compatibility -->
<a id="schemafailedresourceaccessexception"></a>
<a id="schema_FailedResourceAccessException"></a>
<a id="tocSfailedresourceaccessexception"></a>
<a id="tocsfailedresourceaccessexception"></a>

```json
null
```

<h2 id="tocS_DescribeScheduledActionsResponse">DescribeScheduledActionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribescheduledactionsresponse"></a>
<a id="schema_DescribeScheduledActionsResponse"></a>
<a id="tocSdescribescheduledactionsresponse"></a>
<a id="tocsdescribescheduledactionsresponse"></a>

```json
{
  "ScheduledActions": [
    {
      "CreationTime": 1561571888.361,
      "ResourceId": "table/my-table",
      "ScalableDimension": "dynamodb:table:WriteCapacityUnits",
      "ScalableTargetAction": {
        "MaxCapacity": 20,
        "MinCapacity": 15
      },
      "Schedule": "at(2019-05-20T18:35:00)",
      "ScheduledActionARN": "arn:aws:autoscaling:us-west-2:123456789012:scheduledAction:2d36aa3b-cdf9-4565-b290-81db519b227d:resource/dynamodb/table/my-table:scheduledActionName/my-first-scheduled-action",
      "ScheduledActionName": "my-first-scheduled-action",
      "ServiceNamespace": "dynamodb"
    },
    {
      "CreationTime": 1561571946.021,
      "ResourceId": "table/my-table",
      "ScalableDimension": "dynamodb:table:WriteCapacityUnits",
      "ScalableTargetAction": {
        "MaxCapacity": 10,
        "MinCapacity": 5
      },
      "Schedule": "at(2019-05-20T18:40:00)",
      "ScheduledActionARN": "arn:aws:autoscaling:us-west-2:123456789012:scheduledAction:2d36aa3b-cdf9-4565-b290-81db519b227d:resource/dynamodb/table/my-table:scheduledActionName/my-second-scheduled-action",
      "ScheduledActionName": "my-second-scheduled-action",
      "ServiceNamespace": "dynamodb"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduledActions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeScheduledActionsRequest">DescribeScheduledActionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribescheduledactionsrequest"></a>
<a id="schema_DescribeScheduledActionsRequest"></a>
<a id="tocSdescribescheduledactionsrequest"></a>
<a id="tocsdescribescheduledactionsrequest"></a>

```json
{
  "ScheduledActionNames": {},
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduledActionNames|object|false|none|none|
|ServiceNamespace|object|true|none|none|
|ResourceId|object|false|none|none|
|ScalableDimension|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {
    "environment": "production"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_PutScalingPolicyResponse">PutScalingPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputscalingpolicyresponse"></a>
<a id="schema_PutScalingPolicyResponse"></a>
<a id="tocSputscalingpolicyresponse"></a>
<a id="tocsputscalingpolicyresponse"></a>

```json
{
  "Alarms": [
    {
      "AlarmARN": "arn:aws:cloudwatch:us-west-2:012345678910:alarm:TargetTracking-service/default/web-app-AlarmHigh-d4f0770c-b46e-434a-a60f-3b36d653feca",
      "AlarmName": "TargetTracking-service/default/web-app-AlarmHigh-d4f0770c-b46e-434a-a60f-3b36d653feca"
    },
    {
      "AlarmARN": "arn:aws:cloudwatch:us-west-2:012345678910:alarm:TargetTracking-service/default/web-app-AlarmLow-1b437334-d19b-4a63-a812-6c67aaf2910d",
      "AlarmName": "TargetTracking-service/default/web-app-AlarmLow-1b437334-d19b-4a63-a812-6c67aaf2910d"
    }
  ],
  "PolicyARN": "arn:aws:autoscaling:us-west-2:012345678910:scalingPolicy:6d8972f3-efc8-437c-92d1-6270f29a66e7:resource/ecs/service/default/web-app:policyName/cpu75-target-tracking-scaling-policy"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyARN|object|true|none|none|
|Alarms|object|false|none|none|

<h2 id="tocS_PutScalingPolicyRequest">PutScalingPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputscalingpolicyrequest"></a>
<a id="schema_PutScalingPolicyRequest"></a>
<a id="tocSputscalingpolicyrequest"></a>
<a id="tocsputscalingpolicyrequest"></a>

```json
{
  "PolicyName": {},
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "PolicyType": {},
  "StepScalingPolicyConfiguration": {
    "AdjustmentType": {},
    "StepAdjustments": {},
    "MinAdjustmentMagnitude": {},
    "Cooldown": {},
    "MetricAggregationType": {}
  },
  "TargetTrackingScalingPolicyConfiguration": {
    "TargetValue": {},
    "PredefinedMetricSpecification": {
      "PredefinedMetricType": {},
      "ResourceLabel": {}
    },
    "CustomizedMetricSpecification": {
      "MetricName": {},
      "Namespace": {},
      "Dimensions": {},
      "Statistic": {},
      "Unit": {},
      "Metrics": {}
    },
    "ScaleOutCooldown": {},
    "ScaleInCooldown": {},
    "DisableScaleIn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyName|object|true|none|none|
|ServiceNamespace|object|true|none|none|
|ResourceId|object|true|none|none|
|ScalableDimension|object|true|none|none|
|PolicyType|object|false|none|none|
|StepScalingPolicyConfiguration|object|false|none|none|
|TargetTrackingScalingPolicyConfiguration|object|false|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_PutScheduledActionResponse">PutScheduledActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputscheduledactionresponse"></a>
<a id="schema_PutScheduledActionResponse"></a>
<a id="tocSputscheduledactionresponse"></a>
<a id="tocsputscheduledactionresponse"></a>

```json
{}
```

<h2 id="tocS_PutScheduledActionRequest">PutScheduledActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputscheduledactionrequest"></a>
<a id="schema_PutScheduledActionRequest"></a>
<a id="tocSputscheduledactionrequest"></a>
<a id="tocsputscheduledactionrequest"></a>

```json
{
  "ServiceNamespace": {},
  "Schedule": {},
  "Timezone": {},
  "ScheduledActionName": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "StartTime": {},
  "EndTime": {},
  "ScalableTargetAction": {
    "MinCapacity": {},
    "MaxCapacity": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceNamespace|object|true|none|none|
|Schedule|object|false|none|none|
|Timezone|object|false|none|none|
|ScheduledActionName|object|true|none|none|
|ResourceId|object|true|none|none|
|ScalableDimension|object|true|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|ScalableTargetAction|object|false|none|none|

<h2 id="tocS_RegisterScalableTargetResponse">RegisterScalableTargetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisterscalabletargetresponse"></a>
<a id="schema_RegisterScalableTargetResponse"></a>
<a id="tocSregisterscalabletargetresponse"></a>
<a id="tocsregisterscalabletargetresponse"></a>

```json
{
  "ScalableTargetARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalableTargetARN|object|false|none|none|

<h2 id="tocS_RegisterScalableTargetRequest">RegisterScalableTargetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterscalabletargetrequest"></a>
<a id="schema_RegisterScalableTargetRequest"></a>
<a id="tocSregisterscalabletargetrequest"></a>
<a id="tocsregisterscalabletargetrequest"></a>

```json
{
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "MinCapacity": {},
  "MaxCapacity": {},
  "RoleARN": {},
  "SuspendedState": {
    "DynamicScalingInSuspended": {},
    "DynamicScalingOutSuspended": {},
    "ScheduledScalingSuspended": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceNamespace|object|true|none|none|
|ResourceId|object|true|none|none|
|ScalableDimension|object|true|none|none|
|MinCapacity|object|false|none|none|
|MaxCapacity|object|false|none|none|
|RoleARN|object|false|none|none|
|SuspendedState|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_TooManyTagsException">TooManyTagsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsexception"></a>
<a id="schema_TooManyTagsException"></a>
<a id="tocStoomanytagsexception"></a>
<a id="tocstoomanytagsexception"></a>

```json
null
```

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_AdjustmentType">AdjustmentType</h2>
<!-- backwards compatibility -->
<a id="schemaadjustmenttype"></a>
<a id="schema_AdjustmentType"></a>
<a id="tocSadjustmenttype"></a>
<a id="tocsadjustmenttype"></a>

```json
"ChangeInCapacity"
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

<h2 id="tocS_Alarm">Alarm</h2>
<!-- backwards compatibility -->
<a id="schemaalarm"></a>
<a id="schema_Alarm"></a>
<a id="tocSalarm"></a>
<a id="tocsalarm"></a>

```json
{
  "AlarmName": {},
  "AlarmARN": {}
}
```

Represents a CloudWatch alarm associated with a scaling policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlarmName|object|true|none|none|
|AlarmARN|object|true|none|none|

<h2 id="tocS_Alarms">Alarms</h2>
<!-- backwards compatibility -->
<a id="schemaalarms"></a>
<a id="schema_Alarms"></a>
<a id="tocSalarms"></a>
<a id="tocsalarms"></a>

```json
[
  {
    "AlarmName": {},
    "AlarmARN": {}
  }
]
```

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
```

<h2 id="tocS_Cooldown">Cooldown</h2>
<!-- backwards compatibility -->
<a id="schemacooldown"></a>
<a id="schema_Cooldown"></a>
<a id="tocScooldown"></a>
<a id="tocscooldown"></a>

```json
0
```

<h2 id="tocS_MetricName">MetricName</h2>
<!-- backwards compatibility -->
<a id="schemametricname"></a>
<a id="schema_MetricName"></a>
<a id="tocSmetricname"></a>
<a id="tocsmetricname"></a>

```json
"string"
```

<h2 id="tocS_MetricNamespace">MetricNamespace</h2>
<!-- backwards compatibility -->
<a id="schemametricnamespace"></a>
<a id="schema_MetricNamespace"></a>
<a id="tocSmetricnamespace"></a>
<a id="tocsmetricnamespace"></a>

```json
"string"
```

<h2 id="tocS_MetricDimensions">MetricDimensions</h2>
<!-- backwards compatibility -->
<a id="schemametricdimensions"></a>
<a id="schema_MetricDimensions"></a>
<a id="tocSmetricdimensions"></a>
<a id="tocsmetricdimensions"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_MetricStatistic">MetricStatistic</h2>
<!-- backwards compatibility -->
<a id="schemametricstatistic"></a>
<a id="schema_MetricStatistic"></a>
<a id="tocSmetricstatistic"></a>
<a id="tocsmetricstatistic"></a>

```json
"Average"
```

<h2 id="tocS_MetricUnit">MetricUnit</h2>
<!-- backwards compatibility -->
<a id="schemametricunit"></a>
<a id="schema_MetricUnit"></a>
<a id="tocSmetricunit"></a>
<a id="tocsmetricunit"></a>

```json
"string"
```

<h2 id="tocS_TargetTrackingMetricDataQueries">TargetTrackingMetricDataQueries</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingmetricdataqueries"></a>
<a id="schema_TargetTrackingMetricDataQueries"></a>
<a id="tocStargettrackingmetricdataqueries"></a>
<a id="tocstargettrackingmetricdataqueries"></a>

```json
[
  {
    "Expression": {},
    "Id": {},
    "Label": {},
    "MetricStat": {
      "Metric": {
        "Dimensions": {},
        "MetricName": {},
        "Namespace": {}
      },
      "Stat": {},
      "Unit": {}
    },
    "ReturnData": {}
  }
]
```

<h2 id="tocS_CustomizedMetricSpecification">CustomizedMetricSpecification</h2>
<!-- backwards compatibility -->
<a id="schemacustomizedmetricspecification"></a>
<a id="schema_CustomizedMetricSpecification"></a>
<a id="tocScustomizedmetricspecification"></a>
<a id="tocscustomizedmetricspecification"></a>

```json
{
  "MetricName": {},
  "Namespace": {},
  "Dimensions": {},
  "Statistic": {},
  "Unit": {},
  "Metrics": {}
}
```

<p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>For information about the available metrics for a service, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">Amazon Web Services services that publish CloudWatch metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish custom metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases, and increase when capacity decreases. </p> </li> </ul> <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricName|object|false|none|none|
|Namespace|object|false|none|none|
|Dimensions|object|false|none|none|
|Statistic|object|false|none|none|
|Unit|object|false|none|none|
|Metrics|object|false|none|none|

<h2 id="tocS_ResourceIdMaxLen1600">ResourceIdMaxLen1600</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidmaxlen1600"></a>
<a id="schema_ResourceIdMaxLen1600"></a>
<a id="tocSresourceidmaxlen1600"></a>
<a id="tocsresourceidmaxlen1600"></a>

```json
"string"
```

<h2 id="tocS_ServiceNamespace">ServiceNamespace</h2>
<!-- backwards compatibility -->
<a id="schemaservicenamespace"></a>
<a id="schema_ServiceNamespace"></a>
<a id="tocSservicenamespace"></a>
<a id="tocsservicenamespace"></a>

```json
"ecs"
```

<h2 id="tocS_ScalableDimension">ScalableDimension</h2>
<!-- backwards compatibility -->
<a id="schemascalabledimension"></a>
<a id="schema_ScalableDimension"></a>
<a id="tocSscalabledimension"></a>
<a id="tocsscalabledimension"></a>

```json
"ecs:service:DesiredCount"
```

<h2 id="tocS_ResourceIdsMaxLen1600">ResourceIdsMaxLen1600</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidsmaxlen1600"></a>
<a id="schema_ResourceIdsMaxLen1600"></a>
<a id="tocSresourceidsmaxlen1600"></a>
<a id="tocsresourceidsmaxlen1600"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
0
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

<h2 id="tocS_ScalableTargets">ScalableTargets</h2>
<!-- backwards compatibility -->
<a id="schemascalabletargets"></a>
<a id="schema_ScalableTargets"></a>
<a id="tocSscalabletargets"></a>
<a id="tocsscalabletargets"></a>

```json
[
  {
    "ServiceNamespace": {},
    "ResourceId": {},
    "ScalableDimension": {},
    "MinCapacity": {},
    "MaxCapacity": {},
    "RoleARN": {},
    "CreationTime": {},
    "SuspendedState": {
      "DynamicScalingInSuspended": {},
      "DynamicScalingOutSuspended": {},
      "ScheduledScalingSuspended": {}
    },
    "ScalableTargetARN": {}
  }
]
```

<h2 id="tocS_IncludeNotScaledActivities">IncludeNotScaledActivities</h2>
<!-- backwards compatibility -->
<a id="schemaincludenotscaledactivities"></a>
<a id="schema_IncludeNotScaledActivities"></a>
<a id="tocSincludenotscaledactivities"></a>
<a id="tocsincludenotscaledactivities"></a>

```json
true
```

<h2 id="tocS_ScalingActivities">ScalingActivities</h2>
<!-- backwards compatibility -->
<a id="schemascalingactivities"></a>
<a id="schema_ScalingActivities"></a>
<a id="tocSscalingactivities"></a>
<a id="tocsscalingactivities"></a>

```json
[
  {
    "ActivityId": {},
    "ServiceNamespace": {},
    "ResourceId": {},
    "ScalableDimension": {},
    "Description": {},
    "Cause": {},
    "StartTime": {},
    "EndTime": {},
    "StatusCode": {},
    "StatusMessage": {},
    "Details": {},
    "NotScaledReasons": {}
  }
]
```

<h2 id="tocS_ScalingPolicies">ScalingPolicies</h2>
<!-- backwards compatibility -->
<a id="schemascalingpolicies"></a>
<a id="schema_ScalingPolicies"></a>
<a id="tocSscalingpolicies"></a>
<a id="tocsscalingpolicies"></a>

```json
[
  {
    "PolicyARN": {},
    "PolicyName": {},
    "ServiceNamespace": {},
    "ResourceId": {},
    "ScalableDimension": {},
    "PolicyType": {},
    "StepScalingPolicyConfiguration": {
      "AdjustmentType": {},
      "StepAdjustments": {},
      "MinAdjustmentMagnitude": {},
      "Cooldown": {},
      "MetricAggregationType": {}
    },
    "TargetTrackingScalingPolicyConfiguration": {
      "TargetValue": {},
      "PredefinedMetricSpecification": {
        "PredefinedMetricType": {},
        "ResourceLabel": {}
      },
      "CustomizedMetricSpecification": {
        "MetricName": {},
        "Namespace": {},
        "Dimensions": {},
        "Statistic": {},
        "Unit": {},
        "Metrics": {}
      },
      "ScaleOutCooldown": {},
      "ScaleInCooldown": {},
      "DisableScaleIn": {}
    },
    "Alarms": {},
    "CreationTime": {}
  }
]
```

<h2 id="tocS_ScheduledActions">ScheduledActions</h2>
<!-- backwards compatibility -->
<a id="schemascheduledactions"></a>
<a id="schema_ScheduledActions"></a>
<a id="tocSscheduledactions"></a>
<a id="tocsscheduledactions"></a>

```json
[
  {
    "ScheduledActionName": {},
    "ScheduledActionARN": {},
    "ServiceNamespace": {},
    "Schedule": {},
    "Timezone": {},
    "ResourceId": {},
    "ScalableDimension": {},
    "StartTime": {},
    "EndTime": {},
    "ScalableTargetAction": {
      "MinCapacity": {},
      "MaxCapacity": {}
    },
    "CreationTime": {}
  }
]
```

<h2 id="tocS_DisableScaleIn">DisableScaleIn</h2>
<!-- backwards compatibility -->
<a id="schemadisablescalein"></a>
<a id="schema_DisableScaleIn"></a>
<a id="tocSdisablescalein"></a>
<a id="tocsdisablescalein"></a>

```json
true
```

<h2 id="tocS_Expression">Expression</h2>
<!-- backwards compatibility -->
<a id="schemaexpression"></a>
<a id="schema_Expression"></a>
<a id="tocSexpression"></a>
<a id="tocsexpression"></a>

```json
"string"
```

<h2 id="tocS_Id">Id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_Id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"string"
```

<h2 id="tocS_TagMap">TagMap</h2>
<!-- backwards compatibility -->
<a id="schematagmap"></a>
<a id="schema_TagMap"></a>
<a id="tocStagmap"></a>
<a id="tocstagmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_MetricAggregationType">MetricAggregationType</h2>
<!-- backwards compatibility -->
<a id="schemametricaggregationtype"></a>
<a id="schema_MetricAggregationType"></a>
<a id="tocSmetricaggregationtype"></a>
<a id="tocsmetricaggregationtype"></a>

```json
"Average"
```

<h2 id="tocS_MetricDimensionName">MetricDimensionName</h2>
<!-- backwards compatibility -->
<a id="schemametricdimensionname"></a>
<a id="schema_MetricDimensionName"></a>
<a id="tocSmetricdimensionname"></a>
<a id="tocsmetricdimensionname"></a>

```json
"string"
```

<h2 id="tocS_MetricDimensionValue">MetricDimensionValue</h2>
<!-- backwards compatibility -->
<a id="schemametricdimensionvalue"></a>
<a id="schema_MetricDimensionValue"></a>
<a id="tocSmetricdimensionvalue"></a>
<a id="tocsmetricdimensionvalue"></a>

```json
"string"
```

<h2 id="tocS_MetricDimension">MetricDimension</h2>
<!-- backwards compatibility -->
<a id="schemametricdimension"></a>
<a id="schema_MetricDimension"></a>
<a id="tocSmetricdimension"></a>
<a id="tocsmetricdimension"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Describes the dimension names and values associated with a metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_MetricScale">MetricScale</h2>
<!-- backwards compatibility -->
<a id="schemametricscale"></a>
<a id="schema_MetricScale"></a>
<a id="tocSmetricscale"></a>
<a id="tocsmetricscale"></a>

```json
0
```

<h2 id="tocS_MetricType">MetricType</h2>
<!-- backwards compatibility -->
<a id="schemametrictype"></a>
<a id="schema_MetricType"></a>
<a id="tocSmetrictype"></a>
<a id="tocsmetrictype"></a>

```json
"DynamoDBReadCapacityUtilization"
```

<h2 id="tocS_MinAdjustmentMagnitude">MinAdjustmentMagnitude</h2>
<!-- backwards compatibility -->
<a id="schemaminadjustmentmagnitude"></a>
<a id="schema_MinAdjustmentMagnitude"></a>
<a id="tocSminadjustmentmagnitude"></a>
<a id="tocsminadjustmentmagnitude"></a>

```json
0
```

<h2 id="tocS_ResourceCapacity">ResourceCapacity</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecapacity"></a>
<a id="schema_ResourceCapacity"></a>
<a id="tocSresourcecapacity"></a>
<a id="tocsresourcecapacity"></a>

```json
0
```

<h2 id="tocS_NotScaledReason">NotScaledReason</h2>
<!-- backwards compatibility -->
<a id="schemanotscaledreason"></a>
<a id="schema_NotScaledReason"></a>
<a id="tocSnotscaledreason"></a>
<a id="tocsnotscaledreason"></a>

```json
{
  "Code": {},
  "MaxCapacity": {},
  "MinCapacity": {},
  "CurrentCapacity": {}
}
```

Describes the reason for an activity that isn't scaled (<i>not scaled activity</i>), in machine-readable format. For help interpreting the not scaled reason details, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|true|none|none|
|MaxCapacity|object|false|none|none|
|MinCapacity|object|false|none|none|
|CurrentCapacity|object|false|none|none|

<h2 id="tocS_NotScaledReasons">NotScaledReasons</h2>
<!-- backwards compatibility -->
<a id="schemanotscaledreasons"></a>
<a id="schema_NotScaledReasons"></a>
<a id="tocSnotscaledreasons"></a>
<a id="tocsnotscaledreasons"></a>

```json
[
  {
    "Code": {},
    "MaxCapacity": {},
    "MinCapacity": {},
    "CurrentCapacity": {}
  }
]
```

<h2 id="tocS_PolicyName">PolicyName</h2>
<!-- backwards compatibility -->
<a id="schemapolicyname"></a>
<a id="schema_PolicyName"></a>
<a id="tocSpolicyname"></a>
<a id="tocspolicyname"></a>

```json
"string"
```

<h2 id="tocS_PolicyType">PolicyType</h2>
<!-- backwards compatibility -->
<a id="schemapolicytype"></a>
<a id="schema_PolicyType"></a>
<a id="tocSpolicytype"></a>
<a id="tocspolicytype"></a>

```json
"StepScaling"
```

<h2 id="tocS_ResourceLabel">ResourceLabel</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelabel"></a>
<a id="schema_ResourceLabel"></a>
<a id="tocSresourcelabel"></a>
<a id="tocsresourcelabel"></a>

```json
"string"
```

<h2 id="tocS_PredefinedMetricSpecification">PredefinedMetricSpecification</h2>
<!-- backwards compatibility -->
<a id="schemapredefinedmetricspecification"></a>
<a id="schema_PredefinedMetricSpecification"></a>
<a id="tocSpredefinedmetricspecification"></a>
<a id="tocspredefinedmetricspecification"></a>

```json
{
  "PredefinedMetricType": {},
  "ResourceLabel": {}
}
```

<p>Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>Only the Amazon Web Services that you're using send metrics to Amazon CloudWatch. To determine whether a desired metric already exists by looking up its namespace and dimension using the CloudWatch metrics dashboard in the console, follow the procedure in <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html">Building dashboards with CloudWatch</a> in the <i>Application Auto Scaling User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredefinedMetricType|object|true|none|none|
|ResourceLabel|object|false|none|none|

<h2 id="tocS_StepScalingPolicyConfiguration">StepScalingPolicyConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemastepscalingpolicyconfiguration"></a>
<a id="schema_StepScalingPolicyConfiguration"></a>
<a id="tocSstepscalingpolicyconfiguration"></a>
<a id="tocsstepscalingpolicyconfiguration"></a>

```json
{
  "AdjustmentType": {},
  "StepAdjustments": {},
  "MinAdjustmentMagnitude": {},
  "Cooldown": {},
  "MetricAggregationType": {}
}
```

Represents a step scaling policy configuration to use with Application Auto Scaling.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdjustmentType|object|false|none|none|
|StepAdjustments|object|false|none|none|
|MinAdjustmentMagnitude|object|false|none|none|
|Cooldown|object|false|none|none|
|MetricAggregationType|object|false|none|none|

<h2 id="tocS_TargetTrackingScalingPolicyConfiguration">TargetTrackingScalingPolicyConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingscalingpolicyconfiguration"></a>
<a id="schema_TargetTrackingScalingPolicyConfiguration"></a>
<a id="tocStargettrackingscalingpolicyconfiguration"></a>
<a id="tocstargettrackingscalingpolicyconfiguration"></a>

```json
{
  "TargetValue": {},
  "PredefinedMetricSpecification": {
    "PredefinedMetricType": {},
    "ResourceLabel": {}
  },
  "CustomizedMetricSpecification": {
    "MetricName": {},
    "Namespace": {},
    "Dimensions": {},
    "Statistic": {},
    "Unit": {},
    "Metrics": {}
  },
  "ScaleOutCooldown": {},
  "ScaleInCooldown": {},
  "DisableScaleIn": {}
}
```

Represents a target tracking scaling policy configuration to use with Application Auto Scaling.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetValue|object|true|none|none|
|PredefinedMetricSpecification|object|false|none|none|
|CustomizedMetricSpecification|object|false|none|none|
|ScaleOutCooldown|object|false|none|none|
|ScaleInCooldown|object|false|none|none|
|DisableScaleIn|object|false|none|none|

<h2 id="tocS_ScheduledActionName">ScheduledActionName</h2>
<!-- backwards compatibility -->
<a id="schemascheduledactionname"></a>
<a id="schema_ScheduledActionName"></a>
<a id="tocSscheduledactionname"></a>
<a id="tocsscheduledactionname"></a>

```json
"string"
```

<h2 id="tocS_TimestampType">TimestampType</h2>
<!-- backwards compatibility -->
<a id="schematimestamptype"></a>
<a id="schema_TimestampType"></a>
<a id="tocStimestamptype"></a>
<a id="tocstimestamptype"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ScalableTargetAction">ScalableTargetAction</h2>
<!-- backwards compatibility -->
<a id="schemascalabletargetaction"></a>
<a id="schema_ScalableTargetAction"></a>
<a id="tocSscalabletargetaction"></a>
<a id="tocsscalabletargetaction"></a>

```json
{
  "MinCapacity": {},
  "MaxCapacity": {}
}
```

Represents the minimum and maximum capacity for a scheduled action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MinCapacity|object|false|none|none|
|MaxCapacity|object|false|none|none|

<h2 id="tocS_SuspendedState">SuspendedState</h2>
<!-- backwards compatibility -->
<a id="schemasuspendedstate"></a>
<a id="schema_SuspendedState"></a>
<a id="tocSsuspendedstate"></a>
<a id="tocssuspendedstate"></a>

```json
{
  "DynamicScalingInSuspended": {},
  "DynamicScalingOutSuspended": {},
  "ScheduledScalingSuspended": {}
}
```

Specifies whether the scaling activities for a scalable target are in a suspended state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DynamicScalingInSuspended|object|false|none|none|
|DynamicScalingOutSuspended|object|false|none|none|
|ScheduledScalingSuspended|object|false|none|none|

<h2 id="tocS_ReturnData">ReturnData</h2>
<!-- backwards compatibility -->
<a id="schemareturndata"></a>
<a id="schema_ReturnData"></a>
<a id="tocSreturndata"></a>
<a id="tocsreturndata"></a>

```json
true
```

<h2 id="tocS_ScalableTarget">ScalableTarget</h2>
<!-- backwards compatibility -->
<a id="schemascalabletarget"></a>
<a id="schema_ScalableTarget"></a>
<a id="tocSscalabletarget"></a>
<a id="tocsscalabletarget"></a>

```json
{
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "MinCapacity": {},
  "MaxCapacity": {},
  "RoleARN": {},
  "CreationTime": {},
  "SuspendedState": {
    "DynamicScalingInSuspended": {},
    "DynamicScalingOutSuspended": {},
    "ScheduledScalingSuspended": {}
  },
  "ScalableTargetARN": {}
}
```

Represents a scalable target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceNamespace|object|true|none|none|
|ResourceId|object|true|none|none|
|ScalableDimension|object|true|none|none|
|MinCapacity|object|true|none|none|
|MaxCapacity|object|true|none|none|
|RoleARN|object|true|none|none|
|CreationTime|object|true|none|none|
|SuspendedState|object|false|none|none|
|ScalableTargetARN|object|false|none|none|

<h2 id="tocS_ScalingActivity">ScalingActivity</h2>
<!-- backwards compatibility -->
<a id="schemascalingactivity"></a>
<a id="schema_ScalingActivity"></a>
<a id="tocSscalingactivity"></a>
<a id="tocsscalingactivity"></a>

```json
{
  "ActivityId": {},
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "Description": {},
  "Cause": {},
  "StartTime": {},
  "EndTime": {},
  "StatusCode": {},
  "StatusMessage": {},
  "Details": {},
  "NotScaledReasons": {}
}
```

Represents a scaling activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivityId|object|true|none|none|
|ServiceNamespace|object|true|none|none|
|ResourceId|object|true|none|none|
|ScalableDimension|object|true|none|none|
|Description|object|true|none|none|
|Cause|object|true|none|none|
|StartTime|object|true|none|none|
|EndTime|object|false|none|none|
|StatusCode|object|true|none|none|
|StatusMessage|object|false|none|none|
|Details|object|false|none|none|
|NotScaledReasons|object|false|none|none|

<h2 id="tocS_ScalingActivityStatusCode">ScalingActivityStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemascalingactivitystatuscode"></a>
<a id="schema_ScalingActivityStatusCode"></a>
<a id="tocSscalingactivitystatuscode"></a>
<a id="tocsscalingactivitystatuscode"></a>

```json
"Pending"
```

<h2 id="tocS_ScalingAdjustment">ScalingAdjustment</h2>
<!-- backwards compatibility -->
<a id="schemascalingadjustment"></a>
<a id="schema_ScalingAdjustment"></a>
<a id="tocSscalingadjustment"></a>
<a id="tocsscalingadjustment"></a>

```json
0
```

<h2 id="tocS_ScalingPolicy">ScalingPolicy</h2>
<!-- backwards compatibility -->
<a id="schemascalingpolicy"></a>
<a id="schema_ScalingPolicy"></a>
<a id="tocSscalingpolicy"></a>
<a id="tocsscalingpolicy"></a>

```json
{
  "PolicyARN": {},
  "PolicyName": {},
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "PolicyType": {},
  "StepScalingPolicyConfiguration": {
    "AdjustmentType": {},
    "StepAdjustments": {},
    "MinAdjustmentMagnitude": {},
    "Cooldown": {},
    "MetricAggregationType": {}
  },
  "TargetTrackingScalingPolicyConfiguration": {
    "TargetValue": {},
    "PredefinedMetricSpecification": {
      "PredefinedMetricType": {},
      "ResourceLabel": {}
    },
    "CustomizedMetricSpecification": {
      "MetricName": {},
      "Namespace": {},
      "Dimensions": {},
      "Statistic": {},
      "Unit": {},
      "Metrics": {}
    },
    "ScaleOutCooldown": {},
    "ScaleInCooldown": {},
    "DisableScaleIn": {}
  },
  "Alarms": {},
  "CreationTime": {}
}
```

<p>Represents a scaling policy to use with Application Auto Scaling.</p> <p>For more information about configuring scaling policies for a specific service, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/integrated-services-list.html">Amazon Web Services services that you can use with Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyARN|object|true|none|none|
|PolicyName|object|true|none|none|
|ServiceNamespace|object|true|none|none|
|ResourceId|object|true|none|none|
|ScalableDimension|object|true|none|none|
|PolicyType|object|true|none|none|
|StepScalingPolicyConfiguration|object|false|none|none|
|TargetTrackingScalingPolicyConfiguration|object|false|none|none|
|Alarms|object|false|none|none|
|CreationTime|object|true|none|none|

<h2 id="tocS_ScalingSuspended">ScalingSuspended</h2>
<!-- backwards compatibility -->
<a id="schemascalingsuspended"></a>
<a id="schema_ScalingSuspended"></a>
<a id="tocSscalingsuspended"></a>
<a id="tocsscalingsuspended"></a>

```json
true
```

<h2 id="tocS_ScheduledAction">ScheduledAction</h2>
<!-- backwards compatibility -->
<a id="schemascheduledaction"></a>
<a id="schema_ScheduledAction"></a>
<a id="tocSscheduledaction"></a>
<a id="tocsscheduledaction"></a>

```json
{
  "ScheduledActionName": {},
  "ScheduledActionARN": {},
  "ServiceNamespace": {},
  "Schedule": {},
  "Timezone": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "StartTime": {},
  "EndTime": {},
  "ScalableTargetAction": {
    "MinCapacity": {},
    "MaxCapacity": {}
  },
  "CreationTime": {}
}
```

Represents a scheduled action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduledActionName|object|true|none|none|
|ScheduledActionARN|object|true|none|none|
|ServiceNamespace|object|true|none|none|
|Schedule|object|true|none|none|
|Timezone|object|false|none|none|
|ResourceId|object|true|none|none|
|ScalableDimension|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|ScalableTargetAction|object|false|none|none|
|CreationTime|object|true|none|none|

<h2 id="tocS_StepAdjustment">StepAdjustment</h2>
<!-- backwards compatibility -->
<a id="schemastepadjustment"></a>
<a id="schema_StepAdjustment"></a>
<a id="tocSstepadjustment"></a>
<a id="tocsstepadjustment"></a>

```json
{
  "MetricIntervalLowerBound": {},
  "MetricIntervalUpperBound": {},
  "ScalingAdjustment": {}
}
```

<p>Represents a step adjustment for a <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_StepScalingPolicyConfiguration.html">StepScalingPolicyConfiguration</a>. Describes an adjustment based on the difference between the value of the aggregated CloudWatch metric and the breach threshold that you've defined for the alarm. </p> <p>For the following examples, suppose that you have an alarm with a breach threshold of 50:</p> <ul> <li> <p>To initiate the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of <code>0</code> and an upper bound of <code>10</code>.</p> </li> <li> <p>To initiate the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of <code>-10</code> and an upper bound of <code>0</code>.</p> </li> </ul> <p>There are a few rules for the step adjustments for your step policy:</p> <ul> <li> <p>The ranges of your step adjustments can't overlap or have a gap.</p> </li> <li> <p>At most one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.</p> </li> <li> <p>At most one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.</p> </li> <li> <p>The upper and lower bound can't be null in the same step adjustment.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricIntervalLowerBound|object|false|none|none|
|MetricIntervalUpperBound|object|false|none|none|
|ScalingAdjustment|object|true|none|none|

<h2 id="tocS_StepAdjustments">StepAdjustments</h2>
<!-- backwards compatibility -->
<a id="schemastepadjustments"></a>
<a id="schema_StepAdjustments"></a>
<a id="tocSstepadjustments"></a>
<a id="tocsstepadjustments"></a>

```json
[
  {
    "MetricIntervalLowerBound": {},
    "MetricIntervalUpperBound": {},
    "ScalingAdjustment": {}
  }
]
```

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

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

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_TargetTrackingMetricDimensions">TargetTrackingMetricDimensions</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingmetricdimensions"></a>
<a id="schema_TargetTrackingMetricDimensions"></a>
<a id="tocStargettrackingmetricdimensions"></a>
<a id="tocstargettrackingmetricdimensions"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_TargetTrackingMetricName">TargetTrackingMetricName</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingmetricname"></a>
<a id="schema_TargetTrackingMetricName"></a>
<a id="tocStargettrackingmetricname"></a>
<a id="tocstargettrackingmetricname"></a>

```json
"string"
```

<h2 id="tocS_TargetTrackingMetricNamespace">TargetTrackingMetricNamespace</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingmetricnamespace"></a>
<a id="schema_TargetTrackingMetricNamespace"></a>
<a id="tocStargettrackingmetricnamespace"></a>
<a id="tocstargettrackingmetricnamespace"></a>

```json
"string"
```

<h2 id="tocS_TargetTrackingMetric">TargetTrackingMetric</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingmetric"></a>
<a id="schema_TargetTrackingMetric"></a>
<a id="tocStargettrackingmetric"></a>
<a id="tocstargettrackingmetric"></a>

```json
{
  "Dimensions": {},
  "MetricName": {},
  "Namespace": {}
}
```

<p>Represents a specific metric.</p> <p>Metric is a property of the <a>TargetTrackingMetricStat</a> object.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Dimensions|object|false|none|none|
|MetricName|object|false|none|none|
|Namespace|object|false|none|none|

<h2 id="tocS_TargetTrackingMetricDataQuery">TargetTrackingMetricDataQuery</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingmetricdataquery"></a>
<a id="schema_TargetTrackingMetricDataQuery"></a>
<a id="tocStargettrackingmetricdataquery"></a>
<a id="tocstargettrackingmetricdataquery"></a>

```json
{
  "Expression": {},
  "Id": {},
  "Label": {},
  "MetricStat": {
    "Metric": {
      "Dimensions": {},
      "MetricName": {},
      "Namespace": {}
    },
    "Stat": {},
    "Unit": {}
  },
  "ReturnData": {}
}
```

<p>The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.</p> <p>For more information and examples, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking-metric-math.html">Create a target tracking scaling policy for Application Auto Scaling using metric math</a> in the <i>Application Auto Scaling User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expression|object|false|none|none|
|Id|object|true|none|none|
|Label|object|false|none|none|
|MetricStat|object|false|none|none|
|ReturnData|object|false|none|none|

<h2 id="tocS_TargetTrackingMetricStat">TargetTrackingMetricStat</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingmetricstat"></a>
<a id="schema_TargetTrackingMetricStat"></a>
<a id="tocStargettrackingmetricstat"></a>
<a id="tocstargettrackingmetricstat"></a>

```json
{
  "Metric": {
    "Dimensions": {},
    "MetricName": {},
    "Namespace": {}
  },
  "Stat": {},
  "Unit": {}
}
```

<p>This structure defines the CloudWatch metric to return, along with the statistic, period, and unit.</p> <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch concepts</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metric|object|true|none|none|
|Stat|object|true|none|none|
|Unit|object|false|none|none|

<h2 id="tocS_TargetTrackingMetricDimensionName">TargetTrackingMetricDimensionName</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingmetricdimensionname"></a>
<a id="schema_TargetTrackingMetricDimensionName"></a>
<a id="tocStargettrackingmetricdimensionname"></a>
<a id="tocstargettrackingmetricdimensionname"></a>

```json
"string"
```

<h2 id="tocS_TargetTrackingMetricDimensionValue">TargetTrackingMetricDimensionValue</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingmetricdimensionvalue"></a>
<a id="schema_TargetTrackingMetricDimensionValue"></a>
<a id="tocStargettrackingmetricdimensionvalue"></a>
<a id="tocstargettrackingmetricdimensionvalue"></a>

```json
"string"
```

<h2 id="tocS_TargetTrackingMetricDimension">TargetTrackingMetricDimension</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingmetricdimension"></a>
<a id="schema_TargetTrackingMetricDimension"></a>
<a id="tocStargettrackingmetricdimension"></a>
<a id="tocstargettrackingmetricdimension"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Describes the dimension of a metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_TargetTrackingMetricUnit">TargetTrackingMetricUnit</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingmetricunit"></a>
<a id="schema_TargetTrackingMetricUnit"></a>
<a id="tocStargettrackingmetricunit"></a>
<a id="tocstargettrackingmetricunit"></a>

```json
"string"
```
