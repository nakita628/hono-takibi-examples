<h1 id="aws-device-farm">AWS Device Farm v2015-06-23</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Welcome to the AWS Device Farm API documentation, which contains APIs for:</p> <ul> <li> <p>Testing on desktop browsers</p> <p> Device Farm makes it possible for you to test your web applications on desktop browsers using Selenium. The APIs for desktop browser testing contain <code>TestGrid</code> in their names. For more information, see <a href="https://docs.aws.amazon.com/devicefarm/latest/testgrid/">Testing Web Applications on Selenium with Device Farm</a>.</p> </li> <li> <p>Testing on real mobile devices</p> <p>Device Farm makes it possible for you to test apps on physical phones, tablets, and other devices in the cloud. For more information, see the <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/">Device Farm Developer Guide</a>.</p> </li> </ul>

Base URLs:

* <a href="http://devicefarm.us-east-1.amazonaws.com">http://devicefarm.us-east-1.amazonaws.com</a> - The AWS Device Farm multi-region endpoint

* <a href="https://devicefarm.us-east-1.amazonaws.com">https://devicefarm.us-east-1.amazonaws.com</a> - The AWS Device Farm multi-region endpoint

* <a href="http://devicefarm.cn-north-1.amazonaws.com.cn">http://devicefarm.cn-north-1.amazonaws.com.cn</a> - The AWS Device Farm endpoint for China (Beijing) and China (Ningxia)

* <a href="https://devicefarm.cn-north-1.amazonaws.com.cn">https://devicefarm.cn-north-1.amazonaws.com.cn</a> - The AWS Device Farm endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/devicefarm/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-device-farm-default">Default</h1>

## CreateDevicePool

<a id="opIdCreateDevicePool"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.CreateDevicePool' \
  -d '{
    "projectArn": {},
    "name": {},
    "description": {},
    "rules": {},
    "maxDevices": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool`

Creates a device pool.

> Body parameter

```json
{
  "projectArn": {},
  "name": {},
  "description": {},
  "rules": {},
  "maxDevices": {}
}
```

<h3 id="createdevicepool-parameters">Parameters</h3>

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
|body|body|[CreateDevicePoolRequest](#schemacreatedevicepoolrequest)|true|none|
|» projectArn|body|object|true|none|
|» name|body|object|true|none|
|» description|body|object|false|none|
|» rules|body|object|true|none|
|» maxDevices|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.CreateDevicePool|

> Example responses

> 200 Response

```json
{
  "devicePool": {}
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

<h3 id="createdevicepool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDevicePoolResult](#schemacreatedevicepoolresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateInstanceProfile

<a id="opIdCreateInstanceProfile"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.CreateInstanceProfile' \
  -d '{
    "name": {},
    "description": {},
    "packageCleanup": {},
    "excludeAppPackagesFromCleanup": {},
    "rebootAfterUse": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile`

Creates a profile that can be applied to one or more private fleet device instances.

> Body parameter

```json
{
  "name": {},
  "description": {},
  "packageCleanup": {},
  "excludeAppPackagesFromCleanup": {},
  "rebootAfterUse": {}
}
```

<h3 id="createinstanceprofile-parameters">Parameters</h3>

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
|body|body|[CreateInstanceProfileRequest](#schemacreateinstanceprofilerequest)|true|none|
|» name|body|object|true|none|
|» description|body|object|false|none|
|» packageCleanup|body|object|false|none|
|» excludeAppPackagesFromCleanup|body|object|false|none|
|» rebootAfterUse|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.CreateInstanceProfile|

> Example responses

> 200 Response

```json
{
  "instanceProfile": {
    "arn": {},
    "packageCleanup": {},
    "excludeAppPackagesFromCleanup": {},
    "rebootAfterUse": {},
    "name": {},
    "description": {}
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

<h3 id="createinstanceprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateInstanceProfileResult](#schemacreateinstanceprofileresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateNetworkProfile

<a id="opIdCreateNetworkProfile"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.CreateNetworkProfile' \
  -d '{
    "projectArn": {},
    "name": {},
    "description": {},
    "type": {},
    "uplinkBandwidthBits": {},
    "downlinkBandwidthBits": {},
    "uplinkDelayMs": {},
    "downlinkDelayMs": {},
    "uplinkJitterMs": {},
    "downlinkJitterMs": {},
    "uplinkLossPercent": {},
    "downlinkLossPercent": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile`

Creates a network profile.

> Body parameter

```json
{
  "projectArn": {},
  "name": {},
  "description": {},
  "type": {},
  "uplinkBandwidthBits": {},
  "downlinkBandwidthBits": {},
  "uplinkDelayMs": {},
  "downlinkDelayMs": {},
  "uplinkJitterMs": {},
  "downlinkJitterMs": {},
  "uplinkLossPercent": {},
  "downlinkLossPercent": {}
}
```

<h3 id="createnetworkprofile-parameters">Parameters</h3>

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
|body|body|[CreateNetworkProfileRequest](#schemacreatenetworkprofilerequest)|true|none|
|» projectArn|body|object|true|none|
|» name|body|object|true|none|
|» description|body|object|false|none|
|» type|body|object|false|none|
|» uplinkBandwidthBits|body|object|false|none|
|» downlinkBandwidthBits|body|object|false|none|
|» uplinkDelayMs|body|object|false|none|
|» downlinkDelayMs|body|object|false|none|
|» uplinkJitterMs|body|object|false|none|
|» downlinkJitterMs|body|object|false|none|
|» uplinkLossPercent|body|object|false|none|
|» downlinkLossPercent|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.CreateNetworkProfile|

> Example responses

> 200 Response

```json
{
  "networkProfile": {
    "arn": {},
    "name": {},
    "description": {},
    "type": {},
    "uplinkBandwidthBits": {},
    "downlinkBandwidthBits": {},
    "uplinkDelayMs": {},
    "downlinkDelayMs": {},
    "uplinkJitterMs": {},
    "downlinkJitterMs": {},
    "uplinkLossPercent": {},
    "downlinkLossPercent": {}
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

<h3 id="createnetworkprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateNetworkProfileResult](#schemacreatenetworkprofileresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProject

<a id="opIdCreateProject"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.CreateProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.CreateProject' \
  -d '{
    "name": {},
    "defaultJobTimeoutMinutes": {},
    "vpcConfig": {
      "securityGroupIds": {},
      "subnetIds": {},
      "vpcId": {}
    }
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.CreateProject`

Creates a project.

> Body parameter

```json
{
  "name": {},
  "defaultJobTimeoutMinutes": {},
  "vpcConfig": {
    "securityGroupIds": {},
    "subnetIds": {},
    "vpcId": {}
  }
}
```

<h3 id="createproject-parameters">Parameters</h3>

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
|body|body|[CreateProjectRequest](#schemacreateprojectrequest)|true|none|
|» name|body|object|true|none|
|» defaultJobTimeoutMinutes|body|object|false|none|
|» vpcConfig|body|object|false|none|
|» » securityGroupIds|body|object|true|none|
|» » subnetIds|body|object|true|none|
|» » vpcId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.CreateProject|

> Example responses

> 200 Response

```json
{
  "project": {
    "name": "MyProject",
    "arn": "arn:aws:devicefarm:us-west-2:123456789101:project:5e01a8c7-c861-4c0a-b1d5-12345EXAMPLE",
    "created": "1472660939.152"
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

<h3 id="createproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProjectResult](#schemacreateprojectresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|
|484|484|TagOperationException|[TagOperationException](#schematagoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRemoteAccessSession

<a id="opIdCreateRemoteAccessSession"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.CreateRemoteAccessSession' \
  -d '{
    "projectArn": {},
    "deviceArn": {},
    "instanceArn": {},
    "sshPublicKey": {},
    "remoteDebugEnabled": {},
    "remoteRecordEnabled": {},
    "remoteRecordAppArn": {},
    "name": {},
    "clientId": {},
    "configuration": {
      "billingMethod": {},
      "vpceConfigurationArns": {}
    },
    "interactionMode": {},
    "skipAppResign": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession`

Specifies and starts a remote access session.

> Body parameter

```json
{
  "projectArn": {},
  "deviceArn": {},
  "instanceArn": {},
  "sshPublicKey": {},
  "remoteDebugEnabled": {},
  "remoteRecordEnabled": {},
  "remoteRecordAppArn": {},
  "name": {},
  "clientId": {},
  "configuration": {
    "billingMethod": {},
    "vpceConfigurationArns": {}
  },
  "interactionMode": {},
  "skipAppResign": {}
}
```

<h3 id="createremoteaccesssession-parameters">Parameters</h3>

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
|body|body|[CreateRemoteAccessSessionRequest](#schemacreateremoteaccesssessionrequest)|true|none|
|» projectArn|body|object|true|none|
|» deviceArn|body|object|true|none|
|» instanceArn|body|object|false|none|
|» sshPublicKey|body|object|false|none|
|» remoteDebugEnabled|body|object|false|none|
|» remoteRecordEnabled|body|object|false|none|
|» remoteRecordAppArn|body|object|false|none|
|» name|body|object|false|none|
|» clientId|body|object|false|none|
|» configuration|body|object|false|none|
|» » billingMethod|body|object|false|none|
|» » vpceConfigurationArns|body|object|false|none|
|» interactionMode|body|object|false|none|
|» skipAppResign|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.CreateRemoteAccessSession|

> Example responses

> 200 Response

```json
{
  "remoteAccessSession": {}
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

<h3 id="createremoteaccesssession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRemoteAccessSessionResult](#schemacreateremoteaccesssessionresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTestGridProject

<a id="opIdCreateTestGridProject"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.CreateTestGridProject' \
  -d '{
    "name": {},
    "description": {},
    "vpcConfig": {
      "securityGroupIds": {},
      "subnetIds": {},
      "vpcId": {}
    }
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject`

Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a> instances.

> Body parameter

```json
{
  "name": {},
  "description": {},
  "vpcConfig": {
    "securityGroupIds": {},
    "subnetIds": {},
    "vpcId": {}
  }
}
```

<h3 id="createtestgridproject-parameters">Parameters</h3>

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
|body|body|[CreateTestGridProjectRequest](#schemacreatetestgridprojectrequest)|true|none|
|» name|body|object|true|none|
|» description|body|object|false|none|
|» vpcConfig|body|object|false|none|
|» » securityGroupIds|body|object|true|none|
|» » subnetIds|body|object|true|none|
|» » vpcId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.CreateTestGridProject|

> Example responses

> 200 Response

```json
{
  "testGridProject": {
    "arn": {},
    "name": {},
    "description": {},
    "vpcConfig": {
      "securityGroupIds": {},
      "subnetIds": {},
      "vpcId": {}
    },
    "created": {}
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

<h3 id="createtestgridproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTestGridProjectResult](#schemacreatetestgridprojectresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTestGridUrl

<a id="opIdCreateTestGridUrl"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.CreateTestGridUrl' \
  -d '{
    "projectArn": {},
    "expiresInSeconds": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl`

Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code> constructor.

> Body parameter

```json
{
  "projectArn": {},
  "expiresInSeconds": {}
}
```

<h3 id="createtestgridurl-parameters">Parameters</h3>

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
|body|body|[CreateTestGridUrlRequest](#schemacreatetestgridurlrequest)|true|none|
|» projectArn|body|object|true|none|
|» expiresInSeconds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.CreateTestGridUrl|

> Example responses

> 200 Response

```json
{
  "url": {},
  "expires": {}
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

<h3 id="createtestgridurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTestGridUrlResult](#schemacreatetestgridurlresult)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ArgumentException|[ArgumentException](#schemaargumentexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUpload

<a id="opIdCreateUpload"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.CreateUpload' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.CreateUpload' \
  -d '{
    "projectArn": {},
    "name": {},
    "type": {},
    "contentType": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.CreateUpload`

Uploads an app or test scripts.

> Body parameter

```json
{
  "projectArn": {},
  "name": {},
  "type": {},
  "contentType": {}
}
```

<h3 id="createupload-parameters">Parameters</h3>

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
|body|body|[CreateUploadRequest](#schemacreateuploadrequest)|true|none|
|» projectArn|body|object|true|none|
|» name|body|object|true|none|
|» type|body|object|true|none|
|» contentType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.CreateUpload|

> Example responses

> 200 Response

```json
{
  "upload": {
    "name": "MyAppiumPythonUpload",
    "type": "APPIUM_PYTHON_TEST_PACKAGE",
    "arn": "arn:aws:devicefarm:us-west-2:123456789101:upload:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/b5340a65-3da7-4da6-a26e-12345EXAMPLE",
    "created": "1472661404.186",
    "status": "INITIALIZED",
    "url": "https://prod-us-west-2-uploads.s3-us-west-2.amazonaws.com/arn%3Aaws%3Adevicefarm%3Aus-west-2%3A123456789101%3Aproject%3A5e01a8c7-c861-4c0a-b1d5-12345EXAMPLE/uploads/arn%3Aaws%3Adevicefarm%3Aus-west-2%3A123456789101%3Aupload%3A5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/b5340a65-3da7-4da6-a26e-12345EXAMPLE/MyAppiumPythonUpload?AWSAccessKeyId=1234567891011EXAMPLE&Expires=1472747804&Signature=1234567891011EXAMPLE"
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

<h3 id="createupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUploadResult](#schemacreateuploadresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVPCEConfiguration

<a id="opIdCreateVPCEConfiguration"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.CreateVPCEConfiguration' \
  -d '{
    "vpceConfigurationName": {},
    "vpceServiceName": {},
    "serviceDnsName": {},
    "vpceConfigurationDescription": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration`

Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.

> Body parameter

```json
{
  "vpceConfigurationName": {},
  "vpceServiceName": {},
  "serviceDnsName": {},
  "vpceConfigurationDescription": {}
}
```

<h3 id="createvpceconfiguration-parameters">Parameters</h3>

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
|body|body|[CreateVPCEConfigurationRequest](#schemacreatevpceconfigurationrequest)|true|none|
|» vpceConfigurationName|body|object|true|none|
|» vpceServiceName|body|object|true|none|
|» serviceDnsName|body|object|true|none|
|» vpceConfigurationDescription|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.CreateVPCEConfiguration|

> Example responses

> 200 Response

```json
{
  "vpceConfiguration": {
    "arn": {},
    "vpceConfigurationName": {},
    "vpceServiceName": {},
    "serviceDnsName": {},
    "vpceConfigurationDescription": {}
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

<h3 id="createvpceconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVPCEConfigurationResult](#schemacreatevpceconfigurationresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDevicePool

<a id="opIdDeleteDevicePool"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.DeleteDevicePool' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool`

Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="deletedevicepool-parameters">Parameters</h3>

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
|body|body|[DeleteDevicePoolRequest](#schemadeletedevicepoolrequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.DeleteDevicePool|

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

<h3 id="deletedevicepool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDevicePoolResult](#schemadeletedevicepoolresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteInstanceProfile

<a id="opIdDeleteInstanceProfile"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.DeleteInstanceProfile' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile`

Deletes a profile that can be applied to one or more private device instances.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="deleteinstanceprofile-parameters">Parameters</h3>

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
|body|body|[DeleteInstanceProfileRequest](#schemadeleteinstanceprofilerequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.DeleteInstanceProfile|

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

<h3 id="deleteinstanceprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteInstanceProfileResult](#schemadeleteinstanceprofileresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteNetworkProfile

<a id="opIdDeleteNetworkProfile"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.DeleteNetworkProfile' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile`

Deletes a network profile.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="deletenetworkprofile-parameters">Parameters</h3>

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
|body|body|[DeleteNetworkProfileRequest](#schemadeletenetworkprofilerequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.DeleteNetworkProfile|

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

<h3 id="deletenetworkprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteNetworkProfileResult](#schemadeletenetworkprofileresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProject

<a id="opIdDeleteProject"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.DeleteProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.DeleteProject' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.DeleteProject`

<p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="deleteproject-parameters">Parameters</h3>

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
|body|body|[DeleteProjectRequest](#schemadeleteprojectrequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.DeleteProject|

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

<h3 id="deleteproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProjectResult](#schemadeleteprojectresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRemoteAccessSession

<a id="opIdDeleteRemoteAccessSession"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.DeleteRemoteAccessSession' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession`

Deletes a completed remote access session and its results.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="deleteremoteaccesssession-parameters">Parameters</h3>

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
|body|body|[DeleteRemoteAccessSessionRequest](#schemadeleteremoteaccesssessionrequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.DeleteRemoteAccessSession|

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

<h3 id="deleteremoteaccesssession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRemoteAccessSessionResult](#schemadeleteremoteaccesssessionresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRun

<a id="opIdDeleteRun"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.DeleteRun' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.DeleteRun' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.DeleteRun`

<p>Deletes the run, given the run ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="deleterun-parameters">Parameters</h3>

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
|body|body|[DeleteRunRequest](#schemadeleterunrequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.DeleteRun|

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

<h3 id="deleterun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRunResult](#schemadeleterunresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTestGridProject

<a id="opIdDeleteTestGridProject"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.DeleteTestGridProject' \
  -d '{
    "projectArn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject`

<p> Deletes a Selenium testing project and all content generated under it. </p> <important> <p>You cannot undo this operation.</p> </important> <note> <p>You cannot delete a project if it has active sessions.</p> </note>

> Body parameter

```json
{
  "projectArn": {}
}
```

<h3 id="deletetestgridproject-parameters">Parameters</h3>

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
|body|body|[DeleteTestGridProjectRequest](#schemadeletetestgridprojectrequest)|true|none|
|» projectArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.DeleteTestGridProject|

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

<h3 id="deletetestgridproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTestGridProjectResult](#schemadeletetestgridprojectresult)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ArgumentException|[ArgumentException](#schemaargumentexception)|
|482|482|CannotDeleteException|[CannotDeleteException](#schemacannotdeleteexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUpload

<a id="opIdDeleteUpload"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.DeleteUpload' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.DeleteUpload' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.DeleteUpload`

Deletes an upload given the upload ARN.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="deleteupload-parameters">Parameters</h3>

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
|body|body|[DeleteUploadRequest](#schemadeleteuploadrequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.DeleteUpload|

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

<h3 id="deleteupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteUploadResult](#schemadeleteuploadresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVPCEConfiguration

<a id="opIdDeleteVPCEConfiguration"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.DeleteVPCEConfiguration' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration`

Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="deletevpceconfiguration-parameters">Parameters</h3>

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
|body|body|[DeleteVPCEConfigurationRequest](#schemadeletevpceconfigurationrequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.DeleteVPCEConfiguration|

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

<h3 id="deletevpceconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVPCEConfigurationResult](#schemadeletevpceconfigurationresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|
|483|483|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccountSettings

<a id="opIdGetAccountSettings"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.GetAccountSettings' \
  -d '{}'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings`

Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.

> Body parameter

```json
{}
```

<h3 id="getaccountsettings-parameters">Parameters</h3>

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
|body|body|[GetAccountSettingsRequest](#schemagetaccountsettingsrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.GetAccountSettings|

> Example responses

> 200 Response

```json
{
  "accountSettings": {
    "awsAccountNumber": "123456789101",
    "unmeteredDevices": {
      "ANDROID": 1,
      "IOS": 2
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

<h3 id="getaccountsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccountSettingsResult](#schemagetaccountsettingsresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDevice

<a id="opIdGetDevice"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.GetDevice' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.GetDevice' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.GetDevice`

Gets information about a unique device type.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="getdevice-parameters">Parameters</h3>

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
|body|body|[GetDeviceRequest](#schemagetdevicerequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.GetDevice|

> Example responses

> 200 Response

```json
{
  "device": {
    "name": "LG G2 (Sprint)",
    "arn": "arn:aws:devicefarm:us-west-2::device:A0E6E6E1059E45918208DF75B2B7EF6C",
    "cpu": {
      "architecture": "armeabi-v7a",
      "clock": 2265.6,
      "frequency": "MHz"
    },
    "formFactor": "PHONE",
    "heapSize": 256000000,
    "image": "75B2B7EF6C12345EXAMPLE",
    "manufacturer": "LG",
    "memory": 16000000000,
    "model": "G2 (Sprint)",
    "os": "4.2.2",
    "platform": "ANDROID",
    "resolution": {
      "height": 1920,
      "width": 1080
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

<h3 id="getdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeviceResult](#schemagetdeviceresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeviceInstance

<a id="opIdGetDeviceInstance"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.GetDeviceInstance' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance`

Returns information about a device instance that belongs to a private device fleet.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="getdeviceinstance-parameters">Parameters</h3>

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
|body|body|[GetDeviceInstanceRequest](#schemagetdeviceinstancerequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.GetDeviceInstance|

> Example responses

> 200 Response

```json
{
  "deviceInstance": {
    "arn": {},
    "deviceArn": {},
    "labels": {},
    "status": {},
    "udid": {},
    "instanceProfile": {
      "arn": {},
      "packageCleanup": {},
      "excludeAppPackagesFromCleanup": {},
      "rebootAfterUse": {},
      "name": {},
      "description": {}
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

<h3 id="getdeviceinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeviceInstanceResult](#schemagetdeviceinstanceresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDevicePool

<a id="opIdGetDevicePool"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.GetDevicePool' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.GetDevicePool' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.GetDevicePool`

Gets information about a device pool.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="getdevicepool-parameters">Parameters</h3>

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
|body|body|[GetDevicePoolRequest](#schemagetdevicepoolrequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.GetDevicePool|

> Example responses

> 200 Response

```json
{
  "devicePool": {}
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

<h3 id="getdevicepool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDevicePoolResult](#schemagetdevicepoolresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDevicePoolCompatibility

<a id="opIdGetDevicePoolCompatibility"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.GetDevicePoolCompatibility' \
  -d '{
    "devicePoolArn": {},
    "appArn": {},
    "testType": {},
    "test": {
      "type": {},
      "testPackageArn": {},
      "testSpecArn": {},
      "filter": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      }
    },
    "configuration": {
      "extraDataPackageArn": {},
      "networkProfileArn": {},
      "locale": {},
      "location": {
        "latitude": {},
        "longitude": {}
      },
      "vpceConfigurationArns": {},
      "customerArtifactPaths": {
        "iosPaths": {},
        "androidPaths": {},
        "deviceHostPaths": {}
      },
      "radios": {
        "wifi": {},
        "bluetooth": {},
        "nfc": {},
        "gps": {}
      },
      "auxiliaryApps": {},
      "billingMethod": {}
    }
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility`

Gets information about compatibility with a device pool.

> Body parameter

```json
{
  "devicePoolArn": {},
  "appArn": {},
  "testType": {},
  "test": {
    "type": {},
    "testPackageArn": {},
    "testSpecArn": {},
    "filter": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    }
  },
  "configuration": {
    "extraDataPackageArn": {},
    "networkProfileArn": {},
    "locale": {},
    "location": {
      "latitude": {},
      "longitude": {}
    },
    "vpceConfigurationArns": {},
    "customerArtifactPaths": {
      "iosPaths": {},
      "androidPaths": {},
      "deviceHostPaths": {}
    },
    "radios": {
      "wifi": {},
      "bluetooth": {},
      "nfc": {},
      "gps": {}
    },
    "auxiliaryApps": {},
    "billingMethod": {}
  }
}
```

<h3 id="getdevicepoolcompatibility-parameters">Parameters</h3>

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
|body|body|[GetDevicePoolCompatibilityRequest](#schemagetdevicepoolcompatibilityrequest)|true|none|
|» devicePoolArn|body|object|true|none|
|» appArn|body|object|false|none|
|» testType|body|object|false|none|
|» test|body|object|false|none|
|» » type|body|object|true|none|
|» » testPackageArn|body|object|false|none|
|» » testSpecArn|body|object|false|none|
|» » filter|body|object|false|none|
|» » parameters|body|object|false|none|
|» » » **additionalProperties**|body|[String](#schemastring)|false|none|
|» configuration|body|object|false|none|
|» » extraDataPackageArn|body|object|false|none|
|» » networkProfileArn|body|object|false|none|
|» » locale|body|object|false|none|
|» » location|body|object|false|none|
|» » » latitude|body|object|true|none|
|» » » longitude|body|object|true|none|
|» » vpceConfigurationArns|body|object|false|none|
|» » customerArtifactPaths|body|object|false|none|
|» » » iosPaths|body|object|false|none|
|» » » androidPaths|body|object|false|none|
|» » » deviceHostPaths|body|object|false|none|
|» » radios|body|object|false|none|
|» » » wifi|body|object|false|none|
|» » » bluetooth|body|object|false|none|
|» » » nfc|body|object|false|none|
|» » » gps|body|object|false|none|
|» » auxiliaryApps|body|object|false|none|
|» » billingMethod|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.GetDevicePoolCompatibility|

> Example responses

> 200 Response

```json
{
  "compatibleDevices": [],
  "incompatibleDevices": []
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

<h3 id="getdevicepoolcompatibility-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDevicePoolCompatibilityResult](#schemagetdevicepoolcompatibilityresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInstanceProfile

<a id="opIdGetInstanceProfile"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.GetInstanceProfile' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile`

Returns information about the specified instance profile.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="getinstanceprofile-parameters">Parameters</h3>

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
|body|body|[GetInstanceProfileRequest](#schemagetinstanceprofilerequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.GetInstanceProfile|

> Example responses

> 200 Response

```json
{
  "instanceProfile": {
    "arn": {},
    "packageCleanup": {},
    "excludeAppPackagesFromCleanup": {},
    "rebootAfterUse": {},
    "name": {},
    "description": {}
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

<h3 id="getinstanceprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInstanceProfileResult](#schemagetinstanceprofileresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetJob

<a id="opIdGetJob"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.GetJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.GetJob' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.GetJob`

Gets information about a job.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="getjob-parameters">Parameters</h3>

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
|body|body|[GetJobRequest](#schemagetjobrequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.GetJob|

> Example responses

> 200 Response

```json
{
  "job": {}
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

<h3 id="getjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetJobResult](#schemagetjobresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetNetworkProfile

<a id="opIdGetNetworkProfile"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.GetNetworkProfile' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile`

Returns information about a network profile.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="getnetworkprofile-parameters">Parameters</h3>

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
|body|body|[GetNetworkProfileRequest](#schemagetnetworkprofilerequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.GetNetworkProfile|

> Example responses

> 200 Response

```json
{
  "networkProfile": {
    "arn": {},
    "name": {},
    "description": {},
    "type": {},
    "uplinkBandwidthBits": {},
    "downlinkBandwidthBits": {},
    "uplinkDelayMs": {},
    "downlinkDelayMs": {},
    "uplinkJitterMs": {},
    "downlinkJitterMs": {},
    "uplinkLossPercent": {},
    "downlinkLossPercent": {}
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

<h3 id="getnetworkprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetNetworkProfileResult](#schemagetnetworkprofileresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOfferingStatus

<a id="opIdGetOfferingStatus"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.GetOfferingStatus' \
  -d '{
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus`

Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

> Body parameter

```json
{
  "nextToken": {}
}
```

<h3 id="getofferingstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetOfferingStatusRequest](#schemagetofferingstatusrequest)|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.GetOfferingStatus|

> Example responses

> 200 Response

```json
{
  "current": {
    "D68B3C05-1BA6-4360-BC69-12345EXAMPLE": {
      "offering": {
        "type": "RECURRING",
        "description": "Android Remote Access Unmetered Device Slot",
        "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
        "platform": "ANDROID"
      },
      "quantity": 1
    }
  },
  "nextPeriod": {
    "D68B3C05-1BA6-4360-BC69-12345EXAMPLE": {
      "effectiveOn": "1472688000",
      "offering": {
        "type": "RECURRING",
        "description": "Android Remote Access Unmetered Device Slot",
        "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
        "platform": "ANDROID"
      },
      "quantity": 1
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

<h3 id="getofferingstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOfferingStatusResult](#schemagetofferingstatusresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|NotEligibleException|[NotEligibleException](#schemanoteligibleexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetProject

<a id="opIdGetProject"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.GetProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.GetProject' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.GetProject`

Gets information about a project.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="getproject-parameters">Parameters</h3>

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
|body|body|[GetProjectRequest](#schemagetprojectrequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.GetProject|

> Example responses

> 200 Response

```json
{
  "project": {
    "name": "My Project",
    "arn": "arn:aws:devicefarm:us-west-2:123456789101:project:5e01a8c7-c861-4c0a-b1d5-12345EXAMPLE",
    "created": "1472660939.152"
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

<h3 id="getproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetProjectResult](#schemagetprojectresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRemoteAccessSession

<a id="opIdGetRemoteAccessSession"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.GetRemoteAccessSession' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession`

Returns a link to a currently running remote access session.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="getremoteaccesssession-parameters">Parameters</h3>

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
|body|body|[GetRemoteAccessSessionRequest](#schemagetremoteaccesssessionrequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.GetRemoteAccessSession|

> Example responses

> 200 Response

```json
{
  "remoteAccessSession": {}
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

<h3 id="getremoteaccesssession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRemoteAccessSessionResult](#schemagetremoteaccesssessionresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRun

<a id="opIdGetRun"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.GetRun' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.GetRun' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.GetRun`

Gets information about a run.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="getrun-parameters">Parameters</h3>

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
|body|body|[GetRunRequest](#schemagetrunrequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.GetRun|

> Example responses

> 200 Response

```json
{
  "run": {
    "name": "My Test Run",
    "type": "BUILTIN_EXPLORER",
    "arn": "arn:aws:devicefarm:us-west-2:123456789101:run:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/0fcac17b-6122-44d7-ae5a-12345EXAMPLE",
    "billingMethod": "METERED",
    "completedJobs": 0,
    "counters": {
      "errored": 0,
      "failed": 0,
      "passed": 0,
      "skipped": 0,
      "stopped": 0,
      "total": 0,
      "warned": 0
    },
    "created": "1472667509.852",
    "deviceMinutes": {
      "metered": 0,
      "total": 0,
      "unmetered": 0
    },
    "platform": "ANDROID",
    "result": "PENDING",
    "status": "RUNNING",
    "totalJobs": 3
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

<h3 id="getrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRunResult](#schemagetrunresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSuite

<a id="opIdGetSuite"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.GetSuite' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.GetSuite' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.GetSuite`

Gets information about a suite.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="getsuite-parameters">Parameters</h3>

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
|body|body|[GetSuiteRequest](#schemagetsuiterequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.GetSuite|

> Example responses

> 200 Response

```json
{
  "suite": {}
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

<h3 id="getsuite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSuiteResult](#schemagetsuiteresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTest

<a id="opIdGetTest"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.GetTest' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.GetTest' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.GetTest`

Gets information about a test.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="gettest-parameters">Parameters</h3>

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
|body|body|[GetTestRequest](#schemagettestrequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.GetTest|

> Example responses

> 200 Response

```json
{
  "test": {}
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

<h3 id="gettest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTestResult](#schemagettestresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTestGridProject

<a id="opIdGetTestGridProject"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.GetTestGridProject' \
  -d '{
    "projectArn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject`

Retrieves information about a Selenium testing project.

> Body parameter

```json
{
  "projectArn": {}
}
```

<h3 id="gettestgridproject-parameters">Parameters</h3>

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
|body|body|[GetTestGridProjectRequest](#schemagettestgridprojectrequest)|true|none|
|» projectArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.GetTestGridProject|

> Example responses

> 200 Response

```json
{
  "testGridProject": {
    "arn": {},
    "name": {},
    "description": {},
    "vpcConfig": {
      "securityGroupIds": {},
      "subnetIds": {},
      "vpcId": {}
    },
    "created": {}
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

<h3 id="gettestgridproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTestGridProjectResult](#schemagettestgridprojectresult)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ArgumentException|[ArgumentException](#schemaargumentexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTestGridSession

<a id="opIdGetTestGridSession"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.GetTestGridSession' \
  -d '{
    "projectArn": {},
    "sessionId": {},
    "sessionArn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession`

<p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p> <ul> <li> <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p> </li> <li> <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p> </li> </ul> <p/>

> Body parameter

```json
{
  "projectArn": {},
  "sessionId": {},
  "sessionArn": {}
}
```

<h3 id="gettestgridsession-parameters">Parameters</h3>

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
|body|body|[GetTestGridSessionRequest](#schemagettestgridsessionrequest)|true|none|
|» projectArn|body|object|false|none|
|» sessionId|body|object|false|none|
|» sessionArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.GetTestGridSession|

> Example responses

> 200 Response

```json
{
  "testGridSession": {
    "arn": {},
    "status": {},
    "created": {},
    "ended": {},
    "billingMinutes": {},
    "seleniumProperties": {}
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

<h3 id="gettestgridsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTestGridSessionResult](#schemagettestgridsessionresult)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ArgumentException|[ArgumentException](#schemaargumentexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUpload

<a id="opIdGetUpload"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.GetUpload' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.GetUpload' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.GetUpload`

Gets information about an upload.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="getupload-parameters">Parameters</h3>

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
|body|body|[GetUploadRequest](#schemagetuploadrequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.GetUpload|

> Example responses

> 200 Response

```json
{
  "upload": {}
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

<h3 id="getupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetUploadResult](#schemagetuploadresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVPCEConfiguration

<a id="opIdGetVPCEConfiguration"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.GetVPCEConfiguration' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration`

Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="getvpceconfiguration-parameters">Parameters</h3>

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
|body|body|[GetVPCEConfigurationRequest](#schemagetvpceconfigurationrequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.GetVPCEConfiguration|

> Example responses

> 200 Response

```json
{
  "vpceConfiguration": {
    "arn": {},
    "vpceConfigurationName": {},
    "vpceServiceName": {},
    "serviceDnsName": {},
    "vpceConfigurationDescription": {}
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

<h3 id="getvpceconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVPCEConfigurationResult](#schemagetvpceconfigurationresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InstallToRemoteAccessSession

<a id="opIdInstallToRemoteAccessSession"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.InstallToRemoteAccessSession' \
  -d '{
    "remoteAccessSessionArn": {},
    "appArn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession`

Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.

> Body parameter

```json
{
  "remoteAccessSessionArn": {},
  "appArn": {}
}
```

<h3 id="installtoremoteaccesssession-parameters">Parameters</h3>

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
|body|body|[InstallToRemoteAccessSessionRequest](#schemainstalltoremoteaccesssessionrequest)|true|none|
|» remoteAccessSessionArn|body|object|true|none|
|» appArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.InstallToRemoteAccessSession|

> Example responses

> 200 Response

```json
{
  "appUpload": {}
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

<h3 id="installtoremoteaccesssession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InstallToRemoteAccessSessionResult](#schemainstalltoremoteaccesssessionresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListArtifacts

<a id="opIdListArtifacts"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListArtifacts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListArtifacts' \
  -d '{
    "arn": {},
    "type": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListArtifacts`

Gets information about artifacts.

> Body parameter

```json
{
  "arn": {},
  "type": {},
  "nextToken": {}
}
```

<h3 id="listartifacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListArtifactsRequest](#schemalistartifactsrequest)|true|none|
|» arn|body|object|true|none|
|» type|body|object|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListArtifacts|

> Example responses

> 200 Response

```json
{
  "artifacts": {},
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

<h3 id="listartifacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListArtifactsResult](#schemalistartifactsresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDeviceInstances

<a id="opIdListDeviceInstances"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListDeviceInstances' \
  -d '{
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances`

Returns information about the private device instances associated with one or more AWS accounts.

> Body parameter

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="listdeviceinstances-parameters">Parameters</h3>

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
|body|body|[ListDeviceInstancesRequest](#schemalistdeviceinstancesrequest)|true|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListDeviceInstances|

> Example responses

> 200 Response

```json
{
  "deviceInstances": {},
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

<h3 id="listdeviceinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDeviceInstancesResult](#schemalistdeviceinstancesresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDevicePools

<a id="opIdListDevicePools"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListDevicePools' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListDevicePools' \
  -d '{
    "arn": {},
    "type": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListDevicePools`

Gets information about device pools.

> Body parameter

```json
{
  "arn": {},
  "type": {},
  "nextToken": {}
}
```

<h3 id="listdevicepools-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListDevicePoolsRequest](#schemalistdevicepoolsrequest)|true|none|
|» arn|body|object|true|none|
|» type|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListDevicePools|

> Example responses

> 200 Response

```json
{
  "devicePools": [
    {
      "name": "Top Devices",
      "arn": "arn:aws:devicefarm:us-west-2::devicepool:082d10e5-d7d7-48a5-ba5c-12345EXAMPLE",
      "description": "Top devices",
      "rules": [
        {
          "value": "[\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\"]",
          "attribute": "ARN",
          "operator": "IN"
        }
      ]
    },
    {
      "name": "My Android Device Pool",
      "arn": "arn:aws:devicefarm:us-west-2:123456789101:devicepool:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/bf96e75a-28f6-4e61-b6a7-12345EXAMPLE",
      "description": "Samsung Galaxy Android devices",
      "rules": [
        {
          "value": "[\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\"]",
          "attribute": "ARN",
          "operator": "IN"
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

<h3 id="listdevicepools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDevicePoolsResult](#schemalistdevicepoolsresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDevices

<a id="opIdListDevices"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListDevices' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListDevices' \
  -d '{
    "arn": {},
    "nextToken": {},
    "filters": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListDevices`

Gets information about unique device types.

> Body parameter

```json
{
  "arn": {},
  "nextToken": {},
  "filters": {}
}
```

<h3 id="listdevices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListDevicesRequest](#schemalistdevicesrequest)|true|none|
|» arn|body|object|false|none|
|» nextToken|body|object|false|none|
|» filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListDevices|

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

<h3 id="listdevices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDevicesResult](#schemalistdevicesresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInstanceProfiles

<a id="opIdListInstanceProfiles"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListInstanceProfiles' \
  -d '{
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles`

Returns information about all the instance profiles in an AWS account.

> Body parameter

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="listinstanceprofiles-parameters">Parameters</h3>

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
|body|body|[ListInstanceProfilesRequest](#schemalistinstanceprofilesrequest)|true|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListInstanceProfiles|

> Example responses

> 200 Response

```json
{
  "instanceProfiles": {},
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

<h3 id="listinstanceprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInstanceProfilesResult](#schemalistinstanceprofilesresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListJobs

<a id="opIdListJobs"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListJobs' \
  -d '{
    "arn": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListJobs`

Gets information about jobs for a given test run.

> Body parameter

```json
{
  "arn": {},
  "nextToken": {}
}
```

<h3 id="listjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListJobsRequest](#schemalistjobsrequest)|true|none|
|» arn|body|object|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListJobs|

> Example responses

> 200 Response

```json
{
  "jobs": {},
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

<h3 id="listjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListJobsResult](#schemalistjobsresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListNetworkProfiles

<a id="opIdListNetworkProfiles"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListNetworkProfiles' \
  -d '{
    "arn": {},
    "type": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles`

Returns the list of available network profiles.

> Body parameter

```json
{
  "arn": {},
  "type": {},
  "nextToken": {}
}
```

<h3 id="listnetworkprofiles-parameters">Parameters</h3>

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
|body|body|[ListNetworkProfilesRequest](#schemalistnetworkprofilesrequest)|true|none|
|» arn|body|object|true|none|
|» type|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListNetworkProfiles|

> Example responses

> 200 Response

```json
{
  "networkProfiles": {},
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

<h3 id="listnetworkprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListNetworkProfilesResult](#schemalistnetworkprofilesresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOfferingPromotions

<a id="opIdListOfferingPromotions"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListOfferingPromotions' \
  -d '{
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions`

Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.

> Body parameter

```json
{
  "nextToken": {}
}
```

<h3 id="listofferingpromotions-parameters">Parameters</h3>

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
|body|body|[ListOfferingPromotionsRequest](#schemalistofferingpromotionsrequest)|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListOfferingPromotions|

> Example responses

> 200 Response

```json
{
  "offeringPromotions": {},
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

<h3 id="listofferingpromotions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOfferingPromotionsResult](#schemalistofferingpromotionsresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|NotEligibleException|[NotEligibleException](#schemanoteligibleexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOfferingTransactions

<a id="opIdListOfferingTransactions"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListOfferingTransactions' \
  -d '{
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions`

Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

> Body parameter

```json
{
  "nextToken": {}
}
```

<h3 id="listofferingtransactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListOfferingTransactionsRequest](#schemalistofferingtransactionsrequest)|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListOfferingTransactions|

> Example responses

> 200 Response

```json
{
  "offeringTransactions": [
    {
      "cost": {
        "amount": 0,
        "currencyCode": "USD"
      },
      "createdOn": "1470021420",
      "offeringStatus": {
        "type": "RENEW",
        "effectiveOn": "1472688000",
        "offering": {
          "type": "RECURRING",
          "description": "Android Remote Access Unmetered Device Slot",
          "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
          "platform": "ANDROID"
        },
        "quantity": 0
      },
      "transactionId": "03728003-d1ea-4851-abd6-12345EXAMPLE"
    },
    {
      "cost": {
        "amount": 250,
        "currencyCode": "USD"
      },
      "createdOn": "1470021420",
      "offeringStatus": {
        "type": "PURCHASE",
        "effectiveOn": "1470021420",
        "offering": {
          "type": "RECURRING",
          "description": "Android Remote Access Unmetered Device Slot",
          "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
          "platform": "ANDROID"
        },
        "quantity": 1
      },
      "transactionId": "56820b6e-06bd-473a-8ff8-12345EXAMPLE"
    },
    {
      "cost": {
        "amount": 175,
        "currencyCode": "USD"
      },
      "createdOn": "1465538520",
      "offeringStatus": {
        "type": "PURCHASE",
        "effectiveOn": "1465538520",
        "offering": {
          "type": "RECURRING",
          "description": "Android Unmetered Device Slot",
          "id": "8980F81C-00D7-469D-8EC6-12345EXAMPLE",
          "platform": "ANDROID"
        },
        "quantity": 1
      },
      "transactionId": "953ae2c6-d760-4a04-9597-12345EXAMPLE"
    },
    {
      "cost": {
        "amount": 8.07,
        "currencyCode": "USD"
      },
      "createdOn": "1459344300",
      "offeringStatus": {
        "type": "PURCHASE",
        "effectiveOn": "1459344300",
        "offering": {
          "type": "RECURRING",
          "description": "iOS Unmetered Device Slot",
          "id": "A53D4D73-A6F6-4B82-A0B0-12345EXAMPLE",
          "platform": "IOS"
        },
        "quantity": 1
      },
      "transactionId": "2baf9021-ae3e-47f5-ab52-12345EXAMPLE"
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

<h3 id="listofferingtransactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOfferingTransactionsResult](#schemalistofferingtransactionsresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|NotEligibleException|[NotEligibleException](#schemanoteligibleexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOfferings

<a id="opIdListOfferings"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListOfferings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListOfferings' \
  -d '{
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListOfferings`

Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

> Body parameter

```json
{
  "nextToken": {}
}
```

<h3 id="listofferings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListOfferingsRequest](#schemalistofferingsrequest)|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListOfferings|

> Example responses

> 200 Response

```json
{
  "offerings": [
    {
      "type": "RECURRING",
      "description": "iOS Unmetered Device Slot",
      "id": "A53D4D73-A6F6-4B82-A0B0-12345EXAMPLE",
      "platform": "IOS",
      "recurringCharges": [
        {
          "cost": {
            "amount": 250,
            "currencyCode": "USD"
          },
          "frequency": "MONTHLY"
        }
      ]
    },
    {
      "type": "RECURRING",
      "description": "Android Unmetered Device Slot",
      "id": "8980F81C-00D7-469D-8EC6-12345EXAMPLE",
      "platform": "ANDROID",
      "recurringCharges": [
        {
          "cost": {
            "amount": 250,
            "currencyCode": "USD"
          },
          "frequency": "MONTHLY"
        }
      ]
    },
    {
      "type": "RECURRING",
      "description": "Android Remote Access Unmetered Device Slot",
      "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
      "platform": "ANDROID",
      "recurringCharges": [
        {
          "cost": {
            "amount": 250,
            "currencyCode": "USD"
          },
          "frequency": "MONTHLY"
        }
      ]
    },
    {
      "type": "RECURRING",
      "description": "iOS Remote Access Unmetered Device Slot",
      "id": "552B4DAD-A6C9-45C4-94FB-12345EXAMPLE",
      "platform": "IOS",
      "recurringCharges": [
        {
          "cost": {
            "amount": 250,
            "currencyCode": "USD"
          },
          "frequency": "MONTHLY"
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

<h3 id="listofferings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOfferingsResult](#schemalistofferingsresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|NotEligibleException|[NotEligibleException](#schemanoteligibleexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProjects

<a id="opIdListProjects"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListProjects' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListProjects' \
  -d '{
    "arn": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListProjects`

Gets information about projects.

> Body parameter

```json
{
  "arn": {},
  "nextToken": {}
}
```

<h3 id="listprojects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListProjectsRequest](#schemalistprojectsrequest)|true|none|
|» arn|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListProjects|

> Example responses

> 200 Response

```json
{
  "projects": [
    {
      "name": "My Test Project",
      "arn": "arn:aws:devicefarm:us-west-2:123456789101:project:7ad300ed-8183-41a7-bf94-12345EXAMPLE",
      "created": "1453163262.105"
    },
    {
      "name": "Hello World",
      "arn": "arn:aws:devicefarm:us-west-2:123456789101:project:d6b087d9-56db-4e44-b9ec-12345EXAMPLE",
      "created": "1470350112.439"
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

<h3 id="listprojects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProjectsResult](#schemalistprojectsresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRemoteAccessSessions

<a id="opIdListRemoteAccessSessions"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListRemoteAccessSessions' \
  -d '{
    "arn": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions`

Returns a list of all currently running remote access sessions.

> Body parameter

```json
{
  "arn": {},
  "nextToken": {}
}
```

<h3 id="listremoteaccesssessions-parameters">Parameters</h3>

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
|body|body|[ListRemoteAccessSessionsRequest](#schemalistremoteaccesssessionsrequest)|true|none|
|» arn|body|object|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListRemoteAccessSessions|

> Example responses

> 200 Response

```json
{
  "remoteAccessSessions": []
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

<h3 id="listremoteaccesssessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRemoteAccessSessionsResult](#schemalistremoteaccesssessionsresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRuns

<a id="opIdListRuns"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListRuns' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListRuns' \
  -d '{
    "arn": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListRuns`

Gets information about runs, given an AWS Device Farm project ARN.

> Body parameter

```json
{
  "arn": {},
  "nextToken": {}
}
```

<h3 id="listruns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListRunsRequest](#schemalistrunsrequest)|true|none|
|» arn|body|object|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListRuns|

> Example responses

> 200 Response

```json
{
  "runs": [
    {
      "name": "My Test Run",
      "type": "BUILTIN_EXPLORER",
      "arn": "arn:aws:devicefarm:us-west-2:123456789101:run:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/0fcac17b-6122-44d7-ae5a-12345EXAMPLE",
      "billingMethod": "METERED",
      "completedJobs": 0,
      "counters": {
        "errored": 0,
        "failed": 0,
        "passed": 0,
        "skipped": 0,
        "stopped": 0,
        "total": 0,
        "warned": 0
      },
      "created": "1472667509.852",
      "deviceMinutes": {
        "metered": 0,
        "total": 0,
        "unmetered": 0
      },
      "platform": "ANDROID",
      "result": "PENDING",
      "status": "RUNNING",
      "totalJobs": 3
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

<h3 id="listruns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRunsResult](#schemalistrunsresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSamples

<a id="opIdListSamples"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListSamples' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListSamples' \
  -d '{
    "arn": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListSamples`

Gets information about samples, given an AWS Device Farm job ARN.

> Body parameter

```json
{
  "arn": {},
  "nextToken": {}
}
```

<h3 id="listsamples-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListSamplesRequest](#schemalistsamplesrequest)|true|none|
|» arn|body|object|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListSamples|

> Example responses

> 200 Response

```json
{
  "samples": []
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

<h3 id="listsamples-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSamplesResult](#schemalistsamplesresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSuites

<a id="opIdListSuites"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListSuites' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListSuites' \
  -d '{
    "arn": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListSuites`

Gets information about test suites for a given job.

> Body parameter

```json
{
  "arn": {},
  "nextToken": {}
}
```

<h3 id="listsuites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListSuitesRequest](#schemalistsuitesrequest)|true|none|
|» arn|body|object|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListSuites|

> Example responses

> 200 Response

```json
{
  "suites": []
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

<h3 id="listsuites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSuitesResult](#schemalistsuitesresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListTagsForResource' \
  -d '{
    "ResourceARN": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource`

List the tags for an AWS Device Farm resource.

> Body parameter

```json
{
  "ResourceARN": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

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
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListTagsForResource|

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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|TagOperationException|[TagOperationException](#schematagoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTestGridProjects

<a id="opIdListTestGridProjects"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListTestGridProjects' \
  -d '{
    "maxResult": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects`

Gets a list of all Selenium testing projects in your account.

> Body parameter

```json
{
  "maxResult": {},
  "nextToken": {}
}
```

<h3 id="listtestgridprojects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResult|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTestGridProjectsRequest](#schemalisttestgridprojectsrequest)|true|none|
|» maxResult|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListTestGridProjects|

> Example responses

> 200 Response

```json
{
  "testGridProjects": {},
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

<h3 id="listtestgridprojects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTestGridProjectsResult](#schemalisttestgridprojectsresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTestGridSessionActions

<a id="opIdListTestGridSessionActions"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListTestGridSessionActions' \
  -d '{
    "sessionArn": {},
    "maxResult": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions`

Returns a list of the actions taken in a <a>TestGridSession</a>.

> Body parameter

```json
{
  "sessionArn": {},
  "maxResult": {},
  "nextToken": {}
}
```

<h3 id="listtestgridsessionactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResult|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTestGridSessionActionsRequest](#schemalisttestgridsessionactionsrequest)|true|none|
|» sessionArn|body|object|true|none|
|» maxResult|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListTestGridSessionActions|

> Example responses

> 200 Response

```json
{
  "actions": {},
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

<h3 id="listtestgridsessionactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTestGridSessionActionsResult](#schemalisttestgridsessionactionsresult)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ArgumentException|[ArgumentException](#schemaargumentexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTestGridSessionArtifacts

<a id="opIdListTestGridSessionArtifacts"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListTestGridSessionArtifacts' \
  -d '{
    "sessionArn": {},
    "type": {},
    "maxResult": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts`

Retrieves a list of artifacts created during the session.

> Body parameter

```json
{
  "sessionArn": {},
  "type": {},
  "maxResult": {},
  "nextToken": {}
}
```

<h3 id="listtestgridsessionartifacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResult|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTestGridSessionArtifactsRequest](#schemalisttestgridsessionartifactsrequest)|true|none|
|» sessionArn|body|object|true|none|
|» type|body|object|false|none|
|» maxResult|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListTestGridSessionArtifacts|

> Example responses

> 200 Response

```json
{
  "artifacts": {},
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

<h3 id="listtestgridsessionartifacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTestGridSessionArtifactsResult](#schemalisttestgridsessionartifactsresult)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ArgumentException|[ArgumentException](#schemaargumentexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTestGridSessions

<a id="opIdListTestGridSessions"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListTestGridSessions' \
  -d '{
    "projectArn": {},
    "status": {},
    "creationTimeAfter": {},
    "creationTimeBefore": {},
    "endTimeAfter": {},
    "endTimeBefore": {},
    "maxResult": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions`

Retrieves a list of sessions for a <a>TestGridProject</a>.

> Body parameter

```json
{
  "projectArn": {},
  "status": {},
  "creationTimeAfter": {},
  "creationTimeBefore": {},
  "endTimeAfter": {},
  "endTimeBefore": {},
  "maxResult": {},
  "nextToken": {}
}
```

<h3 id="listtestgridsessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResult|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTestGridSessionsRequest](#schemalisttestgridsessionsrequest)|true|none|
|» projectArn|body|object|true|none|
|» status|body|object|false|none|
|» creationTimeAfter|body|object|false|none|
|» creationTimeBefore|body|object|false|none|
|» endTimeAfter|body|object|false|none|
|» endTimeBefore|body|object|false|none|
|» maxResult|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListTestGridSessions|

> Example responses

> 200 Response

```json
{
  "testGridSessions": {},
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

<h3 id="listtestgridsessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTestGridSessionsResult](#schemalisttestgridsessionsresult)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ArgumentException|[ArgumentException](#schemaargumentexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTests

<a id="opIdListTests"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListTests' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListTests' \
  -d '{
    "arn": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListTests`

Gets information about tests in a given test suite.

> Body parameter

```json
{
  "arn": {},
  "nextToken": {}
}
```

<h3 id="listtests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTestsRequest](#schemalisttestsrequest)|true|none|
|» arn|body|object|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListTests|

> Example responses

> 200 Response

```json
{
  "tests": []
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

<h3 id="listtests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTestsResult](#schemalisttestsresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUniqueProblems

<a id="opIdListUniqueProblems"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListUniqueProblems' \
  -d '{
    "arn": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems`

<p>Gets information about unique problems, such as exceptions or crashes.</p> <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example, if a call in your application consistently raises an exception (<code>OutOfBoundsException in MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many individual entries for that exception.</p>

> Body parameter

```json
{
  "arn": {},
  "nextToken": {}
}
```

<h3 id="listuniqueproblems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListUniqueProblemsRequest](#schemalistuniqueproblemsrequest)|true|none|
|» arn|body|object|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListUniqueProblems|

> Example responses

> 200 Response

```json
{
  "uniqueProblems": {}
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

<h3 id="listuniqueproblems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUniqueProblemsResult](#schemalistuniqueproblemsresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUploads

<a id="opIdListUploads"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListUploads' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListUploads' \
  -d '{
    "arn": {},
    "type": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListUploads`

Gets information about uploads, given an AWS Device Farm project ARN.

> Body parameter

```json
{
  "arn": {},
  "type": {},
  "nextToken": {}
}
```

<h3 id="listuploads-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListUploadsRequest](#schemalistuploadsrequest)|true|none|
|» arn|body|object|true|none|
|» type|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListUploads|

> Example responses

> 200 Response

```json
{
  "uploads": []
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

<h3 id="listuploads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUploadsResult](#schemalistuploadsresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVPCEConfigurations

<a id="opIdListVPCEConfigurations"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ListVPCEConfigurations' \
  -d '{
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations`

Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.

> Body parameter

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="listvpceconfigurations-parameters">Parameters</h3>

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
|body|body|[ListVPCEConfigurationsRequest](#schemalistvpceconfigurationsrequest)|true|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ListVPCEConfigurations|

> Example responses

> 200 Response

```json
{
  "vpceConfigurations": {},
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

<h3 id="listvpceconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVPCEConfigurationsResult](#schemalistvpceconfigurationsresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PurchaseOffering

<a id="opIdPurchaseOffering"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.PurchaseOffering' \
  -d '{
    "offeringId": {},
    "quantity": {},
    "offeringPromotionId": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering`

Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

> Body parameter

```json
{
  "offeringId": {},
  "quantity": {},
  "offeringPromotionId": {}
}
```

<h3 id="purchaseoffering-parameters">Parameters</h3>

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
|body|body|[PurchaseOfferingRequest](#schemapurchaseofferingrequest)|true|none|
|» offeringId|body|object|true|none|
|» quantity|body|object|true|none|
|» offeringPromotionId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.PurchaseOffering|

> Example responses

> 200 Response

```json
{
  "offeringTransaction": {
    "cost": {
      "amount": 8.07,
      "currencyCode": "USD"
    },
    "createdOn": "1472648340",
    "offeringStatus": {
      "type": "PURCHASE",
      "effectiveOn": "1472648340",
      "offering": {
        "type": "RECURRING",
        "description": "Android Remote Access Unmetered Device Slot",
        "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
        "platform": "ANDROID"
      },
      "quantity": 1
    },
    "transactionId": "d30614ed-1b03-404c-9893-12345EXAMPLE"
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

<h3 id="purchaseoffering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PurchaseOfferingResult](#schemapurchaseofferingresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|NotEligibleException|[NotEligibleException](#schemanoteligibleexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RenewOffering

<a id="opIdRenewOffering"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.RenewOffering' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.RenewOffering' \
  -d '{
    "offeringId": {},
    "quantity": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.RenewOffering`

Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

> Body parameter

```json
{
  "offeringId": {},
  "quantity": {}
}
```

<h3 id="renewoffering-parameters">Parameters</h3>

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
|body|body|[RenewOfferingRequest](#schemarenewofferingrequest)|true|none|
|» offeringId|body|object|true|none|
|» quantity|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.RenewOffering|

> Example responses

> 200 Response

```json
{
  "offeringTransaction": {
    "cost": {
      "amount": 250,
      "currencyCode": "USD"
    },
    "createdOn": "1472648880",
    "offeringStatus": {
      "type": "RENEW",
      "effectiveOn": "1472688000",
      "offering": {
        "type": "RECURRING",
        "description": "Android Remote Access Unmetered Device Slot",
        "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
        "platform": "ANDROID"
      },
      "quantity": 1
    },
    "transactionId": "e90f1405-8c35-4561-be43-12345EXAMPLE"
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

<h3 id="renewoffering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RenewOfferingResult](#schemarenewofferingresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|NotEligibleException|[NotEligibleException](#schemanoteligibleexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ScheduleRun

<a id="opIdScheduleRun"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.ScheduleRun' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.ScheduleRun' \
  -d '{
    "projectArn": {},
    "appArn": {},
    "devicePoolArn": {},
    "deviceSelectionConfiguration": {
      "filters": {},
      "maxDevices": {}
    },
    "name": {},
    "test": {
      "type": {},
      "testPackageArn": {},
      "testSpecArn": {},
      "filter": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      }
    },
    "configuration": {
      "extraDataPackageArn": {},
      "networkProfileArn": {},
      "locale": {},
      "location": {
        "latitude": {},
        "longitude": {}
      },
      "vpceConfigurationArns": {},
      "customerArtifactPaths": {
        "iosPaths": {},
        "androidPaths": {},
        "deviceHostPaths": {}
      },
      "radios": {
        "wifi": {},
        "bluetooth": {},
        "nfc": {},
        "gps": {}
      },
      "auxiliaryApps": {},
      "billingMethod": {}
    },
    "executionConfiguration": {
      "jobTimeoutMinutes": {},
      "accountsCleanup": {},
      "appPackagesCleanup": {},
      "videoCapture": {},
      "skipAppResign": {}
    }
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.ScheduleRun`

Schedules a run.

> Body parameter

```json
{
  "projectArn": {},
  "appArn": {},
  "devicePoolArn": {},
  "deviceSelectionConfiguration": {
    "filters": {},
    "maxDevices": {}
  },
  "name": {},
  "test": {
    "type": {},
    "testPackageArn": {},
    "testSpecArn": {},
    "filter": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    }
  },
  "configuration": {
    "extraDataPackageArn": {},
    "networkProfileArn": {},
    "locale": {},
    "location": {
      "latitude": {},
      "longitude": {}
    },
    "vpceConfigurationArns": {},
    "customerArtifactPaths": {
      "iosPaths": {},
      "androidPaths": {},
      "deviceHostPaths": {}
    },
    "radios": {
      "wifi": {},
      "bluetooth": {},
      "nfc": {},
      "gps": {}
    },
    "auxiliaryApps": {},
    "billingMethod": {}
  },
  "executionConfiguration": {
    "jobTimeoutMinutes": {},
    "accountsCleanup": {},
    "appPackagesCleanup": {},
    "videoCapture": {},
    "skipAppResign": {}
  }
}
```

<h3 id="schedulerun-parameters">Parameters</h3>

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
|body|body|[ScheduleRunRequest](#schemaschedulerunrequest)|true|none|
|» projectArn|body|object|true|none|
|» appArn|body|object|false|none|
|» devicePoolArn|body|object|false|none|
|» deviceSelectionConfiguration|body|object|false|none|
|» » filters|body|object|true|none|
|» » maxDevices|body|object|true|none|
|» name|body|object|false|none|
|» test|body|object|true|none|
|» » type|body|object|true|none|
|» » testPackageArn|body|object|false|none|
|» » testSpecArn|body|object|false|none|
|» » filter|body|object|false|none|
|» » parameters|body|object|false|none|
|» » » **additionalProperties**|body|[String](#schemastring)|false|none|
|» configuration|body|object|false|none|
|» » extraDataPackageArn|body|object|false|none|
|» » networkProfileArn|body|object|false|none|
|» » locale|body|object|false|none|
|» » location|body|object|false|none|
|» » » latitude|body|object|true|none|
|» » » longitude|body|object|true|none|
|» » vpceConfigurationArns|body|object|false|none|
|» » customerArtifactPaths|body|object|false|none|
|» » » iosPaths|body|object|false|none|
|» » » androidPaths|body|object|false|none|
|» » » deviceHostPaths|body|object|false|none|
|» » radios|body|object|false|none|
|» » » wifi|body|object|false|none|
|» » » bluetooth|body|object|false|none|
|» » » nfc|body|object|false|none|
|» » » gps|body|object|false|none|
|» » auxiliaryApps|body|object|false|none|
|» » billingMethod|body|object|false|none|
|» executionConfiguration|body|object|false|none|
|» » jobTimeoutMinutes|body|object|false|none|
|» » accountsCleanup|body|object|false|none|
|» » appPackagesCleanup|body|object|false|none|
|» » videoCapture|body|object|false|none|
|» » skipAppResign|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.ScheduleRun|

> Example responses

> 200 Response

```json
{
  "run": {}
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

<h3 id="schedulerun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScheduleRunResult](#schemaschedulerunresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|IdempotencyException|[IdempotencyException](#schemaidempotencyexception)|
|484|484|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopJob

<a id="opIdStopJob"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.StopJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.StopJob' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.StopJob`

Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device where tests have not started. You are not billed for this device. On the device where tests have started, setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown, and any tests that were in progress or already completed.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="stopjob-parameters">Parameters</h3>

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
|body|body|[StopJobRequest](#schemastopjobrequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.StopJob|

> Example responses

> 200 Response

```json
{
  "job": {
    "arn": {},
    "name": {},
    "type": {},
    "created": {},
    "status": {},
    "result": {},
    "started": {},
    "stopped": {},
    "counters": {
      "total": {},
      "passed": {},
      "failed": {},
      "warned": {},
      "errored": {},
      "stopped": {},
      "skipped": {}
    },
    "message": {},
    "device": {
      "arn": {},
      "name": {},
      "manufacturer": {},
      "model": {},
      "modelId": {},
      "formFactor": {},
      "platform": {},
      "os": {},
      "cpu": {
        "frequency": {},
        "architecture": {},
        "clock": {}
      },
      "resolution": {
        "width": {},
        "height": {}
      },
      "heapSize": {},
      "memory": {},
      "image": {},
      "carrier": {},
      "radio": {},
      "remoteAccessEnabled": {},
      "remoteDebugEnabled": {},
      "fleetType": {},
      "fleetName": {},
      "instances": {},
      "availability": {}
    },
    "instanceArn": {},
    "deviceMinutes": {
      "total": {},
      "metered": {},
      "unmetered": {}
    },
    "videoEndpoint": {},
    "videoCapture": {}
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

<h3 id="stopjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopJobResult](#schemastopjobresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopRemoteAccessSession

<a id="opIdStopRemoteAccessSession"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.StopRemoteAccessSession' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession`

Ends a specified remote access session.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="stopremoteaccesssession-parameters">Parameters</h3>

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
|body|body|[StopRemoteAccessSessionRequest](#schemastopremoteaccesssessionrequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.StopRemoteAccessSession|

> Example responses

> 200 Response

```json
{
  "remoteAccessSession": {
    "arn": {},
    "name": {},
    "created": {},
    "status": {},
    "result": {},
    "message": {},
    "started": {},
    "stopped": {},
    "device": {
      "arn": {},
      "name": {},
      "manufacturer": {},
      "model": {},
      "modelId": {},
      "formFactor": {},
      "platform": {},
      "os": {},
      "cpu": {
        "frequency": {},
        "architecture": {},
        "clock": {}
      },
      "resolution": {
        "width": {},
        "height": {}
      },
      "heapSize": {},
      "memory": {},
      "image": {},
      "carrier": {},
      "radio": {},
      "remoteAccessEnabled": {},
      "remoteDebugEnabled": {},
      "fleetType": {},
      "fleetName": {},
      "instances": {},
      "availability": {}
    },
    "instanceArn": {},
    "remoteDebugEnabled": {},
    "remoteRecordEnabled": {},
    "remoteRecordAppArn": {},
    "hostAddress": {},
    "clientId": {},
    "billingMethod": {},
    "deviceMinutes": {
      "total": {},
      "metered": {},
      "unmetered": {}
    },
    "endpoint": {},
    "deviceUdid": {},
    "interactionMode": {},
    "skipAppResign": {},
    "vpcConfig": {
      "securityGroupIds": {},
      "subnetIds": {},
      "vpcId": {}
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

<h3 id="stopremoteaccesssession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopRemoteAccessSessionResult](#schemastopremoteaccesssessionresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopRun

<a id="opIdStopRun"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.StopRun' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.StopRun' \
  -d '{
    "arn": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.StopRun`

Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices where tests have not started. You are not billed for these devices. On devices where tests have started executing, setup suite and teardown suite tests run to completion on those devices. You are billed for setup, teardown, and any tests that were in progress or already completed.

> Body parameter

```json
{
  "arn": {}
}
```

<h3 id="stoprun-parameters">Parameters</h3>

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
|body|body|[StopRunRequest](#schemastoprunrequest)|true|none|
|» arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.StopRun|

> Example responses

> 200 Response

```json
{
  "run": {}
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

<h3 id="stoprun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopRunResult](#schemastoprunresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.TagResource`

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.

> Body parameter

```json
{
  "ResourceARN": {},
  "Tags": {}
}
```

<h3 id="tagresource-parameters">Parameters</h3>

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
|body|body|[TagResourceRequest](#schematagresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|TagOperationException|[TagOperationException](#schematagoperationexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|484|484|TagPolicyException|[TagPolicyException](#schematagpolicyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.UntagResource`

Deletes the specified tags from a resource.

> Body parameter

```json
{
  "ResourceARN": {},
  "TagKeys": {}
}
```

<h3 id="untagresource-parameters">Parameters</h3>

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
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.UntagResource|

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
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|TagOperationException|[TagOperationException](#schematagoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDeviceInstance

<a id="opIdUpdateDeviceInstance"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.UpdateDeviceInstance' \
  -d '{
    "arn": {},
    "profileArn": {},
    "labels": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance`

Updates information about a private device instance.

> Body parameter

```json
{
  "arn": {},
  "profileArn": {},
  "labels": {}
}
```

<h3 id="updatedeviceinstance-parameters">Parameters</h3>

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
|body|body|[UpdateDeviceInstanceRequest](#schemaupdatedeviceinstancerequest)|true|none|
|» arn|body|object|true|none|
|» profileArn|body|object|false|none|
|» labels|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.UpdateDeviceInstance|

> Example responses

> 200 Response

```json
{
  "deviceInstance": {
    "arn": {},
    "deviceArn": {},
    "labels": {},
    "status": {},
    "udid": {},
    "instanceProfile": {
      "arn": {},
      "packageCleanup": {},
      "excludeAppPackagesFromCleanup": {},
      "rebootAfterUse": {},
      "name": {},
      "description": {}
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

<h3 id="updatedeviceinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDeviceInstanceResult](#schemaupdatedeviceinstanceresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDevicePool

<a id="opIdUpdateDevicePool"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.UpdateDevicePool' \
  -d '{
    "arn": {},
    "name": {},
    "description": {},
    "rules": {},
    "maxDevices": {},
    "clearMaxDevices": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool`

Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).

> Body parameter

```json
{
  "arn": {},
  "name": {},
  "description": {},
  "rules": {},
  "maxDevices": {},
  "clearMaxDevices": {}
}
```

<h3 id="updatedevicepool-parameters">Parameters</h3>

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
|body|body|[UpdateDevicePoolRequest](#schemaupdatedevicepoolrequest)|true|none|
|» arn|body|object|true|none|
|» name|body|object|false|none|
|» description|body|object|false|none|
|» rules|body|object|false|none|
|» maxDevices|body|object|false|none|
|» clearMaxDevices|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.UpdateDevicePool|

> Example responses

> 200 Response

```json
{
  "devicePool": {}
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

<h3 id="updatedevicepool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDevicePoolResult](#schemaupdatedevicepoolresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateInstanceProfile

<a id="opIdUpdateInstanceProfile"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.UpdateInstanceProfile' \
  -d '{
    "arn": {},
    "name": {},
    "description": {},
    "packageCleanup": {},
    "excludeAppPackagesFromCleanup": {},
    "rebootAfterUse": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile`

Updates information about an existing private device instance profile.

> Body parameter

```json
{
  "arn": {},
  "name": {},
  "description": {},
  "packageCleanup": {},
  "excludeAppPackagesFromCleanup": {},
  "rebootAfterUse": {}
}
```

<h3 id="updateinstanceprofile-parameters">Parameters</h3>

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
|body|body|[UpdateInstanceProfileRequest](#schemaupdateinstanceprofilerequest)|true|none|
|» arn|body|object|true|none|
|» name|body|object|false|none|
|» description|body|object|false|none|
|» packageCleanup|body|object|false|none|
|» excludeAppPackagesFromCleanup|body|object|false|none|
|» rebootAfterUse|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.UpdateInstanceProfile|

> Example responses

> 200 Response

```json
{
  "instanceProfile": {
    "arn": {},
    "packageCleanup": {},
    "excludeAppPackagesFromCleanup": {},
    "rebootAfterUse": {},
    "name": {},
    "description": {}
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

<h3 id="updateinstanceprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateInstanceProfileResult](#schemaupdateinstanceprofileresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateNetworkProfile

<a id="opIdUpdateNetworkProfile"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.UpdateNetworkProfile' \
  -d '{
    "arn": {},
    "name": {},
    "description": {},
    "type": {},
    "uplinkBandwidthBits": {},
    "downlinkBandwidthBits": {},
    "uplinkDelayMs": {},
    "downlinkDelayMs": {},
    "uplinkJitterMs": {},
    "downlinkJitterMs": {},
    "uplinkLossPercent": {},
    "downlinkLossPercent": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile`

Updates the network profile.

> Body parameter

```json
{
  "arn": {},
  "name": {},
  "description": {},
  "type": {},
  "uplinkBandwidthBits": {},
  "downlinkBandwidthBits": {},
  "uplinkDelayMs": {},
  "downlinkDelayMs": {},
  "uplinkJitterMs": {},
  "downlinkJitterMs": {},
  "uplinkLossPercent": {},
  "downlinkLossPercent": {}
}
```

<h3 id="updatenetworkprofile-parameters">Parameters</h3>

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
|body|body|[UpdateNetworkProfileRequest](#schemaupdatenetworkprofilerequest)|true|none|
|» arn|body|object|true|none|
|» name|body|object|false|none|
|» description|body|object|false|none|
|» type|body|object|false|none|
|» uplinkBandwidthBits|body|object|false|none|
|» downlinkBandwidthBits|body|object|false|none|
|» uplinkDelayMs|body|object|false|none|
|» downlinkDelayMs|body|object|false|none|
|» uplinkJitterMs|body|object|false|none|
|» downlinkJitterMs|body|object|false|none|
|» uplinkLossPercent|body|object|false|none|
|» downlinkLossPercent|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.UpdateNetworkProfile|

> Example responses

> 200 Response

```json
{
  "networkProfile": {
    "arn": {},
    "name": {},
    "description": {},
    "type": {},
    "uplinkBandwidthBits": {},
    "downlinkBandwidthBits": {},
    "uplinkDelayMs": {},
    "downlinkDelayMs": {},
    "uplinkJitterMs": {},
    "downlinkJitterMs": {},
    "uplinkLossPercent": {},
    "downlinkLossPercent": {}
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

<h3 id="updatenetworkprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateNetworkProfileResult](#schemaupdatenetworkprofileresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProject

<a id="opIdUpdateProject"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.UpdateProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.UpdateProject' \
  -d '{
    "arn": {},
    "name": {},
    "defaultJobTimeoutMinutes": {},
    "vpcConfig": {
      "securityGroupIds": {},
      "subnetIds": {},
      "vpcId": {}
    }
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.UpdateProject`

Modifies the specified project name, given the project ARN and a new name.

> Body parameter

```json
{
  "arn": {},
  "name": {},
  "defaultJobTimeoutMinutes": {},
  "vpcConfig": {
    "securityGroupIds": {},
    "subnetIds": {},
    "vpcId": {}
  }
}
```

<h3 id="updateproject-parameters">Parameters</h3>

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
|body|body|[UpdateProjectRequest](#schemaupdateprojectrequest)|true|none|
|» arn|body|object|true|none|
|» name|body|object|false|none|
|» defaultJobTimeoutMinutes|body|object|false|none|
|» vpcConfig|body|object|false|none|
|» » securityGroupIds|body|object|true|none|
|» » subnetIds|body|object|true|none|
|» » vpcId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.UpdateProject|

> Example responses

> 200 Response

```json
{
  "project": {
    "name": "NewName",
    "arn": "arn:aws:devicefarm:us-west-2:123456789101:project:8f75187d-101e-4625-accc-12345EXAMPLE",
    "created": "1448400709.927"
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

<h3 id="updateproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProjectResult](#schemaupdateprojectresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTestGridProject

<a id="opIdUpdateTestGridProject"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.UpdateTestGridProject' \
  -d '{
    "projectArn": {},
    "name": {},
    "description": {},
    "vpcConfig": {
      "securityGroupIds": {},
      "subnetIds": {},
      "vpcId": {}
    }
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject`

Change details of a project.

> Body parameter

```json
{
  "projectArn": {},
  "name": {},
  "description": {},
  "vpcConfig": {
    "securityGroupIds": {},
    "subnetIds": {},
    "vpcId": {}
  }
}
```

<h3 id="updatetestgridproject-parameters">Parameters</h3>

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
|body|body|[UpdateTestGridProjectRequest](#schemaupdatetestgridprojectrequest)|true|none|
|» projectArn|body|object|true|none|
|» name|body|object|false|none|
|» description|body|object|false|none|
|» vpcConfig|body|object|false|none|
|» » securityGroupIds|body|object|true|none|
|» » subnetIds|body|object|true|none|
|» » vpcId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.UpdateTestGridProject|

> Example responses

> 200 Response

```json
{
  "testGridProject": {
    "arn": {},
    "name": {},
    "description": {},
    "vpcConfig": {
      "securityGroupIds": {},
      "subnetIds": {},
      "vpcId": {}
    },
    "created": {}
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

<h3 id="updatetestgridproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTestGridProjectResult](#schemaupdatetestgridprojectresult)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ArgumentException|[ArgumentException](#schemaargumentexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUpload

<a id="opIdUpdateUpload"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.UpdateUpload' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.UpdateUpload' \
  -d '{
    "arn": {},
    "name": {},
    "contentType": {},
    "editContent": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.UpdateUpload`

Updates an uploaded test spec.

> Body parameter

```json
{
  "arn": {},
  "name": {},
  "contentType": {},
  "editContent": {}
}
```

<h3 id="updateupload-parameters">Parameters</h3>

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
|body|body|[UpdateUploadRequest](#schemaupdateuploadrequest)|true|none|
|» arn|body|object|true|none|
|» name|body|object|false|none|
|» contentType|body|object|false|none|
|» editContent|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.UpdateUpload|

> Example responses

> 200 Response

```json
{
  "upload": {
    "arn": {},
    "name": {},
    "created": {},
    "type": {},
    "status": {},
    "url": {},
    "metadata": {},
    "contentType": {},
    "message": {},
    "category": {}
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

<h3 id="updateupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateUploadResult](#schemaupdateuploadresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVPCEConfiguration

<a id="opIdUpdateVPCEConfiguration"></a>

> Code samples

```bash
curl 'https://devicefarm.us-east-1.amazonaws.com/#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DeviceFarm_20150623.UpdateVPCEConfiguration' \
  -d '{
    "arn": {},
    "vpceConfigurationName": {},
    "vpceServiceName": {},
    "serviceDnsName": {},
    "vpceConfigurationDescription": {}
  }'
```

`POST /#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration`

Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.

> Body parameter

```json
{
  "arn": {},
  "vpceConfigurationName": {},
  "vpceServiceName": {},
  "serviceDnsName": {},
  "vpceConfigurationDescription": {}
}
```

<h3 id="updatevpceconfiguration-parameters">Parameters</h3>

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
|body|body|[UpdateVPCEConfigurationRequest](#schemaupdatevpceconfigurationrequest)|true|none|
|» arn|body|object|true|none|
|» vpceConfigurationName|body|object|false|none|
|» vpceServiceName|body|object|false|none|
|» serviceDnsName|body|object|false|none|
|» vpceConfigurationDescription|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DeviceFarm_20150623.UpdateVPCEConfiguration|

> Example responses

> 200 Response

```json
{
  "vpceConfiguration": {
    "arn": {},
    "vpceConfigurationName": {},
    "vpceServiceName": {},
    "serviceDnsName": {},
    "vpceConfigurationDescription": {}
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

<h3 id="updatevpceconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateVPCEConfigurationResult](#schemaupdatevpceconfigurationresult)|
|480|480|ArgumentException|[ArgumentException](#schemaargumentexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ServiceAccountException|[ServiceAccountException](#schemaserviceaccountexception)|
|483|483|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateDevicePoolResult">CreateDevicePoolResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedevicepoolresult"></a>
<a id="schema_CreateDevicePoolResult"></a>
<a id="tocScreatedevicepoolresult"></a>
<a id="tocscreatedevicepoolresult"></a>

```json
{
  "devicePool": {}
}
```

Represents the result of a create device pool request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devicePool|object|false|none|none|

<h2 id="tocS_CreateDevicePoolRequest">CreateDevicePoolRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedevicepoolrequest"></a>
<a id="schema_CreateDevicePoolRequest"></a>
<a id="tocScreatedevicepoolrequest"></a>
<a id="tocscreatedevicepoolrequest"></a>

```json
{
  "projectArn": {},
  "name": {},
  "description": {},
  "rules": {},
  "maxDevices": {}
}
```

Represents a request to the create device pool operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectArn|object|true|none|none|
|name|object|true|none|none|
|description|object|false|none|none|
|rules|object|true|none|none|
|maxDevices|object|false|none|none|

<h2 id="tocS_ArgumentException">ArgumentException</h2>
<!-- backwards compatibility -->
<a id="schemaargumentexception"></a>
<a id="schema_ArgumentException"></a>
<a id="tocSargumentexception"></a>
<a id="tocsargumentexception"></a>

```json
null
```

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

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

<h2 id="tocS_ServiceAccountException">ServiceAccountException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceaccountexception"></a>
<a id="schema_ServiceAccountException"></a>
<a id="tocSserviceaccountexception"></a>
<a id="tocsserviceaccountexception"></a>

```json
null
```

<h2 id="tocS_CreateInstanceProfileResult">CreateInstanceProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstanceprofileresult"></a>
<a id="schema_CreateInstanceProfileResult"></a>
<a id="tocScreateinstanceprofileresult"></a>
<a id="tocscreateinstanceprofileresult"></a>

```json
{
  "instanceProfile": {
    "arn": {},
    "packageCleanup": {},
    "excludeAppPackagesFromCleanup": {},
    "rebootAfterUse": {},
    "name": {},
    "description": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceProfile|object|false|none|none|

<h2 id="tocS_CreateInstanceProfileRequest">CreateInstanceProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstanceprofilerequest"></a>
<a id="schema_CreateInstanceProfileRequest"></a>
<a id="tocScreateinstanceprofilerequest"></a>
<a id="tocscreateinstanceprofilerequest"></a>

```json
{
  "name": {},
  "description": {},
  "packageCleanup": {},
  "excludeAppPackagesFromCleanup": {},
  "rebootAfterUse": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|packageCleanup|object|false|none|none|
|excludeAppPackagesFromCleanup|object|false|none|none|
|rebootAfterUse|object|false|none|none|

<h2 id="tocS_CreateNetworkProfileResult">CreateNetworkProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatenetworkprofileresult"></a>
<a id="schema_CreateNetworkProfileResult"></a>
<a id="tocScreatenetworkprofileresult"></a>
<a id="tocscreatenetworkprofileresult"></a>

```json
{
  "networkProfile": {
    "arn": {},
    "name": {},
    "description": {},
    "type": {},
    "uplinkBandwidthBits": {},
    "downlinkBandwidthBits": {},
    "uplinkDelayMs": {},
    "downlinkDelayMs": {},
    "uplinkJitterMs": {},
    "downlinkJitterMs": {},
    "uplinkLossPercent": {},
    "downlinkLossPercent": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networkProfile|object|false|none|none|

<h2 id="tocS_CreateNetworkProfileRequest">CreateNetworkProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatenetworkprofilerequest"></a>
<a id="schema_CreateNetworkProfileRequest"></a>
<a id="tocScreatenetworkprofilerequest"></a>
<a id="tocscreatenetworkprofilerequest"></a>

```json
{
  "projectArn": {},
  "name": {},
  "description": {},
  "type": {},
  "uplinkBandwidthBits": {},
  "downlinkBandwidthBits": {},
  "uplinkDelayMs": {},
  "downlinkDelayMs": {},
  "uplinkJitterMs": {},
  "downlinkJitterMs": {},
  "uplinkLossPercent": {},
  "downlinkLossPercent": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectArn|object|true|none|none|
|name|object|true|none|none|
|description|object|false|none|none|
|type|object|false|none|none|
|uplinkBandwidthBits|object|false|none|none|
|downlinkBandwidthBits|object|false|none|none|
|uplinkDelayMs|object|false|none|none|
|downlinkDelayMs|object|false|none|none|
|uplinkJitterMs|object|false|none|none|
|downlinkJitterMs|object|false|none|none|
|uplinkLossPercent|object|false|none|none|
|downlinkLossPercent|object|false|none|none|

<h2 id="tocS_CreateProjectResult">CreateProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectresult"></a>
<a id="schema_CreateProjectResult"></a>
<a id="tocScreateprojectresult"></a>
<a id="tocscreateprojectresult"></a>

```json
{
  "project": {
    "name": "MyProject",
    "arn": "arn:aws:devicefarm:us-west-2:123456789101:project:5e01a8c7-c861-4c0a-b1d5-12345EXAMPLE",
    "created": "1472660939.152"
  }
}
```

Represents the result of a create project request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|object|false|none|none|

<h2 id="tocS_CreateProjectRequest">CreateProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectrequest"></a>
<a id="schema_CreateProjectRequest"></a>
<a id="tocScreateprojectrequest"></a>
<a id="tocscreateprojectrequest"></a>

```json
{
  "name": {},
  "defaultJobTimeoutMinutes": {},
  "vpcConfig": {
    "securityGroupIds": {},
    "subnetIds": {},
    "vpcId": {}
  }
}
```

Represents a request to the create project operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|defaultJobTimeoutMinutes|object|false|none|none|
|vpcConfig|object|false|none|none|

<h2 id="tocS_TagOperationException">TagOperationException</h2>
<!-- backwards compatibility -->
<a id="schematagoperationexception"></a>
<a id="schema_TagOperationException"></a>
<a id="tocStagoperationexception"></a>
<a id="tocstagoperationexception"></a>

```json
null
```

<h2 id="tocS_CreateRemoteAccessSessionResult">CreateRemoteAccessSessionResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateremoteaccesssessionresult"></a>
<a id="schema_CreateRemoteAccessSessionResult"></a>
<a id="tocScreateremoteaccesssessionresult"></a>
<a id="tocscreateremoteaccesssessionresult"></a>

```json
{
  "remoteAccessSession": {}
}
```

Represents the server response from a request to create a remote access session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remoteAccessSession|object|false|none|none|

<h2 id="tocS_CreateRemoteAccessSessionRequest">CreateRemoteAccessSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateremoteaccesssessionrequest"></a>
<a id="schema_CreateRemoteAccessSessionRequest"></a>
<a id="tocScreateremoteaccesssessionrequest"></a>
<a id="tocscreateremoteaccesssessionrequest"></a>

```json
{
  "projectArn": {},
  "deviceArn": {},
  "instanceArn": {},
  "sshPublicKey": {},
  "remoteDebugEnabled": {},
  "remoteRecordEnabled": {},
  "remoteRecordAppArn": {},
  "name": {},
  "clientId": {},
  "configuration": {
    "billingMethod": {},
    "vpceConfigurationArns": {}
  },
  "interactionMode": {},
  "skipAppResign": {}
}
```

Creates and submits a request to start a remote access session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectArn|object|true|none|none|
|deviceArn|object|true|none|none|
|instanceArn|object|false|none|none|
|sshPublicKey|object|false|none|none|
|remoteDebugEnabled|object|false|none|none|
|remoteRecordEnabled|object|false|none|none|
|remoteRecordAppArn|object|false|none|none|
|name|object|false|none|none|
|clientId|object|false|none|none|
|configuration|object|false|none|none|
|interactionMode|object|false|none|none|
|skipAppResign|object|false|none|none|

<h2 id="tocS_CreateTestGridProjectResult">CreateTestGridProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatetestgridprojectresult"></a>
<a id="schema_CreateTestGridProjectResult"></a>
<a id="tocScreatetestgridprojectresult"></a>
<a id="tocscreatetestgridprojectresult"></a>

```json
{
  "testGridProject": {
    "arn": {},
    "name": {},
    "description": {},
    "vpcConfig": {
      "securityGroupIds": {},
      "subnetIds": {},
      "vpcId": {}
    },
    "created": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testGridProject|object|false|none|none|

<h2 id="tocS_CreateTestGridProjectRequest">CreateTestGridProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetestgridprojectrequest"></a>
<a id="schema_CreateTestGridProjectRequest"></a>
<a id="tocScreatetestgridprojectrequest"></a>
<a id="tocscreatetestgridprojectrequest"></a>

```json
{
  "name": {},
  "description": {},
  "vpcConfig": {
    "securityGroupIds": {},
    "subnetIds": {},
    "vpcId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|vpcConfig|object|false|none|none|

<h2 id="tocS_InternalServiceException">InternalServiceException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceexception"></a>
<a id="schema_InternalServiceException"></a>
<a id="tocSinternalserviceexception"></a>
<a id="tocsinternalserviceexception"></a>

```json
null
```

<h2 id="tocS_CreateTestGridUrlResult">CreateTestGridUrlResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatetestgridurlresult"></a>
<a id="schema_CreateTestGridUrlResult"></a>
<a id="tocScreatetestgridurlresult"></a>
<a id="tocscreatetestgridurlresult"></a>

```json
{
  "url": {},
  "expires": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|object|false|none|none|
|expires|object|false|none|none|

<h2 id="tocS_CreateTestGridUrlRequest">CreateTestGridUrlRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetestgridurlrequest"></a>
<a id="schema_CreateTestGridUrlRequest"></a>
<a id="tocScreatetestgridurlrequest"></a>
<a id="tocscreatetestgridurlrequest"></a>

```json
{
  "projectArn": {},
  "expiresInSeconds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectArn|object|true|none|none|
|expiresInSeconds|object|true|none|none|

<h2 id="tocS_CreateUploadResult">CreateUploadResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateuploadresult"></a>
<a id="schema_CreateUploadResult"></a>
<a id="tocScreateuploadresult"></a>
<a id="tocscreateuploadresult"></a>

```json
{
  "upload": {
    "name": "MyAppiumPythonUpload",
    "type": "APPIUM_PYTHON_TEST_PACKAGE",
    "arn": "arn:aws:devicefarm:us-west-2:123456789101:upload:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/b5340a65-3da7-4da6-a26e-12345EXAMPLE",
    "created": "1472661404.186",
    "status": "INITIALIZED",
    "url": "https://prod-us-west-2-uploads.s3-us-west-2.amazonaws.com/arn%3Aaws%3Adevicefarm%3Aus-west-2%3A123456789101%3Aproject%3A5e01a8c7-c861-4c0a-b1d5-12345EXAMPLE/uploads/arn%3Aaws%3Adevicefarm%3Aus-west-2%3A123456789101%3Aupload%3A5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/b5340a65-3da7-4da6-a26e-12345EXAMPLE/MyAppiumPythonUpload?AWSAccessKeyId=1234567891011EXAMPLE&Expires=1472747804&Signature=1234567891011EXAMPLE"
  }
}
```

Represents the result of a create upload request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|upload|object|false|none|none|

<h2 id="tocS_CreateUploadRequest">CreateUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuploadrequest"></a>
<a id="schema_CreateUploadRequest"></a>
<a id="tocScreateuploadrequest"></a>
<a id="tocscreateuploadrequest"></a>

```json
{
  "projectArn": {},
  "name": {},
  "type": {},
  "contentType": {}
}
```

Represents a request to the create upload operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectArn|object|true|none|none|
|name|object|true|none|none|
|type|object|true|none|none|
|contentType|object|false|none|none|

<h2 id="tocS_CreateVPCEConfigurationResult">CreateVPCEConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpceconfigurationresult"></a>
<a id="schema_CreateVPCEConfigurationResult"></a>
<a id="tocScreatevpceconfigurationresult"></a>
<a id="tocscreatevpceconfigurationresult"></a>

```json
{
  "vpceConfiguration": {
    "arn": {},
    "vpceConfigurationName": {},
    "vpceServiceName": {},
    "serviceDnsName": {},
    "vpceConfigurationDescription": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vpceConfiguration|object|false|none|none|

<h2 id="tocS_CreateVPCEConfigurationRequest">CreateVPCEConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpceconfigurationrequest"></a>
<a id="schema_CreateVPCEConfigurationRequest"></a>
<a id="tocScreatevpceconfigurationrequest"></a>
<a id="tocscreatevpceconfigurationrequest"></a>

```json
{
  "vpceConfigurationName": {},
  "vpceServiceName": {},
  "serviceDnsName": {},
  "vpceConfigurationDescription": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vpceConfigurationName|object|true|none|none|
|vpceServiceName|object|true|none|none|
|serviceDnsName|object|true|none|none|
|vpceConfigurationDescription|object|false|none|none|

<h2 id="tocS_DeleteDevicePoolResult">DeleteDevicePoolResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedevicepoolresult"></a>
<a id="schema_DeleteDevicePoolResult"></a>
<a id="tocSdeletedevicepoolresult"></a>
<a id="tocsdeletedevicepoolresult"></a>

```json
{}
```

Represents the result of a delete device pool request.

<h2 id="tocS_DeleteDevicePoolRequest">DeleteDevicePoolRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedevicepoolrequest"></a>
<a id="schema_DeleteDevicePoolRequest"></a>
<a id="tocSdeletedevicepoolrequest"></a>
<a id="tocsdeletedevicepoolrequest"></a>

```json
{
  "arn": {}
}
```

Represents a request to the delete device pool operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_DeleteInstanceProfileResult">DeleteInstanceProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinstanceprofileresult"></a>
<a id="schema_DeleteInstanceProfileResult"></a>
<a id="tocSdeleteinstanceprofileresult"></a>
<a id="tocsdeleteinstanceprofileresult"></a>

```json
{}
```

<h2 id="tocS_DeleteInstanceProfileRequest">DeleteInstanceProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinstanceprofilerequest"></a>
<a id="schema_DeleteInstanceProfileRequest"></a>
<a id="tocSdeleteinstanceprofilerequest"></a>
<a id="tocsdeleteinstanceprofilerequest"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_DeleteNetworkProfileResult">DeleteNetworkProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletenetworkprofileresult"></a>
<a id="schema_DeleteNetworkProfileResult"></a>
<a id="tocSdeletenetworkprofileresult"></a>
<a id="tocsdeletenetworkprofileresult"></a>

```json
{}
```

<h2 id="tocS_DeleteNetworkProfileRequest">DeleteNetworkProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletenetworkprofilerequest"></a>
<a id="schema_DeleteNetworkProfileRequest"></a>
<a id="tocSdeletenetworkprofilerequest"></a>
<a id="tocsdeletenetworkprofilerequest"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_DeleteProjectResult">DeleteProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectresult"></a>
<a id="schema_DeleteProjectResult"></a>
<a id="tocSdeleteprojectresult"></a>
<a id="tocsdeleteprojectresult"></a>

```json
{}
```

Represents the result of a delete project request.

<h2 id="tocS_DeleteProjectRequest">DeleteProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectrequest"></a>
<a id="schema_DeleteProjectRequest"></a>
<a id="tocSdeleteprojectrequest"></a>
<a id="tocsdeleteprojectrequest"></a>

```json
{
  "arn": {}
}
```

Represents a request to the delete project operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_DeleteRemoteAccessSessionResult">DeleteRemoteAccessSessionResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteremoteaccesssessionresult"></a>
<a id="schema_DeleteRemoteAccessSessionResult"></a>
<a id="tocSdeleteremoteaccesssessionresult"></a>
<a id="tocsdeleteremoteaccesssessionresult"></a>

```json
{}
```

The response from the server when a request is made to delete the remote access session.

<h2 id="tocS_DeleteRemoteAccessSessionRequest">DeleteRemoteAccessSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteremoteaccesssessionrequest"></a>
<a id="schema_DeleteRemoteAccessSessionRequest"></a>
<a id="tocSdeleteremoteaccesssessionrequest"></a>
<a id="tocsdeleteremoteaccesssessionrequest"></a>

```json
{
  "arn": {}
}
```

Represents the request to delete the specified remote access session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_DeleteRunResult">DeleteRunResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleterunresult"></a>
<a id="schema_DeleteRunResult"></a>
<a id="tocSdeleterunresult"></a>
<a id="tocsdeleterunresult"></a>

```json
{}
```

Represents the result of a delete run request.

<h2 id="tocS_DeleteRunRequest">DeleteRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterunrequest"></a>
<a id="schema_DeleteRunRequest"></a>
<a id="tocSdeleterunrequest"></a>
<a id="tocsdeleterunrequest"></a>

```json
{
  "arn": {}
}
```

Represents a request to the delete run operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_DeleteTestGridProjectResult">DeleteTestGridProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletetestgridprojectresult"></a>
<a id="schema_DeleteTestGridProjectResult"></a>
<a id="tocSdeletetestgridprojectresult"></a>
<a id="tocsdeletetestgridprojectresult"></a>

```json
{}
```

<h2 id="tocS_DeleteTestGridProjectRequest">DeleteTestGridProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetestgridprojectrequest"></a>
<a id="schema_DeleteTestGridProjectRequest"></a>
<a id="tocSdeletetestgridprojectrequest"></a>
<a id="tocsdeletetestgridprojectrequest"></a>

```json
{
  "projectArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectArn|object|true|none|none|

<h2 id="tocS_CannotDeleteException">CannotDeleteException</h2>
<!-- backwards compatibility -->
<a id="schemacannotdeleteexception"></a>
<a id="schema_CannotDeleteException"></a>
<a id="tocScannotdeleteexception"></a>
<a id="tocscannotdeleteexception"></a>

```json
null
```

<h2 id="tocS_DeleteUploadResult">DeleteUploadResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuploadresult"></a>
<a id="schema_DeleteUploadResult"></a>
<a id="tocSdeleteuploadresult"></a>
<a id="tocsdeleteuploadresult"></a>

```json
{}
```

Represents the result of a delete upload request.

<h2 id="tocS_DeleteUploadRequest">DeleteUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuploadrequest"></a>
<a id="schema_DeleteUploadRequest"></a>
<a id="tocSdeleteuploadrequest"></a>
<a id="tocsdeleteuploadrequest"></a>

```json
{
  "arn": {}
}
```

Represents a request to the delete upload operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_DeleteVPCEConfigurationResult">DeleteVPCEConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpceconfigurationresult"></a>
<a id="schema_DeleteVPCEConfigurationResult"></a>
<a id="tocSdeletevpceconfigurationresult"></a>
<a id="tocsdeletevpceconfigurationresult"></a>

```json
{}
```

<h2 id="tocS_DeleteVPCEConfigurationRequest">DeleteVPCEConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpceconfigurationrequest"></a>
<a id="schema_DeleteVPCEConfigurationRequest"></a>
<a id="tocSdeletevpceconfigurationrequest"></a>
<a id="tocsdeletevpceconfigurationrequest"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_InvalidOperationException">InvalidOperationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidoperationexception"></a>
<a id="schema_InvalidOperationException"></a>
<a id="tocSinvalidoperationexception"></a>
<a id="tocsinvalidoperationexception"></a>

```json
null
```

<h2 id="tocS_GetAccountSettingsResult">GetAccountSettingsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountsettingsresult"></a>
<a id="schema_GetAccountSettingsResult"></a>
<a id="tocSgetaccountsettingsresult"></a>
<a id="tocsgetaccountsettingsresult"></a>

```json
{
  "accountSettings": {
    "awsAccountNumber": "123456789101",
    "unmeteredDevices": {
      "ANDROID": 1,
      "IOS": 2
    }
  }
}
```

Represents the account settings return values from the <code>GetAccountSettings</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountSettings|object|false|none|none|

<h2 id="tocS_GetAccountSettingsRequest">GetAccountSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountsettingsrequest"></a>
<a id="schema_GetAccountSettingsRequest"></a>
<a id="tocSgetaccountsettingsrequest"></a>
<a id="tocsgetaccountsettingsrequest"></a>

```json
{}
```

Represents the request sent to retrieve the account settings.

<h2 id="tocS_GetDeviceResult">GetDeviceResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdeviceresult"></a>
<a id="schema_GetDeviceResult"></a>
<a id="tocSgetdeviceresult"></a>
<a id="tocsgetdeviceresult"></a>

```json
{
  "device": {
    "name": "LG G2 (Sprint)",
    "arn": "arn:aws:devicefarm:us-west-2::device:A0E6E6E1059E45918208DF75B2B7EF6C",
    "cpu": {
      "architecture": "armeabi-v7a",
      "clock": 2265.6,
      "frequency": "MHz"
    },
    "formFactor": "PHONE",
    "heapSize": 256000000,
    "image": "75B2B7EF6C12345EXAMPLE",
    "manufacturer": "LG",
    "memory": 16000000000,
    "model": "G2 (Sprint)",
    "os": "4.2.2",
    "platform": "ANDROID",
    "resolution": {
      "height": 1920,
      "width": 1080
    }
  }
}
```

Represents the result of a get device request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|object|false|none|none|

<h2 id="tocS_GetDeviceRequest">GetDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicerequest"></a>
<a id="schema_GetDeviceRequest"></a>
<a id="tocSgetdevicerequest"></a>
<a id="tocsgetdevicerequest"></a>

```json
{
  "arn": {}
}
```

Represents a request to the get device request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_GetDeviceInstanceResult">GetDeviceInstanceResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdeviceinstanceresult"></a>
<a id="schema_GetDeviceInstanceResult"></a>
<a id="tocSgetdeviceinstanceresult"></a>
<a id="tocsgetdeviceinstanceresult"></a>

```json
{
  "deviceInstance": {
    "arn": {},
    "deviceArn": {},
    "labels": {},
    "status": {},
    "udid": {},
    "instanceProfile": {
      "arn": {},
      "packageCleanup": {},
      "excludeAppPackagesFromCleanup": {},
      "rebootAfterUse": {},
      "name": {},
      "description": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceInstance|object|false|none|none|

<h2 id="tocS_GetDeviceInstanceRequest">GetDeviceInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdeviceinstancerequest"></a>
<a id="schema_GetDeviceInstanceRequest"></a>
<a id="tocSgetdeviceinstancerequest"></a>
<a id="tocsgetdeviceinstancerequest"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_GetDevicePoolResult">GetDevicePoolResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicepoolresult"></a>
<a id="schema_GetDevicePoolResult"></a>
<a id="tocSgetdevicepoolresult"></a>
<a id="tocsgetdevicepoolresult"></a>

```json
{
  "devicePool": {}
}
```

Represents the result of a get device pool request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devicePool|object|false|none|none|

<h2 id="tocS_GetDevicePoolRequest">GetDevicePoolRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicepoolrequest"></a>
<a id="schema_GetDevicePoolRequest"></a>
<a id="tocSgetdevicepoolrequest"></a>
<a id="tocsgetdevicepoolrequest"></a>

```json
{
  "arn": {}
}
```

Represents a request to the get device pool operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_GetDevicePoolCompatibilityResult">GetDevicePoolCompatibilityResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicepoolcompatibilityresult"></a>
<a id="schema_GetDevicePoolCompatibilityResult"></a>
<a id="tocSgetdevicepoolcompatibilityresult"></a>
<a id="tocsgetdevicepoolcompatibilityresult"></a>

```json
{
  "compatibleDevices": [],
  "incompatibleDevices": []
}
```

Represents the result of describe device pool compatibility request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compatibleDevices|object|false|none|none|
|incompatibleDevices|object|false|none|none|

<h2 id="tocS_GetDevicePoolCompatibilityRequest">GetDevicePoolCompatibilityRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicepoolcompatibilityrequest"></a>
<a id="schema_GetDevicePoolCompatibilityRequest"></a>
<a id="tocSgetdevicepoolcompatibilityrequest"></a>
<a id="tocsgetdevicepoolcompatibilityrequest"></a>

```json
{
  "devicePoolArn": {},
  "appArn": {},
  "testType": {},
  "test": {
    "type": {},
    "testPackageArn": {},
    "testSpecArn": {},
    "filter": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    }
  },
  "configuration": {
    "extraDataPackageArn": {},
    "networkProfileArn": {},
    "locale": {},
    "location": {
      "latitude": {},
      "longitude": {}
    },
    "vpceConfigurationArns": {},
    "customerArtifactPaths": {
      "iosPaths": {},
      "androidPaths": {},
      "deviceHostPaths": {}
    },
    "radios": {
      "wifi": {},
      "bluetooth": {},
      "nfc": {},
      "gps": {}
    },
    "auxiliaryApps": {},
    "billingMethod": {}
  }
}
```

Represents a request to the get device pool compatibility operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devicePoolArn|object|true|none|none|
|appArn|object|false|none|none|
|testType|object|false|none|none|
|test|object|false|none|none|
|configuration|object|false|none|none|

<h2 id="tocS_GetInstanceProfileResult">GetInstanceProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemagetinstanceprofileresult"></a>
<a id="schema_GetInstanceProfileResult"></a>
<a id="tocSgetinstanceprofileresult"></a>
<a id="tocsgetinstanceprofileresult"></a>

```json
{
  "instanceProfile": {
    "arn": {},
    "packageCleanup": {},
    "excludeAppPackagesFromCleanup": {},
    "rebootAfterUse": {},
    "name": {},
    "description": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceProfile|object|false|none|none|

<h2 id="tocS_GetInstanceProfileRequest">GetInstanceProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinstanceprofilerequest"></a>
<a id="schema_GetInstanceProfileRequest"></a>
<a id="tocSgetinstanceprofilerequest"></a>
<a id="tocsgetinstanceprofilerequest"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_GetJobResult">GetJobResult</h2>
<!-- backwards compatibility -->
<a id="schemagetjobresult"></a>
<a id="schema_GetJobResult"></a>
<a id="tocSgetjobresult"></a>
<a id="tocsgetjobresult"></a>

```json
{
  "job": {}
}
```

Represents the result of a get job request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|object|false|none|none|

<h2 id="tocS_GetJobRequest">GetJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetjobrequest"></a>
<a id="schema_GetJobRequest"></a>
<a id="tocSgetjobrequest"></a>
<a id="tocsgetjobrequest"></a>

```json
{
  "arn": {}
}
```

Represents a request to the get job operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_GetNetworkProfileResult">GetNetworkProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworkprofileresult"></a>
<a id="schema_GetNetworkProfileResult"></a>
<a id="tocSgetnetworkprofileresult"></a>
<a id="tocsgetnetworkprofileresult"></a>

```json
{
  "networkProfile": {
    "arn": {},
    "name": {},
    "description": {},
    "type": {},
    "uplinkBandwidthBits": {},
    "downlinkBandwidthBits": {},
    "uplinkDelayMs": {},
    "downlinkDelayMs": {},
    "uplinkJitterMs": {},
    "downlinkJitterMs": {},
    "uplinkLossPercent": {},
    "downlinkLossPercent": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networkProfile|object|false|none|none|

<h2 id="tocS_GetNetworkProfileRequest">GetNetworkProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworkprofilerequest"></a>
<a id="schema_GetNetworkProfileRequest"></a>
<a id="tocSgetnetworkprofilerequest"></a>
<a id="tocsgetnetworkprofilerequest"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_GetOfferingStatusResult">GetOfferingStatusResult</h2>
<!-- backwards compatibility -->
<a id="schemagetofferingstatusresult"></a>
<a id="schema_GetOfferingStatusResult"></a>
<a id="tocSgetofferingstatusresult"></a>
<a id="tocsgetofferingstatusresult"></a>

```json
{
  "current": {
    "D68B3C05-1BA6-4360-BC69-12345EXAMPLE": {
      "offering": {
        "type": "RECURRING",
        "description": "Android Remote Access Unmetered Device Slot",
        "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
        "platform": "ANDROID"
      },
      "quantity": 1
    }
  },
  "nextPeriod": {
    "D68B3C05-1BA6-4360-BC69-12345EXAMPLE": {
      "effectiveOn": "1472688000",
      "offering": {
        "type": "RECURRING",
        "description": "Android Remote Access Unmetered Device Slot",
        "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
        "platform": "ANDROID"
      },
      "quantity": 1
    }
  }
}
```

Returns the status result for a device offering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current|object|false|none|none|
|nextPeriod|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetOfferingStatusRequest">GetOfferingStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetofferingstatusrequest"></a>
<a id="schema_GetOfferingStatusRequest"></a>
<a id="tocSgetofferingstatusrequest"></a>
<a id="tocsgetofferingstatusrequest"></a>

```json
{
  "nextToken": {}
}
```

Represents the request to retrieve the offering status for the specified customer or account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|

<h2 id="tocS_NotEligibleException">NotEligibleException</h2>
<!-- backwards compatibility -->
<a id="schemanoteligibleexception"></a>
<a id="schema_NotEligibleException"></a>
<a id="tocSnoteligibleexception"></a>
<a id="tocsnoteligibleexception"></a>

```json
null
```

<h2 id="tocS_GetProjectResult">GetProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemagetprojectresult"></a>
<a id="schema_GetProjectResult"></a>
<a id="tocSgetprojectresult"></a>
<a id="tocsgetprojectresult"></a>

```json
{
  "project": {
    "name": "My Project",
    "arn": "arn:aws:devicefarm:us-west-2:123456789101:project:5e01a8c7-c861-4c0a-b1d5-12345EXAMPLE",
    "created": "1472660939.152"
  }
}
```

Represents the result of a get project request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|object|false|none|none|

<h2 id="tocS_GetProjectRequest">GetProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetprojectrequest"></a>
<a id="schema_GetProjectRequest"></a>
<a id="tocSgetprojectrequest"></a>
<a id="tocsgetprojectrequest"></a>

```json
{
  "arn": {}
}
```

Represents a request to the get project operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_GetRemoteAccessSessionResult">GetRemoteAccessSessionResult</h2>
<!-- backwards compatibility -->
<a id="schemagetremoteaccesssessionresult"></a>
<a id="schema_GetRemoteAccessSessionResult"></a>
<a id="tocSgetremoteaccesssessionresult"></a>
<a id="tocsgetremoteaccesssessionresult"></a>

```json
{
  "remoteAccessSession": {}
}
```

Represents the response from the server that lists detailed information about the remote access session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remoteAccessSession|object|false|none|none|

<h2 id="tocS_GetRemoteAccessSessionRequest">GetRemoteAccessSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetremoteaccesssessionrequest"></a>
<a id="schema_GetRemoteAccessSessionRequest"></a>
<a id="tocSgetremoteaccesssessionrequest"></a>
<a id="tocsgetremoteaccesssessionrequest"></a>

```json
{
  "arn": {}
}
```

Represents the request to get information about the specified remote access session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_GetRunResult">GetRunResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrunresult"></a>
<a id="schema_GetRunResult"></a>
<a id="tocSgetrunresult"></a>
<a id="tocsgetrunresult"></a>

```json
{
  "run": {
    "name": "My Test Run",
    "type": "BUILTIN_EXPLORER",
    "arn": "arn:aws:devicefarm:us-west-2:123456789101:run:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/0fcac17b-6122-44d7-ae5a-12345EXAMPLE",
    "billingMethod": "METERED",
    "completedJobs": 0,
    "counters": {
      "errored": 0,
      "failed": 0,
      "passed": 0,
      "skipped": 0,
      "stopped": 0,
      "total": 0,
      "warned": 0
    },
    "created": "1472667509.852",
    "deviceMinutes": {
      "metered": 0,
      "total": 0,
      "unmetered": 0
    },
    "platform": "ANDROID",
    "result": "PENDING",
    "status": "RUNNING",
    "totalJobs": 3
  }
}
```

Represents the result of a get run request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|run|object|false|none|none|

<h2 id="tocS_GetRunRequest">GetRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrunrequest"></a>
<a id="schema_GetRunRequest"></a>
<a id="tocSgetrunrequest"></a>
<a id="tocsgetrunrequest"></a>

```json
{
  "arn": {}
}
```

Represents a request to the get run operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_GetSuiteResult">GetSuiteResult</h2>
<!-- backwards compatibility -->
<a id="schemagetsuiteresult"></a>
<a id="schema_GetSuiteResult"></a>
<a id="tocSgetsuiteresult"></a>
<a id="tocsgetsuiteresult"></a>

```json
{
  "suite": {}
}
```

Represents the result of a get suite request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suite|object|false|none|none|

<h2 id="tocS_GetSuiteRequest">GetSuiteRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsuiterequest"></a>
<a id="schema_GetSuiteRequest"></a>
<a id="tocSgetsuiterequest"></a>
<a id="tocsgetsuiterequest"></a>

```json
{
  "arn": {}
}
```

Represents a request to the get suite operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_GetTestResult">GetTestResult</h2>
<!-- backwards compatibility -->
<a id="schemagettestresult"></a>
<a id="schema_GetTestResult"></a>
<a id="tocSgettestresult"></a>
<a id="tocsgettestresult"></a>

```json
{
  "test": {}
}
```

Represents the result of a get test request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|test|object|false|none|none|

<h2 id="tocS_GetTestRequest">GetTestRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettestrequest"></a>
<a id="schema_GetTestRequest"></a>
<a id="tocSgettestrequest"></a>
<a id="tocsgettestrequest"></a>

```json
{
  "arn": {}
}
```

Represents a request to the get test operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_GetTestGridProjectResult">GetTestGridProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemagettestgridprojectresult"></a>
<a id="schema_GetTestGridProjectResult"></a>
<a id="tocSgettestgridprojectresult"></a>
<a id="tocsgettestgridprojectresult"></a>

```json
{
  "testGridProject": {
    "arn": {},
    "name": {},
    "description": {},
    "vpcConfig": {
      "securityGroupIds": {},
      "subnetIds": {},
      "vpcId": {}
    },
    "created": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testGridProject|object|false|none|none|

<h2 id="tocS_GetTestGridProjectRequest">GetTestGridProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettestgridprojectrequest"></a>
<a id="schema_GetTestGridProjectRequest"></a>
<a id="tocSgettestgridprojectrequest"></a>
<a id="tocsgettestgridprojectrequest"></a>

```json
{
  "projectArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectArn|object|true|none|none|

<h2 id="tocS_GetTestGridSessionResult">GetTestGridSessionResult</h2>
<!-- backwards compatibility -->
<a id="schemagettestgridsessionresult"></a>
<a id="schema_GetTestGridSessionResult"></a>
<a id="tocSgettestgridsessionresult"></a>
<a id="tocsgettestgridsessionresult"></a>

```json
{
  "testGridSession": {
    "arn": {},
    "status": {},
    "created": {},
    "ended": {},
    "billingMinutes": {},
    "seleniumProperties": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testGridSession|object|false|none|none|

<h2 id="tocS_GetTestGridSessionRequest">GetTestGridSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettestgridsessionrequest"></a>
<a id="schema_GetTestGridSessionRequest"></a>
<a id="tocSgettestgridsessionrequest"></a>
<a id="tocsgettestgridsessionrequest"></a>

```json
{
  "projectArn": {},
  "sessionId": {},
  "sessionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectArn|object|false|none|none|
|sessionId|object|false|none|none|
|sessionArn|object|false|none|none|

<h2 id="tocS_GetUploadResult">GetUploadResult</h2>
<!-- backwards compatibility -->
<a id="schemagetuploadresult"></a>
<a id="schema_GetUploadResult"></a>
<a id="tocSgetuploadresult"></a>
<a id="tocsgetuploadresult"></a>

```json
{
  "upload": {}
}
```

Represents the result of a get upload request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|upload|object|false|none|none|

<h2 id="tocS_GetUploadRequest">GetUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetuploadrequest"></a>
<a id="schema_GetUploadRequest"></a>
<a id="tocSgetuploadrequest"></a>
<a id="tocsgetuploadrequest"></a>

```json
{
  "arn": {}
}
```

Represents a request to the get upload operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_GetVPCEConfigurationResult">GetVPCEConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemagetvpceconfigurationresult"></a>
<a id="schema_GetVPCEConfigurationResult"></a>
<a id="tocSgetvpceconfigurationresult"></a>
<a id="tocsgetvpceconfigurationresult"></a>

```json
{
  "vpceConfiguration": {
    "arn": {},
    "vpceConfigurationName": {},
    "vpceServiceName": {},
    "serviceDnsName": {},
    "vpceConfigurationDescription": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vpceConfiguration|object|false|none|none|

<h2 id="tocS_GetVPCEConfigurationRequest">GetVPCEConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetvpceconfigurationrequest"></a>
<a id="schema_GetVPCEConfigurationRequest"></a>
<a id="tocSgetvpceconfigurationrequest"></a>
<a id="tocsgetvpceconfigurationrequest"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_InstallToRemoteAccessSessionResult">InstallToRemoteAccessSessionResult</h2>
<!-- backwards compatibility -->
<a id="schemainstalltoremoteaccesssessionresult"></a>
<a id="schema_InstallToRemoteAccessSessionResult"></a>
<a id="tocSinstalltoremoteaccesssessionresult"></a>
<a id="tocsinstalltoremoteaccesssessionresult"></a>

```json
{
  "appUpload": {}
}
```

Represents the response from the server after AWS Device Farm makes a request to install to a remote access session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appUpload|object|false|none|none|

<h2 id="tocS_InstallToRemoteAccessSessionRequest">InstallToRemoteAccessSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemainstalltoremoteaccesssessionrequest"></a>
<a id="schema_InstallToRemoteAccessSessionRequest"></a>
<a id="tocSinstalltoremoteaccesssessionrequest"></a>
<a id="tocsinstalltoremoteaccesssessionrequest"></a>

```json
{
  "remoteAccessSessionArn": {},
  "appArn": {}
}
```

Represents the request to install an Android application (in .apk format) or an iOS application (in .ipa format) as part of a remote access session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remoteAccessSessionArn|object|true|none|none|
|appArn|object|true|none|none|

<h2 id="tocS_ListArtifactsResult">ListArtifactsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistartifactsresult"></a>
<a id="schema_ListArtifactsResult"></a>
<a id="tocSlistartifactsresult"></a>
<a id="tocslistartifactsresult"></a>

```json
{
  "artifacts": {},
  "nextToken": {}
}
```

Represents the result of a list artifacts operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifacts|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListArtifactsRequest">ListArtifactsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistartifactsrequest"></a>
<a id="schema_ListArtifactsRequest"></a>
<a id="tocSlistartifactsrequest"></a>
<a id="tocslistartifactsrequest"></a>

```json
{
  "arn": {},
  "type": {},
  "nextToken": {}
}
```

Represents a request to the list artifacts operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|type|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDeviceInstancesResult">ListDeviceInstancesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistdeviceinstancesresult"></a>
<a id="schema_ListDeviceInstancesResult"></a>
<a id="tocSlistdeviceinstancesresult"></a>
<a id="tocslistdeviceinstancesresult"></a>

```json
{
  "deviceInstances": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceInstances|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDeviceInstancesRequest">ListDeviceInstancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdeviceinstancesrequest"></a>
<a id="schema_ListDeviceInstancesRequest"></a>
<a id="tocSlistdeviceinstancesrequest"></a>
<a id="tocslistdeviceinstancesrequest"></a>

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDevicePoolsResult">ListDevicePoolsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicepoolsresult"></a>
<a id="schema_ListDevicePoolsResult"></a>
<a id="tocSlistdevicepoolsresult"></a>
<a id="tocslistdevicepoolsresult"></a>

```json
{
  "devicePools": [
    {
      "name": "Top Devices",
      "arn": "arn:aws:devicefarm:us-west-2::devicepool:082d10e5-d7d7-48a5-ba5c-12345EXAMPLE",
      "description": "Top devices",
      "rules": [
        {
          "value": "[\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\"]",
          "attribute": "ARN",
          "operator": "IN"
        }
      ]
    },
    {
      "name": "My Android Device Pool",
      "arn": "arn:aws:devicefarm:us-west-2:123456789101:devicepool:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/bf96e75a-28f6-4e61-b6a7-12345EXAMPLE",
      "description": "Samsung Galaxy Android devices",
      "rules": [
        {
          "value": "[\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\"]",
          "attribute": "ARN",
          "operator": "IN"
        }
      ]
    }
  ]
}
```

Represents the result of a list device pools request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devicePools|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDevicePoolsRequest">ListDevicePoolsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicepoolsrequest"></a>
<a id="schema_ListDevicePoolsRequest"></a>
<a id="tocSlistdevicepoolsrequest"></a>
<a id="tocslistdevicepoolsrequest"></a>

```json
{
  "arn": {},
  "type": {},
  "nextToken": {}
}
```

Represents the result of a list device pools request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|type|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDevicesResult">ListDevicesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicesresult"></a>
<a id="schema_ListDevicesResult"></a>
<a id="tocSlistdevicesresult"></a>
<a id="tocslistdevicesresult"></a>

```json
{}
```

Represents the result of a list devices operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDevicesRequest">ListDevicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicesrequest"></a>
<a id="schema_ListDevicesRequest"></a>
<a id="tocSlistdevicesrequest"></a>
<a id="tocslistdevicesrequest"></a>

```json
{
  "arn": {},
  "nextToken": {},
  "filters": {}
}
```

Represents the result of a list devices request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|nextToken|object|false|none|none|
|filters|object|false|none|none|

<h2 id="tocS_ListInstanceProfilesResult">ListInstanceProfilesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistinstanceprofilesresult"></a>
<a id="schema_ListInstanceProfilesResult"></a>
<a id="tocSlistinstanceprofilesresult"></a>
<a id="tocslistinstanceprofilesresult"></a>

```json
{
  "instanceProfiles": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceProfiles|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListInstanceProfilesRequest">ListInstanceProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinstanceprofilesrequest"></a>
<a id="schema_ListInstanceProfilesRequest"></a>
<a id="tocSlistinstanceprofilesrequest"></a>
<a id="tocslistinstanceprofilesrequest"></a>

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListJobsResult">ListJobsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsresult"></a>
<a id="schema_ListJobsResult"></a>
<a id="tocSlistjobsresult"></a>
<a id="tocslistjobsresult"></a>

```json
{
  "jobs": {},
  "nextToken": {}
}
```

Represents the result of a list jobs request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListJobsRequest">ListJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsrequest"></a>
<a id="schema_ListJobsRequest"></a>
<a id="tocSlistjobsrequest"></a>
<a id="tocslistjobsrequest"></a>

```json
{
  "arn": {},
  "nextToken": {}
}
```

Represents a request to the list jobs operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListNetworkProfilesResult">ListNetworkProfilesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistnetworkprofilesresult"></a>
<a id="schema_ListNetworkProfilesResult"></a>
<a id="tocSlistnetworkprofilesresult"></a>
<a id="tocslistnetworkprofilesresult"></a>

```json
{
  "networkProfiles": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networkProfiles|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListNetworkProfilesRequest">ListNetworkProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistnetworkprofilesrequest"></a>
<a id="schema_ListNetworkProfilesRequest"></a>
<a id="tocSlistnetworkprofilesrequest"></a>
<a id="tocslistnetworkprofilesrequest"></a>

```json
{
  "arn": {},
  "type": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|type|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListOfferingPromotionsResult">ListOfferingPromotionsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistofferingpromotionsresult"></a>
<a id="schema_ListOfferingPromotionsResult"></a>
<a id="tocSlistofferingpromotionsresult"></a>
<a id="tocslistofferingpromotionsresult"></a>

```json
{
  "offeringPromotions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offeringPromotions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListOfferingPromotionsRequest">ListOfferingPromotionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistofferingpromotionsrequest"></a>
<a id="schema_ListOfferingPromotionsRequest"></a>
<a id="tocSlistofferingpromotionsrequest"></a>
<a id="tocslistofferingpromotionsrequest"></a>

```json
{
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|

<h2 id="tocS_ListOfferingTransactionsResult">ListOfferingTransactionsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistofferingtransactionsresult"></a>
<a id="schema_ListOfferingTransactionsResult"></a>
<a id="tocSlistofferingtransactionsresult"></a>
<a id="tocslistofferingtransactionsresult"></a>

```json
{
  "offeringTransactions": [
    {
      "cost": {
        "amount": 0,
        "currencyCode": "USD"
      },
      "createdOn": "1470021420",
      "offeringStatus": {
        "type": "RENEW",
        "effectiveOn": "1472688000",
        "offering": {
          "type": "RECURRING",
          "description": "Android Remote Access Unmetered Device Slot",
          "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
          "platform": "ANDROID"
        },
        "quantity": 0
      },
      "transactionId": "03728003-d1ea-4851-abd6-12345EXAMPLE"
    },
    {
      "cost": {
        "amount": 250,
        "currencyCode": "USD"
      },
      "createdOn": "1470021420",
      "offeringStatus": {
        "type": "PURCHASE",
        "effectiveOn": "1470021420",
        "offering": {
          "type": "RECURRING",
          "description": "Android Remote Access Unmetered Device Slot",
          "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
          "platform": "ANDROID"
        },
        "quantity": 1
      },
      "transactionId": "56820b6e-06bd-473a-8ff8-12345EXAMPLE"
    },
    {
      "cost": {
        "amount": 175,
        "currencyCode": "USD"
      },
      "createdOn": "1465538520",
      "offeringStatus": {
        "type": "PURCHASE",
        "effectiveOn": "1465538520",
        "offering": {
          "type": "RECURRING",
          "description": "Android Unmetered Device Slot",
          "id": "8980F81C-00D7-469D-8EC6-12345EXAMPLE",
          "platform": "ANDROID"
        },
        "quantity": 1
      },
      "transactionId": "953ae2c6-d760-4a04-9597-12345EXAMPLE"
    },
    {
      "cost": {
        "amount": 8.07,
        "currencyCode": "USD"
      },
      "createdOn": "1459344300",
      "offeringStatus": {
        "type": "PURCHASE",
        "effectiveOn": "1459344300",
        "offering": {
          "type": "RECURRING",
          "description": "iOS Unmetered Device Slot",
          "id": "A53D4D73-A6F6-4B82-A0B0-12345EXAMPLE",
          "platform": "IOS"
        },
        "quantity": 1
      },
      "transactionId": "2baf9021-ae3e-47f5-ab52-12345EXAMPLE"
    }
  ]
}
```

Returns the transaction log of the specified offerings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offeringTransactions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListOfferingTransactionsRequest">ListOfferingTransactionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistofferingtransactionsrequest"></a>
<a id="schema_ListOfferingTransactionsRequest"></a>
<a id="tocSlistofferingtransactionsrequest"></a>
<a id="tocslistofferingtransactionsrequest"></a>

```json
{
  "nextToken": {}
}
```

Represents the request to list the offering transaction history.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|

<h2 id="tocS_ListOfferingsResult">ListOfferingsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistofferingsresult"></a>
<a id="schema_ListOfferingsResult"></a>
<a id="tocSlistofferingsresult"></a>
<a id="tocslistofferingsresult"></a>

```json
{
  "offerings": [
    {
      "type": "RECURRING",
      "description": "iOS Unmetered Device Slot",
      "id": "A53D4D73-A6F6-4B82-A0B0-12345EXAMPLE",
      "platform": "IOS",
      "recurringCharges": [
        {
          "cost": {
            "amount": 250,
            "currencyCode": "USD"
          },
          "frequency": "MONTHLY"
        }
      ]
    },
    {
      "type": "RECURRING",
      "description": "Android Unmetered Device Slot",
      "id": "8980F81C-00D7-469D-8EC6-12345EXAMPLE",
      "platform": "ANDROID",
      "recurringCharges": [
        {
          "cost": {
            "amount": 250,
            "currencyCode": "USD"
          },
          "frequency": "MONTHLY"
        }
      ]
    },
    {
      "type": "RECURRING",
      "description": "Android Remote Access Unmetered Device Slot",
      "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
      "platform": "ANDROID",
      "recurringCharges": [
        {
          "cost": {
            "amount": 250,
            "currencyCode": "USD"
          },
          "frequency": "MONTHLY"
        }
      ]
    },
    {
      "type": "RECURRING",
      "description": "iOS Remote Access Unmetered Device Slot",
      "id": "552B4DAD-A6C9-45C4-94FB-12345EXAMPLE",
      "platform": "IOS",
      "recurringCharges": [
        {
          "cost": {
            "amount": 250,
            "currencyCode": "USD"
          },
          "frequency": "MONTHLY"
        }
      ]
    }
  ]
}
```

Represents the return values of the list of offerings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offerings|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListOfferingsRequest">ListOfferingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistofferingsrequest"></a>
<a id="schema_ListOfferingsRequest"></a>
<a id="tocSlistofferingsrequest"></a>
<a id="tocslistofferingsrequest"></a>

```json
{
  "nextToken": {}
}
```

Represents the request to list all offerings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|

<h2 id="tocS_ListProjectsResult">ListProjectsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectsresult"></a>
<a id="schema_ListProjectsResult"></a>
<a id="tocSlistprojectsresult"></a>
<a id="tocslistprojectsresult"></a>

```json
{
  "projects": [
    {
      "name": "My Test Project",
      "arn": "arn:aws:devicefarm:us-west-2:123456789101:project:7ad300ed-8183-41a7-bf94-12345EXAMPLE",
      "created": "1453163262.105"
    },
    {
      "name": "Hello World",
      "arn": "arn:aws:devicefarm:us-west-2:123456789101:project:d6b087d9-56db-4e44-b9ec-12345EXAMPLE",
      "created": "1470350112.439"
    }
  ]
}
```

Represents the result of a list projects request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projects|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListProjectsRequest">ListProjectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectsrequest"></a>
<a id="schema_ListProjectsRequest"></a>
<a id="tocSlistprojectsrequest"></a>
<a id="tocslistprojectsrequest"></a>

```json
{
  "arn": {},
  "nextToken": {}
}
```

Represents a request to the list projects operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListRemoteAccessSessionsResult">ListRemoteAccessSessionsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistremoteaccesssessionsresult"></a>
<a id="schema_ListRemoteAccessSessionsResult"></a>
<a id="tocSlistremoteaccesssessionsresult"></a>
<a id="tocslistremoteaccesssessionsresult"></a>

```json
{
  "remoteAccessSessions": []
}
```

Represents the response from the server after AWS Device Farm makes a request to return information about the remote access session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remoteAccessSessions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListRemoteAccessSessionsRequest">ListRemoteAccessSessionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistremoteaccesssessionsrequest"></a>
<a id="schema_ListRemoteAccessSessionsRequest"></a>
<a id="tocSlistremoteaccesssessionsrequest"></a>
<a id="tocslistremoteaccesssessionsrequest"></a>

```json
{
  "arn": {},
  "nextToken": {}
}
```

Represents the request to return information about the remote access session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListRunsResult">ListRunsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistrunsresult"></a>
<a id="schema_ListRunsResult"></a>
<a id="tocSlistrunsresult"></a>
<a id="tocslistrunsresult"></a>

```json
{
  "runs": [
    {
      "name": "My Test Run",
      "type": "BUILTIN_EXPLORER",
      "arn": "arn:aws:devicefarm:us-west-2:123456789101:run:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/0fcac17b-6122-44d7-ae5a-12345EXAMPLE",
      "billingMethod": "METERED",
      "completedJobs": 0,
      "counters": {
        "errored": 0,
        "failed": 0,
        "passed": 0,
        "skipped": 0,
        "stopped": 0,
        "total": 0,
        "warned": 0
      },
      "created": "1472667509.852",
      "deviceMinutes": {
        "metered": 0,
        "total": 0,
        "unmetered": 0
      },
      "platform": "ANDROID",
      "result": "PENDING",
      "status": "RUNNING",
      "totalJobs": 3
    }
  ]
}
```

Represents the result of a list runs request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|runs|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListRunsRequest">ListRunsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrunsrequest"></a>
<a id="schema_ListRunsRequest"></a>
<a id="tocSlistrunsrequest"></a>
<a id="tocslistrunsrequest"></a>

```json
{
  "arn": {},
  "nextToken": {}
}
```

Represents a request to the list runs operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListSamplesResult">ListSamplesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistsamplesresult"></a>
<a id="schema_ListSamplesResult"></a>
<a id="tocSlistsamplesresult"></a>
<a id="tocslistsamplesresult"></a>

```json
{
  "samples": []
}
```

Represents the result of a list samples request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|samples|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListSamplesRequest">ListSamplesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsamplesrequest"></a>
<a id="schema_ListSamplesRequest"></a>
<a id="tocSlistsamplesrequest"></a>
<a id="tocslistsamplesrequest"></a>

```json
{
  "arn": {},
  "nextToken": {}
}
```

Represents a request to the list samples operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListSuitesResult">ListSuitesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistsuitesresult"></a>
<a id="schema_ListSuitesResult"></a>
<a id="tocSlistsuitesresult"></a>
<a id="tocslistsuitesresult"></a>

```json
{
  "suites": []
}
```

Represents the result of a list suites request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suites|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListSuitesRequest">ListSuitesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsuitesrequest"></a>
<a id="schema_ListSuitesRequest"></a>
<a id="tocSlistsuitesrequest"></a>
<a id="tocslistsuitesrequest"></a>

```json
{
  "arn": {},
  "nextToken": {}
}
```

Represents a request to the list suites operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|nextToken|object|false|none|none|

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

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

<h2 id="tocS_ListTestGridProjectsResult">ListTestGridProjectsResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttestgridprojectsresult"></a>
<a id="schema_ListTestGridProjectsResult"></a>
<a id="tocSlisttestgridprojectsresult"></a>
<a id="tocslisttestgridprojectsresult"></a>

```json
{
  "testGridProjects": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testGridProjects|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTestGridProjectsRequest">ListTestGridProjectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttestgridprojectsrequest"></a>
<a id="schema_ListTestGridProjectsRequest"></a>
<a id="tocSlisttestgridprojectsrequest"></a>
<a id="tocslisttestgridprojectsrequest"></a>

```json
{
  "maxResult": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxResult|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTestGridSessionActionsResult">ListTestGridSessionActionsResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttestgridsessionactionsresult"></a>
<a id="schema_ListTestGridSessionActionsResult"></a>
<a id="tocSlisttestgridsessionactionsresult"></a>
<a id="tocslisttestgridsessionactionsresult"></a>

```json
{
  "actions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTestGridSessionActionsRequest">ListTestGridSessionActionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttestgridsessionactionsrequest"></a>
<a id="schema_ListTestGridSessionActionsRequest"></a>
<a id="tocSlisttestgridsessionactionsrequest"></a>
<a id="tocslisttestgridsessionactionsrequest"></a>

```json
{
  "sessionArn": {},
  "maxResult": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionArn|object|true|none|none|
|maxResult|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTestGridSessionArtifactsResult">ListTestGridSessionArtifactsResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttestgridsessionartifactsresult"></a>
<a id="schema_ListTestGridSessionArtifactsResult"></a>
<a id="tocSlisttestgridsessionartifactsresult"></a>
<a id="tocslisttestgridsessionartifactsresult"></a>

```json
{
  "artifacts": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifacts|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTestGridSessionArtifactsRequest">ListTestGridSessionArtifactsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttestgridsessionartifactsrequest"></a>
<a id="schema_ListTestGridSessionArtifactsRequest"></a>
<a id="tocSlisttestgridsessionartifactsrequest"></a>
<a id="tocslisttestgridsessionartifactsrequest"></a>

```json
{
  "sessionArn": {},
  "type": {},
  "maxResult": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionArn|object|true|none|none|
|type|object|false|none|none|
|maxResult|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTestGridSessionsResult">ListTestGridSessionsResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttestgridsessionsresult"></a>
<a id="schema_ListTestGridSessionsResult"></a>
<a id="tocSlisttestgridsessionsresult"></a>
<a id="tocslisttestgridsessionsresult"></a>

```json
{
  "testGridSessions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testGridSessions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTestGridSessionsRequest">ListTestGridSessionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttestgridsessionsrequest"></a>
<a id="schema_ListTestGridSessionsRequest"></a>
<a id="tocSlisttestgridsessionsrequest"></a>
<a id="tocslisttestgridsessionsrequest"></a>

```json
{
  "projectArn": {},
  "status": {},
  "creationTimeAfter": {},
  "creationTimeBefore": {},
  "endTimeAfter": {},
  "endTimeBefore": {},
  "maxResult": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectArn|object|true|none|none|
|status|object|false|none|none|
|creationTimeAfter|object|false|none|none|
|creationTimeBefore|object|false|none|none|
|endTimeAfter|object|false|none|none|
|endTimeBefore|object|false|none|none|
|maxResult|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTestsResult">ListTestsResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttestsresult"></a>
<a id="schema_ListTestsResult"></a>
<a id="tocSlisttestsresult"></a>
<a id="tocslisttestsresult"></a>

```json
{
  "tests": []
}
```

Represents the result of a list tests request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tests|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTestsRequest">ListTestsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttestsrequest"></a>
<a id="schema_ListTestsRequest"></a>
<a id="tocSlisttestsrequest"></a>
<a id="tocslisttestsrequest"></a>

```json
{
  "arn": {},
  "nextToken": {}
}
```

Represents a request to the list tests operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListUniqueProblemsResult">ListUniqueProblemsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistuniqueproblemsresult"></a>
<a id="schema_ListUniqueProblemsResult"></a>
<a id="tocSlistuniqueproblemsresult"></a>
<a id="tocslistuniqueproblemsresult"></a>

```json
{
  "uniqueProblems": {}
}
```

Represents the result of a list unique problems request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uniqueProblems|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListUniqueProblemsRequest">ListUniqueProblemsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistuniqueproblemsrequest"></a>
<a id="schema_ListUniqueProblemsRequest"></a>
<a id="tocSlistuniqueproblemsrequest"></a>
<a id="tocslistuniqueproblemsrequest"></a>

```json
{
  "arn": {},
  "nextToken": {}
}
```

Represents a request to the list unique problems operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListUploadsResult">ListUploadsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistuploadsresult"></a>
<a id="schema_ListUploadsResult"></a>
<a id="tocSlistuploadsresult"></a>
<a id="tocslistuploadsresult"></a>

```json
{
  "uploads": []
}
```

Represents the result of a list uploads request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uploads|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListUploadsRequest">ListUploadsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistuploadsrequest"></a>
<a id="schema_ListUploadsRequest"></a>
<a id="tocSlistuploadsrequest"></a>
<a id="tocslistuploadsrequest"></a>

```json
{
  "arn": {},
  "type": {},
  "nextToken": {}
}
```

Represents a request to the list uploads operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|type|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListVPCEConfigurationsResult">ListVPCEConfigurationsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistvpceconfigurationsresult"></a>
<a id="schema_ListVPCEConfigurationsResult"></a>
<a id="tocSlistvpceconfigurationsresult"></a>
<a id="tocslistvpceconfigurationsresult"></a>

```json
{
  "vpceConfigurations": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vpceConfigurations|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListVPCEConfigurationsRequest">ListVPCEConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistvpceconfigurationsrequest"></a>
<a id="schema_ListVPCEConfigurationsRequest"></a>
<a id="tocSlistvpceconfigurationsrequest"></a>
<a id="tocslistvpceconfigurationsrequest"></a>

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_PurchaseOfferingResult">PurchaseOfferingResult</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseofferingresult"></a>
<a id="schema_PurchaseOfferingResult"></a>
<a id="tocSpurchaseofferingresult"></a>
<a id="tocspurchaseofferingresult"></a>

```json
{
  "offeringTransaction": {
    "cost": {
      "amount": 8.07,
      "currencyCode": "USD"
    },
    "createdOn": "1472648340",
    "offeringStatus": {
      "type": "PURCHASE",
      "effectiveOn": "1472648340",
      "offering": {
        "type": "RECURRING",
        "description": "Android Remote Access Unmetered Device Slot",
        "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
        "platform": "ANDROID"
      },
      "quantity": 1
    },
    "transactionId": "d30614ed-1b03-404c-9893-12345EXAMPLE"
  }
}
```

The result of the purchase offering (for example, success or failure).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offeringTransaction|object|false|none|none|

<h2 id="tocS_PurchaseOfferingRequest">PurchaseOfferingRequest</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseofferingrequest"></a>
<a id="schema_PurchaseOfferingRequest"></a>
<a id="tocSpurchaseofferingrequest"></a>
<a id="tocspurchaseofferingrequest"></a>

```json
{
  "offeringId": {},
  "quantity": {},
  "offeringPromotionId": {}
}
```

Represents a request for a purchase offering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offeringId|object|true|none|none|
|quantity|object|true|none|none|
|offeringPromotionId|object|false|none|none|

<h2 id="tocS_RenewOfferingResult">RenewOfferingResult</h2>
<!-- backwards compatibility -->
<a id="schemarenewofferingresult"></a>
<a id="schema_RenewOfferingResult"></a>
<a id="tocSrenewofferingresult"></a>
<a id="tocsrenewofferingresult"></a>

```json
{
  "offeringTransaction": {
    "cost": {
      "amount": 250,
      "currencyCode": "USD"
    },
    "createdOn": "1472648880",
    "offeringStatus": {
      "type": "RENEW",
      "effectiveOn": "1472688000",
      "offering": {
        "type": "RECURRING",
        "description": "Android Remote Access Unmetered Device Slot",
        "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
        "platform": "ANDROID"
      },
      "quantity": 1
    },
    "transactionId": "e90f1405-8c35-4561-be43-12345EXAMPLE"
  }
}
```

The result of a renewal offering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offeringTransaction|object|false|none|none|

<h2 id="tocS_RenewOfferingRequest">RenewOfferingRequest</h2>
<!-- backwards compatibility -->
<a id="schemarenewofferingrequest"></a>
<a id="schema_RenewOfferingRequest"></a>
<a id="tocSrenewofferingrequest"></a>
<a id="tocsrenewofferingrequest"></a>

```json
{
  "offeringId": {},
  "quantity": {}
}
```

A request that represents an offering renewal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offeringId|object|true|none|none|
|quantity|object|true|none|none|

<h2 id="tocS_ScheduleRunResult">ScheduleRunResult</h2>
<!-- backwards compatibility -->
<a id="schemaschedulerunresult"></a>
<a id="schema_ScheduleRunResult"></a>
<a id="tocSschedulerunresult"></a>
<a id="tocsschedulerunresult"></a>

```json
{
  "run": {}
}
```

Represents the result of a schedule run request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|run|object|false|none|none|

<h2 id="tocS_ScheduleRunRequest">ScheduleRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemaschedulerunrequest"></a>
<a id="schema_ScheduleRunRequest"></a>
<a id="tocSschedulerunrequest"></a>
<a id="tocsschedulerunrequest"></a>

```json
{
  "projectArn": {},
  "appArn": {},
  "devicePoolArn": {},
  "deviceSelectionConfiguration": {
    "filters": {},
    "maxDevices": {}
  },
  "name": {},
  "test": {
    "type": {},
    "testPackageArn": {},
    "testSpecArn": {},
    "filter": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    }
  },
  "configuration": {
    "extraDataPackageArn": {},
    "networkProfileArn": {},
    "locale": {},
    "location": {
      "latitude": {},
      "longitude": {}
    },
    "vpceConfigurationArns": {},
    "customerArtifactPaths": {
      "iosPaths": {},
      "androidPaths": {},
      "deviceHostPaths": {}
    },
    "radios": {
      "wifi": {},
      "bluetooth": {},
      "nfc": {},
      "gps": {}
    },
    "auxiliaryApps": {},
    "billingMethod": {}
  },
  "executionConfiguration": {
    "jobTimeoutMinutes": {},
    "accountsCleanup": {},
    "appPackagesCleanup": {},
    "videoCapture": {},
    "skipAppResign": {}
  }
}
```

Represents a request to the schedule run operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectArn|object|true|none|none|
|appArn|object|false|none|none|
|devicePoolArn|object|false|none|none|
|deviceSelectionConfiguration|object|false|none|none|
|name|object|false|none|none|
|test|object|true|none|none|
|configuration|object|false|none|none|
|executionConfiguration|object|false|none|none|

<h2 id="tocS_IdempotencyException">IdempotencyException</h2>
<!-- backwards compatibility -->
<a id="schemaidempotencyexception"></a>
<a id="schema_IdempotencyException"></a>
<a id="tocSidempotencyexception"></a>
<a id="tocsidempotencyexception"></a>

```json
null
```

<h2 id="tocS_StopJobResult">StopJobResult</h2>
<!-- backwards compatibility -->
<a id="schemastopjobresult"></a>
<a id="schema_StopJobResult"></a>
<a id="tocSstopjobresult"></a>
<a id="tocsstopjobresult"></a>

```json
{
  "job": {
    "arn": {},
    "name": {},
    "type": {},
    "created": {},
    "status": {},
    "result": {},
    "started": {},
    "stopped": {},
    "counters": {
      "total": {},
      "passed": {},
      "failed": {},
      "warned": {},
      "errored": {},
      "stopped": {},
      "skipped": {}
    },
    "message": {},
    "device": {
      "arn": {},
      "name": {},
      "manufacturer": {},
      "model": {},
      "modelId": {},
      "formFactor": {},
      "platform": {},
      "os": {},
      "cpu": {
        "frequency": {},
        "architecture": {},
        "clock": {}
      },
      "resolution": {
        "width": {},
        "height": {}
      },
      "heapSize": {},
      "memory": {},
      "image": {},
      "carrier": {},
      "radio": {},
      "remoteAccessEnabled": {},
      "remoteDebugEnabled": {},
      "fleetType": {},
      "fleetName": {},
      "instances": {},
      "availability": {}
    },
    "instanceArn": {},
    "deviceMinutes": {
      "total": {},
      "metered": {},
      "unmetered": {}
    },
    "videoEndpoint": {},
    "videoCapture": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|object|false|none|none|

<h2 id="tocS_StopJobRequest">StopJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopjobrequest"></a>
<a id="schema_StopJobRequest"></a>
<a id="tocSstopjobrequest"></a>
<a id="tocsstopjobrequest"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_StopRemoteAccessSessionResult">StopRemoteAccessSessionResult</h2>
<!-- backwards compatibility -->
<a id="schemastopremoteaccesssessionresult"></a>
<a id="schema_StopRemoteAccessSessionResult"></a>
<a id="tocSstopremoteaccesssessionresult"></a>
<a id="tocsstopremoteaccesssessionresult"></a>

```json
{
  "remoteAccessSession": {
    "arn": {},
    "name": {},
    "created": {},
    "status": {},
    "result": {},
    "message": {},
    "started": {},
    "stopped": {},
    "device": {
      "arn": {},
      "name": {},
      "manufacturer": {},
      "model": {},
      "modelId": {},
      "formFactor": {},
      "platform": {},
      "os": {},
      "cpu": {
        "frequency": {},
        "architecture": {},
        "clock": {}
      },
      "resolution": {
        "width": {},
        "height": {}
      },
      "heapSize": {},
      "memory": {},
      "image": {},
      "carrier": {},
      "radio": {},
      "remoteAccessEnabled": {},
      "remoteDebugEnabled": {},
      "fleetType": {},
      "fleetName": {},
      "instances": {},
      "availability": {}
    },
    "instanceArn": {},
    "remoteDebugEnabled": {},
    "remoteRecordEnabled": {},
    "remoteRecordAppArn": {},
    "hostAddress": {},
    "clientId": {},
    "billingMethod": {},
    "deviceMinutes": {
      "total": {},
      "metered": {},
      "unmetered": {}
    },
    "endpoint": {},
    "deviceUdid": {},
    "interactionMode": {},
    "skipAppResign": {},
    "vpcConfig": {
      "securityGroupIds": {},
      "subnetIds": {},
      "vpcId": {}
    }
  }
}
```

Represents the response from the server that describes the remote access session when AWS Device Farm stops the session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remoteAccessSession|object|false|none|none|

<h2 id="tocS_StopRemoteAccessSessionRequest">StopRemoteAccessSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopremoteaccesssessionrequest"></a>
<a id="schema_StopRemoteAccessSessionRequest"></a>
<a id="tocSstopremoteaccesssessionrequest"></a>
<a id="tocsstopremoteaccesssessionrequest"></a>

```json
{
  "arn": {}
}
```

Represents the request to stop the remote access session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_StopRunResult">StopRunResult</h2>
<!-- backwards compatibility -->
<a id="schemastoprunresult"></a>
<a id="schema_StopRunResult"></a>
<a id="tocSstoprunresult"></a>
<a id="tocsstoprunresult"></a>

```json
{
  "run": {}
}
```

Represents the results of your stop run attempt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|run|object|false|none|none|

<h2 id="tocS_StopRunRequest">StopRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoprunrequest"></a>
<a id="schema_StopRunRequest"></a>
<a id="tocSstoprunrequest"></a>
<a id="tocsstoprunrequest"></a>

```json
{
  "arn": {}
}
```

Represents the request to stop a specific run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

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
  "ResourceARN": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_TooManyTagsException">TooManyTagsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsexception"></a>
<a id="schema_TooManyTagsException"></a>
<a id="tocStoomanytagsexception"></a>
<a id="tocstoomanytagsexception"></a>

```json
null
```

<h2 id="tocS_TagPolicyException">TagPolicyException</h2>
<!-- backwards compatibility -->
<a id="schematagpolicyexception"></a>
<a id="schema_TagPolicyException"></a>
<a id="tocStagpolicyexception"></a>
<a id="tocstagpolicyexception"></a>

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

<h2 id="tocS_UpdateDeviceInstanceResult">UpdateDeviceInstanceResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedeviceinstanceresult"></a>
<a id="schema_UpdateDeviceInstanceResult"></a>
<a id="tocSupdatedeviceinstanceresult"></a>
<a id="tocsupdatedeviceinstanceresult"></a>

```json
{
  "deviceInstance": {
    "arn": {},
    "deviceArn": {},
    "labels": {},
    "status": {},
    "udid": {},
    "instanceProfile": {
      "arn": {},
      "packageCleanup": {},
      "excludeAppPackagesFromCleanup": {},
      "rebootAfterUse": {},
      "name": {},
      "description": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceInstance|object|false|none|none|

<h2 id="tocS_UpdateDeviceInstanceRequest">UpdateDeviceInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedeviceinstancerequest"></a>
<a id="schema_UpdateDeviceInstanceRequest"></a>
<a id="tocSupdatedeviceinstancerequest"></a>
<a id="tocsupdatedeviceinstancerequest"></a>

```json
{
  "arn": {},
  "profileArn": {},
  "labels": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|profileArn|object|false|none|none|
|labels|object|false|none|none|

<h2 id="tocS_UpdateDevicePoolResult">UpdateDevicePoolResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedevicepoolresult"></a>
<a id="schema_UpdateDevicePoolResult"></a>
<a id="tocSupdatedevicepoolresult"></a>
<a id="tocsupdatedevicepoolresult"></a>

```json
{
  "devicePool": {}
}
```

Represents the result of an update device pool request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devicePool|object|false|none|none|

<h2 id="tocS_UpdateDevicePoolRequest">UpdateDevicePoolRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedevicepoolrequest"></a>
<a id="schema_UpdateDevicePoolRequest"></a>
<a id="tocSupdatedevicepoolrequest"></a>
<a id="tocsupdatedevicepoolrequest"></a>

```json
{
  "arn": {},
  "name": {},
  "description": {},
  "rules": {},
  "maxDevices": {},
  "clearMaxDevices": {}
}
```

Represents a request to the update device pool operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|rules|object|false|none|none|
|maxDevices|object|false|none|none|
|clearMaxDevices|object|false|none|none|

<h2 id="tocS_UpdateInstanceProfileResult">UpdateInstanceProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinstanceprofileresult"></a>
<a id="schema_UpdateInstanceProfileResult"></a>
<a id="tocSupdateinstanceprofileresult"></a>
<a id="tocsupdateinstanceprofileresult"></a>

```json
{
  "instanceProfile": {
    "arn": {},
    "packageCleanup": {},
    "excludeAppPackagesFromCleanup": {},
    "rebootAfterUse": {},
    "name": {},
    "description": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceProfile|object|false|none|none|

<h2 id="tocS_UpdateInstanceProfileRequest">UpdateInstanceProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinstanceprofilerequest"></a>
<a id="schema_UpdateInstanceProfileRequest"></a>
<a id="tocSupdateinstanceprofilerequest"></a>
<a id="tocsupdateinstanceprofilerequest"></a>

```json
{
  "arn": {},
  "name": {},
  "description": {},
  "packageCleanup": {},
  "excludeAppPackagesFromCleanup": {},
  "rebootAfterUse": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|packageCleanup|object|false|none|none|
|excludeAppPackagesFromCleanup|object|false|none|none|
|rebootAfterUse|object|false|none|none|

<h2 id="tocS_UpdateNetworkProfileResult">UpdateNetworkProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenetworkprofileresult"></a>
<a id="schema_UpdateNetworkProfileResult"></a>
<a id="tocSupdatenetworkprofileresult"></a>
<a id="tocsupdatenetworkprofileresult"></a>

```json
{
  "networkProfile": {
    "arn": {},
    "name": {},
    "description": {},
    "type": {},
    "uplinkBandwidthBits": {},
    "downlinkBandwidthBits": {},
    "uplinkDelayMs": {},
    "downlinkDelayMs": {},
    "uplinkJitterMs": {},
    "downlinkJitterMs": {},
    "uplinkLossPercent": {},
    "downlinkLossPercent": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networkProfile|object|false|none|none|

<h2 id="tocS_UpdateNetworkProfileRequest">UpdateNetworkProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenetworkprofilerequest"></a>
<a id="schema_UpdateNetworkProfileRequest"></a>
<a id="tocSupdatenetworkprofilerequest"></a>
<a id="tocsupdatenetworkprofilerequest"></a>

```json
{
  "arn": {},
  "name": {},
  "description": {},
  "type": {},
  "uplinkBandwidthBits": {},
  "downlinkBandwidthBits": {},
  "uplinkDelayMs": {},
  "downlinkDelayMs": {},
  "uplinkJitterMs": {},
  "downlinkJitterMs": {},
  "uplinkLossPercent": {},
  "downlinkLossPercent": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|type|object|false|none|none|
|uplinkBandwidthBits|object|false|none|none|
|downlinkBandwidthBits|object|false|none|none|
|uplinkDelayMs|object|false|none|none|
|downlinkDelayMs|object|false|none|none|
|uplinkJitterMs|object|false|none|none|
|downlinkJitterMs|object|false|none|none|
|uplinkLossPercent|object|false|none|none|
|downlinkLossPercent|object|false|none|none|

<h2 id="tocS_UpdateProjectResult">UpdateProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectresult"></a>
<a id="schema_UpdateProjectResult"></a>
<a id="tocSupdateprojectresult"></a>
<a id="tocsupdateprojectresult"></a>

```json
{
  "project": {
    "name": "NewName",
    "arn": "arn:aws:devicefarm:us-west-2:123456789101:project:8f75187d-101e-4625-accc-12345EXAMPLE",
    "created": "1448400709.927"
  }
}
```

Represents the result of an update project request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|object|false|none|none|

<h2 id="tocS_UpdateProjectRequest">UpdateProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectrequest"></a>
<a id="schema_UpdateProjectRequest"></a>
<a id="tocSupdateprojectrequest"></a>
<a id="tocsupdateprojectrequest"></a>

```json
{
  "arn": {},
  "name": {},
  "defaultJobTimeoutMinutes": {},
  "vpcConfig": {
    "securityGroupIds": {},
    "subnetIds": {},
    "vpcId": {}
  }
}
```

Represents a request to the update project operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|name|object|false|none|none|
|defaultJobTimeoutMinutes|object|false|none|none|
|vpcConfig|object|false|none|none|

<h2 id="tocS_UpdateTestGridProjectResult">UpdateTestGridProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetestgridprojectresult"></a>
<a id="schema_UpdateTestGridProjectResult"></a>
<a id="tocSupdatetestgridprojectresult"></a>
<a id="tocsupdatetestgridprojectresult"></a>

```json
{
  "testGridProject": {
    "arn": {},
    "name": {},
    "description": {},
    "vpcConfig": {
      "securityGroupIds": {},
      "subnetIds": {},
      "vpcId": {}
    },
    "created": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testGridProject|object|false|none|none|

<h2 id="tocS_UpdateTestGridProjectRequest">UpdateTestGridProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetestgridprojectrequest"></a>
<a id="schema_UpdateTestGridProjectRequest"></a>
<a id="tocSupdatetestgridprojectrequest"></a>
<a id="tocsupdatetestgridprojectrequest"></a>

```json
{
  "projectArn": {},
  "name": {},
  "description": {},
  "vpcConfig": {
    "securityGroupIds": {},
    "subnetIds": {},
    "vpcId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectArn|object|true|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|vpcConfig|object|false|none|none|

<h2 id="tocS_UpdateUploadResult">UpdateUploadResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuploadresult"></a>
<a id="schema_UpdateUploadResult"></a>
<a id="tocSupdateuploadresult"></a>
<a id="tocsupdateuploadresult"></a>

```json
{
  "upload": {
    "arn": {},
    "name": {},
    "created": {},
    "type": {},
    "status": {},
    "url": {},
    "metadata": {},
    "contentType": {},
    "message": {},
    "category": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|upload|object|false|none|none|

<h2 id="tocS_UpdateUploadRequest">UpdateUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuploadrequest"></a>
<a id="schema_UpdateUploadRequest"></a>
<a id="tocSupdateuploadrequest"></a>
<a id="tocsupdateuploadrequest"></a>

```json
{
  "arn": {},
  "name": {},
  "contentType": {},
  "editContent": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|name|object|false|none|none|
|contentType|object|false|none|none|
|editContent|object|false|none|none|

<h2 id="tocS_UpdateVPCEConfigurationResult">UpdateVPCEConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevpceconfigurationresult"></a>
<a id="schema_UpdateVPCEConfigurationResult"></a>
<a id="tocSupdatevpceconfigurationresult"></a>
<a id="tocsupdatevpceconfigurationresult"></a>

```json
{
  "vpceConfiguration": {
    "arn": {},
    "vpceConfigurationName": {},
    "vpceServiceName": {},
    "serviceDnsName": {},
    "vpceConfigurationDescription": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vpceConfiguration|object|false|none|none|

<h2 id="tocS_UpdateVPCEConfigurationRequest">UpdateVPCEConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevpceconfigurationrequest"></a>
<a id="schema_UpdateVPCEConfigurationRequest"></a>
<a id="tocSupdatevpceconfigurationrequest"></a>
<a id="tocsupdatevpceconfigurationrequest"></a>

```json
{
  "arn": {},
  "vpceConfigurationName": {},
  "vpceServiceName": {},
  "serviceDnsName": {},
  "vpceConfigurationDescription": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|vpceConfigurationName|object|false|none|none|
|vpceServiceName|object|false|none|none|
|serviceDnsName|object|false|none|none|
|vpceConfigurationDescription|object|false|none|none|

<h2 id="tocS_AWSAccountNumber">AWSAccountNumber</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountnumber"></a>
<a id="schema_AWSAccountNumber"></a>
<a id="tocSawsaccountnumber"></a>
<a id="tocsawsaccountnumber"></a>

```json
"string"
```

<h2 id="tocS_PurchasedDevicesMap">PurchasedDevicesMap</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseddevicesmap"></a>
<a id="schema_PurchasedDevicesMap"></a>
<a id="tocSpurchaseddevicesmap"></a>
<a id="tocspurchaseddevicesmap"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Integer](#schemainteger)|false|none|none|

<h2 id="tocS_JobTimeoutMinutes">JobTimeoutMinutes</h2>
<!-- backwards compatibility -->
<a id="schemajobtimeoutminutes"></a>
<a id="schema_JobTimeoutMinutes"></a>
<a id="tocSjobtimeoutminutes"></a>
<a id="tocsjobtimeoutminutes"></a>

```json
0
```

<h2 id="tocS_TrialMinutes">TrialMinutes</h2>
<!-- backwards compatibility -->
<a id="schematrialminutes"></a>
<a id="schema_TrialMinutes"></a>
<a id="tocStrialminutes"></a>
<a id="tocstrialminutes"></a>

```json
{
  "total": {},
  "remaining": {}
}
```

Represents information about free trial device minutes for an AWS account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|object|false|none|none|
|remaining|object|false|none|none|

<h2 id="tocS_MaxSlotMap">MaxSlotMap</h2>
<!-- backwards compatibility -->
<a id="schemamaxslotmap"></a>
<a id="schema_MaxSlotMap"></a>
<a id="tocSmaxslotmap"></a>
<a id="tocsmaxslotmap"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Integer](#schemainteger)|false|none|none|

<h2 id="tocS_SkipAppResign">SkipAppResign</h2>
<!-- backwards compatibility -->
<a id="schemaskipappresign"></a>
<a id="schema_SkipAppResign"></a>
<a id="tocSskipappresign"></a>
<a id="tocsskipappresign"></a>

```json
true
```

<h2 id="tocS_AccountSettings">AccountSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsettings"></a>
<a id="schema_AccountSettings"></a>
<a id="tocSaccountsettings"></a>
<a id="tocsaccountsettings"></a>

```json
{
  "awsAccountNumber": {},
  "unmeteredDevices": {
    "property1": 0,
    "property2": 0
  },
  "unmeteredRemoteAccessDevices": {
    "property1": 0,
    "property2": 0
  },
  "maxJobTimeoutMinutes": {},
  "trialMinutes": {
    "total": {},
    "remaining": {}
  },
  "maxSlots": {
    "property1": 0,
    "property2": 0
  },
  "defaultJobTimeoutMinutes": {},
  "skipAppResign": {}
}
```

A container for account-level settings in AWS Device Farm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsAccountNumber|object|false|none|none|
|unmeteredDevices|object|false|none|none|
|unmeteredRemoteAccessDevices|object|false|none|none|
|maxJobTimeoutMinutes|object|false|none|none|
|trialMinutes|object|false|none|none|
|maxSlots|object|false|none|none|
|defaultJobTimeoutMinutes|object|false|none|none|
|skipAppResign|object|false|none|none|

<h2 id="tocS_AccountsCleanup">AccountsCleanup</h2>
<!-- backwards compatibility -->
<a id="schemaaccountscleanup"></a>
<a id="schema_AccountsCleanup"></a>
<a id="tocSaccountscleanup"></a>
<a id="tocsaccountscleanup"></a>

```json
true
```

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"stringstringstringstringstringst"
```

<h2 id="tocS_AmazonResourceNames">AmazonResourceNames</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcenames"></a>
<a id="schema_AmazonResourceNames"></a>
<a id="tocSamazonresourcenames"></a>
<a id="tocsamazonresourcenames"></a>

```json
[
  "stringstringstringstringstringst"
]
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

<h2 id="tocS_AndroidPaths">AndroidPaths</h2>
<!-- backwards compatibility -->
<a id="schemaandroidpaths"></a>
<a id="schema_AndroidPaths"></a>
<a id="tocSandroidpaths"></a>
<a id="tocsandroidpaths"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AppPackagesCleanup">AppPackagesCleanup</h2>
<!-- backwards compatibility -->
<a id="schemaapppackagescleanup"></a>
<a id="schema_AppPackagesCleanup"></a>
<a id="tocSapppackagescleanup"></a>
<a id="tocsapppackagescleanup"></a>

```json
true
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

<h2 id="tocS_ArtifactType">ArtifactType</h2>
<!-- backwards compatibility -->
<a id="schemaartifacttype"></a>
<a id="schema_ArtifactType"></a>
<a id="tocSartifacttype"></a>
<a id="tocsartifacttype"></a>

```json
"UNKNOWN"
```

<h2 id="tocS_URL">URL</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_URL"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
"string"
```

<h2 id="tocS_Artifact">Artifact</h2>
<!-- backwards compatibility -->
<a id="schemaartifact"></a>
<a id="schema_Artifact"></a>
<a id="tocSartifact"></a>
<a id="tocsartifact"></a>

```json
{
  "arn": {},
  "name": {},
  "type": {},
  "extension": {},
  "url": {}
}
```

Represents the output of a test. Examples of artifacts include logs and screenshots.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|type|object|false|none|none|
|extension|object|false|none|none|
|url|object|false|none|none|

<h2 id="tocS_ArtifactCategory">ArtifactCategory</h2>
<!-- backwards compatibility -->
<a id="schemaartifactcategory"></a>
<a id="schema_ArtifactCategory"></a>
<a id="tocSartifactcategory"></a>
<a id="tocsartifactcategory"></a>

```json
"SCREENSHOT"
```

<h2 id="tocS_Artifacts">Artifacts</h2>
<!-- backwards compatibility -->
<a id="schemaartifacts"></a>
<a id="schema_Artifacts"></a>
<a id="tocSartifacts"></a>
<a id="tocsartifacts"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "type": {},
    "extension": {},
    "url": {}
  }
]
```

<h2 id="tocS_BillingMethod">BillingMethod</h2>
<!-- backwards compatibility -->
<a id="schemabillingmethod"></a>
<a id="schema_BillingMethod"></a>
<a id="tocSbillingmethod"></a>
<a id="tocsbillingmethod"></a>

```json
"METERED"
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

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_CPU">CPU</h2>
<!-- backwards compatibility -->
<a id="schemacpu"></a>
<a id="schema_CPU"></a>
<a id="tocScpu"></a>
<a id="tocscpu"></a>

```json
{
  "frequency": {},
  "architecture": {},
  "clock": {}
}
```

Represents the amount of CPU that an app is using on a physical device. Does not represent system-wide CPU usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency|object|false|none|none|
|architecture|object|false|none|none|
|clock|object|false|none|none|

<h2 id="tocS_ClientId">ClientId</h2>
<!-- backwards compatibility -->
<a id="schemaclientid"></a>
<a id="schema_ClientId"></a>
<a id="tocSclientid"></a>
<a id="tocsclientid"></a>

```json
"string"
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

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_Counters">Counters</h2>
<!-- backwards compatibility -->
<a id="schemacounters"></a>
<a id="schema_Counters"></a>
<a id="tocScounters"></a>
<a id="tocscounters"></a>

```json
{
  "total": {},
  "passed": {},
  "failed": {},
  "warned": {},
  "errored": {},
  "stopped": {},
  "skipped": {}
}
```

Represents entity counters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|object|false|none|none|
|passed|object|false|none|none|
|failed|object|false|none|none|
|warned|object|false|none|none|
|errored|object|false|none|none|
|stopped|object|false|none|none|
|skipped|object|false|none|none|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

<h2 id="tocS_Rules">Rules</h2>
<!-- backwards compatibility -->
<a id="schemarules"></a>
<a id="schema_Rules"></a>
<a id="tocSrules"></a>
<a id="tocsrules"></a>

```json
[
  {
    "attribute": {},
    "operator": {},
    "value": {}
  }
]
```

<h2 id="tocS_DevicePool">DevicePool</h2>
<!-- backwards compatibility -->
<a id="schemadevicepool"></a>
<a id="schema_DevicePool"></a>
<a id="tocSdevicepool"></a>
<a id="tocsdevicepool"></a>

```json
{
  "arn": {},
  "name": {},
  "description": {},
  "type": {},
  "rules": {},
  "maxDevices": {}
}
```

Represents a collection of device types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|type|object|false|none|none|
|rules|object|false|none|none|
|maxDevices|object|false|none|none|

<h2 id="tocS_PackageIds">PackageIds</h2>
<!-- backwards compatibility -->
<a id="schemapackageids"></a>
<a id="schema_PackageIds"></a>
<a id="tocSpackageids"></a>
<a id="tocspackageids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InstanceProfile">InstanceProfile</h2>
<!-- backwards compatibility -->
<a id="schemainstanceprofile"></a>
<a id="schema_InstanceProfile"></a>
<a id="tocSinstanceprofile"></a>
<a id="tocsinstanceprofile"></a>

```json
{
  "arn": {},
  "packageCleanup": {},
  "excludeAppPackagesFromCleanup": {},
  "rebootAfterUse": {},
  "name": {},
  "description": {}
}
```

Represents the instance profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|packageCleanup|object|false|none|none|
|excludeAppPackagesFromCleanup|object|false|none|none|
|rebootAfterUse|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|

<h2 id="tocS_NetworkProfileType">NetworkProfileType</h2>
<!-- backwards compatibility -->
<a id="schemanetworkprofiletype"></a>
<a id="schema_NetworkProfileType"></a>
<a id="tocSnetworkprofiletype"></a>
<a id="tocsnetworkprofiletype"></a>

```json
"CURATED"
```

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_PercentInteger">PercentInteger</h2>
<!-- backwards compatibility -->
<a id="schemapercentinteger"></a>
<a id="schema_PercentInteger"></a>
<a id="tocSpercentinteger"></a>
<a id="tocspercentinteger"></a>

```json
0
```

<h2 id="tocS_NetworkProfile">NetworkProfile</h2>
<!-- backwards compatibility -->
<a id="schemanetworkprofile"></a>
<a id="schema_NetworkProfile"></a>
<a id="tocSnetworkprofile"></a>
<a id="tocsnetworkprofile"></a>

```json
{
  "arn": {},
  "name": {},
  "description": {},
  "type": {},
  "uplinkBandwidthBits": {},
  "downlinkBandwidthBits": {},
  "uplinkDelayMs": {},
  "downlinkDelayMs": {},
  "uplinkJitterMs": {},
  "downlinkJitterMs": {},
  "uplinkLossPercent": {},
  "downlinkLossPercent": {}
}
```

An array of settings that describes characteristics of a network profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|type|object|false|none|none|
|uplinkBandwidthBits|object|false|none|none|
|downlinkBandwidthBits|object|false|none|none|
|uplinkDelayMs|object|false|none|none|
|downlinkDelayMs|object|false|none|none|
|uplinkJitterMs|object|false|none|none|
|downlinkJitterMs|object|false|none|none|
|uplinkLossPercent|object|false|none|none|
|downlinkLossPercent|object|false|none|none|

<h2 id="tocS_VpcConfig">VpcConfig</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfig"></a>
<a id="schema_VpcConfig"></a>
<a id="tocSvpcconfig"></a>
<a id="tocsvpcconfig"></a>

```json
{
  "securityGroupIds": {},
  "subnetIds": {},
  "vpcId": {}
}
```

Contains the VPC configuration data necessary to interface with AWS Device Farm's services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|securityGroupIds|object|true|none|none|
|subnetIds|object|true|none|none|
|vpcId|object|true|none|none|

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "arn": {},
  "name": {},
  "defaultJobTimeoutMinutes": {},
  "created": {},
  "vpcConfig": {
    "securityGroupIds": {},
    "subnetIds": {},
    "vpcId": {}
  }
}
```

Represents an operating-system neutral workspace for running and managing tests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|defaultJobTimeoutMinutes|object|false|none|none|
|created|object|false|none|none|
|vpcConfig|object|false|none|none|

<h2 id="tocS_CreateRemoteAccessSessionConfiguration">CreateRemoteAccessSessionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacreateremoteaccesssessionconfiguration"></a>
<a id="schema_CreateRemoteAccessSessionConfiguration"></a>
<a id="tocScreateremoteaccesssessionconfiguration"></a>
<a id="tocscreateremoteaccesssessionconfiguration"></a>

```json
{
  "billingMethod": {},
  "vpceConfigurationArns": {}
}
```

Configuration settings for a remote access session, including billing method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingMethod|object|false|none|none|
|vpceConfigurationArns|object|false|none|none|

<h2 id="tocS_SshPublicKey">SshPublicKey</h2>
<!-- backwards compatibility -->
<a id="schemasshpublickey"></a>
<a id="schema_SshPublicKey"></a>
<a id="tocSsshpublickey"></a>
<a id="tocssshpublickey"></a>

```json
"string"
```

<h2 id="tocS_InteractionMode">InteractionMode</h2>
<!-- backwards compatibility -->
<a id="schemainteractionmode"></a>
<a id="schema_InteractionMode"></a>
<a id="tocSinteractionmode"></a>
<a id="tocsinteractionmode"></a>

```json
"INTERACTIVE"
```

<h2 id="tocS_RemoteAccessSession">RemoteAccessSession</h2>
<!-- backwards compatibility -->
<a id="schemaremoteaccesssession"></a>
<a id="schema_RemoteAccessSession"></a>
<a id="tocSremoteaccesssession"></a>
<a id="tocsremoteaccesssession"></a>

```json
{
  "arn": {},
  "name": {},
  "created": {},
  "status": {},
  "result": {},
  "message": {},
  "started": {},
  "stopped": {},
  "device": {
    "arn": {},
    "name": {},
    "manufacturer": {},
    "model": {},
    "modelId": {},
    "formFactor": {},
    "platform": {},
    "os": {},
    "cpu": {
      "frequency": {},
      "architecture": {},
      "clock": {}
    },
    "resolution": {
      "width": {},
      "height": {}
    },
    "heapSize": {},
    "memory": {},
    "image": {},
    "carrier": {},
    "radio": {},
    "remoteAccessEnabled": {},
    "remoteDebugEnabled": {},
    "fleetType": {},
    "fleetName": {},
    "instances": {},
    "availability": {}
  },
  "instanceArn": {},
  "remoteDebugEnabled": {},
  "remoteRecordEnabled": {},
  "remoteRecordAppArn": {},
  "hostAddress": {},
  "clientId": {},
  "billingMethod": {},
  "deviceMinutes": {
    "total": {},
    "metered": {},
    "unmetered": {}
  },
  "endpoint": {},
  "deviceUdid": {},
  "interactionMode": {},
  "skipAppResign": {},
  "vpcConfig": {
    "securityGroupIds": {},
    "subnetIds": {},
    "vpcId": {}
  }
}
```

Represents information about the remote access session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|created|object|false|none|none|
|status|object|false|none|none|
|result|object|false|none|none|
|message|object|false|none|none|
|started|object|false|none|none|
|stopped|object|false|none|none|
|device|object|false|none|none|
|instanceArn|object|false|none|none|
|remoteDebugEnabled|object|false|none|none|
|remoteRecordEnabled|object|false|none|none|
|remoteRecordAppArn|object|false|none|none|
|hostAddress|object|false|none|none|
|clientId|object|false|none|none|
|billingMethod|object|false|none|none|
|deviceMinutes|object|false|none|none|
|endpoint|object|false|none|none|
|deviceUdid|object|false|none|none|
|interactionMode|object|false|none|none|
|skipAppResign|object|false|none|none|
|vpcConfig|object|false|none|none|

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"string"
```

<h2 id="tocS_ResourceDescription">ResourceDescription</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedescription"></a>
<a id="schema_ResourceDescription"></a>
<a id="tocSresourcedescription"></a>
<a id="tocsresourcedescription"></a>

```json
"string"
```

<h2 id="tocS_TestGridVpcConfig">TestGridVpcConfig</h2>
<!-- backwards compatibility -->
<a id="schematestgridvpcconfig"></a>
<a id="schema_TestGridVpcConfig"></a>
<a id="tocStestgridvpcconfig"></a>
<a id="tocstestgridvpcconfig"></a>

```json
{
  "securityGroupIds": {},
  "subnetIds": {},
  "vpcId": {}
}
```

The VPC security groups and subnets that are attached to a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|securityGroupIds|object|true|none|none|
|subnetIds|object|true|none|none|
|vpcId|object|true|none|none|

<h2 id="tocS_TestGridProject">TestGridProject</h2>
<!-- backwards compatibility -->
<a id="schematestgridproject"></a>
<a id="schema_TestGridProject"></a>
<a id="tocStestgridproject"></a>
<a id="tocstestgridproject"></a>

```json
{
  "arn": {},
  "name": {},
  "description": {},
  "vpcConfig": {
    "securityGroupIds": {},
    "subnetIds": {},
    "vpcId": {}
  },
  "created": {}
}
```

A Selenium testing project. Projects are used to collect and collate sessions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|vpcConfig|object|false|none|none|
|created|object|false|none|none|

<h2 id="tocS_DeviceFarmArn">DeviceFarmArn</h2>
<!-- backwards compatibility -->
<a id="schemadevicefarmarn"></a>
<a id="schema_DeviceFarmArn"></a>
<a id="tocSdevicefarmarn"></a>
<a id="tocsdevicefarmarn"></a>

```json
"stringstringstringstringstringst"
```

<h2 id="tocS_TestGridUrlExpiresInSecondsInput">TestGridUrlExpiresInSecondsInput</h2>
<!-- backwards compatibility -->
<a id="schematestgridurlexpiresinsecondsinput"></a>
<a id="schema_TestGridUrlExpiresInSecondsInput"></a>
<a id="tocStestgridurlexpiresinsecondsinput"></a>
<a id="tocstestgridurlexpiresinsecondsinput"></a>

```json
60
```

<h2 id="tocS_SensitiveString">SensitiveString</h2>
<!-- backwards compatibility -->
<a id="schemasensitivestring"></a>
<a id="schema_SensitiveString"></a>
<a id="tocSsensitivestring"></a>
<a id="tocssensitivestring"></a>

```json
"password"
```

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_UploadType">UploadType</h2>
<!-- backwards compatibility -->
<a id="schemauploadtype"></a>
<a id="schema_UploadType"></a>
<a id="tocSuploadtype"></a>
<a id="tocsuploadtype"></a>

```json
"ANDROID_APP"
```

<h2 id="tocS_Upload">Upload</h2>
<!-- backwards compatibility -->
<a id="schemaupload"></a>
<a id="schema_Upload"></a>
<a id="tocSupload"></a>
<a id="tocsupload"></a>

```json
{
  "arn": {},
  "name": {},
  "created": {},
  "type": {},
  "status": {},
  "url": {},
  "metadata": {},
  "contentType": {},
  "message": {},
  "category": {}
}
```

An app or a set of one or more tests to upload or that have been uploaded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|created|object|false|none|none|
|type|object|false|none|none|
|status|object|false|none|none|
|url|object|false|none|none|
|metadata|object|false|none|none|
|contentType|object|false|none|none|
|message|object|false|none|none|
|category|object|false|none|none|

<h2 id="tocS_VPCEConfigurationName">VPCEConfigurationName</h2>
<!-- backwards compatibility -->
<a id="schemavpceconfigurationname"></a>
<a id="schema_VPCEConfigurationName"></a>
<a id="tocSvpceconfigurationname"></a>
<a id="tocsvpceconfigurationname"></a>

```json
"string"
```

<h2 id="tocS_VPCEServiceName">VPCEServiceName</h2>
<!-- backwards compatibility -->
<a id="schemavpceservicename"></a>
<a id="schema_VPCEServiceName"></a>
<a id="tocSvpceservicename"></a>
<a id="tocsvpceservicename"></a>

```json
"string"
```

<h2 id="tocS_ServiceDnsName">ServiceDnsName</h2>
<!-- backwards compatibility -->
<a id="schemaservicednsname"></a>
<a id="schema_ServiceDnsName"></a>
<a id="tocSservicednsname"></a>
<a id="tocsservicednsname"></a>

```json
"string"
```

<h2 id="tocS_VPCEConfigurationDescription">VPCEConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemavpceconfigurationdescription"></a>
<a id="schema_VPCEConfigurationDescription"></a>
<a id="tocSvpceconfigurationdescription"></a>
<a id="tocsvpceconfigurationdescription"></a>

```json
"string"
```

<h2 id="tocS_VPCEConfiguration">VPCEConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemavpceconfiguration"></a>
<a id="schema_VPCEConfiguration"></a>
<a id="tocSvpceconfiguration"></a>
<a id="tocsvpceconfiguration"></a>

```json
{
  "arn": {},
  "vpceConfigurationName": {},
  "vpceServiceName": {},
  "serviceDnsName": {},
  "vpceConfigurationDescription": {}
}
```

Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|vpceConfigurationName|object|false|none|none|
|vpceServiceName|object|false|none|none|
|serviceDnsName|object|false|none|none|
|vpceConfigurationDescription|object|false|none|none|

<h2 id="tocS_CurrencyCode">CurrencyCode</h2>
<!-- backwards compatibility -->
<a id="schemacurrencycode"></a>
<a id="schema_CurrencyCode"></a>
<a id="tocScurrencycode"></a>
<a id="tocscurrencycode"></a>

```json
"USD"
```

<h2 id="tocS_IosPaths">IosPaths</h2>
<!-- backwards compatibility -->
<a id="schemaiospaths"></a>
<a id="schema_IosPaths"></a>
<a id="tocSiospaths"></a>
<a id="tocsiospaths"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DeviceHostPaths">DeviceHostPaths</h2>
<!-- backwards compatibility -->
<a id="schemadevicehostpaths"></a>
<a id="schema_DeviceHostPaths"></a>
<a id="tocSdevicehostpaths"></a>
<a id="tocsdevicehostpaths"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CustomerArtifactPaths">CustomerArtifactPaths</h2>
<!-- backwards compatibility -->
<a id="schemacustomerartifactpaths"></a>
<a id="schema_CustomerArtifactPaths"></a>
<a id="tocScustomerartifactpaths"></a>
<a id="tocscustomerartifactpaths"></a>

```json
{
  "iosPaths": {},
  "androidPaths": {},
  "deviceHostPaths": {}
}
```

<p>A JSON object that specifies the paths where the artifacts generated by the customer's tests, on the device or in the test environment, are pulled from.</p> <p>Specify <code>deviceHostPaths</code> and optionally specify either <code>iosPaths</code> or <code>androidPaths</code>.</p> <p>For web app tests, you can specify both <code>iosPaths</code> and <code>androidPaths</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iosPaths|object|false|none|none|
|androidPaths|object|false|none|none|
|deviceHostPaths|object|false|none|none|

<h2 id="tocS_DeviceFormFactor">DeviceFormFactor</h2>
<!-- backwards compatibility -->
<a id="schemadeviceformfactor"></a>
<a id="schema_DeviceFormFactor"></a>
<a id="tocSdeviceformfactor"></a>
<a id="tocsdeviceformfactor"></a>

```json
"PHONE"
```

<h2 id="tocS_DevicePlatform">DevicePlatform</h2>
<!-- backwards compatibility -->
<a id="schemadeviceplatform"></a>
<a id="schema_DevicePlatform"></a>
<a id="tocSdeviceplatform"></a>
<a id="tocsdeviceplatform"></a>

```json
"ANDROID"
```

<h2 id="tocS_Resolution">Resolution</h2>
<!-- backwards compatibility -->
<a id="schemaresolution"></a>
<a id="schema_Resolution"></a>
<a id="tocSresolution"></a>
<a id="tocsresolution"></a>

```json
{
  "width": {},
  "height": {}
}
```

Represents the screen resolution of a device in height and width, expressed in pixels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|width|object|false|none|none|
|height|object|false|none|none|

<h2 id="tocS_DeviceInstances">DeviceInstances</h2>
<!-- backwards compatibility -->
<a id="schemadeviceinstances"></a>
<a id="schema_DeviceInstances"></a>
<a id="tocSdeviceinstances"></a>
<a id="tocsdeviceinstances"></a>

```json
[
  {
    "arn": {},
    "deviceArn": {},
    "labels": {},
    "status": {},
    "udid": {},
    "instanceProfile": {
      "arn": {},
      "packageCleanup": {},
      "excludeAppPackagesFromCleanup": {},
      "rebootAfterUse": {},
      "name": {},
      "description": {}
    }
  }
]
```

<h2 id="tocS_DeviceAvailability">DeviceAvailability</h2>
<!-- backwards compatibility -->
<a id="schemadeviceavailability"></a>
<a id="schema_DeviceAvailability"></a>
<a id="tocSdeviceavailability"></a>
<a id="tocsdeviceavailability"></a>

```json
"TEMPORARY_NOT_AVAILABLE"
```

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "arn": {},
  "name": {},
  "manufacturer": {},
  "model": {},
  "modelId": {},
  "formFactor": {},
  "platform": {},
  "os": {},
  "cpu": {
    "frequency": {},
    "architecture": {},
    "clock": {}
  },
  "resolution": {
    "width": {},
    "height": {}
  },
  "heapSize": {},
  "memory": {},
  "image": {},
  "carrier": {},
  "radio": {},
  "remoteAccessEnabled": {},
  "remoteDebugEnabled": {},
  "fleetType": {},
  "fleetName": {},
  "instances": {},
  "availability": {}
}
```

Represents a device type that an app is tested against.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|manufacturer|object|false|none|none|
|model|object|false|none|none|
|modelId|object|false|none|none|
|formFactor|object|false|none|none|
|platform|object|false|none|none|
|os|object|false|none|none|
|cpu|object|false|none|none|
|resolution|object|false|none|none|
|heapSize|object|false|none|none|
|memory|object|false|none|none|
|image|object|false|none|none|
|carrier|object|false|none|none|
|radio|object|false|none|none|
|remoteAccessEnabled|object|false|none|none|
|remoteDebugEnabled|object|false|none|none|
|fleetType|object|false|none|none|
|fleetName|object|false|none|none|
|instances|object|false|none|none|
|availability|object|false|none|none|

<h2 id="tocS_DeviceAttribute">DeviceAttribute</h2>
<!-- backwards compatibility -->
<a id="schemadeviceattribute"></a>
<a id="schema_DeviceAttribute"></a>
<a id="tocSdeviceattribute"></a>
<a id="tocsdeviceattribute"></a>

```json
"ARN"
```

<h2 id="tocS_DeviceFilterAttribute">DeviceFilterAttribute</h2>
<!-- backwards compatibility -->
<a id="schemadevicefilterattribute"></a>
<a id="schema_DeviceFilterAttribute"></a>
<a id="tocSdevicefilterattribute"></a>
<a id="tocsdevicefilterattribute"></a>

```json
"ARN"
```

<h2 id="tocS_RuleOperator">RuleOperator</h2>
<!-- backwards compatibility -->
<a id="schemaruleoperator"></a>
<a id="schema_RuleOperator"></a>
<a id="tocSruleoperator"></a>
<a id="tocsruleoperator"></a>

```json
"EQUALS"
```

<h2 id="tocS_DeviceFilterValues">DeviceFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemadevicefiltervalues"></a>
<a id="schema_DeviceFilterValues"></a>
<a id="tocSdevicefiltervalues"></a>
<a id="tocsdevicefiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DeviceFilter">DeviceFilter</h2>
<!-- backwards compatibility -->
<a id="schemadevicefilter"></a>
<a id="schema_DeviceFilter"></a>
<a id="tocSdevicefilter"></a>
<a id="tocsdevicefilter"></a>

```json
{
  "attribute": {},
  "operator": {},
  "values": {}
}
```

<p>Represents a device filter used to select a set of devices to be included in a test run. This data structure is passed in as the <code>deviceSelectionConfiguration</code> parameter to <code>ScheduleRun</code>. For an example of the JSON request syntax, see <a>ScheduleRun</a>.</p> <p>It is also passed in as the <code>filters</code> parameter to <code>ListDevices</code>. For an example of the JSON request syntax, see <a>ListDevices</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute|object|true|none|none|
|operator|object|true|none|none|
|values|object|true|none|none|

<h2 id="tocS_DeviceFilters">DeviceFilters</h2>
<!-- backwards compatibility -->
<a id="schemadevicefilters"></a>
<a id="schema_DeviceFilters"></a>
<a id="tocSdevicefilters"></a>
<a id="tocsdevicefilters"></a>

```json
[
  {
    "attribute": {},
    "operator": {},
    "values": {}
  }
]
```

<h2 id="tocS_InstanceLabels">InstanceLabels</h2>
<!-- backwards compatibility -->
<a id="schemainstancelabels"></a>
<a id="schema_InstanceLabels"></a>
<a id="tocSinstancelabels"></a>
<a id="tocsinstancelabels"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InstanceStatus">InstanceStatus</h2>
<!-- backwards compatibility -->
<a id="schemainstancestatus"></a>
<a id="schema_InstanceStatus"></a>
<a id="tocSinstancestatus"></a>
<a id="tocsinstancestatus"></a>

```json
"IN_USE"
```

<h2 id="tocS_DeviceInstance">DeviceInstance</h2>
<!-- backwards compatibility -->
<a id="schemadeviceinstance"></a>
<a id="schema_DeviceInstance"></a>
<a id="tocSdeviceinstance"></a>
<a id="tocsdeviceinstance"></a>

```json
{
  "arn": {},
  "deviceArn": {},
  "labels": {},
  "status": {},
  "udid": {},
  "instanceProfile": {
    "arn": {},
    "packageCleanup": {},
    "excludeAppPackagesFromCleanup": {},
    "rebootAfterUse": {},
    "name": {},
    "description": {}
  }
}
```

Represents the device instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|deviceArn|object|false|none|none|
|labels|object|false|none|none|
|status|object|false|none|none|
|udid|object|false|none|none|
|instanceProfile|object|false|none|none|

<h2 id="tocS_DeviceMinutes">DeviceMinutes</h2>
<!-- backwards compatibility -->
<a id="schemadeviceminutes"></a>
<a id="schema_DeviceMinutes"></a>
<a id="tocSdeviceminutes"></a>
<a id="tocsdeviceminutes"></a>

```json
{
  "total": {},
  "metered": {},
  "unmetered": {}
}
```

Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|object|false|none|none|
|metered|object|false|none|none|
|unmetered|object|false|none|none|

<h2 id="tocS_DevicePoolType">DevicePoolType</h2>
<!-- backwards compatibility -->
<a id="schemadevicepooltype"></a>
<a id="schema_DevicePoolType"></a>
<a id="tocSdevicepooltype"></a>
<a id="tocsdevicepooltype"></a>

```json
"CURATED"
```

<h2 id="tocS_IncompatibilityMessages">IncompatibilityMessages</h2>
<!-- backwards compatibility -->
<a id="schemaincompatibilitymessages"></a>
<a id="schema_IncompatibilityMessages"></a>
<a id="tocSincompatibilitymessages"></a>
<a id="tocsincompatibilitymessages"></a>

```json
[
  {
    "message": {},
    "type": {}
  }
]
```

<h2 id="tocS_DevicePoolCompatibilityResult">DevicePoolCompatibilityResult</h2>
<!-- backwards compatibility -->
<a id="schemadevicepoolcompatibilityresult"></a>
<a id="schema_DevicePoolCompatibilityResult"></a>
<a id="tocSdevicepoolcompatibilityresult"></a>
<a id="tocsdevicepoolcompatibilityresult"></a>

```json
{
  "device": {
    "arn": {},
    "name": {},
    "manufacturer": {},
    "model": {},
    "modelId": {},
    "formFactor": {},
    "platform": {},
    "os": {},
    "cpu": {
      "frequency": {},
      "architecture": {},
      "clock": {}
    },
    "resolution": {
      "width": {},
      "height": {}
    },
    "heapSize": {},
    "memory": {},
    "image": {},
    "carrier": {},
    "radio": {},
    "remoteAccessEnabled": {},
    "remoteDebugEnabled": {},
    "fleetType": {},
    "fleetName": {},
    "instances": {},
    "availability": {}
  },
  "compatible": {},
  "incompatibilityMessages": {}
}
```

Represents a device pool compatibility result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|object|false|none|none|
|compatible|object|false|none|none|
|incompatibilityMessages|object|false|none|none|

<h2 id="tocS_DevicePoolCompatibilityResults">DevicePoolCompatibilityResults</h2>
<!-- backwards compatibility -->
<a id="schemadevicepoolcompatibilityresults"></a>
<a id="schema_DevicePoolCompatibilityResults"></a>
<a id="tocSdevicepoolcompatibilityresults"></a>
<a id="tocsdevicepoolcompatibilityresults"></a>

```json
[
  {
    "device": {
      "arn": {},
      "name": {},
      "manufacturer": {},
      "model": {},
      "modelId": {},
      "formFactor": {},
      "platform": {},
      "os": {},
      "cpu": {
        "frequency": {},
        "architecture": {},
        "clock": {}
      },
      "resolution": {
        "width": {},
        "height": {}
      },
      "heapSize": {},
      "memory": {},
      "image": {},
      "carrier": {},
      "radio": {},
      "remoteAccessEnabled": {},
      "remoteDebugEnabled": {},
      "fleetType": {},
      "fleetName": {},
      "instances": {},
      "availability": {}
    },
    "compatible": {},
    "incompatibilityMessages": {}
  }
]
```

<h2 id="tocS_DevicePools">DevicePools</h2>
<!-- backwards compatibility -->
<a id="schemadevicepools"></a>
<a id="schema_DevicePools"></a>
<a id="tocSdevicepools"></a>
<a id="tocsdevicepools"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "description": {},
    "type": {},
    "rules": {},
    "maxDevices": {}
  }
]
```

<h2 id="tocS_DeviceSelectionConfiguration">DeviceSelectionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadeviceselectionconfiguration"></a>
<a id="schema_DeviceSelectionConfiguration"></a>
<a id="tocSdeviceselectionconfiguration"></a>
<a id="tocsdeviceselectionconfiguration"></a>

```json
{
  "filters": {},
  "maxDevices": {}
}
```

Represents the device filters used in a test run and the maximum number of devices to be included in the run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|true|none|none|
|maxDevices|object|true|none|none|

<h2 id="tocS_DeviceSelectionResult">DeviceSelectionResult</h2>
<!-- backwards compatibility -->
<a id="schemadeviceselectionresult"></a>
<a id="schema_DeviceSelectionResult"></a>
<a id="tocSdeviceselectionresult"></a>
<a id="tocsdeviceselectionresult"></a>

```json
{
  "filters": {},
  "matchedDevicesCount": {},
  "maxDevices": {}
}
```

Contains the run results requested by the device selection configuration and how many devices were returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|
|matchedDevicesCount|object|false|none|none|
|maxDevices|object|false|none|none|

<h2 id="tocS_Devices">Devices</h2>
<!-- backwards compatibility -->
<a id="schemadevices"></a>
<a id="schema_Devices"></a>
<a id="tocSdevices"></a>
<a id="tocsdevices"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "manufacturer": {},
    "model": {},
    "modelId": {},
    "formFactor": {},
    "platform": {},
    "os": {},
    "cpu": {
      "frequency": {},
      "architecture": {},
      "clock": {}
    },
    "resolution": {
      "width": {},
      "height": {}
    },
    "heapSize": {},
    "memory": {},
    "image": {},
    "carrier": {},
    "radio": {},
    "remoteAccessEnabled": {},
    "remoteDebugEnabled": {},
    "fleetType": {},
    "fleetName": {},
    "instances": {},
    "availability": {}
  }
]
```

<h2 id="tocS_VideoCapture">VideoCapture</h2>
<!-- backwards compatibility -->
<a id="schemavideocapture"></a>
<a id="schema_VideoCapture"></a>
<a id="tocSvideocapture"></a>
<a id="tocsvideocapture"></a>

```json
true
```

<h2 id="tocS_ExecutionConfiguration">ExecutionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionconfiguration"></a>
<a id="schema_ExecutionConfiguration"></a>
<a id="tocSexecutionconfiguration"></a>
<a id="tocsexecutionconfiguration"></a>

```json
{
  "jobTimeoutMinutes": {},
  "accountsCleanup": {},
  "appPackagesCleanup": {},
  "videoCapture": {},
  "skipAppResign": {}
}
```

Represents configuration information about a test run, such as the execution timeout (in minutes).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobTimeoutMinutes|object|false|none|none|
|accountsCleanup|object|false|none|none|
|appPackagesCleanup|object|false|none|none|
|videoCapture|object|false|none|none|
|skipAppResign|object|false|none|none|

<h2 id="tocS_ExecutionResult">ExecutionResult</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionresult"></a>
<a id="schema_ExecutionResult"></a>
<a id="tocSexecutionresult"></a>
<a id="tocsexecutionresult"></a>

```json
"PENDING"
```

<h2 id="tocS_ExecutionResultCode">ExecutionResultCode</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionresultcode"></a>
<a id="schema_ExecutionResultCode"></a>
<a id="tocSexecutionresultcode"></a>
<a id="tocsexecutionresultcode"></a>

```json
"PARSING_FAILED"
```

<h2 id="tocS_ExecutionStatus">ExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionstatus"></a>
<a id="schema_ExecutionStatus"></a>
<a id="tocSexecutionstatus"></a>
<a id="tocsexecutionstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
"string"
```

<h2 id="tocS_TestType">TestType</h2>
<!-- backwards compatibility -->
<a id="schematesttype"></a>
<a id="schema_TestType"></a>
<a id="tocStesttype"></a>
<a id="tocstesttype"></a>

```json
"BUILTIN_FUZZ"
```

<h2 id="tocS_ScheduleRunTest">ScheduleRunTest</h2>
<!-- backwards compatibility -->
<a id="schemascheduleruntest"></a>
<a id="schema_ScheduleRunTest"></a>
<a id="tocSscheduleruntest"></a>
<a id="tocsscheduleruntest"></a>

```json
{
  "type": {},
  "testPackageArn": {},
  "testSpecArn": {},
  "filter": {},
  "parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|testPackageArn|object|false|none|none|
|testSpecArn|object|false|none|none|
|filter|object|false|none|none|
|parameters|object|false|none|none|

<h2 id="tocS_ScheduleRunConfiguration">ScheduleRunConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaschedulerunconfiguration"></a>
<a id="schema_ScheduleRunConfiguration"></a>
<a id="tocSschedulerunconfiguration"></a>
<a id="tocsschedulerunconfiguration"></a>

```json
{
  "extraDataPackageArn": {},
  "networkProfileArn": {},
  "locale": {},
  "location": {
    "latitude": {},
    "longitude": {}
  },
  "vpceConfigurationArns": {},
  "customerArtifactPaths": {
    "iosPaths": {},
    "androidPaths": {},
    "deviceHostPaths": {}
  },
  "radios": {
    "wifi": {},
    "bluetooth": {},
    "nfc": {},
    "gps": {}
  },
  "auxiliaryApps": {},
  "billingMethod": {}
}
```

Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extraDataPackageArn|object|false|none|none|
|networkProfileArn|object|false|none|none|
|locale|object|false|none|none|
|location|object|false|none|none|
|vpceConfigurationArns|object|false|none|none|
|customerArtifactPaths|object|false|none|none|
|radios|object|false|none|none|
|auxiliaryApps|object|false|none|none|
|billingMethod|object|false|none|none|

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "arn": {},
  "name": {},
  "type": {},
  "created": {},
  "status": {},
  "result": {},
  "started": {},
  "stopped": {},
  "counters": {
    "total": {},
    "passed": {},
    "failed": {},
    "warned": {},
    "errored": {},
    "stopped": {},
    "skipped": {}
  },
  "message": {},
  "device": {
    "arn": {},
    "name": {},
    "manufacturer": {},
    "model": {},
    "modelId": {},
    "formFactor": {},
    "platform": {},
    "os": {},
    "cpu": {
      "frequency": {},
      "architecture": {},
      "clock": {}
    },
    "resolution": {
      "width": {},
      "height": {}
    },
    "heapSize": {},
    "memory": {},
    "image": {},
    "carrier": {},
    "radio": {},
    "remoteAccessEnabled": {},
    "remoteDebugEnabled": {},
    "fleetType": {},
    "fleetName": {},
    "instances": {},
    "availability": {}
  },
  "instanceArn": {},
  "deviceMinutes": {
    "total": {},
    "metered": {},
    "unmetered": {}
  },
  "videoEndpoint": {},
  "videoCapture": {}
}
```

Represents a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|type|object|false|none|none|
|created|object|false|none|none|
|status|object|false|none|none|
|result|object|false|none|none|
|started|object|false|none|none|
|stopped|object|false|none|none|
|counters|object|false|none|none|
|message|object|false|none|none|
|device|object|false|none|none|
|instanceArn|object|false|none|none|
|deviceMinutes|object|false|none|none|
|videoEndpoint|object|false|none|none|
|videoCapture|object|false|none|none|

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_OfferingStatusMap">OfferingStatusMap</h2>
<!-- backwards compatibility -->
<a id="schemaofferingstatusmap"></a>
<a id="schema_OfferingStatusMap"></a>
<a id="tocSofferingstatusmap"></a>
<a id="tocsofferingstatusmap"></a>

```json
{
  "property1": {
    "type": {},
    "offering": {
      "id": {},
      "description": {},
      "type": {},
      "platform": {},
      "recurringCharges": {}
    },
    "quantity": {},
    "effectiveOn": {}
  },
  "property2": {
    "type": {},
    "offering": {
      "id": {},
      "description": {},
      "type": {},
      "platform": {},
      "recurringCharges": {}
    },
    "quantity": {},
    "effectiveOn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[OfferingStatus](#schemaofferingstatus)|false|none|The status of the offering.|

<h2 id="tocS_Run">Run</h2>
<!-- backwards compatibility -->
<a id="schemarun"></a>
<a id="schema_Run"></a>
<a id="tocSrun"></a>
<a id="tocsrun"></a>

```json
{
  "arn": {},
  "name": {},
  "type": {},
  "platform": {},
  "created": {},
  "status": {},
  "result": {},
  "started": {},
  "stopped": {},
  "counters": {
    "total": {},
    "passed": {},
    "failed": {},
    "warned": {},
    "errored": {},
    "stopped": {},
    "skipped": {}
  },
  "message": {},
  "totalJobs": {},
  "completedJobs": {},
  "billingMethod": {},
  "deviceMinutes": {
    "total": {},
    "metered": {},
    "unmetered": {}
  },
  "networkProfile": {
    "arn": {},
    "name": {},
    "description": {},
    "type": {},
    "uplinkBandwidthBits": {},
    "downlinkBandwidthBits": {},
    "uplinkDelayMs": {},
    "downlinkDelayMs": {},
    "uplinkJitterMs": {},
    "downlinkJitterMs": {},
    "uplinkLossPercent": {},
    "downlinkLossPercent": {}
  },
  "parsingResultUrl": {},
  "resultCode": {},
  "seed": {},
  "appUpload": {},
  "eventCount": {},
  "jobTimeoutMinutes": {},
  "devicePoolArn": {},
  "locale": {},
  "radios": {
    "wifi": {},
    "bluetooth": {},
    "nfc": {},
    "gps": {}
  },
  "location": {
    "latitude": {},
    "longitude": {}
  },
  "customerArtifactPaths": {
    "iosPaths": {},
    "androidPaths": {},
    "deviceHostPaths": {}
  },
  "webUrl": {},
  "skipAppResign": {},
  "testSpecArn": {},
  "deviceSelectionResult": {
    "filters": {},
    "matchedDevicesCount": {},
    "maxDevices": {}
  },
  "vpcConfig": {
    "securityGroupIds": {},
    "subnetIds": {},
    "vpcId": {}
  }
}
```

Represents a test run on a set of devices with a given app package, test parameters, and so on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|type|object|false|none|none|
|platform|object|false|none|none|
|created|object|false|none|none|
|status|object|false|none|none|
|result|object|false|none|none|
|started|object|false|none|none|
|stopped|object|false|none|none|
|counters|object|false|none|none|
|message|object|false|none|none|
|totalJobs|object|false|none|none|
|completedJobs|object|false|none|none|
|billingMethod|object|false|none|none|
|deviceMinutes|object|false|none|none|
|networkProfile|object|false|none|none|
|parsingResultUrl|object|false|none|none|
|resultCode|object|false|none|none|
|seed|object|false|none|none|
|appUpload|object|false|none|none|
|eventCount|object|false|none|none|
|jobTimeoutMinutes|object|false|none|none|
|devicePoolArn|object|false|none|none|
|locale|object|false|none|none|
|radios|object|false|none|none|
|location|object|false|none|none|
|customerArtifactPaths|object|false|none|none|
|webUrl|object|false|none|none|
|skipAppResign|object|false|none|none|
|testSpecArn|object|false|none|none|
|deviceSelectionResult|object|false|none|none|
|vpcConfig|object|false|none|none|

<h2 id="tocS_Suite">Suite</h2>
<!-- backwards compatibility -->
<a id="schemasuite"></a>
<a id="schema_Suite"></a>
<a id="tocSsuite"></a>
<a id="tocssuite"></a>

```json
{
  "arn": {},
  "name": {},
  "type": {},
  "created": {},
  "status": {},
  "result": {},
  "started": {},
  "stopped": {},
  "counters": {
    "total": {},
    "passed": {},
    "failed": {},
    "warned": {},
    "errored": {},
    "stopped": {},
    "skipped": {}
  },
  "message": {},
  "deviceMinutes": {
    "total": {},
    "metered": {},
    "unmetered": {}
  }
}
```

Represents a collection of one or more tests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|type|object|false|none|none|
|created|object|false|none|none|
|status|object|false|none|none|
|result|object|false|none|none|
|started|object|false|none|none|
|stopped|object|false|none|none|
|counters|object|false|none|none|
|message|object|false|none|none|
|deviceMinutes|object|false|none|none|

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"string"
```

<h2 id="tocS_TestGridSession">TestGridSession</h2>
<!-- backwards compatibility -->
<a id="schematestgridsession"></a>
<a id="schema_TestGridSession"></a>
<a id="tocStestgridsession"></a>
<a id="tocstestgridsession"></a>

```json
{
  "arn": {},
  "status": {},
  "created": {},
  "ended": {},
  "billingMinutes": {},
  "seleniumProperties": {}
}
```

A <a>TestGridSession</a> is a single instance of a browser launched from the URL provided by a call to <a>CreateTestGridUrl</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|status|object|false|none|none|
|created|object|false|none|none|
|ended|object|false|none|none|
|billingMinutes|object|false|none|none|
|seleniumProperties|object|false|none|none|

<h2 id="tocS_Test">Test</h2>
<!-- backwards compatibility -->
<a id="schematest"></a>
<a id="schema_Test"></a>
<a id="tocStest"></a>
<a id="tocstest"></a>

```json
{
  "arn": {},
  "name": {},
  "type": {},
  "created": {},
  "status": {},
  "result": {},
  "started": {},
  "stopped": {},
  "counters": {
    "total": {},
    "passed": {},
    "failed": {},
    "warned": {},
    "errored": {},
    "stopped": {},
    "skipped": {}
  },
  "message": {},
  "deviceMinutes": {
    "total": {},
    "metered": {},
    "unmetered": {}
  }
}
```

Represents a condition that is evaluated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|type|object|false|none|none|
|created|object|false|none|none|
|status|object|false|none|none|
|result|object|false|none|none|
|started|object|false|none|none|
|stopped|object|false|none|none|
|counters|object|false|none|none|
|message|object|false|none|none|
|deviceMinutes|object|false|none|none|

<h2 id="tocS_HostAddress">HostAddress</h2>
<!-- backwards compatibility -->
<a id="schemahostaddress"></a>
<a id="schema_HostAddress"></a>
<a id="tocShostaddress"></a>
<a id="tocshostaddress"></a>

```json
"string"
```

<h2 id="tocS_IncompatibilityMessage">IncompatibilityMessage</h2>
<!-- backwards compatibility -->
<a id="schemaincompatibilitymessage"></a>
<a id="schema_IncompatibilityMessage"></a>
<a id="tocSincompatibilitymessage"></a>
<a id="tocsincompatibilitymessage"></a>

```json
{
  "message": {},
  "type": {}
}
```

Represents information about incompatibility.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_InstanceProfiles">InstanceProfiles</h2>
<!-- backwards compatibility -->
<a id="schemainstanceprofiles"></a>
<a id="schema_InstanceProfiles"></a>
<a id="tocSinstanceprofiles"></a>
<a id="tocsinstanceprofiles"></a>

```json
[
  {
    "arn": {},
    "packageCleanup": {},
    "excludeAppPackagesFromCleanup": {},
    "rebootAfterUse": {},
    "name": {},
    "description": {}
  }
]
```

<h2 id="tocS_Jobs">Jobs</h2>
<!-- backwards compatibility -->
<a id="schemajobs"></a>
<a id="schema_Jobs"></a>
<a id="tocSjobs"></a>
<a id="tocsjobs"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "type": {},
    "created": {},
    "status": {},
    "result": {},
    "started": {},
    "stopped": {},
    "counters": {
      "total": {},
      "passed": {},
      "failed": {},
      "warned": {},
      "errored": {},
      "stopped": {},
      "skipped": {}
    },
    "message": {},
    "device": {
      "arn": {},
      "name": {},
      "manufacturer": {},
      "model": {},
      "modelId": {},
      "formFactor": {},
      "platform": {},
      "os": {},
      "cpu": {
        "frequency": {},
        "architecture": {},
        "clock": {}
      },
      "resolution": {
        "width": {},
        "height": {}
      },
      "heapSize": {},
      "memory": {},
      "image": {},
      "carrier": {},
      "radio": {},
      "remoteAccessEnabled": {},
      "remoteDebugEnabled": {},
      "fleetType": {},
      "fleetName": {},
      "instances": {},
      "availability": {}
    },
    "instanceArn": {},
    "deviceMinutes": {
      "total": {},
      "metered": {},
      "unmetered": {}
    },
    "videoEndpoint": {},
    "videoCapture": {}
  }
]
```

<h2 id="tocS_NetworkProfiles">NetworkProfiles</h2>
<!-- backwards compatibility -->
<a id="schemanetworkprofiles"></a>
<a id="schema_NetworkProfiles"></a>
<a id="tocSnetworkprofiles"></a>
<a id="tocsnetworkprofiles"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "description": {},
    "type": {},
    "uplinkBandwidthBits": {},
    "downlinkBandwidthBits": {},
    "uplinkDelayMs": {},
    "downlinkDelayMs": {},
    "uplinkJitterMs": {},
    "downlinkJitterMs": {},
    "uplinkLossPercent": {},
    "downlinkLossPercent": {}
  }
]
```

<h2 id="tocS_OfferingPromotions">OfferingPromotions</h2>
<!-- backwards compatibility -->
<a id="schemaofferingpromotions"></a>
<a id="schema_OfferingPromotions"></a>
<a id="tocSofferingpromotions"></a>
<a id="tocsofferingpromotions"></a>

```json
[
  {
    "id": {},
    "description": {}
  }
]
```

<h2 id="tocS_OfferingTransactions">OfferingTransactions</h2>
<!-- backwards compatibility -->
<a id="schemaofferingtransactions"></a>
<a id="schema_OfferingTransactions"></a>
<a id="tocSofferingtransactions"></a>
<a id="tocsofferingtransactions"></a>

```json
[
  {
    "offeringStatus": {
      "type": {},
      "offering": {
        "id": {},
        "description": {},
        "type": {},
        "platform": {},
        "recurringCharges": {}
      },
      "quantity": {},
      "effectiveOn": {}
    },
    "transactionId": {},
    "offeringPromotionId": {},
    "createdOn": {},
    "cost": {
      "amount": {},
      "currencyCode": {}
    }
  }
]
```

<h2 id="tocS_Offerings">Offerings</h2>
<!-- backwards compatibility -->
<a id="schemaofferings"></a>
<a id="schema_Offerings"></a>
<a id="tocSofferings"></a>
<a id="tocsofferings"></a>

```json
[
  {
    "id": {},
    "description": {},
    "type": {},
    "platform": {},
    "recurringCharges": {}
  }
]
```

<h2 id="tocS_Projects">Projects</h2>
<!-- backwards compatibility -->
<a id="schemaprojects"></a>
<a id="schema_Projects"></a>
<a id="tocSprojects"></a>
<a id="tocsprojects"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "defaultJobTimeoutMinutes": {},
    "created": {},
    "vpcConfig": {
      "securityGroupIds": {},
      "subnetIds": {},
      "vpcId": {}
    }
  }
]
```

<h2 id="tocS_RemoteAccessSessions">RemoteAccessSessions</h2>
<!-- backwards compatibility -->
<a id="schemaremoteaccesssessions"></a>
<a id="schema_RemoteAccessSessions"></a>
<a id="tocSremoteaccesssessions"></a>
<a id="tocsremoteaccesssessions"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "created": {},
    "status": {},
    "result": {},
    "message": {},
    "started": {},
    "stopped": {},
    "device": {
      "arn": {},
      "name": {},
      "manufacturer": {},
      "model": {},
      "modelId": {},
      "formFactor": {},
      "platform": {},
      "os": {},
      "cpu": {
        "frequency": {},
        "architecture": {},
        "clock": {}
      },
      "resolution": {
        "width": {},
        "height": {}
      },
      "heapSize": {},
      "memory": {},
      "image": {},
      "carrier": {},
      "radio": {},
      "remoteAccessEnabled": {},
      "remoteDebugEnabled": {},
      "fleetType": {},
      "fleetName": {},
      "instances": {},
      "availability": {}
    },
    "instanceArn": {},
    "remoteDebugEnabled": {},
    "remoteRecordEnabled": {},
    "remoteRecordAppArn": {},
    "hostAddress": {},
    "clientId": {},
    "billingMethod": {},
    "deviceMinutes": {
      "total": {},
      "metered": {},
      "unmetered": {}
    },
    "endpoint": {},
    "deviceUdid": {},
    "interactionMode": {},
    "skipAppResign": {},
    "vpcConfig": {
      "securityGroupIds": {},
      "subnetIds": {},
      "vpcId": {}
    }
  }
]
```

<h2 id="tocS_Runs">Runs</h2>
<!-- backwards compatibility -->
<a id="schemaruns"></a>
<a id="schema_Runs"></a>
<a id="tocSruns"></a>
<a id="tocsruns"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "type": {},
    "platform": {},
    "created": {},
    "status": {},
    "result": {},
    "started": {},
    "stopped": {},
    "counters": {
      "total": {},
      "passed": {},
      "failed": {},
      "warned": {},
      "errored": {},
      "stopped": {},
      "skipped": {}
    },
    "message": {},
    "totalJobs": {},
    "completedJobs": {},
    "billingMethod": {},
    "deviceMinutes": {
      "total": {},
      "metered": {},
      "unmetered": {}
    },
    "networkProfile": {
      "arn": {},
      "name": {},
      "description": {},
      "type": {},
      "uplinkBandwidthBits": {},
      "downlinkBandwidthBits": {},
      "uplinkDelayMs": {},
      "downlinkDelayMs": {},
      "uplinkJitterMs": {},
      "downlinkJitterMs": {},
      "uplinkLossPercent": {},
      "downlinkLossPercent": {}
    },
    "parsingResultUrl": {},
    "resultCode": {},
    "seed": {},
    "appUpload": {},
    "eventCount": {},
    "jobTimeoutMinutes": {},
    "devicePoolArn": {},
    "locale": {},
    "radios": {
      "wifi": {},
      "bluetooth": {},
      "nfc": {},
      "gps": {}
    },
    "location": {
      "latitude": {},
      "longitude": {}
    },
    "customerArtifactPaths": {
      "iosPaths": {},
      "androidPaths": {},
      "deviceHostPaths": {}
    },
    "webUrl": {},
    "skipAppResign": {},
    "testSpecArn": {},
    "deviceSelectionResult": {
      "filters": {},
      "matchedDevicesCount": {},
      "maxDevices": {}
    },
    "vpcConfig": {
      "securityGroupIds": {},
      "subnetIds": {},
      "vpcId": {}
    }
  }
]
```

<h2 id="tocS_Samples">Samples</h2>
<!-- backwards compatibility -->
<a id="schemasamples"></a>
<a id="schema_Samples"></a>
<a id="tocSsamples"></a>
<a id="tocssamples"></a>

```json
[
  {
    "arn": {},
    "type": {},
    "url": {}
  }
]
```

<h2 id="tocS_Suites">Suites</h2>
<!-- backwards compatibility -->
<a id="schemasuites"></a>
<a id="schema_Suites"></a>
<a id="tocSsuites"></a>
<a id="tocssuites"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "type": {},
    "created": {},
    "status": {},
    "result": {},
    "started": {},
    "stopped": {},
    "counters": {
      "total": {},
      "passed": {},
      "failed": {},
      "warned": {},
      "errored": {},
      "stopped": {},
      "skipped": {}
    },
    "message": {},
    "deviceMinutes": {
      "total": {},
      "metered": {},
      "unmetered": {}
    }
  }
]
```

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

<h2 id="tocS_MaxPageSize">MaxPageSize</h2>
<!-- backwards compatibility -->
<a id="schemamaxpagesize"></a>
<a id="schema_MaxPageSize"></a>
<a id="tocSmaxpagesize"></a>
<a id="tocsmaxpagesize"></a>

```json
1
```

<h2 id="tocS_TestGridProjects">TestGridProjects</h2>
<!-- backwards compatibility -->
<a id="schematestgridprojects"></a>
<a id="schema_TestGridProjects"></a>
<a id="tocStestgridprojects"></a>
<a id="tocstestgridprojects"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "description": {},
    "vpcConfig": {
      "securityGroupIds": {},
      "subnetIds": {},
      "vpcId": {}
    },
    "created": {}
  }
]
```

<h2 id="tocS_TestGridSessionActions">TestGridSessionActions</h2>
<!-- backwards compatibility -->
<a id="schematestgridsessionactions"></a>
<a id="schema_TestGridSessionActions"></a>
<a id="tocStestgridsessionactions"></a>
<a id="tocstestgridsessionactions"></a>

```json
[
  {
    "action": {},
    "started": {},
    "duration": {},
    "statusCode": {},
    "requestMethod": {}
  }
]
```

<h2 id="tocS_TestGridSessionArtifactCategory">TestGridSessionArtifactCategory</h2>
<!-- backwards compatibility -->
<a id="schematestgridsessionartifactcategory"></a>
<a id="schema_TestGridSessionArtifactCategory"></a>
<a id="tocStestgridsessionartifactcategory"></a>
<a id="tocstestgridsessionartifactcategory"></a>

```json
"VIDEO"
```

<h2 id="tocS_TestGridSessionArtifacts">TestGridSessionArtifacts</h2>
<!-- backwards compatibility -->
<a id="schematestgridsessionartifacts"></a>
<a id="schema_TestGridSessionArtifacts"></a>
<a id="tocStestgridsessionartifacts"></a>
<a id="tocstestgridsessionartifacts"></a>

```json
[
  {
    "filename": {},
    "type": {},
    "url": {}
  }
]
```

<h2 id="tocS_TestGridSessionStatus">TestGridSessionStatus</h2>
<!-- backwards compatibility -->
<a id="schematestgridsessionstatus"></a>
<a id="schema_TestGridSessionStatus"></a>
<a id="tocStestgridsessionstatus"></a>
<a id="tocstestgridsessionstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_TestGridSessions">TestGridSessions</h2>
<!-- backwards compatibility -->
<a id="schematestgridsessions"></a>
<a id="schema_TestGridSessions"></a>
<a id="tocStestgridsessions"></a>
<a id="tocstestgridsessions"></a>

```json
[
  {
    "arn": {},
    "status": {},
    "created": {},
    "ended": {},
    "billingMinutes": {},
    "seleniumProperties": {}
  }
]
```

<h2 id="tocS_Tests">Tests</h2>
<!-- backwards compatibility -->
<a id="schematests"></a>
<a id="schema_Tests"></a>
<a id="tocStests"></a>
<a id="tocstests"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "type": {},
    "created": {},
    "status": {},
    "result": {},
    "started": {},
    "stopped": {},
    "counters": {
      "total": {},
      "passed": {},
      "failed": {},
      "warned": {},
      "errored": {},
      "stopped": {},
      "skipped": {}
    },
    "message": {},
    "deviceMinutes": {
      "total": {},
      "metered": {},
      "unmetered": {}
    }
  }
]
```

<h2 id="tocS_UniqueProblemsByExecutionResultMap">UniqueProblemsByExecutionResultMap</h2>
<!-- backwards compatibility -->
<a id="schemauniqueproblemsbyexecutionresultmap"></a>
<a id="schema_UniqueProblemsByExecutionResultMap"></a>
<a id="tocSuniqueproblemsbyexecutionresultmap"></a>
<a id="tocsuniqueproblemsbyexecutionresultmap"></a>

```json
{
  "property1": [
    {
      "message": {},
      "problems": {}
    }
  ],
  "property2": [
    {
      "message": {},
      "problems": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[UniqueProblems](#schemauniqueproblems)|false|none|none|

<h2 id="tocS_Uploads">Uploads</h2>
<!-- backwards compatibility -->
<a id="schemauploads"></a>
<a id="schema_Uploads"></a>
<a id="tocSuploads"></a>
<a id="tocsuploads"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "created": {},
    "type": {},
    "status": {},
    "url": {},
    "metadata": {},
    "contentType": {},
    "message": {},
    "category": {}
  }
]
```

<h2 id="tocS_VPCEConfigurations">VPCEConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemavpceconfigurations"></a>
<a id="schema_VPCEConfigurations"></a>
<a id="tocSvpceconfigurations"></a>
<a id="tocsvpceconfigurations"></a>

```json
[
  {
    "arn": {},
    "vpceConfigurationName": {},
    "vpceServiceName": {},
    "serviceDnsName": {},
    "vpceConfigurationDescription": {}
  }
]
```

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "latitude": {},
  "longitude": {}
}
```

<p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example, 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|object|true|none|none|
|longitude|object|true|none|none|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
"string"
```

<h2 id="tocS_MonetaryAmount">MonetaryAmount</h2>
<!-- backwards compatibility -->
<a id="schemamonetaryamount"></a>
<a id="schema_MonetaryAmount"></a>
<a id="tocSmonetaryamount"></a>
<a id="tocsmonetaryamount"></a>

```json
{
  "amount": {},
  "currencyCode": {}
}
```

A number that represents the monetary amount for an offering or transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|object|false|none|none|
|currencyCode|object|false|none|none|

<h2 id="tocS_NonEmptyString">NonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystring"></a>
<a id="schema_NonEmptyString"></a>
<a id="tocSnonemptystring"></a>
<a id="tocsnonemptystring"></a>

```json
"string"
```

<h2 id="tocS_OfferingIdentifier">OfferingIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaofferingidentifier"></a>
<a id="schema_OfferingIdentifier"></a>
<a id="tocSofferingidentifier"></a>
<a id="tocsofferingidentifier"></a>

```json
"stringstringstringstringstringst"
```

<h2 id="tocS_OfferingType">OfferingType</h2>
<!-- backwards compatibility -->
<a id="schemaofferingtype"></a>
<a id="schema_OfferingType"></a>
<a id="tocSofferingtype"></a>
<a id="tocsofferingtype"></a>

```json
"RECURRING"
```

<h2 id="tocS_RecurringCharges">RecurringCharges</h2>
<!-- backwards compatibility -->
<a id="schemarecurringcharges"></a>
<a id="schema_RecurringCharges"></a>
<a id="tocSrecurringcharges"></a>
<a id="tocsrecurringcharges"></a>

```json
[
  {
    "cost": {
      "amount": {},
      "currencyCode": {}
    },
    "frequency": {}
  }
]
```

<h2 id="tocS_Offering">Offering</h2>
<!-- backwards compatibility -->
<a id="schemaoffering"></a>
<a id="schema_Offering"></a>
<a id="tocSoffering"></a>
<a id="tocsoffering"></a>

```json
{
  "id": {},
  "description": {},
  "type": {},
  "platform": {},
  "recurringCharges": {}
}
```

Represents the metadata of a device offering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|description|object|false|none|none|
|type|object|false|none|none|
|platform|object|false|none|none|
|recurringCharges|object|false|none|none|

<h2 id="tocS_OfferingPromotionIdentifier">OfferingPromotionIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaofferingpromotionidentifier"></a>
<a id="schema_OfferingPromotionIdentifier"></a>
<a id="tocSofferingpromotionidentifier"></a>
<a id="tocsofferingpromotionidentifier"></a>

```json
"string"
```

<h2 id="tocS_OfferingPromotion">OfferingPromotion</h2>
<!-- backwards compatibility -->
<a id="schemaofferingpromotion"></a>
<a id="schema_OfferingPromotion"></a>
<a id="tocSofferingpromotion"></a>
<a id="tocsofferingpromotion"></a>

```json
{
  "id": {},
  "description": {}
}
```

Represents information about an offering promotion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|description|object|false|none|none|

<h2 id="tocS_OfferingTransactionType">OfferingTransactionType</h2>
<!-- backwards compatibility -->
<a id="schemaofferingtransactiontype"></a>
<a id="schema_OfferingTransactionType"></a>
<a id="tocSofferingtransactiontype"></a>
<a id="tocsofferingtransactiontype"></a>

```json
"PURCHASE"
```

<h2 id="tocS_OfferingStatus">OfferingStatus</h2>
<!-- backwards compatibility -->
<a id="schemaofferingstatus"></a>
<a id="schema_OfferingStatus"></a>
<a id="tocSofferingstatus"></a>
<a id="tocsofferingstatus"></a>

```json
{
  "type": {},
  "offering": {
    "id": {},
    "description": {},
    "type": {},
    "platform": {},
    "recurringCharges": {}
  },
  "quantity": {},
  "effectiveOn": {}
}
```

The status of the offering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|offering|object|false|none|none|
|quantity|object|false|none|none|
|effectiveOn|object|false|none|none|

<h2 id="tocS_TransactionIdentifier">TransactionIdentifier</h2>
<!-- backwards compatibility -->
<a id="schematransactionidentifier"></a>
<a id="schema_TransactionIdentifier"></a>
<a id="tocStransactionidentifier"></a>
<a id="tocstransactionidentifier"></a>

```json
"stringstringstringstringstringst"
```

<h2 id="tocS_OfferingTransaction">OfferingTransaction</h2>
<!-- backwards compatibility -->
<a id="schemaofferingtransaction"></a>
<a id="schema_OfferingTransaction"></a>
<a id="tocSofferingtransaction"></a>
<a id="tocsofferingtransaction"></a>

```json
{
  "offeringStatus": {
    "type": {},
    "offering": {
      "id": {},
      "description": {},
      "type": {},
      "platform": {},
      "recurringCharges": {}
    },
    "quantity": {},
    "effectiveOn": {}
  },
  "transactionId": {},
  "offeringPromotionId": {},
  "createdOn": {},
  "cost": {
    "amount": {},
    "currencyCode": {}
  }
}
```

Represents the metadata of an offering transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offeringStatus|object|false|none|none|
|transactionId|object|false|none|none|
|offeringPromotionId|object|false|none|none|
|createdOn|object|false|none|none|
|cost|object|false|none|none|

<h2 id="tocS_ProblemDetail">ProblemDetail</h2>
<!-- backwards compatibility -->
<a id="schemaproblemdetail"></a>
<a id="schema_ProblemDetail"></a>
<a id="tocSproblemdetail"></a>
<a id="tocsproblemdetail"></a>

```json
{
  "arn": {},
  "name": {}
}
```

Information about a problem detail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|

<h2 id="tocS_Problem">Problem</h2>
<!-- backwards compatibility -->
<a id="schemaproblem"></a>
<a id="schema_Problem"></a>
<a id="tocSproblem"></a>
<a id="tocsproblem"></a>

```json
{
  "run": {
    "arn": {},
    "name": {}
  },
  "job": {
    "arn": {},
    "name": {}
  },
  "suite": {
    "arn": {},
    "name": {}
  },
  "test": {
    "arn": {},
    "name": {}
  },
  "device": {
    "arn": {},
    "name": {},
    "manufacturer": {},
    "model": {},
    "modelId": {},
    "formFactor": {},
    "platform": {},
    "os": {},
    "cpu": {
      "frequency": {},
      "architecture": {},
      "clock": {}
    },
    "resolution": {
      "width": {},
      "height": {}
    },
    "heapSize": {},
    "memory": {},
    "image": {},
    "carrier": {},
    "radio": {},
    "remoteAccessEnabled": {},
    "remoteDebugEnabled": {},
    "fleetType": {},
    "fleetName": {},
    "instances": {},
    "availability": {}
  },
  "result": {},
  "message": {}
}
```

Represents a specific warning or failure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|run|object|false|none|none|
|job|object|false|none|none|
|suite|object|false|none|none|
|test|object|false|none|none|
|device|object|false|none|none|
|result|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_Problems">Problems</h2>
<!-- backwards compatibility -->
<a id="schemaproblems"></a>
<a id="schema_Problems"></a>
<a id="tocSproblems"></a>
<a id="tocsproblems"></a>

```json
[
  {
    "run": {
      "arn": {},
      "name": {}
    },
    "job": {
      "arn": {},
      "name": {}
    },
    "suite": {
      "arn": {},
      "name": {}
    },
    "test": {
      "arn": {},
      "name": {}
    },
    "device": {
      "arn": {},
      "name": {},
      "manufacturer": {},
      "model": {},
      "modelId": {},
      "formFactor": {},
      "platform": {},
      "os": {},
      "cpu": {
        "frequency": {},
        "architecture": {},
        "clock": {}
      },
      "resolution": {
        "width": {},
        "height": {}
      },
      "heapSize": {},
      "memory": {},
      "image": {},
      "carrier": {},
      "radio": {},
      "remoteAccessEnabled": {},
      "remoteDebugEnabled": {},
      "fleetType": {},
      "fleetName": {},
      "instances": {},
      "availability": {}
    },
    "result": {},
    "message": {}
  }
]
```

<h2 id="tocS_Radios">Radios</h2>
<!-- backwards compatibility -->
<a id="schemaradios"></a>
<a id="schema_Radios"></a>
<a id="tocSradios"></a>
<a id="tocsradios"></a>

```json
{
  "wifi": {},
  "bluetooth": {},
  "nfc": {},
  "gps": {}
}
```

Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wifi|object|false|none|none|
|bluetooth|object|false|none|none|
|nfc|object|false|none|none|
|gps|object|false|none|none|

<h2 id="tocS_RecurringChargeFrequency">RecurringChargeFrequency</h2>
<!-- backwards compatibility -->
<a id="schemarecurringchargefrequency"></a>
<a id="schema_RecurringChargeFrequency"></a>
<a id="tocSrecurringchargefrequency"></a>
<a id="tocsrecurringchargefrequency"></a>

```json
"MONTHLY"
```

<h2 id="tocS_RecurringCharge">RecurringCharge</h2>
<!-- backwards compatibility -->
<a id="schemarecurringcharge"></a>
<a id="schema_RecurringCharge"></a>
<a id="tocSrecurringcharge"></a>
<a id="tocsrecurringcharge"></a>

```json
{
  "cost": {
    "amount": {},
    "currencyCode": {}
  },
  "frequency": {}
}
```

Specifies whether charges for devices are recurring.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cost|object|false|none|none|
|frequency|object|false|none|none|

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "attribute": {},
  "operator": {},
  "value": {}
}
```

Represents a condition for a device pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute|object|false|none|none|
|operator|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_SampleType">SampleType</h2>
<!-- backwards compatibility -->
<a id="schemasampletype"></a>
<a id="schema_SampleType"></a>
<a id="tocSsampletype"></a>
<a id="tocssampletype"></a>

```json
"CPU"
```

<h2 id="tocS_Sample">Sample</h2>
<!-- backwards compatibility -->
<a id="schemasample"></a>
<a id="schema_Sample"></a>
<a id="tocSsample"></a>
<a id="tocssample"></a>

```json
{
  "arn": {},
  "type": {},
  "url": {}
}
```

Represents a sample of performance data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|type|object|false|none|none|
|url|object|false|none|none|

<h2 id="tocS_TestParameters">TestParameters</h2>
<!-- backwards compatibility -->
<a id="schematestparameters"></a>
<a id="schema_TestParameters"></a>
<a id="tocStestparameters"></a>
<a id="tocstestparameters"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_SecurityGroupId">SecurityGroupId</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupid"></a>
<a id="schema_SecurityGroupId"></a>
<a id="tocSsecuritygroupid"></a>
<a id="tocssecuritygroupid"></a>

```json
"string"
```

<h2 id="tocS_SecurityGroupIds">SecurityGroupIds</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupids"></a>
<a id="schema_SecurityGroupIds"></a>
<a id="tocSsecuritygroupids"></a>
<a id="tocssecuritygroupids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SensitiveURL">SensitiveURL</h2>
<!-- backwards compatibility -->
<a id="schemasensitiveurl"></a>
<a id="schema_SensitiveURL"></a>
<a id="tocSsensitiveurl"></a>
<a id="tocssensitiveurl"></a>

```json
"password"
```

<h2 id="tocS_SubnetId">SubnetId</h2>
<!-- backwards compatibility -->
<a id="schemasubnetid"></a>
<a id="schema_SubnetId"></a>
<a id="tocSsubnetid"></a>
<a id="tocssubnetid"></a>

```json
"string"
```

<h2 id="tocS_SubnetIds">SubnetIds</h2>
<!-- backwards compatibility -->
<a id="schemasubnetids"></a>
<a id="schema_SubnetIds"></a>
<a id="tocSsubnetids"></a>
<a id="tocssubnetids"></a>

```json
[
  "string"
]
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

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
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

The metadata that you apply to a resource to help you categorize and organize it. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters. Tag values can have a maximum length of 256 characters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

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

<h2 id="tocS_TestGridSessionAction">TestGridSessionAction</h2>
<!-- backwards compatibility -->
<a id="schematestgridsessionaction"></a>
<a id="schema_TestGridSessionAction"></a>
<a id="tocStestgridsessionaction"></a>
<a id="tocstestgridsessionaction"></a>

```json
{
  "action": {},
  "started": {},
  "duration": {},
  "statusCode": {},
  "requestMethod": {}
}
```

An action taken by a <a>TestGridSession</a> browser instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|started|object|false|none|none|
|duration|object|false|none|none|
|statusCode|object|false|none|none|
|requestMethod|object|false|none|none|

<h2 id="tocS_TestGridSessionArtifactType">TestGridSessionArtifactType</h2>
<!-- backwards compatibility -->
<a id="schematestgridsessionartifacttype"></a>
<a id="schema_TestGridSessionArtifactType"></a>
<a id="tocStestgridsessionartifacttype"></a>
<a id="tocstestgridsessionartifacttype"></a>

```json
"UNKNOWN"
```

<h2 id="tocS_TestGridSessionArtifact">TestGridSessionArtifact</h2>
<!-- backwards compatibility -->
<a id="schematestgridsessionartifact"></a>
<a id="schema_TestGridSessionArtifact"></a>
<a id="tocStestgridsessionartifact"></a>
<a id="tocstestgridsessionartifact"></a>

```json
{
  "filename": {},
  "type": {},
  "url": {}
}
```

<p>Artifacts are video and other files that are produced in the process of running a browser in an automated context. </p> <note> <p>Video elements might be broken up into multiple artifacts as they grow in size during creation. </p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filename|object|false|none|none|
|type|object|false|none|none|
|url|object|false|none|none|

<h2 id="tocS_UniqueProblem">UniqueProblem</h2>
<!-- backwards compatibility -->
<a id="schemauniqueproblem"></a>
<a id="schema_UniqueProblem"></a>
<a id="tocSuniqueproblem"></a>
<a id="tocsuniqueproblem"></a>

```json
{
  "message": {},
  "problems": {}
}
```

A collection of one or more problems, grouped by their result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|
|problems|object|false|none|none|

<h2 id="tocS_UniqueProblems">UniqueProblems</h2>
<!-- backwards compatibility -->
<a id="schemauniqueproblems"></a>
<a id="schema_UniqueProblems"></a>
<a id="tocSuniqueproblems"></a>
<a id="tocsuniqueproblems"></a>

```json
[
  {
    "message": {},
    "problems": {}
  }
]
```

<h2 id="tocS_UploadStatus">UploadStatus</h2>
<!-- backwards compatibility -->
<a id="schemauploadstatus"></a>
<a id="schema_UploadStatus"></a>
<a id="tocSuploadstatus"></a>
<a id="tocsuploadstatus"></a>

```json
"INITIALIZED"
```

<h2 id="tocS_UploadCategory">UploadCategory</h2>
<!-- backwards compatibility -->
<a id="schemauploadcategory"></a>
<a id="schema_UploadCategory"></a>
<a id="tocSuploadcategory"></a>
<a id="tocsuploadcategory"></a>

```json
"CURATED"
```

<h2 id="tocS_VpcSecurityGroupIds">VpcSecurityGroupIds</h2>
<!-- backwards compatibility -->
<a id="schemavpcsecuritygroupids"></a>
<a id="schema_VpcSecurityGroupIds"></a>
<a id="tocSvpcsecuritygroupids"></a>
<a id="tocsvpcsecuritygroupids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_VpcSubnetIds">VpcSubnetIds</h2>
<!-- backwards compatibility -->
<a id="schemavpcsubnetids"></a>
<a id="schema_VpcSubnetIds"></a>
<a id="tocSvpcsubnetids"></a>
<a id="tocsvpcsubnetids"></a>

```json
[
  "string"
]
```
