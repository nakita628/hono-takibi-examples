<h1 id="amazon-kinesis-video-streams-archived-media">Amazon Kinesis Video Streams Archived Media v2017-09-30</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p/>

Base URLs:

* <a href="http://kinesisvideo.us-east-1.amazonaws.com">http://kinesisvideo.us-east-1.amazonaws.com</a> - The Kinesis Video Archived Media multi-region endpoint

* <a href="https://kinesisvideo.us-east-1.amazonaws.com">https://kinesisvideo.us-east-1.amazonaws.com</a> - The Kinesis Video Archived Media multi-region endpoint

* <a href="http://kinesisvideo.cn-north-1.amazonaws.com.cn">http://kinesisvideo.cn-north-1.amazonaws.com.cn</a> - The Kinesis Video Archived Media endpoint for China (Beijing) and China (Ningxia)

* <a href="https://kinesisvideo.cn-north-1.amazonaws.com.cn">https://kinesisvideo.cn-north-1.amazonaws.com.cn</a> - The Kinesis Video Archived Media endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/kinesisvideo/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-kinesis-video-streams-archived-media-default">Default</h1>

## GetClip

<a id="opIdGetClip"></a>

> Code samples

```bash
curl https://kinesis-video-archived-media.us-east-1.amazonaws.com/getClip \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamName": "string",
    "StreamARN": "string",
    "ClipFragmentSelector": {
      "FragmentSelectorType": {},
      "TimestampRange": {
        "StartTimestamp": {},
        "EndTimestamp": {}
      }
    }
  }'
```

`POST /getClip`

<p>Downloads an MP4 file (clip) containing the archived, on-demand media from the specified video stream over the specified time range. </p> <p>Both the StreamName and the StreamARN parameters are optional, but you must specify either the StreamName or the StreamARN when invoking this API operation. </p> <p>As a prerequisite to using GetCLip API, you must obtain an endpoint using <code>GetDataEndpoint</code>, specifying GET_CLIP for<code/> the <code>APIName</code> parameter. </p> <p>An Amazon Kinesis video stream has the following requirements for providing data through MP4:</p> <ul> <li> <p>The media must contain h.264 or h.265 encoded video and, optionally, AAC or G.711 encoded audio. Specifically, the codec ID of track 1 should be <code>V_MPEG/ISO/AVC</code> (for h.264) or V_MPEGH/ISO/HEVC (for H.265). Optionally, the codec ID of track 2 should be <code>A_AAC</code> (for AAC) or A_MS/ACM (for G.711).</p> </li> <li> <p>Data retention must be greater than 0.</p> </li> <li> <p>The video track of each fragment must contain codec private data in the Advanced Video Coding (AVC) for H.264 format and HEVC for H.265 format. For more information, see <a href="https://www.iso.org/standard/55980.html">MPEG-4 specification ISO/IEC 14496-15</a>. For information about adapting stream data to a given format, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html">NAL Adaptation Flags</a>.</p> </li> <li> <p>The audio track (if present) of each fragment must contain codec private data in the AAC format (<a href="https://www.iso.org/standard/43345.html">AAC specification ISO/IEC 13818-7</a>) or the <a href="http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/WAVE.html">MS Wave format</a>.</p> </li> </ul> <p>You can monitor the amount of outgoing data by monitoring the <code>GetClip.OutgoingBytes</code> Amazon CloudWatch metric. For information about using CloudWatch to monitor Kinesis Video Streams, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/monitoring.html">Monitoring Kinesis Video Streams</a>. For pricing information, see <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Amazon Kinesis Video Streams Pricing</a> and <a href="https://aws.amazon.com/pricing/">AWS Pricing</a>. Charges for outgoing AWS data apply.</p>

> Body parameter

```json
{
  "StreamName": "string",
  "StreamARN": "string",
  "ClipFragmentSelector": {
    "FragmentSelectorType": {},
    "TimestampRange": {
      "StartTimestamp": {},
      "EndTimestamp": {}
    }
  }
}
```

<h3 id="getclip-parameters">Parameters</h3>

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
|» StreamName|body|string|false|<p>The name of the stream for which to retrieve the media clip. </p> <p>You must specify either the StreamName or the StreamARN. </p>|
|» StreamARN|body|string|false|<p>The Amazon Resource Name (ARN) of the stream for which to retrieve the media clip. </p> <p>You must specify either the StreamName or the StreamARN. </p>|
|» ClipFragmentSelector|body|object|true|<p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the clip will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p>|
|» » FragmentSelectorType|body|object|false|none|
|» » TimestampRange|body|object|false|none|
|» » » StartTimestamp|body|object|true|none|
|» » » EndTimestamp|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "Payload": {}
}
```

> 480 Response

```json
null
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

<h3 id="getclip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetClipOutput](#schemagetclipoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UnsupportedStreamMediaTypeException|[UnsupportedStreamMediaTypeException](#schemaunsupportedstreammediatypeexception)|
|485|485|MissingCodecPrivateDataException|[MissingCodecPrivateDataException](#schemamissingcodecprivatedataexception)|
|486|486|InvalidCodecPrivateDataException|[InvalidCodecPrivateDataException](#schemainvalidcodecprivatedataexception)|
|487|487|InvalidMediaFrameException|[InvalidMediaFrameException](#schemainvalidmediaframeexception)|
|488|488|NoDataRetentionException|[NoDataRetentionException](#schemanodataretentionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDASHStreamingSessionURL

<a id="opIdGetDASHStreamingSessionURL"></a>

> Code samples

```bash
curl https://kinesis-video-archived-media.us-east-1.amazonaws.com/getDASHStreamingSessionURL \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamName": "string",
    "StreamARN": "string",
    "PlaybackMode": "LIVE",
    "DisplayFragmentTimestamp": "ALWAYS",
    "DisplayFragmentNumber": "ALWAYS",
    "DASHFragmentSelector": {
      "FragmentSelectorType": {},
      "TimestampRange": {
        "StartTimestamp": {},
        "EndTimestamp": {}
      }
    },
    "Expires": 300,
    "MaxManifestFragmentResults": 1
  }'
```

`POST /getDASHStreamingSessionURL`

<p>Retrieves an MPEG Dynamic Adaptive Streaming over HTTP (DASH) URL for the stream. You can then open the URL in a media player to view the stream contents.</p> <p>Both the <code>StreamName</code> and the <code>StreamARN</code> parameters are optional, but you must specify either the <code>StreamName</code> or the <code>StreamARN</code> when invoking this API operation.</p> <p>An Amazon Kinesis video stream has the following requirements for providing data through MPEG-DASH:</p> <ul> <li> <p>The media must contain h.264 or h.265 encoded video and, optionally, AAC or G.711 encoded audio. Specifically, the codec ID of track 1 should be <code>V_MPEG/ISO/AVC</code> (for h.264) or V_MPEGH/ISO/HEVC (for H.265). Optionally, the codec ID of track 2 should be <code>A_AAC</code> (for AAC) or A_MS/ACM (for G.711).</p> </li> <li> <p>Data retention must be greater than 0.</p> </li> <li> <p>The video track of each fragment must contain codec private data in the Advanced Video Coding (AVC) for H.264 format and HEVC for H.265 format. For more information, see <a href="https://www.iso.org/standard/55980.html">MPEG-4 specification ISO/IEC 14496-15</a>. For information about adapting stream data to a given format, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html">NAL Adaptation Flags</a>.</p> </li> <li> <p>The audio track (if present) of each fragment must contain codec private data in the AAC format (<a href="https://www.iso.org/standard/43345.html">AAC specification ISO/IEC 13818-7</a>) or the <a href="http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/WAVE.html">MS Wave format</a>.</p> </li> </ul> <p>The following procedure shows how to use MPEG-DASH with Kinesis Video Streams:</p> <ol> <li> <p>Get an endpoint using <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDataEndpoint.html">GetDataEndpoint</a>, specifying <code>GET_DASH_STREAMING_SESSION_URL</code> for the <code>APIName</code> parameter.</p> </li> <li> <p>Retrieve the MPEG-DASH URL using <code>GetDASHStreamingSessionURL</code>. Kinesis Video Streams creates an MPEG-DASH streaming session to be used for accessing content in a stream using the MPEG-DASH protocol. <code>GetDASHStreamingSessionURL</code> returns an authenticated URL (that includes an encrypted session token) for the session's MPEG-DASH <i>manifest</i> (the root resource needed for streaming with MPEG-DASH).</p> <note> <p>Don't share or store this token where an unauthorized entity can access it. The token provides access to the content of the stream. Safeguard the token with the same measures that you use with your AWS credentials.</p> </note> <p>The media that is made available through the manifest consists only of the requested stream, time range, and format. No other media data (such as frames outside the requested window or alternate bitrates) is made available.</p> </li> <li> <p>Provide the URL (containing the encrypted session token) for the MPEG-DASH manifest to a media player that supports the MPEG-DASH protocol. Kinesis Video Streams makes the initialization fragment and media fragments available through the manifest URL. The initialization fragment contains the codec private data for the stream, and other data needed to set up the video or audio decoder and renderer. The media fragments contain encoded video frames or encoded audio samples.</p> </li> <li> <p>The media player receives the authenticated URL and requests stream metadata and media data normally. When the media player requests data, it calls the following actions:</p> <ul> <li> <p> <b>GetDASHManifest:</b> Retrieves an MPEG DASH manifest, which contains the metadata for the media that you want to playback.</p> </li> <li> <p> <b>GetMP4InitFragment:</b> Retrieves the MP4 initialization fragment. The media player typically loads the initialization fragment before loading any media fragments. This fragment contains the "<code>fytp</code>" and "<code>moov</code>" MP4 atoms, and the child atoms that are needed to initialize the media player decoder.</p> <p>The initialization fragment does not correspond to a fragment in a Kinesis video stream. It contains only the codec private data for the stream and respective track, which the media player needs to decode the media frames.</p> </li> <li> <p> <b>GetMP4MediaFragment:</b> Retrieves MP4 media fragments. These fragments contain the "<code>moof</code>" and "<code>mdat</code>" MP4 atoms and their child atoms, containing the encoded fragment's media frames and their timestamps. </p> <note> <p>After the first media fragment is made available in a streaming session, any fragments that don't contain the same codec private data cause an error to be returned when those different media fragments are loaded. Therefore, the codec private data should not change between fragments in a session. This also means that the session fails if the fragments in a stream change from having only video to having both audio and video.</p> </note> <p>Data retrieved with this action is billable. See <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Pricing</a> for details.</p> </li> </ul> </li> </ol> <note> <p>For restrictions that apply to MPEG-DASH sessions, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p> </note> <p>You can monitor the amount of data that the media player consumes by monitoring the <code>GetMP4MediaFragment.OutgoingBytes</code> Amazon CloudWatch metric. For information about using CloudWatch to monitor Kinesis Video Streams, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/monitoring.html">Monitoring Kinesis Video Streams</a>. For pricing information, see <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Amazon Kinesis Video Streams Pricing</a> and <a href="https://aws.amazon.com/pricing/">AWS Pricing</a>. Charges for both HLS sessions and outgoing AWS data apply.</p> <p>For more information about HLS, see <a href="https://developer.apple.com/streaming/">HTTP Live Streaming</a> on the <a href="https://developer.apple.com">Apple Developer site</a>.</p> <important> <p>If an error is thrown after invoking a Kinesis Video Streams archived media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: </p> <ul> <li> <p> <code>x-amz-ErrorType</code> HTTP header – contains a more specific error type in addition to what the HTTP status code provides. </p> </li> <li> <p> <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to AWS, the support team can better diagnose the problem if given the Request Id.</p> </li> </ul> <p>Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.</p> <p>For more information, see the <b>Errors</b> section at the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>. </p> </important>

> Body parameter

```json
{
  "StreamName": "string",
  "StreamARN": "string",
  "PlaybackMode": "LIVE",
  "DisplayFragmentTimestamp": "ALWAYS",
  "DisplayFragmentNumber": "ALWAYS",
  "DASHFragmentSelector": {
    "FragmentSelectorType": {},
    "TimestampRange": {
      "StartTimestamp": {},
      "EndTimestamp": {}
    }
  },
  "Expires": 300,
  "MaxManifestFragmentResults": 1
}
```

<h3 id="getdashstreamingsessionurl-parameters">Parameters</h3>

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
|» StreamName|body|string|false|<p>The name of the stream for which to retrieve the MPEG-DASH manifest URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>|
|» StreamARN|body|string|false|<p>The Amazon Resource Name (ARN) of the stream for which to retrieve the MPEG-DASH manifest URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>|
|» PlaybackMode|body|string|false|<p>Whether to retrieve live, live replay, or archived, on-demand data.</p> <p>Features of the three types of sessions include the following:</p> <ul> <li> <p> <b> <code>LIVE</code> </b>: For sessions of this type, the MPEG-DASH manifest is continually updated with the latest fragments as they become available. We recommend that the media player retrieve a new manifest on a one-second interval. When this type of session is played in a media player, the user interface typically displays a "live" notification, with no scrubber control for choosing the position in the playback window to display.</p> <note> <p>In <code>LIVE</code> mode, the newest available fragments are included in an MPEG-DASH manifest, even if there is a gap between fragments (that is, if a fragment is missing). A gap like this might cause a media player to halt or cause a jump in playback. In this mode, fragments are not added to the MPEG-DASH manifest if they are older than the newest fragment in the playlist. If the missing fragment becomes available after a subsequent fragment is added to the manifest, the older fragment is not added, and the gap is not filled.</p> </note> </li> <li> <p> <b> <code>LIVE_REPLAY</code> </b>: For sessions of this type, the MPEG-DASH manifest is updated similarly to how it is updated for <code>LIVE</code> mode except that it starts by including fragments from a given start time. Instead of fragments being added as they are ingested, fragments are added as the duration of the next fragment elapses. For example, if the fragments in the session are two seconds long, then a new fragment is added to the manifest every two seconds. This mode is useful to be able to start playback from when an event is detected and continue live streaming media that has not yet been ingested as of the time of the session creation. This mode is also useful to stream previously archived media without being limited by the 1,000 fragment limit in the <code>ON_DEMAND</code> mode. </p> </li> <li> <p> <b> <code>ON_DEMAND</code> </b>: For sessions of this type, the MPEG-DASH manifest contains all the fragments for the session, up to the number that is specified in <code>MaxManifestFragmentResults</code>. The manifest must be retrieved only once for each session. When this type of session is played in a media player, the user interface typically displays a scrubber control for choosing the position in the playback window to display.</p> </li> </ul> <p>In all playback modes, if <code>FragmentSelectorType</code> is <code>PRODUCER_TIMESTAMP</code>, and if there are multiple fragments with the same start timestamp, the fragment that has the larger fragment number (that is, the newer fragment) is included in the MPEG-DASH manifest. The other fragments are not included. Fragments that have different timestamps but have overlapping durations are still included in the MPEG-DASH manifest. This can lead to unexpected behavior in the media player.</p> <p>The default is <code>LIVE</code>.</p>|
|» DisplayFragmentTimestamp|body|string|false|<p>Per the MPEG-DASH specification, the wall-clock time of fragments in the manifest file can be derived using attributes in the manifest itself. However, typically, MPEG-DASH compatible media players do not properly handle gaps in the media timeline. Kinesis Video Streams adjusts the media timeline in the manifest file to enable playback of media with discontinuities. Therefore, the wall-clock time derived from the manifest file may be inaccurate. If DisplayFragmentTimestamp is set to <code>ALWAYS</code>, the accurate fragment timestamp is added to each S element in the manifest file with the attribute name “kvs:ts”. A custom MPEG-DASH media player is necessary to leverage this custom attribute.</p> <p>The default value is <code>NEVER</code>. When <a>DASHFragmentSelector</a> is <code>SERVER_TIMESTAMP</code>, the timestamps will be the server start timestamps. Similarly, when <a>DASHFragmentSelector</a> is <code>PRODUCER_TIMESTAMP</code>, the timestamps will be the producer start timestamps. </p>|
|» DisplayFragmentNumber|body|string|false|<p>Fragments are identified in the manifest file based on their sequence number in the session. If DisplayFragmentNumber is set to <code>ALWAYS</code>, the Kinesis Video Streams fragment number is added to each S element in the manifest file with the attribute name “kvs:fn”. These fragment numbers can be used for logging or for use with other APIs (e.g. <code>GetMedia</code> and <code>GetMediaForFragmentList</code>). A custom MPEG-DASH media player is necessary to leverage these this custom attribute.</p> <p>The default value is <code>NEVER</code>.</p>|
|» DASHFragmentSelector|body|object|false|Contains the range of timestamps for the requested media, and the source of the timestamps. |
|» » FragmentSelectorType|body|object|false|none|
|» » TimestampRange|body|object|false|none|
|» » » StartTimestamp|body|object|false|none|
|» » » EndTimestamp|body|object|false|none|
|» Expires|body|integer|false|<p>The time in seconds until the requested session expires. This value can be between 300 (5 minutes) and 43200 (12 hours).</p> <p>When a session expires, no new calls to <code>GetDashManifest</code>, <code>GetMP4InitFragment</code>, or <code>GetMP4MediaFragment</code> can be made for that session.</p> <p>The default is 300 (5 minutes).</p>|
|» MaxManifestFragmentResults|body|integer|false|<p>The maximum number of fragments that are returned in the MPEG-DASH manifest.</p> <p>When the <code>PlaybackMode</code> is <code>LIVE</code>, the most recent fragments are returned up to this value. When the <code>PlaybackMode</code> is <code>ON_DEMAND</code>, the oldest fragments are returned, up to this maximum number.</p> <p>When there are a higher number of fragments available in a live MPEG-DASH manifest, video players often buffer content before starting playback. Increasing the buffer size increases the playback latency, but it decreases the likelihood that rebuffering will occur during playback. We recommend that a live MPEG-DASH manifest have a minimum of 3 fragments and a maximum of 10 fragments.</p> <p>The default is 5 fragments if <code>PlaybackMode</code> is <code>LIVE</code> or <code>LIVE_REPLAY</code>, and 1,000 if <code>PlaybackMode</code> is <code>ON_DEMAND</code>. </p> <p>The maximum value of 1,000 fragments corresponds to more than 16 minutes of video on streams with 1-second fragments, and more than 2 1/2 hours of video on streams with 10-second fragments.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PlaybackMode|LIVE|
|» PlaybackMode|LIVE_REPLAY|
|» PlaybackMode|ON_DEMAND|
|» DisplayFragmentTimestamp|ALWAYS|
|» DisplayFragmentTimestamp|NEVER|
|» DisplayFragmentNumber|ALWAYS|
|» DisplayFragmentNumber|NEVER|

> Example responses

> 200 Response

```json
{
  "DASHStreamingSessionURL": {}
}
```

> 480 Response

```json
null
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

<h3 id="getdashstreamingsessionurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDASHStreamingSessionURLOutput](#schemagetdashstreamingsessionurloutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UnsupportedStreamMediaTypeException|[UnsupportedStreamMediaTypeException](#schemaunsupportedstreammediatypeexception)|
|485|485|NoDataRetentionException|[NoDataRetentionException](#schemanodataretentionexception)|
|486|486|MissingCodecPrivateDataException|[MissingCodecPrivateDataException](#schemamissingcodecprivatedataexception)|
|487|487|InvalidCodecPrivateDataException|[InvalidCodecPrivateDataException](#schemainvalidcodecprivatedataexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetHLSStreamingSessionURL

<a id="opIdGetHLSStreamingSessionURL"></a>

> Code samples

```bash
curl https://kinesis-video-archived-media.us-east-1.amazonaws.com/getHLSStreamingSessionURL \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamName": "string",
    "StreamARN": "string",
    "PlaybackMode": "LIVE",
    "HLSFragmentSelector": {
      "FragmentSelectorType": {},
      "TimestampRange": {
        "StartTimestamp": {},
        "EndTimestamp": {}
      }
    },
    "ContainerFormat": "FRAGMENTED_MP4",
    "DiscontinuityMode": "ALWAYS",
    "DisplayFragmentTimestamp": "ALWAYS",
    "Expires": 300,
    "MaxMediaPlaylistFragmentResults": 1
  }'
```

`POST /getHLSStreamingSessionURL`

<p>Retrieves an HTTP Live Streaming (HLS) URL for the stream. You can then open the URL in a browser or media player to view the stream contents.</p> <p>Both the <code>StreamName</code> and the <code>StreamARN</code> parameters are optional, but you must specify either the <code>StreamName</code> or the <code>StreamARN</code> when invoking this API operation.</p> <p>An Amazon Kinesis video stream has the following requirements for providing data through HLS:</p> <ul> <li> <p>The media must contain h.264 or h.265 encoded video and, optionally, AAC encoded audio. Specifically, the codec ID of track 1 should be <code>V_MPEG/ISO/AVC</code> (for h.264) or <code>V_MPEG/ISO/HEVC</code> (for h.265). Optionally, the codec ID of track 2 should be <code>A_AAC</code>.</p> </li> <li> <p>Data retention must be greater than 0.</p> </li> <li> <p>The video track of each fragment must contain codec private data in the Advanced Video Coding (AVC) for H.264 format or HEVC for H.265 format (<a href="https://www.iso.org/standard/55980.html">MPEG-4 specification ISO/IEC 14496-15</a>). For information about adapting stream data to a given format, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html">NAL Adaptation Flags</a>.</p> </li> <li> <p>The audio track (if present) of each fragment must contain codec private data in the AAC format (<a href="https://www.iso.org/standard/43345.html">AAC specification ISO/IEC 13818-7</a>).</p> </li> </ul> <p>Kinesis Video Streams HLS sessions contain fragments in the fragmented MPEG-4 form (also called fMP4 or CMAF) or the MPEG-2 form (also called TS chunks, which the HLS specification also supports). For more information about HLS fragment types, see the <a href="https://tools.ietf.org/html/draft-pantos-http-live-streaming-23">HLS specification</a>.</p> <p>The following procedure shows how to use HLS with Kinesis Video Streams:</p> <ol> <li> <p>Get an endpoint using <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDataEndpoint.html">GetDataEndpoint</a>, specifying <code>GET_HLS_STREAMING_SESSION_URL</code> for the <code>APIName</code> parameter.</p> </li> <li> <p>Retrieve the HLS URL using <code>GetHLSStreamingSessionURL</code>. Kinesis Video Streams creates an HLS streaming session to be used for accessing content in a stream using the HLS protocol. <code>GetHLSStreamingSessionURL</code> returns an authenticated URL (that includes an encrypted session token) for the session's HLS <i>master playlist</i> (the root resource needed for streaming with HLS).</p> <note> <p>Don't share or store this token where an unauthorized entity could access it. The token provides access to the content of the stream. Safeguard the token with the same measures that you would use with your AWS credentials.</p> </note> <p>The media that is made available through the playlist consists only of the requested stream, time range, and format. No other media data (such as frames outside the requested window or alternate bitrates) is made available.</p> </li> <li> <p>Provide the URL (containing the encrypted session token) for the HLS master playlist to a media player that supports the HLS protocol. Kinesis Video Streams makes the HLS media playlist, initialization fragment, and media fragments available through the master playlist URL. The initialization fragment contains the codec private data for the stream, and other data needed to set up the video or audio decoder and renderer. The media fragments contain H.264-encoded video frames or AAC-encoded audio samples.</p> </li> <li> <p>The media player receives the authenticated URL and requests stream metadata and media data normally. When the media player requests data, it calls the following actions:</p> <ul> <li> <p> <b>GetHLSMasterPlaylist:</b> Retrieves an HLS master playlist, which contains a URL for the <code>GetHLSMediaPlaylist</code> action for each track, and additional metadata for the media player, including estimated bitrate and resolution.</p> </li> <li> <p> <b>GetHLSMediaPlaylist:</b> Retrieves an HLS media playlist, which contains a URL to access the MP4 initialization fragment with the <code>GetMP4InitFragment</code> action, and URLs to access the MP4 media fragments with the <code>GetMP4MediaFragment</code> actions. The HLS media playlist also contains metadata about the stream that the player needs to play it, such as whether the <code>PlaybackMode</code> is <code>LIVE</code> or <code>ON_DEMAND</code>. The HLS media playlist is typically static for sessions with a <code>PlaybackType</code> of <code>ON_DEMAND</code>. The HLS media playlist is continually updated with new fragments for sessions with a <code>PlaybackType</code> of <code>LIVE</code>. There is a distinct HLS media playlist for the video track and the audio track (if applicable) that contains MP4 media URLs for the specific track. </p> </li> <li> <p> <b>GetMP4InitFragment:</b> Retrieves the MP4 initialization fragment. The media player typically loads the initialization fragment before loading any media fragments. This fragment contains the "<code>fytp</code>" and "<code>moov</code>" MP4 atoms, and the child atoms that are needed to initialize the media player decoder.</p> <p>The initialization fragment does not correspond to a fragment in a Kinesis video stream. It contains only the codec private data for the stream and respective track, which the media player needs to decode the media frames.</p> </li> <li> <p> <b>GetMP4MediaFragment:</b> Retrieves MP4 media fragments. These fragments contain the "<code>moof</code>" and "<code>mdat</code>" MP4 atoms and their child atoms, containing the encoded fragment's media frames and their timestamps. </p> <note> <p>After the first media fragment is made available in a streaming session, any fragments that don't contain the same codec private data cause an error to be returned when those different media fragments are loaded. Therefore, the codec private data should not change between fragments in a session. This also means that the session fails if the fragments in a stream change from having only video to having both audio and video.</p> </note> <p>Data retrieved with this action is billable. See <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Pricing</a> for details.</p> </li> <li> <p> <b>GetTSFragment:</b> Retrieves MPEG TS fragments containing both initialization and media data for all tracks in the stream.</p> <note> <p>If the <code>ContainerFormat</code> is <code>MPEG_TS</code>, this API is used instead of <code>GetMP4InitFragment</code> and <code>GetMP4MediaFragment</code> to retrieve stream media.</p> </note> <p>Data retrieved with this action is billable. For more information, see <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Kinesis Video Streams pricing</a>.</p> </li> </ul> </li> </ol> <p>A streaming session URL must not be shared between players. The service might throttle a session if multiple media players are sharing it. For connection limits, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p> <p>You can monitor the amount of data that the media player consumes by monitoring the <code>GetMP4MediaFragment.OutgoingBytes</code> Amazon CloudWatch metric. For information about using CloudWatch to monitor Kinesis Video Streams, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/monitoring.html">Monitoring Kinesis Video Streams</a>. For pricing information, see <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Amazon Kinesis Video Streams Pricing</a> and <a href="https://aws.amazon.com/pricing/">AWS Pricing</a>. Charges for both HLS sessions and outgoing AWS data apply.</p> <p>For more information about HLS, see <a href="https://developer.apple.com/streaming/">HTTP Live Streaming</a> on the <a href="https://developer.apple.com">Apple Developer site</a>.</p> <important> <p>If an error is thrown after invoking a Kinesis Video Streams archived media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: </p> <ul> <li> <p> <code>x-amz-ErrorType</code> HTTP header – contains a more specific error type in addition to what the HTTP status code provides. </p> </li> <li> <p> <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to AWS, the support team can better diagnose the problem if given the Request Id.</p> </li> </ul> <p>Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.</p> <p>For more information, see the <b>Errors</b> section at the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>. </p> </important>

> Body parameter

```json
{
  "StreamName": "string",
  "StreamARN": "string",
  "PlaybackMode": "LIVE",
  "HLSFragmentSelector": {
    "FragmentSelectorType": {},
    "TimestampRange": {
      "StartTimestamp": {},
      "EndTimestamp": {}
    }
  },
  "ContainerFormat": "FRAGMENTED_MP4",
  "DiscontinuityMode": "ALWAYS",
  "DisplayFragmentTimestamp": "ALWAYS",
  "Expires": 300,
  "MaxMediaPlaylistFragmentResults": 1
}
```

<h3 id="gethlsstreamingsessionurl-parameters">Parameters</h3>

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
|» StreamName|body|string|false|<p>The name of the stream for which to retrieve the HLS master playlist URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>|
|» StreamARN|body|string|false|<p>The Amazon Resource Name (ARN) of the stream for which to retrieve the HLS master playlist URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>|
|» PlaybackMode|body|string|false|<p>Whether to retrieve live, live replay, or archived, on-demand data.</p> <p>Features of the three types of sessions include the following:</p> <ul> <li> <p> <b> <code>LIVE</code> </b>: For sessions of this type, the HLS media playlist is continually updated with the latest fragments as they become available. We recommend that the media player retrieve a new playlist on a one-second interval. When this type of session is played in a media player, the user interface typically displays a "live" notification, with no scrubber control for choosing the position in the playback window to display.</p> <note> <p>In <code>LIVE</code> mode, the newest available fragments are included in an HLS media playlist, even if there is a gap between fragments (that is, if a fragment is missing). A gap like this might cause a media player to halt or cause a jump in playback. In this mode, fragments are not added to the HLS media playlist if they are older than the newest fragment in the playlist. If the missing fragment becomes available after a subsequent fragment is added to the playlist, the older fragment is not added, and the gap is not filled.</p> </note> </li> <li> <p> <b> <code>LIVE_REPLAY</code> </b>: For sessions of this type, the HLS media playlist is updated similarly to how it is updated for <code>LIVE</code> mode except that it starts by including fragments from a given start time. Instead of fragments being added as they are ingested, fragments are added as the duration of the next fragment elapses. For example, if the fragments in the session are two seconds long, then a new fragment is added to the media playlist every two seconds. This mode is useful to be able to start playback from when an event is detected and continue live streaming media that has not yet been ingested as of the time of the session creation. This mode is also useful to stream previously archived media without being limited by the 1,000 fragment limit in the <code>ON_DEMAND</code> mode. </p> </li> <li> <p> <b> <code>ON_DEMAND</code> </b>: For sessions of this type, the HLS media playlist contains all the fragments for the session, up to the number that is specified in <code>MaxMediaPlaylistFragmentResults</code>. The playlist must be retrieved only once for each session. When this type of session is played in a media player, the user interface typically displays a scrubber control for choosing the position in the playback window to display.</p> </li> </ul> <p>In all playback modes, if <code>FragmentSelectorType</code> is <code>PRODUCER_TIMESTAMP</code>, and if there are multiple fragments with the same start timestamp, the fragment that has the largest fragment number (that is, the newest fragment) is included in the HLS media playlist. The other fragments are not included. Fragments that have different timestamps but have overlapping durations are still included in the HLS media playlist. This can lead to unexpected behavior in the media player.</p> <p>The default is <code>LIVE</code>.</p>|
|» HLSFragmentSelector|body|object|false|Contains the range of timestamps for the requested media, and the source of the timestamps.|
|» » FragmentSelectorType|body|object|false|none|
|» » TimestampRange|body|object|false|none|
|» » » StartTimestamp|body|object|false|none|
|» » » EndTimestamp|body|object|false|none|
|» ContainerFormat|body|string|false|<p>Specifies which format should be used for packaging the media. Specifying the <code>FRAGMENTED_MP4</code> container format packages the media into MP4 fragments (fMP4 or CMAF). This is the recommended packaging because there is minimal packaging overhead. The other container format option is <code>MPEG_TS</code>. HLS has supported MPEG TS chunks since it was released and is sometimes the only supported packaging on older HLS players. MPEG TS typically has a 5-25 percent packaging overhead. This means MPEG TS typically requires 5-25 percent more bandwidth and cost than fMP4.</p> <p>The default is <code>FRAGMENTED_MP4</code>.</p>|
|» DiscontinuityMode|body|string|false|<p>Specifies when flags marking discontinuities between fragments are added to the media playlists.</p> <p>Media players typically build a timeline of media content to play, based on the timestamps of each fragment. This means that if there is any overlap or gap between fragments (as is typical if <a>HLSFragmentSelector</a> is set to <code>SERVER_TIMESTAMP</code>), the media player timeline will also have small gaps between fragments in some places, and will overwrite frames in other places. Gaps in the media player timeline can cause playback to stall and overlaps can cause playback to be jittery. When there are discontinuity flags between fragments, the media player is expected to reset the timeline, resulting in the next fragment being played immediately after the previous fragment. </p> <p>The following modes are supported:</p> <ul> <li> <p> <code>ALWAYS</code>: a discontinuity marker is placed between every fragment in the HLS media playlist. It is recommended to use a value of <code>ALWAYS</code> if the fragment timestamps are not accurate.</p> </li> <li> <p> <code>NEVER</code>: no discontinuity markers are placed anywhere. It is recommended to use a value of <code>NEVER</code> to ensure the media player timeline most accurately maps to the producer timestamps. </p> </li> <li> <p> <code>ON_DISCONTINUITY</code>: a discontinuity marker is placed between fragments that have a gap or overlap of more than 50 milliseconds. For most playback scenarios, it is recommended to use a value of <code>ON_DISCONTINUITY</code> so that the media player timeline is only reset when there is a significant issue with the media timeline (e.g. a missing fragment).</p> </li> </ul> <p>The default is <code>ALWAYS</code> when <a>HLSFragmentSelector</a> is set to <code>SERVER_TIMESTAMP</code>, and <code>NEVER</code> when it is set to <code>PRODUCER_TIMESTAMP</code>.</p>|
|» DisplayFragmentTimestamp|body|string|false|<p>Specifies when the fragment start timestamps should be included in the HLS media playlist. Typically, media players report the playhead position as a time relative to the start of the first fragment in the playback session. However, when the start timestamps are included in the HLS media playlist, some media players might report the current playhead as an absolute time based on the fragment timestamps. This can be useful for creating a playback experience that shows viewers the wall-clock time of the media.</p> <p>The default is <code>NEVER</code>. When <a>HLSFragmentSelector</a> is <code>SERVER_TIMESTAMP</code>, the timestamps will be the server start timestamps. Similarly, when <a>HLSFragmentSelector</a> is <code>PRODUCER_TIMESTAMP</code>, the timestamps will be the producer start timestamps. </p>|
|» Expires|body|integer|false|<p>The time in seconds until the requested session expires. This value can be between 300 (5 minutes) and 43200 (12 hours).</p> <p>When a session expires, no new calls to <code>GetHLSMasterPlaylist</code>, <code>GetHLSMediaPlaylist</code>, <code>GetMP4InitFragment</code>, <code>GetMP4MediaFragment</code>, or <code>GetTSFragment</code> can be made for that session.</p> <p>The default is 300 (5 minutes).</p>|
|» MaxMediaPlaylistFragmentResults|body|integer|false|<p>The maximum number of fragments that are returned in the HLS media playlists.</p> <p>When the <code>PlaybackMode</code> is <code>LIVE</code>, the most recent fragments are returned up to this value. When the <code>PlaybackMode</code> is <code>ON_DEMAND</code>, the oldest fragments are returned, up to this maximum number.</p> <p>When there are a higher number of fragments available in a live HLS media playlist, video players often buffer content before starting playback. Increasing the buffer size increases the playback latency, but it decreases the likelihood that rebuffering will occur during playback. We recommend that a live HLS media playlist have a minimum of 3 fragments and a maximum of 10 fragments.</p> <p>The default is 5 fragments if <code>PlaybackMode</code> is <code>LIVE</code> or <code>LIVE_REPLAY</code>, and 1,000 if <code>PlaybackMode</code> is <code>ON_DEMAND</code>. </p> <p>The maximum value of 5,000 fragments corresponds to more than 80 minutes of video on streams with 1-second fragments, and more than 13 hours of video on streams with 10-second fragments.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PlaybackMode|LIVE|
|» PlaybackMode|LIVE_REPLAY|
|» PlaybackMode|ON_DEMAND|
|» ContainerFormat|FRAGMENTED_MP4|
|» ContainerFormat|MPEG_TS|
|» DiscontinuityMode|ALWAYS|
|» DiscontinuityMode|NEVER|
|» DiscontinuityMode|ON_DISCONTINUITY|
|» DisplayFragmentTimestamp|ALWAYS|
|» DisplayFragmentTimestamp|NEVER|

> Example responses

> 200 Response

```json
{
  "HLSStreamingSessionURL": {}
}
```

> 480 Response

```json
null
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

<h3 id="gethlsstreamingsessionurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetHLSStreamingSessionURLOutput](#schemagethlsstreamingsessionurloutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UnsupportedStreamMediaTypeException|[UnsupportedStreamMediaTypeException](#schemaunsupportedstreammediatypeexception)|
|485|485|NoDataRetentionException|[NoDataRetentionException](#schemanodataretentionexception)|
|486|486|MissingCodecPrivateDataException|[MissingCodecPrivateDataException](#schemamissingcodecprivatedataexception)|
|487|487|InvalidCodecPrivateDataException|[InvalidCodecPrivateDataException](#schemainvalidcodecprivatedataexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetImages

<a id="opIdGetImages"></a>

> Code samples

```bash
curl https://kinesis-video-archived-media.us-east-1.amazonaws.com/getImages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamName": "string",
    "StreamARN": "string",
    "ImageSelectorType": "PRODUCER_TIMESTAMP",
    "StartTimestamp": "1970-01-01T00:00:00Z",
    "EndTimestamp": "1970-01-01T00:00:00Z",
    "SamplingInterval": 3000,
    "Format": "JPEG",
    "FormatConfig": {
      "property1": "string",
      "property2": "string"
    },
    "WidthPixels": 1,
    "HeightPixels": 1,
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /getImages`

Retrieves a list of Images corresponding to each timestamp for a given time range, sampling interval, and image format configuration.

> Body parameter

```json
{
  "StreamName": "string",
  "StreamARN": "string",
  "ImageSelectorType": "PRODUCER_TIMESTAMP",
  "StartTimestamp": "1970-01-01T00:00:00Z",
  "EndTimestamp": "1970-01-01T00:00:00Z",
  "SamplingInterval": 3000,
  "Format": "JPEG",
  "FormatConfig": {
    "property1": "string",
    "property2": "string"
  },
  "WidthPixels": 1,
  "HeightPixels": 1,
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="getimages-parameters">Parameters</h3>

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
|» StreamName|body|string|false|The name of the stream from which to retrieve the images. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.|
|» StreamARN|body|string|false|The Amazon Resource Name (ARN) of the stream from which to retrieve the images. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.|
|» ImageSelectorType|body|string|true|The origin of the Server or Producer timestamps to use to generate the images.|
|» StartTimestamp|body|string(date-time)|true|The starting point from which the images should be generated. This <code>StartTimestamp</code> must be within an inclusive range of timestamps for an image to be returned.|
|» EndTimestamp|body|string(date-time)|true|The end timestamp for the range of images to be generated.|
|» SamplingInterval|body|integer|true|<p>The time interval in milliseconds (ms) at which the images need to be generated from the stream. The minimum value that can be provided is 3000 ms. If the timestamp range is less than the sampling interval, the Image from the <code>startTimestamp</code> will be returned if available. </p> <note> <p>The minimum value of 3000 ms is a soft limit. If needed, a lower sampling frequency can be requested.</p> </note>|
|» Format|body|string|true|The format that will be used to encode the image.|
|» FormatConfig|body|object|false|The list of a key-value pair structure that contains extra parameters that can be applied when the image is generated. The <code>FormatConfig</code> key is the <code>JPEGQuality</code>, which indicates the JPEG quality key to be used to generate the image. The <code>FormatConfig</code> value accepts ints from 1 to 100. If the value is 1, the image will be generated with less quality and the best compression. If the value is 100, the image will be generated with the best quality and less compression. If no value is provided, the default value of the <code>JPEGQuality</code> key will be set to 80.|
|» » **additionalProperties**|body|[FormatConfigValue](#schemaformatconfigvalue)|false|none|
|» WidthPixels|body|integer|false|The width of the output image that is used in conjunction with the <code>HeightPixels</code> parameter. When both <code>WidthPixels</code> and <code>HeightPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the <code>WidthPixels</code> parameter is provided or if only the <code>HeightPixels</code> is provided, a <code>ValidationException</code> will be thrown. If neither parameter is provided, the original image size from the stream will be returned.|
|» HeightPixels|body|integer|false|The height of the output image that is used in conjunction with the <code>WidthPixels</code> parameter. When both <code>HeightPixels</code> and <code>WidthPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the <code>HeightPixels</code> parameter is provided, its original aspect ratio will be used to calculate the <code>WidthPixels</code> ratio. If neither parameter is provided, the original image size will be returned.|
|» MaxResults|body|integer|false|<p>The maximum number of images to be returned by the API. </p> <note> <p>The default limit is 100 images per API response. The additional results will be paginated. </p> </note>|
|» NextToken|body|string|false|A token that specifies where to start paginating the next set of Images. This is the <code>GetImages:NextToken</code> from a previously truncated response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ImageSelectorType|PRODUCER_TIMESTAMP|
|» ImageSelectorType|SERVER_TIMESTAMP|
|» Format|JPEG|
|» Format|PNG|

> Example responses

> 200 Response

```json
{
  "Images": {},
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

<h3 id="getimages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetImagesOutput](#schemagetimagesoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMediaForFragmentList

<a id="opIdGetMediaForFragmentList"></a>

> Code samples

```bash
curl https://kinesis-video-archived-media.us-east-1.amazonaws.com/getMediaForFragmentList \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamName": "string",
    "StreamARN": "string",
    "Fragments": [
      "string"
    ]
  }'
```

`POST /getMediaForFragmentList`

<p>Gets media for a list of fragments (specified by fragment number) from the archived data in an Amazon Kinesis video stream.</p> <note> <p>You must first call the <code>GetDataEndpoint</code> API to get an endpoint. Then send the <code>GetMediaForFragmentList</code> requests to this endpoint using the <a href="https://docs.aws.amazon.com/cli/latest/reference/">--endpoint-url parameter</a>. </p> </note> <p>For limits, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p> <important> <p>If an error is thrown after invoking a Kinesis Video Streams archived media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: </p> <ul> <li> <p> <code>x-amz-ErrorType</code> HTTP header – contains a more specific error type in addition to what the HTTP status code provides. </p> </li> <li> <p> <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to AWS, the support team can better diagnose the problem if given the Request Id.</p> </li> </ul> <p>Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.</p> <p>For more information, see the <b>Errors</b> section at the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>. </p> </important>

> Body parameter

```json
{
  "StreamName": "string",
  "StreamARN": "string",
  "Fragments": [
    "string"
  ]
}
```

<h3 id="getmediaforfragmentlist-parameters">Parameters</h3>

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
|» StreamName|body|string|false|The name of the stream from which to retrieve fragment media. Specify either this parameter or the <code>StreamARN</code> parameter.|
|» StreamARN|body|string|false|The Amazon Resource Name (ARN) of the stream from which to retrieve fragment media. Specify either this parameter or the <code>StreamName</code> parameter.|
|» Fragments|body|[[FragmentNumberString](#schemafragmentnumberstring)]|true|A list of the numbers of fragments for which to retrieve media. You retrieve these values with <a>ListFragments</a>.|

> Example responses

> 200 Response

```json
{
  "Payload": {}
}
```

> 480 Response

```json
null
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

<h3 id="getmediaforfragmentlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMediaForFragmentListOutput](#schemagetmediaforfragmentlistoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFragments

<a id="opIdListFragments"></a>

> Code samples

```bash
curl https://kinesis-video-archived-media.us-east-1.amazonaws.com/listFragments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamName": "string",
    "StreamARN": "string",
    "MaxResults": 1,
    "NextToken": "string",
    "FragmentSelector": {
      "FragmentSelectorType": {},
      "TimestampRange": {
        "StartTimestamp": {},
        "EndTimestamp": {}
      }
    }
  }'
```

`POST /listFragments`

<p>Returns a list of <a>Fragment</a> objects from the specified stream and timestamp range within the archived data.</p> <p>Listing fragments is eventually consistent. This means that even if the producer receives an acknowledgment that a fragment is persisted, the result might not be returned immediately from a request to <code>ListFragments</code>. However, results are typically available in less than one second.</p> <note> <p>You must first call the <code>GetDataEndpoint</code> API to get an endpoint. Then send the <code>ListFragments</code> requests to this endpoint using the <a href="https://docs.aws.amazon.com/cli/latest/reference/">--endpoint-url parameter</a>. </p> </note> <important> <p>If an error is thrown after invoking a Kinesis Video Streams archived media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: </p> <ul> <li> <p> <code>x-amz-ErrorType</code> HTTP header – contains a more specific error type in addition to what the HTTP status code provides. </p> </li> <li> <p> <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to AWS, the support team can better diagnose the problem if given the Request Id.</p> </li> </ul> <p>Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.</p> <p>For more information, see the <b>Errors</b> section at the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>. </p> </important>

> Body parameter

```json
{
  "StreamName": "string",
  "StreamARN": "string",
  "MaxResults": 1,
  "NextToken": "string",
  "FragmentSelector": {
    "FragmentSelectorType": {},
    "TimestampRange": {
      "StartTimestamp": {},
      "EndTimestamp": {}
    }
  }
}
```

<h3 id="listfragments-parameters">Parameters</h3>

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
|» StreamName|body|string|false|The name of the stream from which to retrieve a fragment list. Specify either this parameter or the <code>StreamARN</code> parameter.|
|» StreamARN|body|string|false|The Amazon Resource Name (ARN) of the stream from which to retrieve a fragment list. Specify either this parameter or the <code>StreamName</code> parameter.|
|» MaxResults|body|integer|false|The total number of fragments to return. If the total number of fragments available is more than the value specified in <code>max-results</code>, then a <a>ListFragmentsOutput$NextToken</a> is provided in the output that you can use to resume pagination.|
|» NextToken|body|string|false|A token to specify where to start paginating. This is the <a>ListFragmentsOutput$NextToken</a> from a previously truncated response.|
|» FragmentSelector|body|object|false|<p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, if a stream contains fragments with the following start timestamps: </p> <ul> <li> <p>00:00:00</p> </li> <li> <p>00:00:02</p> </li> <li> <p>00:00:04</p> </li> <li> <p>00:00:06</p> </li> </ul> <p> A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04. </p>|
|» » FragmentSelectorType|body|object|false|none|
|» » TimestampRange|body|object|false|none|
|» » » StartTimestamp|body|object|true|none|
|» » » EndTimestamp|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "Fragments": {},
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

<h3 id="listfragments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFragmentsOutput](#schemalistfragmentsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_GetClipOutput">GetClipOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetclipoutput"></a>
<a id="schema_GetClipOutput"></a>
<a id="tocSgetclipoutput"></a>
<a id="tocsgetclipoutput"></a>

```json
{
  "Payload": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Payload|object|false|none|none|

<h2 id="tocS_ClipFragmentSelectorType">ClipFragmentSelectorType</h2>
<!-- backwards compatibility -->
<a id="schemaclipfragmentselectortype"></a>
<a id="schema_ClipFragmentSelectorType"></a>
<a id="tocSclipfragmentselectortype"></a>
<a id="tocsclipfragmentselectortype"></a>

```json
"PRODUCER_TIMESTAMP"
```

<h2 id="tocS_ClipTimestampRange">ClipTimestampRange</h2>
<!-- backwards compatibility -->
<a id="schemacliptimestamprange"></a>
<a id="schema_ClipTimestampRange"></a>
<a id="tocScliptimestamprange"></a>
<a id="tocscliptimestamprange"></a>

```json
{
  "StartTimestamp": {},
  "EndTimestamp": {}
}
```

The range of timestamps for which to return fragments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTimestamp|object|true|none|none|
|EndTimestamp|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

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

<h2 id="tocS_NotAuthorizedException">NotAuthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemanotauthorizedexception"></a>
<a id="schema_NotAuthorizedException"></a>
<a id="tocSnotauthorizedexception"></a>
<a id="tocsnotauthorizedexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedStreamMediaTypeException">UnsupportedStreamMediaTypeException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedstreammediatypeexception"></a>
<a id="schema_UnsupportedStreamMediaTypeException"></a>
<a id="tocSunsupportedstreammediatypeexception"></a>
<a id="tocsunsupportedstreammediatypeexception"></a>

```json
null
```

<h2 id="tocS_MissingCodecPrivateDataException">MissingCodecPrivateDataException</h2>
<!-- backwards compatibility -->
<a id="schemamissingcodecprivatedataexception"></a>
<a id="schema_MissingCodecPrivateDataException"></a>
<a id="tocSmissingcodecprivatedataexception"></a>
<a id="tocsmissingcodecprivatedataexception"></a>

```json
null
```

<h2 id="tocS_InvalidCodecPrivateDataException">InvalidCodecPrivateDataException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcodecprivatedataexception"></a>
<a id="schema_InvalidCodecPrivateDataException"></a>
<a id="tocSinvalidcodecprivatedataexception"></a>
<a id="tocsinvalidcodecprivatedataexception"></a>

```json
null
```

<h2 id="tocS_InvalidMediaFrameException">InvalidMediaFrameException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidmediaframeexception"></a>
<a id="schema_InvalidMediaFrameException"></a>
<a id="tocSinvalidmediaframeexception"></a>
<a id="tocsinvalidmediaframeexception"></a>

```json
null
```

<h2 id="tocS_NoDataRetentionException">NoDataRetentionException</h2>
<!-- backwards compatibility -->
<a id="schemanodataretentionexception"></a>
<a id="schema_NoDataRetentionException"></a>
<a id="tocSnodataretentionexception"></a>
<a id="tocsnodataretentionexception"></a>

```json
null
```

<h2 id="tocS_GetDASHStreamingSessionURLOutput">GetDASHStreamingSessionURLOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetdashstreamingsessionurloutput"></a>
<a id="schema_GetDASHStreamingSessionURLOutput"></a>
<a id="tocSgetdashstreamingsessionurloutput"></a>
<a id="tocsgetdashstreamingsessionurloutput"></a>

```json
{
  "DASHStreamingSessionURL": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DASHStreamingSessionURL|object|false|none|none|

<h2 id="tocS_DASHFragmentSelectorType">DASHFragmentSelectorType</h2>
<!-- backwards compatibility -->
<a id="schemadashfragmentselectortype"></a>
<a id="schema_DASHFragmentSelectorType"></a>
<a id="tocSdashfragmentselectortype"></a>
<a id="tocsdashfragmentselectortype"></a>

```json
"PRODUCER_TIMESTAMP"
```

<h2 id="tocS_DASHTimestampRange">DASHTimestampRange</h2>
<!-- backwards compatibility -->
<a id="schemadashtimestamprange"></a>
<a id="schema_DASHTimestampRange"></a>
<a id="tocSdashtimestamprange"></a>
<a id="tocsdashtimestamprange"></a>

```json
{
  "StartTimestamp": {},
  "EndTimestamp": {}
}
```

<p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p> <p>The values in <code>DASHimestampRange</code> are inclusive. Fragments that start exactly at or after the start time are included in the session. Fragments that start before the start time and continue past it are not included in the session.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTimestamp|object|false|none|none|
|EndTimestamp|object|false|none|none|

<h2 id="tocS_GetHLSStreamingSessionURLOutput">GetHLSStreamingSessionURLOutput</h2>
<!-- backwards compatibility -->
<a id="schemagethlsstreamingsessionurloutput"></a>
<a id="schema_GetHLSStreamingSessionURLOutput"></a>
<a id="tocSgethlsstreamingsessionurloutput"></a>
<a id="tocsgethlsstreamingsessionurloutput"></a>

```json
{
  "HLSStreamingSessionURL": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HLSStreamingSessionURL|object|false|none|none|

<h2 id="tocS_HLSFragmentSelectorType">HLSFragmentSelectorType</h2>
<!-- backwards compatibility -->
<a id="schemahlsfragmentselectortype"></a>
<a id="schema_HLSFragmentSelectorType"></a>
<a id="tocShlsfragmentselectortype"></a>
<a id="tocshlsfragmentselectortype"></a>

```json
"PRODUCER_TIMESTAMP"
```

<h2 id="tocS_HLSTimestampRange">HLSTimestampRange</h2>
<!-- backwards compatibility -->
<a id="schemahlstimestamprange"></a>
<a id="schema_HLSTimestampRange"></a>
<a id="tocShlstimestamprange"></a>
<a id="tocshlstimestamprange"></a>

```json
{
  "StartTimestamp": {},
  "EndTimestamp": {}
}
```

<p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTimestamp|object|false|none|none|
|EndTimestamp|object|false|none|none|

<h2 id="tocS_GetImagesOutput">GetImagesOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetimagesoutput"></a>
<a id="schema_GetImagesOutput"></a>
<a id="tocSgetimagesoutput"></a>
<a id="tocsgetimagesoutput"></a>

```json
{
  "Images": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Images|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_FormatConfigValue">FormatConfigValue</h2>
<!-- backwards compatibility -->
<a id="schemaformatconfigvalue"></a>
<a id="schema_FormatConfigValue"></a>
<a id="tocSformatconfigvalue"></a>
<a id="tocsformatconfigvalue"></a>

```json
"string"
```

<h2 id="tocS_GetMediaForFragmentListOutput">GetMediaForFragmentListOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetmediaforfragmentlistoutput"></a>
<a id="schema_GetMediaForFragmentListOutput"></a>
<a id="tocSgetmediaforfragmentlistoutput"></a>
<a id="tocsgetmediaforfragmentlistoutput"></a>

```json
{
  "Payload": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Payload|object|false|none|none|

<h2 id="tocS_FragmentNumberString">FragmentNumberString</h2>
<!-- backwards compatibility -->
<a id="schemafragmentnumberstring"></a>
<a id="schema_FragmentNumberString"></a>
<a id="tocSfragmentnumberstring"></a>
<a id="tocsfragmentnumberstring"></a>

```json
"string"
```

<h2 id="tocS_ListFragmentsOutput">ListFragmentsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistfragmentsoutput"></a>
<a id="schema_ListFragmentsOutput"></a>
<a id="tocSlistfragmentsoutput"></a>
<a id="tocslistfragmentsoutput"></a>

```json
{
  "Fragments": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Fragments|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_FragmentSelectorType">FragmentSelectorType</h2>
<!-- backwards compatibility -->
<a id="schemafragmentselectortype"></a>
<a id="schema_FragmentSelectorType"></a>
<a id="tocSfragmentselectortype"></a>
<a id="tocsfragmentselectortype"></a>

```json
"PRODUCER_TIMESTAMP"
```

<h2 id="tocS_TimestampRange">TimestampRange</h2>
<!-- backwards compatibility -->
<a id="schematimestamprange"></a>
<a id="schema_TimestampRange"></a>
<a id="tocStimestamprange"></a>
<a id="tocstimestamprange"></a>

```json
{
  "StartTimestamp": {},
  "EndTimestamp": {}
}
```

The range of timestamps for which to return fragments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTimestamp|object|true|none|none|
|EndTimestamp|object|true|none|none|

<h2 id="tocS_ClipFragmentSelector">ClipFragmentSelector</h2>
<!-- backwards compatibility -->
<a id="schemaclipfragmentselector"></a>
<a id="schema_ClipFragmentSelector"></a>
<a id="tocSclipfragmentselector"></a>
<a id="tocsclipfragmentselector"></a>

```json
{
  "FragmentSelectorType": {},
  "TimestampRange": {
    "StartTimestamp": {},
    "EndTimestamp": {}
  }
}
```

<p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the clip will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FragmentSelectorType|object|true|none|none|
|TimestampRange|object|true|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ContainerFormat">ContainerFormat</h2>
<!-- backwards compatibility -->
<a id="schemacontainerformat"></a>
<a id="schema_ContainerFormat"></a>
<a id="tocScontainerformat"></a>
<a id="tocscontainerformat"></a>

```json
"FRAGMENTED_MP4"
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

<h2 id="tocS_DASHDisplayFragmentNumber">DASHDisplayFragmentNumber</h2>
<!-- backwards compatibility -->
<a id="schemadashdisplayfragmentnumber"></a>
<a id="schema_DASHDisplayFragmentNumber"></a>
<a id="tocSdashdisplayfragmentnumber"></a>
<a id="tocsdashdisplayfragmentnumber"></a>

```json
"ALWAYS"
```

<h2 id="tocS_DASHDisplayFragmentTimestamp">DASHDisplayFragmentTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemadashdisplayfragmenttimestamp"></a>
<a id="schema_DASHDisplayFragmentTimestamp"></a>
<a id="tocSdashdisplayfragmenttimestamp"></a>
<a id="tocsdashdisplayfragmenttimestamp"></a>

```json
"ALWAYS"
```

<h2 id="tocS_DASHFragmentSelector">DASHFragmentSelector</h2>
<!-- backwards compatibility -->
<a id="schemadashfragmentselector"></a>
<a id="schema_DASHFragmentSelector"></a>
<a id="tocSdashfragmentselector"></a>
<a id="tocsdashfragmentselector"></a>

```json
{
  "FragmentSelectorType": {},
  "TimestampRange": {
    "StartTimestamp": {},
    "EndTimestamp": {}
  }
}
```

Contains the range of timestamps for the requested media, and the source of the timestamps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FragmentSelectorType|object|false|none|none|
|TimestampRange|object|false|none|none|

<h2 id="tocS_DASHMaxResults">DASHMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemadashmaxresults"></a>
<a id="schema_DASHMaxResults"></a>
<a id="tocSdashmaxresults"></a>
<a id="tocsdashmaxresults"></a>

```json
1
```

<h2 id="tocS_DASHPlaybackMode">DASHPlaybackMode</h2>
<!-- backwards compatibility -->
<a id="schemadashplaybackmode"></a>
<a id="schema_DASHPlaybackMode"></a>
<a id="tocSdashplaybackmode"></a>
<a id="tocsdashplaybackmode"></a>

```json
"LIVE"
```

<h2 id="tocS_DASHStreamingSessionURL">DASHStreamingSessionURL</h2>
<!-- backwards compatibility -->
<a id="schemadashstreamingsessionurl"></a>
<a id="schema_DASHStreamingSessionURL"></a>
<a id="tocSdashstreamingsessionurl"></a>
<a id="tocsdashstreamingsessionurl"></a>

```json
"string"
```

<h2 id="tocS_Expires">Expires</h2>
<!-- backwards compatibility -->
<a id="schemaexpires"></a>
<a id="schema_Expires"></a>
<a id="tocSexpires"></a>
<a id="tocsexpires"></a>

```json
300
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

<h2 id="tocS_FormatConfigKey">FormatConfigKey</h2>
<!-- backwards compatibility -->
<a id="schemaformatconfigkey"></a>
<a id="schema_FormatConfigKey"></a>
<a id="tocSformatconfigkey"></a>
<a id="tocsformatconfigkey"></a>

```json
"JPEGQuality"
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

<h2 id="tocS_Fragment">Fragment</h2>
<!-- backwards compatibility -->
<a id="schemafragment"></a>
<a id="schema_Fragment"></a>
<a id="tocSfragment"></a>
<a id="tocsfragment"></a>

```json
{
  "FragmentNumber": {},
  "FragmentSizeInBytes": {},
  "ProducerTimestamp": {},
  "ServerTimestamp": {},
  "FragmentLengthInMilliseconds": {}
}
```

Represents a segment of video or other time-delimited data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FragmentNumber|object|false|none|none|
|FragmentSizeInBytes|object|false|none|none|
|ProducerTimestamp|object|false|none|none|
|ServerTimestamp|object|false|none|none|
|FragmentLengthInMilliseconds|object|false|none|none|

<h2 id="tocS_FragmentList">FragmentList</h2>
<!-- backwards compatibility -->
<a id="schemafragmentlist"></a>
<a id="schema_FragmentList"></a>
<a id="tocSfragmentlist"></a>
<a id="tocsfragmentlist"></a>

```json
[
  {
    "FragmentNumber": {},
    "FragmentSizeInBytes": {},
    "ProducerTimestamp": {},
    "ServerTimestamp": {},
    "FragmentLengthInMilliseconds": {}
  }
]
```

<h2 id="tocS_FragmentNumberList">FragmentNumberList</h2>
<!-- backwards compatibility -->
<a id="schemafragmentnumberlist"></a>
<a id="schema_FragmentNumberList"></a>
<a id="tocSfragmentnumberlist"></a>
<a id="tocsfragmentnumberlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FragmentSelector">FragmentSelector</h2>
<!-- backwards compatibility -->
<a id="schemafragmentselector"></a>
<a id="schema_FragmentSelector"></a>
<a id="tocSfragmentselector"></a>
<a id="tocsfragmentselector"></a>

```json
{
  "FragmentSelectorType": {},
  "TimestampRange": {
    "StartTimestamp": {},
    "EndTimestamp": {}
  }
}
```

<p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, if a stream contains fragments with the following start timestamps: </p> <ul> <li> <p>00:00:00</p> </li> <li> <p>00:00:02</p> </li> <li> <p>00:00:04</p> </li> <li> <p>00:00:06</p> </li> </ul> <p> A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FragmentSelectorType|object|true|none|none|
|TimestampRange|object|true|none|none|

<h2 id="tocS_StreamName">StreamName</h2>
<!-- backwards compatibility -->
<a id="schemastreamname"></a>
<a id="schema_StreamName"></a>
<a id="tocSstreamname"></a>
<a id="tocsstreamname"></a>

```json
"string"
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

<h2 id="tocS_GetClipInput">GetClipInput</h2>
<!-- backwards compatibility -->
<a id="schemagetclipinput"></a>
<a id="schema_GetClipInput"></a>
<a id="tocSgetclipinput"></a>
<a id="tocsgetclipinput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "ClipFragmentSelector": {
    "FragmentSelectorType": {},
    "TimestampRange": {
      "StartTimestamp": {},
      "EndTimestamp": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|
|ClipFragmentSelector|object|true|none|none|

<h2 id="tocS_Payload">Payload</h2>
<!-- backwards compatibility -->
<a id="schemapayload"></a>
<a id="schema_Payload"></a>
<a id="tocSpayload"></a>
<a id="tocspayload"></a>

```json
"string"
```

<h2 id="tocS_GetDASHStreamingSessionURLInput">GetDASHStreamingSessionURLInput</h2>
<!-- backwards compatibility -->
<a id="schemagetdashstreamingsessionurlinput"></a>
<a id="schema_GetDASHStreamingSessionURLInput"></a>
<a id="tocSgetdashstreamingsessionurlinput"></a>
<a id="tocsgetdashstreamingsessionurlinput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "PlaybackMode": {},
  "DisplayFragmentTimestamp": {},
  "DisplayFragmentNumber": {},
  "DASHFragmentSelector": {
    "FragmentSelectorType": {},
    "TimestampRange": {
      "StartTimestamp": {},
      "EndTimestamp": {}
    }
  },
  "Expires": {},
  "MaxManifestFragmentResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|
|PlaybackMode|object|false|none|none|
|DisplayFragmentTimestamp|object|false|none|none|
|DisplayFragmentNumber|object|false|none|none|
|DASHFragmentSelector|object|false|none|none|
|Expires|object|false|none|none|
|MaxManifestFragmentResults|object|false|none|none|

<h2 id="tocS_HLSPlaybackMode">HLSPlaybackMode</h2>
<!-- backwards compatibility -->
<a id="schemahlsplaybackmode"></a>
<a id="schema_HLSPlaybackMode"></a>
<a id="tocShlsplaybackmode"></a>
<a id="tocshlsplaybackmode"></a>

```json
"LIVE"
```

<h2 id="tocS_HLSFragmentSelector">HLSFragmentSelector</h2>
<!-- backwards compatibility -->
<a id="schemahlsfragmentselector"></a>
<a id="schema_HLSFragmentSelector"></a>
<a id="tocShlsfragmentselector"></a>
<a id="tocshlsfragmentselector"></a>

```json
{
  "FragmentSelectorType": {},
  "TimestampRange": {
    "StartTimestamp": {},
    "EndTimestamp": {}
  }
}
```

Contains the range of timestamps for the requested media, and the source of the timestamps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FragmentSelectorType|object|false|none|none|
|TimestampRange|object|false|none|none|

<h2 id="tocS_HLSDiscontinuityMode">HLSDiscontinuityMode</h2>
<!-- backwards compatibility -->
<a id="schemahlsdiscontinuitymode"></a>
<a id="schema_HLSDiscontinuityMode"></a>
<a id="tocShlsdiscontinuitymode"></a>
<a id="tocshlsdiscontinuitymode"></a>

```json
"ALWAYS"
```

<h2 id="tocS_HLSDisplayFragmentTimestamp">HLSDisplayFragmentTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemahlsdisplayfragmenttimestamp"></a>
<a id="schema_HLSDisplayFragmentTimestamp"></a>
<a id="tocShlsdisplayfragmenttimestamp"></a>
<a id="tocshlsdisplayfragmenttimestamp"></a>

```json
"ALWAYS"
```

<h2 id="tocS_HLSMaxResults">HLSMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemahlsmaxresults"></a>
<a id="schema_HLSMaxResults"></a>
<a id="tocShlsmaxresults"></a>
<a id="tocshlsmaxresults"></a>

```json
1
```

<h2 id="tocS_GetHLSStreamingSessionURLInput">GetHLSStreamingSessionURLInput</h2>
<!-- backwards compatibility -->
<a id="schemagethlsstreamingsessionurlinput"></a>
<a id="schema_GetHLSStreamingSessionURLInput"></a>
<a id="tocSgethlsstreamingsessionurlinput"></a>
<a id="tocsgethlsstreamingsessionurlinput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "PlaybackMode": {},
  "HLSFragmentSelector": {
    "FragmentSelectorType": {},
    "TimestampRange": {
      "StartTimestamp": {},
      "EndTimestamp": {}
    }
  },
  "ContainerFormat": {},
  "DiscontinuityMode": {},
  "DisplayFragmentTimestamp": {},
  "Expires": {},
  "MaxMediaPlaylistFragmentResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|
|PlaybackMode|object|false|none|none|
|HLSFragmentSelector|object|false|none|none|
|ContainerFormat|object|false|none|none|
|DiscontinuityMode|object|false|none|none|
|DisplayFragmentTimestamp|object|false|none|none|
|Expires|object|false|none|none|
|MaxMediaPlaylistFragmentResults|object|false|none|none|

<h2 id="tocS_HLSStreamingSessionURL">HLSStreamingSessionURL</h2>
<!-- backwards compatibility -->
<a id="schemahlsstreamingsessionurl"></a>
<a id="schema_HLSStreamingSessionURL"></a>
<a id="tocShlsstreamingsessionurl"></a>
<a id="tocshlsstreamingsessionurl"></a>

```json
"string"
```

<h2 id="tocS_ImageSelectorType">ImageSelectorType</h2>
<!-- backwards compatibility -->
<a id="schemaimageselectortype"></a>
<a id="schema_ImageSelectorType"></a>
<a id="tocSimageselectortype"></a>
<a id="tocsimageselectortype"></a>

```json
"PRODUCER_TIMESTAMP"
```

<h2 id="tocS_SamplingInterval">SamplingInterval</h2>
<!-- backwards compatibility -->
<a id="schemasamplinginterval"></a>
<a id="schema_SamplingInterval"></a>
<a id="tocSsamplinginterval"></a>
<a id="tocssamplinginterval"></a>

```json
3000
```

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

<h2 id="tocS_GetImagesMaxResults">GetImagesMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemagetimagesmaxresults"></a>
<a id="schema_GetImagesMaxResults"></a>
<a id="tocSgetimagesmaxresults"></a>
<a id="tocsgetimagesmaxresults"></a>

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

<h2 id="tocS_GetImagesInput">GetImagesInput</h2>
<!-- backwards compatibility -->
<a id="schemagetimagesinput"></a>
<a id="schema_GetImagesInput"></a>
<a id="tocSgetimagesinput"></a>
<a id="tocsgetimagesinput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "ImageSelectorType": {},
  "StartTimestamp": {},
  "EndTimestamp": {},
  "SamplingInterval": {},
  "Format": {},
  "FormatConfig": {
    "property1": "string",
    "property2": "string"
  },
  "WidthPixels": {},
  "HeightPixels": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|
|ImageSelectorType|object|true|none|none|
|StartTimestamp|object|true|none|none|
|EndTimestamp|object|true|none|none|
|SamplingInterval|object|true|none|none|
|Format|object|true|none|none|
|FormatConfig|object|false|none|none|
|WidthPixels|object|false|none|none|
|HeightPixels|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_Images">Images</h2>
<!-- backwards compatibility -->
<a id="schemaimages"></a>
<a id="schema_Images"></a>
<a id="tocSimages"></a>
<a id="tocsimages"></a>

```json
[
  {
    "TimeStamp": {},
    "Error": {},
    "ImageContent": {}
  }
]
```

<h2 id="tocS_GetMediaForFragmentListInput">GetMediaForFragmentListInput</h2>
<!-- backwards compatibility -->
<a id="schemagetmediaforfragmentlistinput"></a>
<a id="schema_GetMediaForFragmentListInput"></a>
<a id="tocSgetmediaforfragmentlistinput"></a>
<a id="tocsgetmediaforfragmentlistinput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "Fragments": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|
|Fragments|object|true|none|none|

<h2 id="tocS_ImageError">ImageError</h2>
<!-- backwards compatibility -->
<a id="schemaimageerror"></a>
<a id="schema_ImageError"></a>
<a id="tocSimageerror"></a>
<a id="tocsimageerror"></a>

```json
"NO_MEDIA"
```

<h2 id="tocS_ImageContent">ImageContent</h2>
<!-- backwards compatibility -->
<a id="schemaimagecontent"></a>
<a id="schema_ImageContent"></a>
<a id="tocSimagecontent"></a>
<a id="tocsimagecontent"></a>

```json
"string"
```

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "TimeStamp": {},
  "Error": {},
  "ImageContent": {}
}
```

A structure that contains the <code>Timestamp</code>, <code>Error</code>, and <code>ImageContent</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeStamp|object|false|none|none|
|Error|object|false|none|none|
|ImageContent|object|false|none|none|

<h2 id="tocS_ListFragmentsMaxResults">ListFragmentsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistfragmentsmaxresults"></a>
<a id="schema_ListFragmentsMaxResults"></a>
<a id="tocSlistfragmentsmaxresults"></a>
<a id="tocslistfragmentsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListFragmentsInput">ListFragmentsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistfragmentsinput"></a>
<a id="schema_ListFragmentsInput"></a>
<a id="tocSlistfragmentsinput"></a>
<a id="tocslistfragmentsinput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "MaxResults": {},
  "NextToken": {},
  "FragmentSelector": {
    "FragmentSelectorType": {},
    "TimestampRange": {
      "StartTimestamp": {},
      "EndTimestamp": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|FragmentSelector|object|false|none|none|
