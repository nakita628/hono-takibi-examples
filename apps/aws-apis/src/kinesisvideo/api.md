<h1 id="amazon-kinesis-video-streams">Amazon Kinesis Video Streams v2017-09-30</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p/>

Base URLs:

* <a href="http://kinesisvideo.us-east-1.amazonaws.com">http://kinesisvideo.us-east-1.amazonaws.com</a> - The Kinesis Video multi-region endpoint

* <a href="https://kinesisvideo.us-east-1.amazonaws.com">https://kinesisvideo.us-east-1.amazonaws.com</a> - The Kinesis Video multi-region endpoint

* <a href="http://kinesisvideo.cn-north-1.amazonaws.com.cn">http://kinesisvideo.cn-north-1.amazonaws.com.cn</a> - The Kinesis Video endpoint for China (Beijing) and China (Ningxia)

* <a href="https://kinesisvideo.cn-north-1.amazonaws.com.cn">https://kinesisvideo.cn-north-1.amazonaws.com.cn</a> - The Kinesis Video endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/kinesisvideo/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-kinesis-video-streams-default">Default</h1>

## CreateSignalingChannel

<a id="opIdCreateSignalingChannel"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/createSignalingChannel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ChannelName": "string",
    "ChannelType": "SINGLE_MASTER",
    "SingleMasterConfiguration": {
      "MessageTtlSeconds": {}
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /createSignalingChannel`

<p>Creates a signaling channel. </p> <p> <code>CreateSignalingChannel</code> is an asynchronous operation.</p>

> Body parameter

```json
{
  "ChannelName": "string",
  "ChannelType": "SINGLE_MASTER",
  "SingleMasterConfiguration": {
    "MessageTtlSeconds": {}
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createsignalingchannel-parameters">Parameters</h3>

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
|» ChannelName|body|string|true|A name for the signaling channel that you are creating. It must be unique for each Amazon Web Services account and Amazon Web Services Region.|
|» ChannelType|body|string|false|A type of the signaling channel that you are creating. Currently, <code>SINGLE_MASTER</code> is the only supported channel type. |
|» SingleMasterConfiguration|body|object|false|A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.|
|» » MessageTtlSeconds|body|object|false|none|
|» Tags|body|[[Tag](#schematag)]|false|A set of tags (key-value pairs) that you want to associate with this channel.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ChannelType|SINGLE_MASTER|
|» ChannelType|FULL_MESH|

> Example responses

> 200 Response

```json
{
  "ChannelARN": {}
}
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

<h3 id="createsignalingchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSignalingChannelOutput](#schemacreatesignalingchanneloutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|482|482|AccountChannelLimitExceededException|[AccountChannelLimitExceededException](#schemaaccountchannellimitexceededexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|TagsPerResourceExceededLimitException|[TagsPerResourceExceededLimitException](#schematagsperresourceexceededlimitexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStream

<a id="opIdCreateStream"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/createStream \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DeviceName": "string",
    "StreamName": "string",
    "MediaType": "string",
    "KmsKeyId": "string",
    "DataRetentionInHours": 0,
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /createStream`

<p>Creates a new Kinesis video stream. </p> <p>When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream's metadata, Kinesis Video Streams updates the version. </p> <p> <code>CreateStream</code> is an asynchronous operation.</p> <p>For information about how the service works, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html">How it Works</a>. </p> <p>You must have permissions for the <code>KinesisVideo:CreateStream</code> action.</p>

> Body parameter

```json
{
  "DeviceName": "string",
  "StreamName": "string",
  "MediaType": "string",
  "KmsKeyId": "string",
  "DataRetentionInHours": 0,
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createstream-parameters">Parameters</h3>

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
|» DeviceName|body|string|false|<p>The name of the device that is writing to the stream. </p> <note> <p>In the current implementation, Kinesis Video Streams does not use this name.</p> </note>|
|» StreamName|body|string|true|<p>A name for the stream that you are creating.</p> <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>|
|» MediaType|body|string|false|<p>The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a> for guidelines.</p> <p>Example valid values include "video/h264" and "video/h264,audio/aac".</p> <p>This parameter is optional; the default value is <code>null</code> (or empty in JSON).</p>|
|» KmsKeyId|body|string|false|<p>The ID of the Key Management Service (KMS) key that you want Kinesis Video Streams to use to encrypt stream data.</p> <p>If no key ID is specified, the default, Kinesis Video-managed key (<code>aws/kinesisvideo</code>) is used.</p> <p> For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">DescribeKey</a>. </p>|
|» DataRetentionInHours|body|integer|false|<p>The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream.</p> <p>The default value is 0, indicating that the stream does not persist data.</p> <p>When the <code>DataRetentionInHours</code> value is 0, consumers can still consume the fragments that remain in the service host buffer, which has a retention time limit of 5 minutes and a retention memory limit of 200 MB. Fragments are removed from the buffer when either limit is reached.</p>|
|» Tags|body|object|false|A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional).|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "StreamARN": {}
}
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

<h3 id="createstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStreamOutput](#schemacreatestreamoutput)|
|480|480|AccountStreamLimitExceededException|[AccountStreamLimitExceededException](#schemaaccountstreamlimitexceededexception)|
|481|481|DeviceStreamLimitExceededException|[DeviceStreamLimitExceededException](#schemadevicestreamlimitexceededexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|InvalidDeviceException|[InvalidDeviceException](#schemainvaliddeviceexception)|
|484|484|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|485|485|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|486|486|TagsPerResourceExceededLimitException|[TagsPerResourceExceededLimitException](#schematagsperresourceexceededlimitexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSignalingChannel

<a id="opIdDeleteSignalingChannel"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/deleteSignalingChannel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ChannelARN": "string",
    "CurrentVersion": "string"
  }'
```

`POST /deleteSignalingChannel`

Deletes a specified signaling channel. <code>DeleteSignalingChannel</code> is an asynchronous operation. If you don't specify the channel's current version, the most recent version is deleted.

> Body parameter

```json
{
  "ChannelARN": "string",
  "CurrentVersion": "string"
}
```

<h3 id="deletesignalingchannel-parameters">Parameters</h3>

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
|» ChannelARN|body|string|true|The Amazon Resource Name (ARN) of the signaling channel that you want to delete.|
|» CurrentVersion|body|string|false|The current version of the signaling channel that you want to delete. You can obtain the current version by invoking the <code>DescribeSignalingChannel</code> or <code>ListSignalingChannels</code> API operations.|

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

<h3 id="deletesignalingchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSignalingChannelOutput](#schemadeletesignalingchanneloutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|VersionMismatchException|[VersionMismatchException](#schemaversionmismatchexception)|
|485|485|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStream

<a id="opIdDeleteStream"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/deleteStream \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamARN": "string",
    "CurrentVersion": "string"
  }'
```

`POST /deleteStream`

<p>Deletes a Kinesis video stream and the data contained in the stream. </p> <p>This method marks the stream for deletion, and makes the data in the stream inaccessible immediately.</p> <p> </p> <p> To ensure that you have the latest version of the stream before deleting it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p>This operation requires permission for the <code>KinesisVideo:DeleteStream</code> action.</p>

> Body parameter

```json
{
  "StreamARN": "string",
  "CurrentVersion": "string"
}
```

<h3 id="deletestream-parameters">Parameters</h3>

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
|» StreamARN|body|string|true|The Amazon Resource Name (ARN) of the stream that you want to delete. |
|» CurrentVersion|body|string|false|<p>Optional: The version of the stream that you want to delete. </p> <p>Specify the version as a safeguard to ensure that your are deleting the correct stream. To get the stream version, use the <code>DescribeStream</code> API.</p> <p>If not specified, only the <code>CreationTime</code> is checked before deleting the stream.</p>|

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

<h3 id="deletestream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteStreamOutput](#schemadeletestreamoutput)|
|480|480|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|VersionMismatchException|[VersionMismatchException](#schemaversionmismatchexception)|
|485|485|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEdgeConfiguration

<a id="opIdDescribeEdgeConfiguration"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/describeEdgeConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamName": "string",
    "StreamARN": "string"
  }'
```

`POST /describeEdgeConfiguration`

Describes a stream’s edge configuration that was set using the <code>StartEdgeConfigurationUpdate</code> API. Use this API to get the status of the configuration if the configuration is in sync with the Edge Agent.

> Body parameter

```json
{
  "StreamName": "string",
  "StreamARN": "string"
}
```

<h3 id="describeedgeconfiguration-parameters">Parameters</h3>

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
|» StreamName|body|string|false|The name of the stream whose edge configuration you want to update. Specify either the <code>StreamName</code> or the <code>StreamARN</code>. |
|» StreamARN|body|string|false|The Amazon Resource Name (ARN) of the stream. Specify either the <code>StreamName</code>or the <code>StreamARN</code>.|

> Example responses

> 200 Response

```json
{
  "StreamName": {},
  "StreamARN": {},
  "CreationTime": {},
  "LastUpdatedTime": {},
  "SyncStatus": {},
  "FailedStatusDetails": {},
  "EdgeConfig": {
    "HubDeviceArn": {},
    "RecorderConfig": {
      "MediaSourceConfig": {
        "MediaUriSecretArn": {},
        "MediaUriType": {}
      },
      "ScheduleConfig": {
        "ScheduleExpression": {},
        "DurationInSeconds": {}
      }
    },
    "UploaderConfig": {
      "ScheduleConfig": {
        "ScheduleExpression": {},
        "DurationInSeconds": {}
      }
    },
    "DeletionConfig": {
      "EdgeRetentionInHours": {},
      "LocalSizeConfig": {
        "MaxLocalMediaSizeInMB": {},
        "StrategyOnFullSize": {}
      },
      "DeleteAfterUpload": {}
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

<h3 id="describeedgeconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEdgeConfigurationOutput](#schemadescribeedgeconfigurationoutput)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|StreamEdgeConfigurationNotFoundException|[StreamEdgeConfigurationNotFoundException](#schemastreamedgeconfigurationnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeImageGenerationConfiguration

<a id="opIdDescribeImageGenerationConfiguration"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/describeImageGenerationConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamName": "string",
    "StreamARN": "string"
  }'
```

`POST /describeImageGenerationConfiguration`

Gets the <code>ImageGenerationConfiguration</code> for a given Kinesis video stream.

> Body parameter

```json
{
  "StreamName": "string",
  "StreamARN": "string"
}
```

<h3 id="describeimagegenerationconfiguration-parameters">Parameters</h3>

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
|» StreamName|body|string|false|The name of the stream from which to retrieve the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>. |
|» StreamARN|body|string|false|The Amazon Resource Name (ARN) of the Kinesis video stream from which to retrieve the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.|

> Example responses

> 200 Response

```json
{
  "ImageGenerationConfiguration": {
    "Status": {},
    "ImageSelectorType": {},
    "DestinationConfig": {
      "Uri": {},
      "DestinationRegion": {}
    },
    "SamplingInterval": {},
    "Format": {},
    "FormatConfig": {
      "property1": "string",
      "property2": "string"
    },
    "WidthPixels": {},
    "HeightPixels": {}
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

<h3 id="describeimagegenerationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeImageGenerationConfigurationOutput](#schemadescribeimagegenerationconfigurationoutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMappedResourceConfiguration

<a id="opIdDescribeMappedResourceConfiguration"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/describeMappedResourceConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamName": "string",
    "StreamARN": "string",
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /describeMappedResourceConfiguration`

<p>Returns the most current information about the stream. Either streamName or streamARN should be provided in the input.</p> <p>Returns the most current information about the stream. The <code>streamName</code> or <code>streamARN</code> should be provided in the input.</p>

> Body parameter

```json
{
  "StreamName": "string",
  "StreamARN": "string",
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="describemappedresourceconfiguration-parameters">Parameters</h3>

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
|» StreamName|body|string|false|The name of the stream.|
|» StreamARN|body|string|false|The Amazon Resource Name (ARN) of the stream.|
|» MaxResults|body|integer|false|The maximum number of results to return in the response.|
|» NextToken|body|string|false|The token to provide in your next request, to get another batch of results.|

> Example responses

> 200 Response

```json
{
  "MappedResourceConfigurationList": {},
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

<h3 id="describemappedresourceconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMappedResourceConfigurationOutput](#schemadescribemappedresourceconfigurationoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMediaStorageConfiguration

<a id="opIdDescribeMediaStorageConfiguration"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/describeMediaStorageConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ChannelName": "string",
    "ChannelARN": "string"
  }'
```

`POST /describeMediaStorageConfiguration`

Returns the most current information about the channel. Specify the <code>ChannelName</code> or <code>ChannelARN</code> in the input.

> Body parameter

```json
{
  "ChannelName": "string",
  "ChannelARN": "string"
}
```

<h3 id="describemediastorageconfiguration-parameters">Parameters</h3>

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
|» ChannelName|body|string|false|The name of the channel.|
|» ChannelARN|body|string|false|The Amazon Resource Name (ARN) of the channel.|

> Example responses

> 200 Response

```json
{
  "MediaStorageConfiguration": {
    "StreamARN": {},
    "Status": {}
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

<h3 id="describemediastorageconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMediaStorageConfigurationOutput](#schemadescribemediastorageconfigurationoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeNotificationConfiguration

<a id="opIdDescribeNotificationConfiguration"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/describeNotificationConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamName": "string",
    "StreamARN": "string"
  }'
```

`POST /describeNotificationConfiguration`

Gets the <code>NotificationConfiguration</code> for a given Kinesis video stream.

> Body parameter

```json
{
  "StreamName": "string",
  "StreamARN": "string"
}
```

<h3 id="describenotificationconfiguration-parameters">Parameters</h3>

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
|» StreamName|body|string|false|The name of the stream from which to retrieve the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.|
|» StreamARN|body|string|false|The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to retrieve the notification configuration. You must specify either the <code>StreamName</code> or the StreamARN.|

> Example responses

> 200 Response

```json
{
  "NotificationConfiguration": {
    "Status": {},
    "DestinationConfig": {
      "Uri": {}
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

<h3 id="describenotificationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeNotificationConfigurationOutput](#schemadescribenotificationconfigurationoutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSignalingChannel

<a id="opIdDescribeSignalingChannel"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/describeSignalingChannel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ChannelName": "string",
    "ChannelARN": "string"
  }'
```

`POST /describeSignalingChannel`

Returns the most current information about the signaling channel. You must specify either the name or the Amazon Resource Name (ARN) of the channel that you want to describe.

> Body parameter

```json
{
  "ChannelName": "string",
  "ChannelARN": "string"
}
```

<h3 id="describesignalingchannel-parameters">Parameters</h3>

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
|» ChannelName|body|string|false|The name of the signaling channel that you want to describe.|
|» ChannelARN|body|string|false|The ARN of the signaling channel that you want to describe.|

> Example responses

> 200 Response

```json
{
  "ChannelInfo": {
    "ChannelName": {},
    "ChannelARN": {},
    "ChannelType": {},
    "ChannelStatus": {},
    "CreationTime": {},
    "SingleMasterConfiguration": {
      "MessageTtlSeconds": {}
    },
    "Version": {}
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

<h3 id="describesignalingchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSignalingChannelOutput](#schemadescribesignalingchanneloutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeStream

<a id="opIdDescribeStream"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/describeStream \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamName": "string",
    "StreamARN": "string"
  }'
```

`POST /describeStream`

Returns the most current information about the specified stream. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>. 

> Body parameter

```json
{
  "StreamName": "string",
  "StreamARN": "string"
}
```

<h3 id="describestream-parameters">Parameters</h3>

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
|» StreamName|body|string|false|The name of the stream.|
|» StreamARN|body|string|false|The Amazon Resource Name (ARN) of the stream.|

> Example responses

> 200 Response

```json
{
  "StreamInfo": {
    "DeviceName": {},
    "StreamName": {},
    "StreamARN": {},
    "MediaType": {},
    "KmsKeyId": {},
    "Version": {},
    "Status": {},
    "CreationTime": {},
    "DataRetentionInHours": {}
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

<h3 id="describestream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStreamOutput](#schemadescribestreamoutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDataEndpoint

<a id="opIdGetDataEndpoint"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/getDataEndpoint \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamName": "string",
    "StreamARN": "string",
    "APIName": "PUT_MEDIA"
  }'
```

`POST /getDataEndpoint`

<p>Gets an endpoint for a specified stream for either reading or writing. Use this endpoint in your application to read from the specified stream (using the <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write to it (using the <code>PutMedia</code> operation). </p> <note> <p>The returned endpoint does not have the API name appended. The client needs to add the API name to the returned endpoint.</p> </note> <p>In the request, specify the stream either by <code>StreamName</code> or <code>StreamARN</code>.</p>

> Body parameter

```json
{
  "StreamName": "string",
  "StreamARN": "string",
  "APIName": "PUT_MEDIA"
}
```

<h3 id="getdataendpoint-parameters">Parameters</h3>

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
|» StreamName|body|string|false|The name of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamARN</code> in the request.|
|» StreamARN|body|string|false|The Amazon Resource Name (ARN) of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamName</code> in the request. |
|» APIName|body|string|true|The name of the API action for which to get an endpoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» APIName|PUT_MEDIA|
|» APIName|GET_MEDIA|
|» APIName|LIST_FRAGMENTS|
|» APIName|GET_MEDIA_FOR_FRAGMENT_LIST|
|» APIName|GET_HLS_STREAMING_SESSION_URL|
|» APIName|GET_DASH_STREAMING_SESSION_URL|
|» APIName|GET_CLIP|
|» APIName|GET_IMAGES|

> Example responses

> 200 Response

```json
{
  "DataEndpoint": {}
}
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

<h3 id="getdataendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDataEndpointOutput](#schemagetdataendpointoutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSignalingChannelEndpoint

<a id="opIdGetSignalingChannelEndpoint"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/getSignalingChannelEndpoint \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ChannelARN": "string",
    "SingleMasterChannelEndpointConfiguration": {
      "Protocols": {},
      "Role": {}
    }
  }'
```

`POST /getSignalingChannelEndpoint`

<p>Provides an endpoint for the specified signaling channel to send and receive messages. This API uses the <code>SingleMasterChannelEndpointConfiguration</code> input parameter, which consists of the <code>Protocols</code> and <code>Role</code> properties.</p> <p> <code>Protocols</code> is used to determine the communication mechanism. For example, if you specify <code>WSS</code> as the protocol, this API produces a secure websocket endpoint. If you specify <code>HTTPS</code> as the protocol, this API generates an HTTPS endpoint. </p> <p> <code>Role</code> determines the messaging permissions. A <code>MASTER</code> role results in this API generating an endpoint that a client can use to communicate with any of the viewers on the channel. A <code>VIEWER</code> role results in this API generating an endpoint that a client can use to communicate only with a <code>MASTER</code>. </p>

> Body parameter

```json
{
  "ChannelARN": "string",
  "SingleMasterChannelEndpointConfiguration": {
    "Protocols": {},
    "Role": {}
  }
}
```

<h3 id="getsignalingchannelendpoint-parameters">Parameters</h3>

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
|» ChannelARN|body|string|true|The Amazon Resource Name (ARN) of the signalling channel for which you want to get an endpoint.|
|» SingleMasterChannelEndpointConfiguration|body|object|false|An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type. |
|» » Protocols|body|object|false|none|
|» » Role|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "ResourceEndpointList": {}
}
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

<h3 id="getsignalingchannelendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSignalingChannelEndpointOutput](#schemagetsignalingchannelendpointoutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSignalingChannels

<a id="opIdListSignalingChannels"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/listSignalingChannels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MaxResults": 1,
    "NextToken": "string",
    "ChannelNameCondition": {
      "ComparisonOperator": {},
      "ComparisonValue": {}
    }
  }'
```

`POST /listSignalingChannels`

Returns an array of <code>ChannelInfo</code> objects. Each object describes a signaling channel. To retrieve only those channels that satisfy a specific condition, you can specify a <code>ChannelNameCondition</code>.

> Body parameter

```json
{
  "MaxResults": 1,
  "NextToken": "string",
  "ChannelNameCondition": {
    "ComparisonOperator": {},
    "ComparisonValue": {}
  }
}
```

<h3 id="listsignalingchannels-parameters">Parameters</h3>

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
|» MaxResults|body|integer|false|The maximum number of channels to return in the response. The default is 500.|
|» NextToken|body|string|false|If you specify this parameter, when the result of a <code>ListSignalingChannels</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of channels, provide this token in your next request.|
|» ChannelNameCondition|body|object|false|An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>.|
|» » ComparisonOperator|body|object|false|none|
|» » ComparisonValue|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "ChannelInfoList": {},
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

<h3 id="listsignalingchannels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSignalingChannelsOutput](#schemalistsignalingchannelsoutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStreams

<a id="opIdListStreams"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/listStreams \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MaxResults": 1,
    "NextToken": "string",
    "StreamNameCondition": {
      "ComparisonOperator": {},
      "ComparisonValue": {}
    }
  }'
```

`POST /listStreams`

Returns an array of <code>StreamInfo</code> objects. Each object describes a stream. To retrieve only streams that satisfy a specific condition, you can specify a <code>StreamNameCondition</code>. 

> Body parameter

```json
{
  "MaxResults": 1,
  "NextToken": "string",
  "StreamNameCondition": {
    "ComparisonOperator": {},
    "ComparisonValue": {}
  }
}
```

<h3 id="liststreams-parameters">Parameters</h3>

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
|» MaxResults|body|integer|false|The maximum number of streams to return in the response. The default is 10,000.|
|» NextToken|body|string|false|If you specify this parameter, when the result of a <code>ListStreams</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of streams, provide this token in your next request.|
|» StreamNameCondition|body|object|false|Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix. |
|» » ComparisonOperator|body|object|false|none|
|» » ComparisonValue|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "StreamInfoList": {},
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

<h3 id="liststreams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStreamsOutput](#schemaliststreamsoutput)|
|480|480|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/ListTagsForResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "ResourceARN": "string"
  }'
```

`POST /ListTagsForResource`

Returns a list of tags associated with the specified signaling channel.

> Body parameter

```json
{
  "NextToken": "string",
  "ResourceARN": "string"
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

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
|» NextToken|body|string|false|If you specify this parameter and the result of a <code>ListTagsForResource</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags. |
|» ResourceARN|body|string|true|The Amazon Resource Name (ARN) of the signaling channel for which you want to list tags.|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
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

> 483 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceOutput](#schemalisttagsforresourceoutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForStream

<a id="opIdListTagsForStream"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/listTagsForStream \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "StreamARN": "string",
    "StreamName": "string"
  }'
```

`POST /listTagsForStream`

<p>Returns a list of tags associated with the specified stream.</p> <p>In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>

> Body parameter

```json
{
  "NextToken": "string",
  "StreamARN": "string",
  "StreamName": "string"
}
```

<h3 id="listtagsforstream-parameters">Parameters</h3>

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
|» NextToken|body|string|false|If you specify this parameter and the result of a <code>ListTagsForStream</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags.|
|» StreamARN|body|string|false|The Amazon Resource Name (ARN) of the stream that you want to list tags for.|
|» StreamName|body|string|false|The name of the stream that you want to list tags for.|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listtagsforstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForStreamOutput](#schemalisttagsforstreamoutput)|
|480|480|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|InvalidResourceFormatException|[InvalidResourceFormatException](#schemainvalidresourceformatexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartEdgeConfigurationUpdate

<a id="opIdStartEdgeConfigurationUpdate"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/startEdgeConfigurationUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamName": "string",
    "StreamARN": "string",
    "EdgeConfig": {
      "HubDeviceArn": {},
      "RecorderConfig": {
        "MediaSourceConfig": {
          "MediaUriSecretArn": {},
          "MediaUriType": {}
        },
        "ScheduleConfig": {
          "ScheduleExpression": {},
          "DurationInSeconds": {}
        }
      },
      "UploaderConfig": {
        "ScheduleConfig": {
          "ScheduleExpression": {},
          "DurationInSeconds": {}
        }
      },
      "DeletionConfig": {
        "EdgeRetentionInHours": {},
        "LocalSizeConfig": {
          "MaxLocalMediaSizeInMB": {},
          "StrategyOnFullSize": {}
        },
        "DeleteAfterUpload": {}
      }
    }
  }'
```

`POST /startEdgeConfigurationUpdate`

<p>An asynchronous API that updates a stream’s existing edge configuration. The Kinesis Video Stream will sync the stream’s edge configuration with the Edge Agent IoT Greengrass component that runs on an IoT Hub Device, setup at your premise. The time to sync can vary and depends on the connectivity of the Hub Device. The <code>SyncStatus</code> will be updated as the edge configuration is acknowledged, and synced with the Edge Agent. </p> <p>If this API is invoked for the first time, a new edge configuration will be created for the stream, and the sync status will be set to <code>SYNCING</code>. You will have to wait for the sync status to reach a terminal state such as: <code>IN_SYNC</code>, or <code>SYNC_FAILED</code>, before using this API again. If you invoke this API during the syncing process, a <code>ResourceInUseException</code> will be thrown. The connectivity of the stream’s edge configuration and the Edge Agent will be retried for 15 minutes. After 15 minutes, the status will transition into the <code>SYNC_FAILED</code> state.</p>

> Body parameter

```json
{
  "StreamName": "string",
  "StreamARN": "string",
  "EdgeConfig": {
    "HubDeviceArn": {},
    "RecorderConfig": {
      "MediaSourceConfig": {
        "MediaUriSecretArn": {},
        "MediaUriType": {}
      },
      "ScheduleConfig": {
        "ScheduleExpression": {},
        "DurationInSeconds": {}
      }
    },
    "UploaderConfig": {
      "ScheduleConfig": {
        "ScheduleExpression": {},
        "DurationInSeconds": {}
      }
    },
    "DeletionConfig": {
      "EdgeRetentionInHours": {},
      "LocalSizeConfig": {
        "MaxLocalMediaSizeInMB": {},
        "StrategyOnFullSize": {}
      },
      "DeleteAfterUpload": {}
    }
  }
}
```

<h3 id="startedgeconfigurationupdate-parameters">Parameters</h3>

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
|» StreamName|body|string|false|The name of the stream whose edge configuration you want to update. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.|
|» StreamARN|body|string|false| The Amazon Resource Name (ARN) of the stream. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.|
|» EdgeConfig|body|object|true|A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise.|
|» » HubDeviceArn|body|object|false|none|
|» » RecorderConfig|body|object|false|none|
|» » » MediaSourceConfig|body|object|true|none|
|» » » » MediaUriSecretArn|body|object|true|none|
|» » » » MediaUriType|body|object|true|none|
|» » » ScheduleConfig|body|object|false|none|
|» » » » ScheduleExpression|body|object|true|none|
|» » » » DurationInSeconds|body|object|true|none|
|» » UploaderConfig|body|object|false|none|
|» » » ScheduleConfig|body|object|true|none|
|» » » » ScheduleExpression|body|object|true|none|
|» » » » DurationInSeconds|body|object|true|none|
|» » DeletionConfig|body|object|false|none|
|» » » EdgeRetentionInHours|body|object|false|none|
|» » » LocalSizeConfig|body|object|false|none|
|» » » » MaxLocalMediaSizeInMB|body|object|false|none|
|» » » » StrategyOnFullSize|body|object|false|none|
|» » » DeleteAfterUpload|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "StreamName": {},
  "StreamARN": {},
  "CreationTime": {},
  "LastUpdatedTime": {},
  "SyncStatus": {},
  "FailedStatusDetails": {},
  "EdgeConfig": {
    "HubDeviceArn": {},
    "RecorderConfig": {
      "MediaSourceConfig": {
        "MediaUriSecretArn": {},
        "MediaUriType": {}
      },
      "ScheduleConfig": {
        "ScheduleExpression": {},
        "DurationInSeconds": {}
      }
    },
    "UploaderConfig": {
      "ScheduleConfig": {
        "ScheduleExpression": {},
        "DurationInSeconds": {}
      }
    },
    "DeletionConfig": {
      "EdgeRetentionInHours": {},
      "LocalSizeConfig": {
        "MaxLocalMediaSizeInMB": {},
        "StrategyOnFullSize": {}
      },
      "DeleteAfterUpload": {}
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

> 485 Response

```json
null
```

<h3 id="startedgeconfigurationupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartEdgeConfigurationUpdateOutput](#schemastartedgeconfigurationupdateoutput)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|NoDataRetentionException|[NoDataRetentionException](#schemanodataretentionexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/TagResource \
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

Adds one or more tags to a signaling channel. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>.

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
|» ResourceARN|body|string|true|The Amazon Resource Name (ARN) of the signaling channel to which you want to add tags.|
|» Tags|body|[[Tag](#schematag)]|true|A list of tags to associate with the specified signaling channel. Each tag is a key-value pair.|

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
|200|OK|Success|[TagResourceOutput](#schematagresourceoutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|TagsPerResourceExceededLimitException|[TagsPerResourceExceededLimitException](#schematagsperresourceexceededlimitexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagStream

<a id="opIdTagStream"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/tagStream \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamARN": "string",
    "StreamName": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tagStream`

<p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>. </p> <p>You must provide either the <code>StreamName</code> or the <code>StreamARN</code>.</p> <p>This operation requires permission for the <code>KinesisVideo:TagStream</code> action.</p> <p>A Kinesis video stream can support up to 50 tags.</p>

> Body parameter

```json
{
  "StreamARN": "string",
  "StreamName": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagstream-parameters">Parameters</h3>

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
|» StreamARN|body|string|false|The Amazon Resource Name (ARN) of the resource that you want to add the tag or tags to.|
|» StreamName|body|string|false|The name of the stream that you want to add the tag or tags to.|
|» Tags|body|object|true|A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional).|
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

<h3 id="tagstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagStreamOutput](#schematagstreamoutput)|
|480|480|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|InvalidResourceFormatException|[InvalidResourceFormatException](#schemainvalidresourceformatexception)|
|485|485|TagsPerResourceExceededLimitException|[TagsPerResourceExceededLimitException](#schematagsperresourceexceededlimitexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/UntagResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceARN": "string",
    "TagKeyList": [
      "string"
    ]
  }'
```

`POST /UntagResource`

Removes one or more tags from a signaling channel. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.

> Body parameter

```json
{
  "ResourceARN": "string",
  "TagKeyList": [
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
|» ResourceARN|body|string|true|The Amazon Resource Name (ARN) of the signaling channel from which you want to remove tags.|
|» TagKeyList|body|[[TagKey](#schematagkey)]|true|A list of the keys of the tags that you want to remove.|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceOutput](#schemauntagresourceoutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagStream

<a id="opIdUntagStream"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/untagStream \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamARN": "string",
    "StreamName": "string",
    "TagKeyList": [
      "string"
    ]
  }'
```

`POST /untagStream`

<p>Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.</p> <p>In the request, you must provide the <code>StreamName</code> or <code>StreamARN</code>.</p>

> Body parameter

```json
{
  "StreamARN": "string",
  "StreamName": "string",
  "TagKeyList": [
    "string"
  ]
}
```

<h3 id="untagstream-parameters">Parameters</h3>

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
|» StreamARN|body|string|false|The Amazon Resource Name (ARN) of the stream that you want to remove tags from.|
|» StreamName|body|string|false|The name of the stream that you want to remove tags from.|
|» TagKeyList|body|[[TagKey](#schematagkey)]|true|A list of the keys of the tags that you want to remove.|

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

<h3 id="untagstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagStreamOutput](#schemauntagstreamoutput)|
|480|480|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|InvalidResourceFormatException|[InvalidResourceFormatException](#schemainvalidresourceformatexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDataRetention

<a id="opIdUpdateDataRetention"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/updateDataRetention \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamName": "string",
    "StreamARN": "string",
    "CurrentVersion": "string",
    "Operation": "INCREASE_DATA_RETENTION",
    "DataRetentionChangeInHours": 1
  }'
```

`POST /updateDataRetention`

<p> Increases or decreases the stream's data retention period by the value that you specify. To indicate whether you want to increase or decrease the data retention period, specify the <code>Operation</code> parameter in the request body. In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p> <note> <p>The retention period that you specify replaces the current value.</p> </note> <p>This operation requires permission for the <code>KinesisVideo:UpdateDataRetention</code> action.</p> <p>Changing the data retention period affects the data in the stream as follows:</p> <ul> <li> <p>If the data retention period is increased, existing data is retained for the new retention period. For example, if the data retention period is increased from one hour to seven hours, all existing data is retained for seven hours.</p> </li> <li> <p>If the data retention period is decreased, existing data is retained for the new retention period. For example, if the data retention period is decreased from seven hours to one hour, all existing data is retained for one hour, and any data older than one hour is deleted immediately.</p> </li> </ul>

> Body parameter

```json
{
  "StreamName": "string",
  "StreamARN": "string",
  "CurrentVersion": "string",
  "Operation": "INCREASE_DATA_RETENTION",
  "DataRetentionChangeInHours": 1
}
```

<h3 id="updatedataretention-parameters">Parameters</h3>

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
|» StreamName|body|string|false|The name of the stream whose retention period you want to change.|
|» StreamARN|body|string|false|The Amazon Resource Name (ARN) of the stream whose retention period you want to change.|
|» CurrentVersion|body|string|true|The version of the stream whose retention period you want to change. To get the version, call either the <code>DescribeStream</code> or the <code>ListStreams</code> API.|
|» Operation|body|string|true|Indicates whether you want to increase or decrease the retention period.|
|» DataRetentionChangeInHours|body|integer|true|The retention period, in hours. The value you specify replaces the current value. The maximum value for this parameter is 87600 (ten years).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Operation|INCREASE_DATA_RETENTION|
|» Operation|DECREASE_DATA_RETENTION|

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

<h3 id="updatedataretention-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDataRetentionOutput](#schemaupdatedataretentionoutput)|
|480|480|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|485|485|VersionMismatchException|[VersionMismatchException](#schemaversionmismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateImageGenerationConfiguration

<a id="opIdUpdateImageGenerationConfiguration"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/updateImageGenerationConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamName": "string",
    "StreamARN": "string",
    "ImageGenerationConfiguration": {
      "Status": {},
      "ImageSelectorType": {},
      "DestinationConfig": {
        "Uri": {},
        "DestinationRegion": {}
      },
      "SamplingInterval": {},
      "Format": {},
      "FormatConfig": {
        "property1": "string",
        "property2": "string"
      },
      "WidthPixels": {},
      "HeightPixels": {}
    }
  }'
```

`POST /updateImageGenerationConfiguration`

Updates the <code>StreamInfo</code> and <code>ImageProcessingConfiguration</code> fields.

> Body parameter

```json
{
  "StreamName": "string",
  "StreamARN": "string",
  "ImageGenerationConfiguration": {
    "Status": {},
    "ImageSelectorType": {},
    "DestinationConfig": {
      "Uri": {},
      "DestinationRegion": {}
    },
    "SamplingInterval": {},
    "Format": {},
    "FormatConfig": {
      "property1": "string",
      "property2": "string"
    },
    "WidthPixels": {},
    "HeightPixels": {}
  }
}
```

<h3 id="updateimagegenerationconfiguration-parameters">Parameters</h3>

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
|» StreamName|body|string|false|The name of the stream from which to update the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.|
|» StreamARN|body|string|false|The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.|
|» ImageGenerationConfiguration|body|object|false|The structure that contains the information required for the KVS images delivery. If null, the configuration will be deleted from the stream.|
|» » Status|body|object|false|none|
|» » ImageSelectorType|body|object|false|none|
|» » DestinationConfig|body|object|false|none|
|» » » Uri|body|object|true|none|
|» » » DestinationRegion|body|object|true|none|
|» » SamplingInterval|body|object|false|none|
|» » Format|body|object|false|none|
|» » FormatConfig|body|object|false|none|
|» » » **additionalProperties**|body|[FormatConfigValue](#schemaformatconfigvalue)|false|none|
|» » WidthPixels|body|object|false|none|
|» » HeightPixels|body|object|false|none|

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

<h3 id="updateimagegenerationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateImageGenerationConfigurationOutput](#schemaupdateimagegenerationconfigurationoutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|NoDataRetentionException|[NoDataRetentionException](#schemanodataretentionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMediaStorageConfiguration

<a id="opIdUpdateMediaStorageConfiguration"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/updateMediaStorageConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ChannelARN": "string",
    "MediaStorageConfiguration": {
      "StreamARN": {},
      "Status": {}
    }
  }'
```

`POST /updateMediaStorageConfiguration`

<p>Associates a <code>SignalingChannel</code> to a stream to store the media. There are two signaling modes that can specified :</p> <ul> <li> <p>If the <code>StorageStatus</code> is disabled, no data will be stored, and the <code>StreamARN</code> parameter will not be needed. </p> </li> <li> <p>If the <code>StorageStatus</code> is enabled, the data will be stored in the <code>StreamARN</code> provided. </p> </li> </ul>

> Body parameter

```json
{
  "ChannelARN": "string",
  "MediaStorageConfiguration": {
    "StreamARN": {},
    "Status": {}
  }
}
```

<h3 id="updatemediastorageconfiguration-parameters">Parameters</h3>

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
|» ChannelARN|body|string|true|The Amazon Resource Name (ARN) of the channel.|
|» MediaStorageConfiguration|body|object|true|A structure that encapsulates, or contains, the media storage configuration properties.|
|» » StreamARN|body|object|false|none|
|» » Status|body|object|false|none|

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

<h3 id="updatemediastorageconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMediaStorageConfigurationOutput](#schemaupdatemediastorageconfigurationoutput)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|NoDataRetentionException|[NoDataRetentionException](#schemanodataretentionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateNotificationConfiguration

<a id="opIdUpdateNotificationConfiguration"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/updateNotificationConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamName": "string",
    "StreamARN": "string",
    "NotificationConfiguration": {
      "Status": {},
      "DestinationConfig": {
        "Uri": {}
      }
    }
  }'
```

`POST /updateNotificationConfiguration`

Updates the notification information for a stream.

> Body parameter

```json
{
  "StreamName": "string",
  "StreamARN": "string",
  "NotificationConfiguration": {
    "Status": {},
    "DestinationConfig": {
      "Uri": {}
    }
  }
}
```

<h3 id="updatenotificationconfiguration-parameters">Parameters</h3>

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
|» StreamName|body|string|false|The name of the stream from which to update the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.|
|» StreamARN|body|string|false|The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.|
|» NotificationConfiguration|body|object|false|The structure that contains the notification information for the KVS images delivery. If this parameter is null, the configuration will be deleted from the stream.|
|» » Status|body|object|false|none|
|» » DestinationConfig|body|object|false|none|
|» » » Uri|body|object|true|none|

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

<h3 id="updatenotificationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateNotificationConfigurationOutput](#schemaupdatenotificationconfigurationoutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|NoDataRetentionException|[NoDataRetentionException](#schemanodataretentionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSignalingChannel

<a id="opIdUpdateSignalingChannel"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/updateSignalingChannel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ChannelARN": "string",
    "CurrentVersion": "string",
    "SingleMasterConfiguration": {
      "MessageTtlSeconds": {}
    }
  }'
```

`POST /updateSignalingChannel`

<p>Updates the existing signaling channel. This is an asynchronous operation and takes time to complete. </p> <p>If the <code>MessageTtlSeconds</code> value is updated (either increased or reduced), it only applies to new messages sent via this channel after it's been updated. Existing messages are still expired as per the previous <code>MessageTtlSeconds</code> value.</p>

> Body parameter

```json
{
  "ChannelARN": "string",
  "CurrentVersion": "string",
  "SingleMasterConfiguration": {
    "MessageTtlSeconds": {}
  }
}
```

<h3 id="updatesignalingchannel-parameters">Parameters</h3>

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
|» ChannelARN|body|string|true|The Amazon Resource Name (ARN) of the signaling channel that you want to update.|
|» CurrentVersion|body|string|true|The current version of the signaling channel that you want to update.|
|» SingleMasterConfiguration|body|object|false|A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.|
|» » MessageTtlSeconds|body|object|false|none|

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

<h3 id="updatesignalingchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSignalingChannelOutput](#schemaupdatesignalingchanneloutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|VersionMismatchException|[VersionMismatchException](#schemaversionmismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateStream

<a id="opIdUpdateStream"></a>

> Code samples

```bash
curl https://kinesisvideo.us-east-1.amazonaws.com/updateStream \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamName": "string",
    "StreamARN": "string",
    "CurrentVersion": "string",
    "DeviceName": "string",
    "MediaType": "string"
  }'
```

`POST /updateStream`

<p>Updates stream metadata, such as the device name and media type.</p> <p>You must provide the stream name or the Amazon Resource Name (ARN) of the stream.</p> <p>To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p> <code>UpdateStream</code> is an asynchronous operation, and takes time to complete.</p>

> Body parameter

```json
{
  "StreamName": "string",
  "StreamARN": "string",
  "CurrentVersion": "string",
  "DeviceName": "string",
  "MediaType": "string"
}
```

<h3 id="updatestream-parameters">Parameters</h3>

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
|» StreamName|body|string|false|<p>The name of the stream whose metadata you want to update.</p> <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>|
|» StreamARN|body|string|false|The ARN of the stream whose metadata you want to update.|
|» CurrentVersion|body|string|true|The version of the stream whose metadata you want to update.|
|» DeviceName|body|string|false|<p>The name of the device that is writing to the stream. </p> <note> <p> In the current implementation, Kinesis Video Streams does not use this name. </p> </note>|
|» MediaType|body|string|false|<p>The stream's media type. Use <code>MediaType</code> to specify the type of content that the stream contains to the consumers of the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a>.</p> <p>To play video on the console, you must specify the correct video type. For example, if the video in the stream is H.264, specify <code>video/h264</code> as the <code>MediaType</code>.</p>|

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

<h3 id="updatestream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateStreamOutput](#schemaupdatestreamoutput)|
|480|480|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|485|485|VersionMismatchException|[VersionMismatchException](#schemaversionmismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateSignalingChannelOutput">CreateSignalingChannelOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatesignalingchanneloutput"></a>
<a id="schema_CreateSignalingChannelOutput"></a>
<a id="tocScreatesignalingchanneloutput"></a>
<a id="tocscreatesignalingchanneloutput"></a>

```json
{
  "ChannelARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelARN|object|false|none|none|

<h2 id="tocS_MessageTtlSeconds">MessageTtlSeconds</h2>
<!-- backwards compatibility -->
<a id="schemamessagettlseconds"></a>
<a id="schema_MessageTtlSeconds"></a>
<a id="tocSmessagettlseconds"></a>
<a id="tocsmessagettlseconds"></a>

```json
5
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

A key and value pair that is associated with the specified signaling channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_InvalidArgumentException">InvalidArgumentException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidargumentexception"></a>
<a id="schema_InvalidArgumentException"></a>
<a id="tocSinvalidargumentexception"></a>
<a id="tocsinvalidargumentexception"></a>

```json
null
```

<h2 id="tocS_ClientLimitExceededException">ClientLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaclientlimitexceededexception"></a>
<a id="schema_ClientLimitExceededException"></a>
<a id="tocSclientlimitexceededexception"></a>
<a id="tocsclientlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_AccountChannelLimitExceededException">AccountChannelLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaaccountchannellimitexceededexception"></a>
<a id="schema_AccountChannelLimitExceededException"></a>
<a id="tocSaccountchannellimitexceededexception"></a>
<a id="tocsaccountchannellimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

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

<h2 id="tocS_TagsPerResourceExceededLimitException">TagsPerResourceExceededLimitException</h2>
<!-- backwards compatibility -->
<a id="schematagsperresourceexceededlimitexception"></a>
<a id="schema_TagsPerResourceExceededLimitException"></a>
<a id="tocStagsperresourceexceededlimitexception"></a>
<a id="tocstagsperresourceexceededlimitexception"></a>

```json
null
```

<h2 id="tocS_CreateStreamOutput">CreateStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreamoutput"></a>
<a id="schema_CreateStreamOutput"></a>
<a id="tocScreatestreamoutput"></a>
<a id="tocscreatestreamoutput"></a>

```json
{
  "StreamARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamARN|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_AccountStreamLimitExceededException">AccountStreamLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaaccountstreamlimitexceededexception"></a>
<a id="schema_AccountStreamLimitExceededException"></a>
<a id="tocSaccountstreamlimitexceededexception"></a>
<a id="tocsaccountstreamlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_DeviceStreamLimitExceededException">DeviceStreamLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemadevicestreamlimitexceededexception"></a>
<a id="schema_DeviceStreamLimitExceededException"></a>
<a id="tocSdevicestreamlimitexceededexception"></a>
<a id="tocsdevicestreamlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidDeviceException">InvalidDeviceException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddeviceexception"></a>
<a id="schema_InvalidDeviceException"></a>
<a id="tocSinvaliddeviceexception"></a>
<a id="tocsinvaliddeviceexception"></a>

```json
null
```

<h2 id="tocS_DeleteSignalingChannelOutput">DeleteSignalingChannelOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletesignalingchanneloutput"></a>
<a id="schema_DeleteSignalingChannelOutput"></a>
<a id="tocSdeletesignalingchanneloutput"></a>
<a id="tocsdeletesignalingchanneloutput"></a>

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

<h2 id="tocS_VersionMismatchException">VersionMismatchException</h2>
<!-- backwards compatibility -->
<a id="schemaversionmismatchexception"></a>
<a id="schema_VersionMismatchException"></a>
<a id="tocSversionmismatchexception"></a>
<a id="tocsversionmismatchexception"></a>

```json
null
```

<h2 id="tocS_DeleteStreamOutput">DeleteStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletestreamoutput"></a>
<a id="schema_DeleteStreamOutput"></a>
<a id="tocSdeletestreamoutput"></a>
<a id="tocsdeletestreamoutput"></a>

```json
{}
```

<h2 id="tocS_NotAuthorizedException">NotAuthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemanotauthorizedexception"></a>
<a id="schema_NotAuthorizedException"></a>
<a id="tocSnotauthorizedexception"></a>
<a id="tocsnotauthorizedexception"></a>

```json
null
```

<h2 id="tocS_DescribeEdgeConfigurationOutput">DescribeEdgeConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeedgeconfigurationoutput"></a>
<a id="schema_DescribeEdgeConfigurationOutput"></a>
<a id="tocSdescribeedgeconfigurationoutput"></a>
<a id="tocsdescribeedgeconfigurationoutput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "CreationTime": {},
  "LastUpdatedTime": {},
  "SyncStatus": {},
  "FailedStatusDetails": {},
  "EdgeConfig": {
    "HubDeviceArn": {},
    "RecorderConfig": {
      "MediaSourceConfig": {
        "MediaUriSecretArn": {},
        "MediaUriType": {}
      },
      "ScheduleConfig": {
        "ScheduleExpression": {},
        "DurationInSeconds": {}
      }
    },
    "UploaderConfig": {
      "ScheduleConfig": {
        "ScheduleExpression": {},
        "DurationInSeconds": {}
      }
    },
    "DeletionConfig": {
      "EdgeRetentionInHours": {},
      "LocalSizeConfig": {
        "MaxLocalMediaSizeInMB": {},
        "StrategyOnFullSize": {}
      },
      "DeleteAfterUpload": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|
|CreationTime|object|false|none|none|
|LastUpdatedTime|object|false|none|none|
|SyncStatus|object|false|none|none|
|FailedStatusDetails|object|false|none|none|
|EdgeConfig|object|false|none|none|

<h2 id="tocS_StreamEdgeConfigurationNotFoundException">StreamEdgeConfigurationNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemastreamedgeconfigurationnotfoundexception"></a>
<a id="schema_StreamEdgeConfigurationNotFoundException"></a>
<a id="tocSstreamedgeconfigurationnotfoundexception"></a>
<a id="tocsstreamedgeconfigurationnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeImageGenerationConfigurationOutput">DescribeImageGenerationConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimagegenerationconfigurationoutput"></a>
<a id="schema_DescribeImageGenerationConfigurationOutput"></a>
<a id="tocSdescribeimagegenerationconfigurationoutput"></a>
<a id="tocsdescribeimagegenerationconfigurationoutput"></a>

```json
{
  "ImageGenerationConfiguration": {
    "Status": {},
    "ImageSelectorType": {},
    "DestinationConfig": {
      "Uri": {},
      "DestinationRegion": {}
    },
    "SamplingInterval": {},
    "Format": {},
    "FormatConfig": {
      "property1": "string",
      "property2": "string"
    },
    "WidthPixels": {},
    "HeightPixels": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageGenerationConfiguration|object|false|none|none|

<h2 id="tocS_DescribeMappedResourceConfigurationOutput">DescribeMappedResourceConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribemappedresourceconfigurationoutput"></a>
<a id="schema_DescribeMappedResourceConfigurationOutput"></a>
<a id="tocSdescribemappedresourceconfigurationoutput"></a>
<a id="tocsdescribemappedresourceconfigurationoutput"></a>

```json
{
  "MappedResourceConfigurationList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MappedResourceConfigurationList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMediaStorageConfigurationOutput">DescribeMediaStorageConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribemediastorageconfigurationoutput"></a>
<a id="schema_DescribeMediaStorageConfigurationOutput"></a>
<a id="tocSdescribemediastorageconfigurationoutput"></a>
<a id="tocsdescribemediastorageconfigurationoutput"></a>

```json
{
  "MediaStorageConfiguration": {
    "StreamARN": {},
    "Status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MediaStorageConfiguration|object|false|none|none|

<h2 id="tocS_DescribeNotificationConfigurationOutput">DescribeNotificationConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribenotificationconfigurationoutput"></a>
<a id="schema_DescribeNotificationConfigurationOutput"></a>
<a id="tocSdescribenotificationconfigurationoutput"></a>
<a id="tocsdescribenotificationconfigurationoutput"></a>

```json
{
  "NotificationConfiguration": {
    "Status": {},
    "DestinationConfig": {
      "Uri": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationConfiguration|object|false|none|none|

<h2 id="tocS_DescribeSignalingChannelOutput">DescribeSignalingChannelOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribesignalingchanneloutput"></a>
<a id="schema_DescribeSignalingChannelOutput"></a>
<a id="tocSdescribesignalingchanneloutput"></a>
<a id="tocsdescribesignalingchanneloutput"></a>

```json
{
  "ChannelInfo": {
    "ChannelName": {},
    "ChannelARN": {},
    "ChannelType": {},
    "ChannelStatus": {},
    "CreationTime": {},
    "SingleMasterConfiguration": {
      "MessageTtlSeconds": {}
    },
    "Version": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelInfo|object|false|none|none|

<h2 id="tocS_DescribeStreamOutput">DescribeStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestreamoutput"></a>
<a id="schema_DescribeStreamOutput"></a>
<a id="tocSdescribestreamoutput"></a>
<a id="tocsdescribestreamoutput"></a>

```json
{
  "StreamInfo": {
    "DeviceName": {},
    "StreamName": {},
    "StreamARN": {},
    "MediaType": {},
    "KmsKeyId": {},
    "Version": {},
    "Status": {},
    "CreationTime": {},
    "DataRetentionInHours": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamInfo|object|false|none|none|

<h2 id="tocS_GetDataEndpointOutput">GetDataEndpointOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetdataendpointoutput"></a>
<a id="schema_GetDataEndpointOutput"></a>
<a id="tocSgetdataendpointoutput"></a>
<a id="tocsgetdataendpointoutput"></a>

```json
{
  "DataEndpoint": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataEndpoint|object|false|none|none|

<h2 id="tocS_GetSignalingChannelEndpointOutput">GetSignalingChannelEndpointOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetsignalingchannelendpointoutput"></a>
<a id="schema_GetSignalingChannelEndpointOutput"></a>
<a id="tocSgetsignalingchannelendpointoutput"></a>
<a id="tocsgetsignalingchannelendpointoutput"></a>

```json
{
  "ResourceEndpointList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceEndpointList|object|false|none|none|

<h2 id="tocS_ListOfProtocols">ListOfProtocols</h2>
<!-- backwards compatibility -->
<a id="schemalistofprotocols"></a>
<a id="schema_ListOfProtocols"></a>
<a id="tocSlistofprotocols"></a>
<a id="tocslistofprotocols"></a>

```json
[
  "WSS"
]
```

<h2 id="tocS_ChannelRole">ChannelRole</h2>
<!-- backwards compatibility -->
<a id="schemachannelrole"></a>
<a id="schema_ChannelRole"></a>
<a id="tocSchannelrole"></a>
<a id="tocschannelrole"></a>

```json
"MASTER"
```

<h2 id="tocS_ListSignalingChannelsOutput">ListSignalingChannelsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistsignalingchannelsoutput"></a>
<a id="schema_ListSignalingChannelsOutput"></a>
<a id="tocSlistsignalingchannelsoutput"></a>
<a id="tocslistsignalingchannelsoutput"></a>

```json
{
  "ChannelInfoList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelInfoList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ComparisonOperator">ComparisonOperator</h2>
<!-- backwards compatibility -->
<a id="schemacomparisonoperator"></a>
<a id="schema_ComparisonOperator"></a>
<a id="tocScomparisonoperator"></a>
<a id="tocscomparisonoperator"></a>

```json
"BEGINS_WITH"
```

<h2 id="tocS_ChannelName">ChannelName</h2>
<!-- backwards compatibility -->
<a id="schemachannelname"></a>
<a id="schema_ChannelName"></a>
<a id="tocSchannelname"></a>
<a id="tocschannelname"></a>

```json
"string"
```

<h2 id="tocS_ListStreamsOutput">ListStreamsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamsoutput"></a>
<a id="schema_ListStreamsOutput"></a>
<a id="tocSliststreamsoutput"></a>
<a id="tocsliststreamsoutput"></a>

```json
{
  "StreamInfoList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamInfoList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_StreamName">StreamName</h2>
<!-- backwards compatibility -->
<a id="schemastreamname"></a>
<a id="schema_StreamName"></a>
<a id="tocSstreamname"></a>
<a id="tocsstreamname"></a>

```json
"string"
```

<h2 id="tocS_ListTagsForResourceOutput">ListTagsForResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceoutput"></a>
<a id="schema_ListTagsForResourceOutput"></a>
<a id="tocSlisttagsforresourceoutput"></a>
<a id="tocslisttagsforresourceoutput"></a>

```json
{
  "NextToken": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForStreamOutput">ListTagsForStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforstreamoutput"></a>
<a id="schema_ListTagsForStreamOutput"></a>
<a id="tocSlisttagsforstreamoutput"></a>
<a id="tocslisttagsforstreamoutput"></a>

```json
{
  "NextToken": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_InvalidResourceFormatException">InvalidResourceFormatException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidresourceformatexception"></a>
<a id="schema_InvalidResourceFormatException"></a>
<a id="tocSinvalidresourceformatexception"></a>
<a id="tocsinvalidresourceformatexception"></a>

```json
null
```

<h2 id="tocS_StartEdgeConfigurationUpdateOutput">StartEdgeConfigurationUpdateOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartedgeconfigurationupdateoutput"></a>
<a id="schema_StartEdgeConfigurationUpdateOutput"></a>
<a id="tocSstartedgeconfigurationupdateoutput"></a>
<a id="tocsstartedgeconfigurationupdateoutput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "CreationTime": {},
  "LastUpdatedTime": {},
  "SyncStatus": {},
  "FailedStatusDetails": {},
  "EdgeConfig": {
    "HubDeviceArn": {},
    "RecorderConfig": {
      "MediaSourceConfig": {
        "MediaUriSecretArn": {},
        "MediaUriType": {}
      },
      "ScheduleConfig": {
        "ScheduleExpression": {},
        "DurationInSeconds": {}
      }
    },
    "UploaderConfig": {
      "ScheduleConfig": {
        "ScheduleExpression": {},
        "DurationInSeconds": {}
      }
    },
    "DeletionConfig": {
      "EdgeRetentionInHours": {},
      "LocalSizeConfig": {
        "MaxLocalMediaSizeInMB": {},
        "StrategyOnFullSize": {}
      },
      "DeleteAfterUpload": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|
|CreationTime|object|false|none|none|
|LastUpdatedTime|object|false|none|none|
|SyncStatus|object|false|none|none|
|FailedStatusDetails|object|false|none|none|
|EdgeConfig|object|false|none|none|

<h2 id="tocS_HubDeviceArn">HubDeviceArn</h2>
<!-- backwards compatibility -->
<a id="schemahubdevicearn"></a>
<a id="schema_HubDeviceArn"></a>
<a id="tocShubdevicearn"></a>
<a id="tocshubdevicearn"></a>

```json
"string"
```

<h2 id="tocS_RecorderConfig">RecorderConfig</h2>
<!-- backwards compatibility -->
<a id="schemarecorderconfig"></a>
<a id="schema_RecorderConfig"></a>
<a id="tocSrecorderconfig"></a>
<a id="tocsrecorderconfig"></a>

```json
{
  "MediaSourceConfig": {
    "MediaUriSecretArn": {},
    "MediaUriType": {}
  },
  "ScheduleConfig": {
    "ScheduleExpression": {},
    "DurationInSeconds": {}
  }
}
```

The recorder configuration consists of the local <code>MediaSourceConfig</code> details that are used as credentials to accesss the local media files streamed on the camera.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MediaSourceConfig|object|true|none|none|
|ScheduleConfig|object|false|none|none|

<h2 id="tocS_UploaderConfig">UploaderConfig</h2>
<!-- backwards compatibility -->
<a id="schemauploaderconfig"></a>
<a id="schema_UploaderConfig"></a>
<a id="tocSuploaderconfig"></a>
<a id="tocsuploaderconfig"></a>

```json
{
  "ScheduleConfig": {
    "ScheduleExpression": {},
    "DurationInSeconds": {}
  }
}
```

The configuration that consists of the <code>ScheduleExpression</code> and the <code>DurationInMinutesdetails</code>, that specify the scheduling to record from a camera, or local media file, onto the Edge Agent. If the <code>ScheduleExpression</code> is not provided, then the Edge Agent will always be in upload mode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduleConfig|object|true|none|none|

<h2 id="tocS_DeletionConfig">DeletionConfig</h2>
<!-- backwards compatibility -->
<a id="schemadeletionconfig"></a>
<a id="schema_DeletionConfig"></a>
<a id="tocSdeletionconfig"></a>
<a id="tocsdeletionconfig"></a>

```json
{
  "EdgeRetentionInHours": {},
  "LocalSizeConfig": {
    "MaxLocalMediaSizeInMB": {},
    "StrategyOnFullSize": {}
  },
  "DeleteAfterUpload": {}
}
```

The configuration details required to delete the connection of the stream from the Edge Agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EdgeRetentionInHours|object|false|none|none|
|LocalSizeConfig|object|false|none|none|
|DeleteAfterUpload|object|false|none|none|

<h2 id="tocS_NoDataRetentionException">NoDataRetentionException</h2>
<!-- backwards compatibility -->
<a id="schemanodataretentionexception"></a>
<a id="schema_NoDataRetentionException"></a>
<a id="tocSnodataretentionexception"></a>
<a id="tocsnodataretentionexception"></a>

```json
null
```

<h2 id="tocS_TagResourceOutput">TagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceoutput"></a>
<a id="schema_TagResourceOutput"></a>
<a id="tocStagresourceoutput"></a>
<a id="tocstagresourceoutput"></a>

```json
{}
```

<h2 id="tocS_TagStreamOutput">TagStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schematagstreamoutput"></a>
<a id="schema_TagStreamOutput"></a>
<a id="tocStagstreamoutput"></a>
<a id="tocstagstreamoutput"></a>

```json
{}
```

<h2 id="tocS_UntagResourceOutput">UntagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceoutput"></a>
<a id="schema_UntagResourceOutput"></a>
<a id="tocSuntagresourceoutput"></a>
<a id="tocsuntagresourceoutput"></a>

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

<h2 id="tocS_UntagStreamOutput">UntagStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schemauntagstreamoutput"></a>
<a id="schema_UntagStreamOutput"></a>
<a id="tocSuntagstreamoutput"></a>
<a id="tocsuntagstreamoutput"></a>

```json
{}
```

<h2 id="tocS_UpdateDataRetentionOutput">UpdateDataRetentionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedataretentionoutput"></a>
<a id="schema_UpdateDataRetentionOutput"></a>
<a id="tocSupdatedataretentionoutput"></a>
<a id="tocsupdatedataretentionoutput"></a>

```json
{}
```

<h2 id="tocS_UpdateImageGenerationConfigurationOutput">UpdateImageGenerationConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateimagegenerationconfigurationoutput"></a>
<a id="schema_UpdateImageGenerationConfigurationOutput"></a>
<a id="tocSupdateimagegenerationconfigurationoutput"></a>
<a id="tocsupdateimagegenerationconfigurationoutput"></a>

```json
{}
```

<h2 id="tocS_ConfigurationStatus">ConfigurationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationstatus"></a>
<a id="schema_ConfigurationStatus"></a>
<a id="tocSconfigurationstatus"></a>
<a id="tocsconfigurationstatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_ImageSelectorType">ImageSelectorType</h2>
<!-- backwards compatibility -->
<a id="schemaimageselectortype"></a>
<a id="schema_ImageSelectorType"></a>
<a id="tocSimageselectortype"></a>
<a id="tocsimageselectortype"></a>

```json
"SERVER_TIMESTAMP"
```

<h2 id="tocS_ImageGenerationDestinationConfig">ImageGenerationDestinationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaimagegenerationdestinationconfig"></a>
<a id="schema_ImageGenerationDestinationConfig"></a>
<a id="tocSimagegenerationdestinationconfig"></a>
<a id="tocsimagegenerationdestinationconfig"></a>

```json
{
  "Uri": {},
  "DestinationRegion": {}
}
```

The structure that contains the information required to deliver images to a customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Uri|object|true|none|none|
|DestinationRegion|object|true|none|none|

<h2 id="tocS_SamplingInterval">SamplingInterval</h2>
<!-- backwards compatibility -->
<a id="schemasamplinginterval"></a>
<a id="schema_SamplingInterval"></a>
<a id="tocSsamplinginterval"></a>
<a id="tocssamplinginterval"></a>

```json
3000
```

<h2 id="tocS_Format">Format</h2>
<!-- backwards compatibility -->
<a id="schemaformat"></a>
<a id="schema_Format"></a>
<a id="tocSformat"></a>
<a id="tocsformat"></a>

```json
"JPEG"
```

<h2 id="tocS_FormatConfig">FormatConfig</h2>
<!-- backwards compatibility -->
<a id="schemaformatconfig"></a>
<a id="schema_FormatConfig"></a>
<a id="tocSformatconfig"></a>
<a id="tocsformatconfig"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[FormatConfigValue](#schemaformatconfigvalue)|false|none|none|

<h2 id="tocS_WidthPixels">WidthPixels</h2>
<!-- backwards compatibility -->
<a id="schemawidthpixels"></a>
<a id="schema_WidthPixels"></a>
<a id="tocSwidthpixels"></a>
<a id="tocswidthpixels"></a>

```json
1
```

<h2 id="tocS_HeightPixels">HeightPixels</h2>
<!-- backwards compatibility -->
<a id="schemaheightpixels"></a>
<a id="schema_HeightPixels"></a>
<a id="tocSheightpixels"></a>
<a id="tocsheightpixels"></a>

```json
1
```

<h2 id="tocS_UpdateMediaStorageConfigurationOutput">UpdateMediaStorageConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemediastorageconfigurationoutput"></a>
<a id="schema_UpdateMediaStorageConfigurationOutput"></a>
<a id="tocSupdatemediastorageconfigurationoutput"></a>
<a id="tocsupdatemediastorageconfigurationoutput"></a>

```json
{}
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

<h2 id="tocS_MediaStorageConfigurationStatus">MediaStorageConfigurationStatus</h2>
<!-- backwards compatibility -->
<a id="schemamediastorageconfigurationstatus"></a>
<a id="schema_MediaStorageConfigurationStatus"></a>
<a id="tocSmediastorageconfigurationstatus"></a>
<a id="tocsmediastorageconfigurationstatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_UpdateNotificationConfigurationOutput">UpdateNotificationConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenotificationconfigurationoutput"></a>
<a id="schema_UpdateNotificationConfigurationOutput"></a>
<a id="tocSupdatenotificationconfigurationoutput"></a>
<a id="tocsupdatenotificationconfigurationoutput"></a>

```json
{}
```

<h2 id="tocS_NotificationDestinationConfig">NotificationDestinationConfig</h2>
<!-- backwards compatibility -->
<a id="schemanotificationdestinationconfig"></a>
<a id="schema_NotificationDestinationConfig"></a>
<a id="tocSnotificationdestinationconfig"></a>
<a id="tocsnotificationdestinationconfig"></a>

```json
{
  "Uri": {}
}
```

The structure that contains the information required to deliver a notification to a customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Uri|object|true|none|none|

<h2 id="tocS_UpdateSignalingChannelOutput">UpdateSignalingChannelOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesignalingchanneloutput"></a>
<a id="schema_UpdateSignalingChannelOutput"></a>
<a id="tocSupdatesignalingchanneloutput"></a>
<a id="tocsupdatesignalingchanneloutput"></a>

```json
{}
```

<h2 id="tocS_UpdateStreamOutput">UpdateStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestreamoutput"></a>
<a id="schema_UpdateStreamOutput"></a>
<a id="tocSupdatestreamoutput"></a>
<a id="tocsupdatestreamoutput"></a>

```json
{}
```

<h2 id="tocS_APIName">APIName</h2>
<!-- backwards compatibility -->
<a id="schemaapiname"></a>
<a id="schema_APIName"></a>
<a id="tocSapiname"></a>
<a id="tocsapiname"></a>

```json
"PUT_MEDIA"
```

<h2 id="tocS_ChannelType">ChannelType</h2>
<!-- backwards compatibility -->
<a id="schemachanneltype"></a>
<a id="schema_ChannelType"></a>
<a id="tocSchanneltype"></a>
<a id="tocschanneltype"></a>

```json
"SINGLE_MASTER"
```

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"CREATING"
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

<h2 id="tocS_SingleMasterConfiguration">SingleMasterConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasinglemasterconfiguration"></a>
<a id="schema_SingleMasterConfiguration"></a>
<a id="tocSsinglemasterconfiguration"></a>
<a id="tocssinglemasterconfiguration"></a>

```json
{
  "MessageTtlSeconds": {}
}
```

A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageTtlSeconds|object|false|none|none|

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
"string"
```

<h2 id="tocS_ChannelInfo">ChannelInfo</h2>
<!-- backwards compatibility -->
<a id="schemachannelinfo"></a>
<a id="schema_ChannelInfo"></a>
<a id="tocSchannelinfo"></a>
<a id="tocschannelinfo"></a>

```json
{
  "ChannelName": {},
  "ChannelARN": {},
  "ChannelType": {},
  "ChannelStatus": {},
  "CreationTime": {},
  "SingleMasterConfiguration": {
    "MessageTtlSeconds": {}
  },
  "Version": {}
}
```

A structure that encapsulates a signaling channel's metadata and properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelName|object|false|none|none|
|ChannelARN|object|false|none|none|
|ChannelType|object|false|none|none|
|ChannelStatus|object|false|none|none|
|CreationTime|object|false|none|none|
|SingleMasterConfiguration|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_ChannelInfoList">ChannelInfoList</h2>
<!-- backwards compatibility -->
<a id="schemachannelinfolist"></a>
<a id="schema_ChannelInfoList"></a>
<a id="tocSchannelinfolist"></a>
<a id="tocschannelinfolist"></a>

```json
[
  {
    "ChannelName": {},
    "ChannelARN": {},
    "ChannelType": {},
    "ChannelStatus": {},
    "CreationTime": {},
    "SingleMasterConfiguration": {
      "MessageTtlSeconds": {}
    },
    "Version": {}
  }
]
```

<h2 id="tocS_ChannelNameCondition">ChannelNameCondition</h2>
<!-- backwards compatibility -->
<a id="schemachannelnamecondition"></a>
<a id="schema_ChannelNameCondition"></a>
<a id="tocSchannelnamecondition"></a>
<a id="tocschannelnamecondition"></a>

```json
{
  "ComparisonOperator": {},
  "ComparisonValue": {}
}
```

An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComparisonOperator|object|false|none|none|
|ComparisonValue|object|false|none|none|

<h2 id="tocS_ChannelProtocol">ChannelProtocol</h2>
<!-- backwards compatibility -->
<a id="schemachannelprotocol"></a>
<a id="schema_ChannelProtocol"></a>
<a id="tocSchannelprotocol"></a>
<a id="tocschannelprotocol"></a>

```json
"WSS"
```

<h2 id="tocS_TagOnCreateList">TagOnCreateList</h2>
<!-- backwards compatibility -->
<a id="schematagoncreatelist"></a>
<a id="schema_TagOnCreateList"></a>
<a id="tocStagoncreatelist"></a>
<a id="tocstagoncreatelist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_CreateSignalingChannelInput">CreateSignalingChannelInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatesignalingchannelinput"></a>
<a id="schema_CreateSignalingChannelInput"></a>
<a id="tocScreatesignalingchannelinput"></a>
<a id="tocscreatesignalingchannelinput"></a>

```json
{
  "ChannelName": {},
  "ChannelType": {},
  "SingleMasterConfiguration": {
    "MessageTtlSeconds": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelName|object|true|none|none|
|ChannelType|object|false|none|none|
|SingleMasterConfiguration|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DeviceName">DeviceName</h2>
<!-- backwards compatibility -->
<a id="schemadevicename"></a>
<a id="schema_DeviceName"></a>
<a id="tocSdevicename"></a>
<a id="tocsdevicename"></a>

```json
"string"
```

<h2 id="tocS_MediaType">MediaType</h2>
<!-- backwards compatibility -->
<a id="schemamediatype"></a>
<a id="schema_MediaType"></a>
<a id="tocSmediatype"></a>
<a id="tocsmediatype"></a>

```json
"string"
```

<h2 id="tocS_KmsKeyId">KmsKeyId</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyid"></a>
<a id="schema_KmsKeyId"></a>
<a id="tocSkmskeyid"></a>
<a id="tocskmskeyid"></a>

```json
"string"
```

<h2 id="tocS_DataRetentionInHours">DataRetentionInHours</h2>
<!-- backwards compatibility -->
<a id="schemadataretentioninhours"></a>
<a id="schema_DataRetentionInHours"></a>
<a id="tocSdataretentioninhours"></a>
<a id="tocsdataretentioninhours"></a>

```json
0
```

<h2 id="tocS_ResourceTags">ResourceTags</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetags"></a>
<a id="schema_ResourceTags"></a>
<a id="tocSresourcetags"></a>
<a id="tocsresourcetags"></a>

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

<h2 id="tocS_CreateStreamInput">CreateStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreaminput"></a>
<a id="schema_CreateStreamInput"></a>
<a id="tocScreatestreaminput"></a>
<a id="tocscreatestreaminput"></a>

```json
{
  "DeviceName": {},
  "StreamName": {},
  "MediaType": {},
  "KmsKeyId": {},
  "DataRetentionInHours": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceName|object|false|none|none|
|StreamName|object|true|none|none|
|MediaType|object|false|none|none|
|KmsKeyId|object|false|none|none|
|DataRetentionInHours|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DataEndpoint">DataEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemadataendpoint"></a>
<a id="schema_DataEndpoint"></a>
<a id="tocSdataendpoint"></a>
<a id="tocsdataendpoint"></a>

```json
"string"
```

<h2 id="tocS_DataRetentionChangeInHours">DataRetentionChangeInHours</h2>
<!-- backwards compatibility -->
<a id="schemadataretentionchangeinhours"></a>
<a id="schema_DataRetentionChangeInHours"></a>
<a id="tocSdataretentionchangeinhours"></a>
<a id="tocsdataretentionchangeinhours"></a>

```json
1
```

<h2 id="tocS_DeleteAfterUpload">DeleteAfterUpload</h2>
<!-- backwards compatibility -->
<a id="schemadeleteafterupload"></a>
<a id="schema_DeleteAfterUpload"></a>
<a id="tocSdeleteafterupload"></a>
<a id="tocsdeleteafterupload"></a>

```json
true
```

<h2 id="tocS_DeleteSignalingChannelInput">DeleteSignalingChannelInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletesignalingchannelinput"></a>
<a id="schema_DeleteSignalingChannelInput"></a>
<a id="tocSdeletesignalingchannelinput"></a>
<a id="tocsdeletesignalingchannelinput"></a>

```json
{
  "ChannelARN": {},
  "CurrentVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelARN|object|true|none|none|
|CurrentVersion|object|false|none|none|

<h2 id="tocS_DeleteStreamInput">DeleteStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletestreaminput"></a>
<a id="schema_DeleteStreamInput"></a>
<a id="tocSdeletestreaminput"></a>
<a id="tocsdeletestreaminput"></a>

```json
{
  "StreamARN": {},
  "CurrentVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamARN|object|true|none|none|
|CurrentVersion|object|false|none|none|

<h2 id="tocS_EdgeRetentionInHours">EdgeRetentionInHours</h2>
<!-- backwards compatibility -->
<a id="schemaedgeretentioninhours"></a>
<a id="schema_EdgeRetentionInHours"></a>
<a id="tocSedgeretentioninhours"></a>
<a id="tocsedgeretentioninhours"></a>

```json
1
```

<h2 id="tocS_LocalSizeConfig">LocalSizeConfig</h2>
<!-- backwards compatibility -->
<a id="schemalocalsizeconfig"></a>
<a id="schema_LocalSizeConfig"></a>
<a id="tocSlocalsizeconfig"></a>
<a id="tocslocalsizeconfig"></a>

```json
{
  "MaxLocalMediaSizeInMB": {},
  "StrategyOnFullSize": {}
}
```

The configuration details that include the maximum size of the media (<code>MaxLocalMediaSizeInMB</code>) that you want to store for a stream on the Edge Agent, as well as the strategy that should be used (<code>StrategyOnFullSize</code>) when a stream's maximum size has been reached.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxLocalMediaSizeInMB|object|false|none|none|
|StrategyOnFullSize|object|false|none|none|

<h2 id="tocS_DescribeEdgeConfigurationInput">DescribeEdgeConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeedgeconfigurationinput"></a>
<a id="schema_DescribeEdgeConfigurationInput"></a>
<a id="tocSdescribeedgeconfigurationinput"></a>
<a id="tocsdescribeedgeconfigurationinput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_SyncStatus">SyncStatus</h2>
<!-- backwards compatibility -->
<a id="schemasyncstatus"></a>
<a id="schema_SyncStatus"></a>
<a id="tocSsyncstatus"></a>
<a id="tocssyncstatus"></a>

```json
"SYNCING"
```

<h2 id="tocS_FailedStatusDetails">FailedStatusDetails</h2>
<!-- backwards compatibility -->
<a id="schemafailedstatusdetails"></a>
<a id="schema_FailedStatusDetails"></a>
<a id="tocSfailedstatusdetails"></a>
<a id="tocsfailedstatusdetails"></a>

```json
"string"
```

<h2 id="tocS_EdgeConfig">EdgeConfig</h2>
<!-- backwards compatibility -->
<a id="schemaedgeconfig"></a>
<a id="schema_EdgeConfig"></a>
<a id="tocSedgeconfig"></a>
<a id="tocsedgeconfig"></a>

```json
{
  "HubDeviceArn": {},
  "RecorderConfig": {
    "MediaSourceConfig": {
      "MediaUriSecretArn": {},
      "MediaUriType": {}
    },
    "ScheduleConfig": {
      "ScheduleExpression": {},
      "DurationInSeconds": {}
    }
  },
  "UploaderConfig": {
    "ScheduleConfig": {
      "ScheduleExpression": {},
      "DurationInSeconds": {}
    }
  },
  "DeletionConfig": {
    "EdgeRetentionInHours": {},
    "LocalSizeConfig": {
      "MaxLocalMediaSizeInMB": {},
      "StrategyOnFullSize": {}
    },
    "DeleteAfterUpload": {}
  }
}
```

A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HubDeviceArn|object|true|none|none|
|RecorderConfig|object|true|none|none|
|UploaderConfig|object|false|none|none|
|DeletionConfig|object|false|none|none|

<h2 id="tocS_DescribeImageGenerationConfigurationInput">DescribeImageGenerationConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimagegenerationconfigurationinput"></a>
<a id="schema_DescribeImageGenerationConfigurationInput"></a>
<a id="tocSdescribeimagegenerationconfigurationinput"></a>
<a id="tocsdescribeimagegenerationconfigurationinput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_ImageGenerationConfiguration">ImageGenerationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaimagegenerationconfiguration"></a>
<a id="schema_ImageGenerationConfiguration"></a>
<a id="tocSimagegenerationconfiguration"></a>
<a id="tocsimagegenerationconfiguration"></a>

```json
{
  "Status": {},
  "ImageSelectorType": {},
  "DestinationConfig": {
    "Uri": {},
    "DestinationRegion": {}
  },
  "SamplingInterval": {},
  "Format": {},
  "FormatConfig": {
    "property1": "string",
    "property2": "string"
  },
  "WidthPixels": {},
  "HeightPixels": {}
}
```

The structure that contains the information required for the KVS images delivery. If null, the configuration will be deleted from the stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|
|ImageSelectorType|object|true|none|none|
|DestinationConfig|object|true|none|none|
|SamplingInterval|object|true|none|none|
|Format|object|true|none|none|
|FormatConfig|object|false|none|none|
|WidthPixels|object|false|none|none|
|HeightPixels|object|false|none|none|

<h2 id="tocS_MappedResourceConfigurationListLimit">MappedResourceConfigurationListLimit</h2>
<!-- backwards compatibility -->
<a id="schemamappedresourceconfigurationlistlimit"></a>
<a id="schema_MappedResourceConfigurationListLimit"></a>
<a id="tocSmappedresourceconfigurationlistlimit"></a>
<a id="tocsmappedresourceconfigurationlistlimit"></a>

```json
1
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

<h2 id="tocS_DescribeMappedResourceConfigurationInput">DescribeMappedResourceConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribemappedresourceconfigurationinput"></a>
<a id="schema_DescribeMappedResourceConfigurationInput"></a>
<a id="tocSdescribemappedresourceconfigurationinput"></a>
<a id="tocsdescribemappedresourceconfigurationinput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_MappedResourceConfigurationList">MappedResourceConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemamappedresourceconfigurationlist"></a>
<a id="schema_MappedResourceConfigurationList"></a>
<a id="tocSmappedresourceconfigurationlist"></a>
<a id="tocsmappedresourceconfigurationlist"></a>

```json
[
  {
    "Type": {},
    "ARN": {}
  }
]
```

<h2 id="tocS_DescribeMediaStorageConfigurationInput">DescribeMediaStorageConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribemediastorageconfigurationinput"></a>
<a id="schema_DescribeMediaStorageConfigurationInput"></a>
<a id="tocSdescribemediastorageconfigurationinput"></a>
<a id="tocsdescribemediastorageconfigurationinput"></a>

```json
{
  "ChannelName": {},
  "ChannelARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelName|object|false|none|none|
|ChannelARN|object|false|none|none|

<h2 id="tocS_MediaStorageConfiguration">MediaStorageConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamediastorageconfiguration"></a>
<a id="schema_MediaStorageConfiguration"></a>
<a id="tocSmediastorageconfiguration"></a>
<a id="tocsmediastorageconfiguration"></a>

```json
{
  "StreamARN": {},
  "Status": {}
}
```

A structure that encapsulates, or contains, the media storage configuration properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamARN|object|false|none|none|
|Status|object|true|none|none|

<h2 id="tocS_DescribeNotificationConfigurationInput">DescribeNotificationConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribenotificationconfigurationinput"></a>
<a id="schema_DescribeNotificationConfigurationInput"></a>
<a id="tocSdescribenotificationconfigurationinput"></a>
<a id="tocsdescribenotificationconfigurationinput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_NotificationConfiguration">NotificationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanotificationconfiguration"></a>
<a id="schema_NotificationConfiguration"></a>
<a id="tocSnotificationconfiguration"></a>
<a id="tocsnotificationconfiguration"></a>

```json
{
  "Status": {},
  "DestinationConfig": {
    "Uri": {}
  }
}
```

The structure that contains the notification information for the KVS images delivery. If this parameter is null, the configuration will be deleted from the stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|
|DestinationConfig|object|true|none|none|

<h2 id="tocS_DescribeSignalingChannelInput">DescribeSignalingChannelInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribesignalingchannelinput"></a>
<a id="schema_DescribeSignalingChannelInput"></a>
<a id="tocSdescribesignalingchannelinput"></a>
<a id="tocsdescribesignalingchannelinput"></a>

```json
{
  "ChannelName": {},
  "ChannelARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelName|object|false|none|none|
|ChannelARN|object|false|none|none|

<h2 id="tocS_DescribeStreamInput">DescribeStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestreaminput"></a>
<a id="schema_DescribeStreamInput"></a>
<a id="tocSdescribestreaminput"></a>
<a id="tocsdescribestreaminput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_StreamInfo">StreamInfo</h2>
<!-- backwards compatibility -->
<a id="schemastreaminfo"></a>
<a id="schema_StreamInfo"></a>
<a id="tocSstreaminfo"></a>
<a id="tocsstreaminfo"></a>

```json
{
  "DeviceName": {},
  "StreamName": {},
  "StreamARN": {},
  "MediaType": {},
  "KmsKeyId": {},
  "Version": {},
  "Status": {},
  "CreationTime": {},
  "DataRetentionInHours": {}
}
```

An object describing a Kinesis video stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceName|object|false|none|none|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|
|MediaType|object|false|none|none|
|KmsKeyId|object|false|none|none|
|Version|object|false|none|none|
|Status|object|false|none|none|
|CreationTime|object|false|none|none|
|DataRetentionInHours|object|false|none|none|

<h2 id="tocS_DestinationRegion">DestinationRegion</h2>
<!-- backwards compatibility -->
<a id="schemadestinationregion"></a>
<a id="schema_DestinationRegion"></a>
<a id="tocSdestinationregion"></a>
<a id="tocsdestinationregion"></a>

```json
"stringstr"
```

<h2 id="tocS_DestinationUri">DestinationUri</h2>
<!-- backwards compatibility -->
<a id="schemadestinationuri"></a>
<a id="schema_DestinationUri"></a>
<a id="tocSdestinationuri"></a>
<a id="tocsdestinationuri"></a>

```json
"string"
```

<h2 id="tocS_DurationInSeconds">DurationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemadurationinseconds"></a>
<a id="schema_DurationInSeconds"></a>
<a id="tocSdurationinseconds"></a>
<a id="tocsdurationinseconds"></a>

```json
60
```

<h2 id="tocS_FormatConfigValue">FormatConfigValue</h2>
<!-- backwards compatibility -->
<a id="schemaformatconfigvalue"></a>
<a id="schema_FormatConfigValue"></a>
<a id="tocSformatconfigvalue"></a>
<a id="tocsformatconfigvalue"></a>

```json
"string"
```

<h2 id="tocS_FormatConfigKey">FormatConfigKey</h2>
<!-- backwards compatibility -->
<a id="schemaformatconfigkey"></a>
<a id="schema_FormatConfigKey"></a>
<a id="tocSformatconfigkey"></a>
<a id="tocsformatconfigkey"></a>

```json
"JPEGQuality"
```

<h2 id="tocS_GetDataEndpointInput">GetDataEndpointInput</h2>
<!-- backwards compatibility -->
<a id="schemagetdataendpointinput"></a>
<a id="schema_GetDataEndpointInput"></a>
<a id="tocSgetdataendpointinput"></a>
<a id="tocsgetdataendpointinput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "APIName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|
|APIName|object|true|none|none|

<h2 id="tocS_SingleMasterChannelEndpointConfiguration">SingleMasterChannelEndpointConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasinglemasterchannelendpointconfiguration"></a>
<a id="schema_SingleMasterChannelEndpointConfiguration"></a>
<a id="tocSsinglemasterchannelendpointconfiguration"></a>
<a id="tocssinglemasterchannelendpointconfiguration"></a>

```json
{
  "Protocols": {},
  "Role": {}
}
```

An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Protocols|object|false|none|none|
|Role|object|false|none|none|

<h2 id="tocS_GetSignalingChannelEndpointInput">GetSignalingChannelEndpointInput</h2>
<!-- backwards compatibility -->
<a id="schemagetsignalingchannelendpointinput"></a>
<a id="schema_GetSignalingChannelEndpointInput"></a>
<a id="tocSgetsignalingchannelendpointinput"></a>
<a id="tocsgetsignalingchannelendpointinput"></a>

```json
{
  "ChannelARN": {},
  "SingleMasterChannelEndpointConfiguration": {
    "Protocols": {},
    "Role": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelARN|object|true|none|none|
|SingleMasterChannelEndpointConfiguration|object|false|none|none|

<h2 id="tocS_ResourceEndpointList">ResourceEndpointList</h2>
<!-- backwards compatibility -->
<a id="schemaresourceendpointlist"></a>
<a id="schema_ResourceEndpointList"></a>
<a id="tocSresourceendpointlist"></a>
<a id="tocsresourceendpointlist"></a>

```json
[
  {
    "Protocol": {},
    "ResourceEndpoint": {}
  }
]
```

<h2 id="tocS_ListStreamsInputLimit">ListStreamsInputLimit</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamsinputlimit"></a>
<a id="schema_ListStreamsInputLimit"></a>
<a id="tocSliststreamsinputlimit"></a>
<a id="tocsliststreamsinputlimit"></a>

```json
1
```

<h2 id="tocS_ListSignalingChannelsInput">ListSignalingChannelsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistsignalingchannelsinput"></a>
<a id="schema_ListSignalingChannelsInput"></a>
<a id="tocSlistsignalingchannelsinput"></a>
<a id="tocslistsignalingchannelsinput"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "ChannelNameCondition": {
    "ComparisonOperator": {},
    "ComparisonValue": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|ChannelNameCondition|object|false|none|none|

<h2 id="tocS_StreamNameCondition">StreamNameCondition</h2>
<!-- backwards compatibility -->
<a id="schemastreamnamecondition"></a>
<a id="schema_StreamNameCondition"></a>
<a id="tocSstreamnamecondition"></a>
<a id="tocsstreamnamecondition"></a>

```json
{
  "ComparisonOperator": {},
  "ComparisonValue": {}
}
```

Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComparisonOperator|object|false|none|none|
|ComparisonValue|object|false|none|none|

<h2 id="tocS_ListStreamsInput">ListStreamsInput</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamsinput"></a>
<a id="schema_ListStreamsInput"></a>
<a id="tocSliststreamsinput"></a>
<a id="tocsliststreamsinput"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "StreamNameCondition": {
    "ComparisonOperator": {},
    "ComparisonValue": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|StreamNameCondition|object|false|none|none|

<h2 id="tocS_StreamInfoList">StreamInfoList</h2>
<!-- backwards compatibility -->
<a id="schemastreaminfolist"></a>
<a id="schema_StreamInfoList"></a>
<a id="tocSstreaminfolist"></a>
<a id="tocsstreaminfolist"></a>

```json
[
  {
    "DeviceName": {},
    "StreamName": {},
    "StreamARN": {},
    "MediaType": {},
    "KmsKeyId": {},
    "Version": {},
    "Status": {},
    "CreationTime": {},
    "DataRetentionInHours": {}
  }
]
```

<h2 id="tocS_ListTagsForResourceInput">ListTagsForResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceinput"></a>
<a id="schema_ListTagsForResourceInput"></a>
<a id="tocSlisttagsforresourceinput"></a>
<a id="tocslisttagsforresourceinput"></a>

```json
{
  "NextToken": {},
  "ResourceARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|ResourceARN|object|true|none|none|

<h2 id="tocS_ListTagsForStreamInput">ListTagsForStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforstreaminput"></a>
<a id="schema_ListTagsForStreamInput"></a>
<a id="tocSlisttagsforstreaminput"></a>
<a id="tocslisttagsforstreaminput"></a>

```json
{
  "NextToken": {},
  "StreamARN": {},
  "StreamName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|StreamARN|object|false|none|none|
|StreamName|object|false|none|none|

<h2 id="tocS_MaxLocalMediaSizeInMB">MaxLocalMediaSizeInMB</h2>
<!-- backwards compatibility -->
<a id="schemamaxlocalmediasizeinmb"></a>
<a id="schema_MaxLocalMediaSizeInMB"></a>
<a id="tocSmaxlocalmediasizeinmb"></a>
<a id="tocsmaxlocalmediasizeinmb"></a>

```json
64
```

<h2 id="tocS_StrategyOnFullSize">StrategyOnFullSize</h2>
<!-- backwards compatibility -->
<a id="schemastrategyonfullsize"></a>
<a id="schema_StrategyOnFullSize"></a>
<a id="tocSstrategyonfullsize"></a>
<a id="tocsstrategyonfullsize"></a>

```json
"DELETE_OLDEST_MEDIA"
```

<h2 id="tocS_MappedResourceConfigurationListItem">MappedResourceConfigurationListItem</h2>
<!-- backwards compatibility -->
<a id="schemamappedresourceconfigurationlistitem"></a>
<a id="schema_MappedResourceConfigurationListItem"></a>
<a id="tocSmappedresourceconfigurationlistitem"></a>
<a id="tocsmappedresourceconfigurationlistitem"></a>

```json
{
  "Type": {},
  "ARN": {}
}
```

A structure that encapsulates, or contains, the media storage configuration properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|ARN|object|false|none|none|

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
"string"
```

<h2 id="tocS_MediaUriSecretArn">MediaUriSecretArn</h2>
<!-- backwards compatibility -->
<a id="schemamediaurisecretarn"></a>
<a id="schema_MediaUriSecretArn"></a>
<a id="tocSmediaurisecretarn"></a>
<a id="tocsmediaurisecretarn"></a>

```json
"password"
```

<h2 id="tocS_MediaUriType">MediaUriType</h2>
<!-- backwards compatibility -->
<a id="schemamediauritype"></a>
<a id="schema_MediaUriType"></a>
<a id="tocSmediauritype"></a>
<a id="tocsmediauritype"></a>

```json
"RTSP_URI"
```

<h2 id="tocS_MediaSourceConfig">MediaSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemamediasourceconfig"></a>
<a id="schema_MediaSourceConfig"></a>
<a id="tocSmediasourceconfig"></a>
<a id="tocsmediasourceconfig"></a>

```json
{
  "MediaUriSecretArn": {},
  "MediaUriType": {}
}
```

The configuration details that consist of the credentials required (<code>MediaUriSecretArn</code> and <code>MediaUriType</code>) to access the media files that are streamed to the camera.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MediaUriSecretArn|object|true|none|none|
|MediaUriType|object|true|none|none|

<h2 id="tocS_ScheduleConfig">ScheduleConfig</h2>
<!-- backwards compatibility -->
<a id="schemascheduleconfig"></a>
<a id="schema_ScheduleConfig"></a>
<a id="tocSscheduleconfig"></a>
<a id="tocsscheduleconfig"></a>

```json
{
  "ScheduleExpression": {},
  "DurationInSeconds": {}
}
```

<p>This API enables you to specify the duration that the camera, or local media file, should record onto the Edge Agent. The <code>ScheduleConfig</code> consists of the <code>ScheduleExpression</code> and the <code>DurationInMinutes</code> attributes. </p> <p>If the <code>ScheduleExpression</code> is not provided, then the Edge Agent will always be set to recording mode.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduleExpression|object|true|none|none|
|DurationInSeconds|object|true|none|none|

<h2 id="tocS_ResourceEndpoint">ResourceEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaresourceendpoint"></a>
<a id="schema_ResourceEndpoint"></a>
<a id="tocSresourceendpoint"></a>
<a id="tocsresourceendpoint"></a>

```json
"string"
```

<h2 id="tocS_ResourceEndpointListItem">ResourceEndpointListItem</h2>
<!-- backwards compatibility -->
<a id="schemaresourceendpointlistitem"></a>
<a id="schema_ResourceEndpointListItem"></a>
<a id="tocSresourceendpointlistitem"></a>
<a id="tocsresourceendpointlistitem"></a>

```json
{
  "Protocol": {},
  "ResourceEndpoint": {}
}
```

An object that describes the endpoint of the signaling channel returned by the <code>GetSignalingChannelEndpoint</code> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Protocol|object|false|none|none|
|ResourceEndpoint|object|false|none|none|

<h2 id="tocS_ScheduleExpression">ScheduleExpression</h2>
<!-- backwards compatibility -->
<a id="schemascheduleexpression"></a>
<a id="schema_ScheduleExpression"></a>
<a id="tocSscheduleexpression"></a>
<a id="tocsscheduleexpression"></a>

```json
"stringstrin"
```

<h2 id="tocS_StartEdgeConfigurationUpdateInput">StartEdgeConfigurationUpdateInput</h2>
<!-- backwards compatibility -->
<a id="schemastartedgeconfigurationupdateinput"></a>
<a id="schema_StartEdgeConfigurationUpdateInput"></a>
<a id="tocSstartedgeconfigurationupdateinput"></a>
<a id="tocsstartedgeconfigurationupdateinput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "EdgeConfig": {
    "HubDeviceArn": {},
    "RecorderConfig": {
      "MediaSourceConfig": {
        "MediaUriSecretArn": {},
        "MediaUriType": {}
      },
      "ScheduleConfig": {
        "ScheduleExpression": {},
        "DurationInSeconds": {}
      }
    },
    "UploaderConfig": {
      "ScheduleConfig": {
        "ScheduleExpression": {},
        "DurationInSeconds": {}
      }
    },
    "DeletionConfig": {
      "EdgeRetentionInHours": {},
      "LocalSizeConfig": {
        "MaxLocalMediaSizeInMB": {},
        "StrategyOnFullSize": {}
      },
      "DeleteAfterUpload": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|
|EdgeConfig|object|true|none|none|

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

<h2 id="tocS_TagResourceInput">TagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceinput"></a>
<a id="schema_TagResourceInput"></a>
<a id="tocStagresourceinput"></a>
<a id="tocstagresourceinput"></a>

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

<h2 id="tocS_TagStreamInput">TagStreamInput</h2>
<!-- backwards compatibility -->
<a id="schematagstreaminput"></a>
<a id="schema_TagStreamInput"></a>
<a id="tocStagstreaminput"></a>
<a id="tocstagstreaminput"></a>

```json
{
  "StreamARN": {},
  "StreamName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamARN|object|false|none|none|
|StreamName|object|false|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceInput">UntagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceinput"></a>
<a id="schema_UntagResourceInput"></a>
<a id="tocSuntagresourceinput"></a>
<a id="tocsuntagresourceinput"></a>

```json
{
  "ResourceARN": {},
  "TagKeyList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|TagKeyList|object|true|none|none|

<h2 id="tocS_UntagStreamInput">UntagStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemauntagstreaminput"></a>
<a id="schema_UntagStreamInput"></a>
<a id="tocSuntagstreaminput"></a>
<a id="tocsuntagstreaminput"></a>

```json
{
  "StreamARN": {},
  "StreamName": {},
  "TagKeyList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamARN|object|false|none|none|
|StreamName|object|false|none|none|
|TagKeyList|object|true|none|none|

<h2 id="tocS_UpdateDataRetentionOperation">UpdateDataRetentionOperation</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedataretentionoperation"></a>
<a id="schema_UpdateDataRetentionOperation"></a>
<a id="tocSupdatedataretentionoperation"></a>
<a id="tocsupdatedataretentionoperation"></a>

```json
"INCREASE_DATA_RETENTION"
```

<h2 id="tocS_UpdateDataRetentionInput">UpdateDataRetentionInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedataretentioninput"></a>
<a id="schema_UpdateDataRetentionInput"></a>
<a id="tocSupdatedataretentioninput"></a>
<a id="tocsupdatedataretentioninput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "CurrentVersion": {},
  "Operation": {},
  "DataRetentionChangeInHours": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|
|CurrentVersion|object|true|none|none|
|Operation|object|true|none|none|
|DataRetentionChangeInHours|object|true|none|none|

<h2 id="tocS_UpdateImageGenerationConfigurationInput">UpdateImageGenerationConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateimagegenerationconfigurationinput"></a>
<a id="schema_UpdateImageGenerationConfigurationInput"></a>
<a id="tocSupdateimagegenerationconfigurationinput"></a>
<a id="tocsupdateimagegenerationconfigurationinput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "ImageGenerationConfiguration": {
    "Status": {},
    "ImageSelectorType": {},
    "DestinationConfig": {
      "Uri": {},
      "DestinationRegion": {}
    },
    "SamplingInterval": {},
    "Format": {},
    "FormatConfig": {
      "property1": "string",
      "property2": "string"
    },
    "WidthPixels": {},
    "HeightPixels": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|
|ImageGenerationConfiguration|object|false|none|none|

<h2 id="tocS_UpdateMediaStorageConfigurationInput">UpdateMediaStorageConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemediastorageconfigurationinput"></a>
<a id="schema_UpdateMediaStorageConfigurationInput"></a>
<a id="tocSupdatemediastorageconfigurationinput"></a>
<a id="tocsupdatemediastorageconfigurationinput"></a>

```json
{
  "ChannelARN": {},
  "MediaStorageConfiguration": {
    "StreamARN": {},
    "Status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelARN|object|true|none|none|
|MediaStorageConfiguration|object|true|none|none|

<h2 id="tocS_UpdateNotificationConfigurationInput">UpdateNotificationConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenotificationconfigurationinput"></a>
<a id="schema_UpdateNotificationConfigurationInput"></a>
<a id="tocSupdatenotificationconfigurationinput"></a>
<a id="tocsupdatenotificationconfigurationinput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "NotificationConfiguration": {
    "Status": {},
    "DestinationConfig": {
      "Uri": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|
|NotificationConfiguration|object|false|none|none|

<h2 id="tocS_UpdateSignalingChannelInput">UpdateSignalingChannelInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesignalingchannelinput"></a>
<a id="schema_UpdateSignalingChannelInput"></a>
<a id="tocSupdatesignalingchannelinput"></a>
<a id="tocsupdatesignalingchannelinput"></a>

```json
{
  "ChannelARN": {},
  "CurrentVersion": {},
  "SingleMasterConfiguration": {
    "MessageTtlSeconds": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelARN|object|true|none|none|
|CurrentVersion|object|true|none|none|
|SingleMasterConfiguration|object|false|none|none|

<h2 id="tocS_UpdateStreamInput">UpdateStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestreaminput"></a>
<a id="schema_UpdateStreamInput"></a>
<a id="tocSupdatestreaminput"></a>
<a id="tocsupdatestreaminput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "CurrentVersion": {},
  "DeviceName": {},
  "MediaType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|
|CurrentVersion|object|true|none|none|
|DeviceName|object|false|none|none|
|MediaType|object|false|none|none|
