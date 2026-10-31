<h1 id="aws-iot-1-click-devices-service">AWS IoT 1-Click Devices Service v2018-05-14</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Describes all of the AWS IoT 1-Click device-related API operations for the service.
 Also provides sample requests, responses, and errors for the supported web services
 protocols.

Base URLs:

* <a href="http://devices.iot1click.us-east-1.amazonaws.com">http://devices.iot1click.us-east-1.amazonaws.com</a> - The AWS IoT 1-Click Devices Service multi-region endpoint

* <a href="https://devices.iot1click.us-east-1.amazonaws.com">https://devices.iot1click.us-east-1.amazonaws.com</a> - The AWS IoT 1-Click Devices Service multi-region endpoint

* <a href="http://devices.iot1click.cn-north-1.amazonaws.com.cn">http://devices.iot1click.cn-north-1.amazonaws.com.cn</a> - The AWS IoT 1-Click Devices Service endpoint for China (Beijing) and China (Ningxia)

* <a href="https://devices.iot1click.cn-north-1.amazonaws.com.cn">https://devices.iot1click.cn-north-1.amazonaws.com.cn</a> - The AWS IoT 1-Click Devices Service endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/iot1click/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-iot-1-click-devices-service-default">Default</h1>

## ClaimDevicesByClaimCode

<a id="opIdClaimDevicesByClaimCode"></a>

> Code samples

```bash
curl https://iot1click-devices.us-east-1.amazonaws.com/claims/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /claims/{claimCode}`

Adds device(s) to your account (i.e., claim one or more devices) if and only if you
 received a claim code with the device(s).

<h3 id="claimdevicesbyclaimcode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|claimCode|path|string|true|The claim code, starting with "C-", as provided by the device manufacturer.|
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
  "ClaimCode": {},
  "Total": {}
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

<h3 id="claimdevicesbyclaimcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ClaimDevicesByClaimCodeResponse](#schemaclaimdevicesbyclaimcoderesponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDevice

<a id="opIdDescribeDevice"></a>

> Code samples

```bash
curl https://iot1click-devices.us-east-1.amazonaws.com/devices/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /devices/{deviceId}`

Given a device ID, returns a DescribeDeviceResponse object describing the
 details of the device.

<h3 id="describedevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|The unique identifier of the device.|
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
  "DeviceDescription": {
    "Arn": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "DeviceId": {},
    "Enabled": {},
    "RemainingLife": {},
    "Type": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="describedevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDeviceResponse](#schemadescribedeviceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## FinalizeDeviceClaim

<a id="opIdFinalizeDeviceClaim"></a>

> Code samples

```bash
curl https://iot1click-devices.us-east-1.amazonaws.com/devices/string/finalize-claim \
  -X PUT \
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

`PUT /devices/{deviceId}/finalize-claim`

<p>Given a device ID, finalizes the claim request for the associated device.</p><note>
 <p>Claiming a device consists of initiating a claim, then publishing a device event,
 and finalizing the claim. For a device of type button, a device event can
 be published by simply clicking the device.</p>
 </note>

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="finalizedeviceclaim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|The unique identifier of the device.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|false|<p>A collection of key/value pairs defining the resource tags. For example, {<br> "tags": {"key1": "value1", "key2": "value2"} }. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS<br> Tagging Strategies</a>.</p><p><br> <br> </p>|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "State": {}
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

<h3 id="finalizedeviceclaim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FinalizeDeviceClaimResponse](#schemafinalizedeviceclaimresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|PreconditionFailedException|[PreconditionFailedException](#schemapreconditionfailedexception)|
|484|484|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeviceMethods

<a id="opIdGetDeviceMethods"></a>

> Code samples

```bash
curl https://iot1click-devices.us-east-1.amazonaws.com/devices/string/methods \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /devices/{deviceId}/methods`

Given a device ID, returns the invokable methods associated with the device.

<h3 id="getdevicemethods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|The unique identifier of the device.|
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
  "DeviceMethods": {}
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

<h3 id="getdevicemethods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeviceMethodsResponse](#schemagetdevicemethodsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InvokeDeviceMethod

<a id="opIdInvokeDeviceMethod"></a>

> Code samples

```bash
curl https://iot1click-devices.us-east-1.amazonaws.com/devices/string/methods \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "deviceMethod": {
      "DeviceType": {},
      "MethodName": {}
    },
    "deviceMethodParameters": "string"
  }'
```

`POST /devices/{deviceId}/methods`

Given a device ID, issues a request to invoke a named device method (with possible
 parameters). See the "Example POST" code snippet below.

> Body parameter

```json
{
  "deviceMethod": {
    "DeviceType": {},
    "MethodName": {}
  },
  "deviceMethodParameters": "string"
}
```

<h3 id="invokedevicemethod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|The unique identifier of the device.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» deviceMethod|body|object|false|The device method to invoke.|
|» » DeviceType|body|object|false|none|
|» » MethodName|body|object|false|none|
|» deviceMethodParameters|body|string|false|A JSON encoded string containing the device method request parameters.|

> Example responses

> 200 Response

```json
{
  "DeviceMethodResponse": {}
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

<h3 id="invokedevicemethod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InvokeDeviceMethodResponse](#schemainvokedevicemethodresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|PreconditionFailedException|[PreconditionFailedException](#schemapreconditionfailedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|RangeNotSatisfiableException|[RangeNotSatisfiableException](#schemarangenotsatisfiableexception)|
|485|485|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InitiateDeviceClaim

<a id="opIdInitiateDeviceClaim"></a>

> Code samples

```bash
curl https://iot1click-devices.us-east-1.amazonaws.com/devices/string/initiate-claim \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /devices/{deviceId}/initiate-claim`

<p>Given a device ID, initiates a claim request for the associated device.</p><note>
 <p>Claiming a device consists of initiating a claim, then publishing a device event,
 and finalizing the claim. For a device of type button, a device event can
 be published by simply clicking the device.</p>
 </note>

<h3 id="initiatedeviceclaim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|The unique identifier of the device.|
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
  "State": {}
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

<h3 id="initiatedeviceclaim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InitiateDeviceClaimResponse](#schemainitiatedeviceclaimresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDeviceEvents

<a id="opIdListDeviceEvents"></a>

> Code samples

```bash
curl 'https://iot1click-devices.us-east-1.amazonaws.com/devices/string/events#fromTimeStamp&toTimeStamp?fromTimeStamp=1970-01-01T00%3A00%3A00Z&toTimeStamp=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /devices/{deviceId}/events#fromTimeStamp&toTimeStamp`

Using a device ID, returns a DeviceEventsResponse object containing an
 array of events for the device.

<h3 id="listdeviceevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|The unique identifier of the device.|
|fromTimeStamp|query|string(date-time)|true|The start date for the device event query, in ISO8061 format. For example,<br> 2018-03-28T15:45:12.880Z<br> |
|maxResults|query|integer|false|The maximum number of results to return per request. If not set, a default value of<br> 100 is used.|
|nextToken|query|string|false|The token to retrieve the next set of results.|
|toTimeStamp|query|string(date-time)|true|The end date for the device event query, in ISO8061 format. For example,<br> 2018-03-28T15:45:12.880Z<br> |
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

<h3 id="listdeviceevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDeviceEventsResponse](#schemalistdeviceeventsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|RangeNotSatisfiableException|[RangeNotSatisfiableException](#schemarangenotsatisfiableexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDevices

<a id="opIdListDevices"></a>

> Code samples

```bash
curl https://iot1click-devices.us-east-1.amazonaws.com/devices \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /devices`

Lists the 1-Click compatible devices associated with your AWS account.

<h3 id="listdevices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceType|query|string|false|The type of the device, such as "button".|
|maxResults|query|integer|false|The maximum number of results to return per request. If not set, a default value of<br> 100 is used.|
|nextToken|query|string|false|The token to retrieve the next set of results.|
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
  "Devices": {},
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

<h3 id="listdevices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDevicesResponse](#schemalistdevicesresponse)|
|480|480|RangeNotSatisfiableException|[RangeNotSatisfiableException](#schemarangenotsatisfiableexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://iot1click-devices.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resource-arn}`

Lists the tags associated with the specified resource ARN.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|The ARN of the resource.|
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://iot1click-devices.us-east-1.amazonaws.com/tags/string \
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

`POST /tags/{resource-arn}`

Adds or updates the tags associated with the resource ARN. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
 resource.

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
|resource-arn|path|string|true|The ARN of the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|<p>A collection of key/value pairs defining the resource tags. For example, {<br> "tags": {"key1": "value1", "key2": "value2"} }. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS<br> Tagging Strategies</a>.</p><p><br> <br> </p>|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UnclaimDevice

<a id="opIdUnclaimDevice"></a>

> Code samples

```bash
curl https://iot1click-devices.us-east-1.amazonaws.com/devices/string/unclaim \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /devices/{deviceId}/unclaim`

Disassociates a device from your AWS account using its device ID.

<h3 id="unclaimdevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|The unique identifier of the device.|
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
  "State": {}
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

<h3 id="unclaimdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UnclaimDeviceResponse](#schemaunclaimdeviceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://iot1click-devices.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resource-arn}#tagKeys`

Using tag keys, deletes the tags (key/value pairs) associated with the specified
 resource ARN.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|The ARN of the resource.|
|tagKeys|query|[[__string](#schema__string)]|true|A collections of tag keys. For example, {"key1","key2"}|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDeviceState

<a id="opIdUpdateDeviceState"></a>

> Code samples

```bash
curl https://iot1click-devices.us-east-1.amazonaws.com/devices/string/state \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enabled": true
  }'
```

`PUT /devices/{deviceId}/state`

Using a Boolean value (true or false), this operation
 enables or disables the device given a device ID.

> Body parameter

```json
{
  "enabled": true
}
```

<h3 id="updatedevicestate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|The unique identifier of the device.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» enabled|body|boolean|false|If true, the device is enabled. If false, the device is<br> disabled.|

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

<h3 id="updatedevicestate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDeviceStateResponse](#schemaupdatedevicestateresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_ClaimDevicesByClaimCodeResponse">ClaimDevicesByClaimCodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclaimdevicesbyclaimcoderesponse"></a>
<a id="schema_ClaimDevicesByClaimCodeResponse"></a>
<a id="tocSclaimdevicesbyclaimcoderesponse"></a>
<a id="tocsclaimdevicesbyclaimcoderesponse"></a>

```json
{
  "ClaimCode": {},
  "Total": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClaimCode|object|false|none|none|
|Total|object|false|none|none|

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

<h2 id="tocS_ForbiddenException">ForbiddenException</h2>
<!-- backwards compatibility -->
<a id="schemaforbiddenexception"></a>
<a id="schema_ForbiddenException"></a>
<a id="tocSforbiddenexception"></a>
<a id="tocsforbiddenexception"></a>

```json
null
```

<h2 id="tocS_DescribeDeviceResponse">DescribeDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedeviceresponse"></a>
<a id="schema_DescribeDeviceResponse"></a>
<a id="tocSdescribedeviceresponse"></a>
<a id="tocsdescribedeviceresponse"></a>

```json
{
  "DeviceDescription": {
    "Arn": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "DeviceId": {},
    "Enabled": {},
    "RemainingLife": {},
    "Type": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceDescription|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_FinalizeDeviceClaimResponse">FinalizeDeviceClaimResponse</h2>
<!-- backwards compatibility -->
<a id="schemafinalizedeviceclaimresponse"></a>
<a id="schema_FinalizeDeviceClaimResponse"></a>
<a id="tocSfinalizedeviceclaimresponse"></a>
<a id="tocsfinalizedeviceclaimresponse"></a>

```json
{
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|

<h2 id="tocS___string">__string</h2>
<!-- backwards compatibility -->
<a id="schema__string"></a>
<a id="schema___string"></a>
<a id="tocS__string"></a>
<a id="tocs__string"></a>

```json
"string"
```

<h2 id="tocS_PreconditionFailedException">PreconditionFailedException</h2>
<!-- backwards compatibility -->
<a id="schemapreconditionfailedexception"></a>
<a id="schema_PreconditionFailedException"></a>
<a id="tocSpreconditionfailedexception"></a>
<a id="tocspreconditionfailedexception"></a>

```json
null
```

<h2 id="tocS_ResourceConflictException">ResourceConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceconflictexception"></a>
<a id="schema_ResourceConflictException"></a>
<a id="tocSresourceconflictexception"></a>
<a id="tocsresourceconflictexception"></a>

```json
null
```

<h2 id="tocS_GetDeviceMethodsResponse">GetDeviceMethodsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicemethodsresponse"></a>
<a id="schema_GetDeviceMethodsResponse"></a>
<a id="tocSgetdevicemethodsresponse"></a>
<a id="tocsgetdevicemethodsresponse"></a>

```json
{
  "DeviceMethods": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceMethods|object|false|none|none|

<h2 id="tocS_InitiateDeviceClaimResponse">InitiateDeviceClaimResponse</h2>
<!-- backwards compatibility -->
<a id="schemainitiatedeviceclaimresponse"></a>
<a id="schema_InitiateDeviceClaimResponse"></a>
<a id="tocSinitiatedeviceclaimresponse"></a>
<a id="tocsinitiatedeviceclaimresponse"></a>

```json
{
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|

<h2 id="tocS_InvokeDeviceMethodResponse">InvokeDeviceMethodResponse</h2>
<!-- backwards compatibility -->
<a id="schemainvokedevicemethodresponse"></a>
<a id="schema_InvokeDeviceMethodResponse"></a>
<a id="tocSinvokedevicemethodresponse"></a>
<a id="tocsinvokedevicemethodresponse"></a>

```json
{
  "DeviceMethodResponse": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceMethodResponse|object|false|none|none|

<h2 id="tocS_RangeNotSatisfiableException">RangeNotSatisfiableException</h2>
<!-- backwards compatibility -->
<a id="schemarangenotsatisfiableexception"></a>
<a id="schema_RangeNotSatisfiableException"></a>
<a id="tocSrangenotsatisfiableexception"></a>
<a id="tocsrangenotsatisfiableexception"></a>

```json
null
```

<h2 id="tocS_ListDeviceEventsResponse">ListDeviceEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdeviceeventsresponse"></a>
<a id="schema_ListDeviceEventsResponse"></a>
<a id="tocSlistdeviceeventsresponse"></a>
<a id="tocslistdeviceeventsresponse"></a>

```json
{
  "Events": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Events|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDevicesResponse">ListDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicesresponse"></a>
<a id="schema_ListDevicesResponse"></a>
<a id="tocSlistdevicesresponse"></a>
<a id="tocslistdevicesresponse"></a>

```json
{
  "Devices": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Devices|object|false|none|none|
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
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_UnclaimDeviceResponse">UnclaimDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunclaimdeviceresponse"></a>
<a id="schema_UnclaimDeviceResponse"></a>
<a id="tocSunclaimdeviceresponse"></a>
<a id="tocsunclaimdeviceresponse"></a>

```json
{
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|

<h2 id="tocS_UpdateDeviceStateResponse">UpdateDeviceStateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedevicestateresponse"></a>
<a id="schema_UpdateDeviceStateResponse"></a>
<a id="tocSupdatedevicestateresponse"></a>
<a id="tocsupdatedevicestateresponse"></a>

```json
{}
```

<h2 id="tocS_Attributes">Attributes</h2>
<!-- backwards compatibility -->
<a id="schemaattributes"></a>
<a id="schema_Attributes"></a>
<a id="tocSattributes"></a>
<a id="tocsattributes"></a>

```json
{}
```

<h2 id="tocS_ClaimDevicesByClaimCodeRequest">ClaimDevicesByClaimCodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclaimdevicesbyclaimcoderequest"></a>
<a id="schema_ClaimDevicesByClaimCodeRequest"></a>
<a id="tocSclaimdevicesbyclaimcoderequest"></a>
<a id="tocsclaimdevicesbyclaimcoderequest"></a>

```json
{}
```

<h2 id="tocS___stringMin12Max40">__stringMin12Max40</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin12max40"></a>
<a id="schema___stringMin12Max40"></a>
<a id="tocS__stringmin12max40"></a>
<a id="tocs__stringmin12max40"></a>

```json
"stringstring"
```

<h2 id="tocS___integer">__integer</h2>
<!-- backwards compatibility -->
<a id="schema__integer"></a>
<a id="schema___integer"></a>
<a id="tocS__integer"></a>
<a id="tocs__integer"></a>

```json
0
```

<h2 id="tocS_DescribeDeviceRequest">DescribeDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedevicerequest"></a>
<a id="schema_DescribeDeviceRequest"></a>
<a id="tocSdescribedevicerequest"></a>
<a id="tocsdescribedevicerequest"></a>

```json
{}
```

<h2 id="tocS_DeviceDescription">DeviceDescription</h2>
<!-- backwards compatibility -->
<a id="schemadevicedescription"></a>
<a id="schema_DeviceDescription"></a>
<a id="tocSdevicedescription"></a>
<a id="tocsdevicedescription"></a>

```json
{
  "Arn": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "DeviceId": {},
  "Enabled": {},
  "RemainingLife": {},
  "Type": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Attributes|object|false|none|none|
|DeviceId|object|false|none|none|
|Enabled|object|false|none|none|
|RemainingLife|object|false|none|none|
|Type|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "Attributes": {},
  "DeviceId": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|
|DeviceId|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_DeviceAttributes">DeviceAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadeviceattributes"></a>
<a id="schema_DeviceAttributes"></a>
<a id="tocSdeviceattributes"></a>
<a id="tocsdeviceattributes"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```


 DeviceAttributes is a string-to-string map specified by the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[__string](#schema__string)|false|none|none|

<h2 id="tocS___boolean">__boolean</h2>
<!-- backwards compatibility -->
<a id="schema__boolean"></a>
<a id="schema___boolean"></a>
<a id="tocS__boolean"></a>
<a id="tocs__boolean"></a>

```json
true
```

<h2 id="tocS___doubleMin0Max100">__doubleMin0Max100</h2>
<!-- backwards compatibility -->
<a id="schema__doublemin0max100"></a>
<a id="schema___doubleMin0Max100"></a>
<a id="tocS__doublemin0max100"></a>
<a id="tocs__doublemin0max100"></a>

```json
0
```

<h2 id="tocS___mapOf__string">__mapOf__string</h2>
<!-- backwards compatibility -->
<a id="schema__mapof__string"></a>
<a id="schema___mapOf__string"></a>
<a id="tocS__mapof__string"></a>
<a id="tocs__mapof__string"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[__string](#schema__string)|false|none|none|

<h2 id="tocS_DeviceEvent">DeviceEvent</h2>
<!-- backwards compatibility -->
<a id="schemadeviceevent"></a>
<a id="schema_DeviceEvent"></a>
<a id="tocSdeviceevent"></a>
<a id="tocsdeviceevent"></a>

```json
{
  "Device": {
    "Attributes": {},
    "DeviceId": {},
    "Type": {}
  },
  "StdEvent": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Device|object|false|none|none|
|StdEvent|object|false|none|none|

<h2 id="tocS_DeviceMethod">DeviceMethod</h2>
<!-- backwards compatibility -->
<a id="schemadevicemethod"></a>
<a id="schema_DeviceMethod"></a>
<a id="tocSdevicemethod"></a>
<a id="tocsdevicemethod"></a>

```json
{
  "DeviceType": {},
  "MethodName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceType|object|false|none|none|
|MethodName|object|false|none|none|

<h2 id="tocS_FinalizeDeviceClaimRequest">FinalizeDeviceClaimRequest</h2>
<!-- backwards compatibility -->
<a id="schemafinalizedeviceclaimrequest"></a>
<a id="schema_FinalizeDeviceClaimRequest"></a>
<a id="tocSfinalizedeviceclaimrequest"></a>
<a id="tocsfinalizedeviceclaimrequest"></a>

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

<h2 id="tocS_GetDeviceMethodsRequest">GetDeviceMethodsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicemethodsrequest"></a>
<a id="schema_GetDeviceMethodsRequest"></a>
<a id="tocSgetdevicemethodsrequest"></a>
<a id="tocsgetdevicemethodsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfDeviceMethod">__listOfDeviceMethod</h2>
<!-- backwards compatibility -->
<a id="schema__listofdevicemethod"></a>
<a id="schema___listOfDeviceMethod"></a>
<a id="tocS__listofdevicemethod"></a>
<a id="tocs__listofdevicemethod"></a>

```json
[
  {
    "DeviceType": {},
    "MethodName": {}
  }
]
```

<h2 id="tocS_InitiateDeviceClaimRequest">InitiateDeviceClaimRequest</h2>
<!-- backwards compatibility -->
<a id="schemainitiatedeviceclaimrequest"></a>
<a id="schema_InitiateDeviceClaimRequest"></a>
<a id="tocSinitiatedeviceclaimrequest"></a>
<a id="tocsinitiatedeviceclaimrequest"></a>

```json
{}
```

<h2 id="tocS_InvokeDeviceMethodRequest">InvokeDeviceMethodRequest</h2>
<!-- backwards compatibility -->
<a id="schemainvokedevicemethodrequest"></a>
<a id="schema_InvokeDeviceMethodRequest"></a>
<a id="tocSinvokedevicemethodrequest"></a>
<a id="tocsinvokedevicemethodrequest"></a>

```json
{
  "DeviceMethod": {
    "DeviceType": {},
    "MethodName": {}
  },
  "DeviceMethodParameters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceMethod|object|false|none|none|
|DeviceMethodParameters|object|false|none|none|

<h2 id="tocS___timestampIso8601">__timestampIso8601</h2>
<!-- backwards compatibility -->
<a id="schema__timestampiso8601"></a>
<a id="schema___timestampIso8601"></a>
<a id="tocS__timestampiso8601"></a>
<a id="tocs__timestampiso8601"></a>

```json
"1970-01-01T00:00:00Z"
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

<h2 id="tocS_ListDeviceEventsRequest">ListDeviceEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdeviceeventsrequest"></a>
<a id="schema_ListDeviceEventsRequest"></a>
<a id="tocSlistdeviceeventsrequest"></a>
<a id="tocslistdeviceeventsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfDeviceEvent">__listOfDeviceEvent</h2>
<!-- backwards compatibility -->
<a id="schema__listofdeviceevent"></a>
<a id="schema___listOfDeviceEvent"></a>
<a id="tocS__listofdeviceevent"></a>
<a id="tocs__listofdeviceevent"></a>

```json
[
  {
    "Device": {
      "Attributes": {},
      "DeviceId": {},
      "Type": {}
    },
    "StdEvent": {}
  }
]
```

<h2 id="tocS_ListDevicesRequest">ListDevicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicesrequest"></a>
<a id="schema_ListDevicesRequest"></a>
<a id="tocSlistdevicesrequest"></a>
<a id="tocslistdevicesrequest"></a>

```json
{}
```

<h2 id="tocS___listOfDeviceDescription">__listOfDeviceDescription</h2>
<!-- backwards compatibility -->
<a id="schema__listofdevicedescription"></a>
<a id="schema___listOfDeviceDescription"></a>
<a id="tocS__listofdevicedescription"></a>
<a id="tocs__listofdevicedescription"></a>

```json
[
  {
    "Arn": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "DeviceId": {},
    "Enabled": {},
    "RemainingLife": {},
    "Type": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
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

<h2 id="tocS_UnclaimDeviceRequest">UnclaimDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunclaimdevicerequest"></a>
<a id="schema_UnclaimDeviceRequest"></a>
<a id="tocSunclaimdevicerequest"></a>
<a id="tocsunclaimdevicerequest"></a>

```json
{}
```

<h2 id="tocS___listOf__string">__listOf__string</h2>
<!-- backwards compatibility -->
<a id="schema__listof__string"></a>
<a id="schema___listOf__string"></a>
<a id="tocS__listof__string"></a>
<a id="tocs__listof__string"></a>

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

<h2 id="tocS_UpdateDeviceStateRequest">UpdateDeviceStateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedevicestaterequest"></a>
<a id="schema_UpdateDeviceStateRequest"></a>
<a id="tocSupdatedevicestaterequest"></a>
<a id="tocsupdatedevicestaterequest"></a>

```json
{
  "Enabled": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
