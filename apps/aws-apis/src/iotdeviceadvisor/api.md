<h1 id="aws-iot-core-device-advisor">AWS IoT Core Device Advisor v2020-09-18</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon Web Services IoT Core Device Advisor is a cloud-based, fully managed test capability for validating IoT devices during device software development. Device Advisor provides pre-built tests that you can use to validate IoT devices for reliable and secure connectivity with Amazon Web Services IoT Core before deploying devices to production. By using Device Advisor, you can confirm that your devices can connect to Amazon Web Services IoT Core, follow security best practices and, if applicable, receive software updates from IoT Device Management. You can also download signed qualification reports to submit to the Amazon Web Services Partner Network to get your device qualified for the Amazon Web Services Partner Device Catalog without the need to send your device in and wait for it to be tested.

Base URLs:

* <a href="http://api.iotdeviceadvisor.us-east-1.amazonaws.com">http://api.iotdeviceadvisor.us-east-1.amazonaws.com</a> - The AWSIoTDeviceAdvisor multi-region endpoint

* <a href="https://api.iotdeviceadvisor.us-east-1.amazonaws.com">https://api.iotdeviceadvisor.us-east-1.amazonaws.com</a> - The AWSIoTDeviceAdvisor multi-region endpoint

* <a href="http://api.iotdeviceadvisor.cn-north-1.amazonaws.com.cn">http://api.iotdeviceadvisor.cn-north-1.amazonaws.com.cn</a> - The AWSIoTDeviceAdvisor endpoint for China (Beijing) and China (Ningxia)

* <a href="https://api.iotdeviceadvisor.cn-north-1.amazonaws.com.cn">https://api.iotdeviceadvisor.cn-north-1.amazonaws.com.cn</a> - The AWSIoTDeviceAdvisor endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/iotdeviceadvisor/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-iot-core-device-advisor-default">Default</h1>

## ListSuiteDefinitions

<a id="opIdListSuiteDefinitions"></a>

> Code samples

```bash
curl https://iotdeviceadvisor.us-east-1.amazonaws.com/suiteDefinitions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /suiteDefinitions`

<p>Lists the Device Advisor test suites you have created.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteDefinitions</a> action.</p>

<h3 id="listsuitedefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return at once.|
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
  "suiteDefinitionInformationList": {},
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

<h3 id="listsuitedefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSuiteDefinitionsResponse](#schemalistsuitedefinitionsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSuiteDefinition

<a id="opIdCreateSuiteDefinition"></a>

> Code samples

```bash
curl https://iotdeviceadvisor.us-east-1.amazonaws.com/suiteDefinitions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "suiteDefinitionConfiguration": {
      "suiteDefinitionName": {},
      "devices": {},
      "intendedForQualification": {},
      "isLongDurationTest": {},
      "rootGroup": {},
      "devicePermissionRoleArn": {},
      "protocol": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /suiteDefinitions`

<p>Creates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSuiteDefinition</a> action.</p>

> Body parameter

```json
{
  "suiteDefinitionConfiguration": {
    "suiteDefinitionName": {},
    "devices": {},
    "intendedForQualification": {},
    "isLongDurationTest": {},
    "rootGroup": {},
    "devicePermissionRoleArn": {},
    "protocol": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createsuitedefinition-parameters">Parameters</h3>

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
|» suiteDefinitionConfiguration|body|object|true|Gets the suite definition configuration.|
|» » suiteDefinitionName|body|object|false|none|
|» » devices|body|object|false|none|
|» » intendedForQualification|body|object|false|none|
|» » isLongDurationTest|body|object|false|none|
|» » rootGroup|body|object|false|none|
|» » devicePermissionRoleArn|body|object|false|none|
|» » protocol|body|object|false|none|
|» tags|body|object|false|The tags to be attached to the suite definition.|
|» » **additionalProperties**|body|[String256](#schemastring256)|false|none|

> Example responses

> 200 Response

```json
{
  "suiteDefinitionId": {},
  "suiteDefinitionArn": {},
  "suiteDefinitionName": {},
  "createdAt": {}
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

<h3 id="createsuitedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSuiteDefinitionResponse](#schemacreatesuitedefinitionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSuiteDefinition

<a id="opIdGetSuiteDefinition"></a>

> Code samples

```bash
curl https://iotdeviceadvisor.us-east-1.amazonaws.com/suiteDefinitions/stringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /suiteDefinitions/{suiteDefinitionId}`

<p>Gets information about a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteDefinition</a> action.</p>

<h3 id="getsuitedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|suiteDefinitionId|path|string|true|Suite definition ID of the test suite to get.|
|suiteDefinitionVersion|query|string|false|Suite definition version of the test suite to get.|
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
  "suiteDefinitionId": {},
  "suiteDefinitionArn": {},
  "suiteDefinitionVersion": {},
  "latestVersion": {},
  "suiteDefinitionConfiguration": {
    "suiteDefinitionName": {},
    "devices": {},
    "intendedForQualification": {},
    "isLongDurationTest": {},
    "rootGroup": {},
    "devicePermissionRoleArn": {},
    "protocol": {}
  },
  "createdAt": {},
  "lastModifiedAt": {},
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

<h3 id="getsuitedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSuiteDefinitionResponse](#schemagetsuitedefinitionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSuiteDefinition

<a id="opIdDeleteSuiteDefinition"></a>

> Code samples

```bash
curl https://iotdeviceadvisor.us-east-1.amazonaws.com/suiteDefinitions/stringstring \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /suiteDefinitions/{suiteDefinitionId}`

<p>Deletes a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSuiteDefinition</a> action.</p>

<h3 id="deletesuitedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|suiteDefinitionId|path|string|true|Suite definition ID of the test suite to be deleted.|
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

<h3 id="deletesuitedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSuiteDefinitionResponse](#schemadeletesuitedefinitionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSuiteDefinition

<a id="opIdUpdateSuiteDefinition"></a>

> Code samples

```bash
curl https://iotdeviceadvisor.us-east-1.amazonaws.com/suiteDefinitions/stringstring \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "suiteDefinitionConfiguration": {
      "suiteDefinitionName": {},
      "devices": {},
      "intendedForQualification": {},
      "isLongDurationTest": {},
      "rootGroup": {},
      "devicePermissionRoleArn": {},
      "protocol": {}
    }
  }'
```

`PATCH /suiteDefinitions/{suiteDefinitionId}`

<p>Updates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSuiteDefinition</a> action.</p>

> Body parameter

```json
{
  "suiteDefinitionConfiguration": {
    "suiteDefinitionName": {},
    "devices": {},
    "intendedForQualification": {},
    "isLongDurationTest": {},
    "rootGroup": {},
    "devicePermissionRoleArn": {},
    "protocol": {}
  }
}
```

<h3 id="updatesuitedefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|suiteDefinitionId|path|string|true|Suite definition ID of the test suite to be updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» suiteDefinitionConfiguration|body|object|true|Gets the suite definition configuration.|
|» » suiteDefinitionName|body|object|false|none|
|» » devices|body|object|false|none|
|» » intendedForQualification|body|object|false|none|
|» » isLongDurationTest|body|object|false|none|
|» » rootGroup|body|object|false|none|
|» » devicePermissionRoleArn|body|object|false|none|
|» » protocol|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "suiteDefinitionId": {},
  "suiteDefinitionArn": {},
  "suiteDefinitionName": {},
  "suiteDefinitionVersion": {},
  "createdAt": {},
  "lastUpdatedAt": {}
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

<h3 id="updatesuitedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSuiteDefinitionResponse](#schemaupdatesuitedefinitionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEndpoint

<a id="opIdGetEndpoint"></a>

> Code samples

```bash
curl https://iotdeviceadvisor.us-east-1.amazonaws.com/endpoint \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /endpoint`

Gets information about an Device Advisor endpoint.

<h3 id="getendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|thingArn|query|string|false|The thing ARN of the device. This is an optional parameter.|
|certificateArn|query|string|false|The certificate ARN of the device. This is an optional parameter.|
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
  "endpoint": {}
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

<h3 id="getendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEndpointResponse](#schemagetendpointresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSuiteRun

<a id="opIdGetSuiteRun"></a>

> Code samples

```bash
curl https://iotdeviceadvisor.us-east-1.amazonaws.com/suiteDefinitions/stringstring/suiteRuns/stringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}`

<p>Gets information about a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRun</a> action.</p>

<h3 id="getsuiterun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|suiteDefinitionId|path|string|true|Suite definition ID for the test suite run.|
|suiteRunId|path|string|true|Suite run ID for the test suite run.|
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
  "suiteDefinitionId": {},
  "suiteDefinitionVersion": {},
  "suiteRunId": {},
  "suiteRunArn": {},
  "suiteRunConfiguration": {
    "primaryDevice": {
      "thingArn": {},
      "certificateArn": {}
    },
    "selectedTestList": {},
    "parallelRun": {}
  },
  "testResult": {
    "groups": {}
  },
  "startTime": {},
  "endTime": {},
  "status": {},
  "errorReason": {},
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

<h3 id="getsuiterun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSuiteRunResponse](#schemagetsuiterunresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSuiteRunReport

<a id="opIdGetSuiteRunReport"></a>

> Code samples

```bash
curl https://iotdeviceadvisor.us-east-1.amazonaws.com/suiteDefinitions/stringstring/suiteRuns/stringstring/report \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/report`

<p>Gets a report download link for a successful Device Advisor qualifying test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRunReport</a> action.</p>

<h3 id="getsuiterunreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|suiteDefinitionId|path|string|true|Suite definition ID of the test suite.|
|suiteRunId|path|string|true|Suite run ID of the test suite run.|
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
  "qualificationReportDownloadUrl": {}
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

<h3 id="getsuiterunreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSuiteRunReportResponse](#schemagetsuiterunreportresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSuiteRuns

<a id="opIdListSuiteRuns"></a>

> Code samples

```bash
curl https://iotdeviceadvisor.us-east-1.amazonaws.com/suiteRuns \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /suiteRuns`

<p>Lists runs of the specified Device Advisor test suite. You can list all runs of the test suite, or the runs of a specific version of the test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteRuns</a> action.</p>

<h3 id="listsuiteruns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|suiteDefinitionId|query|string|false|Lists the test suite runs of the specified test suite based on suite definition ID.|
|suiteDefinitionVersion|query|string|false|Must be passed along with <code>suiteDefinitionId</code>. Lists the test suite runs of the specified test suite based on suite definition version.|
|maxResults|query|integer|false|The maximum number of results to return at once.|
|nextToken|query|string|false|A token to retrieve the next set of results.|
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
  "suiteRunsList": {},
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

<h3 id="listsuiteruns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSuiteRunsResponse](#schemalistsuiterunsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://iotdeviceadvisor.us-east-1.amazonaws.com/tags/stringstringstringst \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

<p>Lists the tags attached to an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The resource ARN of the IoT Device Advisor resource. This can be SuiteDefinition ARN or SuiteRun ARN.|
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
curl https://iotdeviceadvisor.us-east-1.amazonaws.com/tags/stringstringstringst \
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

<p>Adds to and modifies existing tags of an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>

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
|resourceArn|path|string|true|The resource ARN of an IoT Device Advisor resource. This can be SuiteDefinition ARN or SuiteRun ARN.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|The tags to be attached to the IoT Device Advisor resource.|
|» » **additionalProperties**|body|[String256](#schemastring256)|false|none|

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
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartSuiteRun

<a id="opIdStartSuiteRun"></a>

> Code samples

```bash
curl https://iotdeviceadvisor.us-east-1.amazonaws.com/suiteDefinitions/stringstring/suiteRuns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "suiteDefinitionVersion": "string",
    "suiteRunConfiguration": {
      "primaryDevice": {
        "thingArn": {},
        "certificateArn": {}
      },
      "selectedTestList": {},
      "parallelRun": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /suiteDefinitions/{suiteDefinitionId}/suiteRuns`

<p>Starts a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartSuiteRun</a> action.</p>

> Body parameter

```json
{
  "suiteDefinitionVersion": "string",
  "suiteRunConfiguration": {
    "primaryDevice": {
      "thingArn": {},
      "certificateArn": {}
    },
    "selectedTestList": {},
    "parallelRun": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="startsuiterun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|suiteDefinitionId|path|string|true|Suite definition ID of the test suite.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» suiteDefinitionVersion|body|string|false|Suite definition version of the test suite.|
|» suiteRunConfiguration|body|object|true|Gets suite run configuration.|
|» » primaryDevice|body|object|false|none|
|» » » thingArn|body|object|false|none|
|» » » certificateArn|body|object|false|none|
|» » selectedTestList|body|object|false|none|
|» » parallelRun|body|object|false|none|
|» tags|body|object|false|The tags to be attached to the suite run.|
|» » **additionalProperties**|body|[String256](#schemastring256)|false|none|

> Example responses

> 200 Response

```json
{
  "suiteRunId": {},
  "suiteRunArn": {},
  "createdAt": {},
  "endpoint": {}
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

<h3 id="startsuiterun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartSuiteRunResponse](#schemastartsuiterunresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopSuiteRun

<a id="opIdStopSuiteRun"></a>

> Code samples

```bash
curl https://iotdeviceadvisor.us-east-1.amazonaws.com/suiteDefinitions/stringstring/suiteRuns/stringstring/stop \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/stop`

<p>Stops a Device Advisor test suite run that is currently running.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopSuiteRun</a> action.</p>

<h3 id="stopsuiterun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|suiteDefinitionId|path|string|true|Suite definition ID of the test suite run to be stopped.|
|suiteRunId|path|string|true|Suite run ID of the test suite run to be stopped.|
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

<h3 id="stopsuiterun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopSuiteRunResponse](#schemastopsuiterunresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://iotdeviceadvisor.us-east-1.amazonaws.com/tags/stringstringstringst#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

<p>Removes tags from an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The resource ARN of an IoT Device Advisor resource. This can be SuiteDefinition ARN or SuiteRun ARN.|
|tagKeys|query|[[String128](#schemastring128)]|true|List of tag keys to remove from the IoT Device Advisor resource.|
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
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateSuiteDefinitionResponse">CreateSuiteDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesuitedefinitionresponse"></a>
<a id="schema_CreateSuiteDefinitionResponse"></a>
<a id="tocScreatesuitedefinitionresponse"></a>
<a id="tocscreatesuitedefinitionresponse"></a>

```json
{
  "suiteDefinitionId": {},
  "suiteDefinitionArn": {},
  "suiteDefinitionName": {},
  "createdAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suiteDefinitionId|object|false|none|none|
|suiteDefinitionArn|object|false|none|none|
|suiteDefinitionName|object|false|none|none|
|createdAt|object|false|none|none|

<h2 id="tocS_SuiteDefinitionName">SuiteDefinitionName</h2>
<!-- backwards compatibility -->
<a id="schemasuitedefinitionname"></a>
<a id="schema_SuiteDefinitionName"></a>
<a id="tocSsuitedefinitionname"></a>
<a id="tocssuitedefinitionname"></a>

```json
"string"
```

<h2 id="tocS_DeviceUnderTestList">DeviceUnderTestList</h2>
<!-- backwards compatibility -->
<a id="schemadeviceundertestlist"></a>
<a id="schema_DeviceUnderTestList"></a>
<a id="tocSdeviceundertestlist"></a>
<a id="tocsdeviceundertestlist"></a>

```json
[
  {
    "thingArn": {},
    "certificateArn": {}
  }
]
```

<h2 id="tocS_IntendedForQualificationBoolean">IntendedForQualificationBoolean</h2>
<!-- backwards compatibility -->
<a id="schemaintendedforqualificationboolean"></a>
<a id="schema_IntendedForQualificationBoolean"></a>
<a id="tocSintendedforqualificationboolean"></a>
<a id="tocsintendedforqualificationboolean"></a>

```json
true
```

<h2 id="tocS_IsLongDurationTestBoolean">IsLongDurationTestBoolean</h2>
<!-- backwards compatibility -->
<a id="schemaislongdurationtestboolean"></a>
<a id="schema_IsLongDurationTestBoolean"></a>
<a id="tocSislongdurationtestboolean"></a>
<a id="tocsislongdurationtestboolean"></a>

```json
true
```

<h2 id="tocS_RootGroup">RootGroup</h2>
<!-- backwards compatibility -->
<a id="schemarootgroup"></a>
<a id="schema_RootGroup"></a>
<a id="tocSrootgroup"></a>
<a id="tocsrootgroup"></a>

```json
"string"
```

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_Protocol">Protocol</h2>
<!-- backwards compatibility -->
<a id="schemaprotocol"></a>
<a id="schema_Protocol"></a>
<a id="tocSprotocol"></a>
<a id="tocsprotocol"></a>

```json
"MqttV3_1_1"
```

<h2 id="tocS_String256">String256</h2>
<!-- backwards compatibility -->
<a id="schemastring256"></a>
<a id="schema_String256"></a>
<a id="tocSstring256"></a>
<a id="tocsstring256"></a>

```json
"string"
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

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_DeleteSuiteDefinitionResponse">DeleteSuiteDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesuitedefinitionresponse"></a>
<a id="schema_DeleteSuiteDefinitionResponse"></a>
<a id="tocSdeletesuitedefinitionresponse"></a>
<a id="tocsdeletesuitedefinitionresponse"></a>

```json
{}
```

<h2 id="tocS_GetEndpointResponse">GetEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetendpointresponse"></a>
<a id="schema_GetEndpointResponse"></a>
<a id="tocSgetendpointresponse"></a>
<a id="tocsgetendpointresponse"></a>

```json
{
  "endpoint": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_GetSuiteDefinitionResponse">GetSuiteDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsuitedefinitionresponse"></a>
<a id="schema_GetSuiteDefinitionResponse"></a>
<a id="tocSgetsuitedefinitionresponse"></a>
<a id="tocsgetsuitedefinitionresponse"></a>

```json
{
  "suiteDefinitionId": {},
  "suiteDefinitionArn": {},
  "suiteDefinitionVersion": {},
  "latestVersion": {},
  "suiteDefinitionConfiguration": {
    "suiteDefinitionName": {},
    "devices": {},
    "intendedForQualification": {},
    "isLongDurationTest": {},
    "rootGroup": {},
    "devicePermissionRoleArn": {},
    "protocol": {}
  },
  "createdAt": {},
  "lastModifiedAt": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suiteDefinitionId|object|false|none|none|
|suiteDefinitionArn|object|false|none|none|
|suiteDefinitionVersion|object|false|none|none|
|latestVersion|object|false|none|none|
|suiteDefinitionConfiguration|object|false|none|none|
|createdAt|object|false|none|none|
|lastModifiedAt|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetSuiteRunResponse">GetSuiteRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsuiterunresponse"></a>
<a id="schema_GetSuiteRunResponse"></a>
<a id="tocSgetsuiterunresponse"></a>
<a id="tocsgetsuiterunresponse"></a>

```json
{
  "suiteDefinitionId": {},
  "suiteDefinitionVersion": {},
  "suiteRunId": {},
  "suiteRunArn": {},
  "suiteRunConfiguration": {
    "primaryDevice": {
      "thingArn": {},
      "certificateArn": {}
    },
    "selectedTestList": {},
    "parallelRun": {}
  },
  "testResult": {
    "groups": {}
  },
  "startTime": {},
  "endTime": {},
  "status": {},
  "errorReason": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suiteDefinitionId|object|false|none|none|
|suiteDefinitionVersion|object|false|none|none|
|suiteRunId|object|false|none|none|
|suiteRunArn|object|false|none|none|
|suiteRunConfiguration|object|false|none|none|
|testResult|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
|status|object|false|none|none|
|errorReason|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetSuiteRunReportResponse">GetSuiteRunReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsuiterunreportresponse"></a>
<a id="schema_GetSuiteRunReportResponse"></a>
<a id="tocSgetsuiterunreportresponse"></a>
<a id="tocsgetsuiterunreportresponse"></a>

```json
{
  "qualificationReportDownloadUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|qualificationReportDownloadUrl|object|false|none|none|

<h2 id="tocS_ListSuiteDefinitionsResponse">ListSuiteDefinitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsuitedefinitionsresponse"></a>
<a id="schema_ListSuiteDefinitionsResponse"></a>
<a id="tocSlistsuitedefinitionsresponse"></a>
<a id="tocslistsuitedefinitionsresponse"></a>

```json
{
  "suiteDefinitionInformationList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suiteDefinitionInformationList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListSuiteRunsResponse">ListSuiteRunsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsuiterunsresponse"></a>
<a id="schema_ListSuiteRunsResponse"></a>
<a id="tocSlistsuiterunsresponse"></a>
<a id="tocslistsuiterunsresponse"></a>

```json
{
  "suiteRunsList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suiteRunsList|object|false|none|none|
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

<h2 id="tocS_StartSuiteRunResponse">StartSuiteRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartsuiterunresponse"></a>
<a id="schema_StartSuiteRunResponse"></a>
<a id="tocSstartsuiterunresponse"></a>
<a id="tocsstartsuiterunresponse"></a>

```json
{
  "suiteRunId": {},
  "suiteRunArn": {},
  "createdAt": {},
  "endpoint": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suiteRunId|object|false|none|none|
|suiteRunArn|object|false|none|none|
|createdAt|object|false|none|none|
|endpoint|object|false|none|none|

<h2 id="tocS_DeviceUnderTest">DeviceUnderTest</h2>
<!-- backwards compatibility -->
<a id="schemadeviceundertest"></a>
<a id="schema_DeviceUnderTest"></a>
<a id="tocSdeviceundertest"></a>
<a id="tocsdeviceundertest"></a>

```json
{
  "thingArn": {},
  "certificateArn": {}
}
```

Information of a test device. A thing ARN or a certificate ARN is required.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thingArn|object|false|none|none|
|certificateArn|object|false|none|none|

<h2 id="tocS_SelectedTestList">SelectedTestList</h2>
<!-- backwards compatibility -->
<a id="schemaselectedtestlist"></a>
<a id="schema_SelectedTestList"></a>
<a id="tocSselectedtestlist"></a>
<a id="tocsselectedtestlist"></a>

```json
[
  "stringstring"
]
```

<h2 id="tocS_ParallelRun">ParallelRun</h2>
<!-- backwards compatibility -->
<a id="schemaparallelrun"></a>
<a id="schema_ParallelRun"></a>
<a id="tocSparallelrun"></a>
<a id="tocsparallelrun"></a>

```json
true
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

<h2 id="tocS_StopSuiteRunResponse">StopSuiteRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopsuiterunresponse"></a>
<a id="schema_StopSuiteRunResponse"></a>
<a id="tocSstopsuiterunresponse"></a>
<a id="tocsstopsuiterunresponse"></a>

```json
{}
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

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_String128">String128</h2>
<!-- backwards compatibility -->
<a id="schemastring128"></a>
<a id="schema_String128"></a>
<a id="tocSstring128"></a>
<a id="tocsstring128"></a>

```json
"string"
```

<h2 id="tocS_UpdateSuiteDefinitionResponse">UpdateSuiteDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesuitedefinitionresponse"></a>
<a id="schema_UpdateSuiteDefinitionResponse"></a>
<a id="tocSupdatesuitedefinitionresponse"></a>
<a id="tocsupdatesuitedefinitionresponse"></a>

```json
{
  "suiteDefinitionId": {},
  "suiteDefinitionArn": {},
  "suiteDefinitionName": {},
  "suiteDefinitionVersion": {},
  "createdAt": {},
  "lastUpdatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suiteDefinitionId|object|false|none|none|
|suiteDefinitionArn|object|false|none|none|
|suiteDefinitionName|object|false|none|none|
|suiteDefinitionVersion|object|false|none|none|
|createdAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|

<h2 id="tocS_SuiteDefinitionConfiguration">SuiteDefinitionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasuitedefinitionconfiguration"></a>
<a id="schema_SuiteDefinitionConfiguration"></a>
<a id="tocSsuitedefinitionconfiguration"></a>
<a id="tocssuitedefinitionconfiguration"></a>

```json
{
  "suiteDefinitionName": {},
  "devices": {},
  "intendedForQualification": {},
  "isLongDurationTest": {},
  "rootGroup": {},
  "devicePermissionRoleArn": {},
  "protocol": {}
}
```

Gets the suite definition configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suiteDefinitionName|object|true|none|none|
|devices|object|false|none|none|
|intendedForQualification|object|false|none|none|
|isLongDurationTest|object|false|none|none|
|rootGroup|object|true|none|none|
|devicePermissionRoleArn|object|true|none|none|
|protocol|object|false|none|none|

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
|**additionalProperties**|[String256](#schemastring256)|false|none|none|

<h2 id="tocS_CreateSuiteDefinitionRequest">CreateSuiteDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesuitedefinitionrequest"></a>
<a id="schema_CreateSuiteDefinitionRequest"></a>
<a id="tocScreatesuitedefinitionrequest"></a>
<a id="tocscreatesuitedefinitionrequest"></a>

```json
{
  "suiteDefinitionConfiguration": {
    "suiteDefinitionName": {},
    "devices": {},
    "intendedForQualification": {},
    "isLongDurationTest": {},
    "rootGroup": {},
    "devicePermissionRoleArn": {},
    "protocol": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suiteDefinitionConfiguration|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"stringstring"
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

<h2 id="tocS_DeleteSuiteDefinitionRequest">DeleteSuiteDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesuitedefinitionrequest"></a>
<a id="schema_DeleteSuiteDefinitionRequest"></a>
<a id="tocSdeletesuitedefinitionrequest"></a>
<a id="tocsdeletesuitedefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
"stringstringstringstringstringstringstringstr"
```

<h2 id="tocS_ErrorReason">ErrorReason</h2>
<!-- backwards compatibility -->
<a id="schemaerrorreason"></a>
<a id="schema_ErrorReason"></a>
<a id="tocSerrorreason"></a>
<a id="tocserrorreason"></a>

```json
"string"
```

<h2 id="tocS_Failure">Failure</h2>
<!-- backwards compatibility -->
<a id="schemafailure"></a>
<a id="schema_Failure"></a>
<a id="tocSfailure"></a>
<a id="tocsfailure"></a>

```json
"string"
```

<h2 id="tocS_GetEndpointRequest">GetEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetendpointrequest"></a>
<a id="schema_GetEndpointRequest"></a>
<a id="tocSgetendpointrequest"></a>
<a id="tocsgetendpointrequest"></a>

```json
{}
```

<h2 id="tocS_SuiteDefinitionVersion">SuiteDefinitionVersion</h2>
<!-- backwards compatibility -->
<a id="schemasuitedefinitionversion"></a>
<a id="schema_SuiteDefinitionVersion"></a>
<a id="tocSsuitedefinitionversion"></a>
<a id="tocssuitedefinitionversion"></a>

```json
"string"
```

<h2 id="tocS_GetSuiteDefinitionRequest">GetSuiteDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsuitedefinitionrequest"></a>
<a id="schema_GetSuiteDefinitionRequest"></a>
<a id="tocSgetsuitedefinitionrequest"></a>
<a id="tocsgetsuitedefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_GetSuiteRunReportRequest">GetSuiteRunReportRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsuiterunreportrequest"></a>
<a id="schema_GetSuiteRunReportRequest"></a>
<a id="tocSgetsuiterunreportrequest"></a>
<a id="tocsgetsuiterunreportrequest"></a>

```json
{}
```

<h2 id="tocS_QualificationReportDownloadUrl">QualificationReportDownloadUrl</h2>
<!-- backwards compatibility -->
<a id="schemaqualificationreportdownloadurl"></a>
<a id="schema_QualificationReportDownloadUrl"></a>
<a id="tocSqualificationreportdownloadurl"></a>
<a id="tocsqualificationreportdownloadurl"></a>

```json
"string"
```

<h2 id="tocS_GetSuiteRunRequest">GetSuiteRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsuiterunrequest"></a>
<a id="schema_GetSuiteRunRequest"></a>
<a id="tocSgetsuiterunrequest"></a>
<a id="tocsgetsuiterunrequest"></a>

```json
{}
```

<h2 id="tocS_SuiteRunConfiguration">SuiteRunConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasuiterunconfiguration"></a>
<a id="schema_SuiteRunConfiguration"></a>
<a id="tocSsuiterunconfiguration"></a>
<a id="tocssuiterunconfiguration"></a>

```json
{
  "primaryDevice": {
    "thingArn": {},
    "certificateArn": {}
  },
  "selectedTestList": {},
  "parallelRun": {}
}
```

Gets suite run configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primaryDevice|object|true|none|none|
|selectedTestList|object|false|none|none|
|parallelRun|object|false|none|none|

<h2 id="tocS_TestResult">TestResult</h2>
<!-- backwards compatibility -->
<a id="schematestresult"></a>
<a id="schema_TestResult"></a>
<a id="tocStestresult"></a>
<a id="tocstestresult"></a>

```json
{
  "groups": {}
}
```

Show each group result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|object|false|none|none|

<h2 id="tocS_SuiteRunStatus">SuiteRunStatus</h2>
<!-- backwards compatibility -->
<a id="schemasuiterunstatus"></a>
<a id="schema_SuiteRunStatus"></a>
<a id="tocSsuiterunstatus"></a>
<a id="tocssuiterunstatus"></a>

```json
"PASS"
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

<h2 id="tocS_TestCaseRuns">TestCaseRuns</h2>
<!-- backwards compatibility -->
<a id="schematestcaseruns"></a>
<a id="schema_TestCaseRuns"></a>
<a id="tocStestcaseruns"></a>
<a id="tocstestcaseruns"></a>

```json
[
  {
    "testCaseRunId": {},
    "testCaseDefinitionId": {},
    "testCaseDefinitionName": {},
    "status": {},
    "startTime": {},
    "endTime": {},
    "logUrl": {},
    "warnings": {},
    "failure": {},
    "testScenarios": {}
  }
]
```

Tests under each group result.

<h2 id="tocS_GroupResult">GroupResult</h2>
<!-- backwards compatibility -->
<a id="schemagroupresult"></a>
<a id="schema_GroupResult"></a>
<a id="tocSgroupresult"></a>
<a id="tocsgroupresult"></a>

```json
{
  "groupId": {},
  "groupName": {},
  "tests": {}
}
```

Show Group Result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupId|object|false|none|none|
|groupName|object|false|none|none|
|tests|object|false|none|none|

<h2 id="tocS_GroupResultList">GroupResultList</h2>
<!-- backwards compatibility -->
<a id="schemagroupresultlist"></a>
<a id="schema_GroupResultList"></a>
<a id="tocSgroupresultlist"></a>
<a id="tocsgroupresultlist"></a>

```json
[
  {
    "groupId": {},
    "groupName": {},
    "tests": {}
  }
]
```

Group Result list.

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
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

<h2 id="tocS_ListSuiteDefinitionsRequest">ListSuiteDefinitionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsuitedefinitionsrequest"></a>
<a id="schema_ListSuiteDefinitionsRequest"></a>
<a id="tocSlistsuitedefinitionsrequest"></a>
<a id="tocslistsuitedefinitionsrequest"></a>

```json
{}
```

<h2 id="tocS_SuiteDefinitionInformationList">SuiteDefinitionInformationList</h2>
<!-- backwards compatibility -->
<a id="schemasuitedefinitioninformationlist"></a>
<a id="schema_SuiteDefinitionInformationList"></a>
<a id="tocSsuitedefinitioninformationlist"></a>
<a id="tocssuitedefinitioninformationlist"></a>

```json
[
  {
    "suiteDefinitionId": {},
    "suiteDefinitionName": {},
    "defaultDevices": {},
    "intendedForQualification": {},
    "isLongDurationTest": {},
    "protocol": {},
    "createdAt": {}
  }
]
```

<h2 id="tocS_ListSuiteRunsRequest">ListSuiteRunsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsuiterunsrequest"></a>
<a id="schema_ListSuiteRunsRequest"></a>
<a id="tocSlistsuiterunsrequest"></a>
<a id="tocslistsuiterunsrequest"></a>

```json
{}
```

<h2 id="tocS_SuiteRunsList">SuiteRunsList</h2>
<!-- backwards compatibility -->
<a id="schemasuiterunslist"></a>
<a id="schema_SuiteRunsList"></a>
<a id="tocSsuiterunslist"></a>
<a id="tocssuiterunslist"></a>

```json
[
  {
    "suiteDefinitionId": {},
    "suiteDefinitionVersion": {},
    "suiteDefinitionName": {},
    "suiteRunId": {},
    "createdAt": {},
    "startedAt": {},
    "endAt": {},
    "status": {},
    "passed": {},
    "failed": {}
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
{}
```

<h2 id="tocS_LogUrl">LogUrl</h2>
<!-- backwards compatibility -->
<a id="schemalogurl"></a>
<a id="schema_LogUrl"></a>
<a id="tocSlogurl"></a>
<a id="tocslogurl"></a>

```json
"string"
```

<h2 id="tocS_StartSuiteRunRequest">StartSuiteRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartsuiterunrequest"></a>
<a id="schema_StartSuiteRunRequest"></a>
<a id="tocSstartsuiterunrequest"></a>
<a id="tocsstartsuiterunrequest"></a>

```json
{
  "suiteDefinitionVersion": {},
  "suiteRunConfiguration": {
    "primaryDevice": {
      "thingArn": {},
      "certificateArn": {}
    },
    "selectedTestList": {},
    "parallelRun": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suiteDefinitionVersion|object|false|none|none|
|suiteRunConfiguration|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"PASS"
```

<h2 id="tocS_StopSuiteRunRequest">StopSuiteRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopsuiterunrequest"></a>
<a id="schema_StopSuiteRunRequest"></a>
<a id="tocSstopsuiterunrequest"></a>
<a id="tocsstopsuiterunrequest"></a>

```json
{}
```

<h2 id="tocS_SuiteDefinitionInformation">SuiteDefinitionInformation</h2>
<!-- backwards compatibility -->
<a id="schemasuitedefinitioninformation"></a>
<a id="schema_SuiteDefinitionInformation"></a>
<a id="tocSsuitedefinitioninformation"></a>
<a id="tocssuitedefinitioninformation"></a>

```json
{
  "suiteDefinitionId": {},
  "suiteDefinitionName": {},
  "defaultDevices": {},
  "intendedForQualification": {},
  "isLongDurationTest": {},
  "protocol": {},
  "createdAt": {}
}
```

Information about the suite definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suiteDefinitionId|object|false|none|none|
|suiteDefinitionName|object|false|none|none|
|defaultDevices|object|false|none|none|
|intendedForQualification|object|false|none|none|
|isLongDurationTest|object|false|none|none|
|protocol|object|false|none|none|
|createdAt|object|false|none|none|

<h2 id="tocS_SuiteRunResultCount">SuiteRunResultCount</h2>
<!-- backwards compatibility -->
<a id="schemasuiterunresultcount"></a>
<a id="schema_SuiteRunResultCount"></a>
<a id="tocSsuiterunresultcount"></a>
<a id="tocssuiterunresultcount"></a>

```json
0
```

<h2 id="tocS_SuiteRunInformation">SuiteRunInformation</h2>
<!-- backwards compatibility -->
<a id="schemasuiteruninformation"></a>
<a id="schema_SuiteRunInformation"></a>
<a id="tocSsuiteruninformation"></a>
<a id="tocssuiteruninformation"></a>

```json
{
  "suiteDefinitionId": {},
  "suiteDefinitionVersion": {},
  "suiteDefinitionName": {},
  "suiteRunId": {},
  "createdAt": {},
  "startedAt": {},
  "endAt": {},
  "status": {},
  "passed": {},
  "failed": {}
}
```

<p>Information about the suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SuiteRunInformation</a> action.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suiteDefinitionId|object|false|none|none|
|suiteDefinitionVersion|object|false|none|none|
|suiteDefinitionName|object|false|none|none|
|suiteRunId|object|false|none|none|
|createdAt|object|false|none|none|
|startedAt|object|false|none|none|
|endAt|object|false|none|none|
|status|object|false|none|none|
|passed|object|false|none|none|
|failed|object|false|none|none|

<h2 id="tocS_SystemMessage">SystemMessage</h2>
<!-- backwards compatibility -->
<a id="schemasystemmessage"></a>
<a id="schema_SystemMessage"></a>
<a id="tocSsystemmessage"></a>
<a id="tocssystemmessage"></a>

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

<h2 id="tocS_TestCaseDefinitionName">TestCaseDefinitionName</h2>
<!-- backwards compatibility -->
<a id="schematestcasedefinitionname"></a>
<a id="schema_TestCaseDefinitionName"></a>
<a id="tocStestcasedefinitionname"></a>
<a id="tocstestcasedefinitionname"></a>

```json
"string"
```

<h2 id="tocS_Warnings">Warnings</h2>
<!-- backwards compatibility -->
<a id="schemawarnings"></a>
<a id="schema_Warnings"></a>
<a id="tocSwarnings"></a>
<a id="tocswarnings"></a>

```json
"string"
```

<h2 id="tocS_TestCaseScenariosList">TestCaseScenariosList</h2>
<!-- backwards compatibility -->
<a id="schematestcasescenarioslist"></a>
<a id="schema_TestCaseScenariosList"></a>
<a id="tocStestcasescenarioslist"></a>
<a id="tocstestcasescenarioslist"></a>

```json
[
  {
    "testCaseScenarioId": {},
    "testCaseScenarioType": {},
    "status": {},
    "failure": {},
    "systemMessage": {}
  }
]
```

<h2 id="tocS_TestCaseRun">TestCaseRun</h2>
<!-- backwards compatibility -->
<a id="schematestcaserun"></a>
<a id="schema_TestCaseRun"></a>
<a id="tocStestcaserun"></a>
<a id="tocstestcaserun"></a>

```json
{
  "testCaseRunId": {},
  "testCaseDefinitionId": {},
  "testCaseDefinitionName": {},
  "status": {},
  "startTime": {},
  "endTime": {},
  "logUrl": {},
  "warnings": {},
  "failure": {},
  "testScenarios": {}
}
```

Provides the test case run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testCaseRunId|object|false|none|none|
|testCaseDefinitionId|object|false|none|none|
|testCaseDefinitionName|object|false|none|none|
|status|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
|logUrl|object|false|none|none|
|warnings|object|false|none|none|
|failure|object|false|none|none|
|testScenarios|object|false|none|none|

<h2 id="tocS_TestCaseScenarioId">TestCaseScenarioId</h2>
<!-- backwards compatibility -->
<a id="schematestcasescenarioid"></a>
<a id="schema_TestCaseScenarioId"></a>
<a id="tocStestcasescenarioid"></a>
<a id="tocstestcasescenarioid"></a>

```json
"string"
```

<h2 id="tocS_TestCaseScenarioType">TestCaseScenarioType</h2>
<!-- backwards compatibility -->
<a id="schematestcasescenariotype"></a>
<a id="schema_TestCaseScenarioType"></a>
<a id="tocStestcasescenariotype"></a>
<a id="tocstestcasescenariotype"></a>

```json
"Advanced"
```

<h2 id="tocS_TestCaseScenarioStatus">TestCaseScenarioStatus</h2>
<!-- backwards compatibility -->
<a id="schematestcasescenariostatus"></a>
<a id="schema_TestCaseScenarioStatus"></a>
<a id="tocStestcasescenariostatus"></a>
<a id="tocstestcasescenariostatus"></a>

```json
"PASS"
```

<h2 id="tocS_TestCaseScenario">TestCaseScenario</h2>
<!-- backwards compatibility -->
<a id="schematestcasescenario"></a>
<a id="schema_TestCaseScenario"></a>
<a id="tocStestcasescenario"></a>
<a id="tocstestcasescenario"></a>

```json
{
  "testCaseScenarioId": {},
  "testCaseScenarioType": {},
  "status": {},
  "failure": {},
  "systemMessage": {}
}
```

Provides test case scenario.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testCaseScenarioId|object|false|none|none|
|testCaseScenarioType|object|false|none|none|
|status|object|false|none|none|
|failure|object|false|none|none|
|systemMessage|object|false|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateSuiteDefinitionRequest">UpdateSuiteDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesuitedefinitionrequest"></a>
<a id="schema_UpdateSuiteDefinitionRequest"></a>
<a id="tocSupdatesuitedefinitionrequest"></a>
<a id="tocsupdatesuitedefinitionrequest"></a>

```json
{
  "suiteDefinitionConfiguration": {
    "suiteDefinitionName": {},
    "devices": {},
    "intendedForQualification": {},
    "isLongDurationTest": {},
    "rootGroup": {},
    "devicePermissionRoleArn": {},
    "protocol": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suiteDefinitionConfiguration|object|true|none|none|
