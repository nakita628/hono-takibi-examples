<h1 id="amazon-interactive-video-service">Amazon Interactive Video Service v2020-07-14</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p> <b>Introduction</b> </p> <p>The Amazon Interactive Video Service (IVS) API is REST compatible, using a standard HTTP API and an Amazon Web Services EventBridge event stream for responses. JSON is used for both requests and responses, including errors.</p> <p>The API is an Amazon Web Services regional service. For a list of supported regions and Amazon IVS HTTPS service endpoints, see the <a href="https://docs.aws.amazon.com/general/latest/gr/ivs.html">Amazon IVS page</a> in the <i>Amazon Web Services General Reference</i>.</p> <p> <i> <b>All API request parameters and URLs are case sensitive. </b> </i> </p> <p>For a summary of notable documentation changes in each release, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/doc-history.html"> Document History</a>.</p> <p> <b>Allowed Header Values</b> </p> <ul> <li> <p> <code> <b>Accept:</b> </code> application/json</p> </li> <li> <p> <code> <b>Accept-Encoding:</b> </code> gzip, deflate</p> </li> <li> <p> <code> <b>Content-Type:</b> </code>application/json</p> </li> </ul> <p> <b>Resources</b> </p> <p>The following resources contain information about your IVS live stream (see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/getting-started.html"> Getting Started with Amazon IVS</a>):</p> <ul> <li> <p> <b>Channel</b> — Stores configuration data related to your live stream. You first create a channel and then use the channel’s stream key to start your live stream. See the Channel endpoints for more information. </p> </li> <li> <p> <b>Stream key</b> — An identifier assigned by Amazon IVS when you create a channel, which is then used to authorize streaming. See the StreamKey endpoints for more information. <i> <b>Treat the stream key like a secret, since it allows anyone to stream to the channel.</b> </i> </p> </li> <li> <p> <b>Playback key pair</b> — Video playback may be restricted using playback-authorization tokens, which use public-key encryption. A playback key pair is the public-private pair of keys used to sign and validate the playback-authorization token. See the PlaybackKeyPair endpoints for more information.</p> </li> <li> <p> <b>Recording configuration</b> — Stores configuration related to recording a live stream and where to store the recorded content. Multiple channels can reference the same recording configuration. See the Recording Configuration endpoints for more information.</p> </li> </ul> <p> <b>Tagging</b> </p> <p>A <i>tag</i> is a metadata label that you assign to an Amazon Web Services resource. A tag comprises a <i>key</i> and a <i>value</i>, both set by you. For example, you might set a tag as <code>topic:nature</code> to label a particular video category. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.</p> <p>Tags can help you identify and organize your Amazon Web Services resources. For example, you can use the same tag for different resources to indicate that they are related. You can also use tags to manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html"> Access Tags</a>). </p> <p>The Amazon IVS API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and <a>ListTagsForResource</a>. The following resources support tagging: Channels, Stream Keys, Playback Key Pairs, and Recording Configurations.</p> <p>At most 50 tags can be applied to a resource. </p> <p> <b>Authentication versus Authorization</b> </p> <p>Note the differences between these concepts:</p> <ul> <li> <p> <i>Authentication</i> is about verifying identity. You need to be authenticated to sign Amazon IVS API requests.</p> </li> <li> <p> <i>Authorization</i> is about granting permissions. Your IAM roles need to have permissions for Amazon IVS API requests. In addition, authorization is needed to view <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Amazon IVS private channels</a>. (Private channels are channels that are enabled for "playback authorization.")</p> </li> </ul> <p> <b>Authentication</b> </p> <p>All Amazon IVS API requests must be authenticated with a signature. The Amazon Web Services Command-Line Interface (CLI) and Amazon IVS Player SDKs take care of signing the underlying API calls for you. However, if your application calls the Amazon IVS API directly, it’s your responsibility to sign the requests.</p> <p>You generate a signature using valid Amazon Web Services credentials that have permission to perform the requested action. For example, you must sign PutMetadata requests with a signature generated from a user account that has the <code>ivs:PutMetadata</code> permission.</p> <p>For more information:</p> <ul> <li> <p>Authentication and generating signatures — See <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests (Amazon Web Services Signature Version 4)</a> in the <i>Amazon Web Services General Reference</i>.</p> </li> <li> <p>Managing Amazon IVS permissions — See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/security-iam.html">Identity and Access Management</a> on the Security page of the <i>Amazon IVS User Guide</i>.</p> </li> </ul> <p> <b>Amazon Resource Names (ARNs)</b> </p> <p>ARNs uniquely identify AWS resources. An ARN is required when you need to specify a resource unambiguously across all of AWS, such as in IAM policies and API calls. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names</a> in the <i>AWS General Reference</i>.</p> <p> <b>Channel Endpoints</b> </p> <ul> <li> <p> <a>CreateChannel</a> — Creates a new channel and an associated stream key to start streaming.</p> </li> <li> <p> <a>GetChannel</a> — Gets the channel configuration for the specified channel ARN.</p> </li> <li> <p> <a>BatchGetChannel</a> — Performs <a>GetChannel</a> on multiple ARNs simultaneously.</p> </li> <li> <p> <a>ListChannels</a> — Gets summary information about all channels in your account, in the Amazon Web Services region where the API request is processed. This list can be filtered to match a specified name or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If you try to use both filters, you will get an error (409 Conflict Exception).</p> </li> <li> <p> <a>UpdateChannel</a> — Updates a channel's configuration. This does not affect an ongoing stream of this channel. You must stop and restart the stream for the changes to take effect.</p> </li> <li> <p> <a>DeleteChannel</a> — Deletes the specified channel.</p> </li> </ul> <p> <b>StreamKey Endpoints</b> </p> <ul> <li> <p> <a>CreateStreamKey</a> — Creates a stream key, used to initiate a stream, for the specified channel ARN.</p> </li> <li> <p> <a>GetStreamKey</a> — Gets stream key information for the specified ARN.</p> </li> <li> <p> <a>BatchGetStreamKey</a> — Performs <a>GetStreamKey</a> on multiple ARNs simultaneously.</p> </li> <li> <p> <a>ListStreamKeys</a> — Gets summary information about stream keys for the specified channel.</p> </li> <li> <p> <a>DeleteStreamKey</a> — Deletes the stream key for the specified ARN, so it can no longer be used to stream.</p> </li> </ul> <p> <b>Stream Endpoints</b> </p> <ul> <li> <p> <a>GetStream</a> — Gets information about the active (live) stream on a specified channel.</p> </li> <li> <p> <a>GetStreamSession</a> — Gets metadata on a specified stream.</p> </li> <li> <p> <a>ListStreams</a> — Gets summary information about live streams in your account, in the Amazon Web Services region where the API request is processed.</p> </li> <li> <p> <a>ListStreamSessions</a> — Gets a summary of current and previous streams for a specified channel in your account, in the AWS region where the API request is processed.</p> </li> <li> <p> <a>StopStream</a> — Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with <a>DeleteStreamKey</a> to prevent further streaming to a channel.</p> </li> <li> <p> <a>PutMetadata</a> — Inserts metadata into the active stream of the specified channel. At most 5 requests per second per channel are allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching your data into a single PutMetadata call.) At most 155 requests per second per account are allowed.</p> </li> </ul> <p> <b>PlaybackKeyPair Endpoints</b> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.</p> <ul> <li> <p> <a>ImportPlaybackKeyPair</a> — Imports the public portion of a new key pair and returns its <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> can then be used to generate viewer authorization tokens, to grant viewers access to private channels (channels enabled for playback authorization).</p> </li> <li> <p> <a>GetPlaybackKeyPair</a> — Gets a specified playback authorization key pair and returns the <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> held by the caller can be used to generate viewer authorization tokens, to grant viewers access to private channels.</p> </li> <li> <p> <a>ListPlaybackKeyPairs</a> — Gets summary information about playback key pairs.</p> </li> <li> <p> <a>DeletePlaybackKeyPair</a> — Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair’s <code>privateKey</code>.</p> </li> </ul> <p> <b>RecordingConfiguration Endpoints</b> </p> <ul> <li> <p> <a>CreateRecordingConfiguration</a> — Creates a new recording configuration, used to enable recording to Amazon S3.</p> </li> <li> <p> <a>GetRecordingConfiguration</a> — Gets the recording-configuration metadata for the specified ARN.</p> </li> <li> <p> <a>ListRecordingConfigurations</a> — Gets summary information about all recording configurations in your account, in the Amazon Web Services region where the API request is processed.</p> </li> <li> <p> <a>DeleteRecordingConfiguration</a> — Deletes the recording configuration for the specified ARN.</p> </li> </ul> <p> <b>Amazon Web Services Tags Endpoints</b> </p> <ul> <li> <p> <a>TagResource</a> — Adds or updates tags for the Amazon Web Services resource with the specified ARN.</p> </li> <li> <p> <a>UntagResource</a> — Removes tags from the resource with the specified ARN.</p> </li> <li> <p> <a>ListTagsForResource</a> — Gets information about Amazon Web Services tags for the specified ARN.</p> </li> </ul>

Base URLs:

* <a href="http://ivs.us-east-1.amazonaws.com">http://ivs.us-east-1.amazonaws.com</a> - The Amazon IVS multi-region endpoint

* <a href="https://ivs.us-east-1.amazonaws.com">https://ivs.us-east-1.amazonaws.com</a> - The Amazon IVS multi-region endpoint

* <a href="http://ivs.cn-north-1.amazonaws.com.cn">http://ivs.cn-north-1.amazonaws.com.cn</a> - The Amazon IVS endpoint for China (Beijing) and China (Ningxia)

* <a href="https://ivs.cn-north-1.amazonaws.com.cn">https://ivs.cn-north-1.amazonaws.com.cn</a> - The Amazon IVS endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/ivs/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-interactive-video-service-default">Default</h1>

## BatchGetChannel

<a id="opIdBatchGetChannel"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/BatchGetChannel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arns": [
      "string"
    ]
  }'
```

`POST /BatchGetChannel`

Performs <a>GetChannel</a> on multiple ARNs simultaneously.

> Body parameter

```json
{
  "arns": [
    "string"
  ]
}
```

<h3 id="batchgetchannel-parameters">Parameters</h3>

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
|» arns|body|[[ChannelArn](#schemachannelarn)]|true|Array of ARNs, one per channel.|

> Example responses

> 200 Response

```json
{
  "channels": {},
  "errors": {}
}
```

<h3 id="batchgetchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetChannelResponse](#schemabatchgetchannelresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetStreamKey

<a id="opIdBatchGetStreamKey"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/BatchGetStreamKey \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arns": [
      "string"
    ]
  }'
```

`POST /BatchGetStreamKey`

Performs <a>GetStreamKey</a> on multiple ARNs simultaneously.

> Body parameter

```json
{
  "arns": [
    "string"
  ]
}
```

<h3 id="batchgetstreamkey-parameters">Parameters</h3>

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
|» arns|body|[[StreamKeyArn](#schemastreamkeyarn)]|true|Array of ARNs, one per stream key.|

> Example responses

> 200 Response

```json
{
  "errors": {},
  "streamKeys": {}
}
```

<h3 id="batchgetstreamkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetStreamKeyResponse](#schemabatchgetstreamkeyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateChannel

<a id="opIdCreateChannel"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/CreateChannel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "authorized": true,
    "insecureIngest": true,
    "latencyMode": "NORMAL",
    "name": "string",
    "recordingConfigurationArn": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "BASIC"
  }'
```

`POST /CreateChannel`

Creates a new channel and an associated stream key to start streaming.

> Body parameter

```json
{
  "authorized": true,
  "insecureIngest": true,
  "latencyMode": "NORMAL",
  "name": "string",
  "recordingConfigurationArn": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "BASIC"
}
```

<h3 id="createchannel-parameters">Parameters</h3>

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
|» authorized|body|boolean|false|Whether the channel is private (enabled for playback authorization). Default: <code>false</code>.|
|» insecureIngest|body|boolean|false|Whether the channel allows insecure RTMP ingest. Default: <code>false</code>.|
|» latencyMode|body|string|false|Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. (Note: In the Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and Standard, respectively.) Default: <code>LOW</code>.|
|» name|body|string|false|Channel name.|
|» recordingConfigurationArn|body|string|false|Recording-configuration ARN. Default: "" (empty string, recording is disabled).|
|» tags|body|object|false|Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» type|body|string|false|<p>Channel type, which determines the allowable resolution and bitrate. <i>If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.</i> Default: <code>STANDARD</code>. Valid values:</p> <ul> <li> <p> <code>STANDARD</code>: Video is transcoded: multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Transcoding allows higher playback quality across a range of download speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is transcoded only for renditions 360p and below; above that, audio is passed through. This is the default.</p> </li> <li> <p> <code>BASIC</code>: Video is transmuxed: Amazon IVS delivers the original input to viewers. The viewer’s video-quality choice is limited to the original input. Resolution can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to 3.5 Mbps for resolutions between 480p and 1080p.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» latencyMode|NORMAL|
|» latencyMode|LOW|
|» type|BASIC|
|» type|STANDARD|

> Example responses

> 200 Response

```json
{
  "channel": {
    "arn": {},
    "authorized": {},
    "ingestEndpoint": {},
    "insecureIngest": {},
    "latencyMode": {},
    "name": {},
    "playbackUrl": {},
    "recordingConfigurationArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {}
  },
  "streamKey": {
    "arn": {},
    "channelArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "value": {}
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

<h3 id="createchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateChannelResponse](#schemacreatechannelresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|PendingVerification|[PendingVerification](#schemapendingverification)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRecordingConfiguration

<a id="opIdCreateRecordingConfiguration"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/CreateRecordingConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "destinationConfiguration": {
      "s3": {
        "bucketName": {}
      }
    },
    "name": "string",
    "recordingReconnectWindowSeconds": 0,
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "thumbnailConfiguration": {
      "recordingMode": {},
      "targetIntervalSeconds": {}
    }
  }'
```

`POST /CreateRecordingConfiguration`

<p>Creates a new recording configuration, used to enable recording to Amazon S3.</p> <p> <b>Known issue:</b> In the us-east-1 region, if you use the Amazon Web Services CLI to create a recording configuration, it returns success even if the S3 bucket is in a different region. In this case, the <code>state</code> of the recording configuration is <code>CREATE_FAILED</code> (instead of <code>ACTIVE</code>). (In other regions, the CLI correctly returns failure if the bucket is in a different region.)</p> <p> <b>Workaround:</b> Ensure that your S3 bucket is in the same region as the recording configuration. If you create a recording configuration in a different region as your S3 bucket, delete that recording configuration and create a new one with an S3 bucket from the correct region.</p>

> Body parameter

```json
{
  "destinationConfiguration": {
    "s3": {
      "bucketName": {}
    }
  },
  "name": "string",
  "recordingReconnectWindowSeconds": 0,
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "thumbnailConfiguration": {
    "recordingMode": {},
    "targetIntervalSeconds": {}
  }
}
```

<h3 id="createrecordingconfiguration-parameters">Parameters</h3>

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
|» destinationConfiguration|body|object|true|A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.|
|» » s3|body|object|false|none|
|» » » bucketName|body|object|true|none|
|» name|body|string|false|Recording-configuration name. The value does not need to be unique.|
|» recordingReconnectWindowSeconds|body|integer|false|If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together. Default: 0.|
|» tags|body|object|false|Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» thumbnailConfiguration|body|object|false|An object representing a configuration of thumbnails for recorded video.|
|» » recordingMode|body|object|false|none|
|» » targetIntervalSeconds|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "recordingConfiguration": {
    "arn": {},
    "destinationConfiguration": {
      "s3": {
        "bucketName": {}
      }
    },
    "name": {},
    "recordingReconnectWindowSeconds": {},
    "state": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "thumbnailConfiguration": {
      "recordingMode": {},
      "targetIntervalSeconds": {}
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

<h3 id="createrecordingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRecordingConfigurationResponse](#schemacreaterecordingconfigurationresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|PendingVerification|[PendingVerification](#schemapendingverification)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStreamKey

<a id="opIdCreateStreamKey"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/CreateStreamKey \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "channelArn": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /CreateStreamKey`

<p>Creates a stream key, used to initiate a stream, for the specified channel ARN.</p> <p>Note that <a>CreateChannel</a> creates a stream key. If you subsequently use CreateStreamKey on the same channel, it will fail because a stream key already exists and there is a limit of 1 stream key per channel. To reset the stream key on a channel, use <a>DeleteStreamKey</a> and then CreateStreamKey.</p>

> Body parameter

```json
{
  "channelArn": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createstreamkey-parameters">Parameters</h3>

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
|» channelArn|body|string|true|ARN of the channel for which to create the stream key.|
|» tags|body|object|false|Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "streamKey": {
    "arn": {},
    "channelArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "value": {}
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

<h3 id="createstreamkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStreamKeyResponse](#schemacreatestreamkeyresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|PendingVerification|[PendingVerification](#schemapendingverification)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteChannel

<a id="opIdDeleteChannel"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/DeleteChannel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arn": "string"
  }'
```

`POST /DeleteChannel`

<p>Deletes the specified channel and its associated stream keys.</p> <p>If you try to delete a live channel, you will get an error (409 ConflictException). To delete a channel that is live, call <a>StopStream</a>, wait for the Amazon EventBridge "Stream End" event (to verify that the stream's state is no longer Live), then call DeleteChannel. (See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html"> Using EventBridge with Amazon IVS</a>.) </p>

> Body parameter

```json
{
  "arn": "string"
}
```

<h3 id="deletechannel-parameters">Parameters</h3>

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
|» arn|body|string|true|ARN of the channel to be deleted.|

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

<h3 id="deletechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|PendingVerification|[PendingVerification](#schemapendingverification)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePlaybackKeyPair

<a id="opIdDeletePlaybackKeyPair"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/DeletePlaybackKeyPair \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arn": "string"
  }'
```

`POST /DeletePlaybackKeyPair`

Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair’s <code>privateKey</code>. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.

> Body parameter

```json
{
  "arn": "string"
}
```

<h3 id="deleteplaybackkeypair-parameters">Parameters</h3>

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
|» arn|body|string|true|ARN of the key pair to be deleted.|

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

<h3 id="deleteplaybackkeypair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePlaybackKeyPairResponse](#schemadeleteplaybackkeypairresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|PendingVerification|[PendingVerification](#schemapendingverification)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRecordingConfiguration

<a id="opIdDeleteRecordingConfiguration"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/DeleteRecordingConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arn": "string"
  }'
```

`POST /DeleteRecordingConfiguration`

<p>Deletes the recording configuration for the specified ARN.</p> <p>If you try to delete a recording configuration that is associated with a channel, you will get an error (409 ConflictException). To avoid this, for all channels that reference the recording configuration, first use <a>UpdateChannel</a> to set the <code>recordingConfigurationArn</code> field to an empty string, then use DeleteRecordingConfiguration.</p>

> Body parameter

```json
{
  "arn": "string"
}
```

<h3 id="deleterecordingconfiguration-parameters">Parameters</h3>

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
|» arn|body|string|true|ARN of the recording configuration to be deleted.|

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

<h3 id="deleterecordingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStreamKey

<a id="opIdDeleteStreamKey"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/DeleteStreamKey \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arn": "string"
  }'
```

`POST /DeleteStreamKey`

Deletes the stream key for the specified ARN, so it can no longer be used to stream.

> Body parameter

```json
{
  "arn": "string"
}
```

<h3 id="deletestreamkey-parameters">Parameters</h3>

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
|» arn|body|string|true|ARN of the stream key to be deleted.|

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

<h3 id="deletestreamkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|PendingVerification|[PendingVerification](#schemapendingverification)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetChannel

<a id="opIdGetChannel"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/GetChannel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arn": "string"
  }'
```

`POST /GetChannel`

Gets the channel configuration for the specified channel ARN. See also <a>BatchGetChannel</a>.

> Body parameter

```json
{
  "arn": "string"
}
```

<h3 id="getchannel-parameters">Parameters</h3>

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
|» arn|body|string|true|ARN of the channel for which the configuration is to be retrieved.|

> Example responses

> 200 Response

```json
{
  "channel": {
    "arn": {},
    "authorized": {},
    "ingestEndpoint": {},
    "insecureIngest": {},
    "latencyMode": {},
    "name": {},
    "playbackUrl": {},
    "recordingConfigurationArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {}
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

<h3 id="getchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetChannelResponse](#schemagetchannelresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPlaybackKeyPair

<a id="opIdGetPlaybackKeyPair"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/GetPlaybackKeyPair \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arn": "string"
  }'
```

`POST /GetPlaybackKeyPair`

Gets a specified playback authorization key pair and returns the <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> held by the caller can be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.

> Body parameter

```json
{
  "arn": "string"
}
```

<h3 id="getplaybackkeypair-parameters">Parameters</h3>

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
|» arn|body|string|true|ARN of the key pair to be returned.|

> Example responses

> 200 Response

```json
{
  "keyPair": {
    "arn": {},
    "fingerprint": {},
    "name": {},
    "tags": {
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

<h3 id="getplaybackkeypair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPlaybackKeyPairResponse](#schemagetplaybackkeypairresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRecordingConfiguration

<a id="opIdGetRecordingConfiguration"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/GetRecordingConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arn": "string"
  }'
```

`POST /GetRecordingConfiguration`

Gets the recording configuration for the specified ARN.

> Body parameter

```json
{
  "arn": "string"
}
```

<h3 id="getrecordingconfiguration-parameters">Parameters</h3>

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
|» arn|body|string|true|ARN of the recording configuration to be retrieved.|

> Example responses

> 200 Response

```json
{
  "recordingConfiguration": {
    "arn": {},
    "destinationConfiguration": {
      "s3": {
        "bucketName": {}
      }
    },
    "name": {},
    "recordingReconnectWindowSeconds": {},
    "state": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "thumbnailConfiguration": {
      "recordingMode": {},
      "targetIntervalSeconds": {}
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

<h3 id="getrecordingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRecordingConfigurationResponse](#schemagetrecordingconfigurationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStream

<a id="opIdGetStream"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/GetStream \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "channelArn": "string"
  }'
```

`POST /GetStream`

Gets information about the active (live) stream on a specified channel.

> Body parameter

```json
{
  "channelArn": "string"
}
```

<h3 id="getstream-parameters">Parameters</h3>

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
|» channelArn|body|string|true|Channel ARN for stream to be accessed.|

> Example responses

> 200 Response

```json
{
  "stream": {
    "channelArn": {},
    "health": {},
    "playbackUrl": {},
    "startTime": {},
    "state": {},
    "streamId": {},
    "viewerCount": {}
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

<h3 id="getstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStreamResponse](#schemagetstreamresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ChannelNotBroadcasting|[ChannelNotBroadcasting](#schemachannelnotbroadcasting)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStreamKey

<a id="opIdGetStreamKey"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/GetStreamKey \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arn": "string"
  }'
```

`POST /GetStreamKey`

Gets stream-key information for a specified ARN.

> Body parameter

```json
{
  "arn": "string"
}
```

<h3 id="getstreamkey-parameters">Parameters</h3>

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
|» arn|body|string|true|ARN for the stream key to be retrieved.|

> Example responses

> 200 Response

```json
{
  "streamKey": {
    "arn": {},
    "channelArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "value": {}
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

<h3 id="getstreamkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStreamKeyResponse](#schemagetstreamkeyresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStreamSession

<a id="opIdGetStreamSession"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/GetStreamSession \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "channelArn": "string",
    "streamId": "stringstringstringstringst"
  }'
```

`POST /GetStreamSession`

Gets metadata on a specified stream.

> Body parameter

```json
{
  "channelArn": "string",
  "streamId": "stringstringstringstringst"
}
```

<h3 id="getstreamsession-parameters">Parameters</h3>

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
|» channelArn|body|string|true|ARN of the channel resource|
|» streamId|body|string|false|Unique identifier for a live or previously live stream in the specified channel. If no <code>streamId</code> is provided, this returns the most recent stream session for the channel, if it exists.|

> Example responses

> 200 Response

```json
{
  "streamSession": {
    "channel": {
      "arn": {},
      "authorized": {},
      "ingestEndpoint": {},
      "insecureIngest": {},
      "latencyMode": {},
      "name": {},
      "playbackUrl": {},
      "recordingConfigurationArn": {},
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "type": {}
    },
    "endTime": {},
    "ingestConfiguration": {
      "audio": {
        "channels": {},
        "codec": {},
        "sampleRate": {},
        "targetBitrate": {}
      },
      "video": {
        "avcLevel": {},
        "avcProfile": {},
        "codec": {},
        "encoder": {},
        "targetBitrate": {},
        "targetFramerate": {},
        "videoHeight": {},
        "videoWidth": {}
      }
    },
    "recordingConfiguration": {
      "arn": {},
      "destinationConfiguration": {
        "s3": {
          "bucketName": {}
        }
      },
      "name": {},
      "recordingReconnectWindowSeconds": {},
      "state": {},
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "thumbnailConfiguration": {
        "recordingMode": {},
        "targetIntervalSeconds": {}
      }
    },
    "startTime": {},
    "streamId": {},
    "truncatedEvents": {}
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

<h3 id="getstreamsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStreamSessionResponse](#schemagetstreamsessionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportPlaybackKeyPair

<a id="opIdImportPlaybackKeyPair"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/ImportPlaybackKeyPair \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "publicKeyMaterial": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /ImportPlaybackKeyPair`

Imports the public portion of a new key pair and returns its <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> can then be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.

> Body parameter

```json
{
  "name": "string",
  "publicKeyMaterial": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="importplaybackkeypair-parameters">Parameters</h3>

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
|» name|body|string|false|Playback-key-pair name. The value does not need to be unique.|
|» publicKeyMaterial|body|string|true|The public portion of a customer-generated key pair.|
|» tags|body|object|false|Any tags provided with the request are added to the playback key pair tags. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "keyPair": {
    "arn": {},
    "fingerprint": {},
    "name": {},
    "tags": {
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="importplaybackkeypair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportPlaybackKeyPairResponse](#schemaimportplaybackkeypairresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|PendingVerification|[PendingVerification](#schemapendingverification)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListChannels

<a id="opIdListChannels"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/ListChannels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filterByName": "string",
    "filterByRecordingConfigurationArn": "string",
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListChannels`

Gets summary information about all channels in your account, in the Amazon Web Services region where the API request is processed. This list can be filtered to match a specified name or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If you try to use both filters, you will get an error (409 ConflictException).

> Body parameter

```json
{
  "filterByName": "string",
  "filterByRecordingConfigurationArn": "string",
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listchannels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» filterByName|body|string|false|Filters the channel list to match the specified name.|
|» filterByRecordingConfigurationArn|body|string|false|Filters the channel list to match the specified recording-configuration ARN.|
|» maxResults|body|integer|false|Maximum number of channels to return. Default: 100.|
|» nextToken|body|string|false|The first channel to retrieve. This is used for pagination; see the <code>nextToken</code> response field.|

> Example responses

> 200 Response

```json
{
  "channels": {},
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

<h3 id="listchannels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChannelsResponse](#schemalistchannelsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPlaybackKeyPairs

<a id="opIdListPlaybackKeyPairs"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/ListPlaybackKeyPairs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListPlaybackKeyPairs`

Gets summary information about playback key pairs. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.

> Body parameter

```json
{
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listplaybackkeypairs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» maxResults|body|integer|false|Maximum number of key pairs to return. Default: your service quota or 100, whichever is smaller.|
|» nextToken|body|string|false|The first key pair to retrieve. This is used for pagination; see the <code>nextToken</code> response field.|

> Example responses

> 200 Response

```json
{
  "keyPairs": {},
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

<h3 id="listplaybackkeypairs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPlaybackKeyPairsResponse](#schemalistplaybackkeypairsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRecordingConfigurations

<a id="opIdListRecordingConfigurations"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/ListRecordingConfigurations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListRecordingConfigurations`

Gets summary information about all recording configurations in your account, in the Amazon Web Services region where the API request is processed.

> Body parameter

```json
{
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listrecordingconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» maxResults|body|integer|false|Maximum number of recording configurations to return. Default: your service quota or 100, whichever is smaller. |
|» nextToken|body|string|false|The first recording configuration to retrieve. This is used for pagination; see the <code>nextToken</code> response field.|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "recordingConfigurations": {}
}
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

<h3 id="listrecordingconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRecordingConfigurationsResponse](#schemalistrecordingconfigurationsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStreamKeys

<a id="opIdListStreamKeys"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/ListStreamKeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "channelArn": "string",
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListStreamKeys`

Gets summary information about stream keys for the specified channel.

> Body parameter

```json
{
  "channelArn": "string",
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="liststreamkeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» channelArn|body|string|true|Channel ARN used to filter the list.|
|» maxResults|body|integer|false|Maximum number of streamKeys to return. Default: 1.|
|» nextToken|body|string|false|The first stream key to retrieve. This is used for pagination; see the <code>nextToken</code> response field.|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "streamKeys": {}
}
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

<h3 id="liststreamkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStreamKeysResponse](#schemaliststreamkeysresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStreamSessions

<a id="opIdListStreamSessions"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/ListStreamSessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "channelArn": "string",
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListStreamSessions`

Gets a summary of current and previous streams for a specified channel in your account, in the AWS region where the API request is processed.

> Body parameter

```json
{
  "channelArn": "string",
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="liststreamsessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» channelArn|body|string|true|Channel ARN used to filter the list.|
|» maxResults|body|integer|false|Maximum number of streams to return. Default: 100.|
|» nextToken|body|string|false|The first stream to retrieve. This is used for pagination; see the <code>nextToken</code> response field.|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "streamSessions": {}
}
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

<h3 id="liststreamsessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStreamSessionsResponse](#schemaliststreamsessionsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStreams

<a id="opIdListStreams"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/ListStreams \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filterBy": {
      "health": {}
    },
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListStreams`

Gets summary information about live streams in your account, in the Amazon Web Services region where the API request is processed.

> Body parameter

```json
{
  "filterBy": {
    "health": {}
  },
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="liststreams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» filterBy|body|object|false|Object specifying the stream attribute on which to filter.|
|» » health|body|object|false|none|
|» maxResults|body|integer|false|Maximum number of streams to return. Default: 100.|
|» nextToken|body|string|false|The first stream to retrieve. This is used for pagination; see the <code>nextToken</code> response field.|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "streams": {}
}
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
|200|OK|Success|[ListStreamsResponse](#schemaliststreamsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Gets information about Amazon Web Services tags for the specified ARN.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The ARN of the resource to be retrieved. The ARN must be URL-encoded.|
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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/tags/string \
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

Adds or updates tags for the Amazon Web Services resource with the specified ARN.

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
|resourceArn|path|string|true|ARN of the resource for which tags are to be added or updated. The ARN must be URL-encoded.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|Array of tags to be added or updated. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.|
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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutMetadata

<a id="opIdPutMetadata"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/PutMetadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "channelArn": "string",
    "metadata": "password"
  }'
```

`POST /PutMetadata`

Inserts metadata into the active stream of the specified channel. At most 5 requests per second per channel are allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching your data into a single PutMetadata call.) At most 155 requests per second per account are allowed. Also see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/metadata.html">Embedding Metadata within a Video Stream</a> in the <i>Amazon IVS User Guide</i>.

> Body parameter

```json
{
  "channelArn": "string",
  "metadata": "password"
}
```

<h3 id="putmetadata-parameters">Parameters</h3>

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
|» channelArn|body|string|true|ARN of the channel into which metadata is inserted. This channel must have an active stream.|
|» metadata|body|string(password)|true|Metadata to insert into the stream. Maximum: 1 KB per request.|

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

<h3 id="putmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ChannelNotBroadcasting|[ChannelNotBroadcasting](#schemachannelnotbroadcasting)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopStream

<a id="opIdStopStream"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/StopStream \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "channelArn": "string"
  }'
```

`POST /StopStream`

<p>Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with <a>DeleteStreamKey</a> to prevent further streaming to a channel.</p> <note> <p>Many streaming client-software libraries automatically reconnect a dropped RTMPS session, so to stop the stream permanently, you may want to first revoke the <code>streamKey</code> attached to the channel.</p> </note>

> Body parameter

```json
{
  "channelArn": "string"
}
```

<h3 id="stopstream-parameters">Parameters</h3>

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
|» channelArn|body|string|true|ARN of the channel for which the stream is to be stopped.|

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

<h3 id="stopstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopStreamResponse](#schemastopstreamresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ChannelNotBroadcasting|[ChannelNotBroadcasting](#schemachannelnotbroadcasting)|
|484|484|StreamUnavailable|[StreamUnavailable](#schemastreamunavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://ivs.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes tags from the resource with the specified ARN.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|ARN of the resource for which tags are to be removed. The ARN must be URL-encoded.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|Array of tags to be removed. Array of maps, each of the form s<code>tring:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.|
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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateChannel

<a id="opIdUpdateChannel"></a>

> Code samples

```bash
curl https://ivs.us-east-1.amazonaws.com/UpdateChannel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arn": "string",
    "authorized": true,
    "insecureIngest": true,
    "latencyMode": "NORMAL",
    "name": "string",
    "recordingConfigurationArn": "string",
    "type": "BASIC"
  }'
```

`POST /UpdateChannel`

Updates a channel's configuration. This does not affect an ongoing stream of this channel. You must stop and restart the stream for the changes to take effect.

> Body parameter

```json
{
  "arn": "string",
  "authorized": true,
  "insecureIngest": true,
  "latencyMode": "NORMAL",
  "name": "string",
  "recordingConfigurationArn": "string",
  "type": "BASIC"
}
```

<h3 id="updatechannel-parameters">Parameters</h3>

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
|» arn|body|string|true|ARN of the channel to be updated.|
|» authorized|body|boolean|false|Whether the channel is private (enabled for playback authorization).|
|» insecureIngest|body|boolean|false|Whether the channel allows insecure RTMP ingest. Default: <code>false</code>.|
|» latencyMode|body|string|false|Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. (Note: In the Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and Standard, respectively.)|
|» name|body|string|false|Channel name.|
|» recordingConfigurationArn|body|string|false|Recording-configuration ARN. If this is set to an empty string, recording is disabled. A value other than an empty string indicates that recording is enabled|
|» type|body|string|false|<p>Channel type, which determines the allowable resolution and bitrate. <i>If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately</i>. Valid values:</p> <ul> <li> <p> <code>STANDARD</code>: Video is transcoded: multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Transcoding allows higher playback quality across a range of download speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is transcoded only for renditions 360p and below; above that, audio is passed through. This is the default.</p> </li> <li> <p> <code>BASIC</code>: Video is transmuxed: Amazon IVS delivers the original input to viewers. The viewer’s video-quality choice is limited to the original input. Resolution can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to 3.5 Mbps for resolutions between 480p and 1080p.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» latencyMode|NORMAL|
|» latencyMode|LOW|
|» type|BASIC|
|» type|STANDARD|

> Example responses

> 200 Response

```json
{
  "channel": {
    "arn": {},
    "authorized": {},
    "ingestEndpoint": {},
    "insecureIngest": {},
    "latencyMode": {},
    "name": {},
    "playbackUrl": {},
    "recordingConfigurationArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {}
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

<h3 id="updatechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateChannelResponse](#schemaupdatechannelresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|PendingVerification|[PendingVerification](#schemapendingverification)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchGetChannelResponse">BatchGetChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetchannelresponse"></a>
<a id="schema_BatchGetChannelResponse"></a>
<a id="tocSbatchgetchannelresponse"></a>
<a id="tocsbatchgetchannelresponse"></a>

```json
{
  "channels": {},
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|object|false|none|none|
|errors|object|false|none|none|

<h2 id="tocS_ChannelArn">ChannelArn</h2>
<!-- backwards compatibility -->
<a id="schemachannelarn"></a>
<a id="schema_ChannelArn"></a>
<a id="tocSchannelarn"></a>
<a id="tocschannelarn"></a>

```json
"string"
```

<h2 id="tocS_BatchGetStreamKeyResponse">BatchGetStreamKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetstreamkeyresponse"></a>
<a id="schema_BatchGetStreamKeyResponse"></a>
<a id="tocSbatchgetstreamkeyresponse"></a>
<a id="tocsbatchgetstreamkeyresponse"></a>

```json
{
  "errors": {},
  "streamKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|
|streamKeys|object|false|none|none|

<h2 id="tocS_StreamKeyArn">StreamKeyArn</h2>
<!-- backwards compatibility -->
<a id="schemastreamkeyarn"></a>
<a id="schema_StreamKeyArn"></a>
<a id="tocSstreamkeyarn"></a>
<a id="tocsstreamkeyarn"></a>

```json
"string"
```

<h2 id="tocS_CreateChannelResponse">CreateChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelresponse"></a>
<a id="schema_CreateChannelResponse"></a>
<a id="tocScreatechannelresponse"></a>
<a id="tocscreatechannelresponse"></a>

```json
{
  "channel": {
    "arn": {},
    "authorized": {},
    "ingestEndpoint": {},
    "insecureIngest": {},
    "latencyMode": {},
    "name": {},
    "playbackUrl": {},
    "recordingConfigurationArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {}
  },
  "streamKey": {
    "arn": {},
    "channelArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "value": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|
|streamKey|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
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

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
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

<h2 id="tocS_PendingVerification">PendingVerification</h2>
<!-- backwards compatibility -->
<a id="schemapendingverification"></a>
<a id="schema_PendingVerification"></a>
<a id="tocSpendingverification"></a>
<a id="tocspendingverification"></a>

```json
null
```

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateRecordingConfigurationResponse">CreateRecordingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreaterecordingconfigurationresponse"></a>
<a id="schema_CreateRecordingConfigurationResponse"></a>
<a id="tocScreaterecordingconfigurationresponse"></a>
<a id="tocscreaterecordingconfigurationresponse"></a>

```json
{
  "recordingConfiguration": {
    "arn": {},
    "destinationConfiguration": {
      "s3": {
        "bucketName": {}
      }
    },
    "name": {},
    "recordingReconnectWindowSeconds": {},
    "state": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "thumbnailConfiguration": {
      "recordingMode": {},
      "targetIntervalSeconds": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recordingConfiguration|object|false|none|none|

<h2 id="tocS_S3DestinationConfiguration">S3DestinationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemas3destinationconfiguration"></a>
<a id="schema_S3DestinationConfiguration"></a>
<a id="tocSs3destinationconfiguration"></a>
<a id="tocss3destinationconfiguration"></a>

```json
{
  "bucketName": {}
}
```

A complex type that describes an S3 location where recorded videos will be stored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|

<h2 id="tocS_RecordingMode">RecordingMode</h2>
<!-- backwards compatibility -->
<a id="schemarecordingmode"></a>
<a id="schema_RecordingMode"></a>
<a id="tocSrecordingmode"></a>
<a id="tocsrecordingmode"></a>

```json
"DISABLED"
```

<h2 id="tocS_TargetIntervalSeconds">TargetIntervalSeconds</h2>
<!-- backwards compatibility -->
<a id="schematargetintervalseconds"></a>
<a id="schema_TargetIntervalSeconds"></a>
<a id="tocStargetintervalseconds"></a>
<a id="tocstargetintervalseconds"></a>

```json
1
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

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_CreateStreamKeyResponse">CreateStreamKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreamkeyresponse"></a>
<a id="schema_CreateStreamKeyResponse"></a>
<a id="tocScreatestreamkeyresponse"></a>
<a id="tocscreatestreamkeyresponse"></a>

```json
{
  "streamKey": {
    "arn": {},
    "channelArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "value": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|streamKey|object|false|none|none|

<h2 id="tocS_DeletePlaybackKeyPairResponse">DeletePlaybackKeyPairResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteplaybackkeypairresponse"></a>
<a id="schema_DeletePlaybackKeyPairResponse"></a>
<a id="tocSdeleteplaybackkeypairresponse"></a>
<a id="tocsdeleteplaybackkeypairresponse"></a>

```json
{}
```

<h2 id="tocS_GetChannelResponse">GetChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchannelresponse"></a>
<a id="schema_GetChannelResponse"></a>
<a id="tocSgetchannelresponse"></a>
<a id="tocsgetchannelresponse"></a>

```json
{
  "channel": {
    "arn": {},
    "authorized": {},
    "ingestEndpoint": {},
    "insecureIngest": {},
    "latencyMode": {},
    "name": {},
    "playbackUrl": {},
    "recordingConfigurationArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|

<h2 id="tocS_GetPlaybackKeyPairResponse">GetPlaybackKeyPairResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetplaybackkeypairresponse"></a>
<a id="schema_GetPlaybackKeyPairResponse"></a>
<a id="tocSgetplaybackkeypairresponse"></a>
<a id="tocsgetplaybackkeypairresponse"></a>

```json
{
  "keyPair": {
    "arn": {},
    "fingerprint": {},
    "name": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyPair|object|false|none|none|

<h2 id="tocS_GetRecordingConfigurationResponse">GetRecordingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrecordingconfigurationresponse"></a>
<a id="schema_GetRecordingConfigurationResponse"></a>
<a id="tocSgetrecordingconfigurationresponse"></a>
<a id="tocsgetrecordingconfigurationresponse"></a>

```json
{
  "recordingConfiguration": {
    "arn": {},
    "destinationConfiguration": {
      "s3": {
        "bucketName": {}
      }
    },
    "name": {},
    "recordingReconnectWindowSeconds": {},
    "state": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "thumbnailConfiguration": {
      "recordingMode": {},
      "targetIntervalSeconds": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recordingConfiguration|object|false|none|none|

<h2 id="tocS_GetStreamResponse">GetStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamresponse"></a>
<a id="schema_GetStreamResponse"></a>
<a id="tocSgetstreamresponse"></a>
<a id="tocsgetstreamresponse"></a>

```json
{
  "stream": {
    "channelArn": {},
    "health": {},
    "playbackUrl": {},
    "startTime": {},
    "state": {},
    "streamId": {},
    "viewerCount": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stream|object|false|none|none|

<h2 id="tocS_ChannelNotBroadcasting">ChannelNotBroadcasting</h2>
<!-- backwards compatibility -->
<a id="schemachannelnotbroadcasting"></a>
<a id="schema_ChannelNotBroadcasting"></a>
<a id="tocSchannelnotbroadcasting"></a>
<a id="tocschannelnotbroadcasting"></a>

```json
null
```

<h2 id="tocS_GetStreamKeyResponse">GetStreamKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamkeyresponse"></a>
<a id="schema_GetStreamKeyResponse"></a>
<a id="tocSgetstreamkeyresponse"></a>
<a id="tocsgetstreamkeyresponse"></a>

```json
{
  "streamKey": {
    "arn": {},
    "channelArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "value": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|streamKey|object|false|none|none|

<h2 id="tocS_GetStreamSessionResponse">GetStreamSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamsessionresponse"></a>
<a id="schema_GetStreamSessionResponse"></a>
<a id="tocSgetstreamsessionresponse"></a>
<a id="tocsgetstreamsessionresponse"></a>

```json
{
  "streamSession": {
    "channel": {
      "arn": {},
      "authorized": {},
      "ingestEndpoint": {},
      "insecureIngest": {},
      "latencyMode": {},
      "name": {},
      "playbackUrl": {},
      "recordingConfigurationArn": {},
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "type": {}
    },
    "endTime": {},
    "ingestConfiguration": {
      "audio": {
        "channels": {},
        "codec": {},
        "sampleRate": {},
        "targetBitrate": {}
      },
      "video": {
        "avcLevel": {},
        "avcProfile": {},
        "codec": {},
        "encoder": {},
        "targetBitrate": {},
        "targetFramerate": {},
        "videoHeight": {},
        "videoWidth": {}
      }
    },
    "recordingConfiguration": {
      "arn": {},
      "destinationConfiguration": {
        "s3": {
          "bucketName": {}
        }
      },
      "name": {},
      "recordingReconnectWindowSeconds": {},
      "state": {},
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "thumbnailConfiguration": {
        "recordingMode": {},
        "targetIntervalSeconds": {}
      }
    },
    "startTime": {},
    "streamId": {},
    "truncatedEvents": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|streamSession|object|false|none|none|

<h2 id="tocS_ImportPlaybackKeyPairResponse">ImportPlaybackKeyPairResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportplaybackkeypairresponse"></a>
<a id="schema_ImportPlaybackKeyPairResponse"></a>
<a id="tocSimportplaybackkeypairresponse"></a>
<a id="tocsimportplaybackkeypairresponse"></a>

```json
{
  "keyPair": {
    "arn": {},
    "fingerprint": {},
    "name": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyPair|object|false|none|none|

<h2 id="tocS_ListChannelsResponse">ListChannelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsresponse"></a>
<a id="schema_ListChannelsResponse"></a>
<a id="tocSlistchannelsresponse"></a>
<a id="tocslistchannelsresponse"></a>

```json
{
  "channels": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListPlaybackKeyPairsResponse">ListPlaybackKeyPairsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistplaybackkeypairsresponse"></a>
<a id="schema_ListPlaybackKeyPairsResponse"></a>
<a id="tocSlistplaybackkeypairsresponse"></a>
<a id="tocslistplaybackkeypairsresponse"></a>

```json
{
  "keyPairs": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyPairs|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListRecordingConfigurationsResponse">ListRecordingConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrecordingconfigurationsresponse"></a>
<a id="schema_ListRecordingConfigurationsResponse"></a>
<a id="tocSlistrecordingconfigurationsresponse"></a>
<a id="tocslistrecordingconfigurationsresponse"></a>

```json
{
  "nextToken": {},
  "recordingConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|recordingConfigurations|object|true|none|none|

<h2 id="tocS_ListStreamKeysResponse">ListStreamKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamkeysresponse"></a>
<a id="schema_ListStreamKeysResponse"></a>
<a id="tocSliststreamkeysresponse"></a>
<a id="tocsliststreamkeysresponse"></a>

```json
{
  "nextToken": {},
  "streamKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|streamKeys|object|true|none|none|

<h2 id="tocS_ListStreamSessionsResponse">ListStreamSessionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamsessionsresponse"></a>
<a id="schema_ListStreamSessionsResponse"></a>
<a id="tocSliststreamsessionsresponse"></a>
<a id="tocsliststreamsessionsresponse"></a>

```json
{
  "nextToken": {},
  "streamSessions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|streamSessions|object|true|none|none|

<h2 id="tocS_ListStreamsResponse">ListStreamsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamsresponse"></a>
<a id="schema_ListStreamsResponse"></a>
<a id="tocSliststreamsresponse"></a>
<a id="tocsliststreamsresponse"></a>

```json
{
  "nextToken": {},
  "streams": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|streams|object|true|none|none|

<h2 id="tocS_StreamHealth">StreamHealth</h2>
<!-- backwards compatibility -->
<a id="schemastreamhealth"></a>
<a id="schema_StreamHealth"></a>
<a id="tocSstreamhealth"></a>
<a id="tocsstreamhealth"></a>

```json
"HEALTHY"
```

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
|tags|object|true|none|none|

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_StopStreamResponse">StopStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopstreamresponse"></a>
<a id="schema_StopStreamResponse"></a>
<a id="tocSstopstreamresponse"></a>
<a id="tocsstopstreamresponse"></a>

```json
{}
```

<h2 id="tocS_StreamUnavailable">StreamUnavailable</h2>
<!-- backwards compatibility -->
<a id="schemastreamunavailable"></a>
<a id="schema_StreamUnavailable"></a>
<a id="tocSstreamunavailable"></a>
<a id="tocsstreamunavailable"></a>

```json
null
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

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_UpdateChannelResponse">UpdateChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelresponse"></a>
<a id="schema_UpdateChannelResponse"></a>
<a id="tocSupdatechannelresponse"></a>
<a id="tocsupdatechannelresponse"></a>

```json
{
  "channel": {
    "arn": {},
    "authorized": {},
    "ingestEndpoint": {},
    "insecureIngest": {},
    "latencyMode": {},
    "name": {},
    "playbackUrl": {},
    "recordingConfigurationArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|[Channel](#schemachannel)|false|none|Object specifying a channel.|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
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

<h2 id="tocS_AudioConfiguration">AudioConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaaudioconfiguration"></a>
<a id="schema_AudioConfiguration"></a>
<a id="tocSaudioconfiguration"></a>
<a id="tocsaudioconfiguration"></a>

```json
{
  "channels": {},
  "codec": {},
  "sampleRate": {},
  "targetBitrate": {}
}
```

Object specifying a stream’s audio configuration, as set up by the broadcaster (usually in an encoder). This is part of the <a>IngestConfiguration</a> object and used for monitoring stream health.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|object|false|none|none|
|codec|object|false|none|none|
|sampleRate|object|false|none|none|
|targetBitrate|object|false|none|none|

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_errorCode">errorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_errorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"string"
```

<h2 id="tocS_errorMessage">errorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_errorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_BatchError">BatchError</h2>
<!-- backwards compatibility -->
<a id="schemabatcherror"></a>
<a id="schema_BatchError"></a>
<a id="tocSbatcherror"></a>
<a id="tocsbatcherror"></a>

```json
{
  "arn": {},
  "code": {},
  "message": {}
}
```

Error related to a specific channel, specified by its ARN.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|code|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_BatchErrors">BatchErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatcherrors"></a>
<a id="schema_BatchErrors"></a>
<a id="tocSbatcherrors"></a>
<a id="tocsbatcherrors"></a>

```json
[
  {
    "arn": {},
    "code": {},
    "message": {}
  }
]
```

<h2 id="tocS_ChannelArnList">ChannelArnList</h2>
<!-- backwards compatibility -->
<a id="schemachannelarnlist"></a>
<a id="schema_ChannelArnList"></a>
<a id="tocSchannelarnlist"></a>
<a id="tocschannelarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchGetChannelRequest">BatchGetChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetchannelrequest"></a>
<a id="schema_BatchGetChannelRequest"></a>
<a id="tocSbatchgetchannelrequest"></a>
<a id="tocsbatchgetchannelrequest"></a>

```json
{
  "arns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arns|object|true|none|none|

<h2 id="tocS_Channels">Channels</h2>
<!-- backwards compatibility -->
<a id="schemachannels"></a>
<a id="schema_Channels"></a>
<a id="tocSchannels"></a>
<a id="tocschannels"></a>

```json
[
  {
    "arn": {},
    "authorized": {},
    "ingestEndpoint": {},
    "insecureIngest": {},
    "latencyMode": {},
    "name": {},
    "playbackUrl": {},
    "recordingConfigurationArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {}
  }
]
```

<h2 id="tocS_StreamKeyArnList">StreamKeyArnList</h2>
<!-- backwards compatibility -->
<a id="schemastreamkeyarnlist"></a>
<a id="schema_StreamKeyArnList"></a>
<a id="tocSstreamkeyarnlist"></a>
<a id="tocsstreamkeyarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchGetStreamKeyRequest">BatchGetStreamKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetstreamkeyrequest"></a>
<a id="schema_BatchGetStreamKeyRequest"></a>
<a id="tocSbatchgetstreamkeyrequest"></a>
<a id="tocsbatchgetstreamkeyrequest"></a>

```json
{
  "arns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arns|object|true|none|none|

<h2 id="tocS_StreamKeys">StreamKeys</h2>
<!-- backwards compatibility -->
<a id="schemastreamkeys"></a>
<a id="schema_StreamKeys"></a>
<a id="tocSstreamkeys"></a>
<a id="tocsstreamkeys"></a>

```json
[
  {
    "arn": {},
    "channelArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "value": {}
  }
]
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

<h2 id="tocS_IsAuthorized">IsAuthorized</h2>
<!-- backwards compatibility -->
<a id="schemaisauthorized"></a>
<a id="schema_IsAuthorized"></a>
<a id="tocSisauthorized"></a>
<a id="tocsisauthorized"></a>

```json
true
```

<h2 id="tocS_IngestEndpoint">IngestEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaingestendpoint"></a>
<a id="schema_IngestEndpoint"></a>
<a id="tocSingestendpoint"></a>
<a id="tocsingestendpoint"></a>

```json
"string"
```

<h2 id="tocS_InsecureIngest">InsecureIngest</h2>
<!-- backwards compatibility -->
<a id="schemainsecureingest"></a>
<a id="schema_InsecureIngest"></a>
<a id="tocSinsecureingest"></a>
<a id="tocsinsecureingest"></a>

```json
true
```

<h2 id="tocS_ChannelLatencyMode">ChannelLatencyMode</h2>
<!-- backwards compatibility -->
<a id="schemachannellatencymode"></a>
<a id="schema_ChannelLatencyMode"></a>
<a id="tocSchannellatencymode"></a>
<a id="tocschannellatencymode"></a>

```json
"NORMAL"
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

<h2 id="tocS_PlaybackURL">PlaybackURL</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackurl"></a>
<a id="schema_PlaybackURL"></a>
<a id="tocSplaybackurl"></a>
<a id="tocsplaybackurl"></a>

```json
"string"
```

<h2 id="tocS_ChannelRecordingConfigurationArn">ChannelRecordingConfigurationArn</h2>
<!-- backwards compatibility -->
<a id="schemachannelrecordingconfigurationarn"></a>
<a id="schema_ChannelRecordingConfigurationArn"></a>
<a id="tocSchannelrecordingconfigurationarn"></a>
<a id="tocschannelrecordingconfigurationarn"></a>

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
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_ChannelType">ChannelType</h2>
<!-- backwards compatibility -->
<a id="schemachanneltype"></a>
<a id="schema_ChannelType"></a>
<a id="tocSchanneltype"></a>
<a id="tocschanneltype"></a>

```json
"BASIC"
```

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "arn": {},
  "authorized": {},
  "ingestEndpoint": {},
  "insecureIngest": {},
  "latencyMode": {},
  "name": {},
  "playbackUrl": {},
  "recordingConfigurationArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": {}
}
```

Object specifying a channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|authorized|object|false|none|none|
|ingestEndpoint|object|false|none|none|
|insecureIngest|object|false|none|none|
|latencyMode|object|false|none|none|
|name|object|false|none|none|
|playbackUrl|object|false|none|none|
|recordingConfigurationArn|object|false|none|none|
|tags|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_ChannelSummary">ChannelSummary</h2>
<!-- backwards compatibility -->
<a id="schemachannelsummary"></a>
<a id="schema_ChannelSummary"></a>
<a id="tocSchannelsummary"></a>
<a id="tocschannelsummary"></a>

```json
{
  "arn": {},
  "authorized": {},
  "insecureIngest": {},
  "latencyMode": {},
  "name": {},
  "recordingConfigurationArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Summary information about a channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|authorized|object|false|none|none|
|insecureIngest|object|false|none|none|
|latencyMode|object|false|none|none|
|name|object|false|none|none|
|recordingConfigurationArn|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ChannelList">ChannelList</h2>
<!-- backwards compatibility -->
<a id="schemachannellist"></a>
<a id="schema_ChannelList"></a>
<a id="tocSchannellist"></a>
<a id="tocschannellist"></a>

```json
[
  {
    "arn": {},
    "authorized": {},
    "insecureIngest": {},
    "latencyMode": {},
    "name": {},
    "recordingConfigurationArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_CreateChannelRequest">CreateChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelrequest"></a>
<a id="schema_CreateChannelRequest"></a>
<a id="tocScreatechannelrequest"></a>
<a id="tocscreatechannelrequest"></a>

```json
{
  "authorized": {},
  "insecureIngest": {},
  "latencyMode": {},
  "name": {},
  "recordingConfigurationArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorized|object|false|none|none|
|insecureIngest|object|false|none|none|
|latencyMode|object|false|none|none|
|name|object|false|none|none|
|recordingConfigurationArn|object|false|none|none|
|tags|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_StreamKey">StreamKey</h2>
<!-- backwards compatibility -->
<a id="schemastreamkey"></a>
<a id="schema_StreamKey"></a>
<a id="tocSstreamkey"></a>
<a id="tocsstreamkey"></a>

```json
{
  "arn": {},
  "channelArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "value": {}
}
```

Object specifying a stream key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|channelArn|object|false|none|none|
|tags|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_DestinationConfiguration">DestinationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadestinationconfiguration"></a>
<a id="schema_DestinationConfiguration"></a>
<a id="tocSdestinationconfiguration"></a>
<a id="tocsdestinationconfiguration"></a>

```json
{
  "s3": {
    "bucketName": {}
  }
}
```

A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3|object|false|none|none|

<h2 id="tocS_RecordingConfigurationName">RecordingConfigurationName</h2>
<!-- backwards compatibility -->
<a id="schemarecordingconfigurationname"></a>
<a id="schema_RecordingConfigurationName"></a>
<a id="tocSrecordingconfigurationname"></a>
<a id="tocsrecordingconfigurationname"></a>

```json
"string"
```

<h2 id="tocS_RecordingReconnectWindowSeconds">RecordingReconnectWindowSeconds</h2>
<!-- backwards compatibility -->
<a id="schemarecordingreconnectwindowseconds"></a>
<a id="schema_RecordingReconnectWindowSeconds"></a>
<a id="tocSrecordingreconnectwindowseconds"></a>
<a id="tocsrecordingreconnectwindowseconds"></a>

```json
0
```

<h2 id="tocS_ThumbnailConfiguration">ThumbnailConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemathumbnailconfiguration"></a>
<a id="schema_ThumbnailConfiguration"></a>
<a id="tocSthumbnailconfiguration"></a>
<a id="tocsthumbnailconfiguration"></a>

```json
{
  "recordingMode": {},
  "targetIntervalSeconds": {}
}
```

An object representing a configuration of thumbnails for recorded video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recordingMode|object|false|none|none|
|targetIntervalSeconds|object|false|none|none|

<h2 id="tocS_CreateRecordingConfigurationRequest">CreateRecordingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterecordingconfigurationrequest"></a>
<a id="schema_CreateRecordingConfigurationRequest"></a>
<a id="tocScreaterecordingconfigurationrequest"></a>
<a id="tocscreaterecordingconfigurationrequest"></a>

```json
{
  "destinationConfiguration": {
    "s3": {
      "bucketName": {}
    }
  },
  "name": {},
  "recordingReconnectWindowSeconds": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "thumbnailConfiguration": {
    "recordingMode": {},
    "targetIntervalSeconds": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationConfiguration|object|true|none|none|
|name|object|false|none|none|
|recordingReconnectWindowSeconds|object|false|none|none|
|tags|object|false|none|none|
|thumbnailConfiguration|object|false|none|none|

<h2 id="tocS_RecordingConfiguration">RecordingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemarecordingconfiguration"></a>
<a id="schema_RecordingConfiguration"></a>
<a id="tocSrecordingconfiguration"></a>
<a id="tocsrecordingconfiguration"></a>

```json
{
  "arn": {},
  "destinationConfiguration": {
    "s3": {
      "bucketName": {}
    }
  },
  "name": {},
  "recordingReconnectWindowSeconds": {},
  "state": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "thumbnailConfiguration": {
    "recordingMode": {},
    "targetIntervalSeconds": {}
  }
}
```

An object representing a configuration to record a channel stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|destinationConfiguration|object|true|none|none|
|name|object|false|none|none|
|recordingReconnectWindowSeconds|object|false|none|none|
|state|object|true|none|none|
|tags|object|false|none|none|
|thumbnailConfiguration|object|false|none|none|

<h2 id="tocS_CreateStreamKeyRequest">CreateStreamKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreamkeyrequest"></a>
<a id="schema_CreateStreamKeyRequest"></a>
<a id="tocScreatestreamkeyrequest"></a>
<a id="tocscreatestreamkeyrequest"></a>

```json
{
  "channelArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelArn|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DeleteChannelRequest">DeleteChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletechannelrequest"></a>
<a id="schema_DeleteChannelRequest"></a>
<a id="tocSdeletechannelrequest"></a>
<a id="tocsdeletechannelrequest"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_PlaybackKeyPairArn">PlaybackKeyPairArn</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackkeypairarn"></a>
<a id="schema_PlaybackKeyPairArn"></a>
<a id="tocSplaybackkeypairarn"></a>
<a id="tocsplaybackkeypairarn"></a>

```json
"string"
```

<h2 id="tocS_DeletePlaybackKeyPairRequest">DeletePlaybackKeyPairRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteplaybackkeypairrequest"></a>
<a id="schema_DeletePlaybackKeyPairRequest"></a>
<a id="tocSdeleteplaybackkeypairrequest"></a>
<a id="tocsdeleteplaybackkeypairrequest"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_RecordingConfigurationArn">RecordingConfigurationArn</h2>
<!-- backwards compatibility -->
<a id="schemarecordingconfigurationarn"></a>
<a id="schema_RecordingConfigurationArn"></a>
<a id="tocSrecordingconfigurationarn"></a>
<a id="tocsrecordingconfigurationarn"></a>

```json
"string"
```

<h2 id="tocS_DeleteRecordingConfigurationRequest">DeleteRecordingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterecordingconfigurationrequest"></a>
<a id="schema_DeleteRecordingConfigurationRequest"></a>
<a id="tocSdeleterecordingconfigurationrequest"></a>
<a id="tocsdeleterecordingconfigurationrequest"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_DeleteStreamKeyRequest">DeleteStreamKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletestreamkeyrequest"></a>
<a id="schema_DeleteStreamKeyRequest"></a>
<a id="tocSdeletestreamkeyrequest"></a>
<a id="tocsdeletestreamkeyrequest"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_GetChannelRequest">GetChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetchannelrequest"></a>
<a id="schema_GetChannelRequest"></a>
<a id="tocSgetchannelrequest"></a>
<a id="tocsgetchannelrequest"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_GetPlaybackKeyPairRequest">GetPlaybackKeyPairRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetplaybackkeypairrequest"></a>
<a id="schema_GetPlaybackKeyPairRequest"></a>
<a id="tocSgetplaybackkeypairrequest"></a>
<a id="tocsgetplaybackkeypairrequest"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_PlaybackKeyPair">PlaybackKeyPair</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackkeypair"></a>
<a id="schema_PlaybackKeyPair"></a>
<a id="tocSplaybackkeypair"></a>
<a id="tocsplaybackkeypair"></a>

```json
{
  "arn": {},
  "fingerprint": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A key pair used to sign and validate a playback authorization token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|fingerprint|object|false|none|none|
|name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetRecordingConfigurationRequest">GetRecordingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrecordingconfigurationrequest"></a>
<a id="schema_GetRecordingConfigurationRequest"></a>
<a id="tocSgetrecordingconfigurationrequest"></a>
<a id="tocsgetrecordingconfigurationrequest"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_GetStreamKeyRequest">GetStreamKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamkeyrequest"></a>
<a id="schema_GetStreamKeyRequest"></a>
<a id="tocSgetstreamkeyrequest"></a>
<a id="tocsgetstreamkeyrequest"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_GetStreamRequest">GetStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamrequest"></a>
<a id="schema_GetStreamRequest"></a>
<a id="tocSgetstreamrequest"></a>
<a id="tocsgetstreamrequest"></a>

```json
{
  "channelArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelArn|object|true|none|none|

<h2 id="tocS_Stream">Stream</h2>
<!-- backwards compatibility -->
<a id="schemastream"></a>
<a id="schema_Stream"></a>
<a id="tocSstream"></a>
<a id="tocsstream"></a>

```json
{
  "channelArn": {},
  "health": {},
  "playbackUrl": {},
  "startTime": {},
  "state": {},
  "streamId": {},
  "viewerCount": {}
}
```

Specifies a live video stream that has been ingested and distributed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelArn|object|false|none|none|
|health|object|false|none|none|
|playbackUrl|object|false|none|none|
|startTime|object|false|none|none|
|state|object|false|none|none|
|streamId|object|false|none|none|
|viewerCount|object|false|none|none|

<h2 id="tocS_StreamId">StreamId</h2>
<!-- backwards compatibility -->
<a id="schemastreamid"></a>
<a id="schema_StreamId"></a>
<a id="tocSstreamid"></a>
<a id="tocsstreamid"></a>

```json
"stringstringstringstringst"
```

<h2 id="tocS_GetStreamSessionRequest">GetStreamSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamsessionrequest"></a>
<a id="schema_GetStreamSessionRequest"></a>
<a id="tocSgetstreamsessionrequest"></a>
<a id="tocsgetstreamsessionrequest"></a>

```json
{
  "channelArn": {},
  "streamId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelArn|object|true|none|none|
|streamId|object|false|none|none|

<h2 id="tocS_StreamSession">StreamSession</h2>
<!-- backwards compatibility -->
<a id="schemastreamsession"></a>
<a id="schema_StreamSession"></a>
<a id="tocSstreamsession"></a>
<a id="tocsstreamsession"></a>

```json
{
  "channel": {
    "arn": {},
    "authorized": {},
    "ingestEndpoint": {},
    "insecureIngest": {},
    "latencyMode": {},
    "name": {},
    "playbackUrl": {},
    "recordingConfigurationArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {}
  },
  "endTime": {},
  "ingestConfiguration": {
    "audio": {
      "channels": {},
      "codec": {},
      "sampleRate": {},
      "targetBitrate": {}
    },
    "video": {
      "avcLevel": {},
      "avcProfile": {},
      "codec": {},
      "encoder": {},
      "targetBitrate": {},
      "targetFramerate": {},
      "videoHeight": {},
      "videoWidth": {}
    }
  },
  "recordingConfiguration": {
    "arn": {},
    "destinationConfiguration": {
      "s3": {
        "bucketName": {}
      }
    },
    "name": {},
    "recordingReconnectWindowSeconds": {},
    "state": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "thumbnailConfiguration": {
      "recordingMode": {},
      "targetIntervalSeconds": {}
    }
  },
  "startTime": {},
  "streamId": {},
  "truncatedEvents": {}
}
```

Object that captures the Amazon IVS configuration that the customer provisioned, the ingest configurations that the broadcaster used, and the most recent Amazon IVS stream events it encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|
|endTime|object|false|none|none|
|ingestConfiguration|object|false|none|none|
|recordingConfiguration|object|false|none|none|
|startTime|object|false|none|none|
|streamId|object|false|none|none|
|truncatedEvents|object|false|none|none|

<h2 id="tocS_PlaybackKeyPairName">PlaybackKeyPairName</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackkeypairname"></a>
<a id="schema_PlaybackKeyPairName"></a>
<a id="tocSplaybackkeypairname"></a>
<a id="tocsplaybackkeypairname"></a>

```json
"string"
```

<h2 id="tocS_PlaybackPublicKeyMaterial">PlaybackPublicKeyMaterial</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackpublickeymaterial"></a>
<a id="schema_PlaybackPublicKeyMaterial"></a>
<a id="tocSplaybackpublickeymaterial"></a>
<a id="tocsplaybackpublickeymaterial"></a>

```json
"string"
```

<h2 id="tocS_ImportPlaybackKeyPairRequest">ImportPlaybackKeyPairRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportplaybackkeypairrequest"></a>
<a id="schema_ImportPlaybackKeyPairRequest"></a>
<a id="tocSimportplaybackkeypairrequest"></a>
<a id="tocsimportplaybackkeypairrequest"></a>

```json
{
  "name": {},
  "publicKeyMaterial": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|publicKeyMaterial|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_VideoConfiguration">VideoConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemavideoconfiguration"></a>
<a id="schema_VideoConfiguration"></a>
<a id="tocSvideoconfiguration"></a>
<a id="tocsvideoconfiguration"></a>

```json
{
  "avcLevel": {},
  "avcProfile": {},
  "codec": {},
  "encoder": {},
  "targetBitrate": {},
  "targetFramerate": {},
  "videoHeight": {},
  "videoWidth": {}
}
```

Object specifying a stream’s video configuration, as set up by the broadcaster (usually in an encoder). This is part of the <a>IngestConfiguration</a> object and used for monitoring stream health.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avcLevel|object|false|none|none|
|avcProfile|object|false|none|none|
|codec|object|false|none|none|
|encoder|object|false|none|none|
|targetBitrate|object|false|none|none|
|targetFramerate|object|false|none|none|
|videoHeight|object|false|none|none|
|videoWidth|object|false|none|none|

<h2 id="tocS_IngestConfiguration">IngestConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaingestconfiguration"></a>
<a id="schema_IngestConfiguration"></a>
<a id="tocSingestconfiguration"></a>
<a id="tocsingestconfiguration"></a>

```json
{
  "audio": {
    "channels": {},
    "codec": {},
    "sampleRate": {},
    "targetBitrate": {}
  },
  "video": {
    "avcLevel": {},
    "avcProfile": {},
    "codec": {},
    "encoder": {},
    "targetBitrate": {},
    "targetFramerate": {},
    "videoHeight": {},
    "videoWidth": {}
  }
}
```

Object specifying the ingest configuration set up by the broadcaster, usually in an encoder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio|object|false|none|none|
|video|object|false|none|none|

<h2 id="tocS_MaxChannelResults">MaxChannelResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxchannelresults"></a>
<a id="schema_MaxChannelResults"></a>
<a id="tocSmaxchannelresults"></a>
<a id="tocsmaxchannelresults"></a>

```json
1
```

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_ListChannelsRequest">ListChannelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsrequest"></a>
<a id="schema_ListChannelsRequest"></a>
<a id="tocSlistchannelsrequest"></a>
<a id="tocslistchannelsrequest"></a>

```json
{
  "filterByName": {},
  "filterByRecordingConfigurationArn": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterByName|object|false|none|none|
|filterByRecordingConfigurationArn|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_MaxPlaybackKeyPairResults">MaxPlaybackKeyPairResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxplaybackkeypairresults"></a>
<a id="schema_MaxPlaybackKeyPairResults"></a>
<a id="tocSmaxplaybackkeypairresults"></a>
<a id="tocsmaxplaybackkeypairresults"></a>

```json
1
```

<h2 id="tocS_ListPlaybackKeyPairsRequest">ListPlaybackKeyPairsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistplaybackkeypairsrequest"></a>
<a id="schema_ListPlaybackKeyPairsRequest"></a>
<a id="tocSlistplaybackkeypairsrequest"></a>
<a id="tocslistplaybackkeypairsrequest"></a>

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

<h2 id="tocS_PlaybackKeyPairList">PlaybackKeyPairList</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackkeypairlist"></a>
<a id="schema_PlaybackKeyPairList"></a>
<a id="tocSplaybackkeypairlist"></a>
<a id="tocsplaybackkeypairlist"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_MaxRecordingConfigurationResults">MaxRecordingConfigurationResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxrecordingconfigurationresults"></a>
<a id="schema_MaxRecordingConfigurationResults"></a>
<a id="tocSmaxrecordingconfigurationresults"></a>
<a id="tocsmaxrecordingconfigurationresults"></a>

```json
1
```

<h2 id="tocS_ListRecordingConfigurationsRequest">ListRecordingConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrecordingconfigurationsrequest"></a>
<a id="schema_ListRecordingConfigurationsRequest"></a>
<a id="tocSlistrecordingconfigurationsrequest"></a>
<a id="tocslistrecordingconfigurationsrequest"></a>

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

<h2 id="tocS_RecordingConfigurationList">RecordingConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemarecordingconfigurationlist"></a>
<a id="schema_RecordingConfigurationList"></a>
<a id="tocSrecordingconfigurationlist"></a>
<a id="tocsrecordingconfigurationlist"></a>

```json
[
  {
    "arn": {},
    "destinationConfiguration": {
      "s3": {
        "bucketName": {}
      }
    },
    "name": {},
    "state": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_MaxStreamKeyResults">MaxStreamKeyResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxstreamkeyresults"></a>
<a id="schema_MaxStreamKeyResults"></a>
<a id="tocSmaxstreamkeyresults"></a>
<a id="tocsmaxstreamkeyresults"></a>

```json
1
```

<h2 id="tocS_ListStreamKeysRequest">ListStreamKeysRequest</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamkeysrequest"></a>
<a id="schema_ListStreamKeysRequest"></a>
<a id="tocSliststreamkeysrequest"></a>
<a id="tocsliststreamkeysrequest"></a>

```json
{
  "channelArn": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelArn|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_StreamKeyList">StreamKeyList</h2>
<!-- backwards compatibility -->
<a id="schemastreamkeylist"></a>
<a id="schema_StreamKeyList"></a>
<a id="tocSstreamkeylist"></a>
<a id="tocsstreamkeylist"></a>

```json
[
  {
    "arn": {},
    "channelArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_MaxStreamResults">MaxStreamResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxstreamresults"></a>
<a id="schema_MaxStreamResults"></a>
<a id="tocSmaxstreamresults"></a>
<a id="tocsmaxstreamresults"></a>

```json
1
```

<h2 id="tocS_ListStreamSessionsRequest">ListStreamSessionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamsessionsrequest"></a>
<a id="schema_ListStreamSessionsRequest"></a>
<a id="tocSliststreamsessionsrequest"></a>
<a id="tocsliststreamsessionsrequest"></a>

```json
{
  "channelArn": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelArn|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_StreamSessionList">StreamSessionList</h2>
<!-- backwards compatibility -->
<a id="schemastreamsessionlist"></a>
<a id="schema_StreamSessionList"></a>
<a id="tocSstreamsessionlist"></a>
<a id="tocsstreamsessionlist"></a>

```json
[
  {
    "endTime": {},
    "hasErrorEvent": {},
    "startTime": {},
    "streamId": {}
  }
]
```

<h2 id="tocS_StreamFilters">StreamFilters</h2>
<!-- backwards compatibility -->
<a id="schemastreamfilters"></a>
<a id="schema_StreamFilters"></a>
<a id="tocSstreamfilters"></a>
<a id="tocsstreamfilters"></a>

```json
{
  "health": {}
}
```

Object specifying the stream attribute on which to filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|health|object|false|none|none|

<h2 id="tocS_ListStreamsRequest">ListStreamsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamsrequest"></a>
<a id="schema_ListStreamsRequest"></a>
<a id="tocSliststreamsrequest"></a>
<a id="tocsliststreamsrequest"></a>

```json
{
  "filterBy": {
    "health": {}
  },
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterBy|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_StreamList">StreamList</h2>
<!-- backwards compatibility -->
<a id="schemastreamlist"></a>
<a id="schema_StreamList"></a>
<a id="tocSstreamlist"></a>
<a id="tocsstreamlist"></a>

```json
[
  {
    "channelArn": {},
    "health": {},
    "startTime": {},
    "state": {},
    "streamId": {},
    "viewerCount": {}
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

<h2 id="tocS_PlaybackKeyPairFingerprint">PlaybackKeyPairFingerprint</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackkeypairfingerprint"></a>
<a id="schema_PlaybackKeyPairFingerprint"></a>
<a id="tocSplaybackkeypairfingerprint"></a>
<a id="tocsplaybackkeypairfingerprint"></a>

```json
"string"
```

<h2 id="tocS_PlaybackKeyPairSummary">PlaybackKeyPairSummary</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackkeypairsummary"></a>
<a id="schema_PlaybackKeyPairSummary"></a>
<a id="tocSplaybackkeypairsummary"></a>
<a id="tocsplaybackkeypairsummary"></a>

```json
{
  "arn": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Summary information about a playback key pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_StreamMetadata">StreamMetadata</h2>
<!-- backwards compatibility -->
<a id="schemastreammetadata"></a>
<a id="schema_StreamMetadata"></a>
<a id="tocSstreammetadata"></a>
<a id="tocsstreammetadata"></a>

```json
"password"
```

<h2 id="tocS_PutMetadataRequest">PutMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputmetadatarequest"></a>
<a id="schema_PutMetadataRequest"></a>
<a id="tocSputmetadatarequest"></a>
<a id="tocsputmetadatarequest"></a>

```json
{
  "channelArn": {},
  "metadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelArn|object|true|none|none|
|metadata|object|true|none|none|

<h2 id="tocS_RecordingConfigurationState">RecordingConfigurationState</h2>
<!-- backwards compatibility -->
<a id="schemarecordingconfigurationstate"></a>
<a id="schema_RecordingConfigurationState"></a>
<a id="tocSrecordingconfigurationstate"></a>
<a id="tocsrecordingconfigurationstate"></a>

```json
"CREATING"
```

<h2 id="tocS_RecordingConfigurationSummary">RecordingConfigurationSummary</h2>
<!-- backwards compatibility -->
<a id="schemarecordingconfigurationsummary"></a>
<a id="schema_RecordingConfigurationSummary"></a>
<a id="tocSrecordingconfigurationsummary"></a>
<a id="tocsrecordingconfigurationsummary"></a>

```json
{
  "arn": {},
  "destinationConfiguration": {
    "s3": {
      "bucketName": {}
    }
  },
  "name": {},
  "state": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Summary information about a RecordingConfiguration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|destinationConfiguration|object|true|none|none|
|name|object|false|none|none|
|state|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_S3DestinationBucketName">S3DestinationBucketName</h2>
<!-- backwards compatibility -->
<a id="schemas3destinationbucketname"></a>
<a id="schema_S3DestinationBucketName"></a>
<a id="tocSs3destinationbucketname"></a>
<a id="tocss3destinationbucketname"></a>

```json
"string"
```

<h2 id="tocS_StopStreamRequest">StopStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopstreamrequest"></a>
<a id="schema_StopStreamRequest"></a>
<a id="tocSstopstreamrequest"></a>
<a id="tocsstopstreamrequest"></a>

```json
{
  "channelArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelArn|object|true|none|none|

<h2 id="tocS_StreamStartTime">StreamStartTime</h2>
<!-- backwards compatibility -->
<a id="schemastreamstarttime"></a>
<a id="schema_StreamStartTime"></a>
<a id="tocSstreamstarttime"></a>
<a id="tocsstreamstarttime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_StreamState">StreamState</h2>
<!-- backwards compatibility -->
<a id="schemastreamstate"></a>
<a id="schema_StreamState"></a>
<a id="tocSstreamstate"></a>
<a id="tocsstreamstate"></a>

```json
"LIVE"
```

<h2 id="tocS_StreamViewerCount">StreamViewerCount</h2>
<!-- backwards compatibility -->
<a id="schemastreamviewercount"></a>
<a id="schema_StreamViewerCount"></a>
<a id="tocSstreamviewercount"></a>
<a id="tocsstreamviewercount"></a>

```json
0
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

<h2 id="tocS_StreamEvent">StreamEvent</h2>
<!-- backwards compatibility -->
<a id="schemastreamevent"></a>
<a id="schema_StreamEvent"></a>
<a id="tocSstreamevent"></a>
<a id="tocsstreamevent"></a>

```json
{
  "eventTime": {},
  "name": {},
  "type": {}
}
```

Object specifying a stream’s events. For a list of events, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html">Using Amazon EventBridge with Amazon IVS</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTime|object|false|none|none|
|name|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_StreamEvents">StreamEvents</h2>
<!-- backwards compatibility -->
<a id="schemastreamevents"></a>
<a id="schema_StreamEvents"></a>
<a id="tocSstreamevents"></a>
<a id="tocsstreamevents"></a>

```json
[
  {
    "eventTime": {},
    "name": {},
    "type": {}
  }
]
```

<h2 id="tocS_StreamKeyValue">StreamKeyValue</h2>
<!-- backwards compatibility -->
<a id="schemastreamkeyvalue"></a>
<a id="schema_StreamKeyValue"></a>
<a id="tocSstreamkeyvalue"></a>
<a id="tocsstreamkeyvalue"></a>

```json
"password"
```

<h2 id="tocS_StreamKeySummary">StreamKeySummary</h2>
<!-- backwards compatibility -->
<a id="schemastreamkeysummary"></a>
<a id="schema_StreamKeySummary"></a>
<a id="tocSstreamkeysummary"></a>
<a id="tocsstreamkeysummary"></a>

```json
{
  "arn": {},
  "channelArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Summary information about a stream key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|channelArn|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_StreamSummary">StreamSummary</h2>
<!-- backwards compatibility -->
<a id="schemastreamsummary"></a>
<a id="schema_StreamSummary"></a>
<a id="tocSstreamsummary"></a>
<a id="tocsstreamsummary"></a>

```json
{
  "channelArn": {},
  "health": {},
  "startTime": {},
  "state": {},
  "streamId": {},
  "viewerCount": {}
}
```

Summary information about a stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelArn|object|false|none|none|
|health|object|false|none|none|
|startTime|object|false|none|none|
|state|object|false|none|none|
|streamId|object|false|none|none|
|viewerCount|object|false|none|none|

<h2 id="tocS_StreamSessionSummary">StreamSessionSummary</h2>
<!-- backwards compatibility -->
<a id="schemastreamsessionsummary"></a>
<a id="schema_StreamSessionSummary"></a>
<a id="tocSstreamsessionsummary"></a>
<a id="tocsstreamsessionsummary"></a>

```json
{
  "endTime": {},
  "hasErrorEvent": {},
  "startTime": {},
  "streamId": {}
}
```

Summary information about a stream session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|object|false|none|none|
|hasErrorEvent|object|false|none|none|
|startTime|object|false|none|none|
|streamId|object|false|none|none|

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

<h2 id="tocS_UpdateChannelRequest">UpdateChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelrequest"></a>
<a id="schema_UpdateChannelRequest"></a>
<a id="tocSupdatechannelrequest"></a>
<a id="tocsupdatechannelrequest"></a>

```json
{
  "arn": {},
  "authorized": {},
  "insecureIngest": {},
  "latencyMode": {},
  "name": {},
  "recordingConfigurationArn": {},
  "type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|authorized|object|false|none|none|
|insecureIngest|object|false|none|none|
|latencyMode|object|false|none|none|
|name|object|false|none|none|
|recordingConfigurationArn|object|false|none|none|
|type|object|false|none|none|
