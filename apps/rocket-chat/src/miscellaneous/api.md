<h1 id="miscellaneous">Miscellaneous v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://apiexplorer.support.rocket.chat">https://apiexplorer.support.rocket.chat</a>

<h1 id="miscellaneous-commands">Commands</h1>

## Get Slash Command

<a id="opIdget-api-v1-commands.get"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/commands.get?command=me' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/commands.get`

Get details of a specific slash command.
### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.60.2       | Added       |

<h3 id="get-slash-command-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|command|query|string|true|The name of the command.|

> Example responses

> 200 Response

```json
{
  "command": {
    "command": "me",
    "params": "your_message",
    "description": "Displays_action_text",
    "clientOnly": false
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The query param \"command\" must be provided."
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-slash-command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-slash-command-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|command|object|false|none|none|
|» command|string|false|none|none|
|» params|string|false|none|none|
|» description|string|false|none|none|
|» clientOnly|boolean|false|none|none|
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

## List Slash Commands

<a id="opIdget-api-v1-commands.list"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/commands.list \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/commands.list`

Lists all available slash commands.
### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0   | Removed the `fields` and `query` parameters.       |
|0.60.2      | Added       |

<h3 id="list-slash-commands-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|string|false|Sort the commands in ascending (`1`) or descending (`-1`) order. The value must be entered as a JSON string. The options are as follows:<br> * `command`: Sort by command name. For example, `sort={"command":1}`<br> * `description`: Sort by description. For example, `sort={"description":-1}`|

> Example responses

> 200 Response

```json
{
  "commands": [
    {
      "command": "invite-all-from",
      "clientOnly": false
    },
    {
      "command": "slackbridge-import",
      "clientOnly": false
    },
    {
      "command": "gimme",
      "params": "your_message_optional",
      "description": "Slash_Gimme_Description",
      "clientOnly": false
    },
    {
      "command": "lennyface",
      "params": "your_message_optional",
      "description": "Slash_LennyFace_Description",
      "clientOnly": false
    },
    {
      "command": "shrug",
      "params": "your_message_optional",
      "description": "Slash_Shrug_Description",
      "clientOnly": false
    },
    {
      "command": "tableflip",
      "params": "your_message_optional",
      "description": "Slash_Tableflip_Description",
      "clientOnly": false
    },
    {
      "command": "unflip",
      "params": "your_message_optional",
      "description": "Slash_TableUnflip_Description",
      "clientOnly": false
    },
    {
      "command": "create",
      "clientOnly": false
    },
    {
      "command": "help",
      "clientOnly": false
    },
    {
      "command": "invite",
      "clientOnly": false
    },
    {
      "command": "invite-all-to",
      "clientOnly": false
    },
    {
      "command": "archive",
      "clientOnly": false
    },
    {
      "command": "join",
      "clientOnly": false
    },
    {
      "command": "kick",
      "clientOnly": false
    },
    {
      "command": "leave",
      "clientOnly": false
    },
    {
      "command": "part",
      "clientOnly": false
    },
    {
      "command": "me",
      "params": "your_message",
      "description": "Displays_action_text",
      "clientOnly": false
    },
    {
      "command": "msg",
      "clientOnly": false
    },
    {
      "command": "mute",
      "clientOnly": false
    },
    {
      "command": "unmute",
      "clientOnly": false
    },
    {
      "command": "topic",
      "params": "Slash_Topic_Params",
      "description": "Slash_Topic_Description",
      "clientOnly": false
    },
    {
      "command": "unarchive",
      "clientOnly": false
    }
  ],
  "offset": 0,
  "count": 22,
  "total": 22,
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

<h3 id="list-slash-commands-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-slash-commands-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commands|[object]|false|none|none|
|» command|string|false|none|none|
|» clientOnly|boolean|false|none|none|
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

## Get Command's Preview Data

<a id="opIdget-api-v1-commands.preview"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/commands.preview?command=unmute&roomId=ByehQjC44FwMeiLbX' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/commands.preview`

Fetches the command's preview data or executes the preview item.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |

<h3 id="get-commands-preview-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|command|query|string|true|The name of the command to be executed.|
|roomId|query|string|true|The ID of the room.|
|params|query|string|false|Parameters of the command if required. It is `undefined` by default.|

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
  "error": "You must provide a command to get the previews from."
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
  "error": "You are not allowed to do this",
  "errorType": "error-forbidden"
}
```

<h3 id="get-commands-preview-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-commands-preview-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Execute command's preview item

<a id="opIdpost-api-v1-commands.preview"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/commands.preview \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "command": "unmute",
    "roomId": "ByehQjC44FwMeiLbX",
    "tmid": "Hsj2435g4bvrj4bjh",
    "params": "@user123",
    "triggerId": "awovufbukuefzuper",
    "previewItem": {
      "id": "nucobdipokaikazia",
      "type": "image",
      "value": "https://dev.null/gif"
    }
  }'
```

`POST /api/v1/commands.preview`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
|3.0.0      | Added `tmid` and `triggerId` fields       |
|0.65.0      | Added|

> Body parameter

```json
{
  "command": "unmute",
  "roomId": "ByehQjC44FwMeiLbX",
  "tmid": "Hsj2435g4bvrj4bjh",
  "params": "@user123",
  "triggerId": "awovufbukuefzuper",
  "previewItem": {
    "id": "nucobdipokaikazia",
    "type": "image",
    "value": "https://dev.null/gif"
  }
}
```

<h3 id="execute-commands-preview-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» command|body|string|true|The name of the command to be executed.|
|» roomId|body|string|true|The ID of the room.|
|» tmid|body|string|true|The ID of the thread to run the command.|
|» params|body|string|false|Parameters of the command if required. It is `undefined` by default.|
|» triggerId|body|string|false|The triggerId generated by the client that allows the command to interact with the UI|
|» previewItem|body|object|true|The data of the preview item to be executed by the command|
|» » id|body|string|true|The ID of the selected preview item|
|» » type|body|string|true|The type of the selected preview item|
|» » value|body|string|true|The value of the selected preview item|

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
  "error": "You must provide a command to run the preview item on."
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
  "error": "You are not allowed to do this",
  "errorType": "error-forbidden"
}
```

<h3 id="execute-commands-preview-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="execute-commands-preview-item-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Execute a Slash Command

<a id="opIdpost-api-v1-commands.run"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/commands.run \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "command": "unmute",
    "roomId": "ByehQjC44FwMeiLbX",
    "params": "@user123",
    "tmid": "Hsj2435g4bvrj4bjh",
    "triggerId": "awovufbukuefzuper"
  }'
```

`POST /api/v1/commands.run`

Execute a slash command in the specified room.
### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
|3.0.0      | Added `triggerId` property       |
|2.0.0      | Added `tmid` property      |
|0.60.2      | Added        |

> Body parameter

```json
{
  "command": "unmute",
  "roomId": "ByehQjC44FwMeiLbX",
  "params": "@user123",
  "tmid": "Hsj2435g4bvrj4bjh",
  "triggerId": "awovufbukuefzuper"
}
```

<h3 id="execute-a-slash-command-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» command|body|string|true|The name of the command to be executed.|
|» roomId|body|string|true|The ID of the room.|
|» params|body|string|false|Parameters of the command if required. It is `undefined` by default|
|» tmid|body|string|false|The ID of the thread to run the command.|
|» triggerId|body|string|false|The triggerId generated by the client that allows the command to interact with the UI|

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
  "error": "You must provide a command to run."
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
  "error": "You are not allowed to do this",
  "errorType": "error-forbidden"
}
```

<h3 id="execute-a-slash-command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="execute-a-slash-command-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="miscellaneous-email-inbox">Email Inbox</h1>

## List Email Inbox

<a id="opIdget-api-v1-email-inbox.list"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/email-inbox.list \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/email-inbox.list`

Gets Omnichannel email inbox list.

Permissions required:- `manage-email-inbox`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0   | Removed the `fields` and `query` parameters.       |
|3.11.0-rc.0         | Added       |

<h3 id="list-email-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "emailInboxes": [
    {
      "_id": "60197e8ff82d6c83b96c53ff",
      "active": false,
      "name": "Rocket.Chat sample account",
      "email": "info@rocket.chat",
      "description": "",
      "senderInfo": "",
      "department": "GgYvrkAF63aeQmsh4",
      "smtp": {
        "server": "smtp.gmail.com",
        "port": 465,
        "username": "info@rocket.chat",
        "password": "kkviepoenakbccwf",
        "secure": true
      },
      "imap": {
        "server": "imap.gmail.com",
        "port": 993,
        "username": "info@rocket.chat",
        "password": "kkviepoenakbccwf",
        "secure": true
      },
      "_createdAt": "2021-02-02T16:32:15.069Z",
      "_updatedAt": "2021-09-06T17:43:49.257Z",
      "_createdBy": {
        "_id": "JxemcN9PDCdfzJeZr",
        "username": "renato.becker"
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="list-email-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="list-email-inbox-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailInboxes|[object]|false|none|none|
|» _id|string|false|none|none|
|» active|boolean|false|none|none|
|» name|string|false|none|none|
|» email|string|false|none|none|
|» description|string|false|none|none|
|» senderInfo|string|false|none|none|
|» department|string|false|none|none|
|» smtp|object|false|none|none|
|» » server|string|false|none|none|
|» » port|integer|false|none|none|
|» » username|string|false|none|none|
|» » password|string|false|none|none|
|» » secure|boolean|false|none|none|
|» imap|object|false|none|none|
|» » server|string|false|none|none|
|» » port|integer|false|none|none|
|» » username|string|false|none|none|
|» » password|string|false|none|none|
|» » secure|boolean|false|none|none|
|» _createdAt|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» _createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
|success|boolean|false|none|none|

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

## Set Email Inbox

<a id="opIdpost-api-v1-email-inbox"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/email-inbox \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "name": "new email",
    "email": "mdyemaasil@rocket.chat",
    "active": false,
    "description": "This email has been set",
    "senderInfo": "email sender",
    "department": "awesome department",
    "smtp": {
      "password": "10fae4dc374fb87d",
      "port": 25,
      "secure": true,
      "server": "smtp.mailtrap.io",
      "username": "b5ef5safd6cb806c"
    },
    "imap": {
      "password": "10fae4374sdfb87d",
      "port": 993,
      "secure": true,
      "server": "imap.mailtrap.io",
      "username": "b5ef5aafd6cb806c"
    }
  }'
```

`POST /api/v1/email-inbox`

Configure the Omnichannel email inbox for your server.

Permissions required:- `manage-email-inbox`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.11.0-rc.0         | Added       |

> Body parameter

```json
{
  "name": "new email",
  "email": "mdyemaasil@rocket.chat",
  "active": false,
  "description": "This email has been set",
  "senderInfo": "email sender",
  "department": "awesome department",
  "smtp": {
    "password": "10fae4dc374fb87d",
    "port": 25,
    "secure": true,
    "server": "smtp.mailtrap.io",
    "username": "b5ef5safd6cb806c"
  },
  "imap": {
    "password": "10fae4374sdfb87d",
    "port": 993,
    "secure": true,
    "server": "imap.mailtrap.io",
    "username": "b5ef5aafd6cb806c"
  }
}
```

<h3 id="set-email-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» _id|body|string|false|Email Id|
|» name|body|string|true|The name you wish to set for your email.|
|» email|body|string|true|The email to be used|
|» active|body|boolean|true|Set whether or not the email is active.|
|» description|body|string|false|The description for this entry.|
|» senderInfo|body|string|false|Sender info to be attached on outgoing emails.|
|» department|body|string|false|The department to which the email will be available.|
|» smtp|body|object|true|An object with your SMTP credentials to be used for outgoing emails.|
|» » password|body|string|false|none|
|» » port|body|integer|false|none|
|» » secure|body|boolean|false|none|
|» » server|body|string|false|none|
|» » username|body|string|false|none|
|» imap|body|object|true|An object having your IMAP credentials to be used for incomming emails.|
|» » password|body|string|false|none|
|» » port|body|integer|false|none|
|» » secure|body|boolean|false|none|
|» » server|body|string|false|none|
|» » username|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "_id": "JdVkn_dkOlms_",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "E11000 duplicate key error index: rocketchat.rocketchat_email_inbox.$email_1 dup key: { : \"mdyemail@rocket.chat\" }"
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
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="set-email-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="set-email-inbox-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Email Inbox by ID

<a id="opIdget-api-v1-email-inbox-id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/email-inbox/string \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/email-inbox/{_id}`

Gets Omnichannel email inbox by ID.

Permissions required: `manage-email-inbox`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|5.3.0       | Not Found Error Added       |
|3.11.0-rc.0         | Added       |

<h3 id="get-email-inbox-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|_id|path|string|true|Enter the email inbox ID.|

> Example responses

> 200 Response

```json
{
  "_id": "60197e8ff82d6c83b96c53ff",
  "active": false,
  "name": "Rocket.Chat sample account",
  "email": "info@rocket.chat",
  "description": "",
  "senderInfo": "",
  "department": "GgYvrkAF63aeQmsh4",
  "smtp": {
    "server": "smtp.gmail.com",
    "port": 465,
    "username": "info@rocket.chat",
    "password": "kkviepoenakbccwf",
    "secure": true
  },
  "imap": {
    "server": "imap.gmail.com",
    "port": 993,
    "username": "info@rocket.chat",
    "password": "kkviepoenakbccwf",
    "secure": true
  },
  "_createdAt": "2021-02-02T16:32:15.069Z",
  "_updatedAt": "2021-09-06T17:43:49.257Z",
  "_createdBy": {
    "_id": "JxemcN9PDCdfzJeZr",
    "username": "ren.be"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Resource not found"
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
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-email-inbox-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-email-inbox-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|active|boolean|false|none|none|
|name|string|false|none|none|
|email|string|false|none|none|
|description|string|false|none|none|
|senderInfo|string|false|none|none|
|department|string|false|none|none|
|smtp|object|false|none|none|
|» server|string|false|none|none|
|» port|integer|false|none|none|
|» username|string|false|none|none|
|» password|string|false|none|none|
|» secure|boolean|false|none|none|
|imap|object|false|none|none|
|» server|string|false|none|none|
|» port|integer|false|none|none|
|» username|string|false|none|none|
|» password|string|false|none|none|
|» secure|boolean|false|none|none|
|_createdAt|string|false|none|none|
|_updatedAt|string|false|none|none|
|_createdBy|object|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Email Inbox by ID

<a id="opIddelete-api-v1-email-inbox-_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/email-inbox/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`DELETE /api/v1/email-inbox/{_id}`

Delete Omnichannel email inbox using ID.

Permissions required: `manage-email-inbox`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.11.0-rc.0         | Added       |

<h3 id="delete-email-inbox-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|_id|path|string|true|Enter the email inbox ID.|

> Example responses

> 200 Response

```json
{
  "_id": "61717dd1066bc500096cb36d",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Resource not found"
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
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="delete-email-inbox-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="delete-email-inbox-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Search Email Inbox

<a id="opIdget-api-v1-email-inbox.search"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/email-inbox.search?email=info%40rockt.chat' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/email-inbox.search`

Searches Omnichannel email inbox by email address.

Permissions required: `manage-email-inbox`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.11.0-rc.0         | Added       |

<h3 id="search-email-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|email|query|string|true|Enter the email inbox address.|

> Example responses

> 200 Response

```json
{
  "emailInbox": {
    "_id": "60197e8ff82d6c83b96c53ff",
    "active": false,
    "name": "Rocket.Chat sample account",
    "email": "info@rocket.chat",
    "description": "",
    "senderInfo": "",
    "department": "GgYvrkAF63aeQmsh4",
    "smtp": {
      "server": "smtp.gmail.com",
      "port": 465,
      "username": "info@rocket.chat",
      "password": "kkviepoenakbccwf",
      "secure": true
    },
    "imap": {
      "server": "imap.gmail.com",
      "port": 993,
      "username": "info@rocket.chat",
      "password": "kkviepoenakbccwf",
      "secure": true
    },
    "_createdAt": "2021-02-02T16:32:15.069Z",
    "_updatedAt": "2021-09-06T17:43:49.257Z",
    "_createdBy": {
      "_id": "JxemcN9PDCdfzJeZr",
      "username": "renato.becker"
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="search-email-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="search-email-inbox-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailInbox|object|false|none|none|
|» _id|string|false|none|none|
|» active|boolean|false|none|none|
|» name|string|false|none|none|
|» email|string|false|none|none|
|» description|string|false|none|none|
|» senderInfo|string|false|none|none|
|» department|string|false|none|none|
|» smtp|object|false|none|none|
|» » server|string|false|none|none|
|» » port|integer|false|none|none|
|» » username|string|false|none|none|
|» » password|string|false|none|none|
|» » secure|boolean|false|none|none|
|» imap|object|false|none|none|
|» » server|string|false|none|none|
|» » port|integer|false|none|none|
|» » username|string|false|none|none|
|» » password|string|false|none|none|
|» » secure|boolean|false|none|none|
|» _createdAt|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» _createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|success|boolean|false|none|none|

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

## Send Test Email

<a id="opIdpost-api-v1-email-inbox.send-test-id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/email-inbox.send-test/60197e8ff82d6c83b96c53ff \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`POST /api/v1/email-inbox.send-test/{_id}`

Send a test email from an Omnichannel email inbox to check its configuration. The workspace sends the email through the inbox's SMTP server to the verified email address of the authenticated user.

The authenticated user must have a verified email address.

A successful response means the workspace queued the email. It doesn't confirm that the email was delivered.

Permission required: `manage-email-inbox`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.11.0         | Added       |

<h3 id="send-test-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|_id|path|string|true|Enter the email inbox ID.|

> Example responses

> 200 Response

```json
{
  "_id": "60197e8ff82d6c83b96c53ff",
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="send-test-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="send-test-email-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|success|boolean|false|none|none|

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

<h1 id="miscellaneous-licenses">Licenses</h1>

## Get Licenses

<a id="opIdget-api-v1-licenses.info"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/licenses.info \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/licenses.info`

Retrieves a list of all registered licenses and the details in the workspace.

Permission required: `view-privileged-setting`.

The `licenses.isEnterprise` and `licenses.get` endpoints have been removed from 7.0. Use this endpoint instead.

<h3 id="get-licenses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "license": {
    "license": {
      "version": "3.0",
      "information": {
        "id": "6569155ab286e50001b78ec1",
        "autoRenew": true,
        "createdAt": "2024-03-17T00:51:43.529361607Z",
        "visualExpiration": "2024-03-10T00:00:00Z",
        "notifyAdminsAt": "2024-03-10T00:00:00Z",
        "notifyUsersAt": "2024-03-10T00:00:00Z",
        "trial": true,
        "cancellable": true,
        "offline": false,
        "grantedBy": {},
        "grantedTo": {},
        "tags": [
          {
            "name": "Enterprise trial",
            "color": "#F3BE08"
          }
        ]
      },
      "validation": {
        "serverUrls": [
          {
            "value": "testspace.rocket.chat",
            "type": "url"
          }
        ],
        "cloudWorkspaceId": "64df890111e1f20001d201b4",
        "serverUniqueId": "tgxSuzXmWe68S3kWR",
        "validPeriods": [
          {
            "validUntil": "2024-03-24T00:00:00Z",
            "invalidBehavior": "invalidate_license"
          }
        ],
        "legalTextAgreement": {
          "type": "required",
          "acceptedVia": "cloud"
        },
        "statisticsReport": {
          "required": true,
          "allowedStaleInDays": 2
        }
      },
      "grantedModules": [
        {
          "module": "auditing"
        },
        {
          "module": "canned-responses"
        },
        {
          "module": "ldap-enterprise"
        },
        {
          "module": "livechat-enterprise"
        },
        {
          "module": "voip-enterprise"
        },
        {
          "module": "omnichannel-mobile-enterprise"
        },
        {
          "module": "engagement-dashboard"
        },
        {
          "module": "push-privacy"
        },
        {
          "module": "scalability"
        },
        {
          "module": "teams-mention"
        },
        {
          "module": "saml-enterprise"
        },
        {
          "module": "oauth-enterprise"
        },
        {
          "module": "device-management"
        },
        {
          "module": "federation"
        },
        {
          "module": "videoconference-enterprise"
        },
        {
          "module": "message-read-receipt"
        },
        {
          "module": "outlook-calendar"
        },
        {
          "module": "hide-watermark"
        },
        {
          "module": "custom-roles"
        },
        {
          "module": "accessibility-certification"
        }
      ],
      "limits": {
        "guestUsers": [
          {
            "max": 235,
            "behavior": "start_fair_policy"
          },
          {
            "max": 235,
            "behavior": "prevent_action"
          }
        ],
        "roomsPerGuest": [
          {
            "max": 1,
            "behavior": "start_fair_policy"
          },
          {
            "max": 1,
            "behavior": "prevent_action"
          }
        ],
        "monthlyActiveContacts": [
          {
            "max": -1,
            "behavior": "start_fair_policy"
          },
          {
            "max": -1,
            "behavior": "prevent_action"
          }
        ]
      },
      "cloudMeta": {}
    },
    "activeModules": [
      "auditing",
      "canned-responses",
      "ldap-enterprise",
      "livechat-enterprise",
      "voip-enterprise",
      "omnichannel-mobile-enterprise",
      "engagement-dashboard",
      "push-privacy",
      "scalability",
      "teams-mention",
      "saml-enterprise",
      "oauth-enterprise",
      "device-management",
      "federation",
      "videoconference-enterprise",
      "message-read-receipt",
      "outlook-calendar",
      "hide-watermark",
      "custom-roles",
      "accessibility-certification"
    ],
    "preventedActions": {
      "activeUsers": false,
      "guestUsers": false,
      "roomsPerGuest": false,
      "privateApps": false,
      "marketplaceApps": false,
      "monthlyActiveContacts": false
    },
    "limits": {
      "activeUsers": {
        "max": -1
      },
      "guestUsers": {
        "max": 235
      },
      "privateApps": {
        "max": -1
      },
      "marketplaceApps": {
        "max": -1
      },
      "monthlyActiveContacts": {
        "max": -1
      }
    },
    "tags": [
      {
        "name": "Enterprise trial",
        "color": "#F3BE08"
      }
    ],
    "trial": true
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

<h3 id="get-licenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-licenses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|license|object|false|none|none|
|» license|object|false|none|none|
|» » version|string|false|none|none|
|» » information|object|false|none|none|
|» » » id|string|false|none|none|
|» » » autoRenew|boolean|false|none|none|
|» » » createdAt|string|false|none|none|
|» » » visualExpiration|string|false|none|none|
|» » » notifyAdminsAt|string|false|none|none|
|» » » notifyUsersAt|string|false|none|none|
|» » » trial|boolean|false|none|none|
|» » » cancellable|boolean|false|none|none|
|» » » offline|boolean|false|none|none|
|» » » grantedBy|object|false|none|none|
|» » » grantedTo|object|false|none|none|
|» » » tags|[object]|false|none|none|
|» » » » name|string|false|none|none|
|» » » » color|string|false|none|none|
|» » validation|object|false|none|none|
|» » » serverUrls|[object]|false|none|none|
|» » » » value|string|false|none|none|
|» » » » type|string|false|none|none|
|» » » cloudWorkspaceId|string|false|none|none|
|» » » serverUniqueId|string|false|none|none|
|» » » validPeriods|[object]|false|none|none|
|» » » » validUntil|string|false|none|none|
|» » » » invalidBehavior|string|false|none|none|
|» » » legalTextAgreement|object|false|none|none|
|» » » » type|string|false|none|none|
|» » » » acceptedVia|string|false|none|none|
|» » » statisticsReport|object|false|none|none|
|» » » » required|boolean|false|none|none|
|» » » » allowedStaleInDays|integer|false|none|none|
|» » grantedModules|[object]|false|none|none|
|» » » module|string|false|none|none|
|» » limits|object|false|none|none|
|» » » guestUsers|[object]|false|none|none|
|» » » » max|integer|false|none|none|
|» » » » behavior|string|false|none|none|
|» » » roomsPerGuest|[object]|false|none|none|
|» » » » max|integer|false|none|none|
|» » » » behavior|string|false|none|none|
|» » » monthlyActiveContacts|[object]|false|none|none|
|» » » » max|integer|false|none|none|
|» » » » behavior|string|false|none|none|
|» » cloudMeta|object|false|none|none|
|» activeModules|[string]|false|none|none|
|» preventedActions|object|false|none|none|
|» » activeUsers|boolean|false|none|none|
|» » guestUsers|boolean|false|none|none|
|» » roomsPerGuest|boolean|false|none|none|
|» » privateApps|boolean|false|none|none|
|» » marketplaceApps|boolean|false|none|none|
|» » monthlyActiveContacts|boolean|false|none|none|
|» limits|object|false|none|none|
|» » activeUsers|object|false|none|none|
|» » » max|integer|false|none|none|
|» » guestUsers|object|false|none|none|
|» » » max|integer|false|none|none|
|» » privateApps|object|false|none|none|
|» » » max|integer|false|none|none|
|» » marketplaceApps|object|false|none|none|
|» » » max|integer|false|none|none|
|» » monthlyActiveContacts|object|false|none|none|
|» » » max|integer|false|none|none|
|» tags|[object]|false|none|none|
|» » name|string|false|none|none|
|» » color|string|false|none|none|
|» trial|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add License

<a id="opIdpost-api-v1-licenses.add"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/licenses.add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "license": "VFJ0vHf3Jm9AR0minB342MLaHRlZdc3Du5nf0E5Sv0QJ4SUkEIaU2boCYaDsxQ2N1UL4uhLjCF9M7iCZ/yxafJjxbHvOu1D5rOfdgO4RKlAGE9tGHDidJR9crJyXVb16jPHHvLSkUFzb7HoIq/nUXxU8gEgT3uJ9u2+Dw5ukDLX3SG2AFq1hLoPSZqsP6g2AQo="
  }'
```

`POST /api/v1/licenses.add`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

You may want to <a href="https://docs.rocket.chat/docs/rocketchat-air-gapped-deployment" target="_blank">deploy your workspace in an air-gapped environment</a>. Since the server has no internet to communicate with the cloud, we provide a license for your subscribed plan that you can apply manually to upgrade your workspace.

Permission required: `edit-privileged-setting`.
### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.10.0         | Added       |

A successful response only means the license provided follows the accepted format. Check your <a href="https://docs.rocket.chat/docs/subscription" target="_blank">workspace subscription</a> to confirm if the license is valid and was applied to your workspace. Alternatively, you can check <b><a href="https://developer.rocket.chat/apidocs/get-licenses-1" target="_blank">Get Licenses</a></b> endpoint.

> Body parameter

```json
{
  "license": "VFJ0vHf3Jm9AR0minB342MLaHRlZdc3Du5nf0E5Sv0QJ4SUkEIaU2boCYaDsxQ2N1UL4uhLjCF9M7iCZ/yxafJjxbHvOu1D5rOfdgO4RKlAGE9tGHDidJR9crJyXVb16jPHHvLSkUFzb7HoIq/nUXxU8gEgT3uJ9u2+Dw5ukDLX3SG2AFq1hLoPSZqsP6g2AQo="
}
```

<h3 id="add-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» license|body|string|false|none|

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
  "errorType": "error-invalid-params",
  "error": "must have required property 'license'"
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
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="add-license-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="add-license-responseschema">Response Schema</h3>

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

## Validate License

<a id="opIdpost-api-v1-licenses.validate"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/licenses.validate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "license": "VFJ0vHf3Jm9AR0minB342MLaHRlZdc3Du5nf0E5Sv0QJ4SUkEIaU2boCYaDsxQ2N1UL4uhLjCF9M7iCZ/yxafJjxbHvOu1D5rOfdgO4RKlAGE9tGHDidJR9crJyXVb16jPHHvLSkUFzb7HoIq/nUXxU8gEgT3uJ9u2+Dw5ukDLX3SG2AFq1hLoPSZqsP6g2AQo="
  }'
```

`POST /api/v1/licenses.validate`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Validates a Rocket.Chat license against the current workspace without applying it. Use this endpoint to preview a license before applying it with the <b><a href="https://developer.rocket.chat/apidocs/add-license" target="_blank">Add License</a></b> endpoint. It accepts both V2 and V3 (JWT) license formats.

A valid license returns a success response. An invalid license returns a failure response with the validation behaviors that rejected it listed in the `reasons` array.

Permission required: `edit-privileged-setting`.
### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.7.0         | Added       |

> Body parameter

```json
{
  "license": "VFJ0vHf3Jm9AR0minB342MLaHRlZdc3Du5nf0E5Sv0QJ4SUkEIaU2boCYaDsxQ2N1UL4uhLjCF9M7iCZ/yxafJjxbHvOu1D5rOfdgO4RKlAGE9tGHDidJR9crJyXVb16jPHHvLSkUFzb7HoIq/nUXxU8gEgT3uJ9u2+Dw5ukDLX3SG2AFq1hLoPSZqsP6g2AQo="
}
```

<h3 id="validate-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» license|body|string|true|The encrypted license string to validate.|

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
  "error": "license-invalid",
  "reasons": [
    {
      "behavior": "invalidate_license",
      "reason": "url"
    }
  ]
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
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="validate-license-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="validate-license-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|reasons|[object]|false|none|none|
|» behavior|string|false|none|none|
|» reason|string|false|none|none|
|» modules|[string]|false|none|none|
|» limit|string|false|none|none|

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

## Get Maximum Active User

<a id="opIdget-licenses.maxActiveUsers"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/licenses.maxActiveUsers \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/licenses.maxActiveUsers`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Retrieves a list of the maximum active users.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|4.0.0         | Added       |

<h3 id="get-maximum-active-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "maxActiveUsers": 25,
  "activeUsers": 0,
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

<h3 id="get-maximum-active-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-maximum-active-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxActiveUsers|integer|false|none|none|
|activeUsers|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="miscellaneous-mailer">Mailer</h1>

## Send Mailer Endpoint

<a id="opIdpost-api-v1-mailer"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/mailer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "from": "test.test@test.com",
    "subject": "Welcome to the Test Newsletter",
    "body": "Thank you for subscribing to the Test Newsletter. If this was not you feel free to unsubscribe by hitting the following button [unsubscribe]",
    "dryrun": "true"
  }'
```

`POST /api/v1/mailer`

Send emails to users from your workspace. Make sure that you have configured the <a href='https://docs.rocket.chat/docs/configure-email' target='_blank'>email settings</a> in the workspace.

| Version      | Description |
| ---------------- | ------------|
|5.4.0      | Added      |

> Body parameter

```json
{
  "from": "test.test@test.com",
  "subject": "Welcome to the Test Newsletter",
  "body": "Thank you for subscribing to the Test Newsletter. If this was not you feel free to unsubscribe by hitting the following button [unsubscribe]",
  "dryrun": "true"
}
```

<h3 id="send-mailer-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» from|body|string|true|A valid email address to send mails from.|
|» subject|body|string|true|The subject of the email.|
|» body|body|string|false|The body of the email. You must use `[unsubscribe]` for the unsubscription link. You may use `[name]`, `[fname]`, `[lname]` for the user's full name, first name or last name, respectively. You may use `[email]` for the user's email.|
|» dryrun|body|string|false|A boolean value. If true, will only send one email to the same address as in the `From` parameter.|

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
  "error": "Invalid from address [error-invalid-from-address]",
  "errorType": "error-invalid-from-address",
  "details": {
    "function": "Mailer.sendMail"
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

<h3 id="send-mailer-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="send-mailer-endpoint-responseschema">Response Schema</h3>

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
|details|object|false|none|none|
|» function|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Mailer Unsubscribe Endpoint

<a id="opIdpost-api-v1-mailer.unsubscribe"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/mailer.unsubscribe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "_id": "c6Lsa9SFVFxJLR56H",
    "createdAt": "1692284808957"
  }'
```

`POST /api/v1/mailer.unsubscribe`

Send emails to users from your workspace.

### Changelog
| Version      | Description |
| ------------ | ------------|
|5.4.0         | Added      |

> Body parameter

```json
{
  "_id": "c6Lsa9SFVFxJLR56H",
  "createdAt": "1692284808957"
}
```

<h3 id="mailer-unsubscribe-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» _id|body|string|true|The user id of the user that created the mailer|
|» createdAt|body|string|true|The time the mailer was created|

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

<h3 id="mailer-unsubscribe-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="mailer-unsubscribe-endpoint-responseschema">Response Schema</h3>

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

<h1 id="miscellaneous-calendar-events">Calendar Events</h1>

## Get List of Calendar Events

<a id="opIdget-api-v1-calendar-events.list"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/calendar-events.list?date=2025-01-01' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/calendar-events.list`

Use this endpoint to view the list of your calendar events for a specific date.

<h3 id="get-list-of-calendar-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|date|query|string|true|Enter the date for which you want to view the calendar events. Use the format YYYY-MM-DD.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "_id": "690b02874e7e8bcf6985b27a",
      "uid": "C38WSSzrGd2NCjzqJ",
      "startTime": "2025-03-26T07:17:00.000Z",
      "endTime": "2025-03-26T07:18:00.000Z",
      "subject": "Subject8",
      "description": "Description8",
      "meetingUrl": null,
      "reminderMinutesBeforeStart": 10,
      "reminderTime": "2025-03-26T07:07:00.000Z",
      "notificationSent": false,
      "_updatedAt": "2025-11-05T07:53:43.420Z"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'date' [error-invalid-params]",
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

<h3 id="get-list-of-calendar-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-list-of-calendar-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
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

## Get Calendar Event Info

<a id="opIdget-api-v1-calendar-events.info"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/calendar-events.info?id=6909b8ea4e7e8bcf6985b1a8' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/calendar-events.info`

Use this endpoint to get information about a specific calendar event.

<h3 id="get-calendar-event-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|id|query|string|true|Enter the event ID.|

> Example responses

> 200 Response

```json
{
  "event": {
    "_id": "690b02874e7e8bcf6985b27a",
    "uid": "C38WSSzrGd2NCjzqJ",
    "startTime": "2025-03-26T07:17:00.000Z",
    "endTime": "2025-03-26T07:18:00.000Z",
    "subject": "Subject8",
    "description": "Description8",
    "meetingUrl": null,
    "reminderMinutesBeforeStart": 10,
    "reminderTime": "2025-03-26T07:07:00.000Z",
    "notificationSent": false,
    "_updatedAt": "2025-11-05T07:53:43.420Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'id' [error-invalid-params]",
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

<h3 id="get-calendar-event-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-calendar-event-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|false|none|none|
|» _id|string|false|none|none|
|» uid|string|false|none|none|
|» startTime|string|false|none|none|
|» endTime|string|false|none|none|
|» subject|string|false|none|none|
|» description|string|false|none|none|
|» meetingUrl|string \| null|false|none|none|
|» reminderMinutesBeforeStart|integer|false|none|none|
|» reminderTime|string|false|none|none|
|» notificationSent|boolean|false|none|none|
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

## Create Calendar Event

<a id="opIdpost-api-v1-calendar-events.create"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/calendar-events.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "startTime": "2025-11-05T07:17:00.000Z",
    "endTime": "2025-11-05T07:18:00.000Z",
    "subject": "Subject8",
    "description": "Description8",
    "reminderMinutesBeforeStart": 10
  }'
```

`POST /api/v1/calendar-events.create`

Create a new calendar event.

> Body parameter

```json
{
  "startTime": "2025-11-05T07:17:00.000Z",
  "endTime": "2025-11-05T07:18:00.000Z",
  "subject": "Subject8",
  "description": "Description8",
  "reminderMinutesBeforeStart": 10
}
```

<h3 id="create-calendar-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» startTime|body|string|true|Enter the time at which the event starts.|
|» endTime|body|string|false|Enter the time at which the event ends.|
|» subject|body|string|true|Enter a subject for the event.|
|» description|body|string|true|Enter a description for the event.|
|» reminderMinutesBeforeStart|body|integer|false|Enter the number of minutes before the event that the reminder should be sent.|
|» busy|body|boolean|false|Enter whether or not you want to set your status as busy.|
|» externalId|body|string|false|If you want to use an external event from another calendar, enter the event ID (eid) of the external calendar event.|

> Example responses

> 200 Response

```json
{
  "id": "690b08674e7e8bcf6985b2d5",
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

<h3 id="create-calendar-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="create-calendar-event-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update Calendar Event

<a id="opIdpost-api-v1-calendar-events.update"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/calendar-events.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "eventId": "690b08674e7e8bcf6985b2d5",
    "startTime": "2025-11-05T07:17:00.000Z",
    "endTime": "2025-11-05T07:18:00.000Z",
    "subject": "Subject8",
    "description": "Description8",
    "reminderMinutesBeforeStart": 10
  }'
```

`POST /api/v1/calendar-events.update`

Update an existing calendar event.

> Body parameter

```json
{
  "eventId": "690b08674e7e8bcf6985b2d5",
  "startTime": "2025-11-05T07:17:00.000Z",
  "endTime": "2025-11-05T07:18:00.000Z",
  "subject": "Subject8",
  "description": "Description8",
  "reminderMinutesBeforeStart": 10
}
```

<h3 id="update-calendar-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» eventId|body|string|true|Enter the event ID that you want to update.|
|» startTime|body|string|true|Enter the time at which the event starts.|
|» endTime|body|string|false|Enter the time at which the event ends.|
|» subject|body|string|true|Enter a subject for the event.|
|» description|body|string|true|Enter a description for the event.|
|» reminderMinutesBeforeStart|body|integer|false|Enter the number of minutes before the event that the reminder should be sent.|
|» busy|body|boolean|false|Enter whether or not you want to set your status as busy.|

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
  "error": "must have required property 'eventId' [error-invalid-params]",
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

<h3 id="update-calendar-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="update-calendar-event-responseschema">Response Schema</h3>

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

## Delete Calendar Event

<a id="opIdpost-api-v1-calendar-events.delete"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/calendar-events.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "eventId": "6909b8ea4e7e8bcf6985b1a8"
  }'
```

`POST /api/v1/calendar-events.delete`

Delete a specific calendar event.

> Body parameter

```json
{
  "eventId": "6909b8ea4e7e8bcf6985b1a8"
}
```

<h3 id="delete-calendar-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» eventId|body|string|true|Enter the event ID that you want to delete.|

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
  "error": "invalid-calendar-event"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="delete-calendar-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="delete-calendar-event-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

## Import Calendar Event

<a id="opIdpost-api-v1-calendar-events.import"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/calendar-events.import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "externalId": "NWwwcnU3NmM1NW03dDRtZGdkMWNjNDRmamsgcmFjaGFuYS52aXNhdmFkaXlhQHJvY2tldC5jaGF0",
    "startTime": "2025-11-05T07:17:00.000Z",
    "endTime": "2025-11-05T07:18:00.000Z",
    "subject": "Subject8",
    "description": "Description8",
    "reminderMinutesBeforeStart": 10,
    "busy": true
  }'
```

`POST /api/v1/calendar-events.import`

Use this endpoint to import an exteral calendar event.

> Body parameter

```json
{
  "externalId": "NWwwcnU3NmM1NW03dDRtZGdkMWNjNDRmamsgcmFjaGFuYS52aXNhdmFkaXlhQHJvY2tldC5jaGF0",
  "startTime": "2025-11-05T07:17:00.000Z",
  "endTime": "2025-11-05T07:18:00.000Z",
  "subject": "Subject8",
  "description": "Description8",
  "reminderMinutesBeforeStart": 10,
  "busy": true
}
```

<h3 id="import-calendar-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» externalId|body|string|true|Enter the event ID (eid) of the external calendar event.|
|» startTime|body|string|true|Enter the time at which the event begins.|
|» endTime|body|string|false|Enter the time at which the event ends.|
|» subject|body|string|true|Enter the event subject.|
|» description|body|string|true|Enter the event description.|
|» reminderMinutesBeforeStart|body|integer|false|Enter the number of minutes before the event that the reminder must be sent.|
|» busy|body|boolean|false|Enter whether or not you want to set your status as busy.|

> Example responses

> 200 Response

```json
{
  "id": "690c2b2d4e7e8bcf6985b3d8",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'externalId' [error-invalid-params]",
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

<h3 id="import-calendar-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="import-calendar-event-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
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

<h1 id="miscellaneous-whatsapp">WhatsApp</h1>

## Send a WhatsApp Template Message

<a id="opIdpost-api-apps-public-app_id-templateMessage"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/apps/public/string/templateMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "phoneNumbers": [
      "2368106035555"
    ],
    "connectedWhatsAppNo": "104920685899299",
    "template": {
      "name": "ship",
      "language": {
        "code": "en",
        "policy": "deterministic"
      },
      "components": [
        {
          "type": "body",
          "parameters": [
            {
              "type": "text",
              "text": "20"
            }
          ]
        }
      ]
    }
  }'
```

`POST /api/apps/public/{appId}/templateMessage`

Use this endpoint to send WhatsApp template messages directly to specified contacts from your workspace.

1. Click the **Marketplace** icon from the main menu. Select **Explore** from the drop-down menu.
2. Locate your preferred <a href="https://docs.rocket.chat/docs/whatsapp-apps" target="_blank">WhatsApp App</a>.
3. Go to *App Info > Details > APIs* and find the `POST templateMessage` section.
4. Copy the `POST templateMessage` endpoint URL for your WhatsApp app from the provided curl example. This URL includes the required `appId`. Send a template message request using this URL as the endpoint.

Before sending template messages from Rocket.Chat through any <a href="https://docs.rocket.chat/docs/whatsapp-apps" target="_blank">WhatsApp App</a>, ensure that you have set up the templates in respective WhatsApp provider account. Refer to the official guide for details on <a href="https://developer.rocket.chat/docs/whatsapp-business-template-messages#set-up-template-messages-on-whatsapp" target="_blank">configuring template messages for each WhatsApp app</a>.

> Body parameter

```json
{
  "phoneNumbers": [
    "2368106035555"
  ],
  "connectedWhatsAppNo": "104920685899299",
  "template": {
    "name": "ship",
    "language": {
      "code": "en",
      "policy": "deterministic"
    },
    "components": [
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "20"
          }
        ]
      }
    ]
  }
}
```

<h3 id="send-a-whatsapp-template-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|body|body|object|false|We strongly recommend including the + prefix for all phone numbers in the payload. While you can submit numbers without the leading + sign, we have encountered cases where WhatsApp will return an invalid response despite the number being in use.|
|» phoneNumbers|body|[string]|true|Recipient WhatsApp IDs where you want to send the template message. You can validate a WhatsApp id from <a href="https://developers.facebook.com/docs/whatsapp/on-premises/reference/contacts" target="_blank">here</a>.|
|» connectedWhatsAppNo|body|string|true|The WhatsApp Number from which you want to send this template message. The WhatsApp number connected to your workspace via the app.|
|» targetAgent|body|string|false|Username of the agent you want to transfer the chat to when the WhatsApp user replies.|
|» targetDepartment|body|string|false|Department name or ID where you want to transfer the chat to when the WhatsApp user replies.|
|» template|body|object|true|Provide the details of the template message you want to send. The structure of the template object may differ depending on the template defined within your WhatsApp provider account. For further clarification, refer to the official guide on <a href="https://developer.rocket.chat/docs/whatsapp-business-template-messages#api-endpoint" target="_blank">sending template messages via API in Rocket.Chat</a>. The example template object provided here is based on the configuration outlined in the official guide for the <a href="https://developer.rocket.chat/docs/whatsapp-business-template-messages#whatsapp-cloud" target="_blank">WhatsApp Cloud App</a>.<br><br>If your template message includes parameters, make sure to replace all of them with the appropriate information before sending. Failure to do so may lead to an error.|
|» » namespace|body|string|false|none|
|» » name|body|string|false|none|
|» » language|body|object|false|none|
|» » » code|body|string|false|none|
|» » » policy|body|string|false|none|
|» » components|body|[object]|false|none|
|» » » type|body|string|false|none|
|» » » parameters|body|[object]|false|none|
|» » » » type|body|string|false|none|
|» » » » text|body|string|false|none|

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
  "error": "Too many phone numbers! Please make sure that phoneNumbers are <= 250"
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
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="send-a-whatsapp-template-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="send-a-whatsapp-template-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="miscellaneous-rasa-app">Rasa App</h1>

## Close Chat or Perform Handover

<a id="opIdpost-api-apps-public-app-id-incoming"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/apps/public/string/incoming \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "action": "close-chat",
    "sessionId": "2Sfq8wXw4fYPMf6r4"
  }'
```

`POST /api/apps/public/{app-id}/incoming`

Close a chat session or perform handover. The appropriate endpoint URL including the `appId` for  closing chat or perfoming handover in your workspace is displayed under **App Info > Details > APIs > POST incoming** section of the Rasa app.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|5.0.0     | Added       |

> Body parameter

```json
{
  "action": "close-chat",
  "sessionId": "2Sfq8wXw4fYPMf6r4"
}
```

<h3 id="close-chat-or-perform-handover-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|app-id|path|string|true|The app id. Navigate to App Info > Details > APIs > POST incoming to get the complete URL for this endpoint.|
|body|body|object|false|none|
|» action|body|string|true|The action can either be `handover` or `close-chat`. |
|» sessionId|body|string|true|The ID of the Rasa session.|
|» actionData|body|object|false|none|
|» » targetDepartment|body|string|false|The targeted department.|

> Example responses

> 200 Response

```json
{
  "msg": " Close chat request handled successfully"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="close-chat-or-perform-handover-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="close-chat-or-perform-handover-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="miscellaneous-jitsi-app">Jitsi App</h1>

## Update Jitsi Timeout

<a id="opIdpost-api-v1-video-conference-jitsi.update-timeout"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/video-conference/jitsi.update-timeout \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "roomId": "hyoM5JSQi94RwqPE7"
  }'
```

`POST /api/v1/video-conference/jitsi.update-timeout`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.74.0        | Added       |

> Body parameter

```json
{
  "roomId": "hyoM5JSQi94RwqPE7"
}
```

<h3 id="update-jitsi-timeout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The room Id of the room to update the jitsi timeout.|

> Example responses

> 200 Response

```json
{
  "jitsiTimeout": "2019-01-16T13:17:11.951Z",
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

<h3 id="update-jitsi-timeout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="update-jitsi-timeout-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jitsiTimeout|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="miscellaneous-default">Default</h1>

## Shield SVG

<a id="opIdget-api-v1-shield.svg"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/shield.svg?channel=general&name=Rocket.Chat'
```

`GET /api/v1/shield.svg`

A simple method, requires no authentication, that returns the shield svg(badge) to add in your website. It must have `API_Enable_Shields` enabled.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.55.0        | Added       |

<h3 id="shield-svg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|Can either be `online`, `user`, `channel`|
|icon|query|string|false|none|
|channel|query|string|true|Name of the channel|
|name|query|string|true|Name to show|

> Example responses

> 200 Response

```text
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="141" height="20"> <linearGradient id="b" x2="0" y2="100%"> <stop offset="0" stop-color="#bbb" stop-opacity=".1"/> <stop offset="1" stop-opacity=".1"/> </linearGradient> <mask id="a"> <rect width="141" height="20" rx="3" fill="#fff"/> </mask> <g mask="url(#a)"> <path fill="#555" d="M0 0h67v20H0z"/> <path fill="#4c1" d="M67 0h74v20H67z"/> <path fill="url(#b)" d="M0 0h141v20H0z"/> </g> <image x="5" y="3" width="14" height="14" xlink:href="/assets/favicon.svg"/> <g fill="#fff" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11"> <text x="24" y="15" fill="#010101" fill-opacity=".3">Rocket</text> <text x="24" y="14">Rocket</text> <text x="74" y="15" fill="#010101" fill-opacity=".3">JOIN CHAT</text> <text x="74" y="14">JOIN CHAT</text> </g> </svg>
```

<h3 id="shield-svg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Content-Type|string||image/svg+xml;charset=utf-8|

<aside class="success">
This operation does not require authentication
</aside>

## Spotlight

<a id="opIdget-api-v1-spotlight"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/spotlight?query=john' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/spotlight`

Searches for users or rooms that are visible to the user. It will only return rooms that user didn't join yet.

If the  <a href="https://docs.rocket.chat/docs/accounts" target="_blank">`Allow Anonymous Read` setting</a> is enabled, anonymous callers can use this endpoint to resolve public channels through the navbar search.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.9.0       | Changed the rate limit to 100 requests every 100 seconds per client IP address. |
|8.6.0       | Added `usernames`, `type`, and `rid` query parameters, and allowed anonymous read when `Allow Anonymous Read` is enabled. |
|0.64.0       | Added support to '#' and '@' searches, for channels and users respectively.       |
|0.61.0      | Added       |

<h3 id="spotlight-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|query|query|string|true|The term to be searched. Supports '#' for channels and '@' for users|
|usernames|query|string|false|Comma-separated list of usernames to exclude from the user results.|
|type|query|string|false|Restricts the search to a single result type. Accepts `users` or `rooms`.|
|rid|query|string|false|The room ID to scope the user search to a specific room.|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "_id": "rocket.cat",
      "name": "Rocket.Cat",
      "username": "rocket.cat",
      "status": "online",
      "avatarETag": "5BB9B5ny5DkKdrwkq"
    }
  ],
  "rooms": [],
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

<h3 id="spotlight-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="spotlight-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» username|string|false|none|none|
|» status|string|false|none|none|
|» avatarETag|string|false|none|none|
|rooms|[object]|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Check SMTP

<a id="opIdget-api-v1-smtp.check"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/smtp.check \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/smtp.check`

Use this endpoint to verify whether or not SMTP has been configured in the workspace.

<h3 id="check-smtp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "isSMTPConfigured": true,
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

<h3 id="check-smtp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="check-smtp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isSMTPConfigured|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update Fingerprint

<a id="opIdpost-api-v1-fingerprint"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/fingerprint \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "setDeploymentAs": "new-workspace"
  }'
```

`POST /api/v1/fingerprint`

Confirms how the workspace deployment should be handled after Rocket.Chat detects a change to its deployment fingerprint.

On startup, Rocket.Chat generates a deployment fingerprint based on the configured Site_Url and MongoDB connection string. If the generated fingerprint differs from the stored value, Rocket.Chat assumes the workspace may have been duplicated, migrated, or reconfigured.

Use this endpoint to confirm how the deployment should be treated:

- `new-workspace`: Treats the deployment as a new workspace. This clears the existing Rocket.Chat Cloud registration data and related credentials so the workspace can register again as a new instance. Use this option for cloned environments, staging instances created from production backups, or other duplicated deployments.

- `updated-configuration`: Confirms that the deployment is the same workspace and that only its configuration has changed. This preserves the existing Rocket.Chat Cloud registration and is intended for legitimate migrations, infrastructure changes, or Site_Url updates.

After processing either option, Rocket.Chat marks the deployment fingerprint as verified and dismisses the fingerprint verification prompt.

Permission required: `manage-cloud`
  
### Changelog
| Version | Description | 
| ------- | ----------- | 
|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |
| 8.6.0 | Added an authorization check. Callers without the `manage-cloud` permission now receive a `403` error instead of a successful response. |

> Body parameter

```json
{
  "setDeploymentAs": "new-workspace"
}
```

<h3 id="update-fingerprint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» setDeploymentAs|body|string|true|Specifies how Rocket.Chat should handle a detected deployment fingerprint change. Use `new-workspace` to reset the current workspace registration and register the deployment as a new workspace, or `updated-configuration` to preserve the existing workspace registration and confirm that only the deployment configuration has changed. Either `new-workspace` or `updated-configuration`.|

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
  "error": "Invalid body params",
  "errorType": "error-invalid-body-params"
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
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="update-fingerprint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="update-fingerprint-responseschema">Response Schema</h3>

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
