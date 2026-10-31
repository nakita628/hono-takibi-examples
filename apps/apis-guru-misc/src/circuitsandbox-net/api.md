<h1 id="rest-api-version-2">REST API Version 2 v2.9.235</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Circuit REST API to interact with the Circuit system.

[Learn more about the Circuit Development Community](https://www.circuit.com/web/developers/home)

Base URLs:

* <a href="https://circuitsandbox.net/rest/v2">https://circuitsandbox.net/rest/v2</a>

# Authentication

- oAuth2 authentication.

    - Flow: implicit
    - Authorization URL = [https://circuitsandbox.net/oauth/authorize](https://circuitsandbox.net/oauth/authorize)

|Scope|Scope Description|
|---|---|
|ALL|allows full access to all functionalities of the REST API|
|CALLS|allows to start or join real time collaboration session|
|CALL_RECORDING|allows to record a call|
|CREATE_CONVERSATIONS_CONTENT|Create content of conversations|
|CREATE_SPACE_CONTENT|*Originally missing*|
|DELETE_CONVERSATIONS_CONTENT|Delete content of conversations|
|DELETE_SPACE_CONTENT|*Originally missing*|
|MANAGE_CONVERSATIONS|Manage conversations|
|MANAGE_PRESENCE|Manage presence state|
|MANAGE_SPACE|*Originally missing*|
|MENTION_EVENT|allows to receive text item events in which the user was mentioned|
|MODERATE_CONVERSATIONS|MOderate conversations|
|ORGANIZE_CONVERSATIONS|Organize conversations|
|ORGANIZE_SPACE|*Originally missing*|
|READ_CONVERSATIONS|allows to read conversations of the authenticated user|
|READ_SPACE|*Originally missing*|
|READ_USER|allows to read user information for all users that belong to the tenant of the authenticated user|
|READ_USER_PROFILE|allows to read the user profile of the authenticated user|
|SEARCH_CONVERSATIONS|Search conversations|
|UPDATE_CONVERSATION_CONTENT|Update content of conversations|
|UPDATE_SPACE_CONTENT|*Originally missing*|
|USER_MANAGEMENT|allows to create, update and delete users|
|USER_TO_USER|User2User|
|WRITE_CONVERSATIONS|allows to create and update conversations of the authenticated user or to post messages|
|WRITE_SPACE|*Originally missing*|
|WRITE_USER_PROFILE|allows to update the user profile of the authenticated user|

<h1 id="rest-api-version-2-conversations">Conversations</h1>

## Gets a list of conversations

<a id="opIdgetConversations"></a>

> Code samples

```bash
curl https://example.com/conversations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations`

Gets a list of conversations and communities the authenticated user participates in.
OauthScopes: READ_CONVERSATIONS

<h3 id="gets-a-list-of-conversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modTime|query|string(date-time)|false|The modification time of the conversation in UTC format. During the query the conversations before (<i>default</i>) or after this timestamp are returned. In case no timestamp is specified the current server time in UTC is used, i.e. the last 25 modified conversations are returned|
|direction|query|string|false|The direction of the search based on the modification time. Valid values are either BEFORE (default) or AFTER|
|results|query|number(int32)|false|The maximum number of returned results (default 25). The maximum allowed value is 100.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|BEFORE|
|direction|AFTER|

> Example responses

> 200 Response

```json
[
  {
    "avatar": "string",
    "avatarLarge": "string",
    "convId": "string",
    "creationTime": 0,
    "creatorId": "string",
    "creatorTenantId": "string",
    "description": "string",
    "isGuestAccessDisabled": true,
    "isModerated": true,
    "modificationTime": 0,
    "participants": [
      "string"
    ],
    "topic": "string",
    "topicPlaceholder": "string",
    "type": "string"
  }
]
```

<h3 id="gets-a-list-of-conversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The matching conversations|Inline|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="gets-a-list-of-conversations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Conversation](#schemaconversation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Gets conversations

<a id="opIdgetConversationsById"></a>

> Code samples

```bash
curl 'https://example.com/conversations/byIds?convIds=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/byIds`

Gets conversation based on the given IDs.
OauthScopes: READ_CONVERSATIONS

<h3 id="gets-conversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convIds|query|[string]|true|The array of IDs of the conversations which should be retrieved|

> Example responses

> 200 Response

```json
[
  {
    "avatar": "string",
    "avatarLarge": "string",
    "convId": "string",
    "creationTime": 0,
    "creatorId": "string",
    "creatorTenantId": "string",
    "description": "string",
    "isGuestAccessDisabled": true,
    "isModerated": true,
    "modificationTime": 0,
    "participants": [
      "string"
    ],
    "topic": "string",
    "topicPlaceholder": "string",
    "type": "string"
  }
]
```

<h3 id="gets-conversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of existing conversations successfully retrieved.|Inline|
|400|Bad Request|missing documentation|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="gets-conversations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Conversation](#schemaconversation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Gets a list of communities

<a id="opIdgetCommunityConversations"></a>

> Code samples

```bash
curl https://example.com/conversations/community \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/community`

Gets a list of communities. This endpoint can be used to explore the communities the authenticated user could join.
OauthScopes: READ_CONVERSATIONS

<h3 id="gets-a-list-of-communities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|Defines the type of sorting for the community conversations (default is alphabetical)|
|order|query|string|false|Defines the ordering of the conversations (default is ascending)|
|includeOwn|query|boolean|false|If set to false only conversations are returned where the user is no member of, otherwise all community conversations are returned|
|startIndex|query|number(int32)|false|The index of the conversation that is the first one that has to be returned. E.g. if a request starts with startIndex 40 and results 20 the conversations 40 to 60 are returned|
|results|query|number(int32)|false|The maximum number of returned results (default 25). The maximum allowed value is 100.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|ALPHABETICALLY|
|sort|RECENT_ACTIVITY|
|sort|POPULARITY|
|order|ASCENDING|
|order|DESCENDING|

> Example responses

> 200 Response

```json
[
  {
    "avatar": "string",
    "avatarLarge": "string",
    "convId": "string",
    "creationTime": 0,
    "creatorId": "string",
    "creatorTenantId": "string",
    "description": "string",
    "isGuestAccessDisabled": true,
    "isModerated": true,
    "modificationTime": 0,
    "participants": [
      "string"
    ],
    "topic": "string",
    "topicPlaceholder": "string",
    "type": "string"
  }
]
```

<h3 id="gets-a-list-of-communities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The matching conversations|Inline|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul>a field constraint is violated</ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="gets-a-list-of-communities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Conversation](#schemaconversation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Creates a community conversation

<a id="opIdcreateCommunityConversation"></a>

> Code samples

```bash
curl https://example.com/conversations/community \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'description=string&participants=%5B%22string%22%5D&topic=string'
```

`POST /conversations/community`

Creates a community. Communities are open conversations that anyone in a Circuit domain (tenant) can join without having to be added by another user.
OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

> Body parameter

```yaml
description: string
participants:
  - string
topic: string
```

<h3 id="creates-a-community-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» description|body|string|false|An optional description for the community conversation|
|» participants|body|[string]|false|list of participants that will be part of this conversation, specified by the Circuit user ID or the unique email address. At least one participant needs to be added|
|» topic|body|string|true|An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used)|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "creatorTenantId": "string",
  "description": "string",
  "isGuestAccessDisabled": true,
  "isModerated": true,
  "modificationTime": 0,
  "participants": [
    "string"
  ],
  "topic": "string",
  "topicPlaceholder": "string",
  "type": "string"
}
```

<h3 id="creates-a-community-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The conversation was created successfully and can be accessed via the conversation ID|[Conversation](#schemaconversation)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the userIds passed as parameter are not provided in the correct format</li><li> or an valid email address</li><li>or one or more of the user do not exist</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS MANAGE_CONVERSATIONS )
</aside>

## Updates the information of a community

<a id="opIdupdateConversationCommunity"></a>

> Code samples

```bash
curl https://example.com/conversations/community/string \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'description=string&topic=string'
```

`PUT /conversations/community/{convId}`

Updates the information of the given community.
OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

> Body parameter

```yaml
description: string
topic: string
```

<h3 id="updates-the-information-of-a-community-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation which should be updated|
|body|body|object|false|none|
|» description|body|string|false|An optional description for the community conversation|
|» topic|body|string|false|An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used)|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "creatorTenantId": "string",
  "description": "string",
  "isGuestAccessDisabled": true,
  "isModerated": true,
  "modificationTime": 0,
  "participants": [
    "string"
  ],
  "topic": "string",
  "topicPlaceholder": "string",
  "type": "string"
}
```

<h3 id="updates-the-information-of-a-community-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gets the updated conversation object with the new topic / description|[Conversation](#schemaconversation)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the conversation is not of type COMMUNITY</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS MANAGE_CONVERSATIONS )
</aside>

## Adds the authenticated user to a community

<a id="opIdjoinCommunityConversation"></a>

> Code samples

```bash
curl https://example.com/conversations/community/string/join \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /conversations/community/{convId}/join`

Adds the authenticated user to the given community (i.e., allows the user to join this community). Contrary to the operation of adding a new participant, this operation can only be performed by a user who is not yet a member of the community.
OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

<h3 id="adds-the-authenticated-user-to-a-community-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation which the user will join|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "creatorTenantId": "string",
  "description": "string",
  "isGuestAccessDisabled": true,
  "isModerated": true,
  "modificationTime": 0,
  "participants": [
    "string"
  ],
  "topic": "string",
  "topicPlaceholder": "string",
  "type": "string"
}
```

<h3 id="adds-the-authenticated-user-to-a-community-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gets the conversation object to which the participants was added|[Conversation](#schemaconversation)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the userIds passed as parameter are not provided in the correct format</li><li> or an valid email address</li><li>or one or more of the user do not exist</li><li>the conversation does not exist</li><li>the conversation is not of type COMMUNITY</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS MANAGE_CONVERSATIONS )
</aside>

## Adds participants to a community

<a id="opIdaddParticipantCommunity"></a>

> Code samples

```bash
curl https://example.com/conversations/community/string/participants \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'participants=%5B%22string%22%5D'
```

`POST /conversations/community/{convId}/participants`

Adds one or more participants to the given community. This operation can only be performed by a user who is already a member of the community.
OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

> Body parameter

```yaml
participants:
  - string
```

<h3 id="adds-participants-to-a-community-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation to which the participant has to be added.|
|body|body|object|true|none|
|» participants|body|[string]|true|The IDs or the unique email addresses of the Circuit users that should to be added.|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "creatorTenantId": "string",
  "description": "string",
  "isGuestAccessDisabled": true,
  "isModerated": true,
  "modificationTime": 0,
  "participants": [
    "string"
  ],
  "topic": "string",
  "topicPlaceholder": "string",
  "type": "string"
}
```

<h3 id="adds-participants-to-a-community-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gets the conversation object to which the participants were added.|[Conversation](#schemaconversation)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the userIds passed as parameter are not provided in the correct format</li><li> or an valid email address</li><li>or one or more of the user do not exist</li><li>the conversation does not exist</li><li>the conversation is not of type COMMUNITY</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS MANAGE_CONVERSATIONS )
</aside>

## Removes participants from a community

<a id="opIdremoveParticipantCommunity"></a>

> Code samples

```bash
curl 'https://example.com/conversations/community/string/participants?participants=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /conversations/community/{convId}/participants`

Removes one or more participants from the given community. The last participant of a community cannot be removed. This operation can only be performed by a user who is already a member of the community.
OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

<h3 id="removes-participants-from-a-community-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation from which the participant have to be removed|
|participants|query|[string]|true|The IDs or the unique email addresses of the Circuit users that have to be removed|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "creatorTenantId": "string",
  "description": "string",
  "isGuestAccessDisabled": true,
  "isModerated": true,
  "modificationTime": 0,
  "participants": [
    "string"
  ],
  "topic": "string",
  "topicPlaceholder": "string",
  "type": "string"
}
```

<h3 id="removes-participants-from-a-community-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gets the conversation object from which the participants were removed.|[Conversation](#schemaconversation)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul></li>the userIds passed as parameter are not provided in the correct format</li><li> or an valid email address</li><li>or one or more of the user do not exist</li><li>the conversation does not exist</li><li>the conversation is not of type COMMUNITY</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS MANAGE_CONVERSATIONS )
</aside>

## Gets the conference details for multiple conversations

<a id="opIdgetJoinDetailsMultiple"></a>

> Code samples

```bash
curl 'https://example.com/conversations/conversationdetails?convIds=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/conversationdetails`

Gets the conference details of the given conversations. Conference details include the URL, which is used to join the conference through a web or mobile application, as well as the dial-in phone numbers and conference PIN, which are used to join the conference by phone.
OauthScopes: READ_CONVERSATIONS

<h3 id="gets-the-conference-details-for-multiple-conversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convIds|query|[string]|true|An array of IDs of the conversations for which the join details should be returned|

> Example responses

> 200 Response

```json
[
  {
    "bridgeNumbers": [
      {
        "bridgeNumber": "string",
        "country": "string",
        "isMostUsed": true,
        "locale": "string",
        "name": "string",
        "type": "string"
      }
    ],
    "convId": "string",
    "conversationCreatorId": "string",
    "isModerationAllowed": true,
    "isRecordingAllowed": true,
    "link": "string",
    "pin": "string"
  }
]
```

<h3 id="gets-the-conference-details-for-multiple-conversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The join details.|Inline|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="gets-the-conference-details-for-multiple-conversations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ConversationDetails](#schemaconversationdetails)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Checks for a 1-to-1 conversation

<a id="opIdgetDirectConversation"></a>

> Code samples

```bash
curl 'https://example.com/conversations/direct?participant=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/direct`

Checks if a 1-to-1 conversation between the authenticated user and the user with the provided userId exists.
OauthScopes: READ_CONVERSATIONS

<h3 id="checks-for-a-1-to-1-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|participant|query|string|true|The participant that will be part of this conversation together with the creator, specified by the Circuit user ID or the unique email address|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "creatorTenantId": "string",
  "description": "string",
  "isGuestAccessDisabled": true,
  "isModerated": true,
  "modificationTime": 0,
  "participants": [
    "string"
  ],
  "topic": "string",
  "topicPlaceholder": "string",
  "type": "string"
}
```

<h3 id="checks-for-a-1-to-1-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The conversation was found and can be accessed via the conversation ID|[Conversation](#schemaconversation)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the data format of the passed user does not match either a UUID (user primary key)</li><li> or an valid email address</li><li>or the user does not exist</li><li>or the user is the same who initiates the request</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Creates a 1-to-1 conversation

<a id="opIdcreateDirectConversation"></a>

> Code samples

```bash
curl https://example.com/conversations/direct \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'participant=string'
```

`POST /conversations/direct`

Creates a 1-to-1 conversation between the authenticated user and the user with the provided userId. In case there is already an existing 1-to-1 conversation between these users, the endpoint returns the existing conversation.
OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

> Body parameter

```yaml
participant: string
```

<h3 id="creates-a-1-to-1-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» participant|body|string|true|The participant that will be part of this conversation together with the creator, specified by the Circuit user ID or the unique email address|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "creatorTenantId": "string",
  "description": "string",
  "isGuestAccessDisabled": true,
  "isModerated": true,
  "modificationTime": 0,
  "participants": [
    "string"
  ],
  "topic": "string",
  "topicPlaceholder": "string",
  "type": "string"
}
```

> 409 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "creatorTenantId": "string",
  "description": "string",
  "isGuestAccessDisabled": true,
  "isModerated": true,
  "modificationTime": 0,
  "participants": [
    "string"
  ],
  "topic": "string",
  "topicPlaceholder": "string",
  "type": "string"
}
```

<h3 id="creates-a-1-to-1-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The conversation was created successfully and can be accessed via the conversation ID|[Conversation](#schemaconversation)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the data format of the passed user does not match either a UUID (user primary key)</li><li> or an valid email address</li><li>or the user does not exist</li><li>or the user is the same who initiates the request</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|409|Conflict|A conversation already exists. The response contains this conversation.|[Conversation](#schemaconversation)|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS MANAGE_CONVERSATIONS )
</aside>

## Gets favorite conversations

<a id="opIdgetFavoriteConversations"></a>

> Code samples

```bash
curl https://example.com/conversations/favorite \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/favorite`

Gets the conversationIds which are marked as favorites.
OauthScopes: READ_CONVERSATIONS

<h3 id="gets-favorite-conversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of marked conversations or an empty response.|Inline|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="gets-favorite-conversations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[String](#schemastring)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Creates a group conversation

<a id="opIdcreateGroupConversation"></a>

> Code samples

```bash
curl https://example.com/conversations/group \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'participants=%5B%22string%22%5D&topic=string'
```

`POST /conversations/group`

Creates a group conversation between three or more users. The authenticated user is directly added to this conversation.
OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

> Body parameter

```yaml
participants:
  - string
topic: string
```

<h3 id="creates-a-group-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» participants|body|[string]|true|A list of participants that will be part of this conversation, specified by the Circuit user ID or the unique email address. At least one participant needs to be added|
|» topic|body|string|false|An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used)|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "creatorTenantId": "string",
  "description": "string",
  "isGuestAccessDisabled": true,
  "isModerated": true,
  "modificationTime": 0,
  "participants": [
    "string"
  ],
  "topic": "string",
  "topicPlaceholder": "string",
  "type": "string"
}
```

<h3 id="creates-a-group-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The conversation was created successfully and can be accessed via the conversation ID|[Conversation](#schemaconversation)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the userIds passed as parameter are not provided in the correct format</li><li> or an valid email address</li><li>or one or more of the user do not exist</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS MANAGE_CONVERSATIONS )
</aside>

## Updates the information of a group conversation

<a id="opIdupdateConversationGroup"></a>

> Code samples

```bash
curl https://example.com/conversations/group/string \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'topic=string'
```

`PUT /conversations/group/{convId}`

Updates the information of the given group conversation.
OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

> Body parameter

```yaml
topic: string
```

<h3 id="updates-the-information-of-a-group-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation which should be updated|
|body|body|object|false|none|
|» topic|body|string|false|An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used)|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "creatorTenantId": "string",
  "description": "string",
  "isGuestAccessDisabled": true,
  "isModerated": true,
  "modificationTime": 0,
  "participants": [
    "string"
  ],
  "topic": "string",
  "topicPlaceholder": "string",
  "type": "string"
}
```

<h3 id="updates-the-information-of-a-group-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gets the updated conversation object with the new topic|[Conversation](#schemaconversation)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the conversation is not of type GROUP</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS MANAGE_CONVERSATIONS )
</aside>

## Adds participants to a group conversation

<a id="opIdaddParticipantGroup"></a>

> Code samples

```bash
curl https://example.com/conversations/group/string/participants \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'participants=%5B%22string%22%5D'
```

`POST /conversations/group/{convId}/participants`

Adds one or more participants to the given group conversation. This operation can only be performed by a user who is already a member of the conversation.
OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

> Body parameter

```yaml
participants:
  - string
```

<h3 id="adds-participants-to-a-group-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation to which the participant has to be added.|
|body|body|object|true|none|
|» participants|body|[string]|true|The IDs or the unique email addresses of the Circuit users that should to be added.|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "creatorTenantId": "string",
  "description": "string",
  "isGuestAccessDisabled": true,
  "isModerated": true,
  "modificationTime": 0,
  "participants": [
    "string"
  ],
  "topic": "string",
  "topicPlaceholder": "string",
  "type": "string"
}
```

<h3 id="adds-participants-to-a-group-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gets the conversation object to which the participants were added.|[Conversation](#schemaconversation)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the userIds passed as parameter are not provided in the correct format</li><li> or an valid email address</li><li>or one or more of the user do not exist</li><li>the conversation does not exist</li><li>the conversation is not of type GROUP</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS MANAGE_CONVERSATIONS )
</aside>

## Removes participants from a group conversation

<a id="opIdremoveParticipantGroup"></a>

> Code samples

```bash
curl 'https://example.com/conversations/group/string/participants?participants=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /conversations/group/{convId}/participants`

Removes one or more participants from the given group conversation. The last participant of a group conversation cannot be removed. This operation can only be performed on behalf of a user who is already a member of the conversation.
OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

<h3 id="removes-participants-from-a-group-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation from which the participant have to be removed|
|participants|query|[string]|true|The IDs or the unique email addresses of the Circuit users that have to be removed|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "creatorTenantId": "string",
  "description": "string",
  "isGuestAccessDisabled": true,
  "isModerated": true,
  "modificationTime": 0,
  "participants": [
    "string"
  ],
  "topic": "string",
  "topicPlaceholder": "string",
  "type": "string"
}
```

<h3 id="removes-participants-from-a-group-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gets the conversation object from which the participants were removed.|[Conversation](#schemaconversation)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the userIds passed as parameter are not provided in the correct format</li><li> or an valid email address</li><li>or one or more of the user do not exist</li><li>the conversation does not exist</li><li>the conversation is not of type GROUP</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS MANAGE_CONVERSATIONS )
</aside>

## Returns conversations with a certain label

<a id="opIdgetConversationsByLabel"></a>

> Code samples

```bash
curl https://example.com/conversations/label/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/label/{labelId}`

Returns conversations with matching labels and paginated 
OauthScopes: READ_CONVERSATIONS

<h3 id="returns-conversations-with-a-certain-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|labelId|path|string|true|Id of the label to look for|
|nextPagePointer|query|string|false|Pointer to the next page of conversations if there are any|
|pageSize|query|number(int32)|false|Numbers of max conversations per page|

> Example responses

> 200 Response

```json
{
  "conversationList": [
    {
      "avatar": "string",
      "avatarLarge": "string",
      "convId": "string",
      "creationTime": 0,
      "creatorId": "string",
      "creatorTenantId": "string",
      "description": "string",
      "isGuestAccessDisabled": true,
      "isModerated": true,
      "modificationTime": 0,
      "participants": [
        "string"
      ],
      "topic": "string",
      "topicPlaceholder": "string",
      "type": "string"
    }
  ],
  "hasMore": null,
  "nextPagePointer": "string"
}
```

<h3 id="returns-conversations-with-a-certain-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of conversations that are tagged with a certain label|[ConversationsPage](#schemaconversationspage)|
|400|Bad Request|he request cannot be fulfilled due to bad syntax|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Gets a list of the flagged messages

<a id="opIdgetFlagItemConv"></a>

> Code samples

```bash
curl https://example.com/conversations/messages/flag \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/messages/flag`

Gets a list of all the messages the authenticated user has flagged. This endpoint should be used carefully in case where the authenticated user has a lot of flagged messages.
OauthScopes: READ_CONVERSATIONS

<h3 id="gets-a-list-of-the-flagged-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gets the list of flagged items|Inline|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="gets-a-list-of-the-flagged-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ConversationItem](#schemaconversationitem)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Returns a text item

<a id="opIdgetSingleConversationtem"></a>

> Code samples

```bash
curl https://example.com/conversations/messages/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/messages/{itemId}`

Returns a text item for a given item id
OauthScopes: READ_CONVERSATIONS

<h3 id="returns-a-text-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemId|path|string|true|The ID of the item that will be returned|

> Example responses

> 200 Response

```json
{
  "attachments": [
    {
      "creationTime": 0,
      "creatorId": "string",
      "deleteUrl": "string",
      "fileId": "string",
      "fileName": "string",
      "itemId": "string",
      "mimeType": "string",
      "modificationTime": 0,
      "size": 0,
      "url": "string"
    }
  ],
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "includeInUnreadCount": true,
  "itemId": "string",
  "modificationTime": 0,
  "rtc": {
    "ended": {
      "duration": 0,
      "maxNumberOfAttendees": 0,
      "pickFromParticipant": "string"
    },
    "missed": "string",
    "moved": {
      "conversationId": "string",
      "direction": "string"
    },
    "rtcParticipants": [
      {
        "displayName": "string",
        "fullyQualifiedNumber": "string",
        "phoneNumber": "string",
        "resolvedUser": null,
        "type": "string",
        "userId": "string"
      }
    ],
    "type": "string"
  },
  "system": {
    "affectedParticipants": [
      "string"
    ],
    "newTopic": "string",
    "oldTopic": "string",
    "type": "string"
  },
  "text": {
    "content": "string",
    "contentType": "string",
    "formMetaData": "string",
    "isWebhookMessage": true,
    "likedUserIds": [
      "string"
    ],
    "parentId": "string",
    "preview": {
      "imageURI": "string",
      "srcURL": "string",
      "title": "string",
      "type": "string"
    },
    "state": "string",
    "subject": "string"
  },
  "type": "string"
}
```

<h3 id="returns-a-text-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The item was successful returned|[ConversationItem](#schemaconversationitem)|
|400|Bad Request|The item with the given id was not found|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Set conversation moderated

<a id="opIdmoderateConversation"></a>

> Code samples

```bash
curl https://example.com/conversations/moderate/string \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /conversations/moderate/{convId}`

Set a conversation in moderatd mode. Moderators can be added and removed
OauthScopes: WRITE_CONVERSATIONS, MODERATE_CONVERSATIONS

<h3 id="set-conversation-moderated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation which will be set to moderated state|

<h3 id="set-conversation-moderated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The conversation is in moderated mode|None|
|401|Unauthorized|Permission denied|None|
|403|Forbidden|Forbidden to edit this conversation|None|
|500|Internal Server Error|Internal server error|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS MODERATE_CONVERSATIONS )
</aside>

## Resolves an invite token to a conversation

<a id="opIdresolveInvitationToken"></a>

> Code samples

```bash
curl 'https://example.com/conversations/resolveinvitetoken?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/resolveinvitetoken`

Resolves an invite token to a conversation
OauthScopes: READ_CONVERSATIONS

<h3 id="resolves-an-invite-token-to-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|The invite token to resolve|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "creatorTenantId": "string",
  "description": "string",
  "isGuestAccessDisabled": true,
  "isModerated": true,
  "modificationTime": 0,
  "participants": [
    "string"
  ],
  "topic": "string",
  "topicPlaceholder": "string",
  "type": "string"
}
```

<h3 id="resolves-an-invite-token-to-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the conversation object that belongs to the invite token if you are member of the conversation|[Conversation](#schemaconversation)|
|400|Bad Request|In case no invitation token was send|None|
|401|Unauthorized|The authentication was not successful|None|
|404|Not Found|If the token does not exist or you are not member of the conversation |None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Performs a conversation search

<a id="opIdsearchConversations"></a>

> Code samples

```bash
curl 'https://example.com/conversations/search?term=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/search`

Performs a search for conversation content. A maximum of 100 conversations is returned. If you hit this limit you should refine the search term.
OauthScopes: READ_CONVERSATIONS

<h3 id="performs-a-conversation-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|term|query|string|true|The search term|
|includeItemIds|query|boolean|false|Optional parameter to specify if a deep or normal search is executed. In a deep search all matching item IDs inside every conversation are returned (up to a maximum of 100). For a normal search only the conversation IDs are returned. Default is a normal search (without item IDs).|
|scope|query|string|false|The search scope, FILES\|\|PEOPLE\|\|MEMBERS\|\|MESSAGES\|\|SENTBY\|\|ALL\|\|CONVERSATIONS\|\|LABEL\|\|FILTER|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scope|FILES|
|scope|PEOPLE|
|scope|MEMBERS|
|scope|MESSAGES|
|scope|SENTBY|
|scope|ALL|
|scope|CONVERSATIONS|
|scope|LABEL|
|scope|FILTER|

> Example responses

> 200 Response

```json
{
  "matchingConversations": [
    {
      "convId": "string",
      "itemIds": [
        "string"
      ]
    }
  ]
}
```

<h3 id="performs-a-conversation-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of conversations and items that match the term|[ConversationSearchResult](#schemaconversationsearchresult)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Set conversation unmoderated

<a id="opIdunmoderateConversation"></a>

> Code samples

```bash
curl https://example.com/conversations/unmoderate/string \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /conversations/unmoderate/{convId}`

Set a conversation to unmoderatd mode
OauthScopes: WRITE_CONVERSATIONS, MODERATE_CONVERSATIONS

<h3 id="set-conversation-unmoderated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation which will be set to unmoderated state|

<h3 id="set-conversation-unmoderated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The conversation is in unmoderated mode|None|
|401|Unauthorized|Forbidden to edit this conversation|None|
|403|Forbidden|Permission denied|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS MODERATE_CONVERSATIONS )
</aside>

## Gets a conversation

<a id="opIdgetConversationbyId"></a>

> Code samples

```bash
curl https://example.com/conversations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/{convId}`

Gets a conversation based on the given ID.
OauthScopes: READ_CONVERSATIONS

<h3 id="gets-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation which should be updated|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "creatorTenantId": "string",
  "description": "string",
  "isGuestAccessDisabled": true,
  "isModerated": true,
  "modificationTime": 0,
  "participants": [
    "string"
  ],
  "topic": "string",
  "topicPlaceholder": "string",
  "type": "string"
}
```

<h3 id="gets-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gets the conversation object|[Conversation](#schemaconversation)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Archives conversation

<a id="opIdarchiveConversation"></a>

> Code samples

```bash
curl https://example.com/conversations/string/archive \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /conversations/{convId}/archive`

Archives a conversation by muting it
OauthScopes: WRITE_CONVERSATIONS

<h3 id="archives-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation which will be archived|

<h3 id="archives-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The conversation was successfully archived|None|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS )
</aside>

## Unmute conversation

<a id="opIdundoArchiveConversation"></a>

> Code samples

```bash
curl https://example.com/conversations/string/archive \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /conversations/{convId}/archive`

The conversation will no longer be archived but active again
OauthScopes: WRITE_CONVERSATIONS

<h3 id="unmute-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation which will be unmarked as muted|

<h3 id="unmute-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The conversation was successfully unmarked|None|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li><li>the conversation was not marked before</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS )
</aside>

## Gets the conference details of a conversation

<a id="opIdgetJoinDetails"></a>

> Code samples

```bash
curl https://example.com/conversations/string/conversationdetails \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/{convId}/conversationdetails`

Gets the conference details of the given conversation. Conference details include the URL, which is used to join the conference through a web or mobile application, as well as the dial-in phone numbers and conference PIN, which are used to join the conference by phone.
OauthScopes: READ_CONVERSATIONS

<h3 id="gets-the-conference-details-of-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation for which the join details should be returned|

> Example responses

> 200 Response

```json
{
  "bridgeNumbers": [
    {
      "bridgeNumber": "string",
      "country": "string",
      "isMostUsed": true,
      "locale": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "convId": "string",
  "conversationCreatorId": "string",
  "isModerationAllowed": true,
  "isRecordingAllowed": true,
  "link": "string",
  "pin": "string"
}
```

<h3 id="gets-the-conference-details-of-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The join details.|[ConversationDetails](#schemaconversationdetails)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Adds a conversation to the favorites

<a id="opIdaddFavorite"></a>

> Code samples

```bash
curl https://example.com/conversations/string/favorite \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /conversations/{convId}/favorite`

Adds a conversation to the favorites. Favorites can be displayed in a separate side tab inside of the Circuit client to have a better overview of important conversations.
OauthScopes: WRITE_CONVERSATIONS

<h3 id="adds-a-conversation-to-the-favorites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation which will be marked as favorite|

<h3 id="adds-a-conversation-to-the-favorites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The conversation was successfully marked|None|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS )
</aside>

## Removes a conversation from favorites

<a id="opIddeleteFavorite"></a>

> Code samples

```bash
curl https://example.com/conversations/string/favorite \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /conversations/{convId}/favorite`

Removes a conversation from favorites. Favorites can be displayed in a separate side tab inside of the Circuit client to have a better overview of important conversations.
OauthScopes: WRITE_CONVERSATIONS

<h3 id="removes-a-conversation-from-favorites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation which will be unmarked as favorite|

<h3 id="removes-a-conversation-from-favorites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The conversation was successfully unmarked|None|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li><li>the conversation was not marked before</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS )
</aside>

## Gets a list of conversation items

<a id="opIdgetConversationItems"></a>

> Code samples

```bash
curl https://example.com/conversations/string/items \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/{convId}/items`

Gets a list of conversation items.
OauthScopes: READ_CONVERSATIONS

<h3 id="gets-a-list-of-conversation-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation to which the items belong|
|modTime|query|string(date-time)|false|The modification time of the item in UTC format. During the query the items before (default) or after this timestamps are returned. In case no timestamp is specified the current server time in UTC is used, i.e. the last 25 modified items are returned|
|direction|query|string|false|The direction of the search based on the modification time. Valid values are either BEFORE (default) or AFTER|
|results|query|number(int32)|false|The maximum number of returned results (default 25). The maximum allowed value is 100.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|BEFORE|
|direction|AFTER|

> Example responses

> 200 Response

```json
[
  {
    "attachments": [
      {
        "creationTime": 0,
        "creatorId": "string",
        "deleteUrl": "string",
        "fileId": "string",
        "fileName": "string",
        "itemId": "string",
        "mimeType": "string",
        "modificationTime": 0,
        "size": 0,
        "url": "string"
      }
    ],
    "convId": "string",
    "creationTime": 0,
    "creatorId": "string",
    "includeInUnreadCount": true,
    "itemId": "string",
    "modificationTime": 0,
    "rtc": {
      "ended": {
        "duration": 0,
        "maxNumberOfAttendees": 0,
        "pickFromParticipant": "string"
      },
      "missed": "string",
      "moved": {
        "conversationId": "string",
        "direction": "string"
      },
      "rtcParticipants": [
        {
          "displayName": "string",
          "fullyQualifiedNumber": "string",
          "phoneNumber": "string",
          "resolvedUser": null,
          "type": "string",
          "userId": "string"
        }
      ],
      "type": "string"
    },
    "system": {
      "affectedParticipants": [
        "string"
      ],
      "newTopic": "string",
      "oldTopic": "string",
      "type": "string"
    },
    "text": {
      "content": "string",
      "contentType": "string",
      "formMetaData": "string",
      "isWebhookMessage": true,
      "likedUserIds": [
        "string"
      ],
      "parentId": "string",
      "preview": {
        "imageURI": "string",
        "srcURL": "string",
        "title": "string",
        "type": "string"
      },
      "state": "string",
      "subject": "string"
    },
    "type": "string"
  }
]
```

<h3 id="gets-a-list-of-conversation-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The matching conversation items|Inline|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="gets-a-list-of-conversation-items-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ConversationItem](#schemaconversationitem)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Adds a label to a conversation

<a id="opIdassignLabel"></a>

> Code samples

```bash
curl https://example.com/conversations/string/label \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'label=string'
```

`POST /conversations/{convId}/label`

Adds a label to a conversation, you can search and organize your conversations based on these labels
OauthScopes: WRITE_CONVERSATIONS, ORGANIZE_CONVERSATIONS

> Body parameter

```yaml
label: string
```

<h3 id="adds-a-label-to-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation to which the label is added|
|body|body|object|true|none|
|» label|body|string|true|The actual label |

> Example responses

> 200 Response

```json
{
  "labelId": "string",
  "value": "string"
}
```

<h3 id="adds-a-label-to-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The label was successfully added|[Label](#schemalabel)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>a field constraint is violated</li><li>you reached the maximum of 250 labels</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS ORGANIZE_CONVERSATIONS )
</aside>

## Removes a label from a conversation

<a id="opIdunassignLabel"></a>

> Code samples

```bash
curl https://example.com/conversations/string/label/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /conversations/{convId}/label/{labelId}`

Removes a label from a conversation, you can search and organize your conversations based on these labels
OauthScopes: WRITE_CONVERSATIONS

<h3 id="removes-a-label-from-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation from which the label is removed|
|labelId|path|string|true|The actual label |

> Example responses

> 200 Response

```json
{
  "labelId": "string",
  "value": "string"
}
```

<h3 id="removes-a-label-from-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The label was successfully removed|[Label](#schemalabel)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>a field constraint is violated</li><li>the label was not assigned to the conversation</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS )
</aside>

## Adds a message to a conversation

<a id="opIdaddTextItem"></a>

> Code samples

```bash
curl https://example.com/conversations/string/messages \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'attachments=%5B%22string%22%5D&content=string&formMetaData=string&subject=string'
```

`POST /conversations/{convId}/messages`

Adds a message to the given conversation. This operation can be only performed on behalf of a user who is already a member of the conversation.
OauthScopes: WRITE_CONVERSATIONS, CREATE_CONVERSATIONS_CONTENT

> Body parameter

```yaml
attachments:
  - string
content: string
formMetaData: string
subject: string
```

<h3 id="adds-a-message-to-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation to which the new item has to be added|
|body|body|object|false|none|
|» attachments|body|[string]|false|A comma separated list of attachment IDs from the file API.|
|» content|body|string|false|The actual content of the item, is mandatory unless an attachment is added|
|» formMetaData|body|string|false|The form meta data of the new text item|
|» subject|body|string|false|The subject (headline) of the new text item|

> Example responses

> 200 Response

```json
{
  "attachments": [
    {
      "creationTime": 0,
      "creatorId": "string",
      "deleteUrl": "string",
      "fileId": "string",
      "fileName": "string",
      "itemId": "string",
      "mimeType": "string",
      "modificationTime": 0,
      "size": 0,
      "url": "string"
    }
  ],
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "includeInUnreadCount": true,
  "itemId": "string",
  "modificationTime": 0,
  "rtc": {
    "ended": {
      "duration": 0,
      "maxNumberOfAttendees": 0,
      "pickFromParticipant": "string"
    },
    "missed": "string",
    "moved": {
      "conversationId": "string",
      "direction": "string"
    },
    "rtcParticipants": [
      {
        "displayName": "string",
        "fullyQualifiedNumber": "string",
        "phoneNumber": "string",
        "resolvedUser": null,
        "type": "string",
        "userId": "string"
      }
    ],
    "type": "string"
  },
  "system": {
    "affectedParticipants": [
      "string"
    ],
    "newTopic": "string",
    "oldTopic": "string",
    "type": "string"
  },
  "text": {
    "content": "string",
    "contentType": "string",
    "formMetaData": "string",
    "isWebhookMessage": true,
    "likedUserIds": [
      "string"
    ],
    "parentId": "string",
    "preview": {
      "imageURI": "string",
      "srcURL": "string",
      "title": "string",
      "type": "string"
    },
    "state": "string",
    "subject": "string"
  },
  "type": "string"
}
```

<h3 id="adds-a-message-to-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gets the new text item object|[ConversationItem](#schemaconversationitem)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS CREATE_CONVERSATIONS_CONTENT )
</aside>

## Gets a list of the flagged messages of a conversation

<a id="opIdgetFlagItem"></a>

> Code samples

```bash
curl https://example.com/conversations/string/messages/flag \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/{convId}/messages/flag`

Gets a list of all the flagged messages in the given conversation.
OauthScopes: READ_CONVERSATIONS, ORGANIZE_CONVERSATIONS

<h3 id="gets-a-list-of-the-flagged-messages-of-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation to which the item belongs|

> Example responses

> 200 Response

```json
[
  {
    "attachments": [
      {
        "creationTime": 0,
        "creatorId": "string",
        "deleteUrl": "string",
        "fileId": "string",
        "fileName": "string",
        "itemId": "string",
        "mimeType": "string",
        "modificationTime": 0,
        "size": 0,
        "url": "string"
      }
    ],
    "convId": "string",
    "creationTime": 0,
    "creatorId": "string",
    "includeInUnreadCount": true,
    "itemId": "string",
    "modificationTime": 0,
    "rtc": {
      "ended": {
        "duration": 0,
        "maxNumberOfAttendees": 0,
        "pickFromParticipant": "string"
      },
      "missed": "string",
      "moved": {
        "conversationId": "string",
        "direction": "string"
      },
      "rtcParticipants": [
        {
          "displayName": "string",
          "fullyQualifiedNumber": "string",
          "phoneNumber": "string",
          "resolvedUser": null,
          "type": "string",
          "userId": "string"
        }
      ],
      "type": "string"
    },
    "system": {
      "affectedParticipants": [
        "string"
      ],
      "newTopic": "string",
      "oldTopic": "string",
      "type": "string"
    },
    "text": {
      "content": "string",
      "contentType": "string",
      "formMetaData": "string",
      "isWebhookMessage": true,
      "likedUserIds": [
        "string"
      ],
      "parentId": "string",
      "preview": {
        "imageURI": "string",
        "srcURL": "string",
        "title": "string",
        "type": "string"
      },
      "state": "string",
      "subject": "string"
    },
    "type": "string"
  }
]
```

<h3 id="gets-a-list-of-the-flagged-messages-of-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gets the list of flagged items|Inline|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="gets-a-list-of-the-flagged-messages-of-a-conversation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ConversationItem](#schemaconversationitem)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS ORGANIZE_CONVERSATIONS )
</aside>

## Updates a message

<a id="opIdupdateTextItem"></a>

> Code samples

```bash
curl https://example.com/conversations/string/messages/string \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'attachments=%5B%22string%22%5D&content=string&formMetaData=string&subject=string'
```

`PUT /conversations/{convId}/messages/{itemId}`

Updates the content or subject of the existing message. Only the creator of the message is allowed to perform this operation.
OauthScopes: WRITE_CONVERSATIONS, UPDATE_CONVERSATION_CONTENT

> Body parameter

```yaml
attachments:
  - string
content: string
formMetaData: string
subject: string
```

<h3 id="updates-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation to which the item belongs|
|itemId|path|string|true|The ID of the item to update|
|body|body|object|false|none|
|» attachments|body|[string]|false|A comma separated list of attachment IDs from the file API.|
|» content|body|string|false|The actual content of the item|
|» formMetaData|body|string|false|The form meta data of the new text item|
|» subject|body|string|false|The subject (headline) of the new text item|

> Example responses

> 200 Response

```json
{
  "attachments": [
    {
      "creationTime": 0,
      "creatorId": "string",
      "deleteUrl": "string",
      "fileId": "string",
      "fileName": "string",
      "itemId": "string",
      "mimeType": "string",
      "modificationTime": 0,
      "size": 0,
      "url": "string"
    }
  ],
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "includeInUnreadCount": true,
  "itemId": "string",
  "modificationTime": 0,
  "rtc": {
    "ended": {
      "duration": 0,
      "maxNumberOfAttendees": 0,
      "pickFromParticipant": "string"
    },
    "missed": "string",
    "moved": {
      "conversationId": "string",
      "direction": "string"
    },
    "rtcParticipants": [
      {
        "displayName": "string",
        "fullyQualifiedNumber": "string",
        "phoneNumber": "string",
        "resolvedUser": null,
        "type": "string",
        "userId": "string"
      }
    ],
    "type": "string"
  },
  "system": {
    "affectedParticipants": [
      "string"
    ],
    "newTopic": "string",
    "oldTopic": "string",
    "type": "string"
  },
  "text": {
    "content": "string",
    "contentType": "string",
    "formMetaData": "string",
    "isWebhookMessage": true,
    "likedUserIds": [
      "string"
    ],
    "parentId": "string",
    "preview": {
      "imageURI": "string",
      "srcURL": "string",
      "title": "string",
      "type": "string"
    },
    "state": "string",
    "subject": "string"
  },
  "type": "string"
}
```

<h3 id="updates-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gets the modified text item object|[ConversationItem](#schemaconversationitem)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS UPDATE_CONVERSATION_CONTENT )
</aside>

## Adds a message to an item

<a id="opIdaddTextItemWithParent"></a>

> Code samples

```bash
curl https://example.com/conversations/string/messages/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'attachments=%5B%22string%22%5D&content=string&formMetaData=string&subject=string'
```

`POST /conversations/{convId}/messages/{itemId}`

Adds a message to the existing item. The added message will be a child item of the message with the given itemId.
OauthScopes: WRITE_CONVERSATIONS

> Body parameter

```yaml
attachments:
  - string
content: string
formMetaData: string
subject: string
```

<h3 id="adds-a-message-to-an-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation to which the new item has to be added|
|itemId|path|string|true|The ID of the item to which the new one has to be added as child|
|body|body|object|false|none|
|» attachments|body|[string]|false|A comma separated list of attachment IDs from the file API.|
|» content|body|string|false|The actual content of the item|
|» formMetaData|body|string|false|The form meta data of the new text item|
|» subject|body|string|false|The subject (headline) of the new text item|

> Example responses

> 200 Response

```json
{
  "attachments": [
    {
      "creationTime": 0,
      "creatorId": "string",
      "deleteUrl": "string",
      "fileId": "string",
      "fileName": "string",
      "itemId": "string",
      "mimeType": "string",
      "modificationTime": 0,
      "size": 0,
      "url": "string"
    }
  ],
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "includeInUnreadCount": true,
  "itemId": "string",
  "modificationTime": 0,
  "rtc": {
    "ended": {
      "duration": 0,
      "maxNumberOfAttendees": 0,
      "pickFromParticipant": "string"
    },
    "missed": "string",
    "moved": {
      "conversationId": "string",
      "direction": "string"
    },
    "rtcParticipants": [
      {
        "displayName": "string",
        "fullyQualifiedNumber": "string",
        "phoneNumber": "string",
        "resolvedUser": null,
        "type": "string",
        "userId": "string"
      }
    ],
    "type": "string"
  },
  "system": {
    "affectedParticipants": [
      "string"
    ],
    "newTopic": "string",
    "oldTopic": "string",
    "type": "string"
  },
  "text": {
    "content": "string",
    "contentType": "string",
    "formMetaData": "string",
    "isWebhookMessage": true,
    "likedUserIds": [
      "string"
    ],
    "parentId": "string",
    "preview": {
      "imageURI": "string",
      "srcURL": "string",
      "title": "string",
      "type": "string"
    },
    "state": "string",
    "subject": "string"
  },
  "type": "string"
}
```

<h3 id="adds-a-message-to-an-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gets the new text item object|[ConversationItem](#schemaconversationitem)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the parent item does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS )
</aside>

## Deletes a message from a conversation

<a id="opIddeleteTextItem"></a>

> Code samples

```bash
curl https://example.com/conversations/string/messages/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /conversations/{convId}/messages/{itemId}`

Marks a message in the given conversation as deleted. Deleted messages are still part of the conversation, but their content is no more visible. This operation can only be performed on behalf of the message's creator.
OauthScopes: WRITE_CONVERSATIONS, DELETE_CONVERSATIONS_CONTENT

<h3 id="deletes-a-message-from-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation to which the item belongs|
|itemId|path|string|true|The ID of the item that will be deleted|

> Example responses

> 200 Response

```json
{
  "attachments": [
    {
      "creationTime": 0,
      "creatorId": "string",
      "deleteUrl": "string",
      "fileId": "string",
      "fileName": "string",
      "itemId": "string",
      "mimeType": "string",
      "modificationTime": 0,
      "size": 0,
      "url": "string"
    }
  ],
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "includeInUnreadCount": true,
  "itemId": "string",
  "modificationTime": 0,
  "rtc": {
    "ended": {
      "duration": 0,
      "maxNumberOfAttendees": 0,
      "pickFromParticipant": "string"
    },
    "missed": "string",
    "moved": {
      "conversationId": "string",
      "direction": "string"
    },
    "rtcParticipants": [
      {
        "displayName": "string",
        "fullyQualifiedNumber": "string",
        "phoneNumber": "string",
        "resolvedUser": null,
        "type": "string",
        "userId": "string"
      }
    ],
    "type": "string"
  },
  "system": {
    "affectedParticipants": [
      "string"
    ],
    "newTopic": "string",
    "oldTopic": "string",
    "type": "string"
  },
  "text": {
    "content": "string",
    "contentType": "string",
    "formMetaData": "string",
    "isWebhookMessage": true,
    "likedUserIds": [
      "string"
    ],
    "parentId": "string",
    "preview": {
      "imageURI": "string",
      "srcURL": "string",
      "title": "string",
      "type": "string"
    },
    "state": "string",
    "subject": "string"
  },
  "type": "string"
}
```

<h3 id="deletes-a-message-from-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gets the deleted text item object|[ConversationItem](#schemaconversationitem)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the item does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS DELETE_CONVERSATIONS_CONTENT )
</aside>

## Adds a flag to a message in a conversation

<a id="opIdflagItem"></a>

> Code samples

```bash
curl https://example.com/conversations/string/messages/string/flag \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'itemCreationTime=string&parentId=string'
```

`POST /conversations/{convId}/messages/{itemId}/flag`

Adds a flag to the given message in the given conversation.
OauthScopes: WRITE_CONVERSATIONS, ORGANIZE_CONVERSATIONS

> Body parameter

```yaml
itemCreationTime: string
parentId: string
```

<h3 id="adds-a-flag-to-a-message-in-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation to which the item belongs|
|itemId|path|string|true|The ID of the item that will be flagged|
|body|body|object|false|none|
|» itemCreationTime|body|string|false|The time when the item was created|
|» parentId|body|string|false|The ID of the item's parent|

<h3 id="adds-a-flag-to-a-message-in-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The item was successful flagged|None|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the item does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS ORGANIZE_CONVERSATIONS )
</aside>

## Removes the flag from a message

<a id="opIdunFlagItem"></a>

> Code samples

```bash
curl https://example.com/conversations/string/messages/string/flag \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /conversations/{convId}/messages/{itemId}/flag`

Removes the flag from a given message that is posted to the given conversation.
OauthScopes: WRITE_CONVERSATIONS, ORGANIZE_CONVERSATIONS

<h3 id="removes-the-flag-from-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation to which the item belongs|
|itemId|path|string|true|The ID of the item that will be flagged|

<h3 id="removes-the-flag-from-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The flagged state of item was successfully removed|None|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the item does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS ORGANIZE_CONVERSATIONS )
</aside>

## Adds a &quot;like&quot; to a message

<a id="opIdlikeItem"></a>

> Code samples

```bash
curl https://example.com/conversations/string/messages/string/like \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /conversations/{convId}/messages/{itemId}/like`

Adds a "like" to the given message in the given conversation
OauthScopes: WRITE_CONVERSATIONS, UPDATE_CONVERSATION_CONTENT

<h3 id="adds-a-like-to-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation to which the item belongs|
|itemId|path|string|true|The ID of the item that will be liked|

<h3 id="adds-a-like-to-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The item was successful liked|None|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the item does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS UPDATE_CONVERSATION_CONTENT )
</aside>

## Removes a &quot;like&quot; from a message

<a id="opIdunlikeItem"></a>

> Code samples

```bash
curl https://example.com/conversations/string/messages/string/like \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /conversations/{convId}/messages/{itemId}/like`

Removes a "like" from the given message in the given conversation
OauthScopes: WRITE_CONVERSATIONS, UPDATE_CONVERSATION_CONTENT

<h3 id="removes-a-like-from-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation to which the item belongs|
|itemId|path|string|true|The ID of the item that will be unliked|

<h3 id="removes-a-like-from-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The item was successful unliked|None|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the item does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS UPDATE_CONVERSATION_CONTENT )
</aside>

## Add moderators

<a id="opIdaddModerators"></a>

> Code samples

```bash
curl https://example.com/conversations/string/moderators \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'moderators=%5B%22string%22%5D'
```

`POST /conversations/{convId}/moderators`

Adds a list of moderators to a conversation
OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

> Body parameter

```yaml
moderators:
  - string
```

<h3 id="add-moderators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation to which the moderators are added|
|body|body|object|true|none|
|» moderators|body|[string]|true|The list of moderator ids to add |

<h3 id="add-moderators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The moderators were successfully added|None|
|400|Bad Request|Error reading list of moderators to add|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS MANAGE_CONVERSATIONS )
</aside>

## Remove moderators

<a id="opIdremoveModerators"></a>

> Code samples

```bash
curl https://example.com/conversations/string/moderators \
  -X DELETE \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'moderators=%5B%22string%22%5D'
```

`DELETE /conversations/{convId}/moderators`

Removes a list of moderators from a conversation
OauthScopes: WRITE_CONVERSATIONS, MODERATE_CONVERSATIONS

> Body parameter

```yaml
moderators:
  - string
```

<h3 id="remove-moderators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation where the moderators are removed|
|body|body|object|true|none|
|» moderators|body|[string]|true|The list of moderator ids to remove|

<h3 id="remove-moderators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The moderators were successfully removed|None|
|400|Bad Request|Failure in moderators list|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS MODERATE_CONVERSATIONS )
</aside>

## Performs a list of participants

<a id="opIdgetParticipantsByConvId"></a>

> Code samples

```bash
curl 'https://example.com/conversations/string/participants?pageSize=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/{convId}/participants`

Performs a search for participants. The max number of participants is configurable. If more participants are available a search pointer is returned for consecutive calls.
OauthScopes: READ_CONVERSATIONS

<h3 id="performs-a-list-of-participants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The id of the conversation the participants are searched for.|
|pageSize|query|number(int32)|true|The page size of the hit list|
|name|query|string|false|Part of name to filter the results|
|type|query|string|false|Type of participant to filter the results|
|searchPointer|query|string|false|Pointer for paged output. Add to consecutive request to get next page|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|REGULAR|
|type|MODERATOR|
|type|GUEST|
|type|FORMER|
|type|BOT|

> Example responses

> 200 Response

```json
[
  {
    "hasMore": true,
    "participantList": [
      {
        "displayName": "string",
        "firstName": "string",
        "isDeleted": true,
        "largeImageUri": "string",
        "lastName": "string",
        "smallImageUri": "string",
        "type": "string",
        "userId": "string"
      }
    ],
    "searchPointer": "string"
  }
]
```

<h3 id="performs-a-list-of-participants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of conversations and items that match the term|Inline|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="performs-a-list-of-participants-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ConversationParticipantsList](#schemaconversationparticipantslist)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Returns pinned topics of a conversation

<a id="opIdgetPinnedConversations"></a>

> Code samples

```bash
curl https://example.com/conversations/string/pins \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/{convId}/pins`

Returns pinned topics of a conversation
OauthScopes: READ_CONVERSATIONS

<h3 id="returns-pinned-topics-of-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|ID of the conversation|

> Example responses

> 200 Response

```json
[
  {
    "conversationId": "string",
    "conversationItemId": "string",
    "pinnedTime": 0
  }
]
```

<h3 id="returns-pinned-topics-of-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The pinned topics|Inline|
|400|Bad Request|The request cannot be fulfilled due to bad syntax|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="returns-pinned-topics-of-a-conversation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PinnedTopic](#schemapinnedtopic)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Pins a topic of a conversation

<a id="opIdpinAConversation"></a>

> Code samples

```bash
curl https://example.com/conversations/string/pins/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /conversations/{convId}/pins/{itemId}`

Pins a topic of a conversation
OauthScopes: READ_CONVERSATIONS

<h3 id="pins-a-topic-of-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation|
|itemId|path|string|true|The ID of the topic|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "creatorTenantId": "string",
  "description": "string",
  "isGuestAccessDisabled": true,
  "isModerated": true,
  "modificationTime": 0,
  "participants": [
    "string"
  ],
  "topic": "string",
  "topicPlaceholder": "string",
  "type": "string"
}
```

<h3 id="pins-a-topic-of-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the pinned conversation conversation after pinning a topic|[Conversation](#schemaconversation)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Unpins a topic of a conversation

<a id="opIdunPinAConversation"></a>

> Code samples

```bash
curl https://example.com/conversations/string/pins/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /conversations/{convId}/pins/{itemId}`

Unpins a topic of a conversation
OauthScopes: READ_CONVERSATIONS

<h3 id="unpins-a-topic-of-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convId|path|string|true|The ID of the conversation|
|itemId|path|string|true|The ID of the topic|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "creatorTenantId": "string",
  "description": "string",
  "isGuestAccessDisabled": true,
  "isModerated": true,
  "modificationTime": 0,
  "participants": [
    "string"
  ],
  "topic": "string",
  "topicPlaceholder": "string",
  "type": "string"
}
```

<h3 id="unpins-a-topic-of-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the pinned conversation conversation after unpinning a topic|[Conversation](#schemaconversation)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Add a user label

<a id="opIdaddLabel"></a>

> Code samples

```bash
curl https://example.com/users/labels \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'label=string'
```

`POST /users/labels`

Add a label to the list of user labels
OauthScopes: WRITE_USER_PROFILE, ORGANIZE_CONVERSATIONS

> Body parameter

```yaml
label: string
```

<h3 id="add-a-user-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» label|body|string|true|The label value to add|

> Example responses

> 200 Response

```json
{
  "labelId": "string",
  "value": "string"
}
```

<h3 id="add-a-user-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The label was successfully added|[Label](#schemalabel)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_USER_PROFILE ORGANIZE_CONVERSATIONS )
</aside>

## Remove a user label

<a id="opIdremoveLabel"></a>

> Code samples

```bash
curl https://example.com/users/labels/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /users/labels/{labelId}`

Remove a label from the list of user labels
OauthScopes: WRITE_USER_PROFILE, ORGANIZE_CONVERSATIONS

<h3 id="remove-a-user-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|labelId|path|string|true|The label value to remove, either the unique ID or the label value|

> Example responses

> 200 Response

```json
{
  "labelId": "string",
  "value": "string"
}
```

<h3 id="remove-a-user-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The label was successfully removed|[Label](#schemalabel)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>a field constraint is violated</li><li>the label does not exist</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_USER_PROFILE ORGANIZE_CONVERSATIONS )
</aside>

## Updates the user profile

<a id="opIdupdateProfile"></a>

> Code samples

```bash
curl https://example.com/users/profile \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'firstname=string&jobTitle=string&lastname=string&locale=EN_US'
```

`PUT /users/profile`

Updates the user profile of the authenticated user
OauthScopes: WRITE_USER_PROFILE

> Body parameter

```yaml
firstname: string
jobTitle: string
lastname: string
locale: EN_US
```

<h3 id="updates-the-user-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» firstname|body|string|false|The new firstname of the user|
|» jobTitle|body|string|false|The new job title of the user|
|» lastname|body|string|false|The new lastname of the user|
|» locale|body|string|false|The new locale of the user. One of EN_US, DE_DE, EN_GB, ES_ES, FR_FR, IT_IT, RU_RU, ZH_HANS_CN.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» locale|EN_US|
|» locale|DE_DE|
|» locale|EN_GB|
|» locale|ES_ES|
|» locale|FR_FR|
|» locale|IT_IT|
|» locale|RU_RU|
|» locale|ZH_HANS_CN|
|» locale|PT_BR|
|» locale|NL_NL|
|» locale|CA_ES|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "company": "string",
  "department": "string",
  "displayName": "string",
  "emailAddress": "string",
  "emailAddresses": [
    {
      "address": "string",
      "type": "string"
    }
  ],
  "firstName": "string",
  "jobTitle": "string",
  "lastName": "string",
  "locale": "string",
  "phoneNumber": "string",
  "phoneNumbers": [
    {
      "phoneNumber": "string",
      "type": "string"
    }
  ],
  "primaryTenantId": "string",
  "secondaryEmailAddress": "string",
  "secondaryTenantId": "string",
  "userId": "string",
  "userState": "string",
  "userType": "string"
}
```

<h3 id="updates-the-user-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The modified user object.|[User](#schemauser)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the user does not exist</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_USER_PROFILE )
</aside>

<h1 id="rest-api-version-2-rtc">RTC</h1>

## Gets a list of active sessions

<a id="opIdgetActiveSessions"></a>

> Code samples

```bash
curl https://example.com/rtc/sessions \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rtc/sessions`

Gets a list of active RTCsessions
OauthScopes: CALLS

<h3 id="gets-a-list-of-active-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of active RTCsessions was returned|[Label](#schemalabel)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL CALLS )
</aside>

<h1 id="rest-api-version-2-spaces">Spaces</h1>

## Get the spaces

<a id="opIdgetSpaces"></a>

> Code samples

```bash
curl https://example.com/spaces \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces`

Get the spaces
OauthScopes: READ_SPACE

<h3 id="get-the-spaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timestamp|query|string(date-time)|false|a beautiful timestamp|
|numberOfResults|query|number(int32)|false|the number of results you want|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-the-spaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Spaces successfully retrieved.|[GetSpacesResult](#schemagetspacesresult)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_SPACE )
</aside>

## Create a space

<a id="opIdcreateSpace"></a>

> Code samples

```bash
curl https://example.com/spaces/create \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'accessModeType=INTERNAL_ONLY&description=string&largePictureBase64=string&name=string&role=AUTHOR&smallPictureBase64=string&status=ENABLED&tags=%5B%22string%22%5D&type=SECRET'
```

`POST /spaces/create`

Create a space
OauthScopes: WRITE_SPACE, MANAGE_SPACE, CREATE_SPACE_CONTENT

> Body parameter

```yaml
accessModeType: INTERNAL_ONLY
description: string
largePictureBase64: string
name: string
role: AUTHOR
smallPictureBase64: string
status: ENABLED
tags:
  - string
type: SECRET
```

<h3 id="create-a-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» accessModeType|body|string|true|Access mode|
|» description|body|string|false|description of the space|
|» largePictureBase64|body|string|false|large picture|
|» name|body|string|true|name of the space|
|» role|body|string|true|role|
|» smallPictureBase64|body|string|false|small picture|
|» status|body|string|true|status|
|» tags|body|[string]|false|tags of the space|
|» type|body|string|true|type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» accessModeType|INTERNAL_ONLY|
|» accessModeType|INTERNAL_EXTERNAL|
|» role|MODERATOR|
|» role|AUTHOR|
|» role|PARTICIPANT|
|» role|READER|
|» status|ENABLED|
|» status|DISABLED|
|» type|OPEN|
|» type|CLOSED|
|» type|SECRET|

> Example responses

> 200 Response

```json
{}
```

<h3 id="create-a-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Space successfully created.|[ParticipantSpaceWrapper](#schemaparticipantspacewrapper)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE MANAGE_SPACE CREATE_SPACE_CONTENT )
</aside>

## Get the directory

<a id="opIdgetDirectory"></a>

> Code samples

```bash
curl 'https://example.com/spaces/directory?sortBy=LAST_CONTENT&sortOrder=ASCENDING&filter=NONE' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/directory`

Get the directory by a search query in ordered way
OauthScopes: READ_SPACE

<h3 id="get-the-directory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sortBy|query|string|true|sort the spaces by LAST_CONTENT, NAME, NUMBER_OF_USERS or CREATION_DATE|
|sortOrder|query|string|true|ascending or descending|
|filter|query|string|true|filter for spaces (JOINED, REQUESTED, OPEN, CLOSED or NOT_JOINED_REQUESTED)|
|query|query|string|false|some sort of query|
|pagePointer|query|string|false|page pointer, start with nothing and for next query use returned pointer|
|numberOfResults|query|number(int32)|false|number of results to return, 25 by default.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortBy|LAST_CONTENT|
|sortBy|NAME|
|sortBy|NUMBER_OF_USERS|
|sortBy|CREATION_DATE|
|sortOrder|ASCENDING|
|sortOrder|DESCENDING|
|filter|NONE|
|filter|JOINED|
|filter|REQUESTED|
|filter|OPEN|
|filter|CLOSED|
|filter|NOT_JOINED_REQUESTED|

> Example responses

> 200 Response

```json
{
  "hasMore": true,
  "searchPointer": "string",
  "spaces": [
    {
      "accessModeType": "string",
      "creationTime": 0,
      "creatorId": "string",
      "defaultRole": "string",
      "description": "string",
      "largePictureBase64": "string",
      "largePictureContentType": "string",
      "largePictureId": "string",
      "lastContentCreationTime": 0,
      "lastContentCreatorId": "string",
      "modificationTime": 0,
      "name": "string",
      "numberOfExternalParticipants": 0,
      "numberOfParticipants": 0,
      "numberOfPinnedTopics": 0,
      "numberOfReplies": 0,
      "numberOfTopics": 0,
      "ownerId": "string",
      "smallPictureBase64": "string",
      "smallPictureContentType": "string",
      "smallPictureId": "string",
      "spaceId": "string",
      "status": "string",
      "tags": [
        "string"
      ],
      "tenantId": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-the-directory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Spaces successfully retrieved.|[DirectoryResult](#schemadirectoryresult)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_SPACE )
</aside>

## Space name exists

<a id="opIdexistsSpaceName"></a>

> Code samples

```bash
curl https://example.com/spaces/exists/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/exists/{name}`

Find out if a space name already exists for non-secret spaces.
OauthScopes: READ_SPACE

<h3 id="space-name-exists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name to check for existence.|

<h3 id="space-name-exists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Check performed successfully, returning true if found, false if not found.|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_SPACE )
</aside>

## flag a space item

<a id="opIdflagSpaceItem"></a>

> Code samples

```bash
curl https://example.com/spaces/flag/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /spaces/flag/{itemId}`

flag a space item
OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT

<h3 id="flag-a-space-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemId|path|string|true|the id of the item you want to flag|

<h3 id="flag-a-space-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Space item successfully flagged|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE UPDATE_SPACE_CONTENT )
</aside>

## Get flagged items

<a id="opIdgetFlaggedItems"></a>

> Code samples

```bash
curl 'https://example.com/spaces/flagged?searchDirection=BEFORE&timestamp=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/flagged`

Get flagged items
OauthScopes: READ_SPACE

<h3 id="get-flagged-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchDirection|query|string|true|before or after the time stamp|
|timestamp|query|string(date-time)|true|The timestamp according to which you want to retrieve the flagged items|
|searchPointer|query|string|false|The searchpointer for the search (initially not set).|
|numberOfResults|query|number(int32)|false|The number of results you want to retrieve.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|searchDirection|BEFORE|
|searchDirection|AFTER|

> Example responses

> 200 Response

```json
{
  "flaggedItems": [
    {
      "item": {
        "Status": "string",
        "attachments": [
          {
            "creationTime": 0,
            "creatorId": "string",
            "fileId": "string",
            "fileName": "string",
            "inlineUsage": true,
            "itemId": "string",
            "layout": "string",
            "mimeType": "string",
            "modificationTime": 0,
            "size": 0,
            "spaceId": "string",
            "thumbnailId": "string"
          }
        ],
        "complex": true,
        "content": "string",
        "creationTime": 0,
        "creatorId": "string",
        "deletedBy": "string",
        "externalAttachments": [
          {
            "attachment": {
              "creationTime": 0,
              "creatorId": "string",
              "fileId": "string",
              "fileName": "string",
              "inlineUsage": true,
              "itemId": "string",
              "layout": "string",
              "mimeType": "string",
              "modificationTime": 0,
              "size": 0,
              "spaceId": "string",
              "thumbnailId": "string"
            },
            "downloadLocation": "string",
            "previewLocation": "string",
            "shareLinkToken": "string",
            "type": "string"
          }
        ],
        "formMetaData": "string",
        "itemId": "string",
        "mentionedUsers": [
          "string"
        ],
        "modificationTime": 0,
        "numberOfLikes": 0,
        "previews": [
          {
            "description": "string",
            "html": "string",
            "imageURI": "string",
            "provider": "string",
            "srcURL": "string",
            "title": "string",
            "type": "string"
          }
        ],
        "sharedItems": [
          {
            "containerId": "string",
            "containerName": "string",
            "containerType": "string",
            "creationTime": 0,
            "creatorId": "string",
            "itemId": "string",
            "parentTopicId": "string",
            "subType": "string"
          }
        ],
        "spaceId": "string",
        "tenantId": "string"
      },
      "parentItem": {
        "Status": "string",
        "attachments": [
          {
            "creationTime": 0,
            "creatorId": "string",
            "fileId": "string",
            "fileName": "string",
            "inlineUsage": true,
            "itemId": "string",
            "layout": "string",
            "mimeType": "string",
            "modificationTime": 0,
            "size": 0,
            "spaceId": "string",
            "thumbnailId": "string"
          }
        ],
        "complex": true,
        "content": "string",
        "creationTime": 0,
        "creatorId": "string",
        "deletedBy": "string",
        "externalAttachments": [
          {
            "attachment": {
              "creationTime": 0,
              "creatorId": "string",
              "fileId": "string",
              "fileName": "string",
              "inlineUsage": true,
              "itemId": "string",
              "layout": "string",
              "mimeType": "string",
              "modificationTime": 0,
              "size": 0,
              "spaceId": "string",
              "thumbnailId": "string"
            },
            "downloadLocation": "string",
            "previewLocation": "string",
            "shareLinkToken": "string",
            "type": "string"
          }
        ],
        "formMetaData": "string",
        "itemId": "string",
        "mentionedUsers": [
          "string"
        ],
        "modificationTime": 0,
        "numberOfLikes": 0,
        "previews": [
          {
            "description": "string",
            "html": "string",
            "imageURI": "string",
            "provider": "string",
            "srcURL": "string",
            "title": "string",
            "type": "string"
          }
        ],
        "sharedItems": [
          {
            "containerId": "string",
            "containerName": "string",
            "containerType": "string",
            "creationTime": 0,
            "creatorId": "string",
            "itemId": "string",
            "parentTopicId": "string",
            "subType": "string"
          }
        ],
        "spaceId": "string",
        "tenantId": "string"
      }
    }
  ],
  "hasMore": true,
  "searchPointer": "string"
}
```

<h3 id="get-flagged-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Flagged items successfully retrieved|[FlaggedItemsResult](#schemaflaggeditemsresult)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_SPACE )
</aside>

## Get the spaces by their ids

<a id="opIdgetSpacesByIds"></a>

> Code samples

```bash
curl 'https://example.com/spaces/ids?ids=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/ids`

Get the spaces by their ids
OauthScopes: READ_SPACE

<h3 id="get-the-spaces-by-their-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|[string]|true|an array of ids|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-the-spaces-by-their-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Spaces successfully retrieved.|[GetSpacesResult](#schemagetspacesresult)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_SPACE )
</aside>

## deletes a space item

<a id="opIddeleteSpaceItem"></a>

> Code samples

```bash
curl https://example.com/spaces/item/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/item/{itemId}`

deletes a space item
OauthScopes: WRITE_SPACE, DELETE_SPACE_CONTENT

<h3 id="deletes-a-space-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemId|path|string|true|the id of the spaceItem|

<h3 id="deletes-a-space-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the deletion was a success|None|
|400|Bad Request|invalid itemid|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE DELETE_SPACE_CONTENT )
</aside>

## Like a space item

<a id="opIdlikeSpaceItem"></a>

> Code samples

```bash
curl https://example.com/spaces/like/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /spaces/like/{itemId}`

Like a space item
OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT

<h3 id="like-a-space-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemId|path|string|true|The id of the item you want to like|

<h3 id="like-a-space-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Space item successfully liked|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE UPDATE_SPACE_CONTENT )
</aside>

## Get the likes of an item

<a id="opIdgetLikes"></a>

> Code samples

```bash
curl https://example.com/spaces/likes/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/likes/{itemId}`

Get the likes of an item
OauthScopes: READ_SPACE

<h3 id="get-the-likes-of-an-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemId|path|string|true|The id of the item to retrieve the likes from|
|searchPointer|query|string|false|The searchpointer for the search (initially not set).|
|numberOfResults|query|number(int32)|false|The number of results you want to retrieve.|

> Example responses

> 200 Response

```json
{
  "hasMore": true,
  "participants": [
    {
      "firstName": "string",
      "largeImageUri": "string",
      "lastName": "string",
      "smallImageUri": "string",
      "userId": "string"
    }
  ],
  "searchPointer": "string"
}
```

<h3 id="get-the-likes-of-an-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Likes successfully retrieved|[ParticipantsLikeResult](#schemaparticipantslikeresult)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_SPACE )
</aside>

## Add recent search

<a id="opIdaddRecentSpaceSearch"></a>

> Code samples

```bash
curl https://example.com/spaces/search/add/recent \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'endTime=1970-01-01T00%3A00%3A00Z&scope=ALL&searchTerm=string&startTime=1970-01-01T00%3A00%3A00Z'
```

`PUT /spaces/search/add/recent`

Add recent search of a client to search controller.
OauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE

> Body parameter

```yaml
endTime: "1970-01-01T00:00:00Z"
scope: ALL
searchTerm: string
startTime: "1970-01-01T00:00:00Z"
```

<h3 id="add-recent-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» endTime|body|string(date-time)|false|The end time.|
|» scope|body|string|true|The scope of the search.|
|» searchTerm|body|string|true|The term to search for.|
|» startTime|body|string(date-time)|false|The start time.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scope|ALL|
|» scope|SPACES|
|» scope|TOPICBY|
|» scope|FILES|
|» scope|TAGS|
|» scope|LABELS|
|» scope|DATE|

<h3 id="add-recent-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search successfully added.|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE MANAGE_SPACE ORGANIZE_SPACE )
</aside>

## Cancels a space search of a client.

<a id="opIdcancelSpaceSearch"></a>

> Code samples

```bash
curl https://example.com/spaces/search/cancel/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /spaces/search/cancel/{searchId}`

Cancels a space search of a client.
OauthScopes: WRITE_SPACE, MANAGE_SPACE

<h3 id="cancels-a-space-search-of-a-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchId|path|string|true|The id of the search to cancel|

<h3 id="cancels-a-space-search-of-a-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search successfully cancelled.|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE MANAGE_SPACE )
</aside>

## Retrieve recent space searches

<a id="opIdgetRecentSearches"></a>

> Code samples

```bash
curl https://example.com/spaces/search/recent \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/search/recent`

Retrieve recent space searches for a user.
OauthScopes: READ_SPACE

<h3 id="retrieve-recent-space-searches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Recent searches successfully retrieved (or none available).|Inline|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="retrieve-recent-space-searches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SpacesSearchTermResult](#schemaspacessearchtermresult)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_SPACE )
</aside>

## starts a basic search in spaces

<a id="opIdstartBasicSpacesSearch"></a>

> Code samples

```bash
curl 'https://example.com/spaces/search/startBasic?scope=ALL&searchTerm=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/search/startBasic`

starts a basic search in spaces
OauthScopes: READ_SPACE

<h3 id="starts-a-basic-search-in-spaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|query|string|true|the scope of the search|
|searchTerm|query|string|true|the term to search for|
|startTime|query|string(date-time)|false|the starttime|
|endTime|query|string(date-time)|false|the end time|
|prioritySpaces|query|[string]|false|list of prioritized spaces|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scope|ALL|
|scope|SPACES|
|scope|TOPICBY|
|scope|FILES|
|scope|TAGS|
|scope|LABELS|
|scope|DATE|

> Example responses

> 200 Response

```json
{
  "spaces": [
    {
      "accessModeType": "string",
      "creationTime": 0,
      "creatorId": "string",
      "defaultRole": "string",
      "description": "string",
      "largePictureBase64": "string",
      "largePictureContentType": "string",
      "largePictureId": "string",
      "lastContentCreationTime": 0,
      "lastContentCreatorId": "string",
      "modificationTime": 0,
      "name": "string",
      "numberOfExternalParticipants": 0,
      "numberOfParticipants": 0,
      "numberOfPinnedTopics": 0,
      "numberOfReplies": 0,
      "numberOfTopics": 0,
      "ownerId": "string",
      "smallPictureBase64": "string",
      "smallPictureContentType": "string",
      "smallPictureId": "string",
      "spaceId": "string",
      "status": "string",
      "tags": [
        "string"
      ],
      "tenantId": "string",
      "type": "string"
    }
  ],
  "status": "string"
}
```

<h3 id="starts-a-basic-search-in-spaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search successfully executed|[BasicSearchResult](#schemabasicsearchresult)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_SPACE )
</aside>

## starts a detailed search in a space

<a id="opIdstartDetailedSpaceSearch"></a>

> Code samples

```bash
curl 'https://example.com/spaces/search/startDetailed?scope=ALL&searchTerm=string&spaceId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/search/startDetailed`

starts a detailed search in a space
OauthScopes: READ_SPACE

<h3 id="starts-a-detailed-search-in-a-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|query|string|true|the scope of the search|
|searchTerm|query|string|true|the term to search for|
|startTime|query|string(date-time)|false|the starttime|
|endTime|query|string(date-time)|false|the end time|
|spaceId|query|string|true|missing documentation|
|searchId|query|string|false|missing documentation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scope|ALL|
|scope|SPACES|
|scope|TOPICBY|
|scope|FILES|
|scope|TAGS|
|scope|LABELS|
|scope|DATE|

> Example responses

> 200 Response

```json
[
  {
    "resList": [
      {
        "fileIds": [
          "string"
        ],
        "itemIds": [
          "string"
        ],
        "spaceId": "string",
        "status": "string"
      }
    ]
  }
]
```

<h3 id="starts-a-detailed-search-in-a-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search successfully executed|Inline|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="starts-a-detailed-search-in-a-space-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SpaceSearchResultDetailedBack](#schemaspacesearchresultdetailedback)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_SPACE )
</aside>

## Update tags

<a id="opIdupdateTopicTags"></a>

> Code samples

```bash
curl https://example.com/spaces/topic/string/updateTags \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'tags=%5B%22string%22%5D'
```

`PUT /spaces/topic/{topicId}/updateTags`

Update the tags of a topic  
OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT

> Body parameter

```yaml
tags:
  - string
```

<h3 id="update-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topicId|path|string|true|The id of the topic|
|body|body|object|true|none|
|» tags|body|[string]|true|The tags to update|

> Example responses

> 200 Response

```json
{
  "lastContentCreationTime": 0,
  "lastContentCreatorId": "string",
  "numberOfReplies": 0,
  "pinned": true,
  "spaceItem": {
    "Status": "string",
    "attachments": [
      {
        "creationTime": 0,
        "creatorId": "string",
        "fileId": "string",
        "fileName": "string",
        "inlineUsage": true,
        "itemId": "string",
        "layout": "string",
        "mimeType": "string",
        "modificationTime": 0,
        "size": 0,
        "spaceId": "string",
        "thumbnailId": "string"
      }
    ],
    "complex": true,
    "content": "string",
    "creationTime": 0,
    "creatorId": "string",
    "deletedBy": "string",
    "externalAttachments": [
      {
        "attachment": {
          "creationTime": 0,
          "creatorId": "string",
          "fileId": "string",
          "fileName": "string",
          "inlineUsage": true,
          "itemId": "string",
          "layout": "string",
          "mimeType": "string",
          "modificationTime": 0,
          "size": 0,
          "spaceId": "string",
          "thumbnailId": "string"
        },
        "downloadLocation": "string",
        "previewLocation": "string",
        "shareLinkToken": "string",
        "type": "string"
      }
    ],
    "formMetaData": "string",
    "itemId": "string",
    "mentionedUsers": [
      "string"
    ],
    "modificationTime": 0,
    "numberOfLikes": 0,
    "previews": [
      {
        "description": "string",
        "html": "string",
        "imageURI": "string",
        "provider": "string",
        "srcURL": "string",
        "title": "string",
        "type": "string"
      }
    ],
    "sharedItems": [
      {
        "containerId": "string",
        "containerName": "string",
        "containerType": "string",
        "creationTime": 0,
        "creatorId": "string",
        "itemId": "string",
        "parentTopicId": "string",
        "subType": "string"
      }
    ],
    "spaceId": "string",
    "tenantId": "string"
  },
  "subject": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="update-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|tags successfully updated|[SpaceTopic](#schemaspacetopic)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE UPDATE_SPACE_CONTENT )
</aside>

## Unflag a space item

<a id="opIdunflagSpaceItem"></a>

> Code samples

```bash
curl https://example.com/spaces/unflag/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /spaces/unflag/{itemId}`

Unflag a space item
OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT

<h3 id="unflag-a-space-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemId|path|string|true|the id of the item you want to unflag|

<h3 id="unflag-a-space-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Space item successfully unflagged.|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE UPDATE_SPACE_CONTENT )
</aside>

## Unlike a space item

<a id="opIdunlikeSpaceItem"></a>

> Code samples

```bash
curl https://example.com/spaces/unlike/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /spaces/unlike/{itemId}`

Unlike a space item
OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT

<h3 id="unlike-a-space-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemId|path|string|true|The id of the item you want to unlike|

<h3 id="unlike-a-space-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Space item successfully unliked.|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE UPDATE_SPACE_CONTENT )
</aside>

## Update a space

<a id="opIdupdateSpace"></a>

> Code samples

```bash
curl https://example.com/spaces/string \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'accessModeType=NO_CHANGE&description=string&largePictureBase64=string&name=string&ownerId=string&role=NO_CHANGE&smallPictureBase64=string&status=ENABLED&tags=%5B%22string%22%5D&type=NO_CHANGE'
```

`PUT /spaces/{id}`

Update a space
OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT

> Body parameter

```yaml
accessModeType: NO_CHANGE
description: string
largePictureBase64: string
name: string
ownerId: string
role: NO_CHANGE
smallPictureBase64: string
status: ENABLED
tags:
  - string
type: NO_CHANGE
```

<h3 id="update-a-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of the space|
|body|body|object|false|none|
|» accessModeType|body|string|false|Access mode|
|» description|body|string|false|description of the space|
|» largePictureBase64|body|string|false|large picture|
|» name|body|string|false|name of the space|
|» ownerId|body|string|false|ownerid of the space|
|» role|body|string|false|role|
|» smallPictureBase64|body|string|false|small picture|
|» status|body|string|false|status|
|» tags|body|[string]|false|tags of the space|
|» type|body|string|false|type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» accessModeType|INTERNAL_ONLY|
|» accessModeType|INTERNAL_EXTERNAL|
|» accessModeType|NO_CHANGE|
|» role|MODERATOR|
|» role|AUTHOR|
|» role|PARTICIPANT|
|» role|READER|
|» role|NO_CHANGE|
|» status|ENABLED|
|» status|DISABLED|
|» type|OPEN|
|» type|CLOSED|
|» type|SECRET|
|» type|NO_CHANGE|

> Example responses

> 200 Response

```json
{}
```

<h3 id="update-a-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Space successfully updated.|[ParticipantSpaceWrapper](#schemaparticipantspacewrapper)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE UPDATE_SPACE_CONTENT )
</aside>

## Delete a space

<a id="opIddeleteSpace"></a>

> Code samples

```bash
curl https://example.com/spaces/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{id}`

Delete a space
OauthScopes: WRITE_SPACE, MANAGE_SPACE, DELETE_SPACE_CONTENT

<h3 id="delete-a-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of the space|

<h3 id="delete-a-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Space successfully deleted.|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE MANAGE_SPACE DELETE_SPACE_CONTENT )
</aside>

## Join a space

<a id="opIdjoinSpace"></a>

> Code samples

```bash
curl https://example.com/spaces/string/join \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /spaces/{id}/join`

Join a space
OauthScopes: WRITE_SPACE

<h3 id="join-a-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the space|

> Example responses

> 200 Response

```json
{}
```

<h3 id="join-a-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Space successfully joined|[ParticipantSpaceWrapper](#schemaparticipantspacewrapper)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE )
</aside>

## Assign labels

<a id="opIdassignLabels"></a>

> Code samples

```bash
curl https://example.com/spaces/string/labels/assign \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'labels=%5B%22string%22%5D'
```

`POST /spaces/{id}/labels/assign`

Assign labels to space
OauthScopes: WRITE_SPACE, ORGANIZE_SPACE

> Body parameter

```yaml
labels:
  - string
```

<h3 id="assign-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the space.|
|body|body|object|true|none|
|» labels|body|[string]|true|The labels to assign to the space|

> Example responses

> 200 Response

```json
[
  {
    "labelIds": [
      "string"
    ]
  }
]
```

<h3 id="assign-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Labels successfully assigned|Inline|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="assign-labels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LabelIds](#schemalabelids)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE ORGANIZE_SPACE )
</aside>

## Unassign labels

<a id="opIdunassignLabels"></a>

> Code samples

```bash
curl https://example.com/spaces/string/labels/unassign \
  -X DELETE \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'labelIds=%5B%22string%22%5D'
```

`DELETE /spaces/{id}/labels/unassign`

Unassign labels from a space
OauthScopes: WRITE_SPACE, ORGANIZE_SPACE

> Body parameter

```yaml
labelIds:
  - string
```

<h3 id="unassign-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the space.|
|body|body|object|true|none|
|» labelIds|body|[string]|true|missing documentation|

> Example responses

> 200 Response

```json
[
  {
    "labelIds": [
      "string"
    ]
  }
]
```

<h3 id="unassign-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Labels successfully unassigned|Inline|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="unassign-labels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LabelIds](#schemalabelids)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE ORGANIZE_SPACE )
</aside>

## Leave a space

<a id="opIdleaveSpace"></a>

> Code samples

```bash
curl https://example.com/spaces/string/leave \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /spaces/{id}/leave`

Leave a space
OauthScopes: WRITE_SPACE

<h3 id="leave-a-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the space|

<h3 id="leave-a-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Space successfully left|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE )
</aside>

## Add Participant to Space

<a id="opIdaddParticipantsToSpace"></a>

> Code samples

```bash
curl https://example.com/spaces/string/participant \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'role=DEFAULT&userId=%5B%22string%22%5D'
```

`POST /spaces/{id}/participant`

Add a participant to a space
OauthScopes: WRITE_SPACE, MANAGE_SPACE

> Body parameter

```yaml
role: DEFAULT
userId:
  - string
```

<h3 id="add-participant-to-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the space|
|body|body|object|true|none|
|» role|body|string|true|The name of the role of the participant|
|» userId|body|[string]|true|The user id of the participant|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|DEFAULT|
|» role|MODERATOR|
|» role|AUTHOR|
|» role|PARTICIPANT|
|» role|READER|

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="add-participant-to-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully added participant.|Inline|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="add-participant-to-space-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ParticipantAddResult](#schemaparticipantaddresult)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE MANAGE_SPACE )
</aside>

## Removes participants from a space

<a id="opIdv2RemoveParticipantsFromSpace"></a>

> Code samples

```bash
curl https://example.com/spaces/string/participant/remove \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'userIds=%5B%22string%22%5D'
```

`POST /spaces/{id}/participant/remove`

removes Participants from a space
OauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE

> Body parameter

```yaml
userIds:
  - string
```

<h3 id="removes-participants-from-a-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the space|
|body|body|object|true|none|
|» userIds|body|[string]|true|The ids of the participants to remove |

<h3 id="removes-participants-from-a-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|participants successfully removed|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE MANAGE_SPACE ORGANIZE_SPACE )
</aside>

## Get the participants of a space

<a id="opIdgetSpaceParticipants"></a>

> Code samples

```bash
curl 'https://example.com/spaces/string/participants?sortBy=NAME&sortOrder=ASCENDING&filterType=NONE' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/participants`

Get the participants of a space
OauthScopes: READ_SPACE

<h3 id="get-the-participants-of-a-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the space.|
|sortBy|query|string|true|sort the spaces by LAST_CONTENT, NAME, NUMBER_OF_USERS or CREATION_DATE|
|sortOrder|query|string|true|ascending or descending|
|filterType|query|string|true|filtertype for participants (ACCESS_TYPE, ROLE or STATE)|
|filterValue|query|string|false|value for the filter|
|query|query|string|false|some sort of query|
|searchPointer|query|string|false|The search pointer (leave empty initially).|
|numberOfResults|query|number(int32)|false|number of results to return, 25 by default.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortBy|DISPLAY_NAME|
|sortBy|NAME|
|sortBy|FIRST_NAME|
|sortOrder|ASCENDING|
|sortOrder|DESCENDING|
|filterType|NONE|
|filterType|ACCESS_TYPE|
|filterType|ROLE|
|filterType|STATE|

> Example responses

> 200 Response

```json
{
  "hasMore": true,
  "participants": [
    {
      "creationTime": 0,
      "firstName": "string",
      "lastName": "string",
      "modificationTime": 0,
      "numberOfReplies": 0,
      "numberOfTopics": 0,
      "role": "string",
      "smallImageUri": "string",
      "state": "string",
      "tenantId": "string",
      "userId": "string"
    }
  ],
  "searchPointer": "string"
}
```

<h3 id="get-the-participants-of-a-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Participants successfully retrieved|[ParticipantsSearchResult](#schemaparticipantssearchresult)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_SPACE )
</aside>

## Get the pending participants of a space

<a id="opIdgetPendingParticipants"></a>

> Code samples

```bash
curl https://example.com/spaces/string/participants/pending \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/participants/pending`

Get the pending participants of a space
OauthScopes: WRITE_SPACE, MANAGE_SPACE

<h3 id="get-the-pending-participants-of-a-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the space.|
|searchPointer|query|string|false|The search pointer (leave empty initially).|
|numberOfResults|query|number(int32)|false|number of results to return, 25 by default.|

> Example responses

> 200 Response

```json
{
  "hasMore": true,
  "participants": [
    {
      "creationTime": 0,
      "firstName": "string",
      "lastName": "string",
      "modificationTime": 0,
      "numberOfReplies": 0,
      "numberOfTopics": 0,
      "role": "string",
      "smallImageUri": "string",
      "state": "string",
      "tenantId": "string",
      "userId": "string"
    }
  ],
  "searchPointer": "string"
}
```

<h3 id="get-the-pending-participants-of-a-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pending participants successfully retrieved|[ParticipantsSearchResult](#schemaparticipantssearchresult)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE MANAGE_SPACE )
</aside>

## Retrieve pinned topics

<a id="opIdgetPinnedTopics"></a>

> Code samples

```bash
curl https://example.com/spaces/string/pinnedTopics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/pinnedTopics`

Retrieve pinned topics of a space
OauthScopes: READ_SPACE

<h3 id="retrieve-pinned-topics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the space.|

> Example responses

> 200 Response

```json
[
  {
    "position": 0,
    "subject": "string",
    "topicId": "string"
  }
]
```

<h3 id="retrieve-pinned-topics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pinned topics successfully retrieved (or none available). |Inline|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="retrieve-pinned-topics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SpacePinnedTopic](#schemaspacepinnedtopic)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_SPACE )
</aside>

## Finds participants to add to add to a space

<a id="opIdsearchParticipantsToAdd"></a>

> Code samples

```bash
curl 'https://example.com/spaces/string/searchParticipantsToAdd?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/searchParticipantsToAdd`

Finds participants to add to a space 
OauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE

<h3 id="finds-participants-to-add-to-add-to-a-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the space|
|query|query|string|true|The query |

> Example responses

> 200 Response

```json
[
  {
    "department": "string",
    "firstName": "string",
    "isMember": true,
    "jobTitle": "string",
    "lastName": "string",
    "smallImageUri": "string",
    "tenantId": "string",
    "userId": "string"
  }
]
```

<h3 id="finds-participants-to-add-to-add-to-a-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|participants successfully found|Inline|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="finds-participants-to-add-to-add-to-a-space-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AddParticipantsSearchResult](#schemaaddparticipantssearchresult)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE MANAGE_SPACE ORGANIZE_SPACE )
</aside>

## Get the participants of a space

<a id="opIdsearchSpaceParticipants"></a>

> Code samples

```bash
curl 'https://example.com/spaces/string/searchSpaceParticipants?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/searchSpaceParticipants`

Get the participants of a space
OauthScopes: READ_SPACE

<h3 id="get-the-participants-of-a-space-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the space.|
|query|query|string|true|The query to search with. If searchpointer/hasMotre is returned, refine query.|

> Example responses

> 200 Response

```json
[
  {
    "hasMore": true,
    "participants": [
      {
        "creationTime": 0,
        "department": "string",
        "firstName": "string",
        "isMember": true,
        "jobDescription": "string",
        "lastContentCreationTime": 0,
        "lastName": "string",
        "modificationTime": 0,
        "numberOfReplies": 0,
        "numberOfTopics": 0,
        "reason": "string",
        "role": "string",
        "smallImageUri": "string",
        "spaceId": "string",
        "state": "string",
        "tenantId": "string",
        "userId": "string"
      }
    ],
    "searchPointer": "string"
  }
]
```

<h3 id="get-the-participants-of-a-space-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Participants successfully retrieved|Inline|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="get-the-participants-of-a-space-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ParticipantsSearchResultLarge](#schemaparticipantssearchresultlarge)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_SPACE )
</aside>

## Update read timestamp

<a id="opIdupdateReadTimestamp"></a>

> Code samples

```bash
curl https://example.com/spaces/string/updateTimestamp \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'timestamp=1970-01-01T00%3A00%3A00Z'
```

`PUT /spaces/{id}/updateTimestamp`

Update read timestamp
OauthScopes: READ_SPACE, WRITE_SPACE

> Body parameter

```yaml
timestamp: "1970-01-01T00:00:00Z"
```

<h3 id="update-read-timestamp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of a space|
|body|body|object|true|none|
|» timestamp|body|string(date-time)|true|The new timestamp|

<h3 id="update-read-timestamp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Read timestamp successfully updated.|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_SPACE WRITE_SPACE )
</aside>

## Update participant

<a id="opIdupdateParticipantInSpace"></a>

> Code samples

```bash
curl https://example.com/spaces/string/participant \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'role=MODERATOR&userId=string'
```

`PUT /spaces/{spaceId}/participant`

Update participant in space
OauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE

> Body parameter

```yaml
role: MODERATOR
userId: string
```

<h3 id="update-participant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|none|
|» role|body|string|true|updated role of participant|
|» userId|body|string|true|The id of the participant to update|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|MODERATOR|
|» role|AUTHOR|
|» role|PARTICIPANT|
|» role|READER|

<h3 id="update-participant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Role successfully updated|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE MANAGE_SPACE ORGANIZE_SPACE )
</aside>

## missing documentation

<a id="opIdgetParticipantsImportData"></a>

> Code samples

```bash
curl https://example.com/spaces/string/participant/import/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/participant/import/`

missing documentation
OauthScopes: READ_SPACE

<h3 id="missing-documentation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|missing documentation|

> Example responses

> 200 Response

```json
{
  "actualNumberOfImportedParticipants": 0,
  "estimatedImportDuration": 0,
  "importEndDate": 0,
  "importFileId": "string",
  "importFileName": "string",
  "importProgress": 0,
  "importStartDate": 0,
  "importStatus": "string",
  "plannedNumberOfImportedParticipants": 0,
  "resultFileId": "string",
  "resultFileName": "string"
}
```

<h3 id="missing-documentation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|missing documentation|[ParticipantsImportDataResult](#schemaparticipantsimportdataresult)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_SPACE )
</aside>

## request access for a space

<a id="opIdrequestSpaceAcces"></a>

> Code samples

```bash
curl https://example.com/spaces/string/participant/request \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'reason=string'
```

`POST /spaces/{spaceId}/participant/request`

request access for a space
OauthScopes: READ_SPACE

> Body parameter

```yaml
reason: string
```

<h3 id="request-access-for-a-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|body|body|object|false|none|
|» reason|body|string|false|Reason why the Access has been requested|

<h3 id="request-access-for-a-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|request is recieved|None|
|400|Bad Request|invalid parameter|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_SPACE )
</aside>

## Deny access for a space

<a id="opIddenySpaceAcces"></a>

> Code samples

```bash
curl https://example.com/spaces/string/participant/string/deny \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'reason=string'
```

`POST /spaces/{spaceId}/participant/{participantId}/deny`

Deny access for a space
OauthScopes: WRITE_SPACE, MANAGE_SPACE

> Body parameter

```yaml
reason: string
```

<h3 id="deny-access-for-a-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|participantId|path|string|true|Id of the participant|
|body|body|object|false|none|
|» reason|body|string|false|Reason why the request has been denied|

<h3 id="deny-access-for-a-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Access denied|None|
|400|Bad Request|Invalid parameter|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE MANAGE_SPACE )
</aside>

## grant access for a space

<a id="opIdgrantSpaceAcces"></a>

> Code samples

```bash
curl https://example.com/spaces/string/participant/string/grant \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /spaces/{spaceId}/participant/{participantId}/grant`

grant access for a space
OauthScopes: WRITE_SPACE, MANAGE_SPACE

<h3 id="grant-access-for-a-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|participantId|path|string|true|Id of the participant|

<h3 id="grant-access-for-a-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|access granted|None|
|400|Bad Request|invalid parameter|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE MANAGE_SPACE )
</aside>

## creates a new space topic

<a id="opIdcreateSpaceTopic"></a>

> Code samples

```bash
curl https://example.com/spaces/string/topic \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'attachments=%5B%22string%22%5D&complex=true&content=string&contentTags=%5B%22string%22%5D&formMetaData=string&mentionedUser=string&subject=string&tags=%5B%22string%22%5D'
```

`POST /spaces/{spaceId}/topic`

creates a new space topic
OauthScopes: WRITE_SPACE, MANAGE_SPACE, CREATE_SPACE_CONTENT

> Body parameter

```yaml
attachments:
  - string
complex: true
content: string
contentTags:
  - string
formMetaData: string
mentionedUser: string
subject: string
tags:
  - string
```

<h3 id="creates-a-new-space-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|The ID of the space|
|body|body|object|true|none|
|» attachments|body|[string]|false|the attached files|
|» complex|body|boolean|false|complex or not|
|» content|body|string|false|The content of this topic|
|» contentTags|body|[string]|false|the content tags|
|» formMetaData|body|string|false|The formMetaData|
|» mentionedUser|body|string|false|A list of mentioned users|
|» subject|body|string|true|The subject of the topic|
|» tags|body|[string]|false|the tags|

> Example responses

> 200 Response

```json
{
  "lastContentCreationTime": 0,
  "lastContentCreatorId": "string",
  "numberOfReplies": 0,
  "pinned": true,
  "spaceItem": {
    "Status": "string",
    "attachments": [
      {
        "creationTime": 0,
        "creatorId": "string",
        "fileId": "string",
        "fileName": "string",
        "inlineUsage": true,
        "itemId": "string",
        "layout": "string",
        "mimeType": "string",
        "modificationTime": 0,
        "size": 0,
        "spaceId": "string",
        "thumbnailId": "string"
      }
    ],
    "complex": true,
    "content": "string",
    "creationTime": 0,
    "creatorId": "string",
    "deletedBy": "string",
    "externalAttachments": [
      {
        "attachment": {
          "creationTime": 0,
          "creatorId": "string",
          "fileId": "string",
          "fileName": "string",
          "inlineUsage": true,
          "itemId": "string",
          "layout": "string",
          "mimeType": "string",
          "modificationTime": 0,
          "size": 0,
          "spaceId": "string",
          "thumbnailId": "string"
        },
        "downloadLocation": "string",
        "previewLocation": "string",
        "shareLinkToken": "string",
        "type": "string"
      }
    ],
    "formMetaData": "string",
    "itemId": "string",
    "mentionedUsers": [
      "string"
    ],
    "modificationTime": 0,
    "numberOfLikes": 0,
    "previews": [
      {
        "description": "string",
        "html": "string",
        "imageURI": "string",
        "provider": "string",
        "srcURL": "string",
        "title": "string",
        "type": "string"
      }
    ],
    "sharedItems": [
      {
        "containerId": "string",
        "containerName": "string",
        "containerType": "string",
        "creationTime": 0,
        "creatorId": "string",
        "itemId": "string",
        "parentTopicId": "string",
        "subType": "string"
      }
    ],
    "spaceId": "string",
    "tenantId": "string"
  },
  "subject": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="creates-a-new-space-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|returns the created topic|[SpaceTopic](#schemaspacetopic)|
|400|Bad Request|something went wrong|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE MANAGE_SPACE CREATE_SPACE_CONTENT )
</aside>

## Gets space replies and a topic

<a id="opIdv2GetTopicWithReplies"></a>

> Code samples

```bash
curl https://example.com/spaces/string/topic/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/topic/{topicId}`

Gets a number of Space replies with a matching topic
OauthScopes: READ_SPACE

<h3 id="gets-space-replies-and-a-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the topic|
|topicId|path|string|true|ID of the topic|
|numberOfReplies|query|number(int32)|false|The number of replies|

> Example responses

> 200 Response

```json
{
  "replies": [
    {
      "parentTopicId": "string",
      "spaceItem": {
        "Status": "string",
        "attachments": [
          {
            "creationTime": 0,
            "creatorId": "string",
            "fileId": "string",
            "fileName": "string",
            "inlineUsage": true,
            "itemId": "string",
            "layout": "string",
            "mimeType": "string",
            "modificationTime": 0,
            "size": 0,
            "spaceId": "string",
            "thumbnailId": "string"
          }
        ],
        "complex": true,
        "content": "string",
        "creationTime": 0,
        "creatorId": "string",
        "deletedBy": "string",
        "externalAttachments": [
          {
            "attachment": {
              "creationTime": 0,
              "creatorId": "string",
              "fileId": "string",
              "fileName": "string",
              "inlineUsage": true,
              "itemId": "string",
              "layout": "string",
              "mimeType": "string",
              "modificationTime": 0,
              "size": 0,
              "spaceId": "string",
              "thumbnailId": "string"
            },
            "downloadLocation": "string",
            "previewLocation": "string",
            "shareLinkToken": "string",
            "type": "string"
          }
        ],
        "formMetaData": "string",
        "itemId": "string",
        "mentionedUsers": [
          "string"
        ],
        "modificationTime": 0,
        "numberOfLikes": 0,
        "previews": [
          {
            "description": "string",
            "html": "string",
            "imageURI": "string",
            "provider": "string",
            "srcURL": "string",
            "title": "string",
            "type": "string"
          }
        ],
        "sharedItems": [
          {
            "containerId": "string",
            "containerName": "string",
            "containerType": "string",
            "creationTime": 0,
            "creatorId": "string",
            "itemId": "string",
            "parentTopicId": "string",
            "subType": "string"
          }
        ],
        "spaceId": "string",
        "tenantId": "string"
      }
    }
  ],
  "topic": {
    "lastContentCreationTime": 0,
    "lastContentCreatorId": "string",
    "numberOfReplies": 0,
    "pinned": true,
    "spaceItem": {
      "Status": "string",
      "attachments": [
        {
          "creationTime": 0,
          "creatorId": "string",
          "fileId": "string",
          "fileName": "string",
          "inlineUsage": true,
          "itemId": "string",
          "layout": "string",
          "mimeType": "string",
          "modificationTime": 0,
          "size": 0,
          "spaceId": "string",
          "thumbnailId": "string"
        }
      ],
      "complex": true,
      "content": "string",
      "creationTime": 0,
      "creatorId": "string",
      "deletedBy": "string",
      "externalAttachments": [
        {
          "attachment": {
            "creationTime": 0,
            "creatorId": "string",
            "fileId": "string",
            "fileName": "string",
            "inlineUsage": true,
            "itemId": "string",
            "layout": "string",
            "mimeType": "string",
            "modificationTime": 0,
            "size": 0,
            "spaceId": "string",
            "thumbnailId": "string"
          },
          "downloadLocation": "string",
          "previewLocation": "string",
          "shareLinkToken": "string",
          "type": "string"
        }
      ],
      "formMetaData": "string",
      "itemId": "string",
      "mentionedUsers": [
        "string"
      ],
      "modificationTime": 0,
      "numberOfLikes": 0,
      "previews": [
        {
          "description": "string",
          "html": "string",
          "imageURI": "string",
          "provider": "string",
          "srcURL": "string",
          "title": "string",
          "type": "string"
        }
      ],
      "sharedItems": [
        {
          "containerId": "string",
          "containerName": "string",
          "containerType": "string",
          "creationTime": 0,
          "creatorId": "string",
          "itemId": "string",
          "parentTopicId": "string",
          "subType": "string"
        }
      ],
      "spaceId": "string",
      "tenantId": "string"
    },
    "subject": "string",
    "tags": [
      "string"
    ]
  }
}
```

<h3 id="gets-space-replies-and-a-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the replies with a topic|[SpaceTopicWithReplies](#schemaspacetopicwithreplies)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_SPACE )
</aside>

## Updates a topic

<a id="opIdupdateSpaceTopic"></a>

> Code samples

```bash
curl https://example.com/spaces/string/topic/string \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'attachments=%5B%22string%22%5D&complex=true&content=string&contentTags=%5B%22string%22%5D&formMetaData=string&mentionedUsers=%5B%22string%22%5D&subject=string&tags=%5B%22string%22%5D'
```

`PUT /spaces/{spaceId}/topic/{topicId}`

Updates a topic
OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT

> Body parameter

```yaml
attachments:
  - string
complex: true
content: string
contentTags:
  - string
formMetaData: string
mentionedUsers:
  - string
subject: string
tags:
  - string
```

<h3 id="updates-a-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|ID of the space|
|topicId|path|string|true|Id of the topic to update|
|body|body|object|false|none|
|» attachments|body|[string]|false|the attached files|
|» complex|body|boolean|false|complex or not|
|» content|body|string|false|content of the topic|
|» contentTags|body|[string]|false|the content tags|
|» formMetaData|body|string|false|formMetaData to update|
|» mentionedUsers|body|[string]|false|the updated mentioned users|
|» subject|body|string|false|the subject of the topic|
|» tags|body|[string]|false|the tags|

> Example responses

> 200 Response

```json
{
  "lastContentCreationTime": 0,
  "lastContentCreatorId": "string",
  "numberOfReplies": 0,
  "pinned": true,
  "spaceItem": {
    "Status": "string",
    "attachments": [
      {
        "creationTime": 0,
        "creatorId": "string",
        "fileId": "string",
        "fileName": "string",
        "inlineUsage": true,
        "itemId": "string",
        "layout": "string",
        "mimeType": "string",
        "modificationTime": 0,
        "size": 0,
        "spaceId": "string",
        "thumbnailId": "string"
      }
    ],
    "complex": true,
    "content": "string",
    "creationTime": 0,
    "creatorId": "string",
    "deletedBy": "string",
    "externalAttachments": [
      {
        "attachment": {
          "creationTime": 0,
          "creatorId": "string",
          "fileId": "string",
          "fileName": "string",
          "inlineUsage": true,
          "itemId": "string",
          "layout": "string",
          "mimeType": "string",
          "modificationTime": 0,
          "size": 0,
          "spaceId": "string",
          "thumbnailId": "string"
        },
        "downloadLocation": "string",
        "previewLocation": "string",
        "shareLinkToken": "string",
        "type": "string"
      }
    ],
    "formMetaData": "string",
    "itemId": "string",
    "mentionedUsers": [
      "string"
    ],
    "modificationTime": 0,
    "numberOfLikes": 0,
    "previews": [
      {
        "description": "string",
        "html": "string",
        "imageURI": "string",
        "provider": "string",
        "srcURL": "string",
        "title": "string",
        "type": "string"
      }
    ],
    "sharedItems": [
      {
        "containerId": "string",
        "containerName": "string",
        "containerType": "string",
        "creationTime": 0,
        "creatorId": "string",
        "itemId": "string",
        "parentTopicId": "string",
        "subType": "string"
      }
    ],
    "spaceId": "string",
    "tenantId": "string"
  },
  "subject": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="updates-a-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated space topic|[SpaceTopic](#schemaspacetopic)|
|400|Bad Request|Http_bad_request|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE UPDATE_SPACE_CONTENT )
</aside>

## Gets space replies

<a id="opIdgetSpaceReplies"></a>

> Code samples

```bash
curl 'https://example.com/spaces/string/topic/string/reply?searchDirection=BEFORE' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/topic/{topicId}/reply`

Gets a number of Space replies
OauthScopes: READ_SPACE

<h3 id="gets-space-replies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the containing space|
|topicId|path|string|true|Id of the topic|
|searchDirection|query|string|true|Search before or after a certain timestamp|
|timestamp|query|string(date-time)|false|Timestamp to start the search from|
|numberOfResults|query|number(int32)|false|The number of results that should be returned|

#### Enumerated Values

|Parameter|Value|
|---|---|
|searchDirection|BEFORE|
|searchDirection|AFTER|

> Example responses

> 200 Response

```json
{
  "parentTopicId": "string",
  "spaceItem": {
    "Status": "string",
    "attachments": [
      {
        "creationTime": 0,
        "creatorId": "string",
        "fileId": "string",
        "fileName": "string",
        "inlineUsage": true,
        "itemId": "string",
        "layout": "string",
        "mimeType": "string",
        "modificationTime": 0,
        "size": 0,
        "spaceId": "string",
        "thumbnailId": "string"
      }
    ],
    "complex": true,
    "content": "string",
    "creationTime": 0,
    "creatorId": "string",
    "deletedBy": "string",
    "externalAttachments": [
      {
        "attachment": {
          "creationTime": 0,
          "creatorId": "string",
          "fileId": "string",
          "fileName": "string",
          "inlineUsage": true,
          "itemId": "string",
          "layout": "string",
          "mimeType": "string",
          "modificationTime": 0,
          "size": 0,
          "spaceId": "string",
          "thumbnailId": "string"
        },
        "downloadLocation": "string",
        "previewLocation": "string",
        "shareLinkToken": "string",
        "type": "string"
      }
    ],
    "formMetaData": "string",
    "itemId": "string",
    "mentionedUsers": [
      "string"
    ],
    "modificationTime": 0,
    "numberOfLikes": 0,
    "previews": [
      {
        "description": "string",
        "html": "string",
        "imageURI": "string",
        "provider": "string",
        "srcURL": "string",
        "title": "string",
        "type": "string"
      }
    ],
    "sharedItems": [
      {
        "containerId": "string",
        "containerName": "string",
        "containerType": "string",
        "creationTime": 0,
        "creatorId": "string",
        "itemId": "string",
        "parentTopicId": "string",
        "subType": "string"
      }
    ],
    "spaceId": "string",
    "tenantId": "string"
  }
}
```

<h3 id="gets-space-replies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the replies|[SpaceReply](#schemaspacereply)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_SPACE )
</aside>

## creates a reply to a topic

<a id="opIdcreateReply"></a>

> Code samples

```bash
curl https://example.com/spaces/string/topic/string/reply \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'attachments=%5B%22string%22%5D&complex=true&content=string&formMetaData=string&mentionedUser=string'
```

`POST /spaces/{spaceId}/topic/{topicId}/reply`

creates a reply to a topic
OauthScopes: WRITE_SPACE

> Body parameter

```yaml
attachments:
  - string
complex: true
content: string
formMetaData: string
mentionedUser: string
```

<h3 id="creates-a-reply-to-a-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|ID of the space|
|topicId|path|string|true|ID of the topic|
|body|body|object|false|none|
|» attachments|body|[string]|false|the attached files|
|» complex|body|boolean|false|complex or not|
|» content|body|string|false|Content of the reply|
|» formMetaData|body|string|false|formMetaData used in the reply|
|» mentionedUser|body|string|false|the user mentioned in the reply|

> Example responses

> 200 Response

```json
{
  "parentTopicId": "string",
  "spaceItem": {
    "Status": "string",
    "attachments": [
      {
        "creationTime": 0,
        "creatorId": "string",
        "fileId": "string",
        "fileName": "string",
        "inlineUsage": true,
        "itemId": "string",
        "layout": "string",
        "mimeType": "string",
        "modificationTime": 0,
        "size": 0,
        "spaceId": "string",
        "thumbnailId": "string"
      }
    ],
    "complex": true,
    "content": "string",
    "creationTime": 0,
    "creatorId": "string",
    "deletedBy": "string",
    "externalAttachments": [
      {
        "attachment": {
          "creationTime": 0,
          "creatorId": "string",
          "fileId": "string",
          "fileName": "string",
          "inlineUsage": true,
          "itemId": "string",
          "layout": "string",
          "mimeType": "string",
          "modificationTime": 0,
          "size": 0,
          "spaceId": "string",
          "thumbnailId": "string"
        },
        "downloadLocation": "string",
        "previewLocation": "string",
        "shareLinkToken": "string",
        "type": "string"
      }
    ],
    "formMetaData": "string",
    "itemId": "string",
    "mentionedUsers": [
      "string"
    ],
    "modificationTime": 0,
    "numberOfLikes": 0,
    "previews": [
      {
        "description": "string",
        "html": "string",
        "imageURI": "string",
        "provider": "string",
        "srcURL": "string",
        "title": "string",
        "type": "string"
      }
    ],
    "sharedItems": [
      {
        "containerId": "string",
        "containerName": "string",
        "containerType": "string",
        "creationTime": 0,
        "creatorId": "string",
        "itemId": "string",
        "parentTopicId": "string",
        "subType": "string"
      }
    ],
    "spaceId": "string",
    "tenantId": "string"
  }
}
```

<h3 id="creates-a-reply-to-a-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|returns the created reply|[SpaceReply](#schemaspacereply)|
|400|Bad Request|invalid input|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE )
</aside>

## Updates a space reply

<a id="opIdupdateSpaceReply"></a>

> Code samples

```bash
curl https://example.com/spaces/string/topic/string/reply/string \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'attachments=%5B%22string%22%5D&complex=true&content=string&formMetaData=string&mentionedUsers=%5B%22string%22%5D'
```

`PUT /spaces/{spaceId}/topic/{topicId}/reply/{replyId}`

Updates a space reply
OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT

> Body parameter

```yaml
attachments:
  - string
complex: true
content: string
formMetaData: string
mentionedUsers:
  - string
```

<h3 id="updates-a-space-reply-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|ID of the space|
|topicId|path|string|true|ID of the topic|
|replyId|path|string|true|id of the reply|
|body|body|object|false|none|
|» attachments|body|[string]|false|the attached files|
|» complex|body|boolean|false|complex or not|
|» content|body|string|false|the content of the reply|
|» formMetaData|body|string|false|formMetaData of the reply|
|» mentionedUsers|body|[string]|false|the mentioned users in the reply|

> Example responses

> 200 Response

```json
{
  "parentTopicId": "string",
  "spaceItem": {
    "Status": "string",
    "attachments": [
      {
        "creationTime": 0,
        "creatorId": "string",
        "fileId": "string",
        "fileName": "string",
        "inlineUsage": true,
        "itemId": "string",
        "layout": "string",
        "mimeType": "string",
        "modificationTime": 0,
        "size": 0,
        "spaceId": "string",
        "thumbnailId": "string"
      }
    ],
    "complex": true,
    "content": "string",
    "creationTime": 0,
    "creatorId": "string",
    "deletedBy": "string",
    "externalAttachments": [
      {
        "attachment": {
          "creationTime": 0,
          "creatorId": "string",
          "fileId": "string",
          "fileName": "string",
          "inlineUsage": true,
          "itemId": "string",
          "layout": "string",
          "mimeType": "string",
          "modificationTime": 0,
          "size": 0,
          "spaceId": "string",
          "thumbnailId": "string"
        },
        "downloadLocation": "string",
        "previewLocation": "string",
        "shareLinkToken": "string",
        "type": "string"
      }
    ],
    "formMetaData": "string",
    "itemId": "string",
    "mentionedUsers": [
      "string"
    ],
    "modificationTime": 0,
    "numberOfLikes": 0,
    "previews": [
      {
        "description": "string",
        "html": "string",
        "imageURI": "string",
        "provider": "string",
        "srcURL": "string",
        "title": "string",
        "type": "string"
      }
    ],
    "sharedItems": [
      {
        "containerId": "string",
        "containerName": "string",
        "containerType": "string",
        "creationTime": 0,
        "creatorId": "string",
        "itemId": "string",
        "parentTopicId": "string",
        "subType": "string"
      }
    ],
    "spaceId": "string",
    "tenantId": "string"
  }
}
```

<h3 id="updates-a-space-reply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated space reply|[SpaceReply](#schemaspacereply)|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE UPDATE_SPACE_CONTENT )
</aside>

## Gets space topics

<a id="opIdgetSpaceTopics"></a>

> Code samples

```bash
curl 'https://example.com/spaces/string/topics?searchDirection=BEFORE' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/topics`

Gets a number of Space topics
OauthScopes: READ_SPACE

<h3 id="gets-space-topics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|searchDirection|query|string|true|Search before or after a certain timestamp|
|timestamp|query|string(date-time)|false|Timestamp to start the search from|
|numberOfResults|query|number(int32)|false|The number of results that should be returned|

#### Enumerated Values

|Parameter|Value|
|---|---|
|searchDirection|BEFORE|
|searchDirection|AFTER|

> Example responses

> 200 Response

```json
[
  {
    "lastContentCreationTime": 0,
    "lastContentCreatorId": "string",
    "numberOfReplies": 0,
    "pinned": true,
    "spaceItem": {
      "Status": "string",
      "attachments": [
        {
          "creationTime": 0,
          "creatorId": "string",
          "fileId": "string",
          "fileName": "string",
          "inlineUsage": true,
          "itemId": "string",
          "layout": "string",
          "mimeType": "string",
          "modificationTime": 0,
          "size": 0,
          "spaceId": "string",
          "thumbnailId": "string"
        }
      ],
      "complex": true,
      "content": "string",
      "creationTime": 0,
      "creatorId": "string",
      "deletedBy": "string",
      "externalAttachments": [
        {
          "attachment": {
            "creationTime": 0,
            "creatorId": "string",
            "fileId": "string",
            "fileName": "string",
            "inlineUsage": true,
            "itemId": "string",
            "layout": "string",
            "mimeType": "string",
            "modificationTime": 0,
            "size": 0,
            "spaceId": "string",
            "thumbnailId": "string"
          },
          "downloadLocation": "string",
          "previewLocation": "string",
          "shareLinkToken": "string",
          "type": "string"
        }
      ],
      "formMetaData": "string",
      "itemId": "string",
      "mentionedUsers": [
        "string"
      ],
      "modificationTime": 0,
      "numberOfLikes": 0,
      "previews": [
        {
          "description": "string",
          "html": "string",
          "imageURI": "string",
          "provider": "string",
          "srcURL": "string",
          "title": "string",
          "type": "string"
        }
      ],
      "sharedItems": [
        {
          "containerId": "string",
          "containerName": "string",
          "containerType": "string",
          "creationTime": 0,
          "creatorId": "string",
          "itemId": "string",
          "parentTopicId": "string",
          "subType": "string"
        }
      ],
      "spaceId": "string",
      "tenantId": "string"
    },
    "subject": "string",
    "tags": [
      "string"
    ]
  }
]
```

<h3 id="gets-space-topics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the the topics|Inline|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="gets-space-topics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SpaceTopic](#schemaspacetopic)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_SPACE )
</aside>

## Update content of welcome box

<a id="opIdv2UpdateWelcomeBoxContent"></a>

> Code samples

```bash
curl https://example.com/spaces/string/welcomebox/string \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'displayWelcomeBox=false'
```

`PUT /spaces/{spaceId}/welcomebox/{content}`

Update content of the welcome box of a space
OauthScopes: MANAGE_SPACE, WRITE_SPACE

> Body parameter

```yaml
displayWelcomeBox: false
```

<h3 id="update-content-of-welcome-box-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|content|path|string|true|The new content|
|body|body|object|false|none|
|» displayWelcomeBox|body|boolean|false|True, false, default:false|

<h3 id="update-content-of-welcome-box-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|missing documentation|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL MANAGE_SPACE WRITE_SPACE )
</aside>

## Pin a topic

<a id="opIdpinTopic"></a>

> Code samples

```bash
curl https://example.com/spaces/string/pin \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'position=0'
```

`PUT /spaces/{topicId}/pin`

Pin a topic
OauthScopes: WRITE_SPACE, MANAGE_SPACE

> Body parameter

```yaml
position: 0
```

<h3 id="pin-a-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topicId|path|string|true|The id of the topic|
|body|body|object|true|none|
|» position|body|number(int32)|true|The position to pin to|

<h3 id="pin-a-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Topic successfully pinned.|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE MANAGE_SPACE )
</aside>

## Unpin a topic

<a id="opIdunpinTopic"></a>

> Code samples

```bash
curl https://example.com/spaces/string/unpin \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /spaces/{topicId}/unpin`

Unpin a topic
OauthScopes: WRITE_SPACE, MANAGE_SPACE

<h3 id="unpin-a-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topicId|path|string|true|The id of the topic to unpin|

<h3 id="unpin-a-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Topic successfully unpinned.|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_SPACE MANAGE_SPACE )
</aside>

<h1 id="rest-api-version-2-telephony">Telephony</h1>

## Get devices infos

<a id="opIdv2GetDeviceInfos"></a>

> Code samples

```bash
curl https://example.com/telephony/deviceInfos \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /telephony/deviceInfos`

Get the device infos of the requesting user
OauthScopes: READ_USER_PROFILE

<h3 id="get-devices-infos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Device infos successfully retrieved|Inline|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="get-devices-infos-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[V2DistributedClientInfo](#schemav2distributedclientinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_USER_PROFILE )
</aside>

## Get telephony conversation id

<a id="opIdv2GetTelephonyConversationId"></a>

> Code samples

```bash
curl https://example.com/telephony/telephonyConversationId \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /telephony/telephonyConversationId`

Get telephony conversation id for requesting client
OauthScopes: READ_CONVERSATIONS

<h3 id="get-telephony-conversation-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Telephony conversation id successfully retrieved|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

## Get journal

<a id="opIdgetJournalEntries"></a>

> Code samples

```bash
curl https://example.com/telephony/string/journal \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /telephony/{telephonyConversationId}/journal`

Get telephony journal
OauthScopes: READ_CONVERSATIONS

<h3 id="get-journal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|telephonyConversationId|path|string|true|The id of the telephony conversation|
|timestamp|query|number(int64)|false|A timestamp, default = 0|
|numberOfEntries|query|number(int32)|false|The number of entries, between 1 and 100, default = 25|
|direction|query|string|false|The direction (BEFORE\|\|AFTER\|\|BOTH), default = AFTER|
|journalFilter|query|string|false|The filter, ALL\|\|MISSED\|\|DIALED\|\|RECEIVED\|\|DIVERTED\|\|VOICEMAILS\|\|UNHERAD_VOICEMAILS. default = ALL|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|AFTER|
|direction|BEFORE|
|direction|BOTH|
|journalFilter|ALL|
|journalFilter|MISSED|
|journalFilter|DIALED|
|journalFilter|RECEIVED|
|journalFilter|DIVERTED|
|journalFilter|VOICEMAILS|
|journalFilter|UNHERAD_VOICEMAILS|

> Example responses

> 200 Response

```json
[
  {
    "attachments": [
      {
        "creationTime": 0,
        "creatorId": "string",
        "deleteUrl": "string",
        "fileId": "string",
        "fileName": "string",
        "itemId": "string",
        "mimeType": "string",
        "modificationTime": 0,
        "size": 0,
        "url": "string"
      }
    ],
    "convId": "string",
    "creationTime": 0,
    "creatorId": "string",
    "includeInUnreadCount": true,
    "itemId": "string",
    "modificationTime": 0,
    "rtc": {
      "ended": {
        "duration": 0,
        "maxNumberOfAttendees": 0,
        "pickFromParticipant": "string"
      },
      "missed": "string",
      "moved": {
        "conversationId": "string",
        "direction": "string"
      },
      "rtcParticipants": [
        {
          "displayName": "string",
          "fullyQualifiedNumber": "string",
          "phoneNumber": "string",
          "resolvedUser": null,
          "type": "string",
          "userId": "string"
        }
      ],
      "type": "string"
    },
    "system": {
      "affectedParticipants": [
        "string"
      ],
      "newTopic": "string",
      "oldTopic": "string",
      "type": "string"
    },
    "text": {
      "content": "string",
      "contentType": "string",
      "formMetaData": "string",
      "isWebhookMessage": true,
      "likedUserIds": [
        "string"
      ],
      "parentId": "string",
      "preview": {
        "imageURI": "string",
        "srcURL": "string",
        "title": "string",
        "type": "string"
      },
      "state": "string",
      "subject": "string"
    },
    "type": "string"
  }
]
```

<h3 id="get-journal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Journal successfully retrieved|Inline|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="get-journal-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ConversationItem](#schemaconversationitem)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS )
</aside>

<h1 id="rest-api-version-2-users">Users</h1>

## Search for users

<a id="opIdsearchUser"></a>

> Code samples

```bash
curl 'https://example.com/users?name=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users`

Search for users based on an email address or username
OauthScopes: READ_USER

<h3 id="search-for-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Search for a user by name|

> Example responses

> 200 Response

```json
[
  {
    "avatar": "string",
    "avatarLarge": "string",
    "company": "string",
    "department": "string",
    "displayName": "string",
    "emailAddress": "string",
    "emailAddresses": [
      {
        "address": "string",
        "type": "string"
      }
    ],
    "firstName": "string",
    "jobTitle": "string",
    "lastName": "string",
    "locale": "string",
    "phoneNumber": "string",
    "phoneNumbers": [
      {
        "phoneNumber": "string",
        "type": "string"
      }
    ],
    "primaryTenantId": "string",
    "secondaryEmailAddress": "string",
    "secondaryTenantId": "string",
    "userId": "string",
    "userState": "string",
    "userType": "string"
  }
]
```

<h3 id="search-for-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The users which match the search criteria|Inline|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|404|Not Found|The search term did not much any results|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="search-for-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[User](#schemauser)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_USER )
</aside>

## Returns all user labels

<a id="opIdgetLabel"></a>

> Code samples

```bash
curl https://example.com/users/labels \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/labels`

Returns all labels of the user that were defined either explicit or implicit via assignment to conversations.
OauthScopes: READ_USER_PROFILE, ORGANIZE_CONVERSATIONS

<h3 id="returns-all-user-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of labels|Inline|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="returns-all-user-labels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Label](#schemalabel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_USER_PROFILE ORGANIZE_CONVERSATIONS )
</aside>

## Search multiple users.

<a id="opIdsearchUsersList"></a>

> Code samples

```bash
curl 'https://example.com/users/list?name=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/list`

Search multiple users given by id or email address.
OauthScopes: READ_USER

<h3 id="search-multiple-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|[string]|true|Multiple email addresses or UUIDs.|
|returnFullUserInfo|query|boolean|false|Boolean, return full user info?|
|secondaryLookup|query|boolean|false|Boolean, lookup secondary email?|

> Example responses

> 200 Response

```json
[
  {
    "avatar": "string",
    "avatarLarge": "string",
    "company": "string",
    "department": "string",
    "displayName": "string",
    "emailAddress": "string",
    "emailAddresses": [
      {
        "address": "string",
        "type": "string"
      }
    ],
    "firstName": "string",
    "jobTitle": "string",
    "lastName": "string",
    "locale": "string",
    "phoneNumber": "string",
    "phoneNumbers": [
      {
        "phoneNumber": "string",
        "type": "string"
      }
    ],
    "primaryTenantId": "string",
    "secondaryEmailAddress": "string",
    "secondaryTenantId": "string",
    "userId": "string",
    "userState": "string",
    "userType": "string"
  }
]
```

<h3 id="search-multiple-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|At least one user was found and returned in a list|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|The authentication was not successful|None|
|404|Not Found|No user was found|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="search-multiple-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[User](#schemauser)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_USER )
</aside>

## Gets the presence status

<a id="opIdgetPresence"></a>

> Code samples

```bash
curl 'https://example.com/users/presence?userIds=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/presence`

Gets the presence status of the users whose IDs or email addresses are given.
OauthScopes: READ_USER

<h3 id="gets-the-presence-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userIds|query|[string]|true|A list of unique user IDs or email addresses of the users you want to query the presence state for|

> Example responses

> 200 Response

```json
[
  {
    "dndUntil": 0,
    "isOptedOut": true,
    "latitude": 0,
    "locationText": "string",
    "longitude": 0,
    "mobile": true,
    "poor": true,
    "state": "string",
    "statusMessage": "string",
    "timeZoneOffset": 0,
    "userId": "string"
  }
]
```

<h3 id="gets-the-presence-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The presence states|Inline|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the userIds passed as parameter are not provided in the correct format</li><li> or a valid email address</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|404|Not Found|One or more of the users do not exist|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="gets-the-presence-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Presence](#schemapresence)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_USER )
</aside>

## Updates the presence status

<a id="opIdsetUserPresence"></a>

> Code samples

```bash
curl https://example.com/users/presence \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'clearDND=false&dndUntil=1970-01-01T00%3A00%3A00Z&state=string&statusMessage=string'
```

`PUT /users/presence`

Updates the presence status of the authenticated user.
OauthScopes: WRITE_USER_PROFILE, MANAGE_PRESENCE

> Body parameter

```yaml
clearDND: false
dndUntil: "1970-01-01T00:00:00Z"
state: string
statusMessage: string
```

<h3 id="updates-the-presence-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» clearDND|body|boolean|false|Clear the DND of the user.|
|» dndUntil|body|string(date-time)|false|Timestamp until the DND state of the user is active. This field is mandatory when the state is set to DND.|
|» state|body|string|true|The user's presence.|
|» statusMessage|body|string|false|An optional status message that is displayed instead of the location|

> Example responses

> 200 Response

```json
{
  "dndUntil": 0,
  "isOptedOut": true,
  "latitude": 0,
  "locationText": "string",
  "longitude": 0,
  "mobile": true,
  "poor": true,
  "state": "string",
  "statusMessage": "string",
  "timeZoneOffset": 0,
  "userId": "string"
}
```

<h3 id="updates-the-presence-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The presence states|[Presence](#schemapresence)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the presence state is DND and the data format of the passed dndUntil is missing </li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_USER_PROFILE MANAGE_PRESENCE )
</aside>

## Gets the authenticated user's profile information

<a id="opIdgetProfile"></a>

> Code samples

```bash
curl https://example.com/users/profile \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/profile`

Gets the authenticated user's profile information.
OauthScopes: READ_USER_PROFILE

<h3 id="gets-the-authenticated-users-profile-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gets the authenticated user's profile information|[User](#schemauser)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_USER_PROFILE )
</aside>

## Gets the support information

<a id="opIdgetSupportInfo"></a>

> Code samples

```bash
curl https://example.com/users/supportinfo \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/supportinfo`

Gets the support information for the tenant of the requesting user
OauthScopes: READ_USER_PROFILE

<h3 id="gets-the-support-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful, the support information returned|[SupportInfo](#schemasupportinfo)|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_USER_PROFILE )
</aside>

## Get user by email

<a id="opIdgetUserByEmailAddress"></a>

> Code samples

```bash
curl https://example.com/users/string/getUserByEmail \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{emailAddress}/getUserByEmail`

Get user by first or secondary email address
OauthScopes: READ_USER_PROFILE

<h3 id="get-user-by-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emailAddress|path|string|true|The main or secondary email address of a user.|
|secondaryLookup|query|boolean|false|secondaryLookup enabled (default = false)|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "company": "string",
  "department": "string",
  "displayName": "string",
  "emailAddress": "string",
  "emailAddresses": [
    {
      "address": "string",
      "type": "string"
    }
  ],
  "firstName": "string",
  "jobTitle": "string",
  "lastName": "string",
  "locale": "string",
  "phoneNumber": "string",
  "phoneNumbers": [
    {
      "phoneNumber": "string",
      "type": "string"
    }
  ],
  "primaryTenantId": "string",
  "secondaryEmailAddress": "string",
  "secondaryTenantId": "string",
  "userId": "string",
  "userState": "string",
  "userType": "string"
}
```

<h3 id="get-user-by-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User successfully retrieved|[User](#schemauser)|
|401|Unauthorized|The authentication was not successful|None|
|404|Not Found|User not found or not a session guest. |None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_USER_PROFILE )
</aside>

## Gets the user's profile information

<a id="opIdgetUserById"></a>

> Code samples

```bash
curl https://example.com/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{id}`

Gets the profile information of the user with the given ID.
OauthScopes: READ_USER

<h3 id="gets-the-users-profile-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique ID or the email address of the user to fetch|

> Example responses

> 200 Response

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "company": "string",
  "department": "string",
  "displayName": "string",
  "emailAddress": "string",
  "emailAddresses": [
    {
      "address": "string",
      "type": "string"
    }
  ],
  "firstName": "string",
  "jobTitle": "string",
  "lastName": "string",
  "locale": "string",
  "phoneNumber": "string",
  "phoneNumbers": [
    {
      "phoneNumber": "string",
      "type": "string"
    }
  ],
  "primaryTenantId": "string",
  "secondaryEmailAddress": "string",
  "secondaryTenantId": "string",
  "userId": "string",
  "userState": "string",
  "userType": "string"
}
```

<h3 id="gets-the-users-profile-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful, the user profile is returned|[User](#schemauser)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the data format of the passed user does not match either a UUID (user primary key)</li><li> or an valid email address</li><li>or a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|404|Not Found|The user does not exist|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_USER )
</aside>

## Gets the presence status

<a id="opIdgetUserPresence"></a>

> Code samples

```bash
curl https://example.com/users/string/presence \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{id}/presence`

Gets the presence status of the users whose ID or email address is given.
OauthScopes: READ_USER

<h3 id="gets-the-presence-status-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique ID or the email address of the user to fetch.|

> Example responses

> 200 Response

```json
{
  "dndUntil": 0,
  "isOptedOut": true,
  "latitude": 0,
  "locationText": "string",
  "longitude": 0,
  "mobile": true,
  "poor": true,
  "state": "string",
  "statusMessage": "string",
  "timeZoneOffset": 0,
  "userId": "string"
}
```

<h3 id="gets-the-presence-status-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The presence state|[Presence](#schemapresence)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the data format of the passed user does not match either a UUID (user primary key)</li><li> or a valid email address</li><li>or a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|404|Not Found|The user does not exist|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_USER )
</aside>

<h1 id="rest-api-version-2-outgoing-webhooks">Outgoing Webhooks</h1>

## Gets a list of webHooks

<a id="opIdgetWebHook"></a>

> Code samples

```bash
curl https://example.com/webhooks \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks`

Gets the list of webHooks registered for this user or API.
OauthScopes: READ_CONVERSATIONS, READ_USER

<h3 id="gets-a-list-of-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of registered webHooks|Inline|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="gets-a-list-of-webhooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[WebHook](#schemawebhook)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS READ_USER )
</aside>

## Registers a WebHook

<a id="opIdaddWebHook"></a>

> Code samples

```bash
curl https://example.com/webhooks \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'filter=%5B%22CONVERSATION.CREATE%22%5D&url=string'
```

`POST /webhooks`

Registers the webHook with the given filter and callback URL.
OauthScopes: READ_CONVERSATIONS, READ_USER

> Body parameter

```yaml
filter:
  - CONVERSATION.CREATE
url: string
```

<h3 id="registers-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» filter|body|[string]|true|A filter for WebHooks that checks for a list of configured events. This filter will use a regular expression to determine if it is interested in the events or not. The event itself is converted into a string of format AREA.EVENT. Examples: CONVERSATION.CREATE / USER.UPDATE|
|» url|body|string|true|WebHook callback URL|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» filter|CONVERSATION.CREATE|
|» filter|CONVERSATION.UPDATE|
|» filter|CONVERSATION.ADD_ITEM|
|» filter|CONVERSATION.UPDATE_ITEM|
|» filter|USER.INCOMING_CALL|
|» filter|USER.USER_UPDATED|
|» filter|USER.USER_SETTING_UPDATED|
|» filter|USER.SUBMIT_FORM_DATA|

> Example responses

> 201 Response

```json
{
  "creationTime": 0,
  "filter": [
    "string"
  ],
  "id": "string",
  "subscriptionIds": [
    "string"
  ],
  "type": "string",
  "url": "string",
  "userId": "string"
}
```

<h3 id="registers-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The webHook was successfully registered|[WebHook](#schemawebhook)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>an invalid URL</li><li>an invalid event filter</li><li>an unsupported event filter</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|403|Forbidden|The maximum number of allowed webHook is reached|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS READ_USER )
</aside>

## Removes all webHooks

<a id="opIdremoveWebHooks"></a>

> Code samples

```bash
curl https://example.com/webhooks \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /webhooks`

Unregisters all webHooks of the authenticated user
OauthScopes: READ_CONVERSATIONS, READ_USER

<h3 id="removes-all-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The operation was successful|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS READ_USER )
</aside>

## Registers Presence WebHook registration

<a id="opIdaddPresenceWebHook"></a>

> Code samples

```bash
curl https://example.com/webhooks/presence \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'url=string&userIds=%5B%22string%22%5D'
```

`POST /webhooks/presence`

Registers a webHook that has a presence filter with the given URL and userIds. There is a maximum number of userIds allowed
OauthScopes: READ_USER

> Body parameter

```yaml
url: string
userIds:
  - string
```

<h3 id="registers-presence-webhook-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» url|body|string|true|WebHook callback URL|
|» userIds|body|[string]|true|The IDs of the users to subscribe for their presence|

> Example responses

> 201 Response

```json
{
  "creationTime": 0,
  "filter": [
    "string"
  ],
  "id": "string",
  "subscriptionIds": [
    "string"
  ],
  "type": "string",
  "url": "string",
  "userId": "string"
}
```

<h3 id="registers-presence-webhook-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The webHook was successfully registered|[WebHook](#schemawebhook)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>an invalid URL</li><li>one or more invalid userIds</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|403|Forbidden|The maximum number of allowed userIds is reached or the maximum number of allowed webHook is reached|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_USER )
</aside>

## Updates a Presence WebHook registration

<a id="opIdupdatePresenceWebHook"></a>

> Code samples

```bash
curl https://example.com/webhooks/presence/string \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'url=string&userIds=%5B%22string%22%5D'
```

`PUT /webhooks/presence/{id}`

Updates a registration of a webHook that has a presence filter. The update can be performed either on the URL and/or the userIds. The new userIds, if any, will override any existing userIds.
OauthScopes: READ_USER

> Body parameter

```yaml
url: string
userIds:
  - string
```

<h3 id="updates-a-presence-webhook-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique ID of the webHook to update|
|body|body|object|false|none|
|» url|body|string|false|WebHook callback URL|
|» userIds|body|[string]|false|The IDs of the users to subscribe for their presence|

> Example responses

> 200 Response

```json
{
  "creationTime": 0,
  "filter": [
    "string"
  ],
  "id": "string",
  "subscriptionIds": [
    "string"
  ],
  "type": "string",
  "url": "string",
  "userId": "string"
}
```

<h3 id="updates-a-presence-webhook-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The webHook registration was successfully updated|[WebHook](#schemawebhook)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>an invalid URL</li><li>one or more invalid userIds</li><li>no input parameter is provided</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|403|Forbidden|The maximum number of allowed userIds is reached|None|
|404|Not Found|The webHook does not exist|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_USER )
</aside>

## Gets a webHook

<a id="opIdgetWebHookById"></a>

> Code samples

```bash
curl https://example.com/webhooks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/{id}`

Gets the registered webHook with the given ID.
OauthScopes: READ_CONVERSATIONS, READ_USER

<h3 id="gets-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique ID of the webHook to fetch|

> Example responses

> 200 Response

```json
{
  "creationTime": 0,
  "filter": [
    "string"
  ],
  "id": "string",
  "subscriptionIds": [
    "string"
  ],
  "type": "string",
  "url": "string",
  "userId": "string"
}
```

<h3 id="gets-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The registered webHook with the given ID|[WebHook](#schemawebhook)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the data format of the given id does not match a UUID</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|404|Not Found|The webHook does not exist|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS READ_USER )
</aside>

## Updates a WebHook registration

<a id="opIdupdateWebHook"></a>

> Code samples

```bash
curl https://example.com/webhooks/string \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'filter=%5B%22CONVERSATION.CREATE%22%5D&url=string'
```

`PUT /webhooks/{id}`

Updates a webHook registration with the given filter and callback URL.
OauthScopes: READ_CONVERSATIONS, READ_USER

> Body parameter

```yaml
filter:
  - CONVERSATION.CREATE
url: string
```

<h3 id="updates-a-webhook-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique ID of the webHook to update|
|body|body|object|false|none|
|» filter|body|[string]|false|A filter for WebHooks that checks for a list of configured events. This filter will use a regular expression to determine if it is interested in the events or not. The event itself is converted into a string of format AREA.EVENT. Examples: CONVERSATION.CREATE / USER.UPDATE|
|» url|body|string|false|WebHook callback URL|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» filter|CONVERSATION.CREATE|
|» filter|CONVERSATION.UPDATE|
|» filter|CONVERSATION.ADD_ITEM|
|» filter|CONVERSATION.UPDATE_ITEM|
|» filter|USER.INCOMING_CALL|
|» filter|USER.USER_UPDATED|
|» filter|USER.USER_SETTING_UPDATED|
|» filter|USER.SUBMIT_FORM_DATA|

> Example responses

> 200 Response

```json
{
  "creationTime": 0,
  "filter": [
    "string"
  ],
  "id": "string",
  "subscriptionIds": [
    "string"
  ],
  "type": "string",
  "url": "string",
  "userId": "string"
}
```

<h3 id="updates-a-webhook-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The webHook registration was successfully updated|[WebHook](#schemawebhook)|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>an invalid URL</li><li>an invalid event filter</li><li>an unsupported event filter</li><li>no input parameter is provided</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|404|Not Found|The webHook does not exist|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS READ_USER )
</aside>

## Removes a registered webHook

<a id="opIdremoveWebHook"></a>

> Code samples

```bash
curl https://example.com/webhooks/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /webhooks/{id}`

Unregisters the webHook with the given ID.
OauthScopes: READ_CONVERSATIONS, READ_USER

<h3 id="removes-a-registered-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique ID of the webHook to remove|

<h3 id="removes-a-registered-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The operation was successful|None|
|400|Bad Request|The request cannot be fulfilled due to bad syntax: <ul><li>the data format of the given id does not match a UUID</li><li>a field constraint is violated</li></ul>|None|
|401|Unauthorized|The authentication was not successful|None|
|404|Not Found|The webHook does not exist|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS READ_USER )
</aside>

<h1 id="rest-api-version-2-incoming-webhooks">Incoming Webhooks</h1>

## Create a new webhook for existing conversation.

<a id="opIdcreateIncomingWebhook"></a>

> Code samples

```bash
curl https://example.com/webhooks/incoming/create/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /webhooks/incoming/create/{conversationId}`

Create a new webhook. Conversation must exist and creater has to be participant.
OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

<h3 id="create-a-new-webhook-for-existing-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversationId|path|string|true|The id of the conversation.|
|name|query|string|false|The name of the webhook|
|userId|query|string|false|The id of the user of the webhook|
|description|query|string|false|A short description of the webhook|

> Example responses

> 200 Response

```json
{
  "conversationId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "description": "string",
  "modificationTime": 0,
  "name": "string",
  "status": "string",
  "tenantId": "string",
  "url": "string",
  "userId": "string",
  "webhookId": "string"
}
```

<h3 id="create-a-new-webhook-for-existing-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The created webhook object as JSON string.|[IncomingWebhook](#schemaincomingwebhook)|
|400|Bad Request|Could not create webhook.|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS MANAGE_CONVERSATIONS )
</aside>

## Get all webhooks of a special user.

<a id="opIdgetIncomingWebhookByUser"></a>

> Code samples

```bash
curl https://example.com/webhooks/incoming/user/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/incoming/user/{userId}`

Get all webhooks of a special user.
OauthScopes: READ_CONVERSATIONS, MANAGE_CONVERSATIONS

<h3 id="get-all-webhooks-of-a-special-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The id of the user.|
|pagesize|query|number(int32)|false|Max number of hooks per request. Default is 25|
|searchpointer|query|string|false|Start of search if consequtive call.|

> Example responses

> 200 Response

```json
[
  {
    "conversationId": "string",
    "creationTime": 0,
    "creatorId": "string",
    "description": "string",
    "modificationTime": 0,
    "name": "string",
    "status": "string",
    "tenantId": "string",
    "url": "string",
    "userId": "string",
    "webhookId": "string"
  }
]
```

<h3 id="get-all-webhooks-of-a-special-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result successful|Inline|
|400|Bad Request|The request cannot be fulfilled due to bad syntax|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<h3 id="get-all-webhooks-of-a-special-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IncomingWebhook](#schemaincomingwebhook)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL READ_CONVERSATIONS MANAGE_CONVERSATIONS )
</aside>

## Post text item for conversation via webhook.

<a id="opIdpostWebhookAsSlackMessage"></a>

> Code samples

```bash
curl https://example.com/webhooks/incoming/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'fileURL=string&filename=string&markdown=true&subject=string&text=string'
```

`POST /webhooks/incoming/{webhookId}`

Post text items to conversations via slack apps.

> Body parameter

```yaml
fileURL: string
filename: string
markdown: true
subject: string
text: string
```

<h3 id="post-text-item-for-conversation-via-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookId|path|string|true|The id of the webhook.|
|body|body|[IncomingWebhookSlackMessage](#schemaincomingwebhookslackmessage)|true|Attached JSON object in slack format.|
|» fileURL|body|string|false|missing documentation|
|» filename|body|string|false|missing documentation|
|» markdown|body|boolean|false|missing documentation|
|» subject|body|string|false|missing documentation|
|» text|body|string|false|The text which will occur in the conversation. May contain formats like *bold* or _italic_|

<h3 id="post-text-item-for-conversation-via-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message was posted to conversation|None|
|400|Bad Request|The request cannot be fulfilled due to bad syntax|None|
|401|Unauthorized|The authentication was not successful|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an existing webhook

<a id="opIddeleteIncomingWebhook"></a>

> Code samples

```bash
curl https://example.com/webhooks/incoming/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /webhooks/incoming/{webhookId}`

Delete a new webhook. Webhook must exist
OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS

<h3 id="delete-an-existing-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookId|path|string|true|The id of the webhook|

<h3 id="delete-an-existing-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The webhook was deleted|None|
|401|Unauthorized|The authentication was not successful|None|
|404|Not Found|Could not find webhook|None|
|500|Internal Server Error|The server encountered an internal error and the operation could not be completed.|None|
|503|Service Unavailable|The server is currently unable to receive requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth ( Scopes: ALL WRITE_CONVERSATIONS MANAGE_CONVERSATIONS )
</aside>

# Schemas

<h2 id="tocS_AddParticipantsSearchResult">AddParticipantsSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemaaddparticipantssearchresult"></a>
<a id="schema_AddParticipantsSearchResult"></a>
<a id="tocSaddparticipantssearchresult"></a>
<a id="tocsaddparticipantssearchresult"></a>

```json
{
  "department": "string",
  "firstName": "string",
  "isMember": true,
  "jobTitle": "string",
  "lastName": "string",
  "smallImageUri": "string",
  "tenantId": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|department|string|false|none|The department of the participant|
|firstName|string|false|none|The first name of the participant|
|isMember|boolean|false|none|is the participant a member, true or false|
|jobTitle|string|false|none|The job title of the participant|
|lastName|string|false|none|The last name of the participant|
|smallImageUri|string|false|none|The uri of the small picture of the participant|
|tenantId|string|false|none|the tenant id of the participant|
|userId|string|false|none|The id of the participant|

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "creationTime": 0,
  "creatorId": "string",
  "deleteUrl": "string",
  "fileId": "string",
  "fileName": "string",
  "itemId": "string",
  "mimeType": "string",
  "modificationTime": 0,
  "size": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|number(int64)|false|none|The creation time of the attachment.|
|creatorId|string|false|none|The id of the creator of the attachment.|
|deleteUrl|string|false|none|The delete URL of the attachment.|
|fileId|string|false|none|The id of the attachment file.|
|fileName|string|false|none|The name of the attachment file.|
|itemId|string|false|none|The item id to which the attachment is attached.|
|mimeType|string|false|none|The mime type of the attachment file.|
|modificationTime|number(int64)|false|none|The modification time of the attachment.|
|size|number(int64)|false|none|The size of the attachment file.|
|url|string|false|none|The URL of the attachment.|

<h2 id="tocS_BasicSearchResult">BasicSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemabasicsearchresult"></a>
<a id="schema_BasicSearchResult"></a>
<a id="tocSbasicsearchresult"></a>
<a id="tocsbasicsearchresult"></a>

```json
{
  "spaces": [
    {
      "accessModeType": "string",
      "creationTime": 0,
      "creatorId": "string",
      "defaultRole": "string",
      "description": "string",
      "largePictureBase64": "string",
      "largePictureContentType": "string",
      "largePictureId": "string",
      "lastContentCreationTime": 0,
      "lastContentCreatorId": "string",
      "modificationTime": 0,
      "name": "string",
      "numberOfExternalParticipants": 0,
      "numberOfParticipants": 0,
      "numberOfPinnedTopics": 0,
      "numberOfReplies": 0,
      "numberOfTopics": 0,
      "ownerId": "string",
      "smallPictureBase64": "string",
      "smallPictureContentType": "string",
      "smallPictureId": "string",
      "spaceId": "string",
      "status": "string",
      "tags": [
        "string"
      ],
      "tenantId": "string",
      "type": "string"
    }
  ],
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spaces|[[Space](#schemaspace)]|false|none|List of spaces|
|status|string|false|none|The status of the search (NORESULT, ERROR, TIMEOUT, MORERESULT)|

<h2 id="tocS_BridgeNumber">BridgeNumber</h2>
<!-- backwards compatibility -->
<a id="schemabridgenumber"></a>
<a id="schema_BridgeNumber"></a>
<a id="tocSbridgenumber"></a>
<a id="tocsbridgenumber"></a>

```json
{
  "bridgeNumber": "string",
  "country": "string",
  "isMostUsed": true,
  "locale": "string",
  "name": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bridgeNumber|string|false|none|The number that has to be called to join the real time session of a conversation|
|country|string|false|none|The country where the bridge is hosted|
|isMostUsed|boolean|false|none|Is most used|
|locale|string|false|none|The locale of the bridge|
|name|string|false|none|The name / identifier of the bridge|
|type|string|false|none|Information of the billing for the call, i.e. if the caller has to pay or not for the call|

<h2 id="tocS_Conversation">Conversation</h2>
<!-- backwards compatibility -->
<a id="schemaconversation"></a>
<a id="schema_Conversation"></a>
<a id="tocSconversation"></a>
<a id="tocsconversation"></a>

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "creatorTenantId": "string",
  "description": "string",
  "isGuestAccessDisabled": true,
  "isModerated": true,
  "modificationTime": 0,
  "participants": [
    "string"
  ],
  "topic": "string",
  "topicPlaceholder": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|string|false|none|The URL of the small avatar image of the conversation|
|avatarLarge|string|false|none|The URL of the large avatar image of the conversation|
|convId|string|false|none|The ID of the conversation|
|creationTime|number(int64)|false|none|UTC timestamp when the conversation was created|
|creatorId|string|false|none|The ID of the user who created the conversation|
|creatorTenantId|string|false|none|The ID of the Circuit domain (tenant) where the creator of the conversation belongs to|
|description|string|false|none|The description of the conversation. This field is available only for conversations with type COMMUNITY|
|isGuestAccessDisabled|boolean|false|none|Indicates whether guest access to the conversation is disabled or not|
|isModerated|boolean|false|none|Indicates whether the conversation is moderated or not. In a moderated conversation only participants who have been assigned the role of a moderator are allowed to add or remove participants into the conversation|
|modificationTime|number(int64)|false|none|UTC timestamp when the conversation was modified. A conversation is modified when any of the conversation object fields change but not when conversation items are added or edited|
|participants|[string]|false|none|Array of active participants|
|topic|string|false|none|The title of the conversation. Conversations of type DIRECT cannot have a title|
|topicPlaceholder|string|false|none|The title of the conversation. Conversations of type DIRECT cannot have a title|
|type|string|false|none|The type of the conversation. It can be one of the following: DIRECT, GROUP, COMMUNITY or LARGE|

<h2 id="tocS_ConversationDetails">ConversationDetails</h2>
<!-- backwards compatibility -->
<a id="schemaconversationdetails"></a>
<a id="schema_ConversationDetails"></a>
<a id="tocSconversationdetails"></a>
<a id="tocsconversationdetails"></a>

```json
{
  "bridgeNumbers": [
    {
      "bridgeNumber": "string",
      "country": "string",
      "isMostUsed": true,
      "locale": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "convId": "string",
  "conversationCreatorId": "string",
  "isModerationAllowed": true,
  "isRecordingAllowed": true,
  "link": "string",
  "pin": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bridgeNumbers|[[BridgeNumber](#schemabridgenumber)]|false|none|A list of bridge numbers which can be used to dial in to the real time session via phone|
|convId|string|false|none|missing documentation|
|conversationCreatorId|string|false|none|The user ID of the conversation creator|
|isModerationAllowed|boolean|false|none|Indicates if the conversation is allowed to be moderated|
|isRecordingAllowed|boolean|false|none|Indicates if the conversation is allowed to be recorded|
|link|string|false|none|A link that can be used in a browser to join the session|
|pin|string|false|none|The PIN to join a real time session via phone|

<h2 id="tocS_ConversationItem">ConversationItem</h2>
<!-- backwards compatibility -->
<a id="schemaconversationitem"></a>
<a id="schema_ConversationItem"></a>
<a id="tocSconversationitem"></a>
<a id="tocsconversationitem"></a>

```json
{
  "attachments": [
    {
      "creationTime": 0,
      "creatorId": "string",
      "deleteUrl": "string",
      "fileId": "string",
      "fileName": "string",
      "itemId": "string",
      "mimeType": "string",
      "modificationTime": 0,
      "size": 0,
      "url": "string"
    }
  ],
  "convId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "includeInUnreadCount": true,
  "itemId": "string",
  "modificationTime": 0,
  "rtc": {
    "ended": {
      "duration": 0,
      "maxNumberOfAttendees": 0,
      "pickFromParticipant": "string"
    },
    "missed": "string",
    "moved": {
      "conversationId": "string",
      "direction": "string"
    },
    "rtcParticipants": [
      {
        "displayName": "string",
        "fullyQualifiedNumber": "string",
        "phoneNumber": "string",
        "resolvedUser": null,
        "type": "string",
        "userId": "string"
      }
    ],
    "type": "string"
  },
  "system": {
    "affectedParticipants": [
      "string"
    ],
    "newTopic": "string",
    "oldTopic": "string",
    "type": "string"
  },
  "text": {
    "content": "string",
    "contentType": "string",
    "formMetaData": "string",
    "isWebhookMessage": true,
    "likedUserIds": [
      "string"
    ],
    "parentId": "string",
    "preview": {
      "imageURI": "string",
      "srcURL": "string",
      "title": "string",
      "type": "string"
    },
    "state": "string",
    "subject": "string"
  },
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[Attachment](#schemaattachment)]|false|none|Array of files attached to the item|
|convId|string|false|none|The ID of the conversation the item belongs to|
|creationTime|number(int64)|false|none|UTC timestamp when the item was created|
|creatorId|string|false|none|The ID of the user who created the conversation item|
|includeInUnreadCount|boolean|false|none|Indicates whether the item is included in the unread message count|
|itemId|string|false|none|The ID of the item|
|modificationTime|number(int64)|false|none|UTC timestamp when the conversation was modified|
|rtc|[RtcItem](#schemartcitem)|false|none|none|
|system|[SystemItem](#schemasystemitem)|false|none|none|
|text|[ConversationTextItem](#schemaconversationtextitem)|false|none|none|
|type|string|false|none|The type of the conversation item. It can be one of the following TEXT, SYSTEM or RTC|

<h2 id="tocS_ConversationParticipant">ConversationParticipant</h2>
<!-- backwards compatibility -->
<a id="schemaconversationparticipant"></a>
<a id="schema_ConversationParticipant"></a>
<a id="tocSconversationparticipant"></a>
<a id="tocsconversationparticipant"></a>

```json
{
  "displayName": "string",
  "firstName": "string",
  "isDeleted": true,
  "largeImageUri": "string",
  "lastName": "string",
  "smallImageUri": "string",
  "type": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The display name of the participant.|
|firstName|string|false|none|The first name of the participant.|
|isDeleted|boolean|false|none|If the participant is deleted.|
|largeImageUri|string|false|none|The large image uri of the participant.|
|lastName|string|false|none|The last name of the participant.|
|smallImageUri|string|false|none|The small image uri of the participant;|
|type|string|false|none|The type of the participant|
|userId|string|false|none|The unique user id of the participant.|

<h2 id="tocS_ConversationParticipantsList">ConversationParticipantsList</h2>
<!-- backwards compatibility -->
<a id="schemaconversationparticipantslist"></a>
<a id="schema_ConversationParticipantsList"></a>
<a id="tocSconversationparticipantslist"></a>
<a id="tocsconversationparticipantslist"></a>

```json
{
  "hasMore": true,
  "participantList": [
    {
      "displayName": "string",
      "firstName": "string",
      "isDeleted": true,
      "largeImageUri": "string",
      "lastName": "string",
      "smallImageUri": "string",
      "type": "string",
      "userId": "string"
    }
  ],
  "searchPointer": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasMore|boolean|false|none|are more results available, then start another search with finer query|
|participantList|[[ConversationParticipant](#schemaconversationparticipant)]|false|none|list of participants|
|searchPointer|string|false|none|pointer for stored search |

<h2 id="tocS_ConversationSearchResult">ConversationSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemaconversationsearchresult"></a>
<a id="schema_ConversationSearchResult"></a>
<a id="tocSconversationsearchresult"></a>
<a id="tocsconversationsearchresult"></a>

```json
{
  "matchingConversations": [
    {
      "convId": "string",
      "itemIds": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchingConversations|[[ConversationSearchResultItem](#schemaconversationsearchresultitem)]|false|none|A list of result items for conversations that match the search term.|

<h2 id="tocS_ConversationSearchResultItem">ConversationSearchResultItem</h2>
<!-- backwards compatibility -->
<a id="schemaconversationsearchresultitem"></a>
<a id="schema_ConversationSearchResultItem"></a>
<a id="tocSconversationsearchresultitem"></a>
<a id="tocsconversationsearchresultitem"></a>

```json
{
  "convId": "string",
  "itemIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|convId|string|false|none|The ID of the conversation to which the matching items belong.|
|itemIds|[string]|false|none|The conversation items which contain the search result. The list maybe empty in case a hit was found for the conversation related data like topic or participants.|

<h2 id="tocS_ConversationTextItem">ConversationTextItem</h2>
<!-- backwards compatibility -->
<a id="schemaconversationtextitem"></a>
<a id="schema_ConversationTextItem"></a>
<a id="tocSconversationtextitem"></a>
<a id="tocsconversationtextitem"></a>

```json
{
  "content": "string",
  "contentType": "string",
  "formMetaData": "string",
  "isWebhookMessage": true,
  "likedUserIds": [
    "string"
  ],
  "parentId": "string",
  "preview": {
    "imageURI": "string",
    "srcURL": "string",
    "title": "string",
    "type": "string"
  },
  "state": "string",
  "subject": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|The content of the text item|
|contentType|string|false|none|The type of the text item. It can be one of the following: RICH (with HTML content) or PLAIN (only text)|
|formMetaData|string|false|none|The meta data form|
|isWebhookMessage|boolean|false|none|Is this a webhook message?|
|likedUserIds|[string]|false|none|Array of IDs of the users who liked the item|
|parentId|string|false|none|The ID of the parent item of the text item. This field is optional and can be used for thread views|
|preview|[Preview](#schemapreview)|false|none|none|
|state|string|false|none|The state of the text item. It can be one of the following: CREATED (which denotes that it was not modified since its creation), EDITED (which denotes that the creator of this item modified the item) or DELETED (which denotes that the item itself exists but its content was removed)|
|subject|string|false|none|TThe subject of the text item. This field is optional and maybe filled when creating the text item|

<h2 id="tocS_ConversationsPage">ConversationsPage</h2>
<!-- backwards compatibility -->
<a id="schemaconversationspage"></a>
<a id="schema_ConversationsPage"></a>
<a id="tocSconversationspage"></a>
<a id="tocsconversationspage"></a>

```json
{
  "conversationList": [
    {
      "avatar": "string",
      "avatarLarge": "string",
      "convId": "string",
      "creationTime": 0,
      "creatorId": "string",
      "creatorTenantId": "string",
      "description": "string",
      "isGuestAccessDisabled": true,
      "isModerated": true,
      "modificationTime": 0,
      "participants": [
        "string"
      ],
      "topic": "string",
      "topicPlaceholder": "string",
      "type": "string"
    }
  ],
  "hasMore": null,
  "nextPagePointer": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversationList|[[Conversation](#schemaconversation)]|false|none|List of conversations|
|hasMore|object|false|none|Has more pages of conversations|
|nextPagePointer|string|false|none|Pointer to the next set page of conversations|

<h2 id="tocS_DirectoryResult">DirectoryResult</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryresult"></a>
<a id="schema_DirectoryResult"></a>
<a id="tocSdirectoryresult"></a>
<a id="tocsdirectoryresult"></a>

```json
{
  "hasMore": true,
  "searchPointer": "string",
  "spaces": [
    {
      "accessModeType": "string",
      "creationTime": 0,
      "creatorId": "string",
      "defaultRole": "string",
      "description": "string",
      "largePictureBase64": "string",
      "largePictureContentType": "string",
      "largePictureId": "string",
      "lastContentCreationTime": 0,
      "lastContentCreatorId": "string",
      "modificationTime": 0,
      "name": "string",
      "numberOfExternalParticipants": 0,
      "numberOfParticipants": 0,
      "numberOfPinnedTopics": 0,
      "numberOfReplies": 0,
      "numberOfTopics": 0,
      "ownerId": "string",
      "smallPictureBase64": "string",
      "smallPictureContentType": "string",
      "smallPictureId": "string",
      "spaceId": "string",
      "status": "string",
      "tags": [
        "string"
      ],
      "tenantId": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasMore|boolean|false|none|are more results available, than start another search|
|searchPointer|string|false|none|pointer for stored search |
|spaces|[[Space](#schemaspace)]|false|none|list of spaces|

<h2 id="tocS_FlaggedItem">FlaggedItem</h2>
<!-- backwards compatibility -->
<a id="schemaflaggeditem"></a>
<a id="schema_FlaggedItem"></a>
<a id="tocSflaggeditem"></a>
<a id="tocsflaggeditem"></a>

```json
{
  "item": {
    "Status": "string",
    "attachments": [
      {
        "creationTime": 0,
        "creatorId": "string",
        "fileId": "string",
        "fileName": "string",
        "inlineUsage": true,
        "itemId": "string",
        "layout": "string",
        "mimeType": "string",
        "modificationTime": 0,
        "size": 0,
        "spaceId": "string",
        "thumbnailId": "string"
      }
    ],
    "complex": true,
    "content": "string",
    "creationTime": 0,
    "creatorId": "string",
    "deletedBy": "string",
    "externalAttachments": [
      {
        "attachment": {
          "creationTime": 0,
          "creatorId": "string",
          "fileId": "string",
          "fileName": "string",
          "inlineUsage": true,
          "itemId": "string",
          "layout": "string",
          "mimeType": "string",
          "modificationTime": 0,
          "size": 0,
          "spaceId": "string",
          "thumbnailId": "string"
        },
        "downloadLocation": "string",
        "previewLocation": "string",
        "shareLinkToken": "string",
        "type": "string"
      }
    ],
    "formMetaData": "string",
    "itemId": "string",
    "mentionedUsers": [
      "string"
    ],
    "modificationTime": 0,
    "numberOfLikes": 0,
    "previews": [
      {
        "description": "string",
        "html": "string",
        "imageURI": "string",
        "provider": "string",
        "srcURL": "string",
        "title": "string",
        "type": "string"
      }
    ],
    "sharedItems": [
      {
        "containerId": "string",
        "containerName": "string",
        "containerType": "string",
        "creationTime": 0,
        "creatorId": "string",
        "itemId": "string",
        "parentTopicId": "string",
        "subType": "string"
      }
    ],
    "spaceId": "string",
    "tenantId": "string"
  },
  "parentItem": {
    "Status": "string",
    "attachments": [
      {
        "creationTime": 0,
        "creatorId": "string",
        "fileId": "string",
        "fileName": "string",
        "inlineUsage": true,
        "itemId": "string",
        "layout": "string",
        "mimeType": "string",
        "modificationTime": 0,
        "size": 0,
        "spaceId": "string",
        "thumbnailId": "string"
      }
    ],
    "complex": true,
    "content": "string",
    "creationTime": 0,
    "creatorId": "string",
    "deletedBy": "string",
    "externalAttachments": [
      {
        "attachment": {
          "creationTime": 0,
          "creatorId": "string",
          "fileId": "string",
          "fileName": "string",
          "inlineUsage": true,
          "itemId": "string",
          "layout": "string",
          "mimeType": "string",
          "modificationTime": 0,
          "size": 0,
          "spaceId": "string",
          "thumbnailId": "string"
        },
        "downloadLocation": "string",
        "previewLocation": "string",
        "shareLinkToken": "string",
        "type": "string"
      }
    ],
    "formMetaData": "string",
    "itemId": "string",
    "mentionedUsers": [
      "string"
    ],
    "modificationTime": 0,
    "numberOfLikes": 0,
    "previews": [
      {
        "description": "string",
        "html": "string",
        "imageURI": "string",
        "provider": "string",
        "srcURL": "string",
        "title": "string",
        "type": "string"
      }
    ],
    "sharedItems": [
      {
        "containerId": "string",
        "containerName": "string",
        "containerType": "string",
        "creationTime": 0,
        "creatorId": "string",
        "itemId": "string",
        "parentTopicId": "string",
        "subType": "string"
      }
    ],
    "spaceId": "string",
    "tenantId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|[SpaceItem](#schemaspaceitem)|false|none|none|
|parentItem|[SpaceItem](#schemaspaceitem)|false|none|none|

<h2 id="tocS_FlaggedItemsResult">FlaggedItemsResult</h2>
<!-- backwards compatibility -->
<a id="schemaflaggeditemsresult"></a>
<a id="schema_FlaggedItemsResult"></a>
<a id="tocSflaggeditemsresult"></a>
<a id="tocsflaggeditemsresult"></a>

```json
{
  "flaggedItems": [
    {
      "item": {
        "Status": "string",
        "attachments": [
          {
            "creationTime": 0,
            "creatorId": "string",
            "fileId": "string",
            "fileName": "string",
            "inlineUsage": true,
            "itemId": "string",
            "layout": "string",
            "mimeType": "string",
            "modificationTime": 0,
            "size": 0,
            "spaceId": "string",
            "thumbnailId": "string"
          }
        ],
        "complex": true,
        "content": "string",
        "creationTime": 0,
        "creatorId": "string",
        "deletedBy": "string",
        "externalAttachments": [
          {
            "attachment": {
              "creationTime": 0,
              "creatorId": "string",
              "fileId": "string",
              "fileName": "string",
              "inlineUsage": true,
              "itemId": "string",
              "layout": "string",
              "mimeType": "string",
              "modificationTime": 0,
              "size": 0,
              "spaceId": "string",
              "thumbnailId": "string"
            },
            "downloadLocation": "string",
            "previewLocation": "string",
            "shareLinkToken": "string",
            "type": "string"
          }
        ],
        "formMetaData": "string",
        "itemId": "string",
        "mentionedUsers": [
          "string"
        ],
        "modificationTime": 0,
        "numberOfLikes": 0,
        "previews": [
          {
            "description": "string",
            "html": "string",
            "imageURI": "string",
            "provider": "string",
            "srcURL": "string",
            "title": "string",
            "type": "string"
          }
        ],
        "sharedItems": [
          {
            "containerId": "string",
            "containerName": "string",
            "containerType": "string",
            "creationTime": 0,
            "creatorId": "string",
            "itemId": "string",
            "parentTopicId": "string",
            "subType": "string"
          }
        ],
        "spaceId": "string",
        "tenantId": "string"
      },
      "parentItem": {
        "Status": "string",
        "attachments": [
          {
            "creationTime": 0,
            "creatorId": "string",
            "fileId": "string",
            "fileName": "string",
            "inlineUsage": true,
            "itemId": "string",
            "layout": "string",
            "mimeType": "string",
            "modificationTime": 0,
            "size": 0,
            "spaceId": "string",
            "thumbnailId": "string"
          }
        ],
        "complex": true,
        "content": "string",
        "creationTime": 0,
        "creatorId": "string",
        "deletedBy": "string",
        "externalAttachments": [
          {
            "attachment": {
              "creationTime": 0,
              "creatorId": "string",
              "fileId": "string",
              "fileName": "string",
              "inlineUsage": true,
              "itemId": "string",
              "layout": "string",
              "mimeType": "string",
              "modificationTime": 0,
              "size": 0,
              "spaceId": "string",
              "thumbnailId": "string"
            },
            "downloadLocation": "string",
            "previewLocation": "string",
            "shareLinkToken": "string",
            "type": "string"
          }
        ],
        "formMetaData": "string",
        "itemId": "string",
        "mentionedUsers": [
          "string"
        ],
        "modificationTime": 0,
        "numberOfLikes": 0,
        "previews": [
          {
            "description": "string",
            "html": "string",
            "imageURI": "string",
            "provider": "string",
            "srcURL": "string",
            "title": "string",
            "type": "string"
          }
        ],
        "sharedItems": [
          {
            "containerId": "string",
            "containerName": "string",
            "containerType": "string",
            "creationTime": 0,
            "creatorId": "string",
            "itemId": "string",
            "parentTopicId": "string",
            "subType": "string"
          }
        ],
        "spaceId": "string",
        "tenantId": "string"
      }
    }
  ],
  "hasMore": true,
  "searchPointer": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flaggedItems|[[FlaggedItem](#schemaflaggeditem)]|false|none|A list of flagged items|
|hasMore|boolean|false|none|More results available (true-use searchpointer for next search/false)|
|searchPointer|string|false|none|The searchpointer|

<h2 id="tocS_GetSpacesResult">GetSpacesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetspacesresult"></a>
<a id="schema_GetSpacesResult"></a>
<a id="tocSgetspacesresult"></a>
<a id="tocsgetspacesresult"></a>

```json
{}
```

<h2 id="tocS_IncomingWebhook">IncomingWebhook</h2>
<!-- backwards compatibility -->
<a id="schemaincomingwebhook"></a>
<a id="schema_IncomingWebhook"></a>
<a id="tocSincomingwebhook"></a>
<a id="tocsincomingwebhook"></a>

```json
{
  "conversationId": "string",
  "creationTime": 0,
  "creatorId": "string",
  "description": "string",
  "modificationTime": 0,
  "name": "string",
  "status": "string",
  "tenantId": "string",
  "url": "string",
  "userId": "string",
  "webhookId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversationId|string|false|none|The conversation where the posts go to|
|creationTime|number(int64)|false|none|Milliseconds since 1.1.1900 when the hook was created|
|creatorId|string|false|none|Th e user who created the webhook|
|description|string|false|none|A short plain text to describe the webhook|
|modificationTime|number(int64)|false|none|Milliseconds since 1.1.1900 when the hook was modified|
|name|string|false|none|A name to identify the webhook|
|status|string|false|none|Status may be ENABLED or DISABLED. A disabled hook cannot be used|
|tenantId|string|false|none|The tenant where the conversation and users belong to|
|url|string|false|none|The url where the webhokk can be used|
|userId|string|false|none|The user who will occur as author of the posts|
|webhookId|string|false|none|Unique id of the webhook|

<h2 id="tocS_IncomingWebhookSlackMessage">IncomingWebhookSlackMessage</h2>
<!-- backwards compatibility -->
<a id="schemaincomingwebhookslackmessage"></a>
<a id="schema_IncomingWebhookSlackMessage"></a>
<a id="tocSincomingwebhookslackmessage"></a>
<a id="tocsincomingwebhookslackmessage"></a>

```json
{
  "fileURL": "string",
  "filename": "string",
  "markdown": true,
  "subject": "string",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileURL|string|false|none|missing documentation|
|filename|string|false|none|missing documentation|
|markdown|boolean|false|none|missing documentation|
|subject|string|false|none|missing documentation|
|text|string|false|none|The text which will occur in the conversation. May contain formats like *bold* or _italic_|

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "labelId": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelId|string|false|none|The unique ID of the label|
|value|string|false|none|The clear text value|

<h2 id="tocS_LabelIds">LabelIds</h2>
<!-- backwards compatibility -->
<a id="schemalabelids"></a>
<a id="schema_LabelIds"></a>
<a id="tocSlabelids"></a>
<a id="tocslabelids"></a>

```json
{
  "labelIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelIds|[string]|false|none|A list of label ids.|

<h2 id="tocS_Participant">Participant</h2>
<!-- backwards compatibility -->
<a id="schemaparticipant"></a>
<a id="schema_Participant"></a>
<a id="tocSparticipant"></a>
<a id="tocsparticipant"></a>

```json
{
  "creationTime": 0,
  "labelIds": [
    "string"
  ],
  "lastContentCreationTime": 0,
  "lastReadTimestamp": 0,
  "modificationTime": 0,
  "numberOfReplies": 0,
  "numberOfTopics": 0,
  "role": "string",
  "spaceId": "string",
  "state": "string",
  "tenantId": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|number(int64)|false|none|Time when the participant was added to the space|
|labelIds|[string]|false|none|The list of label IDs of all the labels assigned to the space.|
|lastContentCreationTime|number(int64)|false|none|Time stamp when user last created content in the space.|
|lastReadTimestamp|number(int64)|false|none|Last time stamp when the user read content in this space.|
|modificationTime|number(int64)|false|none|Time when the participant was changed last.|
|numberOfReplies|number(int32)|false|none|Number of replies in the space created by this participant.|
|numberOfTopics|number(int32)|false|none|Number of topics in the space created by this participant.|
|role|string|false|none|The name of the role of the participant.|
|spaceId|string|false|none|The unique ID of the space to which the participant.|
|state|string|false|none|The name of the state of the participant;|
|tenantId|string|false|none|The unique tenant id of the participant.|
|userId|string|false|none|The unique user id of the participant.|

<h2 id="tocS_ParticipantAddResult">ParticipantAddResult</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantaddresult"></a>
<a id="schema_ParticipantAddResult"></a>
<a id="tocSparticipantaddresult"></a>
<a id="tocsparticipantaddresult"></a>

```json
{}
```

<h2 id="tocS_ParticipantSearchResult">ParticipantSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantsearchresult"></a>
<a id="schema_ParticipantSearchResult"></a>
<a id="tocSparticipantsearchresult"></a>
<a id="tocsparticipantsearchresult"></a>

```json
{
  "creationTime": 0,
  "firstName": "string",
  "lastName": "string",
  "modificationTime": 0,
  "numberOfReplies": 0,
  "numberOfTopics": 0,
  "role": "string",
  "smallImageUri": "string",
  "state": "string",
  "tenantId": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|number(int64)|false|none|Time when the participant was added to the space|
|firstName|string|false|none|The first name of the participant|
|lastName|string|false|none|The last name of the participant|
|modificationTime|number(int64)|false|none|Time when the participant was changed last.|
|numberOfReplies|number(int32)|false|none|Number of replies in the space created by this participant.|
|numberOfTopics|number(int32)|false|none|Number of topics in the space created by this participant.|
|role|string|false|none|The name of the role of the participant|
|smallImageUri|string|false|none|The uri of the small picture of the participant|
|state|string|false|none|The name of the state of the participant|
|tenantId|string|false|none|the tenant id of the participant|
|userId|string|false|none|The id of the participant|

<h2 id="tocS_ParticipantSearchResultLarge">ParticipantSearchResultLarge</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantsearchresultlarge"></a>
<a id="schema_ParticipantSearchResultLarge"></a>
<a id="tocSparticipantsearchresultlarge"></a>
<a id="tocsparticipantsearchresultlarge"></a>

```json
{
  "creationTime": 0,
  "department": "string",
  "firstName": "string",
  "isMember": true,
  "jobDescription": "string",
  "lastContentCreationTime": 0,
  "lastName": "string",
  "modificationTime": 0,
  "numberOfReplies": 0,
  "numberOfTopics": 0,
  "reason": "string",
  "role": "string",
  "smallImageUri": "string",
  "spaceId": "string",
  "state": "string",
  "tenantId": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|number(int64)|false|none|Time when the participant was added to the space|
|department|string|false|none|The department of the participant|
|firstName|string|false|none|The first name of the participant|
|isMember|boolean|false|none|Is the participant a member of the space|
|jobDescription|string|false|none|The job description of the participant|
|lastContentCreationTime|number(int64)|false|none|The last time the participant created content.|
|lastName|string|false|none|The last name of the participant|
|modificationTime|number(int64)|false|none|Time when the participant was changed last.|
|numberOfReplies|number(int32)|false|none|The number of replies|
|numberOfTopics|number(int32)|false|none|The number of topics|
|reason|string|false|none|The reason of it all (42)|
|role|string|false|none|The name of the role of the participant|
|smallImageUri|string|false|none|The uri of the small picture of the participant|
|spaceId|string|false|none|The id of the space|
|state|string|false|none|The name of the state |
|tenantId|string|false|none|the tenant id of the participant|
|userId|string|false|none|The id of the participant|

<h2 id="tocS_ParticipantSpaceWrapper">ParticipantSpaceWrapper</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantspacewrapper"></a>
<a id="schema_ParticipantSpaceWrapper"></a>
<a id="tocSparticipantspacewrapper"></a>
<a id="tocsparticipantspacewrapper"></a>

```json
{}
```

<h2 id="tocS_ParticipantsImportDataResult">ParticipantsImportDataResult</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantsimportdataresult"></a>
<a id="schema_ParticipantsImportDataResult"></a>
<a id="tocSparticipantsimportdataresult"></a>
<a id="tocsparticipantsimportdataresult"></a>

```json
{
  "actualNumberOfImportedParticipants": 0,
  "estimatedImportDuration": 0,
  "importEndDate": 0,
  "importFileId": "string",
  "importFileName": "string",
  "importProgress": 0,
  "importStartDate": 0,
  "importStatus": "string",
  "plannedNumberOfImportedParticipants": 0,
  "resultFileId": "string",
  "resultFileName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actualNumberOfImportedParticipants|number(int32)|false|none|Actual number of imported participants|
|estimatedImportDuration|number(int64)|false|none|Estimated import duration|
|importEndDate|number(int64)|false|none|Import end date|
|importFileId|string|false|none|The file id of the import|
|importFileName|string|false|none|The name of the import file|
|importProgress|number(int32)|false|none|The progress of the import|
|importStartDate|number(int64)|false|none|Import start date|
|importStatus|string|false|none|The status of the import|
|plannedNumberOfImportedParticipants|number(int32)|false|none|Planned number of imported participants|
|resultFileId|string|false|none|The file id of the result file|
|resultFileName|string|false|none|The name of the result file|

<h2 id="tocS_ParticipantsLike">ParticipantsLike</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantslike"></a>
<a id="schema_ParticipantsLike"></a>
<a id="tocSparticipantslike"></a>
<a id="tocsparticipantslike"></a>

```json
{
  "firstName": "string",
  "largeImageUri": "string",
  "lastName": "string",
  "smallImageUri": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|The first name of the user|
|largeImageUri|string|false|none|The large image uri of the user|
|lastName|string|false|none|The last name of the user|
|smallImageUri|string|false|none|The small image uri of the user|
|userId|string|false|none|The id of the user|

<h2 id="tocS_ParticipantsLikeResult">ParticipantsLikeResult</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantslikeresult"></a>
<a id="schema_ParticipantsLikeResult"></a>
<a id="tocSparticipantslikeresult"></a>
<a id="tocsparticipantslikeresult"></a>

```json
{
  "hasMore": true,
  "participants": [
    {
      "firstName": "string",
      "largeImageUri": "string",
      "lastName": "string",
      "smallImageUri": "string",
      "userId": "string"
    }
  ],
  "searchPointer": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasMore|boolean|false|none|More results available (true-use searchpointer for next search/false)|
|participants|[[ParticipantsLike](#schemaparticipantslike)]|false|none|A list of participants who like the topic|
|searchPointer|string|false|none|The searchpointer|

<h2 id="tocS_ParticipantsSearchResult">ParticipantsSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantssearchresult"></a>
<a id="schema_ParticipantsSearchResult"></a>
<a id="tocSparticipantssearchresult"></a>
<a id="tocsparticipantssearchresult"></a>

```json
{
  "hasMore": true,
  "participants": [
    {
      "creationTime": 0,
      "firstName": "string",
      "lastName": "string",
      "modificationTime": 0,
      "numberOfReplies": 0,
      "numberOfTopics": 0,
      "role": "string",
      "smallImageUri": "string",
      "state": "string",
      "tenantId": "string",
      "userId": "string"
    }
  ],
  "searchPointer": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasMore|boolean|false|none|are more results available, than start another search|
|participants|[[ParticipantSearchResult](#schemaparticipantsearchresult)]|false|none|list of participants|
|searchPointer|string|false|none|pointer for stored search |

<h2 id="tocS_ParticipantsSearchResultLarge">ParticipantsSearchResultLarge</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantssearchresultlarge"></a>
<a id="schema_ParticipantsSearchResultLarge"></a>
<a id="tocSparticipantssearchresultlarge"></a>
<a id="tocsparticipantssearchresultlarge"></a>

```json
{
  "hasMore": true,
  "participants": [
    {
      "creationTime": 0,
      "department": "string",
      "firstName": "string",
      "isMember": true,
      "jobDescription": "string",
      "lastContentCreationTime": 0,
      "lastName": "string",
      "modificationTime": 0,
      "numberOfReplies": 0,
      "numberOfTopics": 0,
      "reason": "string",
      "role": "string",
      "smallImageUri": "string",
      "spaceId": "string",
      "state": "string",
      "tenantId": "string",
      "userId": "string"
    }
  ],
  "searchPointer": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasMore|boolean|false|none|are more results available, then start another search with finer query|
|participants|[[ParticipantSearchResultLarge](#schemaparticipantsearchresultlarge)]|false|none|list of participants|
|searchPointer|string|false|none|pointer for stored search |

<h2 id="tocS_PinnedTopic">PinnedTopic</h2>
<!-- backwards compatibility -->
<a id="schemapinnedtopic"></a>
<a id="schema_PinnedTopic"></a>
<a id="tocSpinnedtopic"></a>
<a id="tocspinnedtopic"></a>

```json
{
  "conversationId": "string",
  "conversationItemId": "string",
  "pinnedTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversationId|string|false|none|"ID of the conversation"|
|conversationItemId|string|false|none|"ID of the pinned topic"|
|pinnedTime|number(int64)|false|none|"The exact moment the Pinning was happening"|

<h2 id="tocS_Presence">Presence</h2>
<!-- backwards compatibility -->
<a id="schemapresence"></a>
<a id="schema_Presence"></a>
<a id="tocSpresence"></a>
<a id="tocspresence"></a>

```json
{
  "dndUntil": 0,
  "isOptedOut": true,
  "latitude": 0,
  "locationText": "string",
  "longitude": 0,
  "mobile": true,
  "poor": true,
  "state": "string",
  "statusMessage": "string",
  "timeZoneOffset": 0,
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dndUntil|number(int64)|false|none|Timestamp until the DND state of the user is active|
|isOptedOut|boolean|false|none|Indicates whether the user has opted out of their presence|
|latitude|number(float)|false|none|The latitude of the geo location of the user|
|locationText|string|false|none|The geo location of the user in clear text|
|longitude|number(float)|false|none|The longitude of the geo location of the user|
|mobile|boolean|false|none|Identifies whether the presence state is based on the state information of a mobile device or not|
|poor|boolean|false|none|n/a|
|state|string|false|none|The presence state of the user. It can be one of the following: AVAILABLE, OFFLINE, AWAY, BUSY, or DND (Do-Not-Disturb)|
|statusMessage|string|false|none|A free formed status message of the user|
|timeZoneOffset|number(int32)|false|none|The timezone offset of the user compared to UTC|
|userId|string|false|none|The ID of the user|

<h2 id="tocS_Preview">Preview</h2>
<!-- backwards compatibility -->
<a id="schemapreview"></a>
<a id="schema_Preview"></a>
<a id="tocSpreview"></a>
<a id="tocspreview"></a>

```json
{
  "imageURI": "string",
  "srcURL": "string",
  "title": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageURI|string|false|none|n/a|
|srcURL|string|false|none|n/a|
|title|string|false|none|n/a|
|type|string|false|none|n/a|

<h2 id="tocS_RtcEnded">RtcEnded</h2>
<!-- backwards compatibility -->
<a id="schemartcended"></a>
<a id="schema_RtcEnded"></a>
<a id="tocSrtcended"></a>
<a id="tocsrtcended"></a>

```json
{
  "duration": 0,
  "maxNumberOfAttendees": 0,
  "pickFromParticipant": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|number(int64)|false|none|The duration of the call.|
|maxNumberOfAttendees|number(int32)|false|none|The maximum number of attendees during a call.|
|pickFromParticipant|string|false|none|UserID of the pick from participant.|

<h2 id="tocS_RtcItem">RtcItem</h2>
<!-- backwards compatibility -->
<a id="schemartcitem"></a>
<a id="schema_RtcItem"></a>
<a id="tocSrtcitem"></a>
<a id="tocsrtcitem"></a>

```json
{
  "ended": {
    "duration": 0,
    "maxNumberOfAttendees": 0,
    "pickFromParticipant": "string"
  },
  "missed": "string",
  "moved": {
    "conversationId": "string",
    "direction": "string"
  },
  "rtcParticipants": [
    {
      "displayName": "string",
      "fullyQualifiedNumber": "string",
      "phoneNumber": "string",
      "resolvedUser": null,
      "type": "string",
      "userId": "string"
    }
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ended|[RtcEnded](#schemartcended)|false|none|none|
|missed|string|false|none|Indicates a missed call.|
|moved|[RtcMoved](#schemartcmoved)|false|none|none|
|rtcParticipants|[[RtcParticipant](#schemartcparticipant)]|false|none|Participants of the call.|
|type|string|false|none|The type of the RTC item.|

<h2 id="tocS_RtcMoved">RtcMoved</h2>
<!-- backwards compatibility -->
<a id="schemartcmoved"></a>
<a id="schema_RtcMoved"></a>
<a id="tocSrtcmoved"></a>
<a id="tocsrtcmoved"></a>

```json
{
  "conversationId": "string",
  "direction": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversationId|string|false|none|ID of the conversation moved from or to.|
|direction|string|false|none|Moved from or to conversation.|

<h2 id="tocS_RtcParticipant">RtcParticipant</h2>
<!-- backwards compatibility -->
<a id="schemartcparticipant"></a>
<a id="schema_RtcParticipant"></a>
<a id="tocSrtcparticipant"></a>
<a id="tocsrtcparticipant"></a>

```json
{
  "displayName": "string",
  "fullyQualifiedNumber": "string",
  "phoneNumber": "string",
  "resolvedUser": null,
  "type": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The display name of the participant.|
|fullyQualifiedNumber|string|false|none|missing documentation|
|phoneNumber|string|false|none|missing documentation|
|resolvedUser|object|false|none|missing documentation|
|type|string|false|none|The RTC type of the participant.|
|userId|string|false|none|The ID of the participant.|

<h2 id="tocS_SharedItem">SharedItem</h2>
<!-- backwards compatibility -->
<a id="schemashareditem"></a>
<a id="schema_SharedItem"></a>
<a id="tocSshareditem"></a>
<a id="tocsshareditem"></a>

```json
{
  "containerId": "string",
  "containerName": "string",
  "containerType": "string",
  "creationTime": 0,
  "creatorId": "string",
  "itemId": "string",
  "parentTopicId": "string",
  "subType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerId|string|false|none|The Id of the container|
|containerName|string|false|none|Name of the container|
|containerType|string|false|none|Type of the container|
|creationTime|number(int64)|false|none|The time this Item has been created|
|creatorId|string|false|none|The Id of the creator|
|itemId|string|false|none|Id of the item|
|parentTopicId|string|false|none|The Id of the parent topic|
|subType|string|false|none|The subtype|

<h2 id="tocS_Space">Space</h2>
<!-- backwards compatibility -->
<a id="schemaspace"></a>
<a id="schema_Space"></a>
<a id="tocSspace"></a>
<a id="tocsspace"></a>

```json
{
  "accessModeType": "string",
  "creationTime": 0,
  "creatorId": "string",
  "defaultRole": "string",
  "description": "string",
  "largePictureBase64": "string",
  "largePictureContentType": "string",
  "largePictureId": "string",
  "lastContentCreationTime": 0,
  "lastContentCreatorId": "string",
  "modificationTime": 0,
  "name": "string",
  "numberOfExternalParticipants": 0,
  "numberOfParticipants": 0,
  "numberOfPinnedTopics": 0,
  "numberOfReplies": 0,
  "numberOfTopics": 0,
  "ownerId": "string",
  "smallPictureBase64": "string",
  "smallPictureContentType": "string",
  "smallPictureId": "string",
  "spaceId": "string",
  "status": "string",
  "tags": [
    "string"
  ],
  "tenantId": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessModeType|string|false|none|The name of the access mode type of the space.|
|creationTime|number(int64)|false|none|The space creation time.|
|creatorId|string|false|none|The ID of the space creator.|
|defaultRole|string|false|none|The name of the default role of a new participant.|
|description|string|false|none|The space description.|
|largePictureBase64|string|false|none|Base64 encoded image that can be set during the creation and the update of a space.|
|largePictureContentType|string|false|none|The content type of the image.|
|largePictureId|string|false|none|The file id of the large version of the picture.|
|lastContentCreationTime|number(int64)|false|none|Time stamp when the last content (topic / reply) was created within this space.|
|lastContentCreatorId|string|false|none|User ID of the user which created the last content.|
|modificationTime|number(int64)|false|none|The space modification time.|
|name|string|false|none|The unique space name.|
|numberOfExternalParticipants|number(int32)|false|none|Number of external participants in the space.|
|numberOfParticipants|number(int32)|false|none|Number of participants in the space.|
|numberOfPinnedTopics|number(int32)|false|none|Number of pinned topics in the space.|
|numberOfReplies|number(int32)|false|none|Number of replies in the space.|
|numberOfTopics|number(int32)|false|none|Number of topics in the space.|
|ownerId|string|false|none|The ID of the space owner.|
|smallPictureBase64|string|false|none|Base64 encoded image that can be set during the creation and the update of a space.|
|smallPictureContentType|string|false|none|The content type of the image.|
|smallPictureId|string|false|none|The file id of the small version of the picture.|
|spaceId|string|false|none|The unique space ID generated by the backend during the creation of the space.|
|status|string|false|none|The name of the status of the space.|
|tags|[string]|false|none|The list of space tags.|
|tenantId|string|false|none|The ID of the space tenant.|
|type|string|false|none|The name of the space type.|

<h2 id="tocS_SpaceAttachment">SpaceAttachment</h2>
<!-- backwards compatibility -->
<a id="schemaspaceattachment"></a>
<a id="schema_SpaceAttachment"></a>
<a id="tocSspaceattachment"></a>
<a id="tocsspaceattachment"></a>

```json
{
  "creationTime": 0,
  "creatorId": "string",
  "fileId": "string",
  "fileName": "string",
  "inlineUsage": true,
  "itemId": "string",
  "layout": "string",
  "mimeType": "string",
  "modificationTime": 0,
  "size": 0,
  "spaceId": "string",
  "thumbnailId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|number(int64)|false|none|time this item has been created|
|creatorId|string|false|none|the id of the creator|
|fileId|string|false|none|the id of the field|
|fileName|string|false|none|name of the file|
|inlineUsage|boolean|false|none|is inline usage allowed|
|itemId|string|false|none|id of the item|
|layout|string|false|none|layout|
|mimeType|string|false|none|the media type|
|modificationTime|number(int64)|false|none|the time this item has been ben modified|
|size|number(int64)|false|none|size of this file|
|spaceId|string|false|none|id of the space|
|thumbnailId|string|false|none|the id of the tumbnail|

<h2 id="tocS_SpaceExternalAttachment">SpaceExternalAttachment</h2>
<!-- backwards compatibility -->
<a id="schemaspaceexternalattachment"></a>
<a id="schema_SpaceExternalAttachment"></a>
<a id="tocSspaceexternalattachment"></a>
<a id="tocsspaceexternalattachment"></a>

```json
{
  "attachment": {
    "creationTime": 0,
    "creatorId": "string",
    "fileId": "string",
    "fileName": "string",
    "inlineUsage": true,
    "itemId": "string",
    "layout": "string",
    "mimeType": "string",
    "modificationTime": 0,
    "size": 0,
    "spaceId": "string",
    "thumbnailId": "string"
  },
  "downloadLocation": "string",
  "previewLocation": "string",
  "shareLinkToken": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachment|[SpaceAttachment](#schemaspaceattachment)|false|none|none|
|downloadLocation|string|false|none|the location of the download|
|previewLocation|string|false|none|the location of the preview|
|shareLinkToken|string|false|none|The share link token|
|type|string|false|none|the type|

<h2 id="tocS_SpaceItem">SpaceItem</h2>
<!-- backwards compatibility -->
<a id="schemaspaceitem"></a>
<a id="schema_SpaceItem"></a>
<a id="tocSspaceitem"></a>
<a id="tocsspaceitem"></a>

```json
{
  "Status": "string",
  "attachments": [
    {
      "creationTime": 0,
      "creatorId": "string",
      "fileId": "string",
      "fileName": "string",
      "inlineUsage": true,
      "itemId": "string",
      "layout": "string",
      "mimeType": "string",
      "modificationTime": 0,
      "size": 0,
      "spaceId": "string",
      "thumbnailId": "string"
    }
  ],
  "complex": true,
  "content": "string",
  "creationTime": 0,
  "creatorId": "string",
  "deletedBy": "string",
  "externalAttachments": [
    {
      "attachment": {
        "creationTime": 0,
        "creatorId": "string",
        "fileId": "string",
        "fileName": "string",
        "inlineUsage": true,
        "itemId": "string",
        "layout": "string",
        "mimeType": "string",
        "modificationTime": 0,
        "size": 0,
        "spaceId": "string",
        "thumbnailId": "string"
      },
      "downloadLocation": "string",
      "previewLocation": "string",
      "shareLinkToken": "string",
      "type": "string"
    }
  ],
  "formMetaData": "string",
  "itemId": "string",
  "mentionedUsers": [
    "string"
  ],
  "modificationTime": 0,
  "numberOfLikes": 0,
  "previews": [
    {
      "description": "string",
      "html": "string",
      "imageURI": "string",
      "provider": "string",
      "srcURL": "string",
      "title": "string",
      "type": "string"
    }
  ],
  "sharedItems": [
    {
      "containerId": "string",
      "containerName": "string",
      "containerType": "string",
      "creationTime": 0,
      "creatorId": "string",
      "itemId": "string",
      "parentTopicId": "string",
      "subType": "string"
    }
  ],
  "spaceId": "string",
  "tenantId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|string|false|none|The Status of this item|
|attachments|[[SpaceAttachment](#schemaspaceattachment)]|false|none|The list of attachments|
|complex|boolean|false|none|Is this item complex|
|content|string|false|none|The content of this item|
|creationTime|number(int64)|false|none|The time this item got created|
|creatorId|string|false|none|The Id of the creator|
|deletedBy|string|false|none|Incase this item got deleted, the id of the deletor|
|externalAttachments|[[SpaceExternalAttachment](#schemaspaceexternalattachment)]|false|none|A list of external attachments|
|formMetaData|string|false|none|Incase there is FormMetaData|
|itemId|string|false|none|the Id of this item|
|mentionedUsers|[string]|false|none|A list of userIds who have been mentioned in this item|
|modificationTime|number(int64)|false|none|the time this item got modified|
|numberOfLikes|number(int32)|false|none|The number of likes|
|previews|[[SpaceItemPreview](#schemaspaceitempreview)]|false|none|A list of previews|
|sharedItems|[[SharedItem](#schemashareditem)]|false|none|missing documentation|
|spaceId|string|false|none|the Id of the space containing this item|
|tenantId|string|false|none|the Id of the tenant|

<h2 id="tocS_SpaceItemPreview">SpaceItemPreview</h2>
<!-- backwards compatibility -->
<a id="schemaspaceitempreview"></a>
<a id="schema_SpaceItemPreview"></a>
<a id="tocSspaceitempreview"></a>
<a id="tocsspaceitempreview"></a>

```json
{
  "description": "string",
  "html": "string",
  "imageURI": "string",
  "provider": "string",
  "srcURL": "string",
  "title": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of this preview|
|html|string|false|none|Html code|
|imageURI|string|false|none|The URI of the image|
|provider|string|false|none|the provider|
|srcURL|string|false|none|The URL of the source|
|title|string|false|none|The title of this preview|
|type|string|false|none|The type of this preview|

<h2 id="tocS_SpacePinnedTopic">SpacePinnedTopic</h2>
<!-- backwards compatibility -->
<a id="schemaspacepinnedtopic"></a>
<a id="schema_SpacePinnedTopic"></a>
<a id="tocSspacepinnedtopic"></a>
<a id="tocsspacepinnedtopic"></a>

```json
{
  "position": 0,
  "subject": "string",
  "topicId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|number(int32)|false|none|The position of a pinned topic|
|subject|string|false|none|The subject of a pinned topic|
|topicId|string|false|none|The id of a pinned topic|

<h2 id="tocS_SpaceReply">SpaceReply</h2>
<!-- backwards compatibility -->
<a id="schemaspacereply"></a>
<a id="schema_SpaceReply"></a>
<a id="tocSspacereply"></a>
<a id="tocsspacereply"></a>

```json
{
  "parentTopicId": "string",
  "spaceItem": {
    "Status": "string",
    "attachments": [
      {
        "creationTime": 0,
        "creatorId": "string",
        "fileId": "string",
        "fileName": "string",
        "inlineUsage": true,
        "itemId": "string",
        "layout": "string",
        "mimeType": "string",
        "modificationTime": 0,
        "size": 0,
        "spaceId": "string",
        "thumbnailId": "string"
      }
    ],
    "complex": true,
    "content": "string",
    "creationTime": 0,
    "creatorId": "string",
    "deletedBy": "string",
    "externalAttachments": [
      {
        "attachment": {
          "creationTime": 0,
          "creatorId": "string",
          "fileId": "string",
          "fileName": "string",
          "inlineUsage": true,
          "itemId": "string",
          "layout": "string",
          "mimeType": "string",
          "modificationTime": 0,
          "size": 0,
          "spaceId": "string",
          "thumbnailId": "string"
        },
        "downloadLocation": "string",
        "previewLocation": "string",
        "shareLinkToken": "string",
        "type": "string"
      }
    ],
    "formMetaData": "string",
    "itemId": "string",
    "mentionedUsers": [
      "string"
    ],
    "modificationTime": 0,
    "numberOfLikes": 0,
    "previews": [
      {
        "description": "string",
        "html": "string",
        "imageURI": "string",
        "provider": "string",
        "srcURL": "string",
        "title": "string",
        "type": "string"
      }
    ],
    "sharedItems": [
      {
        "containerId": "string",
        "containerName": "string",
        "containerType": "string",
        "creationTime": 0,
        "creatorId": "string",
        "itemId": "string",
        "parentTopicId": "string",
        "subType": "string"
      }
    ],
    "spaceId": "string",
    "tenantId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parentTopicId|string|false|none|The Id of the parent topic|
|spaceItem|[SpaceItem](#schemaspaceitem)|false|none|none|

<h2 id="tocS_SpaceSearchResultDetailed">SpaceSearchResultDetailed</h2>
<!-- backwards compatibility -->
<a id="schemaspacesearchresultdetailed"></a>
<a id="schema_SpaceSearchResultDetailed"></a>
<a id="tocSspacesearchresultdetailed"></a>
<a id="tocsspacesearchresultdetailed"></a>

```json
{
  "fileIds": [
    "string"
  ],
  "itemIds": [
    "string"
  ],
  "spaceId": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileIds|[string]|false|none|=The list of file ids|
|itemIds|[string]|false|none|=The list of items ids|
|spaceId|string|false|none|The id of the space|
|status|string|false|none|The status of the search (NORESULT, ERROR, TIMEOUT, MORERESULT)|

<h2 id="tocS_SpaceSearchResultDetailedBack">SpaceSearchResultDetailedBack</h2>
<!-- backwards compatibility -->
<a id="schemaspacesearchresultdetailedback"></a>
<a id="schema_SpaceSearchResultDetailedBack"></a>
<a id="tocSspacesearchresultdetailedback"></a>
<a id="tocsspacesearchresultdetailedback"></a>

```json
{
  "resList": [
    {
      "fileIds": [
        "string"
      ],
      "itemIds": [
        "string"
      ],
      "spaceId": "string",
      "status": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resList|[[SpaceSearchResultDetailed](#schemaspacesearchresultdetailed)]|false|none|A list of v2restspacesearchresultdetailedback containing spaceId, item ids and file ids|

<h2 id="tocS_SpaceTopic">SpaceTopic</h2>
<!-- backwards compatibility -->
<a id="schemaspacetopic"></a>
<a id="schema_SpaceTopic"></a>
<a id="tocSspacetopic"></a>
<a id="tocsspacetopic"></a>

```json
{
  "lastContentCreationTime": 0,
  "lastContentCreatorId": "string",
  "numberOfReplies": 0,
  "pinned": true,
  "spaceItem": {
    "Status": "string",
    "attachments": [
      {
        "creationTime": 0,
        "creatorId": "string",
        "fileId": "string",
        "fileName": "string",
        "inlineUsage": true,
        "itemId": "string",
        "layout": "string",
        "mimeType": "string",
        "modificationTime": 0,
        "size": 0,
        "spaceId": "string",
        "thumbnailId": "string"
      }
    ],
    "complex": true,
    "content": "string",
    "creationTime": 0,
    "creatorId": "string",
    "deletedBy": "string",
    "externalAttachments": [
      {
        "attachment": {
          "creationTime": 0,
          "creatorId": "string",
          "fileId": "string",
          "fileName": "string",
          "inlineUsage": true,
          "itemId": "string",
          "layout": "string",
          "mimeType": "string",
          "modificationTime": 0,
          "size": 0,
          "spaceId": "string",
          "thumbnailId": "string"
        },
        "downloadLocation": "string",
        "previewLocation": "string",
        "shareLinkToken": "string",
        "type": "string"
      }
    ],
    "formMetaData": "string",
    "itemId": "string",
    "mentionedUsers": [
      "string"
    ],
    "modificationTime": 0,
    "numberOfLikes": 0,
    "previews": [
      {
        "description": "string",
        "html": "string",
        "imageURI": "string",
        "provider": "string",
        "srcURL": "string",
        "title": "string",
        "type": "string"
      }
    ],
    "sharedItems": [
      {
        "containerId": "string",
        "containerName": "string",
        "containerType": "string",
        "creationTime": 0,
        "creatorId": "string",
        "itemId": "string",
        "parentTopicId": "string",
        "subType": "string"
      }
    ],
    "spaceId": "string",
    "tenantId": "string"
  },
  "subject": "string",
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastContentCreationTime|number(int64)|false|none|The last time new content was created|
|lastContentCreatorId|string|false|none|The Id of the last content creator|
|numberOfReplies|number(int32)|false|none|The number of replies this topic has|
|pinned|boolean|false|none|Is this topic pinned|
|spaceItem|[SpaceItem](#schemaspaceitem)|false|none|none|
|subject|string|false|none|The subject of this topic|
|tags|[string]|false|none|The tags |

<h2 id="tocS_SpaceTopicWithReplies">SpaceTopicWithReplies</h2>
<!-- backwards compatibility -->
<a id="schemaspacetopicwithreplies"></a>
<a id="schema_SpaceTopicWithReplies"></a>
<a id="tocSspacetopicwithreplies"></a>
<a id="tocsspacetopicwithreplies"></a>

```json
{
  "replies": [
    {
      "parentTopicId": "string",
      "spaceItem": {
        "Status": "string",
        "attachments": [
          {
            "creationTime": 0,
            "creatorId": "string",
            "fileId": "string",
            "fileName": "string",
            "inlineUsage": true,
            "itemId": "string",
            "layout": "string",
            "mimeType": "string",
            "modificationTime": 0,
            "size": 0,
            "spaceId": "string",
            "thumbnailId": "string"
          }
        ],
        "complex": true,
        "content": "string",
        "creationTime": 0,
        "creatorId": "string",
        "deletedBy": "string",
        "externalAttachments": [
          {
            "attachment": {
              "creationTime": 0,
              "creatorId": "string",
              "fileId": "string",
              "fileName": "string",
              "inlineUsage": true,
              "itemId": "string",
              "layout": "string",
              "mimeType": "string",
              "modificationTime": 0,
              "size": 0,
              "spaceId": "string",
              "thumbnailId": "string"
            },
            "downloadLocation": "string",
            "previewLocation": "string",
            "shareLinkToken": "string",
            "type": "string"
          }
        ],
        "formMetaData": "string",
        "itemId": "string",
        "mentionedUsers": [
          "string"
        ],
        "modificationTime": 0,
        "numberOfLikes": 0,
        "previews": [
          {
            "description": "string",
            "html": "string",
            "imageURI": "string",
            "provider": "string",
            "srcURL": "string",
            "title": "string",
            "type": "string"
          }
        ],
        "sharedItems": [
          {
            "containerId": "string",
            "containerName": "string",
            "containerType": "string",
            "creationTime": 0,
            "creatorId": "string",
            "itemId": "string",
            "parentTopicId": "string",
            "subType": "string"
          }
        ],
        "spaceId": "string",
        "tenantId": "string"
      }
    }
  ],
  "topic": {
    "lastContentCreationTime": 0,
    "lastContentCreatorId": "string",
    "numberOfReplies": 0,
    "pinned": true,
    "spaceItem": {
      "Status": "string",
      "attachments": [
        {
          "creationTime": 0,
          "creatorId": "string",
          "fileId": "string",
          "fileName": "string",
          "inlineUsage": true,
          "itemId": "string",
          "layout": "string",
          "mimeType": "string",
          "modificationTime": 0,
          "size": 0,
          "spaceId": "string",
          "thumbnailId": "string"
        }
      ],
      "complex": true,
      "content": "string",
      "creationTime": 0,
      "creatorId": "string",
      "deletedBy": "string",
      "externalAttachments": [
        {
          "attachment": {
            "creationTime": 0,
            "creatorId": "string",
            "fileId": "string",
            "fileName": "string",
            "inlineUsage": true,
            "itemId": "string",
            "layout": "string",
            "mimeType": "string",
            "modificationTime": 0,
            "size": 0,
            "spaceId": "string",
            "thumbnailId": "string"
          },
          "downloadLocation": "string",
          "previewLocation": "string",
          "shareLinkToken": "string",
          "type": "string"
        }
      ],
      "formMetaData": "string",
      "itemId": "string",
      "mentionedUsers": [
        "string"
      ],
      "modificationTime": 0,
      "numberOfLikes": 0,
      "previews": [
        {
          "description": "string",
          "html": "string",
          "imageURI": "string",
          "provider": "string",
          "srcURL": "string",
          "title": "string",
          "type": "string"
        }
      ],
      "sharedItems": [
        {
          "containerId": "string",
          "containerName": "string",
          "containerType": "string",
          "creationTime": 0,
          "creatorId": "string",
          "itemId": "string",
          "parentTopicId": "string",
          "subType": "string"
        }
      ],
      "spaceId": "string",
      "tenantId": "string"
    },
    "subject": "string",
    "tags": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replies|[[SpaceReply](#schemaspacereply)]|false|none|A List holding the replies for a topic|
|topic|[SpaceTopic](#schemaspacetopic)|false|none|none|

<h2 id="tocS_SpacesSearchTerm">SpacesSearchTerm</h2>
<!-- backwards compatibility -->
<a id="schemaspacessearchterm"></a>
<a id="schema_SpacesSearchTerm"></a>
<a id="tocSspacessearchterm"></a>
<a id="tocsspacessearchterm"></a>

```json
{
  "endTime": null,
  "scope": "string",
  "searchTerm": "string",
  "startTime": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|object|false|none|The end time|
|scope|string|false|none|The scope of the search|
|searchTerm|string|false|none|The search term|
|startTime|object|false|none|The start time|

<h2 id="tocS_SpacesSearchTermResult">SpacesSearchTermResult</h2>
<!-- backwards compatibility -->
<a id="schemaspacessearchtermresult"></a>
<a id="schema_SpacesSearchTermResult"></a>
<a id="tocSspacessearchtermresult"></a>
<a id="tocsspacessearchtermresult"></a>

```json
{
  "resList": [
    {
      "endTime": null,
      "scope": "string",
      "searchTerm": "string",
      "startTime": null
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resList|[[SpacesSearchTerm](#schemaspacessearchterm)]|false|none|A list of space search terms.|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
{
  "CASE_INSENSITIVE_ORDER": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CASE_INSENSITIVE_ORDER|object|false|none|none|

<h2 id="tocS_SupportInfo">SupportInfo</h2>
<!-- backwards compatibility -->
<a id="schemasupportinfo"></a>
<a id="schema_SupportInfo"></a>
<a id="tocSsupportinfo"></a>
<a id="tocssupportinfo"></a>

```json
{
  "supportEmailAddress": "string",
  "supportType": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|supportEmailAddress|string|false|none|The email address of the support|
|supportType|object|false|none|The type of support (a number)|

<h2 id="tocS_SystemItem">SystemItem</h2>
<!-- backwards compatibility -->
<a id="schemasystemitem"></a>
<a id="schema_SystemItem"></a>
<a id="tocSsystemitem"></a>
<a id="tocssystemitem"></a>

```json
{
  "affectedParticipants": [
    "string"
  ],
  "newTopic": "string",
  "oldTopic": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|affectedParticipants|[string]|false|none|List off affected participants (user ID of the Circuit user) in case the item type PARTICIPANT_ADDED or PARTICIPANT_REMOVED|
|newTopic|string|false|none|Filled with the new topic of a conversation if the type of the item is CONVERSATION_RENAMED.|
|oldTopic|string|false|none|Filled with the previous topic of a conversation if the type of the item is CONVERSATION_RENAMED.|
|type|string|false|none|The type of the system item|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "avatar": "string",
  "avatarLarge": "string",
  "company": "string",
  "department": "string",
  "displayName": "string",
  "emailAddress": "string",
  "emailAddresses": [
    {
      "address": "string",
      "type": "string"
    }
  ],
  "firstName": "string",
  "jobTitle": "string",
  "lastName": "string",
  "locale": "string",
  "phoneNumber": "string",
  "phoneNumbers": [
    {
      "phoneNumber": "string",
      "type": "string"
    }
  ],
  "primaryTenantId": "string",
  "secondaryEmailAddress": "string",
  "secondaryTenantId": "string",
  "userId": "string",
  "userState": "string",
  "userType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|string|false|none|The URL of the small avatar picture.|
|avatarLarge|string|false|none|The URL of the large avatar picture.|
|company|string|false|none|The name of the user's company|
|department|string|false|none|missing documentation|
|displayName|string|false|none|The user's display name|
|emailAddress|string|false|none|The primary email address of the user|
|emailAddresses|[[UserEmailAddress](#schemauseremailaddress)]|false|none|additional email addresses of the user|
|firstName|string|false|none|The first name of the user|
|jobTitle|string|false|none|The job title of the user|
|lastName|string|false|none|The last name of the user|
|locale|string|false|none|The locale of the user. (E.g. en-US, de-DE)|
|phoneNumber|string|false|none|provisioned phone number of the user|
|phoneNumbers|[[UserPhoneNumber](#schemauserphonenumber)]|false|none|additional phone numbers of the user|
|primaryTenantId|string|false|none|The primary tenant id|
|secondaryEmailAddress|string|false|none|The secondary email address|
|secondaryTenantId|string|false|none|The secondary tenant id|
|userId|string|false|none|The ID of the user|
|userState|string|false|none|The state of the user, e.g. deleted|
|userType|string|false|none|the type of the user|

<h2 id="tocS_UserEmailAddress">UserEmailAddress</h2>
<!-- backwards compatibility -->
<a id="schemauseremailaddress"></a>
<a id="schema_UserEmailAddress"></a>
<a id="tocSuseremailaddress"></a>
<a id="tocsuseremailaddress"></a>

```json
{
  "address": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|the email address|
|type|string|false|none|the type of the email address|

<h2 id="tocS_UserPhoneNumber">UserPhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemauserphonenumber"></a>
<a id="schema_UserPhoneNumber"></a>
<a id="tocSuserphonenumber"></a>
<a id="tocsuserphonenumber"></a>

```json
{
  "phoneNumber": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phoneNumber|string|false|none|the phone number|
|type|string|false|none|the type of the phone number|

<h2 id="tocS_V2DistributedClientInfo">V2DistributedClientInfo</h2>
<!-- backwards compatibility -->
<a id="schemav2distributedclientinfo"></a>
<a id="schema_V2DistributedClientInfo"></a>
<a id="tocSv2distributedclientinfo"></a>
<a id="tocsv2distributedclientinfo"></a>

```json
{
  "clientId": "string",
  "clientVersion": "string",
  "deviceSubtype": "string",
  "deviceType": "string",
  "hardwareModel": "string",
  "homeNode": "string",
  "manufacturer": "string",
  "osVersion": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|none|The client id|
|clientVersion|string|false|none|The version of the client|
|deviceSubtype|string|false|none|The device sub type|
|deviceType|string|false|none|The devicetype|
|hardwareModel|string|false|none|The hardware model|
|homeNode|string|false|none|The home node name|
|manufacturer|string|false|none|The manufacturer|
|osVersion|string|false|none|The version of the operating system|
|userId|string|false|none|The user id|

<h2 id="tocS_WebHook">WebHook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_WebHook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "creationTime": 0,
  "filter": [
    "string"
  ],
  "id": "string",
  "subscriptionIds": [
    "string"
  ],
  "type": "string",
  "url": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|number(int64)|false|none|The time when this WebHook was created. This does not necessary mean the time when an manifest file was created.|
|filter|[string]|false|none|An optional list of filter parameters for this webhook.|
|id|string|false|none|The unique identifier for this webhook. Can be used later to unregister the webhook.|
|subscriptionIds|[string]|false|none|The optional list of userids for which this webhook is subscribed, i.e. presence events for the user are forwarded to the WebHook callback URL.|
|type|string|false|none|The type of a WebHook. This can either be MANUAL or EXTENSION. While manual WebHooks are only temporary and for development only use, permanent ones (EXTENSION) will bemanaged by the system.|
|url|string|false|none|The callback URL of this webhook.|
|userId|string|false|none|The user ID for which this webhook is subscribed, i.e. events for this user are forwarded to the WebHook callback URL.|
