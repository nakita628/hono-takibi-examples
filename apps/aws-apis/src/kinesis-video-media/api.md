<h1 id="amazon-kinesis-video-streams-media">Amazon Kinesis Video Streams Media v2017-09-30</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p/>

Base URLs:

* <a href="http://kinesisvideo.us-east-1.amazonaws.com">http://kinesisvideo.us-east-1.amazonaws.com</a> - The Kinesis Video Media multi-region endpoint

* <a href="https://kinesisvideo.us-east-1.amazonaws.com">https://kinesisvideo.us-east-1.amazonaws.com</a> - The Kinesis Video Media multi-region endpoint

* <a href="http://kinesisvideo.cn-north-1.amazonaws.com.cn">http://kinesisvideo.cn-north-1.amazonaws.com.cn</a> - The Kinesis Video Media endpoint for China (Beijing) and China (Ningxia)

* <a href="https://kinesisvideo.cn-north-1.amazonaws.com.cn">https://kinesisvideo.cn-north-1.amazonaws.com.cn</a> - The Kinesis Video Media endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/kinesisvideo/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-kinesis-video-streams-media-default">Default</h1>

## GetMedia

<a id="opIdGetMedia"></a>

> Code samples

```bash
curl https://kinesis-video-media.us-east-1.amazonaws.com/getMedia \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamName": "string",
    "StreamARN": "string",
    "StartSelector": {
      "StartSelectorType": {},
      "AfterFragmentNumber": {},
      "StartTimestamp": {},
      "ContinuationToken": {}
    }
  }'
```

`POST /getMedia`

<p> Use this API to retrieve media content from a Kinesis video stream. In the request, you identify the stream name or stream Amazon Resource Name (ARN), and the starting chunk. Kinesis Video Streams then returns a stream of chunks in order by fragment number.</p> <note> <p>You must first call the <code>GetDataEndpoint</code> API to get an endpoint. Then send the <code>GetMedia</code> requests to this endpoint using the <a href="https://docs.aws.amazon.com/cli/latest/reference/">--endpoint-url parameter</a>. </p> </note> <p>When you put media data (fragments) on a stream, Kinesis Video Streams stores each incoming fragment and related metadata in what is called a "chunk." For more information, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_PutMedia.html">PutMedia</a>. The <code>GetMedia</code> API returns a stream of these chunks starting from the chunk that you specify in the request. </p> <p>The following limits apply when using the <code>GetMedia</code> API:</p> <ul> <li> <p>A client can call <code>GetMedia</code> up to five times per second per stream. </p> </li> <li> <p>Kinesis Video Streams sends media data at a rate of up to 25 megabytes per second (or 200 megabits per second) during a <code>GetMedia</code> session. </p> </li> </ul> <note> <p>If an error is thrown after invoking a Kinesis Video Streams media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: </p> <ul> <li> <p> <code>x-amz-ErrorType</code> HTTP header – contains a more specific error type in addition to what the HTTP status code provides. </p> </li> <li> <p> <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to AWS, the support team can better diagnose the problem if given the Request Id.</p> </li> </ul> <p>Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.</p> <p>For more information, see the <b>Errors</b> section at the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>. </p> </note>

> Body parameter

```json
{
  "StreamName": "string",
  "StreamARN": "string",
  "StartSelector": {
    "StartSelectorType": {},
    "AfterFragmentNumber": {},
    "StartTimestamp": {},
    "ContinuationToken": {}
  }
}
```

<h3 id="getmedia-parameters">Parameters</h3>

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
|» StreamName|body|string|false|The Kinesis video stream name from where you want to get the media content. If you don't specify the <code>streamName</code>, you must specify the <code>streamARN</code>.|
|» StreamARN|body|string|false|The ARN of the stream from where you want to get the media content. If you don't specify the <code>streamARN</code>, you must specify the <code>streamName</code>.|
|» StartSelector|body|object|true|<p>Identifies the chunk on the Kinesis video stream where you want the <code>GetMedia</code> API to start returning media data. You have the following options to identify the starting chunk: </p> <ul> <li> <p>Choose the latest (or oldest) chunk.</p> </li> <li> <p>Identify a specific chunk. You can identify a specific chunk either by providing a fragment number or timestamp (server or producer). </p> </li> <li> <p>Each chunk's metadata includes a continuation token as a Matroska (MKV) tag (<code>AWS_KINESISVIDEO_CONTINUATION_TOKEN</code>). If your previous <code>GetMedia</code> request terminated, you can use this tag value in your next <code>GetMedia</code> request. The API then starts returning chunks starting where the last API ended.</p> </li> </ul>|
|» » StartSelectorType|body|object|false|none|
|» » AfterFragmentNumber|body|object|false|none|
|» » StartTimestamp|body|object|false|none|
|» » ContinuationToken|body|object|false|none|

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

<h3 id="getmedia-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMediaOutput](#schemagetmediaoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|482|482|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|
|483|483|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|484|484|ConnectionLimitExceededException|[ConnectionLimitExceededException](#schemaconnectionlimitexceededexception)|
|485|485|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_GetMediaOutput">GetMediaOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetmediaoutput"></a>
<a id="schema_GetMediaOutput"></a>
<a id="tocSgetmediaoutput"></a>
<a id="tocsgetmediaoutput"></a>

```json
{
  "Payload": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Payload|object|false|none|none|

<h2 id="tocS_StartSelectorType">StartSelectorType</h2>
<!-- backwards compatibility -->
<a id="schemastartselectortype"></a>
<a id="schema_StartSelectorType"></a>
<a id="tocSstartselectortype"></a>
<a id="tocsstartselectortype"></a>

```json
"FRAGMENT_NUMBER"
```

<h2 id="tocS_FragmentNumberString">FragmentNumberString</h2>
<!-- backwards compatibility -->
<a id="schemafragmentnumberstring"></a>
<a id="schema_FragmentNumberString"></a>
<a id="tocSfragmentnumberstring"></a>
<a id="tocsfragmentnumberstring"></a>

```json
"string"
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

<h2 id="tocS_ContinuationToken">ContinuationToken</h2>
<!-- backwards compatibility -->
<a id="schemacontinuationtoken"></a>
<a id="schema_ContinuationToken"></a>
<a id="tocScontinuationtoken"></a>
<a id="tocscontinuationtoken"></a>

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

<h2 id="tocS_NotAuthorizedException">NotAuthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemanotauthorizedexception"></a>
<a id="schema_NotAuthorizedException"></a>
<a id="tocSnotauthorizedexception"></a>
<a id="tocsnotauthorizedexception"></a>

```json
null
```

<h2 id="tocS_InvalidEndpointException">InvalidEndpointException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidendpointexception"></a>
<a id="schema_InvalidEndpointException"></a>
<a id="tocSinvalidendpointexception"></a>
<a id="tocsinvalidendpointexception"></a>

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

<h2 id="tocS_ConnectionLimitExceededException">ConnectionLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionlimitexceededexception"></a>
<a id="schema_ConnectionLimitExceededException"></a>
<a id="tocSconnectionlimitexceededexception"></a>
<a id="tocsconnectionlimitexceededexception"></a>

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

<h2 id="tocS_ContentType">ContentType</h2>
<!-- backwards compatibility -->
<a id="schemacontenttype"></a>
<a id="schema_ContentType"></a>
<a id="tocScontenttype"></a>
<a id="tocscontenttype"></a>

```json
"string"
```

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

<h2 id="tocS_StartSelector">StartSelector</h2>
<!-- backwards compatibility -->
<a id="schemastartselector"></a>
<a id="schema_StartSelector"></a>
<a id="tocSstartselector"></a>
<a id="tocsstartselector"></a>

```json
{
  "StartSelectorType": {},
  "AfterFragmentNumber": {},
  "StartTimestamp": {},
  "ContinuationToken": {}
}
```

<p>Identifies the chunk on the Kinesis video stream where you want the <code>GetMedia</code> API to start returning media data. You have the following options to identify the starting chunk: </p> <ul> <li> <p>Choose the latest (or oldest) chunk.</p> </li> <li> <p>Identify a specific chunk. You can identify a specific chunk either by providing a fragment number or timestamp (server or producer). </p> </li> <li> <p>Each chunk's metadata includes a continuation token as a Matroska (MKV) tag (<code>AWS_KINESISVIDEO_CONTINUATION_TOKEN</code>). If your previous <code>GetMedia</code> request terminated, you can use this tag value in your next <code>GetMedia</code> request. The API then starts returning chunks starting where the last API ended.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartSelectorType|object|true|none|none|
|AfterFragmentNumber|object|false|none|none|
|StartTimestamp|object|false|none|none|
|ContinuationToken|object|false|none|none|

<h2 id="tocS_GetMediaInput">GetMediaInput</h2>
<!-- backwards compatibility -->
<a id="schemagetmediainput"></a>
<a id="schema_GetMediaInput"></a>
<a id="tocSgetmediainput"></a>
<a id="tocsgetmediainput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "StartSelector": {
    "StartSelectorType": {},
    "AfterFragmentNumber": {},
    "StartTimestamp": {},
    "ContinuationToken": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|
|StartSelector|object|true|none|none|

<h2 id="tocS_Payload">Payload</h2>
<!-- backwards compatibility -->
<a id="schemapayload"></a>
<a id="schema_Payload"></a>
<a id="tocSpayload"></a>
<a id="tocspayload"></a>

```json
"string"
```
