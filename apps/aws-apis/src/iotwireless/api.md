<h1 id="aws-iot-wireless">AWS IoT Wireless v2020-11-22</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>AWS IoT Wireless provides bi-directional communication between internet-connected wireless devices and the AWS Cloud. To onboard both LoRaWAN and Sidewalk devices to AWS IoT, use the IoT Wireless API. These wireless devices use the Low Power Wide Area Networking (LPWAN) communication protocol to communicate with AWS IoT.</p> <p>Using the API, you can perform create, read, update, and delete operations for your wireless devices, gateways, destinations, and profiles. After onboarding your devices, you can use the API operations to set log levels and monitor your devices with CloudWatch.</p> <p>You can also use the API operations to create multicast groups and schedule a multicast session for sending a downlink message to devices in the group. By using Firmware Updates Over-The-Air (FUOTA) API operations, you can create a FUOTA task and schedule a session to update the firmware of individual devices or an entire group of devices in a multicast group.</p>

Base URLs:

* <a href="http://api.iotwireless.us-east-1.amazonaws.com">http://api.iotwireless.us-east-1.amazonaws.com</a> - The AWS IoT Wireless multi-region endpoint

* <a href="https://api.iotwireless.us-east-1.amazonaws.com">https://api.iotwireless.us-east-1.amazonaws.com</a> - The AWS IoT Wireless multi-region endpoint

* <a href="http://api.iotwireless.cn-north-1.amazonaws.com.cn">http://api.iotwireless.cn-north-1.amazonaws.com.cn</a> - The AWS IoT Wireless endpoint for China (Beijing) and China (Ningxia)

* <a href="https://api.iotwireless.cn-north-1.amazonaws.com.cn">https://api.iotwireless.cn-north-1.amazonaws.com.cn</a> - The AWS IoT Wireless endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/iotwireless/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-iot-wireless-default">Default</h1>

## ListPartnerAccounts

<a id="opIdListPartnerAccounts"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/partner-accounts \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /partner-accounts`

Lists the partner accounts associated with your AWS account.

<h3 id="listpartneraccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.|
|maxResults|query|integer|false|The maximum number of results to return in this operation.|
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
  "NextToken": {},
  "Sidewalk": {}
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

<h3 id="listpartneraccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPartnerAccountsResponse](#schemalistpartneraccountsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateAwsAccountWithPartnerAccount

<a id="opIdAssociateAwsAccountWithPartnerAccount"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/partner-accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Sidewalk": {
      "AmazonId": {},
      "AppServerPrivateKey": {}
    },
    "ClientRequestToken": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /partner-accounts`

Associates a partner account with your AWS account.

> Body parameter

```json
{
  "Sidewalk": {
    "AmazonId": {},
    "AppServerPrivateKey": {}
  },
  "ClientRequestToken": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="associateawsaccountwithpartneraccount-parameters">Parameters</h3>

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
|» Sidewalk|body|object|true|Information about a Sidewalk account.|
|» » AmazonId|body|object|false|none|
|» » AppServerPrivateKey|body|object|false|none|
|» ClientRequestToken|body|string|false|Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.|
|» Tags|body|[[Tag](#schematag)]|false|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|

> Example responses

> 200 Response

```json
{
  "Sidewalk": {
    "AmazonId": {},
    "AppServerPrivateKey": {}
  },
  "Arn": {}
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

<h3 id="associateawsaccountwithpartneraccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateAwsAccountWithPartnerAccountResponse](#schemaassociateawsaccountwithpartneraccountresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateMulticastGroupWithFuotaTask

<a id="opIdAssociateMulticastGroupWithFuotaTask"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/fuota-tasks/string/multicast-group \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MulticastGroupId": "string"
  }'
```

`PUT /fuota-tasks/{Id}/multicast-group`

Associate a multicast group with a FUOTA task.

> Body parameter

```json
{
  "MulticastGroupId": "string"
}
```

<h3 id="associatemulticastgroupwithfuotatask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MulticastGroupId|body|string|true|The ID of the multicast group.|

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

> 485 Response

```json
null
```

<h3 id="associatemulticastgroupwithfuotatask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[AssociateMulticastGroupWithFuotaTaskResponse](#schemaassociatemulticastgroupwithfuotataskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateWirelessDeviceWithFuotaTask

<a id="opIdAssociateWirelessDeviceWithFuotaTask"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/fuota-tasks/string/wireless-device \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "WirelessDeviceId": "string"
  }'
```

`PUT /fuota-tasks/{Id}/wireless-device`

Associate a wireless device with a FUOTA task.

> Body parameter

```json
{
  "WirelessDeviceId": "string"
}
```

<h3 id="associatewirelessdevicewithfuotatask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» WirelessDeviceId|body|string|true|The ID of the wireless device.|

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

> 485 Response

```json
null
```

<h3 id="associatewirelessdevicewithfuotatask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[AssociateWirelessDeviceWithFuotaTaskResponse](#schemaassociatewirelessdevicewithfuotataskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateWirelessDeviceWithMulticastGroup

<a id="opIdAssociateWirelessDeviceWithMulticastGroup"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/multicast-groups/string/wireless-device \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "WirelessDeviceId": "string"
  }'
```

`PUT /multicast-groups/{Id}/wireless-device`

Associates a wireless device with a multicast group.

> Body parameter

```json
{
  "WirelessDeviceId": "string"
}
```

<h3 id="associatewirelessdevicewithmulticastgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» WirelessDeviceId|body|string|true|The ID of the wireless device.|

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

> 485 Response

```json
null
```

<h3 id="associatewirelessdevicewithmulticastgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[AssociateWirelessDeviceWithMulticastGroupResponse](#schemaassociatewirelessdevicewithmulticastgroupresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateWirelessDeviceWithThing

<a id="opIdAssociateWirelessDeviceWithThing"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-devices/string/thing \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ThingArn": "string"
  }'
```

`PUT /wireless-devices/{Id}/thing`

Associates a wireless device with a thing.

> Body parameter

```json
{
  "ThingArn": "string"
}
```

<h3 id="associatewirelessdevicewiththing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ThingArn|body|string|true|The ARN of the thing to associate with the wireless device.|

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

> 485 Response

```json
null
```

<h3 id="associatewirelessdevicewiththing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[AssociateWirelessDeviceWithThingResponse](#schemaassociatewirelessdevicewiththingresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateWirelessDeviceFromThing

<a id="opIdDisassociateWirelessDeviceFromThing"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-devices/string/thing \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /wireless-devices/{Id}/thing`

Disassociates a wireless device from its currently associated thing.

<h3 id="disassociatewirelessdevicefromthing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to update.|
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

> 485 Response

```json
null
```

<h3 id="disassociatewirelessdevicefromthing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DisassociateWirelessDeviceFromThingResponse](#schemadisassociatewirelessdevicefromthingresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWirelessGatewayCertificate

<a id="opIdGetWirelessGatewayCertificate"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-gateways/string/certificate \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /wireless-gateways/{Id}/certificate`

Gets the ID of the certificate that is currently associated with a wireless gateway.

<h3 id="getwirelessgatewaycertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to get.|
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
  "IotCertificateId": {},
  "LoRaWANNetworkServerCertificateId": {}
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

<h3 id="getwirelessgatewaycertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWirelessGatewayCertificateResponse](#schemagetwirelessgatewaycertificateresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateWirelessGatewayWithCertificate

<a id="opIdAssociateWirelessGatewayWithCertificate"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-gateways/string/certificate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "IotCertificateId": "string"
  }'
```

`PUT /wireless-gateways/{Id}/certificate`

Associates a wireless gateway with a certificate.

> Body parameter

```json
{
  "IotCertificateId": "string"
}
```

<h3 id="associatewirelessgatewaywithcertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» IotCertificateId|body|string|true|The ID of the certificate to associate with the wireless gateway.|

> Example responses

> 200 Response

```json
{
  "IotCertificateId": {}
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

<h3 id="associatewirelessgatewaywithcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateWirelessGatewayWithCertificateResponse](#schemaassociatewirelessgatewaywithcertificateresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateWirelessGatewayFromCertificate

<a id="opIdDisassociateWirelessGatewayFromCertificate"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-gateways/string/certificate \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /wireless-gateways/{Id}/certificate`

Disassociates a wireless gateway from its currently associated certificate.

<h3 id="disassociatewirelessgatewayfromcertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to update.|
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

<h3 id="disassociatewirelessgatewayfromcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DisassociateWirelessGatewayFromCertificateResponse](#schemadisassociatewirelessgatewayfromcertificateresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateWirelessGatewayWithThing

<a id="opIdAssociateWirelessGatewayWithThing"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-gateways/string/thing \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ThingArn": "string"
  }'
```

`PUT /wireless-gateways/{Id}/thing`

Associates a wireless gateway with a thing.

> Body parameter

```json
{
  "ThingArn": "string"
}
```

<h3 id="associatewirelessgatewaywiththing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ThingArn|body|string|true|The ARN of the thing to associate with the wireless gateway.|

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

> 485 Response

```json
null
```

<h3 id="associatewirelessgatewaywiththing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[AssociateWirelessGatewayWithThingResponse](#schemaassociatewirelessgatewaywiththingresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateWirelessGatewayFromThing

<a id="opIdDisassociateWirelessGatewayFromThing"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-gateways/string/thing \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /wireless-gateways/{Id}/thing`

Disassociates a wireless gateway from its currently associated thing.

<h3 id="disassociatewirelessgatewayfromthing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to update.|
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

> 485 Response

```json
null
```

<h3 id="disassociatewirelessgatewayfromthing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DisassociateWirelessGatewayFromThingResponse](#schemadisassociatewirelessgatewayfromthingresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMulticastGroupSession

<a id="opIdGetMulticastGroupSession"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/multicast-groups/string/session \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /multicast-groups/{Id}/session`

Gets information about a multicast group session.

<h3 id="getmulticastgroupsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
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
  "LoRaWAN": {
    "DlDr": 0,
    "DlFreq": 100000000,
    "SessionStartTime": "1970-01-01T00:00:00Z",
    "SessionTimeout": 60,
    "PingSlotPeriod": {}
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

<h3 id="getmulticastgroupsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMulticastGroupSessionResponse](#schemagetmulticastgroupsessionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartMulticastGroupSession

<a id="opIdStartMulticastGroupSession"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/multicast-groups/string/session \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "LoRaWAN": {
      "DlDr": 0,
      "DlFreq": 100000000,
      "SessionStartTime": "1970-01-01T00:00:00Z",
      "SessionTimeout": 60,
      "PingSlotPeriod": {}
    }
  }'
```

`PUT /multicast-groups/{Id}/session`

Starts a multicast group session.

> Body parameter

```json
{
  "LoRaWAN": {
    "DlDr": 0,
    "DlFreq": 100000000,
    "SessionStartTime": "1970-01-01T00:00:00Z",
    "SessionTimeout": 60,
    "PingSlotPeriod": {}
  }
}
```

<h3 id="startmulticastgroupsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» LoRaWAN|body|object|true|The LoRaWAN information used with the multicast session.|
|» » DlDr|body|[DlDr](#schemadldr)|false|Downlink data rate.|
|» » DlFreq|body|[DlFreq](#schemadlfreq)|false|Downlink frequency.|
|» » SessionStartTime|body|[SessionStartTimeTimestamp](#schemasessionstarttimetimestamp)|false|Timestamp of when the multicast group session is to start.|
|» » SessionTimeout|body|[SessionTimeout](#schemasessiontimeout)|false|How long before a multicast group session is to timeout.|
|» » PingSlotPeriod|body|object|false|none|

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

> 485 Response

```json
null
```

<h3 id="startmulticastgroupsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[StartMulticastGroupSessionResponse](#schemastartmulticastgroupsessionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelMulticastGroupSession

<a id="opIdCancelMulticastGroupSession"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/multicast-groups/string/session \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /multicast-groups/{Id}/session`

Cancels an existing multicast group session.

<h3 id="cancelmulticastgroupsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
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

> 485 Response

```json
null
```

<h3 id="cancelmulticastgroupsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[CancelMulticastGroupSessionResponse](#schemacancelmulticastgroupsessionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDestinations

<a id="opIdListDestinations"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/destinations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /destinations`

Lists the destinations registered to your AWS account.

<h3 id="listdestinations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return in this operation.|
|nextToken|query|string|false|To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "NextToken": {},
  "DestinationList": {}
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

<h3 id="listdestinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDestinationsResponse](#schemalistdestinationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDestination

<a id="opIdCreateDestination"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/destinations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "ExpressionType": "RuleName",
    "Expression": "string",
    "Description": "string",
    "RoleArn": "stringstringstringst",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "ClientRequestToken": "string"
  }'
```

`POST /destinations`

Creates a new destination that maps a device message to an AWS IoT rule.

> Body parameter

```json
{
  "Name": "string",
  "ExpressionType": "RuleName",
  "Expression": "string",
  "Description": "string",
  "RoleArn": "stringstringstringst",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "ClientRequestToken": "string"
}
```

<h3 id="createdestination-parameters">Parameters</h3>

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
|» Name|body|string|true|The name of the new resource.|
|» ExpressionType|body|string|true|The type of value in <code>Expression</code>.|
|» Expression|body|string|true|The rule name or topic rule to send messages to.|
|» Description|body|string|false|The description of the new resource.|
|» RoleArn|body|string|true|The ARN of the IAM Role that authorizes the destination.|
|» Tags|body|[[Tag](#schematag)]|false|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|
|» ClientRequestToken|body|string|false|Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ExpressionType|RuleName|
|» ExpressionType|MqttTopic|

> Example responses

> 201 Response

```json
{
  "Arn": {},
  "Name": {}
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

<h3 id="createdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateDestinationResponse](#schemacreatedestinationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDeviceProfiles

<a id="opIdListDeviceProfiles"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/device-profiles \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /device-profiles`

Lists the device profiles registered to your AWS account.

<h3 id="listdeviceprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.|
|maxResults|query|integer|false|The maximum number of results to return in this operation.|
|deviceProfileType|query|string|false|A filter to list only device profiles that use this type, which can be <code>LoRaWAN</code> or <code>Sidewalk</code>.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
|deviceProfileType|Sidewalk|
|deviceProfileType|LoRaWAN|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "DeviceProfileList": {}
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

<h3 id="listdeviceprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDeviceProfilesResponse](#schemalistdeviceprofilesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDeviceProfile

<a id="opIdCreateDeviceProfile"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/device-profiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "LoRaWAN": {
      "SupportsClassB": {},
      "ClassBTimeout": {},
      "PingSlotPeriod": {},
      "PingSlotDr": {},
      "PingSlotFreq": {},
      "SupportsClassC": {},
      "ClassCTimeout": {},
      "MacVersion": {},
      "RegParamsRevision": {},
      "RxDelay1": {},
      "RxDrOffset1": {},
      "RxDataRate2": {},
      "RxFreq2": {},
      "FactoryPresetFreqsList": {},
      "MaxEirp": {},
      "MaxDutyCycle": {},
      "RfRegion": {},
      "SupportsJoin": {},
      "Supports32BitFCnt": {}
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "ClientRequestToken": "string",
    "Sidewalk": {}
  }'
```

`POST /device-profiles`

Creates a new device profile.

> Body parameter

```json
{
  "Name": "string",
  "LoRaWAN": {
    "SupportsClassB": {},
    "ClassBTimeout": {},
    "PingSlotPeriod": {},
    "PingSlotDr": {},
    "PingSlotFreq": {},
    "SupportsClassC": {},
    "ClassCTimeout": {},
    "MacVersion": {},
    "RegParamsRevision": {},
    "RxDelay1": {},
    "RxDrOffset1": {},
    "RxDataRate2": {},
    "RxFreq2": {},
    "FactoryPresetFreqsList": {},
    "MaxEirp": {},
    "MaxDutyCycle": {},
    "RfRegion": {},
    "SupportsJoin": {},
    "Supports32BitFCnt": {}
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "ClientRequestToken": "string",
  "Sidewalk": {}
}
```

<h3 id="createdeviceprofile-parameters">Parameters</h3>

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
|» Name|body|string|false|The name of the new resource.|
|» LoRaWAN|body|object|false|LoRaWANDeviceProfile object.|
|» » SupportsClassB|body|object|false|none|
|» » ClassBTimeout|body|object|false|none|
|» » PingSlotPeriod|body|object|false|none|
|» » PingSlotDr|body|object|false|none|
|» » PingSlotFreq|body|object|false|none|
|» » SupportsClassC|body|object|false|none|
|» » ClassCTimeout|body|object|false|none|
|» » MacVersion|body|object|false|none|
|» » RegParamsRevision|body|object|false|none|
|» » RxDelay1|body|object|false|none|
|» » RxDrOffset1|body|object|false|none|
|» » RxDataRate2|body|object|false|none|
|» » RxFreq2|body|object|false|none|
|» » FactoryPresetFreqsList|body|object|false|none|
|» » MaxEirp|body|object|false|none|
|» » MaxDutyCycle|body|object|false|none|
|» » RfRegion|body|object|false|none|
|» » SupportsJoin|body|object|false|none|
|» » Supports32BitFCnt|body|object|false|none|
|» Tags|body|[[Tag](#schematag)]|false|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|
|» ClientRequestToken|body|string|false|Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.|
|» Sidewalk|body|object|false|Sidewalk object for creating a device profile.|

> Example responses

> 201 Response

```json
{
  "Arn": {},
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

<h3 id="createdeviceprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateDeviceProfileResponse](#schemacreatedeviceprofileresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFuotaTasks

<a id="opIdListFuotaTasks"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/fuota-tasks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /fuota-tasks`

Lists the FUOTA tasks registered to your AWS account.

<h3 id="listfuotatasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.|
|maxResults|query|integer|false|none|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "NextToken": {},
  "FuotaTaskList": [
    {
      "Id": "string",
      "Arn": "string",
      "Name": "string"
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

<h3 id="listfuotatasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFuotaTasksResponse](#schemalistfuotatasksresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFuotaTask

<a id="opIdCreateFuotaTask"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/fuota-tasks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "ClientRequestToken": "string",
    "LoRaWAN": {
      "RfRegion": "EU868"
    },
    "FirmwareUpdateImage": "string",
    "FirmwareUpdateRole": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "RedundancyPercent": 0,
    "FragmentSizeBytes": 1,
    "FragmentIntervalMS": 1
  }'
```

`POST /fuota-tasks`

Creates a FUOTA task.

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "ClientRequestToken": "string",
  "LoRaWAN": {
    "RfRegion": "EU868"
  },
  "FirmwareUpdateImage": "string",
  "FirmwareUpdateRole": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "RedundancyPercent": 0,
  "FragmentSizeBytes": 1,
  "FragmentIntervalMS": 1
}
```

<h3 id="createfuotatask-parameters">Parameters</h3>

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
|» Name|body|string|false|The name of a FUOTA task.|
|» Description|body|string|false|The description of the new resource.|
|» ClientRequestToken|body|string|false|Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.|
|» LoRaWAN|body|object|false|The LoRaWAN information used with a FUOTA task.|
|» » RfRegion|body|[SupportedRfRegion](#schemasupportedrfregion)|false|Supported RfRegions|
|» FirmwareUpdateImage|body|string|true|The S3 URI points to a firmware update image that is to be used with a FUOTA task.|
|» FirmwareUpdateRole|body|string|true|The firmware update role that is to be used with a FUOTA task.|
|» Tags|body|[[Tag](#schematag)]|false|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|
|» RedundancyPercent|body|integer|false|The percentage of added redundant fragments. For example, if firmware file is 100 bytes and fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.|
|» FragmentSizeBytes|body|integer|false|The size of each fragment in bytes. Currently only supported in fuota tasks with multicast groups.|
|» FragmentIntervalMS|body|integer|false|The interval of sending fragments in milliseconds. Currently the interval will be rounded to the nearest second. Note that this interval only controls the timing when the cloud sends the fragments down. The actual delay of receiving fragments at device side depends on the device's class and the communication delay with the cloud.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » RfRegion|EU868|
|» » RfRegion|US915|
|» » RfRegion|AU915|
|» » RfRegion|AS923-1|
|» » RfRegion|AS923-2|
|» » RfRegion|AS923-3|
|» » RfRegion|AS923-4|
|» » RfRegion|EU433|
|» » RfRegion|CN470|
|» » RfRegion|CN779|
|» » RfRegion|RU864|
|» » RfRegion|KR920|
|» » RfRegion|IN865|

> Example responses

> 201 Response

```json
{
  "Arn": "string",
  "Id": "string"
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

<h3 id="createfuotatask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateFuotaTaskResponse](#schemacreatefuotataskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMulticastGroups

<a id="opIdListMulticastGroups"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/multicast-groups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /multicast-groups`

Lists the multicast groups registered to your AWS account.

<h3 id="listmulticastgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.|
|maxResults|query|integer|false|none|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "NextToken": {},
  "MulticastGroupList": [
    {
      "Id": "string",
      "Arn": "string",
      "Name": "string"
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

<h3 id="listmulticastgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMulticastGroupsResponse](#schemalistmulticastgroupsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMulticastGroup

<a id="opIdCreateMulticastGroup"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/multicast-groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "ClientRequestToken": "string",
    "LoRaWAN": {
      "RfRegion": "EU868",
      "DlClass": "ClassB"
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /multicast-groups`

Creates a multicast group.

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "ClientRequestToken": "string",
  "LoRaWAN": {
    "RfRegion": "EU868",
    "DlClass": "ClassB"
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createmulticastgroup-parameters">Parameters</h3>

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
|» Name|body|string|false|The name of the multicast group.|
|» Description|body|string|false|The description of the new resource.|
|» ClientRequestToken|body|string|false|Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.|
|» LoRaWAN|body|object|true|The LoRaWAN information that is to be used with the multicast group.|
|» » RfRegion|body|[SupportedRfRegion](#schemasupportedrfregion)|false|Supported RfRegions|
|» » DlClass|body|[DlClass](#schemadlclass)|false|DlClass for LoRaWAM, valid values are ClassB and ClassC.|
|» Tags|body|[[Tag](#schematag)]|false|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » RfRegion|EU868|
|» » RfRegion|US915|
|» » RfRegion|AU915|
|» » RfRegion|AS923-1|
|» » RfRegion|AS923-2|
|» » RfRegion|AS923-3|
|» » RfRegion|AS923-4|
|» » RfRegion|EU433|
|» » RfRegion|CN470|
|» » RfRegion|CN779|
|» » RfRegion|RU864|
|» » RfRegion|KR920|
|» » RfRegion|IN865|
|» » DlClass|ClassB|
|» » DlClass|ClassC|

> Example responses

> 201 Response

```json
{
  "Arn": "string",
  "Id": "string"
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

<h3 id="createmulticastgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateMulticastGroupResponse](#schemacreatemulticastgroupresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListNetworkAnalyzerConfigurations

<a id="opIdListNetworkAnalyzerConfigurations"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/network-analyzer-configurations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /network-analyzer-configurations`

Lists the network analyzer configurations.

<h3 id="listnetworkanalyzerconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|none|
|nextToken|query|string|false|To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "NextToken": {},
  "NetworkAnalyzerConfigurationList": {}
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

<h3 id="listnetworkanalyzerconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListNetworkAnalyzerConfigurationsResponse](#schemalistnetworkanalyzerconfigurationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateNetworkAnalyzerConfiguration

<a id="opIdCreateNetworkAnalyzerConfiguration"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/network-analyzer-configurations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "TraceContent": {
      "WirelessDeviceFrameInfo": "ENABLED",
      "LogLevel": "INFO"
    },
    "WirelessDevices": [
      "string"
    ],
    "WirelessGateways": [
      "string"
    ],
    "Description": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "ClientRequestToken": "string"
  }'
```

`POST /network-analyzer-configurations`

Creates a new network analyzer configuration.

> Body parameter

```json
{
  "Name": "string",
  "TraceContent": {
    "WirelessDeviceFrameInfo": "ENABLED",
    "LogLevel": "INFO"
  },
  "WirelessDevices": [
    "string"
  ],
  "WirelessGateways": [
    "string"
  ],
  "Description": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "ClientRequestToken": "string"
}
```

<h3 id="createnetworkanalyzerconfiguration-parameters">Parameters</h3>

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
|» Name|body|string|true|Name of the network analyzer configuration.|
|» TraceContent|body|object|false|Trace content for your wireless gateway and wireless device resources.|
|» » WirelessDeviceFrameInfo|body|[WirelessDeviceFrameInfo](#schemawirelessdeviceframeinfo)|false| <code>FrameInfo</code> of your wireless device resources for the trace content. Use FrameInfo to debug the communication between your LoRaWAN end devices and the network server.|
|» » LogLevel|body|[LogLevel](#schemaloglevel)|false|The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.|
|» WirelessDevices|body|[[WirelessDeviceId](#schemawirelessdeviceid)]|false|Wireless device resources to add to the network analyzer configuration. Provide the <code>WirelessDeviceId</code> of the resource to add in the input array.|
|» WirelessGateways|body|[[WirelessGatewayId](#schemawirelessgatewayid)]|false|Wireless gateway resources to add to the network analyzer configuration. Provide the <code>WirelessGatewayId</code> of the resource to add in the input array.|
|» Description|body|string|false|The description of the new resource.|
|» Tags|body|[[Tag](#schematag)]|false|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|
|» ClientRequestToken|body|string|false|Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » WirelessDeviceFrameInfo|ENABLED|
|» » WirelessDeviceFrameInfo|DISABLED|
|» » LogLevel|INFO|
|» » LogLevel|ERROR|
|» » LogLevel|DISABLED|

> Example responses

> 201 Response

```json
{
  "Arn": {},
  "Name": "string"
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

<h3 id="createnetworkanalyzerconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateNetworkAnalyzerConfigurationResponse](#schemacreatenetworkanalyzerconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServiceProfiles

<a id="opIdListServiceProfiles"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/service-profiles \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /service-profiles`

Lists the service profiles registered to your AWS account.

<h3 id="listserviceprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.|
|maxResults|query|integer|false|The maximum number of results to return in this operation.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "NextToken": {},
  "ServiceProfileList": {}
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

<h3 id="listserviceprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServiceProfilesResponse](#schemalistserviceprofilesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateServiceProfile

<a id="opIdCreateServiceProfile"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/service-profiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "LoRaWAN": {
      "AddGwMetadata": {},
      "DrMin": {},
      "DrMax": {},
      "PrAllowed": {},
      "RaAllowed": {}
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "ClientRequestToken": "string"
  }'
```

`POST /service-profiles`

Creates a new service profile.

> Body parameter

```json
{
  "Name": "string",
  "LoRaWAN": {
    "AddGwMetadata": {},
    "DrMin": {},
    "DrMax": {},
    "PrAllowed": {},
    "RaAllowed": {}
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "ClientRequestToken": "string"
}
```

<h3 id="createserviceprofile-parameters">Parameters</h3>

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
|» Name|body|string|false|The name of the new resource.|
|» LoRaWAN|body|object|false|LoRaWANServiceProfile object.|
|» » AddGwMetadata|body|object|false|none|
|» » DrMin|body|object|false|none|
|» » DrMax|body|object|false|none|
|» » PrAllowed|body|object|false|none|
|» » RaAllowed|body|object|false|none|
|» Tags|body|[[Tag](#schematag)]|false|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|
|» ClientRequestToken|body|string|false|Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.|

> Example responses

> 201 Response

```json
{
  "Arn": {},
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

<h3 id="createserviceprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateServiceProfileResponse](#schemacreateserviceprofileresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWirelessDevices

<a id="opIdListWirelessDevices"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-devices \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /wireless-devices`

Lists the wireless devices registered to your AWS account.

<h3 id="listwirelessdevices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return in this operation.|
|nextToken|query|string|false|To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.|
|destinationName|query|string|false|A filter to list only the wireless devices that use this destination.|
|deviceProfileId|query|string|false|A filter to list only the wireless devices that use this device profile.|
|serviceProfileId|query|string|false|A filter to list only the wireless devices that use this service profile.|
|wirelessDeviceType|query|string|false|A filter to list only the wireless devices that use this wireless device type.|
|fuotaTaskId|query|string|false|none|
|multicastGroupId|query|string|false|none|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
|wirelessDeviceType|Sidewalk|
|wirelessDeviceType|LoRaWAN|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "WirelessDeviceList": {}
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

<h3 id="listwirelessdevices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWirelessDevicesResponse](#schemalistwirelessdevicesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWirelessDevice

<a id="opIdCreateWirelessDevice"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-devices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Type": "Sidewalk",
    "Name": "string",
    "Description": "string",
    "DestinationName": "string",
    "ClientRequestToken": "string",
    "LoRaWAN": {
      "DevEui": {},
      "DeviceProfileId": {},
      "ServiceProfileId": {},
      "OtaaV1_1": {
        "AppKey": {},
        "NwkKey": {},
        "JoinEui": {}
      },
      "OtaaV1_0_x": {
        "AppKey": {},
        "AppEui": {},
        "GenAppKey": {}
      },
      "AbpV1_1": {
        "DevAddr": {},
        "SessionKeys": {
          "FNwkSIntKey": {},
          "SNwkSIntKey": {},
          "NwkSEncKey": {},
          "AppSKey": {}
        },
        "FCntStart": {}
      },
      "AbpV1_0_x": {
        "DevAddr": {},
        "SessionKeys": {
          "NwkSKey": {},
          "AppSKey": {}
        },
        "FCntStart": {}
      },
      "FPorts": {
        "Fuota": 1,
        "Multicast": 1,
        "ClockSync": 1,
        "Positioning": {
          "ClockSync": 1,
          "Stream": 1,
          "Gnss": 1
        },
        "Applications": {}
      }
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "Positioning": "Enabled",
    "Sidewalk": {
      "DeviceProfileId": {}
    }
  }'
```

`POST /wireless-devices`

Provisions a wireless device.

> Body parameter

```json
{
  "Type": "Sidewalk",
  "Name": "string",
  "Description": "string",
  "DestinationName": "string",
  "ClientRequestToken": "string",
  "LoRaWAN": {
    "DevEui": {},
    "DeviceProfileId": {},
    "ServiceProfileId": {},
    "OtaaV1_1": {
      "AppKey": {},
      "NwkKey": {},
      "JoinEui": {}
    },
    "OtaaV1_0_x": {
      "AppKey": {},
      "AppEui": {},
      "GenAppKey": {}
    },
    "AbpV1_1": {
      "DevAddr": {},
      "SessionKeys": {
        "FNwkSIntKey": {},
        "SNwkSIntKey": {},
        "NwkSEncKey": {},
        "AppSKey": {}
      },
      "FCntStart": {}
    },
    "AbpV1_0_x": {
      "DevAddr": {},
      "SessionKeys": {
        "NwkSKey": {},
        "AppSKey": {}
      },
      "FCntStart": {}
    },
    "FPorts": {
      "Fuota": 1,
      "Multicast": 1,
      "ClockSync": 1,
      "Positioning": {
        "ClockSync": 1,
        "Stream": 1,
        "Gnss": 1
      },
      "Applications": {}
    }
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "Positioning": "Enabled",
  "Sidewalk": {
    "DeviceProfileId": {}
  }
}
```

<h3 id="createwirelessdevice-parameters">Parameters</h3>

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
|» Type|body|string|true|The wireless device type.|
|» Name|body|string|false|The name of the new resource.|
|» Description|body|string|false|The description of the new resource.|
|» DestinationName|body|string|true|The name of the destination to assign to the new wireless device.|
|» ClientRequestToken|body|string|false|Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.|
|» LoRaWAN|body|object|false|LoRaWAN object for create functions.|
|» » DevEui|body|object|false|none|
|» » DeviceProfileId|body|object|false|none|
|» » ServiceProfileId|body|object|false|none|
|» » OtaaV1_1|body|object|false|none|
|» » » AppKey|body|object|false|none|
|» » » NwkKey|body|object|false|none|
|» » » JoinEui|body|object|false|none|
|» » OtaaV1_0_x|body|object|false|none|
|» » » AppKey|body|object|false|none|
|» » » AppEui|body|object|false|none|
|» » » GenAppKey|body|object|false|none|
|» » AbpV1_1|body|object|false|none|
|» » » DevAddr|body|object|false|none|
|» » » SessionKeys|body|object|false|none|
|» » » » FNwkSIntKey|body|object|false|none|
|» » » » SNwkSIntKey|body|object|false|none|
|» » » » NwkSEncKey|body|object|false|none|
|» » » » AppSKey|body|object|false|none|
|» » » FCntStart|body|object|false|none|
|» » AbpV1_0_x|body|object|false|none|
|» » » DevAddr|body|object|false|none|
|» » » SessionKeys|body|object|false|none|
|» » » » NwkSKey|body|object|false|none|
|» » » » AppSKey|body|object|false|none|
|» » » FCntStart|body|object|false|none|
|» » FPorts|body|[FPorts](#schemafports)|false|List of FPort assigned for different LoRaWAN application packages to use|
|» Tags|body|[[Tag](#schematag)]|false|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|
|» Positioning|body|string|false|FPort values for the GNSS, stream, and ClockSync functions of the positioning information.|
|» Sidewalk|body|object|false|Sidewalk object for creating a wireless device.|
|» » DeviceProfileId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|Sidewalk|
|» Type|LoRaWAN|
|» Positioning|Enabled|
|» Positioning|Disabled|

> Example responses

> 201 Response

```json
{
  "Arn": {},
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

<h3 id="createwirelessdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateWirelessDeviceResponse](#schemacreatewirelessdeviceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWirelessGateways

<a id="opIdListWirelessGateways"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-gateways \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /wireless-gateways`

Lists the wireless gateways registered to your AWS account.

<h3 id="listwirelessgateways-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.|
|maxResults|query|integer|false|The maximum number of results to return in this operation.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "NextToken": {},
  "WirelessGatewayList": {}
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

<h3 id="listwirelessgateways-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWirelessGatewaysResponse](#schemalistwirelessgatewaysresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWirelessGateway

<a id="opIdCreateWirelessGateway"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-gateways \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "LoRaWAN": {
      "GatewayEui": {},
      "RfRegion": {},
      "JoinEuiFilters": [
        [
          "string",
          "string"
        ]
      ],
      "NetIdFilters": [
        "string"
      ],
      "SubBands": [
        1
      ],
      "Beaconing": {
        "DataRate": {},
        "Frequencies": {}
      },
      "MaxEirp": {}
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "ClientRequestToken": "string"
  }'
```

`POST /wireless-gateways`

Provisions a wireless gateway.

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "LoRaWAN": {
    "GatewayEui": {},
    "RfRegion": {},
    "JoinEuiFilters": [
      [
        "string",
        "string"
      ]
    ],
    "NetIdFilters": [
      "string"
    ],
    "SubBands": [
      1
    ],
    "Beaconing": {
      "DataRate": {},
      "Frequencies": {}
    },
    "MaxEirp": {}
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "ClientRequestToken": "string"
}
```

<h3 id="createwirelessgateway-parameters">Parameters</h3>

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
|» Name|body|string|false|The name of the new resource.|
|» Description|body|string|false|The description of the new resource.|
|» LoRaWAN|body|object|true|LoRaWANGateway object.|
|» » GatewayEui|body|object|false|none|
|» » RfRegion|body|object|false|none|
|» » JoinEuiFilters|body|[JoinEuiFilters](#schemajoineuifilters)|false|A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.|
|» » NetIdFilters|body|[NetIdFilters](#schemanetidfilters)|false|A list of NetId values that are used by LoRa gateways to filter the uplink frames.|
|» » SubBands|body|[SubBands](#schemasubbands)|false|A list of integer indicating which sub bands are supported by LoRa gateway.|
|» » Beaconing|body|object|false|none|
|» » » DataRate|body|object|false|none|
|» » » Frequencies|body|object|false|none|
|» » MaxEirp|body|object|false|none|
|» Tags|body|[[Tag](#schematag)]|false|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|
|» ClientRequestToken|body|string|false|Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.|

> Example responses

> 201 Response

```json
{
  "Arn": {},
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

<h3 id="createwirelessgateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateWirelessGatewayResponse](#schemacreatewirelessgatewayresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWirelessGatewayTask

<a id="opIdGetWirelessGatewayTask"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-gateways/string/tasks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /wireless-gateways/{Id}/tasks`

Gets information about a wireless gateway task.

<h3 id="getwirelessgatewaytask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to get.|
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
  "WirelessGatewayId": {},
  "WirelessGatewayTaskDefinitionId": {},
  "LastUplinkReceivedAt": {},
  "TaskCreatedAt": {},
  "Status": {}
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

<h3 id="getwirelessgatewaytask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWirelessGatewayTaskResponse](#schemagetwirelessgatewaytaskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWirelessGatewayTask

<a id="opIdCreateWirelessGatewayTask"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-gateways/string/tasks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "WirelessGatewayTaskDefinitionId": "string"
  }'
```

`POST /wireless-gateways/{Id}/tasks`

Creates a task for a wireless gateway.

> Body parameter

```json
{
  "WirelessGatewayTaskDefinitionId": "string"
}
```

<h3 id="createwirelessgatewaytask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» WirelessGatewayTaskDefinitionId|body|string|true|The ID of the WirelessGatewayTaskDefinition.|

> Example responses

> 201 Response

```json
{
  "WirelessGatewayTaskDefinitionId": {},
  "Status": {}
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

<h3 id="createwirelessgatewaytask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateWirelessGatewayTaskResponse](#schemacreatewirelessgatewaytaskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWirelessGatewayTask

<a id="opIdDeleteWirelessGatewayTask"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-gateways/string/tasks \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /wireless-gateways/{Id}/tasks`

Deletes a wireless gateway task.

<h3 id="deletewirelessgatewaytask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to delete.|
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

<h3 id="deletewirelessgatewaytask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteWirelessGatewayTaskResponse](#schemadeletewirelessgatewaytaskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWirelessGatewayTaskDefinitions

<a id="opIdListWirelessGatewayTaskDefinitions"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-gateway-task-definitions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /wireless-gateway-task-definitions`

List the wireless gateway tasks definitions registered to your AWS account.

<h3 id="listwirelessgatewaytaskdefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return in this operation.|
|nextToken|query|string|false|To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.|
|taskDefinitionType|query|string|false|A filter to list only the wireless gateway task definitions that use this task definition type.|
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
|taskDefinitionType|UPDATE|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "TaskDefinitions": {}
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

<h3 id="listwirelessgatewaytaskdefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWirelessGatewayTaskDefinitionsResponse](#schemalistwirelessgatewaytaskdefinitionsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWirelessGatewayTaskDefinition

<a id="opIdCreateWirelessGatewayTaskDefinition"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-gateway-task-definitions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AutoCreateTasks": true,
    "Name": "string",
    "Update": {
      "UpdateDataSource": {},
      "UpdateDataRole": {},
      "LoRaWAN": {
        "UpdateSignature": {},
        "SigKeyCrc": {},
        "CurrentVersion": {
          "PackageVersion": {},
          "Model": {},
          "Station": {}
        },
        "UpdateVersion": {
          "PackageVersion": {},
          "Model": {},
          "Station": {}
        }
      }
    },
    "ClientRequestToken": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /wireless-gateway-task-definitions`

Creates a gateway task definition.

> Body parameter

```json
{
  "AutoCreateTasks": true,
  "Name": "string",
  "Update": {
    "UpdateDataSource": {},
    "UpdateDataRole": {},
    "LoRaWAN": {
      "UpdateSignature": {},
      "SigKeyCrc": {},
      "CurrentVersion": {
        "PackageVersion": {},
        "Model": {},
        "Station": {}
      },
      "UpdateVersion": {
        "PackageVersion": {},
        "Model": {},
        "Station": {}
      }
    }
  },
  "ClientRequestToken": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createwirelessgatewaytaskdefinition-parameters">Parameters</h3>

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
|» AutoCreateTasks|body|boolean|true|Whether to automatically create tasks using this task definition for all gateways with the specified current version. If <code>false</code>, the task must me created by calling <code>CreateWirelessGatewayTask</code>.|
|» Name|body|string|false|The name of the new resource.|
|» Update|body|object|false|UpdateWirelessGatewayTaskCreate object.|
|» » UpdateDataSource|body|object|false|none|
|» » UpdateDataRole|body|object|false|none|
|» » LoRaWAN|body|object|false|none|
|» » » UpdateSignature|body|object|false|none|
|» » » SigKeyCrc|body|object|false|none|
|» » » CurrentVersion|body|object|false|none|
|» » » » PackageVersion|body|object|false|none|
|» » » » Model|body|object|false|none|
|» » » » Station|body|object|false|none|
|» » » UpdateVersion|body|object|false|none|
|» » » » PackageVersion|body|object|false|none|
|» » » » Model|body|object|false|none|
|» » » » Station|body|object|false|none|
|» ClientRequestToken|body|string|false|Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.|
|» Tags|body|[[Tag](#schematag)]|false|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|

> Example responses

> 201 Response

```json
{
  "Id": {},
  "Arn": {}
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

<h3 id="createwirelessgatewaytaskdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateWirelessGatewayTaskDefinitionResponse](#schemacreatewirelessgatewaytaskdefinitionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDestination

<a id="opIdGetDestination"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/destinations/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /destinations/{Name}`

Gets information about a destination.

<h3 id="getdestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the resource to get.|
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
  "Arn": {},
  "Name": {},
  "Expression": {},
  "ExpressionType": {},
  "Description": {},
  "RoleArn": {}
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

<h3 id="getdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDestinationResponse](#schemagetdestinationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDestination

<a id="opIdDeleteDestination"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/destinations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /destinations/{Name}`

Deletes a destination.

<h3 id="deletedestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the resource to delete.|
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

> 485 Response

```json
null
```

<h3 id="deletedestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteDestinationResponse](#schemadeletedestinationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDestination

<a id="opIdUpdateDestination"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/destinations/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ExpressionType": "RuleName",
    "Expression": "string",
    "Description": "string",
    "RoleArn": "stringstringstringst"
  }'
```

`PATCH /destinations/{Name}`

Updates properties of a destination.

> Body parameter

```json
{
  "ExpressionType": "RuleName",
  "Expression": "string",
  "Description": "string",
  "RoleArn": "stringstringstringst"
}
```

<h3 id="updatedestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The new name of the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ExpressionType|body|string|false|The type of value in <code>Expression</code>.|
|» Expression|body|string|false|The new rule name or topic rule to send messages to.|
|» Description|body|string|false|The description of the new resource.|
|» RoleArn|body|string|false|The ARN of the IAM Role that authorizes the destination.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ExpressionType|RuleName|
|» ExpressionType|MqttTopic|

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

<h3 id="updatedestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdateDestinationResponse](#schemaupdatedestinationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeviceProfile

<a id="opIdGetDeviceProfile"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/device-profiles/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /device-profiles/{Id}`

Gets information about a device profile.

<h3 id="getdeviceprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to get.|
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
  "Arn": {},
  "Name": {},
  "Id": {},
  "LoRaWAN": {
    "SupportsClassB": {},
    "ClassBTimeout": {},
    "PingSlotPeriod": {},
    "PingSlotDr": {},
    "PingSlotFreq": {},
    "SupportsClassC": {},
    "ClassCTimeout": {},
    "MacVersion": {},
    "RegParamsRevision": {},
    "RxDelay1": {},
    "RxDrOffset1": {},
    "RxDataRate2": {},
    "RxFreq2": {},
    "FactoryPresetFreqsList": {},
    "MaxEirp": {},
    "MaxDutyCycle": {},
    "RfRegion": {},
    "SupportsJoin": {},
    "Supports32BitFCnt": {}
  },
  "Sidewalk": {
    "ApplicationServerPublicKey": {},
    "QualificationStatus": {},
    "DakCertificateMetadata": {}
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

<h3 id="getdeviceprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeviceProfileResponse](#schemagetdeviceprofileresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDeviceProfile

<a id="opIdDeleteDeviceProfile"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/device-profiles/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /device-profiles/{Id}`

Deletes a device profile.

<h3 id="deletedeviceprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to delete.|
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

> 485 Response

```json
null
```

<h3 id="deletedeviceprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteDeviceProfileResponse](#schemadeletedeviceprofileresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFuotaTask

<a id="opIdGetFuotaTask"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/fuota-tasks/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /fuota-tasks/{Id}`

Gets information about a FUOTA task.

<h3 id="getfuotatask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
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
  "Arn": "string",
  "Id": "string",
  "Status": "Pending",
  "Name": "string",
  "Description": "string",
  "LoRaWAN": {
    "RfRegion": "string",
    "StartTime": "1970-01-01T00:00:00Z"
  },
  "FirmwareUpdateImage": "string",
  "FirmwareUpdateRole": "string",
  "CreatedAt": "1970-01-01T00:00:00Z",
  "RedundancyPercent": 0,
  "FragmentSizeBytes": 1,
  "FragmentIntervalMS": 1
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

<h3 id="getfuotatask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFuotaTaskResponse](#schemagetfuotataskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartFuotaTask

<a id="opIdStartFuotaTask"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/fuota-tasks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "LoRaWAN": {
      "StartTime": "1970-01-01T00:00:00Z"
    }
  }'
```

`PUT /fuota-tasks/{Id}`

Starts a FUOTA task.

> Body parameter

```json
{
  "LoRaWAN": {
    "StartTime": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="startfuotatask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» LoRaWAN|body|object|false|The LoRaWAN information used to start a FUOTA task.|
|» » StartTime|body|[StartTime](#schemastarttime)|false|Start time of a FUOTA task.|

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

> 485 Response

```json
null
```

<h3 id="startfuotatask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[StartFuotaTaskResponse](#schemastartfuotataskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFuotaTask

<a id="opIdDeleteFuotaTask"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/fuota-tasks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /fuota-tasks/{Id}`

Deletes a FUOTA task.

<h3 id="deletefuotatask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
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

<h3 id="deletefuotatask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteFuotaTaskResponse](#schemadeletefuotataskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFuotaTask

<a id="opIdUpdateFuotaTask"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/fuota-tasks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "LoRaWAN": {
      "RfRegion": "EU868"
    },
    "FirmwareUpdateImage": "string",
    "FirmwareUpdateRole": "string",
    "RedundancyPercent": 0,
    "FragmentSizeBytes": 1,
    "FragmentIntervalMS": 1
  }'
```

`PATCH /fuota-tasks/{Id}`

Updates properties of a FUOTA task.

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "LoRaWAN": {
    "RfRegion": "EU868"
  },
  "FirmwareUpdateImage": "string",
  "FirmwareUpdateRole": "string",
  "RedundancyPercent": 0,
  "FragmentSizeBytes": 1,
  "FragmentIntervalMS": 1
}
```

<h3 id="updatefuotatask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of a FUOTA task.|
|» Description|body|string|false|The description of the new resource.|
|» LoRaWAN|body|object|false|The LoRaWAN information used with a FUOTA task.|
|» » RfRegion|body|[SupportedRfRegion](#schemasupportedrfregion)|false|Supported RfRegions|
|» FirmwareUpdateImage|body|string|false|The S3 URI points to a firmware update image that is to be used with a FUOTA task.|
|» FirmwareUpdateRole|body|string|false|The firmware update role that is to be used with a FUOTA task.|
|» RedundancyPercent|body|integer|false|The percentage of added redundant fragments. For example, if firmware file is 100 bytes and fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.|
|» FragmentSizeBytes|body|integer|false|The size of each fragment in bytes. Currently only supported in fuota tasks with multicast groups.|
|» FragmentIntervalMS|body|integer|false|The interval of sending fragments in milliseconds. Currently the interval will be rounded to the nearest second. Note that this interval only controls the timing when the cloud sends the fragments down. The actual delay of receiving fragments at device side depends on the device's class and the communication delay with the cloud.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » RfRegion|EU868|
|» » RfRegion|US915|
|» » RfRegion|AU915|
|» » RfRegion|AS923-1|
|» » RfRegion|AS923-2|
|» » RfRegion|AS923-3|
|» » RfRegion|AS923-4|
|» » RfRegion|EU433|
|» » RfRegion|CN470|
|» » RfRegion|CN779|
|» » RfRegion|RU864|
|» » RfRegion|KR920|
|» » RfRegion|IN865|

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

> 485 Response

```json
null
```

<h3 id="updatefuotatask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdateFuotaTaskResponse](#schemaupdatefuotataskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMulticastGroup

<a id="opIdGetMulticastGroup"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/multicast-groups/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /multicast-groups/{Id}`

Gets information about a multicast group.

<h3 id="getmulticastgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
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
  "Arn": "string",
  "Id": "string",
  "Name": "string",
  "Description": "string",
  "Status": "string",
  "LoRaWAN": {
    "RfRegion": "EU868",
    "DlClass": "ClassB",
    "NumberOfDevicesRequested": 0,
    "NumberOfDevicesInGroup": 0
  },
  "CreatedAt": "1970-01-01T00:00:00Z"
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

<h3 id="getmulticastgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMulticastGroupResponse](#schemagetmulticastgroupresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMulticastGroup

<a id="opIdDeleteMulticastGroup"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/multicast-groups/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /multicast-groups/{Id}`

Deletes a multicast group if it is not in use by a fuota task.

<h3 id="deletemulticastgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
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

> 485 Response

```json
null
```

<h3 id="deletemulticastgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteMulticastGroupResponse](#schemadeletemulticastgroupresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMulticastGroup

<a id="opIdUpdateMulticastGroup"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/multicast-groups/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "LoRaWAN": {
      "RfRegion": "EU868",
      "DlClass": "ClassB"
    }
  }'
```

`PATCH /multicast-groups/{Id}`

Updates properties of a multicast group session.

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "LoRaWAN": {
    "RfRegion": "EU868",
    "DlClass": "ClassB"
  }
}
```

<h3 id="updatemulticastgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the multicast group.|
|» Description|body|string|false|The description of the new resource.|
|» LoRaWAN|body|object|false|The LoRaWAN information that is to be used with the multicast group.|
|» » RfRegion|body|[SupportedRfRegion](#schemasupportedrfregion)|false|Supported RfRegions|
|» » DlClass|body|[DlClass](#schemadlclass)|false|DlClass for LoRaWAM, valid values are ClassB and ClassC.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » RfRegion|EU868|
|» » RfRegion|US915|
|» » RfRegion|AU915|
|» » RfRegion|AS923-1|
|» » RfRegion|AS923-2|
|» » RfRegion|AS923-3|
|» » RfRegion|AS923-4|
|» » RfRegion|EU433|
|» » RfRegion|CN470|
|» » RfRegion|CN779|
|» » RfRegion|RU864|
|» » RfRegion|KR920|
|» » RfRegion|IN865|
|» » DlClass|ClassB|
|» » DlClass|ClassC|

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

> 485 Response

```json
null
```

<h3 id="updatemulticastgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdateMulticastGroupResponse](#schemaupdatemulticastgroupresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetNetworkAnalyzerConfiguration

<a id="opIdGetNetworkAnalyzerConfiguration"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/network-analyzer-configurations/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /network-analyzer-configurations/{ConfigurationName}`

Get network analyzer configuration.

<h3 id="getnetworkanalyzerconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationName|path|string|true|none|
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
  "TraceContent": {
    "WirelessDeviceFrameInfo": "ENABLED",
    "LogLevel": "INFO"
  },
  "WirelessDevices": {},
  "WirelessGateways": {},
  "Description": "string",
  "Arn": {},
  "Name": "string"
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

<h3 id="getnetworkanalyzerconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetNetworkAnalyzerConfigurationResponse](#schemagetnetworkanalyzerconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteNetworkAnalyzerConfiguration

<a id="opIdDeleteNetworkAnalyzerConfiguration"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/network-analyzer-configurations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /network-analyzer-configurations/{ConfigurationName}`

Deletes a network analyzer configuration.

<h3 id="deletenetworkanalyzerconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationName|path|string|true|none|
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

> 485 Response

```json
null
```

<h3 id="deletenetworkanalyzerconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteNetworkAnalyzerConfigurationResponse](#schemadeletenetworkanalyzerconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateNetworkAnalyzerConfiguration

<a id="opIdUpdateNetworkAnalyzerConfiguration"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/network-analyzer-configurations/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TraceContent": {
      "WirelessDeviceFrameInfo": "ENABLED",
      "LogLevel": "INFO"
    },
    "WirelessDevicesToAdd": [
      "string"
    ],
    "WirelessDevicesToRemove": [
      "string"
    ],
    "WirelessGatewaysToAdd": [
      "string"
    ],
    "WirelessGatewaysToRemove": [
      "string"
    ],
    "Description": "string"
  }'
```

`PATCH /network-analyzer-configurations/{ConfigurationName}`

Update network analyzer configuration.

> Body parameter

```json
{
  "TraceContent": {
    "WirelessDeviceFrameInfo": "ENABLED",
    "LogLevel": "INFO"
  },
  "WirelessDevicesToAdd": [
    "string"
  ],
  "WirelessDevicesToRemove": [
    "string"
  ],
  "WirelessGatewaysToAdd": [
    "string"
  ],
  "WirelessGatewaysToRemove": [
    "string"
  ],
  "Description": "string"
}
```

<h3 id="updatenetworkanalyzerconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationName|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TraceContent|body|object|false|Trace content for your wireless gateway and wireless device resources.|
|» » WirelessDeviceFrameInfo|body|[WirelessDeviceFrameInfo](#schemawirelessdeviceframeinfo)|false| <code>FrameInfo</code> of your wireless device resources for the trace content. Use FrameInfo to debug the communication between your LoRaWAN end devices and the network server.|
|» » LogLevel|body|[LogLevel](#schemaloglevel)|false|The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.|
|» WirelessDevicesToAdd|body|[[WirelessDeviceId](#schemawirelessdeviceid)]|false|Wireless device resources to add to the network analyzer configuration. Provide the <code>WirelessDeviceId</code> of the resource to add in the input array.|
|» WirelessDevicesToRemove|body|[[WirelessDeviceId](#schemawirelessdeviceid)]|false|Wireless device resources to remove from the network analyzer configuration. Provide the <code>WirelessDeviceId</code> of the resources to remove in the input array.|
|» WirelessGatewaysToAdd|body|[[WirelessGatewayId](#schemawirelessgatewayid)]|false|Wireless gateway resources to add to the network analyzer configuration. Provide the <code>WirelessGatewayId</code> of the resource to add in the input array.|
|» WirelessGatewaysToRemove|body|[[WirelessGatewayId](#schemawirelessgatewayid)]|false|Wireless gateway resources to remove from the network analyzer configuration. Provide the <code>WirelessGatewayId</code> of the resources to remove in the input array.|
|» Description|body|string|false|The description of the new resource.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » WirelessDeviceFrameInfo|ENABLED|
|» » WirelessDeviceFrameInfo|DISABLED|
|» » LogLevel|INFO|
|» » LogLevel|ERROR|
|» » LogLevel|DISABLED|

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

<h3 id="updatenetworkanalyzerconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdateNetworkAnalyzerConfigurationResponse](#schemaupdatenetworkanalyzerconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteQueuedMessages

<a id="opIdDeleteQueuedMessages"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/wireless-devices/string/data#messageId?messageId=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /wireless-devices/{Id}/data#messageId`

Remove queued messages from the downlink queue.

<h3 id="deletequeuedmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of a given wireless device for which downlink messages will be deleted.|
|messageId|query|string|true|If message ID is <code>"*"</code>, it cleares the entire downlink queue for a given device, specified by the wireless device ID. Otherwise, the downlink message with the specified message ID will be deleted.|
|WirelessDeviceType|query|string|false|The wireless device type, which can be either Sidewalk or LoRaWAN.|
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
|WirelessDeviceType|Sidewalk|
|WirelessDeviceType|LoRaWAN|

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

<h3 id="deletequeuedmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteQueuedMessagesResponse](#schemadeletequeuedmessagesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetServiceProfile

<a id="opIdGetServiceProfile"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/service-profiles/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /service-profiles/{Id}`

Gets information about a service profile.

<h3 id="getserviceprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to get.|
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
  "Arn": {},
  "Name": {},
  "Id": {},
  "LoRaWAN": {
    "UlRate": {},
    "UlBucketSize": {},
    "UlRatePolicy": {},
    "DlRate": {},
    "DlBucketSize": {},
    "DlRatePolicy": {},
    "AddGwMetadata": {},
    "DevStatusReqFreq": {},
    "ReportDevStatusBattery": {},
    "ReportDevStatusMargin": {},
    "DrMin": {},
    "DrMax": {},
    "ChannelMask": {},
    "PrAllowed": {},
    "HrAllowed": {},
    "RaAllowed": {},
    "NwkGeoLoc": {},
    "TargetPer": {},
    "MinGwDiversity": {}
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

<h3 id="getserviceprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServiceProfileResponse](#schemagetserviceprofileresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteServiceProfile

<a id="opIdDeleteServiceProfile"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/service-profiles/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /service-profiles/{Id}`

Deletes a service profile.

<h3 id="deleteserviceprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to delete.|
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

> 485 Response

```json
null
```

<h3 id="deleteserviceprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteServiceProfileResponse](#schemadeleteserviceprofileresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWirelessDevice

<a id="opIdDeleteWirelessDevice"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-devices/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /wireless-devices/{Id}`

Deletes a wireless device.

<h3 id="deletewirelessdevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to delete.|
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

<h3 id="deletewirelessdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteWirelessDeviceResponse](#schemadeletewirelessdeviceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateWirelessDevice

<a id="opIdUpdateWirelessDevice"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-devices/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DestinationName": "string",
    "Name": "string",
    "Description": "string",
    "LoRaWAN": {
      "DeviceProfileId": {},
      "ServiceProfileId": {},
      "AbpV1_1": {
        "FCntStart": {}
      },
      "AbpV1_0_x": {
        "FCntStart": {}
      },
      "FPorts": {
        "Positioning": {
          "ClockSync": 1,
          "Stream": 1,
          "Gnss": 1
        },
        "Applications": {}
      }
    },
    "Positioning": "Enabled"
  }'
```

`PATCH /wireless-devices/{Id}`

Updates properties of a wireless device.

> Body parameter

```json
{
  "DestinationName": "string",
  "Name": "string",
  "Description": "string",
  "LoRaWAN": {
    "DeviceProfileId": {},
    "ServiceProfileId": {},
    "AbpV1_1": {
      "FCntStart": {}
    },
    "AbpV1_0_x": {
      "FCntStart": {}
    },
    "FPorts": {
      "Positioning": {
        "ClockSync": 1,
        "Stream": 1,
        "Gnss": 1
      },
      "Applications": {}
    }
  },
  "Positioning": "Enabled"
}
```

<h3 id="updatewirelessdevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DestinationName|body|string|false|The name of the new destination for the device.|
|» Name|body|string|false|The new name of the resource.|
|» Description|body|string|false|The description of the new resource.|
|» LoRaWAN|body|object|false|LoRaWAN object for update functions.|
|» » DeviceProfileId|body|object|false|none|
|» » ServiceProfileId|body|object|false|none|
|» » AbpV1_1|body|object|false|none|
|» » » FCntStart|body|object|false|none|
|» » AbpV1_0_x|body|object|false|none|
|» » » FCntStart|body|object|false|none|
|» » FPorts|body|object|false|none|
|» » » Positioning|body|object|false|none|
|» » » » ClockSync|body|[FPort](#schemafport)|false|The Fport value.|
|» » » » Stream|body|[FPort](#schemafport)|false|The Fport value.|
|» » » » Gnss|body|[FPort](#schemafport)|false|The Fport value.|
|» » » Applications|body|object|false|none|
|» Positioning|body|string|false|FPort values for the GNSS, stream, and ClockSync functions of the positioning information.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Positioning|Enabled|
|» Positioning|Disabled|

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

<h3 id="updatewirelessdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdateWirelessDeviceResponse](#schemaupdatewirelessdeviceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWirelessDeviceImportTask

<a id="opIdGetWirelessDeviceImportTask"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless_device_import_task/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /wireless_device_import_task/{Id}`

Get information about an import task and count of device onboarding summary information for the import task.

<h3 id="getwirelessdeviceimporttask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the import task for which information is requested.|
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
  "Id": {},
  "Arn": {},
  "DestinationName": {},
  "Sidewalk": {
    "DeviceCreationFileList": {},
    "Role": {}
  },
  "CreationTime": {},
  "Status": {},
  "StatusReason": {},
  "InitializedImportedDeviceCount": {},
  "PendingImportedDeviceCount": {},
  "OnboardedImportedDeviceCount": {},
  "FailedImportedDeviceCount": {}
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

<h3 id="getwirelessdeviceimporttask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWirelessDeviceImportTaskResponse](#schemagetwirelessdeviceimporttaskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWirelessDeviceImportTask

<a id="opIdDeleteWirelessDeviceImportTask"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless_device_import_task/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /wireless_device_import_task/{Id}`

Delete an import task.

<h3 id="deletewirelessdeviceimporttask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The unique identifier of the import task to be deleted.|
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

> 485 Response

```json
null
```

<h3 id="deletewirelessdeviceimporttask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteWirelessDeviceImportTaskResponse](#schemadeletewirelessdeviceimporttaskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateWirelessDeviceImportTask

<a id="opIdUpdateWirelessDeviceImportTask"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless_device_import_task/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Sidewalk": {
      "DeviceCreationFile": {}
    }
  }'
```

`PATCH /wireless_device_import_task/{Id}`

Update an import task to add more devices to the task.

> Body parameter

```json
{
  "Sidewalk": {
    "DeviceCreationFile": {}
  }
}
```

<h3 id="updatewirelessdeviceimporttask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the import task to be updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Sidewalk|body|object|true|Sidewalk object information for updating an import task.|
|» » DeviceCreationFile|body|object|false|none|

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

> 485 Response

```json
null
```

<h3 id="updatewirelessdeviceimporttask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdateWirelessDeviceImportTaskResponse](#schemaupdatewirelessdeviceimporttaskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWirelessGateway

<a id="opIdDeleteWirelessGateway"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-gateways/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /wireless-gateways/{Id}`

Deletes a wireless gateway.

<h3 id="deletewirelessgateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to delete.|
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

<h3 id="deletewirelessgateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteWirelessGatewayResponse](#schemadeletewirelessgatewayresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateWirelessGateway

<a id="opIdUpdateWirelessGateway"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-gateways/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "JoinEuiFilters": [
      [
        "string",
        "string"
      ]
    ],
    "NetIdFilters": [
      "string"
    ],
    "MaxEirp": 0
  }'
```

`PATCH /wireless-gateways/{Id}`

Updates properties of a wireless gateway.

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "JoinEuiFilters": [
    [
      "string",
      "string"
    ]
  ],
  "NetIdFilters": [
    "string"
  ],
  "MaxEirp": 0
}
```

<h3 id="updatewirelessgateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The new name of the resource.|
|» Description|body|string|false|The description of the new resource.|
|» JoinEuiFilters|body|[[JoinEuiRange](#schemajoineuirange)]|false|A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.|
|» NetIdFilters|body|[[NetId](#schemanetid)]|false|A list of NetId values that are used by LoRa gateways to filter the uplink frames.|
|» MaxEirp|body|number(float)|false|The MaxEIRP value.|

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

<h3 id="updatewirelessgateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdateWirelessGatewayResponse](#schemaupdatewirelessgatewayresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWirelessGatewayTaskDefinition

<a id="opIdGetWirelessGatewayTaskDefinition"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-gateway-task-definitions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /wireless-gateway-task-definitions/{Id}`

Gets information about a wireless gateway task definition.

<h3 id="getwirelessgatewaytaskdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to get.|
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
  "AutoCreateTasks": {},
  "Name": {},
  "Update": {
    "UpdateDataSource": {},
    "UpdateDataRole": {},
    "LoRaWAN": {
      "UpdateSignature": {},
      "SigKeyCrc": {},
      "CurrentVersion": {
        "PackageVersion": {},
        "Model": {},
        "Station": {}
      },
      "UpdateVersion": {
        "PackageVersion": {},
        "Model": {},
        "Station": {}
      }
    }
  },
  "Arn": {}
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

<h3 id="getwirelessgatewaytaskdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWirelessGatewayTaskDefinitionResponse](#schemagetwirelessgatewaytaskdefinitionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWirelessGatewayTaskDefinition

<a id="opIdDeleteWirelessGatewayTaskDefinition"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-gateway-task-definitions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /wireless-gateway-task-definitions/{Id}`

Deletes a wireless gateway task definition. Deleting this task definition does not affect tasks that are currently in progress.

<h3 id="deletewirelessgatewaytaskdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to delete.|
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

<h3 id="deletewirelessgatewaytaskdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteWirelessGatewayTaskDefinitionResponse](#schemadeletewirelessgatewaytaskdefinitionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterWirelessDevice

<a id="opIdDeregisterWirelessDevice"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-devices/string/deregister \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PATCH /wireless-devices/{Identifier}/deregister`

Deregister a wireless device from AWS IoT Wireless.

<h3 id="deregisterwirelessdevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identifier|path|string|true|The identifier of the wireless device to deregister from AWS IoT Wireless.|
|WirelessDeviceType|query|string|false|The type of wireless device to deregister from AWS IoT Wireless, which can be <code>LoRaWAN</code> or <code>Sidewalk</code>.|
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
|WirelessDeviceType|Sidewalk|
|WirelessDeviceType|LoRaWAN|

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

<h3 id="deregisterwirelessdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterWirelessDeviceResponse](#schemaderegisterwirelessdeviceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPartnerAccount

<a id="opIdGetPartnerAccount"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/partner-accounts/string#partnerType?partnerType=Sidewalk' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /partner-accounts/{PartnerAccountId}#partnerType`

Gets information about a partner account. If <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>, returns all partner accounts.

<h3 id="getpartneraccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PartnerAccountId|path|string|true|The partner account ID to disassociate from the AWS account.|
|partnerType|query|string|true|The partner type.|
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
|partnerType|Sidewalk|

> Example responses

> 200 Response

```json
{
  "Sidewalk": {
    "AmazonId": {},
    "Fingerprint": {},
    "Arn": {}
  },
  "AccountLinked": {}
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

<h3 id="getpartneraccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPartnerAccountResponse](#schemagetpartneraccountresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateAwsAccountFromPartnerAccount

<a id="opIdDisassociateAwsAccountFromPartnerAccount"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/partner-accounts/string#partnerType?partnerType=Sidewalk' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /partner-accounts/{PartnerAccountId}#partnerType`

Disassociates your AWS account from a partner account. If <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>, disassociates your AWS account from all partner accounts.

<h3 id="disassociateawsaccountfrompartneraccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PartnerAccountId|path|string|true|The partner account ID to disassociate from the AWS account.|
|partnerType|query|string|true|The partner type.|
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
|partnerType|Sidewalk|

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

<h3 id="disassociateawsaccountfrompartneraccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DisassociateAwsAccountFromPartnerAccountResponse](#schemadisassociateawsaccountfrompartneraccountresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePartnerAccount

<a id="opIdUpdatePartnerAccount"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/partner-accounts/string#partnerType?partnerType=Sidewalk' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Sidewalk": {
      "AppServerPrivateKey": {}
    }
  }'
```

`PATCH /partner-accounts/{PartnerAccountId}#partnerType`

Updates properties of a partner account.

> Body parameter

```json
{
  "Sidewalk": {
    "AppServerPrivateKey": {}
  }
}
```

<h3 id="updatepartneraccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PartnerAccountId|path|string|true|The ID of the partner account to update.|
|partnerType|query|string|true|The partner type.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Sidewalk|body|object|true|Sidewalk update.|
|» » AppServerPrivateKey|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|partnerType|Sidewalk|

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

<h3 id="updatepartneraccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdatePartnerAccountResponse](#schemaupdatepartneraccountresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateMulticastGroupFromFuotaTask

<a id="opIdDisassociateMulticastGroupFromFuotaTask"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/fuota-tasks/string/multicast-groups/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /fuota-tasks/{Id}/multicast-groups/{MulticastGroupId}`

Disassociates a multicast group from a fuota task.

<h3 id="disassociatemulticastgroupfromfuotatask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
|MulticastGroupId|path|string|true|none|
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

<h3 id="disassociatemulticastgroupfromfuotatask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DisassociateMulticastGroupFromFuotaTaskResponse](#schemadisassociatemulticastgroupfromfuotataskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateWirelessDeviceFromFuotaTask

<a id="opIdDisassociateWirelessDeviceFromFuotaTask"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/fuota-tasks/string/wireless-devices/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /fuota-tasks/{Id}/wireless-devices/{WirelessDeviceId}`

Disassociates a wireless device from a FUOTA task.

<h3 id="disassociatewirelessdevicefromfuotatask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
|WirelessDeviceId|path|string|true|none|
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

> 485 Response

```json
null
```

<h3 id="disassociatewirelessdevicefromfuotatask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DisassociateWirelessDeviceFromFuotaTaskResponse](#schemadisassociatewirelessdevicefromfuotataskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateWirelessDeviceFromMulticastGroup

<a id="opIdDisassociateWirelessDeviceFromMulticastGroup"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/multicast-groups/string/wireless-devices/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /multicast-groups/{Id}/wireless-devices/{WirelessDeviceId}`

Disassociates a wireless device from a multicast group.

<h3 id="disassociatewirelessdevicefrommulticastgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
|WirelessDeviceId|path|string|true|none|
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

<h3 id="disassociatewirelessdevicefrommulticastgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DisassociateWirelessDeviceFromMulticastGroupResponse](#schemadisassociatewirelessdevicefrommulticastgroupresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEventConfigurationByResourceTypes

<a id="opIdGetEventConfigurationByResourceTypes"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/event-configurations-resource-types \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /event-configurations-resource-types`

Get the event configuration based on resource types.

<h3 id="geteventconfigurationbyresourcetypes-parameters">Parameters</h3>

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
  "DeviceRegistrationState": {
    "Sidewalk": {
      "WirelessDeviceEventTopic": {}
    }
  },
  "Proximity": {
    "Sidewalk": {
      "WirelessDeviceEventTopic": {}
    }
  },
  "Join": {
    "LoRaWAN": {
      "WirelessDeviceEventTopic": {}
    }
  },
  "ConnectionStatus": {
    "LoRaWAN": {
      "WirelessGatewayEventTopic": {}
    }
  },
  "MessageDeliveryStatus": {
    "Sidewalk": {
      "WirelessDeviceEventTopic": {}
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

<h3 id="geteventconfigurationbyresourcetypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEventConfigurationByResourceTypesResponse](#schemageteventconfigurationbyresourcetypesresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEventConfigurationByResourceTypes

<a id="opIdUpdateEventConfigurationByResourceTypes"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/event-configurations-resource-types \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DeviceRegistrationState": {
      "Sidewalk": {
        "WirelessDeviceEventTopic": {}
      }
    },
    "Proximity": {
      "Sidewalk": {
        "WirelessDeviceEventTopic": {}
      }
    },
    "Join": {
      "LoRaWAN": {
        "WirelessDeviceEventTopic": {}
      }
    },
    "ConnectionStatus": {
      "LoRaWAN": {
        "WirelessGatewayEventTopic": {}
      }
    },
    "MessageDeliveryStatus": {
      "Sidewalk": {
        "WirelessDeviceEventTopic": {}
      }
    }
  }'
```

`PATCH /event-configurations-resource-types`

Update the event configuration based on resource types.

> Body parameter

```json
{
  "DeviceRegistrationState": {
    "Sidewalk": {
      "WirelessDeviceEventTopic": {}
    }
  },
  "Proximity": {
    "Sidewalk": {
      "WirelessDeviceEventTopic": {}
    }
  },
  "Join": {
    "LoRaWAN": {
      "WirelessDeviceEventTopic": {}
    }
  },
  "ConnectionStatus": {
    "LoRaWAN": {
      "WirelessGatewayEventTopic": {}
    }
  },
  "MessageDeliveryStatus": {
    "Sidewalk": {
      "WirelessDeviceEventTopic": {}
    }
  }
}
```

<h3 id="updateeventconfigurationbyresourcetypes-parameters">Parameters</h3>

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
|» DeviceRegistrationState|body|object|false|Device registration state resource type event configuration object for enabling or disabling topic.|
|» » Sidewalk|body|object|false|none|
|» » » WirelessDeviceEventTopic|body|object|false|none|
|» Proximity|body|object|false|Proximity resource type event configuration object for enabling or disabling topic.|
|» » Sidewalk|body|object|false|none|
|» » » WirelessDeviceEventTopic|body|object|false|none|
|» Join|body|object|false|Join resource type event configuration object for enabling or disabling topic.|
|» » LoRaWAN|body|object|false|none|
|» » » WirelessDeviceEventTopic|body|object|false|none|
|» ConnectionStatus|body|object|false|Connection status resource type event configuration object for enabling or disabling topic.|
|» » LoRaWAN|body|object|false|none|
|» » » WirelessGatewayEventTopic|body|object|false|none|
|» MessageDeliveryStatus|body|object|false|Message delivery status resource type event configuration object for enabling or disabling relevant topic.|
|» » Sidewalk|body|[SidewalkResourceTypeEventConfiguration](#schemasidewalkresourcetypeeventconfiguration)|false|Sidewalk resource type event configuration object for enabling or disabling topic.|

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

<h3 id="updateeventconfigurationbyresourcetypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdateEventConfigurationByResourceTypesResponse](#schemaupdateeventconfigurationbyresourcetypesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLogLevelsByResourceTypes

<a id="opIdGetLogLevelsByResourceTypes"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/log-levels \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /log-levels`

Returns current default log levels or log levels by resource types. Based on resource types, log levels can be for wireless device log options or wireless gateway log options.

<h3 id="getloglevelsbyresourcetypes-parameters">Parameters</h3>

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
  "DefaultLogLevel": "INFO",
  "WirelessGatewayLogOptions": [
    {
      "Type": "LoRaWAN",
      "LogLevel": "INFO",
      "Events": [
        {
          "Event": "CUPS_Request",
          "LogLevel": "INFO"
        }
      ]
    }
  ],
  "WirelessDeviceLogOptions": [
    {
      "Type": {},
      "LogLevel": "INFO",
      "Events": [
        {
          "Event": "Join",
          "LogLevel": "INFO"
        }
      ]
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

<h3 id="getloglevelsbyresourcetypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLogLevelsByResourceTypesResponse](#schemagetloglevelsbyresourcetypesresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLogLevelsByResourceTypes

<a id="opIdUpdateLogLevelsByResourceTypes"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/log-levels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DefaultLogLevel": "INFO",
    "WirelessDeviceLogOptions": [
      {
        "Type": {},
        "LogLevel": "INFO",
        "Events": [
          {
            "Event": "Join",
            "LogLevel": "INFO"
          }
        ]
      }
    ],
    "WirelessGatewayLogOptions": [
      {
        "Type": "LoRaWAN",
        "LogLevel": "INFO",
        "Events": [
          {
            "Event": "CUPS_Request",
            "LogLevel": "INFO"
          }
        ]
      }
    ]
  }'
```

`POST /log-levels`

Set default log level, or log levels by resource types. This can be for wireless device log options or wireless gateways log options and is used to control the log messages that'll be displayed in CloudWatch.

> Body parameter

```json
{
  "DefaultLogLevel": "INFO",
  "WirelessDeviceLogOptions": [
    {
      "Type": {},
      "LogLevel": "INFO",
      "Events": [
        {
          "Event": "Join",
          "LogLevel": "INFO"
        }
      ]
    }
  ],
  "WirelessGatewayLogOptions": [
    {
      "Type": "LoRaWAN",
      "LogLevel": "INFO",
      "Events": [
        {
          "Event": "CUPS_Request",
          "LogLevel": "INFO"
        }
      ]
    }
  ]
}
```

<h3 id="updateloglevelsbyresourcetypes-parameters">Parameters</h3>

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
|» DefaultLogLevel|body|string|false|The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.|
|» WirelessDeviceLogOptions|body|[[WirelessDeviceLogOption](#schemawirelessdevicelogoption)]|false|The list of wireless device log options.|
|» WirelessGatewayLogOptions|body|[[WirelessGatewayLogOption](#schemawirelessgatewaylogoption)]|false|The list of wireless gateway log options.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» DefaultLogLevel|INFO|
|» DefaultLogLevel|ERROR|
|» DefaultLogLevel|DISABLED|

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

<h3 id="updateloglevelsbyresourcetypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLogLevelsByResourceTypesResponse](#schemaupdateloglevelsbyresourcetypesresponse)|
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

## ResetAllResourceLogLevels

<a id="opIdResetAllResourceLogLevels"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/log-levels \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /log-levels`

Removes the log-level overrides for all resources; both wireless devices and wireless gateways.

<h3 id="resetallresourceloglevels-parameters">Parameters</h3>

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

<h3 id="resetallresourceloglevels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[ResetAllResourceLogLevelsResponse](#schemaresetallresourceloglevelsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPosition

<a id="opIdGetPosition"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/positions/string#resourceType?resourceType=WirelessDevice' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /positions/{ResourceIdentifier}#resourceType`

<aside class="warning">
This operation is deprecated
</aside>

<p>Get the position information for a given resource.</p> <important> <p>This action is no longer supported. Calls to retrieve the position information should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourcePosition.html">GetResourcePosition</a> API operation instead.</p> </important>

<h3 id="getposition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceIdentifier|path|string|true|Resource identifier used to retrieve the position information.|
|resourceType|query|string|true|Resource type of the resource for which position information is retrieved.|
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
|resourceType|WirelessDevice|
|resourceType|WirelessGateway|

> Example responses

> 200 Response

```json
{
  "Position": {},
  "Accuracy": {
    "HorizontalAccuracy": {},
    "VerticalAccuracy": {}
  },
  "SolverType": {},
  "SolverProvider": {},
  "SolverVersion": {},
  "Timestamp": {}
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

<h3 id="getposition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPositionResponse](#schemagetpositionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePosition

<a id="opIdUpdatePosition"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/positions/string#resourceType?resourceType=WirelessDevice' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Position": [
      0
    ]
  }'
```

`PATCH /positions/{ResourceIdentifier}#resourceType`

<aside class="warning">
This operation is deprecated
</aside>

<p>Update the position information of a resource.</p> <important> <p>This action is no longer supported. Calls to update the position information should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateResourcePosition.html">UpdateResourcePosition</a> API operation instead.</p> </important>

> Body parameter

```json
{
  "Position": [
    0
  ]
}
```

<h3 id="updateposition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceIdentifier|path|string|true|Resource identifier of the resource for which position is updated.|
|resourceType|query|string|true|Resource type of the resource for which position is updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Position|body|[[PositionCoordinateValue](#schemapositioncoordinatevalue)]|true|The position information of the resource.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resourceType|WirelessDevice|
|resourceType|WirelessGateway|

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

<h3 id="updateposition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdatePositionResponse](#schemaupdatepositionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPositionConfiguration

<a id="opIdGetPositionConfiguration"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/position-configurations/string#resourceType?resourceType=WirelessDevice' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /position-configurations/{ResourceIdentifier}#resourceType`

<aside class="warning">
This operation is deprecated
</aside>

<p>Get position configuration for a given resource.</p> <important> <p>This action is no longer supported. Calls to retrieve the position configuration should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourcePosition.html">GetResourcePosition</a> API operation instead.</p> </important>

<h3 id="getpositionconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceIdentifier|path|string|true|Resource identifier used in a position configuration.|
|resourceType|query|string|true|Resource type of the resource for which position configuration is retrieved.|
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
|resourceType|WirelessDevice|
|resourceType|WirelessGateway|

> Example responses

> 200 Response

```json
{
  "Solvers": {
    "SemtechGnss": {
      "Provider": {},
      "Type": {},
      "Status": {},
      "Fec": {}
    }
  },
  "Destination": {}
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

<h3 id="getpositionconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPositionConfigurationResponse](#schemagetpositionconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutPositionConfiguration

<a id="opIdPutPositionConfiguration"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/position-configurations/string#resourceType?resourceType=WirelessDevice' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Solvers": {
      "SemtechGnss": {
        "Status": {},
        "Fec": {}
      }
    },
    "Destination": "string"
  }'
```

`PUT /position-configurations/{ResourceIdentifier}#resourceType`

<aside class="warning">
This operation is deprecated
</aside>

<p>Put position configuration for a given resource.</p> <important> <p>This action is no longer supported. Calls to update the position configuration should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateResourcePosition.html">UpdateResourcePosition</a> API operation instead.</p> </important>

> Body parameter

```json
{
  "Solvers": {
    "SemtechGnss": {
      "Status": {},
      "Fec": {}
    }
  },
  "Destination": "string"
}
```

<h3 id="putpositionconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceIdentifier|path|string|true|Resource identifier used to update the position configuration.|
|resourceType|query|string|true|Resource type of the resource for which you want to update the position configuration.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Solvers|body|object|false|The wrapper for position solver configurations.|
|» » SemtechGnss|body|object|false|none|
|» » » Status|body|object|true|none|
|» » » Fec|body|object|true|none|
|» Destination|body|string|false|The position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resourceType|WirelessDevice|
|resourceType|WirelessGateway|

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

<h3 id="putpositionconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutPositionConfigurationResponse](#schemaputpositionconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPositionEstimate

<a id="opIdGetPositionEstimate"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/position-estimate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "WiFiAccessPoints": [
      {
        "MacAddress": {},
        "Rss": {}
      }
    ],
    "CellTowers": {
      "Gsm": {},
      "Wcdma": {},
      "Tdscdma": {},
      "Lte": {},
      "Cdma": {}
    },
    "Ip": {
      "IpAddress": {}
    },
    "Gnss": {
      "Payload": {},
      "CaptureTime": {},
      "CaptureTimeAccuracy": {},
      "AssistPosition": {},
      "AssistAltitude": {},
      "Use2DSolver": {}
    },
    "Timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /position-estimate`

Get estimated position information as a payload in GeoJSON format. The payload measurement data is resolved using solvers that are provided by third-party vendors.

> Body parameter

```json
{
  "WiFiAccessPoints": [
    {
      "MacAddress": {},
      "Rss": {}
    }
  ],
  "CellTowers": {
    "Gsm": {},
    "Wcdma": {},
    "Tdscdma": {},
    "Lte": {},
    "Cdma": {}
  },
  "Ip": {
    "IpAddress": {}
  },
  "Gnss": {
    "Payload": {},
    "CaptureTime": {},
    "CaptureTimeAccuracy": {},
    "AssistPosition": {},
    "AssistAltitude": {},
    "Use2DSolver": {}
  },
  "Timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="getpositionestimate-parameters">Parameters</h3>

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
|» WiFiAccessPoints|body|[[WiFiAccessPoint](#schemawifiaccesspoint)]|false|Retrieves an estimated device position by resolving WLAN measurement data. The position is resolved using HERE's Wi-Fi based solver.|
|» CellTowers|body|object|false|The cell towers that were used to perform the measurements.|
|» » Gsm|body|object|false|none|
|» » Wcdma|body|object|false|none|
|» » Tdscdma|body|object|false|none|
|» » Lte|body|object|false|none|
|» » Cdma|body|object|false|none|
|» Ip|body|object|false|IP address used for resolving device location.|
|» » IpAddress|body|object|false|none|
|» Gnss|body|object|false|Global navigation satellite system (GNSS) object used for positioning.|
|» » Payload|body|object|false|none|
|» » CaptureTime|body|object|false|none|
|» » CaptureTimeAccuracy|body|object|false|none|
|» » AssistPosition|body|object|false|none|
|» » AssistAltitude|body|object|false|none|
|» » Use2DSolver|body|object|false|none|
|» Timestamp|body|string(date-time)|false|Optional information that specifies the time when the position information will be resolved. It uses the Unix timestamp format. If not specified, the time at which the request was received will be used.|

> Example responses

> 200 Response

```json
{
  "GeoJsonPayload": {}
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

<h3 id="getpositionestimate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPositionEstimateResponse](#schemagetpositionestimateresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourceEventConfiguration

<a id="opIdGetResourceEventConfiguration"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/event-configurations/string#identifierType?identifierType=PartnerAccountId' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /event-configurations/{Identifier}#identifierType`

Get the event configuration for a particular resource identifier.

<h3 id="getresourceeventconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identifier|path|string|true|Resource identifier to opt in for event messaging.|
|identifierType|query|string|true|Identifier type of the particular resource identifier for event configuration.|
|partnerType|query|string|false|Partner type of the resource if the identifier type is <code>PartnerAccountId</code>.|
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
|identifierType|PartnerAccountId|
|identifierType|DevEui|
|identifierType|GatewayEui|
|identifierType|WirelessDeviceId|
|identifierType|WirelessGatewayId|
|partnerType|Sidewalk|

> Example responses

> 200 Response

```json
{
  "DeviceRegistrationState": {
    "Sidewalk": {
      "AmazonIdEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  },
  "Proximity": {
    "Sidewalk": {
      "AmazonIdEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  },
  "Join": {
    "LoRaWAN": {
      "DevEuiEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  },
  "ConnectionStatus": {
    "LoRaWAN": {
      "GatewayEuiEventTopic": {}
    },
    "WirelessGatewayIdEventTopic": {}
  },
  "MessageDeliveryStatus": {
    "Sidewalk": {
      "AmazonIdEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
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

<h3 id="getresourceeventconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourceEventConfigurationResponse](#schemagetresourceeventconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResourceEventConfiguration

<a id="opIdUpdateResourceEventConfiguration"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/event-configurations/string#identifierType?identifierType=PartnerAccountId' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DeviceRegistrationState": {
      "Sidewalk": {
        "AmazonIdEventTopic": {}
      },
      "WirelessDeviceIdEventTopic": {}
    },
    "Proximity": {
      "Sidewalk": {
        "AmazonIdEventTopic": {}
      },
      "WirelessDeviceIdEventTopic": {}
    },
    "Join": {
      "LoRaWAN": {
        "DevEuiEventTopic": {}
      },
      "WirelessDeviceIdEventTopic": {}
    },
    "ConnectionStatus": {
      "LoRaWAN": {
        "GatewayEuiEventTopic": {}
      },
      "WirelessGatewayIdEventTopic": {}
    },
    "MessageDeliveryStatus": {
      "Sidewalk": {
        "AmazonIdEventTopic": {}
      },
      "WirelessDeviceIdEventTopic": {}
    }
  }'
```

`PATCH /event-configurations/{Identifier}#identifierType`

Update the event configuration for a particular resource identifier.

> Body parameter

```json
{
  "DeviceRegistrationState": {
    "Sidewalk": {
      "AmazonIdEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  },
  "Proximity": {
    "Sidewalk": {
      "AmazonIdEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  },
  "Join": {
    "LoRaWAN": {
      "DevEuiEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  },
  "ConnectionStatus": {
    "LoRaWAN": {
      "GatewayEuiEventTopic": {}
    },
    "WirelessGatewayIdEventTopic": {}
  },
  "MessageDeliveryStatus": {
    "Sidewalk": {
      "AmazonIdEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  }
}
```

<h3 id="updateresourceeventconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identifier|path|string|true|Resource identifier to opt in for event messaging.|
|identifierType|query|string|true|Identifier type of the particular resource identifier for event configuration.|
|partnerType|query|string|false|Partner type of the resource if the identifier type is <code>PartnerAccountId</code> |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DeviceRegistrationState|body|object|false|Device registration state event configuration object for enabling and disabling relevant topics.|
|» » Sidewalk|body|object|false|none|
|» » » AmazonIdEventTopic|body|object|false|none|
|» » WirelessDeviceIdEventTopic|body|object|false|none|
|» Proximity|body|object|false|Proximity event configuration object for enabling and disabling relevant topics.|
|» » Sidewalk|body|object|false|none|
|» » » AmazonIdEventTopic|body|object|false|none|
|» » WirelessDeviceIdEventTopic|body|object|false|none|
|» Join|body|object|false|Join event configuration object for enabling or disabling topic.|
|» » LoRaWAN|body|object|false|none|
|» » » DevEuiEventTopic|body|object|false|none|
|» » WirelessDeviceIdEventTopic|body|object|false|none|
|» ConnectionStatus|body|object|false|Connection status event configuration object for enabling or disabling topic.|
|» » LoRaWAN|body|object|false|none|
|» » » GatewayEuiEventTopic|body|object|false|none|
|» » WirelessGatewayIdEventTopic|body|object|false|none|
|» MessageDeliveryStatus|body|object|false|Message delivery status event configuration object for enabling and disabling relevant topics.|
|» » Sidewalk|body|[SidewalkEventNotificationConfigurations](#schemasidewalkeventnotificationconfigurations)|false| <code>SidewalkEventNotificationConfigurations</code> object, which is the event configuration object for Sidewalk-related event topics.|
|» » WirelessDeviceIdEventTopic|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|identifierType|PartnerAccountId|
|identifierType|DevEui|
|identifierType|GatewayEui|
|identifierType|WirelessDeviceId|
|identifierType|WirelessGatewayId|
|partnerType|Sidewalk|

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

> 485 Response

```json
null
```

<h3 id="updateresourceeventconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdateResourceEventConfigurationResponse](#schemaupdateresourceeventconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourceLogLevel

<a id="opIdGetResourceLogLevel"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/log-levels/string#resourceType?resourceType=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /log-levels/{ResourceIdentifier}#resourceType`

Fetches the log-level override, if any, for a given resource-ID and resource-type. It can be used for a wireless device or a wireless gateway.

<h3 id="getresourceloglevel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceIdentifier|path|string|true|none|
|resourceType|query|string|true|The type of the resource, which can be <code>WirelessDevice</code> or <code>WirelessGateway</code>.|
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
  "LogLevel": "INFO"
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

<h3 id="getresourceloglevel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourceLogLevelResponse](#schemagetresourceloglevelresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResourceLogLevel

<a id="opIdPutResourceLogLevel"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/log-levels/string#resourceType?resourceType=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "LogLevel": "INFO"
  }'
```

`PUT /log-levels/{ResourceIdentifier}#resourceType`

Sets the log-level override for a resource-ID and resource-type. This option can be specified for a wireless gateway or a wireless device. A limit of 200 log level override can be set per account.

> Body parameter

```json
{
  "LogLevel": "INFO"
}
```

<h3 id="putresourceloglevel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceIdentifier|path|string|true|none|
|resourceType|query|string|true|The type of the resource, which can be <code>WirelessDevice</code> or <code>WirelessGateway</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» LogLevel|body|string|true|The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» LogLevel|INFO|
|» LogLevel|ERROR|
|» LogLevel|DISABLED|

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

<h3 id="putresourceloglevel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutResourceLogLevelResponse](#schemaputresourceloglevelresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResetResourceLogLevel

<a id="opIdResetResourceLogLevel"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/log-levels/string#resourceType?resourceType=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /log-levels/{ResourceIdentifier}#resourceType`

Removes the log-level override, if any, for a specific resource-ID and resource-type. It can be used for a wireless device or a wireless gateway.

<h3 id="resetresourceloglevel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceIdentifier|path|string|true|none|
|resourceType|query|string|true|The type of the resource, which can be <code>WirelessDevice</code> or <code>WirelessGateway</code>.|
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

<h3 id="resetresourceloglevel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[ResetResourceLogLevelResponse](#schemaresetresourceloglevelresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourcePosition

<a id="opIdGetResourcePosition"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/resource-positions/string#resourceType?resourceType=WirelessDevice' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /resource-positions/{ResourceIdentifier}#resourceType`

Get the position information for a given wireless device or a wireless gateway resource. The position information uses the <a href="https://gisgeography.com/wgs84-world-geodetic-system/"> World Geodetic System (WGS84)</a>.

<h3 id="getresourceposition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceIdentifier|path|string|true|The identifier of the resource for which position information is retrieved. It can be the wireless device ID or the wireless gateway ID, depending on the resource type.|
|resourceType|query|string|true|The type of resource for which position information is retrieved, which can be a wireless device or a wireless gateway.|
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
|resourceType|WirelessDevice|
|resourceType|WirelessGateway|

> Example responses

> 200 Response

```json
{
  "GeoJsonPayload": {}
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

<h3 id="getresourceposition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourcePositionResponse](#schemagetresourcepositionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResourcePosition

<a id="opIdUpdateResourcePosition"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/resource-positions/string#resourceType?resourceType=WirelessDevice' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GeoJsonPayload": "string"
  }'
```

`PATCH /resource-positions/{ResourceIdentifier}#resourceType`

Update the position information of a given wireless device or a wireless gateway resource. The position coordinates are based on the <a href="https://gisgeography.com/wgs84-world-geodetic-system/"> World Geodetic System (WGS84)</a>.

> Body parameter

```json
{
  "GeoJsonPayload": "string"
}
```

<h3 id="updateresourceposition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceIdentifier|path|string|true|The identifier of the resource for which position information is updated. It can be the wireless device ID or the wireless gateway ID, depending on the resource type.|
|resourceType|query|string|true|The type of resource for which position information is updated, which can be a wireless device or a wireless gateway.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» GeoJsonPayload|body|string|false|The position information of the resource, displayed as a JSON payload. The payload uses the GeoJSON format, which a format that's used to encode geographic data structures. For more information, see <a href="https://geojson.org/">GeoJSON</a>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resourceType|WirelessDevice|
|resourceType|WirelessGateway|

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

<h3 id="updateresourceposition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdateResourcePositionResponse](#schemaupdateresourcepositionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetServiceEndpoint

<a id="opIdGetServiceEndpoint"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/service-endpoint \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /service-endpoint`

Gets the account-specific endpoint for Configuration and Update Server (CUPS) protocol or LoRaWAN Network Server (LNS) connections.

<h3 id="getserviceendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceType|query|string|false|The service type for which to get endpoint information about. Can be <code>CUPS</code> for the Configuration and Update Server endpoint, or <code>LNS</code> for the LoRaWAN Network Server endpoint or <code>CLAIM</code> for the global endpoint.|
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
|serviceType|CUPS|
|serviceType|LNS|

> Example responses

> 200 Response

```json
{
  "ServiceType": {},
  "ServiceEndpoint": {},
  "ServerTrust": {}
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

<h3 id="getserviceendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServiceEndpointResponse](#schemagetserviceendpointresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWirelessDevice

<a id="opIdGetWirelessDevice"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/wireless-devices/string#identifierType?identifierType=WirelessDeviceId' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /wireless-devices/{Identifier}#identifierType`

Gets information about a wireless device.

<h3 id="getwirelessdevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identifier|path|string|true|The identifier of the wireless device to get.|
|identifierType|query|string|true|The type of identifier used in <code>identifier</code>.|
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
|identifierType|WirelessDeviceId|
|identifierType|DevEui|
|identifierType|ThingName|
|identifierType|SidewalkManufacturingSn|

> Example responses

> 200 Response

```json
{
  "Type": {},
  "Name": {},
  "Description": {},
  "DestinationName": {},
  "Id": {},
  "Arn": {},
  "ThingName": {},
  "ThingArn": {},
  "LoRaWAN": {
    "DevEui": {},
    "DeviceProfileId": {},
    "ServiceProfileId": {},
    "OtaaV1_1": {
      "AppKey": {},
      "NwkKey": {},
      "JoinEui": {}
    },
    "OtaaV1_0_x": {
      "AppKey": {},
      "AppEui": {},
      "GenAppKey": {}
    },
    "AbpV1_1": {
      "DevAddr": {},
      "SessionKeys": {
        "FNwkSIntKey": {},
        "SNwkSIntKey": {},
        "NwkSEncKey": {},
        "AppSKey": {}
      },
      "FCntStart": {}
    },
    "AbpV1_0_x": {
      "DevAddr": {},
      "SessionKeys": {
        "NwkSKey": {},
        "AppSKey": {}
      },
      "FCntStart": {}
    },
    "FPorts": {
      "Fuota": 1,
      "Multicast": 1,
      "ClockSync": 1,
      "Positioning": {
        "ClockSync": 1,
        "Stream": 1,
        "Gnss": 1
      },
      "Applications": {}
    }
  },
  "Sidewalk": {
    "AmazonId": "string",
    "SidewalkId": {},
    "SidewalkManufacturingSn": {},
    "DeviceCertificates": {},
    "PrivateKeys": {},
    "DeviceProfileId": {},
    "CertificateId": {},
    "Status": {}
  },
  "Positioning": {}
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

<h3 id="getwirelessdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWirelessDeviceResponse](#schemagetwirelessdeviceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWirelessDeviceStatistics

<a id="opIdGetWirelessDeviceStatistics"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-devices/string/statistics \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /wireless-devices/{Id}/statistics`

Gets operating information about a wireless device.

<h3 id="getwirelessdevicestatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the wireless device for which to get the data.|
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
  "WirelessDeviceId": {},
  "LastUplinkReceivedAt": {},
  "LoRaWAN": {
    "DevEui": {},
    "FPort": {},
    "DataRate": {},
    "Frequency": {},
    "Timestamp": {},
    "Gateways": {}
  },
  "Sidewalk": {
    "Rssi": {},
    "BatteryLevel": {},
    "Event": {},
    "DeviceState": {}
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

<h3 id="getwirelessdevicestatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWirelessDeviceStatisticsResponse](#schemagetwirelessdevicestatisticsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWirelessGateway

<a id="opIdGetWirelessGateway"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/wireless-gateways/string#identifierType?identifierType=GatewayEui' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /wireless-gateways/{Identifier}#identifierType`

Gets information about a wireless gateway.

<h3 id="getwirelessgateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identifier|path|string|true|The identifier of the wireless gateway to get.|
|identifierType|query|string|true|The type of identifier used in <code>identifier</code>.|
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
|identifierType|GatewayEui|
|identifierType|WirelessGatewayId|
|identifierType|ThingName|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "Id": {},
  "Description": {},
  "LoRaWAN": {
    "GatewayEui": {},
    "RfRegion": {},
    "JoinEuiFilters": [
      [
        "string",
        "string"
      ]
    ],
    "NetIdFilters": [
      "string"
    ],
    "SubBands": [
      1
    ],
    "Beaconing": {
      "DataRate": {},
      "Frequencies": {}
    },
    "MaxEirp": {}
  },
  "Arn": {},
  "ThingName": {},
  "ThingArn": {}
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

<h3 id="getwirelessgateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWirelessGatewayResponse](#schemagetwirelessgatewayresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWirelessGatewayFirmwareInformation

<a id="opIdGetWirelessGatewayFirmwareInformation"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-gateways/string/firmware-information \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /wireless-gateways/{Id}/firmware-information`

Gets the firmware version and other information about a wireless gateway.

<h3 id="getwirelessgatewayfirmwareinformation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the resource to get.|
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
  "LoRaWAN": {
    "CurrentVersion": {
      "PackageVersion": {},
      "Model": {},
      "Station": {}
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

<h3 id="getwirelessgatewayfirmwareinformation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWirelessGatewayFirmwareInformationResponse](#schemagetwirelessgatewayfirmwareinformationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWirelessGatewayStatistics

<a id="opIdGetWirelessGatewayStatistics"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-gateways/string/statistics \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /wireless-gateways/{Id}/statistics`

Gets operating information about a wireless gateway.

<h3 id="getwirelessgatewaystatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the wireless gateway for which to get the data.|
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
  "WirelessGatewayId": {},
  "LastUplinkReceivedAt": {},
  "ConnectionStatus": {}
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

<h3 id="getwirelessgatewaystatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWirelessGatewayStatisticsResponse](#schemagetwirelessgatewaystatisticsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDevicesForWirelessDeviceImportTask

<a id="opIdListDevicesForWirelessDeviceImportTask"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/wireless_device_import_task#id?id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /wireless_device_import_task#id`

List the Sidewalk devices in an import task and their onboarding status.

<h3 id="listdevicesforwirelessdeviceimporttask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|The identifier of the import task for which wireless devices are listed.|
|maxResults|query|integer|false|none|
|nextToken|query|string|false|To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <code>null</code> to receive the first set of results.|
|status|query|string|false|The status of the devices in the import task.|
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
|status|INITIALIZED|
|status|PENDING|
|status|ONBOARDED|
|status|FAILED|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "DestinationName": {},
  "ImportedWirelessDeviceList": {}
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

<h3 id="listdevicesforwirelessdeviceimporttask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDevicesForWirelessDeviceImportTaskResponse](#schemalistdevicesforwirelessdeviceimporttaskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEventConfigurations

<a id="opIdListEventConfigurations"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/event-configurations#resourceType?resourceType=SidewalkAccount' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /event-configurations#resourceType`

List event configurations where at least one event topic has been enabled.

<h3 id="listeventconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceType|query|string|true|Resource type to filter event configurations.|
|maxResults|query|integer|false|none|
|nextToken|query|string|false|To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.|
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
|resourceType|SidewalkAccount|
|resourceType|WirelessDevice|
|resourceType|WirelessGateway|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "EventConfigurationsList": {}
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

<h3 id="listeventconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEventConfigurationsResponse](#schemalisteventconfigurationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMulticastGroupsByFuotaTask

<a id="opIdListMulticastGroupsByFuotaTask"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/fuota-tasks/string/multicast-groups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /fuota-tasks/{Id}/multicast-groups`

List all multicast groups associated with a fuota task.

<h3 id="listmulticastgroupsbyfuotatask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
|nextToken|query|string|false|To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.|
|maxResults|query|integer|false|none|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "NextToken": {},
  "MulticastGroupList": [
    {
      "Id": "string"
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

<h3 id="listmulticastgroupsbyfuotatask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMulticastGroupsByFuotaTaskResponse](#schemalistmulticastgroupsbyfuotataskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPositionConfigurations

<a id="opIdListPositionConfigurations"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/position-configurations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /position-configurations`

<aside class="warning">
This operation is deprecated
</aside>

<p>List position configurations for a given resource, such as positioning solvers.</p> <important> <p>This action is no longer supported. Calls to retrieve position information should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourcePosition.html">GetResourcePosition</a> API operation instead.</p> </important>

<h3 id="listpositionconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceType|query|string|false|Resource type for which position configurations are listed.|
|maxResults|query|integer|false|none|
|nextToken|query|string|false|To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
|resourceType|WirelessDevice|
|resourceType|WirelessGateway|

> Example responses

> 200 Response

```json
{
  "PositionConfigurationList": {},
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

<h3 id="listpositionconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPositionConfigurationsResponse](#schemalistpositionconfigurationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListQueuedMessages

<a id="opIdListQueuedMessages"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-devices/string/data \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /wireless-devices/{Id}/data`

List queued messages in the downlink queue.

<h3 id="listqueuedmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of a given wireless device which the downlink message packets are being sent.|
|nextToken|query|string|false|To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.|
|maxResults|query|integer|false|The maximum number of results to return in this operation.|
|WirelessDeviceType|query|string|false|The wireless device type, whic can be either Sidewalk or LoRaWAN.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
|WirelessDeviceType|Sidewalk|
|WirelessDeviceType|LoRaWAN|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "DownlinkQueueMessagesList": {}
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

<h3 id="listqueuedmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListQueuedMessagesResponse](#schemalistqueuedmessagesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendDataToWirelessDevice

<a id="opIdSendDataToWirelessDevice"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-devices/string/data \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TransmitMode": 0,
    "PayloadData": "string",
    "WirelessMetadata": {
      "LoRaWAN": {
        "FPort": 1,
        "ParticipatingGateways": {
          "DownlinkMode": {},
          "GatewayList": {},
          "TransmissionInterval": {}
        }
      },
      "Sidewalk": {
        "Seq": {},
        "MessageType": "CUSTOM_COMMAND_ID_NOTIFY",
        "AckModeRetryDurationSecs": {}
      }
    }
  }'
```

`POST /wireless-devices/{Id}/data`

Sends a decrypted application data frame to a device.

> Body parameter

```json
{
  "TransmitMode": 0,
  "PayloadData": "string",
  "WirelessMetadata": {
    "LoRaWAN": {
      "FPort": 1,
      "ParticipatingGateways": {
        "DownlinkMode": {},
        "GatewayList": {},
        "TransmissionInterval": {}
      }
    },
    "Sidewalk": {
      "Seq": {},
      "MessageType": "CUSTOM_COMMAND_ID_NOTIFY",
      "AckModeRetryDurationSecs": {}
    }
  }
}
```

<h3 id="senddatatowirelessdevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the wireless device to receive the data.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TransmitMode|body|integer|true|The transmit mode to use to send data to the wireless device. Can be: <code>0</code> for UM (unacknowledge mode) or <code>1</code> for AM (acknowledge mode).|
|» PayloadData|body|string|true|The binary to be sent to the end device, encoded in base64.|
|» WirelessMetadata|body|object|false|WirelessMetadata object.|
|» » LoRaWAN|body|object|false|none|
|» » » FPort|body|[FPort](#schemafport)|false|The Fport value.|
|» » » ParticipatingGateways|body|object|false|none|
|» » » » DownlinkMode|body|object|true|none|
|» » » » GatewayList|body|object|true|none|
|» » » » TransmissionInterval|body|object|true|none|
|» » Sidewalk|body|object|false|none|
|» » » Seq|body|object|false|none|
|» » » MessageType|body|[MessageType](#schemamessagetype)|false|Sidewalk device message type. Default value is <code>CUSTOM_COMMAND_ID_NOTIFY</code>.|
|» » » AckModeRetryDurationSecs|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » MessageType|CUSTOM_COMMAND_ID_NOTIFY|
|» » » MessageType|CUSTOM_COMMAND_ID_GET|
|» » » MessageType|CUSTOM_COMMAND_ID_SET|
|» » » MessageType|CUSTOM_COMMAND_ID_RESP|

> Example responses

> 202 Response

```json
{
  "MessageId": {}
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

<h3 id="senddatatowirelessdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[SendDataToWirelessDeviceResponse](#schemasenddatatowirelessdeviceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/tags#resourceArn?resourceArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags#resourceArn`

Lists the tags (metadata) you have assigned to the resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The ARN of the resource for which you want to list tags.|
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

> 484 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/tags#resourceArn?resourceArn=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /tags#resourceArn`

Adds a tag to a resource.

> Body parameter

```json
{
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
|resourceArn|query|string|true|The ARN of the resource to add tags to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|[[Tag](#schematag)]|true|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|

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

> 485 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWirelessDeviceImportTasks

<a id="opIdListWirelessDeviceImportTasks"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless_device_import_tasks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /wireless_device_import_tasks`

List wireless devices that have been added to an import task.

<h3 id="listwirelessdeviceimporttasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|none|
|nextToken|query|string|false|To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <code>null</code> to receive the first set of results.|
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
  "NextToken": {},
  "WirelessDeviceImportTaskList": {}
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

<h3 id="listwirelessdeviceimporttasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWirelessDeviceImportTasksResponse](#schemalistwirelessdeviceimporttasksresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendDataToMulticastGroup

<a id="opIdSendDataToMulticastGroup"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/multicast-groups/string/data \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "PayloadData": "string",
    "WirelessMetadata": {
      "LoRaWAN": {
        "FPort": 1
      }
    }
  }'
```

`POST /multicast-groups/{Id}/data`

Sends the specified data to a multicast group.

> Body parameter

```json
{
  "PayloadData": "string",
  "WirelessMetadata": {
    "LoRaWAN": {
      "FPort": 1
    }
  }
}
```

<h3 id="senddatatomulticastgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» PayloadData|body|string|true|The binary to be sent to the end device, encoded in base64.|
|» WirelessMetadata|body|object|true|Wireless metadata that is to be sent to multicast group.|
|» » LoRaWAN|body|[LoRaWANMulticastMetadata](#schemalorawanmulticastmetadata)|false|The metadata information of the LoRaWAN multicast group.|

> Example responses

> 201 Response

```json
{
  "MessageId": "string"
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

<h3 id="senddatatomulticastgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[SendDataToMulticastGroupResponse](#schemasenddatatomulticastgroupresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartBulkDisassociateWirelessDeviceFromMulticastGroup

<a id="opIdStartBulkDisassociateWirelessDeviceFromMulticastGroup"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/multicast-groups/string/bulk \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "QueryString": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /multicast-groups/{Id}/bulk`

Starts a bulk disassociatin of all qualifying wireless devices from a multicast group.

> Body parameter

```json
{
  "QueryString": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="startbulkdisassociatewirelessdevicefrommulticastgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» QueryString|body|string|false|Query string used to search for wireless devices as part of the bulk associate and disassociate process.|
|» Tags|body|[[Tag](#schematag)]|false|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|

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

<h3 id="startbulkdisassociatewirelessdevicefrommulticastgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse](#schemastartbulkdisassociatewirelessdevicefrommulticastgroupresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartBulkAssociateWirelessDeviceWithMulticastGroup

<a id="opIdStartBulkAssociateWirelessDeviceWithMulticastGroup"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/multicast-groups/string/bulk \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "QueryString": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`PATCH /multicast-groups/{Id}/bulk`

Starts a bulk association of all qualifying wireless devices with a multicast group.

> Body parameter

```json
{
  "QueryString": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="startbulkassociatewirelessdevicewithmulticastgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» QueryString|body|string|false|Query string used to search for wireless devices as part of the bulk associate and disassociate process.|
|» Tags|body|[[Tag](#schematag)]|false|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|

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

<h3 id="startbulkassociatewirelessdevicewithmulticastgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[StartBulkAssociateWirelessDeviceWithMulticastGroupResponse](#schemastartbulkassociatewirelessdevicewithmulticastgroupresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartSingleWirelessDeviceImportTask

<a id="opIdStartSingleWirelessDeviceImportTask"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless_single_device_import_task \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DestinationName": "string",
    "ClientRequestToken": "string",
    "DeviceName": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "Sidewalk": {
      "SidewalkManufacturingSn": {}
    }
  }'
```

`POST /wireless_single_device_import_task`

Start import task for a single wireless device.

> Body parameter

```json
{
  "DestinationName": "string",
  "ClientRequestToken": "string",
  "DeviceName": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "Sidewalk": {
    "SidewalkManufacturingSn": {}
  }
}
```

<h3 id="startsinglewirelessdeviceimporttask-parameters">Parameters</h3>

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
|» DestinationName|body|string|true|The name of the Sidewalk destination that describes the IoT rule to route messages from the device in the import task that will be onboarded to AWS IoT Wireless.|
|» ClientRequestToken|body|string|false|Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.|
|» DeviceName|body|string|false|The name of the wireless device for which an import task is being started.|
|» Tags|body|[[Tag](#schematag)]|false|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|
|» Sidewalk|body|object|true|Information about an import task created for an individual Sidewalk device.|
|» » SidewalkManufacturingSn|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "Id": {},
  "Arn": {}
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

<h3 id="startsinglewirelessdeviceimporttask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[StartSingleWirelessDeviceImportTaskResponse](#schemastartsinglewirelessdeviceimporttaskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartWirelessDeviceImportTask

<a id="opIdStartWirelessDeviceImportTask"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless_device_import_task \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DestinationName": "string",
    "ClientRequestToken": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "Sidewalk": {
      "DeviceCreationFile": {},
      "Role": {}
    }
  }'
```

`POST /wireless_device_import_task`

Start import task for provisioning Sidewalk devices in bulk using an S3 CSV file.

> Body parameter

```json
{
  "DestinationName": "string",
  "ClientRequestToken": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "Sidewalk": {
    "DeviceCreationFile": {},
    "Role": {}
  }
}
```

<h3 id="startwirelessdeviceimporttask-parameters">Parameters</h3>

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
|» DestinationName|body|string|true|The name of the Sidewalk destination that describes the IoT rule to route messages from the devices in the import task that are onboarded to AWS IoT Wireless.|
|» ClientRequestToken|body|string|false|Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.|
|» Tags|body|[[Tag](#schematag)]|false|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|
|» Sidewalk|body|object|true|Information about an import task created for bulk provisioning.|
|» » DeviceCreationFile|body|object|false|none|
|» » Role|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "Id": {},
  "Arn": {}
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

<h3 id="startwirelessdeviceimporttask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[StartWirelessDeviceImportTaskResponse](#schemastartwirelessdeviceimporttaskresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TestWirelessDevice

<a id="opIdTestWirelessDevice"></a>

> Code samples

```bash
curl https://iotwireless.us-east-1.amazonaws.com/wireless-devices/string/test \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /wireless-devices/{Id}/test`

Simulates a provisioned device by sending an uplink data payload of <code>Hello</code>.

<h3 id="testwirelessdevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the wireless device to test.|
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
  "Result": {}
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

<h3 id="testwirelessdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestWirelessDeviceResponse](#schematestwirelessdeviceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://iotwireless.us-east-1.amazonaws.com/tags#resourceArn&tagKeys?resourceArn=string&tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags#resourceArn&tagKeys`

Removes one or more tags from a resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The ARN of the resource to remove tags from.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|A list of the keys of the tags to remove from the resource.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateAwsAccountWithPartnerAccountResponse">AssociateAwsAccountWithPartnerAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateawsaccountwithpartneraccountresponse"></a>
<a id="schema_AssociateAwsAccountWithPartnerAccountResponse"></a>
<a id="tocSassociateawsaccountwithpartneraccountresponse"></a>
<a id="tocsassociateawsaccountwithpartneraccountresponse"></a>

```json
{
  "Sidewalk": {
    "AmazonId": {},
    "AppServerPrivateKey": {}
  },
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sidewalk|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_AmazonId">AmazonId</h2>
<!-- backwards compatibility -->
<a id="schemaamazonid"></a>
<a id="schema_AmazonId"></a>
<a id="tocSamazonid"></a>
<a id="tocsamazonid"></a>

```json
"string"
```

The Sidewalk Amazon ID.

<h2 id="tocS_AppServerPrivateKey">AppServerPrivateKey</h2>
<!-- backwards compatibility -->
<a id="schemaappserverprivatekey"></a>
<a id="schema_AppServerPrivateKey"></a>
<a id="tocSappserverprivatekey"></a>
<a id="tocsappserverprivatekey"></a>

```json
"password"
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

A simple label consisting of a customer-defined key-value pair

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

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

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

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

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_AssociateMulticastGroupWithFuotaTaskResponse">AssociateMulticastGroupWithFuotaTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatemulticastgroupwithfuotataskresponse"></a>
<a id="schema_AssociateMulticastGroupWithFuotaTaskResponse"></a>
<a id="tocSassociatemulticastgroupwithfuotataskresponse"></a>
<a id="tocsassociatemulticastgroupwithfuotataskresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateWirelessDeviceWithFuotaTaskResponse">AssociateWirelessDeviceWithFuotaTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatewirelessdevicewithfuotataskresponse"></a>
<a id="schema_AssociateWirelessDeviceWithFuotaTaskResponse"></a>
<a id="tocSassociatewirelessdevicewithfuotataskresponse"></a>
<a id="tocsassociatewirelessdevicewithfuotataskresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateWirelessDeviceWithMulticastGroupResponse">AssociateWirelessDeviceWithMulticastGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatewirelessdevicewithmulticastgroupresponse"></a>
<a id="schema_AssociateWirelessDeviceWithMulticastGroupResponse"></a>
<a id="tocSassociatewirelessdevicewithmulticastgroupresponse"></a>
<a id="tocsassociatewirelessdevicewithmulticastgroupresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateWirelessDeviceWithThingResponse">AssociateWirelessDeviceWithThingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatewirelessdevicewiththingresponse"></a>
<a id="schema_AssociateWirelessDeviceWithThingResponse"></a>
<a id="tocSassociatewirelessdevicewiththingresponse"></a>
<a id="tocsassociatewirelessdevicewiththingresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateWirelessGatewayWithCertificateResponse">AssociateWirelessGatewayWithCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatewirelessgatewaywithcertificateresponse"></a>
<a id="schema_AssociateWirelessGatewayWithCertificateResponse"></a>
<a id="tocSassociatewirelessgatewaywithcertificateresponse"></a>
<a id="tocsassociatewirelessgatewaywithcertificateresponse"></a>

```json
{
  "IotCertificateId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IotCertificateId|object|false|none|none|

<h2 id="tocS_AssociateWirelessGatewayWithThingResponse">AssociateWirelessGatewayWithThingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatewirelessgatewaywiththingresponse"></a>
<a id="schema_AssociateWirelessGatewayWithThingResponse"></a>
<a id="tocSassociatewirelessgatewaywiththingresponse"></a>
<a id="tocsassociatewirelessgatewaywiththingresponse"></a>

```json
{}
```

<h2 id="tocS_CancelMulticastGroupSessionResponse">CancelMulticastGroupSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelmulticastgroupsessionresponse"></a>
<a id="schema_CancelMulticastGroupSessionResponse"></a>
<a id="tocScancelmulticastgroupsessionresponse"></a>
<a id="tocscancelmulticastgroupsessionresponse"></a>

```json
{}
```

<h2 id="tocS_CreateDestinationResponse">CreateDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedestinationresponse"></a>
<a id="schema_CreateDestinationResponse"></a>
<a id="tocScreatedestinationresponse"></a>
<a id="tocscreatedestinationresponse"></a>

```json
{
  "Arn": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_CreateDeviceProfileResponse">CreateDeviceProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeviceprofileresponse"></a>
<a id="schema_CreateDeviceProfileResponse"></a>
<a id="tocScreatedeviceprofileresponse"></a>
<a id="tocscreatedeviceprofileresponse"></a>

```json
{
  "Arn": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Id|object|false|none|none|

<h2 id="tocS_SupportsClassB">SupportsClassB</h2>
<!-- backwards compatibility -->
<a id="schemasupportsclassb"></a>
<a id="schema_SupportsClassB"></a>
<a id="tocSsupportsclassb"></a>
<a id="tocssupportsclassb"></a>

```json
true
```

<h2 id="tocS_ClassBTimeout">ClassBTimeout</h2>
<!-- backwards compatibility -->
<a id="schemaclassbtimeout"></a>
<a id="schema_ClassBTimeout"></a>
<a id="tocSclassbtimeout"></a>
<a id="tocsclassbtimeout"></a>

```json
0
```

<h2 id="tocS_PingSlotPeriod">PingSlotPeriod</h2>
<!-- backwards compatibility -->
<a id="schemapingslotperiod"></a>
<a id="schema_PingSlotPeriod"></a>
<a id="tocSpingslotperiod"></a>
<a id="tocspingslotperiod"></a>

```json
32
```

<h2 id="tocS_PingSlotDr">PingSlotDr</h2>
<!-- backwards compatibility -->
<a id="schemapingslotdr"></a>
<a id="schema_PingSlotDr"></a>
<a id="tocSpingslotdr"></a>
<a id="tocspingslotdr"></a>

```json
0
```

<h2 id="tocS_PingSlotFreq">PingSlotFreq</h2>
<!-- backwards compatibility -->
<a id="schemapingslotfreq"></a>
<a id="schema_PingSlotFreq"></a>
<a id="tocSpingslotfreq"></a>
<a id="tocspingslotfreq"></a>

```json
1000000
```

<h2 id="tocS_SupportsClassC">SupportsClassC</h2>
<!-- backwards compatibility -->
<a id="schemasupportsclassc"></a>
<a id="schema_SupportsClassC"></a>
<a id="tocSsupportsclassc"></a>
<a id="tocssupportsclassc"></a>

```json
true
```

<h2 id="tocS_ClassCTimeout">ClassCTimeout</h2>
<!-- backwards compatibility -->
<a id="schemaclassctimeout"></a>
<a id="schema_ClassCTimeout"></a>
<a id="tocSclassctimeout"></a>
<a id="tocsclassctimeout"></a>

```json
0
```

<h2 id="tocS_MacVersion">MacVersion</h2>
<!-- backwards compatibility -->
<a id="schemamacversion"></a>
<a id="schema_MacVersion"></a>
<a id="tocSmacversion"></a>
<a id="tocsmacversion"></a>

```json
"string"
```

<h2 id="tocS_RegParamsRevision">RegParamsRevision</h2>
<!-- backwards compatibility -->
<a id="schemaregparamsrevision"></a>
<a id="schema_RegParamsRevision"></a>
<a id="tocSregparamsrevision"></a>
<a id="tocsregparamsrevision"></a>

```json
"string"
```

<h2 id="tocS_RxDelay1">RxDelay1</h2>
<!-- backwards compatibility -->
<a id="schemarxdelay1"></a>
<a id="schema_RxDelay1"></a>
<a id="tocSrxdelay1"></a>
<a id="tocsrxdelay1"></a>

```json
0
```

<h2 id="tocS_RxDrOffset1">RxDrOffset1</h2>
<!-- backwards compatibility -->
<a id="schemarxdroffset1"></a>
<a id="schema_RxDrOffset1"></a>
<a id="tocSrxdroffset1"></a>
<a id="tocsrxdroffset1"></a>

```json
0
```

<h2 id="tocS_RxDataRate2">RxDataRate2</h2>
<!-- backwards compatibility -->
<a id="schemarxdatarate2"></a>
<a id="schema_RxDataRate2"></a>
<a id="tocSrxdatarate2"></a>
<a id="tocsrxdatarate2"></a>

```json
0
```

<h2 id="tocS_RxFreq2">RxFreq2</h2>
<!-- backwards compatibility -->
<a id="schemarxfreq2"></a>
<a id="schema_RxFreq2"></a>
<a id="tocSrxfreq2"></a>
<a id="tocsrxfreq2"></a>

```json
1000000
```

<h2 id="tocS_FactoryPresetFreqsList">FactoryPresetFreqsList</h2>
<!-- backwards compatibility -->
<a id="schemafactorypresetfreqslist"></a>
<a id="schema_FactoryPresetFreqsList"></a>
<a id="tocSfactorypresetfreqslist"></a>
<a id="tocsfactorypresetfreqslist"></a>

```json
[
  1000000
]
```

<h2 id="tocS_MaxEirp">MaxEirp</h2>
<!-- backwards compatibility -->
<a id="schemamaxeirp"></a>
<a id="schema_MaxEirp"></a>
<a id="tocSmaxeirp"></a>
<a id="tocsmaxeirp"></a>

```json
0
```

<h2 id="tocS_MaxDutyCycle">MaxDutyCycle</h2>
<!-- backwards compatibility -->
<a id="schemamaxdutycycle"></a>
<a id="schema_MaxDutyCycle"></a>
<a id="tocSmaxdutycycle"></a>
<a id="tocsmaxdutycycle"></a>

```json
0
```

<h2 id="tocS_RfRegion">RfRegion</h2>
<!-- backwards compatibility -->
<a id="schemarfregion"></a>
<a id="schema_RfRegion"></a>
<a id="tocSrfregion"></a>
<a id="tocsrfregion"></a>

```json
"string"
```

The frequency band (RFRegion) value.

<h2 id="tocS_SupportsJoin">SupportsJoin</h2>
<!-- backwards compatibility -->
<a id="schemasupportsjoin"></a>
<a id="schema_SupportsJoin"></a>
<a id="tocSsupportsjoin"></a>
<a id="tocssupportsjoin"></a>

```json
true
```

<h2 id="tocS_Supports32BitFCnt">Supports32BitFCnt</h2>
<!-- backwards compatibility -->
<a id="schemasupports32bitfcnt"></a>
<a id="schema_Supports32BitFCnt"></a>
<a id="tocSsupports32bitfcnt"></a>
<a id="tocssupports32bitfcnt"></a>

```json
true
```

<h2 id="tocS_CreateFuotaTaskResponse">CreateFuotaTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefuotataskresponse"></a>
<a id="schema_CreateFuotaTaskResponse"></a>
<a id="tocScreatefuotataskresponse"></a>
<a id="tocscreatefuotataskresponse"></a>

```json
{
  "Arn": "string",
  "Id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|[FuotaTaskArn](#schemafuotataskarn)|false|none|The arn of a FUOTA task.|
|Id|[FuotaTaskId](#schemafuotataskid)|false|none|The ID of a FUOTA task.|

<h2 id="tocS_SupportedRfRegion">SupportedRfRegion</h2>
<!-- backwards compatibility -->
<a id="schemasupportedrfregion"></a>
<a id="schema_SupportedRfRegion"></a>
<a id="tocSsupportedrfregion"></a>
<a id="tocssupportedrfregion"></a>

```json
"EU868"
```

Supported RfRegions

<h2 id="tocS_CreateMulticastGroupResponse">CreateMulticastGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemulticastgroupresponse"></a>
<a id="schema_CreateMulticastGroupResponse"></a>
<a id="tocScreatemulticastgroupresponse"></a>
<a id="tocscreatemulticastgroupresponse"></a>

```json
{
  "Arn": "string",
  "Id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|[MulticastGroupArn](#schemamulticastgrouparn)|false|none|The arn of the multicast group.|
|Id|[MulticastGroupId](#schemamulticastgroupid)|false|none|The ID of the multicast group.|

<h2 id="tocS_DlClass">DlClass</h2>
<!-- backwards compatibility -->
<a id="schemadlclass"></a>
<a id="schema_DlClass"></a>
<a id="tocSdlclass"></a>
<a id="tocsdlclass"></a>

```json
"ClassB"
```

DlClass for LoRaWAM, valid values are ClassB and ClassC.

<h2 id="tocS_CreateNetworkAnalyzerConfigurationResponse">CreateNetworkAnalyzerConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatenetworkanalyzerconfigurationresponse"></a>
<a id="schema_CreateNetworkAnalyzerConfigurationResponse"></a>
<a id="tocScreatenetworkanalyzerconfigurationresponse"></a>
<a id="tocscreatenetworkanalyzerconfigurationresponse"></a>

```json
{
  "Arn": {},
  "Name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|[NetworkAnalyzerConfigurationName](#schemanetworkanalyzerconfigurationname)|false|none|Name of the network analyzer configuration.|

<h2 id="tocS_WirelessDeviceFrameInfo">WirelessDeviceFrameInfo</h2>
<!-- backwards compatibility -->
<a id="schemawirelessdeviceframeinfo"></a>
<a id="schema_WirelessDeviceFrameInfo"></a>
<a id="tocSwirelessdeviceframeinfo"></a>
<a id="tocswirelessdeviceframeinfo"></a>

```json
"ENABLED"
```

 <code>FrameInfo</code> of your wireless device resources for the trace content. Use FrameInfo to debug the communication between your LoRaWAN end devices and the network server.

<h2 id="tocS_LogLevel">LogLevel</h2>
<!-- backwards compatibility -->
<a id="schemaloglevel"></a>
<a id="schema_LogLevel"></a>
<a id="tocSloglevel"></a>
<a id="tocsloglevel"></a>

```json
"INFO"
```

The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.

<h2 id="tocS_WirelessDeviceId">WirelessDeviceId</h2>
<!-- backwards compatibility -->
<a id="schemawirelessdeviceid"></a>
<a id="schema_WirelessDeviceId"></a>
<a id="tocSwirelessdeviceid"></a>
<a id="tocswirelessdeviceid"></a>

```json
"string"
```

The ID of the wireless device.

<h2 id="tocS_WirelessGatewayId">WirelessGatewayId</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewayid"></a>
<a id="schema_WirelessGatewayId"></a>
<a id="tocSwirelessgatewayid"></a>
<a id="tocswirelessgatewayid"></a>

```json
"string"
```

<h2 id="tocS_CreateServiceProfileResponse">CreateServiceProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateserviceprofileresponse"></a>
<a id="schema_CreateServiceProfileResponse"></a>
<a id="tocScreateserviceprofileresponse"></a>
<a id="tocscreateserviceprofileresponse"></a>

```json
{
  "Arn": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Id|object|false|none|none|

<h2 id="tocS_AddGwMetadata">AddGwMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaaddgwmetadata"></a>
<a id="schema_AddGwMetadata"></a>
<a id="tocSaddgwmetadata"></a>
<a id="tocsaddgwmetadata"></a>

```json
true
```

<h2 id="tocS_DrMinBox">DrMinBox</h2>
<!-- backwards compatibility -->
<a id="schemadrminbox"></a>
<a id="schema_DrMinBox"></a>
<a id="tocSdrminbox"></a>
<a id="tocsdrminbox"></a>

```json
0
```

<h2 id="tocS_DrMaxBox">DrMaxBox</h2>
<!-- backwards compatibility -->
<a id="schemadrmaxbox"></a>
<a id="schema_DrMaxBox"></a>
<a id="tocSdrmaxbox"></a>
<a id="tocsdrmaxbox"></a>

```json
0
```

<h2 id="tocS_PrAllowed">PrAllowed</h2>
<!-- backwards compatibility -->
<a id="schemaprallowed"></a>
<a id="schema_PrAllowed"></a>
<a id="tocSprallowed"></a>
<a id="tocsprallowed"></a>

```json
true
```

<h2 id="tocS_RaAllowed">RaAllowed</h2>
<!-- backwards compatibility -->
<a id="schemaraallowed"></a>
<a id="schema_RaAllowed"></a>
<a id="tocSraallowed"></a>
<a id="tocsraallowed"></a>

```json
true
```

<h2 id="tocS_CreateWirelessDeviceResponse">CreateWirelessDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatewirelessdeviceresponse"></a>
<a id="schema_CreateWirelessDeviceResponse"></a>
<a id="tocScreatewirelessdeviceresponse"></a>
<a id="tocscreatewirelessdeviceresponse"></a>

```json
{
  "Arn": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Id|object|false|none|none|

<h2 id="tocS_DevEui">DevEui</h2>
<!-- backwards compatibility -->
<a id="schemadeveui"></a>
<a id="schema_DevEui"></a>
<a id="tocSdeveui"></a>
<a id="tocsdeveui"></a>

```json
"string"
```

<h2 id="tocS_DeviceProfileId">DeviceProfileId</h2>
<!-- backwards compatibility -->
<a id="schemadeviceprofileid"></a>
<a id="schema_DeviceProfileId"></a>
<a id="tocSdeviceprofileid"></a>
<a id="tocsdeviceprofileid"></a>

```json
"string"
```

<h2 id="tocS_ServiceProfileId">ServiceProfileId</h2>
<!-- backwards compatibility -->
<a id="schemaserviceprofileid"></a>
<a id="schema_ServiceProfileId"></a>
<a id="tocSserviceprofileid"></a>
<a id="tocsserviceprofileid"></a>

```json
"string"
```

<h2 id="tocS_OtaaV1_1">OtaaV1_1</h2>
<!-- backwards compatibility -->
<a id="schemaotaav1_1"></a>
<a id="schema_OtaaV1_1"></a>
<a id="tocSotaav1_1"></a>
<a id="tocsotaav1_1"></a>

```json
{
  "AppKey": {},
  "NwkKey": {},
  "JoinEui": {}
}
```

OTAA device object for v1.1

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppKey|object|false|none|none|
|NwkKey|object|false|none|none|
|JoinEui|object|false|none|none|

<h2 id="tocS_OtaaV1_0_x">OtaaV1_0_x</h2>
<!-- backwards compatibility -->
<a id="schemaotaav1_0_x"></a>
<a id="schema_OtaaV1_0_x"></a>
<a id="tocSotaav1_0_x"></a>
<a id="tocsotaav1_0_x"></a>

```json
{
  "AppKey": {},
  "AppEui": {},
  "GenAppKey": {}
}
```

OTAA device object for v1.0.x

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppKey|object|false|none|none|
|AppEui|object|false|none|none|
|GenAppKey|object|false|none|none|

<h2 id="tocS_AbpV1_1">AbpV1_1</h2>
<!-- backwards compatibility -->
<a id="schemaabpv1_1"></a>
<a id="schema_AbpV1_1"></a>
<a id="tocSabpv1_1"></a>
<a id="tocsabpv1_1"></a>

```json
{
  "DevAddr": {},
  "SessionKeys": {
    "FNwkSIntKey": {},
    "SNwkSIntKey": {},
    "NwkSEncKey": {},
    "AppSKey": {}
  },
  "FCntStart": {}
}
```

ABP device object for LoRaWAN specification v1.1

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DevAddr|object|false|none|none|
|SessionKeys|object|false|none|none|
|FCntStart|object|false|none|none|

<h2 id="tocS_AbpV1_0_x">AbpV1_0_x</h2>
<!-- backwards compatibility -->
<a id="schemaabpv1_0_x"></a>
<a id="schema_AbpV1_0_x"></a>
<a id="tocSabpv1_0_x"></a>
<a id="tocsabpv1_0_x"></a>

```json
{
  "DevAddr": {},
  "SessionKeys": {
    "NwkSKey": {},
    "AppSKey": {}
  },
  "FCntStart": {}
}
```

ABP device object for LoRaWAN specification v1.0.x

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DevAddr|object|false|none|none|
|SessionKeys|object|false|none|none|
|FCntStart|object|false|none|none|

<h2 id="tocS_FPorts">FPorts</h2>
<!-- backwards compatibility -->
<a id="schemafports"></a>
<a id="schema_FPorts"></a>
<a id="tocSfports"></a>
<a id="tocsfports"></a>

```json
{
  "Fuota": 1,
  "Multicast": 1,
  "ClockSync": 1,
  "Positioning": {
    "ClockSync": 1,
    "Stream": 1,
    "Gnss": 1
  },
  "Applications": {}
}
```

List of FPort assigned for different LoRaWAN application packages to use

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Fuota|[FPort](#schemafport)|false|none|The Fport value.|
|Multicast|[FPort](#schemafport)|false|none|The Fport value.|
|ClockSync|[FPort](#schemafport)|false|none|The Fport value.|
|Positioning|object|false|none|none|
|Applications|object|false|none|none|

<h2 id="tocS_CreateWirelessGatewayResponse">CreateWirelessGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatewirelessgatewayresponse"></a>
<a id="schema_CreateWirelessGatewayResponse"></a>
<a id="tocScreatewirelessgatewayresponse"></a>
<a id="tocscreatewirelessgatewayresponse"></a>

```json
{
  "Arn": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Id|object|false|none|none|

<h2 id="tocS_GatewayEui">GatewayEui</h2>
<!-- backwards compatibility -->
<a id="schemagatewayeui"></a>
<a id="schema_GatewayEui"></a>
<a id="tocSgatewayeui"></a>
<a id="tocsgatewayeui"></a>

```json
"string"
```

<h2 id="tocS_JoinEuiFilters">JoinEuiFilters</h2>
<!-- backwards compatibility -->
<a id="schemajoineuifilters"></a>
<a id="schema_JoinEuiFilters"></a>
<a id="tocSjoineuifilters"></a>
<a id="tocsjoineuifilters"></a>

```json
[
  [
    "string",
    "string"
  ]
]
```

A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.

<h2 id="tocS_NetIdFilters">NetIdFilters</h2>
<!-- backwards compatibility -->
<a id="schemanetidfilters"></a>
<a id="schema_NetIdFilters"></a>
<a id="tocSnetidfilters"></a>
<a id="tocsnetidfilters"></a>

```json
[
  "string"
]
```

A list of NetId values that are used by LoRa gateways to filter the uplink frames.

<h2 id="tocS_SubBands">SubBands</h2>
<!-- backwards compatibility -->
<a id="schemasubbands"></a>
<a id="schema_SubBands"></a>
<a id="tocSsubbands"></a>
<a id="tocssubbands"></a>

```json
[
  1
]
```

A list of integer indicating which sub bands are supported by LoRa gateway.

<h2 id="tocS_Beaconing">Beaconing</h2>
<!-- backwards compatibility -->
<a id="schemabeaconing"></a>
<a id="schema_Beaconing"></a>
<a id="tocSbeaconing"></a>
<a id="tocsbeaconing"></a>

```json
{
  "DataRate": {},
  "Frequencies": {}
}
```

Beaconing parameters for configuring the wireless gateways.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataRate|object|false|none|none|
|Frequencies|object|false|none|none|

<h2 id="tocS_GatewayMaxEirp">GatewayMaxEirp</h2>
<!-- backwards compatibility -->
<a id="schemagatewaymaxeirp"></a>
<a id="schema_GatewayMaxEirp"></a>
<a id="tocSgatewaymaxeirp"></a>
<a id="tocsgatewaymaxeirp"></a>

```json
0
```

<h2 id="tocS_CreateWirelessGatewayTaskResponse">CreateWirelessGatewayTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatewirelessgatewaytaskresponse"></a>
<a id="schema_CreateWirelessGatewayTaskResponse"></a>
<a id="tocScreatewirelessgatewaytaskresponse"></a>
<a id="tocscreatewirelessgatewaytaskresponse"></a>

```json
{
  "WirelessGatewayTaskDefinitionId": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WirelessGatewayTaskDefinitionId|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_CreateWirelessGatewayTaskDefinitionResponse">CreateWirelessGatewayTaskDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatewirelessgatewaytaskdefinitionresponse"></a>
<a id="schema_CreateWirelessGatewayTaskDefinitionResponse"></a>
<a id="tocScreatewirelessgatewaytaskdefinitionresponse"></a>
<a id="tocscreatewirelessgatewaytaskdefinitionresponse"></a>

```json
{
  "Id": {},
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_UpdateDataSource">UpdateDataSource</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasource"></a>
<a id="schema_UpdateDataSource"></a>
<a id="tocSupdatedatasource"></a>
<a id="tocsupdatedatasource"></a>

```json
"string"
```

<h2 id="tocS_LoRaWANUpdateGatewayTaskCreate">LoRaWANUpdateGatewayTaskCreate</h2>
<!-- backwards compatibility -->
<a id="schemalorawanupdategatewaytaskcreate"></a>
<a id="schema_LoRaWANUpdateGatewayTaskCreate"></a>
<a id="tocSlorawanupdategatewaytaskcreate"></a>
<a id="tocslorawanupdategatewaytaskcreate"></a>

```json
{
  "UpdateSignature": {},
  "SigKeyCrc": {},
  "CurrentVersion": {
    "PackageVersion": {},
    "Model": {},
    "Station": {}
  },
  "UpdateVersion": {
    "PackageVersion": {},
    "Model": {},
    "Station": {}
  }
}
```

LoRaWANUpdateGatewayTaskCreate object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateSignature|object|false|none|none|
|SigKeyCrc|object|false|none|none|
|CurrentVersion|object|false|none|none|
|UpdateVersion|object|false|none|none|

<h2 id="tocS_DeleteDestinationResponse">DeleteDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedestinationresponse"></a>
<a id="schema_DeleteDestinationResponse"></a>
<a id="tocSdeletedestinationresponse"></a>
<a id="tocsdeletedestinationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteDeviceProfileResponse">DeleteDeviceProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedeviceprofileresponse"></a>
<a id="schema_DeleteDeviceProfileResponse"></a>
<a id="tocSdeletedeviceprofileresponse"></a>
<a id="tocsdeletedeviceprofileresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteFuotaTaskResponse">DeleteFuotaTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefuotataskresponse"></a>
<a id="schema_DeleteFuotaTaskResponse"></a>
<a id="tocSdeletefuotataskresponse"></a>
<a id="tocsdeletefuotataskresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteMulticastGroupResponse">DeleteMulticastGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletemulticastgroupresponse"></a>
<a id="schema_DeleteMulticastGroupResponse"></a>
<a id="tocSdeletemulticastgroupresponse"></a>
<a id="tocsdeletemulticastgroupresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteNetworkAnalyzerConfigurationResponse">DeleteNetworkAnalyzerConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletenetworkanalyzerconfigurationresponse"></a>
<a id="schema_DeleteNetworkAnalyzerConfigurationResponse"></a>
<a id="tocSdeletenetworkanalyzerconfigurationresponse"></a>
<a id="tocsdeletenetworkanalyzerconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteQueuedMessagesResponse">DeleteQueuedMessagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletequeuedmessagesresponse"></a>
<a id="schema_DeleteQueuedMessagesResponse"></a>
<a id="tocSdeletequeuedmessagesresponse"></a>
<a id="tocsdeletequeuedmessagesresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteServiceProfileResponse">DeleteServiceProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteserviceprofileresponse"></a>
<a id="schema_DeleteServiceProfileResponse"></a>
<a id="tocSdeleteserviceprofileresponse"></a>
<a id="tocsdeleteserviceprofileresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteWirelessDeviceResponse">DeleteWirelessDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletewirelessdeviceresponse"></a>
<a id="schema_DeleteWirelessDeviceResponse"></a>
<a id="tocSdeletewirelessdeviceresponse"></a>
<a id="tocsdeletewirelessdeviceresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteWirelessDeviceImportTaskResponse">DeleteWirelessDeviceImportTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletewirelessdeviceimporttaskresponse"></a>
<a id="schema_DeleteWirelessDeviceImportTaskResponse"></a>
<a id="tocSdeletewirelessdeviceimporttaskresponse"></a>
<a id="tocsdeletewirelessdeviceimporttaskresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteWirelessGatewayResponse">DeleteWirelessGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletewirelessgatewayresponse"></a>
<a id="schema_DeleteWirelessGatewayResponse"></a>
<a id="tocSdeletewirelessgatewayresponse"></a>
<a id="tocsdeletewirelessgatewayresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteWirelessGatewayTaskResponse">DeleteWirelessGatewayTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletewirelessgatewaytaskresponse"></a>
<a id="schema_DeleteWirelessGatewayTaskResponse"></a>
<a id="tocSdeletewirelessgatewaytaskresponse"></a>
<a id="tocsdeletewirelessgatewaytaskresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteWirelessGatewayTaskDefinitionResponse">DeleteWirelessGatewayTaskDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletewirelessgatewaytaskdefinitionresponse"></a>
<a id="schema_DeleteWirelessGatewayTaskDefinitionResponse"></a>
<a id="tocSdeletewirelessgatewaytaskdefinitionresponse"></a>
<a id="tocsdeletewirelessgatewaytaskdefinitionresponse"></a>

```json
{}
```

<h2 id="tocS_DeregisterWirelessDeviceResponse">DeregisterWirelessDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterwirelessdeviceresponse"></a>
<a id="schema_DeregisterWirelessDeviceResponse"></a>
<a id="tocSderegisterwirelessdeviceresponse"></a>
<a id="tocsderegisterwirelessdeviceresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateAwsAccountFromPartnerAccountResponse">DisassociateAwsAccountFromPartnerAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateawsaccountfrompartneraccountresponse"></a>
<a id="schema_DisassociateAwsAccountFromPartnerAccountResponse"></a>
<a id="tocSdisassociateawsaccountfrompartneraccountresponse"></a>
<a id="tocsdisassociateawsaccountfrompartneraccountresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateMulticastGroupFromFuotaTaskResponse">DisassociateMulticastGroupFromFuotaTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatemulticastgroupfromfuotataskresponse"></a>
<a id="schema_DisassociateMulticastGroupFromFuotaTaskResponse"></a>
<a id="tocSdisassociatemulticastgroupfromfuotataskresponse"></a>
<a id="tocsdisassociatemulticastgroupfromfuotataskresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateWirelessDeviceFromFuotaTaskResponse">DisassociateWirelessDeviceFromFuotaTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatewirelessdevicefromfuotataskresponse"></a>
<a id="schema_DisassociateWirelessDeviceFromFuotaTaskResponse"></a>
<a id="tocSdisassociatewirelessdevicefromfuotataskresponse"></a>
<a id="tocsdisassociatewirelessdevicefromfuotataskresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateWirelessDeviceFromMulticastGroupResponse">DisassociateWirelessDeviceFromMulticastGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatewirelessdevicefrommulticastgroupresponse"></a>
<a id="schema_DisassociateWirelessDeviceFromMulticastGroupResponse"></a>
<a id="tocSdisassociatewirelessdevicefrommulticastgroupresponse"></a>
<a id="tocsdisassociatewirelessdevicefrommulticastgroupresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateWirelessDeviceFromThingResponse">DisassociateWirelessDeviceFromThingResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatewirelessdevicefromthingresponse"></a>
<a id="schema_DisassociateWirelessDeviceFromThingResponse"></a>
<a id="tocSdisassociatewirelessdevicefromthingresponse"></a>
<a id="tocsdisassociatewirelessdevicefromthingresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateWirelessGatewayFromCertificateResponse">DisassociateWirelessGatewayFromCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatewirelessgatewayfromcertificateresponse"></a>
<a id="schema_DisassociateWirelessGatewayFromCertificateResponse"></a>
<a id="tocSdisassociatewirelessgatewayfromcertificateresponse"></a>
<a id="tocsdisassociatewirelessgatewayfromcertificateresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateWirelessGatewayFromThingResponse">DisassociateWirelessGatewayFromThingResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatewirelessgatewayfromthingresponse"></a>
<a id="schema_DisassociateWirelessGatewayFromThingResponse"></a>
<a id="tocSdisassociatewirelessgatewayfromthingresponse"></a>
<a id="tocsdisassociatewirelessgatewayfromthingresponse"></a>

```json
{}
```

<h2 id="tocS_GetDestinationResponse">GetDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdestinationresponse"></a>
<a id="schema_GetDestinationResponse"></a>
<a id="tocSgetdestinationresponse"></a>
<a id="tocsgetdestinationresponse"></a>

```json
{
  "Arn": {},
  "Name": {},
  "Expression": {},
  "ExpressionType": {},
  "Description": {},
  "RoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Expression|object|false|none|none|
|ExpressionType|object|false|none|none|
|Description|object|false|none|none|
|RoleArn|object|false|none|none|

<h2 id="tocS_GetDeviceProfileResponse">GetDeviceProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdeviceprofileresponse"></a>
<a id="schema_GetDeviceProfileResponse"></a>
<a id="tocSgetdeviceprofileresponse"></a>
<a id="tocsgetdeviceprofileresponse"></a>

```json
{
  "Arn": {},
  "Name": {},
  "Id": {},
  "LoRaWAN": {
    "SupportsClassB": {},
    "ClassBTimeout": {},
    "PingSlotPeriod": {},
    "PingSlotDr": {},
    "PingSlotFreq": {},
    "SupportsClassC": {},
    "ClassCTimeout": {},
    "MacVersion": {},
    "RegParamsRevision": {},
    "RxDelay1": {},
    "RxDrOffset1": {},
    "RxDataRate2": {},
    "RxFreq2": {},
    "FactoryPresetFreqsList": {},
    "MaxEirp": {},
    "MaxDutyCycle": {},
    "RfRegion": {},
    "SupportsJoin": {},
    "Supports32BitFCnt": {}
  },
  "Sidewalk": {
    "ApplicationServerPublicKey": {},
    "QualificationStatus": {},
    "DakCertificateMetadata": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Id|object|false|none|none|
|LoRaWAN|object|false|none|none|
|Sidewalk|object|false|none|none|

<h2 id="tocS_GetEventConfigurationByResourceTypesResponse">GetEventConfigurationByResourceTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemageteventconfigurationbyresourcetypesresponse"></a>
<a id="schema_GetEventConfigurationByResourceTypesResponse"></a>
<a id="tocSgeteventconfigurationbyresourcetypesresponse"></a>
<a id="tocsgeteventconfigurationbyresourcetypesresponse"></a>

```json
{
  "DeviceRegistrationState": {
    "Sidewalk": {
      "WirelessDeviceEventTopic": {}
    }
  },
  "Proximity": {
    "Sidewalk": {
      "WirelessDeviceEventTopic": {}
    }
  },
  "Join": {
    "LoRaWAN": {
      "WirelessDeviceEventTopic": {}
    }
  },
  "ConnectionStatus": {
    "LoRaWAN": {
      "WirelessGatewayEventTopic": {}
    }
  },
  "MessageDeliveryStatus": {
    "Sidewalk": {
      "WirelessDeviceEventTopic": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceRegistrationState|object|false|none|none|
|Proximity|object|false|none|none|
|Join|object|false|none|none|
|ConnectionStatus|object|false|none|none|
|MessageDeliveryStatus|object|false|none|none|

<h2 id="tocS_GetFuotaTaskResponse">GetFuotaTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfuotataskresponse"></a>
<a id="schema_GetFuotaTaskResponse"></a>
<a id="tocSgetfuotataskresponse"></a>
<a id="tocsgetfuotataskresponse"></a>

```json
{
  "Arn": "string",
  "Id": "string",
  "Status": "Pending",
  "Name": "string",
  "Description": "string",
  "LoRaWAN": {
    "RfRegion": "string",
    "StartTime": "1970-01-01T00:00:00Z"
  },
  "FirmwareUpdateImage": "string",
  "FirmwareUpdateRole": "string",
  "CreatedAt": "1970-01-01T00:00:00Z",
  "RedundancyPercent": 0,
  "FragmentSizeBytes": 1,
  "FragmentIntervalMS": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|[FuotaTaskArn](#schemafuotataskarn)|false|none|The arn of a FUOTA task.|
|Id|[FuotaTaskId](#schemafuotataskid)|false|none|The ID of a FUOTA task.|
|Status|[FuotaTaskStatus](#schemafuotataskstatus)|false|none|The status of a FUOTA task.|
|Name|[FuotaTaskName](#schemafuotataskname)|false|none|The name of a FUOTA task.|
|Description|[Description](#schemadescription)|false|none|The description of the new resource.|
|LoRaWAN|[LoRaWANFuotaTaskGetInfo](#schemalorawanfuotataskgetinfo)|false|none|The LoRaWAN information returned from getting a FUOTA task.|
|FirmwareUpdateImage|[FirmwareUpdateImage](#schemafirmwareupdateimage)|false|none|The S3 URI points to a firmware update image that is to be used with a FUOTA task.|
|FirmwareUpdateRole|[FirmwareUpdateRole](#schemafirmwareupdaterole)|false|none|The firmware update role that is to be used with a FUOTA task.|
|CreatedAt|[CreatedAt](#schemacreatedat)|false|none|Created at timestamp for the resource.|
|RedundancyPercent|[RedundancyPercent](#schemaredundancypercent)|false|none|The percentage of added redundant fragments. For example, if firmware file is 100 bytes and fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.|
|FragmentSizeBytes|[FragmentSizeBytes](#schemafragmentsizebytes)|false|none|The size of each fragment in bytes. Currently only supported in fuota tasks with multicast groups.|
|FragmentIntervalMS|[FragmentIntervalMS](#schemafragmentintervalms)|false|none|The interval of sending fragments in milliseconds. Currently the interval will be rounded to the nearest second. Note that this interval only controls the timing when the cloud sends the fragments down. The actual delay of receiving fragments at device side depends on the device's class and the communication delay with the cloud.|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Pending|
|Status|FuotaSession_Waiting|
|Status|In_FuotaSession|
|Status|FuotaDone|
|Status|Delete_Waiting|

<h2 id="tocS_GetLogLevelsByResourceTypesResponse">GetLogLevelsByResourceTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetloglevelsbyresourcetypesresponse"></a>
<a id="schema_GetLogLevelsByResourceTypesResponse"></a>
<a id="tocSgetloglevelsbyresourcetypesresponse"></a>
<a id="tocsgetloglevelsbyresourcetypesresponse"></a>

```json
{
  "DefaultLogLevel": "INFO",
  "WirelessGatewayLogOptions": [
    {
      "Type": "LoRaWAN",
      "LogLevel": "INFO",
      "Events": [
        {
          "Event": "CUPS_Request",
          "LogLevel": "INFO"
        }
      ]
    }
  ],
  "WirelessDeviceLogOptions": [
    {
      "Type": {},
      "LogLevel": "INFO",
      "Events": [
        {
          "Event": "Join",
          "LogLevel": "INFO"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultLogLevel|[LogLevel](#schemaloglevel)|false|none|The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.|
|WirelessGatewayLogOptions|[WirelessGatewayLogOptionList](#schemawirelessgatewaylogoptionlist)|false|none|The list of wireless gateway log options.|
|WirelessDeviceLogOptions|[WirelessDeviceLogOptionList](#schemawirelessdevicelogoptionlist)|false|none|The list of wireless device log options.|

#### Enumerated Values

|Property|Value|
|---|---|
|DefaultLogLevel|INFO|
|DefaultLogLevel|ERROR|
|DefaultLogLevel|DISABLED|

<h2 id="tocS_GetMulticastGroupResponse">GetMulticastGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmulticastgroupresponse"></a>
<a id="schema_GetMulticastGroupResponse"></a>
<a id="tocSgetmulticastgroupresponse"></a>
<a id="tocsgetmulticastgroupresponse"></a>

```json
{
  "Arn": "string",
  "Id": "string",
  "Name": "string",
  "Description": "string",
  "Status": "string",
  "LoRaWAN": {
    "RfRegion": "EU868",
    "DlClass": "ClassB",
    "NumberOfDevicesRequested": 0,
    "NumberOfDevicesInGroup": 0
  },
  "CreatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|[MulticastGroupArn](#schemamulticastgrouparn)|false|none|The arn of the multicast group.|
|Id|[MulticastGroupId](#schemamulticastgroupid)|false|none|The ID of the multicast group.|
|Name|[MulticastGroupName](#schemamulticastgroupname)|false|none|The name of the multicast group.|
|Description|[Description](#schemadescription)|false|none|The description of the new resource.|
|Status|[MulticastGroupStatus](#schemamulticastgroupstatus)|false|none|The status of the multicast group.|
|LoRaWAN|[LoRaWANMulticastGet](#schemalorawanmulticastget)|false|none|The LoRaWAN information that is to be returned from getting multicast group information.|
|CreatedAt|[CreatedAt](#schemacreatedat)|false|none|Created at timestamp for the resource.|

<h2 id="tocS_GetMulticastGroupSessionResponse">GetMulticastGroupSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmulticastgroupsessionresponse"></a>
<a id="schema_GetMulticastGroupSessionResponse"></a>
<a id="tocSgetmulticastgroupsessionresponse"></a>
<a id="tocsgetmulticastgroupsessionresponse"></a>

```json
{
  "LoRaWAN": {
    "DlDr": 0,
    "DlFreq": 100000000,
    "SessionStartTime": "1970-01-01T00:00:00Z",
    "SessionTimeout": 60,
    "PingSlotPeriod": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoRaWAN|[LoRaWANMulticastSession](#schemalorawanmulticastsession)|false|none|The LoRaWAN information used with the multicast session.|

<h2 id="tocS_GetNetworkAnalyzerConfigurationResponse">GetNetworkAnalyzerConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworkanalyzerconfigurationresponse"></a>
<a id="schema_GetNetworkAnalyzerConfigurationResponse"></a>
<a id="tocSgetnetworkanalyzerconfigurationresponse"></a>
<a id="tocsgetnetworkanalyzerconfigurationresponse"></a>

```json
{
  "TraceContent": {
    "WirelessDeviceFrameInfo": "ENABLED",
    "LogLevel": "INFO"
  },
  "WirelessDevices": {},
  "WirelessGateways": {},
  "Description": "string",
  "Arn": {},
  "Name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TraceContent|[TraceContent](#schematracecontent)|false|none|Trace content for your wireless gateway and wireless device resources.|
|WirelessDevices|object|false|none|none|
|WirelessGateways|object|false|none|none|
|Description|[Description](#schemadescription)|false|none|The description of the new resource.|
|Arn|object|false|none|none|
|Name|[NetworkAnalyzerConfigurationName](#schemanetworkanalyzerconfigurationname)|false|none|Name of the network analyzer configuration.|

<h2 id="tocS_GetPartnerAccountResponse">GetPartnerAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpartneraccountresponse"></a>
<a id="schema_GetPartnerAccountResponse"></a>
<a id="tocSgetpartneraccountresponse"></a>
<a id="tocsgetpartneraccountresponse"></a>

```json
{
  "Sidewalk": {
    "AmazonId": {},
    "Fingerprint": {},
    "Arn": {}
  },
  "AccountLinked": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sidewalk|object|false|none|none|
|AccountLinked|object|false|none|none|

<h2 id="tocS_GetPositionResponse">GetPositionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpositionresponse"></a>
<a id="schema_GetPositionResponse"></a>
<a id="tocSgetpositionresponse"></a>
<a id="tocsgetpositionresponse"></a>

```json
{
  "Position": {},
  "Accuracy": {
    "HorizontalAccuracy": {},
    "VerticalAccuracy": {}
  },
  "SolverType": {},
  "SolverProvider": {},
  "SolverVersion": {},
  "Timestamp": {}
}
```

This operation is no longer supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Position|object|false|none|none|
|Accuracy|object|false|none|none|
|SolverType|object|false|none|none|
|SolverProvider|object|false|none|none|
|SolverVersion|object|false|none|none|
|Timestamp|object|false|none|none|

<h2 id="tocS_GetPositionConfigurationResponse">GetPositionConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpositionconfigurationresponse"></a>
<a id="schema_GetPositionConfigurationResponse"></a>
<a id="tocSgetpositionconfigurationresponse"></a>
<a id="tocsgetpositionconfigurationresponse"></a>

```json
{
  "Solvers": {
    "SemtechGnss": {
      "Provider": {},
      "Type": {},
      "Status": {},
      "Fec": {}
    }
  },
  "Destination": {}
}
```

This operation is no longer supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Solvers|object|false|none|none|
|Destination|object|false|none|none|

<h2 id="tocS_GetPositionEstimateResponse">GetPositionEstimateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpositionestimateresponse"></a>
<a id="schema_GetPositionEstimateResponse"></a>
<a id="tocSgetpositionestimateresponse"></a>
<a id="tocsgetpositionestimateresponse"></a>

```json
{
  "GeoJsonPayload": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GeoJsonPayload|object|false|none|none|

<h2 id="tocS_WiFiAccessPoint">WiFiAccessPoint</h2>
<!-- backwards compatibility -->
<a id="schemawifiaccesspoint"></a>
<a id="schema_WiFiAccessPoint"></a>
<a id="tocSwifiaccesspoint"></a>
<a id="tocswifiaccesspoint"></a>

```json
{
  "MacAddress": {},
  "Rss": {}
}
```

Wi-Fi access point.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MacAddress|object|true|none|none|
|Rss|object|true|none|none|

<h2 id="tocS_GsmList">GsmList</h2>
<!-- backwards compatibility -->
<a id="schemagsmlist"></a>
<a id="schema_GsmList"></a>
<a id="tocSgsmlist"></a>
<a id="tocsgsmlist"></a>

```json
[
  {
    "Mcc": {},
    "Mnc": {},
    "Lac": {},
    "GeranCid": {},
    "GsmLocalId": {
      "Bsic": {},
      "Bcch": {}
    },
    "GsmTimingAdvance": {},
    "RxLevel": {},
    "GsmNmr": {}
  }
]
```

<h2 id="tocS_WcdmaList">WcdmaList</h2>
<!-- backwards compatibility -->
<a id="schemawcdmalist"></a>
<a id="schema_WcdmaList"></a>
<a id="tocSwcdmalist"></a>
<a id="tocswcdmalist"></a>

```json
[
  {
    "Mcc": {},
    "Mnc": {},
    "Lac": {},
    "UtranCid": {},
    "WcdmaLocalId": {
      "Uarfcndl": {},
      "Psc": {}
    },
    "Rscp": {},
    "PathLoss": {},
    "WcdmaNmr": {}
  }
]
```

<h2 id="tocS_TdscdmaList">TdscdmaList</h2>
<!-- backwards compatibility -->
<a id="schematdscdmalist"></a>
<a id="schema_TdscdmaList"></a>
<a id="tocStdscdmalist"></a>
<a id="tocstdscdmalist"></a>

```json
[
  {
    "Mcc": {},
    "Mnc": {},
    "Lac": {},
    "UtranCid": {},
    "TdscdmaLocalId": {
      "Uarfcn": {},
      "CellParams": {}
    },
    "TdscdmaTimingAdvance": {},
    "Rscp": {},
    "PathLoss": {},
    "TdscdmaNmr": {}
  }
]
```

<h2 id="tocS_LteList">LteList</h2>
<!-- backwards compatibility -->
<a id="schemaltelist"></a>
<a id="schema_LteList"></a>
<a id="tocSltelist"></a>
<a id="tocsltelist"></a>

```json
[
  {
    "Mcc": {},
    "Mnc": {},
    "EutranCid": {},
    "Tac": {},
    "LteLocalId": {
      "Pci": {},
      "Earfcn": {}
    },
    "LteTimingAdvance": {},
    "Rsrp": {},
    "Rsrq": {},
    "NrCapable": {},
    "LteNmr": {}
  }
]
```

<h2 id="tocS_CdmaList">CdmaList</h2>
<!-- backwards compatibility -->
<a id="schemacdmalist"></a>
<a id="schema_CdmaList"></a>
<a id="tocScdmalist"></a>
<a id="tocscdmalist"></a>

```json
[
  {
    "SystemId": {},
    "NetworkId": {},
    "BaseStationId": {},
    "RegistrationZone": {},
    "CdmaLocalId": {
      "PnOffset": {},
      "CdmaChannel": {}
    },
    "PilotPower": {},
    "BaseLat": {},
    "BaseLng": {},
    "CdmaNmr": {}
  }
]
```

<h2 id="tocS_IPAddress">IPAddress</h2>
<!-- backwards compatibility -->
<a id="schemaipaddress"></a>
<a id="schema_IPAddress"></a>
<a id="tocSipaddress"></a>
<a id="tocsipaddress"></a>

```json
"string"
```

<h2 id="tocS_GnssNav">GnssNav</h2>
<!-- backwards compatibility -->
<a id="schemagnssnav"></a>
<a id="schema_GnssNav"></a>
<a id="tocSgnssnav"></a>
<a id="tocsgnssnav"></a>

```json
"string"
```

<h2 id="tocS_GPST">GPST</h2>
<!-- backwards compatibility -->
<a id="schemagpst"></a>
<a id="schema_GPST"></a>
<a id="tocSgpst"></a>
<a id="tocsgpst"></a>

```json
0
```

<h2 id="tocS_CaptureTimeAccuracy">CaptureTimeAccuracy</h2>
<!-- backwards compatibility -->
<a id="schemacapturetimeaccuracy"></a>
<a id="schema_CaptureTimeAccuracy"></a>
<a id="tocScapturetimeaccuracy"></a>
<a id="tocscapturetimeaccuracy"></a>

```json
0
```

<h2 id="tocS_AssistPosition">AssistPosition</h2>
<!-- backwards compatibility -->
<a id="schemaassistposition"></a>
<a id="schema_AssistPosition"></a>
<a id="tocSassistposition"></a>
<a id="tocsassistposition"></a>

```json
[
  0,
  0
]
```

<h2 id="tocS_Coordinate">Coordinate</h2>
<!-- backwards compatibility -->
<a id="schemacoordinate"></a>
<a id="schema_Coordinate"></a>
<a id="tocScoordinate"></a>
<a id="tocscoordinate"></a>

```json
0
```

<h2 id="tocS_Use2DSolver">Use2DSolver</h2>
<!-- backwards compatibility -->
<a id="schemause2dsolver"></a>
<a id="schema_Use2DSolver"></a>
<a id="tocSuse2dsolver"></a>
<a id="tocsuse2dsolver"></a>

```json
true
```

<h2 id="tocS_GetResourceEventConfigurationResponse">GetResourceEventConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourceeventconfigurationresponse"></a>
<a id="schema_GetResourceEventConfigurationResponse"></a>
<a id="tocSgetresourceeventconfigurationresponse"></a>
<a id="tocsgetresourceeventconfigurationresponse"></a>

```json
{
  "DeviceRegistrationState": {
    "Sidewalk": {
      "AmazonIdEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  },
  "Proximity": {
    "Sidewalk": {
      "AmazonIdEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  },
  "Join": {
    "LoRaWAN": {
      "DevEuiEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  },
  "ConnectionStatus": {
    "LoRaWAN": {
      "GatewayEuiEventTopic": {}
    },
    "WirelessGatewayIdEventTopic": {}
  },
  "MessageDeliveryStatus": {
    "Sidewalk": {
      "AmazonIdEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceRegistrationState|object|false|none|none|
|Proximity|object|false|none|none|
|Join|object|false|none|none|
|ConnectionStatus|object|false|none|none|
|MessageDeliveryStatus|object|false|none|none|

<h2 id="tocS_GetResourceLogLevelResponse">GetResourceLogLevelResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourceloglevelresponse"></a>
<a id="schema_GetResourceLogLevelResponse"></a>
<a id="tocSgetresourceloglevelresponse"></a>
<a id="tocsgetresourceloglevelresponse"></a>

```json
{
  "LogLevel": "INFO"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogLevel|[LogLevel](#schemaloglevel)|false|none|The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.|

#### Enumerated Values

|Property|Value|
|---|---|
|LogLevel|INFO|
|LogLevel|ERROR|
|LogLevel|DISABLED|

<h2 id="tocS_GetResourcePositionResponse">GetResourcePositionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepositionresponse"></a>
<a id="schema_GetResourcePositionResponse"></a>
<a id="tocSgetresourcepositionresponse"></a>
<a id="tocsgetresourcepositionresponse"></a>

```json
{
  "GeoJsonPayload": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GeoJsonPayload|object|false|none|none|

<h2 id="tocS_GetServiceEndpointResponse">GetServiceEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetserviceendpointresponse"></a>
<a id="schema_GetServiceEndpointResponse"></a>
<a id="tocSgetserviceendpointresponse"></a>
<a id="tocsgetserviceendpointresponse"></a>

```json
{
  "ServiceType": {},
  "ServiceEndpoint": {},
  "ServerTrust": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceType|object|false|none|none|
|ServiceEndpoint|object|false|none|none|
|ServerTrust|object|false|none|none|

<h2 id="tocS_GetServiceProfileResponse">GetServiceProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetserviceprofileresponse"></a>
<a id="schema_GetServiceProfileResponse"></a>
<a id="tocSgetserviceprofileresponse"></a>
<a id="tocsgetserviceprofileresponse"></a>

```json
{
  "Arn": {},
  "Name": {},
  "Id": {},
  "LoRaWAN": {
    "UlRate": {},
    "UlBucketSize": {},
    "UlRatePolicy": {},
    "DlRate": {},
    "DlBucketSize": {},
    "DlRatePolicy": {},
    "AddGwMetadata": {},
    "DevStatusReqFreq": {},
    "ReportDevStatusBattery": {},
    "ReportDevStatusMargin": {},
    "DrMin": {},
    "DrMax": {},
    "ChannelMask": {},
    "PrAllowed": {},
    "HrAllowed": {},
    "RaAllowed": {},
    "NwkGeoLoc": {},
    "TargetPer": {},
    "MinGwDiversity": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Id|object|false|none|none|
|LoRaWAN|object|false|none|none|

<h2 id="tocS_GetWirelessDeviceResponse">GetWirelessDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwirelessdeviceresponse"></a>
<a id="schema_GetWirelessDeviceResponse"></a>
<a id="tocSgetwirelessdeviceresponse"></a>
<a id="tocsgetwirelessdeviceresponse"></a>

```json
{
  "Type": {},
  "Name": {},
  "Description": {},
  "DestinationName": {},
  "Id": {},
  "Arn": {},
  "ThingName": {},
  "ThingArn": {},
  "LoRaWAN": {
    "DevEui": {},
    "DeviceProfileId": {},
    "ServiceProfileId": {},
    "OtaaV1_1": {
      "AppKey": {},
      "NwkKey": {},
      "JoinEui": {}
    },
    "OtaaV1_0_x": {
      "AppKey": {},
      "AppEui": {},
      "GenAppKey": {}
    },
    "AbpV1_1": {
      "DevAddr": {},
      "SessionKeys": {
        "FNwkSIntKey": {},
        "SNwkSIntKey": {},
        "NwkSEncKey": {},
        "AppSKey": {}
      },
      "FCntStart": {}
    },
    "AbpV1_0_x": {
      "DevAddr": {},
      "SessionKeys": {
        "NwkSKey": {},
        "AppSKey": {}
      },
      "FCntStart": {}
    },
    "FPorts": {
      "Fuota": 1,
      "Multicast": 1,
      "ClockSync": 1,
      "Positioning": {
        "ClockSync": 1,
        "Stream": 1,
        "Gnss": 1
      },
      "Applications": {}
    }
  },
  "Sidewalk": {
    "AmazonId": "string",
    "SidewalkId": {},
    "SidewalkManufacturingSn": {},
    "DeviceCertificates": {},
    "PrivateKeys": {},
    "DeviceProfileId": {},
    "CertificateId": {},
    "Status": {}
  },
  "Positioning": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|DestinationName|object|false|none|none|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|ThingName|object|false|none|none|
|ThingArn|object|false|none|none|
|LoRaWAN|object|false|none|none|
|Sidewalk|object|false|none|none|
|Positioning|object|false|none|none|

<h2 id="tocS_GetWirelessDeviceImportTaskResponse">GetWirelessDeviceImportTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwirelessdeviceimporttaskresponse"></a>
<a id="schema_GetWirelessDeviceImportTaskResponse"></a>
<a id="tocSgetwirelessdeviceimporttaskresponse"></a>
<a id="tocsgetwirelessdeviceimporttaskresponse"></a>

```json
{
  "Id": {},
  "Arn": {},
  "DestinationName": {},
  "Sidewalk": {
    "DeviceCreationFileList": {},
    "Role": {}
  },
  "CreationTime": {},
  "Status": {},
  "StatusReason": {},
  "InitializedImportedDeviceCount": {},
  "PendingImportedDeviceCount": {},
  "OnboardedImportedDeviceCount": {},
  "FailedImportedDeviceCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|DestinationName|object|false|none|none|
|Sidewalk|object|false|none|none|
|CreationTime|object|false|none|none|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|InitializedImportedDeviceCount|object|false|none|none|
|PendingImportedDeviceCount|object|false|none|none|
|OnboardedImportedDeviceCount|object|false|none|none|
|FailedImportedDeviceCount|object|false|none|none|

<h2 id="tocS_GetWirelessDeviceStatisticsResponse">GetWirelessDeviceStatisticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwirelessdevicestatisticsresponse"></a>
<a id="schema_GetWirelessDeviceStatisticsResponse"></a>
<a id="tocSgetwirelessdevicestatisticsresponse"></a>
<a id="tocsgetwirelessdevicestatisticsresponse"></a>

```json
{
  "WirelessDeviceId": {},
  "LastUplinkReceivedAt": {},
  "LoRaWAN": {
    "DevEui": {},
    "FPort": {},
    "DataRate": {},
    "Frequency": {},
    "Timestamp": {},
    "Gateways": {}
  },
  "Sidewalk": {
    "Rssi": {},
    "BatteryLevel": {},
    "Event": {},
    "DeviceState": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WirelessDeviceId|object|false|none|none|
|LastUplinkReceivedAt|object|false|none|none|
|LoRaWAN|object|false|none|none|
|Sidewalk|object|false|none|none|

<h2 id="tocS_GetWirelessGatewayResponse">GetWirelessGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwirelessgatewayresponse"></a>
<a id="schema_GetWirelessGatewayResponse"></a>
<a id="tocSgetwirelessgatewayresponse"></a>
<a id="tocsgetwirelessgatewayresponse"></a>

```json
{
  "Name": {},
  "Id": {},
  "Description": {},
  "LoRaWAN": {
    "GatewayEui": {},
    "RfRegion": {},
    "JoinEuiFilters": [
      [
        "string",
        "string"
      ]
    ],
    "NetIdFilters": [
      "string"
    ],
    "SubBands": [
      1
    ],
    "Beaconing": {
      "DataRate": {},
      "Frequencies": {}
    },
    "MaxEirp": {}
  },
  "Arn": {},
  "ThingName": {},
  "ThingArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Id|object|false|none|none|
|Description|object|false|none|none|
|LoRaWAN|object|false|none|none|
|Arn|object|false|none|none|
|ThingName|object|false|none|none|
|ThingArn|object|false|none|none|

<h2 id="tocS_GetWirelessGatewayCertificateResponse">GetWirelessGatewayCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwirelessgatewaycertificateresponse"></a>
<a id="schema_GetWirelessGatewayCertificateResponse"></a>
<a id="tocSgetwirelessgatewaycertificateresponse"></a>
<a id="tocsgetwirelessgatewaycertificateresponse"></a>

```json
{
  "IotCertificateId": {},
  "LoRaWANNetworkServerCertificateId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IotCertificateId|object|false|none|none|
|LoRaWANNetworkServerCertificateId|object|false|none|none|

<h2 id="tocS_GetWirelessGatewayFirmwareInformationResponse">GetWirelessGatewayFirmwareInformationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwirelessgatewayfirmwareinformationresponse"></a>
<a id="schema_GetWirelessGatewayFirmwareInformationResponse"></a>
<a id="tocSgetwirelessgatewayfirmwareinformationresponse"></a>
<a id="tocsgetwirelessgatewayfirmwareinformationresponse"></a>

```json
{
  "LoRaWAN": {
    "CurrentVersion": {
      "PackageVersion": {},
      "Model": {},
      "Station": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoRaWAN|object|false|none|none|

<h2 id="tocS_GetWirelessGatewayStatisticsResponse">GetWirelessGatewayStatisticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwirelessgatewaystatisticsresponse"></a>
<a id="schema_GetWirelessGatewayStatisticsResponse"></a>
<a id="tocSgetwirelessgatewaystatisticsresponse"></a>
<a id="tocsgetwirelessgatewaystatisticsresponse"></a>

```json
{
  "WirelessGatewayId": {},
  "LastUplinkReceivedAt": {},
  "ConnectionStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WirelessGatewayId|object|false|none|none|
|LastUplinkReceivedAt|object|false|none|none|
|ConnectionStatus|object|false|none|none|

<h2 id="tocS_GetWirelessGatewayTaskResponse">GetWirelessGatewayTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwirelessgatewaytaskresponse"></a>
<a id="schema_GetWirelessGatewayTaskResponse"></a>
<a id="tocSgetwirelessgatewaytaskresponse"></a>
<a id="tocsgetwirelessgatewaytaskresponse"></a>

```json
{
  "WirelessGatewayId": {},
  "WirelessGatewayTaskDefinitionId": {},
  "LastUplinkReceivedAt": {},
  "TaskCreatedAt": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WirelessGatewayId|object|false|none|none|
|WirelessGatewayTaskDefinitionId|object|false|none|none|
|LastUplinkReceivedAt|object|false|none|none|
|TaskCreatedAt|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_GetWirelessGatewayTaskDefinitionResponse">GetWirelessGatewayTaskDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwirelessgatewaytaskdefinitionresponse"></a>
<a id="schema_GetWirelessGatewayTaskDefinitionResponse"></a>
<a id="tocSgetwirelessgatewaytaskdefinitionresponse"></a>
<a id="tocsgetwirelessgatewaytaskdefinitionresponse"></a>

```json
{
  "AutoCreateTasks": {},
  "Name": {},
  "Update": {
    "UpdateDataSource": {},
    "UpdateDataRole": {},
    "LoRaWAN": {
      "UpdateSignature": {},
      "SigKeyCrc": {},
      "CurrentVersion": {
        "PackageVersion": {},
        "Model": {},
        "Station": {}
      },
      "UpdateVersion": {
        "PackageVersion": {},
        "Model": {},
        "Station": {}
      }
    }
  },
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoCreateTasks|object|false|none|none|
|Name|object|false|none|none|
|Update|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_ListDestinationsResponse">ListDestinationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdestinationsresponse"></a>
<a id="schema_ListDestinationsResponse"></a>
<a id="tocSlistdestinationsresponse"></a>
<a id="tocslistdestinationsresponse"></a>

```json
{
  "NextToken": {},
  "DestinationList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|DestinationList|object|false|none|none|

<h2 id="tocS_ListDeviceProfilesResponse">ListDeviceProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdeviceprofilesresponse"></a>
<a id="schema_ListDeviceProfilesResponse"></a>
<a id="tocSlistdeviceprofilesresponse"></a>
<a id="tocslistdeviceprofilesresponse"></a>

```json
{
  "NextToken": {},
  "DeviceProfileList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|DeviceProfileList|object|false|none|none|

<h2 id="tocS_ListDevicesForWirelessDeviceImportTaskResponse">ListDevicesForWirelessDeviceImportTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicesforwirelessdeviceimporttaskresponse"></a>
<a id="schema_ListDevicesForWirelessDeviceImportTaskResponse"></a>
<a id="tocSlistdevicesforwirelessdeviceimporttaskresponse"></a>
<a id="tocslistdevicesforwirelessdeviceimporttaskresponse"></a>

```json
{
  "NextToken": {},
  "DestinationName": {},
  "ImportedWirelessDeviceList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|DestinationName|object|false|none|none|
|ImportedWirelessDeviceList|object|false|none|none|

<h2 id="tocS_ListEventConfigurationsResponse">ListEventConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteventconfigurationsresponse"></a>
<a id="schema_ListEventConfigurationsResponse"></a>
<a id="tocSlisteventconfigurationsresponse"></a>
<a id="tocslisteventconfigurationsresponse"></a>

```json
{
  "NextToken": {},
  "EventConfigurationsList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|EventConfigurationsList|object|false|none|none|

<h2 id="tocS_ListFuotaTasksResponse">ListFuotaTasksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfuotatasksresponse"></a>
<a id="schema_ListFuotaTasksResponse"></a>
<a id="tocSlistfuotatasksresponse"></a>
<a id="tocslistfuotatasksresponse"></a>

```json
{
  "NextToken": {},
  "FuotaTaskList": [
    {
      "Id": "string",
      "Arn": "string",
      "Name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|FuotaTaskList|[FuotaTaskList](#schemafuotatasklist)|false|none|Lists the FUOTA tasks registered to your AWS account.|

<h2 id="tocS_ListMulticastGroupsResponse">ListMulticastGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmulticastgroupsresponse"></a>
<a id="schema_ListMulticastGroupsResponse"></a>
<a id="tocSlistmulticastgroupsresponse"></a>
<a id="tocslistmulticastgroupsresponse"></a>

```json
{
  "NextToken": {},
  "MulticastGroupList": [
    {
      "Id": "string",
      "Arn": "string",
      "Name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MulticastGroupList|[MulticastGroupList](#schemamulticastgrouplist)|false|none|List of multicast groups.|

<h2 id="tocS_ListMulticastGroupsByFuotaTaskResponse">ListMulticastGroupsByFuotaTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmulticastgroupsbyfuotataskresponse"></a>
<a id="schema_ListMulticastGroupsByFuotaTaskResponse"></a>
<a id="tocSlistmulticastgroupsbyfuotataskresponse"></a>
<a id="tocslistmulticastgroupsbyfuotataskresponse"></a>

```json
{
  "NextToken": {},
  "MulticastGroupList": [
    {
      "Id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MulticastGroupList|[MulticastGroupListByFuotaTask](#schemamulticastgrouplistbyfuotatask)|false|none|List of multicast groups associated with a FUOTA task.|

<h2 id="tocS_ListNetworkAnalyzerConfigurationsResponse">ListNetworkAnalyzerConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnetworkanalyzerconfigurationsresponse"></a>
<a id="schema_ListNetworkAnalyzerConfigurationsResponse"></a>
<a id="tocSlistnetworkanalyzerconfigurationsresponse"></a>
<a id="tocslistnetworkanalyzerconfigurationsresponse"></a>

```json
{
  "NextToken": {},
  "NetworkAnalyzerConfigurationList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|NetworkAnalyzerConfigurationList|object|false|none|none|

<h2 id="tocS_ListPartnerAccountsResponse">ListPartnerAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpartneraccountsresponse"></a>
<a id="schema_ListPartnerAccountsResponse"></a>
<a id="tocSlistpartneraccountsresponse"></a>
<a id="tocslistpartneraccountsresponse"></a>

```json
{
  "NextToken": {},
  "Sidewalk": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Sidewalk|object|false|none|none|

<h2 id="tocS_ListPositionConfigurationsResponse">ListPositionConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpositionconfigurationsresponse"></a>
<a id="schema_ListPositionConfigurationsResponse"></a>
<a id="tocSlistpositionconfigurationsresponse"></a>
<a id="tocslistpositionconfigurationsresponse"></a>

```json
{
  "PositionConfigurationList": {},
  "NextToken": {}
}
```

This operation is no longer supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PositionConfigurationList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListQueuedMessagesResponse">ListQueuedMessagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistqueuedmessagesresponse"></a>
<a id="schema_ListQueuedMessagesResponse"></a>
<a id="tocSlistqueuedmessagesresponse"></a>
<a id="tocslistqueuedmessagesresponse"></a>

```json
{
  "NextToken": {},
  "DownlinkQueueMessagesList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|DownlinkQueueMessagesList|object|false|none|none|

<h2 id="tocS_ListServiceProfilesResponse">ListServiceProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceprofilesresponse"></a>
<a id="schema_ListServiceProfilesResponse"></a>
<a id="tocSlistserviceprofilesresponse"></a>
<a id="tocslistserviceprofilesresponse"></a>

```json
{
  "NextToken": {},
  "ServiceProfileList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|ServiceProfileList|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListWirelessDeviceImportTasksResponse">ListWirelessDeviceImportTasksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwirelessdeviceimporttasksresponse"></a>
<a id="schema_ListWirelessDeviceImportTasksResponse"></a>
<a id="tocSlistwirelessdeviceimporttasksresponse"></a>
<a id="tocslistwirelessdeviceimporttasksresponse"></a>

```json
{
  "NextToken": {},
  "WirelessDeviceImportTaskList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|WirelessDeviceImportTaskList|object|false|none|none|

<h2 id="tocS_ListWirelessDevicesResponse">ListWirelessDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwirelessdevicesresponse"></a>
<a id="schema_ListWirelessDevicesResponse"></a>
<a id="tocSlistwirelessdevicesresponse"></a>
<a id="tocslistwirelessdevicesresponse"></a>

```json
{
  "NextToken": {},
  "WirelessDeviceList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|WirelessDeviceList|object|false|none|none|

<h2 id="tocS_ListWirelessGatewayTaskDefinitionsResponse">ListWirelessGatewayTaskDefinitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwirelessgatewaytaskdefinitionsresponse"></a>
<a id="schema_ListWirelessGatewayTaskDefinitionsResponse"></a>
<a id="tocSlistwirelessgatewaytaskdefinitionsresponse"></a>
<a id="tocslistwirelessgatewaytaskdefinitionsresponse"></a>

```json
{
  "NextToken": {},
  "TaskDefinitions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|TaskDefinitions|object|false|none|none|

<h2 id="tocS_ListWirelessGatewaysResponse">ListWirelessGatewaysResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwirelessgatewaysresponse"></a>
<a id="schema_ListWirelessGatewaysResponse"></a>
<a id="tocSlistwirelessgatewaysresponse"></a>
<a id="tocslistwirelessgatewaysresponse"></a>

```json
{
  "NextToken": {},
  "WirelessGatewayList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|WirelessGatewayList|object|false|none|none|

<h2 id="tocS_PutPositionConfigurationResponse">PutPositionConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputpositionconfigurationresponse"></a>
<a id="schema_PutPositionConfigurationResponse"></a>
<a id="tocSputpositionconfigurationresponse"></a>
<a id="tocsputpositionconfigurationresponse"></a>

```json
{}
```

This operation is no longer supported.

<h2 id="tocS_SemtechGnssConfiguration">SemtechGnssConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasemtechgnssconfiguration"></a>
<a id="schema_SemtechGnssConfiguration"></a>
<a id="tocSsemtechgnssconfiguration"></a>
<a id="tocssemtechgnssconfiguration"></a>

```json
{
  "Status": {},
  "Fec": {}
}
```

Information about the Semtech GNSS solver configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|
|Fec|object|true|none|none|

<h2 id="tocS_PutResourceLogLevelResponse">PutResourceLogLevelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputresourceloglevelresponse"></a>
<a id="schema_PutResourceLogLevelResponse"></a>
<a id="tocSputresourceloglevelresponse"></a>
<a id="tocsputresourceloglevelresponse"></a>

```json
{}
```

<h2 id="tocS_ResetAllResourceLogLevelsResponse">ResetAllResourceLogLevelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresetallresourceloglevelsresponse"></a>
<a id="schema_ResetAllResourceLogLevelsResponse"></a>
<a id="tocSresetallresourceloglevelsresponse"></a>
<a id="tocsresetallresourceloglevelsresponse"></a>

```json
{}
```

<h2 id="tocS_ResetResourceLogLevelResponse">ResetResourceLogLevelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresetresourceloglevelresponse"></a>
<a id="schema_ResetResourceLogLevelResponse"></a>
<a id="tocSresetresourceloglevelresponse"></a>
<a id="tocsresetresourceloglevelresponse"></a>

```json
{}
```

<h2 id="tocS_SendDataToMulticastGroupResponse">SendDataToMulticastGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemasenddatatomulticastgroupresponse"></a>
<a id="schema_SendDataToMulticastGroupResponse"></a>
<a id="tocSsenddatatomulticastgroupresponse"></a>
<a id="tocssenddatatomulticastgroupresponse"></a>

```json
{
  "MessageId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageId|[MulticastGroupMessageId](#schemamulticastgroupmessageid)|false|none|ID of a multicast group message.|

<h2 id="tocS_LoRaWANMulticastMetadata">LoRaWANMulticastMetadata</h2>
<!-- backwards compatibility -->
<a id="schemalorawanmulticastmetadata"></a>
<a id="schema_LoRaWANMulticastMetadata"></a>
<a id="tocSlorawanmulticastmetadata"></a>
<a id="tocslorawanmulticastmetadata"></a>

```json
{
  "FPort": 1
}
```

The metadata information of the LoRaWAN multicast group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FPort|[FPort](#schemafport)|false|none|The Fport value.|

<h2 id="tocS_SendDataToWirelessDeviceResponse">SendDataToWirelessDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemasenddatatowirelessdeviceresponse"></a>
<a id="schema_SendDataToWirelessDeviceResponse"></a>
<a id="tocSsenddatatowirelessdeviceresponse"></a>
<a id="tocssenddatatowirelessdeviceresponse"></a>

```json
{
  "MessageId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageId|object|false|none|none|

<h2 id="tocS_LoRaWANSendDataToDevice">LoRaWANSendDataToDevice</h2>
<!-- backwards compatibility -->
<a id="schemalorawansenddatatodevice"></a>
<a id="schema_LoRaWANSendDataToDevice"></a>
<a id="tocSlorawansenddatatodevice"></a>
<a id="tocslorawansenddatatodevice"></a>

```json
{
  "FPort": 1,
  "ParticipatingGateways": {
    "DownlinkMode": {},
    "GatewayList": {},
    "TransmissionInterval": {}
  }
}
```

LoRaWAN router info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FPort|[FPort](#schemafport)|false|none|The Fport value.|
|ParticipatingGateways|object|false|none|none|

<h2 id="tocS_SidewalkSendDataToDevice">SidewalkSendDataToDevice</h2>
<!-- backwards compatibility -->
<a id="schemasidewalksenddatatodevice"></a>
<a id="schema_SidewalkSendDataToDevice"></a>
<a id="tocSsidewalksenddatatodevice"></a>
<a id="tocssidewalksenddatatodevice"></a>

```json
{
  "Seq": {},
  "MessageType": "CUSTOM_COMMAND_ID_NOTIFY",
  "AckModeRetryDurationSecs": {}
}
```

Information about a Sidewalk router.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Seq|object|false|none|none|
|MessageType|[MessageType](#schemamessagetype)|false|none|Sidewalk device message type. Default value is <code>CUSTOM_COMMAND_ID_NOTIFY</code>.|
|AckModeRetryDurationSecs|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|MessageType|CUSTOM_COMMAND_ID_NOTIFY|
|MessageType|CUSTOM_COMMAND_ID_GET|
|MessageType|CUSTOM_COMMAND_ID_SET|
|MessageType|CUSTOM_COMMAND_ID_RESP|

<h2 id="tocS_StartBulkAssociateWirelessDeviceWithMulticastGroupResponse">StartBulkAssociateWirelessDeviceWithMulticastGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartbulkassociatewirelessdevicewithmulticastgroupresponse"></a>
<a id="schema_StartBulkAssociateWirelessDeviceWithMulticastGroupResponse"></a>
<a id="tocSstartbulkassociatewirelessdevicewithmulticastgroupresponse"></a>
<a id="tocsstartbulkassociatewirelessdevicewithmulticastgroupresponse"></a>

```json
{}
```

<h2 id="tocS_StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse">StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartbulkdisassociatewirelessdevicefrommulticastgroupresponse"></a>
<a id="schema_StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse"></a>
<a id="tocSstartbulkdisassociatewirelessdevicefrommulticastgroupresponse"></a>
<a id="tocsstartbulkdisassociatewirelessdevicefrommulticastgroupresponse"></a>

```json
{}
```

<h2 id="tocS_StartFuotaTaskResponse">StartFuotaTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartfuotataskresponse"></a>
<a id="schema_StartFuotaTaskResponse"></a>
<a id="tocSstartfuotataskresponse"></a>
<a id="tocsstartfuotataskresponse"></a>

```json
{}
```

<h2 id="tocS_StartTime">StartTime</h2>
<!-- backwards compatibility -->
<a id="schemastarttime"></a>
<a id="schema_StartTime"></a>
<a id="tocSstarttime"></a>
<a id="tocsstarttime"></a>

```json
"1970-01-01T00:00:00Z"
```

Start time of a FUOTA task.

<h2 id="tocS_StartMulticastGroupSessionResponse">StartMulticastGroupSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartmulticastgroupsessionresponse"></a>
<a id="schema_StartMulticastGroupSessionResponse"></a>
<a id="tocSstartmulticastgroupsessionresponse"></a>
<a id="tocsstartmulticastgroupsessionresponse"></a>

```json
{}
```

<h2 id="tocS_DlDr">DlDr</h2>
<!-- backwards compatibility -->
<a id="schemadldr"></a>
<a id="schema_DlDr"></a>
<a id="tocSdldr"></a>
<a id="tocsdldr"></a>

```json
0
```

Downlink data rate.

<h2 id="tocS_DlFreq">DlFreq</h2>
<!-- backwards compatibility -->
<a id="schemadlfreq"></a>
<a id="schema_DlFreq"></a>
<a id="tocSdlfreq"></a>
<a id="tocsdlfreq"></a>

```json
100000000
```

Downlink frequency.

<h2 id="tocS_SessionStartTimeTimestamp">SessionStartTimeTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemasessionstarttimetimestamp"></a>
<a id="schema_SessionStartTimeTimestamp"></a>
<a id="tocSsessionstarttimetimestamp"></a>
<a id="tocssessionstarttimetimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

Timestamp of when the multicast group session is to start.

<h2 id="tocS_SessionTimeout">SessionTimeout</h2>
<!-- backwards compatibility -->
<a id="schemasessiontimeout"></a>
<a id="schema_SessionTimeout"></a>
<a id="tocSsessiontimeout"></a>
<a id="tocssessiontimeout"></a>

```json
60
```

How long before a multicast group session is to timeout.

<h2 id="tocS_StartSingleWirelessDeviceImportTaskResponse">StartSingleWirelessDeviceImportTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartsinglewirelessdeviceimporttaskresponse"></a>
<a id="schema_StartSingleWirelessDeviceImportTaskResponse"></a>
<a id="tocSstartsinglewirelessdeviceimporttaskresponse"></a>
<a id="tocsstartsinglewirelessdeviceimporttaskresponse"></a>

```json
{
  "Id": {},
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_SidewalkManufacturingSn">SidewalkManufacturingSn</h2>
<!-- backwards compatibility -->
<a id="schemasidewalkmanufacturingsn"></a>
<a id="schema_SidewalkManufacturingSn"></a>
<a id="tocSsidewalkmanufacturingsn"></a>
<a id="tocssidewalkmanufacturingsn"></a>

```json
"string"
```

<h2 id="tocS_StartWirelessDeviceImportTaskResponse">StartWirelessDeviceImportTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartwirelessdeviceimporttaskresponse"></a>
<a id="schema_StartWirelessDeviceImportTaskResponse"></a>
<a id="tocSstartwirelessdeviceimporttaskresponse"></a>
<a id="tocsstartwirelessdeviceimporttaskresponse"></a>

```json
{
  "Id": {},
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_DeviceCreationFile">DeviceCreationFile</h2>
<!-- backwards compatibility -->
<a id="schemadevicecreationfile"></a>
<a id="schema_DeviceCreationFile"></a>
<a id="tocSdevicecreationfile"></a>
<a id="tocsdevicecreationfile"></a>

```json
"string"
```

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

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

<h2 id="tocS_TestWirelessDeviceResponse">TestWirelessDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schematestwirelessdeviceresponse"></a>
<a id="schema_TestWirelessDeviceResponse"></a>
<a id="tocStestwirelessdeviceresponse"></a>
<a id="tocstestwirelessdeviceresponse"></a>

```json
{
  "Result": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Result|object|false|none|none|

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

<h2 id="tocS_UpdateDestinationResponse">UpdateDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedestinationresponse"></a>
<a id="schema_UpdateDestinationResponse"></a>
<a id="tocSupdatedestinationresponse"></a>
<a id="tocsupdatedestinationresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateEventConfigurationByResourceTypesResponse">UpdateEventConfigurationByResourceTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateeventconfigurationbyresourcetypesresponse"></a>
<a id="schema_UpdateEventConfigurationByResourceTypesResponse"></a>
<a id="tocSupdateeventconfigurationbyresourcetypesresponse"></a>
<a id="tocsupdateeventconfigurationbyresourcetypesresponse"></a>

```json
{}
```

<h2 id="tocS_SidewalkResourceTypeEventConfiguration">SidewalkResourceTypeEventConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasidewalkresourcetypeeventconfiguration"></a>
<a id="schema_SidewalkResourceTypeEventConfiguration"></a>
<a id="tocSsidewalkresourcetypeeventconfiguration"></a>
<a id="tocssidewalkresourcetypeeventconfiguration"></a>

```json
{
  "WirelessDeviceEventTopic": {}
}
```

Sidewalk resource type event configuration object for enabling or disabling topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WirelessDeviceEventTopic|object|false|none|none|

<h2 id="tocS_LoRaWANJoinResourceTypeEventConfiguration">LoRaWANJoinResourceTypeEventConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalorawanjoinresourcetypeeventconfiguration"></a>
<a id="schema_LoRaWANJoinResourceTypeEventConfiguration"></a>
<a id="tocSlorawanjoinresourcetypeeventconfiguration"></a>
<a id="tocslorawanjoinresourcetypeeventconfiguration"></a>

```json
{
  "WirelessDeviceEventTopic": {}
}
```

Object for LoRaWAN join resource type event configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WirelessDeviceEventTopic|object|false|none|none|

<h2 id="tocS_LoRaWANConnectionStatusResourceTypeEventConfiguration">LoRaWANConnectionStatusResourceTypeEventConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalorawanconnectionstatusresourcetypeeventconfiguration"></a>
<a id="schema_LoRaWANConnectionStatusResourceTypeEventConfiguration"></a>
<a id="tocSlorawanconnectionstatusresourcetypeeventconfiguration"></a>
<a id="tocslorawanconnectionstatusresourcetypeeventconfiguration"></a>

```json
{
  "WirelessGatewayEventTopic": {}
}
```

Object for LoRaWAN connection status resource type event configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WirelessGatewayEventTopic|object|false|none|none|

<h2 id="tocS_UpdateFuotaTaskResponse">UpdateFuotaTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefuotataskresponse"></a>
<a id="schema_UpdateFuotaTaskResponse"></a>
<a id="tocSupdatefuotataskresponse"></a>
<a id="tocsupdatefuotataskresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateLogLevelsByResourceTypesResponse">UpdateLogLevelsByResourceTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloglevelsbyresourcetypesresponse"></a>
<a id="schema_UpdateLogLevelsByResourceTypesResponse"></a>
<a id="tocSupdateloglevelsbyresourcetypesresponse"></a>
<a id="tocsupdateloglevelsbyresourcetypesresponse"></a>

```json
{}
```

<h2 id="tocS_WirelessDeviceLogOption">WirelessDeviceLogOption</h2>
<!-- backwards compatibility -->
<a id="schemawirelessdevicelogoption"></a>
<a id="schema_WirelessDeviceLogOption"></a>
<a id="tocSwirelessdevicelogoption"></a>
<a id="tocswirelessdevicelogoption"></a>

```json
{
  "Type": {},
  "LogLevel": "INFO",
  "Events": [
    {
      "Event": "Join",
      "LogLevel": "INFO"
    }
  ]
}
```

The log options for wireless devices and can be used to set log levels for a specific type of wireless device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|LogLevel|[LogLevel](#schemaloglevel)|true|none|The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.|
|Events|[WirelessDeviceEventLogOptionList](#schemawirelessdeviceeventlogoptionlist)|false|none|The list of wireless device event log options.|

#### Enumerated Values

|Property|Value|
|---|---|
|LogLevel|INFO|
|LogLevel|ERROR|
|LogLevel|DISABLED|

<h2 id="tocS_WirelessGatewayLogOption">WirelessGatewayLogOption</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewaylogoption"></a>
<a id="schema_WirelessGatewayLogOption"></a>
<a id="tocSwirelessgatewaylogoption"></a>
<a id="tocswirelessgatewaylogoption"></a>

```json
{
  "Type": "LoRaWAN",
  "LogLevel": "INFO",
  "Events": [
    {
      "Event": "CUPS_Request",
      "LogLevel": "INFO"
    }
  ]
}
```

The log options for wireless gateways and can be used to set log levels for a specific type of wireless gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|[WirelessGatewayType](#schemawirelessgatewaytype)|true|none|The wireless gateway type.|
|LogLevel|[LogLevel](#schemaloglevel)|true|none|The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.|
|Events|[WirelessGatewayEventLogOptionList](#schemawirelessgatewayeventlogoptionlist)|false|none|The list of wireless gateway event log options.|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|LoRaWAN|
|LogLevel|INFO|
|LogLevel|ERROR|
|LogLevel|DISABLED|

<h2 id="tocS_UpdateMulticastGroupResponse">UpdateMulticastGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemulticastgroupresponse"></a>
<a id="schema_UpdateMulticastGroupResponse"></a>
<a id="tocSupdatemulticastgroupresponse"></a>
<a id="tocsupdatemulticastgroupresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateNetworkAnalyzerConfigurationResponse">UpdateNetworkAnalyzerConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenetworkanalyzerconfigurationresponse"></a>
<a id="schema_UpdateNetworkAnalyzerConfigurationResponse"></a>
<a id="tocSupdatenetworkanalyzerconfigurationresponse"></a>
<a id="tocsupdatenetworkanalyzerconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_UpdatePartnerAccountResponse">UpdatePartnerAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepartneraccountresponse"></a>
<a id="schema_UpdatePartnerAccountResponse"></a>
<a id="tocSupdatepartneraccountresponse"></a>
<a id="tocsupdatepartneraccountresponse"></a>

```json
{}
```

<h2 id="tocS_UpdatePositionResponse">UpdatePositionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepositionresponse"></a>
<a id="schema_UpdatePositionResponse"></a>
<a id="tocSupdatepositionresponse"></a>
<a id="tocsupdatepositionresponse"></a>

```json
{}
```

This operation is no longer supported.

<h2 id="tocS_PositionCoordinateValue">PositionCoordinateValue</h2>
<!-- backwards compatibility -->
<a id="schemapositioncoordinatevalue"></a>
<a id="schema_PositionCoordinateValue"></a>
<a id="tocSpositioncoordinatevalue"></a>
<a id="tocspositioncoordinatevalue"></a>

```json
0
```

<h2 id="tocS_UpdateResourceEventConfigurationResponse">UpdateResourceEventConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourceeventconfigurationresponse"></a>
<a id="schema_UpdateResourceEventConfigurationResponse"></a>
<a id="tocSupdateresourceeventconfigurationresponse"></a>
<a id="tocsupdateresourceeventconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_SidewalkEventNotificationConfigurations">SidewalkEventNotificationConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemasidewalkeventnotificationconfigurations"></a>
<a id="schema_SidewalkEventNotificationConfigurations"></a>
<a id="tocSsidewalkeventnotificationconfigurations"></a>
<a id="tocssidewalkeventnotificationconfigurations"></a>

```json
{
  "AmazonIdEventTopic": {}
}
```

 <code>SidewalkEventNotificationConfigurations</code> object, which is the event configuration object for Sidewalk-related event topics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmazonIdEventTopic|object|false|none|none|

<h2 id="tocS_EventNotificationTopicStatus">EventNotificationTopicStatus</h2>
<!-- backwards compatibility -->
<a id="schemaeventnotificationtopicstatus"></a>
<a id="schema_EventNotificationTopicStatus"></a>
<a id="tocSeventnotificationtopicstatus"></a>
<a id="tocseventnotificationtopicstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_LoRaWANJoinEventNotificationConfigurations">LoRaWANJoinEventNotificationConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemalorawanjoineventnotificationconfigurations"></a>
<a id="schema_LoRaWANJoinEventNotificationConfigurations"></a>
<a id="tocSlorawanjoineventnotificationconfigurations"></a>
<a id="tocslorawanjoineventnotificationconfigurations"></a>

```json
{
  "DevEuiEventTopic": {}
}
```

Object for LoRaWAN join resource type event configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DevEuiEventTopic|object|false|none|none|

<h2 id="tocS_LoRaWANConnectionStatusEventNotificationConfigurations">LoRaWANConnectionStatusEventNotificationConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemalorawanconnectionstatuseventnotificationconfigurations"></a>
<a id="schema_LoRaWANConnectionStatusEventNotificationConfigurations"></a>
<a id="tocSlorawanconnectionstatuseventnotificationconfigurations"></a>
<a id="tocslorawanconnectionstatuseventnotificationconfigurations"></a>

```json
{
  "GatewayEuiEventTopic": {}
}
```

Object for LoRaWAN connection status resource type event configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayEuiEventTopic|object|false|none|none|

<h2 id="tocS_UpdateResourcePositionResponse">UpdateResourcePositionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourcepositionresponse"></a>
<a id="schema_UpdateResourcePositionResponse"></a>
<a id="tocSupdateresourcepositionresponse"></a>
<a id="tocsupdateresourcepositionresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateWirelessDeviceResponse">UpdateWirelessDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewirelessdeviceresponse"></a>
<a id="schema_UpdateWirelessDeviceResponse"></a>
<a id="tocSupdatewirelessdeviceresponse"></a>
<a id="tocsupdatewirelessdeviceresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateAbpV1_1">UpdateAbpV1_1</h2>
<!-- backwards compatibility -->
<a id="schemaupdateabpv1_1"></a>
<a id="schema_UpdateAbpV1_1"></a>
<a id="tocSupdateabpv1_1"></a>
<a id="tocsupdateabpv1_1"></a>

```json
{
  "FCntStart": {}
}
```

ABP device object for LoRaWAN specification v1.1

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FCntStart|object|false|none|none|

<h2 id="tocS_UpdateAbpV1_0_x">UpdateAbpV1_0_x</h2>
<!-- backwards compatibility -->
<a id="schemaupdateabpv1_0_x"></a>
<a id="schema_UpdateAbpV1_0_x"></a>
<a id="tocSupdateabpv1_0_x"></a>
<a id="tocsupdateabpv1_0_x"></a>

```json
{
  "FCntStart": {}
}
```

ABP device object for LoRaWAN specification v1.0.x

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FCntStart|object|false|none|none|

<h2 id="tocS_UpdateFPorts">UpdateFPorts</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefports"></a>
<a id="schema_UpdateFPorts"></a>
<a id="tocSupdatefports"></a>
<a id="tocsupdatefports"></a>

```json
{
  "Positioning": {
    "ClockSync": 1,
    "Stream": 1,
    "Gnss": 1
  },
  "Applications": {}
}
```

Object for updating the FPorts information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Positioning|object|false|none|none|
|Applications|object|false|none|none|

<h2 id="tocS_UpdateWirelessDeviceImportTaskResponse">UpdateWirelessDeviceImportTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewirelessdeviceimporttaskresponse"></a>
<a id="schema_UpdateWirelessDeviceImportTaskResponse"></a>
<a id="tocSupdatewirelessdeviceimporttaskresponse"></a>
<a id="tocsupdatewirelessdeviceimporttaskresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateWirelessGatewayResponse">UpdateWirelessGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewirelessgatewayresponse"></a>
<a id="schema_UpdateWirelessGatewayResponse"></a>
<a id="tocSupdatewirelessgatewayresponse"></a>
<a id="tocsupdatewirelessgatewayresponse"></a>

```json
{}
```

<h2 id="tocS_JoinEuiRange">JoinEuiRange</h2>
<!-- backwards compatibility -->
<a id="schemajoineuirange"></a>
<a id="schema_JoinEuiRange"></a>
<a id="tocSjoineuirange"></a>
<a id="tocsjoineuirange"></a>

```json
[
  "string",
  "string"
]
```

A pair of join EUI describing a range [BegEui, EndEui], both ends are inclusive.

<h2 id="tocS_NetId">NetId</h2>
<!-- backwards compatibility -->
<a id="schemanetid"></a>
<a id="schema_NetId"></a>
<a id="tocSnetid"></a>
<a id="tocsnetid"></a>

```json
"string"
```

LoRaWAN network ID.

<h2 id="tocS_DevAddr">DevAddr</h2>
<!-- backwards compatibility -->
<a id="schemadevaddr"></a>
<a id="schema_DevAddr"></a>
<a id="tocSdevaddr"></a>
<a id="tocsdevaddr"></a>

```json
"string"
```

<h2 id="tocS_SessionKeysAbpV1_0_x">SessionKeysAbpV1_0_x</h2>
<!-- backwards compatibility -->
<a id="schemasessionkeysabpv1_0_x"></a>
<a id="schema_SessionKeysAbpV1_0_x"></a>
<a id="tocSsessionkeysabpv1_0_x"></a>
<a id="tocssessionkeysabpv1_0_x"></a>

```json
{
  "NwkSKey": {},
  "AppSKey": {}
}
```

Session keys for ABP v1.1

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NwkSKey|object|false|none|none|
|AppSKey|object|false|none|none|

<h2 id="tocS_FCntStart">FCntStart</h2>
<!-- backwards compatibility -->
<a id="schemafcntstart"></a>
<a id="schema_FCntStart"></a>
<a id="tocSfcntstart"></a>
<a id="tocsfcntstart"></a>

```json
0
```

The FCnt init value.

<h2 id="tocS_SessionKeysAbpV1_1">SessionKeysAbpV1_1</h2>
<!-- backwards compatibility -->
<a id="schemasessionkeysabpv1_1"></a>
<a id="schema_SessionKeysAbpV1_1"></a>
<a id="tocSsessionkeysabpv1_1"></a>
<a id="tocssessionkeysabpv1_1"></a>

```json
{
  "FNwkSIntKey": {},
  "SNwkSIntKey": {},
  "NwkSEncKey": {},
  "AppSKey": {}
}
```

Session keys for ABP v1.1

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FNwkSIntKey|object|false|none|none|
|SNwkSIntKey|object|false|none|none|
|NwkSEncKey|object|false|none|none|
|AppSKey|object|false|none|none|

<h2 id="tocS_AccountLinked">AccountLinked</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlinked"></a>
<a id="schema_AccountLinked"></a>
<a id="tocSaccountlinked"></a>
<a id="tocsaccountlinked"></a>

```json
true
```

<h2 id="tocS_HorizontalAccuracy">HorizontalAccuracy</h2>
<!-- backwards compatibility -->
<a id="schemahorizontalaccuracy"></a>
<a id="schema_HorizontalAccuracy"></a>
<a id="tocShorizontalaccuracy"></a>
<a id="tocshorizontalaccuracy"></a>

```json
0
```

<h2 id="tocS_VerticalAccuracy">VerticalAccuracy</h2>
<!-- backwards compatibility -->
<a id="schemaverticalaccuracy"></a>
<a id="schema_VerticalAccuracy"></a>
<a id="tocSverticalaccuracy"></a>
<a id="tocsverticalaccuracy"></a>

```json
0
```

<h2 id="tocS_Accuracy">Accuracy</h2>
<!-- backwards compatibility -->
<a id="schemaaccuracy"></a>
<a id="schema_Accuracy"></a>
<a id="tocSaccuracy"></a>
<a id="tocsaccuracy"></a>

```json
{
  "HorizontalAccuracy": {},
  "VerticalAccuracy": {}
}
```

The accuracy of the estimated position in meters. An empty value indicates that no position data is available. A value of ‘0.0’ value indicates that position data is available. This data corresponds to the position information that you specified instead of the position computed by solver.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HorizontalAccuracy|object|false|none|none|
|VerticalAccuracy|object|false|none|none|

<h2 id="tocS_AckModeRetryDurationSecs">AckModeRetryDurationSecs</h2>
<!-- backwards compatibility -->
<a id="schemaackmoderetrydurationsecs"></a>
<a id="schema_AckModeRetryDurationSecs"></a>
<a id="tocSackmoderetrydurationsecs"></a>
<a id="tocsackmoderetrydurationsecs"></a>

```json
0
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

<h2 id="tocS_ApId">ApId</h2>
<!-- backwards compatibility -->
<a id="schemaapid"></a>
<a id="schema_ApId"></a>
<a id="tocSapid"></a>
<a id="tocsapid"></a>

```json
"string"
```

<h2 id="tocS_AppEui">AppEui</h2>
<!-- backwards compatibility -->
<a id="schemaappeui"></a>
<a id="schema_AppEui"></a>
<a id="tocSappeui"></a>
<a id="tocsappeui"></a>

```json
"string"
```

<h2 id="tocS_AppKey">AppKey</h2>
<!-- backwards compatibility -->
<a id="schemaappkey"></a>
<a id="schema_AppKey"></a>
<a id="tocSappkey"></a>
<a id="tocsappkey"></a>

```json
"string"
```

<h2 id="tocS_AppSKey">AppSKey</h2>
<!-- backwards compatibility -->
<a id="schemaappskey"></a>
<a id="schema_AppSKey"></a>
<a id="tocSappskey"></a>
<a id="tocsappskey"></a>

```json
"string"
```

<h2 id="tocS_FPort">FPort</h2>
<!-- backwards compatibility -->
<a id="schemafport"></a>
<a id="schema_FPort"></a>
<a id="tocSfport"></a>
<a id="tocsfport"></a>

```json
1
```

The Fport value.

<h2 id="tocS_ApplicationConfigType">ApplicationConfigType</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationconfigtype"></a>
<a id="schema_ApplicationConfigType"></a>
<a id="tocSapplicationconfigtype"></a>
<a id="tocsapplicationconfigtype"></a>

```json
"SemtechGeolocation"
```

<h2 id="tocS_DestinationName">DestinationName</h2>
<!-- backwards compatibility -->
<a id="schemadestinationname"></a>
<a id="schema_DestinationName"></a>
<a id="tocSdestinationname"></a>
<a id="tocsdestinationname"></a>

```json
"string"
```

<h2 id="tocS_ApplicationConfig">ApplicationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationconfig"></a>
<a id="schema_ApplicationConfig"></a>
<a id="tocSapplicationconfig"></a>
<a id="tocsapplicationconfig"></a>

```json
{
  "FPort": 1,
  "Type": {},
  "DestinationName": {}
}
```

LoRaWAN application configuration, which can be used to perform geolocation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FPort|[FPort](#schemafport)|false|none|The Fport value.|
|Type|object|false|none|none|
|DestinationName|object|false|none|none|

<h2 id="tocS_ApplicationServerPublicKey">ApplicationServerPublicKey</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationserverpublickey"></a>
<a id="schema_ApplicationServerPublicKey"></a>
<a id="tocSapplicationserverpublickey"></a>
<a id="tocsapplicationserverpublickey"></a>

```json
"password"
```

<h2 id="tocS_Applications">Applications</h2>
<!-- backwards compatibility -->
<a id="schemaapplications"></a>
<a id="schema_Applications"></a>
<a id="tocSapplications"></a>
<a id="tocsapplications"></a>

```json
[
  {
    "FPort": 1,
    "Type": {},
    "DestinationName": {}
  }
]
```

<h2 id="tocS_SidewalkAccountInfo">SidewalkAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemasidewalkaccountinfo"></a>
<a id="schema_SidewalkAccountInfo"></a>
<a id="tocSsidewalkaccountinfo"></a>
<a id="tocssidewalkaccountinfo"></a>

```json
{
  "AmazonId": {},
  "AppServerPrivateKey": {}
}
```

Information about a Sidewalk account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmazonId|object|false|none|none|
|AppServerPrivateKey|object|false|none|none|

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"string"
```

Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.

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

The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.

<h2 id="tocS_AssociateAwsAccountWithPartnerAccountRequest">AssociateAwsAccountWithPartnerAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateawsaccountwithpartneraccountrequest"></a>
<a id="schema_AssociateAwsAccountWithPartnerAccountRequest"></a>
<a id="tocSassociateawsaccountwithpartneraccountrequest"></a>
<a id="tocsassociateawsaccountwithpartneraccountrequest"></a>

```json
{
  "Sidewalk": {
    "AmazonId": {},
    "AppServerPrivateKey": {}
  },
  "ClientRequestToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sidewalk|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_PartnerAccountArn">PartnerAccountArn</h2>
<!-- backwards compatibility -->
<a id="schemapartneraccountarn"></a>
<a id="schema_PartnerAccountArn"></a>
<a id="tocSpartneraccountarn"></a>
<a id="tocspartneraccountarn"></a>

```json
"string"
```

<h2 id="tocS_FuotaTaskId">FuotaTaskId</h2>
<!-- backwards compatibility -->
<a id="schemafuotataskid"></a>
<a id="schema_FuotaTaskId"></a>
<a id="tocSfuotataskid"></a>
<a id="tocsfuotataskid"></a>

```json
"string"
```

The ID of a FUOTA task.

<h2 id="tocS_MulticastGroupId">MulticastGroupId</h2>
<!-- backwards compatibility -->
<a id="schemamulticastgroupid"></a>
<a id="schema_MulticastGroupId"></a>
<a id="tocSmulticastgroupid"></a>
<a id="tocsmulticastgroupid"></a>

```json
"string"
```

The ID of the multicast group.

<h2 id="tocS_AssociateMulticastGroupWithFuotaTaskRequest">AssociateMulticastGroupWithFuotaTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatemulticastgroupwithfuotataskrequest"></a>
<a id="schema_AssociateMulticastGroupWithFuotaTaskRequest"></a>
<a id="tocSassociatemulticastgroupwithfuotataskrequest"></a>
<a id="tocsassociatemulticastgroupwithfuotataskrequest"></a>

```json
{
  "MulticastGroupId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MulticastGroupId|[MulticastGroupId](#schemamulticastgroupid)|true|none|The ID of the multicast group.|

<h2 id="tocS_AssociateWirelessDeviceWithFuotaTaskRequest">AssociateWirelessDeviceWithFuotaTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatewirelessdevicewithfuotataskrequest"></a>
<a id="schema_AssociateWirelessDeviceWithFuotaTaskRequest"></a>
<a id="tocSassociatewirelessdevicewithfuotataskrequest"></a>
<a id="tocsassociatewirelessdevicewithfuotataskrequest"></a>

```json
{
  "WirelessDeviceId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WirelessDeviceId|[WirelessDeviceId](#schemawirelessdeviceid)|true|none|The ID of the wireless device.|

<h2 id="tocS_AssociateWirelessDeviceWithMulticastGroupRequest">AssociateWirelessDeviceWithMulticastGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatewirelessdevicewithmulticastgrouprequest"></a>
<a id="schema_AssociateWirelessDeviceWithMulticastGroupRequest"></a>
<a id="tocSassociatewirelessdevicewithmulticastgrouprequest"></a>
<a id="tocsassociatewirelessdevicewithmulticastgrouprequest"></a>

```json
{
  "WirelessDeviceId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WirelessDeviceId|[WirelessDeviceId](#schemawirelessdeviceid)|true|none|The ID of the wireless device.|

<h2 id="tocS_ThingArn">ThingArn</h2>
<!-- backwards compatibility -->
<a id="schemathingarn"></a>
<a id="schema_ThingArn"></a>
<a id="tocSthingarn"></a>
<a id="tocsthingarn"></a>

```json
"string"
```

<h2 id="tocS_AssociateWirelessDeviceWithThingRequest">AssociateWirelessDeviceWithThingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatewirelessdevicewiththingrequest"></a>
<a id="schema_AssociateWirelessDeviceWithThingRequest"></a>
<a id="tocSassociatewirelessdevicewiththingrequest"></a>
<a id="tocsassociatewirelessdevicewiththingrequest"></a>

```json
{
  "ThingArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ThingArn|object|true|none|none|

<h2 id="tocS_IotCertificateId">IotCertificateId</h2>
<!-- backwards compatibility -->
<a id="schemaiotcertificateid"></a>
<a id="schema_IotCertificateId"></a>
<a id="tocSiotcertificateid"></a>
<a id="tocsiotcertificateid"></a>

```json
"string"
```

<h2 id="tocS_AssociateWirelessGatewayWithCertificateRequest">AssociateWirelessGatewayWithCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatewirelessgatewaywithcertificaterequest"></a>
<a id="schema_AssociateWirelessGatewayWithCertificateRequest"></a>
<a id="tocSassociatewirelessgatewaywithcertificaterequest"></a>
<a id="tocsassociatewirelessgatewaywithcertificaterequest"></a>

```json
{
  "IotCertificateId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IotCertificateId|object|true|none|none|

<h2 id="tocS_AssociateWirelessGatewayWithThingRequest">AssociateWirelessGatewayWithThingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatewirelessgatewaywiththingrequest"></a>
<a id="schema_AssociateWirelessGatewayWithThingRequest"></a>
<a id="tocSassociatewirelessgatewaywiththingrequest"></a>
<a id="tocsassociatewirelessgatewaywiththingrequest"></a>

```json
{
  "ThingArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ThingArn|object|true|none|none|

<h2 id="tocS_AutoCreateTasks">AutoCreateTasks</h2>
<!-- backwards compatibility -->
<a id="schemaautocreatetasks"></a>
<a id="schema_AutoCreateTasks"></a>
<a id="tocSautocreatetasks"></a>
<a id="tocsautocreatetasks"></a>

```json
true
```

<h2 id="tocS_BCCH">BCCH</h2>
<!-- backwards compatibility -->
<a id="schemabcch"></a>
<a id="schema_BCCH"></a>
<a id="tocSbcch"></a>
<a id="tocsbcch"></a>

```json
0
```

<h2 id="tocS_BSIC">BSIC</h2>
<!-- backwards compatibility -->
<a id="schemabsic"></a>
<a id="schema_BSIC"></a>
<a id="tocSbsic"></a>
<a id="tocsbsic"></a>

```json
0
```

<h2 id="tocS_BaseLat">BaseLat</h2>
<!-- backwards compatibility -->
<a id="schemabaselat"></a>
<a id="schema_BaseLat"></a>
<a id="tocSbaselat"></a>
<a id="tocsbaselat"></a>

```json
-90
```

<h2 id="tocS_BaseLng">BaseLng</h2>
<!-- backwards compatibility -->
<a id="schemabaselng"></a>
<a id="schema_BaseLng"></a>
<a id="tocSbaselng"></a>
<a id="tocsbaselng"></a>

```json
-180
```

<h2 id="tocS_BaseStationId">BaseStationId</h2>
<!-- backwards compatibility -->
<a id="schemabasestationid"></a>
<a id="schema_BaseStationId"></a>
<a id="tocSbasestationid"></a>
<a id="tocsbasestationid"></a>

```json
0
```

<h2 id="tocS_BatteryLevel">BatteryLevel</h2>
<!-- backwards compatibility -->
<a id="schemabatterylevel"></a>
<a id="schema_BatteryLevel"></a>
<a id="tocSbatterylevel"></a>
<a id="tocsbatterylevel"></a>

```json
"normal"
```

Sidewalk device battery level.

<h2 id="tocS_BeaconingDataRate">BeaconingDataRate</h2>
<!-- backwards compatibility -->
<a id="schemabeaconingdatarate"></a>
<a id="schema_BeaconingDataRate"></a>
<a id="tocSbeaconingdatarate"></a>
<a id="tocsbeaconingdatarate"></a>

```json
0
```

<h2 id="tocS_BeaconingFrequencies">BeaconingFrequencies</h2>
<!-- backwards compatibility -->
<a id="schemabeaconingfrequencies"></a>
<a id="schema_BeaconingFrequencies"></a>
<a id="tocSbeaconingfrequencies"></a>
<a id="tocsbeaconingfrequencies"></a>

```json
[
  100000000
]
```

<h2 id="tocS_BeaconingFrequency">BeaconingFrequency</h2>
<!-- backwards compatibility -->
<a id="schemabeaconingfrequency"></a>
<a id="schema_BeaconingFrequency"></a>
<a id="tocSbeaconingfrequency"></a>
<a id="tocsbeaconingfrequency"></a>

```json
100000000
```

<h2 id="tocS_CancelMulticastGroupSessionRequest">CancelMulticastGroupSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelmulticastgroupsessionrequest"></a>
<a id="schema_CancelMulticastGroupSessionRequest"></a>
<a id="tocScancelmulticastgroupsessionrequest"></a>
<a id="tocscancelmulticastgroupsessionrequest"></a>

```json
{}
```

<h2 id="tocS_CdmaChannel">CdmaChannel</h2>
<!-- backwards compatibility -->
<a id="schemacdmachannel"></a>
<a id="schema_CdmaChannel"></a>
<a id="tocScdmachannel"></a>
<a id="tocscdmachannel"></a>

```json
0
```

<h2 id="tocS_CdmaObj">CdmaObj</h2>
<!-- backwards compatibility -->
<a id="schemacdmaobj"></a>
<a id="schema_CdmaObj"></a>
<a id="tocScdmaobj"></a>
<a id="tocscdmaobj"></a>

```json
{
  "SystemId": {},
  "NetworkId": {},
  "BaseStationId": {},
  "RegistrationZone": {},
  "CdmaLocalId": {
    "PnOffset": {},
    "CdmaChannel": {}
  },
  "PilotPower": {},
  "BaseLat": {},
  "BaseLng": {},
  "CdmaNmr": {}
}
```

CDMA (Code-division multiple access) object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SystemId|object|true|none|none|
|NetworkId|object|true|none|none|
|BaseStationId|object|true|none|none|
|RegistrationZone|object|false|none|none|
|CdmaLocalId|object|false|none|none|
|PilotPower|object|false|none|none|
|BaseLat|object|false|none|none|
|BaseLng|object|false|none|none|
|CdmaNmr|object|false|none|none|

<h2 id="tocS_PnOffset">PnOffset</h2>
<!-- backwards compatibility -->
<a id="schemapnoffset"></a>
<a id="schema_PnOffset"></a>
<a id="tocSpnoffset"></a>
<a id="tocspnoffset"></a>

```json
0
```

<h2 id="tocS_CdmaLocalId">CdmaLocalId</h2>
<!-- backwards compatibility -->
<a id="schemacdmalocalid"></a>
<a id="schema_CdmaLocalId"></a>
<a id="tocScdmalocalid"></a>
<a id="tocscdmalocalid"></a>

```json
{
  "PnOffset": {},
  "CdmaChannel": {}
}
```

CDMA local ID information, which corresponds to the local identification parameters of a CDMA cell.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PnOffset|object|true|none|none|
|CdmaChannel|object|true|none|none|

<h2 id="tocS_CdmaNmrObj">CdmaNmrObj</h2>
<!-- backwards compatibility -->
<a id="schemacdmanmrobj"></a>
<a id="schema_CdmaNmrObj"></a>
<a id="tocScdmanmrobj"></a>
<a id="tocscdmanmrobj"></a>

```json
{
  "PnOffset": {},
  "CdmaChannel": {},
  "PilotPower": {},
  "BaseStationId": {}
}
```

CDMA object for network measurement reports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PnOffset|object|true|none|none|
|CdmaChannel|object|true|none|none|
|PilotPower|object|false|none|none|
|BaseStationId|object|false|none|none|

<h2 id="tocS_CdmaNmrList">CdmaNmrList</h2>
<!-- backwards compatibility -->
<a id="schemacdmanmrlist"></a>
<a id="schema_CdmaNmrList"></a>
<a id="tocScdmanmrlist"></a>
<a id="tocscdmanmrlist"></a>

```json
[
  {
    "PnOffset": {},
    "CdmaChannel": {},
    "PilotPower": {},
    "BaseStationId": {}
  }
]
```

<h2 id="tocS_PilotPower">PilotPower</h2>
<!-- backwards compatibility -->
<a id="schemapilotpower"></a>
<a id="schema_PilotPower"></a>
<a id="tocSpilotpower"></a>
<a id="tocspilotpower"></a>

```json
-142
```

<h2 id="tocS_SystemId">SystemId</h2>
<!-- backwards compatibility -->
<a id="schemasystemid"></a>
<a id="schema_SystemId"></a>
<a id="tocSsystemid"></a>
<a id="tocssystemid"></a>

```json
1
```

<h2 id="tocS_NetworkId">NetworkId</h2>
<!-- backwards compatibility -->
<a id="schemanetworkid"></a>
<a id="schema_NetworkId"></a>
<a id="tocSnetworkid"></a>
<a id="tocsnetworkid"></a>

```json
0
```

<h2 id="tocS_RegistrationZone">RegistrationZone</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationzone"></a>
<a id="schema_RegistrationZone"></a>
<a id="tocSregistrationzone"></a>
<a id="tocsregistrationzone"></a>

```json
0
```

<h2 id="tocS_CellParams">CellParams</h2>
<!-- backwards compatibility -->
<a id="schemacellparams"></a>
<a id="schema_CellParams"></a>
<a id="tocScellparams"></a>
<a id="tocscellparams"></a>

```json
0
```

<h2 id="tocS_CellTowers">CellTowers</h2>
<!-- backwards compatibility -->
<a id="schemacelltowers"></a>
<a id="schema_CellTowers"></a>
<a id="tocScelltowers"></a>
<a id="tocscelltowers"></a>

```json
{
  "Gsm": {},
  "Wcdma": {},
  "Tdscdma": {},
  "Lte": {},
  "Cdma": {}
}
```

The cell towers that were used to perform the measurements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Gsm|object|false|none|none|
|Wcdma|object|false|none|none|
|Tdscdma|object|false|none|none|
|Lte|object|false|none|none|
|Cdma|object|false|none|none|

<h2 id="tocS_SigningAlg">SigningAlg</h2>
<!-- backwards compatibility -->
<a id="schemasigningalg"></a>
<a id="schema_SigningAlg"></a>
<a id="tocSsigningalg"></a>
<a id="tocssigningalg"></a>

```json
"Ed25519"
```

The certificate chain algorithm provided by sidewalk.

<h2 id="tocS_CertificateValue">CertificateValue</h2>
<!-- backwards compatibility -->
<a id="schemacertificatevalue"></a>
<a id="schema_CertificateValue"></a>
<a id="tocScertificatevalue"></a>
<a id="tocscertificatevalue"></a>

```json
"string"
```

Certificate value.

<h2 id="tocS_CertificateList">CertificateList</h2>
<!-- backwards compatibility -->
<a id="schemacertificatelist"></a>
<a id="schema_CertificateList"></a>
<a id="tocScertificatelist"></a>
<a id="tocscertificatelist"></a>

```json
{
  "SigningAlg": {},
  "Value": {}
}
```

List of sidewalk certificates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SigningAlg|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_CertificatePEM">CertificatePEM</h2>
<!-- backwards compatibility -->
<a id="schemacertificatepem"></a>
<a id="schema_CertificatePEM"></a>
<a id="tocScertificatepem"></a>
<a id="tocscertificatepem"></a>

```json
"string"
```

<h2 id="tocS_ChannelMask">ChannelMask</h2>
<!-- backwards compatibility -->
<a id="schemachannelmask"></a>
<a id="schema_ChannelMask"></a>
<a id="tocSchannelmask"></a>
<a id="tocschannelmask"></a>

```json
"string"
```

<h2 id="tocS_ConnectionStatus">ConnectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstatus"></a>
<a id="schema_ConnectionStatus"></a>
<a id="tocSconnectionstatus"></a>
<a id="tocsconnectionstatus"></a>

```json
"Connected"
```

<h2 id="tocS_ConnectionStatusEventConfiguration">ConnectionStatusEventConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstatuseventconfiguration"></a>
<a id="schema_ConnectionStatusEventConfiguration"></a>
<a id="tocSconnectionstatuseventconfiguration"></a>
<a id="tocsconnectionstatuseventconfiguration"></a>

```json
{
  "LoRaWAN": {
    "GatewayEuiEventTopic": {}
  },
  "WirelessGatewayIdEventTopic": {}
}
```

Connection status event configuration object for enabling or disabling topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoRaWAN|object|false|none|none|
|WirelessGatewayIdEventTopic|object|false|none|none|

<h2 id="tocS_ConnectionStatusResourceTypeEventConfiguration">ConnectionStatusResourceTypeEventConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstatusresourcetypeeventconfiguration"></a>
<a id="schema_ConnectionStatusResourceTypeEventConfiguration"></a>
<a id="tocSconnectionstatusresourcetypeeventconfiguration"></a>
<a id="tocsconnectionstatusresourcetypeeventconfiguration"></a>

```json
{
  "LoRaWAN": {
    "WirelessGatewayEventTopic": {}
  }
}
```

Connection status resource type event configuration object for enabling or disabling topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoRaWAN|object|false|none|none|

<h2 id="tocS_Crc">Crc</h2>
<!-- backwards compatibility -->
<a id="schemacrc"></a>
<a id="schema_Crc"></a>
<a id="tocScrc"></a>
<a id="tocscrc"></a>

```json
1
```

<h2 id="tocS_ExpressionType">ExpressionType</h2>
<!-- backwards compatibility -->
<a id="schemaexpressiontype"></a>
<a id="schema_ExpressionType"></a>
<a id="tocSexpressiontype"></a>
<a id="tocsexpressiontype"></a>

```json
"RuleName"
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

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

The description of the new resource.

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_CreateDestinationRequest">CreateDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedestinationrequest"></a>
<a id="schema_CreateDestinationRequest"></a>
<a id="tocScreatedestinationrequest"></a>
<a id="tocscreatedestinationrequest"></a>

```json
{
  "Name": {},
  "ExpressionType": {},
  "Expression": {},
  "Description": {},
  "RoleArn": {},
  "Tags": {},
  "ClientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ExpressionType|object|true|none|none|
|Expression|object|true|none|none|
|Description|object|false|none|none|
|RoleArn|object|true|none|none|
|Tags|object|false|none|none|
|ClientRequestToken|object|false|none|none|

<h2 id="tocS_DestinationArn">DestinationArn</h2>
<!-- backwards compatibility -->
<a id="schemadestinationarn"></a>
<a id="schema_DestinationArn"></a>
<a id="tocSdestinationarn"></a>
<a id="tocsdestinationarn"></a>

```json
"string"
```

<h2 id="tocS_DeviceProfileName">DeviceProfileName</h2>
<!-- backwards compatibility -->
<a id="schemadeviceprofilename"></a>
<a id="schema_DeviceProfileName"></a>
<a id="tocSdeviceprofilename"></a>
<a id="tocsdeviceprofilename"></a>

```json
"string"
```

<h2 id="tocS_LoRaWANDeviceProfile">LoRaWANDeviceProfile</h2>
<!-- backwards compatibility -->
<a id="schemalorawandeviceprofile"></a>
<a id="schema_LoRaWANDeviceProfile"></a>
<a id="tocSlorawandeviceprofile"></a>
<a id="tocslorawandeviceprofile"></a>

```json
{
  "SupportsClassB": {},
  "ClassBTimeout": {},
  "PingSlotPeriod": {},
  "PingSlotDr": {},
  "PingSlotFreq": {},
  "SupportsClassC": {},
  "ClassCTimeout": {},
  "MacVersion": {},
  "RegParamsRevision": {},
  "RxDelay1": {},
  "RxDrOffset1": {},
  "RxDataRate2": {},
  "RxFreq2": {},
  "FactoryPresetFreqsList": {},
  "MaxEirp": {},
  "MaxDutyCycle": {},
  "RfRegion": {},
  "SupportsJoin": {},
  "Supports32BitFCnt": {}
}
```

LoRaWANDeviceProfile object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SupportsClassB|object|false|none|none|
|ClassBTimeout|object|false|none|none|
|PingSlotPeriod|object|false|none|none|
|PingSlotDr|object|false|none|none|
|PingSlotFreq|object|false|none|none|
|SupportsClassC|object|false|none|none|
|ClassCTimeout|object|false|none|none|
|MacVersion|object|false|none|none|
|RegParamsRevision|object|false|none|none|
|RxDelay1|object|false|none|none|
|RxDrOffset1|object|false|none|none|
|RxDataRate2|object|false|none|none|
|RxFreq2|object|false|none|none|
|FactoryPresetFreqsList|object|false|none|none|
|MaxEirp|object|false|none|none|
|MaxDutyCycle|object|false|none|none|
|RfRegion|object|false|none|none|
|SupportsJoin|object|false|none|none|
|Supports32BitFCnt|object|false|none|none|

<h2 id="tocS_SidewalkCreateDeviceProfile">SidewalkCreateDeviceProfile</h2>
<!-- backwards compatibility -->
<a id="schemasidewalkcreatedeviceprofile"></a>
<a id="schema_SidewalkCreateDeviceProfile"></a>
<a id="tocSsidewalkcreatedeviceprofile"></a>
<a id="tocssidewalkcreatedeviceprofile"></a>

```json
{}
```

Sidewalk object for creating a device profile.

<h2 id="tocS_CreateDeviceProfileRequest">CreateDeviceProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeviceprofilerequest"></a>
<a id="schema_CreateDeviceProfileRequest"></a>
<a id="tocScreatedeviceprofilerequest"></a>
<a id="tocscreatedeviceprofilerequest"></a>

```json
{
  "Name": {},
  "LoRaWAN": {
    "SupportsClassB": {},
    "ClassBTimeout": {},
    "PingSlotPeriod": {},
    "PingSlotDr": {},
    "PingSlotFreq": {},
    "SupportsClassC": {},
    "ClassCTimeout": {},
    "MacVersion": {},
    "RegParamsRevision": {},
    "RxDelay1": {},
    "RxDrOffset1": {},
    "RxDataRate2": {},
    "RxFreq2": {},
    "FactoryPresetFreqsList": {},
    "MaxEirp": {},
    "MaxDutyCycle": {},
    "RfRegion": {},
    "SupportsJoin": {},
    "Supports32BitFCnt": {}
  },
  "Tags": {},
  "ClientRequestToken": {},
  "Sidewalk": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|LoRaWAN|object|false|none|none|
|Tags|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|Sidewalk|object|false|none|none|

<h2 id="tocS_DeviceProfileArn">DeviceProfileArn</h2>
<!-- backwards compatibility -->
<a id="schemadeviceprofilearn"></a>
<a id="schema_DeviceProfileArn"></a>
<a id="tocSdeviceprofilearn"></a>
<a id="tocsdeviceprofilearn"></a>

```json
"string"
```

<h2 id="tocS_FuotaTaskName">FuotaTaskName</h2>
<!-- backwards compatibility -->
<a id="schemafuotataskname"></a>
<a id="schema_FuotaTaskName"></a>
<a id="tocSfuotataskname"></a>
<a id="tocsfuotataskname"></a>

```json
"string"
```

The name of a FUOTA task.

<h2 id="tocS_LoRaWANFuotaTask">LoRaWANFuotaTask</h2>
<!-- backwards compatibility -->
<a id="schemalorawanfuotatask"></a>
<a id="schema_LoRaWANFuotaTask"></a>
<a id="tocSlorawanfuotatask"></a>
<a id="tocslorawanfuotatask"></a>

```json
{
  "RfRegion": "EU868"
}
```

The LoRaWAN information used with a FUOTA task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RfRegion|[SupportedRfRegion](#schemasupportedrfregion)|false|none|Supported RfRegions|

#### Enumerated Values

|Property|Value|
|---|---|
|RfRegion|EU868|
|RfRegion|US915|
|RfRegion|AU915|
|RfRegion|AS923-1|
|RfRegion|AS923-2|
|RfRegion|AS923-3|
|RfRegion|AS923-4|
|RfRegion|EU433|
|RfRegion|CN470|
|RfRegion|CN779|
|RfRegion|RU864|
|RfRegion|KR920|
|RfRegion|IN865|

<h2 id="tocS_FirmwareUpdateImage">FirmwareUpdateImage</h2>
<!-- backwards compatibility -->
<a id="schemafirmwareupdateimage"></a>
<a id="schema_FirmwareUpdateImage"></a>
<a id="tocSfirmwareupdateimage"></a>
<a id="tocsfirmwareupdateimage"></a>

```json
"string"
```

The S3 URI points to a firmware update image that is to be used with a FUOTA task.

<h2 id="tocS_FirmwareUpdateRole">FirmwareUpdateRole</h2>
<!-- backwards compatibility -->
<a id="schemafirmwareupdaterole"></a>
<a id="schema_FirmwareUpdateRole"></a>
<a id="tocSfirmwareupdaterole"></a>
<a id="tocsfirmwareupdaterole"></a>

```json
"string"
```

The firmware update role that is to be used with a FUOTA task.

<h2 id="tocS_RedundancyPercent">RedundancyPercent</h2>
<!-- backwards compatibility -->
<a id="schemaredundancypercent"></a>
<a id="schema_RedundancyPercent"></a>
<a id="tocSredundancypercent"></a>
<a id="tocsredundancypercent"></a>

```json
0
```

The percentage of added redundant fragments. For example, if firmware file is 100 bytes and fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.

<h2 id="tocS_FragmentSizeBytes">FragmentSizeBytes</h2>
<!-- backwards compatibility -->
<a id="schemafragmentsizebytes"></a>
<a id="schema_FragmentSizeBytes"></a>
<a id="tocSfragmentsizebytes"></a>
<a id="tocsfragmentsizebytes"></a>

```json
1
```

The size of each fragment in bytes. Currently only supported in fuota tasks with multicast groups.

<h2 id="tocS_FragmentIntervalMS">FragmentIntervalMS</h2>
<!-- backwards compatibility -->
<a id="schemafragmentintervalms"></a>
<a id="schema_FragmentIntervalMS"></a>
<a id="tocSfragmentintervalms"></a>
<a id="tocsfragmentintervalms"></a>

```json
1
```

The interval of sending fragments in milliseconds. Currently the interval will be rounded to the nearest second. Note that this interval only controls the timing when the cloud sends the fragments down. The actual delay of receiving fragments at device side depends on the device's class and the communication delay with the cloud.

<h2 id="tocS_CreateFuotaTaskRequest">CreateFuotaTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefuotataskrequest"></a>
<a id="schema_CreateFuotaTaskRequest"></a>
<a id="tocScreatefuotataskrequest"></a>
<a id="tocscreatefuotataskrequest"></a>

```json
{
  "Name": "string",
  "Description": "string",
  "ClientRequestToken": "string",
  "LoRaWAN": {
    "RfRegion": "EU868"
  },
  "FirmwareUpdateImage": "string",
  "FirmwareUpdateRole": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "RedundancyPercent": 0,
  "FragmentSizeBytes": 1,
  "FragmentIntervalMS": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|[FuotaTaskName](#schemafuotataskname)|false|none|The name of a FUOTA task.|
|Description|[Description](#schemadescription)|false|none|The description of the new resource.|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.|
|LoRaWAN|[LoRaWANFuotaTask](#schemalorawanfuotatask)|false|none|The LoRaWAN information used with a FUOTA task.|
|FirmwareUpdateImage|[FirmwareUpdateImage](#schemafirmwareupdateimage)|true|none|The S3 URI points to a firmware update image that is to be used with a FUOTA task.|
|FirmwareUpdateRole|[FirmwareUpdateRole](#schemafirmwareupdaterole)|true|none|The firmware update role that is to be used with a FUOTA task.|
|Tags|[TagList](#schemataglist)|false|none|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|
|RedundancyPercent|[RedundancyPercent](#schemaredundancypercent)|false|none|The percentage of added redundant fragments. For example, if firmware file is 100 bytes and fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.|
|FragmentSizeBytes|[FragmentSizeBytes](#schemafragmentsizebytes)|false|none|The size of each fragment in bytes. Currently only supported in fuota tasks with multicast groups.|
|FragmentIntervalMS|[FragmentIntervalMS](#schemafragmentintervalms)|false|none|The interval of sending fragments in milliseconds. Currently the interval will be rounded to the nearest second. Note that this interval only controls the timing when the cloud sends the fragments down. The actual delay of receiving fragments at device side depends on the device's class and the communication delay with the cloud.|

<h2 id="tocS_FuotaTaskArn">FuotaTaskArn</h2>
<!-- backwards compatibility -->
<a id="schemafuotataskarn"></a>
<a id="schema_FuotaTaskArn"></a>
<a id="tocSfuotataskarn"></a>
<a id="tocsfuotataskarn"></a>

```json
"string"
```

The arn of a FUOTA task.

<h2 id="tocS_MulticastGroupName">MulticastGroupName</h2>
<!-- backwards compatibility -->
<a id="schemamulticastgroupname"></a>
<a id="schema_MulticastGroupName"></a>
<a id="tocSmulticastgroupname"></a>
<a id="tocsmulticastgroupname"></a>

```json
"string"
```

The name of the multicast group.

<h2 id="tocS_LoRaWANMulticast">LoRaWANMulticast</h2>
<!-- backwards compatibility -->
<a id="schemalorawanmulticast"></a>
<a id="schema_LoRaWANMulticast"></a>
<a id="tocSlorawanmulticast"></a>
<a id="tocslorawanmulticast"></a>

```json
{
  "RfRegion": "EU868",
  "DlClass": "ClassB"
}
```

The LoRaWAN information that is to be used with the multicast group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RfRegion|[SupportedRfRegion](#schemasupportedrfregion)|false|none|Supported RfRegions|
|DlClass|[DlClass](#schemadlclass)|false|none|DlClass for LoRaWAM, valid values are ClassB and ClassC.|

#### Enumerated Values

|Property|Value|
|---|---|
|RfRegion|EU868|
|RfRegion|US915|
|RfRegion|AU915|
|RfRegion|AS923-1|
|RfRegion|AS923-2|
|RfRegion|AS923-3|
|RfRegion|AS923-4|
|RfRegion|EU433|
|RfRegion|CN470|
|RfRegion|CN779|
|RfRegion|RU864|
|RfRegion|KR920|
|RfRegion|IN865|
|DlClass|ClassB|
|DlClass|ClassC|

<h2 id="tocS_CreateMulticastGroupRequest">CreateMulticastGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemulticastgrouprequest"></a>
<a id="schema_CreateMulticastGroupRequest"></a>
<a id="tocScreatemulticastgrouprequest"></a>
<a id="tocscreatemulticastgrouprequest"></a>

```json
{
  "Name": "string",
  "Description": {},
  "ClientRequestToken": {},
  "LoRaWAN": {
    "RfRegion": "EU868",
    "DlClass": "ClassB"
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|[MulticastGroupName](#schemamulticastgroupname)|false|none|The name of the multicast group.|
|Description|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|LoRaWAN|[LoRaWANMulticast](#schemalorawanmulticast)|true|none|The LoRaWAN information that is to be used with the multicast group.|
|Tags|[TagList](#schemataglist)|false|none|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|

<h2 id="tocS_MulticastGroupArn">MulticastGroupArn</h2>
<!-- backwards compatibility -->
<a id="schemamulticastgrouparn"></a>
<a id="schema_MulticastGroupArn"></a>
<a id="tocSmulticastgrouparn"></a>
<a id="tocsmulticastgrouparn"></a>

```json
"string"
```

The arn of the multicast group.

<h2 id="tocS_NetworkAnalyzerConfigurationName">NetworkAnalyzerConfigurationName</h2>
<!-- backwards compatibility -->
<a id="schemanetworkanalyzerconfigurationname"></a>
<a id="schema_NetworkAnalyzerConfigurationName"></a>
<a id="tocSnetworkanalyzerconfigurationname"></a>
<a id="tocsnetworkanalyzerconfigurationname"></a>

```json
"string"
```

Name of the network analyzer configuration.

<h2 id="tocS_TraceContent">TraceContent</h2>
<!-- backwards compatibility -->
<a id="schematracecontent"></a>
<a id="schema_TraceContent"></a>
<a id="tocStracecontent"></a>
<a id="tocstracecontent"></a>

```json
{
  "WirelessDeviceFrameInfo": "ENABLED",
  "LogLevel": "INFO"
}
```

Trace content for your wireless gateway and wireless device resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WirelessDeviceFrameInfo|[WirelessDeviceFrameInfo](#schemawirelessdeviceframeinfo)|false|none| <code>FrameInfo</code> of your wireless device resources for the trace content. Use FrameInfo to debug the communication between your LoRaWAN end devices and the network server.|
|LogLevel|[LogLevel](#schemaloglevel)|false|none|The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.|

#### Enumerated Values

|Property|Value|
|---|---|
|WirelessDeviceFrameInfo|ENABLED|
|WirelessDeviceFrameInfo|DISABLED|
|LogLevel|INFO|
|LogLevel|ERROR|
|LogLevel|DISABLED|

<h2 id="tocS_WirelessDeviceList">WirelessDeviceList</h2>
<!-- backwards compatibility -->
<a id="schemawirelessdevicelist"></a>
<a id="schema_WirelessDeviceList"></a>
<a id="tocSwirelessdevicelist"></a>
<a id="tocswirelessdevicelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_WirelessGatewayList">WirelessGatewayList</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewaylist"></a>
<a id="schema_WirelessGatewayList"></a>
<a id="tocSwirelessgatewaylist"></a>
<a id="tocswirelessgatewaylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CreateNetworkAnalyzerConfigurationRequest">CreateNetworkAnalyzerConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatenetworkanalyzerconfigurationrequest"></a>
<a id="schema_CreateNetworkAnalyzerConfigurationRequest"></a>
<a id="tocScreatenetworkanalyzerconfigurationrequest"></a>
<a id="tocscreatenetworkanalyzerconfigurationrequest"></a>

```json
{
  "Name": "string",
  "TraceContent": {
    "WirelessDeviceFrameInfo": "ENABLED",
    "LogLevel": "INFO"
  },
  "WirelessDevices": {},
  "WirelessGateways": {},
  "Description": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "ClientRequestToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|[NetworkAnalyzerConfigurationName](#schemanetworkanalyzerconfigurationname)|true|none|Name of the network analyzer configuration.|
|TraceContent|[TraceContent](#schematracecontent)|false|none|Trace content for your wireless gateway and wireless device resources.|
|WirelessDevices|object|false|none|none|
|WirelessGateways|object|false|none|none|
|Description|[Description](#schemadescription)|false|none|The description of the new resource.|
|Tags|[TagList](#schemataglist)|false|none|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.|

<h2 id="tocS_NetworkAnalyzerConfigurationArn">NetworkAnalyzerConfigurationArn</h2>
<!-- backwards compatibility -->
<a id="schemanetworkanalyzerconfigurationarn"></a>
<a id="schema_NetworkAnalyzerConfigurationArn"></a>
<a id="tocSnetworkanalyzerconfigurationarn"></a>
<a id="tocsnetworkanalyzerconfigurationarn"></a>

```json
"string"
```

<h2 id="tocS_ServiceProfileName">ServiceProfileName</h2>
<!-- backwards compatibility -->
<a id="schemaserviceprofilename"></a>
<a id="schema_ServiceProfileName"></a>
<a id="tocSserviceprofilename"></a>
<a id="tocsserviceprofilename"></a>

```json
"string"
```

<h2 id="tocS_LoRaWANServiceProfile">LoRaWANServiceProfile</h2>
<!-- backwards compatibility -->
<a id="schemalorawanserviceprofile"></a>
<a id="schema_LoRaWANServiceProfile"></a>
<a id="tocSlorawanserviceprofile"></a>
<a id="tocslorawanserviceprofile"></a>

```json
{
  "AddGwMetadata": {},
  "DrMin": {},
  "DrMax": {},
  "PrAllowed": {},
  "RaAllowed": {}
}
```

LoRaWANServiceProfile object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddGwMetadata|object|false|none|none|
|DrMin|object|false|none|none|
|DrMax|object|false|none|none|
|PrAllowed|object|false|none|none|
|RaAllowed|object|false|none|none|

<h2 id="tocS_CreateServiceProfileRequest">CreateServiceProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateserviceprofilerequest"></a>
<a id="schema_CreateServiceProfileRequest"></a>
<a id="tocScreateserviceprofilerequest"></a>
<a id="tocscreateserviceprofilerequest"></a>

```json
{
  "Name": {},
  "LoRaWAN": {
    "AddGwMetadata": {},
    "DrMin": {},
    "DrMax": {},
    "PrAllowed": {},
    "RaAllowed": {}
  },
  "Tags": {},
  "ClientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|LoRaWAN|object|false|none|none|
|Tags|object|false|none|none|
|ClientRequestToken|object|false|none|none|

<h2 id="tocS_ServiceProfileArn">ServiceProfileArn</h2>
<!-- backwards compatibility -->
<a id="schemaserviceprofilearn"></a>
<a id="schema_ServiceProfileArn"></a>
<a id="tocSserviceprofilearn"></a>
<a id="tocsserviceprofilearn"></a>

```json
"string"
```

<h2 id="tocS_WirelessDeviceType">WirelessDeviceType</h2>
<!-- backwards compatibility -->
<a id="schemawirelessdevicetype"></a>
<a id="schema_WirelessDeviceType"></a>
<a id="tocSwirelessdevicetype"></a>
<a id="tocswirelessdevicetype"></a>

```json
"Sidewalk"
```

<h2 id="tocS_WirelessDeviceName">WirelessDeviceName</h2>
<!-- backwards compatibility -->
<a id="schemawirelessdevicename"></a>
<a id="schema_WirelessDeviceName"></a>
<a id="tocSwirelessdevicename"></a>
<a id="tocswirelessdevicename"></a>

```json
"string"
```

<h2 id="tocS_LoRaWANDevice">LoRaWANDevice</h2>
<!-- backwards compatibility -->
<a id="schemalorawandevice"></a>
<a id="schema_LoRaWANDevice"></a>
<a id="tocSlorawandevice"></a>
<a id="tocslorawandevice"></a>

```json
{
  "DevEui": {},
  "DeviceProfileId": {},
  "ServiceProfileId": {},
  "OtaaV1_1": {
    "AppKey": {},
    "NwkKey": {},
    "JoinEui": {}
  },
  "OtaaV1_0_x": {
    "AppKey": {},
    "AppEui": {},
    "GenAppKey": {}
  },
  "AbpV1_1": {
    "DevAddr": {},
    "SessionKeys": {
      "FNwkSIntKey": {},
      "SNwkSIntKey": {},
      "NwkSEncKey": {},
      "AppSKey": {}
    },
    "FCntStart": {}
  },
  "AbpV1_0_x": {
    "DevAddr": {},
    "SessionKeys": {
      "NwkSKey": {},
      "AppSKey": {}
    },
    "FCntStart": {}
  },
  "FPorts": {
    "Fuota": 1,
    "Multicast": 1,
    "ClockSync": 1,
    "Positioning": {
      "ClockSync": 1,
      "Stream": 1,
      "Gnss": 1
    },
    "Applications": {}
  }
}
```

LoRaWAN object for create functions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DevEui|object|false|none|none|
|DeviceProfileId|object|false|none|none|
|ServiceProfileId|object|false|none|none|
|OtaaV1_1|object|false|none|none|
|OtaaV1_0_x|object|false|none|none|
|AbpV1_1|object|false|none|none|
|AbpV1_0_x|object|false|none|none|
|FPorts|[FPorts](#schemafports)|false|none|List of FPort assigned for different LoRaWAN application packages to use|

<h2 id="tocS_PositioningConfigStatus">PositioningConfigStatus</h2>
<!-- backwards compatibility -->
<a id="schemapositioningconfigstatus"></a>
<a id="schema_PositioningConfigStatus"></a>
<a id="tocSpositioningconfigstatus"></a>
<a id="tocspositioningconfigstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_SidewalkCreateWirelessDevice">SidewalkCreateWirelessDevice</h2>
<!-- backwards compatibility -->
<a id="schemasidewalkcreatewirelessdevice"></a>
<a id="schema_SidewalkCreateWirelessDevice"></a>
<a id="tocSsidewalkcreatewirelessdevice"></a>
<a id="tocssidewalkcreatewirelessdevice"></a>

```json
{
  "DeviceProfileId": {}
}
```

Sidewalk object for creating a wireless device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceProfileId|object|false|none|none|

<h2 id="tocS_CreateWirelessDeviceRequest">CreateWirelessDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewirelessdevicerequest"></a>
<a id="schema_CreateWirelessDeviceRequest"></a>
<a id="tocScreatewirelessdevicerequest"></a>
<a id="tocscreatewirelessdevicerequest"></a>

```json
{
  "Type": {},
  "Name": {},
  "Description": {},
  "DestinationName": {},
  "ClientRequestToken": {},
  "LoRaWAN": {
    "DevEui": {},
    "DeviceProfileId": {},
    "ServiceProfileId": {},
    "OtaaV1_1": {
      "AppKey": {},
      "NwkKey": {},
      "JoinEui": {}
    },
    "OtaaV1_0_x": {
      "AppKey": {},
      "AppEui": {},
      "GenAppKey": {}
    },
    "AbpV1_1": {
      "DevAddr": {},
      "SessionKeys": {
        "FNwkSIntKey": {},
        "SNwkSIntKey": {},
        "NwkSEncKey": {},
        "AppSKey": {}
      },
      "FCntStart": {}
    },
    "AbpV1_0_x": {
      "DevAddr": {},
      "SessionKeys": {
        "NwkSKey": {},
        "AppSKey": {}
      },
      "FCntStart": {}
    },
    "FPorts": {
      "Fuota": 1,
      "Multicast": 1,
      "ClockSync": 1,
      "Positioning": {
        "ClockSync": 1,
        "Stream": 1,
        "Gnss": 1
      },
      "Applications": {}
    }
  },
  "Tags": {},
  "Positioning": {},
  "Sidewalk": {
    "DeviceProfileId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|DestinationName|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|LoRaWAN|object|false|none|none|
|Tags|object|false|none|none|
|Positioning|object|false|none|none|
|Sidewalk|object|false|none|none|

<h2 id="tocS_WirelessDeviceArn">WirelessDeviceArn</h2>
<!-- backwards compatibility -->
<a id="schemawirelessdevicearn"></a>
<a id="schema_WirelessDeviceArn"></a>
<a id="tocSwirelessdevicearn"></a>
<a id="tocswirelessdevicearn"></a>

```json
"string"
```

<h2 id="tocS_WirelessGatewayName">WirelessGatewayName</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewayname"></a>
<a id="schema_WirelessGatewayName"></a>
<a id="tocSwirelessgatewayname"></a>
<a id="tocswirelessgatewayname"></a>

```json
"string"
```

<h2 id="tocS_LoRaWANGateway">LoRaWANGateway</h2>
<!-- backwards compatibility -->
<a id="schemalorawangateway"></a>
<a id="schema_LoRaWANGateway"></a>
<a id="tocSlorawangateway"></a>
<a id="tocslorawangateway"></a>

```json
{
  "GatewayEui": {},
  "RfRegion": {},
  "JoinEuiFilters": [
    [
      "string",
      "string"
    ]
  ],
  "NetIdFilters": [
    "string"
  ],
  "SubBands": [
    1
  ],
  "Beaconing": {
    "DataRate": {},
    "Frequencies": {}
  },
  "MaxEirp": {}
}
```

LoRaWANGateway object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayEui|object|false|none|none|
|RfRegion|object|false|none|none|
|JoinEuiFilters|[JoinEuiFilters](#schemajoineuifilters)|false|none|A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.|
|NetIdFilters|[NetIdFilters](#schemanetidfilters)|false|none|A list of NetId values that are used by LoRa gateways to filter the uplink frames.|
|SubBands|[SubBands](#schemasubbands)|false|none|A list of integer indicating which sub bands are supported by LoRa gateway.|
|Beaconing|object|false|none|none|
|MaxEirp|object|false|none|none|

<h2 id="tocS_CreateWirelessGatewayRequest">CreateWirelessGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewirelessgatewayrequest"></a>
<a id="schema_CreateWirelessGatewayRequest"></a>
<a id="tocScreatewirelessgatewayrequest"></a>
<a id="tocscreatewirelessgatewayrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "LoRaWAN": {
    "GatewayEui": {},
    "RfRegion": {},
    "JoinEuiFilters": [
      [
        "string",
        "string"
      ]
    ],
    "NetIdFilters": [
      "string"
    ],
    "SubBands": [
      1
    ],
    "Beaconing": {
      "DataRate": {},
      "Frequencies": {}
    },
    "MaxEirp": {}
  },
  "Tags": {},
  "ClientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Description|object|false|none|none|
|LoRaWAN|object|true|none|none|
|Tags|object|false|none|none|
|ClientRequestToken|object|false|none|none|

<h2 id="tocS_WirelessGatewayArn">WirelessGatewayArn</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewayarn"></a>
<a id="schema_WirelessGatewayArn"></a>
<a id="tocSwirelessgatewayarn"></a>
<a id="tocswirelessgatewayarn"></a>

```json
"string"
```

<h2 id="tocS_WirelessGatewayTaskName">WirelessGatewayTaskName</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewaytaskname"></a>
<a id="schema_WirelessGatewayTaskName"></a>
<a id="tocSwirelessgatewaytaskname"></a>
<a id="tocswirelessgatewaytaskname"></a>

```json
"string"
```

<h2 id="tocS_UpdateWirelessGatewayTaskCreate">UpdateWirelessGatewayTaskCreate</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewirelessgatewaytaskcreate"></a>
<a id="schema_UpdateWirelessGatewayTaskCreate"></a>
<a id="tocSupdatewirelessgatewaytaskcreate"></a>
<a id="tocsupdatewirelessgatewaytaskcreate"></a>

```json
{
  "UpdateDataSource": {},
  "UpdateDataRole": {},
  "LoRaWAN": {
    "UpdateSignature": {},
    "SigKeyCrc": {},
    "CurrentVersion": {
      "PackageVersion": {},
      "Model": {},
      "Station": {}
    },
    "UpdateVersion": {
      "PackageVersion": {},
      "Model": {},
      "Station": {}
    }
  }
}
```

UpdateWirelessGatewayTaskCreate object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateDataSource|object|false|none|none|
|UpdateDataRole|object|false|none|none|
|LoRaWAN|object|false|none|none|

<h2 id="tocS_CreateWirelessGatewayTaskDefinitionRequest">CreateWirelessGatewayTaskDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewirelessgatewaytaskdefinitionrequest"></a>
<a id="schema_CreateWirelessGatewayTaskDefinitionRequest"></a>
<a id="tocScreatewirelessgatewaytaskdefinitionrequest"></a>
<a id="tocscreatewirelessgatewaytaskdefinitionrequest"></a>

```json
{
  "AutoCreateTasks": {},
  "Name": {},
  "Update": {
    "UpdateDataSource": {},
    "UpdateDataRole": {},
    "LoRaWAN": {
      "UpdateSignature": {},
      "SigKeyCrc": {},
      "CurrentVersion": {
        "PackageVersion": {},
        "Model": {},
        "Station": {}
      },
      "UpdateVersion": {
        "PackageVersion": {},
        "Model": {},
        "Station": {}
      }
    }
  },
  "ClientRequestToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoCreateTasks|object|true|none|none|
|Name|object|false|none|none|
|Update|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_WirelessGatewayTaskDefinitionId">WirelessGatewayTaskDefinitionId</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewaytaskdefinitionid"></a>
<a id="schema_WirelessGatewayTaskDefinitionId"></a>
<a id="tocSwirelessgatewaytaskdefinitionid"></a>
<a id="tocswirelessgatewaytaskdefinitionid"></a>

```json
"string"
```

<h2 id="tocS_WirelessGatewayTaskDefinitionArn">WirelessGatewayTaskDefinitionArn</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewaytaskdefinitionarn"></a>
<a id="schema_WirelessGatewayTaskDefinitionArn"></a>
<a id="tocSwirelessgatewaytaskdefinitionarn"></a>
<a id="tocswirelessgatewaytaskdefinitionarn"></a>

```json
"string"
```

<h2 id="tocS_CreateWirelessGatewayTaskRequest">CreateWirelessGatewayTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewirelessgatewaytaskrequest"></a>
<a id="schema_CreateWirelessGatewayTaskRequest"></a>
<a id="tocScreatewirelessgatewaytaskrequest"></a>
<a id="tocscreatewirelessgatewaytaskrequest"></a>

```json
{
  "WirelessGatewayTaskDefinitionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WirelessGatewayTaskDefinitionId|object|true|none|none|

<h2 id="tocS_WirelessGatewayTaskStatus">WirelessGatewayTaskStatus</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewaytaskstatus"></a>
<a id="schema_WirelessGatewayTaskStatus"></a>
<a id="tocSwirelessgatewaytaskstatus"></a>
<a id="tocswirelessgatewaytaskstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_CreatedAt">CreatedAt</h2>
<!-- backwards compatibility -->
<a id="schemacreatedat"></a>
<a id="schema_CreatedAt"></a>
<a id="tocScreatedat"></a>
<a id="tocscreatedat"></a>

```json
"1970-01-01T00:00:00Z"
```

Created at timestamp for the resource.

<h2 id="tocS_CreationDate">CreationDate</h2>
<!-- backwards compatibility -->
<a id="schemacreationdate"></a>
<a id="schema_CreationDate"></a>
<a id="tocScreationdate"></a>
<a id="tocscreationdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_CreationTime">CreationTime</h2>
<!-- backwards compatibility -->
<a id="schemacreationtime"></a>
<a id="schema_CreationTime"></a>
<a id="tocScreationtime"></a>
<a id="tocscreationtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DakCertificateId">DakCertificateId</h2>
<!-- backwards compatibility -->
<a id="schemadakcertificateid"></a>
<a id="schema_DakCertificateId"></a>
<a id="tocSdakcertificateid"></a>
<a id="tocsdakcertificateid"></a>

```json
"string"
```

<h2 id="tocS_MaxAllowedSignature">MaxAllowedSignature</h2>
<!-- backwards compatibility -->
<a id="schemamaxallowedsignature"></a>
<a id="schema_MaxAllowedSignature"></a>
<a id="tocSmaxallowedsignature"></a>
<a id="tocsmaxallowedsignature"></a>

```json
0
```

<h2 id="tocS_FactorySupport">FactorySupport</h2>
<!-- backwards compatibility -->
<a id="schemafactorysupport"></a>
<a id="schema_FactorySupport"></a>
<a id="tocSfactorysupport"></a>
<a id="tocsfactorysupport"></a>

```json
true
```

<h2 id="tocS_DeviceTypeId">DeviceTypeId</h2>
<!-- backwards compatibility -->
<a id="schemadevicetypeid"></a>
<a id="schema_DeviceTypeId"></a>
<a id="tocSdevicetypeid"></a>
<a id="tocsdevicetypeid"></a>

```json
"string"
```

<h2 id="tocS_DakCertificateMetadata">DakCertificateMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadakcertificatemetadata"></a>
<a id="schema_DakCertificateMetadata"></a>
<a id="tocSdakcertificatemetadata"></a>
<a id="tocsdakcertificatemetadata"></a>

```json
{
  "CertificateId": {},
  "MaxAllowedSignature": {},
  "FactorySupport": {},
  "ApId": {},
  "DeviceTypeId": {}
}
```

The device attestation key (DAK) information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateId|object|true|none|none|
|MaxAllowedSignature|object|false|none|none|
|FactorySupport|object|false|none|none|
|ApId|object|false|none|none|
|DeviceTypeId|object|false|none|none|

<h2 id="tocS_DakCertificateMetadataList">DakCertificateMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemadakcertificatemetadatalist"></a>
<a id="schema_DakCertificateMetadataList"></a>
<a id="tocSdakcertificatemetadatalist"></a>
<a id="tocsdakcertificatemetadatalist"></a>

```json
[
  {
    "CertificateId": {},
    "MaxAllowedSignature": {},
    "FactorySupport": {},
    "ApId": {},
    "DeviceTypeId": {}
  }
]
```

<h2 id="tocS_DeleteDestinationRequest">DeleteDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedestinationrequest"></a>
<a id="schema_DeleteDestinationRequest"></a>
<a id="tocSdeletedestinationrequest"></a>
<a id="tocsdeletedestinationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteDeviceProfileRequest">DeleteDeviceProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedeviceprofilerequest"></a>
<a id="schema_DeleteDeviceProfileRequest"></a>
<a id="tocSdeletedeviceprofilerequest"></a>
<a id="tocsdeletedeviceprofilerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteFuotaTaskRequest">DeleteFuotaTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefuotataskrequest"></a>
<a id="schema_DeleteFuotaTaskRequest"></a>
<a id="tocSdeletefuotataskrequest"></a>
<a id="tocsdeletefuotataskrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteMulticastGroupRequest">DeleteMulticastGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemulticastgrouprequest"></a>
<a id="schema_DeleteMulticastGroupRequest"></a>
<a id="tocSdeletemulticastgrouprequest"></a>
<a id="tocsdeletemulticastgrouprequest"></a>

```json
{}
```

<h2 id="tocS_DeleteNetworkAnalyzerConfigurationRequest">DeleteNetworkAnalyzerConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletenetworkanalyzerconfigurationrequest"></a>
<a id="schema_DeleteNetworkAnalyzerConfigurationRequest"></a>
<a id="tocSdeletenetworkanalyzerconfigurationrequest"></a>
<a id="tocsdeletenetworkanalyzerconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_MessageId">MessageId</h2>
<!-- backwards compatibility -->
<a id="schemamessageid"></a>
<a id="schema_MessageId"></a>
<a id="tocSmessageid"></a>
<a id="tocsmessageid"></a>

```json
"string"
```

<h2 id="tocS_DeleteQueuedMessagesRequest">DeleteQueuedMessagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletequeuedmessagesrequest"></a>
<a id="schema_DeleteQueuedMessagesRequest"></a>
<a id="tocSdeletequeuedmessagesrequest"></a>
<a id="tocsdeletequeuedmessagesrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteServiceProfileRequest">DeleteServiceProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteserviceprofilerequest"></a>
<a id="schema_DeleteServiceProfileRequest"></a>
<a id="tocSdeleteserviceprofilerequest"></a>
<a id="tocsdeleteserviceprofilerequest"></a>

```json
{}
```

<h2 id="tocS_ImportTaskId">ImportTaskId</h2>
<!-- backwards compatibility -->
<a id="schemaimporttaskid"></a>
<a id="schema_ImportTaskId"></a>
<a id="tocSimporttaskid"></a>
<a id="tocsimporttaskid"></a>

```json
"string"
```

<h2 id="tocS_DeleteWirelessDeviceImportTaskRequest">DeleteWirelessDeviceImportTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletewirelessdeviceimporttaskrequest"></a>
<a id="schema_DeleteWirelessDeviceImportTaskRequest"></a>
<a id="tocSdeletewirelessdeviceimporttaskrequest"></a>
<a id="tocsdeletewirelessdeviceimporttaskrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteWirelessDeviceRequest">DeleteWirelessDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletewirelessdevicerequest"></a>
<a id="schema_DeleteWirelessDeviceRequest"></a>
<a id="tocSdeletewirelessdevicerequest"></a>
<a id="tocsdeletewirelessdevicerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteWirelessGatewayRequest">DeleteWirelessGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletewirelessgatewayrequest"></a>
<a id="schema_DeleteWirelessGatewayRequest"></a>
<a id="tocSdeletewirelessgatewayrequest"></a>
<a id="tocsdeletewirelessgatewayrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteWirelessGatewayTaskDefinitionRequest">DeleteWirelessGatewayTaskDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletewirelessgatewaytaskdefinitionrequest"></a>
<a id="schema_DeleteWirelessGatewayTaskDefinitionRequest"></a>
<a id="tocSdeletewirelessgatewaytaskdefinitionrequest"></a>
<a id="tocsdeletewirelessgatewaytaskdefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteWirelessGatewayTaskRequest">DeleteWirelessGatewayTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletewirelessgatewaytaskrequest"></a>
<a id="schema_DeleteWirelessGatewayTaskRequest"></a>
<a id="tocSdeletewirelessgatewaytaskrequest"></a>
<a id="tocsdeletewirelessgatewaytaskrequest"></a>

```json
{}
```

<h2 id="tocS_Identifier">Identifier</h2>
<!-- backwards compatibility -->
<a id="schemaidentifier"></a>
<a id="schema_Identifier"></a>
<a id="tocSidentifier"></a>
<a id="tocsidentifier"></a>

```json
"string"
```

<h2 id="tocS_DeregisterWirelessDeviceRequest">DeregisterWirelessDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterwirelessdevicerequest"></a>
<a id="schema_DeregisterWirelessDeviceRequest"></a>
<a id="tocSderegisterwirelessdevicerequest"></a>
<a id="tocsderegisterwirelessdevicerequest"></a>

```json
{}
```

<h2 id="tocS_Destinations">Destinations</h2>
<!-- backwards compatibility -->
<a id="schemadestinations"></a>
<a id="schema_Destinations"></a>
<a id="tocSdestinations"></a>
<a id="tocsdestinations"></a>

```json
{
  "Arn": {},
  "Name": {},
  "ExpressionType": {},
  "Expression": {},
  "Description": {},
  "RoleArn": {}
}
```

Describes a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|ExpressionType|object|false|none|none|
|Expression|object|false|none|none|
|Description|object|false|none|none|
|RoleArn|object|false|none|none|

<h2 id="tocS_DestinationList">DestinationList</h2>
<!-- backwards compatibility -->
<a id="schemadestinationlist"></a>
<a id="schema_DestinationList"></a>
<a id="tocSdestinationlist"></a>
<a id="tocsdestinationlist"></a>

```json
[
  {
    "Arn": {},
    "Name": {},
    "ExpressionType": {},
    "Expression": {},
    "Description": {},
    "RoleArn": {}
  }
]
```

<h2 id="tocS_DevStatusReqFreq">DevStatusReqFreq</h2>
<!-- backwards compatibility -->
<a id="schemadevstatusreqfreq"></a>
<a id="schema_DevStatusReqFreq"></a>
<a id="tocSdevstatusreqfreq"></a>
<a id="tocsdevstatusreqfreq"></a>

```json
0
```

<h2 id="tocS_DeviceCertificateList">DeviceCertificateList</h2>
<!-- backwards compatibility -->
<a id="schemadevicecertificatelist"></a>
<a id="schema_DeviceCertificateList"></a>
<a id="tocSdevicecertificatelist"></a>
<a id="tocsdevicecertificatelist"></a>

```json
[
  {
    "SigningAlg": {},
    "Value": {}
  }
]
```

List of device certificate chain.

<h2 id="tocS_DeviceCreationFileList">DeviceCreationFileList</h2>
<!-- backwards compatibility -->
<a id="schemadevicecreationfilelist"></a>
<a id="schema_DeviceCreationFileList"></a>
<a id="tocSdevicecreationfilelist"></a>
<a id="tocsdevicecreationfilelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DeviceName">DeviceName</h2>
<!-- backwards compatibility -->
<a id="schemadevicename"></a>
<a id="schema_DeviceName"></a>
<a id="tocSdevicename"></a>
<a id="tocsdevicename"></a>

```json
"string"
```

<h2 id="tocS_DeviceProfile">DeviceProfile</h2>
<!-- backwards compatibility -->
<a id="schemadeviceprofile"></a>
<a id="schema_DeviceProfile"></a>
<a id="tocSdeviceprofile"></a>
<a id="tocsdeviceprofile"></a>

```json
{
  "Arn": {},
  "Name": {},
  "Id": {}
}
```

Describes a device profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Id|object|false|none|none|

<h2 id="tocS_DeviceProfileList">DeviceProfileList</h2>
<!-- backwards compatibility -->
<a id="schemadeviceprofilelist"></a>
<a id="schema_DeviceProfileList"></a>
<a id="tocSdeviceprofilelist"></a>
<a id="tocsdeviceprofilelist"></a>

```json
[
  {
    "Arn": {},
    "Name": {},
    "Id": {}
  }
]
```

<h2 id="tocS_DeviceProfileType">DeviceProfileType</h2>
<!-- backwards compatibility -->
<a id="schemadeviceprofiletype"></a>
<a id="schema_DeviceProfileType"></a>
<a id="tocSdeviceprofiletype"></a>
<a id="tocsdeviceprofiletype"></a>

```json
"Sidewalk"
```

<h2 id="tocS_DeviceRegistrationStateEventConfiguration">DeviceRegistrationStateEventConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadeviceregistrationstateeventconfiguration"></a>
<a id="schema_DeviceRegistrationStateEventConfiguration"></a>
<a id="tocSdeviceregistrationstateeventconfiguration"></a>
<a id="tocsdeviceregistrationstateeventconfiguration"></a>

```json
{
  "Sidewalk": {
    "AmazonIdEventTopic": {}
  },
  "WirelessDeviceIdEventTopic": {}
}
```

Device registration state event configuration object for enabling and disabling relevant topics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sidewalk|object|false|none|none|
|WirelessDeviceIdEventTopic|object|false|none|none|

<h2 id="tocS_DeviceRegistrationStateResourceTypeEventConfiguration">DeviceRegistrationStateResourceTypeEventConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadeviceregistrationstateresourcetypeeventconfiguration"></a>
<a id="schema_DeviceRegistrationStateResourceTypeEventConfiguration"></a>
<a id="tocSdeviceregistrationstateresourcetypeeventconfiguration"></a>
<a id="tocsdeviceregistrationstateresourcetypeeventconfiguration"></a>

```json
{
  "Sidewalk": {
    "WirelessDeviceEventTopic": {}
  }
}
```

Device registration state resource type event configuration object for enabling or disabling topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sidewalk|object|false|none|none|

<h2 id="tocS_DeviceState">DeviceState</h2>
<!-- backwards compatibility -->
<a id="schemadevicestate"></a>
<a id="schema_DeviceState"></a>
<a id="tocSdevicestate"></a>
<a id="tocsdevicestate"></a>

```json
"Provisioned"
```

Device state defines the device status of sidewalk device.

<h2 id="tocS_PartnerAccountId">PartnerAccountId</h2>
<!-- backwards compatibility -->
<a id="schemapartneraccountid"></a>
<a id="schema_PartnerAccountId"></a>
<a id="tocSpartneraccountid"></a>
<a id="tocspartneraccountid"></a>

```json
"string"
```

<h2 id="tocS_PartnerType">PartnerType</h2>
<!-- backwards compatibility -->
<a id="schemapartnertype"></a>
<a id="schema_PartnerType"></a>
<a id="tocSpartnertype"></a>
<a id="tocspartnertype"></a>

```json
"Sidewalk"
```

<h2 id="tocS_DisassociateAwsAccountFromPartnerAccountRequest">DisassociateAwsAccountFromPartnerAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateawsaccountfrompartneraccountrequest"></a>
<a id="schema_DisassociateAwsAccountFromPartnerAccountRequest"></a>
<a id="tocSdisassociateawsaccountfrompartneraccountrequest"></a>
<a id="tocsdisassociateawsaccountfrompartneraccountrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateMulticastGroupFromFuotaTaskRequest">DisassociateMulticastGroupFromFuotaTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatemulticastgroupfromfuotataskrequest"></a>
<a id="schema_DisassociateMulticastGroupFromFuotaTaskRequest"></a>
<a id="tocSdisassociatemulticastgroupfromfuotataskrequest"></a>
<a id="tocsdisassociatemulticastgroupfromfuotataskrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateWirelessDeviceFromFuotaTaskRequest">DisassociateWirelessDeviceFromFuotaTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatewirelessdevicefromfuotataskrequest"></a>
<a id="schema_DisassociateWirelessDeviceFromFuotaTaskRequest"></a>
<a id="tocSdisassociatewirelessdevicefromfuotataskrequest"></a>
<a id="tocsdisassociatewirelessdevicefromfuotataskrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateWirelessDeviceFromMulticastGroupRequest">DisassociateWirelessDeviceFromMulticastGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatewirelessdevicefrommulticastgrouprequest"></a>
<a id="schema_DisassociateWirelessDeviceFromMulticastGroupRequest"></a>
<a id="tocSdisassociatewirelessdevicefrommulticastgrouprequest"></a>
<a id="tocsdisassociatewirelessdevicefrommulticastgrouprequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateWirelessDeviceFromThingRequest">DisassociateWirelessDeviceFromThingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatewirelessdevicefromthingrequest"></a>
<a id="schema_DisassociateWirelessDeviceFromThingRequest"></a>
<a id="tocSdisassociatewirelessdevicefromthingrequest"></a>
<a id="tocsdisassociatewirelessdevicefromthingrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateWirelessGatewayFromCertificateRequest">DisassociateWirelessGatewayFromCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatewirelessgatewayfromcertificaterequest"></a>
<a id="schema_DisassociateWirelessGatewayFromCertificateRequest"></a>
<a id="tocSdisassociatewirelessgatewayfromcertificaterequest"></a>
<a id="tocsdisassociatewirelessgatewayfromcertificaterequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateWirelessGatewayFromThingRequest">DisassociateWirelessGatewayFromThingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatewirelessgatewayfromthingrequest"></a>
<a id="schema_DisassociateWirelessGatewayFromThingRequest"></a>
<a id="tocSdisassociatewirelessgatewayfromthingrequest"></a>
<a id="tocsdisassociatewirelessgatewayfromthingrequest"></a>

```json
{}
```

<h2 id="tocS_DlBucketSize">DlBucketSize</h2>
<!-- backwards compatibility -->
<a id="schemadlbucketsize"></a>
<a id="schema_DlBucketSize"></a>
<a id="tocSdlbucketsize"></a>
<a id="tocsdlbucketsize"></a>

```json
0
```

<h2 id="tocS_DlRate">DlRate</h2>
<!-- backwards compatibility -->
<a id="schemadlrate"></a>
<a id="schema_DlRate"></a>
<a id="tocSdlrate"></a>
<a id="tocsdlrate"></a>

```json
0
```

<h2 id="tocS_DlRatePolicy">DlRatePolicy</h2>
<!-- backwards compatibility -->
<a id="schemadlratepolicy"></a>
<a id="schema_DlRatePolicy"></a>
<a id="tocSdlratepolicy"></a>
<a id="tocsdlratepolicy"></a>

```json
"string"
```

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_DownlinkFrequency">DownlinkFrequency</h2>
<!-- backwards compatibility -->
<a id="schemadownlinkfrequency"></a>
<a id="schema_DownlinkFrequency"></a>
<a id="tocSdownlinkfrequency"></a>
<a id="tocsdownlinkfrequency"></a>

```json
100000000
```

<h2 id="tocS_DownlinkMode">DownlinkMode</h2>
<!-- backwards compatibility -->
<a id="schemadownlinkmode"></a>
<a id="schema_DownlinkMode"></a>
<a id="tocSdownlinkmode"></a>
<a id="tocsdownlinkmode"></a>

```json
"SEQUENTIAL"
```

<h2 id="tocS_TransmitMode">TransmitMode</h2>
<!-- backwards compatibility -->
<a id="schematransmitmode"></a>
<a id="schema_TransmitMode"></a>
<a id="tocStransmitmode"></a>
<a id="tocstransmitmode"></a>

```json
0
```

<h2 id="tocS_ISODateTimeString">ISODateTimeString</h2>
<!-- backwards compatibility -->
<a id="schemaisodatetimestring"></a>
<a id="schema_ISODateTimeString"></a>
<a id="tocSisodatetimestring"></a>
<a id="tocsisodatetimestring"></a>

```json
"string"
```

<h2 id="tocS_DownlinkQueueMessage">DownlinkQueueMessage</h2>
<!-- backwards compatibility -->
<a id="schemadownlinkqueuemessage"></a>
<a id="schema_DownlinkQueueMessage"></a>
<a id="tocSdownlinkqueuemessage"></a>
<a id="tocsdownlinkqueuemessage"></a>

```json
{
  "MessageId": {},
  "TransmitMode": {},
  "ReceivedAt": {},
  "LoRaWAN": {
    "FPort": 1,
    "ParticipatingGateways": {
      "DownlinkMode": {},
      "GatewayList": {},
      "TransmissionInterval": {}
    }
  }
}
```

The message in the downlink queue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageId|object|false|none|none|
|TransmitMode|object|false|none|none|
|ReceivedAt|object|false|none|none|
|LoRaWAN|[LoRaWANSendDataToDevice](#schemalorawansenddatatodevice)|false|none|LoRaWAN router info.|

<h2 id="tocS_DownlinkQueueMessagesList">DownlinkQueueMessagesList</h2>
<!-- backwards compatibility -->
<a id="schemadownlinkqueuemessageslist"></a>
<a id="schema_DownlinkQueueMessagesList"></a>
<a id="tocSdownlinkqueuemessageslist"></a>
<a id="tocsdownlinkqueuemessageslist"></a>

```json
[
  {
    "MessageId": {},
    "TransmitMode": {},
    "ReceivedAt": {},
    "LoRaWAN": {
      "FPort": 1,
      "ParticipatingGateways": {
        "DownlinkMode": {},
        "GatewayList": {},
        "TransmissionInterval": {}
      }
    }
  }
]
```

<h2 id="tocS_DrMax">DrMax</h2>
<!-- backwards compatibility -->
<a id="schemadrmax"></a>
<a id="schema_DrMax"></a>
<a id="tocSdrmax"></a>
<a id="tocsdrmax"></a>

```json
0
```

<h2 id="tocS_DrMin">DrMin</h2>
<!-- backwards compatibility -->
<a id="schemadrmin"></a>
<a id="schema_DrMin"></a>
<a id="tocSdrmin"></a>
<a id="tocsdrmin"></a>

```json
0
```

<h2 id="tocS_EARFCN">EARFCN</h2>
<!-- backwards compatibility -->
<a id="schemaearfcn"></a>
<a id="schema_EARFCN"></a>
<a id="tocSearfcn"></a>
<a id="tocsearfcn"></a>

```json
0
```

<h2 id="tocS_EndPoint">EndPoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_EndPoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
"string"
```

<h2 id="tocS_EutranCid">EutranCid</h2>
<!-- backwards compatibility -->
<a id="schemaeutrancid"></a>
<a id="schema_EutranCid"></a>
<a id="tocSeutrancid"></a>
<a id="tocseutrancid"></a>

```json
0
```

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
"discovered"
```

Sidewalk device status notification.

<h2 id="tocS_IdentifierType">IdentifierType</h2>
<!-- backwards compatibility -->
<a id="schemaidentifiertype"></a>
<a id="schema_IdentifierType"></a>
<a id="tocSidentifiertype"></a>
<a id="tocsidentifiertype"></a>

```json
"PartnerAccountId"
```

<h2 id="tocS_EventNotificationPartnerType">EventNotificationPartnerType</h2>
<!-- backwards compatibility -->
<a id="schemaeventnotificationpartnertype"></a>
<a id="schema_EventNotificationPartnerType"></a>
<a id="tocSeventnotificationpartnertype"></a>
<a id="tocseventnotificationpartnertype"></a>

```json
"Sidewalk"
```

<h2 id="tocS_EventNotificationItemConfigurations">EventNotificationItemConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaeventnotificationitemconfigurations"></a>
<a id="schema_EventNotificationItemConfigurations"></a>
<a id="tocSeventnotificationitemconfigurations"></a>
<a id="tocseventnotificationitemconfigurations"></a>

```json
{
  "DeviceRegistrationState": {
    "Sidewalk": {
      "AmazonIdEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  },
  "Proximity": {
    "Sidewalk": {
      "AmazonIdEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  },
  "Join": {
    "LoRaWAN": {
      "DevEuiEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  },
  "ConnectionStatus": {
    "LoRaWAN": {
      "GatewayEuiEventTopic": {}
    },
    "WirelessGatewayIdEventTopic": {}
  },
  "MessageDeliveryStatus": {
    "Sidewalk": {
      "AmazonIdEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  }
}
```

Object of all event configurations and the status of the event topics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceRegistrationState|object|false|none|none|
|Proximity|object|false|none|none|
|Join|object|false|none|none|
|ConnectionStatus|object|false|none|none|
|MessageDeliveryStatus|object|false|none|none|

<h2 id="tocS_EventConfigurationItem">EventConfigurationItem</h2>
<!-- backwards compatibility -->
<a id="schemaeventconfigurationitem"></a>
<a id="schema_EventConfigurationItem"></a>
<a id="tocSeventconfigurationitem"></a>
<a id="tocseventconfigurationitem"></a>

```json
{
  "Identifier": {},
  "IdentifierType": {},
  "PartnerType": {},
  "Events": {
    "DeviceRegistrationState": {
      "Sidewalk": {
        "AmazonIdEventTopic": {}
      },
      "WirelessDeviceIdEventTopic": {}
    },
    "Proximity": {
      "Sidewalk": {
        "AmazonIdEventTopic": {}
      },
      "WirelessDeviceIdEventTopic": {}
    },
    "Join": {
      "LoRaWAN": {
        "DevEuiEventTopic": {}
      },
      "WirelessDeviceIdEventTopic": {}
    },
    "ConnectionStatus": {
      "LoRaWAN": {
        "GatewayEuiEventTopic": {}
      },
      "WirelessGatewayIdEventTopic": {}
    },
    "MessageDeliveryStatus": {
      "Sidewalk": {
        "AmazonIdEventTopic": {}
      },
      "WirelessDeviceIdEventTopic": {}
    }
  }
}
```

Event configuration object for a single resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identifier|object|false|none|none|
|IdentifierType|object|false|none|none|
|PartnerType|object|false|none|none|
|Events|[EventNotificationItemConfigurations](#schemaeventnotificationitemconfigurations)|false|none|Object of all event configurations and the status of the event topics.|

<h2 id="tocS_EventConfigurationsList">EventConfigurationsList</h2>
<!-- backwards compatibility -->
<a id="schemaeventconfigurationslist"></a>
<a id="schema_EventConfigurationsList"></a>
<a id="tocSeventconfigurationslist"></a>
<a id="tocseventconfigurationslist"></a>

```json
[
  {
    "Identifier": {},
    "IdentifierType": {},
    "PartnerType": {},
    "Events": {
      "DeviceRegistrationState": {
        "Sidewalk": {
          "AmazonIdEventTopic": {}
        },
        "WirelessDeviceIdEventTopic": {}
      },
      "Proximity": {
        "Sidewalk": {
          "AmazonIdEventTopic": {}
        },
        "WirelessDeviceIdEventTopic": {}
      },
      "Join": {
        "LoRaWAN": {
          "DevEuiEventTopic": {}
        },
        "WirelessDeviceIdEventTopic": {}
      },
      "ConnectionStatus": {
        "LoRaWAN": {
          "GatewayEuiEventTopic": {}
        },
        "WirelessGatewayIdEventTopic": {}
      },
      "MessageDeliveryStatus": {
        "Sidewalk": {
          "AmazonIdEventTopic": {}
        },
        "WirelessDeviceIdEventTopic": {}
      }
    }
  }
]
```

<h2 id="tocS_ProximityEventConfiguration">ProximityEventConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaproximityeventconfiguration"></a>
<a id="schema_ProximityEventConfiguration"></a>
<a id="tocSproximityeventconfiguration"></a>
<a id="tocsproximityeventconfiguration"></a>

```json
{
  "Sidewalk": {
    "AmazonIdEventTopic": {}
  },
  "WirelessDeviceIdEventTopic": {}
}
```

Proximity event configuration object for enabling and disabling relevant topics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sidewalk|object|false|none|none|
|WirelessDeviceIdEventTopic|object|false|none|none|

<h2 id="tocS_JoinEventConfiguration">JoinEventConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemajoineventconfiguration"></a>
<a id="schema_JoinEventConfiguration"></a>
<a id="tocSjoineventconfiguration"></a>
<a id="tocsjoineventconfiguration"></a>

```json
{
  "LoRaWAN": {
    "DevEuiEventTopic": {}
  },
  "WirelessDeviceIdEventTopic": {}
}
```

Join event configuration object for enabling or disabling topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoRaWAN|object|false|none|none|
|WirelessDeviceIdEventTopic|object|false|none|none|

<h2 id="tocS_MessageDeliveryStatusEventConfiguration">MessageDeliveryStatusEventConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamessagedeliverystatuseventconfiguration"></a>
<a id="schema_MessageDeliveryStatusEventConfiguration"></a>
<a id="tocSmessagedeliverystatuseventconfiguration"></a>
<a id="tocsmessagedeliverystatuseventconfiguration"></a>

```json
{
  "Sidewalk": {
    "AmazonIdEventTopic": {}
  },
  "WirelessDeviceIdEventTopic": {}
}
```

Message delivery status event configuration object for enabling and disabling relevant topics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sidewalk|[SidewalkEventNotificationConfigurations](#schemasidewalkeventnotificationconfigurations)|false|none| <code>SidewalkEventNotificationConfigurations</code> object, which is the event configuration object for Sidewalk-related event topics.|
|WirelessDeviceIdEventTopic|object|false|none|none|

<h2 id="tocS_EventNotificationResourceType">EventNotificationResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaeventnotificationresourcetype"></a>
<a id="schema_EventNotificationResourceType"></a>
<a id="tocSeventnotificationresourcetype"></a>
<a id="tocseventnotificationresourcetype"></a>

```json
"SidewalkAccount"
```

<h2 id="tocS_FNwkSIntKey">FNwkSIntKey</h2>
<!-- backwards compatibility -->
<a id="schemafnwksintkey"></a>
<a id="schema_FNwkSIntKey"></a>
<a id="tocSfnwksintkey"></a>
<a id="tocsfnwksintkey"></a>

```json
"string"
```

<h2 id="tocS_Positioning">Positioning</h2>
<!-- backwards compatibility -->
<a id="schemapositioning"></a>
<a id="schema_Positioning"></a>
<a id="tocSpositioning"></a>
<a id="tocspositioning"></a>

```json
{
  "ClockSync": 1,
  "Stream": 1,
  "Gnss": 1
}
```

The FPorts for the position information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClockSync|[FPort](#schemafport)|false|none|The Fport value.|
|Stream|[FPort](#schemafport)|false|none|The Fport value.|
|Gnss|[FPort](#schemafport)|false|none|The Fport value.|

<h2 id="tocS_PresetFreq">PresetFreq</h2>
<!-- backwards compatibility -->
<a id="schemapresetfreq"></a>
<a id="schema_PresetFreq"></a>
<a id="tocSpresetfreq"></a>
<a id="tocspresetfreq"></a>

```json
1000000
```

<h2 id="tocS_Fingerprint">Fingerprint</h2>
<!-- backwards compatibility -->
<a id="schemafingerprint"></a>
<a id="schema_Fingerprint"></a>
<a id="tocSfingerprint"></a>
<a id="tocsfingerprint"></a>

```json
"password"
```

<h2 id="tocS_FuotaDeviceStatus">FuotaDeviceStatus</h2>
<!-- backwards compatibility -->
<a id="schemafuotadevicestatus"></a>
<a id="schema_FuotaDeviceStatus"></a>
<a id="tocSfuotadevicestatus"></a>
<a id="tocsfuotadevicestatus"></a>

```json
"Initial"
```

The status of a wireless device in a FUOTA task.

<h2 id="tocS_FuotaTask">FuotaTask</h2>
<!-- backwards compatibility -->
<a id="schemafuotatask"></a>
<a id="schema_FuotaTask"></a>
<a id="tocSfuotatask"></a>
<a id="tocsfuotatask"></a>

```json
{
  "Id": "string",
  "Arn": "string",
  "Name": "string"
}
```

A FUOTA task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|[FuotaTaskId](#schemafuotataskid)|false|none|The ID of a FUOTA task.|
|Arn|[FuotaTaskArn](#schemafuotataskarn)|false|none|The arn of a FUOTA task.|
|Name|[FuotaTaskName](#schemafuotataskname)|false|none|The name of a FUOTA task.|

<h2 id="tocS_FuotaTaskList">FuotaTaskList</h2>
<!-- backwards compatibility -->
<a id="schemafuotatasklist"></a>
<a id="schema_FuotaTaskList"></a>
<a id="tocSfuotatasklist"></a>
<a id="tocsfuotatasklist"></a>

```json
[
  {
    "Id": "string",
    "Arn": "string",
    "Name": "string"
  }
]
```

Lists the FUOTA tasks registered to your AWS account.

<h2 id="tocS_FuotaTaskStatus">FuotaTaskStatus</h2>
<!-- backwards compatibility -->
<a id="schemafuotataskstatus"></a>
<a id="schema_FuotaTaskStatus"></a>
<a id="tocSfuotataskstatus"></a>
<a id="tocsfuotataskstatus"></a>

```json
"Pending"
```

The status of a FUOTA task.

<h2 id="tocS_GatewayListItem">GatewayListItem</h2>
<!-- backwards compatibility -->
<a id="schemagatewaylistitem"></a>
<a id="schema_GatewayListItem"></a>
<a id="tocSgatewaylistitem"></a>
<a id="tocsgatewaylistitem"></a>

```json
{
  "GatewayId": {},
  "DownlinkFrequency": {}
}
```

Gateway list item object that specifies the frequency and list of gateways for which the downlink message should be sent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayId|object|true|none|none|
|DownlinkFrequency|object|true|none|none|

<h2 id="tocS_GatewayList">GatewayList</h2>
<!-- backwards compatibility -->
<a id="schemagatewaylist"></a>
<a id="schema_GatewayList"></a>
<a id="tocSgatewaylist"></a>
<a id="tocsgatewaylist"></a>

```json
[
  {
    "GatewayId": {},
    "DownlinkFrequency": {}
  }
]
```

<h2 id="tocS_GenAppKey">GenAppKey</h2>
<!-- backwards compatibility -->
<a id="schemagenappkey"></a>
<a id="schema_GenAppKey"></a>
<a id="tocSgenappkey"></a>
<a id="tocsgenappkey"></a>

```json
"string"
```

<h2 id="tocS_GeoJsonPayload">GeoJsonPayload</h2>
<!-- backwards compatibility -->
<a id="schemageojsonpayload"></a>
<a id="schema_GeoJsonPayload"></a>
<a id="tocSgeojsonpayload"></a>
<a id="tocsgeojsonpayload"></a>

```json
"string"
```

<h2 id="tocS_GeranCid">GeranCid</h2>
<!-- backwards compatibility -->
<a id="schemagerancid"></a>
<a id="schema_GeranCid"></a>
<a id="tocSgerancid"></a>
<a id="tocsgerancid"></a>

```json
0
```

<h2 id="tocS_GetDestinationRequest">GetDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdestinationrequest"></a>
<a id="schema_GetDestinationRequest"></a>
<a id="tocSgetdestinationrequest"></a>
<a id="tocsgetdestinationrequest"></a>

```json
{}
```

<h2 id="tocS_GetDeviceProfileRequest">GetDeviceProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdeviceprofilerequest"></a>
<a id="schema_GetDeviceProfileRequest"></a>
<a id="tocSgetdeviceprofilerequest"></a>
<a id="tocsgetdeviceprofilerequest"></a>

```json
{}
```

<h2 id="tocS_SidewalkGetDeviceProfile">SidewalkGetDeviceProfile</h2>
<!-- backwards compatibility -->
<a id="schemasidewalkgetdeviceprofile"></a>
<a id="schema_SidewalkGetDeviceProfile"></a>
<a id="tocSsidewalkgetdeviceprofile"></a>
<a id="tocssidewalkgetdeviceprofile"></a>

```json
{
  "ApplicationServerPublicKey": {},
  "QualificationStatus": {},
  "DakCertificateMetadata": {}
}
```

Gets information about a Sidewalk device profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationServerPublicKey|object|false|none|none|
|QualificationStatus|object|false|none|none|
|DakCertificateMetadata|object|false|none|none|

<h2 id="tocS_GetEventConfigurationByResourceTypesRequest">GetEventConfigurationByResourceTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemageteventconfigurationbyresourcetypesrequest"></a>
<a id="schema_GetEventConfigurationByResourceTypesRequest"></a>
<a id="tocSgeteventconfigurationbyresourcetypesrequest"></a>
<a id="tocsgeteventconfigurationbyresourcetypesrequest"></a>

```json
{}
```

<h2 id="tocS_ProximityResourceTypeEventConfiguration">ProximityResourceTypeEventConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaproximityresourcetypeeventconfiguration"></a>
<a id="schema_ProximityResourceTypeEventConfiguration"></a>
<a id="tocSproximityresourcetypeeventconfiguration"></a>
<a id="tocsproximityresourcetypeeventconfiguration"></a>

```json
{
  "Sidewalk": {
    "WirelessDeviceEventTopic": {}
  }
}
```

Proximity resource type event configuration object for enabling or disabling topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sidewalk|object|false|none|none|

<h2 id="tocS_JoinResourceTypeEventConfiguration">JoinResourceTypeEventConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemajoinresourcetypeeventconfiguration"></a>
<a id="schema_JoinResourceTypeEventConfiguration"></a>
<a id="tocSjoinresourcetypeeventconfiguration"></a>
<a id="tocsjoinresourcetypeeventconfiguration"></a>

```json
{
  "LoRaWAN": {
    "WirelessDeviceEventTopic": {}
  }
}
```

Join resource type event configuration object for enabling or disabling topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoRaWAN|object|false|none|none|

<h2 id="tocS_MessageDeliveryStatusResourceTypeEventConfiguration">MessageDeliveryStatusResourceTypeEventConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamessagedeliverystatusresourcetypeeventconfiguration"></a>
<a id="schema_MessageDeliveryStatusResourceTypeEventConfiguration"></a>
<a id="tocSmessagedeliverystatusresourcetypeeventconfiguration"></a>
<a id="tocsmessagedeliverystatusresourcetypeeventconfiguration"></a>

```json
{
  "Sidewalk": {
    "WirelessDeviceEventTopic": {}
  }
}
```

Message delivery status resource type event configuration object for enabling or disabling relevant topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sidewalk|[SidewalkResourceTypeEventConfiguration](#schemasidewalkresourcetypeeventconfiguration)|false|none|Sidewalk resource type event configuration object for enabling or disabling topic.|

<h2 id="tocS_GetFuotaTaskRequest">GetFuotaTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfuotataskrequest"></a>
<a id="schema_GetFuotaTaskRequest"></a>
<a id="tocSgetfuotataskrequest"></a>
<a id="tocsgetfuotataskrequest"></a>

```json
{}
```

<h2 id="tocS_LoRaWANFuotaTaskGetInfo">LoRaWANFuotaTaskGetInfo</h2>
<!-- backwards compatibility -->
<a id="schemalorawanfuotataskgetinfo"></a>
<a id="schema_LoRaWANFuotaTaskGetInfo"></a>
<a id="tocSlorawanfuotataskgetinfo"></a>
<a id="tocslorawanfuotataskgetinfo"></a>

```json
{
  "RfRegion": "string",
  "StartTime": "1970-01-01T00:00:00Z"
}
```

The LoRaWAN information returned from getting a FUOTA task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RfRegion|[RfRegion](#schemarfregion)|false|none|The frequency band (RFRegion) value.|
|StartTime|[StartTime](#schemastarttime)|false|none|Start time of a FUOTA task.|

<h2 id="tocS_GetLogLevelsByResourceTypesRequest">GetLogLevelsByResourceTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetloglevelsbyresourcetypesrequest"></a>
<a id="schema_GetLogLevelsByResourceTypesRequest"></a>
<a id="tocSgetloglevelsbyresourcetypesrequest"></a>
<a id="tocsgetloglevelsbyresourcetypesrequest"></a>

```json
{}
```

<h2 id="tocS_WirelessGatewayLogOptionList">WirelessGatewayLogOptionList</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewaylogoptionlist"></a>
<a id="schema_WirelessGatewayLogOptionList"></a>
<a id="tocSwirelessgatewaylogoptionlist"></a>
<a id="tocswirelessgatewaylogoptionlist"></a>

```json
[
  {
    "Type": "LoRaWAN",
    "LogLevel": "INFO",
    "Events": [
      {
        "Event": "CUPS_Request",
        "LogLevel": "INFO"
      }
    ]
  }
]
```

The list of wireless gateway log options.

<h2 id="tocS_WirelessDeviceLogOptionList">WirelessDeviceLogOptionList</h2>
<!-- backwards compatibility -->
<a id="schemawirelessdevicelogoptionlist"></a>
<a id="schema_WirelessDeviceLogOptionList"></a>
<a id="tocSwirelessdevicelogoptionlist"></a>
<a id="tocswirelessdevicelogoptionlist"></a>

```json
[
  {
    "Type": {},
    "LogLevel": "INFO",
    "Events": [
      {
        "Event": "Join",
        "LogLevel": "INFO"
      }
    ]
  }
]
```

The list of wireless device log options.

<h2 id="tocS_GetMulticastGroupRequest">GetMulticastGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmulticastgrouprequest"></a>
<a id="schema_GetMulticastGroupRequest"></a>
<a id="tocSgetmulticastgrouprequest"></a>
<a id="tocsgetmulticastgrouprequest"></a>

```json
{}
```

<h2 id="tocS_MulticastGroupStatus">MulticastGroupStatus</h2>
<!-- backwards compatibility -->
<a id="schemamulticastgroupstatus"></a>
<a id="schema_MulticastGroupStatus"></a>
<a id="tocSmulticastgroupstatus"></a>
<a id="tocsmulticastgroupstatus"></a>

```json
"string"
```

The status of the multicast group.

<h2 id="tocS_LoRaWANMulticastGet">LoRaWANMulticastGet</h2>
<!-- backwards compatibility -->
<a id="schemalorawanmulticastget"></a>
<a id="schema_LoRaWANMulticastGet"></a>
<a id="tocSlorawanmulticastget"></a>
<a id="tocslorawanmulticastget"></a>

```json
{
  "RfRegion": "EU868",
  "DlClass": "ClassB",
  "NumberOfDevicesRequested": 0,
  "NumberOfDevicesInGroup": 0
}
```

The LoRaWAN information that is to be returned from getting multicast group information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RfRegion|[SupportedRfRegion](#schemasupportedrfregion)|false|none|Supported RfRegions|
|DlClass|[DlClass](#schemadlclass)|false|none|DlClass for LoRaWAM, valid values are ClassB and ClassC.|
|NumberOfDevicesRequested|[NumberOfDevicesRequested](#schemanumberofdevicesrequested)|false|none|Number of devices that are requested to be associated with the multicast group.|
|NumberOfDevicesInGroup|[NumberOfDevicesInGroup](#schemanumberofdevicesingroup)|false|none|Number of devices that are associated to the multicast group.|

#### Enumerated Values

|Property|Value|
|---|---|
|RfRegion|EU868|
|RfRegion|US915|
|RfRegion|AU915|
|RfRegion|AS923-1|
|RfRegion|AS923-2|
|RfRegion|AS923-3|
|RfRegion|AS923-4|
|RfRegion|EU433|
|RfRegion|CN470|
|RfRegion|CN779|
|RfRegion|RU864|
|RfRegion|KR920|
|RfRegion|IN865|
|DlClass|ClassB|
|DlClass|ClassC|

<h2 id="tocS_GetMulticastGroupSessionRequest">GetMulticastGroupSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmulticastgroupsessionrequest"></a>
<a id="schema_GetMulticastGroupSessionRequest"></a>
<a id="tocSgetmulticastgroupsessionrequest"></a>
<a id="tocsgetmulticastgroupsessionrequest"></a>

```json
{}
```

<h2 id="tocS_LoRaWANMulticastSession">LoRaWANMulticastSession</h2>
<!-- backwards compatibility -->
<a id="schemalorawanmulticastsession"></a>
<a id="schema_LoRaWANMulticastSession"></a>
<a id="tocSlorawanmulticastsession"></a>
<a id="tocslorawanmulticastsession"></a>

```json
{
  "DlDr": 0,
  "DlFreq": 100000000,
  "SessionStartTime": "1970-01-01T00:00:00Z",
  "SessionTimeout": 60,
  "PingSlotPeriod": {}
}
```

The LoRaWAN information used with the multicast session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DlDr|[DlDr](#schemadldr)|false|none|Downlink data rate.|
|DlFreq|[DlFreq](#schemadlfreq)|false|none|Downlink frequency.|
|SessionStartTime|[SessionStartTimeTimestamp](#schemasessionstarttimetimestamp)|false|none|Timestamp of when the multicast group session is to start.|
|SessionTimeout|[SessionTimeout](#schemasessiontimeout)|false|none|How long before a multicast group session is to timeout.|
|PingSlotPeriod|object|false|none|none|

<h2 id="tocS_GetNetworkAnalyzerConfigurationRequest">GetNetworkAnalyzerConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworkanalyzerconfigurationrequest"></a>
<a id="schema_GetNetworkAnalyzerConfigurationRequest"></a>
<a id="tocSgetnetworkanalyzerconfigurationrequest"></a>
<a id="tocsgetnetworkanalyzerconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_GetPartnerAccountRequest">GetPartnerAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpartneraccountrequest"></a>
<a id="schema_GetPartnerAccountRequest"></a>
<a id="tocSgetpartneraccountrequest"></a>
<a id="tocsgetpartneraccountrequest"></a>

```json
{}
```

<h2 id="tocS_SidewalkAccountInfoWithFingerprint">SidewalkAccountInfoWithFingerprint</h2>
<!-- backwards compatibility -->
<a id="schemasidewalkaccountinfowithfingerprint"></a>
<a id="schema_SidewalkAccountInfoWithFingerprint"></a>
<a id="tocSsidewalkaccountinfowithfingerprint"></a>
<a id="tocssidewalkaccountinfowithfingerprint"></a>

```json
{
  "AmazonId": {},
  "Fingerprint": {},
  "Arn": {}
}
```

Information about a Sidewalk account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmazonId|object|false|none|none|
|Fingerprint|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_PositionResourceIdentifier">PositionResourceIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemapositionresourceidentifier"></a>
<a id="schema_PositionResourceIdentifier"></a>
<a id="tocSpositionresourceidentifier"></a>
<a id="tocspositionresourceidentifier"></a>

```json
"string"
```

<h2 id="tocS_PositionResourceType">PositionResourceType</h2>
<!-- backwards compatibility -->
<a id="schemapositionresourcetype"></a>
<a id="schema_PositionResourceType"></a>
<a id="tocSpositionresourcetype"></a>
<a id="tocspositionresourcetype"></a>

```json
"WirelessDevice"
```

<h2 id="tocS_GetPositionConfigurationRequest">GetPositionConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpositionconfigurationrequest"></a>
<a id="schema_GetPositionConfigurationRequest"></a>
<a id="tocSgetpositionconfigurationrequest"></a>
<a id="tocsgetpositionconfigurationrequest"></a>

```json
{}
```

This operation is no longer supported.

<h2 id="tocS_PositionSolverDetails">PositionSolverDetails</h2>
<!-- backwards compatibility -->
<a id="schemapositionsolverdetails"></a>
<a id="schema_PositionSolverDetails"></a>
<a id="tocSpositionsolverdetails"></a>
<a id="tocspositionsolverdetails"></a>

```json
{
  "SemtechGnss": {
    "Provider": {},
    "Type": {},
    "Status": {},
    "Fec": {}
  }
}
```

The wrapper for position solver details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SemtechGnss|object|false|none|none|

<h2 id="tocS_WiFiAccessPoints">WiFiAccessPoints</h2>
<!-- backwards compatibility -->
<a id="schemawifiaccesspoints"></a>
<a id="schema_WiFiAccessPoints"></a>
<a id="tocSwifiaccesspoints"></a>
<a id="tocswifiaccesspoints"></a>

```json
[
  {
    "MacAddress": {},
    "Rss": {}
  }
]
```

<h2 id="tocS_Ip">Ip</h2>
<!-- backwards compatibility -->
<a id="schemaip"></a>
<a id="schema_Ip"></a>
<a id="tocSip"></a>
<a id="tocsip"></a>

```json
{
  "IpAddress": {}
}
```

IP address used for resolving device location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpAddress|object|true|none|none|

<h2 id="tocS_Gnss">Gnss</h2>
<!-- backwards compatibility -->
<a id="schemagnss"></a>
<a id="schema_Gnss"></a>
<a id="tocSgnss"></a>
<a id="tocsgnss"></a>

```json
{
  "Payload": {},
  "CaptureTime": {},
  "CaptureTimeAccuracy": {},
  "AssistPosition": {},
  "AssistAltitude": {},
  "Use2DSolver": {}
}
```

Global navigation satellite system (GNSS) object used for positioning.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Payload|object|true|none|none|
|CaptureTime|object|false|none|none|
|CaptureTimeAccuracy|object|false|none|none|
|AssistPosition|object|false|none|none|
|AssistAltitude|object|false|none|none|
|Use2DSolver|object|false|none|none|

<h2 id="tocS_GetPositionEstimateRequest">GetPositionEstimateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpositionestimaterequest"></a>
<a id="schema_GetPositionEstimateRequest"></a>
<a id="tocSgetpositionestimaterequest"></a>
<a id="tocsgetpositionestimaterequest"></a>

```json
{
  "WiFiAccessPoints": {},
  "CellTowers": {
    "Gsm": {},
    "Wcdma": {},
    "Tdscdma": {},
    "Lte": {},
    "Cdma": {}
  },
  "Ip": {
    "IpAddress": {}
  },
  "Gnss": {
    "Payload": {},
    "CaptureTime": {},
    "CaptureTimeAccuracy": {},
    "AssistPosition": {},
    "AssistAltitude": {},
    "Use2DSolver": {}
  },
  "Timestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WiFiAccessPoints|object|false|none|none|
|CellTowers|object|false|none|none|
|Ip|object|false|none|none|
|Gnss|object|false|none|none|
|Timestamp|object|false|none|none|

<h2 id="tocS_GetPositionRequest">GetPositionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpositionrequest"></a>
<a id="schema_GetPositionRequest"></a>
<a id="tocSgetpositionrequest"></a>
<a id="tocsgetpositionrequest"></a>

```json
{}
```

This operation is no longer supported.

<h2 id="tocS_PositionCoordinate">PositionCoordinate</h2>
<!-- backwards compatibility -->
<a id="schemapositioncoordinate"></a>
<a id="schema_PositionCoordinate"></a>
<a id="tocSpositioncoordinate"></a>
<a id="tocspositioncoordinate"></a>

```json
[
  0
]
```

<h2 id="tocS_PositionSolverType">PositionSolverType</h2>
<!-- backwards compatibility -->
<a id="schemapositionsolvertype"></a>
<a id="schema_PositionSolverType"></a>
<a id="tocSpositionsolvertype"></a>
<a id="tocspositionsolvertype"></a>

```json
"GNSS"
```

<h2 id="tocS_PositionSolverProvider">PositionSolverProvider</h2>
<!-- backwards compatibility -->
<a id="schemapositionsolverprovider"></a>
<a id="schema_PositionSolverProvider"></a>
<a id="tocSpositionsolverprovider"></a>
<a id="tocspositionsolverprovider"></a>

```json
"Semtech"
```

<h2 id="tocS_PositionSolverVersion">PositionSolverVersion</h2>
<!-- backwards compatibility -->
<a id="schemapositionsolverversion"></a>
<a id="schema_PositionSolverVersion"></a>
<a id="tocSpositionsolverversion"></a>
<a id="tocspositionsolverversion"></a>

```json
"string"
```

<h2 id="tocS_GetResourceEventConfigurationRequest">GetResourceEventConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourceeventconfigurationrequest"></a>
<a id="schema_GetResourceEventConfigurationRequest"></a>
<a id="tocSgetresourceeventconfigurationrequest"></a>
<a id="tocsgetresourceeventconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_ResourceIdentifier">ResourceIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidentifier"></a>
<a id="schema_ResourceIdentifier"></a>
<a id="tocSresourceidentifier"></a>
<a id="tocsresourceidentifier"></a>

```json
"string"
```

The identifier of the resource. For a Wireless Device, it is the wireless device ID. For a wireless gateway, it is the wireless gateway ID.

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"string"
```

<h2 id="tocS_GetResourceLogLevelRequest">GetResourceLogLevelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourceloglevelrequest"></a>
<a id="schema_GetResourceLogLevelRequest"></a>
<a id="tocSgetresourceloglevelrequest"></a>
<a id="tocsgetresourceloglevelrequest"></a>

```json
{}
```

<h2 id="tocS_GetResourcePositionRequest">GetResourcePositionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepositionrequest"></a>
<a id="schema_GetResourcePositionRequest"></a>
<a id="tocSgetresourcepositionrequest"></a>
<a id="tocsgetresourcepositionrequest"></a>

```json
{}
```

<h2 id="tocS_WirelessGatewayServiceType">WirelessGatewayServiceType</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewayservicetype"></a>
<a id="schema_WirelessGatewayServiceType"></a>
<a id="tocSwirelessgatewayservicetype"></a>
<a id="tocswirelessgatewayservicetype"></a>

```json
"CUPS"
```

<h2 id="tocS_GetServiceEndpointRequest">GetServiceEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetserviceendpointrequest"></a>
<a id="schema_GetServiceEndpointRequest"></a>
<a id="tocSgetserviceendpointrequest"></a>
<a id="tocsgetserviceendpointrequest"></a>

```json
{}
```

<h2 id="tocS_GetServiceProfileRequest">GetServiceProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetserviceprofilerequest"></a>
<a id="schema_GetServiceProfileRequest"></a>
<a id="tocSgetserviceprofilerequest"></a>
<a id="tocsgetserviceprofilerequest"></a>

```json
{}
```

<h2 id="tocS_LoRaWANGetServiceProfileInfo">LoRaWANGetServiceProfileInfo</h2>
<!-- backwards compatibility -->
<a id="schemalorawangetserviceprofileinfo"></a>
<a id="schema_LoRaWANGetServiceProfileInfo"></a>
<a id="tocSlorawangetserviceprofileinfo"></a>
<a id="tocslorawangetserviceprofileinfo"></a>

```json
{
  "UlRate": {},
  "UlBucketSize": {},
  "UlRatePolicy": {},
  "DlRate": {},
  "DlBucketSize": {},
  "DlRatePolicy": {},
  "AddGwMetadata": {},
  "DevStatusReqFreq": {},
  "ReportDevStatusBattery": {},
  "ReportDevStatusMargin": {},
  "DrMin": {},
  "DrMax": {},
  "ChannelMask": {},
  "PrAllowed": {},
  "HrAllowed": {},
  "RaAllowed": {},
  "NwkGeoLoc": {},
  "TargetPer": {},
  "MinGwDiversity": {}
}
```

LoRaWANGetServiceProfileInfo object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UlRate|object|false|none|none|
|UlBucketSize|object|false|none|none|
|UlRatePolicy|object|false|none|none|
|DlRate|object|false|none|none|
|DlBucketSize|object|false|none|none|
|DlRatePolicy|object|false|none|none|
|AddGwMetadata|object|false|none|none|
|DevStatusReqFreq|object|false|none|none|
|ReportDevStatusBattery|object|false|none|none|
|ReportDevStatusMargin|object|false|none|none|
|DrMin|object|false|none|none|
|DrMax|object|false|none|none|
|ChannelMask|object|false|none|none|
|PrAllowed|object|false|none|none|
|HrAllowed|object|false|none|none|
|RaAllowed|object|false|none|none|
|NwkGeoLoc|object|false|none|none|
|TargetPer|object|false|none|none|
|MinGwDiversity|object|false|none|none|

<h2 id="tocS_GetWirelessDeviceImportTaskRequest">GetWirelessDeviceImportTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetwirelessdeviceimporttaskrequest"></a>
<a id="schema_GetWirelessDeviceImportTaskRequest"></a>
<a id="tocSgetwirelessdeviceimporttaskrequest"></a>
<a id="tocsgetwirelessdeviceimporttaskrequest"></a>

```json
{}
```

<h2 id="tocS_ImportTaskArn">ImportTaskArn</h2>
<!-- backwards compatibility -->
<a id="schemaimporttaskarn"></a>
<a id="schema_ImportTaskArn"></a>
<a id="tocSimporttaskarn"></a>
<a id="tocsimporttaskarn"></a>

```json
"string"
```

<h2 id="tocS_SidewalkGetStartImportInfo">SidewalkGetStartImportInfo</h2>
<!-- backwards compatibility -->
<a id="schemasidewalkgetstartimportinfo"></a>
<a id="schema_SidewalkGetStartImportInfo"></a>
<a id="tocSsidewalkgetstartimportinfo"></a>
<a id="tocssidewalkgetstartimportinfo"></a>

```json
{
  "DeviceCreationFileList": {},
  "Role": {}
}
```

Sidewalk-related information for devices in an import task that are being onboarded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceCreationFileList|object|false|none|none|
|Role|object|false|none|none|

<h2 id="tocS_ImportTaskStatus">ImportTaskStatus</h2>
<!-- backwards compatibility -->
<a id="schemaimporttaskstatus"></a>
<a id="schema_ImportTaskStatus"></a>
<a id="tocSimporttaskstatus"></a>
<a id="tocsimporttaskstatus"></a>

```json
"INITIALIZING"
```

<h2 id="tocS_StatusReason">StatusReason</h2>
<!-- backwards compatibility -->
<a id="schemastatusreason"></a>
<a id="schema_StatusReason"></a>
<a id="tocSstatusreason"></a>
<a id="tocsstatusreason"></a>

```json
"string"
```

<h2 id="tocS_ImportedWirelessDeviceCount">ImportedWirelessDeviceCount</h2>
<!-- backwards compatibility -->
<a id="schemaimportedwirelessdevicecount"></a>
<a id="schema_ImportedWirelessDeviceCount"></a>
<a id="tocSimportedwirelessdevicecount"></a>
<a id="tocsimportedwirelessdevicecount"></a>

```json
0
```

<h2 id="tocS_WirelessDeviceIdType">WirelessDeviceIdType</h2>
<!-- backwards compatibility -->
<a id="schemawirelessdeviceidtype"></a>
<a id="schema_WirelessDeviceIdType"></a>
<a id="tocSwirelessdeviceidtype"></a>
<a id="tocswirelessdeviceidtype"></a>

```json
"WirelessDeviceId"
```

<h2 id="tocS_GetWirelessDeviceRequest">GetWirelessDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetwirelessdevicerequest"></a>
<a id="schema_GetWirelessDeviceRequest"></a>
<a id="tocSgetwirelessdevicerequest"></a>
<a id="tocsgetwirelessdevicerequest"></a>

```json
{}
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

<h2 id="tocS_SidewalkDevice">SidewalkDevice</h2>
<!-- backwards compatibility -->
<a id="schemasidewalkdevice"></a>
<a id="schema_SidewalkDevice"></a>
<a id="tocSsidewalkdevice"></a>
<a id="tocssidewalkdevice"></a>

```json
{
  "AmazonId": "string",
  "SidewalkId": {},
  "SidewalkManufacturingSn": {},
  "DeviceCertificates": {},
  "PrivateKeys": {},
  "DeviceProfileId": {},
  "CertificateId": {},
  "Status": {}
}
```

Sidewalk device object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmazonId|[AmazonId](#schemaamazonid)|false|none|The Sidewalk Amazon ID.|
|SidewalkId|object|false|none|none|
|SidewalkManufacturingSn|object|false|none|none|
|DeviceCertificates|object|false|none|none|
|PrivateKeys|object|false|none|none|
|DeviceProfileId|object|false|none|none|
|CertificateId|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_GetWirelessDeviceStatisticsRequest">GetWirelessDeviceStatisticsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetwirelessdevicestatisticsrequest"></a>
<a id="schema_GetWirelessDeviceStatisticsRequest"></a>
<a id="tocSgetwirelessdevicestatisticsrequest"></a>
<a id="tocsgetwirelessdevicestatisticsrequest"></a>

```json
{}
```

<h2 id="tocS_LoRaWANDeviceMetadata">LoRaWANDeviceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemalorawandevicemetadata"></a>
<a id="schema_LoRaWANDeviceMetadata"></a>
<a id="tocSlorawandevicemetadata"></a>
<a id="tocslorawandevicemetadata"></a>

```json
{
  "DevEui": {},
  "FPort": {},
  "DataRate": {},
  "Frequency": {},
  "Timestamp": {},
  "Gateways": {}
}
```

LoRaWAN device metatdata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DevEui|object|false|none|none|
|FPort|object|false|none|none|
|DataRate|object|false|none|none|
|Frequency|object|false|none|none|
|Timestamp|object|false|none|none|
|Gateways|object|false|none|none|

<h2 id="tocS_SidewalkDeviceMetadata">SidewalkDeviceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasidewalkdevicemetadata"></a>
<a id="schema_SidewalkDeviceMetadata"></a>
<a id="tocSsidewalkdevicemetadata"></a>
<a id="tocssidewalkdevicemetadata"></a>

```json
{
  "Rssi": {},
  "BatteryLevel": {},
  "Event": {},
  "DeviceState": {}
}
```

MetaData for Sidewalk device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rssi|object|false|none|none|
|BatteryLevel|object|false|none|none|
|Event|object|false|none|none|
|DeviceState|object|false|none|none|

<h2 id="tocS_GetWirelessGatewayCertificateRequest">GetWirelessGatewayCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetwirelessgatewaycertificaterequest"></a>
<a id="schema_GetWirelessGatewayCertificateRequest"></a>
<a id="tocSgetwirelessgatewaycertificaterequest"></a>
<a id="tocsgetwirelessgatewaycertificaterequest"></a>

```json
{}
```

<h2 id="tocS_GetWirelessGatewayFirmwareInformationRequest">GetWirelessGatewayFirmwareInformationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetwirelessgatewayfirmwareinformationrequest"></a>
<a id="schema_GetWirelessGatewayFirmwareInformationRequest"></a>
<a id="tocSgetwirelessgatewayfirmwareinformationrequest"></a>
<a id="tocsgetwirelessgatewayfirmwareinformationrequest"></a>

```json
{}
```

<h2 id="tocS_LoRaWANGatewayCurrentVersion">LoRaWANGatewayCurrentVersion</h2>
<!-- backwards compatibility -->
<a id="schemalorawangatewaycurrentversion"></a>
<a id="schema_LoRaWANGatewayCurrentVersion"></a>
<a id="tocSlorawangatewaycurrentversion"></a>
<a id="tocslorawangatewaycurrentversion"></a>

```json
{
  "CurrentVersion": {
    "PackageVersion": {},
    "Model": {},
    "Station": {}
  }
}
```

LoRaWANGatewayCurrentVersion object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrentVersion|object|false|none|none|

<h2 id="tocS_WirelessGatewayIdType">WirelessGatewayIdType</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewayidtype"></a>
<a id="schema_WirelessGatewayIdType"></a>
<a id="tocSwirelessgatewayidtype"></a>
<a id="tocswirelessgatewayidtype"></a>

```json
"GatewayEui"
```

<h2 id="tocS_GetWirelessGatewayRequest">GetWirelessGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetwirelessgatewayrequest"></a>
<a id="schema_GetWirelessGatewayRequest"></a>
<a id="tocSgetwirelessgatewayrequest"></a>
<a id="tocsgetwirelessgatewayrequest"></a>

```json
{}
```

<h2 id="tocS_GetWirelessGatewayStatisticsRequest">GetWirelessGatewayStatisticsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetwirelessgatewaystatisticsrequest"></a>
<a id="schema_GetWirelessGatewayStatisticsRequest"></a>
<a id="tocSgetwirelessgatewaystatisticsrequest"></a>
<a id="tocsgetwirelessgatewaystatisticsrequest"></a>

```json
{}
```

<h2 id="tocS_GetWirelessGatewayTaskDefinitionRequest">GetWirelessGatewayTaskDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetwirelessgatewaytaskdefinitionrequest"></a>
<a id="schema_GetWirelessGatewayTaskDefinitionRequest"></a>
<a id="tocSgetwirelessgatewaytaskdefinitionrequest"></a>
<a id="tocsgetwirelessgatewaytaskdefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_GetWirelessGatewayTaskRequest">GetWirelessGatewayTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetwirelessgatewaytaskrequest"></a>
<a id="schema_GetWirelessGatewayTaskRequest"></a>
<a id="tocSgetwirelessgatewaytaskrequest"></a>
<a id="tocsgetwirelessgatewaytaskrequest"></a>

```json
{}
```

<h2 id="tocS_LAC">LAC</h2>
<!-- backwards compatibility -->
<a id="schemalac"></a>
<a id="schema_LAC"></a>
<a id="tocSlac"></a>
<a id="tocslac"></a>

```json
1
```

<h2 id="tocS_GlobalIdentity">GlobalIdentity</h2>
<!-- backwards compatibility -->
<a id="schemaglobalidentity"></a>
<a id="schema_GlobalIdentity"></a>
<a id="tocSglobalidentity"></a>
<a id="tocsglobalidentity"></a>

```json
{
  "Lac": {},
  "GeranCid": {}
}
```

Global identity information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Lac|object|true|none|none|
|GeranCid|object|true|none|none|

<h2 id="tocS_GsmObj">GsmObj</h2>
<!-- backwards compatibility -->
<a id="schemagsmobj"></a>
<a id="schema_GsmObj"></a>
<a id="tocSgsmobj"></a>
<a id="tocsgsmobj"></a>

```json
{
  "Mcc": {},
  "Mnc": {},
  "Lac": {},
  "GeranCid": {},
  "GsmLocalId": {
    "Bsic": {},
    "Bcch": {}
  },
  "GsmTimingAdvance": {},
  "RxLevel": {},
  "GsmNmr": {}
}
```

GSM object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mcc|object|true|none|none|
|Mnc|object|true|none|none|
|Lac|object|true|none|none|
|GeranCid|object|true|none|none|
|GsmLocalId|object|false|none|none|
|GsmTimingAdvance|object|false|none|none|
|RxLevel|object|false|none|none|
|GsmNmr|object|false|none|none|

<h2 id="tocS_GsmLocalId">GsmLocalId</h2>
<!-- backwards compatibility -->
<a id="schemagsmlocalid"></a>
<a id="schema_GsmLocalId"></a>
<a id="tocSgsmlocalid"></a>
<a id="tocsgsmlocalid"></a>

```json
{
  "Bsic": {},
  "Bcch": {}
}
```

GSM local ID information, which corresponds to the local identification parameters of a GSM cell.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bsic|object|true|none|none|
|Bcch|object|true|none|none|

<h2 id="tocS_GsmNmrObj">GsmNmrObj</h2>
<!-- backwards compatibility -->
<a id="schemagsmnmrobj"></a>
<a id="schema_GsmNmrObj"></a>
<a id="tocSgsmnmrobj"></a>
<a id="tocsgsmnmrobj"></a>

```json
{
  "Bsic": {},
  "Bcch": {},
  "RxLevel": {},
  "GlobalIdentity": {
    "Lac": {},
    "GeranCid": {}
  }
}
```

GSM object for network measurement reports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bsic|object|true|none|none|
|Bcch|object|true|none|none|
|RxLevel|object|false|none|none|
|GlobalIdentity|object|false|none|none|

<h2 id="tocS_GsmNmrList">GsmNmrList</h2>
<!-- backwards compatibility -->
<a id="schemagsmnmrlist"></a>
<a id="schema_GsmNmrList"></a>
<a id="tocSgsmnmrlist"></a>
<a id="tocsgsmnmrlist"></a>

```json
[
  {
    "Bsic": {},
    "Bcch": {},
    "RxLevel": {},
    "GlobalIdentity": {
      "Lac": {},
      "GeranCid": {}
    }
  }
]
```

<h2 id="tocS_RxLevel">RxLevel</h2>
<!-- backwards compatibility -->
<a id="schemarxlevel"></a>
<a id="schema_RxLevel"></a>
<a id="tocSrxlevel"></a>
<a id="tocsrxlevel"></a>

```json
-110
```

<h2 id="tocS_MCC">MCC</h2>
<!-- backwards compatibility -->
<a id="schemamcc"></a>
<a id="schema_MCC"></a>
<a id="tocSmcc"></a>
<a id="tocsmcc"></a>

```json
200
```

<h2 id="tocS_MNC">MNC</h2>
<!-- backwards compatibility -->
<a id="schemamnc"></a>
<a id="schema_MNC"></a>
<a id="tocSmnc"></a>
<a id="tocsmnc"></a>

```json
0
```

<h2 id="tocS_GsmTimingAdvance">GsmTimingAdvance</h2>
<!-- backwards compatibility -->
<a id="schemagsmtimingadvance"></a>
<a id="schema_GsmTimingAdvance"></a>
<a id="tocSgsmtimingadvance"></a>
<a id="tocsgsmtimingadvance"></a>

```json
0
```

<h2 id="tocS_HrAllowed">HrAllowed</h2>
<!-- backwards compatibility -->
<a id="schemahrallowed"></a>
<a id="schema_HrAllowed"></a>
<a id="tocShrallowed"></a>
<a id="tocshrallowed"></a>

```json
true
```

<h2 id="tocS_OnboardStatus">OnboardStatus</h2>
<!-- backwards compatibility -->
<a id="schemaonboardstatus"></a>
<a id="schema_OnboardStatus"></a>
<a id="tocSonboardstatus"></a>
<a id="tocsonboardstatus"></a>

```json
"INITIALIZED"
```

<h2 id="tocS_OnboardStatusReason">OnboardStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemaonboardstatusreason"></a>
<a id="schema_OnboardStatusReason"></a>
<a id="tocSonboardstatusreason"></a>
<a id="tocsonboardstatusreason"></a>

```json
"string"
```

<h2 id="tocS_LastUpdateTime">LastUpdateTime</h2>
<!-- backwards compatibility -->
<a id="schemalastupdatetime"></a>
<a id="schema_LastUpdateTime"></a>
<a id="tocSlastupdatetime"></a>
<a id="tocslastupdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ImportedSidewalkDevice">ImportedSidewalkDevice</h2>
<!-- backwards compatibility -->
<a id="schemaimportedsidewalkdevice"></a>
<a id="schema_ImportedSidewalkDevice"></a>
<a id="tocSimportedsidewalkdevice"></a>
<a id="tocsimportedsidewalkdevice"></a>

```json
{
  "SidewalkManufacturingSn": {},
  "OnboardingStatus": {},
  "OnboardingStatusReason": {},
  "LastUpdateTime": {}
}
```

Information about a Sidewalk device that has been added to an import task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SidewalkManufacturingSn|object|false|none|none|
|OnboardingStatus|object|false|none|none|
|OnboardingStatusReason|object|false|none|none|
|LastUpdateTime|object|false|none|none|

<h2 id="tocS_ImportedWirelessDevice">ImportedWirelessDevice</h2>
<!-- backwards compatibility -->
<a id="schemaimportedwirelessdevice"></a>
<a id="schema_ImportedWirelessDevice"></a>
<a id="tocSimportedwirelessdevice"></a>
<a id="tocsimportedwirelessdevice"></a>

```json
{
  "Sidewalk": {
    "SidewalkManufacturingSn": {},
    "OnboardingStatus": {},
    "OnboardingStatusReason": {},
    "LastUpdateTime": {}
  }
}
```

Information about a wireless device that has been added to an import task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sidewalk|object|false|none|none|

<h2 id="tocS_ImportedWirelessDeviceList">ImportedWirelessDeviceList</h2>
<!-- backwards compatibility -->
<a id="schemaimportedwirelessdevicelist"></a>
<a id="schema_ImportedWirelessDeviceList"></a>
<a id="tocSimportedwirelessdevicelist"></a>
<a id="tocsimportedwirelessdevicelist"></a>

```json
[
  {
    "Sidewalk": {
      "SidewalkManufacturingSn": {},
      "OnboardingStatus": {},
      "OnboardingStatusReason": {},
      "LastUpdateTime": {}
    }
  }
]
```

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_JoinEui">JoinEui</h2>
<!-- backwards compatibility -->
<a id="schemajoineui"></a>
<a id="schema_JoinEui"></a>
<a id="tocSjoineui"></a>
<a id="tocsjoineui"></a>

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
0
```

The maximum number of results to return in this operation.

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_ListDestinationsRequest">ListDestinationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdestinationsrequest"></a>
<a id="schema_ListDestinationsRequest"></a>
<a id="tocSlistdestinationsrequest"></a>
<a id="tocslistdestinationsrequest"></a>

```json
{}
```

<h2 id="tocS_ListDeviceProfilesRequest">ListDeviceProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdeviceprofilesrequest"></a>
<a id="schema_ListDeviceProfilesRequest"></a>
<a id="tocSlistdeviceprofilesrequest"></a>
<a id="tocslistdeviceprofilesrequest"></a>

```json
{}
```

<h2 id="tocS_ListDevicesForWirelessDeviceImportTaskRequest">ListDevicesForWirelessDeviceImportTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicesforwirelessdeviceimporttaskrequest"></a>
<a id="schema_ListDevicesForWirelessDeviceImportTaskRequest"></a>
<a id="tocSlistdevicesforwirelessdeviceimporttaskrequest"></a>
<a id="tocslistdevicesforwirelessdeviceimporttaskrequest"></a>

```json
{}
```

<h2 id="tocS_ListEventConfigurationsRequest">ListEventConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisteventconfigurationsrequest"></a>
<a id="schema_ListEventConfigurationsRequest"></a>
<a id="tocSlisteventconfigurationsrequest"></a>
<a id="tocslisteventconfigurationsrequest"></a>

```json
{}
```

<h2 id="tocS_ListFuotaTasksRequest">ListFuotaTasksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfuotatasksrequest"></a>
<a id="schema_ListFuotaTasksRequest"></a>
<a id="tocSlistfuotatasksrequest"></a>
<a id="tocslistfuotatasksrequest"></a>

```json
{}
```

<h2 id="tocS_ListMulticastGroupsByFuotaTaskRequest">ListMulticastGroupsByFuotaTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmulticastgroupsbyfuotataskrequest"></a>
<a id="schema_ListMulticastGroupsByFuotaTaskRequest"></a>
<a id="tocSlistmulticastgroupsbyfuotataskrequest"></a>
<a id="tocslistmulticastgroupsbyfuotataskrequest"></a>

```json
{}
```

<h2 id="tocS_MulticastGroupListByFuotaTask">MulticastGroupListByFuotaTask</h2>
<!-- backwards compatibility -->
<a id="schemamulticastgrouplistbyfuotatask"></a>
<a id="schema_MulticastGroupListByFuotaTask"></a>
<a id="tocSmulticastgrouplistbyfuotatask"></a>
<a id="tocsmulticastgrouplistbyfuotatask"></a>

```json
[
  {
    "Id": "string"
  }
]
```

List of multicast groups associated with a FUOTA task.

<h2 id="tocS_ListMulticastGroupsRequest">ListMulticastGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmulticastgroupsrequest"></a>
<a id="schema_ListMulticastGroupsRequest"></a>
<a id="tocSlistmulticastgroupsrequest"></a>
<a id="tocslistmulticastgroupsrequest"></a>

```json
{}
```

<h2 id="tocS_MulticastGroupList">MulticastGroupList</h2>
<!-- backwards compatibility -->
<a id="schemamulticastgrouplist"></a>
<a id="schema_MulticastGroupList"></a>
<a id="tocSmulticastgrouplist"></a>
<a id="tocsmulticastgrouplist"></a>

```json
[
  {
    "Id": "string",
    "Arn": "string",
    "Name": "string"
  }
]
```

List of multicast groups.

<h2 id="tocS_ListNetworkAnalyzerConfigurationsRequest">ListNetworkAnalyzerConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistnetworkanalyzerconfigurationsrequest"></a>
<a id="schema_ListNetworkAnalyzerConfigurationsRequest"></a>
<a id="tocSlistnetworkanalyzerconfigurationsrequest"></a>
<a id="tocslistnetworkanalyzerconfigurationsrequest"></a>

```json
{}
```

<h2 id="tocS_NetworkAnalyzerConfigurationList">NetworkAnalyzerConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemanetworkanalyzerconfigurationlist"></a>
<a id="schema_NetworkAnalyzerConfigurationList"></a>
<a id="tocSnetworkanalyzerconfigurationlist"></a>
<a id="tocsnetworkanalyzerconfigurationlist"></a>

```json
[
  {
    "Arn": {},
    "Name": "string"
  }
]
```

<h2 id="tocS_ListPartnerAccountsRequest">ListPartnerAccountsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpartneraccountsrequest"></a>
<a id="schema_ListPartnerAccountsRequest"></a>
<a id="tocSlistpartneraccountsrequest"></a>
<a id="tocslistpartneraccountsrequest"></a>

```json
{}
```

<h2 id="tocS_SidewalkAccountList">SidewalkAccountList</h2>
<!-- backwards compatibility -->
<a id="schemasidewalkaccountlist"></a>
<a id="schema_SidewalkAccountList"></a>
<a id="tocSsidewalkaccountlist"></a>
<a id="tocssidewalkaccountlist"></a>

```json
[
  {
    "AmazonId": {},
    "Fingerprint": {},
    "Arn": {}
  }
]
```

<h2 id="tocS_ListPositionConfigurationsRequest">ListPositionConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpositionconfigurationsrequest"></a>
<a id="schema_ListPositionConfigurationsRequest"></a>
<a id="tocSlistpositionconfigurationsrequest"></a>
<a id="tocslistpositionconfigurationsrequest"></a>

```json
{}
```

This operation is no longer supported.

<h2 id="tocS_PositionConfigurationList">PositionConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemapositionconfigurationlist"></a>
<a id="schema_PositionConfigurationList"></a>
<a id="tocSpositionconfigurationlist"></a>
<a id="tocspositionconfigurationlist"></a>

```json
[
  {
    "ResourceIdentifier": {},
    "ResourceType": {},
    "Solvers": {
      "SemtechGnss": {
        "Provider": {},
        "Type": {},
        "Status": {},
        "Fec": {}
      }
    },
    "Destination": {}
  }
]
```

<h2 id="tocS_ListQueuedMessagesRequest">ListQueuedMessagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistqueuedmessagesrequest"></a>
<a id="schema_ListQueuedMessagesRequest"></a>
<a id="tocSlistqueuedmessagesrequest"></a>
<a id="tocslistqueuedmessagesrequest"></a>

```json
{}
```

<h2 id="tocS_ListServiceProfilesRequest">ListServiceProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceprofilesrequest"></a>
<a id="schema_ListServiceProfilesRequest"></a>
<a id="tocSlistserviceprofilesrequest"></a>
<a id="tocslistserviceprofilesrequest"></a>

```json
{}
```

<h2 id="tocS_ServiceProfileList">ServiceProfileList</h2>
<!-- backwards compatibility -->
<a id="schemaserviceprofilelist"></a>
<a id="schema_ServiceProfileList"></a>
<a id="tocSserviceprofilelist"></a>
<a id="tocsserviceprofilelist"></a>

```json
[
  {
    "Arn": {},
    "Name": {},
    "Id": {}
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

<h2 id="tocS_ListWirelessDeviceImportTasksRequest">ListWirelessDeviceImportTasksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistwirelessdeviceimporttasksrequest"></a>
<a id="schema_ListWirelessDeviceImportTasksRequest"></a>
<a id="tocSlistwirelessdeviceimporttasksrequest"></a>
<a id="tocslistwirelessdeviceimporttasksrequest"></a>

```json
{}
```

<h2 id="tocS_WirelessDeviceImportTaskList">WirelessDeviceImportTaskList</h2>
<!-- backwards compatibility -->
<a id="schemawirelessdeviceimporttasklist"></a>
<a id="schema_WirelessDeviceImportTaskList"></a>
<a id="tocSwirelessdeviceimporttasklist"></a>
<a id="tocswirelessdeviceimporttasklist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "DestinationName": {},
    "Sidewalk": {
      "DeviceCreationFileList": {},
      "Role": {}
    },
    "CreationTime": {},
    "Status": {},
    "StatusReason": {},
    "InitializedImportedDeviceCount": {},
    "PendingImportedDeviceCount": {},
    "OnboardedImportedDeviceCount": {},
    "FailedImportedDeviceCount": {}
  }
]
```

<h2 id="tocS_ListWirelessDevicesRequest">ListWirelessDevicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistwirelessdevicesrequest"></a>
<a id="schema_ListWirelessDevicesRequest"></a>
<a id="tocSlistwirelessdevicesrequest"></a>
<a id="tocslistwirelessdevicesrequest"></a>

```json
{}
```

<h2 id="tocS_WirelessDeviceStatisticsList">WirelessDeviceStatisticsList</h2>
<!-- backwards compatibility -->
<a id="schemawirelessdevicestatisticslist"></a>
<a id="schema_WirelessDeviceStatisticsList"></a>
<a id="tocSwirelessdevicestatisticslist"></a>
<a id="tocswirelessdevicestatisticslist"></a>

```json
[
  {
    "Arn": {},
    "Id": {},
    "Type": {},
    "Name": {},
    "DestinationName": {},
    "LastUplinkReceivedAt": {},
    "LoRaWAN": {
      "DevEui": {}
    },
    "Sidewalk": {
      "AmazonId": {},
      "SidewalkId": {},
      "SidewalkManufacturingSn": {},
      "DeviceCertificates": {},
      "DeviceProfileId": {},
      "Status": {}
    },
    "FuotaDeviceStatus": "Initial",
    "MulticastDeviceStatus": {},
    "McGroupId": 1
  }
]
```

<h2 id="tocS_WirelessGatewayTaskDefinitionType">WirelessGatewayTaskDefinitionType</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewaytaskdefinitiontype"></a>
<a id="schema_WirelessGatewayTaskDefinitionType"></a>
<a id="tocSwirelessgatewaytaskdefinitiontype"></a>
<a id="tocswirelessgatewaytaskdefinitiontype"></a>

```json
"UPDATE"
```

<h2 id="tocS_ListWirelessGatewayTaskDefinitionsRequest">ListWirelessGatewayTaskDefinitionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistwirelessgatewaytaskdefinitionsrequest"></a>
<a id="schema_ListWirelessGatewayTaskDefinitionsRequest"></a>
<a id="tocSlistwirelessgatewaytaskdefinitionsrequest"></a>
<a id="tocslistwirelessgatewaytaskdefinitionsrequest"></a>

```json
{}
```

<h2 id="tocS_WirelessGatewayTaskDefinitionList">WirelessGatewayTaskDefinitionList</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewaytaskdefinitionlist"></a>
<a id="schema_WirelessGatewayTaskDefinitionList"></a>
<a id="tocSwirelessgatewaytaskdefinitionlist"></a>
<a id="tocswirelessgatewaytaskdefinitionlist"></a>

```json
[
  {
    "Id": {},
    "LoRaWAN": {
      "CurrentVersion": {
        "PackageVersion": {},
        "Model": {},
        "Station": {}
      },
      "UpdateVersion": {
        "PackageVersion": {},
        "Model": {},
        "Station": {}
      }
    },
    "Arn": {}
  }
]
```

<h2 id="tocS_ListWirelessGatewaysRequest">ListWirelessGatewaysRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistwirelessgatewaysrequest"></a>
<a id="schema_ListWirelessGatewaysRequest"></a>
<a id="tocSlistwirelessgatewaysrequest"></a>
<a id="tocslistwirelessgatewaysrequest"></a>

```json
{}
```

<h2 id="tocS_WirelessGatewayStatisticsList">WirelessGatewayStatisticsList</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewaystatisticslist"></a>
<a id="schema_WirelessGatewayStatisticsList"></a>
<a id="tocSwirelessgatewaystatisticslist"></a>
<a id="tocswirelessgatewaystatisticslist"></a>

```json
[
  {
    "Arn": {},
    "Id": {},
    "Name": {},
    "Description": {},
    "LoRaWAN": {
      "GatewayEui": {},
      "RfRegion": {},
      "JoinEuiFilters": [
        [
          "string",
          "string"
        ]
      ],
      "NetIdFilters": [
        "string"
      ],
      "SubBands": [
        1
      ],
      "Beaconing": {
        "DataRate": {},
        "Frequencies": {}
      },
      "MaxEirp": {}
    },
    "LastUplinkReceivedAt": {}
  }
]
```

<h2 id="tocS_LoRaWANGatewayMetadataList">LoRaWANGatewayMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemalorawangatewaymetadatalist"></a>
<a id="schema_LoRaWANGatewayMetadataList"></a>
<a id="tocSlorawangatewaymetadatalist"></a>
<a id="tocslorawangatewaymetadatalist"></a>

```json
[
  {
    "GatewayEui": {},
    "Snr": {},
    "Rssi": {}
  }
]
```

<h2 id="tocS_LoRaWANGatewayVersion">LoRaWANGatewayVersion</h2>
<!-- backwards compatibility -->
<a id="schemalorawangatewayversion"></a>
<a id="schema_LoRaWANGatewayVersion"></a>
<a id="tocSlorawangatewayversion"></a>
<a id="tocslorawangatewayversion"></a>

```json
{
  "PackageVersion": {},
  "Model": {},
  "Station": {}
}
```

LoRaWANGatewayVersion object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PackageVersion|object|false|none|none|
|Model|object|false|none|none|
|Station|object|false|none|none|

<h2 id="tocS_LoRaWANGatewayMetadata">LoRaWANGatewayMetadata</h2>
<!-- backwards compatibility -->
<a id="schemalorawangatewaymetadata"></a>
<a id="schema_LoRaWANGatewayMetadata"></a>
<a id="tocSlorawangatewaymetadata"></a>
<a id="tocslorawangatewaymetadata"></a>

```json
{
  "GatewayEui": {},
  "Snr": {},
  "Rssi": {}
}
```

LoRaWAN gateway metatdata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayEui|object|false|none|none|
|Snr|object|false|none|none|
|Rssi|object|false|none|none|

<h2 id="tocS_PackageVersion">PackageVersion</h2>
<!-- backwards compatibility -->
<a id="schemapackageversion"></a>
<a id="schema_PackageVersion"></a>
<a id="tocSpackageversion"></a>
<a id="tocspackageversion"></a>

```json
"string"
```

<h2 id="tocS_Model">Model</h2>
<!-- backwards compatibility -->
<a id="schemamodel"></a>
<a id="schema_Model"></a>
<a id="tocSmodel"></a>
<a id="tocsmodel"></a>

```json
"string"
```

<h2 id="tocS_Station">Station</h2>
<!-- backwards compatibility -->
<a id="schemastation"></a>
<a id="schema_Station"></a>
<a id="tocSstation"></a>
<a id="tocsstation"></a>

```json
"string"
```

<h2 id="tocS_UlRate">UlRate</h2>
<!-- backwards compatibility -->
<a id="schemaulrate"></a>
<a id="schema_UlRate"></a>
<a id="tocSulrate"></a>
<a id="tocsulrate"></a>

```json
0
```

<h2 id="tocS_UlBucketSize">UlBucketSize</h2>
<!-- backwards compatibility -->
<a id="schemaulbucketsize"></a>
<a id="schema_UlBucketSize"></a>
<a id="tocSulbucketsize"></a>
<a id="tocsulbucketsize"></a>

```json
0
```

<h2 id="tocS_UlRatePolicy">UlRatePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaulratepolicy"></a>
<a id="schema_UlRatePolicy"></a>
<a id="tocSulratepolicy"></a>
<a id="tocsulratepolicy"></a>

```json
"string"
```

<h2 id="tocS_ReportDevStatusBattery">ReportDevStatusBattery</h2>
<!-- backwards compatibility -->
<a id="schemareportdevstatusbattery"></a>
<a id="schema_ReportDevStatusBattery"></a>
<a id="tocSreportdevstatusbattery"></a>
<a id="tocsreportdevstatusbattery"></a>

```json
true
```

<h2 id="tocS_ReportDevStatusMargin">ReportDevStatusMargin</h2>
<!-- backwards compatibility -->
<a id="schemareportdevstatusmargin"></a>
<a id="schema_ReportDevStatusMargin"></a>
<a id="tocSreportdevstatusmargin"></a>
<a id="tocsreportdevstatusmargin"></a>

```json
true
```

<h2 id="tocS_NwkGeoLoc">NwkGeoLoc</h2>
<!-- backwards compatibility -->
<a id="schemanwkgeoloc"></a>
<a id="schema_NwkGeoLoc"></a>
<a id="tocSnwkgeoloc"></a>
<a id="tocsnwkgeoloc"></a>

```json
true
```

<h2 id="tocS_TargetPer">TargetPer</h2>
<!-- backwards compatibility -->
<a id="schematargetper"></a>
<a id="schema_TargetPer"></a>
<a id="tocStargetper"></a>
<a id="tocstargetper"></a>

```json
0
```

<h2 id="tocS_MinGwDiversity">MinGwDiversity</h2>
<!-- backwards compatibility -->
<a id="schemamingwdiversity"></a>
<a id="schema_MinGwDiversity"></a>
<a id="tocSmingwdiversity"></a>
<a id="tocsmingwdiversity"></a>

```json
1
```

<h2 id="tocS_LoRaWANListDevice">LoRaWANListDevice</h2>
<!-- backwards compatibility -->
<a id="schemalorawanlistdevice"></a>
<a id="schema_LoRaWANListDevice"></a>
<a id="tocSlorawanlistdevice"></a>
<a id="tocslorawanlistdevice"></a>

```json
{
  "DevEui": {}
}
```

LoRaWAN object for list functions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DevEui|object|false|none|none|

<h2 id="tocS_NumberOfDevicesRequested">NumberOfDevicesRequested</h2>
<!-- backwards compatibility -->
<a id="schemanumberofdevicesrequested"></a>
<a id="schema_NumberOfDevicesRequested"></a>
<a id="tocSnumberofdevicesrequested"></a>
<a id="tocsnumberofdevicesrequested"></a>

```json
0
```

Number of devices that are requested to be associated with the multicast group.

<h2 id="tocS_NumberOfDevicesInGroup">NumberOfDevicesInGroup</h2>
<!-- backwards compatibility -->
<a id="schemanumberofdevicesingroup"></a>
<a id="schema_NumberOfDevicesInGroup"></a>
<a id="tocSnumberofdevicesingroup"></a>
<a id="tocsnumberofdevicesingroup"></a>

```json
0
```

Number of devices that are associated to the multicast group.

<h2 id="tocS_ParticipatingGateways">ParticipatingGateways</h2>
<!-- backwards compatibility -->
<a id="schemaparticipatinggateways"></a>
<a id="schema_ParticipatingGateways"></a>
<a id="tocSparticipatinggateways"></a>
<a id="tocsparticipatinggateways"></a>

```json
{
  "DownlinkMode": {},
  "GatewayList": {},
  "TransmissionInterval": {}
}
```

Specify the list of gateways to which you want to send downlink data traffic when the wireless device is running in class B or class C mode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DownlinkMode|object|true|none|none|
|GatewayList|object|true|none|none|
|TransmissionInterval|object|true|none|none|

<h2 id="tocS_LoRaWANStartFuotaTask">LoRaWANStartFuotaTask</h2>
<!-- backwards compatibility -->
<a id="schemalorawanstartfuotatask"></a>
<a id="schema_LoRaWANStartFuotaTask"></a>
<a id="tocSlorawanstartfuotatask"></a>
<a id="tocslorawanstartfuotatask"></a>

```json
{
  "StartTime": "1970-01-01T00:00:00Z"
}
```

The LoRaWAN information used to start a FUOTA task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|[StartTime](#schemastarttime)|false|none|Start time of a FUOTA task.|

<h2 id="tocS_LoRaWANUpdateDevice">LoRaWANUpdateDevice</h2>
<!-- backwards compatibility -->
<a id="schemalorawanupdatedevice"></a>
<a id="schema_LoRaWANUpdateDevice"></a>
<a id="tocSlorawanupdatedevice"></a>
<a id="tocslorawanupdatedevice"></a>

```json
{
  "DeviceProfileId": {},
  "ServiceProfileId": {},
  "AbpV1_1": {
    "FCntStart": {}
  },
  "AbpV1_0_x": {
    "FCntStart": {}
  },
  "FPorts": {
    "Positioning": {
      "ClockSync": 1,
      "Stream": 1,
      "Gnss": 1
    },
    "Applications": {}
  }
}
```

LoRaWAN object for update functions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceProfileId|object|false|none|none|
|ServiceProfileId|object|false|none|none|
|AbpV1_1|object|false|none|none|
|AbpV1_0_x|object|false|none|none|
|FPorts|object|false|none|none|

<h2 id="tocS_UpdateSignature">UpdateSignature</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesignature"></a>
<a id="schema_UpdateSignature"></a>
<a id="tocSupdatesignature"></a>
<a id="tocsupdatesignature"></a>

```json
"string"
```

<h2 id="tocS_LoRaWANUpdateGatewayTaskEntry">LoRaWANUpdateGatewayTaskEntry</h2>
<!-- backwards compatibility -->
<a id="schemalorawanupdategatewaytaskentry"></a>
<a id="schema_LoRaWANUpdateGatewayTaskEntry"></a>
<a id="tocSlorawanupdategatewaytaskentry"></a>
<a id="tocslorawanupdategatewaytaskentry"></a>

```json
{
  "CurrentVersion": {
    "PackageVersion": {},
    "Model": {},
    "Station": {}
  },
  "UpdateVersion": {
    "PackageVersion": {},
    "Model": {},
    "Station": {}
  }
}
```

LoRaWANUpdateGatewayTaskEntry object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrentVersion|object|false|none|none|
|UpdateVersion|object|false|none|none|

<h2 id="tocS_LteObj">LteObj</h2>
<!-- backwards compatibility -->
<a id="schemalteobj"></a>
<a id="schema_LteObj"></a>
<a id="tocSlteobj"></a>
<a id="tocslteobj"></a>

```json
{
  "Mcc": {},
  "Mnc": {},
  "EutranCid": {},
  "Tac": {},
  "LteLocalId": {
    "Pci": {},
    "Earfcn": {}
  },
  "LteTimingAdvance": {},
  "Rsrp": {},
  "Rsrq": {},
  "NrCapable": {},
  "LteNmr": {}
}
```

LTE object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mcc|object|true|none|none|
|Mnc|object|true|none|none|
|EutranCid|object|true|none|none|
|Tac|object|false|none|none|
|LteLocalId|object|false|none|none|
|LteTimingAdvance|object|false|none|none|
|Rsrp|object|false|none|none|
|Rsrq|object|false|none|none|
|NrCapable|object|false|none|none|
|LteNmr|object|false|none|none|

<h2 id="tocS_PCI">PCI</h2>
<!-- backwards compatibility -->
<a id="schemapci"></a>
<a id="schema_PCI"></a>
<a id="tocSpci"></a>
<a id="tocspci"></a>

```json
0
```

<h2 id="tocS_LteLocalId">LteLocalId</h2>
<!-- backwards compatibility -->
<a id="schemaltelocalid"></a>
<a id="schema_LteLocalId"></a>
<a id="tocSltelocalid"></a>
<a id="tocsltelocalid"></a>

```json
{
  "Pci": {},
  "Earfcn": {}
}
```

LTE local identification (local ID) information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Pci|object|true|none|none|
|Earfcn|object|true|none|none|

<h2 id="tocS_LteNmrObj">LteNmrObj</h2>
<!-- backwards compatibility -->
<a id="schemaltenmrobj"></a>
<a id="schema_LteNmrObj"></a>
<a id="tocSltenmrobj"></a>
<a id="tocsltenmrobj"></a>

```json
{
  "Pci": {},
  "Earfcn": {},
  "EutranCid": {},
  "Rsrp": {},
  "Rsrq": {}
}
```

LTE object for network measurement reports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Pci|object|true|none|none|
|Earfcn|object|true|none|none|
|EutranCid|object|true|none|none|
|Rsrp|object|false|none|none|
|Rsrq|object|false|none|none|

<h2 id="tocS_LteNmrList">LteNmrList</h2>
<!-- backwards compatibility -->
<a id="schemaltenmrlist"></a>
<a id="schema_LteNmrList"></a>
<a id="tocSltenmrlist"></a>
<a id="tocsltenmrlist"></a>

```json
[
  {
    "Pci": {},
    "Earfcn": {},
    "EutranCid": {},
    "Rsrp": {},
    "Rsrq": {}
  }
]
```

<h2 id="tocS_RSRP">RSRP</h2>
<!-- backwards compatibility -->
<a id="schemarsrp"></a>
<a id="schema_RSRP"></a>
<a id="tocSrsrp"></a>
<a id="tocsrsrp"></a>

```json
-140
```

<h2 id="tocS_RSRQ">RSRQ</h2>
<!-- backwards compatibility -->
<a id="schemarsrq"></a>
<a id="schema_RSRQ"></a>
<a id="tocSrsrq"></a>
<a id="tocsrsrq"></a>

```json
-19.5
```

<h2 id="tocS_TAC">TAC</h2>
<!-- backwards compatibility -->
<a id="schematac"></a>
<a id="schema_TAC"></a>
<a id="tocStac"></a>
<a id="tocstac"></a>

```json
0
```

<h2 id="tocS_LteTimingAdvance">LteTimingAdvance</h2>
<!-- backwards compatibility -->
<a id="schemaltetimingadvance"></a>
<a id="schema_LteTimingAdvance"></a>
<a id="tocSltetimingadvance"></a>
<a id="tocsltetimingadvance"></a>

```json
0
```

<h2 id="tocS_NRCapable">NRCapable</h2>
<!-- backwards compatibility -->
<a id="schemanrcapable"></a>
<a id="schema_NRCapable"></a>
<a id="tocSnrcapable"></a>
<a id="tocsnrcapable"></a>

```json
true
```

<h2 id="tocS_MacAddress">MacAddress</h2>
<!-- backwards compatibility -->
<a id="schemamacaddress"></a>
<a id="schema_MacAddress"></a>
<a id="tocSmacaddress"></a>
<a id="tocsmacaddress"></a>

```json
"stringstring"
```

<h2 id="tocS_McGroupId">McGroupId</h2>
<!-- backwards compatibility -->
<a id="schemamcgroupid"></a>
<a id="schema_McGroupId"></a>
<a id="tocSmcgroupid"></a>
<a id="tocsmcgroupid"></a>

```json
1
```

Id of the multicast group.

<h2 id="tocS_MessageType">MessageType</h2>
<!-- backwards compatibility -->
<a id="schemamessagetype"></a>
<a id="schema_MessageType"></a>
<a id="tocSmessagetype"></a>
<a id="tocsmessagetype"></a>

```json
"CUSTOM_COMMAND_ID_NOTIFY"
```

Sidewalk device message type. Default value is <code>CUSTOM_COMMAND_ID_NOTIFY</code>.

<h2 id="tocS_MulticastDeviceStatus">MulticastDeviceStatus</h2>
<!-- backwards compatibility -->
<a id="schemamulticastdevicestatus"></a>
<a id="schema_MulticastDeviceStatus"></a>
<a id="tocSmulticastdevicestatus"></a>
<a id="tocsmulticastdevicestatus"></a>

```json
"string"
```

<h2 id="tocS_MulticastGroup">MulticastGroup</h2>
<!-- backwards compatibility -->
<a id="schemamulticastgroup"></a>
<a id="schema_MulticastGroup"></a>
<a id="tocSmulticastgroup"></a>
<a id="tocsmulticastgroup"></a>

```json
{
  "Id": "string",
  "Arn": "string",
  "Name": "string"
}
```

A multicast group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|[MulticastGroupId](#schemamulticastgroupid)|false|none|The ID of the multicast group.|
|Arn|[MulticastGroupArn](#schemamulticastgrouparn)|false|none|The arn of the multicast group.|
|Name|[MulticastGroupName](#schemamulticastgroupname)|false|none|The name of the multicast group.|

<h2 id="tocS_MulticastGroupByFuotaTask">MulticastGroupByFuotaTask</h2>
<!-- backwards compatibility -->
<a id="schemamulticastgroupbyfuotatask"></a>
<a id="schema_MulticastGroupByFuotaTask"></a>
<a id="tocSmulticastgroupbyfuotatask"></a>
<a id="tocsmulticastgroupbyfuotatask"></a>

```json
{
  "Id": "string"
}
```

A multicast group that is associated with a FUOTA task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|[MulticastGroupId](#schemamulticastgroupid)|false|none|The ID of the multicast group.|

<h2 id="tocS_MulticastGroupMessageId">MulticastGroupMessageId</h2>
<!-- backwards compatibility -->
<a id="schemamulticastgroupmessageid"></a>
<a id="schema_MulticastGroupMessageId"></a>
<a id="tocSmulticastgroupmessageid"></a>
<a id="tocsmulticastgroupmessageid"></a>

```json
"string"
```

ID of a multicast group message.

<h2 id="tocS_MulticastWirelessMetadata">MulticastWirelessMetadata</h2>
<!-- backwards compatibility -->
<a id="schemamulticastwirelessmetadata"></a>
<a id="schema_MulticastWirelessMetadata"></a>
<a id="tocSmulticastwirelessmetadata"></a>
<a id="tocsmulticastwirelessmetadata"></a>

```json
{
  "LoRaWAN": {
    "FPort": 1
  }
}
```

Wireless metadata that is to be sent to multicast group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoRaWAN|[LoRaWANMulticastMetadata](#schemalorawanmulticastmetadata)|false|none|The metadata information of the LoRaWAN multicast group.|

<h2 id="tocS_NetworkAnalyzerConfigurations">NetworkAnalyzerConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemanetworkanalyzerconfigurations"></a>
<a id="schema_NetworkAnalyzerConfigurations"></a>
<a id="tocSnetworkanalyzerconfigurations"></a>
<a id="tocsnetworkanalyzerconfigurations"></a>

```json
{
  "Arn": {},
  "Name": "string"
}
```

Network analyzer configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|[NetworkAnalyzerConfigurationName](#schemanetworkanalyzerconfigurationname)|false|none|Name of the network analyzer configuration.|

<h2 id="tocS_NwkKey">NwkKey</h2>
<!-- backwards compatibility -->
<a id="schemanwkkey"></a>
<a id="schema_NwkKey"></a>
<a id="tocSnwkkey"></a>
<a id="tocsnwkkey"></a>

```json
"string"
```

<h2 id="tocS_NwkSEncKey">NwkSEncKey</h2>
<!-- backwards compatibility -->
<a id="schemanwksenckey"></a>
<a id="schema_NwkSEncKey"></a>
<a id="tocSnwksenckey"></a>
<a id="tocsnwksenckey"></a>

```json
"string"
```

<h2 id="tocS_NwkSKey">NwkSKey</h2>
<!-- backwards compatibility -->
<a id="schemanwkskey"></a>
<a id="schema_NwkSKey"></a>
<a id="tocSnwkskey"></a>
<a id="tocsnwkskey"></a>

```json
"string"
```

<h2 id="tocS_PSC">PSC</h2>
<!-- backwards compatibility -->
<a id="schemapsc"></a>
<a id="schema_PSC"></a>
<a id="tocSpsc"></a>
<a id="tocspsc"></a>

```json
0
```

<h2 id="tocS_TransmissionInterval">TransmissionInterval</h2>
<!-- backwards compatibility -->
<a id="schematransmissioninterval"></a>
<a id="schema_TransmissionInterval"></a>
<a id="tocStransmissioninterval"></a>
<a id="tocstransmissioninterval"></a>

```json
1
```

<h2 id="tocS_PathLoss">PathLoss</h2>
<!-- backwards compatibility -->
<a id="schemapathloss"></a>
<a id="schema_PathLoss"></a>
<a id="tocSpathloss"></a>
<a id="tocspathloss"></a>

```json
46
```

<h2 id="tocS_PayloadData">PayloadData</h2>
<!-- backwards compatibility -->
<a id="schemapayloaddata"></a>
<a id="schema_PayloadData"></a>
<a id="tocSpayloaddata"></a>
<a id="tocspayloaddata"></a>

```json
"string"
```

The binary to be sent to the end device, encoded in base64.

<h2 id="tocS_PositionConfigurationFec">PositionConfigurationFec</h2>
<!-- backwards compatibility -->
<a id="schemapositionconfigurationfec"></a>
<a id="schema_PositionConfigurationFec"></a>
<a id="tocSpositionconfigurationfec"></a>
<a id="tocspositionconfigurationfec"></a>

```json
"ROSE"
```

<h2 id="tocS_PositionConfigurationItem">PositionConfigurationItem</h2>
<!-- backwards compatibility -->
<a id="schemapositionconfigurationitem"></a>
<a id="schema_PositionConfigurationItem"></a>
<a id="tocSpositionconfigurationitem"></a>
<a id="tocspositionconfigurationitem"></a>

```json
{
  "ResourceIdentifier": {},
  "ResourceType": {},
  "Solvers": {
    "SemtechGnss": {
      "Provider": {},
      "Type": {},
      "Status": {},
      "Fec": {}
    }
  },
  "Destination": {}
}
```

The wrapper for a position configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceIdentifier|object|false|none|none|
|ResourceType|object|false|none|none|
|Solvers|object|false|none|none|
|Destination|object|false|none|none|

<h2 id="tocS_PositionConfigurationStatus">PositionConfigurationStatus</h2>
<!-- backwards compatibility -->
<a id="schemapositionconfigurationstatus"></a>
<a id="schema_PositionConfigurationStatus"></a>
<a id="tocSpositionconfigurationstatus"></a>
<a id="tocspositionconfigurationstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_PositionSolverConfigurations">PositionSolverConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemapositionsolverconfigurations"></a>
<a id="schema_PositionSolverConfigurations"></a>
<a id="tocSpositionsolverconfigurations"></a>
<a id="tocspositionsolverconfigurations"></a>

```json
{
  "SemtechGnss": {
    "Status": {},
    "Fec": {}
  }
}
```

The wrapper for position solver configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SemtechGnss|object|false|none|none|

<h2 id="tocS_SemtechGnssDetail">SemtechGnssDetail</h2>
<!-- backwards compatibility -->
<a id="schemasemtechgnssdetail"></a>
<a id="schema_SemtechGnssDetail"></a>
<a id="tocSsemtechgnssdetail"></a>
<a id="tocssemtechgnssdetail"></a>

```json
{
  "Provider": {},
  "Type": {},
  "Status": {},
  "Fec": {}
}
```

Details of the Semtech GNSS solver object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Provider|object|false|none|none|
|Type|object|false|none|none|
|Status|object|false|none|none|
|Fec|object|false|none|none|

<h2 id="tocS_PrivateKeysList">PrivateKeysList</h2>
<!-- backwards compatibility -->
<a id="schemaprivatekeyslist"></a>
<a id="schema_PrivateKeysList"></a>
<a id="tocSprivatekeyslist"></a>
<a id="tocsprivatekeyslist"></a>

```json
[
  {
    "SigningAlg": {},
    "Value": {}
  }
]
```

<h2 id="tocS_PutPositionConfigurationRequest">PutPositionConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputpositionconfigurationrequest"></a>
<a id="schema_PutPositionConfigurationRequest"></a>
<a id="tocSputpositionconfigurationrequest"></a>
<a id="tocsputpositionconfigurationrequest"></a>

```json
{
  "Solvers": {
    "SemtechGnss": {
      "Status": {},
      "Fec": {}
    }
  },
  "Destination": {}
}
```

This operation is no longer supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Solvers|object|false|none|none|
|Destination|object|false|none|none|

<h2 id="tocS_PutResourceLogLevelRequest">PutResourceLogLevelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputresourceloglevelrequest"></a>
<a id="schema_PutResourceLogLevelRequest"></a>
<a id="tocSputresourceloglevelrequest"></a>
<a id="tocsputresourceloglevelrequest"></a>

```json
{
  "LogLevel": "INFO"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogLevel|[LogLevel](#schemaloglevel)|true|none|The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.|

#### Enumerated Values

|Property|Value|
|---|---|
|LogLevel|INFO|
|LogLevel|ERROR|
|LogLevel|DISABLED|

<h2 id="tocS_QualificationStatus">QualificationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaqualificationstatus"></a>
<a id="schema_QualificationStatus"></a>
<a id="tocSqualificationstatus"></a>
<a id="tocsqualificationstatus"></a>

```json
true
```

<h2 id="tocS_QueryString">QueryString</h2>
<!-- backwards compatibility -->
<a id="schemaquerystring"></a>
<a id="schema_QueryString"></a>
<a id="tocSquerystring"></a>
<a id="tocsquerystring"></a>

```json
"string"
```

Query string used to search for wireless devices as part of the bulk associate and disassociate process.

<h2 id="tocS_RSCP">RSCP</h2>
<!-- backwards compatibility -->
<a id="schemarscp"></a>
<a id="schema_RSCP"></a>
<a id="tocSrscp"></a>
<a id="tocsrscp"></a>

```json
-120
```

<h2 id="tocS_RSS">RSS</h2>
<!-- backwards compatibility -->
<a id="schemarss"></a>
<a id="schema_RSS"></a>
<a id="tocSrss"></a>
<a id="tocsrss"></a>

```json
-128
```

<h2 id="tocS_ResetAllResourceLogLevelsRequest">ResetAllResourceLogLevelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresetallresourceloglevelsrequest"></a>
<a id="schema_ResetAllResourceLogLevelsRequest"></a>
<a id="tocSresetallresourceloglevelsrequest"></a>
<a id="tocsresetallresourceloglevelsrequest"></a>

```json
{}
```

<h2 id="tocS_ResetResourceLogLevelRequest">ResetResourceLogLevelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresetresourceloglevelrequest"></a>
<a id="schema_ResetResourceLogLevelRequest"></a>
<a id="tocSresetresourceloglevelrequest"></a>
<a id="tocsresetresourceloglevelrequest"></a>

```json
{}
```

<h2 id="tocS_Result">Result</h2>
<!-- backwards compatibility -->
<a id="schemaresult"></a>
<a id="schema_Result"></a>
<a id="tocSresult"></a>
<a id="tocsresult"></a>

```json
"string"
```

<h2 id="tocS_SNwkSIntKey">SNwkSIntKey</h2>
<!-- backwards compatibility -->
<a id="schemasnwksintkey"></a>
<a id="schema_SNwkSIntKey"></a>
<a id="tocSsnwksintkey"></a>
<a id="tocssnwksintkey"></a>

```json
"string"
```

<h2 id="tocS_SendDataToMulticastGroupRequest">SendDataToMulticastGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemasenddatatomulticastgrouprequest"></a>
<a id="schema_SendDataToMulticastGroupRequest"></a>
<a id="tocSsenddatatomulticastgrouprequest"></a>
<a id="tocssenddatatomulticastgrouprequest"></a>

```json
{
  "PayloadData": "string",
  "WirelessMetadata": {
    "LoRaWAN": {
      "FPort": 1
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PayloadData|[PayloadData](#schemapayloaddata)|true|none|The binary to be sent to the end device, encoded in base64.|
|WirelessMetadata|[MulticastWirelessMetadata](#schemamulticastwirelessmetadata)|true|none|Wireless metadata that is to be sent to multicast group.|

<h2 id="tocS_WirelessMetadata">WirelessMetadata</h2>
<!-- backwards compatibility -->
<a id="schemawirelessmetadata"></a>
<a id="schema_WirelessMetadata"></a>
<a id="tocSwirelessmetadata"></a>
<a id="tocswirelessmetadata"></a>

```json
{
  "LoRaWAN": {
    "FPort": 1,
    "ParticipatingGateways": {
      "DownlinkMode": {},
      "GatewayList": {},
      "TransmissionInterval": {}
    }
  },
  "Sidewalk": {
    "Seq": {},
    "MessageType": "CUSTOM_COMMAND_ID_NOTIFY",
    "AckModeRetryDurationSecs": {}
  }
}
```

WirelessMetadata object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoRaWAN|object|false|none|none|
|Sidewalk|object|false|none|none|

<h2 id="tocS_SendDataToWirelessDeviceRequest">SendDataToWirelessDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemasenddatatowirelessdevicerequest"></a>
<a id="schema_SendDataToWirelessDeviceRequest"></a>
<a id="tocSsenddatatowirelessdevicerequest"></a>
<a id="tocssenddatatowirelessdevicerequest"></a>

```json
{
  "TransmitMode": {},
  "PayloadData": "string",
  "WirelessMetadata": {
    "LoRaWAN": {
      "FPort": 1,
      "ParticipatingGateways": {
        "DownlinkMode": {},
        "GatewayList": {},
        "TransmissionInterval": {}
      }
    },
    "Sidewalk": {
      "Seq": {},
      "MessageType": "CUSTOM_COMMAND_ID_NOTIFY",
      "AckModeRetryDurationSecs": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransmitMode|object|true|none|none|
|PayloadData|[PayloadData](#schemapayloaddata)|true|none|The binary to be sent to the end device, encoded in base64.|
|WirelessMetadata|object|false|none|none|

<h2 id="tocS_Seq">Seq</h2>
<!-- backwards compatibility -->
<a id="schemaseq"></a>
<a id="schema_Seq"></a>
<a id="tocSseq"></a>
<a id="tocsseq"></a>

```json
0
```

<h2 id="tocS_ServiceProfile">ServiceProfile</h2>
<!-- backwards compatibility -->
<a id="schemaserviceprofile"></a>
<a id="schema_ServiceProfile"></a>
<a id="tocSserviceprofile"></a>
<a id="tocsserviceprofile"></a>

```json
{
  "Arn": {},
  "Name": {},
  "Id": {}
}
```

Information about a service profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Id|object|false|none|none|

<h2 id="tocS_SidewalkId">SidewalkId</h2>
<!-- backwards compatibility -->
<a id="schemasidewalkid"></a>
<a id="schema_SidewalkId"></a>
<a id="tocSsidewalkid"></a>
<a id="tocssidewalkid"></a>

```json
"string"
```

The sidewalk device identification.

<h2 id="tocS_WirelessDeviceSidewalkStatus">WirelessDeviceSidewalkStatus</h2>
<!-- backwards compatibility -->
<a id="schemawirelessdevicesidewalkstatus"></a>
<a id="schema_WirelessDeviceSidewalkStatus"></a>
<a id="tocSwirelessdevicesidewalkstatus"></a>
<a id="tocswirelessdevicesidewalkstatus"></a>

```json
"PROVISIONED"
```

<h2 id="tocS_SidewalkListDevice">SidewalkListDevice</h2>
<!-- backwards compatibility -->
<a id="schemasidewalklistdevice"></a>
<a id="schema_SidewalkListDevice"></a>
<a id="tocSsidewalklistdevice"></a>
<a id="tocssidewalklistdevice"></a>

```json
{
  "AmazonId": {},
  "SidewalkId": {},
  "SidewalkManufacturingSn": {},
  "DeviceCertificates": {},
  "DeviceProfileId": {},
  "Status": {}
}
```

Sidewalk object used by list functions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmazonId|object|false|none|none|
|SidewalkId|object|false|none|none|
|SidewalkManufacturingSn|object|false|none|none|
|DeviceCertificates|object|false|none|none|
|DeviceProfileId|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_SidewalkSingleStartImportInfo">SidewalkSingleStartImportInfo</h2>
<!-- backwards compatibility -->
<a id="schemasidewalksinglestartimportinfo"></a>
<a id="schema_SidewalkSingleStartImportInfo"></a>
<a id="tocSsidewalksinglestartimportinfo"></a>
<a id="tocssidewalksinglestartimportinfo"></a>

```json
{
  "SidewalkManufacturingSn": {}
}
```

Information about an import task created for an individual Sidewalk device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SidewalkManufacturingSn|object|false|none|none|

<h2 id="tocS_SidewalkStartImportInfo">SidewalkStartImportInfo</h2>
<!-- backwards compatibility -->
<a id="schemasidewalkstartimportinfo"></a>
<a id="schema_SidewalkStartImportInfo"></a>
<a id="tocSsidewalkstartimportinfo"></a>
<a id="tocssidewalkstartimportinfo"></a>

```json
{
  "DeviceCreationFile": {},
  "Role": {}
}
```

Information about an import task created for bulk provisioning.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceCreationFile|object|false|none|none|
|Role|object|false|none|none|

<h2 id="tocS_SidewalkUpdateAccount">SidewalkUpdateAccount</h2>
<!-- backwards compatibility -->
<a id="schemasidewalkupdateaccount"></a>
<a id="schema_SidewalkUpdateAccount"></a>
<a id="tocSsidewalkupdateaccount"></a>
<a id="tocssidewalkupdateaccount"></a>

```json
{
  "AppServerPrivateKey": {}
}
```

Sidewalk update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppServerPrivateKey|object|false|none|none|

<h2 id="tocS_SidewalkUpdateImportInfo">SidewalkUpdateImportInfo</h2>
<!-- backwards compatibility -->
<a id="schemasidewalkupdateimportinfo"></a>
<a id="schema_SidewalkUpdateImportInfo"></a>
<a id="tocSsidewalkupdateimportinfo"></a>
<a id="tocssidewalkupdateimportinfo"></a>

```json
{
  "DeviceCreationFile": {}
}
```

Sidewalk object information for updating an import task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceCreationFile|object|false|none|none|

<h2 id="tocS_StartBulkAssociateWirelessDeviceWithMulticastGroupRequest">StartBulkAssociateWirelessDeviceWithMulticastGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartbulkassociatewirelessdevicewithmulticastgrouprequest"></a>
<a id="schema_StartBulkAssociateWirelessDeviceWithMulticastGroupRequest"></a>
<a id="tocSstartbulkassociatewirelessdevicewithmulticastgrouprequest"></a>
<a id="tocsstartbulkassociatewirelessdevicewithmulticastgrouprequest"></a>

```json
{
  "QueryString": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryString|[QueryString](#schemaquerystring)|false|none|Query string used to search for wireless devices as part of the bulk associate and disassociate process.|
|Tags|[TagList](#schemataglist)|false|none|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|

<h2 id="tocS_StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest">StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartbulkdisassociatewirelessdevicefrommulticastgrouprequest"></a>
<a id="schema_StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest"></a>
<a id="tocSstartbulkdisassociatewirelessdevicefrommulticastgrouprequest"></a>
<a id="tocsstartbulkdisassociatewirelessdevicefrommulticastgrouprequest"></a>

```json
{
  "QueryString": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryString|[QueryString](#schemaquerystring)|false|none|Query string used to search for wireless devices as part of the bulk associate and disassociate process.|
|Tags|[TagList](#schemataglist)|false|none|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|

<h2 id="tocS_StartFuotaTaskRequest">StartFuotaTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartfuotataskrequest"></a>
<a id="schema_StartFuotaTaskRequest"></a>
<a id="tocSstartfuotataskrequest"></a>
<a id="tocsstartfuotataskrequest"></a>

```json
{
  "LoRaWAN": {
    "StartTime": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoRaWAN|[LoRaWANStartFuotaTask](#schemalorawanstartfuotatask)|false|none|The LoRaWAN information used to start a FUOTA task.|

<h2 id="tocS_StartMulticastGroupSessionRequest">StartMulticastGroupSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartmulticastgroupsessionrequest"></a>
<a id="schema_StartMulticastGroupSessionRequest"></a>
<a id="tocSstartmulticastgroupsessionrequest"></a>
<a id="tocsstartmulticastgroupsessionrequest"></a>

```json
{
  "LoRaWAN": {
    "DlDr": 0,
    "DlFreq": 100000000,
    "SessionStartTime": "1970-01-01T00:00:00Z",
    "SessionTimeout": 60,
    "PingSlotPeriod": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoRaWAN|[LoRaWANMulticastSession](#schemalorawanmulticastsession)|true|none|The LoRaWAN information used with the multicast session.|

<h2 id="tocS_StartSingleWirelessDeviceImportTaskRequest">StartSingleWirelessDeviceImportTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartsinglewirelessdeviceimporttaskrequest"></a>
<a id="schema_StartSingleWirelessDeviceImportTaskRequest"></a>
<a id="tocSstartsinglewirelessdeviceimporttaskrequest"></a>
<a id="tocsstartsinglewirelessdeviceimporttaskrequest"></a>

```json
{
  "DestinationName": {},
  "ClientRequestToken": "string",
  "DeviceName": {},
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "Sidewalk": {
    "SidewalkManufacturingSn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationName|object|true|none|none|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.|
|DeviceName|object|false|none|none|
|Tags|[TagList](#schemataglist)|false|none|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|
|Sidewalk|object|true|none|none|

<h2 id="tocS_StartWirelessDeviceImportTaskRequest">StartWirelessDeviceImportTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartwirelessdeviceimporttaskrequest"></a>
<a id="schema_StartWirelessDeviceImportTaskRequest"></a>
<a id="tocSstartwirelessdeviceimporttaskrequest"></a>
<a id="tocsstartwirelessdeviceimporttaskrequest"></a>

```json
{
  "DestinationName": {},
  "ClientRequestToken": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "Sidewalk": {
    "DeviceCreationFile": {},
    "Role": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationName|object|true|none|none|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.|
|Tags|[TagList](#schemataglist)|false|none|The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.|
|Sidewalk|object|true|none|none|

<h2 id="tocS_SubBand">SubBand</h2>
<!-- backwards compatibility -->
<a id="schemasubband"></a>
<a id="schema_SubBand"></a>
<a id="tocSsubband"></a>
<a id="tocssubband"></a>

```json
1
```

A subset of supported frequency channels in a certain RFRegion.

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
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_TdscdmaObj">TdscdmaObj</h2>
<!-- backwards compatibility -->
<a id="schematdscdmaobj"></a>
<a id="schema_TdscdmaObj"></a>
<a id="tocStdscdmaobj"></a>
<a id="tocstdscdmaobj"></a>

```json
{
  "Mcc": {},
  "Mnc": {},
  "Lac": {},
  "UtranCid": {},
  "TdscdmaLocalId": {
    "Uarfcn": {},
    "CellParams": {}
  },
  "TdscdmaTimingAdvance": {},
  "Rscp": {},
  "PathLoss": {},
  "TdscdmaNmr": {}
}
```

TD-SCDMA object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mcc|object|true|none|none|
|Mnc|object|true|none|none|
|Lac|object|false|none|none|
|UtranCid|object|true|none|none|
|TdscdmaLocalId|object|false|none|none|
|TdscdmaTimingAdvance|object|false|none|none|
|Rscp|object|false|none|none|
|PathLoss|object|false|none|none|
|TdscdmaNmr|object|false|none|none|

<h2 id="tocS_UARFCN">UARFCN</h2>
<!-- backwards compatibility -->
<a id="schemauarfcn"></a>
<a id="schema_UARFCN"></a>
<a id="tocSuarfcn"></a>
<a id="tocsuarfcn"></a>

```json
0
```

<h2 id="tocS_TdscdmaLocalId">TdscdmaLocalId</h2>
<!-- backwards compatibility -->
<a id="schematdscdmalocalid"></a>
<a id="schema_TdscdmaLocalId"></a>
<a id="tocStdscdmalocalid"></a>
<a id="tocstdscdmalocalid"></a>

```json
{
  "Uarfcn": {},
  "CellParams": {}
}
```

TD-SCDMA local identification (local Id) information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Uarfcn|object|true|none|none|
|CellParams|object|true|none|none|

<h2 id="tocS_TdscdmaNmrObj">TdscdmaNmrObj</h2>
<!-- backwards compatibility -->
<a id="schematdscdmanmrobj"></a>
<a id="schema_TdscdmaNmrObj"></a>
<a id="tocStdscdmanmrobj"></a>
<a id="tocstdscdmanmrobj"></a>

```json
{
  "Uarfcn": {},
  "CellParams": {},
  "UtranCid": {},
  "Rscp": {},
  "PathLoss": {}
}
```

TD-SCDMA object for network measurement reports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Uarfcn|object|true|none|none|
|CellParams|object|true|none|none|
|UtranCid|object|false|none|none|
|Rscp|object|false|none|none|
|PathLoss|object|false|none|none|

<h2 id="tocS_TdscdmaNmrList">TdscdmaNmrList</h2>
<!-- backwards compatibility -->
<a id="schematdscdmanmrlist"></a>
<a id="schema_TdscdmaNmrList"></a>
<a id="tocStdscdmanmrlist"></a>
<a id="tocstdscdmanmrlist"></a>

```json
[
  {
    "Uarfcn": {},
    "CellParams": {},
    "UtranCid": {},
    "Rscp": {},
    "PathLoss": {}
  }
]
```

<h2 id="tocS_UtranCid">UtranCid</h2>
<!-- backwards compatibility -->
<a id="schemautrancid"></a>
<a id="schema_UtranCid"></a>
<a id="tocSutrancid"></a>
<a id="tocsutrancid"></a>

```json
0
```

<h2 id="tocS_TdscdmaTimingAdvance">TdscdmaTimingAdvance</h2>
<!-- backwards compatibility -->
<a id="schematdscdmatimingadvance"></a>
<a id="schema_TdscdmaTimingAdvance"></a>
<a id="tocStdscdmatimingadvance"></a>
<a id="tocstdscdmatimingadvance"></a>

```json
0
```

<h2 id="tocS_TestWirelessDeviceRequest">TestWirelessDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schematestwirelessdevicerequest"></a>
<a id="schema_TestWirelessDeviceRequest"></a>
<a id="tocStestwirelessdevicerequest"></a>
<a id="tocstestwirelessdevicerequest"></a>

```json
{}
```

<h2 id="tocS_UARFCNDL">UARFCNDL</h2>
<!-- backwards compatibility -->
<a id="schemauarfcndl"></a>
<a id="schema_UARFCNDL"></a>
<a id="tocSuarfcndl"></a>
<a id="tocsuarfcndl"></a>

```json
0
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

<h2 id="tocS_UpdateDestinationRequest">UpdateDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedestinationrequest"></a>
<a id="schema_UpdateDestinationRequest"></a>
<a id="tocSupdatedestinationrequest"></a>
<a id="tocsupdatedestinationrequest"></a>

```json
{
  "ExpressionType": {},
  "Expression": {},
  "Description": {},
  "RoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExpressionType|object|false|none|none|
|Expression|object|false|none|none|
|Description|object|false|none|none|
|RoleArn|object|false|none|none|

<h2 id="tocS_UpdateEventConfigurationByResourceTypesRequest">UpdateEventConfigurationByResourceTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateeventconfigurationbyresourcetypesrequest"></a>
<a id="schema_UpdateEventConfigurationByResourceTypesRequest"></a>
<a id="tocSupdateeventconfigurationbyresourcetypesrequest"></a>
<a id="tocsupdateeventconfigurationbyresourcetypesrequest"></a>

```json
{
  "DeviceRegistrationState": {
    "Sidewalk": {
      "WirelessDeviceEventTopic": {}
    }
  },
  "Proximity": {
    "Sidewalk": {
      "WirelessDeviceEventTopic": {}
    }
  },
  "Join": {
    "LoRaWAN": {
      "WirelessDeviceEventTopic": {}
    }
  },
  "ConnectionStatus": {
    "LoRaWAN": {
      "WirelessGatewayEventTopic": {}
    }
  },
  "MessageDeliveryStatus": {
    "Sidewalk": {
      "WirelessDeviceEventTopic": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceRegistrationState|object|false|none|none|
|Proximity|object|false|none|none|
|Join|object|false|none|none|
|ConnectionStatus|object|false|none|none|
|MessageDeliveryStatus|object|false|none|none|

<h2 id="tocS_UpdateFuotaTaskRequest">UpdateFuotaTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefuotataskrequest"></a>
<a id="schema_UpdateFuotaTaskRequest"></a>
<a id="tocSupdatefuotataskrequest"></a>
<a id="tocsupdatefuotataskrequest"></a>

```json
{
  "Name": "string",
  "Description": "string",
  "LoRaWAN": {
    "RfRegion": "EU868"
  },
  "FirmwareUpdateImage": "string",
  "FirmwareUpdateRole": "string",
  "RedundancyPercent": 0,
  "FragmentSizeBytes": 1,
  "FragmentIntervalMS": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|[FuotaTaskName](#schemafuotataskname)|false|none|The name of a FUOTA task.|
|Description|[Description](#schemadescription)|false|none|The description of the new resource.|
|LoRaWAN|[LoRaWANFuotaTask](#schemalorawanfuotatask)|false|none|The LoRaWAN information used with a FUOTA task.|
|FirmwareUpdateImage|[FirmwareUpdateImage](#schemafirmwareupdateimage)|false|none|The S3 URI points to a firmware update image that is to be used with a FUOTA task.|
|FirmwareUpdateRole|[FirmwareUpdateRole](#schemafirmwareupdaterole)|false|none|The firmware update role that is to be used with a FUOTA task.|
|RedundancyPercent|[RedundancyPercent](#schemaredundancypercent)|false|none|The percentage of added redundant fragments. For example, if firmware file is 100 bytes and fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.|
|FragmentSizeBytes|[FragmentSizeBytes](#schemafragmentsizebytes)|false|none|The size of each fragment in bytes. Currently only supported in fuota tasks with multicast groups.|
|FragmentIntervalMS|[FragmentIntervalMS](#schemafragmentintervalms)|false|none|The interval of sending fragments in milliseconds. Currently the interval will be rounded to the nearest second. Note that this interval only controls the timing when the cloud sends the fragments down. The actual delay of receiving fragments at device side depends on the device's class and the communication delay with the cloud.|

<h2 id="tocS_UpdateLogLevelsByResourceTypesRequest">UpdateLogLevelsByResourceTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloglevelsbyresourcetypesrequest"></a>
<a id="schema_UpdateLogLevelsByResourceTypesRequest"></a>
<a id="tocSupdateloglevelsbyresourcetypesrequest"></a>
<a id="tocsupdateloglevelsbyresourcetypesrequest"></a>

```json
{
  "DefaultLogLevel": "INFO",
  "WirelessDeviceLogOptions": [
    {
      "Type": {},
      "LogLevel": "INFO",
      "Events": [
        {
          "Event": "Join",
          "LogLevel": "INFO"
        }
      ]
    }
  ],
  "WirelessGatewayLogOptions": [
    {
      "Type": "LoRaWAN",
      "LogLevel": "INFO",
      "Events": [
        {
          "Event": "CUPS_Request",
          "LogLevel": "INFO"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultLogLevel|[LogLevel](#schemaloglevel)|false|none|The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.|
|WirelessDeviceLogOptions|[WirelessDeviceLogOptionList](#schemawirelessdevicelogoptionlist)|false|none|The list of wireless device log options.|
|WirelessGatewayLogOptions|[WirelessGatewayLogOptionList](#schemawirelessgatewaylogoptionlist)|false|none|The list of wireless gateway log options.|

#### Enumerated Values

|Property|Value|
|---|---|
|DefaultLogLevel|INFO|
|DefaultLogLevel|ERROR|
|DefaultLogLevel|DISABLED|

<h2 id="tocS_UpdateMulticastGroupRequest">UpdateMulticastGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemulticastgrouprequest"></a>
<a id="schema_UpdateMulticastGroupRequest"></a>
<a id="tocSupdatemulticastgrouprequest"></a>
<a id="tocsupdatemulticastgrouprequest"></a>

```json
{
  "Name": "string",
  "Description": "string",
  "LoRaWAN": {
    "RfRegion": "EU868",
    "DlClass": "ClassB"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|[MulticastGroupName](#schemamulticastgroupname)|false|none|The name of the multicast group.|
|Description|[Description](#schemadescription)|false|none|The description of the new resource.|
|LoRaWAN|[LoRaWANMulticast](#schemalorawanmulticast)|false|none|The LoRaWAN information that is to be used with the multicast group.|

<h2 id="tocS_UpdateNetworkAnalyzerConfigurationRequest">UpdateNetworkAnalyzerConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenetworkanalyzerconfigurationrequest"></a>
<a id="schema_UpdateNetworkAnalyzerConfigurationRequest"></a>
<a id="tocSupdatenetworkanalyzerconfigurationrequest"></a>
<a id="tocsupdatenetworkanalyzerconfigurationrequest"></a>

```json
{
  "TraceContent": {
    "WirelessDeviceFrameInfo": "ENABLED",
    "LogLevel": "INFO"
  },
  "WirelessDevicesToAdd": {},
  "WirelessDevicesToRemove": {},
  "WirelessGatewaysToAdd": {},
  "WirelessGatewaysToRemove": {},
  "Description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TraceContent|[TraceContent](#schematracecontent)|false|none|Trace content for your wireless gateway and wireless device resources.|
|WirelessDevicesToAdd|object|false|none|none|
|WirelessDevicesToRemove|object|false|none|none|
|WirelessGatewaysToAdd|object|false|none|none|
|WirelessGatewaysToRemove|object|false|none|none|
|Description|[Description](#schemadescription)|false|none|The description of the new resource.|

<h2 id="tocS_UpdatePartnerAccountRequest">UpdatePartnerAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepartneraccountrequest"></a>
<a id="schema_UpdatePartnerAccountRequest"></a>
<a id="tocSupdatepartneraccountrequest"></a>
<a id="tocsupdatepartneraccountrequest"></a>

```json
{
  "Sidewalk": {
    "AppServerPrivateKey": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sidewalk|object|true|none|none|

<h2 id="tocS_UpdatePositionRequest">UpdatePositionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepositionrequest"></a>
<a id="schema_UpdatePositionRequest"></a>
<a id="tocSupdatepositionrequest"></a>
<a id="tocsupdatepositionrequest"></a>

```json
{
  "Position": {}
}
```

This operation is no longer supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Position|object|true|none|none|

<h2 id="tocS_UpdateResourceEventConfigurationRequest">UpdateResourceEventConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourceeventconfigurationrequest"></a>
<a id="schema_UpdateResourceEventConfigurationRequest"></a>
<a id="tocSupdateresourceeventconfigurationrequest"></a>
<a id="tocsupdateresourceeventconfigurationrequest"></a>

```json
{
  "DeviceRegistrationState": {
    "Sidewalk": {
      "AmazonIdEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  },
  "Proximity": {
    "Sidewalk": {
      "AmazonIdEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  },
  "Join": {
    "LoRaWAN": {
      "DevEuiEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  },
  "ConnectionStatus": {
    "LoRaWAN": {
      "GatewayEuiEventTopic": {}
    },
    "WirelessGatewayIdEventTopic": {}
  },
  "MessageDeliveryStatus": {
    "Sidewalk": {
      "AmazonIdEventTopic": {}
    },
    "WirelessDeviceIdEventTopic": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceRegistrationState|object|false|none|none|
|Proximity|object|false|none|none|
|Join|object|false|none|none|
|ConnectionStatus|object|false|none|none|
|MessageDeliveryStatus|object|false|none|none|

<h2 id="tocS_UpdateResourcePositionRequest">UpdateResourcePositionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourcepositionrequest"></a>
<a id="schema_UpdateResourcePositionRequest"></a>
<a id="tocSupdateresourcepositionrequest"></a>
<a id="tocsupdateresourcepositionrequest"></a>

```json
{
  "GeoJsonPayload": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GeoJsonPayload|object|false|none|none|

<h2 id="tocS_UpdateWirelessDeviceImportTaskRequest">UpdateWirelessDeviceImportTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewirelessdeviceimporttaskrequest"></a>
<a id="schema_UpdateWirelessDeviceImportTaskRequest"></a>
<a id="tocSupdatewirelessdeviceimporttaskrequest"></a>
<a id="tocsupdatewirelessdeviceimporttaskrequest"></a>

```json
{
  "Sidewalk": {
    "DeviceCreationFile": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sidewalk|object|true|none|none|

<h2 id="tocS_UpdateWirelessDeviceRequest">UpdateWirelessDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewirelessdevicerequest"></a>
<a id="schema_UpdateWirelessDeviceRequest"></a>
<a id="tocSupdatewirelessdevicerequest"></a>
<a id="tocsupdatewirelessdevicerequest"></a>

```json
{
  "DestinationName": {},
  "Name": {},
  "Description": {},
  "LoRaWAN": {
    "DeviceProfileId": {},
    "ServiceProfileId": {},
    "AbpV1_1": {
      "FCntStart": {}
    },
    "AbpV1_0_x": {
      "FCntStart": {}
    },
    "FPorts": {
      "Positioning": {
        "ClockSync": 1,
        "Stream": 1,
        "Gnss": 1
      },
      "Applications": {}
    }
  },
  "Positioning": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationName|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|LoRaWAN|object|false|none|none|
|Positioning|object|false|none|none|

<h2 id="tocS_UpdateWirelessGatewayRequest">UpdateWirelessGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewirelessgatewayrequest"></a>
<a id="schema_UpdateWirelessGatewayRequest"></a>
<a id="tocSupdatewirelessgatewayrequest"></a>
<a id="tocsupdatewirelessgatewayrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "JoinEuiFilters": [
    [
      "string",
      "string"
    ]
  ],
  "NetIdFilters": [
    "string"
  ],
  "MaxEirp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Description|object|false|none|none|
|JoinEuiFilters|[JoinEuiFilters](#schemajoineuifilters)|false|none|A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.|
|NetIdFilters|[NetIdFilters](#schemanetidfilters)|false|none|A list of NetId values that are used by LoRa gateways to filter the uplink frames.|
|MaxEirp|object|false|none|none|

<h2 id="tocS_UpdateWirelessGatewayTaskEntry">UpdateWirelessGatewayTaskEntry</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewirelessgatewaytaskentry"></a>
<a id="schema_UpdateWirelessGatewayTaskEntry"></a>
<a id="tocSupdatewirelessgatewaytaskentry"></a>
<a id="tocsupdatewirelessgatewaytaskentry"></a>

```json
{
  "Id": {},
  "LoRaWAN": {
    "CurrentVersion": {
      "PackageVersion": {},
      "Model": {},
      "Station": {}
    },
    "UpdateVersion": {
      "PackageVersion": {},
      "Model": {},
      "Station": {}
    }
  },
  "Arn": {}
}
```

UpdateWirelessGatewayTaskEntry object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|LoRaWAN|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_WcdmaObj">WcdmaObj</h2>
<!-- backwards compatibility -->
<a id="schemawcdmaobj"></a>
<a id="schema_WcdmaObj"></a>
<a id="tocSwcdmaobj"></a>
<a id="tocswcdmaobj"></a>

```json
{
  "Mcc": {},
  "Mnc": {},
  "Lac": {},
  "UtranCid": {},
  "WcdmaLocalId": {
    "Uarfcndl": {},
    "Psc": {}
  },
  "Rscp": {},
  "PathLoss": {},
  "WcdmaNmr": {}
}
```

WCDMA.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mcc|object|true|none|none|
|Mnc|object|true|none|none|
|Lac|object|false|none|none|
|UtranCid|object|true|none|none|
|WcdmaLocalId|object|false|none|none|
|Rscp|object|false|none|none|
|PathLoss|object|false|none|none|
|WcdmaNmr|object|false|none|none|

<h2 id="tocS_WcdmaLocalId">WcdmaLocalId</h2>
<!-- backwards compatibility -->
<a id="schemawcdmalocalid"></a>
<a id="schema_WcdmaLocalId"></a>
<a id="tocSwcdmalocalid"></a>
<a id="tocswcdmalocalid"></a>

```json
{
  "Uarfcndl": {},
  "Psc": {}
}
```

WCDMA local identification (local ID) information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Uarfcndl|object|true|none|none|
|Psc|object|true|none|none|

<h2 id="tocS_WcdmaNmrObj">WcdmaNmrObj</h2>
<!-- backwards compatibility -->
<a id="schemawcdmanmrobj"></a>
<a id="schema_WcdmaNmrObj"></a>
<a id="tocSwcdmanmrobj"></a>
<a id="tocswcdmanmrobj"></a>

```json
{
  "Uarfcndl": {},
  "Psc": {},
  "UtranCid": {},
  "Rscp": {},
  "PathLoss": {}
}
```

Network Measurement Reports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Uarfcndl|object|true|none|none|
|Psc|object|true|none|none|
|UtranCid|object|true|none|none|
|Rscp|object|false|none|none|
|PathLoss|object|false|none|none|

<h2 id="tocS_WcdmaNmrList">WcdmaNmrList</h2>
<!-- backwards compatibility -->
<a id="schemawcdmanmrlist"></a>
<a id="schema_WcdmaNmrList"></a>
<a id="tocSwcdmanmrlist"></a>
<a id="tocswcdmanmrlist"></a>

```json
[
  {
    "Uarfcndl": {},
    "Psc": {},
    "UtranCid": {},
    "Rscp": {},
    "PathLoss": {}
  }
]
```

<h2 id="tocS_WirelessDeviceEvent">WirelessDeviceEvent</h2>
<!-- backwards compatibility -->
<a id="schemawirelessdeviceevent"></a>
<a id="schema_WirelessDeviceEvent"></a>
<a id="tocSwirelessdeviceevent"></a>
<a id="tocswirelessdeviceevent"></a>

```json
"Join"
```

The event for a log message, if the log message is tied to a wireless device.

<h2 id="tocS_WirelessDeviceEventLogOption">WirelessDeviceEventLogOption</h2>
<!-- backwards compatibility -->
<a id="schemawirelessdeviceeventlogoption"></a>
<a id="schema_WirelessDeviceEventLogOption"></a>
<a id="tocSwirelessdeviceeventlogoption"></a>
<a id="tocswirelessdeviceeventlogoption"></a>

```json
{
  "Event": "Join",
  "LogLevel": "INFO"
}
```

<p>The log options for a wireless device event and can be used to set log levels for a specific wireless device event.</p> <p>For a LoRaWAN device, possible events for a log messsage are: <code>Join</code>, <code>Rejoin</code>, <code>Downlink_Data</code>, and <code>Uplink_Data</code>. For a Sidewalk device, possible events for a log message are <code>Registration</code>, <code>Downlink_Data</code>, and <code>Uplink_Data</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Event|[WirelessDeviceEvent](#schemawirelessdeviceevent)|true|none|The event for a log message, if the log message is tied to a wireless device.|
|LogLevel|[LogLevel](#schemaloglevel)|true|none|The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.|

#### Enumerated Values

|Property|Value|
|---|---|
|Event|Join|
|Event|Rejoin|
|Event|Uplink_Data|
|Event|Downlink_Data|
|Event|Registration|
|LogLevel|INFO|
|LogLevel|ERROR|
|LogLevel|DISABLED|

<h2 id="tocS_WirelessDeviceEventLogOptionList">WirelessDeviceEventLogOptionList</h2>
<!-- backwards compatibility -->
<a id="schemawirelessdeviceeventlogoptionlist"></a>
<a id="schema_WirelessDeviceEventLogOptionList"></a>
<a id="tocSwirelessdeviceeventlogoptionlist"></a>
<a id="tocswirelessdeviceeventlogoptionlist"></a>

```json
[
  {
    "Event": "Join",
    "LogLevel": "INFO"
  }
]
```

The list of wireless device event log options.

<h2 id="tocS_WirelessDeviceImportTask">WirelessDeviceImportTask</h2>
<!-- backwards compatibility -->
<a id="schemawirelessdeviceimporttask"></a>
<a id="schema_WirelessDeviceImportTask"></a>
<a id="tocSwirelessdeviceimporttask"></a>
<a id="tocswirelessdeviceimporttask"></a>

```json
{
  "Id": {},
  "Arn": {},
  "DestinationName": {},
  "Sidewalk": {
    "DeviceCreationFileList": {},
    "Role": {}
  },
  "CreationTime": {},
  "Status": {},
  "StatusReason": {},
  "InitializedImportedDeviceCount": {},
  "PendingImportedDeviceCount": {},
  "OnboardedImportedDeviceCount": {},
  "FailedImportedDeviceCount": {}
}
```

Information about an import task for wireless devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|DestinationName|object|false|none|none|
|Sidewalk|object|false|none|none|
|CreationTime|object|false|none|none|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|InitializedImportedDeviceCount|object|false|none|none|
|PendingImportedDeviceCount|object|false|none|none|
|OnboardedImportedDeviceCount|object|false|none|none|
|FailedImportedDeviceCount|object|false|none|none|

<h2 id="tocS_WirelessDeviceStatistics">WirelessDeviceStatistics</h2>
<!-- backwards compatibility -->
<a id="schemawirelessdevicestatistics"></a>
<a id="schema_WirelessDeviceStatistics"></a>
<a id="tocSwirelessdevicestatistics"></a>
<a id="tocswirelessdevicestatistics"></a>

```json
{
  "Arn": {},
  "Id": {},
  "Type": {},
  "Name": {},
  "DestinationName": {},
  "LastUplinkReceivedAt": {},
  "LoRaWAN": {
    "DevEui": {}
  },
  "Sidewalk": {
    "AmazonId": {},
    "SidewalkId": {},
    "SidewalkManufacturingSn": {},
    "DeviceCertificates": {},
    "DeviceProfileId": {},
    "Status": {}
  },
  "FuotaDeviceStatus": "Initial",
  "MulticastDeviceStatus": {},
  "McGroupId": 1
}
```

Information about a wireless device's operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Id|object|false|none|none|
|Type|object|false|none|none|
|Name|object|false|none|none|
|DestinationName|object|false|none|none|
|LastUplinkReceivedAt|object|false|none|none|
|LoRaWAN|object|false|none|none|
|Sidewalk|object|false|none|none|
|FuotaDeviceStatus|[FuotaDeviceStatus](#schemafuotadevicestatus)|false|none|The status of a wireless device in a FUOTA task.|
|MulticastDeviceStatus|object|false|none|none|
|McGroupId|[McGroupId](#schemamcgroupid)|false|none|Id of the multicast group.|

#### Enumerated Values

|Property|Value|
|---|---|
|FuotaDeviceStatus|Initial|
|FuotaDeviceStatus|Package_Not_Supported|
|FuotaDeviceStatus|FragAlgo_unsupported|
|FuotaDeviceStatus|Not_enough_memory|
|FuotaDeviceStatus|FragIndex_unsupported|
|FuotaDeviceStatus|Wrong_descriptor|
|FuotaDeviceStatus|SessionCnt_replay|
|FuotaDeviceStatus|MissingFrag|
|FuotaDeviceStatus|MemoryError|
|FuotaDeviceStatus|MICError|
|FuotaDeviceStatus|Successful|

<h2 id="tocS_WirelessGatewayEvent">WirelessGatewayEvent</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewayevent"></a>
<a id="schema_WirelessGatewayEvent"></a>
<a id="tocSwirelessgatewayevent"></a>
<a id="tocswirelessgatewayevent"></a>

```json
"CUPS_Request"
```

The event for a log message, if the log message is tied to a wireless gateway.

<h2 id="tocS_WirelessGatewayEventLogOption">WirelessGatewayEventLogOption</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewayeventlogoption"></a>
<a id="schema_WirelessGatewayEventLogOption"></a>
<a id="tocSwirelessgatewayeventlogoption"></a>
<a id="tocswirelessgatewayeventlogoption"></a>

```json
{
  "Event": "CUPS_Request",
  "LogLevel": "INFO"
}
```

<p>The log options for a wireless gateway event and can be used to set log levels for a specific wireless gateway event.</p> <p>For a LoRaWAN gateway, possible events for a log message are <code>CUPS_Request</code> and <code>Certificate</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Event|[WirelessGatewayEvent](#schemawirelessgatewayevent)|true|none|The event for a log message, if the log message is tied to a wireless gateway.|
|LogLevel|[LogLevel](#schemaloglevel)|true|none|The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.|

#### Enumerated Values

|Property|Value|
|---|---|
|Event|CUPS_Request|
|Event|Certificate|
|LogLevel|INFO|
|LogLevel|ERROR|
|LogLevel|DISABLED|

<h2 id="tocS_WirelessGatewayEventLogOptionList">WirelessGatewayEventLogOptionList</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewayeventlogoptionlist"></a>
<a id="schema_WirelessGatewayEventLogOptionList"></a>
<a id="tocSwirelessgatewayeventlogoptionlist"></a>
<a id="tocswirelessgatewayeventlogoptionlist"></a>

```json
[
  {
    "Event": "CUPS_Request",
    "LogLevel": "INFO"
  }
]
```

The list of wireless gateway event log options.

<h2 id="tocS_WirelessGatewayType">WirelessGatewayType</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewaytype"></a>
<a id="schema_WirelessGatewayType"></a>
<a id="tocSwirelessgatewaytype"></a>
<a id="tocswirelessgatewaytype"></a>

```json
"LoRaWAN"
```

The wireless gateway type.

<h2 id="tocS_WirelessGatewayStatistics">WirelessGatewayStatistics</h2>
<!-- backwards compatibility -->
<a id="schemawirelessgatewaystatistics"></a>
<a id="schema_WirelessGatewayStatistics"></a>
<a id="tocSwirelessgatewaystatistics"></a>
<a id="tocswirelessgatewaystatistics"></a>

```json
{
  "Arn": {},
  "Id": {},
  "Name": {},
  "Description": {},
  "LoRaWAN": {
    "GatewayEui": {},
    "RfRegion": {},
    "JoinEuiFilters": [
      [
        "string",
        "string"
      ]
    ],
    "NetIdFilters": [
      "string"
    ],
    "SubBands": [
      1
    ],
    "Beaconing": {
      "DataRate": {},
      "Frequencies": {}
    },
    "MaxEirp": {}
  },
  "LastUplinkReceivedAt": {}
}
```

Information about a wireless gateway's operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|LoRaWAN|object|false|none|none|
|LastUplinkReceivedAt|object|false|none|none|
