<h1 id="rooms">Rooms v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://apiexplorer.support.rocket.chat">https://apiexplorer.support.rocket.chat</a>

<h1 id="rooms-channels">Channels</h1>

## Create Channel

<a id="opIdpost-api-v1-channels.create"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "name": "channelname",
    "members": [
      "rocket.cat"
    ],
    "readOnly": true,
    "excludeSelf": true,
    "customFields": {
      "type": "default"
    },
    "extraData": {
      "broadcast": true,
      "encrypted": false,
      "teamId": "658441562dd9f928ad9951aa"
    }
  }'
```

`POST /api/v1/channels.create`

Create a public channel. Optionally, include specified users. The channel creator is included as a member by default. Permission required: `create-c`.
Channel naming has restraints following the regex filter `[0-9a-zA-Z-_.]+` by default. See <a href="https://docs.rocket.chat/docs/general#utf8" target="_blank">UTF8 Settings</a> to modify regex filter for channel names. Channel names must not allow for any whitespaces.

### Changelog

| Version | Description               |
| ------- | ------------------------- |
| 6.4.1   | Added `excludeSelf` param |
| 0.13.0  | Added                     |

> Body parameter

```json
{
  "name": "channelname",
  "members": [
    "rocket.cat"
  ],
  "readOnly": true,
  "excludeSelf": true,
  "customFields": {
    "type": "default"
  },
  "extraData": {
    "broadcast": true,
    "encrypted": false,
    "teamId": "658441562dd9f928ad9951aa"
  }
}
```

<h3 id="create-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» name|body|string|true|The name of the channel.|
|» members|body|[string]|false|An array of the users to be added to the channel when it is created.|
|» readOnly|body|boolean|false|Set if the channel is read only or not. It is `false` by default.|
|» excludeSelf|body|boolean|false|If set to true, the user calling the endpoint is not automatically added as a member of the channel. The default `value` is false.|
|» customFields|body|object|false|If you have defined custom fields for your workspace, you can provide them in this object parameter. For details, see the <a href='https://docs.rocket.chat/docs/custom-fields' target='_blank'>Custom Fields</a> document.|
|» extraData|body|object|false|Additional channel settings applied at creation.<br>For more information, see <a href='https://docs.rocket.chat/use-rocket.chat/user-guides/rooms/channels#channel-privacy-and-encryption' target='_blank'>Channels</a>.|
|» » broadcast|body|boolean|false|Whether the channel should be a broadcast room.|
|» » encrypted|body|boolean|false|Whether the channel should be encrypted.|
|» » teamId|body|string|false|An existing team ID to associate with this channel. Requires the `create-team-channel` permission.|
|» » topic|body|string|false|The topic of the channel.|
|» » federated|body|boolean|false|Whether the channel should be federated (Matrix federation).|

> Example responses

> 200 Response

```json
{
  "channel": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "channelname",
    "t": "c",
    "usernames": [
      "example"
    ],
    "msgs": 0,
    "u": {
      "_id": "aobEdbYhXfu5hkeqG",
      "username": "example"
    },
    "ts": "2016-05-30T13:42:25.304Z"
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

<h3 id="create-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="create-channel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» customFields|object|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add all Users to a Channel

<a id="opIdpost-api-v1-channels.addAll"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.addAll \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "WDuJLFkjwk6L7LdFC",
    "activeUsersOnly": true
  }'
```

`POST /api/v1/channels.addAll`

Adds all users in the workspace to a public room. Permission required: `add-all-to-room`.
The maximum number of users you can add at once depends on your workspace's REST API settings. To access this setting, go to **Manage** > **Workspace** > **Settings** > **General** > **REST API** > **User Limit for Adding All Users to Channel**.

### Changelog
| Version | Description               |
| ------- | ------------------------- |
|0.55.0   | Added `activeUsersOnly` param |
|0.48.0   | Renamed to `channels.addAll` from `channel.addAll`|

> Body parameter

```json
{
  "roomId": "WDuJLFkjwk6L7LdFC",
  "activeUsersOnly": true
}
```

<h3 id="add-all-users-to-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel's ID.|
|» activeUsersOnly|body|boolean|false|Add only active users. It is `false` by default.|

> Example responses

> 200 Response

```json
{
  "channel": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "channelname",
    "t": "c",
    "usernames": [
      "example",
      "rocket.cat"
    ],
    "msgs": 0,
    "u": {
      "_id": "aobEdbYhXfu5hkeqG",
      "username": "example"
    },
    "ts": "2016-05-30T13:42:25.304Z"
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

<h3 id="add-all-users-to-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="add-all-users-to-a-channel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» customFields|object|false|none|none|
|» topic|string|false|none|none|
|» broadcast|boolean|false|none|none|
|» encrypted|boolean|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
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
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
|» lm|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add Channel Leader

<a id="opIdpost-api-v1-channels.addLeader"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.addLeader \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "WDuJLFkjwk6L7LdFC",
    "userId": "b66oZ8i9pkeSko33v"
  }'
```

`POST /api/v1/channels.addLeader`

Assign the role of `leader` to a channel member. See <a href='https://docs.rocket.chat/docs/room-roles' target='_blank'>Room Roles</a> for details about the roles.

Permission required: `set-leader`
### Changelog
| Version | Description               |
| ------- | ------------------------- |
| 0.75.0   | Added                    |

> Body parameter

```json
{
  "roomId": "WDuJLFkjwk6L7LdFC",
  "userId": "b66oZ8i9pkeSko33v"
}
```

<h3 id="add-channel-leader-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel ID.|
|» userId|body|string|true|The ID of the user to be made leader.|

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
  "error": "User is already a leader [error-user-already-leader]",
  "errorType": "error-user-already-leader"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="add-channel-leader-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="add-channel-leader-responseschema">Response Schema</h3>

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

## Add Channel Moderator

<a id="opIdpost-api-v1-channels.addModerator"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.addModerator \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "WDuJLFkjwk6L7LdFC",
    "userId": "b66oZ8i9pkeSko33v"
  }'
```

`POST /api/v1/channels.addModerator`

Assign the `moderator` role to a channel member. See <a href='https://docs.rocket.chat/docs/room-roles' target='_blank'>Room Roles</a> for details about the roles.

Permission required: `set-moderator`

### Changelog
| Version | Description               |
| ------- | ------------------------- |
| 0.49.4  | Added                     |

> Body parameter

```json
{
  "roomId": "WDuJLFkjwk6L7LdFC",
  "userId": "b66oZ8i9pkeSko33v"
}
```

<h3 id="add-channel-moderator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel ID.|
|» userId|body|string|true|The user ID that you want to set as the moderator.|

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
  "error": "User is already a moderator [error-user-already-moderator]",
  "errorType": "error-user-already-moderator"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="add-channel-moderator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="add-channel-moderator-responseschema">Response Schema</h3>

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

## Add Channel Owner

<a id="opIdpost-api-v1-channels.addOwner"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.addOwner \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "WDuJLFkjwk6L7LdFC",
    "userId": "b66oZ8i9pkeSko33v"
  }'
```

`POST /api/v1/channels.addOwner`

Assign the `owner` role to a channel member. See <a href='https://docs.rocket.chat/docs/room-roles' target='_blank'>Room Roles</a> for details about the roles.

Permission required:  `set-owner`
### Changelog
| Version | Description               |
| ------- | ------------------------- |
| 0.49.4   | Added                    |

> Body parameter

```json
{
  "roomId": "WDuJLFkjwk6L7LdFC",
  "userId": "b66oZ8i9pkeSko33v"
}
```

<h3 id="add-channel-owner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel ID.|
|» userId|body|string|true|The user ID that you want to set as the channel owner.|

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
  "error": "User is already an owner [error-user-already-owner]",
  "errorType": "error-user-already-owner",
  "details": {
    "method": "addRoomOwner"
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

<h3 id="add-channel-owner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="add-channel-owner-responseschema">Response Schema</h3>

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
|» method|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Read Channel Messages Anonymously

<a id="opIdget-api-v1-channels.anonymousread"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.anonymousread \
  -H 'Accept: application/json'
```

`GET /api/v1/channels.anonymousread`

Fetch the messages in a public channel to an anonymous user. You must enable `Accounts_AllowAnonymousRead` <a href="https://docs.rocket.chat/docs/accounts" target="_blank">setting</a> in the workspace.

### Changelog
| Version | Description               |
| ------- | ------------------------- |
|9.0.0   | Removed the `fields` and `query` parameters.       |
| 1.2.0   | Added                     |

<h3 id="read-channel-messages-anonymously-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|roomId|query|string|false|The room ID. It is required if the `roomName` is not provided.|
|roomName|query|string|false|The room name.  It is required if the `roomId` is not provided.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "_id": "xadufzmxzYQp4H9py",
      "alias": "test",
      "msg": "Example message",
      "attachments": [],
      "parseUrls": true,
      "bot": {
        "i": "MnQyfhWt5LqZotyfc"
      },
      "groupable": false,
      "ts": "2018-10-05T01:10:47.524Z",
      "u": {
        "_id": "rocket.cat",
        "username": "rocket.cat",
        "name": "Rocket.Cat"
      },
      "rid": "GENERAL",
      "_updatedAt": "2018-10-05T13:42:51.163Z",
      "reactions": {
        ":grin:": {
          "usernames": [
            "marco.zoo"
          ]
        }
      },
      "mentions": [],
      "channels": [],
      "starred": {
        "_id": "KPkEYwKKBKZnEEPpt"
      }
    },
    {
      "_id": "id-1538701845987",
      "rid": "GENERAL",
      "msg": "This message was edited via API",
      "alias": "Gruggy",
      "emoji": ":smirk:",
      "avatar": "http://res.guggy.com/logo_128.png",
      "attachments": [
        {
          "collapsed": false,
          "color": "#ff0000",
          "text": "Yay for gruggy!",
          "ts": "2016-12-09T16:53:06.761Z",
          "message_link": "https://google.com",
          "thumb_url": "http://res.guggy.com/logo_128.png",
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
              "value": "<a href=\"https://google.com\" target=\"_blank\">Link</a> something and this and that."
            }
          ]
        }
      ],
      "ts": "2018-10-05T01:10:45.994Z",
      "u": {
        "_id": "rocketchat.internal.admin.test",
        "username": "rocketchat.internal.admin.test",
        "name": "RocketChat Internal Admin Test"
      },
      "_updatedAt": "2018-10-05T01:10:47.064Z",
      "editedBy": {
        "_id": "rocketchat.internal.admin.test",
        "username": "rocketchat.internal.admin.test"
      },
      "editedAt": "2018-10-05T01:10:46.384Z",
      "reactions": {
        ":smile:": {
          "usernames": [
            "rocketchat.internal.admin.test"
          ]
        },
        ":squid:": {
          "usernames": [
            "rocketchat.internal.admin.test"
          ]
        },
        ":bee:": {
          "usernames": [
            "rocketchat.internal.admin.test"
          ]
        },
        ":ant:": {
          "usernames": [
            "rocketchat.internal.admin.test"
          ]
        }
      },
      "mentions": [],
      "channels": [],
      "urls": []
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
  "error": "The required \"roomId\" or \"roomName\" param provided does not match any channel [error-room-not-found]",
  "errorType": "error-room-not-found"
}
```

<h3 id="read-channel-messages-anonymously-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="read-channel-messages-anonymously-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|none|
|» _id|string|false|none|none|
|» t|string|false|none|none|
|» msg|string|false|none|none|
|» groupable|boolean|false|none|none|
|» blocks|[object]|false|none|none|
|» » type|string|false|none|none|
|» » blockId|string|false|none|none|
|» » callId|string|false|none|none|
|» » appId|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» rid|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» urls|[object]|false|none|none|
|» mentions|[object]|false|none|none|
|» channels|[object]|false|none|none|
|» md|[object]|false|none|none|
|» » type|string|false|none|none|
|» » value|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» attachments|[[Attachment](#schemaattachment)]|false|none|none|
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

<aside class="success">
This operation does not require authentication
</aside>

## Archive Channel

<a id="opIdpost-api-v1-channels.archive"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.archive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX"
  }'
```

`POST /api/v1/channels.archive`

Archive a channel. Permission required: `archive-room`
### Changelog
| Version | Description               |
| ------- | ------------------------- |
| 0.48.0  | Added                    |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX"
}
```

<h3 id="archive-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel ID that you want to archive.|

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
  "error": "The channel, add-room-websocket, is archived [error-room-archived]",
  "errorType": "error-room-archived"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="archive-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="archive-channel-responseschema">Response Schema</h3>

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

## Close Channel

<a id="opIdpost-api-v1-channels.close"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.close \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX"
  }'
```

`POST /api/v1/channels.close`

Remove a channel from the user's list of channels in the workspace sidebar. You can access it again from the **Directory**.
### Changelog
| Version | Description               |
| ------- | ------------------------- |
| 0.48.0  | Added                     |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX"
}
```

<h3 id="close-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel ID that you want to close from your list.|

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
  "error": "The channel, dlp, is already closed to the sender"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="close-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="close-channel-responseschema">Response Schema</h3>

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

## Get Channel Counters

<a id="opIdget-api-v1-channels.counters"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.counters \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/channels.counters`

Gets channel counter for the authenticated user.

Permission required: `view-room-administration`
### Changelog
| Version | Description               |
| ------- | ------------------------- |
| 0.65.0  | Added                     |

<h3 id="get-channel-counters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|false|The room ID. It is required if the `roomName` is not provided.|
|roomName|query|string|false|The room name.  It is required if the `roomId` is not provided.|
|userId|query|string|false|The user ID.|

> Example responses

> 200 Response

```json
{
  "joined": true,
  "members": 23,
  "unreads": 2,
  "unreadsFrom": "2023-09-12T16:33:11.644Z",
  "msgs": 7345,
  "latest": "2023-09-25T22:50:07.979Z",
  "userMentions": 0,
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

<h3 id="get-channel-counters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK<br><br>**Note** <br>- `joined` boolean flag whether the user has joined the room or not.<br>- `members` is the count of current room members.<br>- `unreads` is the count of unread messages for the specified user (for the calling user or the provided user ID).<br>- `unreadsFrom` is the start date-time of unread interval for the specified user.<br>- `msgs` is the count of messages in the room.<br>- `latest` is the end date-time of unread interval for the specified user (or date-time of last posted message).<br>- `userMentions` is the count of user mentions in messages.|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-channel-counters-responseschema">Response Schema</h3>

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

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Channel

<a id="opIdpost-api-v1-channels.delete"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "roomName": "general"
  }'
```

`POST /api/v1/channels.delete`

Delete a channel. Any of the permssions are required:
* `delete-c`: Delete a public channel.
* `delete-team-channel`: Delete a channel part of a team. You also need the `delete-c` permission.

### Changelog

| Version | Description               |
| ------- | ------------------------- |
| 0.71.0  | Removed `channel` property|
| 0.49.0  | Added                     |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "roomName": "general"
}
```

<h3 id="delete-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|false|Enter the room ID. This parameter is required if no `roomName` is provided.|
|» roomName|body|string|false|Enter the room name. This parameter is required if no `roomId` is provided.|

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

<h3 id="delete-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="delete-channel-responseschema">Response Schema</h3>

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

## Get Channel Files

<a id="opIdget-api-v1-channels.files"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.files \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f'
```

`GET /api/v1/channels.files`

Retrieves all the media files from a channel.

### Changelog
| Version | Description               |
| ------- | ------------------------- |
|9.0.0   | Removed the `fields` and `query` parameters.       |
| 0.64.0 | Change userId to user object in response                    |
| 0.59.0  | Added                  |

<h3 id="get-channel-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|roomId|query|string|false|The room ID. It is required if the `roomName` is not provided.|
|roomName|query|string|false|The room name.  It is required if the `roomId` is not provided.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|typeGroup|query|string|false|Filter results by the type of file. Available options:<br>- `all`: Return all file types.<br>- `image`: Filter by image files.<br>- `video`: Filter by video files.<br>- `audio`: Filter by audio files.<br>- `text`: Filter by text documents.<br>- `application`: Filter by other file types.|
|name|query|string|false|The name of the file to search for.|

> Example responses

> 200 Response

```json
{
  "files": [
    {
      "_id": "651227bea2f73c7460e18c63",
      "name": "Screenshot (317).png",
      "size": 288727,
      "type": "image/png",
      "rid": "siyr2oWQJBjQjhLwr",
      "userId": "rbAXPnMktTFbNpwtJ",
      "store": "GridFS:Uploads",
      "_updatedAt": "2023-09-26T00:37:19.598Z",
      "identify": {
        "format": "png",
        "size": {
          "width": 1920,
          "height": 1080
        }
      },
      "complete": true,
      "etag": "2Q2D8hSxCdhQLzcpx",
      "path": "/file-upload/651227bea2f73c7460e18c63/Screenshot%20(317).png",
      "progress": 1,
      "token": "da2aCAf88a",
      "uploadedAt": "2023-09-26T00:37:18.168Z",
      "uploading": false,
      "url": "http://localhost:3000/file-upload/651227bea2f73c7460e18c63/Screenshot%20(317).png",
      "typeGroup": "image",
      "user": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie",
        "name": "test test"
      }
    },
    {
      "_id": "64b589e6aa5ad4273bfc4db6",
      "name": "eicar.zip",
      "size": 266,
      "type": "application/x-zip-compressed",
      "rid": "siyr2oWQJBjQjhLwr",
      "userId": "rbAXPnMktTFbNpwtJ",
      "store": "GridFS:Uploads",
      "_updatedAt": "2023-07-17T18:35:18.242Z",
      "complete": true,
      "etag": "JYaAzzFQSnxYQ7rWW",
      "path": "/file-upload/64b589e6aa5ad4273bfc4db6/eicar.zip",
      "progress": 1,
      "token": "7a1A38Cb5a",
      "uploadedAt": "2023-07-17T18:35:18.216Z",
      "uploading": false,
      "url": "http://localhost:3000/file-upload/64b589e6aa5ad4273bfc4db6/eicar.zip",
      "typeGroup": "application",
      "user": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie",
        "name": "test test"
      }
    }
  ],
  "count": 2,
  "offset": 0,
  "total": 2,
  "success": true
}
```

<h3 id="get-channel-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-channel-files-responseschema">Response Schema</h3>

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
|» identify|object|false|none|none|
|» » format|string|false|none|none|
|» » size|object|false|none|none|
|» » » width|integer|false|none|none|
|» » » height|integer|false|none|none|
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

<aside class="success">
This operation does not require authentication
</aside>

## Get Channel History

<a id="opIdget-api-v1-channels.history"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.history \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/channels.history`

Retrieves the history of a channel. You must be a member of the channel or have the `preview-c-room` permission.

### Changelog
| Version | Description               |
| ------- | ------------------------- |
| 0.75.0 | Added offset property      |
| 0.47.0  | Added                     |

<h3 id="get-channel-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|false|The room ID. It is required if the `roomName` is not provided.|
|roomName|query|string|false|The room name.  It is required if the `roomId` is not provided.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|latest|query|string|false|The end of time range of messages to retrieve. The default value is the current date and time.|
|oldest|query|string|false|The start of the time range of messages to retrieve|
|inclusive|query|boolean|false|Whether messages which land on the latest and oldest dates should be included. The default value is false.|
|showThreadMessages|query|boolean|false|Whether thread messages should be included in the response|
|unreads|query|boolean|false|Whether the number of unread messages should be included. The default value is false.|

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

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-channel-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-channel-history-responseschema">Response Schema</h3>

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
|» identify|object|false|none|none|
|» » format|string|false|none|none|
|» » size|object|false|none|none|
|» » » width|integer|false|none|none|
|» » » height|integer|false|none|none|
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

## Get Channel Information

<a id="opIdget-api-v1-channels.info"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.info \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/channels.info`

Retrieves the information about the channel. This does not include archived channels. You must be a member of the channel.

### Changelog
| Version | Description               |
| ------- | ------------------------- |
| 0.48.0  | Added                  |

<h3 id="get-channel-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|false|The room ID. It is required if the `roomName` is not provided.|
|roomName|query|string|false|The room name.  It is required if the `roomId` is not provided.|

> Example responses

> 200 Response

```json
{
  "channel": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "testing",
    "fname": "testing",
    "t": "c",
    "msgs": 0,
    "usersCount": 2,
    "u": {
      "_id": "HKKPmF8rZh45GMHWH",
      "username": "marcos.defendi"
    },
    "customFields": {},
    "broadcast": false,
    "encrypted": false,
    "ts": "2020-05-21T13:14:07.070Z",
    "ro": false,
    "default": false,
    "sysMes": true,
    "_updatedAt": "2020-05-21T13:14:07.096Z"
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

<h3 id="get-channel-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-channel-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» customFields|object|false|none|none|
|» topic|string|false|none|none|
|» broadcast|boolean|false|none|none|
|» encrypted|boolean|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
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
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
|» lm|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add Users to Channel

<a id="opIdpost-api-v1-channels.invite"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.invite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "nSYqWzZ4GsKTX4dyK",
    "userId": "ByehQjC44FwMeiLbX"
  }'
```

`POST /api/v1/channels.invite`

Add a user or bulk users to a channel.

For a user to invite other users, they must match at least one of the following premises:
- The user is a member of the channel and has the `add-user-to-joined-room` (Add user to any joined channel) permission.
- The user has the `add-user-to-any-c-room` (Add user to any public channel) permission.

You can identify the channel by `roomId` or `roomName`, and the users either by ID (`userId`, `userIds`) or by username (`username`, `user`, `usernames`). You cannot mix IDs and usernames in the same request.

Users that do not exist are skipped and the valid users are invited. If none of the users you provide exist, the request fails with `invalid-user-invite-list`. Users who are already members of the channel are ignored, and the request still succeeds.

### Changelog

| Version | Description               |
| ------- | ------------------------- |
| 9.0.0   | Added the `userIds` and `usernames` parameters to invite multiple users in one request. |
| 0.48.0  | Added                  |

> Body parameter

```json
{
  "roomId": "nSYqWzZ4GsKTX4dyK",
  "userId": "ByehQjC44FwMeiLbX"
}
```

<h3 id="add-users-to-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|false|The channel's ID. This parameter is required if no `roomName` is provided.|
|» roomName|body|string|false|The channel's name. This parameter is required if no `roomId` is provided.|
|» userId|body|string|false|The ID of the user to invite. Cannot be combined with `username`, `user`, or `usernames`.|
|» userIds|body|[string]|false|An array of IDs of the users to invite. Cannot be combined with `username`, `user`, or `usernames`.|
|» username|body|string|false|The username of the user to invite. Cannot be combined with `userId` or `userIds`.|
|» user|body|string|false|The username of the user to invite. Alternative to `username`. Cannot be combined with `userId` or `userIds`.|
|» usernames|body|[string]|false|An array of usernames of the users to invite. Cannot be combined with `userId` or `userIds`.|

> Example responses

> 200 Response

```json
{
  "channel": {
    "_id": "nSYqWzZ4GsKTX4dyK",
    "fname": "testing",
    "_updatedAt": "2026-11-02T20:32:22.790Z",
    "name": "testing",
    "t": "c",
    "msgs": 2,
    "usersCount": 3,
    "u": {
      "_id": "uXquEbv7EkGHfBLa3",
      "username": "admin",
      "name": "Admin"
    },
    "ts": "2026-11-02T20:32:22.614Z",
    "ro": false,
    "default": false,
    "sysMes": true
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "errorType": "error-invalid-params",
  "error": "must NOT be valid"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="add-users-to-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="add-users-to-channel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» customFields|object|false|none|none|
|» description|string|false|none|none|
|» broadcast|boolean|false|none|none|
|» encrypted|boolean|false|none|none|
|» federated|boolean|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» lm|string|false|none|none|
|» lastMessage|object|false|none|none|
|» » _id|string|false|none|none|
|» » t|string|false|none|none|
|» » msg|string|false|none|none|
|» » groupable|boolean|false|none|none|
|» » blocks|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » blockId|string|false|none|none|
|» » » callId|string|false|none|none|
|» » » appId|string|false|none|none|
|» » ts|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » rid|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » urls|[object]|false|none|none|
|» » mentions|[object]|false|none|none|
|» » channels|[object]|false|none|none|
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

## Join a Channel

<a id="opIdpost-api-v1-channels.join"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.join \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "joinCode": "1234"
  }'
```

`POST /api/v1/channels.join`

Join a public channel.

### Changelog
| Version | Description               |
| ------- | ------------------------- |
| 0.49.0  | Added                  |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "joinCode": "1234"
}
```

<h3 id="join-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel ID.|
|» joinCode|body|string|false|The join code of the room. Channels can be password-protected. In that case, users must enter the password for access. See <a href='https://docs.rocket.chat/docs/channels#channel-information' target='_blank'>Channel information</a> for details.<br>The join code isn't needed if the user has the `join-without-join-code` permission.|

> Example responses

> 200 Response

```json
{
  "channel": {
    "_id": "nxXKHF2o2nzKYtFMM",
    "name": "test",
    "fname": "test",
    "t": "c",
    "msgs": 8,
    "usersCount": 2,
    "u": {
      "_id": "rocketchat.internal.admin.test",
      "username": "rocketchat.internal.admin.test"
    },
    "customFields": {},
    "broadcast": false,
    "encrypted": false,
    "ts": "2019-01-16T12:00:04.783Z",
    "ro": false,
    "sysMes": true,
    "default": false,
    "_updatedAt": "2019-01-16T12:06:30.426Z",
    "joinCodeRequired": true
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

<h3 id="join-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="join-a-channel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» customFields|object|false|none|none|
|» topic|string|false|none|none|
|» broadcast|boolean|false|none|none|
|» encrypted|boolean|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
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
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
|» lm|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Remove User from Channel

<a id="opIdpost-api-v1-channels.kick"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.kick \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "roomId": "WDuJLFkjwk6L7LdFC",
    "userId": "rYhzFRd2QZjNwAAXX"
  }'
```

`POST /api/v1/channels.kick`

Remove a user from the channel.

Permissions required:
* `remove-user`: To remove a user from any room.
* `kick-user-from-any-c-room`: To remove a user from a public channel. You also need the `remove-user` permission.

### Changelog
| Version | Description               |
| ------- | ------------------------- |
| 0.48.0  | Added                     |

> Body parameter

```json
{
  "roomId": "WDuJLFkjwk6L7LdFC",
  "userId": "rYhzFRd2QZjNwAAXX"
}
```

<h3 id="remove-user-from-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» roomId|body|string|true|The channel's id|
|» userId|body|string|true|The id of the user to be removed.|

> Example responses

> 200 Response

```json
{
  "channel": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "invite-me",
    "t": "c",
    "usernames": [
      "testing1"
    ],
    "msgs": 0,
    "u": {
      "_id": "aobEdbYhXfu5hkeqG",
      "username": "testing1"
    },
    "ts": "2016-12-09T15:08:58.042Z",
    "ro": false,
    "sysMes": true,
    "_updatedAt": "2016-12-09T15:22:40.656Z"
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

<h3 id="remove-user-from-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="remove-user-from-channel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» customFields|object|false|none|none|
|» topic|string|false|none|none|
|» broadcast|boolean|false|none|none|
|» encrypted|boolean|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
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
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
|» lm|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Leave Channel

<a id="opIdpost-api-v1-channels.leave"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.leave \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX"
  }'
```

`POST /api/v1/channels.leave`

Leave a public channel. Permission required: `leave-c`
### Changelog
| Version | Description               |
| ------- | ------------------------- |
| 0.48.0  | Added                  |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX"
}
```

<h3 id="leave-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|false|The channel ID that you want to leave.|

> Example responses

> 200 Response

```json
{
  "channel": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "invite-me",
    "t": "c",
    "usernames": [
      "testing2"
    ],
    "msgs": 0,
    "u": {
      "_id": "aobEdbYhXfu5hkeqG",
      "username": "testing1"
    },
    "ts": "2016-12-09T15:08:58.042Z",
    "ro": false,
    "sysMes": true,
    "_updatedAt": "2016-12-09T15:22:40.656Z"
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

<h3 id="leave-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="leave-channel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» usernames|[string]|false|none|none|
|» msgs|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get List of Joined Channels

<a id="opIdget-api-v1-channels.list.joined"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.list.joined \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/channels.list.joined`

Lists all the channels the authenticated user has joined. 
### Changelog
| Version | Description                                  |
| ------- | -------------------------------------------- |
|9.0.0   | Removed the `fields` and `query` parameters.       |
| 0.62.0  | Add `query` parameter support.               |
| 0.49.0  | Count and offset query parameters supported. |
| 0.48.0  | Added                                        |

<h3 id="get-list-of-joined-channels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "channels": [
    {
      "_id": "ByehQjC44FwMeiLbX",
      "name": "invite-me",
      "t": "c",
      "usernames": [
        "testing1"
      ],
      "msgs": 0,
      "u": {
        "_id": "aobEdbYhXfu5hkeqG",
        "username": "testing1"
      },
      "ts": "2016-12-09T15:08:58.042Z",
      "ro": false,
      "sysMes": true,
      "_updatedAt": "2016-12-09T15:22:40.656Z"
    }
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

<h3 id="get-list-of-joined-channels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-list-of-joined-channels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[object]|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» customFields|object|false|none|none|
|» description|string|false|none|none|
|» broadcast|boolean|false|none|none|
|» encrypted|boolean|false|none|none|
|» federated|boolean|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» lm|string|false|none|none|
|» lastMessage|object|false|none|none|
|» » _id|string|false|none|none|
|» » t|string|false|none|none|
|» » msg|string|false|none|none|
|» » groupable|boolean|false|none|none|
|» » blocks|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » blockId|string|false|none|none|
|» » » callId|string|false|none|none|
|» » » appId|string|false|none|none|
|» » ts|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » rid|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » urls|[object]|false|none|none|
|» » mentions|[object]|false|none|none|
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
|» topic|string|false|none|none|
|» muted|[object]|false|none|none|
|» unmuted|[string]|false|none|none|
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

## Get Channel List

<a id="opIdget-api-v1-channels.list"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.list \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/channels.list`

Lists all the channels in the workspace. Any of the following permissions are required:
* `view-c-room`
* `view-joined-room`

### Changelog
| Version | Description                                  |
| ------- | -------------------------------------------- |
|9.0.0   | Removed the `fields` and `query` parameters.       |
| 0.49.0  | Count and offset query parameters supported. |
| 0.48.0  | Added                                        |

<h3 id="get-channel-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|string|false|Sort the channels in ascending (`1`) or descending (`-1`) order. The value must be entered as a JSON object. The options are as follows:<br> * `name`: Sort by the channel name. For example, `sort={"name":1}` (this is the default sorting mechanism).<br> * `ts`: Sort by channel creation timestamp. For example, `sort={"ts":-1}`<br> * `usersCount`: Sort by the number of users in the channel. For example, `sort={"usersCount":1}`|

> Example responses

> 200 Response

```json
{
  "channels": [
    {
      "_id": "GENERAL",
      "ts": "2024-02-14T14:34:49.365Z",
      "t": "c",
      "name": "general",
      "usernames": [],
      "msgs": 6,
      "usersCount": 6,
      "_updatedAt": "2024-03-26T17:40:18.321Z",
      "u": {
        "_id": "rocket.cat",
        "username": "rocket.cat",
        "name": "Rocket.Cat"
      },
      "default": true
    },
    {
      "_id": "65fd8a6bf581e473b56471ba",
      "fname": "test-channel",
      "_updatedAt": "2024-03-22T13:40:59.620Z",
      "customFields": {},
      "topic": "",
      "broadcast": false,
      "encrypted": false,
      "name": "test-channel",
      "t": "c",
      "msgs": 0,
      "usersCount": 1,
      "u": {
        "_id": "GdEsNbLxzoBgG8XoQ",
        "username": "apiadmin",
        "name": "apiadmin"
      },
      "ts": "2024-03-22T13:40:59.577Z",
      "ro": false,
      "default": false,
      "sysMes": true
    }
  ],
  "count": 2,
  "offset": 0,
  "total": 3,
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

<h3 id="get-channel-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-channel-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[object]|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» customFields|object|false|none|none|
|» topic|string|false|none|none|
|» broadcast|boolean|false|none|none|
|» encrypted|boolean|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
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
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
|» » groupable|boolean|false|none|none|
|» » blocks|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » text|object|false|none|none|
|» » » » type|string|false|none|none|
|» » » » text|string|false|none|none|
|» » » blockId|string|false|none|none|
|» » » appId|string|false|none|none|
|» » » elements|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » text|string|false|none|none|
|» » » » emoji|boolean|false|none|none|
|» » editedAt|string|false|none|none|
|» » editedBy|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» lm|string|false|none|none|
|» description|string|false|none|none|
|» federated|boolean|false|none|none|
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

## Get Members of a Channel

<a id="opIdget-api-v1-channels.members"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.members \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/channels.members`

Lists all channel users. The list of elements a user can use to sort the list is limited. The current sortable element is: `username`.

If the channel is a broadcast channel, you need the `view-broadcast-member-list` permission.

### Changelog
| Version | Description                                  |
| ------- | -------------------------------------------- |
| 0.59.0  | Added                                        |

<h3 id="get-members-of-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|false|The room ID. It is required if the `roomName` is not provided.|
|roomName|query|string|false|The room name.  It is required if the `roomId` is not provided.|
|status|query|[string]|false|The user's status (search filter).|
|filter|query|string|false|Extra search filters to be applied to the fields defined in the `Accounts_SearchFields`setting.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "members": [
    {
      "_id": "rbAXPnMktTFbNpwtJ",
      "username": "roxie",
      "status": "offline",
      "_updatedAt": "2023-09-24T22:27:33.610Z",
      "name": "test test",
      "nickname": "baby girl"
    },
    {
      "_id": "5fRTXMt7DMJbpPJfh",
      "username": "test.test",
      "status": "offline",
      "_updatedAt": "2023-09-16T08:33:38.123Z",
      "name": "Testtest",
      "avatarETag": "GFoEi6wv3uAxnzDcD",
      "nickname": "test.test"
    }
  ],
  "count": 2,
  "offset": 0,
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

<h3 id="get-members-of-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-members-of-a-channel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[object]|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» status|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» name|string|false|none|none|
|» nickname|string|false|none|none|
|» avatarETag|string|false|none|none|
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

## Get Channel Messages

<a id="opIdget-api-v1-channels.messages"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/channels.messages?roomId=jdiue8TGkodp' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/channels.messages`

Lists all the channel's messages. Permissions required: `view-c-room`, `view-joined-room`

### Changelog

| Version | Description                                  |
| ------- | -------------------------------------------- |
|9.0.0   | Removed the `query` parameter.       |
| 7.0.0  | Added `mentionIds`, `starredIds`, `pinned` query parameters.|        
| 0.59.0  | Added                                        |

<h3 id="get-channel-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|The room id.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|mentionIds|query|string|false|Filter the messages where a user has been mentioned by the userId. For a set of userIds, use an array (`["838ndhd79w", "dud0wu900"]`).|
|starredIds|query|string|false|Filter the messages a user have starred by userId. For a set of userIds, use an array (`["838ndhd79w", "dud0wu900"]`).|
|pinned|query|string|false|Filter pinned messages.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "_id": "uASTuwBEu7SBDAxxh",
      "rid": "6513afeda2f73c7460e18c86",
      "msg": "threaads produced links",
      "ts": "2023-09-27T04:36:47.522Z",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie",
        "name": "test test"
      },
      "_updatedAt": "2023-09-27T04:36:47.698Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "threaads produced links"
            }
          ]
        }
      ]
    },
    {
      "_id": "B7Yms4bCvgJsitrBq",
      "rid": "6513afeda2f73c7460e18c86",
      "msg": "always do",
      "ts": "2023-09-27T04:34:38.818Z",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie",
        "name": "test test"
      },
      "_updatedAt": "2023-09-27T04:34:38.900Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "always do"
            }
          ]
        }
      ]
    },
    {
      "_id": "3rfQYmS8MzCKnQbcu",
      "rid": "6513afeda2f73c7460e18c86",
      "msg": "",
      "ts": "2023-09-27T04:34:34.259Z",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie",
        "name": "test test"
      },
      "_updatedAt": "2023-09-27T04:36:38.258Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "replies": [
        "rbAXPnMktTFbNpwtJ"
      ],
      "tcount": 0,
      "tlm": "2023-09-27T04:34:50.746Z",
      "attachments": [],
      "editedAt": "2023-09-27T04:36:19.494Z",
      "editedBy": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie"
      },
      "reactions": {},
      "t": "rm"
    },
    {
      "_id": "6513b143a2f73c7460e18c88",
      "rid": "6513afeda2f73c7460e18c86",
      "msg": "test messages",
      "ts": "2023-09-27T04:34:34.259Z",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie",
        "name": "test test"
      },
      "_updatedAt": "2023-09-27T04:36:19.486Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "test messages"
            }
          ]
        }
      ],
      "replies": [
        "rbAXPnMktTFbNpwtJ"
      ],
      "tcount": 1,
      "tlm": "2023-09-27T04:34:50.746Z",
      "_hidden": true,
      "parent": "3rfQYmS8MzCKnQbcu",
      "editedAt": "2023-09-27T04:36:19.485Z",
      "editedBy": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie"
      }
    }
  ],
  "count": 4,
  "offset": 0,
  "total": 4,
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

<h3 id="get-channel-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-channel-messages-responseschema">Response Schema</h3>

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
|» replies|[string]|false|none|none|
|» tcount|integer|false|none|none|
|» tlm|string|false|none|none|
|» attachments|[[Attachment](#schemaattachment)]|false|none|none|
|» editedAt|string|false|none|none|
|» editedBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» reactions|object|false|none|none|
|» t|string|false|none|none|
|» _hidden|boolean|false|none|none|
|» parent|string|false|none|none|
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

## Get Channel Moderators

<a id="opIdget-api-v1-channels.moderators"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.moderators \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/channels.moderators`


List all the moderators in a channel.

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.70.0 | Added        |

<h3 id="get-channel-moderators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|false|The room ID. It is required if the `roomName` is not provided.|
|roomName|query|string|false|The room name.  It is required if the `roomId` is not provided.|

> Example responses

> 200 Response

```json
{
  "moderators": [
    {
      "_id": "rocket.cat",
      "username": "rocket.cat",
      "name": "Rocket.Cat"
    }
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

<h3 id="get-channel-moderators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-channel-moderators-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|moderators|[object]|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» name|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List Online Users in a Channel

<a id="opIdget-api-v1-channels.online"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/channels.online?_id=5HmCfpoB7jp2uibTC' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/channels.online`

List all online users in a particular channel. 
### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0   | Made the `_id` parameter required.       |
|0.52.0   | Added       |
|7.0.0   | Replaced `query` parameter with `_id` parameter       |

<h3 id="list-online-users-in-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|_id|query|string|true|The channel's id.|

> Example responses

> 200 Response

```json
{
  "online": [
    {
      "_id": "47cRd58HnWwpqxhaZ",
      "username": "test"
    },
    {
      "_id": "BsxzC22xQ43taWdff",
      "username": "uniqueusername"
    }
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

<h3 id="list-online-users-in-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-online-users-in-a-channel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|online|[object]|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add Channel to User List

<a id="opIdpost-api-v1-channels.open"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.open \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX"
  }'
```

`POST /api/v1/channels.open`

Add a channel back to the user's list of channels in the workspace's sidebar.
### Changelog

| Version | Description |
| ------- | ----------- |
|9.0.0   | Removed the `query` parameter.       |
|0.48.0   | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX"
}
```

<h3 id="add-channel-to-user-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel's ID.|

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

<h3 id="add-channel-to-user-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="add-channel-to-user-list-responseschema">Response Schema</h3>

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

## Remove Channel Leader

<a id="opIdpost-api-v1-channels.removeLeader"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.removeLeader \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "userId": "oCHkav5Zf6vmpu2W2"
  }'
```

`POST /api/v1/channels.removeLeader`

Remove the `leader` role from a user in a channel. 

Permission required: `set-leader` .

### Changelog

| Version | Description |
| ------- | ----------- |
|0.75.0  | Added       |


> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "userId": "oCHkav5Zf6vmpu2W2"
}
```

<h3 id="remove-channel-leader-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel's id|
|» userId|body|string|true|The user's id|

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
  "error": "User is not a leader [error-user-not-leader]",
  "errorType": "error-user-not-leader"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="remove-channel-leader-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="remove-channel-leader-responseschema">Response Schema</h3>

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

## Remove Channel Moderator

<a id="opIdpost-api-v1-channels.removeModerator"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.removeModerator \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "userId": "oCHkav5Zf6vmpu2W2"
  }'
```

`POST /api/v1/channels.removeModerator`

Remove the `moderator` role from a user in a channel.

Permission required: `set-moderator`.

### Changelog

| Version | Description |
| ------- | ----------- |
|0.49.4  | Added       |


> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "userId": "oCHkav5Zf6vmpu2W2"
}
```

<h3 id="remove-channel-moderator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel's id|
|» userId|body|string|true|The user's id|

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
  "error": "User is not a moderator [error-user-not-moderator]",
  "errorType": "error-user-not-moderator",
  "details": {
    "method": "removeRoomModerator"
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

<h3 id="remove-channel-moderator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="remove-channel-moderator-responseschema">Response Schema</h3>

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
|» method|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Remove Channel Owner

<a id="opIdpost-api-v1-channels.removeOwner"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.removeOwner \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "userId": "oCHkav5Zf6vmpu2W2"
  }'
```

`POST /api/v1/channels.removeOwner`

Remove the `owner` role from a user in a channel. 

Permission required:`set-owner`.

### Changelog

| Version | Description |
| ------- | ----------- |
|0.49.4  | Added       |


> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "userId": "oCHkav5Zf6vmpu2W2"
}
```

<h3 id="remove-channel-owner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel's id|
|» userId|body|string|true|The user's id|

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

<h3 id="remove-channel-owner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="remove-channel-owner-responseschema">Response Schema</h3>

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

## Rename a Channel

<a id="opIdpos-api-v1-channels.rename"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.rename \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "WDuJLFkjwk6L7LdFC",
    "name": "newName"
  }'
```

`POST /api/v1/channels.rename`

Change the name of a channel. Permission required: `edit-room`

### Changelog
| Version | Description |
| ------- | ----------- |
|0.48.0  | Added        | 

> Body parameter

```json
{
  "roomId": "WDuJLFkjwk6L7LdFC",
  "name": "newName"
}
```

<h3 id="rename-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel's ID.|
|» name|body|string|true|The new name of the channel. It can not be the same as the current name.|

> Example responses

> 200 Response

```json
{
  "channel": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "new-name",
    "t": "c",
    "usernames": [
      "testing1"
    ],
    "msgs": 4,
    "u": {
      "_id": "aobEdbYhXfu5hkeqG",
      "username": "testing1"
    },
    "ts": "2016-12-09T15:08:58.042Z",
    "ro": false,
    "sysMes": true,
    "_updatedAt": "2016-12-09T15:57:44.686Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Editing room is not allowed [error-action-not-allowed]",
  "errorType": "error-action-not-allowed",
  "details": {
    "method": "saveRoomSettings",
    "action": "Editing_room"
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

<h3 id="rename-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="rename-a-channel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» usernames|[string]|false|none|none|
|» msgs|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» method|string|false|none|none|
|» action|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Channel Roles

<a id="opIdget-api-v1-channels.roles"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.roles \
  -H 'Accept: application/json'
```

`GET /api/v1/channels.roles`

Lists all user's roles in the channel.

### Changelog

| Version | Description |
| ------- | ----------- |
|0.65.0  | Added        |

<h3 id="get-channel-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|roomId|query|string|false|The room ID. It is required if the `roomName` is not provided.|
|roomName|query|string|false|The room name.  It is required if the `roomId` is not provided.|

> Example responses

> 200 Response

```json
{
  "roles": [
    {
      "_id": "rGNoXwYuZshq9FENQ",
      "rid": "WDuJLFkjwk6L7LdFC",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie"
      },
      "roles": [
        "owner"
      ]
    },
    {
      "_id": "64ef8a982c26843a68c1f7ae",
      "rid": "WDuJLFkjwk6L7LdFC",
      "u": {
        "_id": "5fRTXMt7DMJbpPJfh",
        "username": "test.test",
        "name": "Testtest"
      },
      "roles": [
        "leader"
      ]
    }
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

<h3 id="get-channel-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-channel-roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roles|[object]|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» roles|[string]|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set Channel Announcement

<a id="opIdpost-api-v1-channels.setAnnouncement"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.setAnnouncement \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "roomId": "WDuJLFkjwk6L7LdFC",
    "announcement": "Test out everything"
  }'
```

`POST /api/v1/channels.setAnnouncement`

Set an announcement for the channel. Permission required: `edit-room`
### Changelog

| Version | Description |
| ------- | ----------- |
|0.63.0  | Added        |

> Body parameter

```json
{
  "roomId": "WDuJLFkjwk6L7LdFC",
  "announcement": "Test out everything"
}
```

<h3 id="set-channel-announcement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel's id|
|» announcement|body|string|true|The announcement to set for the channel.|

> Example responses

> 200 Response

```json
{
  "announcement": "Test out everything",
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

<h3 id="set-channel-announcement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-channel-announcement-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|announcement|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set Channel Custom Fields

<a id="opIdpost-api-v1-channels.setCustomFields"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.setCustomFields \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "roomId": "GENERAL",
    "customFields": {
      "organization": "tra-la-la"
    }
  }'
```

`POST /api/v1/channels.setCustomFields`

Sets the custom fields for a channel. Permission required: `edit-room`.

See the <a href='https://docs.rocket.chat/docs/custom-fields' target='_blank'>Configure Custom Fields for Users</a> document for configuration information.

### Changelog
| Version | Description |
| ------- | ----------- |
|0.62.0  | Added        |

> Body parameter

```json
{
  "roomId": "GENERAL",
  "customFields": {
    "organization": "tra-la-la"
  }
}
```

<h3 id="set-channel-custom-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel's ID. Alternatively, enter the `roomName` parameter and provide the room's name as the value.|
|» customFields|body|object|true|The custom fields to set for the channel.|
|» » organization|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "channel": {
    "_id": "WDuJLFkjwk6L7LdFC",
    "fname": "new",
    "customFields": {
      "organization": "tra-la-la"
    },
    "topic": "",
    "broadcast": false,
    "encrypted": false,
    "name": "new",
    "t": "c",
    "msgs": 72,
    "usersCount": 45,
    "u": {
      "_id": "rbAXPnMktTFbNpwtJ",
      "username": "roxie"
    },
    "ts": "2023-04-05T22:34:38.936Z",
    "ro": false,
    "default": false,
    "sysMes": true,
    "_updatedAt": "2023-09-27T05:24:34.363Z",
    "lastMessage": {
      "_id": "mBfC3sbNhfwcL4AQu",
      "rid": "WDuJLFkjwk6L7LdFC",
      "msg": "It should be good",
      "ts": "2023-09-16T07:37:59.691Z",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "test.test",
        "name": "test test"
      },
      "_updatedAt": "2023-09-16T07:37:59.815Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "It should be good"
            }
          ]
        }
      ]
    },
    "lm": "2023-09-16T07:37:59.691Z",
    "announcement": "Test out everything"
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

<h3 id="set-channel-custom-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-channel-custom-fields-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» customFields|object|false|none|none|
|» » organization|string|false|none|none|
|» topic|string|false|none|none|
|» broadcast|boolean|false|none|none|
|» encrypted|boolean|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
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
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
|» lm|string|false|none|none|
|» announcement|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set Default Channel

<a id="opIdpost-api-v1-channels.setDefault"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.setDefault \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "default": true
  }'
```

`POST /api/v1/channels.setDefault`

Set whether the channel is a default channel or not. All new users will automatically join this channel. Permission required: `edit-room`

### Changelog
| Version | Description |
| ------- | ----------- |
|0.66.0  | Added        |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "default": true
}
```

<h3 id="set-default-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel ID.|
|» default|body|boolean|true|Boolean of whether the room is default or not.|

> Example responses

> 200 Response

```json
{
  "channel": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "testing0",
    "t": "c",
    "msgs": 0,
    "u": {
      "_id": "aiPqNoGkjpNDiRx6d",
      "username": "goose160"
    },
    "ts": "2017-01-05T18:02:50.754Z",
    "ro": true,
    "sysMes": true,
    "_updatedAt": "2017-01-05T19:02:24.429Z",
    "usernames": [
      "goose160",
      "graywolf336"
    ],
    "joinCodeRequired": true,
    "muted": [],
    "default": true
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

<h3 id="set-default-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-default-channel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» usernames|[string]|false|none|none|
|» joinCodeRequired|boolean|false|none|none|
|» muted|[object]|false|none|none|
|» default|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set Channel Description

<a id="opIdpost-api-v1-channels.setDescription"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.setDescription \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "description": "Test out everything"
  }'
```

`POST /api/v1/channels.setDescription`

Set the description for a channel. Permission required: `edit-room`.

### Changelog
| Version | Description |
| ------- | ----------- |
|0.48.4  | Added        |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "description": "Test out everything"
}
```

<h3 id="set-channel-description-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel ID.|
|» description|body|string|true|The description to set for the channel.|

> Example responses

> 200 Response

```json
{
  "description": "Testing the room",
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

<h3 id="set-channel-description-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-channel-description-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set Channel Join Code

<a id="opIdpost-api-v1-channels.setJoinCode"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.setJoinCode \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "joinCode": "87hsyi9"
  }'
```

`POST /api/v1/channels.setJoinCode`

Set the code required to join the channel. If it is set, users must use the join code to successfully join the channel. Permission required: `edit-room`

### Changelog
| Version | Description |
| ------- | ----------- |
|0.49.0  | Added        |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "joinCode": "87hsyi9"
}
```

<h3 id="set-channel-join-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel's ID.|
|» joinCode|body|string|true|The join code that will be required for any user to join this channel.|

> Example responses

> 200 Response

```json
{
  "channel": {
    "_id": "WDuJLFkjwk6L7LdFC",
    "fname": "new",
    "customFields": {
      "organization": "tra-la-la"
    },
    "topic": "",
    "broadcast": false,
    "encrypted": false,
    "name": "new",
    "t": "c",
    "msgs": 73,
    "usersCount": 45,
    "u": {
      "_id": "rbAXPnMktTFbNpwtJ",
      "username": "roxie"
    },
    "ts": "2023-04-05T22:34:38.936Z",
    "ro": false,
    "default": true,
    "sysMes": true,
    "_updatedAt": "2023-09-27T05:40:39.687Z",
    "lastMessage": {
      "_id": "mBfC3sbNhfwcL4AQu",
      "rid": "WDuJLFkjwk6L7LdFC",
      "msg": "It should be good",
      "ts": "2023-09-16T07:37:59.691Z",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "test.test",
        "name": "test test"
      },
      "_updatedAt": "2023-09-16T07:37:59.815Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "It should be good"
            }
          ]
        }
      ]
    },
    "lm": "2023-09-16T07:37:59.691Z",
    "announcement": "Test out everything",
    "description": "Testing the room",
    "joinCodeRequired": true
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

<h3 id="set-channel-join-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-channel-join-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» customFields|object|false|none|none|
|» » organization|string|false|none|none|
|» topic|string|false|none|none|
|» broadcast|boolean|false|none|none|
|» encrypted|boolean|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
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
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
|» lm|string|false|none|none|
|» announcement|string|false|none|none|
|» description|string|false|none|none|
|» joinCodeRequired|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set Channel Purpose

<a id="opIdpost-api-v1-channels.setPurpose"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.setPurpose \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "WDuJLFkjwk6L7LdFC",
    "purpose": "greetings"
  }'
```

`POST /api/v1/channels.setPurpose`

Set the purpose or description of the channel.
It is the same as Set Channel Description. Permission required: `edit-room`

### Changelog
| Version | Description |
| ------- | ----------- |
|0.48.0  | Added        |

> Body parameter

```json
{
  "roomId": "WDuJLFkjwk6L7LdFC",
  "purpose": "greetings"
}
```

<h3 id="set-channel-purpose-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel's id|
|» purpose|body|string|true|The description to set for the channel.|

> Example responses

> 200 Response

```json
{
  "purpose": "greetings",
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

<h3 id="set-channel-purpose-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-channel-purpose-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purpose|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set Channel ReadOnly

<a id="opIdpost-api-v1-channels.setReadOnly"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.setReadOnly \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "readOnly": true
  }'
```

`POST /api/v1/channels.setReadOnly`

Set a channel to be read-only or not. Permission required: `edit-room`

### Changelog
| Version | Description |
| ------- | ----------- |
|0.49.0  | Added        |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "readOnly": true
}
```

<h3 id="set-channel-readonly-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel ID.|
|» readOnly|body|boolean|true|Boolean of whether the room is read-only or not.|

> Example responses

> 200 Response

```json
{
  "channel": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "testing0",
    "t": "c",
    "msgs": 0,
    "u": {
      "_id": "aiPqNoGkjpNDiRx6d",
      "username": "goose160"
    },
    "ts": "2017-01-05T18:02:50.754Z",
    "ro": true,
    "sysMes": true,
    "_updatedAt": "2017-01-05T19:02:24.429Z",
    "usernames": [
      "goose160",
      "graywolf336"
    ],
    "joinCodeRequired": true,
    "muted": []
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

<h3 id="set-channel-readonly-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-channel-readonly-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» usernames|[string]|false|none|none|
|» joinCodeRequired|boolean|false|none|none|
|» muted|[object]|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set Channel Topic

<a id="opIdpost-api-v1-channels.setTopic"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.setTopic \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "WDuJLFkjwk6L7LdFC",
    "topic": "Discuss all of the testing"
  }'
```

`POST /api/v1/channels.setTopic`

Set the topic for a channel. Permission required: `edit-room`.

### Changelog
| Version | Description |
| ------- | ----------- |
|0.13.0  | Added        |

> Body parameter

```json
{
  "roomId": "WDuJLFkjwk6L7LdFC",
  "topic": "Discuss all of the testing"
}
```

<h3 id="set-channel-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel's ID.|
|» topic|body|string|true|The channel's topic|

> Example responses

> 200 Response

```json
{
  "topic": "Discuss all of the testing",
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

<h3 id="set-channel-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-channel-topic-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set Channel Type

<a id="opIdpost-api-v1-channels.setType"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.setType \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "WDuJLFkjwk6L7LdFC",
    "type": "p"
  }'
```

`POST /api/v1/channels.setType`

Set the channel type. The channel type can be either `c` (public) or `p` (private). The following permissions are required:
* `create-c`: To change a private group to a public channel.
* `create-p`: To change a public channel to a private room.

For ABAC-managed private rooms, changing the type from `p` to `c` is rejected with `error-action-not-allowed`.
When the type changes to `c` (public) and the room has ABAC attributes, all ABAC attributes on the room are cleared as part of the conversion.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.5.0   | Added ABAC behavior for `p` -> `c`: ABAC-managed private rooms are rejected, and successful conversions to public clear room ABAC attributes. |
| 0.49.0  | Added       |

> Body parameter

```json
{
  "roomId": "WDuJLFkjwk6L7LdFC",
  "type": "p"
}
```

<h3 id="set-channel-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel's ID. Alternatively, enter the `channelName` parameter and provide the channel's name as the value.|
|» type|body|string|true|The channel's type. The type of room this channel should be, either c or p. <br><br>`c` is for channel and `p` is for private.|

> Example responses

> 200 Response

```json
{
  "channel": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "testing0",
    "t": "p",
    "msgs": 0,
    "u": {
      "_id": "aiPqNoGkjpNDiRx6d",
      "username": "goose160"
    },
    "ts": "2017-01-05T18:02:50.754Z",
    "ro": false,
    "sysMes": true,
    "_updatedAt": "2017-01-05T19:02:24.429Z",
    "usernames": [
      "goose160",
      "graywolf336"
    ],
    "joinCodeRequired": true,
    "muted": []
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Changing an ABAC managed private room to public is not allowed [error-action-not-allowed]",
  "errorType": "error-action-not-allowed",
  "details": {
    "method": "saveRoomSettings",
    "action": "Change_Room_Type"
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

<h3 id="set-channel-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-channel-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» usernames|[string]|false|none|none|
|» joinCodeRequired|boolean|false|none|none|
|» muted|[object]|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» method|string|false|none|none|
|» action|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Unarchive a Channel

<a id="opIdpost-api-v1-channels.unarchive"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.unarchive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX"
  }'
```

`POST /api/v1/channels.unarchive`

Unarchive a channel. Permission required: `unarchive-room`

### Changelog
| Version | Description |
| ------- | ----------- |
|0.48.0   | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX"
}
```

<h3 id="unarchive-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|false|The channel ID that you want to unarchive.|

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

<h3 id="unarchive-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="unarchive-a-channel-responseschema">Response Schema</h3>

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

## Get User Mentions in a Channel

<a id="opIdget-api-v1-channels.getAllUserMentionsByChannel"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/channels.getAllUserMentionsByChannel?roomId=jdiue8TGkodp' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/channels.getAllUserMentionsByChannel`

Get all the mentions of the authenticated user in a channel.

### Changelog
| Version | Description|
| ------- | -----------|
|9.0.0   | Removed the `query` parameter.       |
|0.63.0  | Added       |

<h3 id="get-user-mentions-in-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|The room id.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "mentions": [
    {
      "_id": "mPmJ6cPAazzphJmGe",
      "rid": "6513afeda2f73c7460e18c86",
      "msg": "@roxie",
      "ts": "2023-09-27T20:32:58.994Z",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie",
        "name": "test test"
      },
      "_updatedAt": "2023-09-27T20:32:59.171Z",
      "urls": [],
      "mentions": [
        {
          "_id": "rbAXPnMktTFbNpwtJ",
          "username": "roxie",
          "name": "test test",
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
                "value": "roxie"
              }
            }
          ]
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

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-user-mentions-in-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-user-mentions-in-a-channel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mentions|[object]|false|none|none|
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
|» » » value|object|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
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

## Get Channel Integrations

<a id="opIdget-api-v1-channels.getIntegrations"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/channels.getIntegrations?roomId=jdiue8TGkodp' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/channels.getIntegrations`

Retrieves the integrations that the channel has.
The endpoint requires at least one of the following integration permissions: 
- `manage-incoming-integrations`
- `manage-own-incoming-integrations`
- `manage-outgoing-integrations`
- `manage-own-outgoing-integrations`. 

It will return the integrations based on the user's permission. 

### Changelog
| Version | Description                                     |
| ------- | -------------------------------------------------- |
|9.0.0   | Removed the `fields` and `query` parameters.       |
| 1.1.0   | Separate permissions in `incoming` and `outgoing`. |
| 0.49.0  | Added                                              |

<h3 id="get-channel-integrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|The room id.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "integrations": [
    {
      "_id": "WMQDChpnYTRmFre9h",
      "enabled": true,
      "username": "rocket.cat",
      "alias": "Guggy",
      "avatar": "http://res.guggy.com/logo_128.png",
      "name": "Guggy",
      "triggerWords": [
        "!guggy",
        "guggy",
        "gif+"
      ],
      "urls": [
        "http://text2gif.guggy.com/guggify"
      ],
      "token": "8DFS89DMKLWEN",
      "script": "const config = {color: '#ffffff'};class Script{}",
      "scriptEnabled": true,
      "impersonateUser": false,
      "scriptCompiled": "function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor));",
      "scriptError": "",
      "type": "webhook-outgoing",
      "userId": "rocket.cat",
      "channel": [],
      "_createdAt": "2017-01-05T17:06:05.660Z",
      "_createdBy": {
        "username": "graywolf336",
        "_id": "R4jgcQaQhvvK6K3iY"
      },
      "_updatedAt": "2017-01-05T17:06:05.660Z"
    }
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

<h3 id="get-channel-integrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-channel-integrations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integrations|[object]|false|none|none|
|» _id|string|false|none|none|
|» enabled|boolean|false|none|none|
|» username|string|false|none|none|
|» alias|string|false|none|none|
|» avatar|string|false|none|none|
|» name|string|false|none|none|
|» triggerWords|[string]|false|none|none|
|» urls|[string]|false|none|none|
|» token|string|false|none|none|
|» script|string|false|none|none|
|» scriptEnabled|boolean|false|none|none|
|» impersonateUser|boolean|false|none|none|
|» scriptCompiled|string|false|none|none|
|» scriptError|string|false|none|none|
|» type|string|false|none|none|
|» userId|string|false|none|none|
|» channel|[object]|false|none|none|
|» _createdAt|string|false|none|none|
|» _createdBy|object|false|none|none|
|» » username|string|false|none|none|
|» » _id|string|false|none|none|
|» _updatedAt|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Convert Channel to Team

<a id="opIdpost-api-v1-channels.convertToTeam"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/channels.convertToTeam \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "channelId": "6513afeda2f73c7460e18c86"
  }'
```

`POST /api/v1/channels.convertToTeam`

Convert a channel to a team.

Permissions required: `create-team`, `edit-room`. Both permissions are checked against the target channel, whether you identify it by `channelId` or `channelName`.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.7.0   | Enforced room permission checks regardless of whether the channel is identified by ID or name. |
| 3.13.0  | Added |

> Body parameter

```json
{
  "channelId": "6513afeda2f73c7460e18c86"
}
```

<h3 id="convert-channel-to-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» channelId|body|string|false|The channel's ID. Provide either `channelId` or `channelName`, but not both.|
|» channelName|body|string|false|The channel's name. Provide either `channelName` or `channelId`, but not both.|
|» *oneOf*|body|object|false|none|
|» *oneOf*|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "team": {
    "_id": "65149c7ea2f73c7460e18cab",
    "name": "messages",
    "type": 0,
    "createdAt": "2023-09-27T21:19:58.972Z",
    "createdBy": {
      "_id": "rbAXPnMktTFbNpwtJ",
      "username": "roxie"
    },
    "_updatedAt": "2023-09-27T21:19:58.972Z",
    "roomId": "6513afeda2f73c7460e18c86"
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
  "error": "forbidden"
}
```

<h3 id="convert-channel-to-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="convert-channel-to-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|team|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» type|integer|false|none|none|
|» createdAt|string|false|none|none|
|» createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» roomId|string|false|none|none|
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

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rooms-directory">Directory</h1>

## Directory

<a id="opIdget-api-v1-directory"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/directory \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/directory`

Search workspace directory for users, channels and teams. 

### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0   | Removed the `query` parameter.       |
| 8.9.0   | Changed the rate limit to 100 requests every 100 seconds per client IP addres. |
| 7.0.0   | Added `type`, `workspace` and `text` query parameters |
| 1.0.0   | Added workspace query param |
| 0.65.0  | Added Pagination fields: count, total, offset |
| 0.64.0  | Added |

<h3 id="directory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|text|query|string|false|The search term to be filtered|
|type|query|string|false|It can be `channels` or `users`.<br>When `type` is users you can send an additional workspace field, that can be local (default) or all. Workspace=all will work only if <a href="https://docs.rocket.chat/use-rocket.chat/rocket.chat-federation" target="_blank">federation</a> is enabled.|
|workspace|query|string|false|It can be `local` or `all`( if federation is enabled). It is `local` by default.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "_id": "jRca8kibJx8NkLJxt",
      "createdAt": "2018-04-13T12:46:26.517Z",
      "emails": [
        {
          "address": "user.test.1523623548558@rocket.chat",
          "verified": false
        }
      ],
      "name": "EditedRealNameuser.test.1523623548558",
      "username": "editedusernameuser.test.1523623548558",
      "avatarETag": "6YbLtc4v9b4conXon"
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

<h3 id="directory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="directory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[object]|false|none|none|
|» _id|string|false|none|none|
|» createdAt|string|false|none|none|
|» emails|[object]|false|none|none|
|» » address|string|false|none|none|
|» » verified|boolean|false|none|none|
|» name|string|false|none|none|
|» username|string|false|none|none|
|» avatarETag|string|false|none|none|
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

<h1 id="rooms-groups">Groups</h1>

## Get Group Online Users

<a id="opIdget-api-v1-groups.online"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/groups.online?_id=5HmCfpoB7jp2uibTC' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/groups.online`

Lists all online users of a particular group (private channel). You will not be able to view the users if you are not a member of this private channel, unless you have admin permissions.

### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0   | Made the `_id` parameter required. Returns `403` with `errorType: error-forbidden` instead of `400` when refused.       |
| 0.52.0  | Added       |
|7.0.0   | Replaced `query` parameter with `_id` parameter       |        

<h3 id="get-group-online-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|_id|query|string|true|Enter the group's ID. You can find list of groups IDs using any of the following endpoints:<br>* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.<br>* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.|

> Example responses

> 200 Response

```json
{
  "online": [
    {
      "_id": "47cRd58HnWwpqxhaZ",
      "username": "test"
    },
    {
      "_id": "BsxzC22xQ43taWdff",
      "username": "uniqueusername"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Invalid query"
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
  "error": "Not Allowed [error-not-allowed]",
  "errorType": "error-forbidden"
}
```

<h3 id="get-group-online-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-group-online-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|online|[object]|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
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

## Get Group Integrations

<a id="opIdget-api-v1-groups.getIntegrations"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/groups.getIntegrations?roomId=6731de043b74d3c57d334d0c' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/groups.getIntegrations`

Retrieves the integrations that the group/channel has. At least one of the following integration permissions is required:
* `manage-incoming-integrations`
* `manage-own-incoming-integrations`
* `manage-outgoing-integrations`
* `manage-own-outgoing-integrations`

It will return the integrations based on the user's permission. 
### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0   | Removed the `fields` and `query` parameters. Returns `403` with `errorType: error-forbidden` instead of `400` when refused.       |
| 1.1.0  | Separate permissions in incoming and outgoing. |
| 0.49.0 | Added                                          |

<h3 id="get-group-integrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|Enter the private channel's ID. Alternatively, you can enter the room name using the `roomName` query parameter. You can find the IDs by using any of the following endpoints:<br>* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.<br>* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "integrations": [
    {
      "_id": "WMQDChpnYTRmFre9h",
      "enabled": true,
      "username": "rocket.cat",
      "alias": "Guggy",
      "avatar": "http://res.guggy.com/logo_128.png",
      "name": "Guggy",
      "triggerWords": [
        "!guggy",
        "guggy",
        "gif+"
      ],
      "urls": [
        "http://text2gif.guggy.com/guggify"
      ],
      "token": "8DFS89DMKLWEN",
      "script": "const config = {\n    color: '#ffffff'\n};\n\nclass Script {\n    prepare_outgoing_request({ request }) {\n        const trigger = request.data.trigger_word + ' ';\n        const phrase = request.data.text.replace(trigger, '');\n        request.headers['Content-Type']='application/json';\n        request.headers['apiKey']=request.data.token;\n        return {\n            url: request.url,\n            headers: request.headers,\n            data: {format: 'gif', sentence: phrase},\n            method: 'POST'\n        };\n    }\n\n    process_outgoing_response({ request, response }) {\n        if(response.content.gif) {\n            return {\n                content: {\n                    attachments: [\n                        {\n                            image_url: response.content.gif,\n                            color: ((config['color'] != '') ? '#' + config['color'].replace('#', '') : '#ffffff')\n                        }\n                    ]\n                }\n            };\n        } else {\n            return {\n                content: {\n                    text: 'Sorry I don\\'t have a photo for you :disappointed_relieved:'\n                }\n            };\n        }\n    }\n}",
      "scriptEnabled": true,
      "impersonateUser": false,
      "scriptCompiled": "function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var config={color:'#ffffff'};var Script=function(){function Script(){_classCallCheck(this,Script)}Script.prototype.prepare_outgoing_request=function prepare_outgoing_request(_ref){var request=_ref.request;var trigger=request.data.trigger_word+' ';var phrase=request.data.text.replace(trigger,'');request.headers['Content-Type']='application/json';request.headers['apiKey']=request.data.token;return{url:request.url,headers:request.headers,data:{format:'gif',sentence:phrase},method:'POST'}};Script.prototype.process_outgoing_response=function process_outgoing_response(_ref2){var request=_ref2.request;var response=_ref2.response;if(response.content.gif){return{content:{attachments:[{image_url:response.content.gif,color:config['color']!=''?'#'+config['color'].replace('#',''):'#ffffff'}]}}}else{return{content:{text:'Sorry I don\\'t have a photo for you :disappointed_relieved:'}}}};return Script}();",
      "scriptError": "",
      "type": "webhook-outgoing",
      "userId": "rocket.cat",
      "channel": [
        "#private-group-name"
      ],
      "_createdAt": "2017-01-05T17:06:05.660Z",
      "_createdBy": {
        "username": "graywolf336",
        "_id": "R4jgcQaQhvvK6K3iY"
      },
      "_updatedAt": "2017-01-05T17:06:05.660Z"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The parameter \"roomId\" or \"roomName\" is required [error-room-param-not-provided]",
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-group-integrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-group-integrations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integrations|[object]|false|none|none|
|» _id|string|false|none|none|
|» enabled|boolean|false|none|none|
|» username|string|false|none|none|
|» alias|string|false|none|none|
|» avatar|string|false|none|none|
|» name|string|false|none|none|
|» triggerWords|[string]|false|none|none|
|» urls|[string]|false|none|none|
|» token|string|false|none|none|
|» script|string|false|none|none|
|» scriptEnabled|boolean|false|none|none|
|» impersonateUser|boolean|false|none|none|
|» scriptCompiled|string|false|none|none|
|» scriptError|string|false|none|none|
|» type|string|false|none|none|
|» userId|string|false|none|none|
|» channel|[string]|false|none|none|
|» _createdAt|string|false|none|none|
|» _createdBy|object|false|none|none|
|» » username|string|false|none|none|
|» » _id|string|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add All Users to Group

<a id="opIdpost-api-v1-groups.addAll"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.addAll \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "activeUsersOnly": "true"
  }'
```

`POST /api/v1/groups.addAll`

Add all workspace users to the private channel. You can do this if you are a member of the private channel or have admin permissions.

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.55.0  | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "activeUsersOnly": "true"
}
```

<h3 id="add-all-users-to-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|Enter the group ID. Alternatively, you can enter the name using the `roomName` query parameter. You can find the IDs by using any of the following endpoints:<br>* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.<br>* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.|
|» activeUsersOnly|body|boolean|false|Add only active users to the room.|

> Example responses

> 200 Response

```json
{
  "channel": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "groupname",
    "t": "p",
    "usernames": [
      "example",
      "rocket.cat"
    ],
    "msgs": 0,
    "u": {
      "_id": "aobEdbYhXfu5hkeqG",
      "username": "example"
    },
    "ts": "2016-05-30T13:42:25.304Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The required \"roomId\" or \"roomName\" param provided does not match any group [error-room-not-found]",
  "errorType": "error-room-not-found"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="add-all-users-to-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="add-all-users-to-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» usernames|[string]|false|none|none|
|» msgs|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
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

## Add Group Leader

<a id="opIdpost-api-v1-groups.addLeader"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.addLeader \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "userId": "oCHkav5Zf6vmpu2W2"
  }'
```

`POST /api/v1/groups.addLeader`

Assign the `leader` role to a user in a private channel. Learn more about roles from the <a href='https://docs.rocket.chat/docs/roles-in-rocketchat' target='_blank'>Roles in Rocket.Chat</a> document.

Permission required:  `set-leader` 

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.58.0  | Added.      |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "userId": "oCHkav5Zf6vmpu2W2"
}
```

<h3 id="add-group-leader-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The groups's (private channel) ID.|
|» userId|body|string|true|The user's ID.|

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
  "error": "User is already a leader [error-user-already-leader]",
  "errorType": "error-user-already-leader"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="add-group-leader-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="add-group-leader-responseschema">Response Schema</h3>

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

## Add Group Moderator

<a id="opIdpost-api-v1-groups.addModerator"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.addModerator \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "userId": "nSYqWzZ4GsKTX4dyK"
  }'
```

`POST /api/v1/groups.addModerator`

Assign the `moderator` role to a user in a private channel. Learn more about roles from the <a href='https://docs.rocket.chat/docs/roles-in-rocketchat' target='_blank'>Roles in Rocket.Chat</a> document.

Permission required: `set-moderator`

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.49.4  | Added.      |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "userId": "nSYqWzZ4GsKTX4dyK"
}
```

<h3 id="add-group-moderator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The groups's (private channel) ID.|
|» userId|body|string|true|The user's ID.|

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
  "error": "The required \"roomId\" or \"roomName\" param provided does not match any group [error-room-not-found]",
  "errorType": "error-room-not-found"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="add-group-moderator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="add-group-moderator-responseschema">Response Schema</h3>

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

## Add Group Owner

<a id="opIdpost-api-v1-groups.addOwner"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.addOwner \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "userId": "nSYqWzZ4GsKTX4dyK"
  }'
```

`POST /api/v1/groups.addOwner`

Assign `owner` role for a user in the current private channel. Learn more about roles from the <a href='https://docs.rocket.chat/docs/roles-in-rocketchat' target='_blank'>Roles in Rocket.Chat</a> document.

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.49.4  | Added.      |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "userId": "nSYqWzZ4GsKTX4dyK"
}
```

<h3 id="add-group-owner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|Enter the group's (private channel) ID.|
|» userId|body|string|true|Enter the user's ID.|

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
  "error": "The required \"roomId\" or \"roomName\" param provided does not match any group [error-room-not-found]",
  "errorType": "error-room-not-found"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="add-group-owner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="add-group-owner-responseschema">Response Schema</h3>

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

## Archive a Group

<a id="opIdpost-api-v1-groups.archive"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.archive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX"
  }'
```

`POST /api/v1/groups.archive`

Archive a private channel. You need the `archive-room` permission.

### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
| 0.48.0  | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX"
}
```

<h3 id="archive-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The group ID that you want to archive. You can find the IDs by using any of the following endpoints:<br>* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.<br>* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.|

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

> 403 Response

```json
{
  "success": false,
  "error": "Not authorized [error-not-authorized]",
  "errorType": "error-forbidden"
}
```

<h3 id="archive-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="archive-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

## Close Group

<a id="opIdpost-api-v1-groups.close"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.close \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX"
  }'
```

`POST /api/v1/groups.close`

Hides the private channel from the list of channels in the workspace sidebar, only if you're part of the group. It will reappear when someone sends a new message. You can search for hidden channels using the workspace **Directory**.

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.48.0  | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX"
}
```

<h3 id="close-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|false|The group ID that you want to close. You can find the IDs by using any of the following endpoints:<br>* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.<br>* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.|

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
  "error": "The required \"roomId\" or \"roomName\" param provided does not match any group [error-room-not-found]",
  "errorType": "error-room-not-found"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="close-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="close-group-responseschema">Response Schema</h3>

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

## Get Group Counters

<a id="opIdget-api-v1-groups.counters"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.counters \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/groups.counters`

Get the private channel information for the authenticated user. 

Permission required: `view-room-administration`

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.65.0  | Added       |

<h3 id="get-group-counters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|false|The room ID. It is required if the `roomName` is not provided.|
|roomName|query|string|false|The room name.  It is required if the `roomId` is not provided.|
|userId|query|string|false|Counters for provided user ID (you need to have the `view-room-administration` permission for calling user). This parameter is optional|

> Example responses

> 200 Response

```json
{
  "joined": true,
  "members": 1,
  "unreads": 1,
  "unreadsFrom": "2018-02-18T21:51:20.091Z",
  "msgs": 1,
  "latest": "2018-02-23T17:20:17.345Z",
  "userMentions": 0,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The required \"roomId\" or \"roomName\" param provided does not match any group [error-room-not-found]",
  "errorType": "error-room-not-found"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-group-counters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK<br><br>**Note** The response returns the following information:<br>- joined - Boolean flag that shows the particular user has joined the room or not.<br>- members - Count of current room members.<br>- unreads - Count of unread messages for specified user (calling user or for the provided `userId`).<br>- unreadsFrom - Start date-time of unread interval for specified user.<br>- msgs - Count of messages in the room.<br>- latest - End date-time of unread interval for specified user (or date-time of last posted message).<br>- userMentions - Count of user mentions in messages.|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-group-counters-responseschema">Response Schema</h3>

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

## Create Group

<a id="opIdpost-api-v1-groups.create"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "name": "groupname",
    "members": [
      "rocket.cat"
    ],
    "readOnly": true,
    "excludeSelf": true,
    "customFields": {
      "type": "default"
    },
    "extraData": {
      "broadcast": true,
      "encrypted": true,
      "teamId": "658441562dd9f928ad9951aa"
    }
  }'
```

`POST /api/v1/groups.create`

Create a new private channel, optionally including specified users. Refer to the <a href='https://docs.rocket.chat/docs/channels' target='_blank'>Channels</a> documents for information on the available room options.

The following permissions are required:
* `create-p`: This permission is required to create a private channel.
* `create-team-group`: This permission is required if you want to create a private channel from an existing team.

### Changelog
| Version | Description                                                                                 |
| ------- | ------------------------------------------------------------------------------------------- |
| 8.8.0   | Added support for enforcing end-to-end encryption when creating private rooms.             |
| 6.4.1   | Added `excludeSelf` param                                                                   |
| 0.35.0  | Added                                                                                       |

> Body parameter

```json
{
  "name": "groupname",
  "members": [
    "rocket.cat"
  ],
  "readOnly": true,
  "excludeSelf": true,
  "customFields": {
    "type": "default"
  },
  "extraData": {
    "broadcast": true,
    "encrypted": true,
    "teamId": "658441562dd9f928ad9951aa"
  }
}
```

<h3 id="create-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» name|body|string|true|The name of the new private group.|
|» readOnly|body|boolean|false|Set if the private channel is read-only or not. The default value is false.|
|» members|body|[string]|false|The users to add to the private channel when it is created.|
|» excludeSelf|body|boolean|false|If set to true, the user calling the endpoint is not added as a member of the private channel. The default value is false.|
|» customFields|body|object|false|You add custom fields for private rooms using this parameter. Enter the key and value that you want to associate with this room. For example, `{ "company": "sell-and-more" }`. The custom fields are not displayed in the workspace UI.|
|» extraData|body|object|false|Enter the following details for the object:<br><br>Note: For more information, see <a href="https://docs.rocket.chat/docs/channels" target="_blank">Channels</a>.|
|» » broadcast|body|boolean|false|Whether the group should be a broadcast group. False by default.|
|» » encrypted|body|boolean|false|Whether the private room should use end-to-end encryption. When **Force end-to-end encryption on private rooms** is enabled, omit this field or set it to `true`. Setting it to `false` returns the `error-encrypted-private-rooms-enforced` error. Federated private rooms are exempt from this policy.|
|» » teamId|body|string|false|Enter the team ID for which you want to create a group. You will get an error if the team does not exist.|

> Example responses

> 200 Response

```json
{
  "group": {
    "_id": "NtR6RQ7NvzA9ejecX",
    "name": "testing",
    "t": "p",
    "msgs": 0,
    "u": {
      "_id": "aobEdbYhXfu5hkeqG",
      "username": "tester"
    },
    "ts": "2016-12-09T16:53:06.761Z",
    "ro": false,
    "sysMes": true,
    "_updatedAt": "2016-12-09T16:53:06.761Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Body param \"name\" is required"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="create-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="create-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
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

## Delete Group

<a id="opIdpost-api-v1-groups.delete"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "roomName": "private-abc"
  }'
```

`POST /api/v1/groups.delete`

Delete a private room.

The following permissions are required: 
* `delete-p`: To delete a private channel.
* `delete-team-group`: To delete a private channel that is part of a team.

### Changelog
| Version | Description              |
| ------- | ------------------------ |
|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
| 0.71.0  | Removed `group` property |
| 0.49.0  | Added                    |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "roomName": "private-abc"
}
```

<h3 id="delete-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|false|Enter the room ID. This parameter is required if no `roomName` is provided. You can find the IDs by using any of the following endpoints:<br>* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.<br>* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.|
|» roomName|body|string|false|Enter the room name. This parameter is required if no `roomId` is provided.|

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

> 403 Response

```json
{
  "success": false,
  "error": "Not allowed [error-not-allowed]",
  "errorType": "error-forbidden"
}
```

<h3 id="delete-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="delete-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

## Get Group History

<a id="opIdget-api-v1-groups.history"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/groups.history?roomId=jdiue8TGkodp' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/groups.history`

Retrieves the messages from a private channel you belong to.

### Changelog
| Version | Description             |
| ------- | ----------------------- |
| 0.75.0  | Added `offset` property |
| 0.48.0  | Added                   |

<h3 id="get-group-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|The room id.|
|latest|query|string|false|The end of the time range of messages to retrieve. The default value is the current date and time.|
|oldest|query|string|false|The start of the time range to retrieve messages.|
|inclusive|query|boolean|false|Whether messages sent on the latest and oldest dates should be included. The default value is false.|
|unreads|query|boolean|false|Whether unread messages should be included in the response. The default value is false.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "_id": "AkzpHAvZpdnuchw2a",
      "rid": "ByehQjC44FwMeiLbX",
      "msg": "hi",
      "ts": "2025-12-09T12:50:51.555Z",
      "u": {
        "_id": "y65tAmHs93aDChMWu",
        "username": "testing"
      },
      "_updatedAt": "2025-12-09T12:50:51.562Z"
    },
    {
      "_id": "vkLMxcctR4MuTxreF",
      "t": "uj",
      "rid": "ByehQjC44FwMeiLbX",
      "ts": "2025-12-08T15:41:37.730Z",
      "msg": "testing2",
      "u": {
        "_id": "bRtgdhzM6PD9F8pSx",
        "username": "testing2"
      },
      "groupable": false,
      "_updatedAt": "2025-12-08T16:03:25.235Z"
    },
    {
      "_id": "bfRW658nEyEBg75rc",
      "t": "uj",
      "rid": "ByehQjC44FwMeiLbX",
      "ts": "2025-12-07T15:47:49.099Z",
      "msg": "testing",
      "u": {
        "_id": "nSYqWzZ4GsKTX4dyK",
        "username": "testing1"
      },
      "groupable": false,
      "_updatedAt": "2025-12-07T15:47:49.099Z"
    },
    {
      "_id": "pbuFiGadhRZTKouhB",
      "t": "uj",
      "rid": "ByehQjC44FwMeiLbX",
      "ts": "2025-12-06T17:57:38.635Z",
      "msg": "testing",
      "u": {
        "_id": "y65tAmHs93aDChMWu",
        "username": "testing"
      },
      "groupable": false,
      "_updatedAt": "2025-12-06T17:57:38.635Z"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The parameter \"roomId\" or \"roomName\" is required [error-room-param-not-provided]",
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

<h3 id="get-group-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-group-history-responseschema">Response Schema</h3>

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

## Get Group Information

<a id="opIdget-api-v1-groups.info"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.info \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f'
```

`GET /api/v1/groups.info`

Retrieves the information about a private channel you belong to.

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.48.0  | Added       |

<h3 id="get-group-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|roomId|query|string|false|The room ID. It is required if the `roomName` is not provided.|
|roomName|query|string|false|The room name.  It is required if the `roomId` is not provided.|

> Example responses

> 200 Response

```json
{
  "group": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "testing",
    "fname": "testing",
    "t": "p",
    "msgs": 0,
    "usersCount": 2,
    "u": {
      "_id": "HKKPmF8rZh45GMHWH",
      "username": "marc.anp"
    },
    "customFields": {},
    "broadcast": false,
    "encrypted": false,
    "ts": "2020-05-21T13:16:24.749Z",
    "ro": false,
    "default": false,
    "sysMes": true,
    "_updatedAt": "2020-05-21T13:16:24.772Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The parameter \"roomId\" or \"roomName\" is required [error-room-param-not-provided]",
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

<h3 id="get-group-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-group-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» fname|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» customFields|object|false|none|none|
|» broadcast|boolean|false|none|none|
|» encrypted|boolean|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
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

## Invite Users to Group

<a id="opIdpost-api-v1-groups.invite"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.invite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "userId": "nSYqWzZ4GsKTX4dyK"
  }'
```

`POST /api/v1/groups.invite`

Invite one user or bulk users to a private channel. Any of the following permissions are required:
* `add-user-to-joined-room`: This permission is required if you want to add users to the channel that you have joined.
* `add-user-to-any-p-room`: This permission is required to add users to any private channel.

You can identify the group by `roomId` or `roomName`, and the user(s) by `userId`, `username`, `userIds`, or `usernames`.

### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
| 0.48.0  | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "userId": "nSYqWzZ4GsKTX4dyK"
}
```

<h3 id="invite-users-to-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|false|The group ID. This parameter is required if no `roomName` is provided. You can find the IDs by using any of the following endpoints:<br>* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.<br>* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.|
|» roomName|body|string|false|The group name. This parameter is required if no `roomId` is provided.|
|» userId|body|string|false|The ID of the user to be invited. This parameter is required if no `username`, `userIds`, or `usernames` is provided.|
|» username|body|string|false|The username of the user to be invited. This parameter is required if no `userId`, `userIds`, or `usernames` is provided.|
|» userIds|body|[string]|false|An array of user IDs to invite. This parameter is required if no `userId`, `username`, or `usernames` is provided.|
|» usernames|body|[string]|false|An array of usernames to invite. This parameter is required if no `userId`, `username`, or `userIds` is provided.|

> Example responses

> 200 Response

```json
{
  "group": {
    "_id": "ByehQjC44FwMeiLbX",
    "ts": "2016-11-30T21:23:04.737Z",
    "t": "p",
    "name": "testing",
    "usernames": [
      "testing",
      "testing1"
    ],
    "u": {
      "_id": "aobEdbYhXfu5hkeqG",
      "username": "testing1"
    },
    "msgs": 1,
    "_updatedAt": "2016-12-09T12:50:51.575Z",
    "lm": "2016-12-09T12:50:51.555Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The parameter \"roomId\" or \"roomName\" is required [error-room-param-not-provided]",
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

> 403 Response

```json
{
  "success": false,
  "error": "Not allowed [error-not-allowed]",
  "errorType": "error-forbidden"
}
```

<h3 id="invite-users-to-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="invite-users-to-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|object|false|none|none|
|» _id|string|false|none|none|
|» ts|string|false|none|none|
|» t|string|false|none|none|
|» name|string|false|none|none|
|» usernames|[string]|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» msgs|integer|false|none|none|
|» _updatedAt|string|false|none|none|
|» lm|string|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Remove User from Group

<a id="opIdpost-api-v1-groups.kick"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.kick \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "userId": "nSYqWzZ4GsKTX4dyK"
  }'
```

`POST /api/v1/groups.kick`

Remove a user from the private group/channel. Permission required: `kick-user-from-any-p-room`

### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
| 0.48.0  | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "userId": "nSYqWzZ4GsKTX4dyK"
}
```

<h3 id="remove-user-from-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|Enter the private room ID from which you want to remove the user.|
|» userId|body|string|true|Enter the user ID that you want to remove.|

> Example responses

> 200 Response

```json
{
  "group": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "invite-me",
    "t": "p",
    "usernames": [
      "testing1"
    ],
    "msgs": 0,
    "u": {
      "_id": "aobEdbYhXfu5hkeqG",
      "username": "testing1"
    },
    "ts": "2016-12-09T15:08:58.042Z",
    "ro": false,
    "sysMes": true,
    "_updatedAt": "2016-12-09T15:22:40.656Z"
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
  "error": "Not allowed [error-not-allowed]",
  "errorType": "error-forbidden"
}
```

<h3 id="remove-user-from-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="remove-user-from-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» usernames|[string]|false|none|none|
|» msgs|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
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

## Leave Group

<a id="opIdpost-groups.leave"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.leave \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX"
  }'
```

`POST /api/v1/groups.leave`

Leave a private channel. Leave a private channel. If a group owner is leaving, they must set another owner before leaving the group. Permission required: `leave-p`

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.48.0  | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX"
}
```

<h3 id="leave-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|false|The group ID that you want to leave.|

> Example responses

> 200 Response

```json
{
  "group": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "invite-me",
    "t": "p",
    "usernames": [
      "testing2"
    ],
    "msgs": 0,
    "u": {
      "_id": "aobEdbYhXfu5hkeqG",
      "username": "testing1"
    },
    "ts": "2016-12-09T15:08:58.042Z",
    "ro": false,
    "sysMes": true,
    "_updatedAt": "2016-12-09T15:22:40.656Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "You are the last owner. Please set new owner before leaving the room. [error-you-are-last-owner]",
  "errorType": "error-you-are-last-owner",
  "details": {
    "method": "leaveRoom"
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

<h3 id="leave-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="leave-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» usernames|[string]|false|none|none|
|» msgs|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
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

## Get List of User Groups

<a id="opIdget-api-v1-groups.listAll"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.listAll \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/groups.listAll`

Lists all the private groups/channels of the workspace.

Permission required: `view-room-administration`

### Changelog
| Version | Description                    |
| ------- | ------------------------------ |
|9.0.0   | Removed the `fields` and `query` parameters.       |
| 0.62.0  | Add 'query' parameter support. |
| 0.59.0  | Added                          |

<h3 id="get-list-of-user-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "groups": [
    {
      "_id": "xA52DRDM7dqx2PfTp",
      "name": "private1",
      "fname": "private1",
      "t": "p",
      "msgs": 0,
      "u": {
        "_id": "3WpJQkDHhrWPBvXuW",
        "username": "admin"
      },
      "customFields": {
        "companyId": "org1"
      },
      "ts": "2018-01-21T21:05:06.729Z",
      "ro": false,
      "sysMes": true,
      "_updatedAt": "2018-01-21T21:05:06.729Z"
    }
  ],
  "offset": 0,
  "count": 1,
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

<h3 id="get-list-of-user-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-list-of-user-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» fname|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» customFields|object|false|none|none|
|» » companyId|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
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

## Get Groups

<a id="opIdget-api-v1-groups.list"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.list \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/groups.list`

Lists all the private channels you are a member of.

### Changelog
| Version | Description                                  |
| ------- | -------------------------------------------- |
| 0.67.0  | Removed `query` parameter support.           |
| 0.62.0  | Add `query` parameter support.               |
| 0.49.0  | Count and offset query parameters supported. |
| 0.33.0  | Added                                        |

<h3 id="get-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|string|false|Sort the channels in ascending (`1`) or descending (`-1`) order. The value must be entered as a JSON object. The options are as follows:<br> * `name`: Sort by the channel name. For example, `sort={"name":1}` (this is the default sorting mechanism).<br> * `ts`: Sort by channel creation timestamp. For example, `sort={"ts":-1}`<br> * `usersCount`: Sort by the number of users in the channel. For example, `sort={"usersCount":1}`|

> Example responses

> 200 Response

```json
{
  "groups": [
    {
      "_id": "ByehQjC44FwMeiLbX",
      "name": "test-test",
      "t": "p",
      "msgs": 0,
      "u": {
        "_id": "aobEdbYhXfu5hkeqG",
        "username": "testing1"
      },
      "ts": "2016-12-09T15:08:58.042Z",
      "ro": false,
      "sysMes": true,
      "_updatedAt": "2016-12-09T15:22:40.656Z"
    },
    {
      "_id": "t7qapfhZjANMRAi5w",
      "name": "testing",
      "t": "p",
      "msgs": 0,
      "u": {
        "_id": "y65tAmHs93aDChMWu",
        "username": "testing2"
      },
      "ts": "2016-12-01T15:08:58.042Z",
      "ro": false,
      "sysMes": true,
      "_updatedAt": "2016-12-09T15:22:40.656Z"
    }
  ],
  "offset": 0,
  "count": 1,
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

<h3 id="get-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
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

## List Group Members

<a id="opIdget-api-v1-groups.members"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.members \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/groups.members`

Lists the members of a private group. 

Permission required if the room is broadcast.: `view-broadcast-member-list`

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.59.0  | Added       |

<h3 id="list-group-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|false|The room ID. It is required if the `roomName` is not provided.|
|roomName|query|string|false|The room name.  It is required if the `roomId` is not provided.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|status|query|[string]|false|The user's status (search filter).|
|filter|query|string|false|Extra search filters to be applied to the fields defined in the `Accounts_SearchFields` setting.|

> Example responses

> 200 Response

```json
{
  "members": [
    {
      "_id": "Q4GkX6RMepGDdQ7YJ",
      "status": "online",
      "name": "Marc Pow",
      "utcOffset": -3,
      "username": "marc.pow"
    },
    {
      "_id": "rocket.cat",
      "name": "Rocket.Cat",
      "username": "rocket.cat",
      "status": "online",
      "utcOffset": 0
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
  "error": "The parameter \"roomId\" or \"roomName\" is required [error-room-param-not-provided]",
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

<h3 id="list-group-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-group-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[object]|false|none|none|
|» _id|string|false|none|none|
|» status|string|false|none|none|
|» name|string|false|none|none|
|» utcOffset|integer|false|none|none|
|» username|string|false|none|none|
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

## Get Group Messages

<a id="opIdget-api-v1-groups.messages"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.messages \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/groups.messages`

Lists all the messages in a private channel. 

### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0   | Removed the `query` parameter.       |
| 7.0.0  | Added `mentionIds`, `starredIds`, `pinned` query parameters.|
| 0.59.0  | Added       |

<h3 id="get-group-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|false|The room ID. It is required if the `roomName` is not provided.|
|roomName|query|string|false|The room name.  It is required if the `roomId` is not provided.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|mentionIds|query|string|false|Filter the messages where a user has been mentioned by the userId. For a set of userIds, use an array (`["838ndhd79w", "dud0wu900"]`).|
|starredIds|query|string|false|Filter the messages a user have starred by userId. For a set of userIds, use an array (`["838ndhd79w", "dud0wu900"]`).|
|pinned|query|boolean|false|Filter pinned messages.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
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
    {
      "_id": "MrAeupRiF9TvhMesK",
      "t": "room_changed_privacy",
      "rid": "agh2Sucgb54RQ8dDo",
      "ts": "2018-10-05T00:11:16.998Z",
      "msg": "Private Group",
      "u": {
        "_id": "rocketchat.internal.admin.test",
        "username": "rocketchat.internal.admin.test"
      },
      "groupable": false,
      "_updatedAt": "2018-10-05T00:11:16.998Z"
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
  "error": "must have required property 'roomId'\n must have required property 'roomName'\n must match exactly one schema in oneOf [error-invalid-params]",
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

<h3 id="get-group-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-group-messages-responseschema">Response Schema</h3>

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
|» reactions|object|false|none|none|
|» » :frowning2:|object|false|none|none|
|» » » usernames|[string]|false|none|none|
|» mentions|[object]|false|none|none|
|» channels|[object]|false|none|none|
|» starred|object|false|none|none|
|» » _id|string|false|none|none|
|» t|string|false|none|none|
|» groupable|boolean|false|none|none|
|» attachments|[[Attachment](#schemaattachment)]|false|none|none|
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

## Get Group Moderators

<a id="opIdget-api-v1-groups.moderators"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.moderators \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/groups.moderators`

Lists the moderators of a private channel.

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.70.0  | Added       |

<h3 id="get-group-moderators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|false|The room ID. It is required if the `roomName` is not provided.|
|roomName|query|string|false|The room name.  It is required if the `roomId` is not provided.|

> Example responses

> 200 Response

```json
{
  "moderators": [
    {
      "_id": "hifeRG56fjlsp",
      "username": "marc.cat",
      "name": "Marc Cat"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The parameter \"roomId\" or \"roomName\" is required [error-room-param-not-provided]",
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

<h3 id="get-group-moderators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-group-moderators-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|moderators|[object]|false|none|none|
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

## Add Group to List

<a id="opIdpost-api-v1-groups.open"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.open \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX"
  }'
```

`POST /api/v1/groups.open`

Use this endpoint to add the private group/channel back to the list of rooms in the workspace sidebar, if you have used the <a href='https://developer.rocket.chat/apidocs/close-group' target='_blank'>groups.close</a> endpoint to remove the channel from the sidebar.

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.48.0  | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX"
}
```

<h3 id="add-group-to-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The room ID that you want to add to the sidebar. Alternatively, you can use the `roomName` parameter and enter the room name, instead of the ID.|

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
  "error": "The parameter \"roomId\" or \"roomName\" is required [error-room-param-not-provided]",
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

<h3 id="add-group-to-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="add-group-to-list-responseschema">Response Schema</h3>

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

## Remove Group Leader

<a id="opIdpost-api-v1-groups.removeLeader"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.removeLeader \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "userId": "oCHkav5Zf6vmpu2W2"
  }'
```

`POST /api/v1/groups.removeLeader`

Remove the `leader` role from a user in a private channel. 

Permission required: `set-leader`


### Changelog

| Version | Description |
| ------- | ----------- |
| 0.58.0  | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "userId": "oCHkav5Zf6vmpu2W2"
}
```

<h3 id="remove-group-leader-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The private group ID. You can find the IDs by using any of the following endpoints:<br>* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.<br>* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.|
|» userId|body|string|true|The user ID.|

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
  "error": "User is not a leader [error-user-not-leader]",
  "errorType": "error-user-not-leader"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="remove-group-leader-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="remove-group-leader-responseschema">Response Schema</h3>

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

## Remove Group Moderator

<a id="opIdpost-api-v1-groups.removeModerator"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.removeModerator \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "userId": "oCHkav5Zf6vmpu2W2"
  }'
```

`POST /api/v1/groups.removeModerator`

Remove the `moderator` role from a user in a private channel. 

Permission required: `set-moderator`

### Changelog

| Version | Description |
| ------- | ----------- |
| 0.49.4  | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "userId": "oCHkav5Zf6vmpu2W2"
}
```

<h3 id="remove-group-moderator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The private group ID. You can find the IDs by using any of the following endpoints:<br>* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.<br>* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.|
|» userId|body|string|true|The ID of the user to be removed from moderator role. Alternatively, you can use the `userName` parameter and enter the username, instead of the ID.|

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
  "error": "The parameter \"roomId\" or \"roomName\" is required [error-room-param-not-provided]",
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

<h3 id="remove-group-moderator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="remove-group-moderator-responseschema">Response Schema</h3>

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

## Remove Group Owner

<a id="opIdpost-api-v1-groups.removeOwner"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.removeOwner \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "userId": "oCHkav5Zf6vmpu2W2"
  }'
```

`POST /api/v1/groups.removeOwner`

Remove the `owner` role from a user in a private channel. 

Permission required: `set-owner` 

### Changelog

| Version | Description |
| ------- | ----------- |
| 0.49.4  | Added       |


> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "userId": "oCHkav5Zf6vmpu2W2"
}
```

<h3 id="remove-group-owner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The private group ID. You can find the IDs by using any of the following endpoints:<br>* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.<br>* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.|
|» userId|body|string|true|The ID of the user to be removed as owner |

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
  "error": "The parameter \"roomId\" or \"roomName\" is required [error-room-param-not-provided]",
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

<h3 id="remove-group-owner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="remove-group-owner-responseschema">Response Schema</h3>

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

## Rename Group

<a id="opIdpost-api-v1-groups.rename"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.rename \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "name": "new-name"
  }'
```

`POST /api/v1/groups.rename`

Rename a private channel. Permission required: `edit-room`

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.48.0  | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "name": "new-name"
}
```

<h3 id="rename-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The private group's ID. You can find the IDs by using any of the following endpoints:<br>* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.<br>* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.|
|» name|body|string|true|The new name of the private group. It can not be the same as another or the existing name.|

> Example responses

> 200 Response

```json
{
  "group": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "new-name",
    "t": "p",
    "usernames": [
      "testing1"
    ],
    "msgs": 4,
    "u": {
      "_id": "aobEdbYhXfu5hkeqG",
      "username": "testing1"
    },
    "ts": "2016-12-09T15:08:58.042Z",
    "ro": false,
    "sysMes": true,
    "_updatedAt": "2016-12-09T15:57:44.686Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The bodyParam \"name\" is required"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="rename-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="rename-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» usernames|[string]|false|none|none|
|» msgs|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
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

## Set Group Announcement

<a id="opIdpost-api-v1-groups.setAnnouncement"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.setAnnouncement \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "announcement": "Test announcement"
  }'
```

`POST /api/v1/groups.setAnnouncement`

Set the private channel announcement. Announcements are displayed at the top of the rooms, under the header.
Permission required: `edit-room`

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.70.0  | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "announcement": "Test announcement"
}
```

<h3 id="set-group-announcement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The private group ID. You can find the IDs by using any of the following endpoints:<br>* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.<br>* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.|
|» announcement|body|string|true|The announcement to set for the private group.|

> Example responses

> 200 Response

```json
{
  "announcement": "Test out everything.",
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

<h3 id="set-group-announcement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-group-announcement-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|announcement|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set Group Custom Fields

<a id="opIdpost-api-v1-groups.setCustomFields"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.setCustomFields \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "euzoT67Gx6nXcn66M",
    "customFields": {
      "company": "sell-and-more"
    }
  }'
```

`POST /api/v1/groups.setCustomFields`

Set custom fields for the private channel. These custom fields are not displayed on the workspace UI.
Permission required: `edit-room`

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.62.0  | Added       |

> Body parameter

```json
{
  "roomId": "euzoT67Gx6nXcn66M",
  "customFields": {
    "company": "sell-and-more"
  }
}
```

<h3 id="set-group-custom-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The private group's ID. Alternatively, use the `roomName` parameter and provide the room's name as the value. You can find the IDs by using any of the following endpoints:<br>* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.<br>* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.|
|» customFields|body|object|true|The custom fields to set for the private group.|

> Example responses

> 200 Response

```json
{
  "group": {
    "_id": "66c88dae237405fc05fc1f06",
    "fname": "api-team2",
    "_updatedAt": "2025-11-20T08:26:12.813Z",
    "name": "api-team2",
    "t": "p",
    "msgs": 17,
    "usersCount": 2,
    "u": {
      "_id": "C38WSSzrGd2NCjzqJ",
      "username": "test.cat",
      "name": "test.cat"
    },
    "ts": "2024-08-23T13:25:02.959Z",
    "ro": false,
    "sidepanel": {
      "items": [
        "discussions"
      ]
    },
    "teamId": "66c88daf237405fc05fc1f08",
    "teamMain": true,
    "rolePrioritiesCreated": 2,
    "lastMessage": {
      "_id": "3yXev48EfPnBwfvDN",
      "rid": "66c88dae237405fc05fc1f06",
      "msg": "hello world",
      "ts": "2025-10-28T06:32:52.861Z",
      "u": {
        "_id": "C38WSSzrGd2NCjzqJ",
        "username": "test.cat",
        "name": "Test Cat"
      },
      "_updatedAt": "2025-10-28T06:32:52.983Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "hello world"
            }
          ]
        }
      ]
    },
    "lm": "2025-10-28T06:32:52.861Z",
    "encrypted": false,
    "e2eKeyId": "8ee4c64e1012",
    "retention": {
      "enabled": false,
      "overrideGlobal": false
    },
    "announcement": "testing announcement",
    "announcementDetails": null,
    "customFields": {
      "company": "sell-and-more"
    }
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The bodyParam \"customFields\" is required with a type like object."
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="set-group-custom-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-group-custom-fields-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|object|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» sidepanel|object|false|none|none|
|» » items|[string]|false|none|none|
|» teamId|string|false|none|none|
|» teamMain|boolean|false|none|none|
|» rolePrioritiesCreated|integer|false|none|none|
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
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
|» lm|string|false|none|none|
|» encrypted|boolean|false|none|none|
|» e2eKeyId|string|false|none|none|
|» retention|object|false|none|none|
|» » enabled|boolean|false|none|none|
|» » overrideGlobal|boolean|false|none|none|
|» announcement|string|false|none|none|
|» announcementDetails|string|false|none|none|
|» customFields|object|false|none|none|
|» » company|string|false|none|none|
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

## Set Group Description

<a id="opIdpost-api-v1-groups.setDescription"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.setDescription \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "description": "Test out everything"
  }'
```

`POST /api/v1/groups.setDescription`

Set the description for the private channel. Permission required: `edit-room`

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.48.0  | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "description": "Test out everything"
}
```

<h3 id="set-group-description-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The private group ID. You can find the IDs by using any of the following endpoints:<br>* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.<br>* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.|
|» description|body|string|true|Enter a description for the private channel.|

> Example responses

> 200 Response

```json
{
  "description": "Testing out everything.",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The bodyParam \"description\" is required"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="set-group-description-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-group-description-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
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

## Set Group Purpose

<a id="opIdpost-api-v1-groups.setPurpose"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.setPurpose \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "purpose": "Test out everything"
  }'
```

`POST /api/v1/groups.setPurpose`

(Obsolete) Sets the description for the group/channel (the same as `groups.setDescription`).

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.48.0  | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "purpose": "Test out everything"
}
```

<h3 id="set-group-purpose-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The private group ID.|
|» purpose|body|string|true|The group purpose|

> Example responses

> 200 Response

```json
{
  "purpose": "Testing out everything.",
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

<h3 id="set-group-purpose-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-group-purpose-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purpose|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set Group as Read Only

<a id="opIdpost-api-v1-groups.setReadOnly"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.setReadOnly \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMei5LbX",
    "readOnly": true
  }'
```

`POST /api/v1/groups.setReadOnly`

Set or unset a private channel as <a href='https://docs.rocket.chat/docs/channels#readonly-channels' target='_blank'>read-only</a>. Permission required: `edit-room`

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.49.0  | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMei5LbX",
  "readOnly": true
}
```

<h3 id="set-group-as-read-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The private group ID. You can find the IDs by using any of the following endpoints:<br>* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.<br>* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.|
|» readOnly|body|boolean|true|Boolean to represent the group read-only status|

> Example responses

> 200 Response

```json
{
  "group": {
    "_id": "ByehQjC44FwMei5LbX",
    "name": "testing-private",
    "t": "p",
    "msgs": 0,
    "u": {
      "_id": "aiPqNoGkjpNDiRx6d",
      "username": "goose160"
    },
    "ts": "2017-01-05T18:02:50.754Z",
    "ro": true,
    "sysMes": true,
    "_updatedAt": "2017-01-05T19:02:24.429Z",
    "usernames": [
      "goose160",
      "graywolf336"
    ],
    "joinCodeRequired": true,
    "muted": []
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The parameter \"roomId\" or \"roomName\" is required [error-room-param-not-provided]",
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

<h3 id="set-group-as-read-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-group-as-read-only-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» usernames|[string]|false|none|none|
|» joinCodeRequired|boolean|false|none|none|
|» muted|[object]|false|none|none|
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

## Set Group Topic

<a id="opIdpost-api-v1-groups.setTopic"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.setTopic \
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

`POST /api/v1/groups.setTopic`

Sets the topic for the private channel. The topic is displayed next to the room name in the header. Permission required: `edit-room`

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.48.0  | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "topic": "Discuss all of the testing"
}
```

<h3 id="set-group-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The group ID. You can find the IDs by using any of the following endpoints:<br>* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.<br>* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.|
|» topic|body|string|true|Enter the group's topic.|

> Example responses

> 200 Response

```json
{
  "topic": "Testing out everything.",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The bodyParam \"topic\" is required"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="set-group-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-group-topic-responseschema">Response Schema</h3>

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

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set Group Type

<a id="opIdpost-api-v1-groups.setType"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.setType \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "type": "c"
  }'
```

`POST /api/v1/groups.setType`

Set the room type. The group type can be either `c` (public) or `p` (private). Any of the following permissions are required:
* `create-c`: This permission is required if you are changing a private channel to a public channel.
* `create-p`: This permission is required if you are changing a public channel to a private room.
* `create-team-channel`: This permission is required if you are changing a team's private channel to a public channel.
* `create-team-group`: This permission is required if you are changing a team's public channel to a private room.

For ABAC-managed private rooms, changing the type from `p` to `c` is rejected with `error-action-not-allowed`.
When the type changes to `c` (public) and the group has ABAC attributes, all ABAC attributes on the group are cleared as part of the conversion.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.5.0   | Added ABAC behavior for `p` -> `c`: ABAC-managed private rooms are rejected, and successful conversions to public clear group ABAC attributes. |
| 0.49.0  | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "type": "c"
}
```

<h3 id="set-group-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The group ID. You can find the IDs by using any of the following endpoints:<br>* <a href='https://developer.rocket.chat/apidocs/get-list-of-user-groups' target='_blank'>Get List of User Groups</a>: This endpoint returns all private channels in the workspace, if you have the required permissions to view them.<br>* <a href='https://developer.rocket.chat/apidocs/get-groups' target='_blank'>Get Groups</a>: This endpoint returns the private channels that you are a member of.|
|» type|body|string|true|Enter the group type.|

> Example responses

> 200 Response

```json
{
  "group": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "testing0",
    "t": "c",
    "msgs": 0,
    "u": {
      "_id": "aiPqNoGkjpNDiRx6d",
      "username": "goose160"
    },
    "ts": "2017-01-05T18:02:50.754Z",
    "ro": false,
    "sysMes": true,
    "_updatedAt": "2017-01-05T19:02:24.429Z",
    "usernames": [
      "goose160",
      "graywolf336"
    ],
    "joinCodeRequired": true,
    "muted": []
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The bodyParam \"type\" is required"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="set-group-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-group-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» usernames|[string]|false|none|none|
|» joinCodeRequired|boolean|false|none|none|
|» muted|[object]|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» method|string|false|none|none|
|» action|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Unarchive Group

<a id="opIdpost-api-v1-groups.unarchive"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.unarchive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX"
  }'
```

`POST /api/v1/groups.unarchive`

Unarchive a private channel. Permission required: `unarchive-room`

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.48.0  | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX"
}
```

<h3 id="unarchive-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The room ID that you want to unarchive.|

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
  "error": "The parameter \"roomId\" or \"roomName\" is required [error-room-param-not-provided]",
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

<h3 id="unarchive-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="unarchive-group-responseschema">Response Schema</h3>

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

## Get Group Files

<a id="opIdget-api-v1-groups.files"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.files \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/groups.files`

Get all media files shared in a private channel.  

### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0   | Removed the `fields` and `query` parameters.       |
| 0.64.0  | Change userId to user object in response       |
| 0.59.0  | Added                                          |

<h3 id="get-group-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomName|query|string|false|The room name.  It is required if the `roomId` is not provided.|
|roomId|query|string|false|The room ID. It is required if the `roomName` is not provided.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|typeGroup|query|string|false|Filter results by the type of file. Available options:<br>- `all`: Return all file types.<br>- `image`: Filter by image files.<br>- `video`: Filter by video files.<br>- `audio`: Filter by audio files.<br>- `text`: Filter by text documents.<br>- `application`: Filter by other file types.|
|name|query|string|false|The name of the file to search for.|

> Example responses

> 200 Response

```json
{
  "files": [
    {
      "_id": "S78TNnvaWGwdYRaCD",
      "name": "images.jpeg",
      "size": 9778,
      "type": "image/jpeg",
      "rid": "GENERAL",
      "description": "",
      "store": "GridFS:Uploads",
      "complete": true,
      "uploading": false,
      "extension": "jpeg",
      "progress": 1,
      "user": {
        "_id": "ksKsKmrjvxzkzxkww",
        "username": "rocket.cat",
        "name": "Rocket Cat"
      },
      "_updatedAt": "2018-03-08T14:47:37.003Z",
      "instanceId": "uZG54xuoKauKHykbQ",
      "etag": "jPaviS9qG22xC5sDC",
      "path": "/file-upload/S78TNnvaWGwdYRaCD/images.jpeg",
      "token": "28cAb868d9",
      "uploadedAt": "2018-03-08T14:47:37.295Z",
      "url": "/file-upload/S78TNnvaWGwdYRaCD/images.jpeg"
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
  "error": "must have required property 'roomId'\n must have required property 'roomName'\n must match exactly one schema in oneOf ",
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

<h3 id="get-group-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-group-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» size|integer|false|none|none|
|» type|string|false|none|none|
|» rid|string|false|none|none|
|» description|string|false|none|none|
|» store|string|false|none|none|
|» complete|boolean|false|none|none|
|» uploading|boolean|false|none|none|
|» extension|string|false|none|none|
|» progress|integer|false|none|none|
|» user|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» instanceId|string|false|none|none|
|» etag|string|false|none|none|
|» path|string|false|none|none|
|» token|string|false|none|none|
|» uploadedAt|string|false|none|none|
|» url|string|false|none|none|
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

## Set Group as Encrypted

<a id="opIdpost-api-v1-groups.setEncrypted"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.setEncrypted \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "encrypted": false,
    "roomId": "JZ8Y2dLfYhsg323Rf"
  }'
```

`POST /api/v1/groups.setEncrypted`

Set a private channel as encrypted. Learn about <a href='https://docs.rocket.chat/v1/docs/end-to-end-encryption-user-guide' target='_blank'>end-to-end encryption here</a>. Permission required: `edit-room`

### Changelog
| Version | Description |
| ------- | ----------- |
| 3.13.0  | Added       |

> Body parameter

```json
{
  "encrypted": false,
  "roomId": "JZ8Y2dLfYhsg323Rf"
}
```

<h3 id="set-group-as-encrypted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» encrypted|body|boolean|true|Whether or not to encrypt the room.|
|» roomId|body|string|true|The group ID. Alternatively, use the `roomName` parameter and enter the group name.|

> Example responses

> 200 Response

```json
{
  "group": {
    "_id": "JZ8Y2dLfYhsg323Rf",
    "fname": "test",
    "description": "",
    "broadcast": false,
    "encrypted": false,
    "teamMain": true,
    "name": "test",
    "t": "p",
    "msgs": 0,
    "usersCount": 1,
    "u": {
      "_id": "d26x6zSkaPSe5gCyy",
      "username": "rodriq"
    },
    "ts": "2021-10-22T11:59:17.029Z",
    "ro": false,
    "teamId": "6172a795c563fc000acc4629",
    "_updatedAt": "2021-10-22T12:00:11.496Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The required \"roomId\" or \"roomName\" param provided does not match any group [error-room-not-found]",
  "errorType": "error-room-not-found"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="set-group-as-encrypted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-group-as-encrypted-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|object|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» description|string|false|none|none|
|» broadcast|boolean|false|none|none|
|» encrypted|boolean|false|none|none|
|» teamMain|boolean|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» teamId|string|false|none|none|
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

## Convert a Group to Team

<a id="opIdpost-api-v1-groups.convertToTeam"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/groups.convertToTeam \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "JZ8Y2dLfYhsg323Rf"
  }'
```

`POST /api/v1/groups.convertToTeam`

Convert a private channel to a team. Permissions required: `create-team`, `edit-room`

### Changelog
| Version | Description |
| ------- | ----------- |
| 3.13.0  | Added       |

> Body parameter

```json
{
  "roomId": "JZ8Y2dLfYhsg323Rf"
}
```

<h3 id="convert-a-group-to-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|Enter the private channel that you want to convert to a private team.|

> Example responses

> 200 Response

```json
{
  "team": {
    "_id": "6172b15bc563fc000acc462e",
    "name": "ddd",
    "type": 1,
    "createdAt": "2021-10-22T12:40:59.928Z",
    "createdBy": {
      "_id": "d26x6zSkaPSe5gCyy",
      "username": "rod"
    },
    "_updatedAt": "2021-10-22T12:40:59.928Z",
    "roomId": "h3HLZkQdrWCPg2RN7"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "team-name-already-exists"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="convert-a-group-to-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="convert-a-group-to-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|team|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» type|integer|false|none|none|
|» createdAt|string|false|none|none|
|» createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» roomId|string|false|none|none|
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

## List Group Roles

<a id="opIdget-api-v1-groups.roles"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/groups.roles?roomId=67ade8ef57422a89b02e2ce3' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/groups.roles`

List all the roles of users in the private channel.

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.65.0  | Added       |

<h3 id="list-group-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|Enter the private channel ID. Alternatively, you can use the `roomName` parameter and enter the private channel's name.|

> Example responses

> 200 Response

```json
{
  "roles": [
    {
      "rid": "BaE62jfDLXK3Xo6BA",
      "u": {
        "_id": "BkNkw3iKgNyhMbPyW",
        "username": "ronnie.dio",
        "name": "Ronnie James Dio"
      },
      "roles": [
        "moderator"
      ],
      "_id": "ehPuGyZBedznJsQHp"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The parameter \"roomId\" or \"roomName\" is required [error-room-param-not-provided]",
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

<h3 id="list-group-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-group-roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roles|[object]|false|none|none|
|» rid|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» roles|[string]|false|none|none|
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

<h1 id="rooms-rooms">Rooms</h1>

## Set Room Notifications

<a id="opIdpost-api-v1-rooms.saveNotification"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.saveNotification \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "5of4weEXaH7yncxz9",
    "notifications": {
      "desktopNotifications": "all",
      "disableNotifications": 0,
      "emailNotifications": "nothing",
      "audioNotificationValue": "beep",
      "desktopNotificationDuration": "2",
      "audioNotifications": "all",
      "unreadAlert": "nothing",
      "hideUnreadStatus": 0,
      "mobilePushNotifications": "mentions"
    }
  }'
```

`POST /api/v1/rooms.saveNotification`

Set the <a href='https://docs.rocket.chat/docs/room-actions#manage-room-notifications' target='_blank'>notification settings</a> of a specific room.

### Changelog
| Version | Description |
| ------- | ----------- |
|0.63.0  | Added        |

> Body parameter

```json
{
  "roomId": "5of4weEXaH7yncxz9",
  "notifications": {
    "desktopNotifications": "all",
    "disableNotifications": 0,
    "emailNotifications": "nothing",
    "audioNotificationValue": "beep",
    "desktopNotificationDuration": "2",
    "audioNotifications": "all",
    "unreadAlert": "nothing",
    "hideUnreadStatus": 0,
    "mobilePushNotifications": "mentions"
  }
}
```

<h3 id="set-room-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The channel's id|
|» notifications|body|object|true|The object that contains the following parameters.|
|» » desktopNotifications|body|string|false|The value for desktop notifications. The options are: <br>- nothing<br>- mentions<br>- all<br>- default|
|» » disableNotifications|body|string|false|The value to disable/enable channel's notifications. <br><br>The options are:<br>- 0<br>- 1|
|» » emailNotifications|body|string|false|The value for email notifications. <br>The options are:<br>- nothing<br>- mentions<br>- all<br>- default|
|» » audioNotificationValue|body|string|false|The value for audio notification sound.|
|» » desktopNotificationDuration|body|string|false|The value for desktop notification duration.|
|» » audioNotifications|body|string|false|The value for audio notifications. <br><br>The options are:<br>- nothing<br>- mentions<br>- all<br>- default|
|» » unreadAlert|body|string|false|The value for unread alerts notifications. <br><br>The options are:<br>- nothing<br>- mentions<br>- all<br>- default|
|» » hideUnreadStatus|body|string|false|The value to disable/enable number of unread messages. <br>The options are:<br>- 0<br>- 1|
|» » mobilePushNotifications|body|string|false|The value for mobile push notifications. <br><br>The options are:<br>- nothing<br>- mentions<br>- all<br>- default|

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

<h3 id="set-room-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-room-notifications-responseschema">Response Schema</h3>

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

## Save Room Draft

<a id="opIdpost-api-v1-rooms.saveDraft"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.saveDraft \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "rid": "GENERAL",
    "draft": "Remember to share the report"
  }'
```

`POST /api/v1/rooms.saveDraft`

Save or clear the authenticated user's message draft for a room or an existing thread. The user must have a subscription to the room.

To save a room draft, omit `tmid`. To save a thread draft, provide the ID of the thread's main message in `tmid`. Send an empty `draft` to clear the corresponding room or thread draft. The draft cannot exceed the workspace's `Message_MaxAllowedSize` setting.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.8.0   | Added the optional `tmid` parameter to save thread drafts |
| 8.5.0   | Added |

> Body parameter

```json
{
  "rid": "GENERAL",
  "draft": "Remember to share the report"
}
```

<h3 id="save-room-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|true|none|
|» rid|body|string|true|The room ID.|
|» draft|body|string|true|The draft text. Send an empty string to clear the draft.|
|» tmid|body|string|false|The ID of the thread's main message. Omit this parameter to save or clear the main room draft.|

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
  "error": "Invalid subscription [error-invalid-subscription]",
  "errorType": "error-invalid-subscription"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="save-room-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="save-room-draft-responseschema">Response Schema</h3>

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

## Get All Room Admins

<a id="opIdget-api-v1-rooms.adminRooms"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.adminRooms \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/rooms.adminRooms`

Retrieves all rooms and admin information.

Permission required: `view-room-administration`

### Changelog
| Version | Description  |
| ------- |--------------|
| 8.7.0  | Restored `customFields` in the response |
| 2.4.0  | Added         |

<h3 id="get-all-room-admins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|types|query|[string]|false|The room types. The possible room types are:<br> - `d`: Direct messages<br> - `c`: Public channel<br> - `p`: Private channel<br> - `discussions`: Team or channel discussions<br> - `teams`: Workspace teams<br> - `l`: Livechat<br> - `v`: Omnichannel VoIP rooms|
|filter|query|string|false|The rooms name|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|string|false|Sort the channels in ascending (`1`) or descending (`-1`) order. The value must be entered as a JSON object. The options are as follows:<br> * `ts`: Sort by creation timestamp. For example, `sort={"ts":-1}`<br> * `usersCount`: Sort by number of users. For example, `sort={"usersCount":1}`<br> * `name`: Sort by the room name. For example, `sort={"name":1}`|

> Example responses

> 200 Response

```json
{
  "rooms": [
    {
      "_id": "654c9d1ca2f73c7460e1918b",
      "fname": "animalGeography",
      "topic": "",
      "broadcast": false,
      "name": "animalGeography",
      "t": "p",
      "msgs": 4,
      "usersCount": 1,
      "u": {
        "_id": "CkCPNcvsvCDfmWLqC",
        "username": "kim.jane",
        "name": "kim.jane"
      },
      "ro": false,
      "default": false,
      "customFields": {
        "department": "engineering",
        "priority": "high"
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

<h3 id="get-all-room-admins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-all-room-admins-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rooms|[object]|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» description|string|false|none|none|
|» broadcast|boolean|false|none|none|
|» federated|boolean|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» topic|string|false|none|none|
|» announcement|string|false|none|none|
|» customFields|object|false|none|The custom fields set on the room.|
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

## Clear Room History

<a id="opIdget-api-v1-rooms.cleanHistory"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.cleanHistory \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "roomId",
    "latest": "2016-12-09T13:42:25.304Z",
    "oldest": "2016-08-30T13:42:25.304Z"
  }'
```

`POST /api/v1/rooms.cleanHistory`

Cleans up a room by removing messages from the provided time range. For details, see the <a href='https://docs.rocket.chat/docs/room-actions#prune-messages-from-a-room' target='_blank'>Prune messages from a room</a> section.

Permission required: `clean-channel-history`

### Changelog
| Version | Description            |
| ------- | ---------------------- |
| 0.64.0  | Added                  |
| 0.67.0  | Added fields `limit`, `excludePinned`, `filesOnly` and `users` |

> Body parameter

```json
{
  "roomId": "roomId",
  "latest": "2016-12-09T13:42:25.304Z",
  "oldest": "2016-08-30T13:42:25.304Z"
}
```

<h3 id="clear-room-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The room ID.|
|» latest|body|string|true|The end of time range of messages.|
|» oldest|body|string|true|The start of the time range of messages.|
|» inclusive|body|boolean|false|Whether messages which land on the latest and oldest dates should be included. By default, the value is false.|
|» excludePinned|body|boolean|false|Whether pinned messages should be deleted. By default, the value is false.|
|» filesOnly|body|boolean|false|Whether to only delete files and keep messages intact. By default, the value is false.|
|» users|body|[string]|false|Specific set of users whose content to delete. By default, the value is [], that is, everyone.|
|» limit|body|integer|false|The amount of messages to prune. By default, the value is 0 (all).|
|» ignoreDiscussion|body|boolean|false|Determines if messages from discussions should be pruned. By default, the value is true.|
|» ignoreThreads|body|boolean|false|Determines if messages from threads should be pruned. By default, the value is true.|

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

<h3 id="clear-room-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="clear-room-history-responseschema">Response Schema</h3>

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

## Get Room History

<a id="opIdget-api-v1-rooms.history"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/rooms.history?roomId=6GFJ3tbmHiyHbahmC' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/rooms.history`

Returns the message history of a room of any type, with cursor-based pagination. Hidden system messages are excluded.

When the **Allow Anonymous Read** (`Accounts_AllowAnonymousRead`) setting is enabled, public channels can be read without authentication.

This endpoint replaces the `loadHistory`, `loadNextMessages`, and `loadSurroundingMessages` Realtime API methods, which were removed in 9.0.0.

Permission required: `preview-c-room` (only to read a public channel you have not joined)

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Added       |

<h3 id="get-room-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|The room ID. You must have access to the room.|
|count|query|integer|false|The number of messages to return. The default is 20. The value is capped by the **Max Record Amount** (`API_Upper_Count_Limit`) setting.|
|previous|query|string|false|The `cursor.previous` value from a previous response. Returns the messages older than that position. If `cursor.previous` is `null`, there are no older messages. Cannot be combined with `next` or `aroundId`.|
|next|query|string|false|The `cursor.next` value from a previous response. Returns the messages newer than that position. If `cursor.next` is `null`, there are no newer messages. Cannot be combined with `previous` or `aroundId`.|
|aroundId|query|string|false|The ID of a message in the room. It loads messages centered around that message, including the message itself. Use it to jump to a specific message, such as a quoted message or a search result. Cannot be combined with `next` or `previous`.|
|lastSeen|query|string(date-time)|false|An ISO 8601 date-time for the user's last-read position. It does not limit the returned messages. When the oldest returned message is newer than this value, the response includes `firstUnread` and `unreadNotLoaded`.|
|showThreadMessages|query|boolean|false|Whether to include thread replies that were not also sent to the room. The default is `true`.|

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
      "rid": "6GFJ3tbmHiyHbahmC",
      "msg": "Thanks, I will take a look this afternoon.",
      "ts": "2026-09-23T10:00:00.000Z",
      "u": {
        "_id": "kP3wQz8LmNvT5rXyB",
        "username": "sam.okafor",
        "name": "Sam Okafor"
      },
      "_updatedAt": "2026-09-23T10:00:00.000Z",
      "mentions": [],
      "channels": []
    }
  ],
  "cursor": {
    "next": null,
    "previous": "1790157600000"
  },
  "unreadNotLoaded": 0,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Only one of \"next\", \"previous\" and \"aroundId\" can be provided [error-cursor-conflict]",
  "errorType": "error-cursor-conflict"
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

<h3 id="get-room-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden. You cannot access the room, or the room is a public channel that you have not joined and you do not have the `preview-c-room` permission.|Inline|
|404|Not Found|Not Found. The room does not exist, or the message in `aroundId` is not a visible message in the room.|Inline|

<h3 id="get-room-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|The messages, ordered newest first.|
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
|cursor|object|false|none|none|
|» next|string \| null|false|none|The cursor for newer messages, or `null` if there are none.|
|» previous|string \| null|false|none|The cursor for older messages, or `null` if there are none.|
|firstUnread|object|false|none|The oldest unread message that was not loaded in this response. Returned only when `lastSeen` is provided and unread messages exist beyond the returned messages.|
|unreadNotLoaded|integer|false|none|The number of unread messages newer than `lastSeen` that were not loaded in this response.|
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

## Get Room Information

<a id="opIdget-api-v1-rooms.info"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.info \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f'
```

`GET /api/v1/rooms.info`

Retrieves the information about the room.

Users with the `view-room-administration` permission can also retrieve public and private rooms they are not a member of, except rooms managed by ABAC. Users without this permission who request a private room they are not a member of receive a `400` error with `not-allowed`.

### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0   | Removed the `fields` parameter. Users with the `view-room-administration` permission can read public and private rooms they are not a member of, except rooms managed by ABAC.       |
|0.72.0   | Added       |

<h3 id="get-room-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|roomId|query|string|false|The room ID. It is required if the `roomName` is not provided.|
|roomName|query|string|false|The room name.  It is required if the `roomId` is not provided.|

> Example responses

> 200 Response

```json
{
  "room": {
    "_id": "66ed2dba40141d95f32c292b",
    "fname": "new-channel",
    "_updatedAt": "2024-09-20T12:29:08.284Z",
    "customFields": {},
    "topic": "",
    "broadcast": false,
    "encrypted": false,
    "name": "new-channel",
    "t": "p",
    "msgs": 3,
    "usersCount": 2,
    "u": {
      "_id": "C38WSSzrGd2NCjzqJ",
      "username": "test.cat",
      "name": "test.cat"
    },
    "ts": "2024-09-20T08:09:30.417Z",
    "ro": false,
    "teamId": "66c82d78237405fc05fc1ef1",
    "default": false,
    "sysMes": true,
    "lastMessage": {
      "_id": "xZhJfE4rmaosjHZCe",
      "rid": "66ed2dba40141d95f32c292b",
      "msg": "testing",
      "alias": null,
      "ts": "2024-09-20T12:27:53.356Z",
      "u": {
        "_id": "C38WSSzrGd2NCjzqJ",
        "username": "test.cat",
        "name": "test.cat"
      },
      "_updatedAt": "2024-09-20T12:27:53.397Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "testing"
            }
          ]
        }
      ]
    },
    "lm": "2024-09-20T12:27:53.356Z"
  },
  "team": {
    "_id": "66c82d78237405fc05fc1ef1",
    "name": "test-team",
    "type": 0,
    "roomId": "66c82d78237405fc05fc1eef"
  },
  "parent": {
    "_id": "66c82d78237405fc05fc1eef",
    "fname": "test-team",
    "name": "test-team",
    "t": "c"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The parameter \"roomId\" or \"roomName\" is required [error-roomid-param-not-provided]",
  "errorType": "error-roomid-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-room-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK<br><br>The response includes the following objects:<br>* `parent`: Represents the parent of a room. For discussions, this is the room where the discussion was created, identified by `prid`. For rooms inside a team, the parent will be the team's main room, identified by `team.roomId`. For other rooms, this property is undefined.<br>* `team`: Represents the team a room is part of. For rooms inside a team, this is the team identified by the `teamId` property. For everything else, this is undefined.|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-room-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|room|object|false|none|none|
|» _id|string|false|none|none|
|» ts|string|false|none|none|
|» t|string|false|none|none|
|» name|string|false|none|none|
|» usernames|[object]|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» _updatedAt|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» default|boolean|false|none|none|
|» lastMessage|object|false|none|none|
|» » _id|string|false|none|none|
|» » t|string|false|none|none|
|» » rid|string|false|none|none|
|» » ts|string|false|none|none|
|» » msg|string|false|none|none|
|» » alias|string \| null|false|none|none|
|» » attachments|[object]|false|none|none|
|» » file|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » name|string|false|none|none|
|» » » type|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » groupable|boolean|false|none|none|
|» » drid|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» lm|string|false|none|none|
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

## Get Room Discussions

<a id="opIdget-api-v1-rooms.getDiscussions"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.getDiscussions \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/rooms.getDiscussions`

Get all <a href='https://docs.rocket.chat/docs/discussions' target='_blank'>discussions</a> of a room. 

### Changelog
| Version | Description   |
| ------- | --------------|
|9.0.0   | Removed the `fields` and `query` parameters.       |
| 1.0.0   | Added         |

<h3 id="get-room-discussions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomName|query|string|false|The room name.  It is required if the `roomId` is not provided.|
|roomId|query|string|false|The room ID. It is required if the `roomName` is not provided.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|string|false|Sort the channels in ascending (`1`) or descending (`-1`) order. The value must be entered as a JSON object. The options are as follows:<br> * `fname`: Sort by discussion name. For example, `sort={"fname":1}` (this is the default sorting mechanism).<br> * `ts`: Sort by creation timestamp. For example, `sort={"ts":-1}`<br> * `usersCount`: Sort by number of users. For example, `sort={"usersCount":1}`|

> Example responses

> 200 Response

```json
{
  "discussions": [
    {
      "_id": "6514d34ea2f73c7460e18cb4",
      "fname": "test-discussion",
      "_updatedAt": "2023-09-28T01:14:04.275Z",
      "topic": "general",
      "prid": "GENERAL",
      "encrypted": false,
      "name": "M75nSgA3uYsnTbKRu",
      "t": "c",
      "msgs": 1,
      "usersCount": 1,
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie",
        "name": "test test"
      },
      "ts": "2023-09-28T01:13:50.574Z",
      "ro": false,
      "default": false,
      "sysMes": true,
      "lastMessage": {
        "_id": "pnm4kh84HfncDEZj7",
        "rid": "6514d34ea2f73c7460e18cb4",
        "msg": "Hi guys , this is for SWE team",
        "ts": "2023-09-28T01:14:04.119Z",
        "u": {
          "_id": "rbAXPnMktTFbNpwtJ",
          "username": "roxie",
          "name": "test test"
        },
        "_updatedAt": "2023-09-28T01:14:04.233Z",
        "urls": [],
        "mentions": [],
        "channels": [],
        "md": [
          {
            "type": "PARAGRAPH",
            "value": [
              {
                "type": "PLAIN_TEXT",
                "value": "Hi guys , this is for SWE team"
              }
            ]
          }
        ]
      },
      "lm": "2023-09-28T01:14:04.119Z"
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

<h3 id="get-room-discussions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-room-discussions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discussions|[object]|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» topic|string|false|none|none|
|» prid|string|false|none|none|
|» encrypted|boolean|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
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
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
|» lm|string|false|none|none|
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

## Get Rooms

<a id="opIdget-api-v1-rooms.get"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.get \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/rooms.get`

Get all opened rooms (all joined public & private channels and all DMs) of the authenticated user.

### Changelog
| Version | Description   |
| ------- | --------------|
| 0.72.0  | Added         |

<h3 id="get-rooms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|updatedSince|query|string|false|A date as an ISO string. When you provide the `updatedSince` query parameter, then the update and remove in the response will contain only those updated and removed since the specified date and time.|

> Example responses

> 200 Response

```json
{
  "update": [
    {
      "_id": "GENERAL",
      "ts": "2024-02-14T14:34:49.365Z",
      "t": "c",
      "name": "general",
      "usernames": [],
      "msgs": 55,
      "usersCount": 36,
      "_updatedAt": "2024-07-16T08:49:34.732Z",
      "u": {
        "_id": "rocket.cat",
        "username": "rocket.cat",
        "name": "Rocket.Cat"
      },
      "default": true,
      "lastMessage": {
        "_id": "668fc2bbffe932842327c1ff",
        "t": "discussion-created",
        "rid": "GENERAL",
        "ts": "2024-07-11T11:32:11.220Z",
        "msg": "Discussion",
        "u": {
          "_id": "5m4hjvzCTRCqwPrD2",
          "username": "Rama",
          "name": "Raghav Ram"
        },
        "groupable": false,
        "drid": "668fc2bbffe932842327c1fd",
        "_updatedAt": "2024-07-11T11:32:11.220Z"
      },
      "lm": "2024-07-11T11:32:11.220Z"
    },
    {
      "_id": "WbYJfC5kTArcECGkpfZ3bvXC72pobjFPLJ",
      "t": "d",
      "usernames": [
        "user2",
        "user1"
      ],
      "usersCount": 2,
      "msgs": 2,
      "ts": "2024-07-10T13:48:14.998Z",
      "uids": [
        "WbYJfC5kTArcECGkp",
        "fZ3bvXC72pobjFPLJ"
      ],
      "default": false,
      "ro": false,
      "sysMes": true,
      "_updatedAt": "2024-07-10T13:48:28.300Z",
      "lastMessage": {
        "_id": "XHjLcN3pCe8snaoTm",
        "rid": "WbYJfC5kTArcECGkpfZ3bvXC72pobjFPLJ",
        "msg": "again",
        "ts": "2024-07-10T13:48:28.262Z",
        "u": {
          "_id": "fZ3bvXC72pobjFPLJ",
          "username": "user1",
          "name": "user1"
        },
        "_updatedAt": "2024-07-10T13:48:28.296Z",
        "urls": [],
        "mentions": [],
        "channels": [],
        "md": [
          {
            "type": "PARAGRAPH",
            "value": [
              {
                "type": "PLAIN_TEXT",
                "value": "again"
              }
            ]
          }
        ]
      },
      "lm": "2024-07-10T13:48:28.262Z"
    },
    {
      "_id": "fZ3bvXC72pobjFPLJrocket.cat",
      "t": "d",
      "usernames": [
        "user1",
        "rocket.cat"
      ],
      "usersCount": 2,
      "msgs": 15,
      "ts": "2024-02-21T02:00:01.657Z",
      "uids": [
        "fZ3bvXC72pobjFPLJ",
        "rocket.cat"
      ],
      "default": false,
      "ro": false,
      "sysMes": true,
      "_updatedAt": "2024-07-17T02:00:05.203Z",
      "lastMessage": {
        "rid": "fZ3bvXC72pobjFPLJrocket.cat",
        "msg": "*Update your Rocket.Chat*\nNew version available (6.10.0)\nhttps://github.com/RocketChat/Rocket.Chat/releases/tag/6.10.0",
        "ts": "2024-07-17T02:00:05.161Z",
        "u": {
          "_id": "rocket.cat",
          "username": "rocket.cat",
          "name": "Rocket.Cat"
        },
        "_id": "c4PzLLTy4fDSCmm4F",
        "_updatedAt": "2024-07-17T02:00:05.198Z",
        "urls": [
          {
            "url": "https://github.com/RocketChat/Rocket.Chat/releases/tag/6.10.0",
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
                "value": "New version available (6.10.0)"
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
                    "value": "https://github.com/RocketChat/Rocket.Chat/releases/tag/6.10.0"
                  },
                  "label": [
                    {
                      "type": "PLAIN_TEXT",
                      "value": "https://github.com/RocketChat/Rocket.Chat/releases/tag/6.10.0"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "lm": "2024-07-17T02:00:05.161Z"
    }
  ],
  "remove": [],
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

<h3 id="get-rooms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-rooms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|update|[object]|false|none|none|
|» _id|string|false|none|none|
|» ts|string|false|none|none|
|» t|string|false|none|none|
|» name|string|false|none|none|
|» usernames|[string]|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» _updatedAt|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» default|boolean|false|none|none|
|» lastMessage|object|false|none|none|
|» » _id|string|false|none|none|
|» » t|string|false|none|none|
|» » rid|string|false|none|none|
|» » ts|string|false|none|none|
|» » msg|string|false|none|none|
|» » alias|string \| null|false|none|none|
|» » attachments|[[Attachment](#schemaattachment)]|false|none|none|
|» » file|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » name|string|false|none|none|
|» » » type|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » groupable|boolean|false|none|none|
|» » drid|string|false|none|none|
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
|» » » » value|string|false|none|none|
|» lm|string|false|none|none|
|» uids|[string]|false|none|none|
|» ro|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|remove|[object]|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Join a Room

<a id="opIdpost-api-v1-rooms.join"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.join \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX",
    "joinCode": "1234"
  }'
```

`POST /api/v1/rooms.join`

Join a room of any type, including public channels, private groups, and discussions. Unlike the <a href='https://developer.rocket.chat/apidocs/join-a-channel' target='_blank'>channels.join</a> endpoint, which only joins public channels, this endpoint applies to all kinds of rooms. 

### Changelog
| Version      | Description |
| ------------ | ----------- |
| 8.6.0   | Added       |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX",
  "joinCode": "1234"
}
```

<h3 id="join-a-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» roomId|body|string|true|The ID of the room to join. Provide either `roomId` or `roomName`.|
|» joinCode|body|string|false|The join code of the room. Rooms can be password-protected. In that case, users must enter the password for access. The join code isn't needed if the user has the `join-without-join-code` permission.|
|» *oneOf*|body|object|false|none|
|» roomName|body|string|true|The name of the room to join. Provide either `roomId` or `roomName`.|
|» joinCode|body|string|false|The join code of the room. Rooms can be password-protected. In that case, users must enter the password for access. The join code isn't needed if the user has the `join-without-join-code` permission.|

> Example responses

> 200 Response

```json
{
  "room": {
    "_id": "ByehQjC44FwMeiLbX",
    "name": "general",
    "fname": "general",
    "t": "c",
    "msgs": 8,
    "usersCount": 2,
    "u": {
      "_id": "rocketchat.internal.admin.test",
      "username": "rocketchat.internal.admin.test"
    },
    "ts": "2026-01-16T12:00:04.783Z",
    "ro": false,
    "sysMes": true,
    "default": true,
    "_updatedAt": "2026-01-16T12:06:30.426Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Match error: Missing key 'roomId'",
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

<h3 id="join-a-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="join-a-room-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|room|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» fname|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
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

## Leave Room

<a id="opIdpost-api-v1-rooms.leave"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.leave \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX"
  }'
```

`POST /api/v1/rooms.leave`

Leave a room. The following permissions are required:
* `leave-c`: To leave a public room.
* `leave-p`: To leave private room.

### Changelog
| Version | Description   |
| ------- | --------------|
| 0.72.0  | Added         |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX"
}
```

<h3 id="leave-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|false|The room ID that you want to leave.|

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

<h3 id="leave-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="leave-room-responseschema">Response Schema</h3>

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

## Delete Room

<a id="opIdget-api-v1-rooms.delete"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ByehQjC44FwMeiLbX"
  }'
```

`POST /api/v1/rooms.delete`

Delete a room from the workspace. The following permissions are required:
* `delete-c`: To delete a public room.
* `delete-d`: To delete direct messages.
* `delete-p`: To delete private rooms.
* `delete-team`: To delete a team.
* `delete-team-channel`: To delete a channel within a team, also requires the `delete-c` permission.
* `delete-team-group`: To delete a private channel within a team, also requires the `delete-p` permission.

> You can't use this endpoint to delete a team's main room. Use [Delete a Team endpoint](https://developer.rocket.chat/apidocs/delete-a-team) instead.

### Changelog
| Version | Description   |
| ------- | --------------|
| 5.4.0   | Added         |

> Body parameter

```json
{
  "roomId": "ByehQjC44FwMeiLbX"
}
```

<h3 id="delete-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The room ID that you want to delete.|

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
  "error": "The 'roomId' param is required"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="delete-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="delete-room-responseschema">Response Schema</h3>

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

## Favorite/Unfavourite a Room

<a id="opIdpost-api-v1-rooms.favorite"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.favorite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "GENERAL",
    "favorite": true
  }'
```

`POST /api/v1/rooms.favorite`

Mark/Unmark a room as favourite.

### Changelog
| Version | Description   |
| ------- | --------------|
| 0.64.0   | Added        |

> Body parameter

```json
{
  "roomId": "GENERAL",
  "favorite": true
}
```

<h3 id="favoriteunfavourite-a-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The room ID. Alternatively, enter the `roomName` parameter and provide the room's name as the value. You must be a member of the room.|
|» favorite|body|boolean|true|A boolean to mark the room as favourite or not.|

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

<h3 id="favoriteunfavourite-a-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="favoriteunfavourite-a-room-responseschema">Response Schema</h3>

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

## Autocomplete Room Name for Team

<a id="opIdget-api-v1-rooms.autocomplete.availableForTeams"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/rooms.autocomplete.availableForTeams?name=data-loss-prevention' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/rooms.autocomplete.availableForTeams`

Autocompletes room name available for conversion to team.

<h3 id="autocomplete-room-name-for-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|name|query|string|true|The name of the room|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "_id": "siyr2oWQJBjQjhLwr",
      "fname": "try",
      "name": "try",
      "t": "c"
    }
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

<h3 id="autocomplete-room-name-for-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="autocomplete-room-name-for-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Autocomplete Room Name for Private and Public Rooms

<a id="opIdget-api-v1-rooms.autocomplete.channelAndPrivate"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/rooms.autocomplete.channelAndPrivate?selector=%7B%22name%22%3A%22ran%22%7D' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/rooms.autocomplete.channelAndPrivate`

List the public and private rooms whose names match a given string, excluding <a href="https://docs.rocket.chat/docs/discussions" target="_blank">discussions</a>, <a href="https://docs.rocket.chat/docs/direct-messages" target="_blank">DMs</a>, and <a href="https://docs.rocket.chat/docs/omnichannel" target="_blank">omnichannel rooms</a>. The endpoint is valuable when performing search operations. It returns only rooms that the user belongs to.

<h3 id="autocomplete-room-name-for-private-and-public-rooms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|selector|query|string|true|The term to be completed. It only applies to room name.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "_id": "664f0d525df46832f75b1860",
      "fname": "rancher",
      "name": "rancher",
      "t": "p"
    },
    {
      "_id": "6630e94ad2226209149c67e2",
      "fname": "random",
      "name": "random",
      "t": "c"
    },
    {
      "_id": "664f148f5df46832f75b18b2",
      "fname": "ranmowe",
      "name": "ranmowe",
      "t": "p"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The 'selector' param is required"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="autocomplete-room-name-for-private-and-public-rooms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="autocomplete-room-name-for-private-and-public-rooms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
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

## Admin Autocomplete Room Name for Private and Public Rooms

<a id="opIdget-api-v1-rooms.autocomplete.adminRooms"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/rooms.autocomplete.adminRooms?selector=%7B%22name%22%3A%22ran%22%7D' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/rooms.autocomplete.adminRooms`

List public and private rooms whose names match a given string, excluding <a href="https://docs.rocket.chat/docs/direct-messages" target="_blank">DMs</a>, and <a href="https://docs.rocket.chat/docs/omnichannel" target="_blank">omnichannel rooms</a>. This endpoint is valuable when performing search operations. Only workspace administrators can use it. Any one of the following permissions are required:
* `view-room-administration`
* `can-audit`

<h3 id="admin-autocomplete-room-name-for-private-and-public-rooms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|selector|query|string|true|The term to be completed. It applies to room name and display name.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "_id": "664f0d815df46832f75b1877",
      "fname": "rangig",
      "name": "Ch9xkYwGHnsLe7CQR",
      "t": "c"
    },
    {
      "_id": "664f0d525df46832f75b1860",
      "fname": "rancher",
      "name": "rancher",
      "t": "p"
    },
    {
      "_id": "6630e94ad2226209149c67e2",
      "fname": "random",
      "name": "random",
      "t": "c"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The 'selector' param is required"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="admin-autocomplete-room-name-for-private-and-public-rooms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="admin-autocomplete-room-name-for-private-and-public-rooms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
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

## Get Admin of Room

<a id="opIdget-api-v1-rooms.adminRooms.getRoom"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/rooms.adminRooms.getRoom?rid=654c9d1ca2f73c7460e1918b' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/rooms.adminRooms.getRoom`

Retrieves the admin of a room.

Permission required: `view-room-administration`

### Changelog
| Version | Description     |
| ------- | --------------- |
| 8.7.0   | Restored `customFields` in the response |
| 2.4.0   | Added           |

<h3 id="get-admin-of-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|rid|query|string|true|The room ID.|

> Example responses

> 200 Response

```json
{
  "_id": "ukFsHiySDhMkQyyyF",
  "name": "freightwave",
  "fname": "freightwave",
  "t": "p",
  "msgs": 4,
  "usersCount": 1,
  "u": {
    "_id": "Gd6iymRZBK4C6wqHN",
    "username": "bruno.raymundo"
  },
  "ro": false,
  "default": false,
  "customFields": {
    "department": "engineering",
    "priority": "high"
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

<h3 id="get-admin-of-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-admin-of-room-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|name|string|false|none|none|
|fname|string|false|none|none|
|t|string|false|none|none|
|msgs|integer|false|none|none|
|usersCount|integer|false|none|none|
|u|object|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|ro|boolean|false|none|none|
|default|boolean|false|none|none|
|customFields|object|false|none|The custom fields set on the room.|
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

## Save Room Settings

<a id="opIdpost-api-v1-rooms.saveRoomSettings"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.saveRoomSettings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "rid": "JZ8Y2dLfYhsg323Rf",
    "roomName": "Test-Save-Room",
    "roomDescription": "This is a test room."
  }'
```

`POST /api/v1/rooms.saveRoomSettings`

Updates the settings of an existing room.

For ABAC-managed rooms, the following guardrails apply:

- Changing `roomAnnouncement`, `roomTopic`, or `roomDescription` is rejected with `error-action-not-allowed`.
- Setting `default: true` on an ABAC-managed room is rejected with `error-action-not-allowed`.
- Changing `roomType` from `p` to `c` is rejected with `error-action-not-allowed`. The same guard applies to private rooms in ABAC-managed private teams.
- When `roomType` changes to `c` (public) and conversion is allowed, existing room ABAC attributes are cleared as part of the conversion.

Permission required: `edit-room`

### Changelog
| Version | Description |
| ------- | ------------|
| 8.5.0   | Added ABAC guardrails: announcement, topic, description, default flag, and conversion to public are blocked on ABAC-managed rooms. |
| 3.13.0  | Added       |

> Body parameter

```json
{
  "rid": "JZ8Y2dLfYhsg323Rf",
  "roomName": "Test-Save-Room",
  "roomDescription": "This is a test room."
}
```

<h3 id="save-room-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» rid|body|string|true|The room ID.|
|» roomName|body|string|false|The name of the room.|
|» roomDescription|body|string|false|The description of the room.|
|» roomAvatar|body|string|false|The base64 image.|
|» featured|body|boolean|false|Whether the room is featured or not.|
|» roomTopic|body|string|false|The topic of the room.|
|» roomAnnouncement|body|string|false|The announcement of the room.|
|» roomCustomFields|body|object|false|An object of the custom fields of the room.|
|» roomType|body|string|false|The type of the room. It could be `c` for public rooms or `p` for private rooms.|
|» readOnly|body|boolean|false|Whether the room is read-only or not.|
|» reactWhenReadOnly|body|boolean|false|Whether users can react when the room is read-only.|
|» systemMessages|body|[string]|false|The system messages that the room supports.|
|» default|body|boolean|false|Whether the room is the default room or not.|
|» joinCode|body|string|false|The join code of the room.|
|» streamingOptions|body|object|false|The streaming options of the room.|
|» retentionEnabled|body|boolean|false|Whether retention is enabled for the room or not.|
|» retentionMaxAge|body|string|false|The maximum age (in days) of messages to be retained in the room.|
|» retentionExcludePinned|body|boolean|false|Whether to exclude pinned messages from retention or not.|
|» retentionFilesOnly|body|boolean|false|Whether to retain only files in the room or not.|
|» retentionIgnoreThreads|body|boolean|false|Whether to ignore threads when retaining messages or not.|
|» retentionOverrideGlobal|body|boolean|false|Whether to override the global retention settings for the room or not.|
|» encrypted|body|boolean|false|Whether the room is encrypted or not.|
|» favorite|body|object|false|The favorite settings of the room. Whether the room is marked as favorite and whether it is set as the default room.|
|» sidepanel|body|object|false|List the team's channels or discussions to be displayed in the sidepanel.|
|» » items|body|[string]|false|The options are `discussions` and `channels`.|

> Example responses

> 200 Response

```json
{
  "rid": "JZ8Y2dLfYhsg323Rf",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Invalid room [error-invalid-room]",
  "errorType": "error-invalid-room"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="save-room-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="save-room-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rid|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» method|string|false|none|none|
|» action|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Check if Room Name Exists

<a id="opIdget-api-v1-rooms.nameExists"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/rooms.nameExists?roomName=test-room' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/rooms.nameExists`

Check if the room name exists

<h3 id="check-if-room-name-exists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomName|query|string|true|Enter the room name that you want to check.|

> Example responses

> 200 Response

```json
{
  "exists": true,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'roomName' [error-invalid-params]",
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

<h3 id="check-if-room-name-exists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="check-if-room-name-exists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exists|boolean|false|none|none|
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

## Change Room Archive State

<a id="opIdpost-api-v1-rooms.autocomplete.channelAndPrivate"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.changeArchivationState \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "rid": "iu7jtPAhvEeAS5tNq",
    "action": "archive"
  }'
```

`POST /api/v1/rooms.changeArchivationState`

Archive or unarchive a room. Permissions required:
* `archive-room`: To archive a room.
* `unarchive-room`: To unarchive a room.

### Changelog
| Version | Description      |
| ------- | ---------------- |
| 3.3.0  | Added             |

> Body parameter

```json
{
  "rid": "iu7jtPAhvEeAS5tNq",
  "action": "archive"
}
```

<h3 id="change-room-archive-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» rid|body|string|true|The room Id.|
|» action|body|string|true|It can either be archive or otherwise unarchived.|

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
  "error": "Invalid room [error-invalid-room]",
  "errorType": "error-invalid-room",
  "details": {
    "method": "unarchiveRoom"
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

<h3 id="change-room-archive-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="change-room-archive-state-responseschema">Response Schema</h3>

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
|» method|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Export Room

<a id="opIdpost-api-v1-rooms.export"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "rid": "iu7jtPAhvEeAS5tNq",
    "type": "file",
    "dateFrom": "2000-01-01",
    "dateTo": "2021-11-25",
    "format": "html",
    "toUsers": [
      "test.user"
    ],
    "toEmails": [
      "test@test.com"
    ],
    "messages": [
      "yd6NBgNoiWATgDoFt",
      "BoCjicj9DdYoMHHeo",
      "tajMB3aX3sawFWe8W"
    ],
    "subject": "Test Subject "
  }'
```

`POST /api/v1/rooms.export`

Export room messages to a file or email. When exporting to a file, the ZIP file is stored in the `/tmp` directory on the Rocket.Chat server, and its details are recorded in the `rocketchat_user_data_files` collection in MongoDB.

Permission required: `mail-messages`

### Changelog

| Version | Description                          |
| ------- | ------------------------------------ |
| 3.8.0   | Added                                |


> Body parameter

```json
{
  "rid": "iu7jtPAhvEeAS5tNq",
  "type": "file",
  "dateFrom": "2000-01-01",
  "dateTo": "2021-11-25",
  "format": "html",
  "toUsers": [
    "test.user"
  ],
  "toEmails": [
    "test@test.com"
  ],
  "messages": [
    "yd6NBgNoiWATgDoFt",
    "BoCjicj9DdYoMHHeo",
    "tajMB3aX3sawFWe8W"
  ],
  "subject": "Test Subject "
}
```

<h3 id="export-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» rid|body|string|true|The room ID.|
|» type|body|string|true|How you want the room to be exported. The type of export selected determines the remaining required parameters. It can be either `email` or `file`.|
|» dateFrom|body|string|false|Start date to begin fetching. Use `dateFrom` if  the type is `file`. By default, it selects the oldest possible date.|
|» dateTo|body|string|false|End date for fetching. By default it selects the current date. Use `dateTo` if  the `type` is  `file`.|
|» format|body|string|false|The file type to export as. It can either be `html` or `json`. Use `format` if  the `type` is  `file`.|
|» toUsers|body|[string]|false|An array of users that should recieve the export. ecieve the export. It is required if `type` is `email`.|
|» toEmails|body|[string]|false|An array of any additional emails that should recieve the export. It is required if `type` is `email`. |
|» messages|body|[string]|false|An array of  messageId for  the messages that should be exported. It is required if `type` is `email`.  |
|» subject|body|string|false|The subject of the email. It is required if `type` is `email`. |

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
  "error": "[error-invalid-room]",
  "errorType": "error-invalid-room"
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

<h3 id="export-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="export-room-responseschema">Response Schema</h3>

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

## Mute User in Room

<a id="opIdpost-api-v1-rooms.muteUser"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.muteUser \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "userId": "CkCPNfjfhiwWLqC",
    "roomId": "JZ8Y2dLfYhsg323Rf"
  }'
```

`POST /api/v1/rooms.muteUser`

Mute a particular user in a room. Permission required: `mute-user`. The room becomes read-only for the muted user. They can still view messages but cannot send any until unmuted.

### Changelog

| Version | Description                          |
| ------- | ------------------------------------ |
| 6.8.0   | Added                                |


> Body parameter

```json
{
  "userId": "CkCPNfjfhiwWLqC",
  "roomId": "JZ8Y2dLfYhsg323Rf"
}
```

<h3 id="mute-user-in-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» userId|body|string|true|The user that you want to mute. Alternatively, use the `username` parameter and enter the username as the value.|
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
  "error": "The required \"userId\" or \"username\" param provided does not match any users [error-invalid-user]",
  "errorType": "error-invalid-user"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="mute-user-in-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="mute-user-in-room-responseschema">Response Schema</h3>

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

## Unmute User in Room

<a id="opIdpost-api-v1-rooms.unmuteUser"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.unmuteUser \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "userId": "CkCPNfjfhiwWLqC",
    "roomId": "JZ8Y2dLfYhsg323Rf"
  }'
```

`POST /api/v1/rooms.unmuteUser`

Unmute a particular user in a room. Permission required: `mute-user`

### Changelog

| Version | Description                          |
| ------- | ------------------------------------ |
| 6.8.0   | Added                                |


> Body parameter

```json
{
  "userId": "CkCPNfjfhiwWLqC",
  "roomId": "JZ8Y2dLfYhsg323Rf"
}
```

<h3 id="unmute-user-in-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» userId|body|string|true|The user that you want to unmute. Alternatively, use the `username` parameter.|
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
  "error": "The required \"userId\" or \"username\" param provided does not match any users [error-invalid-user]",
  "errorType": "error-invalid-user"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="unmute-user-in-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="unmute-user-in-room-responseschema">Response Schema</h3>

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

## Create Discussion

<a id="opIdpost-api-v1-rooms.createDiscussion"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.createDiscussion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "prid": "GENERAL",
    "t_name": "Discussion Name"
  }'
```

`POST /api/v1/rooms.createDiscussion`

Creates a new discussion for the room. It requires at least one of the following permissions: `start-discussion` OR `start-discussion-other-user`, AND must be with the following setting enabled: `Discussion_enabled`.
The caller must be a member of the parent room. Apps are exempt from this check.

When **Force end-to-end encryption on private rooms** is enabled, you cannot create a discussion under an unencrypted private room. Make the parent room public or enable encryption on it before creating the discussion.

### Changelog
| Version | Description                                                                                   |
| ------- | --------------------------------------------------------------------------------------------- |
| 9.0.0   | Requires the caller to be a member of the parent room. Apps are exempt.                       |
| 8.8.0   | Added forced encryption checks for private-room discussions.                                      |
| 1.0.0   | Added                                                                                         |

> Body parameter

```json
{
  "prid": "GENERAL",
  "t_name": "Discussion Name"
}
```

<h3 id="create-discussion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» prid|body|string|true|Parent room ID of the discussion.|
|» t_name|body|string|true|Discussion name.|
|» users|body|[string]|false|Array of users to join in the discussion, if not provided, it will be an empty array. (Note: if provided, it must be an array).|
|» pmid|body|string|false|Parent message ID (if the discussion comes from a message).|
|» reply|body|string|false|The reply of the discussion.|

> Example responses

> 200 Response

```json
{
  "discussion": {
    "rid": "cgk88DHLHexwMaFWh",
    "name": "WJNEAM7W45wRYitHo",
    "fname": "Discussion Name",
    "t": "p",
    "msgs": 0,
    "usersCount": 0,
    "u": {
      "_id": "rocketchat.internal.admin.test",
      "username": "rocketchat.internal.admin.test"
    },
    "topic": "general",
    "prid": "GENERAL",
    "ts": "2019-04-03T01:35:32.271Z",
    "ro": false,
    "sysMes": true,
    "default": false,
    "_updatedAt": "2019-04-03T01:35:32.280Z",
    "_id": "cgk88DHLHexwMaFWh"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Workspace policy requires all private rooms to be encrypted. To create this discussion, make the parent channel public or enable encryption on it. [error-encrypted-private-rooms-enforced-discussion]",
  "errorType": "error-encrypted-private-rooms-enforced-discussion"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="create-discussion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="create-discussion-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discussion|object|false|none|none|
|» rid|string|false|none|none|
|» name|string|false|none|none|
|» fname|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» topic|string|false|none|none|
|» prid|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» default|boolean|false|none|none|
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

## Get Room Images

<a id="opIdget-api-v1-rooms.images"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/rooms.images?roomId=654c9d1ca2f73c7460e1918b' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/rooms.images`

Retrieves the images of a room that you are a member of.

<h3 id="get-room-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|The room ID.|
|startingFromId|query|string|false|Filter images using the file ID.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "files": [
    {
      "_id": "666fdecb4ac1a8e6404ededd",
      "name": "oauth-screen.png",
      "size": 78441,
      "type": "image/png",
      "rid": "6630e42b72f069422b1022c1",
      "userId": "yuT9xp9eEd6HqB3n8",
      "store": "GridFS:Uploads",
      "_updatedAt": "2024-06-17T06:59:23.608Z",
      "identify": {
        "format": "png",
        "size": {
          "width": 1580,
          "height": 884
        }
      },
      "complete": true,
      "etag": "yvaG9cjz6YRRdMg4L",
      "path": "/file-upload/666fdecb4ac1a8e6404ededd/oauth-screen.png",
      "progress": 1,
      "token": "1888eA0A0B",
      "uploadedAt": "2024-06-17T06:59:23.602Z",
      "uploading": false,
      "url": "https://pro.writing-demo.dev.rocket.chat/file-upload/666fdecb4ac1a8e6404ededd/oauth-screen.png",
      "typeGroup": "image"
    },
    {
      "_id": "666fddea4ac1a8e6404eded7",
      "name": "11.jpg",
      "size": 83832,
      "type": "image/jpeg",
      "rid": "6630e42b72f069422b1022c1",
      "userId": "yuT9xp9eEd6HqB3n8",
      "store": "GridFS:Uploads",
      "_updatedAt": "2024-06-17T06:55:38.044Z",
      "identify": {
        "format": "jpeg",
        "size": {
          "width": 839,
          "height": 932
        }
      },
      "complete": true,
      "etag": "3jZf7SJZFCPpf9JK8",
      "path": "/file-upload/666fddea4ac1a8e6404eded7/11.jpg",
      "progress": 1,
      "token": "498bb849C8",
      "uploadedAt": "2024-06-17T06:55:38.029Z",
      "uploading": false,
      "url": "https://pro.writing-demo.dev.rocket.chat/file-upload/666fddea4ac1a8e6404eded7/11.jpg",
      "typeGroup": "image"
    }
  ],
  "count": 50,
  "offset": 0,
  "total": 2,
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

<h3 id="get-room-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-room-images-responseschema">Response Schema</h3>

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
|» identify|object|false|none|none|
|» » format|string|false|none|none|
|» » size|object|false|none|none|
|» » » width|integer|false|none|none|
|» » » height|integer|false|none|none|
|» complete|boolean|false|none|none|
|» etag|string|false|none|none|
|» path|string|false|none|none|
|» progress|integer|false|none|none|
|» token|string|false|none|none|
|» uploadedAt|string|false|none|none|
|» uploading|boolean|false|none|none|
|» url|string|false|none|none|
|» typeGroup|string|false|none|none|
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

## Audit and Get Room Members

<a id="opIdget-api-v1-audit-rooms.members"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/audit/rooms.members?roomId=66cd971f6fcbb8e8b3cf8e69' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/audit/rooms.members`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Audit any public or private room and view the room members. You don't need to be a member of the room.

Permission required: `view-members-list-all-rooms`

### Changelog
| Version | Description |
| ------- | ----------- |
| 6.12.0   | Added       |

<h3 id="audit-and-get-room-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|Enter the room ID that you want to audit.|
|filter|query|string|false|Filter the results using the text that you want to view.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "members": [
    {
      "_id": "FSA63o85Poa2EQvAH",
      "status": "offline",
      "name": "cat kate",
      "username": "cat.kate",
      "_updatedAt": "2024-08-27T09:07:03.795Z"
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="audit-and-get-room-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="audit-and-get-room-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[object]|false|none|none|
|» _id|string|false|none|none|
|» status|string|false|none|none|
|» name|string|false|none|none|
|» username|string|false|none|none|
|» _updatedAt|string|false|none|none|
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

## Get Room Members Ordered by Role

<a id="opIdget-api-v1-rooms.membersOrderedByRole"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/rooms.membersOrderedByRole?roomId=66cd971f6fcbb8e8b3cf8e69' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/rooms.membersOrderedByRole`

Get room members ordered by their roles. This endpoint sorts the members according to their role in the room in the order `Owners` > `Moderators` > all other members. This can be reversed using the query paramter `sort={"rolePriority":-1}`. You need not be a member of the room.

If the room is a broadcast room, you need the `view-broadcast-member-list` permission to view the room members.

### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0   | Returns `403` instead of `401` when the caller is not authorized.       |
| 7.3.0   | Added       |

<h3 id="get-room-members-ordered-by-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|Enter the room ID.|
|roomName|query|string|false|Instead of using the room ID, you can enter the room name.|
|filter|query|string|false|Filter the results by using the text that you want to view.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|string|false|Sort the rooms in ascending (`1`) or descending (`-1`) order. The value must be entered as a JSON string. The options are as follows:<br> * `rolePriority`: Sort by priority of role (`Owners` > `Moderators` > all other members). For example, `sort={"rolePriority":-1}`<br> * `username`: Sort by usernames. For example, `sort={"username":-1}`|
|status|query|[string]|false|Enter the user status for which you want the results. For example, `online`, `away`, `offline`.|

> Example responses

> 200 Response

```json
{
  "members": [
    {
      "_id": "C38WSSzrGd2NCjzqJ",
      "username": "test.cat",
      "status": "online",
      "_updatedAt": "2025-01-22T07:49:47.830Z",
      "name": "test.cat",
      "roles": [
        "owner"
      ]
    },
    {
      "_id": "P2dgWPPw5veigwcdK",
      "status": "offline",
      "_updatedAt": "2025-01-22T07:13:19.734Z",
      "name": "Fun Smith",
      "username": "fun.smith",
      "roles": [
        "moderator"
      ]
    },
    {
      "_id": "CNmyTxexxauJ4wrTW",
      "username": "agent1",
      "status": "offline",
      "_updatedAt": "2025-01-22T07:32:57.238Z",
      "name": "agent1"
    },
    {
      "_id": "FSA63o85Poa2EQvAH",
      "status": "offline",
      "name": "cat kate",
      "username": "cat.kate",
      "_updatedAt": "2025-01-22T08:04:12.251Z",
      "roles": [
        "leader"
      ]
    }
  ],
  "count": 4,
  "offset": 0,
  "total": 4,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'roomId'\n must have required property 'roomName'\n must match exactly one schema in oneOf [error-invalid-params]",
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
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-room-members-ordered-by-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-room-members-ordered-by-role-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[object]|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» status|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» name|string|false|none|none|
|» roles|[string]|false|none|none|
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

## Open a Room

<a id="opIdpost-api-v1-rooms.open"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.open \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "GENERAL"
  }'
```

`POST /api/v1/rooms.open`

Marks a room as "open" for the user, i.e. removes it from the
user's list of hidden rooms and puts it back in the sidebar.

> Body parameter

```json
{
  "roomId": "GENERAL"
}
```

<h3 id="open-a-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The ID of the room to open.|

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

<h3 id="open-a-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="open-a-room-responseschema">Response Schema</h3>

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

## Hide Room

<a id="opIdpost-api-v1-rooms.hide"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.hide \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "6759dea438288929cff551c"
  }'
```

`POST /api/v1/rooms.hide`

Hide rooms without restrictions based on type. You can only hide a room if you have access to it.

### Changelog

| Version | Description                          |
| ------- | ------------------------------------ |
|9.0.0   | Returns `403` instead of `401` when the caller is not authorized.       |
| 7.4.0   | Added                                |


> Body parameter

```json
{
  "roomId": "6759dea438288929cff551c"
}
```

<h3 id="hide-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|false|none|

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

> 403 Response

```json
{
  "success": false,
  "error": "forbidden"
}
```

<h3 id="hide-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="hide-room-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

## Get Room Roles

<a id="opIdget-api-v1-rooms.roles"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/rooms.roles?rid=658282732dd9f928ad989e98' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/rooms.roles`

Get the list of roles in a specific room. This endpoint returns users with the `Owner`, `Leader`, and `Moderator` room roles. You can refer to the <a href='https://docs.rocket.chat/docs/roles-in-rocketchat' target='_blank'>Roles user guide</a> for more details on roles in Rocket.Chat.

### Changelog
| Version | Description                          |
| ------- | ------------------------------------ |
| 7.10.0   | Added                               |

<h3 id="get-room-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|rid|query|string|true|Enter the room ID for which you want to view the room roles.|

> Example responses

> 200 Response

```json
{
  "roles": [
    {
      "_id": "668c75b2b319fc80bf0ed3a1",
      "rid": "658282732dd9f928ad989e98",
      "u": {
        "_id": "P2dgWPPw5veigwcdK",
        "username": "jane.doe",
        "name": "Jane Doe"
      },
      "roles": [
        "moderator"
      ]
    },
    {
      "_id": "6819edfa30c9c71254e45d18",
      "rid": "658282732dd9f928ad989e98",
      "u": {
        "_id": "74HrDgvTTxT56o8R8",
        "username": "mary.shelley",
        "name": "Mary Shelley"
      },
      "roles": [
        "leader"
      ]
    },
    {
      "_id": "668c7717b319fc80bf0ed3b0",
      "rid": "658282732dd9f928ad989e98",
      "u": {
        "_id": "qHWhoJwwgk4bwcoNq",
        "username": "test.user"
      },
      "roles": [
        "moderator"
      ]
    },
    {
      "_id": "6690c37ab319fc80bf0ed407",
      "rid": "658282732dd9f928ad989e98",
      "u": {
        "_id": "C38WSSzrGd2NCjzqJ",
        "username": "test.cat"
      },
      "roles": [
        "owner"
      ]
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "errorType": "error-invalid-params",
  "error": "must have required property 'rid'"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-room-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-room-roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roles|[object]|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» roles|[string]|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|errorType|string|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Check Room Member

<a id="opIdget-api-v1-rooms.isMember"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/rooms.isMember?roomId=string&userId=string' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/rooms.isMember`

Use this endpoint to check whether or not a user is a member of a specific room. If the user is not a member of the room, an error response (`error-user-not-found`) is returned. You can only get the results for the rooms that you are a member of. Otherwise, you get a forbidden error response.

<h3 id="check-room-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|roomId|query|string|true|Enter the room ID in which you want to check for the user.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|userId|query|string|true|Enter the user ID that you want to check. Alternatively, you can use the `username` parameter and provide the user name instead of the user ID.|

> Example responses

> 200 Response

```json
{
  "isMember": true,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "error-user-not-found"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="check-room-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="check-room-member-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isMember|boolean|false|none|none|
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

## Autocomplete Room Name With Pagination

<a id="opIdget-api-v1-rooms.autocomplete.channelAndPrivate.withPagination"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/rooms.autocomplete.channelAndPrivate.withPagination?selector=%7B%22name%22%3A%22api%22%7D' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/rooms.autocomplete.channelAndPrivate.withPagination`

List the public and private rooms whose names match a given string, excluding discussions, DMs, and omnichannel rooms. The endpoint is valuable when performing search operations. It returns only rooms that the user belongs to. This endpoint includes pagination query parameters.

<h3 id="autocomplete-room-name-with-pagination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|selector|query|string|true|The search term to be completed. It only applies to the room name.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "_id": "66c82e1e237405fc05fc1ef4",
      "fname": "api-team",
      "name": "api-team",
      "t": "c"
    },
    {
      "_id": "66c88dae237405fc05fc1f06",
      "fname": "api-team2",
      "name": "api-team2",
      "t": "p"
    }
  ],
  "total": 4,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The 'selector' param is required"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="autocomplete-room-name-with-pagination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="autocomplete-room-name-with-pagination-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|total|integer|false|none|none|
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

## Upload Media Files to a Room

<a id="opIdpost-api-v1-rooms.media"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.media/674eca3e43725ce31dd9a2e8 \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -F 'file=@/path/to/file' \
  -F 'content=string'
```

`POST /api/v1/rooms.media/{rid}`

Only users who have access to send messages in a room can upload files there. 

You can't upload any file that exceeds the configured [Maximum File Upload Size](https://docs.rocket.chat/docs/file-upload#general-file-upload-settings1).

To upload media files to a room, follow these steps:
 1. Call this endpoint first. This endpoint uploads the file to the database and returns a file object with the file ID and URL data. Save the file ID, you will need this to send the file in the next step.
 2. To send the file to a room, use the <a href='https://developer.rocket.chat/apidocs/check-uploaded-file' target='_blank'>Send Uploaded File to a Room</a> endpoint.

 The upload is temporary and expires 24 hours after this call. If you don't confirm it within that window, it is discarded and never appears in the room. 

> Body parameter

```yaml
file: string
content: string
```

<h3 id="upload-media-files-to-a-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|rid|path|string|true|The ID of the room where the file will be uploaded.|
|body|body|object|false|none|
|» file|body|string(binary)|true|The file to upload.|
|» content|body|string|false|A JSON-encoded object containing additional metadata for the uploaded file.|

> Example responses

> 200 Response

```json
{
  "file": {
    "_id": "67109d6c25682c7469486008",
    "url": "/file-upload/67109d6c25682c7469486008/Screenshot%202024-10-15%20at%2010.17.39.png"
  },
  "success": true
}
```

<h3 id="upload-media-files-to-a-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="upload-media-files-to-a-room-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|object|false|none|none|
|» _id|string|false|none|none|
|» url|string|false|none|none|
|success|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Send Uploaded File to a Room

<a id="opIdpost-api-v1-rooms.mediaConfirm-rid-fileId"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/rooms.mediaConfirm/66cd971f6fcbb8e8b3cf8e69/69424442ddfe6ceaf280f93f \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "alias": "test",
    "avatar": "https://picsum.photos/200",
    "description": "file upload description parameter",
    "groupable": false,
    "msg": "file upload message parameter",
    "customFields": "{\"priority\": \"low\"}",
    "emoji": ":one:",
    "tmid": "ZSnsznbWKqppnRny5"
  }'
```

`POST /api/v1/rooms.mediaConfirm/{rid}/{fileId}`

Use this endpoint to send an uploaded file to a room. You can use this endpoint only after calling the <a href='https://developer.rocket.chat/apidocs/upload-media-files-to-a-room' target='_blank'>Upload Media Files to a Room</a> endpoint and getting the file ID.

Call it within 24 hours of the upload, using the same user account and room that uploaded the file. Otherwise, the request fails with `invalid-file`.

> Body parameter

```json
{
  "alias": "test",
  "avatar": "https://picsum.photos/200",
  "description": "file upload description parameter",
  "groupable": false,
  "msg": "file upload message parameter",
  "customFields": "{\"priority\": \"low\"}",
  "emoji": ":one:",
  "tmid": "ZSnsznbWKqppnRny5"
}
```

<h3 id="send-uploaded-file-to-a-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|rid|path|string|true|The ID of the room where the file will be sent.|
|fileId|path|string|true|The file ID you get from the <a href='https://developer.rocket.chat/apidocs/upload-media-files-to-a-room' target='_blank'>Upload Files to a Room</a> endpoint.|
|body|body|object|false|none|
|» description|body|string|false|Enter a file description.|
|» fileName|body|string|false|Overrides the file name stored during upload.|
|» fileContent|body|object|false|Overrides the file content stored during upload.|
|» emoji|body|string|false|The emoji you enter will be displayed as the avatar when the message is sent.|
|» groupable|body|boolean|false|Whether or not multiple messages can be grouped.|
|» msg|body|string|false|Enter a message to be sent with the file.|
|» tmid|body|string|false|If you want to send the file to a thread, enter the thread ID here.|
|» avatar|body|string|false|Enter the avatar that will be displayed when the message is sent. You need the `message-impersonate` permission.|
|» alias|body|string|false|Enter the alias that will be used instead of your username when sending the message. You need the `message-impersonate` permission.|
|» customFields|body|string|false|Enter custom fields if you have defined them in the <a href='https://docs.rocket.chat/docs/message' target='_blank'>Message</a> settings.|

> Example responses

> 200 Response

```json
{
  "message": {
    "_id": "2ZABtFgt89fYYSw3Q",
    "rid": "GENERAL",
    "ts": "2025-12-17T05:49:55.825Z",
    "msg": "",
    "file": {
      "_id": "69424442ddfe6ceaf280f93f",
      "name": "44.jpg",
      "type": "image/jpeg",
      "size": 71224,
      "format": "jpeg"
    },
    "files": [
      {
        "_id": "69424442ddfe6ceaf280f93f",
        "name": "44.jpg",
        "type": "image/jpeg",
        "size": 71224,
        "format": "jpeg"
      },
      {
        "_id": "69424483ddfe6ceaf280f941",
        "name": "thumb-44.jpg",
        "type": "image/jpeg",
        "size": 13473,
        "format": "jpeg"
      }
    ],
    "attachments": [
      {
        "title": "44.jpg",
        "title_link": "/file-upload/69424442ddfe6ceaf280f93f/44.jpg",
        "title_link_download": true,
        "image_dimensions": {
          "width": 368,
          "height": 360
        },
        "image_preview": "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQgsW+OGY6OKR5o3hGJfr6n3n5JkvPdSpXal1BmuoReom//Z",
        "image_url": "/file-upload/69424483ddfe6ceaf280f941/44.jpg",
        "image_type": "image/jpeg",
        "image_size": 71224,
        "type": "file"
      }
    ],
    "u": {
      "_id": "C38WSSzrGd2NCjzqJ",
      "username": "test.cat",
      "name": "test cat"
    },
    "_updatedAt": "2025-12-17T05:49:55.959Z",
    "urls": []
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "[invalid-file]",
  "errorType": "invalid-file"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="send-uploaded-file-to-a-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="send-uploaded-file-to-a-room-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» ts|string|false|none|none|
|» msg|string|false|none|none|
|» file|object|false|none|none|
|» » _id|string|false|none|none|
|» » name|string|false|none|none|
|» » type|string|false|none|none|
|» » size|integer|false|none|none|
|» » format|string|false|none|none|
|» files|[object]|false|none|none|
|» » _id|string|false|none|none|
|» » name|string|false|none|none|
|» » type|string|false|none|none|
|» » size|integer|false|none|none|
|» » format|string|false|none|none|
|» attachments|[object]|false|none|none|
|» » title|string|false|none|none|
|» » title_link|string|false|none|none|
|» » title_link_download|boolean|false|none|none|
|» » image_dimensions|object|false|none|none|
|» » » width|integer|false|none|none|
|» » » height|integer|false|none|none|
|» » image_preview|string|false|none|none|
|» » image_url|string|false|none|none|
|» » image_type|string|false|none|none|
|» » image_size|integer|false|none|none|
|» » type|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» _updatedAt|string|false|none|none|
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

## Delete Uploaded File

<a id="opIdpost-api-v1-uploads.delete"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/uploads.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "fileId": "699e6b8a8eddae7c5eaed9c3"
  }'
```

`POST /api/v1/uploads.delete`

Delete a specific file uploaded to a room. The response includes the list of files that were successfully removed. It may include additional files such as image thumbnails. 

Users can delete messages only in the following cases:
 * The **Allow Message Deleting** setting is enabled in the workspace's **<a href='https://docs.rocket.chat/docs/message' target='_blank'>Message</a>** settings.
 * If the `Block Message Deleting After (n) Minutes` message setting has a non-zero value, the `bypass-time-limit-edit-and-delete` permission is required to delete messages after the defined time limit.
 * In read-only rooms, the `post-readonly` permission is required to delete messages.
 * The `delete-own-message` permission is required to delete users' own messages.
 * The `delete-message` permission is required for users to delete messages from other users.
 
 ### Changelog
 | Version | Description |
 | ------- | ----------- |
 | 8.2.0   | Added       |

> Body parameter

```json
{
  "fileId": "699e6b8a8eddae7c5eaed9c3"
}
```

<h3 id="delete-uploaded-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» fileId|body|string|true|Enter the file ID of the file that you want to delete. You can get this value from the <a href='https://developer.rocket.chat/apidocs/get-room-images' target='_blank'>Get Room Images</a> endpoint.|

> Example responses

> 200 Response

```json
{
  "deletedFiles": [
    "699e6b8a8eddae7c5eaed9c3",
    "699e6b8b8eddae7c5eaed9c5"
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "errorType": "error-invalid-params",
  "error": "must have required property 'fileId'"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="delete-uploaded-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="delete-uploaded-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletedFiles|[string]|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|errorType|string|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rooms-teams">Teams</h1>

## Create a New Team

<a id="opIdpost-api-v1-teams.create"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/teams.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "name": "teamName",
    "type": 0,
    "members": [
      "8dugqGhuRvCBLdZft"
    ],
    "room": {
      "readOnly": true
    },
    "sidepanel": {
      "items": [
        "discussions",
        "channels"
      ]
    }
  }'
```

`POST /api/v1/teams.create`

Create a new public or private team in the workspace.

Permission required: `create-team`. When you create a team from an existing room by passing `room.id`, you also need the `edit-room` permission for that room.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.7.0   | Enforced room permission checks when creating a team from an existing room. |
| 3.13.0  | Added |

> Body parameter

```json
{
  "name": "teamName",
  "type": 0,
  "members": [
    "8dugqGhuRvCBLdZft"
  ],
  "room": {
    "readOnly": true
  },
  "sidepanel": {
    "items": [
      "discussions",
      "channels"
    ]
  }
}
```

<h3 id="create-a-new-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» name|body|string|true|The team name.|
|» type|body|integer|true|Privacy of the team (0 - Public, 1 - Private).|
|» members|body|[string]|false|The user IDs to add to the team when it is created.|
|» room|body|object|false|none|
|» » id|body|string|false|The ID of an existing room to use as the team's main room.|
|» » readOnly|body|boolean|false|none|
|» sidepanel|body|object|false|List the team's channels or discussions to be displayed in the sidepanel.|
|» » items|body|[string]|false|The options are `discussions` and `channels`.|
|» owner|body|string|false|Set the owner of the team.|

> Example responses

> 200 Response

```json
{
  "team": {
    "_id": "651619e3a2f73c7460e18cc5",
    "name": "teamName",
    "type": 0,
    "createdAt": "2023-09-29T00:27:15.189Z",
    "createdBy": {
      "_id": "rbAXPnMktTFbNpwtJ",
      "username": "roxie"
    },
    "_updatedAt": "2023-09-29T00:27:15.189Z",
    "roomId": "651619e3a2f73c7460e18cc7"
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
  "error": "forbidden"
}
```

<h3 id="create-a-new-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK<br><br>Note that the `roomId` is main room ID of the team.|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="create-a-new-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|team|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» type|integer|false|none|none|
|» createdAt|string|false|none|none|
|» createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» roomId|string|false|none|none|
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

<aside class="success">
This operation does not require authentication
</aside>

## Get List of All Teams

<a id="opIdget-api-v1-teams.listAll"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/teams.listAll \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/teams.listAll`

Lists all the teams and their information.

Permission required: `view-all-teams`

<h3 id="get-list-of-all-teams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "teams": [
    {
      "_id": "63f3efc4b000b6b6d86704b2",
      "name": "test-audit",
      "type": 0,
      "createdAt": "2023-02-20T22:10:12.733Z",
      "createdBy": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "test.test"
      },
      "_updatedAt": "2023-02-20T22:10:12.843Z",
      "roomId": "6GFJ3tbmHiyHbahmC",
      "rooms": 0,
      "numberOfUsers": 2
    },
    {
      "_id": "6435624052492a08c3a756fd",
      "name": "Test-team",
      "type": 0,
      "createdAt": "2023-04-11T13:36:00.496Z",
      "createdBy": {
        "_id": "rYhzFRd2QZjNwAAXX",
        "username": "rodriq"
      },
      "_updatedAt": "2023-04-11T13:36:00.855Z",
      "roomId": "h5gPM3Wpip8nEFwbu",
      "rooms": 0,
      "numberOfUsers": 2
    },
    {
      "_id": "65149c7ea2f73c7460e18cab",
      "name": "messages",
      "type": 0,
      "createdAt": "2023-09-27T21:19:58.972Z",
      "createdBy": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie"
      },
      "_updatedAt": "2023-09-27T21:19:59.038Z",
      "roomId": "6513afeda2f73c7460e18c86",
      "rooms": 0,
      "numberOfUsers": 2
    }
  ],
  "total": 3,
  "count": 3,
  "offset": 0,
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

<h3 id="get-list-of-all-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK<br>Note that the `roomId` is main room ID of the team.|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-list-of-all-teams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teams|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» type|integer|false|none|none|
|» createdAt|string|false|none|none|
|» createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» roomId|string|false|none|none|
|» rooms|integer|false|none|none|
|» numberOfUsers|integer|false|none|none|
|total|integer|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get List of Teams

<a id="opIdget-api-v1-teams.list"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/teams.list \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/teams.list`

Lists the public and private teams the request sender is part of.

### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0   | Removed the `query` parameter.       |

<h3 id="get-list-of-teams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "teams": [
    {
      "_id": "63f3efc4b000b6b6d86704b2",
      "name": "test-audit",
      "type": 0,
      "createdAt": "2023-02-20T22:10:12.733Z",
      "createdBy": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "test.test"
      },
      "_updatedAt": "2023-02-20T22:10:12.843Z",
      "roomId": "6GFJ3tbmHiyHbahmC",
      "rooms": 0,
      "numberOfUsers": 2
    },
    {
      "_id": "65149c7ea2f73c7460e18cab",
      "name": "messages",
      "type": 0,
      "createdAt": "2023-09-27T21:19:58.972Z",
      "createdBy": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie"
      },
      "_updatedAt": "2023-09-27T21:19:59.038Z",
      "roomId": "6513afeda2f73c7460e18c86",
      "rooms": 0,
      "numberOfUsers": 2
    }
  ],
  "total": 2,
  "count": 2,
  "offset": 0,
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

<h3 id="get-list-of-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK<br><br>Note that the `roomId` is main room id of the team.|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-list-of-teams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teams|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» type|integer|false|none|none|
|» createdAt|string|false|none|none|
|» createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» roomId|string|false|none|none|
|» rooms|integer|false|none|none|
|» numberOfUsers|integer|false|none|none|
|total|integer|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Team Info

<a id="opIdget-api-v1-teams.info"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/teams.info \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/teams.info`

Gets a team's information. If the team is not public, the request sender must be a member of the team, or must have the `view-all-teams` permission.

<h3 id="get-team-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|teamId|query|string|false|The team id.  It is required if the `teamName` is not provided.|
|teamName|query|string|false|The team name.  It is required if the `teamId` is not provided.|

> Example responses

> 200 Response

```json
{
  "teamInfo": {
    "_id": "607e0d9b49d493189836bfac",
    "name": "Team1",
    "type": 1,
    "createdAt": "2021-04-19T23:09:15.106Z",
    "createdBy": {
      "_id": "FL2fZL4ERhwA3gWiS",
      "username": "some.username"
    },
    "_updatedAt": "2021-04-19T23:09:15.106Z",
    "roomId": "Dgh2xwJ3NFKWvKSqY"
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

<h3 id="get-team-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK<br><br>Note that the `roomId` is main room id of the team.|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-team-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teamInfo|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» type|integer|false|none|none|
|» createdAt|string|false|none|none|
|» createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» roomId|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Team

<a id="opIdpost-api-v1-teams.update"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/teams.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "teamId": "ByehQjC44FwMeiLbX",
    "data": {
      "name": "newTeamName",
      "type": 1
    }
  }'
```

`POST /api/v1/teams.update`

Updates an existing team (name and type). 

Permission required: `edit-team`

> Body parameter

```json
{
  "teamId": "ByehQjC44FwMeiLbX",
  "data": {
    "name": "newTeamName",
    "type": 1
  }
}
```

<h3 id="update-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» teamId|body|string|true|The team ID.|
|» data|body|object|true|The new team name and type (0 - public, 1 - private).|
|» » name|body|string|false|none|
|» » type|body|integer|false|none|

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

<h3 id="update-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="update-a-team-responseschema">Response Schema</h3>

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

## Add Members to the Team

<a id="opIdpost-api-v1-teams.addMembers"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/teams.addMembers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "teamId": "63f3efc4b000b6b6d86704b2",
    "members": [
      {
        "userId": "rYhzFRd2QZjNwAAXX",
        "roles": [
          "member"
        ]
      }
    ]
  }'
```

`POST /api/v1/teams.addMembers`

Add members to a team.

Permissions required: `add-team-member` or `edit-team-member`

### Changelog
| Version | Description |
| ------- | ----------- | 
| 9.0.0   | Assigning roles now requires the matching permission: `set-owner`, `set-moderator` or `set-leader` for those roles, and `access-permissions` for any other role except `member`. |

> Body parameter

```json
{
  "teamId": "63f3efc4b000b6b6d86704b2",
  "members": [
    {
      "userId": "rYhzFRd2QZjNwAAXX",
      "roles": [
        "member"
      ]
    }
  ]
}
```

<h3 id="add-members-to-the-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» teamId|body|string|true|Enter the team ID. Alternatively, enter the `teamName` parameter and provide the team's name as the value.|
|» members|body|[object]|true|The users (IDs and roles) to add to the team.|
|» » userId|body|string|false|none|
|» » roles|body|[string]|false|To assign roles, you also need the permission for each role in the team's main room: `set-owner` for `owner`, `set-moderator` for `moderator`, and `set-leader` for `leader`. Any other role except `member` requires `access-permissions`, and the `admin` role also requires `assign-admin-role`. If you don't have them, the request fails with a `403` error.|

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
  "error": "must have required property 'members'\n must have required property 'teamName'\n must match exactly one schema in oneOf",
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

<h3 id="add-members-to-the-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="add-members-to-the-team-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

## Update Team Member Info

<a id="opIdpost-api-v1-teams.updateMembers"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/teams.updateMember \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "teamId": "63f3efc4b000b6b6d86704b2",
    "member": {
      "userId": "rYhzFRd2QZjNwAAXX",
      "roles": [
        "owner",
        "leader"
      ]
    }
  }'
```

`POST /api/v1/teams.updateMember`

Updates a team member's roles. 

Permission required: `edit-team-member`


### Changelog
| Version | Description |
| ------- | ----------- |
| 9.0.0   | Assigning roles now requires the matching permission: `set-owner`, `set-moderator` or `set-leader` for those roles, and `access-permissions` for any other role except `member`. |

> Body parameter

```json
{
  "teamId": "63f3efc4b000b6b6d86704b2",
  "member": {
    "userId": "rYhzFRd2QZjNwAAXX",
    "roles": [
      "owner",
      "leader"
    ]
  }
}
```

<h3 id="update-team-member-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» teamId|body|string|true|Enter the team ID. Alternatively, enter the `teamName` parameter and provide the team's name as the value.|
|» member|body|object|true|The users (IDs and roles) to add or update in the team.|
|» » userId|body|string|false|Enter the user ID.|
|» » roles|body|[object]|false|You also need the permission for each role you add or remove: `set-owner` for `owner`, `set-moderator` for `moderator`, and `set-leader` for `leader`. Any other role except `member` requires `access-permissions`, and the `admin` role also requires `assign-admin-role`. If you don't have them, the request fails with a `403` error. |

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
  "error": "must have required property 'member'\n must have required property 'teamName'\n must match exactly one schema in oneOf",
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

<h3 id="update-team-member-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="update-team-member-info-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

## List Team Members

<a id="opIdget-api-v1-teams.members"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/teams.members \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/teams.members`

List all members of a team. Permission required: `view-all-teams`

<h3 id="list-team-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|teamName|query|string|false|The team name.  It is required if the `teamId` is not provided.|
|teamId|query|string|false|The team id.  It is required if the `teamName` is not provided.|
|name|query|string|false|Search filter for the user's name |
|username|query|string|false|Search filter for the user's username |
|status|query|[string]|false|Search filter for the user's status|

> Example responses

> 200 Response

```json
{
  "members": [
    {
      "user": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie",
        "name": "test test",
        "status": "offline",
        "settings": {
          "preferences": {
            "themeAppearence": "light"
          },
          "profile": {}
        }
      },
      "roles": [
        "owner"
      ],
      "createdBy": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "test.test"
      },
      "createdAt": "2023-02-20T22:10:12.740Z"
    },
    {
      "user": {
        "_id": "5fRTXMt7DMJbpPJfh",
        "username": "test.test",
        "name": "Testtest",
        "status": "offline",
        "settings": {
          "profile": {}
        }
      },
      "createdBy": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "test.test"
      },
      "createdAt": "2023-07-11T00:23:01.346Z"
    }
  ],
  "total": 2,
  "count": 2,
  "offset": 0,
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

<h3 id="list-team-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-team-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[object]|false|none|none|
|» user|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» » status|string|false|none|none|
|» » settings|object|false|none|none|
|» » » preferences|object|false|none|none|
|» » » » themeAppearence|string|false|none|none|
|» » » profile|object|false|none|none|
|» roles|[string]|false|none|none|
|» createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» createdAt|string|false|none|none|
|total|integer|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Leave a Team

<a id="opIdpost-api-v1-teams.leave"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/teams.leave \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "teamName": "team1",
    "rooms": [
      "8dugqGhuRvCBLdZft"
    ]
  }'
```

`POST /api/v1/teams.leave`

Leave a team

> Body parameter

```json
{
  "teamName": "team1",
  "rooms": [
    "8dugqGhuRvCBLdZft"
  ]
}
```

<h3 id="leave-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» teamId|body|string|true|Enter the team ID. Alternatively, enter the `teamName` parameter and provide the team's name as the value.|
|» rooms|body|[string]|true|The team room IDs to remove the user from.|

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

<h3 id="leave-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="leave-a-team-responseschema">Response Schema</h3>

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

## Remove Member from Team

<a id="opIdpost-api-v1-teams.removeMember"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/teams.removeMember \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "teamId": "63f3efc4b000b6b6d86704b2",
    "userId": "rYhzFRd2QZjNwAAXX",
    "rooms": [
      "JKa7R9zu2DinBhBN9"
    ]
  }'
```

`POST /api/v1/teams.removeMember`

Removes a member from a team. 

Permission required: `edit-team-member`

> Body parameter

```json
{
  "teamId": "63f3efc4b000b6b6d86704b2",
  "userId": "rYhzFRd2QZjNwAAXX",
  "rooms": [
    "JKa7R9zu2DinBhBN9"
  ]
}
```

<h3 id="remove-member-from-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» teamId|body|string|true|Enter the team ID. Alternatively, enter the `teamName` parameter and provide the team's name as the value.|
|» userId|body|string|true|The user ID to remove from the team.|
|» rooms|body|[string]|false|The rooms (IDs) from which the user should be removed.|

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

<h3 id="remove-member-from-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="remove-member-from-team-responseschema">Response Schema</h3>

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

## Delete a Team

<a id="opIdpost-api-v1-teams.delete"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/teams.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "teamId": "mLGZGywfmLGZGywf",
    "roomsToRemove": [
      "8dugqGhuRvCBLdZft"
    ]
  }'
```

`POST /api/v1/teams.delete`

Removes a team. 

Permission required: `delete-team`

The deletion completes even if the team's main room no longer exists, for example after an interrupted deletion. In that case, the main room is skipped, the team is removed, and the team name becomes available again. You can retry an interrupted deletion with this endpoint.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Succeeds when the main room is missing. |
| 3.13.0  | Added |

> Body parameter

```json
{
  "teamId": "mLGZGywfmLGZGywf",
  "roomsToRemove": [
    "8dugqGhuRvCBLdZft"
  ]
}
```

<h3 id="delete-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» teamName|body|string|false|Enter the team name. This parameter is required if `teamId` is not provided.|
|» teamId|body|string|false|Enter the team ID. This parameter is required if `teamName` is not provided.|
|» roomsToRemove|body|[string]|false|The room IDs to delete along with the team.|

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

<h3 id="delete-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="delete-a-team-responseschema">Response Schema</h3>

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

## Autocomplete Team

<a id="opIdget-api-v1-teams.autocomplete"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/teams.autocomplete?name=team' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/teams.autocomplete`

List the teams whose names match a given pattern.

<h3 id="autocomplete-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|name|query|string|true|The pattern (search filter for team names).|

> Example responses

> 200 Response

```json
{
  "teams": [
    {
      "_id": "Dgh2xwJ3NFKWvKSqY",
      "name": "team1",
      "fname": "team1",
      "t": "p",
      "teamId": "607e0d9b49d493189836bfac"
    }
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

<h3 id="autocomplete-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="autocomplete-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teams|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» fname|string|false|none|none|
|» t|string|false|none|none|
|» teamId|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Convert Team to Channel

<a id="opIdpost-api-v1-teams.convertToChannel"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/teams.convertToChannel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "teamId": "612b8ae982d286c3d1f5db31"
  }'
```

`POST /api/v1/teams.convertToChannel`

Convert a team to a channel. Permission required: `convert-team`

> Body parameter

```json
{
  "teamId": "612b8ae982d286c3d1f5db31"
}
```

<h3 id="convert-team-to-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» teamId|body|string|true|The team ID that you want to convert to a channel.|

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
  "error": "team-does-not-exist"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="convert-team-to-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="convert-team-to-channel-responseschema">Response Schema</h3>

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

## Add Rooms to a Team

<a id="opIdpost-api-v1-teams.addRooms"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/teams.addRooms \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "teamId": "607e0d9b49d493189836bfac",
    "rooms": [
      "8Z7eRsibvD5AANfmK"
    ]
  }'
```

`POST /api/v1/teams.addRooms`

Add existing rooms to a team.

Permission required: `move-room-to-team`

> Body parameter

```json
{
  "teamId": "607e0d9b49d493189836bfac",
  "rooms": [
    "8Z7eRsibvD5AANfmK"
  ]
}
```

<h3 id="add-rooms-to-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» teamId|body|string|true|Enter the team ID to which you want to add the rooms. Alternatively, enter the `teamName` parameter and provide the team's name as the value.|
|» rooms|body|[string]|true|The IDs of the rooms to be added to the team.|

> Example responses

> 200 Response

```json
{
  "rooms": [
    {
      "_id": "JKa7R9zu2DinBhBN9",
      "fname": "Livestream",
      "customFields": {},
      "description": "",
      "broadcast": false,
      "encrypted": false,
      "federated": false,
      "name": "Livestream",
      "t": "c",
      "msgs": 15,
      "usersCount": 3,
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie"
      },
      "ts": "2023-02-22T17:15:26.989Z",
      "ro": false,
      "default": false,
      "sysMes": true,
      "_updatedAt": "2023-09-26T01:05:39.641Z",
      "lm": "2023-09-14T12:06:00.594Z",
      "lastMessage": {
        "_id": "rtf5JoPLQup3X7Aof",
        "t": "videoconf",
        "msg": "",
        "groupable": false,
        "blocks": [
          {
            "type": "video_conf",
            "blockId": "6502f728a2f73c7460df6f71",
            "callId": "6502f728a2f73c7460df6f71",
            "appId": "videoconf-core"
          }
        ],
        "ts": "2023-09-14T12:06:00.594Z",
        "u": {
          "_id": "rbAXPnMktTFbNpwtJ",
          "username": "test.test",
          "name": "test test"
        },
        "rid": "JKa7R9zu2DinBhBN9",
        "_updatedAt": "2023-09-14T12:06:00.685Z",
        "urls": [],
        "mentions": [],
        "channels": []
      },
      "teamId": "63f3efc4b000b6b6d86704b2"
    }
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

<h3 id="add-rooms-to-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="add-rooms-to-a-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rooms|[object]|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» customFields|object|false|none|none|
|» description|string|false|none|none|
|» broadcast|boolean|false|none|none|
|» encrypted|boolean|false|none|none|
|» federated|boolean|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» lm|string|false|none|none|
|» lastMessage|object|false|none|none|
|» » _id|string|false|none|none|
|» » t|string|false|none|none|
|» » msg|string|false|none|none|
|» » groupable|boolean|false|none|none|
|» » blocks|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » blockId|string|false|none|none|
|» » » callId|string|false|none|none|
|» » » appId|string|false|none|none|
|» » ts|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » rid|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » urls|[object]|false|none|none|
|» » mentions|[object]|false|none|none|
|» » channels|[object]|false|none|none|
|» teamId|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Remove Room from the Team

<a id="opIdpost-api-v1-teams.removeRoom"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/teams.removeRoom \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "teamId": "63f3efc4b000b6b6d86704b2",
    "roomId": "JKa7R9zu2DinBhBN9"
  }'
```

`POST /api/v1/teams.removeRoom`

Removes a room from a team. 

Permissions required: `remove-team-channel`, `view-all-team-channels`

> Body parameter

```json
{
  "teamId": "63f3efc4b000b6b6d86704b2",
  "roomId": "JKa7R9zu2DinBhBN9"
}
```

<h3 id="remove-room-from-the-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|body|body|object|false|none|
|» teamName|body|string|false|Enter the team name. This parameter is required if `teamId` is not provided.|
|» teamId|body|string|false|Enter the team ID. This parameter is required if `teamName` is not provided.|
|» roomId|body|string|false|The room ID to be removed from the team.|

> Example responses

> 200 Response

```json
{
  "room": {
    "_id": "JKa7R9zu2DinBhBN9",
    "fname": "Livestream",
    "customFields": {},
    "description": "",
    "broadcast": false,
    "encrypted": false,
    "federated": false,
    "name": "Livestream",
    "t": "c",
    "msgs": 15,
    "usersCount": 3,
    "u": {
      "_id": "rbAXPnMktTFbNpwtJ",
      "username": "roxie"
    },
    "ts": "2023-02-22T17:15:26.989Z",
    "ro": false,
    "default": false,
    "sysMes": true,
    "_updatedAt": "2023-09-29T05:51:47.779Z",
    "lm": "2023-09-14T12:06:00.594Z",
    "lastMessage": {
      "_id": "rtf5JoPLQup3X7Aof",
      "t": "videoconf",
      "msg": "",
      "groupable": false,
      "blocks": [
        {
          "type": "video_conf",
          "blockId": "6502f728a2f73c7460df6f71",
          "callId": "6502f728a2f73c7460df6f71",
          "appId": "videoconf-core"
        }
      ],
      "ts": "2023-09-14T12:06:00.594Z",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "test.test",
        "name": "test test"
      },
      "rid": "JKa7R9zu2DinBhBN9",
      "_updatedAt": "2023-09-14T12:06:00.685Z",
      "urls": [],
      "mentions": [],
      "channels": []
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

<h3 id="remove-room-from-the-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="remove-room-from-the-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|room|object|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» customFields|object|false|none|none|
|» description|string|false|none|none|
|» broadcast|boolean|false|none|none|
|» encrypted|boolean|false|none|none|
|» federated|boolean|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» lm|string|false|none|none|
|» lastMessage|object|false|none|none|
|» » _id|string|false|none|none|
|» » t|string|false|none|none|
|» » msg|string|false|none|none|
|» » groupable|boolean|false|none|none|
|» » blocks|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » blockId|string|false|none|none|
|» » » callId|string|false|none|none|
|» » » appId|string|false|none|none|
|» » ts|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » rid|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » urls|[object]|false|none|none|
|» » mentions|[object]|false|none|none|
|» » channels|[object]|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update Room in a Team

<a id="opIdpost-api-v1-teams.updateRoom"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/teams.updateRoom \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "JKa7R9zu2DinBhBN9",
    "isDefault": true
  }'
```

`POST /api/v1/teams.updateRoom`

Updates a room from a team. 

Permissions required: `edit-team-channel`, `view-all-team-channels`

> Body parameter

```json
{
  "roomId": "JKa7R9zu2DinBhBN9",
  "isDefault": true
}
```

<h3 id="update-room-in-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The room ID that you want to update.|
|» isDefault|body|boolean|true|Sets the room as auto-join (true) or not (false).|

> Example responses

> 200 Response

```json
{
  "room": {
    "_id": "JKa7R9zu2DinBhBN9",
    "fname": "Livestream",
    "customFields": {},
    "description": "",
    "broadcast": false,
    "encrypted": false,
    "federated": false,
    "name": "Livestream",
    "t": "c",
    "msgs": 16,
    "usersCount": 4,
    "u": {
      "_id": "rbAXPnMktTFbNpwtJ",
      "username": "roxie"
    },
    "ts": "2023-02-22T17:15:26.989Z",
    "ro": false,
    "default": false,
    "sysMes": true,
    "_updatedAt": "2023-09-29T06:00:18.859Z",
    "lm": "2023-09-14T12:06:00.594Z",
    "lastMessage": {
      "_id": "rtf5JoPLQup3X7Aof",
      "t": "videoconf",
      "msg": "",
      "groupable": false,
      "blocks": [
        {
          "type": "video_conf",
          "blockId": "6502f728a2f73c7460df6f71",
          "callId": "6502f728a2f73c7460df6f71",
          "appId": "videoconf-core"
        }
      ],
      "ts": "2023-09-14T12:06:00.594Z",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "test.test",
        "name": "test test"
      },
      "rid": "JKa7R9zu2DinBhBN9",
      "_updatedAt": "2023-09-14T12:06:00.685Z",
      "urls": [],
      "mentions": [],
      "channels": []
    },
    "teamId": "63f3efc4b000b6b6d86704b2",
    "teamDefault": true
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

<h3 id="update-room-in-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="update-room-in-a-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|room|object|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» customFields|object|false|none|none|
|» description|string|false|none|none|
|» broadcast|boolean|false|none|none|
|» encrypted|boolean|false|none|none|
|» federated|boolean|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» lm|string|false|none|none|
|» lastMessage|object|false|none|none|
|» » _id|string|false|none|none|
|» » t|string|false|none|none|
|» » msg|string|false|none|none|
|» » groupable|boolean|false|none|none|
|» » blocks|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » blockId|string|false|none|none|
|» » » callId|string|false|none|none|
|» » » appId|string|false|none|none|
|» » ts|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » rid|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » urls|[object]|false|none|none|
|» » mentions|[object]|false|none|none|
|» » channels|[object]|false|none|none|
|» teamId|string|false|none|none|
|» teamDefault|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List Rooms of a Team

<a id="opIdget-api-v1-teams.listRooms"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/teams.listRooms \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/teams.listRooms`

List all rooms in a team. Permissions required: `view-all-teams`, `view-all-team-channels`

<h3 id="list-rooms-of-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|teamId|query|string|false|The team id.  It is required if the `teamName` is not provided.|
|teamName|query|string|false|The team name.  It is required if the `teamId` is not provided.|
|type|query|string|false|The room's type (search filter).|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "rooms": [
    {
      "_id": "JKa7R9zu2DinBhBN9",
      "fname": "Livestream",
      "customFields": {},
      "description": "",
      "broadcast": false,
      "encrypted": false,
      "federated": false,
      "name": "Livestream",
      "t": "c",
      "msgs": 16,
      "usersCount": 4,
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie"
      },
      "ts": "2023-02-22T17:15:26.989Z",
      "ro": false,
      "default": false,
      "sysMes": true,
      "_updatedAt": "2023-09-29T06:02:30.250Z",
      "lm": "2023-09-14T12:06:00.594Z",
      "lastMessage": {
        "_id": "rtf5JoPLQup3X7Aof",
        "t": "videoconf",
        "msg": "",
        "groupable": false,
        "blocks": [
          {
            "type": "video_conf",
            "blockId": "6502f728a2f73c7460df6f71",
            "callId": "6502f728a2f73c7460df6f71",
            "appId": "videoconf-core"
          }
        ],
        "ts": "2023-09-14T12:06:00.594Z",
        "u": {
          "_id": "rbAXPnMktTFbNpwtJ",
          "username": "test.test",
          "name": "test test"
        },
        "rid": "JKa7R9zu2DinBhBN9",
        "_updatedAt": "2023-09-14T12:06:00.685Z",
        "urls": [],
        "mentions": [],
        "channels": []
      },
      "teamId": "63f3efc4b000b6b6d86704b2",
      "teamDefault": true
    }
  ],
  "total": 1,
  "count": 1,
  "offset": 0,
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

<h3 id="list-rooms-of-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-rooms-of-a-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rooms|[object]|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» customFields|object|false|none|none|
|» description|string|false|none|none|
|» broadcast|boolean|false|none|none|
|» encrypted|boolean|false|none|none|
|» federated|boolean|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» lm|string|false|none|none|
|» lastMessage|object|false|none|none|
|» » _id|string|false|none|none|
|» » t|string|false|none|none|
|» » msg|string|false|none|none|
|» » groupable|boolean|false|none|none|
|» » blocks|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » blockId|string|false|none|none|
|» » » callId|string|false|none|none|
|» » » appId|string|false|none|none|
|» » ts|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » rid|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » urls|[object]|false|none|none|
|» » mentions|[object]|false|none|none|
|» » channels|[object]|false|none|none|
|» teamId|string|false|none|none|
|» teamDefault|boolean|false|none|none|
|total|integer|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List User Rooms of a Team

<a id="opIdget-api-v1-teams.listRoomsOfUser"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/teams.listRoomsOfUser?userId=rbAXrutTFbNprfn' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f'
```

`GET /api/v1/teams.listRoomsOfUser`

Lists only the team's rooms that a particular user has joined.

Permissions required: `view-all-teams`, `view-all-team-channels`

<h3 id="list-user-rooms-of-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|teamName|query|string|false|The team name.  It is required if the `teamId` is not provided.|
|teamId|query|string|false|The team id.  It is required if the `teamName` is not provided.|
|userId|query|string|true|The user ID.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "rooms": [
    {
      "_id": "JKa7R9zu2DinBhBN9",
      "fname": "Livestream",
      "customFields": {},
      "description": "",
      "broadcast": false,
      "encrypted": false,
      "federated": false,
      "name": "Livestream",
      "t": "c",
      "msgs": 16,
      "usersCount": 4,
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "roxie"
      },
      "ts": "2023-02-22T17:15:26.989Z",
      "ro": false,
      "default": false,
      "sysMes": true,
      "_updatedAt": "2023-09-29T06:02:30.250Z",
      "lm": "2023-09-14T12:06:00.594Z",
      "lastMessage": {
        "_id": "rtf5JoPLQup3X7Aof",
        "t": "videoconf",
        "msg": "",
        "groupable": false,
        "blocks": [
          {
            "type": "video_conf",
            "blockId": "6502f728a2f73c7460df6f71",
            "callId": "6502f728a2f73c7460df6f71",
            "appId": "videoconf-core"
          }
        ],
        "ts": "2023-09-14T12:06:00.594Z",
        "u": {
          "_id": "rbAXPnMktTFbNpwtJ",
          "username": "test.test",
          "name": "test test"
        },
        "rid": "JKa7R9zu2DinBhBN9",
        "_updatedAt": "2023-09-14T12:06:00.685Z",
        "urls": [],
        "mentions": [],
        "channels": []
      },
      "teamId": "63f3efc4b000b6b6d86704b2",
      "teamDefault": true,
      "isLastOwner": true
    }
  ],
  "total": 1,
  "count": 1,
  "offset": 0,
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

<h3 id="list-user-rooms-of-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-user-rooms-of-a-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rooms|[object]|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» customFields|object|false|none|none|
|» description|string|false|none|none|
|» broadcast|boolean|false|none|none|
|» encrypted|boolean|false|none|none|
|» federated|boolean|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» lm|string|false|none|none|
|» lastMessage|object|false|none|none|
|» » _id|string|false|none|none|
|» » t|string|false|none|none|
|» » msg|string|false|none|none|
|» » groupable|boolean|false|none|none|
|» » blocks|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » blockId|string|false|none|none|
|» » » callId|string|false|none|none|
|» » » appId|string|false|none|none|
|» » ts|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » rid|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » urls|[object]|false|none|none|
|» » mentions|[object]|false|none|none|
|» » channels|[object]|false|none|none|
|» teamId|string|false|none|none|
|» teamDefault|boolean|false|none|none|
|» isLastOwner|boolean|false|none|none|
|total|integer|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List Rooms and Discussions of a Team

<a id="opIdget-api-v1-teams.listChildren"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/teams.listChildren \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f'
```

`GET /api/v1/teams.listChildren`

Lists a particular team's public rooms, discussions, and the rooms (public/private) a user is part of from the team's main room.
Currently, this endpoint returns the discussions from the parent team rooms only; discussions from sub-channels are not returned.

<h3 id="list-rooms-and-discussions-of-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|teamName|query|string|false|The team name.  It is required if the `teamId` is not provided.|
|teamId|query|string|false|The team id.  It is required if the `teamName` is not provided.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|filter|query|string|false|Filter the results using the text you want to find.|
|type|query|string|false|You can choose the type of rooms you want in the response. Enter the value as `channels` or `discussions`. If you don't enter any value, both types are returned.|
|roomId|query|string|false|The room ID. This parameter is required if you have not provided the `teamId` or the `teamName`.|

> Example responses

> 200 Response

```json
{
  "total": 2,
  "data": [
    {
      "_id": "66c82d78237405fc05fc1eef",
      "fname": "test-team",
      "_updatedAt": "2024-09-20T12:27:38.725Z",
      "topic": "",
      "broadcast": false,
      "encrypted": false,
      "name": "test-team",
      "t": "c",
      "msgs": 3,
      "usersCount": 1,
      "u": {
        "_id": "C38WSSzrGd2NCjzqJ",
        "username": "test.cat",
        "name": "test.cat"
      },
      "ts": "2024-08-23T06:34:32.413Z",
      "ro": false,
      "default": false,
      "sysMes": true,
      "teamId": "66c82d78237405fc05fc1ef1",
      "teamMain": true,
      "lastMessage": {
        "_id": "ZaeoxcCsHLutRkh9m",
        "rid": "66c82d78237405fc05fc1eef",
        "msg": "testing",
        "ts": "2024-09-20T12:27:38.634Z",
        "u": {
          "_id": "C38WSSzrGd2NCjzqJ",
          "username": "test.cat",
          "name": "test.cat"
        },
        "_updatedAt": "2024-09-20T12:27:38.686Z",
        "urls": [],
        "mentions": [],
        "channels": [],
        "md": [
          {
            "type": "PARAGRAPH",
            "value": [
              {
                "type": "PLAIN_TEXT",
                "value": "testing"
              }
            ]
          }
        ]
      },
      "lm": "2024-09-20T12:27:38.634Z"
    },
    {
      "_id": "66ed2dba40141d95f32c292b",
      "fname": "new-channel",
      "_updatedAt": "2024-09-20T12:29:08.284Z",
      "customFields": {},
      "topic": "",
      "broadcast": false,
      "encrypted": false,
      "name": "new-channel",
      "t": "p",
      "msgs": 3,
      "usersCount": 2,
      "u": {
        "_id": "C38WSSzrGd2NCjzqJ",
        "username": "test.cat",
        "name": "test.cat"
      },
      "ts": "2024-09-20T08:09:30.417Z",
      "ro": false,
      "teamId": "66c82d78237405fc05fc1ef1",
      "default": false,
      "sysMes": true,
      "lastMessage": {
        "_id": "xZhJfE4rmaosjHZCe",
        "rid": "66ed2dba40141d95f32c292b",
        "msg": "testing",
        "ts": "2024-09-20T12:27:53.356Z",
        "u": {
          "_id": "C38WSSzrGd2NCjzqJ",
          "username": "test.cat",
          "name": "test.cat"
        },
        "_updatedAt": "2024-09-20T12:27:53.397Z",
        "urls": [],
        "mentions": [],
        "channels": [],
        "md": [
          {
            "type": "PARAGRAPH",
            "value": [
              {
                "type": "PLAIN_TEXT",
                "value": "testing"
              }
            ]
          }
        ]
      },
      "lm": "2024-09-20T12:27:53.356Z"
    }
  ],
  "offset": 0,
  "count": 50,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'teamId'\n must have required property 'teamName'\n must have required property 'roomId'\n must match exactly one schema in oneOf [error-invalid-params]",
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

<h3 id="list-rooms-and-discussions-of-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-rooms-and-discussions-of-a-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[object]|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» topic|string|false|none|none|
|» broadcast|boolean|false|none|none|
|» encrypted|boolean|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» ts|string|false|none|none|
|» ro|boolean|false|none|none|
|» default|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» teamId|string|false|none|none|
|» teamMain|boolean|false|none|none|
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
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
|» lm|string|false|none|none|
|» customFields|object|false|none|none|
|offset|integer|false|none|none|
|count|integer|false|none|none|
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

<h1 id="rooms-room-invites">Room Invites</h1>

## Find or Create Invite

<a id="opIdpost-api-v1-findOrCreateInvite"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/findOrCreateInvite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "rid": "csFYrDeixJG7PnrAh",
    "days": 10,
    "maxUses": 0
  }'
```

`POST /api/v1/findOrCreateInvite`

Creates or return an existing invite with the specified parameters. 

<a href="https://docs.rocket.chat/docs/permissions" target="_blank">Permission</a> required: `create-invite-links`

> Body parameter

```json
{
  "rid": "csFYrDeixJG7PnrAh",
  "days": 10,
  "maxUses": 0
}
```

<h3 id="find-or-create-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» rid|body|string|true|The room ID that the invite is being created for.|
|» days|body|integer|true|The number of days that the invite will be valid for. Send `0` for unlimited.|
|» maxUses|body|integer|true|The number of times that the invite can be used. Send `0` for unlimited.|

> Example responses

> 200 Response

```json
[
  {
    "_id": "kDKQ3H",
    "days": 1,
    "maxUses": 1,
    "rid": "s7CE842q9WtvLctD7",
    "userId": "sNiDqHit5nGAGFg8X",
    "createdAt": "2019-12-20T03:31:56.774Z",
    "expires": "2019-12-21T03:31:56.774Z",
    "uses": 1,
    "_updatedAt": "2019-12-20T03:33:40.065Z"
  },
  {
    "_id": "99ScEP",
    "days": 1,
    "maxUses": 0,
    "rid": "s7CE842q9WtvLctD7",
    "userId": "sNiDqHit5nGAGFg8X",
    "createdAt": "2019-12-20T03:38:20.485Z",
    "expires": "2019-12-21T03:38:20.485Z",
    "uses": 0,
    "_updatedAt": "2019-12-20T03:38:20.485Z"
  },
  {
    "_id": "Y5JKM4",
    "days": 0,
    "maxUses": 1,
    "rid": "s7CE842q9WtvLctD7",
    "userId": "sNiDqHit5nGAGFg8X",
    "createdAt": "2019-12-20T03:38:25.313Z",
    "expires": null,
    "uses": 1,
    "_updatedAt": "2019-12-20T03:38:40.116Z"
  }
]
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="find-or-create-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="find-or-create-invite-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» _id|string|false|none|none|
|» days|integer|false|none|none|
|» maxUses|integer|false|none|none|
|» rid|string|false|none|none|
|» userId|string|false|none|none|
|» createdAt|string|false|none|none|
|» expires|string \| null|false|none|none|
|» uses|integer|false|none|none|
|» _updatedAt|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List Invites

<a id="opIdget-api-v1-listInvites"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/listInvites \
  -H 'Accept: application/json'
```

`GET /api/v1/listInvites`

Lists all of the invites on the workspace. 

<a href="https://docs.rocket.chat/docs/permissions" target="_blank">Permission</a> required: `create-invite-links`

> Example responses

> 200 Response

```json
[
  {
    "_id": "kDKQ3H",
    "days": 1,
    "maxUses": 1,
    "rid": "s7CE842q9WtvLctD7",
    "userId": "sNiDqHit5nGAGFg8X",
    "createdAt": "2019-12-20T03:31:56.774Z",
    "expires": "2019-12-21T03:31:56.774Z",
    "uses": 1,
    "_updatedAt": "2019-12-20T03:33:40.065Z"
  },
  {
    "_id": "99ScEP",
    "days": 1,
    "maxUses": 0,
    "rid": "s7CE842q9WtvLctD7",
    "userId": "sNiDqHit5nGAGFg8X",
    "createdAt": "2019-12-20T03:38:20.485Z",
    "expires": "2019-12-21T03:38:20.485Z",
    "uses": 0,
    "_updatedAt": "2019-12-20T03:38:20.485Z"
  },
  {
    "_id": "Y5JKM4",
    "days": 0,
    "maxUses": 1,
    "rid": "s7CE842q9WtvLctD7",
    "userId": "sNiDqHit5nGAGFg8X",
    "createdAt": "2019-12-20T03:38:25.313Z",
    "expires": null,
    "uses": 1,
    "_updatedAt": "2019-12-20T03:38:40.116Z"
  }
]
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="list-invites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-invites-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» _id|string|false|none|none|
|» days|integer|false|none|none|
|» maxUses|integer|false|none|none|
|» rid|string|false|none|none|
|» userId|string|false|none|none|
|» createdAt|string|false|none|none|
|» expires|string \| null|false|none|none|
|» uses|integer|false|none|none|
|» _updatedAt|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Invite by ID

<a id="opIddelete-api-v1-removeInvite-_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/removeInvite/kDKQ3H \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`DELETE /api/v1/removeInvite/{_id}`

Deletes an invite from the workspace.

<a href='https://docs.rocket.chat/docs/permissions' target='_blank'>Permission</a> required: `create-invite-links`

<h3 id="delete-invite-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|_id|path|string|true|The invite ID to be deleted.|

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
  "error": "Invalid Invitation _id [invalid-invitation-id]",
  "errorType": "invalid-invitation-id",
  "details": {
    "method": "removeInvite"
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

<h3 id="delete-invite-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="delete-invite-by-id-responseschema">Response Schema</h3>

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
|» method|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Use Invite Token

<a id="opIdpost-useInviteToken"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/useInviteToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "token": "R4VDXJ9KJZB8M2QW"
  }'
```

`POST /api/v1/useInviteToken`

Uses an invite token to join a channel or room.

This endpoint also checks whether the user is banned from the target room before
allowing them to use the invite link. A banned user must be unbanned first
before they can join via an invite token.

### Changelog
| Version | Description |
|---------|--------|
| 8.4.0   | Added ban check — banned users can no longer join via invite token |

> Body parameter

```json
{
  "token": "R4VDXJ9KJZB8M2QW"
}
```

<h3 id="use-invite-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|true|none|
|» token|body|string|true|The invite token to use.|

> Example responses

> 200 Response

```json
{
  "room": {
    "_id": "sN9KJZX2aX7aXqB2a",
    "name": "general",
    "topic": "General discussion"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "User is banned from this room",
  "errorType": "error-user-is-banned"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="use-invite-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="use-invite-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|room|object|false|none|The room information.|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» topic|string|false|none|none|
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

<h1 id="rooms-subscriptions">Subscriptions</h1>

## Get All Subscriptions

<a id="opIdget-api-v1-subscriptions.get"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/subscriptions.get \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/subscriptions.get`

Get the room notification subscription details and the latest updates. Note that the unread counter value depends on your settings in the **Manage** > **Workspace** > <a href='https://docs.rocket.chat/docs/general' target='_blank'>**General**</a> section.

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|8.8.0             | Added the `threadDrafts` field |
|0.60.0            | Added       |

<h3 id="get-all-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|updatedSince|query|string|false|Date and time from which to fetch changes. Format: ISO 8601 datetime. Optional seconds, optional milliseconds, optional timezone, always with colon time separators.|

> Example responses

> 200 Response

```json
{
  "update": [
    {
      "t": "c",
      "ts": "2017-11-25T15:08:17.249Z",
      "name": "general",
      "fname": null,
      "rid": "GENERAL",
      "u": {
        "_id": "EoyAmF4mxx5HxJHJB",
        "username": "rocket.cat",
        "name": "Rocket Cat"
      },
      "open": true,
      "alert": true,
      "unread": 1,
      "userMentions": 1,
      "groupMentions": 0,
      "_updatedAt": "2017-11-25T15:08:17.249Z",
      "_id": "5ALsG3QhpJfdMpyc8"
    }
  ],
  "remove": [],
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

<h3 id="get-all-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-all-subscriptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|update|[[Subscription](#schemasubscription)]|false|none|none|
|remove|[object]|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Subscription Room

<a id="opIdget-api-v1-subscriptions.getOne"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/subscriptions.getOne?roomId=ByehQjC44FwMeiLbX' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/subscriptions.getOne`

Get the notification subscription details for a specific room. Note that the unread counter value depends on your settings at the **Manage** > **Workspace** > <a href='https://docs.rocket.chat/docs/general' target='_blank'>**General**</a> section.

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|8.8.0             | Added the `threadDrafts` field |
|0.63.0            | Added       |

<h3 id="get-subscription-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|The room ID.|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "_id": "jRca8kibJx8NkLJxt",
      "createdAt": "2018-04-13T12:46:26.517Z",
      "emails": [
        {
          "address": "user.test.1523623548558@rocket.chat",
          "verified": false
        }
      ],
      "name": "EditedRealNameuser.test.1523623548558",
      "username": "editedusernameuser.test.1523623548558",
      "avatarETag": "6YbLtc4v9b4conXon"
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

<h3 id="get-subscription-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-subscription-room-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscription|[Subscription](#schemasubscription)|false|none|none|
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

## Mark Channel as Read

<a id="opIdpost-api-v1-subscriptions.read"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/subscriptions.read \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "L6su9mxwdDkvdSaT9hvzu8z6mHFigiXy6Y"
  }'
```

`POST /api/v1/subscriptions.read`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.11.0            | `roomId` can be used as argument instead of `rid`.       |
|0.61.0            | Added       |

> Body parameter

```json
{
  "roomId": "L6su9mxwdDkvdSaT9hvzu8z6mHFigiXy6Y"
}
```

<h3 id="mark-channel-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» *anyOf*|body|object|false|none|
|» roomId|body|string|true|The room ID.|
|» readThreads|body|boolean|false|none|
|» *anyOf*|body|object|false|none|
|» rid|body|string|true|The room ID.|
|» readThreads|body|boolean|false|none|

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
  "error": "must have required property 'rid'\n must have required property 'roomId'\n must match a schema in anyOf [error-invalid-params]",
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

<h3 id="mark-channel-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="mark-channel-as-read-responseschema">Response Schema</h3>

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

## Mark Channel as Unread

<a id="opIdpost-api-v1-subscriptions.unread"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/subscriptions.unread \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "L6su9mxwdDkvdSaT9hvzu8z6mHFigiXy6Y"
  }'
```

`POST /api/v1/subscriptions.unread`

Mark messages as unread by room ID or from a message. 
### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.65.0            | Added       |

> Body parameter

```json
{
  "roomId": "L6su9mxwdDkvdSaT9hvzu8z6mHFigiXy6Y"
}
```

<h3 id="mark-channel-as-unread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» *anyOf*|body|object|false|none|
|» roomId|body|string|true|The room ID.|
|» *anyOf*|body|object|false|none|
|» firstUnreadMessage|body|object|true|none|
|» » _id|body|string|false|The message ID.|

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
  "error": "must have required property 'roomId'\n must have required property 'firstUnreadMessage'\n must match a schema in anyOf [error-invalid-params]",
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

<h3 id="mark-channel-as-unread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="mark-channel-as-unread-responseschema">Response Schema</h3>

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

<h1 id="rooms-abac">ABAC</h1>

## Replace room ABAC attributes

<a id="opIdpost-abac-rooms-rid-attributes"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/abac/rooms/:rid/attributes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "attributes": {
      "department": [
        "it",
        "sales"
      ],
      "region": [
        "asia",
        "europa"
      ]
    }
  }'
```

`POST /api/v1/abac/rooms/:rid/attributes`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>

- Replaces the full ABAC attribute set for a room.
- Sets the complete set of ABAC attributes on the specified room by providing an attributes object that maps attribute keys to arrays of allowed values; any previously assigned attributes not included in the request are removed.
- Requires the ABAC license, the `abac-management` and `manage-abac-admin-rooms` permissions, and the global setting `ABAC_Enabled` to be turned on.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.0.0   | Added |
| 8.5.0   | Added the `manage-abac-admin-rooms` granular permission requirement. |

> Body parameter

```json
{
  "attributes": {
    "department": [
      "it",
      "sales"
    ],
    "region": [
      "asia",
      "europa"
    ]
  }
}
```

<h3 id="replace-room-abac-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|

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
  "error": "error-abac-not-enabled"
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
  "error": "error-not-authorized"
}
```

<h3 id="replace-room-abac-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="replace-room-abac-attributes-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

## Delete all ABAC attributes

<a id="opIddelete-abac-rooms-rid-attributes"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/abac/rooms/:rid/attributes \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`DELETE /api/v1/abac/rooms/:rid/attributes`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>

- Clears all ABAC attributes from a room.
- Removes every ABAC attribute key and value currently assigned to the specified room, leaving it with no ABAC attributes configured.
- Requires the `abac-management` and `manage-abac-admin-rooms` permissions. This call does not require the global setting `ABAC_Enabled` to be on, so attributes can be cleared after disabling ABAC.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.0.0   | Added |
| 8.5.0   | Added the `manage-abac-admin-rooms` granular permission requirement. |

<h3 id="delete-all-abac-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

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
  "error": "error-room-not-found"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "error-unauthorized"
}
```

> 403 Response

```json
{
  "success": false,
  "error": "error-not-authorized"
}
```

<h3 id="delete-all-abac-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="delete-all-abac-attributes-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

## Set room ABAC attribute values

<a id="opIdput-abac-rooms-rid-attributes-key"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/abac/rooms/:rid/attributes/:key \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "values": [
      "eng",
      "sales",
      "hr"
    ]
  }'
```

`PUT /api/v1/abac/rooms/:rid/attributes/:key`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>

- Sets the values of a single ABAC attribute on a room.
- Replaces the existing values for the given attribute key on the specified room with the provided values array (or creates the attribute if it does not yet exist), enforcing the global attribute definition and ABAC validation rules.
- Requires the ABAC license, the `abac-management` and `manage-abac-admin-rooms` permissions, and the global setting `ABAC_Enabled` to be turned on.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.0.0   | Added |
| 8.5.0   | Added the `manage-abac-admin-rooms` granular permission requirement. |

> Body parameter

```json
{
  "values": [
    "eng",
    "sales",
    "hr"
  ]
}
```

<h3 id="set-room-abac-attribute-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|- Values (array of strings, required): The attribute values to assign for this key. <br>- Must have at least 1 item, max 10 items, and all values must be unique.|
|» values|body|[string]|false|none|

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
  "error": "error-attribute-definition-not-found"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "error-unauthorized"
}
```

> 403 Response

```json
{
  "success": false,
  "error": "error-not-authorized"
}
```

<h3 id="set-room-abac-attribute-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="set-room-abac-attribute-values-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

## Add ABAC attribute key to room

<a id="opIdpost-abac-rooms-rid-attributes-key"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/abac/rooms/:rid/attributes/:key \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "values": [
      "asia"
    ]
  }'
```

`POST /api/v1/abac/rooms/:rid/attributes/:key`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>

- Adds a single ABAC attribute key to a room.
- Creates a new ABAC attribute on the specified room for the given key, assigning it the provided values array; fails if the room already has this key or if the key/values are not allowed by the global attribute definition.
- Requires the ABAC license, the `abac-management` and `manage-abac-admin-rooms` permissions, and the global setting `ABAC_Enabled` to be turned on.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.0.0   | Added |
| 8.5.0   | Added the `manage-abac-admin-rooms` granular permission requirement. |

> Body parameter

```json
{
  "values": [
    "asia"
  ]
}
```

<h3 id="add-abac-attribute-key-to-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|- Values (array of strings, required): The attribute values to assign for this key. <br>- Must have at least 1 item, max 10 items, and all values must be unique.|
|» values|body|[string]|false|none|

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
  "error": "error-abac-not-enabled"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "error-unauthorized"
}
```

> 403 Response

```json
{
  "success": false,
  "error": "error-not-authorized"
}
```

<h3 id="add-abac-attribute-key-to-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="add-abac-attribute-key-to-room-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

## Delete room ABAC attribute key

<a id="opIddelete-abac-rooms-rid-attributes-key"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/abac/rooms/:rid/attributes/:key \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`DELETE /api/v1/abac/rooms/:rid/attributes/:key`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>

- Removes a single ABAC attribute key from a room.
- Deletes the specified attribute key and all its values from the room's ABAC configuration, leaving other attributes unchanged.
- Requires the `abac-management` and `manage-abac-admin-rooms` permissions.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.0.0   | Added |
| 8.5.0   | Added the `manage-abac-admin-rooms` granular permission requirement. |

<h3 id="delete-room-abac-attribute-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

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
  "error": "error-room-not-found"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "error-unauthorized"
}
```

> 403 Response

```json
{
  "success": false,
  "error": "error-not-authorized"
}
```

<h3 id="delete-room-abac-attribute-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="delete-room-abac-attribute-key-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

## List ABAC attribute definitions

<a id="opIdget-abac-attributes"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/abac/attributes \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/abac/attributes`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>

- Lists all ABAC attribute definitions.
- Returns a paginated list of attribute definitions (key and allowed values).
- Supports optional filtering by attribute key or value, and pagination via offset and count query parameters.
- Requires the `abac-management` and `manage-abac-admin-room-attributes` permissions.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.0.0   | Added |
| 8.5.0   | Added the `manage-abac-admin-room-attributes` granular permission requirement. |

<h3 id="list-abac-attribute-definitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|number|false|Pagination offset (default: 0)|
|count|query|number|false|Number of items per page (default: 25)|
|key|query|string|false|Filter attribute definitions by key (case-insensitive match)|
|values|query|string|false|Filter attribute definitions by values (case-insensitive match)|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "attributes": [
    {
      "_id": "69778264070f6083845051e6",
      "key": "departmentNumber",
      "values": [
        "department"
      ]
    },
    {
      "_id": "697ca091070f60838450580d",
      "key": "my_department",
      "values": [
        "eng",
        "sales",
        "hr",
        "it"
      ]
    }
  ],
  "offset": 0,
  "count": 25,
  "total": 5
}
```

> 400 Response

```json
{
  "success": false,
  "error": "error-invalid-query-parameters"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "error-unauthorized"
}
```

> 403 Response

```json
{
  "success": false,
  "error": "error-not-authorized"
}
```

<h3 id="list-abac-attribute-definitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="list-abac-attribute-definitions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|attributes|[object]|false|none|none|
|» _id|string|false|none|none|
|» key|string|false|none|none|
|» values|[string]|false|none|none|
|offset|integer|false|none|none|
|count|integer|false|none|none|
|total|integer|false|none|none|

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

<aside class="success">
This operation does not require authentication
</aside>

## Create ABAC attribute definition

<a id="opIdpost-abac-attributes"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/abac/attributes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "key": "my_department",
    "values": [
      "eng",
      "sales",
      "hr",
      "it"
    ]
  }'
```

`POST /api/v1/abac/attributes`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>

- Creates a new ABAC attribute definition.
- Registers a global ABAC attribute by specifying its key and the list of allowed values, making it available for use on rooms and users.
- Requires the ABAC license, the `abac-management` and `manage-abac-admin-room-attributes` permissions, and the global setting `ABAC_Enabled` to be turned on.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.0.0   | Added |
| 8.5.0   | Added the `manage-abac-admin-room-attributes` granular permission requirement. |

> Body parameter

```json
{
  "key": "my_department",
  "values": [
    "eng",
    "sales",
    "hr",
    "it"
  ]
}
```

<h3 id="create-abac-attribute-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» key|body|string|false|none|
|» values|body|[string]|false|none|

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
  "error": "error-abac-not-enabled"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "error-unauthorized"
}
```

> 403 Response

```json
{
  "success": false,
  "error": "error-not-authorized"
}
```

<h3 id="create-abac-attribute-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="create-abac-attribute-definition-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

## Sync users ABAC attributes from LDAP

<a id="opIdpost-abac-users-sync"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/abac/users/sync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "usernames": [
      "alice"
    ],
    "ids": [
      "userId1"
    ],
    "emails": [
      "bob@example.com"
    ],
    "ldapIds": [
      "ldapId123"
    ]
  }'
```

`POST /api/v1/abac/users/sync`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>

- Syncs ABAC attributes for specified users from LDAP.
- Refreshes user ABAC attributes by reading current data from LDAP and applying the configured LDAP → ABAC attribute mapping.
- Users can be identified by usernames, ids, emails, or ldapIds.
- Requires the LDAP Enterprise and ABAC licenses, the `abac-management` and `manage-abac-admin-room-attributes` permissions, and the global setting `ABAC_Enabled` to be turned on.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.0.0   | Added |
| 8.5.0   | Added the `manage-abac-admin-room-attributes` granular permission requirement. |

> Body parameter

```json
{
  "usernames": [
    "alice"
  ],
  "ids": [
    "userId1"
  ],
  "emails": [
    "bob@example.com"
  ],
  "ldapIds": [
    "ldapId123"
  ]
}
```

<h3 id="sync-users-abac-attributes-from-ldap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|At least one of these properties is required:<br>- usernames (string[]) — Array of Rocket.Chat usernames (1–100 items, unique)<br>- ids (string[]) — Array of Rocket.Chat user IDs (1–100 items, unique)<br>- emails (string[]) — Array of email addresses (1–100 items, unique)<br>- ldapIds (string[]) — Array of LDAP IDs (1–100 items, unique)|
|» usernames|body|[string]|false|none|
|» ids|body|[string]|false|none|
|» emails|body|[string]|false|none|
|» ldapIds|body|[string]|false|none|

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
  "error": "error-abac-not-enabled"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "error-unauthorized"
}
```

> 403 Response

```json
{
  "success": false,
  "error": "error-not-authorized"
}
```

<h3 id="sync-users-abac-attributes-from-ldap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="sync-users-abac-attributes-from-ldap-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

## Get ABAC attribute definition by ID

<a id="opIdget-abac-attributes-:_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/abac/attributes/:_id \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/abac/attributes/:_id`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>

- Retrieves a single ABAC attribute definition by ID.
- Returns the attribute key and its allowed values for the definition identified by `_id`.
- Requires the `abac-management` and `manage-abac-admin-room-attributes` permissions.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.0.0   | Added |
| 8.5.0   | Added the `manage-abac-admin-room-attributes` granular permission requirement. |

<h3 id="get-abac-attribute-definition-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "key": "my_department",
  "values": [
    "eng",
    "sales",
    "hr",
    "it"
  ]
}
```

> 400 Response

```json
{
  "success": false,
  "error": "error-attribute-not-found"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "error-unauthorized"
}
```

> 403 Response

```json
{
  "success": false,
  "error": "error-not-authorized"
}
```

<h3 id="get-abac-attribute-definition-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-abac-attribute-definition-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|key|string|false|none|none|
|values|[string]|false|none|none|

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

<aside class="success">
This operation does not require authentication
</aside>

## Update ABAC attribute definition

<a id="opIdput-abac-attributes-:_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/abac/attributes/:_id \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "key": "my_department",
    "values": [
      "eng",
      "sales"
    ]
  }'
```

`PUT /api/v1/abac/attributes/:_id`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>

- Updates an existing ABAC attribute definition.
- Modifies the attribute identified by `_id`, allowing you to rename its key, change its list of allowed values, or both, subject to in-use and validation checks.
- Requires the ABAC license, the `abac-management` and `manage-abac-admin-room-attributes` permissions, and the global setting `ABAC_Enabled` to be turned on.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.0.0   | Added |
| 8.5.0   | Added the `manage-abac-admin-room-attributes` granular permission requirement. |

> Body parameter

```json
{
  "key": "my_department",
  "values": [
    "eng",
    "sales"
  ]
}
```

<h3 id="update-abac-attribute-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» key|body|string|true|none|
|» values|body|[string]|true|none|

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
  "error": "error-abac-not-enabled"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "error-unauthorized"
}
```

> 403 Response

```json
{
  "success": false,
  "error": "error-not-authorized"
}
```

<h3 id="update-abac-attribute-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="update-abac-attribute-definition-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

## Delete ABAC attribute definition by ID

<a id="opIddelete-abac-attributes-:_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/abac/attributes/:_id \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`DELETE /api/v1/abac/attributes/:_id`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>

- Deletes an ABAC attribute definition by ID.
- Removes the attribute definition identified by `_id`. The delete fails if the attribute is currently in use, for example assigned to any room.
- Requires the `abac-management` and `manage-abac-admin-room-attributes` permissions.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.0.0   | Added |
| 8.5.0   | Added the `manage-abac-admin-room-attributes` granular permission requirement. |

<h3 id="delete-abac-attribute-definition-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

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
  "error": "error-attribute-not-found"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "error-unauthorized"
}
```

> 403 Response

```json
{
  "success": false,
  "error": "error-not-authorized"
}
```

<h3 id="delete-abac-attribute-definition-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="delete-abac-attribute-definition-by-id-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

## Check if ABAC attribute is in use

<a id="opIdget-abac-attributes-:key-is-in-use"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/abac/attributes/:key/is-in-use \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/abac/attributes/:key/is-in-use`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>

- Checks whether an ABAC attribute definition is currently used by any room.
- Requires the `abac-management` and `manage-abac-admin-room-attributes` permissions.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.0.0   | Added |
| 8.5.0   | Added the `manage-abac-admin-room-attributes` granular permission requirement. |

<h3 id="check-if-abac-attribute-is-in-use-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "inUse": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "error-unauthorized"
}
```

> 403 Response

```json
{
  "success": false,
  "error": "error-not-authorized"
}
```

<h3 id="check-if-abac-attribute-is-in-use-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="check-if-abac-attribute-is-in-use-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|inUse|boolean|false|none|none|

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

<aside class="success">
This operation does not require authentication
</aside>

## List rooms with ABAC attributes

<a id="opIdget-abac-rooms"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/abac/rooms \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/abac/rooms`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>

- Lists rooms with ABAC attributes.
- Returns a paginated list of rooms that have ABAC attributes configured, with optional filtering by room name, attribute key, or attribute value using the `filter` and `filterType` query parameters.
- Requires the `abac-management` and `manage-abac-admin-rooms` permissions.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.0.0   | Added |
| 8.5.0   | Added the `manage-abac-admin-rooms` granular permission requirement. |

<h3 id="list-rooms-with-abac-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|number|false|Pagination offset (default 0)|
|count|query|number|false|Page size (default 25)|
|filter|query|string|false|Search text|
|filterType|query|string|false|One of: all, roomName, attribute, value|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "rooms": [
    {
      "_id": "ROOM_ID",
      "name": "private-room",
      "t": "p",
      "abacAttributes": [
        {
          "key": "my_department",
          "values": [
            "eng",
            "sales"
          ]
        }
      ]
    }
  ],
  "offset": 0,
  "count": 25,
  "total": 1
}
```

> 400 Response

```json
{
  "success": false,
  "error": "error-invalid-query-parameters"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "error-unauthorized"
}
```

> 403 Response

```json
{
  "success": false,
  "error": "error-not-authorized"
}
```

<h3 id="list-rooms-with-abac-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="list-rooms-with-abac-attributes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|rooms|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» t|string|false|none|none|
|» abacAttributes|[object]|false|none|none|
|» » key|string|false|none|none|
|» » values|[string]|false|none|none|
|offset|integer|false|none|none|
|count|integer|false|none|none|
|total|integer|false|none|none|

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

<aside class="success">
This operation does not require authentication
</aside>

## List ABAC audit events

<a id="opIdget-abac-audit"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/abac/audit \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/abac/audit`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>

- Lists ABAC audit events.
- Returns a paginated audit log of ABAC-related actions (attribute changes, room attribute changes/removals, and ABAC actions), filterable by time range (`start`, `end`) and optional `actor`, with optional sorting.
- Requires the ABAC and Auditing licenses, the `abac-management` and `view-abac-admin-audit` permissions.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.0.0   | Added |
| 8.5.0   | Added the `view-abac-admin-audit` granular permission requirement. |

<h3 id="list-abac-audit-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string|false|start of time range (defaults to epoch if omitted)|
|end|query|string|false|end of time range (defaults to now if omitted)|
|actor|query|string|false|Filter by actor fields|
|offset|query|number|false|Pagination offset (default 0)|
|count|query|number|false|Page size (default 25)|
|sort|query|string|false|Sorting, typically { "ts": -1 } or { "ts": 1 }|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "events": [
    {
      "_id": "EVENT_ID",
      "t": "abac.object.attribute.changed",
      "ts": "2026-01-30T12:34:56.789Z",
      "actor": {
        "_id": "USER_ID",
        "username": "admin",
        "name": "Admin"
      },
      "data": {}
    }
  ],
  "offset": 0,
  "count": 25,
  "total": 1
}
```

> 400 Response

```json
{
  "success": false,
  "error": "error-invalid-query-parameters"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "error-unauthorized"
}
```

> 403 Response

```json
{
  "success": false,
  "error": "error-not-authorized"
}
```

<h3 id="list-abac-audit-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="list-abac-audit-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|events|[object]|false|none|none|
|» _id|string|false|none|none|
|» t|string|false|none|none|
|» ts|string|false|none|none|
|» actor|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» data|object|false|none|none|
|offset|integer|false|none|none|
|count|integer|false|none|none|
|total|integer|false|none|none|

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

<aside class="success">
This operation does not require authentication
</aside>

## Get PDP Health Status

<a id="opIdget-abac-pdp-health"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/abac/pdp/health \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/abac/pdp/health`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Defense.svg" alt="Defense" style="display: block; margin: auto"></div>

Checks the health and availability of the configured Policy Decision Point (PDP)
for Attribute-Based Access Control (ABAC).

This endpoint is used by administrators to verify that the external PDP service
is operational and properly configured. It includes rate limiting to prevent abuse.

Permissions required: `abac-management` and `manage-abac-admin-settings`.

### Changelog
| Version | Description |
|---------|--------|
| 8.0.0   | Added |
| 8.5.0   | Added the `manage-abac-admin-settings` granular permission requirement. |
| 8.4.0   | Added endpoint to check external PDP health status |

<h3 id="get-pdp-health-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "available": true,
  "message": "ABAC_PDP_Health_OK",
  "success": true
}
```

> 400 Response

```json
{
  "available": false,
  "message": "ABAC_PDP_Health_Not_OK",
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

> 403 Response

```json
{
  "success": false,
  "error": "You do not have permission to manage ABAC"
}
```

<h3 id="get-pdp-health-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - PDP is available and healthy|Inline|
|400|Bad Request|Bad Request - PDP is unavailable or unhealthy|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-pdp-health-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|boolean|false|none|Indicates whether the PDP is available.|
|message|string|false|none|Health check message.|
|success|boolean|false|none|Indicates if the request was successful.|

#### Enumerated Values

|Property|Value|
|---|---|
|available|true|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|boolean|false|none|Indicates whether the PDP is available.|
|message|string|false|none|Error message describing why the PDP is unavailable.|
|success|boolean|false|none|Indicates if the request was successful.|

#### Enumerated Values

|Property|Value|
|---|---|
|available|false|

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

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "ts": "1970-01-01T00:00:00.000Z",
  "title": "string",
  "title_link": "string",
  "title_link_download": true,
  "image_dimensions": {
    "width": 444,
    "height": 360
  },
  "image_preview": "/9j/2wBDAAYEBQ...",
  "image_url": "/file-upload/PNTaE9SBQasdpAwk2/img_1.jpg",
  "image_type": "image/jpeg",
  "image_size": 26674,
  "type": "file",
  "description": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ts|string|false|none|none|
|title|string|false|none|none|
|title_link|string|false|none|none|
|title_link_download|boolean|false|none|none|
|image_dimensions|object|false|none|none|
|image_preview|string|false|none|none|
|image_url|string|false|none|none|
|image_type|string|false|none|none|
|image_size|integer|false|none|none|
|type|string|false|none|none|
|description|string|false|none|none|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "_id": "string",
  "open": true,
  "alert": true,
  "unread": 0,
  "userMentions": 0,
  "groupMentions": 0,
  "ts": "string",
  "rid": "string",
  "name": "string",
  "fname": "string",
  "t": "string",
  "u": {
    "_id": "string",
    "username": "string",
    "name": "string"
  },
  "_updatedAt": "string",
  "ls": "string",
  "E2EKey": "string",
  "draft": "string",
  "threadDrafts": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|open|boolean|false|none|none|
|alert|boolean|false|none|none|
|unread|integer|false|none|none|
|userMentions|integer|false|none|none|
|groupMentions|integer|false|none|none|
|ts|string|false|none|none|
|rid|string|false|none|none|
|name|string|false|none|none|
|fname|string \| null|false|none|none|
|t|string|false|none|none|
|u|object|false|none|none|
|_updatedAt|string|false|none|none|
|ls|string|false|none|none|
|E2EKey|string|false|none|none|
|draft|string|false|none|The unfinished message draft for the room.|
|threadDrafts|object|false|none|The unfinished thread reply drafts, keyed by the ID of each thread's main message.|
