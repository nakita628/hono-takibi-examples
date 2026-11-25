<h1 id="stoat-api">Stoat API v0.16.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Open source user-first chat platform.

Base URLs:

* <a href="https://api.stoat.chat">https://api.stoat.chat</a> - Stoat Production

* <a href="https://beta.stoat.chat/api">https://beta.stoat.chat/api</a> - Stoat Beta

<a href="https://stoat.chat/terms">Terms of service</a>
Email: <a href="mailto:contact@stoat.chat">Stoat</a> 
Web: <a href="https://stoat.chat">Stoat</a> 
License: <a href="https://github.com/stoatchat/stoatchat/blob/main/crates/delta/LICENSE">AGPLv3</a>

<a href="https://developers.stoat.chat">Stoat Developer Documentation</a>

# Authentication

* API Key (Session Token)
    - Parameter Name: **x-session-token**, in: header. Used to authenticate as a user.

* API Key (Valid MFA Ticket)
    - Parameter Name: **x-mfa-ticket**, in: header. Used to authorise a request.

* API Key (Unvalidated MFA Ticket)
    - Parameter Name: **x-mfa-ticket**, in: header. Used to authorise a request.

<h1 id="stoat-api-core">Core</h1>

## Query Node

<a id="opIdroot_root"></a>

> Code samples

```bash
curl https://api.stoat.chat/ \
  -H 'Accept: application/json'
```

`GET /`

Fetch the server configuration for this Revolt instance.

> Example responses

> 200 Response

```json
{
  "stoat": "string",
  "revolt": "string",
  "features": {
    "captcha": {
      "enabled": true,
      "key": "string"
    },
    "email": true,
    "invite_only": true,
    "autumn": {
      "enabled": true,
      "url": "string"
    },
    "january": {
      "enabled": true,
      "url": "string"
    },
    "livekit": {
      "enabled": true,
      "nodes": [
        {
          "name": "string",
          "lat": 0,
          "lon": 0,
          "public_url": "string"
        }
      ]
    },
    "limits": {
      "global": {
        "group_size": 0,
        "message_embeds": 0,
        "message_replies": 0,
        "message_reactions": 0,
        "server_emoji": 0,
        "server_roles": 0,
        "server_channels": 0,
        "body_limit_size": 0,
        "restrict_server_creation": [
          "string"
        ],
        "new_user_hours": 0,
        "max_invite_duration_days": 0
      },
      "new_user": {
        "outgoing_friend_requests": 0,
        "bots": 0,
        "message_length": 0,
        "message_attachments": 0,
        "servers": 0,
        "voice_quality": 0,
        "video": true,
        "video_resolution": [
          0,
          0
        ],
        "video_aspect_ratio": [
          0,
          0
        ],
        "file_upload_size_limits": {
          "property1": 0,
          "property2": 0
        }
      },
      "default": {
        "outgoing_friend_requests": 0,
        "bots": 0,
        "message_length": 0,
        "message_attachments": 0,
        "servers": 0,
        "voice_quality": 0,
        "video": true,
        "video_resolution": [
          0,
          0
        ],
        "video_aspect_ratio": [
          0,
          0
        ],
        "file_upload_size_limits": {
          "property1": 0,
          "property2": 0
        }
      }
    },
    "legal_links": {
      "terms_of_service": "string",
      "privacy_policy": "string",
      "guidelines": "string"
    },
    "assets": "string"
  },
  "ws": "string",
  "app": "string",
  "vapid": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="query-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RevoltConfig](#schemarevoltconfig)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stoat-api-user-information">User Information</h1>

## Fetch Self

<a id="opIdfetch_self_fetch"></a>

> Code samples

```bash
curl https://api.stoat.chat/users/@me \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /users/@me`

Retrieve your user information.

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "username": "string",
  "discriminator": "string",
  "display_name": "string",
  "pronouns": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "relations": [
    {
      "_id": "string",
      "status": {}
    }
  ],
  "badges": 0,
  "status": {
    "text": "string",
    "presence": {}
  },
  "flags": 0,
  "privileged": true,
  "bot": {
    "owner": "string"
  },
  "relationship": {},
  "online": true
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-self-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[User](#schemauser)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Fetch User

<a id="opIdfetch_user_fetch"></a>

> Code samples

```bash
curl https://api.stoat.chat/users/string \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /users/{target}`

Retrieve a user's information.

<h3 id="fetch-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "username": "string",
  "discriminator": "string",
  "display_name": "string",
  "pronouns": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "relations": [
    {
      "_id": "string",
      "status": {}
    }
  ],
  "badges": 0,
  "status": {
    "text": "string",
    "presence": {}
  },
  "flags": 0,
  "privileged": true,
  "bot": {
    "owner": "string"
  },
  "relationship": {},
  "online": true
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[User](#schemauser)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Edit User

<a id="opIdedit_user_edit"></a>

> Code samples

```bash
curl https://api.stoat.chat/users/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "display_name": "string",
    "pronouns": "string",
    "avatar": "string",
    "status": {
      "text": "string",
      "presence": {}
    },
    "profile": {
      "content": "string",
      "background": "string"
    },
    "badges": 0,
    "flags": 0,
    "remove": []
  }'
```

`PATCH /users/{target}`

Edit currently authenticated user.

> Body parameter

```json
{
  "display_name": "string",
  "pronouns": "string",
  "avatar": "string",
  "status": {
    "text": "string",
    "presence": {}
  },
  "profile": {
    "content": "string",
    "background": "string"
  },
  "badges": 0,
  "flags": 0,
  "remove": []
}
```

<h3 id="edit-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|body|body|[DataEditUser](#schemadataedituser)|true|none|
|» display_name|body|string \| null|false|New display name|
|» pronouns|body|string \| null|false|New pronouns|
|» avatar|body|string \| null|false|Attachment Id for avatar|
|» status|body|object \| null|false|New user status|
|» » text|body|string \| null|false|Custom status text|
|» » presence|body|object \| null|false|Current presence option|
|» » » *oneOf*|body|string|false|User is online|
|» » » *oneOf*|body|string|false|User is not currently available|
|» » » *oneOf*|body|string|false|User is focusing / will only receive mentions|
|» » » *oneOf*|body|string|false|User is busy / will not receive any notifications|
|» » » *oneOf*|body|string|false|User appears to be offline|
|» profile|body|object \| null|false|New user profile data<br><br>This is applied as a partial.|
|» » content|body|string \| null|false|Text to set as user profile description|
|» » background|body|string \| null|false|Attachment Id for background|
|» badges|body|integer(int32) \| null|false|Bitfield of user badges|
|» flags|body|integer(int32) \| null|false|Enum of user flags|
|» remove|body|[[FieldsUser](#schemafieldsuser)]|false|Fields to remove from user object|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » *oneOf*|Online|
|» » » *oneOf*|Idle|
|» » » *oneOf*|Focus|
|» » » *oneOf*|Busy|
|» » » *oneOf*|Invisible|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "username": "string",
  "discriminator": "string",
  "display_name": "string",
  "pronouns": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "relations": [
    {
      "_id": "string",
      "status": {}
    }
  ],
  "badges": 0,
  "status": {
    "text": "string",
    "presence": {}
  },
  "flags": 0,
  "privileged": true,
  "bot": {
    "owner": "string"
  },
  "relationship": {},
  "online": true
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="edit-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[User](#schemauser)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Fetch User Flags

<a id="opIdfetch_user_flags_fetch_user_flags"></a>

> Code samples

```bash
curl https://api.stoat.chat/users/string/flags \
  -H 'Accept: application/json'
```

`GET /users/{target}/flags`

Retrieve a user's flags.

<h3 id="fetch-user-flags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "flags": 0
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-user-flags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[FlagResponse](#schemaflagresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Change Username

<a id="opIdchange_username_change_username"></a>

> Code samples

```bash
curl https://api.stoat.chat/users/@me/username \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "username": "string",
    "password": "stringst"
  }'
```

`PATCH /users/@me/username`

Change your username.

> Body parameter

```json
{
  "username": "string",
  "password": "stringst"
}
```

<h3 id="change-username-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DataChangeUsername](#schemadatachangeusername)|true|none|
|» username|body|string|true|New username|
|» password|body|string|true|Current account password|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "username": "string",
  "discriminator": "string",
  "display_name": "string",
  "pronouns": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "relations": [
    {
      "_id": "string",
      "status": {}
    }
  ],
  "badges": 0,
  "status": {
    "text": "string",
    "presence": {}
  },
  "flags": 0,
  "privileged": true,
  "bot": {
    "owner": "string"
  },
  "relationship": {},
  "online": true
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="change-username-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[User](#schemauser)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token, Session Token
</aside>

## Fetch Default Avatar

<a id="opIdget_default_avatar_default_avatar"></a>

> Code samples

```bash
curl https://api.stoat.chat/users/string/default_avatar
```

`GET /users/{target}/default_avatar`

This returns a default avatar based on the given id.

<h3 id="fetch-default-avatar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|string|true|none|

<h3 id="fetch-default-avatar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default Avatar Picture|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch User Profile

<a id="opIdfetch_profile_profile"></a>

> Code samples

```bash
curl https://api.stoat.chat/users/string/profile \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /users/{target}/profile`

Retrieve a user's profile data.

Will fail if you do not have permission to access the other user's profile.

<h3 id="fetch-user-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "background": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  }
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-user-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UserProfile](#schemauserprofile)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-direct-messaging">Direct Messaging</h1>

## Fetch Direct Message Channels

<a id="opIdfetch_dms_direct_messages"></a>

> Code samples

```bash
curl https://api.stoat.chat/users/dms \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /users/dms`

This fetches your direct messages, including any DM and group DM conversations.

> Example responses

> 200 Response

```json
[
  {
    "channel_type": "SavedMessages",
    "_id": "string",
    "user": "string"
  }
]
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-direct-message-channels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default|An error occurred.|[Error](#schemaerror)|

<h3 id="fetch-direct-message-channels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Channel](#schemachannel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Open Direct Message

<a id="opIdopen_dm_open_dm"></a>

> Code samples

```bash
curl https://api.stoat.chat/users/string/dm \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /users/{target}/dm`

Open a DM with another user.

If the target is oneself, a saved messages channel is returned.

<h3 id="open-direct-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "channel_type": "SavedMessages",
  "_id": "string",
  "user": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="open-direct-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Channel](#schemachannel)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-relationships">Relationships</h1>

## Fetch Mutual Friends, Servers, Groups and DMs

<a id="opIdfind_mutual_mutual"></a>

> Code samples

```bash
curl https://api.stoat.chat/users/string/mutual \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /users/{target}/mutual`

Retrieve a list of mutual friends, servers, groups and DMs with another user.

<h3 id="fetch-mutual-friends-servers-groups-and-dms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "users": [
    "string"
  ],
  "servers": [
    "string"
  ],
  "channels": [
    "string"
  ]
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-mutual-friends-servers-groups-and-dms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MutualResponse](#schemamutualresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Accept Friend Request

<a id="opIdadd_friend_add"></a>

> Code samples

```bash
curl https://api.stoat.chat/users/string/friend \
  -X PUT \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`PUT /users/{target}/friend`

Accept another user's friend request.

<h3 id="accept-friend-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "username": "string",
  "discriminator": "string",
  "display_name": "string",
  "pronouns": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "relations": [
    {
      "_id": "string",
      "status": {}
    }
  ],
  "badges": 0,
  "status": {
    "text": "string",
    "presence": {}
  },
  "flags": 0,
  "privileged": true,
  "bot": {
    "owner": "string"
  },
  "relationship": {},
  "online": true
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="accept-friend-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[User](#schemauser)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Deny Friend Request / Remove Friend

<a id="opIdremove_friend_remove"></a>

> Code samples

```bash
curl https://api.stoat.chat/users/string/friend \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`DELETE /users/{target}/friend`

Denies another user's friend request or removes an existing friend.

<h3 id="deny-friend-request-remove-friend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "username": "string",
  "discriminator": "string",
  "display_name": "string",
  "pronouns": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "relations": [
    {
      "_id": "string",
      "status": {}
    }
  ],
  "badges": 0,
  "status": {
    "text": "string",
    "presence": {}
  },
  "flags": 0,
  "privileged": true,
  "bot": {
    "owner": "string"
  },
  "relationship": {},
  "online": true
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="deny-friend-request-remove-friend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[User](#schemauser)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Block User

<a id="opIdblock_user_block"></a>

> Code samples

```bash
curl https://api.stoat.chat/users/string/block \
  -X PUT \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`PUT /users/{target}/block`

Block another user by their id.

<h3 id="block-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "username": "string",
  "discriminator": "string",
  "display_name": "string",
  "pronouns": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "relations": [
    {
      "_id": "string",
      "status": {}
    }
  ],
  "badges": 0,
  "status": {
    "text": "string",
    "presence": {}
  },
  "flags": 0,
  "privileged": true,
  "bot": {
    "owner": "string"
  },
  "relationship": {},
  "online": true
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="block-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[User](#schemauser)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Unblock User

<a id="opIdunblock_user_unblock"></a>

> Code samples

```bash
curl https://api.stoat.chat/users/string/block \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`DELETE /users/{target}/block`

Unblock another user by their id.

<h3 id="unblock-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "username": "string",
  "discriminator": "string",
  "display_name": "string",
  "pronouns": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "relations": [
    {
      "_id": "string",
      "status": {}
    }
  ],
  "badges": 0,
  "status": {
    "text": "string",
    "presence": {}
  },
  "flags": 0,
  "privileged": true,
  "bot": {
    "owner": "string"
  },
  "relationship": {},
  "online": true
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="unblock-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[User](#schemauser)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Send Friend Request

<a id="opIdsend_friend_request_send_friend_request"></a>

> Code samples

```bash
curl https://api.stoat.chat/users/friend \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "username": "string"
  }'
```

`POST /users/friend`

Send a friend request to another user.

> Body parameter

```json
{
  "username": "string"
}
```

<h3 id="send-friend-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DataSendFriendRequest](#schemadatasendfriendrequest)|true|none|
|» username|body|string|true|Username and discriminator combo separated by #|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "username": "string",
  "discriminator": "string",
  "display_name": "string",
  "pronouns": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "relations": [
    {
      "_id": "string",
      "status": {}
    }
  ],
  "badges": 0,
  "status": {
    "text": "string",
    "presence": {}
  },
  "flags": 0,
  "privileged": true,
  "bot": {
    "owner": "string"
  },
  "relationship": {},
  "online": true
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="send-friend-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[User](#schemauser)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-bots">Bots</h1>

## Create Bot

<a id="opIdcreate_create_bot"></a>

> Code samples

```bash
curl https://api.stoat.chat/bots/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`POST /bots/create`

Create a new Revolt bot.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="create-bot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DataCreateBot](#schemadatacreatebot)|true|none|
|» name|body|string|true|Bot username|

> Example responses

> 200 Response

```json
{
  "user": {
    "_id": "string",
    "username": "string",
    "discriminator": "string",
    "display_name": "string",
    "pronouns": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "relations": [
      {
        "_id": "string",
        "status": {}
      }
    ],
    "badges": 0,
    "status": {
      "text": "string",
      "presence": {}
    },
    "flags": 0,
    "privileged": true,
    "bot": {
      "owner": "string"
    },
    "relationship": {},
    "online": true
  },
  "_id": "string",
  "owner": "string",
  "token": "string",
  "public": true,
  "default_permissions": 0,
  "analytics": true,
  "discoverable": true,
  "interactions_url": "string",
  "terms_of_service_url": "string",
  "privacy_policy_url": "string",
  "flags": 0
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="create-bot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BotWithUserResponse](#schemabotwithuserresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Fetch Public Bot

<a id="opIdfetch_public_fetch_public_bot"></a>

> Code samples

```bash
curl https://api.stoat.chat/bots/string/invite \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /bots/{target}/invite`

Fetch details of a public (or owned) bot by its id.

<h3 id="fetch-public-bot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "username": "string",
  "avatar": "string",
  "description": "string",
  "privacy_policy_url": "string",
  "terms_of_service_url": "string",
  "default_permissions": 0
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-public-bot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PublicBot](#schemapublicbot)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Invite Bot

<a id="opIdinvite_invite_bot"></a>

> Code samples

```bash
curl https://api.stoat.chat/bots/string/invite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "server": "string"
  }'
```

`POST /bots/{target}/invite`

Invite a bot to a server or group by its id.`

> Body parameter

```json
{
  "server": "string"
}
```

<h3 id="invite-bot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|permissions|query|integer(int64) \| null|false|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|
|body|body|[InviteBotDestination](#schemainvitebotdestination)|true|none|
|» *anyOf*|body|object|false|Invite to a server|
|» server|body|string|true|Server Id|
|» *anyOf*|body|object|false|Invite to a group|
|» group|body|string|true|Group Id|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="invite-bot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Fetch Bot

<a id="opIdfetch_fetch_bot"></a>

> Code samples

```bash
curl https://api.stoat.chat/bots/string \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /bots/{bot_id}`

Fetch details of a bot you own by its id.

<h3 id="fetch-bot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bot_id|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "bot": {
    "_id": "string",
    "owner": "string",
    "token": "string",
    "public": true,
    "default_permissions": 0,
    "analytics": true,
    "discoverable": true,
    "interactions_url": "string",
    "terms_of_service_url": "string",
    "privacy_policy_url": "string",
    "flags": 0
  },
  "user": {
    "_id": "string",
    "username": "string",
    "discriminator": "string",
    "display_name": "string",
    "pronouns": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "relations": [
      {
        "_id": "string",
        "status": {}
      }
    ],
    "badges": 0,
    "status": {
      "text": "string",
      "presence": {}
    },
    "flags": 0,
    "privileged": true,
    "bot": {
      "owner": "string"
    },
    "relationship": {},
    "online": true
  }
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-bot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[FetchBotResponse](#schemafetchbotresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Delete Bot

<a id="opIddelete_delete_bot"></a>

> Code samples

```bash
curl https://api.stoat.chat/bots/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`DELETE /bots/{bot_id}`

Delete a bot by its id.

<h3 id="delete-bot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bot_id|path|[Id](#schemaid)|true|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="delete-bot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token, Session Token, Valid MFA Ticket
</aside>

## Edit Bot

<a id="opIdedit_edit_bot"></a>

> Code samples

```bash
curl https://api.stoat.chat/bots/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "name": "string",
    "public": true,
    "default_permissions": 0,
    "analytics": true,
    "interactions_url": "string",
    "remove": []
  }'
```

`PATCH /bots/{bot_id}`

Edit bot details by its id.

> Body parameter

```json
{
  "name": "string",
  "public": true,
  "default_permissions": 0,
  "analytics": true,
  "interactions_url": "string",
  "remove": []
}
```

<h3 id="edit-bot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bot_id|path|[Id](#schemaid)|true|none|
|body|body|[DataEditBot](#schemadataeditbot)|true|none|
|» name|body|string \| null|false|Bot username|
|» public|body|boolean \| null|false|Whether the bot can be added by anyone|
|» default_permissions|body|integer(int64) \| null|false|The permissions the bot will ask to have upon being invited to a server,|
|» analytics|body|boolean \| null|false|Whether analytics should be gathered for this bot<br><br>Must be enabled in order to show up on [Revolt Discover](https://rvlt.gg).|
|» interactions_url|body|string \| null|false|Interactions URL|
|» remove|body|[[FieldsBot](#schemafieldsbot)]|false|Fields to remove from bot object|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» remove|Token|
|» remove|InteractionsURL|

> Example responses

> 200 Response

```json
{
  "user": {
    "_id": "string",
    "username": "string",
    "discriminator": "string",
    "display_name": "string",
    "pronouns": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "relations": [
      {
        "_id": "string",
        "status": {}
      }
    ],
    "badges": 0,
    "status": {
      "text": "string",
      "presence": {}
    },
    "flags": 0,
    "privileged": true,
    "bot": {
      "owner": "string"
    },
    "relationship": {},
    "online": true
  },
  "_id": "string",
  "owner": "string",
  "token": "string",
  "public": true,
  "default_permissions": 0,
  "analytics": true,
  "discoverable": true,
  "interactions_url": "string",
  "terms_of_service_url": "string",
  "privacy_policy_url": "string",
  "flags": 0
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="edit-bot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BotWithUserResponse](#schemabotwithuserresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Fetch Owned Bots

<a id="opIdfetch_owned_fetch_owned_bots"></a>

> Code samples

```bash
curl https://api.stoat.chat/bots/@me \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /bots/@me`

Fetch all of the bots that you have control over.

> Example responses

> 200 Response

```json
{
  "bots": [
    {
      "_id": "string",
      "owner": "string",
      "token": "string",
      "public": true,
      "default_permissions": 0,
      "analytics": true,
      "discoverable": true,
      "interactions_url": "string",
      "terms_of_service_url": "string",
      "privacy_policy_url": "string",
      "flags": 0
    }
  ],
  "users": [
    {
      "_id": "string",
      "username": "string",
      "discriminator": "string",
      "display_name": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "relations": [
        {
          "_id": "string",
          "status": {}
        }
      ],
      "badges": 0,
      "status": {
        "text": "string",
        "presence": {}
      },
      "flags": 0,
      "privileged": true,
      "bot": {
        "owner": "string"
      },
      "relationship": {},
      "online": true
    }
  ]
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-owned-bots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OwnedBotsResponse](#schemaownedbotsresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-discover">Discover</h1>

## Get Discover request status

<a id="opIddiscover_discover_get_bot_discover_get_bot"></a>

> Code samples

```bash
curl https://api.stoat.chat/bots/string/discover \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /bots/{bot_id}/discover`

Fetches the status of your Discover request. If it has been approved or denied, the reason will be provided (if applicable). This endpoint is ONLY USEFUL in production on stoat.chat/app .

<h3 id="get-discover-request-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bot_id|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "type": {},
  "id": "string",
  "status": {}
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="get-discover-request-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DiscoverRequest](#schemadiscoverrequest)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Add bot to Discover

<a id="opIddiscover_discover_add_bot_discover_add_bot"></a>

> Code samples

```bash
curl https://api.stoat.chat/bots/string/discover \
  -X PUT \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`PUT /bots/{bot_id}/discover`

This puts your bot into the Discover request queue. This endpoint is ONLY USEFUL in production on stoat.chat/app .

<h3 id="add-bot-to-discover-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bot_id|path|[Id](#schemaid)|true|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="add-bot-to-discover-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Delete Discover request

<a id="opIddiscover_discover_remove_bot_discover_remove_bot"></a>

> Code samples

```bash
curl https://api.stoat.chat/bots/string/discover \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`DELETE /bots/{bot_id}/discover`

This cannot be used if your request is no longer in the queue (ie approved or rejected). If you wish to reapply after a rejection, submit another POST. This endpoint is ONLY USEFUL in production on stoat.chat/app .

<h3 id="delete-discover-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bot_id|path|[Id](#schemaid)|true|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="delete-discover-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Get Discover request status

<a id="opIddiscover_discover_get_discover_get"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/discover \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /servers/{server}/discover`

Fetches the status of your Discover request. If it has been approved or denied, the reason will be provided (if applicable). This endpoint is ONLY USEFUL in production on stoat.chat/app .

<h3 id="get-discover-request-status-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|server|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "type": {},
  "id": "string",
  "status": {}
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="get-discover-request-status-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DiscoverRequest](#schemadiscoverrequest)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Add server to Discover

<a id="opIddiscover_discover_add_discover_add"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/discover \
  -X PUT \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`PUT /servers/{server}/discover`

This puts your server into the Discover request queue. This endpoint is ONLY USEFUL in production on stoat.chat/app .

<h3 id="add-server-to-discover-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|server|path|[Id](#schemaid)|true|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="add-server-to-discover-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Delete Discover request

<a id="opIddiscover_discover_remove_discover_remove"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/discover \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`DELETE /servers/{server}/discover`

This cannot be used if your request is no longer in the queue (ie approved or rejected). If you wish to reapply after a rejection, submit another POST. This endpoint is ONLY USEFUL in production on stoat.chat/app .

<h3 id="delete-discover-request-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|server|path|[Id](#schemaid)|true|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="delete-discover-request-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-messaging">Messaging</h1>

## Acknowledge Message

<a id="opIdchannel_ack_ack"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/ack/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`PUT /channels/{target}/ack/{message}`

Lets the server and all other clients know that we've seen this message id in this channel.

<h3 id="acknowledge-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|message|path|[Id](#schemaid)|true|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="acknowledge-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Fetch Messages

<a id="opIdmessage_query_query"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/messages \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /channels/{target}/messages`

Fetch multiple messages.

<h3 id="fetch-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|limit|query|integer(int64) \| null|false|Maximum number of messages to fetch<br><br>For fetching nearby messages, this is \`(limit + 2)\`.|
|before|query|string \| null|false|Message id before which messages should be fetched|
|after|query|string \| null|false|Message id after which messages should be fetched|
|sort|query|[MessageSort](#schemamessagesort)|false|Message sort direction|
|nearby|query|string \| null|false|Message id to search around<br><br>Specifying 'nearby' ignores 'before', 'after' and 'sort'. It will also take half of limit rounded as the limits to each side. It also fetches the message ID specified.|
|include_users|query|boolean \| null|false|Whether to include user (and member, if server channel) objects|

> Example responses

> 200 Response

```json
[
  {
    "_id": "string",
    "nonce": "string",
    "channel": "string",
    "author": "string",
    "user": {
      "_id": "string",
      "username": "string",
      "discriminator": "string",
      "display_name": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "relations": [
        {
          "_id": "string",
          "status": {}
        }
      ],
      "badges": 0,
      "status": {
        "text": "string",
        "presence": {}
      },
      "flags": 0,
      "privileged": true,
      "bot": {
        "owner": "string"
      },
      "relationship": {},
      "online": true
    },
    "member": {
      "_id": {
        "server": "string",
        "user": "string"
      },
      "joined_at": {},
      "nickname": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "roles": [
        "string"
      ],
      "timeout": {},
      "can_publish": true,
      "can_receive": true
    },
    "webhook": {
      "name": "string",
      "avatar": "string"
    },
    "content": "string",
    "system": {
      "type": "text",
      "content": "string"
    },
    "attachments": [
      {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      }
    ],
    "edited": {},
    "embeds": [
      {
        "type": "Website",
        "url": "string",
        "original_url": "string",
        "special": {
          "type": "None"
        },
        "title": "string",
        "description": "string",
        "image": {
          "url": "string",
          "width": 0,
          "height": 0,
          "size": {}
        },
        "video": {
          "url": "string",
          "width": 0,
          "height": 0
        },
        "site_name": "string",
        "icon_url": "string",
        "colour": "string"
      }
    ],
    "mentions": [
      "string"
    ],
    "role_mentions": [
      "string"
    ],
    "replies": [
      "string"
    ],
    "reactions": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "interactions": {
      "reactions": [
        "string"
      ],
      "restrict_reactions": true
    },
    "masquerade": {
      "name": "string",
      "avatar": "string",
      "colour": "string"
    },
    "pinned": true,
    "flags": 0
  }
]
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BulkMessageResponse](#schemabulkmessageresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Send Message

<a id="opIdmessage_send_message_send"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "nonce": "string",
    "content": "string",
    "attachments": [
      "string"
    ],
    "replies": [
      {
        "id": "string",
        "mention": true,
        "fail_if_not_exists": true
      }
    ],
    "embeds": [
      {
        "icon_url": "string",
        "url": "string",
        "title": "string",
        "description": "string",
        "media": "string",
        "colour": "string"
      }
    ],
    "masquerade": {
      "name": "string",
      "avatar": "string",
      "colour": "string"
    },
    "interactions": {
      "reactions": [
        "string"
      ],
      "restrict_reactions": true
    },
    "flags": 0
  }'
```

`POST /channels/{target}/messages`

Sends a message to the given channel.

> Body parameter

```json
{
  "nonce": "string",
  "content": "string",
  "attachments": [
    "string"
  ],
  "replies": [
    {
      "id": "string",
      "mention": true,
      "fail_if_not_exists": true
    }
  ],
  "embeds": [
    {
      "icon_url": "string",
      "url": "string",
      "title": "string",
      "description": "string",
      "media": "string",
      "colour": "string"
    }
  ],
  "masquerade": {
    "name": "string",
    "avatar": "string",
    "colour": "string"
  },
  "interactions": {
    "reactions": [
      "string"
    ],
    "restrict_reactions": true
  },
  "flags": 0
}
```

<h3 id="send-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|Idempotency-Key|header|string|false|Unique key to prevent duplicate requests|
|body|body|[DataMessageSend](#schemadatamessagesend)|true|none|
|» nonce|body|string \| null|false|Unique token to prevent duplicate message sending<br><br>**This is deprecated and replaced by `Idempotency-Key`!**|
|» content|body|string \| null|false|Message content to send|
|» attachments|body|[string]|false|Attachments to include in message|
|» replies|body|[[ReplyIntent](#schemareplyintent)]|false|Messages to reply to|
|» embeds|body|[[SendableEmbed](#schemasendableembed)]|false|Embeds to include in message<br><br>Text embed content contributes to the content length cap|
|» masquerade|body|object \| null|false|Masquerade to apply to this message|
|» » name|body|string \| null|false|Replace the display name shown on this message|
|» » avatar|body|string \| null|false|Replace the avatar shown on this message (URL to image file)|
|» » colour|body|string \| null|false|Replace the display role colour shown on this message<br><br>Must have `ManageRole` permission to use|
|» interactions|body|object \| null|false|Information about how this message should be interacted with|
|» » reactions|body|[string]|false|Reactions which should always appear and be distinct|
|» » restrict_reactions|body|boolean|false|Whether reactions should be restricted to the given list<br><br>Can only be set to true if reactions list is of at least length 1|
|» flags|body|integer(uint32) \| null|false|Bitfield of message flags<br><br>https://docs.rs/revolt-models/latest/revolt_models/v0/enum.MessageFlags.html|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "nonce": "string",
  "channel": "string",
  "author": "string",
  "user": {
    "_id": "string",
    "username": "string",
    "discriminator": "string",
    "display_name": "string",
    "pronouns": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "relations": [
      {
        "_id": "string",
        "status": {}
      }
    ],
    "badges": 0,
    "status": {
      "text": "string",
      "presence": {}
    },
    "flags": 0,
    "privileged": true,
    "bot": {
      "owner": "string"
    },
    "relationship": {},
    "online": true
  },
  "member": {
    "_id": {
      "server": "string",
      "user": "string"
    },
    "joined_at": {},
    "nickname": "string",
    "pronouns": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "roles": [
      "string"
    ],
    "timeout": {},
    "can_publish": true,
    "can_receive": true
  },
  "webhook": {
    "name": "string",
    "avatar": "string"
  },
  "content": "string",
  "system": {
    "type": "text",
    "content": "string"
  },
  "attachments": [
    {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    }
  ],
  "edited": {},
  "embeds": [
    {
      "type": "Website",
      "url": "string",
      "original_url": "string",
      "special": {
        "type": "None"
      },
      "title": "string",
      "description": "string",
      "image": {
        "url": "string",
        "width": 0,
        "height": 0,
        "size": {}
      },
      "video": {
        "url": "string",
        "width": 0,
        "height": 0
      },
      "site_name": "string",
      "icon_url": "string",
      "colour": "string"
    }
  ],
  "mentions": [
    "string"
  ],
  "role_mentions": [
    "string"
  ],
  "replies": [
    "string"
  ],
  "reactions": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "interactions": {
    "reactions": [
      "string"
    ],
    "restrict_reactions": true
  },
  "masquerade": {
    "name": "string",
    "avatar": "string",
    "colour": "string"
  },
  "pinned": true,
  "flags": 0
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="send-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Message](#schemamessage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Search for Messages

<a id="opIdmessage_search_search"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "query": "string",
    "pinned": true,
    "limit": 1,
    "before": "stringstringstringstringst",
    "after": "stringstringstringstringst",
    "sort": "Relevance",
    "include_users": true
  }'
```

`POST /channels/{target}/search`

This route searches for messages within the given parameters.

> Body parameter

```json
{
  "query": "string",
  "pinned": true,
  "limit": 1,
  "before": "stringstringstringstringst",
  "after": "stringstringstringstringst",
  "sort": "Relevance",
  "include_users": true
}
```

<h3 id="search-for-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|body|body|[DataMessageSearch](#schemadatamessagesearch)|true|none|
|» query|body|string \| null|false|Full-text search query<br><br>See [MongoDB documentation](https://docs.mongodb.com/manual/text-search/#-text-operator) for more information.|
|» pinned|body|boolean \| null|false|Whether to only search for pinned messages, cannot be sent with `query`.|
|» limit|body|integer(int64) \| null|false|Maximum number of messages to fetch|
|» before|body|string \| null|false|Message id before which messages should be fetched|
|» after|body|string \| null|false|Message id after which messages should be fetched|
|» sort|body|object|false|Message sort direction<br><br>By default, it will be sorted by latest.|
|» » *oneOf*|body|string|false|Sort by the most relevant messages|
|» » *oneOf*|body|string|false|Sort by the newest messages first|
|» » *oneOf*|body|string|false|Sort by the oldest messages first|
|» include_users|body|boolean \| null|false|Whether to include user (and member, if server channel) objects|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *oneOf*|Relevance|
|» » *oneOf*|Latest|
|» » *oneOf*|Oldest|

> Example responses

> 200 Response

```json
[
  {
    "_id": "string",
    "nonce": "string",
    "channel": "string",
    "author": "string",
    "user": {
      "_id": "string",
      "username": "string",
      "discriminator": "string",
      "display_name": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "relations": [
        {
          "_id": "string",
          "status": {}
        }
      ],
      "badges": 0,
      "status": {
        "text": "string",
        "presence": {}
      },
      "flags": 0,
      "privileged": true,
      "bot": {
        "owner": "string"
      },
      "relationship": {},
      "online": true
    },
    "member": {
      "_id": {
        "server": "string",
        "user": "string"
      },
      "joined_at": {},
      "nickname": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "roles": [
        "string"
      ],
      "timeout": {},
      "can_publish": true,
      "can_receive": true
    },
    "webhook": {
      "name": "string",
      "avatar": "string"
    },
    "content": "string",
    "system": {
      "type": "text",
      "content": "string"
    },
    "attachments": [
      {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      }
    ],
    "edited": {},
    "embeds": [
      {
        "type": "Website",
        "url": "string",
        "original_url": "string",
        "special": {
          "type": "None"
        },
        "title": "string",
        "description": "string",
        "image": {
          "url": "string",
          "width": 0,
          "height": 0,
          "size": {}
        },
        "video": {
          "url": "string",
          "width": 0,
          "height": 0
        },
        "site_name": "string",
        "icon_url": "string",
        "colour": "string"
      }
    ],
    "mentions": [
      "string"
    ],
    "role_mentions": [
      "string"
    ],
    "replies": [
      "string"
    ],
    "reactions": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "interactions": {
      "reactions": [
        "string"
      ],
      "restrict_reactions": true
    },
    "masquerade": {
      "name": "string",
      "avatar": "string",
      "colour": "string"
    },
    "pinned": true,
    "flags": 0
  }
]
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="search-for-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BulkMessageResponse](#schemabulkmessageresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Pins a message

<a id="opIdmessage_pin_message_pin"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/messages/string/pin \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`POST /channels/{target}/messages/{msg}/pin`

Pins a message by its id.

<h3 id="pins-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|msg|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="pins-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Unpins a message

<a id="opIdmessage_unpin_message_unpin"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/messages/string/pin \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`DELETE /channels/{target}/messages/{msg}/pin`

Unpins a message by its id.

<h3 id="unpins-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|msg|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="unpins-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Fetch Message

<a id="opIdmessage_fetch_fetch"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/messages/string \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /channels/{target}/messages/{msg}`

Retrieves a message by its id.

<h3 id="fetch-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|msg|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "nonce": "string",
  "channel": "string",
  "author": "string",
  "user": {
    "_id": "string",
    "username": "string",
    "discriminator": "string",
    "display_name": "string",
    "pronouns": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "relations": [
      {
        "_id": "string",
        "status": {}
      }
    ],
    "badges": 0,
    "status": {
      "text": "string",
      "presence": {}
    },
    "flags": 0,
    "privileged": true,
    "bot": {
      "owner": "string"
    },
    "relationship": {},
    "online": true
  },
  "member": {
    "_id": {
      "server": "string",
      "user": "string"
    },
    "joined_at": {},
    "nickname": "string",
    "pronouns": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "roles": [
      "string"
    ],
    "timeout": {},
    "can_publish": true,
    "can_receive": true
  },
  "webhook": {
    "name": "string",
    "avatar": "string"
  },
  "content": "string",
  "system": {
    "type": "text",
    "content": "string"
  },
  "attachments": [
    {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    }
  ],
  "edited": {},
  "embeds": [
    {
      "type": "Website",
      "url": "string",
      "original_url": "string",
      "special": {
        "type": "None"
      },
      "title": "string",
      "description": "string",
      "image": {
        "url": "string",
        "width": 0,
        "height": 0,
        "size": {}
      },
      "video": {
        "url": "string",
        "width": 0,
        "height": 0
      },
      "site_name": "string",
      "icon_url": "string",
      "colour": "string"
    }
  ],
  "mentions": [
    "string"
  ],
  "role_mentions": [
    "string"
  ],
  "replies": [
    "string"
  ],
  "reactions": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "interactions": {
    "reactions": [
      "string"
    ],
    "restrict_reactions": true
  },
  "masquerade": {
    "name": "string",
    "avatar": "string",
    "colour": "string"
  },
  "pinned": true,
  "flags": 0
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Message](#schemamessage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Delete Message

<a id="opIdmessage_delete_delete"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/messages/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`DELETE /channels/{target}/messages/{msg}`

Delete a message you've sent or one you have permission to delete.

<h3 id="delete-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|msg|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="delete-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Edit Message

<a id="opIdmessage_edit_edit"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/messages/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "content": "string",
    "embeds": [
      {
        "icon_url": "string",
        "url": "string",
        "title": "string",
        "description": "string",
        "media": "string",
        "colour": "string"
      }
    ]
  }'
```

`PATCH /channels/{target}/messages/{msg}`

Edits a message that you've previously sent.

> Body parameter

```json
{
  "content": "string",
  "embeds": [
    {
      "icon_url": "string",
      "url": "string",
      "title": "string",
      "description": "string",
      "media": "string",
      "colour": "string"
    }
  ]
}
```

<h3 id="edit-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|msg|path|[Id](#schemaid)|true|none|
|body|body|[DataEditMessage](#schemadataeditmessage)|true|none|
|» content|body|string \| null|false|New message content|
|» embeds|body|[[SendableEmbed](#schemasendableembed)]|false|Embeds to include in the message|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "nonce": "string",
  "channel": "string",
  "author": "string",
  "user": {
    "_id": "string",
    "username": "string",
    "discriminator": "string",
    "display_name": "string",
    "pronouns": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "relations": [
      {
        "_id": "string",
        "status": {}
      }
    ],
    "badges": 0,
    "status": {
      "text": "string",
      "presence": {}
    },
    "flags": 0,
    "privileged": true,
    "bot": {
      "owner": "string"
    },
    "relationship": {},
    "online": true
  },
  "member": {
    "_id": {
      "server": "string",
      "user": "string"
    },
    "joined_at": {},
    "nickname": "string",
    "pronouns": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "roles": [
      "string"
    ],
    "timeout": {},
    "can_publish": true,
    "can_receive": true
  },
  "webhook": {
    "name": "string",
    "avatar": "string"
  },
  "content": "string",
  "system": {
    "type": "text",
    "content": "string"
  },
  "attachments": [
    {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    }
  ],
  "edited": {},
  "embeds": [
    {
      "type": "Website",
      "url": "string",
      "original_url": "string",
      "special": {
        "type": "None"
      },
      "title": "string",
      "description": "string",
      "image": {
        "url": "string",
        "width": 0,
        "height": 0,
        "size": {}
      },
      "video": {
        "url": "string",
        "width": 0,
        "height": 0
      },
      "site_name": "string",
      "icon_url": "string",
      "colour": "string"
    }
  ],
  "mentions": [
    "string"
  ],
  "role_mentions": [
    "string"
  ],
  "replies": [
    "string"
  ],
  "reactions": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "interactions": {
    "reactions": [
      "string"
    ],
    "restrict_reactions": true
  },
  "masquerade": {
    "name": "string",
    "avatar": "string",
    "colour": "string"
  },
  "pinned": true,
  "flags": 0
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="edit-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Message](#schemamessage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Bulk Delete Messages

<a id="opIdmessage_bulk_delete_bulk_delete_messages"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/messages/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "ids": [
      "string"
    ]
  }'
```

`DELETE /channels/{target}/messages/bulk`

Delete multiple messages you've sent or one you have permission to delete.

This will always require `ManageMessages` permission regardless of whether you own the message or not.

Messages must have been sent within the past 1 week.

> Body parameter

```json
{
  "ids": [
    "string"
  ]
}
```

<h3 id="bulk-delete-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|
|body|body|[OptionsBulkDelete](#schemaoptionsbulkdelete)|true|none|
|» ids|body|[string]|true|Message IDs|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="bulk-delete-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-channel-information">Channel Information</h1>

## Fetch Channel

<a id="opIdchannel_fetch_fetch"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /channels/{target}`

Fetch channel by its id.

<h3 id="fetch-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "channel_type": "SavedMessages",
  "_id": "string",
  "user": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Channel](#schemachannel)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Close Channel

<a id="opIdchannel_delete_delete"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`DELETE /channels/{target}`

Deletes a server channel, leaves a group or closes a group.

<h3 id="close-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|leave_silently|query|boolean \| null|false|Whether to not send a leave message|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="close-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Edit Channel

<a id="opIdchannel_edit_edit"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "owner": "string",
    "icon": "string",
    "nsfw": true,
    "archived": true,
    "voice": {
      "max_users": 1
    },
    "slowmode": 0,
    "remove": []
  }'
```

`PATCH /channels/{target}`

Edit a channel object by its id.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "owner": "string",
  "icon": "string",
  "nsfw": true,
  "archived": true,
  "voice": {
    "max_users": 1
  },
  "slowmode": 0,
  "remove": []
}
```

<h3 id="edit-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|
|body|body|[DataEditChannel](#schemadataeditchannel)|true|none|
|» name|body|string \| null|false|Channel name|
|» description|body|string \| null|false|Channel description|
|» owner|body|string \| null|false|Group owner|
|» icon|body|string \| null|false|Icon<br><br>Provide an Autumn attachment Id.|
|» nsfw|body|boolean \| null|false|Whether this channel is age-restricted|
|» archived|body|boolean \| null|false|Whether this channel is archived|
|» voice|body|object \| null|false|Voice Information for voice channels|
|» » max_users|body|integer(uint) \| null|false|Maximium amount of users allowed in the voice channel at once|
|» slowmode|body|integer(uint64) \| null|false|The channel's slow mode delay in seconds, up to 6 hours|
|» remove|body|[[FieldsChannel](#schemafieldschannel)]|false|Fields to remove from channel|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» remove|Description|
|» remove|Icon|
|» remove|DefaultPermissions|
|» remove|Voice|
|» remove|Slowmode|

> Example responses

> 200 Response

```json
{
  "channel_type": "SavedMessages",
  "_id": "string",
  "user": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="edit-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Channel](#schemachannel)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-groups">Groups</h1>

## Fetch Group Members

<a id="opIdmembers_fetch_fetch_members"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/members \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /channels/{target}/members`

Retrieves all users who are part of this group.

This may not return full user information if users are not friends but have mutual connections.

<h3 id="fetch-group-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "_id": "string",
    "username": "string",
    "discriminator": "string",
    "display_name": "string",
    "pronouns": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "relations": [
      {
        "_id": "string",
        "status": {}
      }
    ],
    "badges": 0,
    "status": {
      "text": "string",
      "presence": {}
    },
    "flags": 0,
    "privileged": true,
    "bot": {
      "owner": "string"
    },
    "relationship": {},
    "online": true
  }
]
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-group-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default|An error occurred.|[Error](#schemaerror)|

<h3 id="fetch-group-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[User](#schemauser)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Create Group

<a id="opIdgroup_create_create_group"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "icon": "string",
    "users": [],
    "nsfw": true
  }'
```

`POST /channels/create`

Create a new group channel.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "icon": "string",
  "users": [],
  "nsfw": true
}
```

<h3 id="create-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DataCreateGroup](#schemadatacreategroup)|true|none|
|» name|body|string|true|Group name|
|» description|body|string \| null|false|Group description|
|» icon|body|string \| null|false|Group icon|
|» users|body|[string]|false|Array of user IDs to add to the group<br><br>Must be friends with these users.|
|» nsfw|body|boolean \| null|false|Whether this group is age-restricted|

> Example responses

> 200 Response

```json
{
  "channel_type": "SavedMessages",
  "_id": "string",
  "user": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="create-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Channel](#schemachannel)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Add Member to Group

<a id="opIdgroup_add_member_add_member"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/recipients/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`PUT /channels/{group_id}/recipients/{member_id}`

Adds another user to the group.

<h3 id="add-member-to-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|[Id](#schemaid)|true|none|
|member_id|path|[Id](#schemaid)|true|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="add-member-to-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Remove Member from Group

<a id="opIdgroup_remove_member_remove_member"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/recipients/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`DELETE /channels/{group_id}/recipients/{member_id}`

Removes a user from the group.

<h3 id="remove-member-from-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|[Id](#schemaid)|true|none|
|member_id|path|[Id](#schemaid)|true|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="remove-member-from-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-channel-invites">Channel Invites</h1>

## Create Invite

<a id="opIdinvite_create_create_invite"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/invites \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "max_uses": 1,
    "expires": {}
  }'
```

`POST /channels/{target}/invites`

Creates an invite to this channel.

Channel must be a `TextChannel`.

> Body parameter

```json
{
  "max_uses": 1,
  "expires": {}
}
```

<h3 id="create-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|
|body|body|[DataCreateInvite](#schemadatacreateinvite)|false|none|
|» max_uses|body|integer(uint64) \| null|false|Maximum number of times this invite can be used|
|» expires|body|object \| null|false|Number of seconds until this invite expires|

> Example responses

> 200 Response

```json
{
  "type": "Server",
  "_id": "string",
  "server": "string",
  "creator": "string",
  "channel": "string",
  "max_uses": 0,
  "uses": 0,
  "expires": {}
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="create-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Invite](#schemainvite)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-voice">Voice</h1>

## Join Call

<a id="opIdvoice_join_call"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/join_call \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "node": "string",
    "force_disconnect": true,
    "recipients": [
      "string"
    ]
  }'
```

`POST /channels/{target}/join_call`

Asks the voice server for a token to join the call.

> Body parameter

```json
{
  "node": "string",
  "force_disconnect": true,
  "recipients": [
    "string"
  ]
}
```

<h3 id="join-call-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|body|body|[DataJoinCall](#schemadatajoincall)|true|none|
|» node|body|string \| null|false|Name of the node to join|
|» force_disconnect|body|boolean \| null|false|Whether to force disconnect any other existing voice connections<br><br>Useful for disconnecting on another device and joining on a new.|
|» recipients|body|[string]|false|Users which should be notified of the call starting<br><br>Only used when the user is the first one connected.|

> Example responses

> 200 Response

```json
{
  "token": "string",
  "url": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="join-call-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CreateVoiceUserResponse](#schemacreatevoiceuserresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Stop Ring

<a id="opIdvoice_stop_ring_stop_ring"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/end_ring/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`PUT /channels/{target}/end_ring/{target_user}`

Stops ringing a specific user in a dm call. You must be in the call to use this endpoint, returns NotConnected otherwise. Only valid in DM/Group channels, will return NoEffect in servers. Returns NotFound if the user is not in the dm/group channel

<h3 id="stop-ring-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|target_user|path|[Id](#schemaid)|true|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="stop-ring-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-channel-permissions">Channel Permissions</h1>

## Set Role Permission

<a id="opIdpermissions_set_set_role_permissions"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/permissions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "permissions": {
      "allow": 0,
      "deny": 0
    }
  }'
```

`PUT /channels/{target}/permissions/{role_id}`

Sets permissions for the specified role in this channel.

Channel must be a `TextChannel`.

> Body parameter

```json
{
  "permissions": {
    "allow": 0,
    "deny": 0
  }
}
```

<h3 id="set-role-permission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|role_id|path|string|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|
|body|body|[DataSetRolePermissions](#schemadatasetrolepermissions)|true|none|
|» permissions|body|object|true|Allow / deny values to set for this role|
|» » allow|body|integer(uint64)|true|Allow bit flags|
|» » deny|body|integer(uint64)|true|Disallow bit flags|

> Example responses

> 200 Response

```json
{
  "channel_type": "SavedMessages",
  "_id": "string",
  "user": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="set-role-permission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Channel](#schemachannel)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Set Default Permission

<a id="opIdpermissions_set_default_set_default_channel_permissions"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/permissions/default \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "permissions": 0
  }'
```

`PUT /channels/{target}/permissions/default`

Sets permissions for the default role in this channel.

Channel must be a `Group` or `TextChannel`.

> Body parameter

```json
{
  "permissions": 0
}
```

<h3 id="set-default-permission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|
|body|body|[DataDefaultChannelPermissions](#schemadatadefaultchannelpermissions)|true|none|
|» *anyOf*|body|object|false|none|
|» permissions|body|integer(uint64)|true|Permission values to set for members in a `Group`|
|» *anyOf*|body|object|false|none|
|» permissions|body|object|true|Allow / deny values to set for members in this server channel|
|» » allow|body|integer(uint64)|true|Allow bit flags|
|» » deny|body|integer(uint64)|true|Disallow bit flags|

> Example responses

> 200 Response

```json
{
  "channel_type": "SavedMessages",
  "_id": "string",
  "user": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="set-default-permission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Channel](#schemachannel)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-interactions">Interactions</h1>

## Add Reaction to Message

<a id="opIdmessage_react_react_message"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/messages/string/reactions/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`PUT /channels/{target}/messages/{msg}/reactions/{emoji}`

React to a given message.

<h3 id="add-reaction-to-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|msg|path|[Id](#schemaid)|true|none|
|emoji|path|[Id](#schemaid)|true|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="add-reaction-to-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Remove Reaction(s) to Message

<a id="opIdmessage_unreact_unreact_message"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/messages/string/reactions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`DELETE /channels/{target}/messages/{msg}/reactions/{emoji}`

Remove your own, someone else's or all of a given reaction.

Requires `ManageMessages` if changing others' reactions.

<h3 id="remove-reactions-to-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|msg|path|[Id](#schemaid)|true|none|
|emoji|path|[Id](#schemaid)|true|none|
|user_id|query|string \| null|false|Remove a specific user's reaction|
|remove_all|query|boolean \| null|false|Remove all reactions|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="remove-reactions-to-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Remove All Reactions from Message

<a id="opIdmessage_clear_reactions_clear_reactions"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/messages/string/reactions \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`DELETE /channels/{target}/messages/{msg}/reactions`

Remove your own, someone else's or all of a given reaction.

Requires `ManageMessages` permission.

<h3 id="remove-all-reactions-from-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|msg|path|[Id](#schemaid)|true|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="remove-all-reactions-from-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-webhooks">Webhooks</h1>

## Gets all webhooks

<a id="opIdwebhook_fetch_all_fetch_webhooks"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/webhooks \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /channels/{channel_id}/webhooks`

Gets all webhooks inside the channel

<h3 id="gets-all-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "creator_id": "string",
    "channel_id": "string",
    "permissions": 0,
    "token": "string"
  }
]
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="gets-all-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default|An error occurred.|[Error](#schemaerror)|

<h3 id="gets-all-webhooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Webhook](#schemawebhook)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Creates a webhook

<a id="opIdwebhook_create_create_webhook"></a>

> Code samples

```bash
curl https://api.stoat.chat/channels/string/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "name": "string",
    "avatar": "string"
  }'
```

`POST /channels/{channel_id}/webhooks`

Creates a webhook which 3rd party platforms can use to send messages

> Body parameter

```json
{
  "name": "string",
  "avatar": "string"
}
```

<h3 id="creates-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|
|body|body|[CreateWebhookBody](#schemacreatewebhookbody)|true|none|
|» name|body|string|true|none|
|» avatar|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "creator_id": "string",
  "channel_id": "string",
  "permissions": 0,
  "token": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="creates-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Webhook](#schemawebhook)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Deletes a webhook message

<a id="opIdwebhook_delete_message_webhook_delete_message"></a>

> Code samples

```bash
curl https://api.stoat.chat/webhooks/string/string/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /webhooks/{webhook_id}/{token}/{message_id}`

Deletes a message sent by a webhook

<h3 id="deletes-a-webhook-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|[Id](#schemaid)|true|none|
|token|path|string|true|none|
|message_id|path|[Id](#schemaid)|true|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="deletes-a-webhook-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Edits a webhook message

<a id="opIdwebhook_edit_message_webhook_edit_message"></a>

> Code samples

```bash
curl https://api.stoat.chat/webhooks/string/string/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "content": "string",
    "embeds": [
      {
        "icon_url": "string",
        "url": "string",
        "title": "string",
        "description": "string",
        "media": "string",
        "colour": "string"
      }
    ]
  }'
```

`PATCH /webhooks/{webhook_id}/{token}/{message_id}`

Edits a message sent by a webhook

> Body parameter

```json
{
  "content": "string",
  "embeds": [
    {
      "icon_url": "string",
      "url": "string",
      "title": "string",
      "description": "string",
      "media": "string",
      "colour": "string"
    }
  ]
}
```

<h3 id="edits-a-webhook-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|[Id](#schemaid)|true|none|
|token|path|string|true|none|
|message_id|path|[Id](#schemaid)|true|none|
|body|body|[DataEditMessage](#schemadataeditmessage)|true|none|
|» content|body|string \| null|false|New message content|
|» embeds|body|[[SendableEmbed](#schemasendableembed)]|false|Embeds to include in the message|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "nonce": "string",
  "channel": "string",
  "author": "string",
  "user": {
    "_id": "string",
    "username": "string",
    "discriminator": "string",
    "display_name": "string",
    "pronouns": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "relations": [
      {
        "_id": "string",
        "status": {}
      }
    ],
    "badges": 0,
    "status": {
      "text": "string",
      "presence": {}
    },
    "flags": 0,
    "privileged": true,
    "bot": {
      "owner": "string"
    },
    "relationship": {},
    "online": true
  },
  "member": {
    "_id": {
      "server": "string",
      "user": "string"
    },
    "joined_at": {},
    "nickname": "string",
    "pronouns": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "roles": [
      "string"
    ],
    "timeout": {},
    "can_publish": true,
    "can_receive": true
  },
  "webhook": {
    "name": "string",
    "avatar": "string"
  },
  "content": "string",
  "system": {
    "type": "text",
    "content": "string"
  },
  "attachments": [
    {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    }
  ],
  "edited": {},
  "embeds": [
    {
      "type": "Website",
      "url": "string",
      "original_url": "string",
      "special": {
        "type": "None"
      },
      "title": "string",
      "description": "string",
      "image": {
        "url": "string",
        "width": 0,
        "height": 0,
        "size": {}
      },
      "video": {
        "url": "string",
        "width": 0,
        "height": 0
      },
      "site_name": "string",
      "icon_url": "string",
      "colour": "string"
    }
  ],
  "mentions": [
    "string"
  ],
  "role_mentions": [
    "string"
  ],
  "replies": [
    "string"
  ],
  "reactions": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "interactions": {
    "reactions": [
      "string"
    ],
    "restrict_reactions": true
  },
  "masquerade": {
    "name": "string",
    "avatar": "string",
    "colour": "string"
  },
  "pinned": true,
  "flags": 0
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="edits-a-webhook-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Message](#schemamessage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a webhook

<a id="opIdwebhook_fetch_token_webhook_fetch_token"></a>

> Code samples

```bash
curl https://api.stoat.chat/webhooks/string/string \
  -H 'Accept: application/json'
```

`GET /webhooks/{webhook_id}/{token}`

Gets a webhook with a token

<h3 id="gets-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|[Id](#schemaid)|true|none|
|token|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "creator_id": "string",
  "channel_id": "string",
  "permissions": 0,
  "token": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="gets-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Webhook](#schemawebhook)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Executes a webhook

<a id="opIdwebhook_execute_webhook_execute"></a>

> Code samples

```bash
curl https://api.stoat.chat/webhooks/string/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "nonce": "string",
    "content": "string",
    "attachments": [
      "string"
    ],
    "replies": [
      {
        "id": "string",
        "mention": true,
        "fail_if_not_exists": true
      }
    ],
    "embeds": [
      {
        "icon_url": "string",
        "url": "string",
        "title": "string",
        "description": "string",
        "media": "string",
        "colour": "string"
      }
    ],
    "masquerade": {
      "name": "string",
      "avatar": "string",
      "colour": "string"
    },
    "interactions": {
      "reactions": [
        "string"
      ],
      "restrict_reactions": true
    },
    "flags": 0
  }'
```

`POST /webhooks/{webhook_id}/{token}`

Executes a webhook and sends a message

> Body parameter

```json
{
  "nonce": "string",
  "content": "string",
  "attachments": [
    "string"
  ],
  "replies": [
    {
      "id": "string",
      "mention": true,
      "fail_if_not_exists": true
    }
  ],
  "embeds": [
    {
      "icon_url": "string",
      "url": "string",
      "title": "string",
      "description": "string",
      "media": "string",
      "colour": "string"
    }
  ],
  "masquerade": {
    "name": "string",
    "avatar": "string",
    "colour": "string"
  },
  "interactions": {
    "reactions": [
      "string"
    ],
    "restrict_reactions": true
  },
  "flags": 0
}
```

<h3 id="executes-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|[Id](#schemaid)|true|none|
|token|path|string|true|none|
|Idempotency-Key|header|string|false|Unique key to prevent duplicate requests|
|body|body|[DataMessageSend](#schemadatamessagesend)|true|none|
|» nonce|body|string \| null|false|Unique token to prevent duplicate message sending<br><br>**This is deprecated and replaced by `Idempotency-Key`!**|
|» content|body|string \| null|false|Message content to send|
|» attachments|body|[string]|false|Attachments to include in message|
|» replies|body|[[ReplyIntent](#schemareplyintent)]|false|Messages to reply to|
|» embeds|body|[[SendableEmbed](#schemasendableembed)]|false|Embeds to include in message<br><br>Text embed content contributes to the content length cap|
|» masquerade|body|object \| null|false|Masquerade to apply to this message|
|» » name|body|string \| null|false|Replace the display name shown on this message|
|» » avatar|body|string \| null|false|Replace the avatar shown on this message (URL to image file)|
|» » colour|body|string \| null|false|Replace the display role colour shown on this message<br><br>Must have `ManageRole` permission to use|
|» interactions|body|object \| null|false|Information about how this message should be interacted with|
|» » reactions|body|[string]|false|Reactions which should always appear and be distinct|
|» » restrict_reactions|body|boolean|false|Whether reactions should be restricted to the given list<br><br>Can only be set to true if reactions list is of at least length 1|
|» flags|body|integer(uint32) \| null|false|Bitfield of message flags<br><br>https://docs.rs/revolt-models/latest/revolt_models/v0/enum.MessageFlags.html|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "nonce": "string",
  "channel": "string",
  "author": "string",
  "user": {
    "_id": "string",
    "username": "string",
    "discriminator": "string",
    "display_name": "string",
    "pronouns": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "relations": [
      {
        "_id": "string",
        "status": {}
      }
    ],
    "badges": 0,
    "status": {
      "text": "string",
      "presence": {}
    },
    "flags": 0,
    "privileged": true,
    "bot": {
      "owner": "string"
    },
    "relationship": {},
    "online": true
  },
  "member": {
    "_id": {
      "server": "string",
      "user": "string"
    },
    "joined_at": {},
    "nickname": "string",
    "pronouns": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "roles": [
      "string"
    ],
    "timeout": {},
    "can_publish": true,
    "can_receive": true
  },
  "webhook": {
    "name": "string",
    "avatar": "string"
  },
  "content": "string",
  "system": {
    "type": "text",
    "content": "string"
  },
  "attachments": [
    {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    }
  ],
  "edited": {},
  "embeds": [
    {
      "type": "Website",
      "url": "string",
      "original_url": "string",
      "special": {
        "type": "None"
      },
      "title": "string",
      "description": "string",
      "image": {
        "url": "string",
        "width": 0,
        "height": 0,
        "size": {}
      },
      "video": {
        "url": "string",
        "width": 0,
        "height": 0
      },
      "site_name": "string",
      "icon_url": "string",
      "colour": "string"
    }
  ],
  "mentions": [
    "string"
  ],
  "role_mentions": [
    "string"
  ],
  "replies": [
    "string"
  ],
  "reactions": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "interactions": {
    "reactions": [
      "string"
    ],
    "restrict_reactions": true
  },
  "masquerade": {
    "name": "string",
    "avatar": "string",
    "colour": "string"
  },
  "pinned": true,
  "flags": 0
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="executes-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Message](#schemamessage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes a webhook

<a id="opIdwebhook_delete_token_webhook_delete_token"></a>

> Code samples

```bash
curl https://api.stoat.chat/webhooks/string/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /webhooks/{webhook_id}/{token}`

Deletes a webhook with a token

<h3 id="deletes-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|[Id](#schemaid)|true|none|
|token|path|string|true|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="deletes-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Edits a webhook

<a id="opIdwebhook_edit_token_webhook_edit_token"></a>

> Code samples

```bash
curl https://api.stoat.chat/webhooks/string/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "avatar": "string",
    "permissions": 0,
    "remove": []
  }'
```

`PATCH /webhooks/{webhook_id}/{token}`

Edits a webhook with a token

> Body parameter

```json
{
  "name": "string",
  "avatar": "string",
  "permissions": 0,
  "remove": []
}
```

<h3 id="edits-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|[Id](#schemaid)|true|none|
|token|path|string|true|none|
|body|body|[DataEditWebhook](#schemadataeditwebhook)|true|none|
|» name|body|string \| null|false|Webhook name|
|» avatar|body|string \| null|false|Avatar ID|
|» permissions|body|integer(uint64) \| null|false|Webhook permissions|
|» remove|body|[[FieldsWebhook](#schemafieldswebhook)]|false|Fields to remove from webhook|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» remove|Avatar|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "creator_id": "string",
  "channel_id": "string",
  "permissions": 0,
  "token": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="edits-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Webhook](#schemawebhook)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a webhook

<a id="opIdwebhook_fetch_webhook_fetch"></a>

> Code samples

```bash
curl https://api.stoat.chat/webhooks/string \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /webhooks/{webhook_id}`

Gets a webhook

<h3 id="gets-a-webhook-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "avatar": "string",
  "channel_id": "string",
  "permissions": 0
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="gets-a-webhook-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ResponseWebhook](#schemaresponsewebhook)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Deletes a webhook

<a id="opIdwebhook_delete_webhook_delete"></a>

> Code samples

```bash
curl https://api.stoat.chat/webhooks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`DELETE /webhooks/{webhook_id}`

Deletes a webhook

<h3 id="deletes-a-webhook-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="deletes-a-webhook-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Edits a webhook

<a id="opIdwebhook_edit_webhook_edit"></a>

> Code samples

```bash
curl https://api.stoat.chat/webhooks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "name": "string",
    "avatar": "string",
    "permissions": 0,
    "remove": []
  }'
```

`PATCH /webhooks/{webhook_id}`

Edits a webhook

> Body parameter

```json
{
  "name": "string",
  "avatar": "string",
  "permissions": 0,
  "remove": []
}
```

<h3 id="edits-a-webhook-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|[Id](#schemaid)|true|none|
|body|body|[DataEditWebhook](#schemadataeditwebhook)|true|none|
|» name|body|string \| null|false|Webhook name|
|» avatar|body|string \| null|false|Avatar ID|
|» permissions|body|integer(uint64) \| null|false|Webhook permissions|
|» remove|body|[[FieldsWebhook](#schemafieldswebhook)]|false|Fields to remove from webhook|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» remove|Avatar|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "creator_id": "string",
  "channel_id": "string",
  "permissions": 0,
  "token": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="edits-a-webhook-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Webhook](#schemawebhook)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Executes a webhook specific to github

<a id="opIdwebhook_execute_github_webhook_execute_github"></a>

> Code samples

```bash
curl https://api.stoat.chat/webhooks/string/string/github \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H 'X-Github-Event: ' \
  -d 'string'
```

`POST /webhooks/{webhook_id}/{token}/github`

Executes a webhook specific to github and sends a message containing the relevant info about the event

> Body parameter

```text
string
```

<h3 id="executes-a-webhook-specific-to-github-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|[Id](#schemaid)|true|none|
|token|path|string|true|none|
|X-Github-Event|header|object|true|The name of the github event|
|body|body|string|true|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="executes-a-webhook-specific-to-github-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stoat-api-server-information">Server Information</h1>

## Create Server

<a id="opIdserver_create_create_server"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "nsfw": true
  }'
```

`POST /servers/create`

Create a new server.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "nsfw": true
}
```

<h3 id="create-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DataCreateServer](#schemadatacreateserver)|true|none|
|» name|body|string|true|Server name|
|» description|body|string \| null|false|Server description|
|» nsfw|body|boolean \| null|false|Whether this server is age-restricted|

> Example responses

> 200 Response

```json
{
  "server": {
    "_id": "string",
    "owner": "string",
    "name": "string",
    "description": "string",
    "channels": [
      "string"
    ],
    "categories": [
      {
        "id": "string",
        "title": "string",
        "channels": [
          "string"
        ]
      }
    ],
    "system_messages": {
      "user_joined": "string",
      "user_left": "string",
      "user_kicked": "string",
      "user_banned": "string"
    },
    "roles": {
      "property1": {
        "_id": "string",
        "name": "string",
        "permissions": {
          "a": 0,
          "d": 0
        },
        "colour": "string",
        "hoist": true,
        "rank": 0,
        "icon": {
          "_id": "string",
          "tag": "string",
          "filename": "string",
          "metadata": {
            "type": "File"
          },
          "content_type": "string",
          "size": 0,
          "deleted": true,
          "reported": true,
          "message_id": "string",
          "user_id": "string",
          "server_id": "string",
          "object_id": "string"
        },
        "owner": "string"
      },
      "property2": {
        "_id": "string",
        "name": "string",
        "permissions": {
          "a": 0,
          "d": 0
        },
        "colour": "string",
        "hoist": true,
        "rank": 0,
        "icon": {
          "_id": "string",
          "tag": "string",
          "filename": "string",
          "metadata": {
            "type": "File"
          },
          "content_type": "string",
          "size": 0,
          "deleted": true,
          "reported": true,
          "message_id": "string",
          "user_id": "string",
          "server_id": "string",
          "object_id": "string"
        },
        "owner": "string"
      }
    },
    "default_permissions": 0,
    "icon": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "banner": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "flags": 0,
    "nsfw": true,
    "analytics": true,
    "discoverable": true,
    "approximate_member_count": 0
  },
  "channels": [
    {
      "channel_type": "SavedMessages",
      "_id": "string",
      "user": "string"
    }
  ]
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="create-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CreateServerLegacyResponse](#schemacreateserverlegacyresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Fetch Server

<a id="opIdserver_fetch_fetch"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /servers/{target}`

Fetch a server by its id.

<h3 id="fetch-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|include_channels|query|boolean \| null|false|Whether to include channels|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "owner": "string",
  "name": "string",
  "description": "string",
  "channels": [
    "string"
  ],
  "categories": [
    {
      "id": "string",
      "title": "string",
      "channels": [
        "string"
      ]
    }
  ],
  "system_messages": {
    "user_joined": "string",
    "user_left": "string",
    "user_kicked": "string",
    "user_banned": "string"
  },
  "roles": {
    "property1": {
      "_id": "string",
      "name": "string",
      "permissions": {
        "a": 0,
        "d": 0
      },
      "colour": "string",
      "hoist": true,
      "rank": 0,
      "icon": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "owner": "string"
    },
    "property2": {
      "_id": "string",
      "name": "string",
      "permissions": {
        "a": 0,
        "d": 0
      },
      "colour": "string",
      "hoist": true,
      "rank": 0,
      "icon": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "owner": "string"
    }
  },
  "default_permissions": 0,
  "icon": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "banner": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "flags": 0,
  "nsfw": true,
  "analytics": true,
  "discoverable": true,
  "approximate_member_count": 0
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[FetchServerResponse](#schemafetchserverresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Delete / Leave Server

<a id="opIdserver_delete_delete"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`DELETE /servers/{target}`

Deletes a server if owner otherwise leaves.

<h3 id="delete-leave-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|leave_silently|query|boolean \| null|false|Whether to not send a leave message|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="delete-leave-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token, Session Token, Valid MFA Ticket
</aside>

## Edit Server

<a id="opIdserver_edit_edit"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "icon": "string",
    "banner": "string",
    "categories": [
      {
        "id": "string",
        "title": "string",
        "channels": [
          "string"
        ]
      }
    ],
    "system_messages": {
      "user_joined": "string",
      "user_left": "string",
      "user_kicked": "string",
      "user_banned": "string"
    },
    "flags": 0,
    "discoverable": true,
    "analytics": true,
    "owner": "string",
    "remove": []
  }'
```

`PATCH /servers/{target}`

Edit a server by its id.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "icon": "string",
  "banner": "string",
  "categories": [
    {
      "id": "string",
      "title": "string",
      "channels": [
        "string"
      ]
    }
  ],
  "system_messages": {
    "user_joined": "string",
    "user_left": "string",
    "user_kicked": "string",
    "user_banned": "string"
  },
  "flags": 0,
  "discoverable": true,
  "analytics": true,
  "owner": "string",
  "remove": []
}
```

<h3 id="edit-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|
|body|body|[DataEditServer](#schemadataeditserver)|true|none|
|» name|body|string \| null|false|Server name|
|» description|body|string \| null|false|Server description|
|» icon|body|string \| null|false|Attachment Id for icon|
|» banner|body|string \| null|false|Attachment Id for banner|
|» categories|body|[[Category](#schemacategory)]|false|Category structure for server|
|» system_messages|body|object \| null|false|System message configuration|
|» » user_joined|body|string \| null|false|ID of channel to send user join messages in|
|» » user_left|body|string \| null|false|ID of channel to send user left messages in|
|» » user_kicked|body|string \| null|false|ID of channel to send user kicked messages in|
|» » user_banned|body|string \| null|false|ID of channel to send user banned messages in|
|» flags|body|integer(int32) \| null|false|Bitfield of server flags|
|» discoverable|body|boolean \| null|false|Whether this server is public and should show up on [Revolt Discover](https://rvlt.gg)|
|» analytics|body|boolean \| null|false|Whether analytics should be collected for this server<br><br>Must be enabled in order to show up on [Revolt Discover](https://rvlt.gg).|
|» owner|body|string \| null|false|User id of the new owner|
|» remove|body|[[FieldsServer](#schemafieldsserver)]|false|Fields to remove from server object|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» remove|Description|
|» remove|Categories|
|» remove|SystemMessages|
|» remove|Icon|
|» remove|Banner|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "owner": "string",
  "name": "string",
  "description": "string",
  "channels": [
    "string"
  ],
  "categories": [
    {
      "id": "string",
      "title": "string",
      "channels": [
        "string"
      ]
    }
  ],
  "system_messages": {
    "user_joined": "string",
    "user_left": "string",
    "user_kicked": "string",
    "user_banned": "string"
  },
  "roles": {
    "property1": {
      "_id": "string",
      "name": "string",
      "permissions": {
        "a": 0,
        "d": 0
      },
      "colour": "string",
      "hoist": true,
      "rank": 0,
      "icon": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "owner": "string"
    },
    "property2": {
      "_id": "string",
      "name": "string",
      "permissions": {
        "a": 0,
        "d": 0
      },
      "colour": "string",
      "hoist": true,
      "rank": 0,
      "icon": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "owner": "string"
    }
  },
  "default_permissions": 0,
  "icon": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "banner": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "flags": 0,
  "nsfw": true,
  "analytics": true,
  "discoverable": true,
  "approximate_member_count": 0
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="edit-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Server](#schemaserver)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token, Valid MFA Ticket
</aside>

## Mark Server As Read

<a id="opIdserver_ack_ack"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/ack \
  -X PUT \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`PUT /servers/{target}/ack`

Mark all channels in a server as read.

<h3 id="mark-server-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="mark-server-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Create Channel

<a id="opIdchannel_create_create_server_channel"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/channels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "type": "Text",
    "name": "string",
    "description": "string",
    "nsfw": true,
    "voice": {
      "max_users": 1
    }
  }'
```

`POST /servers/{server}/channels`

Create a new Text or Voice channel.

> Body parameter

```json
{
  "type": "Text",
  "name": "string",
  "description": "string",
  "nsfw": true,
  "voice": {
    "max_users": 1
  }
}
```

<h3 id="create-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|server|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|
|body|body|[DataCreateServerChannel](#schemadatacreateserverchannel)|true|none|
|» type|body|object|false|Channel type|
|» » *oneOf*|body|string|false|Text Channel|
|» » *oneOf*|body|string|false|Voice Channel|
|» name|body|string|true|Channel name|
|» description|body|string \| null|false|Channel description|
|» nsfw|body|boolean \| null|false|Whether this channel is age restricted|
|» voice|body|object \| null|false|Voice Information for when this channel is also a voice channel|
|» » max_users|body|integer(uint) \| null|false|Maximium amount of users allowed in the voice channel at once|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *oneOf*|Text|
|» » *oneOf*|Voice|

> Example responses

> 200 Response

```json
{
  "channel_type": "SavedMessages",
  "_id": "string",
  "user": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="create-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Channel](#schemachannel)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-server-members">Server Members</h1>

## Fetch Members

<a id="opIdmember_fetch_all_fetch_all"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/members \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /servers/{target}/members`

Fetch all server members.

<h3 id="fetch-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|exclude_offline|query|boolean \| null|false|Whether to exclude offline users|

> Example responses

> 200 Response

```json
{
  "members": [
    {
      "_id": {
        "server": "string",
        "user": "string"
      },
      "joined_at": {},
      "nickname": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "roles": [
        "string"
      ],
      "timeout": {},
      "can_publish": true,
      "can_receive": true
    }
  ],
  "users": [
    {
      "_id": "string",
      "username": "string",
      "discriminator": "string",
      "display_name": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "relations": [
        {
          "_id": "string",
          "status": {}
        }
      ],
      "badges": 0,
      "status": {
        "text": "string",
        "presence": {}
      },
      "flags": 0,
      "privileged": true,
      "bot": {
        "owner": "string"
      },
      "relationship": {},
      "online": true
    }
  ]
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AllMemberResponse](#schemaallmemberresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Fetch Member

<a id="opIdmember_fetch_fetch"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/members/string \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /servers/{server_id}/members/{member_id}`

Retrieve a member.

<h3 id="fetch-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|server_id|path|[Id](#schemaid)|true|none|
|member_id|path|[Id](#schemaid)|true|none|
|roles|query|boolean \| null|false|none|

> Example responses

> 200 Response

```json
{
  "_id": {
    "server": "string",
    "user": "string"
  },
  "joined_at": {},
  "nickname": "string",
  "pronouns": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "roles": [
    "string"
  ],
  "timeout": {},
  "can_publish": true,
  "can_receive": true
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MemberResponse](#schemamemberresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Kick Member

<a id="opIdmember_remove_kick"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/members/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`DELETE /servers/{server_id}/members/{member_id}`

Removes a member from the server.

<h3 id="kick-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|server_id|path|[Id](#schemaid)|true|none|
|member_id|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="kick-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Edit Member

<a id="opIdmember_edit_edit"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/members/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "nickname": "string",
    "pronouns": "string",
    "avatar": "string",
    "roles": [
      "string"
    ],
    "timeout": {},
    "can_publish": true,
    "can_receive": true,
    "voice_channel": "string",
    "remove": []
  }'
```

`PATCH /servers/{server_id}/members/{member_id}`

Edit a member by their id.

> Body parameter

```json
{
  "nickname": "string",
  "pronouns": "string",
  "avatar": "string",
  "roles": [
    "string"
  ],
  "timeout": {},
  "can_publish": true,
  "can_receive": true,
  "voice_channel": "string",
  "remove": []
}
```

<h3 id="edit-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|server_id|path|[Id](#schemaid)|true|none|
|member_id|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|
|body|body|[DataMemberEdit](#schemadatamemberedit)|true|none|
|» nickname|body|string \| null|false|Member nickname|
|» pronouns|body|string \| null|false|Member pronouns|
|» avatar|body|string \| null|false|Attachment Id to set for avatar|
|» roles|body|[string]|false|Array of role ids|
|» timeout|body|object \| null|false|Timestamp this member is timed out until|
|» can_publish|body|boolean \| null|false|server-wide voice muted|
|» can_receive|body|boolean \| null|false|server-wide voice deafened|
|» voice_channel|body|string \| null|false|voice channel to move to if already in a voice channel|
|» remove|body|[[FieldsMember](#schemafieldsmember)]|false|Fields to remove from channel object|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» remove|Nickname|
|» remove|Pronouns|
|» remove|Avatar|
|» remove|Roles|
|» remove|Timeout|
|» remove|CanReceive|
|» remove|CanPublish|
|» remove|JoinedAt|
|» remove|VoiceChannel|

> Example responses

> 200 Response

```json
{
  "_id": {
    "server": "string",
    "user": "string"
  },
  "joined_at": {},
  "nickname": "string",
  "pronouns": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "roles": [
    "string"
  ],
  "timeout": {},
  "can_publish": true,
  "can_receive": true
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="edit-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Member](#schemamember)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Query members by name

<a id="opIdmember_experimental_query_member_experimental_query"></a>

> Code samples

```bash
curl 'https://api.stoat.chat/servers/string/members_experimental_query?query=string&experimental_api=true' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /servers/{target}/members_experimental_query`

Query members by a given name, this API is not stable and will be removed in the future.

<h3 id="query-members-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|query|query|string|true|String to search for|
|experimental_api|query|boolean|true|Discourage use of this API|

> Example responses

> 200 Response

```json
{
  "members": [
    {
      "_id": {
        "server": "string",
        "user": "string"
      },
      "joined_at": {},
      "nickname": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "roles": [
        "string"
      ],
      "timeout": {},
      "can_publish": true,
      "can_receive": true
    }
  ],
  "users": [
    {
      "_id": "string",
      "username": "string",
      "discriminator": "string",
      "display_name": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "relations": [
        {
          "_id": "string",
          "status": {}
        }
      ],
      "badges": 0,
      "status": {
        "text": "string",
        "presence": {}
      },
      "flags": 0,
      "privileged": true,
      "bot": {
        "owner": "string"
      },
      "relationship": {},
      "online": true
    }
  ]
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="query-members-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MemberQueryResponse](#schemamemberqueryresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Ban User

<a id="opIdban_create_ban"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/bans/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "reason": "string",
    "delete_message_seconds": 0
  }'
```

`PUT /servers/{server}/bans/{target}`

Ban a user by their id.

> Body parameter

```json
{
  "reason": "string",
  "delete_message_seconds": 0
}
```

<h3 id="ban-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|server|path|[Id](#schemaid)|true|none|
|target|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|
|body|body|[DataBanCreate](#schemadatabancreate)|true|none|
|» reason|body|string \| null|false|Ban reason|
|» delete_message_seconds|body|integer(int64) \| null|false|Messages to delete in seconds|

> Example responses

> 200 Response

```json
{
  "_id": {
    "server": "string",
    "user": "string"
  },
  "reason": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="ban-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ServerBan](#schemaserverban)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Unban user

<a id="opIdban_remove_unban"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/bans/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`DELETE /servers/{server}/bans/{target}`

Remove a user's ban.

<h3 id="unban-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|server|path|[Id](#schemaid)|true|none|
|target|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="unban-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Fetch Bans

<a id="opIdban_list_list"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/bans \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /servers/{target}/bans`

Fetch all bans on a server.

<h3 id="fetch-bans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "_id": "string",
      "username": "string",
      "discriminator": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      }
    }
  ],
  "bans": [
    {
      "_id": {
        "server": "string",
        "user": "string"
      },
      "reason": "string"
    }
  ]
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-bans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BanListResult](#schemabanlistresult)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Fetch Invites

<a id="opIdinvites_fetch_invites"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/invites \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /servers/{target}/invites`

Fetch all server invites.

<h3 id="fetch-invites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "type": "Server",
    "_id": "string",
    "server": "string",
    "creator": "string",
    "channel": "string",
    "max_uses": 0,
    "uses": 0,
    "expires": {}
  }
]
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-invites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default|An error occurred.|[Error](#schemaerror)|

<h3 id="fetch-invites-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Invite](#schemainvite)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-server-permissions">Server Permissions</h1>

## Create Role

<a id="opIdroles_create_create"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/roles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "name": "string",
    "rank": 0
  }'
```

`POST /servers/{target}/roles`

Creates a new server role.

> Body parameter

```json
{
  "name": "string",
  "rank": 0
}
```

<h3 id="create-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|
|body|body|[DataCreateRole](#schemadatacreaterole)|true|none|
|» name|body|string|true|Role name|
|» rank|body|integer(int64) \| null|false|Ranking position<br><br>Smaller values take priority.<br><br>**Removed** - no effect, use the edit server role positions route|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "role": {
    "_id": "string",
    "name": "string",
    "permissions": {
      "a": 0,
      "d": 0
    },
    "colour": "string",
    "hoist": true,
    "rank": 0,
    "icon": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "owner": "string"
  }
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="create-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[NewRoleResponse](#schemanewroleresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Fetch Role

<a id="opIdroles_fetch_fetch"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/roles/string \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /servers/{target}/roles/{role_id}`

Fetch a role by its id.

<h3 id="fetch-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|role_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "name": "string",
  "permissions": {
    "a": 0,
    "d": 0
  },
  "colour": "string",
  "hoist": true,
  "rank": 0,
  "icon": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "owner": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Role](#schemarole)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Delete Role

<a id="opIdroles_delete_delete"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/roles/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`DELETE /servers/{target}/roles/{role_id}`

Delete a server role by its id.

<h3 id="delete-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|role_id|path|string|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="delete-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Edit Role

<a id="opIdroles_edit_edit"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/roles/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "name": "string",
    "colour": "string",
    "hoist": true,
    "rank": 0,
    "icon": "string",
    "remove": []
  }'
```

`PATCH /servers/{target}/roles/{role_id}`

Edit a role by its id.

> Body parameter

```json
{
  "name": "string",
  "colour": "string",
  "hoist": true,
  "rank": 0,
  "icon": "string",
  "remove": []
}
```

<h3 id="edit-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|role_id|path|string|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|
|body|body|[DataEditRole](#schemadataeditrole)|true|none|
|» name|body|string \| null|false|Role name|
|» colour|body|string \| null|false|Role colour|
|» hoist|body|boolean \| null|false|Whether this role should be displayed separately|
|» rank|body|integer(int64) \| null|false|Ranking position<br><br>**Removed** - no effect, use the edit server role positions route|
|» icon|body|string \| null|false|Role icon<br><br>Provide an Autumn attachment Id.|
|» remove|body|[[FieldsRole](#schemafieldsrole)]|false|Fields to remove from role object|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» remove|Colour|
|» remove|Icon|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "name": "string",
  "permissions": {
    "a": 0,
    "d": 0
  },
  "colour": "string",
  "hoist": true,
  "rank": 0,
  "icon": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "owner": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="edit-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Role](#schemarole)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Set Role Permission

<a id="opIdpermissions_set_set_role_permission"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/permissions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "permissions": {
      "allow": 0,
      "deny": 0
    }
  }'
```

`PUT /servers/{target}/permissions/{role_id}`

Sets permissions for the specified role in the server.

> Body parameter

```json
{
  "permissions": {
    "allow": 0,
    "deny": 0
  }
}
```

<h3 id="set-role-permission-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|role_id|path|string|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|
|body|body|[DataSetServerRolePermission](#schemadatasetserverrolepermission)|true|none|
|» permissions|body|object|true|Allow / deny values for the role in this server.|
|» » allow|body|integer(uint64)|true|Allow bit flags|
|» » deny|body|integer(uint64)|true|Disallow bit flags|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "owner": "string",
  "name": "string",
  "description": "string",
  "channels": [
    "string"
  ],
  "categories": [
    {
      "id": "string",
      "title": "string",
      "channels": [
        "string"
      ]
    }
  ],
  "system_messages": {
    "user_joined": "string",
    "user_left": "string",
    "user_kicked": "string",
    "user_banned": "string"
  },
  "roles": {
    "property1": {
      "_id": "string",
      "name": "string",
      "permissions": {
        "a": 0,
        "d": 0
      },
      "colour": "string",
      "hoist": true,
      "rank": 0,
      "icon": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "owner": "string"
    },
    "property2": {
      "_id": "string",
      "name": "string",
      "permissions": {
        "a": 0,
        "d": 0
      },
      "colour": "string",
      "hoist": true,
      "rank": 0,
      "icon": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "owner": "string"
    }
  },
  "default_permissions": 0,
  "icon": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "banner": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "flags": 0,
  "nsfw": true,
  "analytics": true,
  "discoverable": true,
  "approximate_member_count": 0
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="set-role-permission-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Server](#schemaserver)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Set Default Permission

<a id="opIdpermissions_set_default_set_default_server_permissions"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/permissions/default \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "permissions": 0
  }'
```

`PUT /servers/{target}/permissions/default`

Sets permissions for the default role in this server.

> Body parameter

```json
{
  "permissions": 0
}
```

<h3 id="set-default-permission-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|
|body|body|[DataPermissionsValue](#schemadatapermissionsvalue)|true|none|
|» permissions|body|integer(uint64)|true|none|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "owner": "string",
  "name": "string",
  "description": "string",
  "channels": [
    "string"
  ],
  "categories": [
    {
      "id": "string",
      "title": "string",
      "channels": [
        "string"
      ]
    }
  ],
  "system_messages": {
    "user_joined": "string",
    "user_left": "string",
    "user_kicked": "string",
    "user_banned": "string"
  },
  "roles": {
    "property1": {
      "_id": "string",
      "name": "string",
      "permissions": {
        "a": 0,
        "d": 0
      },
      "colour": "string",
      "hoist": true,
      "rank": 0,
      "icon": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "owner": "string"
    },
    "property2": {
      "_id": "string",
      "name": "string",
      "permissions": {
        "a": 0,
        "d": 0
      },
      "colour": "string",
      "hoist": true,
      "rank": 0,
      "icon": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "owner": "string"
    }
  },
  "default_permissions": 0,
  "icon": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "banner": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "flags": 0,
  "nsfw": true,
  "analytics": true,
  "discoverable": true,
  "approximate_member_count": 0
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="set-default-permission-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Server](#schemaserver)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Edits server roles ranks

<a id="opIdroles_edit_positions_edit_role_ranks"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/roles/ranks \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "ranks": [
      "string"
    ]
  }'
```

`PATCH /servers/{target}/roles/ranks`

Edit's server role's ranks.

> Body parameter

```json
{
  "ranks": [
    "string"
  ]
}
```

<h3 id="edits-server-roles-ranks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|
|body|body|[DataEditRoleRanks](#schemadataeditroleranks)|true|none|
|» ranks|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "owner": "string",
  "name": "string",
  "description": "string",
  "channels": [
    "string"
  ],
  "categories": [
    {
      "id": "string",
      "title": "string",
      "channels": [
        "string"
      ]
    }
  ],
  "system_messages": {
    "user_joined": "string",
    "user_left": "string",
    "user_kicked": "string",
    "user_banned": "string"
  },
  "roles": {
    "property1": {
      "_id": "string",
      "name": "string",
      "permissions": {
        "a": 0,
        "d": 0
      },
      "colour": "string",
      "hoist": true,
      "rank": 0,
      "icon": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "owner": "string"
    },
    "property2": {
      "_id": "string",
      "name": "string",
      "permissions": {
        "a": 0,
        "d": 0
      },
      "colour": "string",
      "hoist": true,
      "rank": 0,
      "icon": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "owner": "string"
    }
  },
  "default_permissions": 0,
  "icon": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "banner": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "flags": 0,
  "nsfw": true,
  "analytics": true,
  "discoverable": true,
  "approximate_member_count": 0
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="edits-server-roles-ranks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Server](#schemaserver)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-server-customisation">Server Customisation</h1>

## Fetch Server Emoji

<a id="opIdemoji_list_list_emoji"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/emojis \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /servers/{target}/emojis`

Fetch all emoji on a server.

<h3 id="fetch-server-emoji-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "_id": "string",
    "parent": {
      "type": "Server",
      "id": "string"
    },
    "creator_id": "string",
    "name": "string",
    "animated": true,
    "nsfw": true
  }
]
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-server-emoji-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default|An error occurred.|[Error](#schemaerror)|

<h3 id="fetch-server-emoji-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Emoji](#schemaemoji)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-audit-logs">Audit Logs</h1>

## Audit Log Query

<a id="opIdaudit_log_query_query"></a>

> Code samples

```bash
curl https://api.stoat.chat/servers/string/audit_logs \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /servers/{target}/audit_logs`

Queries a server's audit logs.

<h3 id="audit-log-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|user|query|string \| null|false|Filter by who ran the action|
|target|query|string \| null|false|Filter by who the action is targetting|
|type|query|[string]|false|Filter by the action type|
|before|query|string \| null|false|Entries before a certain entry id|
|after|query|string \| null|false|Entries after a certain entry id|
|limit|query|integer(int64) \| null|false|Maximum number of entries to fetch|

> Example responses

> 200 Response

```json
{
  "audit_logs": [
    {
      "_id": "string",
      "server": "string",
      "reason": "string",
      "user": "string",
      "target": "string",
      "action": {
        "type": "MessageDelete",
        "author": "string",
        "channel": "string"
      }
    }
  ],
  "users": [
    {
      "_id": "string",
      "username": "string",
      "discriminator": "string",
      "display_name": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "relations": [
        {
          "_id": "string",
          "status": {}
        }
      ],
      "badges": 0,
      "status": {
        "text": "string",
        "presence": {}
      },
      "flags": 0,
      "privileged": true,
      "bot": {
        "owner": "string"
      },
      "relationship": {},
      "online": true
    }
  ],
  "members": [
    {
      "_id": {
        "server": "string",
        "user": "string"
      },
      "joined_at": {},
      "nickname": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "roles": [
        "string"
      ],
      "timeout": {},
      "can_publish": true,
      "can_receive": true
    }
  ]
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="audit-log-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AuditLogQueryResponse](#schemaauditlogqueryresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-invites">Invites</h1>

## Fetch Invite

<a id="opIdinvite_fetch_fetch"></a>

> Code samples

```bash
curl https://api.stoat.chat/invites/string \
  -H 'Accept: application/json'
```

`GET /invites/{target}`

Fetch an invite by its id.

<h3 id="fetch-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "type": "Server",
  "code": "string",
  "server_id": "string",
  "server_name": "string",
  "server_icon": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "server_banner": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "server_flags": 0,
  "channel_id": "string",
  "channel_name": "string",
  "channel_description": "string",
  "user_name": "string",
  "user_avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "member_count": 0
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[InviteResponse](#schemainviteresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Join Invite

<a id="opIdinvite_join_join"></a>

> Code samples

```bash
curl https://api.stoat.chat/invites/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`POST /invites/{target}`

Join an invite by its ID

<h3 id="join-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "type": "Server",
  "channels": [
    {
      "channel_type": "SavedMessages",
      "_id": "string",
      "user": "string"
    }
  ],
  "server": {
    "_id": "string",
    "owner": "string",
    "name": "string",
    "description": "string",
    "channels": [
      "string"
    ],
    "categories": [
      {
        "id": "string",
        "title": "string",
        "channels": [
          "string"
        ]
      }
    ],
    "system_messages": {
      "user_joined": "string",
      "user_left": "string",
      "user_kicked": "string",
      "user_banned": "string"
    },
    "roles": {
      "property1": {
        "_id": "string",
        "name": "string",
        "permissions": {
          "a": 0,
          "d": 0
        },
        "colour": "string",
        "hoist": true,
        "rank": 0,
        "icon": {
          "_id": "string",
          "tag": "string",
          "filename": "string",
          "metadata": {
            "type": "File"
          },
          "content_type": "string",
          "size": 0,
          "deleted": true,
          "reported": true,
          "message_id": "string",
          "user_id": "string",
          "server_id": "string",
          "object_id": "string"
        },
        "owner": "string"
      },
      "property2": {
        "_id": "string",
        "name": "string",
        "permissions": {
          "a": 0,
          "d": 0
        },
        "colour": "string",
        "hoist": true,
        "rank": 0,
        "icon": {
          "_id": "string",
          "tag": "string",
          "filename": "string",
          "metadata": {
            "type": "File"
          },
          "content_type": "string",
          "size": 0,
          "deleted": true,
          "reported": true,
          "message_id": "string",
          "user_id": "string",
          "server_id": "string",
          "object_id": "string"
        },
        "owner": "string"
      }
    },
    "default_permissions": 0,
    "icon": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "banner": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "flags": 0,
    "nsfw": true,
    "analytics": true,
    "discoverable": true,
    "approximate_member_count": 0
  }
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="join-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[InviteJoinResponse](#schemainvitejoinresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Delete Invite

<a id="opIdinvite_delete_delete"></a>

> Code samples

```bash
curl https://api.stoat.chat/invites/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`DELETE /invites/{target}`

Delete an invite by its id.

<h3 id="delete-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="delete-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-emojis">Emojis</h1>

## Fetch Emoji

<a id="opIdemoji_fetch_fetch_emoji"></a>

> Code samples

```bash
curl https://api.stoat.chat/custom/emoji/string \
  -H 'Accept: application/json'
```

`GET /custom/emoji/{emoji_id}`

Fetch an emoji by its id.

<h3 id="fetch-emoji-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emoji_id|path|[Id](#schemaid)|true|none|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "parent": {
    "type": "Server",
    "id": "string"
  },
  "creator_id": "string",
  "name": "string",
  "animated": true,
  "nsfw": true
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-emoji-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Emoji](#schemaemoji)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create New Emoji

<a id="opIdemoji_create_create_emoji"></a>

> Code samples

```bash
curl https://api.stoat.chat/custom/emoji/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "name": "string",
    "parent": {
      "type": "Server",
      "id": "string"
    },
    "nsfw": false
  }'
```

`PUT /custom/emoji/{emoji_id}`

Create an emoji by its Autumn upload id.

> Body parameter

```json
{
  "name": "string",
  "parent": {
    "type": "Server",
    "id": "string"
  },
  "nsfw": false
}
```

<h3 id="create-new-emoji-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emoji_id|path|string|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|
|body|body|[DataCreateEmoji](#schemadatacreateemoji)|true|none|
|» name|body|string|true|Server name|
|» parent|body|object|true|Parent information|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » id|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» nsfw|body|boolean|false|Whether the emoji is mature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|Server|
|» » type|Detached|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "parent": {
    "type": "Server",
    "id": "string"
  },
  "creator_id": "string",
  "name": "string",
  "animated": true,
  "nsfw": true
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="create-new-emoji-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Emoji](#schemaemoji)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Delete Emoji

<a id="opIdemoji_delete_delete_emoji"></a>

> Code samples

```bash
curl https://api.stoat.chat/custom/emoji/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`DELETE /custom/emoji/{emoji_id}`

Delete an emoji by its id.

<h3 id="delete-emoji-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emoji_id|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="delete-emoji-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Edit Emoji

<a id="opIdemoji_edit_edit_emoji"></a>

> Code samples

```bash
curl https://api.stoat.chat/custom/emoji/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`PATCH /custom/emoji/{emoji_id}`

Edit an emoji by its id.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="edit-emoji-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emoji_id|path|[Id](#schemaid)|true|none|
|X-Audit-Log-Reason|header|string|false|Reason for action which is stored in the audit log.|
|body|body|[DataEditEmoji](#schemadataeditemoji)|true|none|
|» name|body|string \| null|false|Emoji name|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "parent": {
    "type": "Server",
    "id": "string"
  },
  "creator_id": "string",
  "name": "string",
  "animated": true,
  "nsfw": true
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="edit-emoji-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Emoji](#schemaemoji)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-user-safety">User Safety</h1>

## Report Content

<a id="opIdreport_content_report_content"></a>

> Code samples

```bash
curl https://api.stoat.chat/safety/report \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "content": {
      "type": "Message",
      "id": "string",
      "report_reason": {}
    },
    "additional_context": ""
  }'
```

`POST /safety/report`

Report a piece of content to the moderation team.

> Body parameter

```json
{
  "content": {
    "type": "Message",
    "id": "string",
    "report_reason": {}
  },
  "additional_context": ""
}
```

<h3 id="report-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DataReportContent](#schemadatareportcontent)|true|none|
|» content|body|object|true|Content being reported|
|» » *oneOf*|body|object|false|Report a message|
|» » type|body|string|true|none|
|» » id|body|string|true|ID of the message|
|» » report_reason|body|object|true|Reason for reporting message|
|» » » *oneOf*|body|string|false|No reason has been specified|
|» » » *oneOf*|body|string|false|Illegal content catch-all reason|
|» » » *oneOf*|body|string|false|Selling or facilitating use of drugs or other illegal goods|
|» » » *oneOf*|body|string|false|Extortion or blackmail|
|» » » *oneOf*|body|string|false|Revenge or child pornography|
|» » » *oneOf*|body|string|false|Illegal hacking activity|
|» » » *oneOf*|body|string|false|Extreme violence, gore, or animal cruelty With exception to violence potrayed in media / creative arts|
|» » » *oneOf*|body|string|false|Content that promotes harm to others / self|
|» » » *oneOf*|body|string|false|Unsolicited advertisements|
|» » » *oneOf*|body|string|false|This is a raid|
|» » » *oneOf*|body|string|false|Spam or platform abuse|
|» » » *oneOf*|body|string|false|Scams or fraud|
|» » » *oneOf*|body|string|false|Distribution of malware or malicious links|
|» » » *oneOf*|body|string|false|Harassment or abuse targeted at another user|
|» » *oneOf*|body|object|false|Report a server|
|» » type|body|string|true|none|
|» » id|body|string|true|ID of the server|
|» » report_reason|body|object|true|Reason for reporting server|
|» » » *oneOf*|body|string|false|No reason has been specified|
|» » » *oneOf*|body|string|false|Illegal content catch-all reason|
|» » » *oneOf*|body|string|false|Selling or facilitating use of drugs or other illegal goods|
|» » » *oneOf*|body|string|false|Extortion or blackmail|
|» » » *oneOf*|body|string|false|Revenge or child pornography|
|» » » *oneOf*|body|string|false|Illegal hacking activity|
|» » » *oneOf*|body|string|false|Extreme violence, gore, or animal cruelty With exception to violence potrayed in media / creative arts|
|» » » *oneOf*|body|string|false|Content that promotes harm to others / self|
|» » » *oneOf*|body|string|false|Unsolicited advertisements|
|» » » *oneOf*|body|string|false|This is a raid|
|» » » *oneOf*|body|string|false|Spam or platform abuse|
|» » » *oneOf*|body|string|false|Scams or fraud|
|» » » *oneOf*|body|string|false|Distribution of malware or malicious links|
|» » » *oneOf*|body|string|false|Harassment or abuse targeted at another user|
|» » *oneOf*|body|object|false|Report a user|
|» » type|body|string|true|none|
|» » id|body|string|true|ID of the user|
|» » report_reason|body|object|true|Reason for reporting a user|
|» » » *oneOf*|body|string|false|No reason has been specified|
|» » » *oneOf*|body|string|false|Unsolicited advertisements|
|» » » *oneOf*|body|string|false|User is sending spam or otherwise abusing the platform|
|» » » *oneOf*|body|string|false|User's profile contains inappropriate content for a general audience|
|» » » *oneOf*|body|string|false|User is impersonating another user|
|» » » *oneOf*|body|string|false|User is evading a ban|
|» » » *oneOf*|body|string|false|User is not of minimum age to use the platform|
|» » message_id|body|string \| null|false|Message context|
|» additional_context|body|string|false|Additional report description|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|Message|
|» » » *oneOf*|NoneSpecified|
|» » » *oneOf*|Illegal|
|» » » *oneOf*|IllegalGoods|
|» » » *oneOf*|IllegalExtortion|
|» » » *oneOf*|IllegalPornography|
|» » » *oneOf*|IllegalHacking|
|» » » *oneOf*|ExtremeViolence|
|» » » *oneOf*|PromotesHarm|
|» » » *oneOf*|UnsolicitedSpam|
|» » » *oneOf*|Raid|
|» » » *oneOf*|SpamAbuse|
|» » » *oneOf*|ScamsFraud|
|» » » *oneOf*|Malware|
|» » » *oneOf*|Harassment|
|» » type|Server|
|» » » *oneOf*|NoneSpecified|
|» » » *oneOf*|Illegal|
|» » » *oneOf*|IllegalGoods|
|» » » *oneOf*|IllegalExtortion|
|» » » *oneOf*|IllegalPornography|
|» » » *oneOf*|IllegalHacking|
|» » » *oneOf*|ExtremeViolence|
|» » » *oneOf*|PromotesHarm|
|» » » *oneOf*|UnsolicitedSpam|
|» » » *oneOf*|Raid|
|» » » *oneOf*|SpamAbuse|
|» » » *oneOf*|ScamsFraud|
|» » » *oneOf*|Malware|
|» » » *oneOf*|Harassment|
|» » type|User|
|» » » *oneOf*|NoneSpecified|
|» » » *oneOf*|UnsolicitedSpam|
|» » » *oneOf*|SpamAbuse|
|» » » *oneOf*|InappropriateProfile|
|» » » *oneOf*|Impersonation|
|» » » *oneOf*|BanEvasion|
|» » » *oneOf*|Underage|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="report-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-account">Account</h1>

## Create Account

<a id="opIdcreate_account_create_account"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/account/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "string",
    "password": "string",
    "invite": "string",
    "captcha": "string"
  }'
```

`POST /auth/account/create`

Create a new account.

> Body parameter

```json
{
  "email": "string",
  "password": "string",
  "invite": "string",
  "captcha": "string"
}
```

<h3 id="create-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DataCreateAccount](#schemadatacreateaccount)|true|none|
|» email|body|string|true|Valid email address|
|» password|body|string|true|Password|
|» invite|body|string \| null|false|Invite code|
|» captcha|body|string \| null|false|Captcha verification code|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="create-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Resend Verification

<a id="opIdresend_verification_resend_verification"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/account/reverify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "string",
    "captcha": "string"
  }'
```

`POST /auth/account/reverify`

Resend account creation verification email.

> Body parameter

```json
{
  "email": "string",
  "captcha": "string"
}
```

<h3 id="resend-verification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DataResendVerification](#schemadataresendverification)|true|none|
|» email|body|string|true|Email associated with the account|
|» captcha|body|string \| null|false|Captcha verification code|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="resend-verification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Confirm Account Deletion

<a id="opIdconfirm_deletion_confirm_deletion"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/account/delete \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "string"
  }'
```

`PUT /auth/account/delete`

Schedule an account for deletion by confirming the received token.

> Body parameter

```json
{
  "token": "string"
}
```

<h3 id="confirm-account-deletion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DataAccountDeletion](#schemadataaccountdeletion)|true|none|
|» token|body|string|true|Deletion token|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="confirm-account-deletion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Account

<a id="opIddelete_account_delete_account"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/account/delete \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`POST /auth/account/delete`

Request to have an account deleted.

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="delete-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token, Valid MFA Ticket
</aside>

## Fetch Account

<a id="opIdfetch_account_fetch_account"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/account/ \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /auth/account/`

Fetch account information from the current session.

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "email": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AccountInfo](#schemaaccountinfo)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Disable Account

<a id="opIddisable_account_disable_account"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/account/disable \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`POST /auth/account/disable`

Disable an account.

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="disable-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token, Valid MFA Ticket
</aside>

## Change Password

<a id="opIdchange_password_change_password"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/account/change/password \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "password": "string",
    "current_password": "string"
  }'
```

`PATCH /auth/account/change/password`

Change the current account password.

> Body parameter

```json
{
  "password": "string",
  "current_password": "string"
}
```

<h3 id="change-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DataChangePassword](#schemadatachangepassword)|true|none|
|» password|body|string|true|New password|
|» current_password|body|string|true|Current password|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="change-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token, Valid MFA Ticket
</aside>

## Change Email

<a id="opIdchange_email_change_email"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/account/change/email \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "email": "string",
    "current_password": "string"
  }'
```

`PATCH /auth/account/change/email`

Change the associated account email.

> Body parameter

```json
{
  "email": "string",
  "current_password": "string"
}
```

<h3 id="change-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DataChangeEmail](#schemadatachangeemail)|true|none|
|» email|body|string|true|Valid email address|
|» current_password|body|string|true|Current password|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="change-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token, Valid MFA Ticket
</aside>

## Verify Email

<a id="opIdverify_email_verify_email"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/account/verify/string \
  -X POST \
  -H 'Accept: application/json'
```

`POST /auth/account/verify/{code}`

Verify an email address.

<h3 id="verify-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "ticket": {
    "_id": "string",
    "account_id": "string",
    "token": "string",
    "validated": true,
    "authorised": true,
    "last_totp_code": "string"
  }
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="verify-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ResponseVerify](#schemaresponseverify)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Send Password Reset

<a id="opIdsend_password_reset_send_password_reset"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/account/reset_password \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "string",
    "captcha": "string"
  }'
```

`POST /auth/account/reset_password`

Send an email to reset account password.

> Body parameter

```json
{
  "email": "string",
  "captcha": "string"
}
```

<h3 id="send-password-reset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DataSendPasswordReset](#schemadatasendpasswordreset)|true|none|
|» email|body|string|true|Email associated with the account|
|» captcha|body|string \| null|false|Captcha verification code|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="send-password-reset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Password Reset

<a id="opIdpassword_reset_password_reset"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/account/reset_password \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "string",
    "password": "string",
    "remove_sessions": false
  }'
```

`PATCH /auth/account/reset_password`

Confirm password reset and change the password.

> Body parameter

```json
{
  "token": "string",
  "password": "string",
  "remove_sessions": false
}
```

<h3 id="password-reset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DataPasswordReset](#schemadatapasswordreset)|true|none|
|» token|body|string|true|Reset token|
|» password|body|string|true|New password|
|» remove_sessions|body|boolean|false|Whether to logout all sessions|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="password-reset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stoat-api-session">Session</h1>

## Login

<a id="opIdlogin_login"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/session/login \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "string",
    "password": "string",
    "friendly_name": "string"
  }'
```

`POST /auth/session/login`

Login to an account.

> Body parameter

```json
{
  "email": "string",
  "password": "string",
  "friendly_name": "string"
}
```

<h3 id="login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DataLogin](#schemadatalogin)|true|none|
|» *anyOf*|body|object|false|none|
|» email|body|string|true|Email|
|» password|body|string|true|Password|
|» friendly_name|body|string \| null|false|Friendly name used for the session|
|» *anyOf*|body|object|false|none|
|» mfa_ticket|body|string|true|Unvalidated or authorised MFA ticket<br><br>Used to resolve the correct account|
|» mfa_response|body|object \| null|false|Valid MFA response<br><br>This will take precedence over the `password` field where applicable|
|» » *anyOf*|body|object|false|none|
|» » password|body|string|true|none|
|» » *anyOf*|body|object|false|none|
|» » recovery_code|body|string|true|none|
|» » *anyOf*|body|object|false|none|
|» » totp_code|body|string|true|none|
|» friendly_name|body|string \| null|false|Friendly name used for the session|

> Example responses

> 200 Response

```json
{
  "result": "Success",
  "_id": "string",
  "user_id": "string",
  "token": "string",
  "name": "string",
  "last_seen": {},
  "origin": "string",
  "subscription": {
    "endpoint": "string",
    "p256dh": "string",
    "auth": "string"
  }
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ResponseLogin](#schemaresponselogin)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Logout

<a id="opIdlogout_logout"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/session/logout \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`POST /auth/session/logout`

Delete current session.

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Fetch Sessions

<a id="opIdfetch_all_fetch_all"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/session/all \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /auth/session/all`

Fetch all sessions associated with this account.

> Example responses

> 200 Response

```json
[
  {
    "_id": "string",
    "name": "string"
  }
]
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default|An error occurred.|[Error](#schemaerror)|

<h3 id="fetch-sessions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SessionInfo](#schemasessioninfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Delete All Sessions

<a id="opIdrevoke_all_revoke_all"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/session/all \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-mfa-ticket: ${API_KEY}"
```

`DELETE /auth/session/all`

Delete all active sessions, optionally including current one.

<h3 id="delete-all-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|revoke_self|query|boolean \| null|false|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="delete-all-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Valid MFA Ticket, Session Token, Session Token
</aside>

## Revoke Session

<a id="opIdrevoke_revoke"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/session/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-mfa-ticket: ${API_KEY}"
```

`DELETE /auth/session/{id}`

Delete a specific active session.

<h3 id="revoke-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="revoke-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Valid MFA Ticket, Session Token
</aside>

## Edit Session

<a id="opIdedit_edit"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/session/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "friendly_name": "string"
  }'
```

`PATCH /auth/session/{id}`

Edit current session information.

> Body parameter

```json
{
  "friendly_name": "string"
}
```

<h3 id="edit-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[DataEditSession](#schemadataeditsession)|true|none|
|» friendly_name|body|string|true|Session friendly name|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "name": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="edit-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SessionInfo](#schemasessioninfo)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-mfa">MFA</h1>

## Create MFA ticket

<a id="opIdcreate_ticket_create_ticket"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/mfa/ticket \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "password": "string"
  }'
```

`PUT /auth/mfa/ticket`

Create a new MFA ticket or validate an existing one.

> Body parameter

```json
{
  "password": "string"
}
```

<h3 id="create-mfa-ticket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MFAResponse](#schemamfaresponse)|true|none|
|» *anyOf*|body|object|false|none|
|» password|body|string|true|none|
|» *anyOf*|body|object|false|none|
|» recovery_code|body|string|true|none|
|» *anyOf*|body|object|false|none|
|» totp_code|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "account_id": "string",
  "token": "string",
  "validated": true,
  "authorised": true,
  "last_totp_code": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="create-mfa-ticket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MFATicket](#schemamfaticket)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token, Unvalidated MFA Ticket
</aside>

## MFA Status

<a id="opIdfetch_status_fetch_status"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/mfa/ \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /auth/mfa/`

Fetch MFA status of an account.

> Example responses

> 200 Response

```json
{
  "email_otp": true,
  "trusted_handover": true,
  "email_mfa": true,
  "totp_mfa": true,
  "security_key_mfa": true,
  "recovery_active": true
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="mfa-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MultiFactorStatus](#schemamultifactorstatus)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Fetch Recovery Codes

<a id="opIdfetch_recovery_fetch_recovery"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/mfa/recovery \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-mfa-ticket: ${API_KEY}"
```

`POST /auth/mfa/recovery`

Fetch recovery codes for an account.

> Example responses

> 200 Response

```json
[
  "string"
]
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-recovery-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default|An error occurred.|[Error](#schemaerror)|

<h3 id="fetch-recovery-codes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Valid MFA Ticket, Session Token
</aside>

## Generate Recovery Codes

<a id="opIdgenerate_recovery_generate_recovery"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/mfa/recovery \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "x-mfa-ticket: ${API_KEY}"
```

`PATCH /auth/mfa/recovery`

Re-generate recovery codes for an account.

> Example responses

> 200 Response

```json
[
  "string"
]
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="generate-recovery-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default|An error occurred.|[Error](#schemaerror)|

<h3 id="generate-recovery-codes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Valid MFA Ticket, Session Token
</aside>

## Get MFA Methods

<a id="opIdget_mfa_methods_get_mfa_methods"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/mfa/methods \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /auth/mfa/methods`

Fetch available MFA methods.

> Example responses

> 200 Response

```json
[
  "Password"
]
```

<h3 id="get-mfa-methods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-mfa-methods-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MFAMethod](#schemamfamethod)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Enable TOTP 2FA

<a id="opIdtotp_enable_totp_enable"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/mfa/totp \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "password": "string"
  }'
```

`PUT /auth/mfa/totp`

Generate a new secret for TOTP.

> Body parameter

```json
{
  "password": "string"
}
```

<h3 id="enable-totp-2fa-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MFAResponse](#schemamfaresponse)|true|none|
|» *anyOf*|body|object|false|none|
|» password|body|string|true|none|
|» *anyOf*|body|object|false|none|
|» recovery_code|body|string|true|none|
|» *anyOf*|body|object|false|none|
|» totp_code|body|string|true|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="enable-totp-2fa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Generate TOTP Secret

<a id="opIdtotp_generate_secret_totp_generate_secret"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/mfa/totp \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-mfa-ticket: ${API_KEY}"
```

`POST /auth/mfa/totp`

Generate a new secret for TOTP.

> Example responses

> 200 Response

```json
{
  "secret": "string"
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="generate-totp-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ResponseTotpSecret](#schemaresponsetotpsecret)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Valid MFA Ticket, Session Token
</aside>

## Disable TOTP 2FA

<a id="opIdtotp_disable_totp_disable"></a>

> Code samples

```bash
curl https://api.stoat.chat/auth/mfa/totp \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-mfa-ticket: ${API_KEY}"
```

`DELETE /auth/mfa/totp`

Disable TOTP 2FA for an account.

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="disable-totp-2fa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Valid MFA Ticket, Session Token
</aside>

<h1 id="stoat-api-onboarding">Onboarding</h1>

## Check Onboarding Status

<a id="opIdhello_hello"></a>

> Code samples

```bash
curl https://api.stoat.chat/onboard/hello \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /onboard/hello`

This will tell you whether the current account requires onboarding or whether you can continue to send requests as usual. You may skip calling this if you're restoring an existing session.

> Example responses

> 200 Response

```json
{
  "onboarding": true
}
```

<h3 id="check-onboarding-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DataHello](#schemadatahello)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token, Session Token
</aside>

## Complete Onboarding

<a id="opIdcomplete_complete"></a>

> Code samples

```bash
curl https://api.stoat.chat/onboard/complete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "username": "string"
  }'
```

`POST /onboard/complete`

This sets a new username, completes onboarding and allows a user to start using Revolt.

> Body parameter

```json
{
  "username": "string"
}
```

<h3 id="complete-onboarding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DataOnboard](#schemadataonboard)|true|none|
|» username|body|string|true|New username which will be used to identify the user on the platform|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "username": "string",
  "discriminator": "string",
  "display_name": "string",
  "pronouns": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "relations": [
    {
      "_id": "string",
      "status": {}
    }
  ],
  "badges": 0,
  "status": {
    "text": "string",
    "presence": {}
  },
  "flags": 0,
  "privileged": true,
  "bot": {
    "owner": "string"
  },
  "relationship": {},
  "online": true
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="complete-onboarding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[User](#schemauser)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token, Session Token
</aside>

<h1 id="stoat-api-policy">Policy</h1>

## Acknowledge Policy Changes

<a id="opIdacknowledge_policy_changes_acknowledge_policy_changes"></a>

> Code samples

```bash
curl https://api.stoat.chat/policy/acknowledge \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`POST /policy/acknowledge`

Accept/acknowledge changes to platform policy.

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="acknowledge-policy-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-web-push">Web Push</h1>

## Push Subscribe

<a id="opIdsubscribe_subscribe"></a>

> Code samples

```bash
curl https://api.stoat.chat/push/subscribe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "endpoint": "string",
    "p256dh": "string",
    "auth": "string"
  }'
```

`POST /push/subscribe`

Create a new Web Push subscription.

If an existing subscription exists on this session, it will be removed.

> Body parameter

```json
{
  "endpoint": "string",
  "p256dh": "string",
  "auth": "string"
}
```

<h3 id="push-subscribe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebPushSubscription](#schemawebpushsubscription)|true|none|
|» endpoint|body|string|true|none|
|» p256dh|body|string|true|none|
|» auth|body|string|true|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="push-subscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Unsubscribe

<a id="opIdunsubscribe_unsubscribe"></a>

> Code samples

```bash
curl https://api.stoat.chat/push/unsubscribe \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`POST /push/unsubscribe`

Remove the Web Push subscription associated with the current session.

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="unsubscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

<h1 id="stoat-api-sync">Sync</h1>

## Fetch Settings

<a id="opIdget_settings_fetch"></a>

> Code samples

```bash
curl https://api.stoat.chat/sync/settings/fetch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "keys": [
      "string"
    ]
  }'
```

`POST /sync/settings/fetch`

Fetch settings from server filtered by keys.

This will return an object with the requested keys, each value is a tuple of `(timestamp, value)`, the value is the previously uploaded data.

> Body parameter

```json
{
  "keys": [
    "string"
  ]
}
```

<h3 id="fetch-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OptionsFetchSettings](#schemaoptionsfetchsettings)|true|none|
|» keys|body|[string]|true|Keys to fetch|

> Example responses

> 200 Response

```json
{
  "property1": [
    0,
    0
  ],
  "property2": [
    0,
    0
  ]
}
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default|An error occurred.|[Error](#schemaerror)|

<h3 id="fetch-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[integer(int64)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Set Settings

<a id="opIdset_settings_set"></a>

> Code samples

```bash
curl https://api.stoat.chat/sync/settings/set \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}" \
  -d '{
    "property1": "string",
    "property2": "string"
  }'
```

`POST /sync/settings/set`

Upload data to save to settings.

> Body parameter

```json
{
  "property1": "string",
  "property2": "string"
}
```

<h3 id="set-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timestamp|query|integer(int64) \| null|false|Timestamp of settings change.<br><br>Used to avoid feedback loops.|
|body|body|object|true|none|
|» **additionalProperties**|body|string|false|none|

> Example responses

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="set-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

## Fetch Unreads

<a id="opIdget_unreads_unreads"></a>

> Code samples

```bash
curl https://api.stoat.chat/sync/unreads \
  -H 'Accept: application/json' \
  -H "x-session-token: ${API_KEY}"
```

`GET /sync/unreads`

Fetch information about unread state on channels.

> Example responses

> 200 Response

```json
[
  {
    "_id": {
      "channel": "string",
      "user": "string"
    },
    "last_id": "string",
    "mentions": [
      "string"
    ]
  }
]
```

> default Response

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

<h3 id="fetch-unreads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default|An error occurred.|[Error](#schemaerror)|

<h3 id="fetch-unreads-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ChannelUnread](#schemachannelunread)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Session Token
</aside>

# Schemas

<h2 id="tocS_RevoltConfig">RevoltConfig</h2>
<!-- backwards compatibility -->
<a id="schemarevoltconfig"></a>
<a id="schema_RevoltConfig"></a>
<a id="tocSrevoltconfig"></a>
<a id="tocsrevoltconfig"></a>

```json
{
  "stoat": "string",
  "revolt": "string",
  "features": {
    "captcha": {
      "enabled": true,
      "key": "string"
    },
    "email": true,
    "invite_only": true,
    "autumn": {
      "enabled": true,
      "url": "string"
    },
    "january": {
      "enabled": true,
      "url": "string"
    },
    "livekit": {
      "enabled": true,
      "nodes": [
        {
          "name": "string",
          "lat": 0,
          "lon": 0,
          "public_url": "string"
        }
      ]
    },
    "limits": {
      "global": {
        "group_size": 0,
        "message_embeds": 0,
        "message_replies": 0,
        "message_reactions": 0,
        "server_emoji": 0,
        "server_roles": 0,
        "server_channels": 0,
        "body_limit_size": 0,
        "restrict_server_creation": [
          "string"
        ],
        "new_user_hours": 0,
        "max_invite_duration_days": 0
      },
      "new_user": {
        "outgoing_friend_requests": 0,
        "bots": 0,
        "message_length": 0,
        "message_attachments": 0,
        "servers": 0,
        "voice_quality": 0,
        "video": true,
        "video_resolution": [
          0,
          0
        ],
        "video_aspect_ratio": [
          0,
          0
        ],
        "file_upload_size_limits": {
          "property1": 0,
          "property2": 0
        }
      },
      "default": {
        "outgoing_friend_requests": 0,
        "bots": 0,
        "message_length": 0,
        "message_attachments": 0,
        "servers": 0,
        "voice_quality": 0,
        "video": true,
        "video_resolution": [
          0,
          0
        ],
        "video_aspect_ratio": [
          0,
          0
        ],
        "file_upload_size_limits": {
          "property1": 0,
          "property2": 0
        }
      }
    },
    "legal_links": {
      "terms_of_service": "string",
      "privacy_policy": "string",
      "guidelines": "string"
    },
    "assets": "string"
  },
  "ws": "string",
  "app": "string",
  "vapid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stoat|string|true|none|Stoat API Version|
|revolt|string|true|none|none|
|features|object|true|none|Features enabled on this Stoat node|
|ws|string|true|none|WebSocket URL|
|app|string|true|none|URL pointing to the client serving this node|
|vapid|string|true|none|Web Push VAPID public key|

<h2 id="tocS_RevoltFeatures">RevoltFeatures</h2>
<!-- backwards compatibility -->
<a id="schemarevoltfeatures"></a>
<a id="schema_RevoltFeatures"></a>
<a id="tocSrevoltfeatures"></a>
<a id="tocsrevoltfeatures"></a>

```json
{
  "captcha": {
    "enabled": true,
    "key": "string"
  },
  "email": true,
  "invite_only": true,
  "autumn": {
    "enabled": true,
    "url": "string"
  },
  "january": {
    "enabled": true,
    "url": "string"
  },
  "livekit": {
    "enabled": true,
    "nodes": [
      {
        "name": "string",
        "lat": 0,
        "lon": 0,
        "public_url": "string"
      }
    ]
  },
  "limits": {
    "global": {
      "group_size": 0,
      "message_embeds": 0,
      "message_replies": 0,
      "message_reactions": 0,
      "server_emoji": 0,
      "server_roles": 0,
      "server_channels": 0,
      "body_limit_size": 0,
      "restrict_server_creation": [
        "string"
      ],
      "new_user_hours": 0,
      "max_invite_duration_days": 0
    },
    "new_user": {
      "outgoing_friend_requests": 0,
      "bots": 0,
      "message_length": 0,
      "message_attachments": 0,
      "servers": 0,
      "voice_quality": 0,
      "video": true,
      "video_resolution": [
        0,
        0
      ],
      "video_aspect_ratio": [
        0,
        0
      ],
      "file_upload_size_limits": {
        "property1": 0,
        "property2": 0
      }
    },
    "default": {
      "outgoing_friend_requests": 0,
      "bots": 0,
      "message_length": 0,
      "message_attachments": 0,
      "servers": 0,
      "voice_quality": 0,
      "video": true,
      "video_resolution": [
        0,
        0
      ],
      "video_aspect_ratio": [
        0,
        0
      ],
      "file_upload_size_limits": {
        "property1": 0,
        "property2": 0
      }
    }
  },
  "legal_links": {
    "terms_of_service": "string",
    "privacy_policy": "string",
    "guidelines": "string"
  },
  "assets": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|captcha|object|true|none|hCaptcha configuration|
|email|boolean|true|none|Whether email verification is enabled|
|invite_only|boolean|true|none|Whether this server is invite only|
|autumn|object|true|none|File server service configuration|
|january|object|true|none|Proxy service configuration|
|livekit|object|true|none|Voice server configuration|
|limits|object|true|none|Limits|
|legal_links|object|true|none|Legal links|
|assets|string|true|none|Asset link|

<h2 id="tocS_CaptchaFeature">CaptchaFeature</h2>
<!-- backwards compatibility -->
<a id="schemacaptchafeature"></a>
<a id="schema_CaptchaFeature"></a>
<a id="tocScaptchafeature"></a>
<a id="tocscaptchafeature"></a>

```json
{
  "enabled": true,
  "key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|Whether captcha is enabled|
|key|string|true|none|Client key used for solving captcha|

<h2 id="tocS_Feature">Feature</h2>
<!-- backwards compatibility -->
<a id="schemafeature"></a>
<a id="schema_Feature"></a>
<a id="tocSfeature"></a>
<a id="tocsfeature"></a>

```json
{
  "enabled": true,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|Whether the service is enabled|
|url|string|true|none|URL pointing to the service|

<h2 id="tocS_VoiceFeature">VoiceFeature</h2>
<!-- backwards compatibility -->
<a id="schemavoicefeature"></a>
<a id="schema_VoiceFeature"></a>
<a id="tocSvoicefeature"></a>
<a id="tocsvoicefeature"></a>

```json
{
  "enabled": true,
  "nodes": [
    {
      "name": "string",
      "lat": 0,
      "lon": 0,
      "public_url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|Whether voice is enabled|
|nodes|[[VoiceNode](#schemavoicenode)]|true|none|All livekit nodes|

<h2 id="tocS_VoiceNode">VoiceNode</h2>
<!-- backwards compatibility -->
<a id="schemavoicenode"></a>
<a id="schema_VoiceNode"></a>
<a id="tocSvoicenode"></a>
<a id="tocsvoicenode"></a>

```json
{
  "name": "string",
  "lat": 0,
  "lon": 0,
  "public_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|lat|number(double)|true|none|none|
|lon|number(double)|true|none|none|
|public_url|string|true|none|none|

<h2 id="tocS_LimitsConfig">LimitsConfig</h2>
<!-- backwards compatibility -->
<a id="schemalimitsconfig"></a>
<a id="schema_LimitsConfig"></a>
<a id="tocSlimitsconfig"></a>
<a id="tocslimitsconfig"></a>

```json
{
  "global": {
    "group_size": 0,
    "message_embeds": 0,
    "message_replies": 0,
    "message_reactions": 0,
    "server_emoji": 0,
    "server_roles": 0,
    "server_channels": 0,
    "body_limit_size": 0,
    "restrict_server_creation": [
      "string"
    ],
    "new_user_hours": 0,
    "max_invite_duration_days": 0
  },
  "new_user": {
    "outgoing_friend_requests": 0,
    "bots": 0,
    "message_length": 0,
    "message_attachments": 0,
    "servers": 0,
    "voice_quality": 0,
    "video": true,
    "video_resolution": [
      0,
      0
    ],
    "video_aspect_ratio": [
      0,
      0
    ],
    "file_upload_size_limits": {
      "property1": 0,
      "property2": 0
    }
  },
  "default": {
    "outgoing_friend_requests": 0,
    "bots": 0,
    "message_length": 0,
    "message_attachments": 0,
    "servers": 0,
    "voice_quality": 0,
    "video": true,
    "video_resolution": [
      0,
      0
    ],
    "video_aspect_ratio": [
      0,
      0
    ],
    "file_upload_size_limits": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|global|object|true|none|Global Limits|
|new_user|object|true|none|New User Limits|
|default|object|true|none|Default User Limits|

<h2 id="tocS_GlobalLimits">GlobalLimits</h2>
<!-- backwards compatibility -->
<a id="schemagloballimits"></a>
<a id="schema_GlobalLimits"></a>
<a id="tocSgloballimits"></a>
<a id="tocsgloballimits"></a>

```json
{
  "group_size": 0,
  "message_embeds": 0,
  "message_replies": 0,
  "message_reactions": 0,
  "server_emoji": 0,
  "server_roles": 0,
  "server_channels": 0,
  "body_limit_size": 0,
  "restrict_server_creation": [
    "string"
  ],
  "new_user_hours": 0,
  "max_invite_duration_days": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_size|integer(int64)|true|none|max group size|
|message_embeds|integer(int64)|true|none|max message embeds|
|message_replies|integer(int64)|true|none|max replies|
|message_reactions|integer(int64)|true|none|max reactions per message|
|server_emoji|integer(int64)|true|none|max server emoji|
|server_roles|integer(int64)|true|none|max server roles|
|server_channels|integer(int64)|true|none|max server channels|
|body_limit_size|integer(int64)|true|none|none|
|restrict_server_creation|[string]|true|none|restrict server creation to these users. if blank, all users can create servers|
|new_user_hours|integer(int64)|true|none|New user hours|
|max_invite_duration_days|integer(int64)|true|none|Number of days after creation before an invite expires|

<h2 id="tocS_UserLimits">UserLimits</h2>
<!-- backwards compatibility -->
<a id="schemauserlimits"></a>
<a id="schema_UserLimits"></a>
<a id="tocSuserlimits"></a>
<a id="tocsuserlimits"></a>

```json
{
  "outgoing_friend_requests": 0,
  "bots": 0,
  "message_length": 0,
  "message_attachments": 0,
  "servers": 0,
  "voice_quality": 0,
  "video": true,
  "video_resolution": [
    0,
    0
  ],
  "video_aspect_ratio": [
    0,
    0
  ],
  "file_upload_size_limits": {
    "property1": 0,
    "property2": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outgoing_friend_requests|integer(int64)|true|none|Max Outgoing Friend Requests|
|bots|integer(int64)|true|none|Max Owned Bots|
|message_length|integer(int64)|true|none|Max message content length|
|message_attachments|integer(int64)|true|none|max message attachments|
|servers|integer(int64)|true|none|max servers|
|voice_quality|integer(int64)|true|none|max audio quality|
|video|boolean|true|none|video streaming enabled|
|video_resolution|[integer(int64)]|true|none|max video resolution (vertical, horizontal)|
|video_aspect_ratio|[number(double)]|true|none|min/max aspect ratios|
|file_upload_size_limits|object|true|none|none|

<h2 id="tocS_LegalLinks">LegalLinks</h2>
<!-- backwards compatibility -->
<a id="schemalegallinks"></a>
<a id="schema_LegalLinks"></a>
<a id="tocSlegallinks"></a>
<a id="tocslegallinks"></a>

```json
{
  "terms_of_service": "string",
  "privacy_policy": "string",
  "guidelines": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|terms_of_service|string|true|none|Terms of Service URL|
|privacy_policy|string|true|none|Privacy Policy URL|
|guidelines|string|true|none|Guidelines URL|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "type": "LabelMe",
  "location": "string"
}
```

Error information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string \| null|false|none|Where this error occurred|
|*oneOf*|object|false|none|This error was not labeled :(|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|locale|string|true|none|none|
|msg|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|max|integer(uint)|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|max|integer(uint)|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|max|integer(uint)|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|max|integer(uint)|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|max|integer(uint)|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|max|integer(uint)|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|retry_after|integer(uint64)|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|max|integer(uint)|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|max|integer(uint)|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|max|integer(uint)|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|permission|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|permission|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|operation|string|true|none|none|
|collection|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|error|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|with|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|max|integer(uint)|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|feature|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|LabelMe|
|type|ContactSupport|
|type|AlreadyOnboarded|
|type|UsernameTaken|
|type|InvalidUsername|
|type|DiscriminatorChangeRatelimited|
|type|UnknownUser|
|type|AlreadyFriends|
|type|AlreadySentRequest|
|type|Blocked|
|type|BlockedByOther|
|type|NotFriends|
|type|TooManyPendingFriendRequests|
|type|UnknownChannel|
|type|UnknownAttachment|
|type|UnknownMessage|
|type|CannotDeleteMessage|
|type|CannotEditMessage|
|type|CannotJoinCall|
|type|TooManyAttachments|
|type|TooManyEmbeds|
|type|TooManyReplies|
|type|TooManyChannels|
|type|EmptyMessage|
|type|PayloadTooLarge|
|type|CannotRemoveYourself|
|type|GroupTooLarge|
|type|AlreadyInGroup|
|type|NotInGroup|
|type|AlreadyPinned|
|type|NotPinned|
|type|InSlowmode|
|type|CantCreateServers|
|type|UnknownServer|
|type|InvalidRole|
|type|Banned|
|type|TooManyServers|
|type|TooManyEmoji|
|type|TooManyRoles|
|type|AlreadyInServer|
|type|CannotTimeoutYourself|
|type|ReachedMaximumBots|
|type|IsBot|
|type|IsNotBot|
|type|BotIsPrivate|
|type|CannotReportYourself|
|type|MissingPermission|
|type|MissingUserPermission|
|type|NotElevated|
|type|NotPrivileged|
|type|CannotGiveMissingPermissions|
|type|NotOwner|
|type|IsElevated|
|type|CannotRemoveOwnChannelView|
|type|DatabaseError|
|type|InternalError|
|type|InvalidOperation|
|type|InvalidCredentials|
|type|InvalidProperty|
|type|InvalidSession|
|type|InvalidFlagValue|
|type|NotAuthenticated|
|type|DuplicateNonce|
|type|NotFound|
|type|NoEffect|
|type|FailedValidation|
|type|HeaderTooLarge|
|type|OperationFailed|
|type|IncorrectData|
|type|LiveKitUnavailable|
|type|NotAVoiceChannel|
|type|AlreadyConnected|
|type|NotConnected|
|type|UnknownNode|
|type|ProxyError|
|type|FileTooSmall|
|type|FileTooLarge|
|type|FileTypeNotAllowed|
|type|ImageProcessingFailed|
|type|ImageResolutionNotAllowed|
|type|NoEmbedData|
|type|VosoUnavailable|
|type|FeatureDisabled|
|type|RenderFail|
|type|MissingHeaders|
|type|CaptchaFailed|
|type|BlockedByShield|
|type|UnverifiedAccount|
|type|EmailFailed|
|type|InvalidToken|
|type|MissingInvite|
|type|InvalidInvite|
|type|CompromisedPassword|
|type|ShortPassword|
|type|Blacklisted|
|type|LockedOut|
|type|TotpAlreadyEnabled|
|type|DisallowedMFAMethod|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "_id": "string",
  "username": "string",
  "discriminator": "string",
  "display_name": "string",
  "pronouns": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "relations": [
    {
      "_id": "string",
      "status": {}
    }
  ],
  "badges": 0,
  "status": {
    "text": "string",
    "presence": {}
  },
  "flags": 0,
  "privileged": true,
  "bot": {
    "owner": "string"
  },
  "relationship": {},
  "online": true
}
```

User

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|Unique Id|
|username|string|true|none|Username|
|discriminator|string|true|none|Discriminator|
|display_name|string \| null|false|none|Display name|
|pronouns|string \| null|false|none|User's pronouns|
|avatar|object \| null|false|none|Avatar attachment|
|relations|[[Relationship](#schemarelationship)]|false|none|Relationships with other users|
|badges|integer(uint32)|false|none|Bitfield of user badges<br><br>https://docs.rs/revolt-models/latest/revolt_models/v0/enum.UserBadges.html|
|status|object \| null|false|none|User's current status|
|flags|integer(uint32)|false|none|Enum of user flags<br><br>https://docs.rs/revolt-models/latest/revolt_models/v0/enum.UserFlags.html|
|privileged|boolean|false|none|Whether this user is privileged|
|bot|object \| null|false|none|Bot information|
|relationship|object|true|none|Current session user's relationship with this user|
|online|boolean|true|none|Whether this user is currently online|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "_id": "string",
  "tag": "string",
  "filename": "string",
  "metadata": {
    "type": "File"
  },
  "content_type": "string",
  "size": 0,
  "deleted": true,
  "reported": true,
  "message_id": "string",
  "user_id": "string",
  "server_id": "string",
  "object_id": "string"
}
```

File

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|Unique Id|
|tag|string|true|none|Tag / bucket this file was uploaded to|
|filename|string|true|none|Original filename|
|metadata|object|true|none|Parsed metadata of this file|
|content_type|string|true|none|Raw content type of this file|
|size|integer(int)|true|none|Size of this file (in bytes)|
|deleted|boolean \| null|false|none|Whether this file was deleted|
|reported|boolean \| null|false|none|Whether this file was reported|
|message_id|string \| null|false|none|none|
|user_id|string \| null|false|none|none|
|server_id|string \| null|false|none|none|
|object_id|string \| null|false|none|Id of the object this file is associated with|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "type": "File"
}
```

Metadata associated with a file

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|File is just a generic uncategorised file|
|type|string|true|none|none|
|*oneOf*|object|false|none|File contains textual data and should be displayed as such|
|type|string|true|none|none|
|*oneOf*|object|false|none|File is an image with specific dimensions, and may be animated|
|type|string|true|none|none|
|width|integer(uint)|true|none|none|
|height|integer(uint)|true|none|none|
|thumbhash|[integer(uint8)]|false|none|none|
|animated|boolean \| null|false|none|none|
|*oneOf*|object|false|none|File is a video with specific dimensions|
|type|string|true|none|none|
|width|integer(uint)|true|none|none|
|height|integer(uint)|true|none|none|
|*oneOf*|object|false|none|File is audio|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|File|
|type|Text|
|type|Image|
|type|Video|
|type|Audio|

<h2 id="tocS_Relationship">Relationship</h2>
<!-- backwards compatibility -->
<a id="schemarelationship"></a>
<a id="schema_Relationship"></a>
<a id="tocSrelationship"></a>
<a id="tocsrelationship"></a>

```json
{
  "_id": "string",
  "status": {}
}
```

Relationship entry indicating current status with other user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|Other user's Id|
|status|object|true|none|Relationship status with them|

<h2 id="tocS_RelationshipStatus">RelationshipStatus</h2>
<!-- backwards compatibility -->
<a id="schemarelationshipstatus"></a>
<a id="schema_RelationshipStatus"></a>
<a id="tocSrelationshipstatus"></a>
<a id="tocsrelationshipstatus"></a>

```json
"None"
```

User's relationship with another user (or themselves)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|No relationship with other user|
|*oneOf*|string|false|none|Other user is us|
|*oneOf*|string|false|none|Friends with the other user|
|*oneOf*|string|false|none|Pending friend request to user|
|*oneOf*|string|false|none|Incoming friend request from user|
|*oneOf*|string|false|none|Blocked this user|
|*oneOf*|string|false|none|Blocked by this user|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|None|
|*oneOf*|User|
|*oneOf*|Friend|
|*oneOf*|Outgoing|
|*oneOf*|Incoming|
|*oneOf*|Blocked|
|*oneOf*|BlockedOther|

<h2 id="tocS_UserStatus">UserStatus</h2>
<!-- backwards compatibility -->
<a id="schemauserstatus"></a>
<a id="schema_UserStatus"></a>
<a id="tocSuserstatus"></a>
<a id="tocsuserstatus"></a>

```json
{
  "text": "string",
  "presence": {}
}
```

User's active status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string \| null|false|none|Custom status text|
|presence|object \| null|false|none|Current presence option|

<h2 id="tocS_Presence">Presence</h2>
<!-- backwards compatibility -->
<a id="schemapresence"></a>
<a id="schema_Presence"></a>
<a id="tocSpresence"></a>
<a id="tocspresence"></a>

```json
"Online"
```

Presence status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|User is online|
|*oneOf*|string|false|none|User is not currently available|
|*oneOf*|string|false|none|User is focusing / will only receive mentions|
|*oneOf*|string|false|none|User is busy / will not receive any notifications|
|*oneOf*|string|false|none|User appears to be offline|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|Online|
|*oneOf*|Idle|
|*oneOf*|Focus|
|*oneOf*|Busy|
|*oneOf*|Invisible|

<h2 id="tocS_BotInformation">BotInformation</h2>
<!-- backwards compatibility -->
<a id="schemabotinformation"></a>
<a id="schema_BotInformation"></a>
<a id="tocSbotinformation"></a>
<a id="tocsbotinformation"></a>

```json
{
  "owner": "string"
}
```

Bot information for if the user is a bot

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|owner|string|true|none|Id of the owner of this bot|

<h2 id="tocS_Id">Id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_Id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"string"
```

<h2 id="tocS_FlagResponse">FlagResponse</h2>
<!-- backwards compatibility -->
<a id="schemaflagresponse"></a>
<a id="schema_FlagResponse"></a>
<a id="tocSflagresponse"></a>
<a id="tocsflagresponse"></a>

```json
{
  "flags": 0
}
```

User flag reponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flags|integer(int32)|true|none|Flags|

<h2 id="tocS_DataEditUser">DataEditUser</h2>
<!-- backwards compatibility -->
<a id="schemadataedituser"></a>
<a id="schema_DataEditUser"></a>
<a id="tocSdataedituser"></a>
<a id="tocsdataedituser"></a>

```json
{
  "display_name": "string",
  "pronouns": "string",
  "avatar": "string",
  "status": {
    "text": "string",
    "presence": {}
  },
  "profile": {
    "content": "string",
    "background": "string"
  },
  "badges": 0,
  "flags": 0,
  "remove": []
}
```

New user information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string \| null|false|none|New display name|
|pronouns|string \| null|false|none|New pronouns|
|avatar|string \| null|false|none|Attachment Id for avatar|
|status|object \| null|false|none|New user status|
|profile|object \| null|false|none|New user profile data<br><br>This is applied as a partial.|
|badges|integer(int32) \| null|false|none|Bitfield of user badges|
|flags|integer(int32) \| null|false|none|Enum of user flags|
|remove|[[FieldsUser](#schemafieldsuser)]|false|none|Fields to remove from user object|

<h2 id="tocS_DataUserProfile">DataUserProfile</h2>
<!-- backwards compatibility -->
<a id="schemadatauserprofile"></a>
<a id="schema_DataUserProfile"></a>
<a id="tocSdatauserprofile"></a>
<a id="tocsdatauserprofile"></a>

```json
{
  "content": "string",
  "background": "string"
}
```

New user profile data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string \| null|false|none|Text to set as user profile description|
|background|string \| null|false|none|Attachment Id for background|

<h2 id="tocS_FieldsUser">FieldsUser</h2>
<!-- backwards compatibility -->
<a id="schemafieldsuser"></a>
<a id="schema_FieldsUser"></a>
<a id="tocSfieldsuser"></a>
<a id="tocsfieldsuser"></a>

```json
"Avatar"
```

Optional fields on user object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|string|false|none|Internal field, ignore this.|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|Avatar|
|*oneOf*|StatusText|
|*oneOf*|StatusPresence|
|*oneOf*|ProfileContent|
|*oneOf*|ProfileBackground|
|*oneOf*|DisplayName|
|*oneOf*|Pronouns|
|*oneOf*|Internal|

<h2 id="tocS_DataChangeUsername">DataChangeUsername</h2>
<!-- backwards compatibility -->
<a id="schemadatachangeusername"></a>
<a id="schema_DataChangeUsername"></a>
<a id="tocSdatachangeusername"></a>
<a id="tocsdatachangeusername"></a>

```json
{
  "username": "string",
  "password": "stringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|New username|
|password|string|true|none|Current account password|

<h2 id="tocS_UserProfile">UserProfile</h2>
<!-- backwards compatibility -->
<a id="schemauserprofile"></a>
<a id="schema_UserProfile"></a>
<a id="tocSuserprofile"></a>
<a id="tocsuserprofile"></a>

```json
{
  "content": "string",
  "background": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  }
}
```

User's profile

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string \| null|false|none|Text content on user's profile|
|background|object \| null|false|none|Background visible on user's profile|

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "channel_type": "SavedMessages",
  "_id": "string",
  "user": "string"
}
```

Channel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|Personal "Saved Notes" channel which allows users to save messages|
|channel_type|string|true|none|none|
|_id|string|true|none|Unique Id|
|user|string|true|none|Id of the user this channel belongs to|
|*oneOf*|object|false|none|Direct message channel between two users|
|channel_type|string|true|none|none|
|_id|string|true|none|Unique Id|
|active|boolean|true|none|Whether this direct message channel is currently open on both sides|
|recipients|[string]|true|none|2-tuple of user ids participating in direct message|
|last_message_id|string \| null|false|none|Id of the last message sent in this channel|
|*oneOf*|object|false|none|Group channel between 1 or more participants|
|channel_type|string|true|none|none|
|_id|string|true|none|Unique Id|
|name|string|true|none|Display name of the channel|
|owner|string|true|none|User id of the owner of the group|
|description|string \| null|false|none|Channel description|
|recipients|[string]|true|none|Array of user ids participating in channel|
|icon|object \| null|false|none|Custom icon attachment|
|last_message_id|string \| null|false|none|Id of the last message sent in this channel|
|permissions|integer(int64) \| null|false|none|Permissions assigned to members of this group (does not apply to the owner of the group)|
|nsfw|boolean|false|none|Whether this group is marked as not safe for work|
|*oneOf*|object|false|none|Text channel belonging to a server|
|channel_type|string|true|none|none|
|_id|string|true|none|Unique Id|
|server|string|true|none|Id of the server this channel belongs to|
|name|string|true|none|Display name of the channel|
|description|string \| null|false|none|Channel description|
|icon|object \| null|false|none|Custom icon attachment|
|last_message_id|string \| null|false|none|Id of the last message sent in this channel|
|default_permissions|object \| null|false|none|Default permissions assigned to users in this channel|
|role_permissions|object|false|none|Permissions assigned based on role to this channel|
|nsfw|boolean|false|none|Whether this channel is marked as not safe for work|
|voice|object \| null|false|none|Voice Information for when this channel is also a voice channel|
|slowmode|integer(uint64) \| null|false|none|The channel's slowmode delay in seconds|

#### Enumerated Values

|Property|Value|
|---|---|
|channel_type|SavedMessages|
|channel_type|DirectMessage|
|channel_type|Group|
|channel_type|TextChannel|

<h2 id="tocS_OverrideField">OverrideField</h2>
<!-- backwards compatibility -->
<a id="schemaoverridefield"></a>
<a id="schema_OverrideField"></a>
<a id="tocSoverridefield"></a>
<a id="tocsoverridefield"></a>

```json
{
  "a": 0,
  "d": 0
}
```

Representation of a single permission override as it appears on models and in the database

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|a|integer(int64)|true|none|Allow bit flags|
|d|integer(int64)|true|none|Disallow bit flags|

<h2 id="tocS_VoiceInformation">VoiceInformation</h2>
<!-- backwards compatibility -->
<a id="schemavoiceinformation"></a>
<a id="schema_VoiceInformation"></a>
<a id="tocSvoiceinformation"></a>
<a id="tocsvoiceinformation"></a>

```json
{
  "max_users": 1
}
```

Voice information for a channel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_users|integer(uint) \| null|false|none|Maximium amount of users allowed in the voice channel at once|

<h2 id="tocS_MutualResponse">MutualResponse</h2>
<!-- backwards compatibility -->
<a id="schemamutualresponse"></a>
<a id="schema_MutualResponse"></a>
<a id="tocSmutualresponse"></a>
<a id="tocsmutualresponse"></a>

```json
{
  "users": [
    "string"
  ],
  "servers": [
    "string"
  ],
  "channels": [
    "string"
  ]
}
```

Mutual friends, servers, groups and DMs response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[string]|true|none|Array of mutual user IDs that both users are friends with|
|servers|[string]|true|none|Array of mutual server IDs that both users are in|
|channels|[string]|true|none|Array of mutual group and dm IDs that both users are in|

<h2 id="tocS_DataSendFriendRequest">DataSendFriendRequest</h2>
<!-- backwards compatibility -->
<a id="schemadatasendfriendrequest"></a>
<a id="schema_DataSendFriendRequest"></a>
<a id="tocSdatasendfriendrequest"></a>
<a id="tocsdatasendfriendrequest"></a>

```json
{
  "username": "string"
}
```

User lookup information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|Username and discriminator combo separated by #|

<h2 id="tocS_BotWithUserResponse">BotWithUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemabotwithuserresponse"></a>
<a id="schema_BotWithUserResponse"></a>
<a id="tocSbotwithuserresponse"></a>
<a id="tocsbotwithuserresponse"></a>

```json
{
  "user": {
    "_id": "string",
    "username": "string",
    "discriminator": "string",
    "display_name": "string",
    "pronouns": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "relations": [
      {
        "_id": "string",
        "status": {}
      }
    ],
    "badges": 0,
    "status": {
      "text": "string",
      "presence": {}
    },
    "flags": 0,
    "privileged": true,
    "bot": {
      "owner": "string"
    },
    "relationship": {},
    "online": true
  },
  "_id": "string",
  "owner": "string",
  "token": "string",
  "public": true,
  "default_permissions": 0,
  "analytics": true,
  "discoverable": true,
  "interactions_url": "string",
  "terms_of_service_url": "string",
  "privacy_policy_url": "string",
  "flags": 0
}
```

Bot with user response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|[User](#schemauser)|true|none|User|
|_id|string|true|none|Bot Id|
|owner|string|true|none|User Id of the bot owner|
|token|string|true|none|Token used to authenticate requests for this bot|
|public|boolean|true|none|Whether the bot is public (may be invited by anyone)|
|default_permissions|integer(int64) \| null|false|none|The permissions the bot will ask to have upon being invited to a server,|
|analytics|boolean|false|none|Whether to enable analytics|
|discoverable|boolean|false|none|Whether this bot should be publicly discoverable|
|interactions_url|string|false|none|Reserved; URL for handling interactions|
|terms_of_service_url|string|false|none|URL for terms of service|
|privacy_policy_url|string|false|none|URL for privacy policy|
|flags|integer(uint32)|false|none|Enum of bot flags|

<h2 id="tocS_DataCreateBot">DataCreateBot</h2>
<!-- backwards compatibility -->
<a id="schemadatacreatebot"></a>
<a id="schema_DataCreateBot"></a>
<a id="tocSdatacreatebot"></a>
<a id="tocsdatacreatebot"></a>

```json
{
  "name": "string"
}
```

Bot Details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Bot username|

<h2 id="tocS_InviteBotDestination">InviteBotDestination</h2>
<!-- backwards compatibility -->
<a id="schemainvitebotdestination"></a>
<a id="schema_InviteBotDestination"></a>
<a id="tocSinvitebotdestination"></a>
<a id="tocsinvitebotdestination"></a>

```json
{
  "server": "string"
}
```

Where we are inviting a bot to

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|Invite to a server|
|server|string|true|none|Server Id|
|*anyOf*|object|false|none|Invite to a group|
|group|string|true|none|Group Id|

<h2 id="tocS_PublicBot">PublicBot</h2>
<!-- backwards compatibility -->
<a id="schemapublicbot"></a>
<a id="schema_PublicBot"></a>
<a id="tocSpublicbot"></a>
<a id="tocspublicbot"></a>

```json
{
  "_id": "string",
  "username": "string",
  "avatar": "string",
  "description": "string",
  "privacy_policy_url": "string",
  "terms_of_service_url": "string",
  "default_permissions": 0
}
```

Public Bot

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|Bot Id|
|username|string|true|none|Bot Username|
|avatar|string|false|none|Profile Avatar|
|description|string|false|none|Profile Description|
|privacy_policy_url|string|false|none|URL for privacy policy|
|terms_of_service_url|string|false|none|URL for terms of service|
|default_permissions|integer(int64) \| null|false|none|Permissions the bot will ask for|

<h2 id="tocS_FetchBotResponse">FetchBotResponse</h2>
<!-- backwards compatibility -->
<a id="schemafetchbotresponse"></a>
<a id="schema_FetchBotResponse"></a>
<a id="tocSfetchbotresponse"></a>
<a id="tocsfetchbotresponse"></a>

```json
{
  "bot": {
    "_id": "string",
    "owner": "string",
    "token": "string",
    "public": true,
    "default_permissions": 0,
    "analytics": true,
    "discoverable": true,
    "interactions_url": "string",
    "terms_of_service_url": "string",
    "privacy_policy_url": "string",
    "flags": 0
  },
  "user": {
    "_id": "string",
    "username": "string",
    "discriminator": "string",
    "display_name": "string",
    "pronouns": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "relations": [
      {
        "_id": "string",
        "status": {}
      }
    ],
    "badges": 0,
    "status": {
      "text": "string",
      "presence": {}
    },
    "flags": 0,
    "privileged": true,
    "bot": {
      "owner": "string"
    },
    "relationship": {},
    "online": true
  }
}
```

Bot Response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bot|object|true|none|Bot object|
|user|object|true|none|User object|

<h2 id="tocS_Bot">Bot</h2>
<!-- backwards compatibility -->
<a id="schemabot"></a>
<a id="schema_Bot"></a>
<a id="tocSbot"></a>
<a id="tocsbot"></a>

```json
{
  "_id": "string",
  "owner": "string",
  "token": "string",
  "public": true,
  "default_permissions": 0,
  "analytics": true,
  "discoverable": true,
  "interactions_url": "string",
  "terms_of_service_url": "string",
  "privacy_policy_url": "string",
  "flags": 0
}
```

Bot

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|Bot Id|
|owner|string|true|none|User Id of the bot owner|
|token|string|true|none|Token used to authenticate requests for this bot|
|public|boolean|true|none|Whether the bot is public (may be invited by anyone)|
|default_permissions|integer(int64) \| null|false|none|The permissions the bot will ask to have upon being invited to a server,|
|analytics|boolean|false|none|Whether to enable analytics|
|discoverable|boolean|false|none|Whether this bot should be publicly discoverable|
|interactions_url|string|false|none|Reserved; URL for handling interactions|
|terms_of_service_url|string|false|none|URL for terms of service|
|privacy_policy_url|string|false|none|URL for privacy policy|
|flags|integer(uint32)|false|none|Enum of bot flags|

<h2 id="tocS_OwnedBotsResponse">OwnedBotsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaownedbotsresponse"></a>
<a id="schema_OwnedBotsResponse"></a>
<a id="tocSownedbotsresponse"></a>
<a id="tocsownedbotsresponse"></a>

```json
{
  "bots": [
    {
      "_id": "string",
      "owner": "string",
      "token": "string",
      "public": true,
      "default_permissions": 0,
      "analytics": true,
      "discoverable": true,
      "interactions_url": "string",
      "terms_of_service_url": "string",
      "privacy_policy_url": "string",
      "flags": 0
    }
  ],
  "users": [
    {
      "_id": "string",
      "username": "string",
      "discriminator": "string",
      "display_name": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "relations": [
        {
          "_id": "string",
          "status": {}
        }
      ],
      "badges": 0,
      "status": {
        "text": "string",
        "presence": {}
      },
      "flags": 0,
      "privileged": true,
      "bot": {
        "owner": "string"
      },
      "relationship": {},
      "online": true
    }
  ]
}
```

Owned Bots Response

Both lists are sorted by their IDs.

TODO: user should be in bot object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bots|[[Bot](#schemabot)]|true|none|Bot objects|
|users|[[User](#schemauser)]|true|none|User objects|

<h2 id="tocS_DataEditBot">DataEditBot</h2>
<!-- backwards compatibility -->
<a id="schemadataeditbot"></a>
<a id="schema_DataEditBot"></a>
<a id="tocSdataeditbot"></a>
<a id="tocsdataeditbot"></a>

```json
{
  "name": "string",
  "public": true,
  "default_permissions": 0,
  "analytics": true,
  "interactions_url": "string",
  "remove": []
}
```

New Bot Details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|Bot username|
|public|boolean \| null|false|none|Whether the bot can be added by anyone|
|default_permissions|integer(int64) \| null|false|none|The permissions the bot will ask to have upon being invited to a server,|
|analytics|boolean \| null|false|none|Whether analytics should be gathered for this bot<br><br>Must be enabled in order to show up on [Revolt Discover](https://rvlt.gg).|
|interactions_url|string \| null|false|none|Interactions URL|
|remove|[[FieldsBot](#schemafieldsbot)]|false|none|Fields to remove from bot object|

#### Enumerated Values

|Property|Value|
|---|---|
|remove|Token|
|remove|InteractionsURL|

<h2 id="tocS_FieldsBot">FieldsBot</h2>
<!-- backwards compatibility -->
<a id="schemafieldsbot"></a>
<a id="schema_FieldsBot"></a>
<a id="tocSfieldsbot"></a>
<a id="tocsfieldsbot"></a>

```json
"Token"
```

Optional fields on bot object

<h2 id="tocS_DiscoverRequest">DiscoverRequest</h2>
<!-- backwards compatibility -->
<a id="schemadiscoverrequest"></a>
<a id="schema_DiscoverRequest"></a>
<a id="tocSdiscoverrequest"></a>
<a id="tocsdiscoverrequest"></a>

```json
{
  "type": {},
  "id": "string",
  "status": {}
}
```

Discover request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|The type of request.|
|id|string|true|none|The ID of the bot/server|
|status|object|true|none|status of the request|

<h2 id="tocS_DiscoverRequestType">DiscoverRequestType</h2>
<!-- backwards compatibility -->
<a id="schemadiscoverrequesttype"></a>
<a id="schema_DiscoverRequestType"></a>
<a id="tocSdiscoverrequesttype"></a>
<a id="tocsdiscoverrequesttype"></a>

```json
"Bot"
```

<h2 id="tocS_DiscoverRequestStatus">DiscoverRequestStatus</h2>
<!-- backwards compatibility -->
<a id="schemadiscoverrequeststatus"></a>
<a id="schema_DiscoverRequestStatus"></a>
<a id="tocSdiscoverrequeststatus"></a>
<a id="tocsdiscoverrequeststatus"></a>

```json
"Pending"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|object|false|none|none|
|Removed|string \| null|true|none|none|
|*oneOf*|object|false|none|none|
|Denied|string \| null|true|none|none|
|*oneOf*|object|false|none|none|
|Approved|string \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|Pending|
|*oneOf*|UnderReview|

<h2 id="tocS_DataEditChannel">DataEditChannel</h2>
<!-- backwards compatibility -->
<a id="schemadataeditchannel"></a>
<a id="schema_DataEditChannel"></a>
<a id="tocSdataeditchannel"></a>
<a id="tocsdataeditchannel"></a>

```json
{
  "name": "string",
  "description": "string",
  "owner": "string",
  "icon": "string",
  "nsfw": true,
  "archived": true,
  "voice": {
    "max_users": 1
  },
  "slowmode": 0,
  "remove": []
}
```

New webhook information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|Channel name|
|description|string \| null|false|none|Channel description|
|owner|string \| null|false|none|Group owner|
|icon|string \| null|false|none|Icon<br><br>Provide an Autumn attachment Id.|
|nsfw|boolean \| null|false|none|Whether this channel is age-restricted|
|archived|boolean \| null|false|none|Whether this channel is archived|
|voice|object \| null|false|none|Voice Information for voice channels|
|slowmode|integer(uint64) \| null|false|none|The channel's slow mode delay in seconds, up to 6 hours|
|remove|[[FieldsChannel](#schemafieldschannel)]|false|none|Fields to remove from channel|

#### Enumerated Values

|Property|Value|
|---|---|
|remove|Description|
|remove|Icon|
|remove|DefaultPermissions|
|remove|Voice|
|remove|Slowmode|

<h2 id="tocS_FieldsChannel">FieldsChannel</h2>
<!-- backwards compatibility -->
<a id="schemafieldschannel"></a>
<a id="schema_FieldsChannel"></a>
<a id="tocSfieldschannel"></a>
<a id="tocsfieldschannel"></a>

```json
"Description"
```

Optional fields on channel object

<h2 id="tocS_Invite">Invite</h2>
<!-- backwards compatibility -->
<a id="schemainvite"></a>
<a id="schema_Invite"></a>
<a id="tocSinvite"></a>
<a id="tocsinvite"></a>

```json
{
  "type": "Server",
  "_id": "string",
  "server": "string",
  "creator": "string",
  "channel": "string",
  "max_uses": 0,
  "uses": 0,
  "expires": {}
}
```

Invite

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|Invite to a specific server channel|
|type|string|true|none|none|
|_id|string|true|none|Invite code|
|server|string|true|none|Id of the server this invite points to|
|creator|string|true|none|Id of user who created this invite|
|channel|string|true|none|Id of the server channel this invite points to|
|max_uses|integer(uint64) \| null|false|none|Maximum number of times this invite can be used|
|uses|integer(uint64)|true|none|Number of times this invite has been used|
|expires|object \| null|false|none|Timestamp at which this invite expires|
|*oneOf*|object|false|none|Invite to a group channel|
|type|string|true|none|none|
|_id|string|true|none|Invite code|
|creator|string|true|none|Id of user who created this invite|
|channel|string|true|none|Id of the group channel this invite points to|
|max_uses|integer(uint64) \| null|false|none|Maximum number of times this invite can be used|
|uses|integer(uint64)|true|none|Number of times this invite has been used|
|expires|object \| null|false|none|Timestamp at which this invite expires|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Server|
|type|Group|

<h2 id="tocS_ISO8601 Timestamp">ISO8601 Timestamp</h2>
<!-- backwards compatibility -->
<a id="schemaiso8601 timestamp"></a>
<a id="schema_ISO8601 Timestamp"></a>
<a id="tocSiso8601 timestamp"></a>
<a id="tocsiso8601 timestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

ISO8601 formatted timestamp

<h2 id="tocS_DataCreateInvite">DataCreateInvite</h2>
<!-- backwards compatibility -->
<a id="schemadatacreateinvite"></a>
<a id="schema_DataCreateInvite"></a>
<a id="tocSdatacreateinvite"></a>
<a id="tocsdatacreateinvite"></a>

```json
{
  "max_uses": 1,
  "expires": {}
}
```

Create Invite

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_uses|integer(uint64) \| null|false|none|Maximum number of times this invite can be used|
|expires|object \| null|false|none|Number of seconds until this invite expires|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "_id": "string",
  "nonce": "string",
  "channel": "string",
  "author": "string",
  "user": {
    "_id": "string",
    "username": "string",
    "discriminator": "string",
    "display_name": "string",
    "pronouns": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "relations": [
      {
        "_id": "string",
        "status": {}
      }
    ],
    "badges": 0,
    "status": {
      "text": "string",
      "presence": {}
    },
    "flags": 0,
    "privileged": true,
    "bot": {
      "owner": "string"
    },
    "relationship": {},
    "online": true
  },
  "member": {
    "_id": {
      "server": "string",
      "user": "string"
    },
    "joined_at": {},
    "nickname": "string",
    "pronouns": "string",
    "avatar": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "roles": [
      "string"
    ],
    "timeout": {},
    "can_publish": true,
    "can_receive": true
  },
  "webhook": {
    "name": "string",
    "avatar": "string"
  },
  "content": "string",
  "system": {
    "type": "text",
    "content": "string"
  },
  "attachments": [
    {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    }
  ],
  "edited": {},
  "embeds": [
    {
      "type": "Website",
      "url": "string",
      "original_url": "string",
      "special": {
        "type": "None"
      },
      "title": "string",
      "description": "string",
      "image": {
        "url": "string",
        "width": 0,
        "height": 0,
        "size": {}
      },
      "video": {
        "url": "string",
        "width": 0,
        "height": 0
      },
      "site_name": "string",
      "icon_url": "string",
      "colour": "string"
    }
  ],
  "mentions": [
    "string"
  ],
  "role_mentions": [
    "string"
  ],
  "replies": [
    "string"
  ],
  "reactions": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "interactions": {
    "reactions": [
      "string"
    ],
    "restrict_reactions": true
  },
  "masquerade": {
    "name": "string",
    "avatar": "string",
    "colour": "string"
  },
  "pinned": true,
  "flags": 0
}
```

Message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|Unique Id|
|nonce|string \| null|false|none|Unique value generated by client sending this message|
|channel|string|true|none|Id of the channel this message was sent in|
|author|string|true|none|Id of the user or webhook that sent this message|
|user|object \| null|false|none|The user that sent this message|
|member|object \| null|false|none|The member that sent this message|
|webhook|object \| null|false|none|The webhook that sent this message|
|content|string \| null|false|none|Message content|
|system|object \| null|false|none|System message|
|attachments|[[File](#schemafile)]|false|none|Array of attachments|
|edited|object \| null|false|none|Time at which this message was last edited|
|embeds|[[Embed](#schemaembed)]|false|none|Attached embeds to this message|
|mentions|[string]|false|none|Array of user ids mentioned in this message|
|role_mentions|[string]|false|none|Array of role ids mentioned in this message|
|replies|[string]|false|none|Array of message ids this message is replying to|
|reactions|object|false|none|Hashmap of emoji IDs to array of user IDs|
|interactions|object|false|none|Information about how this message should be interacted with|
|masquerade|object \| null|false|none|Name and / or avatar overrides for this message|
|pinned|boolean \| null|false|none|Whether or not the message in pinned|
|flags|integer(uint32)|false|none|Bitfield of message flags<br><br>https://docs.rs/revolt-models/latest/revolt_models/v0/enum.MessageFlags.html|

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "_id": {
    "server": "string",
    "user": "string"
  },
  "joined_at": {},
  "nickname": "string",
  "pronouns": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "roles": [
    "string"
  ],
  "timeout": {},
  "can_publish": true,
  "can_receive": true
}
```

Server Member

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|object|true|none|Unique member id|
|joined_at|object|true|none|Time at which this user joined the server|
|nickname|string \| null|false|none|Member's nickname|
|pronouns|string \| null|false|none|Member's pronouns|
|avatar|object \| null|false|none|Avatar attachment|
|roles|[string]|false|none|Member's roles|
|timeout|object \| null|false|none|Timestamp this member is timed out until|
|can_publish|boolean|false|none|Whether the member is server-wide voice muted|
|can_receive|boolean|false|none|Whether the member is server-wide voice deafened|

<h2 id="tocS_MemberCompositeKey">MemberCompositeKey</h2>
<!-- backwards compatibility -->
<a id="schemamembercompositekey"></a>
<a id="schema_MemberCompositeKey"></a>
<a id="tocSmembercompositekey"></a>
<a id="tocsmembercompositekey"></a>

```json
{
  "server": "string",
  "user": "string"
}
```

Composite primary key consisting of server and user id

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|server|string|true|none|Server Id|
|user|string|true|none|User Id|

<h2 id="tocS_MessageWebhook">MessageWebhook</h2>
<!-- backwards compatibility -->
<a id="schemamessagewebhook"></a>
<a id="schema_MessageWebhook"></a>
<a id="tocSmessagewebhook"></a>
<a id="tocsmessagewebhook"></a>

```json
{
  "name": "string",
  "avatar": "string"
}
```

Information about the webhook bundled with Message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|avatar|string \| null|false|none|none|

<h2 id="tocS_SystemMessage">SystemMessage</h2>
<!-- backwards compatibility -->
<a id="schemasystemmessage"></a>
<a id="schema_SystemMessage"></a>
<a id="tocSsystemmessage"></a>
<a id="tocssystemmessage"></a>

```json
{
  "type": "text",
  "content": "string"
}
```

System Event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|content|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|id|string|true|none|none|
|by|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|id|string|true|none|none|
|by|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|id|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|id|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|id|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|id|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|name|string|true|none|none|
|by|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|by|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|by|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|from|string|true|none|none|
|to|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|id|string|true|none|none|
|by|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|id|string|true|none|none|
|by|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|by|string|true|none|none|
|finished_at|object \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|user_added|
|type|user_remove|
|type|user_joined|
|type|user_left|
|type|user_kicked|
|type|user_banned|
|type|channel_renamed|
|type|channel_description_changed|
|type|channel_icon_changed|
|type|channel_ownership_changed|
|type|message_pinned|
|type|message_unpinned|
|type|call_started|

<h2 id="tocS_Embed">Embed</h2>
<!-- backwards compatibility -->
<a id="schemaembed"></a>
<a id="schema_Embed"></a>
<a id="tocSembed"></a>
<a id="tocsembed"></a>

```json
{
  "type": "Website",
  "url": "string",
  "original_url": "string",
  "special": {
    "type": "None"
  },
  "title": "string",
  "description": "string",
  "image": {
    "url": "string",
    "width": 0,
    "height": 0,
    "size": {}
  },
  "video": {
    "url": "string",
    "width": 0,
    "height": 0
  },
  "site_name": "string",
  "icon_url": "string",
  "colour": "string"
}
```

Embed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|Website metadata|
|type|string|true|none|none|
|url|string \| null|false|none|Direct URL to web page|
|original_url|string \| null|false|none|Original direct URL|
|special|object \| null|false|none|Remote content|
|title|string \| null|false|none|Title of website|
|description|string \| null|false|none|Description of website|
|image|object \| null|false|none|Embedded image|
|video|object \| null|false|none|Embedded video|
|site_name|string \| null|false|none|Site name|
|icon_url|string \| null|false|none|URL to site icon|
|colour|string \| null|false|none|CSS Colour|
|*oneOf*|object|false|none|Image|
|type|string|true|none|none|
|url|string|true|none|URL to the original image|
|width|integer(uint)|true|none|Width of the image|
|height|integer(uint)|true|none|Height of the image|
|size|object|true|none|Positioning and size|
|*oneOf*|object|false|none|Video|
|type|string|true|none|none|
|url|string|true|none|URL to the original video|
|width|integer(uint)|true|none|Width of the video|
|height|integer(uint)|true|none|Height of the video|
|*oneOf*|object|false|none|Text Embed|
|type|string|true|none|none|
|icon_url|string \| null|false|none|URL to icon|
|url|string \| null|false|none|URL for title|
|title|string \| null|false|none|Title of text embed|
|description|string \| null|false|none|Description of text embed|
|media|object \| null|false|none|ID of uploaded autumn file|
|colour|string \| null|false|none|CSS Colour|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Website|
|type|Image|
|type|Video|
|type|Text|
|type|None|

<h2 id="tocS_Special">Special</h2>
<!-- backwards compatibility -->
<a id="schemaspecial"></a>
<a id="schema_Special"></a>
<a id="tocSspecial"></a>
<a id="tocsspecial"></a>

```json
{
  "type": "None"
}
```

Information about special remote content

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|No remote content|
|type|string|true|none|none|
|*oneOf*|object|false|none|Content hint that this contains a GIF<br><br>Use metadata to find video or image to play|
|type|string|true|none|none|
|*oneOf*|object|false|none|YouTube video|
|type|string|true|none|none|
|id|string|true|none|none|
|creator_name|string \| null|false|none|none|
|creator_url|string \| null|false|none|none|
|timestamp|string \| null|false|none|none|
|*oneOf*|object|false|none|Lightspeed.tv stream|
|type|string|true|none|none|
|content_type|[LightspeedType](#schemalightspeedtype)|true|none|Type of remote Lightspeed.tv content|
|id|string|true|none|none|
|*oneOf*|object|false|none|Twitch stream or clip|
|type|string|true|none|none|
|content_type|[TwitchType](#schematwitchtype)|true|none|Type of remote Twitch content|
|id|string|true|none|none|
|*oneOf*|object|false|none|X/Twitter post|
|type|string|true|none|none|
|id|string|true|none|none|
|text|string|true|none|none|
|author_name|string|true|none|none|
|author_handle|string|true|none|none|
|author_url|string|true|none|none|
|author_avatar_url|string \| null|false|none|none|
|created_timestamp|integer(uint)|true|none|none|
|quote_id|string \| null|false|none|none|
|quote_text|string \| null|false|none|none|
|quote_author_handle|string \| null|false|none|none|
|quote_author_name|string \| null|false|none|none|
|quote_author_url|string \| null|false|none|none|
|replies|integer(uint)|true|none|none|
|reposts|integer(uint)|true|none|none|
|likes|integer(uint)|true|none|none|
|views|integer(uint)|true|none|none|
|*oneOf*|object|false|none|Spotify track|
|type|string|true|none|none|
|content_type|string|true|none|none|
|id|string|true|none|none|
|*oneOf*|object|false|none|Soundcloud track|
|type|string|true|none|none|
|*oneOf*|object|false|none|Bandcamp track|
|type|string|true|none|none|
|content_type|[BandcampType](#schemabandcamptype)|true|none|Type of remote Bandcamp content|
|id|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|album_id|string|true|none|none|
|track_id|string \| null|false|none|none|
|*oneOf*|object|false|none|Streamable Video|
|type|string|true|none|none|
|id|string|true|none|none|
|*oneOf*|object|false|none|Gifbox|
|type|string|true|none|none|
|poster_url|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|None|
|type|GIF|
|type|YouTube|
|type|Lightspeed|
|content_type|Channel|
|type|Twitch|
|content_type|Channel|
|content_type|Video|
|content_type|Clip|
|type|XApp|
|type|Spotify|
|type|Soundcloud|
|type|Bandcamp|
|content_type|Album|
|content_type|Track|
|type|AppleMusic|
|type|Streamable|
|type|Gifbox|

<h2 id="tocS_LightspeedType">LightspeedType</h2>
<!-- backwards compatibility -->
<a id="schemalightspeedtype"></a>
<a id="schema_LightspeedType"></a>
<a id="tocSlightspeedtype"></a>
<a id="tocslightspeedtype"></a>

```json
"Channel"
```

Type of remote Lightspeed.tv content

<h2 id="tocS_TwitchType">TwitchType</h2>
<!-- backwards compatibility -->
<a id="schematwitchtype"></a>
<a id="schema_TwitchType"></a>
<a id="tocStwitchtype"></a>
<a id="tocstwitchtype"></a>

```json
"Channel"
```

Type of remote Twitch content

<h2 id="tocS_BandcampType">BandcampType</h2>
<!-- backwards compatibility -->
<a id="schemabandcamptype"></a>
<a id="schema_BandcampType"></a>
<a id="tocSbandcamptype"></a>
<a id="tocsbandcamptype"></a>

```json
"Album"
```

Type of remote Bandcamp content

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "url": "string",
  "width": 0,
  "height": 0,
  "size": {}
}
```

Image

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|URL to the original image|
|width|integer(uint)|true|none|Width of the image|
|height|integer(uint)|true|none|Height of the image|
|size|object|true|none|Positioning and size|

<h2 id="tocS_ImageSize">ImageSize</h2>
<!-- backwards compatibility -->
<a id="schemaimagesize"></a>
<a id="schema_ImageSize"></a>
<a id="tocSimagesize"></a>
<a id="tocsimagesize"></a>

```json
"Large"
```

Image positioning and size

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|Show large preview at the bottom of the embed|
|*oneOf*|string|false|none|Show small preview to the side of the embed|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|Large|
|*oneOf*|Preview|

<h2 id="tocS_Video">Video</h2>
<!-- backwards compatibility -->
<a id="schemavideo"></a>
<a id="schema_Video"></a>
<a id="tocSvideo"></a>
<a id="tocsvideo"></a>

```json
{
  "url": "string",
  "width": 0,
  "height": 0
}
```

Video

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|URL to the original video|
|width|integer(uint)|true|none|Width of the video|
|height|integer(uint)|true|none|Height of the video|

<h2 id="tocS_Interactions">Interactions</h2>
<!-- backwards compatibility -->
<a id="schemainteractions"></a>
<a id="schema_Interactions"></a>
<a id="tocSinteractions"></a>
<a id="tocsinteractions"></a>

```json
{
  "reactions": [
    "string"
  ],
  "restrict_reactions": true
}
```

Information to guide interactions on this message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reactions|[string]|false|none|Reactions which should always appear and be distinct|
|restrict_reactions|boolean|false|none|Whether reactions should be restricted to the given list<br><br>Can only be set to true if reactions list is of at least length 1|

<h2 id="tocS_Masquerade">Masquerade</h2>
<!-- backwards compatibility -->
<a id="schemamasquerade"></a>
<a id="schema_Masquerade"></a>
<a id="tocSmasquerade"></a>
<a id="tocsmasquerade"></a>

```json
{
  "name": "string",
  "avatar": "string",
  "colour": "string"
}
```

Name and / or avatar override information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|Replace the display name shown on this message|
|avatar|string \| null|false|none|Replace the avatar shown on this message (URL to image file)|
|colour|string \| null|false|none|Replace the display role colour shown on this message<br><br>Must have `ManageRole` permission to use|

<h2 id="tocS_DataMessageSend">DataMessageSend</h2>
<!-- backwards compatibility -->
<a id="schemadatamessagesend"></a>
<a id="schema_DataMessageSend"></a>
<a id="tocSdatamessagesend"></a>
<a id="tocsdatamessagesend"></a>

```json
{
  "nonce": "string",
  "content": "string",
  "attachments": [
    "string"
  ],
  "replies": [
    {
      "id": "string",
      "mention": true,
      "fail_if_not_exists": true
    }
  ],
  "embeds": [
    {
      "icon_url": "string",
      "url": "string",
      "title": "string",
      "description": "string",
      "media": "string",
      "colour": "string"
    }
  ],
  "masquerade": {
    "name": "string",
    "avatar": "string",
    "colour": "string"
  },
  "interactions": {
    "reactions": [
      "string"
    ],
    "restrict_reactions": true
  },
  "flags": 0
}
```

Message to send

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nonce|string \| null|false|none|Unique token to prevent duplicate message sending<br><br>**This is deprecated and replaced by `Idempotency-Key`!**|
|content|string \| null|false|none|Message content to send|
|attachments|[string]|false|none|Attachments to include in message|
|replies|[[ReplyIntent](#schemareplyintent)]|false|none|Messages to reply to|
|embeds|[[SendableEmbed](#schemasendableembed)]|false|none|Embeds to include in message<br><br>Text embed content contributes to the content length cap|
|masquerade|object \| null|false|none|Masquerade to apply to this message|
|interactions|object \| null|false|none|Information about how this message should be interacted with|
|flags|integer(uint32) \| null|false|none|Bitfield of message flags<br><br>https://docs.rs/revolt-models/latest/revolt_models/v0/enum.MessageFlags.html|

<h2 id="tocS_ReplyIntent">ReplyIntent</h2>
<!-- backwards compatibility -->
<a id="schemareplyintent"></a>
<a id="schema_ReplyIntent"></a>
<a id="tocSreplyintent"></a>
<a id="tocsreplyintent"></a>

```json
{
  "id": "string",
  "mention": true,
  "fail_if_not_exists": true
}
```

What this message should reply to and how

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Message Id|
|mention|boolean|true|none|Whether this reply should mention the message's author|
|fail_if_not_exists|boolean \| null|false|none|Whether to error if the referenced message doesn't exist. Otherwise, send a message without this reply. Default is true.|

<h2 id="tocS_SendableEmbed">SendableEmbed</h2>
<!-- backwards compatibility -->
<a id="schemasendableembed"></a>
<a id="schema_SendableEmbed"></a>
<a id="tocSsendableembed"></a>
<a id="tocssendableembed"></a>

```json
{
  "icon_url": "string",
  "url": "string",
  "title": "string",
  "description": "string",
  "media": "string",
  "colour": "string"
}
```

Representation of a text embed before it is sent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|icon_url|string \| null|false|none|none|
|url|string \| null|false|none|none|
|title|string \| null|false|none|none|
|description|string \| null|false|none|none|
|media|string \| null|false|none|none|
|colour|string \| null|false|none|none|

<h2 id="tocS_BulkMessageResponse">BulkMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkmessageresponse"></a>
<a id="schema_BulkMessageResponse"></a>
<a id="tocSbulkmessageresponse"></a>
<a id="tocsbulkmessageresponse"></a>

```json
[
  {
    "_id": "string",
    "nonce": "string",
    "channel": "string",
    "author": "string",
    "user": {
      "_id": "string",
      "username": "string",
      "discriminator": "string",
      "display_name": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "relations": [
        {
          "_id": "string",
          "status": {}
        }
      ],
      "badges": 0,
      "status": {
        "text": "string",
        "presence": {}
      },
      "flags": 0,
      "privileged": true,
      "bot": {
        "owner": "string"
      },
      "relationship": {},
      "online": true
    },
    "member": {
      "_id": {
        "server": "string",
        "user": "string"
      },
      "joined_at": {},
      "nickname": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "roles": [
        "string"
      ],
      "timeout": {},
      "can_publish": true,
      "can_receive": true
    },
    "webhook": {
      "name": "string",
      "avatar": "string"
    },
    "content": "string",
    "system": {
      "type": "text",
      "content": "string"
    },
    "attachments": [
      {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      }
    ],
    "edited": {},
    "embeds": [
      {
        "type": "Website",
        "url": "string",
        "original_url": "string",
        "special": {
          "type": "None"
        },
        "title": "string",
        "description": "string",
        "image": {
          "url": "string",
          "width": 0,
          "height": 0,
          "size": {}
        },
        "video": {
          "url": "string",
          "width": 0,
          "height": 0
        },
        "site_name": "string",
        "icon_url": "string",
        "colour": "string"
      }
    ],
    "mentions": [
      "string"
    ],
    "role_mentions": [
      "string"
    ],
    "replies": [
      "string"
    ],
    "reactions": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "interactions": {
      "reactions": [
        "string"
      ],
      "restrict_reactions": true
    },
    "masquerade": {
      "name": "string",
      "avatar": "string",
      "colour": "string"
    },
    "pinned": true,
    "flags": 0
  }
]
```

Bulk Message Response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[[Message](#schemamessage)]|false|none|none|
|*anyOf*|object|false|none|none|
|messages|[[Message](#schemamessage)]|true|none|List of messages|
|users|[[User](#schemauser)]|true|none|List of users|
|members|[[Member](#schemamember)]|false|none|List of members|

<h2 id="tocS_MessageSort">MessageSort</h2>
<!-- backwards compatibility -->
<a id="schemamessagesort"></a>
<a id="schema_MessageSort"></a>
<a id="tocSmessagesort"></a>
<a id="tocsmessagesort"></a>

```json
"Relevance"
```

Message Sort

Sort used for retrieving messages

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|Sort by the most relevant messages|
|*oneOf*|string|false|none|Sort by the newest messages first|
|*oneOf*|string|false|none|Sort by the oldest messages first|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|Relevance|
|*oneOf*|Latest|
|*oneOf*|Oldest|

<h2 id="tocS_DataMessageSearch">DataMessageSearch</h2>
<!-- backwards compatibility -->
<a id="schemadatamessagesearch"></a>
<a id="schema_DataMessageSearch"></a>
<a id="tocSdatamessagesearch"></a>
<a id="tocsdatamessagesearch"></a>

```json
{
  "query": "string",
  "pinned": true,
  "limit": 1,
  "before": "stringstringstringstringst",
  "after": "stringstringstringstringst",
  "sort": "Relevance",
  "include_users": true
}
```

Options for searching for messages

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string \| null|false|none|Full-text search query<br><br>See [MongoDB documentation](https://docs.mongodb.com/manual/text-search/#-text-operator) for more information.|
|pinned|boolean \| null|false|none|Whether to only search for pinned messages, cannot be sent with `query`.|
|limit|integer(int64) \| null|false|none|Maximum number of messages to fetch|
|before|string \| null|false|none|Message id before which messages should be fetched|
|after|string \| null|false|none|Message id after which messages should be fetched|
|sort|object|false|none|Message sort direction<br><br>By default, it will be sorted by latest.|
|include_users|boolean \| null|false|none|Whether to include user (and member, if server channel) objects|

<h2 id="tocS_DataEditMessage">DataEditMessage</h2>
<!-- backwards compatibility -->
<a id="schemadataeditmessage"></a>
<a id="schema_DataEditMessage"></a>
<a id="tocSdataeditmessage"></a>
<a id="tocsdataeditmessage"></a>

```json
{
  "content": "string",
  "embeds": [
    {
      "icon_url": "string",
      "url": "string",
      "title": "string",
      "description": "string",
      "media": "string",
      "colour": "string"
    }
  ]
}
```

Changes to make to message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string \| null|false|none|New message content|
|embeds|[[SendableEmbed](#schemasendableembed)]|false|none|Embeds to include in the message|

<h2 id="tocS_OptionsBulkDelete">OptionsBulkDelete</h2>
<!-- backwards compatibility -->
<a id="schemaoptionsbulkdelete"></a>
<a id="schema_OptionsBulkDelete"></a>
<a id="tocSoptionsbulkdelete"></a>
<a id="tocsoptionsbulkdelete"></a>

```json
{
  "ids": [
    "string"
  ]
}
```

Options for bulk deleting messages

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|true|none|Message IDs|

<h2 id="tocS_DataCreateGroup">DataCreateGroup</h2>
<!-- backwards compatibility -->
<a id="schemadatacreategroup"></a>
<a id="schema_DataCreateGroup"></a>
<a id="tocSdatacreategroup"></a>
<a id="tocsdatacreategroup"></a>

```json
{
  "name": "string",
  "description": "string",
  "icon": "string",
  "users": [],
  "nsfw": true
}
```

Create new group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Group name|
|description|string \| null|false|none|Group description|
|icon|string \| null|false|none|Group icon|
|users|[string]|false|none|Array of user IDs to add to the group<br><br>Must be friends with these users.|
|nsfw|boolean \| null|false|none|Whether this group is age-restricted|

<h2 id="tocS_CreateVoiceUserResponse">CreateVoiceUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatevoiceuserresponse"></a>
<a id="schema_CreateVoiceUserResponse"></a>
<a id="tocScreatevoiceuserresponse"></a>
<a id="tocscreatevoiceuserresponse"></a>

```json
{
  "token": "string",
  "url": "string"
}
```

Voice server token response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|Token for authenticating with the voice server|
|url|string|true|none|Url of the livekit server to connect to|

<h2 id="tocS_DataJoinCall">DataJoinCall</h2>
<!-- backwards compatibility -->
<a id="schemadatajoincall"></a>
<a id="schema_DataJoinCall"></a>
<a id="tocSdatajoincall"></a>
<a id="tocsdatajoincall"></a>

```json
{
  "node": "string",
  "force_disconnect": true,
  "recipients": [
    "string"
  ]
}
```

Join a voice channel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|node|string \| null|false|none|Name of the node to join|
|force_disconnect|boolean \| null|false|none|Whether to force disconnect any other existing voice connections<br><br>Useful for disconnecting on another device and joining on a new.|
|recipients|[string]|false|none|Users which should be notified of the call starting<br><br>Only used when the user is the first one connected.|

<h2 id="tocS_DataSetRolePermissions">DataSetRolePermissions</h2>
<!-- backwards compatibility -->
<a id="schemadatasetrolepermissions"></a>
<a id="schema_DataSetRolePermissions"></a>
<a id="tocSdatasetrolepermissions"></a>
<a id="tocsdatasetrolepermissions"></a>

```json
{
  "permissions": {
    "allow": 0,
    "deny": 0
  }
}
```

New role permissions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|object|true|none|Allow / deny values to set for this role|

<h2 id="tocS_Override">Override</h2>
<!-- backwards compatibility -->
<a id="schemaoverride"></a>
<a id="schema_Override"></a>
<a id="tocSoverride"></a>
<a id="tocsoverride"></a>

```json
{
  "allow": 0,
  "deny": 0
}
```

Representation of a single permission override

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow|integer(uint64)|true|none|Allow bit flags|
|deny|integer(uint64)|true|none|Disallow bit flags|

<h2 id="tocS_DataDefaultChannelPermissions">DataDefaultChannelPermissions</h2>
<!-- backwards compatibility -->
<a id="schemadatadefaultchannelpermissions"></a>
<a id="schema_DataDefaultChannelPermissions"></a>
<a id="tocSdatadefaultchannelpermissions"></a>
<a id="tocsdatadefaultchannelpermissions"></a>

```json
{
  "permissions": 0
}
```

New default permissions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|permissions|integer(uint64)|true|none|Permission values to set for members in a `Group`|
|*anyOf*|object|false|none|none|
|permissions|object|true|none|Allow / deny values to set for members in this server channel|

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "id": "string",
  "name": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "creator_id": "string",
  "channel_id": "string",
  "permissions": 0,
  "token": "string"
}
```

Webhook

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Webhook Id|
|name|string|true|none|The name of the webhook|
|avatar|object \| null|false|none|The avatar of the webhook|
|creator_id|string|true|none|User that created this webhook|
|channel_id|string|true|none|The channel this webhook belongs to|
|permissions|integer(uint64)|true|none|The permissions for the webhook|
|token|string \| null|false|none|The private token for the webhook|

<h2 id="tocS_CreateWebhookBody">CreateWebhookBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebhookbody"></a>
<a id="schema_CreateWebhookBody"></a>
<a id="tocScreatewebhookbody"></a>
<a id="tocscreatewebhookbody"></a>

```json
{
  "name": "string",
  "avatar": "string"
}
```

Information for the webhook

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|avatar|string \| null|false|none|none|

<h2 id="tocS_CreateServerLegacyResponse">CreateServerLegacyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateserverlegacyresponse"></a>
<a id="schema_CreateServerLegacyResponse"></a>
<a id="tocScreateserverlegacyresponse"></a>
<a id="tocscreateserverlegacyresponse"></a>

```json
{
  "server": {
    "_id": "string",
    "owner": "string",
    "name": "string",
    "description": "string",
    "channels": [
      "string"
    ],
    "categories": [
      {
        "id": "string",
        "title": "string",
        "channels": [
          "string"
        ]
      }
    ],
    "system_messages": {
      "user_joined": "string",
      "user_left": "string",
      "user_kicked": "string",
      "user_banned": "string"
    },
    "roles": {
      "property1": {
        "_id": "string",
        "name": "string",
        "permissions": {
          "a": 0,
          "d": 0
        },
        "colour": "string",
        "hoist": true,
        "rank": 0,
        "icon": {
          "_id": "string",
          "tag": "string",
          "filename": "string",
          "metadata": {
            "type": "File"
          },
          "content_type": "string",
          "size": 0,
          "deleted": true,
          "reported": true,
          "message_id": "string",
          "user_id": "string",
          "server_id": "string",
          "object_id": "string"
        },
        "owner": "string"
      },
      "property2": {
        "_id": "string",
        "name": "string",
        "permissions": {
          "a": 0,
          "d": 0
        },
        "colour": "string",
        "hoist": true,
        "rank": 0,
        "icon": {
          "_id": "string",
          "tag": "string",
          "filename": "string",
          "metadata": {
            "type": "File"
          },
          "content_type": "string",
          "size": 0,
          "deleted": true,
          "reported": true,
          "message_id": "string",
          "user_id": "string",
          "server_id": "string",
          "object_id": "string"
        },
        "owner": "string"
      }
    },
    "default_permissions": 0,
    "icon": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "banner": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "flags": 0,
    "nsfw": true,
    "analytics": true,
    "discoverable": true,
    "approximate_member_count": 0
  },
  "channels": [
    {
      "channel_type": "SavedMessages",
      "_id": "string",
      "user": "string"
    }
  ]
}
```

Information returned when creating server

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|server|object|true|none|Server object|
|channels|[[Channel](#schemachannel)]|true|none|Default channels|

<h2 id="tocS_Server">Server</h2>
<!-- backwards compatibility -->
<a id="schemaserver"></a>
<a id="schema_Server"></a>
<a id="tocSserver"></a>
<a id="tocsserver"></a>

```json
{
  "_id": "string",
  "owner": "string",
  "name": "string",
  "description": "string",
  "channels": [
    "string"
  ],
  "categories": [
    {
      "id": "string",
      "title": "string",
      "channels": [
        "string"
      ]
    }
  ],
  "system_messages": {
    "user_joined": "string",
    "user_left": "string",
    "user_kicked": "string",
    "user_banned": "string"
  },
  "roles": {
    "property1": {
      "_id": "string",
      "name": "string",
      "permissions": {
        "a": 0,
        "d": 0
      },
      "colour": "string",
      "hoist": true,
      "rank": 0,
      "icon": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "owner": "string"
    },
    "property2": {
      "_id": "string",
      "name": "string",
      "permissions": {
        "a": 0,
        "d": 0
      },
      "colour": "string",
      "hoist": true,
      "rank": 0,
      "icon": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "owner": "string"
    }
  },
  "default_permissions": 0,
  "icon": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "banner": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "flags": 0,
  "nsfw": true,
  "analytics": true,
  "discoverable": true,
  "approximate_member_count": 0
}
```

Server

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|Unique Id|
|owner|string|true|none|User id of the owner|
|name|string|true|none|Name of the server|
|description|string \| null|false|none|Description for the server|
|channels|[string]|true|none|Channels within this server|
|categories|[[Category](#schemacategory)]|false|none|Categories for this server|
|system_messages|object \| null|false|none|Configuration for sending system event messages|
|roles|object|false|none|Roles for this server|
|default_permissions|integer(int64)|true|none|Default set of server and channel permissions|
|icon|object \| null|false|none|Icon attachment|
|banner|object \| null|false|none|Banner attachment|
|flags|integer(uint32)|false|none|Bitfield of server flags|
|nsfw|boolean|false|none|Whether this server is flagged as not safe for work|
|analytics|boolean|false|none|Whether to enable analytics|
|discoverable|boolean|false|none|Whether this server should be publicly discoverable|
|approximate_member_count|integer(uint)|true|none|Approximate amount of members in the server|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "id": "string",
  "title": "string",
  "channels": [
    "string"
  ]
}
```

Channel category

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique ID for this category|
|title|string|true|none|Title for this category|
|channels|[string]|true|none|Channels in this category|

<h2 id="tocS_SystemMessageChannels">SystemMessageChannels</h2>
<!-- backwards compatibility -->
<a id="schemasystemmessagechannels"></a>
<a id="schema_SystemMessageChannels"></a>
<a id="tocSsystemmessagechannels"></a>
<a id="tocssystemmessagechannels"></a>

```json
{
  "user_joined": "string",
  "user_left": "string",
  "user_kicked": "string",
  "user_banned": "string"
}
```

System message channel assignments

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_joined|string \| null|false|none|ID of channel to send user join messages in|
|user_left|string \| null|false|none|ID of channel to send user left messages in|
|user_kicked|string \| null|false|none|ID of channel to send user kicked messages in|
|user_banned|string \| null|false|none|ID of channel to send user banned messages in|

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "_id": "string",
  "name": "string",
  "permissions": {
    "a": 0,
    "d": 0
  },
  "colour": "string",
  "hoist": true,
  "rank": 0,
  "icon": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "owner": "string"
}
```

Role

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|Unique Id|
|name|string|true|none|Role name|
|permissions|object|true|none|Permissions available to this role|
|colour|string \| null|false|none|Colour used for this role<br><br>This can be any valid CSS colour|
|hoist|boolean|false|none|Whether this role should be shown separately on the member sidebar|
|rank|integer(int64)|false|none|Ranking of this role|
|icon|object \| null|false|none|Role icon|
|owner|string \| null|false|none|Id of the bot that owns this role, if it is a managed role|

<h2 id="tocS_DataCreateServer">DataCreateServer</h2>
<!-- backwards compatibility -->
<a id="schemadatacreateserver"></a>
<a id="schema_DataCreateServer"></a>
<a id="tocSdatacreateserver"></a>
<a id="tocsdatacreateserver"></a>

```json
{
  "name": "string",
  "description": "string",
  "nsfw": true
}
```

Information about new server to create

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Server name|
|description|string \| null|false|none|Server description|
|nsfw|boolean \| null|false|none|Whether this server is age-restricted|

<h2 id="tocS_FetchServerResponse">FetchServerResponse</h2>
<!-- backwards compatibility -->
<a id="schemafetchserverresponse"></a>
<a id="schema_FetchServerResponse"></a>
<a id="tocSfetchserverresponse"></a>
<a id="tocsfetchserverresponse"></a>

```json
{
  "_id": "string",
  "owner": "string",
  "name": "string",
  "description": "string",
  "channels": [
    "string"
  ],
  "categories": [
    {
      "id": "string",
      "title": "string",
      "channels": [
        "string"
      ]
    }
  ],
  "system_messages": {
    "user_joined": "string",
    "user_left": "string",
    "user_kicked": "string",
    "user_banned": "string"
  },
  "roles": {
    "property1": {
      "_id": "string",
      "name": "string",
      "permissions": {
        "a": 0,
        "d": 0
      },
      "colour": "string",
      "hoist": true,
      "rank": 0,
      "icon": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "owner": "string"
    },
    "property2": {
      "_id": "string",
      "name": "string",
      "permissions": {
        "a": 0,
        "d": 0
      },
      "colour": "string",
      "hoist": true,
      "rank": 0,
      "icon": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "owner": "string"
    }
  },
  "default_permissions": 0,
  "icon": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "banner": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "flags": 0,
  "nsfw": true,
  "analytics": true,
  "discoverable": true,
  "approximate_member_count": 0
}
```

Fetch server information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[Server](#schemaserver)|false|none|Server|
|*anyOf*|object|false|none|Server|
|channels|[string]|true|none|Channels within this server|
|_id|string|true|none|Unique Id|
|owner|string|true|none|User id of the owner|
|name|string|true|none|Name of the server|
|description|string \| null|false|none|Description for the server|
|categories|[[Category](#schemacategory)]|false|none|Categories for this server|
|system_messages|object \| null|false|none|Configuration for sending system event messages|
|roles|object|false|none|Roles for this server|
|default_permissions|integer(int64)|true|none|Default set of server and channel permissions|
|icon|object \| null|false|none|Icon attachment|
|banner|object \| null|false|none|Banner attachment|
|flags|integer(uint32)|false|none|Bitfield of server flags|
|nsfw|boolean|false|none|Whether this server is flagged as not safe for work|
|analytics|boolean|false|none|Whether to enable analytics|
|discoverable|boolean|false|none|Whether this server should be publicly discoverable|
|approximate_member_count|integer(uint)|true|none|Approximate amount of members in the server|

<h2 id="tocS_DataEditServer">DataEditServer</h2>
<!-- backwards compatibility -->
<a id="schemadataeditserver"></a>
<a id="schema_DataEditServer"></a>
<a id="tocSdataeditserver"></a>
<a id="tocsdataeditserver"></a>

```json
{
  "name": "string",
  "description": "string",
  "icon": "string",
  "banner": "string",
  "categories": [
    {
      "id": "string",
      "title": "string",
      "channels": [
        "string"
      ]
    }
  ],
  "system_messages": {
    "user_joined": "string",
    "user_left": "string",
    "user_kicked": "string",
    "user_banned": "string"
  },
  "flags": 0,
  "discoverable": true,
  "analytics": true,
  "owner": "string",
  "remove": []
}
```

New server information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|Server name|
|description|string \| null|false|none|Server description|
|icon|string \| null|false|none|Attachment Id for icon|
|banner|string \| null|false|none|Attachment Id for banner|
|categories|[[Category](#schemacategory)]|false|none|Category structure for server|
|system_messages|object \| null|false|none|System message configuration|
|flags|integer(int32) \| null|false|none|Bitfield of server flags|
|discoverable|boolean \| null|false|none|Whether this server is public and should show up on [Revolt Discover](https://rvlt.gg)|
|analytics|boolean \| null|false|none|Whether analytics should be collected for this server<br><br>Must be enabled in order to show up on [Revolt Discover](https://rvlt.gg).|
|owner|string \| null|false|none|User id of the new owner|
|remove|[[FieldsServer](#schemafieldsserver)]|false|none|Fields to remove from server object|

#### Enumerated Values

|Property|Value|
|---|---|
|remove|Description|
|remove|Categories|
|remove|SystemMessages|
|remove|Icon|
|remove|Banner|

<h2 id="tocS_FieldsServer">FieldsServer</h2>
<!-- backwards compatibility -->
<a id="schemafieldsserver"></a>
<a id="schema_FieldsServer"></a>
<a id="tocSfieldsserver"></a>
<a id="tocsfieldsserver"></a>

```json
"Description"
```

Optional fields on server object

<h2 id="tocS_DataCreateServerChannel">DataCreateServerChannel</h2>
<!-- backwards compatibility -->
<a id="schemadatacreateserverchannel"></a>
<a id="schema_DataCreateServerChannel"></a>
<a id="tocSdatacreateserverchannel"></a>
<a id="tocsdatacreateserverchannel"></a>

```json
{
  "type": "Text",
  "name": "string",
  "description": "string",
  "nsfw": true,
  "voice": {
    "max_users": 1
  }
}
```

Create new server channel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|Channel type|
|name|string|true|none|Channel name|
|description|string \| null|false|none|Channel description|
|nsfw|boolean \| null|false|none|Whether this channel is age restricted|
|voice|object \| null|false|none|Voice Information for when this channel is also a voice channel|

<h2 id="tocS_LegacyServerChannelType">LegacyServerChannelType</h2>
<!-- backwards compatibility -->
<a id="schemalegacyserverchanneltype"></a>
<a id="schema_LegacyServerChannelType"></a>
<a id="tocSlegacyserverchanneltype"></a>
<a id="tocslegacyserverchanneltype"></a>

```json
"Text"
```

Server Channel Type

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|Text Channel|
|*oneOf*|string|false|none|Voice Channel|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|Text|
|*oneOf*|Voice|

<h2 id="tocS_AllMemberResponse">AllMemberResponse</h2>
<!-- backwards compatibility -->
<a id="schemaallmemberresponse"></a>
<a id="schema_AllMemberResponse"></a>
<a id="tocSallmemberresponse"></a>
<a id="tocsallmemberresponse"></a>

```json
{
  "members": [
    {
      "_id": {
        "server": "string",
        "user": "string"
      },
      "joined_at": {},
      "nickname": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "roles": [
        "string"
      ],
      "timeout": {},
      "can_publish": true,
      "can_receive": true
    }
  ],
  "users": [
    {
      "_id": "string",
      "username": "string",
      "discriminator": "string",
      "display_name": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "relations": [
        {
          "_id": "string",
          "status": {}
        }
      ],
      "badges": 0,
      "status": {
        "text": "string",
        "presence": {}
      },
      "flags": 0,
      "privileged": true,
      "bot": {
        "owner": "string"
      },
      "relationship": {},
      "online": true
    }
  ]
}
```

Response with all members

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[[Member](#schemamember)]|true|none|List of members|
|users|[[User](#schemauser)]|true|none|List of users|

<h2 id="tocS_MemberResponse">MemberResponse</h2>
<!-- backwards compatibility -->
<a id="schemamemberresponse"></a>
<a id="schema_MemberResponse"></a>
<a id="tocSmemberresponse"></a>
<a id="tocsmemberresponse"></a>

```json
{
  "_id": {
    "server": "string",
    "user": "string"
  },
  "joined_at": {},
  "nickname": "string",
  "pronouns": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "roles": [
    "string"
  ],
  "timeout": {},
  "can_publish": true,
  "can_receive": true
}
```

Member response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[Member](#schemamember)|false|none|Server Member|
|*anyOf*|object|false|none|none|
|member|[Member](#schemamember)|true|none|Server Member|
|roles|object|true|none|none|

<h2 id="tocS_DataMemberEdit">DataMemberEdit</h2>
<!-- backwards compatibility -->
<a id="schemadatamemberedit"></a>
<a id="schema_DataMemberEdit"></a>
<a id="tocSdatamemberedit"></a>
<a id="tocsdatamemberedit"></a>

```json
{
  "nickname": "string",
  "pronouns": "string",
  "avatar": "string",
  "roles": [
    "string"
  ],
  "timeout": {},
  "can_publish": true,
  "can_receive": true,
  "voice_channel": "string",
  "remove": []
}
```

New member information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nickname|string \| null|false|none|Member nickname|
|pronouns|string \| null|false|none|Member pronouns|
|avatar|string \| null|false|none|Attachment Id to set for avatar|
|roles|[string]|false|none|Array of role ids|
|timeout|object \| null|false|none|Timestamp this member is timed out until|
|can_publish|boolean \| null|false|none|server-wide voice muted|
|can_receive|boolean \| null|false|none|server-wide voice deafened|
|voice_channel|string \| null|false|none|voice channel to move to if already in a voice channel|
|remove|[[FieldsMember](#schemafieldsmember)]|false|none|Fields to remove from channel object|

#### Enumerated Values

|Property|Value|
|---|---|
|remove|Nickname|
|remove|Pronouns|
|remove|Avatar|
|remove|Roles|
|remove|Timeout|
|remove|CanReceive|
|remove|CanPublish|
|remove|JoinedAt|
|remove|VoiceChannel|

<h2 id="tocS_FieldsMember">FieldsMember</h2>
<!-- backwards compatibility -->
<a id="schemafieldsmember"></a>
<a id="schema_FieldsMember"></a>
<a id="tocSfieldsmember"></a>
<a id="tocsfieldsmember"></a>

```json
"Nickname"
```

Optional fields on server member object

<h2 id="tocS_MemberQueryResponse">MemberQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemamemberqueryresponse"></a>
<a id="schema_MemberQueryResponse"></a>
<a id="tocSmemberqueryresponse"></a>
<a id="tocsmemberqueryresponse"></a>

```json
{
  "members": [
    {
      "_id": {
        "server": "string",
        "user": "string"
      },
      "joined_at": {},
      "nickname": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "roles": [
        "string"
      ],
      "timeout": {},
      "can_publish": true,
      "can_receive": true
    }
  ],
  "users": [
    {
      "_id": "string",
      "username": "string",
      "discriminator": "string",
      "display_name": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "relations": [
        {
          "_id": "string",
          "status": {}
        }
      ],
      "badges": 0,
      "status": {
        "text": "string",
        "presence": {}
      },
      "flags": 0,
      "privileged": true,
      "bot": {
        "owner": "string"
      },
      "relationship": {},
      "online": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[[Member](#schemamember)]|true|none|List of members|
|users|[[User](#schemauser)]|true|none|List of users|

<h2 id="tocS_ServerBan">ServerBan</h2>
<!-- backwards compatibility -->
<a id="schemaserverban"></a>
<a id="schema_ServerBan"></a>
<a id="tocSserverban"></a>
<a id="tocsserverban"></a>

```json
{
  "_id": {
    "server": "string",
    "user": "string"
  },
  "reason": "string"
}
```

Server Ban

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|object|true|none|Unique member id|
|reason|string \| null|false|none|Reason for ban creation|

<h2 id="tocS_DataBanCreate">DataBanCreate</h2>
<!-- backwards compatibility -->
<a id="schemadatabancreate"></a>
<a id="schema_DataBanCreate"></a>
<a id="tocSdatabancreate"></a>
<a id="tocsdatabancreate"></a>

```json
{
  "reason": "string",
  "delete_message_seconds": 0
}
```

Information for new server ban

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string \| null|false|none|Ban reason|
|delete_message_seconds|integer(int64) \| null|false|none|Messages to delete in seconds|

<h2 id="tocS_BanListResult">BanListResult</h2>
<!-- backwards compatibility -->
<a id="schemabanlistresult"></a>
<a id="schema_BanListResult"></a>
<a id="tocSbanlistresult"></a>
<a id="tocsbanlistresult"></a>

```json
{
  "users": [
    {
      "_id": "string",
      "username": "string",
      "discriminator": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      }
    }
  ],
  "bans": [
    {
      "_id": {
        "server": "string",
        "user": "string"
      },
      "reason": "string"
    }
  ]
}
```

Ban list result

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[[BannedUser](#schemabanneduser)]|true|none|Users objects|
|bans|[[ServerBan](#schemaserverban)]|true|none|Ban objects|

<h2 id="tocS_BannedUser">BannedUser</h2>
<!-- backwards compatibility -->
<a id="schemabanneduser"></a>
<a id="schema_BannedUser"></a>
<a id="tocSbanneduser"></a>
<a id="tocsbanneduser"></a>

```json
{
  "_id": "string",
  "username": "string",
  "discriminator": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  }
}
```

Just enough information to list a ban

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|Id of the banned user|
|username|string|true|none|Username of the banned user|
|discriminator|string|true|none|Discriminator of the banned user|
|avatar|object \| null|false|none|Avatar of the banned user|

<h2 id="tocS_NewRoleResponse">NewRoleResponse</h2>
<!-- backwards compatibility -->
<a id="schemanewroleresponse"></a>
<a id="schema_NewRoleResponse"></a>
<a id="tocSnewroleresponse"></a>
<a id="tocsnewroleresponse"></a>

```json
{
  "id": "string",
  "role": {
    "_id": "string",
    "name": "string",
    "permissions": {
      "a": 0,
      "d": 0
    },
    "colour": "string",
    "hoist": true,
    "rank": 0,
    "icon": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "owner": "string"
  }
}
```

Response after creating new role

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Id of the role|
|role|object|true|none|New role|

<h2 id="tocS_DataCreateRole">DataCreateRole</h2>
<!-- backwards compatibility -->
<a id="schemadatacreaterole"></a>
<a id="schema_DataCreateRole"></a>
<a id="tocSdatacreaterole"></a>
<a id="tocsdatacreaterole"></a>

```json
{
  "name": "string",
  "rank": 0
}
```

Information about new role to create

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Role name|
|rank|integer(int64) \| null|false|none|Ranking position<br><br>Smaller values take priority.<br><br>**Removed** - no effect, use the edit server role positions route|

<h2 id="tocS_DataEditRole">DataEditRole</h2>
<!-- backwards compatibility -->
<a id="schemadataeditrole"></a>
<a id="schema_DataEditRole"></a>
<a id="tocSdataeditrole"></a>
<a id="tocsdataeditrole"></a>

```json
{
  "name": "string",
  "colour": "string",
  "hoist": true,
  "rank": 0,
  "icon": "string",
  "remove": []
}
```

New role information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|Role name|
|colour|string \| null|false|none|Role colour|
|hoist|boolean \| null|false|none|Whether this role should be displayed separately|
|rank|integer(int64) \| null|false|none|Ranking position<br><br>**Removed** - no effect, use the edit server role positions route|
|icon|string \| null|false|none|Role icon<br><br>Provide an Autumn attachment Id.|
|remove|[[FieldsRole](#schemafieldsrole)]|false|none|Fields to remove from role object|

#### Enumerated Values

|Property|Value|
|---|---|
|remove|Colour|
|remove|Icon|

<h2 id="tocS_FieldsRole">FieldsRole</h2>
<!-- backwards compatibility -->
<a id="schemafieldsrole"></a>
<a id="schema_FieldsRole"></a>
<a id="tocSfieldsrole"></a>
<a id="tocsfieldsrole"></a>

```json
"Colour"
```

Optional fields on server object

<h2 id="tocS_DataSetServerRolePermission">DataSetServerRolePermission</h2>
<!-- backwards compatibility -->
<a id="schemadatasetserverrolepermission"></a>
<a id="schema_DataSetServerRolePermission"></a>
<a id="tocSdatasetserverrolepermission"></a>
<a id="tocsdatasetserverrolepermission"></a>

```json
{
  "permissions": {
    "allow": 0,
    "deny": 0
  }
}
```

New role permissions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|object|true|none|Allow / deny values for the role in this server.|

<h2 id="tocS_DataPermissionsValue">DataPermissionsValue</h2>
<!-- backwards compatibility -->
<a id="schemadatapermissionsvalue"></a>
<a id="schema_DataPermissionsValue"></a>
<a id="tocSdatapermissionsvalue"></a>
<a id="tocsdatapermissionsvalue"></a>

```json
{
  "permissions": 0
}
```

Data permissions Value - contains allow

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|integer(uint64)|true|none|none|

<h2 id="tocS_Emoji">Emoji</h2>
<!-- backwards compatibility -->
<a id="schemaemoji"></a>
<a id="schema_Emoji"></a>
<a id="tocSemoji"></a>
<a id="tocsemoji"></a>

```json
{
  "_id": "string",
  "parent": {
    "type": "Server",
    "id": "string"
  },
  "creator_id": "string",
  "name": "string",
  "animated": true,
  "nsfw": true
}
```

Emoji

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|Unique Id|
|parent|object|true|none|What owns this emoji|
|creator_id|string|true|none|Uploader user id|
|name|string|true|none|Emoji name|
|animated|boolean|false|none|Whether the emoji is animated|
|nsfw|boolean|false|none|Whether the emoji is marked as nsfw|

<h2 id="tocS_EmojiParent">EmojiParent</h2>
<!-- backwards compatibility -->
<a id="schemaemojiparent"></a>
<a id="schema_EmojiParent"></a>
<a id="tocSemojiparent"></a>
<a id="tocsemojiparent"></a>

```json
{
  "type": "Server",
  "id": "string"
}
```

Parent Id of the emoji

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|id|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Server|
|type|Detached|

<h2 id="tocS_DataEditRoleRanks">DataEditRoleRanks</h2>
<!-- backwards compatibility -->
<a id="schemadataeditroleranks"></a>
<a id="schema_DataEditRoleRanks"></a>
<a id="tocSdataeditroleranks"></a>
<a id="tocsdataeditroleranks"></a>

```json
{
  "ranks": [
    "string"
  ]
}
```

New role positions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ranks|[string]|true|none|none|

<h2 id="tocS_AuditLogQueryResponse">AuditLogQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogqueryresponse"></a>
<a id="schema_AuditLogQueryResponse"></a>
<a id="tocSauditlogqueryresponse"></a>
<a id="tocsauditlogqueryresponse"></a>

```json
{
  "audit_logs": [
    {
      "_id": "string",
      "server": "string",
      "reason": "string",
      "user": "string",
      "target": "string",
      "action": {
        "type": "MessageDelete",
        "author": "string",
        "channel": "string"
      }
    }
  ],
  "users": [
    {
      "_id": "string",
      "username": "string",
      "discriminator": "string",
      "display_name": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "relations": [
        {
          "_id": "string",
          "status": {}
        }
      ],
      "badges": 0,
      "status": {
        "text": "string",
        "presence": {}
      },
      "flags": 0,
      "privileged": true,
      "bot": {
        "owner": "string"
      },
      "relationship": {},
      "online": true
    }
  ],
  "members": [
    {
      "_id": {
        "server": "string",
        "user": "string"
      },
      "joined_at": {},
      "nickname": "string",
      "pronouns": "string",
      "avatar": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "roles": [
        "string"
      ],
      "timeout": {},
      "can_publish": true,
      "can_receive": true
    }
  ]
}
```

Response containing the audit log entries and the users involved

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audit_logs|[[AuditLogEntry](#schemaauditlogentry)]|true|none|List of audit logs|
|users|[[User](#schemauser)]|true|none|List of users|
|members|[[Member](#schemamember)]|true|none|List of members|

<h2 id="tocS_AuditLogEntry">AuditLogEntry</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogentry"></a>
<a id="schema_AuditLogEntry"></a>
<a id="tocSauditlogentry"></a>
<a id="tocsauditlogentry"></a>

```json
{
  "_id": "string",
  "server": "string",
  "reason": "string",
  "user": "string",
  "target": "string",
  "action": {
    "type": "MessageDelete",
    "author": "string",
    "channel": "string"
  }
}
```

Audit log entry

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|Unique ID|
|server|string|true|none|The server the entry happened in|
|reason|string \| null|false|none|User provided reason|
|user|string|true|none|User who ran the action|
|target|string \| null|false|none|User this action is targetting|
|action|object|true|none|The action ran|

<h2 id="tocS_AuditLogEntryAction">AuditLogEntryAction</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogentryaction"></a>
<a id="schema_AuditLogEntryAction"></a>
<a id="tocSauditlogentryaction"></a>
<a id="tocsauditlogentryaction"></a>

```json
{
  "type": "MessageDelete",
  "author": "string",
  "channel": "string"
}
```

Indivual action stored on the audit log

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|author|string|true|none|none|
|channel|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|channel|string|true|none|none|
|count|integer(uint)|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|message|string|true|none|none|
|author|string|true|none|none|
|channel|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|message|string|true|none|none|
|author|string|true|none|none|
|channel|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|user|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|user|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|channel|string|true|none|none|
|name|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|channel|string|true|none|none|
|before|[PartialChannel](#schemapartialchannel)|true|none|Partial representation of a channel|
|after|[PartialChannel](#schemapartialchannel)|true|none|Partial representation of a channel|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|channel|string|true|none|none|
|role|string|true|none|none|
|permissions|[Override](#schemaoverride)|true|none|Representation of a single permission override|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|channel|string|true|none|none|
|name|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|user|string|true|none|none|
|before|[PartialMember](#schemapartialmember)|true|none|none|
|after|[PartialMember](#schemapartialmember)|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|user|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|before|[PartialServer](#schemapartialserver)|true|none|none|
|after|[PartialServer](#schemapartialserver)|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|role|string|true|none|none|
|before|[PartialRole](#schemapartialrole)|true|none|none|
|after|[PartialRole](#schemapartialrole)|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|role|string|true|none|none|
|name|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|role|string|true|none|none|
|name|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|before|[string]|true|none|none|
|after|[string]|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|invite|string|true|none|none|
|channel|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|invite|string|true|none|none|
|channel|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|webhook|string|true|none|none|
|name|string|true|none|none|
|channel|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|webhook|string|true|none|none|
|name|string|true|none|none|
|channel|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|emoji|string|true|none|none|
|name|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|emoji|string|true|none|none|
|before|[PartialEmoji](#schemapartialemoji)|true|none|Partial emoji representation|
|after|[PartialEmoji](#schemapartialemoji)|true|none|Partial emoji representation|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|emoji|string|true|none|none|
|name|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MessageDelete|
|type|MessageBulkDelete|
|type|MessagePin|
|type|MessageUnpin|
|type|BanCreate|
|type|BanDelete|
|type|ChannelCreate|
|type|ChannelEdit|
|type|ChannelRolePermissionsEdit|
|type|ChannelDelete|
|type|MemberEdit|
|type|MemberKick|
|type|ServerEdit|
|type|RoleEdit|
|type|RoleCreate|
|type|RoleDelete|
|type|RolesReorder|
|type|InviteCreate|
|type|InviteDelete|
|type|WebhookCreate|
|type|WebhookDelete|
|type|EmojiCreate|
|type|EmojiUpdate|
|type|EmojiDelete|

<h2 id="tocS_PartialChannel">PartialChannel</h2>
<!-- backwards compatibility -->
<a id="schemapartialchannel"></a>
<a id="schema_PartialChannel"></a>
<a id="tocSpartialchannel"></a>
<a id="tocspartialchannel"></a>

```json
{
  "name": "string",
  "owner": "string",
  "description": "string",
  "icon": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "nsfw": true,
  "active": true,
  "permissions": 0,
  "role_permissions": {
    "property1": {
      "a": 0,
      "d": 0
    },
    "property2": {
      "a": 0,
      "d": 0
    }
  },
  "default_permissions": {
    "a": 0,
    "d": 0
  },
  "last_message_id": "string",
  "voice": {
    "max_users": 1
  },
  "slowmode": 0
}
```

Partial representation of a channel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|owner|string \| null|false|none|none|
|description|string \| null|false|none|none|
|icon|object \| null|false|none|none|
|nsfw|boolean \| null|false|none|none|
|active|boolean \| null|false|none|none|
|permissions|integer(int64) \| null|false|none|none|
|role_permissions|object \| null|false|none|none|
|default_permissions|object \| null|false|none|none|
|last_message_id|string \| null|false|none|none|
|voice|object \| null|false|none|none|
|slowmode|integer(uint64) \| null|false|none|none|

<h2 id="tocS_PartialMember">PartialMember</h2>
<!-- backwards compatibility -->
<a id="schemapartialmember"></a>
<a id="schema_PartialMember"></a>
<a id="tocSpartialmember"></a>
<a id="tocspartialmember"></a>

```json
{
  "id": {
    "server": "string",
    "user": "string"
  },
  "joined_at": {},
  "nickname": "string",
  "pronouns": "string",
  "avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "roles": [
    "string"
  ],
  "timeout": {},
  "can_publish": true,
  "can_receive": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object \| null|false|none|none|
|joined_at|object \| null|false|none|none|
|nickname|string \| null|false|none|none|
|pronouns|string \| null|false|none|none|
|avatar|object \| null|false|none|none|
|roles|[string]|false|none|none|
|timeout|object \| null|false|none|none|
|can_publish|boolean \| null|false|none|none|
|can_receive|boolean \| null|false|none|none|

<h2 id="tocS_PartialServer">PartialServer</h2>
<!-- backwards compatibility -->
<a id="schemapartialserver"></a>
<a id="schema_PartialServer"></a>
<a id="tocSpartialserver"></a>
<a id="tocspartialserver"></a>

```json
{
  "id": "string",
  "owner": "string",
  "name": "string",
  "description": "string",
  "channels": [
    "string"
  ],
  "categories": [
    {
      "id": "string",
      "title": "string",
      "channels": [
        "string"
      ]
    }
  ],
  "system_messages": {
    "user_joined": "string",
    "user_left": "string",
    "user_kicked": "string",
    "user_banned": "string"
  },
  "roles": {
    "property1": {
      "_id": "string",
      "name": "string",
      "permissions": {
        "a": 0,
        "d": 0
      },
      "colour": "string",
      "hoist": true,
      "rank": 0,
      "icon": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "owner": "string"
    },
    "property2": {
      "_id": "string",
      "name": "string",
      "permissions": {
        "a": 0,
        "d": 0
      },
      "colour": "string",
      "hoist": true,
      "rank": 0,
      "icon": {
        "_id": "string",
        "tag": "string",
        "filename": "string",
        "metadata": {
          "type": "File"
        },
        "content_type": "string",
        "size": 0,
        "deleted": true,
        "reported": true,
        "message_id": "string",
        "user_id": "string",
        "server_id": "string",
        "object_id": "string"
      },
      "owner": "string"
    }
  },
  "default_permissions": 0,
  "icon": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "banner": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "flags": 0,
  "nsfw": true,
  "analytics": true,
  "discoverable": true,
  "approximate_member_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|owner|string \| null|false|none|none|
|name|string \| null|false|none|none|
|description|string \| null|false|none|none|
|channels|[string]|false|none|none|
|categories|[[Category](#schemacategory)]|false|none|none|
|system_messages|object \| null|false|none|none|
|roles|object \| null|false|none|none|
|default_permissions|integer(int64) \| null|false|none|none|
|icon|object \| null|false|none|none|
|banner|object \| null|false|none|none|
|flags|integer(uint32) \| null|false|none|none|
|nsfw|boolean \| null|false|none|none|
|analytics|boolean \| null|false|none|none|
|discoverable|boolean \| null|false|none|none|
|approximate_member_count|integer(uint) \| null|false|none|none|

<h2 id="tocS_PartialRole">PartialRole</h2>
<!-- backwards compatibility -->
<a id="schemapartialrole"></a>
<a id="schema_PartialRole"></a>
<a id="tocSpartialrole"></a>
<a id="tocspartialrole"></a>

```json
{
  "id": "string",
  "name": "string",
  "permissions": {
    "a": 0,
    "d": 0
  },
  "colour": "string",
  "hoist": true,
  "rank": 0,
  "icon": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "owner": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|name|string \| null|false|none|none|
|permissions|object \| null|false|none|none|
|colour|string \| null|false|none|none|
|hoist|boolean \| null|false|none|none|
|rank|integer(int64) \| null|false|none|none|
|icon|object \| null|false|none|none|
|owner|string \| null|false|none|none|

<h2 id="tocS_PartialEmoji">PartialEmoji</h2>
<!-- backwards compatibility -->
<a id="schemapartialemoji"></a>
<a id="schema_PartialEmoji"></a>
<a id="tocSpartialemoji"></a>
<a id="tocspartialemoji"></a>

```json
{
  "name": "string"
}
```

Partial emoji representation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|

<h2 id="tocS_InviteResponse">InviteResponse</h2>
<!-- backwards compatibility -->
<a id="schemainviteresponse"></a>
<a id="schema_InviteResponse"></a>
<a id="tocSinviteresponse"></a>
<a id="tocsinviteresponse"></a>

```json
{
  "type": "Server",
  "code": "string",
  "server_id": "string",
  "server_name": "string",
  "server_icon": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "server_banner": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "server_flags": 0,
  "channel_id": "string",
  "channel_name": "string",
  "channel_description": "string",
  "user_name": "string",
  "user_avatar": {
    "_id": "string",
    "tag": "string",
    "filename": "string",
    "metadata": {
      "type": "File"
    },
    "content_type": "string",
    "size": 0,
    "deleted": true,
    "reported": true,
    "message_id": "string",
    "user_id": "string",
    "server_id": "string",
    "object_id": "string"
  },
  "member_count": 0
}
```

Public invite response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|Server channel invite|
|type|string|true|none|none|
|code|string|true|none|Invite code|
|server_id|string|true|none|Id of the server|
|server_name|string|true|none|Name of the server|
|server_icon|object \| null|false|none|Attachment for server icon|
|server_banner|object \| null|false|none|Attachment for server banner|
|server_flags|integer(int32) \| null|false|none|Enum of server flags|
|channel_id|string|true|none|Id of server channel|
|channel_name|string|true|none|Name of server channel|
|channel_description|string \| null|false|none|Description of server channel|
|user_name|string|true|none|Name of user who created the invite|
|user_avatar|object \| null|false|none|Avatar of the user who created the invite|
|member_count|integer(int64)|true|none|Number of members in this server|
|*oneOf*|object|false|none|Group channel invite|
|type|string|true|none|none|
|code|string|true|none|Invite code|
|channel_id|string|true|none|Id of group channel|
|channel_name|string|true|none|Name of group channel|
|channel_description|string \| null|false|none|Description of group channel|
|user_name|string|true|none|Name of user who created the invite|
|user_avatar|object \| null|false|none|Avatar of the user who created the invite|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Server|
|type|Group|

<h2 id="tocS_InviteJoinResponse">InviteJoinResponse</h2>
<!-- backwards compatibility -->
<a id="schemainvitejoinresponse"></a>
<a id="schema_InviteJoinResponse"></a>
<a id="tocSinvitejoinresponse"></a>
<a id="tocsinvitejoinresponse"></a>

```json
{
  "type": "Server",
  "channels": [
    {
      "channel_type": "SavedMessages",
      "_id": "string",
      "user": "string"
    }
  ],
  "server": {
    "_id": "string",
    "owner": "string",
    "name": "string",
    "description": "string",
    "channels": [
      "string"
    ],
    "categories": [
      {
        "id": "string",
        "title": "string",
        "channels": [
          "string"
        ]
      }
    ],
    "system_messages": {
      "user_joined": "string",
      "user_left": "string",
      "user_kicked": "string",
      "user_banned": "string"
    },
    "roles": {
      "property1": {
        "_id": "string",
        "name": "string",
        "permissions": {
          "a": 0,
          "d": 0
        },
        "colour": "string",
        "hoist": true,
        "rank": 0,
        "icon": {
          "_id": "string",
          "tag": "string",
          "filename": "string",
          "metadata": {
            "type": "File"
          },
          "content_type": "string",
          "size": 0,
          "deleted": true,
          "reported": true,
          "message_id": "string",
          "user_id": "string",
          "server_id": "string",
          "object_id": "string"
        },
        "owner": "string"
      },
      "property2": {
        "_id": "string",
        "name": "string",
        "permissions": {
          "a": 0,
          "d": 0
        },
        "colour": "string",
        "hoist": true,
        "rank": 0,
        "icon": {
          "_id": "string",
          "tag": "string",
          "filename": "string",
          "metadata": {
            "type": "File"
          },
          "content_type": "string",
          "size": 0,
          "deleted": true,
          "reported": true,
          "message_id": "string",
          "user_id": "string",
          "server_id": "string",
          "object_id": "string"
        },
        "owner": "string"
      }
    },
    "default_permissions": 0,
    "icon": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "banner": {
      "_id": "string",
      "tag": "string",
      "filename": "string",
      "metadata": {
        "type": "File"
      },
      "content_type": "string",
      "size": 0,
      "deleted": true,
      "reported": true,
      "message_id": "string",
      "user_id": "string",
      "server_id": "string",
      "object_id": "string"
    },
    "flags": 0,
    "nsfw": true,
    "analytics": true,
    "discoverable": true,
    "approximate_member_count": 0
  }
}
```

Invite join response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|channels|[[Channel](#schemachannel)]|true|none|Channels in the server|
|server|object|true|none|Server we are joining|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|channel|object|true|none|Group channel we are joining|
|users|[[User](#schemauser)]|true|none|Members of this group|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Server|
|type|Group|

<h2 id="tocS_DataCreateEmoji">DataCreateEmoji</h2>
<!-- backwards compatibility -->
<a id="schemadatacreateemoji"></a>
<a id="schema_DataCreateEmoji"></a>
<a id="tocSdatacreateemoji"></a>
<a id="tocsdatacreateemoji"></a>

```json
{
  "name": "string",
  "parent": {
    "type": "Server",
    "id": "string"
  },
  "nsfw": false
}
```

Create a new emoji

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Server name|
|parent|object|true|none|Parent information|
|nsfw|boolean|false|none|Whether the emoji is mature|

<h2 id="tocS_DataEditEmoji">DataEditEmoji</h2>
<!-- backwards compatibility -->
<a id="schemadataeditemoji"></a>
<a id="schema_DataEditEmoji"></a>
<a id="tocSdataeditemoji"></a>
<a id="tocsdataeditemoji"></a>

```json
{
  "name": "string"
}
```

Edit emoji information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|Emoji name|

<h2 id="tocS_DataReportContent">DataReportContent</h2>
<!-- backwards compatibility -->
<a id="schemadatareportcontent"></a>
<a id="schema_DataReportContent"></a>
<a id="tocSdatareportcontent"></a>
<a id="tocsdatareportcontent"></a>

```json
{
  "content": {
    "type": "Message",
    "id": "string",
    "report_reason": {}
  },
  "additional_context": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|object|true|none|Content being reported|
|additional_context|string|false|none|Additional report description|

<h2 id="tocS_ReportedContent">ReportedContent</h2>
<!-- backwards compatibility -->
<a id="schemareportedcontent"></a>
<a id="schema_ReportedContent"></a>
<a id="tocSreportedcontent"></a>
<a id="tocsreportedcontent"></a>

```json
{
  "type": "Message",
  "id": "string",
  "report_reason": {}
}
```

The content being reported

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|Report a message|
|type|string|true|none|none|
|id|string|true|none|ID of the message|
|report_reason|object|true|none|Reason for reporting message|
|*oneOf*|object|false|none|Report a server|
|type|string|true|none|none|
|id|string|true|none|ID of the server|
|report_reason|object|true|none|Reason for reporting server|
|*oneOf*|object|false|none|Report a user|
|type|string|true|none|none|
|id|string|true|none|ID of the user|
|report_reason|object|true|none|Reason for reporting a user|
|message_id|string \| null|false|none|Message context|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Message|
|type|Server|
|type|User|

<h2 id="tocS_ContentReportReason">ContentReportReason</h2>
<!-- backwards compatibility -->
<a id="schemacontentreportreason"></a>
<a id="schema_ContentReportReason"></a>
<a id="tocScontentreportreason"></a>
<a id="tocscontentreportreason"></a>

```json
"NoneSpecified"
```

Reason for reporting content (message or server)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|No reason has been specified|
|*oneOf*|string|false|none|Illegal content catch-all reason|
|*oneOf*|string|false|none|Selling or facilitating use of drugs or other illegal goods|
|*oneOf*|string|false|none|Extortion or blackmail|
|*oneOf*|string|false|none|Revenge or child pornography|
|*oneOf*|string|false|none|Illegal hacking activity|
|*oneOf*|string|false|none|Extreme violence, gore, or animal cruelty With exception to violence potrayed in media / creative arts|
|*oneOf*|string|false|none|Content that promotes harm to others / self|
|*oneOf*|string|false|none|Unsolicited advertisements|
|*oneOf*|string|false|none|This is a raid|
|*oneOf*|string|false|none|Spam or platform abuse|
|*oneOf*|string|false|none|Scams or fraud|
|*oneOf*|string|false|none|Distribution of malware or malicious links|
|*oneOf*|string|false|none|Harassment or abuse targeted at another user|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|NoneSpecified|
|*oneOf*|Illegal|
|*oneOf*|IllegalGoods|
|*oneOf*|IllegalExtortion|
|*oneOf*|IllegalPornography|
|*oneOf*|IllegalHacking|
|*oneOf*|ExtremeViolence|
|*oneOf*|PromotesHarm|
|*oneOf*|UnsolicitedSpam|
|*oneOf*|Raid|
|*oneOf*|SpamAbuse|
|*oneOf*|ScamsFraud|
|*oneOf*|Malware|
|*oneOf*|Harassment|

<h2 id="tocS_UserReportReason">UserReportReason</h2>
<!-- backwards compatibility -->
<a id="schemauserreportreason"></a>
<a id="schema_UserReportReason"></a>
<a id="tocSuserreportreason"></a>
<a id="tocsuserreportreason"></a>

```json
"NoneSpecified"
```

Reason for reporting a user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|No reason has been specified|
|*oneOf*|string|false|none|Unsolicited advertisements|
|*oneOf*|string|false|none|User is sending spam or otherwise abusing the platform|
|*oneOf*|string|false|none|User's profile contains inappropriate content for a general audience|
|*oneOf*|string|false|none|User is impersonating another user|
|*oneOf*|string|false|none|User is evading a ban|
|*oneOf*|string|false|none|User is not of minimum age to use the platform|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|NoneSpecified|
|*oneOf*|UnsolicitedSpam|
|*oneOf*|SpamAbuse|
|*oneOf*|InappropriateProfile|
|*oneOf*|Impersonation|
|*oneOf*|BanEvasion|
|*oneOf*|Underage|

<h2 id="tocS_DataCreateAccount">DataCreateAccount</h2>
<!-- backwards compatibility -->
<a id="schemadatacreateaccount"></a>
<a id="schema_DataCreateAccount"></a>
<a id="tocSdatacreateaccount"></a>
<a id="tocsdatacreateaccount"></a>

```json
{
  "email": "string",
  "password": "string",
  "invite": "string",
  "captcha": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Valid email address|
|password|string|true|none|Password|
|invite|string \| null|false|none|Invite code|
|captcha|string \| null|false|none|Captcha verification code|

<h2 id="tocS_DataResendVerification">DataResendVerification</h2>
<!-- backwards compatibility -->
<a id="schemadataresendverification"></a>
<a id="schema_DataResendVerification"></a>
<a id="tocSdataresendverification"></a>
<a id="tocsdataresendverification"></a>

```json
{
  "email": "string",
  "captcha": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email associated with the account|
|captcha|string \| null|false|none|Captcha verification code|

<h2 id="tocS_DataAccountDeletion">DataAccountDeletion</h2>
<!-- backwards compatibility -->
<a id="schemadataaccountdeletion"></a>
<a id="schema_DataAccountDeletion"></a>
<a id="tocSdataaccountdeletion"></a>
<a id="tocsdataaccountdeletion"></a>

```json
{
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|Deletion token|

<h2 id="tocS_AccountInfo">AccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemaaccountinfo"></a>
<a id="schema_AccountInfo"></a>
<a id="tocSaccountinfo"></a>
<a id="tocsaccountinfo"></a>

```json
{
  "_id": "string",
  "email": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|none|
|email|string|true|none|none|

<h2 id="tocS_DataChangePassword">DataChangePassword</h2>
<!-- backwards compatibility -->
<a id="schemadatachangepassword"></a>
<a id="schema_DataChangePassword"></a>
<a id="tocSdatachangepassword"></a>
<a id="tocsdatachangepassword"></a>

```json
{
  "password": "string",
  "current_password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|New password|
|current_password|string|true|none|Current password|

<h2 id="tocS_DataChangeEmail">DataChangeEmail</h2>
<!-- backwards compatibility -->
<a id="schemadatachangeemail"></a>
<a id="schema_DataChangeEmail"></a>
<a id="tocSdatachangeemail"></a>
<a id="tocsdatachangeemail"></a>

```json
{
  "email": "string",
  "current_password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Valid email address|
|current_password|string|true|none|Current password|

<h2 id="tocS_ResponseVerify">ResponseVerify</h2>
<!-- backwards compatibility -->
<a id="schemaresponseverify"></a>
<a id="schema_ResponseVerify"></a>
<a id="tocSresponseverify"></a>
<a id="tocsresponseverify"></a>

```json
{
  "ticket": {
    "_id": "string",
    "account_id": "string",
    "token": "string",
    "validated": true,
    "authorised": true,
    "last_totp_code": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|null|false|none|none|
|*anyOf*|object|false|none|none|
|ticket|object|true|none|Authorised MFA ticket, can be used to log in|

<h2 id="tocS_MFATicket">MFATicket</h2>
<!-- backwards compatibility -->
<a id="schemamfaticket"></a>
<a id="schema_MFATicket"></a>
<a id="tocSmfaticket"></a>
<a id="tocsmfaticket"></a>

```json
{
  "_id": "string",
  "account_id": "string",
  "token": "string",
  "validated": true,
  "authorised": true,
  "last_totp_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|Unique Id|
|account_id|string|true|none|Account Id|
|token|string|true|none|Unique Token|
|validated|boolean|true|none|Whether this ticket has been validated (can be used for account actions)|
|authorised|boolean|true|none|Whether this ticket is authorised (can be used to log a user in)|
|last_totp_code|string \| null|false|none|TOTP code at time of ticket creation|

<h2 id="tocS_DataPasswordReset">DataPasswordReset</h2>
<!-- backwards compatibility -->
<a id="schemadatapasswordreset"></a>
<a id="schema_DataPasswordReset"></a>
<a id="tocSdatapasswordreset"></a>
<a id="tocsdatapasswordreset"></a>

```json
{
  "token": "string",
  "password": "string",
  "remove_sessions": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|Reset token|
|password|string|true|none|New password|
|remove_sessions|boolean|false|none|Whether to logout all sessions|

<h2 id="tocS_DataSendPasswordReset">DataSendPasswordReset</h2>
<!-- backwards compatibility -->
<a id="schemadatasendpasswordreset"></a>
<a id="schema_DataSendPasswordReset"></a>
<a id="tocSdatasendpasswordreset"></a>
<a id="tocsdatasendpasswordreset"></a>

```json
{
  "email": "string",
  "captcha": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email associated with the account|
|captcha|string \| null|false|none|Captcha verification code|

<h2 id="tocS_ResponseLogin">ResponseLogin</h2>
<!-- backwards compatibility -->
<a id="schemaresponselogin"></a>
<a id="schema_ResponseLogin"></a>
<a id="tocSresponselogin"></a>
<a id="tocsresponselogin"></a>

```json
{
  "result": "Success",
  "_id": "string",
  "user_id": "string",
  "token": "string",
  "name": "string",
  "last_seen": {},
  "origin": "string",
  "subscription": {
    "endpoint": "string",
    "p256dh": "string",
    "auth": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|result|string|true|none|none|
|_id|string|true|none|Unique Id|
|user_id|string|true|none|User Id|
|token|string|true|none|Session token|
|name|string|true|none|Display name|
|last_seen|object|true|none|When the session was last logged in|
|origin|string \| null|false|none|Where the session is originating from|
|subscription|object \| null|false|none|Web Push subscription|
|*oneOf*|object|false|none|none|
|result|string|true|none|none|
|ticket|string|true|none|none|
|allowed_methods|[[MFAMethod](#schemamfamethod)]|true|none|none|
|*oneOf*|object|false|none|none|
|result|string|true|none|none|
|user_id|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|result|Success|
|result|MFA|
|allowed_methods|Password|
|allowed_methods|Recovery|
|allowed_methods|Totp|
|result|Disabled|

<h2 id="tocS_WebPushSubscription">WebPushSubscription</h2>
<!-- backwards compatibility -->
<a id="schemawebpushsubscription"></a>
<a id="schema_WebPushSubscription"></a>
<a id="tocSwebpushsubscription"></a>
<a id="tocswebpushsubscription"></a>

```json
{
  "endpoint": "string",
  "p256dh": "string",
  "auth": "string"
}
```

Web Push subscription

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|true|none|none|
|p256dh|string|true|none|none|
|auth|string|true|none|none|

<h2 id="tocS_MFAMethod">MFAMethod</h2>
<!-- backwards compatibility -->
<a id="schemamfamethod"></a>
<a id="schema_MFAMethod"></a>
<a id="tocSmfamethod"></a>
<a id="tocsmfamethod"></a>

```json
"Password"
```

<h2 id="tocS_DataLogin">DataLogin</h2>
<!-- backwards compatibility -->
<a id="schemadatalogin"></a>
<a id="schema_DataLogin"></a>
<a id="tocSdatalogin"></a>
<a id="tocsdatalogin"></a>

```json
{
  "email": "string",
  "password": "string",
  "friendly_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|email|string|true|none|Email|
|password|string|true|none|Password|
|friendly_name|string \| null|false|none|Friendly name used for the session|
|*anyOf*|object|false|none|none|
|mfa_ticket|string|true|none|Unvalidated or authorised MFA ticket<br><br>Used to resolve the correct account|
|mfa_response|object \| null|false|none|Valid MFA response<br><br>This will take precedence over the `password` field where applicable|
|friendly_name|string \| null|false|none|Friendly name used for the session|

<h2 id="tocS_MFAResponse">MFAResponse</h2>
<!-- backwards compatibility -->
<a id="schemamfaresponse"></a>
<a id="schema_MFAResponse"></a>
<a id="tocSmfaresponse"></a>
<a id="tocsmfaresponse"></a>

```json
{
  "password": "string"
}
```

MFA response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|password|string|true|none|none|
|*anyOf*|object|false|none|none|
|recovery_code|string|true|none|none|
|*anyOf*|object|false|none|none|
|totp_code|string|true|none|none|

<h2 id="tocS_SessionInfo">SessionInfo</h2>
<!-- backwards compatibility -->
<a id="schemasessioninfo"></a>
<a id="schema_SessionInfo"></a>
<a id="tocSsessioninfo"></a>
<a id="tocssessioninfo"></a>

```json
{
  "_id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_DataEditSession">DataEditSession</h2>
<!-- backwards compatibility -->
<a id="schemadataeditsession"></a>
<a id="schema_DataEditSession"></a>
<a id="tocSdataeditsession"></a>
<a id="tocsdataeditsession"></a>

```json
{
  "friendly_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|friendly_name|string|true|none|Session friendly name|

<h2 id="tocS_MultiFactorStatus">MultiFactorStatus</h2>
<!-- backwards compatibility -->
<a id="schemamultifactorstatus"></a>
<a id="schema_MultiFactorStatus"></a>
<a id="tocSmultifactorstatus"></a>
<a id="tocsmultifactorstatus"></a>

```json
{
  "email_otp": true,
  "trusted_handover": true,
  "email_mfa": true,
  "totp_mfa": true,
  "security_key_mfa": true,
  "recovery_active": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_otp|boolean|false|none|none|
|trusted_handover|boolean|false|none|none|
|email_mfa|boolean|false|none|none|
|totp_mfa|boolean|false|none|none|
|security_key_mfa|boolean|false|none|none|
|recovery_active|boolean|false|none|none|

<h2 id="tocS_ResponseTotpSecret">ResponseTotpSecret</h2>
<!-- backwards compatibility -->
<a id="schemaresponsetotpsecret"></a>
<a id="schema_ResponseTotpSecret"></a>
<a id="tocSresponsetotpsecret"></a>
<a id="tocsresponsetotpsecret"></a>

```json
{
  "secret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secret|string|true|none|none|

<h2 id="tocS_DataHello">DataHello</h2>
<!-- backwards compatibility -->
<a id="schemadatahello"></a>
<a id="schema_DataHello"></a>
<a id="tocSdatahello"></a>
<a id="tocsdatahello"></a>

```json
{
  "onboarding": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|onboarding|boolean|true|none|Whether onboarding is required|

<h2 id="tocS_DataOnboard">DataOnboard</h2>
<!-- backwards compatibility -->
<a id="schemadataonboard"></a>
<a id="schema_DataOnboard"></a>
<a id="tocSdataonboard"></a>
<a id="tocsdataonboard"></a>

```json
{
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|New username which will be used to identify the user on the platform|

<h2 id="tocS_OptionsFetchSettings">OptionsFetchSettings</h2>
<!-- backwards compatibility -->
<a id="schemaoptionsfetchsettings"></a>
<a id="schema_OptionsFetchSettings"></a>
<a id="tocSoptionsfetchsettings"></a>
<a id="tocsoptionsfetchsettings"></a>

```json
{
  "keys": [
    "string"
  ]
}
```

Options for fetching settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[string]|true|none|Keys to fetch|

<h2 id="tocS_ChannelUnread">ChannelUnread</h2>
<!-- backwards compatibility -->
<a id="schemachannelunread"></a>
<a id="schema_ChannelUnread"></a>
<a id="tocSchannelunread"></a>
<a id="tocschannelunread"></a>

```json
{
  "_id": {
    "channel": "string",
    "user": "string"
  },
  "last_id": "string",
  "mentions": [
    "string"
  ]
}
```

Channel Unread

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|object|true|none|Composite key pointing to a user's view of a channel|
|last_id|string \| null|false|none|Id of the last message read in this channel by a user|
|mentions|[string]|false|none|Array of message ids that mention the user|

<h2 id="tocS_ChannelCompositeKey">ChannelCompositeKey</h2>
<!-- backwards compatibility -->
<a id="schemachannelcompositekey"></a>
<a id="schema_ChannelCompositeKey"></a>
<a id="tocSchannelcompositekey"></a>
<a id="tocschannelcompositekey"></a>

```json
{
  "channel": "string",
  "user": "string"
}
```

Composite primary key consisting of channel and user id

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|true|none|Channel Id|
|user|string|true|none|User Id|

<h2 id="tocS_DataEditWebhook">DataEditWebhook</h2>
<!-- backwards compatibility -->
<a id="schemadataeditwebhook"></a>
<a id="schema_DataEditWebhook"></a>
<a id="tocSdataeditwebhook"></a>
<a id="tocsdataeditwebhook"></a>

```json
{
  "name": "string",
  "avatar": "string",
  "permissions": 0,
  "remove": []
}
```

New webhook information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|Webhook name|
|avatar|string \| null|false|none|Avatar ID|
|permissions|integer(uint64) \| null|false|none|Webhook permissions|
|remove|[[FieldsWebhook](#schemafieldswebhook)]|false|none|Fields to remove from webhook|

#### Enumerated Values

|Property|Value|
|---|---|
|remove|Avatar|

<h2 id="tocS_FieldsWebhook">FieldsWebhook</h2>
<!-- backwards compatibility -->
<a id="schemafieldswebhook"></a>
<a id="schema_FieldsWebhook"></a>
<a id="tocSfieldswebhook"></a>
<a id="tocsfieldswebhook"></a>

```json
"Avatar"
```

Optional fields on webhook object

<h2 id="tocS_ResponseWebhook">ResponseWebhook</h2>
<!-- backwards compatibility -->
<a id="schemaresponsewebhook"></a>
<a id="schema_ResponseWebhook"></a>
<a id="tocSresponsewebhook"></a>
<a id="tocsresponsewebhook"></a>

```json
{
  "id": "string",
  "name": "string",
  "avatar": "string",
  "channel_id": "string",
  "permissions": 0
}
```

Webhook information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Webhook Id|
|name|string|true|none|Webhook name|
|avatar|string \| null|false|none|Avatar ID|
|channel_id|string|true|none|The channel this webhook belongs to|
|permissions|integer(uint64)|true|none|The permissions for the webhook|
