<h1 id="aws-iot-data-plane">AWS IoT Data Plane v2015-05-28</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>IoT data</fullname> <p>IoT data enables secure, bi-directional communication between Internet-connected things (such as sensors, actuators, embedded devices, or smart appliances) and the Amazon Web Services cloud. It implements a broker for applications and things to publish messages over HTTP (Publish) and retrieve, update, and delete shadows. A shadow is a persistent representation of your things and their state in the Amazon Web Services cloud.</p> <p>Find the endpoint address for actions in IoT data by running this CLI command:</p> <p> <code>aws iot describe-endpoint --endpoint-type iot:Data-ATS</code> </p> <p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Amazon Web ServicesSignature Version 4</a> to sign requests is: <i>iotdevicegateway</i>.</p>

Base URLs:

* <a href="http://data-ats.iot.us-east-1.amazonaws.com">http://data-ats.iot.us-east-1.amazonaws.com</a> - The AWS IoT Data Plane multi-region endpoint

* <a href="https://data-ats.iot.us-east-1.amazonaws.com">https://data-ats.iot.us-east-1.amazonaws.com</a> - The AWS IoT Data Plane multi-region endpoint

* <a href="http://data-ats.iot.cn-north-1.amazonaws.com.cn">http://data-ats.iot.cn-north-1.amazonaws.com.cn</a> - The AWS IoT Data Plane endpoint for China (Beijing) and China (Ningxia)

* <a href="https://data-ats.iot.cn-north-1.amazonaws.com.cn">https://data-ats.iot.cn-north-1.amazonaws.com.cn</a> - The AWS IoT Data Plane endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/iot/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-iot-data-plane-default">Default</h1>

## GetThingShadow

<a id="opIdGetThingShadow"></a>

> Code samples

```bash
curl https://iot-data.us-east-1.amazonaws.com/things/string/shadow \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /things/{thingName}/shadow`

<p>Gets the shadow for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetThingShadow</a> action.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_GetThingShadow.html">GetThingShadow</a> in the IoT Developer Guide.</p>

<h3 id="getthingshadow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|thingName|path|string|true|The name of the thing.|
|name|query|string|false|The name of the shadow.|
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
  "payload": {}
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

> 487 Response

```json
null
```

<h3 id="getthingshadow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetThingShadowResponse](#schemagetthingshadowresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|486|486|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|487|487|UnsupportedDocumentEncodingException|[UnsupportedDocumentEncodingException](#schemaunsupporteddocumentencodingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateThingShadow

<a id="opIdUpdateThingShadow"></a>

> Code samples

```bash
curl https://iot-data.us-east-1.amazonaws.com/things/string/shadow \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "payload": "string"
  }'
```

`POST /things/{thingName}/shadow`

<p>Updates the shadow for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingShadow</a> action.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html">UpdateThingShadow</a> in the IoT Developer Guide.</p>

> Body parameter

```json
{
  "payload": "string"
}
```

<h3 id="updatethingshadow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|thingName|path|string|true|The name of the thing.|
|name|query|string|false|The name of the shadow.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» payload|body|string|true|The state information, in JSON format.|

> Example responses

> 200 Response

```json
{
  "payload": {}
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="updatethingshadow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateThingShadowResponse](#schemaupdatethingshadowresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|RequestEntityTooLargeException|[RequestEntityTooLargeException](#schemarequestentitytoolargeexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|487|487|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|488|488|UnsupportedDocumentEncodingException|[UnsupportedDocumentEncodingException](#schemaunsupporteddocumentencodingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteThingShadow

<a id="opIdDeleteThingShadow"></a>

> Code samples

```bash
curl https://iot-data.us-east-1.amazonaws.com/things/string/shadow \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /things/{thingName}/shadow`

<p>Deletes the shadow for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingShadow</a> action.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html">DeleteThingShadow</a> in the IoT Developer Guide.</p>

<h3 id="deletethingshadow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|thingName|path|string|true|The name of the thing.|
|name|query|string|false|The name of the shadow.|
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
  "payload": {}
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

> 487 Response

```json
null
```

<h3 id="deletethingshadow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteThingShadowResponse](#schemadeletethingshadowresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|486|486|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|487|487|UnsupportedDocumentEncodingException|[UnsupportedDocumentEncodingException](#schemaunsupporteddocumentencodingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRetainedMessage

<a id="opIdGetRetainedMessage"></a>

> Code samples

```bash
curl https://iot-data.us-east-1.amazonaws.com/retainedMessage/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /retainedMessage/{topic}`

<p>Gets the details of a single retained message for the specified topic.</p> <p>This action returns the message payload of the retained message, which can incur messaging costs. To list only the topic names of the retained messages, call <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_iotdata_ListRetainedMessages.html">ListRetainedMessages</a>.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html#awsiotfleethubfordevicemanagement-actions-as-permissions">GetRetainedMessage</a> action.</p> <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core pricing - Messaging</a>.</p>

<h3 id="getretainedmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topic|path|string|true|The topic name of the retained message to retrieve.|
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
  "topic": {},
  "payload": {},
  "qos": {},
  "lastModifiedTime": {},
  "userProperties": {}
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

<h3 id="getretainedmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRetainedMessageResponse](#schemagetretainedmessageresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|486|486|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListNamedShadowsForThing

<a id="opIdListNamedShadowsForThing"></a>

> Code samples

```bash
curl https://iot-data.us-east-1.amazonaws.com/api/things/shadow/ListNamedShadowsForThing/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/things/shadow/ListNamedShadowsForThing/{thingName}`

<p>Lists the shadows for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListNamedShadowsForThing</a> action.</p>

<h3 id="listnamedshadowsforthing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|thingName|path|string|true|The name of the thing.|
|nextToken|query|string|false|The token to retrieve the next set of results.|
|pageSize|query|integer|false|The result page size.|
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
  "results": {},
  "nextToken": {},
  "timestamp": {}
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

<h3 id="listnamedshadowsforthing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListNamedShadowsForThingResponse](#schemalistnamedshadowsforthingresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|486|486|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRetainedMessages

<a id="opIdListRetainedMessages"></a>

> Code samples

```bash
curl https://iot-data.us-east-1.amazonaws.com/retainedMessage \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /retainedMessage`

<p>Lists summary information about the retained messages stored for the account.</p> <p>This action returns only the topic names of the retained messages. It doesn't return any message payloads. Although this action doesn't return a message payload, it can still incur messaging costs.</p> <p>To get the message payload of a retained message, call <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_iotdata_GetRetainedMessage.html">GetRetainedMessage</a> with the topic name of the retained message.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html#awsiotfleethubfordevicemanagement-actions-as-permissions">ListRetainedMessages</a> action.</p> <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core pricing - Messaging</a>.</p>

<h3 id="listretainedmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.|
|maxResults|query|integer|false|The maximum number of results to return at one time.|
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
  "retainedTopics": {},
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listretainedmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRetainedMessagesResponse](#schemalistretainedmessagesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|485|485|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## Publish

<a id="opIdPublish"></a>

> Code samples

```bash
curl https://iot-data.us-east-1.amazonaws.com/topics/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "payload": "string"
  }'
```

`POST /topics/{topic}`

<p>Publishes an MQTT message.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">Publish</a> action.</p> <p>For more information about MQTT messages, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html">MQTT Protocol</a> in the IoT Developer Guide.</p> <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core pricing - Messaging</a>.</p>

> Body parameter

```json
{
  "payload": "string"
}
```

<h3 id="publish-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topic|path|string|true|The name of the MQTT topic.|
|qos|query|integer|false|The Quality of Service (QoS) level. The default QoS level is 0.|
|retain|query|boolean|false|<p>A Boolean value that determines whether to set the RETAIN flag when the message is published.</p> <p>Setting the RETAIN flag causes the message to be retained and sent to new subscribers to the topic.</p> <p>Valid values: <code>true</code> \| <code>false</code> </p> <p>Default value: <code>false</code> </p>|
|x-amz-mqtt5-user-properties|header|string|false|<p>A JSON string that contains an array of JSON objects. If you don’t use Amazon Web Services SDK or CLI, you must encode the JSON string to base64 format before adding it to the HTTP header. <code>userProperties</code> is an HTTP header value in the API.</p> <p>The following example <code>userProperties</code> parameter is a JSON string which represents two User Properties. Note that it needs to be base64-encoded:</p> <p> <code>[{"deviceName": "alpha"}, {"deviceCnt": "45"}]</code> </p>|
|x-amz-mqtt5-payload-format-indicator|header|string|false|An <code>Enum</code> string value that indicates whether the payload is formatted as UTF-8. <code>payloadFormatIndicator</code> is an HTTP header value in the API.|
|contentType|query|string|false|A UTF-8 encoded string that describes the content of the publishing message.|
|responseTopic|query|string|false|A UTF-8 encoded string that's used as the topic name for a response message. The response topic is used to describe the topic which the receiver should publish to as part of the request-response flow. The topic must not contain wildcard characters.|
|x-amz-mqtt5-correlation-data|header|string|false|The base64-encoded binary data used by the sender of the request message to identify which request the response message is for when it's received. <code>correlationData</code> is an HTTP header value in the API.|
|messageExpiry|query|integer|false|A user-defined integer value that represents the message expiry interval in seconds. If absent, the message doesn't expire. For more information about the limits of <code>messageExpiry</code>, see <a href="https://docs.aws.amazon.com/general/latest/gr/iot-core.html#message-broker-limits">Amazon Web Services IoT Core message broker and protocol limits and quotas </a> from the Amazon Web Services Reference Guide.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» payload|body|string|false|<p>The message body. MQTT accepts text, binary, and empty (null) message payloads.</p> <p>Publishing an empty (null) payload with <b>retain</b> = <code>true</code> deletes the retained message identified by <b>topic</b> from Amazon Web Services IoT Core.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-mqtt5-payload-format-indicator|UNSPECIFIED_BYTES|
|x-amz-mqtt5-payload-format-indicator|UTF8_DATA|

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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="publish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_DeleteThingShadowResponse">DeleteThingShadowResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletethingshadowresponse"></a>
<a id="schema_DeleteThingShadowResponse"></a>
<a id="tocSdeletethingshadowresponse"></a>
<a id="tocsdeletethingshadowresponse"></a>

```json
{
  "payload": {}
}
```

The output from the DeleteThingShadow operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

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

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_UnauthorizedException">UnauthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedexception"></a>
<a id="schema_UnauthorizedException"></a>
<a id="tocSunauthorizedexception"></a>
<a id="tocsunauthorizedexception"></a>

```json
null
```

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

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

<h2 id="tocS_MethodNotAllowedException">MethodNotAllowedException</h2>
<!-- backwards compatibility -->
<a id="schemamethodnotallowedexception"></a>
<a id="schema_MethodNotAllowedException"></a>
<a id="tocSmethodnotallowedexception"></a>
<a id="tocsmethodnotallowedexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedDocumentEncodingException">UnsupportedDocumentEncodingException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupporteddocumentencodingexception"></a>
<a id="schema_UnsupportedDocumentEncodingException"></a>
<a id="tocSunsupporteddocumentencodingexception"></a>
<a id="tocsunsupporteddocumentencodingexception"></a>

```json
null
```

<h2 id="tocS_GetRetainedMessageResponse">GetRetainedMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetretainedmessageresponse"></a>
<a id="schema_GetRetainedMessageResponse"></a>
<a id="tocSgetretainedmessageresponse"></a>
<a id="tocsgetretainedmessageresponse"></a>

```json
{
  "topic": {},
  "payload": {},
  "qos": {},
  "lastModifiedTime": {},
  "userProperties": {}
}
```

The output from the GetRetainedMessage operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic|object|false|none|none|
|payload|object|false|none|none|
|qos|object|false|none|none|
|lastModifiedTime|object|false|none|none|
|userProperties|object|false|none|none|

<h2 id="tocS_GetThingShadowResponse">GetThingShadowResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetthingshadowresponse"></a>
<a id="schema_GetThingShadowResponse"></a>
<a id="tocSgetthingshadowresponse"></a>
<a id="tocsgetthingshadowresponse"></a>

```json
{
  "payload": {}
}
```

The output from the GetThingShadow operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|object|false|none|none|

<h2 id="tocS_ListNamedShadowsForThingResponse">ListNamedShadowsForThingResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnamedshadowsforthingresponse"></a>
<a id="schema_ListNamedShadowsForThingResponse"></a>
<a id="tocSlistnamedshadowsforthingresponse"></a>
<a id="tocslistnamedshadowsforthingresponse"></a>

```json
{
  "results": {},
  "nextToken": {},
  "timestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|object|false|none|none|
|nextToken|object|false|none|none|
|timestamp|object|false|none|none|

<h2 id="tocS_ListRetainedMessagesResponse">ListRetainedMessagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistretainedmessagesresponse"></a>
<a id="schema_ListRetainedMessagesResponse"></a>
<a id="tocSlistretainedmessagesresponse"></a>
<a id="tocslistretainedmessagesresponse"></a>

```json
{
  "retainedTopics": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|retainedTopics|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_UpdateThingShadowResponse">UpdateThingShadowResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatethingshadowresponse"></a>
<a id="schema_UpdateThingShadowResponse"></a>
<a id="tocSupdatethingshadowresponse"></a>
<a id="tocsupdatethingshadowresponse"></a>

```json
{
  "payload": {}
}
```

The output from the UpdateThingShadow operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|object|false|none|none|

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_RequestEntityTooLargeException">RequestEntityTooLargeException</h2>
<!-- backwards compatibility -->
<a id="schemarequestentitytoolargeexception"></a>
<a id="schema_RequestEntityTooLargeException"></a>
<a id="tocSrequestentitytoolargeexception"></a>
<a id="tocsrequestentitytoolargeexception"></a>

```json
null
```

<h2 id="tocS_ContentType">ContentType</h2>
<!-- backwards compatibility -->
<a id="schemacontenttype"></a>
<a id="schema_ContentType"></a>
<a id="tocScontenttype"></a>
<a id="tocscontenttype"></a>

```json
"string"
```

<h2 id="tocS_CorrelationData">CorrelationData</h2>
<!-- backwards compatibility -->
<a id="schemacorrelationdata"></a>
<a id="schema_CorrelationData"></a>
<a id="tocScorrelationdata"></a>
<a id="tocscorrelationdata"></a>

```json
"string"
```

<h2 id="tocS_ThingName">ThingName</h2>
<!-- backwards compatibility -->
<a id="schemathingname"></a>
<a id="schema_ThingName"></a>
<a id="tocSthingname"></a>
<a id="tocsthingname"></a>

```json
"string"
```

<h2 id="tocS_ShadowName">ShadowName</h2>
<!-- backwards compatibility -->
<a id="schemashadowname"></a>
<a id="schema_ShadowName"></a>
<a id="tocSshadowname"></a>
<a id="tocsshadowname"></a>

```json
"string"
```

<h2 id="tocS_DeleteThingShadowRequest">DeleteThingShadowRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletethingshadowrequest"></a>
<a id="schema_DeleteThingShadowRequest"></a>
<a id="tocSdeletethingshadowrequest"></a>
<a id="tocsdeletethingshadowrequest"></a>

```json
{}
```

The input for the DeleteThingShadow operation.

<h2 id="tocS_JsonDocument">JsonDocument</h2>
<!-- backwards compatibility -->
<a id="schemajsondocument"></a>
<a id="schema_JsonDocument"></a>
<a id="tocSjsondocument"></a>
<a id="tocsjsondocument"></a>

```json
"string"
```

<h2 id="tocS_Topic">Topic</h2>
<!-- backwards compatibility -->
<a id="schematopic"></a>
<a id="schema_Topic"></a>
<a id="tocStopic"></a>
<a id="tocstopic"></a>

```json
"string"
```

<h2 id="tocS_GetRetainedMessageRequest">GetRetainedMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetretainedmessagerequest"></a>
<a id="schema_GetRetainedMessageRequest"></a>
<a id="tocSgetretainedmessagerequest"></a>
<a id="tocsgetretainedmessagerequest"></a>

```json
{}
```

The input for the GetRetainedMessage operation.

<h2 id="tocS_Payload">Payload</h2>
<!-- backwards compatibility -->
<a id="schemapayload"></a>
<a id="schema_Payload"></a>
<a id="tocSpayload"></a>
<a id="tocspayload"></a>

```json
"string"
```

<h2 id="tocS_Qos">Qos</h2>
<!-- backwards compatibility -->
<a id="schemaqos"></a>
<a id="schema_Qos"></a>
<a id="tocSqos"></a>
<a id="tocsqos"></a>

```json
0
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

<h2 id="tocS_UserPropertiesBlob">UserPropertiesBlob</h2>
<!-- backwards compatibility -->
<a id="schemauserpropertiesblob"></a>
<a id="schema_UserPropertiesBlob"></a>
<a id="tocSuserpropertiesblob"></a>
<a id="tocsuserpropertiesblob"></a>

```json
"string"
```

<h2 id="tocS_GetThingShadowRequest">GetThingShadowRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetthingshadowrequest"></a>
<a id="schema_GetThingShadowRequest"></a>
<a id="tocSgetthingshadowrequest"></a>
<a id="tocsgetthingshadowrequest"></a>

```json
{}
```

The input for the GetThingShadow operation.

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_PageSize">PageSize</h2>
<!-- backwards compatibility -->
<a id="schemapagesize"></a>
<a id="schema_PageSize"></a>
<a id="tocSpagesize"></a>
<a id="tocspagesize"></a>

```json
1
```

<h2 id="tocS_ListNamedShadowsForThingRequest">ListNamedShadowsForThingRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistnamedshadowsforthingrequest"></a>
<a id="schema_ListNamedShadowsForThingRequest"></a>
<a id="tocSlistnamedshadowsforthingrequest"></a>
<a id="tocslistnamedshadowsforthingrequest"></a>

```json
{}
```

<h2 id="tocS_NamedShadowList">NamedShadowList</h2>
<!-- backwards compatibility -->
<a id="schemanamedshadowlist"></a>
<a id="schema_NamedShadowList"></a>
<a id="tocSnamedshadowlist"></a>
<a id="tocsnamedshadowlist"></a>

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
1
```

<h2 id="tocS_ListRetainedMessagesRequest">ListRetainedMessagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistretainedmessagesrequest"></a>
<a id="schema_ListRetainedMessagesRequest"></a>
<a id="tocSlistretainedmessagesrequest"></a>
<a id="tocslistretainedmessagesrequest"></a>

```json
{}
```

<h2 id="tocS_RetainedMessageList">RetainedMessageList</h2>
<!-- backwards compatibility -->
<a id="schemaretainedmessagelist"></a>
<a id="schema_RetainedMessageList"></a>
<a id="tocSretainedmessagelist"></a>
<a id="tocsretainedmessagelist"></a>

```json
[
  {
    "topic": {},
    "payloadSize": {},
    "qos": {},
    "lastModifiedTime": {}
  }
]
```

<h2 id="tocS_MessageExpiry">MessageExpiry</h2>
<!-- backwards compatibility -->
<a id="schemamessageexpiry"></a>
<a id="schema_MessageExpiry"></a>
<a id="tocSmessageexpiry"></a>
<a id="tocsmessageexpiry"></a>

```json
0
```

<h2 id="tocS_PayloadFormatIndicator">PayloadFormatIndicator</h2>
<!-- backwards compatibility -->
<a id="schemapayloadformatindicator"></a>
<a id="schema_PayloadFormatIndicator"></a>
<a id="tocSpayloadformatindicator"></a>
<a id="tocspayloadformatindicator"></a>

```json
"UNSPECIFIED_BYTES"
```

<h2 id="tocS_PayloadSize">PayloadSize</h2>
<!-- backwards compatibility -->
<a id="schemapayloadsize"></a>
<a id="schema_PayloadSize"></a>
<a id="tocSpayloadsize"></a>
<a id="tocspayloadsize"></a>

```json
0
```

<h2 id="tocS_Retain">Retain</h2>
<!-- backwards compatibility -->
<a id="schemaretain"></a>
<a id="schema_Retain"></a>
<a id="tocSretain"></a>
<a id="tocsretain"></a>

```json
true
```

<h2 id="tocS_UserProperties">UserProperties</h2>
<!-- backwards compatibility -->
<a id="schemauserproperties"></a>
<a id="schema_UserProperties"></a>
<a id="tocSuserproperties"></a>
<a id="tocsuserproperties"></a>

```json
"string"
```

<h2 id="tocS_ResponseTopic">ResponseTopic</h2>
<!-- backwards compatibility -->
<a id="schemaresponsetopic"></a>
<a id="schema_ResponseTopic"></a>
<a id="tocSresponsetopic"></a>
<a id="tocsresponsetopic"></a>

```json
"string"
```

<h2 id="tocS_PublishRequest">PublishRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublishrequest"></a>
<a id="schema_PublishRequest"></a>
<a id="tocSpublishrequest"></a>
<a id="tocspublishrequest"></a>

```json
{
  "payload": {}
}
```

The input for the Publish operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|object|false|none|none|

<h2 id="tocS_RetainedMessageSummary">RetainedMessageSummary</h2>
<!-- backwards compatibility -->
<a id="schemaretainedmessagesummary"></a>
<a id="schema_RetainedMessageSummary"></a>
<a id="tocSretainedmessagesummary"></a>
<a id="tocsretainedmessagesummary"></a>

```json
{
  "topic": {},
  "payloadSize": {},
  "qos": {},
  "lastModifiedTime": {}
}
```

Information about a single retained message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic|object|false|none|none|
|payloadSize|object|false|none|none|
|qos|object|false|none|none|
|lastModifiedTime|object|false|none|none|

<h2 id="tocS_UpdateThingShadowRequest">UpdateThingShadowRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatethingshadowrequest"></a>
<a id="schema_UpdateThingShadowRequest"></a>
<a id="tocSupdatethingshadowrequest"></a>
<a id="tocsupdatethingshadowrequest"></a>

```json
{
  "payload": {}
}
```

The input for the UpdateThingShadow operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|object|true|none|none|
