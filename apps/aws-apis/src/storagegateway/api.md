<h1 id="aws-storage-gateway">AWS Storage Gateway v2013-06-30</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Storage Gateway Service</fullname> <p>Storage Gateway is the service that connects an on-premises software appliance with cloud-based storage to provide seamless and secure integration between an organization's on-premises IT environment and the Amazon Web Services storage infrastructure. The service enables you to securely upload data to the Amazon Web Services Cloud for cost effective backup and rapid disaster recovery.</p> <p>Use the following links to get started using the <i>Storage Gateway Service API Reference</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewayHTTPRequestsHeaders">Storage Gateway required request headers</a>: Describes the required headers that you must send with every POST request to Storage Gateway.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewaySigningRequests">Signing requests</a>: Storage Gateway requires that you authenticate every request you send; this topic describes how sign such a request.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#APIErrorResponses">Error responses</a>: Provides reference information about Storage Gateway errors.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_Operations.html">Operations in Storage Gateway</a>: Contains detailed descriptions of all Storage Gateway operations, their request parameters, response elements, possible errors, and examples of requests and responses.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/sg.html">Storage Gateway endpoints and quotas</a>: Provides a list of each Amazon Web Services Region and the endpoints available for use with Storage Gateway.</p> </li> </ul> <note> <p>Storage Gateway resource IDs are in uppercase. When you use these resource IDs with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must change your resource ID to lowercase to use it with the EC2 API. For example, in Storage Gateway the ID for a volume might be <code>vol-AA22BB012345DAF670</code>. When you use this ID with the EC2 API, you must change it to <code>vol-aa22bb012345daf670</code>. Otherwise, the EC2 API might not behave as expected.</p> </note> <important> <p>IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway volumes are changing to a longer format. Starting in December 2016, all new volumes and snapshots will be created with a 17-character string. Starting in April 2016, you will be able to use these longer IDs so you can test your systems with the new format. For more information, see <a href="http://aws.amazon.com/ec2/faqs/#longer-ids">Longer EC2 and EBS resource IDs</a>.</p> <p>For example, a volume Amazon Resource Name (ARN) with the longer volume ID format looks like the following:</p> <p> <code>arn:aws:storagegateway:us-west-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABBCCDDEEFFG</code>.</p> <p>A snapshot ID with the longer ID format looks like the following: <code>snap-78e226633445566ee</code>.</p> <p>For more information, see <a href="http://forums.aws.amazon.com/ann.jspa?annID=3557">Announcement: Heads-up – Longer Storage Gateway volume and snapshot IDs coming in 2016</a>.</p> </important>

Base URLs:

* <a href="http://storagegateway.us-east-1.amazonaws.com">http://storagegateway.us-east-1.amazonaws.com</a> - The AWS Storage Gateway multi-region endpoint

* <a href="https://storagegateway.us-east-1.amazonaws.com">https://storagegateway.us-east-1.amazonaws.com</a> - The AWS Storage Gateway multi-region endpoint

* <a href="http://storagegateway.cn-north-1.amazonaws.com.cn">http://storagegateway.cn-north-1.amazonaws.com.cn</a> - The AWS Storage Gateway endpoint for China (Beijing) and China (Ningxia)

* <a href="https://storagegateway.cn-north-1.amazonaws.com.cn">https://storagegateway.cn-north-1.amazonaws.com.cn</a> - The AWS Storage Gateway endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/storagegateway/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-storage-gateway-default">Default</h1>

## ActivateGateway

<a id="opIdActivateGateway"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.ActivateGateway' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.ActivateGateway' \
  -d '{
    "ActivationKey": {},
    "GatewayName": {},
    "GatewayTimezone": {},
    "GatewayRegion": {},
    "GatewayType": {},
    "TapeDriveType": {},
    "MediumChangerType": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.ActivateGateway`

<p>Activates the gateway you previously deployed on your host. In the activation process, you specify information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account. For more information, see <a>UpdateGatewayInformation</a>.</p> <note> <p>You must turn on the gateway VM before you can activate your gateway.</p> </note>

> Body parameter

```json
{
  "ActivationKey": {},
  "GatewayName": {},
  "GatewayTimezone": {},
  "GatewayRegion": {},
  "GatewayType": {},
  "TapeDriveType": {},
  "MediumChangerType": {},
  "Tags": {}
}
```

<h3 id="activategateway-parameters">Parameters</h3>

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
|body|body|[ActivateGatewayInput](#schemaactivategatewayinput)|true|none|
|» ActivationKey|body|object|true|none|
|» GatewayName|body|object|true|none|
|» GatewayTimezone|body|object|true|none|
|» GatewayRegion|body|object|true|none|
|» GatewayType|body|object|false|none|
|» TapeDriveType|body|object|false|none|
|» MediumChangerType|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.ActivateGateway|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-11A2222B"
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

<h3 id="activategateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ActivateGatewayOutput](#schemaactivategatewayoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddCache

<a id="opIdAddCache"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.AddCache' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.AddCache' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "DiskIds": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.AddCache`

<p>Configures one or more gateway local disks as cache for a gateway. This operation is only supported in the cached volume, tape, and file gateway type (see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html">How Storage Gateway works (architecture)</a>.</p> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add cache, and one or more disk IDs that you want to configure as cache.</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "DiskIds": {}
}
```

<h3 id="addcache-parameters">Parameters</h3>

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
|body|body|[AddCacheInput](#schemaaddcacheinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» DiskIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.AddCache|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
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

<h3 id="addcache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddCacheOutput](#schemaaddcacheoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddTagsToResource

<a id="opIdAddTagsToResource"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.AddTagsToResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.AddTagsToResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.AddTagsToResource`

<p>Adds one or more tags to the specified resource. You use tags to add metadata to resources, which you can use to categorize these resources. For example, you can categorize resources by purpose, owner, environment, or team. Each tag consists of a key and a value, which you define. You can add tags to the following Storage Gateway resources:</p> <ul> <li> <p>Storage gateways of all types</p> </li> <li> <p>Storage volumes</p> </li> <li> <p>Virtual tapes</p> </li> <li> <p>NFS and SMB file shares</p> </li> <li> <p>File System associations</p> </li> </ul> <p>You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes that are recovered to a new gateway maintain their tags.</p>

> Body parameter

```json
{
  "ResourceARN": {},
  "Tags": {}
}
```

<h3 id="addtagstoresource-parameters">Parameters</h3>

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
|body|body|[AddTagsToResourceInput](#schemaaddtagstoresourceinput)|true|none|
|» ResourceARN|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.AddTagsToResource|

> Example responses

> 200 Response

```json
{
  "ResourceARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-11A2222B"
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

<h3 id="addtagstoresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddTagsToResourceOutput](#schemaaddtagstoresourceoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddUploadBuffer

<a id="opIdAddUploadBuffer"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.AddUploadBuffer' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "DiskIds": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer`

<p>Configures one or more gateway local disks as upload buffer for a specified gateway. This operation is supported for the stored volume, cached volume, and tape gateway types.</p> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add upload buffer, and one or more disk IDs that you want to configure as upload buffer.</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "DiskIds": {}
}
```

<h3 id="adduploadbuffer-parameters">Parameters</h3>

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
|body|body|[AddUploadBufferInput](#schemaadduploadbufferinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» DiskIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.AddUploadBuffer|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
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

<h3 id="adduploadbuffer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddUploadBufferOutput](#schemaadduploadbufferoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddWorkingStorage

<a id="opIdAddWorkingStorage"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.AddWorkingStorage' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "DiskIds": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage`

<p>Configures one or more gateway local disks as working storage for a gateway. This operation is only supported in the stored volume gateway type. This operation is deprecated in cached volume API version 20120630. Use <a>AddUploadBuffer</a> instead.</p> <note> <p>Working storage is also referred to as upload buffer. You can also use the <a>AddUploadBuffer</a> operation to add upload buffer to a stored volume gateway.</p> </note> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add working storage, and one or more disk IDs that you want to configure as working storage.</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "DiskIds": {}
}
```

<h3 id="addworkingstorage-parameters">Parameters</h3>

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
|body|body|[AddWorkingStorageInput](#schemaaddworkingstorageinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» DiskIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.AddWorkingStorage|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
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

<h3 id="addworkingstorage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddWorkingStorageOutput](#schemaaddworkingstorageoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssignTapePool

<a id="opIdAssignTapePool"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.AssignTapePool' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.AssignTapePool' \
  -d '{
    "TapeARN": {},
    "PoolId": {},
    "BypassGovernanceRetention": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.AssignTapePool`

Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.

> Body parameter

```json
{
  "TapeARN": {},
  "PoolId": {},
  "BypassGovernanceRetention": {}
}
```

<h3 id="assigntapepool-parameters">Parameters</h3>

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
|body|body|[AssignTapePoolInput](#schemaassigntapepoolinput)|true|none|
|» TapeARN|body|object|true|none|
|» PoolId|body|object|true|none|
|» BypassGovernanceRetention|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.AssignTapePool|

> Example responses

> 200 Response

```json
{
  "TapeARN": {}
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

<h3 id="assigntapepool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssignTapePoolOutput](#schemaassigntapepooloutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateFileSystem

<a id="opIdAssociateFileSystem"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.AssociateFileSystem' \
  -d '{
    "UserName": {},
    "Password": {},
    "ClientToken": {},
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "LocationARN": {},
    "Tags": {},
    "AuditDestinationARN": {},
    "CacheAttributes": {
      "CacheStaleTimeoutInSeconds": {}
    },
    "EndpointNetworkConfiguration": {
      "IpAddresses": {}
    }
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem`

Associate an Amazon FSx file system with the FSx File Gateway. After the association process is complete, the file shares on the Amazon FSx file system are available for access through the gateway. This operation only supports the FSx File Gateway type.

> Body parameter

```json
{
  "UserName": {},
  "Password": {},
  "ClientToken": {},
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "LocationARN": {},
  "Tags": {},
  "AuditDestinationARN": {},
  "CacheAttributes": {
    "CacheStaleTimeoutInSeconds": {}
  },
  "EndpointNetworkConfiguration": {
    "IpAddresses": {}
  }
}
```

<h3 id="associatefilesystem-parameters">Parameters</h3>

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
|body|body|[AssociateFileSystemInput](#schemaassociatefilesysteminput)|true|none|
|» UserName|body|object|true|none|
|» Password|body|object|true|none|
|» ClientToken|body|object|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» LocationARN|body|object|true|none|
|» Tags|body|object|false|none|
|» AuditDestinationARN|body|object|false|none|
|» CacheAttributes|body|[CacheAttributes](#schemacacheattributes)|false|The refresh cache information for the file share or FSx file systems.|
|» EndpointNetworkConfiguration|body|object|false|none|
|» » IpAddresses|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.AssociateFileSystem|

> Example responses

> 200 Response

```json
{
  "FileSystemAssociationARN": {}
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

<h3 id="associatefilesystem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateFileSystemOutput](#schemaassociatefilesystemoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AttachVolume

<a id="opIdAttachVolume"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.AttachVolume' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.AttachVolume' \
  -d '{
    "GatewayARN": {},
    "TargetName": {},
    "VolumeARN": {},
    "NetworkInterfaceId": {},
    "DiskId": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.AttachVolume`

Connects a volume to an iSCSI connection and then attaches the volume to the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.

> Body parameter

```json
{
  "GatewayARN": {},
  "TargetName": {},
  "VolumeARN": {},
  "NetworkInterfaceId": {},
  "DiskId": {}
}
```

<h3 id="attachvolume-parameters">Parameters</h3>

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
|body|body|[AttachVolumeInput](#schemaattachvolumeinput)|true|none|
|» GatewayARN|body|object|true|none|
|» TargetName|body|object|false|none|
|» VolumeARN|body|object|true|none|
|» NetworkInterfaceId|body|object|true|none|
|» DiskId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.AttachVolume|

> Example responses

> 200 Response

```json
{
  "VolumeARN": {},
  "TargetARN": {}
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

<h3 id="attachvolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachVolumeOutput](#schemaattachvolumeoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelArchival

<a id="opIdCancelArchival"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.CancelArchival' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.CancelArchival' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "TapeARN": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.CancelArchival`

Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated. This operation is only supported in the tape gateway type.

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "TapeARN": {}
}
```

<h3 id="cancelarchival-parameters">Parameters</h3>

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
|body|body|[CancelArchivalInput](#schemacancelarchivalinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» TapeARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.CancelArchival|

> Example responses

> 200 Response

```json
{
  "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/AMZN01A2A4"
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

<h3 id="cancelarchival-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelArchivalOutput](#schemacancelarchivaloutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelRetrieval

<a id="opIdCancelRetrieval"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.CancelRetrieval' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.CancelRetrieval' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "TapeARN": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.CancelRetrieval`

Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated. The virtual tape is returned to the VTS. This operation is only supported in the tape gateway type.

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "TapeARN": {}
}
```

<h3 id="cancelretrieval-parameters">Parameters</h3>

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
|body|body|[CancelRetrievalInput](#schemacancelretrievalinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» TapeARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.CancelRetrieval|

> Example responses

> 200 Response

```json
{
  "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/AMZN01A2A4"
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

<h3 id="cancelretrieval-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelRetrievalOutput](#schemacancelretrievaloutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCachediSCSIVolume

<a id="opIdCreateCachediSCSIVolume"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.CreateCachediSCSIVolume' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "VolumeSizeInBytes": {},
    "SnapshotId": {},
    "TargetName": {},
    "SourceVolumeARN": {},
    "NetworkInterfaceId": {},
    "ClientToken": {},
    "KMSEncrypted": {},
    "KMSKey": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume`

<p>Creates a cached volume on a specified cached volume gateway. This operation is only supported in the cached volume gateway type.</p> <note> <p>Cache storage must be allocated to the gateway before you can create a cached volume. Use the <a>AddCache</a> operation to add cache storage to a gateway.</p> </note> <p>In the request, you must specify the gateway, size of the volume in bytes, the iSCSI target name, an IP address on which to expose the target, and a unique client token. In response, the gateway creates the volume and returns information about it. This information includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.</p> <p>Optionally, you can provide the ARN for an existing volume as the <code>SourceVolumeARN</code> for this cached volume, which creates an exact copy of the existing volume’s latest recovery point. The <code>VolumeSizeInBytes</code> value must be equal to or larger than the size of the copied volume, in bytes.</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "VolumeSizeInBytes": {},
  "SnapshotId": {},
  "TargetName": {},
  "SourceVolumeARN": {},
  "NetworkInterfaceId": {},
  "ClientToken": {},
  "KMSEncrypted": {},
  "KMSKey": {},
  "Tags": {}
}
```

<h3 id="createcachediscsivolume-parameters">Parameters</h3>

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
|body|body|[CreateCachediSCSIVolumeInput](#schemacreatecachediscsivolumeinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» VolumeSizeInBytes|body|object|true|none|
|» SnapshotId|body|object|false|none|
|» TargetName|body|object|true|none|
|» SourceVolumeARN|body|object|false|none|
|» NetworkInterfaceId|body|object|true|none|
|» ClientToken|body|object|true|none|
|» KMSEncrypted|body|object|false|none|
|» KMSKey|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.CreateCachediSCSIVolume|

> Example responses

> 200 Response

```json
{
  "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume",
  "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
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

<h3 id="createcachediscsivolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCachediSCSIVolumeOutput](#schemacreatecachediscsivolumeoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateNFSFileShare

<a id="opIdCreateNFSFileShare"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.CreateNFSFileShare' \
  -d '{
    "ClientToken": {},
    "NFSFileShareDefaults": {
      "FileMode": {},
      "DirectoryMode": {},
      "GroupId": {},
      "OwnerId": {}
    },
    "GatewayARN": {},
    "KMSEncrypted": {},
    "KMSKey": {},
    "Role": {},
    "LocationARN": {},
    "DefaultStorageClass": {},
    "ObjectACL": {},
    "ClientList": {},
    "Squash": {},
    "ReadOnly": {},
    "GuessMIMETypeEnabled": {},
    "RequesterPays": {},
    "Tags": {},
    "FileShareName": {},
    "CacheAttributes": {
      "CacheStaleTimeoutInSeconds": {}
    },
    "NotificationPolicy": {},
    "VPCEndpointDNSName": {},
    "BucketRegion": {},
    "AuditDestinationARN": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare`

<p>Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using an NFS interface. This operation is only supported for S3 File Gateways.</p> <important> <p>S3 File gateway requires Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon Web Services STS is not activated in the Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the <i>Identity and Access Management User Guide</i>.</p> <p>S3 File Gateways do not support creating hard or symbolic links on a file share.</p> </important>

> Body parameter

```json
{
  "ClientToken": {},
  "NFSFileShareDefaults": {
    "FileMode": {},
    "DirectoryMode": {},
    "GroupId": {},
    "OwnerId": {}
  },
  "GatewayARN": {},
  "KMSEncrypted": {},
  "KMSKey": {},
  "Role": {},
  "LocationARN": {},
  "DefaultStorageClass": {},
  "ObjectACL": {},
  "ClientList": {},
  "Squash": {},
  "ReadOnly": {},
  "GuessMIMETypeEnabled": {},
  "RequesterPays": {},
  "Tags": {},
  "FileShareName": {},
  "CacheAttributes": {
    "CacheStaleTimeoutInSeconds": {}
  },
  "NotificationPolicy": {},
  "VPCEndpointDNSName": {},
  "BucketRegion": {},
  "AuditDestinationARN": {}
}
```

<h3 id="createnfsfileshare-parameters">Parameters</h3>

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
|body|body|[CreateNFSFileShareInput](#schemacreatenfsfileshareinput)|true|none|
|» ClientToken|body|object|true|none|
|» NFSFileShareDefaults|body|object|false|none|
|» » FileMode|body|object|false|none|
|» » DirectoryMode|body|object|false|none|
|» » GroupId|body|object|false|none|
|» » OwnerId|body|object|false|none|
|» GatewayARN|body|object|true|none|
|» KMSEncrypted|body|object|false|none|
|» KMSKey|body|object|false|none|
|» Role|body|object|true|none|
|» LocationARN|body|object|true|none|
|» DefaultStorageClass|body|object|false|none|
|» ObjectACL|body|object|false|none|
|» ClientList|body|object|false|none|
|» Squash|body|object|false|none|
|» ReadOnly|body|object|false|none|
|» GuessMIMETypeEnabled|body|object|false|none|
|» RequesterPays|body|object|false|none|
|» Tags|body|object|false|none|
|» FileShareName|body|object|false|none|
|» CacheAttributes|body|object|false|none|
|» » CacheStaleTimeoutInSeconds|body|object|false|none|
|» NotificationPolicy|body|object|false|none|
|» VPCEndpointDNSName|body|object|false|none|
|» BucketRegion|body|object|false|none|
|» AuditDestinationARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.CreateNFSFileShare|

> Example responses

> 200 Response

```json
{
  "FileShareARN": {}
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

<h3 id="createnfsfileshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateNFSFileShareOutput](#schemacreatenfsfileshareoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSMBFileShare

<a id="opIdCreateSMBFileShare"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.CreateSMBFileShare' \
  -d '{
    "ClientToken": {},
    "GatewayARN": {},
    "KMSEncrypted": {},
    "KMSKey": {},
    "Role": {},
    "LocationARN": {},
    "DefaultStorageClass": {},
    "ObjectACL": {},
    "ReadOnly": {},
    "GuessMIMETypeEnabled": {},
    "RequesterPays": {},
    "SMBACLEnabled": {},
    "AccessBasedEnumeration": {},
    "AdminUserList": {},
    "ValidUserList": {},
    "InvalidUserList": {},
    "AuditDestinationARN": {},
    "Authentication": {},
    "CaseSensitivity": {},
    "Tags": {},
    "FileShareName": {},
    "CacheAttributes": {
      "CacheStaleTimeoutInSeconds": {}
    },
    "NotificationPolicy": {},
    "VPCEndpointDNSName": {},
    "BucketRegion": {},
    "OplocksEnabled": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare`

<p>Creates a Server Message Block (SMB) file share on an existing S3 File Gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using an SMB interface. This operation is only supported for S3 File Gateways.</p> <important> <p>S3 File Gateways require Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the <i>Identity and Access Management User Guide</i>.</p> <p>File gateways don't support creating hard or symbolic links on a file share.</p> </important>

> Body parameter

```json
{
  "ClientToken": {},
  "GatewayARN": {},
  "KMSEncrypted": {},
  "KMSKey": {},
  "Role": {},
  "LocationARN": {},
  "DefaultStorageClass": {},
  "ObjectACL": {},
  "ReadOnly": {},
  "GuessMIMETypeEnabled": {},
  "RequesterPays": {},
  "SMBACLEnabled": {},
  "AccessBasedEnumeration": {},
  "AdminUserList": {},
  "ValidUserList": {},
  "InvalidUserList": {},
  "AuditDestinationARN": {},
  "Authentication": {},
  "CaseSensitivity": {},
  "Tags": {},
  "FileShareName": {},
  "CacheAttributes": {
    "CacheStaleTimeoutInSeconds": {}
  },
  "NotificationPolicy": {},
  "VPCEndpointDNSName": {},
  "BucketRegion": {},
  "OplocksEnabled": {}
}
```

<h3 id="createsmbfileshare-parameters">Parameters</h3>

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
|body|body|[CreateSMBFileShareInput](#schemacreatesmbfileshareinput)|true|none|
|» ClientToken|body|object|true|none|
|» GatewayARN|body|object|true|none|
|» KMSEncrypted|body|object|false|none|
|» KMSKey|body|object|false|none|
|» Role|body|object|true|none|
|» LocationARN|body|object|true|none|
|» DefaultStorageClass|body|object|false|none|
|» ObjectACL|body|object|false|none|
|» ReadOnly|body|object|false|none|
|» GuessMIMETypeEnabled|body|object|false|none|
|» RequesterPays|body|object|false|none|
|» SMBACLEnabled|body|object|false|none|
|» AccessBasedEnumeration|body|object|false|none|
|» AdminUserList|body|object|false|none|
|» ValidUserList|body|object|false|none|
|» InvalidUserList|body|object|false|none|
|» AuditDestinationARN|body|object|false|none|
|» Authentication|body|object|false|none|
|» CaseSensitivity|body|object|false|none|
|» Tags|body|object|false|none|
|» FileShareName|body|object|false|none|
|» CacheAttributes|body|object|false|none|
|» » CacheStaleTimeoutInSeconds|body|object|false|none|
|» NotificationPolicy|body|object|false|none|
|» VPCEndpointDNSName|body|object|false|none|
|» BucketRegion|body|object|false|none|
|» OplocksEnabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.CreateSMBFileShare|

> Example responses

> 200 Response

```json
{
  "FileShareARN": {}
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

<h3 id="createsmbfileshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSMBFileShareOutput](#schemacreatesmbfileshareoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSnapshot

<a id="opIdCreateSnapshot"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.CreateSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.CreateSnapshot' \
  -d '{
    "VolumeARN": {},
    "SnapshotDescription": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.CreateSnapshot`

<p>Initiates a snapshot of a volume.</p> <p>Storage Gateway provides the ability to back up point-in-time snapshots of your data to Amazon Simple Storage (Amazon S3) for durable off-site recovery, and also import the data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take snapshots of your gateway volume on a scheduled or ad hoc basis. This API enables you to take an ad hoc snapshot. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#SchedulingSnapshot">Editing a snapshot schedule</a>.</p> <p>In the <code>CreateSnapshot</code> request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide description for the snapshot. When Storage Gateway takes the snapshot of specified volume, the snapshot and description appears in the Storage Gateway console. In response, Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot. This operation is only supported in stored and cached volume gateway type.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html">DeleteSnapshot</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p> </note> <important> <p>Volume and snapshot IDs are changing to a longer length ID format. For more information, see the important note on the <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/Welcome.html">Welcome</a> page.</p> </important>

> Body parameter

```json
{
  "VolumeARN": {},
  "SnapshotDescription": {},
  "Tags": {}
}
```

<h3 id="createsnapshot-parameters">Parameters</h3>

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
|body|body|[CreateSnapshotInput](#schemacreatesnapshotinput)|true|none|
|» VolumeARN|body|object|true|none|
|» SnapshotDescription|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.CreateSnapshot|

> Example responses

> 200 Response

```json
{
  "SnapshotId": "snap-78e22663",
  "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
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

<h3 id="createsnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSnapshotOutput](#schemacreatesnapshotoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ServiceUnavailableError|[ServiceUnavailableError](#schemaserviceunavailableerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSnapshotFromVolumeRecoveryPoint

<a id="opIdCreateSnapshotFromVolumeRecoveryPoint"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint' \
  -d '{
    "VolumeARN": {},
    "SnapshotDescription": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint`

<p>Initiates a snapshot of a gateway from a volume recovery point. This operation is only supported in the cached volume gateway type.</p> <p>A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot. To get a list of volume recovery point for cached volume gateway, use <a>ListVolumeRecoveryPoints</a>.</p> <p>In the <code>CreateSnapshotFromVolumeRecoveryPoint</code> request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide a description for the snapshot. When the gateway takes a snapshot of the specified volume, the snapshot and its description appear in the Storage Gateway console. In response, the gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html">DeleteSnapshot</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p> </note>

> Body parameter

```json
{
  "VolumeARN": {},
  "SnapshotDescription": {},
  "Tags": {}
}
```

<h3 id="createsnapshotfromvolumerecoverypoint-parameters">Parameters</h3>

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
|body|body|[CreateSnapshotFromVolumeRecoveryPointInput](#schemacreatesnapshotfromvolumerecoverypointinput)|true|none|
|» VolumeARN|body|object|true|none|
|» SnapshotDescription|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint|

> Example responses

> 200 Response

```json
{
  "SnapshotId": "snap-78e22663",
  "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
  "VolumeRecoveryPointTime": "2017-06-30T10:10:10.000Z"
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

<h3 id="createsnapshotfromvolumerecoverypoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSnapshotFromVolumeRecoveryPointOutput](#schemacreatesnapshotfromvolumerecoverypointoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ServiceUnavailableError|[ServiceUnavailableError](#schemaserviceunavailableerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStorediSCSIVolume

<a id="opIdCreateStorediSCSIVolume"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.CreateStorediSCSIVolume' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "DiskId": {},
    "SnapshotId": {},
    "PreserveExistingData": {},
    "TargetName": {},
    "NetworkInterfaceId": {},
    "KMSEncrypted": {},
    "KMSKey": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume`

<p>Creates a volume on a specified gateway. This operation is only supported in the stored volume gateway type.</p> <p>The size of the volume to create is inferred from the disk size. You can choose to preserve existing data on the disk, create volume from an existing snapshot, or create an empty volume. If you choose to create an empty gateway volume, then any existing data on the disk is erased.</p> <p>In the request, you must specify the gateway and the disk information on which you are creating the volume. In response, the gateway creates the volume and returns volume information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "DiskId": {},
  "SnapshotId": {},
  "PreserveExistingData": {},
  "TargetName": {},
  "NetworkInterfaceId": {},
  "KMSEncrypted": {},
  "KMSKey": {},
  "Tags": {}
}
```

<h3 id="createstorediscsivolume-parameters">Parameters</h3>

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
|body|body|[CreateStorediSCSIVolumeInput](#schemacreatestorediscsivolumeinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» DiskId|body|object|true|none|
|» SnapshotId|body|object|false|none|
|» PreserveExistingData|body|object|true|none|
|» TargetName|body|object|true|none|
|» NetworkInterfaceId|body|object|true|none|
|» KMSEncrypted|body|object|false|none|
|» KMSKey|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.CreateStorediSCSIVolume|

> Example responses

> 200 Response

```json
{
  "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume",
  "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
  "VolumeSizeInBytes": 1099511627776
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

<h3 id="createstorediscsivolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStorediSCSIVolumeOutput](#schemacreatestorediscsivolumeoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTapePool

<a id="opIdCreateTapePool"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.CreateTapePool' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.CreateTapePool' \
  -d '{
    "PoolName": {},
    "StorageClass": {},
    "RetentionLockType": {},
    "RetentionLockTimeInDays": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.CreateTapePool`

Creates a new custom tape pool. You can use custom tape pool to enable tape retention lock on tapes that are archived in the custom pool.

> Body parameter

```json
{
  "PoolName": {},
  "StorageClass": {},
  "RetentionLockType": {},
  "RetentionLockTimeInDays": {},
  "Tags": {}
}
```

<h3 id="createtapepool-parameters">Parameters</h3>

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
|body|body|[CreateTapePoolInput](#schemacreatetapepoolinput)|true|none|
|» PoolName|body|object|true|none|
|» StorageClass|body|object|true|none|
|» RetentionLockType|body|object|false|none|
|» RetentionLockTimeInDays|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.CreateTapePool|

> Example responses

> 200 Response

```json
{
  "PoolARN": {}
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

<h3 id="createtapepool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTapePoolOutput](#schemacreatetapepooloutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTapeWithBarcode

<a id="opIdCreateTapeWithBarcode"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.CreateTapeWithBarcode' \
  -d '{
    "GatewayARN": {},
    "TapeSizeInBytes": {},
    "TapeBarcode": {},
    "KMSEncrypted": {},
    "KMSKey": {},
    "PoolId": {},
    "Worm": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode`

<p>Creates a virtual tape by using your own barcode. You write data to the virtual tape and then archive the tape. A barcode is unique and cannot be reused if it has already been used on a tape. This applies to barcodes used on deleted tapes. This operation is only supported in the tape gateway type.</p> <note> <p>Cache storage must be allocated to the gateway before you can create a virtual tape. Use the <a>AddCache</a> operation to add cache storage to a gateway.</p> </note>

> Body parameter

```json
{
  "GatewayARN": {},
  "TapeSizeInBytes": {},
  "TapeBarcode": {},
  "KMSEncrypted": {},
  "KMSKey": {},
  "PoolId": {},
  "Worm": {},
  "Tags": {}
}
```

<h3 id="createtapewithbarcode-parameters">Parameters</h3>

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
|body|body|[CreateTapeWithBarcodeInput](#schemacreatetapewithbarcodeinput)|true|none|
|» GatewayARN|body|object|true|none|
|» TapeSizeInBytes|body|object|true|none|
|» TapeBarcode|body|object|true|none|
|» KMSEncrypted|body|object|false|none|
|» KMSKey|body|object|false|none|
|» PoolId|body|object|false|none|
|» Worm|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.CreateTapeWithBarcode|

> Example responses

> 200 Response

```json
{
  "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST12345"
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

<h3 id="createtapewithbarcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTapeWithBarcodeOutput](#schemacreatetapewithbarcodeoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTapes

<a id="opIdCreateTapes"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.CreateTapes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.CreateTapes' \
  -d '{
    "GatewayARN": {},
    "TapeSizeInBytes": {},
    "ClientToken": {},
    "NumTapesToCreate": {},
    "TapeBarcodePrefix": {},
    "KMSEncrypted": {},
    "KMSKey": {},
    "PoolId": {},
    "Worm": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.CreateTapes`

<p>Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes. This operation is only supported in the tape gateway type.</p> <note> <p>Cache storage must be allocated to the gateway before you can create virtual tapes. Use the <a>AddCache</a> operation to add cache storage to a gateway.</p> </note>

> Body parameter

```json
{
  "GatewayARN": {},
  "TapeSizeInBytes": {},
  "ClientToken": {},
  "NumTapesToCreate": {},
  "TapeBarcodePrefix": {},
  "KMSEncrypted": {},
  "KMSKey": {},
  "PoolId": {},
  "Worm": {},
  "Tags": {}
}
```

<h3 id="createtapes-parameters">Parameters</h3>

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
|body|body|[CreateTapesInput](#schemacreatetapesinput)|true|none|
|» GatewayARN|body|object|true|none|
|» TapeSizeInBytes|body|object|true|none|
|» ClientToken|body|object|true|none|
|» NumTapesToCreate|body|object|true|none|
|» TapeBarcodePrefix|body|object|true|none|
|» KMSEncrypted|body|object|false|none|
|» KMSKey|body|object|false|none|
|» PoolId|body|object|false|none|
|» Worm|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.CreateTapes|

> Example responses

> 200 Response

```json
{
  "TapeARNs": [
    "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST38A29D",
    "arn:aws:storagegateway:us-east-1:204469490176:tape/TEST3AA29F",
    "arn:aws:storagegateway:us-east-1:204469490176:tape/TEST3BA29E"
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

<h3 id="createtapes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTapesOutput](#schemacreatetapesoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAutomaticTapeCreationPolicy

<a id="opIdDeleteAutomaticTapeCreationPolicy"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy`

Deletes the automatic tape creation policy of a gateway. If you delete this policy, new virtual tapes must be created manually. Use the Amazon Resource Name (ARN) of the gateway in your request to remove the policy.

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="deleteautomatictapecreationpolicy-parameters">Parameters</h3>

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
|body|body|[DeleteAutomaticTapeCreationPolicyInput](#schemadeleteautomatictapecreationpolicyinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
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

<h3 id="deleteautomatictapecreationpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAutomaticTapeCreationPolicyOutput](#schemadeleteautomatictapecreationpolicyoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBandwidthRateLimit

<a id="opIdDeleteBandwidthRateLimit"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DeleteBandwidthRateLimit' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "BandwidthType": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit`

Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download bandwidth rate limit, or you can delete both. If you delete only one of the limits, the other limit remains unchanged. To specify which gateway to work with, use the Amazon Resource Name (ARN) of the gateway in your request. This operation is supported only for the stored volume, cached volume, and tape gateway types.

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "BandwidthType": {}
}
```

<h3 id="deletebandwidthratelimit-parameters">Parameters</h3>

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
|body|body|[DeleteBandwidthRateLimitInput](#schemadeletebandwidthratelimitinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» BandwidthType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DeleteBandwidthRateLimit|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
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

<h3 id="deletebandwidthratelimit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBandwidthRateLimitOutput](#schemadeletebandwidthratelimitoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteChapCredentials

<a id="opIdDeleteChapCredentials"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DeleteChapCredentials' \
  -d '{
    "TargetARN": {},
    "InitiatorName": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials`

Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair. This operation is supported in volume and tape gateway types.

> Body parameter

```json
{
  "TargetARN": {},
  "InitiatorName": {}
}
```

<h3 id="deletechapcredentials-parameters">Parameters</h3>

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
|body|body|[DeleteChapCredentialsInput](#schemadeletechapcredentialsinput)|true|none|
|» TargetARN|body|object|true|none|
|» InitiatorName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DeleteChapCredentials|

> Example responses

> 200 Response

```json
{
  "InitiatorName": "iqn.1991-05.com.microsoft:computername.domain.example.com",
  "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
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

<h3 id="deletechapcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteChapCredentialsOutput](#schemadeletechapcredentialsoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFileShare

<a id="opIdDeleteFileShare"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DeleteFileShare' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DeleteFileShare' \
  -d '{
    "FileShareARN": {},
    "ForceDelete": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DeleteFileShare`

Deletes a file share from an S3 File Gateway. This operation is only supported for S3 File Gateways.

> Body parameter

```json
{
  "FileShareARN": {},
  "ForceDelete": {}
}
```

<h3 id="deletefileshare-parameters">Parameters</h3>

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
|body|body|[DeleteFileShareInput](#schemadeletefileshareinput)|true|none|
|» FileShareARN|body|object|true|none|
|» ForceDelete|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DeleteFileShare|

> Example responses

> 200 Response

```json
{
  "FileShareARN": {}
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

<h3 id="deletefileshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFileShareOutput](#schemadeletefileshareoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGateway

<a id="opIdDeleteGateway"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DeleteGateway' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DeleteGateway' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DeleteGateway`

<p>Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of the gateway in your request. The operation deletes the gateway; however, it does not delete the gateway virtual machine (VM) from your host computer.</p> <p>After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will not complete. After you delete a gateway, your next step is to remove it from your environment.</p> <important> <p>You no longer pay software charges after the gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue to be billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your Amazon EC2 subscription.  If you prefer not to cancel your Amazon EC2 subscription, you can delete your snapshots using the Amazon EC2 console. For more information, see the <a href="http://aws.amazon.com/storagegateway">Storage Gateway detail page</a>.</p> </important>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="deletegateway-parameters">Parameters</h3>

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
|body|body|[DeleteGatewayInput](#schemadeletegatewayinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DeleteGateway|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
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

<h3 id="deletegateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGatewayOutput](#schemadeletegatewayoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSnapshotSchedule

<a id="opIdDeleteSnapshotSchedule"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DeleteSnapshotSchedule' \
  -d '{
    "VolumeARN": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule`

<p>Deletes a snapshot of a volume.</p> <p>You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API action enables you to delete a snapshot schedule for a volume. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/backing-up-volumes.html">Backing up your volumes</a>. In the <code>DeleteSnapshotSchedule</code> request, you identify the volume by providing its Amazon Resource Name (ARN). This operation is only supported for cached volume gateway types.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information, go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p> </note>

> Body parameter

```json
{
  "VolumeARN": {}
}
```

<h3 id="deletesnapshotschedule-parameters">Parameters</h3>

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
|body|body|[DeleteSnapshotScheduleInput](#schemadeletesnapshotscheduleinput)|true|none|
|» VolumeARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DeleteSnapshotSchedule|

> Example responses

> 200 Response

```json
{
  "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
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

<h3 id="deletesnapshotschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSnapshotScheduleOutput](#schemadeletesnapshotscheduleoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTape

<a id="opIdDeleteTape"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DeleteTape' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DeleteTape' \
  -d '{
    "GatewayARN": {},
    "TapeARN": {},
    "BypassGovernanceRetention": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DeleteTape`

Deletes the specified virtual tape. This operation is only supported in the tape gateway type.

> Body parameter

```json
{
  "GatewayARN": {},
  "TapeARN": {},
  "BypassGovernanceRetention": {}
}
```

<h3 id="deletetape-parameters">Parameters</h3>

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
|body|body|[DeleteTapeInput](#schemadeletetapeinput)|true|none|
|» GatewayARN|body|object|true|none|
|» TapeARN|body|object|true|none|
|» BypassGovernanceRetention|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DeleteTape|

> Example responses

> 200 Response

```json
{
  "TapeARN": "arn:aws:storagegateway:us-east-1:204469490176:tape/TEST05A2A0"
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

<h3 id="deletetape-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTapeOutput](#schemadeletetapeoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTapeArchive

<a id="opIdDeleteTapeArchive"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DeleteTapeArchive' \
  -d '{
    "TapeARN": {},
    "BypassGovernanceRetention": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive`

Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.

> Body parameter

```json
{
  "TapeARN": {},
  "BypassGovernanceRetention": {}
}
```

<h3 id="deletetapearchive-parameters">Parameters</h3>

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
|body|body|[DeleteTapeArchiveInput](#schemadeletetapearchiveinput)|true|none|
|» TapeARN|body|object|true|none|
|» BypassGovernanceRetention|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DeleteTapeArchive|

> Example responses

> 200 Response

```json
{
  "TapeARN": "arn:aws:storagegateway:us-east-1:204469490176:tape/TEST05A2A0"
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

<h3 id="deletetapearchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTapeArchiveOutput](#schemadeletetapearchiveoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTapePool

<a id="opIdDeleteTapePool"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DeleteTapePool' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DeleteTapePool' \
  -d '{
    "PoolARN": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DeleteTapePool`

Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes in the pool and if there are no automatic tape creation policies that reference the custom tape pool.

> Body parameter

```json
{
  "PoolARN": {}
}
```

<h3 id="deletetapepool-parameters">Parameters</h3>

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
|body|body|[DeleteTapePoolInput](#schemadeletetapepoolinput)|true|none|
|» PoolARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DeleteTapePool|

> Example responses

> 200 Response

```json
{
  "PoolARN": {}
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

<h3 id="deletetapepool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTapePoolOutput](#schemadeletetapepooloutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVolume

<a id="opIdDeleteVolume"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DeleteVolume' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DeleteVolume' \
  -d '{
    "VolumeARN": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DeleteVolume`

<p>Deletes the specified storage volume that you previously created using the <a>CreateCachediSCSIVolume</a> or <a>CreateStorediSCSIVolume</a> API. This operation is only supported in the cached volume and stored volume types. For stored volume gateways, the local disk that was configured as the storage volume is not deleted. You can reuse the local disk to create another storage volume.</p> <p>Before you delete a volume, make sure there are no iSCSI connections to the volume you are deleting. You should also make sure there is no snapshot in progress. You can use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are deleting and check the snapshot status. For more information, go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p> <p>In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want to delete.</p>

> Body parameter

```json
{
  "VolumeARN": {}
}
```

<h3 id="deletevolume-parameters">Parameters</h3>

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
|body|body|[DeleteVolumeInput](#schemadeletevolumeinput)|true|none|
|» VolumeARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DeleteVolume|

> Example responses

> 200 Response

```json
{
  "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
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

<h3 id="deletevolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVolumeOutput](#schemadeletevolumeoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAvailabilityMonitorTest

<a id="opIdDescribeAvailabilityMonitorTest"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeAvailabilityMonitorTest' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest`

Returns information about the most recent high availability monitoring test that was performed on the host in a cluster. If a test isn't performed, the status and start time in the response would be null.

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="describeavailabilitymonitortest-parameters">Parameters</h3>

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
|body|body|[DescribeAvailabilityMonitorTestInput](#schemadescribeavailabilitymonitortestinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeAvailabilityMonitorTest|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "Status": {},
  "StartTime": {}
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

<h3 id="describeavailabilitymonitortest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAvailabilityMonitorTestOutput](#schemadescribeavailabilitymonitortestoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBandwidthRateLimit

<a id="opIdDescribeBandwidthRateLimit"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeBandwidthRateLimit' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit`

<p>Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which means no bandwidth rate limiting is in effect. This operation is supported only for the stored volume, cached volume, and tape gateway types. To describe bandwidth rate limits for S3 file gateways, use <a>DescribeBandwidthRateLimitSchedule</a>.</p> <p>This operation returns a value for a bandwidth rate limit only if the limit is set. If no limits are set for the gateway, then this operation returns only the gateway ARN in the response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="describebandwidthratelimit-parameters">Parameters</h3>

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
|body|body|[DescribeBandwidthRateLimitInput](#schemadescribebandwidthratelimitinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeBandwidthRateLimit|

> Example responses

> 200 Response

```json
{
  "AverageDownloadRateLimitInBitsPerSec": 204800,
  "AverageUploadRateLimitInBitsPerSec": 102400,
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
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

<h3 id="describebandwidthratelimit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBandwidthRateLimitOutput](#schemadescribebandwidthratelimitoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBandwidthRateLimitSchedule

<a id="opIdDescribeBandwidthRateLimitSchedule"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeBandwidthRateLimitSchedule' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule`

<p> Returns information about the bandwidth rate limit schedule of a gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. This operation is supported only for volume, tape and S3 file gateways. FSx file gateways do not support bandwidth rate limits.</p> <p>This operation returns information about a gateway's bandwidth rate limit schedule. A bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or both. </p> <p> A bandwidth rate limit interval consists of one or more days of the week, a start hour and minute, an ending hour and minute, and bandwidth rate limits for uploading and downloading </p> <p> If no bandwidth rate limit schedule intervals are set for the gateway, this operation returns an empty response. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="describebandwidthratelimitschedule-parameters">Parameters</h3>

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
|body|body|[DescribeBandwidthRateLimitScheduleInput](#schemadescribebandwidthratelimitscheduleinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeBandwidthRateLimitSchedule|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "BandwidthRateLimitIntervals": {}
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

<h3 id="describebandwidthratelimitschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBandwidthRateLimitScheduleOutput](#schemadescribebandwidthratelimitscheduleoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCache

<a id="opIdDescribeCache"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeCache' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeCache' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeCache`

<p>Returns information about the cache of a gateway. This operation is only supported in the cached volume, tape, and file gateway types.</p> <p>The response includes disk IDs that are configured as cache, and it includes the amount of cache allocated and used.</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="describecache-parameters">Parameters</h3>

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
|body|body|[DescribeCacheInput](#schemadescribecacheinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeCache|

> Example responses

> 200 Response

```json
{
  "CacheAllocatedInBytes": 2199023255552,
  "CacheDirtyPercentage": 0.07,
  "CacheHitPercentage": 99.68,
  "CacheMissPercentage": 0.32,
  "CacheUsedPercentage": 0.07,
  "DiskIds": [
    "pci-0000:03:00.0-scsi-0:0:0:0",
    "pci-0000:04:00.0-scsi-0:1:0:0"
  ],
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
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

<h3 id="describecache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCacheOutput](#schemadescribecacheoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCachediSCSIVolumes

<a id="opIdDescribeCachediSCSIVolumes"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeCachediSCSIVolumes' \
  -d '{
    "VolumeARNs": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes`

<p>Returns a description of the gateway volumes specified in the request. This operation is only supported in the cached volume gateway types.</p> <p>The list of gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume Amazon Resource Name (ARN).</p>

> Body parameter

```json
{
  "VolumeARNs": {}
}
```

<h3 id="describecachediscsivolumes-parameters">Parameters</h3>

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
|body|body|[DescribeCachediSCSIVolumesInput](#schemadescribecachediscsivolumesinput)|true|none|
|» VolumeARNs|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeCachediSCSIVolumes|

> Example responses

> 200 Response

```json
{
  "CachediSCSIVolumes": [
    {
      "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
      "VolumeId": "vol-1122AABB",
      "VolumeSizeInBytes": 1099511627776,
      "VolumeStatus": "AVAILABLE",
      "VolumeType": "CACHED iSCSI",
      "VolumeiSCSIAttributes": {
        "ChapEnabled": true,
        "LunNumber": 1,
        "NetworkInterfaceId": "10.243.43.207",
        "NetworkInterfacePort": 3260,
        "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
      }
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

<h3 id="describecachediscsivolumes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCachediSCSIVolumesOutput](#schemadescribecachediscsivolumesoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeChapCredentials

<a id="opIdDescribeChapCredentials"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeChapCredentials' \
  -d '{
    "TargetARN": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials`

Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair. This operation is supported in the volume and tape gateway types.

> Body parameter

```json
{
  "TargetARN": {}
}
```

<h3 id="describechapcredentials-parameters">Parameters</h3>

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
|body|body|[DescribeChapCredentialsInput](#schemadescribechapcredentialsinput)|true|none|
|» TargetARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeChapCredentials|

> Example responses

> 200 Response

```json
{
  "ChapCredentials": [
    {
      "InitiatorName": "iqn.1991-05.com.microsoft:computername.domain.example.com",
      "SecretToAuthenticateInitiator": "111111111111",
      "SecretToAuthenticateTarget": "222222222222",
      "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
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

<h3 id="describechapcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeChapCredentialsOutput](#schemadescribechapcredentialsoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFileSystemAssociations

<a id="opIdDescribeFileSystemAssociations"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeFileSystemAssociations' \
  -d '{
    "FileSystemAssociationARNList": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations`

Gets the file system association information. This operation is only supported for FSx File Gateways.

> Body parameter

```json
{
  "FileSystemAssociationARNList": {}
}
```

<h3 id="describefilesystemassociations-parameters">Parameters</h3>

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
|body|body|[DescribeFileSystemAssociationsInput](#schemadescribefilesystemassociationsinput)|true|none|
|» FileSystemAssociationARNList|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeFileSystemAssociations|

> Example responses

> 200 Response

```json
{
  "FileSystemAssociationInfoList": {}
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

<h3 id="describefilesystemassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFileSystemAssociationsOutput](#schemadescribefilesystemassociationsoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGatewayInformation

<a id="opIdDescribeGatewayInformation"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeGatewayInformation' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation`

Returns metadata about a gateway such as its name, network interfaces, configured time zone, and the state (whether the gateway is running or not). To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="describegatewayinformation-parameters">Parameters</h3>

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
|body|body|[DescribeGatewayInformationInput](#schemadescribegatewayinformationinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeGatewayInformation|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
  "GatewayId": "sgw-AABB1122",
  "GatewayName": "My_Gateway",
  "GatewayNetworkInterfaces": [
    {
      "Ipv4Address": "10.35.69.216"
    }
  ],
  "GatewayState": "STATE_RUNNING",
  "GatewayTimezone": "GMT-8:00",
  "GatewayType": "STORED",
  "LastSoftwareUpdate": "2016-01-02T16:00:00",
  "NextUpdateAvailabilityDate": "2017-01-02T16:00:00"
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

<h3 id="describegatewayinformation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGatewayInformationOutput](#schemadescribegatewayinformationoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMaintenanceStartTime

<a id="opIdDescribeMaintenanceStartTime"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeMaintenanceStartTime' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime`

Returns your gateway's weekly maintenance start time including the day and time of the week. Note that values are in terms of the gateway's time zone.

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="describemaintenancestarttime-parameters">Parameters</h3>

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
|body|body|[DescribeMaintenanceStartTimeInput](#schemadescribemaintenancestarttimeinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeMaintenanceStartTime|

> Example responses

> 200 Response

```json
{
  "DayOfWeek": 2,
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
  "HourOfDay": 15,
  "MinuteOfHour": 35,
  "Timezone": "GMT+7:00"
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

<h3 id="describemaintenancestarttime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMaintenanceStartTimeOutput](#schemadescribemaintenancestarttimeoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeNFSFileShares

<a id="opIdDescribeNFSFileShares"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeNFSFileShares' \
  -d '{
    "FileShareARNList": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares`

Gets a description for one or more Network File System (NFS) file shares from an S3 File Gateway. This operation is only supported for S3 File Gateways.

> Body parameter

```json
{
  "FileShareARNList": {}
}
```

<h3 id="describenfsfileshares-parameters">Parameters</h3>

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
|body|body|[DescribeNFSFileSharesInput](#schemadescribenfsfilesharesinput)|true|none|
|» FileShareARNList|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeNFSFileShares|

> Example responses

> 200 Response

```json
{
  "NFSFileShareInfoList": {}
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

<h3 id="describenfsfileshares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeNFSFileSharesOutput](#schemadescribenfsfilesharesoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSMBFileShares

<a id="opIdDescribeSMBFileShares"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeSMBFileShares' \
  -d '{
    "FileShareARNList": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares`

Gets a description for one or more Server Message Block (SMB) file shares from a S3 File Gateway. This operation is only supported for S3 File Gateways.

> Body parameter

```json
{
  "FileShareARNList": {}
}
```

<h3 id="describesmbfileshares-parameters">Parameters</h3>

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
|body|body|[DescribeSMBFileSharesInput](#schemadescribesmbfilesharesinput)|true|none|
|» FileShareARNList|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeSMBFileShares|

> Example responses

> 200 Response

```json
{
  "SMBFileShareInfoList": {}
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

<h3 id="describesmbfileshares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSMBFileSharesOutput](#schemadescribesmbfilesharesoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSMBSettings

<a id="opIdDescribeSMBSettings"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeSMBSettings' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings`

Gets a description of a Server Message Block (SMB) file share settings from a file gateway. This operation is only supported for file gateways.

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="describesmbsettings-parameters">Parameters</h3>

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
|body|body|[DescribeSMBSettingsInput](#schemadescribesmbsettingsinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeSMBSettings|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "DomainName": {},
  "ActiveDirectoryStatus": {},
  "SMBGuestPasswordSet": {},
  "SMBSecurityStrategy": {},
  "FileSharesVisible": {},
  "SMBLocalGroups": {
    "GatewayAdmins": {}
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

<h3 id="describesmbsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSMBSettingsOutput](#schemadescribesmbsettingsoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSnapshotSchedule

<a id="opIdDescribeSnapshotSchedule"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeSnapshotSchedule' \
  -d '{
    "VolumeARN": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule`

Describes the snapshot schedule for the specified gateway volume. The snapshot schedule information includes intervals at which snapshots are automatically initiated on the volume. This operation is only supported in the cached volume and stored volume types.

> Body parameter

```json
{
  "VolumeARN": {}
}
```

<h3 id="describesnapshotschedule-parameters">Parameters</h3>

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
|body|body|[DescribeSnapshotScheduleInput](#schemadescribesnapshotscheduleinput)|true|none|
|» VolumeARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeSnapshotSchedule|

> Example responses

> 200 Response

```json
{
  "Description": "sgw-AABB1122:vol-AABB1122:Schedule",
  "RecurrenceInHours": 24,
  "StartAt": 6,
  "Timezone": "GMT+7:00",
  "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
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

<h3 id="describesnapshotschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSnapshotScheduleOutput](#schemadescribesnapshotscheduleoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeStorediSCSIVolumes

<a id="opIdDescribeStorediSCSIVolumes"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeStorediSCSIVolumes' \
  -d '{
    "VolumeARNs": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes`

Returns the description of the gateway volumes specified in the request. The list of gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume ARNs. This operation is only supported in stored volume gateway type.

> Body parameter

```json
{
  "VolumeARNs": {}
}
```

<h3 id="describestorediscsivolumes-parameters">Parameters</h3>

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
|body|body|[DescribeStorediSCSIVolumesInput](#schemadescribestorediscsivolumesinput)|true|none|
|» VolumeARNs|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeStorediSCSIVolumes|

> Example responses

> 200 Response

```json
{
  "StorediSCSIVolumes": [
    {
      "PreservedExistingData": false,
      "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
      "VolumeDiskId": "pci-0000:03:00.0-scsi-0:0:0:0",
      "VolumeId": "vol-1122AABB",
      "VolumeProgress": 23.7,
      "VolumeSizeInBytes": 1099511627776,
      "VolumeStatus": "BOOTSTRAPPING",
      "VolumeiSCSIAttributes": {
        "ChapEnabled": true,
        "NetworkInterfaceId": "10.243.43.207",
        "NetworkInterfacePort": 3260,
        "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
      }
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

<h3 id="describestorediscsivolumes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStorediSCSIVolumesOutput](#schemadescribestorediscsivolumesoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTapeArchives

<a id="opIdDescribeTapeArchives"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeTapeArchives' \
  -d '{
    "TapeARNs": {},
    "Marker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives`

<p>Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.</p> <p>If a specific <code>TapeARN</code> is not specified, Storage Gateway returns a description of all virtual tapes found in the VTS associated with your account.</p>

> Body parameter

```json
{
  "TapeARNs": {},
  "Marker": {},
  "Limit": {}
}
```

<h3 id="describetapearchives-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeTapeArchivesInput](#schemadescribetapearchivesinput)|true|none|
|» TapeARNs|body|object|false|none|
|» Marker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeTapeArchives|

> Example responses

> 200 Response

```json
{
  "Marker": "1",
  "TapeArchives": [
    {
      "CompletionTime": "2016-12-16T13:50Z",
      "TapeARN": "arn:aws:storagegateway:us-east-1:999999999:tape/AM08A1AD",
      "TapeBarcode": "AM08A1AD",
      "TapeSizeInBytes": 107374182400,
      "TapeStatus": "ARCHIVED"
    },
    {
      "CompletionTime": "2016-12-16T13:59Z",
      "TapeARN": "arn:aws:storagegateway:us-east-1:999999999:tape/AMZN01A2A4",
      "TapeBarcode": "AMZN01A2A4",
      "TapeSizeInBytes": 429496729600,
      "TapeStatus": "ARCHIVED"
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

<h3 id="describetapearchives-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTapeArchivesOutput](#schemadescribetapearchivesoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTapeRecoveryPoints

<a id="opIdDescribeTapeRecoveryPoints"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeTapeRecoveryPoints' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "Marker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints`

<p>Returns a list of virtual tape recovery points that are available for the specified tape gateway.</p> <p>A recovery point is a point-in-time view of a virtual tape at which all the data on the virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. This operation is only supported in the tape gateway type.</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "Marker": {},
  "Limit": {}
}
```

<h3 id="describetaperecoverypoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeTapeRecoveryPointsInput](#schemadescribetaperecoverypointsinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» Marker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeTapeRecoveryPoints|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
  "Marker": "1",
  "TapeRecoveryPointInfos": [
    {
      "TapeARN": "arn:aws:storagegateway:us-east-1:999999999:tape/AMZN01A2A4",
      "TapeRecoveryPointTime": "2016-12-16T13:50Z",
      "TapeSizeInBytes": 1471550497,
      "TapeStatus": "AVAILABLE"
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

<h3 id="describetaperecoverypoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTapeRecoveryPointsOutput](#schemadescribetaperecoverypointsoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTapes

<a id="opIdDescribeTapes"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeTapes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeTapes' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "TapeARNs": {},
    "Marker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeTapes`

Returns a description of the specified Amazon Resource Name (ARN) of virtual tapes. If a <code>TapeARN</code> is not specified, returns a description of all virtual tapes associated with the specified gateway. This operation is only supported in the tape gateway type.

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "TapeARNs": {},
  "Marker": {},
  "Limit": {}
}
```

<h3 id="describetapes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeTapesInput](#schemadescribetapesinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» TapeARNs|body|object|false|none|
|» Marker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeTapes|

> Example responses

> 200 Response

```json
{
  "Marker": "1",
  "Tapes": [
    {
      "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST04A2A1",
      "TapeBarcode": "TEST04A2A1",
      "TapeSizeInBytes": 107374182400,
      "TapeStatus": "AVAILABLE"
    },
    {
      "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST05A2A0",
      "TapeBarcode": "TEST05A2A0",
      "TapeSizeInBytes": 107374182400,
      "TapeStatus": "AVAILABLE"
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

<h3 id="describetapes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTapesOutput](#schemadescribetapesoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUploadBuffer

<a id="opIdDescribeUploadBuffer"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeUploadBuffer' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer`

<p>Returns information about the upload buffer of a gateway. This operation is supported for the stored volume, cached volume, and tape gateway types.</p> <p>The response includes disk IDs that are configured as upload buffer space, and it includes the amount of upload buffer space allocated and used.</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="describeuploadbuffer-parameters">Parameters</h3>

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
|body|body|[DescribeUploadBufferInput](#schemadescribeuploadbufferinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeUploadBuffer|

> Example responses

> 200 Response

```json
{
  "DiskIds": [
    "pci-0000:03:00.0-scsi-0:0:0:0",
    "pci-0000:04:00.0-scsi-0:1:0:0"
  ],
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
  "UploadBufferAllocatedInBytes": 161061273600,
  "UploadBufferUsedInBytes": 0
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

<h3 id="describeuploadbuffer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUploadBufferOutput](#schemadescribeuploadbufferoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVTLDevices

<a id="opIdDescribeVTLDevices"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeVTLDevices' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "VTLDeviceARNs": {},
    "Marker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices`

<p>Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In the response, Storage Gateway returns VTL device information.</p> <p>This operation is only supported in the tape gateway type.</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "VTLDeviceARNs": {},
  "Marker": {},
  "Limit": {}
}
```

<h3 id="describevtldevices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeVTLDevicesInput](#schemadescribevtldevicesinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» VTLDeviceARNs|body|object|false|none|
|» Marker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeVTLDevices|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B",
  "Marker": "1",
  "VTLDevices": [
    {
      "DeviceiSCSIAttributes": {
        "ChapEnabled": false,
        "NetworkInterfaceId": "10.243.43.207",
        "NetworkInterfacePort": 3260,
        "TargetARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:sgw-1fad4876-mediachanger"
      },
      "VTLDeviceARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_MEDIACHANGER_00001",
      "VTLDeviceProductIdentifier": "L700",
      "VTLDeviceType": "Medium Changer",
      "VTLDeviceVendor": "STK"
    },
    {
      "DeviceiSCSIAttributes": {
        "ChapEnabled": false,
        "NetworkInterfaceId": "10.243.43.209",
        "NetworkInterfacePort": 3260,
        "TargetARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:sgw-1fad4876-tapedrive-01"
      },
      "VTLDeviceARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_TAPEDRIVE_00001",
      "VTLDeviceProductIdentifier": "ULT3580-TD5",
      "VTLDeviceType": "Tape Drive",
      "VTLDeviceVendor": "IBM"
    },
    {
      "DeviceiSCSIAttributes": {
        "ChapEnabled": false,
        "NetworkInterfaceId": "10.243.43.209",
        "NetworkInterfacePort": 3260,
        "TargetARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:sgw-1fad4876-tapedrive-02"
      },
      "VTLDeviceARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_TAPEDRIVE_00002",
      "VTLDeviceProductIdentifier": "ULT3580-TD5",
      "VTLDeviceType": "Tape Drive",
      "VTLDeviceVendor": "IBM"
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

<h3 id="describevtldevices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVTLDevicesOutput](#schemadescribevtldevicesoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWorkingStorage

<a id="opIdDescribeWorkingStorage"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DescribeWorkingStorage' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage`

<p>Returns information about the working storage of a gateway. This operation is only supported in the stored volumes gateway type. This operation is deprecated in cached volumes API version (20120630). Use DescribeUploadBuffer instead.</p> <note> <p>Working storage is also referred to as upload buffer. You can also use the DescribeUploadBuffer operation to add upload buffer to a stored volume gateway.</p> </note> <p>The response includes disk IDs that are configured as working storage, and it includes the amount of working storage allocated and used.</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="describeworkingstorage-parameters">Parameters</h3>

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
|body|body|[DescribeWorkingStorageInput](#schemadescribeworkingstorageinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DescribeWorkingStorage|

> Example responses

> 200 Response

```json
{
  "DiskIds": [
    "pci-0000:03:00.0-scsi-0:0:0:0",
    "pci-0000:03:00.0-scsi-0:0:1:0"
  ],
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
  "WorkingStorageAllocatedInBytes": 2199023255552,
  "WorkingStorageUsedInBytes": 789207040
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

<h3 id="describeworkingstorage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWorkingStorageOutput](#schemadescribeworkingstorageoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetachVolume

<a id="opIdDetachVolume"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DetachVolume' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DetachVolume' \
  -d '{
    "VolumeARN": {},
    "ForceDetach": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DetachVolume`

Disconnects a volume from an iSCSI connection and then detaches the volume from the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance. This operation is only supported in the volume gateway type.

> Body parameter

```json
{
  "VolumeARN": {},
  "ForceDetach": {}
}
```

<h3 id="detachvolume-parameters">Parameters</h3>

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
|body|body|[DetachVolumeInput](#schemadetachvolumeinput)|true|none|
|» VolumeARN|body|object|true|none|
|» ForceDetach|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DetachVolume|

> Example responses

> 200 Response

```json
{
  "VolumeARN": {}
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

<h3 id="detachvolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachVolumeOutput](#schemadetachvolumeoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableGateway

<a id="opIdDisableGateway"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DisableGateway' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DisableGateway' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DisableGateway`

<p>Disables a tape gateway when the gateway is no longer functioning. For example, if your gateway VM is damaged, you can disable the gateway so you can recover virtual tapes.</p> <p>Use this operation for a tape gateway that is not reachable or not functioning. This operation is only supported in the tape gateway type.</p> <important> <p>After a gateway is disabled, it cannot be enabled.</p> </important>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="disablegateway-parameters">Parameters</h3>

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
|body|body|[DisableGatewayInput](#schemadisablegatewayinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DisableGateway|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
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

<h3 id="disablegateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableGatewayOutput](#schemadisablegatewayoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateFileSystem

<a id="opIdDisassociateFileSystem"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.DisassociateFileSystem' \
  -d '{
    "FileSystemAssociationARN": {},
    "ForceDelete": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem`

Disassociates an Amazon FSx file system from the specified gateway. After the disassociation process finishes, the gateway can no longer access the Amazon FSx file system. This operation is only supported in the FSx File Gateway type.

> Body parameter

```json
{
  "FileSystemAssociationARN": {},
  "ForceDelete": {}
}
```

<h3 id="disassociatefilesystem-parameters">Parameters</h3>

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
|body|body|[DisassociateFileSystemInput](#schemadisassociatefilesysteminput)|true|none|
|» FileSystemAssociationARN|body|object|true|none|
|» ForceDelete|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.DisassociateFileSystem|

> Example responses

> 200 Response

```json
{
  "FileSystemAssociationARN": {}
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

<h3 id="disassociatefilesystem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateFileSystemOutput](#schemadisassociatefilesystemoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## JoinDomain

<a id="opIdJoinDomain"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.JoinDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.JoinDomain' \
  -d '{
    "GatewayARN": {},
    "DomainName": {},
    "OrganizationalUnit": {},
    "DomainControllers": {},
    "TimeoutInSeconds": {},
    "UserName": {},
    "Password": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.JoinDomain`

Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that support the SMB file protocol.

> Body parameter

```json
{
  "GatewayARN": {},
  "DomainName": {},
  "OrganizationalUnit": {},
  "DomainControllers": {},
  "TimeoutInSeconds": {},
  "UserName": {},
  "Password": {}
}
```

<h3 id="joindomain-parameters">Parameters</h3>

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
|body|body|[JoinDomainInput](#schemajoindomaininput)|true|none|
|» GatewayARN|body|object|true|none|
|» DomainName|body|object|true|none|
|» OrganizationalUnit|body|object|false|none|
|» DomainControllers|body|object|false|none|
|» TimeoutInSeconds|body|object|false|none|
|» UserName|body|object|true|none|
|» Password|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.JoinDomain|

> Example responses

> 200 Response

```json
{
  "GatewayARN": {},
  "ActiveDirectoryStatus": {}
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

<h3 id="joindomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[JoinDomainOutput](#schemajoindomainoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAutomaticTapeCreationPolicies

<a id="opIdListAutomaticTapeCreationPolicies"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.ListAutomaticTapeCreationPolicies' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies`

<p>Lists the automatic tape creation policies for a gateway. If there are no automatic tape creation policies for the gateway, it returns an empty list.</p> <p>This operation is only supported for tape gateways.</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="listautomatictapecreationpolicies-parameters">Parameters</h3>

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
|body|body|[ListAutomaticTapeCreationPoliciesInput](#schemalistautomatictapecreationpoliciesinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|false|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.ListAutomaticTapeCreationPolicies|

> Example responses

> 200 Response

```json
{
  "AutomaticTapeCreationPolicyInfos": {}
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

<h3 id="listautomatictapecreationpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAutomaticTapeCreationPoliciesOutput](#schemalistautomatictapecreationpoliciesoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFileShares

<a id="opIdListFileShares"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.ListFileShares' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.ListFileShares' \
  -d '{
    "GatewayARN": {},
    "Limit": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.ListFileShares`

Gets a list of the file shares for a specific S3 File Gateway, or the list of file shares that belong to the calling user account. This operation is only supported for S3 File Gateways.

> Body parameter

```json
{
  "GatewayARN": {},
  "Limit": {},
  "Marker": {}
}
```

<h3 id="listfileshares-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListFileSharesInput](#schemalistfilesharesinput)|true|none|
|» GatewayARN|body|object|false|none|
|» Limit|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.ListFileShares|

> Example responses

> 200 Response

```json
{
  "Marker": {},
  "NextMarker": {},
  "FileShareInfoList": {}
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

<h3 id="listfileshares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFileSharesOutput](#schemalistfilesharesoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFileSystemAssociations

<a id="opIdListFileSystemAssociations"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.ListFileSystemAssociations' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "Limit": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations`

Gets a list of <code>FileSystemAssociationSummary</code> objects. Each object contains a summary of a file system association. This operation is only supported for FSx File Gateways.

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "Limit": {},
  "Marker": {}
}
```

<h3 id="listfilesystemassociations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListFileSystemAssociationsInput](#schemalistfilesystemassociationsinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|false|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» Limit|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.ListFileSystemAssociations|

> Example responses

> 200 Response

```json
{
  "Marker": {},
  "NextMarker": {},
  "FileSystemAssociationSummaryList": {}
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

<h3 id="listfilesystemassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFileSystemAssociationsOutput](#schemalistfilesystemassociationsoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGateways

<a id="opIdListGateways"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.ListGateways' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.ListGateways' \
  -d '{
    "Marker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.ListGateways`

<p>Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN).</p> <p>By default, the operation returns a maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of gateways returned in a response.</p> <p>If you have more gateways than are returned in a response (that is, the response returns only a truncated list of your gateways), the response contains a marker that you can specify in your next request to fetch the next page of gateways.</p>

> Body parameter

```json
{
  "Marker": {},
  "Limit": {}
}
```

<h3 id="listgateways-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListGatewaysInput](#schemalistgatewaysinput)|true|none|
|» Marker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.ListGateways|

> Example responses

> 200 Response

```json
{
  "Gateways": [
    {
      "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
    },
    {
      "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-23A4567C"
    }
  ],
  "Marker": "1"
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

<h3 id="listgateways-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGatewaysOutput](#schemalistgatewaysoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLocalDisks

<a id="opIdListLocalDisks"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.ListLocalDisks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.ListLocalDisks' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.ListLocalDisks`

<p>Returns a list of the gateway's local disks. To specify which gateway to describe, you use the Amazon Resource Name (ARN) of the gateway in the body of the request.</p> <p>The request returns a list of all disks, specifying which are configured as working storage, cache storage, or stored volume or not configured at all. The response includes a <code>DiskStatus</code> field. This field can have a value of present (the disk is available to use), missing (the disk is no longer connected to the gateway), or mismatch (the disk node is occupied by a disk that has incorrect metadata or the disk content is corrupted).</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="listlocaldisks-parameters">Parameters</h3>

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
|body|body|[ListLocalDisksInput](#schemalistlocaldisksinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.ListLocalDisks|

> Example responses

> 200 Response

```json
{
  "Disks": [
    {
      "DiskAllocationType": "CACHE_STORAGE",
      "DiskId": "pci-0000:03:00.0-scsi-0:0:0:0",
      "DiskNode": "SCSI(0:0)",
      "DiskPath": "/dev/sda",
      "DiskSizeInBytes": 1099511627776,
      "DiskStatus": "missing"
    },
    {
      "DiskAllocationResource": "",
      "DiskAllocationType": "UPLOAD_BUFFER",
      "DiskId": "pci-0000:03:00.0-scsi-0:0:1:0",
      "DiskNode": "SCSI(0:1)",
      "DiskPath": "/dev/sdb",
      "DiskSizeInBytes": 1099511627776,
      "DiskStatus": "present"
    }
  ],
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
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

<h3 id="listlocaldisks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLocalDisksOutput](#schemalistlocaldisksoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.ListTagsForResource' \
  -d '{
    "ResourceARN": {},
    "Marker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.ListTagsForResource`

Lists the tags that have been added to the specified resource. This operation is supported in storage gateways of all types.

> Body parameter

```json
{
  "ResourceARN": {},
  "Marker": {},
  "Limit": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTagsForResourceInput](#schemalisttagsforresourceinput)|true|none|
|» ResourceARN|body|object|true|none|
|» Marker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "Marker": "1",
  "ResourceARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-11A2222B",
  "Tags": [
    {
      "Key": "Dev Gatgeway Region",
      "Value": "East Coast"
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceOutput](#schemalisttagsforresourceoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTapePools

<a id="opIdListTapePools"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.ListTapePools' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.ListTapePools' \
  -d '{
    "PoolARNs": {},
    "Marker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.ListTapePools`

<p>Lists custom tape pools. You specify custom tape pools to list by specifying one or more custom tape pool Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN, the operation lists all custom tape pools.</p> <p>This operation supports pagination. You can optionally specify the <code>Limit</code> parameter in the body to limit the number of tape pools in the response. If the number of tape pools returned in the response is truncated, the response includes a <code>Marker</code> element that you can use in your subsequent request to retrieve the next set of tape pools.</p>

> Body parameter

```json
{
  "PoolARNs": {},
  "Marker": {},
  "Limit": {}
}
```

<h3 id="listtapepools-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTapePoolsInput](#schemalisttapepoolsinput)|true|none|
|» PoolARNs|body|object|false|none|
|» Marker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.ListTapePools|

> Example responses

> 200 Response

```json
{
  "PoolInfos": {},
  "Marker": {}
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

<h3 id="listtapepools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTapePoolsOutput](#schemalisttapepoolsoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTapes

<a id="opIdListTapes"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.ListTapes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.ListTapes' \
  -d '{
    "TapeARNs": [
      "stringstringstringstringstringstringstringstringst"
    ],
    "Marker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.ListTapes`

<p>Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both your VTL and VTS.</p> <p>This operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the <code>Limit</code> parameter in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a <code>Marker</code> element that you can use in your subsequent request to retrieve the next set of tapes. This operation is only supported in the tape gateway type.</p>

> Body parameter

```json
{
  "TapeARNs": [
    "stringstringstringstringstringstringstringstringst"
  ],
  "Marker": {},
  "Limit": {}
}
```

<h3 id="listtapes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTapesInput](#schemalisttapesinput)|true|none|
|» TapeARNs|body|[TapeARNs](#schematapearns)|false|The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't specify a tape ARN, the response lists all tapes in both your VTL and VTS.|
|» Marker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.ListTapes|

> Example responses

> 200 Response

```json
{
  "TapeInfos": [
    {
      "TapeARN": {},
      "TapeBarcode": {},
      "TapeSizeInBytes": {},
      "TapeStatus": {},
      "GatewayARN": {},
      "PoolId": {},
      "RetentionStartDate": {},
      "PoolEntryDate": {}
    }
  ],
  "Marker": {}
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

<h3 id="listtapes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTapesOutput](#schemalisttapesoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVolumeInitiators

<a id="opIdListVolumeInitiators"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.ListVolumeInitiators' \
  -d '{
    "VolumeARN": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators`

Lists iSCSI initiators that are connected to a volume. You can use this operation to determine whether a volume is being used or not. This operation is only supported in the cached volume and stored volume gateway types.

> Body parameter

```json
{
  "VolumeARN": {}
}
```

<h3 id="listvolumeinitiators-parameters">Parameters</h3>

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
|body|body|[ListVolumeInitiatorsInput](#schemalistvolumeinitiatorsinput)|true|none|
|» VolumeARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.ListVolumeInitiators|

> Example responses

> 200 Response

```json
{
  "Initiators": {}
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

<h3 id="listvolumeinitiators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVolumeInitiatorsOutput](#schemalistvolumeinitiatorsoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVolumeRecoveryPoints

<a id="opIdListVolumeRecoveryPoints"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.ListVolumeRecoveryPoints' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints`

<p>Lists the recovery points for a specified gateway. This operation is only supported in the cached volume gateway type.</p> <p>Each cache volume has one recovery point. A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot or clone a new cached volume from a source volume. To create a snapshot from a volume recovery point use the <a>CreateSnapshotFromVolumeRecoveryPoint</a> operation.</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="listvolumerecoverypoints-parameters">Parameters</h3>

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
|body|body|[ListVolumeRecoveryPointsInput](#schemalistvolumerecoverypointsinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.ListVolumeRecoveryPoints|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
  "VolumeRecoveryPointInfos": [
    {
      "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
      "VolumeRecoveryPointTime": "2012-09-04T21:08:44.627Z",
      "VolumeSizeInBytes": 536870912000
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

<h3 id="listvolumerecoverypoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVolumeRecoveryPointsOutput](#schemalistvolumerecoverypointsoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVolumes

<a id="opIdListVolumes"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.ListVolumes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.ListVolumes' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "Marker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.ListVolumes`

<p>Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the volume ARNs. If you want additional volume information, use the <a>DescribeStorediSCSIVolumes</a> or the <a>DescribeCachediSCSIVolumes</a> API.</p> <p>The operation supports pagination. By default, the operation returns a maximum of up to 100 volumes. You can optionally specify the <code>Limit</code> field in the body to limit the number of volumes in the response. If the number of volumes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This operation is only supported in the cached volume and stored volume gateway types.</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "Marker": {},
  "Limit": {}
}
```

<h3 id="listvolumes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListVolumesInput](#schemalistvolumesinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|false|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» Marker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.ListVolumes|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
  "Marker": "1",
  "VolumeInfos": [
    {
      "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
      "GatewayId": "sgw-12A3456B",
      "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
      "VolumeId": "vol-1122AABB",
      "VolumeSizeInBytes": 107374182400,
      "VolumeType": "STORED"
    },
    {
      "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-13B4567C",
      "GatewayId": "sgw-gw-13B4567C",
      "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-13B4567C/volume/vol-3344CCDD",
      "VolumeId": "vol-1122AABB",
      "VolumeSizeInBytes": 107374182400,
      "VolumeType": "STORED"
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

<h3 id="listvolumes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVolumesOutput](#schemalistvolumesoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## NotifyWhenUploaded

<a id="opIdNotifyWhenUploaded"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.NotifyWhenUploaded' \
  -d '{
    "FileShareARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded`

<p>Sends you notification through CloudWatch Events when all files written to your file share have been uploaded to S3. Amazon S3.</p> <p>Storage Gateway can send a notification through Amazon CloudWatch Events when all files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the file share up to the time that you make a request for notification. When the upload is done, Storage Gateway sends you notification through an Amazon CloudWatch Event. You can configure CloudWatch Events to send the notification through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File Gateways.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-upload-notification">Getting file upload notification</a> in the <i>Storage Gateway User Guide</i>.</p>

> Body parameter

```json
{
  "FileShareARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="notifywhenuploaded-parameters">Parameters</h3>

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
|body|body|[NotifyWhenUploadedInput](#schemanotifywhenuploadedinput)|true|none|
|» FileShareARN|body|[FileShareARN](#schemafilesharearn)|true|The Amazon Resource Name (ARN) of the file share.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.NotifyWhenUploaded|

> Example responses

> 200 Response

```json
{
  "FileShareARN": "stringstringstringstringstringstringstringstringst",
  "NotificationId": "string"
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

<h3 id="notifywhenuploaded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NotifyWhenUploadedOutput](#schemanotifywhenuploadedoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RefreshCache

<a id="opIdRefreshCache"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.RefreshCache' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.RefreshCache' \
  -d '{
    "FileShareARN": {},
    "FolderList": {},
    "Recursive": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.RefreshCache`

<p>Refreshes the cached inventory of objects for the specified file share. This operation finds objects in the Amazon S3 bucket that were added, removed, or replaced since the gateway last listed the bucket's contents and cached the results. This operation does not import files into the S3 File Gateway cache storage. It only updates the cached inventory to reflect changes in the inventory of the objects in the S3 bucket. This operation is only supported in the S3 File Gateway types.</p> <p>You can subscribe to be notified through an Amazon CloudWatch event when your <code>RefreshCache</code> operation completes. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting notified about file operations</a> in the <i>Storage Gateway User Guide</i>. This operation is Only supported for S3 File Gateways.</p> <p>When this API is called, it only initiates the refresh operation. When the API call completes and returns a success code, it doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification to determine that the operation has completed before you check for new files on the gateway file share. You can subscribe to be notified through a CloudWatch event when your <code>RefreshCache</code> operation completes.</p> <p>Throttle limit: This API is asynchronous, so the gateway will accept no more than two refreshes at any time. We recommend using the refresh-complete CloudWatch event notification before issuing additional requests. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting notified about file operations</a> in the <i>Storage Gateway User Guide</i>.</p> <important> <ul> <li> <p>Wait at least 60 seconds between consecutive RefreshCache API requests.</p> </li> <li> <p>RefreshCache does not evict cache entries if invoked consecutively within 60 seconds of a previous RefreshCache request.</p> </li> <li> <p>If you invoke the RefreshCache API when two requests are already being processed, any new request will cause an <code>InvalidGatewayRequestException</code> error because too many requests were sent to the server.</p> </li> </ul> </important> <note> <p>The S3 bucket name does not need to be included when entering the list of folders in the FolderList parameter.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting notified about file operations</a> in the <i>Storage Gateway User Guide</i>.</p>

> Body parameter

```json
{
  "FileShareARN": {},
  "FolderList": {},
  "Recursive": {}
}
```

<h3 id="refreshcache-parameters">Parameters</h3>

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
|body|body|[RefreshCacheInput](#schemarefreshcacheinput)|true|none|
|» FileShareARN|body|object|true|none|
|» FolderList|body|object|false|none|
|» Recursive|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.RefreshCache|

> Example responses

> 200 Response

```json
{
  "FileShareARN": "stringstringstringstringstringstringstringstringst",
  "NotificationId": "string"
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

<h3 id="refreshcache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RefreshCacheOutput](#schemarefreshcacheoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveTagsFromResource

<a id="opIdRemoveTagsFromResource"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.RemoveTagsFromResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource`

Removes one or more tags from the specified resource. This operation is supported in storage gateways of all types.

> Body parameter

```json
{
  "ResourceARN": {},
  "TagKeys": {}
}
```

<h3 id="removetagsfromresource-parameters">Parameters</h3>

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
|body|body|[RemoveTagsFromResourceInput](#schemaremovetagsfromresourceinput)|true|none|
|» ResourceARN|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.RemoveTagsFromResource|

> Example responses

> 200 Response

```json
{
  "ResourceARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-11A2222B"
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

<h3 id="removetagsfromresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveTagsFromResourceOutput](#schemaremovetagsfromresourceoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResetCache

<a id="opIdResetCache"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.ResetCache' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.ResetCache' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.ResetCache`

<p>Resets all cache disks that have encountered an error and makes the disks available for reconfiguration as cache storage. If your cache disk encounters an error, the gateway prevents read and write operations on virtual tapes in the gateway. For example, an error can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the gateway loses its cache storage. At this point, you can reconfigure the disks as cache disks. This operation is only supported in the cached volume and tape types.</p> <important> <p>If the cache disk you are resetting contains data that has not been uploaded to Amazon S3 yet, that data can be lost. After you reset cache disks, there will be no configured cache disks left in the gateway, so you must configure at least one new cache disk for your gateway to function properly.</p> </important>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="resetcache-parameters">Parameters</h3>

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
|body|body|[ResetCacheInput](#schemaresetcacheinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.ResetCache|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-13B4567C"
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

<h3 id="resetcache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResetCacheOutput](#schemaresetcacheoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RetrieveTapeArchive

<a id="opIdRetrieveTapeArchive"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.RetrieveTapeArchive' \
  -d '{
    "TapeARN": {},
    "GatewayARN": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive`

<p>Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in the tape gateway type.</p> <p>Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation is only supported in the tape gateway type.</p>

> Body parameter

```json
{
  "TapeARN": {},
  "GatewayARN": {}
}
```

<h3 id="retrievetapearchive-parameters">Parameters</h3>

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
|body|body|[RetrieveTapeArchiveInput](#schemaretrievetapearchiveinput)|true|none|
|» TapeARN|body|object|true|none|
|» GatewayARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.RetrieveTapeArchive|

> Example responses

> 200 Response

```json
{
  "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST0AA2AF"
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

<h3 id="retrievetapearchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RetrieveTapeArchiveOutput](#schemaretrievetapearchiveoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RetrieveTapeRecoveryPoint

<a id="opIdRetrieveTapeRecoveryPoint"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.RetrieveTapeRecoveryPoint' \
  -d '{
    "TapeARN": {},
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint`

<p>Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape gateway type.</p> <p>A recovery point is a point in time view of a virtual tape at which all the data on the tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway.</p> <note> <p>The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge for retrieving recovery points.</p> </note>

> Body parameter

```json
{
  "TapeARN": {},
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="retrievetaperecoverypoint-parameters">Parameters</h3>

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
|body|body|[RetrieveTapeRecoveryPointInput](#schemaretrievetaperecoverypointinput)|true|none|
|» TapeARN|body|object|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.RetrieveTapeRecoveryPoint|

> Example responses

> 200 Response

```json
{
  "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST0AA2AF"
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

<h3 id="retrievetaperecoverypoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RetrieveTapeRecoveryPointOutput](#schemaretrievetaperecoverypointoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetLocalConsolePassword

<a id="opIdSetLocalConsolePassword"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.SetLocalConsolePassword' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "LocalConsolePassword": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword`

Sets the password for your VM local console. When you log in to the local console for the first time, you log in to the VM with the default credentials. We recommend that you set a new password. You don't need to know the default password to set a new password.

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "LocalConsolePassword": {}
}
```

<h3 id="setlocalconsolepassword-parameters">Parameters</h3>

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
|body|body|[SetLocalConsolePasswordInput](#schemasetlocalconsolepasswordinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» LocalConsolePassword|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.SetLocalConsolePassword|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B"
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

<h3 id="setlocalconsolepassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetLocalConsolePasswordOutput](#schemasetlocalconsolepasswordoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetSMBGuestPassword

<a id="opIdSetSMBGuestPassword"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.SetSMBGuestPassword' \
  -d '{
    "GatewayARN": {},
    "Password": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword`

Sets the password for the guest user <code>smbguest</code>. The <code>smbguest</code> user is the user when the authentication method for the file share is set to <code>GuestAccess</code>. This operation only supported for S3 File Gateways

> Body parameter

```json
{
  "GatewayARN": {},
  "Password": {}
}
```

<h3 id="setsmbguestpassword-parameters">Parameters</h3>

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
|body|body|[SetSMBGuestPasswordInput](#schemasetsmbguestpasswordinput)|true|none|
|» GatewayARN|body|object|true|none|
|» Password|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.SetSMBGuestPassword|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
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

<h3 id="setsmbguestpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetSMBGuestPasswordOutput](#schemasetsmbguestpasswordoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ShutdownGateway

<a id="opIdShutdownGateway"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.ShutdownGateway' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.ShutdownGateway' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.ShutdownGateway`

<p>Shuts down a gateway. To specify which gateway to shut down, use the Amazon Resource Name (ARN) of the gateway in the body of your request.</p> <p>The operation shuts down the gateway service component running in the gateway's virtual machine (VM) and not the host VM.</p> <note> <p>If you want to shut down the VM, it is recommended that you first shut down the gateway component in the VM to avoid unpredictable conditions.</p> </note> <p>After the gateway is shutdown, you cannot call any other API except <a>StartGateway</a>, <a>DescribeGatewayInformation</a>, and <a>ListGateways</a>. For more information, see <a>ActivateGateway</a>. Your applications cannot read from or write to the gateway's storage volumes, and there are no snapshots taken.</p> <note> <p>When you make a shutdown request, you will get a <code>200 OK</code> success response immediately. However, it might take some time for the gateway to shut down. You can call the <a>DescribeGatewayInformation</a> API to check the status. For more information, see <a>ActivateGateway</a>.</p> </note> <p>If do not intend to use the gateway again, you must delete the gateway (using <a>DeleteGateway</a>) to no longer pay software charges associated with the gateway.</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="shutdowngateway-parameters">Parameters</h3>

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
|body|body|[ShutdownGatewayInput](#schemashutdowngatewayinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.ShutdownGateway|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B"
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

<h3 id="shutdowngateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ShutdownGatewayOutput](#schemashutdowngatewayoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartAvailabilityMonitorTest

<a id="opIdStartAvailabilityMonitorTest"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.StartAvailabilityMonitorTest' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest`

<p>Start a test that verifies that the specified gateway is configured for High Availability monitoring in your host environment. This request only initiates the test and that a successful response only indicates that the test was started. It doesn't indicate that the test passed. For the status of the test, invoke the <code>DescribeAvailabilityMonitorTest</code> API.</p> <note> <p>Starting this test will cause your gateway to go offline for a brief period.</p> </note>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="startavailabilitymonitortest-parameters">Parameters</h3>

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
|body|body|[StartAvailabilityMonitorTestInput](#schemastartavailabilitymonitortestinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.StartAvailabilityMonitorTest|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
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

<h3 id="startavailabilitymonitortest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartAvailabilityMonitorTestOutput](#schemastartavailabilitymonitortestoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartGateway

<a id="opIdStartGateway"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.StartGateway' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.StartGateway' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.StartGateway`

<p>Starts a gateway that you previously shut down (see <a>ShutdownGateway</a>). After the gateway starts, you can then make other API calls, your applications can read from or write to the gateway's storage volumes and you will be able to take snapshot backups.</p> <note> <p>When you make a request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to be ready. You should call <a>DescribeGatewayInformation</a> and check the status before making any additional API calls. For more information, see <a>ActivateGateway</a>.</p> </note> <p>To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="startgateway-parameters">Parameters</h3>

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
|body|body|[StartGatewayInput](#schemastartgatewayinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.StartGateway|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B"
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

<h3 id="startgateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartGatewayOutput](#schemastartgatewayoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAutomaticTapeCreationPolicy

<a id="opIdUpdateAutomaticTapeCreationPolicy"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy' \
  -d '{
    "AutomaticTapeCreationRules": {},
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy`

<p>Updates the automatic tape creation policy of a gateway. Use this to update the policy with a new set of automatic tape creation rules. This is only supported for tape gateways.</p> <p>By default, there is no automatic tape creation policy.</p> <note> <p>A gateway can have only one automatic tape creation policy.</p> </note>

> Body parameter

```json
{
  "AutomaticTapeCreationRules": {},
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="updateautomatictapecreationpolicy-parameters">Parameters</h3>

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
|body|body|[UpdateAutomaticTapeCreationPolicyInput](#schemaupdateautomatictapecreationpolicyinput)|true|none|
|» AutomaticTapeCreationRules|body|object|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
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

<h3 id="updateautomatictapecreationpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAutomaticTapeCreationPolicyOutput](#schemaupdateautomatictapecreationpolicyoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBandwidthRateLimit

<a id="opIdUpdateBandwidthRateLimit"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.UpdateBandwidthRateLimit' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "AverageUploadRateLimitInBitsPerSec": {},
    "AverageDownloadRateLimitInBitsPerSec": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit`

<p>Updates the bandwidth rate limits of a gateway. You can update both the upload and download bandwidth rate limit or specify only one of the two. If you don't set a bandwidth rate limit, the existing rate limit remains. This operation is supported only for the stored volume, cached volume, and tape gateway types. To update bandwidth rate limits for S3 file gateways, use <a>UpdateBandwidthRateLimitSchedule</a>.</p> <p>By default, a gateway's bandwidth rate limits are not set. If you don't set any limit, the gateway does not have any limitations on its bandwidth usage and could potentially use the maximum available bandwidth.</p> <p>To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.</p>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "AverageUploadRateLimitInBitsPerSec": {},
  "AverageDownloadRateLimitInBitsPerSec": {}
}
```

<h3 id="updatebandwidthratelimit-parameters">Parameters</h3>

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
|body|body|[UpdateBandwidthRateLimitInput](#schemaupdatebandwidthratelimitinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» AverageUploadRateLimitInBitsPerSec|body|object|false|none|
|» AverageDownloadRateLimitInBitsPerSec|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.UpdateBandwidthRateLimit|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
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

<h3 id="updatebandwidthratelimit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBandwidthRateLimitOutput](#schemaupdatebandwidthratelimitoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBandwidthRateLimitSchedule

<a id="opIdUpdateBandwidthRateLimitSchedule"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.UpdateBandwidthRateLimitSchedule' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "BandwidthRateLimitIntervals": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule`

 Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to initiate or update a gateway's bandwidth rate limit schedule. This operation is supported only for volume, tape and S3 file gateways. FSx file gateways do not support bandwidth rate limits.

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "BandwidthRateLimitIntervals": {}
}
```

<h3 id="updatebandwidthratelimitschedule-parameters">Parameters</h3>

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
|body|body|[UpdateBandwidthRateLimitScheduleInput](#schemaupdatebandwidthratelimitscheduleinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» BandwidthRateLimitIntervals|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.UpdateBandwidthRateLimitSchedule|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
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

<h3 id="updatebandwidthratelimitschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBandwidthRateLimitScheduleOutput](#schemaupdatebandwidthratelimitscheduleoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateChapCredentials

<a id="opIdUpdateChapCredentials"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.UpdateChapCredentials' \
  -d '{
    "TargetARN": {},
    "SecretToAuthenticateInitiator": {},
    "InitiatorName": {},
    "SecretToAuthenticateTarget": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials`

<p>Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for added security, you might use it. This operation is supported in the volume and tape gateway types.</p> <important> <p>When you update CHAP credentials, all existing connections on the target are closed and initiators must reconnect with the new credentials.</p> </important>

> Body parameter

```json
{
  "TargetARN": {},
  "SecretToAuthenticateInitiator": {},
  "InitiatorName": {},
  "SecretToAuthenticateTarget": {}
}
```

<h3 id="updatechapcredentials-parameters">Parameters</h3>

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
|body|body|[UpdateChapCredentialsInput](#schemaupdatechapcredentialsinput)|true|none|
|» TargetARN|body|object|true|none|
|» SecretToAuthenticateInitiator|body|object|true|none|
|» InitiatorName|body|object|true|none|
|» SecretToAuthenticateTarget|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.UpdateChapCredentials|

> Example responses

> 200 Response

```json
{
  "InitiatorName": "iqn.1991-05.com.microsoft:computername.domain.example.com",
  "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
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

<h3 id="updatechapcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateChapCredentialsOutput](#schemaupdatechapcredentialsoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFileSystemAssociation

<a id="opIdUpdateFileSystemAssociation"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.UpdateFileSystemAssociation' \
  -d '{
    "FileSystemAssociationARN": {},
    "UserName": {},
    "Password": {},
    "AuditDestinationARN": {},
    "CacheAttributes": {
      "CacheStaleTimeoutInSeconds": {}
    }
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation`

Updates a file system association. This operation is only supported in the FSx File Gateways.

> Body parameter

```json
{
  "FileSystemAssociationARN": {},
  "UserName": {},
  "Password": {},
  "AuditDestinationARN": {},
  "CacheAttributes": {
    "CacheStaleTimeoutInSeconds": {}
  }
}
```

<h3 id="updatefilesystemassociation-parameters">Parameters</h3>

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
|body|body|[UpdateFileSystemAssociationInput](#schemaupdatefilesystemassociationinput)|true|none|
|» FileSystemAssociationARN|body|object|true|none|
|» UserName|body|object|false|none|
|» Password|body|object|false|none|
|» AuditDestinationARN|body|object|false|none|
|» CacheAttributes|body|[CacheAttributes](#schemacacheattributes)|false|The refresh cache information for the file share or FSx file systems.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.UpdateFileSystemAssociation|

> Example responses

> 200 Response

```json
{
  "FileSystemAssociationARN": {}
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

<h3 id="updatefilesystemassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFileSystemAssociationOutput](#schemaupdatefilesystemassociationoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGatewayInformation

<a id="opIdUpdateGatewayInformation"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.UpdateGatewayInformation' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "GatewayName": "string",
    "GatewayTimezone": {},
    "CloudWatchLogGroupARN": {},
    "GatewayCapacity": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation`

<p>Updates a gateway's metadata, which includes the gateway's name and time zone. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.</p> <note> <p>For gateways activated after September 2, 2015, the gateway's ARN contains the gateway ID rather than the gateway name. However, changing the name of the gateway has no effect on the gateway's ARN.</p> </note>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "GatewayName": "string",
  "GatewayTimezone": {},
  "CloudWatchLogGroupARN": {},
  "GatewayCapacity": {}
}
```

<h3 id="updategatewayinformation-parameters">Parameters</h3>

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
|body|body|[UpdateGatewayInformationInput](#schemaupdategatewayinformationinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» GatewayName|body|[GatewayName](#schemagatewayname)|false|The name you configured for your gateway.|
|» GatewayTimezone|body|object|false|none|
|» CloudWatchLogGroupARN|body|object|false|none|
|» GatewayCapacity|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.UpdateGatewayInformation|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
  "GatewayName": ""
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

<h3 id="updategatewayinformation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGatewayInformationOutput](#schemaupdategatewayinformationoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGatewaySoftwareNow

<a id="opIdUpdateGatewaySoftwareNow"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.UpdateGatewaySoftwareNow' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow`

<p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete. You can call <a>DescribeGatewayInformation</a> to verify the gateway is in the <code>STATE_RUNNING</code> state.</p> </note> <important> <p>A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your applications by increasing your iSCSI Initiators' timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and Linux, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorWindowsClient.html#CustomizeWindowsiSCSISettings">Customizing your Windows iSCSI settings</a> and <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorRedHatClient.html#CustomizeLinuxiSCSISettings">Customizing your Linux iSCSI settings</a>, respectively.</p> </important>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

<h3 id="updategatewaysoftwarenow-parameters">Parameters</h3>

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
|body|body|[UpdateGatewaySoftwareNowInput](#schemaupdategatewaysoftwarenowinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.UpdateGatewaySoftwareNow|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
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

<h3 id="updategatewaysoftwarenow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGatewaySoftwareNowOutput](#schemaupdategatewaysoftwarenowoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMaintenanceStartTime

<a id="opIdUpdateMaintenanceStartTime"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.UpdateMaintenanceStartTime' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "HourOfDay": {},
    "MinuteOfHour": {},
    "DayOfWeek": {},
    "DayOfMonth": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime`

Updates a gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is the time in your gateway's time zone.

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "HourOfDay": {},
  "MinuteOfHour": {},
  "DayOfWeek": {},
  "DayOfMonth": {}
}
```

<h3 id="updatemaintenancestarttime-parameters">Parameters</h3>

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
|body|body|[UpdateMaintenanceStartTimeInput](#schemaupdatemaintenancestarttimeinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» HourOfDay|body|object|true|none|
|» MinuteOfHour|body|object|true|none|
|» DayOfWeek|body|object|false|none|
|» DayOfMonth|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.UpdateMaintenanceStartTime|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
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

<h3 id="updatemaintenancestarttime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMaintenanceStartTimeOutput](#schemaupdatemaintenancestarttimeoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateNFSFileShare

<a id="opIdUpdateNFSFileShare"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.UpdateNFSFileShare' \
  -d '{
    "FileShareARN": {},
    "KMSEncrypted": {},
    "KMSKey": {},
    "NFSFileShareDefaults": {
      "FileMode": {},
      "DirectoryMode": {},
      "GroupId": {},
      "OwnerId": {}
    },
    "DefaultStorageClass": {},
    "ObjectACL": {},
    "ClientList": {},
    "Squash": {},
    "ReadOnly": {},
    "GuessMIMETypeEnabled": {},
    "RequesterPays": {},
    "FileShareName": {},
    "CacheAttributes": {
      "CacheStaleTimeoutInSeconds": {}
    },
    "NotificationPolicy": {},
    "AuditDestinationARN": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare`

<p>Updates a Network File System (NFS) file share. This operation is only supported in S3 File Gateways.</p> <note> <p>To leave a file share field unchanged, set the corresponding input field to null.</p> </note> <p>Updates the following file share settings:</p> <ul> <li> <p>Default storage class for your S3 bucket</p> </li> <li> <p>Metadata defaults for your S3 bucket</p> </li> <li> <p>Allowed NFS clients for your file share</p> </li> <li> <p>Squash settings</p> </li> <li> <p>Write status of your file share</p> </li> </ul>

> Body parameter

```json
{
  "FileShareARN": {},
  "KMSEncrypted": {},
  "KMSKey": {},
  "NFSFileShareDefaults": {
    "FileMode": {},
    "DirectoryMode": {},
    "GroupId": {},
    "OwnerId": {}
  },
  "DefaultStorageClass": {},
  "ObjectACL": {},
  "ClientList": {},
  "Squash": {},
  "ReadOnly": {},
  "GuessMIMETypeEnabled": {},
  "RequesterPays": {},
  "FileShareName": {},
  "CacheAttributes": {
    "CacheStaleTimeoutInSeconds": {}
  },
  "NotificationPolicy": {},
  "AuditDestinationARN": {}
}
```

<h3 id="updatenfsfileshare-parameters">Parameters</h3>

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
|body|body|[UpdateNFSFileShareInput](#schemaupdatenfsfileshareinput)|true|none|
|» FileShareARN|body|object|true|none|
|» KMSEncrypted|body|object|false|none|
|» KMSKey|body|object|false|none|
|» NFSFileShareDefaults|body|object|false|none|
|» » FileMode|body|object|false|none|
|» » DirectoryMode|body|object|false|none|
|» » GroupId|body|object|false|none|
|» » OwnerId|body|object|false|none|
|» DefaultStorageClass|body|object|false|none|
|» ObjectACL|body|object|false|none|
|» ClientList|body|object|false|none|
|» Squash|body|object|false|none|
|» ReadOnly|body|object|false|none|
|» GuessMIMETypeEnabled|body|object|false|none|
|» RequesterPays|body|object|false|none|
|» FileShareName|body|object|false|none|
|» CacheAttributes|body|object|false|none|
|» » CacheStaleTimeoutInSeconds|body|object|false|none|
|» NotificationPolicy|body|object|false|none|
|» AuditDestinationARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.UpdateNFSFileShare|

> Example responses

> 200 Response

```json
{
  "FileShareARN": {}
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

<h3 id="updatenfsfileshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateNFSFileShareOutput](#schemaupdatenfsfileshareoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSMBFileShare

<a id="opIdUpdateSMBFileShare"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.UpdateSMBFileShare' \
  -d '{
    "FileShareARN": {},
    "KMSEncrypted": {},
    "KMSKey": {},
    "DefaultStorageClass": {},
    "ObjectACL": {},
    "ReadOnly": {},
    "GuessMIMETypeEnabled": {},
    "RequesterPays": {},
    "SMBACLEnabled": {},
    "AccessBasedEnumeration": {},
    "AdminUserList": {},
    "ValidUserList": {},
    "InvalidUserList": {},
    "AuditDestinationARN": {},
    "CaseSensitivity": {},
    "FileShareName": {},
    "CacheAttributes": {
      "CacheStaleTimeoutInSeconds": {}
    },
    "NotificationPolicy": {},
    "OplocksEnabled": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare`

<p>Updates a Server Message Block (SMB) file share. This operation is only supported for S3 File Gateways.</p> <note> <p>To leave a file share field unchanged, set the corresponding input field to null.</p> </note> <important> <p>File gateways require Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your file gateway in. If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the <i>Identity and Access Management User Guide</i>.</p> <p>File gateways don't support creating hard or symbolic links on a file share.</p> </important>

> Body parameter

```json
{
  "FileShareARN": {},
  "KMSEncrypted": {},
  "KMSKey": {},
  "DefaultStorageClass": {},
  "ObjectACL": {},
  "ReadOnly": {},
  "GuessMIMETypeEnabled": {},
  "RequesterPays": {},
  "SMBACLEnabled": {},
  "AccessBasedEnumeration": {},
  "AdminUserList": {},
  "ValidUserList": {},
  "InvalidUserList": {},
  "AuditDestinationARN": {},
  "CaseSensitivity": {},
  "FileShareName": {},
  "CacheAttributes": {
    "CacheStaleTimeoutInSeconds": {}
  },
  "NotificationPolicy": {},
  "OplocksEnabled": {}
}
```

<h3 id="updatesmbfileshare-parameters">Parameters</h3>

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
|body|body|[UpdateSMBFileShareInput](#schemaupdatesmbfileshareinput)|true|none|
|» FileShareARN|body|object|true|none|
|» KMSEncrypted|body|object|false|none|
|» KMSKey|body|object|false|none|
|» DefaultStorageClass|body|object|false|none|
|» ObjectACL|body|object|false|none|
|» ReadOnly|body|object|false|none|
|» GuessMIMETypeEnabled|body|object|false|none|
|» RequesterPays|body|object|false|none|
|» SMBACLEnabled|body|object|false|none|
|» AccessBasedEnumeration|body|object|false|none|
|» AdminUserList|body|object|false|none|
|» ValidUserList|body|object|false|none|
|» InvalidUserList|body|object|false|none|
|» AuditDestinationARN|body|object|false|none|
|» CaseSensitivity|body|object|false|none|
|» FileShareName|body|object|false|none|
|» CacheAttributes|body|object|false|none|
|» » CacheStaleTimeoutInSeconds|body|object|false|none|
|» NotificationPolicy|body|object|false|none|
|» OplocksEnabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.UpdateSMBFileShare|

> Example responses

> 200 Response

```json
{
  "FileShareARN": {}
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

<h3 id="updatesmbfileshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSMBFileShareOutput](#schemaupdatesmbfileshareoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSMBFileShareVisibility

<a id="opIdUpdateSMBFileShareVisibility"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.UpdateSMBFileShareVisibility' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "FileSharesVisible": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility`

Controls whether the shares on an S3 File Gateway are visible in a net view or browse list. The operation is only supported for S3 File Gateways.

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "FileSharesVisible": {}
}
```

<h3 id="updatesmbfilesharevisibility-parameters">Parameters</h3>

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
|body|body|[UpdateSMBFileShareVisibilityInput](#schemaupdatesmbfilesharevisibilityinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» FileSharesVisible|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.UpdateSMBFileShareVisibility|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
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

<h3 id="updatesmbfilesharevisibility-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSMBFileShareVisibilityOutput](#schemaupdatesmbfilesharevisibilityoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSMBLocalGroups

<a id="opIdUpdateSMBLocalGroups"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.UpdateSMBLocalGroups' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "SMBLocalGroups": {
      "GatewayAdmins": {}
    }
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups`

Updates the list of Active Directory users and groups that have special permissions for SMB file shares on the gateway.

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "SMBLocalGroups": {
    "GatewayAdmins": {}
  }
}
```

<h3 id="updatesmblocalgroups-parameters">Parameters</h3>

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
|body|body|[UpdateSMBLocalGroupsInput](#schemaupdatesmblocalgroupsinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» SMBLocalGroups|body|object|true|none|
|» » GatewayAdmins|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.UpdateSMBLocalGroups|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
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

<h3 id="updatesmblocalgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSMBLocalGroupsOutput](#schemaupdatesmblocalgroupsoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSMBSecurityStrategy

<a id="opIdUpdateSMBSecurityStrategy"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.UpdateSMBSecurityStrategy' \
  -d '{
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "SMBSecurityStrategy": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy`

<p>Updates the SMB security strategy on a file gateway. This action is only supported in file gateways.</p> <note> <p>This API is called Security level in the User Guide.</p> <p>A higher security level can affect performance of the gateway.</p> </note>

> Body parameter

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "SMBSecurityStrategy": {}
}
```

<h3 id="updatesmbsecuritystrategy-parameters">Parameters</h3>

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
|body|body|[UpdateSMBSecurityStrategyInput](#schemaupdatesmbsecuritystrategyinput)|true|none|
|» GatewayARN|body|[GatewayARN](#schemagatewayarn)|true|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|» SMBSecurityStrategy|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.UpdateSMBSecurityStrategy|

> Example responses

> 200 Response

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
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

<h3 id="updatesmbsecuritystrategy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSMBSecurityStrategyOutput](#schemaupdatesmbsecuritystrategyoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSnapshotSchedule

<a id="opIdUpdateSnapshotSchedule"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.UpdateSnapshotSchedule' \
  -d '{
    "VolumeARN": {},
    "StartAt": {},
    "RecurrenceInHours": {},
    "Description": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule`

<p>Updates a snapshot schedule configured for a gateway volume. This operation is only supported in the cached volume and stored volume gateway types.</p> <p>The default snapshot schedule for volume is once every 24 hours, starting at the creation time of the volume. You can use this API to change the snapshot schedule configured for the volume.</p> <p>In the request you must identify the gateway volume whose snapshot schedule you want to update, and the schedule information, including when you want the snapshot to begin on a day and the frequency (in hours) of snapshots.</p>

> Body parameter

```json
{
  "VolumeARN": {},
  "StartAt": {},
  "RecurrenceInHours": {},
  "Description": {},
  "Tags": {}
}
```

<h3 id="updatesnapshotschedule-parameters">Parameters</h3>

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
|body|body|[UpdateSnapshotScheduleInput](#schemaupdatesnapshotscheduleinput)|true|none|
|» VolumeARN|body|object|true|none|
|» StartAt|body|object|true|none|
|» RecurrenceInHours|body|object|true|none|
|» Description|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.UpdateSnapshotSchedule|

> Example responses

> 200 Response

```json
{
  "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
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

<h3 id="updatesnapshotschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSnapshotScheduleOutput](#schemaupdatesnapshotscheduleoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVTLDeviceType

<a id="opIdUpdateVTLDeviceType"></a>

> Code samples

```bash
curl 'https://storagegateway.us-east-1.amazonaws.com/#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: StorageGateway_20130630.UpdateVTLDeviceType' \
  -d '{
    "VTLDeviceARN": {},
    "DeviceType": {}
  }'
```

`POST /#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType`

Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you select a medium changer type for the tape gateway. This operation enables you to select a different type of medium changer after a tape gateway is activated. This operation is only supported in the tape gateway type.

> Body parameter

```json
{
  "VTLDeviceARN": {},
  "DeviceType": {}
}
```

<h3 id="updatevtldevicetype-parameters">Parameters</h3>

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
|body|body|[UpdateVTLDeviceTypeInput](#schemaupdatevtldevicetypeinput)|true|none|
|» VTLDeviceARN|body|object|true|none|
|» DeviceType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|StorageGateway_20130630.UpdateVTLDeviceType|

> Example responses

> 200 Response

```json
{
  "VTLDeviceARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_MEDIACHANGER_00001"
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

<h3 id="updatevtldevicetype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateVTLDeviceTypeOutput](#schemaupdatevtldevicetypeoutput)|
|480|480|InvalidGatewayRequestException|[InvalidGatewayRequestException](#schemainvalidgatewayrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_ActivateGatewayOutput">ActivateGatewayOutput</h2>
<!-- backwards compatibility -->
<a id="schemaactivategatewayoutput"></a>
<a id="schema_ActivateGatewayOutput"></a>
<a id="tocSactivategatewayoutput"></a>
<a id="tocsactivategatewayoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-11A2222B"
}
```

<p>Storage Gateway returns the Amazon Resource Name (ARN) of the activated gateway. It is a string made of information such as your account, gateway name, and Amazon Web Services Region. This ARN is used to reference the gateway in other API operations as well as resource-based authorization.</p> <note> <p>For gateways activated prior to September 02, 2015, the gateway ARN contains the gateway name rather than the gateway ID. Changing the name of the gateway has no effect on the gateway ARN.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_ActivateGatewayInput">ActivateGatewayInput</h2>
<!-- backwards compatibility -->
<a id="schemaactivategatewayinput"></a>
<a id="schema_ActivateGatewayInput"></a>
<a id="tocSactivategatewayinput"></a>
<a id="tocsactivategatewayinput"></a>

```json
{
  "ActivationKey": {},
  "GatewayName": {},
  "GatewayTimezone": {},
  "GatewayRegion": {},
  "GatewayType": {},
  "TapeDriveType": {},
  "MediumChangerType": {},
  "Tags": {}
}
```

<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>ActivateGatewayInput$ActivationKey</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayName</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayRegion</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayTimezone</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$MediumChangerType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$TapeDriveType</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivationKey|object|true|none|none|
|GatewayName|object|true|none|none|
|GatewayTimezone|object|true|none|none|
|GatewayRegion|object|true|none|none|
|GatewayType|object|false|none|none|
|TapeDriveType|object|false|none|none|
|MediumChangerType|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_InvalidGatewayRequestException">InvalidGatewayRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidgatewayrequestexception"></a>
<a id="schema_InvalidGatewayRequestException"></a>
<a id="tocSinvalidgatewayrequestexception"></a>
<a id="tocsinvalidgatewayrequestexception"></a>

```json
null
```

<h2 id="tocS_InternalServerError">InternalServerError</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererror"></a>
<a id="schema_InternalServerError"></a>
<a id="tocSinternalservererror"></a>
<a id="tocsinternalservererror"></a>

```json
null
```

<h2 id="tocS_AddCacheOutput">AddCacheOutput</h2>
<!-- backwards compatibility -->
<a id="schemaaddcacheoutput"></a>
<a id="schema_AddCacheOutput"></a>
<a id="tocSaddcacheoutput"></a>
<a id="tocsaddcacheoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_AddCacheInput">AddCacheInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddcacheinput"></a>
<a id="schema_AddCacheInput"></a>
<a id="tocSaddcacheinput"></a>
<a id="tocsaddcacheinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "DiskIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|DiskIds|object|true|none|none|

<h2 id="tocS_AddTagsToResourceOutput">AddTagsToResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagstoresourceoutput"></a>
<a id="schema_AddTagsToResourceOutput"></a>
<a id="tocSaddtagstoresourceoutput"></a>
<a id="tocsaddtagstoresourceoutput"></a>

```json
{
  "ResourceARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-11A2222B"
}
```

AddTagsToResourceOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|false|none|none|

<h2 id="tocS_AddTagsToResourceInput">AddTagsToResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagstoresourceinput"></a>
<a id="schema_AddTagsToResourceInput"></a>
<a id="tocSaddtagstoresourceinput"></a>
<a id="tocsaddtagstoresourceinput"></a>

```json
{
  "ResourceARN": {},
  "Tags": {}
}
```

AddTagsToResourceInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_AddUploadBufferOutput">AddUploadBufferOutput</h2>
<!-- backwards compatibility -->
<a id="schemaadduploadbufferoutput"></a>
<a id="schema_AddUploadBufferOutput"></a>
<a id="tocSadduploadbufferoutput"></a>
<a id="tocsadduploadbufferoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_AddUploadBufferInput">AddUploadBufferInput</h2>
<!-- backwards compatibility -->
<a id="schemaadduploadbufferinput"></a>
<a id="schema_AddUploadBufferInput"></a>
<a id="tocSadduploadbufferinput"></a>
<a id="tocsadduploadbufferinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "DiskIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|DiskIds|object|true|none|none|

<h2 id="tocS_AddWorkingStorageOutput">AddWorkingStorageOutput</h2>
<!-- backwards compatibility -->
<a id="schemaaddworkingstorageoutput"></a>
<a id="schema_AddWorkingStorageOutput"></a>
<a id="tocSaddworkingstorageoutput"></a>
<a id="tocsaddworkingstorageoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
}
```

A JSON object containing the Amazon Resource Name (ARN) of the gateway for which working storage was configured.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_AddWorkingStorageInput">AddWorkingStorageInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddworkingstorageinput"></a>
<a id="schema_AddWorkingStorageInput"></a>
<a id="tocSaddworkingstorageinput"></a>
<a id="tocsaddworkingstorageinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "DiskIds": {}
}
```

<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>AddWorkingStorageInput$DiskIds</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|DiskIds|object|true|none|none|

<h2 id="tocS_AssignTapePoolOutput">AssignTapePoolOutput</h2>
<!-- backwards compatibility -->
<a id="schemaassigntapepooloutput"></a>
<a id="schema_AssignTapePoolOutput"></a>
<a id="tocSassigntapepooloutput"></a>
<a id="tocsassigntapepooloutput"></a>

```json
{
  "TapeARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARN|object|false|none|none|

<h2 id="tocS_AssignTapePoolInput">AssignTapePoolInput</h2>
<!-- backwards compatibility -->
<a id="schemaassigntapepoolinput"></a>
<a id="schema_AssignTapePoolInput"></a>
<a id="tocSassigntapepoolinput"></a>
<a id="tocsassigntapepoolinput"></a>

```json
{
  "TapeARN": {},
  "PoolId": {},
  "BypassGovernanceRetention": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARN|object|true|none|none|
|PoolId|object|true|none|none|
|BypassGovernanceRetention|object|false|none|none|

<h2 id="tocS_AssociateFileSystemOutput">AssociateFileSystemOutput</h2>
<!-- backwards compatibility -->
<a id="schemaassociatefilesystemoutput"></a>
<a id="schema_AssociateFileSystemOutput"></a>
<a id="tocSassociatefilesystemoutput"></a>
<a id="tocsassociatefilesystemoutput"></a>

```json
{
  "FileSystemAssociationARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemAssociationARN|object|false|none|none|

<h2 id="tocS_AssociateFileSystemInput">AssociateFileSystemInput</h2>
<!-- backwards compatibility -->
<a id="schemaassociatefilesysteminput"></a>
<a id="schema_AssociateFileSystemInput"></a>
<a id="tocSassociatefilesysteminput"></a>
<a id="tocsassociatefilesysteminput"></a>

```json
{
  "UserName": {},
  "Password": {},
  "ClientToken": {},
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "LocationARN": {},
  "Tags": {},
  "AuditDestinationARN": {},
  "CacheAttributes": {
    "CacheStaleTimeoutInSeconds": {}
  },
  "EndpointNetworkConfiguration": {
    "IpAddresses": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserName|object|true|none|none|
|Password|object|true|none|none|
|ClientToken|object|true|none|none|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|LocationARN|object|true|none|none|
|Tags|object|false|none|none|
|AuditDestinationARN|object|false|none|none|
|CacheAttributes|[CacheAttributes](#schemacacheattributes)|false|none|The refresh cache information for the file share or FSx file systems.|
|EndpointNetworkConfiguration|object|false|none|none|

<h2 id="tocS_AttachVolumeOutput">AttachVolumeOutput</h2>
<!-- backwards compatibility -->
<a id="schemaattachvolumeoutput"></a>
<a id="schema_AttachVolumeOutput"></a>
<a id="tocSattachvolumeoutput"></a>
<a id="tocsattachvolumeoutput"></a>

```json
{
  "VolumeARN": {},
  "TargetARN": {}
}
```

AttachVolumeOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|false|none|none|
|TargetARN|object|false|none|none|

<h2 id="tocS_AttachVolumeInput">AttachVolumeInput</h2>
<!-- backwards compatibility -->
<a id="schemaattachvolumeinput"></a>
<a id="schema_AttachVolumeInput"></a>
<a id="tocSattachvolumeinput"></a>
<a id="tocsattachvolumeinput"></a>

```json
{
  "GatewayARN": {},
  "TargetName": {},
  "VolumeARN": {},
  "NetworkInterfaceId": {},
  "DiskId": {}
}
```

AttachVolumeInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|object|true|none|none|
|TargetName|object|false|none|none|
|VolumeARN|object|true|none|none|
|NetworkInterfaceId|object|true|none|none|
|DiskId|object|false|none|none|

<h2 id="tocS_CancelArchivalOutput">CancelArchivalOutput</h2>
<!-- backwards compatibility -->
<a id="schemacancelarchivaloutput"></a>
<a id="schema_CancelArchivalOutput"></a>
<a id="tocScancelarchivaloutput"></a>
<a id="tocscancelarchivaloutput"></a>

```json
{
  "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/AMZN01A2A4"
}
```

CancelArchivalOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARN|object|false|none|none|

<h2 id="tocS_CancelArchivalInput">CancelArchivalInput</h2>
<!-- backwards compatibility -->
<a id="schemacancelarchivalinput"></a>
<a id="schema_CancelArchivalInput"></a>
<a id="tocScancelarchivalinput"></a>
<a id="tocscancelarchivalinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "TapeARN": {}
}
```

CancelArchivalInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|TapeARN|object|true|none|none|

<h2 id="tocS_CancelRetrievalOutput">CancelRetrievalOutput</h2>
<!-- backwards compatibility -->
<a id="schemacancelretrievaloutput"></a>
<a id="schema_CancelRetrievalOutput"></a>
<a id="tocScancelretrievaloutput"></a>
<a id="tocscancelretrievaloutput"></a>

```json
{
  "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/AMZN01A2A4"
}
```

CancelRetrievalOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARN|object|false|none|none|

<h2 id="tocS_CancelRetrievalInput">CancelRetrievalInput</h2>
<!-- backwards compatibility -->
<a id="schemacancelretrievalinput"></a>
<a id="schema_CancelRetrievalInput"></a>
<a id="tocScancelretrievalinput"></a>
<a id="tocscancelretrievalinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "TapeARN": {}
}
```

CancelRetrievalInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|TapeARN|object|true|none|none|

<h2 id="tocS_CreateCachediSCSIVolumeOutput">CreateCachediSCSIVolumeOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatecachediscsivolumeoutput"></a>
<a id="schema_CreateCachediSCSIVolumeOutput"></a>
<a id="tocScreatecachediscsivolumeoutput"></a>
<a id="tocscreatecachediscsivolumeoutput"></a>

```json
{
  "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume",
  "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|false|none|none|
|TargetARN|object|false|none|none|

<h2 id="tocS_CreateCachediSCSIVolumeInput">CreateCachediSCSIVolumeInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatecachediscsivolumeinput"></a>
<a id="schema_CreateCachediSCSIVolumeInput"></a>
<a id="tocScreatecachediscsivolumeinput"></a>
<a id="tocscreatecachediscsivolumeinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "VolumeSizeInBytes": {},
  "SnapshotId": {},
  "TargetName": {},
  "SourceVolumeARN": {},
  "NetworkInterfaceId": {},
  "ClientToken": {},
  "KMSEncrypted": {},
  "KMSKey": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|VolumeSizeInBytes|object|true|none|none|
|SnapshotId|object|false|none|none|
|TargetName|object|true|none|none|
|SourceVolumeARN|object|false|none|none|
|NetworkInterfaceId|object|true|none|none|
|ClientToken|object|true|none|none|
|KMSEncrypted|object|false|none|none|
|KMSKey|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateNFSFileShareOutput">CreateNFSFileShareOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatenfsfileshareoutput"></a>
<a id="schema_CreateNFSFileShareOutput"></a>
<a id="tocScreatenfsfileshareoutput"></a>
<a id="tocscreatenfsfileshareoutput"></a>

```json
{
  "FileShareARN": {}
}
```

CreateNFSFileShareOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileShareARN|object|false|none|none|

<h2 id="tocS_CreateNFSFileShareInput">CreateNFSFileShareInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatenfsfileshareinput"></a>
<a id="schema_CreateNFSFileShareInput"></a>
<a id="tocScreatenfsfileshareinput"></a>
<a id="tocscreatenfsfileshareinput"></a>

```json
{
  "ClientToken": {},
  "NFSFileShareDefaults": {
    "FileMode": {},
    "DirectoryMode": {},
    "GroupId": {},
    "OwnerId": {}
  },
  "GatewayARN": {},
  "KMSEncrypted": {},
  "KMSKey": {},
  "Role": {},
  "LocationARN": {},
  "DefaultStorageClass": {},
  "ObjectACL": {},
  "ClientList": {},
  "Squash": {},
  "ReadOnly": {},
  "GuessMIMETypeEnabled": {},
  "RequesterPays": {},
  "Tags": {},
  "FileShareName": {},
  "CacheAttributes": {
    "CacheStaleTimeoutInSeconds": {}
  },
  "NotificationPolicy": {},
  "VPCEndpointDNSName": {},
  "BucketRegion": {},
  "AuditDestinationARN": {}
}
```

CreateNFSFileShareInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|true|none|none|
|NFSFileShareDefaults|object|false|none|none|
|GatewayARN|object|true|none|none|
|KMSEncrypted|object|false|none|none|
|KMSKey|object|false|none|none|
|Role|object|true|none|none|
|LocationARN|object|true|none|none|
|DefaultStorageClass|object|false|none|none|
|ObjectACL|object|false|none|none|
|ClientList|object|false|none|none|
|Squash|object|false|none|none|
|ReadOnly|object|false|none|none|
|GuessMIMETypeEnabled|object|false|none|none|
|RequesterPays|object|false|none|none|
|Tags|object|false|none|none|
|FileShareName|object|false|none|none|
|CacheAttributes|object|false|none|none|
|NotificationPolicy|object|false|none|none|
|VPCEndpointDNSName|object|false|none|none|
|BucketRegion|object|false|none|none|
|AuditDestinationARN|object|false|none|none|

<h2 id="tocS_CreateSMBFileShareOutput">CreateSMBFileShareOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatesmbfileshareoutput"></a>
<a id="schema_CreateSMBFileShareOutput"></a>
<a id="tocScreatesmbfileshareoutput"></a>
<a id="tocscreatesmbfileshareoutput"></a>

```json
{
  "FileShareARN": {}
}
```

CreateSMBFileShareOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileShareARN|object|false|none|none|

<h2 id="tocS_CreateSMBFileShareInput">CreateSMBFileShareInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatesmbfileshareinput"></a>
<a id="schema_CreateSMBFileShareInput"></a>
<a id="tocScreatesmbfileshareinput"></a>
<a id="tocscreatesmbfileshareinput"></a>

```json
{
  "ClientToken": {},
  "GatewayARN": {},
  "KMSEncrypted": {},
  "KMSKey": {},
  "Role": {},
  "LocationARN": {},
  "DefaultStorageClass": {},
  "ObjectACL": {},
  "ReadOnly": {},
  "GuessMIMETypeEnabled": {},
  "RequesterPays": {},
  "SMBACLEnabled": {},
  "AccessBasedEnumeration": {},
  "AdminUserList": {},
  "ValidUserList": {},
  "InvalidUserList": {},
  "AuditDestinationARN": {},
  "Authentication": {},
  "CaseSensitivity": {},
  "Tags": {},
  "FileShareName": {},
  "CacheAttributes": {
    "CacheStaleTimeoutInSeconds": {}
  },
  "NotificationPolicy": {},
  "VPCEndpointDNSName": {},
  "BucketRegion": {},
  "OplocksEnabled": {}
}
```

CreateSMBFileShareInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|true|none|none|
|GatewayARN|object|true|none|none|
|KMSEncrypted|object|false|none|none|
|KMSKey|object|false|none|none|
|Role|object|true|none|none|
|LocationARN|object|true|none|none|
|DefaultStorageClass|object|false|none|none|
|ObjectACL|object|false|none|none|
|ReadOnly|object|false|none|none|
|GuessMIMETypeEnabled|object|false|none|none|
|RequesterPays|object|false|none|none|
|SMBACLEnabled|object|false|none|none|
|AccessBasedEnumeration|object|false|none|none|
|AdminUserList|object|false|none|none|
|ValidUserList|object|false|none|none|
|InvalidUserList|object|false|none|none|
|AuditDestinationARN|object|false|none|none|
|Authentication|object|false|none|none|
|CaseSensitivity|object|false|none|none|
|Tags|object|false|none|none|
|FileShareName|object|false|none|none|
|CacheAttributes|object|false|none|none|
|NotificationPolicy|object|false|none|none|
|VPCEndpointDNSName|object|false|none|none|
|BucketRegion|object|false|none|none|
|OplocksEnabled|object|false|none|none|

<h2 id="tocS_CreateSnapshotOutput">CreateSnapshotOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatesnapshotoutput"></a>
<a id="schema_CreateSnapshotOutput"></a>
<a id="tocScreatesnapshotoutput"></a>
<a id="tocscreatesnapshotoutput"></a>

```json
{
  "SnapshotId": "snap-78e22663",
  "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
}
```

A JSON object containing the following fields:

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|false|none|none|
|SnapshotId|object|false|none|none|

<h2 id="tocS_CreateSnapshotInput">CreateSnapshotInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatesnapshotinput"></a>
<a id="schema_CreateSnapshotInput"></a>
<a id="tocScreatesnapshotinput"></a>
<a id="tocscreatesnapshotinput"></a>

```json
{
  "VolumeARN": {},
  "SnapshotDescription": {},
  "Tags": {}
}
```

<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateSnapshotInput$SnapshotDescription</a> </p> </li> <li> <p> <a>CreateSnapshotInput$VolumeARN</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|true|none|none|
|SnapshotDescription|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ServiceUnavailableError">ServiceUnavailableError</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableerror"></a>
<a id="schema_ServiceUnavailableError"></a>
<a id="tocSserviceunavailableerror"></a>
<a id="tocsserviceunavailableerror"></a>

```json
null
```

<h2 id="tocS_CreateSnapshotFromVolumeRecoveryPointOutput">CreateSnapshotFromVolumeRecoveryPointOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatesnapshotfromvolumerecoverypointoutput"></a>
<a id="schema_CreateSnapshotFromVolumeRecoveryPointOutput"></a>
<a id="tocScreatesnapshotfromvolumerecoverypointoutput"></a>
<a id="tocscreatesnapshotfromvolumerecoverypointoutput"></a>

```json
{
  "SnapshotId": "snap-78e22663",
  "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
  "VolumeRecoveryPointTime": "2017-06-30T10:10:10.000Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotId|object|false|none|none|
|VolumeARN|object|false|none|none|
|VolumeRecoveryPointTime|object|false|none|none|

<h2 id="tocS_CreateSnapshotFromVolumeRecoveryPointInput">CreateSnapshotFromVolumeRecoveryPointInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatesnapshotfromvolumerecoverypointinput"></a>
<a id="schema_CreateSnapshotFromVolumeRecoveryPointInput"></a>
<a id="tocScreatesnapshotfromvolumerecoverypointinput"></a>
<a id="tocscreatesnapshotfromvolumerecoverypointinput"></a>

```json
{
  "VolumeARN": {},
  "SnapshotDescription": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|true|none|none|
|SnapshotDescription|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateStorediSCSIVolumeOutput">CreateStorediSCSIVolumeOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatestorediscsivolumeoutput"></a>
<a id="schema_CreateStorediSCSIVolumeOutput"></a>
<a id="tocScreatestorediscsivolumeoutput"></a>
<a id="tocscreatestorediscsivolumeoutput"></a>

```json
{
  "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume",
  "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
  "VolumeSizeInBytes": 1099511627776
}
```

A JSON object containing the following fields:

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|false|none|none|
|VolumeSizeInBytes|object|false|none|none|
|TargetARN|object|false|none|none|

<h2 id="tocS_CreateStorediSCSIVolumeInput">CreateStorediSCSIVolumeInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatestorediscsivolumeinput"></a>
<a id="schema_CreateStorediSCSIVolumeInput"></a>
<a id="tocScreatestorediscsivolumeinput"></a>
<a id="tocscreatestorediscsivolumeinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "DiskId": {},
  "SnapshotId": {},
  "PreserveExistingData": {},
  "TargetName": {},
  "NetworkInterfaceId": {},
  "KMSEncrypted": {},
  "KMSKey": {},
  "Tags": {}
}
```

<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateStorediSCSIVolumeInput$DiskId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$NetworkInterfaceId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$PreserveExistingData</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$SnapshotId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$TargetName</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|DiskId|object|true|none|none|
|SnapshotId|object|false|none|none|
|PreserveExistingData|object|true|none|none|
|TargetName|object|true|none|none|
|NetworkInterfaceId|object|true|none|none|
|KMSEncrypted|object|false|none|none|
|KMSKey|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateTapePoolOutput">CreateTapePoolOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatetapepooloutput"></a>
<a id="schema_CreateTapePoolOutput"></a>
<a id="tocScreatetapepooloutput"></a>
<a id="tocscreatetapepooloutput"></a>

```json
{
  "PoolARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PoolARN|object|false|none|none|

<h2 id="tocS_CreateTapePoolInput">CreateTapePoolInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatetapepoolinput"></a>
<a id="schema_CreateTapePoolInput"></a>
<a id="tocScreatetapepoolinput"></a>
<a id="tocscreatetapepoolinput"></a>

```json
{
  "PoolName": {},
  "StorageClass": {},
  "RetentionLockType": {},
  "RetentionLockTimeInDays": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PoolName|object|true|none|none|
|StorageClass|object|true|none|none|
|RetentionLockType|object|false|none|none|
|RetentionLockTimeInDays|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateTapeWithBarcodeOutput">CreateTapeWithBarcodeOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatetapewithbarcodeoutput"></a>
<a id="schema_CreateTapeWithBarcodeOutput"></a>
<a id="tocScreatetapewithbarcodeoutput"></a>
<a id="tocscreatetapewithbarcodeoutput"></a>

```json
{
  "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST12345"
}
```

CreateTapeOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARN|object|false|none|none|

<h2 id="tocS_CreateTapeWithBarcodeInput">CreateTapeWithBarcodeInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatetapewithbarcodeinput"></a>
<a id="schema_CreateTapeWithBarcodeInput"></a>
<a id="tocScreatetapewithbarcodeinput"></a>
<a id="tocscreatetapewithbarcodeinput"></a>

```json
{
  "GatewayARN": {},
  "TapeSizeInBytes": {},
  "TapeBarcode": {},
  "KMSEncrypted": {},
  "KMSKey": {},
  "PoolId": {},
  "Worm": {},
  "Tags": {}
}
```

CreateTapeWithBarcodeInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|object|true|none|none|
|TapeSizeInBytes|object|true|none|none|
|TapeBarcode|object|true|none|none|
|KMSEncrypted|object|false|none|none|
|KMSKey|object|false|none|none|
|PoolId|object|false|none|none|
|Worm|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateTapesOutput">CreateTapesOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatetapesoutput"></a>
<a id="schema_CreateTapesOutput"></a>
<a id="tocScreatetapesoutput"></a>
<a id="tocscreatetapesoutput"></a>

```json
{
  "TapeARNs": [
    "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST38A29D",
    "arn:aws:storagegateway:us-east-1:204469490176:tape/TEST3AA29F",
    "arn:aws:storagegateway:us-east-1:204469490176:tape/TEST3BA29E"
  ]
}
```

CreateTapeOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARNs|object|false|none|none|

<h2 id="tocS_CreateTapesInput">CreateTapesInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatetapesinput"></a>
<a id="schema_CreateTapesInput"></a>
<a id="tocScreatetapesinput"></a>
<a id="tocscreatetapesinput"></a>

```json
{
  "GatewayARN": {},
  "TapeSizeInBytes": {},
  "ClientToken": {},
  "NumTapesToCreate": {},
  "TapeBarcodePrefix": {},
  "KMSEncrypted": {},
  "KMSKey": {},
  "PoolId": {},
  "Worm": {},
  "Tags": {}
}
```

CreateTapesInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|object|true|none|none|
|TapeSizeInBytes|object|true|none|none|
|ClientToken|object|true|none|none|
|NumTapesToCreate|object|true|none|none|
|TapeBarcodePrefix|object|true|none|none|
|KMSEncrypted|object|false|none|none|
|KMSKey|object|false|none|none|
|PoolId|object|false|none|none|
|Worm|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DeleteAutomaticTapeCreationPolicyOutput">DeleteAutomaticTapeCreationPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteautomatictapecreationpolicyoutput"></a>
<a id="schema_DeleteAutomaticTapeCreationPolicyOutput"></a>
<a id="tocSdeleteautomatictapecreationpolicyoutput"></a>
<a id="tocsdeleteautomatictapecreationpolicyoutput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_DeleteAutomaticTapeCreationPolicyInput">DeleteAutomaticTapeCreationPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteautomatictapecreationpolicyinput"></a>
<a id="schema_DeleteAutomaticTapeCreationPolicyInput"></a>
<a id="tocSdeleteautomatictapecreationpolicyinput"></a>
<a id="tocsdeleteautomatictapecreationpolicyinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_DeleteBandwidthRateLimitOutput">DeleteBandwidthRateLimitOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletebandwidthratelimitoutput"></a>
<a id="schema_DeleteBandwidthRateLimitOutput"></a>
<a id="tocSdeletebandwidthratelimitoutput"></a>
<a id="tocsdeletebandwidthratelimitoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
}
```

A JSON object containing the Amazon Resource Name (ARN) of the gateway whose bandwidth rate information was deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_DeleteBandwidthRateLimitInput">DeleteBandwidthRateLimitInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletebandwidthratelimitinput"></a>
<a id="schema_DeleteBandwidthRateLimitInput"></a>
<a id="tocSdeletebandwidthratelimitinput"></a>
<a id="tocsdeletebandwidthratelimitinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "BandwidthType": {}
}
```

<p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>DeleteBandwidthRateLimitInput$BandwidthType</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|BandwidthType|object|true|none|none|

<h2 id="tocS_DeleteChapCredentialsOutput">DeleteChapCredentialsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletechapcredentialsoutput"></a>
<a id="schema_DeleteChapCredentialsOutput"></a>
<a id="tocSdeletechapcredentialsoutput"></a>
<a id="tocsdeletechapcredentialsoutput"></a>

```json
{
  "InitiatorName": "iqn.1991-05.com.microsoft:computername.domain.example.com",
  "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
}
```

A JSON object containing the following fields:

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetARN|object|false|none|none|
|InitiatorName|object|false|none|none|

<h2 id="tocS_DeleteChapCredentialsInput">DeleteChapCredentialsInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletechapcredentialsinput"></a>
<a id="schema_DeleteChapCredentialsInput"></a>
<a id="tocSdeletechapcredentialsinput"></a>
<a id="tocsdeletechapcredentialsinput"></a>

```json
{
  "TargetARN": {},
  "InitiatorName": {}
}
```

<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>DeleteChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>DeleteChapCredentialsInput$TargetARN</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetARN|object|true|none|none|
|InitiatorName|object|true|none|none|

<h2 id="tocS_DeleteFileShareOutput">DeleteFileShareOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletefileshareoutput"></a>
<a id="schema_DeleteFileShareOutput"></a>
<a id="tocSdeletefileshareoutput"></a>
<a id="tocsdeletefileshareoutput"></a>

```json
{
  "FileShareARN": {}
}
```

DeleteFileShareOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileShareARN|object|false|none|none|

<h2 id="tocS_DeleteFileShareInput">DeleteFileShareInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletefileshareinput"></a>
<a id="schema_DeleteFileShareInput"></a>
<a id="tocSdeletefileshareinput"></a>
<a id="tocsdeletefileshareinput"></a>

```json
{
  "FileShareARN": {},
  "ForceDelete": {}
}
```

DeleteFileShareInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileShareARN|object|true|none|none|
|ForceDelete|object|false|none|none|

<h2 id="tocS_DeleteGatewayOutput">DeleteGatewayOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletegatewayoutput"></a>
<a id="schema_DeleteGatewayOutput"></a>
<a id="tocSdeletegatewayoutput"></a>
<a id="tocsdeletegatewayoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
}
```

A JSON object containing the ID of the deleted gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_DeleteGatewayInput">DeleteGatewayInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletegatewayinput"></a>
<a id="schema_DeleteGatewayInput"></a>
<a id="tocSdeletegatewayinput"></a>
<a id="tocsdeletegatewayinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

A JSON object containing the ID of the gateway to delete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_DeleteSnapshotScheduleOutput">DeleteSnapshotScheduleOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletesnapshotscheduleoutput"></a>
<a id="schema_DeleteSnapshotScheduleOutput"></a>
<a id="tocSdeletesnapshotscheduleoutput"></a>
<a id="tocsdeletesnapshotscheduleoutput"></a>

```json
{
  "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|false|none|none|

<h2 id="tocS_DeleteSnapshotScheduleInput">DeleteSnapshotScheduleInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletesnapshotscheduleinput"></a>
<a id="schema_DeleteSnapshotScheduleInput"></a>
<a id="tocSdeletesnapshotscheduleinput"></a>
<a id="tocsdeletesnapshotscheduleinput"></a>

```json
{
  "VolumeARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|true|none|none|

<h2 id="tocS_DeleteTapeOutput">DeleteTapeOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetapeoutput"></a>
<a id="schema_DeleteTapeOutput"></a>
<a id="tocSdeletetapeoutput"></a>
<a id="tocsdeletetapeoutput"></a>

```json
{
  "TapeARN": "arn:aws:storagegateway:us-east-1:204469490176:tape/TEST05A2A0"
}
```

DeleteTapeOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARN|object|false|none|none|

<h2 id="tocS_DeleteTapeInput">DeleteTapeInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetapeinput"></a>
<a id="schema_DeleteTapeInput"></a>
<a id="tocSdeletetapeinput"></a>
<a id="tocsdeletetapeinput"></a>

```json
{
  "GatewayARN": {},
  "TapeARN": {},
  "BypassGovernanceRetention": {}
}
```

DeleteTapeInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|object|true|none|none|
|TapeARN|object|true|none|none|
|BypassGovernanceRetention|object|false|none|none|

<h2 id="tocS_DeleteTapeArchiveOutput">DeleteTapeArchiveOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetapearchiveoutput"></a>
<a id="schema_DeleteTapeArchiveOutput"></a>
<a id="tocSdeletetapearchiveoutput"></a>
<a id="tocsdeletetapearchiveoutput"></a>

```json
{
  "TapeARN": "arn:aws:storagegateway:us-east-1:204469490176:tape/TEST05A2A0"
}
```

DeleteTapeArchiveOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARN|object|false|none|none|

<h2 id="tocS_DeleteTapeArchiveInput">DeleteTapeArchiveInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetapearchiveinput"></a>
<a id="schema_DeleteTapeArchiveInput"></a>
<a id="tocSdeletetapearchiveinput"></a>
<a id="tocsdeletetapearchiveinput"></a>

```json
{
  "TapeARN": {},
  "BypassGovernanceRetention": {}
}
```

DeleteTapeArchiveInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARN|object|true|none|none|
|BypassGovernanceRetention|object|false|none|none|

<h2 id="tocS_DeleteTapePoolOutput">DeleteTapePoolOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetapepooloutput"></a>
<a id="schema_DeleteTapePoolOutput"></a>
<a id="tocSdeletetapepooloutput"></a>
<a id="tocsdeletetapepooloutput"></a>

```json
{
  "PoolARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PoolARN|object|false|none|none|

<h2 id="tocS_DeleteTapePoolInput">DeleteTapePoolInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetapepoolinput"></a>
<a id="schema_DeleteTapePoolInput"></a>
<a id="tocSdeletetapepoolinput"></a>
<a id="tocsdeletetapepoolinput"></a>

```json
{
  "PoolARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PoolARN|object|true|none|none|

<h2 id="tocS_DeleteVolumeOutput">DeleteVolumeOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletevolumeoutput"></a>
<a id="schema_DeleteVolumeOutput"></a>
<a id="tocSdeletevolumeoutput"></a>
<a id="tocsdeletevolumeoutput"></a>

```json
{
  "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
}
```

A JSON object containing the Amazon Resource Name (ARN) of the storage volume that was deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|false|none|none|

<h2 id="tocS_DeleteVolumeInput">DeleteVolumeInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletevolumeinput"></a>
<a id="schema_DeleteVolumeInput"></a>
<a id="tocSdeletevolumeinput"></a>
<a id="tocsdeletevolumeinput"></a>

```json
{
  "VolumeARN": {}
}
```

A JSON object containing the <a>DeleteVolumeInput$VolumeARN</a> to delete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|true|none|none|

<h2 id="tocS_DescribeAvailabilityMonitorTestOutput">DescribeAvailabilityMonitorTestOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeavailabilitymonitortestoutput"></a>
<a id="schema_DescribeAvailabilityMonitorTestOutput"></a>
<a id="tocSdescribeavailabilitymonitortestoutput"></a>
<a id="tocsdescribeavailabilitymonitortestoutput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "Status": {},
  "StartTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|Status|object|false|none|none|
|StartTime|object|false|none|none|

<h2 id="tocS_DescribeAvailabilityMonitorTestInput">DescribeAvailabilityMonitorTestInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeavailabilitymonitortestinput"></a>
<a id="schema_DescribeAvailabilityMonitorTestInput"></a>
<a id="tocSdescribeavailabilitymonitortestinput"></a>
<a id="tocsdescribeavailabilitymonitortestinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_DescribeBandwidthRateLimitOutput">DescribeBandwidthRateLimitOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribebandwidthratelimitoutput"></a>
<a id="schema_DescribeBandwidthRateLimitOutput"></a>
<a id="tocSdescribebandwidthratelimitoutput"></a>
<a id="tocsdescribebandwidthratelimitoutput"></a>

```json
{
  "AverageDownloadRateLimitInBitsPerSec": 204800,
  "AverageUploadRateLimitInBitsPerSec": 102400,
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
}
```

A JSON object containing the following fields:

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|AverageUploadRateLimitInBitsPerSec|object|false|none|none|
|AverageDownloadRateLimitInBitsPerSec|object|false|none|none|

<h2 id="tocS_DescribeBandwidthRateLimitInput">DescribeBandwidthRateLimitInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribebandwidthratelimitinput"></a>
<a id="schema_DescribeBandwidthRateLimitInput"></a>
<a id="tocSdescribebandwidthratelimitinput"></a>
<a id="tocsdescribebandwidthratelimitinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

A JSON object containing the Amazon Resource Name (ARN) of the gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_DescribeBandwidthRateLimitScheduleOutput">DescribeBandwidthRateLimitScheduleOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribebandwidthratelimitscheduleoutput"></a>
<a id="schema_DescribeBandwidthRateLimitScheduleOutput"></a>
<a id="tocSdescribebandwidthratelimitscheduleoutput"></a>
<a id="tocsdescribebandwidthratelimitscheduleoutput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "BandwidthRateLimitIntervals": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|BandwidthRateLimitIntervals|object|false|none|none|

<h2 id="tocS_DescribeBandwidthRateLimitScheduleInput">DescribeBandwidthRateLimitScheduleInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribebandwidthratelimitscheduleinput"></a>
<a id="schema_DescribeBandwidthRateLimitScheduleInput"></a>
<a id="tocSdescribebandwidthratelimitscheduleinput"></a>
<a id="tocsdescribebandwidthratelimitscheduleinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_DescribeCacheOutput">DescribeCacheOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribecacheoutput"></a>
<a id="schema_DescribeCacheOutput"></a>
<a id="tocSdescribecacheoutput"></a>
<a id="tocsdescribecacheoutput"></a>

```json
{
  "CacheAllocatedInBytes": 2199023255552,
  "CacheDirtyPercentage": 0.07,
  "CacheHitPercentage": 99.68,
  "CacheMissPercentage": 0.32,
  "CacheUsedPercentage": 0.07,
  "DiskIds": [
    "pci-0000:03:00.0-scsi-0:0:0:0",
    "pci-0000:04:00.0-scsi-0:1:0:0"
  ],
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|DiskIds|object|false|none|none|
|CacheAllocatedInBytes|object|false|none|none|
|CacheUsedPercentage|object|false|none|none|
|CacheDirtyPercentage|object|false|none|none|
|CacheHitPercentage|object|false|none|none|
|CacheMissPercentage|object|false|none|none|

<h2 id="tocS_DescribeCacheInput">DescribeCacheInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribecacheinput"></a>
<a id="schema_DescribeCacheInput"></a>
<a id="tocSdescribecacheinput"></a>
<a id="tocsdescribecacheinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_DescribeCachediSCSIVolumesOutput">DescribeCachediSCSIVolumesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribecachediscsivolumesoutput"></a>
<a id="schema_DescribeCachediSCSIVolumesOutput"></a>
<a id="tocSdescribecachediscsivolumesoutput"></a>
<a id="tocsdescribecachediscsivolumesoutput"></a>

```json
{
  "CachediSCSIVolumes": [
    {
      "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
      "VolumeId": "vol-1122AABB",
      "VolumeSizeInBytes": 1099511627776,
      "VolumeStatus": "AVAILABLE",
      "VolumeType": "CACHED iSCSI",
      "VolumeiSCSIAttributes": {
        "ChapEnabled": true,
        "LunNumber": 1,
        "NetworkInterfaceId": "10.243.43.207",
        "NetworkInterfacePort": 3260,
        "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
      }
    }
  ]
}
```

A JSON object containing the following fields:

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CachediSCSIVolumes|object|false|none|none|

<h2 id="tocS_DescribeCachediSCSIVolumesInput">DescribeCachediSCSIVolumesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribecachediscsivolumesinput"></a>
<a id="schema_DescribeCachediSCSIVolumesInput"></a>
<a id="tocSdescribecachediscsivolumesinput"></a>
<a id="tocsdescribecachediscsivolumesinput"></a>

```json
{
  "VolumeARNs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARNs|object|true|none|none|

<h2 id="tocS_DescribeChapCredentialsOutput">DescribeChapCredentialsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribechapcredentialsoutput"></a>
<a id="schema_DescribeChapCredentialsOutput"></a>
<a id="tocSdescribechapcredentialsoutput"></a>
<a id="tocsdescribechapcredentialsoutput"></a>

```json
{
  "ChapCredentials": [
    {
      "InitiatorName": "iqn.1991-05.com.microsoft:computername.domain.example.com",
      "SecretToAuthenticateInitiator": "111111111111",
      "SecretToAuthenticateTarget": "222222222222",
      "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
    }
  ]
}
```

A JSON object containing the following fields:

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChapCredentials|object|false|none|none|

<h2 id="tocS_DescribeChapCredentialsInput">DescribeChapCredentialsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribechapcredentialsinput"></a>
<a id="schema_DescribeChapCredentialsInput"></a>
<a id="tocSdescribechapcredentialsinput"></a>
<a id="tocsdescribechapcredentialsinput"></a>

```json
{
  "TargetARN": {}
}
```

A JSON object containing the Amazon Resource Name (ARN) of the iSCSI volume target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetARN|object|true|none|none|

<h2 id="tocS_DescribeFileSystemAssociationsOutput">DescribeFileSystemAssociationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribefilesystemassociationsoutput"></a>
<a id="schema_DescribeFileSystemAssociationsOutput"></a>
<a id="tocSdescribefilesystemassociationsoutput"></a>
<a id="tocsdescribefilesystemassociationsoutput"></a>

```json
{
  "FileSystemAssociationInfoList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemAssociationInfoList|object|false|none|none|

<h2 id="tocS_DescribeFileSystemAssociationsInput">DescribeFileSystemAssociationsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribefilesystemassociationsinput"></a>
<a id="schema_DescribeFileSystemAssociationsInput"></a>
<a id="tocSdescribefilesystemassociationsinput"></a>
<a id="tocsdescribefilesystemassociationsinput"></a>

```json
{
  "FileSystemAssociationARNList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemAssociationARNList|object|true|none|none|

<h2 id="tocS_DescribeGatewayInformationOutput">DescribeGatewayInformationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribegatewayinformationoutput"></a>
<a id="schema_DescribeGatewayInformationOutput"></a>
<a id="tocSdescribegatewayinformationoutput"></a>
<a id="tocsdescribegatewayinformationoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
  "GatewayId": "sgw-AABB1122",
  "GatewayName": "My_Gateway",
  "GatewayNetworkInterfaces": [
    {
      "Ipv4Address": "10.35.69.216"
    }
  ],
  "GatewayState": "STATE_RUNNING",
  "GatewayTimezone": "GMT-8:00",
  "GatewayType": "STORED",
  "LastSoftwareUpdate": "2016-01-02T16:00:00",
  "NextUpdateAvailabilityDate": "2017-01-02T16:00:00"
}
```

A JSON object containing the following fields:

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|GatewayId|object|false|none|none|
|GatewayName|object|false|none|none|
|GatewayTimezone|object|false|none|none|
|GatewayState|object|false|none|none|
|GatewayNetworkInterfaces|object|false|none|none|
|GatewayType|object|false|none|none|
|NextUpdateAvailabilityDate|object|false|none|none|
|LastSoftwareUpdate|object|false|none|none|
|Ec2InstanceId|object|false|none|none|
|Ec2InstanceRegion|object|false|none|none|
|Tags|object|false|none|none|
|VPCEndpoint|object|false|none|none|
|CloudWatchLogGroupARN|object|false|none|none|
|HostEnvironment|object|false|none|none|
|EndpointType|object|false|none|none|
|SoftwareUpdatesEndDate|object|false|none|none|
|DeprecationDate|object|false|none|none|
|GatewayCapacity|object|false|none|none|
|SupportedGatewayCapacities|object|false|none|none|
|HostEnvironmentId|object|false|none|none|

<h2 id="tocS_DescribeGatewayInformationInput">DescribeGatewayInformationInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribegatewayinformationinput"></a>
<a id="schema_DescribeGatewayInformationInput"></a>
<a id="tocSdescribegatewayinformationinput"></a>
<a id="tocsdescribegatewayinformationinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

A JSON object containing the ID of the gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_DescribeMaintenanceStartTimeOutput">DescribeMaintenanceStartTimeOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaintenancestarttimeoutput"></a>
<a id="schema_DescribeMaintenanceStartTimeOutput"></a>
<a id="tocSdescribemaintenancestarttimeoutput"></a>
<a id="tocsdescribemaintenancestarttimeoutput"></a>

```json
{
  "DayOfWeek": 2,
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
  "HourOfDay": 15,
  "MinuteOfHour": 35,
  "Timezone": "GMT+7:00"
}
```

<p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>DescribeMaintenanceStartTimeOutput$DayOfMonth</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$DayOfWeek</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$HourOfDay</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$MinuteOfHour</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$Timezone</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|HourOfDay|object|false|none|none|
|MinuteOfHour|object|false|none|none|
|DayOfWeek|object|false|none|none|
|DayOfMonth|object|false|none|none|
|Timezone|object|false|none|none|

<h2 id="tocS_DescribeMaintenanceStartTimeInput">DescribeMaintenanceStartTimeInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaintenancestarttimeinput"></a>
<a id="schema_DescribeMaintenanceStartTimeInput"></a>
<a id="tocSdescribemaintenancestarttimeinput"></a>
<a id="tocsdescribemaintenancestarttimeinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

A JSON object containing the Amazon Resource Name (ARN) of the gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_DescribeNFSFileSharesOutput">DescribeNFSFileSharesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribenfsfilesharesoutput"></a>
<a id="schema_DescribeNFSFileSharesOutput"></a>
<a id="tocSdescribenfsfilesharesoutput"></a>
<a id="tocsdescribenfsfilesharesoutput"></a>

```json
{
  "NFSFileShareInfoList": {}
}
```

DescribeNFSFileSharesOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NFSFileShareInfoList|object|false|none|none|

<h2 id="tocS_DescribeNFSFileSharesInput">DescribeNFSFileSharesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribenfsfilesharesinput"></a>
<a id="schema_DescribeNFSFileSharesInput"></a>
<a id="tocSdescribenfsfilesharesinput"></a>
<a id="tocsdescribenfsfilesharesinput"></a>

```json
{
  "FileShareARNList": {}
}
```

DescribeNFSFileSharesInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileShareARNList|object|true|none|none|

<h2 id="tocS_DescribeSMBFileSharesOutput">DescribeSMBFileSharesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribesmbfilesharesoutput"></a>
<a id="schema_DescribeSMBFileSharesOutput"></a>
<a id="tocSdescribesmbfilesharesoutput"></a>
<a id="tocsdescribesmbfilesharesoutput"></a>

```json
{
  "SMBFileShareInfoList": {}
}
```

DescribeSMBFileSharesOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SMBFileShareInfoList|object|false|none|none|

<h2 id="tocS_DescribeSMBFileSharesInput">DescribeSMBFileSharesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribesmbfilesharesinput"></a>
<a id="schema_DescribeSMBFileSharesInput"></a>
<a id="tocSdescribesmbfilesharesinput"></a>
<a id="tocsdescribesmbfilesharesinput"></a>

```json
{
  "FileShareARNList": {}
}
```

DescribeSMBFileSharesInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileShareARNList|object|true|none|none|

<h2 id="tocS_DescribeSMBSettingsOutput">DescribeSMBSettingsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribesmbsettingsoutput"></a>
<a id="schema_DescribeSMBSettingsOutput"></a>
<a id="tocSdescribesmbsettingsoutput"></a>
<a id="tocsdescribesmbsettingsoutput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "DomainName": {},
  "ActiveDirectoryStatus": {},
  "SMBGuestPasswordSet": {},
  "SMBSecurityStrategy": {},
  "FileSharesVisible": {},
  "SMBLocalGroups": {
    "GatewayAdmins": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|DomainName|object|false|none|none|
|ActiveDirectoryStatus|object|false|none|none|
|SMBGuestPasswordSet|object|false|none|none|
|SMBSecurityStrategy|object|false|none|none|
|FileSharesVisible|object|false|none|none|
|SMBLocalGroups|object|false|none|none|

<h2 id="tocS_DescribeSMBSettingsInput">DescribeSMBSettingsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribesmbsettingsinput"></a>
<a id="schema_DescribeSMBSettingsInput"></a>
<a id="tocSdescribesmbsettingsinput"></a>
<a id="tocsdescribesmbsettingsinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_DescribeSnapshotScheduleOutput">DescribeSnapshotScheduleOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribesnapshotscheduleoutput"></a>
<a id="schema_DescribeSnapshotScheduleOutput"></a>
<a id="tocSdescribesnapshotscheduleoutput"></a>
<a id="tocsdescribesnapshotscheduleoutput"></a>

```json
{
  "Description": "sgw-AABB1122:vol-AABB1122:Schedule",
  "RecurrenceInHours": 24,
  "StartAt": 6,
  "Timezone": "GMT+7:00",
  "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|false|none|none|
|StartAt|object|false|none|none|
|RecurrenceInHours|object|false|none|none|
|Description|object|false|none|none|
|Timezone|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeSnapshotScheduleInput">DescribeSnapshotScheduleInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribesnapshotscheduleinput"></a>
<a id="schema_DescribeSnapshotScheduleInput"></a>
<a id="tocSdescribesnapshotscheduleinput"></a>
<a id="tocsdescribesnapshotscheduleinput"></a>

```json
{
  "VolumeARN": {}
}
```

A JSON object containing the <a>DescribeSnapshotScheduleInput$VolumeARN</a> of the volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|true|none|none|

<h2 id="tocS_DescribeStorediSCSIVolumesOutput">DescribeStorediSCSIVolumesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestorediscsivolumesoutput"></a>
<a id="schema_DescribeStorediSCSIVolumesOutput"></a>
<a id="tocSdescribestorediscsivolumesoutput"></a>
<a id="tocsdescribestorediscsivolumesoutput"></a>

```json
{
  "StorediSCSIVolumes": [
    {
      "PreservedExistingData": false,
      "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
      "VolumeDiskId": "pci-0000:03:00.0-scsi-0:0:0:0",
      "VolumeId": "vol-1122AABB",
      "VolumeProgress": 23.7,
      "VolumeSizeInBytes": 1099511627776,
      "VolumeStatus": "BOOTSTRAPPING",
      "VolumeiSCSIAttributes": {
        "ChapEnabled": true,
        "NetworkInterfaceId": "10.243.43.207",
        "NetworkInterfacePort": 3260,
        "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorediSCSIVolumes|object|false|none|none|

<h2 id="tocS_DescribeStorediSCSIVolumesInput">DescribeStorediSCSIVolumesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestorediscsivolumesinput"></a>
<a id="schema_DescribeStorediSCSIVolumesInput"></a>
<a id="tocSdescribestorediscsivolumesinput"></a>
<a id="tocsdescribestorediscsivolumesinput"></a>

```json
{
  "VolumeARNs": {}
}
```

A JSON object containing a list of <a>DescribeStorediSCSIVolumesInput$VolumeARNs</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARNs|object|true|none|none|

<h2 id="tocS_DescribeTapeArchivesOutput">DescribeTapeArchivesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetapearchivesoutput"></a>
<a id="schema_DescribeTapeArchivesOutput"></a>
<a id="tocSdescribetapearchivesoutput"></a>
<a id="tocsdescribetapearchivesoutput"></a>

```json
{
  "Marker": "1",
  "TapeArchives": [
    {
      "CompletionTime": "2016-12-16T13:50Z",
      "TapeARN": "arn:aws:storagegateway:us-east-1:999999999:tape/AM08A1AD",
      "TapeBarcode": "AM08A1AD",
      "TapeSizeInBytes": 107374182400,
      "TapeStatus": "ARCHIVED"
    },
    {
      "CompletionTime": "2016-12-16T13:59Z",
      "TapeARN": "arn:aws:storagegateway:us-east-1:999999999:tape/AMZN01A2A4",
      "TapeBarcode": "AMZN01A2A4",
      "TapeSizeInBytes": 429496729600,
      "TapeStatus": "ARCHIVED"
    }
  ]
}
```

DescribeTapeArchivesOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeArchives|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeTapeArchivesInput">DescribeTapeArchivesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetapearchivesinput"></a>
<a id="schema_DescribeTapeArchivesInput"></a>
<a id="tocSdescribetapearchivesinput"></a>
<a id="tocsdescribetapearchivesinput"></a>

```json
{
  "TapeARNs": {},
  "Marker": {},
  "Limit": {}
}
```

DescribeTapeArchivesInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARNs|object|false|none|none|
|Marker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_DescribeTapeRecoveryPointsOutput">DescribeTapeRecoveryPointsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetaperecoverypointsoutput"></a>
<a id="schema_DescribeTapeRecoveryPointsOutput"></a>
<a id="tocSdescribetaperecoverypointsoutput"></a>
<a id="tocsdescribetaperecoverypointsoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
  "Marker": "1",
  "TapeRecoveryPointInfos": [
    {
      "TapeARN": "arn:aws:storagegateway:us-east-1:999999999:tape/AMZN01A2A4",
      "TapeRecoveryPointTime": "2016-12-16T13:50Z",
      "TapeSizeInBytes": 1471550497,
      "TapeStatus": "AVAILABLE"
    }
  ]
}
```

DescribeTapeRecoveryPointsOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|TapeRecoveryPointInfos|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeTapeRecoveryPointsInput">DescribeTapeRecoveryPointsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetaperecoverypointsinput"></a>
<a id="schema_DescribeTapeRecoveryPointsInput"></a>
<a id="tocSdescribetaperecoverypointsinput"></a>
<a id="tocsdescribetaperecoverypointsinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "Marker": {},
  "Limit": {}
}
```

DescribeTapeRecoveryPointsInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|Marker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_DescribeTapesOutput">DescribeTapesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetapesoutput"></a>
<a id="schema_DescribeTapesOutput"></a>
<a id="tocSdescribetapesoutput"></a>
<a id="tocsdescribetapesoutput"></a>

```json
{
  "Marker": "1",
  "Tapes": [
    {
      "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST04A2A1",
      "TapeBarcode": "TEST04A2A1",
      "TapeSizeInBytes": 107374182400,
      "TapeStatus": "AVAILABLE"
    },
    {
      "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST05A2A0",
      "TapeBarcode": "TEST05A2A0",
      "TapeSizeInBytes": 107374182400,
      "TapeStatus": "AVAILABLE"
    }
  ]
}
```

DescribeTapesOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tapes|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeTapesInput">DescribeTapesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetapesinput"></a>
<a id="schema_DescribeTapesInput"></a>
<a id="tocSdescribetapesinput"></a>
<a id="tocsdescribetapesinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "TapeARNs": {},
  "Marker": {},
  "Limit": {}
}
```

DescribeTapesInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|TapeARNs|object|false|none|none|
|Marker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_DescribeUploadBufferOutput">DescribeUploadBufferOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuploadbufferoutput"></a>
<a id="schema_DescribeUploadBufferOutput"></a>
<a id="tocSdescribeuploadbufferoutput"></a>
<a id="tocsdescribeuploadbufferoutput"></a>

```json
{
  "DiskIds": [
    "pci-0000:03:00.0-scsi-0:0:0:0",
    "pci-0000:04:00.0-scsi-0:1:0:0"
  ],
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
  "UploadBufferAllocatedInBytes": 161061273600,
  "UploadBufferUsedInBytes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|DiskIds|object|false|none|none|
|UploadBufferUsedInBytes|object|false|none|none|
|UploadBufferAllocatedInBytes|object|false|none|none|

<h2 id="tocS_DescribeUploadBufferInput">DescribeUploadBufferInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuploadbufferinput"></a>
<a id="schema_DescribeUploadBufferInput"></a>
<a id="tocSdescribeuploadbufferinput"></a>
<a id="tocsdescribeuploadbufferinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_DescribeVTLDevicesOutput">DescribeVTLDevicesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribevtldevicesoutput"></a>
<a id="schema_DescribeVTLDevicesOutput"></a>
<a id="tocSdescribevtldevicesoutput"></a>
<a id="tocsdescribevtldevicesoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B",
  "Marker": "1",
  "VTLDevices": [
    {
      "DeviceiSCSIAttributes": {
        "ChapEnabled": false,
        "NetworkInterfaceId": "10.243.43.207",
        "NetworkInterfacePort": 3260,
        "TargetARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:sgw-1fad4876-mediachanger"
      },
      "VTLDeviceARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_MEDIACHANGER_00001",
      "VTLDeviceProductIdentifier": "L700",
      "VTLDeviceType": "Medium Changer",
      "VTLDeviceVendor": "STK"
    },
    {
      "DeviceiSCSIAttributes": {
        "ChapEnabled": false,
        "NetworkInterfaceId": "10.243.43.209",
        "NetworkInterfacePort": 3260,
        "TargetARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:sgw-1fad4876-tapedrive-01"
      },
      "VTLDeviceARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_TAPEDRIVE_00001",
      "VTLDeviceProductIdentifier": "ULT3580-TD5",
      "VTLDeviceType": "Tape Drive",
      "VTLDeviceVendor": "IBM"
    },
    {
      "DeviceiSCSIAttributes": {
        "ChapEnabled": false,
        "NetworkInterfaceId": "10.243.43.209",
        "NetworkInterfacePort": 3260,
        "TargetARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:sgw-1fad4876-tapedrive-02"
      },
      "VTLDeviceARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_TAPEDRIVE_00002",
      "VTLDeviceProductIdentifier": "ULT3580-TD5",
      "VTLDeviceType": "Tape Drive",
      "VTLDeviceVendor": "IBM"
    }
  ]
}
```

DescribeVTLDevicesOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|VTLDevices|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeVTLDevicesInput">DescribeVTLDevicesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribevtldevicesinput"></a>
<a id="schema_DescribeVTLDevicesInput"></a>
<a id="tocSdescribevtldevicesinput"></a>
<a id="tocsdescribevtldevicesinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "VTLDeviceARNs": {},
  "Marker": {},
  "Limit": {}
}
```

DescribeVTLDevicesInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|VTLDeviceARNs|object|false|none|none|
|Marker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_DescribeWorkingStorageOutput">DescribeWorkingStorageOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkingstorageoutput"></a>
<a id="schema_DescribeWorkingStorageOutput"></a>
<a id="tocSdescribeworkingstorageoutput"></a>
<a id="tocsdescribeworkingstorageoutput"></a>

```json
{
  "DiskIds": [
    "pci-0000:03:00.0-scsi-0:0:0:0",
    "pci-0000:03:00.0-scsi-0:0:1:0"
  ],
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
  "WorkingStorageAllocatedInBytes": 2199023255552,
  "WorkingStorageUsedInBytes": 789207040
}
```

A JSON object containing the following fields:

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|DiskIds|object|false|none|none|
|WorkingStorageUsedInBytes|object|false|none|none|
|WorkingStorageAllocatedInBytes|object|false|none|none|

<h2 id="tocS_DescribeWorkingStorageInput">DescribeWorkingStorageInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkingstorageinput"></a>
<a id="schema_DescribeWorkingStorageInput"></a>
<a id="tocSdescribeworkingstorageinput"></a>
<a id="tocsdescribeworkingstorageinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

A JSON object containing the Amazon Resource Name (ARN) of the gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_DetachVolumeOutput">DetachVolumeOutput</h2>
<!-- backwards compatibility -->
<a id="schemadetachvolumeoutput"></a>
<a id="schema_DetachVolumeOutput"></a>
<a id="tocSdetachvolumeoutput"></a>
<a id="tocsdetachvolumeoutput"></a>

```json
{
  "VolumeARN": {}
}
```

AttachVolumeOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|false|none|none|

<h2 id="tocS_DetachVolumeInput">DetachVolumeInput</h2>
<!-- backwards compatibility -->
<a id="schemadetachvolumeinput"></a>
<a id="schema_DetachVolumeInput"></a>
<a id="tocSdetachvolumeinput"></a>
<a id="tocsdetachvolumeinput"></a>

```json
{
  "VolumeARN": {},
  "ForceDetach": {}
}
```

AttachVolumeInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|true|none|none|
|ForceDetach|object|false|none|none|

<h2 id="tocS_DisableGatewayOutput">DisableGatewayOutput</h2>
<!-- backwards compatibility -->
<a id="schemadisablegatewayoutput"></a>
<a id="schema_DisableGatewayOutput"></a>
<a id="tocSdisablegatewayoutput"></a>
<a id="tocsdisablegatewayoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
}
```

DisableGatewayOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|object|false|none|none|

<h2 id="tocS_DisableGatewayInput">DisableGatewayInput</h2>
<!-- backwards compatibility -->
<a id="schemadisablegatewayinput"></a>
<a id="schema_DisableGatewayInput"></a>
<a id="tocSdisablegatewayinput"></a>
<a id="tocsdisablegatewayinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

DisableGatewayInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_DisassociateFileSystemOutput">DisassociateFileSystemOutput</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatefilesystemoutput"></a>
<a id="schema_DisassociateFileSystemOutput"></a>
<a id="tocSdisassociatefilesystemoutput"></a>
<a id="tocsdisassociatefilesystemoutput"></a>

```json
{
  "FileSystemAssociationARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemAssociationARN|object|false|none|none|

<h2 id="tocS_DisassociateFileSystemInput">DisassociateFileSystemInput</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatefilesysteminput"></a>
<a id="schema_DisassociateFileSystemInput"></a>
<a id="tocSdisassociatefilesysteminput"></a>
<a id="tocsdisassociatefilesysteminput"></a>

```json
{
  "FileSystemAssociationARN": {},
  "ForceDelete": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemAssociationARN|object|true|none|none|
|ForceDelete|object|false|none|none|

<h2 id="tocS_JoinDomainOutput">JoinDomainOutput</h2>
<!-- backwards compatibility -->
<a id="schemajoindomainoutput"></a>
<a id="schema_JoinDomainOutput"></a>
<a id="tocSjoindomainoutput"></a>
<a id="tocsjoindomainoutput"></a>

```json
{
  "GatewayARN": {},
  "ActiveDirectoryStatus": {}
}
```

JoinDomainOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|object|false|none|none|
|ActiveDirectoryStatus|object|false|none|none|

<h2 id="tocS_JoinDomainInput">JoinDomainInput</h2>
<!-- backwards compatibility -->
<a id="schemajoindomaininput"></a>
<a id="schema_JoinDomainInput"></a>
<a id="tocSjoindomaininput"></a>
<a id="tocsjoindomaininput"></a>

```json
{
  "GatewayARN": {},
  "DomainName": {},
  "OrganizationalUnit": {},
  "DomainControllers": {},
  "TimeoutInSeconds": {},
  "UserName": {},
  "Password": {}
}
```

JoinDomainInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|object|true|none|none|
|DomainName|object|true|none|none|
|OrganizationalUnit|object|false|none|none|
|DomainControllers|object|false|none|none|
|TimeoutInSeconds|object|false|none|none|
|UserName|object|true|none|none|
|Password|object|true|none|none|

<h2 id="tocS_ListAutomaticTapeCreationPoliciesOutput">ListAutomaticTapeCreationPoliciesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistautomatictapecreationpoliciesoutput"></a>
<a id="schema_ListAutomaticTapeCreationPoliciesOutput"></a>
<a id="tocSlistautomatictapecreationpoliciesoutput"></a>
<a id="tocslistautomatictapecreationpoliciesoutput"></a>

```json
{
  "AutomaticTapeCreationPolicyInfos": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomaticTapeCreationPolicyInfos|object|false|none|none|

<h2 id="tocS_ListAutomaticTapeCreationPoliciesInput">ListAutomaticTapeCreationPoliciesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistautomatictapecreationpoliciesinput"></a>
<a id="schema_ListAutomaticTapeCreationPoliciesInput"></a>
<a id="tocSlistautomatictapecreationpoliciesinput"></a>
<a id="tocslistautomatictapecreationpoliciesinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_ListFileSharesOutput">ListFileSharesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistfilesharesoutput"></a>
<a id="schema_ListFileSharesOutput"></a>
<a id="tocSlistfilesharesoutput"></a>
<a id="tocslistfilesharesoutput"></a>

```json
{
  "Marker": {},
  "NextMarker": {},
  "FileShareInfoList": {}
}
```

ListFileShareOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|NextMarker|object|false|none|none|
|FileShareInfoList|object|false|none|none|

<h2 id="tocS_ListFileSharesInput">ListFileSharesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistfilesharesinput"></a>
<a id="schema_ListFileSharesInput"></a>
<a id="tocSlistfilesharesinput"></a>
<a id="tocslistfilesharesinput"></a>

```json
{
  "GatewayARN": {},
  "Limit": {},
  "Marker": {}
}
```

ListFileShareInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|object|false|none|none|
|Limit|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListFileSystemAssociationsOutput">ListFileSystemAssociationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistfilesystemassociationsoutput"></a>
<a id="schema_ListFileSystemAssociationsOutput"></a>
<a id="tocSlistfilesystemassociationsoutput"></a>
<a id="tocslistfilesystemassociationsoutput"></a>

```json
{
  "Marker": {},
  "NextMarker": {},
  "FileSystemAssociationSummaryList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|NextMarker|object|false|none|none|
|FileSystemAssociationSummaryList|object|false|none|none|

<h2 id="tocS_ListFileSystemAssociationsInput">ListFileSystemAssociationsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistfilesystemassociationsinput"></a>
<a id="schema_ListFileSystemAssociationsInput"></a>
<a id="tocSlistfilesystemassociationsinput"></a>
<a id="tocslistfilesystemassociationsinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "Limit": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|Limit|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListGatewaysOutput">ListGatewaysOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistgatewaysoutput"></a>
<a id="schema_ListGatewaysOutput"></a>
<a id="tocSlistgatewaysoutput"></a>
<a id="tocslistgatewaysoutput"></a>

```json
{
  "Gateways": [
    {
      "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
    },
    {
      "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-23A4567C"
    }
  ],
  "Marker": "1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Gateways|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListGatewaysInput">ListGatewaysInput</h2>
<!-- backwards compatibility -->
<a id="schemalistgatewaysinput"></a>
<a id="schema_ListGatewaysInput"></a>
<a id="tocSlistgatewaysinput"></a>
<a id="tocslistgatewaysinput"></a>

```json
{
  "Marker": {},
  "Limit": {}
}
```

<p>A JSON object containing zero or more of the following fields:</p> <ul> <li> <p> <a>ListGatewaysInput$Limit</a> </p> </li> <li> <p> <a>ListGatewaysInput$Marker</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListLocalDisksOutput">ListLocalDisksOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistlocaldisksoutput"></a>
<a id="schema_ListLocalDisksOutput"></a>
<a id="tocSlistlocaldisksoutput"></a>
<a id="tocslistlocaldisksoutput"></a>

```json
{
  "Disks": [
    {
      "DiskAllocationType": "CACHE_STORAGE",
      "DiskId": "pci-0000:03:00.0-scsi-0:0:0:0",
      "DiskNode": "SCSI(0:0)",
      "DiskPath": "/dev/sda",
      "DiskSizeInBytes": 1099511627776,
      "DiskStatus": "missing"
    },
    {
      "DiskAllocationResource": "",
      "DiskAllocationType": "UPLOAD_BUFFER",
      "DiskId": "pci-0000:03:00.0-scsi-0:0:1:0",
      "DiskNode": "SCSI(0:1)",
      "DiskPath": "/dev/sdb",
      "DiskSizeInBytes": 1099511627776,
      "DiskStatus": "present"
    }
  ],
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|Disks|object|false|none|none|

<h2 id="tocS_ListLocalDisksInput">ListLocalDisksInput</h2>
<!-- backwards compatibility -->
<a id="schemalistlocaldisksinput"></a>
<a id="schema_ListLocalDisksInput"></a>
<a id="tocSlistlocaldisksinput"></a>
<a id="tocslistlocaldisksinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

A JSON object containing the Amazon Resource Name (ARN) of the gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_ListTagsForResourceOutput">ListTagsForResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceoutput"></a>
<a id="schema_ListTagsForResourceOutput"></a>
<a id="tocSlisttagsforresourceoutput"></a>
<a id="tocslisttagsforresourceoutput"></a>

```json
{
  "Marker": "1",
  "ResourceARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-11A2222B",
  "Tags": [
    {
      "Key": "Dev Gatgeway Region",
      "Value": "East Coast"
    }
  ]
}
```

ListTagsForResourceOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|false|none|none|
|Marker|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceInput">ListTagsForResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceinput"></a>
<a id="schema_ListTagsForResourceInput"></a>
<a id="tocSlisttagsforresourceinput"></a>
<a id="tocslisttagsforresourceinput"></a>

```json
{
  "ResourceARN": {},
  "Marker": {},
  "Limit": {}
}
```

ListTagsForResourceInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|Marker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListTapePoolsOutput">ListTapePoolsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttapepoolsoutput"></a>
<a id="schema_ListTapePoolsOutput"></a>
<a id="tocSlisttapepoolsoutput"></a>
<a id="tocslisttapepoolsoutput"></a>

```json
{
  "PoolInfos": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PoolInfos|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListTapePoolsInput">ListTapePoolsInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttapepoolsinput"></a>
<a id="schema_ListTapePoolsInput"></a>
<a id="tocSlisttapepoolsinput"></a>
<a id="tocslisttapepoolsinput"></a>

```json
{
  "PoolARNs": {},
  "Marker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PoolARNs|object|false|none|none|
|Marker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListTapesOutput">ListTapesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttapesoutput"></a>
<a id="schema_ListTapesOutput"></a>
<a id="tocSlisttapesoutput"></a>
<a id="tocslisttapesoutput"></a>

```json
{
  "TapeInfos": [
    {
      "TapeARN": {},
      "TapeBarcode": {},
      "TapeSizeInBytes": {},
      "TapeStatus": {},
      "GatewayARN": {},
      "PoolId": {},
      "RetentionStartDate": {},
      "PoolEntryDate": {}
    }
  ],
  "Marker": {}
}
```

<p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>ListTapesOutput$Marker</a> </p> </li> <li> <p> <a>ListTapesOutput$VolumeInfos</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeInfos|[TapeInfos](#schematapeinfos)|false|none|An array of <a>TapeInfo</a> objects, where each object describes a single tape. If there are no tapes in the tape library or VTS, then the <code>TapeInfos</code> is an empty array.|
|Marker|object|false|none|none|

<h2 id="tocS_ListTapesInput">ListTapesInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttapesinput"></a>
<a id="schema_ListTapesInput"></a>
<a id="tocSlisttapesinput"></a>
<a id="tocslisttapesinput"></a>

```json
{
  "TapeARNs": [
    "stringstringstringstringstringstringstringstringst"
  ],
  "Marker": {},
  "Limit": {}
}
```

<p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListTapesInput$Limit</a> </p> </li> <li> <p> <a>ListTapesInput$Marker</a> </p> </li> <li> <p> <a>ListTapesInput$TapeARNs</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARNs|[TapeARNs](#schematapearns)|false|none|The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't specify a tape ARN, the response lists all tapes in both your VTL and VTS.|
|Marker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListVolumeInitiatorsOutput">ListVolumeInitiatorsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistvolumeinitiatorsoutput"></a>
<a id="schema_ListVolumeInitiatorsOutput"></a>
<a id="tocSlistvolumeinitiatorsoutput"></a>
<a id="tocslistvolumeinitiatorsoutput"></a>

```json
{
  "Initiators": {}
}
```

ListVolumeInitiatorsOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Initiators|object|false|none|none|

<h2 id="tocS_ListVolumeInitiatorsInput">ListVolumeInitiatorsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistvolumeinitiatorsinput"></a>
<a id="schema_ListVolumeInitiatorsInput"></a>
<a id="tocSlistvolumeinitiatorsinput"></a>
<a id="tocslistvolumeinitiatorsinput"></a>

```json
{
  "VolumeARN": {}
}
```

ListVolumeInitiatorsInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|true|none|none|

<h2 id="tocS_ListVolumeRecoveryPointsOutput">ListVolumeRecoveryPointsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistvolumerecoverypointsoutput"></a>
<a id="schema_ListVolumeRecoveryPointsOutput"></a>
<a id="tocSlistvolumerecoverypointsoutput"></a>
<a id="tocslistvolumerecoverypointsoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
  "VolumeRecoveryPointInfos": [
    {
      "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
      "VolumeRecoveryPointTime": "2012-09-04T21:08:44.627Z",
      "VolumeSizeInBytes": 536870912000
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|VolumeRecoveryPointInfos|object|false|none|none|

<h2 id="tocS_ListVolumeRecoveryPointsInput">ListVolumeRecoveryPointsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistvolumerecoverypointsinput"></a>
<a id="schema_ListVolumeRecoveryPointsInput"></a>
<a id="tocSlistvolumerecoverypointsinput"></a>
<a id="tocslistvolumerecoverypointsinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_ListVolumesOutput">ListVolumesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistvolumesoutput"></a>
<a id="schema_ListVolumesOutput"></a>
<a id="tocSlistvolumesoutput"></a>
<a id="tocslistvolumesoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
  "Marker": "1",
  "VolumeInfos": [
    {
      "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
      "GatewayId": "sgw-12A3456B",
      "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
      "VolumeId": "vol-1122AABB",
      "VolumeSizeInBytes": 107374182400,
      "VolumeType": "STORED"
    },
    {
      "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-13B4567C",
      "GatewayId": "sgw-gw-13B4567C",
      "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-13B4567C/volume/vol-3344CCDD",
      "VolumeId": "vol-1122AABB",
      "VolumeSizeInBytes": 107374182400,
      "VolumeType": "STORED"
    }
  ]
}
```

<p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>ListVolumesOutput$Marker</a> </p> </li> <li> <p> <a>ListVolumesOutput$VolumeInfos</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|Marker|object|false|none|none|
|VolumeInfos|object|false|none|none|

<h2 id="tocS_ListVolumesInput">ListVolumesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistvolumesinput"></a>
<a id="schema_ListVolumesInput"></a>
<a id="tocSlistvolumesinput"></a>
<a id="tocslistvolumesinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "Marker": {},
  "Limit": {}
}
```

<p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListVolumesInput$Limit</a> </p> </li> <li> <p> <a>ListVolumesInput$Marker</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|Marker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_NotifyWhenUploadedOutput">NotifyWhenUploadedOutput</h2>
<!-- backwards compatibility -->
<a id="schemanotifywhenuploadedoutput"></a>
<a id="schema_NotifyWhenUploadedOutput"></a>
<a id="tocSnotifywhenuploadedoutput"></a>
<a id="tocsnotifywhenuploadedoutput"></a>

```json
{
  "FileShareARN": "stringstringstringstringstringstringstringstringst",
  "NotificationId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileShareARN|[FileShareARN](#schemafilesharearn)|false|none|The Amazon Resource Name (ARN) of the file share.|
|NotificationId|[NotificationId](#schemanotificationid)|false|none|The randomly generated ID of the notification that was sent. This ID is in UUID format.|

<h2 id="tocS_NotifyWhenUploadedInput">NotifyWhenUploadedInput</h2>
<!-- backwards compatibility -->
<a id="schemanotifywhenuploadedinput"></a>
<a id="schema_NotifyWhenUploadedInput"></a>
<a id="tocSnotifywhenuploadedinput"></a>
<a id="tocsnotifywhenuploadedinput"></a>

```json
{
  "FileShareARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileShareARN|[FileShareARN](#schemafilesharearn)|true|none|The Amazon Resource Name (ARN) of the file share.|

<h2 id="tocS_RefreshCacheOutput">RefreshCacheOutput</h2>
<!-- backwards compatibility -->
<a id="schemarefreshcacheoutput"></a>
<a id="schema_RefreshCacheOutput"></a>
<a id="tocSrefreshcacheoutput"></a>
<a id="tocsrefreshcacheoutput"></a>

```json
{
  "FileShareARN": "stringstringstringstringstringstringstringstringst",
  "NotificationId": "string"
}
```

RefreshCacheOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileShareARN|[FileShareARN](#schemafilesharearn)|false|none|The Amazon Resource Name (ARN) of the file share.|
|NotificationId|[NotificationId](#schemanotificationid)|false|none|The randomly generated ID of the notification that was sent. This ID is in UUID format.|

<h2 id="tocS_RefreshCacheInput">RefreshCacheInput</h2>
<!-- backwards compatibility -->
<a id="schemarefreshcacheinput"></a>
<a id="schema_RefreshCacheInput"></a>
<a id="tocSrefreshcacheinput"></a>
<a id="tocsrefreshcacheinput"></a>

```json
{
  "FileShareARN": {},
  "FolderList": {},
  "Recursive": {}
}
```

RefreshCacheInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileShareARN|object|true|none|none|
|FolderList|object|false|none|none|
|Recursive|object|false|none|none|

<h2 id="tocS_RemoveTagsFromResourceOutput">RemoveTagsFromResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsfromresourceoutput"></a>
<a id="schema_RemoveTagsFromResourceOutput"></a>
<a id="tocSremovetagsfromresourceoutput"></a>
<a id="tocsremovetagsfromresourceoutput"></a>

```json
{
  "ResourceARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-11A2222B"
}
```

RemoveTagsFromResourceOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|false|none|none|

<h2 id="tocS_RemoveTagsFromResourceInput">RemoveTagsFromResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsfromresourceinput"></a>
<a id="schema_RemoveTagsFromResourceInput"></a>
<a id="tocSremovetagsfromresourceinput"></a>
<a id="tocsremovetagsfromresourceinput"></a>

```json
{
  "ResourceARN": {},
  "TagKeys": {}
}
```

RemoveTagsFromResourceInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_ResetCacheOutput">ResetCacheOutput</h2>
<!-- backwards compatibility -->
<a id="schemaresetcacheoutput"></a>
<a id="schema_ResetCacheOutput"></a>
<a id="tocSresetcacheoutput"></a>
<a id="tocsresetcacheoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-13B4567C"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_ResetCacheInput">ResetCacheInput</h2>
<!-- backwards compatibility -->
<a id="schemaresetcacheinput"></a>
<a id="schema_ResetCacheInput"></a>
<a id="tocSresetcacheinput"></a>
<a id="tocsresetcacheinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_RetrieveTapeArchiveOutput">RetrieveTapeArchiveOutput</h2>
<!-- backwards compatibility -->
<a id="schemaretrievetapearchiveoutput"></a>
<a id="schema_RetrieveTapeArchiveOutput"></a>
<a id="tocSretrievetapearchiveoutput"></a>
<a id="tocsretrievetapearchiveoutput"></a>

```json
{
  "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST0AA2AF"
}
```

RetrieveTapeArchiveOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARN|object|false|none|none|

<h2 id="tocS_RetrieveTapeArchiveInput">RetrieveTapeArchiveInput</h2>
<!-- backwards compatibility -->
<a id="schemaretrievetapearchiveinput"></a>
<a id="schema_RetrieveTapeArchiveInput"></a>
<a id="tocSretrievetapearchiveinput"></a>
<a id="tocsretrievetapearchiveinput"></a>

```json
{
  "TapeARN": {},
  "GatewayARN": {}
}
```

RetrieveTapeArchiveInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARN|object|true|none|none|
|GatewayARN|object|true|none|none|

<h2 id="tocS_RetrieveTapeRecoveryPointOutput">RetrieveTapeRecoveryPointOutput</h2>
<!-- backwards compatibility -->
<a id="schemaretrievetaperecoverypointoutput"></a>
<a id="schema_RetrieveTapeRecoveryPointOutput"></a>
<a id="tocSretrievetaperecoverypointoutput"></a>
<a id="tocsretrievetaperecoverypointoutput"></a>

```json
{
  "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST0AA2AF"
}
```

RetrieveTapeRecoveryPointOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARN|object|false|none|none|

<h2 id="tocS_RetrieveTapeRecoveryPointInput">RetrieveTapeRecoveryPointInput</h2>
<!-- backwards compatibility -->
<a id="schemaretrievetaperecoverypointinput"></a>
<a id="schema_RetrieveTapeRecoveryPointInput"></a>
<a id="tocSretrievetaperecoverypointinput"></a>
<a id="tocsretrievetaperecoverypointinput"></a>

```json
{
  "TapeARN": {},
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

RetrieveTapeRecoveryPointInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARN|object|true|none|none|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_SetLocalConsolePasswordOutput">SetLocalConsolePasswordOutput</h2>
<!-- backwards compatibility -->
<a id="schemasetlocalconsolepasswordoutput"></a>
<a id="schema_SetLocalConsolePasswordOutput"></a>
<a id="tocSsetlocalconsolepasswordoutput"></a>
<a id="tocssetlocalconsolepasswordoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_SetLocalConsolePasswordInput">SetLocalConsolePasswordInput</h2>
<!-- backwards compatibility -->
<a id="schemasetlocalconsolepasswordinput"></a>
<a id="schema_SetLocalConsolePasswordInput"></a>
<a id="tocSsetlocalconsolepasswordinput"></a>
<a id="tocssetlocalconsolepasswordinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "LocalConsolePassword": {}
}
```

SetLocalConsolePasswordInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|LocalConsolePassword|object|true|none|none|

<h2 id="tocS_SetSMBGuestPasswordOutput">SetSMBGuestPasswordOutput</h2>
<!-- backwards compatibility -->
<a id="schemasetsmbguestpasswordoutput"></a>
<a id="schema_SetSMBGuestPasswordOutput"></a>
<a id="tocSsetsmbguestpasswordoutput"></a>
<a id="tocssetsmbguestpasswordoutput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_SetSMBGuestPasswordInput">SetSMBGuestPasswordInput</h2>
<!-- backwards compatibility -->
<a id="schemasetsmbguestpasswordinput"></a>
<a id="schema_SetSMBGuestPasswordInput"></a>
<a id="tocSsetsmbguestpasswordinput"></a>
<a id="tocssetsmbguestpasswordinput"></a>

```json
{
  "GatewayARN": {},
  "Password": {}
}
```

SetSMBGuestPasswordInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|object|true|none|none|
|Password|object|true|none|none|

<h2 id="tocS_ShutdownGatewayOutput">ShutdownGatewayOutput</h2>
<!-- backwards compatibility -->
<a id="schemashutdowngatewayoutput"></a>
<a id="schema_ShutdownGatewayOutput"></a>
<a id="tocSshutdowngatewayoutput"></a>
<a id="tocsshutdowngatewayoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B"
}
```

A JSON object containing the Amazon Resource Name (ARN) of the gateway that was shut down.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_ShutdownGatewayInput">ShutdownGatewayInput</h2>
<!-- backwards compatibility -->
<a id="schemashutdowngatewayinput"></a>
<a id="schema_ShutdownGatewayInput"></a>
<a id="tocSshutdowngatewayinput"></a>
<a id="tocsshutdowngatewayinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

A JSON object containing the Amazon Resource Name (ARN) of the gateway to shut down.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_StartAvailabilityMonitorTestOutput">StartAvailabilityMonitorTestOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartavailabilitymonitortestoutput"></a>
<a id="schema_StartAvailabilityMonitorTestOutput"></a>
<a id="tocSstartavailabilitymonitortestoutput"></a>
<a id="tocsstartavailabilitymonitortestoutput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_StartAvailabilityMonitorTestInput">StartAvailabilityMonitorTestInput</h2>
<!-- backwards compatibility -->
<a id="schemastartavailabilitymonitortestinput"></a>
<a id="schema_StartAvailabilityMonitorTestInput"></a>
<a id="tocSstartavailabilitymonitortestinput"></a>
<a id="tocsstartavailabilitymonitortestinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_StartGatewayOutput">StartGatewayOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartgatewayoutput"></a>
<a id="schema_StartGatewayOutput"></a>
<a id="tocSstartgatewayoutput"></a>
<a id="tocsstartgatewayoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B"
}
```

A JSON object containing the Amazon Resource Name (ARN) of the gateway that was restarted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_StartGatewayInput">StartGatewayInput</h2>
<!-- backwards compatibility -->
<a id="schemastartgatewayinput"></a>
<a id="schema_StartGatewayInput"></a>
<a id="tocSstartgatewayinput"></a>
<a id="tocsstartgatewayinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

A JSON object containing the Amazon Resource Name (ARN) of the gateway to start.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_UpdateAutomaticTapeCreationPolicyOutput">UpdateAutomaticTapeCreationPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateautomatictapecreationpolicyoutput"></a>
<a id="schema_UpdateAutomaticTapeCreationPolicyOutput"></a>
<a id="tocSupdateautomatictapecreationpolicyoutput"></a>
<a id="tocsupdateautomatictapecreationpolicyoutput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_UpdateAutomaticTapeCreationPolicyInput">UpdateAutomaticTapeCreationPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateautomatictapecreationpolicyinput"></a>
<a id="schema_UpdateAutomaticTapeCreationPolicyInput"></a>
<a id="tocSupdateautomatictapecreationpolicyinput"></a>
<a id="tocsupdateautomatictapecreationpolicyinput"></a>

```json
{
  "AutomaticTapeCreationRules": {},
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomaticTapeCreationRules|object|true|none|none|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_UpdateBandwidthRateLimitOutput">UpdateBandwidthRateLimitOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebandwidthratelimitoutput"></a>
<a id="schema_UpdateBandwidthRateLimitOutput"></a>
<a id="tocSupdatebandwidthratelimitoutput"></a>
<a id="tocsupdatebandwidthratelimitoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
}
```

A JSON object containing the Amazon Resource Name (ARN) of the gateway whose throttle information was updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_UpdateBandwidthRateLimitInput">UpdateBandwidthRateLimitInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebandwidthratelimitinput"></a>
<a id="schema_UpdateBandwidthRateLimitInput"></a>
<a id="tocSupdatebandwidthratelimitinput"></a>
<a id="tocsupdatebandwidthratelimitinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "AverageUploadRateLimitInBitsPerSec": {},
  "AverageDownloadRateLimitInBitsPerSec": {}
}
```

<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageDownloadRateLimitInBitsPerSec</a> </p> </li> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageUploadRateLimitInBitsPerSec</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|AverageUploadRateLimitInBitsPerSec|object|false|none|none|
|AverageDownloadRateLimitInBitsPerSec|object|false|none|none|

<h2 id="tocS_UpdateBandwidthRateLimitScheduleOutput">UpdateBandwidthRateLimitScheduleOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebandwidthratelimitscheduleoutput"></a>
<a id="schema_UpdateBandwidthRateLimitScheduleOutput"></a>
<a id="tocSupdatebandwidthratelimitscheduleoutput"></a>
<a id="tocsupdatebandwidthratelimitscheduleoutput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_UpdateBandwidthRateLimitScheduleInput">UpdateBandwidthRateLimitScheduleInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebandwidthratelimitscheduleinput"></a>
<a id="schema_UpdateBandwidthRateLimitScheduleInput"></a>
<a id="tocSupdatebandwidthratelimitscheduleinput"></a>
<a id="tocsupdatebandwidthratelimitscheduleinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "BandwidthRateLimitIntervals": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|BandwidthRateLimitIntervals|object|true|none|none|

<h2 id="tocS_UpdateChapCredentialsOutput">UpdateChapCredentialsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechapcredentialsoutput"></a>
<a id="schema_UpdateChapCredentialsOutput"></a>
<a id="tocSupdatechapcredentialsoutput"></a>
<a id="tocsupdatechapcredentialsoutput"></a>

```json
{
  "InitiatorName": "iqn.1991-05.com.microsoft:computername.domain.example.com",
  "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
}
```

A JSON object containing the following fields:

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetARN|object|false|none|none|
|InitiatorName|object|false|none|none|

<h2 id="tocS_UpdateChapCredentialsInput">UpdateChapCredentialsInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechapcredentialsinput"></a>
<a id="schema_UpdateChapCredentialsInput"></a>
<a id="tocSupdatechapcredentialsinput"></a>
<a id="tocsupdatechapcredentialsinput"></a>

```json
{
  "TargetARN": {},
  "SecretToAuthenticateInitiator": {},
  "InitiatorName": {},
  "SecretToAuthenticateTarget": {}
}
```

<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateInitiator</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateTarget</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$TargetARN</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetARN|object|true|none|none|
|SecretToAuthenticateInitiator|object|true|none|none|
|InitiatorName|object|true|none|none|
|SecretToAuthenticateTarget|object|false|none|none|

<h2 id="tocS_UpdateFileSystemAssociationOutput">UpdateFileSystemAssociationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefilesystemassociationoutput"></a>
<a id="schema_UpdateFileSystemAssociationOutput"></a>
<a id="tocSupdatefilesystemassociationoutput"></a>
<a id="tocsupdatefilesystemassociationoutput"></a>

```json
{
  "FileSystemAssociationARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemAssociationARN|object|false|none|none|

<h2 id="tocS_UpdateFileSystemAssociationInput">UpdateFileSystemAssociationInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefilesystemassociationinput"></a>
<a id="schema_UpdateFileSystemAssociationInput"></a>
<a id="tocSupdatefilesystemassociationinput"></a>
<a id="tocsupdatefilesystemassociationinput"></a>

```json
{
  "FileSystemAssociationARN": {},
  "UserName": {},
  "Password": {},
  "AuditDestinationARN": {},
  "CacheAttributes": {
    "CacheStaleTimeoutInSeconds": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemAssociationARN|object|true|none|none|
|UserName|object|false|none|none|
|Password|object|false|none|none|
|AuditDestinationARN|object|false|none|none|
|CacheAttributes|[CacheAttributes](#schemacacheattributes)|false|none|The refresh cache information for the file share or FSx file systems.|

<h2 id="tocS_UpdateGatewayInformationOutput">UpdateGatewayInformationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdategatewayinformationoutput"></a>
<a id="schema_UpdateGatewayInformationOutput"></a>
<a id="tocSupdategatewayinformationoutput"></a>
<a id="tocsupdategatewayinformationoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
  "GatewayName": ""
}
```

A JSON object containing the Amazon Resource Name (ARN) of the gateway that was updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|GatewayName|object|false|none|none|

<h2 id="tocS_UpdateGatewayInformationInput">UpdateGatewayInformationInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdategatewayinformationinput"></a>
<a id="schema_UpdateGatewayInformationInput"></a>
<a id="tocSupdategatewayinformationinput"></a>
<a id="tocsupdategatewayinformationinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "GatewayName": "string",
  "GatewayTimezone": {},
  "CloudWatchLogGroupARN": {},
  "GatewayCapacity": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|GatewayName|[GatewayName](#schemagatewayname)|false|none|The name you configured for your gateway.|
|GatewayTimezone|object|false|none|none|
|CloudWatchLogGroupARN|object|false|none|none|
|GatewayCapacity|object|false|none|none|

<h2 id="tocS_UpdateGatewaySoftwareNowOutput">UpdateGatewaySoftwareNowOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdategatewaysoftwarenowoutput"></a>
<a id="schema_UpdateGatewaySoftwareNowOutput"></a>
<a id="tocSupdategatewaysoftwarenowoutput"></a>
<a id="tocsupdategatewaysoftwarenowoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
}
```

A JSON object containing the Amazon Resource Name (ARN) of the gateway that was updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_UpdateGatewaySoftwareNowInput">UpdateGatewaySoftwareNowInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdategatewaysoftwarenowinput"></a>
<a id="schema_UpdateGatewaySoftwareNowInput"></a>
<a id="tocSupdategatewaysoftwarenowinput"></a>
<a id="tocsupdategatewaysoftwarenowinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

A JSON object containing the Amazon Resource Name (ARN) of the gateway to update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_UpdateMaintenanceStartTimeOutput">UpdateMaintenanceStartTimeOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemaintenancestarttimeoutput"></a>
<a id="schema_UpdateMaintenanceStartTimeOutput"></a>
<a id="tocSupdatemaintenancestarttimeoutput"></a>
<a id="tocsupdatemaintenancestarttimeoutput"></a>

```json
{
  "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
}
```

A JSON object containing the Amazon Resource Name (ARN) of the gateway whose maintenance start time is updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_UpdateMaintenanceStartTimeInput">UpdateMaintenanceStartTimeInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemaintenancestarttimeinput"></a>
<a id="schema_UpdateMaintenanceStartTimeInput"></a>
<a id="tocSupdatemaintenancestarttimeinput"></a>
<a id="tocsupdatemaintenancestarttimeinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "HourOfDay": {},
  "MinuteOfHour": {},
  "DayOfWeek": {},
  "DayOfMonth": {}
}
```

<p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>UpdateMaintenanceStartTimeInput$DayOfMonth</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$DayOfWeek</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$HourOfDay</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$MinuteOfHour</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|HourOfDay|object|true|none|none|
|MinuteOfHour|object|true|none|none|
|DayOfWeek|object|false|none|none|
|DayOfMonth|object|false|none|none|

<h2 id="tocS_UpdateNFSFileShareOutput">UpdateNFSFileShareOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenfsfileshareoutput"></a>
<a id="schema_UpdateNFSFileShareOutput"></a>
<a id="tocSupdatenfsfileshareoutput"></a>
<a id="tocsupdatenfsfileshareoutput"></a>

```json
{
  "FileShareARN": {}
}
```

UpdateNFSFileShareOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileShareARN|object|false|none|none|

<h2 id="tocS_UpdateNFSFileShareInput">UpdateNFSFileShareInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenfsfileshareinput"></a>
<a id="schema_UpdateNFSFileShareInput"></a>
<a id="tocSupdatenfsfileshareinput"></a>
<a id="tocsupdatenfsfileshareinput"></a>

```json
{
  "FileShareARN": {},
  "KMSEncrypted": {},
  "KMSKey": {},
  "NFSFileShareDefaults": {
    "FileMode": {},
    "DirectoryMode": {},
    "GroupId": {},
    "OwnerId": {}
  },
  "DefaultStorageClass": {},
  "ObjectACL": {},
  "ClientList": {},
  "Squash": {},
  "ReadOnly": {},
  "GuessMIMETypeEnabled": {},
  "RequesterPays": {},
  "FileShareName": {},
  "CacheAttributes": {
    "CacheStaleTimeoutInSeconds": {}
  },
  "NotificationPolicy": {},
  "AuditDestinationARN": {}
}
```

UpdateNFSFileShareInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileShareARN|object|true|none|none|
|KMSEncrypted|object|false|none|none|
|KMSKey|object|false|none|none|
|NFSFileShareDefaults|object|false|none|none|
|DefaultStorageClass|object|false|none|none|
|ObjectACL|object|false|none|none|
|ClientList|object|false|none|none|
|Squash|object|false|none|none|
|ReadOnly|object|false|none|none|
|GuessMIMETypeEnabled|object|false|none|none|
|RequesterPays|object|false|none|none|
|FileShareName|object|false|none|none|
|CacheAttributes|object|false|none|none|
|NotificationPolicy|object|false|none|none|
|AuditDestinationARN|object|false|none|none|

<h2 id="tocS_UpdateSMBFileShareOutput">UpdateSMBFileShareOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesmbfileshareoutput"></a>
<a id="schema_UpdateSMBFileShareOutput"></a>
<a id="tocSupdatesmbfileshareoutput"></a>
<a id="tocsupdatesmbfileshareoutput"></a>

```json
{
  "FileShareARN": {}
}
```

UpdateSMBFileShareOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileShareARN|object|false|none|none|

<h2 id="tocS_UpdateSMBFileShareInput">UpdateSMBFileShareInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesmbfileshareinput"></a>
<a id="schema_UpdateSMBFileShareInput"></a>
<a id="tocSupdatesmbfileshareinput"></a>
<a id="tocsupdatesmbfileshareinput"></a>

```json
{
  "FileShareARN": {},
  "KMSEncrypted": {},
  "KMSKey": {},
  "DefaultStorageClass": {},
  "ObjectACL": {},
  "ReadOnly": {},
  "GuessMIMETypeEnabled": {},
  "RequesterPays": {},
  "SMBACLEnabled": {},
  "AccessBasedEnumeration": {},
  "AdminUserList": {},
  "ValidUserList": {},
  "InvalidUserList": {},
  "AuditDestinationARN": {},
  "CaseSensitivity": {},
  "FileShareName": {},
  "CacheAttributes": {
    "CacheStaleTimeoutInSeconds": {}
  },
  "NotificationPolicy": {},
  "OplocksEnabled": {}
}
```

UpdateSMBFileShareInput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileShareARN|object|true|none|none|
|KMSEncrypted|object|false|none|none|
|KMSKey|object|false|none|none|
|DefaultStorageClass|object|false|none|none|
|ObjectACL|object|false|none|none|
|ReadOnly|object|false|none|none|
|GuessMIMETypeEnabled|object|false|none|none|
|RequesterPays|object|false|none|none|
|SMBACLEnabled|object|false|none|none|
|AccessBasedEnumeration|object|false|none|none|
|AdminUserList|object|false|none|none|
|ValidUserList|object|false|none|none|
|InvalidUserList|object|false|none|none|
|AuditDestinationARN|object|false|none|none|
|CaseSensitivity|object|false|none|none|
|FileShareName|object|false|none|none|
|CacheAttributes|object|false|none|none|
|NotificationPolicy|object|false|none|none|
|OplocksEnabled|object|false|none|none|

<h2 id="tocS_UpdateSMBFileShareVisibilityOutput">UpdateSMBFileShareVisibilityOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesmbfilesharevisibilityoutput"></a>
<a id="schema_UpdateSMBFileShareVisibilityOutput"></a>
<a id="tocSupdatesmbfilesharevisibilityoutput"></a>
<a id="tocsupdatesmbfilesharevisibilityoutput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_UpdateSMBFileShareVisibilityInput">UpdateSMBFileShareVisibilityInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesmbfilesharevisibilityinput"></a>
<a id="schema_UpdateSMBFileShareVisibilityInput"></a>
<a id="tocSupdatesmbfilesharevisibilityinput"></a>
<a id="tocsupdatesmbfilesharevisibilityinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "FileSharesVisible": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|FileSharesVisible|object|true|none|none|

<h2 id="tocS_UpdateSMBLocalGroupsOutput">UpdateSMBLocalGroupsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesmblocalgroupsoutput"></a>
<a id="schema_UpdateSMBLocalGroupsOutput"></a>
<a id="tocSupdatesmblocalgroupsoutput"></a>
<a id="tocsupdatesmblocalgroupsoutput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_UpdateSMBLocalGroupsInput">UpdateSMBLocalGroupsInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesmblocalgroupsinput"></a>
<a id="schema_UpdateSMBLocalGroupsInput"></a>
<a id="tocSupdatesmblocalgroupsinput"></a>
<a id="tocsupdatesmblocalgroupsinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "SMBLocalGroups": {
    "GatewayAdmins": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|SMBLocalGroups|object|true|none|none|

<h2 id="tocS_UpdateSMBSecurityStrategyOutput">UpdateSMBSecurityStrategyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesmbsecuritystrategyoutput"></a>
<a id="schema_UpdateSMBSecurityStrategyOutput"></a>
<a id="tocSupdatesmbsecuritystrategyoutput"></a>
<a id="tocsupdatesmbsecuritystrategyoutput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_UpdateSMBSecurityStrategyInput">UpdateSMBSecurityStrategyInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesmbsecuritystrategyinput"></a>
<a id="schema_UpdateSMBSecurityStrategyInput"></a>
<a id="tocSupdatesmbsecuritystrategyinput"></a>
<a id="tocsupdatesmbsecuritystrategyinput"></a>

```json
{
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "SMBSecurityStrategy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayARN|[GatewayARN](#schemagatewayarn)|true|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|SMBSecurityStrategy|object|true|none|none|

<h2 id="tocS_UpdateSnapshotScheduleOutput">UpdateSnapshotScheduleOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesnapshotscheduleoutput"></a>
<a id="schema_UpdateSnapshotScheduleOutput"></a>
<a id="tocSupdatesnapshotscheduleoutput"></a>
<a id="tocsupdatesnapshotscheduleoutput"></a>

```json
{
  "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
}
```

A JSON object containing the Amazon Resource Name (ARN) of the updated storage volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|false|none|none|

<h2 id="tocS_UpdateSnapshotScheduleInput">UpdateSnapshotScheduleInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesnapshotscheduleinput"></a>
<a id="schema_UpdateSnapshotScheduleInput"></a>
<a id="tocSupdatesnapshotscheduleinput"></a>
<a id="tocsupdatesnapshotscheduleinput"></a>

```json
{
  "VolumeARN": {},
  "StartAt": {},
  "RecurrenceInHours": {},
  "Description": {},
  "Tags": {}
}
```

<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateSnapshotScheduleInput$Description</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$RecurrenceInHours</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$StartAt</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$VolumeARN</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|true|none|none|
|StartAt|object|true|none|none|
|RecurrenceInHours|object|true|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_UpdateVTLDeviceTypeOutput">UpdateVTLDeviceTypeOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevtldevicetypeoutput"></a>
<a id="schema_UpdateVTLDeviceTypeOutput"></a>
<a id="tocSupdatevtldevicetypeoutput"></a>
<a id="tocsupdatevtldevicetypeoutput"></a>

```json
{
  "VTLDeviceARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_MEDIACHANGER_00001"
}
```

UpdateVTLDeviceTypeOutput

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VTLDeviceARN|object|false|none|none|

<h2 id="tocS_UpdateVTLDeviceTypeInput">UpdateVTLDeviceTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevtldevicetypeinput"></a>
<a id="schema_UpdateVTLDeviceTypeInput"></a>
<a id="tocSupdatevtldevicetypeinput"></a>
<a id="tocsupdatevtldevicetypeinput"></a>

```json
{
  "VTLDeviceARN": {},
  "DeviceType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VTLDeviceARN|object|true|none|none|
|DeviceType|object|true|none|none|

<h2 id="tocS_ActivationKey">ActivationKey</h2>
<!-- backwards compatibility -->
<a id="schemaactivationkey"></a>
<a id="schema_ActivationKey"></a>
<a id="tocSactivationkey"></a>
<a id="tocsactivationkey"></a>

```json
"string"
```

<h2 id="tocS_GatewayName">GatewayName</h2>
<!-- backwards compatibility -->
<a id="schemagatewayname"></a>
<a id="schema_GatewayName"></a>
<a id="tocSgatewayname"></a>
<a id="tocsgatewayname"></a>

```json
"string"
```

The name you configured for your gateway.

<h2 id="tocS_GatewayTimezone">GatewayTimezone</h2>
<!-- backwards compatibility -->
<a id="schemagatewaytimezone"></a>
<a id="schema_GatewayTimezone"></a>
<a id="tocSgatewaytimezone"></a>
<a id="tocsgatewaytimezone"></a>

```json
"string"
```

<h2 id="tocS_RegionId">RegionId</h2>
<!-- backwards compatibility -->
<a id="schemaregionid"></a>
<a id="schema_RegionId"></a>
<a id="tocSregionid"></a>
<a id="tocsregionid"></a>

```json
"string"
```

<h2 id="tocS_GatewayType">GatewayType</h2>
<!-- backwards compatibility -->
<a id="schemagatewaytype"></a>
<a id="schema_GatewayType"></a>
<a id="tocSgatewaytype"></a>
<a id="tocsgatewaytype"></a>

```json
"string"
```

<h2 id="tocS_TapeDriveType">TapeDriveType</h2>
<!-- backwards compatibility -->
<a id="schematapedrivetype"></a>
<a id="schema_TapeDriveType"></a>
<a id="tocStapedrivetype"></a>
<a id="tocstapedrivetype"></a>

```json
"string"
```

<h2 id="tocS_MediumChangerType">MediumChangerType</h2>
<!-- backwards compatibility -->
<a id="schemamediumchangertype"></a>
<a id="schema_MediumChangerType"></a>
<a id="tocSmediumchangertype"></a>
<a id="tocsmediumchangertype"></a>

```json
"string"
```

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_GatewayARN">GatewayARN</h2>
<!-- backwards compatibility -->
<a id="schemagatewayarn"></a>
<a id="schema_GatewayARN"></a>
<a id="tocSgatewayarn"></a>
<a id="tocsgatewayarn"></a>

```json
"stringstringstringstringstringstringstringstringst"
```

The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.

<h2 id="tocS_ActiveDirectoryStatus">ActiveDirectoryStatus</h2>
<!-- backwards compatibility -->
<a id="schemaactivedirectorystatus"></a>
<a id="schema_ActiveDirectoryStatus"></a>
<a id="tocSactivedirectorystatus"></a>
<a id="tocsactivedirectorystatus"></a>

```json
"ACCESS_DENIED"
```

<h2 id="tocS_DiskIds">DiskIds</h2>
<!-- backwards compatibility -->
<a id="schemadiskids"></a>
<a id="schema_DiskIds"></a>
<a id="tocSdiskids"></a>
<a id="tocsdiskids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceARN">ResourceARN</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceARN"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"stringstringstringstringstringstringstringstringst"
```

<h2 id="tocS_TapeARN">TapeARN</h2>
<!-- backwards compatibility -->
<a id="schematapearn"></a>
<a id="schema_TapeARN"></a>
<a id="tocStapearn"></a>
<a id="tocstapearn"></a>

```json
"stringstringstringstringstringstringstringstringst"
```

<h2 id="tocS_PoolId">PoolId</h2>
<!-- backwards compatibility -->
<a id="schemapoolid"></a>
<a id="schema_PoolId"></a>
<a id="tocSpoolid"></a>
<a id="tocspoolid"></a>

```json
"string"
```

<h2 id="tocS_boolean">boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_DomainUserName">DomainUserName</h2>
<!-- backwards compatibility -->
<a id="schemadomainusername"></a>
<a id="schema_DomainUserName"></a>
<a id="tocSdomainusername"></a>
<a id="tocsdomainusername"></a>

```json
"string"
```

<h2 id="tocS_DomainUserPassword">DomainUserPassword</h2>
<!-- backwards compatibility -->
<a id="schemadomainuserpassword"></a>
<a id="schema_DomainUserPassword"></a>
<a id="tocSdomainuserpassword"></a>
<a id="tocsdomainuserpassword"></a>

```json
"password"
```

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"string"
```

<h2 id="tocS_FileSystemLocationARN">FileSystemLocationARN</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemlocationarn"></a>
<a id="schema_FileSystemLocationARN"></a>
<a id="tocSfilesystemlocationarn"></a>
<a id="tocsfilesystemlocationarn"></a>

```json
"stringst"
```

<h2 id="tocS_AuditDestinationARN">AuditDestinationARN</h2>
<!-- backwards compatibility -->
<a id="schemaauditdestinationarn"></a>
<a id="schema_AuditDestinationARN"></a>
<a id="tocSauditdestinationarn"></a>
<a id="tocsauditdestinationarn"></a>

```json
"string"
```

<h2 id="tocS_CacheAttributes">CacheAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacacheattributes"></a>
<a id="schema_CacheAttributes"></a>
<a id="tocScacheattributes"></a>
<a id="tocscacheattributes"></a>

```json
{
  "CacheStaleTimeoutInSeconds": {}
}
```

The refresh cache information for the file share or FSx file systems.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheStaleTimeoutInSeconds|object|false|none|none|

<h2 id="tocS_EndpointNetworkConfiguration">EndpointNetworkConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaendpointnetworkconfiguration"></a>
<a id="schema_EndpointNetworkConfiguration"></a>
<a id="tocSendpointnetworkconfiguration"></a>
<a id="tocsendpointnetworkconfiguration"></a>

```json
{
  "IpAddresses": {}
}
```

Specifies network configuration information for the gateway associated with the Amazon FSx file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpAddresses|object|false|none|none|

<h2 id="tocS_FileSystemAssociationARN">FileSystemAssociationARN</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemassociationarn"></a>
<a id="schema_FileSystemAssociationARN"></a>
<a id="tocSfilesystemassociationarn"></a>
<a id="tocsfilesystemassociationarn"></a>

```json
"stringstringstringstringstringstringstringstringst"
```

<h2 id="tocS_TargetName">TargetName</h2>
<!-- backwards compatibility -->
<a id="schematargetname"></a>
<a id="schema_TargetName"></a>
<a id="tocStargetname"></a>
<a id="tocstargetname"></a>

```json
"string"
```

<h2 id="tocS_VolumeARN">VolumeARN</h2>
<!-- backwards compatibility -->
<a id="schemavolumearn"></a>
<a id="schema_VolumeARN"></a>
<a id="tocSvolumearn"></a>
<a id="tocsvolumearn"></a>

```json
"stringstringstringstringstringstringstringstringst"
```

<h2 id="tocS_NetworkInterfaceId">NetworkInterfaceId</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterfaceid"></a>
<a id="schema_NetworkInterfaceId"></a>
<a id="tocSnetworkinterfaceid"></a>
<a id="tocsnetworkinterfaceid"></a>

```json
"string"
```

<h2 id="tocS_DiskId">DiskId</h2>
<!-- backwards compatibility -->
<a id="schemadiskid"></a>
<a id="schema_DiskId"></a>
<a id="tocSdiskid"></a>
<a id="tocsdiskid"></a>

```json
"string"
```

<h2 id="tocS_TargetARN">TargetARN</h2>
<!-- backwards compatibility -->
<a id="schematargetarn"></a>
<a id="schema_TargetARN"></a>
<a id="tocStargetarn"></a>
<a id="tocstargetarn"></a>

```json
"stringstringstringstringstringstringstringstringst"
```

<h2 id="tocS_Authentication">Authentication</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication"></a>
<a id="schema_Authentication"></a>
<a id="tocSauthentication"></a>
<a id="tocsauthentication"></a>

```json
"string"
```

<p>The authentication method of the file share. The default is <code>ActiveDirectory</code>.</p> <p>Valid Values: <code>ActiveDirectory</code> | <code>GuestAccess</code> </p>

<h2 id="tocS_AutomaticTapeCreationRules">AutomaticTapeCreationRules</h2>
<!-- backwards compatibility -->
<a id="schemaautomatictapecreationrules"></a>
<a id="schema_AutomaticTapeCreationRules"></a>
<a id="tocSautomatictapecreationrules"></a>
<a id="tocsautomatictapecreationrules"></a>

```json
[
  {
    "TapeBarcodePrefix": {},
    "PoolId": {},
    "TapeSizeInBytes": {},
    "MinimumNumTapes": {},
    "Worm": {}
  }
]
```

<h2 id="tocS_AutomaticTapeCreationPolicyInfo">AutomaticTapeCreationPolicyInfo</h2>
<!-- backwards compatibility -->
<a id="schemaautomatictapecreationpolicyinfo"></a>
<a id="schema_AutomaticTapeCreationPolicyInfo"></a>
<a id="tocSautomatictapecreationpolicyinfo"></a>
<a id="tocsautomatictapecreationpolicyinfo"></a>

```json
{
  "AutomaticTapeCreationRules": {},
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

Information about the gateway's automatic tape creation policies, including the automatic tape creation rules and the gateway that is using the policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomaticTapeCreationRules|object|false|none|none|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_AutomaticTapeCreationPolicyInfos">AutomaticTapeCreationPolicyInfos</h2>
<!-- backwards compatibility -->
<a id="schemaautomatictapecreationpolicyinfos"></a>
<a id="schema_AutomaticTapeCreationPolicyInfos"></a>
<a id="tocSautomatictapecreationpolicyinfos"></a>
<a id="tocsautomatictapecreationpolicyinfos"></a>

```json
[
  {
    "AutomaticTapeCreationRules": {},
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }
]
```

<h2 id="tocS_TapeBarcodePrefix">TapeBarcodePrefix</h2>
<!-- backwards compatibility -->
<a id="schematapebarcodeprefix"></a>
<a id="schema_TapeBarcodePrefix"></a>
<a id="tocStapebarcodeprefix"></a>
<a id="tocstapebarcodeprefix"></a>

```json
"stri"
```

<h2 id="tocS_TapeSize">TapeSize</h2>
<!-- backwards compatibility -->
<a id="schematapesize"></a>
<a id="schema_TapeSize"></a>
<a id="tocStapesize"></a>
<a id="tocstapesize"></a>

```json
0
```

<h2 id="tocS_MinimumNumTapes">MinimumNumTapes</h2>
<!-- backwards compatibility -->
<a id="schemaminimumnumtapes"></a>
<a id="schema_MinimumNumTapes"></a>
<a id="tocSminimumnumtapes"></a>
<a id="tocsminimumnumtapes"></a>

```json
1
```

<h2 id="tocS_AutomaticTapeCreationRule">AutomaticTapeCreationRule</h2>
<!-- backwards compatibility -->
<a id="schemaautomatictapecreationrule"></a>
<a id="schema_AutomaticTapeCreationRule"></a>
<a id="tocSautomatictapecreationrule"></a>
<a id="tocsautomatictapecreationrule"></a>

```json
{
  "TapeBarcodePrefix": {},
  "PoolId": {},
  "TapeSizeInBytes": {},
  "MinimumNumTapes": {},
  "Worm": {}
}
```

An automatic tape creation policy consists of automatic tape creation rules where each rule defines when and how to create new tapes. For more information about automatic tape creation, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateTapes.html#CreateTapesAutomatically">Creating Tapes Automatically</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeBarcodePrefix|object|true|none|none|
|PoolId|object|true|none|none|
|TapeSizeInBytes|object|true|none|none|
|MinimumNumTapes|object|true|none|none|
|Worm|object|false|none|none|

<h2 id="tocS_AvailabilityMonitorTestStatus">AvailabilityMonitorTestStatus</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilitymonitorteststatus"></a>
<a id="schema_AvailabilityMonitorTestStatus"></a>
<a id="tocSavailabilitymonitorteststatus"></a>
<a id="tocsavailabilitymonitorteststatus"></a>

```json
"COMPLETE"
```

<h2 id="tocS_BandwidthDownloadRateLimit">BandwidthDownloadRateLimit</h2>
<!-- backwards compatibility -->
<a id="schemabandwidthdownloadratelimit"></a>
<a id="schema_BandwidthDownloadRateLimit"></a>
<a id="tocSbandwidthdownloadratelimit"></a>
<a id="tocsbandwidthdownloadratelimit"></a>

```json
102400
```

<h2 id="tocS_HourOfDay">HourOfDay</h2>
<!-- backwards compatibility -->
<a id="schemahourofday"></a>
<a id="schema_HourOfDay"></a>
<a id="tocShourofday"></a>
<a id="tocshourofday"></a>

```json
0
```

<h2 id="tocS_MinuteOfHour">MinuteOfHour</h2>
<!-- backwards compatibility -->
<a id="schemaminuteofhour"></a>
<a id="schema_MinuteOfHour"></a>
<a id="tocSminuteofhour"></a>
<a id="tocsminuteofhour"></a>

```json
0
```

<h2 id="tocS_DaysOfWeek">DaysOfWeek</h2>
<!-- backwards compatibility -->
<a id="schemadaysofweek"></a>
<a id="schema_DaysOfWeek"></a>
<a id="tocSdaysofweek"></a>
<a id="tocsdaysofweek"></a>

```json
[
  0
]
```

<h2 id="tocS_BandwidthUploadRateLimit">BandwidthUploadRateLimit</h2>
<!-- backwards compatibility -->
<a id="schemabandwidthuploadratelimit"></a>
<a id="schema_BandwidthUploadRateLimit"></a>
<a id="tocSbandwidthuploadratelimit"></a>
<a id="tocsbandwidthuploadratelimit"></a>

```json
51200
```

<h2 id="tocS_BandwidthRateLimitInterval">BandwidthRateLimitInterval</h2>
<!-- backwards compatibility -->
<a id="schemabandwidthratelimitinterval"></a>
<a id="schema_BandwidthRateLimitInterval"></a>
<a id="tocSbandwidthratelimitinterval"></a>
<a id="tocsbandwidthratelimitinterval"></a>

```json
{
  "StartHourOfDay": {},
  "StartMinuteOfHour": {},
  "EndHourOfDay": {},
  "EndMinuteOfHour": {},
  "DaysOfWeek": {},
  "AverageUploadRateLimitInBitsPerSec": {},
  "AverageDownloadRateLimitInBitsPerSec": {}
}
```

 Describes a bandwidth rate limit interval for a gateway. A bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or both.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartHourOfDay|object|true|none|none|
|StartMinuteOfHour|object|true|none|none|
|EndHourOfDay|object|true|none|none|
|EndMinuteOfHour|object|true|none|none|
|DaysOfWeek|object|true|none|none|
|AverageUploadRateLimitInBitsPerSec|object|false|none|none|
|AverageDownloadRateLimitInBitsPerSec|object|false|none|none|

<h2 id="tocS_BandwidthRateLimitIntervals">BandwidthRateLimitIntervals</h2>
<!-- backwards compatibility -->
<a id="schemabandwidthratelimitintervals"></a>
<a id="schema_BandwidthRateLimitIntervals"></a>
<a id="tocSbandwidthratelimitintervals"></a>
<a id="tocsbandwidthratelimitintervals"></a>

```json
[
  {
    "StartHourOfDay": {},
    "StartMinuteOfHour": {},
    "EndHourOfDay": {},
    "EndMinuteOfHour": {},
    "DaysOfWeek": {},
    "AverageUploadRateLimitInBitsPerSec": {},
    "AverageDownloadRateLimitInBitsPerSec": {}
  }
]
```

<h2 id="tocS_BandwidthType">BandwidthType</h2>
<!-- backwards compatibility -->
<a id="schemabandwidthtype"></a>
<a id="schema_BandwidthType"></a>
<a id="tocSbandwidthtype"></a>
<a id="tocsbandwidthtype"></a>

```json
"string"
```

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean-1"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean-1"></a>
<a id="tocsboolean-1"></a>

```json
true
```

<h2 id="tocS_CacheStaleTimeoutInSeconds">CacheStaleTimeoutInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemacachestaletimeoutinseconds"></a>
<a id="schema_CacheStaleTimeoutInSeconds"></a>
<a id="tocScachestaletimeoutinseconds"></a>
<a id="tocscachestaletimeoutinseconds"></a>

```json
0
```

<h2 id="tocS_VolumeId">VolumeId</h2>
<!-- backwards compatibility -->
<a id="schemavolumeid"></a>
<a id="schema_VolumeId"></a>
<a id="tocSvolumeid"></a>
<a id="tocsvolumeid"></a>

```json
"stringstring"
```

<h2 id="tocS_VolumeType">VolumeType</h2>
<!-- backwards compatibility -->
<a id="schemavolumetype"></a>
<a id="schema_VolumeType"></a>
<a id="tocSvolumetype"></a>
<a id="tocsvolumetype"></a>

```json
"string"
```

<h2 id="tocS_VolumeStatus">VolumeStatus</h2>
<!-- backwards compatibility -->
<a id="schemavolumestatus"></a>
<a id="schema_VolumeStatus"></a>
<a id="tocSvolumestatus"></a>
<a id="tocsvolumestatus"></a>

```json
"string"
```

<h2 id="tocS_VolumeAttachmentStatus">VolumeAttachmentStatus</h2>
<!-- backwards compatibility -->
<a id="schemavolumeattachmentstatus"></a>
<a id="schema_VolumeAttachmentStatus"></a>
<a id="tocSvolumeattachmentstatus"></a>
<a id="tocsvolumeattachmentstatus"></a>

```json
"string"
```

<h2 id="tocS_long">long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_DoubleObject">DoubleObject</h2>
<!-- backwards compatibility -->
<a id="schemadoubleobject"></a>
<a id="schema_DoubleObject"></a>
<a id="tocSdoubleobject"></a>
<a id="tocsdoubleobject"></a>

```json
0
```

<h2 id="tocS_SnapshotId">SnapshotId</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotid"></a>
<a id="schema_SnapshotId"></a>
<a id="tocSsnapshotid"></a>
<a id="tocssnapshotid"></a>

```json
"string"
```

<h2 id="tocS_VolumeiSCSIAttributes">VolumeiSCSIAttributes</h2>
<!-- backwards compatibility -->
<a id="schemavolumeiscsiattributes"></a>
<a id="schema_VolumeiSCSIAttributes"></a>
<a id="tocSvolumeiscsiattributes"></a>
<a id="tocsvolumeiscsiattributes"></a>

```json
{
  "TargetARN": {},
  "NetworkInterfaceId": {},
  "NetworkInterfacePort": {},
  "LunNumber": {},
  "ChapEnabled": {}
}
```

Lists iSCSI information about a volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetARN|object|false|none|none|
|NetworkInterfaceId|object|false|none|none|
|NetworkInterfacePort|object|false|none|none|
|LunNumber|object|false|none|none|
|ChapEnabled|object|false|none|none|

<h2 id="tocS_CreatedDate">CreatedDate</h2>
<!-- backwards compatibility -->
<a id="schemacreateddate"></a>
<a id="schema_CreatedDate"></a>
<a id="tocScreateddate"></a>
<a id="tocscreateddate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_VolumeUsedInBytes">VolumeUsedInBytes</h2>
<!-- backwards compatibility -->
<a id="schemavolumeusedinbytes"></a>
<a id="schema_VolumeUsedInBytes"></a>
<a id="tocSvolumeusedinbytes"></a>
<a id="tocsvolumeusedinbytes"></a>

```json
0
```

<h2 id="tocS_KMSKey">KMSKey</h2>
<!-- backwards compatibility -->
<a id="schemakmskey"></a>
<a id="schema_KMSKey"></a>
<a id="tocSkmskey"></a>
<a id="tocskmskey"></a>

```json
"strings"
```

The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.

<h2 id="tocS_CachediSCSIVolume">CachediSCSIVolume</h2>
<!-- backwards compatibility -->
<a id="schemacachediscsivolume"></a>
<a id="schema_CachediSCSIVolume"></a>
<a id="tocScachediscsivolume"></a>
<a id="tocscachediscsivolume"></a>

```json
{
  "VolumeARN": {},
  "VolumeId": {},
  "VolumeType": {},
  "VolumeStatus": {},
  "VolumeAttachmentStatus": {},
  "VolumeSizeInBytes": {},
  "VolumeProgress": {},
  "SourceSnapshotId": {},
  "VolumeiSCSIAttributes": {
    "TargetARN": {},
    "NetworkInterfaceId": {},
    "NetworkInterfacePort": {},
    "LunNumber": {},
    "ChapEnabled": {}
  },
  "CreatedDate": {},
  "VolumeUsedInBytes": {},
  "KMSKey": "strings",
  "TargetName": {}
}
```

Describes an iSCSI cached volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|false|none|none|
|VolumeId|object|false|none|none|
|VolumeType|object|false|none|none|
|VolumeStatus|object|false|none|none|
|VolumeAttachmentStatus|object|false|none|none|
|VolumeSizeInBytes|object|false|none|none|
|VolumeProgress|object|false|none|none|
|SourceSnapshotId|object|false|none|none|
|VolumeiSCSIAttributes|object|false|none|none|
|CreatedDate|object|false|none|none|
|VolumeUsedInBytes|object|false|none|none|
|KMSKey|[KMSKey](#schemakmskey)|false|none|The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.|
|TargetName|object|false|none|none|

<h2 id="tocS_CachediSCSIVolumes">CachediSCSIVolumes</h2>
<!-- backwards compatibility -->
<a id="schemacachediscsivolumes"></a>
<a id="schema_CachediSCSIVolumes"></a>
<a id="tocScachediscsivolumes"></a>
<a id="tocscachediscsivolumes"></a>

```json
[
  {
    "VolumeARN": {},
    "VolumeId": {},
    "VolumeType": {},
    "VolumeStatus": {},
    "VolumeAttachmentStatus": {},
    "VolumeSizeInBytes": {},
    "VolumeProgress": {},
    "SourceSnapshotId": {},
    "VolumeiSCSIAttributes": {
      "TargetARN": {},
      "NetworkInterfaceId": {},
      "NetworkInterfacePort": {},
      "LunNumber": {},
      "ChapEnabled": {}
    },
    "CreatedDate": {},
    "VolumeUsedInBytes": {},
    "KMSKey": "strings",
    "TargetName": {}
  }
]
```

<h2 id="tocS_CaseSensitivity">CaseSensitivity</h2>
<!-- backwards compatibility -->
<a id="schemacasesensitivity"></a>
<a id="schema_CaseSensitivity"></a>
<a id="tocScasesensitivity"></a>
<a id="tocscasesensitivity"></a>

```json
"ClientSpecified"
```

<h2 id="tocS_ChapInfo">ChapInfo</h2>
<!-- backwards compatibility -->
<a id="schemachapinfo"></a>
<a id="schema_ChapInfo"></a>
<a id="tocSchapinfo"></a>
<a id="tocschapinfo"></a>

```json
{
  "TargetARN": {},
  "SecretToAuthenticateInitiator": {},
  "InitiatorName": {},
  "SecretToAuthenticateTarget": {}
}
```

Describes Challenge-Handshake Authentication Protocol (CHAP) information that supports authentication between your gateway and iSCSI initiators.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetARN|object|false|none|none|
|SecretToAuthenticateInitiator|object|false|none|none|
|InitiatorName|object|false|none|none|
|SecretToAuthenticateTarget|object|false|none|none|

<h2 id="tocS_ChapCredentials">ChapCredentials</h2>
<!-- backwards compatibility -->
<a id="schemachapcredentials"></a>
<a id="schema_ChapCredentials"></a>
<a id="tocSchapcredentials"></a>
<a id="tocschapcredentials"></a>

```json
[
  {
    "TargetARN": {},
    "SecretToAuthenticateInitiator": {},
    "InitiatorName": {},
    "SecretToAuthenticateTarget": {}
  }
]
```

<h2 id="tocS_ChapSecret">ChapSecret</h2>
<!-- backwards compatibility -->
<a id="schemachapsecret"></a>
<a id="schema_ChapSecret"></a>
<a id="tocSchapsecret"></a>
<a id="tocschapsecret"></a>

```json
"password"
```

<h2 id="tocS_IqnName">IqnName</h2>
<!-- backwards compatibility -->
<a id="schemaiqnname"></a>
<a id="schema_IqnName"></a>
<a id="tocSiqnname"></a>
<a id="tocsiqnname"></a>

```json
"string"
```

<h2 id="tocS_CloudWatchLogGroupARN">CloudWatchLogGroupARN</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchloggrouparn"></a>
<a id="schema_CloudWatchLogGroupARN"></a>
<a id="tocScloudwatchloggrouparn"></a>
<a id="tocscloudwatchloggrouparn"></a>

```json
"string"
```

<h2 id="tocS_NFSFileShareDefaults">NFSFileShareDefaults</h2>
<!-- backwards compatibility -->
<a id="schemanfsfilesharedefaults"></a>
<a id="schema_NFSFileShareDefaults"></a>
<a id="tocSnfsfilesharedefaults"></a>
<a id="tocsnfsfilesharedefaults"></a>

```json
{
  "FileMode": {},
  "DirectoryMode": {},
  "GroupId": {},
  "OwnerId": {}
}
```

Describes Network File System (NFS) file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported for S3 File Gateways.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileMode|object|false|none|none|
|DirectoryMode|object|false|none|none|
|GroupId|object|false|none|none|
|OwnerId|object|false|none|none|

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
"stringstringstringst"
```

The ARN of the IAM role that an S3 File Gateway assumes when it accesses the underlying storage.

<h2 id="tocS_LocationARN">LocationARN</h2>
<!-- backwards compatibility -->
<a id="schemalocationarn"></a>
<a id="schema_LocationARN"></a>
<a id="tocSlocationarn"></a>
<a id="tocslocationarn"></a>

```json
"stringstringstri"
```

<p>A custom ARN for the backend storage used for storing data for file shares. It includes a resource ARN with an optional prefix concatenation. The prefix must end with a forward slash (/).</p> <note> <p>You can specify LocationARN as a bucket ARN, access point ARN or access point alias, as shown in the following examples.</p> <p>Bucket ARN:</p> <p> <code>arn:aws:s3:::my-bucket/prefix/</code> </p> <p>Access point ARN:</p> <p> <code>arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/</code> </p> <p>If you specify an access point, the bucket policy must be configured to delegate access control to the access point. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control">Delegating access control to access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Access point alias:</p> <p> <code>test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias</code> </p> </note>

<h2 id="tocS_StorageClass">StorageClass</h2>
<!-- backwards compatibility -->
<a id="schemastorageclass"></a>
<a id="schema_StorageClass"></a>
<a id="tocSstorageclass"></a>
<a id="tocsstorageclass"></a>

```json
"string"
```

<p/>

<h2 id="tocS_ObjectACL">ObjectACL</h2>
<!-- backwards compatibility -->
<a id="schemaobjectacl"></a>
<a id="schema_ObjectACL"></a>
<a id="tocSobjectacl"></a>
<a id="tocsobjectacl"></a>

```json
"private"
```

A value that sets the access control list (ACL) permission for objects in the S3 bucket that an S3 File Gateway puts objects into. The default value is <code>private</code>.

<h2 id="tocS_FileShareClientList">FileShareClientList</h2>
<!-- backwards compatibility -->
<a id="schemafileshareclientlist"></a>
<a id="schema_FileShareClientList"></a>
<a id="tocSfileshareclientlist"></a>
<a id="tocsfileshareclientlist"></a>

```json
[
  "string"
]
```

The list of clients that are allowed to access the S3 File Gateway. The list must contain either valid IP addresses or valid CIDR blocks.

<h2 id="tocS_Squash">Squash</h2>
<!-- backwards compatibility -->
<a id="schemasquash"></a>
<a id="schema_Squash"></a>
<a id="tocSsquash"></a>
<a id="tocssquash"></a>

```json
"string"
```

<p>The user mapped to anonymous user. Valid options are the following:</p> <ul> <li> <p> <code>RootSquash</code>: Only root is mapped to anonymous user.</p> </li> <li> <p> <code>NoSquash</code>: No one is mapped to anonymous user.</p> </li> <li> <p> <code>AllSquash</code>: Everyone is mapped to anonymous user.</p> </li> </ul>

<h2 id="tocS_FileShareName">FileShareName</h2>
<!-- backwards compatibility -->
<a id="schemafilesharename"></a>
<a id="schema_FileShareName"></a>
<a id="tocSfilesharename"></a>
<a id="tocsfilesharename"></a>

```json
"string"
```

<h2 id="tocS_NotificationPolicy">NotificationPolicy</h2>
<!-- backwards compatibility -->
<a id="schemanotificationpolicy"></a>
<a id="schema_NotificationPolicy"></a>
<a id="tocSnotificationpolicy"></a>
<a id="tocsnotificationpolicy"></a>

```json
"string"
```

<h2 id="tocS_DNSHostName">DNSHostName</h2>
<!-- backwards compatibility -->
<a id="schemadnshostname"></a>
<a id="schema_DNSHostName"></a>
<a id="tocSdnshostname"></a>
<a id="tocsdnshostname"></a>

```json
"string"
```

<h2 id="tocS_FileShareARN">FileShareARN</h2>
<!-- backwards compatibility -->
<a id="schemafilesharearn"></a>
<a id="schema_FileShareARN"></a>
<a id="tocSfilesharearn"></a>
<a id="tocsfilesharearn"></a>

```json
"stringstringstringstringstringstringstringstringst"
```

The Amazon Resource Name (ARN) of the file share.

<h2 id="tocS_UserList">UserList</h2>
<!-- backwards compatibility -->
<a id="schemauserlist"></a>
<a id="schema_UserList"></a>
<a id="tocSuserlist"></a>
<a id="tocsuserlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SnapshotDescription">SnapshotDescription</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotdescription"></a>
<a id="schema_SnapshotDescription"></a>
<a id="tocSsnapshotdescription"></a>
<a id="tocssnapshotdescription"></a>

```json
"string"
```

<h2 id="tocS_string">string</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_string"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_PoolName">PoolName</h2>
<!-- backwards compatibility -->
<a id="schemapoolname"></a>
<a id="schema_PoolName"></a>
<a id="tocSpoolname"></a>
<a id="tocspoolname"></a>

```json
"string"
```

<h2 id="tocS_TapeStorageClass">TapeStorageClass</h2>
<!-- backwards compatibility -->
<a id="schematapestorageclass"></a>
<a id="schema_TapeStorageClass"></a>
<a id="tocStapestorageclass"></a>
<a id="tocstapestorageclass"></a>

```json
"DEEP_ARCHIVE"
```

<h2 id="tocS_RetentionLockType">RetentionLockType</h2>
<!-- backwards compatibility -->
<a id="schemaretentionlocktype"></a>
<a id="schema_RetentionLockType"></a>
<a id="tocSretentionlocktype"></a>
<a id="tocsretentionlocktype"></a>

```json
"COMPLIANCE"
```

<h2 id="tocS_RetentionLockTimeInDays">RetentionLockTimeInDays</h2>
<!-- backwards compatibility -->
<a id="schemaretentionlocktimeindays"></a>
<a id="schema_RetentionLockTimeInDays"></a>
<a id="tocSretentionlocktimeindays"></a>
<a id="tocsretentionlocktimeindays"></a>

```json
0
```

<h2 id="tocS_PoolARN">PoolARN</h2>
<!-- backwards compatibility -->
<a id="schemapoolarn"></a>
<a id="schema_PoolARN"></a>
<a id="tocSpoolarn"></a>
<a id="tocspoolarn"></a>

```json
"stringstringstringstringstringstringstringstringst"
```

<h2 id="tocS_TapeBarcode">TapeBarcode</h2>
<!-- backwards compatibility -->
<a id="schematapebarcode"></a>
<a id="schema_TapeBarcode"></a>
<a id="tocStapebarcode"></a>
<a id="tocstapebarcode"></a>

```json
"string"
```

<h2 id="tocS_NumTapesToCreate">NumTapesToCreate</h2>
<!-- backwards compatibility -->
<a id="schemanumtapestocreate"></a>
<a id="schema_NumTapesToCreate"></a>
<a id="tocSnumtapestocreate"></a>
<a id="tocsnumtapestocreate"></a>

```json
1
```

<h2 id="tocS_TapeARNs">TapeARNs</h2>
<!-- backwards compatibility -->
<a id="schematapearns"></a>
<a id="schema_TapeARNs"></a>
<a id="tocStapearns"></a>
<a id="tocstapearns"></a>

```json
[
  "stringstringstringstringstringstringstringstringst"
]
```

The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't specify a tape ARN, the response lists all tapes in both your VTL and VTS.

<h2 id="tocS_DayOfMonth">DayOfMonth</h2>
<!-- backwards compatibility -->
<a id="schemadayofmonth"></a>
<a id="schema_DayOfMonth"></a>
<a id="tocSdayofmonth"></a>
<a id="tocsdayofmonth"></a>

```json
1
```

<h2 id="tocS_DayOfWeek">DayOfWeek</h2>
<!-- backwards compatibility -->
<a id="schemadayofweek"></a>
<a id="schema_DayOfWeek"></a>
<a id="tocSdayofweek"></a>
<a id="tocsdayofweek"></a>

```json
0
```

<h2 id="tocS_DeprecationDate">DeprecationDate</h2>
<!-- backwards compatibility -->
<a id="schemadeprecationdate"></a>
<a id="schema_DeprecationDate"></a>
<a id="tocSdeprecationdate"></a>
<a id="tocsdeprecationdate"></a>

```json
"string"
```

<h2 id="tocS_Time">Time</h2>
<!-- backwards compatibility -->
<a id="schematime"></a>
<a id="schema_Time"></a>
<a id="tocStime"></a>
<a id="tocstime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_double">double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_VolumeARNs">VolumeARNs</h2>
<!-- backwards compatibility -->
<a id="schemavolumearns"></a>
<a id="schema_VolumeARNs"></a>
<a id="tocSvolumearns"></a>
<a id="tocsvolumearns"></a>

```json
[
  "stringstringstringstringstringstringstringstringst"
]
```

<h2 id="tocS_FileSystemAssociationARNList">FileSystemAssociationARNList</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemassociationarnlist"></a>
<a id="schema_FileSystemAssociationARNList"></a>
<a id="tocSfilesystemassociationarnlist"></a>
<a id="tocsfilesystemassociationarnlist"></a>

```json
[
  "stringstringstringstringstringstringstringstringst"
]
```

<h2 id="tocS_FileSystemAssociationInfoList">FileSystemAssociationInfoList</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemassociationinfolist"></a>
<a id="schema_FileSystemAssociationInfoList"></a>
<a id="tocSfilesystemassociationinfolist"></a>
<a id="tocsfilesystemassociationinfolist"></a>

```json
[
  {
    "FileSystemAssociationARN": {},
    "LocationARN": {},
    "FileSystemAssociationStatus": {},
    "AuditDestinationARN": {},
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "Tags": {},
    "CacheAttributes": {
      "CacheStaleTimeoutInSeconds": {}
    },
    "EndpointNetworkConfiguration": {
      "IpAddresses": {}
    },
    "FileSystemAssociationStatusDetails": {}
  }
]
```

<h2 id="tocS_GatewayId">GatewayId</h2>
<!-- backwards compatibility -->
<a id="schemagatewayid"></a>
<a id="schema_GatewayId"></a>
<a id="tocSgatewayid"></a>
<a id="tocsgatewayid"></a>

```json
"stringstring"
```

<h2 id="tocS_GatewayState">GatewayState</h2>
<!-- backwards compatibility -->
<a id="schemagatewaystate"></a>
<a id="schema_GatewayState"></a>
<a id="tocSgatewaystate"></a>
<a id="tocsgatewaystate"></a>

```json
"string"
```

<h2 id="tocS_GatewayNetworkInterfaces">GatewayNetworkInterfaces</h2>
<!-- backwards compatibility -->
<a id="schemagatewaynetworkinterfaces"></a>
<a id="schema_GatewayNetworkInterfaces"></a>
<a id="tocSgatewaynetworkinterfaces"></a>
<a id="tocsgatewaynetworkinterfaces"></a>

```json
[
  {
    "Ipv4Address": {},
    "MacAddress": {},
    "Ipv6Address": {}
  }
]
```

<h2 id="tocS_NextUpdateAvailabilityDate">NextUpdateAvailabilityDate</h2>
<!-- backwards compatibility -->
<a id="schemanextupdateavailabilitydate"></a>
<a id="schema_NextUpdateAvailabilityDate"></a>
<a id="tocSnextupdateavailabilitydate"></a>
<a id="tocsnextupdateavailabilitydate"></a>

```json
"string"
```

<h2 id="tocS_LastSoftwareUpdate">LastSoftwareUpdate</h2>
<!-- backwards compatibility -->
<a id="schemalastsoftwareupdate"></a>
<a id="schema_LastSoftwareUpdate"></a>
<a id="tocSlastsoftwareupdate"></a>
<a id="tocslastsoftwareupdate"></a>

```json
"string"
```

<h2 id="tocS_Ec2InstanceId">Ec2InstanceId</h2>
<!-- backwards compatibility -->
<a id="schemaec2instanceid"></a>
<a id="schema_Ec2InstanceId"></a>
<a id="tocSec2instanceid"></a>
<a id="tocsec2instanceid"></a>

```json
"string"
```

<h2 id="tocS_Ec2InstanceRegion">Ec2InstanceRegion</h2>
<!-- backwards compatibility -->
<a id="schemaec2instanceregion"></a>
<a id="schema_Ec2InstanceRegion"></a>
<a id="tocSec2instanceregion"></a>
<a id="tocsec2instanceregion"></a>

```json
"string"
```

<h2 id="tocS_HostEnvironment">HostEnvironment</h2>
<!-- backwards compatibility -->
<a id="schemahostenvironment"></a>
<a id="schema_HostEnvironment"></a>
<a id="tocShostenvironment"></a>
<a id="tocshostenvironment"></a>

```json
"VMWARE"
```

<h2 id="tocS_EndpointType">EndpointType</h2>
<!-- backwards compatibility -->
<a id="schemaendpointtype"></a>
<a id="schema_EndpointType"></a>
<a id="tocSendpointtype"></a>
<a id="tocsendpointtype"></a>

```json
"string"
```

<h2 id="tocS_SoftwareUpdatesEndDate">SoftwareUpdatesEndDate</h2>
<!-- backwards compatibility -->
<a id="schemasoftwareupdatesenddate"></a>
<a id="schema_SoftwareUpdatesEndDate"></a>
<a id="tocSsoftwareupdatesenddate"></a>
<a id="tocssoftwareupdatesenddate"></a>

```json
"string"
```

<h2 id="tocS_GatewayCapacity">GatewayCapacity</h2>
<!-- backwards compatibility -->
<a id="schemagatewaycapacity"></a>
<a id="schema_GatewayCapacity"></a>
<a id="tocSgatewaycapacity"></a>
<a id="tocsgatewaycapacity"></a>

```json
"Small"
```

<h2 id="tocS_SupportedGatewayCapacities">SupportedGatewayCapacities</h2>
<!-- backwards compatibility -->
<a id="schemasupportedgatewaycapacities"></a>
<a id="schema_SupportedGatewayCapacities"></a>
<a id="tocSsupportedgatewaycapacities"></a>
<a id="tocssupportedgatewaycapacities"></a>

```json
[
  "Small"
]
```

<h2 id="tocS_HostEnvironmentId">HostEnvironmentId</h2>
<!-- backwards compatibility -->
<a id="schemahostenvironmentid"></a>
<a id="schema_HostEnvironmentId"></a>
<a id="tocShostenvironmentid"></a>
<a id="tocshostenvironmentid"></a>

```json
"string"
```

<h2 id="tocS_FileShareARNList">FileShareARNList</h2>
<!-- backwards compatibility -->
<a id="schemafilesharearnlist"></a>
<a id="schema_FileShareARNList"></a>
<a id="tocSfilesharearnlist"></a>
<a id="tocsfilesharearnlist"></a>

```json
[
  "stringstringstringstringstringstringstringstringst"
]
```

<h2 id="tocS_NFSFileShareInfoList">NFSFileShareInfoList</h2>
<!-- backwards compatibility -->
<a id="schemanfsfileshareinfolist"></a>
<a id="schema_NFSFileShareInfoList"></a>
<a id="tocSnfsfileshareinfolist"></a>
<a id="tocsnfsfileshareinfolist"></a>

```json
[
  {
    "NFSFileShareDefaults": {
      "FileMode": {},
      "DirectoryMode": {},
      "GroupId": {},
      "OwnerId": {}
    },
    "FileShareARN": "stringstringstringstringstringstringstringstringst",
    "FileShareId": "stringstring",
    "FileShareStatus": "string",
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "KMSEncrypted": {},
    "KMSKey": "strings",
    "Path": "string",
    "Role": "stringstringstringst",
    "LocationARN": "stringstringstri",
    "DefaultStorageClass": {},
    "ObjectACL": "private",
    "ClientList": [
      "string"
    ],
    "Squash": "string",
    "ReadOnly": {},
    "GuessMIMETypeEnabled": {},
    "RequesterPays": {},
    "Tags": {},
    "FileShareName": {},
    "CacheAttributes": {
      "CacheStaleTimeoutInSeconds": {}
    },
    "NotificationPolicy": {},
    "VPCEndpointDNSName": {},
    "BucketRegion": {},
    "AuditDestinationARN": {}
  }
]
```

<h2 id="tocS_SMBFileShareInfoList">SMBFileShareInfoList</h2>
<!-- backwards compatibility -->
<a id="schemasmbfileshareinfolist"></a>
<a id="schema_SMBFileShareInfoList"></a>
<a id="tocSsmbfileshareinfolist"></a>
<a id="tocssmbfileshareinfolist"></a>

```json
[
  {
    "FileShareARN": "stringstringstringstringstringstringstringstringst",
    "FileShareId": "stringstring",
    "FileShareStatus": "string",
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "KMSEncrypted": {},
    "KMSKey": "strings",
    "Path": {},
    "Role": "stringstringstringst",
    "LocationARN": "stringstringstri",
    "DefaultStorageClass": {},
    "ObjectACL": "private",
    "ReadOnly": {},
    "GuessMIMETypeEnabled": {},
    "RequesterPays": {},
    "SMBACLEnabled": {},
    "AccessBasedEnumeration": {},
    "AdminUserList": {},
    "ValidUserList": {},
    "InvalidUserList": {},
    "AuditDestinationARN": {},
    "Authentication": "string",
    "CaseSensitivity": {},
    "Tags": {},
    "FileShareName": {},
    "CacheAttributes": {
      "CacheStaleTimeoutInSeconds": {}
    },
    "NotificationPolicy": {},
    "VPCEndpointDNSName": {},
    "BucketRegion": {},
    "OplocksEnabled": {}
  }
]
```

<h2 id="tocS_DomainName">DomainName</h2>
<!-- backwards compatibility -->
<a id="schemadomainname"></a>
<a id="schema_DomainName"></a>
<a id="tocSdomainname"></a>
<a id="tocsdomainname"></a>

```json
"string"
```

<h2 id="tocS_SMBSecurityStrategy">SMBSecurityStrategy</h2>
<!-- backwards compatibility -->
<a id="schemasmbsecuritystrategy"></a>
<a id="schema_SMBSecurityStrategy"></a>
<a id="tocSsmbsecuritystrategy"></a>
<a id="tocssmbsecuritystrategy"></a>

```json
"ClientSpecified"
```

<h2 id="tocS_SMBLocalGroups">SMBLocalGroups</h2>
<!-- backwards compatibility -->
<a id="schemasmblocalgroups"></a>
<a id="schema_SMBLocalGroups"></a>
<a id="tocSsmblocalgroups"></a>
<a id="tocssmblocalgroups"></a>

```json
{
  "GatewayAdmins": {}
}
```

A list of Active Directory users and groups that have special permissions for SMB file shares on the gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayAdmins|object|false|none|none|

<h2 id="tocS_RecurrenceInHours">RecurrenceInHours</h2>
<!-- backwards compatibility -->
<a id="schemarecurrenceinhours"></a>
<a id="schema_RecurrenceInHours"></a>
<a id="tocSrecurrenceinhours"></a>
<a id="tocsrecurrenceinhours"></a>

```json
1
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

<h2 id="tocS_StorediSCSIVolumes">StorediSCSIVolumes</h2>
<!-- backwards compatibility -->
<a id="schemastorediscsivolumes"></a>
<a id="schema_StorediSCSIVolumes"></a>
<a id="tocSstorediscsivolumes"></a>
<a id="tocsstorediscsivolumes"></a>

```json
[
  {
    "VolumeARN": {},
    "VolumeId": {},
    "VolumeType": {},
    "VolumeStatus": {},
    "VolumeAttachmentStatus": {},
    "VolumeSizeInBytes": {},
    "VolumeProgress": {},
    "VolumeDiskId": {},
    "SourceSnapshotId": {},
    "PreservedExistingData": {},
    "VolumeiSCSIAttributes": {
      "TargetARN": {},
      "NetworkInterfaceId": {},
      "NetworkInterfacePort": {},
      "LunNumber": {},
      "ChapEnabled": {}
    },
    "CreatedDate": {},
    "VolumeUsedInBytes": {},
    "KMSKey": "strings",
    "TargetName": {}
  }
]
```

<h2 id="tocS_Marker">Marker</h2>
<!-- backwards compatibility -->
<a id="schemamarker"></a>
<a id="schema_Marker"></a>
<a id="tocSmarker"></a>
<a id="tocsmarker"></a>

```json
"string"
```

<h2 id="tocS_PositiveIntObject">PositiveIntObject</h2>
<!-- backwards compatibility -->
<a id="schemapositiveintobject"></a>
<a id="schema_PositiveIntObject"></a>
<a id="tocSpositiveintobject"></a>
<a id="tocspositiveintobject"></a>

```json
1
```

<h2 id="tocS_TapeArchives">TapeArchives</h2>
<!-- backwards compatibility -->
<a id="schematapearchives"></a>
<a id="schema_TapeArchives"></a>
<a id="tocStapearchives"></a>
<a id="tocstapearchives"></a>

```json
[
  {
    "TapeARN": {},
    "TapeBarcode": {},
    "TapeCreatedDate": {},
    "TapeSizeInBytes": {},
    "CompletionTime": {},
    "RetrievedTo": {},
    "TapeStatus": {},
    "TapeUsedInBytes": {},
    "KMSKey": "strings",
    "PoolId": {},
    "Worm": {},
    "RetentionStartDate": {},
    "PoolEntryDate": {}
  }
]
```

<h2 id="tocS_TapeRecoveryPointInfos">TapeRecoveryPointInfos</h2>
<!-- backwards compatibility -->
<a id="schemataperecoverypointinfos"></a>
<a id="schema_TapeRecoveryPointInfos"></a>
<a id="tocStaperecoverypointinfos"></a>
<a id="tocstaperecoverypointinfos"></a>

```json
[
  {
    "TapeARN": {},
    "TapeRecoveryPointTime": {},
    "TapeSizeInBytes": {},
    "TapeStatus": {}
  }
]
```

<h2 id="tocS_Tapes">Tapes</h2>
<!-- backwards compatibility -->
<a id="schematapes"></a>
<a id="schema_Tapes"></a>
<a id="tocStapes"></a>
<a id="tocstapes"></a>

```json
[
  {
    "TapeARN": {},
    "TapeBarcode": {},
    "TapeCreatedDate": {},
    "TapeSizeInBytes": {},
    "TapeStatus": {},
    "VTLDevice": {},
    "Progress": {},
    "TapeUsedInBytes": {},
    "KMSKey": "strings",
    "PoolId": {},
    "Worm": {},
    "RetentionStartDate": {},
    "PoolEntryDate": {}
  }
]
```

<h2 id="tocS_VTLDeviceARNs">VTLDeviceARNs</h2>
<!-- backwards compatibility -->
<a id="schemavtldevicearns"></a>
<a id="schema_VTLDeviceARNs"></a>
<a id="tocSvtldevicearns"></a>
<a id="tocsvtldevicearns"></a>

```json
[
  "stringstringstringstringstringstringstringstringst"
]
```

<h2 id="tocS_VTLDevices">VTLDevices</h2>
<!-- backwards compatibility -->
<a id="schemavtldevices"></a>
<a id="schema_VTLDevices"></a>
<a id="tocSvtldevices"></a>
<a id="tocsvtldevices"></a>

```json
[
  {
    "VTLDeviceARN": {},
    "VTLDeviceType": {},
    "VTLDeviceVendor": {},
    "VTLDeviceProductIdentifier": {},
    "DeviceiSCSIAttributes": {
      "TargetARN": {},
      "NetworkInterfaceId": {},
      "NetworkInterfacePort": {},
      "ChapEnabled": {}
    }
  }
]
```

<h2 id="tocS_DeviceType">DeviceType</h2>
<!-- backwards compatibility -->
<a id="schemadevicetype"></a>
<a id="schema_DeviceType"></a>
<a id="tocSdevicetype"></a>
<a id="tocsdevicetype"></a>

```json
"string"
```

<h2 id="tocS_integer">integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_DeviceiSCSIAttributes">DeviceiSCSIAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadeviceiscsiattributes"></a>
<a id="schema_DeviceiSCSIAttributes"></a>
<a id="tocSdeviceiscsiattributes"></a>
<a id="tocsdeviceiscsiattributes"></a>

```json
{
  "TargetARN": {},
  "NetworkInterfaceId": {},
  "NetworkInterfacePort": {},
  "ChapEnabled": {}
}
```

Lists iSCSI information about a VTL device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetARN|object|false|none|none|
|NetworkInterfaceId|object|false|none|none|
|NetworkInterfacePort|object|false|none|none|
|ChapEnabled|object|false|none|none|

<h2 id="tocS_DiskAllocationType">DiskAllocationType</h2>
<!-- backwards compatibility -->
<a id="schemadiskallocationtype"></a>
<a id="schema_DiskAllocationType"></a>
<a id="tocSdiskallocationtype"></a>
<a id="tocsdiskallocationtype"></a>

```json
"string"
```

<p>One of the <code>DiskAllocationType</code> enumeration values that identifies how a local disk is used.</p> <p>Valid Values: <code>UPLOAD_BUFFER</code> | <code>CACHE_STORAGE</code> </p>

<h2 id="tocS_DiskAttributeList">DiskAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemadiskattributelist"></a>
<a id="schema_DiskAttributeList"></a>
<a id="tocSdiskattributelist"></a>
<a id="tocsdiskattributelist"></a>

```json
[
  "string"
]
```

A list of values that represents attributes of a local disk.

<h2 id="tocS_Disk">Disk</h2>
<!-- backwards compatibility -->
<a id="schemadisk"></a>
<a id="schema_Disk"></a>
<a id="tocSdisk"></a>
<a id="tocsdisk"></a>

```json
{
  "DiskId": {},
  "DiskPath": {},
  "DiskNode": {},
  "DiskStatus": {},
  "DiskSizeInBytes": {},
  "DiskAllocationType": "string",
  "DiskAllocationResource": {},
  "DiskAttributeList": [
    "string"
  ]
}
```

Represents a gateway's local disk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DiskId|object|false|none|none|
|DiskPath|object|false|none|none|
|DiskNode|object|false|none|none|
|DiskStatus|object|false|none|none|
|DiskSizeInBytes|object|false|none|none|
|DiskAllocationType|[DiskAllocationType](#schemadiskallocationtype)|false|none|<p>One of the <code>DiskAllocationType</code> enumeration values that identifies how a local disk is used.</p> <p>Valid Values: <code>UPLOAD_BUFFER</code> \| <code>CACHE_STORAGE</code> </p>|
|DiskAllocationResource|object|false|none|none|
|DiskAttributeList|[DiskAttributeList](#schemadiskattributelist)|false|none|A list of values that represents attributes of a local disk.|

<h2 id="tocS_DiskAttribute">DiskAttribute</h2>
<!-- backwards compatibility -->
<a id="schemadiskattribute"></a>
<a id="schema_DiskAttribute"></a>
<a id="tocSdiskattribute"></a>
<a id="tocsdiskattribute"></a>

```json
"string"
```

<h2 id="tocS_Disks">Disks</h2>
<!-- backwards compatibility -->
<a id="schemadisks"></a>
<a id="schema_Disks"></a>
<a id="tocSdisks"></a>
<a id="tocsdisks"></a>

```json
[
  {
    "DiskId": {},
    "DiskPath": {},
    "DiskNode": {},
    "DiskStatus": {},
    "DiskSizeInBytes": {},
    "DiskAllocationType": "string",
    "DiskAllocationResource": {},
    "DiskAttributeList": [
      "string"
    ]
  }
]
```

<h2 id="tocS_IpAddressList">IpAddressList</h2>
<!-- backwards compatibility -->
<a id="schemaipaddresslist"></a>
<a id="schema_IpAddressList"></a>
<a id="tocSipaddresslist"></a>
<a id="tocsipaddresslist"></a>

```json
[
  "strings"
]
```

<h2 id="tocS_IPV4AddressCIDR">IPV4AddressCIDR</h2>
<!-- backwards compatibility -->
<a id="schemaipv4addresscidr"></a>
<a id="schema_IPV4AddressCIDR"></a>
<a id="tocSipv4addresscidr"></a>
<a id="tocsipv4addresscidr"></a>

```json
"string"
```

<h2 id="tocS_FileShareId">FileShareId</h2>
<!-- backwards compatibility -->
<a id="schemafileshareid"></a>
<a id="schema_FileShareId"></a>
<a id="tocSfileshareid"></a>
<a id="tocsfileshareid"></a>

```json
"stringstring"
```

The ID of the file share.

<h2 id="tocS_FileShareType">FileShareType</h2>
<!-- backwards compatibility -->
<a id="schemafilesharetype"></a>
<a id="schema_FileShareType"></a>
<a id="tocSfilesharetype"></a>
<a id="tocsfilesharetype"></a>

```json
"NFS"
```

The type of the file share.

<h2 id="tocS_FileShareStatus">FileShareStatus</h2>
<!-- backwards compatibility -->
<a id="schemafilesharestatus"></a>
<a id="schema_FileShareStatus"></a>
<a id="tocSfilesharestatus"></a>
<a id="tocsfilesharestatus"></a>

```json
"string"
```

<p>The status of the file share.</p> <p>Valid Values: <code>CREATING</code> | <code>UPDATING</code> | <code>AVAILABLE</code> | <code>DELETING</code> </p>

<h2 id="tocS_FileShareInfo">FileShareInfo</h2>
<!-- backwards compatibility -->
<a id="schemafileshareinfo"></a>
<a id="schema_FileShareInfo"></a>
<a id="tocSfileshareinfo"></a>
<a id="tocsfileshareinfo"></a>

```json
{
  "FileShareType": "NFS",
  "FileShareARN": "stringstringstringstringstringstringstringstringst",
  "FileShareId": "stringstring",
  "FileShareStatus": "string",
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

Describes a file share. Only supported S3 File Gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileShareType|[FileShareType](#schemafilesharetype)|false|none|The type of the file share.|
|FileShareARN|[FileShareARN](#schemafilesharearn)|false|none|The Amazon Resource Name (ARN) of the file share.|
|FileShareId|[FileShareId](#schemafileshareid)|false|none|The ID of the file share.|
|FileShareStatus|[FileShareStatus](#schemafilesharestatus)|false|none|<p>The status of the file share.</p> <p>Valid Values: <code>CREATING</code> \| <code>UPDATING</code> \| <code>AVAILABLE</code> \| <code>DELETING</code> </p>|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

#### Enumerated Values

|Property|Value|
|---|---|
|FileShareType|NFS|
|FileShareType|SMB|

<h2 id="tocS_FileShareInfoList">FileShareInfoList</h2>
<!-- backwards compatibility -->
<a id="schemafileshareinfolist"></a>
<a id="schema_FileShareInfoList"></a>
<a id="tocSfileshareinfolist"></a>
<a id="tocsfileshareinfolist"></a>

```json
[
  {
    "FileShareType": "NFS",
    "FileShareARN": "stringstringstringstringstringstringstringstringst",
    "FileShareId": "stringstring",
    "FileShareStatus": "string",
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }
]
```

<h2 id="tocS_FileSystemAssociationId">FileSystemAssociationId</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemassociationid"></a>
<a id="schema_FileSystemAssociationId"></a>
<a id="tocSfilesystemassociationid"></a>
<a id="tocsfilesystemassociationid"></a>

```json
"stringstri"
```

<h2 id="tocS_FileSystemAssociationStatus">FileSystemAssociationStatus</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemassociationstatus"></a>
<a id="schema_FileSystemAssociationStatus"></a>
<a id="tocSfilesystemassociationstatus"></a>
<a id="tocsfilesystemassociationstatus"></a>

```json
"string"
```

<h2 id="tocS_FileSystemAssociationStatusDetails">FileSystemAssociationStatusDetails</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemassociationstatusdetails"></a>
<a id="schema_FileSystemAssociationStatusDetails"></a>
<a id="tocSfilesystemassociationstatusdetails"></a>
<a id="tocsfilesystemassociationstatusdetails"></a>

```json
[
  {
    "ErrorCode": {}
  }
]
```

<h2 id="tocS_FileSystemAssociationInfo">FileSystemAssociationInfo</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemassociationinfo"></a>
<a id="schema_FileSystemAssociationInfo"></a>
<a id="tocSfilesystemassociationinfo"></a>
<a id="tocsfilesystemassociationinfo"></a>

```json
{
  "FileSystemAssociationARN": {},
  "LocationARN": {},
  "FileSystemAssociationStatus": {},
  "AuditDestinationARN": {},
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "Tags": {},
  "CacheAttributes": {
    "CacheStaleTimeoutInSeconds": {}
  },
  "EndpointNetworkConfiguration": {
    "IpAddresses": {}
  },
  "FileSystemAssociationStatusDetails": {}
}
```

Describes the object returned by <code>DescribeFileSystemAssociations</code> that describes a created file system association.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemAssociationARN|object|false|none|none|
|LocationARN|object|false|none|none|
|FileSystemAssociationStatus|object|false|none|none|
|AuditDestinationARN|object|false|none|none|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|Tags|object|false|none|none|
|CacheAttributes|[CacheAttributes](#schemacacheattributes)|false|none|The refresh cache information for the file share or FSx file systems.|
|EndpointNetworkConfiguration|object|false|none|none|
|FileSystemAssociationStatusDetails|object|false|none|none|

<h2 id="tocS_FileSystemAssociationSyncErrorCode">FileSystemAssociationSyncErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemassociationsyncerrorcode"></a>
<a id="schema_FileSystemAssociationSyncErrorCode"></a>
<a id="tocSfilesystemassociationsyncerrorcode"></a>
<a id="tocsfilesystemassociationsyncerrorcode"></a>

```json
"string"
```

<h2 id="tocS_FileSystemAssociationStatusDetail">FileSystemAssociationStatusDetail</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemassociationstatusdetail"></a>
<a id="schema_FileSystemAssociationStatusDetail"></a>
<a id="tocSfilesystemassociationstatusdetail"></a>
<a id="tocsfilesystemassociationstatusdetail"></a>

```json
{
  "ErrorCode": {}
}
```

Detailed information on file system association status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|

<h2 id="tocS_FileSystemAssociationSummary">FileSystemAssociationSummary</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemassociationsummary"></a>
<a id="schema_FileSystemAssociationSummary"></a>
<a id="tocSfilesystemassociationsummary"></a>
<a id="tocsfilesystemassociationsummary"></a>

```json
{
  "FileSystemAssociationId": {},
  "FileSystemAssociationARN": {},
  "FileSystemAssociationStatus": {},
  "GatewayARN": "stringstringstringstringstringstringstringstringst"
}
```

Gets the summary returned by <code>ListFileSystemAssociation</code>, which is a summary of a created file system association.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemAssociationId|object|false|none|none|
|FileSystemAssociationARN|object|false|none|none|
|FileSystemAssociationStatus|object|false|none|none|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|

<h2 id="tocS_FileSystemAssociationSummaryList">FileSystemAssociationSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemassociationsummarylist"></a>
<a id="schema_FileSystemAssociationSummaryList"></a>
<a id="tocSfilesystemassociationsummarylist"></a>
<a id="tocsfilesystemassociationsummarylist"></a>

```json
[
  {
    "FileSystemAssociationId": {},
    "FileSystemAssociationARN": {},
    "FileSystemAssociationStatus": {},
    "GatewayARN": "stringstringstringstringstringstringstringstringst"
  }
]
```

<h2 id="tocS_Folder">Folder</h2>
<!-- backwards compatibility -->
<a id="schemafolder"></a>
<a id="schema_Folder"></a>
<a id="tocSfolder"></a>
<a id="tocsfolder"></a>

```json
"string"
```

<h2 id="tocS_FolderList">FolderList</h2>
<!-- backwards compatibility -->
<a id="schemafolderlist"></a>
<a id="schema_FolderList"></a>
<a id="tocSfolderlist"></a>
<a id="tocsfolderlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GatewayOperationalState">GatewayOperationalState</h2>
<!-- backwards compatibility -->
<a id="schemagatewayoperationalstate"></a>
<a id="schema_GatewayOperationalState"></a>
<a id="tocSgatewayoperationalstate"></a>
<a id="tocsgatewayoperationalstate"></a>

```json
"string"
```

<h2 id="tocS_GatewayInfo">GatewayInfo</h2>
<!-- backwards compatibility -->
<a id="schemagatewayinfo"></a>
<a id="schema_GatewayInfo"></a>
<a id="tocSgatewayinfo"></a>
<a id="tocsgatewayinfo"></a>

```json
{
  "GatewayId": {},
  "GatewayARN": {},
  "GatewayType": {},
  "GatewayOperationalState": {},
  "GatewayName": {},
  "Ec2InstanceId": {},
  "Ec2InstanceRegion": {},
  "HostEnvironment": {},
  "HostEnvironmentId": {}
}
```

Describes a gateway object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayId|object|false|none|none|
|GatewayARN|object|false|none|none|
|GatewayType|object|false|none|none|
|GatewayOperationalState|object|false|none|none|
|GatewayName|object|false|none|none|
|Ec2InstanceId|object|false|none|none|
|Ec2InstanceRegion|object|false|none|none|
|HostEnvironment|object|false|none|none|
|HostEnvironmentId|object|false|none|none|

<h2 id="tocS_NetworkInterface">NetworkInterface</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterface"></a>
<a id="schema_NetworkInterface"></a>
<a id="tocSnetworkinterface"></a>
<a id="tocsnetworkinterface"></a>

```json
{
  "Ipv4Address": {},
  "MacAddress": {},
  "Ipv6Address": {}
}
```

Describes a gateway's network interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Ipv4Address|object|false|none|none|
|MacAddress|object|false|none|none|
|Ipv6Address|object|false|none|none|

<h2 id="tocS_Gateways">Gateways</h2>
<!-- backwards compatibility -->
<a id="schemagateways"></a>
<a id="schema_Gateways"></a>
<a id="tocSgateways"></a>
<a id="tocsgateways"></a>

```json
[
  {
    "GatewayId": {},
    "GatewayARN": {},
    "GatewayType": {},
    "GatewayOperationalState": {},
    "GatewayName": {},
    "Ec2InstanceId": {},
    "Ec2InstanceRegion": {},
    "HostEnvironment": {},
    "HostEnvironmentId": {}
  }
]
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

<h2 id="tocS_Hosts">Hosts</h2>
<!-- backwards compatibility -->
<a id="schemahosts"></a>
<a id="schema_Hosts"></a>
<a id="tocShosts"></a>
<a id="tocshosts"></a>

```json
[
  "string"
]
```

<h2 id="tocS_IPV4Address">IPV4Address</h2>
<!-- backwards compatibility -->
<a id="schemaipv4address"></a>
<a id="schema_IPV4Address"></a>
<a id="tocSipv4address"></a>
<a id="tocsipv4address"></a>

```json
"strings"
```

<h2 id="tocS_Initiator">Initiator</h2>
<!-- backwards compatibility -->
<a id="schemainitiator"></a>
<a id="schema_Initiator"></a>
<a id="tocSinitiator"></a>
<a id="tocsinitiator"></a>

```json
"string"
```

<h2 id="tocS_Initiators">Initiators</h2>
<!-- backwards compatibility -->
<a id="schemainitiators"></a>
<a id="schema_Initiators"></a>
<a id="tocSinitiators"></a>
<a id="tocsinitiators"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OrganizationalUnit">OrganizationalUnit</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunit"></a>
<a id="schema_OrganizationalUnit"></a>
<a id="tocSorganizationalunit"></a>
<a id="tocsorganizationalunit"></a>

```json
"string"
```

<h2 id="tocS_TimeoutInSeconds">TimeoutInSeconds</h2>
<!-- backwards compatibility -->
<a id="schematimeoutinseconds"></a>
<a id="schema_TimeoutInSeconds"></a>
<a id="tocStimeoutinseconds"></a>
<a id="tocstimeoutinseconds"></a>

```json
0
```

<h2 id="tocS_PoolARNs">PoolARNs</h2>
<!-- backwards compatibility -->
<a id="schemapoolarns"></a>
<a id="schema_PoolARNs"></a>
<a id="tocSpoolarns"></a>
<a id="tocspoolarns"></a>

```json
[
  "stringstringstringstringstringstringstringstringst"
]
```

<h2 id="tocS_PoolInfos">PoolInfos</h2>
<!-- backwards compatibility -->
<a id="schemapoolinfos"></a>
<a id="schema_PoolInfos"></a>
<a id="tocSpoolinfos"></a>
<a id="tocspoolinfos"></a>

```json
[
  {
    "PoolARN": {},
    "PoolName": {},
    "StorageClass": {},
    "RetentionLockType": {},
    "RetentionLockTimeInDays": {},
    "PoolStatus": {}
  }
]
```

<h2 id="tocS_TapeInfos">TapeInfos</h2>
<!-- backwards compatibility -->
<a id="schematapeinfos"></a>
<a id="schema_TapeInfos"></a>
<a id="tocStapeinfos"></a>
<a id="tocstapeinfos"></a>

```json
[
  {
    "TapeARN": {},
    "TapeBarcode": {},
    "TapeSizeInBytes": {},
    "TapeStatus": {},
    "GatewayARN": {},
    "PoolId": {},
    "RetentionStartDate": {},
    "PoolEntryDate": {}
  }
]
```

An array of <a>TapeInfo</a> objects, where each object describes a single tape. If there are no tapes in the tape library or VTS, then the <code>TapeInfos</code> is an empty array.

<h2 id="tocS_VolumeRecoveryPointInfos">VolumeRecoveryPointInfos</h2>
<!-- backwards compatibility -->
<a id="schemavolumerecoverypointinfos"></a>
<a id="schema_VolumeRecoveryPointInfos"></a>
<a id="tocSvolumerecoverypointinfos"></a>
<a id="tocsvolumerecoverypointinfos"></a>

```json
[
  {
    "VolumeARN": {},
    "VolumeSizeInBytes": {},
    "VolumeUsageInBytes": {},
    "VolumeRecoveryPointTime": {}
  }
]
```

<h2 id="tocS_VolumeInfos">VolumeInfos</h2>
<!-- backwards compatibility -->
<a id="schemavolumeinfos"></a>
<a id="schema_VolumeInfos"></a>
<a id="tocSvolumeinfos"></a>
<a id="tocsvolumeinfos"></a>

```json
[
  {
    "VolumeARN": {},
    "VolumeId": {},
    "GatewayARN": "stringstringstringstringstringstringstringstringst",
    "GatewayId": {},
    "VolumeType": {},
    "VolumeSizeInBytes": {},
    "VolumeAttachmentStatus": {}
  }
]
```

<h2 id="tocS_LocalConsolePassword">LocalConsolePassword</h2>
<!-- backwards compatibility -->
<a id="schemalocalconsolepassword"></a>
<a id="schema_LocalConsolePassword"></a>
<a id="tocSlocalconsolepassword"></a>
<a id="tocslocalconsolepassword"></a>

```json
"password"
```

<h2 id="tocS_PermissionMode">PermissionMode</h2>
<!-- backwards compatibility -->
<a id="schemapermissionmode"></a>
<a id="schema_PermissionMode"></a>
<a id="tocSpermissionmode"></a>
<a id="tocspermissionmode"></a>

```json
"stri"
```

<h2 id="tocS_PermissionId">PermissionId</h2>
<!-- backwards compatibility -->
<a id="schemapermissionid"></a>
<a id="schema_PermissionId"></a>
<a id="tocSpermissionid"></a>
<a id="tocspermissionid"></a>

```json
0
```

<h2 id="tocS_Path">Path</h2>
<!-- backwards compatibility -->
<a id="schemapath"></a>
<a id="schema_Path"></a>
<a id="tocSpath"></a>
<a id="tocspath"></a>

```json
"string"
```

The file share path used by the NFS client to identify the mount point.

<h2 id="tocS_NFSFileShareInfo">NFSFileShareInfo</h2>
<!-- backwards compatibility -->
<a id="schemanfsfileshareinfo"></a>
<a id="schema_NFSFileShareInfo"></a>
<a id="tocSnfsfileshareinfo"></a>
<a id="tocsnfsfileshareinfo"></a>

```json
{
  "NFSFileShareDefaults": {
    "FileMode": {},
    "DirectoryMode": {},
    "GroupId": {},
    "OwnerId": {}
  },
  "FileShareARN": "stringstringstringstringstringstringstringstringst",
  "FileShareId": "stringstring",
  "FileShareStatus": "string",
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "KMSEncrypted": {},
  "KMSKey": "strings",
  "Path": "string",
  "Role": "stringstringstringst",
  "LocationARN": "stringstringstri",
  "DefaultStorageClass": {},
  "ObjectACL": "private",
  "ClientList": [
    "string"
  ],
  "Squash": "string",
  "ReadOnly": {},
  "GuessMIMETypeEnabled": {},
  "RequesterPays": {},
  "Tags": {},
  "FileShareName": {},
  "CacheAttributes": {
    "CacheStaleTimeoutInSeconds": {}
  },
  "NotificationPolicy": {},
  "VPCEndpointDNSName": {},
  "BucketRegion": {},
  "AuditDestinationARN": {}
}
```

The Unix file permissions and ownership information assigned, by default, to native S3 objects when an S3 File Gateway discovers them in S3 buckets. This operation is only supported in S3 File Gateways.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NFSFileShareDefaults|[NFSFileShareDefaults](#schemanfsfilesharedefaults)|false|none|Describes Network File System (NFS) file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported for S3 File Gateways.|
|FileShareARN|[FileShareARN](#schemafilesharearn)|false|none|The Amazon Resource Name (ARN) of the file share.|
|FileShareId|[FileShareId](#schemafileshareid)|false|none|The ID of the file share.|
|FileShareStatus|[FileShareStatus](#schemafilesharestatus)|false|none|<p>The status of the file share.</p> <p>Valid Values: <code>CREATING</code> \| <code>UPDATING</code> \| <code>AVAILABLE</code> \| <code>DELETING</code> </p>|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|KMSEncrypted|object|false|none|none|
|KMSKey|[KMSKey](#schemakmskey)|false|none|The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.|
|Path|[Path](#schemapath)|false|none|The file share path used by the NFS client to identify the mount point.|
|Role|[Role](#schemarole)|false|none|The ARN of the IAM role that an S3 File Gateway assumes when it accesses the underlying storage.|
|LocationARN|[LocationARN](#schemalocationarn)|false|none|<p>A custom ARN for the backend storage used for storing data for file shares. It includes a resource ARN with an optional prefix concatenation. The prefix must end with a forward slash (/).</p> <note> <p>You can specify LocationARN as a bucket ARN, access point ARN or access point alias, as shown in the following examples.</p> <p>Bucket ARN:</p> <p> <code>arn:aws:s3:::my-bucket/prefix/</code> </p> <p>Access point ARN:</p> <p> <code>arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/</code> </p> <p>If you specify an access point, the bucket policy must be configured to delegate access control to the access point. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control">Delegating access control to access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Access point alias:</p> <p> <code>test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias</code> </p> </note>|
|DefaultStorageClass|object|false|none|none|
|ObjectACL|[ObjectACL](#schemaobjectacl)|false|none|A value that sets the access control list (ACL) permission for objects in the S3 bucket that an S3 File Gateway puts objects into. The default value is <code>private</code>.|
|ClientList|[FileShareClientList](#schemafileshareclientlist)|false|none|The list of clients that are allowed to access the S3 File Gateway. The list must contain either valid IP addresses or valid CIDR blocks.|
|Squash|[Squash](#schemasquash)|false|none|<p>The user mapped to anonymous user. Valid options are the following:</p> <ul> <li> <p> <code>RootSquash</code>: Only root is mapped to anonymous user.</p> </li> <li> <p> <code>NoSquash</code>: No one is mapped to anonymous user.</p> </li> <li> <p> <code>AllSquash</code>: Everyone is mapped to anonymous user.</p> </li> </ul>|
|ReadOnly|object|false|none|none|
|GuessMIMETypeEnabled|object|false|none|none|
|RequesterPays|object|false|none|none|
|Tags|object|false|none|none|
|FileShareName|object|false|none|none|
|CacheAttributes|object|false|none|none|
|NotificationPolicy|object|false|none|none|
|VPCEndpointDNSName|object|false|none|none|
|BucketRegion|object|false|none|none|
|AuditDestinationARN|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ObjectACL|private|
|ObjectACL|public-read|
|ObjectACL|public-read-write|
|ObjectACL|authenticated-read|
|ObjectACL|bucket-owner-read|
|ObjectACL|bucket-owner-full-control|
|ObjectACL|aws-exec-read|

<h2 id="tocS_NotificationId">NotificationId</h2>
<!-- backwards compatibility -->
<a id="schemanotificationid"></a>
<a id="schema_NotificationId"></a>
<a id="tocSnotificationid"></a>
<a id="tocsnotificationid"></a>

```json
"string"
```

The randomly generated ID of the notification that was sent. This ID is in UUID format.

<h2 id="tocS_PoolStatus">PoolStatus</h2>
<!-- backwards compatibility -->
<a id="schemapoolstatus"></a>
<a id="schema_PoolStatus"></a>
<a id="tocSpoolstatus"></a>
<a id="tocspoolstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_PoolInfo">PoolInfo</h2>
<!-- backwards compatibility -->
<a id="schemapoolinfo"></a>
<a id="schema_PoolInfo"></a>
<a id="tocSpoolinfo"></a>
<a id="tocspoolinfo"></a>

```json
{
  "PoolARN": {},
  "PoolName": {},
  "StorageClass": {},
  "RetentionLockType": {},
  "RetentionLockTimeInDays": {},
  "PoolStatus": {}
}
```

Describes a custom tape pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PoolARN|object|false|none|none|
|PoolName|object|false|none|none|
|StorageClass|object|false|none|none|
|RetentionLockType|object|false|none|none|
|RetentionLockTimeInDays|object|false|none|none|
|PoolStatus|object|false|none|none|

<h2 id="tocS_TagKeys">TagKeys</h2>
<!-- backwards compatibility -->
<a id="schematagkeys"></a>
<a id="schema_TagKeys"></a>
<a id="tocStagkeys"></a>
<a id="tocstagkeys"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SMBFileShareInfo">SMBFileShareInfo</h2>
<!-- backwards compatibility -->
<a id="schemasmbfileshareinfo"></a>
<a id="schema_SMBFileShareInfo"></a>
<a id="tocSsmbfileshareinfo"></a>
<a id="tocssmbfileshareinfo"></a>

```json
{
  "FileShareARN": "stringstringstringstringstringstringstringstringst",
  "FileShareId": "stringstring",
  "FileShareStatus": "string",
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "KMSEncrypted": {},
  "KMSKey": "strings",
  "Path": {},
  "Role": "stringstringstringst",
  "LocationARN": "stringstringstri",
  "DefaultStorageClass": {},
  "ObjectACL": "private",
  "ReadOnly": {},
  "GuessMIMETypeEnabled": {},
  "RequesterPays": {},
  "SMBACLEnabled": {},
  "AccessBasedEnumeration": {},
  "AdminUserList": {},
  "ValidUserList": {},
  "InvalidUserList": {},
  "AuditDestinationARN": {},
  "Authentication": "string",
  "CaseSensitivity": {},
  "Tags": {},
  "FileShareName": {},
  "CacheAttributes": {
    "CacheStaleTimeoutInSeconds": {}
  },
  "NotificationPolicy": {},
  "VPCEndpointDNSName": {},
  "BucketRegion": {},
  "OplocksEnabled": {}
}
```

The Windows file permissions and ownership information assigned, by default, to native S3 objects when S3 File Gateway discovers them in S3 buckets. This operation is only supported for S3 File Gateways.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileShareARN|[FileShareARN](#schemafilesharearn)|false|none|The Amazon Resource Name (ARN) of the file share.|
|FileShareId|[FileShareId](#schemafileshareid)|false|none|The ID of the file share.|
|FileShareStatus|[FileShareStatus](#schemafilesharestatus)|false|none|<p>The status of the file share.</p> <p>Valid Values: <code>CREATING</code> \| <code>UPDATING</code> \| <code>AVAILABLE</code> \| <code>DELETING</code> </p>|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|KMSEncrypted|object|false|none|none|
|KMSKey|[KMSKey](#schemakmskey)|false|none|The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.|
|Path|object|false|none|none|
|Role|[Role](#schemarole)|false|none|The ARN of the IAM role that an S3 File Gateway assumes when it accesses the underlying storage.|
|LocationARN|[LocationARN](#schemalocationarn)|false|none|<p>A custom ARN for the backend storage used for storing data for file shares. It includes a resource ARN with an optional prefix concatenation. The prefix must end with a forward slash (/).</p> <note> <p>You can specify LocationARN as a bucket ARN, access point ARN or access point alias, as shown in the following examples.</p> <p>Bucket ARN:</p> <p> <code>arn:aws:s3:::my-bucket/prefix/</code> </p> <p>Access point ARN:</p> <p> <code>arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/</code> </p> <p>If you specify an access point, the bucket policy must be configured to delegate access control to the access point. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control">Delegating access control to access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Access point alias:</p> <p> <code>test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias</code> </p> </note>|
|DefaultStorageClass|object|false|none|none|
|ObjectACL|[ObjectACL](#schemaobjectacl)|false|none|A value that sets the access control list (ACL) permission for objects in the S3 bucket that an S3 File Gateway puts objects into. The default value is <code>private</code>.|
|ReadOnly|object|false|none|none|
|GuessMIMETypeEnabled|object|false|none|none|
|RequesterPays|object|false|none|none|
|SMBACLEnabled|object|false|none|none|
|AccessBasedEnumeration|object|false|none|none|
|AdminUserList|object|false|none|none|
|ValidUserList|object|false|none|none|
|InvalidUserList|object|false|none|none|
|AuditDestinationARN|object|false|none|none|
|Authentication|[Authentication](#schemaauthentication)|false|none|<p>The authentication method of the file share. The default is <code>ActiveDirectory</code>.</p> <p>Valid Values: <code>ActiveDirectory</code> \| <code>GuestAccess</code> </p>|
|CaseSensitivity|object|false|none|none|
|Tags|object|false|none|none|
|FileShareName|object|false|none|none|
|CacheAttributes|object|false|none|none|
|NotificationPolicy|object|false|none|none|
|VPCEndpointDNSName|object|false|none|none|
|BucketRegion|object|false|none|none|
|OplocksEnabled|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ObjectACL|private|
|ObjectACL|public-read|
|ObjectACL|public-read-write|
|ObjectACL|authenticated-read|
|ObjectACL|bucket-owner-read|
|ObjectACL|bucket-owner-full-control|
|ObjectACL|aws-exec-read|

<h2 id="tocS_SMBGuestPassword">SMBGuestPassword</h2>
<!-- backwards compatibility -->
<a id="schemasmbguestpassword"></a>
<a id="schema_SMBGuestPassword"></a>
<a id="tocSsmbguestpassword"></a>
<a id="tocssmbguestpassword"></a>

```json
"password"
```

<h2 id="tocS_StorediSCSIVolume">StorediSCSIVolume</h2>
<!-- backwards compatibility -->
<a id="schemastorediscsivolume"></a>
<a id="schema_StorediSCSIVolume"></a>
<a id="tocSstorediscsivolume"></a>
<a id="tocsstorediscsivolume"></a>

```json
{
  "VolumeARN": {},
  "VolumeId": {},
  "VolumeType": {},
  "VolumeStatus": {},
  "VolumeAttachmentStatus": {},
  "VolumeSizeInBytes": {},
  "VolumeProgress": {},
  "VolumeDiskId": {},
  "SourceSnapshotId": {},
  "PreservedExistingData": {},
  "VolumeiSCSIAttributes": {
    "TargetARN": {},
    "NetworkInterfaceId": {},
    "NetworkInterfacePort": {},
    "LunNumber": {},
    "ChapEnabled": {}
  },
  "CreatedDate": {},
  "VolumeUsedInBytes": {},
  "KMSKey": "strings",
  "TargetName": {}
}
```

Describes an iSCSI stored volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|false|none|none|
|VolumeId|object|false|none|none|
|VolumeType|object|false|none|none|
|VolumeStatus|object|false|none|none|
|VolumeAttachmentStatus|object|false|none|none|
|VolumeSizeInBytes|object|false|none|none|
|VolumeProgress|object|false|none|none|
|VolumeDiskId|object|false|none|none|
|SourceSnapshotId|object|false|none|none|
|PreservedExistingData|object|false|none|none|
|VolumeiSCSIAttributes|object|false|none|none|
|CreatedDate|object|false|none|none|
|VolumeUsedInBytes|object|false|none|none|
|KMSKey|[KMSKey](#schemakmskey)|false|none|The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.|
|TargetName|object|false|none|none|

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

A key-value pair that helps you manage, filter, and search for your resource. Allowed characters: letters, white space, and numbers, representable in UTF-8, and the following characters: + - = . _ : /.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_TapeStatus">TapeStatus</h2>
<!-- backwards compatibility -->
<a id="schematapestatus"></a>
<a id="schema_TapeStatus"></a>
<a id="tocStapestatus"></a>
<a id="tocstapestatus"></a>

```json
"string"
```

<h2 id="tocS_VTLDeviceARN">VTLDeviceARN</h2>
<!-- backwards compatibility -->
<a id="schemavtldevicearn"></a>
<a id="schema_VTLDeviceARN"></a>
<a id="tocSvtldevicearn"></a>
<a id="tocsvtldevicearn"></a>

```json
"stringstringstringstringstringstringstringstringst"
```

<h2 id="tocS_TapeUsage">TapeUsage</h2>
<!-- backwards compatibility -->
<a id="schematapeusage"></a>
<a id="schema_TapeUsage"></a>
<a id="tocStapeusage"></a>
<a id="tocstapeusage"></a>

```json
0
```

<h2 id="tocS_Tape">Tape</h2>
<!-- backwards compatibility -->
<a id="schematape"></a>
<a id="schema_Tape"></a>
<a id="tocStape"></a>
<a id="tocstape"></a>

```json
{
  "TapeARN": {},
  "TapeBarcode": {},
  "TapeCreatedDate": {},
  "TapeSizeInBytes": {},
  "TapeStatus": {},
  "VTLDevice": {},
  "Progress": {},
  "TapeUsedInBytes": {},
  "KMSKey": "strings",
  "PoolId": {},
  "Worm": {},
  "RetentionStartDate": {},
  "PoolEntryDate": {}
}
```

Describes a virtual tape object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARN|object|false|none|none|
|TapeBarcode|object|false|none|none|
|TapeCreatedDate|object|false|none|none|
|TapeSizeInBytes|object|false|none|none|
|TapeStatus|object|false|none|none|
|VTLDevice|object|false|none|none|
|Progress|object|false|none|none|
|TapeUsedInBytes|object|false|none|none|
|KMSKey|[KMSKey](#schemakmskey)|false|none|The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.|
|PoolId|object|false|none|none|
|Worm|object|false|none|none|
|RetentionStartDate|object|false|none|none|
|PoolEntryDate|object|false|none|none|

<h2 id="tocS_TapeArchiveStatus">TapeArchiveStatus</h2>
<!-- backwards compatibility -->
<a id="schematapearchivestatus"></a>
<a id="schema_TapeArchiveStatus"></a>
<a id="tocStapearchivestatus"></a>
<a id="tocstapearchivestatus"></a>

```json
"string"
```

<h2 id="tocS_TapeArchive">TapeArchive</h2>
<!-- backwards compatibility -->
<a id="schematapearchive"></a>
<a id="schema_TapeArchive"></a>
<a id="tocStapearchive"></a>
<a id="tocstapearchive"></a>

```json
{
  "TapeARN": {},
  "TapeBarcode": {},
  "TapeCreatedDate": {},
  "TapeSizeInBytes": {},
  "CompletionTime": {},
  "RetrievedTo": {},
  "TapeStatus": {},
  "TapeUsedInBytes": {},
  "KMSKey": "strings",
  "PoolId": {},
  "Worm": {},
  "RetentionStartDate": {},
  "PoolEntryDate": {}
}
```

Represents a virtual tape that is archived in the virtual tape shelf (VTS).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARN|object|false|none|none|
|TapeBarcode|object|false|none|none|
|TapeCreatedDate|object|false|none|none|
|TapeSizeInBytes|object|false|none|none|
|CompletionTime|object|false|none|none|
|RetrievedTo|object|false|none|none|
|TapeStatus|object|false|none|none|
|TapeUsedInBytes|object|false|none|none|
|KMSKey|[KMSKey](#schemakmskey)|false|none|The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.|
|PoolId|object|false|none|none|
|Worm|object|false|none|none|
|RetentionStartDate|object|false|none|none|
|PoolEntryDate|object|false|none|none|

<h2 id="tocS_TapeInfo">TapeInfo</h2>
<!-- backwards compatibility -->
<a id="schematapeinfo"></a>
<a id="schema_TapeInfo"></a>
<a id="tocStapeinfo"></a>
<a id="tocstapeinfo"></a>

```json
{
  "TapeARN": {},
  "TapeBarcode": {},
  "TapeSizeInBytes": {},
  "TapeStatus": {},
  "GatewayARN": {},
  "PoolId": {},
  "RetentionStartDate": {},
  "PoolEntryDate": {}
}
```

Describes a virtual tape.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARN|object|false|none|none|
|TapeBarcode|object|false|none|none|
|TapeSizeInBytes|object|false|none|none|
|TapeStatus|object|false|none|none|
|GatewayARN|object|false|none|none|
|PoolId|object|false|none|none|
|RetentionStartDate|object|false|none|none|
|PoolEntryDate|object|false|none|none|

<h2 id="tocS_TapeRecoveryPointStatus">TapeRecoveryPointStatus</h2>
<!-- backwards compatibility -->
<a id="schemataperecoverypointstatus"></a>
<a id="schema_TapeRecoveryPointStatus"></a>
<a id="tocStaperecoverypointstatus"></a>
<a id="tocstaperecoverypointstatus"></a>

```json
"string"
```

<h2 id="tocS_TapeRecoveryPointInfo">TapeRecoveryPointInfo</h2>
<!-- backwards compatibility -->
<a id="schemataperecoverypointinfo"></a>
<a id="schema_TapeRecoveryPointInfo"></a>
<a id="tocStaperecoverypointinfo"></a>
<a id="tocstaperecoverypointinfo"></a>

```json
{
  "TapeARN": {},
  "TapeRecoveryPointTime": {},
  "TapeSizeInBytes": {},
  "TapeStatus": {}
}
```

Describes a recovery point.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TapeARN|object|false|none|none|
|TapeRecoveryPointTime|object|false|none|none|
|TapeSizeInBytes|object|false|none|none|
|TapeStatus|object|false|none|none|

<h2 id="tocS_UserListUser">UserListUser</h2>
<!-- backwards compatibility -->
<a id="schemauserlistuser"></a>
<a id="schema_UserListUser"></a>
<a id="tocSuserlistuser"></a>
<a id="tocsuserlistuser"></a>

```json
"string"
```

<h2 id="tocS_VTLDeviceType">VTLDeviceType</h2>
<!-- backwards compatibility -->
<a id="schemavtldevicetype"></a>
<a id="schema_VTLDeviceType"></a>
<a id="tocSvtldevicetype"></a>
<a id="tocsvtldevicetype"></a>

```json
"string"
```

<h2 id="tocS_VTLDeviceVendor">VTLDeviceVendor</h2>
<!-- backwards compatibility -->
<a id="schemavtldevicevendor"></a>
<a id="schema_VTLDeviceVendor"></a>
<a id="tocSvtldevicevendor"></a>
<a id="tocsvtldevicevendor"></a>

```json
"string"
```

<h2 id="tocS_VTLDeviceProductIdentifier">VTLDeviceProductIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemavtldeviceproductidentifier"></a>
<a id="schema_VTLDeviceProductIdentifier"></a>
<a id="tocSvtldeviceproductidentifier"></a>
<a id="tocsvtldeviceproductidentifier"></a>

```json
"string"
```

<h2 id="tocS_VTLDevice">VTLDevice</h2>
<!-- backwards compatibility -->
<a id="schemavtldevice"></a>
<a id="schema_VTLDevice"></a>
<a id="tocSvtldevice"></a>
<a id="tocsvtldevice"></a>

```json
{
  "VTLDeviceARN": {},
  "VTLDeviceType": {},
  "VTLDeviceVendor": {},
  "VTLDeviceProductIdentifier": {},
  "DeviceiSCSIAttributes": {
    "TargetARN": {},
    "NetworkInterfaceId": {},
    "NetworkInterfacePort": {},
    "ChapEnabled": {}
  }
}
```

Represents a device object associated with a tape gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VTLDeviceARN|object|false|none|none|
|VTLDeviceType|object|false|none|none|
|VTLDeviceVendor|object|false|none|none|
|VTLDeviceProductIdentifier|object|false|none|none|
|DeviceiSCSIAttributes|object|false|none|none|

<h2 id="tocS_VolumeInfo">VolumeInfo</h2>
<!-- backwards compatibility -->
<a id="schemavolumeinfo"></a>
<a id="schema_VolumeInfo"></a>
<a id="tocSvolumeinfo"></a>
<a id="tocsvolumeinfo"></a>

```json
{
  "VolumeARN": {},
  "VolumeId": {},
  "GatewayARN": "stringstringstringstringstringstringstringstringst",
  "GatewayId": {},
  "VolumeType": {},
  "VolumeSizeInBytes": {},
  "VolumeAttachmentStatus": {}
}
```

Describes a storage volume object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|false|none|none|
|VolumeId|object|false|none|none|
|GatewayARN|[GatewayARN](#schemagatewayarn)|false|none|The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.|
|GatewayId|object|false|none|none|
|VolumeType|object|false|none|none|
|VolumeSizeInBytes|object|false|none|none|
|VolumeAttachmentStatus|object|false|none|none|

<h2 id="tocS_VolumeRecoveryPointInfo">VolumeRecoveryPointInfo</h2>
<!-- backwards compatibility -->
<a id="schemavolumerecoverypointinfo"></a>
<a id="schema_VolumeRecoveryPointInfo"></a>
<a id="tocSvolumerecoverypointinfo"></a>
<a id="tocsvolumerecoverypointinfo"></a>

```json
{
  "VolumeARN": {},
  "VolumeSizeInBytes": {},
  "VolumeUsageInBytes": {},
  "VolumeRecoveryPointTime": {}
}
```

Describes a storage volume recovery point object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeARN|object|false|none|none|
|VolumeSizeInBytes|object|false|none|none|
|VolumeUsageInBytes|object|false|none|none|
|VolumeRecoveryPointTime|object|false|none|none|
