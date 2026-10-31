<h1 id="aws-x-ray">AWS X-Ray v2016-04-12</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon Web Services X-Ray provides APIs for managing debug traces and retrieving service maps and other data created by processing those traces.

Base URLs:

* <a href="http://xray.us-east-1.amazonaws.com">http://xray.us-east-1.amazonaws.com</a> - The AWS X-Ray multi-region endpoint

* <a href="https://xray.us-east-1.amazonaws.com">https://xray.us-east-1.amazonaws.com</a> - The AWS X-Ray multi-region endpoint

* <a href="http://xray.cn-north-1.amazonaws.com.cn">http://xray.cn-north-1.amazonaws.com.cn</a> - The AWS X-Ray endpoint for China (Beijing) and China (Ningxia)

* <a href="https://xray.cn-north-1.amazonaws.com.cn">https://xray.cn-north-1.amazonaws.com.cn</a> - The AWS X-Ray endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/xray/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-x-ray-default">Default</h1>

## BatchGetTraces

<a id="opIdBatchGetTraces"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/Traces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TraceIds": [
      "string"
    ],
    "NextToken": "string"
  }'
```

`POST /Traces`

Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a list of trace IDs.

> Body parameter

```json
{
  "TraceIds": [
    "string"
  ],
  "NextToken": "string"
}
```

<h3 id="batchgettraces-parameters">Parameters</h3>

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
|» TraceIds|body|[[TraceId](#schematraceid)]|true|Specify the trace IDs of requests for which to retrieve segments.|
|» NextToken|body|string|false|Pagination token.|

> Example responses

> 200 Response

```json
{
  "Traces": {},
  "UnprocessedTraceIds": {},
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

<h3 id="batchgettraces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetTracesResult](#schemabatchgettracesresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGroup

<a id="opIdCreateGroup"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/CreateGroup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GroupName": "string",
    "FilterExpression": "string",
    "InsightsConfiguration": {
      "InsightsEnabled": {},
      "NotificationsEnabled": {}
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /CreateGroup`

Creates a group resource with a name and a filter expression. 

> Body parameter

```json
{
  "GroupName": "string",
  "FilterExpression": "string",
  "InsightsConfiguration": {
    "InsightsEnabled": {},
    "NotificationsEnabled": {}
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="creategroup-parameters">Parameters</h3>

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
|» GroupName|body|string|true|The case-sensitive name of the new group. Default is a reserved name and names must be unique.|
|» FilterExpression|body|string|false|The filter expression defining criteria by which to group traces.|
|» InsightsConfiguration|body|object|false|The structure containing configurations related to insights.|
|» » InsightsEnabled|body|object|false|none|
|» » NotificationsEnabled|body|object|false|none|
|» Tags|body|[[Tag](#schematag)]|false|<p>A map that contains one or more tag keys and tag values to attach to an X-Ray group. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Maximum tag key length: 128 Unicode characters</p> </li> <li> <p>Maximum tag value length: 256 Unicode characters</p> </li> <li> <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services use.</p> </li> </ul>|

> Example responses

> 200 Response

```json
{
  "Group": {
    "GroupName": {},
    "GroupARN": {},
    "FilterExpression": {},
    "InsightsConfiguration": {
      "InsightsEnabled": {},
      "NotificationsEnabled": {}
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

<h3 id="creategroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGroupResult](#schemacreategroupresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSamplingRule

<a id="opIdCreateSamplingRule"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/CreateSamplingRule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SamplingRule": {
      "RuleName": {},
      "RuleARN": {},
      "ResourceARN": {},
      "Priority": {},
      "FixedRate": {},
      "ReservoirSize": {},
      "ServiceName": {},
      "ServiceType": {},
      "Host": {},
      "HTTPMethod": {},
      "URLPath": {},
      "Version": {},
      "Attributes": {
        "property1": "string",
        "property2": "string"
      }
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /CreateSamplingRule`

Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a>, and evaluate each rule in ascending order of <i>priority</i> for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.

> Body parameter

```json
{
  "SamplingRule": {
    "RuleName": {},
    "RuleARN": {},
    "ResourceARN": {},
    "Priority": {},
    "FixedRate": {},
    "ReservoirSize": {},
    "ServiceName": {},
    "ServiceType": {},
    "Host": {},
    "HTTPMethod": {},
    "URLPath": {},
    "Version": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    }
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createsamplingrule-parameters">Parameters</h3>

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
|» SamplingRule|body|object|true|A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.|
|» » RuleName|body|object|false|none|
|» » RuleARN|body|object|false|none|
|» » ResourceARN|body|object|false|none|
|» » Priority|body|object|false|none|
|» » FixedRate|body|object|false|none|
|» » ReservoirSize|body|object|false|none|
|» » ServiceName|body|object|false|none|
|» » ServiceType|body|object|false|none|
|» » Host|body|object|false|none|
|» » HTTPMethod|body|object|false|none|
|» » URLPath|body|object|false|none|
|» » Version|body|object|false|none|
|» » Attributes|body|object|false|none|
|» » » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|none|
|» Tags|body|[[Tag](#schematag)]|false|<p>A map that contains one or more tag keys and tag values to attach to an X-Ray sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Maximum tag key length: 128 Unicode characters</p> </li> <li> <p>Maximum tag value length: 256 Unicode characters</p> </li> <li> <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services use.</p> </li> </ul>|

> Example responses

> 200 Response

```json
{
  "SamplingRuleRecord": {
    "SamplingRule": {
      "RuleName": {},
      "RuleARN": {},
      "ResourceARN": {},
      "Priority": {},
      "FixedRate": {},
      "ReservoirSize": {},
      "ServiceName": {},
      "ServiceType": {},
      "Host": {},
      "HTTPMethod": {},
      "URLPath": {},
      "Version": {},
      "Attributes": {
        "property1": "string",
        "property2": "string"
      }
    },
    "CreatedAt": {},
    "ModifiedAt": {}
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

<h3 id="createsamplingrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSamplingRuleResult](#schemacreatesamplingruleresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|
|482|482|RuleLimitExceededException|[RuleLimitExceededException](#schemarulelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGroup

<a id="opIdDeleteGroup"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/DeleteGroup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GroupName": "string",
    "GroupARN": "string"
  }'
```

`POST /DeleteGroup`

Deletes a group resource.

> Body parameter

```json
{
  "GroupName": "string",
  "GroupARN": "string"
}
```

<h3 id="deletegroup-parameters">Parameters</h3>

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
|» GroupName|body|string|false|The case-sensitive name of the group.|
|» GroupARN|body|string|false|The ARN of the group that was generated on creation.|

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

<h3 id="deletegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGroupResult](#schemadeletegroupresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourcePolicy

<a id="opIdDeleteResourcePolicy"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/DeleteResourcePolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "PolicyName": "string",
    "PolicyRevisionId": "string"
  }'
```

`POST /DeleteResourcePolicy`

Deletes a resource policy from the target Amazon Web Services account.

> Body parameter

```json
{
  "PolicyName": "string",
  "PolicyRevisionId": "string"
}
```

<h3 id="deleteresourcepolicy-parameters">Parameters</h3>

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
|» PolicyName|body|string|true|The name of the resource policy to delete.|
|» PolicyRevisionId|body|string|false|Specifies a specific policy revision to delete. Provide a <code>PolicyRevisionId</code> to ensure an atomic delete operation. If the provided revision id does not match the latest policy revision id, an <code>InvalidPolicyRevisionIdException</code> exception is returned. |

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

<h3 id="deleteresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteResourcePolicyResult](#schemadeleteresourcepolicyresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidPolicyRevisionIdException|[InvalidPolicyRevisionIdException](#schemainvalidpolicyrevisionidexception)|
|482|482|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSamplingRule

<a id="opIdDeleteSamplingRule"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/DeleteSamplingRule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "RuleName": "string",
    "RuleARN": "string"
  }'
```

`POST /DeleteSamplingRule`

Deletes a sampling rule.

> Body parameter

```json
{
  "RuleName": "string",
  "RuleARN": "string"
}
```

<h3 id="deletesamplingrule-parameters">Parameters</h3>

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
|» RuleName|body|string|false|The name of the sampling rule. Specify a rule by either name or ARN, but not both.|
|» RuleARN|body|string|false|The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.|

> Example responses

> 200 Response

```json
{
  "SamplingRuleRecord": {
    "SamplingRule": {
      "RuleName": {},
      "RuleARN": {},
      "ResourceARN": {},
      "Priority": {},
      "FixedRate": {},
      "ReservoirSize": {},
      "ServiceName": {},
      "ServiceType": {},
      "Host": {},
      "HTTPMethod": {},
      "URLPath": {},
      "Version": {},
      "Attributes": {
        "property1": "string",
        "property2": "string"
      }
    },
    "CreatedAt": {},
    "ModifiedAt": {}
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

<h3 id="deletesamplingrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSamplingRuleResult](#schemadeletesamplingruleresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEncryptionConfig

<a id="opIdGetEncryptionConfig"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/EncryptionConfig \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /EncryptionConfig`

Retrieves the current encryption configuration for X-Ray data.

<h3 id="getencryptionconfig-parameters">Parameters</h3>

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
  "EncryptionConfig": {
    "KeyId": {},
    "Status": {},
    "Type": {}
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

<h3 id="getencryptionconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEncryptionConfigResult](#schemagetencryptionconfigresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGroup

<a id="opIdGetGroup"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/GetGroup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GroupName": "string",
    "GroupARN": "string"
  }'
```

`POST /GetGroup`

Retrieves group resource details.

> Body parameter

```json
{
  "GroupName": "string",
  "GroupARN": "string"
}
```

<h3 id="getgroup-parameters">Parameters</h3>

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
|» GroupName|body|string|false|The case-sensitive name of the group.|
|» GroupARN|body|string|false|The ARN of the group that was generated on creation.|

> Example responses

> 200 Response

```json
{
  "Group": {
    "GroupName": {},
    "GroupARN": {},
    "FilterExpression": {},
    "InsightsConfiguration": {
      "InsightsEnabled": {},
      "NotificationsEnabled": {}
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

<h3 id="getgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGroupResult](#schemagetgroupresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGroups

<a id="opIdGetGroups"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/Groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string"
  }'
```

`POST /Groups`

Retrieves all active group details.

> Body parameter

```json
{
  "NextToken": "string"
}
```

<h3 id="getgroups-parameters">Parameters</h3>

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
|» NextToken|body|string|false|Pagination token.|

> Example responses

> 200 Response

```json
{
  "Groups": {},
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

<h3 id="getgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGroupsResult](#schemagetgroupsresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInsight

<a id="opIdGetInsight"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/Insight \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InsightId": "string"
  }'
```

`POST /Insight`

Retrieves the summary information of an insight. This includes impact to clients and root cause services, the top anomalous services, the category, the state of the insight, and the start and end time of the insight.

> Body parameter

```json
{
  "InsightId": "string"
}
```

<h3 id="getinsight-parameters">Parameters</h3>

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
|» InsightId|body|string|true|The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.|

> Example responses

> 200 Response

```json
{
  "Insight": {
    "InsightId": {},
    "GroupARN": {},
    "GroupName": {},
    "RootCauseServiceId": {
      "Name": {},
      "Names": {},
      "AccountId": {},
      "Type": {}
    },
    "Categories": {},
    "State": {},
    "StartTime": {},
    "EndTime": {},
    "Summary": {},
    "ClientRequestImpactStatistics": {
      "FaultCount": {},
      "OkCount": {},
      "TotalCount": {}
    },
    "RootCauseServiceRequestImpactStatistics": {
      "FaultCount": {},
      "OkCount": {},
      "TotalCount": {}
    },
    "TopAnomalousServices": {}
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

<h3 id="getinsight-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInsightResult](#schemagetinsightresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInsightEvents

<a id="opIdGetInsightEvents"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/InsightEvents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InsightId": "string",
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /InsightEvents`

X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.

> Body parameter

```json
{
  "InsightId": "string",
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="getinsightevents-parameters">Parameters</h3>

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
|» InsightId|body|string|true|The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.|
|» MaxResults|body|integer|false|Used to retrieve at most the specified value of events.|
|» NextToken|body|string|false|Specify the pagination token returned by a previous request to retrieve the next page of events. |

> Example responses

> 200 Response

```json
{
  "InsightEvents": {},
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

<h3 id="getinsightevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInsightEventsResult](#schemagetinsighteventsresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInsightImpactGraph

<a id="opIdGetInsightImpactGraph"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/InsightImpactGraph \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InsightId": "string",
    "StartTime": "1970-01-01T00:00:00Z",
    "EndTime": "1970-01-01T00:00:00Z",
    "NextToken": "string"
  }'
```

`POST /InsightImpactGraph`

Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.

> Body parameter

```json
{
  "InsightId": "string",
  "StartTime": "1970-01-01T00:00:00Z",
  "EndTime": "1970-01-01T00:00:00Z",
  "NextToken": "string"
}
```

<h3 id="getinsightimpactgraph-parameters">Parameters</h3>

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
|» InsightId|body|string|true|The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.|
|» StartTime|body|string(date-time)|true|The estimated start time of the insight, in Unix time seconds. The StartTime is inclusive of the value provided and can't be more than 30 days old.|
|» EndTime|body|string(date-time)|true|The estimated end time of the insight, in Unix time seconds. The EndTime is exclusive of the value provided. The time range between the start time and end time can't be more than six hours. |
|» NextToken|body|string|false|Specify the pagination token returned by a previous request to retrieve the next page of results. |

> Example responses

> 200 Response

```json
{
  "InsightId": {},
  "StartTime": {},
  "EndTime": {},
  "ServiceGraphStartTime": {},
  "ServiceGraphEndTime": {},
  "Services": {},
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

<h3 id="getinsightimpactgraph-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInsightImpactGraphResult](#schemagetinsightimpactgraphresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInsightSummaries

<a id="opIdGetInsightSummaries"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/InsightSummaries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "States": [
      "ACTIVE"
    ],
    "GroupARN": "string",
    "GroupName": "string",
    "StartTime": "1970-01-01T00:00:00Z",
    "EndTime": "1970-01-01T00:00:00Z",
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /InsightSummaries`

Retrieves the summaries of all insights in the specified group matching the provided filter values.

> Body parameter

```json
{
  "States": [
    "ACTIVE"
  ],
  "GroupARN": "string",
  "GroupName": "string",
  "StartTime": "1970-01-01T00:00:00Z",
  "EndTime": "1970-01-01T00:00:00Z",
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="getinsightsummaries-parameters">Parameters</h3>

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
|» States|body|[[InsightState](#schemainsightstate)]|false|The list of insight states. |
|» GroupARN|body|string|false|The Amazon Resource Name (ARN) of the group. Required if the GroupName isn't provided.|
|» GroupName|body|string|false|The name of the group. Required if the GroupARN isn't provided.|
|» StartTime|body|string(date-time)|true|The beginning of the time frame in which the insights started. The start time can't be more than 30 days old.|
|» EndTime|body|string(date-time)|true|The end of the time frame in which the insights ended. The end time can't be more than 30 days old.|
|» MaxResults|body|integer|false|The maximum number of results to display.|
|» NextToken|body|string|false|Pagination token.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» States|ACTIVE|
|» States|CLOSED|

> Example responses

> 200 Response

```json
{
  "InsightSummaries": {},
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

<h3 id="getinsightsummaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInsightSummariesResult](#schemagetinsightsummariesresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSamplingRules

<a id="opIdGetSamplingRules"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/GetSamplingRules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string"
  }'
```

`POST /GetSamplingRules`

Retrieves all sampling rules.

> Body parameter

```json
{
  "NextToken": "string"
}
```

<h3 id="getsamplingrules-parameters">Parameters</h3>

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
|» NextToken|body|string|false|Pagination token.|

> Example responses

> 200 Response

```json
{
  "SamplingRuleRecords": {},
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

<h3 id="getsamplingrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSamplingRulesResult](#schemagetsamplingrulesresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSamplingStatisticSummaries

<a id="opIdGetSamplingStatisticSummaries"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/SamplingStatisticSummaries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string"
  }'
```

`POST /SamplingStatisticSummaries`

Retrieves information about recent sampling results for all sampling rules.

> Body parameter

```json
{
  "NextToken": "string"
}
```

<h3 id="getsamplingstatisticsummaries-parameters">Parameters</h3>

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
|» NextToken|body|string|false|Pagination token.|

> Example responses

> 200 Response

```json
{
  "SamplingStatisticSummaries": {},
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

<h3 id="getsamplingstatisticsummaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSamplingStatisticSummariesResult](#schemagetsamplingstatisticsummariesresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSamplingTargets

<a id="opIdGetSamplingTargets"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/SamplingTargets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SamplingStatisticsDocuments": [
      {
        "RuleName": {},
        "ClientID": {},
        "Timestamp": {},
        "RequestCount": {},
        "SampledCount": {},
        "BorrowCount": {}
      }
    ]
  }'
```

`POST /SamplingTargets`

Requests a sampling quota for rules that the service is using to sample requests. 

> Body parameter

```json
{
  "SamplingStatisticsDocuments": [
    {
      "RuleName": {},
      "ClientID": {},
      "Timestamp": {},
      "RequestCount": {},
      "SampledCount": {},
      "BorrowCount": {}
    }
  ]
}
```

<h3 id="getsamplingtargets-parameters">Parameters</h3>

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
|» SamplingStatisticsDocuments|body|[[SamplingStatisticsDocument](#schemasamplingstatisticsdocument)]|true|Information about rules that the service is using to sample requests.|

> Example responses

> 200 Response

```json
{
  "SamplingTargetDocuments": {},
  "LastRuleModification": {},
  "UnprocessedStatistics": {}
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

<h3 id="getsamplingtargets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSamplingTargetsResult](#schemagetsamplingtargetsresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetServiceGraph

<a id="opIdGetServiceGraph"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/ServiceGraph \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StartTime": "1970-01-01T00:00:00Z",
    "EndTime": "1970-01-01T00:00:00Z",
    "GroupName": "string",
    "GroupARN": "string",
    "NextToken": "string"
  }'
```

`POST /ServiceGraph`

Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">Amazon Web Services X-Ray SDK</a>. Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.

> Body parameter

```json
{
  "StartTime": "1970-01-01T00:00:00Z",
  "EndTime": "1970-01-01T00:00:00Z",
  "GroupName": "string",
  "GroupARN": "string",
  "NextToken": "string"
}
```

<h3 id="getservicegraph-parameters">Parameters</h3>

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
|» StartTime|body|string(date-time)|true|The start of the time frame for which to generate a graph.|
|» EndTime|body|string(date-time)|true|The end of the timeframe for which to generate a graph.|
|» GroupName|body|string|false|The name of a group based on which you want to generate a graph.|
|» GroupARN|body|string|false|The Amazon Resource Name (ARN) of a group based on which you want to generate a graph.|
|» NextToken|body|string|false|Pagination token.|

> Example responses

> 200 Response

```json
{
  "StartTime": {},
  "EndTime": {},
  "Services": {},
  "ContainsOldGroupVersions": {},
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

<h3 id="getservicegraph-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServiceGraphResult](#schemagetservicegraphresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTimeSeriesServiceStatistics

<a id="opIdGetTimeSeriesServiceStatistics"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/TimeSeriesServiceStatistics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StartTime": "1970-01-01T00:00:00Z",
    "EndTime": "1970-01-01T00:00:00Z",
    "GroupName": "string",
    "GroupARN": "string",
    "EntitySelectorExpression": "string",
    "Period": 0,
    "ForecastStatistics": true,
    "NextToken": "string"
  }'
```

`POST /TimeSeriesServiceStatistics`

Get an aggregation of service statistics defined by a specific time range.

> Body parameter

```json
{
  "StartTime": "1970-01-01T00:00:00Z",
  "EndTime": "1970-01-01T00:00:00Z",
  "GroupName": "string",
  "GroupARN": "string",
  "EntitySelectorExpression": "string",
  "Period": 0,
  "ForecastStatistics": true,
  "NextToken": "string"
}
```

<h3 id="gettimeseriesservicestatistics-parameters">Parameters</h3>

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
|» StartTime|body|string(date-time)|true|The start of the time frame for which to aggregate statistics.|
|» EndTime|body|string(date-time)|true|The end of the time frame for which to aggregate statistics.|
|» GroupName|body|string|false|The case-sensitive name of the group for which to pull statistics from.|
|» GroupARN|body|string|false|The Amazon Resource Name (ARN) of the group for which to pull statistics from.|
|» EntitySelectorExpression|body|string|false|A filter expression defining entities that will be aggregated for statistics. Supports ID, service, and edge functions. If no selector expression is specified, edge statistics are returned. |
|» Period|body|integer|false|Aggregation period in seconds.|
|» ForecastStatistics|body|boolean|false|The forecasted high and low fault count values. Forecast enabled requests require the EntitySelectorExpression ID be provided.|
|» NextToken|body|string|false|Pagination token.|

> Example responses

> 200 Response

```json
{
  "TimeSeriesServiceStatistics": {},
  "ContainsOldGroupVersions": {},
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

<h3 id="gettimeseriesservicestatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTimeSeriesServiceStatisticsResult](#schemagettimeseriesservicestatisticsresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTraceGraph

<a id="opIdGetTraceGraph"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/TraceGraph \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TraceIds": [
      "string"
    ],
    "NextToken": "string"
  }'
```

`POST /TraceGraph`

Retrieves a service graph for one or more specific trace IDs.

> Body parameter

```json
{
  "TraceIds": [
    "string"
  ],
  "NextToken": "string"
}
```

<h3 id="gettracegraph-parameters">Parameters</h3>

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
|» TraceIds|body|[[TraceId](#schematraceid)]|true|Trace IDs of requests for which to generate a service graph.|
|» NextToken|body|string|false|Pagination token.|

> Example responses

> 200 Response

```json
{
  "Services": {},
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

<h3 id="gettracegraph-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTraceGraphResult](#schemagettracegraphresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTraceSummaries

<a id="opIdGetTraceSummaries"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/TraceSummaries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StartTime": "1970-01-01T00:00:00Z",
    "EndTime": "1970-01-01T00:00:00Z",
    "TimeRangeType": "TraceId",
    "Sampling": true,
    "SamplingStrategy": {
      "Name": {},
      "Value": {}
    },
    "FilterExpression": "string",
    "NextToken": "string"
  }'
```

`POST /TraceSummaries`

<p>Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to <code>BatchGetTraces</code>.</p> <p>A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through <code>api.example.com</code>:</p> <p> <code>service("api.example.com")</code> </p> <p>This filter expression finds traces that have an annotation named <code>account</code> with the value <code>12345</code>:</p> <p> <code>annotation.account = "12345"</code> </p> <p>For a full list of indexed fields and keywords that you can use in filter expressions, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter Expressions</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>

> Body parameter

```json
{
  "StartTime": "1970-01-01T00:00:00Z",
  "EndTime": "1970-01-01T00:00:00Z",
  "TimeRangeType": "TraceId",
  "Sampling": true,
  "SamplingStrategy": {
    "Name": {},
    "Value": {}
  },
  "FilterExpression": "string",
  "NextToken": "string"
}
```

<h3 id="gettracesummaries-parameters">Parameters</h3>

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
|» StartTime|body|string(date-time)|true|The start of the time frame for which to retrieve traces.|
|» EndTime|body|string(date-time)|true|The end of the time frame for which to retrieve traces.|
|» TimeRangeType|body|string|false|A parameter to indicate whether to query trace summaries by TraceId or Event time.|
|» Sampling|body|boolean|false|Set to <code>true</code> to get summaries for only a subset of available traces.|
|» SamplingStrategy|body|object|false|The name and value of a sampling rule to apply to a trace summary.|
|» » Name|body|object|false|none|
|» » Value|body|object|false|none|
|» FilterExpression|body|string|false|Specify a filter expression to retrieve trace summaries for services or requests that meet certain requirements.|
|» NextToken|body|string|false|Specify the pagination token returned by a previous request to retrieve the next page of results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» TimeRangeType|TraceId|
|» TimeRangeType|Event|

> Example responses

> 200 Response

```json
{
  "TraceSummaries": {},
  "ApproximateTime": {},
  "TracesProcessedCount": {},
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

<h3 id="gettracesummaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTraceSummariesResult](#schemagettracesummariesresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourcePolicies

<a id="opIdListResourcePolicies"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/ListResourcePolicies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string"
  }'
```

`POST /ListResourcePolicies`

Returns the list of resource policies in the target Amazon Web Services account.

> Body parameter

```json
{
  "NextToken": "string"
}
```

<h3 id="listresourcepolicies-parameters">Parameters</h3>

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
|» NextToken|body|string|false|Not currently supported.|

> Example responses

> 200 Response

```json
{
  "ResourcePolicies": {},
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

<h3 id="listresourcepolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourcePoliciesResult](#schemalistresourcepoliciesresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/ListTagsForResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceARN": "string",
    "NextToken": "string"
  }'
```

`POST /ListTagsForResource`

Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.

> Body parameter

```json
{
  "ResourceARN": "string",
  "NextToken": "string"
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

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
|» ResourceARN|body|string|true|The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.|
|» NextToken|body|string|false|A pagination token. If multiple pages of results are returned, use the <code>NextToken</code> value returned with the current page of results as the value of this parameter to get the next page of results.|

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
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutEncryptionConfig

<a id="opIdPutEncryptionConfig"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/PutEncryptionConfig \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "KeyId": "string",
    "Type": "NONE"
  }'
```

`POST /PutEncryptionConfig`

Updates the encryption configuration for X-Ray data.

> Body parameter

```json
{
  "KeyId": "string",
  "Type": "NONE"
}
```

<h3 id="putencryptionconfig-parameters">Parameters</h3>

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
|» KeyId|body|string|false|<p>An Amazon Web Services KMS key in one of the following formats:</p> <ul> <li> <p> <b>Alias</b> - The name of the key. For example, <code>alias/MyKey</code>.</p> </li> <li> <p> <b>Key ID</b> - The KMS key ID of the key. For example, <code>ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>. Amazon Web Services X-Ray does not support asymmetric KMS keys.</p> </li> <li> <p> <b>ARN</b> - The full Amazon Resource Name of the key ID or alias. For example, <code>arn:aws:kms:us-east-2:123456789012:key/ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>. Use this format to specify a key in a different account.</p> </li> </ul> <p>Omit this key if you set <code>Type</code> to <code>NONE</code>.</p>|
|» Type|body|string|true|The type of encryption. Set to <code>KMS</code> to use your own key for encryption. Set to <code>NONE</code> for default encryption.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|NONE|
|» Type|KMS|

> Example responses

> 200 Response

```json
{
  "EncryptionConfig": {
    "KeyId": {},
    "Status": {},
    "Type": {}
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

<h3 id="putencryptionconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutEncryptionConfigResult](#schemaputencryptionconfigresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResourcePolicy

<a id="opIdPutResourcePolicy"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/PutResourcePolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "PolicyName": "string",
    "PolicyDocument": "string",
    "PolicyRevisionId": "string",
    "BypassPolicyLockoutCheck": true
  }'
```

`POST /PutResourcePolicy`

 Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web Services account can have a maximum of 5 resource policies, and each policy name must be unique within that account. The maximum size of each resource policy is 5KB. 

> Body parameter

```json
{
  "PolicyName": "string",
  "PolicyDocument": "string",
  "PolicyRevisionId": "string",
  "BypassPolicyLockoutCheck": true
}
```

<h3 id="putresourcepolicy-parameters">Parameters</h3>

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
|» PolicyName|body|string|true|The name of the resource policy. Must be unique within a specific Amazon Web Services account.|
|» PolicyDocument|body|string|true|The resource policy document, which can be up to 5kb in size.|
|» PolicyRevisionId|body|string|false|<p>Specifies a specific policy revision, to ensure an atomic create operation. By default the resource policy is created if it does not exist, or updated with an incremented revision id. The revision id is unique to each policy in the account.</p> <p>If the policy revision id does not match the latest revision id, the operation will fail with an <code>InvalidPolicyRevisionIdException</code> exception. You can also provide a <code>PolicyRevisionId</code> of 0. In this case, the operation will fail with an <code>InvalidPolicyRevisionIdException</code> exception if a resource policy with the same name already exists. </p>|
|» BypassPolicyLockoutCheck|body|boolean|false|<p>A flag to indicate whether to bypass the resource policy lockout safety check.</p> <important> <p>Setting this value to true increases the risk that the policy becomes unmanageable. Do not set this value to true indiscriminately.</p> </important> <p>Use this parameter only when you include a policy in the request and you intend to prevent the principal that is making the request from making a subsequent <code>PutResourcePolicy</code> request.</p> <p>The default value is false.</p>|

> Example responses

> 200 Response

```json
{
  "ResourcePolicy": {
    "PolicyName": {},
    "PolicyDocument": {},
    "PolicyRevisionId": {},
    "LastUpdatedTime": {}
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

<h3 id="putresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutResourcePolicyResult](#schemaputresourcepolicyresult)|
|480|480|MalformedPolicyDocumentException|[MalformedPolicyDocumentException](#schemamalformedpolicydocumentexception)|
|481|481|LockoutPreventionException|[LockoutPreventionException](#schemalockoutpreventionexception)|
|482|482|InvalidPolicyRevisionIdException|[InvalidPolicyRevisionIdException](#schemainvalidpolicyrevisionidexception)|
|483|483|PolicySizeLimitExceededException|[PolicySizeLimitExceededException](#schemapolicysizelimitexceededexception)|
|484|484|PolicyCountLimitExceededException|[PolicyCountLimitExceededException](#schemapolicycountlimitexceededexception)|
|485|485|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutTelemetryRecords

<a id="opIdPutTelemetryRecords"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/TelemetryRecords \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TelemetryRecords": [
      {
        "Timestamp": {},
        "SegmentsReceivedCount": {},
        "SegmentsSentCount": {},
        "SegmentsSpilloverCount": {},
        "SegmentsRejectedCount": {},
        "BackendConnectionErrors": {
          "TimeoutCount": {},
          "ConnectionRefusedCount": {},
          "HTTPCode4XXCount": {},
          "HTTPCode5XXCount": {},
          "UnknownHostCount": {},
          "OtherCount": {}
        }
      }
    ],
    "EC2InstanceId": "string",
    "Hostname": "string",
    "ResourceARN": "string"
  }'
```

`POST /TelemetryRecords`

Used by the Amazon Web Services X-Ray daemon to upload telemetry.

> Body parameter

```json
{
  "TelemetryRecords": [
    {
      "Timestamp": {},
      "SegmentsReceivedCount": {},
      "SegmentsSentCount": {},
      "SegmentsSpilloverCount": {},
      "SegmentsRejectedCount": {},
      "BackendConnectionErrors": {
        "TimeoutCount": {},
        "ConnectionRefusedCount": {},
        "HTTPCode4XXCount": {},
        "HTTPCode5XXCount": {},
        "UnknownHostCount": {},
        "OtherCount": {}
      }
    }
  ],
  "EC2InstanceId": "string",
  "Hostname": "string",
  "ResourceARN": "string"
}
```

<h3 id="puttelemetryrecords-parameters">Parameters</h3>

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
|» TelemetryRecords|body|[[TelemetryRecord](#schematelemetryrecord)]|true|<p/>|
|» EC2InstanceId|body|string|false|<p/>|
|» Hostname|body|string|false|<p/>|
|» ResourceARN|body|string|false|<p/>|

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

<h3 id="puttelemetryrecords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutTelemetryRecordsResult](#schemaputtelemetryrecordsresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutTraceSegments

<a id="opIdPutTraceSegments"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/TraceSegments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TraceSegmentDocuments": [
      "string"
    ]
  }'
```

`POST /TraceSegments`

<p>Uploads segment documents to Amazon Web Services X-Ray. The <a href="https://docs.aws.amazon.com/xray/index.html">X-Ray SDK</a> generates segment documents and sends them to the X-Ray daemon, which uploads them in batches. A segment document can be a completed segment, an in-progress segment, or an array of subsegments.</p> <p>Segments must include the following fields. For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p> <p class="title"> <b>Required segment document fields</b> </p> <ul> <li> <p> <code>name</code> - The name of the service that handled the request.</p> </li> <li> <p> <code>id</code> - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits.</p> </li> <li> <p> <code>trace_id</code> - A unique identifier that connects all segments and subsegments originating from a single client request.</p> </li> <li> <p> <code>start_time</code> - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, <code>1480615200.010</code> or <code>1.480615200010E9</code>.</p> </li> <li> <p> <code>end_time</code> - Time the segment or subsegment was closed. For example, <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an <code>end_time</code> or <code>in_progress</code>.</p> </li> <li> <p> <code>in_progress</code> - Set to <code>true</code> instead of specifying an <code>end_time</code> to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, to trace that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment.</p> </li> </ul> <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. This includes:</p> <p class="title"> <b>Trace ID Format</b> </p> <ul> <li> <p>The version number, for instance, <code>1</code>.</p> </li> <li> <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds, or <code>58406520</code> in hexadecimal.</p> </li> <li> <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits.</p> </li> </ul>

> Body parameter

```json
{
  "TraceSegmentDocuments": [
    "string"
  ]
}
```

<h3 id="puttracesegments-parameters">Parameters</h3>

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
|» TraceSegmentDocuments|body|[[TraceSegmentDocument](#schematracesegmentdocument)]|true|A string containing a JSON document defining one or more segments or subsegments.|

> Example responses

> 200 Response

```json
{
  "UnprocessedTraceSegments": {}
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

<h3 id="puttracesegments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutTraceSegmentsResult](#schemaputtracesegmentsresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/TagResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceARN": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /TagResource`

Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.

> Body parameter

```json
{
  "ResourceARN": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="tagresource-parameters">Parameters</h3>

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
|» ResourceARN|body|string|true|The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.|
|» Tags|body|[[Tag](#schematag)]|true|<p>A map that contains one or more tag keys and tag values to attach to an X-Ray group or sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Maximum tag key length: 128 Unicode characters</p> </li> <li> <p>Maximum tag value length: 256 Unicode characters</p> </li> <li> <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services use. You cannot edit or delete system tags.</p> </li> </ul>|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/UntagResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceARN": "string",
    "TagKeys": [
      "string"
    ]
  }'
```

`POST /UntagResource`

Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags (those with an <code>aws:</code> prefix).

> Body parameter

```json
{
  "ResourceARN": "string",
  "TagKeys": [
    "string"
  ]
}
```

<h3 id="untagresource-parameters">Parameters</h3>

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
|» ResourceARN|body|string|true|The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.|
|» TagKeys|body|[[TagKey](#schematagkey)]|true|Keys for one or more tags that you want to remove from an X-Ray group or sampling rule.|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGroup

<a id="opIdUpdateGroup"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/UpdateGroup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GroupName": "string",
    "GroupARN": "string",
    "FilterExpression": "string",
    "InsightsConfiguration": {
      "InsightsEnabled": {},
      "NotificationsEnabled": {}
    }
  }'
```

`POST /UpdateGroup`

Updates a group resource.

> Body parameter

```json
{
  "GroupName": "string",
  "GroupARN": "string",
  "FilterExpression": "string",
  "InsightsConfiguration": {
    "InsightsEnabled": {},
    "NotificationsEnabled": {}
  }
}
```

<h3 id="updategroup-parameters">Parameters</h3>

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
|» GroupName|body|string|false|The case-sensitive name of the group.|
|» GroupARN|body|string|false|The ARN that was generated upon creation.|
|» FilterExpression|body|string|false|The updated filter expression defining criteria by which to group traces.|
|» InsightsConfiguration|body|object|false|The structure containing configurations related to insights.|
|» » InsightsEnabled|body|object|false|none|
|» » NotificationsEnabled|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Group": {
    "GroupName": {},
    "GroupARN": {},
    "FilterExpression": {},
    "InsightsConfiguration": {
      "InsightsEnabled": {},
      "NotificationsEnabled": {}
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

<h3 id="updategroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGroupResult](#schemaupdategroupresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSamplingRule

<a id="opIdUpdateSamplingRule"></a>

> Code samples

```bash
curl https://xray.us-east-1.amazonaws.com/UpdateSamplingRule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SamplingRuleUpdate": {
      "RuleName": {},
      "RuleARN": {},
      "ResourceARN": {},
      "Priority": {},
      "FixedRate": {},
      "ReservoirSize": {},
      "Host": {},
      "ServiceName": {},
      "ServiceType": {},
      "HTTPMethod": {},
      "URLPath": {},
      "Attributes": {
        "property1": "string",
        "property2": "string"
      }
    }
  }'
```

`POST /UpdateSamplingRule`

Modifies a sampling rule's configuration.

> Body parameter

```json
{
  "SamplingRuleUpdate": {
    "RuleName": {},
    "RuleARN": {},
    "ResourceARN": {},
    "Priority": {},
    "FixedRate": {},
    "ReservoirSize": {},
    "Host": {},
    "ServiceName": {},
    "ServiceType": {},
    "HTTPMethod": {},
    "URLPath": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="updatesamplingrule-parameters">Parameters</h3>

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
|» SamplingRuleUpdate|body|object|true|A document specifying changes to a sampling rule's configuration.|
|» » RuleName|body|object|false|none|
|» » RuleARN|body|object|false|none|
|» » ResourceARN|body|object|false|none|
|» » Priority|body|object|false|none|
|» » FixedRate|body|object|false|none|
|» » ReservoirSize|body|object|false|none|
|» » Host|body|object|false|none|
|» » ServiceName|body|object|false|none|
|» » ServiceType|body|object|false|none|
|» » HTTPMethod|body|object|false|none|
|» » URLPath|body|object|false|none|
|» » Attributes|body|object|false|none|
|» » » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|none|

> Example responses

> 200 Response

```json
{
  "SamplingRuleRecord": {
    "SamplingRule": {
      "RuleName": {},
      "RuleARN": {},
      "ResourceARN": {},
      "Priority": {},
      "FixedRate": {},
      "ReservoirSize": {},
      "ServiceName": {},
      "ServiceType": {},
      "Host": {},
      "HTTPMethod": {},
      "URLPath": {},
      "Version": {},
      "Attributes": {
        "property1": "string",
        "property2": "string"
      }
    },
    "CreatedAt": {},
    "ModifiedAt": {}
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

<h3 id="updatesamplingrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSamplingRuleResult](#schemaupdatesamplingruleresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchGetTracesResult">BatchGetTracesResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchgettracesresult"></a>
<a id="schema_BatchGetTracesResult"></a>
<a id="tocSbatchgettracesresult"></a>
<a id="tocsbatchgettracesresult"></a>

```json
{
  "Traces": {},
  "UnprocessedTraceIds": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Traces|object|false|none|none|
|UnprocessedTraceIds|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_TraceId">TraceId</h2>
<!-- backwards compatibility -->
<a id="schematraceid"></a>
<a id="schema_TraceId"></a>
<a id="tocStraceid"></a>
<a id="tocstraceid"></a>

```json
"string"
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

<h2 id="tocS_ThrottledException">ThrottledException</h2>
<!-- backwards compatibility -->
<a id="schemathrottledexception"></a>
<a id="schema_ThrottledException"></a>
<a id="tocSthrottledexception"></a>
<a id="tocsthrottledexception"></a>

```json
null
```

<h2 id="tocS_CreateGroupResult">CreateGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemacreategroupresult"></a>
<a id="schema_CreateGroupResult"></a>
<a id="tocScreategroupresult"></a>
<a id="tocscreategroupresult"></a>

```json
{
  "Group": {
    "GroupName": {},
    "GroupARN": {},
    "FilterExpression": {},
    "InsightsConfiguration": {
      "InsightsEnabled": {},
      "NotificationsEnabled": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|false|none|none|

<h2 id="tocS_NullableBoolean">NullableBoolean</h2>
<!-- backwards compatibility -->
<a id="schemanullableboolean"></a>
<a id="schema_NullableBoolean"></a>
<a id="tocSnullableboolean"></a>
<a id="tocsnullableboolean"></a>

```json
true
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

<p>A map that contains tag keys and tag values to attach to an Amazon Web Services X-Ray group or sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services use. You cannot edit or delete system tags.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_CreateSamplingRuleResult">CreateSamplingRuleResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatesamplingruleresult"></a>
<a id="schema_CreateSamplingRuleResult"></a>
<a id="tocScreatesamplingruleresult"></a>
<a id="tocscreatesamplingruleresult"></a>

```json
{
  "SamplingRuleRecord": {
    "SamplingRule": {
      "RuleName": {},
      "RuleARN": {},
      "ResourceARN": {},
      "Priority": {},
      "FixedRate": {},
      "ReservoirSize": {},
      "ServiceName": {},
      "ServiceType": {},
      "Host": {},
      "HTTPMethod": {},
      "URLPath": {},
      "Version": {},
      "Attributes": {
        "property1": "string",
        "property2": "string"
      }
    },
    "CreatedAt": {},
    "ModifiedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SamplingRuleRecord|object|false|none|none|

<h2 id="tocS_RuleName">RuleName</h2>
<!-- backwards compatibility -->
<a id="schemarulename"></a>
<a id="schema_RuleName"></a>
<a id="tocSrulename"></a>
<a id="tocsrulename"></a>

```json
"string"
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

<h2 id="tocS_ResourceARN">ResourceARN</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceARN"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_Priority">Priority</h2>
<!-- backwards compatibility -->
<a id="schemapriority"></a>
<a id="schema_Priority"></a>
<a id="tocSpriority"></a>
<a id="tocspriority"></a>

```json
1
```

<h2 id="tocS_FixedRate">FixedRate</h2>
<!-- backwards compatibility -->
<a id="schemafixedrate"></a>
<a id="schema_FixedRate"></a>
<a id="tocSfixedrate"></a>
<a id="tocsfixedrate"></a>

```json
0
```

<h2 id="tocS_ReservoirSize">ReservoirSize</h2>
<!-- backwards compatibility -->
<a id="schemareservoirsize"></a>
<a id="schema_ReservoirSize"></a>
<a id="tocSreservoirsize"></a>
<a id="tocsreservoirsize"></a>

```json
0
```

<h2 id="tocS_ServiceName">ServiceName</h2>
<!-- backwards compatibility -->
<a id="schemaservicename"></a>
<a id="schema_ServiceName"></a>
<a id="tocSservicename"></a>
<a id="tocsservicename"></a>

```json
"string"
```

<h2 id="tocS_ServiceType">ServiceType</h2>
<!-- backwards compatibility -->
<a id="schemaservicetype"></a>
<a id="schema_ServiceType"></a>
<a id="tocSservicetype"></a>
<a id="tocsservicetype"></a>

```json
"string"
```

<h2 id="tocS_Host">Host</h2>
<!-- backwards compatibility -->
<a id="schemahost"></a>
<a id="schema_Host"></a>
<a id="tocShost"></a>
<a id="tocshost"></a>

```json
"string"
```

<h2 id="tocS_HTTPMethod">HTTPMethod</h2>
<!-- backwards compatibility -->
<a id="schemahttpmethod"></a>
<a id="schema_HTTPMethod"></a>
<a id="tocShttpmethod"></a>
<a id="tocshttpmethod"></a>

```json
"string"
```

<h2 id="tocS_URLPath">URLPath</h2>
<!-- backwards compatibility -->
<a id="schemaurlpath"></a>
<a id="schema_URLPath"></a>
<a id="tocSurlpath"></a>
<a id="tocsurlpath"></a>

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
1
```

<h2 id="tocS_AttributeMap">AttributeMap</h2>
<!-- backwards compatibility -->
<a id="schemaattributemap"></a>
<a id="schema_AttributeMap"></a>
<a id="tocSattributemap"></a>
<a id="tocsattributemap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AttributeValue](#schemaattributevalue)|false|none|none|

<h2 id="tocS_RuleLimitExceededException">RuleLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemarulelimitexceededexception"></a>
<a id="schema_RuleLimitExceededException"></a>
<a id="tocSrulelimitexceededexception"></a>
<a id="tocsrulelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_DeleteGroupResult">DeleteGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletegroupresult"></a>
<a id="schema_DeleteGroupResult"></a>
<a id="tocSdeletegroupresult"></a>
<a id="tocsdeletegroupresult"></a>

```json
{}
```

<h2 id="tocS_DeleteResourcePolicyResult">DeleteResourcePolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyresult"></a>
<a id="schema_DeleteResourcePolicyResult"></a>
<a id="tocSdeleteresourcepolicyresult"></a>
<a id="tocsdeleteresourcepolicyresult"></a>

```json
{}
```

<h2 id="tocS_InvalidPolicyRevisionIdException">InvalidPolicyRevisionIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpolicyrevisionidexception"></a>
<a id="schema_InvalidPolicyRevisionIdException"></a>
<a id="tocSinvalidpolicyrevisionidexception"></a>
<a id="tocsinvalidpolicyrevisionidexception"></a>

```json
null
```

<h2 id="tocS_DeleteSamplingRuleResult">DeleteSamplingRuleResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletesamplingruleresult"></a>
<a id="schema_DeleteSamplingRuleResult"></a>
<a id="tocSdeletesamplingruleresult"></a>
<a id="tocsdeletesamplingruleresult"></a>

```json
{
  "SamplingRuleRecord": {
    "SamplingRule": {
      "RuleName": {},
      "RuleARN": {},
      "ResourceARN": {},
      "Priority": {},
      "FixedRate": {},
      "ReservoirSize": {},
      "ServiceName": {},
      "ServiceType": {},
      "Host": {},
      "HTTPMethod": {},
      "URLPath": {},
      "Version": {},
      "Attributes": {
        "property1": "string",
        "property2": "string"
      }
    },
    "CreatedAt": {},
    "ModifiedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SamplingRuleRecord|object|false|none|none|

<h2 id="tocS_GetEncryptionConfigResult">GetEncryptionConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemagetencryptionconfigresult"></a>
<a id="schema_GetEncryptionConfigResult"></a>
<a id="tocSgetencryptionconfigresult"></a>
<a id="tocsgetencryptionconfigresult"></a>

```json
{
  "EncryptionConfig": {
    "KeyId": {},
    "Status": {},
    "Type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncryptionConfig|object|false|none|none|

<h2 id="tocS_GetGroupResult">GetGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupresult"></a>
<a id="schema_GetGroupResult"></a>
<a id="tocSgetgroupresult"></a>
<a id="tocsgetgroupresult"></a>

```json
{
  "Group": {
    "GroupName": {},
    "GroupARN": {},
    "FilterExpression": {},
    "InsightsConfiguration": {
      "InsightsEnabled": {},
      "NotificationsEnabled": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|false|none|none|

<h2 id="tocS_GetGroupsResult">GetGroupsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupsresult"></a>
<a id="schema_GetGroupsResult"></a>
<a id="tocSgetgroupsresult"></a>
<a id="tocsgetgroupsresult"></a>

```json
{
  "Groups": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Groups|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetInsightResult">GetInsightResult</h2>
<!-- backwards compatibility -->
<a id="schemagetinsightresult"></a>
<a id="schema_GetInsightResult"></a>
<a id="tocSgetinsightresult"></a>
<a id="tocsgetinsightresult"></a>

```json
{
  "Insight": {
    "InsightId": {},
    "GroupARN": {},
    "GroupName": {},
    "RootCauseServiceId": {
      "Name": {},
      "Names": {},
      "AccountId": {},
      "Type": {}
    },
    "Categories": {},
    "State": {},
    "StartTime": {},
    "EndTime": {},
    "Summary": {},
    "ClientRequestImpactStatistics": {
      "FaultCount": {},
      "OkCount": {},
      "TotalCount": {}
    },
    "RootCauseServiceRequestImpactStatistics": {
      "FaultCount": {},
      "OkCount": {},
      "TotalCount": {}
    },
    "TopAnomalousServices": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Insight|object|false|none|none|

<h2 id="tocS_GetInsightEventsResult">GetInsightEventsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetinsighteventsresult"></a>
<a id="schema_GetInsightEventsResult"></a>
<a id="tocSgetinsighteventsresult"></a>
<a id="tocsgetinsighteventsresult"></a>

```json
{
  "InsightEvents": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsightEvents|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetInsightImpactGraphResult">GetInsightImpactGraphResult</h2>
<!-- backwards compatibility -->
<a id="schemagetinsightimpactgraphresult"></a>
<a id="schema_GetInsightImpactGraphResult"></a>
<a id="tocSgetinsightimpactgraphresult"></a>
<a id="tocsgetinsightimpactgraphresult"></a>

```json
{
  "InsightId": {},
  "StartTime": {},
  "EndTime": {},
  "ServiceGraphStartTime": {},
  "ServiceGraphEndTime": {},
  "Services": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsightId|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|ServiceGraphStartTime|object|false|none|none|
|ServiceGraphEndTime|object|false|none|none|
|Services|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetInsightSummariesResult">GetInsightSummariesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetinsightsummariesresult"></a>
<a id="schema_GetInsightSummariesResult"></a>
<a id="tocSgetinsightsummariesresult"></a>
<a id="tocsgetinsightsummariesresult"></a>

```json
{
  "InsightSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsightSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InsightState">InsightState</h2>
<!-- backwards compatibility -->
<a id="schemainsightstate"></a>
<a id="schema_InsightState"></a>
<a id="tocSinsightstate"></a>
<a id="tocsinsightstate"></a>

```json
"ACTIVE"
```

<h2 id="tocS_GetSamplingRulesResult">GetSamplingRulesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetsamplingrulesresult"></a>
<a id="schema_GetSamplingRulesResult"></a>
<a id="tocSgetsamplingrulesresult"></a>
<a id="tocsgetsamplingrulesresult"></a>

```json
{
  "SamplingRuleRecords": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SamplingRuleRecords|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetSamplingStatisticSummariesResult">GetSamplingStatisticSummariesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetsamplingstatisticsummariesresult"></a>
<a id="schema_GetSamplingStatisticSummariesResult"></a>
<a id="tocSgetsamplingstatisticsummariesresult"></a>
<a id="tocsgetsamplingstatisticsummariesresult"></a>

```json
{
  "SamplingStatisticSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SamplingStatisticSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetSamplingTargetsResult">GetSamplingTargetsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetsamplingtargetsresult"></a>
<a id="schema_GetSamplingTargetsResult"></a>
<a id="tocSgetsamplingtargetsresult"></a>
<a id="tocsgetsamplingtargetsresult"></a>

```json
{
  "SamplingTargetDocuments": {},
  "LastRuleModification": {},
  "UnprocessedStatistics": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SamplingTargetDocuments|object|false|none|none|
|LastRuleModification|object|false|none|none|
|UnprocessedStatistics|object|false|none|none|

<h2 id="tocS_SamplingStatisticsDocument">SamplingStatisticsDocument</h2>
<!-- backwards compatibility -->
<a id="schemasamplingstatisticsdocument"></a>
<a id="schema_SamplingStatisticsDocument"></a>
<a id="tocSsamplingstatisticsdocument"></a>
<a id="tocssamplingstatisticsdocument"></a>

```json
{
  "RuleName": {},
  "ClientID": {},
  "Timestamp": {},
  "RequestCount": {},
  "SampledCount": {},
  "BorrowCount": {}
}
```

Request sampling results for a single rule from a service. Results are for the last 10 seconds unless the service has been assigned a longer reporting interval after a previous call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleName|object|true|none|none|
|ClientID|object|true|none|none|
|Timestamp|object|true|none|none|
|RequestCount|object|true|none|none|
|SampledCount|object|true|none|none|
|BorrowCount|object|false|none|none|

<h2 id="tocS_GetServiceGraphResult">GetServiceGraphResult</h2>
<!-- backwards compatibility -->
<a id="schemagetservicegraphresult"></a>
<a id="schema_GetServiceGraphResult"></a>
<a id="tocSgetservicegraphresult"></a>
<a id="tocsgetservicegraphresult"></a>

```json
{
  "StartTime": {},
  "EndTime": {},
  "Services": {},
  "ContainsOldGroupVersions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Services|object|false|none|none|
|ContainsOldGroupVersions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetTimeSeriesServiceStatisticsResult">GetTimeSeriesServiceStatisticsResult</h2>
<!-- backwards compatibility -->
<a id="schemagettimeseriesservicestatisticsresult"></a>
<a id="schema_GetTimeSeriesServiceStatisticsResult"></a>
<a id="tocSgettimeseriesservicestatisticsresult"></a>
<a id="tocsgettimeseriesservicestatisticsresult"></a>

```json
{
  "TimeSeriesServiceStatistics": {},
  "ContainsOldGroupVersions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeSeriesServiceStatistics|object|false|none|none|
|ContainsOldGroupVersions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetTraceGraphResult">GetTraceGraphResult</h2>
<!-- backwards compatibility -->
<a id="schemagettracegraphresult"></a>
<a id="schema_GetTraceGraphResult"></a>
<a id="tocSgettracegraphresult"></a>
<a id="tocsgettracegraphresult"></a>

```json
{
  "Services": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Services|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetTraceSummariesResult">GetTraceSummariesResult</h2>
<!-- backwards compatibility -->
<a id="schemagettracesummariesresult"></a>
<a id="schema_GetTraceSummariesResult"></a>
<a id="tocSgettracesummariesresult"></a>
<a id="tocsgettracesummariesresult"></a>

```json
{
  "TraceSummaries": {},
  "ApproximateTime": {},
  "TracesProcessedCount": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TraceSummaries|object|false|none|none|
|ApproximateTime|object|false|none|none|
|TracesProcessedCount|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_SamplingStrategyName">SamplingStrategyName</h2>
<!-- backwards compatibility -->
<a id="schemasamplingstrategyname"></a>
<a id="schema_SamplingStrategyName"></a>
<a id="tocSsamplingstrategyname"></a>
<a id="tocssamplingstrategyname"></a>

```json
"PartialScan"
```

<h2 id="tocS_NullableDouble">NullableDouble</h2>
<!-- backwards compatibility -->
<a id="schemanullabledouble"></a>
<a id="schema_NullableDouble"></a>
<a id="tocSnullabledouble"></a>
<a id="tocsnullabledouble"></a>

```json
0
```

<h2 id="tocS_ListResourcePoliciesResult">ListResourcePoliciesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcepoliciesresult"></a>
<a id="schema_ListResourcePoliciesResult"></a>
<a id="tocSlistresourcepoliciesresult"></a>
<a id="tocslistresourcepoliciesresult"></a>

```json
{
  "ResourcePolicies": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourcePolicies|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

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

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_PutEncryptionConfigResult">PutEncryptionConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemaputencryptionconfigresult"></a>
<a id="schema_PutEncryptionConfigResult"></a>
<a id="tocSputencryptionconfigresult"></a>
<a id="tocsputencryptionconfigresult"></a>

```json
{
  "EncryptionConfig": {
    "KeyId": {},
    "Status": {},
    "Type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncryptionConfig|object|false|none|none|

<h2 id="tocS_PutResourcePolicyResult">PutResourcePolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyresult"></a>
<a id="schema_PutResourcePolicyResult"></a>
<a id="tocSputresourcepolicyresult"></a>
<a id="tocsputresourcepolicyresult"></a>

```json
{
  "ResourcePolicy": {
    "PolicyName": {},
    "PolicyDocument": {},
    "PolicyRevisionId": {},
    "LastUpdatedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourcePolicy|object|false|none|none|

<h2 id="tocS_MalformedPolicyDocumentException">MalformedPolicyDocumentException</h2>
<!-- backwards compatibility -->
<a id="schemamalformedpolicydocumentexception"></a>
<a id="schema_MalformedPolicyDocumentException"></a>
<a id="tocSmalformedpolicydocumentexception"></a>
<a id="tocsmalformedpolicydocumentexception"></a>

```json
null
```

<h2 id="tocS_LockoutPreventionException">LockoutPreventionException</h2>
<!-- backwards compatibility -->
<a id="schemalockoutpreventionexception"></a>
<a id="schema_LockoutPreventionException"></a>
<a id="tocSlockoutpreventionexception"></a>
<a id="tocslockoutpreventionexception"></a>

```json
null
```

<h2 id="tocS_PolicySizeLimitExceededException">PolicySizeLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemapolicysizelimitexceededexception"></a>
<a id="schema_PolicySizeLimitExceededException"></a>
<a id="tocSpolicysizelimitexceededexception"></a>
<a id="tocspolicysizelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_PolicyCountLimitExceededException">PolicyCountLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemapolicycountlimitexceededexception"></a>
<a id="schema_PolicyCountLimitExceededException"></a>
<a id="tocSpolicycountlimitexceededexception"></a>
<a id="tocspolicycountlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_PutTelemetryRecordsResult">PutTelemetryRecordsResult</h2>
<!-- backwards compatibility -->
<a id="schemaputtelemetryrecordsresult"></a>
<a id="schema_PutTelemetryRecordsResult"></a>
<a id="tocSputtelemetryrecordsresult"></a>
<a id="tocsputtelemetryrecordsresult"></a>

```json
{}
```

<h2 id="tocS_TelemetryRecord">TelemetryRecord</h2>
<!-- backwards compatibility -->
<a id="schematelemetryrecord"></a>
<a id="schema_TelemetryRecord"></a>
<a id="tocStelemetryrecord"></a>
<a id="tocstelemetryrecord"></a>

```json
{
  "Timestamp": {},
  "SegmentsReceivedCount": {},
  "SegmentsSentCount": {},
  "SegmentsSpilloverCount": {},
  "SegmentsRejectedCount": {},
  "BackendConnectionErrors": {
    "TimeoutCount": {},
    "ConnectionRefusedCount": {},
    "HTTPCode4XXCount": {},
    "HTTPCode5XXCount": {},
    "UnknownHostCount": {},
    "OtherCount": {}
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timestamp|object|true|none|none|
|SegmentsReceivedCount|object|false|none|none|
|SegmentsSentCount|object|false|none|none|
|SegmentsSpilloverCount|object|false|none|none|
|SegmentsRejectedCount|object|false|none|none|
|BackendConnectionErrors|object|false|none|none|

<h2 id="tocS_PutTraceSegmentsResult">PutTraceSegmentsResult</h2>
<!-- backwards compatibility -->
<a id="schemaputtracesegmentsresult"></a>
<a id="schema_PutTraceSegmentsResult"></a>
<a id="tocSputtracesegmentsresult"></a>
<a id="tocsputtracesegmentsresult"></a>

```json
{
  "UnprocessedTraceSegments": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UnprocessedTraceSegments|object|false|none|none|

<h2 id="tocS_TraceSegmentDocument">TraceSegmentDocument</h2>
<!-- backwards compatibility -->
<a id="schematracesegmentdocument"></a>
<a id="schema_TraceSegmentDocument"></a>
<a id="tocStracesegmentdocument"></a>
<a id="tocstracesegmentdocument"></a>

```json
"string"
```

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

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

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_UpdateGroupResult">UpdateGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdategroupresult"></a>
<a id="schema_UpdateGroupResult"></a>
<a id="tocSupdategroupresult"></a>
<a id="tocsupdategroupresult"></a>

```json
{
  "Group": {
    "GroupName": {},
    "GroupARN": {},
    "FilterExpression": {},
    "InsightsConfiguration": {
      "InsightsEnabled": {},
      "NotificationsEnabled": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|false|none|none|

<h2 id="tocS_UpdateSamplingRuleResult">UpdateSamplingRuleResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesamplingruleresult"></a>
<a id="schema_UpdateSamplingRuleResult"></a>
<a id="tocSupdatesamplingruleresult"></a>
<a id="tocsupdatesamplingruleresult"></a>

```json
{
  "SamplingRuleRecord": {
    "SamplingRule": {
      "RuleName": {},
      "RuleARN": {},
      "ResourceARN": {},
      "Priority": {},
      "FixedRate": {},
      "ReservoirSize": {},
      "ServiceName": {},
      "ServiceType": {},
      "Host": {},
      "HTTPMethod": {},
      "URLPath": {},
      "Version": {},
      "Attributes": {
        "property1": "string",
        "property2": "string"
      }
    },
    "CreatedAt": {},
    "ModifiedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SamplingRuleRecord|object|false|none|none|

<h2 id="tocS_NullableInteger">NullableInteger</h2>
<!-- backwards compatibility -->
<a id="schemanullableinteger"></a>
<a id="schema_NullableInteger"></a>
<a id="tocSnullableinteger"></a>
<a id="tocsnullableinteger"></a>

```json
0
```

<h2 id="tocS_AliasNames">AliasNames</h2>
<!-- backwards compatibility -->
<a id="schemaaliasnames"></a>
<a id="schema_AliasNames"></a>
<a id="tocSaliasnames"></a>
<a id="tocsaliasnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Alias">Alias</h2>
<!-- backwards compatibility -->
<a id="schemaalias"></a>
<a id="schema_Alias"></a>
<a id="tocSalias"></a>
<a id="tocsalias"></a>

```json
{
  "Name": {},
  "Names": {},
  "Type": {}
}
```

An alias for an edge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Names|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_AliasList">AliasList</h2>
<!-- backwards compatibility -->
<a id="schemaaliaslist"></a>
<a id="schema_AliasList"></a>
<a id="tocSaliaslist"></a>
<a id="tocsaliaslist"></a>

```json
[
  {
    "Name": {},
    "Names": {},
    "Type": {}
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

<h2 id="tocS_AnnotationKey">AnnotationKey</h2>
<!-- backwards compatibility -->
<a id="schemaannotationkey"></a>
<a id="schema_AnnotationKey"></a>
<a id="tocSannotationkey"></a>
<a id="tocsannotationkey"></a>

```json
"string"
```

<h2 id="tocS_AnnotationValue">AnnotationValue</h2>
<!-- backwards compatibility -->
<a id="schemaannotationvalue"></a>
<a id="schema_AnnotationValue"></a>
<a id="tocSannotationvalue"></a>
<a id="tocsannotationvalue"></a>

```json
{
  "NumberValue": {},
  "BooleanValue": {},
  "StringValue": {}
}
```

Value of a segment annotation. Has one of three value types: Number, Boolean, or String.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NumberValue|object|false|none|none|
|BooleanValue|object|false|none|none|
|StringValue|object|false|none|none|

<h2 id="tocS_ValuesWithServiceIds">ValuesWithServiceIds</h2>
<!-- backwards compatibility -->
<a id="schemavalueswithserviceids"></a>
<a id="schema_ValuesWithServiceIds"></a>
<a id="tocSvalueswithserviceids"></a>
<a id="tocsvalueswithserviceids"></a>

```json
[
  {
    "AnnotationValue": {
      "NumberValue": {},
      "BooleanValue": {},
      "StringValue": {}
    },
    "ServiceIds": {}
  }
]
```

<h2 id="tocS_Annotations">Annotations</h2>
<!-- backwards compatibility -->
<a id="schemaannotations"></a>
<a id="schema_Annotations"></a>
<a id="tocSannotations"></a>
<a id="tocsannotations"></a>

```json
{
  "property1": [
    {
      "AnnotationValue": {
        "NumberValue": {},
        "BooleanValue": {},
        "StringValue": {}
      },
      "ServiceIds": {}
    }
  ],
  "property2": [
    {
      "AnnotationValue": {
        "NumberValue": {},
        "BooleanValue": {},
        "StringValue": {}
      },
      "ServiceIds": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ValuesWithServiceIds](#schemavalueswithserviceids)|false|none|none|

<h2 id="tocS_ServiceId">ServiceId</h2>
<!-- backwards compatibility -->
<a id="schemaserviceid"></a>
<a id="schema_ServiceId"></a>
<a id="tocSserviceid"></a>
<a id="tocsserviceid"></a>

```json
{
  "Name": {},
  "Names": {},
  "AccountId": {},
  "Type": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Names|object|false|none|none|
|AccountId|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_AnomalousService">AnomalousService</h2>
<!-- backwards compatibility -->
<a id="schemaanomalousservice"></a>
<a id="schema_AnomalousService"></a>
<a id="tocSanomalousservice"></a>
<a id="tocsanomalousservice"></a>

```json
{
  "ServiceId": {
    "Name": {},
    "Names": {},
    "AccountId": {},
    "Type": {}
  }
}
```

The service within the service graph that has anomalously high fault rates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceId|[ServiceId](#schemaserviceid)|false|none|<p/>|

<h2 id="tocS_AnomalousServiceList">AnomalousServiceList</h2>
<!-- backwards compatibility -->
<a id="schemaanomalousservicelist"></a>
<a id="schema_AnomalousServiceList"></a>
<a id="tocSanomalousservicelist"></a>
<a id="tocsanomalousservicelist"></a>

```json
[
  {
    "ServiceId": {
      "Name": {},
      "Names": {},
      "AccountId": {},
      "Type": {}
    }
  }
]
```

<h2 id="tocS_AttributeKey">AttributeKey</h2>
<!-- backwards compatibility -->
<a id="schemaattributekey"></a>
<a id="schema_AttributeKey"></a>
<a id="tocSattributekey"></a>
<a id="tocsattributekey"></a>

```json
"string"
```

<h2 id="tocS_AttributeValue">AttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalue"></a>
<a id="schema_AttributeValue"></a>
<a id="tocSattributevalue"></a>
<a id="tocsattributevalue"></a>

```json
"string"
```

<h2 id="tocS_AvailabilityZoneDetail">AvailabilityZoneDetail</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzonedetail"></a>
<a id="schema_AvailabilityZoneDetail"></a>
<a id="tocSavailabilityzonedetail"></a>
<a id="tocsavailabilityzonedetail"></a>

```json
{
  "Name": {}
}
```

A list of Availability Zones corresponding to the segments in a trace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_BackendConnectionErrors">BackendConnectionErrors</h2>
<!-- backwards compatibility -->
<a id="schemabackendconnectionerrors"></a>
<a id="schema_BackendConnectionErrors"></a>
<a id="tocSbackendconnectionerrors"></a>
<a id="tocsbackendconnectionerrors"></a>

```json
{
  "TimeoutCount": {},
  "ConnectionRefusedCount": {},
  "HTTPCode4XXCount": {},
  "HTTPCode5XXCount": {},
  "UnknownHostCount": {},
  "OtherCount": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeoutCount|object|false|none|none|
|ConnectionRefusedCount|object|false|none|none|
|HTTPCode4XXCount|object|false|none|none|
|HTTPCode5XXCount|object|false|none|none|
|UnknownHostCount|object|false|none|none|
|OtherCount|object|false|none|none|

<h2 id="tocS_TraceIdList">TraceIdList</h2>
<!-- backwards compatibility -->
<a id="schematraceidlist"></a>
<a id="schema_TraceIdList"></a>
<a id="tocStraceidlist"></a>
<a id="tocstraceidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchGetTracesRequest">BatchGetTracesRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgettracesrequest"></a>
<a id="schema_BatchGetTracesRequest"></a>
<a id="tocSbatchgettracesrequest"></a>
<a id="tocsbatchgettracesrequest"></a>

```json
{
  "TraceIds": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TraceIds|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_TraceList">TraceList</h2>
<!-- backwards compatibility -->
<a id="schematracelist"></a>
<a id="schema_TraceList"></a>
<a id="tocStracelist"></a>
<a id="tocstracelist"></a>

```json
[
  {
    "Id": {},
    "Duration": {},
    "LimitExceeded": {},
    "Segments": {}
  }
]
```

<h2 id="tocS_UnprocessedTraceIdList">UnprocessedTraceIdList</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedtraceidlist"></a>
<a id="schema_UnprocessedTraceIdList"></a>
<a id="tocSunprocessedtraceidlist"></a>
<a id="tocsunprocessedtraceidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_BorrowCount">BorrowCount</h2>
<!-- backwards compatibility -->
<a id="schemaborrowcount"></a>
<a id="schema_BorrowCount"></a>
<a id="tocSborrowcount"></a>
<a id="tocsborrowcount"></a>

```json
0
```

<h2 id="tocS_ClientID">ClientID</h2>
<!-- backwards compatibility -->
<a id="schemaclientid"></a>
<a id="schema_ClientID"></a>
<a id="tocSclientid"></a>
<a id="tocsclientid"></a>

```json
"stringstringstringstring"
```

<h2 id="tocS_GroupName">GroupName</h2>
<!-- backwards compatibility -->
<a id="schemagroupname"></a>
<a id="schema_GroupName"></a>
<a id="tocSgroupname"></a>
<a id="tocsgroupname"></a>

```json
"string"
```

<h2 id="tocS_FilterExpression">FilterExpression</h2>
<!-- backwards compatibility -->
<a id="schemafilterexpression"></a>
<a id="schema_FilterExpression"></a>
<a id="tocSfilterexpression"></a>
<a id="tocsfilterexpression"></a>

```json
"string"
```

<h2 id="tocS_InsightsConfiguration">InsightsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainsightsconfiguration"></a>
<a id="schema_InsightsConfiguration"></a>
<a id="tocSinsightsconfiguration"></a>
<a id="tocsinsightsconfiguration"></a>

```json
{
  "InsightsEnabled": {},
  "NotificationsEnabled": {}
}
```

The structure containing configurations related to insights.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsightsEnabled|object|false|none|none|
|NotificationsEnabled|object|false|none|none|

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

<h2 id="tocS_CreateGroupRequest">CreateGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategrouprequest"></a>
<a id="schema_CreateGroupRequest"></a>
<a id="tocScreategrouprequest"></a>
<a id="tocscreategrouprequest"></a>

```json
{
  "GroupName": {},
  "FilterExpression": {},
  "InsightsConfiguration": {
    "InsightsEnabled": {},
    "NotificationsEnabled": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|true|none|none|
|FilterExpression|object|false|none|none|
|InsightsConfiguration|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "GroupName": {},
  "GroupARN": {},
  "FilterExpression": {},
  "InsightsConfiguration": {
    "InsightsEnabled": {},
    "NotificationsEnabled": {}
  }
}
```

Details and metadata for a group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|false|none|none|
|GroupARN|object|false|none|none|
|FilterExpression|object|false|none|none|
|InsightsConfiguration|object|false|none|none|

<h2 id="tocS_SamplingRule">SamplingRule</h2>
<!-- backwards compatibility -->
<a id="schemasamplingrule"></a>
<a id="schema_SamplingRule"></a>
<a id="tocSsamplingrule"></a>
<a id="tocssamplingrule"></a>

```json
{
  "RuleName": {},
  "RuleARN": {},
  "ResourceARN": {},
  "Priority": {},
  "FixedRate": {},
  "ReservoirSize": {},
  "ServiceName": {},
  "ServiceType": {},
  "Host": {},
  "HTTPMethod": {},
  "URLPath": {},
  "Version": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleName|object|false|none|none|
|RuleARN|object|false|none|none|
|ResourceARN|object|true|none|none|
|Priority|object|true|none|none|
|FixedRate|object|true|none|none|
|ReservoirSize|object|true|none|none|
|ServiceName|object|true|none|none|
|ServiceType|object|true|none|none|
|Host|object|true|none|none|
|HTTPMethod|object|true|none|none|
|URLPath|object|true|none|none|
|Version|object|true|none|none|
|Attributes|object|false|none|none|

<h2 id="tocS_CreateSamplingRuleRequest">CreateSamplingRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesamplingrulerequest"></a>
<a id="schema_CreateSamplingRuleRequest"></a>
<a id="tocScreatesamplingrulerequest"></a>
<a id="tocscreatesamplingrulerequest"></a>

```json
{
  "SamplingRule": {
    "RuleName": {},
    "RuleARN": {},
    "ResourceARN": {},
    "Priority": {},
    "FixedRate": {},
    "ReservoirSize": {},
    "ServiceName": {},
    "ServiceType": {},
    "Host": {},
    "HTTPMethod": {},
    "URLPath": {},
    "Version": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    }
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SamplingRule|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_SamplingRuleRecord">SamplingRuleRecord</h2>
<!-- backwards compatibility -->
<a id="schemasamplingrulerecord"></a>
<a id="schema_SamplingRuleRecord"></a>
<a id="tocSsamplingrulerecord"></a>
<a id="tocssamplingrulerecord"></a>

```json
{
  "SamplingRule": {
    "RuleName": {},
    "RuleARN": {},
    "ResourceARN": {},
    "Priority": {},
    "FixedRate": {},
    "ReservoirSize": {},
    "ServiceName": {},
    "ServiceType": {},
    "Host": {},
    "HTTPMethod": {},
    "URLPath": {},
    "Version": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    }
  },
  "CreatedAt": {},
  "ModifiedAt": {}
}
```

A <a href="https://docs.aws.amazon.com/xray/latest/api/API_SamplingRule.html">SamplingRule</a> and its metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SamplingRule|object|false|none|none|
|CreatedAt|object|false|none|none|
|ModifiedAt|object|false|none|none|

<h2 id="tocS_GroupARN">GroupARN</h2>
<!-- backwards compatibility -->
<a id="schemagrouparn"></a>
<a id="schema_GroupARN"></a>
<a id="tocSgrouparn"></a>
<a id="tocsgrouparn"></a>

```json
"string"
```

<h2 id="tocS_DeleteGroupRequest">DeleteGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletegrouprequest"></a>
<a id="schema_DeleteGroupRequest"></a>
<a id="tocSdeletegrouprequest"></a>
<a id="tocsdeletegrouprequest"></a>

```json
{
  "GroupName": {},
  "GroupARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|false|none|none|
|GroupARN|object|false|none|none|

<h2 id="tocS_PolicyName">PolicyName</h2>
<!-- backwards compatibility -->
<a id="schemapolicyname"></a>
<a id="schema_PolicyName"></a>
<a id="tocSpolicyname"></a>
<a id="tocspolicyname"></a>

```json
"string"
```

<h2 id="tocS_PolicyRevisionId">PolicyRevisionId</h2>
<!-- backwards compatibility -->
<a id="schemapolicyrevisionid"></a>
<a id="schema_PolicyRevisionId"></a>
<a id="tocSpolicyrevisionid"></a>
<a id="tocspolicyrevisionid"></a>

```json
"string"
```

<h2 id="tocS_DeleteResourcePolicyRequest">DeleteResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyrequest"></a>
<a id="schema_DeleteResourcePolicyRequest"></a>
<a id="tocSdeleteresourcepolicyrequest"></a>
<a id="tocsdeleteresourcepolicyrequest"></a>

```json
{
  "PolicyName": {},
  "PolicyRevisionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyName|object|true|none|none|
|PolicyRevisionId|object|false|none|none|

<h2 id="tocS_DeleteSamplingRuleRequest">DeleteSamplingRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesamplingrulerequest"></a>
<a id="schema_DeleteSamplingRuleRequest"></a>
<a id="tocSdeletesamplingrulerequest"></a>
<a id="tocsdeletesamplingrulerequest"></a>

```json
{
  "RuleName": {},
  "RuleARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleName|object|false|none|none|
|RuleARN|object|false|none|none|

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_EC2InstanceId">EC2InstanceId</h2>
<!-- backwards compatibility -->
<a id="schemaec2instanceid"></a>
<a id="schema_EC2InstanceId"></a>
<a id="tocSec2instanceid"></a>
<a id="tocsec2instanceid"></a>

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

<h2 id="tocS_EdgeStatistics">EdgeStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaedgestatistics"></a>
<a id="schema_EdgeStatistics"></a>
<a id="tocSedgestatistics"></a>
<a id="tocsedgestatistics"></a>

```json
{
  "OkCount": {},
  "ErrorStatistics": {
    "ThrottleCount": {},
    "OtherCount": {},
    "TotalCount": {}
  },
  "FaultStatistics": {
    "OtherCount": {},
    "TotalCount": {}
  },
  "TotalCount": {},
  "TotalResponseTime": {}
}
```

Response statistics for an edge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OkCount|object|false|none|none|
|ErrorStatistics|object|false|none|none|
|FaultStatistics|object|false|none|none|
|TotalCount|object|false|none|none|
|TotalResponseTime|object|false|none|none|

<h2 id="tocS_Histogram">Histogram</h2>
<!-- backwards compatibility -->
<a id="schemahistogram"></a>
<a id="schema_Histogram"></a>
<a id="tocShistogram"></a>
<a id="tocshistogram"></a>

```json
[
  {
    "Value": {},
    "Count": {}
  }
]
```

<h2 id="tocS_Edge">Edge</h2>
<!-- backwards compatibility -->
<a id="schemaedge"></a>
<a id="schema_Edge"></a>
<a id="tocSedge"></a>
<a id="tocsedge"></a>

```json
{
  "ReferenceId": {},
  "StartTime": {},
  "EndTime": {},
  "SummaryStatistics": {
    "OkCount": {},
    "ErrorStatistics": {
      "ThrottleCount": {},
      "OtherCount": {},
      "TotalCount": {}
    },
    "FaultStatistics": {
      "OtherCount": {},
      "TotalCount": {}
    },
    "TotalCount": {},
    "TotalResponseTime": {}
  },
  "ResponseTimeHistogram": {},
  "Aliases": {},
  "EdgeType": {},
  "ReceivedEventAgeHistogram": {}
}
```

Information about a connection between two services. An edge can be a synchronous connection, such as typical call between client and service, or an asynchronous link, such as a Lambda function which retrieves an event from an SNS queue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReferenceId|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|SummaryStatistics|object|false|none|none|
|ResponseTimeHistogram|object|false|none|none|
|Aliases|object|false|none|none|
|EdgeType|object|false|none|none|
|ReceivedEventAgeHistogram|object|false|none|none|

<h2 id="tocS_EdgeList">EdgeList</h2>
<!-- backwards compatibility -->
<a id="schemaedgelist"></a>
<a id="schema_EdgeList"></a>
<a id="tocSedgelist"></a>
<a id="tocsedgelist"></a>

```json
[
  {
    "ReferenceId": {},
    "StartTime": {},
    "EndTime": {},
    "SummaryStatistics": {
      "OkCount": {},
      "ErrorStatistics": {
        "ThrottleCount": {},
        "OtherCount": {},
        "TotalCount": {}
      },
      "FaultStatistics": {
        "OtherCount": {},
        "TotalCount": {}
      },
      "TotalCount": {},
      "TotalResponseTime": {}
    },
    "ResponseTimeHistogram": {},
    "Aliases": {},
    "EdgeType": {},
    "ReceivedEventAgeHistogram": {}
  }
]
```

<h2 id="tocS_NullableLong">NullableLong</h2>
<!-- backwards compatibility -->
<a id="schemanullablelong"></a>
<a id="schema_NullableLong"></a>
<a id="tocSnullablelong"></a>
<a id="tocsnullablelong"></a>

```json
0
```

<h2 id="tocS_ErrorStatistics">ErrorStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaerrorstatistics"></a>
<a id="schema_ErrorStatistics"></a>
<a id="tocSerrorstatistics"></a>
<a id="tocserrorstatistics"></a>

```json
{
  "ThrottleCount": {},
  "OtherCount": {},
  "TotalCount": {}
}
```

Information about requests that failed with a 4xx Client Error status code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ThrottleCount|object|false|none|none|
|OtherCount|object|false|none|none|
|TotalCount|object|false|none|none|

<h2 id="tocS_FaultStatistics">FaultStatistics</h2>
<!-- backwards compatibility -->
<a id="schemafaultstatistics"></a>
<a id="schema_FaultStatistics"></a>
<a id="tocSfaultstatistics"></a>
<a id="tocsfaultstatistics"></a>

```json
{
  "OtherCount": {},
  "TotalCount": {}
}
```

Information about requests that failed with a 5xx Server Error status code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OtherCount|object|false|none|none|
|TotalCount|object|false|none|none|

<h2 id="tocS_EncryptionStatus">EncryptionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionstatus"></a>
<a id="schema_EncryptionStatus"></a>
<a id="tocSencryptionstatus"></a>
<a id="tocsencryptionstatus"></a>

```json
"UPDATING"
```

<h2 id="tocS_EncryptionType">EncryptionType</h2>
<!-- backwards compatibility -->
<a id="schemaencryptiontype"></a>
<a id="schema_EncryptionType"></a>
<a id="tocSencryptiontype"></a>
<a id="tocsencryptiontype"></a>

```json
"NONE"
```

<h2 id="tocS_EncryptionConfig">EncryptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionconfig"></a>
<a id="schema_EncryptionConfig"></a>
<a id="tocSencryptionconfig"></a>
<a id="tocsencryptionconfig"></a>

```json
{
  "KeyId": {},
  "Status": {},
  "Type": {}
}
```

A configuration document that specifies encryption configuration settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|false|none|none|
|Status|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_EncryptionKeyId">EncryptionKeyId</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionkeyid"></a>
<a id="schema_EncryptionKeyId"></a>
<a id="tocSencryptionkeyid"></a>
<a id="tocsencryptionkeyid"></a>

```json
"string"
```

<h2 id="tocS_EntitySelectorExpression">EntitySelectorExpression</h2>
<!-- backwards compatibility -->
<a id="schemaentityselectorexpression"></a>
<a id="schema_EntitySelectorExpression"></a>
<a id="tocSentityselectorexpression"></a>
<a id="tocsentityselectorexpression"></a>

```json
"string"
```

<h2 id="tocS_ErrorRootCauseServices">ErrorRootCauseServices</h2>
<!-- backwards compatibility -->
<a id="schemaerrorrootcauseservices"></a>
<a id="schema_ErrorRootCauseServices"></a>
<a id="tocSerrorrootcauseservices"></a>
<a id="tocserrorrootcauseservices"></a>

```json
[
  {
    "Name": {},
    "Names": {},
    "Type": {},
    "AccountId": {},
    "EntityPath": {},
    "Inferred": {}
  }
]
```

<h2 id="tocS_ErrorRootCause">ErrorRootCause</h2>
<!-- backwards compatibility -->
<a id="schemaerrorrootcause"></a>
<a id="schema_ErrorRootCause"></a>
<a id="tocSerrorrootcause"></a>
<a id="tocserrorrootcause"></a>

```json
{
  "Services": {},
  "ClientImpacting": {}
}
```

The root cause of a trace summary error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Services|object|false|none|none|
|ClientImpacting|object|false|none|none|

<h2 id="tocS_RootCauseExceptions">RootCauseExceptions</h2>
<!-- backwards compatibility -->
<a id="schemarootcauseexceptions"></a>
<a id="schema_RootCauseExceptions"></a>
<a id="tocSrootcauseexceptions"></a>
<a id="tocsrootcauseexceptions"></a>

```json
[
  {
    "Name": {},
    "Message": {}
  }
]
```

<h2 id="tocS_ErrorRootCauseEntity">ErrorRootCauseEntity</h2>
<!-- backwards compatibility -->
<a id="schemaerrorrootcauseentity"></a>
<a id="schema_ErrorRootCauseEntity"></a>
<a id="tocSerrorrootcauseentity"></a>
<a id="tocserrorrootcauseentity"></a>

```json
{
  "Name": {},
  "Exceptions": {},
  "Remote": {}
}
```

A collection of segments and corresponding subsegments associated to a trace summary error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Exceptions|object|false|none|none|
|Remote|object|false|none|none|

<h2 id="tocS_ErrorRootCauseEntityPath">ErrorRootCauseEntityPath</h2>
<!-- backwards compatibility -->
<a id="schemaerrorrootcauseentitypath"></a>
<a id="schema_ErrorRootCauseEntityPath"></a>
<a id="tocSerrorrootcauseentitypath"></a>
<a id="tocserrorrootcauseentitypath"></a>

```json
[
  {
    "Name": {},
    "Exceptions": {},
    "Remote": {}
  }
]
```

<h2 id="tocS_ServiceNames">ServiceNames</h2>
<!-- backwards compatibility -->
<a id="schemaservicenames"></a>
<a id="schema_ServiceNames"></a>
<a id="tocSservicenames"></a>
<a id="tocsservicenames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ErrorRootCauseService">ErrorRootCauseService</h2>
<!-- backwards compatibility -->
<a id="schemaerrorrootcauseservice"></a>
<a id="schema_ErrorRootCauseService"></a>
<a id="tocSerrorrootcauseservice"></a>
<a id="tocserrorrootcauseservice"></a>

```json
{
  "Name": {},
  "Names": {},
  "Type": {},
  "AccountId": {},
  "EntityPath": {},
  "Inferred": {}
}
```

A collection of fields identifying the services in a trace summary error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Names|object|false|none|none|
|Type|object|false|none|none|
|AccountId|object|false|none|none|
|EntityPath|object|false|none|none|
|Inferred|object|false|none|none|

<h2 id="tocS_ErrorRootCauses">ErrorRootCauses</h2>
<!-- backwards compatibility -->
<a id="schemaerrorrootcauses"></a>
<a id="schema_ErrorRootCauses"></a>
<a id="tocSerrorrootcauses"></a>
<a id="tocserrorrootcauses"></a>

```json
[
  {
    "Services": {},
    "ClientImpacting": {}
  }
]
```

<h2 id="tocS_EventSummaryText">EventSummaryText</h2>
<!-- backwards compatibility -->
<a id="schemaeventsummarytext"></a>
<a id="schema_EventSummaryText"></a>
<a id="tocSeventsummarytext"></a>
<a id="tocseventsummarytext"></a>

```json
"string"
```

<h2 id="tocS_FaultRootCauseServices">FaultRootCauseServices</h2>
<!-- backwards compatibility -->
<a id="schemafaultrootcauseservices"></a>
<a id="schema_FaultRootCauseServices"></a>
<a id="tocSfaultrootcauseservices"></a>
<a id="tocsfaultrootcauseservices"></a>

```json
[
  {
    "Name": {},
    "Names": {},
    "Type": {},
    "AccountId": {},
    "EntityPath": {},
    "Inferred": {}
  }
]
```

<h2 id="tocS_FaultRootCause">FaultRootCause</h2>
<!-- backwards compatibility -->
<a id="schemafaultrootcause"></a>
<a id="schema_FaultRootCause"></a>
<a id="tocSfaultrootcause"></a>
<a id="tocsfaultrootcause"></a>

```json
{
  "Services": {},
  "ClientImpacting": {}
}
```

The root cause information for a trace summary fault.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Services|object|false|none|none|
|ClientImpacting|object|false|none|none|

<h2 id="tocS_FaultRootCauseEntity">FaultRootCauseEntity</h2>
<!-- backwards compatibility -->
<a id="schemafaultrootcauseentity"></a>
<a id="schema_FaultRootCauseEntity"></a>
<a id="tocSfaultrootcauseentity"></a>
<a id="tocsfaultrootcauseentity"></a>

```json
{
  "Name": {},
  "Exceptions": {},
  "Remote": {}
}
```

A collection of segments and corresponding subsegments associated to a trace summary fault error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Exceptions|object|false|none|none|
|Remote|object|false|none|none|

<h2 id="tocS_FaultRootCauseEntityPath">FaultRootCauseEntityPath</h2>
<!-- backwards compatibility -->
<a id="schemafaultrootcauseentitypath"></a>
<a id="schema_FaultRootCauseEntityPath"></a>
<a id="tocSfaultrootcauseentitypath"></a>
<a id="tocsfaultrootcauseentitypath"></a>

```json
[
  {
    "Name": {},
    "Exceptions": {},
    "Remote": {}
  }
]
```

<h2 id="tocS_FaultRootCauseService">FaultRootCauseService</h2>
<!-- backwards compatibility -->
<a id="schemafaultrootcauseservice"></a>
<a id="schema_FaultRootCauseService"></a>
<a id="tocSfaultrootcauseservice"></a>
<a id="tocsfaultrootcauseservice"></a>

```json
{
  "Name": {},
  "Names": {},
  "Type": {},
  "AccountId": {},
  "EntityPath": {},
  "Inferred": {}
}
```

A collection of fields identifying the services in a trace summary fault.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Names|object|false|none|none|
|Type|object|false|none|none|
|AccountId|object|false|none|none|
|EntityPath|object|false|none|none|
|Inferred|object|false|none|none|

<h2 id="tocS_FaultRootCauses">FaultRootCauses</h2>
<!-- backwards compatibility -->
<a id="schemafaultrootcauses"></a>
<a id="schema_FaultRootCauses"></a>
<a id="tocSfaultrootcauses"></a>
<a id="tocsfaultrootcauses"></a>

```json
[
  {
    "Services": {},
    "ClientImpacting": {}
  }
]
```

<h2 id="tocS_ForecastStatistics">ForecastStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaforecaststatistics"></a>
<a id="schema_ForecastStatistics"></a>
<a id="tocSforecaststatistics"></a>
<a id="tocsforecaststatistics"></a>

```json
{
  "FaultCountHigh": {},
  "FaultCountLow": {}
}
```

The predicted high and low fault count. This is used to determine if a service has become anomalous and if an insight should be created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FaultCountHigh|object|false|none|none|
|FaultCountLow|object|false|none|none|

<h2 id="tocS_GetEncryptionConfigRequest">GetEncryptionConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetencryptionconfigrequest"></a>
<a id="schema_GetEncryptionConfigRequest"></a>
<a id="tocSgetencryptionconfigrequest"></a>
<a id="tocsgetencryptionconfigrequest"></a>

```json
{}
```

<h2 id="tocS_GetGroupRequest">GetGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgrouprequest"></a>
<a id="schema_GetGroupRequest"></a>
<a id="tocSgetgrouprequest"></a>
<a id="tocsgetgrouprequest"></a>

```json
{
  "GroupName": {},
  "GroupARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|false|none|none|
|GroupARN|object|false|none|none|

<h2 id="tocS_GetGroupsNextToken">GetGroupsNextToken</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupsnexttoken"></a>
<a id="schema_GetGroupsNextToken"></a>
<a id="tocSgetgroupsnexttoken"></a>
<a id="tocsgetgroupsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_GetGroupsRequest">GetGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupsrequest"></a>
<a id="schema_GetGroupsRequest"></a>
<a id="tocSgetgroupsrequest"></a>
<a id="tocsgetgroupsrequest"></a>

```json
{
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|

<h2 id="tocS_GroupSummaryList">GroupSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemagroupsummarylist"></a>
<a id="schema_GroupSummaryList"></a>
<a id="tocSgroupsummarylist"></a>
<a id="tocsgroupsummarylist"></a>

```json
[
  {
    "GroupName": {},
    "GroupARN": {},
    "FilterExpression": {},
    "InsightsConfiguration": {
      "InsightsEnabled": {},
      "NotificationsEnabled": {}
    }
  }
]
```

<h2 id="tocS_GetInsightEventsMaxResults">GetInsightEventsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemagetinsighteventsmaxresults"></a>
<a id="schema_GetInsightEventsMaxResults"></a>
<a id="tocSgetinsighteventsmaxresults"></a>
<a id="tocsgetinsighteventsmaxresults"></a>

```json
1
```

<h2 id="tocS_InsightId">InsightId</h2>
<!-- backwards compatibility -->
<a id="schemainsightid"></a>
<a id="schema_InsightId"></a>
<a id="tocSinsightid"></a>
<a id="tocsinsightid"></a>

```json
"string"
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

<h2 id="tocS_GetInsightEventsRequest">GetInsightEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinsighteventsrequest"></a>
<a id="schema_GetInsightEventsRequest"></a>
<a id="tocSgetinsighteventsrequest"></a>
<a id="tocsgetinsighteventsrequest"></a>

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

<h2 id="tocS_InsightEventList">InsightEventList</h2>
<!-- backwards compatibility -->
<a id="schemainsighteventlist"></a>
<a id="schema_InsightEventList"></a>
<a id="tocSinsighteventlist"></a>
<a id="tocsinsighteventlist"></a>

```json
[
  {
    "Summary": {},
    "EventTime": {},
    "ClientRequestImpactStatistics": {
      "FaultCount": {},
      "OkCount": {},
      "TotalCount": {}
    },
    "RootCauseServiceRequestImpactStatistics": {
      "FaultCount": {},
      "OkCount": {},
      "TotalCount": {}
    },
    "TopAnomalousServices": {}
  }
]
```

<h2 id="tocS_GetInsightImpactGraphRequest">GetInsightImpactGraphRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinsightimpactgraphrequest"></a>
<a id="schema_GetInsightImpactGraphRequest"></a>
<a id="tocSgetinsightimpactgraphrequest"></a>
<a id="tocsgetinsightimpactgraphrequest"></a>

```json
{
  "InsightId": {},
  "StartTime": {},
  "EndTime": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsightId|object|true|none|none|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InsightImpactGraphServiceList">InsightImpactGraphServiceList</h2>
<!-- backwards compatibility -->
<a id="schemainsightimpactgraphservicelist"></a>
<a id="schema_InsightImpactGraphServiceList"></a>
<a id="tocSinsightimpactgraphservicelist"></a>
<a id="tocsinsightimpactgraphservicelist"></a>

```json
[
  {
    "ReferenceId": {},
    "Type": {},
    "Name": {},
    "Names": {},
    "AccountId": {},
    "Edges": {}
  }
]
```

<h2 id="tocS_GetInsightRequest">GetInsightRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinsightrequest"></a>
<a id="schema_GetInsightRequest"></a>
<a id="tocSgetinsightrequest"></a>
<a id="tocsgetinsightrequest"></a>

```json
{
  "InsightId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsightId|object|true|none|none|

<h2 id="tocS_Insight">Insight</h2>
<!-- backwards compatibility -->
<a id="schemainsight"></a>
<a id="schema_Insight"></a>
<a id="tocSinsight"></a>
<a id="tocsinsight"></a>

```json
{
  "InsightId": {},
  "GroupARN": {},
  "GroupName": {},
  "RootCauseServiceId": {
    "Name": {},
    "Names": {},
    "AccountId": {},
    "Type": {}
  },
  "Categories": {},
  "State": {},
  "StartTime": {},
  "EndTime": {},
  "Summary": {},
  "ClientRequestImpactStatistics": {
    "FaultCount": {},
    "OkCount": {},
    "TotalCount": {}
  },
  "RootCauseServiceRequestImpactStatistics": {
    "FaultCount": {},
    "OkCount": {},
    "TotalCount": {}
  },
  "TopAnomalousServices": {}
}
```

When fault rates go outside of the expected range, X-Ray creates an insight. Insights tracks emergent issues within your applications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsightId|object|false|none|none|
|GroupARN|object|false|none|none|
|GroupName|object|false|none|none|
|RootCauseServiceId|[ServiceId](#schemaserviceid)|false|none|<p/>|
|Categories|object|false|none|none|
|State|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Summary|object|false|none|none|
|ClientRequestImpactStatistics|object|false|none|none|
|RootCauseServiceRequestImpactStatistics|object|false|none|none|
|TopAnomalousServices|object|false|none|none|

<h2 id="tocS_GetInsightSummariesMaxResults">GetInsightSummariesMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemagetinsightsummariesmaxresults"></a>
<a id="schema_GetInsightSummariesMaxResults"></a>
<a id="tocSgetinsightsummariesmaxresults"></a>
<a id="tocsgetinsightsummariesmaxresults"></a>

```json
1
```

<h2 id="tocS_InsightStateList">InsightStateList</h2>
<!-- backwards compatibility -->
<a id="schemainsightstatelist"></a>
<a id="schema_InsightStateList"></a>
<a id="tocSinsightstatelist"></a>
<a id="tocsinsightstatelist"></a>

```json
[
  "ACTIVE"
]
```

<h2 id="tocS_GetInsightSummariesRequest">GetInsightSummariesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinsightsummariesrequest"></a>
<a id="schema_GetInsightSummariesRequest"></a>
<a id="tocSgetinsightsummariesrequest"></a>
<a id="tocsgetinsightsummariesrequest"></a>

```json
{
  "States": {},
  "GroupARN": {},
  "GroupName": {},
  "StartTime": {},
  "EndTime": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|States|object|false|none|none|
|GroupARN|object|false|none|none|
|GroupName|object|false|none|none|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InsightSummaryList">InsightSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemainsightsummarylist"></a>
<a id="schema_InsightSummaryList"></a>
<a id="tocSinsightsummarylist"></a>
<a id="tocsinsightsummarylist"></a>

```json
[
  {
    "InsightId": {},
    "GroupARN": {},
    "GroupName": {},
    "RootCauseServiceId": {
      "Name": {},
      "Names": {},
      "AccountId": {},
      "Type": {}
    },
    "Categories": {},
    "State": {},
    "StartTime": {},
    "EndTime": {},
    "Summary": {},
    "ClientRequestImpactStatistics": {
      "FaultCount": {},
      "OkCount": {},
      "TotalCount": {}
    },
    "RootCauseServiceRequestImpactStatistics": {
      "FaultCount": {},
      "OkCount": {},
      "TotalCount": {}
    },
    "TopAnomalousServices": {},
    "LastUpdateTime": {}
  }
]
```

<h2 id="tocS_GetSamplingRulesRequest">GetSamplingRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsamplingrulesrequest"></a>
<a id="schema_GetSamplingRulesRequest"></a>
<a id="tocSgetsamplingrulesrequest"></a>
<a id="tocsgetsamplingrulesrequest"></a>

```json
{
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|

<h2 id="tocS_SamplingRuleRecordList">SamplingRuleRecordList</h2>
<!-- backwards compatibility -->
<a id="schemasamplingrulerecordlist"></a>
<a id="schema_SamplingRuleRecordList"></a>
<a id="tocSsamplingrulerecordlist"></a>
<a id="tocssamplingrulerecordlist"></a>

```json
[
  {
    "SamplingRule": {
      "RuleName": {},
      "RuleARN": {},
      "ResourceARN": {},
      "Priority": {},
      "FixedRate": {},
      "ReservoirSize": {},
      "ServiceName": {},
      "ServiceType": {},
      "Host": {},
      "HTTPMethod": {},
      "URLPath": {},
      "Version": {},
      "Attributes": {
        "property1": "string",
        "property2": "string"
      }
    },
    "CreatedAt": {},
    "ModifiedAt": {}
  }
]
```

<h2 id="tocS_GetSamplingStatisticSummariesRequest">GetSamplingStatisticSummariesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsamplingstatisticsummariesrequest"></a>
<a id="schema_GetSamplingStatisticSummariesRequest"></a>
<a id="tocSgetsamplingstatisticsummariesrequest"></a>
<a id="tocsgetsamplingstatisticsummariesrequest"></a>

```json
{
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|

<h2 id="tocS_SamplingStatisticSummaryList">SamplingStatisticSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemasamplingstatisticsummarylist"></a>
<a id="schema_SamplingStatisticSummaryList"></a>
<a id="tocSsamplingstatisticsummarylist"></a>
<a id="tocssamplingstatisticsummarylist"></a>

```json
[
  {
    "RuleName": {},
    "Timestamp": {},
    "RequestCount": {},
    "BorrowCount": {},
    "SampledCount": {}
  }
]
```

<h2 id="tocS_SamplingStatisticsDocumentList">SamplingStatisticsDocumentList</h2>
<!-- backwards compatibility -->
<a id="schemasamplingstatisticsdocumentlist"></a>
<a id="schema_SamplingStatisticsDocumentList"></a>
<a id="tocSsamplingstatisticsdocumentlist"></a>
<a id="tocssamplingstatisticsdocumentlist"></a>

```json
[
  {
    "RuleName": {},
    "ClientID": {},
    "Timestamp": {},
    "RequestCount": {},
    "SampledCount": {},
    "BorrowCount": {}
  }
]
```

<h2 id="tocS_GetSamplingTargetsRequest">GetSamplingTargetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsamplingtargetsrequest"></a>
<a id="schema_GetSamplingTargetsRequest"></a>
<a id="tocSgetsamplingtargetsrequest"></a>
<a id="tocsgetsamplingtargetsrequest"></a>

```json
{
  "SamplingStatisticsDocuments": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SamplingStatisticsDocuments|object|true|none|none|

<h2 id="tocS_SamplingTargetDocumentList">SamplingTargetDocumentList</h2>
<!-- backwards compatibility -->
<a id="schemasamplingtargetdocumentlist"></a>
<a id="schema_SamplingTargetDocumentList"></a>
<a id="tocSsamplingtargetdocumentlist"></a>
<a id="tocssamplingtargetdocumentlist"></a>

```json
[
  {
    "RuleName": {},
    "FixedRate": {},
    "ReservoirQuota": {},
    "ReservoirQuotaTTL": {},
    "Interval": {}
  }
]
```

<h2 id="tocS_UnprocessedStatisticsList">UnprocessedStatisticsList</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedstatisticslist"></a>
<a id="schema_UnprocessedStatisticsList"></a>
<a id="tocSunprocessedstatisticslist"></a>
<a id="tocsunprocessedstatisticslist"></a>

```json
[
  {
    "RuleName": {},
    "ErrorCode": {},
    "Message": {}
  }
]
```

<h2 id="tocS_GetServiceGraphRequest">GetServiceGraphRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetservicegraphrequest"></a>
<a id="schema_GetServiceGraphRequest"></a>
<a id="tocSgetservicegraphrequest"></a>
<a id="tocsgetservicegraphrequest"></a>

```json
{
  "StartTime": {},
  "EndTime": {},
  "GroupName": {},
  "GroupARN": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|
|GroupName|object|false|none|none|
|GroupARN|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ServiceList">ServiceList</h2>
<!-- backwards compatibility -->
<a id="schemaservicelist"></a>
<a id="schema_ServiceList"></a>
<a id="tocSservicelist"></a>
<a id="tocsservicelist"></a>

```json
[
  {
    "ReferenceId": {},
    "Name": {},
    "Names": {},
    "Root": {},
    "AccountId": {},
    "Type": {},
    "State": {},
    "StartTime": {},
    "EndTime": {},
    "Edges": {},
    "SummaryStatistics": {
      "OkCount": {},
      "ErrorStatistics": {
        "ThrottleCount": {},
        "OtherCount": {},
        "TotalCount": {}
      },
      "FaultStatistics": {
        "OtherCount": {},
        "TotalCount": {}
      },
      "TotalCount": {},
      "TotalResponseTime": {}
    },
    "DurationHistogram": {},
    "ResponseTimeHistogram": {}
  }
]
```

<h2 id="tocS_GetTimeSeriesServiceStatisticsRequest">GetTimeSeriesServiceStatisticsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettimeseriesservicestatisticsrequest"></a>
<a id="schema_GetTimeSeriesServiceStatisticsRequest"></a>
<a id="tocSgettimeseriesservicestatisticsrequest"></a>
<a id="tocsgettimeseriesservicestatisticsrequest"></a>

```json
{
  "StartTime": {},
  "EndTime": {},
  "GroupName": {},
  "GroupARN": {},
  "EntitySelectorExpression": {},
  "Period": {},
  "ForecastStatistics": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|
|GroupName|object|false|none|none|
|GroupARN|object|false|none|none|
|EntitySelectorExpression|object|false|none|none|
|Period|object|false|none|none|
|ForecastStatistics|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_TimeSeriesServiceStatisticsList">TimeSeriesServiceStatisticsList</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesservicestatisticslist"></a>
<a id="schema_TimeSeriesServiceStatisticsList"></a>
<a id="tocStimeseriesservicestatisticslist"></a>
<a id="tocstimeseriesservicestatisticslist"></a>

```json
[
  {
    "Timestamp": {},
    "EdgeSummaryStatistics": {
      "OkCount": {},
      "ErrorStatistics": {
        "ThrottleCount": {},
        "OtherCount": {},
        "TotalCount": {}
      },
      "FaultStatistics": {
        "OtherCount": {},
        "TotalCount": {}
      },
      "TotalCount": {},
      "TotalResponseTime": {}
    },
    "ServiceSummaryStatistics": {
      "OkCount": {},
      "ErrorStatistics": {
        "ThrottleCount": {},
        "OtherCount": {},
        "TotalCount": {}
      },
      "FaultStatistics": {
        "OtherCount": {},
        "TotalCount": {}
      },
      "TotalCount": {},
      "TotalResponseTime": {}
    },
    "ServiceForecastStatistics": {
      "FaultCountHigh": {},
      "FaultCountLow": {}
    },
    "ResponseTimeHistogram": {}
  }
]
```

<h2 id="tocS_GetTraceGraphRequest">GetTraceGraphRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettracegraphrequest"></a>
<a id="schema_GetTraceGraphRequest"></a>
<a id="tocSgettracegraphrequest"></a>
<a id="tocsgettracegraphrequest"></a>

```json
{
  "TraceIds": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TraceIds|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_TimeRangeType">TimeRangeType</h2>
<!-- backwards compatibility -->
<a id="schematimerangetype"></a>
<a id="schema_TimeRangeType"></a>
<a id="tocStimerangetype"></a>
<a id="tocstimerangetype"></a>

```json
"TraceId"
```

<h2 id="tocS_SamplingStrategy">SamplingStrategy</h2>
<!-- backwards compatibility -->
<a id="schemasamplingstrategy"></a>
<a id="schema_SamplingStrategy"></a>
<a id="tocSsamplingstrategy"></a>
<a id="tocssamplingstrategy"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

The name and value of a sampling rule to apply to a trace summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_GetTraceSummariesRequest">GetTraceSummariesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettracesummariesrequest"></a>
<a id="schema_GetTraceSummariesRequest"></a>
<a id="tocSgettracesummariesrequest"></a>
<a id="tocsgettracesummariesrequest"></a>

```json
{
  "StartTime": {},
  "EndTime": {},
  "TimeRangeType": {},
  "Sampling": {},
  "SamplingStrategy": {
    "Name": {},
    "Value": {}
  },
  "FilterExpression": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|
|TimeRangeType|object|false|none|none|
|Sampling|object|false|none|none|
|SamplingStrategy|object|false|none|none|
|FilterExpression|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_TraceSummaryList">TraceSummaryList</h2>
<!-- backwards compatibility -->
<a id="schematracesummarylist"></a>
<a id="schema_TraceSummaryList"></a>
<a id="tocStracesummarylist"></a>
<a id="tocstracesummarylist"></a>

```json
[
  {
    "Id": {},
    "Duration": {},
    "ResponseTime": {},
    "HasFault": {},
    "HasError": {},
    "HasThrottle": {},
    "IsPartial": {},
    "Http": {
      "HttpURL": {},
      "HttpStatus": {},
      "HttpMethod": {},
      "UserAgent": {},
      "ClientIp": {}
    },
    "Annotations": {
      "property1": [
        {
          "AnnotationValue": {
            "NumberValue": {},
            "BooleanValue": {},
            "StringValue": {}
          },
          "ServiceIds": {}
        }
      ],
      "property2": [
        {
          "AnnotationValue": {
            "NumberValue": {},
            "BooleanValue": {},
            "StringValue": {}
          },
          "ServiceIds": {}
        }
      ]
    },
    "Users": {},
    "ServiceIds": {},
    "ResourceARNs": {},
    "InstanceIds": {},
    "AvailabilityZones": {},
    "EntryPoint": {
      "Name": {},
      "Names": {},
      "AccountId": {},
      "Type": {}
    },
    "FaultRootCauses": {},
    "ErrorRootCauses": {},
    "ResponseTimeRootCauses": {},
    "Revision": {},
    "MatchedEventTime": {}
  }
]
```

<h2 id="tocS_GroupSummary">GroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemagroupsummary"></a>
<a id="schema_GroupSummary"></a>
<a id="tocSgroupsummary"></a>
<a id="tocsgroupsummary"></a>

```json
{
  "GroupName": {},
  "GroupARN": {},
  "FilterExpression": {},
  "InsightsConfiguration": {
    "InsightsEnabled": {},
    "NotificationsEnabled": {}
  }
}
```

Details for a group without metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|false|none|none|
|GroupARN|object|false|none|none|
|FilterExpression|object|false|none|none|
|InsightsConfiguration|object|false|none|none|

<h2 id="tocS_HistogramEntry">HistogramEntry</h2>
<!-- backwards compatibility -->
<a id="schemahistogramentry"></a>
<a id="schema_HistogramEntry"></a>
<a id="tocShistogramentry"></a>
<a id="tocshistogramentry"></a>

```json
{
  "Value": {},
  "Count": {}
}
```

An entry in a histogram for a statistic. A histogram maps the range of observed values on the X axis, and the prevalence of each value on the Y axis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|Count|object|false|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_Hostname">Hostname</h2>
<!-- backwards compatibility -->
<a id="schemahostname"></a>
<a id="schema_Hostname"></a>
<a id="tocShostname"></a>
<a id="tocshostname"></a>

```json
"string"
```

<h2 id="tocS_Http">Http</h2>
<!-- backwards compatibility -->
<a id="schemahttp"></a>
<a id="schema_Http"></a>
<a id="tocShttp"></a>
<a id="tocshttp"></a>

```json
{
  "HttpURL": {},
  "HttpStatus": {},
  "HttpMethod": {},
  "UserAgent": {},
  "ClientIp": {}
}
```

Information about an HTTP request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HttpURL|object|false|none|none|
|HttpStatus|object|false|none|none|
|HttpMethod|object|false|none|none|
|UserAgent|object|false|none|none|
|ClientIp|object|false|none|none|

<h2 id="tocS_InsightCategoryList">InsightCategoryList</h2>
<!-- backwards compatibility -->
<a id="schemainsightcategorylist"></a>
<a id="schema_InsightCategoryList"></a>
<a id="tocSinsightcategorylist"></a>
<a id="tocsinsightcategorylist"></a>

```json
[
  "FAULT"
]
```

<h2 id="tocS_InsightSummaryText">InsightSummaryText</h2>
<!-- backwards compatibility -->
<a id="schemainsightsummarytext"></a>
<a id="schema_InsightSummaryText"></a>
<a id="tocSinsightsummarytext"></a>
<a id="tocsinsightsummarytext"></a>

```json
"string"
```

<h2 id="tocS_RequestImpactStatistics">RequestImpactStatistics</h2>
<!-- backwards compatibility -->
<a id="schemarequestimpactstatistics"></a>
<a id="schema_RequestImpactStatistics"></a>
<a id="tocSrequestimpactstatistics"></a>
<a id="tocsrequestimpactstatistics"></a>

```json
{
  "FaultCount": {},
  "OkCount": {},
  "TotalCount": {}
}
```

Statistics that describe how the incident has impacted a service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FaultCount|object|false|none|none|
|OkCount|object|false|none|none|
|TotalCount|object|false|none|none|

<h2 id="tocS_InsightCategory">InsightCategory</h2>
<!-- backwards compatibility -->
<a id="schemainsightcategory"></a>
<a id="schema_InsightCategory"></a>
<a id="tocSinsightcategory"></a>
<a id="tocsinsightcategory"></a>

```json
"FAULT"
```

<h2 id="tocS_InsightEvent">InsightEvent</h2>
<!-- backwards compatibility -->
<a id="schemainsightevent"></a>
<a id="schema_InsightEvent"></a>
<a id="tocSinsightevent"></a>
<a id="tocsinsightevent"></a>

```json
{
  "Summary": {},
  "EventTime": {},
  "ClientRequestImpactStatistics": {
    "FaultCount": {},
    "OkCount": {},
    "TotalCount": {}
  },
  "RootCauseServiceRequestImpactStatistics": {
    "FaultCount": {},
    "OkCount": {},
    "TotalCount": {}
  },
  "TopAnomalousServices": {}
}
```

X-Ray reevaluates insights periodically until they are resolved, and records each intermediate state in an event. You can review incident events in the Impact Timeline on the Inspect page in the X-Ray console.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Summary|object|false|none|none|
|EventTime|object|false|none|none|
|ClientRequestImpactStatistics|object|false|none|none|
|RootCauseServiceRequestImpactStatistics|object|false|none|none|
|TopAnomalousServices|object|false|none|none|

<h2 id="tocS_InsightImpactGraphEdge">InsightImpactGraphEdge</h2>
<!-- backwards compatibility -->
<a id="schemainsightimpactgraphedge"></a>
<a id="schema_InsightImpactGraphEdge"></a>
<a id="tocSinsightimpactgraphedge"></a>
<a id="tocsinsightimpactgraphedge"></a>

```json
{
  "ReferenceId": {}
}
```

The connection between two service in an insight impact graph.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReferenceId|object|false|none|none|

<h2 id="tocS_InsightImpactGraphEdgeList">InsightImpactGraphEdgeList</h2>
<!-- backwards compatibility -->
<a id="schemainsightimpactgraphedgelist"></a>
<a id="schema_InsightImpactGraphEdgeList"></a>
<a id="tocSinsightimpactgraphedgelist"></a>
<a id="tocsinsightimpactgraphedgelist"></a>

```json
[
  {
    "ReferenceId": {}
  }
]
```

<h2 id="tocS_InsightImpactGraphService">InsightImpactGraphService</h2>
<!-- backwards compatibility -->
<a id="schemainsightimpactgraphservice"></a>
<a id="schema_InsightImpactGraphService"></a>
<a id="tocSinsightimpactgraphservice"></a>
<a id="tocsinsightimpactgraphservice"></a>

```json
{
  "ReferenceId": {},
  "Type": {},
  "Name": {},
  "Names": {},
  "AccountId": {},
  "Edges": {}
}
```

Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReferenceId|object|false|none|none|
|Type|object|false|none|none|
|Name|object|false|none|none|
|Names|object|false|none|none|
|AccountId|object|false|none|none|
|Edges|object|false|none|none|

<h2 id="tocS_InsightSummary">InsightSummary</h2>
<!-- backwards compatibility -->
<a id="schemainsightsummary"></a>
<a id="schema_InsightSummary"></a>
<a id="tocSinsightsummary"></a>
<a id="tocsinsightsummary"></a>

```json
{
  "InsightId": {},
  "GroupARN": {},
  "GroupName": {},
  "RootCauseServiceId": {
    "Name": {},
    "Names": {},
    "AccountId": {},
    "Type": {}
  },
  "Categories": {},
  "State": {},
  "StartTime": {},
  "EndTime": {},
  "Summary": {},
  "ClientRequestImpactStatistics": {
    "FaultCount": {},
    "OkCount": {},
    "TotalCount": {}
  },
  "RootCauseServiceRequestImpactStatistics": {
    "FaultCount": {},
    "OkCount": {},
    "TotalCount": {}
  },
  "TopAnomalousServices": {},
  "LastUpdateTime": {}
}
```

Information that describes an insight.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsightId|object|false|none|none|
|GroupARN|object|false|none|none|
|GroupName|object|false|none|none|
|RootCauseServiceId|[ServiceId](#schemaserviceid)|false|none|<p/>|
|Categories|object|false|none|none|
|State|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Summary|object|false|none|none|
|ClientRequestImpactStatistics|object|false|none|none|
|RootCauseServiceRequestImpactStatistics|object|false|none|none|
|TopAnomalousServices|object|false|none|none|
|LastUpdateTime|object|false|none|none|

<h2 id="tocS_InstanceIdDetail">InstanceIdDetail</h2>
<!-- backwards compatibility -->
<a id="schemainstanceiddetail"></a>
<a id="schema_InstanceIdDetail"></a>
<a id="tocSinstanceiddetail"></a>
<a id="tocsinstanceiddetail"></a>

```json
{
  "Id": {}
}
```

A list of EC2 instance IDs corresponding to the segments in a trace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|

<h2 id="tocS_ResourcePolicyNextToken">ResourcePolicyNextToken</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicynexttoken"></a>
<a id="schema_ResourcePolicyNextToken"></a>
<a id="tocSresourcepolicynexttoken"></a>
<a id="tocsresourcepolicynexttoken"></a>

```json
"string"
```

<h2 id="tocS_ListResourcePoliciesRequest">ListResourcePoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcepoliciesrequest"></a>
<a id="schema_ListResourcePoliciesRequest"></a>
<a id="tocSlistresourcepoliciesrequest"></a>
<a id="tocslistresourcepoliciesrequest"></a>

```json
{
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|

<h2 id="tocS_ResourcePolicyList">ResourcePolicyList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicylist"></a>
<a id="schema_ResourcePolicyList"></a>
<a id="tocSresourcepolicylist"></a>
<a id="tocsresourcepolicylist"></a>

```json
[
  {
    "PolicyName": {},
    "PolicyDocument": {},
    "PolicyRevisionId": {},
    "LastUpdatedTime": {}
  }
]
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PolicyDocument">PolicyDocument</h2>
<!-- backwards compatibility -->
<a id="schemapolicydocument"></a>
<a id="schema_PolicyDocument"></a>
<a id="tocSpolicydocument"></a>
<a id="tocspolicydocument"></a>

```json
"string"
```

<h2 id="tocS_PutEncryptionConfigRequest">PutEncryptionConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputencryptionconfigrequest"></a>
<a id="schema_PutEncryptionConfigRequest"></a>
<a id="tocSputencryptionconfigrequest"></a>
<a id="tocsputencryptionconfigrequest"></a>

```json
{
  "KeyId": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|false|none|none|
|Type|object|true|none|none|

<h2 id="tocS_PutResourcePolicyRequest">PutResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyrequest"></a>
<a id="schema_PutResourcePolicyRequest"></a>
<a id="tocSputresourcepolicyrequest"></a>
<a id="tocsputresourcepolicyrequest"></a>

```json
{
  "PolicyName": {},
  "PolicyDocument": {},
  "PolicyRevisionId": {},
  "BypassPolicyLockoutCheck": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyName|object|true|none|none|
|PolicyDocument|object|true|none|none|
|PolicyRevisionId|object|false|none|none|
|BypassPolicyLockoutCheck|object|false|none|none|

<h2 id="tocS_ResourcePolicy">ResourcePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicy"></a>
<a id="schema_ResourcePolicy"></a>
<a id="tocSresourcepolicy"></a>
<a id="tocsresourcepolicy"></a>

```json
{
  "PolicyName": {},
  "PolicyDocument": {},
  "PolicyRevisionId": {},
  "LastUpdatedTime": {}
}
```

A resource policy grants one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy is associated with a specific Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyName|object|false|none|none|
|PolicyDocument|object|false|none|none|
|PolicyRevisionId|object|false|none|none|
|LastUpdatedTime|object|false|none|none|

<h2 id="tocS_TelemetryRecordList">TelemetryRecordList</h2>
<!-- backwards compatibility -->
<a id="schematelemetryrecordlist"></a>
<a id="schema_TelemetryRecordList"></a>
<a id="tocStelemetryrecordlist"></a>
<a id="tocstelemetryrecordlist"></a>

```json
[
  {
    "Timestamp": {},
    "SegmentsReceivedCount": {},
    "SegmentsSentCount": {},
    "SegmentsSpilloverCount": {},
    "SegmentsRejectedCount": {},
    "BackendConnectionErrors": {
      "TimeoutCount": {},
      "ConnectionRefusedCount": {},
      "HTTPCode4XXCount": {},
      "HTTPCode5XXCount": {},
      "UnknownHostCount": {},
      "OtherCount": {}
    }
  }
]
```

<h2 id="tocS_PutTelemetryRecordsRequest">PutTelemetryRecordsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputtelemetryrecordsrequest"></a>
<a id="schema_PutTelemetryRecordsRequest"></a>
<a id="tocSputtelemetryrecordsrequest"></a>
<a id="tocsputtelemetryrecordsrequest"></a>

```json
{
  "TelemetryRecords": {},
  "EC2InstanceId": {},
  "Hostname": {},
  "ResourceARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TelemetryRecords|object|true|none|none|
|EC2InstanceId|object|false|none|none|
|Hostname|object|false|none|none|
|ResourceARN|object|false|none|none|

<h2 id="tocS_TraceSegmentDocumentList">TraceSegmentDocumentList</h2>
<!-- backwards compatibility -->
<a id="schematracesegmentdocumentlist"></a>
<a id="schema_TraceSegmentDocumentList"></a>
<a id="tocStracesegmentdocumentlist"></a>
<a id="tocstracesegmentdocumentlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PutTraceSegmentsRequest">PutTraceSegmentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputtracesegmentsrequest"></a>
<a id="schema_PutTraceSegmentsRequest"></a>
<a id="tocSputtracesegmentsrequest"></a>
<a id="tocsputtracesegmentsrequest"></a>

```json
{
  "TraceSegmentDocuments": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TraceSegmentDocuments|object|true|none|none|

<h2 id="tocS_UnprocessedTraceSegmentList">UnprocessedTraceSegmentList</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedtracesegmentlist"></a>
<a id="schema_UnprocessedTraceSegmentList"></a>
<a id="tocSunprocessedtracesegmentlist"></a>
<a id="tocsunprocessedtracesegmentlist"></a>

```json
[
  {
    "Id": {},
    "ErrorCode": {},
    "Message": {}
  }
]
```

<h2 id="tocS_RequestCount">RequestCount</h2>
<!-- backwards compatibility -->
<a id="schemarequestcount"></a>
<a id="schema_RequestCount"></a>
<a id="tocSrequestcount"></a>
<a id="tocsrequestcount"></a>

```json
0
```

<h2 id="tocS_ResourceARNDetail">ResourceARNDetail</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearndetail"></a>
<a id="schema_ResourceARNDetail"></a>
<a id="tocSresourcearndetail"></a>
<a id="tocsresourcearndetail"></a>

```json
{
  "ARN": {}
}
```

A list of resources ARNs corresponding to the segments in a trace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|

<h2 id="tocS_ResponseTimeRootCauseServices">ResponseTimeRootCauseServices</h2>
<!-- backwards compatibility -->
<a id="schemaresponsetimerootcauseservices"></a>
<a id="schema_ResponseTimeRootCauseServices"></a>
<a id="tocSresponsetimerootcauseservices"></a>
<a id="tocsresponsetimerootcauseservices"></a>

```json
[
  {
    "Name": {},
    "Names": {},
    "Type": {},
    "AccountId": {},
    "EntityPath": {},
    "Inferred": {}
  }
]
```

<h2 id="tocS_ResponseTimeRootCause">ResponseTimeRootCause</h2>
<!-- backwards compatibility -->
<a id="schemaresponsetimerootcause"></a>
<a id="schema_ResponseTimeRootCause"></a>
<a id="tocSresponsetimerootcause"></a>
<a id="tocsresponsetimerootcause"></a>

```json
{
  "Services": {},
  "ClientImpacting": {}
}
```

The root cause information for a response time warning.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Services|object|false|none|none|
|ClientImpacting|object|false|none|none|

<h2 id="tocS_ResponseTimeRootCauseEntity">ResponseTimeRootCauseEntity</h2>
<!-- backwards compatibility -->
<a id="schemaresponsetimerootcauseentity"></a>
<a id="schema_ResponseTimeRootCauseEntity"></a>
<a id="tocSresponsetimerootcauseentity"></a>
<a id="tocsresponsetimerootcauseentity"></a>

```json
{
  "Name": {},
  "Coverage": {},
  "Remote": {}
}
```

A collection of segments and corresponding subsegments associated to a response time warning.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Coverage|object|false|none|none|
|Remote|object|false|none|none|

<h2 id="tocS_ResponseTimeRootCauseEntityPath">ResponseTimeRootCauseEntityPath</h2>
<!-- backwards compatibility -->
<a id="schemaresponsetimerootcauseentitypath"></a>
<a id="schema_ResponseTimeRootCauseEntityPath"></a>
<a id="tocSresponsetimerootcauseentitypath"></a>
<a id="tocsresponsetimerootcauseentitypath"></a>

```json
[
  {
    "Name": {},
    "Coverage": {},
    "Remote": {}
  }
]
```

<h2 id="tocS_ResponseTimeRootCauseService">ResponseTimeRootCauseService</h2>
<!-- backwards compatibility -->
<a id="schemaresponsetimerootcauseservice"></a>
<a id="schema_ResponseTimeRootCauseService"></a>
<a id="tocSresponsetimerootcauseservice"></a>
<a id="tocsresponsetimerootcauseservice"></a>

```json
{
  "Name": {},
  "Names": {},
  "Type": {},
  "AccountId": {},
  "EntityPath": {},
  "Inferred": {}
}
```

A collection of fields identifying the service in a response time warning.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Names|object|false|none|none|
|Type|object|false|none|none|
|AccountId|object|false|none|none|
|EntityPath|object|false|none|none|
|Inferred|object|false|none|none|

<h2 id="tocS_ResponseTimeRootCauses">ResponseTimeRootCauses</h2>
<!-- backwards compatibility -->
<a id="schemaresponsetimerootcauses"></a>
<a id="schema_ResponseTimeRootCauses"></a>
<a id="tocSresponsetimerootcauses"></a>
<a id="tocsresponsetimerootcauses"></a>

```json
[
  {
    "Services": {},
    "ClientImpacting": {}
  }
]
```

<h2 id="tocS_RootCauseException">RootCauseException</h2>
<!-- backwards compatibility -->
<a id="schemarootcauseexception"></a>
<a id="schema_RootCauseException"></a>
<a id="tocSrootcauseexception"></a>
<a id="tocsrootcauseexception"></a>

```json
{
  "Name": {},
  "Message": {}
}
```

The exception associated with a root cause.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_SampledCount">SampledCount</h2>
<!-- backwards compatibility -->
<a id="schemasampledcount"></a>
<a id="schema_SampledCount"></a>
<a id="tocSsampledcount"></a>
<a id="tocssampledcount"></a>

```json
0
```

<h2 id="tocS_SamplingRuleUpdate">SamplingRuleUpdate</h2>
<!-- backwards compatibility -->
<a id="schemasamplingruleupdate"></a>
<a id="schema_SamplingRuleUpdate"></a>
<a id="tocSsamplingruleupdate"></a>
<a id="tocssamplingruleupdate"></a>

```json
{
  "RuleName": {},
  "RuleARN": {},
  "ResourceARN": {},
  "Priority": {},
  "FixedRate": {},
  "ReservoirSize": {},
  "Host": {},
  "ServiceName": {},
  "ServiceType": {},
  "HTTPMethod": {},
  "URLPath": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

A document specifying changes to a sampling rule's configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleName|object|false|none|none|
|RuleARN|object|false|none|none|
|ResourceARN|object|false|none|none|
|Priority|object|false|none|none|
|FixedRate|object|false|none|none|
|ReservoirSize|object|false|none|none|
|Host|object|false|none|none|
|ServiceName|object|false|none|none|
|ServiceType|object|false|none|none|
|HTTPMethod|object|false|none|none|
|URLPath|object|false|none|none|
|Attributes|object|false|none|none|

<h2 id="tocS_SamplingStatisticSummary">SamplingStatisticSummary</h2>
<!-- backwards compatibility -->
<a id="schemasamplingstatisticsummary"></a>
<a id="schema_SamplingStatisticSummary"></a>
<a id="tocSsamplingstatisticsummary"></a>
<a id="tocssamplingstatisticsummary"></a>

```json
{
  "RuleName": {},
  "Timestamp": {},
  "RequestCount": {},
  "BorrowCount": {},
  "SampledCount": {}
}
```

Aggregated request sampling data for a sampling rule across all services for a 10-second window.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleName|object|false|none|none|
|Timestamp|object|false|none|none|
|RequestCount|object|false|none|none|
|BorrowCount|object|false|none|none|
|SampledCount|object|false|none|none|

<h2 id="tocS_SamplingTargetDocument">SamplingTargetDocument</h2>
<!-- backwards compatibility -->
<a id="schemasamplingtargetdocument"></a>
<a id="schema_SamplingTargetDocument"></a>
<a id="tocSsamplingtargetdocument"></a>
<a id="tocssamplingtargetdocument"></a>

```json
{
  "RuleName": {},
  "FixedRate": {},
  "ReservoirQuota": {},
  "ReservoirQuotaTTL": {},
  "Interval": {}
}
```

Temporary changes to a sampling rule configuration. To meet the global sampling target for a rule, X-Ray calculates a new reservoir for each service based on the recent sampling results of all services that called <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleName|object|false|none|none|
|FixedRate|object|false|none|none|
|ReservoirQuota|object|false|none|none|
|ReservoirQuotaTTL|object|false|none|none|
|Interval|object|false|none|none|

<h2 id="tocS_SegmentId">SegmentId</h2>
<!-- backwards compatibility -->
<a id="schemasegmentid"></a>
<a id="schema_SegmentId"></a>
<a id="tocSsegmentid"></a>
<a id="tocssegmentid"></a>

```json
"string"
```

<h2 id="tocS_SegmentDocument">SegmentDocument</h2>
<!-- backwards compatibility -->
<a id="schemasegmentdocument"></a>
<a id="schema_SegmentDocument"></a>
<a id="tocSsegmentdocument"></a>
<a id="tocssegmentdocument"></a>

```json
"string"
```

<h2 id="tocS_Segment">Segment</h2>
<!-- backwards compatibility -->
<a id="schemasegment"></a>
<a id="schema_Segment"></a>
<a id="tocSsegment"></a>
<a id="tocssegment"></a>

```json
{
  "Id": {},
  "Document": {}
}
```

<p>A segment from a trace that has been ingested by the X-Ray service. The segment can be compiled from documents uploaded with <a href="https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html">PutTraceSegments</a>, or an <code>inferred</code> segment for a downstream service, generated from a subsegment sent by the service that called it.</p> <p>For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Document|object|false|none|none|

<h2 id="tocS_SegmentList">SegmentList</h2>
<!-- backwards compatibility -->
<a id="schemasegmentlist"></a>
<a id="schema_SegmentList"></a>
<a id="tocSsegmentlist"></a>
<a id="tocssegmentlist"></a>

```json
[
  {
    "Id": {},
    "Document": {}
  }
]
```

<h2 id="tocS_ServiceStatistics">ServiceStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaservicestatistics"></a>
<a id="schema_ServiceStatistics"></a>
<a id="tocSservicestatistics"></a>
<a id="tocsservicestatistics"></a>

```json
{
  "OkCount": {},
  "ErrorStatistics": {
    "ThrottleCount": {},
    "OtherCount": {},
    "TotalCount": {}
  },
  "FaultStatistics": {
    "OtherCount": {},
    "TotalCount": {}
  },
  "TotalCount": {},
  "TotalResponseTime": {}
}
```

Response statistics for a service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OkCount|object|false|none|none|
|ErrorStatistics|object|false|none|none|
|FaultStatistics|object|false|none|none|
|TotalCount|object|false|none|none|
|TotalResponseTime|object|false|none|none|

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "ReferenceId": {},
  "Name": {},
  "Names": {},
  "Root": {},
  "AccountId": {},
  "Type": {},
  "State": {},
  "StartTime": {},
  "EndTime": {},
  "Edges": {},
  "SummaryStatistics": {
    "OkCount": {},
    "ErrorStatistics": {
      "ThrottleCount": {},
      "OtherCount": {},
      "TotalCount": {}
    },
    "FaultStatistics": {
      "OtherCount": {},
      "TotalCount": {}
    },
    "TotalCount": {},
    "TotalResponseTime": {}
  },
  "DurationHistogram": {},
  "ResponseTimeHistogram": {}
}
```

Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReferenceId|object|false|none|none|
|Name|object|false|none|none|
|Names|object|false|none|none|
|Root|object|false|none|none|
|AccountId|object|false|none|none|
|Type|object|false|none|none|
|State|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Edges|object|false|none|none|
|SummaryStatistics|object|false|none|none|
|DurationHistogram|object|false|none|none|
|ResponseTimeHistogram|object|false|none|none|

<h2 id="tocS_ServiceIds">ServiceIds</h2>
<!-- backwards compatibility -->
<a id="schemaserviceids"></a>
<a id="schema_ServiceIds"></a>
<a id="tocSserviceids"></a>
<a id="tocsserviceids"></a>

```json
[
  {
    "Name": {},
    "Names": {},
    "AccountId": {},
    "Type": {}
  }
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

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_TimeSeriesServiceStatistics">TimeSeriesServiceStatistics</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesservicestatistics"></a>
<a id="schema_TimeSeriesServiceStatistics"></a>
<a id="tocStimeseriesservicestatistics"></a>
<a id="tocstimeseriesservicestatistics"></a>

```json
{
  "Timestamp": {},
  "EdgeSummaryStatistics": {
    "OkCount": {},
    "ErrorStatistics": {
      "ThrottleCount": {},
      "OtherCount": {},
      "TotalCount": {}
    },
    "FaultStatistics": {
      "OtherCount": {},
      "TotalCount": {}
    },
    "TotalCount": {},
    "TotalResponseTime": {}
  },
  "ServiceSummaryStatistics": {
    "OkCount": {},
    "ErrorStatistics": {
      "ThrottleCount": {},
      "OtherCount": {},
      "TotalCount": {}
    },
    "FaultStatistics": {
      "OtherCount": {},
      "TotalCount": {}
    },
    "TotalCount": {},
    "TotalResponseTime": {}
  },
  "ServiceForecastStatistics": {
    "FaultCountHigh": {},
    "FaultCountLow": {}
  },
  "ResponseTimeHistogram": {}
}
```

A list of TimeSeriesStatistic structures.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timestamp|object|false|none|none|
|EdgeSummaryStatistics|[EdgeStatistics](#schemaedgestatistics)|false|none|Response statistics for an edge.|
|ServiceSummaryStatistics|[ServiceStatistics](#schemaservicestatistics)|false|none|Response statistics for a service.|
|ServiceForecastStatistics|object|false|none|none|
|ResponseTimeHistogram|object|false|none|none|

<h2 id="tocS_Trace">Trace</h2>
<!-- backwards compatibility -->
<a id="schematrace"></a>
<a id="schema_Trace"></a>
<a id="tocStrace"></a>
<a id="tocstrace"></a>

```json
{
  "Id": {},
  "Duration": {},
  "LimitExceeded": {},
  "Segments": {}
}
```

A collection of segment documents with matching trace IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Duration|object|false|none|none|
|LimitExceeded|object|false|none|none|
|Segments|object|false|none|none|

<h2 id="tocS_TraceAvailabilityZones">TraceAvailabilityZones</h2>
<!-- backwards compatibility -->
<a id="schematraceavailabilityzones"></a>
<a id="schema_TraceAvailabilityZones"></a>
<a id="tocStraceavailabilityzones"></a>
<a id="tocstraceavailabilityzones"></a>

```json
[
  {
    "Name": {}
  }
]
```

<h2 id="tocS_TraceInstanceIds">TraceInstanceIds</h2>
<!-- backwards compatibility -->
<a id="schematraceinstanceids"></a>
<a id="schema_TraceInstanceIds"></a>
<a id="tocStraceinstanceids"></a>
<a id="tocstraceinstanceids"></a>

```json
[
  {
    "Id": {}
  }
]
```

<h2 id="tocS_TraceResourceARNs">TraceResourceARNs</h2>
<!-- backwards compatibility -->
<a id="schematraceresourcearns"></a>
<a id="schema_TraceResourceARNs"></a>
<a id="tocStraceresourcearns"></a>
<a id="tocstraceresourcearns"></a>

```json
[
  {
    "ARN": {}
  }
]
```

<h2 id="tocS_TraceUsers">TraceUsers</h2>
<!-- backwards compatibility -->
<a id="schematraceusers"></a>
<a id="schema_TraceUsers"></a>
<a id="tocStraceusers"></a>
<a id="tocstraceusers"></a>

```json
[
  {
    "UserName": {},
    "ServiceIds": {}
  }
]
```

<h2 id="tocS_TraceSummary">TraceSummary</h2>
<!-- backwards compatibility -->
<a id="schematracesummary"></a>
<a id="schema_TraceSummary"></a>
<a id="tocStracesummary"></a>
<a id="tocstracesummary"></a>

```json
{
  "Id": {},
  "Duration": {},
  "ResponseTime": {},
  "HasFault": {},
  "HasError": {},
  "HasThrottle": {},
  "IsPartial": {},
  "Http": {
    "HttpURL": {},
    "HttpStatus": {},
    "HttpMethod": {},
    "UserAgent": {},
    "ClientIp": {}
  },
  "Annotations": {
    "property1": [
      {
        "AnnotationValue": {
          "NumberValue": {},
          "BooleanValue": {},
          "StringValue": {}
        },
        "ServiceIds": {}
      }
    ],
    "property2": [
      {
        "AnnotationValue": {
          "NumberValue": {},
          "BooleanValue": {},
          "StringValue": {}
        },
        "ServiceIds": {}
      }
    ]
  },
  "Users": {},
  "ServiceIds": {},
  "ResourceARNs": {},
  "InstanceIds": {},
  "AvailabilityZones": {},
  "EntryPoint": {
    "Name": {},
    "Names": {},
    "AccountId": {},
    "Type": {}
  },
  "FaultRootCauses": {},
  "ErrorRootCauses": {},
  "ResponseTimeRootCauses": {},
  "Revision": {},
  "MatchedEventTime": {}
}
```

Metadata generated from the segment documents in a trace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Duration|object|false|none|none|
|ResponseTime|object|false|none|none|
|HasFault|object|false|none|none|
|HasError|object|false|none|none|
|HasThrottle|object|false|none|none|
|IsPartial|object|false|none|none|
|Http|object|false|none|none|
|Annotations|object|false|none|none|
|Users|object|false|none|none|
|ServiceIds|object|false|none|none|
|ResourceARNs|object|false|none|none|
|InstanceIds|object|false|none|none|
|AvailabilityZones|object|false|none|none|
|EntryPoint|object|false|none|none|
|FaultRootCauses|object|false|none|none|
|ErrorRootCauses|object|false|none|none|
|ResponseTimeRootCauses|object|false|none|none|
|Revision|object|false|none|none|
|MatchedEventTime|object|false|none|none|

<h2 id="tocS_TraceUser">TraceUser</h2>
<!-- backwards compatibility -->
<a id="schematraceuser"></a>
<a id="schema_TraceUser"></a>
<a id="tocStraceuser"></a>
<a id="tocstraceuser"></a>

```json
{
  "UserName": {},
  "ServiceIds": {}
}
```

Information about a user recorded in segment documents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserName|object|false|none|none|
|ServiceIds|object|false|none|none|

<h2 id="tocS_UnprocessedStatistics">UnprocessedStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedstatistics"></a>
<a id="schema_UnprocessedStatistics"></a>
<a id="tocSunprocessedstatistics"></a>
<a id="tocsunprocessedstatistics"></a>

```json
{
  "RuleName": {},
  "ErrorCode": {},
  "Message": {}
}
```

Sampling statistics from a call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> that X-Ray could not process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleName|object|false|none|none|
|ErrorCode|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_UnprocessedTraceSegment">UnprocessedTraceSegment</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedtracesegment"></a>
<a id="schema_UnprocessedTraceSegment"></a>
<a id="tocSunprocessedtracesegment"></a>
<a id="tocsunprocessedtracesegment"></a>

```json
{
  "Id": {},
  "ErrorCode": {},
  "Message": {}
}
```

Information about a segment that failed processing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|ErrorCode|object|false|none|none|
|Message|object|false|none|none|

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

<h2 id="tocS_UpdateGroupRequest">UpdateGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdategrouprequest"></a>
<a id="schema_UpdateGroupRequest"></a>
<a id="tocSupdategrouprequest"></a>
<a id="tocsupdategrouprequest"></a>

```json
{
  "GroupName": {},
  "GroupARN": {},
  "FilterExpression": {},
  "InsightsConfiguration": {
    "InsightsEnabled": {},
    "NotificationsEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|false|none|none|
|GroupARN|object|false|none|none|
|FilterExpression|object|false|none|none|
|InsightsConfiguration|object|false|none|none|

<h2 id="tocS_UpdateSamplingRuleRequest">UpdateSamplingRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesamplingrulerequest"></a>
<a id="schema_UpdateSamplingRuleRequest"></a>
<a id="tocSupdatesamplingrulerequest"></a>
<a id="tocsupdatesamplingrulerequest"></a>

```json
{
  "SamplingRuleUpdate": {
    "RuleName": {},
    "RuleARN": {},
    "ResourceARN": {},
    "Priority": {},
    "FixedRate": {},
    "ReservoirSize": {},
    "Host": {},
    "ServiceName": {},
    "ServiceType": {},
    "HTTPMethod": {},
    "URLPath": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SamplingRuleUpdate|object|true|none|none|

<h2 id="tocS_ValueWithServiceIds">ValueWithServiceIds</h2>
<!-- backwards compatibility -->
<a id="schemavaluewithserviceids"></a>
<a id="schema_ValueWithServiceIds"></a>
<a id="tocSvaluewithserviceids"></a>
<a id="tocsvaluewithserviceids"></a>

```json
{
  "AnnotationValue": {
    "NumberValue": {},
    "BooleanValue": {},
    "StringValue": {}
  },
  "ServiceIds": {}
}
```

Information about a segment annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnnotationValue|object|false|none|none|
|ServiceIds|object|false|none|none|
