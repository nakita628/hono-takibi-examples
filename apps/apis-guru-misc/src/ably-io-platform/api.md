<h1 id="platform-api">Platform API v1.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The [REST API specification](https://www.ably.io/documentation/rest-api) for Ably.

Base URLs:

* <a href="https://rest.ably.io">https://rest.ably.io</a>

Email: <a href="mailto:support@ably.io">Ably Support</a> 
Web: <a href="https://www.ably.io/contact">Ably Support</a> 

# Authentication

- HTTP Authentication, scheme: basic Basic Authentication using an [API key](https://www.ably.io/documentation/core-features/authentication#basic-authentication).

- HTTP Authentication, scheme: bearer Token Authentication using an [Ably Token](https://www.ably.io/documentation/core-features/authentication#basic-authentication), or optionally an [Ably JWT](https://www.ably.io/documentation/core-features/authentication#ably-jwt-process).

<h1 id="platform-api-status">Status</h1>

## Enumerate all active channels of the application

<a id="opIdgetMetadataOfAllChannels"></a>

> Code samples

```bash
curl https://example.com/channels \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /channels`

Enumerate all active channels of the application

<h3 id="enumerate-all-active-channels-of-the-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|prefix|query|string|false|Optionally limits the query to only those channels whose name starts with the given prefix|
|by|query|string|false|optionally specifies whether to return just channel names (by=id) or ChannelDetails (by=value)|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|

#### Enumerated Values

|Parameter|Value|
|---|---|
|by|value|
|by|id|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> 2XX Response

```json
[
  {
    "channelId": "string",
    "isGlobalMaster": true,
    "region": "string",
    "status": {
      "isActive": true,
      "occupancy": {
        "presenceConnections": 0,
        "presenceMembers": 0,
        "presenceSubscribers": 0,
        "publishers": 0,
        "subscribers": 0
      }
    }
  }
]
```

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="enumerate-all-active-channels-of-the-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|Inline|
|default|Default|Error|[Error](#schemaerror)|

<h3 id="enumerate-all-active-channels-of-the-application-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[[ChannelDetails](#schemachanneldetails)]|false|none|none|
|*anonymous*|[[ChannelDetails](#schemachanneldetails)]|false|none|none|
|*oneOf*|[string]|false|none|none|
|*anonymous*|[string]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|2XX|link|string||Links to related resources, in the format defined by [RFC 5988](https://tools.ietf.org/html/rfc5988#section-5). This will potentially include a link with relation type `next`, `first`, and `current`, where appropiate.|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

## Get metadata of a channel

<a id="opIdgetMetadataOfChannel"></a>

> Code samples

```bash
curl https://example.com/channels/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /channels/{channel_id}`

Get metadata of a channel

<h3 id="get-metadata-of-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|path|string|true|The [Channel's ID](https://www.ably.io/documentation/rest/channels).|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> 200 Response

```json
{
  "channelId": "string",
  "isGlobalMaster": true,
  "region": "string",
  "status": {
    "isActive": true,
    "occupancy": {
      "presenceConnections": 0,
      "presenceMembers": 0,
      "presenceSubscribers": 0,
      "publishers": 0,
      "subscribers": 0
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="get-metadata-of-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ChannelDetails](#schemachanneldetails)|
|default|Default|Error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-ably-serverid|string||The ID for the server communicated with.|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

## Get presence of a channel

<a id="opIdgetPresenceOfChannel"></a>

> Code samples

```bash
curl https://example.com/channels/string/presence \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /channels/{channel_id}/presence`

Get presence on a channel

<h3 id="get-presence-of-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|path|string|true|The [Channel's ID](https://www.ably.io/documentation/rest/channels).|
|clientId|query|string|false|none|
|connectionId|query|string|false|none|
|limit|query|integer|false|none|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> 200 Response

```json
[
  {
    "action": "ABSENT",
    "clientId": "string",
    "connectionId": "string",
    "data": "string",
    "encoding": "string",
    "extras": {
      "push": {
        "apns": {
          "notification": {
            "body": "string",
            "collapseKey": "string",
            "icon": "string",
            "sound": "string",
            "title": "string"
          }
        },
        "data": "string",
        "fcm": {
          "notification": {
            "body": "string",
            "collapseKey": "string",
            "icon": "string",
            "sound": "string",
            "title": "string"
          }
        },
        "notification": {
          "body": "string",
          "collapseKey": "string",
          "icon": "string",
          "sound": "string",
          "title": "string"
        },
        "web": {
          "notification": {
            "body": "string",
            "collapseKey": "string",
            "icon": "string",
            "sound": "string",
            "title": "string"
          }
        }
      }
    },
    "id": "string",
    "timestamp": 0
  }
]
```

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="get-presence-of-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|Error|[Error](#schemaerror)|

<h3 id="get-presence-of-a-channel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PresenceMessage](#schemapresencemessage)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|link|string||Links to related resources, in the format defined by [RFC 5988](https://tools.ietf.org/html/rfc5988#section-5). This will potentially include a link with relation type `next`, `first`, and `current`, where appropiate.|
|200|x-ably-serverid|string||The ID for the server communicated with.|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

<h1 id="platform-api-history">History</h1>

## Get message history for a channel

<a id="opIdgetMessagesByChannel"></a>

> Code samples

```bash
curl https://example.com/channels/string/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /channels/{channel_id}/messages`

Get message history for a channel

<h3 id="get-message-history-for-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|path|string|true|The [Channel's ID](https://www.ably.io/documentation/rest/channels).|
|start|query|string|false|none|
|limit|query|integer|false|none|
|end|query|string|false|none|
|direction|query|string|false|none|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|forwards|
|direction|backwards|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> 2XX Response

```json
[
  {
    "clientId": "string",
    "connectionId": "string",
    "data": "string",
    "encoding": "string",
    "extras": {
      "push": {
        "apns": {
          "notification": {
            "body": "string",
            "collapseKey": "string",
            "icon": "string",
            "sound": "string",
            "title": "string"
          }
        },
        "data": "string",
        "fcm": {
          "notification": {
            "body": "string",
            "collapseKey": "string",
            "icon": "string",
            "sound": "string",
            "title": "string"
          }
        },
        "notification": {
          "body": "string",
          "collapseKey": "string",
          "icon": "string",
          "sound": "string",
          "title": "string"
        },
        "web": {
          "notification": {
            "body": "string",
            "collapseKey": "string",
            "icon": "string",
            "sound": "string",
            "title": "string"
          }
        }
      }
    },
    "id": "string",
    "name": "string",
    "timestamp": 0
  }
]
```

<h3 id="get-message-history-for-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|Inline|
|default|Default|Error|None|

<h3 id="get-message-history-for-a-channel-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Message](#schemamessage)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|2XX|link|string||Links to related resources, in the format defined by [RFC 5988](https://tools.ietf.org/html/rfc5988#section-5). This will potentially include a link with relation type `next`, `first`, and `current`, where appropiate.|
|2XX|x-ably-serverid|string||The ID for the server communicated with.|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

## Get presence history of a channel

<a id="opIdgetPresenceHistoryOfChannel"></a>

> Code samples

```bash
curl https://example.com/channels/string/presence/history \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /channels/{channel_id}/presence/history`

Get presence on a channel

<h3 id="get-presence-history-of-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|path|string|true|The [Channel's ID](https://www.ably.io/documentation/rest/channels).|
|start|query|string|false|none|
|limit|query|integer|false|none|
|end|query|string|false|none|
|direction|query|string|false|none|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|forwards|
|direction|backwards|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> 2XX Response

```json
[
  {
    "action": "ABSENT",
    "clientId": "string",
    "connectionId": "string",
    "data": "string",
    "encoding": "string",
    "extras": {
      "push": {
        "apns": {
          "notification": {
            "body": "string",
            "collapseKey": "string",
            "icon": "string",
            "sound": "string",
            "title": "string"
          }
        },
        "data": "string",
        "fcm": {
          "notification": {
            "body": "string",
            "collapseKey": "string",
            "icon": "string",
            "sound": "string",
            "title": "string"
          }
        },
        "notification": {
          "body": "string",
          "collapseKey": "string",
          "icon": "string",
          "sound": "string",
          "title": "string"
        },
        "web": {
          "notification": {
            "body": "string",
            "collapseKey": "string",
            "icon": "string",
            "sound": "string",
            "title": "string"
          }
        }
      }
    },
    "id": "string",
    "timestamp": 0
  }
]
```

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="get-presence-history-of-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|Inline|
|default|Default|Error|[Error](#schemaerror)|

<h3 id="get-presence-history-of-a-channel-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PresenceMessage](#schemapresencemessage)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|2XX|link|string||Links to related resources, in the format defined by [RFC 5988](https://tools.ietf.org/html/rfc5988#section-5). This will potentially include a link with relation type `next`, `first`, and `current`, where appropiate.|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

<h1 id="platform-api-publishing">Publishing</h1>

## Publish a message to a channel

<a id="opIdpublishMessagesToChannel"></a>

> Code samples

```bash
curl https://example.com/channels/string/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "clientId": "string",
    "connectionId": "string",
    "data": "string",
    "encoding": "string",
    "extras": {
      "push": {
        "apns": {
          "notification": {
            "body": "string",
            "collapseKey": "string",
            "icon": "string",
            "sound": "string",
            "title": "string"
          }
        },
        "data": "string",
        "fcm": {
          "notification": {
            "body": "string",
            "collapseKey": "string",
            "icon": "string",
            "sound": "string",
            "title": "string"
          }
        },
        "notification": {
          "body": "string",
          "collapseKey": "string",
          "icon": "string",
          "sound": "string",
          "title": "string"
        },
        "web": {
          "notification": {
            "body": "string",
            "collapseKey": "string",
            "icon": "string",
            "sound": "string",
            "title": "string"
          }
        }
      }
    },
    "name": "string"
  }'
```

`POST /channels/{channel_id}/messages`

Publish a message to the specified channel

> Body parameter

```json
{
  "clientId": "string",
  "connectionId": "string",
  "data": "string",
  "encoding": "string",
  "extras": {
    "push": {
      "apns": {
        "notification": {
          "body": "string",
          "collapseKey": "string",
          "icon": "string",
          "sound": "string",
          "title": "string"
        }
      },
      "data": "string",
      "fcm": {
        "notification": {
          "body": "string",
          "collapseKey": "string",
          "icon": "string",
          "sound": "string",
          "title": "string"
        }
      },
      "notification": {
        "body": "string",
        "collapseKey": "string",
        "icon": "string",
        "sound": "string",
        "title": "string"
      },
      "web": {
        "notification": {
          "body": "string",
          "collapseKey": "string",
          "icon": "string",
          "sound": "string",
          "title": "string"
        }
      }
    }
  },
  "name": "string"
}
```

<h3 id="publish-a-message-to-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|path|string|true|The [Channel's ID](https://www.ably.io/documentation/rest/channels).|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|
|body|body|[Message](#schemamessage)|false|none|
|» clientId|body|string|false|The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) of the publisher of this message.|
|» connectionId|body|string|false|The connection ID of the publisher of this message.|
|» data|body|string|false|The string encoded payload, with the encoding specified below.|
|» encoding|body|string|false|This will typically be empty as all messages received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload.|
|» extras|body|[Extras](#schemaextras)|false|Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra.|
|» name|body|string|false|The event name, if provided.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> 2XX Response

```json
{
  "channel": "string",
  "messageId": "string"
}
```

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="publish-a-message-to-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|Inline|
|default|Default|Error|[Error](#schemaerror)|

<h3 id="publish-a-message-to-a-channel-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|none|none|
|messageId|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|2XX|x-ably-serverid|string||The ID for the server communicated with.|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

<h1 id="platform-api-authentication">Authentication</h1>

## Request an access token

<a id="opIdrequestAccessToken"></a>

> Code samples

```bash
curl https://example.com/keys/string/requestToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "capability": {
      "channel1": [
        "publish",
        "subscribe"
      ],
      "wildcard:channels:*": [
        "publish"
      ]
    },
    "keyName": "YourKey.Name",
    "timestamp": "1559124196551"
  }'
```

`POST /keys/{keyName}/requestToken`

This is the means by which clients obtain access tokens to use the service. You can see how to construct an Ably TokenRequest in the [Ably TokenRequest spec](https://www.ably.io/documentation/rest-api/token-request-spec) documentation, although we recommend you use an Ably SDK rather to create a TokenRequest, as the construction of a TokenRequest is complex. The resulting token response object contains the token properties as defined in Ably TokenRequest spec. Authentication is not required if using a Signed TokenRequest.

> Body parameter

```json
{
  "capability": {
    "channel1": [
      "publish",
      "subscribe"
    ],
    "wildcard:channels:*": [
      "publish"
    ]
  },
  "keyName": "YourKey.Name",
  "timestamp": "1559124196551"
}
```

<h3 id="request-an-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyName|path|string|true|The [key name](https://www.ably.io/documentation/rest-api/token-request-spec#api-key-format) comprises of the app ID and key ID of an API key.|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|
|body|body|[TokenRequest](#schematokenrequest) \| [SignedTokenRequest](#schemasignedtokenrequest)|false|none|
|» *oneOf*|body|[TokenRequest](#schematokenrequest)|false|none|
|» *oneOf*|body|[SignedTokenRequest](#schemasignedtokenrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> 2XX Response

```json
{
  "capability": "string",
  "expires": 0,
  "issued": 0,
  "keyName": "string",
  "token": "string"
}
```

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="request-an-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|[TokenDetails](#schematokendetails)|
|default|Default|Error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

<h1 id="platform-api-push">Push</h1>

## List channel subscriptions

<a id="opIdgetPushSubscriptionsOnChannels"></a>

> Code samples

```bash
curl https://example.com/push/channelSubscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /push/channelSubscriptions`

Get a list of push notification subscriptions to channels.

<h3 id="list-channel-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel|query|string|false|Filter to restrict to subscriptions associated with that channel.|
|deviceId|query|string|false|Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.|
|clientId|query|string|false|Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.|
|limit|query|integer|false|The maximum number of records to return.|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> 2XX Response

```json
{
  "clientId": "string",
  "deviceSecret": "string",
  "formFactor": "phone",
  "id": "string",
  "metadata": {},
  "platform": "ios",
  "push.recipient": {
    "deviceToken": "string",
    "registrationToken": "string",
    "transportType": "apns"
  },
  "push.state": "Active"
}
```

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="list-channel-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|[DeviceDetails](#schemadevicedetails)|
|default|Default|Error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

## Subscribe a device to a channel

<a id="opIdsubscribePushDeviceToChannel"></a>

> Code samples

```bash
curl https://example.com/push/channelSubscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "channel": "my:channel",
    "clientId": "myClientId"
  }'
```

`POST /push/channelSubscriptions`

Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.

> Body parameter

```json
{
  "channel": "my:channel",
  "clientId": "myClientId"
}
```

<h3 id="subscribe-a-device-to-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» channel|body|string|false|Channel name.|
|» deviceId|body|string|false|Must be set when clientId is empty, cannot be used with clientId.|
|» *oneOf*|body|object|false|none|
|» channel|body|string|false|Channel name.|
|» clientId|body|string|false|Must be set when deviceId is empty, cannot be used with deviceId.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="subscribe-a-device-to-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|None|
|default|Default|Error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

## Delete a registered device's update token

<a id="opIddeletePushDeviceDetails"></a>

> Code samples

```bash
curl https://example.com/push/channelSubscriptions \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /push/channelSubscriptions`

Delete a device details object.

<h3 id="delete-a-registered-devices-update-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel|query|string|false|Filter to restrict to subscriptions associated with that channel.|
|deviceId|query|string|false|Must be set when clientId is empty, cannot be used with clientId.|
|clientId|query|string|false|Must be set when deviceId is empty, cannot be used with deviceId.|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="delete-a-registered-devices-update-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|None|
|default|Default|Error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

## List all channels with at least one subscribed device

<a id="opIdgetChannelsWithPushSubscribers"></a>

> Code samples

```bash
curl https://example.com/push/channels \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /push/channels`

Returns a paginated response of channel names.

<h3 id="list-all-channels-with-at-least-one-subscribed-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> 2XX Response

```json
[
  "string"
]
```

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="list-all-channels-with-at-least-one-subscribed-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|Inline|
|default|Default|Error|[Error](#schemaerror)|

<h3 id="list-all-channels-with-at-least-one-subscribed-device-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

## List devices registered for receiving push notifications

<a id="opIdgetRegisteredPushDevices"></a>

> Code samples

```bash
curl https://example.com/push/deviceRegistrations \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /push/deviceRegistrations`

List of device details of devices registed for push notifications.

<h3 id="list-devices-registered-for-receiving-push-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|query|string|false|Optional filter to restrict to devices associated with that deviceId.|
|clientId|query|string|false|Optional filter to restrict to devices associated with that clientId.|
|limit|query|integer|false|The maximum number of records to return.|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> 2XX Response

```json
{
  "clientId": "string",
  "deviceSecret": "string",
  "formFactor": "phone",
  "id": "string",
  "metadata": {},
  "platform": "ios",
  "push.recipient": {
    "deviceToken": "string",
    "registrationToken": "string",
    "transportType": "apns"
  },
  "push.state": "Active"
}
```

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="list-devices-registered-for-receiving-push-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|[DeviceDetails](#schemadevicedetails)|
|default|Default|Error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

## Register a device for receiving push notifications

<a id="opIdregisterPushDevice"></a>

> Code samples

```bash
curl https://example.com/push/deviceRegistrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "clientId": "string",
    "deviceSecret": "string",
    "formFactor": "phone",
    "id": "string",
    "metadata": {},
    "platform": "ios",
    "push.recipient": {
      "clientId": "string",
      "deviceId": "string",
      "deviceToken": "string",
      "registrationToken": "string",
      "transportType": "apns"
    }
  }'
```

`POST /push/deviceRegistrations`

Register a device’s details, including the information necessary to deliver push notifications to it. Requires "push-admin" capability.

> Body parameter

```json
{
  "clientId": "string",
  "deviceSecret": "string",
  "formFactor": "phone",
  "id": "string",
  "metadata": {},
  "platform": "ios",
  "push.recipient": {
    "clientId": "string",
    "deviceId": "string",
    "deviceToken": "string",
    "registrationToken": "string",
    "transportType": "apns"
  }
}
```

<h3 id="register-a-device-for-receiving-push-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|
|body|body|[DeviceDetails](#schemadevicedetails)|false|none|
|» clientId|body|string|false|Optional trusted client identifier for the device.|
|» deviceSecret|body|string|false|Secret value for the device.|
|» formFactor|body|string|false|Form factor of the push device.|
|» id|body|string|false|Unique identifier for the device generated by the device itself.|
|» metadata|body|object|false|Optional metadata object for this device. The metadata for a device may only be set by clients with push-admin privileges and will be used more extensively in the future with smart notifications.|
|» platform|body|string|false|Platform of the push device.|
|» push.recipient|body|[Recipient](#schemarecipient)|false|Push recipient details for a device.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|
|» formFactor|phone|
|» formFactor|tablet|
|» formFactor|desktop|
|» formFactor|tv|
|» formFactor|watch|
|» formFactor|car|
|» formFactor|embedded|
|» platform|ios|
|» platform|android|

> Example responses

> 2XX Response

```json
{
  "clientId": "string",
  "deviceSecret": "string",
  "formFactor": "phone",
  "id": "string",
  "metadata": {},
  "platform": "ios",
  "push.recipient": {
    "deviceToken": "string",
    "registrationToken": "string",
    "transportType": "apns"
  },
  "push.state": "Active"
}
```

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="register-a-device-for-receiving-push-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|[DeviceDetails](#schemadevicedetails)|
|default|Default|Error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

## Unregister matching devices for push notifications

<a id="opIdunregisterAllPushDevices"></a>

> Code samples

```bash
curl https://example.com/push/deviceRegistrations \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /push/deviceRegistrations`

Unregisters devices. All their subscriptions for receiving push notifications through channels will also be deleted.

<h3 id="unregister-matching-devices-for-push-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|query|string|false|Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.|
|clientId|query|string|false|Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="unregister-matching-devices-for-push-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|None|
|default|Default|Error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

## Get a device registration

<a id="opIdgetPushDeviceDetails"></a>

> Code samples

```bash
curl https://example.com/push/deviceRegistrations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /push/deviceRegistrations/{device_id}`

Get the full details of a device.

<h3 id="get-a-device-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|device_id|path|string|true|Device's ID.|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> 2XX Response

```json
{
  "clientId": "string",
  "deviceSecret": "string",
  "formFactor": "phone",
  "id": "string",
  "metadata": {},
  "platform": "ios",
  "push.recipient": {
    "deviceToken": "string",
    "registrationToken": "string",
    "transportType": "apns"
  },
  "push.state": "Active"
}
```

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="get-a-device-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|[DeviceDetails](#schemadevicedetails)|
|default|Default|Error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

## Update a device registration

<a id="opIdputPushDeviceDetails"></a>

> Code samples

```bash
curl https://example.com/push/deviceRegistrations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "clientId": "string",
    "deviceSecret": "string",
    "formFactor": "phone",
    "id": "string",
    "metadata": {},
    "platform": "ios",
    "push.recipient": {
      "clientId": "string",
      "deviceId": "string",
      "deviceToken": "string",
      "registrationToken": "string",
      "transportType": "apns"
    }
  }'
```

`PUT /push/deviceRegistrations/{device_id}`

Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.

> Body parameter

```json
{
  "clientId": "string",
  "deviceSecret": "string",
  "formFactor": "phone",
  "id": "string",
  "metadata": {},
  "platform": "ios",
  "push.recipient": {
    "clientId": "string",
    "deviceId": "string",
    "deviceToken": "string",
    "registrationToken": "string",
    "transportType": "apns"
  }
}
```

<h3 id="update-a-device-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|device_id|path|string|true|Device's ID.|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|
|body|body|[DeviceDetails](#schemadevicedetails)|false|none|
|» clientId|body|string|false|Optional trusted client identifier for the device.|
|» deviceSecret|body|string|false|Secret value for the device.|
|» formFactor|body|string|false|Form factor of the push device.|
|» id|body|string|false|Unique identifier for the device generated by the device itself.|
|» metadata|body|object|false|Optional metadata object for this device. The metadata for a device may only be set by clients with push-admin privileges and will be used more extensively in the future with smart notifications.|
|» platform|body|string|false|Platform of the push device.|
|» push.recipient|body|[Recipient](#schemarecipient)|false|Push recipient details for a device.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|
|» formFactor|phone|
|» formFactor|tablet|
|» formFactor|desktop|
|» formFactor|tv|
|» formFactor|watch|
|» formFactor|car|
|» formFactor|embedded|
|» platform|ios|
|» platform|android|

> Example responses

> 2XX Response

```json
{
  "clientId": "string",
  "deviceSecret": "string",
  "formFactor": "phone",
  "id": "string",
  "metadata": {},
  "platform": "ios",
  "push.recipient": {
    "deviceToken": "string",
    "registrationToken": "string",
    "transportType": "apns"
  },
  "push.state": "Active"
}
```

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="update-a-device-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|[DeviceDetails](#schemadevicedetails)|
|default|Default|Error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

## Unregister a single device for push notifications

<a id="opIdunregisterPushDevice"></a>

> Code samples

```bash
curl https://example.com/push/deviceRegistrations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /push/deviceRegistrations/{device_id}`

Unregisters a single device by its device ID. All its subscriptions for receiving push notifications through channels will also be deleted.

<h3 id="unregister-a-single-device-for-push-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|device_id|path|string|true|Device's ID.|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="unregister-a-single-device-for-push-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|None|
|default|Default|Error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

## Update a device registration

<a id="opIdpatchPushDeviceDetails"></a>

> Code samples

```bash
curl https://example.com/push/deviceRegistrations/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "clientId": "string",
    "deviceSecret": "string",
    "formFactor": "phone",
    "id": "string",
    "metadata": {},
    "platform": "ios",
    "push.recipient": {
      "clientId": "string",
      "deviceId": "string",
      "deviceToken": "string",
      "registrationToken": "string",
      "transportType": "apns"
    }
  }'
```

`PATCH /push/deviceRegistrations/{device_id}`

Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.

> Body parameter

```json
{
  "clientId": "string",
  "deviceSecret": "string",
  "formFactor": "phone",
  "id": "string",
  "metadata": {},
  "platform": "ios",
  "push.recipient": {
    "clientId": "string",
    "deviceId": "string",
    "deviceToken": "string",
    "registrationToken": "string",
    "transportType": "apns"
  }
}
```

<h3 id="update-a-device-registration-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|device_id|path|string|true|Device's ID.|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|
|body|body|[DeviceDetails](#schemadevicedetails)|false|none|
|» clientId|body|string|false|Optional trusted client identifier for the device.|
|» deviceSecret|body|string|false|Secret value for the device.|
|» formFactor|body|string|false|Form factor of the push device.|
|» id|body|string|false|Unique identifier for the device generated by the device itself.|
|» metadata|body|object|false|Optional metadata object for this device. The metadata for a device may only be set by clients with push-admin privileges and will be used more extensively in the future with smart notifications.|
|» platform|body|string|false|Platform of the push device.|
|» push.recipient|body|[Recipient](#schemarecipient)|false|Push recipient details for a device.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|
|» formFactor|phone|
|» formFactor|tablet|
|» formFactor|desktop|
|» formFactor|tv|
|» formFactor|watch|
|» formFactor|car|
|» formFactor|embedded|
|» platform|ios|
|» platform|android|

> Example responses

> 2XX Response

```json
{
  "clientId": "string",
  "deviceSecret": "string",
  "formFactor": "phone",
  "id": "string",
  "metadata": {},
  "platform": "ios",
  "push.recipient": {
    "deviceToken": "string",
    "registrationToken": "string",
    "transportType": "apns"
  },
  "push.state": "Active"
}
```

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="update-a-device-registration-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|[DeviceDetails](#schemadevicedetails)|
|default|Default|Error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

## Reset a registered device's update token

<a id="opIdupdatePushDeviceDetails"></a>

> Code samples

```bash
curl https://example.com/push/deviceRegistrations/string/resetUpdateToken \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /push/deviceRegistrations/{device_id}/resetUpdateToken`

Gets an updated device details object.

<h3 id="reset-a-registered-devices-update-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|device_id|path|string|true|Device's ID.|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> 2XX Response

```json
{
  "clientId": "string",
  "deviceSecret": "string",
  "formFactor": "phone",
  "id": "string",
  "metadata": {},
  "platform": "ios",
  "push.recipient": {
    "deviceToken": "string",
    "registrationToken": "string",
    "transportType": "apns"
  },
  "push.state": "Active"
}
```

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="reset-a-registered-devices-update-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|[DeviceDetails](#schemadevicedetails)|
|default|Default|Error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

## Publish a push notification to device(s)

<a id="opIdpublishPushNotificationToDevices"></a>

> Code samples

```bash
curl https://example.com/push/publish \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "push": {
      "apns": {
        "notification": {
          "body": "string",
          "collapseKey": "string",
          "icon": "string",
          "sound": "string",
          "title": "string"
        }
      },
      "data": "string",
      "fcm": {
        "notification": {
          "body": "string",
          "collapseKey": "string",
          "icon": "string",
          "sound": "string",
          "title": "string"
        }
      },
      "notification": {
        "body": "string",
        "collapseKey": "string",
        "icon": "string",
        "sound": "string",
        "title": "string"
      },
      "web": {
        "notification": {
          "body": "string",
          "collapseKey": "string",
          "icon": "string",
          "sound": "string",
          "title": "string"
        }
      }
    },
    "recipient": {
      "clientId": "string",
      "deviceId": "string",
      "deviceToken": "string",
      "registrationToken": "string",
      "transportType": "apns"
    }
  }'
```

`POST /push/publish`

A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.

> Body parameter

```json
{
  "push": {
    "apns": {
      "notification": {
        "body": "string",
        "collapseKey": "string",
        "icon": "string",
        "sound": "string",
        "title": "string"
      }
    },
    "data": "string",
    "fcm": {
      "notification": {
        "body": "string",
        "collapseKey": "string",
        "icon": "string",
        "sound": "string",
        "title": "string"
      }
    },
    "notification": {
      "body": "string",
      "collapseKey": "string",
      "icon": "string",
      "sound": "string",
      "title": "string"
    },
    "web": {
      "notification": {
        "body": "string",
        "collapseKey": "string",
        "icon": "string",
        "sound": "string",
        "title": "string"
      }
    }
  },
  "recipient": {
    "clientId": "string",
    "deviceId": "string",
    "deviceToken": "string",
    "registrationToken": "string",
    "transportType": "apns"
  }
}
```

<h3 id="publish-a-push-notification-to-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|
|body|body|object|false|none|
|» push|body|[Push](#schemapush)|false|none|
|» recipient|body|[Recipient](#schemarecipient)|true|Push recipient details for a device.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="publish-a-push-notification-to-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|None|
|default|Default|Error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

<h1 id="platform-api-stats">Stats</h1>

## Retrieve usage statistics for an application

<a id="opIdgetStats"></a>

> Code samples

```bash
curl https://example.com/stats \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /stats`

The Ably system can be queried to obtain usage statistics for a given application, and results are provided aggregated across all channels in use in the application in the specified period. Stats may be used to track usage against account quotas.

<h3 id="retrieve-usage-statistics-for-an-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string|false|none|
|limit|query|integer|false|none|
|end|query|string|false|none|
|direction|query|string|false|none|
|unit|query|string|false|Specifies the unit of aggregation in the returned results.|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|forwards|
|direction|backwards|
|unit|minute|
|unit|hour|
|unit|day|
|unit|month|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> 2XX Response

```json
{}
```

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="retrieve-usage-statistics-for-an-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|Inline|
|default|Default|Error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, bearerAuth
</aside>

## Get the service time

<a id="opIdgetTime"></a>

> Code samples

```bash
curl https://example.com/time \
  -H 'Accept: application/json'
```

`GET /time`

This returns the service time in milliseconds since the epoch.

<h3 id="get-the-service-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Ably-Version|header|string|false|The version of the API you wish to use.|
|format|query|string|false|The response format you would like|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|
|format|msgpack|
|format|html|

> Example responses

> 2XX Response

```json
[
  0
]
```

> default Response

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

<h3 id="get-the-service-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|OK|Inline|
|default|Default|Error|[Error](#schemaerror)|

<h3 id="get-the-service-time-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|default|x-ably-errorcode|integer||The error code.|
|default|x-ably-errormessage|string||The error message.|
|default|x-ably-serverid|string||The ID for the server communicated with.|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ChannelDetails">ChannelDetails</h2>
<!-- backwards compatibility -->
<a id="schemachanneldetails"></a>
<a id="schema_ChannelDetails"></a>
<a id="tocSchanneldetails"></a>
<a id="tocschanneldetails"></a>

```json
{
  "channelId": "string",
  "isGlobalMaster": true,
  "region": "string",
  "status": {
    "isActive": true,
    "occupancy": {
      "presenceConnections": 0,
      "presenceMembers": 0,
      "presenceSubscribers": 0,
      "publishers": 0,
      "subscribers": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelId|string|true|none|The required name of the channel including any qualifier, if any.|
|isGlobalMaster|boolean|false|none|In events relating to the activity of a channel in a specific region, this optionally identifies whether or not that region is responsible for global coordination of the channel.|
|region|string|false|none|In events relating to the activity of a channel in a specific region, this optionally identifies the region.|
|status|[ChannelStatus](#schemachannelstatus)|false|none|A ChannelStatus instance.|

<h2 id="tocS_ChannelStatus">ChannelStatus</h2>
<!-- backwards compatibility -->
<a id="schemachannelstatus"></a>
<a id="schema_ChannelStatus"></a>
<a id="tocSchannelstatus"></a>
<a id="tocschannelstatus"></a>

```json
{
  "isActive": true,
  "occupancy": {
    "presenceConnections": 0,
    "presenceMembers": 0,
    "presenceSubscribers": 0,
    "publishers": 0,
    "subscribers": 0
  }
}
```

A ChannelStatus instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isActive|boolean|true|none|A required boolean value indicating whether the channel that is the subject of the event is active. For events indicating regional activity of a channel this indicates activity in that region, not global activity.|
|occupancy|[Occupancy](#schemaoccupancy)|false|none|An Occupancy instance indicating the occupancy of a channel. For events indicating regional activity of a channel this indicates activity in that region, not global activity.|

<h2 id="tocS_DeviceDetails">DeviceDetails</h2>
<!-- backwards compatibility -->
<a id="schemadevicedetails"></a>
<a id="schema_DeviceDetails"></a>
<a id="tocSdevicedetails"></a>
<a id="tocsdevicedetails"></a>

```json
{
  "clientId": "string",
  "deviceSecret": "string",
  "formFactor": "phone",
  "id": "string",
  "metadata": {},
  "platform": "ios",
  "push.recipient": {
    "clientId": "string",
    "deviceId": "string",
    "deviceToken": "string",
    "registrationToken": "string",
    "transportType": "apns"
  },
  "push.state": "Active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|none|Optional trusted client identifier for the device.|
|deviceSecret|string|false|none|Secret value for the device.|
|formFactor|string|false|none|Form factor of the push device.|
|id|string|false|none|Unique identifier for the device generated by the device itself.|
|metadata|object|false|none|Optional metadata object for this device. The metadata for a device may only be set by clients with push-admin privileges and will be used more extensively in the future with smart notifications.|
|platform|string|false|none|Platform of the push device.|
|push.recipient|[Recipient](#schemarecipient)|false|none|Push recipient details for a device.|
|push.state|string|false|read-only|the current state of the push device.|

#### Enumerated Values

|Property|Value|
|---|---|
|formFactor|phone|
|formFactor|tablet|
|formFactor|desktop|
|formFactor|tv|
|formFactor|watch|
|formFactor|car|
|formFactor|embedded|
|platform|ios|
|platform|android|
|push.state|Active|
|push.state|Failing|
|push.state|Failed|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "href": "string",
  "message": "string",
  "serverId": "string",
  "statusCode": 0
}
```

Returned error from failed REST.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|Error code.|
|href|string|false|none|Link to help with error.|
|message|string|false|none|Message explaining the error's cause.|
|serverId|string|false|none|Server ID with which error was encountered.|
|statusCode|integer|false|none|Status error code.|

<h2 id="tocS_Extras">Extras</h2>
<!-- backwards compatibility -->
<a id="schemaextras"></a>
<a id="schema_Extras"></a>
<a id="tocSextras"></a>
<a id="tocsextras"></a>

```json
{
  "push": {
    "apns": {
      "notification": {
        "body": "string",
        "collapseKey": "string",
        "icon": "string",
        "sound": "string",
        "title": "string"
      }
    },
    "data": "string",
    "fcm": {
      "notification": {
        "body": "string",
        "collapseKey": "string",
        "icon": "string",
        "sound": "string",
        "title": "string"
      }
    },
    "notification": {
      "body": "string",
      "collapseKey": "string",
      "icon": "string",
      "sound": "string",
      "title": "string"
    },
    "web": {
      "notification": {
        "body": "string",
        "collapseKey": "string",
        "icon": "string",
        "sound": "string",
        "title": "string"
      }
    }
  }
}
```

Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|push|[Push](#schemapush)|false|none|none|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "clientId": "string",
  "connectionId": "string",
  "data": "string",
  "encoding": "string",
  "extras": {
    "push": {
      "apns": {
        "notification": {
          "body": "string",
          "collapseKey": "string",
          "icon": "string",
          "sound": "string",
          "title": "string"
        }
      },
      "data": "string",
      "fcm": {
        "notification": {
          "body": "string",
          "collapseKey": "string",
          "icon": "string",
          "sound": "string",
          "title": "string"
        }
      },
      "notification": {
        "body": "string",
        "collapseKey": "string",
        "icon": "string",
        "sound": "string",
        "title": "string"
      },
      "web": {
        "notification": {
          "body": "string",
          "collapseKey": "string",
          "icon": "string",
          "sound": "string",
          "title": "string"
        }
      }
    }
  },
  "id": "string",
  "name": "string",
  "timestamp": 0
}
```

Message object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|none|The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) of the publisher of this message.|
|connectionId|string|false|none|The connection ID of the publisher of this message.|
|data|string|false|none|The string encoded payload, with the encoding specified below.|
|encoding|string|false|none|This will typically be empty as all messages received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload.|
|extras|[Extras](#schemaextras)|false|none|Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra.|
|id|string|false|read-only|A Unique ID that can be specified by the publisher for [idempotent publishing](https://www.ably.io/documentation/rest/messages#idempotent).|
|name|string|false|none|The event name, if provided.|
|timestamp|integer(int64)|false|read-only|Timestamp when the message was received by the Ably, as milliseconds since the epoch.|

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "body": "string",
  "collapseKey": "string",
  "icon": "string",
  "sound": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|Text below title on the expanded notification.|
|collapseKey|string|false|none|Platform-specific, used to group notifications together.|
|icon|string|false|none|Platform-specific icon for the notification.|
|sound|string|false|none|Platform-specific sound for the notification.|
|title|string|false|none|Title to display at the notification.|

<h2 id="tocS_Occupancy">Occupancy</h2>
<!-- backwards compatibility -->
<a id="schemaoccupancy"></a>
<a id="schema_Occupancy"></a>
<a id="tocSoccupancy"></a>
<a id="tocsoccupancy"></a>

```json
{
  "presenceConnections": 0,
  "presenceMembers": 0,
  "presenceSubscribers": 0,
  "publishers": 0,
  "subscribers": 0
}
```

An Occupancy instance indicating the occupancy of a channel. For events indicating regional activity of a channel this indicates activity in that region, not global activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|presenceConnections|integer|false|none|The number of connections that are authorised to enter members into the presence channel.|
|presenceMembers|integer|false|none|The number of members currently entered into the presence channel.|
|presenceSubscribers|integer|false|none|The number of connections that are authorised to subscribe to presence messages.|
|publishers|integer|false|none|The number of connections attached to the channel that are authorised to publish.|
|subscribers|integer|false|none|The number of connections attached that are authorised to subscribe to messages.|

<h2 id="tocS_PresenceMessage">PresenceMessage</h2>
<!-- backwards compatibility -->
<a id="schemapresencemessage"></a>
<a id="schema_PresenceMessage"></a>
<a id="tocSpresencemessage"></a>
<a id="tocspresencemessage"></a>

```json
{
  "action": "ABSENT",
  "clientId": "string",
  "connectionId": "string",
  "data": "string",
  "encoding": "string",
  "extras": {
    "push": {
      "apns": {
        "notification": {
          "body": "string",
          "collapseKey": "string",
          "icon": "string",
          "sound": "string",
          "title": "string"
        }
      },
      "data": "string",
      "fcm": {
        "notification": {
          "body": "string",
          "collapseKey": "string",
          "icon": "string",
          "sound": "string",
          "title": "string"
        }
      },
      "notification": {
        "body": "string",
        "collapseKey": "string",
        "icon": "string",
        "sound": "string",
        "title": "string"
      },
      "web": {
        "notification": {
          "body": "string",
          "collapseKey": "string",
          "icon": "string",
          "sound": "string",
          "title": "string"
        }
      }
    }
  },
  "id": "string",
  "timestamp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|read-only|The event signified by a PresenceMessage.|
|clientId|string|false|none|The client ID of the publisher of this presence update.|
|connectionId|string|false|none|The connection ID of the publisher of this presence update.|
|data|string|false|none|The presence update payload, if provided.|
|encoding|string|false|none|This will typically be empty as all presence updates received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload.|
|extras|[Extras](#schemaextras)|false|none|Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra.|
|id|string|false|read-only|Unique ID assigned by Ably to this presence update.|
|timestamp|integer(int64)|false|read-only|Timestamp when the presence update was received by Ably, as milliseconds since the epoch.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|ABSENT|
|action|PRESENT|
|action|ENTER|
|action|LEAVE|
|action|UPDATE|

<h2 id="tocS_Push">Push</h2>
<!-- backwards compatibility -->
<a id="schemapush"></a>
<a id="schema_Push"></a>
<a id="tocSpush"></a>
<a id="tocspush"></a>

```json
{
  "apns": {
    "notification": {
      "body": "string",
      "collapseKey": "string",
      "icon": "string",
      "sound": "string",
      "title": "string"
    }
  },
  "data": "string",
  "fcm": {
    "notification": {
      "body": "string",
      "collapseKey": "string",
      "icon": "string",
      "sound": "string",
      "title": "string"
    }
  },
  "notification": {
    "body": "string",
    "collapseKey": "string",
    "icon": "string",
    "sound": "string",
    "title": "string"
  },
  "web": {
    "notification": {
      "body": "string",
      "collapseKey": "string",
      "icon": "string",
      "sound": "string",
      "title": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apns|object|false|none|Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)|
|data|string|false|none|Arbitrary [key-value string-to-string payload](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example).|
|fcm|object|false|none|Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)|
|notification|[Notification](#schemanotification)|false|none|none|
|web|object|false|none|Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)|

<h2 id="tocS_Recipient">Recipient</h2>
<!-- backwards compatibility -->
<a id="schemarecipient"></a>
<a id="schema_Recipient"></a>
<a id="tocSrecipient"></a>
<a id="tocsrecipient"></a>

```json
{
  "clientId": "string",
  "deviceId": "string",
  "deviceToken": "string",
  "registrationToken": "string",
  "transportType": "apns"
}
```

Push recipient details for a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|write-only|Client ID of recipient|
|deviceId|string|false|write-only|Client ID of recipient|
|deviceToken|string|false|none|when using APNs, specifies the required device token.|
|registrationToken|string|false|none|when using GCM or FCM, specifies the required registration token.|
|transportType|string|false|none|Defines which push platform is being used.|

#### Enumerated Values

|Property|Value|
|---|---|
|transportType|apns|
|transportType|fcm|
|transportType|gcm|

<h2 id="tocS_SignedTokenRequest">SignedTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignedtokenrequest"></a>
<a id="schema_SignedTokenRequest"></a>
<a id="tocSsignedtokenrequest"></a>
<a id="tocssignedtokenrequest"></a>

```json
{
  "capability": {
    "channel1": [
      "publish",
      "subscribe"
    ]
  },
  "clientId": "string",
  "keyName": "xVLyHw.LMJZxw",
  "nonce": "string",
  "timestamp": 0,
  "mac": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capability|object|true|none|The [capabilities](https://www.ably.io/documentation/core-features/authentication#capabilities-explained) (i.e. a set of channel names/namespaces and, for each, a set of operations) which should be a subset of the set of capabilities associated with the key specified in keyName.|
|clientId|string|false|none|The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) to be assosciated with the token. Can be set to * to allow for any client ID to be used.|
|keyName|string|true|none|Name of the key used for the TokenRequest. The keyName comprises of the app ID and key ID on an API Key.|
|nonce|string|true|none|An unquoted, un-escaped random string of at least 16 characters. Used to ensure the Ably TokenRequest cannot be reused.|
|timestamp|integer|true|none|Time of creation of the Ably TokenRequest.|
|mac|string|true|none|A signature, generated as an HMAC of each of the above components, using the key secret value.|

<h2 id="tocS_TokenDetails">TokenDetails</h2>
<!-- backwards compatibility -->
<a id="schematokendetails"></a>
<a id="schema_TokenDetails"></a>
<a id="tocStokendetails"></a>
<a id="tocstokendetails"></a>

```json
{
  "capability": "string",
  "expires": 0,
  "issued": 0,
  "keyName": "string",
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capability|string|false|none|Regular expression representation of the capabilities of the token.|
|expires|integer|false|none|Timestamp of token expiration.|
|issued|integer|false|none|Timestamp of token creation.|
|keyName|string|false|none|Name of the key used to create the token|
|token|string|false|none|The Ably Token.|

<h2 id="tocS_TokenRequest">TokenRequest</h2>
<!-- backwards compatibility -->
<a id="schematokenrequest"></a>
<a id="schema_TokenRequest"></a>
<a id="tocStokenrequest"></a>
<a id="tocstokenrequest"></a>

```json
{
  "capability": {
    "channel1": [
      "publish",
      "subscribe"
    ]
  },
  "clientId": "string",
  "keyName": "xVLyHw.LMJZxw",
  "nonce": "string",
  "timestamp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capability|object|true|none|The [capabilities](https://www.ably.io/documentation/core-features/authentication#capabilities-explained) (i.e. a set of channel names/namespaces and, for each, a set of operations) which should be a subset of the set of capabilities associated with the key specified in keyName.|
|clientId|string|false|none|The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) to be assosciated with the token. Can be set to * to allow for any client ID to be used.|
|keyName|string|true|none|Name of the key used for the TokenRequest. The keyName comprises of the app ID and key ID on an API Key.|
|nonce|string|true|none|An unquoted, un-escaped random string of at least 16 characters. Used to ensure the Ably TokenRequest cannot be reused.|
|timestamp|integer|true|none|Time of creation of the Ably TokenRequest.|
