<h1 id="owncast-apis">Owncast APIs v0.2.4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Internal
The APIs required to make the Owncast web interface and internal functionality work. These APIs will never reach stability and will always change as Owncast features and functionality change. This means these endpoints are not good options to build your own tooling and features on top of. You can, however, of course can if that risk is acceptable to you.

Admin
The APIs used to configure the Owncast server, as well as power the web admin interface. These APIs are protected by the admin password, using HTTP Basic authentication. They should not be used by external tools or integrations as it would require you to give your admin password to a third party.

Base URLs:

* <a href="http://localhost:8080/api">http://localhost:8080/api</a> - Localhost port 8080

Email: <a href="mailto:gabek@real-ity.com">Gabe Kangas</a> 
Web: <a href="http://owncast.online">Gabe Kangas</a> 
License: <a href="https://github.com/owncast/owncast/blob/develop/LICENSE">MIT</a>

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="owncast-apis-external">External</h1>

These APIs are specifically exposed for building third party applications or tooling. They use auth tokens to authenticate and are designed to be stable and reliable.

## Send a system message to the chat

<a id="opIdSendSystemMessage"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/chat/system \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "body": "string"
  }'
```

`POST /integrations/chat/system`

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="send-a-system-message-to-the-chat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessageEvent](#schemamessageevent)|false|The content of the system message|
|» body|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> 500 Response

```json
{
  "error": "string"
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="send-a-system-message-to-the-chat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message sent successfully|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Unauthorized|Inline|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Send a system message to a single client

<a id="opIdSendSystemMessageToConnectedClient"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/chat/system/client/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "timestamp": "string",
    "type": "string",
    "id": "string",
    "body": "string"
  }'
```

`POST /integrations/chat/system/client/{clientId}`

> Body parameter

```json
{
  "timestamp": "string",
  "type": "string",
  "id": "string",
  "body": "string"
}
```

<h3 id="send-a-system-message-to-a-single-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientId|path|integer|true|The ID of the specified client|
|body|body|[SystemMessage](#schemasystemmessage)|false|none|
|» timestamp|body|string|false|none|
|» type|body|string|false|none|
|» id|body|string|false|none|
|» body|body|string|false|none|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> 500 Response

```json
{
  "error": "string"
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="send-a-system-message-to-a-single-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Unauthorized|Inline|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Send a user message to chat

<a id="opIdSendUserMessage"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/chat/user \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /integrations/chat/user`

<aside class="warning">
This operation is deprecated
</aside>

> Example responses

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="send-a-user-message-to-chat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Send a message to chat as a specific 3rd party bot/integration based on its access token

<a id="opIdSendIntegrationChatMessage"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/chat/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "body": "string"
  }'
```

`POST /integrations/chat/send`

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="send-a-message-to-chat-as-a-specific-3rd-party-botintegration-based-on-its-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessageEvent](#schemamessageevent)|false|none|
|» body|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> 500 Response

```json
{
  "error": "string"
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="send-a-message-to-chat-as-a-specific-3rd-party-botintegration-based-on-its-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message sent successfully|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Unauthorized|Inline|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Send a user action to chat

<a id="opIdSendChatAction"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/chat/action \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "body": "string"
  }'
```

`POST /integrations/chat/action`

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="send-a-user-action-to-chat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessageEvent](#schemamessageevent)|false|none|
|» body|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> 500 Response

```json
{
  "error": "string"
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="send-a-user-action-to-chat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Action sent successfully|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Unauthorized|Inline|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Hide chat message

<a id="opIdExternalUpdateMessageVisibility"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/chat/messagevisibility \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "idArray": [
      "string"
    ],
    "visible": true
  }'
```

`POST /integrations/chat/messagevisibility`

> Body parameter

```json
{
  "idArray": [
    "string"
  ],
  "visible": true
}
```

<h3 id="hide-chat-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessageVisibilityUpdate](#schemamessagevisibilityupdate)|false|none|
|» idArray|body|[string]|false|none|
|» visible|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="hide-chat-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Messages updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get the server's status

<a id="opIdExternalGetStatus"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/status`

> Example responses

> 200 Response

```json
{
  "serverTime": "string",
  "lastConnectTime": "string",
  "lastDisconnectTime": "string",
  "versionNumber": "string",
  "viewerCount": 0,
  "online": true,
  "streamTitle": "string"
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-the-servers-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status|[Status](#schemastatus)|
|401|Unauthorized|Basic auth failure|Inline|
|404|Not Found|Not found|None|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Stream title

<a id="opIdExternalSetStreamTitle"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/streamtitle \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": "string"
  }'
```

`POST /integrations/streamtitle`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="stream-title-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="stream-title-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stream title has been changed|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get chat history

<a id="opIdExternalGetChatMessages"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/chat \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/chat`

> Example responses

> 200 Response

```json
[
  {
    "timestamp": "string",
    "type": "string",
    "id": "string",
    "user": {
      "createdAt": "string",
      "disabledAt": "string",
      "nameChangedAt": "string",
      "id": "string",
      "displayName": "string",
      "previousNames": [
        "string"
      ],
      "scopes": [
        "string"
      ],
      "authProviders": [
        "string"
      ],
      "displayColor": 0,
      "isBot": true,
      "authenticated": true
    },
    "hiddenAt": "string",
    "clientId": 0,
    "body": "string"
  }
]
```

> 501 Response

```json
{
  "error": "string"
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-chat-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of chat messages|[ChatMessages](#schemachatmessages)|
|401|Unauthorized|Unauthorized|Inline|
|501|Not Implemented|Not Implemented|[Error](#schemaerror)|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Connected clients

<a id="opIdExternalGetConnectedChatClients"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/clients \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/clients`

> Example responses

> 200 Response

```json
[
  {
    "connectedAt": "1970-01-01T00:00:00Z",
    "user": {
      "createdAt": "string",
      "disabledAt": "string",
      "nameChangedAt": "string",
      "id": "string",
      "displayName": "string",
      "previousNames": [
        "string"
      ],
      "scopes": [
        "string"
      ],
      "authProviders": [
        "string"
      ],
      "displayColor": 0,
      "isBot": true,
      "authenticated": true
    },
    "geo": {
      "countryCode": "string",
      "regionName": "string",
      "timeZone": "string"
    },
    "userAgent": "string",
    "messageCount": 0
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="connected-clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of chat clients|[ChatClients](#schemachatclients)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get a user's details

<a id="opIdExternalGetUserDetails"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/moderation/chat/user/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/moderation/chat/user/{userId}`

<h3 id="get-a-users-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The ID of the user to find|

> Example responses

> 200 Response

```json
{
  "user": {
    "createdAt": "string",
    "disabledAt": "string",
    "nameChangedAt": "string",
    "id": "string",
    "displayName": "string",
    "previousNames": [
      "string"
    ],
    "scopes": [
      "string"
    ],
    "authProviders": [
      "string"
    ],
    "displayColor": 0,
    "isBot": true,
    "authenticated": true,
    "disabledReason": "string"
  },
  "connectedClients": [
    {
      "connectedAt": "1970-01-01T00:00:00Z",
      "userAgent": "string",
      "geo": "string",
      "id": 0,
      "messageCount": 0
    }
  ],
  "messages": [
    {
      "timestamp": "string",
      "type": "string",
      "id": "string",
      "user": {
        "createdAt": "string",
        "disabledAt": "string",
        "nameChangedAt": "string",
        "id": "string",
        "displayName": "string",
        "previousNames": [
          "string"
        ],
        "scopes": [
          "string"
        ],
        "authProviders": [
          "string"
        ],
        "displayColor": 0,
        "isBot": true,
        "authenticated": true
      },
      "hiddenAt": "string",
      "clientId": 0,
      "body": "string"
    }
  ]
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-a-users-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User information|[ModerationUserDetails](#schemamoderationuserdetails)|
|401|Unauthorized|Basic auth failure|Inline|
|404|Not Found|Not found|None|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="owncast-apis-internal">Internal</h1>

These APIs are used internally for the operation of the application. They should not be used by third party clients or tooling, as they may require sharing your admin password, and additionally may change at any time.

## Get the status of the server

<a id="opIdGetStatus"></a>

> Code samples

```bash
curl http://localhost:8080/status \
  -H 'Accept: application/json'
```

`GET /status`

> Example responses

> 200 Response

```json
{
  "serverTime": "string",
  "lastConnectTime": "string",
  "lastDisconnectTime": "string",
  "versionNumber": "string",
  "viewerCount": 0,
  "online": true,
  "streamTitle": "string"
}
```

<h3 id="get-the-status-of-the-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of custom emojis supported in the chat

<a id="opIdGetCustomEmojiList"></a>

> Code samples

```bash
curl http://localhost:8080/emoji \
  -H 'Accept: application/json'
```

`GET /emoji`

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "url": "string"
  }
]
```

> 500 Response

```json
{
  "error": "string"
}
```

<h3 id="get-list-of-custom-emojis-supported-in-the-chat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of valid emojis|[Emojis](#schemaemojis)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a list of chat messages

<a id="opIdGetChatMessages"></a>

> Code samples

```bash
curl 'http://localhost:8080/chat?accessToken=string' \
  -H 'Accept: application/json'
```

`GET /chat`

<h3 id="gets-a-list-of-chat-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessToken|query|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "timestamp": "string",
    "type": "string",
    "id": "string",
    "user": {
      "createdAt": "string",
      "disabledAt": "string",
      "nameChangedAt": "string",
      "id": "string",
      "displayName": "string",
      "previousNames": [
        "string"
      ],
      "scopes": [
        "string"
      ],
      "authProviders": [
        "string"
      ],
      "displayColor": 0,
      "isBot": true,
      "authenticated": true
    },
    "hiddenAt": "string",
    "clientId": 0,
    "body": "string"
  }
]
```

> 501 Response

```json
{
  "error": "string"
}
```

<h3 id="gets-a-list-of-chat-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of chat messages|[ChatMessages](#schemachatmessages)|
|401|Unauthorized|Unauthorized|Inline|
|501|Not Implemented|Not Implemented|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Resolves a gate session or registers an anonymous chat user

<a id="opIdRegisterAnonymousChatUser"></a>

> Code samples

```bash
curl http://localhost:8080/chat/register \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "displayName": "string"
  }'
```

`POST /chat/register`

Returns the existing user's identity and access token when a verified
auth.gate session is present. Otherwise creates an anonymous chat user.
A session whose user is missing or disabled is rejected without creating
an anonymous user. The proposed display name is ignored for gate sessions.


> Body parameter

```json
{
  "displayName": "string"
}
```

<h3 id="resolves-a-gate-session-or-registers-an-anonymous-chat-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Forwarded-User|header|string|false|none|
|body|body|object|false|The display name of the new user|
|» displayName|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "accessToken": "string",
  "displayName": "string"
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> 403 Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="resolves-a-gate-session-or-registers-an-anonymous-chat-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Chat user information (existing gate user or newly registered anonymous user)|[AnonymousUser](#schemaanonymoususer)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|403|Forbidden|The verified gate session has no resolvable user or its user is disabled|[BaseAPIResponse](#schemabaseapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Update chat message visibility

<a id="opIdUpdateMessageVisibility"></a>

> Code samples

```bash
curl 'http://localhost:8080/chat/messagevisibility?accessToken=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "idArray": [
      "string"
    ],
    "visible": true
  }'
```

`POST /chat/messagevisibility`

> Body parameter

```json
{
  "idArray": [
    "string"
  ],
  "visible": true
}
```

<h3 id="update-chat-message-visibility-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessToken|query|string|true|none|
|body|body|[MessageVisibilityUpdate](#schemamessagevisibilityupdate)|false|none|
|» idArray|body|[string]|false|none|
|» visible|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-chat-message-visibility-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message visibility updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Unauthorized|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Enable/disable a user

<a id="opIdUpdateUserEnabled"></a>

> Code samples

```bash
curl 'http://localhost:8080/chat/users/setenabled?accessToken=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "string",
    "enabled": true
  }'
```

`POST /chat/users/setenabled`

> Body parameter

```json
{
  "userId": "string",
  "enabled": true
}
```

<h3 id="enabledisable-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessToken|query|string|true|none|
|body|body|object|false|none|
|» userId|body|string|false|none|
|» enabled|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="enabledisable-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User status has been updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Unauthorized|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the web config

<a id="opIdGetWebConfig"></a>

> Code samples

```bash
curl http://localhost:8080/config \
  -H 'Accept: application/json'
```

`GET /config`

> Example responses

> 200 Response

```json
{
  "appearanceVariables": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "customStyles": "string",
  "streamTitle": "string",
  "offlineMessage": "string",
  "logo": "string",
  "version": "string",
  "socketHostOverride": "string",
  "extraPageContent": "string",
  "summary": "string",
  "tags": [
    "string"
  ],
  "socialHandles": [
    {
      "platform": "string",
      "url": "string",
      "icon": "string"
    }
  ],
  "externalActions": [
    {
      "url": "string",
      "html": "string",
      "title": "string",
      "description": "string",
      "icon": "string",
      "color": "string",
      "openExternally": true
    }
  ],
  "notifications": {
    "browser": {
      "publicKey": "string",
      "enabled": true
    }
  },
  "federation": {
    "account": "string",
    "followerCount": 0,
    "enabled": true,
    "hideFollowersTab": true
  },
  "maxSocketPayloadSize": 0,
  "hideViewerCount": true,
  "chatDisabled": true,
  "chatRequireAuthentication": true,
  "nsfw": true,
  "autoplay": "off",
  "authentication": {
    "indieAuthEnabled": true
  }
}
```

> 500 Response

```json
{
  "error": "string"
}
```

<h3 id="get-the-web-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The current web config|[WebConfig](#schemawebconfig)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the YP protocol data

<a id="opIdGetYPResponse"></a>

> Code samples

```bash
curl http://localhost:8080/yp \
  -H 'Accept: application/json'
```

`GET /yp`

> Example responses

> 200 Response

```json
{
  "lastConnectTime": "string",
  "name": "string",
  "description": "string",
  "streamTitle": "string",
  "logo": "string",
  "tags": [
    "string"
  ],
  "social": [
    {
      "platform": "string",
      "url": "string",
      "icon": "string"
    }
  ],
  "viewerCount": 0,
  "overallMaxViewerCount": 0,
  "sessionMaxViewerCount": 0,
  "nsfw": true,
  "online": true
}
```

<h3 id="get-the-yp-protocol-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The current YP protocol configuration|[YPDetails](#schemaypdetails)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all social platforms

<a id="opIdGetAllSocialPlatforms"></a>

> Code samples

```bash
curl http://localhost:8080/socialplatforms \
  -H 'Accept: application/json'
```

`GET /socialplatforms`

> Example responses

> 200 Response

```json
{
  "property1": {
    "platform": "string",
    "url": "string",
    "icon": "string"
  },
  "property2": {
    "platform": "string",
    "url": "string",
    "icon": "string"
  }
}
```

> 500 Response

```json
{
  "error": "string"
}
```

<h3 id="get-all-social-platforms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of social platforms|Inline|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<h3 id="get-all-social-platforms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SocialHandle](#schemasocialhandle)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of video variants available

<a id="opIdGetVideoStreamOutputVariants"></a>

> Code samples

```bash
curl http://localhost:8080/video/variants \
  -H 'Accept: application/json'
```

`GET /video/variants`

> Example responses

> 200 Response

```json
[
  {
    "index": 0,
    "name": "string"
  }
]
```

<h3 id="get-a-list-of-video-variants-available-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of available video variants|Inline|

<h3 id="get-a-list-of-video-variants-available-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[VideoVariant](#schemavideovariant)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Tell the backend you're an active viewer

<a id="opIdPing"></a>

> Code samples

```bash
curl http://localhost:8080/ping
```

`GET /ping`

<h3 id="tell-the-backend-youre-an-active-viewer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Added as an active viewer|None|

<aside class="success">
This operation does not require authentication
</aside>

## Request remote follow

<a id="opIdRemoteFollow"></a>

> Code samples

```bash
curl http://localhost:8080/remotefollow \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "account": "string"
  }'
```

`POST /remotefollow`

> Body parameter

```json
{
  "account": "string"
}
```

<h3 id="request-remote-follow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» account|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "redirectUrl": "string"
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="request-remote-follow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Contains redirect URL remote follow follow|Inline|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|

<h3 id="request-remote-follow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|redirectUrl|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the list of followers

<a id="opIdGetFollowers"></a>

> Code samples

```bash
curl http://localhost:8080/followers \
  -H 'Accept: application/json'
```

`GET /followers`

<h3 id="gets-the-list-of-followers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|none|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "results": [
    {
      "link": "string",
      "name": "string",
      "username": "string",
      "image": "string",
      "timestamp": "string",
      "disabledAt": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="gets-the-list-of-followers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated follower count|[PaginatedFollowers](#schemapaginatedfollowers)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## CMCD collector accepting a report as a query parameter

<a id="opIdReportCmcdQuery"></a>

> Code samples

```bash
curl http://localhost:8080/metrics/cmcd \
  -H 'Accept: application/json'
```

`GET /metrics/cmcd`

<h3 id="cmcd-collector-accepting-a-report-as-a-query-parameter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CMCD|query|string|false|CMCD report serialized as a CMCD dictionary payload|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="cmcd-collector-accepting-a-report-as-a-query-parameter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Report accepted|None|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## CMCD collector accepting event and response mode playback reports

<a id="opIdReportCmcd"></a>

> Code samples

```bash
curl http://localhost:8080/metrics/cmcd \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "v": 0,
    "sid": "string",
    "e": "string",
    "ts": 0,
    "sta": "string",
    "mtp": 0,
    "ltc": 0,
    "bs": true,
    "ec": "string",
    "ttlb": 0,
    "sn": 0
  }'
```

`POST /metrics/cmcd`

Reporting modes are defined by CMCD v2 (CTA-5004-A). CMCD v1 has no reporting modes, v1 request mode data is collected directly from the media requests it decorates. The collector maps any known CMCD keys it receives and does not reject reports based on their version.

> Body parameter

```json
{
  "v": 0,
  "sid": "string",
  "e": "string",
  "ts": 0,
  "sta": "string",
  "mtp": 0,
  "ltc": 0,
  "bs": true,
  "ec": "string",
  "ttlb": 0,
  "sn": 0
}
```

<h3 id="cmcd-collector-accepting-event-and-response-mode-playback-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CmcdReportBody](#schemacmcdreportbody)|false|A single CMCD report, or an array of batched reports, keyed by CMCD key names|
|» *oneOf*|body|[CmcdReport](#schemacmcdreport)|false|A CMCD v2 (CTA-5004-A) report keyed by CMCD key names. Any valid CMCD key is accepted; the keys below are the ones consumed.|
|» *oneOf*|body|[[CmcdReport](#schemacmcdreport)]|false|none|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="cmcd-collector-accepting-event-and-response-mode-playback-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Report accepted|None|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Save video playback metrics for future video health recording

<a id="opIdReportPlaybackMetrics"></a>

> Code samples

```bash
curl http://localhost:8080/metrics/playback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "bandwidth": 0,
    "latency": 0,
    "errors": 0,
    "downloadDuration": 0,
    "qualityVariantChanges": 0
  }'
```

`POST /metrics/playback`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated in favor of the CMCD collector at /metrics/cmcd, which accepts standard CMCD v2 (CTA-5004-A) reports. This endpoint remains functional for existing clients.

> Body parameter

```json
{
  "bandwidth": 0,
  "latency": 0,
  "errors": 0,
  "downloadDuration": 0,
  "qualityVariantChanges": 0
}
```

<h3 id="save-video-playback-metrics-for-future-video-health-recording-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PlaybackMetrics](#schemaplaybackmetrics)|false|Video metrics to record|
|» bandwidth|body|number(double)|false|The player's measured throughput in kbps.|
|» latency|body|number(double)|false|How far behind the live edge the player is, in seconds.|
|» errors|body|number(double)|true|Errors since the previous report, not a running total. Reports accumulate, so a client sending a cumulative count inflates the recorded figure.|
|» downloadDuration|body|number(double)|false|How long the player's most recent segment took to download, in seconds.|
|» qualityVariantChanges|body|number(double)|true|Quality variant switches since the previous report, not a running total.|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="save-video-playback-metrics-for-future-video-health-recording-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Metrics successfully recorded|None|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Register for notifications

<a id="opIdRegisterForLiveNotifications"></a>

> Code samples

```bash
curl 'http://localhost:8080/notifications/register?accessToken=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel": "string",
    "destination": "string"
  }'
```

`POST /notifications/register`

> Body parameter

```json
{
  "channel": "string",
  "destination": "string"
}
```

<h3 id="register-for-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessToken|query|string|true|none|
|body|body|object|false|Information for notification|
|» channel|body|string|false|Name of notification channel|
|» destination|body|string|false|Target of the notification in the channel|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="register-for-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully added notification channel|None|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Unauthorized|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get current inboard broadcaster

<a id="opIdStatusAdmin"></a>

> Code samples

```bash
curl http://localhost:8080/admin/status \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/status`

> Example responses

> 200 Response

```json
{
  "broadcaster": {
    "time": "1970-01-01T00:00:00Z",
    "remoteAddr": "string",
    "streamDetails": {
      "videoCodec": "string",
      "audioCodec": "string",
      "encoder": "string",
      "width": 0,
      "height": 0,
      "videoBitrate": 0,
      "audioBitrate": 0,
      "framerate": 0
    }
  },
  "currentBroadcast": {
    "outputSettings": [
      {
        "name": "string",
        "videoPassthrough": true,
        "audioPassthrough": true,
        "videoBitrate": 0,
        "audioBitrate": 0,
        "scaledWidth": 0,
        "scaledHeight": 0,
        "framerate": 0,
        "cpuUsageLevel": 0
      }
    ],
    "latencyLevel": {
      "level": 0
    }
  },
  "health": {
    "message": "string",
    "healthPercentage": 0,
    "representation": 0,
    "healthy": true
  },
  "streamTitle": "string",
  "versionNumber": "string",
  "viewerCount": 0,
  "overallPeakViewerCount": 0,
  "sessionPeakViewerCount": 0,
  "online": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-current-inboard-broadcaster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gives the status of the system|[AdminStatus](#schemaadminstatus)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Disconnect inbound stream

<a id="opIdDisconnectInboundConnection"></a>

> Code samples

```bash
curl http://localhost:8080/admin/disconnect \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /admin/disconnect`

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="disconnect-inbound-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Contains information about disconnection status|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get the current server config

<a id="opIdGetServerConfig"></a>

> Code samples

```bash
curl http://localhost:8080/admin/serverconfig \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/serverconfig`

> Example responses

> 200 Response

```json
{
  "instanceDetails": {
    "appearanceVariables": {
      "property1": "string",
      "property2": "string"
    },
    "version": "string",
    "welcomeMessage": "string",
    "offlineMessage": "string",
    "logo": "string",
    "name": "string",
    "extraPageContent": "string",
    "streamTitle": "string",
    "customStyles": "string",
    "customJavascript": "string",
    "summary": "string",
    "tags": [
      "string"
    ],
    "socialHandles": [
      {
        "platform": "string",
        "url": "string",
        "icon": "string"
      }
    ],
    "nsfw": true,
    "autoplay": "off"
  },
  "notifications": {
    "browser": {
      "goLiveMessage": "string",
      "enabled": true
    },
    "discord": {
      "webhook": "string",
      "goLiveMessage": "string",
      "enabled": true
    }
  },
  "yp": {
    "instanceUrl": "string",
    "enabled": true
  },
  "ffmpegPath": "string",
  "adminPassword": "string",
  "socketHostOverride": "string",
  "webServerIP": "string",
  "videoCodec": "string",
  "videoServingEndpoint": "string",
  "s3": {
    "endpoint": "string",
    "accessKey": "string",
    "secret": "string",
    "bucket": "string",
    "region": "string",
    "acl": "string",
    "pathPrefix": "string",
    "enabled": true,
    "forcePathStyle": true
  },
  "federation": {
    "username": "string",
    "goLiveMessage": "string",
    "blockedDomains": [
      "string"
    ],
    "enabled": true,
    "isPrivate": true,
    "showEngagement": true,
    "enableQuotes": true,
    "hideFollowersTab": true
  },
  "supportedCodecs": [
    "string"
  ],
  "externalActions": [
    {
      "url": "string",
      "html": "string",
      "title": "string",
      "description": "string",
      "icon": "string",
      "color": "string",
      "openExternally": true
    }
  ],
  "forbiddenUsernames": [
    "string"
  ],
  "suggestedUsernames": [
    "string"
  ],
  "streamKeys": [
    {
      "key": "string",
      "comment": "string"
    }
  ],
  "videoSettings": {
    "videoQualityVariants": [
      {
        "name": "string",
        "videoPassthrough": true,
        "audioPassthrough": true,
        "videoBitrate": 0,
        "audioBitrate": 0,
        "scaledWidth": 0,
        "scaledHeight": 0,
        "framerate": 0,
        "cpuUsageLevel": 0
      }
    ],
    "latencyLevel": 0
  },
  "rtmpServerPort": 0,
  "rtmpServerAddress": "string",
  "webServerPort": 0,
  "chatDisabled": true,
  "chatJoinMessagesEnabled": true,
  "chatEstablishedUserMode": true,
  "disableSearchIndexing": true,
  "streamKeyOverridden": true,
  "hideViewerCount": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-the-current-server-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current server config|[AdminServerConfig](#schemaadminserverconfig)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get viewer count over time

<a id="opIdGetViewersOverTime"></a>

> Code samples

```bash
curl http://localhost:8080/admin/viewersOverTime \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/viewersOverTime`

<h3 id="get-viewer-count-over-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|windowStart|query|string|false|Start date in unix time|

> Example responses

> 200 Response

```json
[
  {
    "time": "1970-01-01T00:00:00Z",
    "value": 0
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-viewer-count-over-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Viewer count over time|Inline|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<h3 id="get-viewer-count-over-time-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TimestampedValue](#schematimestampedvalue)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get active viewers

<a id="opIdGetActiveViewers"></a>

> Code samples

```bash
curl http://localhost:8080/admin/viewers \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/viewers`

> Example responses

> 200 Response

```json
[
  {
    "firstSeen": "1970-01-01T00:00:00Z",
    "geo": {
      "countryCode": "string",
      "regionName": "string",
      "timeZone": "string"
    },
    "userAgent": "string",
    "ipAddress": "string",
    "clientID": "string"
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-active-viewers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of active viewers|Inline|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<h3 id="get-active-viewers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Viewer](#schemaviewer)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get the playback clients of active viewers with their current playback health

<a id="opIdGetPlaybackClients"></a>

> Code samples

```bash
curl http://localhost:8080/admin/viewers/playback \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/viewers/playback`

One entry per playback client currently watching, with the most recent playback measurements
for that client. Clients that report CMCD are identified by their player-supplied session ID,
which distinguishes players sharing an address; every other client is identified the same way
viewers are. A viewer with no playback measurements is still listed, with a null `playback`.

> Example responses

> 200 Response

```json
[
  {
    "clientID": "string",
    "viewerID": "string",
    "firstSeen": "1970-01-01T00:00:00Z",
    "geo": {
      "countryCode": "string",
      "regionName": "string",
      "timeZone": "string"
    },
    "userAgent": "string",
    "ipAddress": "string",
    "playback": {
      "source": "client",
      "lastUpdate": "1970-01-01T00:00:00Z",
      "playerState": "p",
      "measurementStatus": "unmeasurable",
      "bandwidthKbps": 0,
      "latencySeconds": 0,
      "downloadSeconds": 0,
      "bitrateKbps": 0,
      "errorCount": 0,
      "qualityVariantChanges": 0
    }
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-the-playback-clients-of-active-viewers-with-their-current-playback-health-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of active playback clients|Inline|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<h3 id="get-the-playback-clients-of-active-viewers-with-their-current-playback-health-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlaybackClient](#schemaplaybackclient)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get the current hardware stats

<a id="opIdGetHardwareStats"></a>

> Code samples

```bash
curl http://localhost:8080/admin/hardwarestats \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/hardwarestats`

> Example responses

> 200 Response

```json
{
  "message": "string",
  "healthPercentage": 0,
  "representation": 0,
  "healthy": true,
  "disk": [
    {
      "time": "1970-01-01T00:00:00Z",
      "value": 0
    }
  ],
  "memory": [
    {
      "time": "1970-01-01T00:00:00Z",
      "value": 0
    }
  ],
  "cpu": [
    {
      "time": "1970-01-01T00:00:00Z",
      "value": 0
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-the-current-hardware-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current hardware stats|Inline|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<h3 id="get-the-current-hardware-stats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|healthPercentage|integer|false|none|none|
|representation|integer|false|none|none|
|healthy|boolean|false|none|none|
|disk|[[TimestampedValue](#schematimestampedvalue)]|false|none|none|
|memory|[[TimestampedValue](#schematimestampedvalue)]|false|none|none|
|cpu|[[TimestampedValue](#schematimestampedvalue)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get a detailed list of currently connected chat clients

<a id="opIdGetConnectedChatClients"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/clients \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/chat/clients`

> Example responses

> 200 Response

```json
[
  {
    "connectedAt": "1970-01-01T00:00:00Z",
    "user": {
      "createdAt": "string",
      "disabledAt": "string",
      "nameChangedAt": "string",
      "id": "string",
      "displayName": "string",
      "previousNames": [
        "string"
      ],
      "scopes": [
        "string"
      ],
      "authProviders": [
        "string"
      ],
      "displayColor": 0,
      "isBot": true,
      "authenticated": true
    },
    "geo": {
      "countryCode": "string",
      "regionName": "string",
      "timeZone": "string"
    },
    "userAgent": "string",
    "messageCount": 0
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-a-detailed-list-of-currently-connected-chat-clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of chat clients|[ChatClients](#schemachatclients)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get all chat messages for the admin, unfiltered

<a id="opIdGetChatMessagesAdmin"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/chat/messages`

> Example responses

> 200 Response

```json
[
  {
    "timestamp": "string",
    "type": "string",
    "id": "string",
    "user": {
      "createdAt": "string",
      "disabledAt": "string",
      "nameChangedAt": "string",
      "id": "string",
      "displayName": "string",
      "previousNames": [
        "string"
      ],
      "scopes": [
        "string"
      ],
      "authProviders": [
        "string"
      ],
      "displayColor": 0,
      "isBot": true,
      "authenticated": true
    },
    "hiddenAt": "string",
    "clientId": 0,
    "body": "string"
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-all-chat-messages-for-the-admin-unfiltered-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of chat messages for the admin|[ChatMessages](#schemachatmessages)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update visibility of chat messages

<a id="opIdUpdateMessageVisibilityAdmin"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/messagevisibility \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "idArray": [
      "string"
    ],
    "visible": true
  }'
```

`POST /admin/chat/messagevisibility`

> Body parameter

```json
{
  "idArray": [
    "string"
  ],
  "visible": true
}
```

<h3 id="update-visibility-of-chat-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessageVisibilityUpdate](#schemamessagevisibilityupdate)|false|none|
|» idArray|body|[string]|false|none|
|» visible|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-visibility-of-chat-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Messages updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Enable or disable a user

<a id="opIdUpdateUserEnabledAdmin"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/users/setenabled \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "userId": "string",
    "enabled": true
  }'
```

`POST /admin/chat/users/setenabled`

> Body parameter

```json
{
  "userId": "string",
  "enabled": true
}
```

<h3 id="enable-or-disable-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|false|none|
|» enabled|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="enable-or-disable-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the user|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get a list of disabled users

<a id="opIdGetDisabledUsers"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/users/disabled \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/chat/users/disabled`

> Example responses

> 200 Response

```json
[
  {
    "createdAt": "string",
    "disabledAt": "string",
    "nameChangedAt": "string",
    "id": "string",
    "displayName": "string",
    "previousNames": [
      "string"
    ],
    "scopes": [
      "string"
    ],
    "authProviders": [
      "string"
    ],
    "displayColor": 0,
    "isBot": true,
    "authenticated": true,
    "disabledReason": "string"
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-a-list-of-disabled-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of disabled users|[Users](#schemausers)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Ban an IP address

<a id="opIdBanIPAddress"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/users/ipbans/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/chat/users/ipbans/create`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="ban-an-ip-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="ban-an-ip-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|IP was successfully banned|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Remove an IP ban

<a id="opIdUnbanIPAddress"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/users/ipbans/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/chat/users/ipbans/remove`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="remove-an-ip-ban-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|none|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="remove-an-ip-ban-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|IP ban was successfully removed|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get all banned IP addresses

<a id="opIdGetIPAddressBans"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/users/ipbans \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/chat/users/ipbans`

> Example responses

> 200 Response

```json
[
  {
    "createdAt": "1970-01-01T00:00:00Z",
    "ipAddress": "string",
    "notes": "string"
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-all-banned-ip-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of banned IP addresses|Inline|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<h3 id="get-all-banned-ip-addresses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IPAddress](#schemaipaddress)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set moderator status for a user

<a id="opIdUpdateUserModerator"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/users/setmoderator \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "userId": "string",
    "isModerator": true
  }'
```

`POST /admin/chat/users/setmoderator`

> Body parameter

```json
{
  "userId": "string",
  "isModerator": true
}
```

<h3 id="set-moderator-status-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|false|none|
|» isModerator|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-moderator-status-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully update the moderator status of the user|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get a list of moderator users

<a id="opIdGetModerators"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/users/moderators \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/chat/users/moderators`

> Example responses

> 200 Response

```json
[
  {
    "createdAt": "string",
    "disabledAt": "string",
    "nameChangedAt": "string",
    "id": "string",
    "displayName": "string",
    "previousNames": [
      "string"
    ],
    "scopes": [
      "string"
    ],
    "authProviders": [
      "string"
    ],
    "displayColor": 0,
    "isBot": true,
    "authenticated": true,
    "disabledReason": "string"
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-a-list-of-moderator-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of moderator users|[Users](#schemausers)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get a paginated list of all users

<a id="opIdGetUsers"></a>

> Code samples

```bash
curl http://localhost:8080/admin/users \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/users`

<h3 id="get-a-paginated-list-of-all-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|none|
|limit|query|integer|false|none|
|search|query|string|false|Filter to users whose display name contains this substring|
|status|query|string|false|Filter users by status|
|sort|query|string|false|Sort direction by creation date (defaults to newest first)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|all|
|status|active|
|status|bots|
|sort|asc|
|sort|desc|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "results": [
    {
      "createdAt": "string",
      "disabledAt": "string",
      "nameChangedAt": "string",
      "id": "string",
      "displayName": "string",
      "previousNames": [
        "string"
      ],
      "scopes": [
        "string"
      ],
      "authProviders": [
        "string"
      ],
      "displayColor": 0,
      "isBot": true,
      "authenticated": true,
      "disabledReason": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-a-paginated-list-of-all-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of users|[PaginatedUsers](#schemapaginatedusers)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Permanently delete a user and all of their data

<a id="opIdDeleteUser"></a>

> Code samples

```bash
curl http://localhost:8080/admin/users/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "userId": "string"
  }'
```

`POST /admin/users/delete`

> Body parameter

```json
{
  "userId": "string"
}
```

<h3 id="permanently-delete-a-user-and-all-of-their-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="permanently-delete-a-user-and-all-of-their-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User was successfully deleted|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get all logs

<a id="opIdGetLogs"></a>

> Code samples

```bash
curl http://localhost:8080/admin/logs \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/logs`

> Example responses

> 200 Response

```json
[
  {
    "time": "1970-01-01T00:00:00Z",
    "message": "string",
    "level": "string"
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-all-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of logs|Inline|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<h3 id="get-all-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AdminLog](#schemaadminlog)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Access-Control-Allow-Credentials|string|boolean|none|
|200|Access-Control-Allow-Headers|string||none|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get warning/error logs

<a id="opIdGetWarnings"></a>

> Code samples

```bash
curl http://localhost:8080/admin/logs/warnings \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/logs/warnings`

> Example responses

> 200 Response

```json
[
  {
    "time": "1970-01-01T00:00:00Z",
    "message": "string",
    "level": "string"
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-warningerror-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of warnings and errors|Inline|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<h3 id="get-warningerror-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AdminLog](#schemaadminlog)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Access-Control-Allow-Credentials|string|boolean|none|
|200|Access-Control-Allow-Headers|string||none|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get followers

<a id="opIdGetFollowersAdmin"></a>

> Code samples

```bash
curl http://localhost:8080/admin/followers \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/followers`

<h3 id="get-followers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|none|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "results": [
    {
      "link": "string",
      "name": "string",
      "username": "string",
      "image": "string",
      "timestamp": "string",
      "disabledAt": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-followers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated follower count|[PaginatedFollowers](#schemapaginatedfollowers)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get a list of pending follow requests

<a id="opIdGetPendingFollowRequests"></a>

> Code samples

```bash
curl http://localhost:8080/admin/followers/pending \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/followers/pending`

> Example responses

> 200 Response

```json
[
  {
    "link": "string",
    "name": "string",
    "username": "string",
    "image": "string",
    "timestamp": "string",
    "disabledAt": "string"
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-a-list-of-pending-follow-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of pending followers|[Followers](#schemafollowers)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get a list of rejected or blocked follows

<a id="opIdGetBlockedAndRejectedFollowers"></a>

> Code samples

```bash
curl http://localhost:8080/admin/followers/blocked \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/followers/blocked`

> Example responses

> 200 Response

```json
[
  {
    "link": "string",
    "name": "string",
    "username": "string",
    "image": "string",
    "timestamp": "string",
    "disabledAt": "string"
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-a-list-of-rejected-or-blocked-follows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of rejected or blocked follows|[Followers](#schemafollowers)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get directories that are featuring/listing this server

<a id="opIdGetDirectoryFollowers"></a>

> Code samples

```bash
curl http://localhost:8080/admin/followers/directory \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/followers/directory`

> Example responses

> 200 Response

```json
[
  {
    "link": "string",
    "name": "string",
    "username": "string",
    "image": "string",
    "timestamp": "string",
    "disabledAt": "string"
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-directories-that-are-featuringlisting-this-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of directories featuring this server|[Followers](#schemafollowers)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set the following state of a follower or follow request

<a id="opIdApproveFollower"></a>

> Code samples

```bash
curl http://localhost:8080/admin/followers/approve \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "actorIRI": "string",
    "approved": true
  }'
```

`POST /admin/followers/approve`

> Body parameter

```json
{
  "actorIRI": "string",
  "approved": true
}
```

<h3 id="set-the-following-state-of-a-follower-or-follow-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» actorIRI|body|string|false|none|
|» approved|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-the-following-state-of-a-follower-or-follow-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of rejected or blocked follows|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Remove a follower without blocking them (they may follow again)

<a id="opIdRemoveFollower"></a>

> Code samples

```bash
curl http://localhost:8080/admin/followers/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "actorIRI": "string"
  }'
```

`POST /admin/followers/remove`

> Body parameter

```json
{
  "actorIRI": "string"
}
```

<h3 id="remove-a-follower-without-blocking-them-they-may-follow-again-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» actorIRI|body|string|true|IRI of the follower to remove|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="remove-a-follower-without-blocking-them-they-may-follow-again-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Follower removed|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Upload custom emoji

<a id="opIdUploadCustomEmoji"></a>

> Code samples

```bash
curl http://localhost:8080/admin/emoji/upload \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "data": "string"
  }'
```

`POST /admin/emoji/upload`

> Body parameter

```json
{
  "name": "string",
  "data": "string"
}
```

<h3 id="upload-custom-emoji-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|false|none|
|» data|body|string|false|Base 64 encoded image data|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="upload-custom-emoji-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Emoji has been uploaded|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Delete custom emoji

<a id="opIdDeleteCustomEmoji"></a>

> Code samples

```bash
curl http://localhost:8080/admin/emoji/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string"
  }'
```

`POST /admin/emoji/delete`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="delete-custom-emoji-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="delete-custom-emoji-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Emoji has been deleted|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Change the current admin password

<a id="opIdSetAdminPassword"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/adminpass \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/adminpass`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="change-the-current-admin-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="change-the-current-admin-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Admin password has been updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set an array of valid stream keys

<a id="opIdSetStreamKeys"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/streamkeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": [
      {
        "key": "string",
        "comment": "string"
      }
    ]
  }'
```

`POST /admin/config/streamkeys`

> Body parameter

```json
{
  "value": [
    {
      "key": "string",
      "comment": "string"
    }
  ]
}
```

<h3 id="set-an-array-of-valid-stream-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» value|body|[[StreamKey](#schemastreamkey)]|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-an-array-of-valid-stream-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stream keys have been updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Change the extra page content in memory

<a id="opIdSetExtraPageContent"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/pagecontent \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/pagecontent`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="change-the-extra-page-content-in-memory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="change-the-extra-page-content-in-memory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Page content has been changed|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Change the stream title

<a id="opIdSetStreamTitle"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/streamtitle \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/streamtitle`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="change-the-stream-title-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="change-the-stream-title-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stream title has been changed|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Change the welcome message

<a id="opIdSetServerWelcomeMessage"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/welcomemessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/welcomemessage`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="change-the-welcome-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="change-the-welcome-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Welcome message has been changed|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Disable chat

<a id="opIdSetChatDisabled"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/chat/disable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/chat/disable`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="disable-chat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="disable-chat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Chat has been disabled|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Enable chat for user join messages

<a id="opIdSetChatJoinMessagesEnabled"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/chat/joinmessagesenabled \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/chat/joinmessagesenabled`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="enable-chat-for-user-join-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="enable-chat-for-user-join-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User join messages has been enabled|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Enable/disable chat established user mode

<a id="opIdSetEnableEstablishedChatUserMode"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/chat/establishedusermode \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/chat/establishedusermode`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="enabledisable-chat-established-user-mode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="enabledisable-chat-established-user-mode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Chat established user mode updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set chat usernames that are not allowed

<a id="opIdSetForbiddenUsernameList"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/chat/forbiddenusernames \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": [
      "string"
    ]
  }'
```

`POST /admin/config/chat/forbiddenusernames`

> Body parameter

```json
{
  "value": [
    "string"
  ]
}
```

<h3 id="set-chat-usernames-that-are-not-allowed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» value|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-chat-usernames-that-are-not-allowed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Forbidden usernames updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set the suggested chat usernames that will be assigned automatically

<a id="opIdSetSuggestedUsernameList"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/chat/suggestedusernames \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": [
      "string"
    ]
  }'
```

`POST /admin/config/chat/suggestedusernames`

> Body parameter

```json
{
  "value": [
    "string"
  ]
}
```

<h3 id="set-the-suggested-chat-usernames-that-will-be-assigned-automatically-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» value|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-the-suggested-chat-usernames-that-will-be-assigned-automatically-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Suggested usernames updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set spam protection enabled

<a id="opIdSetChatSpamProtectionEnabled"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/chat/spamprotectionenabled \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/chat/spamprotectionenabled`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="set-spam-protection-enabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-spam-protection-enabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Spam protection enabled updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set slur filter enabled

<a id="opIdSetChatSlurFilterEnabled"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/chat/slurfilterenabled \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/chat/slurfilterenabled`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="set-slur-filter-enabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-slur-filter-enabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Slur filter enabled updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set require authentication for chat

<a id="opIdSetChatRequireAuthentication"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/chat/requireauthentication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/chat/requireauthentication`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="set-require-authentication-for-chat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-require-authentication-for-chat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Require authentication setting updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set video codec

<a id="opIdSetVideoCodec"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/video/codec \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/video/codec`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="set-video-codec-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-video-codec-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Video codec updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set the number of video segments and duration per segment in a playlist

<a id="opIdSetStreamLatencyLevel"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/video/streamlatencylevel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/video/streamlatencylevel`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="set-the-number-of-video-segments-and-duration-per-segment-in-a-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-the-number-of-video-segments-and-duration-per-segment-in-a-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stream latency updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set an array of video output configurations

<a id="opIdSetStreamOutputVariants"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/video/streamoutputvariants \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": [
      {
        "name": "string",
        "videoPassthrough": true,
        "audioPassthrough": true,
        "videoBitrate": 0,
        "audioBitrate": 0,
        "scaledWidth": 0,
        "scaledHeight": 0,
        "framerate": 0,
        "cpuUsageLevel": 0
      }
    ]
  }'
```

`POST /admin/config/video/streamoutputvariants`

> Body parameter

```json
{
  "value": [
    {
      "name": "string",
      "videoPassthrough": true,
      "audioPassthrough": true,
      "videoBitrate": 0,
      "audioBitrate": 0,
      "scaledWidth": 0,
      "scaledHeight": 0,
      "framerate": 0,
      "cpuUsageLevel": 0
    }
  ]
}
```

<h3 id="set-an-array-of-video-output-configurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» value|body|[[StreamOutputVariant](#schemastreamoutputvariant)]|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-an-array-of-video-output-configurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stream Output Variants updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set style/color/css values

<a id="opIdSetCustomColorVariableValues"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/appearance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /admin/config/appearance`

> Body parameter

```json
{
  "value": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="set-stylecolorcss-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» value|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-stylecolorcss-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Appearance updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update logo

<a id="opIdSetLogo"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/logo \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/logo`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="update-logo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-logo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Logo updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Upload custom favicon

<a id="opIdSetFavicon"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/favicon \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/favicon`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="upload-custom-favicon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="upload-custom-favicon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Favicon updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Reset favicon to default

<a id="opIdResetFavicon"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/favicon \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /admin/config/favicon`

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="reset-favicon-to-default-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Favicon reset to default|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update server tags

<a id="opIdSetTags"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/tags`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="update-server-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-server-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tags updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update FFMPEG path

<a id="opIdSetFfmpegPath"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/ffmpegpath \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/ffmpegpath`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="update-ffmpeg-path-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-ffmpeg-path-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Path updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update server port

<a id="opIdSetWebServerPort"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/webserverport \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/webserverport`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="update-server-port-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-server-port-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Port updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update server IP address

<a id="opIdSetWebServerIP"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/webserverip \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/webserverip`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="update-server-ip-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-server-ip-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|IP Address updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update RTMP post

<a id="opIdSetRTMPServerPort"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/rtmpserverport \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/rtmpserverport`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="update-rtmp-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-rtmp-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|RTMP port updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update RTMP server bind address

<a id="opIdSetRTMPServerBindAddress"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/rtmpserverbindaddress \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/rtmpserverbindaddress`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="update-rtmp-server-bind-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-rtmp-server-bind-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|RTMP server bind address updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update websocket host override

<a id="opIdSetSocketHostOverride"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/sockethostoverride \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/sockethostoverride`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="update-websocket-host-override-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-websocket-host-override-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Websocket host override updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update custom video serving endpoint

<a id="opIdSetVideoServingEndpoint"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/videoservingendpoint \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/videoservingendpoint`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="update-custom-video-serving-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-custom-video-serving-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Video Serving Endpoint updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update NSFW marking

<a id="opIdSetNSFW"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/nsfw \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/nsfw`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="update-nsfw-marking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-nsfw-marking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|NSFW status updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update autoplay behavior

<a id="opIdSetAutoplay"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/autoplay \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/autoplay`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="update-autoplay-behavior-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-autoplay-behavior-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Autoplay setting updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update directory enabled

<a id="opIdSetDirectoryEnabled"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/directoryenabled \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/directoryenabled`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="update-directory-enabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-directory-enabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Directory Enabled updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update social handles

<a id="opIdSetSocialHandles"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/socialhandles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": [
      {
        "platform": "string",
        "url": "string",
        "icon": "string"
      }
    ]
  }'
```

`POST /admin/config/socialhandles`

> Body parameter

```json
{
  "value": [
    {
      "platform": "string",
      "url": "string",
      "icon": "string"
    }
  ]
}
```

<h3 id="update-social-handles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» value|body|[[SocialHandle](#schemasocialhandle)]|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-social-handles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Social handles updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update S3 configuration

<a id="opIdSetS3Configuration"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/s3 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": {
      "endpoint": "string",
      "accessKey": "string",
      "secret": "string",
      "bucket": "string",
      "region": "string",
      "acl": "string",
      "pathPrefix": "string",
      "enabled": true,
      "forcePathStyle": true
    }
  }'
```

`POST /admin/config/s3`

> Body parameter

```json
{
  "value": {
    "endpoint": "string",
    "accessKey": "string",
    "secret": "string",
    "bucket": "string",
    "region": "string",
    "acl": "string",
    "pathPrefix": "string",
    "enabled": true,
    "forcePathStyle": true
  }
}
```

<h3 id="update-s3-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» value|body|[S3Info](#schemas3info)|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-s3-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Directory Enabled updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update server url

<a id="opIdSetServerURL"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/serverurl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/serverurl`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="update-server-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-server-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Server URL updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update external action links

<a id="opIdSetExternalActions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/externalactions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": [
      {
        "url": "string",
        "html": "string",
        "title": "string",
        "description": "string",
        "icon": "string",
        "color": "string",
        "openExternally": true
      }
    ]
  }'
```

`POST /admin/config/externalactions`

> Body parameter

```json
{
  "value": [
    {
      "url": "string",
      "html": "string",
      "title": "string",
      "description": "string",
      "icon": "string",
      "color": "string",
      "openExternally": true
    }
  ]
}
```

<h3 id="update-external-action-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» value|body|[[ExternalAction](#schemaexternalaction)]|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-external-action-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|External Action Links updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update custom styles

<a id="opIdSetCustomStyles"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/customstyles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/customstyles`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="update-custom-styles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-custom-styles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Custom styles updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update custom JavaScript

<a id="opIdSetCustomJavascript"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/customjavascript \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/customjavascript`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="update-custom-javascript-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-custom-javascript-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Custom JavaScript updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update hide viewer count

<a id="opIdSetHideViewerCount"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/hideviewercount \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/hideviewercount`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="update-hide-viewer-count-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-hide-viewer-count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Hide viewer count updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Update search indexing

<a id="opIdSetDisableSearchIndexing"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/disablesearchindexing \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/disablesearchindexing`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="update-search-indexing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="update-search-indexing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search Indexing updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Enable/disable federation features

<a id="opIdSetFederationEnabled"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/federation/enable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/federation/enable`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="enabledisable-federation-features-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="enabledisable-federation-features-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Federation features enabled/disabled|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set if federation activities are private

<a id="opIdSetFederationActivityPrivate"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/federation/private \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/federation/private`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="set-if-federation-activities-are-private-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-if-federation-activities-are-private-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Private status set|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set if fediverse engagement appears in chat

<a id="opIdSetFederationShowEngagement"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/federation/showengagement \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/federation/showengagement`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="set-if-fediverse-engagement-appears-in-chat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-if-fediverse-engagement-appears-in-chat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Federation engagement set|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set if posts from this server can be quoted

<a id="opIdSetFederationEnableQuotes"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/federation/enablequotes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/federation/enablequotes`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="set-if-posts-from-this-server-can-be-quoted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-if-posts-from-this-server-can-be-quoted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Federation quotes set|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set if the public followers tab is hidden on the web UI

<a id="opIdSetFederationHideFollowersTab"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/federation/hidefollowers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/federation/hidefollowers`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="set-if-the-public-followers-tab-is-hidden-on-the-web-ui-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-if-the-public-followers-tab-is-hidden-on-the-web-ui-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Federation hide followers tab set|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set local federated username

<a id="opIdSetFederationUsername"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/federation/username \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/federation/username`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="set-local-federated-username-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-local-federated-username-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Federation username set|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set federated go live message

<a id="opIdSetFederationGoLiveMessage"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/federation/livemessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/federation/livemessage`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="set-federated-go-live-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-federated-go-live-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Federation username set|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Set Federation blocked domains

<a id="opIdSetFederationBlockDomains"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/federation/blockdomains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/federation/blockdomains`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="set-federation-blocked-domains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="set-federation-blocked-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Federation blocked domains set|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get list of federated servers

<a id="opIdGetFederatedServers"></a>

> Code samples

```bash
curl http://localhost:8080/federation/servers \
  -H 'Accept: application/json'
```

`GET /federation/servers`

> Example responses

> 200 Response

```json
{
  "servers": [
    {
      "id": 0,
      "iri": "http://example.com",
      "name": "string",
      "displayName": "string",
      "summary": "string",
      "logoUrl": "http://example.com",
      "isOnline": true,
      "streamTitle": "string",
      "streamDescription": "string",
      "tags": [
        "string"
      ],
      "thumbnailUrl": "http://example.com"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-list-of-federated-servers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of federated servers|Inline|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<h3 id="get-list-of-federated-servers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|servers|[[PublicFederatedServer](#schemapublicfederatedserver)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get all federated servers (admin), including pending requests

<a id="opIdGetAdminFederatedServers"></a>

> Code samples

```bash
curl http://localhost:8080/admin/federation/servers \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/federation/servers`

> Example responses

> 200 Response

```json
{
  "servers": [
    {
      "id": 0,
      "iri": "http://example.com",
      "name": "string",
      "logoUrl": "http://example.com",
      "isOnline": true,
      "streamTitle": "string",
      "streamDescription": "string",
      "tags": [
        "string"
      ],
      "thumbnailUrl": "http://example.com",
      "displayName": "string",
      "summary": "string",
      "lastSeenOnline": "1970-01-01T00:00:00Z",
      "lastStatusUpdate": "1970-01-01T00:00:00Z",
      "addedAt": "1970-01-01T00:00:00Z",
      "followedAt": "1970-01-01T00:00:00Z",
      "username": "string",
      "acceptedAt": "1970-01-01T00:00:00Z",
      "rejectedAt": "1970-01-01T00:00:00Z",
      "pending": true,
      "followStatus": "string",
      "priority": 0
    }
  ]
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-all-federated-servers-admin-including-pending-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all federated servers, including those whose follow is still pending approval|Inline|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<h3 id="get-all-federated-servers-admin-including-pending-requests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|servers|[[FederatedServer](#schemafederatedserver)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Add a federated server to follow

<a id="opIdAddFederatedServer"></a>

> Code samples

```bash
curl http://localhost:8080/admin/federation/servers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "url": "http://example.com"
  }'
```

`POST /admin/federation/servers`

> Body parameter

```json
{
  "url": "http://example.com"
}
```

<h3 id="add-a-federated-server-to-follow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» url|body|string(uri)|true|URL of the federated Owncast server|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="add-a-federated-server-to-follow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Federated server added successfully|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Remove a federated server

<a id="opIdRemoveFederatedServer"></a>

> Code samples

```bash
curl http://localhost:8080/admin/federation/servers/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /admin/federation/servers/{id}`

<h3 id="remove-a-federated-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the federated server to remove|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="remove-a-federated-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Federated server removed successfully|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|404|Not Found|Federated server not found|None|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Move a federated server up or down in the priority order

<a id="opIdReorderFederatedServer"></a>

> Code samples

```bash
curl http://localhost:8080/admin/federation/servers/0/reorder \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "direction": "up"
  }'
```

`PUT /admin/federation/servers/{id}/reorder`

> Body parameter

```json
{
  "direction": "up"
}
```

<h3 id="move-a-federated-server-up-or-down-in-the-priority-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the federated server to reorder|
|body|body|object|true|none|
|» direction|body|string|true|Move the server up (higher priority) or down (lower priority)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» direction|up|
|» direction|down|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="move-a-federated-server-up-or-down-in-the-priority-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Federated server reordered successfully|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get pending requests from other servers to feature this server's stream

<a id="opIdGetFeatureRequests"></a>

> Code samples

```bash
curl http://localhost:8080/admin/federation/feature-requests \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/federation/feature-requests`

> Example responses

> 200 Response

```json
{
  "requests": [
    {
      "link": "string",
      "name": "string",
      "username": "string",
      "image": "string",
      "timestamp": "string",
      "disabledAt": "string"
    }
  ]
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-pending-requests-from-other-servers-to-feature-this-servers-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of pending feature requests|Inline|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<h3 id="get-pending-requests-from-other-servers-to-feature-this-servers-stream-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[Follower](#schemafollower)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Configure Discord notifications

<a id="opIdSetDiscordNotificationConfiguration"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/notifications/discord \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": {
      "webhook": "string",
      "goLiveMessage": "string",
      "enabled": true
    }
  }'
```

`POST /admin/config/notifications/discord`

> Body parameter

```json
{
  "value": {
    "webhook": "string",
    "goLiveMessage": "string",
    "enabled": true
  }
}
```

<h3 id="configure-discord-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» value|body|[DiscordNotificationConfiguration](#schemadiscordnotificationconfiguration)|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="configure-discord-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Discord notification configuration updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Configure Browser notifications

<a id="opIdSetBrowserNotificationConfiguration"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/notifications/browser \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": {
      "goLiveMessage": "string",
      "enabled": true
    }
  }'
```

`POST /admin/config/notifications/browser`

> Body parameter

```json
{
  "value": {
    "goLiveMessage": "string",
    "enabled": true
  }
}
```

<h3 id="configure-browser-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» value|body|[BrowserNotificationConfiguration](#schemabrowsernotificationconfiguration)|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="configure-browser-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Browser notification configuration updated|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get all the webhooks

<a id="opIdGetWebhooks"></a>

> Code samples

```bash
curl http://localhost:8080/admin/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/webhooks`

> Example responses

> 200 Response

```json
[
  {
    "timestamp": "1970-01-01T00:00:00Z",
    "lastUsed": "1970-01-01T00:00:00Z",
    "url": "string",
    "events": [
      "CHAT"
    ],
    "id": 0
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-all-the-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All webhooks|Inline|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<h3 id="get-all-the-webhooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Webhook](#schemawebhook)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Delete a single webhook

<a id="opIdDeleteWebhook"></a>

> Code samples

```bash
curl http://localhost:8080/admin/webhooks/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "id": 0
  }'
```

`POST /admin/webhooks/delete`

> Body parameter

```json
{
  "id": 0
}
```

<h3 id="delete-a-single-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="delete-a-single-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook successfully deleted|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Create a single webhook

<a id="opIdCreateWebhook"></a>

> Code samples

```bash
curl http://localhost:8080/admin/webhooks/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "url": "string",
    "events": [
      "CHAT"
    ],
    "secret": "string"
  }'
```

`POST /admin/webhooks/create`

> Body parameter

```json
{
  "url": "string",
  "events": [
    "CHAT"
  ],
  "secret": "string"
}
```

<h3 id="create-a-single-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» url|body|string|false|none|
|» events|body|[[WebhookEventType](#schemawebhookeventtype)]|false|none|
|» secret|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» events|CHAT|
|» events|USER_JOINED|
|» events|USER_PARTED|
|» events|NAME_CHANGE|
|» events|FEDIVERSE_ENGAGEMENT_FOLLOW|
|» events|VISIBILITY-UPDATE|
|» events|PING|
|» events|PONG|
|» events|STREAM_STARTED|
|» events|STREAM_STOPPED|
|» events|STREAM_TITLE_UPDATED|
|» events|SYSTEM|
|» events|CHAT_ACTION|

> Example responses

> 200 Response

```json
{
  "timestamp": "1970-01-01T00:00:00Z",
  "lastUsed": "1970-01-01T00:00:00Z",
  "url": "string",
  "events": [
    "CHAT"
  ],
  "id": 0
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="create-a-single-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new webhook|[Webhook](#schemawebhook)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get all access tokens

<a id="opIdGetExternalAPIUsers"></a>

> Code samples

```bash
curl http://localhost:8080/admin/accesstokens \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/accesstokens`

> Example responses

> 200 Response

```json
[
  {
    "createdAt": "1970-01-01T00:00:00Z",
    "lastUsedAt": "1970-01-01T00:00:00Z",
    "id": "string",
    "accessToken": "string",
    "displayName": "string",
    "type": "string",
    "scopes": [
      "string"
    ],
    "displayColor": 0,
    "isBot": true
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-all-access-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of external API users|Inline|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<h3 id="get-all-access-tokens-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ExternalAPIUser](#schemaexternalapiuser)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Delete a single external API user

<a id="opIdDeleteExternalAPIUser"></a>

> Code samples

```bash
curl http://localhost:8080/admin/accesstokens/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "token": "string"
  }'
```

`POST /admin/accesstokens/delete`

> Body parameter

```json
{
  "token": "string"
}
```

<h3 id="delete-a-single-external-api-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» token|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="delete-a-single-external-api-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|External API user successfully deleted|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Create a single access token

<a id="opIdCreateExternalAPIUser"></a>

> Code samples

```bash
curl http://localhost:8080/admin/accesstokens/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "scopes": [
      "string"
    ]
  }'
```

`POST /admin/accesstokens/create`

> Body parameter

```json
{
  "name": "string",
  "scopes": [
    "string"
  ]
}
```

<h3 id="create-a-single-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|false|none|
|» scopes|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "lastUsedAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "accessToken": "string",
  "displayName": "string",
  "type": "string",
  "scopes": [
    "string"
  ],
  "displayColor": 0,
  "isBot": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="create-a-single-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new external API user|[ExternalAPIUser](#schemaexternalapiuser)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Reset YP configuration

<a id="opIdResetYPRegistration"></a>

> Code samples

```bash
curl http://localhost:8080/admin/yp/reset \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /admin/yp/reset`

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="reset-yp-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|YP Registration has been reset|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get video playback metrics

<a id="opIdGetVideoPlaybackMetrics"></a>

> Code samples

```bash
curl http://localhost:8080/admin/metrics/video \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/metrics/video`

> Example responses

> 200 Response

```json
{
  "errors": [
    {
      "time": "1970-01-01T00:00:00Z",
      "value": 0
    }
  ],
  "qualityVariantChanges": [
    {
      "time": "1970-01-01T00:00:00Z",
      "value": 0
    }
  ],
  "highestLatency": [
    {
      "time": "1970-01-01T00:00:00Z",
      "value": 0
    }
  ],
  "medianLatency": [
    {
      "time": "1970-01-01T00:00:00Z",
      "value": 0
    }
  ],
  "lowestLatency": [
    {
      "time": "1970-01-01T00:00:00Z",
      "value": 0
    }
  ],
  "medianSegmentDownloadDuration": [
    {
      "time": "1970-01-01T00:00:00Z",
      "value": 0
    }
  ],
  "maximumSegmentDownloadDuration": [
    {
      "time": "1970-01-01T00:00:00Z",
      "value": 0
    }
  ],
  "minimumSegmentDownloadDuration": [
    {
      "time": "1970-01-01T00:00:00Z",
      "value": 0
    }
  ],
  "minPlayerBitrate": [
    {
      "time": "1970-01-01T00:00:00Z",
      "value": 0
    }
  ],
  "medianPlayerBitrate": [
    {
      "time": "1970-01-01T00:00:00Z",
      "value": 0
    }
  ],
  "maxPlayerBitrate": [
    {
      "time": "1970-01-01T00:00:00Z",
      "value": 0
    }
  ],
  "availableBitrates": [
    0
  ],
  "segmentLength": 0,
  "representation": 0
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-video-playback-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Video playback metrics|Inline|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<h3 id="get-video-playback-metrics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[TimestampedValue](#schematimestampedvalue)]|false|none|none|
|qualityVariantChanges|[[TimestampedValue](#schematimestampedvalue)]|false|none|none|
|highestLatency|[[TimestampedValue](#schematimestampedvalue)]|false|none|none|
|medianLatency|[[TimestampedValue](#schematimestampedvalue)]|false|none|none|
|lowestLatency|[[TimestampedValue](#schematimestampedvalue)]|false|none|none|
|medianSegmentDownloadDuration|[[TimestampedValue](#schematimestampedvalue)]|false|none|none|
|maximumSegmentDownloadDuration|[[TimestampedValue](#schematimestampedvalue)]|false|none|none|
|minimumSegmentDownloadDuration|[[TimestampedValue](#schematimestampedvalue)]|false|none|none|
|minPlayerBitrate|[[TimestampedValue](#schematimestampedvalue)]|false|none|none|
|medianPlayerBitrate|[[TimestampedValue](#schematimestampedvalue)]|false|none|none|
|maxPlayerBitrate|[[TimestampedValue](#schematimestampedvalue)]|false|none|none|
|availableBitrates|[integer]|false|none|none|
|segmentLength|integer|false|none|none|
|representation|integer|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Endpoint to interface with Prometheus

<a id="opIdGetPrometheusAPI"></a>

> Code samples

```bash
curl http://localhost:8080/admin/prometheus
```

`GET /admin/prometheus`

This endpoint interfaces with the Prometheus metrics API.

Learn more about it on the [Prometheus API docs](https://prometheus.io/docs/prometheus/latest/querying/api/)

<aside class="success">
This operation does not require authentication
</aside>

## Endpoint to interface with Prometheus

<a id="opIdPutPrometheusAPI"></a>

> Code samples

```bash
curl http://localhost:8080/admin/prometheus \
  -X PUT
```

`PUT /admin/prometheus`

This endpoint interfaces with the Prometheus metrics API.

Learn more about it on the [Prometheus API docs](https://prometheus.io/docs/prometheus/latest/querying/api/)

<aside class="success">
This operation does not require authentication
</aside>

## Endpoint to interface with Prometheus

<a id="opIdPostPrometheusAPI"></a>

> Code samples

```bash
curl http://localhost:8080/admin/prometheus \
  -X POST
```

`POST /admin/prometheus`

This endpoint interfaces with the Prometheus metrics API.

Learn more about it on the [Prometheus API docs](https://prometheus.io/docs/prometheus/latest/querying/api/)

<aside class="success">
This operation does not require authentication
</aside>

## Endpoint to interface with Prometheus

<a id="opIdDeletePrometheusAPI"></a>

> Code samples

```bash
curl http://localhost:8080/admin/prometheus \
  -X DELETE
```

`DELETE /admin/prometheus`

This endpoint interfaces with the Prometheus metrics API.

Learn more about it on the [Prometheus API docs](https://prometheus.io/docs/prometheus/latest/querying/api/)

<aside class="success">
This operation does not require authentication
</aside>

## Endpoint to interface with Prometheus

<a id="opIdOptionsPrometheusAPI"></a>

> Code samples

```bash
curl http://localhost:8080/admin/prometheus \
  -X OPTIONS
```

`OPTIONS /admin/prometheus`

This endpoint interfaces with the Prometheus metrics API.

Learn more about it on the [Prometheus API docs](https://prometheus.io/docs/prometheus/latest/querying/api/)

<aside class="success">
This operation does not require authentication
</aside>

## Send a public message to the Fediverse from the server's user

<a id="opIdSendFederatedMessage"></a>

> Code samples

```bash
curl http://localhost:8080/admin/federation/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/federation/send`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="send-a-public-message-to-the-fediverse-from-the-servers-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="send-a-public-message-to-the-fediverse-from-the-servers-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message sent|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Get a paginated list of federated activities

<a id="opIdGetFederatedActions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/federation/actions \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /admin/federation/actions`

<h3 id="get-a-paginated-list-of-federated-activities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|none|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "results": {
    "timestamp": "1970-01-01T00:00:00Z",
    "iri": "string",
    "actorIRI": "string",
    "type": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-a-paginated-list-of-federated-activities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of federated activities|[PaginatedFederatedActivity](#schemapaginatedfederatedactivity)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Begins auth flow

<a id="opIdStartIndieAuthFlow"></a>

> Code samples

```bash
curl 'http://localhost:8080/auth/indieauth?accessToken=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "authHost": "string"
  }'
```

`POST /auth/indieauth`

> Body parameter

```json
{
  "authHost": "string"
}
```

<h3 id="begins-auth-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessToken|query|string|true|none|
|body|body|object|false|none|
|» authHost|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "redirect": "http://example.com"
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="begins-auth-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Authentication redirect|Inline|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Unauthorized|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<h3 id="begins-auth-flow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|redirect|string(url)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Handle the redirect from an IndieAuth server to continue the auth flow

<a id="opIdHandleIndieAuthRedirect"></a>

> Code samples

```bash
curl 'http://localhost:8080/auth/indieauth/callback?state=string' \
  -H 'Accept: application/json'
```

`GET /auth/indieauth/callback`

<h3 id="handle-the-redirect-from-an-indieauth-server-to-continue-the-auth-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|state|query|string|true|none|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="handle-the-redirect-from-an-indieauth-server-to-continue-the-auth-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|307|Temporary Redirect|Redirected to home page|None|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Handles the IndieAuth auth endpoint

<a id="opIdHandleIndieAuthEndpointGet"></a>

> Code samples

```bash
curl 'http://localhost:8080/auth/provider/indieauth?client_id=string&redirect_uri=string&code_challenge=string&state=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /auth/provider/indieauth`

<h3 id="handles-the-indieauth-auth-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string|true|none|
|redirect_uri|query|string|true|none|
|code_challenge|query|string|true|none|
|state|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "me": "string",
  "profile": {
    "name": "string",
    "url": "string",
    "photo": "string"
  },
  "error": "string",
  "errorDescription": "string"
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> 500 Response

```json
{
  "error": "string"
}
```

<h3 id="handles-the-indieauth-auth-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|IndieAuth flow concluded|[IndieAuthResponse](#schemaindieauthresponse)|
|307|Temporary Redirect|Redirected to redirect URI|None|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## Handles IndieAuth from form submission

<a id="opIdHandleIndieAuthEndpointPost"></a>

> Code samples

```bash
curl http://localhost:8080/auth/provider/indieauth \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'code=string&redirect_uri=string&client_id=string&codeVerifier=string'
```

`POST /auth/provider/indieauth`

> Body parameter

```yaml
code: string
redirect_uri: string
client_id: string
codeVerifier: string
```

<h3 id="handles-indieauth-from-form-submission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Form submission from IndieAuth|
|» code|body|string|false|none|
|» redirect_uri|body|string|false|none|
|» client_id|body|string|false|none|
|» codeVerifier|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "me": "string",
  "profile": {
    "name": "string",
    "url": "string",
    "photo": "string"
  },
  "error": "string",
  "errorDescription": "string"
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="handles-indieauth-from-form-submission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|IndieAuth flow concluded|Inline|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|

<h3 id="handles-indieauth-from-form-submission-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[IndieAuthResponse](#schemaindieauthresponse)|false|none|none|
|*oneOf*|[IndieAuthServerProfileResponse](#schemaindieauthserverprofileresponse)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Register a Fediverse OTP request

<a id="opIdRegisterFediverseOTPRequest"></a>

> Code samples

```bash
curl 'http://localhost:8080/auth/fediverse?accessToken=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "account": "string"
  }'
```

`POST /auth/fediverse`

> Body parameter

```json
{
  "account": "string"
}
```

<h3 id="register-a-fediverse-otp-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessToken|query|string|true|none|
|body|body|object|false|none|
|» account|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="register-a-fediverse-otp-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OTP sent|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Unauthorized|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Verify Fediverse OTP code

<a id="opIdVerifyFediverseOTPRequest"></a>

> Code samples

```bash
curl http://localhost:8080/auth/fediverse/verify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "code": "string"
  }'
```

`POST /auth/fediverse/verify`

> Body parameter

```json
{
  "code": "string"
}
```

<h3 id="verify-fediverse-otp-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» code|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="verify-fediverse-otp-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OTP Verified|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="owncast-apis-chat">Chat</h1>

APIs related to operating the chat system.

## Get a user's details

<a id="opIdGetUserDetails"></a>

> Code samples

```bash
curl 'http://localhost:8080/moderation/chat/user/string?accessToken=string' \
  -H 'Accept: application/json'
```

`GET /moderation/chat/user/{userId}`

<h3 id="get-a-users-details-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The ID of the user to find|
|accessToken|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "user": {
    "createdAt": "string",
    "disabledAt": "string",
    "nameChangedAt": "string",
    "id": "string",
    "displayName": "string",
    "previousNames": [
      "string"
    ],
    "scopes": [
      "string"
    ],
    "authProviders": [
      "string"
    ],
    "displayColor": 0,
    "isBot": true,
    "authenticated": true,
    "disabledReason": "string"
  },
  "connectedClients": [
    {
      "connectedAt": "1970-01-01T00:00:00Z",
      "userAgent": "string",
      "geo": "string",
      "id": 0,
      "messageCount": 0
    }
  ],
  "messages": [
    {
      "timestamp": "string",
      "type": "string",
      "id": "string",
      "user": {
        "createdAt": "string",
        "disabledAt": "string",
        "nameChangedAt": "string",
        "id": "string",
        "displayName": "string",
        "previousNames": [
          "string"
        ],
        "scopes": [
          "string"
        ],
        "authProviders": [
          "string"
        ],
        "displayColor": 0,
        "isBot": true,
        "authenticated": true
      },
      "hiddenAt": "string",
      "clientId": 0,
      "body": "string"
    }
  ]
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="get-a-users-details-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User information|[ModerationUserDetails](#schemamoderationuserdetails)|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|None|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="owncast-apis-objects">Objects</h1>

Object definitions

## RegisterAnonymousChatUserOptions

<a id="opIdRegisterAnonymousChatUserOptions"></a>

> Code samples

```bash
curl http://localhost:8080/chat/register \
  -X OPTIONS
```

`OPTIONS /chat/register`

<h3 id="registeranonymouschatuseroptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## ReportCmcdOptions

<a id="opIdReportCmcdOptions"></a>

> Code samples

```bash
curl http://localhost:8080/metrics/cmcd \
  -X OPTIONS
```

`OPTIONS /metrics/cmcd`

<h3 id="reportcmcdoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## StatusAdminOptions

<a id="opIdStatusAdminOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/status \
  -X OPTIONS
```

`OPTIONS /admin/status`

<h3 id="statusadminoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## DisconnectInboundConnectionOptions

<a id="opIdDisconnectInboundConnectionOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/disconnect \
  -X OPTIONS
```

`OPTIONS /admin/disconnect`

<h3 id="disconnectinboundconnectionoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetServerConfigOptions

<a id="opIdGetServerConfigOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/serverconfig \
  -X OPTIONS
```

`OPTIONS /admin/serverconfig`

<h3 id="getserverconfigoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetViewersOverTimeOptions

<a id="opIdGetViewersOverTimeOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/viewersOverTime \
  -X OPTIONS
```

`OPTIONS /admin/viewersOverTime`

<h3 id="getviewersovertimeoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetActiveViewersOptions

<a id="opIdGetActiveViewersOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/viewers \
  -X OPTIONS
```

`OPTIONS /admin/viewers`

<h3 id="getactiveviewersoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetPlaybackClientsOptions

<a id="opIdGetPlaybackClientsOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/viewers/playback \
  -X OPTIONS
```

`OPTIONS /admin/viewers/playback`

<h3 id="getplaybackclientsoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetHardwareStatsOptions

<a id="opIdGetHardwareStatsOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/hardwarestats \
  -X OPTIONS
```

`OPTIONS /admin/hardwarestats`

<h3 id="gethardwarestatsoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetConnectedChatClientsOptions

<a id="opIdGetConnectedChatClientsOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/clients \
  -X OPTIONS
```

`OPTIONS /admin/chat/clients`

<h3 id="getconnectedchatclientsoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetChatMessagesAdminOptions

<a id="opIdGetChatMessagesAdminOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/messages \
  -X OPTIONS
```

`OPTIONS /admin/chat/messages`

<h3 id="getchatmessagesadminoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## UpdateMessageVisibilityAdminOptions

<a id="opIdUpdateMessageVisibilityAdminOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/messagevisibility \
  -X OPTIONS
```

`OPTIONS /admin/chat/messagevisibility`

<h3 id="updatemessagevisibilityadminoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## UpdateUserEnabledAdminOptions

<a id="opIdUpdateUserEnabledAdminOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/users/setenabled \
  -X OPTIONS
```

`OPTIONS /admin/chat/users/setenabled`

<h3 id="updateuserenabledadminoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetDisabledUsersOptions

<a id="opIdGetDisabledUsersOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/users/disabled \
  -X OPTIONS
```

`OPTIONS /admin/chat/users/disabled`

<h3 id="getdisabledusersoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## BanIPAddressOptions

<a id="opIdBanIPAddressOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/users/ipbans/create \
  -X OPTIONS
```

`OPTIONS /admin/chat/users/ipbans/create`

<h3 id="banipaddressoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## UnbanIPAddressOptions

<a id="opIdUnbanIPAddressOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/users/ipbans/remove \
  -X OPTIONS
```

`OPTIONS /admin/chat/users/ipbans/remove`

<h3 id="unbanipaddressoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetIPAddressBansOptions

<a id="opIdGetIPAddressBansOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/users/ipbans \
  -X OPTIONS
```

`OPTIONS /admin/chat/users/ipbans`

<h3 id="getipaddressbansoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## UpdateUserModeratorOptions

<a id="opIdUpdateUserModeratorOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/users/setmoderator \
  -X OPTIONS
```

`OPTIONS /admin/chat/users/setmoderator`

<h3 id="updateusermoderatoroptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetModeratorsOptions

<a id="opIdGetModeratorsOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/chat/users/moderators \
  -X OPTIONS
```

`OPTIONS /admin/chat/users/moderators`

<h3 id="getmoderatorsoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetUsersOptions

<a id="opIdGetUsersOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/users \
  -X OPTIONS
```

`OPTIONS /admin/users`

<h3 id="getusersoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## DeleteUserOptions

<a id="opIdDeleteUserOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/users/delete \
  -X OPTIONS
```

`OPTIONS /admin/users/delete`

<h3 id="deleteuseroptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetLogsOptions

<a id="opIdGetLogsOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/logs \
  -X OPTIONS
```

`OPTIONS /admin/logs`

<h3 id="getlogsoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetWarningsOptions

<a id="opIdGetWarningsOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/logs/warnings \
  -X OPTIONS
```

`OPTIONS /admin/logs/warnings`

<h3 id="getwarningsoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetFollowersAdminOptions

<a id="opIdGetFollowersAdminOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/followers \
  -X OPTIONS
```

`OPTIONS /admin/followers`

<h3 id="getfollowersadminoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetPendingFollowRequestsOptions

<a id="opIdGetPendingFollowRequestsOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/followers/pending \
  -X OPTIONS
```

`OPTIONS /admin/followers/pending`

<h3 id="getpendingfollowrequestsoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetBlockedAndRejectedFollowersOptions

<a id="opIdGetBlockedAndRejectedFollowersOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/followers/blocked \
  -X OPTIONS
```

`OPTIONS /admin/followers/blocked`

<h3 id="getblockedandrejectedfollowersoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetDirectoryFollowersOptions

<a id="opIdGetDirectoryFollowersOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/followers/directory \
  -X OPTIONS
```

`OPTIONS /admin/followers/directory`

<h3 id="getdirectoryfollowersoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## ApproveFollowerOptions

<a id="opIdApproveFollowerOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/followers/approve \
  -X OPTIONS
```

`OPTIONS /admin/followers/approve`

<h3 id="approvefolloweroptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## RemoveFollowerOptions

<a id="opIdRemoveFollowerOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/followers/remove \
  -X OPTIONS
```

`OPTIONS /admin/followers/remove`

<h3 id="removefolloweroptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## UploadCustomEmojiOptions

<a id="opIdUploadCustomEmojiOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/emoji/upload \
  -X OPTIONS
```

`OPTIONS /admin/emoji/upload`

<h3 id="uploadcustomemojioptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## DeleteCustomEmojiOptions

<a id="opIdDeleteCustomEmojiOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/emoji/delete \
  -X OPTIONS
```

`OPTIONS /admin/emoji/delete`

<h3 id="deletecustomemojioptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetAdminPasswordOptions

<a id="opIdSetAdminPasswordOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/adminpass \
  -X OPTIONS
```

`OPTIONS /admin/config/adminpass`

<h3 id="setadminpasswordoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetStreamKeysOptions

<a id="opIdSetStreamKeysOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/streamkeys \
  -X OPTIONS
```

`OPTIONS /admin/config/streamkeys`

<h3 id="setstreamkeysoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetExtraPageContentOptions

<a id="opIdSetExtraPageContentOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/pagecontent \
  -X OPTIONS
```

`OPTIONS /admin/config/pagecontent`

<h3 id="setextrapagecontentoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetStreamTitleOptions

<a id="opIdSetStreamTitleOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/streamtitle \
  -X OPTIONS
```

`OPTIONS /admin/config/streamtitle`

<h3 id="setstreamtitleoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Change the server name

<a id="opIdSetServerName"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/name \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/name`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="change-the-server-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="change-the-server-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Server name has been changed|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## SetServerNameOptions

<a id="opIdSetServerNameOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/name \
  -X OPTIONS
```

`OPTIONS /admin/config/name`

<h3 id="setservernameoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Change the server summary

<a id="opIdSetServerSummary"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/serversummary \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/serversummary`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="change-the-server-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="change-the-server-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Server summary has been changed|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## SetServerSummaryOptions

<a id="opIdSetServerSummaryOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/serversummary \
  -X OPTIONS
```

`OPTIONS /admin/config/serversummary`

<h3 id="setserversummaryoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Change the offline message

<a id="opIdSetCustomOfflineMessage"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/offlinemessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "value": "string"
  }'
```

`POST /admin/config/offlinemessage`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="change-the-offline-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminConfigValue](#schemaadminconfigvalue)|false|A single value that is used in the request|
|» value|body|string \| boolean \| [string] \| number|false|none|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|boolean|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "success": true
}
```

> 400 Response

```json
{
  "message": "string",
  "success": true
}
```

> default Response

```json
{
  "message": "string",
  "success": true
}
```

<h3 id="change-the-offline-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Offline message has been changed|[BaseAPIResponse](#schemabaseapiresponse)|
|400|Bad Request|Bad request|[BaseAPIResponse](#schemabaseapiresponse)|
|401|Unauthorized|Basic auth failure|Inline|
|default|Default|Unexpected error|[BaseAPIResponse](#schemabaseapiresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|Access-Control-Allow-Origin|string||none|
|401|Access-Control-Allow-Credentials|string|boolean|none|
|401|Access-Control-Allow-Headers|string||none|
|401|WWW-Authenticate|string||none|
|401|X-Content-Type-Options|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## SetCustomOfflineMessageOptions

<a id="opIdSetCustomOfflineMessageOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/offlinemessage \
  -X OPTIONS
```

`OPTIONS /admin/config/offlinemessage`

<h3 id="setcustomofflinemessageoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetServerWelcomeMessageOptions

<a id="opIdSetServerWelcomeMessageOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/welcomemessage \
  -X OPTIONS
```

`OPTIONS /admin/config/welcomemessage`

<h3 id="setserverwelcomemessageoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetChatDisabledOptions

<a id="opIdSetChatDisabledOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/chat/disable \
  -X OPTIONS
```

`OPTIONS /admin/config/chat/disable`

<h3 id="setchatdisabledoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetChatJoinMessagesEnabledOptions

<a id="opIdSetChatJoinMessagesEnabledOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/chat/joinmessagesenabled \
  -X OPTIONS
```

`OPTIONS /admin/config/chat/joinmessagesenabled`

<h3 id="setchatjoinmessagesenabledoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetEnableEstablishedChatUserModeOptions

<a id="opIdSetEnableEstablishedChatUserModeOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/chat/establishedusermode \
  -X OPTIONS
```

`OPTIONS /admin/config/chat/establishedusermode`

<h3 id="setenableestablishedchatusermodeoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetForbiddenUsernameListOptions

<a id="opIdSetForbiddenUsernameListOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/chat/forbiddenusernames \
  -X OPTIONS
```

`OPTIONS /admin/config/chat/forbiddenusernames`

<h3 id="setforbiddenusernamelistoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetSuggestedUsernameListOptions

<a id="opIdSetSuggestedUsernameListOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/chat/suggestedusernames \
  -X OPTIONS
```

`OPTIONS /admin/config/chat/suggestedusernames`

<h3 id="setsuggestedusernamelistoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetChatSpamProtectionEnabledOptions

<a id="opIdSetChatSpamProtectionEnabledOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/chat/spamprotectionenabled \
  -X OPTIONS
```

`OPTIONS /admin/config/chat/spamprotectionenabled`

<h3 id="setchatspamprotectionenabledoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetChatSlurFilterEnabledOptions

<a id="opIdSetChatSlurFilterEnabledOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/chat/slurfilterenabled \
  -X OPTIONS
```

`OPTIONS /admin/config/chat/slurfilterenabled`

<h3 id="setchatslurfilterenabledoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetChatRequireAuthenticationOptions

<a id="opIdSetChatRequireAuthenticationOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/chat/requireauthentication \
  -X OPTIONS
```

`OPTIONS /admin/config/chat/requireauthentication`

<h3 id="setchatrequireauthenticationoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetVideoCodecOptions

<a id="opIdSetVideoCodecOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/video/codec \
  -X OPTIONS
```

`OPTIONS /admin/config/video/codec`

<h3 id="setvideocodecoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetStreamLatencyLevelOptions

<a id="opIdSetStreamLatencyLevelOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/video/streamlatencylevel \
  -X OPTIONS
```

`OPTIONS /admin/config/video/streamlatencylevel`

<h3 id="setstreamlatencyleveloptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetStreamOutputVariantsOptions

<a id="opIdSetStreamOutputVariantsOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/video/streamoutputvariants \
  -X OPTIONS
```

`OPTIONS /admin/config/video/streamoutputvariants`

<h3 id="setstreamoutputvariantsoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetCustomColorVariableValuesOptions

<a id="opIdSetCustomColorVariableValuesOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/appearance \
  -X OPTIONS
```

`OPTIONS /admin/config/appearance`

<h3 id="setcustomcolorvariablevaluesoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetLogoOptions

<a id="opIdSetLogoOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/logo \
  -X OPTIONS
```

`OPTIONS /admin/config/logo`

<h3 id="setlogooptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetFaviconOptions

<a id="opIdSetFaviconOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/favicon \
  -X OPTIONS
```

`OPTIONS /admin/config/favicon`

<h3 id="setfaviconoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetTagsOptions

<a id="opIdSetTagsOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/tags \
  -X OPTIONS
```

`OPTIONS /admin/config/tags`

<h3 id="settagsoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetFfmpegPathOptions

<a id="opIdSetFfmpegPathOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/ffmpegpath \
  -X OPTIONS
```

`OPTIONS /admin/config/ffmpegpath`

<h3 id="setffmpegpathoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetWebServerPortOptions

<a id="opIdSetWebServerPortOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/webserverport \
  -X OPTIONS
```

`OPTIONS /admin/config/webserverport`

<h3 id="setwebserverportoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetWebServerIPOptions

<a id="opIdSetWebServerIPOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/webserverip \
  -X OPTIONS
```

`OPTIONS /admin/config/webserverip`

<h3 id="setwebserveripoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetRTMPServerPortOptions

<a id="opIdSetRTMPServerPortOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/rtmpserverport \
  -X OPTIONS
```

`OPTIONS /admin/config/rtmpserverport`

<h3 id="setrtmpserverportoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetRTMPServerBindAddressOptions

<a id="opIdSetRTMPServerBindAddressOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/rtmpserverbindaddress \
  -X OPTIONS
```

`OPTIONS /admin/config/rtmpserverbindaddress`

<h3 id="setrtmpserverbindaddressoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetSocketHostOverrideOptions

<a id="opIdSetSocketHostOverrideOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/sockethostoverride \
  -X OPTIONS
```

`OPTIONS /admin/config/sockethostoverride`

<h3 id="setsockethostoverrideoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetVideoServingEndpointOptions

<a id="opIdSetVideoServingEndpointOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/videoservingendpoint \
  -X OPTIONS
```

`OPTIONS /admin/config/videoservingendpoint`

<h3 id="setvideoservingendpointoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetNSFWOptions

<a id="opIdSetNSFWOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/nsfw \
  -X OPTIONS
```

`OPTIONS /admin/config/nsfw`

<h3 id="setnsfwoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetAutoplayOptions

<a id="opIdSetAutoplayOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/autoplay \
  -X OPTIONS
```

`OPTIONS /admin/config/autoplay`

<h3 id="setautoplayoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetDirectoryEnabledOptions

<a id="opIdSetDirectoryEnabledOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/directoryenabled \
  -X OPTIONS
```

`OPTIONS /admin/config/directoryenabled`

<h3 id="setdirectoryenabledoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetSocialHandlesOptions

<a id="opIdSetSocialHandlesOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/socialhandles \
  -X OPTIONS
```

`OPTIONS /admin/config/socialhandles`

<h3 id="setsocialhandlesoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetS3ConfigurationOptions

<a id="opIdSetS3ConfigurationOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/s3 \
  -X OPTIONS
```

`OPTIONS /admin/config/s3`

<h3 id="sets3configurationoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetServerURLOptions

<a id="opIdSetServerURLOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/serverurl \
  -X OPTIONS
```

`OPTIONS /admin/config/serverurl`

<h3 id="setserverurloptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetExternalActionsOptions

<a id="opIdSetExternalActionsOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/externalactions \
  -X OPTIONS
```

`OPTIONS /admin/config/externalactions`

<h3 id="setexternalactionsoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetCustomStylesOptions

<a id="opIdSetCustomStylesOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/customstyles \
  -X OPTIONS
```

`OPTIONS /admin/config/customstyles`

<h3 id="setcustomstylesoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetCustomJavascriptOptions

<a id="opIdSetCustomJavascriptOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/customjavascript \
  -X OPTIONS
```

`OPTIONS /admin/config/customjavascript`

<h3 id="setcustomjavascriptoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetHideViewerCountOptions

<a id="opIdSetHideViewerCountOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/hideviewercount \
  -X OPTIONS
```

`OPTIONS /admin/config/hideviewercount`

<h3 id="sethideviewercountoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetDisableSearchIndexingOptions

<a id="opIdSetDisableSearchIndexingOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/disablesearchindexing \
  -X OPTIONS
```

`OPTIONS /admin/config/disablesearchindexing`

<h3 id="setdisablesearchindexingoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetFederationEnabledOptions

<a id="opIdSetFederationEnabledOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/federation/enable \
  -X OPTIONS
```

`OPTIONS /admin/config/federation/enable`

<h3 id="setfederationenabledoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetFederationActivityPrivateOptions

<a id="opIdSetFederationActivityPrivateOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/federation/private \
  -X OPTIONS
```

`OPTIONS /admin/config/federation/private`

<h3 id="setfederationactivityprivateoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetFederationShowEngagementOptions

<a id="opIdSetFederationShowEngagementOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/federation/showengagement \
  -X OPTIONS
```

`OPTIONS /admin/config/federation/showengagement`

<h3 id="setfederationshowengagementoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetFederationEnableQuotesOptions

<a id="opIdSetFederationEnableQuotesOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/federation/enablequotes \
  -X OPTIONS
```

`OPTIONS /admin/config/federation/enablequotes`

<h3 id="setfederationenablequotesoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetFederationHideFollowersTabOptions

<a id="opIdSetFederationHideFollowersTabOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/federation/hidefollowers \
  -X OPTIONS
```

`OPTIONS /admin/config/federation/hidefollowers`

<h3 id="setfederationhidefollowerstaboptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetFederationUsernameOptions

<a id="opIdSetFederationUsernameOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/federation/username \
  -X OPTIONS
```

`OPTIONS /admin/config/federation/username`

<h3 id="setfederationusernameoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetFederationGoLiveMessageOptions

<a id="opIdSetFederationGoLiveMessageOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/federation/livemessage \
  -X OPTIONS
```

`OPTIONS /admin/config/federation/livemessage`

<h3 id="setfederationgolivemessageoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetFederationBlockDomainsOptions

<a id="opIdSetFederationBlockDomainsOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/federation/blockdomains \
  -X OPTIONS
```

`OPTIONS /admin/config/federation/blockdomains`

<h3 id="setfederationblockdomainsoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## AddFederatedServerOptions

<a id="opIdAddFederatedServerOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/federation/servers \
  -X OPTIONS
```

`OPTIONS /admin/federation/servers`

<h3 id="addfederatedserveroptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## RemoveFederatedServerOptions

<a id="opIdRemoveFederatedServerOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/federation/servers/0 \
  -X OPTIONS
```

`OPTIONS /admin/federation/servers/{id}`

<h3 id="removefederatedserveroptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the federated server to remove|

<h3 id="removefederatedserveroptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## ReorderFederatedServerOptions

<a id="opIdReorderFederatedServerOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/federation/servers/0/reorder \
  -X OPTIONS
```

`OPTIONS /admin/federation/servers/{id}/reorder`

<h3 id="reorderfederatedserveroptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of the federated server to reorder|

<h3 id="reorderfederatedserveroptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetDiscordNotificationConfigurationOptions

<a id="opIdSetDiscordNotificationConfigurationOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/notifications/discord \
  -X OPTIONS
```

`OPTIONS /admin/config/notifications/discord`

<h3 id="setdiscordnotificationconfigurationoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SetBrowserNotificationConfigurationOptions

<a id="opIdSetBrowserNotificationConfigurationOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/config/notifications/browser \
  -X OPTIONS
```

`OPTIONS /admin/config/notifications/browser`

<h3 id="setbrowsernotificationconfigurationoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetWebhooksOptions

<a id="opIdGetWebhooksOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/webhooks \
  -X OPTIONS
```

`OPTIONS /admin/webhooks`

<h3 id="getwebhooksoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## DeleteWebhookOptions

<a id="opIdDeleteWebhookOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/webhooks/delete \
  -X OPTIONS
```

`OPTIONS /admin/webhooks/delete`

<h3 id="deletewebhookoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## CreateWebhookOptions

<a id="opIdCreateWebhookOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/webhooks/create \
  -X OPTIONS
```

`OPTIONS /admin/webhooks/create`

<h3 id="createwebhookoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetExternalAPIUsersOptions

<a id="opIdGetExternalAPIUsersOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/accesstokens \
  -X OPTIONS
```

`OPTIONS /admin/accesstokens`

<h3 id="getexternalapiusersoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## DeleteExternalAPIUserOptions

<a id="opIdDeleteExternalAPIUserOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/accesstokens/delete \
  -X OPTIONS
```

`OPTIONS /admin/accesstokens/delete`

<h3 id="deleteexternalapiuseroptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## CreateExternalAPIUserOptions

<a id="opIdCreateExternalAPIUserOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/accesstokens/create \
  -X OPTIONS
```

`OPTIONS /admin/accesstokens/create`

<h3 id="createexternalapiuseroptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## ResetYPRegistrationOptions

<a id="opIdResetYPRegistrationOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/yp/reset \
  -X OPTIONS
```

`OPTIONS /admin/yp/reset`

<h3 id="resetypregistrationoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetVideoPlaybackMetricsOptions

<a id="opIdGetVideoPlaybackMetricsOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/metrics/video \
  -X OPTIONS
```

`OPTIONS /admin/metrics/video`

<h3 id="getvideoplaybackmetricsoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SendFederatedMessageOptions

<a id="opIdSendFederatedMessageOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/federation/send \
  -X OPTIONS
```

`OPTIONS /admin/federation/send`

<h3 id="sendfederatedmessageoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetFederatedActionsOptions

<a id="opIdGetFederatedActionsOptions"></a>

> Code samples

```bash
curl http://localhost:8080/admin/federation/actions \
  -X OPTIONS
```

`OPTIONS /admin/federation/actions`

<h3 id="getfederatedactionsoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SendSystemMessageOptions

<a id="opIdSendSystemMessageOptions"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/chat/system \
  -X OPTIONS
```

`OPTIONS /integrations/chat/system`

<h3 id="sendsystemmessageoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SendSystemMessageToConnectedClientOptions

<a id="opIdSendSystemMessageToConnectedClientOptions"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/chat/system/client/0 \
  -X OPTIONS
```

`OPTIONS /integrations/chat/system/client/{clientId}`

<h3 id="sendsystemmessagetoconnectedclientoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientId|path|integer|true|The ID of the specified client|

<h3 id="sendsystemmessagetoconnectedclientoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SendUserMessageOptions

<a id="opIdSendUserMessageOptions"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/chat/user \
  -X OPTIONS
```

`OPTIONS /integrations/chat/user`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="sendusermessageoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SendIntegrationChatMessageOptions

<a id="opIdSendIntegrationChatMessageOptions"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/chat/send \
  -X OPTIONS
```

`OPTIONS /integrations/chat/send`

<h3 id="sendintegrationchatmessageoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## SendChatActionOptions

<a id="opIdSendChatActionOptions"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/chat/action \
  -X OPTIONS
```

`OPTIONS /integrations/chat/action`

<h3 id="sendchatactionoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## ExternalUpdateMessageVisibilityOptions

<a id="opIdExternalUpdateMessageVisibilityOptions"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/chat/messagevisibility \
  -X OPTIONS
```

`OPTIONS /integrations/chat/messagevisibility`

<h3 id="externalupdatemessagevisibilityoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## ExternalSetStreamTitleOptions

<a id="opIdExternalSetStreamTitleOptions"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/streamtitle \
  -X OPTIONS
```

`OPTIONS /integrations/streamtitle`

<h3 id="externalsetstreamtitleoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## ExternalGetChatMessagesOptions

<a id="opIdExternalGetChatMessagesOptions"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/chat \
  -X OPTIONS
```

`OPTIONS /integrations/chat`

<h3 id="externalgetchatmessagesoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## ExternalGetConnectedChatClientsOptions

<a id="opIdExternalGetConnectedChatClientsOptions"></a>

> Code samples

```bash
curl http://localhost:8080/integrations/clients \
  -X OPTIONS
```

`OPTIONS /integrations/clients`

<h3 id="externalgetconnectedchatclientsoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error": "string"
}
```

Structure for an error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<h2 id="tocS_BaseAPIResponse">BaseAPIResponse</h2>
<!-- backwards compatibility -->
<a id="schemabaseapiresponse"></a>
<a id="schema_BaseAPIResponse"></a>
<a id="tocSbaseapiresponse"></a>
<a id="tocsbaseapiresponse"></a>

```json
{
  "message": "string",
  "success": true
}
```

Simple API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "serverTime": "string",
  "lastConnectTime": "string",
  "lastDisconnectTime": "string",
  "versionNumber": "string",
  "viewerCount": 0,
  "online": true,
  "streamTitle": "string"
}
```

Response for status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serverTime|string|false|none|none|
|lastConnectTime|string \| null|false|none|none|
|lastDisconnectTime|string \| null|false|none|none|
|versionNumber|string|false|none|none|
|viewerCount|integer|false|none|none|
|online|boolean|false|none|none|
|streamTitle|string|false|none|none|

<h2 id="tocS_Emojis">Emojis</h2>
<!-- backwards compatibility -->
<a id="schemaemojis"></a>
<a id="schema_Emojis"></a>
<a id="tocSemojis"></a>
<a id="tocsemojis"></a>

```json
[
  {
    "name": "string",
    "url": "string"
  }
]
```

<h2 id="tocS_Emoji">Emoji</h2>
<!-- backwards compatibility -->
<a id="schemaemoji"></a>
<a id="schema_Emoji"></a>
<a id="tocSemoji"></a>
<a id="tocsemoji"></a>

```json
{
  "name": "string",
  "url": "string"
}
```

Name and url for an emoji

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the emoji|
|url|string|false|none|URL for the emoji image|

<h2 id="tocS_AnonymousUser">AnonymousUser</h2>
<!-- backwards compatibility -->
<a id="schemaanonymoususer"></a>
<a id="schema_AnonymousUser"></a>
<a id="tocSanonymoususer"></a>
<a id="tocsanonymoususer"></a>

```json
{
  "id": "string",
  "accessToken": "string",
  "displayName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|accessToken|string|false|none|none|
|displayName|string|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "createdAt": "string",
  "disabledAt": "string",
  "nameChangedAt": "string",
  "id": "string",
  "displayName": "string",
  "previousNames": [
    "string"
  ],
  "scopes": [
    "string"
  ],
  "authProviders": [
    "string"
  ],
  "displayColor": 0,
  "isBot": true,
  "authenticated": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string|false|none|none|
|disabledAt|string|false|none|none|
|nameChangedAt|string|false|none|none|
|id|string|false|none|none|
|displayName|string|false|none|none|
|previousNames|[string]|false|none|none|
|scopes|[string]|false|none|none|
|authProviders|[string]|false|none|Friendly names of the external auth methods this user signed in with (e.g. IndieAuth, Fediverse, or a plugin slug). Absent for anonymous users.|
|displayColor|integer|false|none|none|
|isBot|boolean|false|none|none|
|authenticated|boolean|false|none|none|

<h2 id="tocS_UserWithDisabledReason">UserWithDisabledReason</h2>
<!-- backwards compatibility -->
<a id="schemauserwithdisabledreason"></a>
<a id="schema_UserWithDisabledReason"></a>
<a id="tocSuserwithdisabledreason"></a>
<a id="tocsuserwithdisabledreason"></a>

```json
{
  "createdAt": "string",
  "disabledAt": "string",
  "nameChangedAt": "string",
  "id": "string",
  "displayName": "string",
  "previousNames": [
    "string"
  ],
  "scopes": [
    "string"
  ],
  "authProviders": [
    "string"
  ],
  "displayColor": 0,
  "isBot": true,
  "authenticated": true,
  "disabledReason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string|false|none|none|
|disabledAt|string|false|none|none|
|nameChangedAt|string|false|none|none|
|id|string|false|none|none|
|displayName|string|false|none|none|
|previousNames|[string]|false|none|none|
|scopes|[string]|false|none|none|
|authProviders|[string]|false|none|Friendly names of the external auth methods this user signed in with (e.g. IndieAuth, Fediverse, or a plugin slug). Absent for anonymous users.|
|displayColor|integer|false|none|none|
|isBot|boolean|false|none|none|
|authenticated|boolean|false|none|none|
|disabledReason|string|false|none|Reason provided when the user was disabled.|

<h2 id="tocS_Users">Users</h2>
<!-- backwards compatibility -->
<a id="schemausers"></a>
<a id="schema_Users"></a>
<a id="tocSusers"></a>
<a id="tocsusers"></a>

```json
[
  {
    "createdAt": "string",
    "disabledAt": "string",
    "nameChangedAt": "string",
    "id": "string",
    "displayName": "string",
    "previousNames": [
      "string"
    ],
    "scopes": [
      "string"
    ],
    "authProviders": [
      "string"
    ],
    "displayColor": 0,
    "isBot": true,
    "authenticated": true,
    "disabledReason": "string"
  }
]
```

<h2 id="tocS_PaginatedUsers">PaginatedUsers</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedusers"></a>
<a id="schema_PaginatedUsers"></a>
<a id="tocSpaginatedusers"></a>
<a id="tocspaginatedusers"></a>

```json
{
  "total": 0,
  "results": [
    {
      "createdAt": "string",
      "disabledAt": "string",
      "nameChangedAt": "string",
      "id": "string",
      "displayName": "string",
      "previousNames": [
        "string"
      ],
      "scopes": [
        "string"
      ],
      "authProviders": [
        "string"
      ],
      "displayColor": 0,
      "isBot": true,
      "authenticated": true,
      "disabledReason": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|results|[Users](#schemausers)|false|none|none|

<h2 id="tocS_Follower">Follower</h2>
<!-- backwards compatibility -->
<a id="schemafollower"></a>
<a id="schema_Follower"></a>
<a id="tocSfollower"></a>
<a id="tocsfollower"></a>

```json
{
  "link": "string",
  "name": "string",
  "username": "string",
  "image": "string",
  "timestamp": "string",
  "disabledAt": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|string|false|none|The IRI of the remote actor.|
|name|string|false|none|The display name of the follower.|
|username|string|false|none|The account username of the remote actor.|
|image|string|false|none|The avatar image of the follower.|
|timestamp|string|false|none|When this follow request was created.|
|disabledAt|string|false|none|When this follower was rejected or disabled.|

<h2 id="tocS_Followers">Followers</h2>
<!-- backwards compatibility -->
<a id="schemafollowers"></a>
<a id="schema_Followers"></a>
<a id="tocSfollowers"></a>
<a id="tocsfollowers"></a>

```json
[
  {
    "link": "string",
    "name": "string",
    "username": "string",
    "image": "string",
    "timestamp": "string",
    "disabledAt": "string"
  }
]
```

<h2 id="tocS_PaginatedFollowers">PaginatedFollowers</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedfollowers"></a>
<a id="schema_PaginatedFollowers"></a>
<a id="tocSpaginatedfollowers"></a>
<a id="tocspaginatedfollowers"></a>

```json
{
  "total": 0,
  "results": [
    {
      "link": "string",
      "name": "string",
      "username": "string",
      "image": "string",
      "timestamp": "string",
      "disabledAt": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|results|[Followers](#schemafollowers)|false|none|none|

<h2 id="tocS_FederatedServer">FederatedServer</h2>
<!-- backwards compatibility -->
<a id="schemafederatedserver"></a>
<a id="schema_FederatedServer"></a>
<a id="tocSfederatedserver"></a>
<a id="tocsfederatedserver"></a>

```json
{
  "id": 0,
  "iri": "http://example.com",
  "name": "string",
  "logoUrl": "http://example.com",
  "isOnline": true,
  "streamTitle": "string",
  "streamDescription": "string",
  "tags": [
    "string"
  ],
  "thumbnailUrl": "http://example.com",
  "displayName": "string",
  "summary": "string",
  "lastSeenOnline": "1970-01-01T00:00:00Z",
  "lastStatusUpdate": "1970-01-01T00:00:00Z",
  "addedAt": "1970-01-01T00:00:00Z",
  "followedAt": "1970-01-01T00:00:00Z",
  "username": "string",
  "acceptedAt": "1970-01-01T00:00:00Z",
  "rejectedAt": "1970-01-01T00:00:00Z",
  "pending": true,
  "followStatus": "string",
  "priority": 0
}
```

A federated Owncast server that we follow

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Unique identifier for the federated server|
|iri|string(uri)|false|none|IRI/URL of the federated server|
|name|string|false|none|Display name of the federated server|
|logoUrl|string(uri)|false|none|URL of the server's logo image|
|isOnline|boolean|false|none|Whether the server is currently online/streaming|
|streamTitle|string|false|none|Title of the current stream (when online)|
|streamDescription|string|false|none|Description of the current stream (when online)|
|tags|[string]|false|none|Tags associated with the current stream|
|thumbnailUrl|string(uri)|false|none|URL of the current stream thumbnail|
|displayName|string|false|none|Human-friendly display name of the federated server|
|summary|string|false|none|none|
|lastSeenOnline|string(date-time)|false|none|Last time the server was seen online|
|lastStatusUpdate|string(date-time)|false|none|Last time we received a status update|
|addedAt|string(date-time)|false|none|When we started tracking this server|
|followedAt|string(date-time)|false|none|When we started following this server|
|username|string|false|none|none|
|acceptedAt|string(date-time)|false|none|none|
|rejectedAt|string(date-time)|false|none|none|
|pending|boolean|false|none|none|
|followStatus|string|false|none|none|
|priority|integer|false|none|none|

<h2 id="tocS_PublicFederatedServer">PublicFederatedServer</h2>
<!-- backwards compatibility -->
<a id="schemapublicfederatedserver"></a>
<a id="schema_PublicFederatedServer"></a>
<a id="tocSpublicfederatedserver"></a>
<a id="tocspublicfederatedserver"></a>

```json
{
  "id": 0,
  "iri": "http://example.com",
  "name": "string",
  "displayName": "string",
  "summary": "string",
  "logoUrl": "http://example.com",
  "isOnline": true,
  "streamTitle": "string",
  "streamDescription": "string",
  "tags": [
    "string"
  ],
  "thumbnailUrl": "http://example.com"
}
```

A public featured Owncast server, ordered by canonical priority.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|iri|string(uri)|false|none|none|
|name|string|false|none|none|
|displayName|string|false|none|none|
|summary|string|false|none|none|
|logoUrl|string(uri)|false|none|none|
|isOnline|boolean|false|none|none|
|streamTitle|string|false|none|none|
|streamDescription|string|false|none|none|
|tags|[string]|false|none|none|
|thumbnailUrl|string(uri)|false|none|none|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "timestamp": "string",
  "type": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string|false|none|none|
|type|string|false|none|none|
|id|string|false|none|none|

<h2 id="tocS_UserEvent">UserEvent</h2>
<!-- backwards compatibility -->
<a id="schemauserevent"></a>
<a id="schema_UserEvent"></a>
<a id="tocSuserevent"></a>
<a id="tocsuserevent"></a>

```json
{
  "user": {
    "createdAt": "string",
    "disabledAt": "string",
    "nameChangedAt": "string",
    "id": "string",
    "displayName": "string",
    "previousNames": [
      "string"
    ],
    "scopes": [
      "string"
    ],
    "authProviders": [
      "string"
    ],
    "displayColor": 0,
    "isBot": true,
    "authenticated": true
  },
  "hiddenAt": "string",
  "clientId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|[User](#schemauser)|false|none|none|
|hiddenAt|string|false|none|none|
|clientId|integer|false|none|none|

<h2 id="tocS_MessageEvent">MessageEvent</h2>
<!-- backwards compatibility -->
<a id="schemamessageevent"></a>
<a id="schema_MessageEvent"></a>
<a id="tocSmessageevent"></a>
<a id="tocsmessageevent"></a>

```json
{
  "body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|none|

<h2 id="tocS_ChatMessages">ChatMessages</h2>
<!-- backwards compatibility -->
<a id="schemachatmessages"></a>
<a id="schema_ChatMessages"></a>
<a id="tocSchatmessages"></a>
<a id="tocschatmessages"></a>

```json
[
  {
    "timestamp": "string",
    "type": "string",
    "id": "string",
    "user": {
      "createdAt": "string",
      "disabledAt": "string",
      "nameChangedAt": "string",
      "id": "string",
      "displayName": "string",
      "previousNames": [
        "string"
      ],
      "scopes": [
        "string"
      ],
      "authProviders": [
        "string"
      ],
      "displayColor": 0,
      "isBot": true,
      "authenticated": true
    },
    "hiddenAt": "string",
    "clientId": 0,
    "body": "string"
  }
]
```

<h2 id="tocS_UserMessage">UserMessage</h2>
<!-- backwards compatibility -->
<a id="schemausermessage"></a>
<a id="schema_UserMessage"></a>
<a id="tocSusermessage"></a>
<a id="tocsusermessage"></a>

```json
{
  "timestamp": "string",
  "type": "string",
  "id": "string",
  "user": {
    "createdAt": "string",
    "disabledAt": "string",
    "nameChangedAt": "string",
    "id": "string",
    "displayName": "string",
    "previousNames": [
      "string"
    ],
    "scopes": [
      "string"
    ],
    "authProviders": [
      "string"
    ],
    "displayColor": 0,
    "isBot": true,
    "authenticated": true
  },
  "hiddenAt": "string",
  "clientId": 0,
  "body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string|false|none|none|
|type|string|false|none|none|
|id|string|false|none|none|
|user|[User](#schemauser)|false|none|none|
|hiddenAt|string|false|none|none|
|clientId|integer|false|none|none|
|body|string|false|none|none|

<h2 id="tocS_SystemMessage">SystemMessage</h2>
<!-- backwards compatibility -->
<a id="schemasystemmessage"></a>
<a id="schema_SystemMessage"></a>
<a id="tocSsystemmessage"></a>
<a id="tocssystemmessage"></a>

```json
{
  "timestamp": "string",
  "type": "string",
  "id": "string",
  "body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string|false|none|none|
|type|string|false|none|none|
|id|string|false|none|none|
|body|string|false|none|none|

<h2 id="tocS_SystemActionEvent">SystemActionEvent</h2>
<!-- backwards compatibility -->
<a id="schemasystemactionevent"></a>
<a id="schema_SystemActionEvent"></a>
<a id="tocSsystemactionevent"></a>
<a id="tocssystemactionevent"></a>

```json
{
  "timestamp": "string",
  "type": "string",
  "id": "string",
  "body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string|false|none|none|
|type|string|false|none|none|
|id|string|false|none|none|
|body|string|false|none|none|

<h2 id="tocS_ActionMessage">ActionMessage</h2>
<!-- backwards compatibility -->
<a id="schemaactionmessage"></a>
<a id="schema_ActionMessage"></a>
<a id="tocSactionmessage"></a>
<a id="tocsactionmessage"></a>

```json
{
  "timestamp": "string",
  "type": "string",
  "id": "string",
  "body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string|false|none|none|
|type|string|false|none|none|
|id|string|false|none|none|
|body|string|false|none|none|

<h2 id="tocS_FederatedAction">FederatedAction</h2>
<!-- backwards compatibility -->
<a id="schemafederatedaction"></a>
<a id="schema_FederatedAction"></a>
<a id="tocSfederatedaction"></a>
<a id="tocsfederatedaction"></a>

```json
{
  "timestamp": "string",
  "type": "string",
  "id": "string",
  "body": "string",
  "image": "string",
  "link": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string|false|none|none|
|type|string|false|none|none|
|id|string|false|none|none|
|body|string|false|none|none|
|image|string|false|none|none|
|link|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_WebConfig">WebConfig</h2>
<!-- backwards compatibility -->
<a id="schemawebconfig"></a>
<a id="schema_WebConfig"></a>
<a id="tocSwebconfig"></a>
<a id="tocswebconfig"></a>

```json
{
  "appearanceVariables": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "customStyles": "string",
  "streamTitle": "string",
  "offlineMessage": "string",
  "logo": "string",
  "version": "string",
  "socketHostOverride": "string",
  "extraPageContent": "string",
  "summary": "string",
  "tags": [
    "string"
  ],
  "socialHandles": [
    {
      "platform": "string",
      "url": "string",
      "icon": "string"
    }
  ],
  "externalActions": [
    {
      "url": "string",
      "html": "string",
      "title": "string",
      "description": "string",
      "icon": "string",
      "color": "string",
      "openExternally": true
    }
  ],
  "notifications": {
    "browser": {
      "publicKey": "string",
      "enabled": true
    }
  },
  "federation": {
    "account": "string",
    "followerCount": 0,
    "enabled": true,
    "hideFollowersTab": true
  },
  "maxSocketPayloadSize": 0,
  "hideViewerCount": true,
  "chatDisabled": true,
  "chatRequireAuthentication": true,
  "nsfw": true,
  "autoplay": "off",
  "authentication": {
    "indieAuthEnabled": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appearanceVariables|object|false|none|none|
|name|string|false|none|none|
|customStyles|string|false|none|none|
|streamTitle|string|false|none|none|
|offlineMessage|string|false|none|none|
|logo|string|false|none|none|
|version|string|false|none|none|
|socketHostOverride|string|false|none|none|
|extraPageContent|string|false|none|none|
|summary|string|false|none|none|
|tags|[string]|false|none|none|
|socialHandles|[[SocialHandle](#schemasocialhandle)]|false|none|none|
|externalActions|[[ExternalAction](#schemaexternalaction)]|false|none|none|
|notifications|[NotificationConfig](#schemanotificationconfig)|false|none|none|
|federation|[FederationConfig](#schemafederationconfig)|false|none|none|
|maxSocketPayloadSize|integer|false|none|none|
|hideViewerCount|boolean|false|none|none|
|chatDisabled|boolean|false|none|none|
|chatRequireAuthentication|boolean|false|none|Whether users must authenticate before sending chat messages|
|nsfw|boolean|false|none|none|
|autoplay|[AutoplayMode](#schemaautoplaymode)|false|none|Viewer autoplay behavior.|
|authentication|[AuthenticationConfig](#schemaauthenticationconfig)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|autoplay|off|
|autoplay|always|
|autoplay|sound-only|

<h2 id="tocS_AutoplayMode">AutoplayMode</h2>
<!-- backwards compatibility -->
<a id="schemaautoplaymode"></a>
<a id="schema_AutoplayMode"></a>
<a id="tocSautoplaymode"></a>
<a id="tocsautoplaymode"></a>

```json
"off"
```

Viewer autoplay behavior.

<h2 id="tocS_SocialHandle">SocialHandle</h2>
<!-- backwards compatibility -->
<a id="schemasocialhandle"></a>
<a id="schema_SocialHandle"></a>
<a id="tocSsocialhandle"></a>
<a id="tocssocialhandle"></a>

```json
{
  "platform": "string",
  "url": "string",
  "icon": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|platform|string|false|none|none|
|url|string|false|none|none|
|icon|string|false|none|none|

<h2 id="tocS_ExternalAction">ExternalAction</h2>
<!-- backwards compatibility -->
<a id="schemaexternalaction"></a>
<a id="schema_ExternalAction"></a>
<a id="tocSexternalaction"></a>
<a id="tocsexternalaction"></a>

```json
{
  "url": "string",
  "html": "string",
  "title": "string",
  "description": "string",
  "icon": "string",
  "color": "string",
  "openExternally": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|none|
|html|string|false|none|none|
|title|string|false|none|none|
|description|string|false|none|none|
|icon|string|false|none|none|
|color|string|false|none|none|
|openExternally|boolean|false|none|none|

<h2 id="tocS_NotificationConfig">NotificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemanotificationconfig"></a>
<a id="schema_NotificationConfig"></a>
<a id="tocSnotificationconfig"></a>
<a id="tocsnotificationconfig"></a>

```json
{
  "browser": {
    "publicKey": "string",
    "enabled": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|browser|[BrowserConfig](#schemabrowserconfig)|false|none|none|

<h2 id="tocS_BrowserConfig">BrowserConfig</h2>
<!-- backwards compatibility -->
<a id="schemabrowserconfig"></a>
<a id="schema_BrowserConfig"></a>
<a id="tocSbrowserconfig"></a>
<a id="tocsbrowserconfig"></a>

```json
{
  "publicKey": "string",
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publicKey|string|false|none|none|
|enabled|boolean|false|none|none|

<h2 id="tocS_FederationConfig">FederationConfig</h2>
<!-- backwards compatibility -->
<a id="schemafederationconfig"></a>
<a id="schema_FederationConfig"></a>
<a id="tocSfederationconfig"></a>
<a id="tocsfederationconfig"></a>

```json
{
  "account": "string",
  "followerCount": 0,
  "enabled": true,
  "hideFollowersTab": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|none|
|followerCount|integer|false|none|none|
|enabled|boolean|false|none|none|
|hideFollowersTab|boolean|false|none|none|

<h2 id="tocS_AuthenticationConfig">AuthenticationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationconfig"></a>
<a id="schema_AuthenticationConfig"></a>
<a id="tocSauthenticationconfig"></a>
<a id="tocsauthenticationconfig"></a>

```json
{
  "indieAuthEnabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indieAuthEnabled|boolean|false|none|none|

<h2 id="tocS_YPDetails">YPDetails</h2>
<!-- backwards compatibility -->
<a id="schemaypdetails"></a>
<a id="schema_YPDetails"></a>
<a id="tocSypdetails"></a>
<a id="tocsypdetails"></a>

```json
{
  "lastConnectTime": "string",
  "name": "string",
  "description": "string",
  "streamTitle": "string",
  "logo": "string",
  "tags": [
    "string"
  ],
  "social": [
    {
      "platform": "string",
      "url": "string",
      "icon": "string"
    }
  ],
  "viewerCount": 0,
  "overallMaxViewerCount": 0,
  "sessionMaxViewerCount": 0,
  "nsfw": true,
  "online": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastConnectTime|string|false|none|none|
|name|string|false|none|none|
|description|string|false|none|none|
|streamTitle|string|false|none|none|
|logo|string|false|none|none|
|tags|[string]|false|none|none|
|social|[[SocialHandle](#schemasocialhandle)]|false|none|none|
|viewerCount|integer|false|none|none|
|overallMaxViewerCount|integer|false|none|none|
|sessionMaxViewerCount|integer|false|none|none|
|nsfw|boolean|false|none|none|
|online|boolean|false|none|none|

<h2 id="tocS_VideoVariant">VideoVariant</h2>
<!-- backwards compatibility -->
<a id="schemavideovariant"></a>
<a id="schema_VideoVariant"></a>
<a id="tocSvideovariant"></a>
<a id="tocsvideovariant"></a>

```json
{
  "index": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_CmcdReport">CmcdReport</h2>
<!-- backwards compatibility -->
<a id="schemacmcdreport"></a>
<a id="schema_CmcdReport"></a>
<a id="tocScmcdreport"></a>
<a id="tocscmcdreport"></a>

```json
{
  "v": 0,
  "sid": "string",
  "e": "string",
  "ts": 0,
  "sta": "string",
  "mtp": 0,
  "ltc": 0,
  "bs": true,
  "ec": "string",
  "ttlb": 0,
  "sn": 0
}
```

A CMCD v2 (CTA-5004-A) report keyed by CMCD key names. Any valid CMCD key is accepted; the keys below are the ones consumed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|v|integer|false|none|CMCD version of the report|
|sid|string|false|none|Session ID identifying the player session|
|e|string|false|none|Event type that triggered the report (event mode)|
|ts|number|false|none|Timestamp of the report in epoch milliseconds|
|sta|string|false|none|Player state token|
|mtp|number|false|none|Measured throughput in kbps|
|ltc|number|false|none|Live latency in milliseconds|
|bs|boolean|false|none|Buffer starvation occurred|
|ec|string|false|none|Error code accompanying an error event|
|ttlb|number|false|none|Time to last byte in milliseconds (response mode)|
|sn|number|false|none|Report sequence number|

<h2 id="tocS_CmcdReportBody">CmcdReportBody</h2>
<!-- backwards compatibility -->
<a id="schemacmcdreportbody"></a>
<a id="schema_CmcdReportBody"></a>
<a id="tocScmcdreportbody"></a>
<a id="tocscmcdreportbody"></a>

```json
{
  "v": 0,
  "sid": "string",
  "e": "string",
  "ts": 0,
  "sta": "string",
  "mtp": 0,
  "ltc": 0,
  "bs": true,
  "ec": "string",
  "ttlb": 0,
  "sn": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CmcdReport](#schemacmcdreport)|false|none|A CMCD v2 (CTA-5004-A) report keyed by CMCD key names. Any valid CMCD key is accepted; the keys below are the ones consumed.|
|*oneOf*|[[CmcdReport](#schemacmcdreport)]|false|none|none|

<h2 id="tocS_PlaybackMetrics">PlaybackMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackmetrics"></a>
<a id="schema_PlaybackMetrics"></a>
<a id="tocSplaybackmetrics"></a>
<a id="tocsplaybackmetrics"></a>

```json
{
  "bandwidth": 0,
  "latency": 0,
  "errors": 0,
  "downloadDuration": 0,
  "qualityVariantChanges": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidth|number(double)|false|none|The player's measured throughput in kbps.|
|latency|number(double)|false|none|How far behind the live edge the player is, in seconds.|
|errors|number(double)|true|none|Errors since the previous report, not a running total. Reports accumulate, so a client sending a cumulative count inflates the recorded figure.|
|downloadDuration|number(double)|false|none|How long the player's most recent segment took to download, in seconds.|
|qualityVariantChanges|number(double)|true|none|Quality variant switches since the previous report, not a running total.|

<h2 id="tocS_Broadcaster">Broadcaster</h2>
<!-- backwards compatibility -->
<a id="schemabroadcaster"></a>
<a id="schema_Broadcaster"></a>
<a id="tocSbroadcaster"></a>
<a id="tocsbroadcaster"></a>

```json
{
  "time": "1970-01-01T00:00:00Z",
  "remoteAddr": "string",
  "streamDetails": {
    "videoCodec": "string",
    "audioCodec": "string",
    "encoder": "string",
    "width": 0,
    "height": 0,
    "videoBitrate": 0,
    "audioBitrate": 0,
    "framerate": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|string(date-time)|false|none|none|
|remoteAddr|string|false|none|none|
|streamDetails|[InboundStreamDetails](#schemainboundstreamdetails)|false|none|none|

<h2 id="tocS_InboundStreamDetails">InboundStreamDetails</h2>
<!-- backwards compatibility -->
<a id="schemainboundstreamdetails"></a>
<a id="schema_InboundStreamDetails"></a>
<a id="tocSinboundstreamdetails"></a>
<a id="tocsinboundstreamdetails"></a>

```json
{
  "videoCodec": "string",
  "audioCodec": "string",
  "encoder": "string",
  "width": 0,
  "height": 0,
  "videoBitrate": 0,
  "audioBitrate": 0,
  "framerate": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|videoCodec|string|false|none|none|
|audioCodec|string|false|none|none|
|encoder|string|false|none|none|
|width|integer|false|none|none|
|height|integer|false|none|none|
|videoBitrate|integer|false|none|none|
|audioBitrate|integer|false|none|none|
|framerate|number(float)|false|none|none|

<h2 id="tocS_CurrentBroadcast">CurrentBroadcast</h2>
<!-- backwards compatibility -->
<a id="schemacurrentbroadcast"></a>
<a id="schema_CurrentBroadcast"></a>
<a id="tocScurrentbroadcast"></a>
<a id="tocscurrentbroadcast"></a>

```json
{
  "outputSettings": [
    {
      "name": "string",
      "videoPassthrough": true,
      "audioPassthrough": true,
      "videoBitrate": 0,
      "audioBitrate": 0,
      "scaledWidth": 0,
      "scaledHeight": 0,
      "framerate": 0,
      "cpuUsageLevel": 0
    }
  ],
  "latencyLevel": {
    "level": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputSettings|[[StreamOutputVariant](#schemastreamoutputvariant)]|false|none|none|
|latencyLevel|[LatencyLevel](#schemalatencylevel)|false|none|none|

<h2 id="tocS_StreamOutputVariant">StreamOutputVariant</h2>
<!-- backwards compatibility -->
<a id="schemastreamoutputvariant"></a>
<a id="schema_StreamOutputVariant"></a>
<a id="tocSstreamoutputvariant"></a>
<a id="tocsstreamoutputvariant"></a>

```json
{
  "name": "string",
  "videoPassthrough": true,
  "audioPassthrough": true,
  "videoBitrate": 0,
  "audioBitrate": 0,
  "scaledWidth": 0,
  "scaledHeight": 0,
  "framerate": 0,
  "cpuUsageLevel": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|videoPassthrough|boolean|false|none|none|
|audioPassthrough|boolean|false|none|none|
|videoBitrate|integer|false|none|none|
|audioBitrate|integer|false|none|none|
|scaledWidth|integer|false|none|none|
|scaledHeight|integer|false|none|none|
|framerate|integer|false|none|none|
|cpuUsageLevel|integer|false|none|none|

<h2 id="tocS_LatencyLevel">LatencyLevel</h2>
<!-- backwards compatibility -->
<a id="schemalatencylevel"></a>
<a id="schema_LatencyLevel"></a>
<a id="tocSlatencylevel"></a>
<a id="tocslatencylevel"></a>

```json
{
  "level": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|level|integer|false|none|none|

<h2 id="tocS_StreamHealthOverview">StreamHealthOverview</h2>
<!-- backwards compatibility -->
<a id="schemastreamhealthoverview"></a>
<a id="schema_StreamHealthOverview"></a>
<a id="tocSstreamhealthoverview"></a>
<a id="tocsstreamhealthoverview"></a>

```json
{
  "message": "string",
  "healthPercentage": 0,
  "representation": 0,
  "healthy": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|healthPercentage|integer|false|none|none|
|representation|integer|false|none|none|
|healthy|boolean|false|none|none|

<h2 id="tocS_BrowserNotificationConfiguration">BrowserNotificationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemabrowsernotificationconfiguration"></a>
<a id="schema_BrowserNotificationConfiguration"></a>
<a id="tocSbrowsernotificationconfiguration"></a>
<a id="tocsbrowsernotificationconfiguration"></a>

```json
{
  "goLiveMessage": "string",
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|goLiveMessage|string|false|none|none|
|enabled|boolean|false|none|none|

<h2 id="tocS_DiscordNotificationConfiguration">DiscordNotificationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadiscordnotificationconfiguration"></a>
<a id="schema_DiscordNotificationConfiguration"></a>
<a id="tocSdiscordnotificationconfiguration"></a>
<a id="tocsdiscordnotificationconfiguration"></a>

```json
{
  "webhook": "string",
  "goLiveMessage": "string",
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook|string|false|none|none|
|goLiveMessage|string|false|none|none|
|enabled|boolean|false|none|none|

<h2 id="tocS_S3Info">S3Info</h2>
<!-- backwards compatibility -->
<a id="schemas3info"></a>
<a id="schema_S3Info"></a>
<a id="tocSs3info"></a>
<a id="tocss3info"></a>

```json
{
  "endpoint": "string",
  "accessKey": "string",
  "secret": "string",
  "bucket": "string",
  "region": "string",
  "acl": "string",
  "pathPrefix": "string",
  "enabled": true,
  "forcePathStyle": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|false|none|none|
|accessKey|string|false|none|none|
|secret|string|false|none|none|
|bucket|string|false|none|none|
|region|string|false|none|none|
|acl|string|false|none|none|
|pathPrefix|string|false|none|none|
|enabled|boolean|false|none|none|
|forcePathStyle|boolean|false|none|none|

<h2 id="tocS_StreamKey">StreamKey</h2>
<!-- backwards compatibility -->
<a id="schemastreamkey"></a>
<a id="schema_StreamKey"></a>
<a id="tocSstreamkey"></a>
<a id="tocsstreamkey"></a>

```json
{
  "key": "string",
  "comment": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|comment|string|false|none|none|

<h2 id="tocS_TimestampedValue">TimestampedValue</h2>
<!-- backwards compatibility -->
<a id="schematimestampedvalue"></a>
<a id="schema_TimestampedValue"></a>
<a id="tocStimestampedvalue"></a>
<a id="tocstimestampedvalue"></a>

```json
{
  "time": "1970-01-01T00:00:00Z",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|string(date-time)|false|none|none|
|value|number(double)|false|none|none|

<h2 id="tocS_Viewer">Viewer</h2>
<!-- backwards compatibility -->
<a id="schemaviewer"></a>
<a id="schema_Viewer"></a>
<a id="tocSviewer"></a>
<a id="tocsviewer"></a>

```json
{
  "firstSeen": "1970-01-01T00:00:00Z",
  "geo": {
    "countryCode": "string",
    "regionName": "string",
    "timeZone": "string"
  },
  "userAgent": "string",
  "ipAddress": "string",
  "clientID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstSeen|string(date-time)|false|none|none|
|geo|[GeoDetails](#schemageodetails) \| null|false|none|none|
|userAgent|string|false|none|none|
|ipAddress|string|false|none|none|
|clientID|string|false|none|none|

<h2 id="tocS_PlaybackClient">PlaybackClient</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackclient"></a>
<a id="schema_PlaybackClient"></a>
<a id="tocSplaybackclient"></a>
<a id="tocsplaybackclient"></a>

```json
{
  "clientID": "string",
  "viewerID": "string",
  "firstSeen": "1970-01-01T00:00:00Z",
  "geo": {
    "countryCode": "string",
    "regionName": "string",
    "timeZone": "string"
  },
  "userAgent": "string",
  "ipAddress": "string",
  "playback": {
    "source": "client",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "playerState": "p",
    "measurementStatus": "unmeasurable",
    "bandwidthKbps": 0,
    "latencySeconds": 0,
    "downloadSeconds": 0,
    "bitrateKbps": 0,
    "errorCount": 0,
    "qualityVariantChanges": 0
  }
}
```

A single client currently playing back video, with its most recent playback health.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientID|string|true|none|Playback identity of the client. The player-supplied CMCD session ID when it provides one, otherwise the same request-derived identity used for viewers.|
|viewerID|string|true|none|Request-derived identity of the viewer this client belongs to. Clients sharing an address and user agent share a viewer identity.|
|firstSeen|string(date-time)|false|none|none|
|geo|[GeoDetails](#schemageodetails) \| null|false|none|none|
|userAgent|string|false|none|none|
|ipAddress|string|false|none|none|
|playback|[PlaybackClientHealth](#schemaplaybackclienthealth) \| null|false|none|Null when no playback measurements exist for this client. A non-null playback object with measurementStatus explains why server-side measurements are unavailable.|

<h2 id="tocS_PlaybackClientHealth">PlaybackClientHealth</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackclienthealth"></a>
<a id="schema_PlaybackClientHealth"></a>
<a id="tocSplaybackclienthealth"></a>
<a id="tocsplaybackclienthealth"></a>

```json
{
  "source": "client",
  "lastUpdate": "1970-01-01T00:00:00Z",
  "playerState": "p",
  "measurementStatus": "unmeasurable",
  "bandwidthKbps": 0,
  "latencySeconds": 0,
  "downloadSeconds": 0,
  "bitrateKbps": 0,
  "errorCount": 0,
  "qualityVariantChanges": 0
}
```

The most recent playback measurements for one client. A measurement is null when it is
unknown for this client rather than measured as zero, because not every player reports every
value, server-side observation cannot measure latency at all, and a value the player has
stopped reporting expires rather than standing in for the current one.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|string|true|none|Whether the player is currently reporting its own playback, or the server is measuring it while serving segments. Individual values can still come from the other side, most often the segment download duration of a player that reports everything except how long its downloads took.|
|lastUpdate|string(date-time)|true|none|When the most recent measurement of any value for this client arrived.|
|playerState|string|false|none|Latest player state from CMCD, where p is playing, a is paused, w is buffering, k is seeking, and e is ended.|
|measurementStatus|string|false|none|Explains why the server could not produce a trustworthy segment measurement.|
|bandwidthKbps|number \| null(double)|false|none|How fast video is reaching the client, either the player's own throughput estimate or the rate at which the server served its most recent segment. Server-side measurement may be unavailable when the server cannot see a trustworthy transfer, so clients report null unless the player measures itself.|
|latencySeconds|number \| null(double)|false|none|How far behind the live edge the client is playing. Only players that report it provide this, currently those supporting CMCD and those using the deprecated playback metrics endpoint.|
|downloadSeconds|number \| null(double)|false|none|How long the client's most recent video segment took to transfer.|
|bitrateKbps|number \| null(double)|false|none|Encoded bitrate of the quality variant the client is playing, as advertised in the stream playlist. That figure includes audio, so it is near but not equal to the configured video bitrate of the matching output variant. Only players that report it provide this.|
|errorCount|number \| null(double)|false|none|Errors, including buffering, since this client started playing. Null for a client the server can only observe, which reveals nothing about the player's errors.|
|qualityVariantChanges|number \| null(double)|false|none|Quality variant switches since this client started playing. Null when the client reveals nothing about the quality it is playing.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|client|
|source|server|
|playerState|p|
|playerState|a|
|playerState|w|
|playerState|k|
|playerState|e|
|measurementStatus|unmeasurable|

<h2 id="tocS_GeoDetails">GeoDetails</h2>
<!-- backwards compatibility -->
<a id="schemageodetails"></a>
<a id="schema_GeoDetails"></a>
<a id="tocSgeodetails"></a>
<a id="tocsgeodetails"></a>

```json
{
  "countryCode": "string",
  "regionName": "string",
  "timeZone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryCode|string|false|none|none|
|regionName|string|false|none|none|
|timeZone|string|false|none|none|

<h2 id="tocS_CollectedMetrics">CollectedMetrics</h2>
<!-- backwards compatibility -->
<a id="schemacollectedmetrics"></a>
<a id="schema_CollectedMetrics"></a>
<a id="tocScollectedmetrics"></a>
<a id="tocscollectedmetrics"></a>

```json
{
  "disk": [
    {
      "time": "1970-01-01T00:00:00Z",
      "value": 0
    }
  ],
  "memory": [
    {
      "time": "1970-01-01T00:00:00Z",
      "value": 0
    }
  ],
  "cpu": [
    {
      "time": "1970-01-01T00:00:00Z",
      "value": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disk|[[TimestampedValue](#schematimestampedvalue)]|false|none|none|
|memory|[[TimestampedValue](#schematimestampedvalue)]|false|none|none|
|cpu|[[TimestampedValue](#schematimestampedvalue)]|false|none|none|

<h2 id="tocS_ChatClient">ChatClient</h2>
<!-- backwards compatibility -->
<a id="schemachatclient"></a>
<a id="schema_ChatClient"></a>
<a id="tocSchatclient"></a>
<a id="tocschatclient"></a>

```json
{
  "connectedAt": "1970-01-01T00:00:00Z",
  "user": {
    "createdAt": "string",
    "disabledAt": "string",
    "nameChangedAt": "string",
    "id": "string",
    "displayName": "string",
    "previousNames": [
      "string"
    ],
    "scopes": [
      "string"
    ],
    "authProviders": [
      "string"
    ],
    "displayColor": 0,
    "isBot": true,
    "authenticated": true
  },
  "geo": {
    "countryCode": "string",
    "regionName": "string",
    "timeZone": "string"
  },
  "userAgent": "string",
  "messageCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectedAt|string(date-time)|false|none|none|
|user|[User](#schemauser)|false|none|none|
|geo|[GeoDetails](#schemageodetails) \| null|false|none|none|
|userAgent|string|false|none|none|
|messageCount|integer|false|none|none|

<h2 id="tocS_ChatClients">ChatClients</h2>
<!-- backwards compatibility -->
<a id="schemachatclients"></a>
<a id="schema_ChatClients"></a>
<a id="tocSchatclients"></a>
<a id="tocschatclients"></a>

```json
[
  {
    "connectedAt": "1970-01-01T00:00:00Z",
    "user": {
      "createdAt": "string",
      "disabledAt": "string",
      "nameChangedAt": "string",
      "id": "string",
      "displayName": "string",
      "previousNames": [
        "string"
      ],
      "scopes": [
        "string"
      ],
      "authProviders": [
        "string"
      ],
      "displayColor": 0,
      "isBot": true,
      "authenticated": true
    },
    "geo": {
      "countryCode": "string",
      "regionName": "string",
      "timeZone": "string"
    },
    "userAgent": "string",
    "messageCount": 0
  }
]
```

<h2 id="tocS_IPAddress">IPAddress</h2>
<!-- backwards compatibility -->
<a id="schemaipaddress"></a>
<a id="schema_IPAddress"></a>
<a id="tocSipaddress"></a>
<a id="tocsipaddress"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "ipAddress": "string",
  "notes": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|none|
|ipAddress|string|false|none|none|
|notes|string|false|none|none|

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "timestamp": "1970-01-01T00:00:00Z",
  "lastUsed": "1970-01-01T00:00:00Z",
  "url": "string",
  "events": [
    "CHAT"
  ],
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string(date-time)|false|none|none|
|lastUsed|string \| null(date-time)|false|none|none|
|url|string|false|none|none|
|events|[[WebhookEventType](#schemawebhookeventtype)]|false|none|none|
|id|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|events|CHAT|
|events|USER_JOINED|
|events|USER_PARTED|
|events|NAME_CHANGE|
|events|FEDIVERSE_ENGAGEMENT_FOLLOW|
|events|VISIBILITY-UPDATE|
|events|PING|
|events|PONG|
|events|STREAM_STARTED|
|events|STREAM_STOPPED|
|events|STREAM_TITLE_UPDATED|
|events|SYSTEM|
|events|CHAT_ACTION|

<h2 id="tocS_WebhookEventType">WebhookEventType</h2>
<!-- backwards compatibility -->
<a id="schemawebhookeventtype"></a>
<a id="schema_WebhookEventType"></a>
<a id="tocSwebhookeventtype"></a>
<a id="tocswebhookeventtype"></a>

```json
"CHAT"
```

<h2 id="tocS_ExternalAPIUser">ExternalAPIUser</h2>
<!-- backwards compatibility -->
<a id="schemaexternalapiuser"></a>
<a id="schema_ExternalAPIUser"></a>
<a id="tocSexternalapiuser"></a>
<a id="tocsexternalapiuser"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "lastUsedAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "accessToken": "string",
  "displayName": "string",
  "type": "string",
  "scopes": [
    "string"
  ],
  "displayColor": 0,
  "isBot": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|none|
|lastUsedAt|string(date-time)|false|none|none|
|id|string|false|none|none|
|accessToken|string|false|none|none|
|displayName|string|false|none|none|
|type|string|false|none|none|
|scopes|[string]|false|none|none|
|displayColor|integer|false|none|none|
|isBot|boolean|false|none|none|

<h2 id="tocS_MessageVisibilityUpdate">MessageVisibilityUpdate</h2>
<!-- backwards compatibility -->
<a id="schemamessagevisibilityupdate"></a>
<a id="schema_MessageVisibilityUpdate"></a>
<a id="tocSmessagevisibilityupdate"></a>
<a id="tocsmessagevisibilityupdate"></a>

```json
{
  "idArray": [
    "string"
  ],
  "visible": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idArray|[string]|false|none|none|
|visible|boolean|false|none|none|

<h2 id="tocS_ModerationUserDetails">ModerationUserDetails</h2>
<!-- backwards compatibility -->
<a id="schemamoderationuserdetails"></a>
<a id="schema_ModerationUserDetails"></a>
<a id="tocSmoderationuserdetails"></a>
<a id="tocsmoderationuserdetails"></a>

```json
{
  "user": {
    "createdAt": "string",
    "disabledAt": "string",
    "nameChangedAt": "string",
    "id": "string",
    "displayName": "string",
    "previousNames": [
      "string"
    ],
    "scopes": [
      "string"
    ],
    "authProviders": [
      "string"
    ],
    "displayColor": 0,
    "isBot": true,
    "authenticated": true,
    "disabledReason": "string"
  },
  "connectedClients": [
    {
      "connectedAt": "1970-01-01T00:00:00Z",
      "userAgent": "string",
      "geo": "string",
      "id": 0,
      "messageCount": 0
    }
  ],
  "messages": [
    {
      "timestamp": "string",
      "type": "string",
      "id": "string",
      "user": {
        "createdAt": "string",
        "disabledAt": "string",
        "nameChangedAt": "string",
        "id": "string",
        "displayName": "string",
        "previousNames": [
          "string"
        ],
        "scopes": [
          "string"
        ],
        "authProviders": [
          "string"
        ],
        "displayColor": 0,
        "isBot": true,
        "authenticated": true
      },
      "hiddenAt": "string",
      "clientId": 0,
      "body": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|[UserWithDisabledReason](#schemauserwithdisabledreason)|false|none|none|
|connectedClients|[[ModerationConnectedClient](#schemamoderationconnectedclient)]|false|none|none|
|messages|[[UserMessage](#schemausermessage)]|false|none|none|

<h2 id="tocS_ModerationConnectedClient">ModerationConnectedClient</h2>
<!-- backwards compatibility -->
<a id="schemamoderationconnectedclient"></a>
<a id="schema_ModerationConnectedClient"></a>
<a id="tocSmoderationconnectedclient"></a>
<a id="tocsmoderationconnectedclient"></a>

```json
{
  "connectedAt": "1970-01-01T00:00:00Z",
  "userAgent": "string",
  "geo": "string",
  "id": 0,
  "messageCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectedAt|string(date-time)|false|none|none|
|userAgent|string|false|none|none|
|geo|string|false|none|none|
|id|integer(int64)|false|none|none|
|messageCount|integer|false|none|none|

<h2 id="tocS_FederatedActivity">FederatedActivity</h2>
<!-- backwards compatibility -->
<a id="schemafederatedactivity"></a>
<a id="schema_FederatedActivity"></a>
<a id="tocSfederatedactivity"></a>
<a id="tocsfederatedactivity"></a>

```json
{
  "timestamp": "1970-01-01T00:00:00Z",
  "iri": "string",
  "actorIRI": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string(date-time)|false|none|none|
|iri|string|false|none|none|
|actorIRI|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_PaginatedFederatedActivity">PaginatedFederatedActivity</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedfederatedactivity"></a>
<a id="schema_PaginatedFederatedActivity"></a>
<a id="tocSpaginatedfederatedactivity"></a>
<a id="tocspaginatedfederatedactivity"></a>

```json
{
  "total": 0,
  "results": {
    "timestamp": "1970-01-01T00:00:00Z",
    "iri": "string",
    "actorIRI": "string",
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|results|[FederatedActivity](#schemafederatedactivity)|false|none|none|

<h2 id="tocS_AdminStatus">AdminStatus</h2>
<!-- backwards compatibility -->
<a id="schemaadminstatus"></a>
<a id="schema_AdminStatus"></a>
<a id="tocSadminstatus"></a>
<a id="tocsadminstatus"></a>

```json
{
  "broadcaster": {
    "time": "1970-01-01T00:00:00Z",
    "remoteAddr": "string",
    "streamDetails": {
      "videoCodec": "string",
      "audioCodec": "string",
      "encoder": "string",
      "width": 0,
      "height": 0,
      "videoBitrate": 0,
      "audioBitrate": 0,
      "framerate": 0
    }
  },
  "currentBroadcast": {
    "outputSettings": [
      {
        "name": "string",
        "videoPassthrough": true,
        "audioPassthrough": true,
        "videoBitrate": 0,
        "audioBitrate": 0,
        "scaledWidth": 0,
        "scaledHeight": 0,
        "framerate": 0,
        "cpuUsageLevel": 0
      }
    ],
    "latencyLevel": {
      "level": 0
    }
  },
  "health": {
    "message": "string",
    "healthPercentage": 0,
    "representation": 0,
    "healthy": true
  },
  "streamTitle": "string",
  "versionNumber": "string",
  "viewerCount": 0,
  "overallPeakViewerCount": 0,
  "sessionPeakViewerCount": 0,
  "online": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster|[Broadcaster](#schemabroadcaster)|false|none|none|
|currentBroadcast|[CurrentBroadcast](#schemacurrentbroadcast)|false|none|none|
|health|[StreamHealthOverview](#schemastreamhealthoverview) \| null|false|none|none|
|streamTitle|string|false|none|none|
|versionNumber|string|false|none|none|
|viewerCount|integer|false|none|none|
|overallPeakViewerCount|integer|false|none|none|
|sessionPeakViewerCount|integer|false|none|none|
|online|boolean|false|none|none|

<h2 id="tocS_AdminServerConfig">AdminServerConfig</h2>
<!-- backwards compatibility -->
<a id="schemaadminserverconfig"></a>
<a id="schema_AdminServerConfig"></a>
<a id="tocSadminserverconfig"></a>
<a id="tocsadminserverconfig"></a>

```json
{
  "instanceDetails": {
    "appearanceVariables": {
      "property1": "string",
      "property2": "string"
    },
    "version": "string",
    "welcomeMessage": "string",
    "offlineMessage": "string",
    "logo": "string",
    "name": "string",
    "extraPageContent": "string",
    "streamTitle": "string",
    "customStyles": "string",
    "customJavascript": "string",
    "summary": "string",
    "tags": [
      "string"
    ],
    "socialHandles": [
      {
        "platform": "string",
        "url": "string",
        "icon": "string"
      }
    ],
    "nsfw": true,
    "autoplay": "off"
  },
  "notifications": {
    "browser": {
      "goLiveMessage": "string",
      "enabled": true
    },
    "discord": {
      "webhook": "string",
      "goLiveMessage": "string",
      "enabled": true
    }
  },
  "yp": {
    "instanceUrl": "string",
    "enabled": true
  },
  "ffmpegPath": "string",
  "adminPassword": "string",
  "socketHostOverride": "string",
  "webServerIP": "string",
  "videoCodec": "string",
  "videoServingEndpoint": "string",
  "s3": {
    "endpoint": "string",
    "accessKey": "string",
    "secret": "string",
    "bucket": "string",
    "region": "string",
    "acl": "string",
    "pathPrefix": "string",
    "enabled": true,
    "forcePathStyle": true
  },
  "federation": {
    "username": "string",
    "goLiveMessage": "string",
    "blockedDomains": [
      "string"
    ],
    "enabled": true,
    "isPrivate": true,
    "showEngagement": true,
    "enableQuotes": true,
    "hideFollowersTab": true
  },
  "supportedCodecs": [
    "string"
  ],
  "externalActions": [
    {
      "url": "string",
      "html": "string",
      "title": "string",
      "description": "string",
      "icon": "string",
      "color": "string",
      "openExternally": true
    }
  ],
  "forbiddenUsernames": [
    "string"
  ],
  "suggestedUsernames": [
    "string"
  ],
  "streamKeys": [
    {
      "key": "string",
      "comment": "string"
    }
  ],
  "videoSettings": {
    "videoQualityVariants": [
      {
        "name": "string",
        "videoPassthrough": true,
        "audioPassthrough": true,
        "videoBitrate": 0,
        "audioBitrate": 0,
        "scaledWidth": 0,
        "scaledHeight": 0,
        "framerate": 0,
        "cpuUsageLevel": 0
      }
    ],
    "latencyLevel": 0
  },
  "rtmpServerPort": 0,
  "rtmpServerAddress": "string",
  "webServerPort": 0,
  "chatDisabled": true,
  "chatJoinMessagesEnabled": true,
  "chatEstablishedUserMode": true,
  "disableSearchIndexing": true,
  "streamKeyOverridden": true,
  "hideViewerCount": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceDetails|[AdminWebConfig](#schemaadminwebconfig)|false|none|none|
|notifications|[AdminNotificationsConfig](#schemaadminnotificationsconfig)|false|none|none|
|yp|[AdminYPInfo](#schemaadminypinfo)|false|none|none|
|ffmpegPath|string|false|none|none|
|adminPassword|string|false|none|none|
|socketHostOverride|string|false|none|none|
|webServerIP|string|false|none|none|
|videoCodec|string|false|none|none|
|videoServingEndpoint|string|false|none|none|
|s3|[S3Info](#schemas3info)|false|none|none|
|federation|[AdminFederationConfig](#schemaadminfederationconfig)|false|none|none|
|supportedCodecs|[string]|false|none|none|
|externalActions|[[ExternalAction](#schemaexternalaction)]|false|none|none|
|forbiddenUsernames|[string]|false|none|none|
|suggestedUsernames|[string]|false|none|none|
|streamKeys|[[StreamKey](#schemastreamkey)]|false|none|none|
|videoSettings|[AdminVideoSettings](#schemaadminvideosettings)|false|none|none|
|rtmpServerPort|integer|false|none|none|
|rtmpServerAddress|string|false|none|none|
|webServerPort|integer|false|none|none|
|chatDisabled|boolean|false|none|none|
|chatJoinMessagesEnabled|boolean|false|none|none|
|chatEstablishedUserMode|boolean|false|none|none|
|disableSearchIndexing|boolean|false|none|none|
|streamKeyOverridden|boolean|false|none|none|
|hideViewerCount|boolean|false|none|none|

<h2 id="tocS_AdminWebConfig">AdminWebConfig</h2>
<!-- backwards compatibility -->
<a id="schemaadminwebconfig"></a>
<a id="schema_AdminWebConfig"></a>
<a id="tocSadminwebconfig"></a>
<a id="tocsadminwebconfig"></a>

```json
{
  "appearanceVariables": {
    "property1": "string",
    "property2": "string"
  },
  "version": "string",
  "welcomeMessage": "string",
  "offlineMessage": "string",
  "logo": "string",
  "name": "string",
  "extraPageContent": "string",
  "streamTitle": "string",
  "customStyles": "string",
  "customJavascript": "string",
  "summary": "string",
  "tags": [
    "string"
  ],
  "socialHandles": [
    {
      "platform": "string",
      "url": "string",
      "icon": "string"
    }
  ],
  "nsfw": true,
  "autoplay": "off"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appearanceVariables|object|false|none|none|
|version|string|false|none|none|
|welcomeMessage|string|false|none|none|
|offlineMessage|string|false|none|none|
|logo|string|false|none|none|
|name|string|false|none|none|
|extraPageContent|string|false|none|none|
|streamTitle|string|false|none|none|
|customStyles|string|false|none|none|
|customJavascript|string|false|none|none|
|summary|string|false|none|none|
|tags|[string]|false|none|none|
|socialHandles|[[SocialHandle](#schemasocialhandle)]|false|none|none|
|nsfw|boolean|false|none|none|
|autoplay|[AutoplayMode](#schemaautoplaymode)|false|none|Viewer autoplay behavior.|

#### Enumerated Values

|Property|Value|
|---|---|
|autoplay|off|
|autoplay|always|
|autoplay|sound-only|

<h2 id="tocS_AdminNotificationsConfig">AdminNotificationsConfig</h2>
<!-- backwards compatibility -->
<a id="schemaadminnotificationsconfig"></a>
<a id="schema_AdminNotificationsConfig"></a>
<a id="tocSadminnotificationsconfig"></a>
<a id="tocsadminnotificationsconfig"></a>

```json
{
  "browser": {
    "goLiveMessage": "string",
    "enabled": true
  },
  "discord": {
    "webhook": "string",
    "goLiveMessage": "string",
    "enabled": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|browser|[BrowserNotificationConfiguration](#schemabrowsernotificationconfiguration)|false|none|none|
|discord|[DiscordNotificationConfiguration](#schemadiscordnotificationconfiguration)|false|none|none|

<h2 id="tocS_AdminYPInfo">AdminYPInfo</h2>
<!-- backwards compatibility -->
<a id="schemaadminypinfo"></a>
<a id="schema_AdminYPInfo"></a>
<a id="tocSadminypinfo"></a>
<a id="tocsadminypinfo"></a>

```json
{
  "instanceUrl": "string",
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceUrl|string|false|none|none|
|enabled|boolean|false|none|none|

<h2 id="tocS_AdminFederationConfig">AdminFederationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaadminfederationconfig"></a>
<a id="schema_AdminFederationConfig"></a>
<a id="tocSadminfederationconfig"></a>
<a id="tocsadminfederationconfig"></a>

```json
{
  "username": "string",
  "goLiveMessage": "string",
  "blockedDomains": [
    "string"
  ],
  "enabled": true,
  "isPrivate": true,
  "showEngagement": true,
  "enableQuotes": true,
  "hideFollowersTab": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|false|none|none|
|goLiveMessage|string|false|none|none|
|blockedDomains|[string]|false|none|none|
|enabled|boolean|false|none|none|
|isPrivate|boolean|false|none|none|
|showEngagement|boolean|false|none|none|
|enableQuotes|boolean|false|none|none|
|hideFollowersTab|boolean|false|none|none|

<h2 id="tocS_AdminVideoSettings">AdminVideoSettings</h2>
<!-- backwards compatibility -->
<a id="schemaadminvideosettings"></a>
<a id="schema_AdminVideoSettings"></a>
<a id="tocSadminvideosettings"></a>
<a id="tocsadminvideosettings"></a>

```json
{
  "videoQualityVariants": [
    {
      "name": "string",
      "videoPassthrough": true,
      "audioPassthrough": true,
      "videoBitrate": 0,
      "audioBitrate": 0,
      "scaledWidth": 0,
      "scaledHeight": 0,
      "framerate": 0,
      "cpuUsageLevel": 0
    }
  ],
  "latencyLevel": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|videoQualityVariants|[[StreamOutputVariant](#schemastreamoutputvariant)]|false|none|none|
|latencyLevel|integer|false|none|none|

<h2 id="tocS_AdminLog">AdminLog</h2>
<!-- backwards compatibility -->
<a id="schemaadminlog"></a>
<a id="schema_AdminLog"></a>
<a id="tocSadminlog"></a>
<a id="tocsadminlog"></a>

```json
{
  "time": "1970-01-01T00:00:00Z",
  "message": "string",
  "level": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|string(date-time)|false|none|none|
|message|string|false|none|none|
|level|string|false|none|none|

<h2 id="tocS_AdminConfigValue">AdminConfigValue</h2>
<!-- backwards compatibility -->
<a id="schemaadminconfigvalue"></a>
<a id="schema_AdminConfigValue"></a>
<a id="tocSadminconfigvalue"></a>
<a id="tocsadminconfigvalue"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string \| boolean \| [string] \| number|false|none|none|

<h2 id="tocS_IndieAuthResponse">IndieAuthResponse</h2>
<!-- backwards compatibility -->
<a id="schemaindieauthresponse"></a>
<a id="schema_IndieAuthResponse"></a>
<a id="tocSindieauthresponse"></a>
<a id="tocsindieauthresponse"></a>

```json
{
  "me": "string",
  "profile": {
    "name": "string",
    "url": "string",
    "photo": "string"
  },
  "error": "string",
  "errorDescription": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|me|string|false|none|none|
|profile|[IndieAuthProfile](#schemaindieauthprofile)|false|none|none|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

<h2 id="tocS_IndieAuthProfile">IndieAuthProfile</h2>
<!-- backwards compatibility -->
<a id="schemaindieauthprofile"></a>
<a id="schema_IndieAuthProfile"></a>
<a id="tocSindieauthprofile"></a>
<a id="tocsindieauthprofile"></a>

```json
{
  "name": "string",
  "url": "string",
  "photo": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|url|string|false|none|none|
|photo|string|false|none|none|

<h2 id="tocS_IndieAuthServerProfileResponse">IndieAuthServerProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaindieauthserverprofileresponse"></a>
<a id="schema_IndieAuthServerProfileResponse"></a>
<a id="tocSindieauthserverprofileresponse"></a>
<a id="tocsindieauthserverprofileresponse"></a>

```json
{
  "me": "string",
  "profile": {
    "name": "string",
    "url": "string",
    "photo": "string"
  },
  "error": "string",
  "errorDescription": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|me|string|false|none|none|
|profile|[IndieAuthServerProfile](#schemaindieauthserverprofile)|false|none|none|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

<h2 id="tocS_IndieAuthServerProfile">IndieAuthServerProfile</h2>
<!-- backwards compatibility -->
<a id="schemaindieauthserverprofile"></a>
<a id="schema_IndieAuthServerProfile"></a>
<a id="tocSindieauthserverprofile"></a>
<a id="tocsindieauthserverprofile"></a>

```json
{
  "name": "string",
  "url": "string",
  "photo": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|url|string|false|none|none|
|photo|string|false|none|none|
