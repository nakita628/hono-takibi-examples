<h1 id="amazon-lex-runtime-v2">Amazon Lex Runtime V2 v2020-08-07</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This section contains documentation for the Amazon Lex V2 Runtime V2 API operations.

Base URLs:

* <a href="http://runtime-v2-lex.us-east-1.amazonaws.com">http://runtime-v2-lex.us-east-1.amazonaws.com</a> - The Lex Runtime V2 multi-region endpoint

* <a href="https://runtime-v2-lex.us-east-1.amazonaws.com">https://runtime-v2-lex.us-east-1.amazonaws.com</a> - The Lex Runtime V2 multi-region endpoint

* <a href="http://runtime-v2-lex.cn-north-1.amazonaws.com.cn">http://runtime-v2-lex.cn-north-1.amazonaws.com.cn</a> - The Lex Runtime V2 endpoint for China (Beijing) and China (Ningxia)

* <a href="https://runtime-v2-lex.cn-north-1.amazonaws.com.cn">https://runtime-v2-lex.cn-north-1.amazonaws.com.cn</a> - The Lex Runtime V2 endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/runtime-v2-lex/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-lex-runtime-v2-default">Default</h1>

## GetSession

<a id="opIdGetSession"></a>

> Code samples

```bash
curl https://runtime-lex-v2.us-east-1.amazonaws.com/bots/stringstri/botAliases/string/botLocales/string/sessions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}`

<p>Returns session information for a specified bot, alias, and user.</p> <p>For example, you can use this operation to retrieve session information for a user that has left a long-running session in use.</p> <p>If the bot, alias, or session identifier doesn't exist, Amazon Lex V2 returns a <code>BadRequestException</code>. If the locale doesn't exist or is not enabled for the alias, you receive a <code>BadRequestException</code>.</p>

<h3 id="getsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|botId|path|string|true|The identifier of the bot that contains the session data.|
|botAliasId|path|string|true|The alias identifier in use for the bot that contains the session data.|
|localeId|path|string|true|The locale where the session is in use.|
|sessionId|path|string|true|The identifier of the session to return.|
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
  "sessionId": {},
  "messages": {},
  "interpretations": {},
  "sessionState": {
    "dialogAction": {
      "type": {},
      "slotToElicit": {},
      "slotElicitationStyle": {},
      "subSlotToElicit": {
        "name": {},
        "subSlotToElicit": {}
      }
    },
    "intent": {
      "name": {},
      "slots": {
        "property1": {},
        "property2": {}
      },
      "state": {},
      "confirmationState": {}
    },
    "activeContexts": {},
    "sessionAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "originatingRequestId": {},
    "runtimeHints": {
      "slotHints": {
        "property1": {
          "property1": {},
          "property2": {}
        },
        "property2": {
          "property1": {},
          "property2": {}
        }
      }
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

<h3 id="getsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSessionResponse](#schemagetsessionresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutSession

<a id="opIdPutSession"></a>

> Code samples

```bash
curl https://runtime-lex-v2.us-east-1.amazonaws.com/bots/stringstri/botAliases/string/botLocales/string/sessions/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "messages": [
      {
        "content": {},
        "contentType": {},
        "imageResponseCard": {
          "title": {},
          "subtitle": {},
          "imageUrl": {},
          "buttons": {}
        }
      }
    ],
    "sessionState": {
      "dialogAction": {
        "type": {},
        "slotToElicit": {},
        "slotElicitationStyle": {},
        "subSlotToElicit": {
          "name": {},
          "subSlotToElicit": {}
        }
      },
      "intent": {
        "name": {},
        "slots": {
          "property1": {},
          "property2": {}
        },
        "state": {},
        "confirmationState": {}
      },
      "activeContexts": {},
      "sessionAttributes": {
        "property1": "string",
        "property2": "string"
      },
      "originatingRequestId": {},
      "runtimeHints": {
        "slotHints": {
          "property1": {
            "property1": {},
            "property2": {}
          },
          "property2": {
            "property1": {},
            "property2": {}
          }
        }
      }
    },
    "requestAttributes": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}`

Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable your application to set the state of the bot.

> Body parameter

```json
{
  "messages": [
    {
      "content": {},
      "contentType": {},
      "imageResponseCard": {
        "title": {},
        "subtitle": {},
        "imageUrl": {},
        "buttons": {}
      }
    }
  ],
  "sessionState": {
    "dialogAction": {
      "type": {},
      "slotToElicit": {},
      "slotElicitationStyle": {},
      "subSlotToElicit": {
        "name": {},
        "subSlotToElicit": {}
      }
    },
    "intent": {
      "name": {},
      "slots": {
        "property1": {},
        "property2": {}
      },
      "state": {},
      "confirmationState": {}
    },
    "activeContexts": {},
    "sessionAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "originatingRequestId": {},
    "runtimeHints": {
      "slotHints": {
        "property1": {
          "property1": {},
          "property2": {}
        },
        "property2": {
          "property1": {},
          "property2": {}
        }
      }
    }
  },
  "requestAttributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="putsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|botId|path|string|true|The identifier of the bot that receives the session data.|
|botAliasId|path|string|true|The alias identifier of the bot that receives the session data.|
|localeId|path|string|true|The locale where the session is in use.|
|sessionId|path|string|true|The identifier of the session that receives the session data.|
|ResponseContentType|header|string|false|<p>The message that Amazon Lex V2 returns in the response can be either text or speech depending on the value of this parameter. </p> <ul> <li> <p>If the value is <code>text/plain; charset=utf-8</code>, Amazon Lex V2 returns text in the response.</p> </li> </ul>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» messages|body|[[Message](#schemamessage)]|false|A list of messages to send to the user. Messages are sent in the order that they are defined in the list.|
|» sessionState|body|object|true|The state of the user's session with Amazon Lex V2.|
|» » dialogAction|body|object|false|none|
|» » » type|body|object|true|none|
|» » » slotToElicit|body|object|false|none|
|» » » slotElicitationStyle|body|object|false|none|
|» » » subSlotToElicit|body|object|false|none|
|» » » » name|body|object|true|none|
|» » » » subSlotToElicit|body|object|false|none|
|» » intent|body|object|false|none|
|» » » name|body|object|true|none|
|» » » slots|body|object|false|none|
|» » » » **additionalProperties**|body|[Slot](#schemaslot)|false|A value that Amazon Lex V2 uses to fulfill an intent. |
|» » » state|body|object|false|none|
|» » » confirmationState|body|object|false|none|
|» » activeContexts|body|object|false|none|
|» » sessionAttributes|body|object|false|none|
|» » » **additionalProperties**|body|[String](#schemastring)|false|none|
|» » originatingRequestId|body|object|false|none|
|» » runtimeHints|body|object|false|none|
|» » » slotHints|body|object|false|none|
|» » » » **additionalProperties**|body|[SlotHintsSlotMap](#schemaslothintsslotmap)|false|none|
|» requestAttributes|body|object|false|<p>Request-specific information passed between Amazon Lex V2 and the client application.</p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes with the prefix <code>x-amz-lex:</code>.</p>|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

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
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|
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
curl https://runtime-lex-v2.us-east-1.amazonaws.com/bots/stringstri/botAliases/string/botLocales/string/sessions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}`

<p>Removes session information for a specified bot, alias, and user ID. </p> <p>You can use this operation to restart a conversation with a bot. When you remove a session, the entire history of the session is removed so that you can start again.</p> <p>You don't need to delete a session. Sessions have a time limit and will expire. Set the session time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and 24 hours.</p> <p>If you specify a bot or alias ID that doesn't exist, you receive a <code>BadRequestException.</code> </p> <p>If the locale doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a <code>BadRequestException</code>.</p>

<h3 id="deletesession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|botId|path|string|true|The identifier of the bot that contains the session data.|
|botAliasId|path|string|true|The alias identifier in use for the bot that contains the session data.|
|localeId|path|string|true|The locale where the session is in use.|
|sessionId|path|string|true|The identifier of the session to delete.|
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
  "botId": {},
  "botAliasId": {},
  "localeId": {},
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

> 485 Response

```json
null
```

<h3 id="deletesession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSessionResponse](#schemadeletesessionresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RecognizeText

<a id="opIdRecognizeText"></a>

> Code samples

```bash
curl https://runtime-lex-v2.us-east-1.amazonaws.com/bots/stringstri/botAliases/string/botLocales/string/sessions/string/text \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "text": "password",
    "sessionState": {
      "dialogAction": {
        "type": {},
        "slotToElicit": {},
        "slotElicitationStyle": {},
        "subSlotToElicit": {
          "name": {},
          "subSlotToElicit": {}
        }
      },
      "intent": {
        "name": {},
        "slots": {
          "property1": {},
          "property2": {}
        },
        "state": {},
        "confirmationState": {}
      },
      "activeContexts": {},
      "sessionAttributes": {
        "property1": "string",
        "property2": "string"
      },
      "originatingRequestId": {},
      "runtimeHints": {
        "slotHints": {
          "property1": {
            "property1": {},
            "property2": {}
          },
          "property2": {
            "property1": {},
            "property2": {}
          }
        }
      }
    },
    "requestAttributes": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text`

<p>Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the bot.</p> <p>In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to display.</p> <p>If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p> <ul> <li> <p> <b>Success message</b> - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present.</p> </li> <li> <p> <b>Failed message</b> - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message.</p> </li> <li> <p> <b>Timeout message</b> - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>

> Body parameter

```json
{
  "text": "password",
  "sessionState": {
    "dialogAction": {
      "type": {},
      "slotToElicit": {},
      "slotElicitationStyle": {},
      "subSlotToElicit": {
        "name": {},
        "subSlotToElicit": {}
      }
    },
    "intent": {
      "name": {},
      "slots": {
        "property1": {},
        "property2": {}
      },
      "state": {},
      "confirmationState": {}
    },
    "activeContexts": {},
    "sessionAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "originatingRequestId": {},
    "runtimeHints": {
      "slotHints": {
        "property1": {
          "property1": {},
          "property2": {}
        },
        "property2": {
          "property1": {},
          "property2": {}
        }
      }
    }
  },
  "requestAttributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="recognizetext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|botId|path|string|true|The identifier of the bot that processes the request.|
|botAliasId|path|string|true|The alias identifier in use for the bot that processes the request.|
|localeId|path|string|true|The locale where the session is in use.|
|sessionId|path|string|true|The identifier of the user session that is having the conversation.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» text|body|string(password)|true|The text that the user entered. Amazon Lex V2 interprets this text.|
|» sessionState|body|object|false|The state of the user's session with Amazon Lex V2.|
|» » dialogAction|body|object|false|none|
|» » » type|body|object|true|none|
|» » » slotToElicit|body|object|false|none|
|» » » slotElicitationStyle|body|object|false|none|
|» » » subSlotToElicit|body|object|false|none|
|» » » » name|body|object|true|none|
|» » » » subSlotToElicit|body|object|false|none|
|» » intent|body|object|false|none|
|» » » name|body|object|true|none|
|» » » slots|body|object|false|none|
|» » » » **additionalProperties**|body|[Slot](#schemaslot)|false|A value that Amazon Lex V2 uses to fulfill an intent. |
|» » » state|body|object|false|none|
|» » » confirmationState|body|object|false|none|
|» » activeContexts|body|object|false|none|
|» » sessionAttributes|body|object|false|none|
|» » » **additionalProperties**|body|[String](#schemastring)|false|none|
|» » originatingRequestId|body|object|false|none|
|» » runtimeHints|body|object|false|none|
|» » » slotHints|body|object|false|none|
|» » » » **additionalProperties**|body|[SlotHintsSlotMap](#schemaslothintsslotmap)|false|none|
|» requestAttributes|body|object|false|<p>Request-specific information passed between the client application and Amazon Lex V2 </p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes with the prefix <code>x-amz-lex:</code>.</p>|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 200 Response

```json
{
  "messages": {},
  "sessionState": {
    "dialogAction": {
      "type": {},
      "slotToElicit": {},
      "slotElicitationStyle": {},
      "subSlotToElicit": {
        "name": {},
        "subSlotToElicit": {}
      }
    },
    "intent": {
      "name": {},
      "slots": {
        "property1": {},
        "property2": {}
      },
      "state": {},
      "confirmationState": {}
    },
    "activeContexts": {},
    "sessionAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "originatingRequestId": {},
    "runtimeHints": {
      "slotHints": {
        "property1": {
          "property1": {},
          "property2": {}
        },
        "property2": {
          "property1": {},
          "property2": {}
        }
      }
    }
  },
  "interpretations": {},
  "requestAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "sessionId": {},
  "recognizedBotMember": {
    "botId": {},
    "botName": {}
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="recognizetext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RecognizeTextResponse](#schemarecognizetextresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|
|486|486|DependencyFailedException|[DependencyFailedException](#schemadependencyfailedexception)|
|487|487|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RecognizeUtterance

<a id="opIdRecognizeUtterance"></a>

> Code samples

```bash
curl 'https://runtime-lex-v2.us-east-1.amazonaws.com/bots/stringstri/botAliases/string/botLocales/string/sessions/string/utterance#Content-Type' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "inputStream": "string"
  }'
```

`POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance#Content-Type`

<p>Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model built for the bot.</p> <p>The following request fields must be compressed with gzip and then base64 encoded before you send them to Amazon Lex V2. </p> <ul> <li> <p>requestAttributes</p> </li> <li> <p>sessionState</p> </li> </ul> <p>The following response fields are compressed using gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress them. </p> <ul> <li> <p>inputTranscript</p> </li> <li> <p>interpretations</p> </li> <li> <p>messages</p> </li> <li> <p>requestAttributes</p> </li> <li> <p>sessionState</p> </li> </ul> <p>The example contains a Java application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and decompresses a response from Amazon Lex V2.</p> <p>If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p> <ul> <li> <p> <b>Success message</b> - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present.</p> </li> <li> <p> <b>Failed message</b> - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message.</p> </li> <li> <p> <b>Timeout message</b> - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>

> Body parameter

```json
{
  "inputStream": "string"
}
```

<h3 id="recognizeutterance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|botId|path|string|true|The identifier of the bot that should receive the request.|
|botAliasId|path|string|true|The alias identifier in use for the bot that should receive the request.|
|localeId|path|string|true|The locale where the session is in use.|
|sessionId|path|string|true|The identifier of the session in use.|
|x-amz-lex-session-state|header|string(password)|false|<p>Sets the state of the session with the user. You can use this to set the current intent, attributes, context, and dialog action. Use the dialog action to determine the next step that Amazon Lex V2 should use in the conversation with the user.</p> <p>The <code>sessionState</code> field must be compressed using gzip and then base64 encoded before sending to Amazon Lex V2.</p>|
|x-amz-lex-request-attributes|header|string(password)|false|<p>Request-specific information passed between the client application and Amazon Lex V2 </p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes for prefix <code>x-amz-lex:</code>.</p> <p>The <code>requestAttributes</code> field must be compressed using gzip and then base64 encoded before sending to Amazon Lex V2.</p>|
|Content-Type|header|string|true|<p>Indicates the format for audio input or that the content is text. The header must start with one of the following prefixes:</p> <ul> <li> <p>PCM format, audio data must be in little-endian byte order.</p> <ul> <li> <p>audio/l16; rate=16000; channels=1</p> </li> <li> <p>audio/x-l16; sample-rate=16000; channel-count=1</p> </li> <li> <p>audio/lpcm; sample-rate=8000; sample-size-bits=16; channel-count=1; is-big-endian=false</p> </li> </ul> </li> <li> <p>Opus format</p> <ul> <li> <p>audio/x-cbr-opus-with-preamble;preamble-size=0;bit-rate=256000;frame-size-milliseconds=4</p> </li> </ul> </li> <li> <p>Text format</p> <ul> <li> <p>text/plain; charset=utf-8</p> </li> </ul> </li> </ul>|
|Response-Content-Type|header|string|false|<p>The message that Amazon Lex V2 returns in the response can be either text or speech based on the <code>responseContentType</code> value.</p> <ul> <li> <p>If the value is <code>text/plain;charset=utf-8</code>, Amazon Lex V2 returns text in the response.</p> </li> <li> <p>If the value begins with <code>audio/</code>, Amazon Lex V2 returns speech in the response. Amazon Lex V2 uses Amazon Polly to generate the speech using the configuration that you specified in the <code>responseContentType</code> parameter. For example, if you specify <code>audio/mpeg</code> as the value, Amazon Lex V2 returns speech in the MPEG format.</p> </li> <li> <p>If the value is <code>audio/pcm</code>, the speech returned is <code>audio/pcm</code> at 16 KHz in 16-bit, little-endian format.</p> </li> <li> <p>The following are the accepted values:</p> <ul> <li> <p>audio/mpeg</p> </li> <li> <p>audio/ogg</p> </li> <li> <p>audio/pcm (16 KHz)</p> </li> <li> <p>audio/* (defaults to mpeg)</p> </li> <li> <p>text/plain; charset=utf-8</p> </li> </ul> </li> </ul>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» inputStream|body|string|false|User input in PCM or Opus audio format or text format as described in the <code>requestContentType</code> parameter.|

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

<h3 id="recognizeutterance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RecognizeUtteranceResponse](#schemarecognizeutteranceresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|
|486|486|DependencyFailedException|[DependencyFailedException](#schemadependencyfailedexception)|
|487|487|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|

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
  "botId": {},
  "botAliasId": {},
  "localeId": {},
  "sessionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|botId|object|false|none|none|
|botAliasId|object|false|none|none|
|localeId|object|false|none|none|
|sessionId|object|false|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

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

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_GetSessionResponse">GetSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsessionresponse"></a>
<a id="schema_GetSessionResponse"></a>
<a id="tocSgetsessionresponse"></a>
<a id="tocsgetsessionresponse"></a>

```json
{
  "sessionId": {},
  "messages": {},
  "interpretations": {},
  "sessionState": {
    "dialogAction": {
      "type": {},
      "slotToElicit": {},
      "slotElicitationStyle": {},
      "subSlotToElicit": {
        "name": {},
        "subSlotToElicit": {}
      }
    },
    "intent": {
      "name": {},
      "slots": {
        "property1": {},
        "property2": {}
      },
      "state": {},
      "confirmationState": {}
    },
    "activeContexts": {},
    "sessionAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "originatingRequestId": {},
    "runtimeHints": {
      "slotHints": {
        "property1": {
          "property1": {},
          "property2": {}
        },
        "property2": {
          "property1": {},
          "property2": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionId|object|false|none|none|
|messages|object|false|none|none|
|interpretations|object|false|none|none|
|sessionState|object|false|none|none|

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

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "content": {},
  "contentType": {},
  "imageResponseCard": {
    "title": {},
    "subtitle": {},
    "imageUrl": {},
    "buttons": {}
  }
}
```

Container for text that is returned to the customer..

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|object|false|none|none|
|contentType|object|true|none|none|
|imageResponseCard|[ImageResponseCard](#schemaimageresponsecard)|false|none|<p>A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform. </p> <p>When you use a response card, the response from the user is constrained to the text associated with a button on the card.</p>|

<h2 id="tocS_DialogAction">DialogAction</h2>
<!-- backwards compatibility -->
<a id="schemadialogaction"></a>
<a id="schema_DialogAction"></a>
<a id="tocSdialogaction"></a>
<a id="tocsdialogaction"></a>

```json
{
  "type": {},
  "slotToElicit": {},
  "slotElicitationStyle": {},
  "subSlotToElicit": {
    "name": {},
    "subSlotToElicit": {}
  }
}
```

The next action that Amazon Lex V2 should take.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|slotToElicit|object|false|none|none|
|slotElicitationStyle|object|false|none|none|
|subSlotToElicit|object|false|none|none|

<h2 id="tocS_Intent">Intent</h2>
<!-- backwards compatibility -->
<a id="schemaintent"></a>
<a id="schema_Intent"></a>
<a id="tocSintent"></a>
<a id="tocsintent"></a>

```json
{
  "name": {},
  "slots": {
    "property1": {},
    "property2": {}
  },
  "state": {},
  "confirmationState": {}
}
```

The current intent that Amazon Lex V2 is attempting to fulfill.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|slots|object|false|none|none|
|state|object|false|none|none|
|confirmationState|object|false|none|none|

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
    "contextAttributes": {
      "property1": "password",
      "property2": "password"
    }
  }
]
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

<h2 id="tocS_NonEmptyString">NonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystring"></a>
<a id="schema_NonEmptyString"></a>
<a id="tocSnonemptystring"></a>
<a id="tocsnonemptystring"></a>

```json
"string"
```

<h2 id="tocS_RuntimeHints">RuntimeHints</h2>
<!-- backwards compatibility -->
<a id="schemaruntimehints"></a>
<a id="schema_RuntimeHints"></a>
<a id="tocSruntimehints"></a>
<a id="tocsruntimehints"></a>

```json
{
  "slotHints": {
    "property1": {
      "property1": {},
      "property2": {}
    },
    "property2": {
      "property1": {},
      "property2": {}
    }
  }
}
```

<p>You can provide Amazon Lex V2 with hints to the phrases that a customer is likely to use for a slot. When a slot with hints is resolved, the phrases in the runtime hints are preferred in the resolution. You can provide hints for a maximum of 100 intents. You can provide a maximum of 100 slots.</p> <p>Before you can use runtime hints with an existing bot, you must first rebuild the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/using-hints.html">Using runtime hints to improve recognition of slot values</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slotHints|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
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

<h2 id="tocS_RecognizeTextResponse">RecognizeTextResponse</h2>
<!-- backwards compatibility -->
<a id="schemarecognizetextresponse"></a>
<a id="schema_RecognizeTextResponse"></a>
<a id="tocSrecognizetextresponse"></a>
<a id="tocsrecognizetextresponse"></a>

```json
{
  "messages": {},
  "sessionState": {
    "dialogAction": {
      "type": {},
      "slotToElicit": {},
      "slotElicitationStyle": {},
      "subSlotToElicit": {
        "name": {},
        "subSlotToElicit": {}
      }
    },
    "intent": {
      "name": {},
      "slots": {
        "property1": {},
        "property2": {}
      },
      "state": {},
      "confirmationState": {}
    },
    "activeContexts": {},
    "sessionAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "originatingRequestId": {},
    "runtimeHints": {
      "slotHints": {
        "property1": {
          "property1": {},
          "property2": {}
        },
        "property2": {
          "property1": {},
          "property2": {}
        }
      }
    }
  },
  "interpretations": {},
  "requestAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "sessionId": {},
  "recognizedBotMember": {
    "botId": {},
    "botName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|object|false|none|none|
|sessionState|object|false|none|none|
|interpretations|object|false|none|none|
|requestAttributes|object|false|none|none|
|sessionId|object|false|none|none|
|recognizedBotMember|object|false|none|none|

<h2 id="tocS_RecognizeUtteranceResponse">RecognizeUtteranceResponse</h2>
<!-- backwards compatibility -->
<a id="schemarecognizeutteranceresponse"></a>
<a id="schema_RecognizeUtteranceResponse"></a>
<a id="tocSrecognizeutteranceresponse"></a>
<a id="tocsrecognizeutteranceresponse"></a>

```json
{
  "audioStream": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioStream|object|false|none|none|

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

The time that a context is active. You can specify the time to live in seconds or in conversation turns.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeToLiveInSeconds|object|true|none|none|
|turnsToLive|object|true|none|none|

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
  "contextAttributes": {
    "property1": "password",
    "property2": "password"
  }
}
```

<p>Contains information about the contexts that a user is using in a session. You can configure Amazon Lex V2 to set a context when an intent is fulfilled, or you can set a context using the , , or operations.</p> <p>Use a context to indicate to Amazon Lex V2 intents that should be used as follow-up intents. For example, if the active context is <code>order-fulfilled</code>, only intents that have <code>order-fulfilled</code> configured as a trigger are considered for follow up.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|timeToLive|object|true|none|none|
|contextAttributes|object|true|none|none|

<h2 id="tocS_Text">Text</h2>
<!-- backwards compatibility -->
<a id="schematext"></a>
<a id="schema_Text"></a>
<a id="tocStext"></a>
<a id="tocstext"></a>

```json
"password"
```

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

<h2 id="tocS_AttachmentTitle">AttachmentTitle</h2>
<!-- backwards compatibility -->
<a id="schemaattachmenttitle"></a>
<a id="schema_AttachmentTitle"></a>
<a id="tocSattachmenttitle"></a>
<a id="tocsattachmenttitle"></a>

```json
"string"
```

<h2 id="tocS_AttachmentUrl">AttachmentUrl</h2>
<!-- backwards compatibility -->
<a id="schemaattachmenturl"></a>
<a id="schema_AttachmentUrl"></a>
<a id="tocSattachmenturl"></a>
<a id="tocsattachmenturl"></a>

```json
"string"
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

<h2 id="tocS_BotAliasIdentifier">BotAliasIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemabotaliasidentifier"></a>
<a id="schema_BotAliasIdentifier"></a>
<a id="tocSbotaliasidentifier"></a>
<a id="tocsbotaliasidentifier"></a>

```json
"string"
```

<h2 id="tocS_BotIdentifier">BotIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemabotidentifier"></a>
<a id="schema_BotIdentifier"></a>
<a id="tocSbotidentifier"></a>
<a id="tocsbotidentifier"></a>

```json
"stringstri"
```

<h2 id="tocS_ButtonText">ButtonText</h2>
<!-- backwards compatibility -->
<a id="schemabuttontext"></a>
<a id="schema_ButtonText"></a>
<a id="tocSbuttontext"></a>
<a id="tocsbuttontext"></a>

```json
"string"
```

<h2 id="tocS_ButtonValue">ButtonValue</h2>
<!-- backwards compatibility -->
<a id="schemabuttonvalue"></a>
<a id="schema_ButtonValue"></a>
<a id="tocSbuttonvalue"></a>
<a id="tocsbuttonvalue"></a>

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

A button that appears on a response card show to the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_ButtonsList">ButtonsList</h2>
<!-- backwards compatibility -->
<a id="schemabuttonslist"></a>
<a id="schema_ButtonsList"></a>
<a id="tocSbuttonslist"></a>
<a id="tocsbuttonslist"></a>

```json
[
  {
    "text": {},
    "value": {}
  }
]
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

<h2 id="tocS_ConfidenceScore">ConfidenceScore</h2>
<!-- backwards compatibility -->
<a id="schemaconfidencescore"></a>
<a id="schema_ConfidenceScore"></a>
<a id="tocSconfidencescore"></a>
<a id="tocsconfidencescore"></a>

```json
{
  "score": {}
}
```

Provides a score that indicates the confidence that Amazon Lex V2 has that an intent is the one that satisfies the user's intent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|score|object|false|none|none|

<h2 id="tocS_ConfirmationState">ConfirmationState</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmationstate"></a>
<a id="schema_ConfirmationState"></a>
<a id="tocSconfirmationstate"></a>
<a id="tocsconfirmationstate"></a>

```json
"Confirmed"
```

<h2 id="tocS_LocaleId">LocaleId</h2>
<!-- backwards compatibility -->
<a id="schemalocaleid"></a>
<a id="schema_LocaleId"></a>
<a id="tocSlocaleid"></a>
<a id="tocslocaleid"></a>

```json
"string"
```

<h2 id="tocS_SessionId">SessionId</h2>
<!-- backwards compatibility -->
<a id="schemasessionid"></a>
<a id="schema_SessionId"></a>
<a id="tocSsessionid"></a>
<a id="tocssessionid"></a>

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

<h2 id="tocS_DialogActionType">DialogActionType</h2>
<!-- backwards compatibility -->
<a id="schemadialogactiontype"></a>
<a id="schema_DialogActionType"></a>
<a id="tocSdialogactiontype"></a>
<a id="tocsdialogactiontype"></a>

```json
"Close"
```

<h2 id="tocS_StyleType">StyleType</h2>
<!-- backwards compatibility -->
<a id="schemastyletype"></a>
<a id="schema_StyleType"></a>
<a id="tocSstyletype"></a>
<a id="tocsstyletype"></a>

```json
"Default"
```

<h2 id="tocS_ElicitSubSlot">ElicitSubSlot</h2>
<!-- backwards compatibility -->
<a id="schemaelicitsubslot"></a>
<a id="schema_ElicitSubSlot"></a>
<a id="tocSelicitsubslot"></a>
<a id="tocselicitsubslot"></a>

```json
{
  "name": {},
  "subSlotToElicit": {
    "name": {},
    "subSlotToElicit": {}
  }
}
```

The specific constituent sub slot of the composite slot to elicit in dialog action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|subSlotToElicit|object|false|none|none|

<h2 id="tocS_GetSessionRequest">GetSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsessionrequest"></a>
<a id="schema_GetSessionRequest"></a>
<a id="tocSgetsessionrequest"></a>
<a id="tocsgetsessionrequest"></a>

```json
{}
```

<h2 id="tocS_Messages">Messages</h2>
<!-- backwards compatibility -->
<a id="schemamessages"></a>
<a id="schema_Messages"></a>
<a id="tocSmessages"></a>
<a id="tocsmessages"></a>

```json
[
  {
    "content": {},
    "contentType": {},
    "imageResponseCard": {
      "title": {},
      "subtitle": {},
      "imageUrl": {},
      "buttons": {}
    }
  }
]
```

<h2 id="tocS_Interpretations">Interpretations</h2>
<!-- backwards compatibility -->
<a id="schemainterpretations"></a>
<a id="schema_Interpretations"></a>
<a id="tocSinterpretations"></a>
<a id="tocsinterpretations"></a>

```json
[
  {
    "nluConfidence": {
      "score": {}
    },
    "sentimentResponse": {
      "sentiment": {},
      "sentimentScore": {
        "positive": {},
        "negative": {},
        "neutral": {},
        "mixed": {}
      }
    },
    "intent": {
      "name": {},
      "slots": {
        "property1": {},
        "property2": {}
      },
      "state": {},
      "confirmationState": {}
    }
  }
]
```

<h2 id="tocS_SessionState">SessionState</h2>
<!-- backwards compatibility -->
<a id="schemasessionstate"></a>
<a id="schema_SessionState"></a>
<a id="tocSsessionstate"></a>
<a id="tocssessionstate"></a>

```json
{
  "dialogAction": {
    "type": {},
    "slotToElicit": {},
    "slotElicitationStyle": {},
    "subSlotToElicit": {
      "name": {},
      "subSlotToElicit": {}
    }
  },
  "intent": {
    "name": {},
    "slots": {
      "property1": {},
      "property2": {}
    },
    "state": {},
    "confirmationState": {}
  },
  "activeContexts": {},
  "sessionAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "originatingRequestId": {},
  "runtimeHints": {
    "slotHints": {
      "property1": {
        "property1": {},
        "property2": {}
      },
      "property2": {
        "property1": {},
        "property2": {}
      }
    }
  }
}
```

The state of the user's session with Amazon Lex V2.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dialogAction|object|false|none|none|
|intent|object|false|none|none|
|activeContexts|object|false|none|none|
|sessionAttributes|object|false|none|none|
|originatingRequestId|object|false|none|none|
|runtimeHints|object|false|none|none|

<h2 id="tocS_ImageResponseCard">ImageResponseCard</h2>
<!-- backwards compatibility -->
<a id="schemaimageresponsecard"></a>
<a id="schema_ImageResponseCard"></a>
<a id="tocSimageresponsecard"></a>
<a id="tocsimageresponsecard"></a>

```json
{
  "title": {},
  "subtitle": {},
  "imageUrl": {},
  "buttons": {}
}
```

<p>A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform. </p> <p>When you use a response card, the response from the user is constrained to the text associated with a button on the card.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|object|true|none|none|
|subtitle|object|false|none|none|
|imageUrl|object|false|none|none|
|buttons|object|false|none|none|

<h2 id="tocS_Slots">Slots</h2>
<!-- backwards compatibility -->
<a id="schemaslots"></a>
<a id="schema_Slots"></a>
<a id="tocSslots"></a>
<a id="tocsslots"></a>

```json
{
  "property1": {
    "value": {
      "originalValue": {},
      "interpretedValue": {},
      "resolvedValues": {}
    },
    "values": {},
    "subSlots": {}
  },
  "property2": {
    "value": {
      "originalValue": {},
      "interpretedValue": {},
      "resolvedValues": {}
    },
    "values": {},
    "subSlots": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Slot](#schemaslot)|false|none|A value that Amazon Lex V2 uses to fulfill an intent. |

<h2 id="tocS_IntentState">IntentState</h2>
<!-- backwards compatibility -->
<a id="schemaintentstate"></a>
<a id="schema_IntentState"></a>
<a id="tocSintentstate"></a>
<a id="tocsintentstate"></a>

```json
"Failed"
```

<h2 id="tocS_SentimentResponse">SentimentResponse</h2>
<!-- backwards compatibility -->
<a id="schemasentimentresponse"></a>
<a id="schema_SentimentResponse"></a>
<a id="tocSsentimentresponse"></a>
<a id="tocssentimentresponse"></a>

```json
{
  "sentiment": {},
  "sentimentScore": {
    "positive": {},
    "negative": {},
    "neutral": {},
    "mixed": {}
  }
}
```

<p>Provides information about the sentiment expressed in a user's response in a conversation. Sentiments are determined using Amazon Comprehend. Sentiments are only returned if they are enabled for the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-sentiment.html"> Determine Sentiment </a> in the <i>Amazon Comprehend developer guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sentiment|object|false|none|none|
|sentimentScore|[SentimentScore](#schemasentimentscore)|false|none|The individual sentiment responses for the utterance.|

<h2 id="tocS_Interpretation">Interpretation</h2>
<!-- backwards compatibility -->
<a id="schemainterpretation"></a>
<a id="schema_Interpretation"></a>
<a id="tocSinterpretation"></a>
<a id="tocsinterpretation"></a>

```json
{
  "nluConfidence": {
    "score": {}
  },
  "sentimentResponse": {
    "sentiment": {},
    "sentimentScore": {
      "positive": {},
      "negative": {},
      "neutral": {},
      "mixed": {}
    }
  },
  "intent": {
    "name": {},
    "slots": {
      "property1": {},
      "property2": {}
    },
    "state": {},
    "confirmationState": {}
  }
}
```

An intent that Amazon Lex V2 determined might satisfy the user's utterance. The intents are ordered by the confidence score.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nluConfidence|object|false|none|none|
|sentimentResponse|object|false|none|none|
|intent|object|false|none|none|

<h2 id="tocS_MessageContentType">MessageContentType</h2>
<!-- backwards compatibility -->
<a id="schemamessagecontenttype"></a>
<a id="schema_MessageContentType"></a>
<a id="tocSmessagecontenttype"></a>
<a id="tocsmessagecontenttype"></a>

```json
"CustomPayload"
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

<h2 id="tocS_ParameterName">ParameterName</h2>
<!-- backwards compatibility -->
<a id="schemaparametername"></a>
<a id="schema_ParameterName"></a>
<a id="tocSparametername"></a>
<a id="tocsparametername"></a>

```json
"string"
```

<h2 id="tocS_PutSessionRequest">PutSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputsessionrequest"></a>
<a id="schema_PutSessionRequest"></a>
<a id="tocSputsessionrequest"></a>
<a id="tocsputsessionrequest"></a>

```json
{
  "messages": {},
  "sessionState": {
    "dialogAction": {
      "type": {},
      "slotToElicit": {},
      "slotElicitationStyle": {},
      "subSlotToElicit": {
        "name": {},
        "subSlotToElicit": {}
      }
    },
    "intent": {
      "name": {},
      "slots": {
        "property1": {},
        "property2": {}
      },
      "state": {},
      "confirmationState": {}
    },
    "activeContexts": {},
    "sessionAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "originatingRequestId": {},
    "runtimeHints": {
      "slotHints": {
        "property1": {
          "property1": {},
          "property2": {}
        },
        "property2": {
          "property1": {},
          "property2": {}
        }
      }
    }
  },
  "requestAttributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|object|false|none|none|
|sessionState|object|true|none|none|
|requestAttributes|object|false|none|none|

<h2 id="tocS_RecognizeTextRequest">RecognizeTextRequest</h2>
<!-- backwards compatibility -->
<a id="schemarecognizetextrequest"></a>
<a id="schema_RecognizeTextRequest"></a>
<a id="tocSrecognizetextrequest"></a>
<a id="tocsrecognizetextrequest"></a>

```json
{
  "text": {},
  "sessionState": {
    "dialogAction": {
      "type": {},
      "slotToElicit": {},
      "slotElicitationStyle": {},
      "subSlotToElicit": {
        "name": {},
        "subSlotToElicit": {}
      }
    },
    "intent": {
      "name": {},
      "slots": {
        "property1": {},
        "property2": {}
      },
      "state": {},
      "confirmationState": {}
    },
    "activeContexts": {},
    "sessionAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "originatingRequestId": {},
    "runtimeHints": {
      "slotHints": {
        "property1": {
          "property1": {},
          "property2": {}
        },
        "property2": {
          "property1": {},
          "property2": {}
        }
      }
    }
  },
  "requestAttributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|object|true|none|none|
|sessionState|object|false|none|none|
|requestAttributes|object|false|none|none|

<h2 id="tocS_RecognizedBotMember">RecognizedBotMember</h2>
<!-- backwards compatibility -->
<a id="schemarecognizedbotmember"></a>
<a id="schema_RecognizedBotMember"></a>
<a id="tocSrecognizedbotmember"></a>
<a id="tocsrecognizedbotmember"></a>

```json
{
  "botId": {},
  "botName": {}
}
```

The bot member that processes the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|botId|object|true|none|none|
|botName|object|false|none|none|

<h2 id="tocS_SensitiveNonEmptyString">SensitiveNonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemasensitivenonemptystring"></a>
<a id="schema_SensitiveNonEmptyString"></a>
<a id="tocSsensitivenonemptystring"></a>
<a id="tocssensitivenonemptystring"></a>

```json
"password"
```

<h2 id="tocS_RecognizeUtteranceRequest">RecognizeUtteranceRequest</h2>
<!-- backwards compatibility -->
<a id="schemarecognizeutterancerequest"></a>
<a id="schema_RecognizeUtteranceRequest"></a>
<a id="tocSrecognizeutterancerequest"></a>
<a id="tocsrecognizeutterancerequest"></a>

```json
{
  "inputStream": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputStream|object|false|none|none|

<h2 id="tocS_RuntimeHintValuesList">RuntimeHintValuesList</h2>
<!-- backwards compatibility -->
<a id="schemaruntimehintvalueslist"></a>
<a id="schema_RuntimeHintValuesList"></a>
<a id="tocSruntimehintvalueslist"></a>
<a id="tocsruntimehintvalueslist"></a>

```json
[
  {
    "phrase": {}
  }
]
```

<h2 id="tocS_SlotHintsSlotMap">SlotHintsSlotMap</h2>
<!-- backwards compatibility -->
<a id="schemaslothintsslotmap"></a>
<a id="schema_SlotHintsSlotMap"></a>
<a id="tocSslothintsslotmap"></a>
<a id="tocsslothintsslotmap"></a>

```json
{
  "property1": {
    "runtimeHintValues": {},
    "subSlotHints": {}
  },
  "property2": {
    "runtimeHintValues": {},
    "subSlotHints": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[RuntimeHintDetails](#schemaruntimehintdetails)|false|none|Provides an array of phrases that should be given preference when resolving values for a slot.|

<h2 id="tocS_RuntimeHintDetails">RuntimeHintDetails</h2>
<!-- backwards compatibility -->
<a id="schemaruntimehintdetails"></a>
<a id="schema_RuntimeHintDetails"></a>
<a id="tocSruntimehintdetails"></a>
<a id="tocsruntimehintdetails"></a>

```json
{
  "runtimeHintValues": {},
  "subSlotHints": {
    "property1": {},
    "property2": {}
  }
}
```

Provides an array of phrases that should be given preference when resolving values for a slot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|runtimeHintValues|object|false|none|none|
|subSlotHints|object|false|none|none|

<h2 id="tocS_RuntimeHintPhrase">RuntimeHintPhrase</h2>
<!-- backwards compatibility -->
<a id="schemaruntimehintphrase"></a>
<a id="schema_RuntimeHintPhrase"></a>
<a id="tocSruntimehintphrase"></a>
<a id="tocsruntimehintphrase"></a>

```json
"string"
```

<h2 id="tocS_RuntimeHintValue">RuntimeHintValue</h2>
<!-- backwards compatibility -->
<a id="schemaruntimehintvalue"></a>
<a id="schema_RuntimeHintValue"></a>
<a id="tocSruntimehintvalue"></a>
<a id="tocsruntimehintvalue"></a>

```json
{
  "phrase": {}
}
```

Provides the phrase that Amazon Lex V2 should look for in the user's input to the bot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phrase|object|true|none|none|

<h2 id="tocS_SlotHintsIntentMap">SlotHintsIntentMap</h2>
<!-- backwards compatibility -->
<a id="schemaslothintsintentmap"></a>
<a id="schema_SlotHintsIntentMap"></a>
<a id="tocSslothintsintentmap"></a>
<a id="tocsslothintsintentmap"></a>

```json
{
  "property1": {
    "property1": {},
    "property2": {}
  },
  "property2": {
    "property1": {},
    "property2": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SlotHintsSlotMap](#schemaslothintsslotmap)|false|none|none|

<h2 id="tocS_SentimentType">SentimentType</h2>
<!-- backwards compatibility -->
<a id="schemasentimenttype"></a>
<a id="schema_SentimentType"></a>
<a id="tocSsentimenttype"></a>
<a id="tocssentimenttype"></a>

```json
"MIXED"
```

<h2 id="tocS_SentimentScore">SentimentScore</h2>
<!-- backwards compatibility -->
<a id="schemasentimentscore"></a>
<a id="schema_SentimentScore"></a>
<a id="tocSsentimentscore"></a>
<a id="tocssentimentscore"></a>

```json
{
  "positive": {},
  "negative": {},
  "neutral": {},
  "mixed": {}
}
```

The individual sentiment responses for the utterance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|positive|object|false|none|none|
|negative|object|false|none|none|
|neutral|object|false|none|none|
|mixed|object|false|none|none|

<h2 id="tocS_Shape">Shape</h2>
<!-- backwards compatibility -->
<a id="schemashape"></a>
<a id="schema_Shape"></a>
<a id="tocSshape"></a>
<a id="tocsshape"></a>

```json
"Scalar"
```

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
{
  "originalValue": {},
  "interpretedValue": {},
  "resolvedValues": {}
}
```

The value of a slot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|originalValue|object|false|none|none|
|interpretedValue|object|true|none|none|
|resolvedValues|object|false|none|none|

<h2 id="tocS_Values">Values</h2>
<!-- backwards compatibility -->
<a id="schemavalues"></a>
<a id="schema_Values"></a>
<a id="tocSvalues"></a>
<a id="tocsvalues"></a>

```json
[
  {
    "value": {
      "originalValue": {},
      "interpretedValue": {},
      "resolvedValues": {}
    },
    "values": {},
    "subSlots": {}
  }
]
```

<h2 id="tocS_Slot">Slot</h2>
<!-- backwards compatibility -->
<a id="schemaslot"></a>
<a id="schema_Slot"></a>
<a id="tocSslot"></a>
<a id="tocsslot"></a>

```json
{
  "value": {
    "originalValue": {},
    "interpretedValue": {},
    "resolvedValues": {}
  },
  "values": {},
  "subSlots": {
    "property1": {},
    "property2": {}
  }
}
```

A value that Amazon Lex V2 uses to fulfill an intent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|false|none|none|
|values|object|false|none|none|
|subSlots|object|false|none|none|

<h2 id="tocS_StringList">StringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_StringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
[
  "string"
]
```
