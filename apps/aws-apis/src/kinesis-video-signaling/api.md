<h1 id="amazon-kinesis-video-signaling-channels">Amazon Kinesis Video Signaling Channels v2019-12-04</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Kinesis Video Streams Signaling Service is a intermediate service that establishes a communication channel for discovering peers, transmitting offers and answers in order to establish peer-to-peer connection in webRTC technology.

Base URLs:

* <a href="http://kinesisvideo.us-east-1.amazonaws.com">http://kinesisvideo.us-east-1.amazonaws.com</a> - The Amazon Kinesis Video Signaling Channels multi-region endpoint

* <a href="https://kinesisvideo.us-east-1.amazonaws.com">https://kinesisvideo.us-east-1.amazonaws.com</a> - The Amazon Kinesis Video Signaling Channels multi-region endpoint

* <a href="http://kinesisvideo.cn-north-1.amazonaws.com.cn">http://kinesisvideo.cn-north-1.amazonaws.com.cn</a> - The Amazon Kinesis Video Signaling Channels endpoint for China (Beijing) and China (Ningxia)

* <a href="https://kinesisvideo.cn-north-1.amazonaws.com.cn">https://kinesisvideo.cn-north-1.amazonaws.com.cn</a> - The Amazon Kinesis Video Signaling Channels endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/kinesisvideo/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-kinesis-video-signaling-channels-default">Default</h1>

## GetIceServerConfig

<a id="opIdGetIceServerConfig"></a>

> Code samples

```bash
curl https://kinesis-video-signaling.us-east-1.amazonaws.com/v1/get-ice-server-config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ChannelARN": "string",
    "ClientId": "string",
    "Service": "TURN",
    "Username": "string"
  }'
```

`POST /v1/get-ice-server-config`

<p>Gets the Interactive Connectivity Establishment (ICE) server configuration information, including URIs, username, and password which can be used to configure the WebRTC connection. The ICE component uses this configuration information to setup the WebRTC connection, including authenticating with the Traversal Using Relays around NAT (TURN) relay server. </p> <p>TURN is a protocol that is used to improve the connectivity of peer-to-peer applications. By providing a cloud-based relay service, TURN ensures that a connection can be established even when one or more peers are incapable of a direct peer-to-peer connection. For more information, see <a href="https://tools.ietf.org/html/draft-uberti-rtcweb-turn-rest-00">A REST API For Access To TURN Services</a>.</p> <p> You can invoke this API to establish a fallback mechanism in case either of the peers is unable to establish a direct peer-to-peer connection over a signaling channel. You must specify either a signaling channel ARN or the client ID in order to invoke this API.</p>

> Body parameter

```json
{
  "ChannelARN": "string",
  "ClientId": "string",
  "Service": "TURN",
  "Username": "string"
}
```

<h3 id="geticeserverconfig-parameters">Parameters</h3>

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
|» ChannelARN|body|string|true|The ARN of the signaling channel to be used for the peer-to-peer connection between configured peers. |
|» ClientId|body|string|false|Unique identifier for the viewer. Must be unique within the signaling channel.|
|» Service|body|string|false|Specifies the desired service. Currently, <code>TURN</code> is the only valid value.|
|» Username|body|string|false|An optional user ID to be associated with the credentials.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Service|TURN|

> Example responses

> 200 Response

```json
{
  "IceServerList": {}
}
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

<h3 id="geticeserverconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIceServerConfigResponse](#schemageticeserverconfigresponse)|
|480|480|InvalidClientException|[InvalidClientException](#schemainvalidclientexception)|
|481|481|SessionExpiredException|[SessionExpiredException](#schemasessionexpiredexception)|
|482|482|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|485|485|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendAlexaOfferToMaster

<a id="opIdSendAlexaOfferToMaster"></a>

> Code samples

```bash
curl https://kinesis-video-signaling.us-east-1.amazonaws.com/v1/send-alexa-offer-to-master \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ChannelARN": "string",
    "SenderClientId": "string",
    "MessagePayload": "string"
  }'
```

`POST /v1/send-alexa-offer-to-master`

This API allows you to connect WebRTC-enabled devices with Alexa display devices. When invoked, it sends the Alexa Session Description Protocol (SDP) offer to the master peer. The offer is delivered as soon as the master is connected to the specified signaling channel. This API returns the SDP answer from the connected master. If the master is not connected to the signaling channel, redelivery requests are made until the message expires.

> Body parameter

```json
{
  "ChannelARN": "string",
  "SenderClientId": "string",
  "MessagePayload": "string"
}
```

<h3 id="sendalexaoffertomaster-parameters">Parameters</h3>

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
|» ChannelARN|body|string|true|The ARN of the signaling channel by which Alexa and the master peer communicate.|
|» SenderClientId|body|string|true|The unique identifier for the sender client.|
|» MessagePayload|body|string|true|The base64-encoded SDP offer content.|

> Example responses

> 200 Response

```json
{
  "Answer": {}
}
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

<h3 id="sendalexaoffertomaster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendAlexaOfferToMasterResponse](#schemasendalexaoffertomasterresponse)|
|480|480|ClientLimitExceededException|[ClientLimitExceededException](#schemaclientlimitexceededexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_GetIceServerConfigResponse">GetIceServerConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemageticeserverconfigresponse"></a>
<a id="schema_GetIceServerConfigResponse"></a>
<a id="tocSgeticeserverconfigresponse"></a>
<a id="tocsgeticeserverconfigresponse"></a>

```json
{
  "IceServerList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IceServerList|object|false|none|none|

<h2 id="tocS_InvalidClientException">InvalidClientException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidclientexception"></a>
<a id="schema_InvalidClientException"></a>
<a id="tocSinvalidclientexception"></a>
<a id="tocsinvalidclientexception"></a>

```json
null
```

<h2 id="tocS_SessionExpiredException">SessionExpiredException</h2>
<!-- backwards compatibility -->
<a id="schemasessionexpiredexception"></a>
<a id="schema_SessionExpiredException"></a>
<a id="tocSsessionexpiredexception"></a>
<a id="tocssessionexpiredexception"></a>

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

<h2 id="tocS_NotAuthorizedException">NotAuthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemanotauthorizedexception"></a>
<a id="schema_NotAuthorizedException"></a>
<a id="tocSnotauthorizedexception"></a>
<a id="tocsnotauthorizedexception"></a>

```json
null
```

<h2 id="tocS_SendAlexaOfferToMasterResponse">SendAlexaOfferToMasterResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendalexaoffertomasterresponse"></a>
<a id="schema_SendAlexaOfferToMasterResponse"></a>
<a id="tocSsendalexaoffertomasterresponse"></a>
<a id="tocssendalexaoffertomasterresponse"></a>

```json
{
  "Answer": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Answer|object|false|none|none|

<h2 id="tocS_Answer">Answer</h2>
<!-- backwards compatibility -->
<a id="schemaanswer"></a>
<a id="schema_Answer"></a>
<a id="tocSanswer"></a>
<a id="tocsanswer"></a>

```json
"string"
```

<h2 id="tocS_ClientId">ClientId</h2>
<!-- backwards compatibility -->
<a id="schemaclientid"></a>
<a id="schema_ClientId"></a>
<a id="tocSclientid"></a>
<a id="tocsclientid"></a>

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

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
"TURN"
```

<h2 id="tocS_Username">Username</h2>
<!-- backwards compatibility -->
<a id="schemausername"></a>
<a id="schema_Username"></a>
<a id="tocSusername"></a>
<a id="tocsusername"></a>

```json
"string"
```

<h2 id="tocS_GetIceServerConfigRequest">GetIceServerConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemageticeserverconfigrequest"></a>
<a id="schema_GetIceServerConfigRequest"></a>
<a id="tocSgeticeserverconfigrequest"></a>
<a id="tocsgeticeserverconfigrequest"></a>

```json
{
  "ChannelARN": {},
  "ClientId": {},
  "Service": {},
  "Username": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelARN|object|true|none|none|
|ClientId|object|false|none|none|
|Service|object|false|none|none|
|Username|object|false|none|none|

<h2 id="tocS_IceServerList">IceServerList</h2>
<!-- backwards compatibility -->
<a id="schemaiceserverlist"></a>
<a id="schema_IceServerList"></a>
<a id="tocSiceserverlist"></a>
<a id="tocsiceserverlist"></a>

```json
[
  {
    "Uris": {},
    "Username": {},
    "Password": {},
    "Ttl": {}
  }
]
```

<h2 id="tocS_Uris">Uris</h2>
<!-- backwards compatibility -->
<a id="schemauris"></a>
<a id="schema_Uris"></a>
<a id="tocSuris"></a>
<a id="tocsuris"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Password">Password</h2>
<!-- backwards compatibility -->
<a id="schemapassword"></a>
<a id="schema_Password"></a>
<a id="tocSpassword"></a>
<a id="tocspassword"></a>

```json
"string"
```

<h2 id="tocS_Ttl">Ttl</h2>
<!-- backwards compatibility -->
<a id="schemattl"></a>
<a id="schema_Ttl"></a>
<a id="tocSttl"></a>
<a id="tocsttl"></a>

```json
30
```

<h2 id="tocS_IceServer">IceServer</h2>
<!-- backwards compatibility -->
<a id="schemaiceserver"></a>
<a id="schema_IceServer"></a>
<a id="tocSiceserver"></a>
<a id="tocsiceserver"></a>

```json
{
  "Uris": {},
  "Username": {},
  "Password": {},
  "Ttl": {}
}
```

A structure for the ICE server connection data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Uris|object|false|none|none|
|Username|object|false|none|none|
|Password|object|false|none|none|
|Ttl|object|false|none|none|

<h2 id="tocS_MessagePayload">MessagePayload</h2>
<!-- backwards compatibility -->
<a id="schemamessagepayload"></a>
<a id="schema_MessagePayload"></a>
<a id="tocSmessagepayload"></a>
<a id="tocsmessagepayload"></a>

```json
"string"
```

<h2 id="tocS_SendAlexaOfferToMasterRequest">SendAlexaOfferToMasterRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendalexaoffertomasterrequest"></a>
<a id="schema_SendAlexaOfferToMasterRequest"></a>
<a id="tocSsendalexaoffertomasterrequest"></a>
<a id="tocssendalexaoffertomasterrequest"></a>

```json
{
  "ChannelARN": {},
  "SenderClientId": {},
  "MessagePayload": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelARN|object|true|none|none|
|SenderClientId|object|true|none|none|
|MessagePayload|object|true|none|none|

<h2 id="tocS_Uri">Uri</h2>
<!-- backwards compatibility -->
<a id="schemauri"></a>
<a id="schema_Uri"></a>
<a id="tocSuri"></a>
<a id="tocsuri"></a>

```json
"string"
```
