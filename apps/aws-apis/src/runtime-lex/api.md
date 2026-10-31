<h1 id="amazon-lex-runtime-service">Amazon Lex Runtime Service v2016-11-28</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon Lex provides both build and runtime endpoints. Each endpoint provides a set of operations (API). Your conversational bot uses the runtime API to understand user utterances (user input text or voice). For example, suppose a user says "I want pizza", your bot sends this input to Amazon Lex using the runtime API. Amazon Lex recognizes that the user request is for the OrderPizza intent (one of the intents defined in the bot). Then Amazon Lex engages in user conversation on behalf of the bot to elicit required information (slot values, such as pizza size and crust type), and then performs fulfillment activity (that you configured when you created the bot). You use the build-time API to create and manage your Amazon Lex bot. For a list of build-time operations, see the build-time API, .

Base URLs:

* <a href="http://runtime.lex.us-east-1.amazonaws.com">http://runtime.lex.us-east-1.amazonaws.com</a> - The Amazon Lex Runtime Service multi-region endpoint

* <a href="https://runtime.lex.us-east-1.amazonaws.com">https://runtime.lex.us-east-1.amazonaws.com</a> - The Amazon Lex Runtime Service multi-region endpoint

* <a href="http://runtime.lex.cn-north-1.amazonaws.com.cn">http://runtime.lex.cn-north-1.amazonaws.com.cn</a> - The Amazon Lex Runtime Service endpoint for China (Beijing) and China (Ningxia)

* <a href="https://runtime.lex.cn-north-1.amazonaws.com.cn">https://runtime.lex.cn-north-1.amazonaws.com.cn</a> - The Amazon Lex Runtime Service endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/lex/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-lex-runtime-service-default">Default</h1>

## PutSession

<a id="opIdPutSession"></a>

> Code samples

```bash
curl https://runtime-lex.us-east-1.amazonaws.com/bot/string/alias/string/user/string/session \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sessionAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "dialogAction": {
      "type": {},
      "intentName": {},
      "slots": {
        "property1": "string",
        "property2": "string"
      },
      "slotToElicit": {},
      "fulfillmentState": {},
      "message": {},
      "messageFormat": {}
    },
    "recentIntentSummaryView": [
      {
        "intentName": {},
        "checkpointLabel": {},
        "slots": {
          "property1": "string",
          "property2": "string"
        },
        "confirmationStatus": {},
        "dialogActionType": {},
        "fulfillmentState": {},
        "slotToElicit": {}
      }
    ],
    "activeContexts": [
      {
        "name": {},
        "timeToLive": {
          "timeToLiveInSeconds": {},
          "turnsToLive": {}
        },
        "parameters": {
          "property1": "password",
          "property2": "password"
        }
      }
    ]
  }'
```

`POST /bot/{botName}/alias/{botAlias}/user/{userId}/session`

<p>Creates a new session or modifies an existing session with an Amazon Lex bot. Use this operation to enable your application to set the state of the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/how-session-api.html">Managing Sessions</a>.</p>

> Body parameter

```json
{
  "sessionAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "dialogAction": {
    "type": {},
    "intentName": {},
    "slots": {
      "property1": "string",
      "property2": "string"
    },
    "slotToElicit": {},
    "fulfillmentState": {},
    "message": {},
    "messageFormat": {}
  },
  "recentIntentSummaryView": [
    {
      "intentName": {},
      "checkpointLabel": {},
      "slots": {
        "property1": "string",
        "property2": "string"
      },
      "confirmationStatus": {},
      "dialogActionType": {},
      "fulfillmentState": {},
      "slotToElicit": {}
    }
  ],
  "activeContexts": [
    {
      "name": {},
      "timeToLive": {
        "timeToLiveInSeconds": {},
        "turnsToLive": {}
      },
      "parameters": {
        "property1": "password",
        "property2": "password"
      }
    }
  ]
}
```

<h3 id="putsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|botName|path|string|true|The name of the bot that contains the session data.|
|botAlias|path|string|true|The alias in use for the bot that contains the session data.|
|userId|path|string|true|The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot. |
|Accept|header|string|false|<p>The message that Amazon Lex returns in the response can be either text or speech based depending on the value of this field.</p> <ul> <li> <p>If the value is <code>text/plain; charset=utf-8</code>, Amazon Lex returns text in the response.</p> </li> <li> <p>If the value begins with <code>audio/</code>, Amazon Lex returns speech in the response. Amazon Lex uses Amazon Polly to generate the speech in the configuration that you specify. For example, if you specify <code>audio/mpeg</code> as the value, Amazon Lex returns speech in the MPEG format.</p> </li> <li> <p>If the value is <code>audio/pcm</code>, the speech is returned as <code>audio/pcm</code> in 16-bit, little endian format.</p> </li> <li> <p>The following are the accepted values:</p> <ul> <li> <p> <code>audio/mpeg</code> </p> </li> <li> <p> <code>audio/ogg</code> </p> </li> <li> <p> <code>audio/pcm</code> </p> </li> <li> <p> <code>audio/*</code> (defaults to mpeg)</p> </li> <li> <p> <code>text/plain; charset=utf-8</code> </p> </li> </ul> </li> </ul>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» sessionAttributes|body|object|false|Map of key/value pairs representing the session-specific context information. It contains application information passed between Amazon Lex and a client application.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» dialogAction|body|object|false|Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.|
|» » type|body|object|false|none|
|» » intentName|body|object|false|none|
|» » slots|body|object|false|none|
|» » » **additionalProperties**|body|[String](#schemastring)|false|none|
|» » slotToElicit|body|object|false|none|
|» » fulfillmentState|body|object|false|none|
|» » message|body|object|false|none|
|» » messageFormat|body|object|false|none|
|» recentIntentSummaryView|body|[[IntentSummary](#schemaintentsummary)]|false|<p>A summary of the recent intents for the bot. You can use the intent summary view to set a checkpoint label on an intent and modify attributes of intents. You can also use it to remove or add intent summary objects to the list.</p> <p>An intent that you modify or add to the list must make sense for the bot. For example, the intent name must be valid for the bot. You must provide valid values for:</p> <ul> <li> <p> <code>intentName</code> </p> </li> <li> <p>slot names</p> </li> <li> <p> <code>slotToElict</code> </p> </li> </ul> <p>If you send the <code>recentIntentSummaryView</code> parameter in a <code>PutSession</code> request, the contents of the new summary view replaces the old summary view. For example, if a <code>GetSession</code> request returns three intents in the summary view and you call <code>PutSession</code> with one intent in the summary view, the next call to <code>GetSession</code> will only return one intent.</p>|
|» activeContexts|body|[[ActiveContext](#schemaactivecontext)]|false|<p>A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by including the context in the request,</p> <p>If you don't specify a list of contexts, Amazon Lex will use the current list of contexts for the session. If you specify an empty list, all contexts for the session are cleared.</p>|

> Example responses

> 200 Response

```json
{
  "audioStream": {}
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

<h3 id="putsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutSessionResponse](#schemaputsessionresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|NotAcceptableException|[NotAcceptableException](#schemanotacceptableexception)|
|486|486|DependencyFailedException|[DependencyFailedException](#schemadependencyfailedexception)|
|487|487|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSession

<a id="opIdDeleteSession"></a>

> Code samples

```bash
curl https://runtime-lex.us-east-1.amazonaws.com/bot/string/alias/string/user/string/session \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /bot/{botName}/alias/{botAlias}/user/{userId}/session`

Removes session information for a specified bot, alias, and user ID. 

<h3 id="deletesession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|botName|path|string|true|The name of the bot that contains the session data.|
|botAlias|path|string|true|The alias in use for the bot that contains the session data.|
|userId|path|string|true|The identifier of the user associated with the session data.|
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
  "botName": {},
  "botAlias": {},
  "userId": {},
  "sessionId": {}
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

<h3 id="deletesession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSessionResponse](#schemadeletesessionresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSession

<a id="opIdGetSession"></a>

> Code samples

```bash
curl https://runtime-lex.us-east-1.amazonaws.com/bot/string/alias/string/user/string/session/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /bot/{botName}/alias/{botAlias}/user/{userId}/session/`

Returns session information for a specified bot, alias, and user ID.

<h3 id="getsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|botName|path|string|true|The name of the bot that contains the session data.|
|botAlias|path|string|true|The alias in use for the bot that contains the session data.|
|userId|path|string|true|The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot. |
|checkpointLabelFilter|query|string|false|<p>A string used to filter the intents returned in the <code>recentIntentSummaryView</code> structure. </p> <p>When you specify a filter, only intents with their <code>checkpointLabel</code> field set to that string are returned.</p>|
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
  "recentIntentSummaryView": {},
  "sessionAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "sessionId": {},
  "dialogAction": {
    "type": {},
    "intentName": {},
    "slots": {
      "property1": "string",
      "property2": "string"
    },
    "slotToElicit": {},
    "fulfillmentState": {},
    "message": {},
    "messageFormat": {}
  },
  "activeContexts": {}
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

<h3 id="getsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSessionResponse](#schemagetsessionresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PostContent

<a id="opIdPostContent"></a>

> Code samples

```bash
curl 'https://runtime-lex.us-east-1.amazonaws.com/bot/string/alias/string/user/string/content#Content-Type' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "inputStream": "string"
  }'
```

`POST /bot/{botName}/alias/{botAlias}/user/{userId}/content#Content-Type`

<p> Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for the bot. </p> <p>The <code>PostContent</code> operation supports audio input at 8kHz and 16kHz. You can use 8kHz audio to achieve higher speech recognition accuracy in telephone audio applications. </p> <p> In response, Amazon Lex returns the next message to convey to the user. Consider the following example messages: </p> <ul> <li> <p> For a user input "I would like a pizza," Amazon Lex might return a response with a message eliciting slot data (for example, <code>PizzaSize</code>): "What size pizza would you like?". </p> </li> <li> <p> After the user provides all of the pizza order information, Amazon Lex might return a response with a message to get user confirmation: "Order the pizza?". </p> </li> <li> <p> After the user replies "Yes" to the confirmation prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". </p> </li> </ul> <p> Not all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a response. Some messages require only a yes or no response. In addition to the <code>message</code>, Amazon Lex provides additional context about the message in the response that you can use to enhance client behavior, such as displaying the appropriate client user interface. Consider the following examples: </p> <ul> <li> <p> If the message is to elicit slot data, Amazon Lex returns the following context information: </p> <ul> <li> <p> <code>x-amz-lex-dialog-state</code> header set to <code>ElicitSlot</code> </p> </li> <li> <p> <code>x-amz-lex-intent-name</code> header set to the intent name in the current context </p> </li> <li> <p> <code>x-amz-lex-slot-to-elicit</code> header set to the slot name for which the <code>message</code> is eliciting information </p> </li> <li> <p> <code>x-amz-lex-slots</code> header set to a map of slots configured for the intent with their current values </p> </li> </ul> </li> <li> <p> If the message is a confirmation prompt, the <code>x-amz-lex-dialog-state</code> header is set to <code>Confirmation</code> and the <code>x-amz-lex-slot-to-elicit</code> header is omitted. </p> </li> <li> <p> If the message is a clarification prompt configured for the intent, indicating that the user intent is not understood, the <code>x-amz-dialog-state</code> header is set to <code>ElicitIntent</code> and the <code>x-amz-slot-to-elicit</code> header is omitted. </p> </li> </ul> <p> In addition, Amazon Lex also returns your application-specific <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>

> Body parameter

```json
{
  "inputStream": "string"
}
```

<h3 id="postcontent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|botName|path|string|true|Name of the Amazon Lex bot.|
|botAlias|path|string|true|Alias of the Amazon Lex bot.|
|userId|path|string|true|<p>The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot. At runtime, each request must contain the <code>userID</code> field.</p> <p>To decide the user ID to use for your application, consider the following factors.</p> <ul> <li> <p>The <code>userID</code> field must not contain any personally identifiable information of the user, for example, name, personal identification numbers, or other end user personal information.</p> </li> <li> <p>If you want a user to start a conversation on one device and continue on another device, use a user-specific identifier.</p> </li> <li> <p>If you want the same user to be able to have two independent conversations on two different devices, choose a device-specific identifier.</p> </li> <li> <p>A user can't have two independent conversations with two different versions of the same bot. For example, a user can't have a conversation with the PROD and BETA versions of the same bot. If you anticipate that a user will need to have conversation with two different versions, for example, while testing, include the bot alias in the user ID to separate the two conversations.</p> </li> </ul>|
|x-amz-lex-session-attributes|header|string(password)|false|<p>You pass this value as the <code>x-amz-lex-session-attributes</code> HTTP header.</p> <p>Application-specific information passed between Amazon Lex and a client application. The value must be a JSON serialized and base64 encoded map with string keys and values. The total size of the <code>sessionAttributes</code> and <code>requestAttributes</code> headers is limited to 12 KB.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-session-attribs">Setting Session Attributes</a>.</p>|
|x-amz-lex-request-attributes|header|string(password)|false|<p>You pass this value as the <code>x-amz-lex-request-attributes</code> HTTP header.</p> <p>Request-specific information passed between Amazon Lex and a client application. The value must be a JSON serialized and base64 encoded map with string keys and values. The total size of the <code>requestAttributes</code> and <code>sessionAttributes</code> headers is limited to 12 KB.</p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes with the prefix <code>x-amz-lex:</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-request-attribs">Setting Request Attributes</a>.</p>|
|Content-Type|header|string|true|<p> You pass this value as the <code>Content-Type</code> HTTP header. </p> <p> Indicates the audio format or text. The header value must start with one of the following prefixes: </p> <ul> <li> <p>PCM format, audio data must be in little-endian byte order.</p> <ul> <li> <p>audio/l16; rate=16000; channels=1</p> </li> <li> <p>audio/x-l16; sample-rate=16000; channel-count=1</p> </li> <li> <p>audio/lpcm; sample-rate=8000; sample-size-bits=16; channel-count=1; is-big-endian=false </p> </li> </ul> </li> <li> <p>Opus format</p> <ul> <li> <p>audio/x-cbr-opus-with-preamble; preamble-size=0; bit-rate=256000; frame-size-milliseconds=4</p> </li> </ul> </li> <li> <p>Text format</p> <ul> <li> <p>text/plain; charset=utf-8</p> </li> </ul> </li> </ul>|
|Accept|header|string|false|<p> You pass this value as the <code>Accept</code> HTTP header. </p> <p> The message Amazon Lex returns in the response can be either text or speech based on the <code>Accept</code> HTTP header value in the request. </p> <ul> <li> <p> If the value is <code>text/plain; charset=utf-8</code>, Amazon Lex returns text in the response. </p> </li> <li> <p> If the value begins with <code>audio/</code>, Amazon Lex returns speech in the response. Amazon Lex uses Amazon Polly to generate the speech (using the configuration you specified in the <code>Accept</code> header). For example, if you specify <code>audio/mpeg</code> as the value, Amazon Lex returns speech in the MPEG format.</p> </li> <li> <p>If the value is <code>audio/pcm</code>, the speech returned is <code>audio/pcm</code> in 16-bit, little endian format. </p> </li> <li> <p>The following are the accepted values:</p> <ul> <li> <p>audio/mpeg</p> </li> <li> <p>audio/ogg</p> </li> <li> <p>audio/pcm</p> </li> <li> <p>text/plain; charset=utf-8</p> </li> <li> <p>audio/* (defaults to mpeg)</p> </li> </ul> </li> </ul>|
|x-amz-lex-active-contexts|header|string(password)|false|<p>A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by including the context in the request,</p> <p>If you don't specify a list of contexts, Amazon Lex will use the current list of contexts for the session. If you specify an empty list, all contexts for the session are cleared.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» inputStream|body|string|true|<p> User input in PCM or Opus audio format or text format as described in the <code>Content-Type</code> HTTP header. </p> <p>You can stream audio data to Amazon Lex or you can create a local buffer that captures all of the audio data before sending. In general, you get better performance if you stream audio data rather than buffering the data locally.</p>|

> Example responses

> 200 Response

```json
{
  "audioStream": {}
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

<h3 id="postcontent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PostContentResponse](#schemapostcontentresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|UnsupportedMediaTypeException|[UnsupportedMediaTypeException](#schemaunsupportedmediatypeexception)|
|486|486|NotAcceptableException|[NotAcceptableException](#schemanotacceptableexception)|
|487|487|RequestTimeoutException|[RequestTimeoutException](#schemarequesttimeoutexception)|
|488|488|DependencyFailedException|[DependencyFailedException](#schemadependencyfailedexception)|
|489|489|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|490|490|LoopDetectedException|[LoopDetectedException](#schemaloopdetectedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PostText

<a id="opIdPostText"></a>

> Code samples

```bash
curl https://runtime-lex.us-east-1.amazonaws.com/bot/string/alias/string/user/string/text \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sessionAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "requestAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "inputText": "password",
    "activeContexts": [
      {
        "name": {},
        "timeToLive": {
          "timeToLiveInSeconds": {},
          "turnsToLive": {}
        },
        "parameters": {
          "property1": "password",
          "property2": "password"
        }
      }
    ]
  }'
```

`POST /bot/{botName}/alias/{botAlias}/user/{userId}/text`

<p>Sends user input to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot. </p> <p> In response, Amazon Lex returns the next <code>message</code> to convey to the user an optional <code>responseCard</code> to display. Consider the following example messages: </p> <ul> <li> <p> For a user input "I would like a pizza", Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?" </p> </li> <li> <p> After the user provides all of the pizza order information, Amazon Lex might return a response with a message to obtain user confirmation "Proceed with the pizza order?". </p> </li> <li> <p> After the user replies to a confirmation prompt with a "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". </p> </li> </ul> <p> Not all Amazon Lex messages require a user response. For example, a conclusion statement does not require a response. Some messages require only a "yes" or "no" user response. In addition to the <code>message</code>, Amazon Lex provides additional context about the message in the response that you might use to enhance client behavior, for example, to display the appropriate client user interface. These are the <code>slotToElicit</code>, <code>dialogState</code>, <code>intentName</code>, and <code>slots</code> fields in the response. Consider the following examples: </p> <ul> <li> <p>If the message is to elicit slot data, Amazon Lex returns the following context information:</p> <ul> <li> <p> <code>dialogState</code> set to ElicitSlot </p> </li> <li> <p> <code>intentName</code> set to the intent name in the current context </p> </li> <li> <p> <code>slotToElicit</code> set to the slot name for which the <code>message</code> is eliciting information </p> </li> <li> <p> <code>slots</code> set to a map of slots, configured for the intent, with currently known values </p> </li> </ul> </li> <li> <p> If the message is a confirmation prompt, the <code>dialogState</code> is set to ConfirmIntent and <code>SlotToElicit</code> is set to null. </p> </li> <li> <p>If the message is a clarification prompt (configured for the intent) that indicates that user intent is not understood, the <code>dialogState</code> is set to ElicitIntent and <code>slotToElicit</code> is set to null. </p> </li> </ul> <p> In addition, Amazon Lex also returns your application-specific <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>

> Body parameter

```json
{
  "sessionAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "requestAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "inputText": "password",
  "activeContexts": [
    {
      "name": {},
      "timeToLive": {
        "timeToLiveInSeconds": {},
        "turnsToLive": {}
      },
      "parameters": {
        "property1": "password",
        "property2": "password"
      }
    }
  ]
}
```

<h3 id="posttext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|botName|path|string|true|The name of the Amazon Lex bot.|
|botAlias|path|string|true|The alias of the Amazon Lex bot.|
|userId|path|string|true|<p>The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot. At runtime, each request must contain the <code>userID</code> field.</p> <p>To decide the user ID to use for your application, consider the following factors.</p> <ul> <li> <p>The <code>userID</code> field must not contain any personally identifiable information of the user, for example, name, personal identification numbers, or other end user personal information.</p> </li> <li> <p>If you want a user to start a conversation on one device and continue on another device, use a user-specific identifier.</p> </li> <li> <p>If you want the same user to be able to have two independent conversations on two different devices, choose a device-specific identifier.</p> </li> <li> <p>A user can't have two independent conversations with two different versions of the same bot. For example, a user can't have a conversation with the PROD and BETA versions of the same bot. If you anticipate that a user will need to have conversation with two different versions, for example, while testing, include the bot alias in the user ID to separate the two conversations.</p> </li> </ul>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» sessionAttributes|body|object|false|<p>Application-specific information passed between Amazon Lex and a client application.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-session-attribs">Setting Session Attributes</a>.</p>|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» requestAttributes|body|object|false|<p>Request-specific information passed between Amazon Lex and a client application.</p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes with the prefix <code>x-amz-lex:</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-request-attribs">Setting Request Attributes</a>.</p>|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» inputText|body|string(password)|true|The text that the user entered (Amazon Lex interprets this text).|
|» activeContexts|body|[[ActiveContext](#schemaactivecontext)]|false|<p>A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by including the context in the request,</p> <p>If you don't specify a list of contexts, Amazon Lex will use the current list of contexts for the session. If you specify an empty list, all contexts for the session are cleared.</p>|

> Example responses

> 200 Response

```json
{
  "intentName": {},
  "nluIntentConfidence": {
    "score": {}
  },
  "alternativeIntents": {},
  "slots": {
    "property1": "string",
    "property2": "string"
  },
  "sessionAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "message": {},
  "sentimentResponse": {
    "sentimentLabel": {},
    "sentimentScore": {}
  },
  "messageFormat": {},
  "dialogState": {},
  "slotToElicit": {},
  "responseCard": {
    "version": {},
    "contentType": {},
    "genericAttachments": {}
  },
  "sessionId": {},
  "botVersion": {},
  "activeContexts": {}
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

<h3 id="posttext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PostTextResponse](#schemaposttextresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|DependencyFailedException|[DependencyFailedException](#schemadependencyfailedexception)|
|486|486|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|487|487|LoopDetectedException|[LoopDetectedException](#schemaloopdetectedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_DeleteSessionResponse">DeleteSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesessionresponse"></a>
<a id="schema_DeleteSessionResponse"></a>
<a id="tocSdeletesessionresponse"></a>
<a id="tocsdeletesessionresponse"></a>

```json
{
  "botName": {},
  "botAlias": {},
  "userId": {},
  "sessionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|botName|object|false|none|none|
|botAlias|object|false|none|none|
|userId|object|false|none|none|
|sessionId|object|false|none|none|

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

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

<h2 id="tocS_InternalFailureException">InternalFailureException</h2>
<!-- backwards compatibility -->
<a id="schemainternalfailureexception"></a>
<a id="schema_InternalFailureException"></a>
<a id="tocSinternalfailureexception"></a>
<a id="tocsinternalfailureexception"></a>

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

<h2 id="tocS_GetSessionResponse">GetSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsessionresponse"></a>
<a id="schema_GetSessionResponse"></a>
<a id="tocSgetsessionresponse"></a>
<a id="tocsgetsessionresponse"></a>

```json
{
  "recentIntentSummaryView": {},
  "sessionAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "sessionId": {},
  "dialogAction": {
    "type": {},
    "intentName": {},
    "slots": {
      "property1": "string",
      "property2": "string"
    },
    "slotToElicit": {},
    "fulfillmentState": {},
    "message": {},
    "messageFormat": {}
  },
  "activeContexts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recentIntentSummaryView|object|false|none|none|
|sessionAttributes|object|false|none|none|
|sessionId|object|false|none|none|
|dialogAction|object|false|none|none|
|activeContexts|object|false|none|none|

<h2 id="tocS_PostContentResponse">PostContentResponse</h2>
<!-- backwards compatibility -->
<a id="schemapostcontentresponse"></a>
<a id="schema_PostContentResponse"></a>
<a id="tocSpostcontentresponse"></a>
<a id="tocspostcontentresponse"></a>

```json
{
  "audioStream": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioStream|object|false|none|none|

<h2 id="tocS_UnsupportedMediaTypeException">UnsupportedMediaTypeException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedmediatypeexception"></a>
<a id="schema_UnsupportedMediaTypeException"></a>
<a id="tocSunsupportedmediatypeexception"></a>
<a id="tocsunsupportedmediatypeexception"></a>

```json
null
```

<h2 id="tocS_NotAcceptableException">NotAcceptableException</h2>
<!-- backwards compatibility -->
<a id="schemanotacceptableexception"></a>
<a id="schema_NotAcceptableException"></a>
<a id="tocSnotacceptableexception"></a>
<a id="tocsnotacceptableexception"></a>

```json
null
```

<h2 id="tocS_RequestTimeoutException">RequestTimeoutException</h2>
<!-- backwards compatibility -->
<a id="schemarequesttimeoutexception"></a>
<a id="schema_RequestTimeoutException"></a>
<a id="tocSrequesttimeoutexception"></a>
<a id="tocsrequesttimeoutexception"></a>

```json
null
```

<h2 id="tocS_DependencyFailedException">DependencyFailedException</h2>
<!-- backwards compatibility -->
<a id="schemadependencyfailedexception"></a>
<a id="schema_DependencyFailedException"></a>
<a id="tocSdependencyfailedexception"></a>
<a id="tocsdependencyfailedexception"></a>

```json
null
```

<h2 id="tocS_BadGatewayException">BadGatewayException</h2>
<!-- backwards compatibility -->
<a id="schemabadgatewayexception"></a>
<a id="schema_BadGatewayException"></a>
<a id="tocSbadgatewayexception"></a>
<a id="tocsbadgatewayexception"></a>

```json
null
```

<h2 id="tocS_LoopDetectedException">LoopDetectedException</h2>
<!-- backwards compatibility -->
<a id="schemaloopdetectedexception"></a>
<a id="schema_LoopDetectedException"></a>
<a id="tocSloopdetectedexception"></a>
<a id="tocsloopdetectedexception"></a>

```json
null
```

<h2 id="tocS_PostTextResponse">PostTextResponse</h2>
<!-- backwards compatibility -->
<a id="schemaposttextresponse"></a>
<a id="schema_PostTextResponse"></a>
<a id="tocSposttextresponse"></a>
<a id="tocsposttextresponse"></a>

```json
{
  "intentName": {},
  "nluIntentConfidence": {
    "score": {}
  },
  "alternativeIntents": {},
  "slots": {
    "property1": "string",
    "property2": "string"
  },
  "sessionAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "message": {},
  "sentimentResponse": {
    "sentimentLabel": {},
    "sentimentScore": {}
  },
  "messageFormat": {},
  "dialogState": {},
  "slotToElicit": {},
  "responseCard": {
    "version": {},
    "contentType": {},
    "genericAttachments": {}
  },
  "sessionId": {},
  "botVersion": {},
  "activeContexts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intentName|object|false|none|none|
|nluIntentConfidence|object|false|none|none|
|alternativeIntents|object|false|none|none|
|slots|object|false|none|none|
|sessionAttributes|object|false|none|none|
|message|object|false|none|none|
|sentimentResponse|object|false|none|none|
|messageFormat|object|false|none|none|
|dialogState|object|false|none|none|
|slotToElicit|object|false|none|none|
|responseCard|object|false|none|none|
|sessionId|object|false|none|none|
|botVersion|object|false|none|none|
|activeContexts|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_ActiveContext">ActiveContext</h2>
<!-- backwards compatibility -->
<a id="schemaactivecontext"></a>
<a id="schema_ActiveContext"></a>
<a id="tocSactivecontext"></a>
<a id="tocsactivecontext"></a>

```json
{
  "name": {},
  "timeToLive": {
    "timeToLiveInSeconds": {},
    "turnsToLive": {}
  },
  "parameters": {
    "property1": "password",
    "property2": "password"
  }
}
```

A context is a variable that contains information about the current state of the conversation between a user and Amazon Lex. Context can be set automatically by Amazon Lex when an intent is fulfilled, or it can be set at runtime using the <code>PutContent</code>, <code>PutText</code>, or <code>PutSession</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|timeToLive|object|true|none|none|
|parameters|object|true|none|none|

<h2 id="tocS_PutSessionResponse">PutSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputsessionresponse"></a>
<a id="schema_PutSessionResponse"></a>
<a id="tocSputsessionresponse"></a>
<a id="tocsputsessionresponse"></a>

```json
{
  "audioStream": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioStream|object|false|none|none|

<h2 id="tocS_DialogActionType">DialogActionType</h2>
<!-- backwards compatibility -->
<a id="schemadialogactiontype"></a>
<a id="schema_DialogActionType"></a>
<a id="tocSdialogactiontype"></a>
<a id="tocsdialogactiontype"></a>

```json
"ElicitIntent"
```

<h2 id="tocS_IntentName">IntentName</h2>
<!-- backwards compatibility -->
<a id="schemaintentname"></a>
<a id="schema_IntentName"></a>
<a id="tocSintentname"></a>
<a id="tocsintentname"></a>

```json
"string"
```

<h2 id="tocS_StringMap">StringMap</h2>
<!-- backwards compatibility -->
<a id="schemastringmap"></a>
<a id="schema_StringMap"></a>
<a id="tocSstringmap"></a>
<a id="tocsstringmap"></a>

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

<h2 id="tocS_FulfillmentState">FulfillmentState</h2>
<!-- backwards compatibility -->
<a id="schemafulfillmentstate"></a>
<a id="schema_FulfillmentState"></a>
<a id="tocSfulfillmentstate"></a>
<a id="tocsfulfillmentstate"></a>

```json
"Fulfilled"
```

<h2 id="tocS_Text">Text</h2>
<!-- backwards compatibility -->
<a id="schematext"></a>
<a id="schema_Text"></a>
<a id="tocStext"></a>
<a id="tocstext"></a>

```json
"password"
```

<h2 id="tocS_MessageFormatType">MessageFormatType</h2>
<!-- backwards compatibility -->
<a id="schemamessageformattype"></a>
<a id="schema_MessageFormatType"></a>
<a id="tocSmessageformattype"></a>
<a id="tocsmessageformattype"></a>

```json
"PlainText"
```

<h2 id="tocS_IntentSummary">IntentSummary</h2>
<!-- backwards compatibility -->
<a id="schemaintentsummary"></a>
<a id="schema_IntentSummary"></a>
<a id="tocSintentsummary"></a>
<a id="tocsintentsummary"></a>

```json
{
  "intentName": {},
  "checkpointLabel": {},
  "slots": {
    "property1": "string",
    "property2": "string"
  },
  "confirmationStatus": {},
  "dialogActionType": {},
  "fulfillmentState": {},
  "slotToElicit": {}
}
```

Provides information about the state of an intent. You can use this information to get the current state of an intent so that you can process the intent, or so that you can return the intent to its previous state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intentName|object|false|none|none|
|checkpointLabel|object|false|none|none|
|slots|object|false|none|none|
|confirmationStatus|object|false|none|none|
|dialogActionType|object|true|none|none|
|fulfillmentState|object|false|none|none|
|slotToElicit|object|false|none|none|

<h2 id="tocS_Accept">Accept</h2>
<!-- backwards compatibility -->
<a id="schemaaccept"></a>
<a id="schema_Accept"></a>
<a id="tocSaccept"></a>
<a id="tocsaccept"></a>

```json
"string"
```

<h2 id="tocS_ActiveContextName">ActiveContextName</h2>
<!-- backwards compatibility -->
<a id="schemaactivecontextname"></a>
<a id="schema_ActiveContextName"></a>
<a id="tocSactivecontextname"></a>
<a id="tocsactivecontextname"></a>

```json
"string"
```

<h2 id="tocS_ActiveContextTimeToLive">ActiveContextTimeToLive</h2>
<!-- backwards compatibility -->
<a id="schemaactivecontexttimetolive"></a>
<a id="schema_ActiveContextTimeToLive"></a>
<a id="tocSactivecontexttimetolive"></a>
<a id="tocsactivecontexttimetolive"></a>

```json
{
  "timeToLiveInSeconds": {},
  "turnsToLive": {}
}
```

The length of time or number of turns that a context remains active.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeToLiveInSeconds|object|false|none|none|
|turnsToLive|object|false|none|none|

<h2 id="tocS_ActiveContextParametersMap">ActiveContextParametersMap</h2>
<!-- backwards compatibility -->
<a id="schemaactivecontextparametersmap"></a>
<a id="schema_ActiveContextParametersMap"></a>
<a id="tocSactivecontextparametersmap"></a>
<a id="tocsactivecontextparametersmap"></a>

```json
{
  "property1": "password",
  "property2": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Text](#schematext)|false|none|none|

<h2 id="tocS_ActiveContextTimeToLiveInSeconds">ActiveContextTimeToLiveInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaactivecontexttimetoliveinseconds"></a>
<a id="schema_ActiveContextTimeToLiveInSeconds"></a>
<a id="tocSactivecontexttimetoliveinseconds"></a>
<a id="tocsactivecontexttimetoliveinseconds"></a>

```json
5
```

<h2 id="tocS_ActiveContextTurnsToLive">ActiveContextTurnsToLive</h2>
<!-- backwards compatibility -->
<a id="schemaactivecontextturnstolive"></a>
<a id="schema_ActiveContextTurnsToLive"></a>
<a id="tocSactivecontextturnstolive"></a>
<a id="tocsactivecontextturnstolive"></a>

```json
1
```

<h2 id="tocS_ActiveContextsList">ActiveContextsList</h2>
<!-- backwards compatibility -->
<a id="schemaactivecontextslist"></a>
<a id="schema_ActiveContextsList"></a>
<a id="tocSactivecontextslist"></a>
<a id="tocsactivecontextslist"></a>

```json
[
  {
    "name": {},
    "timeToLive": {
      "timeToLiveInSeconds": {},
      "turnsToLive": {}
    },
    "parameters": {
      "property1": "password",
      "property2": "password"
    }
  }
]
```

<h2 id="tocS_ActiveContextsString">ActiveContextsString</h2>
<!-- backwards compatibility -->
<a id="schemaactivecontextsstring"></a>
<a id="schema_ActiveContextsString"></a>
<a id="tocSactivecontextsstring"></a>
<a id="tocsactivecontextsstring"></a>

```json
"password"
```

<h2 id="tocS_AttributesString">AttributesString</h2>
<!-- backwards compatibility -->
<a id="schemaattributesstring"></a>
<a id="schema_AttributesString"></a>
<a id="tocSattributesstring"></a>
<a id="tocsattributesstring"></a>

```json
"password"
```

<h2 id="tocS_BlobStream">BlobStream</h2>
<!-- backwards compatibility -->
<a id="schemablobstream"></a>
<a id="schema_BlobStream"></a>
<a id="tocSblobstream"></a>
<a id="tocsblobstream"></a>

```json
"string"
```

<h2 id="tocS_BotAlias">BotAlias</h2>
<!-- backwards compatibility -->
<a id="schemabotalias"></a>
<a id="schema_BotAlias"></a>
<a id="tocSbotalias"></a>
<a id="tocsbotalias"></a>

```json
"string"
```

<h2 id="tocS_BotName">BotName</h2>
<!-- backwards compatibility -->
<a id="schemabotname"></a>
<a id="schema_BotName"></a>
<a id="tocSbotname"></a>
<a id="tocsbotname"></a>

```json
"string"
```

<h2 id="tocS_BotVersion">BotVersion</h2>
<!-- backwards compatibility -->
<a id="schemabotversion"></a>
<a id="schema_BotVersion"></a>
<a id="tocSbotversion"></a>
<a id="tocsbotversion"></a>

```json
"string"
```

<h2 id="tocS_ButtonTextStringWithLength">ButtonTextStringWithLength</h2>
<!-- backwards compatibility -->
<a id="schemabuttontextstringwithlength"></a>
<a id="schema_ButtonTextStringWithLength"></a>
<a id="tocSbuttontextstringwithlength"></a>
<a id="tocsbuttontextstringwithlength"></a>

```json
"string"
```

<h2 id="tocS_ButtonValueStringWithLength">ButtonValueStringWithLength</h2>
<!-- backwards compatibility -->
<a id="schemabuttonvaluestringwithlength"></a>
<a id="schema_ButtonValueStringWithLength"></a>
<a id="tocSbuttonvaluestringwithlength"></a>
<a id="tocsbuttonvaluestringwithlength"></a>

```json
"string"
```

<h2 id="tocS_Button">Button</h2>
<!-- backwards compatibility -->
<a id="schemabutton"></a>
<a id="schema_Button"></a>
<a id="tocSbutton"></a>
<a id="tocsbutton"></a>

```json
{
  "text": {},
  "value": {}
}
```

Represents an option to be shown on the client platform (Facebook, Slack, etc.)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_ConfirmationStatus">ConfirmationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmationstatus"></a>
<a id="schema_ConfirmationStatus"></a>
<a id="tocSconfirmationstatus"></a>
<a id="tocsconfirmationstatus"></a>

```json
"None"
```

<h2 id="tocS_ContentType">ContentType</h2>
<!-- backwards compatibility -->
<a id="schemacontenttype"></a>
<a id="schema_ContentType"></a>
<a id="tocScontenttype"></a>
<a id="tocscontenttype"></a>

```json
"application/vnd.amazonaws.card.generic"
```

<h2 id="tocS_UserId">UserId</h2>
<!-- backwards compatibility -->
<a id="schemauserid"></a>
<a id="schema_UserId"></a>
<a id="tocSuserid"></a>
<a id="tocsuserid"></a>

```json
"string"
```

<h2 id="tocS_DeleteSessionRequest">DeleteSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesessionrequest"></a>
<a id="schema_DeleteSessionRequest"></a>
<a id="tocSdeletesessionrequest"></a>
<a id="tocsdeletesessionrequest"></a>

```json
{}
```

<h2 id="tocS_DialogAction">DialogAction</h2>
<!-- backwards compatibility -->
<a id="schemadialogaction"></a>
<a id="schema_DialogAction"></a>
<a id="tocSdialogaction"></a>
<a id="tocsdialogaction"></a>

```json
{
  "type": {},
  "intentName": {},
  "slots": {
    "property1": "string",
    "property2": "string"
  },
  "slotToElicit": {},
  "fulfillmentState": {},
  "message": {},
  "messageFormat": {}
}
```

Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|intentName|object|false|none|none|
|slots|object|false|none|none|
|slotToElicit|object|false|none|none|
|fulfillmentState|object|false|none|none|
|message|object|false|none|none|
|messageFormat|object|false|none|none|

<h2 id="tocS_DialogState">DialogState</h2>
<!-- backwards compatibility -->
<a id="schemadialogstate"></a>
<a id="schema_DialogState"></a>
<a id="tocSdialogstate"></a>
<a id="tocsdialogstate"></a>

```json
"ElicitIntent"
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

<h2 id="tocS_StringWithLength">StringWithLength</h2>
<!-- backwards compatibility -->
<a id="schemastringwithlength"></a>
<a id="schema_StringWithLength"></a>
<a id="tocSstringwithlength"></a>
<a id="tocsstringwithlength"></a>

```json
"string"
```

<h2 id="tocS_StringUrlWithLength">StringUrlWithLength</h2>
<!-- backwards compatibility -->
<a id="schemastringurlwithlength"></a>
<a id="schema_StringUrlWithLength"></a>
<a id="tocSstringurlwithlength"></a>
<a id="tocsstringurlwithlength"></a>

```json
"string"
```

<h2 id="tocS_listOfButtons">listOfButtons</h2>
<!-- backwards compatibility -->
<a id="schemalistofbuttons"></a>
<a id="schema_listOfButtons"></a>
<a id="tocSlistofbuttons"></a>
<a id="tocslistofbuttons"></a>

```json
[
  {
    "text": {},
    "value": {}
  }
]
```

<h2 id="tocS_GenericAttachment">GenericAttachment</h2>
<!-- backwards compatibility -->
<a id="schemagenericattachment"></a>
<a id="schema_GenericAttachment"></a>
<a id="tocSgenericattachment"></a>
<a id="tocsgenericattachment"></a>

```json
{
  "title": {},
  "subTitle": {},
  "attachmentLinkUrl": {},
  "imageUrl": {},
  "buttons": {}
}
```

Represents an option rendered to the user when a prompt is shown. It could be an image, a button, a link, or text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|object|false|none|none|
|subTitle|object|false|none|none|
|attachmentLinkUrl|object|false|none|none|
|imageUrl|object|false|none|none|
|buttons|object|false|none|none|

<h2 id="tocS_IntentSummaryCheckpointLabel">IntentSummaryCheckpointLabel</h2>
<!-- backwards compatibility -->
<a id="schemaintentsummarycheckpointlabel"></a>
<a id="schema_IntentSummaryCheckpointLabel"></a>
<a id="tocSintentsummarycheckpointlabel"></a>
<a id="tocsintentsummarycheckpointlabel"></a>

```json
"string"
```

<h2 id="tocS_GetSessionRequest">GetSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsessionrequest"></a>
<a id="schema_GetSessionRequest"></a>
<a id="tocSgetsessionrequest"></a>
<a id="tocsgetsessionrequest"></a>

```json
{}
```

<h2 id="tocS_IntentSummaryList">IntentSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaintentsummarylist"></a>
<a id="schema_IntentSummaryList"></a>
<a id="tocSintentsummarylist"></a>
<a id="tocsintentsummarylist"></a>

```json
[
  {
    "intentName": {},
    "checkpointLabel": {},
    "slots": {
      "property1": "string",
      "property2": "string"
    },
    "confirmationStatus": {},
    "dialogActionType": {},
    "fulfillmentState": {},
    "slotToElicit": {}
  }
]
```

<h2 id="tocS_HttpContentType">HttpContentType</h2>
<!-- backwards compatibility -->
<a id="schemahttpcontenttype"></a>
<a id="schema_HttpContentType"></a>
<a id="tocShttpcontenttype"></a>
<a id="tocshttpcontenttype"></a>

```json
"string"
```

<h2 id="tocS_IntentConfidence">IntentConfidence</h2>
<!-- backwards compatibility -->
<a id="schemaintentconfidence"></a>
<a id="schema_IntentConfidence"></a>
<a id="tocSintentconfidence"></a>
<a id="tocsintentconfidence"></a>

```json
{
  "score": {}
}
```

Provides a score that indicates the confidence that Amazon Lex has that an intent is the one that satisfies the user's intent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|score|object|false|none|none|

<h2 id="tocS_PredictedIntent">PredictedIntent</h2>
<!-- backwards compatibility -->
<a id="schemapredictedintent"></a>
<a id="schema_PredictedIntent"></a>
<a id="tocSpredictedintent"></a>
<a id="tocspredictedintent"></a>

```json
{
  "intentName": {},
  "nluIntentConfidence": {
    "score": {}
  },
  "slots": {
    "property1": "string",
    "property2": "string"
  }
}
```

An intent that Amazon Lex suggests satisfies the user's intent. Includes the name of the intent, the confidence that Amazon Lex has that the user's intent is satisfied, and the slots defined for the intent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intentName|object|false|none|none|
|nluIntentConfidence|object|false|none|none|
|slots|object|false|none|none|

<h2 id="tocS_IntentList">IntentList</h2>
<!-- backwards compatibility -->
<a id="schemaintentlist"></a>
<a id="schema_IntentList"></a>
<a id="tocSintentlist"></a>
<a id="tocsintentlist"></a>

```json
[
  {
    "intentName": {},
    "nluIntentConfidence": {
      "score": {}
    },
    "slots": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ParameterName">ParameterName</h2>
<!-- backwards compatibility -->
<a id="schemaparametername"></a>
<a id="schema_ParameterName"></a>
<a id="tocSparametername"></a>
<a id="tocsparametername"></a>

```json
"string"
```

<h2 id="tocS_PostContentRequest">PostContentRequest</h2>
<!-- backwards compatibility -->
<a id="schemapostcontentrequest"></a>
<a id="schema_PostContentRequest"></a>
<a id="tocSpostcontentrequest"></a>
<a id="tocspostcontentrequest"></a>

```json
{
  "inputStream": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputStream|object|true|none|none|

<h2 id="tocS_SensitiveString">SensitiveString</h2>
<!-- backwards compatibility -->
<a id="schemasensitivestring"></a>
<a id="schema_SensitiveString"></a>
<a id="tocSsensitivestring"></a>
<a id="tocssensitivestring"></a>

```json
"password"
```

<h2 id="tocS_SensitiveStringUnbounded">SensitiveStringUnbounded</h2>
<!-- backwards compatibility -->
<a id="schemasensitivestringunbounded"></a>
<a id="schema_SensitiveStringUnbounded"></a>
<a id="tocSsensitivestringunbounded"></a>
<a id="tocssensitivestringunbounded"></a>

```json
"password"
```

<h2 id="tocS_PostTextRequest">PostTextRequest</h2>
<!-- backwards compatibility -->
<a id="schemaposttextrequest"></a>
<a id="schema_PostTextRequest"></a>
<a id="tocSposttextrequest"></a>
<a id="tocsposttextrequest"></a>

```json
{
  "sessionAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "requestAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "inputText": {},
  "activeContexts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionAttributes|object|false|none|none|
|requestAttributes|object|false|none|none|
|inputText|object|true|none|none|
|activeContexts|object|false|none|none|

<h2 id="tocS_SentimentResponse">SentimentResponse</h2>
<!-- backwards compatibility -->
<a id="schemasentimentresponse"></a>
<a id="schema_SentimentResponse"></a>
<a id="tocSsentimentresponse"></a>
<a id="tocssentimentresponse"></a>

```json
{
  "sentimentLabel": {},
  "sentimentScore": {}
}
```

<p>The sentiment expressed in an utterance.</p> <p>When the bot is configured to send utterances to Amazon Comprehend for sentiment analysis, this field structure contains the result of the analysis.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sentimentLabel|object|false|none|none|
|sentimentScore|object|false|none|none|

<h2 id="tocS_ResponseCard">ResponseCard</h2>
<!-- backwards compatibility -->
<a id="schemaresponsecard"></a>
<a id="schema_ResponseCard"></a>
<a id="tocSresponsecard"></a>
<a id="tocsresponsecard"></a>

```json
{
  "version": {},
  "contentType": {},
  "genericAttachments": {}
}
```

If you configure a response card when creating your bots, Amazon Lex substitutes the session attributes and slot values that are available, and then returns it. The response card can also come from a Lambda function ( <code>dialogCodeHook</code> and <code>fulfillmentActivity</code> on an intent).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|object|false|none|none|
|contentType|object|false|none|none|
|genericAttachments|object|false|none|none|

<h2 id="tocS_PutSessionRequest">PutSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputsessionrequest"></a>
<a id="schema_PutSessionRequest"></a>
<a id="tocSputsessionrequest"></a>
<a id="tocsputsessionrequest"></a>

```json
{
  "sessionAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "dialogAction": {
    "type": {},
    "intentName": {},
    "slots": {
      "property1": "string",
      "property2": "string"
    },
    "slotToElicit": {},
    "fulfillmentState": {},
    "message": {},
    "messageFormat": {}
  },
  "recentIntentSummaryView": {},
  "activeContexts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionAttributes|object|false|none|none|
|dialogAction|object|false|none|none|
|recentIntentSummaryView|object|false|none|none|
|activeContexts|object|false|none|none|

<h2 id="tocS_genericAttachmentList">genericAttachmentList</h2>
<!-- backwards compatibility -->
<a id="schemagenericattachmentlist"></a>
<a id="schema_genericAttachmentList"></a>
<a id="tocSgenericattachmentlist"></a>
<a id="tocsgenericattachmentlist"></a>

```json
[
  {
    "title": {},
    "subTitle": {},
    "attachmentLinkUrl": {},
    "imageUrl": {},
    "buttons": {}
  }
]
```

<h2 id="tocS_SentimentLabel">SentimentLabel</h2>
<!-- backwards compatibility -->
<a id="schemasentimentlabel"></a>
<a id="schema_SentimentLabel"></a>
<a id="tocSsentimentlabel"></a>
<a id="tocssentimentlabel"></a>

```json
"string"
```

<h2 id="tocS_SentimentScore">SentimentScore</h2>
<!-- backwards compatibility -->
<a id="schemasentimentscore"></a>
<a id="schema_SentimentScore"></a>
<a id="tocSsentimentscore"></a>
<a id="tocssentimentscore"></a>

```json
"string"
```
