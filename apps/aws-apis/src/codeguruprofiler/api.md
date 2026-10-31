<h1 id="amazon-codeguru-profiler">Amazon CodeGuru Profiler v2019-07-18</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p> This section provides documentation for the Amazon CodeGuru Profiler API operations. </p> <p> Amazon CodeGuru Profiler collects runtime performance data from your live applications, and provides recommendations that can help you fine-tune your application performance. Using machine learning algorithms, CodeGuru Profiler can help you find your most expensive lines of code and suggest ways you can improve efficiency and remove CPU bottlenecks. </p> <p> Amazon CodeGuru Profiler provides different visualizations of profiling data to help you identify what code is running on the CPU, see how much time is consumed, and suggest ways to reduce CPU utilization. </p> <note> <p>Amazon CodeGuru Profiler currently supports applications written in all Java virtual machine (JVM) languages and Python. While CodeGuru Profiler supports both visualizations and recommendations for applications written in Java, it can also generate visualizations and a subset of recommendations for applications written in other JVM languages and Python.</p> </note> <p> For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/what-is-codeguru-profiler.html">What is Amazon CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User Guide</i>. </p>

Base URLs:

* <a href="http://codeguru-profiler.us-east-1.amazonaws.com">http://codeguru-profiler.us-east-1.amazonaws.com</a> - The Amazon CodeGuru Profiler multi-region endpoint

* <a href="https://codeguru-profiler.us-east-1.amazonaws.com">https://codeguru-profiler.us-east-1.amazonaws.com</a> - The Amazon CodeGuru Profiler multi-region endpoint

* <a href="http://codeguru-profiler.cn-north-1.amazonaws.com.cn">http://codeguru-profiler.cn-north-1.amazonaws.com.cn</a> - The Amazon CodeGuru Profiler endpoint for China (Beijing) and China (Ningxia)

* <a href="https://codeguru-profiler.cn-north-1.amazonaws.com.cn">https://codeguru-profiler.cn-north-1.amazonaws.com.cn</a> - The Amazon CodeGuru Profiler endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/codeguru-profiler/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-codeguru-profiler-default">Default</h1>

## GetNotificationConfiguration

<a id="opIdGetNotificationConfiguration"></a>

> Code samples

```bash
curl https://codeguruprofiler.us-east-1.amazonaws.com/profilingGroups/string/notificationConfiguration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /profilingGroups/{profilingGroupName}/notificationConfiguration`

Get the current configuration for anomaly notifications for a profiling group.

<h3 id="getnotificationconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profilingGroupName|path|string|true|The name of the profiling group we want to get the notification configuration for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "notificationConfiguration": {
    "channels": {}
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

<h3 id="getnotificationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetNotificationConfigurationResponse](#schemagetnotificationconfigurationresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddNotificationChannels

<a id="opIdAddNotificationChannels"></a>

> Code samples

```bash
curl https://codeguruprofiler.us-east-1.amazonaws.com/profilingGroups/string/notificationConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "channels": [
      {
        "eventPublishers": {},
        "id": {},
        "uri": {}
      }
    ]
  }'
```

`POST /profilingGroups/{profilingGroupName}/notificationConfiguration`

Add up to 2 anomaly notifications channels for a profiling group.

> Body parameter

```json
{
  "channels": [
    {
      "eventPublishers": {},
      "id": {},
      "uri": {}
    }
  ]
}
```

<h3 id="addnotificationchannels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profilingGroupName|path|string|true|The name of the profiling group that we are setting up notifications for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» channels|body|[[Channel](#schemachannel)]|true|One or 2 channels to report to when anomalies are detected.|

> Example responses

> 200 Response

```json
{
  "notificationConfiguration": {
    "channels": {}
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

<h3 id="addnotificationchannels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddNotificationChannelsResponse](#schemaaddnotificationchannelsresponse)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetFrameMetricData

<a id="opIdBatchGetFrameMetricData"></a>

> Code samples

```bash
curl https://codeguruprofiler.us-east-1.amazonaws.com/profilingGroups/string/frames/-/metrics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "frameMetrics": [
      {
        "frameName": {},
        "threadStates": {},
        "type": {}
      }
    ]
  }'
```

`POST /profilingGroups/{profilingGroupName}/frames/-/metrics`

 Returns the time series of values for a requested list of frame metrics from a time period.

> Body parameter

```json
{
  "frameMetrics": [
    {
      "frameName": {},
      "threadStates": {},
      "type": {}
    }
  ]
}
```

<h3 id="batchgetframemetricdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endTime|query|string(date-time)|false| The end time of the time period for the returned time series values. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. |
|period|query|string|false| The duration of the frame metrics used to return the time series values. Specify using the ISO 8601 format. The maximum period duration is one day (<code>PT24H</code> or <code>P1D</code>). |
|profilingGroupName|path|string|true| The name of the profiling group associated with the the frame metrics used to return the time series values. |
|startTime|query|string(date-time)|false| The start time of the time period for the frame metrics used to return the time series values. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. |
|targetResolution|query|string|false|<p>The requested resolution of time steps for the returned time series of values. If the requested target resolution is not available due to data not being retained we provide a best effort result by falling back to the most granular available resolution after the target resolution. There are 3 valid values. </p> <ul> <li> <p> <code>P1D</code> — 1 day </p> </li> <li> <p> <code>PT1H</code> — 1 hour </p> </li> <li> <p> <code>PT5M</code> — 5 minutes </p> </li> </ul>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» frameMetrics|body|[[FrameMetric](#schemaframemetric)]|false| The details of the metrics that are used to request a time series of values. The metric includes the name of the frame, the aggregation type to calculate the metric value for the frame, and the thread states to use to get the count for the metric value of the frame.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|targetResolution|PT5M|
|targetResolution|PT1H|
|targetResolution|P1D|

> Example responses

> 200 Response

```json
{
  "endTime": {},
  "endTimes": {},
  "frameMetricData": {},
  "resolution": {},
  "startTime": {},
  "unprocessedEndTimes": {
    "property1": [
      {
        "value": {}
      }
    ],
    "property2": [
      {
        "value": {}
      }
    ]
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

<h3 id="batchgetframemetricdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetFrameMetricDataResponse](#schemabatchgetframemetricdataresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ConfigureAgent

<a id="opIdConfigureAgent"></a>

> Code samples

```bash
curl https://codeguruprofiler.us-east-1.amazonaws.com/profilingGroups/string/configureAgent \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "fleetInstanceId": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /profilingGroups/{profilingGroupName}/configureAgent`

 Used by profiler agents to report their current state and to receive remote configuration updates. For example, <code>ConfigureAgent</code> can be used to tell an agent whether to profile or not and for how long to return profiling data. 

> Body parameter

```json
{
  "fleetInstanceId": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="configureagent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profilingGroupName|path|string|true| The name of the profiling group for which the configured agent is collecting profiling data. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» fleetInstanceId|body|string|false| A universally unique identifier (UUID) for a profiling instance. For example, if the profiling instance is an Amazon EC2 instance, it is the instance ID. If it is an AWS Fargate container, it is the container's task ID. |
|» metadata|body|object|false|<p> Metadata captured about the compute platform the agent is running on. It includes information about sampling and reporting. The valid fields are:</p> <ul> <li> <p> <code>COMPUTE_PLATFORM</code> - The compute platform on which the agent is running </p> </li> <li> <p> <code>AGENT_ID</code> - The ID for an agent instance. </p> </li> <li> <p> <code>AWS_REQUEST_ID</code> - The AWS request ID of a Lambda invocation. </p> </li> <li> <p> <code>EXECUTION_ENVIRONMENT</code> - The execution environment a Lambda function is running on. </p> </li> <li> <p> <code>LAMBDA_FUNCTION_ARN</code> - The Amazon Resource Name (ARN) that is used to invoke a Lambda function. </p> </li> <li> <p> <code>LAMBDA_MEMORY_LIMIT_IN_MB</code> - The memory allocated to a Lambda function. </p> </li> <li> <p> <code>LAMBDA_REMAINING_TIME_IN_MILLISECONDS</code> - The time in milliseconds before execution of a Lambda function times out. </p> </li> <li> <p> <code>LAMBDA_TIME_GAP_BETWEEN_INVOKES_IN_MILLISECONDS</code> - The time in milliseconds between two invocations of a Lambda function. </p> </li> <li> <p> <code>LAMBDA_PREVIOUS_EXECUTION_TIME_IN_MILLISECONDS</code> - The time in milliseconds for the previous Lambda invocation. </p> </li> </ul>|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 200 Response

```json
{
  "configuration": {
    "agentParameters": {
      "property1": "string",
      "property2": "string"
    },
    "periodInSeconds": {},
    "shouldProfile": {}
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

<h3 id="configureagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigureAgentResponse](#schemaconfigureagentresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProfilingGroup

<a id="opIdCreateProfilingGroup"></a>

> Code samples

```bash
curl 'https://codeguruprofiler.us-east-1.amazonaws.com/profilingGroups#clientToken?clientToken=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "agentOrchestrationConfig": {
      "profilingEnabled": {}
    },
    "computePlatform": "Default",
    "profilingGroupName": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /profilingGroups#clientToken`

Creates a profiling group.

> Body parameter

```json
{
  "agentOrchestrationConfig": {
    "profilingEnabled": {}
  },
  "computePlatform": "Default",
  "profilingGroupName": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createprofilinggroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientToken|query|string|true| Amazon CodeGuru Profiler uses this universally unique identifier (UUID) to prevent the accidental creation of duplicate profiling groups if there are failures and retries. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» agentOrchestrationConfig|body|object|false| Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group. |
|» » profilingEnabled|body|object|false|none|
|» computePlatform|body|string|false| The compute platform of the profiling group. Use <code>AWSLambda</code> if your application runs on AWS Lambda. Use <code>Default</code> if your application runs on a compute platform that is not AWS Lambda, such an Amazon EC2 instance, an on-premises server, or a different platform. If not specified, <code>Default</code> is used. |
|» profilingGroupName|body|string|true|The name of the profiling group to create.|
|» tags|body|object|false| A list of tags to add to the created profiling group. |
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» computePlatform|Default|
|» computePlatform|AWSLambda|

> Example responses

> 201 Response

```json
{
  "profilingGroup": {
    "agentOrchestrationConfig": {
      "profilingEnabled": {}
    },
    "arn": {},
    "computePlatform": {},
    "createdAt": {},
    "name": {},
    "profilingStatus": {
      "latestAgentOrchestratedAt": {},
      "latestAgentProfileReportedAt": {},
      "latestAggregatedProfile": {
        "period": {},
        "start": {}
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {}
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

<h3 id="createprofilinggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateProfilingGroupResponse](#schemacreateprofilinggroupresponse)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProfilingGroup

<a id="opIdDescribeProfilingGroup"></a>

> Code samples

```bash
curl https://codeguruprofiler.us-east-1.amazonaws.com/profilingGroups/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /profilingGroups/{profilingGroupName}`

 Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> object that contains information about the requested profiling group. 

<h3 id="describeprofilinggroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profilingGroupName|path|string|true| The name of the profiling group to get information about. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "profilingGroup": {
    "agentOrchestrationConfig": {
      "profilingEnabled": {}
    },
    "arn": {},
    "computePlatform": {},
    "createdAt": {},
    "name": {},
    "profilingStatus": {
      "latestAgentOrchestratedAt": {},
      "latestAgentProfileReportedAt": {},
      "latestAggregatedProfile": {
        "period": {},
        "start": {}
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {}
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

<h3 id="describeprofilinggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProfilingGroupResponse](#schemadescribeprofilinggroupresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProfilingGroup

<a id="opIdUpdateProfilingGroup"></a>

> Code samples

```bash
curl https://codeguruprofiler.us-east-1.amazonaws.com/profilingGroups/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "agentOrchestrationConfig": {
      "profilingEnabled": {}
    }
  }'
```

`PUT /profilingGroups/{profilingGroupName}`

Updates a profiling group.

> Body parameter

```json
{
  "agentOrchestrationConfig": {
    "profilingEnabled": {}
  }
}
```

<h3 id="updateprofilinggroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profilingGroupName|path|string|true|The name of the profiling group to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» agentOrchestrationConfig|body|object|true| Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group. |
|» » profilingEnabled|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "profilingGroup": {
    "agentOrchestrationConfig": {
      "profilingEnabled": {}
    },
    "arn": {},
    "computePlatform": {},
    "createdAt": {},
    "name": {},
    "profilingStatus": {
      "latestAgentOrchestratedAt": {},
      "latestAgentProfileReportedAt": {},
      "latestAggregatedProfile": {
        "period": {},
        "start": {}
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {}
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

<h3 id="updateprofilinggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProfilingGroupResponse](#schemaupdateprofilinggroupresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProfilingGroup

<a id="opIdDeleteProfilingGroup"></a>

> Code samples

```bash
curl https://codeguruprofiler.us-east-1.amazonaws.com/profilingGroups/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /profilingGroups/{profilingGroupName}`

Deletes a profiling group.

<h3 id="deleteprofilinggroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profilingGroupName|path|string|true|The name of the profiling group to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 204 Response

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

<h3 id="deleteprofilinggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteProfilingGroupResponse](#schemadeleteprofilinggroupresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFindingsReportAccountSummary

<a id="opIdGetFindingsReportAccountSummary"></a>

> Code samples

```bash
curl https://codeguruprofiler.us-east-1.amazonaws.com/internal/findingsReports \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /internal/findingsReports`

 Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html"> <code>FindingsReportSummary</code> </a> objects that contain analysis results for all profiling groups in your AWS account. 

<h3 id="getfindingsreportaccountsummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dailyReportsOnly|query|boolean|false|A <code>Boolean</code> value indicating whether to only return reports from daily profiles. If set to <code>True</code>, only analysis data from daily profiles is returned. If set to <code>False</code>, analysis data is returned from smaller time windows (for example, one hour).|
|maxResults|query|integer|false|The maximum number of results returned by <code> GetFindingsReportAccountSummary</code> in paginated output. When this parameter is used, <code>GetFindingsReportAccountSummary</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>GetFindingsReportAccountSummary</code> request with the returned <code>nextToken</code> value.|
|nextToken|query|string|false|<p>The <code>nextToken</code> value returned from a previous paginated <code>GetFindingsReportAccountSummary</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "reportSummaries": {}
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

<h3 id="getfindingsreportaccountsummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFindingsReportAccountSummaryResponse](#schemagetfindingsreportaccountsummaryresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPolicy

<a id="opIdGetPolicy"></a>

> Code samples

```bash
curl https://codeguruprofiler.us-east-1.amazonaws.com/profilingGroups/string/policy \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /profilingGroups/{profilingGroupName}/policy`

 Returns the JSON-formatted resource-based policy on a profiling group. 

<h3 id="getpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profilingGroupName|path|string|true|The name of the profiling group.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "policy": {},
  "revisionId": {}
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

<h3 id="getpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPolicyResponse](#schemagetpolicyresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetProfile

<a id="opIdGetProfile"></a>

> Code samples

```bash
curl https://codeguruprofiler.us-east-1.amazonaws.com/profilingGroups/string/profile \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /profilingGroups/{profilingGroupName}/profile`

<p> Gets the aggregated profile of a profiling group for a specified time range. Amazon CodeGuru Profiler collects posted agent profiles for a profiling group into aggregated profiles. </p> <pre><code> &lt;note&gt; &lt;p&gt; Because aggregated profiles expire over time &lt;code&gt;GetProfile&lt;/code&gt; is not idempotent. &lt;/p&gt; &lt;/note&gt; &lt;p&gt; Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: &lt;code&gt;startTime&lt;/code&gt;, &lt;code&gt;endTime&lt;/code&gt;, &lt;code&gt;period&lt;/code&gt;. The maximum time range allowed is 7 days. If you specify all 3 parameters, an exception is thrown. If you specify only &lt;code&gt;period&lt;/code&gt;, the latest aggregated profile is returned. &lt;/p&gt; &lt;p&gt; Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to UTC. The aggregation period of an aggregated profile determines how long it is retained. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html&quot;&gt; &lt;code&gt;AggregatedProfileTime&lt;/code&gt; &lt;/a&gt;. The aggregated profile's aggregation period determines how long it is retained by CodeGuru Profiler. &lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 hour, the aggregated profile is retained for 60 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 day, the aggregated profile is retained for 3 years. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;There are two use cases for calling &lt;code&gt;GetProfile&lt;/code&gt;.&lt;/p&gt; &lt;ol&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile that already exists, use &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html&quot;&gt; &lt;code&gt;ListProfileTimes&lt;/code&gt; &lt;/a&gt; to view the time ranges of existing aggregated profiles. Use them in a &lt;code&gt;GetProfile&lt;/code&gt; request to return a specific, existing aggregated profile. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile, then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time range and return them as one aggregated profile. &lt;/p&gt; &lt;p&gt; If aggregated profiles do not exist for the full time range requested, then aggregated profiles for a smaller time range are returned. For example, if the requested time range is from 00:00 to 00:20, and the existing aggregated profiles are from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. &lt;/p&gt; &lt;/li&gt; &lt;/ol&gt; </code></pre>

<h3 id="getprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|false|<p> The format of the returned profiling data. The format maps to the <code>Accept</code> and <code>Content-Type</code> headers of the HTTP request. You can specify one of the following: or the default . </p> <pre><code> &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;application/json&lt;/code&gt; — standard JSON format &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;application/x-amzn-ion&lt;/code&gt; — the Amazon Ion data format. For more information, see &lt;a href=&quot;http://amzn.github.io/ion-docs/&quot;&gt;Amazon Ion&lt;/a&gt;. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; </code></pre>|
|endTime|query|string(date-time)|false|<p> The end time of the requested profile. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. </p> <p> If you specify <code>endTime</code>, then you must also specify <code>period</code> or <code>startTime</code>, but not both. </p>|
|maxDepth|query|integer|false| The maximum depth of the stacks in the code that is represented in the aggregated profile. For example, if CodeGuru Profiler finds a method <code>A</code>, which calls method <code>B</code>, which calls method <code>C</code>, which calls method <code>D</code>, then the depth is 4. If the <code>maxDepth</code> is set to 2, then the aggregated profile contains representations of methods <code>A</code> and <code>B</code>. |
|period|query|string|false|<p> Used with <code>startTime</code> or <code>endTime</code> to specify the time range for the returned aggregated profile. Specify using the ISO 8601 format. For example, <code>P1DT1H1M1S</code>. </p> <pre><code> &lt;p&gt; To get the latest aggregated profile, specify only &lt;code&gt;period&lt;/code&gt;. &lt;/p&gt; </code></pre>|
|profilingGroupName|path|string|true|The name of the profiling group to get.|
|startTime|query|string(date-time)|false|<p>The start time of the profile to get. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</p> <pre><code> &lt;p&gt; If you specify &lt;code&gt;startTime&lt;/code&gt;, then you must also specify &lt;code&gt;period&lt;/code&gt; or &lt;code&gt;endTime&lt;/code&gt;, but not both. &lt;/p&gt; </code></pre>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "profile": {}
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

<h3 id="getprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetProfileResponse](#schemagetprofileresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRecommendations

<a id="opIdGetRecommendations"></a>

> Code samples

```bash
curl 'https://codeguruprofiler.us-east-1.amazonaws.com/internal/profilingGroups/string/recommendations#endTime&startTime?endTime=1970-01-01T00%3A00%3A00Z&startTime=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /internal/profilingGroups/{profilingGroupName}/recommendations#endTime&startTime`

 Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Recommendation.html"> <code>Recommendation</code> </a> objects that contain recommendations for a profiling group for a given time period. A list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Anomaly.html"> <code>Anomaly</code> </a> objects that contains details about anomalies detected in the profiling group for the same time period is also returned. 

<h3 id="getrecommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endTime|query|string(date-time)|true| The start time of the profile to get analysis data about. You must specify <code>startTime</code> and <code>endTime</code>. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. |
|locale|query|string|false|<p> The language used to provide analysis. Specify using a string that is one of the following <code>BCP 47</code> language codes. </p> <ul> <li> <p> <code>de-DE</code> - German, Germany </p> </li> <li> <p> <code>en-GB</code> - English, United Kingdom </p> </li> <li> <p> <code>en-US</code> - English, United States </p> </li> <li> <p> <code>es-ES</code> - Spanish, Spain </p> </li> <li> <p> <code>fr-FR</code> - French, France </p> </li> <li> <p> <code>it-IT</code> - Italian, Italy </p> </li> <li> <p> <code>ja-JP</code> - Japanese, Japan </p> </li> <li> <p> <code>ko-KR</code> - Korean, Republic of Korea </p> </li> <li> <p> <code>pt-BR</code> - Portugese, Brazil </p> </li> <li> <p> <code>zh-CN</code> - Chinese, China </p> </li> <li> <p> <code>zh-TW</code> - Chinese, Taiwan </p> </li> </ul>|
|profilingGroupName|path|string|true| The name of the profiling group to get analysis data about. |
|startTime|query|string(date-time)|true| The end time of the profile to get analysis data about. You must specify <code>startTime</code> and <code>endTime</code>. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "anomalies": {},
  "profileEndTime": {},
  "profileStartTime": {},
  "profilingGroupName": {},
  "recommendations": {}
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

<h3 id="getrecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRecommendationsResponse](#schemagetrecommendationsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFindingsReports

<a id="opIdListFindingsReports"></a>

> Code samples

```bash
curl 'https://codeguruprofiler.us-east-1.amazonaws.com/internal/profilingGroups/string/findingsReports#endTime&startTime?endTime=1970-01-01T00%3A00%3A00Z&startTime=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /internal/profilingGroups/{profilingGroupName}/findingsReports#endTime&startTime`

List the available reports for a given profiling group and time range.

<h3 id="listfindingsreports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dailyReportsOnly|query|boolean|false|A <code>Boolean</code> value indicating whether to only return reports from daily profiles. If set to <code>True</code>, only analysis data from daily profiles is returned. If set to <code>False</code>, analysis data is returned from smaller time windows (for example, one hour).|
|endTime|query|string(date-time)|true| The end time of the profile to get analysis data about. You must specify <code>startTime</code> and <code>endTime</code>. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. |
|maxResults|query|integer|false|The maximum number of report results returned by <code>ListFindingsReports</code> in paginated output. When this parameter is used, <code>ListFindingsReports</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListFindingsReports</code> request with the returned <code>nextToken</code> value.|
|nextToken|query|string|false|<p>The <code>nextToken</code> value returned from a previous paginated <code>ListFindingsReportsRequest</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>|
|profilingGroupName|path|string|true|The name of the profiling group from which to search for analysis data.|
|startTime|query|string(date-time)|true| The start time of the profile to get analysis data about. You must specify <code>startTime</code> and <code>endTime</code>. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "findingsReportSummaries": {},
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

<h3 id="listfindingsreports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFindingsReportsResponse](#schemalistfindingsreportsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProfileTimes

<a id="opIdListProfileTimes"></a>

> Code samples

```bash
curl 'https://codeguruprofiler.us-east-1.amazonaws.com/profilingGroups/string/profileTimes#endTime&period&startTime?endTime=1970-01-01T00%3A00%3A00Z&period=PT5M&startTime=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /profilingGroups/{profilingGroupName}/profileTimes#endTime&period&startTime`

Lists the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.

<h3 id="listprofiletimes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endTime|query|string(date-time)|true|The end time of the time range from which to list the profiles.|
|maxResults|query|integer|false|The maximum number of profile time results returned by <code>ListProfileTimes</code> in paginated output. When this parameter is used, <code>ListProfileTimes</code> only returns <code>maxResults</code> results in a single page with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListProfileTimes</code> request with the returned <code>nextToken</code> value. |
|nextToken|query|string|false|<p>The <code>nextToken</code> value returned from a previous paginated <code>ListProfileTimes</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>|
|orderBy|query|string|false|The order (ascending or descending by start time of the profile) to use when listing profiles. Defaults to <code>TIMESTAMP_DESCENDING</code>. |
|period|query|string|true|<p> The aggregation period. This specifies the period during which an aggregation profile collects posted agent profiles for a profiling group. There are 3 valid values. </p> <ul> <li> <p> <code>P1D</code> — 1 day </p> </li> <li> <p> <code>PT1H</code> — 1 hour </p> </li> <li> <p> <code>PT5M</code> — 5 minutes </p> </li> </ul>|
|profilingGroupName|path|string|true|The name of the profiling group.|
|startTime|query|string(date-time)|true|The start time of the time range from which to list the profiles.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|orderBy|TimestampDescending|
|orderBy|TimestampAscending|
|period|PT5M|
|period|PT1H|
|period|P1D|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "profileTimes": {}
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

<h3 id="listprofiletimes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProfileTimesResponse](#schemalistprofiletimesresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProfilingGroups

<a id="opIdListProfilingGroups"></a>

> Code samples

```bash
curl https://codeguruprofiler.us-east-1.amazonaws.com/profilingGroups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /profilingGroups`

 Returns a list of profiling groups. The profiling groups are returned as <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> objects. 

<h3 id="listprofilinggroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|includeDescription|query|boolean|false|A <code>Boolean</code> value indicating whether to include a description. If <code>true</code>, then a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> objects that contain detailed information about profiling groups is returned. If <code>false</code>, then a list of profiling group names is returned.|
|maxResults|query|integer|false|The maximum number of profiling groups results returned by <code>ListProfilingGroups</code> in paginated output. When this parameter is used, <code>ListProfilingGroups</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListProfilingGroups</code> request with the returned <code>nextToken</code> value. |
|nextToken|query|string|false|<p>The <code>nextToken</code> value returned from a previous paginated <code>ListProfilingGroups</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "profilingGroupNames": {},
  "profilingGroups": {}
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

<h3 id="listprofilinggroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProfilingGroupsResponse](#schemalistprofilinggroupsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://codeguruprofiler.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

 Returns a list of the tags that are assigned to a specified resource. 

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true| The Amazon Resource Name (ARN) of the resource that contains the tags to return. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://codeguruprofiler.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{resourceArn}`

 Use to assign one or more tags to a resource. 

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true| The Amazon Resource Name (ARN) of the resource that the tags are added to. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true| The list of tags that are added to the specified resource. |
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 204 Response

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
|204|No Content|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PostAgentProfile

<a id="opIdPostAgentProfile"></a>

> Code samples

```bash
curl 'https://codeguruprofiler.us-east-1.amazonaws.com/profilingGroups/string/agentProfile#Content-Type' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "agentProfile": "string"
  }'
```

`POST /profilingGroups/{profilingGroupName}/agentProfile#Content-Type`

 Submits profiling data to an aggregated profile of a profiling group. To get an aggregated profile that is created with this profiling data, use <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html"> <code>GetProfile</code> </a>. 

> Body parameter

```json
{
  "agentProfile": "string"
}
```

<h3 id="postagentprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|<p> The format of the submitted profiling data. The format maps to the <code>Accept</code> and <code>Content-Type</code> headers of the HTTP request. You can specify one of the following: or the default . </p> <pre><code> &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;application/json&lt;/code&gt; — standard JSON format &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;application/x-amzn-ion&lt;/code&gt; — the Amazon Ion data format. For more information, see &lt;a href=&quot;http://amzn.github.io/ion-docs/&quot;&gt;Amazon Ion&lt;/a&gt;. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; </code></pre>|
|profileToken|query|string|false| Amazon CodeGuru Profiler uses this universally unique identifier (UUID) to prevent the accidental submission of duplicate profiling data if there are failures and retries. |
|profilingGroupName|path|string|true| The name of the profiling group with the aggregated profile that receives the submitted profiling data. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» agentProfile|body|string|true| The submitted profiling data. |

> Example responses

> 204 Response

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

<h3 id="postagentprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[PostAgentProfileResponse](#schemapostagentprofileresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutPermission

<a id="opIdPutPermission"></a>

> Code samples

```bash
curl https://codeguruprofiler.us-east-1.amazonaws.com/profilingGroups/string/policy/agentPermissions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "principals": [
      "string"
    ],
    "revisionId": "string"
  }'
```

`PUT /profilingGroups/{profilingGroupName}/policy/{actionGroup}`

<p> Adds permissions to a profiling group's resource-based policy that are provided using an action group. If a profiling group doesn't have a resource-based policy, one is created for it using the permissions in the action group and the roles and users in the <code>principals</code> parameter. </p> <pre><code> &lt;p&gt; The one supported action group that can be added is &lt;code&gt;agentPermission&lt;/code&gt; which grants &lt;code&gt;ConfigureAgent&lt;/code&gt; and &lt;code&gt;PostAgent&lt;/code&gt; permissions. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html&quot;&gt;Resource-based policies in CodeGuru Profiler&lt;/a&gt; in the &lt;i&gt;Amazon CodeGuru Profiler User Guide&lt;/i&gt;, &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html&quot;&gt; &lt;code&gt;ConfigureAgent&lt;/code&gt; &lt;/a&gt;, and &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html&quot;&gt; &lt;code&gt;PostAgentProfile&lt;/code&gt; &lt;/a&gt;. &lt;/p&gt; &lt;p&gt; The first time you call &lt;code&gt;PutPermission&lt;/code&gt; on a profiling group, do not specify a &lt;code&gt;revisionId&lt;/code&gt; because it doesn't have a resource-based policy. Subsequent calls must provide a &lt;code&gt;revisionId&lt;/code&gt; to specify which revision of the resource-based policy to add the permissions to. &lt;/p&gt; &lt;p&gt; The response contains the profiling group's JSON-formatted resource policy. &lt;/p&gt; </code></pre>

> Body parameter

```json
{
  "principals": [
    "string"
  ],
  "revisionId": "string"
}
```

<h3 id="putpermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|actionGroup|path|string|true| Specifies an action group that contains permissions to add to a profiling group resource. One action group is supported, <code>agentPermissions</code>, which grants permission to perform actions required by the profiling agent, <code>ConfigureAgent</code> and <code>PostAgentProfile</code> permissions. |
|profilingGroupName|path|string|true|The name of the profiling group to grant access to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» principals|body|[[Principal](#schemaprincipal)]|true| A list ARNs for the roles and users you want to grant access to the profiling group. Wildcards are not are supported in the ARNs. |
|» revisionId|body|string|false| A universally unique identifier (UUID) for the revision of the policy you are adding to the profiling group. Do not specify this when you add permissions to a profiling group for the first time. If a policy already exists on the profiling group, you must specify the <code>revisionId</code>. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|actionGroup|agentPermissions|

> Example responses

> 200 Response

```json
{
  "policy": {},
  "revisionId": {}
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

<h3 id="putpermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutPermissionResponse](#schemaputpermissionresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveNotificationChannel

<a id="opIdRemoveNotificationChannel"></a>

> Code samples

```bash
curl https://codeguruprofiler.us-east-1.amazonaws.com/profilingGroups/string/notificationConfiguration/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /profilingGroups/{profilingGroupName}/notificationConfiguration/{channelId}`

Remove one anomaly notifications channel for a profiling group.

<h3 id="removenotificationchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|string|true|The id of the channel that we want to stop receiving notifications.|
|profilingGroupName|path|string|true|The name of the profiling group we want to change notification configuration for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "notificationConfiguration": {
    "channels": {}
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

<h3 id="removenotificationchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveNotificationChannelResponse](#schemaremovenotificationchannelresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemovePermission

<a id="opIdRemovePermission"></a>

> Code samples

```bash
curl 'https://codeguruprofiler.us-east-1.amazonaws.com/profilingGroups/string/policy/agentPermissions#revisionId?revisionId=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /profilingGroups/{profilingGroupName}/policy/{actionGroup}#revisionId`

 Removes permissions from a profiling group's resource-based policy that are provided using an action group. The one supported action group that can be removed is <code>agentPermission</code> which grants <code>ConfigureAgent</code> and <code>PostAgent</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based policies in CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html"> <code>PostAgentProfile</code> </a>. 

<h3 id="removepermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|actionGroup|path|string|true| Specifies an action group that contains the permissions to remove from a profiling group's resource-based policy. One action group is supported, <code>agentPermissions</code>, which grants <code>ConfigureAgent</code> and <code>PostAgentProfile</code> permissions. |
|profilingGroupName|path|string|true|The name of the profiling group.|
|revisionId|query|string|true| A universally unique identifier (UUID) for the revision of the resource-based policy from which you want to remove permissions. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|actionGroup|agentPermissions|

> Example responses

> 200 Response

```json
{
  "policy": {},
  "revisionId": {}
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

<h3 id="removepermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemovePermissionResponse](#schemaremovepermissionresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SubmitFeedback

<a id="opIdSubmitFeedback"></a>

> Code samples

```bash
curl https://codeguruprofiler.us-east-1.amazonaws.com/internal/profilingGroups/string/anomalies/string/feedback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "comment": "string",
    "type": "Positive"
  }'
```

`POST /internal/profilingGroups/{profilingGroupName}/anomalies/{anomalyInstanceId}/feedback`

Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is useful or not.

> Body parameter

```json
{
  "comment": "string",
  "type": "Positive"
}
```

<h3 id="submitfeedback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anomalyInstanceId|path|string|true|The universally unique identifier (UUID) of the <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AnomalyInstance.html"> <code>AnomalyInstance</code> </a> object that is included in the analysis data.|
|profilingGroupName|path|string|true|The name of the profiling group that is associated with the analysis data.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» comment|body|string|false|Optional feedback about this anomaly.|
|» type|body|string|true| The feedback tpye. Thee are two valid values, <code>Positive</code> and <code>Negative</code>. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|Positive|
|» type|Negative|

> Example responses

> 204 Response

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

<h3 id="submitfeedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[SubmitFeedbackResponse](#schemasubmitfeedbackresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://codeguruprofiler.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

 Use to remove one or more tags from a resource. 

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true| The Amazon Resource Name (ARN) of the resource that contains the tags to remove. |
|tagKeys|query|[[String](#schemastring)]|true| A list of tag keys. Existing tags of resources with keys in this list are removed from the specified resource. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 204 Response

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddNotificationChannelsResponse">AddNotificationChannelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddnotificationchannelsresponse"></a>
<a id="schema_AddNotificationChannelsResponse"></a>
<a id="tocSaddnotificationchannelsresponse"></a>
<a id="tocsaddnotificationchannelsresponse"></a>

```json
{
  "notificationConfiguration": {
    "channels": {}
  }
}
```

The structure representing the AddNotificationChannelsResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationConfiguration|object|false|none|none|

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "eventPublishers": {},
  "id": {},
  "uri": {}
}
```

Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventPublishers|object|true|none|none|
|id|object|false|none|none|
|uri|object|true|none|none|

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_BatchGetFrameMetricDataResponse">BatchGetFrameMetricDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetframemetricdataresponse"></a>
<a id="schema_BatchGetFrameMetricDataResponse"></a>
<a id="tocSbatchgetframemetricdataresponse"></a>
<a id="tocsbatchgetframemetricdataresponse"></a>

```json
{
  "endTime": {},
  "endTimes": {},
  "frameMetricData": {},
  "resolution": {},
  "startTime": {},
  "unprocessedEndTimes": {
    "property1": [
      {
        "value": {}
      }
    ],
    "property2": [
      {
        "value": {}
      }
    ]
  }
}
```

The structure representing the BatchGetFrameMetricDataResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|object|true|none|none|
|endTimes|object|true|none|none|
|frameMetricData|object|true|none|none|
|resolution|object|true|none|none|
|startTime|object|true|none|none|
|unprocessedEndTimes|object|true|none|none|

<h2 id="tocS_FrameMetric">FrameMetric</h2>
<!-- backwards compatibility -->
<a id="schemaframemetric"></a>
<a id="schema_FrameMetric"></a>
<a id="tocSframemetric"></a>
<a id="tocsframemetric"></a>

```json
{
  "frameName": {},
  "threadStates": {},
  "type": {}
}
```

 The frame name, metric type, and thread states. These are used to derive the value of the metric for the frame.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frameName|object|true|none|none|
|threadStates|object|true|none|none|
|type|object|true|none|none|

<h2 id="tocS_ConfigureAgentResponse">ConfigureAgentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfigureagentresponse"></a>
<a id="schema_ConfigureAgentResponse"></a>
<a id="tocSconfigureagentresponse"></a>
<a id="tocsconfigureagentresponse"></a>

```json
{
  "configuration": {
    "agentParameters": {
      "property1": "string",
      "property2": "string"
    },
    "periodInSeconds": {},
    "shouldProfile": {}
  }
}
```

The structure representing the configureAgentResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|object|true|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_CreateProfilingGroupResponse">CreateProfilingGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateprofilinggroupresponse"></a>
<a id="schema_CreateProfilingGroupResponse"></a>
<a id="tocScreateprofilinggroupresponse"></a>
<a id="tocscreateprofilinggroupresponse"></a>

```json
{
  "profilingGroup": {
    "agentOrchestrationConfig": {
      "profilingEnabled": {}
    },
    "arn": {},
    "computePlatform": {},
    "createdAt": {},
    "name": {},
    "profilingStatus": {
      "latestAgentOrchestratedAt": {},
      "latestAgentProfileReportedAt": {},
      "latestAggregatedProfile": {
        "period": {},
        "start": {}
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {}
  }
}
```

The structure representing the createProfilingGroupResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profilingGroup|object|true|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_DeleteProfilingGroupResponse">DeleteProfilingGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprofilinggroupresponse"></a>
<a id="schema_DeleteProfilingGroupResponse"></a>
<a id="tocSdeleteprofilinggroupresponse"></a>
<a id="tocsdeleteprofilinggroupresponse"></a>

```json
{}
```

The structure representing the deleteProfilingGroupResponse.

<h2 id="tocS_DescribeProfilingGroupResponse">DescribeProfilingGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprofilinggroupresponse"></a>
<a id="schema_DescribeProfilingGroupResponse"></a>
<a id="tocSdescribeprofilinggroupresponse"></a>
<a id="tocsdescribeprofilinggroupresponse"></a>

```json
{
  "profilingGroup": {
    "agentOrchestrationConfig": {
      "profilingEnabled": {}
    },
    "arn": {},
    "computePlatform": {},
    "createdAt": {},
    "name": {},
    "profilingStatus": {
      "latestAgentOrchestratedAt": {},
      "latestAgentProfileReportedAt": {},
      "latestAggregatedProfile": {
        "period": {},
        "start": {}
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {}
  }
}
```

The structure representing the describeProfilingGroupResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profilingGroup|object|true|none|none|

<h2 id="tocS_GetFindingsReportAccountSummaryResponse">GetFindingsReportAccountSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfindingsreportaccountsummaryresponse"></a>
<a id="schema_GetFindingsReportAccountSummaryResponse"></a>
<a id="tocSgetfindingsreportaccountsummaryresponse"></a>
<a id="tocsgetfindingsreportaccountsummaryresponse"></a>

```json
{
  "nextToken": {},
  "reportSummaries": {}
}
```

The structure representing the GetFindingsReportAccountSummaryResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|reportSummaries|object|true|none|none|

<h2 id="tocS_GetNotificationConfigurationResponse">GetNotificationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetnotificationconfigurationresponse"></a>
<a id="schema_GetNotificationConfigurationResponse"></a>
<a id="tocSgetnotificationconfigurationresponse"></a>
<a id="tocsgetnotificationconfigurationresponse"></a>

```json
{
  "notificationConfiguration": {
    "channels": {}
  }
}
```

The structure representing the GetNotificationConfigurationResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationConfiguration|object|true|none|none|

<h2 id="tocS_GetPolicyResponse">GetPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpolicyresponse"></a>
<a id="schema_GetPolicyResponse"></a>
<a id="tocSgetpolicyresponse"></a>
<a id="tocsgetpolicyresponse"></a>

```json
{
  "policy": {},
  "revisionId": {}
}
```

The structure representing the <code>getPolicyResponse</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|object|true|none|none|
|revisionId|object|true|none|none|

<h2 id="tocS_GetProfileResponse">GetProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetprofileresponse"></a>
<a id="schema_GetProfileResponse"></a>
<a id="tocSgetprofileresponse"></a>
<a id="tocsgetprofileresponse"></a>

```json
{
  "profile": {}
}
```

The structure representing the getProfileResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profile|object|true|none|none|

<h2 id="tocS_GetRecommendationsResponse">GetRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrecommendationsresponse"></a>
<a id="schema_GetRecommendationsResponse"></a>
<a id="tocSgetrecommendationsresponse"></a>
<a id="tocsgetrecommendationsresponse"></a>

```json
{
  "anomalies": {},
  "profileEndTime": {},
  "profileStartTime": {},
  "profilingGroupName": {},
  "recommendations": {}
}
```

The structure representing the GetRecommendationsResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|anomalies|object|true|none|none|
|profileEndTime|object|true|none|none|
|profileStartTime|object|true|none|none|
|profilingGroupName|object|true|none|none|
|recommendations|object|true|none|none|

<h2 id="tocS_ListFindingsReportsResponse">ListFindingsReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfindingsreportsresponse"></a>
<a id="schema_ListFindingsReportsResponse"></a>
<a id="tocSlistfindingsreportsresponse"></a>
<a id="tocslistfindingsreportsresponse"></a>

```json
{
  "findingsReportSummaries": {},
  "nextToken": {}
}
```

The structure representing the ListFindingsReportsResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|findingsReportSummaries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListProfileTimesResponse">ListProfileTimesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprofiletimesresponse"></a>
<a id="schema_ListProfileTimesResponse"></a>
<a id="tocSlistprofiletimesresponse"></a>
<a id="tocslistprofiletimesresponse"></a>

```json
{
  "nextToken": {},
  "profileTimes": {}
}
```

The structure representing the listProfileTimesResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|profileTimes|object|true|none|none|

<h2 id="tocS_ListProfilingGroupsResponse">ListProfilingGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprofilinggroupsresponse"></a>
<a id="schema_ListProfilingGroupsResponse"></a>
<a id="tocSlistprofilinggroupsresponse"></a>
<a id="tocslistprofilinggroupsresponse"></a>

```json
{
  "nextToken": {},
  "profilingGroupNames": {},
  "profilingGroups": {}
}
```

The structure representing the listProfilingGroupsResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|profilingGroupNames|object|true|none|none|
|profilingGroups|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_PostAgentProfileResponse">PostAgentProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemapostagentprofileresponse"></a>
<a id="schema_PostAgentProfileResponse"></a>
<a id="tocSpostagentprofileresponse"></a>
<a id="tocspostagentprofileresponse"></a>

```json
{}
```

The structure representing the postAgentProfileResponse.

<h2 id="tocS_PutPermissionResponse">PutPermissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputpermissionresponse"></a>
<a id="schema_PutPermissionResponse"></a>
<a id="tocSputpermissionresponse"></a>
<a id="tocsputpermissionresponse"></a>

```json
{
  "policy": {},
  "revisionId": {}
}
```

The structure representing the <code>putPermissionResponse</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|object|true|none|none|
|revisionId|object|true|none|none|

<h2 id="tocS_Principal">Principal</h2>
<!-- backwards compatibility -->
<a id="schemaprincipal"></a>
<a id="schema_Principal"></a>
<a id="tocSprincipal"></a>
<a id="tocsprincipal"></a>

```json
"string"
```

<h2 id="tocS_RemoveNotificationChannelResponse">RemoveNotificationChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremovenotificationchannelresponse"></a>
<a id="schema_RemoveNotificationChannelResponse"></a>
<a id="tocSremovenotificationchannelresponse"></a>
<a id="tocsremovenotificationchannelresponse"></a>

```json
{
  "notificationConfiguration": {
    "channels": {}
  }
}
```

The structure representing the RemoveNotificationChannelResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationConfiguration|object|false|none|none|

<h2 id="tocS_RemovePermissionResponse">RemovePermissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremovepermissionresponse"></a>
<a id="schema_RemovePermissionResponse"></a>
<a id="tocSremovepermissionresponse"></a>
<a id="tocsremovepermissionresponse"></a>

```json
{
  "policy": {},
  "revisionId": {}
}
```

The structure representing the <code>removePermissionResponse</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|object|true|none|none|
|revisionId|object|true|none|none|

<h2 id="tocS_SubmitFeedbackResponse">SubmitFeedbackResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubmitfeedbackresponse"></a>
<a id="schema_SubmitFeedbackResponse"></a>
<a id="tocSsubmitfeedbackresponse"></a>
<a id="tocssubmitfeedbackresponse"></a>

```json
{}
```

The structure representing the SubmitFeedbackResponse.

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
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

<h2 id="tocS_UpdateProfilingGroupResponse">UpdateProfilingGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprofilinggroupresponse"></a>
<a id="schema_UpdateProfilingGroupResponse"></a>
<a id="tocSupdateprofilinggroupresponse"></a>
<a id="tocsupdateprofilinggroupresponse"></a>

```json
{
  "profilingGroup": {
    "agentOrchestrationConfig": {
      "profilingEnabled": {}
    },
    "arn": {},
    "computePlatform": {},
    "createdAt": {},
    "name": {},
    "profilingStatus": {
      "latestAgentOrchestratedAt": {},
      "latestAgentProfileReportedAt": {},
      "latestAggregatedProfile": {
        "period": {},
        "start": {}
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {}
  }
}
```

The structure representing the updateProfilingGroupResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profilingGroup|object|true|none|none|

<h2 id="tocS_ActionGroup">ActionGroup</h2>
<!-- backwards compatibility -->
<a id="schemaactiongroup"></a>
<a id="schema_ActionGroup"></a>
<a id="tocSactiongroup"></a>
<a id="tocsactiongroup"></a>

```json
"agentPermissions"
```

<h2 id="tocS_Channels">Channels</h2>
<!-- backwards compatibility -->
<a id="schemachannels"></a>
<a id="schema_Channels"></a>
<a id="tocSchannels"></a>
<a id="tocschannels"></a>

```json
[
  {
    "eventPublishers": {},
    "id": {},
    "uri": {}
  }
]
```

<h2 id="tocS_ProfilingGroupName">ProfilingGroupName</h2>
<!-- backwards compatibility -->
<a id="schemaprofilinggroupname"></a>
<a id="schema_ProfilingGroupName"></a>
<a id="tocSprofilinggroupname"></a>
<a id="tocsprofilinggroupname"></a>

```json
"string"
```

<h2 id="tocS_AddNotificationChannelsRequest">AddNotificationChannelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddnotificationchannelsrequest"></a>
<a id="schema_AddNotificationChannelsRequest"></a>
<a id="tocSaddnotificationchannelsrequest"></a>
<a id="tocsaddnotificationchannelsrequest"></a>

```json
{
  "channels": {}
}
```

The structure representing the AddNotificationChannelsRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|object|true|none|none|

<h2 id="tocS_NotificationConfiguration">NotificationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanotificationconfiguration"></a>
<a id="schema_NotificationConfiguration"></a>
<a id="tocSnotificationconfiguration"></a>
<a id="tocsnotificationconfiguration"></a>

```json
{
  "channels": {}
}
```

The configuration for notifications stored for each profiling group. This includes up to to two channels and a list of event publishers associated with each channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|object|false|none|none|

<h2 id="tocS_AgentParameters">AgentParameters</h2>
<!-- backwards compatibility -->
<a id="schemaagentparameters"></a>
<a id="schema_AgentParameters"></a>
<a id="tocSagentparameters"></a>
<a id="tocsagentparameters"></a>

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

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_AgentConfiguration">AgentConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaagentconfiguration"></a>
<a id="schema_AgentConfiguration"></a>
<a id="tocSagentconfiguration"></a>
<a id="tocsagentconfiguration"></a>

```json
{
  "agentParameters": {
    "property1": "string",
    "property2": "string"
  },
  "periodInSeconds": {},
  "shouldProfile": {}
}
```

 The response of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> that specifies if an agent profiles or not and for how long to return profiling data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentParameters|object|false|none|none|
|periodInSeconds|object|true|none|none|
|shouldProfile|object|true|none|none|

<h2 id="tocS_AgentOrchestrationConfig">AgentOrchestrationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaagentorchestrationconfig"></a>
<a id="schema_AgentOrchestrationConfig"></a>
<a id="tocSagentorchestrationconfig"></a>
<a id="tocsagentorchestrationconfig"></a>

```json
{
  "profilingEnabled": {}
}
```

 Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profilingEnabled|object|true|none|none|

<h2 id="tocS_AgentParameterField">AgentParameterField</h2>
<!-- backwards compatibility -->
<a id="schemaagentparameterfield"></a>
<a id="schema_AgentParameterField"></a>
<a id="tocSagentparameterfield"></a>
<a id="tocsagentparameterfield"></a>

```json
"SamplingIntervalInMilliseconds"
```

<h2 id="tocS_AgentProfile">AgentProfile</h2>
<!-- backwards compatibility -->
<a id="schemaagentprofile"></a>
<a id="schema_AgentProfile"></a>
<a id="tocSagentprofile"></a>
<a id="tocsagentprofile"></a>

```json
"string"
```

<h2 id="tocS_AggregatedProfile">AggregatedProfile</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatedprofile"></a>
<a id="schema_AggregatedProfile"></a>
<a id="tocSaggregatedprofile"></a>
<a id="tocsaggregatedprofile"></a>

```json
"string"
```

<h2 id="tocS_AggregationPeriod">AggregationPeriod</h2>
<!-- backwards compatibility -->
<a id="schemaaggregationperiod"></a>
<a id="schema_AggregationPeriod"></a>
<a id="tocSaggregationperiod"></a>
<a id="tocsaggregationperiod"></a>

```json
"PT5M"
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

<h2 id="tocS_AggregatedProfileTime">AggregatedProfileTime</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatedprofiletime"></a>
<a id="schema_AggregatedProfileTime"></a>
<a id="tocSaggregatedprofiletime"></a>
<a id="tocsaggregatedprofiletime"></a>

```json
{
  "period": {},
  "start": {}
}
```

 Specifies the aggregation period and aggregation start time for an aggregated profile. An aggregated profile is used to collect posted agent profiles during an aggregation period. There are three possible aggregation periods (1 day, 1 hour, or 5 minutes).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|period|object|false|none|none|
|start|object|false|none|none|

<h2 id="tocS_Anomaly">Anomaly</h2>
<!-- backwards compatibility -->
<a id="schemaanomaly"></a>
<a id="schema_Anomaly"></a>
<a id="tocSanomaly"></a>
<a id="tocsanomaly"></a>

```json
{
  "instances": {},
  "metric": {
    "frameName": {},
    "threadStates": {},
    "type": {}
  },
  "reason": {}
}
```

 Details about an anomaly in a specific metric of application profile. The anomaly is detected using analysis of the metric data over a period of time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instances|object|true|none|none|
|metric|object|true|none|none|
|reason|object|true|none|none|

<h2 id="tocS_Anomalies">Anomalies</h2>
<!-- backwards compatibility -->
<a id="schemaanomalies"></a>
<a id="schema_Anomalies"></a>
<a id="tocSanomalies"></a>
<a id="tocsanomalies"></a>

```json
[
  {
    "instances": {},
    "metric": {
      "frameName": {},
      "threadStates": {},
      "type": {}
    },
    "reason": {}
  }
]
```

<h2 id="tocS_AnomalyInstances">AnomalyInstances</h2>
<!-- backwards compatibility -->
<a id="schemaanomalyinstances"></a>
<a id="schema_AnomalyInstances"></a>
<a id="tocSanomalyinstances"></a>
<a id="tocsanomalyinstances"></a>

```json
[
  {
    "endTime": {},
    "id": {},
    "startTime": {},
    "userFeedback": {
      "type": {}
    }
  }
]
```

<h2 id="tocS_Metric">Metric</h2>
<!-- backwards compatibility -->
<a id="schemametric"></a>
<a id="schema_Metric"></a>
<a id="tocSmetric"></a>
<a id="tocsmetric"></a>

```json
{
  "frameName": {},
  "threadStates": {},
  "type": {}
}
```

 Details about the metric that the analysis used when it detected the anomaly. The metric what is analyzed to create recommendations. It includes the name of the frame that was analyzed and the type and thread states used to derive the metric value for that frame.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frameName|object|true|none|none|
|threadStates|object|true|none|none|
|type|object|true|none|none|

<h2 id="tocS_UserFeedback">UserFeedback</h2>
<!-- backwards compatibility -->
<a id="schemauserfeedback"></a>
<a id="schema_UserFeedback"></a>
<a id="tocSuserfeedback"></a>
<a id="tocsuserfeedback"></a>

```json
{
  "type": {}
}
```

Feedback that can be submitted for each instance of an anomaly by the user. Feedback is be used for improvements in generating recommendations for the application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|

<h2 id="tocS_AnomalyInstance">AnomalyInstance</h2>
<!-- backwards compatibility -->
<a id="schemaanomalyinstance"></a>
<a id="schema_AnomalyInstance"></a>
<a id="tocSanomalyinstance"></a>
<a id="tocsanomalyinstance"></a>

```json
{
  "endTime": {},
  "id": {},
  "startTime": {},
  "userFeedback": {
    "type": {}
  }
}
```

The specific duration in which the metric is flagged as anomalous.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|object|false|none|none|
|id|object|true|none|none|
|startTime|object|true|none|none|
|userFeedback|object|false|none|none|

<h2 id="tocS_AnomalyInstanceId">AnomalyInstanceId</h2>
<!-- backwards compatibility -->
<a id="schemaanomalyinstanceid"></a>
<a id="schema_AnomalyInstanceId"></a>
<a id="tocSanomalyinstanceid"></a>
<a id="tocsanomalyinstanceid"></a>

```json
"string"
```

<h2 id="tocS_FrameMetrics">FrameMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaframemetrics"></a>
<a id="schema_FrameMetrics"></a>
<a id="tocSframemetrics"></a>
<a id="tocsframemetrics"></a>

```json
[
  {
    "frameName": {},
    "threadStates": {},
    "type": {}
  }
]
```

<h2 id="tocS_Period">Period</h2>
<!-- backwards compatibility -->
<a id="schemaperiod"></a>
<a id="schema_Period"></a>
<a id="tocSperiod"></a>
<a id="tocsperiod"></a>

```json
"string"
```

<h2 id="tocS_BatchGetFrameMetricDataRequest">BatchGetFrameMetricDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetframemetricdatarequest"></a>
<a id="schema_BatchGetFrameMetricDataRequest"></a>
<a id="tocSbatchgetframemetricdatarequest"></a>
<a id="tocsbatchgetframemetricdatarequest"></a>

```json
{
  "frameMetrics": {}
}
```

The structure representing the BatchGetFrameMetricDataRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frameMetrics|object|false|none|none|

<h2 id="tocS_ListOfTimestamps">ListOfTimestamps</h2>
<!-- backwards compatibility -->
<a id="schemalistoftimestamps"></a>
<a id="schema_ListOfTimestamps"></a>
<a id="tocSlistoftimestamps"></a>
<a id="tocslistoftimestamps"></a>

```json
[
  {
    "value": {}
  }
]
```

<h2 id="tocS_FrameMetricData">FrameMetricData</h2>
<!-- backwards compatibility -->
<a id="schemaframemetricdata"></a>
<a id="schema_FrameMetricData"></a>
<a id="tocSframemetricdata"></a>
<a id="tocsframemetricdata"></a>

```json
[
  {
    "frameMetric": {
      "frameName": {},
      "threadStates": {},
      "type": {}
    },
    "values": {}
  }
]
```

<h2 id="tocS_UnprocessedEndTimeMap">UnprocessedEndTimeMap</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedendtimemap"></a>
<a id="schema_UnprocessedEndTimeMap"></a>
<a id="tocSunprocessedendtimemap"></a>
<a id="tocsunprocessedendtimemap"></a>

```json
{
  "property1": [
    {
      "value": {}
    }
  ],
  "property2": [
    {
      "value": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ListOfTimestamps](#schemalistoftimestamps)|false|none|none|

<h2 id="tocS_EventPublishers">EventPublishers</h2>
<!-- backwards compatibility -->
<a id="schemaeventpublishers"></a>
<a id="schema_EventPublishers"></a>
<a id="tocSeventpublishers"></a>
<a id="tocseventpublishers"></a>

```json
[
  "AnomalyDetection"
]
```

<h2 id="tocS_ChannelId">ChannelId</h2>
<!-- backwards compatibility -->
<a id="schemachannelid"></a>
<a id="schema_ChannelId"></a>
<a id="tocSchannelid"></a>
<a id="tocschannelid"></a>

```json
"string"
```

<h2 id="tocS_ChannelUri">ChannelUri</h2>
<!-- backwards compatibility -->
<a id="schemachanneluri"></a>
<a id="schema_ChannelUri"></a>
<a id="tocSchanneluri"></a>
<a id="tocschanneluri"></a>

```json
"string"
```

Channel URI uniquely identifies a Notification Channel. TopicArn is the uri for an SNS channel, emailId is uri for an email channel etc. Currently we only support SNS channels and thus required to be an ARN

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

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
"Default"
```

<h2 id="tocS_FleetInstanceId">FleetInstanceId</h2>
<!-- backwards compatibility -->
<a id="schemafleetinstanceid"></a>
<a id="schema_FleetInstanceId"></a>
<a id="tocSfleetinstanceid"></a>
<a id="tocsfleetinstanceid"></a>

```json
"string"
```

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

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

<h2 id="tocS_ConfigureAgentRequest">ConfigureAgentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfigureagentrequest"></a>
<a id="schema_ConfigureAgentRequest"></a>
<a id="tocSconfigureagentrequest"></a>
<a id="tocsconfigureagentrequest"></a>

```json
{
  "fleetInstanceId": {},
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

The structure representing the configureAgentRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fleetInstanceId|object|false|none|none|
|metadata|object|false|none|none|

<h2 id="tocS_TagsMap">TagsMap</h2>
<!-- backwards compatibility -->
<a id="schematagsmap"></a>
<a id="schema_TagsMap"></a>
<a id="tocStagsmap"></a>
<a id="tocstagsmap"></a>

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

<h2 id="tocS_CreateProfilingGroupRequest">CreateProfilingGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprofilinggrouprequest"></a>
<a id="schema_CreateProfilingGroupRequest"></a>
<a id="tocScreateprofilinggrouprequest"></a>
<a id="tocscreateprofilinggrouprequest"></a>

```json
{
  "agentOrchestrationConfig": {
    "profilingEnabled": {}
  },
  "computePlatform": {},
  "profilingGroupName": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

The structure representing the createProfiliingGroupRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentOrchestrationConfig|object|false|none|none|
|computePlatform|object|false|none|none|
|profilingGroupName|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ProfilingGroupDescription">ProfilingGroupDescription</h2>
<!-- backwards compatibility -->
<a id="schemaprofilinggroupdescription"></a>
<a id="schema_ProfilingGroupDescription"></a>
<a id="tocSprofilinggroupdescription"></a>
<a id="tocsprofilinggroupdescription"></a>

```json
{
  "agentOrchestrationConfig": {
    "profilingEnabled": {}
  },
  "arn": {},
  "computePlatform": {},
  "createdAt": {},
  "name": {},
  "profilingStatus": {
    "latestAgentOrchestratedAt": {},
    "latestAgentProfileReportedAt": {},
    "latestAggregatedProfile": {
      "period": {},
      "start": {}
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "updatedAt": {}
}
```

 Contains information about a profiling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentOrchestrationConfig|object|false|none|none|
|arn|object|false|none|none|
|computePlatform|object|false|none|none|
|createdAt|object|false|none|none|
|name|object|false|none|none|
|profilingStatus|object|false|none|none|
|tags|object|false|none|none|
|updatedAt|object|false|none|none|

<h2 id="tocS_DeleteProfilingGroupRequest">DeleteProfilingGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprofilinggrouprequest"></a>
<a id="schema_DeleteProfilingGroupRequest"></a>
<a id="tocSdeleteprofilinggrouprequest"></a>
<a id="tocsdeleteprofilinggrouprequest"></a>

```json
{}
```

The structure representing the deleteProfilingGroupRequest.

<h2 id="tocS_DescribeProfilingGroupRequest">DescribeProfilingGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprofilinggrouprequest"></a>
<a id="schema_DescribeProfilingGroupRequest"></a>
<a id="tocSdescribeprofilinggrouprequest"></a>
<a id="tocsdescribeprofilinggrouprequest"></a>

```json
{}
```

The structure representing the describeProfilingGroupRequest.

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_EventPublisher">EventPublisher</h2>
<!-- backwards compatibility -->
<a id="schemaeventpublisher"></a>
<a id="schema_EventPublisher"></a>
<a id="tocSeventpublisher"></a>
<a id="tocseventpublisher"></a>

```json
"AnomalyDetection"
```

<h2 id="tocS_FeedbackType">FeedbackType</h2>
<!-- backwards compatibility -->
<a id="schemafeedbacktype"></a>
<a id="schema_FeedbackType"></a>
<a id="tocSfeedbacktype"></a>
<a id="tocsfeedbacktype"></a>

```json
"Positive"
```

<h2 id="tocS_FindingsReportId">FindingsReportId</h2>
<!-- backwards compatibility -->
<a id="schemafindingsreportid"></a>
<a id="schema_FindingsReportId"></a>
<a id="tocSfindingsreportid"></a>
<a id="tocsfindingsreportid"></a>

```json
"string"
```

<h2 id="tocS_FindingsReportSummary">FindingsReportSummary</h2>
<!-- backwards compatibility -->
<a id="schemafindingsreportsummary"></a>
<a id="schema_FindingsReportSummary"></a>
<a id="tocSfindingsreportsummary"></a>
<a id="tocsfindingsreportsummary"></a>

```json
{
  "id": {},
  "profileEndTime": {},
  "profileStartTime": {},
  "profilingGroupName": {},
  "totalNumberOfFindings": {}
}
```

 Information about potential recommendations that might be created from the analysis of profiling data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|profileEndTime|object|false|none|none|
|profileStartTime|object|false|none|none|
|profilingGroupName|object|false|none|none|
|totalNumberOfFindings|object|false|none|none|

<h2 id="tocS_FindingsReportSummaries">FindingsReportSummaries</h2>
<!-- backwards compatibility -->
<a id="schemafindingsreportsummaries"></a>
<a id="schema_FindingsReportSummaries"></a>
<a id="tocSfindingsreportsummaries"></a>
<a id="tocsfindingsreportsummaries"></a>

```json
[
  {
    "id": {},
    "profileEndTime": {},
    "profileStartTime": {},
    "profilingGroupName": {},
    "totalNumberOfFindings": {}
  }
]
```

<h2 id="tocS_ThreadStates">ThreadStates</h2>
<!-- backwards compatibility -->
<a id="schemathreadstates"></a>
<a id="schema_ThreadStates"></a>
<a id="tocSthreadstates"></a>
<a id="tocsthreadstates"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MetricType">MetricType</h2>
<!-- backwards compatibility -->
<a id="schemametrictype"></a>
<a id="schema_MetricType"></a>
<a id="tocSmetrictype"></a>
<a id="tocsmetrictype"></a>

```json
"AggregatedRelativeTotalTime"
```

<h2 id="tocS_FrameMetricDatum">FrameMetricDatum</h2>
<!-- backwards compatibility -->
<a id="schemaframemetricdatum"></a>
<a id="schema_FrameMetricDatum"></a>
<a id="tocSframemetricdatum"></a>
<a id="tocsframemetricdatum"></a>

```json
{
  "frameMetric": {
    "frameName": {},
    "threadStates": {},
    "type": {}
  },
  "values": {}
}
```

 Information about a frame metric and its values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frameMetric|[FrameMetric](#schemaframemetric)|true|none| The frame name, metric type, and thread states. These are used to derive the value of the metric for the frame.|
|values|object|true|none|none|

<h2 id="tocS_FrameMetricValues">FrameMetricValues</h2>
<!-- backwards compatibility -->
<a id="schemaframemetricvalues"></a>
<a id="schema_FrameMetricValues"></a>
<a id="tocSframemetricvalues"></a>
<a id="tocsframemetricvalues"></a>

```json
[
  0
]
```

<h2 id="tocS_FrameMetricValue">FrameMetricValue</h2>
<!-- backwards compatibility -->
<a id="schemaframemetricvalue"></a>
<a id="schema_FrameMetricValue"></a>
<a id="tocSframemetricvalue"></a>
<a id="tocsframemetricvalue"></a>

```json
0
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

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_GetFindingsReportAccountSummaryRequest">GetFindingsReportAccountSummaryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfindingsreportaccountsummaryrequest"></a>
<a id="schema_GetFindingsReportAccountSummaryRequest"></a>
<a id="tocSgetfindingsreportaccountsummaryrequest"></a>
<a id="tocsgetfindingsreportaccountsummaryrequest"></a>

```json
{}
```

The structure representing the GetFindingsReportAccountSummaryRequest.

<h2 id="tocS_GetNotificationConfigurationRequest">GetNotificationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetnotificationconfigurationrequest"></a>
<a id="schema_GetNotificationConfigurationRequest"></a>
<a id="tocSgetnotificationconfigurationrequest"></a>
<a id="tocsgetnotificationconfigurationrequest"></a>

```json
{}
```

The structure representing the GetNotificationConfigurationRequest.

<h2 id="tocS_GetPolicyRequest">GetPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpolicyrequest"></a>
<a id="schema_GetPolicyRequest"></a>
<a id="tocSgetpolicyrequest"></a>
<a id="tocsgetpolicyrequest"></a>

```json
{}
```

 The structure representing the <code>getPolicyRequest</code>.

<h2 id="tocS_RevisionId">RevisionId</h2>
<!-- backwards compatibility -->
<a id="schemarevisionid"></a>
<a id="schema_RevisionId"></a>
<a id="tocSrevisionid"></a>
<a id="tocsrevisionid"></a>

```json
"string"
```

<h2 id="tocS_MaxDepth">MaxDepth</h2>
<!-- backwards compatibility -->
<a id="schemamaxdepth"></a>
<a id="schema_MaxDepth"></a>
<a id="tocSmaxdepth"></a>
<a id="tocsmaxdepth"></a>

```json
1
```

<h2 id="tocS_GetProfileRequest">GetProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetprofilerequest"></a>
<a id="schema_GetProfileRequest"></a>
<a id="tocSgetprofilerequest"></a>
<a id="tocsgetprofilerequest"></a>

```json
{}
```

The structure representing the getProfileRequest.

<h2 id="tocS_Locale">Locale</h2>
<!-- backwards compatibility -->
<a id="schemalocale"></a>
<a id="schema_Locale"></a>
<a id="tocSlocale"></a>
<a id="tocslocale"></a>

```json
"string"
```

BCP47 language code. Supported locales: de-DE, en-GB, en-US, es-ES, fr-FR, it-IT, ja-JP, ko-KR, pt-BR, zh-CN, zh-TW

<h2 id="tocS_GetRecommendationsRequest">GetRecommendationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrecommendationsrequest"></a>
<a id="schema_GetRecommendationsRequest"></a>
<a id="tocSgetrecommendationsrequest"></a>
<a id="tocsgetrecommendationsrequest"></a>

```json
{}
```

The structure representing the GetRecommendationsRequest.

<h2 id="tocS_Recommendations">Recommendations</h2>
<!-- backwards compatibility -->
<a id="schemarecommendations"></a>
<a id="schema_Recommendations"></a>
<a id="tocSrecommendations"></a>
<a id="tocsrecommendations"></a>

```json
[
  {
    "allMatchesCount": {},
    "allMatchesSum": {},
    "endTime": {},
    "pattern": {
      "countersToAggregate": {},
      "description": {},
      "id": {},
      "name": {},
      "resolutionSteps": {},
      "targetFrames": {},
      "thresholdPercent": {}
    },
    "startTime": {},
    "topMatches": {}
  }
]
```

<h2 id="tocS_ListFindingsReportsRequest">ListFindingsReportsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfindingsreportsrequest"></a>
<a id="schema_ListFindingsReportsRequest"></a>
<a id="tocSlistfindingsreportsrequest"></a>
<a id="tocslistfindingsreportsrequest"></a>

```json
{}
```

The structure representing the ListFindingsReportsRequest.

<h2 id="tocS_TimestampStructure">TimestampStructure</h2>
<!-- backwards compatibility -->
<a id="schematimestampstructure"></a>
<a id="schema_TimestampStructure"></a>
<a id="tocStimestampstructure"></a>
<a id="tocstimestampstructure"></a>

```json
{
  "value": {}
}
```

 A data type that contains a <code>Timestamp</code> object. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|true|none|none|

<h2 id="tocS_OrderBy">OrderBy</h2>
<!-- backwards compatibility -->
<a id="schemaorderby"></a>
<a id="schema_OrderBy"></a>
<a id="tocSorderby"></a>
<a id="tocsorderby"></a>

```json
"TimestampDescending"
```

<h2 id="tocS_ListProfileTimesRequest">ListProfileTimesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprofiletimesrequest"></a>
<a id="schema_ListProfileTimesRequest"></a>
<a id="tocSlistprofiletimesrequest"></a>
<a id="tocslistprofiletimesrequest"></a>

```json
{}
```

The structure representing the listProfileTimesRequest.

<h2 id="tocS_ProfileTimes">ProfileTimes</h2>
<!-- backwards compatibility -->
<a id="schemaprofiletimes"></a>
<a id="schema_ProfileTimes"></a>
<a id="tocSprofiletimes"></a>
<a id="tocsprofiletimes"></a>

```json
[
  {
    "start": {}
  }
]
```

<h2 id="tocS_ListProfilingGroupsRequest">ListProfilingGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprofilinggroupsrequest"></a>
<a id="schema_ListProfilingGroupsRequest"></a>
<a id="tocSlistprofilinggroupsrequest"></a>
<a id="tocslistprofilinggroupsrequest"></a>

```json
{}
```

The structure representing the listProfilingGroupsRequest.

<h2 id="tocS_ProfilingGroupNames">ProfilingGroupNames</h2>
<!-- backwards compatibility -->
<a id="schemaprofilinggroupnames"></a>
<a id="schema_ProfilingGroupNames"></a>
<a id="tocSprofilinggroupnames"></a>
<a id="tocsprofilinggroupnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ProfilingGroupDescriptions">ProfilingGroupDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemaprofilinggroupdescriptions"></a>
<a id="schema_ProfilingGroupDescriptions"></a>
<a id="tocSprofilinggroupdescriptions"></a>
<a id="tocsprofilinggroupdescriptions"></a>

```json
[
  {
    "agentOrchestrationConfig": {
      "profilingEnabled": {}
    },
    "arn": {},
    "computePlatform": {},
    "createdAt": {},
    "name": {},
    "profilingStatus": {
      "latestAgentOrchestratedAt": {},
      "latestAgentProfileReportedAt": {},
      "latestAggregatedProfile": {
        "period": {},
        "start": {}
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {}
  }
]
```

<h2 id="tocS_ProfilingGroupArn">ProfilingGroupArn</h2>
<!-- backwards compatibility -->
<a id="schemaprofilinggrouparn"></a>
<a id="schema_ProfilingGroupArn"></a>
<a id="tocSprofilinggrouparn"></a>
<a id="tocsprofilinggrouparn"></a>

```json
"string"
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_Match">Match</h2>
<!-- backwards compatibility -->
<a id="schemamatch"></a>
<a id="schema_Match"></a>
<a id="tocSmatch"></a>
<a id="tocsmatch"></a>

```json
{
  "frameAddress": {},
  "targetFramesIndex": {},
  "thresholdBreachValue": {}
}
```

The part of a profile that contains a recommendation found during analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frameAddress|object|false|none|none|
|targetFramesIndex|object|false|none|none|
|thresholdBreachValue|object|false|none|none|

<h2 id="tocS_Matches">Matches</h2>
<!-- backwards compatibility -->
<a id="schemamatches"></a>
<a id="schema_Matches"></a>
<a id="tocSmatches"></a>
<a id="tocsmatches"></a>

```json
[
  {
    "frameAddress": {},
    "targetFramesIndex": {},
    "thresholdBreachValue": {}
  }
]
```

<h2 id="tocS_MetadataField">MetadataField</h2>
<!-- backwards compatibility -->
<a id="schemametadatafield"></a>
<a id="schema_MetadataField"></a>
<a id="tocSmetadatafield"></a>
<a id="tocsmetadatafield"></a>

```json
"ComputePlatform"
```

<h2 id="tocS_Strings">Strings</h2>
<!-- backwards compatibility -->
<a id="schemastrings"></a>
<a id="schema_Strings"></a>
<a id="tocSstrings"></a>
<a id="tocsstrings"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TargetFrames">TargetFrames</h2>
<!-- backwards compatibility -->
<a id="schematargetframes"></a>
<a id="schema_TargetFrames"></a>
<a id="tocStargetframes"></a>
<a id="tocstargetframes"></a>

```json
[
  [
    "string"
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

<h2 id="tocS_Pattern">Pattern</h2>
<!-- backwards compatibility -->
<a id="schemapattern"></a>
<a id="schema_Pattern"></a>
<a id="tocSpattern"></a>
<a id="tocspattern"></a>

```json
{
  "countersToAggregate": {},
  "description": {},
  "id": {},
  "name": {},
  "resolutionSteps": {},
  "targetFrames": {},
  "thresholdPercent": {}
}
```

 A set of rules used to make a recommendation during an analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countersToAggregate|object|false|none|none|
|description|object|false|none|none|
|id|object|false|none|none|
|name|object|false|none|none|
|resolutionSteps|object|false|none|none|
|targetFrames|object|false|none|none|
|thresholdPercent|object|false|none|none|

<h2 id="tocS_PostAgentProfileRequest">PostAgentProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemapostagentprofilerequest"></a>
<a id="schema_PostAgentProfileRequest"></a>
<a id="tocSpostagentprofilerequest"></a>
<a id="tocspostagentprofilerequest"></a>

```json
{
  "agentProfile": {}
}
```

The structure representing the postAgentProfileRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentProfile|object|true|none|none|

<h2 id="tocS_Principals">Principals</h2>
<!-- backwards compatibility -->
<a id="schemaprincipals"></a>
<a id="schema_Principals"></a>
<a id="tocSprincipals"></a>
<a id="tocsprincipals"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ProfileTime">ProfileTime</h2>
<!-- backwards compatibility -->
<a id="schemaprofiletime"></a>
<a id="schema_ProfileTime"></a>
<a id="tocSprofiletime"></a>
<a id="tocsprofiletime"></a>

```json
{
  "start": {}
}
```

 Contains the start time of a profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|object|false|none|none|

<h2 id="tocS_ProfilingStatus">ProfilingStatus</h2>
<!-- backwards compatibility -->
<a id="schemaprofilingstatus"></a>
<a id="schema_ProfilingStatus"></a>
<a id="tocSprofilingstatus"></a>
<a id="tocsprofilingstatus"></a>

```json
{
  "latestAgentOrchestratedAt": {},
  "latestAgentProfileReportedAt": {},
  "latestAggregatedProfile": {
    "period": {},
    "start": {}
  }
}
```

 Profiling status includes information about the last time a profile agent pinged back, the last time a profile was received, and the aggregation period and start time for the most recent aggregated profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latestAgentOrchestratedAt|object|false|none|none|
|latestAgentProfileReportedAt|object|false|none|none|
|latestAggregatedProfile|object|false|none|none|

<h2 id="tocS_PutPermissionRequest">PutPermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputpermissionrequest"></a>
<a id="schema_PutPermissionRequest"></a>
<a id="tocSputpermissionrequest"></a>
<a id="tocsputpermissionrequest"></a>

```json
{
  "principals": {},
  "revisionId": {}
}
```

The structure representing the <code>putPermissionRequest</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|principals|object|true|none|none|
|revisionId|object|false|none|none|

<h2 id="tocS_Recommendation">Recommendation</h2>
<!-- backwards compatibility -->
<a id="schemarecommendation"></a>
<a id="schema_Recommendation"></a>
<a id="tocSrecommendation"></a>
<a id="tocsrecommendation"></a>

```json
{
  "allMatchesCount": {},
  "allMatchesSum": {},
  "endTime": {},
  "pattern": {
    "countersToAggregate": {},
    "description": {},
    "id": {},
    "name": {},
    "resolutionSteps": {},
    "targetFrames": {},
    "thresholdPercent": {}
  },
  "startTime": {},
  "topMatches": {}
}
```

A potential improvement that was found from analyzing the profiling data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allMatchesCount|object|true|none|none|
|allMatchesSum|object|true|none|none|
|endTime|object|true|none|none|
|pattern|object|true|none|none|
|startTime|object|true|none|none|
|topMatches|object|true|none|none|

<h2 id="tocS_RemoveNotificationChannelRequest">RemoveNotificationChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovenotificationchannelrequest"></a>
<a id="schema_RemoveNotificationChannelRequest"></a>
<a id="tocSremovenotificationchannelrequest"></a>
<a id="tocsremovenotificationchannelrequest"></a>

```json
{}
```

The structure representing the RemoveNotificationChannelRequest.

<h2 id="tocS_RemovePermissionRequest">RemovePermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovepermissionrequest"></a>
<a id="schema_RemovePermissionRequest"></a>
<a id="tocSremovepermissionrequest"></a>
<a id="tocsremovepermissionrequest"></a>

```json
{}
```

 <pre><code> The structure representing the &lt;code&gt;removePermissionRequest&lt;/code&gt;.&lt;/p&gt; </code></pre>

<h2 id="tocS_SubmitFeedbackRequest">SubmitFeedbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubmitfeedbackrequest"></a>
<a id="schema_SubmitFeedbackRequest"></a>
<a id="tocSsubmitfeedbackrequest"></a>
<a id="tocssubmitfeedbackrequest"></a>

```json
{
  "comment": {},
  "type": {}
}
```

The structure representing the SubmitFeedbackRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|object|false|none|none|
|type|object|true|none|none|

<h2 id="tocS_TagKeys">TagKeys</h2>
<!-- backwards compatibility -->
<a id="schematagkeys"></a>
<a id="schema_TagKeys"></a>
<a id="tocStagkeys"></a>
<a id="tocstagkeys"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_TargetFrame">TargetFrame</h2>
<!-- backwards compatibility -->
<a id="schematargetframe"></a>
<a id="schema_TargetFrame"></a>
<a id="tocStargetframe"></a>
<a id="tocstargetframe"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateProfilingGroupRequest">UpdateProfilingGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprofilinggrouprequest"></a>
<a id="schema_UpdateProfilingGroupRequest"></a>
<a id="tocSupdateprofilinggrouprequest"></a>
<a id="tocsupdateprofilinggrouprequest"></a>

```json
{
  "agentOrchestrationConfig": {
    "profilingEnabled": {}
  }
}
```

The structure representing the updateProfilingGroupRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentOrchestrationConfig|object|true|none|none|
