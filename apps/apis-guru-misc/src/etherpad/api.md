<h1 id="etherpad-api">Etherpad API v1.2.15</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Etherpad is a real-time collaborative editor scalable to thousands of simultaneous real time users. It provides full data export capabilities, and runs on your server, under your control.

Base URLs:

* <a href="http://etherpad.local">http://etherpad.local</a>

* <a href="http://pads.mro.name/api/1.2.15">http://pads.mro.name/api/1.2.15</a>

<a href="https://etherpad.org/">Terms of service</a>
Email: <a href="mailto:support@example.com">The Etherpad Foundation</a> 
Web: <a href="https://etherpad.org/">The Etherpad Foundation</a> 
License: <a href="https://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

# Authentication

* API Key (ApiKey)
    - Parameter Name: **apikey**, in: query.

<h1 id="etherpad-api-pad">pad</h1>

## appends a chat message

<a id="opIdappendChatMessageUsingGET"></a>

> Code samples

```bash
curl "https://example.com/appendChatMessage?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /appendChatMessage`

<h3 id="appends-a-chat-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|text|query|string|false|none|
|authorID|query|string|false|none|
|time|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="appends-a-chat-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="appends-a-chat-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## appends a chat message

<a id="opIdappendChatMessageUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/appendChatMessage?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /appendChatMessage`

<h3 id="appends-a-chat-message-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|text|query|string|false|none|
|authorID|query|string|false|none|
|time|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="appends-a-chat-message-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="appends-a-chat-message-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns ok when the current api token is valid

<a id="opIdcheckTokenUsingGET"></a>

> Code samples

```bash
curl "https://example.com/checkToken?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /checkToken`

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-ok-when-the-current-api-token-is-valid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-ok-when-the-current-api-token-is-valid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns ok when the current api token is valid

<a id="opIdcheckTokenUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/checkToken?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /checkToken`

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-ok-when-the-current-api-token-is-valid-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-ok-when-the-current-api-token-is-valid-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## createDiffHTMLUsingGET

<a id="opIdcreateDiffHTMLUsingGET"></a>

> Code samples

```bash
curl "https://example.com/createDiffHTML?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /createDiffHTML`

<h3 id="creatediffhtmlusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|startRev|query|string|false|none|
|endRev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {},
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="creatediffhtmlusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="creatediffhtmlusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## createDiffHTMLUsingPOST

<a id="opIdcreateDiffHTMLUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/createDiffHTML?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /createDiffHTML`

<h3 id="creatediffhtmlusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|startRev|query|string|false|none|
|endRev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {},
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="creatediffhtmlusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="creatediffhtmlusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## createPadUsingGET

<a id="opIdcreatePadUsingGET"></a>

> Code samples

```bash
curl "https://example.com/createPad?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /createPad`

creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad

<h3 id="createpadusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|text|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="createpadusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="createpadusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## createPadUsingPOST

<a id="opIdcreatePadUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/createPad?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /createPad`

creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad

<h3 id="createpadusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|text|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="createpadusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="createpadusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## deletes a pad

<a id="opIddeletePadUsingGET"></a>

> Code samples

```bash
curl "https://example.com/deletePad?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /deletePad`

<h3 id="deletes-a-pad-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="deletes-a-pad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="deletes-a-pad-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## deletes a pad

<a id="opIddeletePadUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/deletePad?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /deletePad`

<h3 id="deletes-a-pad-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="deletes-a-pad-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="deletes-a-pad-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns the chatHead (chat-message) of the pad

<a id="opIdgetChatHeadUsingGET"></a>

> Code samples

```bash
curl "https://example.com/getChatHead?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /getChatHead`

<h3 id="returns-the-chathead-chat-message-of-the-pad-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "chatHead": {
      "text": "string",
      "time": 0,
      "userId": "string",
      "userName": "string"
    }
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-chathead-chat-message-of-the-pad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-chathead-chat-message-of-the-pad-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» chatHead|object|false|none|none|
|» » text|string|false|none|none|
|» » time|integer|false|none|none|
|» » userId|string|false|none|none|
|» » userName|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns the chatHead (chat-message) of the pad

<a id="opIdgetChatHeadUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/getChatHead?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getChatHead`

<h3 id="returns-the-chathead-chat-message-of-the-pad-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "chatHead": {
      "text": "string",
      "time": 0,
      "userId": "string",
      "userName": "string"
    }
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-chathead-chat-message-of-the-pad-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-chathead-chat-message-of-the-pad-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» chatHead|object|false|none|none|
|» » text|string|false|none|none|
|» » time|integer|false|none|none|
|» » userId|string|false|none|none|
|» » userName|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns the chat history

<a id="opIdgetChatHistoryUsingGET"></a>

> Code samples

```bash
curl "https://example.com/getChatHistory?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /getChatHistory`

<h3 id="returns-the-chat-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|start|query|string|false|none|
|end|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "messages": [
      {
        "text": "string",
        "time": 0,
        "userId": "string",
        "userName": "string"
      }
    ]
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-chat-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-chat-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» messages|[object]|false|none|none|
|» » text|string|false|none|none|
|» » time|integer|false|none|none|
|» » userId|string|false|none|none|
|» » userName|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns the chat history

<a id="opIdgetChatHistoryUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/getChatHistory?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getChatHistory`

<h3 id="returns-the-chat-history-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|start|query|string|false|none|
|end|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "messages": [
      {
        "text": "string",
        "time": 0,
        "userId": "string",
        "userName": "string"
      }
    ]
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-chat-history-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-chat-history-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» messages|[object]|false|none|none|
|» » text|string|false|none|none|
|» » time|integer|false|none|none|
|» » userId|string|false|none|none|
|» » userName|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns the text of a pad formatted as HTML

<a id="opIdgetHTMLUsingGET"></a>

> Code samples

```bash
curl "https://example.com/getHTML?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /getHTML`

<h3 id="returns-the-text-of-a-pad-formatted-as-html-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|rev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "html": "string"
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-text-of-a-pad-formatted-as-html-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-text-of-a-pad-formatted-as-html-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» html|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns the text of a pad formatted as HTML

<a id="opIdgetHTMLUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/getHTML?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getHTML`

<h3 id="returns-the-text-of-a-pad-formatted-as-html-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|rev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "html": "string"
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-text-of-a-pad-formatted-as-html-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-text-of-a-pad-formatted-as-html-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» html|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns the timestamp of the last revision of the pad

<a id="opIdgetLastEditedUsingGET"></a>

> Code samples

```bash
curl "https://example.com/getLastEdited?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /getLastEdited`

<h3 id="returns-the-timestamp-of-the-last-revision-of-the-pad-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "lastEdited": 0
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-timestamp-of-the-last-revision-of-the-pad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-timestamp-of-the-last-revision-of-the-pad-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» lastEdited|integer|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns the timestamp of the last revision of the pad

<a id="opIdgetLastEditedUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/getLastEdited?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getLastEdited`

<h3 id="returns-the-timestamp-of-the-last-revision-of-the-pad-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "lastEdited": 0
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-timestamp-of-the-last-revision-of-the-pad-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-timestamp-of-the-last-revision-of-the-pad-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» lastEdited|integer|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## return true of false

<a id="opIdgetPublicStatusUsingGET"></a>

> Code samples

```bash
curl "https://example.com/getPublicStatus?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /getPublicStatus`

<h3 id="return-true-of-false-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "publicStatus": true
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="return-true-of-false-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="return-true-of-false-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» publicStatus|boolean|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## return true of false

<a id="opIdgetPublicStatusUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/getPublicStatus?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getPublicStatus`

<h3 id="return-true-of-false-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "publicStatus": true
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="return-true-of-false-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="return-true-of-false-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» publicStatus|boolean|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns the read only link of a pad

<a id="opIdgetReadOnlyIDUsingGET"></a>

> Code samples

```bash
curl "https://example.com/getReadOnlyID?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /getReadOnlyID`

<h3 id="returns-the-read-only-link-of-a-pad-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "readOnlyID": "string"
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-read-only-link-of-a-pad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-read-only-link-of-a-pad-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» readOnlyID|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns the read only link of a pad

<a id="opIdgetReadOnlyIDUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/getReadOnlyID?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getReadOnlyID`

<h3 id="returns-the-read-only-link-of-a-pad-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "readOnlyID": "string"
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-read-only-link-of-a-pad-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-read-only-link-of-a-pad-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» readOnlyID|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns the number of revisions of this pad

<a id="opIdgetRevisionsCountUsingGET"></a>

> Code samples

```bash
curl "https://example.com/getRevisionsCount?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /getRevisionsCount`

<h3 id="returns-the-number-of-revisions-of-this-pad-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "revisions": 0
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-number-of-revisions-of-this-pad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-number-of-revisions-of-this-pad-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» revisions|integer|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns the number of revisions of this pad

<a id="opIdgetRevisionsCountUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/getRevisionsCount?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getRevisionsCount`

<h3 id="returns-the-number-of-revisions-of-this-pad-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "revisions": 0
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-number-of-revisions-of-this-pad-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-number-of-revisions-of-this-pad-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» revisions|integer|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns the text of a pad

<a id="opIdgetTextUsingGET"></a>

> Code samples

```bash
curl "https://example.com/getText?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /getText`

<h3 id="returns-the-text-of-a-pad-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|rev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "text": "string"
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-text-of-a-pad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-text-of-a-pad-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» text|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns the text of a pad

<a id="opIdgetTextUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/getText?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getText`

<h3 id="returns-the-text-of-a-pad-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|rev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "text": "string"
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-text-of-a-pad-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-text-of-a-pad-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» text|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## list all the pads

<a id="opIdlistAllPadsUsingGET"></a>

> Code samples

```bash
curl "https://example.com/listAllPads?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /listAllPads`

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "padIDs": [
      "string"
    ]
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="list-all-the-pads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="list-all-the-pads-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» padIDs|[string]|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## list all the pads

<a id="opIdlistAllPadsUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/listAllPads?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /listAllPads`

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "padIDs": [
      "string"
    ]
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="list-all-the-pads-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="list-all-the-pads-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» padIDs|[string]|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns an array of authors who contributed to this pad

<a id="opIdlistAuthorsOfPadUsingGET"></a>

> Code samples

```bash
curl "https://example.com/listAuthorsOfPad?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /listAuthorsOfPad`

<h3 id="returns-an-array-of-authors-who-contributed-to-this-pad-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "authorIDs": [
      "string"
    ]
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-an-array-of-authors-who-contributed-to-this-pad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-an-array-of-authors-who-contributed-to-this-pad-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» authorIDs|[string]|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns an array of authors who contributed to this pad

<a id="opIdlistAuthorsOfPadUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/listAuthorsOfPad?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /listAuthorsOfPad`

<h3 id="returns-an-array-of-authors-who-contributed-to-this-pad-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "authorIDs": [
      "string"
    ]
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-an-array-of-authors-who-contributed-to-this-pad-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-an-array-of-authors-who-contributed-to-this-pad-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» authorIDs|[string]|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns the list of users that are currently editing this pad

<a id="opIdpadUsersUsingGET"></a>

> Code samples

```bash
curl "https://example.com/padUsers?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /padUsers`

<h3 id="returns-the-list-of-users-that-are-currently-editing-this-pad-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "padUsers": [
      {
        "colorId": "string",
        "id": "string",
        "name": "string",
        "timestamp": 0
      }
    ]
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-list-of-users-that-are-currently-editing-this-pad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-list-of-users-that-are-currently-editing-this-pad-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» padUsers|[object]|false|none|none|
|» » colorId|string|false|none|none|
|» » id|string|false|none|none|
|» » name|string|false|none|none|
|» » timestamp|integer|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns the list of users that are currently editing this pad

<a id="opIdpadUsersUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/padUsers?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /padUsers`

<h3 id="returns-the-list-of-users-that-are-currently-editing-this-pad-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "padUsers": [
      {
        "colorId": "string",
        "id": "string",
        "name": "string",
        "timestamp": 0
      }
    ]
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-list-of-users-that-are-currently-editing-this-pad-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-list-of-users-that-are-currently-editing-this-pad-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» padUsers|[object]|false|none|none|
|» » colorId|string|false|none|none|
|» » id|string|false|none|none|
|» » name|string|false|none|none|
|» » timestamp|integer|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns the number of user that are currently editing this pad

<a id="opIdpadUsersCountUsingGET"></a>

> Code samples

```bash
curl "https://example.com/padUsersCount?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /padUsersCount`

<h3 id="returns-the-number-of-user-that-are-currently-editing-this-pad-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "padUsersCount": 0
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-number-of-user-that-are-currently-editing-this-pad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-number-of-user-that-are-currently-editing-this-pad-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» padUsersCount|integer|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns the number of user that are currently editing this pad

<a id="opIdpadUsersCountUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/padUsersCount?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /padUsersCount`

<h3 id="returns-the-number-of-user-that-are-currently-editing-this-pad-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "padUsersCount": 0
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-number-of-user-that-are-currently-editing-this-pad-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-number-of-user-that-are-currently-editing-this-pad-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» padUsersCount|integer|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## sends a custom message of type msg to the pad

<a id="opIdsendClientsMessageUsingGET"></a>

> Code samples

```bash
curl "https://example.com/sendClientsMessage?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /sendClientsMessage`

<h3 id="sends-a-custom-message-of-type-msg-to-the-pad-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|msg|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="sends-a-custom-message-of-type-msg-to-the-pad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="sends-a-custom-message-of-type-msg-to-the-pad-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## sends a custom message of type msg to the pad

<a id="opIdsendClientsMessageUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/sendClientsMessage?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /sendClientsMessage`

<h3 id="sends-a-custom-message-of-type-msg-to-the-pad-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|msg|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="sends-a-custom-message-of-type-msg-to-the-pad-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="sends-a-custom-message-of-type-msg-to-the-pad-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## sets the text of a pad with HTML

<a id="opIdsetHTMLUsingGET"></a>

> Code samples

```bash
curl "https://example.com/setHTML?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /setHTML`

<h3 id="sets-the-text-of-a-pad-with-html-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|html|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="sets-the-text-of-a-pad-with-html-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="sets-the-text-of-a-pad-with-html-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## sets the text of a pad with HTML

<a id="opIdsetHTMLUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/setHTML?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /setHTML`

<h3 id="sets-the-text-of-a-pad-with-html-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|html|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="sets-the-text-of-a-pad-with-html-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="sets-the-text-of-a-pad-with-html-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## sets a boolean for the public status of a pad

<a id="opIdsetPublicStatusUsingGET"></a>

> Code samples

```bash
curl "https://example.com/setPublicStatus?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /setPublicStatus`

<h3 id="sets-a-boolean-for-the-public-status-of-a-pad-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|publicStatus|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="sets-a-boolean-for-the-public-status-of-a-pad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="sets-a-boolean-for-the-public-status-of-a-pad-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## sets a boolean for the public status of a pad

<a id="opIdsetPublicStatusUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/setPublicStatus?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /setPublicStatus`

<h3 id="sets-a-boolean-for-the-public-status-of-a-pad-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|publicStatus|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="sets-a-boolean-for-the-public-status-of-a-pad-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="sets-a-boolean-for-the-public-status-of-a-pad-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## sets the text of a pad

<a id="opIdsetTextUsingGET"></a>

> Code samples

```bash
curl "https://example.com/setText?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /setText`

<h3 id="sets-the-text-of-a-pad-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|text|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="sets-the-text-of-a-pad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="sets-the-text-of-a-pad-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## sets the text of a pad

<a id="opIdsetTextUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/setText?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /setText`

<h3 id="sets-the-text-of-a-pad-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|text|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="sets-the-text-of-a-pad-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="sets-the-text-of-a-pad-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="etherpad-api-default">Default</h1>

## appendTextUsingGET

<a id="opIdappendTextUsingGET"></a>

> Code samples

```bash
curl "https://example.com/appendText?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /appendText`

<h3 id="appendtextusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|text|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="appendtextusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="appendtextusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## appendTextUsingPOST

<a id="opIdappendTextUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/appendText?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /appendText`

<h3 id="appendtextusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|text|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="appendtextusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="appendtextusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## copyPadUsingGET

<a id="opIdcopyPadUsingGET"></a>

> Code samples

```bash
curl "https://example.com/copyPad?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /copyPad`

<h3 id="copypadusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceID|query|string|false|none|
|destinationID|query|string|false|none|
|force|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="copypadusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="copypadusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## copyPadUsingPOST

<a id="opIdcopyPadUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/copyPad?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /copyPad`

<h3 id="copypadusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceID|query|string|false|none|
|destinationID|query|string|false|none|
|force|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="copypadusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="copypadusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## copyPadWithoutHistoryUsingGET

<a id="opIdcopyPadWithoutHistoryUsingGET"></a>

> Code samples

```bash
curl "https://example.com/copyPadWithoutHistory?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /copyPadWithoutHistory`

<h3 id="copypadwithouthistoryusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceID|query|string|false|none|
|destinationID|query|string|false|none|
|force|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="copypadwithouthistoryusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="copypadwithouthistoryusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## copyPadWithoutHistoryUsingPOST

<a id="opIdcopyPadWithoutHistoryUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/copyPadWithoutHistory?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /copyPadWithoutHistory`

<h3 id="copypadwithouthistoryusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceID|query|string|false|none|
|destinationID|query|string|false|none|
|force|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="copypadwithouthistoryusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="copypadwithouthistoryusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## getAttributePoolUsingGET

<a id="opIdgetAttributePoolUsingGET"></a>

> Code samples

```bash
curl "https://example.com/getAttributePool?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /getAttributePool`

<h3 id="getattributepoolusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="getattributepoolusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="getattributepoolusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## getAttributePoolUsingPOST

<a id="opIdgetAttributePoolUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/getAttributePool?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getAttributePool`

<h3 id="getattributepoolusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="getattributepoolusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="getattributepoolusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## getPadIDUsingGET

<a id="opIdgetPadIDUsingGET"></a>

> Code samples

```bash
curl "https://example.com/getPadID?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /getPadID`

<h3 id="getpadidusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|roID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="getpadidusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="getpadidusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## getPadIDUsingPOST

<a id="opIdgetPadIDUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/getPadID?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getPadID`

<h3 id="getpadidusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|roID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="getpadidusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="getpadidusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## getRevisionChangesetUsingGET

<a id="opIdgetRevisionChangesetUsingGET"></a>

> Code samples

```bash
curl "https://example.com/getRevisionChangeset?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /getRevisionChangeset`

<h3 id="getrevisionchangesetusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|rev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="getrevisionchangesetusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="getrevisionchangesetusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## getRevisionChangesetUsingPOST

<a id="opIdgetRevisionChangesetUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/getRevisionChangeset?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getRevisionChangeset`

<h3 id="getrevisionchangesetusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|rev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="getrevisionchangesetusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="getrevisionchangesetusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## getSavedRevisionsCountUsingGET

<a id="opIdgetSavedRevisionsCountUsingGET"></a>

> Code samples

```bash
curl "https://example.com/getSavedRevisionsCount?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /getSavedRevisionsCount`

<h3 id="getsavedrevisionscountusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="getsavedrevisionscountusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="getsavedrevisionscountusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## getSavedRevisionsCountUsingPOST

<a id="opIdgetSavedRevisionsCountUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/getSavedRevisionsCount?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getSavedRevisionsCount`

<h3 id="getsavedrevisionscountusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="getsavedrevisionscountusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="getsavedrevisionscountusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## getStatsUsingGET

<a id="opIdgetStatsUsingGET"></a>

> Code samples

```bash
curl "https://example.com/getStats?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /getStats`

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="getstatsusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="getstatsusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## getStatsUsingPOST

<a id="opIdgetStatsUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/getStats?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getStats`

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="getstatsusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="getstatsusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## listSavedRevisionsUsingGET

<a id="opIdlistSavedRevisionsUsingGET"></a>

> Code samples

```bash
curl "https://example.com/listSavedRevisions?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /listSavedRevisions`

<h3 id="listsavedrevisionsusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="listsavedrevisionsusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="listsavedrevisionsusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## listSavedRevisionsUsingPOST

<a id="opIdlistSavedRevisionsUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/listSavedRevisions?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /listSavedRevisions`

<h3 id="listsavedrevisionsusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="listsavedrevisionsusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="listsavedrevisionsusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## movePadUsingGET

<a id="opIdmovePadUsingGET"></a>

> Code samples

```bash
curl "https://example.com/movePad?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /movePad`

<h3 id="movepadusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceID|query|string|false|none|
|destinationID|query|string|false|none|
|force|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="movepadusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="movepadusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## movePadUsingPOST

<a id="opIdmovePadUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/movePad?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /movePad`

<h3 id="movepadusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceID|query|string|false|none|
|destinationID|query|string|false|none|
|force|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="movepadusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="movepadusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## restoreRevisionUsingGET

<a id="opIdrestoreRevisionUsingGET"></a>

> Code samples

```bash
curl "https://example.com/restoreRevision?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /restoreRevision`

<h3 id="restorerevisionusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|rev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="restorerevisionusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="restorerevisionusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## restoreRevisionUsingPOST

<a id="opIdrestoreRevisionUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/restoreRevision?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /restoreRevision`

<h3 id="restorerevisionusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|rev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="restorerevisionusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="restorerevisionusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## saveRevisionUsingGET

<a id="opIdsaveRevisionUsingGET"></a>

> Code samples

```bash
curl "https://example.com/saveRevision?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /saveRevision`

<h3 id="saverevisionusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|rev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="saverevisionusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="saverevisionusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## saveRevisionUsingPOST

<a id="opIdsaveRevisionUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/saveRevision?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /saveRevision`

<h3 id="saverevisionusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|padID|query|string|false|none|
|rev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="saverevisionusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="saverevisionusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="etherpad-api-author">author</h1>

## creates a new author

<a id="opIdcreateAuthorUsingGET"></a>

> Code samples

```bash
curl "https://example.com/createAuthor?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /createAuthor`

<h3 id="creates-a-new-author-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "authorID": "string"
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="creates-a-new-author-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="creates-a-new-author-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» authorID|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## creates a new author

<a id="opIdcreateAuthorUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/createAuthor?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /createAuthor`

<h3 id="creates-a-new-author-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "authorID": "string"
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="creates-a-new-author-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="creates-a-new-author-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» authorID|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## this functions helps you to map your application author ids to Etherpad author ids

<a id="opIdcreateAuthorIfNotExistsForUsingGET"></a>

> Code samples

```bash
curl "https://example.com/createAuthorIfNotExistsFor?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /createAuthorIfNotExistsFor`

<h3 id="this-functions-helps-you-to-map-your-application-author-ids-to-etherpad-author-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorMapper|query|string|false|none|
|name|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "authorID": "string"
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="this-functions-helps-you-to-map-your-application-author-ids-to-etherpad-author-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="this-functions-helps-you-to-map-your-application-author-ids-to-etherpad-author-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» authorID|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## this functions helps you to map your application author ids to Etherpad author ids

<a id="opIdcreateAuthorIfNotExistsForUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/createAuthorIfNotExistsFor?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /createAuthorIfNotExistsFor`

<h3 id="this-functions-helps-you-to-map-your-application-author-ids-to-etherpad-author-ids-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorMapper|query|string|false|none|
|name|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "authorID": "string"
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="this-functions-helps-you-to-map-your-application-author-ids-to-etherpad-author-ids-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="this-functions-helps-you-to-map-your-application-author-ids-to-etherpad-author-ids-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» authorID|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Returns the Author Name of the author

<a id="opIdgetAuthorNameUsingGET"></a>

> Code samples

```bash
curl "https://example.com/getAuthorName?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /getAuthorName`

<h3 id="returns-the-author-name-of-the-author-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "info": {
      "colorId": "string",
      "id": "string",
      "name": "string",
      "timestamp": 0
    }
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-author-name-of-the-author-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-author-name-of-the-author-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» info|object|false|none|none|
|» » colorId|string|false|none|none|
|» » id|string|false|none|none|
|» » name|string|false|none|none|
|» » timestamp|integer|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Returns the Author Name of the author

<a id="opIdgetAuthorNameUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/getAuthorName?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getAuthorName`

<h3 id="returns-the-author-name-of-the-author-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "info": {
      "colorId": "string",
      "id": "string",
      "name": "string",
      "timestamp": 0
    }
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-the-author-name-of-the-author-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-the-author-name-of-the-author-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» info|object|false|none|none|
|» » colorId|string|false|none|none|
|» » id|string|false|none|none|
|» » name|string|false|none|none|
|» » timestamp|integer|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns an array of all pads this author contributed to

<a id="opIdlistPadsOfAuthorUsingGET"></a>

> Code samples

```bash
curl "https://example.com/listPadsOfAuthor?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /listPadsOfAuthor`

<h3 id="returns-an-array-of-all-pads-this-author-contributed-to-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "padIDs": [
      "string"
    ]
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-an-array-of-all-pads-this-author-contributed-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-an-array-of-all-pads-this-author-contributed-to-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» padIDs|[string]|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns an array of all pads this author contributed to

<a id="opIdlistPadsOfAuthorUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/listPadsOfAuthor?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /listPadsOfAuthor`

<h3 id="returns-an-array-of-all-pads-this-author-contributed-to-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "padIDs": [
      "string"
    ]
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-an-array-of-all-pads-this-author-contributed-to-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-an-array-of-all-pads-this-author-contributed-to-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» padIDs|[string]|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns all sessions of an author

<a id="opIdlistSessionsOfAuthorUsingGET"></a>

> Code samples

```bash
curl "https://example.com/listSessionsOfAuthor?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /listSessionsOfAuthor`

<h3 id="returns-all-sessions-of-an-author-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "sessions": [
      {
        "authorID": "string",
        "groupID": "string",
        "id": "string",
        "validUntil": 0
      }
    ]
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-all-sessions-of-an-author-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-all-sessions-of-an-author-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» sessions|[object]|false|none|none|
|» » authorID|string|false|none|none|
|» » groupID|string|false|none|none|
|» » id|string|false|none|none|
|» » validUntil|integer|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns all sessions of an author

<a id="opIdlistSessionsOfAuthorUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/listSessionsOfAuthor?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /listSessionsOfAuthor`

<h3 id="returns-all-sessions-of-an-author-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "sessions": [
      {
        "authorID": "string",
        "groupID": "string",
        "id": "string",
        "validUntil": 0
      }
    ]
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-all-sessions-of-an-author-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-all-sessions-of-an-author-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» sessions|[object]|false|none|none|
|» » authorID|string|false|none|none|
|» » groupID|string|false|none|none|
|» » id|string|false|none|none|
|» » validUntil|integer|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="etherpad-api-group">group</h1>

## creates a new group

<a id="opIdcreateGroupUsingGET"></a>

> Code samples

```bash
curl "https://example.com/createGroup?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /createGroup`

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "groupID": "string"
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="creates-a-new-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="creates-a-new-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» groupID|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## creates a new group

<a id="opIdcreateGroupUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/createGroup?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /createGroup`

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "groupID": "string"
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="creates-a-new-group-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="creates-a-new-group-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» groupID|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## this functions helps you to map your application group ids to Etherpad group ids

<a id="opIdcreateGroupIfNotExistsForUsingGET"></a>

> Code samples

```bash
curl "https://example.com/createGroupIfNotExistsFor?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /createGroupIfNotExistsFor`

<h3 id="this-functions-helps-you-to-map-your-application-group-ids-to-etherpad-group-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupMapper|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "groupID": "string"
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="this-functions-helps-you-to-map-your-application-group-ids-to-etherpad-group-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="this-functions-helps-you-to-map-your-application-group-ids-to-etherpad-group-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» groupID|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## this functions helps you to map your application group ids to Etherpad group ids

<a id="opIdcreateGroupIfNotExistsForUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/createGroupIfNotExistsFor?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /createGroupIfNotExistsFor`

<h3 id="this-functions-helps-you-to-map-your-application-group-ids-to-etherpad-group-ids-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupMapper|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "groupID": "string"
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="this-functions-helps-you-to-map-your-application-group-ids-to-etherpad-group-ids-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="this-functions-helps-you-to-map-your-application-group-ids-to-etherpad-group-ids-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» groupID|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## creates a new pad in this group

<a id="opIdcreateGroupPadUsingGET"></a>

> Code samples

```bash
curl "https://example.com/createGroupPad?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /createGroupPad`

<h3 id="creates-a-new-pad-in-this-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupID|query|string|false|none|
|padName|query|string|false|none|
|text|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="creates-a-new-pad-in-this-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="creates-a-new-pad-in-this-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## creates a new pad in this group

<a id="opIdcreateGroupPadUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/createGroupPad?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /createGroupPad`

<h3 id="creates-a-new-pad-in-this-group-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupID|query|string|false|none|
|padName|query|string|false|none|
|text|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="creates-a-new-pad-in-this-group-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="creates-a-new-pad-in-this-group-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## deletes a group

<a id="opIddeleteGroupUsingGET"></a>

> Code samples

```bash
curl "https://example.com/deleteGroup?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /deleteGroup`

<h3 id="deletes-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="deletes-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="deletes-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## deletes a group

<a id="opIddeleteGroupUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/deleteGroup?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /deleteGroup`

<h3 id="deletes-a-group-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="deletes-a-group-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="deletes-a-group-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## listAllGroupsUsingGET

<a id="opIdlistAllGroupsUsingGET"></a>

> Code samples

```bash
curl "https://example.com/listAllGroups?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /listAllGroups`

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "groupIDs": [
      "string"
    ]
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="listallgroupsusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="listallgroupsusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» groupIDs|[string]|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## listAllGroupsUsingPOST

<a id="opIdlistAllGroupsUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/listAllGroups?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /listAllGroups`

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "groupIDs": [
      "string"
    ]
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="listallgroupsusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="listallgroupsusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» groupIDs|[string]|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns all pads of this group

<a id="opIdlistPadsUsingGET"></a>

> Code samples

```bash
curl "https://example.com/listPads?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /listPads`

<h3 id="returns-all-pads-of-this-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "padIDs": [
      "string"
    ]
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-all-pads-of-this-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-all-pads-of-this-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» padIDs|[string]|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns all pads of this group

<a id="opIdlistPadsUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/listPads?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /listPads`

<h3 id="returns-all-pads-of-this-group-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "padIDs": [
      "string"
    ]
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-all-pads-of-this-group-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-all-pads-of-this-group-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» padIDs|[string]|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## listSessionsOfGroupUsingGET

<a id="opIdlistSessionsOfGroupUsingGET"></a>

> Code samples

```bash
curl "https://example.com/listSessionsOfGroup?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /listSessionsOfGroup`

<h3 id="listsessionsofgroupusingget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "sessions": [
      {
        "authorID": "string",
        "groupID": "string",
        "id": "string",
        "validUntil": 0
      }
    ]
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="listsessionsofgroupusingget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="listsessionsofgroupusingget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» sessions|[object]|false|none|none|
|» » authorID|string|false|none|none|
|» » groupID|string|false|none|none|
|» » id|string|false|none|none|
|» » validUntil|integer|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## listSessionsOfGroupUsingPOST

<a id="opIdlistSessionsOfGroupUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/listSessionsOfGroup?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /listSessionsOfGroup`

<h3 id="listsessionsofgroupusingpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "sessions": [
      {
        "authorID": "string",
        "groupID": "string",
        "id": "string",
        "validUntil": 0
      }
    ]
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="listsessionsofgroupusingpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="listsessionsofgroupusingpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» sessions|[object]|false|none|none|
|» » authorID|string|false|none|none|
|» » groupID|string|false|none|none|
|» » id|string|false|none|none|
|» » validUntil|integer|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="etherpad-api-session">session</h1>

## creates a new session. validUntil is an unix timestamp in seconds

<a id="opIdcreateSessionUsingGET"></a>

> Code samples

```bash
curl "https://example.com/createSession?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /createSession`

<h3 id="creates-a-new-session-validuntil-is-an-unix-timestamp-in-seconds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupID|query|string|false|none|
|authorID|query|string|false|none|
|validUntil|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "sessionID": "string"
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="creates-a-new-session-validuntil-is-an-unix-timestamp-in-seconds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="creates-a-new-session-validuntil-is-an-unix-timestamp-in-seconds-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» sessionID|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## creates a new session. validUntil is an unix timestamp in seconds

<a id="opIdcreateSessionUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/createSession?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /createSession`

<h3 id="creates-a-new-session-validuntil-is-an-unix-timestamp-in-seconds-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupID|query|string|false|none|
|authorID|query|string|false|none|
|validUntil|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "sessionID": "string"
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="creates-a-new-session-validuntil-is-an-unix-timestamp-in-seconds-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="creates-a-new-session-validuntil-is-an-unix-timestamp-in-seconds-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» sessionID|string|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## deletes a session

<a id="opIddeleteSessionUsingGET"></a>

> Code samples

```bash
curl "https://example.com/deleteSession?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /deleteSession`

<h3 id="deletes-a-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sessionID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="deletes-a-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="deletes-a-session-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## deletes a session

<a id="opIddeleteSessionUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/deleteSession?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /deleteSession`

<h3 id="deletes-a-session-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sessionID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="deletes-a-session-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="deletes-a-session-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns informations about a session

<a id="opIdgetSessionInfoUsingGET"></a>

> Code samples

```bash
curl "https://example.com/getSessionInfo?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /getSessionInfo`

<h3 id="returns-informations-about-a-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sessionID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "info": {
      "authorID": "string",
      "groupID": "string",
      "id": "string",
      "validUntil": 0
    }
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-informations-about-a-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-informations-about-a-session-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» info|object|false|none|none|
|» » authorID|string|false|none|none|
|» » groupID|string|false|none|none|
|» » id|string|false|none|none|
|» » validUntil|integer|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## returns informations about a session

<a id="opIdgetSessionInfoUsingPOST"></a>

> Code samples

```bash
curl "https://example.com/getSessionInfo?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getSessionInfo`

<h3 id="returns-informations-about-a-session-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sessionID|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "data": {
    "info": {
      "authorID": "string",
      "groupID": "string",
      "id": "string",
      "validUntil": 0
    }
  },
  "message": "ok"
}
```

> 400 Response

```json
{
  "code": 1,
  "data": null,
  "message": "error message"
}
```

> 401 Response

```json
{
  "code": 4,
  "data": null,
  "message": "no or wrong API key"
}
```

> 500 Response

```json
{
  "code": 2,
  "data": null,
  "message": "internal error"
}
```

<h3 id="returns-informations-about-a-session-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok (code 0)|Inline|
|400|Bad Request|generic api error (code 1)|Inline|
|401|Unauthorized|no or wrong API key (code 4)|Inline|
|500|Internal Server Error|internal api error (code 2)|Inline|

<h3 id="returns-informations-about-a-session-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|» info|object|false|none|none|
|» » authorID|string|false|none|none|
|» » groupID|string|false|none|none|
|» » id|string|false|none|none|
|» » validUntil|integer|false|none|none|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|data|object|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

# Schemas

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "text": "string",
  "time": 0,
  "userId": "string",
  "userName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|none|
|time|integer|false|none|none|
|userId|string|false|none|none|
|userName|string|false|none|none|

<h2 id="tocS_SessionInfo">SessionInfo</h2>
<!-- backwards compatibility -->
<a id="schemasessioninfo"></a>
<a id="schema_SessionInfo"></a>
<a id="tocSsessioninfo"></a>
<a id="tocssessioninfo"></a>

```json
{
  "authorID": "string",
  "groupID": "string",
  "id": "string",
  "validUntil": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorID|string|false|none|none|
|groupID|string|false|none|none|
|id|string|false|none|none|
|validUntil|integer|false|none|none|

<h2 id="tocS_UserInfo">UserInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserinfo"></a>
<a id="schema_UserInfo"></a>
<a id="tocSuserinfo"></a>
<a id="tocsuserinfo"></a>

```json
{
  "colorId": "string",
  "id": "string",
  "name": "string",
  "timestamp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colorId|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|timestamp|integer|false|none|none|
