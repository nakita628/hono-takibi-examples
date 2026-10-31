<h1 id="aws-ec2-instance-connect">AWS EC2 Instance Connect v2018-04-02</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon EC2 Instance Connect enables system administrators to publish one-time use SSH public keys to EC2, providing users a simple and secure way to connect to their instances.

Base URLs:

* <a href="http://ec2-instance-connect.us-east-1.amazonaws.com">http://ec2-instance-connect.us-east-1.amazonaws.com</a> - The EC2 Instance Connect multi-region endpoint

* <a href="https://ec2-instance-connect.us-east-1.amazonaws.com">https://ec2-instance-connect.us-east-1.amazonaws.com</a> - The EC2 Instance Connect multi-region endpoint

* <a href="http://ec2-instance-connect.cn-north-1.amazonaws.com.cn">http://ec2-instance-connect.cn-north-1.amazonaws.com.cn</a> - The EC2 Instance Connect endpoint for China (Beijing) and China (Ningxia)

* <a href="https://ec2-instance-connect.cn-north-1.amazonaws.com.cn">https://ec2-instance-connect.cn-north-1.amazonaws.com.cn</a> - The EC2 Instance Connect endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/ec2-instance-connect/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-ec2-instance-connect-default">Default</h1>

## SendSSHPublicKey

<a id="opIdSendSSHPublicKey"></a>

> Code samples

```bash
curl 'https://ec2-instance-connect.us-east-1.amazonaws.com/#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEC2InstanceConnectService.SendSSHPublicKey' \
  -d '{
    "InstanceId": {},
    "InstanceOSUser": {},
    "SSHPublicKey": {},
    "AvailabilityZone": {}
  }'
```

`POST /#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey`

Pushes an SSH public key to the specified EC2 instance for use by the specified user. The key remains for 60 seconds. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Connect-using-EC2-Instance-Connect.html">Connect to your Linux instance using EC2 Instance Connect</a> in the <i>Amazon EC2 User Guide</i>.

> Body parameter

```json
{
  "InstanceId": {},
  "InstanceOSUser": {},
  "SSHPublicKey": {},
  "AvailabilityZone": {}
}
```

<h3 id="sendsshpublickey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SendSSHPublicKeyRequest](#schemasendsshpublickeyrequest)|true|none|
|» InstanceId|body|object|true|none|
|» InstanceOSUser|body|object|true|none|
|» SSHPublicKey|body|object|true|none|
|» AvailabilityZone|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEC2InstanceConnectService.SendSSHPublicKey|

> Example responses

> 200 Response

```json
{
  "RequestId": "abcd1234-abcd-1234-abcd-1234abcd1234",
  "Success": true
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

<h3 id="sendsshpublickey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendSSHPublicKeyResponse](#schemasendsshpublickeyresponse)|
|480|480|AuthException|[AuthException](#schemaauthexception)|
|481|481|InvalidArgsException|[InvalidArgsException](#schemainvalidargsexception)|
|482|482|ServiceException|[ServiceException](#schemaserviceexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|EC2InstanceNotFoundException|[EC2InstanceNotFoundException](#schemaec2instancenotfoundexception)|
|485|485|EC2InstanceStateInvalidException|[EC2InstanceStateInvalidException](#schemaec2instancestateinvalidexception)|
|486|486|EC2InstanceUnavailableException|[EC2InstanceUnavailableException](#schemaec2instanceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendSerialConsoleSSHPublicKey

<a id="opIdSendSerialConsoleSSHPublicKey"></a>

> Code samples

```bash
curl 'https://ec2-instance-connect.us-east-1.amazonaws.com/#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey' \
  -d '{
    "InstanceId": {},
    "SerialPort": {},
    "SSHPublicKey": {}
  }'
```

`POST /#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey`

Pushes an SSH public key to the specified EC2 instance. The key remains for 60 seconds, which gives you 60 seconds to establish a serial console connection to the instance using SSH. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-serial-console.html">EC2 Serial Console</a> in the <i>Amazon EC2 User Guide</i>.

> Body parameter

```json
{
  "InstanceId": {},
  "SerialPort": {},
  "SSHPublicKey": {}
}
```

<h3 id="sendserialconsolesshpublickey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SendSerialConsoleSSHPublicKeyRequest](#schemasendserialconsolesshpublickeyrequest)|true|none|
|» InstanceId|body|object|true|none|
|» SerialPort|body|object|false|none|
|» SSHPublicKey|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey|

> Example responses

> 200 Response

```json
{
  "RequestId": {},
  "Success": {}
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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

<h3 id="sendserialconsolesshpublickey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendSerialConsoleSSHPublicKeyResponse](#schemasendserialconsolesshpublickeyresponse)|
|480|480|AuthException|[AuthException](#schemaauthexception)|
|481|481|SerialConsoleAccessDisabledException|[SerialConsoleAccessDisabledException](#schemaserialconsoleaccessdisabledexception)|
|482|482|InvalidArgsException|[InvalidArgsException](#schemainvalidargsexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|EC2InstanceNotFoundException|[EC2InstanceNotFoundException](#schemaec2instancenotfoundexception)|
|486|486|EC2InstanceTypeInvalidException|[EC2InstanceTypeInvalidException](#schemaec2instancetypeinvalidexception)|
|487|487|SerialConsoleSessionLimitExceededException|[SerialConsoleSessionLimitExceededException](#schemaserialconsolesessionlimitexceededexception)|
|488|488|SerialConsoleSessionUnavailableException|[SerialConsoleSessionUnavailableException](#schemaserialconsolesessionunavailableexception)|
|489|489|EC2InstanceStateInvalidException|[EC2InstanceStateInvalidException](#schemaec2instancestateinvalidexception)|
|490|490|EC2InstanceUnavailableException|[EC2InstanceUnavailableException](#schemaec2instanceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_SendSSHPublicKeyResponse">SendSSHPublicKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendsshpublickeyresponse"></a>
<a id="schema_SendSSHPublicKeyResponse"></a>
<a id="tocSsendsshpublickeyresponse"></a>
<a id="tocssendsshpublickeyresponse"></a>

```json
{
  "RequestId": "abcd1234-abcd-1234-abcd-1234abcd1234",
  "Success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestId|object|false|none|none|
|Success|object|false|none|none|

<h2 id="tocS_SendSSHPublicKeyRequest">SendSSHPublicKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendsshpublickeyrequest"></a>
<a id="schema_SendSSHPublicKeyRequest"></a>
<a id="tocSsendsshpublickeyrequest"></a>
<a id="tocssendsshpublickeyrequest"></a>

```json
{
  "InstanceId": {},
  "InstanceOSUser": {},
  "SSHPublicKey": {},
  "AvailabilityZone": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|InstanceOSUser|object|true|none|none|
|SSHPublicKey|object|true|none|none|
|AvailabilityZone|object|false|none|none|

<h2 id="tocS_AuthException">AuthException</h2>
<!-- backwards compatibility -->
<a id="schemaauthexception"></a>
<a id="schema_AuthException"></a>
<a id="tocSauthexception"></a>
<a id="tocsauthexception"></a>

```json
null
```

<h2 id="tocS_InvalidArgsException">InvalidArgsException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidargsexception"></a>
<a id="schema_InvalidArgsException"></a>
<a id="tocSinvalidargsexception"></a>
<a id="tocsinvalidargsexception"></a>

```json
null
```

<h2 id="tocS_ServiceException">ServiceException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceexception"></a>
<a id="schema_ServiceException"></a>
<a id="tocSserviceexception"></a>
<a id="tocsserviceexception"></a>

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

<h2 id="tocS_EC2InstanceNotFoundException">EC2InstanceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaec2instancenotfoundexception"></a>
<a id="schema_EC2InstanceNotFoundException"></a>
<a id="tocSec2instancenotfoundexception"></a>
<a id="tocsec2instancenotfoundexception"></a>

```json
null
```

<h2 id="tocS_EC2InstanceStateInvalidException">EC2InstanceStateInvalidException</h2>
<!-- backwards compatibility -->
<a id="schemaec2instancestateinvalidexception"></a>
<a id="schema_EC2InstanceStateInvalidException"></a>
<a id="tocSec2instancestateinvalidexception"></a>
<a id="tocsec2instancestateinvalidexception"></a>

```json
null
```

<h2 id="tocS_EC2InstanceUnavailableException">EC2InstanceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaec2instanceunavailableexception"></a>
<a id="schema_EC2InstanceUnavailableException"></a>
<a id="tocSec2instanceunavailableexception"></a>
<a id="tocsec2instanceunavailableexception"></a>

```json
null
```

<h2 id="tocS_SendSerialConsoleSSHPublicKeyResponse">SendSerialConsoleSSHPublicKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendserialconsolesshpublickeyresponse"></a>
<a id="schema_SendSerialConsoleSSHPublicKeyResponse"></a>
<a id="tocSsendserialconsolesshpublickeyresponse"></a>
<a id="tocssendserialconsolesshpublickeyresponse"></a>

```json
{
  "RequestId": {},
  "Success": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestId|object|false|none|none|
|Success|object|false|none|none|

<h2 id="tocS_SendSerialConsoleSSHPublicKeyRequest">SendSerialConsoleSSHPublicKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendserialconsolesshpublickeyrequest"></a>
<a id="schema_SendSerialConsoleSSHPublicKeyRequest"></a>
<a id="tocSsendserialconsolesshpublickeyrequest"></a>
<a id="tocssendserialconsolesshpublickeyrequest"></a>

```json
{
  "InstanceId": {},
  "SerialPort": {},
  "SSHPublicKey": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|SerialPort|object|false|none|none|
|SSHPublicKey|object|true|none|none|

<h2 id="tocS_SerialConsoleAccessDisabledException">SerialConsoleAccessDisabledException</h2>
<!-- backwards compatibility -->
<a id="schemaserialconsoleaccessdisabledexception"></a>
<a id="schema_SerialConsoleAccessDisabledException"></a>
<a id="tocSserialconsoleaccessdisabledexception"></a>
<a id="tocsserialconsoleaccessdisabledexception"></a>

```json
null
```

<h2 id="tocS_EC2InstanceTypeInvalidException">EC2InstanceTypeInvalidException</h2>
<!-- backwards compatibility -->
<a id="schemaec2instancetypeinvalidexception"></a>
<a id="schema_EC2InstanceTypeInvalidException"></a>
<a id="tocSec2instancetypeinvalidexception"></a>
<a id="tocsec2instancetypeinvalidexception"></a>

```json
null
```

<h2 id="tocS_SerialConsoleSessionLimitExceededException">SerialConsoleSessionLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaserialconsolesessionlimitexceededexception"></a>
<a id="schema_SerialConsoleSessionLimitExceededException"></a>
<a id="tocSserialconsolesessionlimitexceededexception"></a>
<a id="tocsserialconsolesessionlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_SerialConsoleSessionUnavailableException">SerialConsoleSessionUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserialconsolesessionunavailableexception"></a>
<a id="schema_SerialConsoleSessionUnavailableException"></a>
<a id="tocSserialconsolesessionunavailableexception"></a>
<a id="tocsserialconsolesessionunavailableexception"></a>

```json
null
```

<h2 id="tocS_AvailabilityZone">AvailabilityZone</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzone"></a>
<a id="schema_AvailabilityZone"></a>
<a id="tocSavailabilityzone"></a>
<a id="tocsavailabilityzone"></a>

```json
"string"
```

<h2 id="tocS_InstanceId">InstanceId</h2>
<!-- backwards compatibility -->
<a id="schemainstanceid"></a>
<a id="schema_InstanceId"></a>
<a id="tocSinstanceid"></a>
<a id="tocsinstanceid"></a>

```json
"stringstri"
```

<h2 id="tocS_InstanceOSUser">InstanceOSUser</h2>
<!-- backwards compatibility -->
<a id="schemainstanceosuser"></a>
<a id="schema_InstanceOSUser"></a>
<a id="tocSinstanceosuser"></a>
<a id="tocsinstanceosuser"></a>

```json
"string"
```

<h2 id="tocS_RequestId">RequestId</h2>
<!-- backwards compatibility -->
<a id="schemarequestid"></a>
<a id="schema_RequestId"></a>
<a id="tocSrequestid"></a>
<a id="tocsrequestid"></a>

```json
"string"
```

<h2 id="tocS_SSHPublicKey">SSHPublicKey</h2>
<!-- backwards compatibility -->
<a id="schemasshpublickey"></a>
<a id="schema_SSHPublicKey"></a>
<a id="tocSsshpublickey"></a>
<a id="tocssshpublickey"></a>

```json
"stringstringstringstringstringstringstringstringstringstringstringstringstringst"
```

<h2 id="tocS_Success">Success</h2>
<!-- backwards compatibility -->
<a id="schemasuccess"></a>
<a id="schema_Success"></a>
<a id="tocSsuccess"></a>
<a id="tocssuccess"></a>

```json
true
```

<h2 id="tocS_SerialPort">SerialPort</h2>
<!-- backwards compatibility -->
<a id="schemaserialport"></a>
<a id="schema_SerialPort"></a>
<a id="tocSserialport"></a>
<a id="tocsserialport"></a>

```json
0
```
