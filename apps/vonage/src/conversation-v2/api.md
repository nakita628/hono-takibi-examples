<h1 id="conversation-api">Conversation API v1.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Conversation API enables you to build conversation features where communication can take place across multiple mediums including IP Messaging, PSTN Voice, SMS and WebRTC Audio and Video. The context of the conversations is maintained though each communication event taking place within a conversation, no matter the medium.

Base URLs:

* <a href="https://api.nexmo.com/v0.2">https://api.nexmo.com/v0.2</a>

Email: <a href="mailto:devrel@vonage.com">Vonage DevRel</a> 
Web: <a href="https://developer.nexmo.com/">Vonage DevRel</a> 

<h1 id="conversation-api-conversation">conversation</h1>

A conversation is a shared core component that Vonage APIs rely on. Conversations happen over multiple mediums and and can have associated Users through Memberships.

## List Conversations

<a id="opIdget-conversations"></a>

> Code samples

```bash
curl https://api.nexmo.com/conversations \
  -H 'Accept: application/json'
```

`GET /conversations`

Please note that not all data is available in the list endpoint. Once 
you've identified the conversation you need to work with, use the 
[GET /conversations/:id](#get-conversation) endpoint to fetch all of the conversation details


<h3 id="list-conversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer|false|The number of results returned per page.   The default value is `10`. The maximum value is `100`.|
|order|query|string|false|Show the most (`desc`) / least (`asc`) recently created entries first|
|cursor|query|string|false|The cursor to start returning results from.<br><br>You are not expected to provide this manually, but to follow the url provided in `_links.next.href` in the response which contains a `cursor` value<br>|
|date_start|query|string|false|Search for conversations created after this ISO8601 date|
|date_end|query|string|false|Search for conversations created before this ISO8601 date|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "data": {
      "conversations": [
        {
          "_links": {
            "self": {
              "href": "https://api.nexmo.com/v0.2/conversations/CON-c4724477-72ac-438e-9fc0-1d3e2ff8728c"
            }
          },
          "display_name": "Conversation with Ashley",
          "id": "CON-afe887d8-d587-4280-9aae-dfa4c9227d5e",
          "image_url": "https://example.com/my-image.png",
          "name": "my-conversation",
          "timestamp": {
            "created": "2019-09-03T18:40:24.324Z"
          }
        }
      ]
    }
  },
  "_links": {
    "first": {
      "href": "https://api.nexmo.com/v0.2/conversations?order=desc&page_size=10"
    },
    "next": {
      "href": "https://api.nexmo.com/v0.2/conversations?order=desc&page_size=10&cursor=88b395c167da4d94e929705cbd63b829a650e69a39197bfd4c949f4243f60dc4babb696afa404d2f44e7775e32b967f2a1a0bb8fb259c0999ba5a4e501eaab55"
    },
    "prev": {
      "href": "https://api.nexmo.com/v0.2/conversations?order=desc&page_size=10&cursor=069626a3de11d2ec900dff5042197bd75f1ce41dafc3f2b2481eb9151086e59aae9dba3e3a8858dc355232d499c310fbfbec43923ff657c0de8d49ffed9f7edb"
    },
    "self": {
      "href": "https://api.nexmo.com/v0.2/conversations?order=desc&page_size=10&cursor=88b395c167da4d94e929705cbd63b82973771e7d390d274a58e301386d5762600a3ffd799bfb3fc5190c5a0d124cdd0fc72fe6e450506b18e4e2edf9fe84c7a0"
    }
  },
  "cursor": "88b395c167da4d94e929705cbd63b82973771e7d390d274a58e301386d5762600a3ffd799bfb3fc5190c5a0d124cdd0fc72fe6e450506b18e4e2edf9fe84c7a0",
  "page_size": 10
}
```

<h3 id="list-conversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-conversations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|» data|object|false|none|none|
|» » conversations|[[conversation_list](#schemaconversation_list)]|false|none|List of conversations matching the provided filter|
|_links|object|false|none|none|
|» first|object|false|none|none|
|» » href|string|false|none|none|
|» next|object|false|none|none|
|» » href|string|false|none|none|
|» prev|object|false|none|none|
|» » href|string|false|none|none|
|» self|object|false|none|none|
|» » href|string|false|none|none|
|cursor|string|false|none|Current cursor|
|page_size|integer|false|none|The number of results returned on this page.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="conversation-api-member">member</h1>

Memberships connect users with conversations. Each membership has one conversation and one user however a user can have many memberships to conversations just as conversations can have many members.

## List Members

<a id="opIdget-members"></a>

> Code samples

```bash
curl https://api.nexmo.com/conversations/CON-afe887d8-d587-4280-9aae-dfa4c9227d5e/members \
  -H 'Accept: application/json'
```

`GET /conversations/{conversation_id}/members`

<h3 id="list-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|The ID of the conversation|
|page_size|query|integer|false|The number of results returned per page.   The default value is `10`. The maximum value is `100`.|
|order|query|string|false|Show the most (`desc`) / least (`asc`) recently created entries first|
|cursor|query|string|false|The cursor to start returning results from.<br><br>You are not expected to provide this manually, but to follow the url provided in `_links.next.href` in the response which contains a `cursor` value<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "data": {
      "members": [
        {
          "_links": {
            "self": {
              "href": "https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/members/MEM-e784d5d1-dff2-424a-9de7-bc34f1901177"
            }
          },
          "display_name": "Ashley Arthur",
          "id": "MEM-afe887d8-d587-4280-9aae-dfa4c9227d5e",
          "name": "ashley",
          "state": "JOINED",
          "user_id": "USR-2c52f0ec-7a48-4b52-9d47-df47482b2b7e"
        }
      ]
    }
  },
  "_links": {
    "first": {
      "href": "https://api.nexmo.com/v0.2/members?order=desc&page_size=10"
    },
    "next": {
      "href": "https://api.nexmo.com/v0.2/members?order=desc&page_size=10&cursor=88b395c167da4d94e929705cbd63b829a650e69a39197bfd4c949f4243f60dc4babb696afa404d2f44e7775e32b967f2a1a0bb8fb259c0999ba5a4e501eaab55"
    },
    "prev": {
      "href": "https://api.nexmo.com/v0.2/members?order=desc&page_size=10&cursor=069626a3de11d2ec900dff5042197bd75f1ce41dafc3f2b2481eb9151086e59aae9dba3e3a8858dc355232d499c310fbfbec43923ff657c0de8d49ffed9f7edb"
    },
    "self": {
      "href": "https://api.nexmo.com/v0.2/members?order=desc&page_size=10&cursor=88b395c167da4d94e929705cbd63b82973771e7d390d274a58e301386d5762600a3ffd799bfb3fc5190c5a0d124cdd0fc72fe6e450506b18e4e2edf9fe84c7a0"
    }
  },
  "page_size": 10
}
```

<h3 id="list-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|» data|object|false|none|none|
|» » members|[[member_list](#schemamember_list)]|false|none|List of members matching the provided filter|
|_links|object|false|none|none|
|» first|object|false|none|none|
|» » href|string|false|none|none|
|» next|object|false|none|none|
|» » href|string|false|none|none|
|» prev|object|false|none|none|
|» » href|string|false|none|none|
|» self|object|false|none|none|
|» » href|string|false|none|none|
|page_size|integer|false|none|The number of results returned on this page|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="conversation-api-event">event</h1>

Events are actions that occur within a conversation. Examples of this includes: Text events from members, or invite events from users

## List Events

<a id="opIdget-events"></a>

> Code samples

```bash
curl https://api.nexmo.com/conversations/CON-afe887d8-d587-4280-9aae-dfa4c9227d5e/events \
  -H 'Accept: application/json'
```

`GET /conversations/{conversation_id}/events`

<h3 id="list-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|The ID of the conversation|
|page_size|query|integer|false|The number of results returned per page.   The default value is `10`. The maximum value is `100`.|
|order|query|string|false|Show the most (`desc`) / least (`asc`) recently created entries first|
|cursor|query|string|false|The cursor to start returning results from.<br><br>You are not expected to provide this manually, but to follow the url provided in `_links.next.href` in the response which contains a `cursor` value<br>|
|start_id|query|string|false|The ID to start returning events at|
|end_id|query|string|false|The ID to end returning events at|
|event_type|query|string|false|The type of event to search for. Does not currently support custom events|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "data": {
      "events": [
        {
          "body": {
            "text": "Hello World"
          },
          "conversation_id": "CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625",
          "type": "text",
          "_links": {
            "self": {
              "href": "https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/events/9"
            }
          },
          "from": "MEM-afe887d8-d587-4280-9aae-dfa4c9227d5e",
          "id": 9,
          "timestamp": "2019-09-12T19:49:21.823Z"
        }
      ]
    }
  },
  "_links": {
    "first": {
      "href": "https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/events?page_size=10"
    },
    "next": {
      "href": "https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/events?page_size=10&cursor=4db03d9254d1cdaecc7b1fc15b6bf1a81f3d3151191d784f1327893f8dc96416"
    },
    "prev": {
      "href": "https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/events?page_size=10&cursor=84963f79fd25785be9706bd38bfd30c264f71964fa4edc8d8b4dd5f30bbd9f7c"
    },
    "self": {
      "href": "https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/events?page_size=10&cursor=a30e3b7a3dcda1434f64bbb1a5fa489b"
    }
  },
  "page_size": 10
}
```

<h3 id="list-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|» data|object|false|none|none|
|» » events|[[all_events](#schemaall_events)]|false|none|List of events matching the provided filter|
|_links|object|false|none|none|
|» first|object|false|none|none|
|» » href|string|false|none|none|
|» next|object|false|none|none|
|» » href|string|false|none|none|
|» prev|object|false|none|none|
|» » href|string|false|none|none|
|» self|object|false|none|none|
|» » href|string|false|none|none|
|page_size|integer|false|none|The number of results returned on this page.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="conversation-api-default">Default</h1>

## List Users

<a id="opIdget-users"></a>

> Code samples

```bash
curl https://api.nexmo.com/users \
  -H 'Accept: application/json'
```

`GET /users`

<h3 id="list-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer|false|The number of results returned per page.   The default value is `10`. The maximum value is `100`.|
|order|query|string|false|Show the most (`desc`) / least (`asc`) recently created entries first|
|cursor|query|string|false|The cursor to start returning results from.<br><br>You are not expected to provide this manually, but to follow the url provided in `_links.next.href` in the response which contains a `cursor` value<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "data": {
      "users": [
        {
          "_links": {
            "self": {
              "href": "https://api.nexmo.com/v0.2/users/USR-e46d9542-752a-4786-8f12-25a2e623a793"
            }
          },
          "id": "USR-e46d9542-752a-4786-8f12-25a2e623a793",
          "name": "ashley"
        }
      ]
    }
  },
  "_links": {
    "first": {
      "href": "https://api.nexmo.com/v0.2/users?order=desc&page_size=10"
    },
    "next": {
      "href": "https://api.nexmo.com/v0.2/users?order=desc&page_size=10&cursor=88b395c167da4d94e929705cbd63b829a650e69a39197bfd4c949f4243f60dc4babb696afa404d2f44e7775e32b967f2a1a0bb8fb259c0999ba5a4e501eaab55"
    },
    "prev": {
      "href": "https://api.nexmo.com/v0.2/users?order=desc&page_size=10&cursor=069626a3de11d2ec900dff5042197bd75f1ce41dafc3f2b2481eb9151086e59aae9dba3e3a8858dc355232d499c310fbfbec43923ff657c0de8d49ffed9f7edb"
    },
    "self": {
      "href": "https://api.nexmo.com/v0.2/users?order=desc&page_size=10&cursor=88b395c167da4d94e929705cbd63b82973771e7d390d274a58e301386d5762600a3ffd799bfb3fc5190c5a0d124cdd0fc72fe6e450506b18e4e2edf9fe84c7a0"
    }
  },
  "cursor": "88b395c167da4d94e929705cbd63b82973771e7d390d274a58e301386d5762600a3ffd799bfb3fc5190c5a0d124cdd0fc72fe6e450506b18e4e2edf9fe84c7a0",
  "page_size": 10
}
```

<h3 id="list-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|» data|object|false|none|none|
|» » users|[[user_list](#schemauser_list)]|false|none|List of users matching the provided filter|
|_links|object|false|none|none|
|» first|object|false|none|none|
|» » href|string|false|none|none|
|» next|object|false|none|none|
|» » href|string|false|none|none|
|» prev|object|false|none|none|
|» » href|string|false|none|none|
|» self|object|false|none|none|
|» » href|string|false|none|none|
|cursor|string|false|none|Current cursor|
|page_size|integer|false|none|The number of results returned on this page|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_all_events">all_events</h2>
<!-- backwards compatibility -->
<a id="schemaall_events"></a>
<a id="schema_all_events"></a>
<a id="tocSall_events"></a>
<a id="tocsall_events"></a>

```json
{
  "body": {
    "text": "Hello World"
  },
  "conversation_id": "CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625",
  "type": "text",
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/events/9"
    }
  },
  "from": "MEM-afe887d8-d587-4280-9aae-dfa4c9227d5e",
  "id": 9,
  "timestamp": "2019-09-12T19:49:21.823Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[text_event](#schematext_event)|false|none|none|
|*anyOf*|[custom_event](#schemacustom_event)|false|none|none|
|*anyOf*|[member_invited_event](#schemamember_invited_event)|false|none|none|
|*anyOf*|[member_left_event](#schemamember_left_event)|false|none|none|

<h2 id="tocS_conversation_display_name">conversation_display_name</h2>
<!-- backwards compatibility -->
<a id="schemaconversation_display_name"></a>
<a id="schema_conversation_display_name"></a>
<a id="tocSconversation_display_name"></a>
<a id="tocsconversation_display_name"></a>

```json
"Conversation with Ashley"
```

The public facing name of the conversation

<h2 id="tocS_conversation_id">conversation_id</h2>
<!-- backwards compatibility -->
<a id="schemaconversation_id"></a>
<a id="schema_conversation_id"></a>
<a id="tocSconversation_id"></a>
<a id="tocsconversation_id"></a>

```json
"CON-c4724477-72ac-438e-9fc0-1d3e2ff8728c"
```

Automatically generated conversation ID

<h2 id="tocS_conversation_image_url">conversation_image_url</h2>
<!-- backwards compatibility -->
<a id="schemaconversation_image_url"></a>
<a id="schema_conversation_image_url"></a>
<a id="tocSconversation_image_url"></a>
<a id="tocsconversation_image_url"></a>

```json
"https://example.com/my-image.png"
```

An image URL that you associate with the conversation

<h2 id="tocS_conversation_list">conversation_list</h2>
<!-- backwards compatibility -->
<a id="schemaconversation_list"></a>
<a id="schema_conversation_list"></a>
<a id="tocSconversation_list"></a>
<a id="tocsconversation_list"></a>

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v0.2/conversations/CON-c4724477-72ac-438e-9fc0-1d3e2ff8728c"
    }
  },
  "display_name": "Conversation with Ashley",
  "id": "CON-afe887d8-d587-4280-9aae-dfa4c9227d5e",
  "image_url": "https://example.com/my-image.png",
  "name": "my-conversation",
  "timestamp": {
    "created": "2019-09-03T18:40:24.324Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|display_name|[conversation_display_name](#schemaconversation_display_name)|false|none|The public facing name of the conversation|
|id|string|false|none|The ID of the conversation|
|image_url|[conversation_image_url](#schemaconversation_image_url)|false|none|An image URL that you associate with the conversation|
|name|[conversation_name](#schemaconversation_name)|false|none|Your internal conversation name. Must be unique|
|timestamp|object|false|none|none|

<h2 id="tocS_conversation_name">conversation_name</h2>
<!-- backwards compatibility -->
<a id="schemaconversation_name"></a>
<a id="schema_conversation_name"></a>
<a id="tocSconversation_name"></a>
<a id="tocsconversation_name"></a>

```json
"my-conversation"
```

Your internal conversation name. Must be unique

<h2 id="tocS_custom_event">custom_event</h2>
<!-- backwards compatibility -->
<a id="schemacustom_event"></a>
<a id="schema_custom_event"></a>
<a id="tocScustom_event"></a>
<a id="tocscustom_event"></a>

```json
{
  "body": {
    "my": "Custom Data"
  },
  "type": "custom:my_event",
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/events/9"
    }
  },
  "from": "MEM-afe887d8-d587-4280-9aae-dfa4c9227d5e",
  "id": 9,
  "timestamp": "2019-09-12T19:49:21.823Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|object|false|none|The body of your `custom` event|
|type|string|false|none|The event type (`custom:<YOUR_IDENTIFIER>`)|
|_links|object|false|none|none|
|from|string|false|none|The member ID of the sender|
|id|integer|false|none|The ID of the event|
|timestamp|string|false|none|The time that the event happened|

<h2 id="tocS_event">event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/events/9"
    }
  },
  "from": "MEM-afe887d8-d587-4280-9aae-dfa4c9227d5e",
  "id": 9,
  "timestamp": "2019-09-12T19:49:21.823Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|from|string|false|none|The member ID of the sender|
|id|integer|false|none|The ID of the event|
|timestamp|string|false|none|The time that the event happened|

<h2 id="tocS_member">member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/members/MEM-e784d5d1-dff2-424a-9de7-bc34f1901177"
    }
  },
  "display_name": "Ashley Arthur",
  "id": "MEM-afe887d8-d587-4280-9aae-dfa4c9227d5e",
  "name": "ashley",
  "state": "JOINED",
  "user_id": "USR-2c52f0ec-7a48-4b52-9d47-df47482b2b7e",
  "channel": {
    "type": "app"
  },
  "initiator": {
    "invited": {
      "is_system": true
    },
    "joined": {
      "is_system": true
    }
  },
  "media": {
    "audio_settings": {
      "earmuffed": false,
      "enabled": false,
      "muted": false
    }
  },
  "timestamp": {
    "invited": "2019-09-03T18:40:24.324Z",
    "joined": "2019-09-12T16:27:07.450Z",
    "left": "2019-09-13T02:16:55.390Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|display_name|string|false|none|The display name of the User|
|id|string|false|none|Member ID|
|name|string|false|none|The name of the User|
|state|string|false|none|The state that the member is in for this conversation|
|user_id|string|false|none|The ID of the User|
|channel|object|false|none|none|
|initiator|object|false|none|none|
|media|object|false|none|The current media state for the member|
|timestamp|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|INVITED|
|state|JOINED|

<h2 id="tocS_member_invited_event">member_invited_event</h2>
<!-- backwards compatibility -->
<a id="schemamember_invited_event"></a>
<a id="schema_member_invited_event"></a>
<a id="tocSmember_invited_event"></a>
<a id="tocsmember_invited_event"></a>

```json
{
  "type": "member:invited",
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/events/9"
    }
  },
  "from": "MEM-afe887d8-d587-4280-9aae-dfa4c9227d5e",
  "id": 9,
  "timestamp": "2019-09-12T19:49:21.823Z",
  "body": {
    "_links": {
      "self": {
        "href": "https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/members/MEM-e784d5d1-dff2-424a-9de7-bc34f1901177"
      }
    },
    "display_name": "Ashley Arthur",
    "id": "MEM-afe887d8-d587-4280-9aae-dfa4c9227d5e",
    "name": "ashley",
    "state": "JOINED",
    "user_id": "USR-2c52f0ec-7a48-4b52-9d47-df47482b2b7e",
    "channel": {
      "type": "app"
    },
    "initiator": {
      "invited": {
        "is_system": true
      },
      "joined": {
        "is_system": true
      }
    },
    "media": {
      "audio_settings": {
        "earmuffed": false,
        "enabled": false,
        "muted": false
      }
    },
    "timestamp": {
      "invited": "2019-09-03T18:40:24.324Z",
      "joined": "2019-09-12T16:27:07.450Z",
      "left": "2019-09-13T02:16:55.390Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The event type (`member:invited`)|
|_links|object|false|none|none|
|from|string|false|none|The member ID of the sender|
|id|integer|false|none|The ID of the event|
|timestamp|string|false|none|The time that the event happened|
|body|[member](#schemamember)|false|none|none|

<h2 id="tocS_member_left_event">member_left_event</h2>
<!-- backwards compatibility -->
<a id="schemamember_left_event"></a>
<a id="schema_member_left_event"></a>
<a id="tocSmember_left_event"></a>
<a id="tocsmember_left_event"></a>

```json
{
  "type": "member:left",
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/events/9"
    }
  },
  "from": "MEM-afe887d8-d587-4280-9aae-dfa4c9227d5e",
  "id": 9,
  "timestamp": "2019-09-12T19:49:21.823Z",
  "body": {
    "_links": {
      "self": {
        "href": "https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/members/MEM-e784d5d1-dff2-424a-9de7-bc34f1901177"
      }
    },
    "display_name": "Ashley Arthur",
    "id": "MEM-afe887d8-d587-4280-9aae-dfa4c9227d5e",
    "name": "ashley",
    "state": "JOINED",
    "user_id": "USR-2c52f0ec-7a48-4b52-9d47-df47482b2b7e",
    "channel": {
      "type": "app"
    },
    "initiator": {
      "invited": {
        "is_system": true
      },
      "joined": {
        "is_system": true
      }
    },
    "media": {
      "audio_settings": {
        "earmuffed": false,
        "enabled": false,
        "muted": false
      }
    },
    "timestamp": {
      "invited": "2019-09-03T18:40:24.324Z",
      "joined": "2019-09-12T16:27:07.450Z",
      "left": "2019-09-13T02:16:55.390Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The event type (`member:left`)|
|_links|object|false|none|none|
|from|string|false|none|The member ID of the sender|
|id|integer|false|none|The ID of the event|
|timestamp|string|false|none|The time that the event happened|
|body|[member](#schemamember)|false|none|none|

<h2 id="tocS_member_list">member_list</h2>
<!-- backwards compatibility -->
<a id="schemamember_list"></a>
<a id="schema_member_list"></a>
<a id="tocSmember_list"></a>
<a id="tocsmember_list"></a>

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/members/MEM-e784d5d1-dff2-424a-9de7-bc34f1901177"
    }
  },
  "display_name": "Ashley Arthur",
  "id": "MEM-afe887d8-d587-4280-9aae-dfa4c9227d5e",
  "name": "ashley",
  "state": "JOINED",
  "user_id": "USR-2c52f0ec-7a48-4b52-9d47-df47482b2b7e"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|display_name|string|false|none|The display name of the User|
|id|string|false|none|Member ID|
|name|string|false|none|The name of the User|
|state|string|false|none|The state that the member is in for this conversation|
|user_id|string|false|none|The ID of the User|

#### Enumerated Values

|Property|Value|
|---|---|
|state|INVITED|
|state|JOINED|

<h2 id="tocS_text_event">text_event</h2>
<!-- backwards compatibility -->
<a id="schematext_event"></a>
<a id="schema_text_event"></a>
<a id="tocStext_event"></a>
<a id="tocstext_event"></a>

```json
{
  "body": {
    "text": "Hello World"
  },
  "conversation_id": "CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625",
  "type": "text",
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v0.2/conversations/CON-92a44c64-7e4e-485f-a0c4-1f2adfc44625/events/9"
    }
  },
  "from": "MEM-afe887d8-d587-4280-9aae-dfa4c9227d5e",
  "id": 9,
  "timestamp": "2019-09-12T19:49:21.823Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|object|false|none|The body of the `text` event|
|conversation_id|string|false|none|The ID of the Conversation that the member belongs to|
|type|string|false|none|The event type (`text`)|
|_links|object|false|none|none|
|from|string|false|none|The member ID of the sender|
|id|integer|false|none|The ID of the event|
|timestamp|string|false|none|The time that the event happened|

<h2 id="tocS_user_id">user_id</h2>
<!-- backwards compatibility -->
<a id="schemauser_id"></a>
<a id="schema_user_id"></a>
<a id="tocSuser_id"></a>
<a id="tocsuser_id"></a>

```json
"USR-e46d9542-752a-4786-8f12-25a2e623a793"
```

The ID of the user

<h2 id="tocS_user_links">user_links</h2>
<!-- backwards compatibility -->
<a id="schemauser_links"></a>
<a id="schema_user_links"></a>
<a id="tocSuser_links"></a>
<a id="tocsuser_links"></a>

```json
{
  "self": {
    "href": "https://api.nexmo.com/v0.2/users/USR-e46d9542-752a-4786-8f12-25a2e623a793"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|object|false|none|none|

<h2 id="tocS_user_list">user_list</h2>
<!-- backwards compatibility -->
<a id="schemauser_list"></a>
<a id="schema_user_list"></a>
<a id="tocSuser_list"></a>
<a id="tocsuser_list"></a>

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v0.2/users/USR-e46d9542-752a-4786-8f12-25a2e623a793"
    }
  },
  "id": "USR-e46d9542-752a-4786-8f12-25a2e623a793",
  "name": "ashley"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[user_links](#schemauser_links)|false|none|none|
|id|[user_id](#schemauser_id)|false|none|The ID of the user|
|name|[user_name](#schemauser_name)|false|none|The name of the user|

<h2 id="tocS_user_name">user_name</h2>
<!-- backwards compatibility -->
<a id="schemauser_name"></a>
<a id="schema_user_name"></a>
<a id="tocSuser_name"></a>
<a id="tocsuser_name"></a>

```json
"ashley"
```

The name of the user
