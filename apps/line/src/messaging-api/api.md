<h1 id="line-messaging-api">LINE Messaging API v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This document describes LINE Messaging API.

Base URLs:

* <a href="https://api.line.me">https://api.line.me</a>

# Authentication

- HTTP Authentication, scheme: bearer Channel access token

<h1 id="line-messaging-api-messaging-api">messaging-api</h1>

## getWebhookEndpoint

<a id="opIdgetWebhookEndpoint"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/channel/webhook/endpoint \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/channel/webhook/endpoint`

Get webhook endpoint information

<a href="https://developers.line.biz/en/reference/messaging-api/#get-webhook-endpoint-information">External documentation</a>

> Example responses

> 200 Response

```json
{
  "endpoint": "https://example.com/test",
  "active": true
}
```

<h3 id="getwebhookendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetWebhookEndpointResponse](#schemagetwebhookendpointresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## setWebhookEndpoint

<a id="opIdsetWebhookEndpoint"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/channel/webhook/endpoint \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endpoint": "http://example.com"
  }'
```

`PUT /v2/bot/channel/webhook/endpoint`

Set webhook endpoint URL

<a href="https://developers.line.biz/en/reference/messaging-api/#set-webhook-endpoint-url">External documentation</a>

> Body parameter

```json
{
  "endpoint": "http://example.com"
}
```

<h3 id="setwebhookendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SetWebhookEndpointRequest](#schemasetwebhookendpointrequest)|true|none|
|» endpoint|body|string(uri)|true|A valid webhook URL.|

<h3 id="setwebhookendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## testWebhookEndpoint

<a id="opIdtestWebhookEndpoint"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/channel/webhook/test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endpoint": "http://example.com"
  }'
```

`POST /v2/bot/channel/webhook/test`

Test webhook endpoint

<a href="https://developers.line.biz/en/reference/messaging-api/#test-webhook-endpoint">External documentation</a>

> Body parameter

```json
{
  "endpoint": "http://example.com"
}
```

<h3 id="testwebhookendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TestWebhookEndpointRequest](#schematestwebhookendpointrequest)|false|none|
|» endpoint|body|string(uri)|false|A webhook URL to be validated.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "timestamp": "2020-09-30T05:38:20.031Z",
  "statusCode": 200,
  "reason": "OK",
  "detail": "200"
}
```

<h3 id="testwebhookendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TestWebhookEndpointResponse](#schematestwebhookendpointresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## replyMessage

<a id="opIdreplyMessage"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/reply \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "replyToken": "string",
    "messages": [
      {
        "type": "string",
        "quickReply": {
          "items": [
            {
              "imageUrl": "http://example.com",
              "action": {
                "type": "string",
                "label": "string"
              },
              "type": "action"
            }
          ]
        },
        "sender": {
          "name": "string",
          "iconUrl": "http://example.com"
        }
      }
    ],
    "notificationDisabled": false
  }'
```

`POST /v2/bot/message/reply`

Send reply message

<a href="https://developers.line.biz/en/reference/messaging-api/#send-reply-message">External documentation</a>

> Body parameter

```json
{
  "replyToken": "string",
  "messages": [
    {
      "type": "string",
      "quickReply": {
        "items": [
          {
            "imageUrl": "http://example.com",
            "action": {
              "type": "string",
              "label": "string"
            },
            "type": "action"
          }
        ]
      },
      "sender": {
        "name": "string",
        "iconUrl": "http://example.com"
      }
    }
  ],
  "notificationDisabled": false
}
```

<h3 id="replymessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReplyMessageRequest](#schemareplymessagerequest)|true|none|
|» replyToken|body|string|true|replyToken received via webhook.|
|» messages|body|[[Message](#schemamessage)]|true|List of messages.|
|» notificationDisabled|body|[NotificationDisabled](#schemanotificationdisabled)|false|`true`: The user doesn’t receive a push notification when a message is sent.<br>`false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device).<br>The default value is false.<br>|

> Example responses

> 200 Response

```json
{
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="replymessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReplyMessageResponse](#schemareplymessageresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too Many Requests|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## pushMessage

<a id="opIdpushMessage"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/push \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "to": "string",
    "messages": [
      {
        "type": "string",
        "quickReply": {
          "items": [
            {
              "imageUrl": "http://example.com",
              "action": {
                "type": "string",
                "label": "string"
              },
              "type": "action"
            }
          ]
        },
        "sender": {
          "name": "string",
          "iconUrl": "http://example.com"
        }
      }
    ],
    "notificationDisabled": false,
    "customAggregationUnits": [
      "string"
    ]
  }'
```

`POST /v2/bot/message/push`

Sends a message to a user, group chat, or multi-person chat at any time.

<a href="https://developers.line.biz/en/reference/messaging-api/#send-push-message">External documentation</a>

> Body parameter

```json
{
  "to": "string",
  "messages": [
    {
      "type": "string",
      "quickReply": {
        "items": [
          {
            "imageUrl": "http://example.com",
            "action": {
              "type": "string",
              "label": "string"
            },
            "type": "action"
          }
        ]
      },
      "sender": {
        "name": "string",
        "iconUrl": "http://example.com"
      }
    }
  ],
  "notificationDisabled": false,
  "customAggregationUnits": [
    "string"
  ]
}
```

<h3 id="pushmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Line-Retry-Key|header|string(uuid)|false|Retry key.<br>Specifies the UUID in hexadecimal format (e.g., `123e4567-e89b-12d3-a456-426614174000`) generated by any method.<br>The retry key isn't generated by LINE. Each developer must generate their own retry key.<br>|
|body|body|[PushMessageRequest](#schemapushmessagerequest)|true|none|
|» to|body|string|true|ID of the receiver.|
|» messages|body|[[Message](#schemamessage)]|true|List of Message objects.|
|» notificationDisabled|body|[NotificationDisabled](#schemanotificationdisabled)|false|`true`: The user doesn’t receive a push notification when a message is sent.<br>`false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device).<br>The default value is false.<br>|
|» customAggregationUnits|body|[string]|false|List of aggregation unit name. Case-sensitive.<br>This functions can only be used by corporate users who have submitted the required applications.<br>|

> Example responses

> 200 Response

```json
{
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 409 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="pushmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PushMessageResponse](#schemapushmessageresponse)|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|409|Conflict|Conflict|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too Many Requests|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## multicast

<a id="opIdmulticast"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/multicast \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messages": [
      {
        "type": "string",
        "quickReply": {
          "items": [
            {
              "imageUrl": "http://example.com",
              "action": {
                "type": "string",
                "label": "string"
              },
              "type": "action"
            }
          ]
        },
        "sender": {
          "name": "string",
          "iconUrl": "http://example.com"
        }
      }
    ],
    "to": [
      "string"
    ],
    "notificationDisabled": false,
    "customAggregationUnits": [
      "string"
    ]
  }'
```

`POST /v2/bot/message/multicast`

An API that efficiently sends the same message to multiple user IDs. You can't send messages to group chats or multi-person chats.

<a href="https://developers.line.biz/en/reference/messaging-api/#send-multicast-message">External documentation</a>

> Body parameter

```json
{
  "messages": [
    {
      "type": "string",
      "quickReply": {
        "items": [
          {
            "imageUrl": "http://example.com",
            "action": {
              "type": "string",
              "label": "string"
            },
            "type": "action"
          }
        ]
      },
      "sender": {
        "name": "string",
        "iconUrl": "http://example.com"
      }
    }
  ],
  "to": [
    "string"
  ],
  "notificationDisabled": false,
  "customAggregationUnits": [
    "string"
  ]
}
```

<h3 id="multicast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Line-Retry-Key|header|string(uuid)|false|Retry key.<br>Specifies the UUID in hexadecimal format (e.g., `123e4567-e89b-12d3-a456-426614174000`) generated by any method.<br>The retry key isn't generated by LINE. Each developer must generate their own retry key.<br>|
|body|body|[MulticastRequest](#schemamulticastrequest)|true|none|
|» messages|body|[[Message](#schemamessage)]|true|Messages to send|
|» to|body|[string]|true|Array of user IDs. Use userId values which are returned in webhook event objects. Do not use LINE IDs found on LINE.|
|» notificationDisabled|body|[NotificationDisabled](#schemanotificationdisabled)|false|`true`: The user doesn’t receive a push notification when a message is sent.<br>`false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device).<br>The default value is false.<br>|
|» customAggregationUnits|body|[string]|false|Name of aggregation unit. Case-sensitive.|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 409 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="multicast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MulticastResponse](#schemamulticastresponse)|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|409|Conflict|Conflict|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too Many Requests|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## narrowcast

<a id="opIdnarrowcast"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/narrowcast \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messages": [
      {
        "type": "string",
        "quickReply": {
          "items": [
            {
              "imageUrl": "http://example.com",
              "action": {
                "type": "string",
                "label": "string"
              },
              "type": "action"
            }
          ]
        },
        "sender": {
          "name": "string",
          "iconUrl": "http://example.com"
        }
      }
    ],
    "recipient": {
      "type": "string"
    },
    "filter": {
      "demographic": {
        "type": "string"
      }
    },
    "limit": {
      "max": 1,
      "upToRemainingQuota": false,
      "forbidPartialDelivery": false
    },
    "notificationDisabled": false
  }'
```

`POST /v2/bot/message/narrowcast`

Send narrowcast message

<a href="https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message">External documentation</a>

> Body parameter

```json
{
  "messages": [
    {
      "type": "string",
      "quickReply": {
        "items": [
          {
            "imageUrl": "http://example.com",
            "action": {
              "type": "string",
              "label": "string"
            },
            "type": "action"
          }
        ]
      },
      "sender": {
        "name": "string",
        "iconUrl": "http://example.com"
      }
    }
  ],
  "recipient": {
    "type": "string"
  },
  "filter": {
    "demographic": {
      "type": "string"
    }
  },
  "limit": {
    "max": 1,
    "upToRemainingQuota": false,
    "forbidPartialDelivery": false
  },
  "notificationDisabled": false
}
```

<h3 id="narrowcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Line-Retry-Key|header|string(uuid)|false|Retry key.<br>Specifies the UUID in hexadecimal format (e.g., `123e4567-e89b-12d3-a456-426614174000`) generated by any method.<br>The retry key isn't generated by LINE. Each developer must generate their own retry key.<br>|
|body|body|[NarrowcastRequest](#schemanarrowcastrequest)|true|none|
|» messages|body|[[Message](#schemamessage)]|true|List of Message objects.|
|» recipient|body|[Recipient](#schemarecipient)|false|Recipient|
|» filter|body|[Filter](#schemafilter)|false|Filter for narrowcast|
|» limit|body|[Limit](#schemalimit)|false|Limit of the Narrowcast|
|» notificationDisabled|body|[NotificationDisabled](#schemanotificationdisabled)|false|`true`: The user doesn’t receive a push notification when a message is sent.<br>`false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device).<br>The default value is false.<br>|

> Example responses

> 202 Response

```json
{}
```

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 409 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="narrowcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[NarrowcastResponse](#schemanarrowcastresponse)|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|409|Conflict|Conflict|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too Many Requests|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getNarrowcastProgress

<a id="opIdgetNarrowcastProgress"></a>

> Code samples

```bash
curl 'https://api.line.me/v2/bot/message/progress/narrowcast?requestId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/message/progress/narrowcast`

Gets the status of a narrowcast message.

<a href="https://developers.line.biz/en/reference/messaging-api/#get-narrowcast-progress-status">External documentation</a>

<h3 id="getnarrowcastprogress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestId|query|string|true|The narrowcast message's request ID. Each Messaging API request has a request ID.|

> Example responses

> 200 Response

```json
{
  "phase": "waiting",
  "acceptedTime": "2020-12-03T10:15:30.121Z"
}
```

<h3 id="getnarrowcastprogress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NarrowcastProgressResponse](#schemanarrowcastprogressresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## broadcast

<a id="opIdbroadcast"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/broadcast \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messages": [
      {
        "type": "string",
        "quickReply": {
          "items": [
            {
              "imageUrl": "http://example.com",
              "action": {
                "type": "string",
                "label": "string"
              },
              "type": "action"
            }
          ]
        },
        "sender": {
          "name": "string",
          "iconUrl": "http://example.com"
        }
      }
    ],
    "notificationDisabled": false
  }'
```

`POST /v2/bot/message/broadcast`

Sends a message to multiple users at any time.

<a href="https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message">External documentation</a>

> Body parameter

```json
{
  "messages": [
    {
      "type": "string",
      "quickReply": {
        "items": [
          {
            "imageUrl": "http://example.com",
            "action": {
              "type": "string",
              "label": "string"
            },
            "type": "action"
          }
        ]
      },
      "sender": {
        "name": "string",
        "iconUrl": "http://example.com"
      }
    }
  ],
  "notificationDisabled": false
}
```

<h3 id="broadcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Line-Retry-Key|header|string(uuid)|false|Retry key.<br>Specifies the UUID in hexadecimal format (e.g., `123e4567-e89b-12d3-a456-426614174000`) generated by any method.<br>The retry key isn't generated by LINE. Each developer must generate their own retry key.<br>|
|body|body|[BroadcastRequest](#schemabroadcastrequest)|true|none|
|» messages|body|[[Message](#schemamessage)]|true|List of Message objects.|
|» notificationDisabled|body|[NotificationDisabled](#schemanotificationdisabled)|false|`true`: The user doesn’t receive a push notification when a message is sent.<br>`false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device).<br>The default value is false.<br>|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 409 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="broadcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BroadcastResponse](#schemabroadcastresponse)|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|409|Conflict|Conflict|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too Many Requests|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getMessageQuota

<a id="opIdgetMessageQuota"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/quota \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/message/quota`

Gets the target limit for sending messages in the current month. The total number of the free messages and the additional messages is returned.

<a href="https://developers.line.biz/en/reference/messaging-api/#get-quota">External documentation</a>

> Example responses

> 200 Response

```json
{
  "type": "limited",
  "value": 1000
}
```

<h3 id="getmessagequota-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MessageQuotaResponse](#schemamessagequotaresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getMessageQuotaConsumption

<a id="opIdgetMessageQuotaConsumption"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/quota/consumption \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/message/quota/consumption`

Gets the number of messages sent in the current month.

<a href="https://developers.line.biz/en/reference/messaging-api/#get-consumption">External documentation</a>

> Example responses

> 200 Response

```json
{
  "totalUsage": 500
}
```

<h3 id="getmessagequotaconsumption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QuotaConsumptionResponse](#schemaquotaconsumptionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getNumberOfSentReplyMessages

<a id="opIdgetNumberOfSentReplyMessages"></a>

> Code samples

```bash
curl 'https://api.line.me/v2/bot/message/delivery/reply?date=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/message/delivery/reply`

Get number of sent reply messages

<a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-reply-messages">External documentation</a>

<h3 id="getnumberofsentreplymessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|true|Date the messages were sent<br><br>Format: `yyyyMMdd` (e.g. `20191231`)<br>Timezone: UTC+9<br>|

> Example responses

> 200 Response

```json
{
  "status": "ready",
  "success": 10000
}
```

<h3 id="getnumberofsentreplymessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NumberOfMessagesResponse](#schemanumberofmessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getNumberOfSentPushMessages

<a id="opIdgetNumberOfSentPushMessages"></a>

> Code samples

```bash
curl 'https://api.line.me/v2/bot/message/delivery/push?date=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/message/delivery/push`

Get number of sent push messages

<a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-push-messages">External documentation</a>

<h3 id="getnumberofsentpushmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|true|Date the messages were sent<br><br>Format: `yyyyMMdd` (e.g. `20191231`)<br>Timezone: UTC+9<br>|

> Example responses

> 200 Response

```json
{
  "status": "ready",
  "success": 10000
}
```

<h3 id="getnumberofsentpushmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NumberOfMessagesResponse](#schemanumberofmessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getNumberOfSentMulticastMessages

<a id="opIdgetNumberOfSentMulticastMessages"></a>

> Code samples

```bash
curl 'https://api.line.me/v2/bot/message/delivery/multicast?date=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/message/delivery/multicast`

Get number of sent multicast messages

<a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-multicast-messages">External documentation</a>

<h3 id="getnumberofsentmulticastmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|true|Date the messages were sent<br><br>Format: `yyyyMMdd` (e.g. `20191231`)<br>Timezone: UTC+9<br>|

> Example responses

> 200 Response

```json
{
  "status": "ready",
  "success": 10000
}
```

<h3 id="getnumberofsentmulticastmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NumberOfMessagesResponse](#schemanumberofmessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getNumberOfSentBroadcastMessages

<a id="opIdgetNumberOfSentBroadcastMessages"></a>

> Code samples

```bash
curl 'https://api.line.me/v2/bot/message/delivery/broadcast?date=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/message/delivery/broadcast`

Get number of sent broadcast messages

<a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-broadcast-messages">External documentation</a>

<h3 id="getnumberofsentbroadcastmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string(^[0-9]{8}$)|true|Date the messages were sent<br><br>Format: yyyyMMdd (e.g. 20191231)<br>Timezone: UTC+9<br>|

> Example responses

> 200 Response

```json
{
  "status": "ready",
  "success": 10000
}
```

<h3 id="getnumberofsentbroadcastmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NumberOfMessagesResponse](#schemanumberofmessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## validateReply

<a id="opIdvalidateReply"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/validate/reply \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messages": [
      {
        "type": "string",
        "quickReply": {
          "items": [
            {
              "imageUrl": "http://example.com",
              "action": {
                "type": "string",
                "label": "string"
              },
              "type": "action"
            }
          ]
        },
        "sender": {
          "name": "string",
          "iconUrl": "http://example.com"
        }
      }
    ]
  }'
```

`POST /v2/bot/message/validate/reply`

Validate message objects of a reply message

<a href="https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-reply-message">External documentation</a>

> Body parameter

```json
{
  "messages": [
    {
      "type": "string",
      "quickReply": {
        "items": [
          {
            "imageUrl": "http://example.com",
            "action": {
              "type": "string",
              "label": "string"
            },
            "type": "action"
          }
        ]
      },
      "sender": {
        "name": "string",
        "iconUrl": "http://example.com"
      }
    }
  ]
}
```

<h3 id="validatereply-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ValidateMessageRequest](#schemavalidatemessagerequest)|true|none|
|» messages|body|[[Message](#schemamessage)]|true|Array of message objects to validate|

<h3 id="validatereply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## validatePush

<a id="opIdvalidatePush"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/validate/push \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messages": [
      {
        "type": "string",
        "quickReply": {
          "items": [
            {
              "imageUrl": "http://example.com",
              "action": {
                "type": "string",
                "label": "string"
              },
              "type": "action"
            }
          ]
        },
        "sender": {
          "name": "string",
          "iconUrl": "http://example.com"
        }
      }
    ]
  }'
```

`POST /v2/bot/message/validate/push`

Validate message objects of a push message

<a href="https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-push-message">External documentation</a>

> Body parameter

```json
{
  "messages": [
    {
      "type": "string",
      "quickReply": {
        "items": [
          {
            "imageUrl": "http://example.com",
            "action": {
              "type": "string",
              "label": "string"
            },
            "type": "action"
          }
        ]
      },
      "sender": {
        "name": "string",
        "iconUrl": "http://example.com"
      }
    }
  ]
}
```

<h3 id="validatepush-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ValidateMessageRequest](#schemavalidatemessagerequest)|true|none|
|» messages|body|[[Message](#schemamessage)]|true|Array of message objects to validate|

<h3 id="validatepush-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## validateMulticast

<a id="opIdvalidateMulticast"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/validate/multicast \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messages": [
      {
        "type": "string",
        "quickReply": {
          "items": [
            {
              "imageUrl": "http://example.com",
              "action": {
                "type": "string",
                "label": "string"
              },
              "type": "action"
            }
          ]
        },
        "sender": {
          "name": "string",
          "iconUrl": "http://example.com"
        }
      }
    ]
  }'
```

`POST /v2/bot/message/validate/multicast`

Validate message objects of a multicast message

<a href="https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-multicast-message">External documentation</a>

> Body parameter

```json
{
  "messages": [
    {
      "type": "string",
      "quickReply": {
        "items": [
          {
            "imageUrl": "http://example.com",
            "action": {
              "type": "string",
              "label": "string"
            },
            "type": "action"
          }
        ]
      },
      "sender": {
        "name": "string",
        "iconUrl": "http://example.com"
      }
    }
  ]
}
```

<h3 id="validatemulticast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ValidateMessageRequest](#schemavalidatemessagerequest)|true|none|
|» messages|body|[[Message](#schemamessage)]|true|Array of message objects to validate|

<h3 id="validatemulticast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## validateNarrowcast

<a id="opIdvalidateNarrowcast"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/validate/narrowcast \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messages": [
      {
        "type": "string",
        "quickReply": {
          "items": [
            {
              "imageUrl": "http://example.com",
              "action": {
                "type": "string",
                "label": "string"
              },
              "type": "action"
            }
          ]
        },
        "sender": {
          "name": "string",
          "iconUrl": "http://example.com"
        }
      }
    ]
  }'
```

`POST /v2/bot/message/validate/narrowcast`

Validate message objects of a narrowcast message

<a href="https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-narrowcast-message">External documentation</a>

> Body parameter

```json
{
  "messages": [
    {
      "type": "string",
      "quickReply": {
        "items": [
          {
            "imageUrl": "http://example.com",
            "action": {
              "type": "string",
              "label": "string"
            },
            "type": "action"
          }
        ]
      },
      "sender": {
        "name": "string",
        "iconUrl": "http://example.com"
      }
    }
  ]
}
```

<h3 id="validatenarrowcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ValidateMessageRequest](#schemavalidatemessagerequest)|true|none|
|» messages|body|[[Message](#schemamessage)]|true|Array of message objects to validate|

<h3 id="validatenarrowcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## validateBroadcast

<a id="opIdvalidateBroadcast"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/validate/broadcast \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messages": [
      {
        "type": "string",
        "quickReply": {
          "items": [
            {
              "imageUrl": "http://example.com",
              "action": {
                "type": "string",
                "label": "string"
              },
              "type": "action"
            }
          ]
        },
        "sender": {
          "name": "string",
          "iconUrl": "http://example.com"
        }
      }
    ]
  }'
```

`POST /v2/bot/message/validate/broadcast`

Validate message objects of a broadcast message

<a href="https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-broadcast-message">External documentation</a>

> Body parameter

```json
{
  "messages": [
    {
      "type": "string",
      "quickReply": {
        "items": [
          {
            "imageUrl": "http://example.com",
            "action": {
              "type": "string",
              "label": "string"
            },
            "type": "action"
          }
        ]
      },
      "sender": {
        "name": "string",
        "iconUrl": "http://example.com"
      }
    }
  ]
}
```

<h3 id="validatebroadcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ValidateMessageRequest](#schemavalidatemessagerequest)|true|none|
|» messages|body|[[Message](#schemamessage)]|true|Array of message objects to validate|

<h3 id="validatebroadcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getAggregationUnitUsage

<a id="opIdgetAggregationUnitUsage"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/aggregation/info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/message/aggregation/info`

Get number of units used this month

<a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-units-used-this-month">External documentation</a>

> Example responses

> 200 Response

```json
{
  "numOfCustomAggregationUnits": 22
}
```

<h3 id="getaggregationunitusage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetAggregationUnitUsageResponse](#schemagetaggregationunitusageresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getAggregationUnitNameList

<a id="opIdgetAggregationUnitNameList"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/aggregation/list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/message/aggregation/list`

Get name list of units used this month

<a href="https://developers.line.biz/en/reference/messaging-api/#get-name-list-of-units-used-this-month">External documentation</a>

<h3 id="getaggregationunitnamelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|The maximum number of aggregation units you can get per request.<br>|
|start|query|string|false|Value of the continuation token found in the next property of the JSON object returned in the response.<br>If you can't get all the aggregation units in one request, include this parameter to get the remaining array.<br>|

> Example responses

> 200 Response

```json
{
  "customAggregationUnits": [
    "promotion_a",
    "promotion_b"
  ],
  "next": "jxEWCEEP..."
}
```

<h3 id="getaggregationunitnamelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetAggregationUnitNameListResponse](#schemagetaggregationunitnamelistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getProfile

<a id="opIdgetProfile"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/profile/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/profile/{userId}`

Get profile

<a href="https://developers.line.biz/en/reference/messaging-api/#get-profile">External documentation</a>

<h3 id="getprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID|

> Example responses

> 200 Response

```json
{
  "displayName": "LINE taro",
  "userId": "U4af4980629...",
  "language": "en",
  "pictureUrl": "https://obs.line-apps.com/...",
  "statusMessage": "Hello, LINE!"
}
```

<h3 id="getprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserProfileResponse](#schemauserprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getFollowers

<a id="opIdgetFollowers"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/followers/ids \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/followers/ids`

Get a list of users who added your LINE Official Account as a friend

<a href="https://developers.line.biz/en/reference/messaging-api/#get-follower-ids">External documentation</a>

<h3 id="getfollowers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string|false|Value of the continuation token found in the next property of the JSON object returned in the response.<br>Include this parameter to get the next array of user IDs.<br>|
|limit|query|integer(int32)|false|The maximum number of user IDs to retrieve in a single request.|

> Example responses

> 200 Response

```json
{
  "userIds": [
    "U4af4980629...",
    "U0c229f96c4...",
    "U95afb1d4df..."
  ],
  "next": "yANU9IA..."
}
```

<h3 id="getfollowers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetFollowersResponse](#schemagetfollowersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getBotInfo

<a id="opIdgetBotInfo"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/info`

Get bot info

<a href="https://developers.line.biz/en/reference/messaging-api/#get-bot-info">External documentation</a>

> Example responses

> 200 Response

```json
{
  "userId": "Ub9952f8...",
  "basicId": "@216ru...",
  "displayName": "Example name",
  "pictureUrl": "https://obs.line-apps.com/...",
  "chatMode": "chat",
  "markAsReadMode": "manual"
}
```

<h3 id="getbotinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BotInfoResponse](#schemabotinforesponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getGroupMemberProfile

<a id="opIdgetGroupMemberProfile"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/group/string/member/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/group/{groupId}/member/{userId}`

Get group chat member profile

<a href="https://developers.line.biz/en/reference/messaging-api/#get-group-member-profile">External documentation</a>

<h3 id="getgroupmemberprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|Group ID|
|userId|path|string|true|User ID|

> Example responses

> 200 Response

```json
{
  "displayName": "LINE taro",
  "userId": "U4af4980629...",
  "pictureUrl": "https://obs.line-apps.com/..."
}
```

<h3 id="getgroupmemberprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GroupUserProfileResponse](#schemagroupuserprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getRoomMemberProfile

<a id="opIdgetRoomMemberProfile"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/room/string/member/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/room/{roomId}/member/{userId}`

Get multi-person chat member profile

<a href="https://developers.line.biz/en/reference/messaging-api/#get-room-member-profile">External documentation</a>

<h3 id="getroommemberprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|roomId|path|string|true|Room ID|
|userId|path|string|true|User ID|

> Example responses

> 200 Response

```json
{
  "displayName": "LINE taro",
  "userId": "U4af4980629...",
  "pictureUrl": "https://obs.line-apps.com/..."
}
```

<h3 id="getroommemberprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RoomUserProfileResponse](#schemaroomuserprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getGroupMembersIds

<a id="opIdgetGroupMembersIds"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/group/string/members/ids \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/group/{groupId}/members/ids`

Get group chat member user IDs

<a href="https://developers.line.biz/en/reference/messaging-api/#get-group-member-user-ids">External documentation</a>

<h3 id="getgroupmembersids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|Group ID|
|start|query|string|false|Value of the continuation token found in the `next` property of the JSON object returned in the response.<br>Include this parameter to get the next array of user IDs for the members of the group.<br>|

> Example responses

> 200 Response

```json
{
  "memberIds": [
    "U4af4980629...",
    "U0c229f96c4...",
    "U95afb1d4df..."
  ],
  "next": "jxEWCEEP..."
}
```

<h3 id="getgroupmembersids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MembersIdsResponse](#schemamembersidsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getRoomMembersIds

<a id="opIdgetRoomMembersIds"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/room/string/members/ids \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/room/{roomId}/members/ids`

Get multi-person chat member user IDs

<a href="https://developers.line.biz/en/reference/messaging-api/#get-room-member-user-ids">External documentation</a>

<h3 id="getroommembersids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|roomId|path|string|true|Room ID|
|start|query|string|false|Value of the continuation token found in the `next` property of the JSON object returned in the response.<br>Include this parameter to get the next array of user IDs for the members of the group.<br>|

> Example responses

> 200 Response

```json
{
  "memberIds": [
    "U4af4980629...",
    "U0c229f96c4...",
    "U95afb1d4df..."
  ],
  "next": "jxEWCEEP..."
}
```

<h3 id="getroommembersids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MembersIdsResponse](#schemamembersidsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## leaveGroup

<a id="opIdleaveGroup"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/group/string/leave \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/bot/group/{groupId}/leave`

Leave group chat

<a href="https://developers.line.biz/en/reference/messaging-api/#leave-group">External documentation</a>

<h3 id="leavegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|Group ID|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="leavegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not Found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## leaveRoom

<a id="opIdleaveRoom"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/room/string/leave \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/bot/room/{roomId}/leave`

Leave multi-person chat

<a href="https://developers.line.biz/en/reference/messaging-api/#leave-room">External documentation</a>

<h3 id="leaveroom-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|roomId|path|string|true|Room ID|

<h3 id="leaveroom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getGroupSummary

<a id="opIdgetGroupSummary"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/group/string/summary \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/group/{groupId}/summary`

Get group chat summary

<a href="https://developers.line.biz/en/reference/messaging-api/#get-group-summary">External documentation</a>

<h3 id="getgroupsummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|Group ID|

> Example responses

> 200 Response

```json
{
  "groupId": "Ca56f94637c...",
  "groupName": "Group name",
  "pictureUrl": "https://profile.line-scdn.net/abcdefghijklmn"
}
```

<h3 id="getgroupsummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GroupSummaryResponse](#schemagroupsummaryresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getGroupMemberCount

<a id="opIdgetGroupMemberCount"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/group/string/members/count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/group/{groupId}/members/count`

Get number of users in a group chat

<a href="https://developers.line.biz/en/reference/messaging-api/#get-members-group-count">External documentation</a>

<h3 id="getgroupmembercount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|Group ID|

> Example responses

> 200 Response

```json
{
  "count": 3
}
```

<h3 id="getgroupmembercount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GroupMemberCountResponse](#schemagroupmembercountresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getRoomMemberCount

<a id="opIdgetRoomMemberCount"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/room/string/members/count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/room/{roomId}/members/count`

Get number of users in a multi-person chat

<a href="https://developers.line.biz/en/reference/messaging-api/#get-members-room-count">External documentation</a>

<h3 id="getroommembercount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|roomId|path|string|true|Room ID|

> Example responses

> 200 Response

```json
{
  "count": 3
}
```

<h3 id="getroommembercount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RoomMemberCountResponse](#schemaroommembercountresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## createRichMenu

<a id="opIdcreateRichMenu"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/richmenu \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "size": {
      "width": 1,
      "height": 1
    },
    "selected": true,
    "name": "string",
    "chatBarText": "string",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 1,
          "height": 1
        },
        "action": {
          "type": "string",
          "label": "string"
        }
      }
    ]
  }'
```

`POST /v2/bot/richmenu`

Create rich menu

<a href="https://developers.line.biz/en/reference/messaging-api/#create-rich-menu">External documentation</a>

> Body parameter

```json
{
  "size": {
    "width": 1,
    "height": 1
  },
  "selected": true,
  "name": "string",
  "chatBarText": "string",
  "areas": [
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 1,
        "height": 1
      },
      "action": {
        "type": "string",
        "label": "string"
      }
    }
  ]
}
```

<h3 id="createrichmenu-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RichMenuRequest](#schemarichmenurequest)|true|none|
|» size|body|[RichMenuSize](#schemarichmenusize)|false|Rich menu size|
|» selected|body|boolean|false|`true` to display the rich menu by default. Otherwise, `false`.|
|» name|body|string|false|Name of the rich menu. This value can be used to help manage your rich menus and is not displayed to users.|
|» chatBarText|body|string|false|Text displayed in the chat bar|
|» areas|body|[[RichMenuArea](#schemarichmenuarea)]|false|Array of area objects which define the coordinates and size of tappable areas|

> Example responses

> 200 Response

```json
{
  "richMenuId": "{richMenuId}"
}
```

<h3 id="createrichmenu-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RichMenuIdResponse](#schemarichmenuidresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## validateRichMenuObject

<a id="opIdvalidateRichMenuObject"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/richmenu/validate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "size": {
      "width": 1,
      "height": 1
    },
    "selected": true,
    "name": "string",
    "chatBarText": "string",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 1,
          "height": 1
        },
        "action": {
          "type": "string",
          "label": "string"
        }
      }
    ]
  }'
```

`POST /v2/bot/richmenu/validate`

Validate rich menu object

<a href="https://developers.line.biz/en/reference/messaging-api/#validate-rich-menu-object">External documentation</a>

> Body parameter

```json
{
  "size": {
    "width": 1,
    "height": 1
  },
  "selected": true,
  "name": "string",
  "chatBarText": "string",
  "areas": [
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 1,
        "height": 1
      },
      "action": {
        "type": "string",
        "label": "string"
      }
    }
  ]
}
```

<h3 id="validaterichmenuobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RichMenuRequest](#schemarichmenurequest)|true|none|
|» size|body|[RichMenuSize](#schemarichmenusize)|false|Rich menu size|
|» selected|body|boolean|false|`true` to display the rich menu by default. Otherwise, `false`.|
|» name|body|string|false|Name of the rich menu. This value can be used to help manage your rich menus and is not displayed to users.|
|» chatBarText|body|string|false|Text displayed in the chat bar|
|» areas|body|[[RichMenuArea](#schemarichmenuarea)]|false|Array of area objects which define the coordinates and size of tappable areas|

<h3 id="validaterichmenuobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getRichMenu

<a id="opIdgetRichMenu"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/richmenu/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/richmenu/{richMenuId}`

Gets a rich menu via a rich menu ID.

<a href="https://developers.line.biz/en/reference/messaging-api/#get-rich-menu">External documentation</a>

<h3 id="getrichmenu-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|richMenuId|path|string|true|ID of a rich menu|

> Example responses

> 200 Response

```json
{
  "richMenuId": "{richMenuId}",
  "size": {
    "width": 2500,
    "height": 1686
  },
  "name": "nice rich menu",
  "chatBarText": "click",
  "selected": false,
  "areas": [
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 2500,
        "height": 1686
      },
      "action": {
        "type": "postback",
        "data": "action=buy&itemid=123"
      }
    }
  ]
}
```

<h3 id="getrichmenu-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RichMenuResponse](#schemarichmenuresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## deleteRichMenu

<a id="opIddeleteRichMenu"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/richmenu/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/bot/richmenu/{richMenuId}`

Deletes a rich menu.

<a href="https://developers.line.biz/en/reference/messaging-api/#delete-rich-menu">External documentation</a>

<h3 id="deleterichmenu-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|richMenuId|path|string|true|ID of a rich menu|

<h3 id="deleterichmenu-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getRichMenuList

<a id="opIdgetRichMenuList"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/richmenu/list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/richmenu/list`

Get rich menu list

<a href="https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-list">External documentation</a>

> Example responses

> 200 Response

```json
{
  "richmenus": [
    {
      "richMenuId": "{richMenuId}",
      "size": {
        "width": 2500,
        "height": 1686
      },
      "selected": false,
      "name": "nice rich menu",
      "chatBarText": "click",
      "areas": [
        {
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 2500,
            "height": 1686
          },
          "action": {
            "type": "postback",
            "data": "action=buy&itemid=123"
          }
        }
      ]
    }
  ]
}
```

<h3 id="getrichmenulist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RichMenuListResponse](#schemarichmenulistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## setDefaultRichMenu

<a id="opIdsetDefaultRichMenu"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/user/all/richmenu/string \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/bot/user/all/richmenu/{richMenuId}`

Set default rich menu

<a href="https://developers.line.biz/en/reference/messaging-api/#set-default-rich-menu">External documentation</a>

<h3 id="setdefaultrichmenu-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|richMenuId|path|string|true|ID of a rich menu|

<h3 id="setdefaultrichmenu-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getDefaultRichMenuId

<a id="opIdgetDefaultRichMenuId"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/user/all/richmenu \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/user/all/richmenu`

Gets the ID of the default rich menu set with the Messaging API.

<a href="https://developers.line.biz/en/reference/messaging-api/#get-default-rich-menu-id">External documentation</a>

> Example responses

> 200 Response

```json
{
  "richMenuId": "{richMenuId}"
}
```

<h3 id="getdefaultrichmenuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RichMenuIdResponse](#schemarichmenuidresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## cancelDefaultRichMenu

<a id="opIdcancelDefaultRichMenu"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/user/all/richmenu \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/bot/user/all/richmenu`

Cancel default rich menu

<a href="https://developers.line.biz/en/reference/messaging-api/#cancel-default-rich-menu">External documentation</a>

<h3 id="canceldefaultrichmenu-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## createRichMenuAlias

<a id="opIdcreateRichMenuAlias"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/richmenu/alias \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "richMenuAliasId": "string",
    "richMenuId": "string"
  }'
```

`POST /v2/bot/richmenu/alias`

Create rich menu alias

<a href="https://developers.line.biz/en/reference/messaging-api/#create-rich-menu-alias">External documentation</a>

> Body parameter

```json
{
  "richMenuAliasId": "string",
  "richMenuId": "string"
}
```

<h3 id="createrichmenualias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateRichMenuAliasRequest](#schemacreaterichmenualiasrequest)|true|none|
|» richMenuAliasId|body|string|true|Rich menu alias ID, which can be any ID, unique for each channel.|
|» richMenuId|body|string|true|The rich menu ID to be associated with the rich menu alias.|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="createrichmenualias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getRichMenuAlias

<a id="opIdgetRichMenuAlias"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/richmenu/alias/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/richmenu/alias/{richMenuAliasId}`

Get rich menu alias information

<a href="https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-alias-by-id">External documentation</a>

<h3 id="getrichmenualias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|richMenuAliasId|path|string|true|The rich menu alias ID whose information you want to obtain.|

> Example responses

> 200 Response

```json
{
  "richMenuAliasId": "richmenu-alias-a",
  "richMenuId": "richmenu-88c05ef6921ae53f8b58a25f3a65faf7"
}
```

<h3 id="getrichmenualias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RichMenuAliasResponse](#schemarichmenualiasresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## updateRichMenuAlias

<a id="opIdupdateRichMenuAlias"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/richmenu/alias/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "richMenuId": "string"
  }'
```

`POST /v2/bot/richmenu/alias/{richMenuAliasId}`

Update rich menu alias

<a href="https://developers.line.biz/en/reference/messaging-api/#update-rich-menu-alias">External documentation</a>

> Body parameter

```json
{
  "richMenuId": "string"
}
```

<h3 id="updaterichmenualias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|richMenuAliasId|path|string|true|The rich menu alias ID you want to update.|
|body|body|[UpdateRichMenuAliasRequest](#schemaupdaterichmenualiasrequest)|true|none|
|» richMenuId|body|string|true|The rich menu ID to be associated with the rich menu alias.|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="updaterichmenualias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## deleteRichMenuAlias

<a id="opIddeleteRichMenuAlias"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/richmenu/alias/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/bot/richmenu/alias/{richMenuAliasId}`

Delete rich menu alias

<a href="https://developers.line.biz/en/reference/messaging-api/#delete-rich-menu-alias">External documentation</a>

<h3 id="deleterichmenualias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|richMenuAliasId|path|string|true|Rich menu alias ID that you want to delete.|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="deleterichmenualias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getRichMenuAliasList

<a id="opIdgetRichMenuAliasList"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/richmenu/alias/list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/richmenu/alias/list`

Get list of rich menu alias

<a href="https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-alias-list">External documentation</a>

> Example responses

> 200 Response

```json
{
  "aliases": [
    {
      "richMenuAliasId": "richmenu-alias-a",
      "richMenuId": "richmenu-862e6ad6c267d2ddf3f42bc78554f6a4"
    },
    {
      "richMenuAliasId": "richmenu-alias-b",
      "richMenuId": "richmenu-88c05ef6921ae53f8b58a25f3a65faf7"
    }
  ]
}
```

<h3 id="getrichmenualiaslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RichMenuAliasListResponse](#schemarichmenualiaslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getRichMenuIdOfUser

<a id="opIdgetRichMenuIdOfUser"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/user/string/richmenu \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/user/{userId}/richmenu`

Get rich menu ID of user

<a href="https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-id-of-user">External documentation</a>

<h3 id="getrichmenuidofuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID. Found in the `source` object of webhook event objects. Do not use the LINE ID used in LINE.|

> Example responses

> 200 Response

```json
{
  "richMenuId": "{richMenuId}"
}
```

<h3 id="getrichmenuidofuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RichMenuIdResponse](#schemarichmenuidresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## unlinkRichMenuIdFromUser

<a id="opIdunlinkRichMenuIdFromUser"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/user/string/richmenu \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/bot/user/{userId}/richmenu`

Unlink rich menu from user

<a href="https://developers.line.biz/en/reference/messaging-api/#unlink-rich-menu-from-user">External documentation</a>

<h3 id="unlinkrichmenuidfromuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID. Found in the `source` object of webhook event objects. Do not use the LINE ID used in LINE.|

<h3 id="unlinkrichmenuidfromuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## linkRichMenuIdToUser

<a id="opIdlinkRichMenuIdToUser"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/user/string/richmenu/string \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/bot/user/{userId}/richmenu/{richMenuId}`

Link rich menu to user.

<a href="https://developers.line.biz/en/reference/messaging-api/#link-rich-menu-to-user">External documentation</a>

<h3 id="linkrichmenuidtouser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID. Found in the `source` object of webhook event objects. Do not use the LINE ID used in LINE.|
|richMenuId|path|string|true|ID of a rich menu|

<h3 id="linkrichmenuidtouser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## linkRichMenuIdToUsers

<a id="opIdlinkRichMenuIdToUsers"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/richmenu/bulk/link \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "richMenuId": "string",
    "userIds": [
      "string"
    ]
  }'
```

`POST /v2/bot/richmenu/bulk/link`

Link rich menu to multiple users

<a href="https://developers.line.biz/en/reference/messaging-api/#link-rich-menu-to-users">External documentation</a>

> Body parameter

```json
{
  "richMenuId": "string",
  "userIds": [
    "string"
  ]
}
```

<h3 id="linkrichmenuidtousers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RichMenuBulkLinkRequest](#schemarichmenubulklinkrequest)|true|none|
|» richMenuId|body|string|true|ID of a rich menu|
|» userIds|body|[string]|true|Array of user IDs. Found in the `source` object of webhook event objects. Do not use the LINE ID used in LINE.|

<h3 id="linkrichmenuidtousers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## unlinkRichMenuIdFromUsers

<a id="opIdunlinkRichMenuIdFromUsers"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/richmenu/bulk/unlink \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "userIds": [
      "string"
    ]
  }'
```

`POST /v2/bot/richmenu/bulk/unlink`

Unlink rich menus from multiple users

<a href="https://developers.line.biz/en/reference/messaging-api/#unlink-rich-menu-from-users">External documentation</a>

> Body parameter

```json
{
  "userIds": [
    "string"
  ]
}
```

<h3 id="unlinkrichmenuidfromusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RichMenuBulkUnlinkRequest](#schemarichmenubulkunlinkrequest)|true|none|
|» userIds|body|[string]|true|Array of user IDs. Found in the `source` object of webhook event objects. Do not use the LINE ID used in LINE.|

<h3 id="unlinkrichmenuidfromusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## richMenuBatch

<a id="opIdrichMenuBatch"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/richmenu/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "operations": [
      {
        "type": "string"
      }
    ],
    "resumeRequestKey": "string"
  }'
```

`POST /v2/bot/richmenu/batch`

You can use this endpoint to batch control the rich menu linked to the users using the endpoint such as Link rich menu to user.
The following operations are available:

1. Replace a rich menu with another rich menu for all users linked to a specific rich menu
2. Unlink a rich menu for all users linked to a specific rich menu
3. Unlink a rich menu for all users linked the rich menu


<a href="https://developers.line.biz/en/reference/messaging-api/#batch-control-rich-menus-of-users">External documentation</a>

> Body parameter

```json
{
  "operations": [
    {
      "type": "string"
    }
  ],
  "resumeRequestKey": "string"
}
```

<h3 id="richmenubatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RichMenuBatchRequest](#schemarichmenubatchrequest)|true|none|
|» operations|body|[[RichMenuBatchOperation](#schemarichmenubatchoperation)]|true|Array of Rich menu operation object...|
|» resumeRequestKey|body|string|false|Key for retry. Key value is a string matching the regular expression pattern|

<h3 id="richmenubatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## validateRichMenuBatchRequest

<a id="opIdvalidateRichMenuBatchRequest"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/richmenu/validate/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "operations": [
      {
        "type": "string"
      }
    ],
    "resumeRequestKey": "string"
  }'
```

`POST /v2/bot/richmenu/validate/batch`

Validate a request body of the Replace or unlink the linked rich menus in batches endpoint.

<a href="https://developers.line.biz/en/reference/messaging-api/#validate-batch-control-rich-menus-request">External documentation</a>

> Body parameter

```json
{
  "operations": [
    {
      "type": "string"
    }
  ],
  "resumeRequestKey": "string"
}
```

<h3 id="validaterichmenubatchrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RichMenuBatchRequest](#schemarichmenubatchrequest)|true|none|
|» operations|body|[[RichMenuBatchOperation](#schemarichmenubatchoperation)]|true|Array of Rich menu operation object...|
|» resumeRequestKey|body|string|false|Key for retry. Key value is a string matching the regular expression pattern|

<h3 id="validaterichmenubatchrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getRichMenuBatchProgress

<a id="opIdgetRichMenuBatchProgress"></a>

> Code samples

```bash
curl 'https://api.line.me/v2/bot/richmenu/progress/batch?requestId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/richmenu/progress/batch`

Get the status of Replace or unlink a linked rich menus in batches.

<a href="https://developers.line.biz/en/reference/messaging-api/#get-batch-control-rich-menus-progress-status">External documentation</a>

<h3 id="getrichmenubatchprogress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestId|query|string|true|A request ID used to batch control the rich menu linked to the user. Each Messaging API request has a request ID.|

> Example responses

> 200 Response

```json
{
  "phase": "ongoing",
  "acceptedTime": "2023-07-04T10:15:30.121Z"
}
```

<h3 id="getrichmenubatchprogress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RichMenuBatchProgressResponse](#schemarichmenubatchprogressresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## issueLinkToken

<a id="opIdissueLinkToken"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/user/string/linkToken \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/bot/user/{userId}/linkToken`

Issue link token

<a href="https://developers.line.biz/en/reference/messaging-api/#issue-link-token">External documentation</a>

<h3 id="issuelinktoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID for the LINE account to be linked.<br>Found in the `source` object of account link event objects. Do not use the LINE ID used in LINE.<br>|

> Example responses

> 200 Response

```json
{
  "linkToken": "NMZTNuVrPTqlr2IF8Bnymkb7rXfYv5EY"
}
```

<h3 id="issuelinktoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IssueLinkTokenResponse](#schemaissuelinktokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## markMessagesAsRead

<a id="opIdmarkMessagesAsRead"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/markAsRead \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "chat": {
      "userId": "Uxxxxxxxxxxxxxxxxxx"
    }
  }'
```

`POST /v2/bot/message/markAsRead`

Mark messages from users as read

<a href="https://developers.line.biz/en/reference/partner-docs/#mark-messages-from-users-as-read">External documentation</a>

> Body parameter

```json
{
  "chat": {
    "userId": "Uxxxxxxxxxxxxxxxxxx"
  }
}
```

<h3 id="markmessagesasread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MarkMessagesAsReadRequest](#schemamarkmessagesasreadrequest)|true|none|
|» chat|body|[ChatReference](#schemachatreference)|true|Chat reference|

<h3 id="markmessagesasread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## pushMessagesByPhone

<a id="opIdpushMessagesByPhone"></a>

> Code samples

```bash
curl https://api.line.me/bot/pnp/push \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messages": [
      {
        "type": "string",
        "quickReply": {
          "items": [
            {
              "imageUrl": "http://example.com",
              "action": {
                "type": "string",
                "label": "string"
              },
              "type": "action"
            }
          ]
        },
        "sender": {
          "name": "string",
          "iconUrl": "http://example.com"
        }
      }
    ],
    "to": "string",
    "notificationDisabled": false,
    "customAggregationUnits": [
      "string"
    ]
  }'
```

`POST /bot/pnp/push`

Send LINE notification message

<a href="https://developers.line.biz/en/reference/partner-docs/#send-line-notification-message">External documentation</a>

> Body parameter

```json
{
  "messages": [
    {
      "type": "string",
      "quickReply": {
        "items": [
          {
            "imageUrl": "http://example.com",
            "action": {
              "type": "string",
              "label": "string"
            },
            "type": "action"
          }
        ]
      },
      "sender": {
        "name": "string",
        "iconUrl": "http://example.com"
      }
    }
  ],
  "to": "string",
  "notificationDisabled": false,
  "customAggregationUnits": [
    "string"
  ]
}
```

<h3 id="pushmessagesbyphone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Line-Delivery-Tag|header|string|false|String returned in the delivery.data property of the delivery completion event via Webhook.|
|body|body|[PnpMessagesRequest](#schemapnpmessagesrequest)|true|none|
|» messages|body|[[Message](#schemamessage)]|true|Message to be sent.|
|» to|body|string|true|Message destination. Specify a phone number that has been normalized to E.164 format and hashed with SHA256.|
|» notificationDisabled|body|[NotificationDisabled](#schemanotificationdisabled)|false|`true`: The user doesn’t receive a push notification when a message is sent.<br>`false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device).<br>The default value is false.<br>|
|» customAggregationUnits|body|[string]|false|Name of aggregation unit. Case-sensitive.|

> Example responses

> 422 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="pushmessagesbyphone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|422|Unprocessable Entity|Unprocessable Entity|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## pushTemplatedMessagesByPhone

<a id="opIdpushTemplatedMessagesByPhone"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/pnp/templated/push \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "to": "string",
    "templateKey": "string",
    "body": {
      "emphasizedItem": {
        "itemKey": "string",
        "content": "string"
      },
      "items": [
        {
          "itemKey": "string",
          "content": "string"
        }
      ],
      "buttons": [
        {
          "buttonKey": "string",
          "url": "string"
        }
      ]
    },
    "customAggregationUnits": [
      "string"
    ]
  }'
```

`POST /v2/bot/message/pnp/templated/push`

Send LINE notification message (template)

<a href="https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template">External documentation</a>

> Body parameter

```json
{
  "to": "string",
  "templateKey": "string",
  "body": {
    "emphasizedItem": {
      "itemKey": "string",
      "content": "string"
    },
    "items": [
      {
        "itemKey": "string",
        "content": "string"
      }
    ],
    "buttons": [
      {
        "buttonKey": "string",
        "url": "string"
      }
    ]
  },
  "customAggregationUnits": [
    "string"
  ]
}
```

<h3 id="pushtemplatedmessagesbyphone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Line-Delivery-Tag|header|string|false|String returned in the delivery.data property of the delivery completion event via Webhook.|
|body|body|[PnpTemplatedMessageRequest](#schemapnptemplatedmessagerequest)|true|none|
|» to|body|string|true|Message destination. Specify a phone number that has been normalized to E.164 format and hashed with SHA256.|
|» templateKey|body|string|true|Specify the key of the template you want to send.<br>For available keys, see https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/#templates<br>|
|» body|body|[PnpTemplatedMessageBody](#schemapnptemplatedmessagebody)|false|The body object of the template you want to send. You can't specify the same item more than once in a single message.|
|» customAggregationUnits|body|[string]|false|Name of aggregation unit. Case-sensitive.<br>For more information about assigning a unit name, see https://developers.line.biz/en/docs/messaging-api/unit-based-statistics-aggregation/#assign-names-to-units-when-sending-messages<br>|

> Example responses

> 422 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="pushtemplatedmessagesbyphone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|422|Unprocessable Entity|Failed to send the LINE notification message. For example, there is no LINE user associated with the specified phone number, the phone number is outside the LINE notification message service area, the user has refused to receive LINE notification messages, or the user hasn't agreed to LINE's Privacy Policy.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getPNPMessageStatistics

<a id="opIdgetPNPMessageStatistics"></a>

> Code samples

```bash
curl 'https://api.line.me/v2/bot/message/delivery/pnp?date=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/message/delivery/pnp`

Get number of sent LINE notification messages

<a href="https://developers.line.biz/en/reference/partner-docs/#get-number-of-sent-line-notification-messages">External documentation</a>

<h3 id="getpnpmessagestatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|true|Date the message was sent<br><br>Format: `yyyyMMdd` (Example:`20211231`)<br>Time zone: UTC+9<br>|

> Example responses

> 200 Response

```json
{
  "status": "ready",
  "success": 3
}
```

<h3 id="getpnpmessagestatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NumberOfMessagesResponse](#schemanumberofmessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getPNPTemplatedMessageStatistics

<a id="opIdgetPNPTemplatedMessageStatistics"></a>

> Code samples

```bash
curl 'https://api.line.me/v2/bot/message/delivery/pnp/templated?date=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/message/delivery/pnp/templated`

Get number of sent LINE notification messages (template)

<a href="https://developers.line.biz/en/reference/line-notification-messages/#get-number-of-sent-line-notification-messages-template">External documentation</a>

<h3 id="getpnptemplatedmessagestatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|true|Date the message was sent<br><br>Format: `yyyyMMdd` (Example:`20211231`)<br>Time zone: UTC+9<br>|

> Example responses

> 200 Response

```json
{
  "status": "ready",
  "success": 3
}
```

<h3 id="getpnptemplatedmessagestatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NumberOfMessagesResponse](#schemanumberofmessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getMembershipSubscription

<a id="opIdgetMembershipSubscription"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/membership/subscription/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/membership/subscription/{userId}`

Get a user's membership subscription.

<a href="https://developers.line.biz/en/reference/messaging-api/#get-a-users-membership-subscription-status">External documentation</a>

<h3 id="getmembershipsubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID|

> Example responses

> 200 Response

```json
{
  "subscriptions": [
    {
      "membership": {
        "membershipId": 3189,
        "title": "Basic Plan",
        "description": "You will receive messages and photos every Saturday.",
        "benefits": [
          "Members Only Messages",
          "Members Only Photos"
        ],
        "price": 500,
        "currency": "JPY"
      },
      "user": {
        "membershipNo": 1,
        "joinedTime": 1707214784,
        "nextBillingDate": "2024-02-08",
        "totalSubscriptionMonths": 1
      }
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="getmembershipsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetMembershipSubscriptionResponse](#schemagetmembershipsubscriptionresponse)|
|400|Bad Request|An invalid user ID is specified.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Unable to get information about the membership to which the user subscribes.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getMembershipList

<a id="opIdgetMembershipList"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/membership/list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/membership/list`

Get a list of memberships.

<a href="https://developers.line.biz/en/reference/messaging-api/#get-membership-plans">External documentation</a>

> Example responses

> 200 Response

```json
{
  "memberships": [
    {
      "membershipId": 3189,
      "title": "Basic Plan",
      "description": "You will receive messages and photos every Saturday.",
      "benefits": [
        "Members Only Messages",
        "Members Only Photos"
      ],
      "price": 500,
      "currency": "JPY",
      "memberCount": 1,
      "memberLimit": null,
      "isInAppPurchase": true,
      "isPublished": true
    },
    {
      "membershipId": 3213,
      "title": "Premium Plan",
      "description": "Invitation to a special party.",
      "benefits": [
        "Members Only Party"
      ],
      "price": 1500,
      "currency": "JPY",
      "memberCount": 0,
      "memberLimit": null,
      "isInAppPurchase": false,
      "isPublished": true
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="getmembershiplist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MembershipListResponse](#schemamembershiplistresponse)|
|404|Not Found|Unable to get information about the memberships.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getJoinedMembershipUsers

<a id="opIdgetJoinedMembershipUsers"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/membership/0/users/ids \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/membership/{membershipId}/users/ids`

Get a list of user IDs who joined the membership.

<a href="https://developers.line.biz/en/reference/messaging-api/#get-membership-user-ids">External documentation</a>

<h3 id="getjoinedmembershipusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string|false|A continuation token to get next remaining membership user IDs.<br>Returned only when there are remaining user IDs that weren't returned in the userIds property in the previous request.<br>The continuation token expires in 24 hours (86,400 seconds).<br>|
|limit|query|integer(int32)|false|The max number of items to return for this API call.<br>The value is set to 300 by default, but the max acceptable value is 1000.<br>|
|membershipId|path|integer|true|Membership plan ID.|

> Example responses

> 200 Response

```json
{
  "userIds": [
    "U4af4980629...",
    "U0c229f96c4...",
    "U95afb1d4df..."
  ],
  "next": "jxEWCEEP..."
}
```

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="getjoinedmembershipusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetJoinedMembershipUsersResponse](#schemagetjoinedmembershipusersresponse)|
|400|Bad Request|`start` is incorrect or expired, or `limit` is under 1 or over 1000.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Membership ID is not owned by the bot or does not exist.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## listCoupon

<a id="opIdlistCoupon"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/coupon \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/coupon`

Get a paginated list of coupons.

<a href="https://developers.line.biz/en/reference/messaging-api/#get-coupons-list">External documentation</a>

<h3 id="listcoupon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|[string]|false|Filter coupons by their status.|
|start|query|string|false|Pagination token to retrieve the next page of results.|
|limit|query|integer(int32)|false|Maximum number of coupons to return per request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|DRAFT|
|status|RUNNING|
|status|CLOSED|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "couponId": "string",
      "title": "string"
    }
  ],
  "next": "string"
}
```

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="listcoupon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MessagingApiPagerCouponListResponse](#schemamessagingapipagercouponlistresponse)|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## createCoupon

<a id="opIdcreateCoupon"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/coupon \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acquisitionCondition": {
      "type": "string"
    },
    "barcodeImageUrl": "string",
    "couponCode": "string",
    "description": "string",
    "endTimestamp": 0,
    "imageUrl": "string",
    "maxUseCountPerTicket": 0,
    "startTimestamp": 0,
    "title": "string",
    "usageCondition": "string",
    "reward": {
      "type": "string"
    },
    "visibility": "UNLISTED",
    "timezone": "ETC_GMT_MINUS_12"
  }'
```

`POST /v2/bot/coupon`

Create a new coupon. Define coupon details such as type, title, and validity period.

<a href="https://developers.line.biz/en/reference/messaging-api/#create-coupon">External documentation</a>

> Body parameter

```json
{
  "acquisitionCondition": {
    "type": "string"
  },
  "barcodeImageUrl": "string",
  "couponCode": "string",
  "description": "string",
  "endTimestamp": 0,
  "imageUrl": "string",
  "maxUseCountPerTicket": 0,
  "startTimestamp": 0,
  "title": "string",
  "usageCondition": "string",
  "reward": {
    "type": "string"
  },
  "visibility": "UNLISTED",
  "timezone": "ETC_GMT_MINUS_12"
}
```

<h3 id="createcoupon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CouponCreateRequest](#schemacouponcreaterequest)|false|none|
|» acquisitionCondition|body|[AcquisitionConditionRequest](#schemaacquisitionconditionrequest)|true|none|
|» barcodeImageUrl|body|string|false|URL of the barcode image associated with the coupon. Used for in-store redemption.|
|» couponCode|body|string|false|Unique code to be presented by the user to redeem the coupon. Optional.|
|» description|body|string|false|Detailed description of the coupon. Displayed to users.|
|» endTimestamp|body|integer(int64)|true|Coupon expiration time (epoch seconds). Coupon cannot be used after this time.|
|» imageUrl|body|string|false|URL of the main image representing the coupon. Displayed in the coupon list.|
|» maxUseCountPerTicket|body|integer(int32)|true|Maximum number of times a single coupon ticket can be used. Use -1 to indicate no limit.|
|» startTimestamp|body|integer(int64)|true|Coupon start time (epoch seconds). Coupon can be used from this time.|
|» title|body|string|true|Title of the coupon. Displayed in the coupon list.|
|» usageCondition|body|string|false|Conditions for using the coupon. Shown to users.|
|» reward|body|[CouponRewardRequest](#schemacouponrewardrequest)|false|none|
|» visibility|body|string|true|Visibility of the coupon. Determines who can see or acquire the coupon.|
|» timezone|body|string|true|Timezone for interpreting start and end timestamps.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» visibility|UNLISTED|
|» visibility|PUBLIC|
|» timezone|ETC_GMT_MINUS_12|
|» timezone|ETC_GMT_MINUS_11|
|» timezone|PACIFIC_HONOLULU|
|» timezone|AMERICA_ANCHORAGE|
|» timezone|AMERICA_LOS_ANGELES|
|» timezone|AMERICA_PHOENIX|
|» timezone|AMERICA_CHICAGO|
|» timezone|AMERICA_NEW_YORK|
|» timezone|AMERICA_CARACAS|
|» timezone|AMERICA_SANTIAGO|
|» timezone|AMERICA_ST_JOHNS|
|» timezone|AMERICA_SAO_PAULO|
|» timezone|ETC_GMT_MINUS_2|
|» timezone|ATLANTIC_CAPE_VERDE|
|» timezone|EUROPE_LONDON|
|» timezone|EUROPE_PARIS|
|» timezone|EUROPE_ISTANBUL|
|» timezone|EUROPE_MOSCOW|
|» timezone|ASIA_TEHRAN|
|» timezone|ASIA_TBILISI|
|» timezone|ASIA_KABUL|
|» timezone|ASIA_TASHKENT|
|» timezone|ASIA_COLOMBO|
|» timezone|ASIA_KATHMANDU|
|» timezone|ASIA_ALMATY|
|» timezone|ASIA_RANGOON|
|» timezone|ASIA_BANGKOK|
|» timezone|ASIA_TAIPEI|
|» timezone|ASIA_TOKYO|
|» timezone|AUSTRALIA_DARWIN|
|» timezone|AUSTRALIA_SYDNEY|
|» timezone|ASIA_VLADIVOSTOK|
|» timezone|ETC_GMT_PLUS_12|
|» timezone|PACIFIC_TONGATAPU|

> Example responses

> 200 Response

```json
{
  "couponId": "string"
}
```

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="createcoupon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CouponCreateResponse](#schemacouponcreateresponse)|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getCouponDetail

<a id="opIdgetCouponDetail"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/coupon/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/coupon/{couponId}`

Get coupon detail

<a href="https://developers.line.biz/en/reference/messaging-api/#get-coupon">External documentation</a>

<h3 id="getcoupondetail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|couponId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "acquisitionCondition": {
    "type": "string"
  },
  "barcodeImageUrl": "http://example.com",
  "couponCode": "string",
  "description": "string",
  "endTimestamp": 0,
  "imageUrl": "http://example.com",
  "maxAcquireCount": 0,
  "maxUseCountPerTicket": 0,
  "maxTicketPerUser": 0,
  "startTimestamp": 0,
  "title": "string",
  "usageCondition": "string",
  "reward": {
    "type": "string"
  },
  "visibility": "UNLISTED",
  "timezone": "ETC_GMT_MINUS_12",
  "couponId": "string",
  "createdTimestamp": 0,
  "status": "DRAFT"
}
```

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="getcoupondetail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CouponResponse](#schemacouponresponse)|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not Found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## closeCoupon

<a id="opIdcloseCoupon"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/coupon/string/close \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v2/bot/coupon/{couponId}/close`

Close coupon

<a href="https://developers.line.biz/en/reference/messaging-api/#discontinue-coupon">External documentation</a>

<h3 id="closecoupon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|couponId|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

> 410 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="closecoupon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not Found|[ErrorResponse](#schemaerrorresponse)|
|410|Gone|Gone|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## showLoadingAnimation

<a id="opIdshowLoadingAnimation"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/chat/loading/start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "chatId": "string",
    "loadingSeconds": 5
  }'
```

`POST /v2/bot/chat/loading/start`

Display a loading animation in one-on-one chats between users and LINE Official Accounts.

<a href="https://developers.line.biz/en/reference/messaging-api/#display-a-loading-indicator">External documentation</a>

> Body parameter

```json
{
  "chatId": "string",
  "loadingSeconds": 5
}
```

<h3 id="showloadinganimation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ShowLoadingAnimationRequest](#schemashowloadinganimationrequest)|true|none|
|» chatId|body|string|true|User ID of the target user for whom the loading animation is to be displayed.|
|» loadingSeconds|body|integer(int32)|false|The number of seconds to display the loading indicator.<br>It must be a multiple of 5. The maximum value is 60 seconds.<br>|

> Example responses

> 202 Response

```json
{}
```

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="showloadinganimation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[ShowLoadingAnimationResponse](#schemashowloadinganimationresponse)|
|400|Bad Request|An invalid chat ID is specified, or the loadingSeconds value is invalid.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## markMessagesAsReadByToken

<a id="opIdmarkMessagesAsReadByToken"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/chat/markAsRead \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "markAsReadToken": "nz0x74mZT2mRn..."
  }'
```

`POST /v2/bot/chat/markAsRead`

Mark messages from users as read by token

<a href="https://developers.line.biz/en/reference/messaging-api/#mark-as-read">External documentation</a>

> Body parameter

```json
{
  "markAsReadToken": "nz0x74mZT2mRn..."
}
```

<h3 id="markmessagesasreadbytoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MarkMessagesAsReadByTokenRequest](#schemamarkmessagesasreadbytokenrequest)|true|none|
|» markAsReadToken|body|string|true|Token used to mark messages as read.|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

<h3 id="markmessagesasreadbytoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|An invalid markAsReadToken is specified. Tokens must be used by the bot that received them via Webhook.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="line-messaging-api-messaging-api-blob">messaging-api-blob</h1>

## getMessageContent

<a id="opIdgetMessageContent"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/string/content \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/message/{messageId}/content`

Download image, video, and audio data sent from users.

<a href="https://developers.line.biz/en/reference/messaging-api/#get-content">External documentation</a>

<h3 id="getmessagecontent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|Message ID of video or audio|

<h3 id="getmessagecontent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getMessageContentPreview

<a id="opIdgetMessageContentPreview"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/string/content/preview \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/message/{messageId}/content/preview`

Get a preview image of the image or video

<a href="https://developers.line.biz/en/reference/messaging-api/#get-image-or-video-preview">External documentation</a>

<h3 id="getmessagecontentpreview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|Message ID of image or video|

<h3 id="getmessagecontentpreview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getMessageContentTranscodingByMessageId

<a id="opIdgetMessageContentTranscodingByMessageId"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/message/string/content/transcoding \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/message/{messageId}/content/transcoding`

Verify the preparation status of a video or audio for getting

<a href="https://developers.line.biz/en/reference/messaging-api/#verify-video-or-audio-preparation-status">External documentation</a>

<h3 id="getmessagecontenttranscodingbymessageid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|Message ID of video or audio|

> Example responses

> 200 Response

```json
{
  "status": "processing"
}
```

<h3 id="getmessagecontenttranscodingbymessageid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetMessageContentTranscodingResponse](#schemagetmessagecontenttranscodingresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getRichMenuImage

<a id="opIdgetRichMenuImage"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/richmenu/string/content \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/richmenu/{richMenuId}/content`

Download rich menu image.

<a href="https://developers.line.biz/en/reference/messaging-api/#download-rich-menu-image">External documentation</a>

<h3 id="getrichmenuimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|richMenuId|path|string|true|ID of the rich menu with the image to be downloaded|

<h3 id="getrichmenuimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## setRichMenuImage

<a id="opIdsetRichMenuImage"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/richmenu/string/content \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  --data-binary '@/path/to/file'
```

`POST /v2/bot/richmenu/{richMenuId}/content`

Upload rich menu image

<a href="https://developers.line.biz/en/reference/messaging-api/#upload-rich-menu-image">External documentation</a>

<h3 id="setrichmenuimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|richMenuId|path|string|true|The ID of the rich menu to attach the image to|
|body|body|string(binary)|true|none|

<h3 id="setrichmenuimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocS_GetWebhookEndpointResponse">GetWebhookEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwebhookendpointresponse"></a>
<a id="schema_GetWebhookEndpointResponse"></a>
<a id="tocSgetwebhookendpointresponse"></a>
<a id="tocsgetwebhookendpointresponse"></a>

```json
{
  "endpoint": "http://example.com",
  "active": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string(uri)|true|none|Webhook URL|
|active|boolean|true|none|Webhook usage status. Send a webhook event from the LINE Platform to the webhook URL only if enabled.<br><br>`true`: Webhook usage is enabled.<br>`false`: Webhook usage is disabled.<br>|

<h2 id="tocS_SetWebhookEndpointRequest">SetWebhookEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetwebhookendpointrequest"></a>
<a id="schema_SetWebhookEndpointRequest"></a>
<a id="tocSsetwebhookendpointrequest"></a>
<a id="tocssetwebhookendpointrequest"></a>

```json
{
  "endpoint": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string(uri)|true|none|A valid webhook URL.|

<h2 id="tocS_TestWebhookEndpointRequest">TestWebhookEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schematestwebhookendpointrequest"></a>
<a id="schema_TestWebhookEndpointRequest"></a>
<a id="tocStestwebhookendpointrequest"></a>
<a id="tocstestwebhookendpointrequest"></a>

```json
{
  "endpoint": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string(uri)|false|none|A webhook URL to be validated.|

<h2 id="tocS_TestWebhookEndpointResponse">TestWebhookEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schematestwebhookendpointresponse"></a>
<a id="schema_TestWebhookEndpointResponse"></a>
<a id="tocStestwebhookendpointresponse"></a>
<a id="tocstestwebhookendpointresponse"></a>

```json
{
  "success": true,
  "timestamp": "1970-01-01T00:00:00Z",
  "statusCode": 0,
  "reason": "string",
  "detail": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|Result of the communication from the LINE platform to the webhook URL.|
|timestamp|string(date-time)|true|none|Time of the event in milliseconds. Even in the case of a redelivered webhook, it represents the time the event occurred, not the time it was redelivered.<br>|
|statusCode|integer(int32)|true|none|The HTTP status code. If the webhook response isn't received, the status code is set to zero or a negative number.|
|reason|string|true|none|Reason for the response.|
|detail|string|true|none|Details of the response.|

<h2 id="tocS_GetMessageContentTranscodingResponse">GetMessageContentTranscodingResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmessagecontenttranscodingresponse"></a>
<a id="schema_GetMessageContentTranscodingResponse"></a>
<a id="tocSgetmessagecontenttranscodingresponse"></a>
<a id="tocsgetmessagecontenttranscodingresponse"></a>

```json
{
  "status": "processing"
}
```

Transcoding response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The preparation status. One of:<br><br>`processing`: Preparing to get content.<br>`succeeded`: Ready to get the content. You can get the content sent by users.<br>`failed`: Failed to prepare to get the content.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|processing|
|status|succeeded|
|status|failed|

<h2 id="tocS_ReplyMessageRequest">ReplyMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemareplymessagerequest"></a>
<a id="schema_ReplyMessageRequest"></a>
<a id="tocSreplymessagerequest"></a>
<a id="tocsreplymessagerequest"></a>

```json
{
  "replyToken": "string",
  "messages": [
    {
      "type": "string",
      "quickReply": {
        "items": [
          {
            "imageUrl": "http://example.com",
            "action": {
              "type": "string",
              "label": "string"
            },
            "type": "action"
          }
        ]
      },
      "sender": {
        "name": "string",
        "iconUrl": "http://example.com"
      }
    }
  ],
  "notificationDisabled": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replyToken|string|true|none|replyToken received via webhook.|
|messages|[[Message](#schemamessage)]|true|none|List of messages.|
|notificationDisabled|[NotificationDisabled](#schemanotificationdisabled)|false|none|`true`: The user doesn’t receive a push notification when a message is sent.<br>`false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device).<br>The default value is false.<br>|

<h2 id="tocS_ReplyMessageResponse">ReplyMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemareplymessageresponse"></a>
<a id="schema_ReplyMessageResponse"></a>
<a id="tocSreplymessageresponse"></a>
<a id="tocsreplymessageresponse"></a>

```json
{
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sentMessages|[[SentMessage](#schemasentmessage)]|true|none|Array of sent messages.|

<h2 id="tocS_SentMessage">SentMessage</h2>
<!-- backwards compatibility -->
<a id="schemasentmessage"></a>
<a id="schema_SentMessage"></a>
<a id="tocSsentmessage"></a>
<a id="tocssentmessage"></a>

```json
{
  "id": "string",
  "quoteToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the sent message.|
|quoteToken|string|false|none|Quote token of the message. Only included when a message object that can be specified as a quote target was sent as a push or reply message.<br>|

<h2 id="tocS_PushMessageRequest">PushMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemapushmessagerequest"></a>
<a id="schema_PushMessageRequest"></a>
<a id="tocSpushmessagerequest"></a>
<a id="tocspushmessagerequest"></a>

```json
{
  "to": "string",
  "messages": [
    {
      "type": "string",
      "quickReply": {
        "items": [
          {
            "imageUrl": "http://example.com",
            "action": {
              "type": "string",
              "label": "string"
            },
            "type": "action"
          }
        ]
      },
      "sender": {
        "name": "string",
        "iconUrl": "http://example.com"
      }
    }
  ],
  "notificationDisabled": false,
  "customAggregationUnits": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|to|string|true|none|ID of the receiver.|
|messages|[[Message](#schemamessage)]|true|none|List of Message objects.|
|notificationDisabled|[NotificationDisabled](#schemanotificationdisabled)|false|none|`true`: The user doesn’t receive a push notification when a message is sent.<br>`false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device).<br>The default value is false.<br>|
|customAggregationUnits|[string]|false|none|List of aggregation unit name. Case-sensitive.<br>This functions can only be used by corporate users who have submitted the required applications.<br>|

<h2 id="tocS_NotificationDisabled">NotificationDisabled</h2>
<!-- backwards compatibility -->
<a id="schemanotificationdisabled"></a>
<a id="schema_NotificationDisabled"></a>
<a id="tocSnotificationdisabled"></a>
<a id="tocsnotificationdisabled"></a>

```json
false
```

`true`: The user doesn’t receive a push notification when a message is sent.
`false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device).
The default value is false.

<h2 id="tocS_PushMessageResponse">PushMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemapushmessageresponse"></a>
<a id="schema_PushMessageResponse"></a>
<a id="tocSpushmessageresponse"></a>
<a id="tocspushmessageresponse"></a>

```json
{
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sentMessages|[[SentMessage](#schemasentmessage)]|true|none|Array of sent messages.|

<h2 id="tocS_MulticastRequest">MulticastRequest</h2>
<!-- backwards compatibility -->
<a id="schemamulticastrequest"></a>
<a id="schema_MulticastRequest"></a>
<a id="tocSmulticastrequest"></a>
<a id="tocsmulticastrequest"></a>

```json
{
  "messages": [
    {
      "type": "string",
      "quickReply": {
        "items": [
          {
            "imageUrl": "http://example.com",
            "action": {
              "type": "string",
              "label": "string"
            },
            "type": "action"
          }
        ]
      },
      "sender": {
        "name": "string",
        "iconUrl": "http://example.com"
      }
    }
  ],
  "to": [
    "string"
  ],
  "notificationDisabled": false,
  "customAggregationUnits": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[[Message](#schemamessage)]|true|none|Messages to send|
|to|[string]|true|none|Array of user IDs. Use userId values which are returned in webhook event objects. Do not use LINE IDs found on LINE.|
|notificationDisabled|[NotificationDisabled](#schemanotificationdisabled)|false|none|`true`: The user doesn’t receive a push notification when a message is sent.<br>`false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device).<br>The default value is false.<br>|
|customAggregationUnits|[string]|false|none|Name of aggregation unit. Case-sensitive.|

<h2 id="tocS_MulticastResponse">MulticastResponse</h2>
<!-- backwards compatibility -->
<a id="schemamulticastresponse"></a>
<a id="schema_MulticastResponse"></a>
<a id="tocSmulticastresponse"></a>
<a id="tocsmulticastresponse"></a>

```json
{}
```

<h2 id="tocS_NarrowcastRequest">NarrowcastRequest</h2>
<!-- backwards compatibility -->
<a id="schemanarrowcastrequest"></a>
<a id="schema_NarrowcastRequest"></a>
<a id="tocSnarrowcastrequest"></a>
<a id="tocsnarrowcastrequest"></a>

```json
{
  "messages": [
    {
      "type": "string",
      "quickReply": {
        "items": [
          {
            "imageUrl": "http://example.com",
            "action": {
              "type": "string",
              "label": "string"
            },
            "type": "action"
          }
        ]
      },
      "sender": {
        "name": "string",
        "iconUrl": "http://example.com"
      }
    }
  ],
  "recipient": {
    "type": "string"
  },
  "filter": {
    "demographic": {
      "type": "string"
    }
  },
  "limit": {
    "max": 1,
    "upToRemainingQuota": false,
    "forbidPartialDelivery": false
  },
  "notificationDisabled": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[[Message](#schemamessage)]|true|none|List of Message objects.|
|recipient|[Recipient](#schemarecipient)|false|none|Recipient|
|filter|[Filter](#schemafilter)|false|none|Filter for narrowcast|
|limit|[Limit](#schemalimit)|false|none|Limit of the Narrowcast|
|notificationDisabled|[NotificationDisabled](#schemanotificationdisabled)|false|none|`true`: The user doesn’t receive a push notification when a message is sent.<br>`false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device).<br>The default value is false.<br>|

<h2 id="tocS_NarrowcastResponse">NarrowcastResponse</h2>
<!-- backwards compatibility -->
<a id="schemanarrowcastresponse"></a>
<a id="schema_NarrowcastResponse"></a>
<a id="tocSnarrowcastresponse"></a>
<a id="tocsnarrowcastresponse"></a>

```json
{}
```

<h2 id="tocS_Recipient">Recipient</h2>
<!-- backwards compatibility -->
<a id="schemarecipient"></a>
<a id="schema_Recipient"></a>
<a id="tocSrecipient"></a>
<a id="tocsrecipient"></a>

```json
{
  "type": "string"
}
```

Recipient

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of recipient|

<h2 id="tocS_OperatorRecipient">OperatorRecipient</h2>
<!-- backwards compatibility -->
<a id="schemaoperatorrecipient"></a>
<a id="schema_OperatorRecipient"></a>
<a id="tocSoperatorrecipient"></a>
<a id="tocsoperatorrecipient"></a>

```json
{
  "type": "string",
  "and": [
    {
      "type": "string"
    }
  ],
  "or": [
    {
      "type": "string"
    }
  ],
  "not": {
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of recipient|
|and|[[Recipient](#schemarecipient)]|false|none|Create a new recipient object by taking the logical conjunction (AND) of the specified array of recipient objects.<br>|
|or|[[Recipient](#schemarecipient)]|false|none|Create a new recipient object by taking the logical disjunction (OR) of the specified array of recipient objects.<br>|
|not|[Recipient](#schemarecipient)|false|none|Recipient|

<h2 id="tocS_AudienceRecipient">AudienceRecipient</h2>
<!-- backwards compatibility -->
<a id="schemaaudiencerecipient"></a>
<a id="schema_AudienceRecipient"></a>
<a id="tocSaudiencerecipient"></a>
<a id="tocsaudiencerecipient"></a>

```json
{
  "type": "string",
  "audienceGroupId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of recipient|
|audienceGroupId|integer(int64)|false|none|none|

<h2 id="tocS_RedeliveryRecipient">RedeliveryRecipient</h2>
<!-- backwards compatibility -->
<a id="schemaredeliveryrecipient"></a>
<a id="schema_RedeliveryRecipient"></a>
<a id="tocSredeliveryrecipient"></a>
<a id="tocsredeliveryrecipient"></a>

```json
{
  "type": "string",
  "requestId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of recipient|
|requestId|string|false|none|none|

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "demographic": {
    "type": "string"
  }
}
```

Filter for narrowcast

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|demographic|[DemographicFilter](#schemademographicfilter)|false|none|Demographic filter|

<h2 id="tocS_DemographicFilter">DemographicFilter</h2>
<!-- backwards compatibility -->
<a id="schemademographicfilter"></a>
<a id="schema_DemographicFilter"></a>
<a id="tocSdemographicfilter"></a>
<a id="tocsdemographicfilter"></a>

```json
{
  "type": "string"
}
```

Demographic filter

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of demographic filter|

<h2 id="tocS_AgeDemographicFilter">AgeDemographicFilter</h2>
<!-- backwards compatibility -->
<a id="schemaagedemographicfilter"></a>
<a id="schema_AgeDemographicFilter"></a>
<a id="tocSagedemographicfilter"></a>
<a id="tocsagedemographicfilter"></a>

```json
{
  "type": "string",
  "gte": "age_15",
  "lt": "age_15"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of demographic filter|
|gte|[AgeDemographic](#schemaagedemographic)|false|none|none|
|lt|[AgeDemographic](#schemaagedemographic)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|gte|age_15|
|gte|age_20|
|gte|age_25|
|gte|age_30|
|gte|age_35|
|gte|age_40|
|gte|age_45|
|gte|age_50|
|gte|age_55|
|gte|age_60|
|gte|age_65|
|gte|age_70|
|lt|age_15|
|lt|age_20|
|lt|age_25|
|lt|age_30|
|lt|age_35|
|lt|age_40|
|lt|age_45|
|lt|age_50|
|lt|age_55|
|lt|age_60|
|lt|age_65|
|lt|age_70|

<h2 id="tocS_AgeDemographic">AgeDemographic</h2>
<!-- backwards compatibility -->
<a id="schemaagedemographic"></a>
<a id="schema_AgeDemographic"></a>
<a id="tocSagedemographic"></a>
<a id="tocsagedemographic"></a>

```json
"age_15"
```

<h2 id="tocS_AppTypeDemographicFilter">AppTypeDemographicFilter</h2>
<!-- backwards compatibility -->
<a id="schemaapptypedemographicfilter"></a>
<a id="schema_AppTypeDemographicFilter"></a>
<a id="tocSapptypedemographicfilter"></a>
<a id="tocsapptypedemographicfilter"></a>

```json
{
  "type": "string",
  "oneOf": [
    "ios"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of demographic filter|
|oneOf|[[AppTypeDemographic](#schemaapptypedemographic)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|oneOf|ios|
|oneOf|android|

<h2 id="tocS_AppTypeDemographic">AppTypeDemographic</h2>
<!-- backwards compatibility -->
<a id="schemaapptypedemographic"></a>
<a id="schema_AppTypeDemographic"></a>
<a id="tocSapptypedemographic"></a>
<a id="tocsapptypedemographic"></a>

```json
"ios"
```

<h2 id="tocS_AreaDemographicFilter">AreaDemographicFilter</h2>
<!-- backwards compatibility -->
<a id="schemaareademographicfilter"></a>
<a id="schema_AreaDemographicFilter"></a>
<a id="tocSareademographicfilter"></a>
<a id="tocsareademographicfilter"></a>

```json
{
  "type": "string",
  "oneOf": [
    "jp_01"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of demographic filter|
|oneOf|[[AreaDemographic](#schemaareademographic)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|oneOf|jp_01|
|oneOf|jp_02|
|oneOf|jp_03|
|oneOf|jp_04|
|oneOf|jp_05|
|oneOf|jp_06|
|oneOf|jp_07|
|oneOf|jp_08|
|oneOf|jp_09|
|oneOf|jp_10|
|oneOf|jp_11|
|oneOf|jp_12|
|oneOf|jp_13|
|oneOf|jp_14|
|oneOf|jp_15|
|oneOf|jp_16|
|oneOf|jp_17|
|oneOf|jp_18|
|oneOf|jp_19|
|oneOf|jp_20|
|oneOf|jp_21|
|oneOf|jp_22|
|oneOf|jp_23|
|oneOf|jp_24|
|oneOf|jp_25|
|oneOf|jp_26|
|oneOf|jp_27|
|oneOf|jp_28|
|oneOf|jp_29|
|oneOf|jp_30|
|oneOf|jp_31|
|oneOf|jp_32|
|oneOf|jp_33|
|oneOf|jp_34|
|oneOf|jp_35|
|oneOf|jp_36|
|oneOf|jp_37|
|oneOf|jp_38|
|oneOf|jp_39|
|oneOf|jp_40|
|oneOf|jp_41|
|oneOf|jp_42|
|oneOf|jp_43|
|oneOf|jp_44|
|oneOf|jp_45|
|oneOf|jp_46|
|oneOf|jp_47|
|oneOf|tw_01|
|oneOf|tw_02|
|oneOf|tw_03|
|oneOf|tw_04|
|oneOf|tw_05|
|oneOf|tw_06|
|oneOf|tw_07|
|oneOf|tw_08|
|oneOf|tw_09|
|oneOf|tw_10|
|oneOf|tw_11|
|oneOf|tw_12|
|oneOf|tw_13|
|oneOf|tw_14|
|oneOf|tw_15|
|oneOf|tw_16|
|oneOf|tw_17|
|oneOf|tw_18|
|oneOf|tw_19|
|oneOf|tw_20|
|oneOf|tw_21|
|oneOf|tw_22|
|oneOf|th_01|
|oneOf|th_02|
|oneOf|th_03|
|oneOf|th_04|
|oneOf|th_05|
|oneOf|th_06|
|oneOf|th_07|
|oneOf|th_08|
|oneOf|id_01|
|oneOf|id_02|
|oneOf|id_03|
|oneOf|id_04|
|oneOf|id_05|
|oneOf|id_06|
|oneOf|id_07|
|oneOf|id_08|
|oneOf|id_09|
|oneOf|id_10|
|oneOf|id_11|
|oneOf|id_12|

<h2 id="tocS_AreaDemographic">AreaDemographic</h2>
<!-- backwards compatibility -->
<a id="schemaareademographic"></a>
<a id="schema_AreaDemographic"></a>
<a id="tocSareademographic"></a>
<a id="tocsareademographic"></a>

```json
"jp_01"
```

<h2 id="tocS_GenderDemographicFilter">GenderDemographicFilter</h2>
<!-- backwards compatibility -->
<a id="schemagenderdemographicfilter"></a>
<a id="schema_GenderDemographicFilter"></a>
<a id="tocSgenderdemographicfilter"></a>
<a id="tocsgenderdemographicfilter"></a>

```json
{
  "type": "string",
  "oneOf": [
    "male"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of demographic filter|
|oneOf|[[GenderDemographic](#schemagenderdemographic)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|oneOf|male|
|oneOf|female|

<h2 id="tocS_GenderDemographic">GenderDemographic</h2>
<!-- backwards compatibility -->
<a id="schemagenderdemographic"></a>
<a id="schema_GenderDemographic"></a>
<a id="tocSgenderdemographic"></a>
<a id="tocsgenderdemographic"></a>

```json
"male"
```

<h2 id="tocS_OperatorDemographicFilter">OperatorDemographicFilter</h2>
<!-- backwards compatibility -->
<a id="schemaoperatordemographicfilter"></a>
<a id="schema_OperatorDemographicFilter"></a>
<a id="tocSoperatordemographicfilter"></a>
<a id="tocsoperatordemographicfilter"></a>

```json
{
  "type": "string",
  "and": [
    {
      "type": "string"
    }
  ],
  "or": [
    {
      "type": "string"
    }
  ],
  "not": {
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of demographic filter|
|and|[[DemographicFilter](#schemademographicfilter)]|false|none|none|
|or|[[DemographicFilter](#schemademographicfilter)]|false|none|none|
|not|[DemographicFilter](#schemademographicfilter)|false|none|Demographic filter|

<h2 id="tocS_SubscriptionPeriodDemographicFilter">SubscriptionPeriodDemographicFilter</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionperioddemographicfilter"></a>
<a id="schema_SubscriptionPeriodDemographicFilter"></a>
<a id="tocSsubscriptionperioddemographicfilter"></a>
<a id="tocssubscriptionperioddemographicfilter"></a>

```json
{
  "type": "string",
  "gte": "day_7",
  "lt": "day_7"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of demographic filter|
|gte|[SubscriptionPeriodDemographic](#schemasubscriptionperioddemographic)|false|none|none|
|lt|[SubscriptionPeriodDemographic](#schemasubscriptionperioddemographic)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|gte|day_7|
|gte|day_30|
|gte|day_90|
|gte|day_180|
|gte|day_365|
|lt|day_7|
|lt|day_30|
|lt|day_90|
|lt|day_180|
|lt|day_365|

<h2 id="tocS_SubscriptionPeriodDemographic">SubscriptionPeriodDemographic</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionperioddemographic"></a>
<a id="schema_SubscriptionPeriodDemographic"></a>
<a id="tocSsubscriptionperioddemographic"></a>
<a id="tocssubscriptionperioddemographic"></a>

```json
"day_7"
```

<h2 id="tocS_Limit">Limit</h2>
<!-- backwards compatibility -->
<a id="schemalimit"></a>
<a id="schema_Limit"></a>
<a id="tocSlimit"></a>
<a id="tocslimit"></a>

```json
{
  "max": 1,
  "upToRemainingQuota": false,
  "forbidPartialDelivery": false
}
```

Limit of the Narrowcast

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max|integer(int32)|false|none|The maximum number of narrowcast messages to send.<br>Use this parameter to limit the number of narrowcast messages sent.<br>The recipients will be chosen at random.<br>|
|upToRemainingQuota|boolean|false|none|If true, the message will be sent within the maximum number of deliverable messages. The default value is `false`.<br><br>Targets will be selected at random.<br>|
|forbidPartialDelivery|boolean|false|none|This option prevents messages from being delivered to only a subset of the target audience.<br>If true, the narrowcast request success but fails asynchronously.<br>You can check whether message delivery was canceled by retrieving the narrowcast message progress.<br><br>This property can be set to true only if upToRemainingQuota is set to true.<br>|

<h2 id="tocS_NarrowcastProgressResponse">NarrowcastProgressResponse</h2>
<!-- backwards compatibility -->
<a id="schemanarrowcastprogressresponse"></a>
<a id="schema_NarrowcastProgressResponse"></a>
<a id="tocSnarrowcastprogressresponse"></a>
<a id="tocsnarrowcastprogressresponse"></a>

```json
{
  "phase": "waiting",
  "successCount": 0,
  "failureCount": 0,
  "targetCount": 0,
  "failedDescription": "string",
  "errorCode": 0,
  "acceptedTime": "1970-01-01T00:00:00Z",
  "completedTime": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phase|string|true|none|The current status. One of:<br><br>`waiting`: Messages are not yet ready to be sent. They are currently being filtered or processed in some way.<br>`sending`: Messages are currently being sent.<br>`succeeded`: Messages were sent successfully. This may not mean the messages were successfully received.<br>`failed`: Messages failed to be sent. Use the failedDescription property to find the cause of the failure.<br>|
|successCount|integer(int64)|false|none|The number of users who successfully received the message.|
|failureCount|integer(int64)|false|none|The number of users who failed to send the message.|
|targetCount|integer(int64)|false|none|The number of intended recipients of the message.|
|failedDescription|string|false|none|The reason the message failed to be sent. This is only included with a `phase` property value of `failed`.|
|errorCode|integer(int64)|false|none|Error summary. This is only included with a phase property value of failed.<br>One of:<br><br>`1`: An internal error occurred.<br>`2`: An error occurred because there weren't enough recipients.<br>`3`: A conflict error of requests occurs because a request that has already been accepted is retried.<br>`4`: An audience of less than 50 recipients is included as a condition of sending.<br>`5`: Message delivery has been canceled to prevent messages from being delivered only to a subset of the target audience.<br>|
|acceptedTime|string(date-time)|true|none|Narrowcast message request accepted time in milliseconds.<br><br>Format: ISO 8601 (e.g. 2020-12-03T10:15:30.121Z)<br>Timezone: UTC<br>|
|completedTime|string(date-time)|false|none|Processing of narrowcast message request completion time in milliseconds. Returned when the phase property is succeeded or failed.<br><br>Format: ISO 8601 (e.g. 2020-12-03T10:15:30.121Z)<br>Timezone: UTC<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|phase|waiting|
|phase|sending|
|phase|succeeded|
|phase|failed|

<h2 id="tocS_BroadcastRequest">BroadcastRequest</h2>
<!-- backwards compatibility -->
<a id="schemabroadcastrequest"></a>
<a id="schema_BroadcastRequest"></a>
<a id="tocSbroadcastrequest"></a>
<a id="tocsbroadcastrequest"></a>

```json
{
  "messages": [
    {
      "type": "string",
      "quickReply": {
        "items": [
          {
            "imageUrl": "http://example.com",
            "action": {
              "type": "string",
              "label": "string"
            },
            "type": "action"
          }
        ]
      },
      "sender": {
        "name": "string",
        "iconUrl": "http://example.com"
      }
    }
  ],
  "notificationDisabled": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[[Message](#schemamessage)]|true|none|List of Message objects.|
|notificationDisabled|[NotificationDisabled](#schemanotificationdisabled)|false|none|`true`: The user doesn’t receive a push notification when a message is sent.<br>`false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device).<br>The default value is false.<br>|

<h2 id="tocS_BroadcastResponse">BroadcastResponse</h2>
<!-- backwards compatibility -->
<a id="schemabroadcastresponse"></a>
<a id="schema_BroadcastResponse"></a>
<a id="tocSbroadcastresponse"></a>
<a id="tocsbroadcastresponse"></a>

```json
{}
```

<h2 id="tocS_MessageQuotaResponse">MessageQuotaResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagequotaresponse"></a>
<a id="schema_MessageQuotaResponse"></a>
<a id="tocSmessagequotaresponse"></a>
<a id="tocsmessagequotaresponse"></a>

```json
{
  "type": "none",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[QuotaType](#schemaquotatype)|true|none|One of the following values to indicate whether a target limit is set or not.|
|value|integer(int64)|false|none|The target limit for sending messages in the current month. This property is returned when the `type` property has a value of `limited`.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|none|
|type|limited|

<h2 id="tocS_QuotaType">QuotaType</h2>
<!-- backwards compatibility -->
<a id="schemaquotatype"></a>
<a id="schema_QuotaType"></a>
<a id="tocSquotatype"></a>
<a id="tocsquotatype"></a>

```json
"none"
```

One of the following values to indicate whether a target limit is set or not.

<h2 id="tocS_QuotaConsumptionResponse">QuotaConsumptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquotaconsumptionresponse"></a>
<a id="schema_QuotaConsumptionResponse"></a>
<a id="tocSquotaconsumptionresponse"></a>
<a id="tocsquotaconsumptionresponse"></a>

```json
{
  "totalUsage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalUsage|integer(int64)|true|none|The number of sent messages in the current month|

<h2 id="tocS_NumberOfMessagesResponse">NumberOfMessagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemanumberofmessagesresponse"></a>
<a id="schema_NumberOfMessagesResponse"></a>
<a id="tocSnumberofmessagesresponse"></a>
<a id="tocsnumberofmessagesresponse"></a>

```json
{
  "status": "ready",
  "success": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Aggregation process status. One of:<br><br>`ready`: The number of messages can be obtained.<br>`unready`: We haven't finished calculating the number of sent messages for the specified in date. For example, this property is returned when the delivery date or a future date is specified. Calculation usually takes about a day.<br>`unavailable_for_privacy`: The total number of messages on the specified day is less than 20.<br>`out_of_service`: The specified date is earlier than the date on which we first started calculating sent messages (March 31, 2018).<br>|
|success|integer(int64)|false|none|The number of messages delivered using the phone number on the date specified in `date`.<br>The response has this property only when the value of `status` is `ready`.<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ready|
|status|unready|
|status|unavailable_for_privacy|
|status|out_of_service|

<h2 id="tocS_ValidateMessageRequest">ValidateMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemavalidatemessagerequest"></a>
<a id="schema_ValidateMessageRequest"></a>
<a id="tocSvalidatemessagerequest"></a>
<a id="tocsvalidatemessagerequest"></a>

```json
{
  "messages": [
    {
      "type": "string",
      "quickReply": {
        "items": [
          {
            "imageUrl": "http://example.com",
            "action": {
              "type": "string",
              "label": "string"
            },
            "type": "action"
          }
        ]
      },
      "sender": {
        "name": "string",
        "iconUrl": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[[Message](#schemamessage)]|true|none|Array of message objects to validate|

<h2 id="tocS_GetAggregationUnitUsageResponse">GetAggregationUnitUsageResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaggregationunitusageresponse"></a>
<a id="schema_GetAggregationUnitUsageResponse"></a>
<a id="tocSgetaggregationunitusageresponse"></a>
<a id="tocsgetaggregationunitusageresponse"></a>

```json
{
  "numOfCustomAggregationUnits": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numOfCustomAggregationUnits|integer(int64)|true|none|Number of aggregation units used this month.|

<h2 id="tocS_GetAggregationUnitNameListResponse">GetAggregationUnitNameListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaggregationunitnamelistresponse"></a>
<a id="schema_GetAggregationUnitNameListResponse"></a>
<a id="tocSgetaggregationunitnamelistresponse"></a>
<a id="tocsgetaggregationunitnamelistresponse"></a>

```json
{
  "customAggregationUnits": [
    "string"
  ],
  "next": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customAggregationUnits|[string]|true|none|An array of strings indicating the names of aggregation units used this month.|
|next|string|false|none|A continuation token to get the next array of unit names.<br>Returned only when there are remaining aggregation units that weren't returned in customAggregationUnits in the original request.<br><br>|

<h2 id="tocS_UserProfileResponse">UserProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserprofileresponse"></a>
<a id="schema_UserProfileResponse"></a>
<a id="tocSuserprofileresponse"></a>
<a id="tocsuserprofileresponse"></a>

```json
{
  "displayName": "string",
  "userId": "string",
  "pictureUrl": "http://example.com",
  "statusMessage": "string",
  "language": "en"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|true|none|User's display name|
|userId|string|true|none|User ID|
|pictureUrl|string(uri)|false|none|Profile image URL. `https` image URL. Not included in the response if the user doesn't have a profile image.|
|statusMessage|string|false|none|User's status message. Not included in the response if the user doesn't have a status message.|
|language|string|false|none|User's language, as a BCP 47 language tag. Not included in the response if the user hasn't yet consented to the LINE Privacy Policy.|

<h2 id="tocS_GetFollowersResponse">GetFollowersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfollowersresponse"></a>
<a id="schema_GetFollowersResponse"></a>
<a id="tocSgetfollowersresponse"></a>
<a id="tocsgetfollowersresponse"></a>

```json
{
  "userIds": [
    "string"
  ],
  "next": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userIds|[string]|true|none|An array of strings indicating user IDs of users that have added the LINE Official Account as a friend.<br>Only users of LINE for iOS and LINE for Android are included in `userIds`.<br>|
|next|string|false|none|A continuation token to get the next array of user IDs.<br>Returned only when there are remaining user IDs that weren't returned in `userIds` in the original request.<br>The number of user IDs in the `userIds` element doesn't have to reach the maximum number specified by `limit` for the `next` property to be included in the response.<br><br>|

<h2 id="tocS_BotInfoResponse">BotInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemabotinforesponse"></a>
<a id="schema_BotInfoResponse"></a>
<a id="tocSbotinforesponse"></a>
<a id="tocsbotinforesponse"></a>

```json
{
  "userId": "string",
  "basicId": "string",
  "premiumId": "string",
  "displayName": "string",
  "pictureUrl": "http://example.com",
  "chatMode": "chat",
  "markAsReadMode": "auto"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|Bot's user ID|
|basicId|string|true|none|Bot's basic ID|
|premiumId|string|false|none|Bot's premium ID. Not included in the response if the premium ID isn't set.|
|displayName|string|true|none|Bot's display name|
|pictureUrl|string(uri)|false|none|Profile image URL. `https` image URL. Not included in the response if the bot doesn't have a profile image.|
|chatMode|string|true|none|Chat settings set in the LINE Official Account Manager. One of:<br><br>`chat`: Chat is set to "On".<br>`bot`: Chat is set to "Off".<br>|
|markAsReadMode|string|true|none|Automatic read setting for messages. If the chat is set to "Off", auto is returned. If the chat is set to "On", manual is returned.<br><br>`auto`: Auto read setting is enabled.<br>`manual`: Auto read setting is disabled.<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|chatMode|chat|
|chatMode|bot|
|markAsReadMode|auto|
|markAsReadMode|manual|

<h2 id="tocS_GroupUserProfileResponse">GroupUserProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagroupuserprofileresponse"></a>
<a id="schema_GroupUserProfileResponse"></a>
<a id="tocSgroupuserprofileresponse"></a>
<a id="tocsgroupuserprofileresponse"></a>

```json
{
  "displayName": "string",
  "userId": "string",
  "pictureUrl": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|true|none|User's display name|
|userId|string|true|none|User ID|
|pictureUrl|string(uri)|false|none|Profile image URL. `https` image URL. Not included in the response if the user doesn't have a profile image.|

<h2 id="tocS_RoomUserProfileResponse">RoomUserProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaroomuserprofileresponse"></a>
<a id="schema_RoomUserProfileResponse"></a>
<a id="tocSroomuserprofileresponse"></a>
<a id="tocsroomuserprofileresponse"></a>

```json
{
  "displayName": "string",
  "userId": "string",
  "pictureUrl": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|true|none|User's display name|
|userId|string|true|none|User ID|
|pictureUrl|string(uri)|false|none|Profile image URL. `https` image URL. Not included in the response if the user doesn't have a profile image.|

<h2 id="tocS_MembersIdsResponse">MembersIdsResponse</h2>
<!-- backwards compatibility -->
<a id="schemamembersidsresponse"></a>
<a id="schema_MembersIdsResponse"></a>
<a id="tocSmembersidsresponse"></a>
<a id="tocsmembersidsresponse"></a>

```json
{
  "memberIds": [
    "string"
  ],
  "next": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberIds|[string]|true|none|List of user IDs of members in the group chat. Only users of LINE for iOS and LINE for Android are included in `memberIds`.|
|next|string|false|none|A continuation token to get the next array of user IDs of the members in the group chat.<br>Returned only when there are remaining user IDs that were not returned in `memberIds` in the original request.<br>|

<h2 id="tocS_GroupSummaryResponse">GroupSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagroupsummaryresponse"></a>
<a id="schema_GroupSummaryResponse"></a>
<a id="tocSgroupsummaryresponse"></a>
<a id="tocsgroupsummaryresponse"></a>

```json
{
  "groupId": "string",
  "groupName": "string",
  "pictureUrl": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupId|string|true|none|Group ID|
|groupName|string|true|none|Group name|
|pictureUrl|string(uri)|false|none|Group icon URL. Not included in the response if the user doesn't set a group profile icon.|

<h2 id="tocS_GroupMemberCountResponse">GroupMemberCountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagroupmembercountresponse"></a>
<a id="schema_GroupMemberCountResponse"></a>
<a id="tocSgroupmembercountresponse"></a>
<a id="tocsgroupmembercountresponse"></a>

```json
{
  "count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|true|none|The count of members in the group chat. The number returned excludes the LINE Official Account.|

<h2 id="tocS_RoomMemberCountResponse">RoomMemberCountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaroommembercountresponse"></a>
<a id="schema_RoomMemberCountResponse"></a>
<a id="tocSroommembercountresponse"></a>
<a id="tocsroommembercountresponse"></a>

```json
{
  "count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|true|none|The count of members in the multi-person chat. The number returned excludes the LINE Official Account.|

<h2 id="tocS_RichMenuRequest">RichMenuRequest</h2>
<!-- backwards compatibility -->
<a id="schemarichmenurequest"></a>
<a id="schema_RichMenuRequest"></a>
<a id="tocSrichmenurequest"></a>
<a id="tocsrichmenurequest"></a>

```json
{
  "size": {
    "width": 1,
    "height": 1
  },
  "selected": true,
  "name": "string",
  "chatBarText": "string",
  "areas": [
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 1,
        "height": 1
      },
      "action": {
        "type": "string",
        "label": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|[RichMenuSize](#schemarichmenusize)|false|none|Rich menu size|
|selected|boolean|false|none|`true` to display the rich menu by default. Otherwise, `false`.|
|name|string|false|none|Name of the rich menu. This value can be used to help manage your rich menus and is not displayed to users.|
|chatBarText|string|false|none|Text displayed in the chat bar|
|areas|[[RichMenuArea](#schemarichmenuarea)]|false|none|Array of area objects which define the coordinates and size of tappable areas|

<h2 id="tocS_RichMenuSize">RichMenuSize</h2>
<!-- backwards compatibility -->
<a id="schemarichmenusize"></a>
<a id="schema_RichMenuSize"></a>
<a id="tocSrichmenusize"></a>
<a id="tocsrichmenusize"></a>

```json
{
  "width": 1,
  "height": 1
}
```

Rich menu size

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|width|integer(int64)|false|none|width|
|height|integer(int64)|false|none|height|

<h2 id="tocS_RichMenuArea">RichMenuArea</h2>
<!-- backwards compatibility -->
<a id="schemarichmenuarea"></a>
<a id="schema_RichMenuArea"></a>
<a id="tocSrichmenuarea"></a>
<a id="tocsrichmenuarea"></a>

```json
{
  "bounds": {
    "x": 0,
    "y": 0,
    "width": 1,
    "height": 1
  },
  "action": {
    "type": "string",
    "label": "string"
  }
}
```

Rich menu area

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bounds|[RichMenuBounds](#schemarichmenubounds)|false|none|Rich menu bounds|
|action|[Action](#schemaaction)|false|none|Action|

<h2 id="tocS_RichMenuBounds">RichMenuBounds</h2>
<!-- backwards compatibility -->
<a id="schemarichmenubounds"></a>
<a id="schema_RichMenuBounds"></a>
<a id="tocSrichmenubounds"></a>
<a id="tocsrichmenubounds"></a>

```json
{
  "x": 0,
  "y": 0,
  "width": 1,
  "height": 1
}
```

Rich menu bounds

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|integer(int64)|false|none|Horizontal position relative to the top-left corner of the area.|
|y|integer(int64)|false|none|Vertical position relative to the top-left corner of the area.|
|width|integer(int64)|false|none|Width of the area.|
|height|integer(int64)|false|none|Height of the area.|

<h2 id="tocS_RichMenuIdResponse">RichMenuIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemarichmenuidresponse"></a>
<a id="schema_RichMenuIdResponse"></a>
<a id="tocSrichmenuidresponse"></a>
<a id="tocsrichmenuidresponse"></a>

```json
{
  "richMenuId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|richMenuId|string|true|none|Rich menu ID|

<h2 id="tocS_RichMenuResponse">RichMenuResponse</h2>
<!-- backwards compatibility -->
<a id="schemarichmenuresponse"></a>
<a id="schema_RichMenuResponse"></a>
<a id="tocSrichmenuresponse"></a>
<a id="tocsrichmenuresponse"></a>

```json
{
  "richMenuId": "string",
  "size": {
    "width": 1,
    "height": 1
  },
  "selected": true,
  "name": "string",
  "chatBarText": "string",
  "areas": [
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 1,
        "height": 1
      },
      "action": {
        "type": "string",
        "label": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|richMenuId|string|true|none|ID of a rich menu|
|size|[RichMenuSize](#schemarichmenusize)|true|none|Rich menu size|
|selected|boolean|true|none|`true` to display the rich menu by default. Otherwise, `false`.|
|name|string|true|none|Name of the rich menu. This value can be used to help manage your rich menus and is not displayed to users.|
|chatBarText|string|true|none|Text displayed in the chat bar|
|areas|[[RichMenuArea](#schemarichmenuarea)]|true|none|Array of area objects which define the coordinates and size of tappable areas|

<h2 id="tocS_RichMenuListResponse">RichMenuListResponse</h2>
<!-- backwards compatibility -->
<a id="schemarichmenulistresponse"></a>
<a id="schema_RichMenuListResponse"></a>
<a id="tocSrichmenulistresponse"></a>
<a id="tocsrichmenulistresponse"></a>

```json
{
  "richmenus": [
    {
      "richMenuId": "string",
      "size": {
        "width": 1,
        "height": 1
      },
      "selected": true,
      "name": "string",
      "chatBarText": "string",
      "areas": [
        {
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1,
            "height": 1
          },
          "action": {
            "type": "string",
            "label": "string"
          }
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|richmenus|[[RichMenuResponse](#schemarichmenuresponse)]|true|none|Rich menus|

<h2 id="tocS_CreateRichMenuAliasRequest">CreateRichMenuAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterichmenualiasrequest"></a>
<a id="schema_CreateRichMenuAliasRequest"></a>
<a id="tocScreaterichmenualiasrequest"></a>
<a id="tocscreaterichmenualiasrequest"></a>

```json
{
  "richMenuAliasId": "string",
  "richMenuId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|richMenuAliasId|string|true|none|Rich menu alias ID, which can be any ID, unique for each channel.|
|richMenuId|string|true|none|The rich menu ID to be associated with the rich menu alias.|

<h2 id="tocS_RichMenuAliasResponse">RichMenuAliasResponse</h2>
<!-- backwards compatibility -->
<a id="schemarichmenualiasresponse"></a>
<a id="schema_RichMenuAliasResponse"></a>
<a id="tocSrichmenualiasresponse"></a>
<a id="tocsrichmenualiasresponse"></a>

```json
{
  "richMenuAliasId": "string",
  "richMenuId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|richMenuAliasId|string|true|none|Rich menu alias ID.|
|richMenuId|string|true|none|The rich menu ID associated with the rich menu alias.|

<h2 id="tocS_UpdateRichMenuAliasRequest">UpdateRichMenuAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterichmenualiasrequest"></a>
<a id="schema_UpdateRichMenuAliasRequest"></a>
<a id="tocSupdaterichmenualiasrequest"></a>
<a id="tocsupdaterichmenualiasrequest"></a>

```json
{
  "richMenuId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|richMenuId|string|true|none|The rich menu ID to be associated with the rich menu alias.|

<h2 id="tocS_RichMenuAliasListResponse">RichMenuAliasListResponse</h2>
<!-- backwards compatibility -->
<a id="schemarichmenualiaslistresponse"></a>
<a id="schema_RichMenuAliasListResponse"></a>
<a id="tocSrichmenualiaslistresponse"></a>
<a id="tocsrichmenualiaslistresponse"></a>

```json
{
  "aliases": [
    {
      "richMenuAliasId": "string",
      "richMenuId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliases|[[RichMenuAliasResponse](#schemarichmenualiasresponse)]|true|none|Rich menu aliases.|

<h2 id="tocS_RichMenuBulkLinkRequest">RichMenuBulkLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemarichmenubulklinkrequest"></a>
<a id="schema_RichMenuBulkLinkRequest"></a>
<a id="tocSrichmenubulklinkrequest"></a>
<a id="tocsrichmenubulklinkrequest"></a>

```json
{
  "richMenuId": "string",
  "userIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|richMenuId|string|true|none|ID of a rich menu|
|userIds|[string]|true|none|Array of user IDs. Found in the `source` object of webhook event objects. Do not use the LINE ID used in LINE.|

<h2 id="tocS_RichMenuBulkUnlinkRequest">RichMenuBulkUnlinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemarichmenubulkunlinkrequest"></a>
<a id="schema_RichMenuBulkUnlinkRequest"></a>
<a id="tocSrichmenubulkunlinkrequest"></a>
<a id="tocsrichmenubulkunlinkrequest"></a>

```json
{
  "userIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userIds|[string]|true|none|Array of user IDs. Found in the `source` object of webhook event objects. Do not use the LINE ID used in LINE.|

<h2 id="tocS_RichMenuBatchRequest">RichMenuBatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemarichmenubatchrequest"></a>
<a id="schema_RichMenuBatchRequest"></a>
<a id="tocSrichmenubatchrequest"></a>
<a id="tocsrichmenubatchrequest"></a>

```json
{
  "operations": [
    {
      "type": "string"
    }
  ],
  "resumeRequestKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|[[RichMenuBatchOperation](#schemarichmenubatchoperation)]|true|none|Array of Rich menu operation object...|
|resumeRequestKey|string|false|none|Key for retry. Key value is a string matching the regular expression pattern|

<h2 id="tocS_RichMenuBatchOperation">RichMenuBatchOperation</h2>
<!-- backwards compatibility -->
<a id="schemarichmenubatchoperation"></a>
<a id="schema_RichMenuBatchOperation"></a>
<a id="tocSrichmenubatchoperation"></a>
<a id="tocsrichmenubatchoperation"></a>

```json
{
  "type": "string"
}
```

Rich menu operation object represents the batch operation to the rich menu linked to the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of operation to the rich menu linked to the user. One of link, unlink, or unlinkAll.|

<h2 id="tocS_RichMenuBatchLinkOperation">RichMenuBatchLinkOperation</h2>
<!-- backwards compatibility -->
<a id="schemarichmenubatchlinkoperation"></a>
<a id="schema_RichMenuBatchLinkOperation"></a>
<a id="tocSrichmenubatchlinkoperation"></a>
<a id="tocsrichmenubatchlinkoperation"></a>

```json
{
  "type": "string",
  "from": "string",
  "to": "string"
}
```

Replace the rich menu with the rich menu specified in the `to` property for all users linked to the rich menu specified in the `from` property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of operation to the rich menu linked to the user. One of link, unlink, or unlinkAll.|
|from|string|true|none|none|
|to|string|true|none|none|

<h2 id="tocS_RichMenuBatchUnlinkOperation">RichMenuBatchUnlinkOperation</h2>
<!-- backwards compatibility -->
<a id="schemarichmenubatchunlinkoperation"></a>
<a id="schema_RichMenuBatchUnlinkOperation"></a>
<a id="tocSrichmenubatchunlinkoperation"></a>
<a id="tocsrichmenubatchunlinkoperation"></a>

```json
{
  "type": "string",
  "from": "string"
}
```

Unlink the rich menu for all users linked to the rich menu specified in the `from` property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of operation to the rich menu linked to the user. One of link, unlink, or unlinkAll.|
|from|string|true|none|none|

<h2 id="tocS_RichMenuBatchUnlinkAllOperation">RichMenuBatchUnlinkAllOperation</h2>
<!-- backwards compatibility -->
<a id="schemarichmenubatchunlinkalloperation"></a>
<a id="schema_RichMenuBatchUnlinkAllOperation"></a>
<a id="tocSrichmenubatchunlinkalloperation"></a>
<a id="tocsrichmenubatchunlinkalloperation"></a>

```json
{
  "type": "string"
}
```

Unlink the rich menu from all users linked to the rich menu.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of operation to the rich menu linked to the user. One of link, unlink, or unlinkAll.|

<h2 id="tocS_RichMenuBatchProgressResponse">RichMenuBatchProgressResponse</h2>
<!-- backwards compatibility -->
<a id="schemarichmenubatchprogressresponse"></a>
<a id="schema_RichMenuBatchProgressResponse"></a>
<a id="tocSrichmenubatchprogressresponse"></a>
<a id="tocsrichmenubatchprogressresponse"></a>

```json
{
  "phase": "ongoing",
  "acceptedTime": "1970-01-01T00:00:00Z",
  "completedTime": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phase|[RichMenuBatchProgressPhase](#schemarichmenubatchprogressphase)|true|none|The current status. One of:<br><br>`ongoing`: Rich menu batch control is in progress.<br>`succeeded`: Rich menu batch control is complete.<br>`failed`: Rich menu batch control failed.<br>          This means that the rich menu for one or more users couldn't be controlled.<br>          There may also be users whose operations have been successfully completed.<br>|
|acceptedTime|string(date-time)|true|none|The accepted time in milliseconds of the request of batch control the rich menu.<br><br>Format: ISO 8601 (e.g. 2023-06-08T10:15:30.121Z)<br>Timezone: UTC<br>|
|completedTime|string(date-time)|false|none|The completed time in milliseconds of rich menu batch control. Returned when the phase property is succeeded or failed.<br><br>Format: ISO 8601 (e.g. 2023-06-08T10:15:30.121Z)<br>Timezone: UTC<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|phase|ongoing|
|phase|succeeded|
|phase|failed|

<h2 id="tocS_RichMenuBatchProgressPhase">RichMenuBatchProgressPhase</h2>
<!-- backwards compatibility -->
<a id="schemarichmenubatchprogressphase"></a>
<a id="schema_RichMenuBatchProgressPhase"></a>
<a id="tocSrichmenubatchprogressphase"></a>
<a id="tocsrichmenubatchprogressphase"></a>

```json
"ongoing"
```

The current status. One of:

`ongoing`: Rich menu batch control is in progress.
`succeeded`: Rich menu batch control is complete.
`failed`: Rich menu batch control failed.
          This means that the rich menu for one or more users couldn't be controlled.
          There may also be users whose operations have been successfully completed.

<h2 id="tocS_IssueLinkTokenResponse">IssueLinkTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaissuelinktokenresponse"></a>
<a id="schema_IssueLinkTokenResponse"></a>
<a id="tocSissuelinktokenresponse"></a>
<a id="tocsissuelinktokenresponse"></a>

```json
{
  "linkToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linkToken|string|true|none|Link token.<br>Link tokens are valid for 10 minutes and can only be used once.<br><br>|

<h2 id="tocS_MarkMessagesAsReadRequest">MarkMessagesAsReadRequest</h2>
<!-- backwards compatibility -->
<a id="schemamarkmessagesasreadrequest"></a>
<a id="schema_MarkMessagesAsReadRequest"></a>
<a id="tocSmarkmessagesasreadrequest"></a>
<a id="tocsmarkmessagesasreadrequest"></a>

```json
{
  "chat": {
    "userId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chat|[ChatReference](#schemachatreference)|true|none|Chat reference|

<h2 id="tocS_ChatReference">ChatReference</h2>
<!-- backwards compatibility -->
<a id="schemachatreference"></a>
<a id="schema_ChatReference"></a>
<a id="tocSchatreference"></a>
<a id="tocschatreference"></a>

```json
{
  "userId": "string"
}
```

Chat reference

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|The target user ID|

<h2 id="tocS_PnpMessagesRequest">PnpMessagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemapnpmessagesrequest"></a>
<a id="schema_PnpMessagesRequest"></a>
<a id="tocSpnpmessagesrequest"></a>
<a id="tocspnpmessagesrequest"></a>

```json
{
  "messages": [
    {
      "type": "string",
      "quickReply": {
        "items": [
          {
            "imageUrl": "http://example.com",
            "action": {
              "type": "string",
              "label": "string"
            },
            "type": "action"
          }
        ]
      },
      "sender": {
        "name": "string",
        "iconUrl": "http://example.com"
      }
    }
  ],
  "to": "string",
  "notificationDisabled": false,
  "customAggregationUnits": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[[Message](#schemamessage)]|true|none|Message to be sent.|
|to|string|true|none|Message destination. Specify a phone number that has been normalized to E.164 format and hashed with SHA256.|
|notificationDisabled|[NotificationDisabled](#schemanotificationdisabled)|false|none|`true`: The user doesn’t receive a push notification when a message is sent.<br>`false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device).<br>The default value is false.<br>|
|customAggregationUnits|[string]|false|none|Name of aggregation unit. Case-sensitive.|

<h2 id="tocS_PnpTemplatedMessageRequest">PnpTemplatedMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemapnptemplatedmessagerequest"></a>
<a id="schema_PnpTemplatedMessageRequest"></a>
<a id="tocSpnptemplatedmessagerequest"></a>
<a id="tocspnptemplatedmessagerequest"></a>

```json
{
  "to": "string",
  "templateKey": "string",
  "body": {
    "emphasizedItem": {
      "itemKey": "string",
      "content": "string"
    },
    "items": [
      {
        "itemKey": "string",
        "content": "string"
      }
    ],
    "buttons": [
      {
        "buttonKey": "string",
        "url": "string"
      }
    ]
  },
  "customAggregationUnits": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|to|string|true|none|Message destination. Specify a phone number that has been normalized to E.164 format and hashed with SHA256.|
|templateKey|string|true|none|Specify the key of the template you want to send.<br>For available keys, see https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/#templates<br>|
|body|[PnpTemplatedMessageBody](#schemapnptemplatedmessagebody)|false|none|The body object of the template you want to send. You can't specify the same item more than once in a single message.|
|customAggregationUnits|[string]|false|none|Name of aggregation unit. Case-sensitive.<br>For more information about assigning a unit name, see https://developers.line.biz/en/docs/messaging-api/unit-based-statistics-aggregation/#assign-names-to-units-when-sending-messages<br>|

<h2 id="tocS_PnpTemplatedMessageBody">PnpTemplatedMessageBody</h2>
<!-- backwards compatibility -->
<a id="schemapnptemplatedmessagebody"></a>
<a id="schema_PnpTemplatedMessageBody"></a>
<a id="tocSpnptemplatedmessagebody"></a>
<a id="tocspnptemplatedmessagebody"></a>

```json
{
  "emphasizedItem": {
    "itemKey": "string",
    "content": "string"
  },
  "items": [
    {
      "itemKey": "string",
      "content": "string"
    }
  ],
  "buttons": [
    {
      "buttonKey": "string",
      "url": "string"
    }
  ]
}
```

The body object of the template you want to send. You can't specify the same item more than once in a single message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emphasizedItem|[PnpTemplatedEmphasizedItem](#schemapnptemplatedemphasizeditem)|false|none|Item to emphasize in the message.|
|items|[[PnpTemplatedItem](#schemapnptemplateditem)]|false|none|Array of items to include in the message. The `itemKey` must be unique across `emphasizedItem` and `items`.|
|buttons|[[PnpTemplatedButton](#schemapnptemplatedbutton)]|false|none|Array of buttons to include in the message. The `buttonKey` must be unique.|

<h2 id="tocS_PnpTemplatedEmphasizedItem">PnpTemplatedEmphasizedItem</h2>
<!-- backwards compatibility -->
<a id="schemapnptemplatedemphasizeditem"></a>
<a id="schema_PnpTemplatedEmphasizedItem"></a>
<a id="tocSpnptemplatedemphasizeditem"></a>
<a id="tocspnptemplatedemphasizeditem"></a>

```json
{
  "itemKey": "string",
  "content": "string"
}
```

Item to emphasize in the message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemKey|string|true|none|Specify the key of the item you want to include.<br>For available keys, see https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/#items<br>|
|content|string|true|none|String to be displayed as the value of the item.|

<h2 id="tocS_PnpTemplatedItem">PnpTemplatedItem</h2>
<!-- backwards compatibility -->
<a id="schemapnptemplateditem"></a>
<a id="schema_PnpTemplatedItem"></a>
<a id="tocSpnptemplateditem"></a>
<a id="tocspnptemplateditem"></a>

```json
{
  "itemKey": "string",
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemKey|string|true|none|Specify the key of the item you want to include.<br>For available keys, see https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/#items<br>|
|content|string|true|none|String to be displayed as the value of the item.|

<h2 id="tocS_PnpTemplatedButton">PnpTemplatedButton</h2>
<!-- backwards compatibility -->
<a id="schemapnptemplatedbutton"></a>
<a id="schema_PnpTemplatedButton"></a>
<a id="tocSpnptemplatedbutton"></a>
<a id="tocspnptemplatedbutton"></a>

```json
{
  "buttonKey": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buttonKey|string|true|none|Specify the key of the button you want to include.<br>For available keys, see https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/#buttons<br>|
|url|string|true|none|URL of the page to be opened when the user presses the button.|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "type": "string",
  "quickReply": {
    "items": [
      {
        "imageUrl": "http://example.com",
        "action": {
          "type": "string",
          "label": "string"
        },
        "type": "action"
      }
    ]
  },
  "sender": {
    "name": "string",
    "iconUrl": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of message|
|quickReply|[QuickReply](#schemaquickreply)|false|none|Quick reply|
|sender|[Sender](#schemasender)|false|none|Change icon and display name|

<h2 id="tocS_QuickReply">QuickReply</h2>
<!-- backwards compatibility -->
<a id="schemaquickreply"></a>
<a id="schema_QuickReply"></a>
<a id="tocSquickreply"></a>
<a id="tocsquickreply"></a>

```json
{
  "items": [
    {
      "imageUrl": "http://example.com",
      "action": {
        "type": "string",
        "label": "string"
      },
      "type": "action"
    }
  ]
}
```

Quick reply

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[QuickReplyItem](#schemaquickreplyitem)]|false|none|Quick reply button objects.|

<h2 id="tocS_QuickReplyItem">QuickReplyItem</h2>
<!-- backwards compatibility -->
<a id="schemaquickreplyitem"></a>
<a id="schema_QuickReplyItem"></a>
<a id="tocSquickreplyitem"></a>
<a id="tocsquickreplyitem"></a>

```json
{
  "imageUrl": "http://example.com",
  "action": {
    "type": "string",
    "label": "string"
  },
  "type": "action"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageUrl|string(uri)|false|none|URL of the icon that is displayed at the beginning of the button|
|action|[Action](#schemaaction)|false|none|Action|
|type|string|false|none|`action`|

<h2 id="tocS_Sender">Sender</h2>
<!-- backwards compatibility -->
<a id="schemasender"></a>
<a id="schema_Sender"></a>
<a id="tocSsender"></a>
<a id="tocssender"></a>

```json
{
  "name": "string",
  "iconUrl": "http://example.com"
}
```

Change icon and display name

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Display name. Certain words such as `LINE` may not be used.|
|iconUrl|string(uri)|false|none|URL of the image to display as an icon when sending a message|

<h2 id="tocS_TextMessage">TextMessage</h2>
<!-- backwards compatibility -->
<a id="schematextmessage"></a>
<a id="schema_TextMessage"></a>
<a id="tocStextmessage"></a>
<a id="tocstextmessage"></a>

```json
{
  "type": "string",
  "quickReply": {
    "items": [
      {
        "imageUrl": "http://example.com",
        "action": {
          "type": "string",
          "label": "string"
        },
        "type": "action"
      }
    ]
  },
  "sender": {
    "name": "string",
    "iconUrl": "http://example.com"
  },
  "text": "string",
  "emojis": [
    {
      "index": 0,
      "productId": "string",
      "emojiId": "string"
    }
  ],
  "quoteToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of message|
|quickReply|[QuickReply](#schemaquickreply)|false|none|Quick reply|
|sender|[Sender](#schemasender)|false|none|Change icon and display name|
|text|string|true|none|none|
|emojis|[[Emoji](#schemaemoji)]|false|none|none|
|quoteToken|string|false|none|Quote token of the message you want to quote.|

<h2 id="tocS_Emoji">Emoji</h2>
<!-- backwards compatibility -->
<a id="schemaemoji"></a>
<a id="schema_Emoji"></a>
<a id="tocSemoji"></a>
<a id="tocsemoji"></a>

```json
{
  "index": 0,
  "productId": "string",
  "emojiId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer(int32)|false|none|none|
|productId|string|false|none|none|
|emojiId|string|false|none|none|

<h2 id="tocS_TextMessageV2">TextMessageV2</h2>
<!-- backwards compatibility -->
<a id="schematextmessagev2"></a>
<a id="schema_TextMessageV2"></a>
<a id="tocStextmessagev2"></a>
<a id="tocstextmessagev2"></a>

```json
{
  "type": "string",
  "quickReply": {
    "items": [
      {
        "imageUrl": "http://example.com",
        "action": {
          "type": "string",
          "label": "string"
        },
        "type": "action"
      }
    ]
  },
  "sender": {
    "name": "string",
    "iconUrl": "http://example.com"
  },
  "text": "string",
  "substitution": {
    "property1": {
      "type": "string"
    },
    "property2": {
      "type": "string"
    }
  },
  "quoteToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of message|
|quickReply|[QuickReply](#schemaquickreply)|false|none|Quick reply|
|sender|[Sender](#schemasender)|false|none|Change icon and display name|
|text|string|true|none|none|
|substitution|object|false|none|A mapping that specifies substitutions for parts enclosed in {} within the `text` field.|
|quoteToken|string|false|none|Quote token of the message you want to quote.|

<h2 id="tocS_SubstitutionObject">SubstitutionObject</h2>
<!-- backwards compatibility -->
<a id="schemasubstitutionobject"></a>
<a id="schema_SubstitutionObject"></a>
<a id="tocSsubstitutionobject"></a>
<a id="tocssubstitutionobject"></a>

```json
{
  "type": "string"
}
```

An object that defines the replacement value for a placeholder in the text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of substitution object|

<h2 id="tocS_MentionSubstitutionObject">MentionSubstitutionObject</h2>
<!-- backwards compatibility -->
<a id="schemamentionsubstitutionobject"></a>
<a id="schema_MentionSubstitutionObject"></a>
<a id="tocSmentionsubstitutionobject"></a>
<a id="tocsmentionsubstitutionobject"></a>

```json
{
  "type": "string",
  "mentionee": {
    "type": "string"
  }
}
```

An object representing a mention substitution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of substitution object|
|mentionee|[MentionTarget](#schemamentiontarget)|true|none|none|

<h2 id="tocS_MentionTarget">MentionTarget</h2>
<!-- backwards compatibility -->
<a id="schemamentiontarget"></a>
<a id="schema_MentionTarget"></a>
<a id="tocSmentiontarget"></a>
<a id="tocsmentiontarget"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Target to be mentioned|

<h2 id="tocS_UserMentionTarget">UserMentionTarget</h2>
<!-- backwards compatibility -->
<a id="schemausermentiontarget"></a>
<a id="schema_UserMentionTarget"></a>
<a id="tocSusermentiontarget"></a>
<a id="tocsusermentiontarget"></a>

```json
{
  "type": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Target to be mentioned|
|userId|string|true|none|none|

<h2 id="tocS_AllMentionTarget">AllMentionTarget</h2>
<!-- backwards compatibility -->
<a id="schemaallmentiontarget"></a>
<a id="schema_AllMentionTarget"></a>
<a id="tocSallmentiontarget"></a>
<a id="tocsallmentiontarget"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Target to be mentioned|

<h2 id="tocS_EmojiSubstitutionObject">EmojiSubstitutionObject</h2>
<!-- backwards compatibility -->
<a id="schemaemojisubstitutionobject"></a>
<a id="schema_EmojiSubstitutionObject"></a>
<a id="tocSemojisubstitutionobject"></a>
<a id="tocsemojisubstitutionobject"></a>

```json
{
  "type": "string",
  "productId": "string",
  "emojiId": "string"
}
```

An object representing a emoji substitution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of substitution object|
|productId|string|true|none|none|
|emojiId|string|true|none|none|

<h2 id="tocS_StickerMessage">StickerMessage</h2>
<!-- backwards compatibility -->
<a id="schemastickermessage"></a>
<a id="schema_StickerMessage"></a>
<a id="tocSstickermessage"></a>
<a id="tocsstickermessage"></a>

```json
{
  "type": "string",
  "quickReply": {
    "items": [
      {
        "imageUrl": "http://example.com",
        "action": {
          "type": "string",
          "label": "string"
        },
        "type": "action"
      }
    ]
  },
  "sender": {
    "name": "string",
    "iconUrl": "http://example.com"
  },
  "packageId": "string",
  "stickerId": "string",
  "quoteToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of message|
|quickReply|[QuickReply](#schemaquickreply)|false|none|Quick reply|
|sender|[Sender](#schemasender)|false|none|Change icon and display name|
|packageId|string|true|none|none|
|stickerId|string|true|none|none|
|quoteToken|string|false|none|Quote token of the message you want to quote.|

<h2 id="tocS_ImageMessage">ImageMessage</h2>
<!-- backwards compatibility -->
<a id="schemaimagemessage"></a>
<a id="schema_ImageMessage"></a>
<a id="tocSimagemessage"></a>
<a id="tocsimagemessage"></a>

```json
{
  "type": "string",
  "quickReply": {
    "items": [
      {
        "imageUrl": "http://example.com",
        "action": {
          "type": "string",
          "label": "string"
        },
        "type": "action"
      }
    ]
  },
  "sender": {
    "name": "string",
    "iconUrl": "http://example.com"
  },
  "originalContentUrl": "http://example.com",
  "previewImageUrl": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of message|
|quickReply|[QuickReply](#schemaquickreply)|false|none|Quick reply|
|sender|[Sender](#schemasender)|false|none|Change icon and display name|
|originalContentUrl|string(uri)|true|none|none|
|previewImageUrl|string(uri)|true|none|none|

<h2 id="tocS_VideoMessage">VideoMessage</h2>
<!-- backwards compatibility -->
<a id="schemavideomessage"></a>
<a id="schema_VideoMessage"></a>
<a id="tocSvideomessage"></a>
<a id="tocsvideomessage"></a>

```json
{
  "type": "string",
  "quickReply": {
    "items": [
      {
        "imageUrl": "http://example.com",
        "action": {
          "type": "string",
          "label": "string"
        },
        "type": "action"
      }
    ]
  },
  "sender": {
    "name": "string",
    "iconUrl": "http://example.com"
  },
  "originalContentUrl": "http://example.com",
  "previewImageUrl": "http://example.com",
  "trackingId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of message|
|quickReply|[QuickReply](#schemaquickreply)|false|none|Quick reply|
|sender|[Sender](#schemasender)|false|none|Change icon and display name|
|originalContentUrl|string(uri)|true|none|none|
|previewImageUrl|string(uri)|true|none|none|
|trackingId|string|false|none|none|

<h2 id="tocS_AudioMessage">AudioMessage</h2>
<!-- backwards compatibility -->
<a id="schemaaudiomessage"></a>
<a id="schema_AudioMessage"></a>
<a id="tocSaudiomessage"></a>
<a id="tocsaudiomessage"></a>

```json
{
  "type": "string",
  "quickReply": {
    "items": [
      {
        "imageUrl": "http://example.com",
        "action": {
          "type": "string",
          "label": "string"
        },
        "type": "action"
      }
    ]
  },
  "sender": {
    "name": "string",
    "iconUrl": "http://example.com"
  },
  "originalContentUrl": "http://example.com",
  "duration": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of message|
|quickReply|[QuickReply](#schemaquickreply)|false|none|Quick reply|
|sender|[Sender](#schemasender)|false|none|Change icon and display name|
|originalContentUrl|string(uri)|true|none|none|
|duration|integer(int64)|true|none|none|

<h2 id="tocS_LocationMessage">LocationMessage</h2>
<!-- backwards compatibility -->
<a id="schemalocationmessage"></a>
<a id="schema_LocationMessage"></a>
<a id="tocSlocationmessage"></a>
<a id="tocslocationmessage"></a>

```json
{
  "type": "string",
  "quickReply": {
    "items": [
      {
        "imageUrl": "http://example.com",
        "action": {
          "type": "string",
          "label": "string"
        },
        "type": "action"
      }
    ]
  },
  "sender": {
    "name": "string",
    "iconUrl": "http://example.com"
  },
  "title": "string",
  "address": "string",
  "latitude": 0,
  "longitude": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of message|
|quickReply|[QuickReply](#schemaquickreply)|false|none|Quick reply|
|sender|[Sender](#schemasender)|false|none|Change icon and display name|
|title|string|true|none|none|
|address|string|true|none|none|
|latitude|number(double)|true|none|none|
|longitude|number(double)|true|none|none|

<h2 id="tocS_ImagemapMessage">ImagemapMessage</h2>
<!-- backwards compatibility -->
<a id="schemaimagemapmessage"></a>
<a id="schema_ImagemapMessage"></a>
<a id="tocSimagemapmessage"></a>
<a id="tocsimagemapmessage"></a>

```json
{
  "type": "string",
  "quickReply": {
    "items": [
      {
        "imageUrl": "http://example.com",
        "action": {
          "type": "string",
          "label": "string"
        },
        "type": "action"
      }
    ]
  },
  "sender": {
    "name": "string",
    "iconUrl": "http://example.com"
  },
  "baseUrl": "http://example.com",
  "altText": "string",
  "baseSize": {
    "height": 0,
    "width": 0
  },
  "actions": [
    {
      "type": "string",
      "area": {
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0
      }
    }
  ],
  "video": {
    "originalContentUrl": "http://example.com",
    "previewImageUrl": "http://example.com",
    "area": {
      "x": 0,
      "y": 0,
      "width": 0,
      "height": 0
    },
    "externalLink": {
      "linkUri": "http://example.com",
      "label": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of message|
|quickReply|[QuickReply](#schemaquickreply)|false|none|Quick reply|
|sender|[Sender](#schemasender)|false|none|Change icon and display name|
|baseUrl|string(uri)|true|none|none|
|altText|string|true|none|none|
|baseSize|[ImagemapBaseSize](#schemaimagemapbasesize)|true|none|none|
|actions|[[ImagemapAction](#schemaimagemapaction)]|true|none|none|
|video|[ImagemapVideo](#schemaimagemapvideo)|false|none|none|

<h2 id="tocS_ImagemapBaseSize">ImagemapBaseSize</h2>
<!-- backwards compatibility -->
<a id="schemaimagemapbasesize"></a>
<a id="schema_ImagemapBaseSize"></a>
<a id="tocSimagemapbasesize"></a>
<a id="tocsimagemapbasesize"></a>

```json
{
  "height": 0,
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|true|none|none|
|width|integer(int32)|true|none|none|

<h2 id="tocS_ImagemapAction">ImagemapAction</h2>
<!-- backwards compatibility -->
<a id="schemaimagemapaction"></a>
<a id="schema_ImagemapAction"></a>
<a id="tocSimagemapaction"></a>
<a id="tocsimagemapaction"></a>

```json
{
  "type": "string",
  "area": {
    "x": 0,
    "y": 0,
    "width": 0,
    "height": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|area|[ImagemapArea](#schemaimagemaparea)|true|none|none|

<h2 id="tocS_MessageImagemapAction">MessageImagemapAction</h2>
<!-- backwards compatibility -->
<a id="schemamessageimagemapaction"></a>
<a id="schema_MessageImagemapAction"></a>
<a id="tocSmessageimagemapaction"></a>
<a id="tocsmessageimagemapaction"></a>

```json
{
  "type": "string",
  "area": {
    "x": 0,
    "y": 0,
    "width": 0,
    "height": 0
  },
  "text": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|area|[ImagemapArea](#schemaimagemaparea)|true|none|none|
|text|string|true|none|none|
|label|string|false|none|none|

<h2 id="tocS_URIImagemapAction">URIImagemapAction</h2>
<!-- backwards compatibility -->
<a id="schemauriimagemapaction"></a>
<a id="schema_URIImagemapAction"></a>
<a id="tocSuriimagemapaction"></a>
<a id="tocsuriimagemapaction"></a>

```json
{
  "type": "string",
  "area": {
    "x": 0,
    "y": 0,
    "width": 0,
    "height": 0
  },
  "linkUri": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|area|[ImagemapArea](#schemaimagemaparea)|true|none|none|
|linkUri|string|true|none|none|
|label|string|false|none|none|

<h2 id="tocS_ClipboardImagemapAction">ClipboardImagemapAction</h2>
<!-- backwards compatibility -->
<a id="schemaclipboardimagemapaction"></a>
<a id="schema_ClipboardImagemapAction"></a>
<a id="tocSclipboardimagemapaction"></a>
<a id="tocsclipboardimagemapaction"></a>

```json
{
  "type": "string",
  "area": {
    "x": 0,
    "y": 0,
    "width": 0,
    "height": 0
  },
  "clipboardText": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|area|[ImagemapArea](#schemaimagemaparea)|true|none|none|
|clipboardText|string|true|none|Text that is copied to the clipboard.<br>Max character limit: 1000<br>|
|label|string|false|none|none|

<h2 id="tocS_ImagemapArea">ImagemapArea</h2>
<!-- backwards compatibility -->
<a id="schemaimagemaparea"></a>
<a id="schema_ImagemapArea"></a>
<a id="tocSimagemaparea"></a>
<a id="tocsimagemaparea"></a>

```json
{
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|integer(int32)|true|none|none|
|y|integer(int32)|true|none|none|
|width|integer(int32)|true|none|none|
|height|integer(int32)|true|none|none|

<h2 id="tocS_ImagemapVideo">ImagemapVideo</h2>
<!-- backwards compatibility -->
<a id="schemaimagemapvideo"></a>
<a id="schema_ImagemapVideo"></a>
<a id="tocSimagemapvideo"></a>
<a id="tocsimagemapvideo"></a>

```json
{
  "originalContentUrl": "http://example.com",
  "previewImageUrl": "http://example.com",
  "area": {
    "x": 0,
    "y": 0,
    "width": 0,
    "height": 0
  },
  "externalLink": {
    "linkUri": "http://example.com",
    "label": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|originalContentUrl|string(uri)|false|none|none|
|previewImageUrl|string(uri)|false|none|none|
|area|[ImagemapArea](#schemaimagemaparea)|false|none|none|
|externalLink|[ImagemapExternalLink](#schemaimagemapexternallink)|false|none|none|

<h2 id="tocS_ImagemapExternalLink">ImagemapExternalLink</h2>
<!-- backwards compatibility -->
<a id="schemaimagemapexternallink"></a>
<a id="schema_ImagemapExternalLink"></a>
<a id="tocSimagemapexternallink"></a>
<a id="tocsimagemapexternallink"></a>

```json
{
  "linkUri": "http://example.com",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linkUri|string(uri)|false|none|none|
|label|string|false|none|none|

<h2 id="tocS_TemplateMessage">TemplateMessage</h2>
<!-- backwards compatibility -->
<a id="schematemplatemessage"></a>
<a id="schema_TemplateMessage"></a>
<a id="tocStemplatemessage"></a>
<a id="tocstemplatemessage"></a>

```json
{
  "type": "string",
  "quickReply": {
    "items": [
      {
        "imageUrl": "http://example.com",
        "action": {
          "type": "string",
          "label": "string"
        },
        "type": "action"
      }
    ]
  },
  "sender": {
    "name": "string",
    "iconUrl": "http://example.com"
  },
  "altText": "string",
  "template": {
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of message|
|quickReply|[QuickReply](#schemaquickreply)|false|none|Quick reply|
|sender|[Sender](#schemasender)|false|none|Change icon and display name|
|altText|string|true|none|none|
|template|[Template](#schematemplate)|true|none|none|

<h2 id="tocS_Template">Template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_Template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_ButtonsTemplate">ButtonsTemplate</h2>
<!-- backwards compatibility -->
<a id="schemabuttonstemplate"></a>
<a id="schema_ButtonsTemplate"></a>
<a id="tocSbuttonstemplate"></a>
<a id="tocsbuttonstemplate"></a>

```json
{
  "type": "string",
  "thumbnailImageUrl": "http://example.com",
  "imageAspectRatio": "string",
  "imageSize": "string",
  "imageBackgroundColor": "string",
  "title": "string",
  "text": "string",
  "defaultAction": {
    "type": "string",
    "label": "string"
  },
  "actions": [
    {
      "type": "string",
      "label": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|thumbnailImageUrl|string(uri)|false|none|none|
|imageAspectRatio|string|false|none|none|
|imageSize|string|false|none|none|
|imageBackgroundColor|string|false|none|none|
|title|string|false|none|none|
|text|string|true|none|none|
|defaultAction|[Action](#schemaaction)|false|none|Action|
|actions|[[Action](#schemaaction)]|true|none|none|

<h2 id="tocS_TemplateImageAspectRatio">TemplateImageAspectRatio</h2>
<!-- backwards compatibility -->
<a id="schematemplateimageaspectratio"></a>
<a id="schema_TemplateImageAspectRatio"></a>
<a id="tocStemplateimageaspectratio"></a>
<a id="tocstemplateimageaspectratio"></a>

```json
"rectangle"
```

Aspect ratio of the image. This is only for the `imageAspectRatio` in ButtonsTemplate.
Specify one of the following values:

`rectangle`: 1.51:1
`square`: 1:1

<h2 id="tocS_TemplateImageSize">TemplateImageSize</h2>
<!-- backwards compatibility -->
<a id="schematemplateimagesize"></a>
<a id="schema_TemplateImageSize"></a>
<a id="tocStemplateimagesize"></a>
<a id="tocstemplateimagesize"></a>

```json
"cover"
```

Size of the image.  This is only for the `imageSize` in ButtonsTemplate.
Specify one of the following values:

`cover`: The image fills the entire image area. Parts of the image that do not fit in the area are not displayed.
`contain`: The entire image is displayed in the image area. A background is displayed in the unused areas to the left and right of vertical images and in the areas above and below horizontal images.

<h2 id="tocS_ConfirmTemplate">ConfirmTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmtemplate"></a>
<a id="schema_ConfirmTemplate"></a>
<a id="tocSconfirmtemplate"></a>
<a id="tocsconfirmtemplate"></a>

```json
{
  "type": "string",
  "text": "string",
  "actions": [
    {
      "type": "string",
      "label": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|text|string|true|none|none|
|actions|[[Action](#schemaaction)]|true|none|none|

<h2 id="tocS_CarouselTemplate">CarouselTemplate</h2>
<!-- backwards compatibility -->
<a id="schemacarouseltemplate"></a>
<a id="schema_CarouselTemplate"></a>
<a id="tocScarouseltemplate"></a>
<a id="tocscarouseltemplate"></a>

```json
{
  "type": "string",
  "columns": [
    {
      "thumbnailImageUrl": "http://example.com",
      "imageBackgroundColor": "string",
      "title": "string",
      "text": "string",
      "defaultAction": {
        "type": "string",
        "label": "string"
      },
      "actions": [
        {
          "type": "string",
          "label": "string"
        }
      ]
    }
  ],
  "imageAspectRatio": "string",
  "imageSize": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|columns|[[CarouselColumn](#schemacarouselcolumn)]|true|none|none|
|imageAspectRatio|string|false|none|none|
|imageSize|string|false|none|none|

<h2 id="tocS_CarouselColumn">CarouselColumn</h2>
<!-- backwards compatibility -->
<a id="schemacarouselcolumn"></a>
<a id="schema_CarouselColumn"></a>
<a id="tocScarouselcolumn"></a>
<a id="tocscarouselcolumn"></a>

```json
{
  "thumbnailImageUrl": "http://example.com",
  "imageBackgroundColor": "string",
  "title": "string",
  "text": "string",
  "defaultAction": {
    "type": "string",
    "label": "string"
  },
  "actions": [
    {
      "type": "string",
      "label": "string"
    }
  ]
}
```

Column object for carousel template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thumbnailImageUrl|string(uri)|false|none|none|
|imageBackgroundColor|string|false|none|none|
|title|string|false|none|none|
|text|string|true|none|none|
|defaultAction|[Action](#schemaaction)|false|none|Action|
|actions|[[Action](#schemaaction)]|true|none|none|

<h2 id="tocS_ImageCarouselTemplate">ImageCarouselTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaimagecarouseltemplate"></a>
<a id="schema_ImageCarouselTemplate"></a>
<a id="tocSimagecarouseltemplate"></a>
<a id="tocsimagecarouseltemplate"></a>

```json
{
  "type": "string",
  "columns": [
    {
      "imageUrl": "http://example.com",
      "action": {
        "type": "string",
        "label": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|columns|[[ImageCarouselColumn](#schemaimagecarouselcolumn)]|true|none|none|

<h2 id="tocS_ImageCarouselColumn">ImageCarouselColumn</h2>
<!-- backwards compatibility -->
<a id="schemaimagecarouselcolumn"></a>
<a id="schema_ImageCarouselColumn"></a>
<a id="tocSimagecarouselcolumn"></a>
<a id="tocsimagecarouselcolumn"></a>

```json
{
  "imageUrl": "http://example.com",
  "action": {
    "type": "string",
    "label": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageUrl|string(uri)|true|none|none|
|action|[Action](#schemaaction)|true|none|Action|

<h2 id="tocS_CouponMessage">CouponMessage</h2>
<!-- backwards compatibility -->
<a id="schemacouponmessage"></a>
<a id="schema_CouponMessage"></a>
<a id="tocScouponmessage"></a>
<a id="tocscouponmessage"></a>

```json
{
  "type": "string",
  "quickReply": {
    "items": [
      {
        "imageUrl": "http://example.com",
        "action": {
          "type": "string",
          "label": "string"
        },
        "type": "action"
      }
    ]
  },
  "sender": {
    "name": "string",
    "iconUrl": "http://example.com"
  },
  "couponId": "string",
  "deliveryTag": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of message|
|quickReply|[QuickReply](#schemaquickreply)|false|none|Quick reply|
|sender|[Sender](#schemasender)|false|none|Change icon and display name|
|couponId|string|true|none|Unique identifier of the coupon.|
|deliveryTag|string|false|none|Delivery route tag information. It can be used for analysis in LINE OA Manager.|

<h2 id="tocS_FlexMessage">FlexMessage</h2>
<!-- backwards compatibility -->
<a id="schemaflexmessage"></a>
<a id="schema_FlexMessage"></a>
<a id="tocSflexmessage"></a>
<a id="tocsflexmessage"></a>

```json
{
  "type": "string",
  "quickReply": {
    "items": [
      {
        "imageUrl": "http://example.com",
        "action": {
          "type": "string",
          "label": "string"
        },
        "type": "action"
      }
    ]
  },
  "sender": {
    "name": "string",
    "iconUrl": "http://example.com"
  },
  "altText": "string",
  "contents": {
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of message|
|quickReply|[QuickReply](#schemaquickreply)|false|none|Quick reply|
|sender|[Sender](#schemasender)|false|none|Change icon and display name|
|altText|string|true|none|none|
|contents|[FlexContainer](#schemaflexcontainer)|true|none|none|

<h2 id="tocS_FlexContainer">FlexContainer</h2>
<!-- backwards compatibility -->
<a id="schemaflexcontainer"></a>
<a id="schema_FlexContainer"></a>
<a id="tocSflexcontainer"></a>
<a id="tocsflexcontainer"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_FlexBubble">FlexBubble</h2>
<!-- backwards compatibility -->
<a id="schemaflexbubble"></a>
<a id="schema_FlexBubble"></a>
<a id="tocSflexbubble"></a>
<a id="tocsflexbubble"></a>

```json
{
  "type": "string",
  "direction": "ltr",
  "styles": {
    "header": {
      "backgroundColor": "string",
      "separator": true,
      "separatorColor": "string"
    },
    "hero": {
      "backgroundColor": "string",
      "separator": true,
      "separatorColor": "string"
    },
    "body": {
      "backgroundColor": "string",
      "separator": true,
      "separatorColor": "string"
    },
    "footer": {
      "backgroundColor": "string",
      "separator": true,
      "separatorColor": "string"
    }
  },
  "header": {
    "type": "string",
    "layout": "horizontal",
    "flex": 0,
    "contents": [
      {
        "type": "string"
      }
    ],
    "spacing": "string",
    "margin": "string",
    "position": "relative",
    "offsetTop": "string",
    "offsetBottom": "string",
    "offsetStart": "string",
    "offsetEnd": "string",
    "backgroundColor": "string",
    "borderColor": "string",
    "borderWidth": "string",
    "cornerRadius": "string",
    "width": "string",
    "maxWidth": "string",
    "height": "string",
    "maxHeight": "string",
    "paddingAll": "string",
    "paddingTop": "string",
    "paddingBottom": "string",
    "paddingStart": "string",
    "paddingEnd": "string",
    "action": {
      "type": "string",
      "label": "string"
    },
    "justifyContent": "center",
    "alignItems": "center",
    "background": {
      "type": "string"
    }
  },
  "hero": {
    "type": "string"
  },
  "body": {
    "type": "string",
    "layout": "horizontal",
    "flex": 0,
    "contents": [
      {
        "type": "string"
      }
    ],
    "spacing": "string",
    "margin": "string",
    "position": "relative",
    "offsetTop": "string",
    "offsetBottom": "string",
    "offsetStart": "string",
    "offsetEnd": "string",
    "backgroundColor": "string",
    "borderColor": "string",
    "borderWidth": "string",
    "cornerRadius": "string",
    "width": "string",
    "maxWidth": "string",
    "height": "string",
    "maxHeight": "string",
    "paddingAll": "string",
    "paddingTop": "string",
    "paddingBottom": "string",
    "paddingStart": "string",
    "paddingEnd": "string",
    "action": {
      "type": "string",
      "label": "string"
    },
    "justifyContent": "center",
    "alignItems": "center",
    "background": {
      "type": "string"
    }
  },
  "footer": {
    "type": "string",
    "layout": "horizontal",
    "flex": 0,
    "contents": [
      {
        "type": "string"
      }
    ],
    "spacing": "string",
    "margin": "string",
    "position": "relative",
    "offsetTop": "string",
    "offsetBottom": "string",
    "offsetStart": "string",
    "offsetEnd": "string",
    "backgroundColor": "string",
    "borderColor": "string",
    "borderWidth": "string",
    "cornerRadius": "string",
    "width": "string",
    "maxWidth": "string",
    "height": "string",
    "maxHeight": "string",
    "paddingAll": "string",
    "paddingTop": "string",
    "paddingBottom": "string",
    "paddingStart": "string",
    "paddingEnd": "string",
    "action": {
      "type": "string",
      "label": "string"
    },
    "justifyContent": "center",
    "alignItems": "center",
    "background": {
      "type": "string"
    }
  },
  "size": "nano",
  "action": {
    "type": "string",
    "label": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|direction|string|false|none|none|
|styles|[FlexBubbleStyles](#schemaflexbubblestyles)|false|none|none|
|header|[FlexBox](#schemaflexbox)|false|none|none|
|hero|[FlexComponent](#schemaflexcomponent)|false|none|none|
|body|[FlexBox](#schemaflexbox)|false|none|none|
|footer|[FlexBox](#schemaflexbox)|false|none|none|
|size|string|false|none|none|
|action|[Action](#schemaaction)|false|none|Action|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|ltr|
|direction|rtl|
|size|nano|
|size|micro|
|size|deca|
|size|hecto|
|size|kilo|
|size|mega|
|size|giga|

<h2 id="tocS_FlexCarousel">FlexCarousel</h2>
<!-- backwards compatibility -->
<a id="schemaflexcarousel"></a>
<a id="schema_FlexCarousel"></a>
<a id="tocSflexcarousel"></a>
<a id="tocsflexcarousel"></a>

```json
{
  "type": "string",
  "contents": [
    {
      "type": "string",
      "direction": "ltr",
      "styles": {
        "header": {
          "backgroundColor": "string",
          "separator": true,
          "separatorColor": "string"
        },
        "hero": {
          "backgroundColor": "string",
          "separator": true,
          "separatorColor": "string"
        },
        "body": {
          "backgroundColor": "string",
          "separator": true,
          "separatorColor": "string"
        },
        "footer": {
          "backgroundColor": "string",
          "separator": true,
          "separatorColor": "string"
        }
      },
      "header": {
        "type": "string",
        "layout": "horizontal",
        "flex": 0,
        "contents": [
          {
            "type": "string"
          }
        ],
        "spacing": "string",
        "margin": "string",
        "position": "relative",
        "offsetTop": "string",
        "offsetBottom": "string",
        "offsetStart": "string",
        "offsetEnd": "string",
        "backgroundColor": "string",
        "borderColor": "string",
        "borderWidth": "string",
        "cornerRadius": "string",
        "width": "string",
        "maxWidth": "string",
        "height": "string",
        "maxHeight": "string",
        "paddingAll": "string",
        "paddingTop": "string",
        "paddingBottom": "string",
        "paddingStart": "string",
        "paddingEnd": "string",
        "action": {
          "type": "string",
          "label": "string"
        },
        "justifyContent": "center",
        "alignItems": "center",
        "background": {
          "type": "string"
        }
      },
      "hero": {
        "type": "string"
      },
      "body": {
        "type": "string",
        "layout": "horizontal",
        "flex": 0,
        "contents": [
          {
            "type": "string"
          }
        ],
        "spacing": "string",
        "margin": "string",
        "position": "relative",
        "offsetTop": "string",
        "offsetBottom": "string",
        "offsetStart": "string",
        "offsetEnd": "string",
        "backgroundColor": "string",
        "borderColor": "string",
        "borderWidth": "string",
        "cornerRadius": "string",
        "width": "string",
        "maxWidth": "string",
        "height": "string",
        "maxHeight": "string",
        "paddingAll": "string",
        "paddingTop": "string",
        "paddingBottom": "string",
        "paddingStart": "string",
        "paddingEnd": "string",
        "action": {
          "type": "string",
          "label": "string"
        },
        "justifyContent": "center",
        "alignItems": "center",
        "background": {
          "type": "string"
        }
      },
      "footer": {
        "type": "string",
        "layout": "horizontal",
        "flex": 0,
        "contents": [
          {
            "type": "string"
          }
        ],
        "spacing": "string",
        "margin": "string",
        "position": "relative",
        "offsetTop": "string",
        "offsetBottom": "string",
        "offsetStart": "string",
        "offsetEnd": "string",
        "backgroundColor": "string",
        "borderColor": "string",
        "borderWidth": "string",
        "cornerRadius": "string",
        "width": "string",
        "maxWidth": "string",
        "height": "string",
        "maxHeight": "string",
        "paddingAll": "string",
        "paddingTop": "string",
        "paddingBottom": "string",
        "paddingStart": "string",
        "paddingEnd": "string",
        "action": {
          "type": "string",
          "label": "string"
        },
        "justifyContent": "center",
        "alignItems": "center",
        "background": {
          "type": "string"
        }
      },
      "size": "nano",
      "action": {
        "type": "string",
        "label": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|contents|[[FlexBubble](#schemaflexbubble)]|true|none|none|

<h2 id="tocS_FlexBubbleStyles">FlexBubbleStyles</h2>
<!-- backwards compatibility -->
<a id="schemaflexbubblestyles"></a>
<a id="schema_FlexBubbleStyles"></a>
<a id="tocSflexbubblestyles"></a>
<a id="tocsflexbubblestyles"></a>

```json
{
  "header": {
    "backgroundColor": "string",
    "separator": true,
    "separatorColor": "string"
  },
  "hero": {
    "backgroundColor": "string",
    "separator": true,
    "separatorColor": "string"
  },
  "body": {
    "backgroundColor": "string",
    "separator": true,
    "separatorColor": "string"
  },
  "footer": {
    "backgroundColor": "string",
    "separator": true,
    "separatorColor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|[FlexBlockStyle](#schemaflexblockstyle)|false|none|none|
|hero|[FlexBlockStyle](#schemaflexblockstyle)|false|none|none|
|body|[FlexBlockStyle](#schemaflexblockstyle)|false|none|none|
|footer|[FlexBlockStyle](#schemaflexblockstyle)|false|none|none|

<h2 id="tocS_FlexBlockStyle">FlexBlockStyle</h2>
<!-- backwards compatibility -->
<a id="schemaflexblockstyle"></a>
<a id="schema_FlexBlockStyle"></a>
<a id="tocSflexblockstyle"></a>
<a id="tocsflexblockstyle"></a>

```json
{
  "backgroundColor": "string",
  "separator": true,
  "separatorColor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundColor|string|false|none|none|
|separator|boolean|false|none|none|
|separatorColor|string|false|none|none|

<h2 id="tocS_FlexComponent">FlexComponent</h2>
<!-- backwards compatibility -->
<a id="schemaflexcomponent"></a>
<a id="schema_FlexComponent"></a>
<a id="tocSflexcomponent"></a>
<a id="tocsflexcomponent"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_FlexBox">FlexBox</h2>
<!-- backwards compatibility -->
<a id="schemaflexbox"></a>
<a id="schema_FlexBox"></a>
<a id="tocSflexbox"></a>
<a id="tocsflexbox"></a>

```json
{
  "type": "string",
  "layout": "horizontal",
  "flex": 0,
  "contents": [
    {
      "type": "string"
    }
  ],
  "spacing": "string",
  "margin": "string",
  "position": "relative",
  "offsetTop": "string",
  "offsetBottom": "string",
  "offsetStart": "string",
  "offsetEnd": "string",
  "backgroundColor": "string",
  "borderColor": "string",
  "borderWidth": "string",
  "cornerRadius": "string",
  "width": "string",
  "maxWidth": "string",
  "height": "string",
  "maxHeight": "string",
  "paddingAll": "string",
  "paddingTop": "string",
  "paddingBottom": "string",
  "paddingStart": "string",
  "paddingEnd": "string",
  "action": {
    "type": "string",
    "label": "string"
  },
  "justifyContent": "center",
  "alignItems": "center",
  "background": {
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|layout|string|true|none|none|
|flex|integer(int32)|false|none|none|
|contents|[[FlexComponent](#schemaflexcomponent)]|true|none|none|
|spacing|string|false|none|none|
|margin|string|false|none|none|
|position|string|false|none|none|
|offsetTop|string|false|none|none|
|offsetBottom|string|false|none|none|
|offsetStart|string|false|none|none|
|offsetEnd|string|false|none|none|
|backgroundColor|string|false|none|none|
|borderColor|string|false|none|none|
|borderWidth|string|false|none|none|
|cornerRadius|string|false|none|none|
|width|string|false|none|none|
|maxWidth|string|false|none|none|
|height|string|false|none|none|
|maxHeight|string|false|none|none|
|paddingAll|string|false|none|none|
|paddingTop|string|false|none|none|
|paddingBottom|string|false|none|none|
|paddingStart|string|false|none|none|
|paddingEnd|string|false|none|none|
|action|[Action](#schemaaction)|false|none|Action|
|justifyContent|string|false|none|none|
|alignItems|string|false|none|none|
|background|[FlexBoxBackground](#schemaflexboxbackground)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|layout|horizontal|
|layout|vertical|
|layout|baseline|
|position|relative|
|position|absolute|
|justifyContent|center|
|justifyContent|flex-start|
|justifyContent|flex-end|
|justifyContent|space-between|
|justifyContent|space-around|
|justifyContent|space-evenly|
|alignItems|center|
|alignItems|flex-start|
|alignItems|flex-end|

<h2 id="tocS_FlexBoxBorderWidth">FlexBoxBorderWidth</h2>
<!-- backwards compatibility -->
<a id="schemaflexboxborderwidth"></a>
<a id="schema_FlexBoxBorderWidth"></a>
<a id="tocSflexboxborderwidth"></a>
<a id="tocsflexboxborderwidth"></a>

```json
"none"
```

Width of box border. This is only for `borderWidth` in FlexBox.
A value of none means that borders are not rendered; the other values are listed in order of increasing width.

<h2 id="tocS_FlexBoxCornerRadius">FlexBoxCornerRadius</h2>
<!-- backwards compatibility -->
<a id="schemaflexboxcornerradius"></a>
<a id="schema_FlexBoxCornerRadius"></a>
<a id="tocSflexboxcornerradius"></a>
<a id="tocsflexboxcornerradius"></a>

```json
"none"
```

Radius at the time of rounding the corners of the box. This is only for `cornerRadius` in FlexBox.
A value of none means that corners are not rounded; the other values are listed in order of increasing radius.

<h2 id="tocS_FlexBoxSpacing">FlexBoxSpacing</h2>
<!-- backwards compatibility -->
<a id="schemaflexboxspacing"></a>
<a id="schema_FlexBoxSpacing"></a>
<a id="tocSflexboxspacing"></a>
<a id="tocsflexboxspacing"></a>

```json
"none"
```

You can specify the minimum space between two components with the `spacing` property of the parent box component, in pixels or with a keyword.
FlexBoxSpacing just provides only keywords.

<h2 id="tocS_FlexMargin">FlexMargin</h2>
<!-- backwards compatibility -->
<a id="schemaflexmargin"></a>
<a id="schema_FlexMargin"></a>
<a id="tocSflexmargin"></a>
<a id="tocsflexmargin"></a>

```json
"none"
```

You can specify the minimum space before a child component with the `margin` property of the child component, in pixels or with a keyword.
FlexMargin just provides only keywords.

<h2 id="tocS_FlexBoxPadding">FlexBoxPadding</h2>
<!-- backwards compatibility -->
<a id="schemaflexboxpadding"></a>
<a id="schema_FlexBoxPadding"></a>
<a id="tocSflexboxpadding"></a>
<a id="tocsflexboxpadding"></a>

```json
"none"
```

Padding can be specified in pixels, percentage (to the parent box width) or with a keyword.
FlexBoxPadding just provides only keywords.

<h2 id="tocS_FlexImageSize">FlexImageSize</h2>
<!-- backwards compatibility -->
<a id="schemafleximagesize"></a>
<a id="schema_FlexImageSize"></a>
<a id="tocSfleximagesize"></a>
<a id="tocsfleximagesize"></a>

```json
"xxs"
```

You can set the width of an Flex image component with the `size` property, in pixels, as a percentage, or with a keyword.
FlexImageSize just provides only keywords.

<h2 id="tocS_FlexIconSize">FlexIconSize</h2>
<!-- backwards compatibility -->
<a id="schemaflexiconsize"></a>
<a id="schema_FlexIconSize"></a>
<a id="tocSflexiconsize"></a>
<a id="tocsflexiconsize"></a>

```json
"xxs"
```

You can set the width of an Flex icon component with the `size` property, in pixels, as a percentage, or with a keyword.
FlexIconSize just provides only keywords.

<h2 id="tocS_FlexTextFontSize">FlexTextFontSize</h2>
<!-- backwards compatibility -->
<a id="schemaflextextfontsize"></a>
<a id="schema_FlexTextFontSize"></a>
<a id="tocSflextextfontsize"></a>
<a id="tocsflextextfontsize"></a>

```json
"xxs"
```

Font size in the `size` property of the Flex text component.
You can specify the size in pixels or with a keyword.
FlexTextFontSize just provides only keywords.

<h2 id="tocS_FlexSpanSize">FlexSpanSize</h2>
<!-- backwards compatibility -->
<a id="schemaflexspansize"></a>
<a id="schema_FlexSpanSize"></a>
<a id="tocSflexspansize"></a>
<a id="tocsflexspansize"></a>

```json
"xxs"
```

Font size in the `size` property of the Flex span component.
You can specify the size in pixels or with a keyword.
FlexSpanSize just provides only keywords.

<h2 id="tocS_FlexOffset">FlexOffset</h2>
<!-- backwards compatibility -->
<a id="schemaflexoffset"></a>
<a id="schema_FlexOffset"></a>
<a id="tocSflexoffset"></a>
<a id="tocsflexoffset"></a>

```json
"none"
```

You can specify the offset of a component with the `offset*` property, in pixels or with a keyword.
You can also specify the percentage to the box width for `offsetStart` and `offsetEnd` and to the box height for `offsetTop` and `offsetBottom`.
FlexOffset just provides only keywords.

<h2 id="tocS_FlexButton">FlexButton</h2>
<!-- backwards compatibility -->
<a id="schemaflexbutton"></a>
<a id="schema_FlexButton"></a>
<a id="tocSflexbutton"></a>
<a id="tocsflexbutton"></a>

```json
{
  "type": "string",
  "flex": 0,
  "color": "string",
  "style": "primary",
  "action": {
    "type": "string",
    "label": "string"
  },
  "gravity": "top",
  "margin": "string",
  "position": "relative",
  "offsetTop": "string",
  "offsetBottom": "string",
  "offsetStart": "string",
  "offsetEnd": "string",
  "height": "md",
  "adjustMode": "shrink-to-fit",
  "scaling": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|flex|integer(int32)|false|none|none|
|color|string|false|none|none|
|style|string|false|none|none|
|action|[Action](#schemaaction)|true|none|Action|
|gravity|string|false|none|none|
|margin|string|false|none|none|
|position|string|false|none|none|
|offsetTop|string|false|none|none|
|offsetBottom|string|false|none|none|
|offsetStart|string|false|none|none|
|offsetEnd|string|false|none|none|
|height|string|false|none|none|
|adjustMode|string|false|none|none|
|scaling|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|style|primary|
|style|secondary|
|style|link|
|gravity|top|
|gravity|bottom|
|gravity|center|
|position|relative|
|position|absolute|
|height|md|
|height|sm|
|adjustMode|shrink-to-fit|

<h2 id="tocS_FlexImage">FlexImage</h2>
<!-- backwards compatibility -->
<a id="schemafleximage"></a>
<a id="schema_FlexImage"></a>
<a id="tocSfleximage"></a>
<a id="tocsfleximage"></a>

```json
{
  "type": "string",
  "url": "http://example.com",
  "flex": 0,
  "margin": "string",
  "position": "relative",
  "offsetTop": "string",
  "offsetBottom": "string",
  "offsetStart": "string",
  "offsetEnd": "string",
  "align": "start",
  "gravity": "top",
  "size": "md",
  "aspectRatio": "string",
  "aspectMode": "fit",
  "backgroundColor": "string",
  "action": {
    "type": "string",
    "label": "string"
  },
  "animated": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|url|string(uri)|true|none|Image URL (Max character limit: 2000)<br>Protocol: HTTPS (TLS 1.2 or later)<br>Image format: JPEG or PNG<br>Maximum image size: 1024×1024 pixels<br>Maximum file size: 10 MB (300 KB when the animated property is true)<br>|
|flex|integer(int32)|false|none|The ratio of the width or height of this component within the parent box.|
|margin|string|false|none|The minimum amount of space to include before this component in its parent container.<br>|
|position|string|false|none|Reference for offsetTop, offsetBottom, offsetStart, and offsetEnd. Specify one of the following values:<br><br>`relative`: Use the previous box as reference.<br>`absolute`: Use the top left of parent element as reference. The default value is relative.<br>|
|offsetTop|string|false|none|Offset.|
|offsetBottom|string|false|none|Offset.|
|offsetStart|string|false|none|Offset.|
|offsetEnd|string|false|none|Offset.|
|align|string|false|none|Alignment style in horizontal direction.<br>|
|gravity|string|false|none|Alignment style in vertical direction.|
|size|string|false|none|The maximum image width. This is md by default.<br>|
|aspectRatio|string|false|none|Aspect ratio of the image.<br>`{width}:{height}` format.<br>Specify the value of `{width}` and `{height}` in the range from `1` to `100000`.<br>However, you cannot set `{height}` to a value that is more than three times the value of `{width}`.<br>The default value is `1:1`.<br>|
|aspectMode|string|false|none|The display style of the image if the aspect ratio of the image and that specified by the aspectRatio property do not match.<br>|
|backgroundColor|string|false|none|Background color of the image. Use a hexadecimal color code.|
|action|[Action](#schemaaction)|false|none|Action|
|animated|boolean|false|none|When this is `true`, an animated image (APNG) plays.<br>You can specify a value of true up to 10 images in a single message.<br>You can't send messages that exceed this limit.<br>This is `false` by default.<br>Animated images larger than 300 KB aren't played back.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|position|relative|
|position|absolute|
|align|start|
|align|end|
|align|center|
|gravity|top|
|gravity|bottom|
|gravity|center|
|aspectMode|fit|
|aspectMode|cover|

<h2 id="tocS_FlexVideo">FlexVideo</h2>
<!-- backwards compatibility -->
<a id="schemaflexvideo"></a>
<a id="schema_FlexVideo"></a>
<a id="tocSflexvideo"></a>
<a id="tocsflexvideo"></a>

```json
{
  "type": "string",
  "url": "http://example.com",
  "previewUrl": "http://example.com",
  "altContent": {
    "type": "string"
  },
  "aspectRatio": "string",
  "action": {
    "type": "string",
    "label": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|url|string(uri)|true|none|none|
|previewUrl|string(uri)|true|none|none|
|altContent|[FlexComponent](#schemaflexcomponent)|true|none|none|
|aspectRatio|string|false|none|none|
|action|[Action](#schemaaction)|false|none|Action|

<h2 id="tocS_FlexIcon">FlexIcon</h2>
<!-- backwards compatibility -->
<a id="schemaflexicon"></a>
<a id="schema_FlexIcon"></a>
<a id="tocSflexicon"></a>
<a id="tocsflexicon"></a>

```json
{
  "type": "string",
  "url": "http://example.com",
  "size": "string",
  "aspectRatio": "string",
  "margin": "string",
  "position": "relative",
  "offsetTop": "string",
  "offsetBottom": "string",
  "offsetStart": "string",
  "offsetEnd": "string",
  "scaling": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|url|string(uri)|true|none|none|
|size|string|false|none|none|
|aspectRatio|string|false|none|none|
|margin|string|false|none|none|
|position|string|false|none|none|
|offsetTop|string|false|none|none|
|offsetBottom|string|false|none|none|
|offsetStart|string|false|none|none|
|offsetEnd|string|false|none|none|
|scaling|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|position|relative|
|position|absolute|

<h2 id="tocS_FlexText">FlexText</h2>
<!-- backwards compatibility -->
<a id="schemaflextext"></a>
<a id="schema_FlexText"></a>
<a id="tocSflextext"></a>
<a id="tocsflextext"></a>

```json
{
  "type": "string",
  "flex": 0,
  "text": "string",
  "size": "string",
  "align": "start",
  "gravity": "top",
  "color": "string",
  "weight": "regular",
  "style": "normal",
  "decoration": "none",
  "wrap": true,
  "lineSpacing": "string",
  "margin": "string",
  "position": "relative",
  "offsetTop": "string",
  "offsetBottom": "string",
  "offsetStart": "string",
  "offsetEnd": "string",
  "action": {
    "type": "string",
    "label": "string"
  },
  "maxLines": 0,
  "contents": [
    {
      "type": "string",
      "text": "string",
      "size": "string",
      "color": "string",
      "weight": "regular",
      "style": "normal",
      "decoration": "none"
    }
  ],
  "adjustMode": "shrink-to-fit",
  "scaling": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|flex|integer(int32)|false|none|none|
|text|string|false|none|none|
|size|string|false|none|none|
|align|string|false|none|none|
|gravity|string|false|none|none|
|color|string|false|none|none|
|weight|string|false|none|none|
|style|string|false|none|none|
|decoration|string|false|none|none|
|wrap|boolean|false|none|none|
|lineSpacing|string|false|none|none|
|margin|string|false|none|none|
|position|string|false|none|none|
|offsetTop|string|false|none|none|
|offsetBottom|string|false|none|none|
|offsetStart|string|false|none|none|
|offsetEnd|string|false|none|none|
|action|[Action](#schemaaction)|false|none|Action|
|maxLines|integer(int32)|false|none|none|
|contents|[[FlexSpan](#schemaflexspan)]|false|none|none|
|adjustMode|string|false|none|none|
|scaling|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|align|start|
|align|end|
|align|center|
|gravity|top|
|gravity|bottom|
|gravity|center|
|weight|regular|
|weight|bold|
|style|normal|
|style|italic|
|decoration|none|
|decoration|underline|
|decoration|line-through|
|position|relative|
|position|absolute|
|adjustMode|shrink-to-fit|

<h2 id="tocS_FlexSpan">FlexSpan</h2>
<!-- backwards compatibility -->
<a id="schemaflexspan"></a>
<a id="schema_FlexSpan"></a>
<a id="tocSflexspan"></a>
<a id="tocsflexspan"></a>

```json
{
  "type": "string",
  "text": "string",
  "size": "string",
  "color": "string",
  "weight": "regular",
  "style": "normal",
  "decoration": "none"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|text|string|false|none|none|
|size|string|false|none|none|
|color|string|false|none|none|
|weight|string|false|none|none|
|style|string|false|none|none|
|decoration|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|weight|regular|
|weight|bold|
|style|normal|
|style|italic|
|decoration|none|
|decoration|underline|
|decoration|line-through|

<h2 id="tocS_FlexSeparator">FlexSeparator</h2>
<!-- backwards compatibility -->
<a id="schemaflexseparator"></a>
<a id="schema_FlexSeparator"></a>
<a id="tocSflexseparator"></a>
<a id="tocsflexseparator"></a>

```json
{
  "type": "string",
  "margin": "string",
  "color": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|margin|string|false|none|none|
|color|string|false|none|none|

<h2 id="tocS_FlexFiller">FlexFiller</h2>
<!-- backwards compatibility -->
<a id="schemaflexfiller"></a>
<a id="schema_FlexFiller"></a>
<a id="tocSflexfiller"></a>
<a id="tocsflexfiller"></a>

```json
{
  "type": "string",
  "flex": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|flex|integer(int32)|false|none|none|

<h2 id="tocS_FlexBoxBackground">FlexBoxBackground</h2>
<!-- backwards compatibility -->
<a id="schemaflexboxbackground"></a>
<a id="schema_FlexBoxBackground"></a>
<a id="tocSflexboxbackground"></a>
<a id="tocsflexboxbackground"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_FlexBoxLinearGradient">FlexBoxLinearGradient</h2>
<!-- backwards compatibility -->
<a id="schemaflexboxlineargradient"></a>
<a id="schema_FlexBoxLinearGradient"></a>
<a id="tocSflexboxlineargradient"></a>
<a id="tocsflexboxlineargradient"></a>

```json
{
  "type": "string",
  "angle": "string",
  "startColor": "string",
  "endColor": "string",
  "centerColor": "string",
  "centerPosition": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|angle|string|false|none|none|
|startColor|string|false|none|none|
|endColor|string|false|none|none|
|centerColor|string|false|none|none|
|centerPosition|string|false|none|none|

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "type": "string",
  "label": "string"
}
```

Action

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of action|
|label|string|false|none|Label for the action.|

<h2 id="tocS_CameraAction">CameraAction</h2>
<!-- backwards compatibility -->
<a id="schemacameraaction"></a>
<a id="schema_CameraAction"></a>
<a id="tocScameraaction"></a>
<a id="tocscameraaction"></a>

```json
{
  "type": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of action|
|label|string|false|none|Label for the action.|

<h2 id="tocS_CameraRollAction">CameraRollAction</h2>
<!-- backwards compatibility -->
<a id="schemacamerarollaction"></a>
<a id="schema_CameraRollAction"></a>
<a id="tocScamerarollaction"></a>
<a id="tocscamerarollaction"></a>

```json
{
  "type": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of action|
|label|string|false|none|Label for the action.|

<h2 id="tocS_ClipboardAction">ClipboardAction</h2>
<!-- backwards compatibility -->
<a id="schemaclipboardaction"></a>
<a id="schema_ClipboardAction"></a>
<a id="tocSclipboardaction"></a>
<a id="tocsclipboardaction"></a>

```json
{
  "type": "string",
  "label": "string",
  "clipboardText": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of action|
|label|string|false|none|Label for the action.|
|clipboardText|string|true|none|Text that is copied to the clipboard.<br>Max character limit: 1000<br>|

<h2 id="tocS_DatetimePickerAction">DatetimePickerAction</h2>
<!-- backwards compatibility -->
<a id="schemadatetimepickeraction"></a>
<a id="schema_DatetimePickerAction"></a>
<a id="tocSdatetimepickeraction"></a>
<a id="tocsdatetimepickeraction"></a>

```json
{
  "type": "string",
  "label": "string",
  "data": "string",
  "mode": "date",
  "initial": "string",
  "max": "string",
  "min": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of action|
|label|string|false|none|Label for the action.|
|data|string|false|none|none|
|mode|string|false|none|none|
|initial|string|false|none|none|
|max|string|false|none|none|
|min|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|date|
|mode|time|
|mode|datetime|

<h2 id="tocS_LocationAction">LocationAction</h2>
<!-- backwards compatibility -->
<a id="schemalocationaction"></a>
<a id="schema_LocationAction"></a>
<a id="tocSlocationaction"></a>
<a id="tocslocationaction"></a>

```json
{
  "type": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of action|
|label|string|false|none|Label for the action.|

<h2 id="tocS_MessageAction">MessageAction</h2>
<!-- backwards compatibility -->
<a id="schemamessageaction"></a>
<a id="schema_MessageAction"></a>
<a id="tocSmessageaction"></a>
<a id="tocsmessageaction"></a>

```json
{
  "type": "string",
  "label": "string",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of action|
|label|string|false|none|Label for the action.|
|text|string|false|none|none|

<h2 id="tocS_PostbackAction">PostbackAction</h2>
<!-- backwards compatibility -->
<a id="schemapostbackaction"></a>
<a id="schema_PostbackAction"></a>
<a id="tocSpostbackaction"></a>
<a id="tocspostbackaction"></a>

```json
{
  "type": "string",
  "label": "string",
  "data": "string",
  "displayText": "string",
  "text": "string",
  "inputOption": "closeRichMenu",
  "fillInText": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of action|
|label|string|false|none|Label for the action.|
|data|string|false|none|none|
|displayText|string|false|none|none|
|text|string|false|none|none|
|inputOption|string|false|none|none|
|fillInText|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|inputOption|closeRichMenu|
|inputOption|openRichMenu|
|inputOption|openKeyboard|
|inputOption|openVoice|

<h2 id="tocS_RichMenuSwitchAction">RichMenuSwitchAction</h2>
<!-- backwards compatibility -->
<a id="schemarichmenuswitchaction"></a>
<a id="schema_RichMenuSwitchAction"></a>
<a id="tocSrichmenuswitchaction"></a>
<a id="tocsrichmenuswitchaction"></a>

```json
{
  "type": "string",
  "label": "string",
  "data": "string",
  "richMenuAliasId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of action|
|label|string|false|none|Label for the action.|
|data|string|false|none|none|
|richMenuAliasId|string|false|none|none|

<h2 id="tocS_URIAction">URIAction</h2>
<!-- backwards compatibility -->
<a id="schemauriaction"></a>
<a id="schema_URIAction"></a>
<a id="tocSuriaction"></a>
<a id="tocsuriaction"></a>

```json
{
  "type": "string",
  "label": "string",
  "uri": "http://example.com",
  "altUri": {
    "desktop": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of action|
|label|string|false|none|Label for the action.|
|uri|string(uri)|false|none|none|
|altUri|[AltUri](#schemaalturi)|false|none|none|

<h2 id="tocS_AltUri">AltUri</h2>
<!-- backwards compatibility -->
<a id="schemaalturi"></a>
<a id="schema_AltUri"></a>
<a id="tocSalturi"></a>
<a id="tocsalturi"></a>

```json
{
  "desktop": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desktop|string|false|none|none|

<h2 id="tocS_GetMembershipSubscriptionResponse">GetMembershipSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmembershipsubscriptionresponse"></a>
<a id="schema_GetMembershipSubscriptionResponse"></a>
<a id="tocSgetmembershipsubscriptionresponse"></a>
<a id="tocsgetmembershipsubscriptionresponse"></a>

```json
{
  "subscriptions": [
    {
      "membership": {
        "membershipId": 0,
        "title": "string",
        "description": "string",
        "benefits": [
          "string"
        ],
        "price": 500,
        "currency": "JPY"
      },
      "user": {
        "membershipNo": 0,
        "joinedTime": 0,
        "nextBillingDate": "string",
        "totalSubscriptionMonths": 0
      }
    }
  ]
}
```

A user's membership subscription status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscriptions|[[Subscription](#schemasubscription)]|true|none|List of subscription information|

<h2 id="tocS_MembershipListResponse">MembershipListResponse</h2>
<!-- backwards compatibility -->
<a id="schemamembershiplistresponse"></a>
<a id="schema_MembershipListResponse"></a>
<a id="tocSmembershiplistresponse"></a>
<a id="tocsmembershiplistresponse"></a>

```json
{
  "memberships": [
    {
      "membershipId": 0,
      "title": "string",
      "description": "string",
      "benefits": [
        "string"
      ],
      "price": 500,
      "currency": "JPY",
      "memberCount": 100,
      "memberLimit": 1000,
      "isInAppPurchase": true,
      "isPublished": true
    }
  ]
}
```

List of memberships

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberships|[[Membership](#schemamembership)]|true|none|List of membership information|

<h2 id="tocS_GetJoinedMembershipUsersResponse">GetJoinedMembershipUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetjoinedmembershipusersresponse"></a>
<a id="schema_GetJoinedMembershipUsersResponse"></a>
<a id="tocSgetjoinedmembershipusersresponse"></a>
<a id="tocsgetjoinedmembershipusersresponse"></a>

```json
{
  "userIds": [
    "string"
  ],
  "next": "string"
}
```

List of users who have joined the membership

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userIds|[string]|true|none|A list of user IDs who joined the membership.<br>Users who have not agreed to the bot user agreement, are not following the bot, or are not active will be excluded.<br>If there are no users in the membership, an empty list will be returned.<br>|
|next|string|false|none|A continuation token to get next remaining membership user IDs.<br>Returned only when there are remaining user IDs that weren't returned in the userIds property in the previous request.<br>The continuation token expires in 24 hours (86,400 seconds).<br><br>|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "membership": {
    "membershipId": 0,
    "title": "string",
    "description": "string",
    "benefits": [
      "string"
    ],
    "price": 500,
    "currency": "JPY"
  },
  "user": {
    "membershipNo": 0,
    "joinedTime": 0,
    "nextBillingDate": "string",
    "totalSubscriptionMonths": 0
  }
}
```

An array of memberships.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|membership|[SubscribedMembershipPlan](#schemasubscribedmembershipplan)|true|none|Object containing information about the membership plan.|
|user|[SubscribedMembershipUser](#schemasubscribedmembershipuser)|true|none|Object containing user membership subscription information.|

<h2 id="tocS_SubscribedMembershipPlan">SubscribedMembershipPlan</h2>
<!-- backwards compatibility -->
<a id="schemasubscribedmembershipplan"></a>
<a id="schema_SubscribedMembershipPlan"></a>
<a id="tocSsubscribedmembershipplan"></a>
<a id="tocssubscribedmembershipplan"></a>

```json
{
  "membershipId": 0,
  "title": "string",
  "description": "string",
  "benefits": [
    "string"
  ],
  "price": 500,
  "currency": "JPY"
}
```

Object containing information about the membership plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|membershipId|integer|true|none|Membership plan ID.|
|title|string|true|none|Membership plan name.|
|description|string|true|none|Membership plan description.|
|benefits|[string]|true|none|List of membership plan perks.|
|price|number(double)|true|none|Monthly fee for membership plan. (e.g. 1500.00)|
|currency|string|true|none|The currency of membership.price.|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|JPY|
|currency|TWD|
|currency|THB|

<h2 id="tocS_SubscribedMembershipUser">SubscribedMembershipUser</h2>
<!-- backwards compatibility -->
<a id="schemasubscribedmembershipuser"></a>
<a id="schema_SubscribedMembershipUser"></a>
<a id="tocSsubscribedmembershipuser"></a>
<a id="tocssubscribedmembershipuser"></a>

```json
{
  "membershipNo": 0,
  "joinedTime": 0,
  "nextBillingDate": "string",
  "totalSubscriptionMonths": 0
}
```

Object containing user membership subscription information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|membershipNo|integer|true|none|The user's member number in the membership plan.|
|joinedTime|integer|true|none|UNIX timestamp at which the user subscribed to the membership.|
|nextBillingDate|string|true|none|Next payment date for membership plan.<br>- Format: yyyy-MM-dd (e.g. 2024-02-08)<br>- Timezone: UTC+9<br>|
|totalSubscriptionMonths|integer|true|none|The period of time in months that the user has been subscribed to a membership plan. If a user previously canceled and then re-subscribed to the same membership plan, only the period after the re-subscription will be counted.|

<h2 id="tocS_Membership">Membership</h2>
<!-- backwards compatibility -->
<a id="schemamembership"></a>
<a id="schema_Membership"></a>
<a id="tocSmembership"></a>
<a id="tocsmembership"></a>

```json
{
  "membershipId": 0,
  "title": "string",
  "description": "string",
  "benefits": [
    "string"
  ],
  "price": 500,
  "currency": "JPY",
  "memberCount": 100,
  "memberLimit": 1000,
  "isInAppPurchase": true,
  "isPublished": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|membershipId|integer|true|none|Membership plan ID.|
|title|string|true|none|Membership plan name.|
|description|string|true|none|Membership plan description.|
|benefits|[string]|true|none|List of membership plan perks.|
|price|number(double)|true|none|Monthly fee for membership plan. (e.g. 1500.00)|
|currency|string|true|none|The currency of membership.price.|
|memberCount|integer|true|none|Number of members subscribed to the membership plan.|
|memberLimit|integer \| null|true|none|The upper limit of members who can subscribe. If no upper limit is set, it will be null.|
|isInAppPurchase|boolean|true|none|Payment method for users who subscribe to a membership plan.|
|isPublished|boolean|true|none|Membership plan status.|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|JPY|
|currency|TWD|
|currency|THB|

<h2 id="tocS_CouponCreateRequest">CouponCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacouponcreaterequest"></a>
<a id="schema_CouponCreateRequest"></a>
<a id="tocScouponcreaterequest"></a>
<a id="tocscouponcreaterequest"></a>

```json
{
  "acquisitionCondition": {
    "type": "string"
  },
  "barcodeImageUrl": "string",
  "couponCode": "string",
  "description": "string",
  "endTimestamp": 0,
  "imageUrl": "string",
  "maxUseCountPerTicket": 0,
  "startTimestamp": 0,
  "title": "string",
  "usageCondition": "string",
  "reward": {
    "type": "string"
  },
  "visibility": "UNLISTED",
  "timezone": "ETC_GMT_MINUS_12"
}
```

Request object for creating a coupon. Contains all configurable coupon properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquisitionCondition|[AcquisitionConditionRequest](#schemaacquisitionconditionrequest)|true|none|none|
|barcodeImageUrl|string|false|none|URL of the barcode image associated with the coupon. Used for in-store redemption.|
|couponCode|string|false|none|Unique code to be presented by the user to redeem the coupon. Optional.|
|description|string|false|none|Detailed description of the coupon. Displayed to users.|
|endTimestamp|integer(int64)|true|none|Coupon expiration time (epoch seconds). Coupon cannot be used after this time.|
|imageUrl|string|false|none|URL of the main image representing the coupon. Displayed in the coupon list.|
|maxUseCountPerTicket|integer(int32)|true|none|Maximum number of times a single coupon ticket can be used. Use -1 to indicate no limit.|
|startTimestamp|integer(int64)|true|none|Coupon start time (epoch seconds). Coupon can be used from this time.|
|title|string|true|none|Title of the coupon. Displayed in the coupon list.|
|usageCondition|string|false|none|Conditions for using the coupon. Shown to users.|
|reward|[CouponRewardRequest](#schemacouponrewardrequest)|false|none|none|
|visibility|string|true|none|Visibility of the coupon. Determines who can see or acquire the coupon.|
|timezone|string|true|none|Timezone for interpreting start and end timestamps.|

#### Enumerated Values

|Property|Value|
|---|---|
|visibility|UNLISTED|
|visibility|PUBLIC|
|timezone|ETC_GMT_MINUS_12|
|timezone|ETC_GMT_MINUS_11|
|timezone|PACIFIC_HONOLULU|
|timezone|AMERICA_ANCHORAGE|
|timezone|AMERICA_LOS_ANGELES|
|timezone|AMERICA_PHOENIX|
|timezone|AMERICA_CHICAGO|
|timezone|AMERICA_NEW_YORK|
|timezone|AMERICA_CARACAS|
|timezone|AMERICA_SANTIAGO|
|timezone|AMERICA_ST_JOHNS|
|timezone|AMERICA_SAO_PAULO|
|timezone|ETC_GMT_MINUS_2|
|timezone|ATLANTIC_CAPE_VERDE|
|timezone|EUROPE_LONDON|
|timezone|EUROPE_PARIS|
|timezone|EUROPE_ISTANBUL|
|timezone|EUROPE_MOSCOW|
|timezone|ASIA_TEHRAN|
|timezone|ASIA_TBILISI|
|timezone|ASIA_KABUL|
|timezone|ASIA_TASHKENT|
|timezone|ASIA_COLOMBO|
|timezone|ASIA_KATHMANDU|
|timezone|ASIA_ALMATY|
|timezone|ASIA_RANGOON|
|timezone|ASIA_BANGKOK|
|timezone|ASIA_TAIPEI|
|timezone|ASIA_TOKYO|
|timezone|AUSTRALIA_DARWIN|
|timezone|AUSTRALIA_SYDNEY|
|timezone|ASIA_VLADIVOSTOK|
|timezone|ETC_GMT_PLUS_12|
|timezone|PACIFIC_TONGATAPU|

<h2 id="tocS_AcquisitionConditionRequest">AcquisitionConditionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacquisitionconditionrequest"></a>
<a id="schema_AcquisitionConditionRequest"></a>
<a id="tocSacquisitionconditionrequest"></a>
<a id="tocsacquisitionconditionrequest"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Determines how the coupon is distributed or used.|

<h2 id="tocS_NormalAcquisitionConditionRequest">NormalAcquisitionConditionRequest</h2>
<!-- backwards compatibility -->
<a id="schemanormalacquisitionconditionrequest"></a>
<a id="schema_NormalAcquisitionConditionRequest"></a>
<a id="tocSnormalacquisitionconditionrequest"></a>
<a id="tocsnormalacquisitionconditionrequest"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Determines how the coupon is distributed or used.|

<h2 id="tocS_LotteryAcquisitionConditionRequest">LotteryAcquisitionConditionRequest</h2>
<!-- backwards compatibility -->
<a id="schemalotteryacquisitionconditionrequest"></a>
<a id="schema_LotteryAcquisitionConditionRequest"></a>
<a id="tocSlotteryacquisitionconditionrequest"></a>
<a id="tocslotteryacquisitionconditionrequest"></a>

```json
{
  "type": "string",
  "lotteryProbability": 1,
  "maxAcquireCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Determines how the coupon is distributed or used.|
|lotteryProbability|integer(int32)|true|none|Probability (1-99) of winning the coupon in lottery-type campaigns.|
|maxAcquireCount|integer(int32)|true|none|Maximum number of coupons that can be issued in total. Use -1 to indicate no limit|

<h2 id="tocS_CouponRewardRequest">CouponRewardRequest</h2>
<!-- backwards compatibility -->
<a id="schemacouponrewardrequest"></a>
<a id="schema_CouponRewardRequest"></a>
<a id="tocScouponrewardrequest"></a>
<a id="tocscouponrewardrequest"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of coupon. Determines the benefit provided.|

<h2 id="tocS_CouponCashBackRewardRequest">CouponCashBackRewardRequest</h2>
<!-- backwards compatibility -->
<a id="schemacouponcashbackrewardrequest"></a>
<a id="schema_CouponCashBackRewardRequest"></a>
<a id="tocScouponcashbackrewardrequest"></a>
<a id="tocscouponcashbackrewardrequest"></a>

```json
{
  "type": "string",
  "priceInfo": {
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of coupon. Determines the benefit provided.|
|priceInfo|[CashBackPriceInfoRequest](#schemacashbackpriceinforequest)|false|none|none|

<h2 id="tocS_CouponDiscountRewardRequest">CouponDiscountRewardRequest</h2>
<!-- backwards compatibility -->
<a id="schemacoupondiscountrewardrequest"></a>
<a id="schema_CouponDiscountRewardRequest"></a>
<a id="tocScoupondiscountrewardrequest"></a>
<a id="tocscoupondiscountrewardrequest"></a>

```json
{
  "type": "string",
  "priceInfo": {
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of coupon. Determines the benefit provided.|
|priceInfo|[DiscountPriceInfoRequest](#schemadiscountpriceinforequest)|false|none|none|

<h2 id="tocS_CouponFreeRewardRequest">CouponFreeRewardRequest</h2>
<!-- backwards compatibility -->
<a id="schemacouponfreerewardrequest"></a>
<a id="schema_CouponFreeRewardRequest"></a>
<a id="tocScouponfreerewardrequest"></a>
<a id="tocscouponfreerewardrequest"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of coupon. Determines the benefit provided.|

<h2 id="tocS_CouponGiftRewardRequest">CouponGiftRewardRequest</h2>
<!-- backwards compatibility -->
<a id="schemacoupongiftrewardrequest"></a>
<a id="schema_CouponGiftRewardRequest"></a>
<a id="tocScoupongiftrewardrequest"></a>
<a id="tocscoupongiftrewardrequest"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of coupon. Determines the benefit provided.|

<h2 id="tocS_CouponOthersRewardRequest">CouponOthersRewardRequest</h2>
<!-- backwards compatibility -->
<a id="schemacouponothersrewardrequest"></a>
<a id="schema_CouponOthersRewardRequest"></a>
<a id="tocScouponothersrewardrequest"></a>
<a id="tocscouponothersrewardrequest"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of coupon. Determines the benefit provided.|

<h2 id="tocS_CashBackPriceInfoRequest">CashBackPriceInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemacashbackpriceinforequest"></a>
<a id="schema_CashBackPriceInfoRequest"></a>
<a id="tocScashbackpriceinforequest"></a>
<a id="tocscashbackpriceinforequest"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_CashBackFixedPriceInfoRequest">CashBackFixedPriceInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemacashbackfixedpriceinforequest"></a>
<a id="schema_CashBackFixedPriceInfoRequest"></a>
<a id="tocScashbackfixedpriceinforequest"></a>
<a id="tocscashbackfixedpriceinforequest"></a>

```json
{
  "type": "string",
  "fixedAmount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|fixedAmount|integer(int64)|false|none|none|

<h2 id="tocS_CashBackPercentagePriceInfoRequest">CashBackPercentagePriceInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemacashbackpercentagepriceinforequest"></a>
<a id="schema_CashBackPercentagePriceInfoRequest"></a>
<a id="tocScashbackpercentagepriceinforequest"></a>
<a id="tocscashbackpercentagepriceinforequest"></a>

```json
{
  "type": "string",
  "percentage": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|percentage|integer(int32)|false|none|Specifies the cashback rate as a percentage. Must be an integer between 1 and 99.|

<h2 id="tocS_DiscountPriceInfoRequest">DiscountPriceInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemadiscountpriceinforequest"></a>
<a id="schema_DiscountPriceInfoRequest"></a>
<a id="tocSdiscountpriceinforequest"></a>
<a id="tocsdiscountpriceinforequest"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_DiscountFixedPriceInfoRequest">DiscountFixedPriceInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemadiscountfixedpriceinforequest"></a>
<a id="schema_DiscountFixedPriceInfoRequest"></a>
<a id="tocSdiscountfixedpriceinforequest"></a>
<a id="tocsdiscountfixedpriceinforequest"></a>

```json
{
  "type": "string",
  "fixedAmount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|fixedAmount|integer(int64)|false|none|none|

<h2 id="tocS_DiscountPercentagePriceInfoRequest">DiscountPercentagePriceInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemadiscountpercentagepriceinforequest"></a>
<a id="schema_DiscountPercentagePriceInfoRequest"></a>
<a id="tocSdiscountpercentagepriceinforequest"></a>
<a id="tocsdiscountpercentagepriceinforequest"></a>

```json
{
  "type": "string",
  "percentage": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|percentage|integer(int32)|false|none|Specifies the discount rate as a percentage. Must be an integer between 1 and 99.|

<h2 id="tocS_DiscountExplicitPriceInfoRequest">DiscountExplicitPriceInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemadiscountexplicitpriceinforequest"></a>
<a id="schema_DiscountExplicitPriceInfoRequest"></a>
<a id="tocSdiscountexplicitpriceinforequest"></a>
<a id="tocsdiscountexplicitpriceinforequest"></a>

```json
{
  "type": "string",
  "priceAfterDiscount": 0,
  "originalPrice": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|priceAfterDiscount|integer(int64)|false|none|none|
|originalPrice|integer(int64)|false|none|none|

<h2 id="tocS_CouponCreateResponse">CouponCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacouponcreateresponse"></a>
<a id="schema_CouponCreateResponse"></a>
<a id="tocScouponcreateresponse"></a>
<a id="tocscouponcreateresponse"></a>

```json
{
  "couponId": "string"
}
```

Response object returned after creating a coupon. Contains the coupon ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|couponId|string|true|none|Unique identifier of the coupon.|

<h2 id="tocS_CouponResponse">CouponResponse</h2>
<!-- backwards compatibility -->
<a id="schemacouponresponse"></a>
<a id="schema_CouponResponse"></a>
<a id="tocScouponresponse"></a>
<a id="tocscouponresponse"></a>

```json
{
  "acquisitionCondition": {
    "type": "string"
  },
  "barcodeImageUrl": "http://example.com",
  "couponCode": "string",
  "description": "string",
  "endTimestamp": 0,
  "imageUrl": "http://example.com",
  "maxAcquireCount": 0,
  "maxUseCountPerTicket": 0,
  "maxTicketPerUser": 0,
  "startTimestamp": 0,
  "title": "string",
  "usageCondition": "string",
  "reward": {
    "type": "string"
  },
  "visibility": "UNLISTED",
  "timezone": "ETC_GMT_MINUS_12",
  "couponId": "string",
  "createdTimestamp": 0,
  "status": "DRAFT"
}
```

Detailed information about a coupon, including all properties and current status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquisitionCondition|[AcquisitionConditionResponse](#schemaacquisitionconditionresponse)|false|none|none|
|barcodeImageUrl|string(uri)|false|none|URL of the barcode image associated with the coupon. Used for in-store redemption.|
|couponCode|string|false|none|Unique code to be presented by the user to redeem the coupon.|
|description|string|false|none|Detailed description of the coupon. Displayed to users.|
|endTimestamp|integer(int64)|false|none|Coupon expiration time (epoch seconds). Coupon cannot be used after this time.|
|imageUrl|string(uri)|false|none|URL of the main image representing the coupon. Displayed in the coupon list.|
|maxAcquireCount|integer(int64)|false|none|Maximum number of coupons that can be issued in total.|
|maxUseCountPerTicket|integer(int32)|false|none|Maximum number of times a single coupon ticket can be used.|
|maxTicketPerUser|integer(int64)|false|none|Maximum number of coupon tickets a single user can acquire.|
|startTimestamp|integer(int64)|false|none|Coupon start time (epoch seconds). Coupon can be used from this time.|
|title|string|false|none|Title of the coupon. Displayed in the coupon list.|
|usageCondition|string|false|none|Conditions for using the coupon. Shown to users.|
|reward|[CouponRewardResponse](#schemacouponrewardresponse)|false|none|none|
|visibility|string|false|none|Visibility of the coupon. Determines who can see or acquire the coupon.|
|timezone|string|false|none|Timezone for interpreting start and end timestamps.|
|couponId|string|false|none|Unique identifier of the coupon.|
|createdTimestamp|integer(int64)|false|none|Created timestamp (seconds) of the coupon.|
|status|string|false|none|Current status of the coupon.|

#### Enumerated Values

|Property|Value|
|---|---|
|visibility|UNLISTED|
|visibility|PUBLIC|
|visibility|PRIVATE|
|timezone|ETC_GMT_MINUS_12|
|timezone|ETC_GMT_MINUS_11|
|timezone|PACIFIC_HONOLULU|
|timezone|AMERICA_ANCHORAGE|
|timezone|AMERICA_LOS_ANGELES|
|timezone|AMERICA_PHOENIX|
|timezone|AMERICA_CHICAGO|
|timezone|AMERICA_NEW_YORK|
|timezone|AMERICA_CARACAS|
|timezone|AMERICA_SANTIAGO|
|timezone|AMERICA_ST_JOHNS|
|timezone|AMERICA_SAO_PAULO|
|timezone|ETC_GMT_MINUS_2|
|timezone|ATLANTIC_CAPE_VERDE|
|timezone|EUROPE_LONDON|
|timezone|EUROPE_PARIS|
|timezone|EUROPE_ISTANBUL|
|timezone|EUROPE_MOSCOW|
|timezone|ASIA_TEHRAN|
|timezone|ASIA_TBILISI|
|timezone|ASIA_KABUL|
|timezone|ASIA_TASHKENT|
|timezone|ASIA_COLOMBO|
|timezone|ASIA_KATHMANDU|
|timezone|ASIA_ALMATY|
|timezone|ASIA_RANGOON|
|timezone|ASIA_BANGKOK|
|timezone|ASIA_TAIPEI|
|timezone|ASIA_TOKYO|
|timezone|AUSTRALIA_DARWIN|
|timezone|AUSTRALIA_SYDNEY|
|timezone|ASIA_VLADIVOSTOK|
|timezone|ETC_GMT_PLUS_12|
|timezone|PACIFIC_TONGATAPU|
|status|DRAFT|
|status|RUNNING|
|status|CLOSED|

<h2 id="tocS_AcquisitionConditionResponse">AcquisitionConditionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaacquisitionconditionresponse"></a>
<a id="schema_AcquisitionConditionResponse"></a>
<a id="tocSacquisitionconditionresponse"></a>
<a id="tocsacquisitionconditionresponse"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Determines how the coupon is distributed or used.|

<h2 id="tocS_NormalAcquisitionConditionResponse">NormalAcquisitionConditionResponse</h2>
<!-- backwards compatibility -->
<a id="schemanormalacquisitionconditionresponse"></a>
<a id="schema_NormalAcquisitionConditionResponse"></a>
<a id="tocSnormalacquisitionconditionresponse"></a>
<a id="tocsnormalacquisitionconditionresponse"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Determines how the coupon is distributed or used.|

<h2 id="tocS_LotteryAcquisitionConditionResponse">LotteryAcquisitionConditionResponse</h2>
<!-- backwards compatibility -->
<a id="schemalotteryacquisitionconditionresponse"></a>
<a id="schema_LotteryAcquisitionConditionResponse"></a>
<a id="tocSlotteryacquisitionconditionresponse"></a>
<a id="tocslotteryacquisitionconditionresponse"></a>

```json
{
  "type": "string",
  "lotteryProbability": 0,
  "maxAcquireCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Determines how the coupon is distributed or used.|
|lotteryProbability|integer(int32)|false|none|none|
|maxAcquireCount|integer(int32)|false|none|none|

<h2 id="tocS_ReferralAcquisitionConditionResponse">ReferralAcquisitionConditionResponse</h2>
<!-- backwards compatibility -->
<a id="schemareferralacquisitionconditionresponse"></a>
<a id="schema_ReferralAcquisitionConditionResponse"></a>
<a id="tocSreferralacquisitionconditionresponse"></a>
<a id="tocsreferralacquisitionconditionresponse"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Determines how the coupon is distributed or used.|

<h2 id="tocS_CouponRewardResponse">CouponRewardResponse</h2>
<!-- backwards compatibility -->
<a id="schemacouponrewardresponse"></a>
<a id="schema_CouponRewardResponse"></a>
<a id="tocScouponrewardresponse"></a>
<a id="tocscouponrewardresponse"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of coupon. Determines the benefit provided.|

<h2 id="tocS_CouponCashBackRewardResponse">CouponCashBackRewardResponse</h2>
<!-- backwards compatibility -->
<a id="schemacouponcashbackrewardresponse"></a>
<a id="schema_CouponCashBackRewardResponse"></a>
<a id="tocScouponcashbackrewardresponse"></a>
<a id="tocscouponcashbackrewardresponse"></a>

```json
{
  "type": "string",
  "priceInfo": {
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of coupon. Determines the benefit provided.|
|priceInfo|[CashBackPriceInfoResponse](#schemacashbackpriceinforesponse)|false|none|none|

<h2 id="tocS_CouponDiscountRewardResponse">CouponDiscountRewardResponse</h2>
<!-- backwards compatibility -->
<a id="schemacoupondiscountrewardresponse"></a>
<a id="schema_CouponDiscountRewardResponse"></a>
<a id="tocScoupondiscountrewardresponse"></a>
<a id="tocscoupondiscountrewardresponse"></a>

```json
{
  "type": "string",
  "priceInfo": {
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of coupon. Determines the benefit provided.|
|priceInfo|[DiscountPriceInfoResponse](#schemadiscountpriceinforesponse)|false|none|none|

<h2 id="tocS_CouponFreeRewardResponse">CouponFreeRewardResponse</h2>
<!-- backwards compatibility -->
<a id="schemacouponfreerewardresponse"></a>
<a id="schema_CouponFreeRewardResponse"></a>
<a id="tocScouponfreerewardresponse"></a>
<a id="tocscouponfreerewardresponse"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of coupon. Determines the benefit provided.|

<h2 id="tocS_CouponGiftRewardResponse">CouponGiftRewardResponse</h2>
<!-- backwards compatibility -->
<a id="schemacoupongiftrewardresponse"></a>
<a id="schema_CouponGiftRewardResponse"></a>
<a id="tocScoupongiftrewardresponse"></a>
<a id="tocscoupongiftrewardresponse"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of coupon. Determines the benefit provided.|

<h2 id="tocS_CouponOthersRewardResponse">CouponOthersRewardResponse</h2>
<!-- backwards compatibility -->
<a id="schemacouponothersrewardresponse"></a>
<a id="schema_CouponOthersRewardResponse"></a>
<a id="tocScouponothersrewardresponse"></a>
<a id="tocscouponothersrewardresponse"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of coupon. Determines the benefit provided.|

<h2 id="tocS_CashBackPriceInfoResponse">CashBackPriceInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemacashbackpriceinforesponse"></a>
<a id="schema_CashBackPriceInfoResponse"></a>
<a id="tocScashbackpriceinforesponse"></a>
<a id="tocscashbackpriceinforesponse"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_CashBackFixedPriceInfoResponse">CashBackFixedPriceInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemacashbackfixedpriceinforesponse"></a>
<a id="schema_CashBackFixedPriceInfoResponse"></a>
<a id="tocScashbackfixedpriceinforesponse"></a>
<a id="tocscashbackfixedpriceinforesponse"></a>

```json
{
  "type": "string",
  "currency": "JPY",
  "fixedAmount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|currency|string|false|none|Currency code (e.g., JPY, THB, TWD).|
|fixedAmount|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|JPY|
|currency|THB|
|currency|TWD|

<h2 id="tocS_CashBackPercentagePriceInfoResponse">CashBackPercentagePriceInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemacashbackpercentagepriceinforesponse"></a>
<a id="schema_CashBackPercentagePriceInfoResponse"></a>
<a id="tocScashbackpercentagepriceinforesponse"></a>
<a id="tocscashbackpercentagepriceinforesponse"></a>

```json
{
  "type": "string",
  "percentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|percentage|integer(int32)|false|none|none|

<h2 id="tocS_DiscountPriceInfoResponse">DiscountPriceInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemadiscountpriceinforesponse"></a>
<a id="schema_DiscountPriceInfoResponse"></a>
<a id="tocSdiscountpriceinforesponse"></a>
<a id="tocsdiscountpriceinforesponse"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_DiscountFixedPriceInfoResponse">DiscountFixedPriceInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemadiscountfixedpriceinforesponse"></a>
<a id="schema_DiscountFixedPriceInfoResponse"></a>
<a id="tocSdiscountfixedpriceinforesponse"></a>
<a id="tocsdiscountfixedpriceinforesponse"></a>

```json
{
  "type": "string",
  "currency": "JPY",
  "fixedAmount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|currency|string|false|none|Currency code (e.g., JPY, THB, TWD).|
|fixedAmount|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|JPY|
|currency|THB|
|currency|TWD|

<h2 id="tocS_DiscountPercentagePriceInfoResponse">DiscountPercentagePriceInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemadiscountpercentagepriceinforesponse"></a>
<a id="schema_DiscountPercentagePriceInfoResponse"></a>
<a id="tocSdiscountpercentagepriceinforesponse"></a>
<a id="tocsdiscountpercentagepriceinforesponse"></a>

```json
{
  "type": "string",
  "percentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|percentage|integer(int32)|false|none|none|

<h2 id="tocS_DiscountExplicitPriceInfoResponse">DiscountExplicitPriceInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemadiscountexplicitpriceinforesponse"></a>
<a id="schema_DiscountExplicitPriceInfoResponse"></a>
<a id="tocSdiscountexplicitpriceinforesponse"></a>
<a id="tocsdiscountexplicitpriceinforesponse"></a>

```json
{
  "type": "string",
  "currency": "JPY",
  "priceAfterDiscount": 0,
  "originalPrice": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|currency|string|false|none|Currency code (e.g., JPY, THB, TWD).|
|priceAfterDiscount|integer(int64)|false|none|none|
|originalPrice|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|JPY|
|currency|THB|
|currency|TWD|

<h2 id="tocS_MessagingApiPagerCouponListResponse">MessagingApiPagerCouponListResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagingapipagercouponlistresponse"></a>
<a id="schema_MessagingApiPagerCouponListResponse"></a>
<a id="tocSmessagingapipagercouponlistresponse"></a>
<a id="tocsmessagingapipagercouponlistresponse"></a>

```json
{
  "items": [
    {
      "couponId": "string",
      "title": "string"
    }
  ],
  "next": "string"
}
```

Paginated response object containing a list of coupons.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[CouponListResponse](#schemacouponlistresponse)]|true|none|List of coupon summary objects.|
|next|string|false|none|Token for fetching the next page of results.|

<h2 id="tocS_CouponListResponse">CouponListResponse</h2>
<!-- backwards compatibility -->
<a id="schemacouponlistresponse"></a>
<a id="schema_CouponListResponse"></a>
<a id="tocScouponlistresponse"></a>
<a id="tocscouponlistresponse"></a>

```json
{
  "couponId": "string",
  "title": "string"
}
```

Summary information about a coupon, used in coupon lists.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|couponId|string|true|none|Unique identifier of the coupon.|
|title|string|true|none|Title of the coupon. Displayed in the coupon list.|

<h2 id="tocS_ShowLoadingAnimationRequest">ShowLoadingAnimationRequest</h2>
<!-- backwards compatibility -->
<a id="schemashowloadinganimationrequest"></a>
<a id="schema_ShowLoadingAnimationRequest"></a>
<a id="tocSshowloadinganimationrequest"></a>
<a id="tocsshowloadinganimationrequest"></a>

```json
{
  "chatId": "string",
  "loadingSeconds": 5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chatId|string|true|none|User ID of the target user for whom the loading animation is to be displayed.|
|loadingSeconds|integer(int32)|false|none|The number of seconds to display the loading indicator.<br>It must be a multiple of 5. The maximum value is 60 seconds.<br>|

<h2 id="tocS_ShowLoadingAnimationResponse">ShowLoadingAnimationResponse</h2>
<!-- backwards compatibility -->
<a id="schemashowloadinganimationresponse"></a>
<a id="schema_ShowLoadingAnimationResponse"></a>
<a id="tocSshowloadinganimationresponse"></a>
<a id="tocsshowloadinganimationresponse"></a>

```json
{}
```

<h2 id="tocS_MarkMessagesAsReadByTokenRequest">MarkMessagesAsReadByTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemamarkmessagesasreadbytokenrequest"></a>
<a id="schema_MarkMessagesAsReadByTokenRequest"></a>
<a id="tocSmarkmessagesasreadbytokenrequest"></a>
<a id="tocsmarkmessagesasreadbytokenrequest"></a>

```json
{
  "markAsReadToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|markAsReadToken|string|true|none|Token used to mark messages as read.|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ],
  "sentMessages": [
    {
      "id": "string",
      "quoteToken": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Message containing information about the error.|
|details|[[ErrorDetail](#schemaerrordetail)]|false|none|An array of error details. If the array is empty, this property will not be included in the response.|
|sentMessages|[[SentMessage](#schemasentmessage)]|false|none|Array of sent messages.|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
{
  "message": "string",
  "property": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Details of the error. Not included in the response under certain situations.|
|property|string|false|none|Location of where the error occurred. Returns the JSON field name or query parameter name of the request. Not included in the response under certain situations.|
