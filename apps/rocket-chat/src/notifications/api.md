<h1 id="notifications">Notifications v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://apiexplorer.support.rocket.chat">https://apiexplorer.support.rocket.chat</a>

<h1 id="notifications-push-notifications">Push Notifications</h1>

## Get Push Notification

<a id="opIdget-api-v1-push.get"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/push.get?id=WkbwSntxt8D3jLp8G' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG'
```

`GET /api/v1/push.get`

Get push notification for a message.
### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.5.0            | Added       |

<h3 id="get-push-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|
|id|query|string|true|The message ID.|

> Example responses

> 200 Response

```json
{
  "data": {
    "message": {
      "_id": "WkbwSntxt8D3jLp8G",
      "rid": "iu7jtPAhvEeAS5tNq",
      "msg": "fsfs",
      "ts": "2021-10-22T14:29:23.581Z",
      "u": {
        "_id": "d26x6zSkaPSe5gCyy",
        "username": "rodriq",
        "name": "Rodriq"
      },
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "fsfs"
            }
          ]
        }
      ],
      "_updatedAt": "2021-10-22T14:29:23.603Z"
    },
    "notification": {
      "from": "push",
      "badge": 2,
      "sound": "default",
      "priority": 10,
      "title": "#vb",
      "text": "rodriq: fsfs",
      "payload": {
        "host": "http://localhost:3000/",
        "messageId": "WkbwSntxt8D3jLp8G",
        "notificationType": "message",
        "rid": "iu7jtPAhvEeAS5tNq",
        "sender": {
          "_id": "d26x6zSkaPSe5gCyy",
          "username": "rodriq",
          "name": "Rodriq"
        },
        "senderName": "rodriq",
        "type": "c",
        "name": "vb"
      },
      "userId": "d26x6zSkaPSe5gCyy",
      "notId": 654494840,
      "gcm": {
        "style": "inbox",
        "image": "http://localhost:3000/images/logo/android-chrome-192x192.png"
      },
      "apn": {
        "category": "MESSAGE"
      }
    }
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Match error: Missing key 'id'"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-push-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-push-notification-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» message|object|false|none|none|
|» » _id|string|false|none|none|
|» » rid|string|false|none|none|
|» » msg|string|false|none|none|
|» » ts|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » urls|[object]|false|none|none|
|» » mentions|[object]|false|none|none|
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» notification|object|false|none|none|
|» » from|string|false|none|none|
|» » badge|integer|false|none|none|
|» » sound|string|false|none|none|
|» » priority|integer|false|none|none|
|» » title|string|false|none|none|
|» » text|string|false|none|none|
|» » payload|object|false|none|none|
|» » » host|string|false|none|none|
|» » » messageId|string|false|none|none|
|» » » notificationType|string|false|none|none|
|» » » rid|string|false|none|none|
|» » » sender|object|false|none|none|
|» » » » _id|string|false|none|none|
|» » » » username|string|false|none|none|
|» » » » name|string|false|none|none|
|» » » senderName|string|false|none|none|
|» » » type|string|false|none|none|
|» » » name|string|false|none|none|
|» » userId|string|false|none|none|
|» » notId|integer|false|none|none|
|» » gcm|object|false|none|none|
|» » » style|string|false|none|none|
|» » » image|string|false|none|none|
|» » apn|object|false|none|none|
|» » » category|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Push Token

<a id="opIdpost-api-v1-push.token"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/push.token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG' \
  -d '{
    "type": "gcm",
    "value": "TOKEN",
    "appName": "MyApp"
  }'
```

`POST /api/v1/push.token`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0   | Changed response to flat `tokenType` and `tokenValue`.       |
|0.60.0            | Added       |

> Body parameter

```json
{
  "type": "gcm",
  "value": "TOKEN",
  "appName": "MyApp"
}
```

<h3 id="create-push-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|
|body|body|object|false|none|
|» id|body|string|false|Optional existing push token document ID to update.|
|» type|body|string|true|The possible values are `apn` or `gcm`.|
|» value|body|string|true|The token value.|
|» appName|body|string|true|The name of the application to associate the token with.|
|» voipToken|body|string|false|Optional iOS VoIP (PushKit) token. Stored as a separate document; not returned in the response.|

> Example responses

> 200 Response

```json
{
  "result": {
    "tokenType": "gcm",
    "tokenValue": "TOKEN",
    "appName": "RocketAPP",
    "userId": "52d5Rw8LT3TeDa59Z",
    "enabled": true,
    "createdAt": "2018-09-11T18:22:55.006Z",
    "_updatedAt": "2018-09-11T18:22:55.006Z",
    "_id": "DMMjKG2hFoLvM2hk7"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'type' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="create-push-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="create-push-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» tokenType|string|false|none|The token type: `apn`, `gcm`, or `voip`.|
|» tokenValue|string|false|none|The device token.|
|» appName|string|false|none|none|
|» userId|string|false|none|none|
|» enabled|boolean|false|none|none|
|» createdAt|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» _id|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Push Token

<a id="opIddelete-api-v1-push.token"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/push.token \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG' \
  -d '{
    "token": "abc"
  }'
```

`DELETE /api/v1/push.token`

Removes push token from the workspace.
### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.60.0            | Added       |

> Body parameter

```json
{
  "token": "abc"
}
```

<h3 id="delete-push-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|
|body|body|object|false|none|
|» token|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'token' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="delete-push-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="delete-push-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Push Info

<a id="opIdget-api-v1-push.info"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/push.info \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG'
```

`GET /api/v1/push.info`

This endpoint returns the status of push gateway in your workspace.

<h3 id="get-push-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|

> Example responses

> 200 Response

```json
{
  "pushGatewayEnabled": true,
  "defaultPushGateway": true,
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-push-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-push-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pushGatewayEnabled|boolean|false|none|none|
|defaultPushGateway|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Test Push Notifications

<a id="opIdpost-api-v1-push.test"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/push.test \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG'
```

`POST /api/v1/push.test`

Use this endpoint to test the push notifications configuration. The response indicates how many registered devices received the test notification.

To test successfully, make sure that you have logged into the workspace on the Rocket.Chat mobile app. By default, one request is allowed every 1000 milliseconds.

**Permission required**:
- `test-push-notifications`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.8.0            | Added the `message` and `params` response fields. |

<h3 id="test-push-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|

> Example responses

> 200 Response

```json
{
  "tokensCount": 1,
  "message": "Your_push_was_sent_to_s_devices",
  "params": [
    1
  ],
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="test-push-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="test-push-notifications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokensCount|integer|true|none|The number of devices to which the test notification was sent.|
|message|string|true|none|The translation key for the test result message.|
|params|[integer]|true|none|Values used to format the translated result message.|
|success|boolean|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="notifications-banners">Banners</h1>

## Get Banner by ID

<a id="opIdget-api-v1-banners-id"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/banners/ByehQjC44FwMeiLbX?platform=web' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG'
```

`GET /api/v1/banners/{id}`

Gets the banner to be shown to the authenticated user.

<h3 id="get-banner-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|
|platform|query|string|true|The platform rendering the banner.|
|id|path|string|true|The banner ID.|

> Example responses

> 200 Response

```json
{
  "banners": [],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'platform' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-banner-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-banner-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|banners|[object]|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Banners

<a id="opIdget-api-v1-banners"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/banners?platform=web' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG'
```

`GET /api/v1/banners`

Gets the banners to be shown to the authenticated user.

<h3 id="get-banners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|
|platform|query|string|true|The platform rendering the banner|

> Example responses

> 200 Response

```json
{
  "banners": [],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'platform' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-banners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-banners-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|banners|[object]|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Dismiss a Banner

<a id="opIdpost-api-v1-banners.dismiss"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/banners.dismiss \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG' \
  -d '{
    "bannerId": "ByehQjC44FwMeiLbX"
  }'
```

`POST /api/v1/banners.dismiss`

> Body parameter

```json
{
  "bannerId": "ByehQjC44FwMeiLbX"
}
```

<h3 id="dismiss-a-banner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|
|body|body|object|false|none|
|» bannerId|body|string|true|The banner ID that you want to dismiss.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'bannerId' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="dismiss-a-banner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="dismiss-a-banner-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
