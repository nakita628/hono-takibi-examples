<h1 id="aws-iot-fleet-hub">AWS IoT Fleet Hub v2020-11-03</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>With Fleet Hub for AWS IoT Device Management you can build stand-alone web applications for monitoring the health of your device fleets.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

Base URLs:

* <a href="http://api.fleethub.iot.us-east-1.amazonaws.com">http://api.fleethub.iot.us-east-1.amazonaws.com</a> - The AWS IoT Fleet Hub multi-region endpoint

* <a href="https://api.fleethub.iot.us-east-1.amazonaws.com">https://api.fleethub.iot.us-east-1.amazonaws.com</a> - The AWS IoT Fleet Hub multi-region endpoint

* <a href="http://api.fleethub.iot.cn-north-1.amazonaws.com.cn">http://api.fleethub.iot.cn-north-1.amazonaws.com.cn</a> - The AWS IoT Fleet Hub endpoint for China (Beijing) and China (Ningxia)

* <a href="https://api.fleethub.iot.cn-north-1.amazonaws.com.cn">https://api.fleethub.iot.cn-north-1.amazonaws.com.cn</a> - The AWS IoT Fleet Hub endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/iot/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-iot-fleet-hub-default">Default</h1>

## ListApplications

<a id="opIdListApplications"></a>

> Code samples

```bash
curl https://iotfleethub.us-east-1.amazonaws.com/applications \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /applications`

<p>Gets a list of Fleet Hub for AWS IoT Device Management web applications for the current account.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

<h3 id="listapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|A token used to get the next set of results.|
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
  "applicationSummaries": {},
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

<h3 id="listapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApplicationsResponse](#schemalistapplicationsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApplication

<a id="opIdCreateApplication"></a>

> Code samples

```bash
curl https://iotfleethub.us-east-1.amazonaws.com/applications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "applicationName": "string",
    "applicationDescription": "string",
    "clientToken": "string",
    "roleArn": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /applications`

<p>Creates a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

> Body parameter

```json
{
  "applicationName": "string",
  "applicationDescription": "string",
  "clientToken": "string",
  "roleArn": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createapplication-parameters">Parameters</h3>

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
|» applicationName|body|string|true|The name of the web application.|
|» applicationDescription|body|string|false|An optional description of the web application.|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|
|» roleArn|body|string|true|<p>The ARN of the role that the web application assumes when it interacts with AWS IoT Core.</p> <note> <p>The name of the role must be in the form <code>AWSIotFleetHub_<i>random_string</i> </code>.</p> </note>|
|» tags|body|object|false|A set of key/value pairs that you can use to manage the web application resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 201 Response

```json
{
  "applicationId": {},
  "applicationArn": {}
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

<h3 id="createapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateApplicationResponse](#schemacreateapplicationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeApplication

<a id="opIdDescribeApplication"></a>

> Code samples

```bash
curl https://iotfleethub.us-east-1.amazonaws.com/applications/stringstringstringstringstringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /applications/{applicationId}`

<p>Gets information about a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

<h3 id="describeapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The unique Id of the web application.|
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
  "applicationId": {},
  "applicationArn": {},
  "applicationName": {},
  "applicationDescription": {},
  "applicationUrl": {},
  "applicationState": {},
  "applicationCreationDate": {},
  "applicationLastUpdateDate": {},
  "roleArn": {},
  "ssoClientId": {},
  "errorMessage": {},
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

> 483 Response

```json
null
```

<h3 id="describeapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeApplicationResponse](#schemadescribeapplicationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplication

<a id="opIdDeleteApplication"></a>

> Code samples

```bash
curl https://iotfleethub.us-east-1.amazonaws.com/applications/stringstringstringstringstringstring \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /applications/{applicationId}`

<p>Deletes a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

<h3 id="deleteapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The unique Id of the web application.|
|clientToken|query|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|
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

<h3 id="deleteapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteApplicationResponse](#schemadeleteapplicationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApplication

<a id="opIdUpdateApplication"></a>

> Code samples

```bash
curl https://iotfleethub.us-east-1.amazonaws.com/applications/stringstringstringstringstringstring \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "applicationName": "string",
    "applicationDescription": "string",
    "clientToken": "string"
  }'
```

`PATCH /applications/{applicationId}`

<p>Updates information about a Fleet Hub for a AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

> Body parameter

```json
{
  "applicationName": "string",
  "applicationDescription": "string",
  "clientToken": "string"
}
```

<h3 id="updateapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The unique Id of the web application.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» applicationName|body|string|false|The name of the web application.|
|» applicationDescription|body|string|false|An optional description of the web application.|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|

> Example responses

> 202 Response

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

<h3 id="updateapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[UpdateApplicationResponse](#schemaupdateapplicationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://iotfleethub.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

<p>Lists the tags for the specified resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The ARN of the resource.|
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
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
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
curl https://iotfleethub.us-east-1.amazonaws.com/tags/string \
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

<p>Adds to or modifies the tags of the specified resource. Tags are metadata which can be used to manage a resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

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
|resourceArn|path|string|true|The ARN of the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|The new or modified tags for the resource.|
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
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
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
curl 'https://iotfleethub.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

<p>Removes the specified tags (metadata) from the resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The ARN of the resource.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|A list of the keys of the tags to be removed from the resource.|
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
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateApplicationResponse">CreateApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationresponse"></a>
<a id="schema_CreateApplicationResponse"></a>
<a id="tocScreateapplicationresponse"></a>
<a id="tocscreateapplicationresponse"></a>

```json
{
  "applicationId": {},
  "applicationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationId|object|true|none|none|
|applicationArn|object|true|none|none|

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

<h2 id="tocS_InternalFailureException">InternalFailureException</h2>
<!-- backwards compatibility -->
<a id="schemainternalfailureexception"></a>
<a id="schema_InternalFailureException"></a>
<a id="tocSinternalfailureexception"></a>
<a id="tocsinternalfailureexception"></a>

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

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_DeleteApplicationResponse">DeleteApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationresponse"></a>
<a id="schema_DeleteApplicationResponse"></a>
<a id="tocSdeleteapplicationresponse"></a>
<a id="tocsdeleteapplicationresponse"></a>

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

<h2 id="tocS_DescribeApplicationResponse">DescribeApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationresponse"></a>
<a id="schema_DescribeApplicationResponse"></a>
<a id="tocSdescribeapplicationresponse"></a>
<a id="tocsdescribeapplicationresponse"></a>

```json
{
  "applicationId": {},
  "applicationArn": {},
  "applicationName": {},
  "applicationDescription": {},
  "applicationUrl": {},
  "applicationState": {},
  "applicationCreationDate": {},
  "applicationLastUpdateDate": {},
  "roleArn": {},
  "ssoClientId": {},
  "errorMessage": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationId|object|true|none|none|
|applicationArn|object|true|none|none|
|applicationName|object|true|none|none|
|applicationDescription|object|false|none|none|
|applicationUrl|object|true|none|none|
|applicationState|object|true|none|none|
|applicationCreationDate|object|true|none|none|
|applicationLastUpdateDate|object|true|none|none|
|roleArn|object|true|none|none|
|ssoClientId|object|false|none|none|
|errorMessage|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ListApplicationsResponse">ListApplicationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsresponse"></a>
<a id="schema_ListApplicationsResponse"></a>
<a id="tocSlistapplicationsresponse"></a>
<a id="tocslistapplicationsresponse"></a>

```json
{
  "applicationSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationSummaries|object|false|none|none|
|nextToken|object|false|none|none|

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

<h2 id="tocS_UpdateApplicationResponse">UpdateApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationresponse"></a>
<a id="schema_UpdateApplicationResponse"></a>
<a id="tocSupdateapplicationresponse"></a>
<a id="tocsupdateapplicationresponse"></a>

```json
{}
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

<h2 id="tocS_ApplicationState">ApplicationState</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationstate"></a>
<a id="schema_ApplicationState"></a>
<a id="tocSapplicationstate"></a>
<a id="tocsapplicationstate"></a>

```json
"CREATING"
```

<h2 id="tocS_ApplicationSummary">ApplicationSummary</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsummary"></a>
<a id="schema_ApplicationSummary"></a>
<a id="tocSapplicationsummary"></a>
<a id="tocsapplicationsummary"></a>

```json
{
  "applicationId": {},
  "applicationName": {},
  "applicationDescription": {},
  "applicationUrl": {},
  "applicationCreationDate": {},
  "applicationLastUpdateDate": {},
  "applicationState": {}
}
```

<p>A summary of information about a AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationId|object|true|none|none|
|applicationName|object|true|none|none|
|applicationDescription|object|false|none|none|
|applicationUrl|object|true|none|none|
|applicationCreationDate|object|false|none|none|
|applicationLastUpdateDate|object|false|none|none|
|applicationState|object|false|none|none|

<h2 id="tocS_ApplicationSummaries">ApplicationSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsummaries"></a>
<a id="schema_ApplicationSummaries"></a>
<a id="tocSapplicationsummaries"></a>
<a id="tocsapplicationsummaries"></a>

```json
[
  {
    "applicationId": {},
    "applicationName": {},
    "applicationDescription": {},
    "applicationUrl": {},
    "applicationCreationDate": {},
    "applicationLastUpdateDate": {},
    "applicationState": {}
  }
]
```

<h2 id="tocS_Id">Id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_Id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

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
0
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

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

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

<h2 id="tocS_CreateApplicationRequest">CreateApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationrequest"></a>
<a id="schema_CreateApplicationRequest"></a>
<a id="tocScreateapplicationrequest"></a>
<a id="tocscreateapplicationrequest"></a>

```json
{
  "applicationName": {},
  "applicationDescription": {},
  "clientToken": {},
  "roleArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|true|none|none|
|applicationDescription|object|false|none|none|
|clientToken|object|false|none|none|
|roleArn|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DeleteApplicationRequest">DeleteApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationrequest"></a>
<a id="schema_DeleteApplicationRequest"></a>
<a id="tocSdeleteapplicationrequest"></a>
<a id="tocsdeleteapplicationrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeApplicationRequest">DescribeApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationrequest"></a>
<a id="schema_DescribeApplicationRequest"></a>
<a id="tocSdescribeapplicationrequest"></a>
<a id="tocsdescribeapplicationrequest"></a>

```json
{}
```

<h2 id="tocS_SsoClientId">SsoClientId</h2>
<!-- backwards compatibility -->
<a id="schemassoclientid"></a>
<a id="schema_SsoClientId"></a>
<a id="tocSssoclientid"></a>
<a id="tocsssoclientid"></a>

```json
"string"
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

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_ListApplicationsRequest">ListApplicationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsrequest"></a>
<a id="schema_ListApplicationsRequest"></a>
<a id="tocSlistapplicationsrequest"></a>
<a id="tocslistapplicationsrequest"></a>

```json
{}
```

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

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

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateApplicationRequest">UpdateApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationrequest"></a>
<a id="schema_UpdateApplicationRequest"></a>
<a id="tocSupdateapplicationrequest"></a>
<a id="tocsupdateapplicationrequest"></a>

```json
{
  "applicationName": {},
  "applicationDescription": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationName|object|false|none|none|
|applicationDescription|object|false|none|none|
|clientToken|object|false|none|none|
