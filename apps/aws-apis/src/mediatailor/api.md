<h1 id="aws-mediatailor">AWS MediaTailor v2018-04-23</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Use the AWS Elemental MediaTailor SDKs and CLI to configure scalable ad insertion and linear channels. With MediaTailor, you can assemble existing content into a linear stream and serve targeted ads to viewers while maintaining broadcast quality in over-the-top (OTT) video applications. For information about using the service, including detailed information about the settings covered in this guide, see the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/">AWS Elemental MediaTailor User Guide</a>.</p> <p>Through the SDKs and the CLI you manage AWS Elemental MediaTailor configurations and channels the same as you do through the console. For example, you specify ad insertion behavior and mapping information for the origin server and the ad decision server (ADS).</p>

Base URLs:

* <a href="http://api.mediatailor.us-east-1.amazonaws.com">http://api.mediatailor.us-east-1.amazonaws.com</a> - The MediaTailor multi-region endpoint

* <a href="https://api.mediatailor.us-east-1.amazonaws.com">https://api.mediatailor.us-east-1.amazonaws.com</a> - The MediaTailor multi-region endpoint

* <a href="http://api.mediatailor.cn-north-1.amazonaws.com.cn">http://api.mediatailor.cn-north-1.amazonaws.com.cn</a> - The MediaTailor endpoint for China (Beijing) and China (Ningxia)

* <a href="https://api.mediatailor.cn-north-1.amazonaws.com.cn">https://api.mediatailor.cn-north-1.amazonaws.com.cn</a> - The MediaTailor endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/mediatailor/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-mediatailor-default">Default</h1>

## ConfigureLogsForChannel

<a id="opIdConfigureLogsForChannel"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/configureLogs/channel \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ChannelName": "string",
    "LogTypes": [
      "AS_RUN"
    ]
  }'
```

`PUT /configureLogs/channel`

Configures Amazon CloudWatch log settings for a channel.

> Body parameter

```json
{
  "ChannelName": "string",
  "LogTypes": [
    "AS_RUN"
  ]
}
```

<h3 id="configurelogsforchannel-parameters">Parameters</h3>

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
|» ChannelName|body|string|true|The name of the channel.|
|» LogTypes|body|[[LogType](#schemalogtype)]|true|The types of logs to collect.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» LogTypes|AS_RUN|

> Example responses

> 200 Response

```json
{
  "ChannelName": {},
  "LogTypes": {}
}
```

<h3 id="configurelogsforchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigureLogsForChannelResponse](#schemaconfigurelogsforchannelresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ConfigureLogsForPlaybackConfiguration

<a id="opIdConfigureLogsForPlaybackConfiguration"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/configureLogs/playbackConfiguration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "PercentEnabled": 0,
    "PlaybackConfigurationName": "string"
  }'
```

`PUT /configureLogs/playbackConfiguration`

Amazon CloudWatch log settings for a playback configuration.

> Body parameter

```json
{
  "PercentEnabled": 0,
  "PlaybackConfigurationName": "string"
}
```

<h3 id="configurelogsforplaybackconfiguration-parameters">Parameters</h3>

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
|» PercentEnabled|body|integer|true|<p>The percentage of session logs that MediaTailor sends to your Cloudwatch Logs account. For example, if your playback configuration has 1000 sessions and percentEnabled is set to <code>60</code>, MediaTailor sends logs for 600 of the sessions to CloudWatch Logs. MediaTailor decides at random which of the playback configuration sessions to send logs for. If you want to view logs for a specific session, you can use the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/debug-log-mode.html">debug log mode</a>.</p> <p>Valid values: <code>0</code> - <code>100</code> </p>|
|» PlaybackConfigurationName|body|string|true|The name of the playback configuration.|

> Example responses

> 200 Response

```json
{
  "PercentEnabled": {},
  "PlaybackConfigurationName": {}
}
```

<h3 id="configurelogsforplaybackconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigureLogsForPlaybackConfigurationResponse](#schemaconfigurelogsforplaybackconfigurationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeChannel

<a id="opIdDescribeChannel"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/channel/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channel/{ChannelName}`

Describes a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.

<h3 id="describechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ChannelName|path|string|true|The name of the channel.|
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
  "ChannelName": {},
  "ChannelState": {},
  "CreationTime": {},
  "FillerSlate": {
    "SourceLocationName": {},
    "VodSourceName": {}
  },
  "LastModifiedTime": {},
  "LogConfiguration": {
    "LogTypes": {}
  },
  "Outputs": {},
  "PlaybackMode": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Tier": {}
}
```

<h3 id="describechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeChannelResponse](#schemadescribechannelresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateChannel

<a id="opIdUpdateChannel"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/channel/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FillerSlate": {
      "SourceLocationName": {},
      "VodSourceName": {}
    },
    "Outputs": [
      {
        "DashPlaylistSettings": {
          "ManifestWindowSeconds": {},
          "MinBufferTimeSeconds": {},
          "MinUpdatePeriodSeconds": {},
          "SuggestedPresentationDelaySeconds": {}
        },
        "HlsPlaylistSettings": {
          "ManifestWindowSeconds": {}
        },
        "ManifestName": {},
        "SourceGroup": {}
      }
    ]
  }'
```

`PUT /channel/{ChannelName}`

Updates a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.

> Body parameter

```json
{
  "FillerSlate": {
    "SourceLocationName": {},
    "VodSourceName": {}
  },
  "Outputs": [
    {
      "DashPlaylistSettings": {
        "ManifestWindowSeconds": {},
        "MinBufferTimeSeconds": {},
        "MinUpdatePeriodSeconds": {},
        "SuggestedPresentationDelaySeconds": {}
      },
      "HlsPlaylistSettings": {
        "ManifestWindowSeconds": {}
      },
      "ManifestName": {},
      "SourceGroup": {}
    }
  ]
}
```

<h3 id="updatechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ChannelName|path|string|true|The name of the channel.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FillerSlate|body|object|false|Slate VOD source configuration.|
|» » SourceLocationName|body|object|false|none|
|» » VodSourceName|body|object|false|none|
|» Outputs|body|[[RequestOutputItem](#schemarequestoutputitem)]|true|An object that represents an object in the CreateChannel request.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "ChannelName": {},
  "ChannelState": {},
  "CreationTime": {},
  "FillerSlate": {
    "SourceLocationName": {},
    "VodSourceName": {}
  },
  "LastModifiedTime": {},
  "Outputs": {},
  "PlaybackMode": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Tier": {}
}
```

<h3 id="updatechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateChannelResponse](#schemaupdatechannelresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateChannel

<a id="opIdCreateChannel"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/channel/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FillerSlate": {
      "SourceLocationName": {},
      "VodSourceName": {}
    },
    "Outputs": [
      {
        "DashPlaylistSettings": {
          "ManifestWindowSeconds": {},
          "MinBufferTimeSeconds": {},
          "MinUpdatePeriodSeconds": {},
          "SuggestedPresentationDelaySeconds": {}
        },
        "HlsPlaylistSettings": {
          "ManifestWindowSeconds": {}
        },
        "ManifestName": {},
        "SourceGroup": {}
      }
    ],
    "PlaybackMode": "LOOP",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "Tier": "BASIC"
  }'
```

`POST /channel/{ChannelName}`

Creates a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.

> Body parameter

```json
{
  "FillerSlate": {
    "SourceLocationName": {},
    "VodSourceName": {}
  },
  "Outputs": [
    {
      "DashPlaylistSettings": {
        "ManifestWindowSeconds": {},
        "MinBufferTimeSeconds": {},
        "MinUpdatePeriodSeconds": {},
        "SuggestedPresentationDelaySeconds": {}
      },
      "HlsPlaylistSettings": {
        "ManifestWindowSeconds": {}
      },
      "ManifestName": {},
      "SourceGroup": {}
    }
  ],
  "PlaybackMode": "LOOP",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "Tier": "BASIC"
}
```

<h3 id="createchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ChannelName|path|string|true|The name of the channel.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FillerSlate|body|object|false|Slate VOD source configuration.|
|» » SourceLocationName|body|object|false|none|
|» » VodSourceName|body|object|false|none|
|» Outputs|body|[[RequestOutputItem](#schemarequestoutputitem)]|true|An object that represents an object in the CreateChannel request.|
|» PlaybackMode|body|string|true|<p>The type of playback mode to use for this channel.</p> <p> <code>LINEAR</code> - The programs in the schedule play once back-to-back in the schedule.</p> <p> <code>LOOP</code> - The programs in the schedule play back-to-back in an endless loop. When the last program in the schedule stops playing, playback loops back to the first program in the schedule.</p>|
|» tags|body|object|false|The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|
|» Tier|body|string|false|The tier of the channel.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PlaybackMode|LOOP|
|» PlaybackMode|LINEAR|
|» Tier|BASIC|
|» Tier|STANDARD|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "ChannelName": {},
  "ChannelState": {},
  "CreationTime": {},
  "FillerSlate": {
    "SourceLocationName": {},
    "VodSourceName": {}
  },
  "LastModifiedTime": {},
  "Outputs": {},
  "PlaybackMode": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Tier": {}
}
```

<h3 id="createchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateChannelResponse](#schemacreatechannelresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteChannel

<a id="opIdDeleteChannel"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/channel/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /channel/{ChannelName}`

Deletes a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.

<h3 id="deletechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ChannelName|path|string|true|The name of the channel.|
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

<h3 id="deletechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteChannelResponse](#schemadeletechannelresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLiveSource

<a id="opIdDescribeLiveSource"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/sourceLocation/string/liveSource/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}`

The live source to describe.

<h3 id="describelivesource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LiveSourceName|path|string|true|The name of the live source.|
|SourceLocationName|path|string|true|The name of the source location associated with this Live Source.|
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
  "CreationTime": {},
  "HttpPackageConfigurations": {},
  "LastModifiedTime": {},
  "LiveSourceName": {},
  "SourceLocationName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="describelivesource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLiveSourceResponse](#schemadescribelivesourceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLiveSource

<a id="opIdUpdateLiveSource"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/sourceLocation/string/liveSource/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "HttpPackageConfigurations": [
      {
        "Path": {},
        "SourceGroup": {},
        "Type": {}
      }
    ]
  }'
```

`PUT /sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}`

Updates a live source's configuration.

> Body parameter

```json
{
  "HttpPackageConfigurations": [
    {
      "Path": {},
      "SourceGroup": {},
      "Type": {}
    }
  ]
}
```

<h3 id="updatelivesource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LiveSourceName|path|string|true|The name of the live source.|
|SourceLocationName|path|string|true|The name of the source location associated with this Live Source.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» HttpPackageConfigurations|body|[[HttpPackageConfiguration](#schemahttppackageconfiguration)]|true|The VOD source's HTTP package configuration settings.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTime": {},
  "HttpPackageConfigurations": {},
  "LastModifiedTime": {},
  "LiveSourceName": {},
  "SourceLocationName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="updatelivesource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLiveSourceResponse](#schemaupdatelivesourceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLiveSource

<a id="opIdCreateLiveSource"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/sourceLocation/string/liveSource/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "HttpPackageConfigurations": [
      {
        "Path": {},
        "SourceGroup": {},
        "Type": {}
      }
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}`

The live source configuration.

> Body parameter

```json
{
  "HttpPackageConfigurations": [
    {
      "Path": {},
      "SourceGroup": {},
      "Type": {}
    }
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createlivesource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LiveSourceName|path|string|true|The name of the live source.|
|SourceLocationName|path|string|true|The name of the source location.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» HttpPackageConfigurations|body|[[HttpPackageConfiguration](#schemahttppackageconfiguration)]|true|The VOD source's HTTP package configuration settings.|
|» tags|body|object|false|The tags to assign to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTime": {},
  "HttpPackageConfigurations": {},
  "LastModifiedTime": {},
  "LiveSourceName": {},
  "SourceLocationName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createlivesource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLiveSourceResponse](#schemacreatelivesourceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLiveSource

<a id="opIdDeleteLiveSource"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/sourceLocation/string/liveSource/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}`

The live source to delete.

<h3 id="deletelivesource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LiveSourceName|path|string|true|The name of the live source.|
|SourceLocationName|path|string|true|The name of the source location associated with this Live Source.|
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

<h3 id="deletelivesource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLiveSourceResponse](#schemadeletelivesourceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPrefetchSchedule

<a id="opIdGetPrefetchSchedule"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/prefetchSchedule/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prefetchSchedule/{PlaybackConfigurationName}/{Name}`

Retrieves a prefetch schedule for a playback configuration. A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>.

<h3 id="getprefetchschedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the prefetch schedule. The name must be unique among all prefetch schedules that are associated with the specified playback configuration.|
|PlaybackConfigurationName|path|string|true|Returns information about the prefetch schedule for a specific playback configuration. If you call <code>GetPrefetchSchedule</code> on an expired prefetch schedule, MediaTailor returns an HTTP 404 status code.|
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
  "Consumption": {
    "AvailMatchingCriteria": {},
    "EndTime": {},
    "StartTime": {}
  },
  "Name": {},
  "PlaybackConfigurationName": {},
  "Retrieval": {
    "DynamicVariables": {
      "property1": "string",
      "property2": "string"
    },
    "EndTime": {},
    "StartTime": {}
  },
  "StreamId": {}
}
```

<h3 id="getprefetchschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPrefetchScheduleResponse](#schemagetprefetchscheduleresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePrefetchSchedule

<a id="opIdCreatePrefetchSchedule"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/prefetchSchedule/string/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Consumption": {
      "AvailMatchingCriteria": {},
      "EndTime": {},
      "StartTime": {}
    },
    "Retrieval": {
      "DynamicVariables": {
        "property1": "string",
        "property2": "string"
      },
      "EndTime": {},
      "StartTime": {}
    },
    "StreamId": "string"
  }'
```

`POST /prefetchSchedule/{PlaybackConfigurationName}/{Name}`

Creates a prefetch schedule for a playback configuration. A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>.

> Body parameter

```json
{
  "Consumption": {
    "AvailMatchingCriteria": {},
    "EndTime": {},
    "StartTime": {}
  },
  "Retrieval": {
    "DynamicVariables": {
      "property1": "string",
      "property2": "string"
    },
    "EndTime": {},
    "StartTime": {}
  },
  "StreamId": "string"
}
```

<h3 id="createprefetchschedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name to assign to the schedule request.|
|PlaybackConfigurationName|path|string|true|The name to assign to the playback configuration.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Consumption|body|object|true|A complex type that contains settings that determine how and when that MediaTailor places prefetched ads into upcoming ad breaks.|
|» » AvailMatchingCriteria|body|object|false|none|
|» » EndTime|body|object|false|none|
|» » StartTime|body|object|false|none|
|» Retrieval|body|object|true|A complex type that contains settings governing when MediaTailor prefetches ads, and which dynamic variables that MediaTailor includes in the request to the ad decision server.|
|» » DynamicVariables|body|object|false|none|
|» » » **additionalProperties**|body|[__string](#schema__string)|false|none|
|» » EndTime|body|object|false|none|
|» » StartTime|body|object|false|none|
|» StreamId|body|string|false|An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration. If <code>StreamId</code> is specified, MediaTailor returns all of the prefetch schedules with an exact match on <code>StreamId</code>. If not specified, MediaTailor returns all of the prefetch schedules for the playback configuration, regardless of <code>StreamId</code>.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "Consumption": {
    "AvailMatchingCriteria": {},
    "EndTime": {},
    "StartTime": {}
  },
  "Name": {},
  "PlaybackConfigurationName": {},
  "Retrieval": {
    "DynamicVariables": {
      "property1": "string",
      "property2": "string"
    },
    "EndTime": {},
    "StartTime": {}
  },
  "StreamId": {}
}
```

<h3 id="createprefetchschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePrefetchScheduleResponse](#schemacreateprefetchscheduleresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePrefetchSchedule

<a id="opIdDeletePrefetchSchedule"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/prefetchSchedule/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /prefetchSchedule/{PlaybackConfigurationName}/{Name}`

Deletes a prefetch schedule for a specific playback configuration. If you call <code>DeletePrefetchSchedule</code> on an expired prefetch schedule, MediaTailor returns an HTTP 404 status code. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>.

<h3 id="deleteprefetchschedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the prefetch schedule. If the action is successful, the service sends back an HTTP 204 response with an empty HTTP body.|
|PlaybackConfigurationName|path|string|true|The name of the playback configuration for this prefetch schedule.|
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

<h3 id="deleteprefetchschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeletePrefetchScheduleResponse](#schemadeleteprefetchscheduleresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProgram

<a id="opIdDescribeProgram"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/channel/string/program/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channel/{ChannelName}/program/{ProgramName}`

Describes a program within a channel. For information about programs, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-programs.html">Working with programs</a> in the <i>MediaTailor User Guide</i>.

<h3 id="describeprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ChannelName|path|string|true|The name of the channel associated with this Program.|
|ProgramName|path|string|true|The name of the program.|
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
  "AdBreaks": {},
  "Arn": {},
  "ChannelName": {},
  "ClipRange": {
    "EndOffsetMillis": {}
  },
  "CreationTime": {},
  "DurationMillis": {},
  "LiveSourceName": {},
  "ProgramName": {},
  "ScheduledStartTime": {},
  "SourceLocationName": {},
  "VodSourceName": {}
}
```

<h3 id="describeprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProgramResponse](#schemadescribeprogramresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProgram

<a id="opIdUpdateProgram"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/channel/string/program/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AdBreaks": [
      {
        "MessageType": {},
        "OffsetMillis": {},
        "Slate": {
          "SourceLocationName": {},
          "VodSourceName": {}
        },
        "SpliceInsertMessage": {
          "AvailNum": {},
          "AvailsExpected": {},
          "SpliceEventId": {},
          "UniqueProgramId": {}
        },
        "TimeSignalMessage": {
          "SegmentationDescriptors": {}
        }
      }
    ],
    "ScheduleConfiguration": {
      "ClipRange": {
        "EndOffsetMillis": {}
      },
      "Transition": {
        "DurationMillis": {},
        "ScheduledStartTimeMillis": {}
      }
    }
  }'
```

`PUT /channel/{ChannelName}/program/{ProgramName}`

Updates a program within a channel.

> Body parameter

```json
{
  "AdBreaks": [
    {
      "MessageType": {},
      "OffsetMillis": {},
      "Slate": {
        "SourceLocationName": {},
        "VodSourceName": {}
      },
      "SpliceInsertMessage": {
        "AvailNum": {},
        "AvailsExpected": {},
        "SpliceEventId": {},
        "UniqueProgramId": {}
      },
      "TimeSignalMessage": {
        "SegmentationDescriptors": {}
      }
    }
  ],
  "ScheduleConfiguration": {
    "ClipRange": {
      "EndOffsetMillis": {}
    },
    "Transition": {
      "DurationMillis": {},
      "ScheduledStartTimeMillis": {}
    }
  }
}
```

<h3 id="updateprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ChannelName|path|string|true|The name of the channel for this Program.|
|ProgramName|path|string|true|The name of the Program.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AdBreaks|body|[[AdBreak](#schemaadbreak)]|false|The ad break configuration settings.|
|» ScheduleConfiguration|body|object|true|Schedule configuration parameters.|
|» » ClipRange|body|object|false|none|
|» » » EndOffsetMillis|body|object|true|none|
|» » Transition|body|object|false|none|
|» » » DurationMillis|body|object|false|none|
|» » » ScheduledStartTimeMillis|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "AdBreaks": {},
  "Arn": {},
  "ChannelName": {},
  "ClipRange": {
    "EndOffsetMillis": {}
  },
  "CreationTime": {},
  "DurationMillis": {},
  "LiveSourceName": {},
  "ProgramName": {},
  "ScheduledStartTime": {},
  "SourceLocationName": {},
  "VodSourceName": {}
}
```

<h3 id="updateprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProgramResponse](#schemaupdateprogramresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProgram

<a id="opIdCreateProgram"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/channel/string/program/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AdBreaks": [
      {
        "MessageType": {},
        "OffsetMillis": {},
        "Slate": {
          "SourceLocationName": {},
          "VodSourceName": {}
        },
        "SpliceInsertMessage": {
          "AvailNum": {},
          "AvailsExpected": {},
          "SpliceEventId": {},
          "UniqueProgramId": {}
        },
        "TimeSignalMessage": {
          "SegmentationDescriptors": {}
        }
      }
    ],
    "LiveSourceName": "string",
    "ScheduleConfiguration": {
      "ClipRange": {
        "EndOffsetMillis": {}
      },
      "Transition": {
        "DurationMillis": {},
        "RelativePosition": {},
        "RelativeProgram": {},
        "ScheduledStartTimeMillis": {},
        "Type": {}
      }
    },
    "SourceLocationName": "string",
    "VodSourceName": "string"
  }'
```

`POST /channel/{ChannelName}/program/{ProgramName}`

Creates a program within a channel. For information about programs, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-programs.html">Working with programs</a> in the <i>MediaTailor User Guide</i>.

> Body parameter

```json
{
  "AdBreaks": [
    {
      "MessageType": {},
      "OffsetMillis": {},
      "Slate": {
        "SourceLocationName": {},
        "VodSourceName": {}
      },
      "SpliceInsertMessage": {
        "AvailNum": {},
        "AvailsExpected": {},
        "SpliceEventId": {},
        "UniqueProgramId": {}
      },
      "TimeSignalMessage": {
        "SegmentationDescriptors": {}
      }
    }
  ],
  "LiveSourceName": "string",
  "ScheduleConfiguration": {
    "ClipRange": {
      "EndOffsetMillis": {}
    },
    "Transition": {
      "DurationMillis": {},
      "RelativePosition": {},
      "RelativeProgram": {},
      "ScheduledStartTimeMillis": {},
      "Type": {}
    }
  },
  "SourceLocationName": "string",
  "VodSourceName": "string"
}
```

<h3 id="createprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ChannelName|path|string|true|The name of the channel for this Program.|
|ProgramName|path|string|true|The name of the Program.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AdBreaks|body|[[AdBreak](#schemaadbreak)]|false|The ad break configuration settings.|
|» LiveSourceName|body|string|false|The name of the LiveSource for this Program.|
|» ScheduleConfiguration|body|object|true|Schedule configuration parameters. A channel must be stopped before changes can be made to the schedule.|
|» » ClipRange|body|object|false|none|
|» » » EndOffsetMillis|body|object|true|none|
|» » Transition|body|object|false|none|
|» » » DurationMillis|body|object|false|none|
|» » » RelativePosition|body|object|true|none|
|» » » RelativeProgram|body|object|false|none|
|» » » ScheduledStartTimeMillis|body|object|false|none|
|» » » Type|body|object|true|none|
|» SourceLocationName|body|string|true|The name of the source location.|
|» VodSourceName|body|string|false|The name that's used to refer to a VOD source.|

> Example responses

> 200 Response

```json
{
  "AdBreaks": {},
  "Arn": {},
  "ChannelName": {},
  "ClipRange": {
    "EndOffsetMillis": {}
  },
  "CreationTime": {},
  "DurationMillis": {},
  "LiveSourceName": {},
  "ProgramName": {},
  "ScheduledStartTime": {},
  "SourceLocationName": {},
  "VodSourceName": {}
}
```

<h3 id="createprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProgramResponse](#schemacreateprogramresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProgram

<a id="opIdDeleteProgram"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/channel/string/program/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /channel/{ChannelName}/program/{ProgramName}`

Deletes a program within a channel. For information about programs, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-programs.html">Working with programs</a> in the <i>MediaTailor User Guide</i>.

<h3 id="deleteprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ChannelName|path|string|true|The name of the channel.|
|ProgramName|path|string|true|The name of the program.|
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

<h3 id="deleteprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProgramResponse](#schemadeleteprogramresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSourceLocation

<a id="opIdDescribeSourceLocation"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/sourceLocation/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /sourceLocation/{SourceLocationName}`

Describes a source location. A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.

<h3 id="describesourcelocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceLocationName|path|string|true|The name of the source location.|
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
  "AccessConfiguration": {
    "AccessType": {},
    "SecretsManagerAccessTokenConfiguration": {
      "HeaderName": {},
      "SecretArn": {},
      "SecretStringKey": {}
    }
  },
  "Arn": {},
  "CreationTime": {},
  "DefaultSegmentDeliveryConfiguration": {
    "BaseUrl": {}
  },
  "HttpConfiguration": {
    "BaseUrl": {}
  },
  "LastModifiedTime": {},
  "SegmentDeliveryConfigurations": {},
  "SourceLocationName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="describesourcelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSourceLocationResponse](#schemadescribesourcelocationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSourceLocation

<a id="opIdUpdateSourceLocation"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/sourceLocation/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AccessConfiguration": {
      "AccessType": {},
      "SecretsManagerAccessTokenConfiguration": {
        "HeaderName": {},
        "SecretArn": {},
        "SecretStringKey": {}
      }
    },
    "DefaultSegmentDeliveryConfiguration": {
      "BaseUrl": {}
    },
    "HttpConfiguration": {
      "BaseUrl": {}
    },
    "SegmentDeliveryConfigurations": [
      {
        "BaseUrl": {},
        "Name": {}
      }
    ]
  }'
```

`PUT /sourceLocation/{SourceLocationName}`

Updates a source location. A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.

> Body parameter

```json
{
  "AccessConfiguration": {
    "AccessType": {},
    "SecretsManagerAccessTokenConfiguration": {
      "HeaderName": {},
      "SecretArn": {},
      "SecretStringKey": {}
    }
  },
  "DefaultSegmentDeliveryConfiguration": {
    "BaseUrl": {}
  },
  "HttpConfiguration": {
    "BaseUrl": {}
  },
  "SegmentDeliveryConfigurations": [
    {
      "BaseUrl": {},
      "Name": {}
    }
  ]
}
```

<h3 id="updatesourcelocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceLocationName|path|string|true|The name of the source location.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AccessConfiguration|body|object|false|Access configuration parameters.|
|» » AccessType|body|object|false|none|
|» » SecretsManagerAccessTokenConfiguration|body|object|false|none|
|» » » HeaderName|body|object|false|none|
|» » » SecretArn|body|object|false|none|
|» » » SecretStringKey|body|object|false|none|
|» DefaultSegmentDeliveryConfiguration|body|object|false|The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.|
|» » BaseUrl|body|object|false|none|
|» HttpConfiguration|body|object|true|The HTTP configuration for the source location.|
|» » BaseUrl|body|object|false|none|
|» SegmentDeliveryConfigurations|body|[[SegmentDeliveryConfiguration](#schemasegmentdeliveryconfiguration)]|false|A list of the segment delivery configurations associated with this resource.|

> Example responses

> 200 Response

```json
{
  "AccessConfiguration": {
    "AccessType": {},
    "SecretsManagerAccessTokenConfiguration": {
      "HeaderName": {},
      "SecretArn": {},
      "SecretStringKey": {}
    }
  },
  "Arn": {},
  "CreationTime": {},
  "DefaultSegmentDeliveryConfiguration": {
    "BaseUrl": {}
  },
  "HttpConfiguration": {
    "BaseUrl": {}
  },
  "LastModifiedTime": {},
  "SegmentDeliveryConfigurations": {},
  "SourceLocationName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="updatesourcelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSourceLocationResponse](#schemaupdatesourcelocationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSourceLocation

<a id="opIdCreateSourceLocation"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/sourceLocation/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AccessConfiguration": {
      "AccessType": {},
      "SecretsManagerAccessTokenConfiguration": {
        "HeaderName": {},
        "SecretArn": {},
        "SecretStringKey": {}
      }
    },
    "DefaultSegmentDeliveryConfiguration": {
      "BaseUrl": {}
    },
    "HttpConfiguration": {
      "BaseUrl": {}
    },
    "SegmentDeliveryConfigurations": [
      {
        "BaseUrl": {},
        "Name": {}
      }
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /sourceLocation/{SourceLocationName}`

Creates a source location. A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.

> Body parameter

```json
{
  "AccessConfiguration": {
    "AccessType": {},
    "SecretsManagerAccessTokenConfiguration": {
      "HeaderName": {},
      "SecretArn": {},
      "SecretStringKey": {}
    }
  },
  "DefaultSegmentDeliveryConfiguration": {
    "BaseUrl": {}
  },
  "HttpConfiguration": {
    "BaseUrl": {}
  },
  "SegmentDeliveryConfigurations": [
    {
      "BaseUrl": {},
      "Name": {}
    }
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createsourcelocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceLocationName|path|string|true|The name associated with the source location.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AccessConfiguration|body|object|false|Access configuration parameters.|
|» » AccessType|body|object|false|none|
|» » SecretsManagerAccessTokenConfiguration|body|object|false|none|
|» » » HeaderName|body|object|false|none|
|» » » SecretArn|body|object|false|none|
|» » » SecretStringKey|body|object|false|none|
|» DefaultSegmentDeliveryConfiguration|body|object|false|The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.|
|» » BaseUrl|body|object|false|none|
|» HttpConfiguration|body|object|true|The HTTP configuration for the source location.|
|» » BaseUrl|body|object|false|none|
|» SegmentDeliveryConfigurations|body|[[SegmentDeliveryConfiguration](#schemasegmentdeliveryconfiguration)]|false|A list of the segment delivery configurations associated with this resource.|
|» tags|body|object|false|The tags to assign to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "AccessConfiguration": {
    "AccessType": {},
    "SecretsManagerAccessTokenConfiguration": {
      "HeaderName": {},
      "SecretArn": {},
      "SecretStringKey": {}
    }
  },
  "Arn": {},
  "CreationTime": {},
  "DefaultSegmentDeliveryConfiguration": {
    "BaseUrl": {}
  },
  "HttpConfiguration": {
    "BaseUrl": {}
  },
  "LastModifiedTime": {},
  "SegmentDeliveryConfigurations": {},
  "SourceLocationName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createsourcelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSourceLocationResponse](#schemacreatesourcelocationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSourceLocation

<a id="opIdDeleteSourceLocation"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/sourceLocation/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /sourceLocation/{SourceLocationName}`

Deletes a source location. A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.

<h3 id="deletesourcelocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceLocationName|path|string|true|The name of the source location.|
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

<h3 id="deletesourcelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSourceLocationResponse](#schemadeletesourcelocationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVodSource

<a id="opIdDescribeVodSource"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/sourceLocation/string/vodSource/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}`

Provides details about a specific video on demand (VOD) source in a specific source location.

<h3 id="describevodsource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceLocationName|path|string|true|The name of the source location associated with this VOD Source.|
|VodSourceName|path|string|true|The name of the VOD Source.|
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
  "CreationTime": {},
  "HttpPackageConfigurations": {},
  "LastModifiedTime": {},
  "SourceLocationName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "VodSourceName": {}
}
```

<h3 id="describevodsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVodSourceResponse](#schemadescribevodsourceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVodSource

<a id="opIdUpdateVodSource"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/sourceLocation/string/vodSource/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "HttpPackageConfigurations": [
      {
        "Path": {},
        "SourceGroup": {},
        "Type": {}
      }
    ]
  }'
```

`PUT /sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}`

Updates a VOD source's configuration.

> Body parameter

```json
{
  "HttpPackageConfigurations": [
    {
      "Path": {},
      "SourceGroup": {},
      "Type": {}
    }
  ]
}
```

<h3 id="updatevodsource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceLocationName|path|string|true|The name of the source location associated with this VOD Source.|
|VodSourceName|path|string|true|The name of the VOD source.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» HttpPackageConfigurations|body|[[HttpPackageConfiguration](#schemahttppackageconfiguration)]|true|The VOD source's HTTP package configuration settings.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTime": {},
  "HttpPackageConfigurations": {},
  "LastModifiedTime": {},
  "SourceLocationName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "VodSourceName": {}
}
```

<h3 id="updatevodsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateVodSourceResponse](#schemaupdatevodsourceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVodSource

<a id="opIdCreateVodSource"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/sourceLocation/string/vodSource/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "HttpPackageConfigurations": [
      {
        "Path": {},
        "SourceGroup": {},
        "Type": {}
      }
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}`

The VOD source configuration parameters.

> Body parameter

```json
{
  "HttpPackageConfigurations": [
    {
      "Path": {},
      "SourceGroup": {},
      "Type": {}
    }
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createvodsource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceLocationName|path|string|true|The name of the source location for this VOD source.|
|VodSourceName|path|string|true|The name associated with the VOD source.&gt;|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» HttpPackageConfigurations|body|[[HttpPackageConfiguration](#schemahttppackageconfiguration)]|true|The VOD source's HTTP package configuration settings.|
|» tags|body|object|false|The tags to assign to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTime": {},
  "HttpPackageConfigurations": {},
  "LastModifiedTime": {},
  "SourceLocationName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "VodSourceName": {}
}
```

<h3 id="createvodsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVodSourceResponse](#schemacreatevodsourceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVodSource

<a id="opIdDeleteVodSource"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/sourceLocation/string/vodSource/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}`

The video on demand (VOD) source to delete.

<h3 id="deletevodsource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceLocationName|path|string|true|The name of the source location associated with this VOD Source.|
|VodSourceName|path|string|true|The name of the VOD source.|
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

<h3 id="deletevodsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVodSourceResponse](#schemadeletevodsourceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetChannelPolicy

<a id="opIdGetChannelPolicy"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/channel/string/policy \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channel/{ChannelName}/policy`

Returns the channel's IAM policy. IAM policies are used to control access to your channel.

<h3 id="getchannelpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ChannelName|path|string|true|The name of the channel associated with this Channel Policy.|
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
  "Policy": {}
}
```

<h3 id="getchannelpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetChannelPolicyResponse](#schemagetchannelpolicyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutChannelPolicy

<a id="opIdPutChannelPolicy"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/channel/string/policy \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Policy": "string"
  }'
```

`PUT /channel/{ChannelName}/policy`

Creates an IAM policy for the channel. IAM policies are used to control access to your channel.

> Body parameter

```json
{
  "Policy": "string"
}
```

<h3 id="putchannelpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ChannelName|path|string|true|The channel name associated with this Channel Policy.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Policy|body|string|true|Adds an IAM role that determines the permissions of your channel.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="putchannelpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutChannelPolicyResponse](#schemaputchannelpolicyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteChannelPolicy

<a id="opIdDeleteChannelPolicy"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/channel/string/policy \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /channel/{ChannelName}/policy`

The channel policy to delete.

<h3 id="deletechannelpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ChannelName|path|string|true|The name of the channel associated with this channel policy.|
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

<h3 id="deletechannelpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteChannelPolicyResponse](#schemadeletechannelpolicyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPlaybackConfiguration

<a id="opIdGetPlaybackConfiguration"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/playbackConfiguration/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /playbackConfiguration/{Name}`

Retrieves a playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.

<h3 id="getplaybackconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The identifier for the playback configuration.|
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
  "AdDecisionServerUrl": {},
  "AvailSuppression": {
    "Mode": {},
    "Value": {}
  },
  "Bumper": {
    "EndUrl": {},
    "StartUrl": {}
  },
  "CdnConfiguration": {
    "AdSegmentUrlPrefix": {},
    "ContentSegmentUrlPrefix": {}
  },
  "ConfigurationAliases": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DashConfiguration": {
    "ManifestEndpointPrefix": {},
    "MpdLocation": {},
    "OriginManifestType": {}
  },
  "HlsConfiguration": {
    "ManifestEndpointPrefix": {}
  },
  "LivePreRollConfiguration": {
    "AdDecisionServerUrl": {},
    "MaxDurationSeconds": {}
  },
  "LogConfiguration": {
    "PercentEnabled": {}
  },
  "ManifestProcessingRules": {
    "AdMarkerPassthrough": {
      "Enabled": {}
    }
  },
  "Name": {},
  "PersonalizationThresholdSeconds": {},
  "PlaybackConfigurationArn": {},
  "PlaybackEndpointPrefix": {},
  "SessionInitializationEndpointPrefix": {},
  "SlateAdUrl": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TranscodeProfileName": {},
  "VideoContentSourceUrl": {}
}
```

<h3 id="getplaybackconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPlaybackConfigurationResponse](#schemagetplaybackconfigurationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePlaybackConfiguration

<a id="opIdDeletePlaybackConfiguration"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/playbackConfiguration/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /playbackConfiguration/{Name}`

Deletes a playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.

<h3 id="deleteplaybackconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the playback configuration.|
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

<h3 id="deleteplaybackconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeletePlaybackConfigurationResponse](#schemadeleteplaybackconfigurationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetChannelSchedule

<a id="opIdGetChannelSchedule"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/channel/string/schedule \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channel/{ChannelName}/schedule`

Retrieves information about your channel's schedule.

<h3 id="getchannelschedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ChannelName|path|string|true|The name of the channel associated with this Channel Schedule.|
|durationMinutes|query|string|false|The duration in minutes of the channel schedule.|
|maxResults|query|integer|false|The maximum number of channel schedules that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> channel schedules, use the value of <code>NextToken</code> in the response to get the next page of results.|
|nextToken|query|string|false|<p>(Optional) If the playback configuration has more than <code>MaxResults</code> channel schedules, use <code>NextToken</code> to get the second and subsequent pages of results.</p> <p>For the first <code>GetChannelScheduleRequest</code> request, omit this value.</p> <p>For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request.</p> <p>If the previous response didn't include a <code>NextToken</code> element, there are no more channel schedules to get.</p>|
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
  "Items": {},
  "NextToken": {}
}
```

<h3 id="getchannelschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetChannelScheduleResponse](#schemagetchannelscheduleresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAlerts

<a id="opIdListAlerts"></a>

> Code samples

```bash
curl 'https://mediatailor.us-east-1.amazonaws.com/alerts#resourceArn?resourceArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /alerts#resourceArn`

Lists the alerts that are associated with a MediaTailor channel assembly resource.

<h3 id="listalerts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of alerts that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> alerts, use the value of <code>NextToken</code> in the response to get the next page of results.|
|nextToken|query|string|false|Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.|
|resourceArn|query|string|true|The Amazon Resource Name (ARN) of the resource.|
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
  "Items": {},
  "NextToken": {}
}
```

<h3 id="listalerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAlertsResponse](#schemalistalertsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListChannels

<a id="opIdListChannels"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/channels \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels`

Retrieves information about the channels that are associated with the current AWS account.

<h3 id="listchannels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of channels that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> channels, use the value of <code>NextToken</code> in the response to get the next page of results.|
|nextToken|query|string|false|Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.|
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
  "Items": {},
  "NextToken": {}
}
```

<h3 id="listchannels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChannelsResponse](#schemalistchannelsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLiveSources

<a id="opIdListLiveSources"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/sourceLocation/string/liveSources \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /sourceLocation/{SourceLocationName}/liveSources`

Lists the live sources contained in a source location. A source represents a piece of content.

<h3 id="listlivesources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of live sources that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> live sources, use the value of <code>NextToken</code> in the response to get the next page of results.|
|nextToken|query|string|false|Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.|
|SourceLocationName|path|string|true|The name of the source location associated with this Live Sources list.|
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
  "Items": {},
  "NextToken": {}
}
```

<h3 id="listlivesources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLiveSourcesResponse](#schemalistlivesourcesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPlaybackConfigurations

<a id="opIdListPlaybackConfigurations"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/playbackConfigurations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /playbackConfigurations`

Retrieves existing playback configurations. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with Configurations in AWS Elemental MediaTailor</a>.

<h3 id="listplaybackconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|integer|false|The maximum number of playback configurations that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> playback configurations, use the value of <code>NextToken</code> in the response to get the next page of results.|
|NextToken|query|string|false|Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.|
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
  "Items": {},
  "NextToken": {}
}
```

<h3 id="listplaybackconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPlaybackConfigurationsResponse](#schemalistplaybackconfigurationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPrefetchSchedules

<a id="opIdListPrefetchSchedules"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/prefetchSchedule/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MaxResults": 1,
    "NextToken": "string",
    "StreamId": "string"
  }'
```

`POST /prefetchSchedule/{PlaybackConfigurationName}`

Lists the prefetch schedules for a playback configuration.

> Body parameter

```json
{
  "MaxResults": 1,
  "NextToken": "string",
  "StreamId": "string"
}
```

<h3 id="listprefetchschedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PlaybackConfigurationName|path|string|true|Retrieves the prefetch schedule(s) for a specific playback configuration.|
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
|» MaxResults|body|integer|false|The maximum number of prefetch schedules that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> prefetch schedules, use the value of <code>NextToken</code> in the response to get the next page of results.|
|» NextToken|body|string|false|<p>(Optional) If the playback configuration has more than <code>MaxResults</code> prefetch schedules, use <code>NextToken</code> to get the second and subsequent pages of results.</p> <p> For the first <code>ListPrefetchSchedulesRequest</code> request, omit this value.</p> <p> For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request.</p> <p> If the previous response didn't include a <code>NextToken</code> element, there are no more prefetch schedules to get.</p>|
|» StreamId|body|string|false|An optional filtering parameter whereby MediaTailor filters the prefetch schedules to include only specific streams.|

> Example responses

> 200 Response

```json
{
  "Items": {},
  "NextToken": {}
}
```

<h3 id="listprefetchschedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPrefetchSchedulesResponse](#schemalistprefetchschedulesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSourceLocations

<a id="opIdListSourceLocations"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/sourceLocations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /sourceLocations`

Lists the source locations for a channel. A source location defines the host server URL, and contains a list of sources.

<h3 id="listsourcelocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false| The maximum number of source locations that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> source locations, use the value of <code>NextToken</code> in the response to get the next page of results.|
|nextToken|query|string|false|Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.|
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
  "Items": {},
  "NextToken": {}
}
```

<h3 id="listsourcelocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSourceLocationsResponse](#schemalistsourcelocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{ResourceArn}`

A list of tags that are associated with this resource. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|The Amazon Resource Name (ARN) associated with this resource.|
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/tags/string \
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

`POST /tags/{ResourceArn}`

The resource to tag. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.

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
|ResourceArn|path|string|true|The Amazon Resource Name (ARN) associated with the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|The tags to assign to the resource. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 480 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVodSources

<a id="opIdListVodSources"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/sourceLocation/string/vodSources \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /sourceLocation/{SourceLocationName}/vodSources`

Lists the VOD sources contained in a source location. A source represents a piece of content.

<h3 id="listvodsources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false| The maximum number of VOD sources that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> VOD sources, use the value of <code>NextToken</code> in the response to get the next page of results.|
|nextToken|query|string|false|Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.|
|SourceLocationName|path|string|true|The name of the source location associated with this VOD Source list.|
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
  "Items": {},
  "NextToken": {}
}
```

<h3 id="listvodsources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVodSourcesResponse](#schemalistvodsourcesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutPlaybackConfiguration

<a id="opIdPutPlaybackConfiguration"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/playbackConfiguration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AdDecisionServerUrl": "string",
    "AvailSuppression": {
      "Mode": {},
      "Value": {}
    },
    "Bumper": {
      "EndUrl": {},
      "StartUrl": {}
    },
    "CdnConfiguration": {
      "AdSegmentUrlPrefix": {},
      "ContentSegmentUrlPrefix": {}
    },
    "ConfigurationAliases": {
      "property1": {
        "property1": "string",
        "property2": "string"
      },
      "property2": {
        "property1": "string",
        "property2": "string"
      }
    },
    "DashConfiguration": {
      "MpdLocation": {},
      "OriginManifestType": {}
    },
    "LivePreRollConfiguration": {
      "AdDecisionServerUrl": {},
      "MaxDurationSeconds": {}
    },
    "ManifestProcessingRules": {
      "AdMarkerPassthrough": {
        "Enabled": {}
      }
    },
    "Name": "string",
    "PersonalizationThresholdSeconds": 1,
    "SlateAdUrl": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "TranscodeProfileName": "string",
    "VideoContentSourceUrl": "string"
  }'
```

`PUT /playbackConfiguration`

Creates a playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.

> Body parameter

```json
{
  "AdDecisionServerUrl": "string",
  "AvailSuppression": {
    "Mode": {},
    "Value": {}
  },
  "Bumper": {
    "EndUrl": {},
    "StartUrl": {}
  },
  "CdnConfiguration": {
    "AdSegmentUrlPrefix": {},
    "ContentSegmentUrlPrefix": {}
  },
  "ConfigurationAliases": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DashConfiguration": {
    "MpdLocation": {},
    "OriginManifestType": {}
  },
  "LivePreRollConfiguration": {
    "AdDecisionServerUrl": {},
    "MaxDurationSeconds": {}
  },
  "ManifestProcessingRules": {
    "AdMarkerPassthrough": {
      "Enabled": {}
    }
  },
  "Name": "string",
  "PersonalizationThresholdSeconds": 1,
  "SlateAdUrl": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "TranscodeProfileName": "string",
  "VideoContentSourceUrl": "string"
}
```

<h3 id="putplaybackconfiguration-parameters">Parameters</h3>

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
|» AdDecisionServerUrl|body|string|false|The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.|
|» AvailSuppression|body|object|false|The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.|
|» » Mode|body|object|false|none|
|» » Value|body|object|false|none|
|» Bumper|body|object|false|The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.|
|» » EndUrl|body|object|false|none|
|» » StartUrl|body|object|false|none|
|» CdnConfiguration|body|object|false|The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.|
|» » AdSegmentUrlPrefix|body|object|false|none|
|» » ContentSegmentUrlPrefix|body|object|false|none|
|» ConfigurationAliases|body|object|false|The predefined aliases for dynamic variables.|
|» » **additionalProperties**|body|[__mapOf__string](#schema__mapof__string)|false|none|
|» DashConfiguration|body|object|false|The configuration for DASH PUT operations.|
|» » MpdLocation|body|object|false|none|
|» » OriginManifestType|body|object|false|none|
|» LivePreRollConfiguration|body|object|false|The configuration for pre-roll ad insertion.|
|» » AdDecisionServerUrl|body|object|false|none|
|» » MaxDurationSeconds|body|object|false|none|
|» ManifestProcessingRules|body|object|false|The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.|
|» » AdMarkerPassthrough|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» Name|body|string|true|The identifier for the playback configuration.|
|» PersonalizationThresholdSeconds|body|integer|false|Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.|
|» SlateAdUrl|body|string|false|The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.|
|» tags|body|object|false|The tags to assign to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|
|» TranscodeProfileName|body|string|false|The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.|
|» VideoContentSourceUrl|body|string|false|The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.|

> Example responses

> 200 Response

```json
{
  "AdDecisionServerUrl": {},
  "AvailSuppression": {
    "Mode": {},
    "Value": {}
  },
  "Bumper": {
    "EndUrl": {},
    "StartUrl": {}
  },
  "CdnConfiguration": {
    "AdSegmentUrlPrefix": {},
    "ContentSegmentUrlPrefix": {}
  },
  "ConfigurationAliases": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DashConfiguration": {
    "ManifestEndpointPrefix": {},
    "MpdLocation": {},
    "OriginManifestType": {}
  },
  "HlsConfiguration": {
    "ManifestEndpointPrefix": {}
  },
  "LivePreRollConfiguration": {
    "AdDecisionServerUrl": {},
    "MaxDurationSeconds": {}
  },
  "LogConfiguration": {
    "PercentEnabled": {}
  },
  "ManifestProcessingRules": {
    "AdMarkerPassthrough": {
      "Enabled": {}
    }
  },
  "Name": {},
  "PersonalizationThresholdSeconds": {},
  "PlaybackConfigurationArn": {},
  "PlaybackEndpointPrefix": {},
  "SessionInitializationEndpointPrefix": {},
  "SlateAdUrl": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TranscodeProfileName": {},
  "VideoContentSourceUrl": {}
}
```

<h3 id="putplaybackconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutPlaybackConfigurationResponse](#schemaputplaybackconfigurationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartChannel

<a id="opIdStartChannel"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/channel/string/start \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /channel/{ChannelName}/start`

Starts a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.

<h3 id="startchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ChannelName|path|string|true|The name of the channel.|
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

<h3 id="startchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartChannelResponse](#schemastartchannelresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopChannel

<a id="opIdStopChannel"></a>

> Code samples

```bash
curl https://mediatailor.us-east-1.amazonaws.com/channel/string/stop \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /channel/{ChannelName}/stop`

Stops a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.

<h3 id="stopchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ChannelName|path|string|true|The name of the channel.|
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

<h3 id="stopchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopChannelResponse](#schemastopchannelresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://mediatailor.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{ResourceArn}#tagKeys`

The resource to untag.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource to untag.|
|tagKeys|query|[[__string](#schema__string)]|true|The tag keys associated with the resource.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_ConfigureLogsForChannelResponse">ConfigureLogsForChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurelogsforchannelresponse"></a>
<a id="schema_ConfigureLogsForChannelResponse"></a>
<a id="tocSconfigurelogsforchannelresponse"></a>
<a id="tocsconfigurelogsforchannelresponse"></a>

```json
{
  "ChannelName": {},
  "LogTypes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelName|object|false|none|none|
|LogTypes|object|false|none|none|

<h2 id="tocS_LogType">LogType</h2>
<!-- backwards compatibility -->
<a id="schemalogtype"></a>
<a id="schema_LogType"></a>
<a id="tocSlogtype"></a>
<a id="tocslogtype"></a>

```json
"AS_RUN"
```

<h2 id="tocS_ConfigureLogsForPlaybackConfigurationResponse">ConfigureLogsForPlaybackConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurelogsforplaybackconfigurationresponse"></a>
<a id="schema_ConfigureLogsForPlaybackConfigurationResponse"></a>
<a id="tocSconfigurelogsforplaybackconfigurationresponse"></a>
<a id="tocsconfigurelogsforplaybackconfigurationresponse"></a>

```json
{
  "PercentEnabled": {},
  "PlaybackConfigurationName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PercentEnabled|object|true|none|none|
|PlaybackConfigurationName|object|false|none|none|

<h2 id="tocS_CreateChannelResponse">CreateChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelresponse"></a>
<a id="schema_CreateChannelResponse"></a>
<a id="tocScreatechannelresponse"></a>
<a id="tocscreatechannelresponse"></a>

```json
{
  "Arn": {},
  "ChannelName": {},
  "ChannelState": {},
  "CreationTime": {},
  "FillerSlate": {
    "SourceLocationName": {},
    "VodSourceName": {}
  },
  "LastModifiedTime": {},
  "Outputs": {},
  "PlaybackMode": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Tier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|ChannelName|object|false|none|none|
|ChannelState|object|false|none|none|
|CreationTime|object|false|none|none|
|FillerSlate|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|Outputs|object|false|none|none|
|PlaybackMode|object|false|none|none|
|Tags|object|false|none|none|
|Tier|object|false|none|none|

<h2 id="tocS___string">__string</h2>
<!-- backwards compatibility -->
<a id="schema__string"></a>
<a id="schema___string"></a>
<a id="tocS__string"></a>
<a id="tocs__string"></a>

```json
"string"
```

<h2 id="tocS_RequestOutputItem">RequestOutputItem</h2>
<!-- backwards compatibility -->
<a id="schemarequestoutputitem"></a>
<a id="schema_RequestOutputItem"></a>
<a id="tocSrequestoutputitem"></a>
<a id="tocsrequestoutputitem"></a>

```json
{
  "DashPlaylistSettings": {
    "ManifestWindowSeconds": {},
    "MinBufferTimeSeconds": {},
    "MinUpdatePeriodSeconds": {},
    "SuggestedPresentationDelaySeconds": {}
  },
  "HlsPlaylistSettings": {
    "ManifestWindowSeconds": {}
  },
  "ManifestName": {},
  "SourceGroup": {}
}
```

The output configuration for this channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DashPlaylistSettings|object|false|none|none|
|HlsPlaylistSettings|object|false|none|none|
|ManifestName|object|true|none|none|
|SourceGroup|object|true|none|none|

<h2 id="tocS_CreateLiveSourceResponse">CreateLiveSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelivesourceresponse"></a>
<a id="schema_CreateLiveSourceResponse"></a>
<a id="tocScreatelivesourceresponse"></a>
<a id="tocscreatelivesourceresponse"></a>

```json
{
  "Arn": {},
  "CreationTime": {},
  "HttpPackageConfigurations": {},
  "LastModifiedTime": {},
  "LiveSourceName": {},
  "SourceLocationName": {},
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
|CreationTime|object|false|none|none|
|HttpPackageConfigurations|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|LiveSourceName|object|false|none|none|
|SourceLocationName|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_HttpPackageConfiguration">HttpPackageConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemahttppackageconfiguration"></a>
<a id="schema_HttpPackageConfiguration"></a>
<a id="tocShttppackageconfiguration"></a>
<a id="tocshttppackageconfiguration"></a>

```json
{
  "Path": {},
  "SourceGroup": {},
  "Type": {}
}
```

The HTTP package configuration properties for the requested VOD source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Path|object|true|none|none|
|SourceGroup|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_CreatePrefetchScheduleResponse">CreatePrefetchScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateprefetchscheduleresponse"></a>
<a id="schema_CreatePrefetchScheduleResponse"></a>
<a id="tocScreateprefetchscheduleresponse"></a>
<a id="tocscreateprefetchscheduleresponse"></a>

```json
{
  "Arn": {},
  "Consumption": {
    "AvailMatchingCriteria": {},
    "EndTime": {},
    "StartTime": {}
  },
  "Name": {},
  "PlaybackConfigurationName": {},
  "Retrieval": {
    "DynamicVariables": {
      "property1": "string",
      "property2": "string"
    },
    "EndTime": {},
    "StartTime": {}
  },
  "StreamId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Consumption|object|false|none|none|
|Name|object|false|none|none|
|PlaybackConfigurationName|object|false|none|none|
|Retrieval|object|false|none|none|
|StreamId|object|false|none|none|

<h2 id="tocS___listOfAvailMatchingCriteria">__listOfAvailMatchingCriteria</h2>
<!-- backwards compatibility -->
<a id="schema__listofavailmatchingcriteria"></a>
<a id="schema___listOfAvailMatchingCriteria"></a>
<a id="tocS__listofavailmatchingcriteria"></a>
<a id="tocs__listofavailmatchingcriteria"></a>

```json
[
  {
    "DynamicVariable": {},
    "Operator": {}
  }
]
```

<h2 id="tocS___timestampUnix">__timestampUnix</h2>
<!-- backwards compatibility -->
<a id="schema__timestampunix"></a>
<a id="schema___timestampUnix"></a>
<a id="tocS__timestampunix"></a>
<a id="tocs__timestampunix"></a>

```json
"1970-01-01T00:00:00Z"
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

<h2 id="tocS_CreateProgramResponse">CreateProgramResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateprogramresponse"></a>
<a id="schema_CreateProgramResponse"></a>
<a id="tocScreateprogramresponse"></a>
<a id="tocscreateprogramresponse"></a>

```json
{
  "AdBreaks": {},
  "Arn": {},
  "ChannelName": {},
  "ClipRange": {
    "EndOffsetMillis": {}
  },
  "CreationTime": {},
  "DurationMillis": {},
  "LiveSourceName": {},
  "ProgramName": {},
  "ScheduledStartTime": {},
  "SourceLocationName": {},
  "VodSourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdBreaks|object|false|none|none|
|Arn|object|false|none|none|
|ChannelName|object|false|none|none|
|ClipRange|object|false|none|none|
|CreationTime|object|false|none|none|
|DurationMillis|object|false|none|none|
|LiveSourceName|object|false|none|none|
|ProgramName|object|false|none|none|
|ScheduledStartTime|object|false|none|none|
|SourceLocationName|object|false|none|none|
|VodSourceName|object|false|none|none|

<h2 id="tocS_AdBreak">AdBreak</h2>
<!-- backwards compatibility -->
<a id="schemaadbreak"></a>
<a id="schema_AdBreak"></a>
<a id="tocSadbreak"></a>
<a id="tocsadbreak"></a>

```json
{
  "MessageType": {},
  "OffsetMillis": {},
  "Slate": {
    "SourceLocationName": {},
    "VodSourceName": {}
  },
  "SpliceInsertMessage": {
    "AvailNum": {},
    "AvailsExpected": {},
    "SpliceEventId": {},
    "UniqueProgramId": {}
  },
  "TimeSignalMessage": {
    "SegmentationDescriptors": {}
  }
}
```

Ad break configuration parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageType|object|false|none|none|
|OffsetMillis|object|false|none|none|
|Slate|object|false|none|none|
|SpliceInsertMessage|object|false|none|none|
|TimeSignalMessage|object|false|none|none|

<h2 id="tocS_ClipRange">ClipRange</h2>
<!-- backwards compatibility -->
<a id="schemacliprange"></a>
<a id="schema_ClipRange"></a>
<a id="tocScliprange"></a>
<a id="tocscliprange"></a>

```json
{
  "EndOffsetMillis": {}
}
```

Clip range configuration for the VOD source associated with the program.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndOffsetMillis|object|true|none|none|

<h2 id="tocS_Transition">Transition</h2>
<!-- backwards compatibility -->
<a id="schematransition"></a>
<a id="schema_Transition"></a>
<a id="tocStransition"></a>
<a id="tocstransition"></a>

```json
{
  "DurationMillis": {},
  "RelativePosition": {},
  "RelativeProgram": {},
  "ScheduledStartTimeMillis": {},
  "Type": {}
}
```

Program transition configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DurationMillis|object|false|none|none|
|RelativePosition|object|true|none|none|
|RelativeProgram|object|false|none|none|
|ScheduledStartTimeMillis|object|false|none|none|
|Type|object|true|none|none|

<h2 id="tocS_CreateSourceLocationResponse">CreateSourceLocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesourcelocationresponse"></a>
<a id="schema_CreateSourceLocationResponse"></a>
<a id="tocScreatesourcelocationresponse"></a>
<a id="tocscreatesourcelocationresponse"></a>

```json
{
  "AccessConfiguration": {
    "AccessType": {},
    "SecretsManagerAccessTokenConfiguration": {
      "HeaderName": {},
      "SecretArn": {},
      "SecretStringKey": {}
    }
  },
  "Arn": {},
  "CreationTime": {},
  "DefaultSegmentDeliveryConfiguration": {
    "BaseUrl": {}
  },
  "HttpConfiguration": {
    "BaseUrl": {}
  },
  "LastModifiedTime": {},
  "SegmentDeliveryConfigurations": {},
  "SourceLocationName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessConfiguration|object|false|none|none|
|Arn|object|false|none|none|
|CreationTime|object|false|none|none|
|DefaultSegmentDeliveryConfiguration|object|false|none|none|
|HttpConfiguration|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|SegmentDeliveryConfigurations|object|false|none|none|
|SourceLocationName|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_AccessType">AccessType</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstype"></a>
<a id="schema_AccessType"></a>
<a id="tocSaccesstype"></a>
<a id="tocsaccesstype"></a>

```json
"S3_SIGV4"
```

<h2 id="tocS_SecretsManagerAccessTokenConfiguration">SecretsManagerAccessTokenConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasecretsmanageraccesstokenconfiguration"></a>
<a id="schema_SecretsManagerAccessTokenConfiguration"></a>
<a id="tocSsecretsmanageraccesstokenconfiguration"></a>
<a id="tocssecretsmanageraccesstokenconfiguration"></a>

```json
{
  "HeaderName": {},
  "SecretArn": {},
  "SecretStringKey": {}
}
```

AWS Secrets Manager access token configuration parameters. For information about Secrets Manager access token authentication, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html">Working with AWS Secrets Manager access token authentication</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HeaderName|object|false|none|none|
|SecretArn|object|false|none|none|
|SecretStringKey|object|false|none|none|

<h2 id="tocS_SegmentDeliveryConfiguration">SegmentDeliveryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasegmentdeliveryconfiguration"></a>
<a id="schema_SegmentDeliveryConfiguration"></a>
<a id="tocSsegmentdeliveryconfiguration"></a>
<a id="tocssegmentdeliveryconfiguration"></a>

```json
{
  "BaseUrl": {},
  "Name": {}
}
```

The segment delivery configuration settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaseUrl|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_CreateVodSourceResponse">CreateVodSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatevodsourceresponse"></a>
<a id="schema_CreateVodSourceResponse"></a>
<a id="tocScreatevodsourceresponse"></a>
<a id="tocscreatevodsourceresponse"></a>

```json
{
  "Arn": {},
  "CreationTime": {},
  "HttpPackageConfigurations": {},
  "LastModifiedTime": {},
  "SourceLocationName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "VodSourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTime|object|false|none|none|
|HttpPackageConfigurations|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|SourceLocationName|object|false|none|none|
|Tags|object|false|none|none|
|VodSourceName|object|false|none|none|

<h2 id="tocS_DeleteChannelResponse">DeleteChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletechannelresponse"></a>
<a id="schema_DeleteChannelResponse"></a>
<a id="tocSdeletechannelresponse"></a>
<a id="tocsdeletechannelresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteChannelPolicyResponse">DeleteChannelPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletechannelpolicyresponse"></a>
<a id="schema_DeleteChannelPolicyResponse"></a>
<a id="tocSdeletechannelpolicyresponse"></a>
<a id="tocsdeletechannelpolicyresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteLiveSourceResponse">DeleteLiveSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletelivesourceresponse"></a>
<a id="schema_DeleteLiveSourceResponse"></a>
<a id="tocSdeletelivesourceresponse"></a>
<a id="tocsdeletelivesourceresponse"></a>

```json
{}
```

<h2 id="tocS_DeletePlaybackConfigurationResponse">DeletePlaybackConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteplaybackconfigurationresponse"></a>
<a id="schema_DeletePlaybackConfigurationResponse"></a>
<a id="tocSdeleteplaybackconfigurationresponse"></a>
<a id="tocsdeleteplaybackconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_DeletePrefetchScheduleResponse">DeletePrefetchScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprefetchscheduleresponse"></a>
<a id="schema_DeletePrefetchScheduleResponse"></a>
<a id="tocSdeleteprefetchscheduleresponse"></a>
<a id="tocsdeleteprefetchscheduleresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteProgramResponse">DeleteProgramResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprogramresponse"></a>
<a id="schema_DeleteProgramResponse"></a>
<a id="tocSdeleteprogramresponse"></a>
<a id="tocsdeleteprogramresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteSourceLocationResponse">DeleteSourceLocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesourcelocationresponse"></a>
<a id="schema_DeleteSourceLocationResponse"></a>
<a id="tocSdeletesourcelocationresponse"></a>
<a id="tocsdeletesourcelocationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteVodSourceResponse">DeleteVodSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletevodsourceresponse"></a>
<a id="schema_DeleteVodSourceResponse"></a>
<a id="tocSdeletevodsourceresponse"></a>
<a id="tocsdeletevodsourceresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeChannelResponse">DescribeChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelresponse"></a>
<a id="schema_DescribeChannelResponse"></a>
<a id="tocSdescribechannelresponse"></a>
<a id="tocsdescribechannelresponse"></a>

```json
{
  "Arn": {},
  "ChannelName": {},
  "ChannelState": {},
  "CreationTime": {},
  "FillerSlate": {
    "SourceLocationName": {},
    "VodSourceName": {}
  },
  "LastModifiedTime": {},
  "LogConfiguration": {
    "LogTypes": {}
  },
  "Outputs": {},
  "PlaybackMode": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Tier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|ChannelName|object|false|none|none|
|ChannelState|object|false|none|none|
|CreationTime|object|false|none|none|
|FillerSlate|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|LogConfiguration|object|true|none|none|
|Outputs|object|false|none|none|
|PlaybackMode|object|false|none|none|
|Tags|object|false|none|none|
|Tier|object|false|none|none|

<h2 id="tocS_DescribeLiveSourceResponse">DescribeLiveSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribelivesourceresponse"></a>
<a id="schema_DescribeLiveSourceResponse"></a>
<a id="tocSdescribelivesourceresponse"></a>
<a id="tocsdescribelivesourceresponse"></a>

```json
{
  "Arn": {},
  "CreationTime": {},
  "HttpPackageConfigurations": {},
  "LastModifiedTime": {},
  "LiveSourceName": {},
  "SourceLocationName": {},
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
|CreationTime|object|false|none|none|
|HttpPackageConfigurations|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|LiveSourceName|object|false|none|none|
|SourceLocationName|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeProgramResponse">DescribeProgramResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprogramresponse"></a>
<a id="schema_DescribeProgramResponse"></a>
<a id="tocSdescribeprogramresponse"></a>
<a id="tocsdescribeprogramresponse"></a>

```json
{
  "AdBreaks": {},
  "Arn": {},
  "ChannelName": {},
  "ClipRange": {
    "EndOffsetMillis": {}
  },
  "CreationTime": {},
  "DurationMillis": {},
  "LiveSourceName": {},
  "ProgramName": {},
  "ScheduledStartTime": {},
  "SourceLocationName": {},
  "VodSourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdBreaks|object|false|none|none|
|Arn|object|false|none|none|
|ChannelName|object|false|none|none|
|ClipRange|object|false|none|none|
|CreationTime|object|false|none|none|
|DurationMillis|object|false|none|none|
|LiveSourceName|object|false|none|none|
|ProgramName|object|false|none|none|
|ScheduledStartTime|object|false|none|none|
|SourceLocationName|object|false|none|none|
|VodSourceName|object|false|none|none|

<h2 id="tocS_DescribeSourceLocationResponse">DescribeSourceLocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesourcelocationresponse"></a>
<a id="schema_DescribeSourceLocationResponse"></a>
<a id="tocSdescribesourcelocationresponse"></a>
<a id="tocsdescribesourcelocationresponse"></a>

```json
{
  "AccessConfiguration": {
    "AccessType": {},
    "SecretsManagerAccessTokenConfiguration": {
      "HeaderName": {},
      "SecretArn": {},
      "SecretStringKey": {}
    }
  },
  "Arn": {},
  "CreationTime": {},
  "DefaultSegmentDeliveryConfiguration": {
    "BaseUrl": {}
  },
  "HttpConfiguration": {
    "BaseUrl": {}
  },
  "LastModifiedTime": {},
  "SegmentDeliveryConfigurations": {},
  "SourceLocationName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessConfiguration|object|false|none|none|
|Arn|object|false|none|none|
|CreationTime|object|false|none|none|
|DefaultSegmentDeliveryConfiguration|object|false|none|none|
|HttpConfiguration|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|SegmentDeliveryConfigurations|object|false|none|none|
|SourceLocationName|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeVodSourceResponse">DescribeVodSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribevodsourceresponse"></a>
<a id="schema_DescribeVodSourceResponse"></a>
<a id="tocSdescribevodsourceresponse"></a>
<a id="tocsdescribevodsourceresponse"></a>

```json
{
  "Arn": {},
  "CreationTime": {},
  "HttpPackageConfigurations": {},
  "LastModifiedTime": {},
  "SourceLocationName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "VodSourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTime|object|false|none|none|
|HttpPackageConfigurations|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|SourceLocationName|object|false|none|none|
|Tags|object|false|none|none|
|VodSourceName|object|false|none|none|

<h2 id="tocS_GetChannelPolicyResponse">GetChannelPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchannelpolicyresponse"></a>
<a id="schema_GetChannelPolicyResponse"></a>
<a id="tocSgetchannelpolicyresponse"></a>
<a id="tocsgetchannelpolicyresponse"></a>

```json
{
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_GetChannelScheduleResponse">GetChannelScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchannelscheduleresponse"></a>
<a id="schema_GetChannelScheduleResponse"></a>
<a id="tocSgetchannelscheduleresponse"></a>
<a id="tocsgetchannelscheduleresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetPlaybackConfigurationResponse">GetPlaybackConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetplaybackconfigurationresponse"></a>
<a id="schema_GetPlaybackConfigurationResponse"></a>
<a id="tocSgetplaybackconfigurationresponse"></a>
<a id="tocsgetplaybackconfigurationresponse"></a>

```json
{
  "AdDecisionServerUrl": {},
  "AvailSuppression": {
    "Mode": {},
    "Value": {}
  },
  "Bumper": {
    "EndUrl": {},
    "StartUrl": {}
  },
  "CdnConfiguration": {
    "AdSegmentUrlPrefix": {},
    "ContentSegmentUrlPrefix": {}
  },
  "ConfigurationAliases": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DashConfiguration": {
    "ManifestEndpointPrefix": {},
    "MpdLocation": {},
    "OriginManifestType": {}
  },
  "HlsConfiguration": {
    "ManifestEndpointPrefix": {}
  },
  "LivePreRollConfiguration": {
    "AdDecisionServerUrl": {},
    "MaxDurationSeconds": {}
  },
  "LogConfiguration": {
    "PercentEnabled": {}
  },
  "ManifestProcessingRules": {
    "AdMarkerPassthrough": {
      "Enabled": {}
    }
  },
  "Name": {},
  "PersonalizationThresholdSeconds": {},
  "PlaybackConfigurationArn": {},
  "PlaybackEndpointPrefix": {},
  "SessionInitializationEndpointPrefix": {},
  "SlateAdUrl": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TranscodeProfileName": {},
  "VideoContentSourceUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdDecisionServerUrl|object|false|none|none|
|AvailSuppression|object|false|none|none|
|Bumper|object|false|none|none|
|CdnConfiguration|object|false|none|none|
|ConfigurationAliases|object|false|none|none|
|DashConfiguration|object|false|none|none|
|HlsConfiguration|object|false|none|none|
|LivePreRollConfiguration|object|false|none|none|
|LogConfiguration|object|false|none|none|
|ManifestProcessingRules|object|false|none|none|
|Name|object|false|none|none|
|PersonalizationThresholdSeconds|object|false|none|none|
|PlaybackConfigurationArn|object|false|none|none|
|PlaybackEndpointPrefix|object|false|none|none|
|SessionInitializationEndpointPrefix|object|false|none|none|
|SlateAdUrl|object|false|none|none|
|Tags|object|false|none|none|
|TranscodeProfileName|object|false|none|none|
|VideoContentSourceUrl|object|false|none|none|

<h2 id="tocS_GetPrefetchScheduleResponse">GetPrefetchScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetprefetchscheduleresponse"></a>
<a id="schema_GetPrefetchScheduleResponse"></a>
<a id="tocSgetprefetchscheduleresponse"></a>
<a id="tocsgetprefetchscheduleresponse"></a>

```json
{
  "Arn": {},
  "Consumption": {
    "AvailMatchingCriteria": {},
    "EndTime": {},
    "StartTime": {}
  },
  "Name": {},
  "PlaybackConfigurationName": {},
  "Retrieval": {
    "DynamicVariables": {
      "property1": "string",
      "property2": "string"
    },
    "EndTime": {},
    "StartTime": {}
  },
  "StreamId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Consumption|object|false|none|none|
|Name|object|false|none|none|
|PlaybackConfigurationName|object|false|none|none|
|Retrieval|object|false|none|none|
|StreamId|object|false|none|none|

<h2 id="tocS_ListAlertsResponse">ListAlertsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistalertsresponse"></a>
<a id="schema_ListAlertsResponse"></a>
<a id="tocSlistalertsresponse"></a>
<a id="tocslistalertsresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListChannelsResponse">ListChannelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsresponse"></a>
<a id="schema_ListChannelsResponse"></a>
<a id="tocSlistchannelsresponse"></a>
<a id="tocslistchannelsresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLiveSourcesResponse">ListLiveSourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlivesourcesresponse"></a>
<a id="schema_ListLiveSourcesResponse"></a>
<a id="tocSlistlivesourcesresponse"></a>
<a id="tocslistlivesourcesresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPlaybackConfigurationsResponse">ListPlaybackConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistplaybackconfigurationsresponse"></a>
<a id="schema_ListPlaybackConfigurationsResponse"></a>
<a id="tocSlistplaybackconfigurationsresponse"></a>
<a id="tocslistplaybackconfigurationsresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPrefetchSchedulesResponse">ListPrefetchSchedulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprefetchschedulesresponse"></a>
<a id="schema_ListPrefetchSchedulesResponse"></a>
<a id="tocSlistprefetchschedulesresponse"></a>
<a id="tocslistprefetchschedulesresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSourceLocationsResponse">ListSourceLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsourcelocationsresponse"></a>
<a id="schema_ListSourceLocationsResponse"></a>
<a id="tocSlistsourcelocationsresponse"></a>
<a id="tocslistsourcelocationsresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
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

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_ListVodSourcesResponse">ListVodSourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvodsourcesresponse"></a>
<a id="schema_ListVodSourcesResponse"></a>
<a id="tocSlistvodsourcesresponse"></a>
<a id="tocslistvodsourcesresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PutChannelPolicyResponse">PutChannelPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputchannelpolicyresponse"></a>
<a id="schema_PutChannelPolicyResponse"></a>
<a id="tocSputchannelpolicyresponse"></a>
<a id="tocsputchannelpolicyresponse"></a>

```json
{}
```

<h2 id="tocS_PutPlaybackConfigurationResponse">PutPlaybackConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputplaybackconfigurationresponse"></a>
<a id="schema_PutPlaybackConfigurationResponse"></a>
<a id="tocSputplaybackconfigurationresponse"></a>
<a id="tocsputplaybackconfigurationresponse"></a>

```json
{
  "AdDecisionServerUrl": {},
  "AvailSuppression": {
    "Mode": {},
    "Value": {}
  },
  "Bumper": {
    "EndUrl": {},
    "StartUrl": {}
  },
  "CdnConfiguration": {
    "AdSegmentUrlPrefix": {},
    "ContentSegmentUrlPrefix": {}
  },
  "ConfigurationAliases": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DashConfiguration": {
    "ManifestEndpointPrefix": {},
    "MpdLocation": {},
    "OriginManifestType": {}
  },
  "HlsConfiguration": {
    "ManifestEndpointPrefix": {}
  },
  "LivePreRollConfiguration": {
    "AdDecisionServerUrl": {},
    "MaxDurationSeconds": {}
  },
  "LogConfiguration": {
    "PercentEnabled": {}
  },
  "ManifestProcessingRules": {
    "AdMarkerPassthrough": {
      "Enabled": {}
    }
  },
  "Name": {},
  "PersonalizationThresholdSeconds": {},
  "PlaybackConfigurationArn": {},
  "PlaybackEndpointPrefix": {},
  "SessionInitializationEndpointPrefix": {},
  "SlateAdUrl": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TranscodeProfileName": {},
  "VideoContentSourceUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdDecisionServerUrl|object|false|none|none|
|AvailSuppression|object|false|none|none|
|Bumper|object|false|none|none|
|CdnConfiguration|object|false|none|none|
|ConfigurationAliases|object|false|none|none|
|DashConfiguration|object|false|none|none|
|HlsConfiguration|object|false|none|none|
|LivePreRollConfiguration|object|false|none|none|
|LogConfiguration|object|false|none|none|
|ManifestProcessingRules|object|false|none|none|
|Name|object|false|none|none|
|PersonalizationThresholdSeconds|object|false|none|none|
|PlaybackConfigurationArn|object|false|none|none|
|PlaybackEndpointPrefix|object|false|none|none|
|SessionInitializationEndpointPrefix|object|false|none|none|
|SlateAdUrl|object|false|none|none|
|Tags|object|false|none|none|
|TranscodeProfileName|object|false|none|none|
|VideoContentSourceUrl|object|false|none|none|

<h2 id="tocS_Mode">Mode</h2>
<!-- backwards compatibility -->
<a id="schemamode"></a>
<a id="schema_Mode"></a>
<a id="tocSmode"></a>
<a id="tocsmode"></a>

```json
"OFF"
```

<h2 id="tocS_OriginManifestType">OriginManifestType</h2>
<!-- backwards compatibility -->
<a id="schemaoriginmanifesttype"></a>
<a id="schema_OriginManifestType"></a>
<a id="tocSoriginmanifesttype"></a>
<a id="tocsoriginmanifesttype"></a>

```json
"SINGLE_PERIOD"
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

<h2 id="tocS_AdMarkerPassthrough">AdMarkerPassthrough</h2>
<!-- backwards compatibility -->
<a id="schemaadmarkerpassthrough"></a>
<a id="schema_AdMarkerPassthrough"></a>
<a id="tocSadmarkerpassthrough"></a>
<a id="tocsadmarkerpassthrough"></a>

```json
{
  "Enabled": {}
}
```

<p>For HLS, when set to <code>true</code>, MediaTailor passes through <code>EXT-X-CUE-IN</code>, <code>EXT-X-CUE-OUT</code>, and <code>EXT-X-SPLICEPOINT-SCTE35</code> ad markers from the origin manifest to the MediaTailor personalized manifest.</p> <p>No logic is applied to these ad markers. For example, if <code>EXT-X-CUE-OUT</code> has a value of <code>60</code>, but no ads are filled for that ad break, MediaTailor will not set the value to <code>0</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|

<h2 id="tocS_StartChannelResponse">StartChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartchannelresponse"></a>
<a id="schema_StartChannelResponse"></a>
<a id="tocSstartchannelresponse"></a>
<a id="tocsstartchannelresponse"></a>

```json
{}
```

<h2 id="tocS_StopChannelResponse">StopChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopchannelresponse"></a>
<a id="schema_StopChannelResponse"></a>
<a id="tocSstopchannelresponse"></a>
<a id="tocsstopchannelresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateChannelResponse">UpdateChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelresponse"></a>
<a id="schema_UpdateChannelResponse"></a>
<a id="tocSupdatechannelresponse"></a>
<a id="tocsupdatechannelresponse"></a>

```json
{
  "Arn": {},
  "ChannelName": {},
  "ChannelState": {},
  "CreationTime": {},
  "FillerSlate": {
    "SourceLocationName": {},
    "VodSourceName": {}
  },
  "LastModifiedTime": {},
  "Outputs": {},
  "PlaybackMode": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Tier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|ChannelName|object|false|none|none|
|ChannelState|object|false|none|none|
|CreationTime|object|false|none|none|
|FillerSlate|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|Outputs|object|false|none|none|
|PlaybackMode|object|false|none|none|
|Tags|object|false|none|none|
|Tier|object|false|none|none|

<h2 id="tocS_UpdateLiveSourceResponse">UpdateLiveSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelivesourceresponse"></a>
<a id="schema_UpdateLiveSourceResponse"></a>
<a id="tocSupdatelivesourceresponse"></a>
<a id="tocsupdatelivesourceresponse"></a>

```json
{
  "Arn": {},
  "CreationTime": {},
  "HttpPackageConfigurations": {},
  "LastModifiedTime": {},
  "LiveSourceName": {},
  "SourceLocationName": {},
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
|CreationTime|object|false|none|none|
|HttpPackageConfigurations|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|LiveSourceName|object|false|none|none|
|SourceLocationName|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_UpdateProgramResponse">UpdateProgramResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprogramresponse"></a>
<a id="schema_UpdateProgramResponse"></a>
<a id="tocSupdateprogramresponse"></a>
<a id="tocsupdateprogramresponse"></a>

```json
{
  "AdBreaks": {},
  "Arn": {},
  "ChannelName": {},
  "ClipRange": {
    "EndOffsetMillis": {}
  },
  "CreationTime": {},
  "DurationMillis": {},
  "LiveSourceName": {},
  "ProgramName": {},
  "ScheduledStartTime": {},
  "SourceLocationName": {},
  "VodSourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdBreaks|object|false|none|none|
|Arn|object|false|none|none|
|ChannelName|object|false|none|none|
|ClipRange|object|false|none|none|
|CreationTime|object|false|none|none|
|DurationMillis|object|false|none|none|
|LiveSourceName|object|false|none|none|
|ProgramName|object|false|none|none|
|ScheduledStartTime|object|false|none|none|
|SourceLocationName|object|false|none|none|
|VodSourceName|object|false|none|none|

<h2 id="tocS_UpdateProgramTransition">UpdateProgramTransition</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprogramtransition"></a>
<a id="schema_UpdateProgramTransition"></a>
<a id="tocSupdateprogramtransition"></a>
<a id="tocsupdateprogramtransition"></a>

```json
{
  "DurationMillis": {},
  "ScheduledStartTimeMillis": {}
}
```

Program transition configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DurationMillis|object|false|none|none|
|ScheduledStartTimeMillis|object|false|none|none|

<h2 id="tocS_UpdateSourceLocationResponse">UpdateSourceLocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesourcelocationresponse"></a>
<a id="schema_UpdateSourceLocationResponse"></a>
<a id="tocSupdatesourcelocationresponse"></a>
<a id="tocsupdatesourcelocationresponse"></a>

```json
{
  "AccessConfiguration": {
    "AccessType": {},
    "SecretsManagerAccessTokenConfiguration": {
      "HeaderName": {},
      "SecretArn": {},
      "SecretStringKey": {}
    }
  },
  "Arn": {},
  "CreationTime": {},
  "DefaultSegmentDeliveryConfiguration": {
    "BaseUrl": {}
  },
  "HttpConfiguration": {
    "BaseUrl": {}
  },
  "LastModifiedTime": {},
  "SegmentDeliveryConfigurations": {},
  "SourceLocationName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessConfiguration|object|false|none|none|
|Arn|object|false|none|none|
|CreationTime|object|false|none|none|
|DefaultSegmentDeliveryConfiguration|object|false|none|none|
|HttpConfiguration|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|SegmentDeliveryConfigurations|object|false|none|none|
|SourceLocationName|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_UpdateVodSourceResponse">UpdateVodSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevodsourceresponse"></a>
<a id="schema_UpdateVodSourceResponse"></a>
<a id="tocSupdatevodsourceresponse"></a>
<a id="tocsupdatevodsourceresponse"></a>

```json
{
  "Arn": {},
  "CreationTime": {},
  "HttpPackageConfigurations": {},
  "LastModifiedTime": {},
  "SourceLocationName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "VodSourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTime|object|false|none|none|
|HttpPackageConfigurations|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|SourceLocationName|object|false|none|none|
|Tags|object|false|none|none|
|VodSourceName|object|false|none|none|

<h2 id="tocS_AccessConfiguration">AccessConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaaccessconfiguration"></a>
<a id="schema_AccessConfiguration"></a>
<a id="tocSaccessconfiguration"></a>
<a id="tocsaccessconfiguration"></a>

```json
{
  "AccessType": {},
  "SecretsManagerAccessTokenConfiguration": {
    "HeaderName": {},
    "SecretArn": {},
    "SecretStringKey": {}
  }
}
```

Access configuration parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessType|object|false|none|none|
|SecretsManagerAccessTokenConfiguration|object|false|none|none|

<h2 id="tocS_MessageType">MessageType</h2>
<!-- backwards compatibility -->
<a id="schemamessagetype"></a>
<a id="schema_MessageType"></a>
<a id="tocSmessagetype"></a>
<a id="tocsmessagetype"></a>

```json
"SPLICE_INSERT"
```

<h2 id="tocS___long">__long</h2>
<!-- backwards compatibility -->
<a id="schema__long"></a>
<a id="schema___long"></a>
<a id="tocS__long"></a>
<a id="tocs__long"></a>

```json
0
```

<h2 id="tocS_SlateSource">SlateSource</h2>
<!-- backwards compatibility -->
<a id="schemaslatesource"></a>
<a id="schema_SlateSource"></a>
<a id="tocSslatesource"></a>
<a id="tocsslatesource"></a>

```json
{
  "SourceLocationName": {},
  "VodSourceName": {}
}
```

Slate VOD source configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceLocationName|object|false|none|none|
|VodSourceName|object|false|none|none|

<h2 id="tocS_SpliceInsertMessage">SpliceInsertMessage</h2>
<!-- backwards compatibility -->
<a id="schemaspliceinsertmessage"></a>
<a id="schema_SpliceInsertMessage"></a>
<a id="tocSspliceinsertmessage"></a>
<a id="tocsspliceinsertmessage"></a>

```json
{
  "AvailNum": {},
  "AvailsExpected": {},
  "SpliceEventId": {},
  "UniqueProgramId": {}
}
```

Splice insert message configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailNum|object|false|none|none|
|AvailsExpected|object|false|none|none|
|SpliceEventId|object|false|none|none|
|UniqueProgramId|object|false|none|none|

<h2 id="tocS_TimeSignalMessage">TimeSignalMessage</h2>
<!-- backwards compatibility -->
<a id="schematimesignalmessage"></a>
<a id="schema_TimeSignalMessage"></a>
<a id="tocStimesignalmessage"></a>
<a id="tocstimesignalmessage"></a>

```json
{
  "SegmentationDescriptors": {}
}
```

<p>The SCTE-35 <code>time_signal</code> message can be sent with one or more <code>segmentation_descriptor</code> messages. A <code>time_signal</code> message can be sent only if a single <code>segmentation_descriptor</code> message is sent.</p> <p>The <code>time_signal</code> message contains only the <code>splice_time</code> field which is constructed using a given presentation timestamp. When sending a <code>time_signal</code> message, the <code>splice_command_type</code> field in the <code>splice_info_section</code> message is set to 6 (0x06).</p> <p>See the <code>time_signal()</code> table of the 2022 SCTE-35 specification for more information.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SegmentationDescriptors|object|false|none|none|

<h2 id="tocS___boolean">__boolean</h2>
<!-- backwards compatibility -->
<a id="schema__boolean"></a>
<a id="schema___boolean"></a>
<a id="tocS__boolean"></a>
<a id="tocs__boolean"></a>

```json
true
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

<h2 id="tocS_Alert">Alert</h2>
<!-- backwards compatibility -->
<a id="schemaalert"></a>
<a id="schema_Alert"></a>
<a id="tocSalert"></a>
<a id="tocsalert"></a>

```json
{
  "AlertCode": {},
  "AlertMessage": {},
  "LastModifiedTime": {},
  "RelatedResourceArns": {},
  "ResourceArn": {}
}
```

Alert configuration parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlertCode|object|true|none|none|
|AlertMessage|object|true|none|none|
|LastModifiedTime|object|true|none|none|
|RelatedResourceArns|object|true|none|none|
|ResourceArn|object|true|none|none|

<h2 id="tocS_Operator">Operator</h2>
<!-- backwards compatibility -->
<a id="schemaoperator"></a>
<a id="schema_Operator"></a>
<a id="tocSoperator"></a>
<a id="tocsoperator"></a>

```json
"EQUALS"
```

<h2 id="tocS_AvailMatchingCriteria">AvailMatchingCriteria</h2>
<!-- backwards compatibility -->
<a id="schemaavailmatchingcriteria"></a>
<a id="schema_AvailMatchingCriteria"></a>
<a id="tocSavailmatchingcriteria"></a>
<a id="tocsavailmatchingcriteria"></a>

```json
{
  "DynamicVariable": {},
  "Operator": {}
}
```

<p>MediaTailor only places (consumes) prefetched ads if the ad break meets the criteria defined by the dynamic variables. This gives you granular control over which ad break to place the prefetched ads into.</p> <p>As an example, let's say that you set <code>DynamicVariable</code> to <code>scte.event_id</code> and <code>Operator</code> to <code>EQUALS</code>, and your playback configuration has an ADS URL of <code>https://my.ads.server.com/path?&amp;podId=[scte.avail_num]&amp;event=[scte.event_id]&amp;duration=[session.avail_duration_secs]</code>. And the prefetch request to the ADS contains these values <code>https://my.ads.server.com/path?&amp;podId=3&amp;event=my-awesome-event&amp;duration=30</code>. MediaTailor will only insert the prefetched ads into the ad break if has a SCTE marker with an event id of <code>my-awesome-event</code>, since it must match the event id that MediaTailor uses to query the ADS.</p> <p>You can specify up to five <code>AvailMatchingCriteria</code>. If you specify multiple <code>AvailMatchingCriteria</code>, MediaTailor combines them to match using a logical <code>AND</code>. You can model logical <code>OR</code> combinations by creating multiple prefetch schedules.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DynamicVariable|object|true|none|none|
|Operator|object|true|none|none|

<h2 id="tocS_AvailSuppression">AvailSuppression</h2>
<!-- backwards compatibility -->
<a id="schemaavailsuppression"></a>
<a id="schema_AvailSuppression"></a>
<a id="tocSavailsuppression"></a>
<a id="tocsavailsuppression"></a>

```json
{
  "Mode": {},
  "Value": {}
}
```

The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mode|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_Bumper">Bumper</h2>
<!-- backwards compatibility -->
<a id="schemabumper"></a>
<a id="schema_Bumper"></a>
<a id="tocSbumper"></a>
<a id="tocsbumper"></a>

```json
{
  "EndUrl": {},
  "StartUrl": {}
}
```

The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndUrl|object|false|none|none|
|StartUrl|object|false|none|none|

<h2 id="tocS_CdnConfiguration">CdnConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacdnconfiguration"></a>
<a id="schema_CdnConfiguration"></a>
<a id="tocScdnconfiguration"></a>
<a id="tocscdnconfiguration"></a>

```json
{
  "AdSegmentUrlPrefix": {},
  "ContentSegmentUrlPrefix": {}
}
```

The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdSegmentUrlPrefix|object|false|none|none|
|ContentSegmentUrlPrefix|object|false|none|none|

<h2 id="tocS_LogConfigurationForChannel">LogConfigurationForChannel</h2>
<!-- backwards compatibility -->
<a id="schemalogconfigurationforchannel"></a>
<a id="schema_LogConfigurationForChannel"></a>
<a id="tocSlogconfigurationforchannel"></a>
<a id="tocslogconfigurationforchannel"></a>

```json
{
  "LogTypes": {}
}
```

The log configuration for the channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogTypes|object|false|none|none|

<h2 id="tocS_ResponseOutputs">ResponseOutputs</h2>
<!-- backwards compatibility -->
<a id="schemaresponseoutputs"></a>
<a id="schema_ResponseOutputs"></a>
<a id="tocSresponseoutputs"></a>
<a id="tocsresponseoutputs"></a>

```json
[
  {
    "DashPlaylistSettings": {
      "ManifestWindowSeconds": {},
      "MinBufferTimeSeconds": {},
      "MinUpdatePeriodSeconds": {},
      "SuggestedPresentationDelaySeconds": {}
    },
    "HlsPlaylistSettings": {
      "ManifestWindowSeconds": {}
    },
    "ManifestName": {},
    "PlaybackUrl": {},
    "SourceGroup": {}
  }
]
```

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "Arn": {},
  "ChannelName": {},
  "ChannelState": {},
  "CreationTime": {},
  "FillerSlate": {
    "SourceLocationName": {},
    "VodSourceName": {}
  },
  "LastModifiedTime": {},
  "LogConfiguration": {
    "LogTypes": {}
  },
  "Outputs": {},
  "PlaybackMode": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Tier": {}
}
```

The configuration parameters for a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|ChannelName|object|true|none|none|
|ChannelState|object|true|none|none|
|CreationTime|object|false|none|none|
|FillerSlate|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|LogConfiguration|object|true|none|none|
|Outputs|object|true|none|none|
|PlaybackMode|object|true|none|none|
|Tags|object|false|none|none|
|Tier|object|true|none|none|

<h2 id="tocS_ChannelState">ChannelState</h2>
<!-- backwards compatibility -->
<a id="schemachannelstate"></a>
<a id="schema_ChannelState"></a>
<a id="tocSchannelstate"></a>
<a id="tocschannelstate"></a>

```json
"RUNNING"
```

<h2 id="tocS_ConfigurationAliasesRequest">ConfigurationAliasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationaliasesrequest"></a>
<a id="schema_ConfigurationAliasesRequest"></a>
<a id="tocSconfigurationaliasesrequest"></a>
<a id="tocsconfigurationaliasesrequest"></a>

```json
{
  "property1": {
    "property1": "string",
    "property2": "string"
  },
  "property2": {
    "property1": "string",
    "property2": "string"
  }
}
```

The predefined aliases for dynamic variables.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[__mapOf__string](#schema__mapof__string)|false|none|none|

<h2 id="tocS_ConfigurationAliasesResponse">ConfigurationAliasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationaliasesresponse"></a>
<a id="schema_ConfigurationAliasesResponse"></a>
<a id="tocSconfigurationaliasesresponse"></a>
<a id="tocsconfigurationaliasesresponse"></a>

```json
{
  "property1": {
    "property1": "string",
    "property2": "string"
  },
  "property2": {
    "property1": "string",
    "property2": "string"
  }
}
```

The predefined aliases for dynamic variables.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[__mapOf__string](#schema__mapof__string)|false|none|none|

<h2 id="tocS_LogTypes">LogTypes</h2>
<!-- backwards compatibility -->
<a id="schemalogtypes"></a>
<a id="schema_LogTypes"></a>
<a id="tocSlogtypes"></a>
<a id="tocslogtypes"></a>

```json
[
  "AS_RUN"
]
```

<h2 id="tocS_ConfigureLogsForChannelRequest">ConfigureLogsForChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurelogsforchannelrequest"></a>
<a id="schema_ConfigureLogsForChannelRequest"></a>
<a id="tocSconfigurelogsforchannelrequest"></a>
<a id="tocsconfigurelogsforchannelrequest"></a>

```json
{
  "ChannelName": {},
  "LogTypes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelName|object|true|none|none|
|LogTypes|object|true|none|none|

<h2 id="tocS_ConfigureLogsForPlaybackConfigurationRequest">ConfigureLogsForPlaybackConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurelogsforplaybackconfigurationrequest"></a>
<a id="schema_ConfigureLogsForPlaybackConfigurationRequest"></a>
<a id="tocSconfigurelogsforplaybackconfigurationrequest"></a>
<a id="tocsconfigurelogsforplaybackconfigurationrequest"></a>

```json
{
  "PercentEnabled": {},
  "PlaybackConfigurationName": {}
}
```

Configures Amazon CloudWatch log settings for a playback configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PercentEnabled|object|true|none|none|
|PlaybackConfigurationName|object|true|none|none|

<h2 id="tocS_RequestOutputs">RequestOutputs</h2>
<!-- backwards compatibility -->
<a id="schemarequestoutputs"></a>
<a id="schema_RequestOutputs"></a>
<a id="tocSrequestoutputs"></a>
<a id="tocsrequestoutputs"></a>

```json
[
  {
    "DashPlaylistSettings": {
      "ManifestWindowSeconds": {},
      "MinBufferTimeSeconds": {},
      "MinUpdatePeriodSeconds": {},
      "SuggestedPresentationDelaySeconds": {}
    },
    "HlsPlaylistSettings": {
      "ManifestWindowSeconds": {}
    },
    "ManifestName": {},
    "SourceGroup": {}
  }
]
```

An object that represents an object in the CreateChannel request.

<h2 id="tocS_PlaybackMode">PlaybackMode</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackmode"></a>
<a id="schema_PlaybackMode"></a>
<a id="tocSplaybackmode"></a>
<a id="tocsplaybackmode"></a>

```json
"LOOP"
```

<h2 id="tocS_Tier">Tier</h2>
<!-- backwards compatibility -->
<a id="schematier"></a>
<a id="schema_Tier"></a>
<a id="tocStier"></a>
<a id="tocstier"></a>

```json
"BASIC"
```

<h2 id="tocS_CreateChannelRequest">CreateChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelrequest"></a>
<a id="schema_CreateChannelRequest"></a>
<a id="tocScreatechannelrequest"></a>
<a id="tocscreatechannelrequest"></a>

```json
{
  "FillerSlate": {
    "SourceLocationName": {},
    "VodSourceName": {}
  },
  "Outputs": {},
  "PlaybackMode": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Tier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FillerSlate|object|false|none|none|
|Outputs|object|true|none|none|
|PlaybackMode|object|true|none|none|
|Tags|object|false|none|none|
|Tier|object|false|none|none|

<h2 id="tocS_HttpPackageConfigurations">HttpPackageConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemahttppackageconfigurations"></a>
<a id="schema_HttpPackageConfigurations"></a>
<a id="tocShttppackageconfigurations"></a>
<a id="tocshttppackageconfigurations"></a>

```json
[
  {
    "Path": {},
    "SourceGroup": {},
    "Type": {}
  }
]
```

The VOD source's HTTP package configuration settings.

<h2 id="tocS_CreateLiveSourceRequest">CreateLiveSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelivesourcerequest"></a>
<a id="schema_CreateLiveSourceRequest"></a>
<a id="tocScreatelivesourcerequest"></a>
<a id="tocscreatelivesourcerequest"></a>

```json
{
  "HttpPackageConfigurations": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HttpPackageConfigurations|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_PrefetchConsumption">PrefetchConsumption</h2>
<!-- backwards compatibility -->
<a id="schemaprefetchconsumption"></a>
<a id="schema_PrefetchConsumption"></a>
<a id="tocSprefetchconsumption"></a>
<a id="tocsprefetchconsumption"></a>

```json
{
  "AvailMatchingCriteria": {},
  "EndTime": {},
  "StartTime": {}
}
```

A complex type that contains settings that determine how and when that MediaTailor places prefetched ads into upcoming ad breaks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailMatchingCriteria|object|false|none|none|
|EndTime|object|true|none|none|
|StartTime|object|false|none|none|

<h2 id="tocS_PrefetchRetrieval">PrefetchRetrieval</h2>
<!-- backwards compatibility -->
<a id="schemaprefetchretrieval"></a>
<a id="schema_PrefetchRetrieval"></a>
<a id="tocSprefetchretrieval"></a>
<a id="tocsprefetchretrieval"></a>

```json
{
  "DynamicVariables": {
    "property1": "string",
    "property2": "string"
  },
  "EndTime": {},
  "StartTime": {}
}
```

A complex type that contains settings governing when MediaTailor prefetches ads, and which dynamic variables that MediaTailor includes in the request to the ad decision server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DynamicVariables|object|false|none|none|
|EndTime|object|true|none|none|
|StartTime|object|false|none|none|

<h2 id="tocS_CreatePrefetchScheduleRequest">CreatePrefetchScheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprefetchschedulerequest"></a>
<a id="schema_CreatePrefetchScheduleRequest"></a>
<a id="tocScreateprefetchschedulerequest"></a>
<a id="tocscreateprefetchschedulerequest"></a>

```json
{
  "Consumption": {
    "AvailMatchingCriteria": {},
    "EndTime": {},
    "StartTime": {}
  },
  "Retrieval": {
    "DynamicVariables": {
      "property1": "string",
      "property2": "string"
    },
    "EndTime": {},
    "StartTime": {}
  },
  "StreamId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Consumption|object|true|none|none|
|Retrieval|object|true|none|none|
|StreamId|object|false|none|none|

<h2 id="tocS___listOfAdBreak">__listOfAdBreak</h2>
<!-- backwards compatibility -->
<a id="schema__listofadbreak"></a>
<a id="schema___listOfAdBreak"></a>
<a id="tocS__listofadbreak"></a>
<a id="tocs__listofadbreak"></a>

```json
[
  {
    "MessageType": {},
    "OffsetMillis": {},
    "Slate": {
      "SourceLocationName": {},
      "VodSourceName": {}
    },
    "SpliceInsertMessage": {
      "AvailNum": {},
      "AvailsExpected": {},
      "SpliceEventId": {},
      "UniqueProgramId": {}
    },
    "TimeSignalMessage": {
      "SegmentationDescriptors": {}
    }
  }
]
```

<h2 id="tocS_ScheduleConfiguration">ScheduleConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemascheduleconfiguration"></a>
<a id="schema_ScheduleConfiguration"></a>
<a id="tocSscheduleconfiguration"></a>
<a id="tocsscheduleconfiguration"></a>

```json
{
  "ClipRange": {
    "EndOffsetMillis": {}
  },
  "Transition": {
    "DurationMillis": {},
    "RelativePosition": {},
    "RelativeProgram": {},
    "ScheduledStartTimeMillis": {},
    "Type": {}
  }
}
```

Schedule configuration parameters. A channel must be stopped before changes can be made to the schedule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClipRange|object|false|none|none|
|Transition|object|true|none|none|

<h2 id="tocS_CreateProgramRequest">CreateProgramRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprogramrequest"></a>
<a id="schema_CreateProgramRequest"></a>
<a id="tocScreateprogramrequest"></a>
<a id="tocscreateprogramrequest"></a>

```json
{
  "AdBreaks": {},
  "LiveSourceName": {},
  "ScheduleConfiguration": {
    "ClipRange": {
      "EndOffsetMillis": {}
    },
    "Transition": {
      "DurationMillis": {},
      "RelativePosition": {},
      "RelativeProgram": {},
      "ScheduledStartTimeMillis": {},
      "Type": {}
    }
  },
  "SourceLocationName": {},
  "VodSourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdBreaks|object|false|none|none|
|LiveSourceName|object|false|none|none|
|ScheduleConfiguration|object|true|none|none|
|SourceLocationName|object|true|none|none|
|VodSourceName|object|false|none|none|

<h2 id="tocS_DefaultSegmentDeliveryConfiguration">DefaultSegmentDeliveryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadefaultsegmentdeliveryconfiguration"></a>
<a id="schema_DefaultSegmentDeliveryConfiguration"></a>
<a id="tocSdefaultsegmentdeliveryconfiguration"></a>
<a id="tocsdefaultsegmentdeliveryconfiguration"></a>

```json
{
  "BaseUrl": {}
}
```

The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaseUrl|object|false|none|none|

<h2 id="tocS_HttpConfiguration">HttpConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemahttpconfiguration"></a>
<a id="schema_HttpConfiguration"></a>
<a id="tocShttpconfiguration"></a>
<a id="tocshttpconfiguration"></a>

```json
{
  "BaseUrl": {}
}
```

The HTTP configuration for the source location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaseUrl|object|true|none|none|

<h2 id="tocS___listOfSegmentDeliveryConfiguration">__listOfSegmentDeliveryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schema__listofsegmentdeliveryconfiguration"></a>
<a id="schema___listOfSegmentDeliveryConfiguration"></a>
<a id="tocS__listofsegmentdeliveryconfiguration"></a>
<a id="tocs__listofsegmentdeliveryconfiguration"></a>

```json
[
  {
    "BaseUrl": {},
    "Name": {}
  }
]
```

<h2 id="tocS_CreateSourceLocationRequest">CreateSourceLocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesourcelocationrequest"></a>
<a id="schema_CreateSourceLocationRequest"></a>
<a id="tocScreatesourcelocationrequest"></a>
<a id="tocscreatesourcelocationrequest"></a>

```json
{
  "AccessConfiguration": {
    "AccessType": {},
    "SecretsManagerAccessTokenConfiguration": {
      "HeaderName": {},
      "SecretArn": {},
      "SecretStringKey": {}
    }
  },
  "DefaultSegmentDeliveryConfiguration": {
    "BaseUrl": {}
  },
  "HttpConfiguration": {
    "BaseUrl": {}
  },
  "SegmentDeliveryConfigurations": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessConfiguration|object|false|none|none|
|DefaultSegmentDeliveryConfiguration|object|false|none|none|
|HttpConfiguration|object|true|none|none|
|SegmentDeliveryConfigurations|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateVodSourceRequest">CreateVodSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevodsourcerequest"></a>
<a id="schema_CreateVodSourceRequest"></a>
<a id="tocScreatevodsourcerequest"></a>
<a id="tocscreatevodsourcerequest"></a>

```json
{
  "HttpPackageConfigurations": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HttpPackageConfigurations|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DashConfiguration">DashConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadashconfiguration"></a>
<a id="schema_DashConfiguration"></a>
<a id="tocSdashconfiguration"></a>
<a id="tocsdashconfiguration"></a>

```json
{
  "ManifestEndpointPrefix": {},
  "MpdLocation": {},
  "OriginManifestType": {}
}
```

The configuration for DASH content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManifestEndpointPrefix|object|false|none|none|
|MpdLocation|object|false|none|none|
|OriginManifestType|object|false|none|none|

<h2 id="tocS_DashConfigurationForPut">DashConfigurationForPut</h2>
<!-- backwards compatibility -->
<a id="schemadashconfigurationforput"></a>
<a id="schema_DashConfigurationForPut"></a>
<a id="tocSdashconfigurationforput"></a>
<a id="tocsdashconfigurationforput"></a>

```json
{
  "MpdLocation": {},
  "OriginManifestType": {}
}
```

The configuration for DASH PUT operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MpdLocation|object|false|none|none|
|OriginManifestType|object|false|none|none|

<h2 id="tocS_DashPlaylistSettings">DashPlaylistSettings</h2>
<!-- backwards compatibility -->
<a id="schemadashplaylistsettings"></a>
<a id="schema_DashPlaylistSettings"></a>
<a id="tocSdashplaylistsettings"></a>
<a id="tocsdashplaylistsettings"></a>

```json
{
  "ManifestWindowSeconds": {},
  "MinBufferTimeSeconds": {},
  "MinUpdatePeriodSeconds": {},
  "SuggestedPresentationDelaySeconds": {}
}
```

Dash manifest configuration parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManifestWindowSeconds|object|false|none|none|
|MinBufferTimeSeconds|object|false|none|none|
|MinUpdatePeriodSeconds|object|false|none|none|
|SuggestedPresentationDelaySeconds|object|false|none|none|

<h2 id="tocS_DeleteChannelPolicyRequest">DeleteChannelPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletechannelpolicyrequest"></a>
<a id="schema_DeleteChannelPolicyRequest"></a>
<a id="tocSdeletechannelpolicyrequest"></a>
<a id="tocsdeletechannelpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteChannelRequest">DeleteChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletechannelrequest"></a>
<a id="schema_DeleteChannelRequest"></a>
<a id="tocSdeletechannelrequest"></a>
<a id="tocsdeletechannelrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteLiveSourceRequest">DeleteLiveSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelivesourcerequest"></a>
<a id="schema_DeleteLiveSourceRequest"></a>
<a id="tocSdeletelivesourcerequest"></a>
<a id="tocsdeletelivesourcerequest"></a>

```json
{}
```

<h2 id="tocS_DeletePlaybackConfigurationRequest">DeletePlaybackConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteplaybackconfigurationrequest"></a>
<a id="schema_DeletePlaybackConfigurationRequest"></a>
<a id="tocSdeleteplaybackconfigurationrequest"></a>
<a id="tocsdeleteplaybackconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DeletePrefetchScheduleRequest">DeletePrefetchScheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprefetchschedulerequest"></a>
<a id="schema_DeletePrefetchScheduleRequest"></a>
<a id="tocSdeleteprefetchschedulerequest"></a>
<a id="tocsdeleteprefetchschedulerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteProgramRequest">DeleteProgramRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprogramrequest"></a>
<a id="schema_DeleteProgramRequest"></a>
<a id="tocSdeleteprogramrequest"></a>
<a id="tocsdeleteprogramrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteSourceLocationRequest">DeleteSourceLocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesourcelocationrequest"></a>
<a id="schema_DeleteSourceLocationRequest"></a>
<a id="tocSdeletesourcelocationrequest"></a>
<a id="tocsdeletesourcelocationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteVodSourceRequest">DeleteVodSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevodsourcerequest"></a>
<a id="schema_DeleteVodSourceRequest"></a>
<a id="tocSdeletevodsourcerequest"></a>
<a id="tocsdeletevodsourcerequest"></a>

```json
{}
```

<h2 id="tocS_DescribeChannelRequest">DescribeChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelrequest"></a>
<a id="schema_DescribeChannelRequest"></a>
<a id="tocSdescribechannelrequest"></a>
<a id="tocsdescribechannelrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeLiveSourceRequest">DescribeLiveSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelivesourcerequest"></a>
<a id="schema_DescribeLiveSourceRequest"></a>
<a id="tocSdescribelivesourcerequest"></a>
<a id="tocsdescribelivesourcerequest"></a>

```json
{}
```

<h2 id="tocS_DescribeProgramRequest">DescribeProgramRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprogramrequest"></a>
<a id="schema_DescribeProgramRequest"></a>
<a id="tocSdescribeprogramrequest"></a>
<a id="tocsdescribeprogramrequest"></a>

```json
{}
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

<h2 id="tocS_DescribeSourceLocationRequest">DescribeSourceLocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesourcelocationrequest"></a>
<a id="schema_DescribeSourceLocationRequest"></a>
<a id="tocSdescribesourcelocationrequest"></a>
<a id="tocsdescribesourcelocationrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeVodSourceRequest">DescribeVodSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribevodsourcerequest"></a>
<a id="schema_DescribeVodSourceRequest"></a>
<a id="tocSdescribevodsourcerequest"></a>
<a id="tocsdescribevodsourcerequest"></a>

```json
{}
```

<h2 id="tocS_GetChannelPolicyRequest">GetChannelPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetchannelpolicyrequest"></a>
<a id="schema_GetChannelPolicyRequest"></a>
<a id="tocSgetchannelpolicyrequest"></a>
<a id="tocsgetchannelpolicyrequest"></a>

```json
{}
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

<h2 id="tocS_GetChannelScheduleRequest">GetChannelScheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetchannelschedulerequest"></a>
<a id="schema_GetChannelScheduleRequest"></a>
<a id="tocSgetchannelschedulerequest"></a>
<a id="tocsgetchannelschedulerequest"></a>

```json
{}
```

<h2 id="tocS___listOfScheduleEntry">__listOfScheduleEntry</h2>
<!-- backwards compatibility -->
<a id="schema__listofscheduleentry"></a>
<a id="schema___listOfScheduleEntry"></a>
<a id="tocS__listofscheduleentry"></a>
<a id="tocs__listofscheduleentry"></a>

```json
[
  {
    "ApproximateDurationSeconds": {},
    "ApproximateStartTime": {},
    "Arn": {},
    "ChannelName": {},
    "LiveSourceName": {},
    "ProgramName": {},
    "ScheduleAdBreaks": {},
    "ScheduleEntryType": {},
    "SourceLocationName": {},
    "VodSourceName": {}
  }
]
```

<h2 id="tocS_GetPlaybackConfigurationRequest">GetPlaybackConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetplaybackconfigurationrequest"></a>
<a id="schema_GetPlaybackConfigurationRequest"></a>
<a id="tocSgetplaybackconfigurationrequest"></a>
<a id="tocsgetplaybackconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_HlsConfiguration">HlsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemahlsconfiguration"></a>
<a id="schema_HlsConfiguration"></a>
<a id="tocShlsconfiguration"></a>
<a id="tocshlsconfiguration"></a>

```json
{
  "ManifestEndpointPrefix": {}
}
```

The configuration for HLS content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManifestEndpointPrefix|object|false|none|none|

<h2 id="tocS_LivePreRollConfiguration">LivePreRollConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaliveprerollconfiguration"></a>
<a id="schema_LivePreRollConfiguration"></a>
<a id="tocSliveprerollconfiguration"></a>
<a id="tocsliveprerollconfiguration"></a>

```json
{
  "AdDecisionServerUrl": {},
  "MaxDurationSeconds": {}
}
```

The configuration for pre-roll ad insertion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdDecisionServerUrl|object|false|none|none|
|MaxDurationSeconds|object|false|none|none|

<h2 id="tocS_LogConfiguration">LogConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalogconfiguration"></a>
<a id="schema_LogConfiguration"></a>
<a id="tocSlogconfiguration"></a>
<a id="tocslogconfiguration"></a>

```json
{
  "PercentEnabled": {}
}
```

Returns Amazon CloudWatch log settings for a playback configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PercentEnabled|object|true|none|none|

<h2 id="tocS_ManifestProcessingRules">ManifestProcessingRules</h2>
<!-- backwards compatibility -->
<a id="schemamanifestprocessingrules"></a>
<a id="schema_ManifestProcessingRules"></a>
<a id="tocSmanifestprocessingrules"></a>
<a id="tocsmanifestprocessingrules"></a>

```json
{
  "AdMarkerPassthrough": {
    "Enabled": {}
  }
}
```

The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdMarkerPassthrough|object|false|none|none|

<h2 id="tocS___integerMin1">__integerMin1</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1"></a>
<a id="schema___integerMin1"></a>
<a id="tocS__integermin1"></a>
<a id="tocs__integermin1"></a>

```json
1
```

<h2 id="tocS_GetPrefetchScheduleRequest">GetPrefetchScheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetprefetchschedulerequest"></a>
<a id="schema_GetPrefetchScheduleRequest"></a>
<a id="tocSgetprefetchschedulerequest"></a>
<a id="tocsgetprefetchschedulerequest"></a>

```json
{}
```

<h2 id="tocS_HlsPlaylistSettings">HlsPlaylistSettings</h2>
<!-- backwards compatibility -->
<a id="schemahlsplaylistsettings"></a>
<a id="schema_HlsPlaylistSettings"></a>
<a id="tocShlsplaylistsettings"></a>
<a id="tocshlsplaylistsettings"></a>

```json
{
  "ManifestWindowSeconds": {}
}
```

HLS playlist configuration parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManifestWindowSeconds|object|false|none|none|

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
"DASH"
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

<h2 id="tocS_ListAlertsRequest">ListAlertsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistalertsrequest"></a>
<a id="schema_ListAlertsRequest"></a>
<a id="tocSlistalertsrequest"></a>
<a id="tocslistalertsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfAlert">__listOfAlert</h2>
<!-- backwards compatibility -->
<a id="schema__listofalert"></a>
<a id="schema___listOfAlert"></a>
<a id="tocS__listofalert"></a>
<a id="tocs__listofalert"></a>

```json
[
  {
    "AlertCode": {},
    "AlertMessage": {},
    "LastModifiedTime": {},
    "RelatedResourceArns": {},
    "ResourceArn": {}
  }
]
```

<h2 id="tocS_ListChannelsRequest">ListChannelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsrequest"></a>
<a id="schema_ListChannelsRequest"></a>
<a id="tocSlistchannelsrequest"></a>
<a id="tocslistchannelsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfChannel">__listOfChannel</h2>
<!-- backwards compatibility -->
<a id="schema__listofchannel"></a>
<a id="schema___listOfChannel"></a>
<a id="tocS__listofchannel"></a>
<a id="tocs__listofchannel"></a>

```json
[
  {
    "Arn": {},
    "ChannelName": {},
    "ChannelState": {},
    "CreationTime": {},
    "FillerSlate": {
      "SourceLocationName": {},
      "VodSourceName": {}
    },
    "LastModifiedTime": {},
    "LogConfiguration": {
      "LogTypes": {}
    },
    "Outputs": {},
    "PlaybackMode": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Tier": {}
  }
]
```

<h2 id="tocS_ListLiveSourcesRequest">ListLiveSourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlivesourcesrequest"></a>
<a id="schema_ListLiveSourcesRequest"></a>
<a id="tocSlistlivesourcesrequest"></a>
<a id="tocslistlivesourcesrequest"></a>

```json
{}
```

<h2 id="tocS___listOfLiveSource">__listOfLiveSource</h2>
<!-- backwards compatibility -->
<a id="schema__listoflivesource"></a>
<a id="schema___listOfLiveSource"></a>
<a id="tocS__listoflivesource"></a>
<a id="tocs__listoflivesource"></a>

```json
[
  {
    "Arn": {},
    "CreationTime": {},
    "HttpPackageConfigurations": {},
    "LastModifiedTime": {},
    "LiveSourceName": {},
    "SourceLocationName": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ListPlaybackConfigurationsRequest">ListPlaybackConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistplaybackconfigurationsrequest"></a>
<a id="schema_ListPlaybackConfigurationsRequest"></a>
<a id="tocSlistplaybackconfigurationsrequest"></a>
<a id="tocslistplaybackconfigurationsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfPlaybackConfiguration">__listOfPlaybackConfiguration</h2>
<!-- backwards compatibility -->
<a id="schema__listofplaybackconfiguration"></a>
<a id="schema___listOfPlaybackConfiguration"></a>
<a id="tocS__listofplaybackconfiguration"></a>
<a id="tocs__listofplaybackconfiguration"></a>

```json
[
  {
    "AdDecisionServerUrl": {},
    "AvailSuppression": {
      "Mode": {},
      "Value": {}
    },
    "Bumper": {
      "EndUrl": {},
      "StartUrl": {}
    },
    "CdnConfiguration": {
      "AdSegmentUrlPrefix": {},
      "ContentSegmentUrlPrefix": {}
    },
    "ConfigurationAliases": {
      "property1": {
        "property1": "string",
        "property2": "string"
      },
      "property2": {
        "property1": "string",
        "property2": "string"
      }
    },
    "DashConfiguration": {
      "ManifestEndpointPrefix": {},
      "MpdLocation": {},
      "OriginManifestType": {}
    },
    "HlsConfiguration": {
      "ManifestEndpointPrefix": {}
    },
    "LivePreRollConfiguration": {
      "AdDecisionServerUrl": {},
      "MaxDurationSeconds": {}
    },
    "LogConfiguration": {
      "PercentEnabled": {}
    },
    "ManifestProcessingRules": {
      "AdMarkerPassthrough": {
        "Enabled": {}
      }
    },
    "Name": {},
    "PersonalizationThresholdSeconds": {},
    "PlaybackConfigurationArn": {},
    "PlaybackEndpointPrefix": {},
    "SessionInitializationEndpointPrefix": {},
    "SlateAdUrl": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "TranscodeProfileName": {},
    "VideoContentSourceUrl": {}
  }
]
```

<h2 id="tocS___integerMin1Max100">__integerMin1Max100</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1max100"></a>
<a id="schema___integerMin1Max100"></a>
<a id="tocS__integermin1max100"></a>
<a id="tocs__integermin1max100"></a>

```json
1
```

<h2 id="tocS_ListPrefetchSchedulesRequest">ListPrefetchSchedulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprefetchschedulesrequest"></a>
<a id="schema_ListPrefetchSchedulesRequest"></a>
<a id="tocSlistprefetchschedulesrequest"></a>
<a id="tocslistprefetchschedulesrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "StreamId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|StreamId|object|false|none|none|

<h2 id="tocS___listOfPrefetchSchedule">__listOfPrefetchSchedule</h2>
<!-- backwards compatibility -->
<a id="schema__listofprefetchschedule"></a>
<a id="schema___listOfPrefetchSchedule"></a>
<a id="tocS__listofprefetchschedule"></a>
<a id="tocs__listofprefetchschedule"></a>

```json
[
  {
    "Arn": {},
    "Consumption": {
      "AvailMatchingCriteria": {},
      "EndTime": {},
      "StartTime": {}
    },
    "Name": {},
    "PlaybackConfigurationName": {},
    "Retrieval": {
      "DynamicVariables": {
        "property1": "string",
        "property2": "string"
      },
      "EndTime": {},
      "StartTime": {}
    },
    "StreamId": {}
  }
]
```

<h2 id="tocS_ListSourceLocationsRequest">ListSourceLocationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsourcelocationsrequest"></a>
<a id="schema_ListSourceLocationsRequest"></a>
<a id="tocSlistsourcelocationsrequest"></a>
<a id="tocslistsourcelocationsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfSourceLocation">__listOfSourceLocation</h2>
<!-- backwards compatibility -->
<a id="schema__listofsourcelocation"></a>
<a id="schema___listOfSourceLocation"></a>
<a id="tocS__listofsourcelocation"></a>
<a id="tocs__listofsourcelocation"></a>

```json
[
  {
    "AccessConfiguration": {
      "AccessType": {},
      "SecretsManagerAccessTokenConfiguration": {
        "HeaderName": {},
        "SecretArn": {},
        "SecretStringKey": {}
      }
    },
    "Arn": {},
    "CreationTime": {},
    "DefaultSegmentDeliveryConfiguration": {
      "BaseUrl": {}
    },
    "HttpConfiguration": {
      "BaseUrl": {}
    },
    "LastModifiedTime": {},
    "SegmentDeliveryConfigurations": {},
    "SourceLocationName": {},
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

<h2 id="tocS_ListVodSourcesRequest">ListVodSourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistvodsourcesrequest"></a>
<a id="schema_ListVodSourcesRequest"></a>
<a id="tocSlistvodsourcesrequest"></a>
<a id="tocslistvodsourcesrequest"></a>

```json
{}
```

<h2 id="tocS___listOfVodSource">__listOfVodSource</h2>
<!-- backwards compatibility -->
<a id="schema__listofvodsource"></a>
<a id="schema___listOfVodSource"></a>
<a id="tocS__listofvodsource"></a>
<a id="tocs__listofvodsource"></a>

```json
[
  {
    "Arn": {},
    "CreationTime": {},
    "HttpPackageConfigurations": {},
    "LastModifiedTime": {},
    "SourceLocationName": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "VodSourceName": {}
  }
]
```

<h2 id="tocS_LiveSource">LiveSource</h2>
<!-- backwards compatibility -->
<a id="schemalivesource"></a>
<a id="schema_LiveSource"></a>
<a id="tocSlivesource"></a>
<a id="tocslivesource"></a>

```json
{
  "Arn": {},
  "CreationTime": {},
  "HttpPackageConfigurations": {},
  "LastModifiedTime": {},
  "LiveSourceName": {},
  "SourceLocationName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Live source configuration parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|CreationTime|object|false|none|none|
|HttpPackageConfigurations|object|true|none|none|
|LastModifiedTime|object|false|none|none|
|LiveSourceName|object|true|none|none|
|SourceLocationName|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_PlaybackConfiguration">PlaybackConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackconfiguration"></a>
<a id="schema_PlaybackConfiguration"></a>
<a id="tocSplaybackconfiguration"></a>
<a id="tocsplaybackconfiguration"></a>

```json
{
  "AdDecisionServerUrl": {},
  "AvailSuppression": {
    "Mode": {},
    "Value": {}
  },
  "Bumper": {
    "EndUrl": {},
    "StartUrl": {}
  },
  "CdnConfiguration": {
    "AdSegmentUrlPrefix": {},
    "ContentSegmentUrlPrefix": {}
  },
  "ConfigurationAliases": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DashConfiguration": {
    "ManifestEndpointPrefix": {},
    "MpdLocation": {},
    "OriginManifestType": {}
  },
  "HlsConfiguration": {
    "ManifestEndpointPrefix": {}
  },
  "LivePreRollConfiguration": {
    "AdDecisionServerUrl": {},
    "MaxDurationSeconds": {}
  },
  "LogConfiguration": {
    "PercentEnabled": {}
  },
  "ManifestProcessingRules": {
    "AdMarkerPassthrough": {
      "Enabled": {}
    }
  },
  "Name": {},
  "PersonalizationThresholdSeconds": {},
  "PlaybackConfigurationArn": {},
  "PlaybackEndpointPrefix": {},
  "SessionInitializationEndpointPrefix": {},
  "SlateAdUrl": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TranscodeProfileName": {},
  "VideoContentSourceUrl": {}
}
```

A playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdDecisionServerUrl|object|false|none|none|
|AvailSuppression|object|false|none|none|
|Bumper|object|false|none|none|
|CdnConfiguration|object|false|none|none|
|ConfigurationAliases|object|false|none|none|
|DashConfiguration|object|false|none|none|
|HlsConfiguration|object|false|none|none|
|LivePreRollConfiguration|object|false|none|none|
|LogConfiguration|object|false|none|none|
|ManifestProcessingRules|object|false|none|none|
|Name|object|false|none|none|
|PersonalizationThresholdSeconds|object|false|none|none|
|PlaybackConfigurationArn|object|false|none|none|
|PlaybackEndpointPrefix|object|false|none|none|
|SessionInitializationEndpointPrefix|object|false|none|none|
|SlateAdUrl|object|false|none|none|
|Tags|object|false|none|none|
|TranscodeProfileName|object|false|none|none|
|VideoContentSourceUrl|object|false|none|none|

<h2 id="tocS_PrefetchSchedule">PrefetchSchedule</h2>
<!-- backwards compatibility -->
<a id="schemaprefetchschedule"></a>
<a id="schema_PrefetchSchedule"></a>
<a id="tocSprefetchschedule"></a>
<a id="tocsprefetchschedule"></a>

```json
{
  "Arn": {},
  "Consumption": {
    "AvailMatchingCriteria": {},
    "EndTime": {},
    "StartTime": {}
  },
  "Name": {},
  "PlaybackConfigurationName": {},
  "Retrieval": {
    "DynamicVariables": {
      "property1": "string",
      "property2": "string"
    },
    "EndTime": {},
    "StartTime": {}
  },
  "StreamId": {}
}
```

A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|Consumption|object|true|none|none|
|Name|object|true|none|none|
|PlaybackConfigurationName|object|true|none|none|
|Retrieval|object|true|none|none|
|StreamId|object|false|none|none|

<h2 id="tocS_PutChannelPolicyRequest">PutChannelPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputchannelpolicyrequest"></a>
<a id="schema_PutChannelPolicyRequest"></a>
<a id="tocSputchannelpolicyrequest"></a>
<a id="tocsputchannelpolicyrequest"></a>

```json
{
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|true|none|none|

<h2 id="tocS_PutPlaybackConfigurationRequest">PutPlaybackConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputplaybackconfigurationrequest"></a>
<a id="schema_PutPlaybackConfigurationRequest"></a>
<a id="tocSputplaybackconfigurationrequest"></a>
<a id="tocsputplaybackconfigurationrequest"></a>

```json
{
  "AdDecisionServerUrl": {},
  "AvailSuppression": {
    "Mode": {},
    "Value": {}
  },
  "Bumper": {
    "EndUrl": {},
    "StartUrl": {}
  },
  "CdnConfiguration": {
    "AdSegmentUrlPrefix": {},
    "ContentSegmentUrlPrefix": {}
  },
  "ConfigurationAliases": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DashConfiguration": {
    "MpdLocation": {},
    "OriginManifestType": {}
  },
  "LivePreRollConfiguration": {
    "AdDecisionServerUrl": {},
    "MaxDurationSeconds": {}
  },
  "ManifestProcessingRules": {
    "AdMarkerPassthrough": {
      "Enabled": {}
    }
  },
  "Name": {},
  "PersonalizationThresholdSeconds": {},
  "SlateAdUrl": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TranscodeProfileName": {},
  "VideoContentSourceUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdDecisionServerUrl|object|false|none|none|
|AvailSuppression|object|false|none|none|
|Bumper|object|false|none|none|
|CdnConfiguration|object|false|none|none|
|ConfigurationAliases|object|false|none|none|
|DashConfiguration|object|false|none|none|
|LivePreRollConfiguration|object|false|none|none|
|ManifestProcessingRules|object|false|none|none|
|Name|object|true|none|none|
|PersonalizationThresholdSeconds|object|false|none|none|
|SlateAdUrl|object|false|none|none|
|Tags|object|false|none|none|
|TranscodeProfileName|object|false|none|none|
|VideoContentSourceUrl|object|false|none|none|

<h2 id="tocS_RelativePosition">RelativePosition</h2>
<!-- backwards compatibility -->
<a id="schemarelativeposition"></a>
<a id="schema_RelativePosition"></a>
<a id="tocSrelativeposition"></a>
<a id="tocsrelativeposition"></a>

```json
"BEFORE_PROGRAM"
```

<h2 id="tocS_ResponseOutputItem">ResponseOutputItem</h2>
<!-- backwards compatibility -->
<a id="schemaresponseoutputitem"></a>
<a id="schema_ResponseOutputItem"></a>
<a id="tocSresponseoutputitem"></a>
<a id="tocsresponseoutputitem"></a>

```json
{
  "DashPlaylistSettings": {
    "ManifestWindowSeconds": {},
    "MinBufferTimeSeconds": {},
    "MinUpdatePeriodSeconds": {},
    "SuggestedPresentationDelaySeconds": {}
  },
  "HlsPlaylistSettings": {
    "ManifestWindowSeconds": {}
  },
  "ManifestName": {},
  "PlaybackUrl": {},
  "SourceGroup": {}
}
```

The output item response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DashPlaylistSettings|object|false|none|none|
|HlsPlaylistSettings|object|false|none|none|
|ManifestName|object|true|none|none|
|PlaybackUrl|object|true|none|none|
|SourceGroup|object|true|none|none|

<h2 id="tocS_ScheduleAdBreak">ScheduleAdBreak</h2>
<!-- backwards compatibility -->
<a id="schemascheduleadbreak"></a>
<a id="schema_ScheduleAdBreak"></a>
<a id="tocSscheduleadbreak"></a>
<a id="tocsscheduleadbreak"></a>

```json
{
  "ApproximateDurationSeconds": {},
  "ApproximateStartTime": {},
  "SourceLocationName": {},
  "VodSourceName": {}
}
```

The schedule's ad break properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApproximateDurationSeconds|object|false|none|none|
|ApproximateStartTime|object|false|none|none|
|SourceLocationName|object|false|none|none|
|VodSourceName|object|false|none|none|

<h2 id="tocS___listOfScheduleAdBreak">__listOfScheduleAdBreak</h2>
<!-- backwards compatibility -->
<a id="schema__listofscheduleadbreak"></a>
<a id="schema___listOfScheduleAdBreak"></a>
<a id="tocS__listofscheduleadbreak"></a>
<a id="tocs__listofscheduleadbreak"></a>

```json
[
  {
    "ApproximateDurationSeconds": {},
    "ApproximateStartTime": {},
    "SourceLocationName": {},
    "VodSourceName": {}
  }
]
```

<h2 id="tocS_ScheduleEntryType">ScheduleEntryType</h2>
<!-- backwards compatibility -->
<a id="schemascheduleentrytype"></a>
<a id="schema_ScheduleEntryType"></a>
<a id="tocSscheduleentrytype"></a>
<a id="tocsscheduleentrytype"></a>

```json
"PROGRAM"
```

<h2 id="tocS_ScheduleEntry">ScheduleEntry</h2>
<!-- backwards compatibility -->
<a id="schemascheduleentry"></a>
<a id="schema_ScheduleEntry"></a>
<a id="tocSscheduleentry"></a>
<a id="tocsscheduleentry"></a>

```json
{
  "ApproximateDurationSeconds": {},
  "ApproximateStartTime": {},
  "Arn": {},
  "ChannelName": {},
  "LiveSourceName": {},
  "ProgramName": {},
  "ScheduleAdBreaks": {},
  "ScheduleEntryType": {},
  "SourceLocationName": {},
  "VodSourceName": {}
}
```

The properties for a schedule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApproximateDurationSeconds|object|false|none|none|
|ApproximateStartTime|object|false|none|none|
|Arn|object|true|none|none|
|ChannelName|object|true|none|none|
|LiveSourceName|object|false|none|none|
|ProgramName|object|true|none|none|
|ScheduleAdBreaks|object|false|none|none|
|ScheduleEntryType|object|false|none|none|
|SourceLocationName|object|true|none|none|
|VodSourceName|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_SegmentationDescriptor">SegmentationDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemasegmentationdescriptor"></a>
<a id="schema_SegmentationDescriptor"></a>
<a id="tocSsegmentationdescriptor"></a>
<a id="tocssegmentationdescriptor"></a>

```json
{
  "SegmentNum": {},
  "SegmentationEventId": {},
  "SegmentationTypeId": {},
  "SegmentationUpid": {},
  "SegmentationUpidType": {},
  "SegmentsExpected": {},
  "SubSegmentNum": {},
  "SubSegmentsExpected": {}
}
```

<p>The <code>segmentation_descriptor</code> message can contain advanced metadata fields, like content identifiers, to convey a wide range of information about the ad break. MediaTailor writes the ad metadata in the egress manifest as part of the <code>EXT-X-DATERANGE</code> or <code>EventStream</code> ad marker's SCTE-35 data.</p> <p> <code>segmentation_descriptor</code> messages must be sent with the <code>time_signal</code> message type.</p> <p>See the <code>segmentation_descriptor()</code> table of the 2022 SCTE-35 specification for more information.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SegmentNum|object|false|none|none|
|SegmentationEventId|object|false|none|none|
|SegmentationTypeId|object|false|none|none|
|SegmentationUpid|object|false|none|none|
|SegmentationUpidType|object|false|none|none|
|SegmentsExpected|object|false|none|none|
|SubSegmentNum|object|false|none|none|
|SubSegmentsExpected|object|false|none|none|

<h2 id="tocS_SegmentationDescriptorList">SegmentationDescriptorList</h2>
<!-- backwards compatibility -->
<a id="schemasegmentationdescriptorlist"></a>
<a id="schema_SegmentationDescriptorList"></a>
<a id="tocSsegmentationdescriptorlist"></a>
<a id="tocssegmentationdescriptorlist"></a>

```json
[
  {
    "SegmentNum": {},
    "SegmentationEventId": {},
    "SegmentationTypeId": {},
    "SegmentationUpid": {},
    "SegmentationUpidType": {},
    "SegmentsExpected": {},
    "SubSegmentNum": {},
    "SubSegmentsExpected": {}
  }
]
```

<h2 id="tocS_SourceLocation">SourceLocation</h2>
<!-- backwards compatibility -->
<a id="schemasourcelocation"></a>
<a id="schema_SourceLocation"></a>
<a id="tocSsourcelocation"></a>
<a id="tocssourcelocation"></a>

```json
{
  "AccessConfiguration": {
    "AccessType": {},
    "SecretsManagerAccessTokenConfiguration": {
      "HeaderName": {},
      "SecretArn": {},
      "SecretStringKey": {}
    }
  },
  "Arn": {},
  "CreationTime": {},
  "DefaultSegmentDeliveryConfiguration": {
    "BaseUrl": {}
  },
  "HttpConfiguration": {
    "BaseUrl": {}
  },
  "LastModifiedTime": {},
  "SegmentDeliveryConfigurations": {},
  "SourceLocationName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessConfiguration|object|false|none|none|
|Arn|object|true|none|none|
|CreationTime|object|false|none|none|
|DefaultSegmentDeliveryConfiguration|object|false|none|none|
|HttpConfiguration|object|true|none|none|
|LastModifiedTime|object|false|none|none|
|SegmentDeliveryConfigurations|object|false|none|none|
|SourceLocationName|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_StartChannelRequest">StartChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartchannelrequest"></a>
<a id="schema_StartChannelRequest"></a>
<a id="tocSstartchannelrequest"></a>
<a id="tocsstartchannelrequest"></a>

```json
{}
```

<h2 id="tocS_StopChannelRequest">StopChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopchannelrequest"></a>
<a id="schema_StopChannelRequest"></a>
<a id="tocSstopchannelrequest"></a>
<a id="tocsstopchannelrequest"></a>

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
  "FillerSlate": {
    "SourceLocationName": {},
    "VodSourceName": {}
  },
  "Outputs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FillerSlate|object|false|none|none|
|Outputs|object|true|none|none|

<h2 id="tocS_UpdateLiveSourceRequest">UpdateLiveSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelivesourcerequest"></a>
<a id="schema_UpdateLiveSourceRequest"></a>
<a id="tocSupdatelivesourcerequest"></a>
<a id="tocsupdatelivesourcerequest"></a>

```json
{
  "HttpPackageConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HttpPackageConfigurations|object|true|none|none|

<h2 id="tocS_UpdateProgramScheduleConfiguration">UpdateProgramScheduleConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprogramscheduleconfiguration"></a>
<a id="schema_UpdateProgramScheduleConfiguration"></a>
<a id="tocSupdateprogramscheduleconfiguration"></a>
<a id="tocsupdateprogramscheduleconfiguration"></a>

```json
{
  "ClipRange": {
    "EndOffsetMillis": {}
  },
  "Transition": {
    "DurationMillis": {},
    "ScheduledStartTimeMillis": {}
  }
}
```

Schedule configuration parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClipRange|object|false|none|none|
|Transition|object|false|none|none|

<h2 id="tocS_UpdateProgramRequest">UpdateProgramRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprogramrequest"></a>
<a id="schema_UpdateProgramRequest"></a>
<a id="tocSupdateprogramrequest"></a>
<a id="tocsupdateprogramrequest"></a>

```json
{
  "AdBreaks": {},
  "ScheduleConfiguration": {
    "ClipRange": {
      "EndOffsetMillis": {}
    },
    "Transition": {
      "DurationMillis": {},
      "ScheduledStartTimeMillis": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdBreaks|object|false|none|none|
|ScheduleConfiguration|object|true|none|none|

<h2 id="tocS_UpdateSourceLocationRequest">UpdateSourceLocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesourcelocationrequest"></a>
<a id="schema_UpdateSourceLocationRequest"></a>
<a id="tocSupdatesourcelocationrequest"></a>
<a id="tocsupdatesourcelocationrequest"></a>

```json
{
  "AccessConfiguration": {
    "AccessType": {},
    "SecretsManagerAccessTokenConfiguration": {
      "HeaderName": {},
      "SecretArn": {},
      "SecretStringKey": {}
    }
  },
  "DefaultSegmentDeliveryConfiguration": {
    "BaseUrl": {}
  },
  "HttpConfiguration": {
    "BaseUrl": {}
  },
  "SegmentDeliveryConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessConfiguration|object|false|none|none|
|DefaultSegmentDeliveryConfiguration|object|false|none|none|
|HttpConfiguration|object|true|none|none|
|SegmentDeliveryConfigurations|object|false|none|none|

<h2 id="tocS_UpdateVodSourceRequest">UpdateVodSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevodsourcerequest"></a>
<a id="schema_UpdateVodSourceRequest"></a>
<a id="tocSupdatevodsourcerequest"></a>
<a id="tocsupdatevodsourcerequest"></a>

```json
{
  "HttpPackageConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HttpPackageConfigurations|object|true|none|none|

<h2 id="tocS_VodSource">VodSource</h2>
<!-- backwards compatibility -->
<a id="schemavodsource"></a>
<a id="schema_VodSource"></a>
<a id="tocSvodsource"></a>
<a id="tocsvodsource"></a>

```json
{
  "Arn": {},
  "CreationTime": {},
  "HttpPackageConfigurations": {},
  "LastModifiedTime": {},
  "SourceLocationName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "VodSourceName": {}
}
```

VOD source configuration parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|CreationTime|object|false|none|none|
|HttpPackageConfigurations|object|true|none|none|
|LastModifiedTime|object|false|none|none|
|SourceLocationName|object|true|none|none|
|Tags|object|false|none|none|
|VodSourceName|object|true|none|none|
