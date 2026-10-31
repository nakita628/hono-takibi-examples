<h1 id="dispatch-api">Dispatch API v0.3.4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Dispatch API enables the developer to specify a multiple message workflow. A workflow follows a template. The first one we are adding is the failover template. The failover template instructs the Messages API to first send a message to the specified channel. If that message fails immediately or if the condition_status is not reached within the given time period the next message is sent. The developer will also receive status webhooks from the messages resource for each delivery and read event. This API is currently in Beta.

Base URLs:

* <a href="https://api.nexmo.com/v0.1/dispatch">https://api.nexmo.com/v0.1/dispatch</a>

Email: <a href="mailto:devrel@vonage.com">Vonage DevRel</a> 
Web: <a href="https://developer.nexmo.com/">Vonage DevRel</a> 

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="dispatch-api-default">Default</h1>

## Create a workflow

<a id="opIdcreateWorkflow"></a>

> Code samples

```bash
curl https://api.nexmo.com/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "template": "failover",
    "workflow": [
      {
        "failover": {
          "condition_status": "delivered",
          "expiry_time": 600
        },
        "from": {
          "id": "0123456789012345",
          "number": "447700900000",
          "type": "sms"
        },
        "message": {
          "content": {
            "audio": {
              "url": "https://example.com/audio.mp3"
            },
            "file": {
              "caption": "Additional text to accompany the image.",
              "url": "https://example.com/file.zip"
            },
            "image": {
              "caption": "Additional text to accompany the image.",
              "url": "https://example.com/image.jpg"
            },
            "template": {
              "name": "whatsapp:hsm:technology:vonage:verify",
              "parameters": [
                {
                  "default": "1234"
                }
              ]
            },
            "text": "Vonage Verification code: 64873. Valid for 10 minutes.",
            "type": "text",
            "video": {
              "url": "https://example.com/video.mp4"
            }
          },
          "messenger": {
            "category": "message_tag",
            "tag": "ticket_update"
          },
          "viber_service_msg": {
            "category": "transaction",
            "ttl": 600
          },
          "whatsapp": {
            "locale": "en-GB",
            "policy": "deterministic"
          }
        },
        "to": {
          "id": "0123456789012345",
          "number": "447700900000",
          "type": "sms"
        }
      }
    ]
  }'
```

`POST /`

> Body parameter

```json
{
  "template": "failover",
  "workflow": [
    {
      "failover": {
        "condition_status": "delivered",
        "expiry_time": 600
      },
      "from": {
        "id": "0123456789012345",
        "number": "447700900000",
        "type": "sms"
      },
      "message": {
        "content": {
          "audio": {
            "url": "https://example.com/audio.mp3"
          },
          "file": {
            "caption": "Additional text to accompany the image.",
            "url": "https://example.com/file.zip"
          },
          "image": {
            "caption": "Additional text to accompany the image.",
            "url": "https://example.com/image.jpg"
          },
          "template": {
            "name": "whatsapp:hsm:technology:vonage:verify",
            "parameters": [
              {
                "default": "1234"
              }
            ]
          },
          "text": "Vonage Verification code: 64873. Valid for 10 minutes.",
          "type": "text",
          "video": {
            "url": "https://example.com/video.mp4"
          }
        },
        "messenger": {
          "category": "message_tag",
          "tag": "ticket_update"
        },
        "viber_service_msg": {
          "category": "transaction",
          "ttl": 600
        },
        "whatsapp": {
          "locale": "en-GB",
          "policy": "deterministic"
        }
      },
      "to": {
        "id": "0123456789012345",
        "number": "447700900000",
        "type": "sms"
      }
    }
  ]
}
```

<h3 id="create-a-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[createWorkflow](#schemacreateworkflow)|true|Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute.|
|» template|body|string|false|The template that the Dispatch API will execute. For the initial version of the API the only available value will be failover|
|» workflow|body|[[sendWithFailoverMessage](#schemasendwithfailovermessage) \| [sendMessage](#schemasendmessage)]|false|Contains a message object that must reflect the current /messages resource. All parameters within the content object reflect the /messages docs.|
|» » *oneOf*|body|[sendWithFailoverMessage](#schemasendwithfailovermessage)|false|Send With Failover Message|
|» » *oneOf*|body|[sendMessage](#schemasendmessage)|false|Send Message|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» template|failover|

> Example responses

> 202 Response

```json
{
  "dispatch_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
}
```

> 400 Response

```json
{
  "detail": "Your request parameters did not validate.",
  "instance": null,
  "invalid_parameters": {
    "name": "Invalid `from` parameter",
    "reason": "Invalid `from` parameter"
  },
  "type": "https://www.nexmo.com/messages/Errors#InvalidParams"
}
```

<h3 id="create-a-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[Response](#schemaresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|

<h3 id="create-a-workflow-callbacks">Callbacks</h3>

|Name|Expression|Method|Description|
|---|---|---|---|
|final-report|{$request.body#/callback}|POST|The Final Report|
|message-status|{$request.body#/callback}|POST|Message Status|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

# Schemas

<h2 id="tocS_AudioProperty">AudioProperty</h2>
<!-- backwards compatibility -->
<a id="schemaaudioproperty"></a>
<a id="schema_AudioProperty"></a>
<a id="tocSaudioproperty"></a>
<a id="tocsaudioproperty"></a>

```json
{
  "url": "https://example.com/audio.mp3"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|The URL of the audio attachment. `messenger` supports .mp3. `whatsapp` supports .aac, .m4a, .amr, .mp3 and .opus.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "detail": "Your request parameters did not validate.",
  "instance": null,
  "invalid_parameters": {
    "name": "Invalid `from` parameter",
    "reason": "Invalid `from` parameter"
  },
  "type": "https://www.nexmo.com/messages/Errors#InvalidParams"
}
```

The error format is standardized to the 4xx/5xx range with a code and a human readable explanation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|invalid_parameters|object|false|none|none|
|type|string|true|none|none|

<h2 id="tocS_FailoverProperty">FailoverProperty</h2>
<!-- backwards compatibility -->
<a id="schemafailoverproperty"></a>
<a id="schema_FailoverProperty"></a>
<a id="tocSfailoverproperty"></a>
<a id="tocsfailoverproperty"></a>

```json
{
  "condition_status": "delivered",
  "expiry_time": 600
}
```

Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition_status|string|false|none|Set the status the message must reach in the expiry_time before failing over. Options are delivered or read.|
|expiry_time|integer|false|none|In seconds. Minimum value is 15 and maximum value is 86,400 seconds (1 day).|

#### Enumerated Values

|Property|Value|
|---|---|
|condition_status|delivered|
|condition_status|read|

<h2 id="tocS_FileProperty">FileProperty</h2>
<!-- backwards compatibility -->
<a id="schemafileproperty"></a>
<a id="schema_FileProperty"></a>
<a id="tocSfileproperty"></a>
<a id="tocsfileproperty"></a>

```json
{
  "caption": "Additional text to accompany the image.",
  "url": "https://example.com/file.zip"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|Additional text to accompany the image. Supported by WhatsApp and MMS.|
|url|string|false|none|The URL of the file attachment. `messenger` supports a wide range of attachments including .zip, .csv and .pdf. `whatsapp` supports .pdf, .doc(x), .ppt(x) and .xls(x).|

<h2 id="tocS_FromProperty">FromProperty</h2>
<!-- backwards compatibility -->
<a id="schemafromproperty"></a>
<a id="schema_FromProperty"></a>
<a id="tocSfromproperty"></a>
<a id="tocsfromproperty"></a>

```json
{
  "id": "0123456789012345",
  "number": "447700900000",
  "type": "sms"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Your ID for the platform that you are sending from.<br><br>**Messenger**: This value should be the `to.id` value you received in the inbound messenger event.<br><br>**Viber**: This is your Service Message ID given to you by your Vonage Account Manager. To find out more please visit [vonage.com](https://www.vonage.com/communications-apis/messages/).<br><br>**SMS**: **MMS**: or **WhatsApp** This value is not required.<br>|
|number|string|false|none|**SMS**: or **MMS**: The phone number of the message sender in the [E.164](https://en.wikipedia.org/wiki/E.164) format.<br><br>**WhatsApp**: This is your WhatsApp Business Number given to you by your Vonage Account Manager. To find out more please visit [vonage.com](https://www.vonage.com/communications-apis/messages/).<br><br>**Messenger**: or **Viber**: This value is not required.<br>|
|type|string|true|none|The type of message that you want to send.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sms|
|type|viber_service_msg|
|type|messenger|
|type|whatsapp|

<h2 id="tocS_ImageProperty">ImageProperty</h2>
<!-- backwards compatibility -->
<a id="schemaimageproperty"></a>
<a id="schema_ImageProperty"></a>
<a id="tocSimageproperty"></a>
<a id="tocsimageproperty"></a>

```json
{
  "caption": "Additional text to accompany the image.",
  "url": "https://example.com/image.jpg"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|Additional text to accompany the image. Supported by WhatsApp and MMS.|
|url|string|false|none|The URL of the image attachment. `messenger` and `mms` supports .jpg, .jpeg, .png and .gif. `viber_service_msg` supports .jpg .jpeg, and .png. `whatsapp` supports .jpg .jpeg, and .png.|

<h2 id="tocS_MessageProperty">MessageProperty</h2>
<!-- backwards compatibility -->
<a id="schemamessageproperty"></a>
<a id="schema_MessageProperty"></a>
<a id="tocSmessageproperty"></a>
<a id="tocsmessageproperty"></a>

```json
{
  "content": {
    "audio": {
      "url": "https://example.com/audio.mp3"
    },
    "file": {
      "caption": "Additional text to accompany the image.",
      "url": "https://example.com/file.zip"
    },
    "image": {
      "caption": "Additional text to accompany the image.",
      "url": "https://example.com/image.jpg"
    },
    "template": {
      "name": "whatsapp:hsm:technology:vonage:verify",
      "parameters": [
        {
          "default": "1234"
        }
      ]
    },
    "text": "Vonage Verification code: 64873. Valid for 10 minutes.",
    "type": "text",
    "video": {
      "url": "https://example.com/video.mp4"
    }
  },
  "messenger": {
    "category": "message_tag",
    "tag": "ticket_update"
  },
  "viber_service_msg": {
    "category": "transaction",
    "ttl": 600
  },
  "whatsapp": {
    "locale": "en-GB",
    "policy": "deterministic"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|object|true|none|none|
|messenger|object|false|none|none|
|viber_service_msg|object|false|none|none|
|whatsapp|object|false|none|none|

<h2 id="tocS_MessageStatus">MessageStatus</h2>
<!-- backwards compatibility -->
<a id="schemamessagestatus"></a>
<a id="schema_MessageStatus"></a>
<a id="tocSmessagestatus"></a>
<a id="tocsmessagestatus"></a>

```json
{
  "_links": {
    "workflow": {
      "dispatch_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
      "href": "/workflows/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "error": {
    "code": 1300,
    "reason": "Not part of the provider network"
  },
  "from": {
    "id": "0123456789012345",
    "number": "447700900000",
    "type": "sms"
  },
  "message_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "status": "delivered",
  "timestamp": "2020-01-01T14:00:00.000Z",
  "to": {
    "id": "0123456789012345",
    "number": "447700900000",
    "type": "sms"
  },
  "usage": {
    "currency": "EUR",
    "price": "0.0333"
  }
}
```

The callbacks for the message status are the same as defined in the Messaging API. The only difference will be that dispatch_uuid and link will be appended.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|error|object|false|none|none|
|from|[FromProperty](#schemafromproperty)|false|none|none|
|message_uuid|string|false|none|none|
|status|string|false|none|The status of the message.|
|timestamp|[TimestampProperty](#schematimestampproperty)|false|none|The datetime of when the event occurred.|
|to|[ToProperty](#schematoproperty)|false|none|none|
|usage|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|submitted|
|status|delivered|
|status|read|
|status|rejected|
|status|undeliverable|

<h2 id="tocS_Response">Response</h2>
<!-- backwards compatibility -->
<a id="schemaresponse"></a>
<a id="schema_Response"></a>
<a id="tocSresponse"></a>
<a id="tocsresponse"></a>

```json
{
  "dispatch_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dispatch_uuid|string|true|none|The parent ID for workflow request.|

<h2 id="tocS_TemplateProperty">TemplateProperty</h2>
<!-- backwards compatibility -->
<a id="schematemplateproperty"></a>
<a id="schema_TemplateProperty"></a>
<a id="tocStemplateproperty"></a>
<a id="tocstemplateproperty"></a>

```json
{
  "name": "whatsapp:hsm:technology:vonage:verify",
  "parameters": [
    {
      "default": "1234"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the template.|
|parameters|[object]|false|none|none|

<h2 id="tocS_TimestampProperty">TimestampProperty</h2>
<!-- backwards compatibility -->
<a id="schematimestampproperty"></a>
<a id="schema_TimestampProperty"></a>
<a id="tocStimestampproperty"></a>
<a id="tocstimestampproperty"></a>

```json
"2020-01-01T14:00:00.000Z"
```

The datetime of when the event occurred.

<h2 id="tocS_ToProperty">ToProperty</h2>
<!-- backwards compatibility -->
<a id="schematoproperty"></a>
<a id="schema_ToProperty"></a>
<a id="tocStoproperty"></a>
<a id="tocstoproperty"></a>

```json
{
  "id": "0123456789012345",
  "number": "447700900000",
  "type": "sms"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the message recipient.<br><br>**Messenger**: This value should be the `from.id` value you received in the inbound messenger event.<br><br>**SMS**: or **Viber**: or **WhatsApp** This value is not required.<br>|
|number|string|false|none|**SMS**: or **MMS**: or **Viber**: or **WhatsApp** The phone number of the message recipient in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br><br>**Messenger**: This value is not required.<br>|
|type|string|true|none|The type of message that you want to send.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sms|
|type|viber_service_msg|
|type|messenger|
|type|whatsapp|

<h2 id="tocS_VideoProperty">VideoProperty</h2>
<!-- backwards compatibility -->
<a id="schemavideoproperty"></a>
<a id="schema_VideoProperty"></a>
<a id="tocSvideoproperty"></a>
<a id="tocsvideoproperty"></a>

```json
{
  "url": "https://example.com/video.mp4"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|The URL of the video attachment.<br><br>**messenger** supports .mp4<br><br>**whatsapp** supports .mp4 and .3gpp. Note, only H.264 video codec and AAC audio codec is supported.<br>|

<h2 id="tocS_createWorkflow">createWorkflow</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkflow"></a>
<a id="schema_createWorkflow"></a>
<a id="tocScreateworkflow"></a>
<a id="tocscreateworkflow"></a>

```json
{
  "template": "failover",
  "workflow": [
    {
      "failover": {
        "condition_status": "delivered",
        "expiry_time": 600
      },
      "from": {
        "id": "0123456789012345",
        "number": "447700900000",
        "type": "sms"
      },
      "message": {
        "content": {
          "audio": {
            "url": "https://example.com/audio.mp3"
          },
          "file": {
            "caption": "Additional text to accompany the image.",
            "url": "https://example.com/file.zip"
          },
          "image": {
            "caption": "Additional text to accompany the image.",
            "url": "https://example.com/image.jpg"
          },
          "template": {
            "name": "whatsapp:hsm:technology:vonage:verify",
            "parameters": [
              {
                "default": "1234"
              }
            ]
          },
          "text": "Vonage Verification code: 64873. Valid for 10 minutes.",
          "type": "text",
          "video": {
            "url": "https://example.com/video.mp4"
          }
        },
        "messenger": {
          "category": "message_tag",
          "tag": "ticket_update"
        },
        "viber_service_msg": {
          "category": "transaction",
          "ttl": 600
        },
        "whatsapp": {
          "locale": "en-GB",
          "policy": "deterministic"
        }
      },
      "to": {
        "id": "0123456789012345",
        "number": "447700900000",
        "type": "sms"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template|string|false|none|The template that the Dispatch API will execute. For the initial version of the API the only available value will be failover|
|workflow|[[sendWithFailoverMessage](#schemasendwithfailovermessage) \| [sendMessage](#schemasendmessage)]|false|none|Contains a message object that must reflect the current /messages resource. All parameters within the content object reflect the /messages docs.|

#### Enumerated Values

|Property|Value|
|---|---|
|template|failover|

<h2 id="tocS_finalReport">finalReport</h2>
<!-- backwards compatibility -->
<a id="schemafinalreport"></a>
<a id="schema_finalReport"></a>
<a id="tocSfinalreport"></a>
<a id="tocsfinalreport"></a>

```json
{
  "_links": {
    "messages": [
      {
        "channel": "viber_service_msg",
        "href": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
        "message_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
        "status": "submitted",
        "usage": {
          "currency": "EUR",
          "price": "0.0333"
        }
      }
    ]
  },
  "dispatch_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "status": "completed",
  "template": "failover",
  "timestamp": "2020-01-01T14:00:00.000Z",
  "usage": {
    "currency": "EUR",
    "price": "0.02"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|dispatch_uuid|string|false|none|none|
|status|string|false|none|none|
|template|string|false|none|none|
|timestamp|[TimestampProperty](#schematimestampproperty)|false|none|The datetime of when the event occurred.|
|usage|object|false|none|This is the total cost of your Workflow request. Please note if a preceding message in the workflow request is delivered after the final message in the workflow is delivered it may not reflect the true total cost of the workflow.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|completed|
|status|error|
|template|failover|

<h2 id="tocS_sendMessage">sendMessage</h2>
<!-- backwards compatibility -->
<a id="schemasendmessage"></a>
<a id="schema_sendMessage"></a>
<a id="tocSsendmessage"></a>
<a id="tocssendmessage"></a>

```json
{
  "from": {
    "id": "0123456789012345",
    "number": "447700900000",
    "type": "sms"
  },
  "message": {
    "content": {
      "audio": {
        "url": "https://example.com/audio.mp3"
      },
      "file": {
        "caption": "Additional text to accompany the image.",
        "url": "https://example.com/file.zip"
      },
      "image": {
        "caption": "Additional text to accompany the image.",
        "url": "https://example.com/image.jpg"
      },
      "template": {
        "name": "whatsapp:hsm:technology:vonage:verify",
        "parameters": [
          {
            "default": "1234"
          }
        ]
      },
      "text": "Vonage Verification code: 64873. Valid for 10 minutes.",
      "type": "text",
      "video": {
        "url": "https://example.com/video.mp4"
      }
    },
    "messenger": {
      "category": "message_tag",
      "tag": "ticket_update"
    },
    "viber_service_msg": {
      "category": "transaction",
      "ttl": 600
    },
    "whatsapp": {
      "locale": "en-GB",
      "policy": "deterministic"
    }
  },
  "to": {
    "id": "0123456789012345",
    "number": "447700900000",
    "type": "sms"
  }
}
```

Send Message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|[FromProperty](#schemafromproperty)|true|none|none|
|message|[MessageProperty](#schemamessageproperty)|true|none|none|
|to|[ToProperty](#schematoproperty)|true|none|none|

<h2 id="tocS_sendWithFailoverMessage">sendWithFailoverMessage</h2>
<!-- backwards compatibility -->
<a id="schemasendwithfailovermessage"></a>
<a id="schema_sendWithFailoverMessage"></a>
<a id="tocSsendwithfailovermessage"></a>
<a id="tocssendwithfailovermessage"></a>

```json
{
  "failover": {
    "condition_status": "delivered",
    "expiry_time": 600
  },
  "from": {
    "id": "0123456789012345",
    "number": "447700900000",
    "type": "sms"
  },
  "message": {
    "content": {
      "audio": {
        "url": "https://example.com/audio.mp3"
      },
      "file": {
        "caption": "Additional text to accompany the image.",
        "url": "https://example.com/file.zip"
      },
      "image": {
        "caption": "Additional text to accompany the image.",
        "url": "https://example.com/image.jpg"
      },
      "template": {
        "name": "whatsapp:hsm:technology:vonage:verify",
        "parameters": [
          {
            "default": "1234"
          }
        ]
      },
      "text": "Vonage Verification code: 64873. Valid for 10 minutes.",
      "type": "text",
      "video": {
        "url": "https://example.com/video.mp4"
      }
    },
    "messenger": {
      "category": "message_tag",
      "tag": "ticket_update"
    },
    "viber_service_msg": {
      "category": "transaction",
      "ttl": 600
    },
    "whatsapp": {
      "locale": "en-GB",
      "policy": "deterministic"
    }
  },
  "to": {
    "id": "0123456789012345",
    "number": "447700900000",
    "type": "sms"
  }
}
```

Send With Failover Message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failover|[FailoverProperty](#schemafailoverproperty)|false|none|Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute.|
|from|[FromProperty](#schemafromproperty)|true|none|none|
|message|[MessageProperty](#schemamessageproperty)|true|none|none|
|to|[ToProperty](#schematoproperty)|true|none|none|
