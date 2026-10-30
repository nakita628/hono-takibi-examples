<h1 id="conversations-inbox-messages">Conversations Inbox &amp; Messages v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|conversations.read||
|conversations.write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="conversations-inbox-messages-actors">Actors</h1>

## Batch read actors

<a id="opIdpost-/conversations/conversations/2026-09/actors/batch/read_/conversations/conversations/2026-09-beta/actors/batch/read"></a>

> Code samples

```bash
curl https://api.hubapi.com/conversations/conversations/2026-09/actors/batch/read \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /conversations/conversations/2026-09/actors/batch/read`

Retrieve information about multiple actors in a batch operation. This endpoint is useful for obtaining details on various actors in a single request, streamlining data retrieval processes.

> Body parameter

```json
null
```

<h3 id="batch-read-actors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|property|query|string|false|A string representing the specific property to be included in the response.|
|body|body|[BatchInputString](#schemabatchinputstring)|true|none|
|» inputs|body|[string]|true|An array of strings that are required for the batch operation. Each item in the array is a string.|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-read-actors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponsePublicActor](#schemabatchresponsepublicactor)|
|207|Multi-Status|multiple statuses|[BatchResponsePublicActorWithErrors](#schemabatchresponsepublicactorwitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.read )
</aside>

## Retrieve actor

<a id="opIdget-/conversations/conversations/2026-09/actors/{actorId}_/conversations/conversations/2026-09-beta/actors/{actorId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/conversations/2026-09/actors/{actorId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/conversations/2026-09/actors/{actorId}`

Retrieve information about a specific actor in the conversations system using their unique actor ID. This endpoint is useful for obtaining details about a particular actor, which could be an agent, bot, or other entity involved in conversations.

<h3 id="retrieve-actor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|actorId|path|string|true|The unique identifier of the actor to retrieve.|
|property|query|string|false|A string representing a specific property of the actor to include in the response.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-actor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicActor](#schemapublicactor)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.read )
</aside>

<h1 id="conversations-inbox-messages-channel-accounts">Channel accounts</h1>

## List channel accounts

<a id="opIdget-/conversations/conversations/2026-09/channel-accounts_/conversations/conversations/2026-09-beta/channel-accounts"></a>

> Code samples

```bash
curl https://api.hubapi.com/conversations/conversations/2026-09/channel-accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/conversations/2026-09/channel-accounts`

Retrieve a list of channel accounts associated with your HubSpot account. This endpoint allows you to filter results by channel ID, inbox ID, and other criteria. It's useful for managing and reviewing the channel accounts linked to your conversations.

<h3 id="list-channel-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|A cursor token for pagination. Use the value from the previous response's paging.next.after field.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|channelId|query|[integer(int32)]|false|A list of channel IDs to filter the results. Each ID should be an integer.|
|defaultPageLength|query|integer(int32)|false|The default number of results to display per page if not specified.|
|inboxId|query|[integer(int32)]|false|A list of inbox IDs to filter the results. Each ID should be an integer.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|sort|query|[string]|false|A list of fields to sort the results by.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-channel-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalPublicChannelAccount](#schemacollectionresponsewithtotalpublicchannelaccount)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.read )
</aside>

## Retrieve Channel Account

<a id="opIdget-/conversations/conversations/2026-09/channel-accounts/{channelAccountId}_/conversations/conversations/2026-09-beta/channel-accounts/{channelAccountId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/conversations/2026-09/channel-accounts/{channelAccountId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/conversations/2026-09/channel-accounts/{channelAccountId}`

Retrieve details of a specific channel account in your HubSpot account using the unique channelAccountId. This endpoint is useful for accessing information about a particular channel account, including its archived status.

<h3 id="retrieve-channel-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelAccountId|path|integer(int64)|true|The unique identifier of the channel account to retrieve.|
|archived|query|boolean|false|Whether to return only results that have been archived. Defaults to false.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-channel-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicChannelAccount](#schemapublicchannelaccount)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.read )
</aside>

<h1 id="conversations-inbox-messages-channels">Channels</h1>

## List channels

<a id="opIdget-/conversations/conversations/2026-09/channels_/conversations/conversations/2026-09-beta/channels"></a>

> Code samples

```bash
curl https://api.hubapi.com/conversations/conversations/2026-09/channels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/conversations/2026-09/channels`

Retrieve a list of channels in your HubSpot account. This endpoint supports pagination and sorting, allowing you to manage large sets of data effectively. Use this endpoint to get an overview of all available channels.

<h3 id="list-channels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|defaultPageLength|query|integer(int32)|false|An integer specifying the default number of results to display per page.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|sort|query|[string]|false|An array of strings specifying the sort order of the results.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-channels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalPublicChannel](#schemacollectionresponsewithtotalpublicchannel)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.read )
</aside>

## Retrieve channel

<a id="opIdget-/conversations/conversations/2026-09/channels/{channelId}_/conversations/conversations/2026-09-beta/channels/{channelId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/conversations/2026-09/channels/{channelId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/conversations/2026-09/channels/{channelId}`

Retrieve details of a specific channel in your HubSpot account using the channel's unique identifier. This endpoint is useful for accessing channel-specific information, which can be used for managing or analyzing communication channels.

<h3 id="retrieve-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|integer(int32)|true|The unique identifier of the channel to retrieve. It is an integer value.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicChannel](#schemapublicchannel)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.read )
</aside>

<h1 id="conversations-inbox-messages-inboxes">Inboxes</h1>

## List Inboxes

<a id="opIdget-/conversations/conversations/2026-09/inboxes_/conversations/conversations/2026-09-beta/inboxes"></a>

> Code samples

```bash
curl https://api.hubapi.com/conversations/conversations/2026-09/inboxes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/conversations/2026-09/inboxes`

Retrieve a list of inboxes in your HubSpot account. This endpoint allows you to paginate through results and sort them as needed. It can also filter to include only archived inboxes.

<h3 id="list-inboxes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|defaultPageLength|query|integer(int32)|false|The default number of results to display per page.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|sort|query|[string]|false|A list of fields to sort the results by.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-inboxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalPublicInbox](#schemacollectionresponsewithtotalpublicinbox)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.read )
</aside>

## Retrieve inbox

<a id="opIdget-/conversations/conversations/2026-09/inboxes/{inboxId}_/conversations/conversations/2026-09-beta/inboxes/{inboxId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/conversations/2026-09/inboxes/{inboxId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/conversations/2026-09/inboxes/{inboxId}`

Retrieve details of a specific inbox within your HubSpot account using its unique identifier. This endpoint allows you to access information about the inbox, including whether it is archived. It is useful for managing and organizing conversations within different inboxes.

<h3 id="retrieve-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inboxId|path|integer(int32)|true|The unique identifier of the inbox to retrieve.|
|archived|query|boolean|false|Whether to return only results that have been archived. Defaults to false.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicInbox](#schemapublicinbox)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.read )
</aside>

<h1 id="conversations-inbox-messages-messages">Messages</h1>

## Retrieve messages

<a id="opIdget-/conversations/conversations/2026-09/threads/{threadId}/messages_/conversations/conversations/2026-09-beta/threads/{threadId}/messages"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/conversations/2026-09/threads/{threadId}/messages' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/conversations/2026-09/threads/{threadId}/messages`

Retrieve messages from a specific conversation thread in your HubSpot account. This endpoint allows you to access all messages associated with a given thread, which can be useful for reviewing conversation history or analyzing communication patterns.

<h3 id="retrieve-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threadId|path|integer(int64)|true|The unique identifier of the conversation thread to retrieve messages from.|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|property|query|string|false|A specific property to include in the response.|
|sort|query|[string]|false|An array of strings to specify the sorting order of the results.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicMessageForwardPaging](#schemacollectionresponsepublicmessageforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.read )
</aside>

## Create message

<a id="opIdpost-/conversations/conversations/2026-09/threads/{threadId}/messages_/conversations/conversations/2026-09-beta/threads/{threadId}/messages"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/conversations/2026-09/threads/{threadId}/messages' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /conversations/conversations/2026-09/threads/{threadId}/messages`

Create a new message within a specific thread in your HubSpot account. This endpoint allows you to add messages to existing conversation threads, which can be useful for continuing discussions or providing additional information. Ensure that the threadId is correctly specified to target the appropriate thread.

> Body parameter

```json
null
```

<h3 id="create-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threadId|path|integer(int64)|true|The unique identifier of the thread to which the message will be added.|
|body|body|[PublicMessageEgg](#schemapublicmessageegg)|true|none|
|» *oneOf*|body|[PublicConversationsMessageEgg](#schemapublicconversationsmessageegg)|false|none|
|» *oneOf*|body|[PublicCommentEgg](#schemapubliccommentegg)|false|none|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PublicMessage](#schemapublicmessage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.write )
</aside>

## Retrieve message

<a id="opIdget-/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}_/conversations/conversations/2026-09-beta/threads/{threadId}/messages/{messageId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}`

Retrieve a specific message from a conversation thread in your HubSpot account. This endpoint allows you to access the details of a message identified by its messageId within a thread identified by threadId. You can specify certain properties to include in the response.

<h3 id="retrieve-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|The unique identifier of the message to retrieve.|
|threadId|path|integer(int64)|true|The unique identifier of the conversation thread containing the message.|
|property|query|string|false|A string specifying which properties of the message to include in the response.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicMessage](#schemapublicmessage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.read )
</aside>

## Retrieve original content

<a id="opIdget-/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content_/conversations/conversations/2026-09-beta/threads/{threadId}/messages/{messageId}/original-content"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content`

Retrieve the original content of a specific message within a thread. This endpoint is useful for accessing the unaltered text or rich text content of a message, which can be important for auditing or reviewing the initial communication in a conversation.

<h3 id="retrieve-original-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|The unique identifier of the message whose original content is being retrieved.|
|threadId|path|integer(int64)|true|The unique identifier of the thread containing the message.|
|property|query|string|false|A string that specifies additional properties to include in the response.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-original-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicMessageContent](#schemapublicmessagecontent)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.read )
</aside>

<h1 id="conversations-inbox-messages-threads">Threads</h1>

## List threads

<a id="opIdget-/conversations/conversations/2026-09/threads_/conversations/conversations/2026-09-beta/threads"></a>

> Code samples

```bash
curl https://api.hubapi.com/conversations/conversations/2026-09/threads \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/conversations/2026-09/threads`

Retrieve a list of conversation threads from the specified inboxes. This endpoint allows filtering by associated contact or ticket, thread status, and other parameters. It supports pagination and sorting to help manage large sets of data effectively.

<h3 id="list-threads-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|associatedContactId|query|integer(int64)|false|The unique identifier of the associated contact to filter threads.|
|associatedTicketId|query|integer(int64)|false|The unique identifier of the associated ticket to filter threads.|
|association|query|[string]|false|A list of associations to filter the threads by. Valid values include 'TICKET'.|
|inboxId|query|[integer(int32)]|false|A list of inbox IDs to filter the threads by.|
|latestMessageTimestampAfter|query|string(date-time)|false|Filter threads to only include those with a latest message timestamp after this date-time.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|property|query|string|false|A specific property to include in the response.|
|sort|query|[string]|false|A list of fields to sort the results by.|
|threadStatus|query|string|false|The status of the thread to filter by. Valid values are 'OPEN' and 'CLOSED'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|association|TICKET|
|threadStatus|CLOSED|
|threadStatus|OPEN|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-threads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicThreadForwardPaging](#schemacollectionresponsepublicthreadforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.read )
</aside>

## Retrieve thread

<a id="opIdget-/conversations/conversations/2026-09/threads/{threadId}_/conversations/conversations/2026-09-beta/threads/{threadId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/conversations/2026-09/threads/{threadId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/conversations/2026-09/threads/{threadId}`

Retrieve details of a specific conversation thread using its unique identifier. This endpoint allows you to access information about the thread, including its properties and associations. It is useful for fetching thread details for further processing or display.

<h3 id="retrieve-thread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threadId|path|integer(int64)|true|The unique identifier of the thread to retrieve.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|association|query|[string]|false|A list of associations to include in the response. Valid values include 'TICKET'.|
|property|query|string|false|A specific property to include in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|association|TICKET|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-thread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicThread](#schemapublicthread)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.read )
</aside>

## Delete thread

<a id="opIddelete-/conversations/conversations/2026-09/threads/{threadId}_/conversations/conversations/2026-09-beta/threads/{threadId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/conversations/2026-09/threads/{threadId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /conversations/conversations/2026-09/threads/{threadId}`

Delete a specific conversation thread in your HubSpot account. This operation removes the thread identified by the threadId from the system. Use this endpoint to manage and clean up conversation threads that are no longer needed.

<h3 id="delete-thread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threadId|path|integer(int64)|true|The unique identifier of the thread to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-thread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.write )
</aside>

## Update thread

<a id="opIdpatch-/conversations/conversations/2026-09/threads/{threadId}_/conversations/conversations/2026-09-beta/threads/{threadId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/conversations/2026-09/threads/{threadId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /conversations/conversations/2026-09/threads/{threadId}`

Update the details of a specific conversation thread in your HubSpot account. This endpoint allows you to modify the status or other attributes of the thread identified by the threadId. It is useful for managing the state of conversation threads, such as marking them as open or closed.

> Body parameter

```json
null
```

<h3 id="update-thread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threadId|path|integer(int64)|true|The unique identifier of the conversation thread to update.|
|archived|query|boolean|false|Whether to return only results that have been archived. This is a boolean value.|
|body|body|[PublicThreadUpdateRequest](#schemapublicthreadupdaterequest)|true|none|
|» archived|body|boolean|false|A boolean indicating whether the thread is archived.|
|» status|body|string|false|The current status of the thread. Valid values include 'OPEN' and 'CLOSED'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|CLOSED|
|» status|OPEN|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-thread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicThread](#schemapublicthread)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.write )
</aside>

## Update assignee

<a id="opIdput-/conversations/conversations/2026-09/threads/{threadId}/assignee_/conversations/conversations/2026-09-beta/threads/{threadId}/assignee"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/conversations/2026-09/threads/{threadId}/assignee' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /conversations/conversations/2026-09/threads/{threadId}/assignee`

Assign a specific actor to a conversation thread in your HubSpot account. This endpoint allows you to update the assignee for a given thread, which can be useful for managing workload distribution among team members.

> Body parameter

```json
null
```

<h3 id="update-assignee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threadId|path|integer(int64)|true|The unique identifier of the thread for which the assignee is being updated.|
|body|body|[PublicThreadAssignRequest](#schemapublicthreadassignrequest)|true|none|
|» actorId|body|string|true|The unique identifier of the actor to be assigned to the thread. It is a required string property.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-assignee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicThread](#schemapublicthread)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.write )
</aside>

## Delete assignee

<a id="opIddelete-/conversations/conversations/2026-09/threads/{threadId}/assignee_/conversations/conversations/2026-09-beta/threads/{threadId}/assignee"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/conversations/2026-09/threads/{threadId}/assignee' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /conversations/conversations/2026-09/threads/{threadId}/assignee`

Remove the assignee from a specific conversation thread in your HubSpot account. This operation is useful when you want to unassign a thread from a user, making it available for reassignment or indicating that it no longer requires a specific assignee.

<h3 id="delete-assignee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threadId|path|integer(int64)|true|The unique identifier of the thread from which the assignee will be removed.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-assignee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.write )
</aside>

# Schemas

<h2 id="tocS_AgentActor">AgentActor</h2>
<!-- backwards compatibility -->
<a id="schemaagentactor"></a>
<a id="schema_AgentActor"></a>
<a id="tocSagentactor"></a>
<a id="tocsagentactor"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|string|false|none|A string representing the URL to the avatar image of the agent.|
|email|string|false|none|A string containing the email address of the agent.|
|id|string|true|none|A string that uniquely identifies the agent actor.|
|name|string|false|none|A string representing the name of the agent.|
|type|string|true|none|A string representing the type of actor, which is always 'AGENT' for this component.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|AGENT|

<h2 id="tocS_BatchInputString">BatchInputString</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputstring"></a>
<a id="schema_BatchInputString"></a>
<a id="tocSbatchinputstring"></a>
<a id="tocsbatchinputstring"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[string]|true|none|An array of strings that are required for the batch operation. Each item in the array is a string.|

<h2 id="tocS_BatchResponsePublicActor">BatchResponsePublicActor</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepublicactor"></a>
<a id="schema_BatchResponsePublicActor"></a>
<a id="tocSbatchresponsepublicactor"></a>
<a id="tocsbatchresponsepublicactor"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|links|object|false|none|A map of link names to their corresponding URIs, which may provide additional information or resources related to the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[PublicActor](#schemapublicactor)]|true|none|An array of PublicActor objects representing the results of the batch operation.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponsePublicActorWithErrors">BatchResponsePublicActorWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepublicactorwitherrors"></a>
<a id="schema_BatchResponsePublicActorWithErrors"></a>
<a id="tocSbatchresponsepublicactorwitherrors"></a>
<a id="tocsbatchresponsepublicactorwitherrors"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of StandardError objects detailing any errors encountered during the batch operation.|
|links|object|false|none|An object containing key-value pairs of link names to their associated URIs.|
|numErrors|integer(int32)|false|none|The number of errors encountered during the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[PublicActor](#schemapublicactor)]|true|none|An array of PublicActor objects representing the results of the batch operation.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BotActor">BotActor</h2>
<!-- backwards compatibility -->
<a id="schemabotactor"></a>
<a id="schema_BotActor"></a>
<a id="tocSbotactor"></a>
<a id="tocsbotactor"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|string|false|none|A string representing the URL of the avatar image for the bot actor.|
|id|string|true|none|A string representing the unique identifier for the bot actor.|
|name|string|false|none|A string representing the name of the bot actor.|
|type|string|true|none|A string indicating the type of actor, which is always 'BOT' for this component.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BOT|

<h2 id="tocS_CollectionResponsePublicMessageForwardPaging">CollectionResponsePublicMessageForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicmessageforwardpaging"></a>
<a id="schema_CollectionResponsePublicMessageForwardPaging"></a>
<a id="tocScollectionresponsepublicmessageforwardpaging"></a>
<a id="tocscollectionresponsepublicmessageforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[PublicConversationsMessage](#schemapublicconversationsmessage) \| [PublicComment](#schemapubliccomment) \| [PublicWelcomeMessage](#schemapublicwelcomemessage) \| [PublicAssignmentMessage](#schemapublicassignmentmessage) \| [PublicThreadStatusChange](#schemapublicthreadstatuschange) \| [PublicThreadInboxChange](#schemapublicthreadinboxchange)]|true|none|An array of public messages, which can include various types such as conversations messages, comments, welcome messages, assignment messages, thread status changes, and thread inbox changes.|

<h2 id="tocS_CollectionResponsePublicThreadForwardPaging">CollectionResponsePublicThreadForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicthreadforwardpaging"></a>
<a id="schema_CollectionResponsePublicThreadForwardPaging"></a>
<a id="tocScollectionresponsepublicthreadforwardpaging"></a>
<a id="tocscollectionresponsepublicthreadforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[PublicThread](#schemapublicthread)]|true|none|An array of PublicThread objects, representing the individual threads in the collection.|

<h2 id="tocS_CollectionResponseWithTotalPublicChannel">CollectionResponseWithTotalPublicChannel</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalpublicchannel"></a>
<a id="schema_CollectionResponseWithTotalPublicChannel"></a>
<a id="tocScollectionresponsewithtotalpublicchannel"></a>
<a id="tocscollectionresponsewithtotalpublicchannel"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[PublicChannel](#schemapublicchannel)]|true|none|An array containing the public channel objects. Each item in the array is a reference to a PublicChannel schema.|
|total|integer(int32)|true|none|The total number of public channels available. It is an integer value.|

<h2 id="tocS_CollectionResponseWithTotalPublicChannelAccount">CollectionResponseWithTotalPublicChannelAccount</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalpublicchannelaccount"></a>
<a id="schema_CollectionResponseWithTotalPublicChannelAccount"></a>
<a id="tocScollectionresponsewithtotalpublicchannelaccount"></a>
<a id="tocscollectionresponsewithtotalpublicchannelaccount"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[PublicChannelAccount](#schemapublicchannelaccount)]|true|none|An array of public channel account objects, each containing details about a specific channel account.|
|total|integer(int32)|true|none|The total number of public channel accounts available. It is an integer value.|

<h2 id="tocS_CollectionResponseWithTotalPublicInbox">CollectionResponseWithTotalPublicInbox</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalpublicinbox"></a>
<a id="schema_CollectionResponseWithTotalPublicInbox"></a>
<a id="tocScollectionresponsewithtotalpublicinbox"></a>
<a id="tocscollectionresponsewithtotalpublicinbox"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[PublicInbox](#schemapublicinbox)]|true|none|An array of public inbox objects, each representing a single inbox with its details.|
|total|integer(int32)|true|none|The total number of public inboxes available. It is an integer value.|

<h2 id="tocS_ContactAddress">ContactAddress</h2>
<!-- backwards compatibility -->
<a id="schemacontactaddress"></a>
<a id="schema_ContactAddress"></a>
<a id="tocScontactaddress"></a>
<a id="tocscontactaddress"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city where the contact is located. It is a string representing the city name.|
|country|string|false|none|The country where the contact is located. It is a string representing the country name.|
|countryCode|string|false|none|The code representing the country of the contact. It is a string, typically an ISO 3166-1 alpha-2 country code.|
|state|string|false|none|The state or region where the contact is located. It is a string representing the state or region name.|
|street|string|false|none|The street address of the contact. It is a string representing the street name and number.|
|type|string|false|none|The type of address, indicating whether it is a 'HOME' or 'WORK' address.|
|zip|string|false|none|The postal code for the contact's address. It is a string representing the ZIP or postal code.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|HOME|
|type|WORK|

<h2 id="tocS_ContactEmail">ContactEmail</h2>
<!-- backwards compatibility -->
<a id="schemacontactemail"></a>
<a id="schema_ContactEmail"></a>
<a id="tocScontactemail"></a>
<a id="tocscontactemail"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|The email address of the contact. This is a required field.|
|type|string|false|none|The type of email address, which can be either 'HOME' or 'WORK'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|HOME|
|type|WORK|

<h2 id="tocS_ContactName">ContactName</h2>
<!-- backwards compatibility -->
<a id="schemacontactname"></a>
<a id="schema_ContactName"></a>
<a id="tocScontactname"></a>
<a id="tocscontactname"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|A string representing the first name of the contact.|
|lastName|string|false|none|A string representing the last name of the contact.|
|middleName|string|false|none|An optional string representing the middle name of the contact.|
|prefix|string|false|none|An optional string representing the prefix of the contact's name, such as 'Mr.', 'Ms.', or 'Dr.'.|
|suffix|string|false|none|An optional string representing the suffix of the contact's name, such as 'Jr.', 'Sr.', or 'III'.|

<h2 id="tocS_ContactOrg">ContactOrg</h2>
<!-- backwards compatibility -->
<a id="schemacontactorg"></a>
<a id="schema_ContactOrg"></a>
<a id="tocScontactorg"></a>
<a id="tocscontactorg"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company|string|false|none|The name of the company the contact is associated with.|
|department|string|false|none|The department within the company where the contact works.|
|title|string|false|none|The professional title or position held by the contact within the company.|

<h2 id="tocS_ContactPhone">ContactPhone</h2>
<!-- backwards compatibility -->
<a id="schemacontactphone"></a>
<a id="schema_ContactPhone"></a>
<a id="tocScontactphone"></a>
<a id="tocscontactphone"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phone|string|true|none|The phone number associated with the contact. This is a required field.|
|type|string|false|none|The type of phone, which can be 'CELL', 'MAIN', 'HOME', or 'WORK'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CELL|
|type|HOME|
|type|MAIN|
|type|WORK|

<h2 id="tocS_ContactProfile">ContactProfile</h2>
<!-- backwards compatibility -->
<a id="schemacontactprofile"></a>
<a id="schema_ContactProfile"></a>
<a id="tocScontactprofile"></a>
<a id="tocscontactprofile"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[[ContactAddress](#schemacontactaddress)]|true|none|An array of addresses associated with the contact, where each address includes type (e.g., HOME, WORK), street, city, state, zip, country, and country code.|
|emails|[[ContactEmail](#schemacontactemail)]|true|none|An array of email addresses associated with the contact, where each email includes type (e.g., HOME, WORK) and the email address itself.|
|name|[ContactName](#schemacontactname)|false|none|none|
|org|[ContactOrg](#schemacontactorg)|false|none|none|
|phones|[[ContactPhone](#schemacontactphone)]|true|none|An array of phone numbers associated with the contact, where each phone number includes type (e.g., CELL, MAIN, HOME, WORK) and the phone number itself.|
|urls|[[ContactUrl](#schemacontacturl)]|true|none|An array of URLs associated with the contact, where each URL includes type (e.g., HOME, WORK) and the URL itself.|

<h2 id="tocS_ContactUrl">ContactUrl</h2>
<!-- backwards compatibility -->
<a id="schemacontacturl"></a>
<a id="schema_ContactUrl"></a>
<a id="tocScontacturl"></a>
<a id="tocscontacturl"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of URL, which can be either 'HOME' or 'WORK'.|
|url|string|true|none|The actual URL string associated with the contact.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|HOME|
|type|WORK|

<h2 id="tocS_EmailActor">EmailActor</h2>
<!-- backwards compatibility -->
<a id="schemaemailactor"></a>
<a id="schema_EmailActor"></a>
<a id="tocSemailactor"></a>
<a id="tocsemailactor"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|A string containing the email address associated with the actor.|
|id|string|true|none|A string that uniquely identifies the email actor.|
|type|string|true|none|A string representing the type of actor, which defaults to 'EMAIL'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|EMAIL|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category, represented as a string.|
|context|object|false|none|Context about the error condition, represented as an object with additional properties that are arrays of strings.|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets. It is a string in UUID format.|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|Further information about the error, represented as an array of ErrorDetail objects.|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps. It is an object with string properties.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. It is a string.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error. It is a string.|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail.|
|context|object|false|none|Context about the error condition, represented as an object with additional properties. Each property is an array of strings providing further context.|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human-readable message describing the error along with remediation steps where appropriate. This is a required field.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error.|

<h2 id="tocS_ForwardPaging">ForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemaforwardpaging"></a>
<a id="schema_ForwardPaging"></a>
<a id="tocSforwardpaging"></a>
<a id="tocsforwardpaging"></a>

```json
null
```

Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|

<h2 id="tocS_IntegratorActor">IntegratorActor</h2>
<!-- backwards compatibility -->
<a id="schemaintegratoractor"></a>
<a id="schema_IntegratorActor"></a>
<a id="tocSintegratoractor"></a>
<a id="tocsintegratoractor"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|string|false|none|A string containing the URL or identifier for the avatar image of the integrator actor.|
|id|string|true|none|A string that uniquely identifies the integrator actor.|
|name|string|true|none|A string representing the name of the integrator actor.|
|type|string|true|none|A string representing the type of actor, with the default value 'INTEGRATOR'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|INTEGRATOR|

<h2 id="tocS_LlmActor">LlmActor</h2>
<!-- backwards compatibility -->
<a id="schemallmactor"></a>
<a id="schema_LlmActor"></a>
<a id="tocSllmactor"></a>
<a id="tocsllmactor"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|string|false|none|A string representing the URL of the avatar image for the LLM actor.|
|id|string|true|none|A unique identifier for the LLM actor, represented as a string.|
|name|string|false|none|The name of the LLM actor, represented as a string.|
|type|string|true|none|A string indicating the type of actor, which is always 'LLM' for this component.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|LLM|

<h2 id="tocS_NextPage">NextPage</h2>
<!-- backwards compatibility -->
<a id="schemanextpage"></a>
<a id="schema_NextPage"></a>
<a id="tocSnextpage"></a>
<a id="tocsnextpage"></a>

```json
null
```

Specifies the paging information needed to retrieve the next set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string|true|none|A string token used to fetch the next set of results in a paginated response.|
|link|string|false|none|A string containing the URL link to the next page of results.|

<h2 id="tocS_Paging">Paging</h2>
<!-- backwards compatibility -->
<a id="schemapaging"></a>
<a id="schema_Paging"></a>
<a id="tocSpaging"></a>
<a id="tocspaging"></a>

```json
null
```

Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|
|prev|[PreviousPage](#schemapreviouspage)|false|none|specifies the paging information needed to retrieve the previous set of results in a paginated API response|

<h2 id="tocS_PreviousPage">PreviousPage</h2>
<!-- backwards compatibility -->
<a id="schemapreviouspage"></a>
<a id="schema_PreviousPage"></a>
<a id="tocSpreviouspage"></a>
<a id="tocspreviouspage"></a>

```json
null
```

specifies the paging information needed to retrieve the previous set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|before|string|true|none|A string token used to identify the position before the current page in the pagination sequence.|
|link|string|false|none|A string URL that links to the previous page of results.|

<h2 id="tocS_PublicActor">PublicActor</h2>
<!-- backwards compatibility -->
<a id="schemapublicactor"></a>
<a id="schema_PublicActor"></a>
<a id="tocSpublicactor"></a>
<a id="tocspublicactor"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AgentActor](#schemaagentactor)|false|none|none|
|*oneOf*|[BotActor](#schemabotactor)|false|none|none|
|*oneOf*|[IntegratorActor](#schemaintegratoractor)|false|none|none|
|*oneOf*|[SystemActor](#schemasystemactor)|false|none|none|
|*oneOf*|[VisitorActor](#schemavisitoractor)|false|none|none|
|*oneOf*|[EmailActor](#schemaemailactor)|false|none|none|
|*oneOf*|[LlmActor](#schemallmactor)|false|none|none|

<h2 id="tocS_PublicAssignmentMessage">PublicAssignmentMessage</h2>
<!-- backwards compatibility -->
<a id="schemapublicassignmentmessage"></a>
<a id="schema_PublicAssignmentMessage"></a>
<a id="tocSpublicassignmentmessage"></a>
<a id="tocspublicassignmentmessage"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|A boolean indicating whether this message is archived.|
|assignedFrom|string|false|none|The identifier of the actor from whom the conversation was assigned.|
|assignedTo|string|false|none|The identifier of the actor to whom the conversation is assigned.|
|client|[PublicClient](#schemapublicclient)|true|none|none|
|conversationsThreadId|string|true|none|The unique identifier of the conversation thread associated with this message.|
|createdAt|string(date-time)|true|none|The date and time when this message was created, in ISO 8601 format.|
|createdBy|string|true|none|The identifier of the actor who created this message.|
|id|string|true|none|The unique identifier for this assignment message.|
|recipients|[[PublicRecipient](#schemapublicrecipient)]|true|none|An array of recipients involved in this message, each represented by a PublicRecipient object.|
|senders|[[PublicSender](#schemapublicsender)]|true|none|An array of senders involved in this message, each represented by a PublicSender object.|
|type|string|true|none|The type of message, which is 'ASSIGNMENT'.|
|updatedAt|string(date-time)|false|none|The date and time when this message was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ASSIGNMENT|

<h2 id="tocS_PublicChannel">PublicChannel</h2>
<!-- backwards compatibility -->
<a id="schemapublicchannel"></a>
<a id="schema_PublicChannel"></a>
<a id="tocSpublicchannel"></a>
<a id="tocspublicchannel"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the channel, represented as a string.|
|name|string|true|none|The name of the channel, represented as a string.|

<h2 id="tocS_PublicChannelAccount">PublicChannelAccount</h2>
<!-- backwards compatibility -->
<a id="schemapublicchannelaccount"></a>
<a id="schema_PublicChannelAccount"></a>
<a id="tocSpublicchannelaccount"></a>
<a id="tocspublicchannelaccount"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|A boolean indicating whether the channel account is currently active.|
|archived|boolean|true|none|A boolean indicating whether the channel account is archived.|
|archivedAt|string(date-time)|false|none|The date and time when the channel account was archived, in ISO 8601 format.|
|authorized|boolean|true|none|A boolean indicating whether the channel account is authorized.|
|channelId|string|true|none|The unique identifier for the channel associated with this account, represented as a string.|
|createdAt|string(date-time)|true|none|The date and time when the channel account was created, in ISO 8601 format.|
|deliveryIdentifier|[PublicDeliveryIdentifier](#schemapublicdeliveryidentifier)|false|none|none|
|id|string|true|none|The unique identifier for the channel account, represented as a string.|
|inboxId|string|true|none|The unique identifier for the inbox associated with this channel account, represented as a string.|
|name|string|true|none|The name of the channel account, represented as a string.|

<h2 id="tocS_PublicClient">PublicClient</h2>
<!-- backwards compatibility -->
<a id="schemapublicclient"></a>
<a id="schema_PublicClient"></a>
<a id="tocSpublicclient"></a>
<a id="tocspublicclient"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientType|string|true|none|The type of client interacting with the API. Valid values include 'HUBSPOT', 'SYSTEM', 'INTEGRATION', and 'UNKNOWN'.|
|integrationAppId|integer(int32)|false|none|An optional identifier for the integration application associated with the client. It is an integer value.|

#### Enumerated Values

|Property|Value|
|---|---|
|clientType|HUBSPOT|
|clientType|INTEGRATION|
|clientType|SYSTEM|
|clientType|UNKNOWN|

<h2 id="tocS_PublicComment">PublicComment</h2>
<!-- backwards compatibility -->
<a id="schemapubliccomment"></a>
<a id="schema_PublicComment"></a>
<a id="tocSpubliccomment"></a>
<a id="tocspubliccomment"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|A boolean indicating whether the comment is archived.|
|attachments|[[PublicFile](#schemapublicfile) \| [PublicLocation](#schemapubliclocation) \| [PublicContact](#schemapubliccontact) \| [PublicUnsupportedContent](#schemapublicunsupportedcontent) \| [PublicMessageHeader](#schemapublicmessageheader) \| [PublicQuickReplies](#schemapublicquickreplies) \| [PublicWhatsAppTemplateMetadata](#schemapublicwhatsapptemplatemetadata) \| [PublicSocialMetadataAttachment](#schemapublicsocialmetadataattachment)]|true|none|An array of attachments associated with the comment, which can include files, locations, contacts, and other types of content.|
|client|[PublicClient](#schemapublicclient)|true|none|none|
|conversationsThreadId|string|true|none|The unique identifier of the conversation thread to which this comment belongs.|
|createdAt|string(date-time)|true|none|The date and time when the comment was created, in ISO 8601 format.|
|createdBy|string|true|none|The identifier of the user who created the comment.|
|id|string|true|none|The unique identifier for the comment.|
|recipients|[[PublicRecipient](#schemapublicrecipient)]|true|none|An array of recipients associated with the comment, each represented by a PublicRecipient object.|
|richText|string|true|none|The rich text content of the comment, which may include formatting.|
|senders|[[PublicSender](#schemapublicsender)]|true|none|An array of senders associated with the comment, each represented by a PublicSender object.|
|text|string|true|none|The plain text content of the comment.|
|type|string|true|none|The type of the message, which is always 'COMMENT' for this component.|
|updatedAt|string(date-time)|false|none|The date and time when the comment was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|COMMENT|

<h2 id="tocS_PublicCommentEgg">PublicCommentEgg</h2>
<!-- backwards compatibility -->
<a id="schemapubliccommentegg"></a>
<a id="schema_PublicCommentEgg"></a>
<a id="tocSpubliccommentegg"></a>
<a id="tocspubliccommentegg"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[PublicFileEgg](#schemapublicfileegg) \| [PublicQuickRepliesEgg](#schemapublicquickrepliesegg) \| [PublicSocialMediaEgg](#schemapublicsocialmediaegg)]|true|none|An array of attachments associated with the comment. Each attachment can be a file, quick reply, or social media metadata.|
|richText|string|false|none|A string containing the rich text content of the comment, allowing for formatting.|
|text|string|true|none|A string containing the plain text content of the comment.|
|type|string|true|none|A string indicating the type of the object, which is 'COMMENT' by default.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|COMMENT|

<h2 id="tocS_PublicContact">PublicContact</h2>
<!-- backwards compatibility -->
<a id="schemapubliccontact"></a>
<a id="schema_PublicContact"></a>
<a id="tocSpubliccontact"></a>
<a id="tocspubliccontact"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactProfile|[ContactProfile](#schemacontactprofile)|true|none|none|
|type|string|true|none|A string indicating the type of the object, which is 'CONTACT' by default.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CONTACT|

<h2 id="tocS_PublicConversationsMessage">PublicConversationsMessage</h2>
<!-- backwards compatibility -->
<a id="schemapublicconversationsmessage"></a>
<a id="schema_PublicConversationsMessage"></a>
<a id="tocSpublicconversationsmessage"></a>
<a id="tocspublicconversationsmessage"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|A boolean indicating whether this message is archived.|
|attachments|[[PublicFile](#schemapublicfile) \| [PublicLocation](#schemapubliclocation) \| [PublicContact](#schemapubliccontact) \| [PublicUnsupportedContent](#schemapublicunsupportedcontent) \| [PublicMessageHeader](#schemapublicmessageheader) \| [PublicQuickReplies](#schemapublicquickreplies) \| [PublicWhatsAppTemplateMetadata](#schemapublicwhatsapptemplatemetadata) \| [PublicSocialMetadataAttachment](#schemapublicsocialmetadataattachment)]|true|none|An array of attachments included with this message, which can be of various types such as files, locations, or social media metadata.|
|channelAccountId|string|true|none|The identifier of the channel account associated with this message.|
|channelId|string|true|none|The identifier of the channel through which this message was sent.|
|client|[PublicClient](#schemapublicclient)|true|none|none|
|conversationsThreadId|string|true|none|The identifier of the conversation thread to which this message belongs.|
|createdAt|string(date-time)|true|none|The date and time when this message was created, in ISO 8601 format.|
|createdBy|string|true|none|The identifier of the actor who created this message.|
|direction|string|true|none|The direction of the message, indicating whether it is 'INCOMING' or 'OUTGOING'.|
|id|string|true|none|The unique identifier for this message.|
|inReplyToId|string|false|none|The identifier of the message to which this message is a reply, if applicable.|
|recipients|[[PublicRecipient](#schemapublicrecipient)]|true|none|An array of recipients of this message, each represented as a PublicRecipient object.|
|richText|string|false|none|The rich text content of the message, which may include formatting.|
|senders|[[PublicSender](#schemapublicsender)]|true|none|An array of senders involved in this message, each represented as a PublicSender object.|
|status|[PublicMessageStatus](#schemapublicmessagestatus)|false|none|none|
|subject|string|false|none|The subject of the message, if applicable.|
|text|string|true|none|The plain text content of the message.|
|truncationStatus|string|true|none|Indicates the truncation status of the message content, with possible values being 'NOT_TRUNCATED', 'TRUNCATED_TO_MOST_RECENT_REPLY', or 'TRUNCATED'.|
|type|string|true|none|The type of the message, which is always 'MESSAGE'.|
|updatedAt|string(date-time)|false|none|The date and time when this message was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|INCOMING|
|direction|OUTGOING|
|truncationStatus|NOT_TRUNCATED|
|truncationStatus|TRUNCATED|
|truncationStatus|TRUNCATED_TO_MOST_RECENT_REPLY|
|type|MESSAGE|

<h2 id="tocS_PublicConversationsMessageEgg">PublicConversationsMessageEgg</h2>
<!-- backwards compatibility -->
<a id="schemapublicconversationsmessageegg"></a>
<a id="schema_PublicConversationsMessageEgg"></a>
<a id="tocSpublicconversationsmessageegg"></a>
<a id="tocspublicconversationsmessageegg"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[PublicFileEgg](#schemapublicfileegg) \| [PublicQuickRepliesEgg](#schemapublicquickrepliesegg) \| [PublicSocialMediaEgg](#schemapublicsocialmediaegg)]|true|none|An array of attachments associated with the message. Each attachment can be a file, quick reply, or social media metadata.|
|channelAccountId|string|true|none|A string representing the unique identifier of the channel account used to send the message.|
|channelId|string|true|none|A string representing the unique identifier of the channel through which the message is sent.|
|recipients|[[PublicRecipientEgg](#schemapublicrecipientegg)]|true|none|An array of recipient objects representing the intended recipients of the message.|
|richText|string|false|none|A string containing the rich text content of the message.|
|senderActorId|string|true|none|A string representing the unique identifier of the sender actor.|
|subject|string|false|none|A string representing the subject of the message.|
|text|string|true|none|A string containing the plain text content of the message.|
|type|string|true|none|A string indicating the type of message. The default value is 'MESSAGE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MESSAGE|

<h2 id="tocS_PublicDeliveryIdentifier">PublicDeliveryIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemapublicdeliveryidentifier"></a>
<a id="schema_PublicDeliveryIdentifier"></a>
<a id="tocSpublicdeliveryidentifier"></a>
<a id="tocspublicdeliveryidentifier"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|A string indicating the type of delivery identifier. Valid values include 'HS_EMAIL_ADDRESS', 'HS_PHONE_NUMBER', 'HS_SHORT_CODE', and 'CHANNEL_SPECIFIC_OPAQUE_ID'.|
|value|string|true|none|A string representing the actual value of the delivery identifier, such as an email address or phone number.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CHANNEL_SPECIFIC_OPAQUE_ID|
|type|HS_EMAIL_ADDRESS|
|type|HS_PHONE_NUMBER|
|type|HS_SHORT_CODE|

<h2 id="tocS_PublicFile">PublicFile</h2>
<!-- backwards compatibility -->
<a id="schemapublicfile"></a>
<a id="schema_PublicFile"></a>
<a id="tocSpublicfile"></a>
<a id="tocspublicfile"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileId|string|true|none|A string representing the unique identifier for the file.|
|fileUsageType|string|true|none|A string indicating the usage type of the file. Valid values include 'STICKER', 'VOICE_RECORDING', 'IMAGE', 'AUDIO', and 'OTHER'.|
|name|string|false|none|A string representing the name of the file.|
|type|string|true|none|A string indicating the type of the object, which is 'FILE' by default.|
|url|string|false|none|A string representing the URL where the file can be accessed.|

#### Enumerated Values

|Property|Value|
|---|---|
|fileUsageType|AUDIO|
|fileUsageType|IMAGE|
|fileUsageType|OTHER|
|fileUsageType|STICKER|
|fileUsageType|VOICE_RECORDING|
|type|FILE|

<h2 id="tocS_PublicFileEgg">PublicFileEgg</h2>
<!-- backwards compatibility -->
<a id="schemapublicfileegg"></a>
<a id="schema_PublicFileEgg"></a>
<a id="tocSpublicfileegg"></a>
<a id="tocspublicfileegg"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileId|string|true|none|A string representing the unique identifier of the file.|
|type|string|true|none|A string indicating the type of the component, which is always 'FILE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FILE|

<h2 id="tocS_PublicInbox">PublicInbox</h2>
<!-- backwards compatibility -->
<a id="schemapublicinbox"></a>
<a id="schema_PublicInbox"></a>
<a id="tocSpublicinbox"></a>
<a id="tocspublicinbox"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|A boolean indicating whether the inbox is archived.|
|archivedAt|string(date-time)|false|none|The date and time when the inbox was archived, in ISO 8601 format. This property is optional.|
|createdAt|string(date-time)|true|none|The date and time when the inbox was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for the inbox. It is a string.|
|name|string|true|none|The name of the inbox. It is a string.|
|type|string|true|none|The type of the inbox, which can be either 'INBOX' or 'HELP_DESK'.|
|updatedAt|string(date-time)|true|none|The date and time when the inbox was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|HELP_DESK|
|type|INBOX|

<h2 id="tocS_PublicLocation">PublicLocation</h2>
<!-- backwards compatibility -->
<a id="schemapubliclocation"></a>
<a id="schema_PublicLocation"></a>
<a id="tocSpubliclocation"></a>
<a id="tocspubliclocation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|A string providing the address of the location.|
|latitude|number|true|none|A number indicating the latitude of the location.|
|longitude|number|true|none|A number indicating the longitude of the location.|
|name|string|false|none|A string representing the name of the location.|
|type|string|true|none|A string representing the type of the component, which is 'LOCATION' by default.|
|url|string|false|none|A string containing a URL associated with the location.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|LOCATION|

<h2 id="tocS_PublicMessage">PublicMessage</h2>
<!-- backwards compatibility -->
<a id="schemapublicmessage"></a>
<a id="schema_PublicMessage"></a>
<a id="tocSpublicmessage"></a>
<a id="tocspublicmessage"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PublicConversationsMessage](#schemapublicconversationsmessage)|false|none|none|
|*oneOf*|[PublicComment](#schemapubliccomment)|false|none|none|
|*oneOf*|[PublicWelcomeMessage](#schemapublicwelcomemessage)|false|none|none|
|*oneOf*|[PublicAssignmentMessage](#schemapublicassignmentmessage)|false|none|none|
|*oneOf*|[PublicThreadStatusChange](#schemapublicthreadstatuschange)|false|none|none|
|*oneOf*|[PublicThreadInboxChange](#schemapublicthreadinboxchange)|false|none|none|

<h2 id="tocS_PublicMessageContent">PublicMessageContent</h2>
<!-- backwards compatibility -->
<a id="schemapublicmessagecontent"></a>
<a id="schema_PublicMessageContent"></a>
<a id="tocSpublicmessagecontent"></a>
<a id="tocspublicmessagecontent"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|richText|string|false|none|A string representing the rich text content of the message, which may include formatting and other rich text features.|
|text|string|false|none|A string representing the plain text content of the message.|

<h2 id="tocS_PublicMessageEgg">PublicMessageEgg</h2>
<!-- backwards compatibility -->
<a id="schemapublicmessageegg"></a>
<a id="schema_PublicMessageEgg"></a>
<a id="tocSpublicmessageegg"></a>
<a id="tocspublicmessageegg"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PublicConversationsMessageEgg](#schemapublicconversationsmessageegg)|false|none|none|
|*oneOf*|[PublicCommentEgg](#schemapubliccommentegg)|false|none|none|

<h2 id="tocS_PublicMessageFailureDetails">PublicMessageFailureDetails</h2>
<!-- backwards compatibility -->
<a id="schemapublicmessagefailuredetails"></a>
<a id="schema_PublicMessageFailureDetails"></a>
<a id="tocSpublicmessagefailuredetails"></a>
<a id="tocspublicmessagefailuredetails"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessage|string|false|none|A string containing a description of the error encountered during message processing.|
|errorMessageTokens|object|true|none|An object containing key-value pairs where each key is a token name and each value is a string. These tokens provide additional context or details related to the error message.|

<h2 id="tocS_PublicMessageHeader">PublicMessageHeader</h2>
<!-- backwards compatibility -->
<a id="schemapublicmessageheader"></a>
<a id="schema_PublicMessageHeader"></a>
<a id="tocSpublicmessageheader"></a>
<a id="tocspublicmessageheader"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileId|integer(int64)|false|none|An integer representing the ID of a file associated with the message header, formatted as an int64.|
|text|string|false|none|A string containing the text content of the message header.|
|type|string|true|none|A string indicating the type of the message header. The default and only valid value is 'MESSAGE_HEADER'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MESSAGE_HEADER|

<h2 id="tocS_PublicMessageStatus">PublicMessageStatus</h2>
<!-- backwards compatibility -->
<a id="schemapublicmessagestatus"></a>
<a id="schema_PublicMessageStatus"></a>
<a id="tocSpublicmessagestatus"></a>
<a id="tocspublicmessagestatus"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failureDetails|[PublicMessageFailureDetails](#schemapublicmessagefailuredetails)|false|none|none|
|statusType|string|true|none|The type of status for the message. Valid values include 'SENT', 'FAILED', 'RECEIVED', and 'READ'.|

#### Enumerated Values

|Property|Value|
|---|---|
|statusType|FAILED|
|statusType|READ|
|statusType|RECEIVED|
|statusType|SENT|

<h2 id="tocS_PublicQuickReplies">PublicQuickReplies</h2>
<!-- backwards compatibility -->
<a id="schemapublicquickreplies"></a>
<a id="schema_PublicQuickReplies"></a>
<a id="tocSpublicquickreplies"></a>
<a id="tocspublicquickreplies"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowMultiSelect|boolean|true|none|A boolean indicating whether the user can select multiple quick replies at once.|
|allowUserInput|boolean|true|none|A boolean indicating whether the user is allowed to input their own response in addition to selecting from the quick replies.|
|quickReplies|[[QuickReply](#schemaquickreply)]|true|none|An array of QuickReply objects, each representing a single quick reply option available to the user.|
|type|string|true|none|A string indicating the type of the component, with a default value of 'QUICK_REPLIES'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|QUICK_REPLIES|

<h2 id="tocS_PublicQuickRepliesEgg">PublicQuickRepliesEgg</h2>
<!-- backwards compatibility -->
<a id="schemapublicquickrepliesegg"></a>
<a id="schema_PublicQuickRepliesEgg"></a>
<a id="tocSpublicquickrepliesegg"></a>
<a id="tocspublicquickrepliesegg"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quickReplies|[[QuickReply](#schemaquickreply)]|true|none|An array of QuickReply objects, each representing an individual quick reply option available to the user.|
|type|string|true|none|A string indicating the type of the component, which is 'QUICK_REPLIES'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|QUICK_REPLIES|

<h2 id="tocS_PublicRecipient">PublicRecipient</h2>
<!-- backwards compatibility -->
<a id="schemapublicrecipient"></a>
<a id="schema_PublicRecipient"></a>
<a id="tocSpublicrecipient"></a>
<a id="tocspublicrecipient"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actorId|string|false|none|The unique identifier for the actor, represented as a string.|
|deliveryIdentifier|[PublicDeliveryIdentifier](#schemapublicdeliveryidentifier)|true|none|none|
|name|string|false|none|The name of the recipient, represented as a string.|
|recipientField|string|false|none|A string representing a specific field related to the recipient.|

<h2 id="tocS_PublicRecipientEgg">PublicRecipientEgg</h2>
<!-- backwards compatibility -->
<a id="schemapublicrecipientegg"></a>
<a id="schema_PublicRecipientEgg"></a>
<a id="tocSpublicrecipientegg"></a>
<a id="tocspublicrecipientegg"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actorId|string|false|none|The unique identifier for the actor, represented as a string.|
|deliveryIdentifier|[PublicDeliveryIdentifier](#schemapublicdeliveryidentifier)|false|none|none|
|deliveryIdentifiers|[[PublicDeliveryIdentifier](#schemapublicdeliveryidentifier)]|true|none|An array of delivery identifiers, each represented by a PublicDeliveryIdentifier object, used to specify the methods or channels through which the recipient can receive messages.|
|name|string|false|none|The name of the recipient, represented as a string.|
|recipientField|string|false|none|A field associated with the recipient, represented as a string.|

<h2 id="tocS_PublicSender">PublicSender</h2>
<!-- backwards compatibility -->
<a id="schemapublicsender"></a>
<a id="schema_PublicSender"></a>
<a id="tocSpublicsender"></a>
<a id="tocspublicsender"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actorId|string|false|none|The unique identifier for the sender, represented as a string.|
|deliveryIdentifier|[PublicDeliveryIdentifier](#schemapublicdeliveryidentifier)|false|none|none|
|name|string|false|none|The name of the sender, represented as a string.|
|senderField|string|false|none|A string field associated with the sender, purpose unspecified.|

<h2 id="tocS_PublicSocialMediaEgg">PublicSocialMediaEgg</h2>
<!-- backwards compatibility -->
<a id="schemapublicsocialmediaegg"></a>
<a id="schema_PublicSocialMediaEgg"></a>
<a id="tocSpublicsocialmediaegg"></a>
<a id="tocspublicsocialmediaegg"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|socialMetadata|[SocialMetadata](#schemasocialmetadata)|true|none|none|
|type|string|true|none|A string that specifies the type of the component. The default value is 'SOCIAL_MEDIA_METADATA'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SOCIAL_MEDIA_METADATA|

<h2 id="tocS_PublicSocialMetadataAttachment">PublicSocialMetadataAttachment</h2>
<!-- backwards compatibility -->
<a id="schemapublicsocialmetadataattachment"></a>
<a id="schema_PublicSocialMetadataAttachment"></a>
<a id="tocSpublicsocialmetadataattachment"></a>
<a id="tocspublicsocialmetadataattachment"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|socialMetadata|[SocialMetadata](#schemasocialmetadata)|true|none|none|
|type|string|true|none|A string indicating the type of metadata, which is always 'SOCIAL_MEDIA_METADATA'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SOCIAL_MEDIA_METADATA|

<h2 id="tocS_PublicThread">PublicThread</h2>
<!-- backwards compatibility -->
<a id="schemapublicthread"></a>
<a id="schema_PublicThread"></a>
<a id="tocSpublicthread"></a>
<a id="tocspublicthread"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|A boolean indicating whether the thread is archived.|
|assignedTo|string|false|none|The identifier of the user to whom the thread is assigned.|
|associatedContactId|string|true|none|The identifier of the contact associated with the thread.|
|closedAt|string(date-time)|false|none|The date and time when the thread was closed, in ISO 8601 format.|
|createdAt|string(date-time)|true|none|The date and time when the thread was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for the conversation thread.|
|inboxId|string|true|none|The identifier of the inbox where the thread is located.|
|latestMessageReceivedTimestamp|string(date-time)|false|none|The date and time when the latest message was received, in ISO 8601 format.|
|latestMessageSentTimestamp|string(date-time)|false|none|The date and time when the latest message was sent, in ISO 8601 format.|
|latestMessageTimestamp|string(date-time)|false|none|The date and time of the latest message in the thread, in ISO 8601 format.|
|originalChannelAccountId|string|true|none|The identifier of the original channel account associated with the thread.|
|originalChannelId|string|true|none|The identifier of the original channel where the thread was initiated.|
|spam|boolean|true|none|A boolean indicating whether the thread is marked as spam.|
|status|string|true|none|The current status of the thread. Valid values include 'OPEN' and 'CLOSED'.|
|threadAssociations|[PublicThreadAssociations](#schemapublicthreadassociations)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CLOSED|
|status|OPEN|

<h2 id="tocS_PublicThreadAssignRequest">PublicThreadAssignRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicthreadassignrequest"></a>
<a id="schema_PublicThreadAssignRequest"></a>
<a id="tocSpublicthreadassignrequest"></a>
<a id="tocspublicthreadassignrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actorId|string|true|none|The unique identifier of the actor to be assigned to the thread. It is a required string property.|

<h2 id="tocS_PublicThreadAssociations">PublicThreadAssociations</h2>
<!-- backwards compatibility -->
<a id="schemapublicthreadassociations"></a>
<a id="schema_PublicThreadAssociations"></a>
<a id="tocSpublicthreadassociations"></a>
<a id="tocspublicthreadassociations"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatedTicketId|string|false|none|The unique identifier for the associated ticket, represented as a string.|

<h2 id="tocS_PublicThreadInboxChange">PublicThreadInboxChange</h2>
<!-- backwards compatibility -->
<a id="schemapublicthreadinboxchange"></a>
<a id="schema_PublicThreadInboxChange"></a>
<a id="tocSpublicthreadinboxchange"></a>
<a id="tocspublicthreadinboxchange"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|A boolean indicating whether this inbox change event has been archived.|
|client|[PublicClient](#schemapublicclient)|true|none|none|
|conversationsThreadId|string|true|none|The unique identifier for the conversation thread associated with this inbox change.|
|createdAt|string(date-time)|true|none|The date and time when this inbox change was created, in ISO 8601 format.|
|createdBy|string|true|none|The identifier of the user or system that created this inbox change.|
|fromInboxId|string|true|none|The unique identifier of the inbox from which the thread is moved.|
|id|string|true|none|The unique identifier for this inbox change event.|
|recipients|[[PublicRecipient](#schemapublicrecipient)]|true|none|An array of objects representing the recipients involved in the conversation thread.|
|senders|[[PublicSender](#schemapublicsender)]|true|none|An array of objects representing the senders involved in the conversation thread.|
|toInboxId|string|true|none|The unique identifier of the inbox to which the thread is moved.|
|type|string|true|none|A string indicating the type of change, which is 'THREAD_INBOX_CHANGE'.|
|updatedAt|string(date-time)|false|none|The date and time when this inbox change was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|THREAD_INBOX_CHANGE|

<h2 id="tocS_PublicThreadStatusChange">PublicThreadStatusChange</h2>
<!-- backwards compatibility -->
<a id="schemapublicthreadstatuschange"></a>
<a id="schema_PublicThreadStatusChange"></a>
<a id="tocSpublicthreadstatuschange"></a>
<a id="tocspublicthreadstatuschange"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|A boolean indicating whether this status change has been archived.|
|client|[PublicClient](#schemapublicclient)|true|none|none|
|conversationsThreadId|string|true|none|The unique identifier of the conversation thread whose status is being changed.|
|createdAt|string(date-time)|true|none|The date and time when this status change was created, in ISO 8601 format.|
|createdBy|string|true|none|The identifier of the user or system that created this status change.|
|id|string|true|none|The unique identifier for this status change.|
|newStatus|string|true|none|A string representing the new status of the thread. Valid values include 'OPEN' and 'CLOSED'.|
|recipients|[[PublicRecipient](#schemapublicrecipient)]|true|none|An array of objects representing the recipients involved in this status change.|
|senders|[[PublicSender](#schemapublicsender)]|true|none|An array of objects representing the senders involved in this status change.|
|type|string|true|none|A string indicating the type of change. Defaults to 'THREAD_STATUS_CHANGE'.|
|updatedAt|string(date-time)|false|none|The date and time when this status change was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|newStatus|CLOSED|
|newStatus|OPEN|
|type|THREAD_STATUS_CHANGE|

<h2 id="tocS_PublicThreadUpdateRequest">PublicThreadUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicthreadupdaterequest"></a>
<a id="schema_PublicThreadUpdateRequest"></a>
<a id="tocSpublicthreadupdaterequest"></a>
<a id="tocspublicthreadupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|A boolean indicating whether the thread is archived.|
|status|string|false|none|The current status of the thread. Valid values include 'OPEN' and 'CLOSED'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CLOSED|
|status|OPEN|

<h2 id="tocS_PublicUnsupportedContent">PublicUnsupportedContent</h2>
<!-- backwards compatibility -->
<a id="schemapublicunsupportedcontent"></a>
<a id="schema_PublicUnsupportedContent"></a>
<a id="tocSpublicunsupportedcontent"></a>
<a id="tocspublicunsupportedcontent"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|A string indicating the type of content. The default value is 'UNSUPPORTED_CONTENT', and it must be 'UNSUPPORTED_CONTENT'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNSUPPORTED_CONTENT|

<h2 id="tocS_PublicWelcomeMessage">PublicWelcomeMessage</h2>
<!-- backwards compatibility -->
<a id="schemapublicwelcomemessage"></a>
<a id="schema_PublicWelcomeMessage"></a>
<a id="tocSpublicwelcomemessage"></a>
<a id="tocspublicwelcomemessage"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|A boolean indicating whether this welcome message is archived.|
|channelAccountId|string|true|none|The unique identifier for the channel account associated with this welcome message.|
|channelId|string|true|none|The unique identifier for the channel through which this welcome message is sent.|
|client|[PublicClient](#schemapublicclient)|true|none|none|
|conversationsThreadId|string|true|none|The unique identifier for the conversation thread to which this welcome message belongs.|
|createdAt|string(date-time)|true|none|The date and time when this welcome message was created, in ISO 8601 format.|
|createdBy|string|true|none|The identifier of the user or system that created this welcome message.|
|id|string|true|none|The unique identifier for this welcome message.|
|recipients|[[PublicRecipient](#schemapublicrecipient)]|true|none|An array of objects representing the recipients of this welcome message.|
|richText|string|false|none|The rich text content of the welcome message, which may include formatting.|
|senders|[[PublicSender](#schemapublicsender)]|true|none|An array of objects representing the senders of this welcome message.|
|text|string|true|none|The plain text content of the welcome message.|
|type|string|true|none|A string indicating the type of message, which is 'WELCOME_MESSAGE' by default.|
|updatedAt|string(date-time)|false|none|The date and time when this welcome message was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|WELCOME_MESSAGE|

<h2 id="tocS_PublicWhatsAppTemplateMetadata">PublicWhatsAppTemplateMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapublicwhatsapptemplatemetadata"></a>
<a id="schema_PublicWhatsAppTemplateMetadata"></a>
<a id="tocSpublicwhatsapptemplatemetadata"></a>
<a id="tocspublicwhatsapptemplatemetadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentId|integer(int64)|false|none|An integer representing the ID of the content associated with the template. This is a 64-bit integer.|
|crmObjectIds|object|true|none|An object that maps CRM object names to their respective IDs, where each ID is a 64-bit integer.|
|mappedTemplateId|integer(int64)|false|none|An integer representing the ID of the mapped template. This is a 64-bit integer.|
|parameters|object|true|none|An object containing key-value pairs where each key is a parameter name and each value is a string representing the parameter value.|
|rootMicId|integer(int64)|false|none|An integer representing the root MIC ID associated with the template. This is a 64-bit integer.|
|type|string|true|none|A string representing the type of the metadata, which is always 'WHATSAPP_TEMPLATE_METADATA'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|WHATSAPP_TEMPLATE_METADATA|

<h2 id="tocS_QuickReply">QuickReply</h2>
<!-- backwards compatibility -->
<a id="schemaquickreply"></a>
<a id="schema_QuickReply"></a>
<a id="tocSquickreply"></a>
<a id="tocsquickreply"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|A human-readable label for the quick reply, displayed to the user.|
|value|string|true|none|The actual content or data of the quick reply, represented as a string.|
|valueType|string|true|none|Indicates the type of the value, which can be either 'TEXT' or 'URL'.|

#### Enumerated Values

|Property|Value|
|---|---|
|valueType|TEXT|
|valueType|URL|

<h2 id="tocS_SocialMetadata">SocialMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasocialmetadata"></a>
<a id="schema_SocialMetadata"></a>
<a id="tocSsocialmetadata"></a>
<a id="tocssocialmetadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of the media content.|
|id|string|false|none|A unique identifier for the media.|
|mediaTitle|string|false|none|The title of the media content.|
|mediaType|string|true|none|The type of media represented, such as 'PHOTO', 'VIDEO', 'CAROUSEL', etc. This is a required field.|
|mediaUrl|string|false|none|The URL where the media can be accessed.|
|mediaUrlString|string|false|none|A string representing the URL of the media.|
|thumbnailUrl|string|false|none|The URL of the thumbnail image for the media.|

#### Enumerated Values

|Property|Value|
|---|---|
|mediaType|ARTICLE|
|mediaType|AUDIO|
|mediaType|CAROUSEL|
|mediaType|DOCUMENT|
|mediaType|GIF|
|mediaType|LINK|
|mediaType|NONE|
|mediaType|PHOTO|
|mediaType|POLL|
|mediaType|STORY|
|mediaType|VIDEO|

<h2 id="tocS_StandardError">StandardError</h2>
<!-- backwards compatibility -->
<a id="schemastandarderror"></a>
<a id="schema_StandardError"></a>
<a id="tocSstandarderror"></a>
<a id="tocsstandarderror"></a>

```json
null
```

Ye olde error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|A string indicating the category of the error.|
|context|object|true|none|An object containing additional context about the error condition, with properties as arrays of strings.|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|An array of ErrorDetail objects, providing further information about the error.|
|id|string|false|none|A string representing the unique identifier for the error.|
|links|object|true|none|An object mapping link names to associated URIs with documentation about the error or recommended remediation steps.|
|message|string|true|none|A string containing the error message.|
|status|string|true|none|The status of the error as a string.|
|subCategory|object|false|none|An object providing more specific details about the error category.|

<h2 id="tocS_SystemActor">SystemActor</h2>
<!-- backwards compatibility -->
<a id="schemasystemactor"></a>
<a id="schema_SystemActor"></a>
<a id="tocSsystemactor"></a>
<a id="tocssystemactor"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|A string that uniquely identifies the system actor.|
|type|string|true|none|A string that specifies the type of actor, which is 'SYSTEM' for this component.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SYSTEM|

<h2 id="tocS_VisitorActor">VisitorActor</h2>
<!-- backwards compatibility -->
<a id="schemavisitoractor"></a>
<a id="schema_VisitorActor"></a>
<a id="tocSvisitoractor"></a>
<a id="tocsvisitoractor"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|string|false|none|A string representing the URL of the visitor's avatar image.|
|email|string|false|none|A string containing the email address of the visitor.|
|id|string|true|none|A string representing the unique identifier for the visitor actor.|
|name|string|false|none|A string containing the name of the visitor.|
|type|string|true|none|A string indicating the type of actor, which is 'VISITOR' for this component.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|VISITOR|
