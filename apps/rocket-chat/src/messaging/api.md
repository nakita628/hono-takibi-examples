<h1 id="messaging">Messaging v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://apiexplorer.support.rocket.chat">https://apiexplorer.support.rocket.chat</a>

<h1 id="messaging-chat">Chat</h1>

## Delete Chat Message

<a id="opIdpost-api-v1-chat.delete"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/chat.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "msgId": "7aDSXtjMA3KPLxLjt",
    "asUser": false
  }'
```

`POST /api/v1/chat.delete`

Delete a chat message. Users can delete messages only in the following cases:
  * The **Allow Message Deleting** setting is enabled in the workspace's **Message** settings.
  * If the **Block Message Deleting After (n) Minutes** message setting has a non-zero value, the `bypass-time-limit-edit-and-delete` permission is required to delete messages after the defined time limit.
  * In read-only rooms, the `post-readonly` permission is required to delete messages, or the user must be unmuted.
  * The `delete-own-message` permission is required to delete users' own messages.
  * The `delete-message` permission is required for users to delete messages from other users.

You can delete a message by its `roomId` and `msgId`, or delete a message by its `fileId` to remove the message that holds an uploaded file.

### Changelog
| Version      | Description |
| ---------------- | ------------|
| 8.6.0            | Added `fileId` to delete a message by the file it contains. |
| 0.48.0           | Added       |


> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "msgId": "7aDSXtjMA3KPLxLjt",
  "asUser": false
}
```

<h3 id="delete-chat-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|false|The room ID. Required when deleting by `msgId`.|
|» msgId|body|string|false|The ID of the message to delete. Required together with `roomId`.|
|» fileId|body|string|false|The ID of the uploaded file whose message you want to delete. Use this instead of `roomId` and `msgId` to delete the message that contains the file.|
|» asUser|body|boolean|false|Should the message be deleted as the user who sent it? It is `false` by default.|

> Example responses

> 200 Response

```json
{
  "_id": "jEnjsxuoDJamGjbH2",
  "ts": "1696533809813",
  "message": {
    "_id": "jEnjsxuoDJamGjbH2",
    "rid": "6GFJ3tbmHiyHbahmC",
    "u": {
      "_id": "5fRTXMt7DMJbpPJfh",
      "username": "test.test",
      "name": "Testtest"
    }
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "No message found with the id of \\\"MvHcX2WKSrmdArmktz\\\"."
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="delete-chat-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="delete-chat-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|ts|string|false|none|none|
|message|object|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
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

## React to Message

<a id="opIdpost-api-v1-chat.react"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/chat.react \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "messageId": "7aDSXtjMA3KPLxLjt",
    "emoji": "smile",
    "shouldReact": true
  }'
```

`POST /api/v1/chat.react`

React or unreact to a chat message.

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|0.64.0            | Added parameter "shouldReact" to make endpoint work like a setter|
|0.63.0            | Emoji has to exist                                               |
|0.62.2            |Added                                                             |

> Body parameter

```json
{
  "messageId": "7aDSXtjMA3KPLxLjt",
  "emoji": "smile",
  "shouldReact": true
}
```

<h3 id="react-to-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|The emoji doesn't have to contain `:`. However, the emoji must exist. Using either the `emoji` or `reaction` parameter is required.|
|» messageId|body|string|true|The message ID to react to.|
|» emoji|body|string|false|The emoji to react with. It's required if you aren't using the `reaction` parameter.|
|» reaction|body|string|false|The reaction to use. It's required if you aren't using the `emoji` parameter.|
|» shouldReact|body|boolean|false|Boolean to specify if the reaction should be added or removed.|

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
  "error": "The required \"messageId\" param is missing. [error-messageid-param-not-provided]",
  "errorType": "error-messageid-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="react-to-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="react-to-message-responseschema">Response Schema</h3>

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

## Update Message

<a id="opIdpost-api-v1-chat.update"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/chat.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "64f0f82c2c26843a68c1f7ba",
    "msgId": "vzGBzSwy6jJQDwtZe",
    "text": "Updated list of links! https://google.com https://hola.org/ https://www.usepayday.com/ https://www.getbumpa.com/ https://www.atlassian.com/software/jira http://localhost:3000/",
    "previewUrls": [
      "https://google.com",
      "http://localhost:3000/"
    ]
  }'
```

`POST /api/v1/chat.update`

Update a specific message.

### Changelog
| Version      | Description | 
| ---------------- | ------------|
| 6.12.0           | Fixed `customFields` not updating if `text` was unchanged |
| 6.4.0            | Add previewUrls param       |        
| 0.49.0           | Added       |

> Body parameter

```json
{
  "roomId": "64f0f82c2c26843a68c1f7ba",
  "msgId": "vzGBzSwy6jJQDwtZe",
  "text": "Updated list of links! https://google.com https://hola.org/ https://www.usepayday.com/ https://www.getbumpa.com/ https://www.atlassian.com/software/jira http://localhost:3000/",
  "previewUrls": [
    "https://google.com",
    "http://localhost:3000/"
  ]
}
```

<h3 id="update-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The room ID where the message is.|
|» msgId|body|string|true|The message ID to update.|
|» text|body|string|true|Updated text for the message.|
|» previewUrls|body|[string]|false|An array to define which URL previews should be retrieved from each message.|
|» customFields|body|object|false|You can add custom fields for messages. For example, set priorities for messages.<br><br>You must enable this option and define the validation in the workspace settings. See the <a href='https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/message' target='_blank'>Message</a> settings for further information.|

> Example responses

> 200 Response

```json
{
  "message": {
    "_id": "vzGBzSwy6jJQDwtZe",
    "rid": "64f0f82c2c26843a68c1f7ba",
    "msg": "Updated list of links! https://google.com https://hola.org/ https://www.usepayday.com/ https://www.getbumpa.com/ https://www.atlassian.com/software/jira http://localhost:3000/",
    "ts": "2023-09-20T17:27:59.945Z",
    "u": {
      "_id": "rbAXPnMktTFbNpwtJ",
      "username": "roxie",
      "name": "test test"
    },
    "_updatedAt": "2023-09-20T22:22:45.793Z",
    "urls": [
      {
        "url": "https://google.com",
        "meta": {}
      },
      {
        "url": "https://hola.org/",
        "meta": {},
        "ignoreParse": true
      },
      {
        "url": "https://www.atlassian.com/software/jira",
        "meta": {},
        "ignoreParse": true
      },
      {
        "url": "http://localhost:3000/",
        "meta": {}
      }
    ],
    "mentions": [],
    "channels": [],
    "md": [
      {
        "type": "PARAGRAPH",
        "value": [
          {
            "type": "PLAIN_TEXT",
            "value": "Updated list of links! "
          },
          {
            "type": "LINK",
            "value": {
              "src": {
                "type": "PLAIN_TEXT",
                "value": "https://google.com"
              },
              "label": [
                {
                  "type": "PLAIN_TEXT",
                  "value": "https://google.com"
                }
              ]
            }
          },
          {
            "type": "PLAIN_TEXT",
            "value": " "
          },
          {
            "type": "LINK",
            "value": {
              "src": {
                "type": "PLAIN_TEXT",
                "value": "https://hola.org/"
              },
              "label": [
                {
                  "type": "PLAIN_TEXT",
                  "value": "https://hola.org/"
                }
              ]
            }
          },
          {
            "type": "PLAIN_TEXT",
            "value": " "
          },
          {
            "type": "LINK",
            "value": {
              "src": {
                "type": "PLAIN_TEXT",
                "value": "https://www.atlassian.com/software/jira"
              },
              "label": [
                {
                  "type": "PLAIN_TEXT",
                  "value": "https://www.atlassian.com/software/jira"
                }
              ]
            }
          },
          {
            "type": "PLAIN_TEXT",
            "value": " "
          },
          {
            "type": "LINK",
            "value": {
              "src": {
                "type": "PLAIN_TEXT",
                "value": "http://localhost:3000/"
              },
              "label": [
                {
                  "type": "PLAIN_TEXT",
                  "value": "http://localhost:3000/"
                }
              ]
            }
          }
        ]
      }
    ],
    "editedAt": "2023-09-20T22:22:45.737Z",
    "editedBy": {
      "_id": "rbAXPnMktTFbNpwtJ",
      "username": "roxie"
    }
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The required \"messageId\" param is missing. [error-messageid-param-not-provided]",
  "errorType": "error-messageid-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="update-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="update-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» msg|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» urls|[object]|false|none|none|
|» » url|string|false|none|none|
|» » meta|object|false|none|none|
|» » ignoreParse|boolean|false|none|none|
|» mentions|[object]|false|none|none|
|» channels|[object]|false|none|none|
|» md|[object]|false|none|none|
|» » type|string|false|none|none|
|» » value|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» editedAt|string|false|none|none|
|» editedBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
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

## Report Message

<a id="opIdpost-api-v1-chat.reportMessage"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/chat.reportMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "messageId": "7aDSXtjMA3KPLxLjt",
    "description": "test"
  }'
```

`POST /api/v1/chat.reportMessage`

<a href='https://docs.rocket.chat/docs/message-actions#report-a-message-or-user' target='_blank'>Report</a> a specific message.

### Changelog
| Version      | Description | 
| ---------------- | ------------|
| 0.64.0           | Added       |

> Body parameter

```json
{
  "messageId": "7aDSXtjMA3KPLxLjt",
  "description": "test"
}
```

<h3 id="report-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|body|body|object|false|none|
|» messageId|body|string|true|The message ID to report.|
|» description|body|string|true|The description of report.|

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
  "error": "must have required property 'messageId' [error-invalid-params]",
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

<h3 id="report-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="report-message-responseschema">Response Schema</h3>

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

## Follow Message

<a id="opIdpost-api-v1-chat.followMessage"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/chat.followMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "mid": "7aDSXtjMA3KPLxLjt"
  }'
```

`POST /api/v1/chat.followMessage`

Follow a message to receive notifications.

### Changelog
| Version      | Description | 
| ---------------- | ------------|
| 8.9.0            | Changed the rate limit to 5 requests every 5 seconds per client IP address. |
| 1.0.0            | Added       |

> Body parameter

```json
{
  "mid": "7aDSXtjMA3KPLxLjt"
}
```

<h3 id="follow-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» mid|body|string|true|The `id` of the message to follow.|

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
  "error": "[The required \"mid\" body param is missing.]",
  "errorType": "The required \"mid\" body param is missing."
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="follow-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="follow-message-responseschema">Response Schema</h3>

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

## Unfollow Message

<a id="opIdpost-api-v1-chat.unfollowMessage"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/chat.unfollowMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "mid": "7aDSXtjMA3KPLxLjt"
  }'
```

`POST /api/v1/chat.unfollowMessage`

Unfollow a message.

### Changelog
| Version      | Description | 
| ---------------- | ------------|
| 8.9.0            | Changed the rate limit to 5 requests every 5 seconds per client IP address. |
| 1.0.0            | Added       |

> Body parameter

```json
{
  "mid": "7aDSXtjMA3KPLxLjt"
}
```

<h3 id="unfollow-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» mid|body|string|true|The message ID to unfollow.|

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
  "error": "[The required \"mid\" body param is missing.]",
  "errorType": "The required \"mid\" body param is missing."
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="unfollow-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="unfollow-message-responseschema">Response Schema</h3>

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

## Get Message

<a id="opIdget-api-v1-chat.getMessage"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/chat.getMessage?msgId=7aDSXtjMA3KPLxLjt' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/chat.getMessage`

Get a single chat message. You must have permission to access the room where the message resides.

### Changelog
| Version      | Description | 
| ------------ | ------------|
| 0.47.0       | Added       |

<h3 id="get-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|msgId|query|string|true|The message ID.|

> Example responses

> 200 Response

```json
{
  "message": {
    "_id": "CeXwh5eBbdrtvnqG6",
    "rid": "agh2Sucgb54RQ8dDo",
    "msg": "s",
    "ts": "2018-10-05T13:48:21.616Z",
    "u": {
      "_id": "KPkEYwKKBKZnEEPpt",
      "username": "marc.pow",
      "name": "Marc Pow"
    },
    "_updatedAt": "2018-10-05T13:48:49.535Z",
    "reactions": {
      ":frowning2:": {
        "usernames": [
          "marcos.defendi"
        ]
      }
    },
    "mentions": [],
    "channels": [],
    "starred": {
      "_id": "KPkEYwKKBKZnEEPpt"
    }
  },
  "count": 2,
  "offset": 0,
  "total": 2,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The \"msgId\" query parameter must be provided."
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» msg|string|false|none|none|
|» alias|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» reactions|object|false|none|none|
|» » :frowning2:|object|false|none|none|
|» » » usernames|[string]|false|none|none|
|» mentions|[object]|false|none|none|
|» channels|[object]|false|none|none|
|» starred|object|false|none|none|
|» » _id|string|false|none|none|
|» t|string|false|none|none|
|» groupable|boolean|false|none|none|
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

## List Threads

<a id="opIdget-chat.getThreadsList"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/chat.getThreadsList?rid=7aDSXtjMA3KPLxLjt' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/chat.getThreadsList`

Get a list of the <a href='https://docs.rocket.chat/docs/threads' target='_blank'>thread</a> conversations in a room.

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|9.0.0   | Removed the `fields` and `query` parameters.       |
|1.0.0             | Added       |

<h3 id="list-threads-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{ "value": -1, "_id": 1 }`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|rid|query|string|true|The room ID.|
|type|query|string|false|Filter the thread by type. It can either be: <br>- `unread`: returns the threads you follow which has unread messages. <br>- `following`: returns all the thread you follow.|
|text|query|string|false|Filter the thread list by search term.|

> Example responses

> 200 Response

```json
{
  "threads": [
    {
      "_id": "NZieMNQDEdMDmLLip",
      "rid": "6GFJ3tbmHiyHbahmC",
      "msg": "hola",
      "ts": "2023-10-05T20:30:51.052Z",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie",
        "name": "test test"
      },
      "_updatedAt": "2023-10-16T22:57:27.362Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "hola"
            }
          ]
        }
      ],
      "reactions": {
        ":smile:": {
          "usernames": [
            "test.test"
          ]
        }
      },
      "starred": [],
      "pinned": true,
      "pinnedAt": "2023-10-05T20:59:44.433Z",
      "pinnedBy": {
        "_id": "5fRTXMt7DMJbpPJfh",
        "username": "test.test"
      },
      "replies": [
        "rbAXPnMktTFbNpwtJ"
      ],
      "tcount": 2,
      "tlm": "2023-10-16T22:57:27.158Z"
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
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

<h3 id="list-threads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-threads-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|threads|[object]|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» msg|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» urls|[object]|false|none|none|
|» mentions|[object]|false|none|none|
|» channels|[object]|false|none|none|
|» md|[object]|false|none|none|
|» » type|string|false|none|none|
|» » value|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» reactions|object|false|none|none|
|» » :smile:|object|false|none|none|
|» » » usernames|[string]|false|none|none|
|» starred|[object]|false|none|none|
|» pinned|boolean|false|none|none|
|» pinnedAt|string|false|none|none|
|» pinnedBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» replies|[string]|false|none|none|
|» tcount|integer|false|none|none|
|» tlm|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Deleted Messages

<a id="opIdget-api-v1-chat.getDeletedMessages"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/chat.getDeletedMessages?since=2018-12-12T00%3A11%3A22.345Z&roomId=6GFJ3tbmHiyHbahmC' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/chat.getDeletedMessages`

Get deleted messages from a specific date.

### Changelog
| Version      | Description | 
| ---------------- | ------------|
| 0.73.0           | Added       |

<h3 id="get-deleted-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{ "value": -1, "_id": 1 }`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|since|query|string|true|A valid ISO date format from which you want to search the deleted messages.|
|roomId|query|string|true|The room ID.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "_id": "wKBW2YwrPahpag4zA"
    },
    {
      "_id": "SJXYBbageAo8bo7rX"
    },
    {
      "_id": "jEnjsxuoDJamGjbH2"
    }
  ],
  "count": 3,
  "offset": 0,
  "total": 3,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "[The required \"roomId\" query param is missing.]",
  "errorType": "The required \"roomId\" query param is missing."
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-deleted-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-deleted-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|none|
|» _id|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

## Get Discussions of A Room

<a id="opIdget-api-v1-chat.getDiscussions"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/chat.getDiscussions?roomId=6GFJ3tbmHiyHbahmC' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/chat.getDiscussions`

Gets the <a href='https://docs.rocket.chat/docs/discussions' target='_blank'>discussions</a> in a room. 

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
| 2.4.0            | Added       |

<h3 id="get-discussions-of-a-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|The room ID.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{ "value": -1, "_id": 1 }`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|text|query|string|false|Filter the thread list by search term.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "_id": "652dc4dda2f73c7460e18df8",
      "t": "discussion-created",
      "rid": "6GFJ3tbmHiyHbahmC",
      "ts": "2023-10-16T23:18:53.926Z",
      "msg": "test discuss",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie",
        "name": "test test"
      },
      "groupable": false,
      "drid": "652dc4dda2f73c7460e18df6",
      "_updatedAt": "2023-10-16T23:19:18.992Z",
      "dcount": 2,
      "dlm": "2023-10-16T23:19:18.748Z"
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The required \"roomId\" query param is missing. [error-invalid-params]",
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

> 403 Response

```json
{
  "success": false,
  "error": "error-not-allowed",
  "errorType": "error-forbidden"
}
```

<h3 id="get-discussions-of-a-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-discussions-of-a-room-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|none|
|» _id|string|false|none|none|
|» t|string|false|none|none|
|» rid|string|false|none|none|
|» ts|string|false|none|none|
|» msg|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» groupable|boolean|false|none|none|
|» drid|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» dcount|integer|false|none|none|
|» dlm|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Mentioned Messages

<a id="opIdget-api-v1-chat.getMentionedMessages"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/chat.getMentionedMessages?roomId=6GFJ3tbmHiyHbahmC' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/chat.getMentionedMessages`

Get the messages in which you are mentioned (users are mentioned with the `@` symbol). Visit the [Messages](https://docs.rocket.chat/docs/messages#mention-users) user guide to learn more.

### Changelog
| Version      | Description | 
| ------------ | ------------|
|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
| 2.2.0        | Added       |

<h3 id="get-mentioned-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|The room ID.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{ "value": -1, "_id": 1 }`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "_id": "p93m92bPRudzoJ7oW",
      "rid": "6GFJ3tbmHiyHbahmC",
      "msg": "@test.john hello",
      "ts": "2023-10-16T23:27:02.945Z",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie",
        "name": "test test"
      },
      "_updatedAt": "2023-10-16T23:27:03.071Z",
      "urls": [],
      "mentions": [
        {
          "_id": "5fRTXMt7DMJbpPJfh",
          "username": "test.john",
          "name": "Test John",
          "type": "user"
        }
      ],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "MENTION_USER",
              "value": {
                "type": "PLAIN_TEXT",
                "value": "test.john"
              }
            },
            {
              "type": "PLAIN_TEXT",
              "value": " hello"
            }
          ]
        }
      ]
    },
    {
      "_id": "4Q8nmha5doDHus5YR",
      "rid": "6GFJ3tbmHiyHbahmC",
      "msg": "@test.john",
      "ts": "2023-10-16T23:26:38.611Z",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie",
        "name": "test test"
      },
      "_updatedAt": "2023-10-16T23:26:38.728Z",
      "urls": [],
      "mentions": [
        {
          "_id": "5fRTXMt7DMJbpPJfh",
          "username": "test.john",
          "name": "Test John",
          "type": "user"
        }
      ],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "MENTION_USER",
              "value": {
                "type": "PLAIN_TEXT",
                "value": "test.john"
              }
            }
          ]
        }
      ]
    }
  ],
  "count": 2,
  "offset": 0,
  "total": 2,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The required \"roomId\" query param is missing. [error-invalid-params]",
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

> 403 Response

```json
{
  "success": false,
  "error": "error-not-allowed",
  "errorType": "error-forbidden"
}
```

<h3 id="get-mentioned-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-mentioned-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» msg|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» urls|[object]|false|none|none|
|» mentions|[object]|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» » type|string|false|none|none|
|» channels|[object]|false|none|none|
|» md|[object]|false|none|none|
|» » type|string|false|none|none|
|» » value|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Message Read Receipts

<a id="opIdget-api-v1-chat.getMessageReadReceipts"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/chat.getMessageReadReceipts?messageId=ByehQjC44FwMeiLbX' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/chat.getMessageReadReceipts`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Get the <a href='https://docs.rocket.chat/docs/message-actions#read-receipts' target='_blank'>read receipts</a> of messages.

### Changelog
| Version      | Description |
| ---------------- | ------------|
| 0.63.0          | Added       |

<h3 id="get-message-read-receipts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|messageId|query|string|true|The message id|

> Example responses

> 200 Response

```json
{
  "receipts": [
    {
      "_id": "HksCYdTpCiM9DZ7Sa",
      "roomId": "GENERAL",
      "userId": "nvw6PBrXTejp4sfQt",
      "messageId": "WyDsZzjk2wHogtWK2",
      "ts": "2018-02-26T20:34:03.907Z",
      "user": {
        "username": "rocket.cat",
        "name": "Rocket cat",
        "_id": "nvw6PBrXTejp4sfQt"
      }
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "error": "The required 'messageId' param is missing.",
  "success": false
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-message-read-receipts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-message-read-receipts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|receipts|[object]|false|none|none|
|» _id|string|false|none|none|
|» roomId|string|false|none|none|
|» userId|string|false|none|none|
|» messageId|string|false|none|none|
|» ts|string|false|none|none|
|» user|object|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» » _id|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Pinned Messages

<a id="opIdget-api-v1-chat.getPinnedMessages"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/chat.getPinnedMessages?roomId=6GFJ3tbmHiyHbahmC' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/chat.getPinnedMessages`

Get the <a href='https://docs.rocket.chat/docs/message-actions#pin-messages' target='_blank'>pinned messages</a> of a room. 

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
| 2.0.0           | Added       |

<h3 id="get-pinned-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|The room ID.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{ "value": -1, "_id": 1 }`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "_id": "ycHhPqyoN2BZHt3Ag",
      "rid": "6GFJ3tbmHiyHbahmC",
      "msg": "ekaara",
      "ts": "2023-02-25T16:08:30.000Z",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie",
        "name": "test test"
      },
      "_updatedAt": "2023-10-16T23:30:58.917Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "ekaara"
            }
          ]
        }
      ],
      "pinned": true,
      "pinnedAt": "2023-10-16T23:30:58.917Z",
      "pinnedBy": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie"
      }
    },
    {
      "_id": "Ay9jYg48gzjfpy7pk",
      "rid": "6GFJ3tbmHiyHbahmC",
      "msg": "wassup",
      "ts": "2023-10-05T19:10:10.055Z",
      "u": {
        "_id": "5fRTXMt7DMJbpPJfh",
        "username": "test.john",
        "name": "Testtest"
      },
      "_updatedAt": "2023-10-16T23:30:42.393Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "wassup"
            }
          ]
        }
      ],
      "pinned": true,
      "pinnedAt": "2023-10-16T23:30:42.393Z",
      "pinnedBy": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie"
      }
    },
    {
      "_id": "NZieMNQDEdMDmLLip",
      "rid": "6GFJ3tbmHiyHbahmC",
      "msg": "hola",
      "ts": "2023-10-05T20:30:51.052Z",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie",
        "name": "test test"
      },
      "_updatedAt": "2023-10-16T22:57:27.362Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "hola"
            }
          ]
        }
      ],
      "reactions": {
        ":smile:": {
          "usernames": [
            "test.test"
          ]
        }
      },
      "starred": [],
      "pinned": true,
      "pinnedAt": "2023-10-05T20:59:44.433Z",
      "pinnedBy": {
        "_id": "5fRTXMt7DMJbpPJfh",
        "username": "test.test"
      },
      "replies": [
        "rbAXPnMktTFbNpwtJ"
      ],
      "tcount": 2,
      "tlm": "2023-10-16T22:57:27.158Z"
    }
  ],
  "count": 3,
  "offset": 0,
  "total": 3,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The required \"roomId\" query param is missing. [error-roomId-param-not-provided]",
  "errorType": "error-roomId-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "Not allowed [error-not-allowed]",
  "errorType": "error-forbidden"
}
```

<h3 id="get-pinned-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-pinned-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» msg|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» urls|[object]|false|none|none|
|» mentions|[object]|false|none|none|
|» channels|[object]|false|none|none|
|» md|[object]|false|none|none|
|» » type|string|false|none|none|
|» » value|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» pinned|boolean|false|none|none|
|» pinnedAt|string|false|none|none|
|» pinnedBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» reactions|object|false|none|none|
|» » :smile:|object|false|none|none|
|» » » usernames|[string]|false|none|none|
|» starred|[object]|false|none|none|
|» replies|[string]|false|none|none|
|» tcount|integer|false|none|none|
|» tlm|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Multiple Messages From Different Rooms

<a id="opIdpost-api-v1-chat.getMessages"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/chat.getMessages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "messageIds": [
      "Xq8sLpW3nZr2TmKeA",
      "Bv5nTq7RkWz3YpLcD"
    ]
  }'
```

`POST /api/v1/chat.getMessages`

Fetches up to 100 messages by ID in a single request. The messages can belong to different rooms. IDs that do not match a visible message are skipped. You must have access to every room containing the requested messages.

This endpoint replaces the `getMessages` Realtime API method, which was removed in 9.0.0.


### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Added       |

> Body parameter

```json
{
  "messageIds": [
    "Xq8sLpW3nZr2TmKeA",
    "Bv5nTq7RkWz3YpLcD"
  ]
}
```

<h3 id="get-multiple-messages-from-different-rooms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|true|none|
|» messageIds|body|[string]|true|The IDs of the messages to fetch.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "_id": "Xq8sLpW3nZr2TmKeA",
      "rid": "6GFJ3tbmHiyHbahmC",
      "msg": "The release checklist is ready for review.",
      "ts": "2026-09-23T10:05:00.000Z",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "dana.reyes",
        "name": "Dana Reyes"
      },
      "_updatedAt": "2026-09-23T10:05:00.000Z",
      "mentions": [],
      "channels": []
    },
    {
      "_id": "Bv5nTq7RkWz3YpLcD",
      "rid": "GENERAL",
      "msg": "Standup moved to 10:30 today.",
      "ts": "2026-09-22T08:15:00.000Z",
      "u": {
        "_id": "kP3wQz8LmNvT5rXyB",
        "username": "sam.okafor",
        "name": "Sam Okafor"
      },
      "_updatedAt": "2026-09-22T08:15:00.000Z",
      "mentions": [],
      "channels": []
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'messageIds' [error-invalid-params]",
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

> 403 Response

```json
{
  "success": false,
  "error": "forbidden"
}
```

> 404 Response

```json
{
  "success": false,
  "error": "Resource not found"
}
```

<h3 id="get-multiple-messages-from-different-rooms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden. At least one of the messages belongs to a room you cannot access.|Inline|
|404|Not Found|Not Found. None of the IDs match a visible message.|Inline|

<h3 id="get-multiple-messages-from-different-rooms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» msg|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» mentions|[object]|false|none|none|
|» channels|[object]|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Starred Messages

<a id="opIdget-api-v1-chat.getStarredMessages"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/chat.getStarredMessages?roomId=6GFJ3tbmHiyHbahmC' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f'
```

`GET /api/v1/chat.getStarredMessages`

Get the <a href='https://docs.rocket.chat/docs/message-actions#star-messages' target='_blank'>starred messages</a> of the authenticated user in a room. 

### Changelog
| Version      | Description | 
| ------------ | ------------|
|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
| 2.2.0        | Added       |

<h3 id="get-starred-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|roomId|query|string|true|The room ID.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{ "value": -1, "_id": 1 }`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "_id": "652dc4dda2f73c7460e18df8",
      "t": "discussion-created",
      "rid": "6GFJ3tbmHiyHbahmC",
      "ts": "2023-10-16T23:18:53.926Z",
      "msg": "test discuss",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie",
        "name": "test test"
      },
      "groupable": false,
      "drid": "652dc4dda2f73c7460e18df6",
      "_updatedAt": "2023-10-17T12:51:07.826Z",
      "dcount": 3,
      "dlm": "2023-10-16T23:25:58.375Z",
      "starred": [
        {
          "_id": "5fRTXMt7DMJbpPJfh"
        }
      ]
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The required \"roomId\" query param is missing. [error-invalid-params]",
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

> 403 Response

```json
{
  "success": false,
  "error": "error-not-allowed",
  "errorType": "error-forbidden"
}
```

<h3 id="get-starred-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-starred-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|none|
|» _id|string|false|none|none|
|» t|string|false|none|none|
|» rid|string|false|none|none|
|» ts|string|false|none|none|
|» msg|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» groupable|boolean|false|none|none|
|» drid|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» dcount|integer|false|none|none|
|» dlm|string|false|none|none|
|» starred|[object]|false|none|none|
|» » _id|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Thread Messages

<a id="opIdget-api-v1-chat.getThreadMessages"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/chat.getThreadMessages?tmid=7aDSXtjMA3KPLxLjt' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/chat.getThreadMessages`

Get <a href='https://docs.rocket.chat/docs/threads' target='_blank'>thread</a> messages.

Use `aroundId` to load the replies surrounding a specific message. When you provide `aroundId`, the server calculates the page offset around that message instead of using the requested `offset`, and returns the calculated value in the response. Hidden message-history records are excluded from the returned messages and pagination totals.

### Changelog
| Version      | Description | 
| ------------ | ------------|
|9.0.0   | Removed the `fields` and `query` parameters.       |
| 8.8.0        | Added the `aroundId` parameter and excluded hidden message-history records from results and pagination totals |
| 1.2.0        | Remove `tlm` field which is not supported |
| 1.1.0        | Update example results - original message in thread is not returned |
| 1.0.0        | Added       |

<h3 id="get-thread-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{ "value": -1, "_id": 1 }`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|tmid|query|string|true|The thread message ID.|
|aroundId|query|string|false|The ID of the thread's main message or one of its replies. The endpoint returns a page of replies surrounding this message. When you provide this parameter, the server calculates the page offset and ignores the requested `offset` value. The message must belong to the thread specified by `tmid`.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "_id": "gcGai9bRREqokjyPc",
      "rid": "GENERAL",
      "msg": "Test",
      "ts": "2019-04-08T13:15:52.017Z",
      "u": {
        "_id": "p4a8YxvLQEHmiBKTS",
        "username": "marc.dev",
        "name": "Marc Dev"
      },
      "_updatedAt": "2019-04-08T14:40:27.789Z",
      "mentions": [],
      "channels": [],
      "replies": [
        "p4a8YxvLQEHmiBKTS"
      ],
      "tcount": 5,
      "tlm": "2019-04-08T14:40:27.724Z"
    },
    {
      "_id": "GfhiiJjcjKFyYMuMY",
      "rid": "GENERAL",
      "tmid": "gcGai9bRREqokjyPc",
      "msg": "This is a test!",
      "ts": "2019-04-08T13:20:22.238Z",
      "u": {
        "_id": "p4a8YxvLQEHmiBKTS",
        "username": "marc.dev",
        "name": "Marc Dev"
      },
      "_updatedAt": "2019-04-08T13:20:22.265Z",
      "mentions": [],
      "channels": []
    }
  ],
  "count": 2,
  "offset": 0,
  "total": 2,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The required \"tmid\" query param is missing. [error-invalid-params]",
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

<h3 id="get-thread-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-thread-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» msg|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» mentions|[object]|false|none|none|
|» channels|[object]|false|none|none|
|» replies|[string]|false|none|none|
|» tcount|integer|false|none|none|
|» tlm|string|false|none|none|
|» tmid|string|false|none|none|
|count|integer|false|none|The number of visible replies returned in this response.|
|offset|integer|false|none|The starting offset of the returned page. When you provide `aroundId`, this is the offset calculated by the server.|
|total|integer|false|none|The total number of visible replies in the thread. Hidden message-history records are excluded.|
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

## Mark Thread as Read

<a id="opIdpost-api-v1-chat.readThread"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/chat.readThread \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "tmid": "7aDSXtjMA3KPLxLjt"
  }'
```

`POST /api/v1/chat.readThread`

Marks a single thread as read for the authenticated user and removes it from the unread thread list in the user's subscription.

Use this endpoint when you need to mark one thread as read. The `subscriptions.read` endpoint operates on an entire room and cannot identify a single thread.

This endpoint replaces the `readThreads` realtime method, which was removed in 9.0.0.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
|8.8.0            | Added       |

> Body parameter

```json
{
  "tmid": "7aDSXtjMA3KPLxLjt"
}
```

<h3 id="mark-thread-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|true|none|
|» tmid|body|string|true|The ID of the thread's main message.|

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
  "error": "Invalid Message [error-invalid-message]",
  "errorType": "error-invalid-message"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "Threads Disabled [error-not-allowed]",
  "errorType": "error-forbidden"
}
```

<h3 id="mark-thread-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|The request is invalid, or the message or room does not exist.|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="mark-thread-as-read-responseschema">Response Schema</h3>

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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Ignore User

<a id="opIdget-api-v1-chat.ignoreUser"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/chat.ignoreUser?rid=string&userId=string&ignore=true' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/chat.ignoreUser`

Ignore or unignore a user in chat.


### Changelog
| Version      | Description | 
| ------------ | ------------|
| 0.64.0       | Added       |

<h3 id="ignore-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|rid|query|string|true|The room ID.|
|userId|query|string|true|The user ID.|
|ignore|query|boolean|true|If the user is to be ignored or not, default is true.|

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
  "error": "The required \"rid\" param is missing. [error-room-id-param-not-provided]",
  "errorType": "error-room-id-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="ignore-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="ignore-user-responseschema">Response Schema</h3>

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

## Pin Message

<a id="opIdpost-api-v1-chat.pinMessage"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/chat.pinMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "messageId": "7aDSXtjMA3KPLxLjt"
  }'
```

`POST /api/v1/chat.pinMessage`

<a href='https://docs.rocket.chat/docs/message-actions#pin-messages' target='_blank'>Pin</a> a chat message to the channel.

### Changelog
| Version      | Description | 
| ------------ | ------------|
| 0.59.0       | Added       |

> Body parameter

```json
{
  "messageId": "7aDSXtjMA3KPLxLjt"
}
```

<h3 id="pin-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» messageId|body|string|true|The message ID that you want to pin.|

> Example responses

> 200 Response

```json
{
  "message": {
    "_id": "651f23c0a2f73c7460e18d1a",
    "t": "message_pinned",
    "rid": "6GFJ3tbmHiyHbahmC",
    "ts": "2023-10-05T20:59:44.503Z",
    "msg": "",
    "u": {
      "_id": "5fRTXMt7DMJbpPJfh",
      "username": "test.test",
      "name": "Testtest"
    },
    "groupable": false,
    "attachments": [
      {
        "text": "hola",
        "author_name": "roxie",
        "author_icon": "/avatar/roxie",
        "ts": "2023-10-05T20:30:51.052Z",
        "attachments": []
      }
    ],
    "_updatedAt": "2023-10-05T20:59:44.521Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The required \"messageId\" param is missing. [error-messageid-param-not-provided]",
  "errorType": "error-messageid-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="pin-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="pin-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|
|» _id|string|false|none|none|
|» t|string|false|none|none|
|» rid|string|false|none|none|
|» ts|string|false|none|none|
|» msg|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» groupable|boolean|false|none|none|
|» attachments|[object]|false|none|none|
|» » text|string|false|none|none|
|» » author_name|string|false|none|none|
|» » author_icon|string|false|none|none|
|» » ts|string|false|none|none|
|» » attachments|[object]|false|none|none|
|» _updatedAt|string|false|none|none|
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

## Unpin a message

<a id="opIdpost-api-v1-chat.unPinMessage"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/chat.unPinMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "messageId": "7aDSXtjMA3KPLxLjt"
  }'
```

`POST /api/v1/chat.unPinMessage`

Remove a pinned message from the channel.

### Changelog
| Version      | Description | 
| -------------| ------------|
| 0.59.0       | Added       |

> Body parameter

```json
{
  "messageId": "7aDSXtjMA3KPLxLjt"
}
```

<h3 id="unpin-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» messageId|body|string|true|The message ID you want to to unpin.|

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
  "error": "The required \"messageId\" param is missing. [error-messageid-param-not-provided]",
  "errorType": "error-messageid-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="unpin-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="unpin-a-message-responseschema">Response Schema</h3>

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

## Post Message

<a id="opIdpost-api-v1-chat.postMessage"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/chat.postMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "channel": "#general",
    "emoji": ":smirk:",
    "text": "Sample message",
    "attachments": [
      {
        "audio_url": "http://www.w3schools.com/tags/horse.mp3",
        "author_icon": "https://avatars.githubusercontent.com/u/850391?v=3",
        "author_link": "https://rocket.chat/",
        "author_name": "Bradley Hilton",
        "collapsed": false,
        "color": "#ff0000",
        "fields": [
          {
            "short": true,
            "title": "Test",
            "value": "Testing out something or other"
          },
          {
            "short": true,
            "title": "Another Test",
            "value": "[Link](https://google.com/) something and this and that."
          }
        ],
        "image_url": "http://res.guggy.com/logo_128.png",
        "message_link": "https://google.com",
        "text": "Yay for gruggy!",
        "thumb_url": "http://res.guggy.com/logo_128.png",
        "title": "Attachment Example",
        "title_link": "https://youtube.com",
        "title_link_download": true,
        "ts": "2016-12-09T16:53:06.761Z",
        "video_url": "http://www.w3schools.com/tags/movie.mp4"
      }
    ]
  }'
```

`POST /api/v1/chat.postMessage`

Send messages to channels or users on your workspace.

**Note**: You can only send the `alias` and `avatar` properties if your user has the `message-impersonate` (**Impersonate other users**) permission. By default, only the `bot` and `app` roles have this permission.

The server removes markdown trees (`md` and `descriptionMd`) from `attachments` before it saves the message. It does not generate a new `md` for the attachment.

The request body accepts only the top-level properties listed here. Any other property, such as `blocks` or a message field that only the server sets (for example `pinned`, `u`, or `ts`), fails. To send blocks, use `chat.sendMessage`.

### Change Log
| Version | Description |
| ------- |---------------------------------------------------------------------------- |
| 9.0.0   | Stripped `md` and `descriptionMd` from `attachments` before saving the message. |
| 6.8.0   | Added custom fields to messages.                                             |
| 6.2.0   | Rejected request body properties that are not listed.                        |
| 2.4.0   | Added validation on user's identity                                          |
| 0.49.0  | The `channel` can now be a room's id.                                        |
| 0.48.0  | Information about the sent message is now returned.                          |
| 0.17.0  | Messages aren't always processed as from BOT and urls are parsed by default. |
| 0.14.0  | Internally using `processWebhookMessage` which enabled more features.        |
| 0.13.0  | Added                                                                        |

> Body parameter

```json
{
  "channel": "#general",
  "emoji": ":smirk:",
  "text": "Sample message",
  "attachments": [
    {
      "audio_url": "http://www.w3schools.com/tags/horse.mp3",
      "author_icon": "https://avatars.githubusercontent.com/u/850391?v=3",
      "author_link": "https://rocket.chat/",
      "author_name": "Bradley Hilton",
      "collapsed": false,
      "color": "#ff0000",
      "fields": [
        {
          "short": true,
          "title": "Test",
          "value": "Testing out something or other"
        },
        {
          "short": true,
          "title": "Another Test",
          "value": "[Link](https://google.com/) something and this and that."
        }
      ],
      "image_url": "http://res.guggy.com/logo_128.png",
      "message_link": "https://google.com",
      "text": "Yay for gruggy!",
      "thumb_url": "http://res.guggy.com/logo_128.png",
      "title": "Attachment Example",
      "title_link": "https://youtube.com",
      "title_link_download": true,
      "ts": "2016-12-09T16:53:06.761Z",
      "video_url": "http://www.w3schools.com/tags/movie.mp4"
    }
  ]
}
```

<h3 id="post-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» alias|body|string|false|The name to display on the message instead of your name. Your username is still displayed.|
|» avatar|body|string|false|The URL of an image to display as the message avatar.|
|» emoji|body|string|false|An emoji to display as the message avatar.|
|» roomId|body|string \| [string]|true|The room ID or an array of room IDs where the message is to be sent. You can also use a room name, with or without the `#` prefix, or a username with the `@` prefix. Cannot be combined with `channel`. With an array, the message is posted to each room, and the response describes only the first one.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» text|body|string|false|The message text to send.|
|» parseUrls|body|boolean|false|Set to `false` to stop the server from extracting URLs from `text`. The message is saved with no `urls` and no link preview. When the message has `attachments`, the default is `false`, and no link preview is generated even with `true`.|
|» attachments|body|[object]|false|none|
|» » audio_url|body|string|false|Audio file to attach. See the <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio'>HTML audio element</a> for information.|
|» » author_icon|body|string|false|Displays a tiny icon to the left of the author's name.|
|» » author_link|body|string|false|Providing this makes the author's name clickable and points to the provided link.|
|» » author_name|body|string|false|Name of the author.|
|» » collapsed|body|boolean|false|Causes the image, audio, and video sections to be displayed as collapsed when set to true.|
|» » color|body|string|false|See <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/background-color'>background-css</a> for the supported colors.|
|» » fields|body|[object]|false|none|
|» » » short|body|boolean|false|Whether this field should be a short field.|
|» » » title|body|string|true|The title of this field.|
|» » » value|body|string|true|The value of this field, displayed underneath the title value.|
|» » image_url|body|string|false|The URL of the image to display in the attachment.|
|» » message_link|body|string|false|Only applicable if the `ts` field is provided, as it makes the time clickable to this link.|
|» » text|body|string|false|The text to display in the attachment.|
|» » thumb_url|body|string|false|The URL of a thumbnail image to display to the left of the attachment text.|
|» » title|body|string|false|Title to display for this attachment, displays under the author.|
|» » title_link|body|string|false|Providing this makes the title clickable, pointing to this link.|
|» » title_link_download|body|boolean|false|When this is true, a download icon appears and clicking this saves the link to file.|
|» » ts|body|string|false|Displays the time next to the text portion.|
|» » video_url|body|string|false|Video file to attach. See the <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video'>HTML video element</a> for information.|
|» tmid|body|string|false|The message ID of the original message to reply to or to create a thread on. Only available with `roomId`.|
|» customFields|body|object|false|Custom fields for the message, such as a priority. Custom fields must be enabled, and the value must match the validation defined in the <a href='https://docs.rocket.chat/docs/message' target='_blank'>Message</a> settings.|
|» *oneOf*|body|object|false|none|
|» alias|body|string|false|The name to display on the message instead of your name. Your username is still displayed.|
|» avatar|body|string|false|The URL of an image to display as the message avatar.|
|» channel|body|string \| [string]|true|The room ID or an array of room IDs where the message is to be sent. You can also use a room name, with or without the `#` prefix, or a username with the `@` prefix. Cannot be combined with `roomId`. With an array, the message is posted to each room, and the response describes only the first one.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» emoji|body|string|false|An emoji to display as the message avatar.|
|» text|body|string|false|The message text to send.|
|» parseUrls|body|boolean|false|Set to `false` to stop the server from extracting URLs from `text`. The message is saved with no `urls` and no link preview. When the message has `attachments`, the default is `false`, and no link preview is generated even with `true`.|
|» attachments|body|[object]|false|none|
|» » audio_url|body|string|false|Audio file to attach. See the <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio'>HTML audio element</a> for information.|
|» » author_icon|body|string|false|Displays a tiny icon to the left of the author's name.|
|» » author_link|body|string|false|Providing this makes the author's name clickable and points to the provided link.|
|» » author_name|body|string|false|Name of the author.|
|» » collapsed|body|boolean|false|Causes the image, audio, and video sections to be displayed as collapsed when set to true.|
|» » color|body|string|false|See <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/background-color'>background-css</a> for the supported colors.|
|» » fields|body|[object]|false|none|
|» » » short|body|boolean|false|Whether this field should be a short field.|
|» » » title|body|string|true|The title of this field.|
|» » » value|body|string|true|The value of this field, displayed underneath the title value.|
|» » image_url|body|string|false|The URL of the image to display in the attachment.|
|» » message_link|body|string|false|Only applicable if the `ts` field is provided, as it makes the time clickable to this link.|
|» » text|body|string|false|The text to display in the attachment.|
|» » thumb_url|body|string|false|The URL of a thumbnail image to display to the left of the attachment text.|
|» » title|body|string|false|Title to display for this attachment, displays under the author.|
|» » title_link|body|string|false|Providing this makes the title clickable, pointing to this link.|
|» » title_link_download|body|boolean|false|When this is true, a download icon appears and clicking this saves the link to file.|
|» » ts|body|string|false|Displays the time next to the text portion.|
|» » video_url|body|string|false|Video file to attach. See the <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video'>HTML video element</a> for information.|
|» customFields|body|object|false|Custom fields for the message, such as a priority. Custom fields must be enabled, and the value must match the validation defined in the <a href='https://docs.rocket.chat/docs/message' target='_blank'>Message</a> settings.|

> Example responses

> 200 Response

```json
{
  "ts": 1793706003432,
  "channel": "#general",
  "message": {
    "alias": "",
    "msg": "This is a test!",
    "attachments": [],
    "parseUrls": true,
    "groupable": false,
    "ts": "2026-11-03T11:40:03.388Z",
    "u": {
      "_id": "y65tAmHs93aDChMWu",
      "username": "graywolf336",
      "name": "Gray Wolf"
    },
    "rid": "GENERAL",
    "_id": "jC9chsFddTvsbFQG7",
    "_updatedAt": "2026-11-03T11:40:03.392Z",
    "md": [
      {
        "type": "PARAGRAPH",
        "value": [
          {
            "type": "PLAIN_TEXT",
            "value": "This is a test!"
          }
        ]
      }
    ],
    "mentions": [],
    "channels": [],
    "urls": []
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "[invalid-channel]",
  "errorType": "invalid-channel"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="post-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="post-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ts|integer|false|none|none|
|channel|string|false|none|none|
|message|object|false|none|none|
|» alias|string|false|none|none|
|» msg|string|false|none|none|
|» attachments|[object]|false|none|none|
|» parseUrls|boolean|false|none|none|
|» groupable|boolean|false|none|none|
|» emoji|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» rid|string|false|none|none|
|» _id|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» md|[object]|false|none|none|
|» mentions|[object]|false|none|none|
|» channels|[object]|false|none|none|
|» urls|[object]|false|none|none|
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

## Search Message

<a id="opIdget-api-v1-chat.search"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/chat.search?roomId=string&searchText=string' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/chat.search`

Search for messages by room ID and text message. 

### Changelog
| Version      | Description | 
| -------------| ------------|
| 0.67.0       | Changed limit query parameter to count|
| 0.60.0       | Added       |


<h3 id="search-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|roomId|query|string|true|The room ID.|
|searchText|query|string|true|The text to search for in messages.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "_id": "px9KLW9G2SfD5DKFt",
      "rid": "GENERAL",
      "msg": "this is a test",
      "ts": "2018-03-27T14:44:00.549Z",
      "u": {
        "_id": "RtMDEYc28fQ5aHpf4",
        "username": "marc.dev",
        "name": "Marc Dev"
      },
      "mentions": [],
      "channels": [],
      "_updatedAt": "2018-03-27T14:44:00.550Z",
      "score": 0.5833333333333334
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The required \"roomId\" query param is missing. [error-roomId-param-not-provided]",
  "errorType": "error-roomId-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="search-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="search-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» msg|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» mentions|[object]|false|none|none|
|» channels|[object]|false|none|none|
|» _updatedAt|string|false|none|none|
|» score|number|false|none|none|
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

## Send Message

<a id="opIdpost-api-v1-chat.sendMessage"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/chat.sendMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "message": {
      "rid": "Xnb2kLD2Pnhdwe3RH",
      "msg": "Sample message",
      "emoji": ":smirk:",
      "attachments": [
        {
          "color": "#ff0000",
          "text": "Yay for gruggy!",
          "ts": "2016-12-09T16:53:06.761Z",
          "thumb_url": "http://res.guggy.com/logo_128.png",
          "message_link": "https://google.com",
          "collapsed": false,
          "author_name": "Bradley Hilton",
          "author_link": "https://rocket.chat/",
          "author_icon": "https://avatars.githubusercontent.com/u/850391?v=3",
          "title": "Attachment Example",
          "title_link": "https://youtube.com",
          "title_link_download": true,
          "image_url": "http://res.guggy.com/logo_128.png",
          "audio_url": "http://www.w3schools.com/tags/horse.mp3",
          "video_url": "http://www.w3schools.com/tags/movie.mp4",
          "fields": [
            {
              "short": true,
              "title": "Test",
              "value": "Testing out something or other"
            },
            {
              "short": true,
              "title": "Another Test",
              "value": "[Link](https://google.com/) something and this and that."
            }
          ]
        }
      ]
    }
  }'
```

`POST /api/v1/chat.sendMessage`

Send a message to one room. Unlike `chat.postMessage`, this endpoint accepts `_id`, `blocks`, and `tshow`, but it can't send to more than one room.

**Note**: You can only send the `alias` and `avatar` properties if your user has the `message-impersonate` (**Impersonate other users**) permission. By default, only the `bot` and `app` roles have this permission.

The server removes markdown trees (`md` and `descriptionMd`) from `attachments` before it saves the message. It does not generate a new `md` for the attachment.

### Change Log
| Version | Description                         |
| ------- | ----------------------------------- |
| 9.0.0   | Rejected `message` fields that are not part of the request body, such as fields that only the server sets, and `blocks` with an invalid structure. Stripped `md` and `descriptionMd` from `attachments` before saving the message. |
| 6.8.0   | Added custom fields to messages.    |
| 6.4.0   | Added the `previewUrls` parameter.  |
| 2.4.0   | Added validation on user's identity |
| 0.60.0  | Added                               |

> Body parameter

```json
{
  "message": {
    "rid": "Xnb2kLD2Pnhdwe3RH",
    "msg": "Sample message",
    "emoji": ":smirk:",
    "attachments": [
      {
        "color": "#ff0000",
        "text": "Yay for gruggy!",
        "ts": "2016-12-09T16:53:06.761Z",
        "thumb_url": "http://res.guggy.com/logo_128.png",
        "message_link": "https://google.com",
        "collapsed": false,
        "author_name": "Bradley Hilton",
        "author_link": "https://rocket.chat/",
        "author_icon": "https://avatars.githubusercontent.com/u/850391?v=3",
        "title": "Attachment Example",
        "title_link": "https://youtube.com",
        "title_link_download": true,
        "image_url": "http://res.guggy.com/logo_128.png",
        "audio_url": "http://www.w3schools.com/tags/horse.mp3",
        "video_url": "http://www.w3schools.com/tags/movie.mp4",
        "fields": [
          {
            "short": true,
            "title": "Test",
            "value": "Testing out something or other"
          },
          {
            "short": true,
            "title": "Another Test",
            "value": "[Link](https://google.com/) something and this and that."
          }
        ]
      }
    ]
  }
}
```

<h3 id="send-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|**Some important things to note about the `previewUrls` parameter include:**<br>* If you don't send `previewUrls`, all external URLs in the message are previewed.<br>* If you list URLs, only those URLs are previewed.<br>* If `previewUrls` is empty, no URL is previewed.<br>* If the message contains attachments or quotes, no URL is previewed.<br>* Internal URLs are never previewed, even if you list them.<br>* A message can have at most five external URL previews. If it contains more than five external URLs, no URL is previewed.<br>> URLs that include the same text as the <a href='https://docs.rocket.chat/docs/general' target='_blank'>**Site URL**</a> are referred to as Internal URLs.|
|» message|body|object|true|Accepts only the properties listed here. Any other property, such as an unknown property or one that only the server sets (for example `u`, `ts`, `md`, `urls`, or `pinned`), fails.|
|» » t|body|string|false|The message type, for example `e2e`. A system message type, such as `uj`, fails.|
|» » rid|body|string|true|The room ID where the message is to be sent.|
|» » msg|body|string|false|The message text to send.|
|» » alias|body|string|false|The name to display on the message instead of your name. Your username is still displayed. Requires the `message-impersonate` permission.|
|» » emoji|body|string|false|An emoji to display as the message avatar.|
|» » avatar|body|string|false|The URL of an image to display as the message avatar. Requires the `message-impersonate` permission.|
|» » attachments|body|[object]|false|An array of attachment objects with the following properties.|
|» » » audio_url|body|string|false|Audio file to attach. See <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio' target='_blank'>HTML audio element</a> for information.|
|» » » author_icon|body|string|false|Displays a tiny icon to the left of the author's name.|
|» » » author_link|body|string|false|Providing this makes the author name clickable and points to this link.|
|» » » author_name|body|string|false|Name of the author.|
|» » » collapsed|body|boolean|false|Causes the image, audio, and video sections to be displayed as collapsed when set to true.|
|» » » color|body|string|false|See <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/background-color' target='_blank'>background-css</a> for the supported format.|
|» » » fields|body|[object]|false|none|
|» » » » short|body|boolean|false|Whether this field should be a short field.|
|» » » » title|body|string|true|The title of this field.|
|» » » » value|body|string|true|The value of this field, displayed underneath the title value.|
|» » » image_url|body|string|false|The URL of the image to display in the attachment.|
|» » » message_link|body|string|false|Only applicable if the `ts` parameter is provided, as it makes the time clickable to this link.|
|» » » text|body|string|false|The text to display in the attachment.|
|» » » thumb_url|body|string|false|The URL of a thumbnail image to display to the left of the attachment text.|
|» » » title|body|string|false|Title to display for this attachment, displays under the author.|
|» » » title_link|body|string|false|Providing this makes the title clickable, pointing to this link.|
|» » » title_link_download|body|boolean|false|When this is true, a download icon appears and clicking this saves the link to file.|
|» » » ts|body|string|false|Displays the time next to the text portion.|
|» » » video_url|body|string|false|Video file to attach. See the <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video' target='_blank'>HTML video element</a> for information.|
|» » tmid|body|string|false|The ID of the message to reply to in a thread.|
|» » tshow|body|boolean|false|Set to `true` to also show the thread reply in the room. Requires `tmid`.|
|» » blocks|body|[object]|false|An array of UI Kit blocks to display in the message. See the **Message with Blocks** example and the <a href='https://developer.rocket.chat/docs/blocks' target='_blank'>Apps-Engine UI Blocks documentation</a>.<br><br>The request fails if:<br>* `blocks` is not an array of objects.<br>* The `elements` of an `actions` or `context` block is missing or is not an array of objects.<br>* The `fields` of a `section` block is not an array of objects.<br>* An `input` block has no `element` object.<br>* A `linear_scale` element has a non-numeric `minValue` or `maxValue`, or more than 100 points.<br>* An `appId` contains characters other than letters, digits, `-`, and `_`.<br>* A block is nested more than 10 levels deep.<br><br>Blocks with an unknown `type` or an unexpected `text` shape are saved as sent.|
|» » » type|body|string|false|none|
|» » » text|body|object|false|none|
|» » » » type|body|string|false|none|
|» » » » text|body|string|false|none|
|» » » fields|body|[object]|false|none|
|» » » » type|body|string|false|none|
|» » » » text|body|string|false|none|
|» » customFields|body|object|false|Custom fields for the message, such as a priority. Custom fields must be enabled, and the value must match the validation defined in the <a href='https://docs.rocket.chat/docs/message' target='_blank'>Message</a> settings.|
|» » _id|body|string|false|The ID to give the new message. It must not match the ID of an existing message. If you don't send it, the server generates one.|
|» » location|body|object|false|A GeoJSON geometry to attach to the message, such as a `Point` with `coordinates` as `[longitude, latitude]`. Invalid GeoJSON, or a longitude or latitude out of range, fails. The server doesn't check the coordinate order, so swapped coordinates that are still in range are saved without an error. The web client shows a `Point` as a **Shared location** link to a map.|
|» » groupable|body|boolean|false|Set to `false` to show the message with its own header instead of grouping it with the sender's previous message.|
|» » parseUrls|body|boolean|false|Set to `false` to stop the server from extracting URLs from the message text. The message is saved with no `urls` entries and no link preview. Links in the message markdown (`md`) are still parsed.|
|» » text|body|string|false|A separate text field that the server saves as sent. It is not an alias of `msg`: the server does not generate `md` from it, and the web client does not display it. Use `msg` for the message text.|
|» » e2e|body|string|false|The encryption state of an end-to-end encrypted message: `pending` or `done`.|
|» » e2eMentions|body|object|false|Mentions in an end-to-end encrypted message, as `e2eUserMentions` and `e2eChannelMentions` arrays.|
|» » content|body|object|false|The encrypted content of an end-to-end encrypted message. Set `algorithm` to `rc.v1.aes-sha2` or `rc.v2.aes-sha2`, and `ciphertext` to the encrypted text. With `rc.v2.aes-sha2`, also send `iv` and `kid`. The server saves the object as sent and does not validate its properties.|
|» previewUrls|body|[string]|false|The URLs in `msg` to preview.|

> Example responses

> 200 Response

```json
{
  "message": {
    "rid": "GENERAL",
    "msg": "Hello from the API",
    "ts": "2026-11-03T13:57:54.003Z",
    "u": {
      "_id": "i5FdM4ssFgAcQP62k",
      "username": "rocket.cat",
      "name": "Rocket.Cat"
    },
    "_id": "dy8Qx3XXH9wKR9AMP",
    "_updatedAt": "2026-11-03T13:57:54.056Z",
    "md": [
      {
        "type": "PARAGRAPH",
        "value": [
          {
            "type": "PLAIN_TEXT",
            "value": "Hello from the API"
          }
        ]
      }
    ],
    "mentions": [],
    "channels": [],
    "urls": []
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'message'",
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

<h3 id="send-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="send-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|
|» rid|string|false|none|none|
|» msg|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» md|[object]|false|none|none|
|» mentions|[object]|false|none|none|
|» channels|[object]|false|none|none|
|» urls|[object]|false|none|none|
|» _updatedAt|string|false|none|none|
|» _id|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» method|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Star Message

<a id="opIdpost-api-v1-chat.starMessage"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/chat.starMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "messageId": "7aDSXtjMA3KPLxLjt"
  }'
```

`POST /api/v1/chat.starMessage`

<a href='https://docs.rocket.chat/docs/message-actions#star-messages' target='_blank'>Star</a> a message.

### Changelog
| Version      | Description | 
| ------------ | ------------|
| 0.59.0       | Added       |

> Body parameter

```json
{
  "messageId": "7aDSXtjMA3KPLxLjt"
}
```

<h3 id="star-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» messageId|body|string|true|The message ID to star.|

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
  "error": "The required \"messageId\" param is required. [error-messageid-param-not-provided]",
  "errorType": "error-messageid-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="star-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="star-message-responseschema">Response Schema</h3>

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

## Unstar Message

<a id="opIdpost-api-v1-chat.unStarMessage"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/chat.unStarMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "messageId": "7aDSXtjMA3KPLxLjt"
  }'
```

`POST /api/v1/chat.unStarMessage`

Unstar a message.

### Changelog
| Version      | Description | 
| ---------------- | ------------|
| 0.59.0           | Added       |

> Body parameter

```json
{
  "messageId": "7aDSXtjMA3KPLxLjt"
}
```

<h3 id="unstar-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» messageId|body|string|true|The message ID to unstar.|

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
  "error": "The required \"messageId\" param is required. [error-messageid-param-not-provided]",
  "errorType": "error-messageid-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="unstar-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="unstar-message-responseschema">Response Schema</h3>

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

## Sync Thread List

<a id="opIdget-api-v1-chat.syncThreadsList"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/chat.syncThreadsList?rid=J8Sqi5zPw62WgE4Md&updatedSince=2026-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/chat.syncThreadsList`

List the threads of a room along with any data updates from a specified date.

### Changelog
| Version      | Description | 
| ------------ | ------------|
|9.0.0   | Removed the `fields` and `query` parameters.       |
| 1.0.0        | Added       |

<h3 id="sync-thread-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{ "value": -1, "_id": 1 }`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|rid|query|string|true|The room ID.|
|updatedSince|query|string|true|Date as an ISO string. When you provide the `updatedSince` query parameter, then the `update` and `remove` parameters in the response will contain only those updated and removed since this date and time.|

> Example responses

> 200 Response

```json
{
  "threads": {
    "update": [
      {
        "_id": "J8Sqi5zPw62WgE4Md",
        "rid": "GENERAL",
        "msg": "test1",
        "ts": "2019-04-16T18:16:00.614Z",
        "u": {
          "_id": "rocketchat.internal.admin.test",
          "username": "rocketchat.internal.admin.test",
          "name": "RocketChat Internal Admin Test"
        },
        "_updatedAt": "2019-04-16T18:17:09.749Z",
        "mentions": [],
        "channels": [],
        "replies": [
          "rocketchat.internal.admin.test"
        ],
        "tcount": 1,
        "tlm": "2019-04-16T18:17:09.672Z"
      },
      {
        "_id": "hbs2ZAjHH2JXrP7C7",
        "rid": "GENERAL",
        "msg": "another test",
        "ts": "2019-04-16T18:13:20.403Z",
        "u": {
          "_id": "rocketchat.internal.admin.test",
          "username": "rocketchat.internal.admin.test",
          "name": "RocketChat Internal Admin Test"
        },
        "_updatedAt": "2019-04-16T18:30:46.722Z",
        "mentions": [],
        "channels": [],
        "replies": [
          "rocketchat.internal.admin.test"
        ],
        "tcount": 1,
        "tlm": "2019-04-16T18:30:46.615Z"
      }
    ],
    "remove": [
      {
        "_id": "GXwCSs4cx6456WBJk",
        "rid": "GENERAL",
        "msg": "test",
        "ts": "2019-04-16T18:13:39.217Z",
        "u": {
          "_id": "rocketchat.internal.admin.test",
          "username": "rocketchat.internal.admin.test",
          "name": "RocketChat Internal Admin Test"
        },
        "_updatedAt": "2019-04-16T18:16:00.696Z",
        "mentions": [],
        "channels": [],
        "replies": [
          "rocketchat.internal.admin.test"
        ],
        "tcount": 1,
        "tlm": "2019-04-16T18:16:00.614Z",
        "_deletedAt": "2019-04-16T18:16:13.508Z",
        "__collection__": "message"
      }
    ]
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The required \"rid\" query param is missing. [error-room-id-param-not-provided]",
  "errorType": "error-room-id-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="sync-thread-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="sync-thread-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|threads|object|false|none|none|
|» update|[object]|false|none|none|
|» » _id|string|false|none|none|
|» » rid|string|false|none|none|
|» » msg|string|false|none|none|
|» » ts|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » mentions|[object]|false|none|none|
|» » channels|[object]|false|none|none|
|» » replies|[string]|false|none|none|
|» » tcount|integer|false|none|none|
|» » tlm|string|false|none|none|
|» remove|[object]|false|none|none|
|» » _id|string|false|none|none|
|» » rid|string|false|none|none|
|» » msg|string|false|none|none|
|» » ts|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » mentions|[object]|false|none|none|
|» » channels|[object]|false|none|none|
|» » replies|[string]|false|none|none|
|» » tcount|integer|false|none|none|
|» » tlm|string|false|none|none|
|» » _deletedAt|string|false|none|none|
|» » __collection__|string|false|none|none|
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

## Sync Thread Messages

<a id="opIdget-api-v1-chat.syncThreadMessages"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/chat.syncThreadMessages?updatedSince=string&tmid=string' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/chat.syncThreadMessages`

List the messages in a thread along with any data updates from a specified date.

### Changelog
| Version      | Description | 
| ------------ | ------------|
|9.0.0   | Removed the `fields` and `query` parameters.       |
| 1.0.0        | Added       |

<h3 id="sync-thread-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{ "value": -1, "_id": 1 }`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|updatedSince|query|string|true|Date as an ISO string. When you provide the `updatedSince` query parameter, the `update` and `remove` parameters in the response will contain only those updated and removed since this date and time.|
|tmid|query|string|true|Thread's message ID.|

> Example responses

> 200 Response

```json
{
  "messages": {
    "update": [
      {
        "_id": "8BciMkvotHLpmpDEG",
        "rid": "GENERAL",
        "tmid": "hbs2ZAjHH2JXrP7C7",
        "msg": "test",
        "ts": "2019-04-16T18:30:46.615Z",
        "u": {
          "_id": "rocketchat.internal.admin.test",
          "username": "rocketchat.internal.admin.test",
          "name": "RocketChat Internal Admin Test"
        },
        "_updatedAt": "2019-04-16T18:30:46.669Z",
        "mentions": [],
        "channels": []
      }
    ],
    "remove": []
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The required \"tmid\" query param is missing. [error-invalid-params]",
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

<h3 id="sync-thread-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="sync-thread-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|object|false|none|none|
|» update|[object]|false|none|none|
|» » _id|string|false|none|none|
|» » rid|string|false|none|none|
|» » tmid|string|false|none|none|
|» » msg|string|false|none|none|
|» » ts|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » mentions|[object]|false|none|none|
|» » channels|[object]|false|none|none|
|» remove|[object]|false|none|none|
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

## Sync Messages

<a id="opIdget-api-v1-chat.syncMessages"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/chat.syncMessages?roomId=6GFJ3tbmHiyHbahmC' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/chat.syncMessages`

List updated and deleted messages in a room. Use `lastUpdate` to retrieve changes made after a specific date. To limit the results to messages originally sent at or after a specific date, use `fromTs` together with `lastUpdate`.

You can also paginate updated or deleted messages with the `next`, `previous`, and `type` parameters. This endpoint replaces the `loadMissedMessages` method, which was removed in 9.0.0.
### Changelog
| Version      | Description | 
| ------------ | ------------|
| 8.8.0        | Added the `fromTs` parameter. |
| 1.0.0        | Added       |

<h3 id="sync-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|The room ID.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|lastUpdate|query|string(date-time)|false|The date and time after which message updates and deletions should be returned.|
|fromTs|query|string(date-time)|false|The inclusive date and time boundary for the original message timestamp. Only messages originally sent at or after this date are considered. You must use this parameter together with `lastUpdate`.|
|next|query|string|false|The cursor returned in `result.cursor.next` to retrieve the next page. Use either `next` or `previous`.|
|previous|query|string|false|The cursor returned in `result.cursor.previous` to retrieve the previous page. Use either `next` or `previous`.|
|type|query|string|false|The message change type to retrieve when using cursor pagination. This parameter is required with `next` or `previous`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|UPDATED|
|type|DELETED|

> Example responses

> 200 Response

```json
{
  "result": {
    "updated": [
      {
        "_id": "ak3WdaLbf4P7ZW3wQ",
        "rid": "5qW6ssMFyzWjJev69",
        "u": {
          "_id": "FWfHnJmcudrCagGDX",
          "username": "555192857993",
          "name": "555192857993"
        },
        "msg": "teste",
        "ts": "2021-09-24T19:19:47.911Z",
        "_updatedAt": "2021-09-24T19:19:48.048Z",
        "alias": "mauricio pretto",
        "token": "do554ryecscmfrrxyxpvm",
        "unread": true,
        "urls": [],
        "mentions": [],
        "channels": [],
        "md": [
          {
            "type": "PARAGRAPH",
            "value": [
              {
                "type": "PLAIN_TEXT",
                "value": "teste"
              }
            ]
          }
        ]
      },
      {
        "_id": "2ttrNPABcCKbsbEtB",
        "t": "livechat-started",
        "msg": "",
        "groupable": false,
        "ts": "2021-09-24T19:19:46.523Z",
        "u": {
          "_id": "FWfHnJmcudrCagGDX",
          "username": "555192857993",
          "name": "555192857993"
        },
        "rid": "5qW6ssMFyzWjJev69",
        "unread": true,
        "_updatedAt": "2021-09-24T19:19:46.691Z",
        "urls": [],
        "mentions": [],
        "channels": []
      }
    ],
    "deleted": []
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The required \"roomId\" query param is missing [error-param-required]",
  "errorType": "error-param-required"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="sync-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="sync-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» updated|[object]|false|none|none|
|» » _id|string|false|none|none|
|» » rid|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » msg|string|false|none|none|
|» » ts|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » alias|string|false|none|none|
|» » token|string|false|none|none|
|» » unread|boolean|false|none|none|
|» » urls|[object]|false|none|none|
|» » mentions|[object]|false|none|none|
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
|» » t|string|false|none|none|
|» » groupable|boolean|false|none|none|
|» deleted|[object]|false|none|none|
|» » _id|string|true|none|none|
|» » _deletedAt|string(date-time)|true|none|none|
|» cursor|object|false|none|none|
|» » next|string \| null|false|none|none|
|» » previous|string \| null|false|none|none|
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

## Get URL Preview

<a id="opIdget-api-v1-chat.getURLPreview"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/chat.getURLPreview?roomId=Xnb2kLD2Pnhdwe3RH&url=http%3A%2F%2Fwww.w3schools.com%2Ftags%2Fmovie.mp4' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/chat.getURLPreview`

Use this endpoint to get a URL preview that can be used in the send and update message endpoints.

<h3 id="get-url-preview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|Enter the room ID where you want to send or update the message.|
|url|query|string|true|Enter the URL that you want to preview.|

> Example responses

> 200 Response

```json
{
  "urlPreview": {
    "url": "http://www.w3schools.com/tags/movie.mp4",
    "meta": {},
    "headers": {
      "contentLength": "318465",
      "contentType": "video/mp4"
    },
    "ignoreParse": true
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'url' [error-invalid-params]",
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

<h3 id="get-url-preview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-url-preview-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|urlPreview|object|false|none|none|
|» url|string|false|none|none|
|» meta|object|false|none|none|
|» headers|object|false|none|none|
|» » contentLength|string|false|none|none|
|» » contentType|string|false|none|none|
|» ignoreParse|boolean|false|none|none|
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

<h1 id="messaging-direct-messages">Direct Messages</h1>

## Block User in DM

<a id="opIdpost-api-v1-im.blockUser"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/im.blockUser \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "block": true
  }'
```

`POST /api/v1/im.blockUser`

Blocks or unblocks the other user in a direct message room. This endpoint replaces the `blockUser` and `unblockUser` DDP methods, which were removed in 9.0.0.

### Changelog
| Version      | Description |
| ------------ | ------------|
| 8.6.0        | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "block": true
}
```

<h3 id="block-user-in-dm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The direct message room ID.|
|» block|body|boolean|true|Set to `true` to block the other user, or `false` to unblock them.|

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
  "error": "[invalid-channel]",
  "errorType": "invalid-channel"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="block-user-in-dm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="block-user-in-dm-responseschema">Response Schema</h3>

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

## Close DM

<a id="opIdpost-api-v1-im.close"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/dm.close \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX"
  }'
```

`POST /api/v1/dm.close`

Removes the direct message from the user's list of direct messages.

### Changelog
| Version      | Description | 
| ------------ | ------------|
| 0.48.0       | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX"
}
```

<h3 id="close-dm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The room ID.|

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
  "error": "Body param \"roomId\" is required [error-room-param-not-provided]",
  "errorType": "error-room-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="close-dm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="close-dm-responseschema">Response Schema</h3>

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

## Get DM Counters

<a id="opIdget-api-v1-im.counters"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/dm.counters?roomId=string' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/dm.counters`

Gets counters and information of direct messages. Permission required: `view-room-administration`.

### Changelog
| Version      | Description | 
| ---------------- | ------------|
| 0.65.0           | Added       |

<h3 id="get-dm-counters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|The DM room ID|
|userId|query|string|false|The user ID to provide counters for.|

> Example responses

> 200 Response

```json
{
  "joined": true,
  "members": 2,
  "unreads": 4,
  "unreadsFrom": "2023-10-30T20:30:47.975Z",
  "msgs": 10,
  "latest": "2023-10-30T20:37:17.160Z",
  "userMentions": 0,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Query param \"roomId\" is required [error-room-param-not-provided]",
  "errorType": "error-room-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-dm-counters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK<br><br>**Note**<br>- `joined`: Boolean flag that shows that user has joined the room or not.<br>- `members`: Count of current room members.<br>- `unreads`: Count of unread messages for specified user (calling user or provided user ID).<br>- `unreadsFrom`: Start date-time of unread interval for specified user.<br>- `msgs`: Count of messages in the room.<br>- `latest`: End date-time of unread interval for specified user (or date-time of last posted message).<br>- `userMentions` - Count of user mentions in messages.|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-dm-counters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|joined|boolean|false|none|none|
|members|integer|false|none|none|
|unreads|integer|false|none|none|
|unreadsFrom|string|false|none|none|
|msgs|integer|false|none|none|
|latest|string|false|none|none|
|userMentions|integer|false|none|none|
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

## Create DM

<a id="opIdpost-api-v1-dm.create"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/dm.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "username": "kim.dok"
  }'
```

`POST /api/v1/dm.create`

Create a direct message session with another user or more than one user.

The username must belong to a user in the workspace, unless it is a federated username and federation is enabled. 

### Changelog
| Version | Description              |
| ------- | ------------------------ |
| 9.0.0   | Required the `create-d-other-users` permission instead of `view-room-administration` to use `excludeSelf`. Limited the response `room` object to `_id`, `rid`, `t`, and `usernames`. Rejected usernames that do not exist instead of creating the room without them. |
| 3.18.0  | Added excludeSelf option |
| 3.1.0   | Added usernames fields   |
| 0.59.0  | Added                    |

> Body parameter

```json
{
  "username": "kim.dok"
}
```

<h3 id="create-dm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» username|body|string|true|The username of the user to open a direct message session.|
|» excludeSelf|body|boolean|false|Creates the direct message session excluding the current authenticated user. Requires the `create-d-other-users` permission. Without it, the request fails with `error-not-allowed`. With a single `username`, the request fails with `error-invalid-user`. Use `usernames` with at least two usernames instead.|
|» *oneOf*|body|object|false|none|
|» usernames|body|string|true|Comma-separated list of usernames to open a multiple direct message session.|
|» excludeSelf|body|boolean|false|Creates the direct message session excluding the current authenticated user. Requires the `create-d-other-users` permission. Without it, the request fails with `error-not-allowed`. Include at least two usernames. A single username, in `username` or `usernames`, fails with `error-invalid-user`. An empty `usernames` value fails with `invalid username`.|

> Example responses

> 200 Response

```json
{
  "room": {
    "_id": "6a1f0c9e2b7d4e8f9a3c5b21",
    "t": "d",
    "rid": "6a1f0c9e2b7d4e8f9a3c5b21",
    "usernames": [
      "g1",
      "rocket.cat"
    ]
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "invalid username"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="create-dm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="create-dm-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|room|object|false|none|none|
|» _id|string|false|none|none|
|» t|string|false|none|none|
|» rid|string|false|none|none|
|» usernames|[string]|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» method|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete DM

<a id="opIdpost-api-v1-im.delete"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/dm.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "hdy9972092873h8s7s0"
  }'
```

`POST /api/v1/dm.delete`

Delete a DM. Permission required: `view-room-administration`.

### Changelog
| Version      | Description | 
| ------------ | ------------|
|3.18.0        | Added       |

> Body parameter

```json
{
  "roomId": "hdy9972092873h8s7s0"
}
```

<h3 id="delete-dm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» roomId|body|string|true|The room ID of the DM. This parameter is required if you don't enter the `username` parameter.|
|» *oneOf*|body|object|false|none|
|» username|body|string|true|The username of the user in the DM.|

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
  "error": "must have required property 'roomId'\n must have required property 'username'\n must match exactly one schema in oneOf [error-invalid-params]",
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

<h3 id="delete-dm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="delete-dm-responseschema">Response Schema</h3>

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

## Get DM Files

<a id="opIdget-api-v1-im.files"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/dm.files \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/dm.files`

Get all files in a DM. 

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|9.0.0   | Removed the `fields` and `query` parameters.       |
|0.64.0            | Change `userId` to `user` object in response|
|0.59.0            | Added       |

<h3 id="get-dm-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{ "value": -1, "_id": 1 }`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|typeGroup|query|string|false|Filter results by the type of file. Available options:<br>- `all`: Return all file types.<br>- `image`: Filter by image files.<br>- `video`: Filter by video files.<br>- `audio`: Filter by audio files.<br>- `text`: Filter by text documents.<br>- `application`: Filter by other file types.|
|name|query|string|false|The name of the file to search for.|
|roomId|query|string|false|The roomId of the DM. It is required if `username` is not provided.|
|username|query|string|false|The username of the user in the DM. It is required if `roomId` is not provided.|

> Example responses

> 200 Response

```json
{
  "files": [
    {
      "_id": "6542e355a2f73c7460e18ef6",
      "name": "2023-11-01_21-13-38.snagx",
      "size": 652277,
      "type": "application/octet-stream",
      "rid": "5fRTXMt7DMJbpPJfhgzvcvpov9G4TxbGFS",
      "userId": "5fRTXMt7DMJbpPJfh",
      "store": "GridFS:Uploads",
      "_updatedAt": "2023-11-01T23:46:29.216Z",
      "complete": true,
      "etag": "7qDc9jBurptfmrAxr",
      "path": "/file-upload/6542e355a2f73c7460e18ef6/2023-11-01_21-13-38.snagx",
      "progress": 1,
      "token": "eAD959d9A8",
      "uploadedAt": "2023-11-01T23:46:29.196Z",
      "uploading": false,
      "url": "http://localhost:3000/file-upload/6542e355a2f73c7460e18ef6/2023-11-01_21-13-38.snagx",
      "typeGroup": "application",
      "user": {
        "_id": "5fRTXMt7DMJbpPJfh",
        "username": "test.john",
        "name": "Test John"
      }
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
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

<h3 id="get-dm-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-dm-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» size|integer|false|none|none|
|» type|string|false|none|none|
|» rid|string|false|none|none|
|» userId|string|false|none|none|
|» store|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» complete|boolean|false|none|none|
|» etag|string|false|none|none|
|» path|string|false|none|none|
|» progress|integer|false|none|none|
|» token|string|false|none|none|
|» uploadedAt|string|false|none|none|
|» uploading|boolean|false|none|none|
|» url|string|false|none|none|
|» typeGroup|string|false|none|none|
|» user|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## DM History

<a id="opIdget-api-v1-im.history"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/dm.history?roomId=6GFJ3tbmHiyHbahmC' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/dm.history`

Retrieves the message history from a direct message.
### Change Log
| Version | Description             |
| ------- | ----------------------- |
| 0.75.0  | Added `offset` property |
| 0.48.0  | Added                   |

<h3 id="dm-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|The room ID.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{ "value": -1, "_id": 1 }`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|latest|query|string|false|The end of time range of messages to retrieve.|
|oldest|query|string|false|The start of the time range of messages to retrieve.|
|inclusive|query|string|false|Whether messages which land on the `latest` and `oldest` dates should be included.|
|showThreadMessages|query|boolean|false|Choose to display thread message in the message history.|
|unreads|query|boolean|false|Whether the number of unread messages should be included.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "_id": "AkzpHAvZpdnuchw2a",
      "rid": "ByehQjC44FwMeiLbX",
      "msg": "hi",
      "ts": "2016-12-09T12:50:51.555Z",
      "u": {
        "_id": "y65tAmHs93aDChMWu",
        "username": "testing"
      },
      "_updatedAt": "2016-12-09T12:50:51.562Z"
    },
    {
      "_id": "vkLMxcctR4MuTxreF",
      "t": "uj",
      "rid": "ByehQjC44FwMeiLbX",
      "ts": "2016-12-08T15:41:37.730Z",
      "msg": "testing2",
      "u": {
        "_id": "bRtgdhzM6PD9F8pSx",
        "username": "testing2"
      },
      "groupable": false,
      "_updatedAt": "2016-12-08T16:03:25.235Z"
    },
    {
      "_id": "bfRW658nEyEBg75rc",
      "t": "uj",
      "rid": "ByehQjC44FwMeiLbX",
      "ts": "2016-12-07T15:47:49.099Z",
      "msg": "testing",
      "u": {
        "_id": "nSYqWzZ4GsKTX4dyK",
        "username": "testing1"
      },
      "groupable": false,
      "_updatedAt": "2016-12-07T15:47:49.099Z"
    },
    {
      "_id": "pbuFiGadhRZTKouhB",
      "t": "uj",
      "rid": "ByehQjC44FwMeiLbX",
      "ts": "2016-12-06T17:57:38.635Z",
      "msg": "testing",
      "u": {
        "_id": "y65tAmHs93aDChMWu",
        "username": "testing"
      },
      "groupable": false,
      "_updatedAt": "2016-12-06T17:57:38.635Z"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'roomId' [error-invalid-params]",
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

<h3 id="dm-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="dm-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» msg|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» t|string|false|none|none|
|» groupable|boolean|false|none|none|
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

## List All DMs

<a id="opIdget-api-v1-im.list.everyone"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/dm.list.everyone \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/dm.list.everyone`

List all DMs in the workspace.  

Permission required:`view-room-administration`.

### Changelog
| Version      | Description | 
| ------------ | ------------|
|9.0.0   | Removed the `fields` and `query` parameters.       |
|0.49.0        | Added       |

<h3 id="list-all-dms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{ "value": -1, "_id": 1 }`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "ims": [
    {
      "_id": "rYhzFRd2QZjNwAAXXrocket.cat",
      "t": "d",
      "usernames": [
        "rocket.cat",
        "rodriq"
      ],
      "usersCount": 2,
      "msgs": 20,
      "ts": "2023-01-25T02:00:18.095Z",
      "uids": [
        "rYhzFRd2QZjNwAAXX",
        "rocket.cat"
      ],
      "default": false,
      "ro": false,
      "sysMes": true,
      "_updatedAt": "2023-06-22T02:00:10.474Z",
      "_USERNAMES": [
        "rocket.cat",
        "rodriq"
      ],
      "lastMessage": {
        "rid": "rYhzFRd2QZjNwAAXXrocket.cat",
        "msg": "*Update your Rocket.Chat*\nNew version available (6.2.8)\nhttps://github.com/RocketChat/Rocket.Chat/releases/tag/6.2.8",
        "ts": "2023-06-22T02:00:10.367Z",
        "u": {
          "_id": "rocket.cat",
          "username": "rocket.cat",
          "name": "Rocket.Cat"
        },
        "_id": "T2KoWNeAgJM4zvTvt",
        "_updatedAt": "2023-06-22T02:00:10.453Z",
        "urls": [
          {
            "url": "https://github.com/RocketChat/Rocket.Chat/releases/tag/6.2.8",
            "meta": {}
          }
        ],
        "mentions": [],
        "channels": [],
        "md": [
          {
            "type": "PARAGRAPH",
            "value": [
              {
                "type": "BOLD",
                "value": [
                  {
                    "type": "PLAIN_TEXT",
                    "value": "Update your Rocket.Chat"
                  }
                ]
              }
            ]
          },
          {
            "type": "PARAGRAPH",
            "value": [
              {
                "type": "PLAIN_TEXT",
                "value": "New version available (6.2.8)"
              }
            ]
          },
          {
            "type": "PARAGRAPH",
            "value": [
              {
                "type": "LINK",
                "value": {
                  "src": {
                    "type": "PLAIN_TEXT",
                    "value": "https://github.com/RocketChat/Rocket.Chat/releases/tag/6.2.8"
                  },
                  "label": [
                    {
                      "type": "PLAIN_TEXT",
                      "value": "https://github.com/RocketChat/Rocket.Chat/releases/tag/6.2.8"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "lm": "2023-06-22T02:00:10.367Z"
    },
    {
      "_id": "6xia7f5JEYM4Fjxzt",
      "t": "d",
      "usernames": [
        "rodriq"
      ],
      "usersCount": 2,
      "msgs": 0,
      "ts": "2023-01-30T11:43:22.047Z",
      "uids": [
        "rYhzFRd2QZjNwAAXX"
      ],
      "default": false,
      "ro": false,
      "sysMes": true,
      "_updatedAt": "2023-01-31T14:40:37.483Z",
      "_USERNAMES": [
        "rodriq"
      ],
      "lm": "2023-01-30T11:43:30.046Z"
    }
  ],
  "offset": 0,
  "count": 2,
  "total": 2,
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

<h3 id="list-all-dms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-all-dms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ims|[object]|false|none|none|
|» _id|string|false|none|none|
|» t|string|false|none|none|
|» usernames|[string]|false|none|none|
|» usersCount|integer|false|none|none|
|» msgs|integer|false|none|none|
|» ts|string|false|none|none|
|» uids|[string]|false|none|none|
|» default|boolean|false|none|none|
|» ro|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» _USERNAMES|[string]|false|none|none|
|» lastMessage|object|false|none|none|
|» » rid|string|false|none|none|
|» » msg|string|false|none|none|
|» » ts|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » _id|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » urls|[object]|false|none|none|
|» » » url|string|false|none|none|
|» » » meta|object|false|none|none|
|» » mentions|[object]|false|none|none|
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|[object]|false|none|none|
|» » » » » type|string|false|none|none|
|» » » » » value|string|false|none|none|
|» » » » » src|object|false|none|none|
|» » » » » » type|string|false|none|none|
|» » » » » » value|string|false|none|none|
|» » » » » label|[object]|false|none|none|
|» » » » » » type|string|false|none|none|
|» » » » » » value|string|false|none|none|
|» lm|string|false|none|none|
|offset|integer|false|none|none|
|count|integer|false|none|none|
|total|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List DMs

<a id="opIdget-api-v1-im.list"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/dm.list \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/dm.list`

List all the DMs of the authenticated user. 

### Change Log

| Version | Description                                  |
| ------- | -------------------------------------------- |
|9.0.0   | Removed the `fields` parameter.       |
| 0.67.0  | Remove `query` parameter support.            |
| 0.62.0  | Add `query` parameter support.               |
| 0.49.0  | Count and offset query parameters supported. |
| 0.48.0  | Added                                        |

<h3 id="list-dms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{ "value": -1, "_id": 1 }`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "ims": [
    {
      "_id": "5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ",
      "t": "d",
      "usernames": [
        "roxie",
        "test.john"
      ],
      "usersCount": 2,
      "msgs": 10,
      "ts": "2023-07-11T01:37:04.552Z",
      "uids": [
        "5fRTXMt7DMJbpPJfh",
        "rbAXPnMktTFbNpwtJ"
      ],
      "encrypted": true,
      "default": false,
      "ro": false,
      "sysMes": true,
      "_updatedAt": "2023-10-30T20:37:17.317Z",
      "_USERNAMES": [
        "test.test",
        "test.test"
      ],
      "e2eKeyId": "eyJhbGciOiJB",
      "lastMessage": {
        "_id": "qpx24HcNoTZCoj7jZ",
        "rid": "5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ",
        "msg": "gvjkbvjjgi",
        "ts": "2023-10-30T20:37:17.160Z",
        "u": {
          "_id": "rbAXPnMktTFbNpwtJ",
          "username": "roxie",
          "name": "test test"
        },
        "_updatedAt": "2023-10-30T20:37:17.267Z",
        "urls": [],
        "mentions": [],
        "channels": [],
        "md": [
          {
            "type": "PARAGRAPH",
            "value": [
              {
                "type": "PLAIN_TEXT",
                "value": "gvjkbvjjgi"
              }
            ]
          }
        ]
      },
      "lm": "2023-10-30T20:37:17.160Z",
      "topic": "Discuss all of the testing"
    },
    {
      "_id": "65400fc3a2f73c7460e18e9f",
      "t": "d",
      "usernames": [
        "roxie",
        "hookdeck.write",
        "test.john"
      ],
      "usersCount": 3,
      "msgs": 8,
      "ts": "2023-10-30T20:19:15.092Z",
      "uids": [
        "5fRTXMt7DMJbpPJfh",
        "hFDuCPam7sWziWFYa",
        "rbAXPnMktTFbNpwtJ"
      ],
      "encrypted": true,
      "default": false,
      "ro": false,
      "sysMes": true,
      "_updatedAt": "2023-10-30T20:36:41.696Z",
      "_USERNAMES": [
        "roxie",
        "hookdeck.write",
        "test.john"
      ],
      "topic": "Discuss all of the testing",
      "lastMessage": {
        "_id": "dgDTvDAXN4eCLptr8",
        "rid": "65400fc3a2f73c7460e18e9f",
        "msg": "@test.john",
        "ts": "2023-10-30T20:36:41.494Z",
        "u": {
          "_id": "rbAXPnMktTFbNpwtJ",
          "username": "roxie",
          "name": "test test"
        },
        "_updatedAt": "2023-10-30T20:36:41.613Z",
        "urls": [],
        "mentions": [
          {
            "_id": "5fRTXMt7DMJbpPJfh",
            "username": "test.john",
            "name": "Test John",
            "type": "user"
          }
        ],
        "channels": [],
        "md": [
          {
            "type": "PARAGRAPH",
            "value": [
              {
                "type": "MENTION_USER",
                "value": {
                  "type": "PLAIN_TEXT",
                  "value": "test.john"
                }
              }
            ]
          }
        ]
      },
      "lm": "2023-10-30T20:36:41.494Z"
    }
  ],
  "offset": 0,
  "count": 2,
  "total": 2,
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

<h3 id="list-dms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-dms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ims|[object]|false|none|none|
|» _id|string|false|none|none|
|» t|string|false|none|none|
|» usernames|[string]|false|none|none|
|» usersCount|integer|false|none|none|
|» msgs|integer|false|none|none|
|» ts|string|false|none|none|
|» uids|[string]|false|none|none|
|» encrypted|boolean|false|none|none|
|» default|boolean|false|none|none|
|» ro|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» _USERNAMES|[string]|false|none|none|
|» e2eKeyId|string|false|none|none|
|» lastMessage|object|false|none|none|
|» » _id|string|false|none|none|
|» » rid|string|false|none|none|
|» » msg|string|false|none|none|
|» » ts|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » urls|[object]|false|none|none|
|» » mentions|[object]|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » » type|string|false|none|none|
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
|» lm|string|false|none|none|
|» topic|string|false|none|none|
|offset|integer|false|none|none|
|count|integer|false|none|none|
|total|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List DM Members

<a id="opIdget-api-v1-im.members"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/dm.members \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/dm.members`

List all the members of a DM. 

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|9.0.0   | Removed the `query` parameter.       |
|0.59.0             | Added       |

<h3 id="list-dm-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{ "value": -1, "_id": 1 }`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|roomId|query|string|false|The room ID of the DM. It is required if `username` is not provided.|
|username|query|string|false|The username of the user in the DM. It is required if `roomId` is not provided.|

> Example responses

> 200 Response

```json
{
  "members": [
    {
      "_id": "5fRTXMt7DMJbpPJfh",
      "username": "test.john",
      "status": "online",
      "name": "Test John",
      "utcOffset": 1,
      "statusText": ""
    },
    {
      "_id": "rbAXPnMktTFbNpwtJ",
      "username": "roxie",
      "status": "offline",
      "name": "test test",
      "utcOffset": 1,
      "statusText": "On a vacation"
    },
    {
      "_id": "hFDuCPam7sWziWFYa",
      "status": "offline",
      "name": "Hookdeck Write",
      "utcOffset": 1,
      "username": "hookdeck.write"
    }
  ],
  "count": 3,
  "offset": 0,
  "total": 3,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'roomId'\n must have required property 'username'\n must match exactly one schema in oneOf [error-invalid-params]",
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

<h3 id="list-dm-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-dm-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[object]|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» status|string|false|none|none|
|» name|string|false|none|none|
|» utcOffset|integer|false|none|none|
|» statusText|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

## List DM Messages

<a id="opIdget-api-v1-im.messages"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/dm.messages \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/dm.messages`

List all the messages in a DM. 

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|9.0.0   | Removed the `fields` and `query` parameters.       |
| 7.0.0  | Added `mentionIds`, `starredIds`, `pinned` query parameters.|         
|0.59.0            | Added       |

<h3 id="list-dm-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|roomId|query|string|false|The room ID of the DM. It is required if `username` is not provided.|
|username|query|string|false|The username of the user in the DM. It is required if `roomId` is not provided.|
|mentionIds|query|string|false|Filter the messages where a user has been mentioned by the userId. For a set of userIds, use an array (`["838ndhd79w", "dud0wu900"]`).|
|starredIds|query|string|false|Filter the messages a user have starred by userId. For a set of userIds, use an array (`["838ndhd79w", "dud0wu900"]`).|
|pinned|query|string|false|Filter pinned messages.|
|sort|query|object|false|Sort the order in which messages are returned, ascending (`1`) or descending (`-1`). The options are:<br> * `ts`: Sort by message timestamp. For example, `{"ts": -1}`, this is the default sorting mechanism.<br> * `u.username`: Sort by username. For example, `{"u.username": 1}`.<br> * `msg`: Sort by message content. For example, `{"msg": 1}`.<br> * `_id`: Sort by message ID. For example, `{"_id": -1}`.<br> * `mentions._id`: Sort by mentioned user IDs. For example, `{"mentions._id": 1}`.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "_id": "dGNzxH29pFm4Qhufh",
      "rid": "5fRTXMt7DMJbpPJfhgzvcvpov9G4TxbGFS",
      "msg": "DO we have any updates today?",
      "ts": "2023-11-01T23:20:57.357Z",
      "u": {
        "_id": "5fRTXMt7DMJbpPJfh",
        "username": "test.john",
        "name": "Test John"
      },
      "_updatedAt": "2023-11-01T23:20:57.406Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "DO we have any updates today?"
            }
          ]
        }
      ]
    },
    {
      "_id": "aiaCSRkxPcNGHqvtC",
      "rid": "5fRTXMt7DMJbpPJfhgzvcvpov9G4TxbGFS",
      "msg": "Hows it going?",
      "ts": "2023-11-01T23:20:51.504Z",
      "u": {
        "_id": "5fRTXMt7DMJbpPJfh",
        "username": "test.john",
        "name": "Test John"
      },
      "_updatedAt": "2023-11-01T23:20:51.549Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "Hows it going?"
            }
          ]
        }
      ]
    },
    {
      "_id": "dLjcNr8ovyeCqqJW5",
      "rid": "5fRTXMt7DMJbpPJfhgzvcvpov9G4TxbGFS",
      "msg": "Hi buddy",
      "ts": "2023-11-01T23:20:47.991Z",
      "u": {
        "_id": "5fRTXMt7DMJbpPJfh",
        "username": "test.john",
        "name": "Test John"
      },
      "_updatedAt": "2023-11-01T23:20:48.085Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "Hi buddy"
            }
          ]
        }
      ]
    }
  ],
  "count": 3,
  "offset": 0,
  "total": 3,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'roomId'\n must have required property 'username'\n must match exactly one schema in oneOf [error-invalid-params]",
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

<h3 id="list-dm-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-dm-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» msg|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» urls|[object]|false|none|none|
|» mentions|[object]|false|none|none|
|» channels|[object]|false|none|none|
|» md|[object]|false|none|none|
|» » type|string|false|none|none|
|» » value|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

## Message Others

<a id="opIdget-api-v1-im.messages.others"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/dm.messages.others?roomId=6GFJ3tbmHiyHbahmC' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/dm.messages.others`

Retrieves the messages from any direct message in the server.  For this method to work, navigate to  **Manage > Workspace > Settings > General > REST API > Enable Direct Message History Endpoint** and enable it. 

Permission required: `view-room-administration`.

### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0   | Removed the `fields` and `query` parameters.       |
|0.50.0  | Added                   |

<h3 id="message-others-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|The room ID.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{ "value": -1, "_id": 1 }`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "_id": "AkzpHAvZpdnuchw2a",
      "rid": "ByehQjC44FwMeiLbX",
      "msg": "hi",
      "ts": "2016-12-09T12:50:51.555Z",
      "u": {
        "_id": "y65tAmHs93aDChMWu",
        "username": "testing"
      },
      "_updatedAt": "2016-12-09T12:50:51.562Z"
    },
    {
      "_id": "vkLMxcctR4MuTxreF",
      "t": "uj",
      "rid": "ByehQjC44FwMeiLbX",
      "ts": "2016-12-08T15:41:37.730Z",
      "msg": "testing2",
      "u": {
        "_id": "bRtgdhzM6PD9F8pSx",
        "username": "testing2"
      },
      "groupable": false,
      "_updatedAt": "2016-12-08T16:03:25.235Z"
    },
    {
      "_id": "bfRW658nEyEBg75rc",
      "t": "uj",
      "rid": "ByehQjC44FwMeiLbX",
      "ts": "2016-12-07T15:47:49.099Z",
      "msg": "testing",
      "u": {
        "_id": "nSYqWzZ4GsKTX4dyK",
        "username": "testing1"
      },
      "groupable": false,
      "_updatedAt": "2016-12-07T15:47:49.099Z"
    },
    {
      "_id": "pbuFiGadhRZTKouhB",
      "t": "uj",
      "rid": "ByehQjC44FwMeiLbX",
      "ts": "2016-12-06T17:57:38.635Z",
      "msg": "testing",
      "u": {
        "_id": "y65tAmHs93aDChMWu",
        "username": "testing"
      },
      "groupable": false,
      "_updatedAt": "2016-12-06T17:57:38.635Z"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "This endpoint is disabled [error-endpoint-disabled]",
  "errorType": "error-endpoint-disabled",
  "details": {
    "route": "/api/v1/dm.messages.others"
  }
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="message-others-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="message-others-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» msg|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» t|string|false|none|none|
|» groupable|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» route|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Open DM

<a id="opIdpost-api-v1-im.open"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/dm.open \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ"
  }'
```

`POST /api/v1/dm.open`

Adds a DM back to the user's list of direct messages.

### Changelog
| Version      | Description | 
| ---------------- | ------------|
| 0.48.0           | Added       |

> Body parameter

```json
{
  "roomId": "5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ"
}
```

<h3 id="open-dm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The room ID.|

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
  "error": "Body param \"roomId\" is required [error-room-param-not-provided]",
  "errorType": "error-room-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="open-dm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="open-dm-responseschema">Response Schema</h3>

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

## Set DM Topic

<a id="opIdpost-api-v1-im.setTopic"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/dm.setTopic \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "topic": "Discuss all of the testing"
  }'
```

`POST /api/v1/dm.setTopic`

Set the topic of a DM.

### Changelog
| Version      | Description | 
| ---------------- | ------------|
| 0.48.0           | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "topic": "Discuss all of the testing"
}
```

<h3 id="set-dm-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The room ID of the direct message.|
|» topic|body|string|true|The topic of the DM.|

> Example responses

> 200 Response

```json
{
  "topic": "Discuss all of the testing",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Body param \"roomId\" is required [error-room-param-not-provided]",
  "errorType": "error-room-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="set-dm-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-dm-topic-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic|string|false|none|none|
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

<h1 id="messaging-auto-translate">Auto-Translate</h1>

## Get Translation Providers

<a id="opIdget-api-v1-autotranslate.getProviderUiMetadata"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/autotranslate.getProviderUiMetadata \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/autotranslate.getProviderUiMetadata`

Lists the auto-translate providers registered in the workspace.

This endpoint replaces the `autoTranslate.getProviderUiMetadata` Realtime API method, which was removed in 9.0.0.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Added       |

<h3 id="get-translation-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "providers": {
    "google-translate": {
      "name": "google-translate",
      "displayName": "Google"
    },
    "deepl-translate": {
      "name": "deepl-translate",
      "displayName": "DeepL"
    },
    "microsoft-translate": {
      "name": "microsoft-translate",
      "displayName": "Microsoft"
    },
    "libre-translate": {
      "name": "libre-translate",
      "displayName": "LibreTranslate"
    }
  },
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

<h3 id="get-translation-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-translation-providers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providers|object|false|none|The registered providers, keyed by provider name.|
|» **additionalProperties**|object|false|none|none|
|» » name|string|false|none|The provider name.|
|» » displayName|string|false|none|The provider name to display in the UI.|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Supported Languages

<a id="opIdget-api-v1-autotranslate.getSupportedLanguages"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/autotranslate.getSupportedLanguages?targetLanguage=en' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/autotranslate.getSupportedLanguages`

Get the list of languages supported by the translation service provider.
Make sure that the auto-translate feature is configured in your workspace. For details, see the <a href="https://docs.rocket.chat/v1/docs/auto-translate-messages" target="_blank">Auto-Translate</a> user guide.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|1.3.0          | Added       |

<h3 id="get-supported-languages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|targetLanguage|query|string|true|Language in which the language names will be returned.|

> Example responses

> 200 Response

```json
{
  "languages": [
    {
      "name": "Arabic",
      "supports_formality": false,
      "language": "ar"
    },
    {
      "name": "Bulgarian",
      "supports_formality": false,
      "language": "bg"
    },
    {
      "name": "Czech",
      "supports_formality": false,
      "language": "cs"
    },
    {
      "name": "German",
      "supports_formality": true,
      "language": "de"
    },
    {
      "name": "Spanish (Latin American)",
      "supports_formality": true,
      "language": "es-419"
    },
    {
      "name": "Estonian",
      "supports_formality": false,
      "language": "et"
    },
    {
      "name": "Indonesian",
      "supports_formality": false,
      "language": "id"
    },
    {
      "name": "Korean",
      "supports_formality": false,
      "language": "ko"
    },
    {
      "name": "Lithuanian",
      "supports_formality": false,
      "language": "lt"
    },
    {
      "name": "Portuguese (Brazilian)",
      "supports_formality": true,
      "language": "pt-BR"
    },
    {
      "name": "Thai",
      "supports_formality": false,
      "language": "th"
    },
    {
      "name": "Vietnamese",
      "supports_formality": false,
      "language": "vi"
    },
    {
      "name": "Chinese (simplified)",
      "supports_formality": false,
      "language": "zh"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'targetLanguage' [error-invalid-params]",
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

<h3 id="get-supported-languages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-supported-languages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languages|[object]|false|none|none|
|» name|string|false|none|none|
|» supports_formality|boolean|false|none|none|
|» language|string|false|none|none|
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

## Save Auto-Translate Settings

<a id="opIdpost-api-v1-autotranslate.saveSettings"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/autotranslate.saveSettings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "7aDSXtjMA3KPLxLjt",
    "field": "autoTranslate",
    "value": true,
    "defaultLanguage": "en"
  }'
```

`POST /api/v1/autotranslate.saveSettings`

Saves autotranslate settings for a room.
### Changelog
| Version      | Description |
| ---------------- | ------------|
|1.3.0          | Added       |

> Body parameter

```json
{
  "roomId": "7aDSXtjMA3KPLxLjt",
  "field": "autoTranslate",
  "value": true,
  "defaultLanguage": "en"
}
```

<h3 id="save-auto-translate-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The room's id to apply setting.|
|» field|body|string|true|The setting to apply to user's subscription.|
|» value|body|boolean|true|Boolean if the setting is autoTranslate and a string (the language) if the setting is autoTranslateLanguage.|
|» defaultLanguage|body|string|false|The default language.|

> Example responses

> 200 Response

```json
{
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

<h3 id="save-auto-translate-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="save-auto-translate-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate Message

<a id="opIdpost-api-v1-autotranslate.translateMessage"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/autotranslate.translateMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "messageId": "Fq7sQNSnDEfzj8qoS",
    "targetLanguage": "en"
  }'
```

`POST /api/v1/autotranslate.translateMessage`

Auto-translates the provided message.

The caller must have access to the room that contains the message.
If the caller is not a room member (or otherwise cannot access it), the endpoint returns `403 Forbidden` and no translation is performed.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|1.3.0          | Added       |
|8.5.0          | Added room-access check. |

> Body parameter

```json
{
  "messageId": "Fq7sQNSnDEfzj8qoS",
  "targetLanguage": "en"
}
```

<h3 id="translate-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» messageId|body|string|true|The message's id to be translated.|
|» targetLanguage|body|string|false|The target language that the message will be translated.|

> Example responses

> 200 Response

```json
{
  "message": {
    "_id": "Fq7sQNSnDEfzj8qoS",
    "rid": "GENERAL",
    "msg": "Isso é um teste",
    "ts": "2019-06-27T15:35:20.753Z",
    "u": {
      "_id": "pC6Z2N2ijivxdsYSu",
      "username": "marcos",
      "name": "marcos"
    },
    "_updatedAt": "2019-06-27T15:47:01.486Z",
    "mentions": [],
    "channels": [],
    "translations": {
      "en": "This is a test"
    }
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Invalid request body. [error-invalid-params]",
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

> 403 Response

```json
{
  "success": false,
  "error": "forbidden"
}
```

<h3 id="translate-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="translate-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» msg|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» mentions|[object]|false|none|none|
|» channels|[object]|false|none|none|
|» translations|object|false|none|none|
|» » en|string|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|error|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|success|false|

<aside class="success">
This operation does not require authentication
</aside>
