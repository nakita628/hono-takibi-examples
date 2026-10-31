<h1 id="amazon-connect-participant-service">Amazon Connect Participant Service v2018-09-07</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Amazon Connect is an easy-to-use omnichannel cloud contact center service that enables companies of any size to deliver superior customer service at a lower cost. Amazon Connect communications capabilities make it easy for companies to deliver personalized interactions across communication channels, including chat. </p> <p>Use the Amazon Connect Participant Service to manage participants (for example, agents, customers, and managers listening in), and to send messages and events within a chat contact. The APIs in the service enable the following: sending chat messages, attachment sharing, managing a participant's connection state and message events, and retrieving chat transcripts.</p>

Base URLs:

* <a href="http://participant.connect.us-east-1.amazonaws.com">http://participant.connect.us-east-1.amazonaws.com</a> - The Amazon Connect Participant multi-region endpoint

* <a href="https://participant.connect.us-east-1.amazonaws.com">https://participant.connect.us-east-1.amazonaws.com</a> - The Amazon Connect Participant multi-region endpoint

* <a href="http://participant.connect.cn-north-1.amazonaws.com.cn">http://participant.connect.cn-north-1.amazonaws.com.cn</a> - The Amazon Connect Participant endpoint for China (Beijing) and China (Ningxia)

* <a href="https://participant.connect.cn-north-1.amazonaws.com.cn">https://participant.connect.cn-north-1.amazonaws.com.cn</a> - The Amazon Connect Participant endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/connect/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-connect-participant-service-default">Default</h1>

## CompleteAttachmentUpload

<a id="opIdCompleteAttachmentUpload"></a>

> Code samples

```bash
curl 'https://connectparticipant.us-east-1.amazonaws.com/participant/complete-attachment-upload#X-Amz-Bearer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Bearer: string' \
  -d '{
    "AttachmentIds": [
      "string"
    ],
    "ClientToken": "string"
  }'
```

`POST /participant/complete-attachment-upload#X-Amz-Bearer`

<p>Allows you to confirm that the attachment has been uploaded using the pre-signed URL provided in StartAttachmentUpload API. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

> Body parameter

```json
{
  "AttachmentIds": [
    "string"
  ],
  "ClientToken": "string"
}
```

<h3 id="completeattachmentupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Bearer|header|string|true|The authentication token associated with the participant's connection.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AttachmentIds|body|[[ArtifactId](#schemaartifactid)]|true|A list of unique identifiers for the attachments.|
|» ClientToken|body|string|true|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|

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

<h3 id="completeattachmentupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompleteAttachmentUploadResponse](#schemacompleteattachmentuploadresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateParticipantConnection

<a id="opIdCreateParticipantConnection"></a>

> Code samples

```bash
curl 'https://connectparticipant.us-east-1.amazonaws.com/participant/connection#X-Amz-Bearer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Bearer: string' \
  -d '{
    "Type": [
      "WEBSOCKET"
    ],
    "ConnectParticipant": true
  }'
```

`POST /participant/connection#X-Amz-Bearer`

<p>Creates the participant's connection. </p> <note> <p> <code>ParticipantToken</code> is used for invoking this API instead of <code>ConnectionToken</code>.</p> </note> <p>The participant token is valid for the lifetime of the participant – until they are part of a contact.</p> <p>The response URL for <code>WEBSOCKET</code> Type has a connect expiry timeout of 100s. Clients must manually connect to the returned websocket URL and subscribe to the desired topic. </p> <p>For chat, you need to publish the following on the established websocket connection:</p> <p> <code>{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}</code> </p> <p>Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter, clients need to call this API again to obtain a new websocket URL and perform the same steps as before.</p> <p> <b>Message streaming support</b>: This API can also be used together with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html">StartContactStreaming</a> API to create a participant connection for chat contacts that are not using a websocket. For more information about message streaming, <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-message-streaming.html">Enable real-time chat message streaming</a> in the <i>Amazon Connect Administrator Guide</i>.</p> <p> <b>Feature specifications</b>: For information about feature specifications, such as the allowed number of open websocket connections per participant, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>. </p> <note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p> </note>

> Body parameter

```json
{
  "Type": [
    "WEBSOCKET"
  ],
  "ConnectParticipant": true
}
```

<h3 id="createparticipantconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Bearer|header|string|true|<p>This is a header parameter.</p> <p>The ParticipantToken as obtained from <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContact.html">StartChatContact</a> API response.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Type|body|[[ConnectionType](#schemaconnectiontype)]|false|Type of connection information required. This can be omitted if <code>ConnectParticipant</code> is <code>true</code>.|
|» ConnectParticipant|body|boolean|false|Amazon Connect Participant is used to mark the participant as connected for customer participant in message streaming, as well as for agent or manager participant in non-streaming chats.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|WEBSOCKET|
|» Type|CONNECTION_CREDENTIALS|

> Example responses

> 200 Response

```json
{
  "Websocket": {
    "Url": {},
    "ConnectionExpiry": {}
  },
  "ConnectionCredentials": {
    "ConnectionToken": {},
    "Expiry": {}
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

<h3 id="createparticipantconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateParticipantConnectionResponse](#schemacreateparticipantconnectionresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisconnectParticipant

<a id="opIdDisconnectParticipant"></a>

> Code samples

```bash
curl 'https://connectparticipant.us-east-1.amazonaws.com/participant/disconnect#X-Amz-Bearer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Bearer: string' \
  -d '{
    "ClientToken": "string"
  }'
```

`POST /participant/disconnect#X-Amz-Bearer`

<p>Disconnects a participant. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

> Body parameter

```json
{
  "ClientToken": "string"
}
```

<h3 id="disconnectparticipant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Bearer|header|string|true|The authentication token associated with the participant's connection.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ClientToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|

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

<h3 id="disconnectparticipant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisconnectParticipantResponse](#schemadisconnectparticipantresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAttachment

<a id="opIdGetAttachment"></a>

> Code samples

```bash
curl 'https://connectparticipant.us-east-1.amazonaws.com/participant/attachment#X-Amz-Bearer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Bearer: string' \
  -d '{
    "AttachmentId": "string"
  }'
```

`POST /participant/attachment#X-Amz-Bearer`

<p>Provides a pre-signed URL for download of a completed attachment. This is an asynchronous API for use with active contacts.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

> Body parameter

```json
{
  "AttachmentId": "string"
}
```

<h3 id="getattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Bearer|header|string|true|The authentication token associated with the participant's connection.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AttachmentId|body|string|true|A unique identifier for the attachment.|

> Example responses

> 200 Response

```json
{
  "Url": {},
  "UrlExpiry": {}
}
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

<h3 id="getattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAttachmentResponse](#schemagetattachmentresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTranscript

<a id="opIdGetTranscript"></a>

> Code samples

```bash
curl 'https://connectparticipant.us-east-1.amazonaws.com/participant/transcript#X-Amz-Bearer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Bearer: string' \
  -d '{
    "ContactId": "string",
    "MaxResults": 0,
    "NextToken": "string",
    "ScanDirection": "FORWARD",
    "SortOrder": "DESCENDING",
    "StartPosition": {
      "Id": {},
      "AbsoluteTime": {},
      "MostRecent": {}
    }
  }'
```

`POST /participant/transcript#X-Amz-Bearer`

<p>Retrieves a transcript of the session, including details about any attachments. For information about accessing past chat contact transcripts for a persistent chat, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

> Body parameter

```json
{
  "ContactId": "string",
  "MaxResults": 0,
  "NextToken": "string",
  "ScanDirection": "FORWARD",
  "SortOrder": "DESCENDING",
  "StartPosition": {
    "Id": {},
    "AbsoluteTime": {},
    "MostRecent": {}
  }
}
```

<h3 id="gettranscript-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Bearer|header|string|true|The authentication token associated with the participant's connection.|
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
|» ContactId|body|string|false|The contactId from the current contact chain for which transcript is needed.|
|» MaxResults|body|integer|false|The maximum number of results to return in the page. Default: 10. |
|» NextToken|body|string|false|The pagination token. Use the value returned previously in the next subsequent request to retrieve the next set of results.|
|» ScanDirection|body|string|false|The direction from StartPosition from which to retrieve message. Default: BACKWARD when no StartPosition is provided, FORWARD with StartPosition. |
|» SortOrder|body|string|false|The sort order for the records. Default: DESCENDING.|
|» StartPosition|body|object|false|A filtering option for where to start. For example, if you sent 100 messages, start with message 50. |
|» » Id|body|object|false|none|
|» » AbsoluteTime|body|object|false|none|
|» » MostRecent|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ScanDirection|FORWARD|
|» ScanDirection|BACKWARD|
|» SortOrder|DESCENDING|
|» SortOrder|ASCENDING|

> Example responses

> 200 Response

```json
{
  "InitialContactId": {},
  "Transcript": {},
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

<h3 id="gettranscript-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTranscriptResponse](#schemagettranscriptresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendEvent

<a id="opIdSendEvent"></a>

> Code samples

```bash
curl 'https://connectparticipant.us-east-1.amazonaws.com/participant/event#X-Amz-Bearer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Bearer: string' \
  -d '{
    "ContentType": "string",
    "Content": "string",
    "ClientToken": "string"
  }'
```

`POST /participant/event#X-Amz-Bearer`

<p>Sends an event. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

> Body parameter

```json
{
  "ContentType": "string",
  "Content": "string",
  "ClientToken": "string"
}
```

<h3 id="sendevent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Bearer|header|string|true|The authentication token associated with the participant's connection.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ContentType|body|string|true|<p>The content type of the request. Supported types are:</p> <ul> <li> <p>application/vnd.amazonaws.connect.event.typing</p> </li> <li> <p>application/vnd.amazonaws.connect.event.connection.acknowledged</p> </li> <li> <p>application/vnd.amazonaws.connect.event.message.delivered</p> </li> <li> <p>application/vnd.amazonaws.connect.event.message.read</p> </li> </ul>|
|» Content|body|string|false|<p>The content of the event to be sent (for example, message text). For content related to message receipts, this is supported in the form of a JSON string.</p> <p>Sample Content: "{\"messageId\":\"11111111-aaaa-bbbb-cccc-EXAMPLE01234\"}"</p>|
|» ClientToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|

> Example responses

> 200 Response

```json
{
  "Id": {},
  "AbsoluteTime": {}
}
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

<h3 id="sendevent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendEventResponse](#schemasendeventresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendMessage

<a id="opIdSendMessage"></a>

> Code samples

```bash
curl 'https://connectparticipant.us-east-1.amazonaws.com/participant/message#X-Amz-Bearer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Bearer: string' \
  -d '{
    "ContentType": "string",
    "Content": "string",
    "ClientToken": "string"
  }'
```

`POST /participant/message#X-Amz-Bearer`

<p>Sends a message.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

> Body parameter

```json
{
  "ContentType": "string",
  "Content": "string",
  "ClientToken": "string"
}
```

<h3 id="sendmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Bearer|header|string|true|The authentication token associated with the connection.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ContentType|body|string|true|The type of the content. Supported types are <code>text/plain</code>, <code>text/markdown</code>, <code>application/json</code>, and <code>application/vnd.amazonaws.connect.message.interactive.response</code>.|
|» Content|body|string|true|<p>The content of the message. </p> <ul> <li> <p>For <code>text/plain</code> and <code>text/markdown</code>, the Length Constraints are Minimum of 1, Maximum of 1024. </p> </li> <li> <p>For <code>application/json</code>, the Length Constraints are Minimum of 1, Maximum of 12000. </p> </li> <li> <p>For <code>application/vnd.amazonaws.connect.message.interactive.response</code>, the Length Constraints are Minimum of 1, Maximum of 12288.</p> </li> </ul>|
|» ClientToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|

> Example responses

> 200 Response

```json
{
  "Id": {},
  "AbsoluteTime": {}
}
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

<h3 id="sendmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendMessageResponse](#schemasendmessageresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartAttachmentUpload

<a id="opIdStartAttachmentUpload"></a>

> Code samples

```bash
curl 'https://connectparticipant.us-east-1.amazonaws.com/participant/start-attachment-upload#X-Amz-Bearer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Bearer: string' \
  -d '{
    "ContentType": "string",
    "AttachmentSizeInBytes": 1,
    "AttachmentName": "string",
    "ClientToken": "string"
  }'
```

`POST /participant/start-attachment-upload#X-Amz-Bearer`

<p>Provides a pre-signed Amazon S3 URL in response for uploading the file directly to S3.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

> Body parameter

```json
{
  "ContentType": "string",
  "AttachmentSizeInBytes": 1,
  "AttachmentName": "string",
  "ClientToken": "string"
}
```

<h3 id="startattachmentupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Bearer|header|string|true|The authentication token associated with the participant's connection.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ContentType|body|string|true|Describes the MIME file type of the attachment. For a list of supported file types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>.|
|» AttachmentSizeInBytes|body|integer|true|The size of the attachment in bytes.|
|» AttachmentName|body|string|true|A case-sensitive name of the attachment being uploaded.|
|» ClientToken|body|string|true|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|

> Example responses

> 200 Response

```json
{
  "AttachmentId": {},
  "UploadMetadata": {
    "Url": {},
    "UrlExpiry": {},
    "HeadersToInclude": {
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

<h3 id="startattachmentupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartAttachmentUploadResponse](#schemastartattachmentuploadresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CompleteAttachmentUploadResponse">CompleteAttachmentUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemacompleteattachmentuploadresponse"></a>
<a id="schema_CompleteAttachmentUploadResponse"></a>
<a id="tocScompleteattachmentuploadresponse"></a>
<a id="tocscompleteattachmentuploadresponse"></a>

```json
{}
```

<h2 id="tocS_ArtifactId">ArtifactId</h2>
<!-- backwards compatibility -->
<a id="schemaartifactid"></a>
<a id="schema_ArtifactId"></a>
<a id="tocSartifactid"></a>
<a id="tocsartifactid"></a>

```json
"string"
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

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_CreateParticipantConnectionResponse">CreateParticipantConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateparticipantconnectionresponse"></a>
<a id="schema_CreateParticipantConnectionResponse"></a>
<a id="tocScreateparticipantconnectionresponse"></a>
<a id="tocscreateparticipantconnectionresponse"></a>

```json
{
  "Websocket": {
    "Url": {},
    "ConnectionExpiry": {}
  },
  "ConnectionCredentials": {
    "ConnectionToken": {},
    "Expiry": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Websocket|object|false|none|none|
|ConnectionCredentials|object|false|none|none|

<h2 id="tocS_ConnectionType">ConnectionType</h2>
<!-- backwards compatibility -->
<a id="schemaconnectiontype"></a>
<a id="schema_ConnectionType"></a>
<a id="tocSconnectiontype"></a>
<a id="tocsconnectiontype"></a>

```json
"WEBSOCKET"
```

<h2 id="tocS_DisconnectParticipantResponse">DisconnectParticipantResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisconnectparticipantresponse"></a>
<a id="schema_DisconnectParticipantResponse"></a>
<a id="tocSdisconnectparticipantresponse"></a>
<a id="tocsdisconnectparticipantresponse"></a>

```json
{}
```

<h2 id="tocS_GetAttachmentResponse">GetAttachmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetattachmentresponse"></a>
<a id="schema_GetAttachmentResponse"></a>
<a id="tocSgetattachmentresponse"></a>
<a id="tocsgetattachmentresponse"></a>

```json
{
  "Url": {},
  "UrlExpiry": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Url|object|false|none|none|
|UrlExpiry|object|false|none|none|

<h2 id="tocS_GetTranscriptResponse">GetTranscriptResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettranscriptresponse"></a>
<a id="schema_GetTranscriptResponse"></a>
<a id="tocSgettranscriptresponse"></a>
<a id="tocsgettranscriptresponse"></a>

```json
{
  "InitialContactId": {},
  "Transcript": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InitialContactId|object|false|none|none|
|Transcript|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ChatItemId">ChatItemId</h2>
<!-- backwards compatibility -->
<a id="schemachatitemid"></a>
<a id="schema_ChatItemId"></a>
<a id="tocSchatitemid"></a>
<a id="tocschatitemid"></a>

```json
"string"
```

<h2 id="tocS_Instant">Instant</h2>
<!-- backwards compatibility -->
<a id="schemainstant"></a>
<a id="schema_Instant"></a>
<a id="tocSinstant"></a>
<a id="tocsinstant"></a>

```json
"string"
```

<h2 id="tocS_MostRecent">MostRecent</h2>
<!-- backwards compatibility -->
<a id="schemamostrecent"></a>
<a id="schema_MostRecent"></a>
<a id="tocSmostrecent"></a>
<a id="tocsmostrecent"></a>

```json
0
```

<h2 id="tocS_SendEventResponse">SendEventResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendeventresponse"></a>
<a id="schema_SendEventResponse"></a>
<a id="tocSsendeventresponse"></a>
<a id="tocssendeventresponse"></a>

```json
{
  "Id": {},
  "AbsoluteTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|AbsoluteTime|object|false|none|none|

<h2 id="tocS_SendMessageResponse">SendMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendmessageresponse"></a>
<a id="schema_SendMessageResponse"></a>
<a id="tocSsendmessageresponse"></a>
<a id="tocssendmessageresponse"></a>

```json
{
  "Id": {},
  "AbsoluteTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|AbsoluteTime|object|false|none|none|

<h2 id="tocS_StartAttachmentUploadResponse">StartAttachmentUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartattachmentuploadresponse"></a>
<a id="schema_StartAttachmentUploadResponse"></a>
<a id="tocSstartattachmentuploadresponse"></a>
<a id="tocsstartattachmentuploadresponse"></a>

```json
{
  "AttachmentId": {},
  "UploadMetadata": {
    "Url": {},
    "UrlExpiry": {},
    "HeadersToInclude": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttachmentId|object|false|none|none|
|UploadMetadata|object|false|none|none|

<h2 id="tocS_ArtifactStatus">ArtifactStatus</h2>
<!-- backwards compatibility -->
<a id="schemaartifactstatus"></a>
<a id="schema_ArtifactStatus"></a>
<a id="tocSartifactstatus"></a>
<a id="tocsartifactstatus"></a>

```json
"APPROVED"
```

<h2 id="tocS_AttachmentIdList">AttachmentIdList</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentidlist"></a>
<a id="schema_AttachmentIdList"></a>
<a id="tocSattachmentidlist"></a>
<a id="tocsattachmentidlist"></a>

```json
[
  "string"
]
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

<h2 id="tocS_AttachmentName">AttachmentName</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentname"></a>
<a id="schema_AttachmentName"></a>
<a id="tocSattachmentname"></a>
<a id="tocsattachmentname"></a>

```json
"string"
```

<h2 id="tocS_AttachmentItem">AttachmentItem</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentitem"></a>
<a id="schema_AttachmentItem"></a>
<a id="tocSattachmentitem"></a>
<a id="tocsattachmentitem"></a>

```json
{
  "ContentType": {},
  "AttachmentId": {},
  "AttachmentName": {},
  "Status": {}
}
```

The case-insensitive input to indicate standard MIME type that describes the format of the file that will be uploaded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentType|object|false|none|none|
|AttachmentId|object|false|none|none|
|AttachmentName|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_AttachmentSizeInBytes">AttachmentSizeInBytes</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentsizeinbytes"></a>
<a id="schema_AttachmentSizeInBytes"></a>
<a id="tocSattachmentsizeinbytes"></a>
<a id="tocsattachmentsizeinbytes"></a>

```json
1
```

<h2 id="tocS_Attachments">Attachments</h2>
<!-- backwards compatibility -->
<a id="schemaattachments"></a>
<a id="schema_Attachments"></a>
<a id="tocSattachments"></a>
<a id="tocsattachments"></a>

```json
[
  {
    "ContentType": {},
    "AttachmentId": {},
    "AttachmentName": {},
    "Status": {}
  }
]
```

<h2 id="tocS_Bool">Bool</h2>
<!-- backwards compatibility -->
<a id="schemabool"></a>
<a id="schema_Bool"></a>
<a id="tocSbool"></a>
<a id="tocsbool"></a>

```json
true
```

<h2 id="tocS_ChatContent">ChatContent</h2>
<!-- backwards compatibility -->
<a id="schemachatcontent"></a>
<a id="schema_ChatContent"></a>
<a id="tocSchatcontent"></a>
<a id="tocschatcontent"></a>

```json
"string"
```

<h2 id="tocS_ChatContentType">ChatContentType</h2>
<!-- backwards compatibility -->
<a id="schemachatcontenttype"></a>
<a id="schema_ChatContentType"></a>
<a id="tocSchatcontenttype"></a>
<a id="tocschatcontenttype"></a>

```json
"string"
```

<h2 id="tocS_ChatItemType">ChatItemType</h2>
<!-- backwards compatibility -->
<a id="schemachatitemtype"></a>
<a id="schema_ChatItemType"></a>
<a id="tocSchatitemtype"></a>
<a id="tocschatitemtype"></a>

```json
"TYPING"
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

<h2 id="tocS_NonEmptyClientToken">NonEmptyClientToken</h2>
<!-- backwards compatibility -->
<a id="schemanonemptyclienttoken"></a>
<a id="schema_NonEmptyClientToken"></a>
<a id="tocSnonemptyclienttoken"></a>
<a id="tocsnonemptyclienttoken"></a>

```json
"string"
```

<h2 id="tocS_ParticipantToken">ParticipantToken</h2>
<!-- backwards compatibility -->
<a id="schemaparticipanttoken"></a>
<a id="schema_ParticipantToken"></a>
<a id="tocSparticipanttoken"></a>
<a id="tocsparticipanttoken"></a>

```json
"string"
```

<h2 id="tocS_CompleteAttachmentUploadRequest">CompleteAttachmentUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemacompleteattachmentuploadrequest"></a>
<a id="schema_CompleteAttachmentUploadRequest"></a>
<a id="tocScompleteattachmentuploadrequest"></a>
<a id="tocscompleteattachmentuploadrequest"></a>

```json
{
  "AttachmentIds": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttachmentIds|object|true|none|none|
|ClientToken|object|true|none|none|

<h2 id="tocS_ISO8601Datetime">ISO8601Datetime</h2>
<!-- backwards compatibility -->
<a id="schemaiso8601datetime"></a>
<a id="schema_ISO8601Datetime"></a>
<a id="tocSiso8601datetime"></a>
<a id="tocsiso8601datetime"></a>

```json
"string"
```

<h2 id="tocS_ConnectionCredentials">ConnectionCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaconnectioncredentials"></a>
<a id="schema_ConnectionCredentials"></a>
<a id="tocSconnectioncredentials"></a>
<a id="tocsconnectioncredentials"></a>

```json
{
  "ConnectionToken": {},
  "Expiry": {}
}
```

Connection credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionToken|object|false|none|none|
|Expiry|object|false|none|none|

<h2 id="tocS_ConnectionTypeList">ConnectionTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectiontypelist"></a>
<a id="schema_ConnectionTypeList"></a>
<a id="tocSconnectiontypelist"></a>
<a id="tocsconnectiontypelist"></a>

```json
[
  "WEBSOCKET"
]
```

<h2 id="tocS_ContactId">ContactId</h2>
<!-- backwards compatibility -->
<a id="schemacontactid"></a>
<a id="schema_ContactId"></a>
<a id="tocScontactid"></a>
<a id="tocscontactid"></a>

```json
"string"
```

<h2 id="tocS_CreateParticipantConnectionRequest">CreateParticipantConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateparticipantconnectionrequest"></a>
<a id="schema_CreateParticipantConnectionRequest"></a>
<a id="tocScreateparticipantconnectionrequest"></a>
<a id="tocscreateparticipantconnectionrequest"></a>

```json
{
  "Type": {},
  "ConnectParticipant": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|ConnectParticipant|object|false|none|none|

<h2 id="tocS_Websocket">Websocket</h2>
<!-- backwards compatibility -->
<a id="schemawebsocket"></a>
<a id="schema_Websocket"></a>
<a id="tocSwebsocket"></a>
<a id="tocswebsocket"></a>

```json
{
  "Url": {},
  "ConnectionExpiry": {}
}
```

The websocket for the participant's connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Url|object|false|none|none|
|ConnectionExpiry|object|false|none|none|

<h2 id="tocS_DisconnectParticipantRequest">DisconnectParticipantRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisconnectparticipantrequest"></a>
<a id="schema_DisconnectParticipantRequest"></a>
<a id="tocSdisconnectparticipantrequest"></a>
<a id="tocsdisconnectparticipantrequest"></a>

```json
{
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|false|none|none|

<h2 id="tocS_DisplayName">DisplayName</h2>
<!-- backwards compatibility -->
<a id="schemadisplayname"></a>
<a id="schema_DisplayName"></a>
<a id="tocSdisplayname"></a>
<a id="tocsdisplayname"></a>

```json
"string"
```

<h2 id="tocS_GetAttachmentRequest">GetAttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetattachmentrequest"></a>
<a id="schema_GetAttachmentRequest"></a>
<a id="tocSgetattachmentrequest"></a>
<a id="tocsgetattachmentrequest"></a>

```json
{
  "AttachmentId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttachmentId|object|true|none|none|

<h2 id="tocS_PreSignedAttachmentUrl">PreSignedAttachmentUrl</h2>
<!-- backwards compatibility -->
<a id="schemapresignedattachmenturl"></a>
<a id="schema_PreSignedAttachmentUrl"></a>
<a id="tocSpresignedattachmenturl"></a>
<a id="tocspresignedattachmenturl"></a>

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

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_ScanDirection">ScanDirection</h2>
<!-- backwards compatibility -->
<a id="schemascandirection"></a>
<a id="schema_ScanDirection"></a>
<a id="tocSscandirection"></a>
<a id="tocsscandirection"></a>

```json
"FORWARD"
```

<h2 id="tocS_SortKey">SortKey</h2>
<!-- backwards compatibility -->
<a id="schemasortkey"></a>
<a id="schema_SortKey"></a>
<a id="tocSsortkey"></a>
<a id="tocssortkey"></a>

```json
"DESCENDING"
```

<h2 id="tocS_StartPosition">StartPosition</h2>
<!-- backwards compatibility -->
<a id="schemastartposition"></a>
<a id="schema_StartPosition"></a>
<a id="tocSstartposition"></a>
<a id="tocsstartposition"></a>

```json
{
  "Id": {},
  "AbsoluteTime": {},
  "MostRecent": {}
}
```

A filtering option for where to start. For example, if you sent 100 messages, start with message 50.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|AbsoluteTime|object|false|none|none|
|MostRecent|object|false|none|none|

<h2 id="tocS_GetTranscriptRequest">GetTranscriptRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettranscriptrequest"></a>
<a id="schema_GetTranscriptRequest"></a>
<a id="tocSgettranscriptrequest"></a>
<a id="tocsgettranscriptrequest"></a>

```json
{
  "ContactId": {},
  "MaxResults": {},
  "NextToken": {},
  "ScanDirection": {},
  "SortOrder": {},
  "StartPosition": {
    "Id": {},
    "AbsoluteTime": {},
    "MostRecent": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactId|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|ScanDirection|object|false|none|none|
|SortOrder|object|false|none|none|
|StartPosition|object|false|none|none|

<h2 id="tocS_Transcript">Transcript</h2>
<!-- backwards compatibility -->
<a id="schematranscript"></a>
<a id="schema_Transcript"></a>
<a id="tocStranscript"></a>
<a id="tocstranscript"></a>

```json
[
  {
    "AbsoluteTime": {},
    "Content": {},
    "ContentType": {},
    "Id": {},
    "Type": {},
    "ParticipantId": {},
    "DisplayName": {},
    "ParticipantRole": {},
    "Attachments": {},
    "MessageMetadata": {
      "MessageId": {},
      "Receipts": {}
    },
    "RelatedContactId": {},
    "ContactId": {}
  }
]
```

<h2 id="tocS_ParticipantId">ParticipantId</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantid"></a>
<a id="schema_ParticipantId"></a>
<a id="tocSparticipantid"></a>
<a id="tocsparticipantid"></a>

```json
"string"
```

<h2 id="tocS_ParticipantRole">ParticipantRole</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantrole"></a>
<a id="schema_ParticipantRole"></a>
<a id="tocSparticipantrole"></a>
<a id="tocsparticipantrole"></a>

```json
"AGENT"
```

<h2 id="tocS_MessageMetadata">MessageMetadata</h2>
<!-- backwards compatibility -->
<a id="schemamessagemetadata"></a>
<a id="schema_MessageMetadata"></a>
<a id="tocSmessagemetadata"></a>
<a id="tocsmessagemetadata"></a>

```json
{
  "MessageId": {},
  "Receipts": {}
}
```

Contains metadata related to a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageId|object|false|none|none|
|Receipts|object|false|none|none|

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "AbsoluteTime": {},
  "Content": {},
  "ContentType": {},
  "Id": {},
  "Type": {},
  "ParticipantId": {},
  "DisplayName": {},
  "ParticipantRole": {},
  "Attachments": {},
  "MessageMetadata": {
    "MessageId": {},
    "Receipts": {}
  },
  "RelatedContactId": {},
  "ContactId": {}
}
```

An item - message or event - that has been sent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AbsoluteTime|object|false|none|none|
|Content|object|false|none|none|
|ContentType|object|false|none|none|
|Id|object|false|none|none|
|Type|object|false|none|none|
|ParticipantId|object|false|none|none|
|DisplayName|object|false|none|none|
|ParticipantRole|object|false|none|none|
|Attachments|object|false|none|none|
|MessageMetadata|object|false|none|none|
|RelatedContactId|object|false|none|none|
|ContactId|object|false|none|none|

<h2 id="tocS_Receipts">Receipts</h2>
<!-- backwards compatibility -->
<a id="schemareceipts"></a>
<a id="schema_Receipts"></a>
<a id="tocSreceipts"></a>
<a id="tocsreceipts"></a>

```json
[
  {
    "DeliveredTimestamp": {},
    "ReadTimestamp": {},
    "RecipientParticipantId": {}
  }
]
```

<h2 id="tocS_PreSignedConnectionUrl">PreSignedConnectionUrl</h2>
<!-- backwards compatibility -->
<a id="schemapresignedconnectionurl"></a>
<a id="schema_PreSignedConnectionUrl"></a>
<a id="tocSpresignedconnectionurl"></a>
<a id="tocspresignedconnectionurl"></a>

```json
"string"
```

<h2 id="tocS_Receipt">Receipt</h2>
<!-- backwards compatibility -->
<a id="schemareceipt"></a>
<a id="schema_Receipt"></a>
<a id="tocSreceipt"></a>
<a id="tocsreceipt"></a>

```json
{
  "DeliveredTimestamp": {},
  "ReadTimestamp": {},
  "RecipientParticipantId": {}
}
```

The receipt for the message delivered to the recipient.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveredTimestamp|object|false|none|none|
|ReadTimestamp|object|false|none|none|
|RecipientParticipantId|object|false|none|none|

<h2 id="tocS_SendEventRequest">SendEventRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendeventrequest"></a>
<a id="schema_SendEventRequest"></a>
<a id="tocSsendeventrequest"></a>
<a id="tocssendeventrequest"></a>

```json
{
  "ContentType": {},
  "Content": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentType|object|true|none|none|
|Content|object|false|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_SendMessageRequest">SendMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendmessagerequest"></a>
<a id="schema_SendMessageRequest"></a>
<a id="tocSsendmessagerequest"></a>
<a id="tocssendmessagerequest"></a>

```json
{
  "ContentType": {},
  "Content": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentType|object|true|none|none|
|Content|object|true|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_StartAttachmentUploadRequest">StartAttachmentUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartattachmentuploadrequest"></a>
<a id="schema_StartAttachmentUploadRequest"></a>
<a id="tocSstartattachmentuploadrequest"></a>
<a id="tocsstartattachmentuploadrequest"></a>

```json
{
  "ContentType": {},
  "AttachmentSizeInBytes": {},
  "AttachmentName": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentType|object|true|none|none|
|AttachmentSizeInBytes|object|true|none|none|
|AttachmentName|object|true|none|none|
|ClientToken|object|true|none|none|

<h2 id="tocS_UploadMetadata">UploadMetadata</h2>
<!-- backwards compatibility -->
<a id="schemauploadmetadata"></a>
<a id="schema_UploadMetadata"></a>
<a id="tocSuploadmetadata"></a>
<a id="tocsuploadmetadata"></a>

```json
{
  "Url": {},
  "UrlExpiry": {},
  "HeadersToInclude": {
    "property1": "string",
    "property2": "string"
  }
}
```

Fields to be used while uploading the attachment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Url|object|false|none|none|
|UrlExpiry|object|false|none|none|
|HeadersToInclude|object|false|none|none|

<h2 id="tocS_UploadMetadataUrl">UploadMetadataUrl</h2>
<!-- backwards compatibility -->
<a id="schemauploadmetadataurl"></a>
<a id="schema_UploadMetadataUrl"></a>
<a id="tocSuploadmetadataurl"></a>
<a id="tocsuploadmetadataurl"></a>

```json
"string"
```

<h2 id="tocS_UploadMetadataSignedHeaders">UploadMetadataSignedHeaders</h2>
<!-- backwards compatibility -->
<a id="schemauploadmetadatasignedheaders"></a>
<a id="schema_UploadMetadataSignedHeaders"></a>
<a id="tocSuploadmetadatasignedheaders"></a>
<a id="tocsuploadmetadatasignedheaders"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[UploadMetadataSignedHeadersValue](#schemauploadmetadatasignedheadersvalue)|false|none|none|

<h2 id="tocS_UploadMetadataSignedHeadersValue">UploadMetadataSignedHeadersValue</h2>
<!-- backwards compatibility -->
<a id="schemauploadmetadatasignedheadersvalue"></a>
<a id="schema_UploadMetadataSignedHeadersValue"></a>
<a id="tocSuploadmetadatasignedheadersvalue"></a>
<a id="tocsuploadmetadatasignedheadersvalue"></a>

```json
"string"
```

<h2 id="tocS_UploadMetadataSignedHeadersKey">UploadMetadataSignedHeadersKey</h2>
<!-- backwards compatibility -->
<a id="schemauploadmetadatasignedheaderskey"></a>
<a id="schema_UploadMetadataSignedHeadersKey"></a>
<a id="tocSuploadmetadatasignedheaderskey"></a>
<a id="tocsuploadmetadatasignedheaderskey"></a>

```json
"string"
```
