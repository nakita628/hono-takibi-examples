<h1 id="amazon-devops-guru">Amazon DevOps Guru v2020-12-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p> Amazon DevOps Guru is a fully managed service that helps you identify anomalous behavior in business critical operational applications. You specify the Amazon Web Services resources that you want DevOps Guru to cover, then the Amazon CloudWatch metrics and Amazon Web Services CloudTrail events related to those resources are analyzed. When anomalous behavior is detected, DevOps Guru creates an <i>insight</i> that includes recommendations, related events, and related metrics that can help you improve your operational applications. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html">What is Amazon DevOps Guru</a>. </p> <p> You can specify 1 or 2 Amazon Simple Notification Service topics so you are notified every time a new insight is created. You can also enable DevOps Guru to generate an OpsItem in Amazon Web Services Systems Manager for each insight to help you manage and track your work addressing insights. </p> <p> To learn about the DevOps Guru workflow, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html#how-it-works">How DevOps Guru works</a>. To learn about DevOps Guru concepts, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/concepts.html">Concepts in DevOps Guru</a>. </p>

Base URLs:

* <a href="http://devops-guru.us-east-1.amazonaws.com">http://devops-guru.us-east-1.amazonaws.com</a> - The Amazon DevOps Guru multi-region endpoint

* <a href="https://devops-guru.us-east-1.amazonaws.com">https://devops-guru.us-east-1.amazonaws.com</a> - The Amazon DevOps Guru multi-region endpoint

* <a href="http://devops-guru.cn-north-1.amazonaws.com.cn">http://devops-guru.cn-north-1.amazonaws.com.cn</a> - The Amazon DevOps Guru endpoint for China (Beijing) and China (Ningxia)

* <a href="https://devops-guru.cn-north-1.amazonaws.com.cn">https://devops-guru.cn-north-1.amazonaws.com.cn</a> - The Amazon DevOps Guru endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/devops-guru/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-devops-guru-default">Default</h1>

## AddNotificationChannel

<a id="opIdAddNotificationChannel"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/channels \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Config": {
      "Sns": {
        "TopicArn": {}
      },
      "Filters": {
        "Severities": {},
        "MessageTypes": {}
      }
    }
  }'
```

`PUT /channels`

<p> Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>

> Body parameter

```json
{
  "Config": {
    "Sns": {
      "TopicArn": {}
    },
    "Filters": {
      "Severities": {},
      "MessageTypes": {}
    }
  }
}
```

<h3 id="addnotificationchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Config|body|object|true| Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).|
|» » Sns|body|object|false|none|
|» » » TopicArn|body|object|false|none|
|» » Filters|body|object|false|none|
|» » » Severities|body|object|false|none|
|» » » MessageTypes|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Id": {}
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

<h3 id="addnotificationchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddNotificationChannelResponse](#schemaaddnotificationchannelresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListNotificationChannels

<a id="opIdListNotificationChannels"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/channels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "stringstringstringstringstringstring"
  }'
```

`POST /channels`

 Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). 

> Body parameter

```json
{
  "NextToken": "stringstringstringstringstringstring"
}
```

<h3 id="listnotificationchannels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» NextToken|body|string|false|The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|

> Example responses

> 200 Response

```json
{
  "Channels": {},
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

<h3 id="listnotificationchannels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListNotificationChannelsResponse](#schemalistnotificationchannelsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInsight

<a id="opIdDescribeInsight"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/insights/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /insights/{Id}`

 Returns details about an insight that you specify using its ID. 

<h3 id="describeinsight-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true| The ID of the insight. |
|AccountId|query|string|false|The ID of the member account in the organization.|
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
  "ProactiveInsight": {
    "Id": {},
    "Name": {},
    "Severity": {},
    "Status": {},
    "InsightTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "PredictionTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "SsmOpsItemId": {},
    "Description": {}
  },
  "ReactiveInsight": {
    "Id": {},
    "Name": {},
    "Severity": {},
    "Status": {},
    "InsightTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "SsmOpsItemId": {},
    "Description": {}
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

<h3 id="describeinsight-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInsightResponse](#schemadescribeinsightresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteInsight

<a id="opIdDeleteInsight"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/insights/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /insights/{Id}`

Deletes the insight along with the associated anomalies, events and recommendations.

<h3 id="deleteinsight-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the insight.|
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

<h3 id="deleteinsight-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteInsightResponse](#schemadeleteinsightresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAccountHealth

<a id="opIdDescribeAccountHealth"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/accounts/health \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /accounts/health`

 Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account. 

<h3 id="describeaccounthealth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "OpenReactiveInsights": {},
  "OpenProactiveInsights": {},
  "MetricsAnalyzed": {},
  "ResourceHours": {},
  "AnalyzedResourceCount": {}
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

<h3 id="describeaccounthealth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountHealthResponse](#schemadescribeaccounthealthresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAccountOverview

<a id="opIdDescribeAccountOverview"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/accounts/overview \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FromTime": "1970-01-01T00:00:00Z",
    "ToTime": "1970-01-01T00:00:00Z"
  }'
```

`POST /accounts/overview`

 For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights. 

> Body parameter

```json
{
  "FromTime": "1970-01-01T00:00:00Z",
  "ToTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="describeaccountoverview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FromTime|body|string(date-time)|true| The start of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred after this day. |
|» ToTime|body|string(date-time)|false| The end of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred before this day. If this is not specified, then the current day is used. |

> Example responses

> 200 Response

```json
{
  "ReactiveInsights": {},
  "ProactiveInsights": {},
  "MeanTimeToRecoverInMilliseconds": {}
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

<h3 id="describeaccountoverview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountOverviewResponse](#schemadescribeaccountoverviewresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAnomaly

<a id="opIdDescribeAnomaly"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/anomalies/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /anomalies/{Id}`

 Returns details about an anomaly that you specify using its ID. 

<h3 id="describeanomaly-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true| The ID of the anomaly. |
|AccountId|query|string|false|The ID of the member account.|
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
  "ProactiveAnomaly": {
    "Id": {},
    "Severity": {},
    "Status": {},
    "UpdateTime": {},
    "AnomalyTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "AnomalyReportedTimeRange": {
      "OpenTime": {},
      "CloseTime": {}
    },
    "PredictionTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "SourceDetails": {
      "CloudWatchMetrics": {},
      "PerformanceInsightsMetrics": {}
    },
    "AssociatedInsightId": {},
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "Limit": {},
    "SourceMetadata": {
      "Source": {},
      "SourceResourceName": {},
      "SourceResourceType": {}
    },
    "AnomalyResources": {},
    "Description": {}
  },
  "ReactiveAnomaly": {
    "Id": {},
    "Severity": {},
    "Status": {},
    "AnomalyTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "AnomalyReportedTimeRange": {
      "OpenTime": {},
      "CloseTime": {}
    },
    "SourceDetails": {
      "CloudWatchMetrics": {},
      "PerformanceInsightsMetrics": {}
    },
    "AssociatedInsightId": {},
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "Type": {},
    "Name": {},
    "Description": {},
    "CausalAnomalyId": {},
    "AnomalyResources": {}
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

<h3 id="describeanomaly-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAnomalyResponse](#schemadescribeanomalyresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEventSourcesConfig

<a id="opIdUpdateEventSourcesConfig"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/event-sources \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "EventSources": {
      "AmazonCodeGuruProfiler": {
        "Status": {}
      }
    }
  }'
```

`PUT /event-sources`

Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.

> Body parameter

```json
{
  "EventSources": {
    "AmazonCodeGuruProfiler": {
      "Status": {}
    }
  }
}
```

<h3 id="updateeventsourcesconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» EventSources|body|object|false|Information about the integration of DevOps Guru as consumer with another AWS service, such as AWS CodeGuru Profiler via EventBridge.|
|» » AmazonCodeGuruProfiler|body|object|false|none|
|» » » Status|body|object|false|none|

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

<h3 id="updateeventsourcesconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEventSourcesConfigResponse](#schemaupdateeventsourcesconfigresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEventSourcesConfig

<a id="opIdDescribeEventSourcesConfig"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/event-sources \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /event-sources`

Returns the integration status of services that are integrated with DevOps Guru as Consumer via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.

<h3 id="describeeventsourcesconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "EventSources": {
    "AmazonCodeGuruProfiler": {
      "Status": {}
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

<h3 id="describeeventsourcesconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEventSourcesConfigResponse](#schemadescribeeventsourcesconfigresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutFeedback

<a id="opIdPutFeedback"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/feedback \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InsightFeedback": {
      "Id": {},
      "Feedback": {}
    }
  }'
```

`PUT /feedback`

 Collects customer feedback about the specified insight. 

> Body parameter

```json
{
  "InsightFeedback": {
    "Id": {},
    "Feedback": {}
  }
}
```

<h3 id="putfeedback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InsightFeedback|body|object|false| Information about insight feedback received from a customer. |
|» » Id|body|object|false|none|
|» » Feedback|body|object|false|none|

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

<h3 id="putfeedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutFeedbackResponse](#schemaputfeedbackresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFeedback

<a id="opIdDescribeFeedback"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/feedback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InsightId": "string"
  }'
```

`POST /feedback`

 Returns the most recent feedback submitted in the current Amazon Web Services account and Region. 

> Body parameter

```json
{
  "InsightId": "string"
}
```

<h3 id="describefeedback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InsightId|body|string|false| The ID of the insight for which the feedback was provided. |

> Example responses

> 200 Response

```json
{
  "InsightFeedback": {
    "Id": {},
    "Feedback": {}
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

<h3 id="describefeedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFeedbackResponse](#schemadescribefeedbackresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOrganizationHealth

<a id="opIdDescribeOrganizationHealth"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/organization/health \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AccountIds": [
      "stringstring"
    ],
    "OrganizationalUnitIds": [
      "string"
    ]
  }'
```

`POST /organization/health`

Returns active insights, predictive insights, and resource hours analyzed in last hour.

> Body parameter

```json
{
  "AccountIds": [
    "stringstring"
  ],
  "OrganizationalUnitIds": [
    "string"
  ]
}
```

<h3 id="describeorganizationhealth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AccountIds|body|[[AwsAccountId](#schemaawsaccountid)]|false|The ID of the Amazon Web Services account.|
|» OrganizationalUnitIds|body|[[OrganizationalUnitId](#schemaorganizationalunitid)]|false|The ID of the organizational unit.|

> Example responses

> 200 Response

```json
{
  "OpenReactiveInsights": {},
  "OpenProactiveInsights": {},
  "MetricsAnalyzed": {},
  "ResourceHours": {}
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

<h3 id="describeorganizationhealth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOrganizationHealthResponse](#schemadescribeorganizationhealthresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOrganizationOverview

<a id="opIdDescribeOrganizationOverview"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/organization/overview \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FromTime": "1970-01-01T00:00:00Z",
    "ToTime": "1970-01-01T00:00:00Z",
    "AccountIds": [
      "stringstring"
    ],
    "OrganizationalUnitIds": [
      "string"
    ]
  }'
```

`POST /organization/overview`

Returns an overview of your organization's history based on the specified time range. The overview includes the total reactive and proactive insights.

> Body parameter

```json
{
  "FromTime": "1970-01-01T00:00:00Z",
  "ToTime": "1970-01-01T00:00:00Z",
  "AccountIds": [
    "stringstring"
  ],
  "OrganizationalUnitIds": [
    "string"
  ]
}
```

<h3 id="describeorganizationoverview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FromTime|body|string(date-time)|true| The start of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred after this day. |
|» ToTime|body|string(date-time)|false| The end of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred before this day. If this is not specified, then the current day is used. |
|» AccountIds|body|[[AwsAccountId](#schemaawsaccountid)]|false|The ID of the Amazon Web Services account.|
|» OrganizationalUnitIds|body|[[OrganizationalUnitId](#schemaorganizationalunitid)]|false|The ID of the organizational unit.|

> Example responses

> 200 Response

```json
{
  "ReactiveInsights": {},
  "ProactiveInsights": {}
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

<h3 id="describeorganizationoverview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOrganizationOverviewResponse](#schemadescribeorganizationoverviewresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOrganizationResourceCollectionHealth

<a id="opIdDescribeOrganizationResourceCollectionHealth"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/organization/health/resource-collection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "OrganizationResourceCollectionType": "AWS_CLOUD_FORMATION",
    "AccountIds": [
      "stringstring"
    ],
    "OrganizationalUnitIds": [
      "string"
    ],
    "NextToken": "stringstringstringstringstringstring",
    "MaxResults": 1
  }'
```

`POST /organization/health/resource-collection`

Provides an overview of your system's health. If additional member accounts are part of your organization, you can filter those accounts using the <code>AccountIds</code> field.

> Body parameter

```json
{
  "OrganizationResourceCollectionType": "AWS_CLOUD_FORMATION",
  "AccountIds": [
    "stringstring"
  ],
  "OrganizationalUnitIds": [
    "string"
  ],
  "NextToken": "stringstringstringstringstringstring",
  "MaxResults": 1
}
```

<h3 id="describeorganizationresourcecollectionhealth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» OrganizationResourceCollectionType|body|string|true| An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
|» AccountIds|body|[[AwsAccountId](#schemaawsaccountid)]|false|The ID of the Amazon Web Services account.|
|» OrganizationalUnitIds|body|[[OrganizationalUnitId](#schemaorganizationalunitid)]|false|The ID of the organizational unit.|
|» NextToken|body|string|false|The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|
|» MaxResults|body|integer|false|The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» OrganizationResourceCollectionType|AWS_CLOUD_FORMATION|
|» OrganizationResourceCollectionType|AWS_SERVICE|
|» OrganizationResourceCollectionType|AWS_ACCOUNT|
|» OrganizationResourceCollectionType|AWS_TAGS|

> Example responses

> 200 Response

```json
{
  "CloudFormation": {},
  "Service": {},
  "Account": {},
  "NextToken": {},
  "Tags": {}
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

<h3 id="describeorganizationresourcecollectionhealth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOrganizationResourceCollectionHealthResponse](#schemadescribeorganizationresourcecollectionhealthresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeResourceCollectionHealth

<a id="opIdDescribeResourceCollectionHealth"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/accounts/health/resource-collection/AWS_CLOUD_FORMATION \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /accounts/health/resource-collection/{ResourceCollectionType}`

 Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in resource collections in your account. You specify the type of Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. 

<h3 id="describeresourcecollectionhealth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceCollectionType|path|string|true| An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
|NextToken|query|string|false|The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|
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
|ResourceCollectionType|AWS_CLOUD_FORMATION|
|ResourceCollectionType|AWS_SERVICE|
|ResourceCollectionType|AWS_TAGS|

> Example responses

> 200 Response

```json
{
  "CloudFormation": {},
  "Service": {},
  "NextToken": {},
  "Tags": {}
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

<h3 id="describeresourcecollectionhealth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeResourceCollectionHealthResponse](#schemadescriberesourcecollectionhealthresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeServiceIntegration

<a id="opIdDescribeServiceIntegration"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/service-integrations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /service-integrations`

 Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. 

<h3 id="describeserviceintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "ServiceIntegration": {
    "OpsCenter": {
      "OptInStatus": {}
    },
    "LogsAnomalyDetection": {
      "OptInStatus": {}
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

<h3 id="describeserviceintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeServiceIntegrationResponse](#schemadescribeserviceintegrationresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateServiceIntegration

<a id="opIdUpdateServiceIntegration"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/service-integrations \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ServiceIntegration": {
      "OpsCenter": {
        "OptInStatus": {}
      },
      "LogsAnomalyDetection": {
        "OptInStatus": {}
      }
    }
  }'
```

`PUT /service-integrations`

 Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. 

> Body parameter

```json
{
  "ServiceIntegration": {
    "OpsCenter": {
      "OptInStatus": {}
    },
    "LogsAnomalyDetection": {
      "OptInStatus": {}
    }
  }
}
```

<h3 id="updateserviceintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ServiceIntegration|body|object|true| Information about updating the integration status of an Amazon Web Services service, such as Amazon Web Services Systems Manager, with DevOps Guru. |
|» » OpsCenter|body|[OpsCenterIntegrationConfig](#schemaopscenterintegrationconfig)|false| Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight. You can use this to update the configuration.|
|» » LogsAnomalyDetection|body|object|false|none|
|» » » OptInStatus|body|object|false|none|

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

<h3 id="updateserviceintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServiceIntegrationResponse](#schemaupdateserviceintegrationresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCostEstimation

<a id="opIdGetCostEstimation"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/cost-estimation \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /cost-estimation`

Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.

<h3 id="getcostestimation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|
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
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
  "Status": {},
  "Costs": {},
  "TimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "TotalCost": {},
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

<h3 id="getcostestimation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCostEstimationResponse](#schemagetcostestimationresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartCostEstimation

<a id="opIdStartCostEstimation"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/cost-estimation \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "ClientToken": "string"
  }'
```

`PUT /cost-estimation`

Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.

> Body parameter

```json
{
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
  "ClientToken": "string"
}
```

<h3 id="startcostestimation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ResourceCollection|body|object|true|Information about a filter used to specify which Amazon Web Services resources are analyzed to create a monthly DevOps Guru cost estimate. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>. |
|» » CloudFormation|body|object|false|none|
|» » » StackNames|body|object|false|none|
|» » Tags|body|object|false|none|
|» ClientToken|body|string|false|The idempotency token used to identify each cost estimate request.|

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

<h3 id="startcostestimation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartCostEstimationResponse](#schemastartcostestimationresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourceCollection

<a id="opIdGetResourceCollection"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/resource-collections/AWS_CLOUD_FORMATION \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /resource-collections/{ResourceCollectionType}`

 Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. 

<h3 id="getresourcecollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceCollectionType|path|string|true| The type of Amazon Web Services resource collections to return. The one valid value is <code>CLOUD_FORMATION</code> for Amazon Web Services CloudFormation stacks. |
|NextToken|query|string|false|The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|
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
|ResourceCollectionType|AWS_CLOUD_FORMATION|
|ResourceCollectionType|AWS_SERVICE|
|ResourceCollectionType|AWS_TAGS|

> Example responses

> 200 Response

```json
{
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
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

<h3 id="getresourcecollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourceCollectionResponse](#schemagetresourcecollectionresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAnomaliesForInsight

<a id="opIdListAnomaliesForInsight"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/anomalies/insight/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StartTimeRange": {
      "FromTime": {},
      "ToTime": {}
    },
    "MaxResults": 1,
    "NextToken": "stringstringstringstringstringstring",
    "AccountId": "stringstring",
    "Filters": {
      "ServiceCollection": {
        "ServiceNames": {}
      }
    }
  }'
```

`POST /anomalies/insight/{InsightId}`

 Returns a list of the anomalies that belong to an insight that you specify using its ID. 

> Body parameter

```json
{
  "StartTimeRange": {
    "FromTime": {},
    "ToTime": {}
  },
  "MaxResults": 1,
  "NextToken": "stringstringstringstringstringstring",
  "AccountId": "stringstring",
  "Filters": {
    "ServiceCollection": {
      "ServiceNames": {}
    }
  }
}
```

<h3 id="listanomaliesforinsight-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InsightId|path|string|true| The ID of the insight. The returned anomalies belong to this insight. |
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» StartTimeRange|body|object|false| A time range used to specify when the behavior of an insight or anomaly started. |
|» » FromTime|body|object|false|none|
|» » ToTime|body|object|false|none|
|» MaxResults|body|integer|false|The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.|
|» NextToken|body|string|false|The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|
|» AccountId|body|string|false|The ID of the Amazon Web Services account. |
|» Filters|body|object|false| Specifies one or more service names that are used to list anomalies. |
|» » ServiceCollection|body|[ServiceCollection](#schemaservicecollection)|false|A collection of the names of Amazon Web Services services.|

> Example responses

> 200 Response

```json
{
  "ProactiveAnomalies": {},
  "ReactiveAnomalies": {},
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

<h3 id="listanomaliesforinsight-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAnomaliesForInsightResponse](#schemalistanomaliesforinsightresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAnomalousLogGroups

<a id="opIdListAnomalousLogGroups"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/list-log-anomalies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InsightId": "string",
    "MaxResults": 1,
    "NextToken": "stringstringstringstringstringstring"
  }'
```

`POST /list-log-anomalies`

 Returns the list of log groups that contain log anomalies. 

> Body parameter

```json
{
  "InsightId": "string",
  "MaxResults": 1,
  "NextToken": "stringstringstringstringstringstring"
}
```

<h3 id="listanomalousloggroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InsightId|body|string|true| The ID of the insight containing the log groups. |
|» MaxResults|body|integer|false|The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.|
|» NextToken|body|string|false|The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|

> Example responses

> 200 Response

```json
{
  "InsightId": {},
  "AnomalousLogGroups": {},
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

<h3 id="listanomalousloggroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAnomalousLogGroupsResponse](#schemalistanomalousloggroupsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEvents

<a id="opIdListEvents"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Filters": {
      "InsightId": {},
      "EventTimeRange": {
        "FromTime": {},
        "ToTime": {}
      },
      "EventClass": {},
      "EventSource": {},
      "DataSource": {},
      "ResourceCollection": {
        "CloudFormation": {
          "StackNames": {}
        },
        "Tags": {}
      }
    },
    "MaxResults": 1,
    "NextToken": "stringstringstringstringstringstring",
    "AccountId": "stringstring"
  }'
```

`POST /events`

 Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned. 

> Body parameter

```json
{
  "Filters": {
    "InsightId": {},
    "EventTimeRange": {
      "FromTime": {},
      "ToTime": {}
    },
    "EventClass": {},
    "EventSource": {},
    "DataSource": {},
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    }
  },
  "MaxResults": 1,
  "NextToken": "stringstringstringstringstringstring",
  "AccountId": "stringstring"
}
```

<h3 id="listevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Filters|body|object|true| Filters you can use to specify which events are returned when <code>ListEvents</code> is called. |
|» » InsightId|body|object|false|none|
|» » EventTimeRange|body|object|false|none|
|» » » FromTime|body|object|true|none|
|» » » ToTime|body|object|true|none|
|» » EventClass|body|object|false|none|
|» » EventSource|body|object|false|none|
|» » DataSource|body|object|false|none|
|» » ResourceCollection|body|[ResourceCollection](#schemaresourcecollection)|false| A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
|» MaxResults|body|integer|false|The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.|
|» NextToken|body|string|false|The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|
|» AccountId|body|string|false|The ID of the Amazon Web Services account. |

> Example responses

> 200 Response

```json
{
  "Events": {},
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

<h3 id="listevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEventsResponse](#schemalisteventsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInsights

<a id="opIdListInsights"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/insights \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StatusFilter": {
      "Ongoing": {
        "Type": {}
      },
      "Closed": {
        "Type": {},
        "EndTimeRange": {
          "FromTime": {},
          "ToTime": {}
        }
      },
      "Any": {
        "Type": {},
        "StartTimeRange": {
          "FromTime": {},
          "ToTime": {}
        }
      }
    },
    "MaxResults": 1,
    "NextToken": "stringstringstringstringstringstring"
  }'
```

`POST /insights`

 Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time and status (<code>ONGOING</code>, <code>CLOSED</code>, or <code>ANY</code>). 

> Body parameter

```json
{
  "StatusFilter": {
    "Ongoing": {
      "Type": {}
    },
    "Closed": {
      "Type": {},
      "EndTimeRange": {
        "FromTime": {},
        "ToTime": {}
      }
    },
    "Any": {
      "Type": {},
      "StartTimeRange": {
        "FromTime": {},
        "ToTime": {}
      }
    }
  },
  "MaxResults": 1,
  "NextToken": "stringstringstringstringstringstring"
}
```

<h3 id="listinsights-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» StatusFilter|body|object|true| A filter used by <code>ListInsights</code> to specify which insights to return. |
|» » Ongoing|body|object|false|none|
|» » » Type|body|object|true|none|
|» » Closed|body|object|false|none|
|» » » Type|body|object|true|none|
|» » » EndTimeRange|body|object|true|none|
|» » » » FromTime|body|object|false|none|
|» » » » ToTime|body|object|false|none|
|» » Any|body|object|false|none|
|» » » Type|body|object|true|none|
|» » » StartTimeRange|body|object|true|none|
|» » » » FromTime|body|object|false|none|
|» » » » ToTime|body|object|false|none|
|» MaxResults|body|integer|false|The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.|
|» NextToken|body|string|false|The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|

> Example responses

> 200 Response

```json
{
  "ProactiveInsights": {},
  "ReactiveInsights": {},
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

<h3 id="listinsights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInsightsResponse](#schemalistinsightsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMonitoredResources

<a id="opIdListMonitoredResources"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/monitoredResources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Filters": {
      "ResourcePermission": {},
      "ResourceTypeFilters": {}
    },
    "MaxResults": 1,
    "NextToken": "stringstringstringstringstringstring"
  }'
```

`POST /monitoredResources`

 Returns the list of all log groups that are being monitored and tagged by DevOps Guru. 

> Body parameter

```json
{
  "Filters": {
    "ResourcePermission": {},
    "ResourceTypeFilters": {}
  },
  "MaxResults": 1,
  "NextToken": "stringstringstringstringstringstring"
}
```

<h3 id="listmonitoredresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Filters|body|object|false| Filters to determine which monitored resources you want to retrieve. You can filter by resource type or resource permission status. |
|» » ResourcePermission|body|object|false|none|
|» » ResourceTypeFilters|body|object|false|none|
|» MaxResults|body|integer|false|The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.|
|» NextToken|body|string|false|The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|

> Example responses

> 200 Response

```json
{
  "MonitoredResourceIdentifiers": {},
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

<h3 id="listmonitoredresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMonitoredResourcesResponse](#schemalistmonitoredresourcesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOrganizationInsights

<a id="opIdListOrganizationInsights"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/organization/insights \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StatusFilter": {
      "Ongoing": {
        "Type": {}
      },
      "Closed": {
        "Type": {},
        "EndTimeRange": {
          "FromTime": {},
          "ToTime": {}
        }
      },
      "Any": {
        "Type": {},
        "StartTimeRange": {
          "FromTime": {},
          "ToTime": {}
        }
      }
    },
    "MaxResults": 1,
    "AccountIds": [
      "stringstring"
    ],
    "OrganizationalUnitIds": [
      "string"
    ],
    "NextToken": "stringstringstringstringstringstring"
  }'
```

`POST /organization/insights`

Returns a list of insights associated with the account or OU Id.

> Body parameter

```json
{
  "StatusFilter": {
    "Ongoing": {
      "Type": {}
    },
    "Closed": {
      "Type": {},
      "EndTimeRange": {
        "FromTime": {},
        "ToTime": {}
      }
    },
    "Any": {
      "Type": {},
      "StartTimeRange": {
        "FromTime": {},
        "ToTime": {}
      }
    }
  },
  "MaxResults": 1,
  "AccountIds": [
    "stringstring"
  ],
  "OrganizationalUnitIds": [
    "string"
  ],
  "NextToken": "stringstringstringstringstringstring"
}
```

<h3 id="listorganizationinsights-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» StatusFilter|body|object|true| A filter used by <code>ListInsights</code> to specify which insights to return. |
|» » Ongoing|body|object|false|none|
|» » » Type|body|object|true|none|
|» » Closed|body|object|false|none|
|» » » Type|body|object|true|none|
|» » » EndTimeRange|body|object|true|none|
|» » » » FromTime|body|object|false|none|
|» » » » ToTime|body|object|false|none|
|» » Any|body|object|false|none|
|» » » Type|body|object|true|none|
|» » » StartTimeRange|body|object|true|none|
|» » » » FromTime|body|object|false|none|
|» » » » ToTime|body|object|false|none|
|» MaxResults|body|integer|false|The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.|
|» AccountIds|body|[[AwsAccountId](#schemaawsaccountid)]|false|The ID of the Amazon Web Services account. |
|» OrganizationalUnitIds|body|[[OrganizationalUnitId](#schemaorganizationalunitid)]|false|The ID of the organizational unit.|
|» NextToken|body|string|false|The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|

> Example responses

> 200 Response

```json
{
  "ProactiveInsights": {},
  "ReactiveInsights": {},
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

<h3 id="listorganizationinsights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOrganizationInsightsResponse](#schemalistorganizationinsightsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRecommendations

<a id="opIdListRecommendations"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/recommendations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InsightId": "string",
    "NextToken": "stringstringstringstringstringstring",
    "Locale": "DE_DE",
    "AccountId": "stringstring"
  }'
```

`POST /recommendations`

 Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events. 

> Body parameter

```json
{
  "InsightId": "string",
  "NextToken": "stringstringstringstringstringstring",
  "Locale": "DE_DE",
  "AccountId": "stringstring"
}
```

<h3 id="listrecommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InsightId|body|string|true| The ID of the requested insight. |
|» NextToken|body|string|false|The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|
|» Locale|body|string|false|A locale that specifies the language to use for recommendations.|
|» AccountId|body|string|false|The ID of the Amazon Web Services account. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Locale|DE_DE|
|» Locale|EN_US|
|» Locale|EN_GB|
|» Locale|ES_ES|
|» Locale|FR_FR|
|» Locale|IT_IT|
|» Locale|JA_JP|
|» Locale|KO_KR|
|» Locale|PT_BR|
|» Locale|ZH_CN|
|» Locale|ZH_TW|

> Example responses

> 200 Response

```json
{
  "Recommendations": {},
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

<h3 id="listrecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRecommendationsResponse](#schemalistrecommendationsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveNotificationChannel

<a id="opIdRemoveNotificationChannel"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/channels/stringstringstringstringstringstring \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /channels/{Id}`

 Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. 

<h3 id="removenotificationchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true| The ID of the notification channel to be removed. |
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

<h3 id="removenotificationchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveNotificationChannelResponse](#schemaremovenotificationchannelresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchInsights

<a id="opIdSearchInsights"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/insights/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StartTimeRange": {
      "FromTime": {},
      "ToTime": {}
    },
    "Filters": {
      "Severities": {},
      "Statuses": {},
      "ResourceCollection": {
        "CloudFormation": {
          "StackNames": {}
        },
        "Tags": {}
      },
      "ServiceCollection": {
        "ServiceNames": {}
      }
    },
    "MaxResults": 1,
    "NextToken": "stringstringstringstringstringstring",
    "Type": "REACTIVE"
  }'
```

`POST /insights/search`

<p> Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code> or <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>

> Body parameter

```json
{
  "StartTimeRange": {
    "FromTime": {},
    "ToTime": {}
  },
  "Filters": {
    "Severities": {},
    "Statuses": {},
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "ServiceCollection": {
      "ServiceNames": {}
    }
  },
  "MaxResults": 1,
  "NextToken": "stringstringstringstringstringstring",
  "Type": "REACTIVE"
}
```

<h3 id="searchinsights-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» StartTimeRange|body|object|true| A time range used to specify when the behavior of an insight or anomaly started. |
|» » FromTime|body|object|false|none|
|» » ToTime|body|object|false|none|
|» Filters|body|object|false|Specifies values used to filter responses when searching for insights. You can use a <code>ResourceCollection</code>, <code>ServiceCollection</code>, array of severities, and an array of status values. Each filter type contains one or more values to search for. If you specify multiple filter types, the filter types are joined with an <code>AND</code>, and the request returns only results that match all of the specified filters.|
|» » Severities|body|object|false|none|
|» » Statuses|body|object|false|none|
|» » ResourceCollection|body|[ResourceCollection](#schemaresourcecollection)|false| A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
|» » ServiceCollection|body|object|false|none|
|» » » ServiceNames|body|object|false|none|
|» MaxResults|body|integer|false|The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.|
|» NextToken|body|string|false|The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|
|» Type|body|string|true| The type of insights you are searching for (<code>REACTIVE</code> or <code>PROACTIVE</code>). |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|REACTIVE|
|» Type|PROACTIVE|

> Example responses

> 200 Response

```json
{
  "ProactiveInsights": {},
  "ReactiveInsights": {},
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

<h3 id="searchinsights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchInsightsResponse](#schemasearchinsightsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchOrganizationInsights

<a id="opIdSearchOrganizationInsights"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/organization/insights/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AccountIds": [
      "stringstring"
    ],
    "StartTimeRange": {
      "FromTime": {},
      "ToTime": {}
    },
    "Filters": {
      "Severities": {},
      "Statuses": {},
      "ResourceCollection": {
        "CloudFormation": {
          "StackNames": {}
        },
        "Tags": {}
      },
      "ServiceCollection": {
        "ServiceNames": {}
      }
    },
    "MaxResults": 1,
    "NextToken": "stringstringstringstringstringstring",
    "Type": "REACTIVE"
  }'
```

`POST /organization/insights/search`

<p> Returns a list of insights in your organization. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>

> Body parameter

```json
{
  "AccountIds": [
    "stringstring"
  ],
  "StartTimeRange": {
    "FromTime": {},
    "ToTime": {}
  },
  "Filters": {
    "Severities": {},
    "Statuses": {},
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "ServiceCollection": {
      "ServiceNames": {}
    }
  },
  "MaxResults": 1,
  "NextToken": "stringstringstringstringstringstring",
  "Type": "REACTIVE"
}
```

<h3 id="searchorganizationinsights-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AccountIds|body|[[AwsAccountId](#schemaawsaccountid)]|true|The ID of the Amazon Web Services account. |
|» StartTimeRange|body|object|true| A time range used to specify when the behavior of an insight or anomaly started. |
|» » FromTime|body|object|false|none|
|» » ToTime|body|object|false|none|
|» Filters|body|object|false| Filters you can use to specify which events are returned when <code>ListEvents</code> is called. |
|» » Severities|body|object|false|none|
|» » Statuses|body|object|false|none|
|» » ResourceCollection|body|[ResourceCollection](#schemaresourcecollection)|false| A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
|» » ServiceCollection|body|[ServiceCollection](#schemaservicecollection)|false|A collection of the names of Amazon Web Services services.|
|» MaxResults|body|integer|false|The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.|
|» NextToken|body|string|false|The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|
|» Type|body|string|true| The type of insights you are searching for (<code>REACTIVE</code> or <code>PROACTIVE</code>). |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|REACTIVE|
|» Type|PROACTIVE|

> Example responses

> 200 Response

```json
{
  "ProactiveInsights": {},
  "ReactiveInsights": {},
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

<h3 id="searchorganizationinsights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchOrganizationInsightsResponse](#schemasearchorganizationinsightsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResourceCollection

<a id="opIdUpdateResourceCollection"></a>

> Code samples

```bash
curl https://devops-guru.us-east-1.amazonaws.com/resource-collections \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Action": "ADD",
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    }
  }'
```

`PUT /resource-collections`

 Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru. 

> Body parameter

```json
{
  "Action": "ADD",
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  }
}
```

<h3 id="updateresourcecollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Action|body|string|true| Specifies if the resource collection in the request is added or deleted to the resource collection. |
|» ResourceCollection|body|object|true| Contains information used to update a collection of Amazon Web Services resources. |
|» » CloudFormation|body|object|false|none|
|» » » StackNames|body|object|false|none|
|» » Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Action|ADD|
|» Action|REMOVE|

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

<h3 id="updateresourcecollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateResourceCollectionResponse](#schemaupdateresourcecollectionresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddNotificationChannelResponse">AddNotificationChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddnotificationchannelresponse"></a>
<a id="schema_AddNotificationChannelResponse"></a>
<a id="tocSaddnotificationchannelresponse"></a>
<a id="tocsaddnotificationchannelresponse"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|

<h2 id="tocS_SnsChannelConfig">SnsChannelConfig</h2>
<!-- backwards compatibility -->
<a id="schemasnschannelconfig"></a>
<a id="schema_SnsChannelConfig"></a>
<a id="tocSsnschannelconfig"></a>
<a id="tocssnschannelconfig"></a>

```json
{
  "TopicArn": {}
}
```

<p> Contains the Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|false|none|none|

<h2 id="tocS_NotificationFilterConfig">NotificationFilterConfig</h2>
<!-- backwards compatibility -->
<a id="schemanotificationfilterconfig"></a>
<a id="schema_NotificationFilterConfig"></a>
<a id="tocSnotificationfilterconfig"></a>
<a id="tocsnotificationfilterconfig"></a>

```json
{
  "Severities": {},
  "MessageTypes": {}
}
```

 The filter configurations for the Amazon SNS notification topic you use with DevOps Guru. You can choose to specify which events or message types to receive notifications for. You can also choose to specify which severity levels to receive notifications for.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Severities|object|false|none|none|
|MessageTypes|object|false|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

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

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

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

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

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

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_DeleteInsightResponse">DeleteInsightResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinsightresponse"></a>
<a id="schema_DeleteInsightResponse"></a>
<a id="tocSdeleteinsightresponse"></a>
<a id="tocsdeleteinsightresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeAccountHealthResponse">DescribeAccountHealthResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccounthealthresponse"></a>
<a id="schema_DescribeAccountHealthResponse"></a>
<a id="tocSdescribeaccounthealthresponse"></a>
<a id="tocsdescribeaccounthealthresponse"></a>

```json
{
  "OpenReactiveInsights": {},
  "OpenProactiveInsights": {},
  "MetricsAnalyzed": {},
  "ResourceHours": {},
  "AnalyzedResourceCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpenReactiveInsights|object|true|none|none|
|OpenProactiveInsights|object|true|none|none|
|MetricsAnalyzed|object|true|none|none|
|ResourceHours|object|true|none|none|
|AnalyzedResourceCount|object|false|none|none|

<h2 id="tocS_DescribeAccountOverviewResponse">DescribeAccountOverviewResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountoverviewresponse"></a>
<a id="schema_DescribeAccountOverviewResponse"></a>
<a id="tocSdescribeaccountoverviewresponse"></a>
<a id="tocsdescribeaccountoverviewresponse"></a>

```json
{
  "ReactiveInsights": {},
  "ProactiveInsights": {},
  "MeanTimeToRecoverInMilliseconds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReactiveInsights|object|true|none|none|
|ProactiveInsights|object|true|none|none|
|MeanTimeToRecoverInMilliseconds|object|true|none|none|

<h2 id="tocS_DescribeAnomalyResponse">DescribeAnomalyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeanomalyresponse"></a>
<a id="schema_DescribeAnomalyResponse"></a>
<a id="tocSdescribeanomalyresponse"></a>
<a id="tocsdescribeanomalyresponse"></a>

```json
{
  "ProactiveAnomaly": {
    "Id": {},
    "Severity": {},
    "Status": {},
    "UpdateTime": {},
    "AnomalyTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "AnomalyReportedTimeRange": {
      "OpenTime": {},
      "CloseTime": {}
    },
    "PredictionTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "SourceDetails": {
      "CloudWatchMetrics": {},
      "PerformanceInsightsMetrics": {}
    },
    "AssociatedInsightId": {},
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "Limit": {},
    "SourceMetadata": {
      "Source": {},
      "SourceResourceName": {},
      "SourceResourceType": {}
    },
    "AnomalyResources": {},
    "Description": {}
  },
  "ReactiveAnomaly": {
    "Id": {},
    "Severity": {},
    "Status": {},
    "AnomalyTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "AnomalyReportedTimeRange": {
      "OpenTime": {},
      "CloseTime": {}
    },
    "SourceDetails": {
      "CloudWatchMetrics": {},
      "PerformanceInsightsMetrics": {}
    },
    "AssociatedInsightId": {},
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "Type": {},
    "Name": {},
    "Description": {},
    "CausalAnomalyId": {},
    "AnomalyResources": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProactiveAnomaly|object|false|none|none|
|ReactiveAnomaly|object|false|none|none|

<h2 id="tocS_DescribeEventSourcesConfigResponse">DescribeEventSourcesConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsourcesconfigresponse"></a>
<a id="schema_DescribeEventSourcesConfigResponse"></a>
<a id="tocSdescribeeventsourcesconfigresponse"></a>
<a id="tocsdescribeeventsourcesconfigresponse"></a>

```json
{
  "EventSources": {
    "AmazonCodeGuruProfiler": {
      "Status": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventSources|object|false|none|none|

<h2 id="tocS_DescribeFeedbackResponse">DescribeFeedbackResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefeedbackresponse"></a>
<a id="schema_DescribeFeedbackResponse"></a>
<a id="tocSdescribefeedbackresponse"></a>
<a id="tocsdescribefeedbackresponse"></a>

```json
{
  "InsightFeedback": {
    "Id": {},
    "Feedback": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsightFeedback|[InsightFeedback](#schemainsightfeedback)|false|none| Information about insight feedback received from a customer. |

<h2 id="tocS_DescribeInsightResponse">DescribeInsightResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinsightresponse"></a>
<a id="schema_DescribeInsightResponse"></a>
<a id="tocSdescribeinsightresponse"></a>
<a id="tocsdescribeinsightresponse"></a>

```json
{
  "ProactiveInsight": {
    "Id": {},
    "Name": {},
    "Severity": {},
    "Status": {},
    "InsightTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "PredictionTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "SsmOpsItemId": {},
    "Description": {}
  },
  "ReactiveInsight": {
    "Id": {},
    "Name": {},
    "Severity": {},
    "Status": {},
    "InsightTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "SsmOpsItemId": {},
    "Description": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProactiveInsight|object|false|none|none|
|ReactiveInsight|object|false|none|none|

<h2 id="tocS_DescribeOrganizationHealthResponse">DescribeOrganizationHealthResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationhealthresponse"></a>
<a id="schema_DescribeOrganizationHealthResponse"></a>
<a id="tocSdescribeorganizationhealthresponse"></a>
<a id="tocsdescribeorganizationhealthresponse"></a>

```json
{
  "OpenReactiveInsights": {},
  "OpenProactiveInsights": {},
  "MetricsAnalyzed": {},
  "ResourceHours": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpenReactiveInsights|object|true|none|none|
|OpenProactiveInsights|object|true|none|none|
|MetricsAnalyzed|object|true|none|none|
|ResourceHours|object|true|none|none|

<h2 id="tocS_AwsAccountId">AwsAccountId</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountid"></a>
<a id="schema_AwsAccountId"></a>
<a id="tocSawsaccountid"></a>
<a id="tocsawsaccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_OrganizationalUnitId">OrganizationalUnitId</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunitid"></a>
<a id="schema_OrganizationalUnitId"></a>
<a id="tocSorganizationalunitid"></a>
<a id="tocsorganizationalunitid"></a>

```json
"string"
```

<h2 id="tocS_DescribeOrganizationOverviewResponse">DescribeOrganizationOverviewResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationoverviewresponse"></a>
<a id="schema_DescribeOrganizationOverviewResponse"></a>
<a id="tocSdescribeorganizationoverviewresponse"></a>
<a id="tocsdescribeorganizationoverviewresponse"></a>

```json
{
  "ReactiveInsights": {},
  "ProactiveInsights": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReactiveInsights|object|true|none|none|
|ProactiveInsights|object|true|none|none|

<h2 id="tocS_DescribeOrganizationResourceCollectionHealthResponse">DescribeOrganizationResourceCollectionHealthResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationresourcecollectionhealthresponse"></a>
<a id="schema_DescribeOrganizationResourceCollectionHealthResponse"></a>
<a id="tocSdescribeorganizationresourcecollectionhealthresponse"></a>
<a id="tocsdescribeorganizationresourcecollectionhealthresponse"></a>

```json
{
  "CloudFormation": {},
  "Service": {},
  "Account": {},
  "NextToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudFormation|object|false|none|none|
|Service|object|false|none|none|
|Account|object|false|none|none|
|NextToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeResourceCollectionHealthResponse">DescribeResourceCollectionHealthResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberesourcecollectionhealthresponse"></a>
<a id="schema_DescribeResourceCollectionHealthResponse"></a>
<a id="tocSdescriberesourcecollectionhealthresponse"></a>
<a id="tocsdescriberesourcecollectionhealthresponse"></a>

```json
{
  "CloudFormation": {},
  "Service": {},
  "NextToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudFormation|object|false|none|none|
|Service|object|false|none|none|
|NextToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeServiceIntegrationResponse">DescribeServiceIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeserviceintegrationresponse"></a>
<a id="schema_DescribeServiceIntegrationResponse"></a>
<a id="tocSdescribeserviceintegrationresponse"></a>
<a id="tocsdescribeserviceintegrationresponse"></a>

```json
{
  "ServiceIntegration": {
    "OpsCenter": {
      "OptInStatus": {}
    },
    "LogsAnomalyDetection": {
      "OptInStatus": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceIntegration|[ServiceIntegrationConfig](#schemaserviceintegrationconfig)|false|none| Information about the integration of DevOps Guru with another Amazon Web Services service, such as Amazon Web Services Systems Manager. |

<h2 id="tocS_GetCostEstimationResponse">GetCostEstimationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcostestimationresponse"></a>
<a id="schema_GetCostEstimationResponse"></a>
<a id="tocSgetcostestimationresponse"></a>
<a id="tocsgetcostestimationresponse"></a>

```json
{
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
  "Status": {},
  "Costs": {},
  "TimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "TotalCost": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceCollection|object|false|none|none|
|Status|object|false|none|none|
|Costs|object|false|none|none|
|TimeRange|object|false|none|none|
|TotalCost|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetResourceCollectionResponse">GetResourceCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcecollectionresponse"></a>
<a id="schema_GetResourceCollectionResponse"></a>
<a id="tocSgetresourcecollectionresponse"></a>
<a id="tocsgetresourcecollectionresponse"></a>

```json
{
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceCollection|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAnomaliesForInsightResponse">ListAnomaliesForInsightResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistanomaliesforinsightresponse"></a>
<a id="schema_ListAnomaliesForInsightResponse"></a>
<a id="tocSlistanomaliesforinsightresponse"></a>
<a id="tocslistanomaliesforinsightresponse"></a>

```json
{
  "ProactiveAnomalies": {},
  "ReactiveAnomalies": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProactiveAnomalies|object|false|none|none|
|ReactiveAnomalies|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ServiceCollection">ServiceCollection</h2>
<!-- backwards compatibility -->
<a id="schemaservicecollection"></a>
<a id="schema_ServiceCollection"></a>
<a id="tocSservicecollection"></a>
<a id="tocsservicecollection"></a>

```json
{
  "ServiceNames": {}
}
```

A collection of the names of Amazon Web Services services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceNames|object|false|none|none|

<h2 id="tocS_ListAnomalousLogGroupsResponse">ListAnomalousLogGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistanomalousloggroupsresponse"></a>
<a id="schema_ListAnomalousLogGroupsResponse"></a>
<a id="tocSlistanomalousloggroupsresponse"></a>
<a id="tocslistanomalousloggroupsresponse"></a>

```json
{
  "InsightId": {},
  "AnomalousLogGroups": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsightId|object|true|none|none|
|AnomalousLogGroups|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEventsResponse">ListEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteventsresponse"></a>
<a id="schema_ListEventsResponse"></a>
<a id="tocSlisteventsresponse"></a>
<a id="tocslisteventsresponse"></a>

```json
{
  "Events": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Events|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InsightId">InsightId</h2>
<!-- backwards compatibility -->
<a id="schemainsightid"></a>
<a id="schema_InsightId"></a>
<a id="tocSinsightid"></a>
<a id="tocsinsightid"></a>

```json
"string"
```

<h2 id="tocS_EventTimeRange">EventTimeRange</h2>
<!-- backwards compatibility -->
<a id="schemaeventtimerange"></a>
<a id="schema_EventTimeRange"></a>
<a id="tocSeventtimerange"></a>
<a id="tocseventtimerange"></a>

```json
{
  "FromTime": {},
  "ToTime": {}
}
```

 The time range during which an Amazon Web Services event occurred. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FromTime|object|true|none|none|
|ToTime|object|true|none|none|

<h2 id="tocS_EventClass">EventClass</h2>
<!-- backwards compatibility -->
<a id="schemaeventclass"></a>
<a id="schema_EventClass"></a>
<a id="tocSeventclass"></a>
<a id="tocseventclass"></a>

```json
"INFRASTRUCTURE"
```

<h2 id="tocS_EventSource">EventSource</h2>
<!-- backwards compatibility -->
<a id="schemaeventsource"></a>
<a id="schema_EventSource"></a>
<a id="tocSeventsource"></a>
<a id="tocseventsource"></a>

```json
"stringstri"
```

<h2 id="tocS_EventDataSource">EventDataSource</h2>
<!-- backwards compatibility -->
<a id="schemaeventdatasource"></a>
<a id="schema_EventDataSource"></a>
<a id="tocSeventdatasource"></a>
<a id="tocseventdatasource"></a>

```json
"AWS_CLOUD_TRAIL"
```

<h2 id="tocS_ResourceCollection">ResourceCollection</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecollection"></a>
<a id="schema_ResourceCollection"></a>
<a id="tocSresourcecollection"></a>
<a id="tocsresourcecollection"></a>

```json
{
  "CloudFormation": {
    "StackNames": {}
  },
  "Tags": {}
}
```

 A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudFormation|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ListInsightsResponse">ListInsightsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinsightsresponse"></a>
<a id="schema_ListInsightsResponse"></a>
<a id="tocSlistinsightsresponse"></a>
<a id="tocslistinsightsresponse"></a>

```json
{
  "ProactiveInsights": {},
  "ReactiveInsights": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProactiveInsights|object|false|none|none|
|ReactiveInsights|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListInsightsOngoingStatusFilter">ListInsightsOngoingStatusFilter</h2>
<!-- backwards compatibility -->
<a id="schemalistinsightsongoingstatusfilter"></a>
<a id="schema_ListInsightsOngoingStatusFilter"></a>
<a id="tocSlistinsightsongoingstatusfilter"></a>
<a id="tocslistinsightsongoingstatusfilter"></a>

```json
{
  "Type": {}
}
```

 Used to filter for insights that have the status <code>ONGOING</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|

<h2 id="tocS_ListInsightsClosedStatusFilter">ListInsightsClosedStatusFilter</h2>
<!-- backwards compatibility -->
<a id="schemalistinsightsclosedstatusfilter"></a>
<a id="schema_ListInsightsClosedStatusFilter"></a>
<a id="tocSlistinsightsclosedstatusfilter"></a>
<a id="tocslistinsightsclosedstatusfilter"></a>

```json
{
  "Type": {},
  "EndTimeRange": {
    "FromTime": {},
    "ToTime": {}
  }
}
```

 Used to filter for insights that have the status <code>CLOSED</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|EndTimeRange|object|true|none|none|

<h2 id="tocS_ListInsightsAnyStatusFilter">ListInsightsAnyStatusFilter</h2>
<!-- backwards compatibility -->
<a id="schemalistinsightsanystatusfilter"></a>
<a id="schema_ListInsightsAnyStatusFilter"></a>
<a id="tocSlistinsightsanystatusfilter"></a>
<a id="tocslistinsightsanystatusfilter"></a>

```json
{
  "Type": {},
  "StartTimeRange": {
    "FromTime": {},
    "ToTime": {}
  }
}
```

 Used to filter for insights that have any status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|StartTimeRange|object|true|none|none|

<h2 id="tocS_ListMonitoredResourcesResponse">ListMonitoredResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmonitoredresourcesresponse"></a>
<a id="schema_ListMonitoredResourcesResponse"></a>
<a id="tocSlistmonitoredresourcesresponse"></a>
<a id="tocslistmonitoredresourcesresponse"></a>

```json
{
  "MonitoredResourceIdentifiers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitoredResourceIdentifiers|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ResourcePermission">ResourcePermission</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepermission"></a>
<a id="schema_ResourcePermission"></a>
<a id="tocSresourcepermission"></a>
<a id="tocsresourcepermission"></a>

```json
"FULL_PERMISSION"
```

<h2 id="tocS_ResourceTypeFilters">ResourceTypeFilters</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetypefilters"></a>
<a id="schema_ResourceTypeFilters"></a>
<a id="tocSresourcetypefilters"></a>
<a id="tocsresourcetypefilters"></a>

```json
[
  "LOG_GROUPS"
]
```

<h2 id="tocS_ListNotificationChannelsResponse">ListNotificationChannelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnotificationchannelsresponse"></a>
<a id="schema_ListNotificationChannelsResponse"></a>
<a id="tocSlistnotificationchannelsresponse"></a>
<a id="tocslistnotificationchannelsresponse"></a>

```json
{
  "Channels": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Channels|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOrganizationInsightsResponse">ListOrganizationInsightsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistorganizationinsightsresponse"></a>
<a id="schema_ListOrganizationInsightsResponse"></a>
<a id="tocSlistorganizationinsightsresponse"></a>
<a id="tocslistorganizationinsightsresponse"></a>

```json
{
  "ProactiveInsights": {},
  "ReactiveInsights": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProactiveInsights|object|false|none|none|
|ReactiveInsights|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRecommendationsResponse">ListRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrecommendationsresponse"></a>
<a id="schema_ListRecommendationsResponse"></a>
<a id="tocSlistrecommendationsresponse"></a>
<a id="tocslistrecommendationsresponse"></a>

```json
{
  "Recommendations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Recommendations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PutFeedbackResponse">PutFeedbackResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputfeedbackresponse"></a>
<a id="schema_PutFeedbackResponse"></a>
<a id="tocSputfeedbackresponse"></a>
<a id="tocsputfeedbackresponse"></a>

```json
{}
```

<h2 id="tocS_InsightFeedbackOption">InsightFeedbackOption</h2>
<!-- backwards compatibility -->
<a id="schemainsightfeedbackoption"></a>
<a id="schema_InsightFeedbackOption"></a>
<a id="tocSinsightfeedbackoption"></a>
<a id="tocsinsightfeedbackoption"></a>

```json
"VALID_COLLECTION"
```

<h2 id="tocS_RemoveNotificationChannelResponse">RemoveNotificationChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremovenotificationchannelresponse"></a>
<a id="schema_RemoveNotificationChannelResponse"></a>
<a id="tocSremovenotificationchannelresponse"></a>
<a id="tocsremovenotificationchannelresponse"></a>

```json
{}
```

<h2 id="tocS_SearchInsightsResponse">SearchInsightsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchinsightsresponse"></a>
<a id="schema_SearchInsightsResponse"></a>
<a id="tocSsearchinsightsresponse"></a>
<a id="tocssearchinsightsresponse"></a>

```json
{
  "ProactiveInsights": {},
  "ReactiveInsights": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProactiveInsights|object|false|none|none|
|ReactiveInsights|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InsightSeverities">InsightSeverities</h2>
<!-- backwards compatibility -->
<a id="schemainsightseverities"></a>
<a id="schema_InsightSeverities"></a>
<a id="tocSinsightseverities"></a>
<a id="tocsinsightseverities"></a>

```json
[
  "LOW"
]
```

<h2 id="tocS_InsightStatuses">InsightStatuses</h2>
<!-- backwards compatibility -->
<a id="schemainsightstatuses"></a>
<a id="schema_InsightStatuses"></a>
<a id="tocSinsightstatuses"></a>
<a id="tocsinsightstatuses"></a>

```json
[
  "ONGOING"
]
```

<h2 id="tocS_SearchOrganizationInsightsResponse">SearchOrganizationInsightsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchorganizationinsightsresponse"></a>
<a id="schema_SearchOrganizationInsightsResponse"></a>
<a id="tocSsearchorganizationinsightsresponse"></a>
<a id="tocssearchorganizationinsightsresponse"></a>

```json
{
  "ProactiveInsights": {},
  "ReactiveInsights": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProactiveInsights|object|false|none|none|
|ReactiveInsights|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_StartCostEstimationResponse">StartCostEstimationResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartcostestimationresponse"></a>
<a id="schema_StartCostEstimationResponse"></a>
<a id="tocSstartcostestimationresponse"></a>
<a id="tocsstartcostestimationresponse"></a>

```json
{}
```

<h2 id="tocS_CloudFormationCostEstimationResourceCollectionFilter">CloudFormationCostEstimationResourceCollectionFilter</h2>
<!-- backwards compatibility -->
<a id="schemacloudformationcostestimationresourcecollectionfilter"></a>
<a id="schema_CloudFormationCostEstimationResourceCollectionFilter"></a>
<a id="tocScloudformationcostestimationresourcecollectionfilter"></a>
<a id="tocscloudformationcostestimationresourcecollectionfilter"></a>

```json
{
  "StackNames": {}
}
```

Information about an Amazon Web Services CloudFormation stack used to create a monthly cost estimate for DevOps Guru to analyze Amazon Web Services resources. The maximum number of stacks you can specify for a cost estimate is one. The estimate created is for the cost to analyze the Amazon Web Services resources defined by the stack. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>Amazon Web Services CloudFormation User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackNames|object|false|none|none|

<h2 id="tocS_TagCostEstimationResourceCollectionFilters">TagCostEstimationResourceCollectionFilters</h2>
<!-- backwards compatibility -->
<a id="schematagcostestimationresourcecollectionfilters"></a>
<a id="schema_TagCostEstimationResourceCollectionFilters"></a>
<a id="tocStagcostestimationresourcecollectionfilters"></a>
<a id="tocstagcostestimationresourcecollectionfilters"></a>

```json
[
  {
    "AppBoundaryKey": {},
    "TagValues": {}
  }
]
```

<h2 id="tocS_UpdateEventSourcesConfigResponse">UpdateEventSourcesConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateeventsourcesconfigresponse"></a>
<a id="schema_UpdateEventSourcesConfigResponse"></a>
<a id="tocSupdateeventsourcesconfigresponse"></a>
<a id="tocsupdateeventsourcesconfigresponse"></a>

```json
{}
```

<h2 id="tocS_AmazonCodeGuruProfilerIntegration">AmazonCodeGuruProfilerIntegration</h2>
<!-- backwards compatibility -->
<a id="schemaamazoncodeguruprofilerintegration"></a>
<a id="schema_AmazonCodeGuruProfilerIntegration"></a>
<a id="tocSamazoncodeguruprofilerintegration"></a>
<a id="tocsamazoncodeguruprofilerintegration"></a>

```json
{
  "Status": {}
}
```

Information about your account's integration with Amazon CodeGuru Profiler. This returns whether DevOps Guru is configured to consume recommendations generated from Amazon CodeGuru Profiler.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|

<h2 id="tocS_UpdateResourceCollectionResponse">UpdateResourceCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourcecollectionresponse"></a>
<a id="schema_UpdateResourceCollectionResponse"></a>
<a id="tocSupdateresourcecollectionresponse"></a>
<a id="tocsupdateresourcecollectionresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateCloudFormationCollectionFilter">UpdateCloudFormationCollectionFilter</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecloudformationcollectionfilter"></a>
<a id="schema_UpdateCloudFormationCollectionFilter"></a>
<a id="tocSupdatecloudformationcollectionfilter"></a>
<a id="tocsupdatecloudformationcollectionfilter"></a>

```json
{
  "StackNames": {}
}
```

 Contains the names of Amazon Web Services CloudFormation stacks used to update a collection of stacks. You can specify up to 500 Amazon Web Services CloudFormation stacks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackNames|object|false|none|none|

<h2 id="tocS_UpdateTagCollectionFilters">UpdateTagCollectionFilters</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetagcollectionfilters"></a>
<a id="schema_UpdateTagCollectionFilters"></a>
<a id="tocSupdatetagcollectionfilters"></a>
<a id="tocsupdatetagcollectionfilters"></a>

```json
[
  {
    "AppBoundaryKey": {},
    "TagValues": {}
  }
]
```

<h2 id="tocS_UpdateServiceIntegrationResponse">UpdateServiceIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserviceintegrationresponse"></a>
<a id="schema_UpdateServiceIntegrationResponse"></a>
<a id="tocSupdateserviceintegrationresponse"></a>
<a id="tocsupdateserviceintegrationresponse"></a>

```json
{}
```

<h2 id="tocS_OpsCenterIntegrationConfig">OpsCenterIntegrationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaopscenterintegrationconfig"></a>
<a id="schema_OpsCenterIntegrationConfig"></a>
<a id="tocSopscenterintegrationconfig"></a>
<a id="tocsopscenterintegrationconfig"></a>

```json
{
  "OptInStatus": {}
}
```

 Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight. You can use this to update the configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OptInStatus|object|false|none|none|

<h2 id="tocS_LogsAnomalyDetectionIntegrationConfig">LogsAnomalyDetectionIntegrationConfig</h2>
<!-- backwards compatibility -->
<a id="schemalogsanomalydetectionintegrationconfig"></a>
<a id="schema_LogsAnomalyDetectionIntegrationConfig"></a>
<a id="tocSlogsanomalydetectionintegrationconfig"></a>
<a id="tocslogsanomalydetectionintegrationconfig"></a>

```json
{
  "OptInStatus": {}
}
```

 Information about the integration of DevOps Guru with CloudWatch log groups for log anomaly detection. You can use this to update the configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OptInStatus|object|false|none|none|

<h2 id="tocS_AccountInsightHealth">AccountInsightHealth</h2>
<!-- backwards compatibility -->
<a id="schemaaccountinsighthealth"></a>
<a id="schema_AccountInsightHealth"></a>
<a id="tocSaccountinsighthealth"></a>
<a id="tocsaccountinsighthealth"></a>

```json
{
  "OpenProactiveInsights": {},
  "OpenReactiveInsights": {}
}
```

 Information about the number of open reactive and proactive insights that can be used to gauge the health of your system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpenProactiveInsights|object|false|none|none|
|OpenReactiveInsights|object|false|none|none|

<h2 id="tocS_AccountHealth">AccountHealth</h2>
<!-- backwards compatibility -->
<a id="schemaaccounthealth"></a>
<a id="schema_AccountHealth"></a>
<a id="tocSaccounthealth"></a>
<a id="tocsaccounthealth"></a>

```json
{
  "AccountId": {},
  "Insight": {
    "OpenProactiveInsights": {},
    "OpenReactiveInsights": {}
  }
}
```

 Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|Insight|object|false|none|none|

<h2 id="tocS_AccountHealths">AccountHealths</h2>
<!-- backwards compatibility -->
<a id="schemaaccounthealths"></a>
<a id="schema_AccountHealths"></a>
<a id="tocSaccounthealths"></a>
<a id="tocsaccounthealths"></a>

```json
[
  {
    "AccountId": {},
    "Insight": {
      "OpenProactiveInsights": {},
      "OpenReactiveInsights": {}
    }
  }
]
```

<h2 id="tocS_AccountIdList">AccountIdList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountidlist"></a>
<a id="schema_AccountIdList"></a>
<a id="tocSaccountidlist"></a>
<a id="tocsaccountidlist"></a>

```json
[
  "stringstring"
]
```

<h2 id="tocS_NumOpenProactiveInsights">NumOpenProactiveInsights</h2>
<!-- backwards compatibility -->
<a id="schemanumopenproactiveinsights"></a>
<a id="schema_NumOpenProactiveInsights"></a>
<a id="tocSnumopenproactiveinsights"></a>
<a id="tocsnumopenproactiveinsights"></a>

```json
0
```

<h2 id="tocS_NumOpenReactiveInsights">NumOpenReactiveInsights</h2>
<!-- backwards compatibility -->
<a id="schemanumopenreactiveinsights"></a>
<a id="schema_NumOpenReactiveInsights"></a>
<a id="tocSnumopenreactiveinsights"></a>
<a id="tocsnumopenreactiveinsights"></a>

```json
0
```

<h2 id="tocS_NotificationChannelConfig">NotificationChannelConfig</h2>
<!-- backwards compatibility -->
<a id="schemanotificationchannelconfig"></a>
<a id="schema_NotificationChannelConfig"></a>
<a id="tocSnotificationchannelconfig"></a>
<a id="tocsnotificationchannelconfig"></a>

```json
{
  "Sns": {
    "TopicArn": {}
  },
  "Filters": {
    "Severities": {},
    "MessageTypes": {}
  }
}
```

 Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sns|object|true|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_AddNotificationChannelRequest">AddNotificationChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddnotificationchannelrequest"></a>
<a id="schema_AddNotificationChannelRequest"></a>
<a id="tocSaddnotificationchannelrequest"></a>
<a id="tocsaddnotificationchannelrequest"></a>

```json
{
  "Config": {
    "Sns": {
      "TopicArn": {}
    },
    "Filters": {
      "Severities": {},
      "MessageTypes": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Config|object|true|none|none|

<h2 id="tocS_NotificationChannelId">NotificationChannelId</h2>
<!-- backwards compatibility -->
<a id="schemanotificationchannelid"></a>
<a id="schema_NotificationChannelId"></a>
<a id="tocSnotificationchannelid"></a>
<a id="tocsnotificationchannelid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_EventSourceOptInStatus">EventSourceOptInStatus</h2>
<!-- backwards compatibility -->
<a id="schemaeventsourceoptinstatus"></a>
<a id="schema_EventSourceOptInStatus"></a>
<a id="tocSeventsourceoptinstatus"></a>
<a id="tocseventsourceoptinstatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_AnalyzedResourceCount">AnalyzedResourceCount</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzedresourcecount"></a>
<a id="schema_AnalyzedResourceCount"></a>
<a id="tocSanalyzedresourcecount"></a>
<a id="tocsanalyzedresourcecount"></a>

```json
0
```

<h2 id="tocS_LogGroupName">LogGroupName</h2>
<!-- backwards compatibility -->
<a id="schemaloggroupname"></a>
<a id="schema_LogGroupName"></a>
<a id="tocSloggroupname"></a>
<a id="tocsloggroupname"></a>

```json
"string"
```

<h2 id="tocS_NumberOfLogLinesScanned">NumberOfLogLinesScanned</h2>
<!-- backwards compatibility -->
<a id="schemanumberofloglinesscanned"></a>
<a id="schema_NumberOfLogLinesScanned"></a>
<a id="tocSnumberofloglinesscanned"></a>
<a id="tocsnumberofloglinesscanned"></a>

```json
0
```

<h2 id="tocS_LogAnomalyShowcases">LogAnomalyShowcases</h2>
<!-- backwards compatibility -->
<a id="schemaloganomalyshowcases"></a>
<a id="schema_LogAnomalyShowcases"></a>
<a id="tocSloganomalyshowcases"></a>
<a id="tocsloganomalyshowcases"></a>

```json
[
  {
    "LogAnomalyClasses": {}
  }
]
```

<h2 id="tocS_AnomalousLogGroup">AnomalousLogGroup</h2>
<!-- backwards compatibility -->
<a id="schemaanomalousloggroup"></a>
<a id="schema_AnomalousLogGroup"></a>
<a id="tocSanomalousloggroup"></a>
<a id="tocsanomalousloggroup"></a>

```json
{
  "LogGroupName": {},
  "ImpactStartTime": {},
  "ImpactEndTime": {},
  "NumberOfLogLinesScanned": {},
  "LogAnomalyShowcases": {}
}
```

 An Amazon CloudWatch log group that contains log anomalies and is used to generate an insight.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogGroupName|object|false|none|none|
|ImpactStartTime|object|false|none|none|
|ImpactEndTime|object|false|none|none|
|NumberOfLogLinesScanned|object|false|none|none|
|LogAnomalyShowcases|object|false|none|none|

<h2 id="tocS_AnomalousLogGroups">AnomalousLogGroups</h2>
<!-- backwards compatibility -->
<a id="schemaanomalousloggroups"></a>
<a id="schema_AnomalousLogGroups"></a>
<a id="tocSanomalousloggroups"></a>
<a id="tocsanomalousloggroups"></a>

```json
[
  {
    "LogGroupName": {},
    "ImpactStartTime": {},
    "ImpactEndTime": {},
    "NumberOfLogLinesScanned": {},
    "LogAnomalyShowcases": {}
  }
]
```

<h2 id="tocS_AnomalyDescription">AnomalyDescription</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydescription"></a>
<a id="schema_AnomalyDescription"></a>
<a id="tocSanomalydescription"></a>
<a id="tocsanomalydescription"></a>

```json
"string"
```

<h2 id="tocS_AnomalyId">AnomalyId</h2>
<!-- backwards compatibility -->
<a id="schemaanomalyid"></a>
<a id="schema_AnomalyId"></a>
<a id="tocSanomalyid"></a>
<a id="tocsanomalyid"></a>

```json
"string"
```

<h2 id="tocS_AnomalyLimit">AnomalyLimit</h2>
<!-- backwards compatibility -->
<a id="schemaanomalylimit"></a>
<a id="schema_AnomalyLimit"></a>
<a id="tocSanomalylimit"></a>
<a id="tocsanomalylimit"></a>

```json
0
```

<h2 id="tocS_AnomalyName">AnomalyName</h2>
<!-- backwards compatibility -->
<a id="schemaanomalyname"></a>
<a id="schema_AnomalyName"></a>
<a id="tocSanomalyname"></a>
<a id="tocsanomalyname"></a>

```json
"string"
```

<h2 id="tocS_AnomalyReportedTimeRange">AnomalyReportedTimeRange</h2>
<!-- backwards compatibility -->
<a id="schemaanomalyreportedtimerange"></a>
<a id="schema_AnomalyReportedTimeRange"></a>
<a id="tocSanomalyreportedtimerange"></a>
<a id="tocsanomalyreportedtimerange"></a>

```json
{
  "OpenTime": {},
  "CloseTime": {}
}
```

 A time range that specifies when DevOps Guru opens and then closes an anomaly. This is different from <code>AnomalyTimeRange</code>, which specifies the time range when DevOps Guru actually observes the anomalous behavior.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpenTime|object|true|none|none|
|CloseTime|object|false|none|none|

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"string"
```

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"string"
```

<h2 id="tocS_AnomalyResource">AnomalyResource</h2>
<!-- backwards compatibility -->
<a id="schemaanomalyresource"></a>
<a id="schema_AnomalyResource"></a>
<a id="tocSanomalyresource"></a>
<a id="tocsanomalyresource"></a>

```json
{
  "Name": {},
  "Type": {}
}
```

The Amazon Web Services resources in which DevOps Guru detected unusual behavior that resulted in the generation of an anomaly. When DevOps Guru detects multiple related anomalies, it creates and insight with details about the anomalous behavior and suggestions about how to correct the problem.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_AnomalyResources">AnomalyResources</h2>
<!-- backwards compatibility -->
<a id="schemaanomalyresources"></a>
<a id="schema_AnomalyResources"></a>
<a id="tocSanomalyresources"></a>
<a id="tocsanomalyresources"></a>

```json
[
  {
    "Name": {},
    "Type": {}
  }
]
```

<h2 id="tocS_AnomalySeverity">AnomalySeverity</h2>
<!-- backwards compatibility -->
<a id="schemaanomalyseverity"></a>
<a id="schema_AnomalySeverity"></a>
<a id="tocSanomalyseverity"></a>
<a id="tocsanomalyseverity"></a>

```json
"LOW"
```

<h2 id="tocS_AnomalySource">AnomalySource</h2>
<!-- backwards compatibility -->
<a id="schemaanomalysource"></a>
<a id="schema_AnomalySource"></a>
<a id="tocSanomalysource"></a>
<a id="tocsanomalysource"></a>

```json
"string"
```

<h2 id="tocS_CloudWatchMetricsDetails">CloudWatchMetricsDetails</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchmetricsdetails"></a>
<a id="schema_CloudWatchMetricsDetails"></a>
<a id="tocScloudwatchmetricsdetails"></a>
<a id="tocscloudwatchmetricsdetails"></a>

```json
[
  {
    "MetricName": {},
    "Namespace": {},
    "Dimensions": {},
    "Stat": {},
    "Unit": {},
    "Period": {},
    "MetricDataSummary": {
      "TimestampMetricValuePairList": {},
      "StatusCode": {}
    }
  }
]
```

<h2 id="tocS_PerformanceInsightsMetricsDetails">PerformanceInsightsMetricsDetails</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsmetricsdetails"></a>
<a id="schema_PerformanceInsightsMetricsDetails"></a>
<a id="tocSperformanceinsightsmetricsdetails"></a>
<a id="tocsperformanceinsightsmetricsdetails"></a>

```json
[
  {
    "MetricDisplayName": {},
    "Unit": {},
    "MetricQuery": {
      "Metric": {},
      "GroupBy": {
        "Group": {},
        "Dimensions": {},
        "Limit": {}
      },
      "Filter": {
        "property1": "string",
        "property2": "string"
      }
    },
    "ReferenceData": {},
    "StatsAtAnomaly": {},
    "StatsAtBaseline": {}
  }
]
```

<h2 id="tocS_AnomalySourceDetails">AnomalySourceDetails</h2>
<!-- backwards compatibility -->
<a id="schemaanomalysourcedetails"></a>
<a id="schema_AnomalySourceDetails"></a>
<a id="tocSanomalysourcedetails"></a>
<a id="tocsanomalysourcedetails"></a>

```json
{
  "CloudWatchMetrics": {},
  "PerformanceInsightsMetrics": {}
}
```

 Details about the source of the anomalous operational data that triggered the anomaly.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudWatchMetrics|object|false|none|none|
|PerformanceInsightsMetrics|object|false|none|none|

<h2 id="tocS_AnomalySourceMetadata">AnomalySourceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaanomalysourcemetadata"></a>
<a id="schema_AnomalySourceMetadata"></a>
<a id="tocSanomalysourcemetadata"></a>
<a id="tocsanomalysourcemetadata"></a>

```json
{
  "Source": {},
  "SourceResourceName": {},
  "SourceResourceType": {}
}
```

Metadata about the detection source that generates proactive anomalies. The anomaly is detected using analysis of the metric data&#x2028; over a period of time

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Source|object|false|none|none|
|SourceResourceName|object|false|none|none|
|SourceResourceType|object|false|none|none|

<h2 id="tocS_AnomalyStatus">AnomalyStatus</h2>
<!-- backwards compatibility -->
<a id="schemaanomalystatus"></a>
<a id="schema_AnomalyStatus"></a>
<a id="tocSanomalystatus"></a>
<a id="tocsanomalystatus"></a>

```json
"ONGOING"
```

<h2 id="tocS_AnomalyTimeRange">AnomalyTimeRange</h2>
<!-- backwards compatibility -->
<a id="schemaanomalytimerange"></a>
<a id="schema_AnomalyTimeRange"></a>
<a id="tocSanomalytimerange"></a>
<a id="tocsanomalytimerange"></a>

```json
{
  "StartTime": {},
  "EndTime": {}
}
```

 A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies the time range when DevOps Guru opens and then closes an anomaly.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|true|none|none|
|EndTime|object|false|none|none|

<h2 id="tocS_AnomalyType">AnomalyType</h2>
<!-- backwards compatibility -->
<a id="schemaanomalytype"></a>
<a id="schema_AnomalyType"></a>
<a id="tocSanomalytype"></a>
<a id="tocsanomalytype"></a>

```json
"CAUSAL"
```

<h2 id="tocS_AppBoundaryKey">AppBoundaryKey</h2>
<!-- backwards compatibility -->
<a id="schemaappboundarykey"></a>
<a id="schema_AppBoundaryKey"></a>
<a id="tocSappboundarykey"></a>
<a id="tocsappboundarykey"></a>

```json
"string"
```

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_AssociatedResourceArns">AssociatedResourceArns</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedresourcearns"></a>
<a id="schema_AssociatedResourceArns"></a>
<a id="tocSassociatedresourcearns"></a>
<a id="tocsassociatedresourcearns"></a>

```json
[
  "stringstringstringst"
]
```

<h2 id="tocS_NotificationChannel">NotificationChannel</h2>
<!-- backwards compatibility -->
<a id="schemanotificationchannel"></a>
<a id="schema_NotificationChannel"></a>
<a id="tocSnotificationchannel"></a>
<a id="tocsnotificationchannel"></a>

```json
{
  "Id": {},
  "Config": {
    "Sns": {
      "TopicArn": {}
    },
    "Filters": {
      "Severities": {},
      "MessageTypes": {}
    }
  }
}
```

<p> Information about a notification channel. A notification channel is used to notify you when DevOps Guru creates an insight. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Config|object|false|none|none|

<h2 id="tocS_Channels">Channels</h2>
<!-- backwards compatibility -->
<a id="schemachannels"></a>
<a id="schema_Channels"></a>
<a id="tocSchannels"></a>
<a id="tocschannels"></a>

```json
[
  {
    "Id": {},
    "Config": {
      "Sns": {
        "TopicArn": {}
      },
      "Filters": {
        "Severities": {},
        "MessageTypes": {}
      }
    }
  }
]
```

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"string"
```

<h2 id="tocS_StackNames">StackNames</h2>
<!-- backwards compatibility -->
<a id="schemastacknames"></a>
<a id="schema_StackNames"></a>
<a id="tocSstacknames"></a>
<a id="tocsstacknames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CloudFormationCollection">CloudFormationCollection</h2>
<!-- backwards compatibility -->
<a id="schemacloudformationcollection"></a>
<a id="schema_CloudFormationCollection"></a>
<a id="tocScloudformationcollection"></a>
<a id="tocscloudformationcollection"></a>

```json
{
  "StackNames": {}
}
```

 Information about Amazon Web Services CloudFormation stacks. You can use up to 500 stacks to specify which Amazon Web Services resources in your account to analyze. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>Amazon Web Services CloudFormation User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackNames|object|false|none|none|

<h2 id="tocS_CloudFormationCollectionFilter">CloudFormationCollectionFilter</h2>
<!-- backwards compatibility -->
<a id="schemacloudformationcollectionfilter"></a>
<a id="schema_CloudFormationCollectionFilter"></a>
<a id="tocScloudformationcollectionfilter"></a>
<a id="tocscloudformationcollectionfilter"></a>

```json
{
  "StackNames": {}
}
```

 Information about Amazon Web Services CloudFormation stacks. You can use up to 500 stacks to specify which Amazon Web Services resources in your account to analyze. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>Amazon Web Services CloudFormation User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackNames|object|false|none|none|

<h2 id="tocS_CostEstimationStackNames">CostEstimationStackNames</h2>
<!-- backwards compatibility -->
<a id="schemacostestimationstacknames"></a>
<a id="schema_CostEstimationStackNames"></a>
<a id="tocScostestimationstacknames"></a>
<a id="tocscostestimationstacknames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StackName">StackName</h2>
<!-- backwards compatibility -->
<a id="schemastackname"></a>
<a id="schema_StackName"></a>
<a id="tocSstackname"></a>
<a id="tocsstackname"></a>

```json
"string"
```

<h2 id="tocS_InsightHealth">InsightHealth</h2>
<!-- backwards compatibility -->
<a id="schemainsighthealth"></a>
<a id="schema_InsightHealth"></a>
<a id="tocSinsighthealth"></a>
<a id="tocsinsighthealth"></a>

```json
{
  "OpenProactiveInsights": {},
  "OpenReactiveInsights": {},
  "MeanTimeToRecoverInMilliseconds": {}
}
```

 Information about the number of open reactive and proactive insights that can be used to gauge the health of your system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpenProactiveInsights|object|false|none|none|
|OpenReactiveInsights|object|false|none|none|
|MeanTimeToRecoverInMilliseconds|object|false|none|none|

<h2 id="tocS_CloudFormationHealth">CloudFormationHealth</h2>
<!-- backwards compatibility -->
<a id="schemacloudformationhealth"></a>
<a id="schema_CloudFormationHealth"></a>
<a id="tocScloudformationhealth"></a>
<a id="tocscloudformationhealth"></a>

```json
{
  "StackName": {},
  "Insight": {
    "OpenProactiveInsights": {},
    "OpenReactiveInsights": {},
    "MeanTimeToRecoverInMilliseconds": {}
  },
  "AnalyzedResourceCount": {}
}
```

 Information about the health of Amazon Web Services resources in your account that are specified by an Amazon Web Services CloudFormation stack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|false|none|none|
|Insight|object|false|none|none|
|AnalyzedResourceCount|object|false|none|none|

<h2 id="tocS_CloudFormationHealths">CloudFormationHealths</h2>
<!-- backwards compatibility -->
<a id="schemacloudformationhealths"></a>
<a id="schema_CloudFormationHealths"></a>
<a id="tocScloudformationhealths"></a>
<a id="tocscloudformationhealths"></a>

```json
[
  {
    "StackName": {},
    "Insight": {
      "OpenProactiveInsights": {},
      "OpenReactiveInsights": {},
      "MeanTimeToRecoverInMilliseconds": {}
    },
    "AnalyzedResourceCount": {}
  }
]
```

<h2 id="tocS_CloudWatchMetricDataStatusCode">CloudWatchMetricDataStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchmetricdatastatuscode"></a>
<a id="schema_CloudWatchMetricDataStatusCode"></a>
<a id="tocScloudwatchmetricdatastatuscode"></a>
<a id="tocscloudwatchmetricdatastatuscode"></a>

```json
"Complete"
```

<h2 id="tocS_TimestampMetricValuePairList">TimestampMetricValuePairList</h2>
<!-- backwards compatibility -->
<a id="schematimestampmetricvaluepairlist"></a>
<a id="schema_TimestampMetricValuePairList"></a>
<a id="tocStimestampmetricvaluepairlist"></a>
<a id="tocstimestampmetricvaluepairlist"></a>

```json
[
  {
    "Timestamp": {},
    "MetricValue": {}
  }
]
```

<h2 id="tocS_CloudWatchMetricsDataSummary">CloudWatchMetricsDataSummary</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchmetricsdatasummary"></a>
<a id="schema_CloudWatchMetricsDataSummary"></a>
<a id="tocScloudwatchmetricsdatasummary"></a>
<a id="tocscloudwatchmetricsdatasummary"></a>

```json
{
  "TimestampMetricValuePairList": {},
  "StatusCode": {}
}
```

Contains information about the analyzed metrics that displayed anomalous behavior.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimestampMetricValuePairList|object|false|none|none|
|StatusCode|object|false|none|none|

<h2 id="tocS_CloudWatchMetricsMetricName">CloudWatchMetricsMetricName</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchmetricsmetricname"></a>
<a id="schema_CloudWatchMetricsMetricName"></a>
<a id="tocScloudwatchmetricsmetricname"></a>
<a id="tocscloudwatchmetricsmetricname"></a>

```json
"string"
```

<h2 id="tocS_CloudWatchMetricsNamespace">CloudWatchMetricsNamespace</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchmetricsnamespace"></a>
<a id="schema_CloudWatchMetricsNamespace"></a>
<a id="tocScloudwatchmetricsnamespace"></a>
<a id="tocscloudwatchmetricsnamespace"></a>

```json
"string"
```

<h2 id="tocS_CloudWatchMetricsDimensions">CloudWatchMetricsDimensions</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchmetricsdimensions"></a>
<a id="schema_CloudWatchMetricsDimensions"></a>
<a id="tocScloudwatchmetricsdimensions"></a>
<a id="tocscloudwatchmetricsdimensions"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_CloudWatchMetricsStat">CloudWatchMetricsStat</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchmetricsstat"></a>
<a id="schema_CloudWatchMetricsStat"></a>
<a id="tocScloudwatchmetricsstat"></a>
<a id="tocscloudwatchmetricsstat"></a>

```json
"Sum"
```

<h2 id="tocS_CloudWatchMetricsUnit">CloudWatchMetricsUnit</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchmetricsunit"></a>
<a id="schema_CloudWatchMetricsUnit"></a>
<a id="tocScloudwatchmetricsunit"></a>
<a id="tocscloudwatchmetricsunit"></a>

```json
"string"
```

<h2 id="tocS_CloudWatchMetricsPeriod">CloudWatchMetricsPeriod</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchmetricsperiod"></a>
<a id="schema_CloudWatchMetricsPeriod"></a>
<a id="tocScloudwatchmetricsperiod"></a>
<a id="tocscloudwatchmetricsperiod"></a>

```json
0
```

<h2 id="tocS_CloudWatchMetricsDetail">CloudWatchMetricsDetail</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchmetricsdetail"></a>
<a id="schema_CloudWatchMetricsDetail"></a>
<a id="tocScloudwatchmetricsdetail"></a>
<a id="tocscloudwatchmetricsdetail"></a>

```json
{
  "MetricName": {},
  "Namespace": {},
  "Dimensions": {},
  "Stat": {},
  "Unit": {},
  "Period": {},
  "MetricDataSummary": {
    "TimestampMetricValuePairList": {},
    "StatusCode": {}
  }
}
```

 Information about an Amazon CloudWatch metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricName|object|false|none|none|
|Namespace|object|false|none|none|
|Dimensions|object|false|none|none|
|Stat|object|false|none|none|
|Unit|object|false|none|none|
|Period|object|false|none|none|
|MetricDataSummary|object|false|none|none|

<h2 id="tocS_CloudWatchMetricsDimensionName">CloudWatchMetricsDimensionName</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchmetricsdimensionname"></a>
<a id="schema_CloudWatchMetricsDimensionName"></a>
<a id="tocScloudwatchmetricsdimensionname"></a>
<a id="tocscloudwatchmetricsdimensionname"></a>

```json
"string"
```

<h2 id="tocS_CloudWatchMetricsDimensionValue">CloudWatchMetricsDimensionValue</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchmetricsdimensionvalue"></a>
<a id="schema_CloudWatchMetricsDimensionValue"></a>
<a id="tocScloudwatchmetricsdimensionvalue"></a>
<a id="tocscloudwatchmetricsdimensionvalue"></a>

```json
"string"
```

<h2 id="tocS_CloudWatchMetricsDimension">CloudWatchMetricsDimension</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchmetricsdimension"></a>
<a id="schema_CloudWatchMetricsDimension"></a>
<a id="tocScloudwatchmetricsdimension"></a>
<a id="tocscloudwatchmetricsdimension"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

 The dimension of an Amazon CloudWatch metric that is used when DevOps Guru analyzes the resources in your account for operational problems and anomalous behavior. A dimension is a name/value pair that is part of the identity of a metric. A metric can have up to 10 dimensions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension">Dimensions</a> in the <i>Amazon CloudWatch User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_Cost">Cost</h2>
<!-- backwards compatibility -->
<a id="schemacost"></a>
<a id="schema_Cost"></a>
<a id="tocScost"></a>
<a id="tocscost"></a>

```json
0
```

<h2 id="tocS_CostEstimationResourceCollectionFilter">CostEstimationResourceCollectionFilter</h2>
<!-- backwards compatibility -->
<a id="schemacostestimationresourcecollectionfilter"></a>
<a id="schema_CostEstimationResourceCollectionFilter"></a>
<a id="tocScostestimationresourcecollectionfilter"></a>
<a id="tocscostestimationresourcecollectionfilter"></a>

```json
{
  "CloudFormation": {
    "StackNames": {}
  },
  "Tags": {}
}
```

Information about a filter used to specify which Amazon Web Services resources are analyzed to create a monthly DevOps Guru cost estimate. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudFormation|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CostEstimationServiceResourceCount">CostEstimationServiceResourceCount</h2>
<!-- backwards compatibility -->
<a id="schemacostestimationserviceresourcecount"></a>
<a id="schema_CostEstimationServiceResourceCount"></a>
<a id="tocScostestimationserviceresourcecount"></a>
<a id="tocscostestimationserviceresourcecount"></a>

```json
0
```

<h2 id="tocS_CostEstimationServiceResourceState">CostEstimationServiceResourceState</h2>
<!-- backwards compatibility -->
<a id="schemacostestimationserviceresourcestate"></a>
<a id="schema_CostEstimationServiceResourceState"></a>
<a id="tocScostestimationserviceresourcestate"></a>
<a id="tocscostestimationserviceresourcestate"></a>

```json
"ACTIVE"
```

<h2 id="tocS_CostEstimationStatus">CostEstimationStatus</h2>
<!-- backwards compatibility -->
<a id="schemacostestimationstatus"></a>
<a id="schema_CostEstimationStatus"></a>
<a id="tocScostestimationstatus"></a>
<a id="tocscostestimationstatus"></a>

```json
"ONGOING"
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

<h2 id="tocS_CostEstimationTagValues">CostEstimationTagValues</h2>
<!-- backwards compatibility -->
<a id="schemacostestimationtagvalues"></a>
<a id="schema_CostEstimationTagValues"></a>
<a id="tocScostestimationtagvalues"></a>
<a id="tocscostestimationtagvalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CostEstimationTimeRange">CostEstimationTimeRange</h2>
<!-- backwards compatibility -->
<a id="schemacostestimationtimerange"></a>
<a id="schema_CostEstimationTimeRange"></a>
<a id="tocScostestimationtimerange"></a>
<a id="tocscostestimationtimerange"></a>

```json
{
  "StartTime": {},
  "EndTime": {}
}
```

The time range of a cost estimation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|

<h2 id="tocS_DeleteInsightRequest">DeleteInsightRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinsightrequest"></a>
<a id="schema_DeleteInsightRequest"></a>
<a id="tocSdeleteinsightrequest"></a>
<a id="tocsdeleteinsightrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeAccountHealthRequest">DescribeAccountHealthRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccounthealthrequest"></a>
<a id="schema_DescribeAccountHealthRequest"></a>
<a id="tocSdescribeaccounthealthrequest"></a>
<a id="tocsdescribeaccounthealthrequest"></a>

```json
{}
```

<h2 id="tocS_NumMetricsAnalyzed">NumMetricsAnalyzed</h2>
<!-- backwards compatibility -->
<a id="schemanummetricsanalyzed"></a>
<a id="schema_NumMetricsAnalyzed"></a>
<a id="tocSnummetricsanalyzed"></a>
<a id="tocsnummetricsanalyzed"></a>

```json
0
```

<h2 id="tocS_ResourceHours">ResourceHours</h2>
<!-- backwards compatibility -->
<a id="schemaresourcehours"></a>
<a id="schema_ResourceHours"></a>
<a id="tocSresourcehours"></a>
<a id="tocsresourcehours"></a>

```json
0
```

<h2 id="tocS_DescribeAccountOverviewRequest">DescribeAccountOverviewRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountoverviewrequest"></a>
<a id="schema_DescribeAccountOverviewRequest"></a>
<a id="tocSdescribeaccountoverviewrequest"></a>
<a id="tocsdescribeaccountoverviewrequest"></a>

```json
{
  "FromTime": {},
  "ToTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FromTime|object|true|none|none|
|ToTime|object|false|none|none|

<h2 id="tocS_NumReactiveInsights">NumReactiveInsights</h2>
<!-- backwards compatibility -->
<a id="schemanumreactiveinsights"></a>
<a id="schema_NumReactiveInsights"></a>
<a id="tocSnumreactiveinsights"></a>
<a id="tocsnumreactiveinsights"></a>

```json
0
```

<h2 id="tocS_NumProactiveInsights">NumProactiveInsights</h2>
<!-- backwards compatibility -->
<a id="schemanumproactiveinsights"></a>
<a id="schema_NumProactiveInsights"></a>
<a id="tocSnumproactiveinsights"></a>
<a id="tocsnumproactiveinsights"></a>

```json
0
```

<h2 id="tocS_MeanTimeToRecoverInMilliseconds">MeanTimeToRecoverInMilliseconds</h2>
<!-- backwards compatibility -->
<a id="schemameantimetorecoverinmilliseconds"></a>
<a id="schema_MeanTimeToRecoverInMilliseconds"></a>
<a id="tocSmeantimetorecoverinmilliseconds"></a>
<a id="tocsmeantimetorecoverinmilliseconds"></a>

```json
0
```

<h2 id="tocS_DescribeAnomalyRequest">DescribeAnomalyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeanomalyrequest"></a>
<a id="schema_DescribeAnomalyRequest"></a>
<a id="tocSdescribeanomalyrequest"></a>
<a id="tocsdescribeanomalyrequest"></a>

```json
{}
```

<h2 id="tocS_ProactiveAnomaly">ProactiveAnomaly</h2>
<!-- backwards compatibility -->
<a id="schemaproactiveanomaly"></a>
<a id="schema_ProactiveAnomaly"></a>
<a id="tocSproactiveanomaly"></a>
<a id="tocsproactiveanomaly"></a>

```json
{
  "Id": {},
  "Severity": {},
  "Status": {},
  "UpdateTime": {},
  "AnomalyTimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "AnomalyReportedTimeRange": {
    "OpenTime": {},
    "CloseTime": {}
  },
  "PredictionTimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "SourceDetails": {
    "CloudWatchMetrics": {},
    "PerformanceInsightsMetrics": {}
  },
  "AssociatedInsightId": {},
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
  "Limit": {},
  "SourceMetadata": {
    "Source": {},
    "SourceResourceName": {},
    "SourceResourceType": {}
  },
  "AnomalyResources": {},
  "Description": {}
}
```

Information about an anomaly. This object is returned by <code>ListAnomalies</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Severity|object|false|none|none|
|Status|object|false|none|none|
|UpdateTime|object|false|none|none|
|AnomalyTimeRange|[AnomalyTimeRange](#schemaanomalytimerange)|false|none| A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies the time range when DevOps Guru opens and then closes an anomaly. |
|AnomalyReportedTimeRange|object|false|none|none|
|PredictionTimeRange|[PredictionTimeRange](#schemapredictiontimerange)|false|none| The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur. |
|SourceDetails|object|false|none|none|
|AssociatedInsightId|object|false|none|none|
|ResourceCollection|[ResourceCollection](#schemaresourcecollection)|false|none| A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
|Limit|object|false|none|none|
|SourceMetadata|object|false|none|none|
|AnomalyResources|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_ReactiveAnomaly">ReactiveAnomaly</h2>
<!-- backwards compatibility -->
<a id="schemareactiveanomaly"></a>
<a id="schema_ReactiveAnomaly"></a>
<a id="tocSreactiveanomaly"></a>
<a id="tocsreactiveanomaly"></a>

```json
{
  "Id": {},
  "Severity": {},
  "Status": {},
  "AnomalyTimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "AnomalyReportedTimeRange": {
    "OpenTime": {},
    "CloseTime": {}
  },
  "SourceDetails": {
    "CloudWatchMetrics": {},
    "PerformanceInsightsMetrics": {}
  },
  "AssociatedInsightId": {},
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
  "Type": {},
  "Name": {},
  "Description": {},
  "CausalAnomalyId": {},
  "AnomalyResources": {}
}
```

Details about a reactive anomaly. This object is returned by <code>ListAnomalies</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Severity|object|false|none|none|
|Status|object|false|none|none|
|AnomalyTimeRange|[AnomalyTimeRange](#schemaanomalytimerange)|false|none| A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies the time range when DevOps Guru opens and then closes an anomaly. |
|AnomalyReportedTimeRange|object|false|none|none|
|SourceDetails|object|false|none|none|
|AssociatedInsightId|object|false|none|none|
|ResourceCollection|[ResourceCollection](#schemaresourcecollection)|false|none| A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
|Type|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|CausalAnomalyId|object|false|none|none|
|AnomalyResources|object|false|none|none|

<h2 id="tocS_DescribeEventSourcesConfigRequest">DescribeEventSourcesConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsourcesconfigrequest"></a>
<a id="schema_DescribeEventSourcesConfigRequest"></a>
<a id="tocSdescribeeventsourcesconfigrequest"></a>
<a id="tocsdescribeeventsourcesconfigrequest"></a>

```json
{}
```

<h2 id="tocS_EventSourcesConfig">EventSourcesConfig</h2>
<!-- backwards compatibility -->
<a id="schemaeventsourcesconfig"></a>
<a id="schema_EventSourcesConfig"></a>
<a id="tocSeventsourcesconfig"></a>
<a id="tocseventsourcesconfig"></a>

```json
{
  "AmazonCodeGuruProfiler": {
    "Status": {}
  }
}
```

Information about the integration of DevOps Guru as consumer with another AWS service, such as AWS CodeGuru Profiler via EventBridge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmazonCodeGuruProfiler|object|false|none|none|

<h2 id="tocS_DescribeFeedbackRequest">DescribeFeedbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefeedbackrequest"></a>
<a id="schema_DescribeFeedbackRequest"></a>
<a id="tocSdescribefeedbackrequest"></a>
<a id="tocsdescribefeedbackrequest"></a>

```json
{
  "InsightId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsightId|object|false|none|none|

<h2 id="tocS_InsightFeedback">InsightFeedback</h2>
<!-- backwards compatibility -->
<a id="schemainsightfeedback"></a>
<a id="schema_InsightFeedback"></a>
<a id="tocSinsightfeedback"></a>
<a id="tocsinsightfeedback"></a>

```json
{
  "Id": {},
  "Feedback": {}
}
```

 Information about insight feedback received from a customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Feedback|object|false|none|none|

<h2 id="tocS_DescribeInsightRequest">DescribeInsightRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinsightrequest"></a>
<a id="schema_DescribeInsightRequest"></a>
<a id="tocSdescribeinsightrequest"></a>
<a id="tocsdescribeinsightrequest"></a>

```json
{}
```

<h2 id="tocS_ProactiveInsight">ProactiveInsight</h2>
<!-- backwards compatibility -->
<a id="schemaproactiveinsight"></a>
<a id="schema_ProactiveInsight"></a>
<a id="tocSproactiveinsight"></a>
<a id="tocsproactiveinsight"></a>

```json
{
  "Id": {},
  "Name": {},
  "Severity": {},
  "Status": {},
  "InsightTimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "PredictionTimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
  "SsmOpsItemId": {},
  "Description": {}
}
```

Details about a proactive insight. This object is returned by <code>ListInsights</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Severity|object|false|none|none|
|Status|object|false|none|none|
|InsightTimeRange|[InsightTimeRange](#schemainsighttimerange)|false|none| A time ranged that specifies when the observed behavior in an insight started and ended. |
|PredictionTimeRange|[PredictionTimeRange](#schemapredictiontimerange)|false|none| The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur. |
|ResourceCollection|[ResourceCollection](#schemaresourcecollection)|false|none| A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
|SsmOpsItemId|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_ReactiveInsight">ReactiveInsight</h2>
<!-- backwards compatibility -->
<a id="schemareactiveinsight"></a>
<a id="schema_ReactiveInsight"></a>
<a id="tocSreactiveinsight"></a>
<a id="tocsreactiveinsight"></a>

```json
{
  "Id": {},
  "Name": {},
  "Severity": {},
  "Status": {},
  "InsightTimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
  "SsmOpsItemId": {},
  "Description": {}
}
```

 Information about a reactive insight. This object is returned by <code>ListInsights</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Severity|object|false|none|none|
|Status|object|false|none|none|
|InsightTimeRange|[InsightTimeRange](#schemainsighttimerange)|false|none| A time ranged that specifies when the observed behavior in an insight started and ended. |
|ResourceCollection|[ResourceCollection](#schemaresourcecollection)|false|none| A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
|SsmOpsItemId|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_OrganizationalUnitIdList">OrganizationalUnitIdList</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunitidlist"></a>
<a id="schema_OrganizationalUnitIdList"></a>
<a id="tocSorganizationalunitidlist"></a>
<a id="tocsorganizationalunitidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribeOrganizationHealthRequest">DescribeOrganizationHealthRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationhealthrequest"></a>
<a id="schema_DescribeOrganizationHealthRequest"></a>
<a id="tocSdescribeorganizationhealthrequest"></a>
<a id="tocsdescribeorganizationhealthrequest"></a>

```json
{
  "AccountIds": {},
  "OrganizationalUnitIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|false|none|none|
|OrganizationalUnitIds|object|false|none|none|

<h2 id="tocS_DescribeOrganizationOverviewRequest">DescribeOrganizationOverviewRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationoverviewrequest"></a>
<a id="schema_DescribeOrganizationOverviewRequest"></a>
<a id="tocSdescribeorganizationoverviewrequest"></a>
<a id="tocsdescribeorganizationoverviewrequest"></a>

```json
{
  "FromTime": {},
  "ToTime": {},
  "AccountIds": {},
  "OrganizationalUnitIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FromTime|object|true|none|none|
|ToTime|object|false|none|none|
|AccountIds|object|false|none|none|
|OrganizationalUnitIds|object|false|none|none|

<h2 id="tocS_OrganizationResourceCollectionType">OrganizationResourceCollectionType</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationresourcecollectiontype"></a>
<a id="schema_OrganizationResourceCollectionType"></a>
<a id="tocSorganizationresourcecollectiontype"></a>
<a id="tocsorganizationresourcecollectiontype"></a>

```json
"AWS_CLOUD_FORMATION"
```

<h2 id="tocS_UuidNextToken">UuidNextToken</h2>
<!-- backwards compatibility -->
<a id="schemauuidnexttoken"></a>
<a id="schema_UuidNextToken"></a>
<a id="tocSuuidnexttoken"></a>
<a id="tocsuuidnexttoken"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_OrganizationResourceCollectionMaxResults">OrganizationResourceCollectionMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationresourcecollectionmaxresults"></a>
<a id="schema_OrganizationResourceCollectionMaxResults"></a>
<a id="tocSorganizationresourcecollectionmaxresults"></a>
<a id="tocsorganizationresourcecollectionmaxresults"></a>

```json
1
```

<h2 id="tocS_DescribeOrganizationResourceCollectionHealthRequest">DescribeOrganizationResourceCollectionHealthRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationresourcecollectionhealthrequest"></a>
<a id="schema_DescribeOrganizationResourceCollectionHealthRequest"></a>
<a id="tocSdescribeorganizationresourcecollectionhealthrequest"></a>
<a id="tocsdescribeorganizationresourcecollectionhealthrequest"></a>

```json
{
  "OrganizationResourceCollectionType": {},
  "AccountIds": {},
  "OrganizationalUnitIds": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationResourceCollectionType|object|true|none|none|
|AccountIds|object|false|none|none|
|OrganizationalUnitIds|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ServiceHealths">ServiceHealths</h2>
<!-- backwards compatibility -->
<a id="schemaservicehealths"></a>
<a id="schema_ServiceHealths"></a>
<a id="tocSservicehealths"></a>
<a id="tocsservicehealths"></a>

```json
[
  {
    "ServiceName": {},
    "Insight": {
      "OpenProactiveInsights": {},
      "OpenReactiveInsights": {}
    },
    "AnalyzedResourceCount": {}
  }
]
```

<h2 id="tocS_TagHealths">TagHealths</h2>
<!-- backwards compatibility -->
<a id="schemataghealths"></a>
<a id="schema_TagHealths"></a>
<a id="tocStaghealths"></a>
<a id="tocstaghealths"></a>

```json
[
  {
    "AppBoundaryKey": {},
    "TagValue": {},
    "Insight": {
      "OpenProactiveInsights": {},
      "OpenReactiveInsights": {},
      "MeanTimeToRecoverInMilliseconds": {}
    },
    "AnalyzedResourceCount": {}
  }
]
```

<h2 id="tocS_ResourceCollectionType">ResourceCollectionType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecollectiontype"></a>
<a id="schema_ResourceCollectionType"></a>
<a id="tocSresourcecollectiontype"></a>
<a id="tocsresourcecollectiontype"></a>

```json
"AWS_CLOUD_FORMATION"
```

<h2 id="tocS_DescribeResourceCollectionHealthRequest">DescribeResourceCollectionHealthRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberesourcecollectionhealthrequest"></a>
<a id="schema_DescribeResourceCollectionHealthRequest"></a>
<a id="tocSdescriberesourcecollectionhealthrequest"></a>
<a id="tocsdescriberesourcecollectionhealthrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeServiceIntegrationRequest">DescribeServiceIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeserviceintegrationrequest"></a>
<a id="schema_DescribeServiceIntegrationRequest"></a>
<a id="tocSdescribeserviceintegrationrequest"></a>
<a id="tocsdescribeserviceintegrationrequest"></a>

```json
{}
```

<h2 id="tocS_ServiceIntegrationConfig">ServiceIntegrationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaserviceintegrationconfig"></a>
<a id="schema_ServiceIntegrationConfig"></a>
<a id="tocSserviceintegrationconfig"></a>
<a id="tocsserviceintegrationconfig"></a>

```json
{
  "OpsCenter": {
    "OptInStatus": {}
  },
  "LogsAnomalyDetection": {
    "OptInStatus": {}
  }
}
```

 Information about the integration of DevOps Guru with another Amazon Web Services service, such as Amazon Web Services Systems Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpsCenter|object|false|none|none|
|LogsAnomalyDetection|object|false|none|none|

<h2 id="tocS_EndTimeRange">EndTimeRange</h2>
<!-- backwards compatibility -->
<a id="schemaendtimerange"></a>
<a id="schema_EndTimeRange"></a>
<a id="tocSendtimerange"></a>
<a id="tocsendtimerange"></a>

```json
{
  "FromTime": {},
  "ToTime": {}
}
```

 A range of time that specifies when anomalous behavior in an anomaly or insight ended.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FromTime|object|false|none|none|
|ToTime|object|false|none|none|

<h2 id="tocS_EventId">EventId</h2>
<!-- backwards compatibility -->
<a id="schemaeventid"></a>
<a id="schema_EventId"></a>
<a id="tocSeventid"></a>
<a id="tocseventid"></a>

```json
"string"
```

<h2 id="tocS_EventName">EventName</h2>
<!-- backwards compatibility -->
<a id="schemaeventname"></a>
<a id="schema_EventName"></a>
<a id="tocSeventname"></a>
<a id="tocseventname"></a>

```json
"string"
```

<h2 id="tocS_EventResources">EventResources</h2>
<!-- backwards compatibility -->
<a id="schemaeventresources"></a>
<a id="schema_EventResources"></a>
<a id="tocSeventresources"></a>
<a id="tocseventresources"></a>

```json
[
  {
    "Type": {},
    "Name": {},
    "Arn": {}
  }
]
```

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
  "Id": {},
  "Time": {},
  "EventSource": {},
  "Name": {},
  "DataSource": {},
  "EventClass": {},
  "Resources": {}
}
```

 An Amazon Web Services resource event. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceCollection|[ResourceCollection](#schemaresourcecollection)|false|none| A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
|Id|object|false|none|none|
|Time|object|false|none|none|
|EventSource|object|false|none|none|
|Name|object|false|none|none|
|DataSource|object|false|none|none|
|EventClass|object|false|none|none|
|Resources|object|false|none|none|

<h2 id="tocS_EventResourceType">EventResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaeventresourcetype"></a>
<a id="schema_EventResourceType"></a>
<a id="tocSeventresourcetype"></a>
<a id="tocseventresourcetype"></a>

```json
"string"
```

<h2 id="tocS_EventResourceName">EventResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaeventresourcename"></a>
<a id="schema_EventResourceName"></a>
<a id="tocSeventresourcename"></a>
<a id="tocseventresourcename"></a>

```json
"string"
```

<h2 id="tocS_EventResourceArn">EventResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaeventresourcearn"></a>
<a id="schema_EventResourceArn"></a>
<a id="tocSeventresourcearn"></a>
<a id="tocseventresourcearn"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_EventResource">EventResource</h2>
<!-- backwards compatibility -->
<a id="schemaeventresource"></a>
<a id="schema_EventResource"></a>
<a id="tocSeventresource"></a>
<a id="tocseventresource"></a>

```json
{
  "Type": {},
  "Name": {},
  "Arn": {}
}
```

 The Amazon Web Services resource that emitted an event. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Name|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_Events">Events</h2>
<!-- backwards compatibility -->
<a id="schemaevents"></a>
<a id="schema_Events"></a>
<a id="tocSevents"></a>
<a id="tocsevents"></a>

```json
[
  {
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "Id": {},
    "Time": {},
    "EventSource": {},
    "Name": {},
    "DataSource": {},
    "EventClass": {},
    "Resources": {}
  }
]
```

<h2 id="tocS_Explanation">Explanation</h2>
<!-- backwards compatibility -->
<a id="schemaexplanation"></a>
<a id="schema_Explanation"></a>
<a id="tocSexplanation"></a>
<a id="tocsexplanation"></a>

```json
"string"
```

<h2 id="tocS_GetCostEstimationRequest">GetCostEstimationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcostestimationrequest"></a>
<a id="schema_GetCostEstimationRequest"></a>
<a id="tocSgetcostestimationrequest"></a>
<a id="tocsgetcostestimationrequest"></a>

```json
{}
```

<h2 id="tocS_ServiceResourceCosts">ServiceResourceCosts</h2>
<!-- backwards compatibility -->
<a id="schemaserviceresourcecosts"></a>
<a id="schema_ServiceResourceCosts"></a>
<a id="tocSserviceresourcecosts"></a>
<a id="tocsserviceresourcecosts"></a>

```json
[
  {
    "Type": {},
    "State": {},
    "Count": {},
    "UnitCost": {},
    "Cost": {}
  }
]
```

<h2 id="tocS_GetResourceCollectionRequest">GetResourceCollectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcecollectionrequest"></a>
<a id="schema_GetResourceCollectionRequest"></a>
<a id="tocSgetresourcecollectionrequest"></a>
<a id="tocsgetresourcecollectionrequest"></a>

```json
{}
```

<h2 id="tocS_ResourceCollectionFilter">ResourceCollectionFilter</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecollectionfilter"></a>
<a id="schema_ResourceCollectionFilter"></a>
<a id="tocSresourcecollectionfilter"></a>
<a id="tocsresourcecollectionfilter"></a>

```json
{
  "CloudFormation": {
    "StackNames": {}
  },
  "Tags": {}
}
```

 Information about a filter used to specify which Amazon Web Services resources are analyzed for anomalous behavior by DevOps Guru.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudFormation|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_InsightDescription">InsightDescription</h2>
<!-- backwards compatibility -->
<a id="schemainsightdescription"></a>
<a id="schema_InsightDescription"></a>
<a id="tocSinsightdescription"></a>
<a id="tocsinsightdescription"></a>

```json
"string"
```

<h2 id="tocS_InsightName">InsightName</h2>
<!-- backwards compatibility -->
<a id="schemainsightname"></a>
<a id="schema_InsightName"></a>
<a id="tocSinsightname"></a>
<a id="tocsinsightname"></a>

```json
"string"
```

<h2 id="tocS_InsightSeverity">InsightSeverity</h2>
<!-- backwards compatibility -->
<a id="schemainsightseverity"></a>
<a id="schema_InsightSeverity"></a>
<a id="tocSinsightseverity"></a>
<a id="tocsinsightseverity"></a>

```json
"LOW"
```

<h2 id="tocS_InsightStatus">InsightStatus</h2>
<!-- backwards compatibility -->
<a id="schemainsightstatus"></a>
<a id="schema_InsightStatus"></a>
<a id="tocSinsightstatus"></a>
<a id="tocsinsightstatus"></a>

```json
"ONGOING"
```

<h2 id="tocS_InsightTimeRange">InsightTimeRange</h2>
<!-- backwards compatibility -->
<a id="schemainsighttimerange"></a>
<a id="schema_InsightTimeRange"></a>
<a id="tocSinsighttimerange"></a>
<a id="tocsinsighttimerange"></a>

```json
{
  "StartTime": {},
  "EndTime": {}
}
```

 A time ranged that specifies when the observed behavior in an insight started and ended.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|true|none|none|
|EndTime|object|false|none|none|

<h2 id="tocS_InsightType">InsightType</h2>
<!-- backwards compatibility -->
<a id="schemainsighttype"></a>
<a id="schema_InsightType"></a>
<a id="tocSinsighttype"></a>
<a id="tocsinsighttype"></a>

```json
"REACTIVE"
```

<h2 id="tocS_ListAnomaliesForInsightFilters">ListAnomaliesForInsightFilters</h2>
<!-- backwards compatibility -->
<a id="schemalistanomaliesforinsightfilters"></a>
<a id="schema_ListAnomaliesForInsightFilters"></a>
<a id="tocSlistanomaliesforinsightfilters"></a>
<a id="tocslistanomaliesforinsightfilters"></a>

```json
{
  "ServiceCollection": {
    "ServiceNames": {}
  }
}
```

 Specifies one or more service names that are used to list anomalies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCollection|[ServiceCollection](#schemaservicecollection)|false|none|A collection of the names of Amazon Web Services services.|

<h2 id="tocS_ListAnomaliesForInsightMaxResults">ListAnomaliesForInsightMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistanomaliesforinsightmaxresults"></a>
<a id="schema_ListAnomaliesForInsightMaxResults"></a>
<a id="tocSlistanomaliesforinsightmaxresults"></a>
<a id="tocslistanomaliesforinsightmaxresults"></a>

```json
1
```

<h2 id="tocS_StartTimeRange">StartTimeRange</h2>
<!-- backwards compatibility -->
<a id="schemastarttimerange"></a>
<a id="schema_StartTimeRange"></a>
<a id="tocSstarttimerange"></a>
<a id="tocsstarttimerange"></a>

```json
{
  "FromTime": {},
  "ToTime": {}
}
```

 A time range used to specify when the behavior of an insight or anomaly started.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FromTime|object|false|none|none|
|ToTime|object|false|none|none|

<h2 id="tocS_ListAnomaliesForInsightRequest">ListAnomaliesForInsightRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistanomaliesforinsightrequest"></a>
<a id="schema_ListAnomaliesForInsightRequest"></a>
<a id="tocSlistanomaliesforinsightrequest"></a>
<a id="tocslistanomaliesforinsightrequest"></a>

```json
{
  "StartTimeRange": {
    "FromTime": {},
    "ToTime": {}
  },
  "MaxResults": {},
  "NextToken": {},
  "AccountId": {},
  "Filters": {
    "ServiceCollection": {
      "ServiceNames": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTimeRange|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|AccountId|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ProactiveAnomalies">ProactiveAnomalies</h2>
<!-- backwards compatibility -->
<a id="schemaproactiveanomalies"></a>
<a id="schema_ProactiveAnomalies"></a>
<a id="tocSproactiveanomalies"></a>
<a id="tocsproactiveanomalies"></a>

```json
[
  {
    "Id": {},
    "Severity": {},
    "Status": {},
    "UpdateTime": {},
    "AnomalyTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "AnomalyReportedTimeRange": {
      "OpenTime": {},
      "CloseTime": {}
    },
    "PredictionTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "SourceDetails": {
      "CloudWatchMetrics": {},
      "PerformanceInsightsMetrics": {}
    },
    "AssociatedInsightId": {},
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "Limit": {},
    "SourceMetadata": {
      "Source": {},
      "SourceResourceName": {},
      "SourceResourceType": {}
    },
    "AnomalyResources": {},
    "Description": {}
  }
]
```

<h2 id="tocS_ReactiveAnomalies">ReactiveAnomalies</h2>
<!-- backwards compatibility -->
<a id="schemareactiveanomalies"></a>
<a id="schema_ReactiveAnomalies"></a>
<a id="tocSreactiveanomalies"></a>
<a id="tocsreactiveanomalies"></a>

```json
[
  {
    "Id": {},
    "Severity": {},
    "Status": {},
    "AnomalyTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "AnomalyReportedTimeRange": {
      "OpenTime": {},
      "CloseTime": {}
    },
    "SourceDetails": {
      "CloudWatchMetrics": {},
      "PerformanceInsightsMetrics": {}
    },
    "AssociatedInsightId": {},
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "Type": {},
    "Name": {},
    "Description": {},
    "CausalAnomalyId": {},
    "AnomalyResources": {}
  }
]
```

<h2 id="tocS_ListAnomalousLogGroupsMaxResults">ListAnomalousLogGroupsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistanomalousloggroupsmaxresults"></a>
<a id="schema_ListAnomalousLogGroupsMaxResults"></a>
<a id="tocSlistanomalousloggroupsmaxresults"></a>
<a id="tocslistanomalousloggroupsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListAnomalousLogGroupsRequest">ListAnomalousLogGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistanomalousloggroupsrequest"></a>
<a id="schema_ListAnomalousLogGroupsRequest"></a>
<a id="tocSlistanomalousloggroupsrequest"></a>
<a id="tocslistanomalousloggroupsrequest"></a>

```json
{
  "InsightId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsightId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEventsFilters">ListEventsFilters</h2>
<!-- backwards compatibility -->
<a id="schemalisteventsfilters"></a>
<a id="schema_ListEventsFilters"></a>
<a id="tocSlisteventsfilters"></a>
<a id="tocslisteventsfilters"></a>

```json
{
  "InsightId": {},
  "EventTimeRange": {
    "FromTime": {},
    "ToTime": {}
  },
  "EventClass": {},
  "EventSource": {},
  "DataSource": {},
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  }
}
```

 Filters you can use to specify which events are returned when <code>ListEvents</code> is called.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsightId|object|false|none|none|
|EventTimeRange|object|false|none|none|
|EventClass|object|false|none|none|
|EventSource|object|false|none|none|
|DataSource|object|false|none|none|
|ResourceCollection|[ResourceCollection](#schemaresourcecollection)|false|none| A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |

<h2 id="tocS_ListEventsMaxResults">ListEventsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalisteventsmaxresults"></a>
<a id="schema_ListEventsMaxResults"></a>
<a id="tocSlisteventsmaxresults"></a>
<a id="tocslisteventsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListEventsRequest">ListEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisteventsrequest"></a>
<a id="schema_ListEventsRequest"></a>
<a id="tocSlisteventsrequest"></a>
<a id="tocslisteventsrequest"></a>

```json
{
  "Filters": {
    "InsightId": {},
    "EventTimeRange": {
      "FromTime": {},
      "ToTime": {}
    },
    "EventClass": {},
    "EventSource": {},
    "DataSource": {},
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    }
  },
  "MaxResults": {},
  "NextToken": {},
  "AccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|AccountId|object|false|none|none|

<h2 id="tocS_ListInsightsAccountIdList">ListInsightsAccountIdList</h2>
<!-- backwards compatibility -->
<a id="schemalistinsightsaccountidlist"></a>
<a id="schema_ListInsightsAccountIdList"></a>
<a id="tocSlistinsightsaccountidlist"></a>
<a id="tocslistinsightsaccountidlist"></a>

```json
[
  "stringstring"
]
```

<h2 id="tocS_ListInsightsMaxResults">ListInsightsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistinsightsmaxresults"></a>
<a id="schema_ListInsightsMaxResults"></a>
<a id="tocSlistinsightsmaxresults"></a>
<a id="tocslistinsightsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListInsightsOrganizationalUnitIdList">ListInsightsOrganizationalUnitIdList</h2>
<!-- backwards compatibility -->
<a id="schemalistinsightsorganizationalunitidlist"></a>
<a id="schema_ListInsightsOrganizationalUnitIdList"></a>
<a id="tocSlistinsightsorganizationalunitidlist"></a>
<a id="tocslistinsightsorganizationalunitidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ListInsightsStatusFilter">ListInsightsStatusFilter</h2>
<!-- backwards compatibility -->
<a id="schemalistinsightsstatusfilter"></a>
<a id="schema_ListInsightsStatusFilter"></a>
<a id="tocSlistinsightsstatusfilter"></a>
<a id="tocslistinsightsstatusfilter"></a>

```json
{
  "Ongoing": {
    "Type": {}
  },
  "Closed": {
    "Type": {},
    "EndTimeRange": {
      "FromTime": {},
      "ToTime": {}
    }
  },
  "Any": {
    "Type": {},
    "StartTimeRange": {
      "FromTime": {},
      "ToTime": {}
    }
  }
}
```

 A filter used by <code>ListInsights</code> to specify which insights to return.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Ongoing|object|false|none|none|
|Closed|object|false|none|none|
|Any|object|false|none|none|

<h2 id="tocS_ListInsightsRequest">ListInsightsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinsightsrequest"></a>
<a id="schema_ListInsightsRequest"></a>
<a id="tocSlistinsightsrequest"></a>
<a id="tocslistinsightsrequest"></a>

```json
{
  "StatusFilter": {
    "Ongoing": {
      "Type": {}
    },
    "Closed": {
      "Type": {},
      "EndTimeRange": {
        "FromTime": {},
        "ToTime": {}
      }
    },
    "Any": {
      "Type": {},
      "StartTimeRange": {
        "FromTime": {},
        "ToTime": {}
      }
    }
  },
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatusFilter|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ProactiveInsights">ProactiveInsights</h2>
<!-- backwards compatibility -->
<a id="schemaproactiveinsights"></a>
<a id="schema_ProactiveInsights"></a>
<a id="tocSproactiveinsights"></a>
<a id="tocsproactiveinsights"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Severity": {},
    "Status": {},
    "InsightTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "PredictionTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "ServiceCollection": {
      "ServiceNames": {}
    },
    "AssociatedResourceArns": {}
  }
]
```

<h2 id="tocS_ReactiveInsights">ReactiveInsights</h2>
<!-- backwards compatibility -->
<a id="schemareactiveinsights"></a>
<a id="schema_ReactiveInsights"></a>
<a id="tocSreactiveinsights"></a>
<a id="tocsreactiveinsights"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Severity": {},
    "Status": {},
    "InsightTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "ServiceCollection": {
      "ServiceNames": {}
    },
    "AssociatedResourceArns": {}
  }
]
```

<h2 id="tocS_ListMonitoredResourcesFilters">ListMonitoredResourcesFilters</h2>
<!-- backwards compatibility -->
<a id="schemalistmonitoredresourcesfilters"></a>
<a id="schema_ListMonitoredResourcesFilters"></a>
<a id="tocSlistmonitoredresourcesfilters"></a>
<a id="tocslistmonitoredresourcesfilters"></a>

```json
{
  "ResourcePermission": {},
  "ResourceTypeFilters": {}
}
```

 Filters to determine which monitored resources you want to retrieve. You can filter by resource type or resource permission status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourcePermission|object|true|none|none|
|ResourceTypeFilters|object|true|none|none|

<h2 id="tocS_ListMonitoredResourcesMaxResults">ListMonitoredResourcesMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistmonitoredresourcesmaxresults"></a>
<a id="schema_ListMonitoredResourcesMaxResults"></a>
<a id="tocSlistmonitoredresourcesmaxresults"></a>
<a id="tocslistmonitoredresourcesmaxresults"></a>

```json
1
```

<h2 id="tocS_ListMonitoredResourcesRequest">ListMonitoredResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmonitoredresourcesrequest"></a>
<a id="schema_ListMonitoredResourcesRequest"></a>
<a id="tocSlistmonitoredresourcesrequest"></a>
<a id="tocslistmonitoredresourcesrequest"></a>

```json
{
  "Filters": {
    "ResourcePermission": {},
    "ResourceTypeFilters": {}
  },
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_MonitoredResourceIdentifiers">MonitoredResourceIdentifiers</h2>
<!-- backwards compatibility -->
<a id="schemamonitoredresourceidentifiers"></a>
<a id="schema_MonitoredResourceIdentifiers"></a>
<a id="tocSmonitoredresourceidentifiers"></a>
<a id="tocsmonitoredresourceidentifiers"></a>

```json
[
  {
    "MonitoredResourceName": {},
    "Type": {},
    "ResourcePermission": {},
    "LastUpdated": {},
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    }
  }
]
```

<h2 id="tocS_ListNotificationChannelsRequest">ListNotificationChannelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistnotificationchannelsrequest"></a>
<a id="schema_ListNotificationChannelsRequest"></a>
<a id="tocSlistnotificationchannelsrequest"></a>
<a id="tocslistnotificationchannelsrequest"></a>

```json
{
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOrganizationInsightsRequest">ListOrganizationInsightsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistorganizationinsightsrequest"></a>
<a id="schema_ListOrganizationInsightsRequest"></a>
<a id="tocSlistorganizationinsightsrequest"></a>
<a id="tocslistorganizationinsightsrequest"></a>

```json
{
  "StatusFilter": {
    "Ongoing": {
      "Type": {}
    },
    "Closed": {
      "Type": {},
      "EndTimeRange": {
        "FromTime": {},
        "ToTime": {}
      }
    },
    "Any": {
      "Type": {},
      "StartTimeRange": {
        "FromTime": {},
        "ToTime": {}
      }
    }
  },
  "MaxResults": {},
  "AccountIds": {},
  "OrganizationalUnitIds": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatusFilter|[ListInsightsStatusFilter](#schemalistinsightsstatusfilter)|true|none| A filter used by <code>ListInsights</code> to specify which insights to return. |
|MaxResults|object|false|none|none|
|AccountIds|object|false|none|none|
|OrganizationalUnitIds|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ProactiveOrganizationInsights">ProactiveOrganizationInsights</h2>
<!-- backwards compatibility -->
<a id="schemaproactiveorganizationinsights"></a>
<a id="schema_ProactiveOrganizationInsights"></a>
<a id="tocSproactiveorganizationinsights"></a>
<a id="tocsproactiveorganizationinsights"></a>

```json
[
  {
    "Id": {},
    "AccountId": {},
    "OrganizationalUnitId": {},
    "Name": {},
    "Severity": {},
    "Status": {},
    "InsightTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "PredictionTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "ServiceCollection": {
      "ServiceNames": {}
    }
  }
]
```

<h2 id="tocS_ReactiveOrganizationInsights">ReactiveOrganizationInsights</h2>
<!-- backwards compatibility -->
<a id="schemareactiveorganizationinsights"></a>
<a id="schema_ReactiveOrganizationInsights"></a>
<a id="tocSreactiveorganizationinsights"></a>
<a id="tocsreactiveorganizationinsights"></a>

```json
[
  {
    "Id": {},
    "AccountId": {},
    "OrganizationalUnitId": {},
    "Name": {},
    "Severity": {},
    "Status": {},
    "InsightTimeRange": {
      "StartTime": {},
      "EndTime": {}
    },
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "ServiceCollection": {
      "ServiceNames": {}
    }
  }
]
```

<h2 id="tocS_Locale">Locale</h2>
<!-- backwards compatibility -->
<a id="schemalocale"></a>
<a id="schema_Locale"></a>
<a id="tocSlocale"></a>
<a id="tocslocale"></a>

```json
"DE_DE"
```

<h2 id="tocS_ListRecommendationsRequest">ListRecommendationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrecommendationsrequest"></a>
<a id="schema_ListRecommendationsRequest"></a>
<a id="tocSlistrecommendationsrequest"></a>
<a id="tocslistrecommendationsrequest"></a>

```json
{
  "InsightId": {},
  "NextToken": {},
  "Locale": {},
  "AccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsightId|object|true|none|none|
|NextToken|object|false|none|none|
|Locale|object|false|none|none|
|AccountId|object|false|none|none|

<h2 id="tocS_Recommendations">Recommendations</h2>
<!-- backwards compatibility -->
<a id="schemarecommendations"></a>
<a id="schema_Recommendations"></a>
<a id="tocSrecommendations"></a>
<a id="tocsrecommendations"></a>

```json
[
  {
    "Description": {},
    "Link": {},
    "Name": {},
    "Reason": {},
    "RelatedEvents": {},
    "RelatedAnomalies": {},
    "Category": {}
  }
]
```

<h2 id="tocS_LogStreamName">LogStreamName</h2>
<!-- backwards compatibility -->
<a id="schemalogstreamname"></a>
<a id="schema_LogStreamName"></a>
<a id="tocSlogstreamname"></a>
<a id="tocslogstreamname"></a>

```json
"string"
```

<h2 id="tocS_LogAnomalyType">LogAnomalyType</h2>
<!-- backwards compatibility -->
<a id="schemaloganomalytype"></a>
<a id="schema_LogAnomalyType"></a>
<a id="tocSloganomalytype"></a>
<a id="tocsloganomalytype"></a>

```json
"KEYWORD"
```

<h2 id="tocS_LogAnomalyToken">LogAnomalyToken</h2>
<!-- backwards compatibility -->
<a id="schemaloganomalytoken"></a>
<a id="schema_LogAnomalyToken"></a>
<a id="tocSloganomalytoken"></a>
<a id="tocsloganomalytoken"></a>

```json
"string"
```

<h2 id="tocS_LogEventId">LogEventId</h2>
<!-- backwards compatibility -->
<a id="schemalogeventid"></a>
<a id="schema_LogEventId"></a>
<a id="tocSlogeventid"></a>
<a id="tocslogeventid"></a>

```json
"string"
```

<h2 id="tocS_NumberOfLogLinesOccurrences">NumberOfLogLinesOccurrences</h2>
<!-- backwards compatibility -->
<a id="schemanumberofloglinesoccurrences"></a>
<a id="schema_NumberOfLogLinesOccurrences"></a>
<a id="tocSnumberofloglinesoccurrences"></a>
<a id="tocsnumberofloglinesoccurrences"></a>

```json
0
```

<h2 id="tocS_LogAnomalyClass">LogAnomalyClass</h2>
<!-- backwards compatibility -->
<a id="schemaloganomalyclass"></a>
<a id="schema_LogAnomalyClass"></a>
<a id="tocSloganomalyclass"></a>
<a id="tocsloganomalyclass"></a>

```json
{
  "LogStreamName": {},
  "LogAnomalyType": {},
  "LogAnomalyToken": {},
  "LogEventId": {},
  "Explanation": {},
  "NumberOfLogLinesOccurrences": {},
  "LogEventTimestamp": {}
}
```

 Information about an anomalous log event found within a log group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogStreamName|object|false|none|none|
|LogAnomalyType|object|false|none|none|
|LogAnomalyToken|object|false|none|none|
|LogEventId|object|false|none|none|
|Explanation|object|false|none|none|
|NumberOfLogLinesOccurrences|object|false|none|none|
|LogEventTimestamp|object|false|none|none|

<h2 id="tocS_LogAnomalyClasses">LogAnomalyClasses</h2>
<!-- backwards compatibility -->
<a id="schemaloganomalyclasses"></a>
<a id="schema_LogAnomalyClasses"></a>
<a id="tocSloganomalyclasses"></a>
<a id="tocsloganomalyclasses"></a>

```json
[
  {
    "LogStreamName": {},
    "LogAnomalyType": {},
    "LogAnomalyToken": {},
    "LogEventId": {},
    "Explanation": {},
    "NumberOfLogLinesOccurrences": {},
    "LogEventTimestamp": {}
  }
]
```

<h2 id="tocS_LogAnomalyShowcase">LogAnomalyShowcase</h2>
<!-- backwards compatibility -->
<a id="schemaloganomalyshowcase"></a>
<a id="schema_LogAnomalyShowcase"></a>
<a id="tocSloganomalyshowcase"></a>
<a id="tocsloganomalyshowcase"></a>

```json
{
  "LogAnomalyClasses": {}
}
```

 A cluster of similar anomalous log events found within a log group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogAnomalyClasses|object|false|none|none|

<h2 id="tocS_OptInStatus">OptInStatus</h2>
<!-- backwards compatibility -->
<a id="schemaoptinstatus"></a>
<a id="schema_OptInStatus"></a>
<a id="tocSoptinstatus"></a>
<a id="tocsoptinstatus"></a>

```json
"ENABLED"
```

 Specifies if DevOps Guru is enabled to create an Amazon Web Services Systems Manager OpsItem for each created insight.

<h2 id="tocS_LogsAnomalyDetectionIntegration">LogsAnomalyDetectionIntegration</h2>
<!-- backwards compatibility -->
<a id="schemalogsanomalydetectionintegration"></a>
<a id="schema_LogsAnomalyDetectionIntegration"></a>
<a id="tocSlogsanomalydetectionintegration"></a>
<a id="tocslogsanomalydetectionintegration"></a>

```json
{
  "OptInStatus": {}
}
```

 Information about the integration of DevOps Guru with CloudWatch log groups for log anomaly detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OptInStatus|object|false|none|none|

<h2 id="tocS_MetricValue">MetricValue</h2>
<!-- backwards compatibility -->
<a id="schemametricvalue"></a>
<a id="schema_MetricValue"></a>
<a id="tocSmetricvalue"></a>
<a id="tocsmetricvalue"></a>

```json
0
```

<h2 id="tocS_MonitoredResourceName">MonitoredResourceName</h2>
<!-- backwards compatibility -->
<a id="schemamonitoredresourcename"></a>
<a id="schema_MonitoredResourceName"></a>
<a id="tocSmonitoredresourcename"></a>
<a id="tocsmonitoredresourcename"></a>

```json
"string"
```

<h2 id="tocS_MonitoredResourceIdentifier">MonitoredResourceIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemamonitoredresourceidentifier"></a>
<a id="schema_MonitoredResourceIdentifier"></a>
<a id="tocSmonitoredresourceidentifier"></a>
<a id="tocsmonitoredresourceidentifier"></a>

```json
{
  "MonitoredResourceName": {},
  "Type": {},
  "ResourcePermission": {},
  "LastUpdated": {},
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  }
}
```

 Information about the resource that is being monitored, including the name of the resource, the type of resource, and whether or not permission is given to DevOps Guru to access that resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitoredResourceName|object|false|none|none|
|Type|object|false|none|none|
|ResourcePermission|object|false|none|none|
|LastUpdated|object|false|none|none|
|ResourceCollection|[ResourceCollection](#schemaresourcecollection)|false|none| A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |

<h2 id="tocS_NotificationMessageTypes">NotificationMessageTypes</h2>
<!-- backwards compatibility -->
<a id="schemanotificationmessagetypes"></a>
<a id="schema_NotificationMessageTypes"></a>
<a id="tocSnotificationmessagetypes"></a>
<a id="tocsnotificationmessagetypes"></a>

```json
[
  "NEW_INSIGHT"
]
```

<h2 id="tocS_NotificationMessageType">NotificationMessageType</h2>
<!-- backwards compatibility -->
<a id="schemanotificationmessagetype"></a>
<a id="schema_NotificationMessageType"></a>
<a id="tocSnotificationmessagetype"></a>
<a id="tocsnotificationmessagetype"></a>

```json
"NEW_INSIGHT"
```

<h2 id="tocS_OpsCenterIntegration">OpsCenterIntegration</h2>
<!-- backwards compatibility -->
<a id="schemaopscenterintegration"></a>
<a id="schema_OpsCenterIntegration"></a>
<a id="tocSopscenterintegration"></a>
<a id="tocsopscenterintegration"></a>

```json
{
  "OptInStatus": {}
}
```

 Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OptInStatus|object|false|none|none|

<h2 id="tocS_PerformanceInsightsMetricDimension">PerformanceInsightsMetricDimension</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsmetricdimension"></a>
<a id="schema_PerformanceInsightsMetricDimension"></a>
<a id="tocSperformanceinsightsmetricdimension"></a>
<a id="tocsperformanceinsightsmetricdimension"></a>

```json
"string"
```

<h2 id="tocS_PerformanceInsightsMetricGroup">PerformanceInsightsMetricGroup</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsmetricgroup"></a>
<a id="schema_PerformanceInsightsMetricGroup"></a>
<a id="tocSperformanceinsightsmetricgroup"></a>
<a id="tocsperformanceinsightsmetricgroup"></a>

```json
"string"
```

<h2 id="tocS_PerformanceInsightsMetricDimensions">PerformanceInsightsMetricDimensions</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsmetricdimensions"></a>
<a id="schema_PerformanceInsightsMetricDimensions"></a>
<a id="tocSperformanceinsightsmetricdimensions"></a>
<a id="tocsperformanceinsightsmetricdimensions"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PerformanceInsightsMetricLimitInteger">PerformanceInsightsMetricLimitInteger</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsmetriclimitinteger"></a>
<a id="schema_PerformanceInsightsMetricLimitInteger"></a>
<a id="tocSperformanceinsightsmetriclimitinteger"></a>
<a id="tocsperformanceinsightsmetriclimitinteger"></a>

```json
1
```

<h2 id="tocS_PerformanceInsightsMetricDimensionGroup">PerformanceInsightsMetricDimensionGroup</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsmetricdimensiongroup"></a>
<a id="schema_PerformanceInsightsMetricDimensionGroup"></a>
<a id="tocSperformanceinsightsmetricdimensiongroup"></a>
<a id="tocsperformanceinsightsmetricdimensiongroup"></a>

```json
{
  "Group": {},
  "Dimensions": {},
  "Limit": {}
}
```

<p>A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host. </p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>. </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|false|none|none|
|Dimensions|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_PerformanceInsightsMetricDisplayName">PerformanceInsightsMetricDisplayName</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsmetricdisplayname"></a>
<a id="schema_PerformanceInsightsMetricDisplayName"></a>
<a id="tocSperformanceinsightsmetricdisplayname"></a>
<a id="tocsperformanceinsightsmetricdisplayname"></a>

```json
"string"
```

<h2 id="tocS_PerformanceInsightsMetricFilterKey">PerformanceInsightsMetricFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsmetricfilterkey"></a>
<a id="schema_PerformanceInsightsMetricFilterKey"></a>
<a id="tocSperformanceinsightsmetricfilterkey"></a>
<a id="tocsperformanceinsightsmetricfilterkey"></a>

```json
"string"
```

<h2 id="tocS_PerformanceInsightsMetricFilterValue">PerformanceInsightsMetricFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsmetricfiltervalue"></a>
<a id="schema_PerformanceInsightsMetricFilterValue"></a>
<a id="tocSperformanceinsightsmetricfiltervalue"></a>
<a id="tocsperformanceinsightsmetricfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_PerformanceInsightsMetricFilterMap">PerformanceInsightsMetricFilterMap</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsmetricfiltermap"></a>
<a id="schema_PerformanceInsightsMetricFilterMap"></a>
<a id="tocSperformanceinsightsmetricfiltermap"></a>
<a id="tocsperformanceinsightsmetricfiltermap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PerformanceInsightsMetricFilterValue](#schemaperformanceinsightsmetricfiltervalue)|false|none|none|

<h2 id="tocS_PerformanceInsightsMetricName">PerformanceInsightsMetricName</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsmetricname"></a>
<a id="schema_PerformanceInsightsMetricName"></a>
<a id="tocSperformanceinsightsmetricname"></a>
<a id="tocsperformanceinsightsmetricname"></a>

```json
"string"
```

<h2 id="tocS_PerformanceInsightsMetricQuery">PerformanceInsightsMetricQuery</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsmetricquery"></a>
<a id="schema_PerformanceInsightsMetricQuery"></a>
<a id="tocSperformanceinsightsmetricquery"></a>
<a id="tocsperformanceinsightsmetricquery"></a>

```json
{
  "Metric": {},
  "GroupBy": {
    "Group": {},
    "Dimensions": {},
    "Limit": {}
  },
  "Filter": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>A single query to be processed. Use these parameters to query the Performance Insights <code>GetResourceMetrics</code> API to retrieve the metrics for an anomaly. For more information, see <code> <a href="https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetResourceMetrics.html">GetResourceMetrics</a> </code> in the <i>Amazon RDS Performance Insights API Reference</i>.</p> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host. </p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>. </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metric|object|false|none|none|
|GroupBy|object|false|none|none|
|Filter|object|false|none|none|

<h2 id="tocS_PerformanceInsightsMetricUnit">PerformanceInsightsMetricUnit</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsmetricunit"></a>
<a id="schema_PerformanceInsightsMetricUnit"></a>
<a id="tocSperformanceinsightsmetricunit"></a>
<a id="tocsperformanceinsightsmetricunit"></a>

```json
"string"
```

<h2 id="tocS_PerformanceInsightsReferenceDataList">PerformanceInsightsReferenceDataList</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsreferencedatalist"></a>
<a id="schema_PerformanceInsightsReferenceDataList"></a>
<a id="tocSperformanceinsightsreferencedatalist"></a>
<a id="tocsperformanceinsightsreferencedatalist"></a>

```json
[
  {
    "Name": {},
    "ComparisonValues": {
      "ReferenceScalar": {
        "Value": {}
      },
      "ReferenceMetric": {
        "MetricQuery": {
          "Metric": {},
          "GroupBy": {
            "Group": {},
            "Dimensions": {},
            "Limit": {}
          },
          "Filter": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    }
  }
]
```

<h2 id="tocS_PerformanceInsightsStats">PerformanceInsightsStats</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsstats"></a>
<a id="schema_PerformanceInsightsStats"></a>
<a id="tocSperformanceinsightsstats"></a>
<a id="tocsperformanceinsightsstats"></a>

```json
[
  {
    "Type": {},
    "Value": {}
  }
]
```

<h2 id="tocS_PerformanceInsightsMetricsDetail">PerformanceInsightsMetricsDetail</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsmetricsdetail"></a>
<a id="schema_PerformanceInsightsMetricsDetail"></a>
<a id="tocSperformanceinsightsmetricsdetail"></a>
<a id="tocsperformanceinsightsmetricsdetail"></a>

```json
{
  "MetricDisplayName": {},
  "Unit": {},
  "MetricQuery": {
    "Metric": {},
    "GroupBy": {
      "Group": {},
      "Dimensions": {},
      "Limit": {}
    },
    "Filter": {
      "property1": "string",
      "property2": "string"
    }
  },
  "ReferenceData": {},
  "StatsAtAnomaly": {},
  "StatsAtBaseline": {}
}
```

<p>Details about Performance Insights metrics.</p> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host. </p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>. </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricDisplayName|object|false|none|none|
|Unit|object|false|none|none|
|MetricQuery|object|false|none|none|
|ReferenceData|object|false|none|none|
|StatsAtAnomaly|object|false|none|none|
|StatsAtBaseline|object|false|none|none|

<h2 id="tocS_PerformanceInsightsReferenceScalar">PerformanceInsightsReferenceScalar</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsreferencescalar"></a>
<a id="schema_PerformanceInsightsReferenceScalar"></a>
<a id="tocSperformanceinsightsreferencescalar"></a>
<a id="tocsperformanceinsightsreferencescalar"></a>

```json
{
  "Value": {}
}
```

A reference value to compare Performance Insights metrics against to determine if the metrics demonstrate anomalous behavior.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|

<h2 id="tocS_PerformanceInsightsReferenceMetric">PerformanceInsightsReferenceMetric</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsreferencemetric"></a>
<a id="schema_PerformanceInsightsReferenceMetric"></a>
<a id="tocSperformanceinsightsreferencemetric"></a>
<a id="tocsperformanceinsightsreferencemetric"></a>

```json
{
  "MetricQuery": {
    "Metric": {},
    "GroupBy": {
      "Group": {},
      "Dimensions": {},
      "Limit": {}
    },
    "Filter": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Information about a reference metric used to evaluate Performance Insights.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricQuery|object|false|none|none|

<h2 id="tocS_PerformanceInsightsReferenceComparisonValues">PerformanceInsightsReferenceComparisonValues</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsreferencecomparisonvalues"></a>
<a id="schema_PerformanceInsightsReferenceComparisonValues"></a>
<a id="tocSperformanceinsightsreferencecomparisonvalues"></a>
<a id="tocsperformanceinsightsreferencecomparisonvalues"></a>

```json
{
  "ReferenceScalar": {
    "Value": {}
  },
  "ReferenceMetric": {
    "MetricQuery": {
      "Metric": {},
      "GroupBy": {
        "Group": {},
        "Dimensions": {},
        "Limit": {}
      },
      "Filter": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

Reference scalar values and other metrics that DevOps Guru displays on a graph in its console along with the actual metrics it analyzed. Compare these reference values to your actual metrics to help you understand anomalous behavior that DevOps Guru detected.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReferenceScalar|object|false|none|none|
|ReferenceMetric|object|false|none|none|

<h2 id="tocS_PerformanceInsightsReferenceName">PerformanceInsightsReferenceName</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsreferencename"></a>
<a id="schema_PerformanceInsightsReferenceName"></a>
<a id="tocSperformanceinsightsreferencename"></a>
<a id="tocsperformanceinsightsreferencename"></a>

```json
"string"
```

<h2 id="tocS_PerformanceInsightsReferenceData">PerformanceInsightsReferenceData</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsreferencedata"></a>
<a id="schema_PerformanceInsightsReferenceData"></a>
<a id="tocSperformanceinsightsreferencedata"></a>
<a id="tocsperformanceinsightsreferencedata"></a>

```json
{
  "Name": {},
  "ComparisonValues": {
    "ReferenceScalar": {
      "Value": {}
    },
    "ReferenceMetric": {
      "MetricQuery": {
        "Metric": {},
        "GroupBy": {
          "Group": {},
          "Dimensions": {},
          "Limit": {}
        },
        "Filter": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  }
}
```

Reference data used to evaluate Performance Insights to determine if its performance is anomalous or not.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|ComparisonValues|object|false|none|none|

<h2 id="tocS_PerformanceInsightsValueDouble">PerformanceInsightsValueDouble</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsvaluedouble"></a>
<a id="schema_PerformanceInsightsValueDouble"></a>
<a id="tocSperformanceinsightsvaluedouble"></a>
<a id="tocsperformanceinsightsvaluedouble"></a>

```json
0
```

<h2 id="tocS_PerformanceInsightsStatType">PerformanceInsightsStatType</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsstattype"></a>
<a id="schema_PerformanceInsightsStatType"></a>
<a id="tocSperformanceinsightsstattype"></a>
<a id="tocsperformanceinsightsstattype"></a>

```json
"string"
```

<h2 id="tocS_PerformanceInsightsStat">PerformanceInsightsStat</h2>
<!-- backwards compatibility -->
<a id="schemaperformanceinsightsstat"></a>
<a id="schema_PerformanceInsightsStat"></a>
<a id="tocSperformanceinsightsstat"></a>
<a id="tocsperformanceinsightsstat"></a>

```json
{
  "Type": {},
  "Value": {}
}
```

A statistic in a Performance Insights collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_PredictionTimeRange">PredictionTimeRange</h2>
<!-- backwards compatibility -->
<a id="schemapredictiontimerange"></a>
<a id="schema_PredictionTimeRange"></a>
<a id="tocSpredictiontimerange"></a>
<a id="tocspredictiontimerange"></a>

```json
{
  "StartTime": {},
  "EndTime": {}
}
```

 The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|true|none|none|
|EndTime|object|false|none|none|

<h2 id="tocS_ProactiveAnomalySummary">ProactiveAnomalySummary</h2>
<!-- backwards compatibility -->
<a id="schemaproactiveanomalysummary"></a>
<a id="schema_ProactiveAnomalySummary"></a>
<a id="tocSproactiveanomalysummary"></a>
<a id="tocsproactiveanomalysummary"></a>

```json
{
  "Id": {},
  "Severity": {},
  "Status": {},
  "UpdateTime": {},
  "AnomalyTimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "AnomalyReportedTimeRange": {
    "OpenTime": {},
    "CloseTime": {}
  },
  "PredictionTimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "SourceDetails": {
    "CloudWatchMetrics": {},
    "PerformanceInsightsMetrics": {}
  },
  "AssociatedInsightId": {},
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
  "Limit": {},
  "SourceMetadata": {
    "Source": {},
    "SourceResourceName": {},
    "SourceResourceType": {}
  },
  "AnomalyResources": {},
  "Description": {}
}
```

Details about a proactive anomaly. This object is returned by <code>DescribeAnomaly.</code>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Severity|object|false|none|none|
|Status|object|false|none|none|
|UpdateTime|object|false|none|none|
|AnomalyTimeRange|[AnomalyTimeRange](#schemaanomalytimerange)|false|none| A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies the time range when DevOps Guru opens and then closes an anomaly. |
|AnomalyReportedTimeRange|object|false|none|none|
|PredictionTimeRange|[PredictionTimeRange](#schemapredictiontimerange)|false|none| The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur. |
|SourceDetails|object|false|none|none|
|AssociatedInsightId|object|false|none|none|
|ResourceCollection|[ResourceCollection](#schemaresourcecollection)|false|none| A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
|Limit|object|false|none|none|
|SourceMetadata|object|false|none|none|
|AnomalyResources|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_SsmOpsItemId">SsmOpsItemId</h2>
<!-- backwards compatibility -->
<a id="schemassmopsitemid"></a>
<a id="schema_SsmOpsItemId"></a>
<a id="tocSssmopsitemid"></a>
<a id="tocsssmopsitemid"></a>

```json
"string"
```

<h2 id="tocS_ProactiveInsightSummary">ProactiveInsightSummary</h2>
<!-- backwards compatibility -->
<a id="schemaproactiveinsightsummary"></a>
<a id="schema_ProactiveInsightSummary"></a>
<a id="tocSproactiveinsightsummary"></a>
<a id="tocsproactiveinsightsummary"></a>

```json
{
  "Id": {},
  "Name": {},
  "Severity": {},
  "Status": {},
  "InsightTimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "PredictionTimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
  "ServiceCollection": {
    "ServiceNames": {}
  },
  "AssociatedResourceArns": {}
}
```

Details about a proactive insight. This object is returned by <code>DescribeInsight.</code>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Severity|object|false|none|none|
|Status|object|false|none|none|
|InsightTimeRange|[InsightTimeRange](#schemainsighttimerange)|false|none| A time ranged that specifies when the observed behavior in an insight started and ended. |
|PredictionTimeRange|[PredictionTimeRange](#schemapredictiontimerange)|false|none| The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur. |
|ResourceCollection|[ResourceCollection](#schemaresourcecollection)|false|none| A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
|ServiceCollection|object|false|none|none|
|AssociatedResourceArns|object|false|none|none|

<h2 id="tocS_ProactiveOrganizationInsightSummary">ProactiveOrganizationInsightSummary</h2>
<!-- backwards compatibility -->
<a id="schemaproactiveorganizationinsightsummary"></a>
<a id="schema_ProactiveOrganizationInsightSummary"></a>
<a id="tocSproactiveorganizationinsightsummary"></a>
<a id="tocsproactiveorganizationinsightsummary"></a>

```json
{
  "Id": {},
  "AccountId": {},
  "OrganizationalUnitId": {},
  "Name": {},
  "Severity": {},
  "Status": {},
  "InsightTimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "PredictionTimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
  "ServiceCollection": {
    "ServiceNames": {}
  }
}
```

Details about a proactive insight. This object is returned by <code>DescribeInsight</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|AccountId|object|false|none|none|
|OrganizationalUnitId|object|false|none|none|
|Name|object|false|none|none|
|Severity|object|false|none|none|
|Status|object|false|none|none|
|InsightTimeRange|[InsightTimeRange](#schemainsighttimerange)|false|none| A time ranged that specifies when the observed behavior in an insight started and ended. |
|PredictionTimeRange|[PredictionTimeRange](#schemapredictiontimerange)|false|none| The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur. |
|ResourceCollection|[ResourceCollection](#schemaresourcecollection)|false|none| A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
|ServiceCollection|[ServiceCollection](#schemaservicecollection)|false|none|A collection of the names of Amazon Web Services services.|

<h2 id="tocS_PutFeedbackRequest">PutFeedbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputfeedbackrequest"></a>
<a id="schema_PutFeedbackRequest"></a>
<a id="tocSputfeedbackrequest"></a>
<a id="tocsputfeedbackrequest"></a>

```json
{
  "InsightFeedback": {
    "Id": {},
    "Feedback": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsightFeedback|object|false|none|none|

<h2 id="tocS_ReactiveAnomalySummary">ReactiveAnomalySummary</h2>
<!-- backwards compatibility -->
<a id="schemareactiveanomalysummary"></a>
<a id="schema_ReactiveAnomalySummary"></a>
<a id="tocSreactiveanomalysummary"></a>
<a id="tocsreactiveanomalysummary"></a>

```json
{
  "Id": {},
  "Severity": {},
  "Status": {},
  "AnomalyTimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "AnomalyReportedTimeRange": {
    "OpenTime": {},
    "CloseTime": {}
  },
  "SourceDetails": {
    "CloudWatchMetrics": {},
    "PerformanceInsightsMetrics": {}
  },
  "AssociatedInsightId": {},
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
  "Type": {},
  "Name": {},
  "Description": {},
  "CausalAnomalyId": {},
  "AnomalyResources": {}
}
```

Details about a reactive anomaly. This object is returned by <code>DescribeAnomaly.</code>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Severity|object|false|none|none|
|Status|object|false|none|none|
|AnomalyTimeRange|[AnomalyTimeRange](#schemaanomalytimerange)|false|none| A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies the time range when DevOps Guru opens and then closes an anomaly. |
|AnomalyReportedTimeRange|object|false|none|none|
|SourceDetails|object|false|none|none|
|AssociatedInsightId|object|false|none|none|
|ResourceCollection|[ResourceCollection](#schemaresourcecollection)|false|none| A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
|Type|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|CausalAnomalyId|object|false|none|none|
|AnomalyResources|object|false|none|none|

<h2 id="tocS_ReactiveInsightSummary">ReactiveInsightSummary</h2>
<!-- backwards compatibility -->
<a id="schemareactiveinsightsummary"></a>
<a id="schema_ReactiveInsightSummary"></a>
<a id="tocSreactiveinsightsummary"></a>
<a id="tocsreactiveinsightsummary"></a>

```json
{
  "Id": {},
  "Name": {},
  "Severity": {},
  "Status": {},
  "InsightTimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
  "ServiceCollection": {
    "ServiceNames": {}
  },
  "AssociatedResourceArns": {}
}
```

 Information about a reactive insight. This object is returned by <code>DescribeInsight.</code>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Severity|object|false|none|none|
|Status|object|false|none|none|
|InsightTimeRange|[InsightTimeRange](#schemainsighttimerange)|false|none| A time ranged that specifies when the observed behavior in an insight started and ended. |
|ResourceCollection|[ResourceCollection](#schemaresourcecollection)|false|none| A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
|ServiceCollection|object|false|none|none|
|AssociatedResourceArns|object|false|none|none|

<h2 id="tocS_ReactiveOrganizationInsightSummary">ReactiveOrganizationInsightSummary</h2>
<!-- backwards compatibility -->
<a id="schemareactiveorganizationinsightsummary"></a>
<a id="schema_ReactiveOrganizationInsightSummary"></a>
<a id="tocSreactiveorganizationinsightsummary"></a>
<a id="tocsreactiveorganizationinsightsummary"></a>

```json
{
  "Id": {},
  "AccountId": {},
  "OrganizationalUnitId": {},
  "Name": {},
  "Severity": {},
  "Status": {},
  "InsightTimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
  "ServiceCollection": {
    "ServiceNames": {}
  }
}
```

Information about a reactive insight. This object is returned by <code>DescribeInsight</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|AccountId|object|false|none|none|
|OrganizationalUnitId|object|false|none|none|
|Name|object|false|none|none|
|Severity|object|false|none|none|
|Status|object|false|none|none|
|InsightTimeRange|[InsightTimeRange](#schemainsighttimerange)|false|none| A time ranged that specifies when the observed behavior in an insight started and ended. |
|ResourceCollection|[ResourceCollection](#schemaresourcecollection)|false|none| A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
|ServiceCollection|[ServiceCollection](#schemaservicecollection)|false|none|A collection of the names of Amazon Web Services services.|

<h2 id="tocS_RecommendationDescription">RecommendationDescription</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationdescription"></a>
<a id="schema_RecommendationDescription"></a>
<a id="tocSrecommendationdescription"></a>
<a id="tocsrecommendationdescription"></a>

```json
"string"
```

<h2 id="tocS_RecommendationLink">RecommendationLink</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationlink"></a>
<a id="schema_RecommendationLink"></a>
<a id="tocSrecommendationlink"></a>
<a id="tocsrecommendationlink"></a>

```json
"string"
```

<h2 id="tocS_RecommendationName">RecommendationName</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationname"></a>
<a id="schema_RecommendationName"></a>
<a id="tocSrecommendationname"></a>
<a id="tocsrecommendationname"></a>

```json
"string"
```

<h2 id="tocS_RecommendationReason">RecommendationReason</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationreason"></a>
<a id="schema_RecommendationReason"></a>
<a id="tocSrecommendationreason"></a>
<a id="tocsrecommendationreason"></a>

```json
"string"
```

<h2 id="tocS_RecommendationRelatedEvents">RecommendationRelatedEvents</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationrelatedevents"></a>
<a id="schema_RecommendationRelatedEvents"></a>
<a id="tocSrecommendationrelatedevents"></a>
<a id="tocsrecommendationrelatedevents"></a>

```json
[
  {
    "Name": {},
    "Resources": {}
  }
]
```

<h2 id="tocS_RecommendationRelatedAnomalies">RecommendationRelatedAnomalies</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationrelatedanomalies"></a>
<a id="schema_RecommendationRelatedAnomalies"></a>
<a id="tocSrecommendationrelatedanomalies"></a>
<a id="tocsrecommendationrelatedanomalies"></a>

```json
[
  {
    "Resources": {},
    "SourceDetails": {},
    "AnomalyId": {}
  }
]
```

<h2 id="tocS_RecommendationCategory">RecommendationCategory</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationcategory"></a>
<a id="schema_RecommendationCategory"></a>
<a id="tocSrecommendationcategory"></a>
<a id="tocsrecommendationcategory"></a>

```json
"string"
```

<h2 id="tocS_Recommendation">Recommendation</h2>
<!-- backwards compatibility -->
<a id="schemarecommendation"></a>
<a id="schema_Recommendation"></a>
<a id="tocSrecommendation"></a>
<a id="tocsrecommendation"></a>

```json
{
  "Description": {},
  "Link": {},
  "Name": {},
  "Reason": {},
  "RelatedEvents": {},
  "RelatedAnomalies": {},
  "Category": {}
}
```

 Recommendation information to help you remediate detected anomalous behavior that generated an insight.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Link|object|false|none|none|
|Name|object|false|none|none|
|Reason|object|false|none|none|
|RelatedEvents|object|false|none|none|
|RelatedAnomalies|object|false|none|none|
|Category|object|false|none|none|

<h2 id="tocS_RecommendationRelatedAnomaly">RecommendationRelatedAnomaly</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationrelatedanomaly"></a>
<a id="schema_RecommendationRelatedAnomaly"></a>
<a id="tocSrecommendationrelatedanomaly"></a>
<a id="tocsrecommendationrelatedanomaly"></a>

```json
{
  "Resources": {},
  "SourceDetails": {},
  "AnomalyId": {}
}
```

 Information about an anomaly that is related to a recommendation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Resources|object|false|none|none|
|SourceDetails|object|false|none|none|
|AnomalyId|object|false|none|none|

<h2 id="tocS_RecommendationRelatedAnomalyResources">RecommendationRelatedAnomalyResources</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationrelatedanomalyresources"></a>
<a id="schema_RecommendationRelatedAnomalyResources"></a>
<a id="tocSrecommendationrelatedanomalyresources"></a>
<a id="tocsrecommendationrelatedanomalyresources"></a>

```json
[
  {
    "Name": {},
    "Type": {}
  }
]
```

<h2 id="tocS_RelatedAnomalySourceDetails">RelatedAnomalySourceDetails</h2>
<!-- backwards compatibility -->
<a id="schemarelatedanomalysourcedetails"></a>
<a id="schema_RelatedAnomalySourceDetails"></a>
<a id="tocSrelatedanomalysourcedetails"></a>
<a id="tocsrelatedanomalysourcedetails"></a>

```json
[
  {
    "CloudWatchMetrics": {}
  }
]
```

<h2 id="tocS_RecommendationRelatedAnomalyResourceName">RecommendationRelatedAnomalyResourceName</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationrelatedanomalyresourcename"></a>
<a id="schema_RecommendationRelatedAnomalyResourceName"></a>
<a id="tocSrecommendationrelatedanomalyresourcename"></a>
<a id="tocsrecommendationrelatedanomalyresourcename"></a>

```json
"string"
```

<h2 id="tocS_RecommendationRelatedAnomalyResourceType">RecommendationRelatedAnomalyResourceType</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationrelatedanomalyresourcetype"></a>
<a id="schema_RecommendationRelatedAnomalyResourceType"></a>
<a id="tocSrecommendationrelatedanomalyresourcetype"></a>
<a id="tocsrecommendationrelatedanomalyresourcetype"></a>

```json
"string"
```

<h2 id="tocS_RecommendationRelatedAnomalyResource">RecommendationRelatedAnomalyResource</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationrelatedanomalyresource"></a>
<a id="schema_RecommendationRelatedAnomalyResource"></a>
<a id="tocSrecommendationrelatedanomalyresource"></a>
<a id="tocsrecommendationrelatedanomalyresource"></a>

```json
{
  "Name": {},
  "Type": {}
}
```

 Information about a resource in which DevOps Guru detected anomalous behavior.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_RecommendationRelatedCloudWatchMetricsSourceDetails">RecommendationRelatedCloudWatchMetricsSourceDetails</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationrelatedcloudwatchmetricssourcedetails"></a>
<a id="schema_RecommendationRelatedCloudWatchMetricsSourceDetails"></a>
<a id="tocSrecommendationrelatedcloudwatchmetricssourcedetails"></a>
<a id="tocsrecommendationrelatedcloudwatchmetricssourcedetails"></a>

```json
[
  {
    "MetricName": {},
    "Namespace": {}
  }
]
```

<h2 id="tocS_RecommendationRelatedAnomalySourceDetail">RecommendationRelatedAnomalySourceDetail</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationrelatedanomalysourcedetail"></a>
<a id="schema_RecommendationRelatedAnomalySourceDetail"></a>
<a id="tocSrecommendationrelatedanomalysourcedetail"></a>
<a id="tocsrecommendationrelatedanomalysourcedetail"></a>

```json
{
  "CloudWatchMetrics": {}
}
```

 Contains an array of <code>RecommendationRelatedCloudWatchMetricsSourceDetail</code> objects that contain the name and namespace of an Amazon CloudWatch metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudWatchMetrics|object|false|none|none|

<h2 id="tocS_RecommendationRelatedCloudWatchMetricsSourceMetricName">RecommendationRelatedCloudWatchMetricsSourceMetricName</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationrelatedcloudwatchmetricssourcemetricname"></a>
<a id="schema_RecommendationRelatedCloudWatchMetricsSourceMetricName"></a>
<a id="tocSrecommendationrelatedcloudwatchmetricssourcemetricname"></a>
<a id="tocsrecommendationrelatedcloudwatchmetricssourcemetricname"></a>

```json
"string"
```

<h2 id="tocS_RecommendationRelatedCloudWatchMetricsSourceNamespace">RecommendationRelatedCloudWatchMetricsSourceNamespace</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationrelatedcloudwatchmetricssourcenamespace"></a>
<a id="schema_RecommendationRelatedCloudWatchMetricsSourceNamespace"></a>
<a id="tocSrecommendationrelatedcloudwatchmetricssourcenamespace"></a>
<a id="tocsrecommendationrelatedcloudwatchmetricssourcenamespace"></a>

```json
"string"
```

<h2 id="tocS_RecommendationRelatedCloudWatchMetricsSourceDetail">RecommendationRelatedCloudWatchMetricsSourceDetail</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationrelatedcloudwatchmetricssourcedetail"></a>
<a id="schema_RecommendationRelatedCloudWatchMetricsSourceDetail"></a>
<a id="tocSrecommendationrelatedcloudwatchmetricssourcedetail"></a>
<a id="tocsrecommendationrelatedcloudwatchmetricssourcedetail"></a>

```json
{
  "MetricName": {},
  "Namespace": {}
}
```

 Information about an Amazon CloudWatch metric that is analyzed by DevOps Guru. It is one of many analyzed metrics that are used to generate insights.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricName|object|false|none|none|
|Namespace|object|false|none|none|

<h2 id="tocS_RecommendationRelatedEventName">RecommendationRelatedEventName</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationrelatedeventname"></a>
<a id="schema_RecommendationRelatedEventName"></a>
<a id="tocSrecommendationrelatedeventname"></a>
<a id="tocsrecommendationrelatedeventname"></a>

```json
"string"
```

<h2 id="tocS_RecommendationRelatedEventResources">RecommendationRelatedEventResources</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationrelatedeventresources"></a>
<a id="schema_RecommendationRelatedEventResources"></a>
<a id="tocSrecommendationrelatedeventresources"></a>
<a id="tocsrecommendationrelatedeventresources"></a>

```json
[
  {
    "Name": {},
    "Type": {}
  }
]
```

<h2 id="tocS_RecommendationRelatedEvent">RecommendationRelatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationrelatedevent"></a>
<a id="schema_RecommendationRelatedEvent"></a>
<a id="tocSrecommendationrelatedevent"></a>
<a id="tocsrecommendationrelatedevent"></a>

```json
{
  "Name": {},
  "Resources": {}
}
```

 Information about an event that is related to a recommendation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Resources|object|false|none|none|

<h2 id="tocS_RecommendationRelatedEventResourceName">RecommendationRelatedEventResourceName</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationrelatedeventresourcename"></a>
<a id="schema_RecommendationRelatedEventResourceName"></a>
<a id="tocSrecommendationrelatedeventresourcename"></a>
<a id="tocsrecommendationrelatedeventresourcename"></a>

```json
"string"
```

<h2 id="tocS_RecommendationRelatedEventResourceType">RecommendationRelatedEventResourceType</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationrelatedeventresourcetype"></a>
<a id="schema_RecommendationRelatedEventResourceType"></a>
<a id="tocSrecommendationrelatedeventresourcetype"></a>
<a id="tocsrecommendationrelatedeventresourcetype"></a>

```json
"string"
```

<h2 id="tocS_RecommendationRelatedEventResource">RecommendationRelatedEventResource</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationrelatedeventresource"></a>
<a id="schema_RecommendationRelatedEventResource"></a>
<a id="tocSrecommendationrelatedeventresource"></a>
<a id="tocsrecommendationrelatedeventresource"></a>

```json
{
  "Name": {},
  "Type": {}
}
```

 Information about an Amazon Web Services resource that emitted and event that is related to a recommendation in an insight.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_RemoveNotificationChannelRequest">RemoveNotificationChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovenotificationchannelrequest"></a>
<a id="schema_RemoveNotificationChannelRequest"></a>
<a id="tocSremovenotificationchannelrequest"></a>
<a id="tocsremovenotificationchannelrequest"></a>

```json
{}
```

<h2 id="tocS_TagCollections">TagCollections</h2>
<!-- backwards compatibility -->
<a id="schematagcollections"></a>
<a id="schema_TagCollections"></a>
<a id="tocStagcollections"></a>
<a id="tocstagcollections"></a>

```json
[
  {
    "AppBoundaryKey": {},
    "TagValues": {}
  }
]
```

<h2 id="tocS_TagCollectionFilters">TagCollectionFilters</h2>
<!-- backwards compatibility -->
<a id="schematagcollectionfilters"></a>
<a id="schema_TagCollectionFilters"></a>
<a id="tocStagcollectionfilters"></a>
<a id="tocstagcollectionfilters"></a>

```json
[
  {
    "AppBoundaryKey": {},
    "TagValues": {}
  }
]
```

<h2 id="tocS_ResourceTypeFilter">ResourceTypeFilter</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetypefilter"></a>
<a id="schema_ResourceTypeFilter"></a>
<a id="tocSresourcetypefilter"></a>
<a id="tocsresourcetypefilter"></a>

```json
"LOG_GROUPS"
```

<h2 id="tocS_SearchInsightsAccountIdList">SearchInsightsAccountIdList</h2>
<!-- backwards compatibility -->
<a id="schemasearchinsightsaccountidlist"></a>
<a id="schema_SearchInsightsAccountIdList"></a>
<a id="tocSsearchinsightsaccountidlist"></a>
<a id="tocssearchinsightsaccountidlist"></a>

```json
[
  "stringstring"
]
```

<h2 id="tocS_SearchInsightsFilters">SearchInsightsFilters</h2>
<!-- backwards compatibility -->
<a id="schemasearchinsightsfilters"></a>
<a id="schema_SearchInsightsFilters"></a>
<a id="tocSsearchinsightsfilters"></a>
<a id="tocssearchinsightsfilters"></a>

```json
{
  "Severities": {},
  "Statuses": {},
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
  "ServiceCollection": {
    "ServiceNames": {}
  }
}
```

Specifies values used to filter responses when searching for insights. You can use a <code>ResourceCollection</code>, <code>ServiceCollection</code>, array of severities, and an array of status values. Each filter type contains one or more values to search for. If you specify multiple filter types, the filter types are joined with an <code>AND</code>, and the request returns only results that match all of the specified filters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Severities|object|false|none|none|
|Statuses|object|false|none|none|
|ResourceCollection|[ResourceCollection](#schemaresourcecollection)|false|none| A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
|ServiceCollection|object|false|none|none|

<h2 id="tocS_SearchInsightsMaxResults">SearchInsightsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemasearchinsightsmaxresults"></a>
<a id="schema_SearchInsightsMaxResults"></a>
<a id="tocSsearchinsightsmaxresults"></a>
<a id="tocssearchinsightsmaxresults"></a>

```json
1
```

<h2 id="tocS_SearchInsightsRequest">SearchInsightsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchinsightsrequest"></a>
<a id="schema_SearchInsightsRequest"></a>
<a id="tocSsearchinsightsrequest"></a>
<a id="tocssearchinsightsrequest"></a>

```json
{
  "StartTimeRange": {
    "FromTime": {},
    "ToTime": {}
  },
  "Filters": {
    "Severities": {},
    "Statuses": {},
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "ServiceCollection": {
      "ServiceNames": {}
    }
  },
  "MaxResults": {},
  "NextToken": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTimeRange|object|true|none|none|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Type|object|true|none|none|

<h2 id="tocS_SearchOrganizationInsightsFilters">SearchOrganizationInsightsFilters</h2>
<!-- backwards compatibility -->
<a id="schemasearchorganizationinsightsfilters"></a>
<a id="schema_SearchOrganizationInsightsFilters"></a>
<a id="tocSsearchorganizationinsightsfilters"></a>
<a id="tocssearchorganizationinsightsfilters"></a>

```json
{
  "Severities": {},
  "Statuses": {},
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
  "ServiceCollection": {
    "ServiceNames": {}
  }
}
```

 Filters you can use to specify which events are returned when <code>ListEvents</code> is called.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Severities|object|false|none|none|
|Statuses|object|false|none|none|
|ResourceCollection|[ResourceCollection](#schemaresourcecollection)|false|none| A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
|ServiceCollection|[ServiceCollection](#schemaservicecollection)|false|none|A collection of the names of Amazon Web Services services.|

<h2 id="tocS_SearchOrganizationInsightsMaxResults">SearchOrganizationInsightsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemasearchorganizationinsightsmaxresults"></a>
<a id="schema_SearchOrganizationInsightsMaxResults"></a>
<a id="tocSsearchorganizationinsightsmaxresults"></a>
<a id="tocssearchorganizationinsightsmaxresults"></a>

```json
1
```

<h2 id="tocS_SearchOrganizationInsightsRequest">SearchOrganizationInsightsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchorganizationinsightsrequest"></a>
<a id="schema_SearchOrganizationInsightsRequest"></a>
<a id="tocSsearchorganizationinsightsrequest"></a>
<a id="tocssearchorganizationinsightsrequest"></a>

```json
{
  "AccountIds": {},
  "StartTimeRange": {
    "FromTime": {},
    "ToTime": {}
  },
  "Filters": {
    "Severities": {},
    "Statuses": {},
    "ResourceCollection": {
      "CloudFormation": {
        "StackNames": {}
      },
      "Tags": {}
    },
    "ServiceCollection": {
      "ServiceNames": {}
    }
  },
  "MaxResults": {},
  "NextToken": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|true|none|none|
|StartTimeRange|[StartTimeRange](#schemastarttimerange)|true|none| A time range used to specify when the behavior of an insight or anomaly started. |
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Type|object|true|none|none|

<h2 id="tocS_ServiceNames">ServiceNames</h2>
<!-- backwards compatibility -->
<a id="schemaservicenames"></a>
<a id="schema_ServiceNames"></a>
<a id="tocSservicenames"></a>
<a id="tocsservicenames"></a>

```json
[
  "API_GATEWAY"
]
```

<h2 id="tocS_ServiceName">ServiceName</h2>
<!-- backwards compatibility -->
<a id="schemaservicename"></a>
<a id="schema_ServiceName"></a>
<a id="tocSservicename"></a>
<a id="tocsservicename"></a>

```json
"API_GATEWAY"
```

<h2 id="tocS_ServiceInsightHealth">ServiceInsightHealth</h2>
<!-- backwards compatibility -->
<a id="schemaserviceinsighthealth"></a>
<a id="schema_ServiceInsightHealth"></a>
<a id="tocSserviceinsighthealth"></a>
<a id="tocsserviceinsighthealth"></a>

```json
{
  "OpenProactiveInsights": {},
  "OpenReactiveInsights": {}
}
```

Contains the number of open proactive and reactive insights in an analyzed Amazon Web Services service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpenProactiveInsights|object|false|none|none|
|OpenReactiveInsights|object|false|none|none|

<h2 id="tocS_ServiceHealth">ServiceHealth</h2>
<!-- backwards compatibility -->
<a id="schemaservicehealth"></a>
<a id="schema_ServiceHealth"></a>
<a id="tocSservicehealth"></a>
<a id="tocsservicehealth"></a>

```json
{
  "ServiceName": {},
  "Insight": {
    "OpenProactiveInsights": {},
    "OpenReactiveInsights": {}
  },
  "AnalyzedResourceCount": {}
}
```

Represents the health of an Amazon Web Services service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceName|object|false|none|none|
|Insight|object|false|none|none|
|AnalyzedResourceCount|object|false|none|none|

<h2 id="tocS_ServiceResourceCost">ServiceResourceCost</h2>
<!-- backwards compatibility -->
<a id="schemaserviceresourcecost"></a>
<a id="schema_ServiceResourceCost"></a>
<a id="tocSserviceresourcecost"></a>
<a id="tocsserviceresourcecost"></a>

```json
{
  "Type": {},
  "State": {},
  "Count": {},
  "UnitCost": {},
  "Cost": {}
}
```

An object that contains information about the estimated monthly cost to analyze an Amazon Web Services resource. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|State|object|false|none|none|
|Count|object|false|none|none|
|UnitCost|object|false|none|none|
|Cost|object|false|none|none|

<h2 id="tocS_TopicArn">TopicArn</h2>
<!-- backwards compatibility -->
<a id="schematopicarn"></a>
<a id="schema_TopicArn"></a>
<a id="tocStopicarn"></a>
<a id="tocstopicarn"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_StartCostEstimationRequest">StartCostEstimationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartcostestimationrequest"></a>
<a id="schema_StartCostEstimationRequest"></a>
<a id="tocSstartcostestimationrequest"></a>
<a id="tocsstartcostestimationrequest"></a>

```json
{
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  },
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceCollection|object|true|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_TagValues">TagValues</h2>
<!-- backwards compatibility -->
<a id="schematagvalues"></a>
<a id="schema_TagValues"></a>
<a id="tocStagvalues"></a>
<a id="tocstagvalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagCollection">TagCollection</h2>
<!-- backwards compatibility -->
<a id="schematagcollection"></a>
<a id="schema_TagCollection"></a>
<a id="tocStagcollection"></a>
<a id="tocstagcollection"></a>

```json
{
  "AppBoundaryKey": {},
  "TagValues": {}
}
```

<p>A collection of Amazon Web Services tags.</p> <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging best practices</a> whitepaper. </p> <p>Each Amazon Web Services tag has two parts. </p> <ul> <li> <p>A tag <i>key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag <i>keys</i> are case-sensitive.</p> </li> <li> <p>An optional field known as a tag <i>value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag <i>value</i> is the same as using an empty string. Like tag <i>keys</i>, tag <i>values</i> are case-sensitive.</p> </li> </ul> <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p> <important> <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the prefix <code>Devops-guru-</code>. The tag <i>key</i> might be <code>DevOps-Guru-deployment-application</code> or <code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive. For example, DevOps Guru works with a <i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named <code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your application might be <code>Devops-Guru-production-application/RDS</code> or <code>Devops-Guru-production-application/containers</code>.</p> </important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppBoundaryKey|object|true|none|none|
|TagValues|object|true|none|none|

<h2 id="tocS_TagCollectionFilter">TagCollectionFilter</h2>
<!-- backwards compatibility -->
<a id="schematagcollectionfilter"></a>
<a id="schema_TagCollectionFilter"></a>
<a id="tocStagcollectionfilter"></a>
<a id="tocstagcollectionfilter"></a>

```json
{
  "AppBoundaryKey": {},
  "TagValues": {}
}
```

A collection of Amazon Web Services tags used to filter insights. This is used to return insights generated from only resources that contain the tags in the tag collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppBoundaryKey|object|true|none|none|
|TagValues|object|true|none|none|

<h2 id="tocS_TagCostEstimationResourceCollectionFilter">TagCostEstimationResourceCollectionFilter</h2>
<!-- backwards compatibility -->
<a id="schematagcostestimationresourcecollectionfilter"></a>
<a id="schema_TagCostEstimationResourceCollectionFilter"></a>
<a id="tocStagcostestimationresourcecollectionfilter"></a>
<a id="tocstagcostestimationresourcecollectionfilter"></a>

```json
{
  "AppBoundaryKey": {},
  "TagValues": {}
}
```

Information about a collection of Amazon Web Services resources that are identified by an Amazon Web Services tag. This collection of resources is used to create a monthly cost estimate for DevOps Guru to analyze Amazon Web Services resources. The maximum number of tags you can specify for a cost estimate is one. The estimate created is for the cost to analyze the Amazon Web Services resources defined by the tag. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>Amazon Web Services CloudFormation User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppBoundaryKey|object|true|none|none|
|TagValues|object|true|none|none|

<h2 id="tocS_TagHealth">TagHealth</h2>
<!-- backwards compatibility -->
<a id="schemataghealth"></a>
<a id="schema_TagHealth"></a>
<a id="tocStaghealth"></a>
<a id="tocstaghealth"></a>

```json
{
  "AppBoundaryKey": {},
  "TagValue": {},
  "Insight": {
    "OpenProactiveInsights": {},
    "OpenReactiveInsights": {},
    "MeanTimeToRecoverInMilliseconds": {}
  },
  "AnalyzedResourceCount": {}
}
```

 Information about the health of Amazon Web Services resources in your account that are specified by an Amazon Web Services tag <i>key</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppBoundaryKey|object|false|none|none|
|TagValue|object|false|none|none|
|Insight|object|false|none|none|
|AnalyzedResourceCount|object|false|none|none|

<h2 id="tocS_TimestampMetricValuePair">TimestampMetricValuePair</h2>
<!-- backwards compatibility -->
<a id="schematimestampmetricvaluepair"></a>
<a id="schema_TimestampMetricValuePair"></a>
<a id="tocStimestampmetricvaluepair"></a>
<a id="tocstimestampmetricvaluepair"></a>

```json
{
  "Timestamp": {},
  "MetricValue": {}
}
```

A pair that contains metric values at the respective timestamp.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timestamp|object|false|none|none|
|MetricValue|object|false|none|none|

<h2 id="tocS_UpdateStackNames">UpdateStackNames</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestacknames"></a>
<a id="schema_UpdateStackNames"></a>
<a id="tocSupdatestacknames"></a>
<a id="tocsupdatestacknames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UpdateEventSourcesConfigRequest">UpdateEventSourcesConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateeventsourcesconfigrequest"></a>
<a id="schema_UpdateEventSourcesConfigRequest"></a>
<a id="tocSupdateeventsourcesconfigrequest"></a>
<a id="tocsupdateeventsourcesconfigrequest"></a>

```json
{
  "EventSources": {
    "AmazonCodeGuruProfiler": {
      "Status": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventSources|object|false|none|none|

<h2 id="tocS_UpdateResourceCollectionAction">UpdateResourceCollectionAction</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourcecollectionaction"></a>
<a id="schema_UpdateResourceCollectionAction"></a>
<a id="tocSupdateresourcecollectionaction"></a>
<a id="tocsupdateresourcecollectionaction"></a>

```json
"ADD"
```

<h2 id="tocS_UpdateResourceCollectionFilter">UpdateResourceCollectionFilter</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourcecollectionfilter"></a>
<a id="schema_UpdateResourceCollectionFilter"></a>
<a id="tocSupdateresourcecollectionfilter"></a>
<a id="tocsupdateresourcecollectionfilter"></a>

```json
{
  "CloudFormation": {
    "StackNames": {}
  },
  "Tags": {}
}
```

 Contains information used to update a collection of Amazon Web Services resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudFormation|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_UpdateResourceCollectionRequest">UpdateResourceCollectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourcecollectionrequest"></a>
<a id="schema_UpdateResourceCollectionRequest"></a>
<a id="tocSupdateresourcecollectionrequest"></a>
<a id="tocsupdateresourcecollectionrequest"></a>

```json
{
  "Action": {},
  "ResourceCollection": {
    "CloudFormation": {
      "StackNames": {}
    },
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|ResourceCollection|[UpdateResourceCollectionFilter](#schemaupdateresourcecollectionfilter)|true|none| Contains information used to update a collection of Amazon Web Services resources. |

<h2 id="tocS_UpdateServiceIntegrationConfig">UpdateServiceIntegrationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserviceintegrationconfig"></a>
<a id="schema_UpdateServiceIntegrationConfig"></a>
<a id="tocSupdateserviceintegrationconfig"></a>
<a id="tocsupdateserviceintegrationconfig"></a>

```json
{
  "OpsCenter": {
    "OptInStatus": {}
  },
  "LogsAnomalyDetection": {
    "OptInStatus": {}
  }
}
```

 Information about updating the integration status of an Amazon Web Services service, such as Amazon Web Services Systems Manager, with DevOps Guru.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpsCenter|[OpsCenterIntegrationConfig](#schemaopscenterintegrationconfig)|false|none| Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight. You can use this to update the configuration.|
|LogsAnomalyDetection|object|false|none|none|

<h2 id="tocS_UpdateServiceIntegrationRequest">UpdateServiceIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserviceintegrationrequest"></a>
<a id="schema_UpdateServiceIntegrationRequest"></a>
<a id="tocSupdateserviceintegrationrequest"></a>
<a id="tocsupdateserviceintegrationrequest"></a>

```json
{
  "ServiceIntegration": {
    "OpsCenter": {
      "OptInStatus": {}
    },
    "LogsAnomalyDetection": {
      "OptInStatus": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceIntegration|object|true|none|none|

<h2 id="tocS_UpdateTagValues">UpdateTagValues</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetagvalues"></a>
<a id="schema_UpdateTagValues"></a>
<a id="tocSupdatetagvalues"></a>
<a id="tocsupdatetagvalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UpdateTagCollectionFilter">UpdateTagCollectionFilter</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetagcollectionfilter"></a>
<a id="schema_UpdateTagCollectionFilter"></a>
<a id="tocSupdatetagcollectionfilter"></a>
<a id="tocsupdatetagcollectionfilter"></a>

```json
{
  "AppBoundaryKey": {},
  "TagValues": {}
}
```

A new collection of Amazon Web Services resources that are defined by an Amazon Web Services tag or tag <i>key</i>/<i>value</i> pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppBoundaryKey|object|true|none|none|
|TagValues|object|true|none|none|
