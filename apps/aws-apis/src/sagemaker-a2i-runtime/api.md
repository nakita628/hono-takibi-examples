<h1 id="amazon-augmented-ai-runtime">Amazon Augmented AI Runtime v2019-11-07</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Amazon Augmented AI (Amazon A2I) adds the benefit of human judgment to any machine learning application. When an AI application can't evaluate data with a high degree of confidence, human reviewers can take over. This human review is called a human review workflow. To create and start a human review workflow, you need three resources: a <i>worker task template</i>, a <i>flow definition</i>, and a <i>human loop</i>.</p> <p>For information about these resources and prerequisites for using Amazon A2I, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-getting-started.html">Get Started with Amazon Augmented AI</a> in the Amazon SageMaker Developer Guide.</p> <p>This API reference includes information about API actions and data types that you can use to interact with Amazon A2I programmatically. Use this guide to:</p> <ul> <li> <p>Start a human loop with the <code>StartHumanLoop</code> operation when using Amazon A2I with a <i>custom task type</i>. To learn more about the difference between custom and built-in task types, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-task-types-general.html">Use Task Types </a>. To learn how to start a human loop using this API, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-start-human-loop.html#a2i-instructions-starthumanloop">Create and Start a Human Loop for a Custom Task Type </a> in the Amazon SageMaker Developer Guide.</p> </li> <li> <p>Manage your human loops. You can list all human loops that you have created, describe individual human loops, and stop and delete human loops. To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-monitor-humanloop-results.html">Monitor and Manage Your Human Loop </a> in the Amazon SageMaker Developer Guide.</p> </li> </ul> <p>Amazon A2I integrates APIs from various AWS services to create and start human review workflows for those services. To learn how Amazon A2I uses these APIs, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-api-references.html">Use APIs in Amazon A2I</a> in the Amazon SageMaker Developer Guide.</p>

Base URLs:

* <a href="http://a2i-runtime.sagemaker.us-east-1.amazonaws.com">http://a2i-runtime.sagemaker.us-east-1.amazonaws.com</a> - The Amazon Augmented AI Runtime multi-region endpoint

* <a href="https://a2i-runtime.sagemaker.us-east-1.amazonaws.com">https://a2i-runtime.sagemaker.us-east-1.amazonaws.com</a> - The Amazon Augmented AI Runtime multi-region endpoint

* <a href="http://a2i-runtime.sagemaker.cn-north-1.amazonaws.com.cn">http://a2i-runtime.sagemaker.cn-north-1.amazonaws.com.cn</a> - The Amazon Augmented AI Runtime endpoint for China (Beijing) and China (Ningxia)

* <a href="https://a2i-runtime.sagemaker.cn-north-1.amazonaws.com.cn">https://a2i-runtime.sagemaker.cn-north-1.amazonaws.com.cn</a> - The Amazon Augmented AI Runtime endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/sagemaker/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-augmented-ai-runtime-default">Default</h1>

## DescribeHumanLoop

<a id="opIdDescribeHumanLoop"></a>

> Code samples

```bash
curl https://sagemaker-a2i-runtime.us-east-1.amazonaws.com/human-loops/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /human-loops/{HumanLoopName}`

Returns information about the specified human loop. If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code> error. 

<h3 id="describehumanloop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|HumanLoopName|path|string|true|The name of the human loop that you want information about.|
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
  "CreationTime": {},
  "FailureReason": {},
  "FailureCode": {},
  "HumanLoopStatus": {},
  "HumanLoopName": {},
  "HumanLoopArn": {},
  "FlowDefinitionArn": {},
  "HumanLoopOutput": {
    "OutputS3Uri": {}
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

<h3 id="describehumanloop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeHumanLoopResponse](#schemadescribehumanloopresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteHumanLoop

<a id="opIdDeleteHumanLoop"></a>

> Code samples

```bash
curl https://sagemaker-a2i-runtime.us-east-1.amazonaws.com/human-loops/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /human-loops/{HumanLoopName}`

<p>Deletes the specified human loop for a flow definition.</p> <p>If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code>. </p>

<h3 id="deletehumanloop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|HumanLoopName|path|string|true|The name of the human loop that you want to delete.|
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

<h3 id="deletehumanloop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteHumanLoopResponse](#schemadeletehumanloopresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListHumanLoops

<a id="opIdListHumanLoops"></a>

> Code samples

```bash
curl 'https://sagemaker-a2i-runtime.us-east-1.amazonaws.com/human-loops#FlowDefinitionArn?FlowDefinitionArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /human-loops#FlowDefinitionArn`

Returns information about human loops, given the specified parameters. If a human loop was deleted, it will not be included.

<h3 id="listhumanloops-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CreationTimeAfter|query|string(date-time)|false|(Optional) The timestamp of the date when you want the human loops to begin in ISO 8601 format. For example, <code>2020-02-24</code>.|
|CreationTimeBefore|query|string(date-time)|false|(Optional) The timestamp of the date before which you want the human loops to begin in ISO 8601 format. For example, <code>2020-02-24</code>.|
|FlowDefinitionArn|query|string|true|The Amazon Resource Name (ARN) of a flow definition.|
|SortOrder|query|string|false|Optional. The order for displaying results. Valid values: <code>Ascending</code> and <code>Descending</code>.|
|NextToken|query|string|false|A token to display the next page of results.|
|MaxResults|query|integer|false|The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> is returned in the output. You can use this token to display the next page of results. |
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
|SortOrder|Ascending|
|SortOrder|Descending|

> Example responses

> 200 Response

```json
{
  "HumanLoopSummaries": {},
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

<h3 id="listhumanloops-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListHumanLoopsResponse](#schemalisthumanloopsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartHumanLoop

<a id="opIdStartHumanLoop"></a>

> Code samples

```bash
curl https://sagemaker-a2i-runtime.us-east-1.amazonaws.com/human-loops \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "HumanLoopName": "string",
    "FlowDefinitionArn": "string",
    "HumanLoopInput": {
      "InputContent": {}
    },
    "DataAttributes": {
      "ContentClassifiers": {}
    }
  }'
```

`POST /human-loops`

Starts a human loop, provided that at least one activation condition is met.

> Body parameter

```json
{
  "HumanLoopName": "string",
  "FlowDefinitionArn": "string",
  "HumanLoopInput": {
    "InputContent": {}
  },
  "DataAttributes": {
    "ContentClassifiers": {}
  }
}
```

<h3 id="starthumanloop-parameters">Parameters</h3>

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
|» HumanLoopName|body|string|true|The name of the human loop.|
|» FlowDefinitionArn|body|string|true|The Amazon Resource Name (ARN) of the flow definition associated with this human loop.|
|» HumanLoopInput|body|object|true|An object containing the human loop input in JSON format.|
|» » InputContent|body|object|false|none|
|» DataAttributes|body|object|false|Attributes of the data specified by the customer. Use these to describe the data to be labeled.|
|» » ContentClassifiers|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "HumanLoopArn": {}
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

<h3 id="starthumanloop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartHumanLoopResponse](#schemastarthumanloopresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopHumanLoop

<a id="opIdStopHumanLoop"></a>

> Code samples

```bash
curl https://sagemaker-a2i-runtime.us-east-1.amazonaws.com/human-loops/stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "HumanLoopName": "string"
  }'
```

`POST /human-loops/stop`

Stops the specified human loop.

> Body parameter

```json
{
  "HumanLoopName": "string"
}
```

<h3 id="stophumanloop-parameters">Parameters</h3>

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
|» HumanLoopName|body|string|true|The name of the human loop that you want to stop.|

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

<h3 id="stophumanloop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopHumanLoopResponse](#schemastophumanloopresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_DeleteHumanLoopResponse">DeleteHumanLoopResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletehumanloopresponse"></a>
<a id="schema_DeleteHumanLoopResponse"></a>
<a id="tocSdeletehumanloopresponse"></a>
<a id="tocsdeletehumanloopresponse"></a>

```json
{}
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

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

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

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_DescribeHumanLoopResponse">DescribeHumanLoopResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribehumanloopresponse"></a>
<a id="schema_DescribeHumanLoopResponse"></a>
<a id="tocSdescribehumanloopresponse"></a>
<a id="tocsdescribehumanloopresponse"></a>

```json
{
  "CreationTime": {},
  "FailureReason": {},
  "FailureCode": {},
  "HumanLoopStatus": {},
  "HumanLoopName": {},
  "HumanLoopArn": {},
  "FlowDefinitionArn": {},
  "HumanLoopOutput": {
    "OutputS3Uri": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationTime|object|true|none|none|
|FailureReason|object|false|none|none|
|FailureCode|object|false|none|none|
|HumanLoopStatus|object|true|none|none|
|HumanLoopName|object|true|none|none|
|HumanLoopArn|object|true|none|none|
|FlowDefinitionArn|object|true|none|none|
|HumanLoopOutput|object|false|none|none|

<h2 id="tocS_ListHumanLoopsResponse">ListHumanLoopsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthumanloopsresponse"></a>
<a id="schema_ListHumanLoopsResponse"></a>
<a id="tocSlisthumanloopsresponse"></a>
<a id="tocslisthumanloopsresponse"></a>

```json
{
  "HumanLoopSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HumanLoopSummaries|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_StartHumanLoopResponse">StartHumanLoopResponse</h2>
<!-- backwards compatibility -->
<a id="schemastarthumanloopresponse"></a>
<a id="schema_StartHumanLoopResponse"></a>
<a id="tocSstarthumanloopresponse"></a>
<a id="tocsstarthumanloopresponse"></a>

```json
{
  "HumanLoopArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HumanLoopArn|object|false|none|none|

<h2 id="tocS_InputContent">InputContent</h2>
<!-- backwards compatibility -->
<a id="schemainputcontent"></a>
<a id="schema_InputContent"></a>
<a id="tocSinputcontent"></a>
<a id="tocsinputcontent"></a>

```json
"string"
```

<h2 id="tocS_ContentClassifiers">ContentClassifiers</h2>
<!-- backwards compatibility -->
<a id="schemacontentclassifiers"></a>
<a id="schema_ContentClassifiers"></a>
<a id="tocScontentclassifiers"></a>
<a id="tocscontentclassifiers"></a>

```json
[
  "FreeOfPersonallyIdentifiableInformation"
]
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

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_StopHumanLoopResponse">StopHumanLoopResponse</h2>
<!-- backwards compatibility -->
<a id="schemastophumanloopresponse"></a>
<a id="schema_StopHumanLoopResponse"></a>
<a id="tocSstophumanloopresponse"></a>
<a id="tocsstophumanloopresponse"></a>

```json
{}
```

<h2 id="tocS_ContentClassifier">ContentClassifier</h2>
<!-- backwards compatibility -->
<a id="schemacontentclassifier"></a>
<a id="schema_ContentClassifier"></a>
<a id="tocScontentclassifier"></a>
<a id="tocscontentclassifier"></a>

```json
"FreeOfPersonallyIdentifiableInformation"
```

<h2 id="tocS_HumanLoopName">HumanLoopName</h2>
<!-- backwards compatibility -->
<a id="schemahumanloopname"></a>
<a id="schema_HumanLoopName"></a>
<a id="tocShumanloopname"></a>
<a id="tocshumanloopname"></a>

```json
"string"
```

<h2 id="tocS_DeleteHumanLoopRequest">DeleteHumanLoopRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletehumanlooprequest"></a>
<a id="schema_DeleteHumanLoopRequest"></a>
<a id="tocSdeletehumanlooprequest"></a>
<a id="tocsdeletehumanlooprequest"></a>

```json
{}
```

<h2 id="tocS_DescribeHumanLoopRequest">DescribeHumanLoopRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribehumanlooprequest"></a>
<a id="schema_DescribeHumanLoopRequest"></a>
<a id="tocSdescribehumanlooprequest"></a>
<a id="tocsdescribehumanlooprequest"></a>

```json
{}
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

<h2 id="tocS_HumanLoopStatus">HumanLoopStatus</h2>
<!-- backwards compatibility -->
<a id="schemahumanloopstatus"></a>
<a id="schema_HumanLoopStatus"></a>
<a id="tocShumanloopstatus"></a>
<a id="tocshumanloopstatus"></a>

```json
"InProgress"
```

<h2 id="tocS_HumanLoopArn">HumanLoopArn</h2>
<!-- backwards compatibility -->
<a id="schemahumanlooparn"></a>
<a id="schema_HumanLoopArn"></a>
<a id="tocShumanlooparn"></a>
<a id="tocshumanlooparn"></a>

```json
"string"
```

<h2 id="tocS_FlowDefinitionArn">FlowDefinitionArn</h2>
<!-- backwards compatibility -->
<a id="schemaflowdefinitionarn"></a>
<a id="schema_FlowDefinitionArn"></a>
<a id="tocSflowdefinitionarn"></a>
<a id="tocsflowdefinitionarn"></a>

```json
"string"
```

<h2 id="tocS_HumanLoopOutput">HumanLoopOutput</h2>
<!-- backwards compatibility -->
<a id="schemahumanloopoutput"></a>
<a id="schema_HumanLoopOutput"></a>
<a id="tocShumanloopoutput"></a>
<a id="tocshumanloopoutput"></a>

```json
{
  "OutputS3Uri": {}
}
```

Information about where the human output will be stored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutputS3Uri|object|true|none|none|

<h2 id="tocS_FailureReason">FailureReason</h2>
<!-- backwards compatibility -->
<a id="schemafailurereason"></a>
<a id="schema_FailureReason"></a>
<a id="tocSfailurereason"></a>
<a id="tocsfailurereason"></a>

```json
"string"
```

<h2 id="tocS_HumanLoopDataAttributes">HumanLoopDataAttributes</h2>
<!-- backwards compatibility -->
<a id="schemahumanloopdataattributes"></a>
<a id="schema_HumanLoopDataAttributes"></a>
<a id="tocShumanloopdataattributes"></a>
<a id="tocshumanloopdataattributes"></a>

```json
{
  "ContentClassifiers": {}
}
```

Attributes of the data specified by the customer. Use these to describe the data to be labeled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentClassifiers|object|true|none|none|

<h2 id="tocS_HumanLoopInput">HumanLoopInput</h2>
<!-- backwards compatibility -->
<a id="schemahumanloopinput"></a>
<a id="schema_HumanLoopInput"></a>
<a id="tocShumanloopinput"></a>
<a id="tocshumanloopinput"></a>

```json
{
  "InputContent": {}
}
```

An object containing the human loop input in JSON format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputContent|object|true|none|none|

<h2 id="tocS_HumanLoopSummary">HumanLoopSummary</h2>
<!-- backwards compatibility -->
<a id="schemahumanloopsummary"></a>
<a id="schema_HumanLoopSummary"></a>
<a id="tocShumanloopsummary"></a>
<a id="tocshumanloopsummary"></a>

```json
{
  "HumanLoopName": {},
  "HumanLoopStatus": {},
  "CreationTime": {},
  "FailureReason": {},
  "FlowDefinitionArn": {}
}
```

Summary information about the human loop.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HumanLoopName|object|false|none|none|
|HumanLoopStatus|object|false|none|none|
|CreationTime|object|false|none|none|
|FailureReason|object|false|none|none|
|FlowDefinitionArn|object|false|none|none|

<h2 id="tocS_HumanLoopSummaries">HumanLoopSummaries</h2>
<!-- backwards compatibility -->
<a id="schemahumanloopsummaries"></a>
<a id="schema_HumanLoopSummaries"></a>
<a id="tocShumanloopsummaries"></a>
<a id="tocshumanloopsummaries"></a>

```json
[
  {
    "HumanLoopName": {},
    "HumanLoopStatus": {},
    "CreationTime": {},
    "FailureReason": {},
    "FlowDefinitionArn": {}
  }
]
```

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"Ascending"
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

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListHumanLoopsRequest">ListHumanLoopsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisthumanloopsrequest"></a>
<a id="schema_ListHumanLoopsRequest"></a>
<a id="tocSlisthumanloopsrequest"></a>
<a id="tocslisthumanloopsrequest"></a>

```json
{}
```

<h2 id="tocS_StartHumanLoopRequest">StartHumanLoopRequest</h2>
<!-- backwards compatibility -->
<a id="schemastarthumanlooprequest"></a>
<a id="schema_StartHumanLoopRequest"></a>
<a id="tocSstarthumanlooprequest"></a>
<a id="tocsstarthumanlooprequest"></a>

```json
{
  "HumanLoopName": {},
  "FlowDefinitionArn": {},
  "HumanLoopInput": {
    "InputContent": {}
  },
  "DataAttributes": {
    "ContentClassifiers": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HumanLoopName|object|true|none|none|
|FlowDefinitionArn|object|true|none|none|
|HumanLoopInput|object|true|none|none|
|DataAttributes|object|false|none|none|

<h2 id="tocS_StopHumanLoopRequest">StopHumanLoopRequest</h2>
<!-- backwards compatibility -->
<a id="schemastophumanlooprequest"></a>
<a id="schema_StopHumanLoopRequest"></a>
<a id="tocSstophumanlooprequest"></a>
<a id="tocsstophumanlooprequest"></a>

```json
{
  "HumanLoopName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HumanLoopName|object|true|none|none|
