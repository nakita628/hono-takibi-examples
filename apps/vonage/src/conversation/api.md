<h1 id="conversation-api">Conversation API v2.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Conversation API enables you to build conversation features where communication can take place across multiple mediums including IP Messaging, PSTN Voice, SMS and WebRTC Audio and Video. The context of the conversations is maintained though each communication event taking place within a conversation, no matter the medium.

Base URLs:

* <a href="https://api.nexmo.com/v0.1">https://api.nexmo.com/v0.1</a>

Email: <a href="mailto:devrel@vonage.com">Vonage DevRel</a> 
Web: <a href="https://developer.nexmo.com/">Vonage DevRel</a> 

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="conversation-api-conversation">conversation</h1>

A conversation is a shared core component that Vonage APIs rely on. Conversations happen over multiple mediums and and can have associated Users through Memberships.

## List conversations

<a id="opIdlistConversations"></a>

> Code samples

```bash
curl https://api.nexmo.com/conversations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is **DEPRECATED**. Please use [/v0.2/conversations](/api/conversation.v2#get-conversations).

List all conversations associated with your application. This endpoint required an admin JWT. To find all conversations for the currently logged in user, see [GET /users/:id/conversations](#getuserConversations)

<h3 id="list-conversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date_start|query|string(dateTime)|false|Return the records that occurred after this point in time.|
|date_end|query|string(dateTime)|false|Return the records that occurred before this point in time.|
|page_size|query|[page_size](#schemapage_size)|false|Return this amount of records in the response|
|record_index|query|[record_index](#schemarecord_index)|false|Return calls from this index in the response|
|order|query|string|false|Return the records in ascending or descending order.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|
|order|ASC|
|order|DESC|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "conversations": [
      {
        "_links": {
          "self": {
            "href": "https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391"
          }
        },
        "name": "customer_chat",
        "uuid": "CON-63f61863-4a51-4f6b-86e1-46edebio0391"
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v0.1/conversations?page_size=2&record_index=10&"
    }
  },
  "count": "100",
  "page_size": 50,
  "record_index": 0
}
```

<h3 id="list-conversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List Conversations Response Payload Object.|Inline|

<h3 id="list-conversations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|true|none|A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects|
|» conversations|[object]|true|none|none|
|» » _links|object|false|none|none|
|» » » self|object|false|none|none|
|» » » » href|[href_conversation](#schemahref_conversation)|false|none|A link towards a conversation included in Conversation API|
|» » name|[name_conversation](#schemaname_conversation)|true|none|Unique name for a conversation|
|» » uuid|[conversation_id](#schemaconversation_id)|true|none|The unique identifier for this conversation|
|_links|[_links_conversations_list](#schema_links_conversations_list)|true|none|A series of links between resources in this API in the http://stateless.co/hal_specification.html.|
|count|number|true|none|The total number of records returned by your request.|
|page_size|[page_size](#schemapage_size)|true|none|The amount of records returned in this response|
|record_index|[record_index](#schemarecord_index)|true|none|Return `page_size` amount of conversations from this index in the response. That is, if your request returns 300 conversations, set `record_index` to 5 in order to return conversations 50 to 59. The default value is 0. That is, the first `page_size` calls.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a conversation

<a id="opIdcreateConversation"></a>

> Code samples

```bash
curl https://api.nexmo.com/conversations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "display_name": "Customer Chat",
    "image_url": "https://example.com/image.png",
    "name": "customer_chat",
    "properties": {
      "ttl": 60
    }
  }'
```

`POST /conversations`

> Body parameter

```json
{
  "display_name": "Customer Chat",
  "image_url": "https://example.com/image.png",
  "name": "customer_chat",
  "properties": {
    "ttl": 60
  }
}
```

<h3 id="create-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Conversation Request Payload Object|
|» display_name|body|[display_name](#schemadisplay_name)|false|The display name for the conversation. It does not have to be unique|
|» image_url|body|[image_url](#schemaimage_url)|false|A link to an image for conversations' and users' avatars|
|» name|body|[name_conversation](#schemaname_conversation)|false|Unique name for a conversation|
|» properties|body|[conversation_properties](#schemaconversation_properties)|false|Conversation properties|

> Example responses

> 200 Response

```json
{
  "href": "https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391",
  "id": "CON-63f61863-4a51-4f6b-86e1-46edebio0391"
}
```

<h3 id="create-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Create / Update Conversation Response Payload Object|Inline|

<h3 id="create-a-conversation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|[href_conversation](#schemahref_conversation)|true|none|A link towards a conversation included in Conversation API|
|id|[conversation_id](#schemaconversation_id)|true|none|The unique identifier for this conversation|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a conversation

<a id="opIdretrieveConversation"></a>

> Code samples

```bash
curl https://api.nexmo.com/conversations/CON-f972836a-550f-45fa-956c-12a2ab5b7d22 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/{conversation_id}`

<h3 id="retrieve-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|Conversation ID|

> Example responses

> 200 Response

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391"
    }
  },
  "api_key": "string",
  "display_name": "Customer Chat",
  "members": [
    {
      "channel": {
        "from": {
          "type": "app",
          "user": "jamie"
        },
        "leg_id": "a595959595959595995",
        "leg_ids": [
          {
            "leg_id": "a595959595959595995"
          }
        ],
        "to": {
          "type": "app",
          "user": "jamie"
        },
        "type": "phone"
      },
      "initiator": {
        "joined": {
          "isSystem": true,
          "member_id": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
          "user_id": "USR-63f61863-4a51-4f6b-86e1-46edebio0391"
        }
      },
      "member_id": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
      "name": "my_user_name",
      "state": "invited",
      "timestamp": {
        "invited": "2020-01-01T14:00:00.00Z",
        "joined": "2020-01-01T14:00:00.00Z",
        "left": "2020-01-01T14:00:00.00Z"
      },
      "user_id": "USR-63f61863-4a51-4f6b-86e1-46edebio0391"
    }
  ],
  "name": "customer_chat",
  "numbers": {},
  "properties": {
    "video": false
  },
  "sequence_number": "1",
  "timestamp": {
    "created": "2020-01-01T14:00:00.00Z",
    "destroyed": "2020-01-01T14:20:00.00Z",
    "updated": "2020-01-01T14:05:00.00Z"
  },
  "uuid": "CON-63f61863-4a51-4f6b-86e1-46edebio0391"
}
```

<h3 id="retrieve-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve a conversation|Inline|

<h3 id="retrieve-a-conversation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links_conversation](#schema_links_conversation)|false|none|none|
|api_key|string|false|none|The API key for your account|
|display_name|[display_name](#schemadisplay_name)|false|none|The display name for the conversation. It does not have to be unique|
|members|[object]|false|none|Users associated to this conversation as members|
|» channel|[channel](#schemachannel)|false|none|A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`|
|» initiator|[initiator](#schemainitiator)|false|none|none|
|» member_id|[member_id](#schemamember_id)|false|none|Member ID|
|» name|[name_user](#schemaname_user)|false|none|Unique name for a user|
|» state|[member_state](#schemamember_state)|false|none|The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown`|
|» timestamp|[timestamp_res_member](#schematimestamp_res_member)|false|none|none|
|» user_id|[user_id](#schemauser_id)|false|none|User ID|
|name|[name_conversation](#schemaname_conversation)|false|none|Unique name for a conversation|
|numbers|object|false|none|none|
|properties|object|false|none|none|
|» video|boolean|false|none|none|
|sequence_number|string|false|none|The last Event ID in this conversation. This ID can be used to [retrieve a specific event](#getEvent)|
|timestamp|[timestamp_res_conversation](#schematimestamp_res_conversation)|false|none|none|
|uuid|[conversation_id](#schemaconversation_id)|true|none|The unique identifier for this conversation|

#### Enumerated Values

|Property|Value|
|---|---|
|» state|invited|
|» state|joined|
|» state|left|
|» state|unknown|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a conversation

<a id="opIdreplaceConversation"></a>

> Code samples

```bash
curl https://api.nexmo.com/conversations/CON-f972836a-550f-45fa-956c-12a2ab5b7d22 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "display_name": "Customer Chat",
    "image_url": "https://example.com/image.png",
    "name": "customer_chat",
    "properties": {
      "ttl": 60
    }
  }'
```

`PUT /conversations/{conversation_id}`

> Body parameter

```json
{
  "display_name": "Customer Chat",
  "image_url": "https://example.com/image.png",
  "name": "customer_chat",
  "properties": {
    "ttl": 60
  }
}
```

<h3 id="update-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|Conversation ID|
|body|body|object|false|Conversation Request Payload Object|
|» display_name|body|[display_name](#schemadisplay_name)|false|The display name for the conversation. It does not have to be unique|
|» image_url|body|[image_url](#schemaimage_url)|false|A link to an image for conversations' and users' avatars|
|» name|body|[name_conversation](#schemaname_conversation)|false|Unique name for a conversation|
|» properties|body|[conversation_properties](#schemaconversation_properties)|false|Conversation properties|

> Example responses

> 200 Response

```json
{
  "href": "https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391",
  "id": "CON-63f61863-4a51-4f6b-86e1-46edebio0391"
}
```

<h3 id="update-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Create / Update Conversation Response Payload Object|Inline|

<h3 id="update-a-conversation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|[href_conversation](#schemahref_conversation)|true|none|A link towards a conversation included in Conversation API|
|id|[conversation_id](#schemaconversation_id)|true|none|The unique identifier for this conversation|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a conversation

<a id="opIddeleteConversation"></a>

> Code samples

```bash
curl https://api.nexmo.com/conversations/CON-f972836a-550f-45fa-956c-12a2ab5b7d22 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /conversations/{conversation_id}`

<h3 id="delete-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|Conversation ID|

> Example responses

> 200 Response

```json
{}
```

<h3 id="delete-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response with empty JSON|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Record a conversation

<a id="opIdrecordConversation"></a>

> Code samples

```bash
curl https://api.nexmo.com/conversations/CON-f972836a-550f-45fa-956c-12a2ab5b7d22/record \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "start",
    "event_method": "POST",
    "event_url": [
      "https://example.com/event"
    ],
    "format": "mp3",
    "split": "conversation"
  }'
```

`PUT /conversations/{conversation_id}/record`

> Body parameter

```json
{
  "action": "start",
  "event_method": "POST",
  "event_url": [
    "https://example.com/event"
  ],
  "format": "mp3",
  "split": "conversation"
}
```

<h3 id="record-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|Conversation ID|
|body|body|object|false|Record Conversation Request Payload Object|
|» action|body|[action](#schemaaction)|true|Recording Action|
|» event_method|body|[event_method](#schemaevent_method)|false|The HTTP method used to send event information to event_url.|
|» event_url|body|[event_url](#schemaevent_url)|false|The webhook endpoint where recording progress events are sent to.|
|» format|body|[format](#schemaformat)|false|Record the Conversation in a specific format.|
|» split|body|[split](#schemasplit)|false|Record the sent and received audio in separate channels of a stereo recording|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|start|
|» action|stop|
|» format|mp3|
|» format|wav|

<h3 id="record-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="conversation-api-user">user</h1>

The concept of a user exists in Vonage APIs, you can associate one with a user in your own application if you choose. A user can have multiple memberships to conversations and can communicate with other users through various different mediums.

## List users

<a id="opIdgetUsers"></a>

> Code samples

```bash
curl https://api.nexmo.com/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is **DEPRECATED**. Please use [/v0.2/users](/api/conversation.v2#get-users).

> Example responses

> 200 Response

```json
[
  {
    "href": "https://api.nexmo.com/v0.1/users/USR-63f61863-4a51-4f6b-86e1-46edebio0391",
    "id": "USR-63f61863-4a51-4f6b-86e1-46edebio0391",
    "name": "my_user_name"
  }
]
```

<h3 id="list-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of users|Inline|

<h3 id="list-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» href|[href_user](#schemahref_user)|false|none|A link towards a user included in Conversation API|
|» id|[user_id](#schemauser_id)|false|none|User ID|
|» name|[name_user](#schemaname_user)|false|none|Unique name for a user|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a user

<a id="opIdcreateUser"></a>

> Code samples

```bash
curl https://api.nexmo.com/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "display_name": "My User Name",
    "image_url": "https://example.com/image.png",
    "name": "my_user_name"
  }'
```

`POST /users`

Note: Users must be created with an admin JWT.

> Body parameter

```json
{
  "display_name": "My User Name",
  "image_url": "https://example.com/image.png",
  "name": "my_user_name"
}
```

<h3 id="create-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» display_name|body|[display_name_user](#schemadisplay_name_user)|false|A string to be displayed as user name. It does not need to be unique|
|» image_url|body|[image_url](#schemaimage_url)|false|A link to an image for conversations' and users' avatars|
|» name|body|[name_user](#schemaname_user)|false|Unique name for a user|

> Example responses

> 200 Response

```json
{
  "href": "https://api.nexmo.com/v0.1/users/USR-63f61863-4a51-4f6b-86e1-46edebio0391",
  "id": "USR-63f61863-4a51-4f6b-86e1-46edebio0391"
}
```

<h3 id="create-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Create a user response|Inline|

<h3 id="create-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|[href_user](#schemahref_user)|false|none|A link towards a user included in Conversation API|
|id|[user_id](#schemauser_id)|false|none|User ID|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a user

<a id="opIdgetUser"></a>

> Code samples

```bash
curl https://api.nexmo.com/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{user_id}`

<h3 id="retrieve-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|User ID|

> Example responses

> 200 Response

```json
{
  "href": "https://api.nexmo.com/v0.1/users/USR-63f61863-4a51-4f6b-86e1-46edebio0391",
  "id": "USR-63f61863-4a51-4f6b-86e1-46edebio0391",
  "name": "my_user_name"
}
```

<h3 id="retrieve-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve a user|Inline|

<h3 id="retrieve-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|none|
|id|[user_id](#schemauser_id)|false|none|User ID|
|name|[name_user](#schemaname_user)|false|none|Unique name for a user|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a user

<a id="opIdupdateUser"></a>

> Code samples

```bash
curl https://api.nexmo.com/users/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "channels": {
      "from": {
        "type": "app",
        "user": "jamie"
      },
      "leg_id": "a595959595959595995",
      "leg_ids": [
        {
          "leg_id": "a595959595959595995"
        }
      ],
      "to": {
        "type": "app",
        "user": "jamie"
      },
      "type": "phone"
    },
    "display_name": "My User Name",
    "image_url": "https://example.com/image.png",
    "name": "my_user_name"
  }'
```

`PUT /users/{user_id}`

> Body parameter

```json
{
  "channels": {
    "from": {
      "type": "app",
      "user": "jamie"
    },
    "leg_id": "a595959595959595995",
    "leg_ids": [
      {
        "leg_id": "a595959595959595995"
      }
    ],
    "to": {
      "type": "app",
      "user": "jamie"
    },
    "type": "phone"
  },
  "display_name": "My User Name",
  "image_url": "https://example.com/image.png",
  "name": "my_user_name"
}
```

<h3 id="update-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|User ID|
|body|body|object|false|none|
|» channels|body|[channel](#schemachannel)|false|A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`|
|» display_name|body|[display_name_user](#schemadisplay_name_user)|false|A string to be displayed as user name. It does not need to be unique|
|» image_url|body|[image_url](#schemaimage_url)|false|A link to an image for conversations' and users' avatars|
|» name|body|[name_user](#schemaname_user)|false|Unique name for a user|

> Example responses

> 200 Response

```json
{
  "href": "https://api.nexmo.com/v0.1/users/USR-63f61863-4a51-4f6b-86e1-46edebio0391",
  "id": "USR-63f61863-4a51-4f6b-86e1-46edebio0391"
}
```

<h3 id="update-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve a user|Inline|

<h3 id="update-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|[href_user](#schemahref_user)|false|none|A link towards a user included in Conversation API|
|id|[user_id](#schemauser_id)|false|none|User ID|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a user

<a id="opIddeleteUser"></a>

> Code samples

```bash
curl https://api.nexmo.com/users/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /users/{user_id}`

<h3 id="delete-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|User ID|

> Example responses

> 200 Response

```json
{}
```

<h3 id="delete-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response with empty JSON|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List user conversations

<a id="opIdgetuserConversations"></a>

> Code samples

```bash
curl https://api.nexmo.com/users/string/conversations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{user_id}/conversations`

<h3 id="list-user-conversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|User ID|

> Example responses

> 200 Response

```json
[
  {
    "display_name": "Customer Chat",
    "href": "https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391",
    "id": "CON-63f61863-4a51-4f6b-86e1-46edebio0391",
    "image_url": "https://example.com/image.png",
    "member_id": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
    "name": "customer_chat",
    "sequence_number": "123",
    "state": "invited",
    "timestamp": {
      "created": "2020-01-01T14:00:00.00Z"
    }
  }
]
```

<h3 id="list-user-conversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List user conversations|Inline|

<h3 id="list-user-conversations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» display_name|[display_name](#schemadisplay_name)|false|none|The display name for the conversation. It does not have to be unique|
|» href|[href](#schemahref)|false|none|A link towards a resources included in Conversation API|
|» id|[conversation_id](#schemaconversation_id)|false|none|The unique identifier for this conversation|
|» image_url|[image_url](#schemaimage_url)|false|none|A link to an image for conversations' and users' avatars|
|» member_id|[member_id](#schemamember_id)|false|none|Member ID|
|» name|[name_conversation](#schemaname_conversation)|false|none|Unique name for a conversation|
|» sequence_number|integer(url)|false|none|the id of the last event of the conversation (event's id is an incremental number|
|» state|[member_state](#schemamember_state)|false|none|The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown`|
|» timestamp|object|false|none|none|
|» » created|[timestamp](#schematimestamp)|false|none|Timestamp|

#### Enumerated Values

|Property|Value|
|---|---|
|» state|invited|
|» state|joined|
|» state|left|
|» state|unknown|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="conversation-api-member">member</h1>

Memberships connect users with conversations. Each membership has one conversation and one user however a user can have many memberships to conversations just as conversations can have many members.

## List members

<a id="opIdgetMembers"></a>

> Code samples

```bash
curl https://api.nexmo.com/conversations/CON-f972836a-550f-45fa-956c-12a2ab5b7d22/members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/{conversation_id}/members`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is **DEPRECATED**. Please use [/v0.2/members](/api/conversation.v2#get-members).

<h3 id="list-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|Conversation ID|

> Example responses

> 200 Response

```json
[
  {
    "name": "my_user_name",
    "state": "invited",
    "user_id": "USR-63f61863-4a51-4f6b-86e1-46edebio0391",
    "user_name": "my_user_name"
  }
]
```

<h3 id="list-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Members List Object|Inline|

<h3 id="list-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» name|[name_user](#schemaname_user)|true|none|Unique name for a user|
|» state|[member_state](#schemamember_state)|true|none|The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown`|
|» user_id|[user_id](#schemauser_id)|true|none|User ID|
|» user_name|[name_user](#schemaname_user)|true|none|Unique name for a user|

#### Enumerated Values

|Property|Value|
|---|---|
|» state|invited|
|» state|joined|
|» state|left|
|» state|unknown|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a member

<a id="opIdcreateMember"></a>

> Code samples

```bash
curl https://api.nexmo.com/conversations/CON-f972836a-550f-45fa-956c-12a2ab5b7d22/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "join",
    "channel": {
      "from": {
        "type": "app",
        "user": "jamie"
      },
      "leg_id": "a595959595959595995",
      "leg_ids": [
        {
          "leg_id": "a595959595959595995"
        }
      ],
      "to": {
        "type": "app",
        "user": "jamie"
      },
      "type": "phone"
    },
    "knocking_id": "a972836a-450f-35fa-156c-52a2ab5b7d25",
    "media": {
      "audio_settings": {
        "earmuffed": false,
        "enabled": false,
        "muted": false
      }
    },
    "member_id": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
    "member_id_inviting": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
    "user_id": "USR-63f61863-4a51-4f6b-86e1-46edebio0391"
  }'
```

`POST /conversations/{conversation_id}/members`

> Body parameter

```json
{
  "action": "join",
  "channel": {
    "from": {
      "type": "app",
      "user": "jamie"
    },
    "leg_id": "a595959595959595995",
    "leg_ids": [
      {
        "leg_id": "a595959595959595995"
      }
    ],
    "to": {
      "type": "app",
      "user": "jamie"
    },
    "type": "phone"
  },
  "knocking_id": "a972836a-450f-35fa-156c-52a2ab5b7d25",
  "media": {
    "audio_settings": {
      "earmuffed": false,
      "enabled": false,
      "muted": false
    }
  },
  "member_id": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
  "member_id_inviting": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
  "user_id": "USR-63f61863-4a51-4f6b-86e1-46edebio0391"
}
```

<h3 id="create-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|Conversation ID|
|body|body|object|false|none|
|» action|body|[member_action](#schemamember_action)|false|Invite or join a member to a conversation|
|» channel|body|[channel](#schemachannel)|true|A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`|
|» knocking_id|body|[knocker_id](#schemaknocker_id)|false|Knocker ID. A knocker is a pre-member of a conversation who does not exist yet|
|» media|body|[media](#schemamedia)|false|Media Object|
|» member_id|body|[member_id](#schemamember_id)|false|Member ID|
|» member_id_inviting|body|[member_id_inviting](#schemamember_id_inviting)|false|Member ID of the member that sends the invitation|
|» user_id|body|[user_id](#schemauser_id)|true|User ID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|invite|
|» action|join|

> Example responses

> 201 Response

```json
{
  "channel": {
    "from": {
      "type": "app",
      "user": "jamie"
    },
    "leg_id": "a595959595959595995",
    "leg_ids": [
      {
        "leg_id": "a595959595959595995"
      }
    ],
    "to": {
      "type": "app",
      "user": "jamie"
    },
    "type": "phone"
  },
  "href": "https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391/members/MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
  "id": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
  "initiator": {
    "joined": {
      "isSystem": true,
      "member_id": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
      "user_id": "USR-63f61863-4a51-4f6b-86e1-46edebio0391"
    }
  },
  "state": "invited",
  "timestamp": {
    "invited": "2020-01-01T14:00:00.00Z",
    "joined": "2020-01-01T14:00:00.00Z",
    "left": "2020-01-01T14:00:00.00Z"
  },
  "user_id": "USR-63f61863-4a51-4f6b-86e1-46edebio0391"
}
```

<h3 id="create-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Create or invite Member in invite state |Inline|

<h3 id="create-a-member-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|[channel](#schemachannel)|false|none|A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`|
|href|[href_member](#schemahref_member)|false|none|A link towards a member included in Conversation API|
|id|[member_id](#schemamember_id)|false|none|Member ID|
|initiator|[initiator](#schemainitiator)|false|none|none|
|state|[member_state](#schemamember_state)|false|none|The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown`|
|timestamp|[timestamp_res_member](#schematimestamp_res_member)|false|none|none|
|user_id|[user_id](#schemauser_id)|false|none|User ID|

#### Enumerated Values

|Property|Value|
|---|---|
|state|invited|
|state|joined|
|state|left|
|state|unknown|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a member

<a id="opIdgetMember"></a>

> Code samples

```bash
curl https://api.nexmo.com/conversations/CON-f972836a-550f-45fa-956c-12a2ab5b7d22/members/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/{conversation_id}/members/{member_id}`

<h3 id="retrieve-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|Conversation ID|
|member_id|path|string|true|Member ID|

> Example responses

> 200 Response

```json
{
  "href": "https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391/members/MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
  "id": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391"
}
```

<h3 id="retrieve-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve member payload|Inline|

<h3 id="retrieve-a-member-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|[href_member](#schemahref_member)|false|none|A link towards a member included in Conversation API|
|id|[member_id](#schemamember_id)|false|none|Member ID|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a member

<a id="opIdupdateMember"></a>

> Code samples

```bash
curl https://api.nexmo.com/conversations/CON-f972836a-550f-45fa-956c-12a2ab5b7d22/members/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "join",
    "channel": {
      "from": {
        "type": "app",
        "user": "jamie"
      },
      "leg_id": "a595959595959595995",
      "leg_ids": [
        {
          "leg_id": "a595959595959595995"
        }
      ],
      "to": {
        "type": "app",
        "user": "jamie"
      },
      "type": "phone"
    }
  }'
```

`PUT /conversations/{conversation_id}/members/{member_id}`

> Body parameter

```json
{
  "action": "join",
  "channel": {
    "from": {
      "type": "app",
      "user": "jamie"
    },
    "leg_id": "a595959595959595995",
    "leg_ids": [
      {
        "leg_id": "a595959595959595995"
      }
    ],
    "to": {
      "type": "app",
      "user": "jamie"
    },
    "type": "phone"
  }
}
```

<h3 id="update-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|Conversation ID|
|member_id|path|string|true|Member ID|
|body|body|object|false|none|
|» action|body|[member_action](#schemamember_action)|false|Invite or join a member to a conversation|
|» channel|body|[channel](#schemachannel)|false|A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|invite|
|» action|join|

> Example responses

> 200 Response

```json
{
  "href": "https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391/members/MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
  "id": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391"
}
```

<h3 id="update-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Member retrieved|Inline|

<h3 id="update-a-member-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|[href_member](#schemahref_member)|false|none|A link towards a member included in Conversation API|
|id|[member_id](#schemamember_id)|false|none|Member ID|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a member

<a id="opIddeleteMember"></a>

> Code samples

```bash
curl https://api.nexmo.com/conversations/CON-f972836a-550f-45fa-956c-12a2ab5b7d22/members/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /conversations/{conversation_id}/members/{member_id}`

<h3 id="delete-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|Conversation ID|
|member_id|path|string|true|Member ID|

> Example responses

> 200 Response

```json
{}
```

<h3 id="delete-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response with empty JSON|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="conversation-api-event">event</h1>

Events are actions that occur within a conversation. Examples of this includes: Text events from members, or invite events from users

## List events

<a id="opIdgetEvents"></a>

> Code samples

```bash
curl https://api.nexmo.com/conversations/CON-f972836a-550f-45fa-956c-12a2ab5b7d22/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/{conversation_id}/events`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is **DEPRECATED**. Please use [/v0.2/events](/api/conversation.v2#get-events).

<h3 id="list-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|Conversation ID|

> Example responses

> 200 Response

```json
[
  {
    "body": {
      "text": "My Text"
    },
    "from": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
    "href": "https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391/events/1",
    "id": "5",
    "state": "invited",
    "timestamp": "2020-01-01T14:00:00.00Z",
    "to": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
    "type": "text"
  }
]
```

<h3 id="list-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve Events Response Payload Object|Inline|

<h3 id="list-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[event_retrieved](#schemaevent_retrieved)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an event

<a id="opIdcreateEvent"></a>

> Code samples

```bash
curl https://api.nexmo.com/conversations/CON-f972836a-550f-45fa-956c-12a2ab5b7d22/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "body": {
      "text": "My Text"
    },
    "from": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
    "to": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
    "type": "text"
  }'
```

`POST /conversations/{conversation_id}/events`

> Body parameter

```json
{
  "body": {
    "text": "My Text"
  },
  "from": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
  "to": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
  "type": "text"
}
```

<h3 id="create-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|Conversation ID|
|body|body|object|false|none|
|» body|body|[event_body](#schemaevent_body)|false|Event Body|
|» from|body|[member_id](#schemamember_id)|true|Member ID|
|» to|body|[member_id](#schemamember_id)|false|Member ID|
|» type|body|[event_type](#schemaevent_type)|true|Event type|

> Example responses

> 201 Response

```json
{
  "href": "https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391/events/1",
  "id": "5",
  "timestamp": "2020-01-01T14:00:00.00Z"
}
```

<h3 id="create-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Create New Event Response Payload Object|Inline|

<h3 id="create-an-event-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|[href_event](#schemahref_event)|false|none|A link towards a conversation event included in Conversation API|
|id|[event_id](#schemaevent_id)|false|none|Event id. This is a progressive integer|
|timestamp|[timestamp_res_event](#schematimestamp_res_event)|false|none|Time of event creation|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve an event

<a id="opIdgetEvent"></a>

> Code samples

```bash
curl https://api.nexmo.com/conversations/CON-f972836a-550f-45fa-956c-12a2ab5b7d22/events/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/{conversation_id}/events/{event_id}`

<h3 id="retrieve-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|Conversation ID|
|event_id|path|string|true|Event ID|

> Example responses

> 200 Response

```json
{
  "body": {
    "text": "My Text"
  },
  "from": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
  "href": "https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391/events/1",
  "id": "5",
  "state": "invited",
  "timestamp": "2020-01-01T14:00:00.00Z",
  "to": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
  "type": "text"
}
```

<h3 id="retrieve-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve an event Content Payload|[event_retrieved](#schemaevent_retrieved)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete an event

<a id="opIddeleteEvent"></a>

> Code samples

```bash
curl https://api.nexmo.com/conversations/CON-f972836a-550f-45fa-956c-12a2ab5b7d22/events/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /conversations/{conversation_id}/events/{event_id}`

<h3 id="delete-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|Conversation ID|
|event_id|path|string|true|Event ID|

> Example responses

> 200 Response

```json
{}
```

<h3 id="delete-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response with empty JSON|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="conversation-api-leg">leg</h1>

A leg can be a video call, IP call, or PSTN call that users participate in using multiple platforms. With this endpoint you can retrieve the details about all of the legs that took place in your application.

## List legs

<a id="opIdlistLegs"></a>

> Code samples

```bash
curl https://api.nexmo.com/legs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /legs`

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "legs": [
      {
        "_links": {
          "self": {
            "href": "https://api.nexmo.com/v0.1/legs/2a71f8a1-b6f1-42b3-9eef-c69729e17513"
          }
        },
        "conversation_uuid": "CON-511d076b-9d39-498c-baa7-b7a4bfbd6e32",
        "end_time": "",
        "from": {
          "type": "app"
        },
        "rtc": {
          "session_id": "SES-84ebef0d-321a-47e6-8446-f4fcc5ca74b9",
          "state": "terminated"
        },
        "start_time": "",
        "status": "completed",
        "to": {
          "type": "app"
        },
        "type": "app",
        "uuid": "2a71f8a1-b6f1-42b3-9eef-c69729e17513"
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v0.1/legs"
    }
  },
  "count": 1,
  "page_size": 10,
  "record_index": 0
}
```

<h3 id="list-legs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List Legs Successfully|Inline|

<h3 id="list-legs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|true|none|A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects|
|» legs|[object]|true|none|none|
|» » _embedded|object|false|none|none|
|» » _links|object|false|none|none|
|» » conversation_uuid|[conversation_id](#schemaconversation_id)|false|none|The unique identifier for this conversation|
|» » from|object|false|none|none|
|» » start_end|[timestamp_leg_end_time](#schematimestamp_leg_end_time)|false|none|Time of leg end|
|» » start_time|[timestamp_leg_start_time](#schematimestamp_leg_start_time)|false|none|Time of leg start|
|» » state|[leg_state](#schemaleg_state)|false|none|Leg Status|
|» » to|object|false|none|none|
|» » type|[channel_type](#schemachannel_type)|false|none|Channel type|
|» » uuid|[leg_id](#schemaleg_id)|true|none|The id of the leg. rtc_id and call_id are leg id|
|_links|object|true|none|none|
|» self|object|true|none|none|
|» » href|string|false|none|none|
|count|number|true|none|The total number of records returned by your request.|
|page_size|[page_size](#schemapage_size)|true|none|The amount of records returned in this response|
|record_index|[record_index](#schemarecord_index)|true|none|Return `page_size` amount of conversations from this index in the response. That is, if your request returns 300 conversations, set `record_index` to 5 in order to return conversations 50 to 59. The default value is 0. That is, the first `page_size` calls.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » state|terminated|
|» » type|app|
|» » type|phone|
|» » type|sip|
|» » type|websocket|
|» » type|vbc|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a leg

<a id="opIddeleteLeg"></a>

> Code samples

```bash
curl https://api.nexmo.com/legs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /legs/{leg_id}`

<h3 id="delete-a-leg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|leg_id|path|string|true|Leg ID|

> Example responses

> 200 Response

```json
{}
```

<h3 id="delete-a-leg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response with empty JSON|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS__links_conversation">_links_conversation</h2>
<!-- backwards compatibility -->
<a id="schema_links_conversation"></a>
<a id="schema__links_conversation"></a>
<a id="tocS_links_conversation"></a>
<a id="tocs_links_conversation"></a>

```json
{
  "self": {
    "href": "https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|object|false|none|none|

<h2 id="tocS__links_conversations_list">_links_conversations_list</h2>
<!-- backwards compatibility -->
<a id="schema_links_conversations_list"></a>
<a id="schema__links_conversations_list"></a>
<a id="tocS_links_conversations_list"></a>
<a id="tocs_links_conversations_list"></a>

```json
{
  "self": {
    "href": "https://api.nexmo.com/v0.1/conversations?page_size=2&record_index=10&"
  }
}
```

A series of links between resources in this API in the http://stateless.co/hal_specification.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|object|true|none|none|

<h2 id="tocS_action">action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
"start"
```

Recording Action

<h2 id="tocS_channel">channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "from": {
    "type": "app",
    "user": "jamie"
  },
  "leg_id": "a595959595959595995",
  "leg_ids": [
    {
      "leg_id": "a595959595959595995"
    }
  ],
  "to": {
    "type": "app",
    "user": "jamie"
  },
  "type": "phone"
}
```

A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|object|false|none|none|
|leg_id|[leg_id](#schemaleg_id)|false|none|The id of the leg. rtc_id and call_id are leg id|
|leg_ids|[object]|false|none|Leg ids associated with this Channel. The first item in the array represents the main active Leg. The second item, if exists, represents a screen-share Leg.|
|to|object|false|none|none|
|type|[channel_type](#schemachannel_type)|false|none|Channel type|

#### Enumerated Values

|Property|Value|
|---|---|
|type|app|
|type|phone|
|type|sip|
|type|websocket|
|type|vbc|

<h2 id="tocS_channel_number">channel_number</h2>
<!-- backwards compatibility -->
<a id="schemachannel_number"></a>
<a id="schema_channel_number"></a>
<a id="tocSchannel_number"></a>
<a id="tocschannel_number"></a>

```json
"a447700900585"
```

this can be a phone number or a random string

<h2 id="tocS_channel_type">channel_type</h2>
<!-- backwards compatibility -->
<a id="schemachannel_type"></a>
<a id="schema_channel_type"></a>
<a id="tocSchannel_type"></a>
<a id="tocschannel_type"></a>

```json
"phone"
```

Channel type

<h2 id="tocS_conversation_id">conversation_id</h2>
<!-- backwards compatibility -->
<a id="schemaconversation_id"></a>
<a id="schema_conversation_id"></a>
<a id="tocSconversation_id"></a>
<a id="tocsconversation_id"></a>

```json
"CON-63f61863-4a51-4f6b-86e1-46edebio0391"
```

The unique identifier for this conversation

<h2 id="tocS_conversation_properties">conversation_properties</h2>
<!-- backwards compatibility -->
<a id="schemaconversation_properties"></a>
<a id="schema_conversation_properties"></a>
<a id="tocSconversation_properties"></a>
<a id="tocsconversation_properties"></a>

```json
{
  "ttl": 60
}
```

Conversation properties

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ttl|number|false|none|Time to leave. After how many seconds an empty conversation is deleted.|

<h2 id="tocS_display_name">display_name</h2>
<!-- backwards compatibility -->
<a id="schemadisplay_name"></a>
<a id="schema_display_name"></a>
<a id="tocSdisplay_name"></a>
<a id="tocsdisplay_name"></a>

```json
"Customer Chat"
```

The display name for the conversation. It does not have to be unique

<h2 id="tocS_display_name_user">display_name_user</h2>
<!-- backwards compatibility -->
<a id="schemadisplay_name_user"></a>
<a id="schema_display_name_user"></a>
<a id="tocSdisplay_name_user"></a>
<a id="tocsdisplay_name_user"></a>

```json
"My User Name"
```

A string to be displayed as user name. It does not need to be unique

<h2 id="tocS_event_body">event_body</h2>
<!-- backwards compatibility -->
<a id="schemaevent_body"></a>
<a id="schema_event_body"></a>
<a id="tocSevent_body"></a>
<a id="tocsevent_body"></a>

```json
{
  "text": "My Text"
}
```

Event Body

<h2 id="tocS_event_id">event_id</h2>
<!-- backwards compatibility -->
<a id="schemaevent_id"></a>
<a id="schema_event_id"></a>
<a id="tocSevent_id"></a>
<a id="tocsevent_id"></a>

```json
"5"
```

Event id. This is a progressive integer

<h2 id="tocS_event_method">event_method</h2>
<!-- backwards compatibility -->
<a id="schemaevent_method"></a>
<a id="schema_event_method"></a>
<a id="tocSevent_method"></a>
<a id="tocsevent_method"></a>

```json
"POST"
```

The HTTP method used to send event information to event_url.

<h2 id="tocS_event_retrieved">event_retrieved</h2>
<!-- backwards compatibility -->
<a id="schemaevent_retrieved"></a>
<a id="schema_event_retrieved"></a>
<a id="tocSevent_retrieved"></a>
<a id="tocsevent_retrieved"></a>

```json
{
  "body": {
    "text": "My Text"
  },
  "from": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
  "href": "https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391/events/1",
  "id": "5",
  "state": "invited",
  "timestamp": "2020-01-01T14:00:00.00Z",
  "to": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
  "type": "text"
}
```

Retrieve Events Response Payload Object Item

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|[event_body](#schemaevent_body)|true|none|Event Body|
|from|[member_id](#schemamember_id)|false|none|Member ID|
|href|[href_event](#schemahref_event)|true|none|A link towards a conversation event included in Conversation API|
|id|[event_id](#schemaevent_id)|true|none|Event id. This is a progressive integer|
|state|[member_state](#schemamember_state)|false|none|The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown`|
|timestamp|[timestamp_created](#schematimestamp_created)|true|none|Time of creation|
|to|[member_id](#schemamember_id)|false|none|Member ID|
|type|[event_type](#schemaevent_type)|true|none|Event type|

#### Enumerated Values

|Property|Value|
|---|---|
|state|invited|
|state|joined|
|state|left|
|state|unknown|

<h2 id="tocS_event_type">event_type</h2>
<!-- backwards compatibility -->
<a id="schemaevent_type"></a>
<a id="schema_event_type"></a>
<a id="tocSevent_type"></a>
<a id="tocsevent_type"></a>

```json
"text"
```

Event type

<h2 id="tocS_event_url">event_url</h2>
<!-- backwards compatibility -->
<a id="schemaevent_url"></a>
<a id="schema_event_url"></a>
<a id="tocSevent_url"></a>
<a id="tocsevent_url"></a>

```json
[
  "https://example.com/event"
]
```

The webhook endpoint where recording progress events are sent to.

<h2 id="tocS_format">format</h2>
<!-- backwards compatibility -->
<a id="schemaformat"></a>
<a id="schema_format"></a>
<a id="tocSformat"></a>
<a id="tocsformat"></a>

```json
"mp3"
```

Record the Conversation in a specific format.

<h2 id="tocS_href">href</h2>
<!-- backwards compatibility -->
<a id="schemahref"></a>
<a id="schema_href"></a>
<a id="tocShref"></a>
<a id="tocshref"></a>

```json
"https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391"
```

A link towards a resources included in Conversation API

<h2 id="tocS_href_conversation">href_conversation</h2>
<!-- backwards compatibility -->
<a id="schemahref_conversation"></a>
<a id="schema_href_conversation"></a>
<a id="tocShref_conversation"></a>
<a id="tocshref_conversation"></a>

```json
"https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391"
```

A link towards a conversation included in Conversation API

<h2 id="tocS_href_conversations_list">href_conversations_list</h2>
<!-- backwards compatibility -->
<a id="schemahref_conversations_list"></a>
<a id="schema_href_conversations_list"></a>
<a id="tocShref_conversations_list"></a>
<a id="tocshref_conversations_list"></a>

```json
"https://api.nexmo.com/v0.1/conversations?page_size=2&record_index=10&"
```

A link towards a conversations list included in Conversation API

<h2 id="tocS_href_event">href_event</h2>
<!-- backwards compatibility -->
<a id="schemahref_event"></a>
<a id="schema_href_event"></a>
<a id="tocShref_event"></a>
<a id="tocshref_event"></a>

```json
"https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391/events/1"
```

A link towards a conversation event included in Conversation API

<h2 id="tocS_href_member">href_member</h2>
<!-- backwards compatibility -->
<a id="schemahref_member"></a>
<a id="schema_href_member"></a>
<a id="tocShref_member"></a>
<a id="tocshref_member"></a>

```json
"https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391/members/MEM-63f61863-4a51-4f6b-86e1-46edebio0391"
```

A link towards a member included in Conversation API

<h2 id="tocS_href_rtc">href_rtc</h2>
<!-- backwards compatibility -->
<a id="schemahref_rtc"></a>
<a id="schema_href_rtc"></a>
<a id="tocShref_rtc"></a>
<a id="tocshref_rtc"></a>

```json
"https://api.nexmo.com/v0.1/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391/rtc/7777777777777"
```

A link towards a rtc (leg) included in Conversation API

<h2 id="tocS_href_user">href_user</h2>
<!-- backwards compatibility -->
<a id="schemahref_user"></a>
<a id="schema_href_user"></a>
<a id="tocShref_user"></a>
<a id="tocshref_user"></a>

```json
"https://api.nexmo.com/v0.1/users/USR-63f61863-4a51-4f6b-86e1-46edebio0391"
```

A link towards a user included in Conversation API

<h2 id="tocS_image_url">image_url</h2>
<!-- backwards compatibility -->
<a id="schemaimage_url"></a>
<a id="schema_image_url"></a>
<a id="tocSimage_url"></a>
<a id="tocsimage_url"></a>

```json
"https://example.com/image.png"
```

A link to an image for conversations' and users' avatars

<h2 id="tocS_initiator">initiator</h2>
<!-- backwards compatibility -->
<a id="schemainitiator"></a>
<a id="schema_initiator"></a>
<a id="tocSinitiator"></a>
<a id="tocsinitiator"></a>

```json
{
  "joined": {
    "isSystem": true,
    "member_id": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
    "user_id": "USR-63f61863-4a51-4f6b-86e1-46edebio0391"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|joined|object|false|none|none|

<h2 id="tocS_knocker_id">knocker_id</h2>
<!-- backwards compatibility -->
<a id="schemaknocker_id"></a>
<a id="schema_knocker_id"></a>
<a id="tocSknocker_id"></a>
<a id="tocsknocker_id"></a>

```json
"a972836a-450f-35fa-156c-52a2ab5b7d25"
```

Knocker ID. A knocker is a pre-member of a conversation who does not exist yet

<h2 id="tocS_leg_id">leg_id</h2>
<!-- backwards compatibility -->
<a id="schemaleg_id"></a>
<a id="schema_leg_id"></a>
<a id="tocSleg_id"></a>
<a id="tocsleg_id"></a>

```json
"a595959595959595995"
```

The id of the leg. rtc_id and call_id are leg id

<h2 id="tocS_leg_state">leg_state</h2>
<!-- backwards compatibility -->
<a id="schemaleg_state"></a>
<a id="schema_leg_state"></a>
<a id="tocSleg_state"></a>
<a id="tocsleg_state"></a>

```json
"terminated"
```

Leg Status

<h2 id="tocS_media">media</h2>
<!-- backwards compatibility -->
<a id="schemamedia"></a>
<a id="schema_media"></a>
<a id="tocSmedia"></a>
<a id="tocsmedia"></a>

```json
{
  "audio_settings": {
    "earmuffed": false,
    "enabled": false,
    "muted": false
  }
}
```

Media Object

<h2 id="tocS_member_action">member_action</h2>
<!-- backwards compatibility -->
<a id="schemamember_action"></a>
<a id="schema_member_action"></a>
<a id="tocSmember_action"></a>
<a id="tocsmember_action"></a>

```json
"join"
```

Invite or join a member to a conversation

<h2 id="tocS_member_id">member_id</h2>
<!-- backwards compatibility -->
<a id="schemamember_id"></a>
<a id="schema_member_id"></a>
<a id="tocSmember_id"></a>
<a id="tocsmember_id"></a>

```json
"MEM-63f61863-4a51-4f6b-86e1-46edebio0391"
```

Member ID

<h2 id="tocS_member_id_inviting">member_id_inviting</h2>
<!-- backwards compatibility -->
<a id="schemamember_id_inviting"></a>
<a id="schema_member_id_inviting"></a>
<a id="tocSmember_id_inviting"></a>
<a id="tocsmember_id_inviting"></a>

```json
"MEM-63f61863-4a51-4f6b-86e1-46edebio0391"
```

Member ID of the member that sends the invitation

<h2 id="tocS_member_state">member_state</h2>
<!-- backwards compatibility -->
<a id="schemamember_state"></a>
<a id="schema_member_state"></a>
<a id="tocSmember_state"></a>
<a id="tocsmember_state"></a>

```json
"invited"
```

The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown`

<h2 id="tocS_name">name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"my_unique_name"
```

Unique name

<h2 id="tocS_name_conversation">name_conversation</h2>
<!-- backwards compatibility -->
<a id="schemaname_conversation"></a>
<a id="schema_name_conversation"></a>
<a id="tocSname_conversation"></a>
<a id="tocsname_conversation"></a>

```json
"customer_chat"
```

Unique name for a conversation

<h2 id="tocS_name_user">name_user</h2>
<!-- backwards compatibility -->
<a id="schemaname_user"></a>
<a id="schema_name_user"></a>
<a id="tocSname_user"></a>
<a id="tocsname_user"></a>

```json
"my_user_name"
```

Unique name for a user

<h2 id="tocS_page_size">page_size</h2>
<!-- backwards compatibility -->
<a id="schemapage_size"></a>
<a id="schema_page_size"></a>
<a id="tocSpage_size"></a>
<a id="tocspage_size"></a>

```json
50
```

The amount of records returned in this response

<h2 id="tocS_record_index">record_index</h2>
<!-- backwards compatibility -->
<a id="schemarecord_index"></a>
<a id="schema_record_index"></a>
<a id="tocSrecord_index"></a>
<a id="tocsrecord_index"></a>

```json
0
```

Return `page_size` amount of conversations from this index in the response. That is, if your request returns 300 conversations, set `record_index` to 5 in order to return conversations 50 to 59. The default value is 0. That is, the first `page_size` calls.

<h2 id="tocS_split">split</h2>
<!-- backwards compatibility -->
<a id="schemasplit"></a>
<a id="schema_split"></a>
<a id="tocSsplit"></a>
<a id="tocssplit"></a>

```json
"conversation"
```

Record the sent and received audio in separate channels of a stereo recording

<h2 id="tocS_timestamp">timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"2020-01-01T14:00:00.00Z"
```

Timestamp

<h2 id="tocS_timestamp_created">timestamp_created</h2>
<!-- backwards compatibility -->
<a id="schematimestamp_created"></a>
<a id="schema_timestamp_created"></a>
<a id="tocStimestamp_created"></a>
<a id="tocstimestamp_created"></a>

```json
"2020-01-01T14:00:00.00Z"
```

Time of creation

<h2 id="tocS_timestamp_destroyed">timestamp_destroyed</h2>
<!-- backwards compatibility -->
<a id="schematimestamp_destroyed"></a>
<a id="schema_timestamp_destroyed"></a>
<a id="tocStimestamp_destroyed"></a>
<a id="tocstimestamp_destroyed"></a>

```json
"2020-01-01T14:20:00.00Z"
```

Time of last update

<h2 id="tocS_timestamp_leg_end_time">timestamp_leg_end_time</h2>
<!-- backwards compatibility -->
<a id="schematimestamp_leg_end_time"></a>
<a id="schema_timestamp_leg_end_time"></a>
<a id="tocStimestamp_leg_end_time"></a>
<a id="tocstimestamp_leg_end_time"></a>

```json
"2020-01-01T14:00:00.00Z"
```

Time of leg end

<h2 id="tocS_timestamp_leg_start_time">timestamp_leg_start_time</h2>
<!-- backwards compatibility -->
<a id="schematimestamp_leg_start_time"></a>
<a id="schema_timestamp_leg_start_time"></a>
<a id="tocStimestamp_leg_start_time"></a>
<a id="tocstimestamp_leg_start_time"></a>

```json
"2020-01-01T14:00:00.00Z"
```

Time of leg start

<h2 id="tocS_timestamp_obj_leg">timestamp_obj_leg</h2>
<!-- backwards compatibility -->
<a id="schematimestamp_obj_leg"></a>
<a id="schema_timestamp_obj_leg"></a>
<a id="tocStimestamp_obj_leg"></a>
<a id="tocstimestamp_obj_leg"></a>

```json
{
  "end": "2020-01-01T14:00:00.00Z",
  "request": "2020-01-01T14:00:00.00Z",
  "start": "2020-01-01T14:00:00.00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|[timestamp](#schematimestamp)|false|none|Timestamp|
|request|[timestamp](#schematimestamp)|false|none|Timestamp|
|start|[timestamp_created](#schematimestamp_created)|false|none|Time of creation|

<h2 id="tocS_timestamp_res_conversation">timestamp_res_conversation</h2>
<!-- backwards compatibility -->
<a id="schematimestamp_res_conversation"></a>
<a id="schema_timestamp_res_conversation"></a>
<a id="tocStimestamp_res_conversation"></a>
<a id="tocstimestamp_res_conversation"></a>

```json
{
  "created": "2020-01-01T14:00:00.00Z",
  "destroyed": "2020-01-01T14:20:00.00Z",
  "updated": "2020-01-01T14:05:00.00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|[timestamp_created](#schematimestamp_created)|false|none|Time of creation|
|destroyed|[timestamp_destroyed](#schematimestamp_destroyed)|false|none|Time of last update|
|updated|[timestamp_updated](#schematimestamp_updated)|false|none|Time of last update|

<h2 id="tocS_timestamp_res_event">timestamp_res_event</h2>
<!-- backwards compatibility -->
<a id="schematimestamp_res_event"></a>
<a id="schema_timestamp_res_event"></a>
<a id="tocStimestamp_res_event"></a>
<a id="tocstimestamp_res_event"></a>

```json
"2020-01-01T14:00:00.00Z"
```

Time of event creation

<h2 id="tocS_timestamp_res_member">timestamp_res_member</h2>
<!-- backwards compatibility -->
<a id="schematimestamp_res_member"></a>
<a id="schema_timestamp_res_member"></a>
<a id="tocStimestamp_res_member"></a>
<a id="tocstimestamp_res_member"></a>

```json
{
  "invited": "2020-01-01T14:00:00.00Z",
  "joined": "2020-01-01T14:00:00.00Z",
  "left": "2020-01-01T14:00:00.00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invited|[timestamp](#schematimestamp)|false|none|Timestamp|
|joined|[timestamp](#schematimestamp)|false|none|Timestamp|
|left|[timestamp](#schematimestamp)|false|none|Timestamp|

<h2 id="tocS_timestamp_updated">timestamp_updated</h2>
<!-- backwards compatibility -->
<a id="schematimestamp_updated"></a>
<a id="schema_timestamp_updated"></a>
<a id="tocStimestamp_updated"></a>
<a id="tocstimestamp_updated"></a>

```json
"2020-01-01T14:05:00.00Z"
```

Time of last update

<h2 id="tocS_user_id">user_id</h2>
<!-- backwards compatibility -->
<a id="schemauser_id"></a>
<a id="schema_user_id"></a>
<a id="tocSuser_id"></a>
<a id="tocsuser_id"></a>

```json
"USR-63f61863-4a51-4f6b-86e1-46edebio0391"
```

User ID

<h2 id="tocS_user_id_or_user_name">user_id_or_user_name</h2>
<!-- backwards compatibility -->
<a id="schemauser_id_or_user_name"></a>
<a id="schema_user_id_or_user_name"></a>
<a id="tocSuser_id_or_user_name"></a>
<a id="tocsuser_id_or_user_name"></a>

```json
"someone_else_user_name"
```

user name or user id of the inviter
