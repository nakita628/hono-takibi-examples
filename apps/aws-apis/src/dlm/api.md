<h1 id="amazon-data-lifecycle-manager">Amazon Data Lifecycle Manager v2018-01-12</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Data Lifecycle Manager</fullname> <p>With Amazon Data Lifecycle Manager, you can manage the lifecycle of your Amazon Web Services resources. You create lifecycle policies, which are used to automate operations on the specified resources.</p> <p>Amazon Data Lifecycle Manager supports Amazon EBS volumes and snapshots. For information about using Amazon Data Lifecycle Manager with Amazon EBS, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html"> Amazon Data Lifecycle Manager</a> in the <i>Amazon EC2 User Guide</i>.</p>

Base URLs:

* <a href="http://dlm.us-east-1.amazonaws.com">http://dlm.us-east-1.amazonaws.com</a> - The Amazon DLM multi-region endpoint

* <a href="https://dlm.us-east-1.amazonaws.com">https://dlm.us-east-1.amazonaws.com</a> - The Amazon DLM multi-region endpoint

* <a href="http://dlm.cn-north-1.amazonaws.com.cn">http://dlm.cn-north-1.amazonaws.com.cn</a> - The Amazon DLM endpoint for China (Beijing) and China (Ningxia)

* <a href="https://dlm.cn-north-1.amazonaws.com.cn">https://dlm.cn-north-1.amazonaws.com.cn</a> - The Amazon DLM endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/dlm/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-data-lifecycle-manager-default">Default</h1>

## GetLifecyclePolicies

<a id="opIdGetLifecyclePolicies"></a>

> Code samples

```bash
curl https://dlm.us-east-1.amazonaws.com/policies \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /policies`

<p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>

<h3 id="getlifecyclepolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|policyIds|query|[[PolicyId](#schemapolicyid)]|false|The identifiers of the data lifecycle policies.|
|state|query|string|false|The activation state.|
|resourceTypes|query|[[ResourceTypeValues](#schemaresourcetypevalues)]|false|The resource type.|
|targetTags|query|[[TagFilter](#schematagfilter)]|false|<p>The target tag for a policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p>|
|tagsToAdd|query|[[TagFilter](#schematagfilter)]|false|<p>The tags to add to objects created by the policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p> <p>These user-defined tags are added in addition to the Amazon Web Services-added lifecycle tags.</p>|
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
|state|ENABLED|
|state|DISABLED|
|state|ERROR|
|resourceTypes|VOLUME|
|resourceTypes|INSTANCE|

> Example responses

> 200 Response

```json
{
  "Policies": {}
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

<h3 id="getlifecyclepolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLifecyclePoliciesResponse](#schemagetlifecyclepoliciesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLifecyclePolicy

<a id="opIdCreateLifecyclePolicy"></a>

> Code samples

```bash
curl https://dlm.us-east-1.amazonaws.com/policies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ExecutionRoleArn": "string",
    "Description": "string",
    "State": "ENABLED",
    "PolicyDetails": {
      "PolicyType": {},
      "ResourceTypes": {},
      "ResourceLocations": {},
      "TargetTags": {},
      "Schedules": {},
      "Parameters": {
        "ExcludeBootVolume": {},
        "NoReboot": {},
        "ExcludeDataVolumeTags": {}
      },
      "EventSource": {
        "Type": {},
        "Parameters": {
          "EventType": {},
          "SnapshotOwner": {},
          "DescriptionRegex": {}
        }
      },
      "Actions": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /policies`

Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.

> Body parameter

```json
{
  "ExecutionRoleArn": "string",
  "Description": "string",
  "State": "ENABLED",
  "PolicyDetails": {
    "PolicyType": {},
    "ResourceTypes": {},
    "ResourceLocations": {},
    "TargetTags": {},
    "Schedules": {},
    "Parameters": {
      "ExcludeBootVolume": {},
      "NoReboot": {},
      "ExcludeDataVolumeTags": {}
    },
    "EventSource": {
      "Type": {},
      "Parameters": {
        "EventType": {},
        "SnapshotOwner": {},
        "DescriptionRegex": {}
      }
    },
    "Actions": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createlifecyclepolicy-parameters">Parameters</h3>

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
|» ExecutionRoleArn|body|string|true|The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.|
|» Description|body|string|true|A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.|
|» State|body|string|true|The desired activation state of the lifecycle policy after creation.|
|» PolicyDetails|body|object|true| <b>[All policy types]</b> Specifies the configuration of a lifecycle policy.|
|» » PolicyType|body|object|false|none|
|» » ResourceTypes|body|object|false|none|
|» » ResourceLocations|body|object|false|none|
|» » TargetTags|body|object|false|none|
|» » Schedules|body|object|false|none|
|» » Parameters|body|object|false|none|
|» » » ExcludeBootVolume|body|object|false|none|
|» » » NoReboot|body|object|false|none|
|» » » ExcludeDataVolumeTags|body|object|false|none|
|» » EventSource|body|object|false|none|
|» » » Type|body|object|true|none|
|» » » Parameters|body|object|false|none|
|» » » » EventType|body|object|true|none|
|» » » » SnapshotOwner|body|object|true|none|
|» » » » DescriptionRegex|body|object|true|none|
|» » Actions|body|object|false|none|
|» Tags|body|object|false|The tags to apply to the lifecycle policy during creation.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» State|ENABLED|
|» State|DISABLED|

> Example responses

> 200 Response

```json
{
  "PolicyId": {}
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

<h3 id="createlifecyclepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLifecyclePolicyResponse](#schemacreatelifecyclepolicyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLifecyclePolicy

<a id="opIdGetLifecyclePolicy"></a>

> Code samples

```bash
curl https://dlm.us-east-1.amazonaws.com/policies/string/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /policies/{policyId}/`

Gets detailed information about the specified lifecycle policy.

<h3 id="getlifecyclepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|policyId|path|string|true|The identifier of the lifecycle policy.|
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
  "Policy": {
    "PolicyId": {},
    "Description": {},
    "State": {},
    "StatusMessage": {},
    "ExecutionRoleArn": {},
    "DateCreated": {},
    "DateModified": {},
    "PolicyDetails": {
      "PolicyType": {},
      "ResourceTypes": {},
      "ResourceLocations": {},
      "TargetTags": {},
      "Schedules": {},
      "Parameters": {
        "ExcludeBootVolume": {},
        "NoReboot": {},
        "ExcludeDataVolumeTags": {}
      },
      "EventSource": {
        "Type": {},
        "Parameters": {
          "EventType": {},
          "SnapshotOwner": {},
          "DescriptionRegex": {}
        }
      },
      "Actions": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "PolicyArn": {}
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

<h3 id="getlifecyclepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLifecyclePolicyResponse](#schemagetlifecyclepolicyresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLifecyclePolicy

<a id="opIdDeleteLifecyclePolicy"></a>

> Code samples

```bash
curl https://dlm.us-east-1.amazonaws.com/policies/string/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /policies/{policyId}/`

<p>Deletes the specified lifecycle policy and halts the automated operations that the policy specified.</p> <p>For more information about deleting a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#delete">Delete lifecycle policies</a>.</p>

<h3 id="deletelifecyclepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|policyId|path|string|true|The identifier of the lifecycle policy.|
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

<h3 id="deletelifecyclepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLifecyclePolicyResponse](#schemadeletelifecyclepolicyresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://dlm.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Lists the tags for the specified resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
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
  "Tags": {
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
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://dlm.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{resourceArn}`

Adds the specified tags to the specified resource.

> Body parameter

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|object|true|One or more tags.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

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
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://dlm.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes the specified tags from the specified resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The tag keys.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLifecyclePolicy

<a id="opIdUpdateLifecyclePolicy"></a>

> Code samples

```bash
curl https://dlm.us-east-1.amazonaws.com/policies/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ExecutionRoleArn": "string",
    "State": "ENABLED",
    "Description": "string",
    "PolicyDetails": {
      "PolicyType": {},
      "ResourceTypes": {},
      "ResourceLocations": {},
      "TargetTags": {},
      "Schedules": {},
      "Parameters": {
        "ExcludeBootVolume": {},
        "NoReboot": {},
        "ExcludeDataVolumeTags": {}
      },
      "EventSource": {
        "Type": {},
        "Parameters": {
          "EventType": {},
          "SnapshotOwner": {},
          "DescriptionRegex": {}
        }
      },
      "Actions": {}
    }
  }'
```

`PATCH /policies/{policyId}`

<p>Updates the specified lifecycle policy.</p> <p>For more information about updating a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#modify">Modify lifecycle policies</a>.</p>

> Body parameter

```json
{
  "ExecutionRoleArn": "string",
  "State": "ENABLED",
  "Description": "string",
  "PolicyDetails": {
    "PolicyType": {},
    "ResourceTypes": {},
    "ResourceLocations": {},
    "TargetTags": {},
    "Schedules": {},
    "Parameters": {
      "ExcludeBootVolume": {},
      "NoReboot": {},
      "ExcludeDataVolumeTags": {}
    },
    "EventSource": {
      "Type": {},
      "Parameters": {
        "EventType": {},
        "SnapshotOwner": {},
        "DescriptionRegex": {}
      }
    },
    "Actions": {}
  }
}
```

<h3 id="updatelifecyclepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|policyId|path|string|true|The identifier of the lifecycle policy.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ExecutionRoleArn|body|string|false|The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.|
|» State|body|string|false|The desired activation state of the lifecycle policy after creation.|
|» Description|body|string|false|A description of the lifecycle policy.|
|» PolicyDetails|body|object|false| <b>[All policy types]</b> Specifies the configuration of a lifecycle policy.|
|» » PolicyType|body|object|false|none|
|» » ResourceTypes|body|object|false|none|
|» » ResourceLocations|body|object|false|none|
|» » TargetTags|body|object|false|none|
|» » Schedules|body|object|false|none|
|» » Parameters|body|object|false|none|
|» » » ExcludeBootVolume|body|object|false|none|
|» » » NoReboot|body|object|false|none|
|» » » ExcludeDataVolumeTags|body|object|false|none|
|» » EventSource|body|object|false|none|
|» » » Type|body|object|true|none|
|» » » Parameters|body|object|false|none|
|» » » » EventType|body|object|true|none|
|» » » » SnapshotOwner|body|object|true|none|
|» » » » DescriptionRegex|body|object|true|none|
|» » Actions|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» State|ENABLED|
|» State|DISABLED|

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

<h3 id="updatelifecyclepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLifecyclePolicyResponse](#schemaupdatelifecyclepolicyresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateLifecyclePolicyResponse">CreateLifecyclePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelifecyclepolicyresponse"></a>
<a id="schema_CreateLifecyclePolicyResponse"></a>
<a id="tocScreatelifecyclepolicyresponse"></a>
<a id="tocscreatelifecyclepolicyresponse"></a>

```json
{
  "PolicyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|false|none|none|

<h2 id="tocS_PolicyTypeValues">PolicyTypeValues</h2>
<!-- backwards compatibility -->
<a id="schemapolicytypevalues"></a>
<a id="schema_PolicyTypeValues"></a>
<a id="tocSpolicytypevalues"></a>
<a id="tocspolicytypevalues"></a>

```json
"EBS_SNAPSHOT_MANAGEMENT"
```

<h2 id="tocS_ResourceTypeValuesList">ResourceTypeValuesList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetypevalueslist"></a>
<a id="schema_ResourceTypeValuesList"></a>
<a id="tocSresourcetypevalueslist"></a>
<a id="tocsresourcetypevalueslist"></a>

```json
[
  "VOLUME"
]
```

<h2 id="tocS_ResourceLocationList">ResourceLocationList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelocationlist"></a>
<a id="schema_ResourceLocationList"></a>
<a id="tocSresourcelocationlist"></a>
<a id="tocsresourcelocationlist"></a>

```json
[
  "CLOUD"
]
```

<h2 id="tocS_TargetTagList">TargetTagList</h2>
<!-- backwards compatibility -->
<a id="schematargettaglist"></a>
<a id="schema_TargetTagList"></a>
<a id="tocStargettaglist"></a>
<a id="tocstargettaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ScheduleList">ScheduleList</h2>
<!-- backwards compatibility -->
<a id="schemaschedulelist"></a>
<a id="schema_ScheduleList"></a>
<a id="tocSschedulelist"></a>
<a id="tocsschedulelist"></a>

```json
[
  {
    "Name": {},
    "CopyTags": {},
    "TagsToAdd": {},
    "VariableTags": {},
    "CreateRule": {
      "Location": {},
      "Interval": {},
      "IntervalUnit": {},
      "Times": {},
      "CronExpression": {}
    },
    "RetainRule": {
      "Count": {},
      "Interval": {},
      "IntervalUnit": {}
    },
    "FastRestoreRule": {
      "Count": {},
      "Interval": {},
      "IntervalUnit": {},
      "AvailabilityZones": {}
    },
    "CrossRegionCopyRules": {},
    "ShareRules": {},
    "DeprecateRule": {
      "Count": {},
      "Interval": {},
      "IntervalUnit": {}
    },
    "ArchiveRule": {
      "RetainRule": {
        "RetentionArchiveTier": {
          "Count": {},
          "Interval": {},
          "IntervalUnit": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_Parameters">Parameters</h2>
<!-- backwards compatibility -->
<a id="schemaparameters"></a>
<a id="schema_Parameters"></a>
<a id="tocSparameters"></a>
<a id="tocsparameters"></a>

```json
{
  "ExcludeBootVolume": {},
  "NoReboot": {},
  "ExcludeDataVolumeTags": {}
}
```

<p> <b>[Snapshot and AMI policies only]</b> Specifies optional parameters for snapshot and AMI policies. The set of valid parameters depends on the combination of policy type and target resource type.</p> <p>If you choose to exclude boot volumes and you specify tags that consequently exclude all of the additional data volumes attached to an instance, then Amazon Data Lifecycle Manager will not create any snapshots for the affected instance, and it will emit a <code>SnapshotsCreateFailed</code> Amazon CloudWatch metric. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-dlm-cw-metrics.html">Monitor your policies using Amazon CloudWatch</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExcludeBootVolume|object|false|none|none|
|NoReboot|object|false|none|none|
|ExcludeDataVolumeTags|object|false|none|none|

<h2 id="tocS_EventSource">EventSource</h2>
<!-- backwards compatibility -->
<a id="schemaeventsource"></a>
<a id="schema_EventSource"></a>
<a id="tocSeventsource"></a>
<a id="tocseventsource"></a>

```json
{
  "Type": {},
  "Parameters": {
    "EventType": {},
    "SnapshotOwner": {},
    "DescriptionRegex": {}
  }
}
```

 <b>[Event-based policies only]</b> Specifies an event that activates an event-based policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_ActionList">ActionList</h2>
<!-- backwards compatibility -->
<a id="schemaactionlist"></a>
<a id="schema_ActionList"></a>
<a id="tocSactionlist"></a>
<a id="tocsactionlist"></a>

```json
[
  {
    "Name": {},
    "CrossRegionCopy": {}
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

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

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

<h2 id="tocS_DeleteLifecyclePolicyResponse">DeleteLifecyclePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletelifecyclepolicyresponse"></a>
<a id="schema_DeleteLifecyclePolicyResponse"></a>
<a id="tocSdeletelifecyclepolicyresponse"></a>
<a id="tocsdeletelifecyclepolicyresponse"></a>

```json
{}
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

<h2 id="tocS_GetLifecyclePoliciesResponse">GetLifecyclePoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlifecyclepoliciesresponse"></a>
<a id="schema_GetLifecyclePoliciesResponse"></a>
<a id="tocSgetlifecyclepoliciesresponse"></a>
<a id="tocsgetlifecyclepoliciesresponse"></a>

```json
{
  "Policies": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policies|object|false|none|none|

<h2 id="tocS_PolicyId">PolicyId</h2>
<!-- backwards compatibility -->
<a id="schemapolicyid"></a>
<a id="schema_PolicyId"></a>
<a id="tocSpolicyid"></a>
<a id="tocspolicyid"></a>

```json
"string"
```

<h2 id="tocS_ResourceTypeValues">ResourceTypeValues</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetypevalues"></a>
<a id="schema_ResourceTypeValues"></a>
<a id="tocSresourcetypevalues"></a>
<a id="tocsresourcetypevalues"></a>

```json
"VOLUME"
```

<h2 id="tocS_TagFilter">TagFilter</h2>
<!-- backwards compatibility -->
<a id="schematagfilter"></a>
<a id="schema_TagFilter"></a>
<a id="tocStagfilter"></a>
<a id="tocstagfilter"></a>

```json
"string"
```

<h2 id="tocS_GetLifecyclePolicyResponse">GetLifecyclePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlifecyclepolicyresponse"></a>
<a id="schema_GetLifecyclePolicyResponse"></a>
<a id="tocSgetlifecyclepolicyresponse"></a>
<a id="tocsgetlifecyclepolicyresponse"></a>

```json
{
  "Policy": {
    "PolicyId": {},
    "Description": {},
    "State": {},
    "StatusMessage": {},
    "ExecutionRoleArn": {},
    "DateCreated": {},
    "DateModified": {},
    "PolicyDetails": {
      "PolicyType": {},
      "ResourceTypes": {},
      "ResourceLocations": {},
      "TargetTags": {},
      "Schedules": {},
      "Parameters": {
        "ExcludeBootVolume": {},
        "NoReboot": {},
        "ExcludeDataVolumeTags": {}
      },
      "EventSource": {
        "Type": {},
        "Parameters": {
          "EventType": {},
          "SnapshotOwner": {},
          "DescriptionRegex": {}
        }
      },
      "Actions": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "PolicyArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

<h2 id="tocS_UpdateLifecyclePolicyResponse">UpdateLifecyclePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelifecyclepolicyresponse"></a>
<a id="schema_UpdateLifecyclePolicyResponse"></a>
<a id="tocSupdatelifecyclepolicyresponse"></a>
<a id="tocsupdatelifecyclepolicyresponse"></a>

```json
{}
```

<h2 id="tocS_ActionName">ActionName</h2>
<!-- backwards compatibility -->
<a id="schemaactionname"></a>
<a id="schema_ActionName"></a>
<a id="tocSactionname"></a>
<a id="tocsactionname"></a>

```json
"string"
```

<h2 id="tocS_CrossRegionCopyActionList">CrossRegionCopyActionList</h2>
<!-- backwards compatibility -->
<a id="schemacrossregioncopyactionlist"></a>
<a id="schema_CrossRegionCopyActionList"></a>
<a id="tocScrossregioncopyactionlist"></a>
<a id="tocscrossregioncopyactionlist"></a>

```json
[
  {
    "Target": {},
    "EncryptionConfiguration": {
      "Encrypted": {},
      "CmkArn": {}
    },
    "RetainRule": {
      "Interval": {},
      "IntervalUnit": {}
    }
  }
]
```

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "Name": {},
  "CrossRegionCopy": {}
}
```

 <b>[Event-based policies only]</b> Specifies an action for an event-based policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|CrossRegionCopy|object|true|none|none|

<h2 id="tocS_RetentionArchiveTier">RetentionArchiveTier</h2>
<!-- backwards compatibility -->
<a id="schemaretentionarchivetier"></a>
<a id="schema_RetentionArchiveTier"></a>
<a id="tocSretentionarchivetier"></a>
<a id="tocsretentionarchivetier"></a>

```json
{
  "Count": {},
  "Interval": {},
  "IntervalUnit": {}
}
```

<p> <b>[Snapshot policies only]</b> Describes the retention rule for archived snapshots. Once the archive retention threshold is met, the snapshots are permanently deleted from the archive tier.</p> <note> <p>The archive retention rule must retain snapshots in the archive tier for a minimum of 90 days.</p> </note> <p>For <b>count-based schedules</b>, you must specify <b>Count</b>. For <b>age-based schedules</b>, you must specify <b>Interval</b> and <b> IntervalUnit</b>.</p> <p>For more information about using snapshot archiving, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-ami-policy.html#dlm-archive">Considerations for snapshot lifecycle policies</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|object|false|none|none|
|Interval|object|false|none|none|
|IntervalUnit|object|false|none|none|

<h2 id="tocS_ArchiveRetainRule">ArchiveRetainRule</h2>
<!-- backwards compatibility -->
<a id="schemaarchiveretainrule"></a>
<a id="schema_ArchiveRetainRule"></a>
<a id="tocSarchiveretainrule"></a>
<a id="tocsarchiveretainrule"></a>

```json
{
  "RetentionArchiveTier": {
    "Count": {},
    "Interval": {},
    "IntervalUnit": {}
  }
}
```

 <b>[Snapshot policies only]</b> Specifies information about the archive storage tier retention period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RetentionArchiveTier|object|true|none|none|

<h2 id="tocS_ArchiveRule">ArchiveRule</h2>
<!-- backwards compatibility -->
<a id="schemaarchiverule"></a>
<a id="schema_ArchiveRule"></a>
<a id="tocSarchiverule"></a>
<a id="tocsarchiverule"></a>

```json
{
  "RetainRule": {
    "RetentionArchiveTier": {
      "Count": {},
      "Interval": {},
      "IntervalUnit": {}
    }
  }
}
```

 <b>[Snapshot policies only]</b> Specifies a snapshot archiving rule for a schedule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RetainRule|object|true|none|none|

<h2 id="tocS_AvailabilityZone">AvailabilityZone</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzone"></a>
<a id="schema_AvailabilityZone"></a>
<a id="tocSavailabilityzone"></a>
<a id="tocsavailabilityzone"></a>

```json
"string"
```

<h2 id="tocS_AvailabilityZoneList">AvailabilityZoneList</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzonelist"></a>
<a id="schema_AvailabilityZoneList"></a>
<a id="tocSavailabilityzonelist"></a>
<a id="tocsavailabilityzonelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AwsAccountId">AwsAccountId</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountid"></a>
<a id="schema_AwsAccountId"></a>
<a id="tocSawsaccountid"></a>
<a id="tocsawsaccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_CmkArn">CmkArn</h2>
<!-- backwards compatibility -->
<a id="schemacmkarn"></a>
<a id="schema_CmkArn"></a>
<a id="tocScmkarn"></a>
<a id="tocscmkarn"></a>

```json
"string"
```

<h2 id="tocS_CopyTags">CopyTags</h2>
<!-- backwards compatibility -->
<a id="schemacopytags"></a>
<a id="schema_CopyTags"></a>
<a id="tocScopytags"></a>
<a id="tocscopytags"></a>

```json
true
```

<h2 id="tocS_CopyTagsNullable">CopyTagsNullable</h2>
<!-- backwards compatibility -->
<a id="schemacopytagsnullable"></a>
<a id="schema_CopyTagsNullable"></a>
<a id="tocScopytagsnullable"></a>
<a id="tocscopytagsnullable"></a>

```json
true
```

<h2 id="tocS_Count">Count</h2>
<!-- backwards compatibility -->
<a id="schemacount"></a>
<a id="schema_Count"></a>
<a id="tocScount"></a>
<a id="tocscount"></a>

```json
1
```

<h2 id="tocS_ExecutionRoleArn">ExecutionRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionrolearn"></a>
<a id="schema_ExecutionRoleArn"></a>
<a id="tocSexecutionrolearn"></a>
<a id="tocsexecutionrolearn"></a>

```json
"string"
```

<h2 id="tocS_PolicyDescription">PolicyDescription</h2>
<!-- backwards compatibility -->
<a id="schemapolicydescription"></a>
<a id="schema_PolicyDescription"></a>
<a id="tocSpolicydescription"></a>
<a id="tocspolicydescription"></a>

```json
"string"
```

<h2 id="tocS_SettablePolicyStateValues">SettablePolicyStateValues</h2>
<!-- backwards compatibility -->
<a id="schemasettablepolicystatevalues"></a>
<a id="schema_SettablePolicyStateValues"></a>
<a id="tocSsettablepolicystatevalues"></a>
<a id="tocssettablepolicystatevalues"></a>

```json
"ENABLED"
```

<h2 id="tocS_PolicyDetails">PolicyDetails</h2>
<!-- backwards compatibility -->
<a id="schemapolicydetails"></a>
<a id="schema_PolicyDetails"></a>
<a id="tocSpolicydetails"></a>
<a id="tocspolicydetails"></a>

```json
{
  "PolicyType": {},
  "ResourceTypes": {},
  "ResourceLocations": {},
  "TargetTags": {},
  "Schedules": {},
  "Parameters": {
    "ExcludeBootVolume": {},
    "NoReboot": {},
    "ExcludeDataVolumeTags": {}
  },
  "EventSource": {
    "Type": {},
    "Parameters": {
      "EventType": {},
      "SnapshotOwner": {},
      "DescriptionRegex": {}
    }
  },
  "Actions": {}
}
```

 <b>[All policy types]</b> Specifies the configuration of a lifecycle policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyType|object|false|none|none|
|ResourceTypes|object|false|none|none|
|ResourceLocations|object|false|none|none|
|TargetTags|object|false|none|none|
|Schedules|object|false|none|none|
|Parameters|object|false|none|none|
|EventSource|object|false|none|none|
|Actions|object|false|none|none|

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

<h2 id="tocS_CreateLifecyclePolicyRequest">CreateLifecyclePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelifecyclepolicyrequest"></a>
<a id="schema_CreateLifecyclePolicyRequest"></a>
<a id="tocScreatelifecyclepolicyrequest"></a>
<a id="tocscreatelifecyclepolicyrequest"></a>

```json
{
  "ExecutionRoleArn": {},
  "Description": {},
  "State": {},
  "PolicyDetails": {
    "PolicyType": {},
    "ResourceTypes": {},
    "ResourceLocations": {},
    "TargetTags": {},
    "Schedules": {},
    "Parameters": {
      "ExcludeBootVolume": {},
      "NoReboot": {},
      "ExcludeDataVolumeTags": {}
    },
    "EventSource": {
      "Type": {},
      "Parameters": {
        "EventType": {},
        "SnapshotOwner": {},
        "DescriptionRegex": {}
      }
    },
    "Actions": {}
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
|ExecutionRoleArn|object|true|none|none|
|Description|object|true|none|none|
|State|object|true|none|none|
|PolicyDetails|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_LocationValues">LocationValues</h2>
<!-- backwards compatibility -->
<a id="schemalocationvalues"></a>
<a id="schema_LocationValues"></a>
<a id="tocSlocationvalues"></a>
<a id="tocslocationvalues"></a>

```json
"CLOUD"
```

<h2 id="tocS_Interval">Interval</h2>
<!-- backwards compatibility -->
<a id="schemainterval"></a>
<a id="schema_Interval"></a>
<a id="tocSinterval"></a>
<a id="tocsinterval"></a>

```json
1
```

<h2 id="tocS_IntervalUnitValues">IntervalUnitValues</h2>
<!-- backwards compatibility -->
<a id="schemaintervalunitvalues"></a>
<a id="schema_IntervalUnitValues"></a>
<a id="tocSintervalunitvalues"></a>
<a id="tocsintervalunitvalues"></a>

```json
"HOURS"
```

<h2 id="tocS_TimesList">TimesList</h2>
<!-- backwards compatibility -->
<a id="schematimeslist"></a>
<a id="schema_TimesList"></a>
<a id="tocStimeslist"></a>
<a id="tocstimeslist"></a>

```json
[
  "strin"
]
```

<h2 id="tocS_CronExpression">CronExpression</h2>
<!-- backwards compatibility -->
<a id="schemacronexpression"></a>
<a id="schema_CronExpression"></a>
<a id="tocScronexpression"></a>
<a id="tocscronexpression"></a>

```json
"stringstringstrin"
```

<h2 id="tocS_CreateRule">CreateRule</h2>
<!-- backwards compatibility -->
<a id="schemacreaterule"></a>
<a id="schema_CreateRule"></a>
<a id="tocScreaterule"></a>
<a id="tocscreaterule"></a>

```json
{
  "Location": {},
  "Interval": {},
  "IntervalUnit": {},
  "Times": {},
  "CronExpression": {}
}
```

<p> <b>[Snapshot and AMI policies only]</b> Specifies when the policy should create snapshots or AMIs.</p> <note> <ul> <li> <p>You must specify either <b>CronExpression</b>, or <b>Interval</b>, <b>IntervalUnit</b>, and <b>Times</b>.</p> </li> <li> <p>If you need to specify an <a>ArchiveRule</a> for the schedule, then you must specify a creation frequency of at least 28 days.</p> </li> </ul> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Location|object|false|none|none|
|Interval|object|false|none|none|
|IntervalUnit|object|false|none|none|
|Times|object|false|none|none|
|CronExpression|object|false|none|none|

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
"string"
```

<h2 id="tocS_EncryptionConfiguration">EncryptionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionconfiguration"></a>
<a id="schema_EncryptionConfiguration"></a>
<a id="tocSencryptionconfiguration"></a>
<a id="tocsencryptionconfiguration"></a>

```json
{
  "Encrypted": {},
  "CmkArn": {}
}
```

 <b>[Event-based policies only]</b> Specifies the encryption settings for cross-Region snapshot copies created by event-based policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Encrypted|object|true|none|none|
|CmkArn|object|false|none|none|

<h2 id="tocS_CrossRegionCopyRetainRule">CrossRegionCopyRetainRule</h2>
<!-- backwards compatibility -->
<a id="schemacrossregioncopyretainrule"></a>
<a id="schema_CrossRegionCopyRetainRule"></a>
<a id="tocScrossregioncopyretainrule"></a>
<a id="tocscrossregioncopyretainrule"></a>

```json
{
  "Interval": {},
  "IntervalUnit": {}
}
```

Specifies a retention rule for cross-Region snapshot copies created by snapshot or event-based policies, or cross-Region AMI copies created by AMI policies. After the retention period expires, the cross-Region copy is deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Interval|object|false|none|none|
|IntervalUnit|object|false|none|none|

<h2 id="tocS_CrossRegionCopyAction">CrossRegionCopyAction</h2>
<!-- backwards compatibility -->
<a id="schemacrossregioncopyaction"></a>
<a id="schema_CrossRegionCopyAction"></a>
<a id="tocScrossregioncopyaction"></a>
<a id="tocscrossregioncopyaction"></a>

```json
{
  "Target": {},
  "EncryptionConfiguration": {
    "Encrypted": {},
    "CmkArn": {}
  },
  "RetainRule": {
    "Interval": {},
    "IntervalUnit": {}
  }
}
```

<p> <b>[Event-based policies only]</b> Specifies a cross-Region copy action for event-based policies.</p> <note> <p>To specify a cross-Region copy rule for snapshot and AMI policies, use <a>CrossRegionCopyRule</a>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Target|object|true|none|none|
|EncryptionConfiguration|object|true|none|none|
|RetainRule|[CrossRegionCopyRetainRule](#schemacrossregioncopyretainrule)|false|none|Specifies a retention rule for cross-Region snapshot copies created by snapshot or event-based policies, or cross-Region AMI copies created by AMI policies. After the retention period expires, the cross-Region copy is deleted.|

<h2 id="tocS_RetentionIntervalUnitValues">RetentionIntervalUnitValues</h2>
<!-- backwards compatibility -->
<a id="schemaretentionintervalunitvalues"></a>
<a id="schema_RetentionIntervalUnitValues"></a>
<a id="tocSretentionintervalunitvalues"></a>
<a id="tocsretentionintervalunitvalues"></a>

```json
"DAYS"
```

<h2 id="tocS_CrossRegionCopyDeprecateRule">CrossRegionCopyDeprecateRule</h2>
<!-- backwards compatibility -->
<a id="schemacrossregioncopydeprecaterule"></a>
<a id="schema_CrossRegionCopyDeprecateRule"></a>
<a id="tocScrossregioncopydeprecaterule"></a>
<a id="tocscrossregioncopydeprecaterule"></a>

```json
{
  "Interval": {},
  "IntervalUnit": {}
}
```

 <b>[AMI policies only]</b> Specifies an AMI deprecation rule for cross-Region AMI copies created by an AMI policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Interval|object|false|none|none|
|IntervalUnit|object|false|none|none|

<h2 id="tocS_TargetRegion">TargetRegion</h2>
<!-- backwards compatibility -->
<a id="schematargetregion"></a>
<a id="schema_TargetRegion"></a>
<a id="tocStargetregion"></a>
<a id="tocstargetregion"></a>

```json
"string"
```

<h2 id="tocS_Encrypted">Encrypted</h2>
<!-- backwards compatibility -->
<a id="schemaencrypted"></a>
<a id="schema_Encrypted"></a>
<a id="tocSencrypted"></a>
<a id="tocsencrypted"></a>

```json
true
```

<h2 id="tocS_CrossRegionCopyRule">CrossRegionCopyRule</h2>
<!-- backwards compatibility -->
<a id="schemacrossregioncopyrule"></a>
<a id="schema_CrossRegionCopyRule"></a>
<a id="tocScrossregioncopyrule"></a>
<a id="tocscrossregioncopyrule"></a>

```json
{
  "TargetRegion": {},
  "Target": {},
  "Encrypted": {},
  "CmkArn": {},
  "CopyTags": {},
  "RetainRule": {
    "Interval": {},
    "IntervalUnit": {}
  },
  "DeprecateRule": {
    "Interval": {},
    "IntervalUnit": {}
  }
}
```

<p> <b>[Snapshot and AMI policies only]</b> Specifies a cross-Region copy rule for snapshot and AMI policies.</p> <note> <p>To specify a cross-Region copy action for event-based polices, use <a>CrossRegionCopyAction</a>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetRegion|object|false|none|none|
|Target|object|false|none|none|
|Encrypted|object|true|none|none|
|CmkArn|object|false|none|none|
|CopyTags|object|false|none|none|
|RetainRule|object|false|none|none|
|DeprecateRule|object|false|none|none|

<h2 id="tocS_CrossRegionCopyRules">CrossRegionCopyRules</h2>
<!-- backwards compatibility -->
<a id="schemacrossregioncopyrules"></a>
<a id="schema_CrossRegionCopyRules"></a>
<a id="tocScrossregioncopyrules"></a>
<a id="tocscrossregioncopyrules"></a>

```json
[
  {
    "TargetRegion": {},
    "Target": {},
    "Encrypted": {},
    "CmkArn": {},
    "CopyTags": {},
    "RetainRule": {
      "Interval": {},
      "IntervalUnit": {}
    },
    "DeprecateRule": {
      "Interval": {},
      "IntervalUnit": {}
    }
  }
]
```

<h2 id="tocS_DeleteLifecyclePolicyRequest">DeleteLifecyclePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelifecyclepolicyrequest"></a>
<a id="schema_DeleteLifecyclePolicyRequest"></a>
<a id="tocSdeletelifecyclepolicyrequest"></a>
<a id="tocsdeletelifecyclepolicyrequest"></a>

```json
{}
```

<h2 id="tocS_DeprecateRule">DeprecateRule</h2>
<!-- backwards compatibility -->
<a id="schemadeprecaterule"></a>
<a id="schema_DeprecateRule"></a>
<a id="tocSdeprecaterule"></a>
<a id="tocsdeprecaterule"></a>

```json
{
  "Count": {},
  "Interval": {},
  "IntervalUnit": {}
}
```

<p> <b>[AMI policies only]</b> Specifies an AMI deprecation rule for AMIs created by an AMI lifecycle policy.</p> <p>For age-based schedules, you must specify <b>Interval</b> and <b>IntervalUnit</b>. For count-based schedules, you must specify <b>Count</b>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|object|false|none|none|
|Interval|object|false|none|none|
|IntervalUnit|object|false|none|none|

<h2 id="tocS_DescriptionRegex">DescriptionRegex</h2>
<!-- backwards compatibility -->
<a id="schemadescriptionregex"></a>
<a id="schema_DescriptionRegex"></a>
<a id="tocSdescriptionregex"></a>
<a id="tocsdescriptionregex"></a>

```json
"string"
```

<h2 id="tocS_EventTypeValues">EventTypeValues</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypevalues"></a>
<a id="schema_EventTypeValues"></a>
<a id="tocSeventtypevalues"></a>
<a id="tocseventtypevalues"></a>

```json
"shareSnapshot"
```

<h2 id="tocS_SnapshotOwnerList">SnapshotOwnerList</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotownerlist"></a>
<a id="schema_SnapshotOwnerList"></a>
<a id="tocSsnapshotownerlist"></a>
<a id="tocssnapshotownerlist"></a>

```json
[
  "stringstring"
]
```

<h2 id="tocS_EventParameters">EventParameters</h2>
<!-- backwards compatibility -->
<a id="schemaeventparameters"></a>
<a id="schema_EventParameters"></a>
<a id="tocSeventparameters"></a>
<a id="tocseventparameters"></a>

```json
{
  "EventType": {},
  "SnapshotOwner": {},
  "DescriptionRegex": {}
}
```

 <b>[Event-based policies only]</b> Specifies an event that activates an event-based policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventType|object|true|none|none|
|SnapshotOwner|object|true|none|none|
|DescriptionRegex|object|true|none|none|

<h2 id="tocS_EventSourceValues">EventSourceValues</h2>
<!-- backwards compatibility -->
<a id="schemaeventsourcevalues"></a>
<a id="schema_EventSourceValues"></a>
<a id="tocSeventsourcevalues"></a>
<a id="tocseventsourcevalues"></a>

```json
"MANAGED_CWE"
```

<h2 id="tocS_ExcludeBootVolume">ExcludeBootVolume</h2>
<!-- backwards compatibility -->
<a id="schemaexcludebootvolume"></a>
<a id="schema_ExcludeBootVolume"></a>
<a id="tocSexcludebootvolume"></a>
<a id="tocsexcludebootvolume"></a>

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

Specifies a tag for a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_ExcludeDataVolumeTagList">ExcludeDataVolumeTagList</h2>
<!-- backwards compatibility -->
<a id="schemaexcludedatavolumetaglist"></a>
<a id="schema_ExcludeDataVolumeTagList"></a>
<a id="tocSexcludedatavolumetaglist"></a>
<a id="tocsexcludedatavolumetaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_FastRestoreRule">FastRestoreRule</h2>
<!-- backwards compatibility -->
<a id="schemafastrestorerule"></a>
<a id="schema_FastRestoreRule"></a>
<a id="tocSfastrestorerule"></a>
<a id="tocsfastrestorerule"></a>

```json
{
  "Count": {},
  "Interval": {},
  "IntervalUnit": {},
  "AvailabilityZones": {}
}
```

 <b>[Snapshot policies only]</b> Specifies a rule for enabling fast snapshot restore for snapshots created by snapshot policies. You can enable fast snapshot restore based on either a count or a time interval.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|object|false|none|none|
|Interval|object|false|none|none|
|IntervalUnit|object|false|none|none|
|AvailabilityZones|object|true|none|none|

<h2 id="tocS_PolicyIdList">PolicyIdList</h2>
<!-- backwards compatibility -->
<a id="schemapolicyidlist"></a>
<a id="schema_PolicyIdList"></a>
<a id="tocSpolicyidlist"></a>
<a id="tocspolicyidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GettablePolicyStateValues">GettablePolicyStateValues</h2>
<!-- backwards compatibility -->
<a id="schemagettablepolicystatevalues"></a>
<a id="schema_GettablePolicyStateValues"></a>
<a id="tocSgettablepolicystatevalues"></a>
<a id="tocsgettablepolicystatevalues"></a>

```json
"ENABLED"
```

<h2 id="tocS_TargetTagsFilterList">TargetTagsFilterList</h2>
<!-- backwards compatibility -->
<a id="schematargettagsfilterlist"></a>
<a id="schema_TargetTagsFilterList"></a>
<a id="tocStargettagsfilterlist"></a>
<a id="tocstargettagsfilterlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagsToAddFilterList">TagsToAddFilterList</h2>
<!-- backwards compatibility -->
<a id="schematagstoaddfilterlist"></a>
<a id="schema_TagsToAddFilterList"></a>
<a id="tocStagstoaddfilterlist"></a>
<a id="tocstagstoaddfilterlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GetLifecyclePoliciesRequest">GetLifecyclePoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlifecyclepoliciesrequest"></a>
<a id="schema_GetLifecyclePoliciesRequest"></a>
<a id="tocSgetlifecyclepoliciesrequest"></a>
<a id="tocsgetlifecyclepoliciesrequest"></a>

```json
{}
```

<h2 id="tocS_LifecyclePolicySummaryList">LifecyclePolicySummaryList</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepolicysummarylist"></a>
<a id="schema_LifecyclePolicySummaryList"></a>
<a id="tocSlifecyclepolicysummarylist"></a>
<a id="tocslifecyclepolicysummarylist"></a>

```json
[
  {
    "PolicyId": {},
    "Description": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "PolicyType": {}
  }
]
```

<h2 id="tocS_GetLifecyclePolicyRequest">GetLifecyclePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlifecyclepolicyrequest"></a>
<a id="schema_GetLifecyclePolicyRequest"></a>
<a id="tocSgetlifecyclepolicyrequest"></a>
<a id="tocsgetlifecyclepolicyrequest"></a>

```json
{}
```

<h2 id="tocS_LifecyclePolicy">LifecyclePolicy</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepolicy"></a>
<a id="schema_LifecyclePolicy"></a>
<a id="tocSlifecyclepolicy"></a>
<a id="tocslifecyclepolicy"></a>

```json
{
  "PolicyId": {},
  "Description": {},
  "State": {},
  "StatusMessage": {},
  "ExecutionRoleArn": {},
  "DateCreated": {},
  "DateModified": {},
  "PolicyDetails": {
    "PolicyType": {},
    "ResourceTypes": {},
    "ResourceLocations": {},
    "TargetTags": {},
    "Schedules": {},
    "Parameters": {
      "ExcludeBootVolume": {},
      "NoReboot": {},
      "ExcludeDataVolumeTags": {}
    },
    "EventSource": {
      "Type": {},
      "Parameters": {
        "EventType": {},
        "SnapshotOwner": {},
        "DescriptionRegex": {}
      }
    },
    "Actions": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "PolicyArn": {}
}
```

 <b>[All policy types]</b> Detailed information about a snapshot, AMI, or event-based lifecycle policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|false|none|none|
|Description|object|false|none|none|
|State|object|false|none|none|
|StatusMessage|object|false|none|none|
|ExecutionRoleArn|object|false|none|none|
|DateCreated|object|false|none|none|
|DateModified|object|false|none|none|
|PolicyDetails|object|false|none|none|
|Tags|object|false|none|none|
|PolicyArn|object|false|none|none|

<h2 id="tocS_StatusMessage">StatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemastatusmessage"></a>
<a id="schema_StatusMessage"></a>
<a id="tocSstatusmessage"></a>
<a id="tocsstatusmessage"></a>

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

<h2 id="tocS_PolicyArn">PolicyArn</h2>
<!-- backwards compatibility -->
<a id="schemapolicyarn"></a>
<a id="schema_PolicyArn"></a>
<a id="tocSpolicyarn"></a>
<a id="tocspolicyarn"></a>

```json
"string"
```

<h2 id="tocS_LifecyclePolicySummary">LifecyclePolicySummary</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepolicysummary"></a>
<a id="schema_LifecyclePolicySummary"></a>
<a id="tocSlifecyclepolicysummary"></a>
<a id="tocslifecyclepolicysummary"></a>

```json
{
  "PolicyId": {},
  "Description": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "PolicyType": {}
}
```

Summary information about a lifecycle policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|false|none|none|
|Description|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|
|PolicyType|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_NoReboot">NoReboot</h2>
<!-- backwards compatibility -->
<a id="schemanoreboot"></a>
<a id="schema_NoReboot"></a>
<a id="tocSnoreboot"></a>
<a id="tocsnoreboot"></a>

```json
true
```

<h2 id="tocS_ResourceLocationValues">ResourceLocationValues</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelocationvalues"></a>
<a id="schema_ResourceLocationValues"></a>
<a id="tocSresourcelocationvalues"></a>
<a id="tocsresourcelocationvalues"></a>

```json
"CLOUD"
```

<h2 id="tocS_StandardTierRetainRuleCount">StandardTierRetainRuleCount</h2>
<!-- backwards compatibility -->
<a id="schemastandardtierretainrulecount"></a>
<a id="schema_StandardTierRetainRuleCount"></a>
<a id="tocSstandardtierretainrulecount"></a>
<a id="tocsstandardtierretainrulecount"></a>

```json
0
```

<h2 id="tocS_StandardTierRetainRuleInterval">StandardTierRetainRuleInterval</h2>
<!-- backwards compatibility -->
<a id="schemastandardtierretainruleinterval"></a>
<a id="schema_StandardTierRetainRuleInterval"></a>
<a id="tocSstandardtierretainruleinterval"></a>
<a id="tocsstandardtierretainruleinterval"></a>

```json
0
```

<h2 id="tocS_RetainRule">RetainRule</h2>
<!-- backwards compatibility -->
<a id="schemaretainrule"></a>
<a id="schema_RetainRule"></a>
<a id="tocSretainrule"></a>
<a id="tocsretainrule"></a>

```json
{
  "Count": {},
  "Interval": {},
  "IntervalUnit": {}
}
```

<p> <b>[Snapshot and AMI policies only]</b> Specifies a retention rule for snapshots created by snapshot policies, or for AMIs created by AMI policies.</p> <note> <p>For snapshot policies that have an <a>ArchiveRule</a>, this retention rule applies to standard tier retention. When the retention threshold is met, snapshots are moved from the standard to the archive tier.</p> <p>For snapshot policies that do not have an <b>ArchiveRule</b>, snapshots are permanently deleted when this retention threshold is met.</p> </note> <p>You can retain snapshots based on either a count or a time interval.</p> <ul> <li> <p> <b>Count-based retention</b> </p> <p>You must specify <b>Count</b>. If you specify an <a>ArchiveRule</a> for the schedule, then you can specify a retention count of <code>0</code> to archive snapshots immediately after creation. If you specify a <a>FastRestoreRule</a>, <a>ShareRule</a>, or a <a>CrossRegionCopyRule</a>, then you must specify a retention count of <code>1</code> or more.</p> </li> <li> <p> <b>Age-based retention</b> </p> <p>You must specify <b>Interval</b> and <b>IntervalUnit</b>. If you specify an <a>ArchiveRule</a> for the schedule, then you can specify a retention interval of <code>0</code> days to archive snapshots immediately after creation. If you specify a <a>FastRestoreRule</a>, <a>ShareRule</a>, or a <a>CrossRegionCopyRule</a>, then you must specify a retention interval of <code>1</code> day or more.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|object|false|none|none|
|Interval|object|false|none|none|
|IntervalUnit|object|false|none|none|

<h2 id="tocS_ScheduleName">ScheduleName</h2>
<!-- backwards compatibility -->
<a id="schemaschedulename"></a>
<a id="schema_ScheduleName"></a>
<a id="tocSschedulename"></a>
<a id="tocsschedulename"></a>

```json
"string"
```

<h2 id="tocS_TagsToAddList">TagsToAddList</h2>
<!-- backwards compatibility -->
<a id="schematagstoaddlist"></a>
<a id="schema_TagsToAddList"></a>
<a id="tocStagstoaddlist"></a>
<a id="tocstagstoaddlist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_VariableTagsList">VariableTagsList</h2>
<!-- backwards compatibility -->
<a id="schemavariabletagslist"></a>
<a id="schema_VariableTagsList"></a>
<a id="tocSvariabletagslist"></a>
<a id="tocsvariabletagslist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ShareRules">ShareRules</h2>
<!-- backwards compatibility -->
<a id="schemasharerules"></a>
<a id="schema_ShareRules"></a>
<a id="tocSsharerules"></a>
<a id="tocssharerules"></a>

```json
[
  {
    "TargetAccounts": {},
    "UnshareInterval": {},
    "UnshareIntervalUnit": {}
  }
]
```

<h2 id="tocS_Schedule">Schedule</h2>
<!-- backwards compatibility -->
<a id="schemaschedule"></a>
<a id="schema_Schedule"></a>
<a id="tocSschedule"></a>
<a id="tocsschedule"></a>

```json
{
  "Name": {},
  "CopyTags": {},
  "TagsToAdd": {},
  "VariableTags": {},
  "CreateRule": {
    "Location": {},
    "Interval": {},
    "IntervalUnit": {},
    "Times": {},
    "CronExpression": {}
  },
  "RetainRule": {
    "Count": {},
    "Interval": {},
    "IntervalUnit": {}
  },
  "FastRestoreRule": {
    "Count": {},
    "Interval": {},
    "IntervalUnit": {},
    "AvailabilityZones": {}
  },
  "CrossRegionCopyRules": {},
  "ShareRules": {},
  "DeprecateRule": {
    "Count": {},
    "Interval": {},
    "IntervalUnit": {}
  },
  "ArchiveRule": {
    "RetainRule": {
      "RetentionArchiveTier": {
        "Count": {},
        "Interval": {},
        "IntervalUnit": {}
      }
    }
  }
}
```

 <b>[Snapshot and AMI policies only]</b> Specifies a schedule for a snapshot or AMI lifecycle policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|CopyTags|object|false|none|none|
|TagsToAdd|object|false|none|none|
|VariableTags|object|false|none|none|
|CreateRule|object|false|none|none|
|RetainRule|object|false|none|none|
|FastRestoreRule|object|false|none|none|
|CrossRegionCopyRules|object|false|none|none|
|ShareRules|object|false|none|none|
|DeprecateRule|object|false|none|none|
|ArchiveRule|object|false|none|none|

<h2 id="tocS_ShareTargetAccountList">ShareTargetAccountList</h2>
<!-- backwards compatibility -->
<a id="schemasharetargetaccountlist"></a>
<a id="schema_ShareTargetAccountList"></a>
<a id="tocSsharetargetaccountlist"></a>
<a id="tocssharetargetaccountlist"></a>

```json
[
  "stringstring"
]
```

<h2 id="tocS_ShareRule">ShareRule</h2>
<!-- backwards compatibility -->
<a id="schemasharerule"></a>
<a id="schema_ShareRule"></a>
<a id="tocSsharerule"></a>
<a id="tocssharerule"></a>

```json
{
  "TargetAccounts": {},
  "UnshareInterval": {},
  "UnshareIntervalUnit": {}
}
```

 <b>[Snapshot policies only]</b> Specifies a rule for sharing snapshots across Amazon Web Services accounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetAccounts|object|true|none|none|
|UnshareInterval|object|false|none|none|
|UnshareIntervalUnit|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

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
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_Time">Time</h2>
<!-- backwards compatibility -->
<a id="schematime"></a>
<a id="schema_Time"></a>
<a id="tocStime"></a>
<a id="tocstime"></a>

```json
"strin"
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

<h2 id="tocS_UpdateLifecyclePolicyRequest">UpdateLifecyclePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelifecyclepolicyrequest"></a>
<a id="schema_UpdateLifecyclePolicyRequest"></a>
<a id="tocSupdatelifecyclepolicyrequest"></a>
<a id="tocsupdatelifecyclepolicyrequest"></a>

```json
{
  "ExecutionRoleArn": {},
  "State": {},
  "Description": {},
  "PolicyDetails": {
    "PolicyType": {},
    "ResourceTypes": {},
    "ResourceLocations": {},
    "TargetTags": {},
    "Schedules": {},
    "Parameters": {
      "ExcludeBootVolume": {},
      "NoReboot": {},
      "ExcludeDataVolumeTags": {}
    },
    "EventSource": {
      "Type": {},
      "Parameters": {
        "EventType": {},
        "SnapshotOwner": {},
        "DescriptionRegex": {}
      }
    },
    "Actions": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExecutionRoleArn|object|false|none|none|
|State|object|false|none|none|
|Description|object|false|none|none|
|PolicyDetails|object|false|none|none|
